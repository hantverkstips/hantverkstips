/**
 * Vilken gipsskruv? Ren modul utan importer från Astro, testbar utan bygge.
 * Sidan /rakna/gipsskruv/ skickar formuläret som GET och räknar på servern, så
 * ingen rad av den här filen når klienten.
 *
 * Verktyget svarar med en skruv: längden som handelslängd, gängan, spetsen och
 * ytbehandlingen. Under svaret står minsta längd ur Norgips tumregel och den
 * handelslängd som ligger närmast över, så att läsaren ser var talet kommer
 * ifrån.
 *
 * Faktaunderlaget är docs/briefer/underlag-fakta-gipsskruv.md, och samma tal
 * står i längdtabellen i /inomhus/gipsskruv/. Tumregeln är Norgips: skivans
 * tjocklek plus 20 mm in i träregel, eller plus 10 mm genom stålregel, och vid
 * torr fogtätning läggs cirka 7 mm på.
 *
 * Testas av scripts/test-kalkyl-gipsskruv.mjs.
 *
 * Verktyget har inga fria talfält, bara val ur listor, och därför ingen
 * GRANSER som de andra kalkylatorerna. Valideringen sker mot värdelistorna
 * längre ner, och ett värde utanför dem ger status 'ogiltig' med feltext på
 * fältet.
 */

/** Skivans tjocklek. Den tunna skivan kallas 9 mm i handeln och mäter 9,5. */
export type Skiva = '9' | '12.5' | '15';

/** Antal skivlag på den sida du skruvar. */
export type Lag = 1 | 2;

/** Regeln bakom skivan. Gränsen i plåt går vid 0,9 mm godstjocklek. */
export type Regel = 'tra' | 'stal-tunn' | 'stal-tjock';

/** Miljön skivan sitter i. Styr bara ytbehandlingen. */
export type Miljo = 'torrt' | 'vatrum' | 'ute';

/** Gängan följer regeln, aldrig skivan. */
export type Ganga = 'grov' | 'fin';

/** Spetsen följer underlaget: trä, tunn plåt eller tjock plåt. */
export type Spets = 's-eller-nal' | 'nal' | 'borr';

export interface GipsskruvIndata {
  skiva: Skiva;
  lag: Lag;
  regel: Regel;
  /** Torr fogtätning bakom skivan, alltså remsor i stället för fogmassa. */
  fogtatning: boolean;
  miljo: Miljo;
}

/*
 * Konstanter. Källa eller ANTAGANDE i kommentaren över varje.
 */

/**
 * Tumregeln. Skruvlängden ska vara gipstjockleken plus 20 mm in i träregel,
 * eller plus 10 mm genom stålregel.
 * Källa: Norgips, att tänka på innan montering.
 */
export const TRA_IN_I_REGEL_MM = 20;
export const STAL_GENOM_MM = 10;

/**
 * Torr fogtätning, alltså remsor som tätar mot ljud och drag i stället för
 * fogmassa, lägger cirka 7 mm till tjockleken.
 * Källa: Norgips, att tänka på innan montering.
 */
export const FOGTATNING_MM = 7;

/**
 * Gränsen i plåt. Gyproc anger maximal godstjocklek 0,9 mm för sin skruv mot
 * stålprofiler, och Essves nålspetsskruv anges för plåt 0,4 till 0,9 mm.
 * Tjockare plåt än så kräver borrspets, som Essve anger för 0,7 till 2,0 mm.
 * Källa: Gyproc QS Quick, Essve och Proffsmagasinets sida om Essve 522224.
 */
export const PLAT_GRANS_MM = 0.9;
export const NALSPETS_PLAT_MM = [0.4, 0.9] as const;
export const BORRSPETS_PLAT_MM = [0.7, 2.0] as const;

/**
 * Skruvavstånd på väggens yttersta lag: c 200 mm längs kanterna och c 300 mm i
 * fältet, alltså mellan skruvarnas mitt.
 * Källa: Norgips och Svenskt Trä. Antalet skruv räknas i /rakna/innervagg/.
 */
export const KANT_CC_MM = 200;
export const FALT_CC_MM = 300;

