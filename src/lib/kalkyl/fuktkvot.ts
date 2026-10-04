/**
 * Fuktkvoträknaren. Ren funktion utan importer från Astro, testbar utan bygge.
 * Sidan /rakna/fuktkvot/ skickar formuläret som GET och räknar på servern, så
 * ingen rad av den här filen når klienten.
 *
 * Tre lägen:
 * - luft: träets jämviktsfuktkvot ur luftens temperatur och relativa fuktighet,
 *   ekvation (4-5) i Wood Handbook 2021, kap. 4
 * - vikt: fuktkvot och fukthalt ur vikten före och efter torkning
 * - halt: fukthalt till fuktkvot eller tillbaka
 *
 * Underlag: docs/briefer/faktablad/rakna-fuktkvot.md (godkänt av UX och bygge
 * 2026-10-04). Spec: docs/briefer/spec-kalkyl-fuktkvot-2026-10-04.md.
 * Koderna i kommentarerna (WH4, TG-S, TG-M, TG-FM, TG-TF, NV) är faktabladets
 * källkoder i avsnitt 1.
 *
 * Testas av scripts/test-kalkyl-fuktkvot.mjs mot talen i faktabladet.
 */

export type Lage = 'luft' | 'vikt' | 'halt';
export type Vilket = 'fukthalt' | 'fuktkvot';
export type Arstid = 'vinter' | 'sommar';
export type ForvalRum = 'bostad' | 'krypgrund' | 'kallare' | 'vind' | 'ute';
export type Anvandning = 'ved' | 'malning' | 'inbyggnad' | 'golv' | 'mogel' | 'rota';

export interface FuktkvotIndata {
  lage: Lage;
  /** Luftens temperatur, °C. Läge luft. */
  tempC: number;
  /** Luftens relativa fuktighet, procent. Läge luft. */
  rfProcent: number;
  /** Provbitens vikt före torkning, gram. Läge vikt. */
  vatG: number;
  /** Provbitens vikt helt torr, gram. Läge vikt. */
  torrG: number;
  /** Talet som ska räknas om, procent. Läge halt. */
  tal: number;
  /** Vad talet i tal är. Läge halt. */
  vilket: Vilket;
  /** Förvalet som fyllde temperaturen och RF, när adressen hade ett. */
  rum?: ForvalRum;
  arstid?: Arstid;
}

export type Falt = 'tempC' | 'rfProcent' | 'vatG' | 'torrG' | 'tal';

export interface Bedomning {
  anvandning: Anvandning;
  utfall: 'ok' | 'varning';
  /** Gränsen som den står i listan, satt av koden: "högst 16 %". */
  grans: string;
}

export type FuktkvotResultat =
  | {
      status: 'ok';
      lage: Lage;
      /** Fuktkvoten, procent av torr vikt. Full precision; sidan avrundar. */
      fuktkvot: number;
      /** Fukthalten, procent av våt vikt. Full precision. */
      fukthalt: number;
      /** Sant när temperaturen ligger under tabell 4-2:s lägsta, −1,1 °C. */
      extrapolerad: boolean;
      /** I ordningen ved, målning, inbyggnad, golv, mögel, röta. */
      bedomningar: Bedomning[];
      /** Sant över 30 procent fuktkvot: där etablerar sig rötsvamparna (TG-M). */
      rotaEtablerad: boolean;
      /** RF vid samma temperatur som ger 16 och 18 procent fuktkvot. Bara i läge luft. */
      rfForGranser: { rf16: number; rf18: number } | null;
    }
  | {
      status: 'fibermattnad';
      lage: 'luft';
      extrapolerad: boolean;
      /** Svaret är "över" det här talet, procent fuktkvot. */
      over: number;
      /** RF vid samma temperatur som ger 16 och 18 procent fuktkvot. */
      rfForGranser: { rf16: number; rf18: number };
    }
  | { status: 'ogiltig'; fel: Partial<Record<Falt, string>> };

/*
 * Konstanter. Källa eller ANTAGANDE i kommentaren över varje.
 */

