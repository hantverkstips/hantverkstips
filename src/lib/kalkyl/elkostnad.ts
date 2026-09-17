/**
 * Elkostnaden för en maskin. Ren funktion utan importer från Astro, testbar utan
 * bygge. Sidan /rakna/elkostnad/ skickar formuläret som GET och räknar på servern,
 * så ingen rad av den här filen når klienten.
 *
 * Räkningen är den enklaste på hela sajten: effekten i watt delat med 1 000 ger
 * kilowatt, gånger gångtiden ger kilowattimmar per dygn, gånger antal dagar ger
 * perioden, gånger elpriset ger kronor. Det svåra är inte formeln utan
 * antagandena, och de står namngivna nedan.
 *
 * Elpriset kommer från src/lib/antaganden.ts, samma tal som eltabellerna i
 * /fukt/avfuktare-kallare/ och /tester/woods-sw39fw/ räknar med. Läsaren får
 * byta det mot sitt eget.
 *
 * Testas av scripts/test-kalkyl-elkostnad.mjs mot de publicerade eltabellerna.
 */
/* Ändelsen står med, så att node kan köra testskriptet utan bygge. */
import { ELPRIS_KR_PER_KWH } from '../antaganden.ts';

export interface ElkostnadIndata {
  /** Märkeffekt i watt, talet på typskylten eller i databladet. */
  effektW: number;
  /** Gångtid i timmar per dygn. */
  timmarPerDygn: number;
  /** Antal dagar räkningen gäller. */
  dagar: number;
  /** Elpris i kronor per kilowattimme, allt inräknat. */
  elprisKrPerKwh: number;
  /** Liter vatten per dygn, bara för avfuktare. null när läsaren hoppar över det. */
  literPerDygn: number | null;
}

export type ElkostnadResultat =
  | {
      status: 'ok';
      /** Kilowattimmar per dygn. */
      kwhPerDygn: number;
      /** Kilowattimmar under hela perioden. */
      kwhPerPeriod: number;
      /** Kronor under hela perioden. */
      krPerPeriod: number;
      /** Kronor per dygn. */
      krPerDygn: number;
      /** Kilowattimmar per år vid samma gångtid. */
      kwhPerAr: number;
      /** Kronor per år vid samma gångtid. */
      krPerAr: number;
      /** Kilowattimmar per liter vatten, eller null när liter saknas. */
      kwhPerLiter: number | null;
      /** Kronor per liter vatten, eller null när liter saknas. */
      krPerLiter: number | null;
      /** Sant när maskinen aldrig stängs av. Sidan skriver då "Gör inte det här". */
      gardygnetRunt: boolean;
      /** Åtgärden som är fel i just det här läget, eller null. */
      gorInteDetHar: string | null;
    }
  | { status: 'ogiltig'; fel: Partial<Record<keyof ElkostnadIndata, string>> };

/*
 * Konstanter. Källa eller antagande i kommentaren över varje.
 */

/**
 * Dagar på ett år. Skottår räknas inte, skillnaden är under tre promille och
 * ryms i osäkerheten på gångtiden.
 */
const DAGAR_PER_AR = 365;

/**
 * Standardvärdena. ANTAGANDE i varje rad utom elpriset, som är SCB-statistik.
 * 320 W är Wood's SW39FW enligt Proffsmagasinet, alltså en vanlig
 * villakällaravfuktare, och åtta timmar per dygn är vårt antagande för
 * hygrostatstyrd drift i en källare som inte är genomblöt.
 */
export const STANDARD: ElkostnadIndata = {
  effektW: 320,
  timmarPerDygn: 8,
  dagar: 30,
  elprisKrPerKwh: ELPRIS_KR_PER_KWH,
  literPerDygn: null,
};

export const GRANSER = {
  effektW: [1, 10000],
  timmarPerDygn: [0.1, 24],
  dagar: [1, 3650],
  elprisKrPerKwh: [0.1, 20],
  literPerDygn: [0.1, 200],
} as const;

/** De två färdiga perioderna i formuläret. Allt annat skrivs i fältet bredvid. */
export const PERIODER: { dagar: number; etikett: string }[] = [
  { dagar: 30, etikett: '30 dagar, en månad' },
  { dagar: DAGAR_PER_AR, etikett: '365 dagar, ett år' },
];