/**
 * Handelslängderna, alltså de längder som faktiskt säljs. Essve har gipsskruv
 * från 25 till 75 mm. Längderna upp till 55 mm står i längdtabellen i
 * /inomhus/gipsskruv/; stegen 60, 65, 70 och 75 ligger inom Essves spann och är
 * vårt ANTAGANDE om hur det spannet är indelat. De behövs bara för två lag
 * 15 mm gips på trä med fogtätning bakom.
 * Källa för spannet: Essve, gipsskruv med borrspets för stålregel.
 */
export const HANDELSLANGDER_MM = [25, 30, 35, 38, 41, 45, 51, 55, 60, 65, 70, 75] as const;

/**
 * Varvtalet Essve rekommenderar för skruvlängderna 25 till 55 mm.
 * Källa: Essve, gipsskruv med borrspets för stålregel.
 */
export const VARVTAL = [2000, 2800] as const;

/** Skivans tjocklek i millimeter. Den som kallas 9 mm mäter 9,5. */
export const SKIVA_MM: Record<Skiva, number> = {
  '9': 9.5,
  '12.5': 12.5,
  '15': 15,
};

export const SKIVA_VAL: { varde: Skiva; etikett: string; kort: string }[] = [
  { varde: '9', etikett: '9,5 mm, den tunna skivan', kort: '9,5 mm' },
  { varde: '12.5', etikett: '12,5 mm, vanlig gipsskiva', kort: '12,5 mm' },
  { varde: '15', etikett: '15 mm, den tjocka skivan', kort: '15 mm' },
];

export const LAG_VAL: { varde: Lag; etikett: string; kort: string }[] = [
  { varde: 1, etikett: 'Ett lag', kort: 'Ett lag' },
  { varde: 2, etikett: 'Två lag', kort: 'Två lag' },
];

export const REGEL_VAL: { varde: Regel; etikett: string; kort: string }[] = [
  { varde: 'tra', etikett: 'Träregel', kort: 'Trä' },
  { varde: 'stal-tunn', etikett: 'Stålregel, plåt upp till 0,9 mm', kort: 'Stål, tunn' },
  { varde: 'stal-tjock', etikett: 'Stålregel, plåt över 0,9 mm', kort: 'Stål, tjock' },
];

export const MILJO_VAL: { varde: Miljo; etikett: string; kort: string }[] = [
  { varde: 'torrt', etikett: 'Torrt rum', kort: 'Torrt' },
  { varde: 'vatrum', etikett: 'Våtrum', kort: 'Våtrum' },
  { varde: 'ute', etikett: 'Utomhus, utegips', kort: 'Ute' },
];

/** Skivan i ord, för metaraden över svaret. */
export const SKIVA_TEXT: Record<Skiva, string> = {
  '9': '9,5 mm',
  '12.5': '12,5 mm',
  '15': '15 mm',
};

export const LAG_TEXT: Record<Lag, string> = { 1: 'ett lag', 2: 'två lag' };

export const REGEL_TEXT: Record<Regel, string> = {
  tra: 'träregel',
  'stal-tunn': 'stålregel i tunn plåt',
  'stal-tjock': 'stålregel i tjock plåt',
};

export const MILJO_TEXT: Record<Miljo, string> = {
  torrt: 'torrt rum',
  vatrum: 'våtrum',
  ute: 'utomhus',
};

/** Trä eller stål. Längden är densamma i tunn och tjock plåt, bara spetsen byts. */
export type RegelFamilj = 'tra' | 'stal';

export function regelFamilj(regel: Regel): RegelFamilj {
  return regel === 'tra' ? 'tra' : 'stal';
}

/**
 * Längden vi skriver ut per skivkombination, alltså handelslängden i
 * längdtabellen i /inomhus/gipsskruv/. Två rader avviker från "närmaste längd
 * över tumregeln", och båda avvikelserna står med sin motivering på raden:
 * ett lag 12,5 mm på trä, där 35 mm räcker men guiden tar 41, och ett lag 15 mm
 * på stål, där 25 mm är minsta längd och ligger precis på gränsen.
 *
 * Raderna för den tunna skivan finns inte i artikelns tabell. De är räknade ur
 * Norgips tumregel på samma sätt som resten och märkta som vår räkning.
 *
 * `alternativ` är den andra längden på raden, den som också går att ta.
 */