/**
 * Ekvation (4-5), parametrarna för T i °C, ordagrant:
 * W = 349 + 1.29T + 0.0135T², K = 0.805 + 0.000736T − 0.00000273T²,
 * K1 = 6.27 − 0.00938T − 0.000303T², K2 = 1.91 + 0.0407T − 0.000293T².
 * Källa: WH4 s. 4-3, ekvation (4-5) (faktabladet 4.1). Kontrollerad mot WH4:s
 * tabell 4-2 (faktabladet 4.3).
 */
export const WH_W = [349, 1.29, 0.0135] as const;
export const WH_K = [0.805, 0.000736, -0.00000273] as const;
export const WH_K1 = [6.27, -0.00938, -0.000303] as const;
export const WH_K2 = [1.91, 0.0407, -0.000293] as const;
/** Talet 1800 i ekvation (4-5). Källa: WH4 s. 4-3 (faktabladet 4.1). */
export const WH_FAKTOR = 1800;

/**
 * Lägsta temperatur i WH4:s tabell 4-2, som ekvationen räknat fram, °C.
 * Under den räknar sidan men märker svaret som extrapolation.
 * Källa: WH4 s. 4-4, tabell 4-2, −1,1 till 132,2 °C (faktabladet 4.2).
 */
export const TABELL_MIN_TEMP_C = -1.1;

/**
 * Högsta RF i WH4:s tabell 4-2, procent. Över den visar räknaren inget exakt tal.
 * Källa: WH4 s. 4-4, tabell 4-2, 5 till 95 % RF (faktabladet 4.2).
 */
export const TABELL_MAX_RF = 95;

/**
 * Svaret över 95 % RF: "över 24 %".
 * ANTAGANDE: faktabladet 4.2, "visa 'över 24 %' eller 'nära fibermättnad'";
 * modellen ger 23,9 vid 20 °C och 95 %, TräGuidens tabell 2 ger 24.
 */
export const FIBERMATTNAD_OVER = 24;

/** Målning: ytfuktkvot högst 16 %. Källa: TG-FM och TG-S (faktabladet 5). */
export const MALNING_MAX = 16;
/** Inbyggnad: ytfuktkvot högst 18 %. Källa: TG-FM och TG-S (faktabladet 5). */
export const INBYGGNAD_MAX = 18;
/**
 * Golvbräder inomhus: målfuktkvot 8 %, partiets spridning 7,0 till 9,0 %.
 * Källa: TG-S tabell 3 och tabell 4 (SS-EN 14298) (faktabladet 5).
 */
export const GOLV_MIN = 7.0;
export const GOLV_MAX = 9.0;
/**
 * Mögel i läge luft: RF under 75 % ger inget angrepp.
 * Källa: TG-M, "Är materialet torrt och den relativa luftfuktighet lägre än 75 %
 * kan inget angrepp utvecklas." (faktabladet 5).
 */
export const MOGEL_RF = 75;
/**
 * Mögel i lägena vikt och halt: fuktkvot under 15 %, ungefär 15 % vid 75 % RF
 * och 20 °C. Källa: TG-M tabell 2 (faktabladet 4.4 och 5).
 */
export const MOGEL_FUKTKVOT = 15;
/** Röta: under 20 % fuktkvot är risken liten. Källa: TG-M (faktabladet 5, T23). */
export const ROTA_LITEN_RISK = 20;
/** Röta etablerar sig över 30 % fuktkvot. Källa: TG-M (faktabladet 5, T24). */
export const ROTA_ETABLERAD = 30;
/**
 * Ved: fukthalt 15 till 20 % är "lagom torr", under 10 % för torr.
 * Källa: NV, Elda med ved i kamin, spis och ugn, och Elda med ved i vedpanna
 * (faktabladet 5). Bara 15 till 20 är ok; under 15 och över 20 är varning
 * (specen avsnitt 10).
 */
export const VED_LAGOM_MIN = 15;
export const VED_LAGOM_MAX = 20;
export const VED_FOR_TORR = 10;

/**
 * Jämviktsfuktkvoten vid 20 °C i TräGuiden, ordagrant, för tabellen på sidan.
 * Källa: TG-M tabell 2 (75 till 95 %) och TG-S (65 %, "12 - 13 % för gran- och
 * furuvirke") (faktabladet 4.4 och 4.8).
 */
