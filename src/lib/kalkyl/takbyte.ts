/**
 * Takbyte: vad kostar ett nytt tak, före och efter rotavdraget, och hur många
 * takstolar har huset? Ren modul utan importer från Astro, testbar utan bygge.
 * Sidan /rakna/takbyte/ skickar formuläret som GET och räknar på servern, så
 * ingen rad av den här filen når klienten.
 *
 * Geometrin (takarean längs lutningen, takstolarna) ligger i tak.ts och delas
 * med takavvattningen och fasadräknaren. Rotavdraget räknas av raknaRotavdrag()
 * i rotavdrag.ts. Ingen del av de räkningarna är kopierad hit.
 *
 * Underlaget med adress och datum per rad: docs/briefer/faktablad/rakna-takbyte.md
 * ("takbytesunderlaget"). Besluten B1 till B4 och allt annat:
 * docs/briefer/spec-kalkyl-tak-2026-09-29.md avsnitt 0 och 3.
 *
 * All text läsaren ser och som modulen äger står i TEXT och skrivs av
 * hantverkaren. Tills dess är varje värde en platshållare.
 *
 * Testas av scripts/test-kalkyl-takbyte.mjs.
 */
/* Ändelsen står med, så att node kan köra testskriptet utan bygge. */
import {
  antalTakstolar,
  CC_STANDARD,
  CC_VAL,
  komma,
  lasTak,
  m2Text,
  meterText,
  procentText,
  raknaTak,
  TAK_GRANSER,
  TAK_STANDARD,
  takQuery,
  tillTal,
  valideraTak,
  vinkelText,
  type TakFel,
  type Takform,
  type TakGeometri,
  type TakIndata,
  hart,
  hartaAllt,
} from './tak.ts';
import {
  raknaRotavdrag,
  kronor,
  ROT_PROCENT,
  ROT_TAK_KR,
  SKATTEVERKET_ROTAVDRAGET,
  SKATTEVERKET_GER_RATT,
  type Begransning,
} from './rotavdrag.ts';
import { kallradEfterRegel } from './kallrad.ts';

export { kronor };
/* Formuläret och sidan läser takets delar härifrån, så att de har en import. */
export { CC_VAL, m2Text, meterText, paslagstabell, procentText, vinkelText } from './tak.ts';

/* ------------------------------------------------------------------ *
 * Typer
 * ------------------------------------------------------------------ */

export type Material = 'bandplat' | 'takpanneplat' | 'betong' | 'tegel' | 'papp';
export type Agare = 1 | 2;
export type Kallkod =
  | 'P1'
  | 'P4'
  | 'P5'
  | 'TRAGUIDEN'
  | 'SKV-ROT'
  | 'SKV-RATT'
  | 'TAKIVAST'
  | 'PL-ROYAL'
  | 'LB-PANNA';

export interface KallaRef {
  kod: Kallkod;
  /** Källans egen titel, ur underlaget 4.1 och 5. */
  titel: string;
  /** https. */
  url: string;
  slag: 'förmedlare' | 'firma' | 'branschhandbok' | 'myndighet' | 'tillverkare';
  datum: string;
}

export interface PrisRad {
  kalla: 'P1' | 'P4' | 'P5';
  /** Kr per m² takyta, före rot, inklusive moms. */
  lagKr: number;
  hogKr: number;
  hur: 'ordagrant' | 'egen räkning';
}
export interface AndelRad {
  kalla: 'P1' | 'P4';
  arbeteKr: number;
  totaltKr: number;
}
export interface MaterialDef {
  nyckel: Material;
  priser: PrisRad[];
  andelar: AndelRad[];
}

/**
 * ccMm och agare är number och inte 600 | 900 | 1200 respektive Agare, som i
 * specen 3.1: adressen kan bära ett annat tal (cc=800, agare=3) som ska ge ett
 * fel på fältet och inte tyst bli standard. Samma skäl som i renovering.ts.
 */
export interface TakbyteIndata extends TakIndata {
  material: Material;
  ccMm: number;
  agare: number;
  /** Utnyttjat rot i år, alla ägare tillsammans. */
  rotKr: number;
}
export type FelNyckel = TakFel | 'cc' | 'agare' | 'rot';

/** Ena änden av spannet. */
export interface Ande {
  prisKvm: number;
  /** Takarean gånger prisKvm, före tillägget. */
  lagtKr: number;
  /** lagtKr + tillaggKr, före rot. Med TILLAGG_ANDEL_ARBETE 0 är det arbeteKr + materialKr + tillaggKr. */
  kostnadKr: number;
  arbeteKr: number;
  /** lagtKr minus arbetet i det, utan tillägget. */
  materialKr: number;
  /** TILLAGG_KR när tillaggInraknat, annars 0. Bara andelen TILLAGG_ANDEL_ARBETE ger rotavdrag. */
  tillaggKr: number;
  /** avdragKr ur raknaRotavdrag. */
  rotKr: number;
  raktRotKr: number;
  kapatKr: number;
  attBetalaKr: number;
  begransatAv: Begransning;
}

/**
 * lutning: materialet går inte att lägga på takets vinkel (MINSTA_LUTNING), så
 * inget belopp räknas. Tillagt 2026-09-29 efter hantverkarens retur, punkt 1:
 * rubriken bar ett belopp som raden sa inte gällde.
 */
export type Utfall = 'belopp' | 'tak' | 'utanfor' | 'lutning';
export type GorInte = 'bottenyta' | 'rot-pa-allt' | 'bestall-takstolar';
export type RegelNyckel =
  | 'takarea'
  | 'vinkel'
  | 'pris'
  | 'en-kalla'
  | 'andel-arbete'
  | 'tillagg'
  | 'rot-arbete'
  | 'rot-grans'
  | 'rot-slog-i'
  | 'intervall'
  | 'takstolar';

export type TakbyteResultat =
  | {
      status: 'ok';
      utfall: 'belopp' | 'tak';
      geometri: TakGeometri;
      takstolar: number;
      lag: Ande;
      hog: Ande;
      /** lagKr === hogKr för materialet. */
      ettTal: boolean;
      /** Bråk, 0 till 1. */
      andelArbete: number;
      /** TILLAGG_KR. Inräknat i ändarna bara när tillaggInraknat är sant. */
      tillaggKr: number;
      /** Sant när materialet bara har P1 som källa (tillaggInraknat). */
      tillaggInraknat: boolean;
      gorInteDetHar: GorInte[];
      regler: RegelNyckel[];
    }
  | {
      status: 'ok';
      utfall: 'utanfor';
      sida: 'under' | 'over';
      geometri: TakGeometri;
      takstolar: number;
      gorInteDetHar: GorInte[];
      regler: RegelNyckel[];
    }
  | {
      status: 'ok';
      utfall: 'lutning';
      geometri: TakGeometri;
      takstolar: number;
      gorInteDetHar: GorInte[];
      regler: RegelNyckel[];
    }
  | { status: 'ogiltig'; fel: Partial<Record<FelNyckel, string>> };

export type TakbyteOk = Extract<TakbyteResultat, { status: 'ok' }>;
export type TakbyteBelopp = Extract<TakbyteOk, { utfall: 'belopp' | 'tak' }>;

/* ------------------------------------------------------------------ *
 * Källorna, en gång. Titel, adress, slag och datum ur takbytesunderlaget
 * 4.1 och 5, och kunskap-takstolar.md avsnitt 3 för TräGuiden.
 * ------------------------------------------------------------------ */

export const KALLOR: Record<Kallkod, KallaRef> = {
  P1: {
    kod: 'P1',
    titel: 'Takexperter, Vad kostar det att byta tak? (Pris 2026)',
    url: 'https://www.takexperter.se/sida/vad-kostar-det-att-byta-tak-pris',
    slag: 'förmedlare',
    /* Sidan är odaterad; datumet är dagen underlaget hämtade den (takbytesunderlaget, inledningen och 4.1). */
    datum: 'hämtad 2026-09-28',
  },
  P4: {
    kod: 'P4',
    titel: 'Hantverkskollen, Plåttak pris per kvadratmeter',
    url: 'https://www.hantverkskollen.se/artiklar/tak/tak-plattak-pris-per-kvadratmeter-guide-till-2026',
    slag: 'förmedlare',
    datum: 'uppdaterad 2026-07-17',
  },
  P5: {
    kod: 'P5',
    titel: 'Totalbyggarna, Nytt plåttak',
    url: 'https://www.totalbyggarna.se/blogg/plattak/',
    slag: 'firma',
    datum: '2026-03-30',
  },
  TRAGUIDEN: {
    kod: 'TRAGUIDEN',
    titel: 'Svenskt Trä, TräGuiden 4.2.2 Takstolsdimensioner',
    url: 'https://www.traguiden.se/konstruktion/takstolshandboken/takstolstyper/4.2-val-av-takkonstruktion/4.2.2takstolsdimensioner/',
    slag: 'branschhandbok',
    datum: '2021-11-02',
  },
  'SKV-ROT': {
    kod: 'SKV-ROT',
    titel: 'Skatteverket, så fungerar rotavdraget',
    url: SKATTEVERKET_ROTAVDRAGET,
    slag: 'myndighet',
    datum: 'läst 2026-09-28',
  },
  'SKV-RATT': {
    kod: 'SKV-RATT',
    titel: 'Skatteverket, ger arbetet rätt till rotavdrag',
    url: SKATTEVERKET_GER_RATT,
    slag: 'myndighet',
    datum: 'läst 2026-09-28',
  },
  /* Bara för varningen om takyta, inget pris (specen B1). */
  TAKIVAST: {
    kod: 'TAKIVAST',
    titel: 'Tak i Väst, Byta tak kostnad',
    url: 'https://takivast.se/byta-tak-kostnad-pris/',
    slag: 'firma',
    datum: 'ändrad 2026-08-17',
  },
  /*
   * Minsta lutningen för takpanneplåt (MINSTA_LUTNING). Titel, adress och
   * datum ur docs/briefer/faktablad/kunskap-plattak.md 1.2, rad 48 och 57.
   * Plannjas anvisning har bara versionen 2026-2; dagen är faktabladets
   * hämtdatum, 2026-09-28.
   */
  'PL-ROYAL': {
    kod: 'PL-ROYAL',
    titel: 'Plannja, Monteringsanvisning Plannja Royal och Plannja Regent',
    url: 'https://www.plannja.se/docs/default-source/documents-se/montering-uppdelade-2020/se-plannja-montering-royal-regent-2026-2.pdf?sfvrsn=38639147785467830000',
    slag: 'tillverkare',
    datum: 'version 2026-2, hämtad 2026-09-28',
  },
  'LB-PANNA': {
    kod: 'LB-PANNA',
    titel: 'Lindab Torekov & Norrviken (LPA/LPE) Monteringsanvisningar',
    url: 'https://www.lindab.se/globalassets/commerce/lindabwebproductsdoc/assets/production/zde0otc2odatnzc1ms00ownhltkzzmmtotnmnzfmmdq1ntix/5250310262028213421/takpanna-torekov-norrviken-montering-se.pdf?v=1769298996',
    slag: 'tillverkare',
    datum: '2024-09-20',
  },
};

