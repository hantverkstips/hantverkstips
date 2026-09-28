/**
 * Takavvattning: vilken hängränna och vilket stuprör taket behöver, hur många
 * stuprör, hur mycket fall och hur många krokar. Ren modul utan importer från
 * Astro, testbar utan bygge. Sidan /rakna/takavvattning/ skickar formuläret som
 * GET och räknar på servern.
 *
 * Takarean räknas längs lutningen av tak.ts, samma yta som takbytet
 * (specen B1). Inga kronor i första versionen (specen B5).
 *
 * Underlaget: docs/briefer/underlag-kalkyl-takavvattning-2026-09-28.md
 * ("avvattningsunderlaget"). Källbeteckningarna T1, T2, T3, P26, P10, L1, L2,
 * PM och LG, med adresser, står i docs/briefer/faktablad/guider-hangrannor.md.
 * Besluten: docs/briefer/spec-kalkyl-tak-2026-09-29.md avsnitt 0 (B1, B2, B5)
 * och 5.
 *
 * All text läsaren ser och som modulen äger står i TEXT och skrivs av
 * hantverkaren. Tills dess är varje värde en platshållare.
 *
 * Testas av scripts/test-kalkyl-takavvattning.mjs.
 */
/* Ändelsen står med, så att node kan köra testskriptet utan bygge. */
import {
  komma,
  lasTak,
  m2Text,
  meterText,
  raknaTak,
  TAK_GRANSER,
  TAK_STANDARD,
  takQuery,
  tillTal,
  valideraTak,
  type TakFel,
  type Takform,
  type TakGeometri,
  type TakIndata,
} from './tak.ts';

export { m2Text, meterText };

/* ------------------------------------------------------------------ *
 * Typer
 * ------------------------------------------------------------------ */

export type Satt = 'hus' | 'yta';
export type Ranna = 100 | 125 | 150 | 190;
export type Stupror = 75 | 90 | 100 | 110 | 120 | 150;
export type Kallkod = 'T1' | 'T2' | 'T3' | 'P26' | 'P10' | 'L1' | 'L2' | 'PM' | 'LG' | 'BMI';

export interface KallaRef {
  kod: Kallkod;
  titel: string;
  /** https. */
  url: string;
  slag: 'tillverkare' | 'branschhandbok';
  datum: string;
}

export interface TakavvattningIndata extends TakIndata {
  satt: Satt;
  /** Takfallets yta, vid satt = yta. */
  ytaM2: number;
  /** Rännans längd, vid satt = yta. */
  rannaM: number;
}
export type FelNyckel = TakFel | 'yta' | 'ranna';

export type Utfall = 'ok' | 'utanfor';
export type GorInte = 'utan-fall' | 'langre-an-10' | 'mindre-ror';
export type RegelNyckel =
  | 'yta-lutning'
  | 'ranna'
  | 'lindab'
  | 'stupror'
  | 'antal'
  | 'fall'
  | 'krokar'
  | 'plast'
  | 'over-250';

export interface Dimension {
  ranna: Ranna;
  stupror: Stupror;
}

export type TakavvattningResultat =
  | {
      status: 'ok';
      utfall: 'ok';
      takfall: 1 | 2;
      /** Arean för ett takfall, längs lutningen. */
      ytaTakfallM2: number;
      /** En takfot. */
      rannlangdM: number;
      /** n. */
      stuprorPerTakfall: number;
      /** ytaTakfallM2 / n. */
      ytaPerRannfallM2: number;
      /** rannlangdM / n. */
      rannfallM: number;
      /** RA Hus 21. */
      dim: Dimension;
      /** Lindabs ränna när den är större än dim.ranna, annars null. */
      lindab: Ranna | null;
      /** Samma räkning på den vågräta arean; null vid satt = yta. */
      vagratt: Dimension | null;
      /** SS 824031 ensidigt för ytaPerRannfallM2, bara för "Så räknar jag". */
      ssStupror: Stupror | null;
      fallMinMm: number;
      fallSjalvrensMmPerM: number | null;
      fallSjalvrensMm: number | null;
      krokarPerTakfall: number;
      /** REGNINTENSITET · ytaTakfallM2, bara för förklaring. */
      flodeLs: number;
      /** Gånger takfall. */
      totalt: { stupror: number; krokar: number; rannmeterM: number };
      /** null vid satt = yta. */
      geometri: TakGeometri | null;
      gorInteDetHar: GorInte[];
      regler: RegelNyckel[];
    }
  | {
      status: 'ok';
      utfall: 'utanfor';
      takfall: 1 | 2;
      ytaTakfallM2: number;
      ytaPerRannfallM2: number;
      stuprorPerTakfall: number;
      geometri: TakGeometri | null;
      gorInteDetHar: GorInte[];
      regler: RegelNyckel[];
    }
  | { status: 'ogiltig'; fel: Partial<Record<FelNyckel, string>> };

export type TakavvattningOk = Extract<TakavvattningResultat, { status: 'ok' }>;
export type TakavvattningSvar = Extract<TakavvattningOk, { utfall: 'ok' }>;

/* ------------------------------------------------------------------ *
 * Källorna, en gång. Titel, adress, slag och år eller datum ur
 * docs/briefer/faktablad/guider-hangrannor.md och avvattningsunderlaget 1.
 * ------------------------------------------------------------------ */

export const KALLOR: Record<Kallkod, KallaRef> = {
  T1: {
    kod: 'T1',
    titel: 'Plåt & Ventföretagen, Teknikhandboken, Hängrännor',
    url: 'https://plat.teknikhandboken.se/handboken/takets-utformning-och-planlosning/takavvattning/hangrannor/',
    slag: 'branschhandbok',
    datum: 'ändrad 2021-11-11',
  },
  T2: {
    kod: 'T2',
    titel: 'Plåt & Ventföretagen, Teknikhandboken, Stuprör',
    url: 'https://plat.teknikhandboken.se/handboken/takets-utformning-och-planlosning/takavvattning/stupror/',
    slag: 'branschhandbok',
    datum: 'ändrad 2020-11-19',
  },
  T3: {
    kod: 'T3',
    titel: 'Plåt & Ventföretagen, Teknikhandboken, Takavvattning, inledning',
    url: 'https://plat.teknikhandboken.se/handboken/takets-utformning-och-planlosning/takavvattning/inledning-6/',
    slag: 'branschhandbok',
    datum: 'ändrad 2021-11-11',
  },
  P26: {
    kod: 'P26',
    titel: 'Plannja, Monteringsanvisning 2026, Takavvattning',
    url: 'https://www.plannja.se/docs/default-source/documents-se/montering-uppdelade-2020/se-plannja-montering-takavvattning-2026-2.pdf?sfvrsn=31639255862089770000',
    slag: 'tillverkare',
    datum: 'januari 2026',
  },
  P10: {
    kod: 'P10',
    titel: 'Plannja, Dimensionering av takavvattningen',
    url: 'https://s3-eu-west-1.amazonaws.com/inriver-documents/se-plannja-dimensionering-takavvattning.pdf',
    slag: 'tillverkare',
    datum: 'mars 2010',
  },
  L1: {
    kod: 'L1',
    titel: 'Lindab Rainline Monteringsanvisningar',
    url: 'https://media.hornbach.se/hb/installationmanual/as.97249219.pdf',
    slag: 'tillverkare',
    datum: '2022-01-12',
  },
  L2: {
    kod: 'L2',
    titel: 'Lindab Rainline Teknisk information, Lindab Takavvattning',
    url: 'https://www.lindab.se/globalassets/commerce/lindabwebproductsdoc/assets/production/ztgwnmi5zdgtngq3ns00mwqxlwi5otytzgy2mzq0mtq2nzlh/5250066606480905283/roof_drainage_system_technical_se.pdf?v=1702472423',
    slag: 'tillverkare',
    datum: '2023-12-12',
  },
  PM: {
    kod: 'PM',
    titel: 'Plastmo, Monteringsanvisning för hängrännor',
    url: 'https://www.plastmo.se/Files/Billeder/items/guides/se-montering-hangrannor.pdf',
    slag: 'tillverkare',
    /* Odaterad; datumet är dagen underlaget läste den. */
    datum: 'läst 2026-09-28',
  },
  LG: {
    kod: 'LG',
    titel: 'Lindab, Garanti färgbelagd stålplåt',
    url: 'https://itsolution.lindab.com/lindabwebproductsdoc/assets/production/ZTU0MTMwOTctYWRlNS00NWQyLTg5ZDItOThiOGVlZmYwOTA3/5250942518737348772/Garanti_fargbelagd_stalplat_20260115.pdf',
    slag: 'tillverkare',
    datum: '2026-01-15',
  },
  BMI: {
    kod: 'BMI',
    titel: 'BMI Group, takavvattning.nu',
    url: 'https://takavvattning.nu/',
    slag: 'tillverkare',
    /* Odaterad. */
    datum: 'läst 2026-09-28',
  },
};