export const TRAGUIDEN_20C: Readonly<Record<number, { lagst: number; hogst: number }>> = {
  65: { lagst: 12, hogst: 13 },
  75: { lagst: 15, hogst: 15 },
  80: { lagst: 16, hogst: 16 },
  85: { lagst: 18, hogst: 18 },
  90: { lagst: 21, hogst: 21 },
  95: { lagst: 24, hogst: 24 },
};

/** Raderna i tabellen vid 20 °C på sidan (specen avsnitt 4, efter punkt 2). */
export const TABELL_RF = [30, 40, 50, 60, 65, 70, 75, 80, 85, 90, 95] as const;
export const TABELL_TEMP_C = 20;

export const STANDARD: FuktkvotIndata = {
  lage: 'luft',
  tempC: 20,
  rfProcent: 65,
  vatG: 1100,
  torrG: 1000,
  tal: 18,
  vilket: 'fukthalt',
};

/*
 * Inmatningsgränser. ANTAGANDE (faktabladet 2.3 och 4.2, beslutade i specen
 * avsnitt 1). −20 till 40 °C täcker en svensk krypgrund och kallvind vintertid;
 * under −1,1 är det extrapolation. RF 5 är tabell 4-2:s lägsta. Fukthalten kan
 * aldrig nå 100 %, och fuktkvoten i rått virke kan gå över 200 % (WH4).
 */
export const GRANSER = {
  tempC: [-20, 40],
  rfProcent: [5, 100],
  torrG: [0, 100_000],
  vatG: [0, 1_000_000],
  fukthalt: [0, 95],
  fuktkvot: [0, 300],
} as const;

/*
 * Förvalen (specen avsnitt 1, beslutade med SEO 2026-10-04). RF är källans övre
 * gräns, alltså det fuktigaste normala läget. Temperaturen är ANTAGANDE i alla.
 * En post utan arstid gäller året runt och matchar vilken arstid som helst.
 */
export interface Forval {
  rum: ForvalRum;
  arstid?: Arstid;
  tempC: number;
  rfProcent: number;
}

export const FORVAL: readonly Forval[] = [
  // Källa för RF: TG-TF, 10–25 % i uppvärmda rum på vintern. ANTAGANDE: 20 °C.
  { rum: 'bostad', arstid: 'vinter', tempC: 20, rfProcent: 25 },
  // Källa för RF: TG-TF, 45–60 % i uppvärmda rum på sommaren. ANTAGANDE: 20 °C.
  { rum: 'bostad', arstid: 'sommar', tempC: 20, rfProcent: 60 },
  // Källa för RF: Lars Olsson, SP, Bygg & teknik 8/06, "sänka RF till säkra nivåer
  // (cirka 75 procent)" (faktablad/guider-fukt-i-krypgrund.md 1.3). Kopierad från
  // NORMALT_PER_RUM i daggpunkt.ts, som varken exporterar titeln eller har en adress.
  // ANTAGANDE: 15 °C.
  { rum: 'krypgrund', tempC: 15, rfProcent: 75 },
  // Källa för RF: Villaägarna, "under 75 % i medel" (fukt-gemensamma-tal.md 2.3, med
  // förbehållet i 1.3). Kopierad från NORMALT_PER_RUM i daggpunkt.ts, utan adress där.
  // ANTAGANDE: 15 °C.
  { rum: 'kallare', tempC: 15, rfProcent: 75 },
  // Källa: Harderup och Arfvidsson, LTH, Bygg & teknik 4/07, kall vind: månadsmedel
  // 79–88 % oktober–februari, "mars–september alltid under 75 %" (fukt-gemensamma-tal.md
  // K8). Kopierad från NORMALT_PER_RUM i daggpunkt.ts, utan adress där. 2 °C och 83 %
  // är daggpunktens förval för vinden (SP, K3).
  { rum: 'vind', tempC: 2, rfProcent: 83 },
  // Källa för RF: TG-TF, ute 65–75 % på sommaren. ANTAGANDE: 15 °C.
  { rum: 'ute', arstid: 'sommar', tempC: 15, rfProcent: 75 },
  // Källa för RF: TG-TF, ute 90–95 % på vintern. ANTAGANDE: 0 °C. Modellen ger
  // 24,3; TräGuidens tabell 2 ger 24 vid 95 % (specen avsnitt 6.2).
  { rum: 'ute', arstid: 'vinter', tempC: 0, rfProcent: 95 },
];