/** Hjälptexten under gångtiden. Vår erfarenhet, inte uppmätt drifttid. */
export const GANGTIDER: { timmar: number; vad: string }[] = [
  { timmar: 8, vad: 'hygrostatstyrd avfuktare, cirka 8 timmar' },
  { timmar: 5, vad: 'värmefläkt på termostat, 4 till 6 timmar' },
  { timmar: 24, vad: 'en maskin som aldrig stängs av, 24 timmar' },
];

const GOR_INTE_DYGNET_RUNT =
  'Låt inte avfuktaren gå dygnet runt utan hygrostat, alltså givaren som stoppar maskinen när luften nått rätt fuktighet. En maskin som aldrig slår av kostar tre gånger så mycket som en hygrostatstyrd och torkar källaren torrare än den behöver vara. Sitter givaren i maskinen räcker det att ställa den på 55 procent luftfuktighet.';

/** Decimalkomma accepteras: '7,4' blir 7.4. Tomt eller skräp ger NaN. */
function tillTal(v: string | null): number {
  if (v === null) return NaN;
  const rensad = v.trim().replace(',', '.');
  if (rensad === '') return NaN;
  return Number(rensad);
}

/** Produktens slug ur adressen, eller null. Bara tecken en slug får innehålla. */
export function produktSlugFranQuery(q: URLSearchParams): string | null {
  const ra = q.get('produkt');
  if (ra === null) return null;
  const slug = ra.trim().toLowerCase();
  return /^[a-z0-9-]{1,80}$/.test(slug) ? slug : null;
}

/** Det enda vi förifyller ur en produkt: effekten. */
export interface ProduktForval {
  effektW: number | null;
}

/**
 * Talet vi kan förifylla ur en produkts specs. Ren funktion, så att den går att
 * testa utan databas: sidan hämtar produkten och skickar hit `specs`.
 * Databasen lagrar specs som JSON, så ett tal kan komma som sträng.
 *
 * Bara effekten, aldrig kapaciteten. Kapaciteten i databasen är märkt kapacitet,
 * uppmätt vid 30 grader och 80 procent luftfuktighet, och hela sajten säger att
 * talet på förpackningen inte är vad maskinen ger i en källare. Förifyllt skulle
 * det ge ett literpris som ser tre gånger bättre ut än verkligheten, så
 * literfältet står tomt tills läsaren skriver ett tal hen står för.
 * Koordinatorns beslut 2026-09-17.
 */
export function produktForval(specs: Record<string, unknown> | null | undefined): ProduktForval {
  const v = specs?.['effekt_w'];
  if (typeof v === 'number' && Number.isFinite(v) && v > 0) return { effektW: v };
  if (typeof v === 'string') {
    const n = tillTal(v);
    return { effektW: Number.isFinite(n) && n > 0 ? n : null };
  }
  return { effektW: null };
}

/** Standardvärdena med produktens effekt inlagd när den finns. */
export function standardMedForval(forval: ProduktForval): ElkostnadIndata {
  return { ...STANDARD, effektW: forval.effektW ?? STANDARD.effektW };
}

/**
 * Läser adressen. `forval` är produktens effekt, som ersätter standardvärdet när
 * läsaren inte skrivit något eget. Dagarna kan komma på två sätt: som ett tal
 * (`dagar=90`, det delbara skrivsättet) eller som `dagar=eget` plus fältet
 * `dagareget`, vilket är vad radioknapparna i formuläret skickar.
 */
export function tolkaQuery(
  q: URLSearchParams,
  forval: ProduktForval = { effektW: null },
): { indata: ElkostnadIndata; harIndata: boolean } {
  const standard = standardMedForval(forval);
  const harIndata =
    q.has('effekt') || q.has('timmar') || q.has('dagar') || q.has('elpris') || q.has('liter') || q.has('produkt');

  const raDagar = q.get('dagar');
  const dagar = raDagar === null ? standard.dagar : raDagar.trim() === 'eget' ? tillTal(q.get('dagareget')) : tillTal(raDagar);

  const raLiter = q.get('liter');
  const literPerDygn = raLiter === null || raLiter.trim() === '' ? standard.literPerDygn : tillTal(raLiter);

  return {
    harIndata,
    indata: {
      effektW: q.has('effekt') ? tillTal(q.get('effekt')) : standard.effektW,
      timmarPerDygn: q.has('timmar') ? tillTal(q.get('timmar')) : standard.timmarPerDygn,
      dagar,
      elprisKrPerKwh: q.has('elpris') ? tillTal(q.get('elpris')) : standard.elprisKrPerKwh,
      literPerDygn,
    },
  };
}

