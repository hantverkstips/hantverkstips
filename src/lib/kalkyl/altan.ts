/**
 * Trall-, regel- och plinträknare för altan. Ren modul utan importer från Astro,
 * testbar utan bygge. Sidan /rakna/altan/ skickar formuläret som GET och räknar
 * på servern, så ingen rad av den här filen når klienten.
 *
 * Varje konstant står namngiven nedan med källa eller ANTAGANDE i kommentaren.
 * Underlaget med hämtningsdatum och länk per rad ligger i
 * docs/briefer/underlag-kalkyl-altan-2026-09-17.md.
 *
 * Testas av scripts/test-kalkyl-altan.mjs mot räkneexemplen i underlaget.
 */

export type Trallbredd = 95 | 120 | 145;
export type Riktning = 'langsida' | 'kortsida';
export type Regelavstand = 450 | 600;
export type Regeldimension = '45x145' | '45x170' | '45x195';
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
  'Reglarna fästs i bärlinan med vinkelbeslag och ankarskruv, eller snedskruvas med två skruv per infästning. Beslagen ska vara varmförzinkade eller rostfria, som trallskruven.';

/**
 * Största spännvidd i meter för reglarna mellan två bärlinor, per dimension och
 * c-mått. Raden för 45 × 145 är Källa (Altanplaneraren, branschens
 * dimensioneringstabell för villaaltan utan tak: 2,30 m vid c 600 mm och 2,60 m
 * vid tätare c-mått). Raderna för 45 × 170 och 45 × 195 är ANTAGANDE, byggda på
 * samma källas trappa mellan dimensionerna. Underlaget avsnitt 7 punkt 3 säger
 * vad chefredaktören ska verifiera mot Svenskt Träs egen tabell.
 */
export const MAX_SPANNVIDD_M: Record<Regeldimension, Record<Regelavstand, number>> = {
  '45x145': { 450: 2.6, 600: 2.3 },
  '45x170': { 450: 3.0, 600: 2.7 },
  '45x195': { 450: 3.45, 600: 3.1 },
};

/**
 * Bärlinan. ANTAGANDE att den är 45 × 170 mm, stött av TräGuiden: bärlinor
 * byggs oftast av den dimensionen och har som mest 2,5 meters avstånd mellan
 * plintarna. Grövre bärlina ger färre plintar, klenare ger fler.
 */
export const BARLINA_TEXT = '45 × 170 mm';
export const PLINTAVSTAND_M = 2.5;

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
 * Förpackningsstorlekar på trallskruv. ANTAGANDE: 250 och 500 är de storlekar
 * kedjorna säljer 4,2 × 55 i. Underlaget avsnitt 7 punkt 4 ska kontrollera om
 * 250 och 1 000 är det rätta paret.
 */
export const FORPACKNINGAR = [250, 500] as const;

/** Fallet ut från huset. Källa: byggbeskrivningen Altan, cirka 1:100. */
export const FALL_TEXT = '1:100, alltså en centimeter per meter';

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
  { varde: 450, etikett: 'c 450 mm' },
];

export const REGELDIMENSIONER: { varde: Regeldimension; etikett: string }[] = [
  { varde: '45x145', etikett: '45 × 145 mm' },
  { varde: '45x170', etikett: '45 × 170 mm' },
  { varde: '45x195', etikett: '45 × 195 mm' },
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
function dimensionText(regel: Regeldimension): string {
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
    `Reglarna ska gå ${behov} m här.`,
    `Altanen får därför ${RAKNEORD[rader] ?? rader} bärlinrader, och plintarna under dem är inräknade i talet.`,
  ];
  if (battre) meningar.push(`Med ${dimensionText(battre)} räcker en rad mindre.`);
  return meningar.join(' ');
}

const GOR_INTE_TAT_SPRINGA =
  'Skruva inte ihop brädorna tätare än fem millimeter. Branschorganisationen Svenskt Trä anger springan efter brädans bredd, och den breda brädan rör sig mest. Lägger du dem kant i kant sväller de mot varandra första hösten, och då buktar golvet i stället för att ligga.';

const GOR_INTE_UTAN_FALL =
  'Lägg inte trallen vågrätt. Bjälklaget ska luta ut från huset, cirka en centimeter per meter, annars blir varje springa en ränna som håller kvar vattnet. Fallet läggs i reglarna innan trallen skruvas, för efteråt går det inte att rätta.';

const GOR_INTE_SKARV_UTANFOR_REGEL =
  'Skarva aldrig en trallbräda i luften. Altanen är längre än den längsta brädan i hyllan, så brädorna måste mötas, och de ska mötas mitt över en regel med varsin skruv. Lägg skarvarna förskjutna mellan raderna, annars får golvet en fog rakt igenom.';

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
  return n === 450 || n === 600;
}

function arRegel(v: string | null): v is Regeldimension {
  return v === '45x145' || v === '45x170' || v === '45x195';
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

  const raCc = tillTal(q.get('cc'));
  const ccMm: Regelavstand = arCc(raCc) ? raCc : STANDARD.ccMm;

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
    fel.langdM = `Ange altanens längd mellan ${langdMin} och ${langdMax} meter`;
  }
  if (!Number.isFinite(i.breddM) || i.breddM < breddMin || i.breddM > breddMax) {
    fel.breddM = `Ange altanens bredd mellan ${breddMin} och ${breddMax} meter`;
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

  // Steg 6. Plintarna. Varje bärlina vilar på en rad plintar, och avståndet
  // mellan två plintar sätts av bärlinans dimension.
  const plintarPerRad = plintar ? Math.ceil(trallLangdM / PLINTAVSTAND_M - 1e-9) + 1 : 0;
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
