/**
 * Regel- och skruvräknare för innervägg. Ren modul utan importer från Astro,
 * testbar utan bygge. Sidan /rakna/innervagg/ skickar formuläret som GET och
 * räknar på servern, så ingen rad av den här filen når klienten.
 *
 * Räkningen följer materiallistan i /inomhus/bygga-innervagg/, som i sin tur
 * vilar på Svenskt Trä, Norgips och Gyproc. Varje konstant står namngiven nedan
 * med källa eller ANTAGANDE i kommentaren.
 *
 * Testas av scripts/test-kalkyl-innervagg.mjs mot guidens räkneexempel.
 */

export type Regeldimension = '45x70' | '45x95';
export type Skivlag = 1 | 2;
export type Regelavstand = 400 | 450 | 600;

export interface InnervaggIndata {
  /** Väggens längd i meter. */
  langdM: number;
  /** Rumshöjden i meter, golv till tak. */
  hojdM: number;
  /** Regeldimensionen, 45 × 70 eller 45 × 95 mm. */
  regel: Regeldimension;
  /** Antal lag gipsskivor per sida, ett eller två. */
  lag: Skivlag;
  /** Centrumavstånd mellan reglarna i millimeter. */
  ccMm: Regelavstand;
  /** Antal dörröppningar i väggen. */
  dorrar: number;
  /** Mineralull 45 mm mellan reglarna. */
  ull: boolean;
}

export type InnervaggResultat =
  | {
      status: 'ok';
      /** Lodräta reglar totalt, dörrarnas extra reglar inräknade. */
      antalReglar: number;
      /** Lodräta reglar i själva väggen, utan dörrarnas extra. */
      antalReglarVagg: number;
      /** Extra reglar som dörröppningarna kräver, två per öppning. */
      antalReglarDorr: number;
      /** Kaplängden på en lodrät regel i meter. */
      kapLangdM: number;
      /** Löpmeter virke netto: syll, hammarband, lodräta reglar och avväxlingar. */
      lopmeterVirke: number;
      /** Samma tal med spillpåslaget. */
      lopmeterVirkeMedSpill: number;
      /** Löpmeter syll plus hammarband. */
      syllHammarbandM: number;
      /** Löpmeter avväxling över dörröppningarna. */
      avvaxlingM: number;
      /** Handelslängden som ger minst spill när reglarna kapas, i meter. */
      handelslangdM: number;
      /** Hur många reglar som går ur en sådan längd. */
      reglarPerLangd: number;
      /** Hur många längder du behöver köpa. */
      antalLangder: number;
      /** Spillet i procent vid den längden. */
      spillProcent: number;
      /** Gipsskivor 1 200 × 2 500 mm, båda sidor och alla lag. */
      antalSkivor: number;
      /** Samma tal med spillpåslaget. */
      antalSkivorMedSpill: number;
      /** Skivyta i kvadratmeter, båda sidor och alla lag. */
      skivytaKvm: number;
      /** Gipsskruv, räknat tal. */
      antalSkruv: number;
      /** Samma tal uppåt till hela hundratal, alltså det du köper. */
      skruvAttKopa: number;
      /** Hur många 1 000-pack räkningen behöver. */
      antalPack: number;
      /** Hur många löpmeter vägg ett 1 000-pack räcker till. */
      packRackerTillMeter: number;
      /** Skruvlängden i millimeter som text, ur gipsskruvguiden. */
      skruvLangdText: string;
      /** Mineralull i kvadratmeter, eller null när väggen byggs utan ull. */
      ullKvm: number | null;
      /** Ullens bredd i millimeter, eller null när c-måttet saknar standardbredd. */
      ullBreddMm: number | null;
      /** Råden som gäller just den här väggen. Tom lista när inget gäller. */
      gorInteDetHar: string[];
    }
  | { status: 'ogiltig'; fel: Partial<Record<keyof InnervaggIndata, string>> };

/*
 * Konstanter. Källa eller antagande i kommentaren över varje.
 */

/**
 * Gipsskivans format i millimeter. Normalskivan i Norgips och Gyprocs system är
 * 12,5 mm tjock och 1 200 mm bred, och 2 500 mm är den höjd som täcker en
 * rumshöjd på 2,50 m. Källa: Norgips och Gyproc via
 * docs/briefer/underlag-bygga-innervagg-2026-09-16.md avsnitt 2.6.
 */
