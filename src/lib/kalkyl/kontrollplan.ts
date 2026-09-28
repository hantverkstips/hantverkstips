/**
 * Kontrollplansgeneratorn: läsaren väljer upp till tre åtgärder och får ett
 * förslag till kontrollplan enligt PBL 10 kap. 6 §, med kontrollpunkt, krav,
 * kontrollant och form per rad, anmälningar, arbetsplatsbesök och en tom
 * avfallshanteringsplan. Verktyget räknar inget. Det väljer rader ur KATALOG och
 * ställer upp dem.
 *
 * Ren modul utan importer, testbar utan bygge. Sidan /rakna/kontrollplan/
 * skickar formuläret som GET och ställer upp planen på servern, så ingen rad av
 * den här filen når klienten. Modulen läser aldrig dagens datum; vilket
 * regelverk som gäller avgörs av fältet inkom.
 *
 * Underlaget: docs/briefer/underlag-kalkyl-kontrollplan-2026-09-28.md (K-, B-,
 * V- och S-numren) och varv 2,
 * docs/briefer/underlag-kalkyl-kontrollplan-varv-2-2026-09-28.md (R-, B- och
 * KB-numren), båda lästa 2026-09-28. Specen med besluten:
 * docs/briefer/spec-kalkyl-kontrollplan-2026-09-28.md. Lagrummen i KATALOG är
 * avsnitt 3 i specen, efter varv 2, tecken för tecken, och testet låser dem.
 *
 * All text läsaren ser och som modulen äger står i TEXT och skrivs av
 * hantverkaren. Lagrummen är data och ägs av specen, inte av TEXT.
 *
 * Testas av scripts/test-kalkyl-kontrollplan.mjs mot underlagets två
 * exempelplaner (avsnitt 7) och specens fall T1 till T19.
 */

/* ------------------------------------------------------------------ *
 * Typer
 * ------------------------------------------------------------------ */

export type Atgard = 'altan' | 'tillbyggnad' | 'komplement' | 'eldstad' | 'ventilation' | 'va' | 'barande' | 'rivning';
export type Tak = 'nej' | 'skarmtak';
export type Placering = 'vid-huset' | 'fristaende';
export type Rokkanal = 'ny' | 'befintlig';
export type Hus = 'bostadshus' | 'komplementbostadshus';
export type JaNej = 'ja' | 'nej';
export type Inkom = 'fore-juli-2026' | 'juli-sept-2026' | 'fran-okt-2026';

export interface KontrollplanIndata {
  /** I ATGARD_ORDNING, utan dubbletter. */
  atgarder: Atgard[];
  /** Läses bara när altan är vald. */
  tak: Tak;
  /** Läses bara när altan är vald. */
  plac: Placering;
  /** Läses bara när eldstad är vald. */
  rok: Rokkanal;
  hus: Hus;
  vardefullt: JaNej;
  inkom: Inkom;
}

export type Kontrollant = 'B' | 'E' | 'B/E' | 'sotare' | 'funktionskontrollant' | 'konstruktor';
export type Kontrollform = 'egenkontroll' | 'sakkunnig';
/** Stigande styrka, i den ordningen. */
export type KaStatus = 'nej' | 'nej-skarmtak' | 'beror' | 'huvudregel';
export type Besked = 'plan' | 'plan-ka-skarmtak' | 'plan-ka-beror' | 'plan-ka';
export type Anmalan = 'slutbesked' | 'sotarprotokoll' | 'funktionskontroll';
export type Besok = 'inga-foreslas' | 'namnden';
export type AvfallTips = 'rivning' | 'bedom';
export type FelNyckel = 'a' | 'hus';

export type AltanPunkt =
  | 'altan-lage'
  | 'altan-grund'
  | 'altan-barformaga'
  | 'altan-mottagning'
  | 'altan-racke'
  | 'altan-trappa'
  | 'altan-taktackning'
  | 'altan-brandspridning'
  | 'altan-dagvatten';
export type EldPunkt =
  | 'eld-egenskaper'
  | 'eld-underlag'
  | 'eld-genomforing'
  | 'eld-avstand'
  | 'eld-eldstadsplan'
  | 'eld-forbranningsluft'
  | 'eld-mynning'
  | 'eld-gaser'
  | 'eld-tathet'
  | 'eld-takskydd';
export type TillPunkt =
  | 'till-lage'
  | 'till-grund'
  | 'till-fukt'
  | 'till-barformaga'
  | 'till-dimensionering'
  | 'till-mottagning'
  | 'till-brandspridning'
  | 'till-brandvarnare'
  | 'till-luftfloden'
  | 'till-energi';
export type KompPunkt = 'komp-lage' | 'komp-grund' | 'komp-fukt' | 'komp-barformaga' | 'komp-mottagning' | 'komp-brandspridning';
export type RivPunkt = 'riv-inventering' | 'riv-skadedjur' | 'riv-avfallsplan';
export type BarPunkt = 'bar-befintligt' | 'bar-dimensionering' | 'bar-mottagning' | 'bar-utforande';
export type VentPunkt = 'vent-barverk' | 'vent-brandtatning' | 'vent-floden' | 'vent-funktionskontroll';
export type VaPunkt = 'va-varmvatten' | 'va-aterstromning' | 'va-fall' | 'va-tathet' | 'va-skallning';
export type DeladPunkt = 'vardefullt' | 'aktsamhet' | 'overens';
export type PunktNyckel =
  | AltanPunkt
  | EldPunkt
  | TillPunkt
  | KompPunkt
  | RivPunkt
  | BarPunkt
  | VentPunkt
  | VaPunkt
  | DeladPunkt;

export type RegelNyckel =
  | 'innehall'
  | 'anpassad'
  | 'egen-sakkunnig'
  | 'faststalls'
  | 'slutbesked'
  | 'ka'
  | 'funktionskontroll'
  | 'energi'
  | 'aldre-lydelse'
  | 'aldre-byggregler';
export type GorInte = 'bbr-eks' | 'borja-fore-startbesked' | 'ta-i-bruk';

export interface Punkt {
  /** 1..n i planens ordning. */
  nr: number;
  nyckel: PunktNyckel;
  /** Lagrummet ur KATALOG, efter plac för altan-racke och efter inkom för till-energi. */
  krav: string;
  vem: Kontrollant;
  form: Kontrollform;
}

export type KontrollplanResultat =
  | {
      status: 'ok';
      indata: KontrollplanIndata;
      punkter: Punkt[];
      ka: KaStatus;
      besked: Besked;
      /** Regelverksraden, specen 2.7 steg 7. */
      forfattningar: string[];
      anmalningar: Anmalan[];
      besok: Besok;
      avfall: AvfallTips;
      tommaAvfallsrader: 3 | 6;
      regler: RegelNyckel[];
      gorInteDetHar: GorInte[];
    }
  | { status: 'utanfor'; orsak: 'aldre-regler'; indata: KontrollplanIndata; regler: RegelNyckel[] }
  | { status: 'ogiltig'; fel: Partial<Record<FelNyckel, string>> };

export type KontrollplanOk = Extract<KontrollplanResultat, { status: 'ok' }>;

export interface KallaRef {
  titel: string;
  url: string;
  /** Datum då källan lästes. */
  last: string;
}

/* ------------------------------------------------------------------ *
 * Källorna, en gång. Id, titel, adress och datum som i underlaget och varv 2.
 * ------------------------------------------------------------------ */

const LAST = '2026-09-28';

/** Varv 2 R1, "Ändrad: t.o.m. SFS 2026:1583". */
const R1_PBL: KallaRef = {
  titel: 'Plan- och bygglag (2010:900), riksdagen.se',
  url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/plan-och-bygglag-2010900_sfs-2010-900/',
  last: LAST,
};
/** Varv 2 R2, "Ändrad: t.o.m. SFS 2026:1722". */
const R2_PBF: KallaRef = {
  titel: 'Plan- och byggförordning (2011:338), riksdagen.se',
  url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/plan-och-byggforordning-2011338_sfs-2011-338/',
  last: LAST,
};
/** Varv 2 R3. */
const R3_LAG_2026_746: KallaRef = {
  titel: 'SFS 2026:746 Lag om ändring i plan- och bygglagen',
  url: 'https://svenskforfattningssamling.se/sites/default/files/sfs/2026-05/SFS2026-746.pdf',
  last: LAST,
};
/** Varv 2 R4. */
const R4_FORORDNING_2026_1265: KallaRef = {
  titel: 'SFS 2026:1265 Förordning om ändring i plan- och byggförordningen',
  url: 'https://svenskforfattningssamling.se/sites/default/files/sfs/2026-06/SFS2026-1265.pdf',
  last: LAST,
};
/** B4. */
const B4: KallaRef = {
  titel: 'Boverket, BFS 2024:4 Aktsamhet',
  url: 'https://rinfo.boverket.se/BFS2024-4/pdf/BFS2024-4.pdf',
  last: LAST,
};
/** Varv 2 B4a, ändrar bara 1 §. */
const B4A: KallaRef = {
  titel: 'Boverket, BFS 2026:6, ändring i BFS 2024:4',
  url: 'https://rinfo.boverket.se/BFS2024-4/pdf/BFS2026-6.pdf',
  last: LAST,
};
/** B6. Inga ändringsförfattningar (varv 2 avsnitt 1). */
const B6: KallaRef = {
  titel: 'Boverket, BFS 2024:6 Bärförmåga, stadga och beständighet',
  url: 'https://rinfo.boverket.se/BFS2024-6/pdf/BFS2024-6.pdf',
  last: LAST,
};
/** B7. */
const B7: KallaRef = {
  titel: 'Boverket, BFS 2024:7 Säkerhet i händelse av brand',
  url: 'https://rinfo.boverket.se/BFS2024-7/pdf/BFS2024-7.pdf',
  last: LAST,
};
/** Varv 2 B7a, ny lydelse av bl.a. 6 kap. 10 §. */
const B7A: KallaRef = {
  titel: 'Boverket, BFS 2025:10, ändring i BFS 2024:7',
  url: 'https://rinfo.boverket.se/BFS2024-7/pdf/BFS2025-10.pdf',
  last: LAST,
};
/** B8. Inga ändringsförfattningar. */
const B8: KallaRef = {
  titel: 'Boverket, BFS 2024:8 Hygien, hälsa och miljö samt vatten och avfall',
  url: 'https://rinfo.boverket.se/BFS2024-8/pdf/BFS2024-8.pdf',
  last: LAST,
};
/** B9. Inga ändringsförfattningar. */
const B9: KallaRef = {
  titel: 'Boverket, BFS 2024:9 Säkerhet vid användning',
  url: 'https://rinfo.boverket.se/BFS2024-9/pdf/BFS2024-9.pdf',
  last: LAST,
};
/** Varv 2 B14, BBR 31, omtryck av BFS 2011:6, med övergångsbestämmelse 3. */
const B14: KallaRef = {
  titel: 'Boverket, BFS 2024:14 (BFS 2011:6, BBR 31)',
  url: 'https://rinfo.boverket.se/BFS2011-6/pdf/BFS2024-14.pdf',
  last: LAST,
};
/** B26. */
const B26: KallaRef = {
  titel: 'Boverket, BFS 2026:9 Energihushållning och värmeisolering',
  url: 'https://rinfo.boverket.se/BFS2026-9/pdf/BFS2026-9.pdf',
  last: LAST,
};
/** Varv 2 KB4, om täthetsprovning i kontrollplanen (F3). */
const KB4: KallaRef = {
  titel: 'Boverket, PBL kunskapsbanken, Eldstäder och kanaler',
  url: 'https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/brandskydd/uppkomst-brand/eldstader-kanaler/',
  last: LAST,
};
/** V2. */
const V2: KallaRef = {
  titel: 'Västerås stad, exempel på kontrollplan, altan med skärmtak, från 1 juli 2026',
  url: 'https://www.vasteras.se/download/18.1287f9119ed44c3e3bc61c/1782215230084/01.%20Kontrollplan%20tillbyggnad%20altan%20fr.o.m.%201%20juli%202026.docx',
  last: LAST,
};
/** V3. */
const V3: KallaRef = {
  titel: 'Västerås stad, exempel på kontrollplan, eldstad eller rökkanal, från 1 juli 2026',
  url: 'https://www.vasteras.se/download/18.1287f9119ed44c3e3bc623/1782215230188/08.%20Kontrollplan%20eldstad%20och%20r%C3%B6kkanal%20fr.o.m.%201%20juli%202026.docx',
  last: LAST,
};
/** S2, exemplet för lovpliktig tillbyggnad eller komplementbyggnad. */
const S2: KallaRef = {
  titel: 'Stockholms stad, exempel på kontrollplan, lovpliktig tillbyggnad eller komplementbyggnad, nya byggregler',
  url: 'https://bygglov.stockholm/siteassets/bygglov/sok-lov-eller-anmala/kontrollplaner/lovpliktig-tillbyggnad-eller-komplementbyggnad-nya-byggregler.pdf',
  last: LAST,
};

/* ------------------------------------------------------------------ *
 * Konstanter. Källa eller ANTAGANDE i kommentaren över varje.
 * ------------------------------------------------------------------ */

/**
 * Ordningen på åtgärderna i formuläret, i adressen och i planen.
 * ANTAGANDE A6: byggnadsverk först, installationer sist, i den ordning man bygger.
 */
