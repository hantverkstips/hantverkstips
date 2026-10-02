/**
 * Fasadyta och färgåtgång. Räknar väggytan på ett hus ur omkrets, höjd och
 * gavelspetsar efter takform, drar av fönster och dörrar, och räknar sedan
 * liter färg och burkar på den målade ytan, alltså väggytan gånger panelens
 * profilfaktor. Ren modul utan importer från Astro, testbar utan bygge. Sidan
 * /rakna/fasadyta/ skickar formuläret som GET och räknar på servern, så ingen
 * rad av den här filen når klienten.
 *
 * Konstanterna står överst, var och en med Källa eller ANTAGANDE. Underlaget
 * med adress och datum per rad ligger i
 * docs/briefer/underlag-kalkyl-fasadyta-2026-09-28.md, och specen med besluten
 * K1 till K3 i docs/briefer/spec-kalkyl-fasadyta-2026-09-28.md.
 *
 * All text läsaren ser och som modulen äger står i TEXT och skrivs av
 * hantverkaren. Talen i texterna läses ur konstanterna och resultatet.
 *
 * Testas av scripts/test-kalkyl-fasadyta.mjs mot underlagets räkneexempel och
 * mot guiden /fasad/mala-om-huset/, som läses från disk.
 */
/* Ändelserna står med, så att node kan köra testskriptet utan bygge. */
import { bastaBurkar, OVERSKOTT_GRANS, type Burk } from './kvadratmeter.ts';
import { FARGTYPER } from './mala-ute.ts';
import { m2Text, nockUrVinkel, vinkelText, vinkelUrNock, VINKELGRANSER } from './tak.ts';

export { m2Text, vinkelText, VINKELGRANSER } from './tak.ts';

/* ------------------------------------------------------------------ *
 * Typer
 * ------------------------------------------------------------------ */

export type Takform = 'sadel' | 'pulpet' | 'valmat' | 'mansard';
export type Matt = 'nock' | 'vinkel';
export type Fasad = 'lock' | 'slat' | 'puts' | 'tegel';
/** Samma nycklar som Fargtyp i mala-ute.ts, utan träoljan. */
export type Farg = 'akrylat' | 'oljealkyd' | 'slamfarg';
export type Skick = 'ommalning' | 'skrapat' | 'rent' | 'kulor' | 'byte';
export type Stryk = 'auto' | 1 | 2 | 3;

export interface FasadytaIndata {
  /** Långsidan, längs takfoten på sadeltak. */
  langdM: number;
  /** Gaveln, sidan där taket syns i profil. */
  breddM: number;
  /** Sockel till takfot. */
  hojdM: number;
  takform: Takform;
  matt: Matt;
  /** Takfot till nock. */
  nockM: number;
  vinkelGrader: number;
  /** Mansard: takfot till brytpunkt. NaN när tomt. */
  brytM: number;
  /** Mansard: vågrätt från fasadlivet till brytpunkten. NaN när tomt. */
  indragM: number;
  fonster: number;
  fonsterBreddM: number;
  fonsterHojdM: number;
  dorrar: number;
  dorrBreddM: number;
  dorrHojdM: number;
  fasad: Fasad;
  farg: Farg;
  skick: Skick;
  stryk: Stryk;
}

export type FelNyckel =
  | 'langd'
  | 'bredd'
  | 'hojd'
  | 'matt'
  | 'nock'
  | 'vinkel'
  | 'bryt'
  | 'indrag'
  | 'fonster'
  | 'fonsterbredd'
  | 'fonsterhojd'
  | 'dorrar'
  | 'dorrbredd'
  | 'dorrhojd';

export type Utfall = 'farg' | 'puts' | 'tegel' | 'byte';
export type GorInte = 'utan-avdrag' | 'en-strykning' | 'blanda-partier' | 'ny-puts';
export type RegelNyckel =
  | 'vaggar'
  | 'gavel-sadel'
  | 'gavel-pulpet'
  | 'gavel-valmat'
  | 'gavel-mansard'
  | 'avdrag'
  | 'profil-lock'
  | 'profil-slat'
  | 'atgang'
  | 'kanten'
  | 'strykningar'
  | 'grundfarg'
  | 'grundolja'
  | 'slam-underlag'
  | 'burkar'
  | 'spill'
  | 'tegel'
  | 'byte'
  | 'silikat';

/** Raderna i den fasta åtgångstabellen (specen 14.4), i tabellens ordning. */
export type AtgangsNyckel =
  | 'tack-ommalning'
  | 'tack-skrapat'
  | 'grund-skrapat'
  | 'tack-nytt'
  | 'grund-nytt'
  | 'tack-kulor'
  | 'grund-kulor'
  | 'slam-ommalning'
  | 'slam-nytt'
  | 'silikat'
  | 'tegel';

export interface AtgangsRad {
  nyckel: AtgangsNyckel;
  /** Null för tegel. */
  m2PerLiter: number | null;
  /** Null för tegel. */
  strykningar: number | null;
  /** Liter som går åt; grund-skrapat liter per 10 m² bart trä; tegel null. */
  literGarAt: number | null;
  /** Burkarnas summa; silikat heltal uppåt; grund-skrapat och tegel null. */
  literAttKopa: number | null;
  burkar: Burk[] | null;
}

export interface Farglager {
  m2PerLiter: number;
  strykningar: number;
  /** Sant när läsaren valt 1, 2 eller 3 strykningar. */
  strykningarValda: boolean;
  /** Två decimaler, som i kvadratmeter.ts. */
  literRaknat: number;
  /** Null för puts: burkstorlekarna saknar källa. */
  burkar: Burk[] | null;
  /** Null för puts. */
  literAttKopa: number | null;
}

export type FasadytaResultat =
  | {
      status: 'ok';
      utfall: Utfall;
      omkretsM: number;
      /** Omkrets gånger höjd. */
      vaggarBruttoM2: number;
      /** Gavelspetsarna enligt takform. */
      gavelM2: number;
      bruttoM2: number;
      avdragFonsterM2: number;
      avdragDorrM2: number;
      avdragM2: number;
      /** Det stora talet: väggytan netto. */
      fasadytaM2: number;
      /** Höjden takfot till nock som räknats. Null för valmat och mansard. */
      tM: number | null;
      /** Vinkeln som räknats. Null för valmat och mansard. */
      vinkelGrader: number | null;
      mansard: { t1M: number; t2M: number; ovreBreddM: number } | null;
      /** Null för tegel. */
      profilfaktor: number | null;
      /** Null för tegel och byte. */
      maladYtaM2: number | null;
      /** Null för tegel och byte. */
      tackfarg: Farglager | null;
      /** Bara trä, akrylat eller oljealkyd, skick skrapat, rent eller kulor. */
      grundfarg: Farglager | null;
      /** Liter grundfärg per 10 m² bart trä vid skicket skrapat, trä med akrylat eller oljealkyd. Annars null. */
      grundPer10M2: number | null;
      gorInteDetHar: GorInte[];
      regler: RegelNyckel[];
    }
  | { status: 'ogiltig'; fel: Partial<Record<FelNyckel, string>> };

export type FasadytaOk = Extract<FasadytaResultat, { status: 'ok' }>;

export interface KallaRef {
  titel: string;
  url: string;
  /** Datum då källan lästes eller priset hämtades. */
  last: string;
}

/* ------------------------------------------------------------------ *
 * Källorna, en gång. Adress och datum som i underlaget.
 * ------------------------------------------------------------------ */

const SVENSKT_TRA: KallaRef = {
  titel: 'Svenskt Trä, Byggbeskrivningar, utvändiga träpaneler (uppdaterad 2021-12-27)',
  url: 'https://www.byggbeskrivningar.se/utvandigt/utvandiga-trapaneler/',
  last: '2026-09-28',
};
const SKI_0142: KallaRef = {
  titel: 'Svenskt Trä, SKI-0142 Utvändiga träpaneler',
  url: 'https://www.xlbyggstenvalls.se/umea/api/artikel/artikelgruppfil/559a8076e95ae/SKI-0142-Utv%C3%A4ndiga%20tr%C3%A4paneler-tryck_XL_Ny.pdf',
  last: '2026-09-28',
};
const BECKERS_FASAD: KallaRef = {
  titel: 'Beckers, Perfekt Fasad, datablad',
  url: 'https://beckers.se/produkter/perfekt-fasad',
  last: '2026-09-28',
};
const BECKERS_OLJA: KallaRef = {
  titel: 'Beckers, Perfekt Oljefärg, datablad',
  url: 'https://beckers.se/produkter/perfekt-oljefarg-0',
  last: '2026-09-28',
};
const ALCRO_BESTA: KallaRef = {
  titel: 'Alcro, Bestå Täckfärg, produktfaktablad (version 100724)',
  url: 'https://dam-cdn.ppg.com/adaptivemedia/rendition?id=4db5407f1a3c9ee8e3a4838cb0fc20fe14307bb4',
  last: '2026-09-28',
};
/** Burkstorlekarna: brytbaserna och den färdigtonade vita. */
const ALCRO_BESTA_SIDA: KallaRef = {
  titel: 'Alcro, Bestå Täckfärg, produktsida',
  url: 'https://alcro.se/produkter/besta-tackfarg',
  last: '2026-09-28',
};
const PROFFS_PERFEKT_FASAD: KallaRef = {
  titel: 'Proffsmagasinet, Beckers Perfekt Fasad halvmatt faluröd 10 l',
  url: 'https://www.proffsmagasinet.se/bygg-interior/farg-tapeter/utomhusfarg/fasadfarg/beckers-perfekt-fasad-fasadfarg-halvmatt-falurod-3141021',
  last: '2026-09-28',
};
const NORDSJO_TINOVA: KallaRef = {
  titel: 'Nordsjö, Tinova Exterior',
  url: 'https://www.nordsjo.se/sv/produkter/nordsj%C3%B6-tinova-exterior',
  last: '2026-09-28',
};
const NORDSJO_BERAKNA: KallaRef = {
  titel: 'Nordsjö, beräkna hur mycket färg du behöver',
  url: 'https://www.nordsjo.se/sv/inredningstips-och-r%C3%A5d/ber%C3%A4kna-hur-mycket-f%C3%A4rg-du-beh%C3%B6ver',
  last: '2026-09-28',
};
const BECKERS_TRAGRUND: KallaRef = {
  titel: 'Beckers, Primex Trägrund Plus, datablad',
  url: 'https://beckers.se/produkter/primex-tragrund-plus',
  last: '2026-09-28',
};
const BECKERS_GRUNDOLJA: KallaRef = {
  titel: 'Beckers, Primex Grundolja Trä Plus, datablad',
  url: 'https://beckers.se/produkter/primex-grundolja-tra-plus',
  last: '2026-09-28',
};
const FALU_FOLDER: KallaRef = {
  titel: 'Falu Rödfärg, tips och råd, folder 2023',
  url: 'https://falurodfarg.com/wp-content/uploads/2023/05/tips-och-rad-folder-2023.pdf',
  last: '2026-09-28',
};
const FALU_FAQ: KallaRef = {
  titel: 'Falu Rödfärg, hur mycket färg går det åt',
  url: 'https://falurodfarg.com/vanliga-fragor/malningen/hur-mycket-farg-gar-det-at/',
  last: '2026-09-28',
};
const FALU_ORIGINAL: KallaRef = {
  titel: 'Falu Rödfärg, Original',
  url: 'https://falurodfarg.com/farger/falu-rodfarg-original/',
  last: '2026-09-28',
};
const BECKERS_SILIKAT: KallaRef = {
  titel: 'Beckers, Mineral Silikatfärg, produktdatablad (version 20240708)',
  url: 'https://beckers.se/sites/default/files/pim/documents/Mineral_Silikatf%C3%A4rg_SV_PDS_Beckers_0.pdf',
  last: '2026-09-28',
};
const BECKERS_VALJ: KallaRef = {
  titel: 'Beckers, välj rätt fasadfärg',
  url: 'https://beckers.se/tips-och-rad/fasad/farg-till-fasad',
  last: '2026-09-28',
};
/** Forumsvaret saknar datum. */
const BECKERS_FORUM_FASAD: KallaRef = {
  titel: 'Beckers forum, måla husfasad',
  url: 'https://forum.beckers.se/org/beckers/d/mala-husfasad/',
  last: '2026-09-28',
};
/** Forumsvaret saknar datum. */
const BECKERS_FORUM_KULOR: KallaRef = {
  titel: 'Beckers forum, från mörkgrå fasad till utevit',
  url: 'https://forum.beckers.se/org/beckers/d/fran-morkgra-fasad-till-utevit/',
  last: '2026-09-28',
};
/** Forumsvaret saknar datum. */
const ALCRO_FORUM_KULOR: KallaRef = {
  titel: 'Alcro forum, ommålning och kulörsättning av fasad',
  url: 'https://forum.alcrostudio.se/org/alcro/d/ommalningkulorsattning-fasad-60-talshus/',
  last: '2026-09-28',
};
const LOVELY_ATGANG: KallaRef = {
  titel: 'Lovely Home, fasadfärg åtgång',
  url: 'https://www.lovelyhome.se/blogg/fasadfarg-atgang',
  last: '2026-09-28',
};
const PROFFSMAGASINET: KallaRef = {
  titel: 'Proffsmagasinet, färgmängd guide (2024-06-04)',
  url: 'https://www.proffsmagasinet.se/kunskapsportalen/guider/fargmangd-guide',
  last: '2026-09-28',
};
const FASADUM: KallaRef = {
  titel: 'Fasadum, färgåtgång vid fasadmålning (2025-06-02)',
  url: 'https://fasadum.se/blogg/fargatgang-vid-fasadmalning-sa-mycket-farg-behover-du-nar-du-ska-mala-om-huset/',
  last: '2026-09-28',
};
/** Forumsvaret saknar datum. */
const ALCRO_FORUM_TEGEL: KallaRef = {
  titel: 'Alcro forum, kan man måla en tegelfasad',
  url: 'https://forum.alcrostudio.se/org/alcro/d/kan-man-mala-en-tegelfasad/',
  last: '2026-09-28',
};
const WIENERBERGER: KallaRef = {
  titel: 'Wienerberger, tegelfasaden är den mest hållbara lösningen (2019-05-01)',
  url: 'https://www.wienerberger.se/om-oss/nyheter/tegelfasaden-aar-den-mest-haallbara-loesningen.html',
  last: '2026-09-28',
};
const CAPAROL_TEGEL: KallaRef = {
  titel: 'Caparol, Capatect tegelslamning, broschyr 2023',
  url: 'https://www.caparol.se/fileadmin/data_se/images/fasadsystem/broschyrer/ct-tegelslamning-broschyr.pdf',
  last: '2026-09-28',
};
const HAPPY_FALU_5: KallaRef = {
  titel: 'Happy Homes, Falu Rödfärg röd 5 l',
  url: 'https://www.happyhomes.se/farg/utomhusfarg/fasadfarg/falu-rodfarg-rod-5l',
  last: '2026-09-28',
};
/** Guidens källa; guiden anger att butikspriserna hämtades i september 2026. */
const KBYGG_FALU_10: KallaRef = {
  titel: 'K-Bygg, Falu Rödfärg Original 10 l',
  url: 'https://k-bygg.se/produkt/falu-rodfarg-orginal-rod-10l/7391353001015',
  last: 'september 2026',
};

