/**
 * Takets geometri, delad av fasadräknaren, takbytet och takavvattningen.
 * Ren modul utan importer, testbar med node utan bygge. Ingen publik text:
 * feltexterna ägs av den modul som anropar (valideraTak tar dem som argument).
 *
 * Spec: docs/briefer/spec-kalkyl-tak-2026-09-29.md avsnitt 2. Formlerna och
 * räkneexemplen står i docs/briefer/faktablad/rakna-takbyte.md avsnitt 2 och 3.
 *
 * Inget avrundas i räkningen. Avrundningen görs vid visningen (m2Text och de
 * andra textfunktionerna längst ner).
 *
 * Testas av scripts/test-kalkyl-tak.mjs.
 */

/* ------------------------------------------------------------------ *
 * Typer
 * ------------------------------------------------------------------ */

export type Takform = 'sadel' | 'pulpet';
export type Matt = 'vinkel' | 'nock';

export interface TakIndata {
  /** L, gavel till gavel längs takfoten, fasadliv till fasadliv. */
  langdM: number;
  /** B, gavelns bredd, fasadliv till fasadliv (utvändigt, som takstolsleverantören mäter). */
  breddM: number;
  /** u_f, takfotsutsprång vågrätt från fasadlivet. */
  utsprangM: number;
  /** u_g, gavelutsprång vågrätt, per gavel. */
  gavelM: number;
  takform: Takform;
  /** Vilket av vinkel och nock som räknas. */
  matt: Matt;
  vinkelGrader: number;
  /** t, nockhöjd över takfoten vid fasadlivet (pulpet: höjdskillnaden mellan väggarna). */
  nockM: number;
}

export type TakFel = 'langd' | 'bredd' | 'utsprang' | 'gavel' | 'vinkel' | 'nock';

/* ------------------------------------------------------------------ *
 * Konstanter
 * ------------------------------------------------------------------ */

export const GRADER = Math.PI / 180;

/**
 * Takvinklar i grader, inklusive. ANTAGANDE, underlaget avsnitt 1
 * (docs/briefer/spec-kalkyl-fasadyta-2026-09-28.md). Flyttad oförändrad från
 * fasadyta.ts, som återexporterar den.
 */
export const VINKELGRANSER = { sadel: [5, 60], pulpet: [3, 30] } as const;

/**
 * Standardhuset.
 * ANTAGANDE: villan i takbytesunderlaget avsnitt 1
 * (docs/briefer/faktablad/rakna-takbyte.md). 27° är samma som
 * STANDARD.vinkelGrader i fasadyta.ts, så att talen går att jämföra. 2,3 m är
 * nockhöjden vid 27° avrundad till en decimal (4,5 · tan 27° = 2,293).
 */
export const TAK_STANDARD: TakIndata = {
  langdM: 12,
  breddM: 9,
  utsprangM: 0.5,
  gavelM: 0.4,
  takform: 'sadel',
  matt: 'vinkel',
  vinkelGrader: 27,
  nockM: 2.3,
};

/** Fältens gränser, inklusive. ANTAGANDE: takbytesunderlaget avsnitt 1. */
export const TAK_GRANSER = {
  langdM: [3, 40],
  breddM: [3, 20],
  utsprangM: [0, 1.5],
  gavelM: [0, 1.5],
} as const;

/**
 * Centrumavstånden på takstolar som förekommer.
 * Källa: Svenskt Trä, TräGuiden 1.3.1 Egentyngd, 2021-11-02,
 * https://www.traguiden.se/konstruktion/takstolshandboken/bakgrund/1.3-laster-och-lastfall/1.3.1-egentyngd/
 * "Vanligtvis används ett centrumavstånd av 1 200 mm men mindre
 * centrumavstånd, 600 och 900 mm, förekommer."
 */
export const CC_VAL = [600, 900, 1200] as const;

/**
 * Centrumavståndet som standard.
 * Källa: Svenskt Trä, TräGuiden 4.2.2 Takstolsdimensioner, 2021-11-02,
 * https://www.traguiden.se/konstruktion/takstolshandboken/takstolstyper/4.2-val-av-takkonstruktion/4.2.2takstolsdimensioner/
 * "Takstolar som är godkända och tillverkas industriellt dimensioneras och
 * används normalt för ett centrumavstånd på 1 200 mm." Och TräGuiden 1.3.1
 * ovan. Adresserna står i docs/briefer/faktablad/kunskap-takstolar.md avsnitt 3.
 */