/* ------------------------------------------------------------------ *
 * Konstanter. Källa eller ANTAGANDE i kommentaren över varje.
 * ------------------------------------------------------------------ */

/**
 * Priserna per m² takyta, före rot, inklusive moms, och underlaget för
 * andelen arbete (specen B3, takbytesunderlaget 4.2 och 4.3).
 * Källa P1: Takexperter, "Vad kostar det att byta tak? (Pris 2026)",
 *   https://www.takexperter.se/sida/vad-kostar-det-att-byta-tak-pris, hämtad
 *   2026-09-28. Tabellen gäller 150 m² sadeltak; priset per m² är egen räkning
 *   ur P1:s tabell för 150 m² (arbete + material) / 150, och avrundas inte.
 * Källa P4: Hantverkskollen, "Plåttak pris per kvadratmeter",
 *   https://www.hantverkskollen.se/artiklar/tak/tak-plattak-pris-per-kvadratmeter-guide-till-2026,
 *   uppdaterad 2026-07-17. Spann och arbete per m² ordagrant ur tabellen.
 * Källa P5: Totalbyggarna, "Nytt plåttak", https://www.totalbyggarna.se/blogg/plattak/,
 *   2026-03-30. Spannet ordagrant.
 * Shingel har ingen källa som visar före rot och finns inte med (specen B3).
 */
export const MATERIAL: readonly MaterialDef[] = [
  {
    nyckel: 'bandplat',
    /*
     * P5 ger det låga värdet och P4 och P5 det höga: 1 500 till 2 500 kr/m².
     * P1:s uträknade 1 080 kr/m² står inte med, eftersom P1 inte är enda
     * källan (SEO-beslutet 2026-09-29, punkt 2, i
     * docs/briefer/seo-checklista-2026-09-29/raknare.md). P1:s uppdelning i
     * arbete och material står kvar i andelar, där den är P1:s egna kronor.
     */
    priser: [
      { kalla: 'P4', lagKr: 1600, hogKr: 2500, hur: 'ordagrant' },
      { kalla: 'P5', lagKr: 1500, hogKr: 2500, hur: 'ordagrant' },
    ],
    andelar: [
      { kalla: 'P4', arbeteKr: 670, totaltKr: 1600 },
      { kalla: 'P4', arbeteKr: 1190, totaltKr: 2500 },
      { kalla: 'P1', arbeteKr: 72000, totaltKr: 72000 + 90000 },
    ],
  },
  {
    nyckel: 'takpanneplat',
    /*
     * Kontrollerat mot takbytesunderlaget 4.2 den 2026-09-29: P1 har inget
     * pris för takpanneplåt, så regeln i SEO-beslutet punkt 2 ändrar inget.
     * Trapetsplåt är inget val i räknaren.
     */
    priser: [
      { kalla: 'P4', lagKr: 950, hogKr: 1300, hur: 'ordagrant' },
      { kalla: 'P5', lagKr: 900, hogKr: 1500, hur: 'ordagrant' },
    ],
    andelar: [
      { kalla: 'P4', arbeteKr: 220, totaltKr: 950 },
      { kalla: 'P4', arbeteKr: 430, totaltKr: 1300 },
    ],
  },
  {
    nyckel: 'betong',
    priser: [
      /* egen räkning ur P1:s tabell för 150 m² */
      { kalla: 'P1', lagKr: (93600 + 75000) / 150, hogKr: (93600 + 75000) / 150, hur: 'egen räkning' },
    ],
    andelar: [{ kalla: 'P1', arbeteKr: 93600, totaltKr: 93600 + 75000 }],
  },
  {
    nyckel: 'tegel',
    priser: [
      /* egen räkning ur P1:s tabell för 150 m² */
      { kalla: 'P1', lagKr: (93600 + 126000) / 150, hogKr: (93600 + 126000) / 150, hur: 'egen räkning' },
    ],
    andelar: [{ kalla: 'P1', arbeteKr: 93600, totaltKr: 93600 + 126000 }],
  },
  {
    nyckel: 'papp',
    priser: [
      /* egen räkning ur P1:s tabell för 150 m² */
      { kalla: 'P1', lagKr: (57600 + 57500) / 150, hogKr: (57600 + 57500) / 150, hur: 'egen räkning' },
    ],
    andelar: [{ kalla: 'P1', arbeteKr: 57600, totaltKr: 57600 + 57500 }],
  },
];

/** Dagen underlaget läste källorna. */
export const PRISER_HAMTADE = '2026-09-28';

/**
 * Takexperters tillägg.
 * Källa: P1, "Till totalpriset ovan tillkommer resekostnader,
 * etableringskostnad och projekteringskostnader med cirka 30 000 kronor."
 * Räknas in i summan, före rotavdraget, där P1 är enda källan för priset
 * (betong, tegel och papp), eftersom P1:s pris per m² utan tillägget inte är
 * P1:s pris. Räknas inte in där priset har flera källor: P4 och P5 har
 * etableringen i sina tal, och då blir den dubbel. SEO-beslutet 2026-09-29,
 * punkt 1, i docs/briefer/seo-checklista-2026-09-29/raknare.md.
 */
export const TILLAGG_KR = 30000;

/**
 * Hur stor del av tillägget som är arbete och ger rotavdrag: ingen.
 * ANTAGANDE: P1 delar inte upp tillägget, och takbytesunderlaget har ingen
 * uppdelning. Tillägget är resor, etablering och projektering, och
 * Skatteverket skriver att "Övriga kostnader som utföraren har i samband med
 * arbetet ger inte rätt till skattereduktion", med restid som exempel, och
 * att "Det är bara arbetad tid på plats hos dig som ger rätt till
 * rotavdrag" (SKV-ROT, takbytesunderlaget 5). Hela tillägget räknas därför
 * som en kostnad utan avdrag, vilket ger det mindre avdraget.
 */
export const TILLAGG_ANDEL_ARBETE = 0;

/** Sant när materialets pris bara har P1 som källa, och tillägget räknas in. */
export function tillaggInraknat(m: Material): boolean {
  const k = prisKallor(m);
  return k.length === 1 && k[0] === 'P1';
}

/**
 * Takareorna räknaren ger ett belopp för, gränserna inräknade. Linjär skalning
 * bara här.
 * Källa: SEO-beslutet 2026-09-29 (docs/briefer/seo-checklista-2026-09-29/raknare.md),
 * ur P4 (100–200 m² takyta) och P1 och P5 (150 m²).
 */
export const YTA_INTERVALL = [100, 200] as const;

/**
 * Minsta takvinkel i grader där materialet går att lägga. Under den blir
 * svaret utfallet lutning, utan belopp.
 * Källa: docs/briefer/faktablad/kunskap-plattak.md, tabellen över plåttyper:
 *   Plannja Royal "Min. taklutning 14° (1:4)", Plannja Regent 14° (1:4), och
 *   Lindab Torekov/Norrviken "Taklutningen måste vara minst 14°."
 * Andra material har ingen gräns med källa här och saknas därför.
 */
export const MINSTA_LUTNING: Partial<Record<Material, number>> = { takpanneplat: 14 };

/** Sant när takets vinkel är under materialets minsta lutning. */
export function forLagLutning(m: Material, vinkelGrader: number): boolean {
  const min = MINSTA_LUTNING[m];
  return min !== undefined && vinkelGrader < min;
}

export const MATERIAL_VAL: readonly Material[] = ['bandplat', 'takpanneplat', 'betong', 'tegel', 'papp'];

const materialDef = (m: Material): MaterialDef => {
  const d = MATERIAL.find((x) => x.nyckel === m);
  if (!d) throw new Error(`[takbyte] Materialet ${m} saknas i MATERIAL`);
  return d;
};

/** [lägsta låga, högsta höga] över materialets priser. Inget medelvärde (specen B3). */
export function spann(m: Material): [number, number] {
  const p = materialDef(m).priser;
  return [Math.min(...p.map((r) => r.lagKr)), Math.max(...p.map((r) => r.hogKr))];
}

/**
 * Andelen arbete: den lägsta av källornas (arbete / totalt).
 * ANTAGANDE (specen B3): en låg andel ger ett mindre rotavdrag, så räknaren
 * lovar inte mer avdrag än källorna bär.
 */
export function andelArbete(m: Material): number {
  return Math.min(...materialDef(m).andelar.map((a) => a.arbeteKr / a.totaltKr));
}

/** Källorna till materialets pris, i MATERIAL-ordning, var och en en gång. */
export function prisKallor(m: Material): Kallkod[] {
  return [...new Set(materialDef(m).priser.map((p) => p.kalla))];
}

/** Källorna till materialets andel arbete, i MATERIAL-ordning, var och en en gång. */
export function andelKallor(m: Material): Kallkod[] {
  return [...new Set(materialDef(m).andelar.map((a) => a.kalla))];
}

/* ------------------------------------------------------------------ *
 * Standard och gränser
 * ------------------------------------------------------------------ */

/**
 * Standardvärdena. Betong är takbytesunderlagets förslag och det vanligaste
 * materialet på villor i källorna. En ägare av samma skäl som i rotavdrag.ts,
 * det försiktiga svaret. Standard ger takarean 143,66 m² och 164 578 kr att
 * betala. Så räknas det (SEO-beslutet 2026-09-29, punkt 1):
 *   takarean 143,658 m² × 1 124 kr/m² (P1, (93 600 + 75 000) / 150) = 161 471 kr lagt
 *   arbete 161 471 × 93 600 / 168 600 = 89 642 kr, rotavdrag 30 % = 26 893 kr
 *   plus P1:s tillägg 30 000 kr, som inte ger avdrag: 191 471 kr före rot
 *   191 471 − 26 893 = 164 578 kr att betala.
 * Före beslutet räknades tillägget inte in, och svaret var 134 578 kr.
 */
export const STANDARD: TakbyteIndata = { ...TAK_STANDARD, material: 'betong', ccMm: CC_STANDARD, agare: 1, rotKr: 0 };

