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
 * Standardvärdena. ANTAGANDE i varje rad utom elpriset, som är SCB-statistik,
 * och effekten. 320 W är Wood's SW39FW, alltså en vanlig villakällaravfuktare.
 * Källa: Wood's bruksanvisning "SW series", tabellen "Technical specifications
 * SW series", kolumn SW38: "Power at 20°C and 70% r.h. ... 320W", alltså
 * systermodellen SW38FW med samma tal (FORVAL_PER_PLATS.kallare nedan).
 * https://woods.se/wp-content/uploads/2024/12/sw-manual-sw20_22_38_42_59_2025_v1.pdf
 * (läst 2026-09-30). Åtta timmar per dygn är vårt antagande för
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
  { dagar: 30, etikett: 'En månad, 30 dagar' },
  { dagar: DAGAR_PER_AR, etikett: 'Ett år, 365 dagar' },
];

/** Hjälptexten under gångtiden. Vår erfarenhet, inte uppmätt drifttid. */
export const GANGTIDER: { timmar: number; vad: string }[] = [
  { timmar: 8, vad: 'en avfuktare som styrs av sin fuktgivare går cirka 8 timmar' },
  { timmar: 5, vad: 'en värmefläkt på termostat går 4 till 6 timmar' },
  { timmar: 24, vad: 'en maskin som aldrig stängs av går 24 timmar' },
];

const GOR_INTE_DYGNET_RUNT =
  'En avfuktare som aldrig slår av kostar tre gånger så mycket som en som styrs av sin hygrostat, och den torkar dessutom källaren torrare än den behöver vara. Hygrostaten är givaren som stoppar maskinen när luften nått rätt fuktighet. Sitter den i maskinen räcker det att ställa den på 55 procent luftfuktighet, så slipper du dygnet-runt-driften.';

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

/**
 * Kategorier vars produktkort länkar hit med "Räkna elkostnaden". Räknaren är
 * gjord för maskiner som går i timmar varje dag i månader. En kategori läggs
 * till när en maskin i den går så, som avfuktare och värmefläktar. En
 * färgborttagare eller högtryckstvätt har effekt i databladet men används
 * någon timme i taget, och talet blir några kronor.
 * Spec: docs/briefer/spec-bilder-fasad-2026-09-28.md avsnitt 7.4.
 */
export const ELKOSTNAD_KATEGORIER: readonly string[] = ['luftavfuktare'] as const;

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

/* ------------------------------------------------------------------ *
 * Förval per plats
 * ------------------------------------------------------------------ */

/**
 * Platserna som har ett förval, `?plats=kallare`. Luftfuktare, radonsug
 * och tvätt väntar på underlag och får en rad här när talet finns; ingen effekt
 * gissas. Spec: docs/briefer/spec-elkostnad-forval-2026-09-30.md avsnitt 7.
 */
export type Plats = 'kallare' | 'krypgrund' | 'vind' | 'garage';

export interface PlatsForval {
  /** Maskinens namn, som i köpguiden för platsen. */
  maskin: string;
  typ: 'kondens' | 'sorption';
  /** Märkeffekten i watt vid villkoret. */
  effektW: number;
  /** Tillverkarens provklimat för effekten. */
  villkor: { tempC: number; rf: number };
  timmarPerDygn: number;
}

/**
 * En rad per plats. timmarPerDygn är 8 i alla: ANTAGANDE, samma som i
 * GANGTIDER och köpguidernas tabeller.
 */