export const ATGARD_ORDNING: readonly Atgard[] = [
  'altan',
  'tillbyggnad',
  'komplement',
  'rivning',
  'barande',
  'eldstad',
  'ventilation',
  'va',
];

/** Åtgärderna som ett komplementbostadshus får ha (specen 2.7 steg 1, K13). */
const KOMPLEMENTBOSTADSHUS_ATGARDER: readonly Atgard[] = ['eldstad', 'ventilation', 'va'];

/** ANTAGANDE A5: en till tre åtgärder per plan, inklusive. */
export const GRANSER = { atgarder: [1, 3] } as const;

/**
 * Standardvärdena: altan med bygglov utan tak, vid huset. Det vanligaste fallet
 * och sidfrasen, fall T1 med åtta punkter (specen 2.3).
 */
export const STANDARD: KontrollplanIndata = {
  atgarder: ['altan'],
  tak: 'nej',
  plac: 'vid-huset',
  rok: 'ny',
  hus: 'bostadshus',
  vardefullt: 'nej',
  inkom: 'fran-okt-2026',
};

/**
 * Eldstadsplanen, meter: framför, vid sidorna, eller utanför öppningen.
 * Källa: BFS 2024:7 4 kap. 10 § (B7), bekräftad ordagrant i varv 2 (R16), läst 2026-09-28.
 */
export const ELDSTADSPLAN_M = { fram: 0.3, sida: 0.1, utanforOppning: 0.2 } as const;

/**
 * Mynningen över taktäckningen, meter.
 * Källa: BFS 2024:7 4 kap. 16 § (B7), bekräftad ordagrant i varv 2 (R16), läst 2026-09-28.
 */
export const MYNNING_OVER_TAKTACKNING_M = 1.0;

/**
 * Uteluftsflöde i en bostad, l/s per m² golvarea.
 * Källa: BFS 2024:8 3 kap. 5 § (B8), bekräftad ordagrant i varv 2 (R16), läst 2026-09-28.
 */
export const FLODE_BOSTAD_L_S_M2 = 0.35;

/**
 * Uteluftsflöde per person, l/s.
 * Källa: BFS 2024:8 3 kap. 5 § (B8), bekräftad ordagrant i varv 2 (R16), läst 2026-09-28.
 */
export const FLODE_PER_PERSON_L_S = 4.0;

/**
 * Lägsta temperatur på tappvarmvattnet, °C.
 * Källa: BFS 2024:8 8 kap. 6 § (B8), bekräftad ordagrant i varv 2 (R16), läst 2026-09-28.
 */
export const VARMVATTEN_MIN_C = 50;

/**
 * Högsta temperatur vid tappstället, °C.
 * Källa: BFS 2024:9 2 kap. 33 § (B9), bekräftad ordagrant i varv 2 (R16), läst 2026-09-28.
 */
export const SKALLNING_MAX_C = 60;

/**
 * Största byggnadsarea, m², för undantaget om brandspridning för en
 * komplementbyggnad till ett en- eller tvåbostadshus.
 * Källa: BFS 2024:7 6 kap. 10 § i lydelse BFS 2025:10 (varv 2, B7a, R4), läst 2026-09-28.
 */
export const KOMPLEMENT_BRANDUNDANTAG_M2 = 15;

/** Villkor för en rad i katalogen. Utan villkor står raden alltid med. */
export type Villkor = { tak: Tak } | { rok: Rokkanal };

/** Ett krav som byter lagrum efter ett fält. */
export type Krav =
  | string
  | { efter: 'plac'; lagrum: Record<Placering, string> }
  | { efter: 'inkom'; lagrum: Record<Exclude<Inkom, 'fore-juli-2026'>, string> };

export interface KatalogRad {
  nyckel: PunktNyckel;
  villkor?: Villkor;
  krav: Krav;
  vem: Kontrollant;
  form: Kontrollform;
}

const E = 'egenkontroll' as const;
const S = 'sakkunnig' as const;

/**
 * Katalogen, en lista per åtgärd i specens ordning. Lagrummen är specens
 * avsnitt 3 efter varv 2, tecken för tecken.
 *
 * Källa per författning: PBL R1, PBF R2, BFS 2024:4 B4 (1 § i lydelse BFS
 * 2026:6), BFS 2024:6 B6, BFS 2024:7 B7 och B7a, BFS 2024:8 B8, BFS 2024:9 B9,
 * BFS 2011:6 B14, BFS 2026:9 B26. Alla lästa i gällande lydelse 2026-09-28.
 * Radernas innehåll: underlaget avsnitt 4 och 7, varv 2 F1 till F9.
 */
export const KATALOG: Record<Atgard, readonly KatalogRad[]> = {
  /* Underlaget 7.1 och specen 3.1. Räcket enligt R7, skärmtakets rader enligt R8. */
  altan: [
    { nyckel: 'altan-lage', krav: 'Bygglovet; PBL 10 kap. 34 § 1', vem: 'B', form: E },
    { nyckel: 'altan-grund', krav: 'BFS 2024:6 1 kap. 12 och 18 §§', vem: 'B/E', form: E },
    { nyckel: 'altan-barformaga', krav: 'BFS 2024:6 1 kap. 2 § femte st., 12 och 18 §§', vem: 'B/E', form: E },
    { nyckel: 'altan-mottagning', krav: 'BFS 2024:6 1 kap. 19 §', vem: 'B/E', form: E },
    {
      nyckel: 'altan-racke',
      krav: {
        efter: 'plac',
        lagrum: { 'vid-huset': 'BFS 2024:9 2 kap. 10–11 §§', fristaende: 'PBF 3 kap. 10 §' },
      },
      vem: 'B/E',
      form: E,
    },
    { nyckel: 'altan-trappa', krav: 'BFS 2024:9 2 kap. 5 och 12–13 §§', vem: 'B/E', form: E },
    { nyckel: 'altan-taktackning', villkor: { tak: 'skarmtak' }, krav: 'BFS 2024:7 5 kap. 50 § andra st. 2', vem: 'B/E', form: E },
    { nyckel: 'altan-brandspridning', villkor: { tak: 'skarmtak' }, krav: 'BFS 2024:7 6 kap. 5 §', vem: 'B/E', form: E },
    { nyckel: 'altan-dagvatten', villkor: { tak: 'skarmtak' }, krav: 'BFS 2024:8 7 kap. 4 §', vem: 'B/E', form: E },
  ],
  /* Underlaget 4.7, varv 2 F5, F6 och F9, specen 3.3. */
  tillbyggnad: [
    { nyckel: 'till-lage', krav: 'Bygglovet; PBL 10 kap. 34 § 1', vem: 'B', form: E },
    { nyckel: 'till-grund', krav: 'BFS 2024:6 1 kap. 12 och 18 §§', vem: 'B/E', form: E },
    { nyckel: 'till-fukt', krav: 'BFS 2024:8 7 kap. 1 §', vem: 'B/E', form: E },
    {
      nyckel: 'till-barformaga',
      krav: 'BFS 2024:6 2 kap. 2, 3, 12 och 13 §§; 4 kap. 27–37 §§; 1 kap. 12 och 18 §§',
      vem: 'B/E',
      form: E,
    },
    /* Säkerhetsklass 2 för en- eller tvåbostadshus, BFS 2024:6 2 kap. 6 § 1 (varv 2 F9). */
    { nyckel: 'till-dimensionering', krav: 'BFS 2024:6 1 kap. 17 §', vem: 'konstruktor', form: E },
    { nyckel: 'till-mottagning', krav: 'BFS 2024:6 1 kap. 19 §', vem: 'B/E', form: E },
    { nyckel: 'till-brandspridning', krav: 'BFS 2024:7 6 kap. 5 §', vem: 'B/E', form: E },
    { nyckel: 'till-brandvarnare', krav: 'BFS 2024:7 7 kap. 47 §; 2 kap. 34–35 §§', vem: 'B/E', form: E },
    { nyckel: 'till-luftfloden', krav: 'BFS 2024:8 3 kap. 4 och 5 §§', vem: 'B/E', form: E },
    /* Varv 2 F6 (R6). A11 och A13. */
    {
      nyckel: 'till-energi',
      krav: {
        efter: 'inkom',
        lagrum: {
          'juli-sept-2026': 'BFS 2011:6 (BBR) avsnitt 1:22347 och 9:92',
          'fran-okt-2026': 'BFS 2026:9 3 kap. 1 § och bilaga 2 tabell 6',
        },
      },
      vem: 'B/E',
      form: E,
    },
  ],
  /*
   * Komplementbyggnad som inte är bostad, specen 3.4. Ingen
   * dimensioneringskontroll, energi, luftflöden eller brandvarnare
   * (ANTAGANDE A7, Källa BFS 2024:6 2 kap. 7 § 1 och 1 kap. 17 §).
   */
  komplement: [
    { nyckel: 'komp-lage', krav: 'Bygglovet; PBL 10 kap. 34 § 1', vem: 'B', form: E },
    { nyckel: 'komp-grund', krav: 'BFS 2024:6 1 kap. 12 och 18 §§', vem: 'B/E', form: E },
    { nyckel: 'komp-fukt', krav: 'BFS 2024:8 7 kap. 1 §', vem: 'B/E', form: E },
    {
      nyckel: 'komp-barformaga',
      krav: 'BFS 2024:6 2 kap. 2, 3, 12 och 13 §§; 4 kap. 27–37 §§; 1 kap. 12 och 18 §§',
      vem: 'B/E',
      form: E,
    },
    { nyckel: 'komp-mottagning', krav: 'BFS 2024:6 1 kap. 19 §', vem: 'B/E', form: E },
    { nyckel: 'komp-brandspridning', krav: 'BFS 2024:7 6 kap. 5 och 10 §§ i lydelse BFS 2025:10', vem: 'B/E', form: E },
  ],
  /* Underlaget 4.8, specen 3.5. */
  rivning: [
    { nyckel: 'riv-inventering', krav: 'PBL 10 kap. 8 a §; BFS 2024:4 9 § 2', vem: 'B', form: E },
    { nyckel: 'riv-skadedjur', krav: 'BFS 2024:4 9 § 1', vem: 'B', form: E },
    { nyckel: 'riv-avfallsplan', krav: 'PBL 10 kap. 5 a och 8 a §§', vem: 'B/E', form: E },
  ],
  /* Underlaget 4.6, specen 3.6. */
  barande: [
    { nyckel: 'bar-befintligt', krav: 'BFS 2024:6 1 kap. 13 §', vem: 'B/E', form: E },
    { nyckel: 'bar-dimensionering', krav: 'BFS 2024:6 1 kap. 17 §', vem: 'konstruktor', form: E },
    { nyckel: 'bar-mottagning', krav: 'BFS 2024:6 1 kap. 19 §', vem: 'B/E', form: E },
    { nyckel: 'bar-utforande', krav: 'BFS 2024:6 1 kap. 12 och 18 §§', vem: 'B/E', form: E },
  ],
  /*
   * Underlaget 7.2, specen 3.2. rok = befintlig tar bort genomföring, mynning och
   * takskydd (ANTAGANDE A3). Täthetsprovningen som egenkontroll med
   * skorstensfejarmästaren som kontrollant (R9, A12, Källa KB4).
   */
  eldstad: [
    { nyckel: 'eld-egenskaper', krav: 'BFS 2024:7 1 kap. 7 och 18 §§', vem: 'B', form: E },
    { nyckel: 'eld-underlag', krav: 'BFS 2024:7 4 kap. 13 §', vem: 'B/E', form: E },
    {
      nyckel: 'eld-genomforing',
      villkor: { rok: 'ny' },
      krav: 'BFS 2024:6 1 kap. 12 och 18 §§; BFS 2024:7 4 kap. 19 §',
      vem: 'B/E',
      form: E,
    },
    { nyckel: 'eld-avstand', krav: 'BFS 2024:7 4 kap. 8 och 14 §§', vem: 'B/E', form: E },
    { nyckel: 'eld-eldstadsplan', krav: 'BFS 2024:7 4 kap. 10 §', vem: 'B/E', form: E },
    { nyckel: 'eld-forbranningsluft', krav: 'BFS 2024:7 4 kap. 9 §', vem: 'B/E', form: E },
    { nyckel: 'eld-mynning', villkor: { rok: 'ny' }, krav: 'BFS 2024:7 4 kap. 16 §', vem: 'B/E', form: E },
    { nyckel: 'eld-gaser', krav: 'BFS 2024:8 9 kap. 4 §', vem: 'B/E', form: E },
    { nyckel: 'eld-tathet', krav: 'BFS 2024:7 4 kap. 17 och 21 §§; BFS 2024:9 2 kap. 38 §', vem: 'sotare', form: E },
    { nyckel: 'eld-takskydd', villkor: { rok: 'ny' }, krav: 'BFS 2024:9 2 kap. 15–21 §§', vem: 'B/E', form: E },
  ],
  /* Underlaget 4.4, specen 3.7. Brandtätningen enligt R5. Inget takskydd (ANTAGANDE A4). */
  ventilation: [
    { nyckel: 'vent-barverk', krav: 'BFS 2024:6 1 kap. 13 §', vem: 'B/E', form: E },
    { nyckel: 'vent-brandtatning', krav: 'BFS 2024:7 5 kap. 29 och 42 §§', vem: 'B/E', form: E },
    { nyckel: 'vent-floden', krav: 'BFS 2024:8 3 kap. 4 och 5 §§', vem: 'B/E', form: E },
    { nyckel: 'vent-funktionskontroll', krav: 'PBL 8 kap. 25 §; PBF 5 kap. 1–2 §§', vem: 'funktionskontrollant', form: S },
  ],
  /* Underlaget 4.5, specen 3.8. */
  va: [
    { nyckel: 'va-varmvatten', krav: 'BFS 2024:8 8 kap. 6 §', vem: 'B/E', form: E },
    { nyckel: 'va-aterstromning', krav: 'BFS 2024:8 8 kap. 5 §', vem: 'B/E', form: E },
    { nyckel: 'va-fall', krav: 'BFS 2024:8 8 kap. 1 och 10 §§', vem: 'B/E', form: E },
    { nyckel: 'va-tathet', krav: 'BFS 2024:8 8 kap. 1 och 2 §§', vem: 'B/E', form: E },
    { nyckel: 'va-skallning', krav: 'BFS 2024:9 2 kap. 33 §', vem: 'B/E', form: E },
  ],
};