/** Takets gränser ur tak.ts. rotKr per ägare; gränsen i fältet är ROT_TAK_KR gånger antalet ägare. */
export const GRANSER = { ...TAK_GRANSER, rotKr: [0, ROT_TAK_KR] } as const;

/* ------------------------------------------------------------------ *
 * Formatering
 * ------------------------------------------------------------------ */

const MANADER = [
  'januari',
  'februari',
  'mars',
  'april',
  'maj',
  'juni',
  'juli',
  'augusti',
  'september',
  'oktober',
  'november',
  'december',
];

/** "2026-09-28" → "28 september 2026". */
function datumText(iso: string): string {
  const [ar, man, dag] = iso.split('-').map(Number);
  return `${dag} ${MANADER[(man ?? 1) - 1] ?? ''} ${ar}`;
}

/**
 * Ett tal eller ett spann i kronor: "1 124" eller "1 500 till 2 500". Inget
 * tankstreck (docs/ROST.md, koordinatorn 2026-09-29, i stället för specens
 * "1 500–2 500").
 */
function spannText(lag: number, hog: number): string {
  return kronor(lag) === kronor(hog) ? kronor(lag) : `${kronor(lag)} till ${kronor(hog)}`;
}

/* ------------------------------------------------------------------ *
 * Värdena texterna får
 * ------------------------------------------------------------------ */

/** Talen beskedet, spalten, reglerna och "Därför blev svaret så" får, som färdiga strängar. Beloppen är null vid utanfor. */
export interface BeskedVarden {
  utfall: Utfall;
  attBetalaLag: string | null;
  attBetalaHog: string | null;
  /** Före rot, med tillägget när tillaggInraknat. */
  kostnadLag: string | null;
  kostnadHog: string | null;
  /** Takytan gånger priset per m², utan tillägget. */
  lagtLag: string | null;
  lagtHog: string | null;
  rotLag: string | null;
  rotHog: string | null;
  /** Vad gränsen kapade i den höga änden. */
  kapat: string | null;
  arbeteLag: string | null;
  arbeteHog: string | null;
  materialLag: string | null;
  materialHog: string | null;
  /** Pris per m² i den låga och den höga änden. */
  prisLag: string | null;
  prisHog: string | null;
  /**
   * Kostnaden före rot, med tillägget, delad med takarean: det pris per m² som
   * en firma med etableringen i kvadratmeterpriset ska jämföras med. Bara när
   * tillaggInraknat (då är ettTal alltid sant); annars null. Tillagd av
   * hantverkaren 2026-09-29 efter läsarens varv 4, punkt 1.
   */
  prisMedTillagg: string | null;
  /** Andelen arbete i procent, en decimal. */
  andelArbete: string | null;
  /** m2Text(takareaM2). */
  takarea: string;
  bottenyta: string;
  paslag: string;
  vinkel: string;
  /** meterText(nockM). */
  nock: string;
  /** Vilket av vinkel och nock läsaren angav. */
  matt: 'vinkel' | 'nock';
  /** Sadeltak eller pulpettak. På ett pulpettak är nock höjdskillnaden mellan väggarna. */
  takform: Takform;
  takfallslangd: string;
  takstolar: string;
  cc: string;
  /** YTA_INTERVALL. */
  min: string;
  max: string;
  sida: 'under' | 'over' | null;
  /** Materialets minsta lutning i grader (MINSTA_LUTNING), null när materialet saknar en. */
  minLutning: string | null;
  agare: number;
  ettTal: boolean;
  tillagg: string;
  /** Sant när tillägget ligger i beloppet (bara P1 som källa). Falskt vid utanfor. */
  tillaggInraknat: boolean;
  hamtat: string;
  /** TEXT.material[nyckel]. */
  material: string;
}

export interface KortsvarMaterial {
  /** "1 124" eller "1 500 till 2 500". */
  prisKvm: string;
  /** "164 578" eller "188 416 till 314 026". */
  attBetala: string;
}

export interface KortsvarVarden {
  betong: KortsvarMaterial;
  tegel: KortsvarMaterial;
  bandplat: KortsvarMaterial;
  /** "143,7". */
  takarea: string;
  /** "108". */
  bottenyta: string;
  /** "12,2". */
  paslag27: string;
  /** Takvinkeln i grader som takytan gäller för: "27". */
  vinkel: string;
  /** Utsprånget vid takfoten i meter, per sida: "0,50". */
  utsprangTakfot: string;
  /** Utsprånget vid gaveln i meter, per gavel: "0,40". */
  utsprangGavel: string;
  hamtat: string;
  /** De källor som förekommer i de tre materialen. */
  kallor: Kallkod[];
}

/** Kortsvaret i delar, så att sidan kan sätta <Markering> runt ett tal. */
export interface KortsvarDelar {
  fore: string;
  markering: string;
  efter: string;
}

/** Talen till "Så räknar jag", byggda av konstanterna. */
export interface StegVarden {
  rotProcent: string;
  rotGrans: string;
  cc: string;
  min: string;
  max: string;
  tillagg: string;
  hamtat: string;
}

/* ------------------------------------------------------------------ *
 * Texten. Allt läsaren ser och som modulen äger. Hantverkaren skriver.
 * Varje värde är platshållaren tills texten finns (specen 3.7). Utanför
 * TEXT står bara standardvarningen, delatexten och de fasta rubrikerna.
 * ------------------------------------------------------------------ */

/** En regel i "Därför blev svaret så": texten och källornas koder. */
export interface RegelText {
  text: (v: BeskedVarden) => string;
  /** Källorna är data. pris beror på materialet och är en funktion. */
  kallor: Kallkod[] | ((i: TakbyteIndata) => Kallkod[]);
}

/**
 * Ett belopp avrundat till hela tusental, för rubriken: "164 578" → "165 000".
 * Talet i spalten står kvar på kronan. Läsarens varv 4, punkt 4.
 */
const tusental = (belopp: string | null | undefined): string => {
  const n = Number(String(belopp ?? '').replace(/\D/g, ''));
  return n > 0 ? kronor(Math.round(n / 1000) * 1000) : '';
};

/** Rubrikens belopp: "runt 165 000" eller "188 000 till 314 000". */
const budget = (v: BeskedVarden): string =>
  v.ettTal ? `runt ${tusental(v.attBetalaLag)}` : `${tusental(v.attBetalaLag)} till ${tusental(v.attBetalaHog)}`;

/**
 * Varningen för pulpettak, efter beskedets rad: priserna gäller sadeltak, och
 * med vinkeln angiven syns höjdskillnaden, så att en orimlig vinkel märks.
 * Tom sträng på sadeltak. Läsarens varv 4, punkt 2.
 */
const pulpetVarning = (v: BeskedVarden, medPris: boolean): string =>
  v.takform !== 'pulpet'
    ? ''
    : `${medPris ? ' Priserna gäller sadeltak, så beloppet är en fingervisning.' : ''}${
        v.matt === 'vinkel' ? ' Stämmer inte väggarnas höjdskillnad i svaret med ditt hus har du skrivit in fel vinkel.' : ''
      }`;

/**
 * Jämförelsetalet per m² i beskedets rad, vid belopp och vid gränsen. När
 * tillägget ligger i beloppet jämförs med prisMedTillagg, och med prisLag om
 * firman har etableringen på en egen rad. Plåtpriserna har redan etableringen
 * med. Läsarens varv 4 punkt 1, och pelarläsningen 2026-09-29.
 */
const jamforelse = (v: BeskedVarden): string =>
  v.tillaggInraknat
    ? `Med resor och etablering inräknade blir priset här ungefär ${v.prisMedTillagg ?? ''} kr per kvadratmeter, och det jämför du med firmans kvadratmeterpris. Tar firman betalt för resor och etablering på en egen rad jämför du i stället med ${v.prisLag ?? ''} kr. Tillägget ger inget rotavdrag, eftersom resor och etablering inte är arbete på plats hos dig.`
    : `Jämför firmans pris per kvadratmeter med ${v.ettTal ? v.prisLag ?? '' : `${v.prisLag ?? ''} till ${v.prisHog ?? ''}`} kr. I ${v.ettTal ? "det priset" : "de priserna"} ingår redan resor och etablering. Har offerten resor och etablering på en egen rad, lägger du ihop den raden med resten innan du jämför summan med beloppet före rotavdraget.`;