export const CC_STANDARD = 1200;

/** Raderna i påslagstabellen, takbytesunderlaget 2.3. */
export const PASLAG_GRADER = [6, 10, 14, 18, 22, 27, 30, 34, 38, 45] as const;

/* ------------------------------------------------------------------ *
 * Geometrin (egen räkning, plan trigonometri, takbytesunderlaget 2)
 * ------------------------------------------------------------------ */

/** Nockhöjden ur vinkeln: (sadel ? B/2 : B) · tan v. */
export function nockUrVinkel(takform: Takform, v: number, B: number): number {
  return (takform === 'sadel' ? B / 2 : B) * Math.tan(v * GRADER);
}

/** Vinkeln ur nockhöjden, i grader: atan(sadel ? 2t/B : t/B). */
export function vinkelUrNock(takform: Takform, t: number, B: number): number {
  return Math.atan(takform === 'sadel' ? (2 * t) / B : t / B) / GRADER;
}

/**
 * Nockhöjden vid VINKELGRANSER, med en decimal och avrundad inåt: nedre uppåt,
 * övre nedåt (fasadytans specen 14.3 B3). Bara för feltexten; valideringen
 * står på de exakta gränserna.
 */
export function nockGranser(takform: Takform, B: number): [number, number] {
  const [vMin, vMax] = VINKELGRANSER[takform];
  return [
    Math.ceil(nockUrVinkel(takform, vMin, B) * 10 - 1e-9) / 10,
    Math.floor(nockUrVinkel(takform, vMax, B) * 10 + 1e-9) / 10,
  ];
}

export interface TakGeometri {
  takform: Takform;
  /** Den angivna eller den uträknade. */
  vinkelGrader: number;
  /** Den angivna eller den uträknade. */
  nockM: number;
  /** L · B. */
  bottenytaM2: number;
  /** P = (L + 2·u_g) · (B + 2·u_f). */
  projektionM2: number;
  /** A = P / cos v, längs lutningen. */
  takareaM2: number;
  /** (1 / cos v − 1) · 100. */
  paslagProcent: number;
  /** sadel: (B/2 + u_f) / cos v; pulpet: (B + 2·u_f) / cos v. */
  takfallslangdM: number;
  /** pulpet 1, sadel 2. */
  takfall: 1 | 2;
  /** A / takfall. */
  takareaPerTakfallM2: number;
  /** P / takfall. */
  projektionPerTakfallM2: number;
  /** L + 2·u_g, längden på en takfot. */
  rannlangdM: number;
}

/** Takets geometri. Förutsätter giltig indata (valideraTak först). */
export function raknaTak(i: TakIndata): TakGeometri {
  const L = i.langdM;
  const B = i.breddM;
  const vinkelGrader = i.matt === 'vinkel' ? i.vinkelGrader : vinkelUrNock(i.takform, i.nockM, B);
  const nockM = i.matt === 'vinkel' ? nockUrVinkel(i.takform, i.vinkelGrader, B) : i.nockM;
  const cos = Math.cos(vinkelGrader * GRADER);
  const rannlangdM = L + 2 * i.gavelM;
  const projektionM2 = rannlangdM * (B + 2 * i.utsprangM);
  const takareaM2 = projektionM2 / cos;
  const takfall: 1 | 2 = i.takform === 'sadel' ? 2 : 1;
  return {
    takform: i.takform,
    vinkelGrader,
    nockM,
    bottenytaM2: L * B,
    projektionM2,
    takareaM2,
    paslagProcent: (1 / cos - 1) * 100,
    takfallslangdM: (i.takform === 'sadel' ? B / 2 + i.utsprangM : B + 2 * i.utsprangM) / cos,
    takfall,
    takareaPerTakfallM2: takareaM2 / takfall,
    projektionPerTakfallM2: projektionM2 / takfall,
    rannlangdM,
  };
}

/**
 * Antal takstolar: ⌈L / c/c⌉ + 1, L gavel till gavel utan gavelutsprång.
 * Räknat i hela millimeter så att flyttal inte ger en takstol för mycket.
 * Egen räkning (takbytesunderlaget 3). Att den första och den sista står i
 * gavellivet är ett ANTAGANDE.
 */