/* ------------------------------------------------------------------ *
 * Konstanter. Källa eller ANTAGANDE i kommentaren över varje.
 * ------------------------------------------------------------------ */

/**
 * Rännan: dimension i mm och högsta takfallsyta i m².
 * Källa: T1, Teknikhandboken, Hängrännor (RA Hus 21), ändrad 2021-11-11, och
 * P26, Plannja, Monteringsanvisning 2026 Takavvattning (PLANNJA 2026-2), s. 10.
 */
export const RANNA_RA: readonly (readonly [Ranna, number])[] = [
  [100, 75],
  [125, 125],
  [150, 200],
  [190, 250],
];

const storstaYta = (d: Ranna): number => {
  const rad = RANNA_RA.find(([x]) => x === d);
  if (!rad) throw new Error(`[takavvattning] Rännan ${d} saknas i RANNA_RA`);
  return rad[1];
};

/**
 * Ytorna i kortsvaret: den största takfallsytan för rännorna 100, 125 och 150
 * mm, så att varje yta är en rännas gräns.
 * Källa: RANNA_RA (T1 och P26). Checklistans H2 0 för /rakna/takavvattning/
 * (docs/briefer/seo-checklista-2026-09-29/raknare.md) beställer de tre ytorna.
 */
export const KORTSVAR_YTOR_M2 = [storstaYta(100), storstaYta(125), storstaYta(150)] as const;

/**
 * Rännan enligt Plannja 2010 (RA 08 Hus). Äldre, visas bara i tabellen.
 * Källa: P10, Plannja, Dimensionering av takavvattningen, mars 2010. Den
 * rektangulära R125 (275 m²) är en egen rad i källan och står inte bland de
 * fyra dimensionerna i tabellen.
 */
export const RANNA_PLANNJA_2010 = {
  rader: [
    [100, 75],
    [125, 125],
    [150, 200],
  ] as readonly (readonly [Ranna, number])[],
  r125Rektangular: 275,
} as const;

/**
 * Lindabs ränna efter takarean. Källa: L1, Lindab Rainline Monteringsanvisningar,
 * 2022-01-12, ordagrant: "Om takets area understiger 50 m² ska 100 mm breda
 * hängrännor och stuprör med 75 mm diameter användas. Om takets area är mellan
 * 50 och 100 m² ska 125 mm breda hängrännor och stuprör med 87 mm diameter
 * användas. Om takets area överstiger 100 m² finns det hängrännor som är 150 mm
 * breda och stuprör med diameter 100 mm eller hängrännor på 190 mm och stuprör
 * med diametrarna 111/120 mm."
 * Gränserna är data, så att intervallet över 100 m² kan stängas med en ändring
 * här och ett test (specen B5 och 11.1).
 */
export const LINDAB_RANNA = { under: 50, till: 100 } as const;

/** a < 50 ger 100, 50 ≤ a ≤ 100 ger 125, a > 100 ger 150 (L1). */
export function lindabRanna(a: number): Ranna {
  if (a < LINDAB_RANNA.under) return 100;
  if (a <= LINDAB_RANNA.till) return 125;
  return 150;
}

/** Rännan enligt SS 824031. Källa: T1. Jämförelse, visas inte i svaret. */
export const RANNA_SS: readonly (readonly [Ranna, number])[] = [
  [100, 70],
  [125, 120],
  [150, 180],
];

/**
 * Stupröret: diameter i mm och högsta takyta per rör i m².
 * Källa: T2, Teknikhandboken, Stuprör (RA Hus), ändrad 2020-11-19; P26 s. 10;
 * P10. Samma tal i alla tre.
 */
export const STUPROR_RA: readonly (readonly [Stupror, number])[] = [
  [75, 80],
  [90, 125],
  [100, 180],
  [110, 230],
  [120, 300],
  [150, 375],
];

/** Stupröret enligt SS 824031, ensidigt tillflöde. Källa: T2. Jämförelse. */
export const STUPROR_SS: readonly (readonly [Stupror, number])[] = [
  [75, 160],
  [90, 240],
  [100, 350],
  [110, 445],
  [120, 580],
];

/**
 * ANTAGANDE (avvattningsunderlaget 3.2): 87 och 90 är samma steg, 110 och 111
 * är samma steg. Plannja och RA Hus säger 90 och 110, Lindab 87 och 111 (L2
 * s. 12). Räknaren skriver 90 och 110.
 */
export const STEG_87_90 = [
  [87, 90],
  [111, 110],
] as const;

/** Största takfallsyta per rännfall. Källa: T1, P26 (största raden, 190-rännan). */
export const MAX_YTA_RANNFALL_M2 = 250;

/**
 * Sannolik regnintensitet i hela landet, l/s per m². Källa: L2 s. 2, P10, T3.
 * Bara för förklaringen av flödet.
 */
export const REGNINTENSITET_L_S_M2 = 0.013;

/** Minsta fall i rännan, mm per m. Källa: P26, L1, L2, T1, P10. */
export const FALL_MIN_MM_M = 2.5;

/** Självrensande fall per dimension, mm per m. Källa: T1. Ingen rad för 190. */
export const FALL_SJALVRENS_MM_M: Partial<Record<Ranna, number>> = { 100: 7, 125: 6, 150: 5 };

/** Fall för plaströnna, mm per m. Källa: PM ("ca. 2 mm/m"). Bara för regeln plast. */
export const FALL_PLAST_MM_M = 2;