export const SKIVA_BREDD_MM = 1200;
export const SKIVA_HOJD_MM = 2500;
/** En skiva är 3,0 kvm. Samma tal som materiallistan i innerväggsguiden. */
export const SKIVA_KVM = (SKIVA_BREDD_MM / 1000) * (SKIVA_HOJD_MM / 1000);

/**
 * Skruvavstånd på väggens yttersta lag: c 200 mm i skivkant och c 300 mm i
 * fält. Källa: Norgips, och Svenskt Trä anger samma mått.
 */
export const SKRUV_KANT_MM = 200;
export const SKRUV_FALT_MM = 300;

/**
 * Skruvavstånd på det innersta laget i en tvålagersvägg utan brandkrav,
 * c 750 mm i både kant och fält. Källa: Norgips.
 */
export const SKRUV_INNERLAGER_MM = 750;

/**
 * Spillpåslag. ANTAGANDE, båda två. Tio procent på skivorna täcker kapade
 * bitar vid dörr, tak och hörn, och fem procent på virket täcker den skeva
 * regeln som alltid ligger i högen. Innerväggsguiden säger tio procent extra
 * på virket; vi lägger fem, eftersom kalkylatorn redan räknar varje regel för
 * sig i stället för per löpmeter.
 */
export const SPILL_SKIVOR = 0.1;
export const SPILL_VIRKE = 0.05;

/**
 * Handelslängder på reglar i meter. ANTAGANDE: det här är de längder
 * byggvaruhusen vanligen lagerför i 45 × 70 och 45 × 95, inte en publicerad
 * standard.
 */
export const HANDELSLANGDER_M = [2.4, 2.7, 3.0, 3.6, 4.2, 4.8] as const;

/**
 * Reglarna kapas högst 15 mm kortare än rumshöjden i trä. Källa: Gyproc, via
 * underlaget avsnitt 2.1. För långa reglar går inte att få i lod.
 */
export const KAPMAN_MM = 15;

/**
 * Dörröppningen. ANTAGANDE: 0,9 m är den vanligaste innerdörren, och
 * öppningen räknas som den bredden. Varje öppning får en väggregel på vardera
 * sidan och en avväxling över, enligt Svenskt Trä. Avväxlingen läggs upp på de
 * två reglarna, alltså öppningen plus två regelbredder.
 */
export const DORR_BREDD_M = 0.9;
export const REGEL_BREDD_M = 0.045;
export const AVVAXLING_M = DORR_BREDD_M + 2 * REGEL_BREDD_M;
export const EXTRA_REGLAR_PER_DORR = 2;

/**
 * Mineralullens bredd mot c-måttet. Ull som är 455 mm bred passar reglar på
 * c 450 mm och ull som är 610 mm bred passar c 600 mm. Källa: Norgips.
 * För c 400 anger ingen tillverkare någon bredd, och fältet blir då null.
 */
export const ULL_BREDD_MM: Record<Regelavstand, number | null> = {
  400: null,
  450: 455,
  600: 610,
};

/** Bandad gipsskruv säljs i 1 000-pack (Essve FZB 3,9 × 41). */
export const PACK_STORLEK = 1000;

/**
 * Skruvlängd mot antal skivlag på träregel, ur /inomhus/gipsskruv/. Ett lag
 * 12,5 mm tar 41 mm, två lag tar 45 eller 51 mm. Talet bakom tabellen är
 * Norgips tumregel: gipstjockleken plus 20 mm ner i träregeln.
 */
export const SKRUVLANGD_TEXT: Record<Skivlag, string> = {
  1: '3,9 × 41 mm med grov gänga',
  2: '45 eller 51 mm med grov gänga',
};

export const REGELDIMENSIONER: { varde: Regeldimension; etikett: string }[] = [
  { varde: '45x70', etikett: '45 × 70 mm, rumsdelare i normal takhöjd' },
  { varde: '45x95', etikett: '45 × 95 mm, vägg över 3 m eller tjockare ull' },
];

export const SKIVLAG: { varde: Skivlag; etikett: string }[] = [
  { varde: 1, etikett: 'Ett lag per sida' },
  { varde: 2, etikett: 'Två lag per sida' },
];

export const REGELAVSTAND: { varde: Regelavstand; etikett: string }[] = [
  { varde: 400, etikett: 'c 400 mm' },
  { varde: 450, etikett: 'c 450 mm' },
  { varde: 600, etikett: 'c 600 mm' },
];