export const TEXT = hartaAllt({
  /*
   * Beskedet överst i spalten. rubrik är en mening med ett verb som säger vad
   * läsaren ska göra. rad säger inte samma sak som rubriken.
   */
  besked: {
    belopp: {
      /* Vad läsaren ska räkna med att betala för sitt material, avrundat till tusental. */
      rubrik: (v: BeskedVarden): string =>
        `Budgetera ${budget(v)} kr för ett tak med ${(v.material ?? '').toLowerCase()}`,
      /*
       * Jämförelsetalet per m². När tillägget ligger i beloppet jämförs med
       * prisMedTillagg, som har tillägget i sig; plåtpriserna har redan
       * etableringen med.
       */
      rad: (v: BeskedVarden): string =>
        v.takform === 'pulpet' ? pulpetVarning(v, true).trim() : `Jämför firmans pris per kvadratmeter med ${v.tillaggInraknat ? `ungefär ${v.prisMedTillagg ?? ''}` : v.ettTal ? v.prisLag ?? '' : `${v.prisLag ?? ''} till ${v.prisHog ?? ''}`} kr. I ${v.ettTal ? "det priset" : "de priserna"} ingår resor och etablering.`,
    },
    tak: {
      /* Samma som vid belopp. */
      rubrik: (v: BeskedVarden): string =>
        `Budgetera ${budget(v)} kr för ett tak med ${(v.material ?? '').toLowerCase()}`,
      /* Att gränsen för rotavdraget stoppar kapat kr i den höga änden, och vad två ägare gör. Ordet "tak" står inte ensamt; det heter gräns. */
      rad: (v: BeskedVarden): string =>
        `${
          v.agare === 2
            ? `Vid ${v.ettTal ? 'det här priset' : 'det högre priset'} når ni båda gränsen för rotavdraget, och beloppet har den med.`
            : `Vid ${v.ettTal ? 'det här priset' : 'det högre priset'} når du gränsen för rotavdraget, och beloppet har den med.${v.takform === 'pulpet' ? '' : ' Två ägare som betalar har en gräns var.'}`
        }${pulpetVarning(v, true)}`,
    },
    lutning: {
      /*
       * Materialet går inte att lägga på takets vinkel (MINSTA_LUTNING), och
       * inget belopp visas. Vad läsaren ska göra: välja ett material för låg
       * lutning. Bär material och vinkel. Före 2026-09-29 stod varningen i
       * radens slut vid belopp, med hantverkarens mening: "Takpanneplåt går
       * inte att lägga på ett tak som lutar mindre än 14 grader, så beloppet
       * gäller inte ditt tak med ${v.vinkel} grader. Välj ett material för låg
       * lutning." Hantverkaren skriver.
       */
      rubrik: (v: BeskedVarden): string => `Välj ett annat material än ${(v.material ?? '').toLowerCase()} för ett tak som lutar ${v.vinkel} grader`,
      /* Att materialet kräver minst minLutning grader och att taket lutar vinkel grader. Kort. */
      rad: (v: BeskedVarden): string =>
        `${v.material ?? ''} kräver minst ${v.minLutning ?? ''} grader, så räknaren visar inget belopp.${pulpetVarning(v, false)}`,
    },
    utanfor: {
      /* Vad läsaren ska göra i stället: begära offert. Bär takarea. */
      rubrik: (v: BeskedVarden): string => `Låt en takfirma räkna på dina ${v.takarea} m² takyta`,
      /* Att källornas priser gäller tak från min till max m², så räknaren visar inget belopp för ett tak som är sida. Kort. */
      rad: (v: BeskedVarden): string =>
        `Priserna jag har gäller tak på ${v.min} till ${v.max} m². Hur mycket ${v.sida === 'over' ? 'billigare' : 'dyrare'} varje kvadratmeter blir på ett ${v.sida === 'over' ? 'större' : 'mindre'} tak vet jag inte, så jag visar inget belopp.${pulpetVarning(v, false)}`,
    },
  } satisfies Record<Utfall, { rubrik: (v: BeskedVarden) => string; rad: (v: BeskedVarden) => string }>,

  /*
   * Formulärets legender, etiketter och hjälprader (specen 4.1). Ordet "tak"
   * står inte ensamt där det kan betyda rotavdragets gräns, som heter "gräns".
   * Hjälpraderna visas bara i fullt format. Etiketterna i tvåkolumnsraderna
   * håller sig under 14 tecken, som på fasadyta.
   */
  form: {
    /* Legenden över husets mått. */
    'legend-huset': 'Huset',
    /* Etikett, längden gavel till gavel. */
    langd: 'Husets längd',
    /* Etikett, gavelns bredd. */
    bredd: 'Gavelns bredd',
    /* Etikett, takfotsutsprånget. Bara fullt format. */
    utsprang: 'Takutsprång',
    /* Etikett, gavelutsprånget. Bara fullt format. */
    gavel: 'Gavelutsprång',
    /* Hjälprad under huset: mät utvändigt, utsprången vågrätt ut från väggen. Bara fullt format. */
    'huset-hjalp':
      'Mät längden och bredden utvändigt, från vägg till vägg. Utsprången mäter du vågrätt ut från väggen till takets kant, längs långsidan och över gaveln.',
    /* Legenden över taket. */
    'legend-taket': 'Taket',
    /* Radioknappen: jag anger vinkeln. Bara fullt format. */
    'matt-vinkel': 'Jag vet takvinkeln',
    /* Radioknappen: jag anger nockhöjden. Bara fullt format. */
    'matt-nock': 'Jag har mätt nockhöjden',
    /* Etikett, takvinkeln. */
    vinkel: 'Takvinkel',
    /* Etikett, nockhöjden. */
    nock: 'Nockhöjd',
    /* Hjälprad: nockhöjden mäts från takfoten vid väggen. Bara fullt format. */
    'nock-hjalp':
      'Nockhöjden är höjden från takfoten vid väggen upp till nocken, och den mäter du enklast på gaveln utifrån. På ett pulpettak skriver du i stället hur mycket högre den höga väggen är än den låga.',
    /* Legenden över det nya takmaterialet. */
    'legend-material': 'Det nya taket',
    /* Legenden över takstolarnas centrumavstånd. Bara fullt format. */
    'legend-takstolar': 'Avstånd mellan takstolarna',
    /* Legenden över ägare och rotavdrag. */
    'legend-agare': 'Ägare och rotavdrag',
    /* Radioknappen för en ägare. */
    'agare-1': 'En ägare',
    /* Radioknappen för två ägare. */
    'agare-2': 'Två ägare',
    /* Etikett, rotavdrag som redan är använt i år, alla ägare tillsammans. Bara fullt format. */
    rot: 'Rotavdrag som redan är använt i år',
    /* Hjälprad under rot. Bara fullt format. */
    'rot-hjalp': 'Lägg ihop det som alla ägare har fått, så räknar jag med det som finns kvar.',
  },

  /* Radioetiketterna för takformen. */
  takform: {
    sadel: 'Sadeltak',
    pulpet: 'Pulpettak',
  } satisfies Record<Takform, string>,

  /*
   * Radioetiketterna för materialet. bandplat bär orden bandtäckt eller falsad
   * plåt. Beskedet och regeln om priset sätter etiketten mitt i en mening med
   * små bokstäver.
   */
  material: {
    bandplat: 'Bandtäckt eller falsad plåt',
    takpanneplat: 'Takpanneplåt',
    betong: 'Betongpannor',
    tegel: 'Tegelpannor',
    papp: 'Papp',
  } satisfies Record<Material, string>,

  /* Radioetiketterna för centrumavståndet, med enheten. */
  cc: {
    600: `${kronor(600)} mm`,
    900: `${kronor(900)} mm`,
    1200: `${kronor(1200)} mm`,
  } satisfies Record<(typeof CC_VAL)[number], string>,

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
    /* Nockhöjdens gränser för den bredden, med en decimal. */
    nock: (min: number, max: number): string =>
      `Med den bredden ska nockhöjden ligga mellan ${komma(min)} och ${komma(max)} meter.`,
    /* Nockhöjden är inget tal. */
    'nock-tal': 'Skriv nockhöjden i meter, till exempel 2,3.',
    cc: 'Välj ett av de tre avstånden.',
    agare: 'Välj en eller två ägare.',
    /* Gränsen för det antalet ägare kommer in som tal, ROT_TAK_KR gånger ägarna. */
    rot: (max: number): string =>
      `Skriv hur mycket rotavdrag som redan är använt i år. Med det antalet ägare kan det vara högst ${kronor(max)} kr.`,
  },

  /* Resultatspalten (specen 4.3). Högst 800 tecken synlig text vid standard. */
  spalt: {
    /* Etiketten över det stora talet. */
    'etikett-betala': 'Ditt pris efter rotavdraget',
    /* Raden "till X kr" efter det stora talet, bara när ettTal är falskt. Bär attBetalaHog. */
    till: (v: BeskedVarden): string => `till ${v.attBetalaHog ?? ''} kr`,
    /*
     * Takarean mot bottenytan. Påslaget (paslag) gäller ytan sett uppifrån med
     * utsprången, inte bottenytan, och står därför i regeln om takarean.
     */
    'rad-takarea': (v: BeskedVarden): string =>
      `Takytan är ${v.takarea} m² längs lutningen, och husets bottenyta är ${v.bottenyta} m².`,
    /*
     * Kedjan från takytan: priset per m² gånger ytan, plus tillägget när det är
     * inräknat, ger kostnaden före rot. Byggd ur räknarens eget jobb och inte
     * efter badrumsräknarens delning i arbete och material, som står i tabellen.
     */
    'rad-delning': (v: BeskedVarden): string =>
      v.tillaggInraknat
        ? `Med ${v.prisLag ?? ''} kr per kvadratmeter och ${v.tillagg} kr för resor och etablering kostar taket ${v.kostnadLag ?? ''} kr före avdraget.`
        : `Med ${v.ettTal ? v.prisLag ?? '' : `${v.prisLag ?? ''} till ${v.prisHog ?? ''}`} kr per kvadratmeter kostar taket ${v.ettTal ? v.kostnadLag ?? '' : `${v.kostnadLag ?? ''} till ${v.kostnadHog ?? ''}`} kr före avdraget.`,
    /* Arbetet i kostnaden och avdraget på det. */
    'rad-rot': (v: BeskedVarden): string =>
      v.ettTal
        ? `Av summan är ${v.arbeteLag ?? ''} kr arbete, som ger ${v.rotLag ?? ''} kr i rotavdrag.`
        : `Av summan är ${v.arbeteLag ?? ''} till ${v.arbeteHog ?? ''} kr arbete, som ger ${v.rotLag ?? ''} till ${v.rotHog ?? ''} kr i rotavdrag.`,
    /*
     * Att priserna är förmedlares och en firmas priser före rot, hämtade hamtat.
     * Förmedlarna nämns inte vid namn. En mening. Betong, tegel och papp har
     * bara en källa, en förmedlare, och får en egen mening.
     */
    'rad-kallor': (v: BeskedVarden): string =>
      v.ettTal
        ? `Kvadratmeterpriset är räknat ur en offertförmedlares exempel på ett helt tak, läst den ${v.hamtat}.`
        : `Kvadratmeterpriserna är det lägsta och det högsta i två källor, lästa den ${v.hamtat}.`,
    /*
     * Vinkel eller nock (den som inte angavs), takfallslängden och takstolarna vid cc. Länken lank-takstolar står efter.
     * Pulpettak med vinkeln angiven: nock är höjdskillnaden mellan den höga och
     * den låga väggen, inte en nockhöjd. Den raden skriver hantverkaren.
     */
    'rad-geometri': (v: BeskedVarden): string =>
      v.takform === 'pulpet' && v.matt === 'vinkel'
        ? `Den höga väggen är ${v.nock} m högre än den låga, och takfallet är ${v.takfallslangd} m långt. Med ${v.cc} mm mellan takstolarna ryms ungefär ${v.takstolar} takstolar.`
        : `${v.matt === 'nock' ? `Takvinkeln är ${v.vinkel} grader` : `Nockhöjden är ${v.nock} m`} och takfallet ${v.takfallslangd} m långt, och med ${v.cc} mm mellan takstolarna ryms ungefär ${v.takstolar} takstolar.`,
    /* Etiketten över takarean vid utanfor. */
    'etikett-takarea': 'Takytan längs lutningen',
    /* Enheten efter takarean vid utanfor. */
    'enhet-takarea': 'm²',
    /* Länk till "Därför blev svaret så". */
    pekrad: 'Talen bakom svaret',
    /* Länk till "Så räknar jag". */
    'lank-sa-raknar-jag': 'Formeln och varifrån priserna kommer',
    /*
     * Länk till /rakna/rotavdrag/ med den höga ändens arbete och material
     * ifyllda, vid belopp och tak. Den höga änden, för att det är där gränsen
     * för avdraget kan nås.
     */
    'lank-rotavdrag': 'Kontrollera att skatten räcker till hela avdraget',
    /* Länk till /rakna/takavvattning/ med huset ifyllt. */
    'lank-takavvattning': 'Hängrännor och stuprör till samma hus',
    /* Länk på takstolarna till /tak/takstolar/. */
    'lank-takstolar': 'Mer om takstolar och deras avstånd',
    /* Tillagd av utvecklaren, som i renovering.ts: etiketten över den delbara adressen. Specen saknar nyckeln. */
    'dela-etikett': 'Länk till ditt svar',
  },

  /* "Därför blev svaret så" (specen 4.4). */
  darfor: {
    /* Kolumnrubrikerna i tabellen över ändarna. */
    'tabell-ande': 'Post',
    'tabell-lag': 'Lägsta pris',
    'tabell-hog': 'Högsta pris',
    /* Radrubrikerna, med enheten i rubriken. */
    'rad-pris': 'Pris per m², kr',
    'rad-kostnad': 'Före rotavdraget, kr',
    'rad-arbete': 'Arbete, kr',
    'rad-material': 'Material, kr',
    'rad-rot': 'Rotavdrag, kr',
    'rad-betala': 'Att betala, kr',
    /*
     * Takexperters tillägg. Bär tillagg. När tillaggInraknat är falskt kan det
     * tillkomma och räknas inte in. När det är sant ligger det i beloppet, före
     * rotavdraget och utan avdrag (TILLAGG_ANDEL_ARBETE); den texten skriver
     * hantverkaren.
     */
    tillagg: (v: BeskedVarden): string => jamforelse(v),
    /* Raden som pekar ner till "Vad siffrorna vilar på". */
    kallrad: 'Källorna står i tabellen längre ner',
    /* Vid lutning, i stället för tabellen: varför det inte blir något belopp. Hantverkaren skriver. */
    lutning: (v: BeskedVarden): string =>
      `${v.material ?? ''} ska ligga på ett tak som lutar minst ${v.minLutning ?? ''} grader, och ditt lutar ${v.vinkel}. Både Plannja och Lindab anger den gränsen, och därför blir det inget belopp. Takytan och antalet takstolar har jag ändå räknat ut, och de står i svaret.`,
    /* Vid utanfor, i stället för tabellen. */
    utanfor: (v: BeskedVarden): string =>
      `Takytan på ${v.takarea} m² ligger ${v.sida === 'over' ? 'över' : 'under'} de ${v.min} till ${v.max} m² som priserna gäller för, och därför blir det inga belopp här. Jag har ändå räknat ut takets mått och takstolarna, och de står i svaret.`,
    /*
     * Stycket som ersätter tabellen när ettTal är sant. När tillaggInraknat är
     * sant går kedjan takarea gånger prisLag = lagtLag, plus tillagg =
     * kostnadLag, varav arbeteLag arbete som ger rotLag, kvar attBetalaLag.
     * Den texten skriver hantverkaren.
     */
    'ett-tal': (v: BeskedVarden): string =>
      v.tillaggInraknat
        ? `Takytan på ${v.takarea} m² gånger ${v.prisLag ?? ''} kr per kvadratmeter blir ${v.lagtLag ?? ''} kr. Med tillägget på ${v.tillagg} kr för resor och etablering blir det ${v.kostnadLag ?? ''} kr före rotavdraget. Av det är ${v.arbeteLag ?? ''} kr arbete, som ger ${v.rotLag ?? ''} kr i avdrag, och kvar att betala blir ${v.attBetalaLag ?? ''} kr.`
        : `Takytan på ${v.takarea} m² gånger ${v.prisLag ?? ''} kr per kvadratmeter blir ${v.kostnadLag ?? ''} kr före rotavdraget. Av det är ${v.arbeteLag ?? ''} kr arbete, som ger ${v.rotLag ?? ''} kr i avdrag, och kvar att betala blir ${v.attBetalaLag ?? ''} kr.`,
  },

  /*
   * Reglerna i "Därför blev svaret så". Källorna är data. En regel utan källa
   * är egen räkning, och det står i texten. Förmedlarna får inte nämnas vid
   * namn i text.
   */
  regel: {
    takarea: {
      text: (v: BeskedVarden): string =>
        `Priset räknas på takytan längs lutningen, ${v.takarea} m² i ditt fall. Utsprången gör den större än husets ${v.bottenyta} m² bottenyta, och lutningen lägger sedan till ${v.paslag} procent på ytan som taket täcker sett uppifrån.`,
      kallor: ['TAKIVAST'],
    },
    vinkel: {
      text: (v: BeskedVarden): string =>
        `${v.matt === 'nock' ? `Takvinkeln, ${v.vinkel} grader, följer av ${v.takform === 'pulpet' ? 'höjdskillnaden mellan väggarna' : 'nockhöjden'} och gavelns bredd.` : `${v.takform === 'pulpet' ? 'Höjdskillnaden mellan väggarna' : 'Nockhöjden'}, ${v.nock} m, följer av takvinkeln och gavelns bredd.`} Samma vinkel ger takfallets längd från den nedre kanten till den övre, med vanlig trigonometri.`,
      kallor: [],
    },
    pris: {
      text: (v: BeskedVarden): string =>
        v.ettTal
          ? `Ett färdiglagt tak med ${(v.material ?? '').toLowerCase()} kostar ${v.prisLag ?? ''} kr per kvadratmeter takyta, med moms och före rotavdraget.`
          : `Ett färdiglagt tak med ${(v.material ?? '').toLowerCase()} kostar ${v.prisLag ?? ''} till ${v.prisHog ?? ''} kr per kvadratmeter takyta, med moms och före rotavdraget. Spannet går från det lägsta till det högsta priset i källorna, utan något medelvärde.`,
      kallor: (i: TakbyteIndata) => prisKallor(i.material),
    },
    'en-kalla': {
      text: (_v: BeskedVarden): string =>
        'För det här materialet finns bara en källa med pris före rotavdraget. Priset per kvadratmeter är källans exempel på ett helt tak delat med takytan i exemplet, och därför blir det ett enda tal.',
      kallor: ['P1'],
    },
    'andel-arbete': {
      text: (v: BeskedVarden): string =>
        v.ettTal
          ? `Av takytan gånger kvadratmeterpriset är ${v.andelArbete ?? ''} procent arbete, efter källans egen uppdelning i arbete och material.`
          : `Arbetet är ${v.andelArbete ?? ''} procent av kostnaden. Där källorna delar upp priset olika har jag tagit den lägsta andelen arbete, så att rotavdraget hellre blir för litet än för stort.`,
      /* Källorna till materialets andel, inte alla andelskällor (hantverkarens retur 2026-09-29, punkt 5). */
      kallor: (i: TakbyteIndata) => andelKallor(i.material),
    },
    tillagg: {
      /* När tillaggInraknat är sant ligger tillägget i beloppet; den texten skriver hantverkaren. */
      text: (v: BeskedVarden): string =>
        v.tillaggInraknat
          ? `Etablering är kostnaden för att komma på plats med folk och utrustning. I exemplet som priset bygger på kommer ungefär ${v.tillagg} kr för resor, etablering och projektering ovanpå priset per kvadratmeter, och därför ligger den summan i beloppet. Ställningen ingår däremot i priset per kvadratmeter.`
          : 'Etablering är kostnaden för att komma på plats med folk och utrustning. Källorna till plåtpriserna har den med i sitt pris per kvadratmeter, så här läggs inget tillägg till.',
      kallor: ['P1'],
    },
    'rot-arbete': {
      text: (v: BeskedVarden): string =>
        `Av kostnaden är ${v.ettTal ? v.arbeteLag ?? '' : `${v.arbeteLag ?? ''} till ${v.arbeteHog ?? ''}`} kr arbete, och det är bara den delen som Skatteverket ger avdrag för.`,
      kallor: ['SKV-ROT', 'SKV-RATT'],
    },
    'rot-grans': {
      text: (_v: BeskedVarden): string =>
        `Den som äger huset kan få högst ${kronor(ROT_TAK_KR)} kr i rotavdrag om året, och avdraget är ${ROT_PROCENT} procent av arbetet.`,
      kallor: ['SKV-ROT'],
    },
    'rot-slog-i': {
      text: (v: BeskedVarden): string =>
        `Avdraget når gränsen, så du får ${v.kapat ?? ''} kr mindre i avdrag än ${ROT_PROCENT} procent av arbetet. Rotavdrag som redan är använt i år räknas in i gränsen.`,
      kallor: ['SKV-ROT'],
    },
    intervall: {
      text: (v: BeskedVarden): string =>
        `Priserna gäller villatak på ${v.min} till ${v.max} m², och bara där räknar jag fram ett belopp. Inom det spannet följer priset ytan rakt av, vilket är mitt antagande.`,
      /* Källorna till materialets pris, som för regeln pris (hantverkarens retur 2026-09-29, punkt 3). */
      kallor: (i: TakbyteIndata) => prisKallor(i.material),
    },
    takstolar: {
      text: (v: BeskedVarden): string =>
        `Räknaren använder ${v.cc} mm mellan takstolarna. Fabrikstillverkade takstolar dimensioneras oftast för ${kronor(CC_STANDARD)} mm mellan stolarna, men ${CC_VAL.filter((c) => c !== CC_STANDARD).map((c) => kronor(c)).join(' och ')} mm förekommer också.`,
      kallor: ['TRAGUIDEN'],
    },
  } satisfies Record<RegelNyckel, RegelText>,

  /* "Gör inte det här", ett stycke per rad. */
  gorInte: {
    /* Jämför aldrig ett pris per kvadratmeter mot bottenytan. */
    bottenyta:
      'Ett pris per kvadratmeter i en offert gäller takytan. Multiplicerar du det med husets bottenyta blir summan för låg, eftersom takytan alltid är större än bottenytan, och då ser varje offert dyrare ut än den är.',
    /*
     * Ställningshyra, container och material ger inget avdrag; montering av
     * ställningen gör det (Skatteverket, takbytesunderlaget 5). Får inte ha
     * samma meningar som rotavdrag.ts och renovering.ts.
     */
    'rot-pa-allt':
      'Ställningen är två poster för Skatteverket. Arbetet med att resa den och plocka ner den ger rotavdrag, men hyran för veckorna den står där gör det inte, och samma sak gäller containern och pannorna eller plåten. Arbetet ska stå för sig på fakturan, och där ser du vilken del avdraget gäller.',
    /* Beställ inte efter räknarens antal takstolar; leverantören räknar. */
    'bestall-takstolar':
      'Antalet takstolar här är en uppskattning. Ska de bytas räknar leverantören fram både antal och dimension för just ditt hus, och det är de siffrorna du beställer efter.',
  } satisfies Record<GorInte, string>,

  /* Kolumnen Vad i antagandetabellen, en per rad i ANTAGANDEN (specen 4.5). */
  antagande: {
    takarea: 'Takytan',
    'langs-lutningen': 'Hur takytan mäts',
    'utsprang-lika': 'Utsprånget på ett pulpettak',
    'pris-bandplat': 'Pris för lagd bandtäckt eller falsad plåt',
    'pris-takpanneplat': 'Pris för lagd takpanneplåt',
    'pris-betong': 'Pris för lagda betongpannor',
    'pris-tegel': 'Pris för lagda tegelpannor',
    'pris-papp': 'Pris för lagd papp',
    'en-kalla': 'Antal källor för priset',
    andel: 'Andelen arbete',
    tillagg: 'Tillägg för resor och etablering',
    /* Raden om att tillägget inte ger rotavdrag (TILLAGG_ANDEL_ARBETE), bara när tillägget är inräknat. */
    'tillagg-utan-rot': 'Rotavdrag på tillägget',
    'stallning-container': 'Ställning och container',
    'sadeltak-pris': 'Vilket tak priserna gäller',
    intervall: 'Takytor som får ett belopp',
    'rot-procent': 'Rotavdragets procentsats',
    'rot-grans': 'Rotavdragets gräns',
    'rut-skatt': 'Rutavdrag och skatt',
    cc: 'Avstånd mellan takstolarna',
    'takstol-gavel': 'Takstolarna vid gavlarna',
    'ingen-valm': 'Valmat tak och mansardtak',
    /* Materialets minsta lutning (MINSTA_LUTNING), bara vid utfallet lutning. Hantverkaren skriver. */
    'minsta-lutning': 'Minsta lutning för takpanneplåt',
  } as Record<string, string>,

  /*
   * Tillagd av utvecklaren, som i renovering.ts: kolumnen Värde för de rader
   * där värdet är ord och inte tal ur konstanterna (specen 4.5, "Värdet
   * visar"). Talen i parametrarna byggs av konstanterna.
   */
  antagandeVarde: {
    /* A = P / cos v, längs lutningen. */
    takarea: 'Ytan sett uppifrån, med utsprången, delad med cosinus för takvinkeln',
    /* Ytan längs lutningen, inte vågrätt, i båda takräknarna. */
    'langs-lutningen': 'Längs lutningen, som takfirmorna räknar',
    /* Pulpet: samma takfotsutsprång på låg och hög sida. */
    'utsprang-lika': 'Lika stort på den låga och den höga sidan',
    /* Materialet har en enda källa. */
    'en-kalla': 'En källa, priset räknat ur ett exempel på ett helt tak',
    /* andel procent, den lägsta av källornas; alla är källornas andelar i procent. */
    andel: (andel: string, alla: string[]): string =>
      alla.length > 1
        ? `${andel} procent, den lägsta av ${alla.slice(0, -1).join(', ')} och ${alla[alla.length - 1]} procent`
        : `${andel} procent`,
    /* tillagg kr. inraknat: ingår i beloppet före rotavdraget (texten skriver hantverkaren); annars räknas det inte in. */
    tillagg: (kr: string, inraknat: boolean): string =>
      inraknat ? `Cirka ${kr} kr, ingår i beloppet före rotavdraget` : `Cirka ${kr} kr, ingår inte i beloppet`,
    /* Hela tillägget räknas som kostnad utan rotavdrag (TILLAGG_ANDEL_ARBETE, ANTAGANDE med Skatteverkets text om övriga kostnader). */
    'tillagg-utan-rot': 'Inget, eftersom resor och etablering inte är arbete på plats',
    /* Ingår i källornas pris per m². */
    'stallning-container': 'Ingår i källornas pris per kvadratmeter',
    /* Priserna gäller sadeltak på villa. */
    'sadeltak-pris': 'Sadeltak på en villa',
    /* min till max m², linjärt. */
    intervall: (min: string, max: string): string => `${min} till ${max} m², priset följer ytan rakt av`,
    /* Rotavdragets gräns i kr per person och år. */
    'rot-grans': (kr: string): string => `${kr} kr per person och år`,
    /* Rutavdrag och skatt vägs inte in. */
    'rut-skatt': 'Räknas i räknaren för rotavdrag',
    /* cc mm som standard, ovriga förekommer. */
    cc: (cc: string, ovriga: string[]): string => `${cc} mm, men ${ovriga.join(' och ')} mm förekommer`,
    /* Första och sista takstolen står i gavellivet. */
    'takstol-gavel': 'En takstol står i varje gavel',
    /* Valmat tak och mansard räknas inte. */
    'ingen-valm': 'Går inte att välja, eftersom priserna gäller sadeltak',
    /* MINSTA_LUTNING för materialet, i grader. Hantverkaren skriver. */
    'minsta-lutning': `${MINSTA_LUTNING.takpanneplat ?? ''} grader enligt både Plannja och Lindab`,
  },

  /*
   * "Så räknar jag" som en numrerad lista: takarean, priset, andelen,
   * rotavdraget och takstolarna. Talen kommer ur StegVarden.
   */
  steg: (v: StegVarden): string[] => [
    'Ytan som taket täcker sett uppifrån, med utsprången inräknade, delas med cosinus för takvinkeln. Det ger takytan längs lutningen.',
    `Takytan gånger det lägsta och det högsta priset per kvadratmeter för materialet ger kostnaden före rotavdraget. Priserna läste jag den ${v.hamtat}.`,
    /*
     * Tillägget på v.tillagg kr: läggs till före rotavdraget när priset bara
     * har en källa, den som räknar det utanför sitt pris per m², och ger inget
     * avdrag. Vid flera källor läggs det inte till. Hantverkaren skriver.
     */
    `Har priset bara en källa, och tar den källan betalt för resor och etablering för sig, läggs ungefär ${v.tillagg} kr till före rotavdraget.`,
    'Kostnaden delas i arbete och material efter källornas uppdelning, med den lägsta andelen arbete när de anger olika andelar.',
    `Rotavdraget är ${v.rotProcent} procent av arbetet, men aldrig mer än ${v.rotGrans} kr per ägare och år minus det som redan är använt i år. Det du betalar är kostnaden minus avdraget.`,
    `Antalet takstolar är husets längd delad med avståndet mellan dem, avrundat uppåt, plus en, så att båda gavlarna får en takstol. Om du inte väljer något annat är avståndet ${v.cc} mm.`,
  ],

  /* Påslagstabellen i brödtextens H2 om takarean (specen 4.4 punkt 4). */
  paslag: {
    /* Kolumnrubrik: lutning i grader, med enheten. */
    'rubrik-lutning': 'Takvinkel (°)',
    /*
     * Kolumnrubrik: vad lutningen lägger till, i procent. Påslaget räknas på
     * ytan sett uppifrån med utsprången, inte på bottenytan (specen skrev
     * "större än bottenytan", vilket bara stämmer utan utsprång).
     */
    'rubrik-procent': 'Lutningen lägger till (%)',
    /* Kolumnrubrik: nockhöjd per meter halv bredd, i meter. tan v, alltså stigningen per meter vågrätt. */
    'rubrik-nock': 'Stigning per meter vågrätt (m)',
    /* Raden under tabellen. */
    rad: 'Procenten läggs på ytan som taket täcker sett uppifrån, med utsprången. Stigningen gånger halva gavelns bredd ger nockhöjden på ett sadeltak. Raden i fetstil ligger närmast din takvinkel, och talen är egen räkning.',
  },

  /*
   * Kortsvaret: tre till fem meningar byggda av kortsvarVarden(). Tre material,
   * källa och datum, och faktorn som lutningen styr (checklistans H2 0).
   * markering är talet som får <Markering>.
   */
  kortsvar: (v: KortsvarVarden): KortsvarDelar => ({
    fore: `En villa med ${v.bottenyta ?? ''} m² bottenyta har ungefär ${v.takarea ?? ''} m² tak om taket lutar ${v.vinkel ?? ''} grader och sticker ut ${v.utsprangTakfot ?? ''} m över långsidorna och ${v.utsprangGavel ?? ''} m över gavlarna. Utsprången gör ytan större, och lutningen lägger på ytterligare ${v.paslag27 ?? ''} procent. Med betongpannor för ${v.betong?.prisKvm ?? ''} kr per kvadratmeter och ungefär ${kronor(TILLAGG_KR)} kr för resor och etablering betalar du`,
    markering: `${v.betong?.attBetala ?? ''} kr`,
    efter: ` efter rotavdraget, och med tegelpannor för ${v.tegel?.prisKvm ?? ''} kr blir det ${v.tegel?.attBetala ?? ''} kr. Bandtäckt plåt kostar ${v.bandplat?.prisKvm ?? ''} kr per kvadratmeter med etableringen inräknad, och då landar du på ${v.bandplat?.attBetala ?? ''} kr. Pannpriserna är räknade ur en offertförmedlares exempel och plåtpriset kommer från två källor, alla före rotavdraget och lästa den ${v.hamtat ?? ''}.`,
  }),

  /* Sparas till publiceringsomgången (specen 10). Alt under 125 tecken, med orden takbyte och takarea. */
  skissAlt: 'Skiss av en husgavel med de mått som behövs för att räkna ut takarean vid ett takbyte',
  skissBildtext:
    'Gaveln är mätt utvändigt och utsprånget vågrätt ut från väggen. Pilen visar takfallets längd från takfoten till nocken, och det markerade talet är takarean för huset som står i formuläret från början.',
});