/* ------------------------------------------------------------------ *
 * Konstanter. Källa eller ANTAGANDE i kommentaren över varje.
 * ------------------------------------------------------------------ */

/**
 * Lockpanelens mått i millimeter. Källa: Svenskt Trä, Byggbeskrivningar,
 * utvändiga träpaneler (uppdaterad 2021-12-27) och broschyren SKI-0142, läst
 * 2026-09-28: bottenbräda 22 × 145, lockbräda 22 × 120, 4,44 lm/m² av varje,
 * alltså centrumavstånd 1000 / 4,44 = 225 mm. Lockbrädans två kanter står ut
 * 22 mm ur planet och målas utöver väggytan.
 */
export const LOCK_TJOCKLEK_MM = 22;
export const LOCK_CC_MM = 225;

/**
 * Hur mycket mer yta panelen har att måla än väggytan.
 * lock: egen räkning ur Svenskt Träs mått ovan, 1 + 2 · 22 / 225 = 1,195,
 * avrundat till 1,20 (specen K1). Lockläktpanel ger 1,16 till 1,22 och slås
 * ihop hit. Ingen färgtillverkare anger en faktor.
 * slat: ANTAGANDE, spontad panel och fasspont; faser och spår försummas.
 * puts: ingen profil.
 */
export const PROFILFAKTOR: Record<Exclude<Fasad, 'tegel'>, number> = {
  lock: Math.round((1 + (2 * LOCK_TJOCKLEK_MM) / LOCK_CC_MM) * 100) / 100,
  slat: 1.0,
  puts: 1.0,
};

/**
 * Åtgång i m² per liter och strykning, nedre kanten av delintervallet för
 * fallet (specen K2). Alla lästa 2026-09-28.
 * akrylat, malat 7: Alcro Bestå 7 till 8 på hyvlat eller tidigare målat
 *   (Alcro, Bestå Täckfärg, produktfaktablad version 100724); inom Beckers
 *   Perfekt Fasad 6 till 8 (beckers.se/produkter/perfekt-fasad) och Nordsjö
 *   Tinova Exterior ommålning 6 till 8 (nordsjo.se).
 * akrylat, sagat 6: Alcro Bestå 6 till 7 på sågat (produktfaktabladet); inom Beckers
 *   Perfekt Fasad 6 till 8. Nordsjö Tinova nymålning 4 till 6 har 6 som övre kant.
 * oljealkyd, malat 7 och sagat 6: Beckers Perfekt Oljefärg, 7 till 8 på hyvlat
 *   eller tidigare målat och 6 till 7 på sågade paneler
 *   (beckers.se/produkter/perfekt-oljefarg-0).
 * slamfarg 3: Falu Rödfärg Original, "ca 3" i foldern 2023, 3 till 4 i FAQ och 3
 *   på produktsidan (falurodfarg.com).
 * silikat 3: Beckers Mineral Silikatfärg 3 till 5, nedre kanten
 *   (beckers.se/produkter/mineral-silikatfarg).
 */
export const ATGANG = {
  akrylat: { malat: 7, sagat: 6 },
  oljealkyd: { malat: 7, sagat: 6 },
  slamfarg: 3,
  silikat: 3,
} as const;

/**
 * Grundfärgens åtgång i m² per liter. Källa: Beckers Primex Trägrund Plus,
 * 6 till 7 på sågat och 7 till 8 på hyvlat eller tidigare målat, nedre kanten
 * (beckers.se/produkter/primex-tragrund-plus, läst 2026-09-28).
 */
export const GRUND_ATGANG = { sagat: 6, malat: 7 } as const;

/**
 * Strykningar när läsaren inte valt själv (stryk=auto). Underlaget avsnitt 4.
 * tackfarg 2: Beckers Perfekt Fasad datablad ("två strykningar"), Beckers forum
 *   måla husfasad, Nordsjö ("minst två strykningar"), Svenskt Trä
 *   Byggbeskrivningar ("ska strykas två gånger"). Samma för ommålning, skrapat,
 *   rent och kulörbyte.
 * slam.ommalning 1: Falu Rödfärg folder 2023, "Ett tunt stryk med färg vid ommålning".
 * slam.rent 2: Falu Rödfärg folder 2023, "Två tunna stryk med färg vid nymålning".
 *   Den första strykningen är förtunnad; ANTAGANDE att den räknas som full.
 * slam.skrapat 1: ANTAGANDE, räknas som ommålning.
 * slam.kulor 2: ANTAGANDE, räknas som nytt virke.
 * silikat 2: Källa: Beckers Mineral Silikatfärg, produktdatablad version
 *   20240708. Porös puts: grund av Primex Silikatbinder och vatten 1:1 utan
 *   färg, sedan två strykningar färg. Tät puts: grund av Silikatbinder och
 *   färg 1:2, sedan en strykning, alltså 1 + 2/3 strykning färg (egen räkning,
 *   ANTAGANDE att grundblandningen räcker lika långt). 2 är exakt för porös
 *   yta och något för mycket för tät. Silikatbindern ingår inte i litern.
 */
export const STRYK_AUTO = {
  tackfarg: 2,
  slam: { ommalning: 1, skrapat: 1, rent: 2, kulor: 2 },
  silikat: 2,
} as const;

/**
 * Burkstorlekarna i liter per färg. Källa, lästa 2026-09-28: Alcro, Bestå
 * Täckfärg, produktsida: brytbaserna för kulör 0,9, 2,7 och 9 l, färdigtonad
 * vit 313 i 1, 3 och 10 l; Proffsmagasinet, Beckers Perfekt Fasad i 10 l;
 * Happy Homes, Falu Rödfärg röd 5 l; K-Bygg, Falu Rödfärg Original 10 l.
 * ANTAGANDE: räknaren räknar trä och grund med brytbasernas 0,9, 2,7 och 9 l,
 * så att den som köper 1, 3 eller 10 l får mer och aldrig mindre. Samma
 * storlekar för oljefärg och grundfärg är ANTAGANDE.
 */
export const BURKAR_FARG = {
  akrylat: [0.9, 2.7, 9],
  oljealkyd: [0.9, 2.7, 9],
  grund: [0.9, 2.7, 9],
  slamfarg: [5, 10],
} as const;

/**
 * Fönstrets mått i meter. ANTAGANDE, kopierat från kvadratmeter.ts: Elitfönster
 * förklarar modulsystemet, alltså att modulmåttet anges i decimeter och att
 * karmen är 20 mm mindre än hålet i väggen, så ett fönster med modul 12x12
 * sitter i ett hål på 1200 × 1200 mm. Att just det måttet är det vanligaste i
 * svenska bostäder är däremot vårt antagande; ingen tillverkare publicerar den
 * statistiken.
 */
export const FONSTER_BREDD_M = 1.2;
export const FONSTER_HOJD_M = 1.2;

/**
 * Ytterdörrens mått i meter. ANTAGANDE: guidens ytterdörr i
 * /fasad/mala-om-huset/, källa saknas (underlaget, Att verifiera 9).
 * Kvadratmeterräknarens 0,9 × 2,1 är en innerdörr och används inte här.
 */
export const DORR_BREDD_M = 1.0;
export const DORR_HOJD_M = 2.1;

/** Färgerna i formuläret: etiketterna ur mala-ute.ts, utan träoljan. */
export const FARG_VAL: { varde: Farg; etikett: string }[] = FARGTYPER.filter(
  (f): f is { varde: Farg; etikett: string } => f.varde !== 'traolja',
);

/**
 * Standardvärdena. ANTAGANDE: guidens räkneexempel i avsnittet om fasadytan,
 * med lockpanel (specen K1). Vinkeln 27 är förifylld och används bara när
 * läsaren väljer vinkel. Standard ger 98,2 m² fasadyta, 117,84 m² målat,
 * 33,67 liter och fyra burkar om 9 liter, 36 liter.
 */
export const STANDARD: FasadytaIndata = {
  langdM: 10,
  breddM: 8,
  hojdM: 2.8,
  takform: 'sadel',
  matt: 'nock',
  nockM: 2.0,
  vinkelGrader: 27,
  brytM: NaN,
  indragM: NaN,
  fonster: 10,
  fonsterBreddM: FONSTER_BREDD_M,
  fonsterHojdM: FONSTER_HOJD_M,
  dorrar: 2,
  dorrBreddM: DORR_BREDD_M,
  dorrHojdM: DORR_HOJD_M,
  fasad: 'lock',
  farg: 'akrylat',
  skick: 'ommalning',
  stryk: 'auto',
};

/**
 * Gränserna, inklusive. ANTAGANDE i linje med kvadratmeter.ts (underlaget
 * avsnitt 1): längd och bredd 2 till 50 m, höjd 1,5 till 12 m (tre våningar).
 * Öppningsmåtten är kvadratmeterräknarens.
 */
export const GRANSER = {
  langdM: [2, 50],
  breddM: [2, 50],
  hojdM: [1.5, 12],
  fonster: [0, 60],
  dorrar: [0, 20],
  fonsterBreddM: [0.2, 6],
  fonsterHojdM: [0.2, 4],
  dorrBreddM: [0.3, 5],
  dorrHojdM: [1, 4],
} as const;

/* ------------------------------------------------------------------ *
 * Formatering. Sidan använder bara dessa.
 * ------------------------------------------------------------------ */

/** Hårt mellanslag, som i src/lib/format.ts, så att "1 234,6" aldrig radbryts. */
const HART = ' ';

function medDecimaler(n: number, decimaler: number): string {
  const fast = n.toFixed(decimaler);
  const [heltal, dec] = fast.split('.');
  const grupperat = (heltal ?? '').replace(/\B(?=(\d{3})+(?!\d))/g, HART);
  return dec ? `${grupperat},${dec}` : grupperat;
}

/** Högst en decimal, utan nolla på slutet (specen 14.3 B3). */
function enDecimalUtanNolla(n: number): string {
  const rundat = Math.round(n * 10) / 10;
  return Number.isInteger(rundat) ? medDecimaler(rundat, 0) : medDecimaler(rundat, 1);
}