/**
 * Längsta ränna till ett stuprör, m. Källa: L1 ("Varje stuprör klarar som mest
 * av 10 m hängränna (huslängd).") och P26 s. 11. Lindabs strängare regel
 * (avvattningsunderlaget 2.5).
 */
export const RANNLANGD_PER_STUPROR_M = 10;

/** Krokarnas centrumavstånd, m. Källa: P26 s. 11, L1, PM. */
export const KROK_CC_M = 0.6;

/** Första och sista kroken från kanten, m. Källa: P26 s. 11, L1. */
export const KROK_KANT_M = 0.1;

/** SS 824031:s år. Inte bekräftat i någon läst källa (specen B5 och 11.6). */
export const SS_AR: number | null = null;

/* ------------------------------------------------------------------ *
 * Standard och gränser
 * ------------------------------------------------------------------ */

/**
 * Huset är samma som i takbytet. 90 m² och 10 m är Plannjas exempel (P26
 * s. 10), som bara används när läsaren väljer yta.
 */
export const STANDARD: TakavvattningIndata = { ...TAK_STANDARD, satt: 'hus', ytaM2: 90, rannaM: 10 };

/**
 * Gränserna, inklusive. ytaM2 och rannaM: ANTAGANDE (avvattningsunderlaget
 * 3.4). Den övre ytgränsen är 500 och inte 250, eftersom två stuprör delar
 * arean; 250 per rännfall är utfallet utanfor, inte ett fel.
 */
export const GRANSER = { ...TAK_GRANSER, ytaM2: [5, 500], rannaM: [1, 40] } as const;

/* ------------------------------------------------------------------ *
 * Formatering
 * ------------------------------------------------------------------ */

/** "100 mm", med hårt mellanslag. */
export function mmText(n: number): string {
  return `${n} mm`;
}

/** Högst två decimaler utan nollor på slutet: 1.625 → "1,63", 0.93 → "0,93". */
function kortTal(n: number): string {
  return String(Math.round(n * 100) / 100).replace('.', ',');
}

/* ------------------------------------------------------------------ *
 * Värdena texterna får
 * ------------------------------------------------------------------ */

/** Talen beskedet, spalten och reglerna får, som färdiga strängar. Dimensionerna är null vid utanfor. */
export interface BeskedVarden {
  utfall: Utfall;
  satt: Satt;
  takfall: 1 | 2;
  /** Ett takfalls yta längs lutningen, m2Text. */
  yta: string;
  /** Ytan per rännfall, m2Text. */
  ytaPerRannfall: string;
  stupror: string;
  ranna: string | null;
  stuprorDim: string | null;
  lindab: string | null;
  rannlangd: string | null;
  rannfall: string | null;
  fallMin: string | null;
  fallSjalvrens: string | null;
  fallSjalvrensPerM: string | null;
  krokar: string | null;
  flode: string | null;
  totaltStupror: string | null;
  totaltKrokar: string | null;
  totaltRannmeter: string | null;
  /** Den vågräta räkningen, vid satt = hus. */
  vagrattYta: string | null;
  vagrattRanna: string | null;
  vagrattStupror: string | null;
  ssStupror: string | null;
  /** MAX_YTA_RANNFALL_M2. */
  max: string;
  /** FALL_MIN_MM_M, FALL_PLAST_MM_M och RANNLANGD_PER_STUPROR_M. */
  fallMinPerM: string;
  fallPlast: string;
  rannlangdPerStupror: string;
}

export interface KortsvarDim {
  /** Takfallets yta ur KORTSVAR_YTOR_M2, "75". */
  yta: string;
  ranna: string;
  stupror: string;
}

export interface KortsvarVarden {
  /** De tre ytorna i KORTSVAR_YTOR_M2, i den ordningen. */
  liten: KortsvarDim;
  mellan: KortsvarDim;
  stor: KortsvarDim;
  /** "2,5". */
  fallMin: string;
  /** "7", "6", "5" per dimension. */
  sjalvrens: Record<'100' | '125' | '150', string>;
  /** "10". */
  rannlangdPerStupror: string;
  /** "RA Hus 21", "Plannja 2026". */
  ar: { ra: string; plannja: string };
}

export interface KortsvarDelar {
  fore: string;
  markering: string;
  efter: string;
}

/** Talen till "Så räknar jag", byggda av konstanterna. */
export interface StegVarden {
  rannlangdPerStupror: string;
  fallMin: string;
  krokCc: string;
  krokKant: string;
  max: string;
}

/* ------------------------------------------------------------------ *
 * Texten. Allt läsaren ser och som modulen äger. Hantverkaren skriver.
 * ------------------------------------------------------------------ */

export interface RegelText {
  text: (v: BeskedVarden) => string;
  kallor: Kallkod[];
}