/** Nyckeln för förvalets chip och text: "bostad-vinter", "krypgrund". */
export function forvalNyckel(f: Pick<Forval, 'rum' | 'arstid'>): string {
  return f.arstid ? `${f.rum}-${f.arstid}` : f.rum;
}

/** Förvalet för rummet och årstiden. En post utan arstid matchar alla årstider. */
export function hittaForval(rum: string | null, arstid: string | null): Forval | undefined {
  return FORVAL.find((f) => f.rum === rum && (f.arstid === undefined || f.arstid === arstid));
}

/**
 * Feltexterna under fälten. Hantverkarens (docs/briefer/texter-fuktkvot-2026-10-04.md).
 * {min} och {max} byts mot gränserna.
 */
export const TEXT: { fel: Record<'temp' | 'rf' | 'torr' | 'vat' | 'forvaxlade' | 'fukthalt' | 'fuktkvot', string> } = {
  fel: {
    temp: 'Skriv en temperatur mellan {min} och {max} grader', // fuktkvot.fel.temp
    rf: 'Skriv en luftfuktighet mellan {min} och {max} procent', // fuktkvot.fel.rf
    torr: 'Skriv torrvikten i gram, större än {min} och högst {max}', // fuktkvot.fel.torr
    vat: 'Skriv vikten före torkning i gram, mellan {min} och {max}', // fuktkvot.fel.vat
    forvaxlade: 'Vikten före torkning är mindre än efter, så talen har nog bytt plats', // fuktkvot.fel.forvaxlade
    fukthalt: 'Skriv en fukthalt mellan {min} och {max} procent', // fuktkvot.fel.fukthalt
    fuktkvot: 'Skriv en fuktkvot mellan {min} och {max} procent', // fuktkvot.fel.fuktkvot
  },
};

/** Hårt mellanslag mellan talet och procenttecknet, som formateraTal. */
const H = ' ';

/** Tal med decimalkomma och minus som ord, för feltexterna. */
function talText(n: number): string {
  const t = String(Math.abs(n)).replace('.', ',');
  return n < 0 ? `minus ${t}` : t;
}

function felText(mall: string, min: number, max: number): string {
  return mall.replace('{min}', talText(min)).replace('{max}', talText(max));
}

function polynom(c: readonly [number, number, number], t: number): number {
  return c[0] + c[1] * t + c[2] * t * t;
}

/**
 * Jämviktsfuktkvoten i procent, ekvation (4-5) i WH4:
 * EMC = 1800 / W × [Kh / (1 − Kh) + (K1·Kh + 2·K1·K2·(Kh)²) / (1 + K1·Kh + K1·K2·(Kh)²)].
 * Ger 12,00 vid 20 °C och 65 %, och 14,41 vid 21,1 °C och 75 % (tabell 4-2: 14,4).
 */
export function jamviktsfuktkvot(tempC: number, rfProcent: number): number {
  const h = rfProcent / 100;
  const W = polynom(WH_W, tempC);
  const K = polynom(WH_K, tempC);
  const K1 = polynom(WH_K1, tempC);
  const K2 = polynom(WH_K2, tempC);
  const kh = K * h;
  return (
    (WH_FAKTOR / W) * (kh / (1 - kh) + (K1 * kh + 2 * K1 * K2 * kh * kh) / (1 + K1 * kh + K1 * K2 * kh * kh))
  );
}

/**
 * RF i procent som ger fuktkvoten u vid temperaturen, bisektion på (4-5).
 * Ekvationen växer med RF, så halveringen hittar den enda lösningen. NaN när
 * fuktkvoten inte nås ens vid 100 %.
 */
export function rfForFuktkvot(u: number, tempC: number): number {
  let lag = 0;
  let hog = 100;
  if (u < 0 || u > jamviktsfuktkvot(tempC, hog)) return NaN;
  for (let n = 0; n < 60; n++) {
    const mitt = (lag + hog) / 2;
    if (jamviktsfuktkvot(tempC, mitt) < u) lag = mitt;
    else hog = mitt;
  }
  return (lag + hog) / 2;
}

