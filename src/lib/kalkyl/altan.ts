/**
 * Trall-, regel- och plinträknare för altan. Ren modul utan importer från Astro,
 * testbar utan bygge. Sidan /rakna/altan/ skickar formuläret som GET och räknar
 * på servern, så ingen rad av den här filen når klienten.
 *
 * Varje konstant står namngiven nedan med källa eller ANTAGANDE i kommentaren.
 * Underlaget med hämtningsdatum och länk per rad ligger i
 * docs/briefer/underlag-kalkyl-altan-2026-09-17.md, och spännvidderna,
 * plintavstånden och förpackningsstorlekarna kommer sedan 2026-09-19 ur
 * docs/briefer/underlag-reglar-avstand-2026-09-19.md, som hämtade primärkällan
 * Svenskt Trä, Lathunden 8:2021.
 *
 * Testas av scripts/test-kalkyl-altan.mjs mot räkneexemplen i underlaget.
 */

export type Trallbredd = 95 | 120 | 145;
export type Riktning = 'langsida' | 'kortsida';
/**
 * Centrumavstånden Lathundens altantabell har kolumner för. Tidigare hette det
 * täta måttet c 450 mm, vilket inte stod i någon tabell utan låg mellan två av
 * dem. Sedan 2026-09-19 är båda måtten Lathundens egna, så att väljaren och
 * tabellen på /altan/reglar-avstand-och-dimensioner/ säger samma sak.
 */
export type Regelavstand = 400 | 600;
export type Regeldimension = '45x120' | '45x145' | '45x170' | '45x195' | '45x220';
/** Bärlinedimensionerna i Lathundens plintavståndstabell. 70 × 220 finns bara där. */
export type Barlinedimension = Regeldimension | '70x220';
export type Grund = 'plintar' | 'befintlig';

export interface AltanIndata {
  /** Altanens längd i meter. */
  langdM: number;
  /** Altanens bredd i meter. */
  breddM: number;
  /** Trallbrädans bredd i millimeter. */
  trallbreddMm: Trallbredd;
  /** Åt vilket håll trallbrädorna löper. Reglarna går alltid tvärs trallen. */
  riktning: Riktning;
  /** Centrumavstånd mellan reglarna i millimeter. */
  ccMm: Regelavstand;
  /** Regeldimensionen, alltså bjälkarna som trallen skruvas i. */
  regel: Regeldimension;
  /** Plintar under bärlinor, eller befintlig grund att lägga reglarna på. */
  grund: Grund;
}