/* ------------------------------------------------------------------ *
 * Adressen
 * ------------------------------------------------------------------ */

const NYCKLAR = [
  'langd',
  'bredd',
  'utsprang',
  'gavel',
  'takform',
  'matt',
  'vinkel',
  'nock',
  'material',
  'cc',
  'agare',
  'rot',
] as const;

const arMaterial = (v: string | null): v is Material => v !== null && (MATERIAL_VAL as readonly string[]).includes(v);

/** Läser adressen enligt specen 3.4. */
export function tolkaQuery(q: URLSearchParams): { indata: TakbyteIndata; harIndata: boolean } {
  const harIndata = NYCKLAR.some((n) => q.has(n));
  const tak = lasTak(q, STANDARD);
  const raMaterial = q.get('material');
  const raCc = q.get('cc');
  const raAgare = q.get('agare');
  const raRot = q.get('rot');

  let ccMm: number = STANDARD.ccMm;
  if (raCc !== null && raCc.trim() !== '') {
    const n = tillTal(raCc);
    ccMm = (CC_VAL as readonly number[]).includes(n) ? n : NaN;
  }
  const agare =
    raAgare === null || raAgare.trim() === ''
      ? STANDARD.agare
      : raAgare.trim() === '1'
        ? 1
        : raAgare.trim() === '2'
          ? 2
          : NaN;

  return {
    harIndata,
    indata: {
      ...tak,
      material: arMaterial(raMaterial) ? raMaterial : STANDARD.material,
      ccMm,
      agare,
      rotKr: raRot === null ? STANDARD.rotKr : raRot.trim() === '' ? 0 : tillTal(raRot),
    },
  };
}