export const FORVAL_PER_PLATS: Record<Plats, PlatsForval> = {
  /*
   * Källa: Wood's bruksanvisning "SW series", tabellen "Technical specifications
   * SW series", kolumn SW38: "Power at 20°C and 70% r.h. ... 320W". Talet gäller
   * systermodellen SW38FW, som har samma tal; Wood's har inget dokument för SW39FW.
   * https://woods.se/wp-content/uploads/2024/12/sw-manual-sw20_22_38_42_59_2025_v1.pdf
   * (läst 2026-09-30, `faktablad/butikskallor-C-2026-09-30.md` rad 71). Förstavalet
   * i köpguiden för källaren.
   */
  kallare: {
    maskin: "Wood's SW39FW",
    typ: 'kondens',
    effektW: 320,
    villkor: { tempC: 20, rf: 70 },
    timmarPerDygn: 8,
  },
  /*
   * Källa: Fresh: 350 W, 6 l vid 27 °C och 60 % (`faktablad/guider-avfuktare-krypgrund.md`
   * rad 84). Valet i köpguiden för krypgrunden som har villkor; Drybox X4 anger inga.
   */
  krypgrund: {
    maskin: 'Fresh D-800',
    typ: 'sorption',
    effektW: 350,
    villkor: { tempC: 27, rf: 60 },
    timmarPerDygn: 8,
  },
  /*
   * Källa: affiliates val för vinden, docs/briefer/affiliate-avfuktare-vind-2026-10.md;
   * effekt och villkor som krypgrunden, Fresh: 350 W, 6 l vid 27 °C och 60 %
   * (`faktablad/guider-avfuktare-krypgrund.md` rad 84).
   * ANTAGANDE: 8 timmar per dygn, samma som övriga platser.
   */
  vind: {
    maskin: 'Fresh D-800',
    typ: 'sorption',
    effektW: 350,
    villkor: { tempC: 27, rf: 60 },
    timmarPerDygn: 8,
  },
  /*
   * Källa: Wood's bruksanvisning rev. 2022-05-02: 275 W vid 30 °C och 80 %.
   * Tillverkaren väger tyngst mot butikens 240 W (`faktablad/guider-avfuktare-garage.md`
   * rad 18 och 73). Valet i köpguiden för det uppvärmda garaget.
   */
  garage: {
    maskin: "Wood's MDK21",
    typ: 'kondens',
    effektW: 275,
    villkor: { tempC: 30, rf: 80 },
    timmarPerDygn: 8,
  },
};

/** Platserna i tabellens ordning. */
export const PLATSER = Object.keys(FORVAL_PER_PLATS) as Plats[];

/** plats ur adressen, eller null när den saknas eller är okänd. */
export function platsFranQuery(q: URLSearchParams): Plats | null {
  const v = q.get('plats');
  return v !== null && (PLATSER as string[]).includes(v) ? (v as Plats) : null;
}

/**
 * Standardvärdena med förvalen inlagda. Effekten: produktens, sedan platsens,
 * sist STANDARD. Gångtiden: platsens, sedan STANDARD.
 */