/**
 * Tabellen vid 20 °C på sidan: modellen per rad i TABELL_RF och TräGuidens tal
 * där TräGuiden har ett (faktabladet 4.8). Modellen med full precision; sidan
 * avrundar till en decimal.
 */
export function jamviktsTabell(): {
  rf: number;
  modell: number;
  traguiden: { lagst: number; hogst: number } | null;
}[] {
  return TABELL_RF.map((rf) => ({
    rf,
    modell: jamviktsfuktkvot(TABELL_TEMP_C, rf),
    traguiden: TRAGUIDEN_20C[rf] ?? null,
  }));
}

/** Fuktkvot, procent: (våt − torr) / torr × 100. Källa: WH4 ekvation (4-2), EN 13183-1. */
export function fuktkvotUrVikt(vatG: number, torrG: number): number {
  return ((vatG - torrG) / torrG) * 100;
}

/** Fukthalt, procent: (våt − torr) / våt × 100. Källa: TG-TF, TG-FM. */
export function fukthaltUrVikt(vatG: number, torrG: number): number {
  return ((vatG - torrG) / vatG) * 100;
}

/** Fuktkvot till fukthalt, procent: w = u / (1 + u) med decimaltal (faktabladet 3). */
export function kvotTillHalt(uProcent: number): number {
  const u = uProcent / 100;
  return (u / (1 + u)) * 100;
}

/** Fukthalt till fuktkvot, procent: u = w / (1 − w) med decimaltal (faktabladet 3). */
export function haltTillKvot(wProcent: number): number {
  const w = wProcent / 100;
  return (w / (1 - w)) * 100;
}

/** Decimalkomma accepteras: '12,5' blir 12.5. Tomt eller skräp ger NaN. */
function tillTal(v: string | null): number {
  if (v === null) return NaN;
  const rensad = v.trim().replace(',', '.');
  if (rensad === '') return NaN;
  return Number(rensad);
}

function arLage(v: string | null): v is Lage {
  return v === 'luft' || v === 'vikt' || v === 'halt';
}

function arVilket(v: string | null): v is Vilket {
  return v === 'fukthalt' || v === 'fuktkvot';
}

/**
 * Läget och förvalet läses först. Varje fält blir talet i adressen om nyckeln
 * finns, annars förvalets, annars STANDARD. Okänt läge eller vilket ger STANDARD.
 */
export function tolkaQuery(q: URLSearchParams): { indata: FuktkvotIndata; harIndata: boolean } {
  const NYCKLAR = ['lage', 'temp', 'rf', 'vat', 'torr', 'tal', 'vilket', 'rum', 'arstid'];
  const harIndata = NYCKLAR.some((k) => q.has(k));

  const lageQ = q.get('lage');
  const vilketQ = q.get('vilket');
  const f = hittaForval(q.get('rum'), q.get('arstid'));
  const tal = (nyckel: string, forval: number | undefined, standard: number): number =>
    q.has(nyckel) ? tillTal(q.get(nyckel)) : (forval ?? standard);

  const indata: FuktkvotIndata = {
    lage: arLage(lageQ) ? lageQ : STANDARD.lage,
    tempC: tal('temp', f?.tempC, STANDARD.tempC),
    rfProcent: tal('rf', f?.rfProcent, STANDARD.rfProcent),
    vatG: tal('vat', undefined, STANDARD.vatG),
    torrG: tal('torr', undefined, STANDARD.torrG),
    tal: tal('tal', undefined, STANDARD.tal),
    vilket: arVilket(vilketQ) ? vilketQ : STANDARD.vilket,
  };
  if (f) {
    indata.rum = f.rum;
    if (f.arstid) indata.arstid = f.arstid;
  }
  return { indata, harIndata };
}

/** Fältens värden som de står i formuläret, med decimalkomma. */
export function formVarden(i: FuktkvotIndata): { temp: string; rf: string; vat: string; torr: string; tal: string } {
  const komma = (n: number): string => String(n).replace('.', ',');
  return {
    temp: komma(i.tempC),
    rf: komma(i.rfProcent),
    vat: komma(i.vatG),
    torr: komma(i.torrG),
    tal: komma(i.tal),
  };
}