/** Den delbara adressen: takets nycklar ur takQuery, sedan material, cc, agare och rot, alltid alla. */
export function delbarQuery(i: TakbyteIndata, g: TakGeometri | null): URLSearchParams {
  const q = takQuery(i, g);
  q.set('material', i.material);
  q.set('cc', String(i.ccMm));
  q.set('agare', String(i.agare));
  q.set('rot', komma(i.rotKr));
  return q;
}

/**
 * Adressen till rotavdragsräknaren: arbete och material från den höga änden,
 * där gränsen för avdraget kan nås, och agare och rot. Nycklarna är dem
 * tolkaQuery i rotavdrag.ts läser.
 */
export function rotavdragQuery(r: TakbyteBelopp, i: TakbyteIndata): URLSearchParams {
  const q = new URLSearchParams();
  q.set('arbete', String(r.hog.arbeteKr));
  /* Allt som inte är arbete, alltså materialet och tillägget när det är inräknat. */
  q.set('material', String(r.hog.kostnadKr - r.hog.arbeteKr));
  q.set('agare', String(i.agare));
  q.set('rot', String(i.rotKr));
  return q;
}

/** Adressen till takavvattningen med huset ifyllt. */
export function avvattningQuery(i: TakIndata, g: TakGeometri | null): URLSearchParams {
  const q = new URLSearchParams();
  q.set('satt', 'hus');
  for (const [k, v] of takQuery(i, g)) q.set(k, v);
  return q;
}