export const TEXT = {
  /* Beskedet överst i spalten. rubrik är en mening med ett verb; rad säger inte samma sak. */
  besked: {
    ok: {
      /* Vilken ränna och vilket stuprör läsaren ska köpa. Bär ranna och stuprorDim. */
      rubrik: (v: BeskedVarden): string =>
        `Köp hängränna på ${v.ranna ?? ''} mm och stuprör på ${v.stuprorDim ?? ''} mm`,
      /* Något annat än rubriken, till exempel antalet stuprör eller att det gäller ett takfall. */
      rad: (v: BeskedVarden): string =>
        v.satt === 'yta'
          ? 'Svaret gäller takfallet du har mätt. Har huset fler takfall räknar du på vart och ett för sig.'
          : v.takfall === 2
            ? 'Svaret gäller ett takfall. Sadeltaket har två, så samma ränna och samma rör sitter på båda långsidorna.'
            : 'Pulpettaket har ett enda takfall, och rännan sitter längs den låga sidan.',
    },
    utanfor: {
      /* Att läsaren ska fråga tillverkaren. Bär ytaPerRannfall. */
      rubrik: (v: BeskedVarden): string =>
        `Fråga tillverkaren av det rännsystem du vill köpa vad som gäller för ${v.ytaPerRannfall} m² till ett stuprör`,
      /* Att tabellerna slutar vid max m² per rännfall. Kort. */
      rad: (v: BeskedVarden): string => `Branschens tabell för rännor slutar vid ${v.max} m² takyta till varje stuprör.`,
    },
  } satisfies Record<Utfall, { rubrik: (v: BeskedVarden) => string; rad: (v: BeskedVarden) => string }>,

  /* Formulärets legender, etiketter och hjälprader (specen 6.1). */
  form: {
    /* Legenden över sättet att mäta. */
    'legend-satt': 'Hur du mäter',
    /* Hjälprad under sätten: radioknappen avgör vilken grupp som räknas. */
    'satt-hjalp': 'Jag räknar bara på det sätt du har valt, och de andra fälten får stå kvar som de är.',
    /* Legenden över huset. */
    'legend-huset': 'Huset',
    langd: 'Husets längd',
    bredd: 'Gavelns bredd',
    utsprang: 'Takutsprång',
    gavel: 'Gavelutsprång',
    /* Radioknappen: jag anger vinkeln. */
    'matt-vinkel': 'Jag vet takvinkeln',
    /* Radioknappen: jag anger nockhöjden. */
    'matt-nock': 'Jag har mätt nockhöjden',
    vinkel: 'Takvinkel',
    nock: 'Nockhöjd',
    /* Hjälprad: räknaren tar ytan längs lutningen, som tillverkarna. */
    'huset-hjalp':
      'Mät huset utvändigt och utsprången vågrätt ut från väggen. Ur det räknar jag fram takfallets yta längs lutningen.',
    /* Legenden över takfallet. */
    'legend-takfallet': 'Takfallet',
    /* Etikett, takfallets yta. */
    yta: 'Takfallets yta',
    /* Etikett, rännans längd. */
    ranna: 'Rännans längd',
    /* Hjälprad under takfallet. */
    'takfallet-hjalp':
      'Ytan är takets längd multiplicerad med avståndet från takfoten till nocken, uppmätt på pannorna. Rännan är lika lång som takfoten.',
  },

  /* Radioetiketterna för sättet. */
  satt: {
    hus: 'Ur husets mått',
    yta: 'Jag vet takfallets yta',
  } satisfies Record<Satt, string>,

  takform: {
    sadel: 'Sadeltak',
    pulpet: 'Pulpettak',
  } satisfies Record<Takform, string>,

  /* Feltexterna under fälten. Gränserna kommer in som tal. */
  fel: {
    langd: (min: number, max: number): string => `Skriv en längd mellan ${komma(min)} och ${komma(max)} meter.`,
    bredd: (min: number, max: number): string => `Skriv en bredd mellan ${komma(min)} och ${komma(max)} meter.`,
    utsprang: (min: number, max: number): string =>
      `Skriv ett takutsprång mellan ${komma(min)} och ${komma(max)} meter. Sticker taket inte ut alls skriver du 0.`,
    gavel: (min: number, max: number): string =>
      `Skriv ett gavelutsprång mellan ${komma(min)} och ${komma(max)} meter. Sticker taket inte ut alls skriver du 0.`,
    vinkel: (min: number, max: number): string =>
      `För den takformen räknar jag på vinklar mellan ${komma(min)} och ${komma(max)} grader.`,
    nock: (min: number, max: number): string =>
      `Med den bredden ska nockhöjden ligga mellan ${komma(min)} och ${komma(max)} meter.`,
    'nock-tal': 'Skriv nockhöjden i meter, till exempel 2,3.',
    yta: (min: number, max: number): string => `Skriv en takyta mellan ${komma(min)} och ${komma(max)} m².`,
    ranna: (min: number, max: number): string => `Skriv en rännlängd mellan ${komma(min)} och ${komma(max)} meter.`,
  },

  /* Resultatspalten (specen 6.3). Högst 700 tecken vid standard. */
  spalt: {
    /* Etiketten över det stora talet (rännan). */
    'etikett-ranna': 'Hängrännans bredd',
    /* Raden under det stora talet: stupröret i mm. Bär stuprorDim. */
    'och-stupror': (v: BeskedVarden): string => `och stuprör på ${v.stuprorDim ?? ''} mm`,
    /* Antalet stuprör per takfall, och för hela huset när sadeltaket har två takfall. */
    'rad-antal': (v: BeskedVarden): string =>
      `${v.stupror === '1' ? (v.satt === 'hus' && v.takfall === 2 ? 'Ett stuprör per takfall räcker' : 'Ett stuprör räcker') : `Takfallet behöver ${v.stupror} stuprör`}${v.satt === 'hus' && v.takfall === 2 ? `, ${v.totaltStupror ?? ''} på hela huset` : ''}, eftersom ett rör tar högst ${v.rannlangdPerStupror} m ränna.`,
    /* Minsta fall och självrensande fall i mm över rännfallets längd. Fallet gäller plåt. */
    'rad-fall': (v: BeskedVarden): string =>
      `På ${v.rannfall ?? ''} m fram till röret ska rännan sjunka minst ${v.fallMin ?? ''} mm${v.fallSjalvrens ? `, och ${v.fallSjalvrens} mm om den ska rensa sig själv` : ''}.`,
    /* Antalet krokar per takfall. */
    'rad-krokar': (v: BeskedVarden): string =>
      `Rännan behöver ${v.krokar ?? ''} krokar${v.satt === 'hus' && v.takfall === 2 ? `, ${v.totaltKrokar ?? ''} på hela huset` : ''}.`,
    /* Arean för ett takfall längs lutningen. */
    'rad-yta': (v: BeskedVarden): string =>
      v.satt === 'yta' ? `Takfallet är ${v.yta} m².` : `Takfallet är ${v.yta} m² mätt längs lutningen.`,
    /* Lindabs större ränna, när lindab inte är null. Läsaren väljer efter fabrikatet. */
    'rad-lindab': (v: BeskedVarden): string =>
      `Lindab vill ha en ränna på ${v.lindab ?? ''} mm för den här ytan, och det gäller om du köper deras system.`,
    /* Etiketten över ytan vid utanfor. */
    'etikett-yta': 'Takyta till varje stuprör',
    /* Länk till "Därför blev svaret så". */
    pekrad: 'Hela huset och reglerna bakom',
    /* Länk till "Så räknar jag". */
    'lank-sa-raknar-jag': 'Tabellerna och mina antaganden',
    /* Länk till /rakna/takbyte/ med huset ifyllt, vid satt = hus. */
    'lank-takbyte': 'Vad ett nytt tak kostar på samma hus',
    /* Länk till /tak/hangrannor/. Står bland länkarna i spalten (koordinatorn 2026-09-29). */
    'lank-hangrannor': 'Så byter du hängrännor och stuprör',
    /* Tillagd av utvecklaren, som i renovering.ts: etiketten över den delbara adressen. */
    'dela-etikett': 'Länk till ditt svar',
  },

  /* "Därför blev svaret så" (specen 6.4). */
  darfor: {
    /* Hela huset: stuprör, krokar och rännmeter, och att sadeltaket har två takfall. */
    totalt: (v: BeskedVarden): string =>
      v.satt === 'yta'
        ? `För takfallet du har mätt blir det ${v.totaltStupror ?? ''} stuprör, ${v.totaltKrokar ?? ''} krokar och ${v.totaltRannmeter ?? ''} m ränna.`
        : v.takfall === 2
          ? `Sadeltaket har två takfall med en ränna var. För hela huset blir det ${v.totaltStupror ?? ''} stuprör, ${v.totaltKrokar ?? ''} krokar och ${v.totaltRannmeter ?? ''} m ränna.`
          : `Pulpettaket har en enda ränna, ${v.totaltRannmeter ?? ''} m lång, med ${v.totaltStupror ?? ''} stuprör och ${v.totaltKrokar ?? ''} krokar.`,
    /* Vid utanfor. */
    utanfor: (v: BeskedVarden): string =>
      v.stupror === '1'
        ? `Med ett stuprör ska det röret ta emot vattnet från ${v.ytaPerRannfall} m², och det är mer än tabellerna går upp till. Fler rör ger mindre yta till vart och ett, men hur rännan då ska delas är en fråga för tillverkaren.`
        : `Med ${v.stupror} stuprör på takfallet får vart och ett ta emot vattnet från ${v.ytaPerRannfall} m², och det är mer än tabellerna går upp till. Fler rör ger mindre yta till vart och ett, men hur rännan då ska delas är en fråga för tillverkaren.`,
    /* Raden som pekar ner till "Vad siffrorna vilar på". */
    kallrad: 'Alla källor och antaganden står i tabellen längre ner',
  },

  regel: {
    'yta-lutning': {
      text: (_v: BeskedVarden): string =>
        'Jag räknar ytan längs lutningen, där takfallet har sin verkliga storlek, och så mäter också Plannja och Plastmo i sina anvisningar. Ett annat sätt att mäta står under Så räknar jag.',
      kallor: ['P26', 'PM', 'BMI'],
    },
    ranna: {
      text: (v: BeskedVarden): string =>
        `RA Hus 21 är en handbok med råd för byggarbeten, och i den finns en tabell över hur mycket takyta varje rännbredd klarar. Plannjas anvisning från 2026 har samma gränser. Räknaren väljer den smalaste ränna som klarar ${v.ytaPerRannfall} m² takyta till varje stuprör.`,
      kallor: ['T1', 'P26'],
    },
    lindab: {
      text: (v: BeskedVarden): string =>
        `Lindab drar gränserna på ett annat ställe och vill ha ${v.lindab ?? ''} mm redan vid den här ytan.`,
      kallor: ['L1'],
    },
    stupror: {
      text: (v: BeskedVarden): string =>
        `Stupröret på ${v.stuprorDim ?? ''} mm kommer ur tabellen för stuprör i samma handbok. Plåt & Ventföretagens Teknikhandbok beskriver den tabellen som generös, så röret har marginal.`,
      kallor: ['T2', 'T3'],
    },
    antal: {
      text: (v: BeskedVarden): string =>
        v.rannlangd === null
          ? `Ett stuprör får ta hand om högst ${v.rannlangdPerStupror} m ränna, och därför räknar jag med ${v.stupror === '1' ? 'ett stuprör' : `${v.stupror} stuprör`} på takfallet.`
          : v.stupror === '1'
            ? `Ett stuprör får ta hand om högst ${v.rannlangdPerStupror} m ränna, och din ränna på ${v.rannlangd} m klarar sig med ett.`
            : `Ett stuprör får ta hand om högst ${v.rannlangdPerStupror} m ränna, så din ränna på ${v.rannlangd} m behöver ${v.stupror}. Varje rör får en lika lång del av rännan, ${v.rannfall ?? ''} m, som lutar mot just det röret.`,
      kallor: ['L1', 'P26'],
    },
    fall: {
      text: (v: BeskedVarden): string =>
        `Rännan ska luta minst ${v.fallMinPerM} mm per meter mot stupröret. ${
          v.fallSjalvrensPerM
            ? `En ränna som är ${v.ranna ?? ''} mm bred rensar sig själv från skräp först vid ${v.fallSjalvrensPerM} mm per meter.`
            : `För en ränna som är ${v.ranna ?? ''} mm bred finns inget fall för självrensning angivet.`
        }`,
      kallor: ['T1', 'P26', 'LG'],
    },
    krokar: {
      text: (v: BeskedVarden): string =>
        `Jag har räknat krokarna med det avstånd som tillverkarna anger, med den första och den sista en bit in från rännans ändar. Det blir ${v.krokar ?? ''} på takfallet.`,
      kallor: ['P26', 'L1'],
    },
    plast: {
      text: (v: BeskedVarden): string =>
        `Fallet i svaret gäller plåt. För sina plastrännor godtar Plastmo både en vågrät ränna och ett fall på ungefär ${v.fallPlast} mm per meter, och för plast är det deras anvisning som gäller.`,
      kallor: ['PM'],
    },
    'over-250': {
      text: (v: BeskedVarden): string =>
        `RA Hus 21 går upp till ${v.max} m² med den bredaste rännan. Redan för de största ytorna i tabellen ska tillverkarens katalog kontrolleras, enligt Teknikhandboken.`,
      kallor: ['T1'],
    },
  } satisfies Record<RegelNyckel, RegelText>,

  gorInte: {
    /* Under 2,5 mm/m gäller inte Lindabs garanti (LG). */
    'utan-fall': `I en plåtränna som hänger plant blir vatten och löv stående. Lindab lämnar ingen garanti på en ränna som lutar mindre än ${kortTal(FALL_MIN_MM_M)} mm per meter, så kontrollera fallet på krokarna innan rännan läggs i.`,
    /* Mer än 10 m ränna till ett stuprör. */
    'langre-an-10': `Sätt inte ett enda stuprör i änden av en ränna som är längre än ${RANNLANGD_PER_STUPROR_M} m. Lindab och Plannja vill ha ett rör till, och då får rännan fall åt två håll. AMA Hus godtar ett rör mitt på rännan, med högst ${RANNLANGD_PER_STUPROR_M} m åt varje håll, men räknaren går efter den strängare regeln.`,
    /* Välj inte det smalare röret som SS-tabellen tillåter; smala rör fryser lättare (T3). */
    'mindre-ror':
      'Den svenska standarden SS 82 40 31 låter ett smalare stuprör ta hand om vattnet från samma tak, och det kan vara frestande att gå ner en storlek. Smala rör fryser lättare, enligt Teknikhandboken, så håll dig till dimensionen från RA Hus.',
  } satisfies Record<GorInte, string>,

  /* Stycket i "Så räknar jag" om SS 824031 och den vågräta ytan, med räknarens tal för läsarens tak. */
  jamforelse: {
    /* SS 824031 som jämförelse, med ssStupror. Inget år förrän SIS har kontrollerats (SS_AR). */
    ss: (v: BeskedVarden): string =>
      `SS 82 40 31, den svenska standarden för takavvattning, räknar annorlunda än RA Hus och tillåter betydligt större takyta per stuprör. ${
        v.ssStupror === v.stuprorDim
          ? `För ditt tak ger den ändå samma rör, ${v.ssStupror ?? ''} mm.`
          : `För ditt tak skulle standarden nöja sig med ett rör på ${v.ssStupror ?? ''} mm i stället för ${v.stuprorDim ?? ''} mm.`
      } Räknaren följer RA Hus, och det gör också Plannjas anvisning.`,
    /* Den vågräta ytan enligt SS-EN 12056-3 som BMI sammanfattar den, med vagrattYta, vagrattRanna och vagrattStupror. Bara vid satt = hus. */
    vagratt: (v: BeskedVarden): string =>
      `Enligt tillverkaren BMI mäter den europeiska standarden SS-EN 12056-3 ytan vågrätt i stället för längs lutningen. Då blir det ${v.vagrattYta ?? ''} m² till varje stuprör, och det räcker med en ränna på ${v.vagrattRanna ?? ''} mm och ett rör på ${v.vagrattStupror ?? ''} mm. ${
        v.vagrattRanna === v.ranna && v.vagrattStupror === v.stuprorDim
          ? 'För ditt tak spelar det ingen roll hur du mäter.'
          : 'Ingen av standarderna är ett skäl att välja en mindre dimension än räknarens.'
      }`,
  },

  /* Tabellerna i H2:n "Tabellen bakom" (specen 6.2). */
  tabell: {
    'ranna-dim': 'Rännans bredd (mm)',
    'ranna-ra': 'RA Hus 21 och Plannja 2026 (m²)',
    /* Märkt äldre i kolumnrubriken. */
    'ranna-p10': 'Plannja 2010, äldre (m²)',
    'ranna-lindab': 'Lindab 2022 (m²)',
    /* Lindabs intervall i cellen: under n, från a till b, över n. */
    'lindab-under': (n: number): string => `under ${n}`,
    'lindab-mellan': (a: number, b: number): string => `${a} till ${b}`,
    'lindab-over': (n: number): string => `över ${n}`,
    /* Källraden under rännans tabell. */
    'ranna-kalla':
      'Talen är den största takyta som rännan klarar till ett stuprör. Lindab anger bara att taket ska vara större än 100 m² för både 150- och 190-rännan. Källor: RA Hus 21 som den återges i Plåt & Ventföretagens Teknikhandbok, Plannjas anvisning från januari 2026, Plannjas dimensioneringsblad från mars 2010 och Lindabs monteringsanvisning från januari 2022.',
    'stupror-dim': 'Stuprörets diameter (mm)',
    'stupror-ra': 'Största takyta (m²)',
    /* Källraden under stuprörets tabell. */
    'stupror-kalla':
      'Källa: RA Hus 21 enligt Teknikhandboken, som ändrades i november 2020. Plannjas anvisning från 2026 har samma tal upp till 120 mm, och bladet från 2010 har samma tal i hela tabellen.',
  },

  antagande: {
    'langs-lutningen': 'Hur takytan mäts',
    'ranna-tabell': 'Rännans tabell, största takyta per bredd',
    'stupror-tabell': 'Stuprörets tabell, största takyta per diameter',
    'rannfall-lika': 'Hur rännan delas mellan stuprören',
    'tio-meter': 'Längsta ränna till ett stuprör',
    'lage-ej': 'Var stuprören sitter',
    'steg-87-90': 'Rör på 87 och 111 mm',
    'fall-min': 'Minsta fall',
    'fall-sjalvrens': 'Fall för självrensning, per rännbredd i mm',
    krokar: 'Rännkrokarna',
    regn: 'Regnet som tabellerna bygger på',
    'ingen-valm': 'Valmat tak',
    'inga-kronor': 'Kostnaden',
  } as Record<string, string>,

  /* Kolumnen Värde för rader där värdet är ord och inte tal ur konstanterna. */
  antagandeVarde: {
    'langs-lutningen': 'Längs lutningen, som i räknaren för takbyte',
    'rannfall-lika': 'Lika mycket tak och lika lång ränna till varje rör',
    'lage-ej': 'Frågas inte efter, så rännans delar antas vara lika långa',
    'steg-87-90': 'Räknas som 90 och 110 mm',
    /* cc mm c/c, kant mm från kanten, samma vid fall åt båda håll. */
    krokar: (cc: string, kant: string): string =>
      `${cc} mm mellan krokarna och ${kant} mm från ändarna, också när rännan lutar åt två håll`,
    'ingen-valm': 'Går inte att välja',
    'inga-kronor': 'Visas inte förrän varje del har ett pris med källa',
  },

  /* "Så räknar jag" som numrerad lista. Talen ur StegVarden. */
  steg: (v: StegVarden): string[] => [
    'Jag tar takfallets yta längs lutningen och räknar rännan lika lång som takfoten.',
    `Sedan delar jag rännan så att inget stuprör får mer än ${v.rannlangdPerStupror} m ränna, och takytan fördelas lika mellan rören.`,
    `Ytan som går till ett stuprör slår jag upp i tabellerna för ränna och stuprör, och jag tar den minsta dimension som räcker. Rännans tabell slutar vid ${v.max} m² till ett rör.`,
    `Till sist blir fallet ${v.fallMin} mm per meter gånger rännans längd fram till röret, och krokarna sitter med ${v.krokCc} mm mellan varandra och ${v.krokKant} mm från ändarna.`,
  ],

  /* Kortsvaret, byggt av kortsvarVarden() (checklistans H2 0). markering får <Markering>. */
  kortsvar: (v: KortsvarVarden): KortsvarDelar => ({
    fore: `Ett takfall på ${v.liten?.yta ?? ''} m² med ett stuprör i änden av rännan klarar sig med en hängränna på`,
    markering: `${v.liten?.ranna ?? ''} mm`,
    efter: ` och ett stuprör på ${v.liten?.stupror ?? ''} mm, enligt ${v.ar?.ra ?? ''} och ${v.ar?.plannja ?? ''}. Vid ${v.mellan?.yta ?? ''} m² behövs ${v.mellan?.ranna ?? ''} och ${v.mellan?.stupror ?? ''} mm, och vid ${v.stor?.yta ?? ''} m² ${v.stor?.ranna ?? ''} och ${v.stor?.stupror ?? ''} mm. Rännan ska luta minst ${v.fallMin ?? ''} mm per meter mot röret, och mer om den ska spola sig ren. Är rännan längre än ${v.rannlangdPerStupror ?? ''} m behövs ett stuprör till.`,
  }),

  /* Sparas till publiceringsomgången. Alt med orden takavvattning och dimension. */
  skissAlt: 'Skiss av ett tak ovanifrån med rännor, stuprör och fall, och de dimensioner på takavvattningen som räknaren ger',
  skissBildtext:
    'Taket sett uppifrån med en ränna längs varje långsida och ett stuprör i varje ände. Pilarna visar fallet mot stuprören, och det markerade talet är rännans bredd för standardhuset i formuläret.',
};