/**
 * De delade raderna, specen 3.9. Läggs aldrig in per åtgärd: vardefullt först
 * när vardefullt = ja (ANTAGANDE A10), aktsamhet näst sist när någon åtgärd i
 * MED_AKTSAMHET är vald, overens alltid sist.
 */
export const DELADE: Record<DeladPunkt, KatalogRad> = {
  vardefullt: { nyckel: 'vardefullt', krav: 'PBL 8 kap. 13 och 17 §§', vem: 'B', form: E },
  aktsamhet: { nyckel: 'aktsamhet', krav: 'BFS 2024:4 6–7 §§', vem: 'B', form: E },
  overens: { nyckel: 'overens', krav: 'PBL 10 kap. 34 § 1', vem: 'B', form: E },
};

/** Åtgärderna som tar med den delade raden aktsamhet (specen 3.1 till 3.8, "delad"). */
export const MED_AKTSAMHET: readonly Atgard[] = ['altan', 'tillbyggnad', 'komplement', 'rivning', 'barande'];

/**
 * Lovgrund per åtgärd, på planens rad Åtgärd efter TEXT atgard.<a>.plan.
 * Källa: PBL 9 kap. 3, 9, 19 och 43 §§ (R1), PBF 6 kap. 1 § (R2), varv 2 F2 och F4,
 * alla bekräftade 2026-09-28 (specen 2.6).
 */
export const LOVGRUND: Record<Atgard | 'altan-skarmtak', string> = {
  altan: 'Bygglov, PBL 9 kap. 19 §',
  'altan-skarmtak': 'Bygglov, PBL 9 kap. 19 § eller 9 kap. 9 §',
  tillbyggnad: 'Bygglov, PBL 9 kap. 9 §',
  komplement: 'Bygglov, PBL 9 kap. 3 §',
  rivning: 'Rivningslov, PBL 9 kap. 43 §, eller anmälan, PBF 6 kap. 1 § 1',
  barande: 'Anmälan, PBF 6 kap. 1 § 2',
  eldstad: 'Anmälan, PBF 6 kap. 1 § 4',
  ventilation: 'Anmälan, PBF 6 kap. 1 § 4',
  va: 'Anmälan, PBF 6 kap. 1 § 5',
};

/**
 * Kontrollansvarig per åtgärd. Altan blir nej-skarmtak när tak = skarmtak.
 * Källa: PBL 10 kap. 9–10 §§ (K6, R1), PBF 7 kap. 5 § (K7, R2), specen 2.5.
 */
export const KA_PER_ATGARD: Record<Atgard, KaStatus> = {
  /* PBF 7 kap. 5 § första st. 6. */
  altan: 'nej',
  /* PBL 10 kap. 9 §; undantag 10 kap. 10 § 1. */
  tillbyggnad: 'huvudregel',
  /* PBF 7 kap. 5 § första st. 3. */
  komplement: 'nej',
  /* Rivningslov: PBL 10 kap. 9 §, utom PBF 7:5 p. 9; anmälan: PBF 7:5 p. 2. */
  rivning: 'beror',
  /* PBF 7 kap. 5 § första st. 2. */
  barande: 'nej',
  eldstad: 'nej',
  ventilation: 'nej',
  va: 'nej',
};

/** Lagrummet efter texten på KA-raden. Källa: som KA_PER_ATGARD. */
export const KA_LAGRUM: Record<KaStatus, string> = {
  nej: 'PBF 7 kap. 5 § första och andra st.',
  'nej-skarmtak': 'PBF 7 kap. 5 § första st. 6 och andra st.; PBL 10 kap. 10 § 1',
  beror: 'PBL 10 kap. 9 §; PBF 7 kap. 5 § första st. 2 och 9',
  huvudregel: 'PBL 10 kap. 9 och 10 §§',
};

const KA_STYRKA: readonly KaStatus[] = ['nej', 'nej-skarmtak', 'beror', 'huvudregel'];

const BESKED_FOR_KA: Record<KaStatus, Besked> = {
  nej: 'plan',
  'nej-skarmtak': 'plan-ka-skarmtak',
  beror: 'plan-ka-beror',
  huvudregel: 'plan-ka',
};

/** Lagrummet efter spalt.ansvar och i regeln faststalls (beslut 3). */
export const ANSVAR_LAGRUM = 'PBL 10 kap. 23 och 24 §§';
/** Lagrummet efter avfall.rubrik. */
export const AVFALL_LAGRUM = 'PBL 10 kap. 8 a §';
/** Lagrummet efter avfall.ruta, där undantaget "uppenbart" står (R12). */
export const AVFALL_RUTA_LAGRUM = 'PBL 10 kap. 8 a § andra st.';

/**
 * Lagrummet per regel under "Därför blev svaret så" (specen 2.9). ka och energi
 * beror på planen och står i regelLagrum.
 */
const REGEL_LAGRUM: Record<Exclude<RegelNyckel, 'ka' | 'energi'>, string> = {
  innehall: 'PBL 10 kap. 6 §',
  anpassad: 'PBL 10 kap. 7 §',
  'egen-sakkunnig': 'PBL 10 kap. 8 §',
  faststalls: ANSVAR_LAGRUM,
  slutbesked: 'PBL 10 kap. 34 § 1',
  funktionskontroll: 'PBL 8 kap. 25 §; PBF 5 kap. 1–2 §§',
  'aldre-lydelse': 'övergångsbestämmelse 2 till Lag (2026:712)',
  'aldre-byggregler': 'BFS 2024:14 övergångsbestämmelse 3',
};

/** Regeln energi efter när ansökan kom in (R6). */
const ENERGI_LAGRUM: Record<Exclude<Inkom, 'fore-juli-2026'>, string> = {
  'juli-sept-2026': 'BFS 2011:6 (BBR) avsnitt 1:22347 och 9:92',
  'fran-okt-2026': 'PBL 1 kap. 4 §; BFS 2026:9 3 kap. 1 §',
};

/** Lagrummet till en regel i en viss plan. */
export function regelLagrum(n: RegelNyckel, ka: KaStatus, inkom: Inkom): string {
  if (n === 'ka') return KA_LAGRUM[ka];
  if (n === 'energi') return inkom === 'juli-sept-2026' ? ENERGI_LAGRUM['juli-sept-2026'] : ENERGI_LAGRUM['fran-okt-2026'];
  return REGEL_LAGRUM[n];
}

/** Lagrummet per råd under "Gör inte det här" (specen 2.9, R11). */
export const GOR_INTE_LAGRUM: Record<GorInte, string> = {
  'bbr-eks': 'BFS 2024:14 övergångsbestämmelse 3',
  'borja-fore-startbesked': 'PBL 10 kap. 3 §',
  'ta-i-bruk': 'PBL 10 kap. 4 §',
};

/**
 * Regelverksraden: författningarna i den här ordningen, var och en med mönstret
 * som känner igen den i ett krav. PBL skrivs alltid (specen 2.7 steg 7).
 */
const FORFATTNINGAR: readonly { namn: string; monster: RegExp }[] = [
  { namn: 'PBL 10 kap. 6 § i lydelse Lag (2026:712)', monster: /PBL/ },
  { namn: 'PBF (2011:338)', monster: /PBF/ },
  { namn: 'BFS 2024:4', monster: /BFS 2024:4(?![0-9])/ },
  { namn: 'BFS 2024:6', monster: /BFS 2024:6(?![0-9])/ },
  { namn: 'BFS 2024:7', monster: /BFS 2024:7(?![0-9])/ },
  { namn: 'BFS 2024:8', monster: /BFS 2024:8(?![0-9])/ },
  { namn: 'BFS 2024:9', monster: /BFS 2024:9(?![0-9])/ },
  { namn: 'BFS 2011:6 (BBR)', monster: /BFS 2011:6(?![0-9])/ },
  { namn: 'BFS 2026:9', monster: /BFS 2026:9(?![0-9])/ },
];
/** BFS 2024:7 när komp-brandspridning finns i planen. */
const BFS_2024_7_I_LYDELSE = 'BFS 2024:7 i lydelse BFS 2025:10';

/* ------------------------------------------------------------------ *
 * Talen i texterna. Hantverkaren skriver {fram}, {mynning} och så vidare, och
 * medTal byter dem mot konstanterna med decimalkomma (specen 2.2).
 * ------------------------------------------------------------------ */

const TAL: Record<string, string> = {
  fram: ELDSTADSPLAN_M.fram.toFixed(2),
  sida: ELDSTADSPLAN_M.sida.toFixed(2),
  utanforOppning: ELDSTADSPLAN_M.utanforOppning.toFixed(2),
  mynning: MYNNING_OVER_TAKTACKNING_M.toFixed(1),
  flodeM2: FLODE_BOSTAD_L_S_M2.toFixed(2),
  flodePerson: FLODE_PER_PERSON_L_S.toFixed(1),
  varmvatten: String(VARMVATTEN_MIN_C),
  skallning: String(SKALLNING_MAX_C),
  komplementUndantag: String(KOMPLEMENT_BRANDUNDANTAG_M2),
};

/** Byter {namn} mot talet med decimalkomma. Okända platshållare står kvar. */
export function medTal(text: string): string {
  return text.replace(/\{([A-Za-z][A-Za-z0-9]*)\}/g, (hel, namn: string) => {
    const tal = TAL[namn];
    return tal === undefined ? hel : tal.replace('.', ',');
  });
}

/* ------------------------------------------------------------------ *
 * Publika strängar. Skrivs av hantverkaren. En nyckel per rad i specen 2.10,
 * platshållaren "TEXT SAKNAS: <nyckel>" tills texten finns. Testet kräver att
 * varje nyckel finns och är icke-tom, och att ingen innehåller orden i specens
 * beslut 3. När varje text visas står i kommentaren över gruppen.
 * ------------------------------------------------------------------ */

type Falt5 = 'vad' | 'hur' | 'mot' | 'verifikat' | 'nar';
export type AntagandeNr =
  | 'A1'
  | 'A2'
  | 'A3'
  | 'A4'
  | 'A5'
  | 'A6'
  | 'A7'
  | 'A8'
  | 'A9'
  | 'A10'
  | 'A11'
  | 'A12'
  | 'A13'
  | 'A14'
  | 'A15'
  | 'A16';

export type TextNyckel =
  | `atgard.${Atgard}.${'etikett' | 'hjalp' | 'plan'}`
  | 'atgard.altan.plan-skarmtak'
  | 'atgard.komplementbostadshus'
  | 'falt.a'
  | 'falt.tak'
  | `falt.tak.${Tak}`
  | 'falt.plac'
  | `falt.plac.${Placering}`
  | 'falt.rok'
  | `falt.rok.${Rokkanal}`
  | 'falt.hus'
  | `falt.hus.${Hus}`
  | 'falt.vardefullt'
  | `falt.vardefullt.${JaNej}`
  | 'falt.inkom'
  | `falt.inkom.${Inkom}`
  | 'falt.altan-hjalp'
  | 'falt.eldstad-hjalp'
  | `fel.${'a-tom' | 'a-for-manga' | 'hus-komplement'}`
  | `besked.${Besked}`
  | 'besked.aldre-regler'
  | `spalt.${'enhet' | 'ansvar' | 'pekrad' | 'utskrift' | 'beskedsvarning'}`
  | `ka.${KaStatus}`
  | `punkt.${PunktNyckel}.${Falt5}`
  | `punkt.altan-barformaga.${'vad-skarmtak' | 'nar-skarmtak'}`
  | `punkt.eld-egenskaper.${'vad-befintlig' | 'nar-befintlig'}`
  | `utskrift.ka.${KaStatus}`
  | 'utskrift.avfall.instruktion'
  | 'utskrift.falt.ka-namn'
  | 'utskrift.falt.ovriga-anmalningar'
  | 'skarm.handskrift'
  | `vem.${Kontrollant}`
  | `form.${Kontrollform}`
  | `kolumn.${'nr' | 'kontroll' | 'krav' | 'hur' | 'vem' | 'verifikat' | 'signatur' | 'teckenforklaring'}`
  | `anmalan.${Anmalan}`
  | `besok.${Besok}`
  | 'avfall.rubrik'
  | 'avfall.ruta'
  | `avfall.tips.${AvfallTips}`
  | `avfall.${'del1' | 'del2' | 'del3'}`
  | `avfall.kolumn.${'sak' | 'hur'}`
  | 'utskrift.titel'
  | 'utskrift.ansvar'
  | `utskrift.falt.${'fastighet' | 'byggherre' | 'entreprenor' | 'diarienummer' | 'upprattad' | 'atgard' | 'ka' | 'regelverk'}`
  | `utskrift.${'anmalningar' | 'besok' | 'intygande' | 'datum' | 'underskrift' | 'namnfortydligande' | 'skapad' | 'handskrift'}`
  | `regel.${RegelNyckel}`
  | `gorInte.${GorInte}`
  | `antagande.${AntagandeNr}`
  | `antagande.${AntagandeNr}.varde`;