/**
 * Standardvärdena. Väggen är 4 m lång och 2,50 m hög, alltså samma vägg som
 * räkneexemplet i innerväggsguiden.
 */
export const STANDARD: InnervaggIndata = {
  langdM: 4,
  hojdM: 2.5,
  regel: '45x70',
  lag: 1,
  ccMm: 400,
  dorrar: 0,
  ull: true,
};

export const GRANSER = {
  langdM: [0.5, 30],
  hojdM: [2, 4],
  dorrar: [0, 10],
} as const;

/**
 * Regelavståndet Svenskt Trä anger för skivor som är 1 200 mm breda: c 400 mm
 * under ett lag gips, c 600 mm först vid två lag med förskjutna skarvar.
 * Det är också standardvalet i formuläret, så länge läsaren inte väljer själv.
 */
export function ccStandardForLag(lag: Skivlag): Regelavstand {
  return lag === 1 ? 400 : 600;
}

/*
 * Råden skrivs enligt docs/STILGUIDE.md: högst ett tal per mening, och två bara
 * när de två talen är jämförelsen. Mellanslaget i ett mått är hårt, så att
 * "1 200 mm" aldrig bryts mitt itu på en mobilskärm.
 */
const GOR_INTE_CC600_ETT_LAG =
  'Sätt inte reglarna på c 600 mm under ett enda lag gips. Branschorganisationen Svenskt Trä anger c 400 mm för skivor som är 1 200 mm breda. Det glesare måttet knyter de till två lag med förskjutna skarvar. Väggen håller ändå, men den ger efter mellan reglarna när någon lutar sig mot den.';

const GOR_INTE_SKARV_VID_DORR =
  'Lägg inte en skivskarv i linje med dörröppningens kant. Svenskt Trä förbjuder det uttryckligen, och det är den spricka du ser oftast i en hemmabyggd vägg. Kapa i stället ett L-format stycke skiva som går förbi hörnet, eller flytta skarven en halv skivbredd åt sidan.';

const GOR_INTE_HOG_VAGG_45X70 =
  'Bygg inte en vägg över 3 m hög på reglar som är 45 × 70 mm. Gipstillverkaren Gyproc anger den grövre dimensionen 45 × 95 mm upp till 4 m höjd. För den klenare finns ingen höjd angiven alls.';

/** Decimalkomma accepteras: '2,5' blir 2.5. Tomt eller skräp ger NaN. */
function tillTal(v: string | null): number {
  if (v === null) return NaN;
  const rensad = v.trim().replace(',', '.');
  if (rensad === '') return NaN;
  return Number(rensad);
}

/**
 * Handelslängden som ger minst spill när reglarna kapas till kaplängden.
 * Längder som är kortare än en regel går bort. Vid lika spill vinner den
 * kortaste längden, eftersom den är lättast att bära och lättast att lagra.
 */
export function bastaHandelslangd(kapLangdM: number): {
  handelslangdM: number;
  reglarPerLangd: number;
  spillProcent: number;
} {
  let bast = { handelslangdM: 0, reglarPerLangd: 0, spillProcent: 1 };
  for (const langd of HANDELSLANGDER_M) {
    const antal = Math.floor((langd + 1e-9) / kapLangdM);
    if (antal < 1) continue;
    const spill = 1 - (antal * kapLangdM) / langd;
    if (spill < bast.spillProcent - 1e-9) {
      bast = { handelslangdM: langd, reglarPerLangd: antal, spillProcent: spill };
    }
  }
  /* Ryms regeln inte i någon handelslängd får läsaren skarva, och vi visar den
     längsta längden med det spill som blir när en regel skarvas ur två bitar. */
  if (bast.handelslangdM === 0) {
    const langsta = HANDELSLANGDER_M[HANDELSLANGDER_M.length - 1] as number;
    return { handelslangdM: langsta, reglarPerLangd: 0, spillProcent: 0 };
  }
  return { ...bast, spillProcent: bast.spillProcent * 100 };
}