export function raknaElkostnad(i: ElkostnadIndata): ElkostnadResultat {
  const fel: Partial<Record<keyof ElkostnadIndata, string>> = {};
  const [effektMin, effektMax] = GRANSER.effektW;
  const [timmarMin, timmarMax] = GRANSER.timmarPerDygn;
  const [dagarMin, dagarMax] = GRANSER.dagar;
  const [prisMin, prisMax] = GRANSER.elprisKrPerKwh;
  const [literMin, literMax] = GRANSER.literPerDygn;

  if (!Number.isFinite(i.effektW) || i.effektW < effektMin || i.effektW > effektMax) {
    fel.effektW = `Ange effekt mellan ${effektMin} och ${effektMax} watt`;
  }
  if (!Number.isFinite(i.timmarPerDygn) || i.timmarPerDygn < timmarMin || i.timmarPerDygn > timmarMax) {
    fel.timmarPerDygn = `Ange gångtid mellan ${String(timmarMin).replace('.', ',')} och ${timmarMax} timmar per dygn`;
  }
  if (!Number.isFinite(i.dagar) || i.dagar < dagarMin || i.dagar > dagarMax) {
    fel.dagar = `Ange antal dagar mellan ${dagarMin} och ${dagarMax}`;
  }
  if (!Number.isFinite(i.elprisKrPerKwh) || i.elprisKrPerKwh < prisMin || i.elprisKrPerKwh > prisMax) {
    fel.elprisKrPerKwh = `Ange elpris mellan ${String(prisMin).replace('.', ',')} och ${prisMax} kr per kWh`;
  }
  if (
    i.literPerDygn !== null &&
    (!Number.isFinite(i.literPerDygn) || i.literPerDygn < literMin || i.literPerDygn > literMax)
  ) {
    fel.literPerDygn = `Ange liter per dygn mellan ${String(literMin).replace('.', ',')} och ${literMax}, eller lämna fältet tomt`;
  }
  if (Object.keys(fel).length > 0) return { status: 'ogiltig', fel };

  // Steg 1. Watt blir kilowatt, och kilowatt gånger timmar blir kilowattimmar.
  const kwhPerDygn = (i.effektW / 1000) * i.timmarPerDygn;

  // Steg 2. Perioden och året, samma räkning med olika antal dagar.
  const kwhPerPeriod = kwhPerDygn * i.dagar;
  const kwhPerAr = kwhPerDygn * DAGAR_PER_AR;

  // Steg 3. Kronorna. Elpriset är ett pris per kilowattimme, inget mer.
  const krPerDygn = kwhPerDygn * i.elprisKrPerKwh;
  const krPerPeriod = kwhPerPeriod * i.elprisKrPerKwh;
  const krPerAr = kwhPerAr * i.elprisKrPerKwh;

  // Steg 4. Vattnet, för den som räknar på en avfuktare. Energin per liter är
  // det enda måttet som går att jämföra mellan en kondens- och en sorptionsmaskin.
  const kwhPerLiter = i.literPerDygn === null ? null : kwhPerDygn / i.literPerDygn;
  const krPerLiter = kwhPerLiter === null ? null : kwhPerLiter * i.elprisKrPerKwh;

  const gardygnetRunt = i.timmarPerDygn >= 24;

  return {
    status: 'ok',
    kwhPerDygn,
    kwhPerPeriod,
    krPerPeriod,
    krPerDygn,
    kwhPerAr,
    krPerAr,
    kwhPerLiter,
    krPerLiter,
    gardygnetRunt,
    gorInteDetHar: gardygnetRunt ? GOR_INTE_DYGNET_RUNT : null,
  };
}