export type AltanResultat =
  | {
      status: 'ok';
      /** Altanens yta i kvadratmeter. */
      ytaKvm: number;
      /** Längden på en trallbräda i meter, alltså altanens mått i trallens riktning. */
      trallLangdM: number;
      /** Måttet trallbrädorna ska täcka i meter, alltså tvärs trallen. */
      trallTackerM: number;
      /** Antal trallbrädor bredvid varandra. */
      antalBrador: number;
      /** Springan mellan två brädor i millimeter. */
      springaMm: number;
      /** Löpmeter trall netto, alltså utan spillpåslaget. */
      lopmeterTrall: number;
      /** Samma tal med spillpåslaget. */
      lopmeterTrallMedSpill: number;
      /** Handelslängden som ger minst spill när brädorna kapas, i meter. */
      handelslangdM: number;
      /** Hur många brädor som går ur en sådan längd. Noll när brädan måste skarvas. */
      bradorPerLangd: number;
      /** Hur många längder du behöver köpa. */
      antalLangder: number;
      /** Spillet i procent vid den längden. */
      spillProcent: number;
      /** Antal reglar, alltså bjälkarna trallen skruvas i. */
      antalReglar: number;
      /** Längden på en regel i meter. */
      regelLangdM: number;
      /** Löpmeter regelvirke. */
      lopmeterReglar: number;
      /** Antal bärlinor. Noll när altanen ligger på befintlig grund. */
      antalBarlinor: number;
      /** Löpmeter bärlina. */
      lopmeterBarlinor: number;
      /** Reglarnas fria spännvidd mellan två bärlinor i meter, eller null utan bärlinor. */
      spannviddM: number | null;
      /** Största spännvidd den valda dimensionen klarar vid det valda c-måttet. */
      maxSpannviddM: number;
      /** Antal plintar. Noll när altanen ligger på befintlig grund. */
      antalPlintar: number;
      /** Antal plintar i varje rad, alltså under en bärlina. */
      plintarPerRad: number;
      /** Största avstånd mellan två plintar i meter. Noll utan plintar. */
      plintavstandM: number;
      /** Den rad i Lathundens plintavståndstabell räkningen läst, i meter. Noll utan plintar. */
      friLangdTabellM: number;
      /** Bärlinans dimension, antagen lika med regelns. */
      barlina: Barlinedimension;
      /** Bärlinans dimension som text, "45 × 145 mm". */
      barlinaText: string;
      /** Antal korsningar mellan bräda och regel. */
      antalKorsningar: number;
      /** Trallskruv, räknat tal. */
      antalSkruv: number;
      /** Förpackningsstorleken som ger minst överskott. */
      forpackningStorlek: number;
      /** Hur många sådana förpackningar räkningen behöver. */
      antalForpackningar: number;
      /** Skruven du faktiskt får hem, alltså förpackningarna gånger storleken. */
      skruvAttKopa: number;
      /** Skruvens beteckning som text. */
      skruvText: string;
      /** Hur reglarna fästs mot bärlinan, som text. */
      infastningText: string;
      /** Råden som gäller just den här altanen. Tom lista när inget gäller. */
      gorInteDetHar: string[];
    }
  | { status: 'ogiltig'; fel: Partial<Record<keyof AltanIndata, string>> };

/*
 * Konstanter. Källa eller antagande i kommentaren över varje. Underlaget är
 * docs/briefer/underlag-kalkyl-altan-2026-09-17.md.
 */

/**
 * Trallens tjocklek. Källa: TräGuiden, Läggning av trall. Tabellen anger minsta
 * tjocklek mot centrumavstånd, och 28 mm är den tjocklek som får ligga på
 * c 600 mm. Kalkylatorn räknar på 28 mm rakt igenom.
 */
export const TRALL_TJOCKLEK_MM = 28;

/**
 * Springan mellan två brädor vid montering, i millimeter. Källa: TräGuiden,
 * samma sida, tabellen över minsta kant-till-kant-avstånd för tryckimpregnerad
 * furu. Talen i tabellen är brädbredden plus springan: 100, 126 och 152 mm för
 * brädor på 95, 120 och 145 mm.
 */
export const SPRINGA_MM: Record<Trallbredd, number> = {
  95: 5,
  120: 6,
  145: 7,
};

/**
 * Två skruv per korsning. Källa: TräGuiden, Läggning av trall. Brädor som är
 * 95 mm breda eller bredare fästs med två skruv per regel, 30 mm från kanten.
 * Alla tre bredderna kalkylatorn erbjuder ligger över den gränsen.
 */
export const SKRUV_PER_KORSNING = 2;

/**
 * Skruvens beteckning. Källa: TräGuidens tabell anger 55 mm skruvlängd och
 * minst 4,2 mm ytterdiameter för 28 mm trall. Handelsbeteckningen 4,2 × 55 mm
 * är Essves, och A4 är den rostfria kvalitet som klarar tryckimpregnerat virke
 * utan svarta ränder.
 */
export const SKRUV_TEXT = '4,2 × 55 mm trallskruv i rostfritt A4';

/**
 * Hur reglarna sitter fast i bärlinan. Källa: byggbeskrivningen Altan, som
 * anger snedspikning eller vinkelbeslag mellan bärlinorna.
 */
export const INFASTNING_TEXT =
  'Fäst varje regel i bärlinan med ett vinkelbeslag och ankarskruv, eller skruva den snett med två skruv. Beslagen ska vara varmförzinkade eller rostfria, som trallskruven.';