/** Liter som går åt, en decimal utan nolla på slutet: 33.67 → "33,7", 36 → "36". */
export function literGarAtText(n: number): string {
  return enDecimalUtanNolla(n);
}

/** Som talText i kvadratmeter.astro: heltal utan decimal, annars en eller två. */
export function literText(n: number): string {
  const rundat = Math.round(n * 100) / 100;
  if (Number.isInteger(rundat)) return medDecimaler(rundat, 0);
  if (Math.abs(Math.round(rundat * 10) / 10 - rundat) < 1e-9) return medDecimaler(rundat, 1);
  return medDecimaler(rundat, 2);
}

/** Två decimaler med komma, för indraget i feltexten. */
function tvaDecimalerText(n: number): string {
  return medDecimaler(n, 2);
}

/** En decimal med komma, för nockhöjderna i feltexten. Talen avrundas inåt innan de kommer hit. */
function enDecimalText(n: number): string {
  return medDecimaler(n, 1);
}

/** Talet som det skrivs i en adress eller ett fält: decimalkomma, inga tusental. */
const komma = (n: number): string => String(n).replace('.', ',');

const RAKNEORD = ['ingen', 'en', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

/**
 * "tre burkar om 10 liter och en om 1 liter". Samma form och samma ord som
 * burkRad i kvadratmeter.astro; ändras orden ändras de i båda.
 */
export function burkText(burkar: Burk[]): string {
  const delar = burkar.map((b, index) => {
    const ord = RAKNEORD[b.antal] ?? medDecimaler(b.antal, 0);
    const ordet = b.antal === 1 ? 'burk' : 'burkar';
    return index === 0
      ? `${ord} ${ordet} om ${literText(b.literPerBurk)} liter`
      : `${ord} om ${literText(b.literPerBurk)} liter`;
  });
  if (delar.length <= 1) return delar[0] ?? '';
  return `${delar.slice(0, -1).join(', ')} och ${delar[delar.length - 1]}`;
}

/* ------------------------------------------------------------------ *
 * Beskedets värden
 * ------------------------------------------------------------------ */

export interface BeskedVarden {
  utfall: Utfall;
  fasad: Fasad;
  farg: Farg;
  skick: Skick;
  takform: Takform;
  /** m2Text(fasadytaM2). */
  yta: string;
  /** m2Text, null när faktorn är 1 eller utfallet saknar liter. */
  maladYta: string | null;
  /** literText(tackfarg.literRaknat). */
  liter: string | null;
  literAttKopa: string | null;
  /** burkText(tackfarg.burkar). */
  burkar: string | null;
  strykningar: number | null;
  grundLiter: string | null;
  grundBurkar: string | null;
  /** literGarAtText(grundPer10M2): liter grundfärg per 10 m² bart trä vid skrapat. */
  grundPer10: string | null;
  /** TEXT.fargIMening[farg], eller silikatfärgens ord vid puts. */
  fargNamn: string | null;
}

/* ------------------------------------------------------------------ *
 * Texten. Allt läsaren ser och som modulen äger. Hantverkaren skriver.
 * ------------------------------------------------------------------ */

/** En regel i "Därför blev svaret så": texten och källorna som länkar under. */
export interface RegelText {
  text: string;
  kallor: KallaRef[];
}

/** "en strykning", "två strykningar". */
function strykOrd(n: number): string {
  return n === 1 ? 'en strykning' : `${RAKNEORD[n] ?? String(n)} strykningar`;
}
/** Första bokstaven versal, för ett räkneord i början av en mening. */
function versal(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
/** Lägger ihop de meningar som gäller, med ett mellanslag emellan. */
function meningar(...delar: (string | false | null | undefined)[]): string {
  return delar.filter((d): d is string => typeof d === 'string' && d.length > 0).join(' ');
}
/** Lockpanelens faktor som den skrivs överallt, "1,2" (specen 14.3 B3). */
const LOCK_FAKTOR_TEXT = komma(PROFILFAKTOR.lock);
/** "0,9, 2,7 och 9 liter". */
function literLista(s: readonly number[]): string {
  const t = s.map(komma);
  const lista = t.length > 1 ? `${t.slice(0, -1).join(', ')} och ${t[t.length - 1]}` : (t[0] ?? '');
  return `${lista} liter`;
}

export const TEXT = {
  /*
   * Beskedet överst i spalten. rubrik är en mening med verb som säger vad
   * läsaren ska göra, och med tal. rad säger inte samma sak som rubriken.
   */
  besked: {
    farg: {
      /* Utfall farg: trä med akrylat, oljefärg eller slamfärg. Bär literAttKopa och burkar. */
      rubrik: (v: BeskedVarden): string =>
        `Köp ${v.literAttKopa ?? ''} liter ${v.fargNamn ?? ''} i ${v.burkar ?? ''}`,
      /*
       * Lockpanel (maladYta finns): varför det går åt mer än fasadytan antyder.
       * Slät panel: att färgen räknas på fasadytan som den är. Rent trä och ny
       * kulör (grundLiter): att grundfärgen står längre ner. Skrapat (grundPer10):
       * grundfärgen per 10 m² bart trä, som inte ingår i burkarna i rubriken.
       */
      rad: (v: BeskedVarden): string =>
        meningar(
          v.maladYta !== null
            ? 'Lockpanelen har mer att måla än fasadytan, och därför går det åt fler liter.'
            : 'Slät panel målas bara på framsidan, så färgen räknas på fasadytan som den är.',
          v.grundLiter !== null && 'Grundfärgen stryks en gång före täckfärgen, och hur mycket den tar står längre ner.',
          v.grundPer10 !== null &&
            'Där du har skrapat fram bart trä behövs grundfärg utöver det, och hur mycket den tar står längre ner.',
        ),
    },
    puts: {
      /* Utfall puts: silikatfärg, liter utan burkar. Bär literAttKopa, heltal uppåt (specen 14.3 B3). */
      rubrik: (v: BeskedVarden): string => `Köp ${v.literAttKopa ?? ''} liter silikatfärg till putsen`,
      /* Alltid: bindern ingår inte. Skick rent: ny puts ska härda först. */
      rad: (v: BeskedVarden): string =>
        meningar(
          'Grunden blandas av silikatbinder, som köps för sig och inte ingår i literna.',
          v.skick === 'rent' && 'Är putsen ny ska den ha härdat i sex till åtta veckor innan du målar.',
        ),
    },
    tegel: {
      /* Utfall tegel: ytan finns, färgen behövs inte. Bär yta. */
      rubrik: (v: BeskedVarden): string => `Låt de ${v.yta} m² tegel vara omålade`,
      /* Varför, med Alcros frostsprängning, och vart läsaren går om huset redan är målat eller teglet skadat. */
      rad: (_v: BeskedVarden): string =>
        'Färg direkt på tegel ökar risken att teglet fryser sönder, skriver Alcro, eftersom fukten samlas i fogarna. Är huset redan målat eller teglet skadat står det längre ner vad som gäller.',
    },
    byte: {
      /* Utfall byte: läsaren byter färgtyp, räknaren ger ingen liter. Bär yta. */
      rubrik: (v: BeskedVarden): string =>
        `Fråga tillverkaren vad den nya färgen kräver innan du köper färg till ${v.yta} m²`,
      /*
       * Tre fall: puts (Beckers, inte på organisk färg), slamfärg vald (Falu,
       * bara omålat eller slamfärgat trä) och täckfärg på trä (Alcro, samma
       * färgtyp och grundfärg på gammal oljefärg).
       */
      rad: (v: BeskedVarden): string =>
        v.fasad === 'puts'
          ? 'Silikatfärg fäster inte på puts som har målats med plast- eller akrylatfärg, så den färgen måste bort helt först. Liter räknar jag bara när du fortsätter med samma sorts färg.'
          : v.farg === 'slamfarg'
            ? 'Slamfärg går bara på omålat trä eller trä som redan har slamfärg, så ovanpå täckfärg fungerar den inte. Liter räknar jag bara när du fortsätter med samma sorts färg.'
            : 'Liter räknar jag bara när du fortsätter med samma sorts färg som redan sitter på väggen. Sitter det slamfärg där ska väggen ha slamfärg igen, och gammal oljefärg vill ha grundfärg under en akrylatfärg.',
    },
  } satisfies Record<Utfall, { rubrik: (v: BeskedVarden) => string; rad: (v: BeskedVarden) => string }>,

  /*
   * Formulärets etiketter, legender och hjälprader (specen avsnitt 3). Ordet
   * "tak" står inte ensamt där det kan betyda innertak. Etiketterna i
   * tvåkolumnsraderna håller sig under 14 tecken (specen 13.5). Hjälpraderna
   * visas bara i fullt format.
   */
  form: {
    /* Legenden över längd, bredd och höjd. */
    'legend-huset': 'Huset',
    /* Etikett, långsidan, längs takfoten på sadeltak. */
    langd: 'Långsidans längd',
    /* Etikett, gavelns bredd. */
    bredd: 'Gavelns bredd',
    /* Hjälprad: sidan där taket syns i profil. På pulpettak lutar taket över den. */
    'bredd-hjalp':
      'Gaveln är sidan där du ser takets lutning från sidan, som en triangel på ett sadeltak och en sned kant på ett pulpettak.',
    /* Etikett, höjd från sockel till takfot. */
    hojd: 'Höjd från sockeln till takfoten',
    /* Hjälprad: där panelen slutar under takutsprånget (guidens steg 2). */
    'hojd-hjalp': 'Takfoten är där panelen slutar under takutsprånget.',
    /* Legenden över takformerna. */
    'legend-takform': 'Takform',
    /* Hjälprad under takformerna: halvvalmat, välj sadeltak och mät till nocken (antagandet halvvalm). */
    'takform-hjalp':
      'Har du ett halvvalmat tak väljer du sadeltak och mäter upp till nocken. Då räknas valmens lilla triangel som vägg, och du får lite färg över.',
    /*
     * Rad under de tre takformerna i kompakt format, en länk till takformen på
     * verktygssidan (/rakna/fasadyta/#takform). Där väljer läsaren mansardtak
     * och fyller i brytpunkten.
     */
    'kompakt-mansard': 'Mansardtak väljer du på räknarens egen sida',
    /* Legenden över nockhöjd och takvinkel. */
    'legend-matt': 'Nockhöjd eller takvinkel',
    /* Radioknappen för att mäta höjden från takfot till nock. */
    'matt-nock': 'Jag har mätt höjden',
    /* Radioknappen för att ange takvinkeln. */
    'matt-vinkel': 'Jag vet vinkeln',
    /* Etikett, höjden från takfot till nock. Högst 14 tecken. */
    nock: 'Till nocken',
    /* Etikett, takvinkeln i grader. Högst 14 tecken. */
    vinkel: 'Takvinkel',
    /* Hjälprad: var höjden mäts, och att valmat tak inte behöver något av måtten. */
    'matt-hjalp': 'Höjden mäter du från takfoten upp till nocken. Ett valmat tak behöver inget av måtten.',
    /* Legenden över mansardens två fält, bara fullt format. */
    'legend-mansard': 'Bara för mansardtak',
    /* Etikett, höjden från takfoten till brytpunkten. Högst 14 tecken. */
    bryt: 'Till brytpunkt',
    /* Etikett, vågrätt från fasadlivet in till brytpunkten. Högst 14 tecken. */
    indrag: 'Indrag',
    /* Hjälprad: brytpunkten mäts från takfoten, indraget från fasadlivet. */
    'mansard-hjalp':
      'Brytpunkten är där takfallet byter lutning. Höjden dit mäter du från takfoten, precis som höjden till nocken, och indraget vågrätt från fasaden in till brytpunkten.',
    /* Legenden över fönster och dörrar. */
    'legend-oppningar': 'Fönster och dörrar',
    fonster: 'Antal fönster',
    /* Högst 14 tecken. */
    fonsterbredd: 'Fönsterbredd',
    /* Högst 14 tecken. */
    fonsterhojd: 'Fönsterhöjd',
    dorrar: 'Antal dörrar',
    /* Högst 14 tecken. */
    dorrbredd: 'Dörrens bredd',
    /* Högst 14 tecken. */
    dorrhojd: 'Dörrens höjd',
    /* Legenden över fasadens material. */
    'legend-fasad': 'Fasaden',
    /* Legenden över färgerna; alternativen är etiketterna ur FARGTYPER. */
    'legend-farg': 'Färgen',
    /* Hjälprad: färgen gäller trä; puts räknas med silikatfärg. */
    'farg-hjalp': 'Färgen gäller träfasad. Puts räknar jag alltid med silikatfärg.',
    /* Legenden över fasadens skick. */
    'legend-skick': 'Fasadens skick',
    /* Etikett över listan med strykningar, bara fullt format. */
    stryk: 'Strykningar',
  },

  /* Radioetiketterna för fasaden. lock visar att lockläktpanel hör hit; slat att spontad panel och fasspont hör hit. */
  fasad: {
    lock: 'Lockpanel eller lockläktpanel',
    slat: 'Slät panel, som spontad panel och fasspont',
    puts: 'Puts',
    tegel: 'Tegel',
  } satisfies Record<Fasad, string>,

  /* Radioetiketterna för skicket, med guidens tre nivåer i orden, plus ny kulör och annan färgtyp. */
  skick: {
    ommalning: 'Färgen sitter kvar och behöver bara tvättas',
    skrapat: 'Färgen flagar, stora ytor ska skrapas',
    /* Gäller också ny puts (specen 14.1 punkt 1). Högst cirka 45 tecken. */
    rent: 'Ner till rent trä, nytt virke eller ny puts',
    kulor: 'Ny kulör, mycket ljusare eller mörkare',
    byte: 'En annan sorts färg än den som sitter där',
  } satisfies Record<Skick, string>,

  /* Alternativen i listan med strykningar. auto följer fallet. */
  stryk: {
    /* Högst 26 tecken (specen 14.2 rad 4). */
    auto: 'Som tillverkarna anger',
    n: (n: number): string => versal(strykOrd(n)),
  },

  /* Radioetiketterna för takformen. */
  takform: {
    sadel: 'Sadeltak',
    pulpet: 'Pulpettak',
    valmat: 'Valmat tak',
    mansard: 'Mansardtak',
  } satisfies Record<Takform, string>,

  /* Färgens namn inne i en mening, och silikatfärgens vid puts. */
  fargIMening: {
    akrylat: 'akrylatfärg',
    oljealkyd: 'alkydoljefärg',
    slamfarg: 'slamfärg',
    silikat: 'silikatfärg',
  } satisfies Record<Farg | 'silikat', string>,

  /* Feltexterna under fälten. Gränserna kommer in som tal. */
  fel: {
    langd: (min: number, max: number): string => `Skriv en längd mellan ${komma(min)} och ${komma(max)} meter.`,
    bredd: (min: number, max: number): string => `Skriv en bredd mellan ${komma(min)} och ${komma(max)} meter.`,
    hojd: (min: number, max: number): string => `Skriv en höjd mellan ${komma(min)} och ${komma(max)} meter.`,
    vinkel: (min: number, max: number): string =>
      `Skriv en vinkel mellan ${komma(min)} och ${komma(max)} grader för den här takformen.`,
    /* De tillåtna nockhöjderna i meter för gavelns bredd, en decimal, avrundade inåt (specen 14.3 B3). */
    nock: (minM: number, maxM: number): string =>
      `Med den gavelbredden ska höjden till nocken ligga mellan ${enDecimalText(minM)} och ${enDecimalText(maxM)} meter.`,
    /*
     * Tillagd av utvecklaren: nockhöjden är tom, noll eller negativ på
     * mansardtak, eller gavelns bredd är ogiltig så att de tillåtna
     * nockhöjderna inte går att räkna.
     */
    'nock-tal': 'Skriv höjden från takfoten upp till nocken i meter.',
    /* Mansardtak räknas med höjder, inte med vinkel. Står under legenden för nockhöjd och takvinkel. */
    'matt-mansard': 'Ett mansardtak räknar jag med höjder. Välj att du har mätt höjden och fyll i brytpunkten.',
    /* Brytpunkten saknas, är noll eller ligger i eller över nocken. */
    bryt: 'Skriv höjden från takfoten till brytpunkten. Den ska vara lägre än nocken.',
    /* Indraget saknas, är noll eller når halva gaveln. */
    indrag: (maxM: number): string =>
      `Skriv indraget i meter. Det ska vara mer än noll och mindre än ${tvaDecimalerText(maxM)}, som är halva gaveln.`,
    antal: (min: number, max: number): string => `Skriv ett antal mellan ${min} och ${max}.`,
    heltal: 'Skriv ett helt antal.',
    'matt-oppning': (min: number, max: number): string =>
      `Skriv ett mått mellan ${komma(min)} och ${komma(max)} meter.`,
    /* Fönster och dörrar tar hela väggytan. Samma text under båda fälten. */
    avdrag: 'Fönstren och dörrarna blir större än hela väggen. Titta på antalet och måtten en gång till.',
  },

  /* Resultatspalten (specen 4.3). Högst 900 tecken synlig text vid standardvärdena. */
  spalt: {
    'etikett-yta': 'Fasadyta',
    /* Brutto med gavelspetsarna och avdraget för fönster och dörrar. */
    'rad-brutto': (brutto: string, avdrag: string): string =>
      `Väggarna är ${brutto} m² med gavelspetsarna, och fönster och dörrar tar ${avdrag} av dem.`,
    'etikett-farg': 'Färg',
    /*
     * Liter räknat, strykningar och m²/l. Ytan står i raden om den målade ytan
     * på lockpanel och är det stora talet annars, så den upprepas inte här.
     */
    'rad-raknat': (liter: string, _yta: string, strykningar: number, m2PerLiter: number): string =>
      `Det går åt ${liter} liter till ${strykOrd(strykningar)}, med ${m2PerLiter} m² per liter.`,
    /* Visas när profilfaktorn inte är 1, alltså på lockpanel. */
    'rad-malad-yta': (maladYta: string, faktor: string): string => `Du målar ${maladYta} m², fasadytan gånger ${faktor} för lockpanelen.`,
    'etikett-grund': 'Grundfärg',
    'rad-grund': (liter: string, burkar: string): string => `Det går åt ${liter} liter till en strykning. Köp ${burkar}.`,
    /*
     * Skick skrapat (specen 14.3 B2): grundfärgen per 10 m² bart trä, eftersom
     * det är okänt hur mycket bart trä skrapningen ger. Står efter etikett-grund.
     */
    'rad-grund-bart': (liter: string): string => `Räkna med ${liter} liter för varje 10 m² bart trä du har skrapat fram.`,
    /* Puts: burkstorlekarna saknar källa och räknas inte. */
    'rad-puts-burkar': 'Burkarna räknar jag inte, för jag har inga säkra storlekar på silikatfärg.',
    /* Länk till "Därför blev svaret så". */
    pekrad: 'Uträkningen steg för steg, med källorna',
    /* Länk till /rakna/mala-ute/, vid farg och puts. */
    'lank-mala-ute': 'Se om vädret duger för att måla i dag',
    /* Tillagd av utvecklaren: etiketten över den delbara adressen. */
    'dela-etikett': 'Länk till ditt svar',
  },

  /*
   * Uträkningen överst i "Därför blev svaret så" (specen 4.4), en rad per steg
   * med talen ur resultatet. Rader utan innehåll i utfallet står inte med.
   */
  darfor: {
    vaggar: (omkrets: string, hojd: string, yta: string): string =>
      `Omkretsen ${omkrets} m gånger höjden ${hojd} m ger ${yta} m² vägg.`,
    'gavel-sadel': (t: string, vinkel: string, yta: string): string =>
      `De två gavelspetsarna stiger ${t} m till nocken, med takvinkeln ${vinkel} grader, och är ${yta} m² tillsammans.`,
    'gavel-pulpet': (t: string, vinkel: string, yta: string): string =>
      `Pulpettaket stiger ${t} m över gaveln, med takvinkeln ${vinkel} grader. Gavlarnas sneda delar och den högre långsidan ger ${yta} m² till.`,
    'gavel-valmat': 'Ett valmat tak har inga gavelspetsar, så här kommer ingen yta till.',
    'gavel-mansard': (t1: string, t2: string, ovreBredd: string, yta: string): string =>
      `Mansardgavlarna är ${t1} m höga upp till brytpunkten och ${t2} m därifrån till nocken, och ${ovreBredd} m breda vid brytpunkten. De ger ${yta} m² till.`,
    fonster: (antal: number, bredd: string, hojd: string, yta: string): string =>
      antal === 1
        ? `Fönstret på ${bredd} gånger ${hojd} m drar av ${yta} m².`
        : `Fönstren, ${antal} stycken på ${bredd} gånger ${hojd} m, drar av ${yta} m².`,
    dorrar: (antal: number, bredd: string, hojd: string, yta: string): string =>
      antal === 1
        ? `Dörren på ${bredd} gånger ${hojd} m drar av ${yta} m².`
        : `Dörrarna, ${antal} stycken på ${bredd} gånger ${hojd} m, drar av ${yta} m².`,
    fasadyta: (yta: string): string => `Kvar blir fasadytan, ${yta} m².`,
    'malad-yta': (yta: string, faktor: string): string =>
      `Med lockpanelen blir det ${yta} m² att måla, fasadytan gånger ${faktor}.`,
    'liter-tack': (liter: string, strykningar: number, m2PerLiter: number): string =>
      `Med ${strykOrd(strykningar)} och ${m2PerLiter} m² per liter går det åt ${liter} liter.`,
    'liter-grund': (liter: string, m2PerLiter: number): string =>
      `Till en strykning grundfärg med ${m2PerLiter} m² per liter går det åt ${liter} liter.`,
    /* Skick skrapat (specen 14.3 B2): grundfärgen per 10 m² bart trä, med åtgången för sågat trä. */
    'grund-bart': (liter: string, m2PerLiter: number): string =>
      `Där du har skrapat fram bart trä går det åt ${liter} liter grundfärg för varje 10 m², med ${m2PerLiter} m² per liter.`,
  },

  /*
   * Den fasta åtgångstabellen i "Så räknar jag" (specen 14.4), för guidens hus
   * med slät panel. Visas alltid, oberoende av indata. Talen kommer ur
   * atgangstabell(); cellerna formateras med literGarAtText, literText och burkText.
   */
  atgangstabell: {
    /* H3 över tabellen. */
    rubrik: 'Färg och burkar till en fasad på 98 m²',
    /* Fem kolumnrubriker: färg och underlag, m² per liter och strykning, strykningar, liter och burkar till 98 m², källa. */
    kolumner: [
      'Färg och underlag',
      'Kvadratmeter per liter och strykning',
      'Strykningar',
      'Liter och burkar till 98 m²',
      'Källa',
    ] as string[],
    /* Radnamnen. Täckfärgsraderna säger både akrylat- och oljefärg. */
    rad: {
      'tack-ommalning': 'Akrylat- eller alkydoljefärg, ommålning',
      'tack-skrapat': 'Akrylat- eller alkydoljefärg, skrapat och grundat',
      'grund-skrapat': 'Grundfärg på skrapat, bart trä',
      'tack-nytt': 'Akrylat- eller alkydoljefärg, nytt trä',
      'grund-nytt': 'Grundfärg på nytt trä',
      'tack-kulor': 'Akrylat- eller alkydoljefärg, ny kulör',
      'grund-kulor': 'Grundfärg vid ny kulör',
      'slam-ommalning': 'Slamfärg, ommålning',
      'slam-nytt': 'Slamfärg, nytt virke',
      silikat: 'Silikatfärg på puts',
      tegel: 'Omålat tegel',
    } satisfies Record<AtgangsNyckel, string>,
    /* Cellen för liter och burkar: liter som går åt, liter att köpa och burkarna. */
    liter: (literGarAt: string, literAttKopa: string, burkar: string): string =>
      `Går åt ${literGarAt} liter, köp ${literAttKopa} liter i ${burkar}`,
    /* Cellen för grund-skrapat: liter per 10 m² bart trä. */
    grundBart: (liter: string): string => `${liter} liter för varje 10 m² bart trä`,
    /* Cellen för silikat: liter som går åt och liter att köpa, bindern utanför. */
    putsUtanBinder: (liter: string, kopa: string): string =>
      `Det går åt ${liter} liter. Köp ${kopa} liter, och bindern till grunden för sig.`,
    /* Tegelradens celler. */
    tegel: {
      m2: 'Ingen färg',
      strykningar: 'Inga',
      liter: 'Ska inte målas',
    },
    /* Källcellen: tillverkarens namn, kort, utan länk. Tegelraden: Alcro och Wienerberger. */
    kalla: {
      'tack-ommalning': 'Alcro Bestå, Beckers Perfekt Oljefärg',
      'tack-skrapat': 'Alcro Bestå, Beckers Perfekt Oljefärg',
      'grund-skrapat': 'Beckers Primex Trägrund',
      'tack-nytt': 'Alcro Bestå, Beckers Perfekt Oljefärg',
      'grund-nytt': 'Beckers Primex Trägrund',
      'tack-kulor': 'Alcro Bestå, Beckers Perfekt Oljefärg',
      'grund-kulor': 'Beckers Primex Trägrund',
      'slam-ommalning': 'Falu Rödfärg',
      'slam-nytt': 'Falu Rödfärg',
      silikat: 'Beckers Mineral Silikatfärg',
      tegel: 'Alcro och Wienerberger',
    } satisfies Record<AtgangsNyckel, string>,
    /* En mening under tabellen om varifrån talen kommer. */
    under: 'Talen gäller 98,2 m² fasadyta, huset i formuläret utan tillägget för lockpanel, och bygger på den nedre kanten av spannet i tillverkarnas datablad, där akrylatfärg och alkydoljefärg har samma tal.',
  },

  /*
   * "Gör inte det här". utan-avdrag och blanda-partier har samma innebörd som
   * i kvadratmeter.ts men andra meningar. en-strykning: tillverkarna vill ha
   * två. ny-puts: 6 till 8 veckors härdning, Beckers.
   */
  gorInte: {
    /* Fönster och dörrar är båda noll. */
    'utan-avdrag':
      'Du har skrivit noll fönster och noll dörrar. Ett hus utan öppningar finns knappast, och varje fönster du glömmer blir färg som du betalar för och sedan har stående i förrådet.',
    /* Läsaren valt en strykning täckfärg på trä. */
    'en-strykning':
      'Nöj dig inte med en strykning täckfärg. Beckers och Alcro vill båda ha två på en träfasad, och Alcro skriver att två alltid skyddar bättre. Med en strykning köper du hälften så mycket färg, men väggen får också bara hälften så mycket att stå emot vädret med.',
    /* Täckfärgen blir två burkar eller fler. */
    'blanda-partier':
      'Måla inte ur en burk i taget. Två burkar av samma kulör kan skilja sig en aning, särskilt när kulören blandas i butiken, och skiftet syns där du öppnade nästa burk. Häll ihop burkarna i en stor hink innan du börjar, så får hela huset samma nyans.',
    /* Puts och skick rent. */
    'ny-puts':
      'Ny puts ska härda i sex till åtta veckor innan den får silikatfärg, skriver Beckers i databladet. Putsar du i juni blir det alltså augusti innan penseln kommer fram.',
  } satisfies Record<GorInte, string>,

  /*
   * Reglerna i "Därför blev svaret så". Källorna är data. Gavelspetsens
   * formel står i gavel-*, profilfaktorn och varför 1,20 är egen räkning
   * står i profil-lock och ingen annanstans, tegelbeskedets skäl i tegel.
   */
  regel: {
    vaggar: {
      text: 'Väggarna räknar jag som omkretsen vid sockeln gånger höjden upp till takfoten, som om huset vore en låda utan tak.',
      kallor: [],
    },
    'gavel-sadel': {
      text: 'Gavelspetsen är den del av gaveln som går upp i en spets mellan takfoten och nocken. Den är en triangel, så ytan är gavelns bredd gånger höjden till nocken delat med två, och med två gavlar blir det bredden gånger höjden. Har du fyllt i vinkeln räknar jag först fram höjden ur den.',
      kallor: [],
    },
    'gavel-pulpet': {
      text: 'På ett pulpettak lutar taket över gaveln. Varje gavel får en triangel, bredden gånger höjden delat med två, och den höga långsidan blir lika mycket högre som taket stiger. Därför blir ytan en annan om du byter plats på längden och bredden.',
      kallor: [],
    },
    'gavel-valmat': {
      text: 'Ett valmat tak lutar åt alla fyra håll, och alla väggar slutar vid takfoten. Det finns ingen gavelspets att måla.',
      kallor: [],
    },
    'gavel-mansard': {
      text: 'Mansardgaveln delar jag i två delar. Nedanför brytpunkten är den ett fält som smalnar av uppåt, med gavelns bredd nertill och bredden vid brytpunkten upptill. Ovanför brytpunkten är den en triangel upp till nocken.',
      kallor: [],
    },
    avdrag: {
      text: 'Fönster och dörrar dras av med sina egna mått, bredden gånger höjden, så som Nordsjö, Lovely Home och Proffsmagasinet alla säger åt dig att göra.',
      kallor: [NORDSJO_BERAKNA, LOVELY_ATGANG, PROFFSMAGASINET],
    },
    'profil-lock': {
      text: `Lockbrädorna står ut ur väggen, och deras två kanter ska ha färg de också. Svenskt Trä anger ${LOCK_TJOCKLEK_MM} millimeter tjocka lockbrädor och 4,44 meter lockbräda per kvadratmeter vägg. Det ger ${LOCK_CC_MM} millimeter, räknat från mitten av en lockbräda till mitten av nästa. Två kanter på ${LOCK_TJOCKLEK_MM} millimeter för varje ${LOCK_CC_MM} millimeter vägg är knappt en femtedel till, och därför räknar jag med ${LOCK_FAKTOR_TEXT} gånger fasadytan. Färgtillverkarna räknar på en plan vägg, så tillägget är min egen räkning ur Svenskt Träs mått. Lockläktpanel hamnar nära, mellan 1,16 och 1,22 beroende på hur breda brädorna är, så den räknar jag likadant.`,
      kallor: [SVENSKT_TRA, SKI_0142],
    },
    'profil-slat': {
      text: 'Spontad panel och fasspont räknar jag som en slät vägg. Faserna och spåren ger lite mer yta, men Svenskt Trä anger inga mått för dem, så jag har inget att räkna på.',
      kallor: [SVENSKT_TRA],
    },
    atgang: {
      text: `Hur långt en liter räcker tar jag ur tillverkarnas datablad. Akrylatfärg och alkydoljefärg räcker till ${ATGANG.akrylat.malat} m² per liter och strykning på trä som målats förut och till ${ATGANG.akrylat.sagat} på nytt sågat trä, enligt Alcro Bestå och Beckers Perfekt Oljefärg. Beckers Perfekt Fasad anger 6 till 8 utan att skilja på underlaget. Slamfärg räcker till ${ATGANG.slamfarg} m² per liter enligt Falu Rödfärg.`,
      kallor: [BECKERS_FASAD, BECKERS_OLJA, ALCRO_BESTA, NORDSJO_TINOVA, FALU_FOLDER, FALU_FAQ],
    },
    kanten: {
      text: `När en tillverkare delar upp åtgången efter underlaget tar jag det lägsta talet för ditt underlag: ${ATGANG.akrylat.malat} m² per liter på trä som målats förut och ${ATGANG.akrylat.sagat} på sågat. Nordsjö anger 6 till 8 när Tinova målas om, och båda talen ligger också inom Beckers Perfekt Fasads spann. Skrapat trä grundas först. Det bara träet suger mer, men det är grundfärgen som sugs in, så täckfärgen räknar jag som på målat trä. Nytt trä grundas också, men där räknar jag försiktigt med ${ATGANG.akrylat.sagat} på täckfärgen, eftersom Nordsjö anger 4 till 6 när Tinova målas på nytt trä.`,
      kallor: [BECKERS_OLJA, NORDSJO_TINOVA],
    },
    strykningar: {
      text: 'Täckfärg stryks två gånger enligt Beckers datablad och Nordsjö. Slamfärg räcker med en tunn strykning när du målar om och två på nytt virke, enligt Falu Rödfärg. Har du valt antalet själv räknar jag med ditt.',
      kallor: [BECKERS_FASAD, BECKERS_FORUM_FASAD, NORDSJO_BERAKNA, FALU_FOLDER],
    },
    grundfarg: {
      text: `Har du nytt trä eller byter du kulör får hela fasaden en strykning grundfärg, som Beckers och Alcro skriver. Har du skrapat grundar du bara de partier där träet är bart, och eftersom jag inte vet hur stora de blir räknar jag per 10 m²: ${literGarAtText(10 / GRUND_ATGANG.sagat)} liter. Bart och nytt trä räknar jag som sågat, ${GRUND_ATGANG.sagat} m² per liter enligt Beckers Primex Trägrund, och ett kulörbyte som målat trä, ${GRUND_ATGANG.malat}.`,
      kallor: [BECKERS_TRAGRUND, BECKERS_FORUM_KULOR, ALCRO_FORUM_KULOR],
    },
    grundolja: {
      text: 'Grundolja går bara på bart trä: ändträ, skarvar och spikhål, där vattnet sugs in. Den kan inte läggas på hel färg. Beckers och Alcro skriver båda var den ska strykas, men ingen av dem anger hur stor del av fasaden det blir, så den ingår inte i literna.',
      kallor: [BECKERS_GRUNDOLJA, ALCRO_BESTA],
    },
    'slam-underlag': {
      text: 'Falu Rödfärg Original går bara på sågat trä som är omålat eller redan har slamfärg, skriver tillverkaren i sin folder.',
      kallor: [FALU_FOLDER],
    },
    burkar: {
      text: `Burkarna räknar jag i ${literLista(BURKAR_FARG.akrylat)}, de storlekar som Alcro blandar sina kulörer i. Köper du färdigblandad färg eller färdigtonad vit i 1, 3 eller 10 liter får du lite mer än jag räknar med. Slamfärg räknar jag i ${literLista(BURKAR_FARG.slamfarg)}. Jag väljer så få burkar som möjligt, så länge det blir högst ${Math.round(OVERSKOTT_GRANS * 100)} procent över.`,
      kallor: [ALCRO_BESTA_SIDA, PROFFS_PERFEKT_FASAD, HAPPY_FALU_5, KBYGG_FALU_10],
    },
    spill: {
      text: 'Spill lägger jag inte på. Målerifirman Fasadum råder dig att köpa 10 till 15 procent extra för bättringar, men färgtillverkarna lägger inget påslag i sina tal, och burkarna ger oftast lite över ändå.',
      kallor: [FASADUM],
    },
    tegel: {
      text: 'Omålat tegel ska inte målas. Alcro skriver i sitt kundforum att tegel mår bäst utan färg, och att färg direkt på teglet ökar risken för frostsprängning när fukt som samlats i fogarna fryser. Tegeltillverkaren Wienerberger skriver att rått tegel inte kräver något underhåll och håller i mer än hundra år. Är huset redan målat eller teglet sönderfruset är vägen en slamning först och sedan silikatfärg, som Alcro och Caparol beskriver det. Hur mycket slamning det går åt har jag inget tal för.',
      kallor: [ALCRO_FORUM_TEGEL, WIENERBERGER, CAPAROL_TEGEL],
    },
    byte: {
      text: 'Byter du färgtyp räknar jag inga liter. Beckers skriver att du ska fortsätta med samma typ och kallar ett byte krångligt och onödigt. Slamfärg fäster bara på omålat eller slamfärgat trä enligt Falu Rödfärg, och Alcro vill att gammal olje- och alkydfärg grundmålas innan Bestå kommer på. Beckers skriver att plast- och akrylatfärg ska tas bort helt från putsen innan silikatfärgen kommer på.',
      kallor: [BECKERS_VALJ, FALU_FOLDER, ALCRO_BESTA, BECKERS_SILIKAT],
    },
    silikat: {
      text: `Silikatfärg på puts räknar jag med ${ATGANG.silikat} m² per liter, den nedre kanten av Beckers 3 till 5. Porös puts grundas enligt databladet med silikatbinder och vatten och får sedan två strykningar färg. Tät puts grundas med silikatbinder och färg och får sedan en strykning. Jag räknar ${strykOrd(STRYK_AUTO.silikat)} i båda fallen, och bindern köper du för sig.`,
      kallor: [BECKERS_SILIKAT],
    },
  } satisfies Record<RegelNyckel, RegelText>,

  /* Kolumnen "Vad" i antagandetabellen, en per rad i ANTAGANDEN. */
  antagande: {
    gavelformel: 'Formlerna för gavelspetsarna per takform',
    vinkelgranser: 'Takvinklar som räknaren tar, sadeltak och pulpettak',
    halvvalm: 'Halvvalmat tak räknas som sadeltak',
    'mansard-matt': 'Mansardtaket räknas med höjder, inte vinklar',
    'fonster-matt': 'Fönstrets mått när du inte har mätt',
    'dorr-matt': 'Ytterdörrens mått när du inte har mätt',
    'avdrag-verklig': 'Fönster och dörrar dras av med sina egna mått',
    'profil-lock': 'Tillägg för lockbrädornas kanter',
    'profil-slat': 'Tillägg för slät panel',
    'atgang-akrylat-malat': 'Akrylatfärg på trä som målats förut, per strykning',
    'atgang-akrylat-sagat': 'Akrylatfärg på nytt sågat trä, per strykning',
    'atgang-oljealkyd-malat': 'Alkydoljefärg på trä som målats förut, per strykning',
    'atgang-oljealkyd-sagat': 'Alkydoljefärg på nytt sågat trä, per strykning',
    'atgang-slamfarg': 'Slamfärg, per strykning',
    'atgang-silikat': 'Silikatfärg på puts, per strykning',
    'grund-sagat': 'Grundfärg på sågat eller skrapat trä',
    'grund-malat': 'Grundfärg vid byte av kulör',
    kanten: 'Vilket tal i tillverkarens spann jag tar',
    'strykningar-tackfarg': 'Strykningar täckfärg',
    'strykningar-slam': 'Strykningar slamfärg',
    'slam-skick': 'Slamfärg på skrapat trä och vid ny kulör',
    /* Två strykningar är exakt för porös puts och lite för mycket för tät (specen 13.3). */
    'puts-strykningar': 'Strykningar silikatfärg, exakt för porös puts och lite för många för tät',
    /* Grunden med Primex Silikatbinder köps för sig; databladet anger ingen åtgång (specen 13.1 rad 16). Visas vid puts. */
    silikatbinder: 'Silikatbindern till grunden köps för sig, och Beckers anger ingen åtgång',
    /* Visas bara vid skick rent. Nordsjö-meningen flyttad hit från regel.kanten (specen 14.3 B1). */
    'nytt-sagat': 'Nytt trä räknas som sågat. Med Nordsjö Tinova, som anger 4 till 6 m² per liter på nytt trä, går det åt mer.',
    'kulor-grans': 'När en ny kulör räknas som ett kulörbyte',
    /* Undantaget ska stå: Nordsjö Tinovas mellanburk är 2,5 liter, 0,2 liter mindre än 2,7 (specen 13.2). */
    'burkar-storlekar':
      'Burkstorlekar för täckfärg och grundfärg, och för slamfärg. Nordsjö Tinovas mellanstora burk är 2,5 liter, lite mindre än 2,7.',
    'burkar-overskott': 'Mest överskott jag tillåter när jag väljer burkar',
    'puts-burkar': 'Burkar för silikatfärg räknas inte',
    'inget-spill': 'Påslag för spill, där Fasadum råder till 10 till 15 procent',
    tegel: 'Omålat tegel ska inte målas',
    byte: 'Byte av färgtyp räknas inte i liter',
    granser: 'Längd och höjd som räknaren tar',
  } as Record<string, string>,

  /*
   * Kolumnen "Värde" för de rader i antagandetabellen som inte har ett tal att
   * bygga av konstanterna. Tillagd av utvecklaren.
   */
  antagandeVarde: {
    halvvalm: 'Sadeltak upp till nocken',
    'mansard-matt': 'Höjd till brytpunkt och nock, indrag',
    'avdrag-verklig': 'Bredd gånger höjd',
    kanten: 'Det lägsta för ditt underlag',
    'strykningar-slam': `${STRYK_AUTO.slam.ommalning} vid ommålning, ${STRYK_AUTO.slam.rent} på nytt virke`,
    'slam-skick': `Skrapat ${STRYK_AUTO.slam.skrapat}, ny kulör ${STRYK_AUTO.slam.kulor}`,
    'kulor-grans': 'Du avgör själv',
    'puts-burkar': 'Ingen burk',
    tegel: 'Ingen färg',
    byte: 'Samma färgtyp',
  },

  /*
   * "Så räknar jag", en punkt per steg i specen 2.6 steg 1 till 9, med tal
   * byggda av konstanterna.
   */
  steg: [
    'Omkretsen vid sockeln gånger höjden till takfoten ger väggarna.',
    'På sadeltak och pulpettak räknar jag fram höjden till nocken ur takvinkeln, eller vinkeln ur höjden, beroende på vilket du har fyllt i.',
    'Gavelspetsarna läggs till efter takformen. På sadeltak är de bredden gånger höjden till nocken, på pulpettak höjden gånger summan av bredden och längden, och på valmat tak finns inga. En mansardgavel räknas som ett fält som smalnar av uppåt, med en triangel överst.',
    'Fönster och dörrar dras av var för sig, antalet gånger bredden gånger höjden. Det som blir kvar är fasadytan.',
    'Är fasaden av tegel, eller byter du färgtyp, stannar jag där, och du får ytan men inga liter. Puts räknas med silikatfärg och trä med den färg du har valt.',
    `Fasadytan gånger panelens tillägg blir ytan du målar. För lockpanel är tillägget ${LOCK_FAKTOR_TEXT}, och slät panel och puts får inget.`,
    `Sedan väljer jag hur långt en liter räcker och hur många strykningar det blir: ${ATGANG.akrylat.malat} m² per liter på trä som målats förut, ${ATGANG.akrylat.sagat} på nytt och sågat trä och ${ATGANG.slamfarg} för slamfärg och silikatfärg. Täckfärg får två strykningar, och grundfärg en där den behövs. På skrapat trä räknar jag grundfärgen per 10 m² bart trä.`,
    'Ytan jag målar gånger antalet strykningar, delat med hur långt en liter räcker, blir antalet liter. Jag räknar med två decimaler och visar en i svaret.',
    `Literna delar jag upp i så få burkar som möjligt, så länge det blir högst ${Math.round(OVERSKOTT_GRANS * 100)} procent över. Går inte det väljer jag de burkar som ger minst över.`,
  ] as string[],
};

/* ------------------------------------------------------------------ *
 * Antagandetabellen
 * ------------------------------------------------------------------ */

export interface AntagandeRad {
  nyckel: string;
  varde: string;
  typ: 'Källa' | 'Antagande';
  /** Tom för ett antagande utan källa. */
  kallor: KallaRef[];
}

const M2L = 'm²/l';
const matt = (b: number, h: number): string => `${b.toFixed(1).replace('.', ',')} × ${h.toFixed(1).replace('.', ',')} m`;
const storlekar = (s: readonly number[]): string => `${s.map(komma).join(', ')} l`;

export const ANTAGANDEN: AntagandeRad[] = [
  {
    nyckel: 'gavelformel',
    varde: 'B · t; t · (B + L); 0; 2 · ((B + b) / 2 · t1 + b · t2 / 2)',
    typ: 'Antagande',
    kallor: [],
  },
  {
    nyckel: 'vinkelgranser',
    varde: `${VINKELGRANSER.sadel[0]} till ${VINKELGRANSER.sadel[1]}°; ${VINKELGRANSER.pulpet[0]} till ${VINKELGRANSER.pulpet[1]}°`,
    typ: 'Antagande',
    kallor: [],
  },
  { nyckel: 'halvvalm', varde: TEXT.antagandeVarde.halvvalm, typ: 'Antagande', kallor: [] },
  { nyckel: 'mansard-matt', varde: TEXT.antagandeVarde['mansard-matt'], typ: 'Antagande', kallor: [] },
  { nyckel: 'fonster-matt', varde: matt(FONSTER_BREDD_M, FONSTER_HOJD_M), typ: 'Antagande', kallor: [] },
  { nyckel: 'dorr-matt', varde: matt(DORR_BREDD_M, DORR_HOJD_M), typ: 'Antagande', kallor: [] },
  {
    nyckel: 'avdrag-verklig',
    varde: TEXT.antagandeVarde['avdrag-verklig'],
    typ: 'Källa',
    kallor: [NORDSJO_BERAKNA, LOVELY_ATGANG, PROFFSMAGASINET],
  },
  {
    nyckel: 'profil-lock',
    varde: `1 + 2 · ${LOCK_TJOCKLEK_MM} / ${LOCK_CC_MM} = ${PROFILFAKTOR.lock.toFixed(2).replace('.', ',')}`,
    typ: 'Antagande',
    kallor: [SVENSKT_TRA, SKI_0142],
  },
  { nyckel: 'profil-slat', varde: PROFILFAKTOR.slat.toFixed(2).replace('.', ','), typ: 'Antagande', kallor: [] },
  {
    nyckel: 'atgang-akrylat-malat',
    varde: `${ATGANG.akrylat.malat} ${M2L}`,
    typ: 'Källa',
    kallor: [ALCRO_BESTA, BECKERS_FASAD, NORDSJO_TINOVA],
  },
  {
    nyckel: 'atgang-akrylat-sagat',
    varde: `${ATGANG.akrylat.sagat} ${M2L}`,
    typ: 'Källa',
    kallor: [ALCRO_BESTA, BECKERS_FASAD, NORDSJO_TINOVA],
  },
  { nyckel: 'atgang-oljealkyd-malat', varde: `${ATGANG.oljealkyd.malat} ${M2L}`, typ: 'Källa', kallor: [BECKERS_OLJA] },
  { nyckel: 'atgang-oljealkyd-sagat', varde: `${ATGANG.oljealkyd.sagat} ${M2L}`, typ: 'Källa', kallor: [BECKERS_OLJA] },
  {
    nyckel: 'atgang-slamfarg',
    varde: `${ATGANG.slamfarg} ${M2L}`,
    typ: 'Källa',
    kallor: [FALU_FOLDER, FALU_FAQ, FALU_ORIGINAL],
  },
  { nyckel: 'atgang-silikat', varde: `${ATGANG.silikat} ${M2L}`, typ: 'Källa', kallor: [BECKERS_SILIKAT] },
  { nyckel: 'grund-sagat', varde: `${GRUND_ATGANG.sagat} ${M2L}`, typ: 'Källa', kallor: [BECKERS_TRAGRUND] },
  { nyckel: 'grund-malat', varde: `${GRUND_ATGANG.malat} ${M2L}`, typ: 'Källa', kallor: [BECKERS_TRAGRUND] },
  { nyckel: 'kanten', varde: TEXT.antagandeVarde.kanten, typ: 'Antagande', kallor: [] },
  {
    nyckel: 'strykningar-tackfarg',
    varde: String(STRYK_AUTO.tackfarg),
    typ: 'Källa',
    kallor: [BECKERS_FASAD, BECKERS_FORUM_FASAD, NORDSJO_BERAKNA, SVENSKT_TRA],
  },
  {
    nyckel: 'strykningar-slam',
    varde: TEXT.antagandeVarde['strykningar-slam'],
    typ: 'Källa',
    kallor: [FALU_FOLDER],
  },
  { nyckel: 'slam-skick', varde: TEXT.antagandeVarde['slam-skick'], typ: 'Antagande', kallor: [] },
  { nyckel: 'puts-strykningar', varde: String(STRYK_AUTO.silikat), typ: 'Källa', kallor: [BECKERS_SILIKAT] },
  { nyckel: 'silikatbinder', varde: '0 l', typ: 'Antagande', kallor: [BECKERS_SILIKAT] },
  { nyckel: 'nytt-sagat', varde: `${ATGANG.akrylat.sagat} ${M2L}`, typ: 'Antagande', kallor: [] },
  { nyckel: 'kulor-grans', varde: TEXT.antagandeVarde['kulor-grans'], typ: 'Antagande', kallor: [] },
  {
    nyckel: 'burkar-storlekar',
    varde: `${storlekar(BURKAR_FARG.akrylat)}; ${storlekar(BURKAR_FARG.slamfarg)}`,
    typ: 'Antagande',
    kallor: [ALCRO_BESTA_SIDA, PROFFS_PERFEKT_FASAD, HAPPY_FALU_5, KBYGG_FALU_10],
  },
  { nyckel: 'burkar-overskott', varde: `${Math.round(OVERSKOTT_GRANS * 100)} %`, typ: 'Antagande', kallor: [] },
  { nyckel: 'puts-burkar', varde: TEXT.antagandeVarde['puts-burkar'], typ: 'Antagande', kallor: [] },
  { nyckel: 'inget-spill', varde: '0 %', typ: 'Antagande', kallor: [FASADUM] },
  { nyckel: 'tegel', varde: TEXT.antagandeVarde.tegel, typ: 'Källa', kallor: [ALCRO_FORUM_TEGEL, WIENERBERGER] },
  { nyckel: 'byte', varde: TEXT.antagandeVarde.byte, typ: 'Källa', kallor: [BECKERS_VALJ] },
  {
    nyckel: 'granser',
    varde: `${GRANSER.langdM[0]} till ${GRANSER.langdM[1]} m; ${komma(GRANSER.hojdM[0])} till ${GRANSER.hojdM[1]} m`,
    typ: 'Antagande',
    kallor: [],
  },
];

/** Raderna ur ANTAGANDEN som svaret vilar på, i tabellens ordning (specen 4.5). */
export function antagandenFor(r: FasadytaOk, i: FasadytaIndata): AntagandeRad[] {
  const galler = new Set<string>(['gavelformel', 'granser']);
  if (i.takform === 'sadel' || i.takform === 'pulpet') galler.add('vinkelgranser');
  if (i.takform === 'sadel') galler.add('halvvalm');
  if (i.takform === 'mansard') galler.add('mansard-matt');
  if (i.fonster > 0 && i.fonsterBreddM === FONSTER_BREDD_M && i.fonsterHojdM === FONSTER_HOJD_M) {
    galler.add('fonster-matt');
  }
  if (i.dorrar > 0 && i.dorrBreddM === DORR_BREDD_M && i.dorrHojdM === DORR_HOJD_M) galler.add('dorr-matt');
  if (i.fonster > 0 || i.dorrar > 0) galler.add('avdrag-verklig');

  if (r.utfall === 'farg') {
    if (i.fasad === 'lock') galler.add('profil-lock');
    if (i.fasad === 'slat') galler.add('profil-slat');
    galler.add('kanten');
    galler.add('burkar-storlekar');
    galler.add('burkar-overskott');
    if (i.farg === 'slamfarg') {
      galler.add('atgang-slamfarg');
      if (i.stryk === 'auto') galler.add('strykningar-slam');
      if (i.skick === 'skrapat' || i.skick === 'rent' || i.skick === 'kulor') galler.add('slam-skick');
    } else {
      galler.add(`atgang-${i.farg}-${i.skick === 'rent' ? 'sagat' : 'malat'}`);
      if (i.stryk === 'auto') galler.add('strykningar-tackfarg');
    }
    if (r.grundfarg) galler.add(r.grundfarg.m2PerLiter === GRUND_ATGANG.sagat ? 'grund-sagat' : 'grund-malat');
    if (r.grundPer10M2 !== null) galler.add('grund-sagat');
    /* Nytt trä är sågat: bara där åtgången hänger på det, alltså inte slamfärg (specen 13.1 rad 4). */
    if (i.skick === 'rent' && i.farg !== 'slamfarg') galler.add('nytt-sagat');
    /* Kulörbytet ändrar bara talen på trä (specen 13.1 rad 5). */
    if (i.skick === 'kulor') galler.add('kulor-grans');
  }
  if (r.utfall === 'puts') {
    galler.add('atgang-silikat');
    if (i.stryk === 'auto') galler.add('puts-strykningar');
    galler.add('silikatbinder');
    galler.add('puts-burkar');
  }
  if (r.utfall === 'farg' || r.utfall === 'puts') galler.add('inget-spill');
  if (r.utfall === 'tegel') galler.add('tegel');
  if (r.utfall === 'byte') galler.add('byte');

  return ANTAGANDEN.filter((a) => galler.has(a.nyckel));
}

/* ------------------------------------------------------------------ *
 * Adressen
 * ------------------------------------------------------------------ */

const TAL_NYCKLAR = [
  'langd',
  'bredd',
  'hojd',
  'takform',
  'matt',
  'nock',
  'vinkel',
  'bryt',
  'indrag',
  'fonster',
  'fonsterbredd',
  'fonsterhojd',
  'dorrar',
  'dorrbredd',
  'dorrhojd',
  'fasad',
  'farg',
  'skick',
  'stryk',
] as const;

/**
 * Decimalkomma som tillTal i kvadratmeter.ts, utökat så att mellanslag och ett
 * efterhängande "m" tolkas: "2,8 m" blir 2.8. Tomt eller skräp ger NaN.
 */
function tillTal(v: string | null): number {
  if (v === null) return NaN;
  const rensad = v
    .replace(/[\s ]/g, '')
    .replace(/m$/i, '')
    .replace(',', '.');
  if (rensad === '') return NaN;
  return Number(rensad);
}

const arTakform = (v: string | null): v is Takform =>
  v === 'sadel' || v === 'pulpet' || v === 'valmat' || v === 'mansard';
const arMatt = (v: string | null): v is Matt => v === 'nock' || v === 'vinkel';
const arFasad = (v: string | null): v is Fasad => v === 'lock' || v === 'slat' || v === 'puts' || v === 'tegel';
const arFarg = (v: string | null): v is Farg => v === 'akrylat' || v === 'oljealkyd' || v === 'slamfarg';
const arSkick = (v: string | null): v is Skick =>
  v === 'ommalning' || v === 'skrapat' || v === 'rent' || v === 'kulor' || v === 'byte';

function tolkaStryk(v: string | null): Stryk {
  if (v === '1') return 1;
  if (v === '2') return 2;
  if (v === '3') return 3;
  return 'auto';
}

/** Läser adressen. Okända val faller tillbaka på standardvärdet, felskrivna tal blir NaN. */
export function tolkaQuery(q: URLSearchParams): { indata: FasadytaIndata; harIndata: boolean } {
  const harIndata = TAL_NYCKLAR.some((n) => q.has(n));
  const las = (nyckel: string, standardVarde: number): number =>
    q.has(nyckel) ? tillTal(q.get(nyckel)) : standardVarde;
  const takform = q.get('takform');
  const mattet = q.get('matt');
  const fasad = q.get('fasad');
  const farg = q.get('farg');
  const skick = q.get('skick');

  return {
    harIndata,
    indata: {
      langdM: las('langd', STANDARD.langdM),
      breddM: las('bredd', STANDARD.breddM),
      hojdM: las('hojd', STANDARD.hojdM),
      takform: arTakform(takform) ? takform : STANDARD.takform,
      matt: arMatt(mattet) ? mattet : STANDARD.matt,
      nockM: las('nock', STANDARD.nockM),
      vinkelGrader: las('vinkel', STANDARD.vinkelGrader),
      brytM: las('bryt', NaN),
      indragM: las('indrag', NaN),
      fonster: las('fonster', STANDARD.fonster),
      fonsterBreddM: las('fonsterbredd', STANDARD.fonsterBreddM),
      fonsterHojdM: las('fonsterhojd', STANDARD.fonsterHojdM),
      dorrar: las('dorrar', STANDARD.dorrar),
      dorrBreddM: las('dorrbredd', STANDARD.dorrBreddM),
      dorrHojdM: las('dorrhojd', STANDARD.dorrHojdM),
      fasad: arFasad(fasad) ? fasad : STANDARD.fasad,
      farg: arFarg(farg) ? farg : STANDARD.farg,
      skick: arSkick(skick) ? skick : STANDARD.skick,
      stryk: tolkaStryk(q.get('stryk')),
    },
  };
}

/**
 * Den delbara adressen: alla nycklar i tabellens ordning, tal med komma. bryt
 * och indrag bara vid mansard; nock och vinkel båda, så att bytet av mått i
 * formuläret behåller läsarens andra tal; stryk alltid, även auto.
 */
export function delbarQuery(i: FasadytaIndata): URLSearchParams {
  const q = new URLSearchParams();
  q.set('langd', komma(i.langdM));
  q.set('bredd', komma(i.breddM));
  q.set('hojd', komma(i.hojdM));
  q.set('takform', i.takform);
  q.set('matt', i.matt);
  q.set('nock', komma(i.nockM));
  q.set('vinkel', komma(i.vinkelGrader));
  if (i.takform === 'mansard') {
    q.set('bryt', komma(i.brytM));
    q.set('indrag', komma(i.indragM));
  }
  q.set('fonster', komma(i.fonster));
  q.set('fonsterbredd', komma(i.fonsterBreddM));
  q.set('fonsterhojd', komma(i.fonsterHojdM));
  q.set('dorrar', komma(i.dorrar));
  q.set('dorrbredd', komma(i.dorrBreddM));
  q.set('dorrhojd', komma(i.dorrHojdM));
  q.set('fasad', i.fasad);
  q.set('farg', i.farg);
  q.set('skick', i.skick);
  q.set('stryk', String(i.stryk));
  return q;
}

/* ------------------------------------------------------------------ *
 * Räkningen
 * ------------------------------------------------------------------ */

/** Avrundning till två decimaler, samma som tvaDecimaler i kvadratmeter.ts. */
function tvaDecimaler(n: number): number {
  return Math.round(n * 100) / 100;
}

/**
 * Gavelspetsarnas yta utöver väggarna, båda gavlarna. Egen räkning, plan
 * geometri (underlaget avsnitt 1).
 * sadel: två trianglar à B · t / 2.
 * pulpet: två trianglar à B · t / 2 och den höga långsidan L · t. Taket lutar
 *   över B, så att byta L och B ändrar svaret.
 * valmat: alla fyra sidor slutar vid takfoten.
 * mansard: t1 = brytpunkten, t2 = nocken minus brytpunkten, övre bredden
 *   B − 2 · indraget; per gavel en parallelltrapets och en triangel.
 */
export function gavelyta(
  takform: Takform,
  L: number,
  B: number,
  t: number,
  mansard: { brytM: number; indragM: number; nockM: number } | null = null,
): number {
  if (takform === 'sadel') return B * t;
  if (takform === 'pulpet') return t * (B + L);
  if (takform === 'valmat') return 0;
  if (mansard === null) return NaN;
  const t1 = mansard.brytM;
  const t2 = mansard.nockM - mansard.brytM;
  const ovre = B - 2 * mansard.indragM;
  return 2 * (((B + ovre) / 2) * t1 + (ovre * t2) / 2);
}

function farglager(
  malbarYta: number,
  m2PerLiter: number,
  strykningar: number,
  strykningarValda: boolean,
  storlekar: readonly number[] | null,
): Farglager {
  const literRaknat = tvaDecimaler((malbarYta * strykningar) / m2PerLiter);
  if (storlekar === null) {
    return { m2PerLiter, strykningar, strykningarValda, literRaknat, burkar: null, literAttKopa: null };
  }
  const kopa = bastaBurkar(literRaknat, storlekar);
  return { m2PerLiter, strykningar, strykningarValda, literRaknat, burkar: kopa.burkar, literAttKopa: kopa.totalt };
}

export function raknaFasadyta(i: FasadytaIndata): FasadytaResultat {
  const fel: Partial<Record<FelNyckel, string>> = {};
  const inom = (varde: number, g: readonly [number, number]): boolean =>
    Number.isFinite(varde) && varde >= g[0] && varde <= g[1];

  if (!inom(i.langdM, GRANSER.langdM)) fel.langd = TEXT.fel.langd(GRANSER.langdM[0], GRANSER.langdM[1]);
  if (!inom(i.breddM, GRANSER.breddM)) fel.bredd = TEXT.fel.bredd(GRANSER.breddM[0], GRANSER.breddM[1]);
  if (!inom(i.hojdM, GRANSER.hojdM)) fel.hojd = TEXT.fel.hojd(GRANSER.hojdM[0], GRANSER.hojdM[1]);

  const antalFel = (v: number, g: readonly [number, number]): string | undefined => {
    if (!inom(v, g)) return TEXT.fel.antal(g[0], g[1]);
    if (!Number.isInteger(v)) return TEXT.fel.heltal;
    return undefined;
  };
  const fonsterFel = antalFel(i.fonster, GRANSER.fonster);
  if (fonsterFel) fel.fonster = fonsterFel;
  const dorrFel = antalFel(i.dorrar, GRANSER.dorrar);
  if (dorrFel) fel.dorrar = dorrFel;

  const oppning = (v: number, g: readonly [number, number]): string | undefined =>
    inom(v, g) ? undefined : TEXT.fel['matt-oppning'](g[0], g[1]);
  const fb = oppning(i.fonsterBreddM, GRANSER.fonsterBreddM);
  if (fb) fel.fonsterbredd = fb;
  const fh = oppning(i.fonsterHojdM, GRANSER.fonsterHojdM);
  if (fh) fel.fonsterhojd = fh;
  const db = oppning(i.dorrBreddM, GRANSER.dorrBreddM);
  if (db) fel.dorrbredd = db;
  const dh = oppning(i.dorrHojdM, GRANSER.dorrHojdM);
  if (dh) fel.dorrhojd = dh;

  /* Taket: bara det som räknas valideras. */
  const breddGiltig = fel.bredd === undefined;
  const B = i.breddM;
  if (i.takform === 'sadel' || i.takform === 'pulpet') {
    const [vMin, vMax] = VINKELGRANSER[i.takform];
    if (i.matt === 'vinkel') {
      if (!(Number.isFinite(i.vinkelGrader) && i.vinkelGrader >= vMin && i.vinkelGrader <= vMax)) {
        fel.vinkel = TEXT.fel.vinkel(vMin, vMax);
      }
    } else {
      /*
       * Gränserna i texten med en decimal, avrundade inåt: nedre uppåt, övre
       * nedåt (specen 14.3 B3). Valideringen står kvar på de exakta gränserna.
       */
      const takform = i.takform;
      const nockFel = (): string =>
        TEXT.fel.nock(
          Math.ceil(nockUrVinkel(takform, vMin, B) * 10 - 1e-9) / 10,
          Math.floor(nockUrVinkel(takform, vMax, B) * 10 + 1e-9) / 10,
        );
      if (!Number.isFinite(i.nockM) || !breddGiltig) {
        /* Bokstäver i fältet, eller en bredd som inte går att räkna gränser ur. */
        if (!(Number.isFinite(i.nockM) && i.nockM > 0)) fel.nock = TEXT.fel['nock-tal'];
      } else if (i.nockM <= 0) {
        fel.nock = nockFel();
      } else {
        const v = vinkelUrNock(takform, i.nockM, B);
        if (v < vMin - 1e-9 || v > vMax + 1e-9) fel.nock = nockFel();
      }
    }
  } else if (i.takform === 'mansard') {
    if (i.matt === 'vinkel') {
      fel.matt = TEXT.fel['matt-mansard'];
    } else {
      const nockGiltig = Number.isFinite(i.nockM) && i.nockM > 0;
      if (!nockGiltig) fel.nock = TEXT.fel['nock-tal'];
      if (!(Number.isFinite(i.brytM) && i.brytM > 0) || (nockGiltig && i.brytM >= i.nockM)) {
        fel.bryt = TEXT.fel.bryt;
      }
      const maxIndrag = breddGiltig ? B / 2 : GRANSER.breddM[1] / 2;
      if (!(Number.isFinite(i.indragM) && i.indragM > 0) || (breddGiltig && i.indragM >= B / 2)) {
        fel.indrag = TEXT.fel.indrag(maxIndrag);
      }
    }
  }

  if (Object.keys(fel).length > 0) return { status: 'ogiltig', fel };

  // Steg 1. Väggarna före avdrag.
  const L = i.langdM;
  const omkretsM = 2 * (L + B);
  const vaggarBruttoM2 = omkretsM * i.hojdM;

  // Steg 2. Höjden till nocken och vinkeln, bara sadel och pulpet.
  let tM: number | null = null;
  let vinkelGrader: number | null = null;
  if (i.takform === 'sadel' || i.takform === 'pulpet') {
    if (i.matt === 'vinkel') {
      tM = nockUrVinkel(i.takform, i.vinkelGrader, B);
      vinkelGrader = i.vinkelGrader;
    } else {
      tM = i.nockM;
      vinkelGrader = vinkelUrNock(i.takform, i.nockM, B);
    }
  }

  // Steg 3. Gavelspetsarna.
  const mansardMatt =
    i.takform === 'mansard' ? { brytM: i.brytM, indragM: i.indragM, nockM: i.nockM } : null;
  const gavelM2 = gavelyta(i.takform, L, B, tM ?? 0, mansardMatt);
  const mansard =
    mansardMatt === null
      ? null
      : { t1M: mansardMatt.brytM, t2M: mansardMatt.nockM - mansardMatt.brytM, ovreBreddM: B - 2 * mansardMatt.indragM };

  // Steg 4. Avdragen, var för sig.
  const bruttoM2 = vaggarBruttoM2 + gavelM2;
  const avdragFonsterM2 = i.fonster * i.fonsterBreddM * i.fonsterHojdM;
  const avdragDorrM2 = i.dorrar * i.dorrBreddM * i.dorrHojdM;
  const avdragM2 = avdragFonsterM2 + avdragDorrM2;
  if (avdragM2 >= bruttoM2) {
    return { status: 'ogiltig', fel: { fonster: TEXT.fel.avdrag, dorrar: TEXT.fel.avdrag } };
  }
  const fasadytaM2 = bruttoM2 - avdragM2;

  // Steg 5. Utfallet.
  const utfall: Utfall =
    i.fasad === 'tegel' ? 'tegel' : i.skick === 'byte' ? 'byte' : i.fasad === 'puts' ? 'puts' : 'farg';

  // Steg 6. Profilen och den målade ytan.
  const profilfaktor = i.fasad === 'tegel' ? null : PROFILFAKTOR[i.fasad];
  const maladYtaM2 =
    (utfall === 'farg' || utfall === 'puts') && profilfaktor !== null ? fasadytaM2 * profilfaktor : null;

  // Steg 7 till 9. Åtgång, strykningar, liter och burkar.
  const valda = i.stryk !== 'auto';
  let tackfarg: Farglager | null = null;
  let grundfarg: Farglager | null = null;
  let grundPer10M2: number | null = null;
  if (utfall === 'puts' && maladYtaM2 !== null) {
    const stryk = i.stryk === 'auto' ? STRYK_AUTO.silikat : i.stryk;
    const lager = farglager(maladYtaM2, ATGANG.silikat, stryk, valda, null);
    /* Puts har inga burkar; litern att köpa är heltal uppåt (specen 14.3 B3). */
    tackfarg = { ...lager, literAttKopa: Math.ceil(lager.literRaknat - 1e-9) };
  }
  if (utfall === 'farg' && maladYtaM2 !== null && i.skick !== 'byte') {
    const skick = i.skick;
    if (i.farg === 'slamfarg') {
      const stryk = i.stryk === 'auto' ? STRYK_AUTO.slam[skick] : i.stryk;
      tackfarg = farglager(maladYtaM2, ATGANG.slamfarg, stryk, valda, BURKAR_FARG.slamfarg);
    } else {
      const atgang = skick === 'rent' ? ATGANG[i.farg].sagat : ATGANG[i.farg].malat;
      const stryk = i.stryk === 'auto' ? STRYK_AUTO.tackfarg : i.stryk;
      tackfarg = farglager(maladYtaM2, atgang, stryk, valda, BURKAR_FARG[i.farg]);
      if (skick === 'skrapat') {
        /*
         * Hur mycket bart trä skrapningen ger är okänt, så grundfärgen räknas
         * per 10 m² bart trä, inte på hela fasaden (specen 14.3 B2).
         */
        grundPer10M2 = tvaDecimaler(10 / GRUND_ATGANG.sagat);
      } else if (skick === 'rent' || skick === 'kulor') {
        const grund = skick === 'kulor' ? GRUND_ATGANG.malat : GRUND_ATGANG.sagat;
        grundfarg = farglager(maladYtaM2, grund, 1, false, BURKAR_FARG.grund);
      }
    }
  }

  // Steg 10. Gör inte det här.
  const gorInteDetHar: GorInte[] = [];
  if (i.fonster === 0 && i.dorrar === 0) gorInteDetHar.push('utan-avdrag');
  if (i.stryk === 1 && utfall === 'farg' && i.farg !== 'slamfarg') {
    gorInteDetHar.push('en-strykning');
  }
  const antalBurkar = tackfarg?.burkar?.reduce((s, b) => s + b.antal, 0) ?? 0;
  if (antalBurkar >= 2) gorInteDetHar.push('blanda-partier');
  if (i.fasad === 'puts' && i.skick === 'rent') gorInteDetHar.push('ny-puts');

  // Steg 11. Reglerna som gäller.
  const tra = i.fasad === 'lock' || i.fasad === 'slat';
  const tackfargTyp = i.farg === 'akrylat' || i.farg === 'oljealkyd';
  const regler: RegelNyckel[] = ['vaggar', `gavel-${i.takform}`];
  if (i.fonster > 0 || i.dorrar > 0) regler.push('avdrag');
  if (utfall === 'farg' && i.fasad === 'lock') regler.push('profil-lock');
  if (utfall === 'farg' && i.fasad === 'slat') regler.push('profil-slat');
  if (utfall === 'farg') regler.push('atgang', 'kanten');
  if (utfall === 'puts') regler.push('silikat');
  if (utfall === 'farg') regler.push('strykningar');
  if (grundfarg || grundPer10M2 !== null) regler.push('grundfarg');
  if (
    utfall === 'farg' &&
    tra &&
    tackfargTyp &&
    (i.skick === 'skrapat' || i.skick === 'rent' || i.skick === 'ommalning')
  ) {
    regler.push('grundolja');
  }
  if (utfall === 'farg' && i.farg === 'slamfarg') regler.push('slam-underlag');
  if (utfall === 'farg') regler.push('burkar');
  if (utfall === 'farg' || utfall === 'puts') regler.push('spill');
  if (utfall === 'tegel') regler.push('tegel');
  if (utfall === 'byte') regler.push('byte');

  return {
    status: 'ok',
    utfall,
    omkretsM,
    vaggarBruttoM2,
    gavelM2,
    bruttoM2,
    avdragFonsterM2,
    avdragDorrM2,
    avdragM2,
    fasadytaM2,
    tM,
    vinkelGrader,
    mansard,
    profilfaktor,
    maladYtaM2,
    tackfarg,
    grundfarg,
    grundPer10M2,
    gorInteDetHar,
    regler,
  };
}

/** Talen beskedets rubrik och rad får, som färdiga strängar. */
export function beskedVarden(r: FasadytaOk, i: FasadytaIndata): BeskedVarden {
  const t = r.tackfarg;
  const g = r.grundfarg;
  const harLiter = r.utfall === 'farg' || r.utfall === 'puts';
  return {
    utfall: r.utfall,
    fasad: i.fasad,
    farg: i.farg,
    skick: i.skick,
    takform: i.takform,
    yta: m2Text(r.fasadytaM2),
    maladYta:
      harLiter && r.maladYtaM2 !== null && r.profilfaktor !== null && r.profilfaktor !== 1
        ? m2Text(r.maladYtaM2)
        : null,
    liter: t ? literText(t.literRaknat) : null,
    literAttKopa: t && t.literAttKopa !== null ? literText(t.literAttKopa) : null,
    burkar: t && t.burkar ? burkText(t.burkar) : null,
    strykningar: t ? t.strykningar : null,
    grundLiter: g ? literText(g.literRaknat) : null,
    grundBurkar: g && g.burkar ? burkText(g.burkar) : null,
    grundPer10: r.grundPer10M2 !== null ? literGarAtText(r.grundPer10M2) : null,
    fargNamn:
      r.utfall === 'tegel'
        ? null
        : r.utfall === 'puts'
          ? TEXT.fargIMening.silikat
          : TEXT.fargIMening[i.farg],
  };
}

/* ------------------------------------------------------------------ *
 * Den fasta åtgångstabellen (specen 14.4)
 * ------------------------------------------------------------------ */

/** Huset tabellen räknar på: guidens hus med slät panel, strykningar efter fallet. */
export const ATGANG_YTA = { ...STANDARD, fasad: 'slat', stryk: 'auto' } as const satisfies FasadytaIndata;

/**
 * Åtgången per färg och underlag för guidens hus, byggd med raknaFasadyta så
 * att ingenting skrivs för hand. Oljefärg har ingen egen rad, eftersom
 * ATGANG.akrylat och ATGANG.oljealkyd är lika; testet låser det. Läser inga
 * indata, så tabellen är densamma på varje sida.
 */
export function atgangstabell(): AtgangsRad[] {
  const rakna = (andring: Partial<FasadytaIndata>): FasadytaOk => {
    const r = raknaFasadyta({ ...ATGANG_YTA, ...andring });
    if (r.status !== 'ok') throw new Error('[fasadyta] Åtgångstabellens hus ska alltid ge ett svar');
    return r;
  };
  const fran = (nyckel: AtgangsNyckel, lager: Farglager | null): AtgangsRad => ({
    nyckel,
    m2PerLiter: lager?.m2PerLiter ?? null,
    strykningar: lager?.strykningar ?? null,
    literGarAt: lager?.literRaknat ?? null,
    literAttKopa: lager?.literAttKopa ?? null,
    burkar: lager?.burkar ?? null,
  });

  const ommalning = rakna({ farg: 'akrylat', skick: 'ommalning' });
  const skrapat = rakna({ farg: 'akrylat', skick: 'skrapat' });
  const nytt = rakna({ farg: 'akrylat', skick: 'rent' });
  const kulor = rakna({ farg: 'akrylat', skick: 'kulor' });
  const slamOmmalning = rakna({ farg: 'slamfarg', skick: 'ommalning' });
  const slamNytt = rakna({ farg: 'slamfarg', skick: 'rent' });
  const puts = rakna({ fasad: 'puts', skick: 'ommalning' });

  return [
    fran('tack-ommalning', ommalning.tackfarg),
    fran('tack-skrapat', skrapat.tackfarg),
    {
      nyckel: 'grund-skrapat',
      m2PerLiter: GRUND_ATGANG.sagat,
      strykningar: 1,
      literGarAt: skrapat.grundPer10M2,
      literAttKopa: null,
      burkar: null,
    },
    fran('tack-nytt', nytt.tackfarg),
    fran('grund-nytt', nytt.grundfarg),
    fran('tack-kulor', kulor.tackfarg),
    fran('grund-kulor', kulor.grundfarg),
    fran('slam-ommalning', slamOmmalning.tackfarg),
    fran('slam-nytt', slamNytt.tackfarg),
    fran('silikat', puts.tackfarg),
    fran('tegel', null),
  ];
}