export const TEXT: Record<TextNyckel, string> = {
  /* Formuläret, kryssrutorna för a: etikett och hjälprad per åtgärd (hjälpraden visas inte i det kompakta formuläret). plan står på planens rad Åtgärd, på skärm och papper, före lovgrunden ur LOVGRUND. komplement.hjalp säger att valet gäller garage, förråd och liknande, inte komplementbostadshus (A14). */
  'atgard.altan.etikett': 'Ny altan',
  'atgard.altan.hjalp': 'Planen behövs bara om altanen kräver bygglov. Vet du inte det, pröva först bygglovsräknaren under Läs vidare. Tak och placering väljer du längre ned.',
  'atgard.altan.plan': 'Ny altan',
  'atgard.tillbyggnad.etikett': 'Tillbyggnad av huset',
  'atgard.tillbyggnad.hjalp': 'Ett nytt rum eller en ny del av huset som kräver bygglov.',
  'atgard.tillbyggnad.plan': 'Tillbyggnad av bostadshuset',
  'atgard.komplement.etikett': 'Garage, förråd eller annan komplementbyggnad',
  'atgard.komplement.hjalp': 'Byggnaden kräver bygglov och ingen ska bo i den. Ett gästhus som kräver bygglov kan jag inte göra någon plan för här. Använd kommunens mall för det.',
  'atgard.komplement.plan': 'Nybyggnad av komplementbyggnad',
  'atgard.rivning.etikett': 'Rivning av en hel byggnad',
  'atgard.rivning.hjalp': 'Rivningen kräver rivningslov eller ska anmälas. Ska du bara riva en bärande vägg väljer du ändringen i bärande konstruktion.',
  'atgard.rivning.plan': 'Rivning av byggnad',
  'atgard.barande.etikett': 'Ändring i bärande konstruktion',
  'atgard.barande.hjalp': 'Till exempel en ny öppning i en bärande vägg. En sådan ändring ska anmälas.',
  'atgard.barande.plan': 'Ändring av bärande konstruktion',
  'atgard.eldstad.etikett': 'Eldstad eller skorsten',
  'atgard.eldstad.hjalp': 'En ny kamin, kakelugn eller insats, med ny eller befintlig skorsten. Installationen ska anmälas.',
  'atgard.eldstad.plan': 'Installation av eldstad',
  'atgard.ventilation.etikett': 'Ny eller ändrad ventilation',
  'atgard.ventilation.hjalp': 'Till exempel ett nytt aggregat med värmeåtervinning. En sådan installation ska anmälas.',
  'atgard.ventilation.plan': 'Installation eller ändring av ventilation',
  'atgard.va.etikett': 'Vatten och avlopp',
  'atgard.va.hjalp': 'En ny installation eller en väsentlig ändring, till exempel en ny avloppsstam i ett nytt schakt. Det ska anmälas. Att koppla ett ombyggt badrum till stammen som redan finns behöver normalt ingen anmälan.',
  'atgard.va.plan': 'Installation eller ändring av vatten och avlopp',
  /* Planens rad Åtgärd i stället för atgard.altan.plan när tak = skarmtak: nämnden bedömer om det är en altan eller en tillbyggnad (R8). */
  'atgard.altan.plan-skarmtak': 'Altan med skärmtak, där byggnadsnämnden bedömer om det är en altan eller en tillbyggnad',
  /* Planens rad Åtgärd före installationerna när hus = komplementbostadshus: huset kräver varken lov eller anmälan, planen gäller installationerna (K13). */
  'atgard.komplementbostadshus': 'Själva komplementbostadshuset kräver varken bygglov eller anmälan, så planen gäller bara installationerna.',
  /* Formuläret: legend per grupp och etikett per alternativ. falt.a bär också "upp till tre" om hantverkaren inte vill ha en egen rad. altan-hjalp och eldstad-hjalp står under legenden för altanens och eldstadens frågor och säger att de bara läses när åtgärden är vald. Bara i det fulla formuläret, utom falt.a. */
  'falt.a': 'Vad ska du bygga eller ändra? Välj upp till tre.',
  'falt.tak': 'Får altanen tak?',
  'falt.tak.nej': 'Nej, den är öppen',
  'falt.tak.skarmtak': 'Ja, ett skärmtak',
  'falt.plac': 'Var står altanen?',
  'falt.plac.vid-huset': 'Vid huset',
  'falt.plac.fristaende': 'Fristående på tomten',
  'falt.rok': 'Vilken skorsten ska eldstaden kopplas till?',
  'falt.rok.ny': 'En ny skorsten eller rökkanal',
  'falt.rok.befintlig': 'En skorsten som redan finns',
  'falt.hus': 'Vilket hus gäller det?',
  'falt.hus.bostadshus': 'Bostadshuset, en villa, ett parhus eller ett radhus',
  'falt.hus.komplementbostadshus': 'Ett komplementbostadshus utan bygglov, det som förr hette attefallshus',
  'falt.vardefullt': 'Är huset eller området särskilt värdefullt?',
  'falt.vardefullt.ja': 'Ja, det är utpekat i detaljplanen eller av kommunen',
  'falt.vardefullt.nej': 'Nej, inte vad jag vet',
  'falt.inkom': 'När kom ansökan eller anmälan in till kommunen, eller när skickar du in den?',
  'falt.inkom.fore-juli-2026': 'Före 1 juli 2026',
  'falt.inkom.juli-sept-2026': '1 juli till 30 september 2026',
  'falt.inkom.fran-okt-2026': '1 oktober 2026 eller senare',
  'falt.altan-hjalp': 'De här två frågorna gäller bara om du valt altan.',
  'falt.eldstad-hjalp': 'Den här frågan gäller bara om du valt eldstad.',
  /* Feltexterna, direkt under legenden för a respektive hus. a-tom: ingen åtgärd vald. a-for-manga: fler än tre. hus-komplement: komplementbostadshus med annat än eldstad, ventilation eller VA. */
  'fel.a-tom': 'Kryssa i minst en sak som du ska bygga eller ändra.',
  'fel.a-for-manga': 'Välj högst tre saker, annars blir planen för lång att läsa och skriva ut.',
  'fel.hus-komplement': 'I ett komplementbostadshus utan bygglov gäller planen bara eldstad, ventilation och vatten och avlopp. Ta bort de andra valen eller välj bostadshuset.',
  /* Beskedet överst i resultatspalten, en mening med verb, efter KA-status: plan (nej), plan-ka-skarmtak, plan-ka-beror, plan-ka (huvudregel). aldre-regler när inkom = fore-juli-2026; då ingen plan. */
  'besked.plan': 'Skriv ut planen, fyll i resten för hand och skicka in den till byggnadsnämnden.',
  'besked.plan-ka-skarmtak': 'Skriv ut planen och fråga nämnden om skärmtaket gör altanen till en tillbyggnad.',
  'besked.plan-ka-beror': 'Ta reda på om rivningen kräver rivningslov, för då behövs som huvudregel en kontrollansvarig.',
  'besked.plan-ka': 'Skaffa en kontrollansvarig och gå igenom planen tillsammans innan den skickas in.',
  'besked.aldre-regler': 'Använd kommunens mall för ärenden som kom in före 1 juli 2026.',
  /* Resultatspalten. ansvar alltid under beskedet utom vid äldre regler, med lagrummet PBL 10 kap. 23 och 24 §§ efter (beslut 3). enhet efter det stora talet (antalet punkter). pekrad: planen står under verktyget. utskrift: hur man skriver ut eller sparar som PDF i webbläsarens meny, ingen knapp. */
  /* Vid ogiltigt värde: enda texten i spalten ovanför den delbara adressen, likadan på alla beskedsräknare, säger att planen kommer när fältet är rättat (specen för grannemedgivandet 12.8). */
  'spalt.beskedsvarning': 'Planen kommer när valen stämmer. Rätta det som meddelandet vid formuläret pekar på, så ställer jag upp den.',
  'spalt.enhet': 'kontroller i planen',
  'spalt.ansvar': 'Det här är ditt förslag. Byggnadsnämnden prövar det, kan ändra i det och fastställer planen i startbeskedet.',
  'spalt.pekrad': 'Hela planen står under verktyget, med en rad per kontroll.',
  'spalt.utskrift': 'Skriv ut med webbläsarens meny, eller med Dela och Skriv ut på telefonen. Där kan du också spara planen som PDF.',
  /* Kontrollansvarig, i spalten och på planens rad Kontrollansvarig, med KA_LAGRUM efter. Innebörden i specen 2.5. */
  'ka.nej': 'Du behöver ingen kontrollansvarig, men nämnden kan besluta att du ska ha en.',
  'ka.nej-skarmtak': 'Du behöver ingen kontrollansvarig för en altan. Bedömer nämnden skärmtaket som en tillbyggnad behövs ingen heller om nämnden ser tillbyggnaden som en liten ändring av huset, men det finns ingen storleksgräns att gå efter, så fråga när du ändå frågar om taket.',
  'ka.beror': 'Du behöver en kontrollansvarig om rivningen kräver rivningslov, men inte om det räcker med en anmälan.',
  'ka.huvudregel': 'Du behöver en kontrollansvarig. Undantaget är små ändringar av ett en- eller tvåbostadshus, så fråga nämnden om din tillbyggnad räknas dit.',
  /* Varv 3, K9: KA-raden i planen, på skärm och papper, med KA_LAGRUM efter. Handlingstext i tredje person, utan råd; spalten behåller ka.*. */
  'utskrift.ka.nej': 'Krävs inte för åtgärden, om byggnadsnämnden inte beslutar annat.',
  'utskrift.ka.nej-skarmtak': 'Krävs inte för en altan. Bedöms skärmtaket som en tillbyggnad krävs ingen om byggnadsnämnden ser tillbyggnaden som en liten ändring av bostadshuset.',
  'utskrift.ka.beror': 'Krävs som huvudregel vid rivningslov, men inte när rivningen bara ska anmälas.',
  'utskrift.ka.huvudregel': 'Krävs som huvudregel. Små ändringar av en- eller tvåbostadshus kan undantas.',
  /* Kontrollpunkterna, altan. En rad i planens tabell per punkt när raden är med: vad och nar i kolumnen Kontroll, hur och mot i kolumnen Hur, verifikat i kolumnen Verifikat. Tal skrivs som {fram}, {sida}, {utanforOppning}, {mynning}, {flodeM2}, {flodePerson}, {varmvatten}, {skallning}, {komplementUndantag}; koden sätter in dem. */
  'punkt.altan-lage.vad': 'Altanens läge och höjd',
  'punkt.altan-lage.hur': 'Mätning',
  'punkt.altan-lage.mot': 'Mot situationsplanen i lovet',
  'punkt.altan-lage.verifikat': 'Signatur och foto',
  'punkt.altan-lage.nar': 'Efter utsättning, före plintarna',
  'punkt.altan-grund.vad': 'Grundläggning och plintar',
  'punkt.altan-grund.hur': 'Visuell kontroll och mätning',
  'punkt.altan-grund.mot': 'Mot K-ritning eller tillverkarens anvisning',
  'punkt.altan-grund.verifikat': 'Foto',
  'punkt.altan-grund.nar': 'Före igenfyllnad',
  'punkt.altan-barformaga.vad': 'Bärlinor och reglar',
  'punkt.altan-barformaga.hur': 'Visuell kontroll och mätning av dimensioner',
  'punkt.altan-barformaga.mot': 'Mot K-ritning och tillverkarens anvisning för snö och vind',
  'punkt.altan-barformaga.verifikat': 'Signatur',
  'punkt.altan-barformaga.nar': 'Innan trallen läggs',
  /* Varv 3, K4: kolumnen Kontroll för bärförmågan när tak = skarmtak. Utan tak gäller .vad och .nar ovan, som skrivs om utan skärmtak och takbeklädnad. */
  'punkt.altan-barformaga.vad-skarmtak': 'Bärlinor, reglar och skärmtakets bärverk',
  'punkt.altan-barformaga.nar-skarmtak': 'Innan trall och takbeklädnad läggs',
  'punkt.altan-mottagning.vad': 'Virke och beslag',
  'punkt.altan-mottagning.hur': 'Visuell kontroll av märkning',
  'punkt.altan-mottagning.mot': 'Mot följesedel och K-ritning',
  'punkt.altan-mottagning.verifikat': 'Följesedel',
  'punkt.altan-mottagning.nar': 'Vid leverans',
  'punkt.altan-racke.vad': 'Räcke och skydd mot fall',
  'punkt.altan-racke.hur': 'Mätning av höjd och öppningar',
  'punkt.altan-racke.mot': 'Mot A-ritning',
  'punkt.altan-racke.verifikat': 'Signatur och foto',
  'punkt.altan-racke.nar': 'Efter montering',
  'punkt.altan-trappa.vad': 'Trappa och ledstång',
  'punkt.altan-trappa.hur': 'Mätning',
  'punkt.altan-trappa.mot': 'Mot A-ritning',
  'punkt.altan-trappa.verifikat': 'Signatur',
  'punkt.altan-trappa.nar': 'Efter montering',
  'punkt.altan-taktackning.vad': 'Taktäckningens brandklass',
  'punkt.altan-taktackning.hur': 'Visuell kontroll av produktblad',
  'punkt.altan-taktackning.mot': 'Mot produktens angivna brandklass',
  'punkt.altan-taktackning.verifikat': 'Produktblad',
  'punkt.altan-taktackning.nar': 'Vid leverans',
  'punkt.altan-brandspridning.vad': 'Avstånd till närmaste byggnad, skydd mot brandspridning',
  'punkt.altan-brandspridning.hur': 'Mätning och visuell kontroll',
  'punkt.altan-brandspridning.mot': 'Mot A-ritning och situationsplan',
  'punkt.altan-brandspridning.verifikat': 'Signatur',
  'punkt.altan-brandspridning.nar': 'Före byggstart',
  'punkt.altan-dagvatten.vad': 'Regnvatten från taket leds bort från huset',
  'punkt.altan-dagvatten.hur': 'Visuell kontroll',
  'punkt.altan-dagvatten.mot': 'Mot A-ritning',
  'punkt.altan-dagvatten.verifikat': 'Foto',
  'punkt.altan-dagvatten.nar': 'När hängrännan sitter uppe',
  /* Kontrollpunkterna, tillbyggnad. En rad i planens tabell per punkt när raden är med: vad och nar i kolumnen Kontroll, hur och mot i kolumnen Hur, verifikat i kolumnen Verifikat. Tal skrivs som {fram}, {sida}, {utanforOppning}, {mynning}, {flodeM2}, {flodePerson}, {varmvatten}, {skallning}, {komplementUndantag}; koden sätter in dem. */
  'punkt.till-lage.vad': 'Utstakning, läge och höjd',
  'punkt.till-lage.hur': 'Mätning',
  'punkt.till-lage.mot': 'Mot situationsplanen i lovet',
  'punkt.till-lage.verifikat': 'Signatur',
  'punkt.till-lage.nar': 'Efter utstakning',
  'punkt.till-grund.vad': 'Grundläggning och armering',
  'punkt.till-grund.hur': 'Visuell kontroll och mätning',
  'punkt.till-grund.mot': 'Mot K-ritning',
  'punkt.till-grund.verifikat': 'Foto',
  'punkt.till-grund.nar': 'Före gjutning',
  'punkt.till-fukt.vad': 'Fuktsäkerhet',
  'punkt.till-fukt.hur': 'Visuell kontroll',
  'punkt.till-fukt.mot': 'Mot A-ritning och fuktsäkerhetsdokumentationen',
  'punkt.till-fukt.verifikat': 'Signatur',
  'punkt.till-fukt.nar': 'Innan konstruktionen kläs in',
  'punkt.till-barformaga.vad': 'Bärförmåga för snö och vind, takstolar',
  'punkt.till-barformaga.hur': 'Visuell kontroll och mätning',
  'punkt.till-barformaga.mot': 'Mot K-ritning',
  'punkt.till-barformaga.verifikat': 'Signatur',
  'punkt.till-barformaga.nar': 'Före inklädnad',
  'punkt.till-dimensionering.vad': 'Dimensioneringskontroll av beräkningarna',
  'punkt.till-dimensionering.hur': 'Granskning',
  'punkt.till-dimensionering.mot': 'Mot konstruktionshandlingarna',
  'punkt.till-dimensionering.verifikat': 'Intyg',
  'punkt.till-dimensionering.nar': 'Före utförandet',
  'punkt.till-mottagning.vad': 'Byggprodukter',
  'punkt.till-mottagning.hur': 'Visuell kontroll av märkning',
  'punkt.till-mottagning.mot': 'Mot följesedel och handlingar',
  'punkt.till-mottagning.verifikat': 'Följesedel',
  'punkt.till-mottagning.nar': 'Vid leverans',
  'punkt.till-brandspridning.vad': 'Skydd mot brandspridning till annan byggnad',
  'punkt.till-brandspridning.hur': 'Mätning',
  'punkt.till-brandspridning.mot': 'Mot situationsplanen',
  'punkt.till-brandspridning.verifikat': 'Signatur',
  'punkt.till-brandspridning.nar': 'Före byggstart',
  'punkt.till-brandvarnare.vad': 'Brandvarnare',
  'punkt.till-brandvarnare.hur': 'Visuell kontroll',
  'punkt.till-brandvarnare.mot': 'Mot A-ritning',
  'punkt.till-brandvarnare.verifikat': 'Foto',
  'punkt.till-brandvarnare.nar': 'Efter montering',
  'punkt.till-luftfloden.vad': 'Luftflöden',
  'punkt.till-luftfloden.hur': 'Mätning',
  'punkt.till-luftfloden.mot': 'Minst {flodeM2} l/s per m² golvarea och {flodePerson} l/s per person',
  'punkt.till-luftfloden.verifikat': 'Mätprotokoll',
  'punkt.till-luftfloden.nar': 'Före inflyttning',
  'punkt.till-energi.vad': 'Värmeisolering i ytterväggar, tak och golv',
  'punkt.till-energi.hur': 'Visuell kontroll av produktblad',
  'punkt.till-energi.mot': 'Mot A-ritning och energiberäkning',
  'punkt.till-energi.verifikat': 'Produktblad',
  'punkt.till-energi.nar': 'Före inklädnad',
  /* Kontrollpunkterna, komplement. En rad i planens tabell per punkt när raden är med: vad och nar i kolumnen Kontroll, hur och mot i kolumnen Hur, verifikat i kolumnen Verifikat. Tal skrivs som {fram}, {sida}, {utanforOppning}, {mynning}, {flodeM2}, {flodePerson}, {varmvatten}, {skallning}, {komplementUndantag}; koden sätter in dem. */
  'punkt.komp-lage.vad': 'Utstakning, läge och höjd',
  'punkt.komp-lage.hur': 'Mätning',
  'punkt.komp-lage.mot': 'Mot situationsplanen i lovet',
  'punkt.komp-lage.verifikat': 'Signatur',
  'punkt.komp-lage.nar': 'Efter utstakning',
  'punkt.komp-grund.vad': 'Grundläggning och armering',
  'punkt.komp-grund.hur': 'Visuell kontroll och mätning',
  'punkt.komp-grund.mot': 'Mot K-ritning',
  'punkt.komp-grund.verifikat': 'Foto',
  'punkt.komp-grund.nar': 'Före gjutning',
  'punkt.komp-fukt.vad': 'Fuktsäkerhet',
  'punkt.komp-fukt.hur': 'Visuell kontroll',
  'punkt.komp-fukt.mot': 'Mot A-ritning och fuktsäkerhetsdokumentationen',
  'punkt.komp-fukt.verifikat': 'Signatur',
  'punkt.komp-fukt.nar': 'Innan konstruktionen kläs in',
  'punkt.komp-barformaga.vad': 'Bärförmåga för snö och vind, takstolar',
  'punkt.komp-barformaga.hur': 'Visuell kontroll och mätning',
  'punkt.komp-barformaga.mot': 'Mot K-ritning',
  'punkt.komp-barformaga.verifikat': 'Signatur',
  'punkt.komp-barformaga.nar': 'Före inklädnad',
  'punkt.komp-mottagning.vad': 'Byggprodukter',
  'punkt.komp-mottagning.hur': 'Visuell kontroll av märkning',
  'punkt.komp-mottagning.mot': 'Mot följesedel och handlingar',
  'punkt.komp-mottagning.verifikat': 'Följesedel',
  'punkt.komp-mottagning.nar': 'Vid leverans',
  'punkt.komp-brandspridning.vad': 'Skydd mot brandspridning till och från huset, utom för byggnader på högst {komplementUndantag} m² byggnadsarea',
  'punkt.komp-brandspridning.hur': 'Mätning',
  'punkt.komp-brandspridning.mot': 'Mot situationsplanen',
  'punkt.komp-brandspridning.verifikat': 'Signatur',
  'punkt.komp-brandspridning.nar': 'Före byggstart',
  /* Kontrollpunkterna, rivning. En rad i planens tabell per punkt när raden är med: vad och nar i kolumnen Kontroll, hur och mot i kolumnen Hur, verifikat i kolumnen Verifikat. Tal skrivs som {fram}, {sida}, {utanforOppning}, {mynning}, {flodeM2}, {flodePerson}, {varmvatten}, {skallning}, {komplementUndantag}; koden sätter in dem. */
  'punkt.riv-inventering.vad': 'Farliga ämnen i byggnaden',
  'punkt.riv-inventering.hur': 'Inventering',
  'punkt.riv-inventering.mot': 'Mot materialinventeringen',
  'punkt.riv-inventering.verifikat': 'Inventeringsprotokoll',
  'punkt.riv-inventering.nar': 'Före rivning',
  'punkt.riv-skadedjur.vad': 'Skadedjur i byggnaden',
  'punkt.riv-skadedjur.hur': 'Visuell kontroll',
  'punkt.riv-skadedjur.mot': 'Mot kravet i föreskriften',
  'punkt.riv-skadedjur.verifikat': 'Signatur',
  'punkt.riv-skadedjur.nar': 'Före rivning',
  'punkt.riv-avfallsplan.vad': 'Avfallet hanteras enligt avfallshanteringsplanen',
  'punkt.riv-avfallsplan.hur': 'Visuell kontroll',
  'punkt.riv-avfallsplan.mot': 'Mot avfallshanteringsplanen',
  'punkt.riv-avfallsplan.verifikat': 'Mottagningskvitton',
  'punkt.riv-avfallsplan.nar': 'Under rivningen',
  /* Kontrollpunkterna, bärande. En rad i planens tabell per punkt när raden är med: vad och nar i kolumnen Kontroll, hur och mot i kolumnen Hur, verifikat i kolumnen Verifikat. Tal skrivs som {fram}, {sida}, {utanforOppning}, {mynning}, {flodeM2}, {flodePerson}, {varmvatten}, {skallning}, {komplementUndantag}; koden sätter in dem. */
  'punkt.bar-befintligt.vad': 'Befintliga bärverk klarlagda',
  'punkt.bar-befintligt.hur': 'Visuell kontroll',
  'punkt.bar-befintligt.mot': 'Mot konstruktionshandlingen',
  'punkt.bar-befintligt.verifikat': 'Signatur',
  'punkt.bar-befintligt.nar': 'Före håltagning',
  'punkt.bar-dimensionering.vad': 'Dimensioneringskontroll av beräkningarna',
  'punkt.bar-dimensionering.hur': 'Granskning',
  'punkt.bar-dimensionering.mot': 'Mot konstruktionshandlingarna',
  'punkt.bar-dimensionering.verifikat': 'Intyg',
  'punkt.bar-dimensionering.nar': 'Före utförandet',
  'punkt.bar-mottagning.vad': 'Byggprodukter',
  'punkt.bar-mottagning.hur': 'Visuell kontroll av märkning',
  'punkt.bar-mottagning.mot': 'Mot följesedel',
  'punkt.bar-mottagning.verifikat': 'Följesedel',
  'punkt.bar-mottagning.nar': 'Vid leverans',
  'punkt.bar-utforande.vad': 'Utfört enligt konstruktionshandlingen',
  'punkt.bar-utforande.hur': 'Visuell kontroll',
  'punkt.bar-utforande.mot': 'Mot konstruktionshandlingen',
  'punkt.bar-utforande.verifikat': 'Foto',
  'punkt.bar-utforande.nar': 'Före inklädnad',
  /* Kontrollpunkterna, eldstad. En rad i planens tabell per punkt när raden är med: vad och nar i kolumnen Kontroll, hur och mot i kolumnen Hur, verifikat i kolumnen Verifikat. Tal skrivs som {fram}, {sida}, {utanforOppning}, {mynning}, {flodeM2}, {flodePerson}, {varmvatten}, {skallning}, {komplementUndantag}; koden sätter in dem. */
  'punkt.eld-egenskaper.vad': 'Eldstadens och skorstenens dokumenterade egenskaper',
  'punkt.eld-egenskaper.hur': 'Visuell kontroll av märkning',
  'punkt.eld-egenskaper.mot': 'Mot prestandadeklaration och CE-märkning',
  'punkt.eld-egenskaper.verifikat': 'Prestandadeklaration',
  'punkt.eld-egenskaper.nar': 'Vid leverans',
  /* Varv 3, K5: kolumnen Kontroll för egenskaperna när rok = befintlig: bara eldstaden, och när den levereras. */
  'punkt.eld-egenskaper.vad-befintlig': 'Eldstadens dokumenterade egenskaper',
  'punkt.eld-egenskaper.nar-befintlig': 'När eldstaden levereras',
  'punkt.eld-underlag.vad': 'Underlagets bärförmåga',
  'punkt.eld-underlag.hur': 'Visuell kontroll',
  'punkt.eld-underlag.mot': 'Mot tillverkarens anvisning och eldstadens vikt',
  'punkt.eld-underlag.verifikat': 'Signatur',
  'punkt.eld-underlag.nar': 'Före montering',
  'punkt.eld-genomforing.vad': 'Genomföring i bjälklag och tak, avväxling',
  'punkt.eld-genomforing.hur': 'Visuell kontroll och mätning',
  'punkt.eld-genomforing.mot': 'Mot monteringsanvisningen',
  'punkt.eld-genomforing.verifikat': 'Foto',
  'punkt.eld-genomforing.nar': 'Innan genomföringen kläs in',
  'punkt.eld-avstand.vad': 'Avstånd till brännbart material',
  'punkt.eld-avstand.hur': 'Mätning',
  'punkt.eld-avstand.mot': 'Mot skyddsavstånden i monteringsanvisningen',
  'punkt.eld-avstand.verifikat': 'Foto med mått',
  'punkt.eld-avstand.nar': 'Efter montering, före inklädnad',
  'punkt.eld-eldstadsplan.vad': 'Eldstadsplan av obrännbart material',
  'punkt.eld-eldstadsplan.hur': 'Mätning',
  'punkt.eld-eldstadsplan.mot': 'Minst {fram} m framför och {sida} m vid sidorna, eller {utanforOppning} m utanför öppningen',
  'punkt.eld-eldstadsplan.verifikat': 'Foto med mått',
  'punkt.eld-eldstadsplan.nar': 'Efter montering',
  'punkt.eld-forbranningsluft.vad': 'Tillförsel av förbränningsluft',
  'punkt.eld-forbranningsluft.hur': 'Visuell kontroll',
  'punkt.eld-forbranningsluft.mot': 'Mot monteringsanvisningen',
  'punkt.eld-forbranningsluft.verifikat': 'Signatur',
  'punkt.eld-forbranningsluft.nar': 'Efter montering',
  'punkt.eld-mynning.vad': 'Mynningen minst {mynning} m över taktäckningen',
  'punkt.eld-mynning.hur': 'Mätning',
  'punkt.eld-mynning.mot': 'Mot A-ritning och monteringsanvisning',
  'punkt.eld-mynning.verifikat': 'Foto med mått',
  'punkt.eld-mynning.nar': 'Efter montering',
  'punkt.eld-gaser.vad': 'Rökgaserna kommer inte tillbaka in i huset',
  'punkt.eld-gaser.hur': 'Visuell kontroll',
  'punkt.eld-gaser.mot': 'Mot A-ritning',
  'punkt.eld-gaser.verifikat': 'Signatur',
  'punkt.eld-gaser.nar': 'Efter montering',
  'punkt.eld-tathet.vad': 'Täthet, rensning och inspektion',
  'punkt.eld-tathet.hur': 'Läckagemätning eller röktrycksprovning',
  'punkt.eld-tathet.mot': 'Mot monteringsanvisningen',
  'punkt.eld-tathet.verifikat': 'Protokoll',
  'punkt.eld-tathet.nar': 'Före första eldningen',
  'punkt.eld-takskydd.vad': 'Takskydd så att sotaren kommer fram',
  'punkt.eld-takskydd.hur': 'Visuell kontroll',
  'punkt.eld-takskydd.mot': 'Mot tillverkarens anvisning',
  'punkt.eld-takskydd.verifikat': 'Foto',
  'punkt.eld-takskydd.nar': 'Efter montering',
  /* Kontrollpunkterna, ventilation. En rad i planens tabell per punkt när raden är med: vad och nar i kolumnen Kontroll, hur och mot i kolumnen Hur, verifikat i kolumnen Verifikat. Tal skrivs som {fram}, {sida}, {utanforOppning}, {mynning}, {flodeM2}, {flodePerson}, {varmvatten}, {skallning}, {komplementUndantag}; koden sätter in dem. */
  'punkt.vent-barverk.vad': 'Befintliga bärverk där hål tas upp',
  'punkt.vent-barverk.hur': 'Visuell kontroll',
  'punkt.vent-barverk.mot': 'Mot konstruktionshandlingen',
  'punkt.vent-barverk.verifikat': 'Signatur',
  'punkt.vent-barverk.nar': 'Före håltagning',
  'punkt.vent-brandtatning.vad': 'Brandtätning där kanalen går genom en brandavskiljande vägg eller ett brandavskiljande bjälklag',
  'punkt.vent-brandtatning.hur': 'Visuell kontroll',
  'punkt.vent-brandtatning.mot': 'Mot monteringsanvisningen',
  'punkt.vent-brandtatning.verifikat': 'Foto',
  'punkt.vent-brandtatning.nar': 'Innan genomföringen kläs in',
  'punkt.vent-floden.vad': 'Luftflöden',
  'punkt.vent-floden.hur': 'Mätning',
  'punkt.vent-floden.mot': 'Minst {flodeM2} l/s per m² golvarea och {flodePerson} l/s per person',
  'punkt.vent-floden.verifikat': 'Mätprotokoll',
  'punkt.vent-floden.nar': 'Efter injustering',
  'punkt.vent-funktionskontroll.vad': 'Funktionskontroll av ventilationen',
  'punkt.vent-funktionskontroll.hur': 'Besiktning',
  'punkt.vent-funktionskontroll.mot': 'Mot kraven för funktionskontroll',
  'punkt.vent-funktionskontroll.verifikat': 'Protokoll',
  'punkt.vent-funktionskontroll.nar': 'Före första användningen',
  /* Kontrollpunkterna, va. En rad i planens tabell per punkt när raden är med: vad och nar i kolumnen Kontroll, hur och mot i kolumnen Hur, verifikat i kolumnen Verifikat. Tal skrivs som {fram}, {sida}, {utanforOppning}, {mynning}, {flodeM2}, {flodePerson}, {varmvatten}, {skallning}, {komplementUndantag}; koden sätter in dem. */
  'punkt.va-varmvatten.vad': 'Varmvatten minst {varmvatten} °C, skydd mot bakterietillväxt',
  'punkt.va-varmvatten.hur': 'Mätning av temperaturen',
  'punkt.va-varmvatten.mot': 'Mot kravet i föreskriften',
  'punkt.va-varmvatten.verifikat': 'Mätvärde',
  'punkt.va-varmvatten.nar': 'Efter installation',
  'punkt.va-aterstromning.vad': 'Skydd mot återströmning',
  'punkt.va-aterstromning.hur': 'Visuell kontroll',
  'punkt.va-aterstromning.mot': 'Mot monteringsanvisningen',
  'punkt.va-aterstromning.verifikat': 'Foto',
  'punkt.va-aterstromning.nar': 'Efter installation',
  'punkt.va-fall.vad': 'Avloppets fall',
  'punkt.va-fall.hur': 'Mätning',
  'punkt.va-fall.mot': 'Mot ritningen',
  'punkt.va-fall.verifikat': 'Foto med mått',
  'punkt.va-fall.nar': 'Före igenfyllnad',
  'punkt.va-tathet.vad': 'Täthet i ledningarna',
  'punkt.va-tathet.hur': 'Provtryckning',
  'punkt.va-tathet.mot': 'Mot tillverkarens anvisning',
  'punkt.va-tathet.verifikat': 'Protokoll',
  'punkt.va-tathet.nar': 'Innan rören byggs in',
  'punkt.va-skallning.vad': 'Skydd mot skållning, högst {skallning} °C vid tappstället',
  'punkt.va-skallning.hur': 'Mätning av temperaturen',
  'punkt.va-skallning.mot': 'Mot kravet i föreskriften',
  'punkt.va-skallning.verifikat': 'Mätvärde',
  'punkt.va-skallning.nar': 'Efter installation',
  /* Kontrollpunkterna, delade. En rad i planens tabell per punkt när raden är med: vad och nar i kolumnen Kontroll, hur och mot i kolumnen Hur, verifikat i kolumnen Verifikat. Tal skrivs som {fram}, {sida}, {utanforOppning}, {mynning}, {flodeM2}, {flodePerson}, {varmvatten}, {skallning}, {komplementUndantag}; koden sätter in dem. */
  'punkt.vardefullt.vad': 'Husets kulturvärden tas till vara och skadas inte',
  'punkt.vardefullt.hur': 'Visuell kontroll',
  'punkt.vardefullt.mot': 'Mot lovet, och antikvarisk bedömning om nämnden krävt en',
  'punkt.vardefullt.verifikat': 'Signatur och foto',
  'punkt.vardefullt.nar': 'Under hela bygget',
  'punkt.aktsamhet.vad': 'Arbetsplatsen skyddad mot obehöriga, brand, buller och damm',
  'punkt.aktsamhet.hur': 'Visuell kontroll',
  'punkt.aktsamhet.mot': 'Mot kravet i föreskriften',
  'punkt.aktsamhet.verifikat': 'Signatur',
  'punkt.aktsamhet.nar': 'Under byggtiden',
  'punkt.overens.vad': 'Utfört enligt lovet eller anmälan och startbeskedet',
  'punkt.overens.hur': 'Visuell kontroll',
  'punkt.overens.mot': 'Mot beslutshandlingarna',
  'punkt.overens.verifikat': 'Signatur',
  'punkt.overens.nar': 'Före begäran om slutbesked',
  /* Kolumnen Vem i planen: kontrollanten, och formen på raden under. */
  'vem.B': 'B',
  'vem.E': 'E',
  'vem.B/E': 'B eller E',
  'vem.sotare': 'Skorstens­fejar­mästaren',
  'vem.funktionskontrollant': 'Certifierad funktions­kontrollant',
  'vem.konstruktor': 'Annan konstruktör än den som räknat',
  'form.egenkontroll': 'Egenkontroll',
  'form.sakkunnig': 'Sakkunnig',
  /* Planens tabell: kolumnrubrikerna (på skärm under lg etiketterna före varje cell), och teckenforklaring under tabellen (vad B, E och S betyder). */
  'kolumn.nr': 'Nr',
  'kolumn.kontroll': 'Kontroll och när',
  'kolumn.krav': 'Krav',
  'kolumn.hur': 'Hur och mot vad',
  'kolumn.vem': 'Vem kontrollerar',
  'kolumn.verifikat': 'Verifikat',
  'kolumn.signatur': 'Signatur och datum',
  'kolumn.teckenforklaring': 'B är byggherren och E entreprenören. Egenkontroll är byggherrens kontroll, också när byggherren anlitar någon för den, till exempel skorstensfejarmästaren. En sakkunnig har certifikat för just den kontrollen. A-ritning är arkitektens ritning och K-ritning konstruktörens.',
  /* Planens lista Anmälningar: slutbesked alltid, sotarprotokoll när eldstad är vald, funktionskontroll när ventilation är vald. */
  'anmalan.slutbesked': 'Begäran om slutbesked, med den ifyllda planen',
  'anmalan.sotarprotokoll': 'Protokollet från skorstensfejarmästarens provning',
  'anmalan.funktionskontroll': 'Protokollet från funktionskontrollen av ventilationen',
  /* Planens rad Arbetsplatsbesök: inga-foreslas utan kontrollansvarig (A2), namnden när KA-status är beror eller huvudregel. */
  'besok.inga-foreslas': 'Planen föreslår inga besök. Byggnadsnämnden bestämmer om den ändå vill komma.',
  'besok.namnden': 'Byggnadsnämnden bestämmer om och när den vill besöka arbetsplatsen.',
  /* Avfallshanteringsplanen, egen del sist i planen. rubrik med PBL 10 kap. 8 a § efter; ruta bredvid den tomma fyrkanten med PBL 10 kap. 8 a § andra st. efter; tips.rivning när rivning är vald, annars tips.bedom; del1 till del3 som lista på skärm och som tabellrubriker i utskriften; kolumn.sak och kolumn.hur bara i utskriften. */
  'avfall.rubrik': 'Avfallshanteringsplan',
  'avfall.ruta': 'Byggherren bedömer att det är uppenbart att en avfallshanteringsplan inte behövs',
  'avfall.tips.rivning': 'En rivning ger avfall, och då är det svårt att hävda att planen uppenbart inte behövs. Fyll i den nedan.',
  'avfall.tips.bedom': 'Blir det överblivet material, emballage eller rivningsrester att ta hand om, fyll i tabellerna. Kryssa bara i rutan om det inte blir något alls.',
  'avfall.del1': 'Byggprodukter som kan återanvändas',
  'avfall.del2': 'Avfall och hur det tas om hand',
  'avfall.del3': 'Farliga ämnen och hur de hanteras',
  'avfall.kolumn.sak': 'Vad',
  'avfall.kolumn.hur': 'Hur det tas om hand',
  /* Planen. titel är H2 över planen på skärm och rubriken på papperet. ansvar bara överst på utskriften, fyra led (beslut 3). falt.* är etiketterna i de administrativa uppgifterna: fastighet till upprattad bara i utskrift med tom linje, atgard, ka och regelverk på båda. anmalningar och besok är rubriker. intygande, datum, underskrift och namnfortydligande: byggherrens intygande, linjerna bara i utskrift. skapad: sidfoten i utskriften före adressen. handskrift: bara på skärm, att namn, fastighet och datum fylls i för hand på utskriften. */
  'utskrift.titel': 'Förslag till kontrollplan enligt PBL',
  'utskrift.ansvar': 'Det här är ett förslag till kontrollplan enligt PBL 10 kap. 6 §. Planen gäller först när byggnadsnämnden har fastställt den i startbeskedet, enligt PBL 10 kap. 24 §. Vill kommunen ha planen på sin egen blankett förs raderna över dit. Byggherren ansvarar för att planen stämmer med det som faktiskt byggs.',
  'utskrift.falt.fastighet': 'Fastighetsbeteckning',
  'utskrift.falt.byggherre': 'Byggherre, namn och telefon',
  'utskrift.falt.entreprenor': 'Entreprenör',
  'utskrift.falt.diarienummer': 'Diarienummer',
  'utskrift.falt.upprattad': 'Upprättad, datum',
  'utskrift.falt.atgard': 'Åtgärd',
  'utskrift.falt.ka': 'Kontrollansvarig',
  'utskrift.falt.regelverk': 'Regler som planen hänvisar till',
  /* Varv 3, K11: etiketten på linjen för kontrollansvarigs namn, bara i utskrift och bara vid huvudregel eller beror. Namn, certifiering och telefon. */
  'utskrift.falt.ka-namn': 'Namn, certifiering och telefon',
  /* Specen 16.7 punkt 2: etiketten på första tomma linjen under Anmälningar, bara i utskrift. */
  'utskrift.falt.ovriga-anmalningar': 'Övriga anmälningar',
  /* Varv 3, K9 och K13: på papperet i avfallsdelen, mellan rutan och tabellerna. Kryssas rutan lämnas tabellerna tomma, annars fylls de i. */
  'utskrift.avfall.instruktion': 'Är rutan ikryssad lämnas tabellerna tomma. Annars fylls de i före inlämningen.',
  'utskrift.anmalningar': 'Anmälningar till byggnadsnämnden',
  'utskrift.besok': 'Arbetsplatsbesök',
  'utskrift.intygande': 'Byggherren intygar att kontrollerna är gjorda och att det som byggts stämmer med lovet eller anmälan och startbeskedet. Intygandet skrivs under när byggherren begär slutbesked.',
  'utskrift.datum': 'Datum',
  'utskrift.underskrift': 'Byggherrens underskrift',
  'utskrift.namnfortydligande': 'Namnförtydligande',
  'utskrift.skapad': 'Gjord på hantverkstips.se. Samma plan öppnas igen på',
  'utskrift.handskrift': 'Fastighetsbeteckning, byggherre, entreprenör, diarienummer och datum fylls i för hand före inlämningen. Signatur och datum i tabellen fylls i när respektive kontroll är gjord.',
  /* Varv 3, K9: i spalten under pekraden, bara när det finns en plan. Säger till läsaren det som utskrift.handskrift säger i planen. */
  'skarm.handskrift': 'Namn, fastighet och datum skriver du för hand på utskriften, och de sparas inte här. Signaturerna i tabellen kommer sedan, när kontrollerna görs under bygget.',
  /* "Därför blev svaret så", en rad per regel med lagrummet ur regelLagrum. Alltid: innehall till ka. funktionskontroll när ventilation är vald, energi när tillbyggnad är vald. aldre-lydelse och aldre-byggregler bara vid äldre regler, då också i spalten. */
  'regel.innehall': 'Planen har en rad för varje kontroll med kravet den avser, hur den görs och vem som gör den. Efter tabellen kommer anmälningarna och arbetsplatsbesöken, och därmed har planen allt som plan- och bygglagen kräver av en kontrollplan.',
  'regel.anpassad': 'Planen ska ha den form och detaljering som just ditt bygge behöver. Stryk rader som inte gäller och skriv till det som saknas. Nämnden kan också be om fler kontroller när den prövar planen.',
  'regel.egen-sakkunnig': 'Av planen ska det framgå vad som är din egen dokumenterade egenkontroll och vad en sakkunnig gör. Egenkontrollen gör du eller entreprenören. En sakkunnig har ett certifikat för en viss sorts kontroll, som funktionskontrollanten för ventilationen.',
  'regel.faststalls': 'Byggnadsnämnden prövar planen innan den ger startbesked och fastställer i startbeskedet vilken kontrollplan som ska gälla. Planen som gäller kan alltså se annorlunda ut än den du skickade in.',
  'regel.slutbesked': 'För att få slutbesked ska du visa att allt i lovet, kontrollplanen, avfallshanteringsplanen och startbeskedet är uppfyllt. Den ifyllda och signerade planen är det du visar upp.',
  'regel.ka': 'Tillbyggnad och rivning med rivningslov kräver en kontrollansvarig som huvudregel. Altan, komplementbyggnad och det som bara ska anmälas klarar sig utan, men nämnden kan kräva en även där.',
  'regel.funktionskontroll': 'Ny eller ändrad ventilation ska funktionskontrolleras av en certifierad funktionskontrollant innan den börjar användas. Den kontrollen gäller vad som än står i planen, och protokollet skickar du till nämnden.',
  'regel.energi': 'Energiraden hänvisar till olika regler efter när ansökan kom in. Kom den in mellan 1 juli och 30 september 2026 gäller BBR, som skiljer på en tillbyggnad som räknas som en separat enhet och ska klara kraven för nya byggnader, och en som inte gör det, där kraven på värmeisolering vid ändring gäller. Vilken din är kan konstruktören eller nämnden svara på. Kom den in 1 oktober 2026 eller senare räknas tillbyggnaden som en ändring av huset och kontrolleras mot BFS 2026:9.',
  'regel.aldre-lydelse': 'Kom ansökan eller anmälan in före 1 juli 2026 gäller plan- och bygglagens äldre regler om kontrollplanen, där avfallet fortfarande ingår i planen. Kommunens mall för äldre ärenden passar då bättre än den här.',
  'regel.aldre-byggregler': 'Fram till 1 juli 2026 fick byggherren välja mellan Boverkets gamla och nya byggregler. Beviljades lovet före 1 juli 2026 och valde du då de äldre byggreglerna, gäller de också vid startbeskedet. Då ska planen hänvisa till BBR och EKS, och det gör inte den här.',
  /* "Gör inte det här", med lagrummet ur GOR_INTE_LAGRUM. bbr-eks och borja-fore-startbesked alltid, ta-i-bruk när eldstad, ventilation eller VA är vald. Visas inte vid äldre regler. */
  'gorInte.bbr-eks': 'Kommunens gamla mall kan ha färdiga rader om BBR och EKS. Stryk dem i en ny plan och skriv paragrafen i de nya föreskrifterna i stället. Undantaget är energiraden för en tillbyggnad där ansökan kom in före 1 oktober 2026.',
  'gorInte.borja-fore-startbesked': 'Arbetet får inte börja förrän startbeskedet har kommit. Det gäller också grävningen för grund eller plintar, eftersom den är en del av bygget.',
  'gorInte.ta-i-bruk': 'Det du har installerat får inte användas förrän slutbeskedet har kommit, om nämnden inte har beslutat annat.',
  /* Antagandetabellen under avsnittet om hur planen ställs upp, alltid alla rader. antagande.<nr> i kolumnen Vad, antagande.<nr>.varde i kolumnen Värde eller beslut. Innebörden för A1 till A16 i specen 11 och 16.1 D7. Författningarna och kommunexemplen står bara i källistan (KALLOR_FORFATTNINGAR). */
  'antagande.A1': 'Vilka hus',
  'antagande.A1.varde': 'En- eller tvåbostadshus och komplementbyggnader till dem',
  'antagande.A2': 'Arbetsplatsbesök utan kontrollansvarig',
  'antagande.A2.varde': 'Planen föreslår inga, och nämnden bestämmer (PBL 10 kap. 6 § 4)',
  'antagande.A3': 'Eldstad mot befintlig skorsten',
  'antagande.A3.varde': 'Genomföring, mynning och takskydd stryks, eftersom de inte byggs',
  'antagande.A4': 'Ventilationens huv på taket',
  'antagande.A4.varde': 'Ingen rad för takskydd. Lägg till en om huven sitter på taket',
  'antagande.A5': 'Antal åtgärder i en plan',
  'antagande.A5.varde': 'Högst tre, så att planen går att läsa och skriva ut. Större projekt brukar ha en kontrollansvarig som skriver planen',
  'antagande.A6': 'Radernas ordning',
  'antagande.A6.varde': 'Som man bygger: stommen först och installationerna sist, och allra sist aktsamheten på arbetsplatsen och kontrollen av att allt stämmer med beslutet',
  'antagande.A7': 'Komplementbyggnad',
  'antagande.A7.varde': 'Ouppvärmd och i den lägsta säkerhetsklassen, eftersom få människor vistas där, så ingen energirad, inga luftflöden, ingen brandvarnare och ingen dimensioneringskontroll (BFS 2024:6 2 kap. 7 § 1 och 1 kap. 17 §)',
  'antagande.A8': 'Räcke på fristående altan',
  'antagande.A8.varde': 'Vid huset mot BFS 2024:9, fristående mot PBF 3 kap. 10 §, eftersom föreskriften bara nämner ytor i anslutning till byggnader',
  'antagande.A9': 'Avfallshanteringsplanen',
  'antagande.A9.varde': 'Planen tar inte ställning till om den behövs. Rutan och den tomma planen står alltid med',
  'antagande.A10': 'Kulturvärden',
  'antagande.A10.varde': 'Raden kommer bara med när du svarat att huset eller området är särskilt värdefullt',
  'antagande.A11': 'Energiraden från 1 oktober 2026',
  'antagande.A11.varde': 'Hänvisar till BFS 2026:9. Möjligheten att i stället välja de äldre energireglerna i BBR fram till 30 september 2027 tas inte upp',
  'antagande.A12': 'Täthetsprovning av eldstad',
  'antagande.A12.varde': 'Egenkontroll med skorstensfejarmästaren som kontrollant. Kraven på raden är brandskyddets, och provningen är sättet att visa att de är uppfyllda, som Boverket rekommenderar i kontrollplanen',
  'antagande.A13': 'Energiraden och husets storlek',
  'antagande.A13.varde': 'Förutsätter ett hus som används året runt och har minst 50 m² temperaturreglerad area (BFS 2026:9 1 kap. 3 §)',
  'antagande.A14': 'Komplementbostadshus med bygglov',
  'antagande.A14.varde': 'Ingår inte. Valet komplementbyggnad gäller byggnader som ingen bor i',
  'antagande.A15': 'Lagändringarna 1 januari 2027',
  'antagande.A15.varde': 'Lag (2026:746) och förordning (2026:1265), lästa 28 september 2026, ändrar inget lagrum i planen',
  /* Varv 3, K6: A16, luftflödena i tillbyggnaden står inte när ventilation är vald, eftersom vent-floden täcker dem. */
  'antagande.A16': 'Luftflöden vid tillbyggnad och ventilation',
  'antagande.A16.varde': 'Mäts en gång, efter injusteringen av ventilationen, och den mätningen gäller också tillbyggnaden',
};