/* ------------------------------------------------------------------ *
 * Räkningen
 * ------------------------------------------------------------------ */

/** Sant när takarean ligger i YTA_INTERVALL, gränserna inräknade. */
export function inomIntervall(a: number): boolean {
  return a >= YTA_INTERVALL[0] && a <= YTA_INTERVALL[1];
}

/**
 * En ände. tillaggKr är 0 eller TILLAGG_KR och läggs på före rotavdraget. Den
 * del av tillägget som är arbete (TILLAGG_ANDEL_ARBETE, i dag ingen) räknas in
 * i arbeteKr; resten skickas till raknaRotavdrag som kostnad utan avdrag.
 */
function ande(takareaM2: number, prisKvm: number, andel: number, tillaggKr: number, i: TakbyteIndata): Ande {
  const lagtKr = Math.round(takareaM2 * prisKvm);
  const lagtArbeteKr = Math.round(lagtKr * andel);
  const materialKr = lagtKr - lagtArbeteKr;
  const arbeteKr = lagtArbeteKr + Math.round(tillaggKr * TILLAGG_ANDEL_ARBETE);
  const kostnadKr = lagtKr + tillaggKr;
  const rot = raknaRotavdrag({
    arbetskostnadKr: arbeteKr,
    materialkostnadKr: kostnadKr - arbeteKr,
    antalAgare: i.agare,
    utnyttjatRotKr: i.rotKr,
    utnyttjatRutKr: 0,
    skattKr: null,
  });
  if (rot.status !== 'ok') throw new Error('[takbyte] Rotavdraget ska alltid gå att räkna på giltig indata');
  return {
    prisKvm,
    lagtKr,
    kostnadKr,
    arbeteKr,
    materialKr,
    tillaggKr,
    rotKr: rot.avdragKr,
    raktRotKr: rot.raktAvdragKr,
    kapatKr: rot.kapatKr,
    attBetalaKr: kostnadKr - rot.avdragKr,
    begransatAv: rot.begransatAv,
  };
}

export function raknaTakbyte(i: TakbyteIndata): TakbyteResultat {
  const fel: Partial<Record<FelNyckel, string>> = { ...valideraTak(i, TEXT.fel) };
  if (!(CC_VAL as readonly number[]).includes(i.ccMm)) fel.cc = TEXT.fel.cc;
  const agareGiltig = i.agare === 1 || i.agare === 2;
  if (!agareGiltig) fel.agare = TEXT.fel.agare;
  /* Gränsen för det antalet ägare. Är ägarfältet fel vägs rot mot den största gränsen fältet tar. */
  const rotMax = GRANSER.rotKr[1] * (agareGiltig ? i.agare : 2);
  if (!(Number.isFinite(i.rotKr) && i.rotKr >= GRANSER.rotKr[0] && i.rotKr <= rotMax)) {
    fel.rot = TEXT.fel.rot(rotMax);
  }
  if (Object.keys(fel).length > 0) return { status: 'ogiltig', fel };

  // Steg 1. Geometrin och takstolarna.
  const geometri = raknaTak(i);
  const takstolar = antalTakstolar(i.langdM, i.ccMm);

  // Steg 2. Utanför intervallet: inga belopp.
  if (!inomIntervall(geometri.takareaM2)) {
    return {
      status: 'ok',
      utfall: 'utanfor',
      sida: geometri.takareaM2 < YTA_INTERVALL[0] ? 'under' : 'over',
      geometri,
      takstolar,
      gorInteDetHar: ['bottenyta', 'bestall-takstolar'],
      regler: ['takarea', 'vinkel', 'intervall', 'takstolar'],
    };
  }

  /*
   * Steg 2b. Materialet går inte att lägga på vinkeln: inga belopp. Efter
   * intervallet, så att ett tak utanför det får utanfor som förut.
   */
  if (forLagLutning(i.material, geometri.vinkelGrader)) {
    return {
      status: 'ok',
      utfall: 'lutning',
      geometri,
      takstolar,
      gorInteDetHar: ['bottenyta', 'bestall-takstolar'],
      regler: ['takarea', 'vinkel', 'takstolar'],
    };
  }

  // Steg 3. Ändarna.
  const [lagPris, hogPris] = spann(i.material);
  const andel = andelArbete(i.material);
  const inraknat = tillaggInraknat(i.material);
  const tillagg = inraknat ? TILLAGG_KR : 0;
  const lag = ande(geometri.takareaM2, lagPris, andel, tillagg, i);
  const hog = ande(geometri.takareaM2, hogPris, andel, tillagg, i);

  // Steg 4 och 5.
  const utfall: 'belopp' | 'tak' = hog.begransatAv === 'procent' ? 'belopp' : 'tak';
  const ettTal = lag.prisKvm === hog.prisKvm;

  // Steg 7. Reglerna.
  const regler: RegelNyckel[] = ['takarea', 'vinkel', 'pris'];
  if (prisKallor(i.material).length === 1) regler.push('en-kalla');
  regler.push('andel-arbete', 'tillagg', 'rot-arbete', 'rot-grans');
  if (utfall === 'tak') regler.push('rot-slog-i');
  regler.push('intervall', 'takstolar');

  return {
    status: 'ok',
    utfall,
    geometri,
    takstolar,
    lag,
    hog,
    ettTal,
    andelArbete: andel,
    tillaggKr: TILLAGG_KR,
    tillaggInraknat: inraknat,
    // Steg 6.
    gorInteDetHar: ['bottenyta', 'rot-pa-allt', 'bestall-takstolar'],
    regler,
  };
}

/* ------------------------------------------------------------------ *
 * Värdena till texterna
 * ------------------------------------------------------------------ */

export function beskedVarden(r: TakbyteOk, i: TakbyteIndata): BeskedVarden {
  const g = r.geometri;
  const gemensamt = {
    utfall: r.utfall,
    takarea: m2Text(g.takareaM2),
    bottenyta: m2Text(g.bottenytaM2),
    paslag: procentText(g.paslagProcent),
    vinkel: vinkelText(g.vinkelGrader),
    nock: meterText(g.nockM),
    matt: i.matt,
    takform: i.takform,
    takfallslangd: meterText(g.takfallslangdM),
    takstolar: String(r.takstolar),
    cc: kronor(i.ccMm),
    min: kronor(YTA_INTERVALL[0]),
    max: kronor(YTA_INTERVALL[1]),
    agare: i.agare,
    tillagg: kronor(TILLAGG_KR),
    hamtat: datumText(PRISER_HAMTADE),
    material: TEXT.material[i.material],
    minLutning: MINSTA_LUTNING[i.material] === undefined ? null : vinkelText(MINSTA_LUTNING[i.material] ?? 0),
  };
  if (r.utfall === 'utanfor' || r.utfall === 'lutning') {
    return {
      ...gemensamt,
      attBetalaLag: null,
      attBetalaHog: null,
      kostnadLag: null,
      kostnadHog: null,
      lagtLag: null,
      lagtHog: null,
      rotLag: null,
      rotHog: null,
      kapat: null,
      arbeteLag: null,
      arbeteHog: null,
      materialLag: null,
      materialHog: null,
      prisLag: null,
      prisHog: null,
      prisMedTillagg: null,
      andelArbete: null,
      sida: r.utfall === 'utanfor' ? r.sida : null,
      ettTal: false,
      tillaggInraknat: false,
    };
  }
  return {
    ...gemensamt,
    attBetalaLag: kronor(r.lag.attBetalaKr),
    attBetalaHog: kronor(r.hog.attBetalaKr),
    kostnadLag: kronor(r.lag.kostnadKr),
    kostnadHog: kronor(r.hog.kostnadKr),
    lagtLag: kronor(r.lag.lagtKr),
    lagtHog: kronor(r.hog.lagtKr),
    rotLag: kronor(r.lag.rotKr),
    rotHog: kronor(r.hog.rotKr),
    kapat: kronor(r.hog.kapatKr),
    arbeteLag: kronor(r.lag.arbeteKr),
    arbeteHog: kronor(r.hog.arbeteKr),
    materialLag: kronor(r.lag.materialKr),
    materialHog: kronor(r.hog.materialKr),
    prisLag: kronor(r.lag.prisKvm),
    prisHog: kronor(r.hog.prisKvm),
    prisMedTillagg: r.tillaggInraknat ? kronor(Math.round(r.lag.kostnadKr / g.takareaM2)) : null,
    andelArbete: procentText(r.andelArbete * 100),
    sida: null,
    ettTal: r.ettTal,
    tillaggInraknat: r.tillaggInraknat,
  };
}