export interface Langdrad {
  /** Handelslängden vi skriver ut, i millimeter. */
  langdMm: number;
  /** Den andra längden på raden. null när källan bara anger en. */
  alternativMm: number | null;
  /** Varför raden ser ut som den gör, när den behöver en förklaring. */
  anm: string | null;
  /** Sant när raden står i längdtabellen i /inomhus/gipsskruv/. */
  iTabellen: boolean;
}

const TOM: Pick<Langdrad, 'alternativMm' | 'anm'> = { alternativMm: null, anm: null };

export const LANGDER: Record<RegelFamilj, Record<string, Langdrad>> = {
  tra: {
    '9-1': { langdMm: 30, alternativMm: 35, anm: null, iTabellen: false },
    '9-2': { langdMm: 41, alternativMm: 45, anm: null, iTabellen: false },
    '12.5-1': {
      langdMm: 41,
      alternativMm: 35,
      anm: 'Tumregeln stannar på 35 mm, och den längden finns i hyllan. Vi skriver ändå 41 mm, som guiden gör, och i tak tar du aldrig något kortare.',
      iTabellen: true,
    },
    '12.5-2': { langdMm: 45, alternativMm: 51, anm: null, iTabellen: true },
    '15-1': { langdMm: 41, ...TOM, iTabellen: true },
    '15-2': { langdMm: 51, alternativMm: 55, anm: null, iTabellen: true },
  },
  stal: {
    '9-1': { langdMm: 25, ...TOM, iTabellen: false },
    '9-2': { langdMm: 30, ...TOM, iTabellen: false },
    '12.5-1': { langdMm: 25, ...TOM, iTabellen: true },
    '12.5-2': { langdMm: 38, alternativMm: 41, anm: null, iTabellen: true },
    '15-1': {
      langdMm: 30,
      alternativMm: 25,
      anm: 'Minsta längd är 25 mm, och en skruv på 25 mm ligger alltså precis på gränsen. Vi skriver 30 mm, för marginalen.',
      iTabellen: true,
    },
    '15-2': { langdMm: 41, ...TOM, iTabellen: true },
  },
};

export const GANGA_TEXT: Record<Ganga, string> = {
  grov: 'Grov gänga',
  fin: 'Fin gänga',
};

export const SPETS_TEXT: Record<Spets, string> = {
  's-eller-nal': 'S-spets eller nålspets',
  nal: 'Nålspets',
  borr: 'Borrspets',
};

/**
 * Ytbehandlingen per miljö och regel. Fosfaterad och blankförzinkad skruv
 * ligger i korrosivitetsklass C1, alltså torra inomhusmiljöer, enligt Essve.
 * Essve GU Corrseal för utegips ligger i C4, och rostfri A2 motsvarar C4 enligt
 * byggvaruhuset Beijer.
 *
 * Våtrummet är vårt eget val och står märkt som ANTAGANDE i tabellen på sidan:
 * ingen av källorna kräver mer än C1 bakom ett tätskikt, men ett våtrum som
 * står fuktigt utan tätskikt framför skivan får C4 av oss.
 */
export interface Ytbehandling {
  /** Rubrikraden i svaret. */
  kort: string;
  /** Korrosivitetsklassen, som den står hos Essve och Beijer. */
  klass: string;
  /** Meningen under raden. */
  text: string;
}

export function ytbehandlingFor(miljo: Miljo, regel: Regel): Ytbehandling {
  if (miljo === 'ute') {
    return {
      kort: 'Korrosionsklass C4 eller rostfri A2',
      klass: 'C4',
      text: 'Utegips sitter i väder, och där rostar en fosfaterad skruv. Essve GU Corrseal är gjord för utegips och ligger i korrosivitetsklass C4. Rostfri A2 motsvarar C4 enligt byggvaruhuset Beijer.',
    };
  }
  if (miljo === 'vatrum') {
    return {
      kort: 'Korrosionsklass C4 eller rostfri A2',
      klass: 'C4',
      text: 'Bakom ett färdigt tätskikt, alltså den vattentäta duken eller massan under kaklet, räcker en fosfaterad skruv enligt Norgips och Essve. Vi skriver ändå C4 eller rostfri A2 i våtrum, eftersom skivan står fuktig tills tätskiktet är på plats. Det är vår hållning, inte ett krav i någon källa.',
    };
  }
  if (regel === 'tra') {
    return {
      kort: 'Elförzinkad eller fosfaterad',
      klass: 'C1',
      text: 'Båda ligger i korrosivitetsklass C1 enligt Essve, alltså torra inomhusmiljöer, och det är vad ett uppvärmt rum är.',
    };
  }
  return {
    kort: 'Fosfaterad',
    klass: 'C1',
    text: 'Fosfaterad skruv mot stål, enligt tidningen Gör Det Själv. Den ligger i korrosivitetsklass C1 enligt Essve, alltså torra inomhusmiljöer.',
  };
}