/* ------------------------------------------------------------------ *
 * Antagandetabellen (specen 11). Texterna i TEXT antagande.<nr> och
 * antagande.<nr>.varde, källorna här.
 * ------------------------------------------------------------------ */

export interface AntagandeRad {
  nr: AntagandeNr;
  typ: 'Källa' | 'Antagande';
  /** Tom för ett antagande utan källa. */
  kallor: KallaRef[];
}

export const ANTAGANDEN: readonly AntagandeRad[] = [
  { nr: 'A1', typ: 'Antagande', kallor: [] },
  { nr: 'A2', typ: 'Antagande', kallor: [] },
  { nr: 'A3', typ: 'Antagande', kallor: [] },
  { nr: 'A4', typ: 'Antagande', kallor: [] },
  { nr: 'A5', typ: 'Antagande', kallor: [] },
  { nr: 'A6', typ: 'Antagande', kallor: [] },
  /* BFS 2024:6 2 kap. 7 § 1 och 1 kap. 17 § (varv 2 F9, R10). */
  { nr: 'A7', typ: 'Källa', kallor: [B6] },
  /* Beslut 2 och R7: BFS 2024:9 2 kap. 10 §, PBF 3 kap. 10 §. */
  { nr: 'A8', typ: 'Antagande', kallor: [B9, R2_PBF] },
  { nr: 'A9', typ: 'Antagande', kallor: [] },
  { nr: 'A10', typ: 'Antagande', kallor: [] },
  { nr: 'A11', typ: 'Antagande', kallor: [] },
  /* Varv 2 F3 och KB4. */
  { nr: 'A12', typ: 'Källa', kallor: [KB4] },
  /* BFS 2026:9 1 kap. 3 § (varv 2 F6). */
  { nr: 'A13', typ: 'Källa', kallor: [B26] },
  { nr: 'A14', typ: 'Antagande', kallor: [] },
  /* Varv 2 avsnitt 3 (R13). */
  { nr: 'A15', typ: 'Källa', kallor: [R3_LAG_2026_746, R4_FORORDNING_2026_1265] },
  /* Varv 3, D7. */
  { nr: 'A16', typ: 'Antagande', kallor: [] },
];