/**
 * Gipsskruv per kvadratmeter skivyta på det yttersta laget. Kantraderna sitter
 * på c 200 mm och fältraderna på c 300 mm, och andelen kantreglar följer
 * c-måttet: vid c 600 mm och skivor på 1 200 mm är varannan regel en skivkant.
 * Densiteten per kvadratmeter blir snittet per meter regel delat med c-måttet
 * i meter, vilket ger 6,9 skruv per kvadratmeter vid c 600 mm. Det är samma
 * tal som kontrollräkningen i innerväggsguiden, 7 skruv per kvadratmeter.
 */
export function skruvPerKvm(ccMm: Regelavstand): number {
  const andelKant = Math.min(1, ccMm / SKIVA_BREDD_MM);
  const perMeterKant = 1000 / SKRUV_KANT_MM;
  const perMeterFalt = 1000 / SKRUV_FALT_MM;
  const snittPerMeterRegel = andelKant * perMeterKant + (1 - andelKant) * perMeterFalt;
  return snittPerMeterRegel / (ccMm / 1000);
}

/** Samma räkning för det innersta laget i en tvålagersvägg, c 750 i både kant och fält. */
export function skruvPerKvmInnerlager(ccMm: Regelavstand): number {
  return 1000 / SKRUV_INNERLAGER_MM / (ccMm / 1000);
}

function arRegel(v: string | null): v is Regeldimension {
  return v === '45x70' || v === '45x95';
}

function arCc(n: number): n is Regelavstand {
  return n === 400 || n === 450 || n === 600;
}

/**
 * Läser adressen. Regelavståndet fylls på med Svenskt Träs val för antalet
 * skivlag när läsaren inte valt själv, alltså c 400 mm för ett lag och
 * c 600 mm för två.
 */
export function tolkaQuery(q: URLSearchParams): { indata: InnervaggIndata; harIndata: boolean } {
  const harIndata =
    q.has('langd') || q.has('hojd') || q.has('regel') || q.has('lag') || q.has('cc') || q.has('dorrar') || q.has('ull');

  const raRegel = q.get('regel');
  const regel: Regeldimension = arRegel(raRegel) ? raRegel : STANDARD.regel;

  const lag: Skivlag = q.get('lag') === '2' ? 2 : 1;

  const raCc = tillTal(q.get('cc'));
  const ccMm: Regelavstand = arCc(raCc) ? raCc : ccStandardForLag(lag);

  const raDorrar = q.get('dorrar');
  const dorrar = raDorrar === null ? STANDARD.dorrar : tillTal(raDorrar);

  const raUll = q.get('ull');
  const ull = raUll === null ? STANDARD.ull : raUll.trim().toLowerCase() === 'ja';

  return {
    harIndata,
    indata: {
      langdM: q.has('langd') ? tillTal(q.get('langd')) : STANDARD.langdM,
      hojdM: q.has('hojd') ? tillTal(q.get('hojd')) : STANDARD.hojdM,
      regel,
      lag,
      ccMm,
      dorrar,
      ull,
    },
  };
}