/**
 * Standardvärdena. Den vanligaste frågan på frasen: ett lag 12,5 mm gips på en
 * träregel i ett vanligt rum, utan fogtätning bakom.
 */
export const STANDARD: GipsskruvIndata = {
  skiva: '12.5',
  lag: 1,
  regel: 'tra',
  fogtatning: false,
  miljo: 'torrt',
};

/** Hårt mellanslag, så att talet aldrig skiljs från sin enhet vid radbryt. */
const HART = ' ';

/** "32,5 mm" med hårt mellanslag och decimalkomma. */
export function mm(n: number): string {
  const tal = Number.isInteger(n) ? String(n) : String(Math.round(n * 10) / 10).replace('.', ',');
  return `${tal}${HART}mm`;
}

/** Minsta längd ur Norgips tumregel, med fogtätningen pålagd när den finns. */
export function minstaLangd(i: GipsskruvIndata): number {
  const tjocklek = SKIVA_MM[i.skiva] * i.lag;
  const tillagg = regelFamilj(i.regel) === 'tra' ? TRA_IN_I_REGEL_MM : STAL_GENOM_MM;
  return tjocklek + tillagg + (i.fogtatning ? FOGTATNING_MM : 0);
}

/** Handelslängden närmast över ett mått, alltså den första som räcker. */
export function narmastOver(langdMm: number): number {
  const traff = HANDELSLANGDER_MM.find((l) => l >= langdMm);
  return traff ?? HANDELSLANGDER_MM[HANDELSLANGDER_MM.length - 1];
}

/** Nästa handelslängd över en längd som redan är en handelslängd. */
function nastaUpp(langdMm: number): number {
  const traff = HANDELSLANGDER_MM.find((l) => l > langdMm);
  return traff ?? HANDELSLANGDER_MM[HANDELSLANGDER_MM.length - 1];
}

/** Raden i längdtabellen för den här skivan, det här antalet lag och den regeln. */
export function langdrad(i: GipsskruvIndata): Langdrad {
  return LANGDER[regelFamilj(i.regel)][`${i.skiva}-${i.lag}`];
}

/** Gängan följer regeln: grov i trä, fin i stål. Källa: Gör Det Själv. */
export function gangaFor(regel: Regel): Ganga {
  return regel === 'tra' ? 'grov' : 'fin';
}

/**
 * Spetsen följer underlaget. I trä går både S-spets och nålspets rakt in. I
 * plåt upp till 0,9 mm tar nålspetsen hål, och över det krävs borrspets.
 * Källa: Gör Det Själv, Gyproc QS Quick och Essve.
 */
export function spetsFor(regel: Regel): Spets {
  if (regel === 'tra') return 's-eller-nal';
  return regel === 'stal-tunn' ? 'nal' : 'borr';
}

const GOR_INTE_GROV_I_STAL = `Sätt inte en grovgängad träskruv i en stålregel. Det är det vanligaste felet på ett bygge: skruven snurrar utan att ta, och den som håller i dragaren tror att batteriet är slut. I stål gäller fin gänga, enligt tidningen Gör Det Själv.`;

const GOR_INTE_NAL_I_TJOCK_PLAT = `Tryck inte på med en nålspets i plåt över ${mm(PLAT_GRANS_MM)}. Nålen tar inte hål hur hårt du än pressar, och spetsen blir rund. Gyproc anger högst ${mm(PLAT_GRANS_MM)} godstjocklek för sin skruv mot stålprofiler, och över det ska skruven ha borrspets.`;

const GOR_INTE_KORT_I_TAK = `Ta inte den kortaste längden på raden när du skruvar i tak. Branschorganisationen Svenskt Trä anger 30 mm mot trä för ett lag, och en skruv på 30 mm går bara 17,5 mm ner i regeln, alltså under Norgips 20 mm. I en vägg håller det. I ett tak hänger skivan i skruvarna, och där tar vi aldrig något kortare än raden säger.`;