/**
 * Den delbara adressens query: läget och bara det lägets fält. I läge luft följer
 * förvalet med, så att chipet är markerat när länken öppnas.
 */
export function delbarQuery(i: FuktkvotIndata): URLSearchParams {
  const v = formVarden(i);
  const par: [string, string][] = [['lage', i.lage]];
  if (i.lage === 'luft') {
    par.push(['temp', v.temp], ['rf', v.rf]);
    if (i.rum) par.push(['rum', i.rum]);
    if (i.arstid) par.push(['arstid', i.arstid]);
  } else if (i.lage === 'vikt') {
    par.push(['vat', v.vat], ['torr', v.torr]);
  } else {
    par.push(['tal', v.tal], ['vilket', i.vilket]);
  }
  return new URLSearchParams(par);
}

/** Nycklarna ett förval i <Kalkylator namn="fuktkvot" forval="..." /> får ha. */
export const FORVAL_NYCKLAR = ['lage', 'temp', 'rf', 'vat', 'torr', 'tal', 'vilket', 'rum', 'arstid'] as const;

/**
 * Förvalet i en inbäddning, tolkat och prövat som adressen på verktygssidan.
 * Okänd nyckel, okänt läge, okänt vilket, ett rum utan förval eller ett förval
 * som inte går att räkna ger fel, så att Kalkylator.astro kan stoppa bygget.
 */
export function forvalFranAdress(
  forval: string,
):
  | { status: 'ok'; indata: FuktkvotIndata; varden: ReturnType<typeof formVarden> }
  | { status: 'fel'; fel: string } {
  const q = new URLSearchParams(forval);
  const okanda = [...q.keys()].filter((k) => !(FORVAL_NYCKLAR as readonly string[]).includes(k));
  if (okanda.length > 0) return { status: 'fel', fel: `okänd nyckel ${okanda.join(', ')}` };
  if (q.has('lage') && !arLage(q.get('lage'))) return { status: 'fel', fel: `okänt läge ${q.get('lage')}` };
  if (q.has('vilket') && !arVilket(q.get('vilket'))) return { status: 'fel', fel: `okänt vilket ${q.get('vilket')}` };
  if ((q.has('rum') || q.has('arstid')) && !hittaForval(q.get('rum'), q.get('arstid'))) {
    return { status: 'fel', fel: `inget förval för rum=${q.get('rum')} arstid=${q.get('arstid')}` };
  }
  const { indata } = tolkaQuery(q);
  const r = raknaFuktkvot(indata);
  if (r.status === 'ogiltig') return { status: 'fel', fel: Object.keys(r.fel).join(', ') };
  return { status: 'ok', indata, varden: formVarden(indata) };
}

/** En decimal, som sidan visar talet. Bedömningen görs på det läsaren ser. */
function enDecimal(n: number): number {
  return Math.round(n * 10) / 10;
}

function bedom(lage: Lage, fuktkvot: number, fukthalt: number, rfProcent: number): Bedomning[] {
  const u = enDecimal(fuktkvot);
  const w = enDecimal(fukthalt);
  const utfall = (ok: boolean): 'ok' | 'varning' => (ok ? 'ok' : 'varning');
  const heltal = (n: number): string => String(n);
  const mogelOk = lage === 'luft' ? rfProcent < MOGEL_RF : u < MOGEL_FUKTKVOT;
  return [
    {
      anvandning: 'ved',
      utfall: utfall(w >= VED_LAGOM_MIN && w <= VED_LAGOM_MAX),
      grans: `fukthalt ${VED_LAGOM_MIN} till ${VED_LAGOM_MAX}${H}%`,
    },
    { anvandning: 'malning', utfall: utfall(u <= MALNING_MAX), grans: `högst ${MALNING_MAX}${H}%` },
    { anvandning: 'inbyggnad', utfall: utfall(u <= INBYGGNAD_MAX), grans: `högst ${INBYGGNAD_MAX}${H}%` },
    {
      anvandning: 'golv',
      utfall: utfall(u >= GOLV_MIN && u <= GOLV_MAX),
      grans: `${heltal(GOLV_MIN)} till ${heltal(GOLV_MAX)}${H}%`,
    },
    {
      anvandning: 'mogel',
      utfall: utfall(mogelOk),
      grans: lage === 'luft' ? `RF under ${MOGEL_RF}${H}%` : `under ${MOGEL_FUKTKVOT}${H}%`,
    },
    { anvandning: 'rota', utfall: utfall(u < ROTA_LITEN_RISK), grans: `under ${ROTA_LITEN_RISK}${H}%` },
  ];
}