/**
 * Författningarna och kommunexemplen planen bygger på, i källistan under
 * antagandetabellen men inte som rader i den (specen 16.1 D6 och 16.6 punkt 4).
 * Samma ordning som raderna hade i tabellen. V2, V3 och S2 är jämförda, inte
 * kopierade.
 */
export const KALLOR_FORFATTNINGAR: readonly KallaRef[] = [
  R1_PBL,
  R2_PBF,
  B4,
  B4A,
  B6,
  B7,
  B7A,
  B8,
  B9,
  B14,
  B26,
  V2,
  V3,
  S2,
];

/**
 * En CSS-sträng av en text: citattecken och bakstreck escapade, radbrytningar
 * som mellanslag. Används för etiketterna i planens stapelvy (specen 6.2) och
 * för fastighetsraden i utskriftens marginal (specen 16.6 punkt 2).
 */
export function cssStrang(s: string): string {
  return `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, ' ')}"`;
}

/* ------------------------------------------------------------------ *
 * Adressen
 * ------------------------------------------------------------------ */

const NYCKLAR = ['a', 'tak', 'plac', 'rok', 'hus', 'vardefullt', 'inkom'] as const;

/**
 * Det dolda fältet som bara formulären skickar (KontrollplanForm). Med det i
 * adressen är ett formulär utan kryss ett fel på a, inte standardfallet, så att
 * den som trycker på knappen i en artikel utan att välja något inte får en
 * altanplan (läsarens retur varv 2). En delad adress utan a och utan fältet ger
 * fortfarande STANDARD. Fältet följer aldrig med i delbarQuery.
 */