export function raknaInnervagg(i: InnervaggIndata): InnervaggResultat {
  const fel: Partial<Record<keyof InnervaggIndata, string>> = {};
  const [langdMin, langdMax] = GRANSER.langdM;
  const [hojdMin, hojdMax] = GRANSER.hojdM;
  const [dorrMin, dorrMax] = GRANSER.dorrar;

  if (!Number.isFinite(i.langdM) || i.langdM < langdMin || i.langdM > langdMax) {
    fel.langdM = `Ange väggens längd mellan ${String(langdMin).replace('.', ',')} och ${langdMax} meter`;
  }
  if (!Number.isFinite(i.hojdM) || i.hojdM < hojdMin || i.hojdM > hojdMax) {
    fel.hojdM = `Ange rumshöjd mellan ${hojdMin} och ${hojdMax} meter`;
  }
  if (!Number.isFinite(i.dorrar) || !Number.isInteger(i.dorrar) || i.dorrar < dorrMin || i.dorrar > dorrMax) {
    fel.dorrar = `Ange antal dörröppningar som ett helt tal mellan ${dorrMin} och ${dorrMax}`;
  }
  /* Bara när både längden och dörrarna i sig är giltiga. Ett fel per fält. */
  if (fel.langdM === undefined && fel.dorrar === undefined && i.dorrar > 0) {
    const dorrbredd = i.dorrar * DORR_BREDD_M;
    if (dorrbredd >= i.langdM) {
      fel.dorrar = `Dörrarna tar ${String(dorrbredd).replace('.', ',')} meter och väggen är kortare än så`;
    }
  }
  if (Object.keys(fel).length > 0) return { status: 'ogiltig', fel };

  const ccM = i.ccMm / 1000;

  // Steg 1. Reglarna. Väggens längd delad med c-måttet ger antalet fack, och
  // en regel till stänger det sista facket, så att väggen får en regel i
  // vardera änden. Varje dörröppning lägger till två reglar.
  const antalReglarVagg = Math.ceil(i.langdM / ccM - 1e-9) + 1;
  const antalReglarDorr = i.dorrar * EXTRA_REGLAR_PER_DORR;
  const antalReglar = antalReglarVagg + antalReglarDorr;

  // Steg 2. Virket. Syll och hammarband är en längd var, reglarna kapas 15 mm
  // kortare än rumshöjden, och varje dörr får en avväxling över öppningen.
  const kapLangdM = i.hojdM - KAPMAN_MM / 1000;
  const syllHammarbandM = 2 * i.langdM;
  const avvaxlingM = i.dorrar * AVVAXLING_M;
  const lopmeterVirke = syllHammarbandM + antalReglar * kapLangdM + avvaxlingM;
  const lopmeterVirkeMedSpill = lopmeterVirke * (1 + SPILL_VIRKE);

  // Steg 3. Handelslängden som ger minst spill när reglarna kapas.
  const langd = bastaHandelslangd(kapLangdM);
  const antalLangder = langd.reglarPerLangd > 0 ? Math.ceil(antalReglar / langd.reglarPerLangd) : antalReglar;

  // Steg 4. Skivorna. Hela väggytan på båda sidor, gånger antalet lag. Vi drar
  // inte av dörrhålet: bitarna runt en öppning blir sällan hela, och spillet
  // äter upp avdraget.
  const vaggytaKvm = i.langdM * i.hojdM;
  const skivytaKvm = vaggytaKvm * 2 * i.lag;
  const antalSkivor = Math.ceil(skivytaKvm / SKIVA_KVM - 1e-9);
  const antalSkivorMedSpill = Math.ceil((skivytaKvm * (1 + SPILL_SKIVOR)) / SKIVA_KVM - 1e-9);

  // Steg 5. Skruven. Yttersta laget på båda sidor räknas med c 200 i kant och
  // c 300 i fält, och det innersta laget i en tvålagersvägg med c 750.
  const yttreKvm = vaggytaKvm * 2;
  const inreKvm = i.lag === 2 ? vaggytaKvm * 2 : 0;
  const antalSkruv = Math.ceil(yttreKvm * skruvPerKvm(i.ccMm) + inreKvm * skruvPerKvmInnerlager(i.ccMm) - 1e-9);
  const skruvAttKopa = Math.ceil(antalSkruv / 100) * 100;
  const antalPack = Math.ceil(antalSkruv / PACK_STORLEK);
  const packRackerTillMeter = (PACK_STORLEK / antalSkruv) * i.langdM;

  // Steg 6. Ullen. Ett lag 45 mm mineralull i regelfacken, alltså väggytan en gång.
  const ullKvm = i.ull ? vaggytaKvm : null;
  const ullBreddMm = i.ull ? ULL_BREDD_MM[i.ccMm] : null;

  const gorInteDetHar: string[] = [];
  if (i.lag === 1 && i.ccMm === 600) gorInteDetHar.push(GOR_INTE_CC600_ETT_LAG);
  if (i.dorrar > 0) gorInteDetHar.push(GOR_INTE_SKARV_VID_DORR);
  if (i.regel === '45x70' && i.hojdM > 3) gorInteDetHar.push(GOR_INTE_HOG_VAGG_45X70);

  return {
    status: 'ok',
    antalReglar,
    antalReglarVagg,
    antalReglarDorr,
    kapLangdM,
    lopmeterVirke,
    lopmeterVirkeMedSpill,
    syllHammarbandM,
    avvaxlingM,
    handelslangdM: langd.handelslangdM,
    reglarPerLangd: langd.reglarPerLangd,
    antalLangder,
    spillProcent: langd.spillProcent,
    antalSkivor,
    antalSkivorMedSpill,
    skivytaKvm,
    antalSkruv,
    skruvAttKopa,
    antalPack,
    packRackerTillMeter,
    skruvLangdText: SKRUVLANGD_TEXT[i.lag],
    ullKvm,
    ullBreddMm,
    gorInteDetHar,
  };
}