export function raknaFuktkvot(i: FuktkvotIndata): FuktkvotResultat {
  const fel: Partial<Record<Falt, string>> = {};
  const utanfor = (n: number, [min, max]: readonly [number, number]): boolean =>
    !Number.isFinite(n) || n < min || n > max;

  if (i.lage === 'luft') {
    if (utanfor(i.tempC, GRANSER.tempC)) fel.tempC = felText(TEXT.fel.temp, ...GRANSER.tempC);
    if (utanfor(i.rfProcent, GRANSER.rfProcent)) fel.rfProcent = felText(TEXT.fel.rf, ...GRANSER.rfProcent);
    if (Object.keys(fel).length > 0) return { status: 'ogiltig', fel };

    const extrapolerad = i.tempC < TABELL_MIN_TEMP_C;
    const rfForGranser = {
      rf16: rfForFuktkvot(MALNING_MAX, i.tempC),
      rf18: rfForFuktkvot(INBYGGNAD_MAX, i.tempC),
    };
    if (i.rfProcent > TABELL_MAX_RF) {
      return { status: 'fibermattnad', lage: 'luft', extrapolerad, over: FIBERMATTNAD_OVER, rfForGranser };
    }
    const fuktkvot = jamviktsfuktkvot(i.tempC, i.rfProcent);
    return {
      status: 'ok',
      lage: 'luft',
      fuktkvot,
      fukthalt: kvotTillHalt(fuktkvot),
      extrapolerad,
      bedomningar: bedom('luft', fuktkvot, kvotTillHalt(fuktkvot), i.rfProcent),
      rotaEtablerad: enDecimal(fuktkvot) > ROTA_ETABLERAD,
      rfForGranser,
    };
  }

  let fuktkvot: number;
  let fukthalt: number;
  if (i.lage === 'vikt') {
    const [torrMin, torrMax] = GRANSER.torrG;
    // Torrvikten måste vara större än noll, inte bara minst noll.
    const torrFel = !Number.isFinite(i.torrG) || i.torrG <= torrMin || i.torrG > torrMax;
    if (torrFel) fel.torrG = felText(TEXT.fel.torr, torrMin, torrMax);
    if (utanfor(i.vatG, GRANSER.vatG)) fel.vatG = felText(TEXT.fel.vat, ...GRANSER.vatG);
    else if (!torrFel && i.vatG < i.torrG) fel.vatG = TEXT.fel.forvaxlade;
    if (Object.keys(fel).length > 0) return { status: 'ogiltig', fel };
    fuktkvot = fuktkvotUrVikt(i.vatG, i.torrG);
    fukthalt = fukthaltUrVikt(i.vatG, i.torrG);
  } else {
    const granser: readonly [number, number] = i.vilket === 'fukthalt' ? GRANSER.fukthalt : GRANSER.fuktkvot;
    if (utanfor(i.tal, granser)) {
      fel.tal = felText(i.vilket === 'fukthalt' ? TEXT.fel.fukthalt : TEXT.fel.fuktkvot, ...granser);
      return { status: 'ogiltig', fel };
    }
    fuktkvot = i.vilket === 'fukthalt' ? haltTillKvot(i.tal) : i.tal;
    fukthalt = i.vilket === 'fukthalt' ? i.tal : kvotTillHalt(i.tal);
  }

  return {
    status: 'ok',
    lage: i.lage,
    fuktkvot,
    fukthalt,
    extrapolerad: false,
    bedomningar: bedom(i.lage, fuktkvot, fukthalt, NaN),
    rotaEtablerad: enDecimal(fuktkvot) > ROTA_ETABLERAD,
    rfForGranser: null,
  };
}