const GOR_INTE_FOSFATERAD_UTE = `Skruva inte utegips med fosfaterad skruv. Den ligger i korrosivitetsklass C1 enligt Essve, alltså torra inomhusmiljöer, och rostar där den sitter. Utomhus gäller C4 eller rostfri A2.`;

export type GipsskruvResultat =
  | {
      status: 'ok';
      /** Handelslängden vi skriver ut, i millimeter. Det stora talet. */
      langdMm: number;
      /** Samma längd som text med enhet: "41 mm". */
      langdText: string;
      /** Minsta längd ur tumregeln, fogtätningen inräknad. */
      minstaLangdMm: number;
      /** Handelslängden närmast över minsta längd. */
      narmastOverMm: number;
      /** Skivorna tillsammans, utan fogtätning. */
      tjocklekMm: number;
      /** Hur långt skruven går in i eller genom regeln. */
      iRegelnMm: number;
      /** Vad tumregeln kräver där: 20 mm i trä, 10 mm genom stål. */
      kravIRegelnMm: number;
      /** Den andra längden på raden, när källan anger två. */
      alternativMm: number | null;
      /** Varför raden ser ut som den gör. null när den talar för sig själv. */
      anm: string | null;
      /** Sant när längden kommer ur längdtabellen i artikeln. */
      iTabellen: boolean;
      /** Påslaget för torr fogtätning, 0 när läsaren inte har någon. */
      fogtatningMm: number;
      /** Raden om fogtätningen, när den gäller. */
      fogtatningText: string | null;
      ganga: Ganga;
      gangaText: string;
      /** Meningen som förklarar gängan. */
      gangaSkal: string;
      spets: Spets;
      spetsText: string;
      /** Meningen som förklarar spetsen. */
      spetsSkal: string;
      ytbehandling: Ytbehandling;
      /** Raden om skruvavstånd, med c-måtten. */
      skruvavstandText: string;
      /** Råden som gäller just den här skruven. */
      gorInteDetHar: string[];
      /** Sant när svaret är den bandade skruven vi har i databasen. */
      visaBandadSkruv: boolean;
    }
  | { status: 'ogiltig'; fel: Partial<Record<keyof GipsskruvIndata, string>> };