export const FORMULAR_NYCKEL = 'f';

function iLista<T extends string>(lista: readonly T[], v: string | null): v is T {
  return v !== null && (lista as readonly string[]).includes(v);
}

const TAK: readonly Tak[] = ['nej', 'skarmtak'];
const PLACERING: readonly Placering[] = ['vid-huset', 'fristaende'];
const ROKKANAL: readonly Rokkanal[] = ['ny', 'befintlig'];
const HUS: readonly Hus[] = ['bostadshus', 'komplementbostadshus'];
const JA_NEJ: readonly JaNej[] = ['ja', 'nej'];
const INKOM: readonly Inkom[] = ['fore-juli-2026', 'juli-sept-2026', 'fran-okt-2026'];

/**
 * Läser adressen (specen 2.4). a är upprepad, okända värden faller bort tyst,
 * dubbletter tas bort och ordningen blir ATGARD_ORDNING. Övriga fält faller
 * tillbaka på standard. Alla andra nycklar ignoreras. Har adressen någon av de
 * sju nycklarna, eller formulärets dolda fält, men inget giltigt a blir listan
 * tom, och genereraKontrollplan ger felet; saknas alla blir den
 * STANDARD.atgarder.
 */
export function tolkaQuery(q: URLSearchParams): { indata: KontrollplanIndata; harIndata: boolean } {
  const harIndata = NYCKLAR.some((n) => q.has(n)) || q.has(FORMULAR_NYCKEL);
  const valda = new Set(q.getAll('a'));
  const atgarder = harIndata ? ATGARD_ORDNING.filter((a) => valda.has(a)) : [...STANDARD.atgarder];
  const tak = q.get('tak');
  const plac = q.get('plac');
  const rok = q.get('rok');
  const hus = q.get('hus');
  const vardefullt = q.get('vardefullt');
  const inkom = q.get('inkom');
  return {
    harIndata,
    indata: {
      atgarder,
      tak: iLista(TAK, tak) ? tak : STANDARD.tak,
      plac: iLista(PLACERING, plac) ? plac : STANDARD.plac,
      rok: iLista(ROKKANAL, rok) ? rok : STANDARD.rok,
      hus: iLista(HUS, hus) ? hus : STANDARD.hus,
      vardefullt: iLista(JA_NEJ, vardefullt) ? vardefullt : STANDARD.vardefullt,
      inkom: iLista(INKOM, inkom) ? inkom : STANDARD.inkom,
    },
  };
}