/* ------------------------------------------------------------------ *
 * Adressen
 * ------------------------------------------------------------------ */

const NYCKLAR = ['satt', 'langd', 'bredd', 'utsprang', 'gavel', 'takform', 'matt', 'vinkel', 'nock', 'yta', 'ranna'] as const;

export function tolkaQuery(q: URLSearchParams): { indata: TakavvattningIndata; harIndata: boolean } {
  const harIndata = NYCKLAR.some((n) => q.has(n));
  const satt = q.get('satt');
  const tal = (nyckel: string, std: number): number => (q.has(nyckel) ? tillTal(q.get(nyckel)) : std);
  return {
    harIndata,
    indata: {
      ...lasTak(q, STANDARD),
      satt: satt === 'hus' || satt === 'yta' ? satt : STANDARD.satt,
      ytaM2: tal('yta', STANDARD.ytaM2),
      rannaM: tal('ranna', STANDARD.rannaM),
    },
  };
}

/** satt, takets nycklar och sist yta och ranna, alltid alla, så att bytet av sätt behåller båda talen. */
export function delbarQuery(i: TakavvattningIndata, g: TakGeometri | null): URLSearchParams {
  const q = new URLSearchParams();
  q.set('satt', i.satt);
  for (const [k, v] of takQuery(i, g)) q.set(k, v);
  q.set('yta', komma(i.ytaM2));
  q.set('ranna', komma(i.rannaM));
  return q;
}