export function raknaGipsskruv(i: GipsskruvIndata): GipsskruvResultat {
  const fel: Partial<Record<keyof GipsskruvIndata, string>> = {};
  if (!SKIVA_VAL.some((v) => v.varde === i.skiva)) fel.skiva = 'Välj 9,5, 12,5 eller 15 mm skiva';
  if (!LAG_VAL.some((v) => v.varde === i.lag)) fel.lag = 'Välj ett eller två lag';
  if (!REGEL_VAL.some((v) => v.varde === i.regel)) fel.regel = 'Välj träregel eller stålregel';
  if (!MILJO_VAL.some((v) => v.varde === i.miljo)) fel.miljo = 'Välj torrt rum, våtrum eller utomhus';
  if (typeof i.fogtatning !== 'boolean') fel.fogtatning = 'Svara ja eller nej på fogtätning';
  if (Object.keys(fel).length > 0) return { status: 'ogiltig', fel };

  const tjocklek = SKIVA_MM[i.skiva] * i.lag;
  const minsta = minstaLangd(i);
  const rad = langdrad(i);

  /* Har läsaren torr fogtätning bakom skivan tar vi närmaste längd över den som
     raden anger, precis som Norgips säger. Sedan kontrolleras att längden
     verkligen räcker till tumregeln; gör den inte det höjs den tills den gör. */
  let langd = i.fogtatning ? nastaUpp(rad.langdMm) : rad.langdMm;
  while (langd < minsta) langd = nastaUpp(langd);

  const familj = regelFamilj(i.regel);
  const krav = familj === 'tra' ? TRA_IN_I_REGEL_MM : STAL_GENOM_MM;
  const iRegeln = langd - tjocklek - (i.fogtatning ? FOGTATNING_MM : 0);

  const ganga = gangaFor(i.regel);
  const spets = spetsFor(i.regel);

  const gangaSkal =
    ganga === 'grov'
      ? 'Gängan är gjord för regeln, inte för skivan. I trä biter den grova gängan i virket.'
      : 'Gängan är gjord för regeln, inte för skivan. I plåt greppar den fina gängan i den tunna godsbiten.';

  const spetsSkal =
    spets === 's-eller-nal'
      ? 'I trä går både S-spets och nålspets rakt in i virket.'
      : spets === 'nal'
        ? `Nålspets gäller plåt från ${mm(NALSPETS_PLAT_MM[0])} till ${mm(NALSPETS_PLAT_MM[1])} enligt Essve.`
        : `Borrspets borrar plåt från ${mm(BORRSPETS_PLAT_MM[0])} till ${mm(BORRSPETS_PLAT_MM[1])} enligt Essve. Nålen tar inte hål i den tjockleken.`;

  const gorInteDetHar: string[] = [];
  if (familj === 'stal') gorInteDetHar.push(GOR_INTE_GROV_I_STAL);
  if (i.regel === 'stal-tjock') gorInteDetHar.push(GOR_INTE_NAL_I_TJOCK_PLAT);
  gorInteDetHar.push(GOR_INTE_KORT_I_TAK);
  if (i.miljo === 'ute') gorInteDetHar.push(GOR_INTE_FOSFATERAD_UTE);

  return {
    status: 'ok',
    langdMm: langd,
    langdText: mm(langd),
    minstaLangdMm: minsta,
    narmastOverMm: narmastOver(minsta),
    tjocklekMm: tjocklek,
    iRegelnMm: Math.round(iRegeln * 10) / 10,
    kravIRegelnMm: krav,
    alternativMm: i.fogtatning ? null : rad.alternativMm,
    anm: i.fogtatning ? null : rad.anm,
    iTabellen: rad.iTabellen,
    fogtatningMm: i.fogtatning ? FOGTATNING_MM : 0,
    fogtatningText: i.fogtatning
      ? `Den torra fogtätningen lägger ${mm(FOGTATNING_MM)} till tjockleken enligt Norgips, så du tar närmaste längd över den raden annars anger. Raden utan fogtätning säger ${mm(rad.langdMm)}.`
      : null,
    ganga,
    gangaText: GANGA_TEXT[ganga],
    gangaSkal,
    spets,
    spetsText: SPETS_TEXT[spets],
    spetsSkal,
    ytbehandling: ytbehandlingFor(i.miljo, i.regel),
    skruvavstandText: `Skruvarna sitter c ${KANT_CC_MM} mm längs kanterna och c ${FALT_CC_MM} mm i fältet, alltså mätt mellan skruvarnas mitt.`,
    gorInteDetHar,
    visaBandadSkruv: langd === 41 && ganga === 'grov' && familj === 'tra',
  };
}

function arSkiva(v: string | null): v is Skiva {
  return SKIVA_VAL.some((s) => s.varde === v);
}

function arRegel(v: string | null): v is Regel {
  return REGEL_VAL.some((s) => s.varde === v);
}

function arMiljo(v: string | null): v is Miljo {
  return MILJO_VAL.some((s) => s.varde === v);
}

/**
 * Läser adressen. Varje fält är ett val ur en lista, och skräp i ett fält
 * faller tillbaka på standardvärdet. Skivan tål både punkt och komma i
 * adressen, så att en länk som skrivits för hand med 12,5 fungerar.
 */
export function tolkaQuery(q: URLSearchParams): { indata: GipsskruvIndata; harIndata: boolean } {
  const harIndata = ['skiva', 'lag', 'regel', 'fog', 'miljo'].some((n) => q.has(n));
  const raSkiva = q.get('skiva')?.replace(',', '.') ?? null;
  const raLag = q.get('lag');
  const raRegel = q.get('regel');
  const raMiljo = q.get('miljo');
  const raFog = q.get('fog');

  return {
    harIndata,
    indata: {
      skiva: arSkiva(raSkiva) ? raSkiva : STANDARD.skiva,
      lag: raLag === '2' ? 2 : raLag === '1' ? 1 : STANDARD.lag,
      regel: arRegel(raRegel) ? raRegel : STANDARD.regel,
      fogtatning: raFog === null ? STANDARD.fogtatning : raFog === 'ja',
      miljo: arMiljo(raMiljo) ? raMiljo : STANDARD.miljo,
    },
  };
}