/** Talen kortsvaret byggs av, räknade med STANDARD. Skrivs aldrig för hand. */
export function kortsvarVarden(): KortsvarVarden {
  const g = raknaTak(STANDARD);
  const for_ = (material: Material): KortsvarMaterial => {
    const r = raknaTakbyte({ ...STANDARD, material });
    if (r.status !== 'ok' || (r.utfall !== 'belopp' && r.utfall !== 'tak')) {
      throw new Error('[takbyte] Standardhuset ska ge ett belopp');
    }
    const [lag, hog] = spann(material);
    return { prisKvm: spannText(lag, hog), attBetala: spannText(r.lag.attBetalaKr, r.hog.attBetalaKr) };
  };
  const tre: Material[] = ['betong', 'tegel', 'bandplat'];
  return {
    betong: for_('betong'),
    tegel: for_('tegel'),
    bandplat: for_('bandplat'),
    takarea: m2Text(g.takareaM2),
    bottenyta: m2Text(g.bottenytaM2),
    paslag27: procentText(g.paslagProcent),
    vinkel: vinkelText(g.vinkelGrader),
    utsprangTakfot: meterText(STANDARD.utsprangM),
    utsprangGavel: meterText(STANDARD.gavelM),
    hamtat: datumText(PRISER_HAMTADE),
    kallor: [...new Set(tre.flatMap(prisKallor))],
  };
}

/** Talen till "Så räknar jag". */
export function stegVarden(): StegVarden {
  return {
    rotProcent: String(ROT_PROCENT),
    rotGrans: kronor(ROT_TAK_KR),
    cc: kronor(CC_STANDARD),
    min: kronor(YTA_INTERVALL[0]),
    max: kronor(YTA_INTERVALL[1]),
    tillagg: kronor(TILLAGG_KR),
    hamtat: datumText(PRISER_HAMTADE),
  };
}

/** Källorna till en regel, för det här svaret. */
export function regelKallkoder(nyckel: RegelNyckel, i: TakbyteIndata): Kallkod[] {
  const k = TEXT.regel[nyckel].kallor;
  return typeof k === 'function' ? k(i) : k;
}

/**
 * Källorna som står vid namn under en regel: allt utom förmedlarna, som bara
 * namnges i antagandetabellen (checklistans fälla, som renovering.ts). Tom
 * lista betyder att regeln pekar ner till "Vad siffrorna vilar på" i stället.
 */
export function regelKallor(nyckel: RegelNyckel, i: TakbyteIndata): KallaRef[] {
  return regelKallkoder(nyckel, i)
    .map((k) => KALLOR[k])
    .filter((k) => k.slag !== 'förmedlare');
}

/** Sant vid belopp och tak, de utfall som har ändar och belopp. */
export function harBelopp(r: TakbyteOk): r is TakbyteBelopp {
  return r.utfall === 'belopp' || r.utfall === 'tak';
}

/**
 * Regeln som får källraden under sig, eller -1. En förmedlarregel är en regel
 * som vilar på en förmedlare och därför inte har någon källa vid namn; en
 * regel utan källa alls (egen räkning, som vinkel) är ingen. Vid belopp och
 * tak står raden redan i stycket ovanför listan och visas inte här.
 * Hantverkarens retur 2026-09-29, punkt 2.
 */
export function kallradRegel(r: TakbyteOk, i: TakbyteIndata): number {
  const markering = r.regler.map((n) =>
    regelKallor(n, i).length === 0 && regelKallkoder(n, i).some((k) => KALLOR[k].slag === 'förmedlare') ? [] : [n],
  );
  return kallradEfterRegel(markering, harBelopp(r));
}

/* ------------------------------------------------------------------ *
 * Antagandetabellen (specen 4.5)
 * ------------------------------------------------------------------ */

export type AntagandeTyp = 'Källa' | 'Antagande' | 'Egen räkning';

export interface AntagandeDef {
  nyckel: string;
  /** Byggs av konstanterna, aldrig för hand. */
  varde: (i: TakbyteIndata) => string;
  typ: AntagandeTyp;
  /** Tom för ett antagande utan källa. En funktion när källorna följer materialet. */
  kallor: Kallkod[] | ((i: TakbyteIndata) => Kallkod[]);
}

export interface AntagandeRad {
  nyckel: string;
  varde: string;
  typ: AntagandeTyp;
  kallor: Kallkod[];
}

/** "1 600 till 2 500 kr/m²; 1 500 till 2 500 kr/m²", i källornas ordning. */
const prisVarde = (m: Material): string =>
  materialDef(m)
    .priser.map((p) => `${spannText(p.lagKr, p.hogKr)} kr/m²`)
    .join('; ');

const prisRad = (m: Material): AntagandeDef => ({
  nyckel: `pris-${m}`,
  varde: () => prisVarde(m),
  typ: 'Källa',
  kallor: prisKallor(m),
});

export const ANTAGANDEN: AntagandeDef[] = [
  { nyckel: 'takarea', varde: () => TEXT.antagandeVarde.takarea, typ: 'Egen räkning', kallor: [] },
  { nyckel: 'langs-lutningen', varde: () => TEXT.antagandeVarde['langs-lutningen'], typ: 'Antagande', kallor: ['TAKIVAST'] },
  { nyckel: 'utsprang-lika', varde: () => TEXT.antagandeVarde['utsprang-lika'], typ: 'Antagande', kallor: [] },
  ...MATERIAL_VAL.map(prisRad),
  { nyckel: 'en-kalla', varde: () => TEXT.antagandeVarde['en-kalla'], typ: 'Antagande', kallor: ['P1'] },
  {
    nyckel: 'andel',
    varde: (i) =>
      TEXT.antagandeVarde.andel(
        procentText(andelArbete(i.material) * 100),
        materialDef(i.material).andelar.map((a) => procentText((a.arbeteKr / a.totaltKr) * 100)),
      ),
    typ: 'Antagande',
    /* Källorna till materialets andel (hantverkarens retur 2026-09-29, punkt 5). */
    kallor: (i) => andelKallor(i.material),
  },
  {
    nyckel: 'tillagg',
    varde: (i) => TEXT.antagandeVarde.tillagg(kronor(TILLAGG_KR), tillaggInraknat(i.material)),
    typ: 'Källa',
    kallor: ['P1'],
  },
  /* ANTAGANDE: TILLAGG_ANDEL_ARBETE. Skatteverket om övriga kostnader och restid. */
  { nyckel: 'tillagg-utan-rot', varde: () => TEXT.antagandeVarde['tillagg-utan-rot'], typ: 'Antagande', kallor: ['SKV-ROT'] },
  {
    nyckel: 'stallning-container',
    varde: () => TEXT.antagandeVarde['stallning-container'],
    typ: 'Källa',
    kallor: ['P1', 'P4', 'P5'],
  },
  { nyckel: 'sadeltak-pris', varde: () => TEXT.antagandeVarde['sadeltak-pris'], typ: 'Källa', kallor: ['P1', 'P4'] },
  {
    nyckel: 'intervall',
    varde: () => TEXT.antagandeVarde.intervall(kronor(YTA_INTERVALL[0]), kronor(YTA_INTERVALL[1])),
    typ: 'Antagande',
    kallor: ['P1', 'P4', 'P5'],
  },
  { nyckel: 'rot-procent', varde: () => `${ROT_PROCENT} procent`, typ: 'Källa', kallor: ['SKV-ROT'] },
  { nyckel: 'rot-grans', varde: () => TEXT.antagandeVarde['rot-grans'](kronor(ROT_TAK_KR)), typ: 'Källa', kallor: ['SKV-ROT'] },
  { nyckel: 'rut-skatt', varde: () => TEXT.antagandeVarde['rut-skatt'], typ: 'Antagande', kallor: [] },
  {
    nyckel: 'cc',
    varde: () =>
      TEXT.antagandeVarde.cc(
        kronor(CC_STANDARD),
        CC_VAL.filter((c) => c !== CC_STANDARD).map((c) => kronor(c)),
      ),
    typ: 'Källa',
    kallor: ['TRAGUIDEN'],
  },
  { nyckel: 'takstol-gavel', varde: () => TEXT.antagandeVarde['takstol-gavel'], typ: 'Antagande', kallor: [] },
  { nyckel: 'ingen-valm', varde: () => TEXT.antagandeVarde['ingen-valm'], typ: 'Antagande', kallor: [] },
  /* Källa: MINSTA_LUTNING, Plannja Royal och Regent samt Lindab Torekov och Norrviken. Bara vid utfallet lutning. */
  {
    nyckel: 'minsta-lutning',
    varde: () => TEXT.antagandeVarde['minsta-lutning'],
    typ: 'Källa',
    kallor: ['PL-ROYAL', 'LB-PANNA'],
  },
];

/** Raderna ur ANTAGANDEN som svaret vilar på, i tabellens ordning (specen 4.5, kolumnen "Visas när"). */
export function antagandenFor(r: TakbyteOk, i: TakbyteIndata): AntagandeRad[] {
  const belopp = harBelopp(r);
  const galler = new Set<string>(['takarea', 'langs-lutningen', 'intervall', 'cc', 'takstol-gavel', 'ingen-valm']);
  if (i.takform === 'pulpet') galler.add('utsprang-lika');
  if (r.utfall === 'lutning') galler.add('minsta-lutning');
  if (belopp) {
    for (const n of [
      `pris-${i.material}`,
      'andel',
      'tillagg',
      'stallning-container',
      'sadeltak-pris',
      'rot-procent',
      'rot-grans',
      'rut-skatt',
    ]) {
      galler.add(n);
    }
    if (prisKallor(i.material).length === 1) galler.add('en-kalla');
    if (tillaggInraknat(i.material)) galler.add('tillagg-utan-rot');
  }
  return ANTAGANDEN.filter((a) => galler.has(a.nyckel)).map((a) => ({
    nyckel: a.nyckel,
    varde: hart(a.varde(i)),
    typ: a.typ,
    kallor: typeof a.kallor === 'function' ? a.kallor(i) : a.kallor,
  }));
}