/** Takets nycklar, till länken mot takbytet. Bara vid satt = hus. */
export function takbyteQuery(i: TakavvattningIndata, g: TakGeometri | null): URLSearchParams {
  return takQuery(i, g);
}

/* ------------------------------------------------------------------ *
 * Räkningen
 * ------------------------------------------------------------------ */

const inom = (v: number, g: readonly [number, number]): boolean => Number.isFinite(v) && v >= g[0] && v <= g[1];

function minsta<T extends number>(tabell: readonly (readonly [T, number])[], a: number): T | null {
  for (const [dim, grans] of tabell) if (a <= grans) return dim;
  return null;
}

function dimension(a: number): Dimension | null {
  const ranna = minsta(RANNA_RA, a);
  const stupror = minsta(STUPROR_RA, a);
  return ranna === null || stupror === null ? null : { ranna, stupror };
}

export function raknaTakavvattning(i: TakavvattningIndata): TakavvattningResultat {
  // Steg 1. Bara det som räknas valideras.
  const fel: Partial<Record<FelNyckel, string>> = {};
  if (i.satt === 'hus') {
    Object.assign(fel, valideraTak(i, TEXT.fel));
  } else {
    if (!inom(i.ytaM2, GRANSER.ytaM2)) fel.yta = TEXT.fel.yta(GRANSER.ytaM2[0], GRANSER.ytaM2[1]);
    if (!inom(i.rannaM, GRANSER.rannaM)) fel.ranna = TEXT.fel.ranna(GRANSER.rannaM[0], GRANSER.rannaM[1]);
  }
  if (Object.keys(fel).length > 0) return { status: 'ogiltig', fel };

  // Steg 2. Arean och rännan.
  const g = i.satt === 'hus' ? raknaTak(i) : null;
  const takfall: 1 | 2 = g ? g.takfall : 1;
  const ytaTakfallM2 = g ? g.takareaPerTakfallM2 : i.ytaM2;
  const rannlangdM = g ? g.rannlangdM : i.rannaM;

  // Steg 3. Stuprören och rännfallen.
  const n = Math.max(1, Math.ceil(rannlangdM / RANNLANGD_PER_STUPROR_M - 1e-9));
  const ytaPerRannfallM2 = ytaTakfallM2 / n;
  const rannfallM = rannlangdM / n;

  // Steg 4 och 5.
  const dim = ytaPerRannfallM2 > MAX_YTA_RANNFALL_M2 ? null : dimension(ytaPerRannfallM2);
  if (dim === null) {
    return {
      status: 'ok',
      utfall: 'utanfor',
      takfall,
      ytaTakfallM2,
      ytaPerRannfallM2,
      stuprorPerTakfall: n,
      geometri: g,
      gorInteDetHar: ['langre-an-10'],
      regler: ['yta-lutning', 'antal', 'over-250'],
    };
  }

  // Steg 6. Lindab.
  const l = lindabRanna(ytaPerRannfallM2);
  const lindab = l > dim.ranna ? l : null;

  // Steg 7. Jämförelserna.
  const vagratt = g ? dimension(g.projektionPerTakfallM2 / n) : null;
  const ssStupror = minsta(STUPROR_SS, ytaPerRannfallM2);

  // Steg 8. Fallen.
  const fallMinMm = Math.ceil(rannfallM * FALL_MIN_MM_M - 1e-9);
  const fallSjalvrensMmPerM = FALL_SJALVRENS_MM_M[dim.ranna] ?? null;
  const fallSjalvrensMm = fallSjalvrensMmPerM === null ? null : Math.ceil(rannfallM * fallSjalvrensMmPerM - 1e-9);

  // Steg 9. Krokarna.
  const krokarPerTakfall = Math.ceil((rannlangdM - 2 * KROK_KANT_M) / KROK_CC_M - 1e-9) + 1;

  // Steg 10.
  const flodeLs = REGNINTENSITET_L_S_M2 * ytaTakfallM2;
  const totalt = { stupror: n * takfall, krokar: krokarPerTakfall * takfall, rannmeterM: rannlangdM * takfall };

  // Steg 12.
  const regler: RegelNyckel[] = ['yta-lutning', 'ranna'];
  if (lindab !== null) regler.push('lindab');
  regler.push('stupror', 'antal', 'fall', 'krokar', 'plast');

  return {
    status: 'ok',
    utfall: 'ok',
    takfall,
    ytaTakfallM2,
    rannlangdM,
    stuprorPerTakfall: n,
    ytaPerRannfallM2,
    rannfallM,
    dim,
    lindab,
    vagratt,
    ssStupror,
    fallMinMm,
    fallSjalvrensMmPerM,
    fallSjalvrensMm,
    krokarPerTakfall,
    flodeLs,
    totalt,
    geometri: g,
    // Steg 11.
    gorInteDetHar: ['utan-fall', 'langre-an-10', 'mindre-ror'],
    regler,
  };
}