/**
 * Största fria längd i meter för reglarna mellan två bärlinor, per dimension och
 * c-mått. KÄLLA: Svenskt Trä, Lathunden, hjälpreda för byggare, utgåva 8:2021,
 * sid. 30, tabellen "Golvbjälkar av konstruktionsvirke i ett fack till altan
 * (0,30 kN/m²), maximal fri längd", kolumnerna C24 vid c 600 och c 400 mm.
 * Talen står ordagrant som de står i tabellen, inte avrundade.
 *
 * Tabellhuvudets förutsättningar: konstruktionsvirke C24, golv av minst 22 mm
 * trall G4-2 eller bättre, EKS 11, säkerhetsklass 1, klimatklass 3, nedböjning
 * begränsad till 1/200 av spännvidden. Tabellen har ingen snözon som
 * ingångsvärde; den som bygger i en hög snözon kör sitt eget fall genom Svenskt
 * Träs dimensioneringsprogram.
 *
 * Raderna var till 2026-09-19 märkta ANTAGANDE med Altanplaneraren som stöd.
 * Lathunden bekräftar dem på centimetern, och märkningen är därför borta.
 * 45 × 95 mm finns inte i Lathundens altantabell och erbjuds därför inte.
 */
export const MAX_SPANNVIDD_M: Record<Regeldimension, Record<Regelavstand, number>> = {
  '45x120': { 400: 2.19, 600: 1.91 },
  '45x145': { 400: 2.64, 600: 2.31 },
  '45x170': { 400: 3.1, 600: 2.71 },
  '45x195': { 400: 3.56, 600: 3.11 },
  '45x220': { 400: 4.01, 600: 3.51 },
};

/**
 * De fria längder Lathundens plintavståndstabell har kolumner för, i meter.
 * Ett mellanläge rundas uppåt till närmaste kolumn, se tabelleradFriLangd().
 */
export const FRI_LANGD_TABELL_M = [2.4, 3.6, 4.8] as const;
export type FriLangd = (typeof FRI_LANGD_TABELL_M)[number];

/**
 * Maximalt plintavstånd (D) i meter per bärlinedimension och golvbjälkarnas
 * fria längd (L). KÄLLA: Lathunden 8:2021, sid. 24, tabellen "Bärlinor av
 * konstruktionsvirke till golvbjälkar i ett fack till altan (0,45 kN/m²),
 * plintavstånd", kolumnerna C24.
 *
 * Tabellhuvudet: bärlinor med två eller flera fack med samma plintavstånd, alla
 * bärlinor i samma dimension och hållfasthetsklass, C24, EKS 11, säkerhetsklass
 * 1, klimatklass 3, nedböjning 1/300.
 *
 * Tabellen ersatte 2026-09-19 den fasta konstanten 2,5 m, som var för generös:
 * 2,5 m kräver en bärlina på 45 × 220 mm och bara vid den kortaste fria längden.
 * Kalkylatorn gav alltså för få plintar. 70 × 220 står med för att tabellen ska
 * vara hel; den är ingen regeldimension och nås därför inte av räkningen i dag.
 */
export const PLINTAVSTAND_M: Record<Barlinedimension, Record<FriLangd, number>> = {
  '45x120': { 2.4: 1.38, 3.6: 1.03, 4.8: 0.83 },
  '45x145': { 2.4: 1.64, 3.6: 1.25, 4.8: 1.0 },
  '45x170': { 2.4: 1.92, 3.6: 1.47, 4.8: 1.18 },
  '45x195': { 2.4: 2.2, 3.6: 1.68, 4.8: 1.35 },
  '45x220': { 2.4: 2.49, 3.6: 1.9, 4.8: 1.53 },
  '70x220': { 2.4: 3.1, 3.6: 2.56, 4.8: 2.18 },
};