export function antalTakstolar(langdM: number, ccMm: number): number {
  return Math.ceil(Math.round(langdM * 1000) / ccMm) + 1;
}

/** En rad per PASLAG_GRADER: faktor 1 / cos v, procent (faktor − 1) · 100, nock per meter tan v. */
export function paslagstabell(): { grader: number; faktor: number; procent: number; nockPerMeter: number }[] {
  return PASLAG_GRADER.map((grader) => {
    const faktor = 1 / Math.cos(grader * GRADER);
    return { grader, faktor, procent: (faktor - 1) * 100, nockPerMeter: Math.tan(grader * GRADER) };
  });
}

/* ------------------------------------------------------------------ *
 * Adressen
 * ------------------------------------------------------------------ */

/**
 * Ett tal ur adressen. null ger NaN. Mellanslag, också hårda och smala, tas
 * bort som tusentalsavgränsare, decimalkomma blir punkt, och ett efterhängt
 * m, m², m2, kvm, °, grader, mm eller kr tas bort. Tomt efter rensningen och
 * allt som inte är ett ändligt tal ger NaN.
 */
export function tillTal(s: string | null): number {
  if (s === null) return NaN;
  const rensad = s
    .replace(/[\s  ]/g, '')
    .replace(/(grader|kvm|m²|m2|mm|kr|°|m)$/i, '')
    .replace(',', '.')
    .replace('−', '-');
  if (rensad === '') return NaN;
  const n = Number(rensad);
  return Number.isFinite(n) ? n : NaN;
}

const arTakform = (v: string | null): v is Takform => v === 'sadel' || v === 'pulpet';
const arMatt = (v: string | null): v is Matt => v === 'vinkel' || v === 'nock';

/** Takets fält ur adressen (specen 2.3). */
export function lasTak(q: URLSearchParams, standard: TakIndata): TakIndata {
  const tal = (nyckel: string, std: number): number => (q.has(nyckel) ? tillTal(q.get(nyckel)) : std);
  const utsprang = (nyckel: string, std: number): number => {
    const r = q.get(nyckel);
    if (r === null) return std;
    return r.trim() === '' ? 0 : tillTal(r);
  };
  const takform = q.get('takform');
  const matt = q.get('matt');
  return {
    langdM: tal('langd', standard.langdM),
    breddM: tal('bredd', standard.breddM),
    utsprangM: utsprang('utsprang', standard.utsprangM),
    gavelM: utsprang('gavel', standard.gavelM),
    takform: arTakform(takform) ? takform : standard.takform,
    matt: arMatt(matt) ? matt : standard.matt,
    vinkelGrader: tal('vinkel', standard.vinkelGrader),
    nockM: tal('nock', standard.nockM),
  };
}

/** Talet som det skrivs i en adress: decimalkomma, inga tusental. */
export const komma = (n: number): string => String(n).replace('.', ',');

const avrundat = (n: number, decimaler: number): number => {
  const f = 10 ** decimaler;
  return Math.round(n * f) / f;
};

/**
 * Takets nycklar i adressen, i ordningen langd, bredd, utsprang, gavel,
 * takform, matt, vinkel, nock. Fältet som inte räknas skrivs som det uträknade
 * värdet ur g (vinkel med en decimal, nock med två), så att en delad länk
 * visar båda talen rätt när mottagaren byter mått. Vid g null skrivs det som
 * det står.
 */
export function takQuery(i: TakIndata, g: TakGeometri | null): URLSearchParams {
  const q = new URLSearchParams();
  q.set('langd', komma(i.langdM));
  q.set('bredd', komma(i.breddM));
  q.set('utsprang', komma(i.utsprangM));
  q.set('gavel', komma(i.gavelM));
  q.set('takform', i.takform);
  q.set('matt', i.matt);
  const vinkel = g !== null && i.matt === 'nock' ? avrundat(g.vinkelGrader, 1) : i.vinkelGrader;
  const nock = g !== null && i.matt === 'vinkel' ? avrundat(g.nockM, 2) : i.nockM;
  q.set('vinkel', komma(vinkel));
  q.set('nock', komma(nock));
  return q;
}

/* ------------------------------------------------------------------ *
 * Validering
 * ------------------------------------------------------------------ */