/* ------------------------------------------------------------------ *
 * Värdena till texterna och tabellerna
 * ------------------------------------------------------------------ */

export function beskedVarden(r: TakavvattningOk, i: TakavvattningIndata): BeskedVarden {
  const gemensamt = {
    utfall: r.utfall,
    satt: i.satt,
    takfall: r.takfall,
    yta: m2Text(r.ytaTakfallM2),
    ytaPerRannfall: m2Text(r.ytaPerRannfallM2),
    stupror: String(r.stuprorPerTakfall),
    max: String(MAX_YTA_RANNFALL_M2),
    fallMinPerM: kortTal(FALL_MIN_MM_M),
    fallPlast: kortTal(FALL_PLAST_MM_M),
    rannlangdPerStupror: String(RANNLANGD_PER_STUPROR_M),
  };
  if (r.utfall === 'utanfor') {
    return {
      ...gemensamt,
      ranna: null,
      stuprorDim: null,
      lindab: null,
      rannlangd: null,
      rannfall: null,
      fallMin: null,
      fallSjalvrens: null,
      fallSjalvrensPerM: null,
      krokar: null,
      flode: null,
      totaltStupror: null,
      totaltKrokar: null,
      totaltRannmeter: null,
      vagrattYta: null,
      vagrattRanna: null,
      vagrattStupror: null,
      ssStupror: null,
    };
  }
  const g = r.geometri;
  return {
    ...gemensamt,
    ranna: String(r.dim.ranna),
    stuprorDim: String(r.dim.stupror),
    lindab: r.lindab === null ? null : String(r.lindab),
    rannlangd: m2Text(r.rannlangdM),
    rannfall: m2Text(r.rannfallM),
    fallMin: String(r.fallMinMm),
    fallSjalvrens: r.fallSjalvrensMm === null ? null : String(r.fallSjalvrensMm),
    fallSjalvrensPerM: r.fallSjalvrensMmPerM === null ? null : String(r.fallSjalvrensMmPerM),
    krokar: String(r.krokarPerTakfall),
    flode: kortTal(r.flodeLs),
    totaltStupror: String(r.totalt.stupror),
    totaltKrokar: String(r.totalt.krokar),
    totaltRannmeter: m2Text(r.totalt.rannmeterM),
    vagrattYta: g ? m2Text(g.projektionPerTakfallM2 / r.stuprorPerTakfall) : null,
    vagrattRanna: r.vagratt ? String(r.vagratt.ranna) : null,
    vagrattStupror: r.vagratt ? String(r.vagratt.stupror) : null,
    ssStupror: r.ssStupror === null ? null : String(r.ssStupror),
  };
}