export function standardMedForval(forval: ProduktForval, plats: Plats | null = null): ElkostnadIndata {
  const p = plats === null ? null : FORVAL_PER_PLATS[plats];
  return {
    ...STANDARD,
    effektW: forval.effektW ?? p?.effektW ?? STANDARD.effektW,
    timmarPerDygn: p?.timmarPerDygn ?? STANDARD.timmarPerDygn,
  };
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
  // effekt och timmar i adressen vinner; sedan produkten, platsen och STANDARD.
  const standard = standardMedForval(forval, platsFranQuery(q));
  const harIndata = ['effekt', 'timmar', 'dagar', 'elpris', 'liter', 'produkt', 'plats'].some((k) => q.has(k));

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
    fel.effektW = `Skriv en effekt mellan ${effektMin} och ${effektMax} watt`;
  }
  if (!Number.isFinite(i.timmarPerDygn) || i.timmarPerDygn < timmarMin || i.timmarPerDygn > timmarMax) {
    fel.timmarPerDygn = `Skriv en gångtid mellan ${String(timmarMin).replace('.', ',')} och ${timmarMax} timmar per dygn`;
  }
  if (!Number.isFinite(i.dagar) || i.dagar < dagarMin || i.dagar > dagarMax) {
    fel.dagar = `Skriv ett antal dagar mellan ${dagarMin} och ${dagarMax}`;
  }
  if (!Number.isFinite(i.elprisKrPerKwh) || i.elprisKrPerKwh < prisMin || i.elprisKrPerKwh > prisMax) {
    fel.elprisKrPerKwh = `Skriv ett elpris mellan ${String(prisMin).replace('.', ',')} och ${prisMax} kr per kWh`;
  }
  if (
    i.literPerDygn !== null &&
    (!Number.isFinite(i.literPerDygn) || i.literPerDygn < literMin || i.literPerDygn > literMax)
  ) {
    fel.literPerDygn = `Skriv liter per dygn mellan ${String(literMin).replace('.', ',')} och ${literMax}, eller lämna fältet tomt`;
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

/* ------------------------------------------------------------------ *
 * Förval för en inbäddning
 * ------------------------------------------------------------------ */

/** Nycklarna ett förval får innehålla: samma som den delbara adressen. */
export const FORVAL_NYCKLAR = [
  'plats',
  'produkt',
  'effekt',
  'timmar',
  'dagar',
  'elpris',
  'liter',
  'typ',
  'kg',
  'torkningar',
] as const;

/**
 * Vad räkningen gäller. `golvvarme` kommer från golvvärmesidans förval
 * (typ=golvvarme) och följer med i formuläret och den delbara adressen, så att
 * sidan inte visar avfuktarens text för något som inte är en avfuktare.
 * Räkningen är densamma; bara texterna skiljer.
 * `tvatt` är tvättläget (spec avsnitt 8): en egen räkning per kg tvätt, med
 * tolkaTvatt och raknaTvatt nedan.
 */
export type ElTyp = 'maskin' | 'golvvarme' | 'tvatt';

/** typ ur adressen. Allt annat än golvvarme och tvatt är en maskin, som förut. */
export function typFranQuery(q: URLSearchParams): ElTyp {
  const t = q.get('typ');
  return t === 'golvvarme' ? 'golvvarme' : t === 'tvatt' ? 'tvatt' : 'maskin';
}

/* ------------------------------------------------------------------ *
 * Tvättläget, ?typ=tvatt
 * Spec: docs/briefer/spec-elkostnad-forval-2026-09-30.md avsnitt 8.
 * Underlag: docs/briefer/faktablad/fukt-gemensamma-tal.md avsnitt 14.
 * Koordinatorns beslut: testets tal per kg gäller för alla metoder. Restfukten
 * räknas inte om, eftersom ingen källa ger den per varvtal, och EU-märkningen
 * provar tumlare vid 60 %.
 * ------------------------------------------------------------------ */

export type TvattMetod = 'avfuktare' | 'varmepumpstumlare' | 'kondenstumlare';

/**
 * kWh per kg tvätt. Källa: Energimyndigheten, "Luftavfuktare torka tvätt",
 * testsida senast uppdaterad 2017-12-11, tabell 1. Adressen:
 * https://www.energimyndigheten.se/effektiv-energianvandning/tester/tester-a-o/luftavfuktare-torka-tvatt/
 */
export const TVATT_KWH_PER_KG: Record<TvattMetod, number> = {
  avfuktare: 0.32,
  varmepumpstumlare: 0.23,
  kondenstumlare: 0.27,
};

/** Metoderna i tabellens ordning. */
export const TVATT_METODER = Object.keys(TVATT_KWH_PER_KG) as TvattMetod[];

/** Källa: samma sida, "7 kilo tvätt på torkning". */
export const TVATT_TEST = {
  kgPerTorkning: 7,
  datum: '2017-12-11',
  url: 'https://www.energimyndigheten.se/effektiv-energianvandning/tester/tester-a-o/luftavfuktare-torka-tvatt/',
} as const;

export interface TvattIndata {
  /** Kg tvätt per torkning. */
  kgPerTorkning: number;
  /** Torkningar per vecka. */
  torkningarPerVecka: number;
  /** Elpris i kronor per kilowattimme, allt inräknat. */
  elprisKrPerKwh: number;
}

/**
 * Standardvärdena i tvättläget.
 * - 7 kg har testet som källa (TVATT_TEST).
 * - 1 torkning i veckan är ett ANTAGANDE: en enhet att skala från, som läsaren
 *   byter mot sitt eget tal.
 * - Elpriset är SCB-talet ur antaganden.ts, som i STANDARD.
 */
export const TVATT_STANDARD: TvattIndata = {
  kgPerTorkning: TVATT_TEST.kgPerTorkning,
  torkningarPerVecka: 1,
  elprisKrPerKwh: ELPRIS_KR_PER_KWH,
};

/** ANTAGANDE, inmatningsgränser. Elpriset har samma gränser som GRANSER. */
export const TVATT_GRANSER = {
  kgPerTorkning: [1, 20],
  torkningarPerVecka: [0.1, 30],
  elprisKrPerKwh: GRANSER.elprisKrPerKwh,
} as const;

/** Ett år räknas som DAGAR_PER_AR / 7 veckor. */
const VECKOR_PER_AR = DAGAR_PER_AR / 7;

export interface TvattMetodResultat {
  kwhPerAr: number;
  krPerAr: number;
  kwhPerTorkning: number;
}

export type TvattResultat =
  | { status: 'ok'; kgPerAr: number; metoder: Record<TvattMetod, TvattMetodResultat> }
  | { status: 'ogiltig'; fel: Partial<Record<keyof TvattIndata, string>> };

/** T1: felraden för kg. Texten är hantverkarens (texter-elkostnad-forval-2026-09-30.md). */
function tvattFelKg(min: number, max: number): string {
  return `Skriv en tvättmängd mellan ${min} och ${max} kg`;
}

/** T1: felraden för torkningar. Texten är hantverkarens. */
function tvattFelTorkningar(min: string, max: number): string {
  return `Skriv ett antal torkningar i veckan mellan ${min} och ${max}`;
}

/** Läser kg, torkningar och elpris ur adressen. Decimalkomma godtas. */
export function tolkaTvatt(q: URLSearchParams): { indata: TvattIndata; harIndata: boolean } {
  const harIndata = ['kg', 'torkningar', 'elpris'].some((k) => q.has(k));
  return {
    harIndata,
    indata: {
      kgPerTorkning: q.has('kg') ? tillTal(q.get('kg')) : TVATT_STANDARD.kgPerTorkning,
      torkningarPerVecka: q.has('torkningar') ? tillTal(q.get('torkningar')) : TVATT_STANDARD.torkningarPerVecka,
      elprisKrPerKwh: q.has('elpris') ? tillTal(q.get('elpris')) : TVATT_STANDARD.elprisKrPerKwh,
    },
  };
}

export function raknaTvatt(i: TvattIndata): TvattResultat {
  const fel: Partial<Record<keyof TvattIndata, string>> = {};
  const [kgMin, kgMax] = TVATT_GRANSER.kgPerTorkning;
  const [torkMin, torkMax] = TVATT_GRANSER.torkningarPerVecka;
  const [prisMin, prisMax] = TVATT_GRANSER.elprisKrPerKwh;

  if (!Number.isFinite(i.kgPerTorkning) || i.kgPerTorkning < kgMin || i.kgPerTorkning > kgMax) {
    fel.kgPerTorkning = tvattFelKg(kgMin, kgMax);
  }
  if (!Number.isFinite(i.torkningarPerVecka) || i.torkningarPerVecka < torkMin || i.torkningarPerVecka > torkMax) {
    fel.torkningarPerVecka = tvattFelTorkningar(String(torkMin).replace('.', ','), torkMax);
  }
  if (!Number.isFinite(i.elprisKrPerKwh) || i.elprisKrPerKwh < prisMin || i.elprisKrPerKwh > prisMax) {
    // Samma felrad som maskinens elpris.
    fel.elprisKrPerKwh = `Skriv ett elpris mellan ${String(prisMin).replace('.', ',')} och ${prisMax} kr per kWh`;
  }
  if (Object.keys(fel).length > 0) return { status: 'ogiltig', fel };

  // Kg tvätt per år: kg per torkning gånger torkningar per vecka gånger veckorna.
  const kgPerAr = i.kgPerTorkning * i.torkningarPerVecka * VECKOR_PER_AR;
  const metod = (m: TvattMetod): TvattMetodResultat => {
    const kwhPerAr = kgPerAr * TVATT_KWH_PER_KG[m];
    return { kwhPerAr, krPerAr: kwhPerAr * i.elprisKrPerKwh, kwhPerTorkning: i.kgPerTorkning * TVATT_KWH_PER_KG[m] };
  };
  return {
    status: 'ok',
    kgPerAr,
    metoder: {
      avfuktare: metod('avfuktare'),
      varmepumpstumlare: metod('varmepumpstumlare'),
      kondenstumlare: metod('kondenstumlare'),
    },
  };
}

/** Fältens värden i tvättläget som de står i formuläret: decimalkomma, elpriset med två decimaler. */
export function tvattVarden(i: TvattIndata): { kg: string; torkningar: string; elpris: string } {
  const komma = (n: number): string => String(n).replace('.', ',');
  return {
    kg: komma(i.kgPerTorkning),
    torkningar: komma(i.torkningarPerVecka),
    elpris: i.elprisKrPerKwh.toFixed(2).replace('.', ','),
  };
}

/**
 * "Gör inte det här" vid 24 timmar för golvvärme. Hantverkarens text
 * (docs/briefer/texter-kok-kostnad-2026-09-29.md, avsnittet om elkostnaden).
 * null tills den finns: då visas ingen text alls, hellre än avfuktarens.
 * Underlaget: docs/briefer/faktablad/kunskap-golvvarme-badrum.md avsnitt 2c
 * (termostaten slår av och på; ingen källa för gångtiden).
 */
export const GOR_INTE_DYGNET_RUNT_GOLVVARME: string | null =
  'Räkna inte golvvärmen med 24 timmar om dygnet. Termostaten bryter strömmen när golvet är varmt och slår på den igen när det har svalnat, så kabeln drar full effekt bara en del av dygnet. Räknar du med alla timmar blir årskostnaden för hög. Jag har inte hittat någon källa som anger hur många timmar det brukar bli, så skriv det antal du tror på och prova sedan ett lägre och ett högre tal för att se hur mycket kostnaden ändras.';

/** Texten under "Gör inte det här" för resultatet och typen, eller null. */
export function gorInteText(r: Extract<ElkostnadResultat, { status: 'ok' }>, typ: ElTyp): string | null {
  if (typ === 'golvvarme') return r.gardygnetRunt ? GOR_INTE_DYGNET_RUNT_GOLVVARME : null;
  return r.gorInteDetHar;
}

/** Fältens värden som de står i formuläret: decimalkomma, elpriset med två decimaler, tomt literfält vid null. */
export function formVarden(i: ElkostnadIndata): {
  effekt: string;
  timmar: string;
  dagar: string;
  elpris: string;
  liter: string;
} {
  const komma = (n: number): string => String(n).replace('.', ',');
  return {
    effekt: komma(i.effektW),
    timmar: komma(i.timmarPerDygn),
    dagar: komma(i.dagar),
    elpris: i.elprisKrPerKwh.toFixed(2).replace('.', ','),
    liter: i.literPerDygn === null ? '' : komma(i.literPerDygn),
  };
}

/**
 * Förvalet till <Kalkylator namn="elkostnad" forval="..." />, tolkat som
 * adressen på verktygssidan. Talen och deras källor är artikelns, aldrig
 * räknarens: golvvärmesidan skriver hela golvets effekt i watt, alltså
 * tillverkarens W/m² gånger den fria golvytan, plus typ=golvvarme, och
 * garagesidan avfuktarens effekt ur databladet.
 * Ett förval med en okänd nyckel, en okänd typ eller ett värde som räknaren
 * inte godtar ger fel, så att en artikel aldrig bäddar in ett formulär som
 * svarar med ett fel.
 *
 * `produkt=[slug]` pekar ut en maskin i databasen, som på verktygssidan.
 * Funktionen läser aldrig databasen: Kalkylator hämtar produkten och skickar
 * dess effekt som `produktForval`. En `effekt` i samma förval vinner.
 * Spec: docs/briefer/spec-elkostnad-forval-2026-09-30.md avsnitt 1.
 *
 * `plats=kallare` (krypgrund, garage) ger platsens effekt och gångtid ur
 * FORVAL_PER_PLATS; en okänd plats ger fel (avsnitt 7).
 */
export function forvalFranAdress(
  forval: string,
  produktForval: ProduktForval = { effektW: null },
):
  | {
      status: 'ok';
      indata: ElkostnadIndata;
      varden: ReturnType<typeof formVarden>;
      typ: ElTyp;
      /** Produktens slug ur förvalet, eller null när den saknas eller inte är en slug. */
      produktSlug: string | null;
      /** Platsen ur förvalet, eller null. */
      plats: Plats | null;
      /** Tvättlägets tal och fältvärden vid typ=tvatt, annars null. */
      tvatt: { indata: TvattIndata; varden: ReturnType<typeof tvattVarden> } | null;
    }
  | { status: 'fel'; fel: string } {
  const q = new URLSearchParams(forval);
  const okanda = [...q.keys()].filter((k) => !(FORVAL_NYCKLAR as readonly string[]).includes(k));
  if (okanda.length > 0) return { status: 'fel', fel: `okänd nyckel ${okanda.join(', ')}` };
  const typ = q.get('typ');
  if (q.has('typ') && typ !== 'golvvarme' && typ !== 'tvatt') return { status: 'fel', fel: `okänd typ ${typ}` };
  if (q.has('plats') && platsFranQuery(q) === null) return { status: 'fel', fel: `okänd plats ${q.get('plats')}` };
  /*
   * Tvättläget har egna nycklar (kg, torkningar, elpris). Maskinens nycklar i
   * ett tvättförval, eller tvättens utan typ=tvatt, skulle inte synas i
   * formuläret, så de ger fel.
   */
  const tvattNycklar = ['kg', 'torkningar'];
  const maskinNycklar = ['plats', 'produkt', 'effekt', 'timmar', 'dagar', 'liter'];
  if (typ === 'tvatt') {
    const fel = [...q.keys()].filter((k) => maskinNycklar.includes(k));
    if (fel.length > 0) return { status: 'fel', fel: `${fel.join(', ')} hör inte till typ=tvatt` };
  } else {
    const fel = [...q.keys()].filter((k) => tvattNycklar.includes(k));
    if (fel.length > 0) return { status: 'fel', fel: `${fel.join(', ')} kräver typ=tvatt` };
  }
  let tvatt: { indata: TvattIndata; varden: ReturnType<typeof tvattVarden> } | null = null;
  if (typ === 'tvatt') {
    const t = tolkaTvatt(q).indata;
    const rt = raknaTvatt(t);
    if (rt.status !== 'ok') return { status: 'fel', fel: Object.keys(rt.fel).join(', ') };
    tvatt = { indata: t, varden: tvattVarden(t) };
  }
  const { indata } = tolkaQuery(q, produktForval);
  const r = raknaElkostnad(indata);
  if (r.status !== 'ok') return { status: 'fel', fel: Object.values(r.fel).join(' ') };
  return {
    status: 'ok',
    indata,
    varden: formVarden(indata),
    typ: typFranQuery(q),
    produktSlug: produktSlugFranQuery(q),
    plats: platsFranQuery(q),
    tvatt,
  };
}