export interface TakFeltext {
  langd: (min: number, max: number) => string;
  bredd: (min: number, max: number) => string;
  utsprang: (min: number, max: number) => string;
  gavel: (min: number, max: number) => string;
  vinkel: (min: number, max: number) => string;
  nock: (min: number, max: number) => string;
  'nock-tal': string;
}

const inom = (v: number, g: readonly [number, number]): boolean => Number.isFinite(v) && v >= g[0] && v <= g[1];

/**
 * Samma logik som raknaFasadyta för sadel och pulpet: bara det som räknas
 * valideras, och nockens gränser räknas ur VINKELGRANSER och bredden. Är
 * bredden ogiltig och nocken ett tal får nocken inget gränsfel. Är nocken
 * inget tal blir felet texten 'nock-tal' på nyckeln nock.
 */
export function valideraTak(i: TakIndata, text: TakFeltext): Partial<Record<TakFel, string>> {
  const fel: Partial<Record<TakFel, string>> = {};
  const g = TAK_GRANSER;
  if (!inom(i.langdM, g.langdM)) fel.langd = text.langd(g.langdM[0], g.langdM[1]);
  if (!inom(i.breddM, g.breddM)) fel.bredd = text.bredd(g.breddM[0], g.breddM[1]);
  if (!inom(i.utsprangM, g.utsprangM)) fel.utsprang = text.utsprang(g.utsprangM[0], g.utsprangM[1]);
  if (!inom(i.gavelM, g.gavelM)) fel.gavel = text.gavel(g.gavelM[0], g.gavelM[1]);

  const [vMin, vMax] = VINKELGRANSER[i.takform];
  if (i.matt === 'vinkel') {
    if (!(Number.isFinite(i.vinkelGrader) && i.vinkelGrader >= vMin - 1e-9 && i.vinkelGrader <= vMax + 1e-9)) {
      fel.vinkel = text.vinkel(vMin, vMax);
    }
  } else {
    const breddGiltig = fel.bredd === undefined;
    const nockFel = (): string => {
      const [lo, hi] = nockGranser(i.takform, i.breddM);
      return text.nock(lo, hi);
    };
    if (!Number.isFinite(i.nockM) || !breddGiltig) {
      if (!(Number.isFinite(i.nockM) && i.nockM > 0)) fel.nock = text['nock-tal'];
    } else if (i.nockM <= 0) {
      fel.nock = nockFel();
    } else {
      const v = vinkelUrNock(i.takform, i.nockM, i.breddM);
      if (v < vMin - 1e-9 || v > vMax + 1e-9) fel.nock = nockFel();
    }
  }
  return fel;
}

/* ------------------------------------------------------------------ *
 * Visning
 * ------------------------------------------------------------------ */

/** Hårt mellanslag, som i src/lib/format.ts, så att "1 234,6" aldrig radbryts. */
const HART = ' ';

function medDecimaler(n: number, decimaler: number): string {
  const fast = n.toFixed(decimaler);
  const [heltal, dec] = fast.split('.');
  const grupperat = (heltal ?? '').replace(/\B(?=(\d{3})+(?!\d))/g, HART);
  return dec ? `${grupperat},${dec}` : grupperat;
}

/** Högst en decimal, utan nolla på slutet. */
function enDecimalUtanNolla(n: number): string {
  const rundat = Math.round(n * 10) / 10;
  return Number.isInteger(rundat) ? medDecimaler(rundat, 0) : medDecimaler(rundat, 1);
}

/** Högst en decimal med komma: 98.2 → "98,2", 36 → "36", 1234.56 → "1 234,6". Flyttad från fasadyta.ts. */
export function m2Text(n: number): string {
  return enDecimalUtanNolla(n);
}

/** Vinkeln i grader: heltal när talet är helt, annars en decimal. 15 → "15", 26.565 → "26,6". Flyttad från fasadyta.ts. */
export function vinkelText(n: number): string {
  return enDecimalUtanNolla(n);
}

/** Två decimaler: 5.6116 → "5,61", 2.3 → "2,30". */
export function meterText(n: number): string {
  return medDecimaler(n, 2);
}

/** Högst en decimal: 12.23 → "12,2", 15 → "15". */
export function procentText(n: number): string {
  return enDecimalUtanNolla(n);
}