/** Talen kortsvaret byggs av: KORTSVAR_YTOR_M2 med 10 m ränna. Skrivs aldrig för hand. */
export function kortsvarVarden(): KortsvarVarden {
  const dim = (ytaM2: number): KortsvarDim => {
    const r = raknaTakavvattning({ ...STANDARD, satt: 'yta', ytaM2, rannaM: 10 });
    if (r.status !== 'ok' || r.utfall !== 'ok') throw new Error('[takavvattning] Kortsvarets ytor ska ge en dimension');
    return { yta: kortTal(ytaM2), ranna: String(r.dim.ranna), stupror: String(r.dim.stupror) };
  };
  const [liten, mellan, stor] = KORTSVAR_YTOR_M2;
  return {
    liten: dim(liten),
    mellan: dim(mellan),
    stor: dim(stor),
    fallMin: kortTal(FALL_MIN_MM_M),
    sjalvrens: {
      '100': String(FALL_SJALVRENS_MM_M[100]),
      '125': String(FALL_SJALVRENS_MM_M[125]),
      '150': String(FALL_SJALVRENS_MM_M[150]),
    },
    rannlangdPerStupror: String(RANNLANGD_PER_STUPROR_M),
    ar: { ra: 'RA Hus 21', plannja: 'Plannja 2026' },
  };
}

export function stegVarden(): StegVarden {
  return {
    rannlangdPerStupror: String(RANNLANGD_PER_STUPROR_M),
    fallMin: kortTal(FALL_MIN_MM_M),
    krokCc: String(Math.round(KROK_CC_M * 1000)),
    krokKant: String(Math.round(KROK_KANT_M * 1000)),
    max: String(MAX_YTA_RANNFALL_M2),
  };
}

export interface RannaTabellRad {
  dim: Ranna;
  /** RA Hus 21 och Plannja 2026. */
  ra: number;
  /** Plannja 2010; null för 190. */
  p10: number | null;
  /** Lindabs intervall i m²: [från, till], null i en öppen ände. */
  lindab: [number | null, number | null];
}

/** Rännans tabell, fyra dimensioner, byggd av konstanterna. */
export function tabellRanna(): RannaTabellRad[] {
  const lindab = (dim: Ranna): [number | null, number | null] => {
    if (dim === 100) return [null, LINDAB_RANNA.under];
    if (dim === 125) return [LINDAB_RANNA.under, LINDAB_RANNA.till];
    return [LINDAB_RANNA.till, null];
  };
  return RANNA_RA.map(([dim, ra]) => ({
    dim,
    ra,
    p10: RANNA_PLANNJA_2010.rader.find(([d]) => d === dim)?.[1] ?? null,
    lindab: lindab(dim),
  }));
}

/** Stuprörets tabell: diameter och RA Hus 21 (samma tal i Plannja 2026 och 2010). */
export function tabellStupror(): { dim: Stupror; ra: number }[] {
  return STUPROR_RA.map(([dim, ra]) => ({ dim, ra }));
}

/**
 * Källorna som står vid namn under en regel. Alla källor här är tillverkare
 * och branschhandböcker, så ingen filtreras bort; funktionen finns för att
 * sidan ska läsa som takbytets.
 */
export function regelKallor(nyckel: RegelNyckel): KallaRef[] {
  return TEXT.regel[nyckel].kallor.map((k) => KALLOR[k]);
}

/* ------------------------------------------------------------------ *
 * Antagandetabellen (specen 6.5)
 * ------------------------------------------------------------------ */

export type AntagandeTyp = 'Källa' | 'Antagande' | 'Egen räkning';

export interface AntagandeDef {
  nyckel: string;
  varde: (i: TakavvattningIndata) => string;
  typ: AntagandeTyp;
  kallor: Kallkod[];
}

export interface AntagandeRad {
  nyckel: string;
  varde: string;
  typ: AntagandeTyp;
  kallor: Kallkod[];
}

export const ANTAGANDEN: AntagandeDef[] = [
  {
    nyckel: 'langs-lutningen',
    varde: () => TEXT.antagandeVarde['langs-lutningen'],
    typ: 'Antagande',
    kallor: ['P26', 'PM', 'BMI'],
  },
  {
    nyckel: 'ranna-tabell',
    varde: () => `${RANNA_RA.map(([, a]) => a).join(', ')} m²`,
    typ: 'Källa',
    kallor: ['T1', 'P26'],
  },
  {
    nyckel: 'stupror-tabell',
    varde: () => `${STUPROR_RA.map(([, a]) => a).join(', ')} m²`,
    typ: 'Källa',
    kallor: ['T2'],
  },
  { nyckel: 'rannfall-lika', varde: () => TEXT.antagandeVarde['rannfall-lika'], typ: 'Antagande', kallor: [] },
  { nyckel: 'tio-meter', varde: () => `${RANNLANGD_PER_STUPROR_M} m`, typ: 'Källa', kallor: ['L1', 'P26'] },
  { nyckel: 'lage-ej', varde: () => TEXT.antagandeVarde['lage-ej'], typ: 'Antagande', kallor: [] },
  { nyckel: 'steg-87-90', varde: () => TEXT.antagandeVarde['steg-87-90'], typ: 'Antagande', kallor: ['L2'] },
  { nyckel: 'fall-min', varde: () => `${kortTal(FALL_MIN_MM_M)} mm/m`, typ: 'Källa', kallor: ['T1', 'P26'] },
  {
    nyckel: 'fall-sjalvrens',
    varde: () =>
      (Object.entries(FALL_SJALVRENS_MM_M) as [string, number][])
        .map(([dim, f]) => `${dim}: ${f} mm/m`)
        .join('; '),
    typ: 'Källa',
    kallor: ['T1'],
  },
  {
    nyckel: 'krokar',
    varde: () =>
      TEXT.antagandeVarde.krokar(String(Math.round(KROK_CC_M * 1000)), String(Math.round(KROK_KANT_M * 1000))),
    typ: 'Antagande',
    kallor: ['P26', 'L1'],
  },
  {
    nyckel: 'regn',
    varde: () => `${komma(REGNINTENSITET_L_S_M2)} l/s per m²`,
    typ: 'Källa',
    kallor: ['L2', 'P10', 'T3'],
  },
  { nyckel: 'ingen-valm', varde: () => TEXT.antagandeVarde['ingen-valm'], typ: 'Antagande', kallor: [] },
  { nyckel: 'inga-kronor', varde: () => TEXT.antagandeVarde['inga-kronor'], typ: 'Antagande', kallor: [] },
];

/** Raderna svaret vilar på, i tabellens ordning (specen 6.5, "Visas när"). */
export function antagandenFor(r: TakavvattningOk, i: TakavvattningIndata): AntagandeRad[] {
  const alltid = ['langs-lutningen', 'rannfall-lika', 'tio-meter', 'lage-ej', 'ingen-valm'];
  const vidOk = ['ranna-tabell', 'stupror-tabell', 'steg-87-90', 'fall-min', 'fall-sjalvrens', 'krokar', 'regn', 'inga-kronor'];
  const galler = new Set<string>(r.utfall === 'ok' ? [...alltid, ...vidOk] : alltid);
  return ANTAGANDEN.filter((a) => galler.has(a.nyckel)).map((a) => ({
    nyckel: a.nyckel,
    varde: a.varde(i),
    typ: a.typ,
    kallor: a.kallor,
  }));
}