/**
 * ANTAGANDE: bärlinan har samma dimension som reglarna. Det är det vanligaste
 * på en villaaltan, men inte givet; Svenskt Träs egen byggbeskrivning bygger
 * bärlinan av en grövre dimension än golvbjälkarna. Väljer läsaren en grövre
 * bärlina än reglarna tål den ett längre plintavstånd än verktyget räknar med,
 * alltså ligger talet på säkra sidan.
 */
export function barlinaFor(regel: Regeldimension): Barlinedimension {
  return regel;
}

/**
 * Förhållandet mellan reglarnas centrumavstånd och plintavståndet. Lathunden
 * sid. 24 skriver villkoret som att golvbjälkarnas centrumavstånd (C)
 * rekommenderas vara högst plintavståndet delat med fyra.
 *
 * OBS, och det här är en läsning som teknisk ansvarig ska ta ställning till:
 * bokstavligt betyder villkoret D minst 4 × C, alltså en undre gräns för
 * plintavståndet. Vi tillämpar det i stället som ett tak, D högst 4 × C. Det ger
 * alltid fler plintar och aldrig färre, så resultatet är på säkra sidan oavsett
 * vilken läsning som är den rätta. Den bokstavliga läsningen hade i stället
 * krävt en grövre bärlina vid c 600 mm, vilket är ett annat slags svar.
 */
export const CC_ANDEL_AV_PLINTAVSTAND = 4;

/**
 * Handelslängder på trall i meter. ANTAGANDE: det här är de längder
 * byggvaruhusen lagerför i hela landet. Vissa kedjor har också 3,0, 5,4 och 6,0.
 */
export const HANDELSLANGDER_M = [3.6, 4.2, 4.8] as const;

/**
 * Spillpåslag på trallen. ANTAGANDE: tio procent täcker kap i ändarna, en bräda
 * som är för skev för att ligga i golvet och det som går bort vid ett hörn.
 */
export const SPILL_TRALL = 0.1;

/**
 * Förpackningsstorlekar på trallskruv. KÄLLA: butikskontroll 2026-09-19 av
 * skribenten på trallskruv. Bauhaus säljer 200 och 250 stycken, Byggmax 250,
 * K-Bygg och Essve 250 stycken och hink om 1 000. Ingen av dem säljer 500.
 * Paret var till 2026-09-19 märkt ANTAGANDE och stod som 250 och 500.
 */
export const FORPACKNINGAR = [250, 1000] as const;

/** Fallet ut från huset. Källa: byggbeskrivningen Altan, cirka 1:100. */
export const FALL_TEXT = '1:100, en centimeter per meter';

export const TRALLBREDDER: { varde: Trallbredd; etikett: string }[] = [
  { varde: 95, etikett: '95 mm, smal bräda som rör sig minst' },
  { varde: 120, etikett: '120 mm, den vanligaste' },
  { varde: 145, etikett: '145 mm, bred bräda och färre skruv' },
];

export const RIKTNINGAR: { varde: Riktning; etikett: string }[] = [
  { varde: 'langsida', etikett: 'Längs långsidan' },
  { varde: 'kortsida', etikett: 'Längs kortsidan' },
];

export const REGELAVSTAND: { varde: Regelavstand; etikett: string }[] = [
  { varde: 600, etikett: 'c 600 mm' },
  { varde: 400, etikett: 'c 400 mm' },
];

export const REGELDIMENSIONER: { varde: Regeldimension; etikett: string }[] = [
  { varde: '45x120', etikett: '45 × 120 mm' },
  { varde: '45x145', etikett: '45 × 145 mm' },
  { varde: '45x170', etikett: '45 × 170 mm' },
  { varde: '45x195', etikett: '45 × 195 mm' },
  { varde: '45x220', etikett: '45 × 220 mm' },
];

export const GRUNDER: { varde: Grund; etikett: string }[] = [
  { varde: 'plintar', etikett: 'Plintar, altanen står fritt' },
  { varde: 'befintlig', etikett: 'Befintlig grund eller platta' },
];