/**
 * Den delbara adressens query (specen 2.8). Alltid de sju nycklarna i samma
 * ordning och inga andra. Inga personuppgifter: namn, fastighet, diarienummer
 * och datum finns inte som fält.
 */
/**
 * Kontrollplanens indata ur bygglovsräknarens svar, för länken från
 * /rakna/bygglov-altan/ (läsarens retur varv 2, specen 16.7 punkt 1). Skärmtak
 * blir tak=skarmtak. Väggar eller glas gör altanen till en tillbyggnad. Bara en
 * altan som ligger an mot en byggnad, avstånd 0, räknas som vid huset; allt
 * annat är fristående. vardefullt=ja följer med, vet-inte blir nej som i
 * STANDARD. Typerna står utskrivna, eftersom modulen inte importerar något.
 */
export function franBygglovAltan(b: {
  tak: 'nej' | 'skarmtak' | 'vaggar';
  avstandByggnadM: number;
  vardefullt: 'ja' | 'nej' | 'vet-inte';
}): KontrollplanIndata {
  return {
    ...STANDARD,
    atgarder: [b.tak === 'vaggar' ? 'tillbyggnad' : 'altan'],
    tak: b.tak === 'skarmtak' ? 'skarmtak' : 'nej',
    plac: b.avstandByggnadM === 0 ? 'vid-huset' : 'fristaende',
    vardefullt: b.vardefullt === 'ja' ? 'ja' : 'nej',
  };
}

export function delbarQuery(i: KontrollplanIndata): string {
  const q = new URLSearchParams();
  for (const a of ATGARD_ORDNING) if (i.atgarder.includes(a)) q.append('a', a);
  q.set('tak', i.tak);
  q.set('plac', i.plac);
  q.set('rok', i.rok);
  q.set('hus', i.hus);
  q.set('vardefullt', i.vardefullt);
  q.set('inkom', i.inkom);
  return q.toString();
}

/* ------------------------------------------------------------------ *
 * Planen
 * ------------------------------------------------------------------ */

function villkorGaller(v: Villkor | undefined, i: KontrollplanIndata): boolean {
  if (v === undefined) return true;
  if ('tak' in v) return i.tak === v.tak;
  return i.rok === v.rok;
}

function kravFor(k: Krav, i: KontrollplanIndata): string {
  if (typeof k === 'string') return k;
  if (k.efter === 'plac') return k.lagrum[i.plac];
  return i.inkom === 'juli-sept-2026' ? k.lagrum['juli-sept-2026'] : k.lagrum['fran-okt-2026'];
}

/**
 * Sätter lagrummet i parentes efter texten (varv 3, K3). Slutar texten på
 * punkt, utropstecken eller frågetecken hamnar parentesen före tecknet.
 */
export function medLagrum(text: string, lagrum: string): string {
  const sista = text.slice(-1);
  if (sista === '.' || sista === '!' || sista === '?') return `${text.slice(0, -1)} (${lagrum})${sista}`;
  return `${text} (${lagrum})`;
}

/**
 * Nyckeln till en punkts text i ett fält, med varianterna i varv 3: bärförmågan
 * med skärmtak (K4) och egenskaperna mot befintlig skorsten (K5).
 */
export function punktNyckel(p: PunktNyckel, falt: Falt5, i: KontrollplanIndata): TextNyckel {
  if (p === 'altan-barformaga' && i.tak === 'skarmtak' && (falt === 'vad' || falt === 'nar')) {
    return `punkt.altan-barformaga.${falt}-skarmtak`;
  }
  if (p === 'eld-egenskaper' && i.rok === 'befintlig' && (falt === 'vad' || falt === 'nar')) {
    return `punkt.eld-egenskaper.${falt}-befintlig`;
  }
  return `punkt.${p}.${falt}`;
}

/**
 * Varje TEXT-nyckel som KontrollplanPlan.astro läser utanför kp-skarm, som
 * mönster (varv 3, K10). Testet går igenom dem och fäller vid tilltal. Ändras
 * planen ändras listan.
 */
export const PLAN_NYCKLAR: readonly RegExp[] = [
  /^utskrift./,
  /^atgard.[a-z]+.plan(-skarmtak)?$/,
  /^atgard.komplementbostadshus$/,
  /^punkt./,
  /^vem./,
  /^form./,
  /^kolumn./,
  /^anmalan./,
  /^besok./,
  /^avfall.(rubrik|ruta|del[123]|kolumn.(sak|hur))$/,
];

/** Stegen i specen 2.7, i ordning. */
export function genereraKontrollplan(i: KontrollplanIndata): KontrollplanResultat {
  // 1. Giltighet. Flera fel samtidigt ger flera nycklar.
  const fel: Partial<Record<FelNyckel, string>> = {};
  if (i.atgarder.length < GRANSER.atgarder[0]) fel.a = TEXT['fel.a-tom'];
  else if (i.atgarder.length > GRANSER.atgarder[1]) fel.a = TEXT['fel.a-for-manga'];
  if (i.hus === 'komplementbostadshus' && i.atgarder.some((a) => !KOMPLEMENTBOSTADSHUS_ATGARDER.includes(a))) {
    fel.hus = TEXT['fel.hus-komplement'];
  }
  if (Object.keys(fel).length > 0) return { status: 'ogiltig', fel };

  // 2. Äldre regler: ingen plan, eftersom 10 kap. 6 § då gäller i äldre lydelse.
  if (i.inkom === 'fore-juli-2026') {
    return { status: 'utanfor', orsak: 'aldre-regler', indata: i, regler: ['aldre-lydelse', 'aldre-byggregler'] };
  }

  const valda = ATGARD_ORDNING.filter((a) => i.atgarder.includes(a));

  // 3. Raderna per åtgärd, i katalogens ordning, med villkoren.
  // Med ventilation vald står tillbyggnadens luftflöden inte med, eftersom vent-floden täcker dem (varv 3, K6, ANTAGANDE A16).
  const perAtgard: KatalogRad[] = valda.flatMap((a) =>
    KATALOG[a].filter(
      (r) => villkorGaller(r.villkor, i) && !(r.nyckel === 'till-luftfloden' && valda.includes('ventilation')),
    ),
  );

  // 4. De delade raderna: vardefullt först, aktsamhet och overens sist, högst en gång var.
  const rader: KatalogRad[] = [
    ...(i.vardefullt === 'ja' ? [DELADE.vardefullt] : []),
    ...perAtgard,
    ...(valda.some((a) => MED_AKTSAMHET.includes(a)) ? [DELADE.aktsamhet] : []),
    DELADE.overens,
  ];

  // 5. Numrering och krav.
  const punkter: Punkt[] = rader.map((r, n) => ({
    nr: n + 1,
    nyckel: r.nyckel,
    krav: kravFor(r.krav, i),
    vem: r.vem,
    form: r.form,
  }));

  // 6. Kontrollansvarig: den starkaste statusen bland de valda åtgärderna.
  const statusar = valda.map((a): KaStatus => (a === 'altan' && i.tak === 'skarmtak' ? 'nej-skarmtak' : KA_PER_ATGARD[a]));
  const ka = statusar.reduce<KaStatus>((b, s) => (KA_STYRKA.indexOf(s) > KA_STYRKA.indexOf(b) ? s : b), 'nej');

  // 7. Regelverksraden.
  const allaKrav = punkter.map((p) => p.krav).join(' | ');
  const harKompBrand = punkter.some((p) => p.nyckel === 'komp-brandspridning');
  const forfattningar = FORFATTNINGAR.filter((f, n) => n === 0 || f.monster.test(allaKrav)).map((f) =>
    f.namn === 'BFS 2024:7' && harKompBrand ? BFS_2024_7_I_LYDELSE : f.namn,
  );

  // 8. Anmälningar.
  const anmalningar: Anmalan[] = [
    'slutbesked',
    ...(valda.includes('eldstad') ? (['sotarprotokoll'] as const) : []),
    ...(valda.includes('ventilation') ? (['funktionskontroll'] as const) : []),
  ];

  // 9. Arbetsplatsbesök. ANTAGANDE A2.
  const besok: Besok = ka === 'beror' || ka === 'huvudregel' ? 'namnden' : 'inga-foreslas';

  // 10. Avfall.
  const rivning = valda.includes('rivning');

  // 11. Regler och Gör inte.
  const regler: RegelNyckel[] = [
    'innehall',
    'anpassad',
    'egen-sakkunnig',
    'faststalls',
    'slutbesked',
    'ka',
    ...(valda.includes('ventilation') ? (['funktionskontroll'] as const) : []),
    ...(valda.includes('tillbyggnad') ? (['energi'] as const) : []),
  ];
  const gorInteDetHar: GorInte[] = [
    'bbr-eks',
    'borja-fore-startbesked',
    ...(valda.some((a) => a === 'eldstad' || a === 'ventilation' || a === 'va') ? (['ta-i-bruk'] as const) : []),
  ];

  return {
    status: 'ok',
    indata: i,
    punkter,
    ka,
    besked: BESKED_FOR_KA[ka],
    forfattningar,
    anmalningar,
    besok,
    avfall: rivning ? 'rivning' : 'bedom',
    tommaAvfallsrader: rivning ? 6 : 3,
    regler,
    gorInteDetHar,
  };
}