/** Standardaltanen: 4 × 3 m, trall längs långsidan, 120 mm bräda, c 600, 45 × 145 på plintar. */
export const STANDARD: AltanIndata = {
  langdM: 4,
  breddM: 3,
  trallbreddMm: 120,
  riktning: 'langsida',
  ccMm: 600,
  regel: '45x145',
  grund: 'plintar',
};

export const GRANSER = {
  langdM: [1, 20],
  breddM: [1, 20],
} as const;

/*
 * Råden skrivs enligt docs/STILGUIDE.md: högst ett tal per mening, och två bara
 * när de två talen är jämförelsen. Mellanslaget i ett mått är hårt, så att
 * "c 600 mm" aldrig bryts mitt itu på en mobilskärm.
 */

/** "45x145" blir "45 × 145 mm", alltså måttet som det skrivs i löptext. */
function dimensionText(regel: Barlinedimension): string {
  return `${regel.replace('x', ' × ')} mm`;
}

const RAKNEORD = ['ingen', 'en', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

/**
 * Rådet när reglarna måste spänna längre än dimensionen klarar. Kalkylatorn
 * löser det med en bärlinrad till, och rådet säger vilken dimension som hade
 * klarat sig med en rad mindre.
 */
function radSpannvidd(regel: Regeldimension, cc: Regelavstand, behovM: number, rader: number): string {
  const max = String(MAX_SPANNVIDD_M[regel][cc]).replace('.', ',');
  const behov = behovM.toFixed(1).replace('.', ',');
  const battre = REGELDIMENSIONER.map((r) => r.varde).find(
    (r) => Math.max(1, Math.ceil(behovM / MAX_SPANNVIDD_M[r][cc] - 1e-9)) + 1 < rader,
  );
  const meningar = [
    `Spänn inte ${dimensionText(regel)} längre än ${max} m mellan bärlinorna.`,
    `Här behöver reglarna gå ${behov} m, så altanen får ${RAKNEORD[rader] ?? rader} bärlinrader, och plintarna under dem är inräknade i talet.`,
  ];
  if (battre) meningar.push(`Byter du till ${dimensionText(battre)} räcker en rad mindre.`);
  return meningar.join(' ');
}

const GOR_INTE_TAT_SPRINGA =
  'Den breda brädan rör sig mest, och lägger du brädorna kant i kant sväller de mot varandra första hösten så att golvet buktar. Svenskt Trä anger springan efter brädans bredd, och fem millimeter är det minsta du ska ha.';

const GOR_INTE_UTAN_FALL =
  'Lägg fallet i reglarna redan när du sätter dem, cirka en centimeter per meter ut från huset. En trall som ligger vågrätt får en ränna i varje springa som håller kvar vattnet, och efteråt går det inte att rätta till.';

const GOR_INTE_SKARV_UTANFOR_REGEL =
  'Altanen är längre än den längsta brädan i hyllan, så brädorna måste mötas, och de ska mötas mitt över en regel med varsin skruv. En skarv i luften mellan två reglar håller inte. Lägg skarvarna förskjutna mellan raderna, annars får golvet en fog rakt igenom.';

/** Decimalkomma accepteras: '2,5' blir 2.5. Tomt eller skräp ger NaN. */
function tillTal(v: string | null): number {
  if (v === null) return NaN;
  const rensad = v.trim().replace(',', '.');
  if (rensad === '') return NaN;
  return Number(rensad);
}

/**
 * Handelslängden som ger minst spill när trallbrädorna kapas till brädlängden.
 * Längder som är kortare än en bräda går bort. Vid lika spill vinner den
 * kortaste, eftersom den är lättast att bära hem och lättast att lägga upp.
 *
 * Ryms brädan inte i någon handelslängd får den skarvas över en regel, och då
 * ger funktionen noll brädor per längd. Sidan räknar då på löpmeter i stället.
 */
export function bastaHandelslangd(bradLangdM: number): {
  handelslangdM: number;
  bradorPerLangd: number;
  spillProcent: number;
} {
  let bast = { handelslangdM: 0, bradorPerLangd: 0, spillProcent: 1 };
  for (const langd of HANDELSLANGDER_M) {
    const antal = Math.floor((langd + 1e-9) / bradLangdM);
    if (antal < 1) continue;
    const spill = 1 - (antal * bradLangdM) / langd;
    if (spill < bast.spillProcent - 1e-9) {
      bast = { handelslangdM: langd, bradorPerLangd: antal, spillProcent: spill };
    }
  }
  if (bast.handelslangdM === 0) {
    const langsta = HANDELSLANGDER_M[HANDELSLANGDER_M.length - 1] as number;
    return { handelslangdM: langsta, bradorPerLangd: 0, spillProcent: 0 };
  }
  return { ...bast, spillProcent: bast.spillProcent * 100 };
}

/**
 * Förpackningen som ger minst överskott. Vid lika överskott vinner den större,
 * eftersom färre förpackningar är billigare per skruv och färre att bära.
 */
export function bastaForpackning(antalSkruv: number): { storlek: number; antal: number; totalt: number } {
  let bast = { storlek: 0, antal: 0, totalt: Number.POSITIVE_INFINITY };
  for (const storlek of FORPACKNINGAR) {
    const antal = Math.ceil(antalSkruv / storlek);
    const totalt = antal * storlek;
    if (totalt < bast.totalt || (totalt === bast.totalt && storlek > bast.storlek)) {
      bast = { storlek, antal, totalt };
    }
  }
  return bast;
}

function arTrallbredd(n: number): n is Trallbredd {
  return n === 95 || n === 120 || n === 145;
}

function arCc(n: number): n is Regelavstand {
  return n === 400 || n === 600;
}

function arRegel(v: string | null): v is Regeldimension {
  return REGELDIMENSIONER.some((r) => r.varde === v);
}

/**
 * Den fria längd i tabellen som gäller för en uträknad spännvidd. Ett mellanläge
 * rundas uppåt till närmaste kolumn: en regel som går 1,5 m läses på raden för
 * 2,4 m, vilket ger ett kortare plintavstånd än en interpolering hade gett och
 * alltså fler plintar. Vi hittar inte på tal mellan Lathundens kolumner.
 */
export function tabelleradFriLangd(spannviddM: number): FriLangd {
  for (const l of FRI_LANGD_TABELL_M) if (spannviddM <= l + 1e-9) return l;
  return FRI_LANGD_TABELL_M[FRI_LANGD_TABELL_M.length - 1];
}

/**
 * Största avstånd mellan två plintar i meter. Två villkor, och det strängaste
 * gäller: bärlinans egen tabellrad vid den fria längd reglarna har, och
 * förhållandet till reglarnas centrumavstånd (se CC_ANDEL_AV_PLINTAVSTAND).
 */
export function plintavstand(regel: Regeldimension, spannviddM: number, ccMm: Regelavstand): number {
  const tabellvarde = PLINTAVSTAND_M[barlinaFor(regel)][tabelleradFriLangd(spannviddM)];
  const efterCc = (ccMm / 1000) * CC_ANDEL_AV_PLINTAVSTAND;
  return Math.min(tabellvarde, efterCc);
}

/** Läser adressen. Skräp faller tillbaka på standardvärdet, inte på ett fel. */
export function tolkaQuery(q: URLSearchParams): { indata: AltanIndata; harIndata: boolean } {
  const harIndata =
    q.has('langd') ||
    q.has('bredd') ||
    q.has('trallbredd') ||
    q.has('riktning') ||
    q.has('cc') ||
    q.has('regel') ||
    q.has('grund');

  const raTrallbredd = tillTal(q.get('trallbredd'));
  const trallbreddMm: Trallbredd = arTrallbredd(raTrallbredd) ? raTrallbredd : STANDARD.trallbreddMm;

  /* Delade länkar från före 2026-09-19 bär cc=450, ett mått som inte finns i
     Lathundens tabell. De läses som c 400 mm, alltså tätare än läsaren skrev
     och därför på säkra sidan; att tyst falla tillbaka på c 600 hade gett
     glesare reglar än hon bad om. */
  const raCc = tillTal(q.get('cc'));
  const ccMm: Regelavstand = arCc(raCc) ? raCc : raCc === 450 ? 400 : STANDARD.ccMm;

  const raRegel = q.get('regel');
  const regel: Regeldimension = arRegel(raRegel) ? raRegel : STANDARD.regel;

  const riktning: Riktning = q.get('riktning') === 'kortsida' ? 'kortsida' : 'langsida';
  const grund: Grund = q.get('grund') === 'befintlig' ? 'befintlig' : 'plintar';

  return {
    harIndata,
    indata: {
      langdM: q.has('langd') ? tillTal(q.get('langd')) : STANDARD.langdM,
      breddM: q.has('bredd') ? tillTal(q.get('bredd')) : STANDARD.breddM,
      trallbreddMm,
      riktning,
      ccMm,
      regel,
      grund,
    },
  };
}

export function raknaAltan(i: AltanIndata): AltanResultat {
  const fel: Partial<Record<keyof AltanIndata, string>> = {};
  const [langdMin, langdMax] = GRANSER.langdM;
  const [breddMin, breddMax] = GRANSER.breddM;

  if (!Number.isFinite(i.langdM) || i.langdM < langdMin || i.langdM > langdMax) {
    fel.langdM = `Skriv altanens längd mellan ${langdMin} och ${langdMax} meter`;
  }
  if (!Number.isFinite(i.breddM) || i.breddM < breddMin || i.breddM > breddMax) {
    fel.breddM = `Skriv altanens bredd mellan ${breddMin} och ${breddMax} meter`;
  }
  if (Object.keys(fel).length > 0) return { status: 'ogiltig', fel };

  const ytaKvm = i.langdM * i.breddM;
  const langsidaM = Math.max(i.langdM, i.breddM);
  const kortsidaM = Math.min(i.langdM, i.breddM);

  // Steg 1. Geometrin. Trallbrädan löper åt det håll läsaren valt, och reglarna
  // går tvärs trallen. Brädans längd är altanens mått i trallens riktning, och
  // det mått brädorna ska täcka är altanens mått tvärs den.
  const trallLangdM = i.riktning === 'langsida' ? langsidaM : kortsidaM;
  const trallTackerM = i.riktning === 'langsida' ? kortsidaM : langsidaM;

  // Steg 2. Trallen. Varje bräda tar sin bredd plus springan, och den sista
  // springan behövs inte, men den ryms i avrundningen uppåt.
  const springaMm = SPRINGA_MM[i.trallbreddMm];
  const delningMm = i.trallbreddMm + springaMm;
  const antalBrador = Math.ceil((trallTackerM * 1000) / delningMm - 1e-9);
  const lopmeterTrall = antalBrador * trallLangdM;
  const lopmeterTrallMedSpill = lopmeterTrall * (1 + SPILL_TRALL);

  // Steg 3. Handelslängden som spiller minst när brädorna kapas. Ryms brädan
  // inte i någon längd måste den skarvas över en regel, och då räknas antalet
  // längder ur löpmetern med spill i stället.
  const langd = bastaHandelslangd(trallLangdM);
  const antalLangder =
    langd.bradorPerLangd > 0
      ? Math.ceil(antalBrador / langd.bradorPerLangd)
      : Math.ceil(lopmeterTrallMedSpill / langd.handelslangdM - 1e-9);
  /* Spillet räknas på det du bär hem, inte på kapet i sig, så att talet betyder
     samma sak vare sig brädan går hel ur en längd eller måste skarvas. */
  const koptaMeter = antalLangder * langd.handelslangdM;
  const spillProcent = ((koptaMeter - lopmeterTrall) / koptaMeter) * 100;

  // Steg 4. Reglarna. De går tvärs trallen, alltså är regeln lika lång som det
  // mått brädorna täcker, och de fördelas över brädans längd. En regel till
  // stänger sista facket, så att altanen får en regel i vardera änden.
  const ccM = i.ccMm / 1000;
  const antalReglar = Math.ceil(trallLangdM / ccM - 1e-9) + 1;
  const regelLangdM = trallTackerM;
  const lopmeterReglar = antalReglar * regelLangdM;

  // Steg 5. Bärlinorna. Reglarnas fria spännvidd är avståndet mellan två
  // bärlinor, och dimensionen sätter taket för hur långt det får vara. Altanen
  // får så många bärlinrader som behövs för att komma under taket.
  const maxSpannviddM = MAX_SPANNVIDD_M[i.regel][i.ccMm];
  const plintar = i.grund === 'plintar';
  const fack = Math.max(1, Math.ceil(regelLangdM / maxSpannviddM - 1e-9));
  const antalBarlinor = plintar ? fack + 1 : 0;
  const spannviddM = plintar ? regelLangdM / fack : null;
  const lopmeterBarlinor = antalBarlinor * trallLangdM;

  // Steg 6. Plintarna. Varje bärlina vilar på en rad plintar. Avståndet mellan
  // två plintar slås upp i Lathundens bärlinetabell på bärlinans dimension och
  // reglarnas fria längd, och kapas sedan av förhållandet till c-måttet.
  const plintavstandM = plintar ? plintavstand(i.regel, spannviddM ?? 0, i.ccMm) : 0;
  const plintarPerRad = plintar ? Math.ceil(trallLangdM / plintavstandM - 1e-9) + 1 : 0;
  const antalPlintar = antalBarlinor * plintarPerRad;

  // Steg 7. Skruven. Två per korsning mellan bräda och regel, uppåt till hel
  // förpackning.
  const antalKorsningar = antalBrador * antalReglar;
  const antalSkruv = antalKorsningar * SKRUV_PER_KORSNING;
  const forpackning = bastaForpackning(antalSkruv);

  const gorInteDetHar: string[] = [];
  if (plintar && regelLangdM > maxSpannviddM + 1e-9) {
    gorInteDetHar.push(radSpannvidd(i.regel, i.ccMm, regelLangdM, antalBarlinor));
  }
  /* Springan gäller alla bredder, men den breda brädan är den som spricker i
     kanterna när någon lägger den för tätt, och rådet står därför där. */
  if (i.trallbreddMm >= 145) gorInteDetHar.push(GOR_INTE_TAT_SPRINGA);
  if (langd.bradorPerLangd === 0) gorInteDetHar.push(GOR_INTE_SKARV_UTANFOR_REGEL);
  if (kortsidaM >= 2) gorInteDetHar.push(GOR_INTE_UTAN_FALL);

  return {
    status: 'ok',
    ytaKvm,
    trallLangdM,
    trallTackerM,
    antalBrador,
    springaMm,
    lopmeterTrall,
    lopmeterTrallMedSpill,
    handelslangdM: langd.handelslangdM,
    bradorPerLangd: langd.bradorPerLangd,
    antalLangder,
    spillProcent,
    antalReglar,
    regelLangdM,
    lopmeterReglar,
    antalBarlinor,
    lopmeterBarlinor,
    spannviddM,
    maxSpannviddM,
    antalPlintar,
    plintarPerRad,
    plintavstandM,
    friLangdTabellM: plintar ? tabelleradFriLangd(spannviddM ?? 0) : 0,
    barlina: barlinaFor(i.regel),
    barlinaText: dimensionText(barlinaFor(i.regel)),
    antalKorsningar,
    antalSkruv,
    forpackningStorlek: forpackning.storlek,
    antalForpackningar: forpackning.antal,
    skruvAttKopa: forpackning.totalt,
    skruvText: SKRUV_TEXT,
    infastningText: INFASTNING_TEXT,
    gorInteDetHar,
  };
}
