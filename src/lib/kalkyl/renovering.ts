/**
 * Renovering: vad kostar badrummet och köket, post för post, före och efter
 * rotavdraget? Ren modul utan importer från Astro, testbar utan bygge. Sidorna
 * /rakna/badrum-kostnad/ och /rakna/kok-kostnad/ skickar formuläret som GET och
 * räknar på servern, så ingen rad av den här filen når klienten.
 *
 * Badrummet står först. Köket står sist i filen, under rubriken "Köket", med
 * prefixet Kok/KOK_ och specen docs/briefer/spec-kalkyl-kok-kostnad-2026-09-29.md.
 * De delar källorna (KALLOR), formateringen (krText, spannText, spannDelar,
 * kvmText) och rotavdraget genom rotavdrag.ts.
 *
 * Konstanterna står överst, var och en med Källa eller ANTAGANDE. Underlaget
 * med adress och datum per rad ligger i
 * docs/briefer/faktablad/kunskap-tatskikt-badrum.md, avsnitten A till H under
 * "Räknarunderlag", och specen med besluten B1 till B7 i
 * docs/briefer/spec-kalkyl-badrum-kostnad-2026-09-29.md.
 *
 * Rotavdraget räknas av raknaRotavdrag() i rotavdrag.ts. Ingen del av den
 * räkningen och ingen av dess konstanter är kopierad hit.
 *
 * All text läsaren ser och som modulen äger står i TEXT och skrivs av
 * hantverkaren.
 *
 * Testas av scripts/test-kalkyl-badrum-kostnad.mjs och
 * scripts/test-kalkyl-kok-kostnad.mjs.
 */
/* Ändelsen står med, så att node kan köra testskriptet utan bygge. */
import {
  raknaRotavdrag,
  kronor,
  ROT_PROCENT,
  ROT_TAK_KR,
  SKATTEVERKET_ROTAVDRAGET,
  SKATTEVERKET_GER_RATT,
} from './rotavdrag.ts';

export { kronor };

/* ------------------------------------------------------------------ *
 * Typer
 * ------------------------------------------------------------------ */

export type PostNyckel = 'rivning' | 'tatskikt-kakel' | 'vvs' | 'el' | 'malning' | 'inredning' | 'container';
export type Niva = 'enkel' | 'mellan';
export type Egen = 'rivning' | 'bortforsling';
export type Agare = 1 | 2;

export interface KallaRef {
  kod:
    | 'BE'
    | 'BS'
    | 'TB'
    | 'SF'
    | 'HK'
    | 'SKV-ROT'
    | 'SKV-RATT'
    | 'BBV'
    | 'SV'
    | 'ELSAK'
    /* Köket, specen 2.1. */
    | 'VED'
    | 'IKEA'
    | 'KIT'
    | 'TB-LUCKOR'
    | 'TB-BANK'
    | 'TB-IKEA'
    | 'HK-LUCKOR'
    | 'HK-KOK'
    | 'HK-NYTT'
    | 'ELSAK-SJALV'
    /* Brödtexten på /rakna/kok-kostnad/, stycket om Säker Vatten. */
    | 'IF';
  /** Källans egen titel, ur underlaget. */
  titel: string;
  /** https. */
  url: string;
  slag: 'förmedlare' | 'firma' | 'tillverkare' | 'myndighet' | 'branschregel' | 'försäkringsbolag';
  /** "senast ändrad 2024-04-06", "2026-03-30", "läst 2026-09-28". */
  datum: string;
}

export type KallKod = KallaRef['kod'];

export interface PostDef {
  nyckel: PostNyckel;
  /** Vid REFERENSYTA_KVM. */
  timmarVidRef: number;
  materialVidRef: number | Record<Niva, number>;
  skalar: boolean;
  /**
   * Vilket val som gör posten till egen insats. Arbetet blir 0 och materialet
   * står kvar. Bortforslingen (containern) har inget arbete, så beloppet står
   * kvar oförändrat som ANTAGANDE: tippavgift, släp eller storsäck kostar
   * också när läsaren kör själv (koordinatorn 2026-09-29). Besparingen visas inte.
   */
  egen: Egen | null;
  /** Sant bara för containern. */
  antagande: boolean;
  /** Minst en; den första är den som talet kommer från. */
  kallor: KallKod[];
}

export interface BadrumIndata {
  ytaKvm: number;
  niva: Niva;
  /** Unik, i ordningen i EGEN_VAL. */
  egen: Egen[];
  /**
   * Agare efter valideringen. Typen är number och inte Agare, eftersom adressen
   * kan bära ett annat tal (agare=3) som ska ge ett fel på fältet och inte
   * tyst bli 1.
   */
  agare: number;
  /** Utnyttjat rot i år, alla ägare tillsammans. */
  rotKr: number;
  timprisKr: number;
}

export type FelNyckel = 'yta' | 'agare' | 'rot' | 'timpris';

export interface PostRad {
  nyckel: PostNyckel;
  /** 0 när läsaren gör posten själv. */
  arbeteKr: number;
  materialKr: number;
  /** Efter skalning, före egen insats. */
  timmar: number;
  egenInsats: boolean;
}

export type Utfall = 'belopp' | 'tak' | 'utanfor';
export type GorInte = 'tatskikt-sjalv' | 'rot-pa-allt' | 'riva-sjalv';
export type RegelNyckel =
  | 'poster'
  | 'skalning'
  | 'niva'
  | 'container'
  | 'stad'
  | 'rot-arbete'
  | 'rot-tak'
  | 'rot-slog-i'
  | 'egen-insats'
  | 'intervall';

/** Talen för en kant av spannet. */
export interface BadrumSiffror {
  /** I POSTER-ordning, container sist. */
  poster: PostRad[];
  /** Summan av posternas arbete. */
  arbeteKr: number;
  /** Summan av posternas material utom container. */
  materialKr: number;
  containerKr: number;
  /** Arbete + material + container. */
  foreRotKr: number;
  /** avdragKr ur raknaRotavdrag. */
  rotKr: number;
  /** raktAvdragKr. */
  raktRotKr: number;
  /** kapatKr. */
  kapatKr: number;
  /** foreRot − rot. */
  attBetalaKr: number;
  /** Math.round(arbete / foreRot · 100). */
  andelArbeteProcent: number;
  /**
   * Vad en kvadratmeter till kostar före rot, med läsarens egen insats och
   * timpris. Under REFERENSYTA_KVM den linjära takten, från den BS:s tillägg.
   */
  perKvmKr: number;
  /** Sant när rotavdragets gräns stoppar en del av avdraget för den här kanten. */
  begransad: boolean;
}

export type BadrumResultat =
  | ({
      status: 'ok';
      /** tak när den övre kanten når rotavdragets gräns. */
      utfall: 'belopp' | 'tak';
      /**
       * Talen på översta nivån är den nedre kanten (BS 8 000 kr per extra kvm),
       * hog den övre (16 000). Upp till REFERENSYTA_KVM är totalerna lika i
       * båda; perKvmKr skiljer från och med REFERENSYTA_KVM.
       */
      hog: BadrumSiffror;
      /** Sant när totalerna skiljer, alltså när golvet är större än REFERENSYTA_KVM. */
      spann: boolean;
      gorInteDetHar: GorInte[];
      regler: RegelNyckel[];
    } & BadrumSiffror)
  | {
      status: 'ok';
      utfall: 'utanfor';
      sida: 'under' | 'over';
      gorInteDetHar: GorInte[];
      regler: RegelNyckel[];
    }
  | { status: 'ogiltig'; fel: Partial<Record<FelNyckel, string>> };

export type BadrumOk = Extract<BadrumResultat, { status: 'ok' }>;
export type BadrumBelopp = Extract<BadrumOk, { utfall: 'belopp' | 'tak' }>;

/* ------------------------------------------------------------------ *
 * Källorna, en gång. Titel, adress, slag och datum ur underlaget avsnitt A,
 * och ur faktabladet avsnitt 1, 4 och 9 för branschreglerna, Elsäkerhetsverket
 * och Skatteverket.
 *
 * TB och SF är samma firma, Bygghantverkarna Jakub och Far AB (underlaget A).
 * De står som två rader för att adresserna är två, men räknas aldrig som två
 * källor i någon text.
 * ------------------------------------------------------------------ */

export const KALLOR: Record<KallKod, KallaRef> = {
  BE: {
    kod: 'BE',
    titel: 'Badrumsexperter, vad kostar en badrumsrenovering',
    url: 'https://www.badrumsexperter.se/pris/vad-kostar-en-badrumsrenovering',
    slag: 'förmedlare',
    datum: 'senast ändrad 2024-04-06',
  },
  BS: {
    kod: 'BS',
    titel: 'Byggstart, renovera badrum',
    url: 'https://www.byggstart.se/pris/renovera-badrum',
    slag: 'förmedlare',
    /* Sidan är odaterad; datumet är dagen underlaget läste den. */
    datum: 'läst 2026-09-28',
  },
  TB: {
    kod: 'TB',
    titel: 'Totalbyggarna, vad kostar det att renovera ett badrum',
    url: 'https://www.totalbyggarna.se/blogg/vad-kostar-det-att-renovera-ett-badrum/',
    slag: 'firma',
    datum: '2026-03-30',
  },
  SF: {
    kod: 'SF',
    titel: 'sonochfar.se, Bygghantverkarna Jakub och Far AB',
    url: 'https://sonochfar.se/',
    slag: 'firma',
    datum: 'läst 2026-09-28',
  },
  HK: {
    kod: 'HK',
    titel: 'Hantverkskollen, tätskikt badrum kostnad 2026',
    url: 'https://www.hantverkskollen.se/artiklar/rormokare/rormokare-tatskikt-badrum-kostnad-2026',
    slag: 'förmedlare',
    datum: '2026-04-25',
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
  BBV: {
    kod: 'BBV',
    titel: 'Byggkeramikrådet, branschregler för våtrum BBV 26:1',
    url: 'https://admin.bkr.se/app/uploads/2026/05/BKR_BBV_2026_webb.pdf',
    slag: 'branschregel',
    datum: '2026',
  },
  SV: {
    kod: 'SV',
    titel: 'Säker Vatten, Branschregler Säker Vatteninstallation 2026:1',
    url: 'https://sakervatten.se/wp-content/uploads/2025/10/branschregler-saker-vatteninstallation-2026-web-v2-lagupplost.pdf',
    slag: 'branschregel',
    datum: '2026',
  },
  ELSAK: {
    kod: 'ELSAK',
    titel: 'Elsäkerhetsverket, installation av golvvärme',
    url: 'https://www.elsakerhetsverket.se/privatpersoner/din-elanlaggning/bygga-och-renovera/installation-av-golvvarme',
    slag: 'myndighet',
    datum: 'granskad 2026-02-03',
  },

  /*
   * Köket, ur docs/briefer/faktablad/rakna-kok-kostnad.md avsnitt 2 och 3.
   * TB-LUCKOR, TB-BANK och TB-IKEA är samma firma som TB och SF och räknas
   * aldrig som flera källor i en text.
   */
  VED: {
    kod: 'VED',
    titel: 'Vedum, luckprislista 2026',
    url: 'https://www.vedum.se/globalassets/dokument/kok/luckprislista/luckprislista_2026.pdf',
    slag: 'tillverkare',
    datum: 'läst 2026-09-28',
  },
  IKEA: {
    kod: 'IKEA',
    titel: 'Ikea, Metod bänkskåp och väggskåp, Veddinge lucka och Utrusta gångjärn',
    url: 'https://www.ikea.com/se/sv/cat/luckor-23613/',
    slag: 'tillverkare',
    datum: 'läst 2026-09-28',
  },
  KIT: {
    kod: 'KIT',
    titel: 'Kitchens.se, vad kostar en bänkskiva',
    url: 'https://kitchens.se/inspiration/vad-kostar-en-bankskiva-prisguide-sten-komposit-keramik/',
    slag: 'firma',
    datum: 'maj 2026',
  },
  'TB-LUCKOR': {
    kod: 'TB-LUCKOR',
    titel: 'Totalbyggarna, byta köksluckor på befintlig stomme',
    url: 'https://www.totalbyggarna.se/smatjanster/byta-koksluckor-befintlig-stomme-pris/',
    slag: 'firma',
    /* Sidan är odaterad; datumet är dagen underlaget läste den. */
    datum: 'läst 2026-09-28',
  },
  'TB-BANK': {
    kod: 'TB-BANK',
    titel: 'Totalbyggarna, bänkskiva i köket',
    url: 'https://www.totalbyggarna.se/blogg/kok-bankskiva/',
    slag: 'firma',
    datum: '2026-03-30',
  },
  'TB-IKEA': {
    kod: 'TB-IKEA',
    titel: 'Totalbyggarna, vad kostar ett IKEA-kök',
    url: 'https://www.totalbyggarna.se/blogg/ikea-kok-pris/',
    slag: 'firma',
    datum: 'uppdaterad 2026-06-29',
  },
  'HK-LUCKOR': {
    kod: 'HK-LUCKOR',
    titel: 'Hantverkskollen, byta köksluckor i stället för hela köket',
    url: 'https://www.hantverkskollen.se/artiklar/snickare/snickare-koksluckor-byta-kostnad-vad-kostar-det-att-luckor-istallet-for-hela-koket',
    slag: 'förmedlare',
    datum: 'uppdaterad 2026-07-17',
  },
  'HK-KOK': {
    kod: 'HK-KOK',
    titel: 'Hantverkskollen, komplett guide till köksrenovering 2026',
    url: 'https://www.hantverkskollen.se/artiklar/snickare/snickare-komplett-guide-koksrenovering-kostnad-priser-tips-och-rad-2026',
    slag: 'förmedlare',
    datum: 'uppdaterad 2026-07-17',
  },
  'HK-NYTT': {
    kod: 'HK-NYTT',
    titel: 'Hantverkskollen, nytt kök från grunden',
    url: 'https://www.hantverkskollen.se/artiklar/snickare/snickare-nytt-kok-kostnad-vad-kostar-ett-helt-fran-grunden',
    slag: 'förmedlare',
    datum: 'uppdaterad 2026-07-17',
  },
  'ELSAK-SJALV': {
    kod: 'ELSAK-SJALV',
    titel: 'Elsäkerhetsverket, vad får jag göra själv med el',
    url: 'https://www.elsakerhetsverket.se/privatpersoner/detta-far-du-gora-sjalv-med-el/vad-far-jag-gora-sjalv-med-el/',
    slag: 'myndighet',
    datum: 'granskad 2025-07-30',
  },
  /* docs/briefer/faktablad/guider-byta-toalettstol.md punkt 5: s. 8 kräver Säker
     Vatten vid om- och tillbyggnad, s. 14 avdraget vid brott mot föreskriften. */
  IF: {
    kod: 'IF',
    titel: 'If, Villaförsäkring, försäkringsvillkor december 2025, s. 8 och 14',
    url: 'https://www.if.se/globalassets/se/dokument/privat/villaforsakring-villkor.pdf',
    slag: 'försäkringsbolag',
    datum: 'december 2025',
  },
};

/* ------------------------------------------------------------------ *
 * Konstanter. Källa eller ANTAGANDE i kommentaren över varje.
 * ------------------------------------------------------------------ */

/**
 * Golvytan som posternas timmar och material gäller för.
 * Källa: BE (Badrumsexperter, vad kostar en badrumsrenovering, senast ändrad
 * 2024-04-06) och BS (Byggstart, renovera badrum, läst 2026-09-28). Båda
 * exemplen är 5 kvm.
 */
export const REFERENSYTA_KVM = 5;

/**
 * Ytorna räknaren ger ett belopp för, gränserna inräknade (SEO-beslutet
 * 2026-09-29, docs/briefer/seo-checklista-2026-09-29/raknare.md, "Beslut efter
 * bygget" punkt 3).
 * 4: ANTAGANDE. Mellan 4 och 5 kvm skalas posterna linjärt nedåt från BE:s
 *   exempel på 5 kvm (specen B3).
 * 8: ANTAGANDE, vår egen gräns. Över 5 kvm läggs BS:s tillägg per kvadratmeter
 *   till (BS_PER_EXTRA_KVM_KR), och BS anger inte hur långt det räcker.
 */
export const YTA_INTERVALL = [4, 8] as const;

/**
 * Tillägget per kvadratmeter golv över REFERENSYTA_KVM, nedre och övre kant.
 * Källa: BS, Byggstart, renovera badrum, läst 2026-09-28: "8.000 – 16.000
 * kronor extra per kvadratmeter".
 * Hur tillägget delas på arbete och material är ANTAGANDE: det fördelas på de
 * poster som skalar i samma proportion som de har vid REFERENSYTA_KVM hos BE
 * (se skalfaktor()), så att rotavdraget går att räkna.
 */
export const BS_PER_EXTRA_KVM_KR = [8000, 16000] as const;

/**
 * Timpriset för alla poster.
 * Källa: BE, Badrumsexperter, vad kostar en badrumsrenovering, senast ändrad
 * 2024-04-06. Inte uppräknat till dagens nivå (SEO-beslutet). Att det är
 * inklusive moms är ett ANTAGANDE: utdraget från Hantverkarpriser, som har samma
 * kalkyl, säger "including VAT" (specen B6).
 */
export const TIMPRIS_KR = 600;

/**
 * Container och bortforsling.
 * ANTAGANDE: övre kanten av TB:s "bortforsling avfall 2 000–5 000" (Totalbyggarna,
 * vad kostar det att renovera ett badrum, firma, 2026-03-30), vald så att
 * räknaren inte lovar för lite. Det finns ingen andra källa (specen B4). Ger
 * inget rotavdrag: Skatteverket ger inget avdrag för att "forsla bort".
 */
export const CONTAINER_KR = 5000;

/**
 * Inredning, sanitet och armatur, material per nivå (specen B2).
 * enkel: Källa BE, "standardvitvaror": toalett, handfat, badkar, duschkabin,
 *   skåp, armatur.
 * mellan: Källa BS, 16 000 kr armaturer plus 32 000 kr badkar och möbler,
 *   egna inköp.
 * Ingen tredje nivå: den saknar källa (underlaget D3).
 */
export const INREDNING_KR: Record<Niva, number> = { enkel: 25000, mellan: 48000 };

/**
 * Timpriserna hos SF efter rot, inklusive moms, som jämförelse i
 * antagandetabellen och aldrig i räkningen (specen B6).
 * Källa: SF, sonochfar.se, startsidan, läst 2026-09-28: 350 kr/h bygg och
 * snickeri, 481,25 kr/h badrum, el och VVS. Före rot är egen räkning med
 * rotavdragets procentsats ur rotavdrag.ts (underlaget C).
 */
export const SF_TIMPRIS_EFTER_ROT_KR = [350, 481.25] as const;
export const SF_TIMPRIS_FORE_ROT_KR = SF_TIMPRIS_EFTER_ROT_KR.map(
  (t) => Math.round((t / (1 - ROT_PROCENT / 100)) * 100) / 100,
);

/**
 * Posterna (specen B1). Källa för varje tal: BE, Badrumsexperter, vad kostar en
 * badrumsrenovering, senast ändrad 2024-04-06, vid 5 kvm. Materialet per post
 * är egen räkning ur BE: postens belopp minus timmar gånger 600 kr (underlaget B).
 * tatskikt-kakel: BE:s förarbeten och plattsättning, 48 + 70 timmar, och
 *   material 20 000 (förarbeten) + 3 500 (plattsättning) + 24 500 (kakel och
 *   klinker). Tätskiktet ligger i BE:s förarbeten och plattsättning.
 * malning: egen post, eftersom summan annars inte stämmer med BE.
 * inredning: BE:s montering, 8 timmar; materialet är INREDNING_KR per nivå.
 * container: ingen hos BE; se CONTAINER_KR, ANTAGANDE.
 * Rivning, tätskikt och kakel och målning följer golvytan: linjärt nedåt under
 * REFERENSYTA_KVM (ANTAGANDE, specen B3), och BS:s tillägg per kvm över den
 * (BS_PER_EXTRA_KVM_KR). VVS, el, inredning och container är fasta.
 * Stödkällorna efter den första: BS, TB och HK (underlaget A och B).
 */
export const POSTER: readonly PostDef[] = [
  {
    nyckel: 'rivning',
    timmarVidRef: 32,
    materialVidRef: 0,
    skalar: true,
    egen: 'rivning',
    antagande: false,
    kallor: ['BE', 'BS', 'TB'],
  },
  {
    nyckel: 'tatskikt-kakel',
    timmarVidRef: 48 + 70,
    materialVidRef: 20000 + 3500 + 24500,
    skalar: true,
    egen: null,
    antagande: false,
    kallor: ['BE', 'BS', 'TB', 'HK'],
  },
  {
    nyckel: 'vvs',
    timmarVidRef: 12,
    materialVidRef: 6000,
    skalar: false,
    egen: null,
    antagande: false,
    kallor: ['BE', 'BS', 'TB'],
  },
  {
    nyckel: 'el',
    timmarVidRef: 12,
    materialVidRef: 8000,
    skalar: false,
    egen: null,
    antagande: false,
    kallor: ['BE', 'BS', 'TB'],
  },
  {
    nyckel: 'malning',
    timmarVidRef: 16,
    materialVidRef: 3000,
    skalar: true,
    egen: null,
    antagande: false,
    kallor: ['BE', 'BS'],
  },
  {
    nyckel: 'inredning',
    timmarVidRef: 8,
    materialVidRef: INREDNING_KR,
    skalar: false,
    egen: null,
    antagande: false,
    kallor: ['BE', 'BS'],
  },
  {
    nyckel: 'container',
    timmarVidRef: 0,
    materialVidRef: CONTAINER_KR,
    skalar: false,
    egen: 'bortforsling',
    antagande: true,
    kallor: ['TB'],
  },
];

/** Dagen underlaget läste källorna. */
export const PRISER_HAMTADE = '2026-09-28';

/**
 * Det läsaren kan göra själv (specen B5). Tätskikt, kakel, VVS och el kan
 * aldrig väljas (SOKORDSANALYS 8.3, BBV 26:1 § 1.5, Säker Vatten 2026:1,
 * Elsäkerhetsverket). Målningen kan inte väljas (8.3 efter 2026-09-29).
 * Monteringen av inredningen räknas inte som egen insats; bortforslingen gör
 * det (SEO-beslutet 2026-09-29, "Beslut efter bygget" punkt 1).
 */
export const EGEN_VAL: readonly Egen[] = ['rivning', 'bortforsling'];
export const NIVA_VAL: readonly Niva[] = ['enkel', 'mellan'];

/**
 * Standardvärdena: källornas badrum. En ägare av samma skäl som i rotavdrag.ts,
 * det försiktiga svaret. Standard ger 213 800 kr före rot, 35 640 kr i
 * rotavdrag och 178 160 kr att betala.
 */
export const STANDARD: BadrumIndata = {
  ytaKvm: 5,
  niva: 'enkel',
  egen: [],
  agare: 1,
  rotKr: 0,
  timprisKr: TIMPRIS_KR,
};

/**
 * Gränserna, inklusive.
 * ytaKvm: ANTAGANDE, fältets rimlighet. Belopp ges bara inom YTA_INTERVALL; en
 *   yta mellan gränserna men utanför intervallet är inget fel.
 * timprisKr: ANTAGANDE, fältets rimlighet.
 * rotKr: per ägare; taket i fältet är ROT_TAK_KR gånger antalet ägare.
 */
export const GRANSER = {
  ytaKvm: [1, 30],
  timprisKr: [300, 1500],
  rotKr: [0, ROT_TAK_KR],
} as const;

/* ------------------------------------------------------------------ *
 * Formatering
 * ------------------------------------------------------------------ */

/**
 * Högst två decimaler utan nollor på slutet, med decimalkomma: 5 → "5",
 * 4.5 → "4,5", 3.95 → "3,95", 4.125 → "4,13".
 */
export function kvmText(n: number): string {
  const rundat = Math.round((n + Number.EPSILON) * 100) / 100;
  return String(rundat).replace('.', ',');
}

/** Talet som det skrivs i en adress eller ett fält: decimalkomma, inga tusental. */
const komma = (n: number): string => String(n).replace('.', ',');

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

/* ------------------------------------------------------------------ *
 * Beskedets värden
 * ------------------------------------------------------------------ */

/**
 * Talen texterna får, som färdiga strängar. Beloppen är null vid utanfor.
 * andelArbete och perKvm är tillagda av utvecklaren: beskedets rad och
 * darfor['per-kvm'] behöver dem (specen 2.8).
 * När kanterna skiljer är talet ett spann, "202 304 till 218 304" (spannText).
 */
export interface BeskedVarden {
  utfall: Utfall;
  attBetala: string | null;
  foreRot: string | null;
  rot: string | null;
  kapat: string | null;
  /**
   * Den övre kanten av det gränsen stoppar, krText(hog.kapatKr), så att en
   * text kan säga "upp till X kr" i stället för ett spann från 0. Null vid utanfor.
   */
  kapatMax: string | null;
  arbete: string | null;
  material: string | null;
  container: string | null;
  andelArbete: string | null;
  perKvm: string | null;
  /** kvmText(ytaKvm). */
  yta: string;
  /** kvmText(YTA_INTERVALL[0]). */
  min: string;
  /** kvmText(YTA_INTERVALL[1]). */
  max: string;
  sida: 'under' | 'over' | null;
  agare: number;
  /** PRISER_HAMTADE som "28 september 2026". */
  hamtat: string;
}

export interface KortsvarBelopp {
  foreRot: string;
  rot: string;
  attBetala: string;
}

export interface KortsvarVarden {
  enkel4: KortsvarBelopp;
  enkel5: KortsvarBelopp;
  mellan4: KortsvarBelopp;
  mellan5: KortsvarBelopp;
  /** Procent arbete vid 5 kvm, enkel nivå. */
  andelArbete5: number;
  hamtat: string;
}

/** Kortsvaret i delar, så att sidan kan sätta <Markering> runt ett tal. */
export interface KortsvarDelar {
  fore: string;
  markering: string;
  efter: string;
}

/* ------------------------------------------------------------------ *
 * Texten. Allt läsaren ser och som modulen äger. Hantverkaren skriver.
 * Varje värde är platshållaren tills texten finns (specen 2.8).
 * ------------------------------------------------------------------ */

/** En regel i "Därför blev svaret så": texten och källornas koder. */
export interface RegelText {
  text: (v: BeskedVarden) => string;
  kallor: KallKod[];
}

export const TEXT = {
  /*
   * Beskedet överst i spalten. rubrik är en mening med ett verb som säger vad
   * läsaren ska göra. rad säger inte samma sak som rubriken.
   */
  besked: {
    belopp: {
      /* Vad läsaren ska räkna med att betala. Bär attBetala. */
      rubrik: (v: BeskedVarden): string => `Räkna med att betala ${v.attBetala ?? ''} kr för badrummet`,
      /* Arbetets andel, och att offerten ska ha samma poster. */
      rad: (v: BeskedVarden): string =>
        `Arbetet är ${(v.andelArbete ?? '').includes('till') ? `ungefär ${Math.round((v.andelArbete ?? '').split('till').reduce((sum, t) => sum + Number(t.replace(/\D/g, '')), 0) / 2)}` : (v.andelArbete ?? '')} procent av summan. Lägg offerten bredvid tabellen här under och jämför post för post.`,
    },
    tak: {
      /* Samma sak som vid belopp: vad läsaren ska räkna med att betala. Bär attBetala. */
      rubrik: (v: BeskedVarden): string =>
        `Räkna med ${v.attBetala ?? ''} kr, eftersom rotavdraget har nått sin gräns`,
      /*
       * Att gränsen för rotavdraget stoppar kapat kr, och vad två ägare eller
       * betalning efter nyår gör. Ordet "tak" står inte ensamt; det heter gräns.
       */
      rad: (v: BeskedVarden): string =>
        `Betalar du en del av jobbet efter nyår räknas den delen mot nästa års gräns. Annars hamnar ${(v.kapat ?? '').includes('till') ? 'upp till ' : ''}${v.kapatMax ?? ''} kr av avdraget utanför gränsen.`,
    },
    utanfor: {
      /* Vad läsaren ska göra i stället: begära offert. Bär yta. */
      rubrik: (v: BeskedVarden): string => `Begär en offert för ditt badrum på ${v.yta} kvm`,
      /* Att priserna bara gäller min till max kvm, och därför inget belopp. */
      rad: (v: BeskedVarden): string =>
        `Jag räknar bara på badrum på ${v.min} till ${v.max} kvm, så för ett ${v.sida === 'over' ? 'större' : 'mindre'} rum visar jag inget belopp.`,
    },
  } satisfies Record<Utfall, { rubrik: (v: BeskedVarden) => string; rad: (v: BeskedVarden) => string }>,

  /*
   * Formulärets legender, etiketter och hjälprader (specen avsnitt 3). Ordet
   * "tak" står inte ensamt där det kan betyda innertak eller rotavdragets
   * gräns; gränsen heter "gräns" i etiketter och hjälprader. Hjälpraderna visas
   * bara i fullt format, utom egen-hjalp.
   */
  form: {
    'legend-badrummet': 'Badrummet',
    yta: 'Golvyta',
    'yta-hjalp': `Mät golvet från vägg till vägg, med duschen eller badkaret inräknat. Belopp får du för golv på ${kvmText(YTA_INTERVALL[0])} till ${kvmText(YTA_INTERVALL[1])} kvm.`,
    'legend-inredning': 'Inredningen',
    'legend-egen': 'Det här gör du själv',
    /*
     * Alltid, också kompakt: tätskikt, kakel, VVS och el går inte att välja,
     * och varför. Räknaren får inte antyda att läsaren lägger tätskiktet själv.
     */
    'egen-hjalp':
      'Tätskikt, kakel och VVS går inte att välja, eftersom en firma inte kan intyga det du har gjort själv. Målningen gör en målare med ett godkänt våtrumssystem, och elen ska göras av en registrerad elfirma.',
    'legend-agare': 'Ägare och rotavdrag',
    'agare-1': 'En ägare',
    'agare-2': 'Två ägare',
    rot: 'Rotavdrag som redan är använt i år',
    'rot-hjalp': 'Skriv summan för alla som äger huset.',
    timpris: 'Timpris',
    'timpris-hjalp': `Står timpriset i en offert kan du skriva in det. Annars räknar jag med ${krText(TIMPRIS_KR)} kr i timmen.`,
  },

  /* Radioetiketterna för nivån. Säger vad som ingår, inte bara "enkel". */
  niva: {
    enkel: 'Toalett, handfat, dusch och blandare i standardutförande',
    mellan: 'Dyrare blandare, badkar och badrumsmöbler',
  } satisfies Record<Niva, string>,

  /*
   * Kryssrutornas etiketter för egen insats. SEO-beslutet 2026-09-29 gör
   * bortforslingen till egen insats i stället för monteringen; texten till
   * bortforsling är hantverkarens.
   */
  egen: {
    rivning: 'Rivningen av det gamla badrummet',
    bortforsling: 'Bortforslingen av avfallet (containern kostar ändå)',
  } satisfies Record<Egen, string>,

  /*
   * Postens namn i posttabellen. tatskikt-kakel bär orden tätskikt och kakel
   * (sidofraserna "kakla badrum pris" och "tätskikt badrum pris").
   */
  post: {
    rivning: 'Rivning',
    'tatskikt-kakel': 'Förarbeten, tätskikt och kakel',
    vvs: 'VVS',
    el: 'El',
    malning: 'Målning med våtrumsfärg av målare',
    inredning: 'Inredning och montering',
    container: 'Container och bortforsling',
  } satisfies Record<PostNyckel, string>,

  /* Markeringen i arbetscellen när läsaren gör posten själv, ett eller två ord. */
  postEgen: '(du själv)',
  /* Markeringen efter containerns namn, ett ord (ANTAGANDE). */
  postAntagande: '(uppskattat)',

  /* Feltexterna under fälten. Gränserna kommer in som tal. */
  fel: {
    yta: (min: number, max: number): string => `Skriv en golvyta mellan ${kvmText(min)} och ${kvmText(max)} kvm.`,
    agare: 'Välj en eller två ägare.',
    /* Gränsen för det antalet ägare kommer in som tal, ROT_TAK_KR gånger ägarna. */
    rot: (max: number): string =>
      `Skriv hur mycket rotavdrag som redan är använt i år. Med så många ägare som du har valt kan det vara högst ${krText(max)} kr.`,
    timpris: (min: number, max: number): string =>
      `Skriv ett timpris mellan ${krText(min)} och ${krText(max)} kr.`,
  },

  /* Resultatspalten (specen 4.3). Högst 700 tecken synlig text vid standardvärdena. */
  spalt: {
    'etikett-betala': 'Att betala efter rotavdrag',
    'rad-summa': (foreRot: string, rot: string): string =>
      `Före rotavdraget kostar det ${foreRot} kr, och avdraget är ${rot} kr.`,
    'rad-delning': (arbete: string, material: string, container: string): string =>
      `Arbetet kostar ${arbete} kr, materialet ${material} kr och containern ${container} kr.`,
    /*
     * Tre saker: varifrån priserna kommer, att de hämtades hamtat, och att
     * byggstädningen tillkommer och huset kan avvika. Förmedlarna nämns inte
     * vid namn.
     */
    'rad-kallor': (hamtat: string): string =>
      `Priserna hämtades den ${hamtat}, men de flesta vilar på en kalkyl från ${datumText(KALLOR.BE.datum.replace(/^\D*/, ''))} som inte är uppräknad. Byggstädningen tillkommer, och priset för ditt badrum kan avvika.`,
    pekrad: 'Så delar sig summan, post för post',
    'lank-rotavdrag': 'Räkna rotavdraget tillsammans med allt annat du har köpt i år',
    'lank-sa-raknar-jag': 'Källorna och det jag har antagit',
    /* Samma som på fasadyta och grannemedgivande. */
    'dela-etikett': 'Länk till ditt svar',
  },

  /* "Därför blev svaret så" (specen 4.4). */
  darfor: {
    'tabell-post': 'Post',
    'tabell-arbete': 'Arbete, kr',
    'tabell-material': 'Material, kr',
    summa: 'Summa',
    /* Rotavdraget, ett kort stycke under tabellen. Vid tak räcker inte procentsatsen. */
    rot: (v: BeskedVarden): string =>
      v.utfall === 'tak'
        ? `Rotavdraget blir ${v.rot ?? ''} kr. Det är mindre än ${ROT_PROCENT} procent av arbetet på ${v.arbete ?? ''} kr, eftersom gränsen nås.`
        : `Firman drar av ${ROT_PROCENT} procent av arbetet på ${v.arbete ?? ''} kr, vilket blir ${v.rot ?? ''} kr i rotavdrag.`,
    betala: (v: BeskedVarden): string =>
      `Summan på ${v.foreRot ?? ''} kr minus avdraget blir ${v.attBetala ?? ''} kr att betala.`,
    /* Vad en kvadratmeter till kostar (perKvm). Fungerar också om perKvm blir ett spann. */
    'per-kvm': (v: BeskedVarden): string =>
      `Är golvet en kvadratmeter större blir badrummet ${v.perKvm ?? ''} kr dyrare före rotavdraget.`,
    kallrad: 'Varifrån varje tal kommer',
    /* Vid utanfor, i stället för tabellen. */
    utanfor: (v: BeskedVarden): string =>
      `Ett badrum på ${v.yta} kvm ligger ${v.sida === 'over' ? 'över' : 'under'} det jag kan räkna på, så här blir det ingen tabell. En firma som har sett rummet ger dig ett bättre tal än jag kan.`,
  },

  /*
   * Reglerna i "Därför blev svaret så". Källorna är data.
   * Förmedlarna får inte nämnas vid namn i text; länken visar källans titel.
   * skalning och intervall är skrivna efter SEO-beslutet 2026-09-29 (4 till 8 kvm).
   */
  regel: {
    poster: {
      text: (_v: BeskedVarden): string =>
        `Varje post har sina timmar och sitt material i en offertförmedlares kalkyl för ett badrum med ${kvmText(REFERENSYTA_KVM)} kvm golv. Tätskiktet har ingen egen rad där utan ligger i förarbetena och plattsättningen, och därför står det ihop med kaklet i tabellen.`,
      kallor: ['BE'],
    },
    skalning: {
      text: (_v: BeskedVarden): string =>
        `Rivningen, tätskiktet med kaklet och målningen blir dyrare ju större golvet är. Under ${kvmText(REFERENSYTA_KVM)} kvm minskar de i samma takt som golvytan, och det är mitt antagande. Över ${kvmText(REFERENSYTA_KVM)} kvm tillkommer i stället det pris per extra kvadratmeter som en av förmedlarna anger, och det är lägre än vad varje kvadratmeter kostar i badrummet på ${kvmText(REFERENSYTA_KVM)} kvm. Därför sparar du mer på en kvadratmeter mindre än vad en kvadratmeter till kostar. VVS, el och inredning kostar lika mycket oavsett storlek.`,
      kallor: ['BE', 'BS'],
    },
    niva: {
      text: (_v: BeskedVarden): string =>
        `Valet av inredning ändrar bara vad den kostar att köpa, ${krText(INREDNING_KR.enkel)} eller ${krText(INREDNING_KR.mellan)} kr. Arbetet och de andra posterna är desamma. För dyrare inredning än så finns inga priser med källa, så räknaren tar inte med den.`,
      kallor: ['BE', 'BS'],
    },
    container: {
      text: (_v: BeskedVarden): string =>
        `Containern och bortforslingen kostar här ${krText(CONTAINER_KR)} kr, det högsta som en byggfirma anger för att köra bort avfallet, och beloppet är en uppskattning. Kör du bort avfallet själv står beloppet kvar, eftersom containern kostar lika mycket vem som än fyller den. Bortforsling ger inget rotavdrag.`,
      kallor: ['TB', 'SKV-RATT'],
    },
    stad: {
      text: (_v: BeskedVarden): string =>
        'Byggstädningen står inte med, eftersom ingen av källorna sätter ett pris på den. Den tillkommer på fakturan och ger rotavdrag.',
      kallor: ['SKV-RATT'],
    },
    'rot-arbete': {
      text: (v: BeskedVarden): string =>
        `Rotavdraget räknas på arbetet i alla poster, ${v.arbete ?? ''} kr i ditt badrum. Materialet och containern ger inget avdrag.`,
      kallor: ['SKV-ROT', 'SKV-RATT'],
    },
    'rot-tak': {
      text: (_v: BeskedVarden): string =>
        `Gränsen är ${krText(ROT_TAK_KR)} kr i rotavdrag per person och år, och äger ni huset tillsammans har ni var sin.`,
      kallor: ['SKV-ROT'],
    },
    'rot-slog-i': {
      text: (v: BeskedVarden): string =>
        `Här nås gränsen för i år, räknat med det rotavdrag som redan är använt, och ${(v.kapat ?? '').includes('till') ? 'upp till ' : ''}${v.kapatMax ?? ''} kr av avdraget hamnar utanför den.`,
      kallor: ['SKV-ROT'],
    },
    'egen-insats': {
      text: (_v: BeskedVarden): string =>
        'Det du gör själv ger inget rotavdrag, eftersom avdraget bara gäller arbete som du köper. Tätskiktet, kaklet och elen står kvar som firmans arbete.',
      kallor: ['SKV-ROT', 'BBV', 'ELSAK'],
    },
    intervall: {
      text: (v: BeskedVarden): string =>
        `Belopp får du för golv på ${v.min} till ${v.max} kvm. Förmedlaren som anger priset per extra kvadratmeter säger inte upp till vilken storlek det gäller, så gränsen vid ${v.max} kvm är min egen.`,
      kallor: ['BE', 'BS'],
    },
  } satisfies Record<RegelNyckel, RegelText>,

  /* "Gör inte det här", ett stycke per rad. */
  gorInte: {
    /* BBV 26:1 § 1.5: kvalitetsdokument kan inte utfärdas för eget arbete. */
    'tatskikt-sjalv':
      'Tätskiktet ingår i den största posten, så det är lätt att vilja spara just där. Gör det inte. Lägger du det själv får du inget kvalitetsdokument, och efter en vattenskada vill försäkringsbolaget se ett sådant.',
    /* Rot bara på arbete, inte på material eller container. Andra meningar än rotavdrag.ts. */
    'rot-pa-allt': `Offerten för ett badrum består till stor del av kakel, porslin, blandare och annat material, och den delen ger inget rotavdrag. Drar du ${ROT_PROCENT} procent av hela summan i huvudet räknar du med ett för stort avdrag och ett för lågt pris.`,
    /* Säker Vatten 4.4.5 och Elsäkerhetsverket. Visas när rivningen är egen insats. */
    'riva-sjalv':
      'Riv gärna kakel, klinker, matta och porslin själv, men låt golvbrunnen, rören och elen sitta kvar. En golvbrunn som är tillverkad före 1990 ska bytas vid renoveringen, och det gör VVS-firman. Elen kopplas bort av en registrerad elfirma.',
  } satisfies Record<GorInte, string>,

  /* Kolumnen Vad i antagandetabellen, en per rad i ANTAGANDEN (specen 4.5). */
  antagande: {
    'post-rivning': `Rivning vid ${kvmText(REFERENSYTA_KVM)} kvm`,
    'post-tatskikt-kakel': `Förarbeten, tätskikt och kakel vid ${kvmText(REFERENSYTA_KVM)} kvm`,
    'post-vvs': 'VVS',
    'post-el': 'El',
    'post-malning': `Målning med våtrumsfärg vid ${kvmText(REFERENSYTA_KVM)} kvm`,
    'post-inredning': 'Inredning och montering',
    'tatskikt-i-forarbeten': 'Var tätskiktet ligger i källans kalkyl',
    'andel-arbete': 'Hur arbete och material delas',
    timpris: 'Timpris',
    'timpris-moms': 'Moms i timpriset',
    'timpris-jamforelse': 'En byggfirmas timpriser före rotavdrag, som jämförelse',
    'eget-timpris': 'Ditt timpris',
    skalning: 'Hur priset följer golvytan',
    /* Att tillägget över 5 kvm är Byggstarts pris per extra kvadratmeter. Visas bara över 5 kvm. */
    'bs-tillagg': `Pris per extra kvadratmeter över ${kvmText(REFERENSYTA_KVM)} kvm`,
    /*
     * Att fördelningen av tillägget på arbete och material är vår, i samma
     * proportion som källans poster vid 5 kvm. Visas bara över 5 kvm.
     */
    'bs-fordelning': 'Hur tillägget fördelas på arbete och material',
    intervall: 'Golvytor som får ett belopp',
    container: 'Container och bortforsling',
    stad: 'Byggstädning',
    'ingen-dyr-niva': 'Inredning dyrare än i formuläret',
    'rivning-rot': 'Rotavdrag för rivningen',
    'rot-procent': 'Rotavdragets procentsats',
    'rot-grans': 'Rotavdragets gräns',
    'rut-skatt': 'Rutavdrag och skatt',
  } as Record<string, string>,

  /*
   * Tillagd av utvecklaren: kolumnen Värde för de rader i antagandetabellen
   * där värdet är ord och inte tal ur konstanterna (specen 4.5, "Värdet visar").
   * Talen i parametrarna byggs av konstanterna.
   */
  antagandeVarde: {
    'tatskikt-i-forarbeten': 'I förarbetena och plattsättningen',
    'andel-arbete': 'Källans timmar och belopp, med materialet uträknat per post',
    'timpris-moms': 'Ingår',
    'eget-timpris': (tim: string): string => `${tim} på alla poster`,
    /* Skrivet efter SEO-beslutet 2026-09-29: linjärt bara under referensytan. */
    skalning: (ref: string): string =>
      `Linjärt nedåt under ${ref} kvm, för rivning, tätskikt med kakel och målning`,
    /*
     * Värdet för bs-fordelning: tillägget delas på arbete och material i samma
     * proportion som källans poster vid 5 kvm (egen fördelning).
     */
    'bs-fordelning': `I samma proportion som källans poster vid ${kvmText(REFERENSYTA_KVM)} kvm, min egen fördelning`,
    intervall: (min: string, max: string): string => `${min} till ${max} kvm`,
    container: (kr: string): string => `${kr} kr, det högsta i firmans spann`,
    stad: 'Ingår inte, inget pris hittat',
    'ingen-dyr-niva': 'Räknas inte, källa saknas',
    'rivning-rot': 'Ja, min tolkning av Skatteverkets lista',
    'rot-grans': (kr: string): string => `${kr} kr per person och år`,
    'rut-skatt': 'Räknas inte in här',
  },

  /*
   * "Så räknar jag", en punkt per steg i specen 2.6 steg 1 till 4, med tal
   * som byggs av konstanterna. Steg 1 är skrivet efter SEO-beslutet 2026-09-29.
   */
  steg: [
    `Först jämför jag din golvyta med ${kvmText(REFERENSYTA_KVM)} kvm, som är golvet i det badrum som priserna är räknade för. Är golvet mindre räknar jag ned de poster som följer ytan, och är det större lägger jag till ett belopp för varje extra kvadratmeter.`,
    `Varje post får sina timmar gånger timpriset, ${krText(TIMPRIS_KR)} kr om du inte har skrivit in ett eget. Materialet läggs till för sig, och det du gör själv får noll timmar.`,
    'Arbetet, materialet och containern blir tillsammans summan före rotavdraget. Containern räknas med också när du kör bort avfallet själv.',
    'Rotavdraget dras av så långt gränsen räcker, och det som blir kvar är vad du betalar.',
  ] as string[],

  /*
   * Kortsvaret: tre till fem meningar, byggda av kortsvarVarden(). Vad 4 och
   * 5 kvm kostar i enkel och mellan, hur stor del som är arbete, vad
   * rotavdraget blir, och källorna som "förmedlare och en firma" med datum.
   * markering är talet som får <Markering>.
   */
  kortsvar: (v: KortsvarVarden): KortsvarDelar => ({
    fore: `Ett badrum med ${kvmText(REFERENSYTA_KVM)} kvm golv och inredning i standardutförande kostar ${v.enkel5.foreRot} kr att renovera, och när rotavdraget på ${v.enkel5.rot} kr har dragits av betalar du`,
    markering: `${v.enkel5.attBetala} kr`,
    efter: `. Med dyrare blandare, badkar och möbler betalar du ${v.mellan5.attBetala} kr, och med 4 kvm golv blir det ${v.enkel4.attBetala} kr med den enklare inredningen och ${v.mellan4.attBetala} kr med den dyrare, efter avdraget. Arbetet är ${v.andelArbete5} procent av summan. Priserna är offertförmedlarnas och en byggfirmas, och kalkylen bakom de flesta posterna ändrades senast den ${datumText(KALLOR.BE.datum.replace(/^\D*/, ''))}. Den är inte uppräknad till dagens nivå, så ett badrum i dag kan kosta mer.`,
  }),

  /* Publiceringsomgången (specen 9.2). Alt under 125 tecken. Skissen finns inte än. */
  skissAlt: `Skiss av ett badrum på ${kvmText(REFERENSYTA_KVM)} kvm ovanifrån, med kostnaden för att renovera badrummet efter rotavdraget`,
  skissBildtext: `Badrummet i källornas exempel har ${kvmText(REFERENSYTA_KVM)} kvm golv. De röda strecken visar golvbrunnen och tätskiktets kant längs väggarna, och det markerade talet är vad du betalar efter rotavdraget med räknarens standardvärden.`,
};

/* ------------------------------------------------------------------ *
 * Adressen
 * ------------------------------------------------------------------ */

const NYCKLAR = ['yta', 'niva', 'egen', 'agare', 'rot', 'timpris'] as const;

/**
 * Decimalkomma, mellanslag (också hårt) som tusentalsavgränsare, och ett
 * efterhängt kvm, m2, m², kr eller kr/h tas bort. Tomt eller skräp ger NaN.
 * Egen funktion: den i rotavdrag.ts exporteras inte.
 */
function tillTal(v: string | null): number {
  if (v === null) return NaN;
  const rensad = v
    .replace(/[\s  ]/g, '')
    .replace(/(kvm|m2|m²|kr\/h|kr)$/i, '')
    .replace(',', '.')
    .replace('−', '-');
  if (rensad === '') return NaN;
  return Number(rensad);
}

const arNiva = (v: string | null): v is Niva => v === 'enkel' || v === 'mellan';
const arEgen = (v: string): v is Egen => v === 'rivning' || v === 'bortforsling';

/** Läser adressen enligt specen 2.5. */
export function tolkaQuery(q: URLSearchParams): { indata: BadrumIndata; harIndata: boolean } {
  const harIndata = NYCKLAR.some((n) => q.has(n));

  const raYta = q.get('yta');
  const raNiva = q.get('niva');
  const valda = new Set(q.getAll('egen').filter(arEgen));
  const raAgare = q.get('agare');
  const raRot = q.get('rot');
  const raTimpris = q.get('timpris');

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
      ytaKvm: raYta === null ? STANDARD.ytaKvm : tillTal(raYta),
      niva: arNiva(raNiva) ? raNiva : STANDARD.niva,
      egen: EGEN_VAL.filter((e) => valda.has(e)),
      agare,
      rotKr: raRot === null ? STANDARD.rotKr : raRot.trim() === '' ? 0 : tillTal(raRot),
      timprisKr: raTimpris === null || raTimpris.trim() === '' ? STANDARD.timprisKr : tillTal(raTimpris),
    },
  };
}

/** Den delbara adressen: yta, niva, egen (en per val), agare, rot, timpris, tal med komma. */
export function delbarQuery(i: BadrumIndata): URLSearchParams {
  const q = new URLSearchParams();
  q.set('yta', komma(i.ytaKvm));
  q.set('niva', i.niva);
  for (const e of i.egen) q.append('egen', e);
  q.set('agare', String(i.agare));
  q.set('rot', komma(i.rotKr));
  q.set('timpris', komma(i.timprisKr));
  return q;
}

/**
 * Adressen till rotavdragsräknaren med värdena ifyllda. Nycklarna är dem
 * tolkaQuery i rotavdrag.ts läser. Vid ett spann skickas den övre kanten, så
 * att länken inte lovar för lite.
 */
export function rotavdragQuery(r: BadrumBelopp, i: BadrumIndata): URLSearchParams {
  const q = new URLSearchParams();
  q.set('arbete', String(r.hog.arbeteKr));
  q.set('material', String(r.hog.materialKr + r.hog.containerKr));
  q.set('agare', String(i.agare));
  q.set('rot', String(i.rotKr));
  return q;
}

/* ------------------------------------------------------------------ *
 * Räkningen
 * ------------------------------------------------------------------ */

const inom = (v: number, g: readonly [number, number]): boolean => Number.isFinite(v) && v >= g[0] && v <= g[1];

function gorInteFor(i: BadrumIndata): GorInte[] {
  const ut: GorInte[] = ['tatskikt-sjalv', 'rot-pa-allt'];
  if (i.egen.includes('rivning')) ut.push('riva-sjalv');
  return ut;
}

const materialVidRef = (p: PostDef, niva: Niva): number =>
  typeof p.materialVidRef === 'number' ? p.materialVidRef : p.materialVidRef[niva];

/**
 * De skalande posternas arbete och material vid REFERENSYTA_KVM, med ett givet
 * timpris och egen insats. Oavrundat.
 */
const skalandeVidRef = (timprisKr: number, egen: readonly Egen[], niva: Niva): number =>
  POSTER.filter((p) => p.skalar).reduce(
    (s, p) =>
      s + (p.egen !== null && egen.includes(p.egen) ? 0 : p.timmarVidRef * timprisKr) + materialVidRef(p, niva),
    0,
  );

/**
 * Källans skalande poster vid REFERENSYTA_KVM, med TIMPRIS_KR och utan egen
 * insats: 150 600 kr. Egen räkning ur POSTER (Källa BE), ingen ny konstant.
 */
const SKALANDE_VID_REF_KR = skalandeVidRef(TIMPRIS_KR, [], 'enkel');

/**
 * Faktorn för posterna som skalar.
 * Till och med REFERENSYTA_KVM: yta / REFERENSYTA_KVM (ANTAGANDE, linjärt).
 * Över: 1 + (yta − REFERENSYTA_KVM) · tillägg / SKALANDE_VID_REF_KR. Med
 * standardvärdena blir summan exakt BE vid 5 kvm plus BS:s tillägg för varje
 * extra kvadratmeter, före avrundningen per post. Tillägget fördelas på
 * posternas arbete och material i BE:s proportioner (ANTAGANDE, se
 * BS_PER_EXTRA_KVM_KR), och följer läsarens timpris och egen insats.
 */
function skalfaktor(ytaKvm: number, tillaggPerKvmKr: number): number {
  return ytaKvm <= REFERENSYTA_KVM
    ? ytaKvm / REFERENSYTA_KVM
    : 1 + ((ytaKvm - REFERENSYTA_KVM) * tillaggPerKvmKr) / SKALANDE_VID_REF_KR;
}

/**
 * Posterna, summorna och rotavdraget utan intervallkontroll och utan
 * validering (specen 2.6 steg 1 till 9), för båda kanterna av BS:s tillägg.
 * raknaBadrumKostnad anropar den efter båda kontrollerna.
 */
export function raknaPoster(i: BadrumIndata): BadrumBelopp {
  const lag = raknaKant(i, BS_PER_EXTRA_KVM_KR[0]);
  const hog = raknaKant(i, BS_PER_EXTRA_KVM_KR[1]);

  // Steg 5. Utfallet följer den övre kanten.
  const utfall: 'belopp' | 'tak' = hog.begransad ? 'tak' : 'belopp';

  // Steg 8 och 9.
  const regler: RegelNyckel[] = ['poster', 'skalning', 'niva', 'container', 'stad', 'rot-arbete', 'rot-tak'];
  if (utfall === 'tak') regler.push('rot-slog-i');
  if (i.egen.length > 0) regler.push('egen-insats');

  return {
    status: 'ok',
    utfall,
    ...lag,
    hog,
    spann: i.ytaKvm > REFERENSYTA_KVM,
    gorInteDetHar: gorInteFor(i),
    regler,
  };
}

/** En kant: BS:s tillägg per extra kvadratmeter som ett tal. */
function raknaKant(i: BadrumIndata, tillaggPerKvmKr: number): BadrumSiffror {
  // Steg 1 och 2. Faktorn, och varje post avrundad för sig.
  const poster: PostRad[] = POSTER.map((p) => {
    const faktor = p.skalar ? skalfaktor(i.ytaKvm, tillaggPerKvmKr) : 1;
    const timmar = p.timmarVidRef * faktor;
    const egenInsats = p.egen !== null && i.egen.includes(p.egen);
    const arbeteKr = egenInsats ? 0 : Math.round(timmar * i.timprisKr);
    const materialKr =
      p.nyckel === 'inredning'
        ? INREDNING_KR[i.niva]
        : p.nyckel === 'container'
          ? CONTAINER_KR
          : typeof p.materialVidRef === 'number'
            ? Math.round(p.materialVidRef * faktor)
            : Math.round(p.materialVidRef[i.niva] * faktor);
    return { nyckel: p.nyckel, arbeteKr, materialKr, timmar, egenInsats };
  });

  // Steg 3. Summorna.
  const arbeteKr = poster.reduce((s, p) => s + p.arbeteKr, 0);
  const containerKr = poster.filter((p) => p.nyckel === 'container').reduce((s, p) => s + p.materialKr, 0);
  const materialKr = poster.filter((p) => p.nyckel !== 'container').reduce((s, p) => s + p.materialKr, 0);
  const foreRotKr = arbeteKr + materialKr + containerKr;

  // Steg 4. Rotavdraget, genom rotavdrag.ts (specen B7).
  const rot = raknaRotavdrag({
    arbetskostnadKr: arbeteKr,
    materialkostnadKr: materialKr + containerKr,
    antalAgare: i.agare,
    utnyttjatRotKr: i.rotKr,
    utnyttjatRutKr: 0,
    skattKr: null,
  });
  if (rot.status !== 'ok') throw new Error('[renovering] Rotavdraget ska alltid gå att räkna på giltig indata');
  const rotKr = rot.avdragKr;
  const attBetalaKr = foreRotKr - rotKr;

  // Steg 6. En kvadratmeter till, före rot, med läsarens egen insats och
  // timpris. Under referensytan den linjära takten, från den BS:s tillägg.
  const vidRef = skalandeVidRef(i.timprisKr, i.egen, i.niva);
  const perKvmKr = Math.round(
    i.ytaKvm < REFERENSYTA_KVM ? vidRef / REFERENSYTA_KVM : (tillaggPerKvmKr * vidRef) / SKALANDE_VID_REF_KR,
  );

  // Steg 7. Arbetets andel.
  const andelArbeteProcent = Math.round((arbeteKr / foreRotKr) * 100);

  return {
    poster,
    arbeteKr,
    materialKr,
    containerKr,
    foreRotKr,
    rotKr,
    raktRotKr: rot.raktAvdragKr,
    kapatKr: rot.kapatKr,
    attBetalaKr,
    andelArbeteProcent,
    perKvmKr,
    begransad: rot.begransatAv !== 'procent',
  };
}

export function raknaBadrumKostnad(i: BadrumIndata): BadrumResultat {
  const fel: Partial<Record<FelNyckel, string>> = {};

  if (!inom(i.ytaKvm, GRANSER.ytaKvm)) fel.yta = TEXT.fel.yta(GRANSER.ytaKvm[0], GRANSER.ytaKvm[1]);
  const agareGiltig = i.agare === 1 || i.agare === 2;
  if (!agareGiltig) fel.agare = TEXT.fel.agare;
  if (!inom(i.timprisKr, GRANSER.timprisKr)) {
    fel.timpris = TEXT.fel.timpris(GRANSER.timprisKr[0], GRANSER.timprisKr[1]);
  }
  /* Gränsen för det antalet ägare. Är ägarfältet fel vägs rot mot den största gränsen fältet tar. */
  const rotMax = GRANSER.rotKr[1] * (agareGiltig ? i.agare : 2);
  if (!(Number.isFinite(i.rotKr) && i.rotKr >= GRANSER.rotKr[0] && i.rotKr <= rotMax)) {
    fel.rot = TEXT.fel.rot(rotMax);
  }
  if (Object.keys(fel).length > 0) return { status: 'ogiltig', fel };

  if (i.ytaKvm < YTA_INTERVALL[0] || i.ytaKvm > YTA_INTERVALL[1]) {
    return {
      status: 'ok',
      utfall: 'utanfor',
      sida: i.ytaKvm < YTA_INTERVALL[0] ? 'under' : 'over',
      gorInteDetHar: ['tatskikt-sjalv'],
      regler: ['intervall', 'skalning'],
    };
  }

  return raknaPoster(i);
}

/* ------------------------------------------------------------------ *
 * Värdena till texterna
 * ------------------------------------------------------------------ */

/** Talen beskedet, reglerna och "Därför blev svaret så" får, som färdiga strängar. */
export function beskedVarden(r: BadrumOk, i: BadrumIndata): BeskedVarden {
  const gemensamt = {
    utfall: r.utfall,
    yta: kvmText(i.ytaKvm),
    min: kvmText(YTA_INTERVALL[0]),
    max: kvmText(YTA_INTERVALL[1]),
    agare: i.agare,
    hamtat: datumText(PRISER_HAMTADE),
  };
  if (r.utfall === 'utanfor') {
    return {
      ...gemensamt,
      attBetala: null,
      foreRot: null,
      rot: null,
      kapat: null,
      kapatMax: null,
      arbete: null,
      material: null,
      container: null,
      andelArbete: null,
      perKvm: null,
      sida: r.sida,
    };
  }
  const h = r.hog;
  return {
    ...gemensamt,
    attBetala: spannText(r.attBetalaKr, h.attBetalaKr),
    foreRot: spannText(r.foreRotKr, h.foreRotKr),
    rot: spannText(r.rotKr, h.rotKr),
    kapat: spannText(r.kapatKr, h.kapatKr),
    kapatMax: krText(h.kapatKr),
    arbete: spannText(r.arbeteKr, h.arbeteKr),
    material: spannText(r.materialKr, h.materialKr),
    container: spannText(r.containerKr, h.containerKr),
    andelArbete: spannText(r.andelArbeteProcent, h.andelArbeteProcent, String),
    perKvm: spannText(r.perKvmKr, h.perKvmKr),
    sida: null,
  };
}

/**
 * Ett tal, eller ett spann när kanterna skiljer: "202 304 till 218 304".
 * Den minsta kanten först.
 */
export function spannText(a: number, b: number, format: (n: number) => string = krText): string {
  const { lag, hog } = spannDelar(a, b, format);
  return hog === null ? lag : `${lag} till ${hog}`;
}

/**
 * Samma spann i två delar, så att sidan kan sätta varje tal i ett eget
 * element utan radbrytning och låta raden brytas före "till". hog är null
 * när kanterna är lika.
 */
export function spannDelar(
  a: number,
  b: number,
  format: (n: number) => string = krText,
): { lag: string; hog: string | null } {
  const [lag, hog] = a <= b ? [a, b] : [b, a];
  return { lag: format(lag), hog: lag === hog ? null : format(hog) };
}

/**
 * Kronor med hårt mellanslag (U+00A0) som tusentalsavgränsare, så att
 * "258 596" aldrig bryts mitt i. kronor() i rotavdrag.ts skriver vanliga
 * mellanslag och rörs inte.
 */
export function krText(n: number): string {
  return kronor(n).replace(/ /g, '\u00a0');
}

/** Talen kortsvaret byggs av, räknade med STANDARD. Skrivs aldrig för hand. */
export function kortsvarVarden(): KortsvarVarden {
  const belopp = (ytaKvm: number, niva: Niva): KortsvarBelopp => {
    const r = raknaPoster({ ...STANDARD, ytaKvm, niva });
    return { foreRot: krText(r.foreRotKr), rot: krText(r.rotKr), attBetala: krText(r.attBetalaKr) };
  };
  return {
    enkel4: belopp(4, 'enkel'),
    enkel5: belopp(5, 'enkel'),
    mellan4: belopp(4, 'mellan'),
    mellan5: belopp(5, 'mellan'),
    andelArbete5: raknaPoster({ ...STANDARD, ytaKvm: 5, niva: 'enkel' }).andelArbeteProcent,
    hamtat: datumText(PRISER_HAMTADE),
  };
}

/* ------------------------------------------------------------------ *
 * Antagandetabellen (specen 4.5)
 * ------------------------------------------------------------------ */

export interface AntagandeDef {
  nyckel: string;
  /** Byggs av konstanterna, aldrig för hand. */
  varde: (i: BadrumIndata) => string;
  typ: 'Källa' | 'Antagande';
  /** Tom för ett antagande utan källa. */
  kallor: KallKod[];
}

export interface AntagandeRad {
  nyckel: string;
  varde: string;
  typ: 'Källa' | 'Antagande';
  kallor: KallKod[];
}

const postDef = (nyckel: PostNyckel): PostDef => {
  const p = POSTER.find((d) => d.nyckel === nyckel);
  if (!p) throw new Error(`[renovering] Posten ${nyckel} saknas i POSTER`);
  return p;
};

/** "32 h, 0 kr": timmar och material vid referensytan. */
const postVarde = (nyckel: PostNyckel, i: BadrumIndata): string => {
  const p = postDef(nyckel);
  const material = typeof p.materialVidRef === 'number' ? p.materialVidRef : p.materialVidRef[i.niva];
  return `${kvmText(p.timmarVidRef)} h, ${krText(material)} kr`;
};

/** "500 kr/h, 687,50 kr/h". */
const kronorPerTimme = (n: number): string =>
  `${Number.isInteger(n) ? krText(n) : n.toFixed(2).replace('.', ',')} kr/h`;

export const ANTAGANDEN: AntagandeDef[] = [
  { nyckel: 'post-rivning', varde: (i) => postVarde('rivning', i), typ: 'Källa', kallor: postDef('rivning').kallor },
  {
    nyckel: 'post-tatskikt-kakel',
    varde: (i) => postVarde('tatskikt-kakel', i),
    typ: 'Källa',
    kallor: postDef('tatskikt-kakel').kallor,
  },
  { nyckel: 'post-vvs', varde: (i) => postVarde('vvs', i), typ: 'Källa', kallor: postDef('vvs').kallor },
  { nyckel: 'post-el', varde: (i) => postVarde('el', i), typ: 'Källa', kallor: postDef('el').kallor },
  { nyckel: 'post-malning', varde: (i) => postVarde('malning', i), typ: 'Källa', kallor: postDef('malning').kallor },
  /* BE för enkel, BS för mellan; antagandenFor behåller den som gäller. */
  { nyckel: 'post-inredning', varde: (i) => postVarde('inredning', i), typ: 'Källa', kallor: ['BE', 'BS'] },
  {
    nyckel: 'tatskikt-i-forarbeten',
    varde: () => TEXT.antagandeVarde['tatskikt-i-forarbeten'],
    typ: 'Antagande',
    kallor: ['BE'],
  },
  /* Antagande: delningen per post är egen räkning ur BE (SEO-beslutet 2026-09-29). */
  { nyckel: 'andel-arbete', varde: () => TEXT.antagandeVarde['andel-arbete'], typ: 'Antagande', kallor: ['BE'] },
  { nyckel: 'timpris', varde: () => kronorPerTimme(TIMPRIS_KR), typ: 'Källa', kallor: ['BE'] },
  { nyckel: 'timpris-moms', varde: () => TEXT.antagandeVarde['timpris-moms'], typ: 'Antagande', kallor: ['BE'] },
  {
    nyckel: 'timpris-jamforelse',
    varde: () => SF_TIMPRIS_FORE_ROT_KR.map(kronorPerTimme).join(', '),
    typ: 'Källa',
    kallor: ['SF'],
  },
  {
    nyckel: 'eget-timpris',
    varde: (i) => TEXT.antagandeVarde['eget-timpris'](kronorPerTimme(i.timprisKr)),
    typ: 'Antagande',
    kallor: [],
  },
  {
    nyckel: 'skalning',
    varde: () => TEXT.antagandeVarde.skalning(kvmText(REFERENSYTA_KVM)),
    typ: 'Antagande',
    kallor: ['BE', 'BS'],
  },
  /* bs-tillagg och bs-fordelning visas bara när ytan är över referensytan, alltså vid ett spann. */
  {
    nyckel: 'bs-tillagg',
    varde: () =>
      `${krText(BS_PER_EXTRA_KVM_KR[0])} till ${krText(BS_PER_EXTRA_KVM_KR[1])} kr per kvm över ${kvmText(REFERENSYTA_KVM)} kvm`,
    typ: 'Källa',
    kallor: ['BS'],
  },
  {
    nyckel: 'bs-fordelning',
    varde: () => TEXT.antagandeVarde['bs-fordelning'],
    typ: 'Antagande',
    kallor: ['BE', 'BS'],
  },
  {
    nyckel: 'intervall',
    varde: () => TEXT.antagandeVarde.intervall(kvmText(YTA_INTERVALL[0]), kvmText(YTA_INTERVALL[1])),
    typ: 'Antagande',
    kallor: ['BE', 'BS'],
  },
  {
    nyckel: 'container',
    varde: () => TEXT.antagandeVarde.container(krText(CONTAINER_KR)),
    typ: 'Antagande',
    kallor: ['TB'],
  },
  { nyckel: 'stad', varde: () => TEXT.antagandeVarde.stad, typ: 'Antagande', kallor: [] },
  { nyckel: 'ingen-dyr-niva', varde: () => TEXT.antagandeVarde['ingen-dyr-niva'], typ: 'Antagande', kallor: [] },
  { nyckel: 'rivning-rot', varde: () => TEXT.antagandeVarde['rivning-rot'], typ: 'Antagande', kallor: ['SKV-RATT'] },
  { nyckel: 'rot-procent', varde: () => `${ROT_PROCENT} procent`, typ: 'Källa', kallor: ['SKV-ROT'] },
  {
    nyckel: 'rot-grans',
    varde: () => TEXT.antagandeVarde['rot-grans'](krText(ROT_TAK_KR)),
    typ: 'Källa',
    kallor: ['SKV-ROT'],
  },
  { nyckel: 'rut-skatt', varde: () => TEXT.antagandeVarde['rut-skatt'], typ: 'Antagande', kallor: [] },
];

/**
 * Källorna som står vid namn under en regel: allt utom förmedlarna, som bara
 * namnges i antagandetabellen (checklistans fälla). Tom lista betyder att
 * regeln pekar ner till "Vad siffrorna vilar på" i stället.
 */
export function regelKallor(nyckel: RegelNyckel): KallaRef[] {
  return TEXT.regel[nyckel].kallor.map((k) => KALLOR[k]).filter((k) => k.slag !== 'förmedlare');
}

/** Raderna ur ANTAGANDEN som svaret vilar på, i tabellens ordning (specen 4.5). */
export function antagandenFor(r: BadrumOk, i: BadrumIndata): AntagandeRad[] {
  const belopp = r.utfall !== 'utanfor';
  const standardTimpris = i.timprisKr === TIMPRIS_KR;
  const galler = new Set<string>(['skalning', 'intervall']);
  if (standardTimpris) {
    galler.add('timpris');
    galler.add('timpris-moms');
    galler.add('timpris-jamforelse');
  } else {
    galler.add('eget-timpris');
  }
  if (belopp) {
    for (const n of [
      'post-rivning',
      'post-tatskikt-kakel',
      'post-vvs',
      'post-el',
      'post-malning',
      'post-inredning',
      'tatskikt-i-forarbeten',
      'andel-arbete',
      'container',
      'stad',
      'ingen-dyr-niva',
      'rot-procent',
      'rot-grans',
      'rut-skatt',
    ]) {
      galler.add(n);
    }
    if (!i.egen.includes('rivning')) galler.add('rivning-rot');
    /* Över referensytan är svaret ett spann, och tillägget per kvm kommer från BS. */
    if (r.spann) {
      galler.add('bs-tillagg');
      galler.add('bs-fordelning');
    }
  }
  return ANTAGANDEN.filter((a) => galler.has(a.nyckel)).map((a) => ({
    nyckel: a.nyckel,
    varde: a.varde(i),
    typ: a.typ,
    kallor: a.nyckel === 'post-inredning' ? [i.niva === 'enkel' ? 'BE' : 'BS'] : a.kallor,
  }));
}

/* ================================================================== *
 * Köket
 *
 * /rakna/kok-kostnad/, specen docs/briefer/spec-kalkyl-kok-kostnad-2026-09-29.md.
 * Underlaget är docs/briefer/faktablad/rakna-kok-kostnad.md, och SEO-besluten
 * står i docs/briefer/seo-checklista-2026-09-29/raknare.md: en källa per post,
 * nytt kök bara i enkel nivå, inga stommar i mellan- och högnivå, ingen
 * container, ingen folie och inte Ikeas montering.
 *
 * Varje belopp räknas i två kanter, en nedre med alla nedre tal och en övre med
 * alla övre (specen K4). Ingen post får ett medelvärde.
 * ================================================================== */

/* ------------------------------------------------------------------ *
 * Typer
 * ------------------------------------------------------------------ */

export type KokVag = 'luckor' | 'bankskiva' | 'luckor-bankskiva' | 'nytt';
export type KokNiva = 'enkel' | 'mellan' | 'hog';
export type KokMaterial = 'laminat' | 'tra' | 'komposit';
export type KokGangjarn = 'nya' | 'behall';
export type KokFlytt = 'el' | 'diskbank';
export type KokEgen = 'montering' | 'rivning';

export interface KokIndata {
  vag: KokVag;
  antalLuckor: number;
  /** Luckornas prisnivå. Ignoreras i väg nytt, som bara räknas i enkel nivå. */
  niva: KokNiva;
  gangjarn: KokGangjarn;
  /** Bänkskivans längd i löpmeter, och i väg nytt också skåpradens längd. */
  meter: number;
  material: KokMaterial;
  /** Unik, i ordningen i KOK_FLYTT_VAL. Gäller bara väg nytt. */
  flytt: KokFlytt[];
  /** Unik, i ordningen i KOK_EGEN_VAL. */
  egen: KokEgen[];
  /** Som BadrumIndata.agare: ett annat tal än 1 och 2 ger fel på fältet. */
  agare: number;
  /** Utnyttjat rot i år, alla ägare tillsammans. */
  rotKr: number;
}

export type KokFelNyckel = 'luckor' | 'meter' | 'agare' | 'rot';

export type KokPostNyckel = 'rivning' | 'stommar' | 'luckor' | 'gangjarn' | 'bankskiva' | 'vitvaror' | 'el' | 'vvs';

export interface KokPostRad {
  nyckel: KokPostNyckel;
  /** 0 när arbete inte är 'belopp'. */
  arbeteKr: number;
  materialKr: number;
  /**
   * belopp: arbetet är talet. egen: läsaren gör det själv. ingar: arbetet ingår
   * i en annan post. inget: arbetet räknas inte (vitvarornas installation).
   */
  arbete: 'belopp' | 'egen' | 'ingar' | 'inget';
}

export type KokUtfall = 'belopp' | 'tak';
export type KokGorInte = 'rot-pa-allt' | 'rot-villkor' | 'verkstad-rot' | 'el-sjalv' | 'vvs-intyg' | 'riva-sjalv';
export type KokRegelNyckel =
  | 'luckor-pris'
  | 'luckor-montering'
  | 'gangjarn'
  | 'bankskiva'
  | 'nytt-enkel'
  | 'flytt'
  | 'spann'
  | 'tillkommer'
  | 'rot-arbete'
  | 'rot-luckor'
  | 'rot-villkor'
  | 'rot-delat'
  | 'rot-tak'
  | 'rot-slog-i'
  | 'egen-insats';

/**
 * Rotavdraget i svaret (specen K10). saker: allt arbete ger avdrag. villkor:
 * bara villkorat arbete, bänkskivans montering. delat: luckornas montering ger
 * avdrag, bänkskivans är villkorad.
 */
export type KokRotLage = 'saker' | 'villkor' | 'delat';

/** Vad det blir om också det villkorade arbetet ger avdrag (specen K10). */
export interface KokVillkorSiffror {
  rotKr: number;
  kapatKr: number;
  attBetalaKr: number;
}

/** Talen för en kant. */
export interface KokSiffror {
  /** I postordningen i specen 2.6, bara de poster vägen har. */
  poster: KokPostRad[];
  arbeteKr: number;
  materialKr: number;
  foreRotKr: number;
  /** Arbete som ger rotavdrag i svaret. arbeteSakertKr + arbeteVillkorKr = arbeteKr. */
  arbeteSakertKr: number;
  /** Bänkskivans montering i vägarna bankskiva och luckor-bankskiva (specen K10). */
  arbeteVillkorKr: number;
  /** Svaret: rotavdraget räknat på arbeteSakertKr. */
  rotKr: number;
  raktRotKr: number;
  kapatKr: number;
  attBetalaKr: number;
  andelArbeteProcent: number;
  begransad: boolean;
  /** Rotavdraget på allt arbete. null när arbeteVillkorKr är 0. */
  villkor: KokVillkorSiffror | null;
}

export type KokResultat =
  | ({
      status: 'ok';
      /** tak när den övre kanten når rotavdragets gräns. */
      utfall: KokUtfall;
      /** Talen på översta nivån är den nedre kanten, hog den övre. */
      hog: KokSiffror;
      /** Sant när totalerna skiljer mellan kanterna. */
      spann: boolean;
      /**
       * Satt ur den övre kanten (specen K10): villkor när bara villkorat
       * arbete finns, delat när både säkert och villkorat finns, annars saker.
       */
      rotLage: KokRotLage;
      gorInteDetHar: KokGorInte[];
      regler: KokRegelNyckel[];
    } & KokSiffror)
  | { status: 'ogiltig'; fel: Partial<Record<KokFelNyckel, string>> };

export type KokOk = Extract<KokResultat, { status: 'ok' }>;

/* ------------------------------------------------------------------ *
 * Konstanter. Källa eller ANTAGANDE i kommentaren över varje. Alla belopp
 * är i kronor inklusive moms.
 * ------------------------------------------------------------------ */

/**
 * Pris per lucka, 696 × 596 mm, per prisnivå (specen K2).
 * Källa: VED, Vedum, luckprislista 2026, s. 12, "inklusive moms", läst
 * 2026-09-28: prisgrupp 1 390 kr, prisgrupp 5 1 444 kr, prisgrupp 10 3 673 kr.
 * Gångjärn ingår inte i priset.
 */
export const KOK_LUCKA_KR: Record<KokNiva, number> = { enkel: 390, mellan: 1444, hog: 3673 };

/** Vedums prisgrupp bakom varje nivå. Källa: VED, samma sida som KOK_LUCKA_KR. */
export const KOK_LUCKA_PRISGRUPP: Record<KokNiva, number> = { enkel: 1, mellan: 5, hog: 10 };

/** Gångjärn per styck. Källa: VED, Vedums gångjärn från Grass, 169 kr styck. */
export const KOK_GANGJARN_KR = 169;

/** Gångjärn per lucka. Källa: IKEA, luckorna: "Komplettera med 2 gångjärn". */
export const KOK_GANGJARN_PER_LUCKA = 2;

/**
 * Monteringen av luckorna, fast pris före rotavdraget.
 * Källa: TB-LUCKOR, Totalbyggarna, byta köksluckor på befintlig stomme, läst
 * 2026-09-28: 5 250 kr efter rotavdraget för 15 debiterbara timmar, 350 kr/h.
 * Före avdraget är egen räkning med ROT_PROCENT, 5 250 / (1 − ROT_PROCENT / 100).
 */
export const KOK_LUCKOR_MONTERING_KR = 7500;

/**
 * Hur många luckor det fasta priset räcker till. Över det växer monteringen i
 * proportion till antalet luckor.
 * ANTAGANDE. Grund: HK-LUCKOR, Hantverkskollen, "15–20 luckor" tar 6 till 10
 * timmar, alltså ett vanligt kök. Under gränsen står det fasta priset kvar, så
 * räknaren lovar inte för lite för ett litet kök.
 */
export const KOK_LUCKOR_FAST_MAX = 20;

/**
 * Bänkskivans material per löpmeter, 60 till 63 cm djup, nedre och övre kant.
 * Källa: KIT, Kitchens.se, vad kostar en bänkskiva, maj 2026: laminat 500 till
 * 1 500, massivt trä 1 200 till 3 500, kvartskomposit 2 000 till 5 000 kr.
 * Samma tal ska stå på /kok/byta-bankskiva/ (checklistans tillägg 4).
 */
export const KOK_BANKSKIVA_KR_PER_LM: Record<KokMaterial, readonly [number, number]> = {
  laminat: [500, 1500],
  tra: [1200, 3500],
  komposit: [2000, 5000],
};

/**
 * Monteringen av bänkskivan per löpmeter, nedre och övre kant.
 * Källa: TB-BANK, Totalbyggarna, bänkskiva i köket, 2026-03-30: "500–2 000 kr
 * per löpmeter".
 */
export const KOK_BANKSKIVA_MONTERING_KR_PER_LM = [500, 2000] as const;

/**
 * Ikea Metod, delarna till en 60 cm bred modul. Källa: IKEA, priser på
 * ikea.com 2026-09-28: bänkskåp 60 × 60 × 80 599 kr, väggskåp 60 × 37 × 80
 * 509 kr, lucka Veddinge 60 × 80 439 kr (två per modul), Utrusta gångjärn
 * 159 kr för två (två par per modul).
 * ANTAGANDE: ett bänkskåp och ett väggskåp med två luckor per 60 cm, och
 * väggskåpen är lika långa som bänkskåpen. Ben, sockel, täcksidor, lådor,
 * upphängningsskena och handtag ingår inte.
 */
export const KOK_IKEA_BANKSKAP_KR = 599;
export const KOK_IKEA_VAGGSKAP_KR = 509;
export const KOK_IKEA_LUCKA_KR = 439;
export const KOK_IKEA_GANGJARN_PAR_KR = 159;
export const KOK_IKEA_MODUL_CM = 60;
export const KOK_IKEA_MODUL_KR =
  KOK_IKEA_BANKSKAP_KR + KOK_IKEA_VAGGSKAP_KR + 2 * KOK_IKEA_LUCKA_KR + 2 * KOK_IKEA_GANGJARN_PAR_KR;

/** Stommar och luckor per meter kök, egen räkning ur KOK_IKEA_MODUL_KR: 3 840 kr. */
export const KOK_STOMMAR_KR_PER_M = Math.round((KOK_IKEA_MODUL_KR * 100) / KOK_IKEA_MODUL_CM);

/**
 * Monteringen av ett nytt kök före rotavdraget, nedre och övre kant.
 * Källa: TB-IKEA, Totalbyggarna, vad kostar ett IKEA-kök, uppdaterad
 * 2026-06-29: litet kök 15 000–20 000, mellan 20 000–30 000, stort 25 000–40 000.
 * ANTAGANDE: hela spannet, från det lägsta för ett litet kök till det högsta
 * för ett stort, eftersom källan anger storleken utan mått (specen K5).
 * Monteringen av bänkskivan ingår (underlagets formel för väg C).
 */
export const KOK_MONTERING_KR = [15000, 40000] as const;

/**
 * Vitvaror, budgetpaket, material.
 * Källa: TB-IKEA, Totalbyggarna, vad kostar ett IKEA-kök, uppdaterad
 * 2026-06-29: "15 000–25 000". Installationen räknas inte (specen K5).
 */
export const KOK_VITVAROR_KR = [15000, 25000] as const;

/**
 * Rivning av det gamla köket, arbete.
 * Källa: HK-KOK, Hantverkskollen, komplett guide till köksrenovering 2026,
 * uppdaterad 2026-07-17: rivning 8 000–18 000 kr, rotberättigad.
 */
export const KOK_RIVNING_KR = [8000, 18000] as const;

/**
 * Ny elgrupp när planlösningen ändras, arbete.
 * Källa: HK-NYTT, Hantverkskollen, nytt kök från grunden, uppdaterad
 * 2026-07-17: ny grupp 5 000–15 000 kr.
 * ANTAGANDE: bara arbete (underlaget 3h).
 */
export const KOK_EL_KR = [5000, 15000] as const;

/**
 * Flytt av diskbänken, arbete.
 * Källa: HK-NYTT, Hantverkskollen, nytt kök från grunden, uppdaterad
 * 2026-07-17: flytt av diskbänk 5 000–20 000 kr.
 * ANTAGANDE: bara arbete (underlaget 3h).
 */
export const KOK_VVS_KR = [5000, 20000] as const;

/** Dagen underlaget läste källorna. */
export const KOK_PRISER_HAMTADE = '2026-09-28';

export const KOK_VAG_VAL: readonly KokVag[] = ['luckor', 'bankskiva', 'luckor-bankskiva', 'nytt'];
export const KOK_NIVA_VAL: readonly KokNiva[] = ['enkel', 'mellan', 'hog'];
export const KOK_MATERIAL_VAL: readonly KokMaterial[] = ['laminat', 'tra', 'komposit'];
export const KOK_GANGJARN_VAL: readonly KokGangjarn[] = ['nya', 'behall'];
export const KOK_FLYTT_VAL: readonly KokFlytt[] = ['el', 'diskbank'];
/**
 * Det läsaren kan göra själv (specen K7). El och VVS kan aldrig väljas
 * (Elsäkerhetsverket; Säker Vatten 2026:1 för intyget).
 */
export const KOK_EGEN_VAL: readonly KokEgen[] = ['montering', 'rivning'];

/**
 * Standardvärdena: värdartikelns kök med 16 luckor (underlagets exempel 1) och
 * en bänkskiva på 4 meter (exempel 3). En ägare, det försiktiga svaret.
 * Standard ger 19 148 kr före rot, 2 250 kr i rotavdrag och 16 898 kr att
 * betala, samma tal som tabellen i /kok/byta-koksluckor/.
 */
export const KOK_STANDARD: KokIndata = {
  vag: 'luckor',
  antalLuckor: 16,
  niva: 'enkel',
  gangjarn: 'nya',
  meter: 4,
  material: 'laminat',
  flytt: [],
  egen: [],
  agare: 1,
  rotKr: 0,
};

/**
 * Gränserna, inklusive.
 * antalLuckor och meter: ANTAGANDE, fältens rimlighet (underlaget avsnitt 6).
 * rotKr: per ägare; gränsen i fältet är ROT_TAK_KR gånger antalet ägare.
 */
export const KOK_GRANSER = {
  antalLuckor: [1, 60],
  meter: [0.5, 15],
  rotKr: [0, ROT_TAK_KR],
} as const;

/* ------------------------------------------------------------------ *
 * Vad vägarna innehåller
 * ------------------------------------------------------------------ */

const harLuckor = (v: KokVag): boolean => v === 'luckor' || v === 'luckor-bankskiva';
const harBankskiva = (v: KokVag): boolean => v !== 'luckor';

/** Egen insats som ändrar något i den valda vägen. */
function egenGaller(i: KokIndata): KokEgen[] {
  return i.egen.filter((e) => e === 'montering' || i.vag === 'nytt');
}

/* ------------------------------------------------------------------ *
 * Beskedets värden och texten
 * ------------------------------------------------------------------ */

/** Talen texterna får, som färdiga strängar. Spann skrivs "A till B". */
export interface KokBeskedVarden {
  utfall: KokUtfall;
  vag: KokVag;
  attBetala: string;
  foreRot: string;
  rot: string;
  kapat: string;
  /** krText(hog.kapatKr), för "upp till X kr". */
  kapatMax: string;
  arbete: string;
  /** Arbetet som ger avdrag i svaret (specen K10). */
  arbeteSakert: string;
  /** Bänkskivans montering, villkorad (specen K10). */
  arbeteVillkor: string;
  /** Rotavdraget på allt arbete, om villkoret gäller. Tom sträng när villkoret saknas. */
  villkorRot: string;
  /** Att betala om villkoret gäller. Tom sträng när villkoret saknas. */
  villkorAttBetala: string;
  material: string;
  andelArbete: string;
  /** Antalet luckor som text. */
  luckor: string;
  /** Metrarna med decimalkomma, "4" eller "4,8". */
  meter: string;
  agare: number;
  /** KOK_PRISER_HAMTADE som "28 september 2026". */
  hamtat: string;
  spann: boolean;
}

export interface KokKortsvarVarden {
  /** 16 luckor i enkel nivå med nya gångjärn, standard. */
  luckor: KortsvarBelopp;
  /** Bänkskiva i laminat, 4 och 5 meter. */
  bankskiva4: KortsvarBelopp;
  bankskiva5: KortsvarBelopp;
  /** Nytt kök med laminatskiva, 4 och 5 meter, utan flytt och egen insats. */
  nytt4: KortsvarBelopp;
  nytt5: KortsvarBelopp;
  hamtat: string;
}

export interface KokRegelText {
  text: (v: KokBeskedVarden) => string;
  kallor: KallKod[];
}

/*
 * All text läsaren ser och som köket äger. Hantverkaren skriver varje värde;
 * textlistan är docs/briefer/texter-kok-kostnad-2026-09-29.md. Ett värde som
 * är en funktion får talen som parametrar och ska aldrig ha ett tal skrivet för
 * hand. Ordet "tak" står inte ensamt: rotavdragets gräns heter "gräns".
 */
export const KOK_TEXT = {
  besked: {
    belopp: {
      /* Vad läsaren ska räkna med att betala. Bär attBetala. */
      rubrik: (v: KokBeskedVarden): string => `Lägg ${v.attBetala} kr i budgeten för köket`,
      /* Något annat än rubriken: vad läsaren gör härnäst, efter vägen. */
      rad: (v: KokBeskedVarden): string =>
        v.vag === 'luckor'
          ? 'Jämför med att måla de luckor du har, om formen på dem duger.'
          : v.vag === 'bankskiva'
            ? 'Byt material i formuläret och räkna igen, så ser du hur mycket valet av skiva ändrar priset.'
            : v.vag === 'luckor-bankskiva'
              ? 'I ett vanligt kök ändrar luckornas prisnivå summan mer än skivans material, så bestäm nivån på luckorna först.'
              : 'Ska spisen eller diskbänken byta plats, be elektrikern och rörmokaren om pris innan du beställer skåpen.',
    },
    tak: {
      /* Samma sak som vid belopp. Bär attBetala. */
      rubrik: (v: KokBeskedVarden): string =>
        v.rot === '0'
          ? `Räkna utan rotavdrag och lägg ${v.attBetala} kr i budgeten`
          : `Räkna med ett mindre rotavdrag och lägg ${v.attBetala} kr i budgeten`,
      /* Att gränsen stoppar kapat (kapatMax) kr, och vad två ägare eller betalning efter nyår gör. */
      rad: (v: KokBeskedVarden): string =>
        `Gränsen gör att ${v.agare === 2 ? 'ni' : 'du'} i år går miste om ${v.kapat.includes('till') ? 'upp till ' : ''}${v.kapatMax} kr av avdraget för köket. Betalar ${v.agare === 2 ? 'ni' : 'du'} en del efter nyår räknas den mot nästa års gräns.${v.agare === 1 ? ' Äger ni bostaden tillsammans, välj två ägare och räkna igen.' : ''}`,
    },
  } satisfies Record<KokUtfall, { rubrik: (v: KokBeskedVarden) => string; rad: (v: KokBeskedVarden) => string }>,

  /*
   * Specen K10: läget villkor, alltså bänkskivan med arbete över 0 kr. Priset
   * före rotavdrag är svaret. Textlistan avsnitt 12.
   */
  beskedVillkor: {
    /* Vad läsaren ska lägga i budgeten, utan rotavdrag. Bär foreRot. */
    rubrik: (v: KokBeskedVarden): string => `Lägg ${v.foreRot} kr i budgeten, utan rotavdrag`,
    /* Vad läsaren gör härnäst, efter vägen. Inte om rotavdraget; det står i spalt['rad-villkor']. */
    rad: (_v: KokBeskedVarden): string =>
      'Byt material i formuläret och räkna igen, så ser du hur mycket valet av skiva ändrar priset.',
  },

  /* Formulärets legender, etiketter och hjälprader (specen avsnitt 3). */
  form: {
    'legend-vag': 'Vad ska bytas i köket?',
    'legend-luckor': 'Luckorna',
    luckor: 'Antal luckor',
    /* Bara i fullt format. Räkna luckorna, inte lådfronterna. */
    'luckor-hjalp': 'Räkna dörrarna på skåpen, både under och över bänken. Lådfronterna räknas inte med.',
    'legend-niva': 'Luckornas prisnivå',
    /* Bara i fullt format. Att nytt kök räknas i den enklaste nivån. */
    'niva-hjalp':
      'Priserna gäller en lucka till ett skåp som är 60 cm brett. Ett helt nytt kök räknas alltid med de billigaste luckorna.',
    'legend-gangjarn': 'Gångjärnen',
    'legend-bankskiva': 'Bänkskivan',
    meter: 'Längd',
    /* Bara i fullt format. Vid nytt kök är det skåpradens längd. */
    'meter-hjalp':
      'Mät skivan längs väggen, och lägg ihop båda sidorna om köket går runt ett hörn. För ett helt nytt kök räknar jag med lika många meter skåp.',
    'legend-material': 'Material',
    'legend-flytt': 'Flyttas något i köket?',
    /* Alltid, också kompakt: valen gäller bara nytt kök. */
    'flytt-hjalp': 'De här valen räknas bara när du har valt ett helt nytt kök.',
    'legend-egen': 'Det du gör själv',
    /* Alltid, också kompakt: el och VVS går inte att välja, och varför. Rivningen gäller bara nytt kök. */
    'egen-hjalp':
      'El och rör är inte med bland valen, för nya elledningar ska dras av en registrerad elfirma, och intyg på ett rörarbete kan bara en auktoriserad VVS-firma ge. Rivningen räknas bara när hela köket byts.',
    'legend-agare': 'Ägare och rotavdrag',
    'agare-1': 'En ägare',
    'agare-2': 'Två ägare',
    rot: 'Rotavdrag som redan är använt i år',
    'rot-hjalp': 'Skriv summan av det rotavdrag som bostadens ägare redan har fått i år.',
  },

  /* Radioetiketterna för vägen. Frasen "byta köksluckor pris" ägs av värdartikeln. */
  vag: {
    luckor: 'Nya luckor på skåpen som sitter kvar',
    bankskiva: 'Ny bänkskiva',
    'luckor-bankskiva': 'Nya luckor och ny bänkskiva',
    nytt: 'Helt nytt kök, med skåp och vitvaror',
  } satisfies Record<KokVag, string>,

  /* Radioetiketterna för luckornas nivå. Säger vad man får, inte bara "enkel". */
  niva: {
    enkel: `De billigaste, ${krText(KOK_LUCKA_KR.enkel)} kr per lucka`,
    mellan: `Mellanklass, ${krText(KOK_LUCKA_KR.mellan)} kr per lucka`,
    hog: `De dyraste, ${krText(KOK_LUCKA_KR.hog)} kr per lucka`,
  } satisfies Record<KokNiva, string>,

  gangjarn: {
    nya: 'Nya gångjärn',
    behall: 'Behåll de gamla gångjärnen',
  } satisfies Record<KokGangjarn, string>,

  material: {
    laminat: 'Laminat',
    tra: 'Massivt trä',
    komposit: 'Kvartskomposit',
  } satisfies Record<KokMaterial, string>,

  flytt: {
    el: 'Spisen flyttas, eller köket får en ny elgrupp från elcentralen',
    diskbank: 'Diskbänken flyttas',
  } satisfies Record<KokFlytt, string>,

  egen: {
    montering: 'Monteringen av luckorna, skivan eller köket',
    rivning: 'Rivningen av det gamla köket',
  } satisfies Record<KokEgen, string>,

  /* Postens namn i posttabellen. */
  post: {
    rivning: 'Rivning av det gamla köket',
    stommar: 'Skåp och luckor',
    luckor: 'Luckor',
    gangjarn: 'Gångjärn',
    bankskiva: 'Bänkskiva',
    vitvaror: 'Vitvaror',
    el: 'Ny elgrupp',
    vvs: 'Flytt av diskbänken',
  } satisfies Record<KokPostNyckel, string>,

  /* Arbetscellen: läsaren gör det själv, arbetet ingår i en annan post, eller räknas inte. Ett eller två ord. */
  postEgen: '(du själv)',
  postIngar: '(ingår ovan)',
  postInget: '(ingår inte)',

  /* Feltexterna under fälten. Gränserna kommer in som tal. */
  fel: {
    luckor: (min: number, max: number): string => `Skriv ett helt antal luckor, från ${min} till ${max}.`,
    meter: (min: number, max: number): string =>
      `Skriv en längd mellan ${kvmText(min)} och ${kvmText(max)} meter.`,
    agare: 'Välj en eller två ägare.',
    rot: (max: number): string =>
      `Skriv hur mycket rotavdrag som redan är använt i år. Med det antal ägare du har valt kan det vara högst ${krText(max)} kr.`,
  },

  /* Resultatspalten. Högst 700 tecken synlig text vid standardvärdena. */
  spalt: {
    'etikett-betala': 'Ditt pris efter rotavdraget',
    /* K10: etiketten över det stora talet när det är priset utan rotavdrag. Två till fyra ord. */
    'etikett-villkor': 'Priset utan rotavdrag',
    /*
     * K10: vad avdraget blir (rot) och vad som återstår (attBetala) om arbetet
     * ingår i en större renovering av köket, med Skatteverket som källa. Spann
     * som "A till B" vid bänkskivan.
     */
    'rad-villkor': (v: KokBeskedVarden): string =>
      `Ingår bytet i en omfattande renovering av köket blir rotavdraget ${v.villkorRot} kr och priset efter avdraget ${v.villkorAttBetala} kr. Firman som begär avdraget åt dig kan säga hur den bedömer ditt jobb, men det är Skatteverket som avgör.`,
    /*
     * K10, läget delat (luckor och bänkskiva): står efter pekraden. Att
     * luckornas montering ger avdraget i svaret och att bänkskivans montering
     * ger avdrag bara om bytet ingår i en större renovering, med Skatteverket
     * som källa. Talen den får: v.arbeteSakert (luckornas montering),
     * v.arbeteVillkor (bänkskivans montering), v.rot och v.attBetala (svaret),
     * v.villkorRot och v.villkorAttBetala (om också skivans montering ger
     * avdrag). Spann som "A till B".
     */
    'rad-villkor-delat': (v: KokBeskedVarden): string =>
      `Avdraget på ${v.rot} kr är räknat på de ${v.arbeteSakert} kr som monteringen av luckorna kostar. Ingår bytet av skivan i en omfattande renovering av köket ger också monteringen av skivan avdrag, och då blir priset ${v.villkorAttBetala} kr. Det är Skatteverket som avgör, så räkna inte med den delen i budgeten.`,
    'rad-summa': (foreRot: string, rot: string): string =>
      rot === '0' ? `Summan är ${foreRot} kr, och det blir inget rotavdrag.` : `Summan är ${foreRot} kr, och rotavdraget är ${rot} kr.`,
    'rad-delning': (arbete: string, material: string): string =>
      `Det är ${arbete} kr arbete och ${material} kr material.`,
    /* Varifrån priserna kommer, att de hämtades hamtat och att köket kan avvika. Förmedlarna nämns inte. */
    'rad-kallor': (hamtat: string): string =>
      `Jag hämtade priserna den ${hamtat}. Det som inte ingår står längre ner, under tabellen över posterna.`,
    pekrad: 'Se vad varje del av köket kostar',
    'lank-rotavdrag': 'Se om avdraget räcker när årets andra jobb räknas in',
    'lank-sa-raknar-jag': 'Hur jag räknar och vad jag har antagit',
    /* Gränssnitt, samma som på badrum-kostnad och fasadyta. */
    'dela-etikett': 'Länk till ditt svar',
  },

  /* "Därför blev svaret så". */
  darfor: {
    'tabell-post': 'Post',
    'tabell-arbete': 'Arbete, kr',
    'tabell-material': 'Material, kr',
    summa: 'Summa',
    /* Rotavdraget, ett kort stycke under tabellen. Vid tak räcker inte procentsatsen. */
    rot: (v: KokBeskedVarden): string =>
      v.utfall === 'tak'
        ? v.rot === '0'
          ? `Gränsen för i år är redan nådd, så det blir inget rotavdrag på arbetet på ${v.arbete} kr.`
          : `Rotavdraget blir ${v.rot} kr av arbetet på ${v.arbete} kr. ${v.spann ? 'I den dyrare änden av spannet' : 'Här'} når det gränsen för i år och blir mindre än ${ROT_PROCENT} procent.`
        : v.arbete === '0'
          ? 'Du gör arbetet själv, så det blir inget rotavdrag.'
          : `Avdraget är ${ROT_PROCENT} procent av arbetet på ${v.arbete} kr.`,
    betala: (v: KokBeskedVarden): string =>
      v.rot === '0' ? `Hela summan, ${v.attBetala} kr, är kvar att betala.` : `Av ${v.foreRot} kr blir ${v.attBetala} kr kvar att betala.`,
    /*
     * K10: ersätter rot(v) och betala(v) under posttabellen. Att summan är
     * priset utan avdrag, och vad avdraget (rot) och priset efter det
     * (attBetala) blir vid en större renovering. Arbetet står i arbete.
     */
    'rot-villkor': (v: KokBeskedVarden): string =>
      `Summan i tabellen är priset utan rotavdrag. Av den är ${v.arbete} kr arbete, och det är bara den delen som kan ge avdrag. Ingår bytet i en omfattande renovering blir avdraget ${v.villkorRot} kr och priset ${v.villkorAttBetala} kr.`,
    /*
     * K10, läget delat: ersätter rot(v) under posttabellen och följs av
     * betala(v). Att avdraget i svaret är räknat på luckornas montering, och
     * vad avdraget och priset blir om också bänkskivans montering ger avdrag.
     * Talen den får: v.arbeteSakert, v.arbeteVillkor, v.rot, v.attBetala,
     * v.villkorRot och v.villkorAttBetala.
     */
    'rot-delat': (v: KokBeskedVarden): string =>
      `Monteringen av bänkskivan står med i arbetet i tabellen men ingår inte i avdraget.`,
    /* Länken under tabellen till "Vad siffrorna vilar på". */
    kallrad: 'Var priserna kommer ifrån',
  },

  /* Reglerna i "Därför blev svaret så". Källorna är data; förmedlarna nämns inte vid namn. */
  regel: {
    'luckor-pris': {
      text: (v: KokBeskedVarden): string =>
        `${v.luckor === '1' ? 'Din lucka' : `Var och en av dina ${v.luckor} luckor`} kostar vad Vedum tar för en lucka till ett 60 cm brett skåp i den prisnivå du har valt, och gångjärnen ingår inte i det priset.`,
      kallor: ['VED'],
    },
    'luckor-montering': {
      text: (_v: KokBeskedVarden): string =>
        `En byggfirma tar ett fast pris på ${krText(KOK_LUCKOR_MONTERING_KR)} kr före rotavdraget för att byta luckorna i ett vanligt kök. Jag låter det gälla för upp till ${KOK_LUCKOR_FAST_MAX} luckor och räknar upp det i samma takt som antalet när de är fler. Ett kök med få luckor får samma fasta pris, så svaret blir snarare för högt än för lågt.`,
      kallor: ['TB-LUCKOR', 'HK-LUCKOR'],
    },
    gangjarn: {
      text: (_v: KokBeskedVarden): string =>
        'Varje lucka hänger på två gångjärn. Behåller du de gamla tas raden bort, men det går bara om de passar de nya luckorna.',
      kallor: ['VED', 'IKEA'],
    },
    bankskiva: {
      text: (v: KokBeskedVarden): string =>
        v.vag === 'nytt'
          ? `Bänkskivan räknas per löpmeter, och i ett nytt kök är den lika lång som skåpraden, ${v.meter} meter. Att lägga den på plats ingår i monteringen av köket. Priset gäller en skiva som är 60 till 63 cm djup.`
          : `Bänkskivan räknas per löpmeter, en gång för materialet och en gång för monteringen, och din skiva är ${v.meter} meter. Priset gäller en skiva som är 60 till 63 cm djup.`,
      kallor: ['KIT', 'TB-BANK'],
    },
    'nytt-enkel': {
      text: (_v: KokBeskedVarden): string =>
        'Det nya köket räknas med de billigaste skåpen och luckorna och ett paket vitvaror i budgetklass, vilken prisnivå du än har valt för luckorna. Dyrare skåp har jag inga priser per meter för.',
      kallor: ['IKEA', 'TB-IKEA'],
    },
    flytt: {
      text: (_v: KokBeskedVarden): string =>
        'Kryssar du i att spisen eller diskbänken flyttas läggs elen och rören till som egna poster, och båda räknas som arbete utan material.',
      kallor: ['HK-NYTT', 'ELSAK-SJALV'],
    },
    spann: {
      text: (_v: KokBeskedVarden): string =>
        'Flera av priserna anges med ett lägsta och ett högsta belopp, och svaret gör likadant. Ett medelvärde hade sett exakt ut men finns inte i någon prislista.',
      kallor: ['KIT', 'TB-IKEA'],
    },
    tillkommer: {
      text: (v: KokBeskedVarden): string =>
        v.vag === 'nytt'
          ? 'Lådor, lådfronter, ben, sockel, handtag, frakt, container och installationen av vitvarorna finns inte i tabellen. Fråga efter priserna på dem när du tar in offerter.'
          : v.vag === 'bankskiva'
            ? 'Frakten av skivan och elektrikern som kopplar ur och ansluter hällen finns inte i tabellen, så fråga efter priserna på dem.'
            : 'Handtag, lådfronter och frakt finns inte i tabellen. Be om pris på dem när du beställer luckorna.',
      kallor: ['VED'],
    },
    'rot-arbete': {
      text: (v: KokBeskedVarden): string =>
        v.arbete === '0'
          ? 'Du gör allt arbete själv, så inget i summan ger rotavdrag.'
          : `Av summan är ${v.arbete} kr arbete, och det är bara den delen som ger rotavdrag. ${v.vag === 'luckor' ? 'Luckorna och gångjärnen' : v.vag === 'bankskiva' ? 'Själva skivan' : v.vag === 'luckor-bankskiva' ? 'Luckorna, gångjärnen och skivan' : 'Skåpen, skivan och vitvarorna'} ger inget.`,
      kallor: ['SKV-ROT', 'SKV-RATT'],
    },
    /*
     * K10: ersätter rot-arbete i vägarna utan nytt kök. Skatteverket nämner
     * montering av fast köksinredning bara i samband med en omfattande
     * renovering, och bara arbetet ger avdrag.
     */
    /*
     * Granskningen 2026-09-29, vägen luckor: Skatteverket räknar "byta och
     * reparera köksluckor" till arbetena som ger rotavdrag, utan villkoret om
     * en större renovering som gäller bänkskivan. Bara arbetet ger avdrag.
     */
    'rot-luckor': {
      text: (_v: KokBeskedVarden): string => 'Att byta köksluckor står med i Skatteverkets lista över arbeten som ger rotavdrag, både i småhus och i bostadsrätt, och bytet behöver inte ingå i en omfattande renovering.',
      kallor: ['SKV-RATT'],
    },
    'rot-villkor': {
      text: (_v: KokBeskedVarden): string =>
        'Skatteverket ger rotavdrag för att montera fast köksinredning bara i samband med omfattande byggarbete eller renovering. Montering av en bänkskiva nämns inte för sig, och avdraget gäller i vilket fall bara arbetet, aldrig själva skivan.',
      kallor: ['SKV-ROT', 'SKV-RATT'],
    },
    /*
     * K10, läget delat: står före rot-villkor. Att Skatteverket ger avdrag för
     * att byta köksluckor utan villkor, så luckornas montering ger avdrag i
     * svaret, medan bänkskivans montering står under rot-villkor. Talen den
     * får: v.arbeteSakert, v.arbeteVillkor, v.rot, v.attBetala, v.villkorRot
     * och v.villkorAttBetala.
     */
    'rot-delat': {
      text: (_v: KokBeskedVarden): string =>
        'Att byta köksluckor står med i Skatteverkets lista över arbeten som ger rotavdrag, utan krav på en omfattande renovering. Därför räknar jag avdraget på monteringen av luckorna i svaret, men inte på monteringen av bänkskivan.',
      kallor: ['SKV-RATT', 'SKV-ROT'],
    },
    'rot-tak': {
      text: (_v: KokBeskedVarden): string =>
        `Varje ägare har en gräns på ${krText(ROT_TAK_KR)} kr i rotavdrag per år, så två ägare kan tillsammans dra av dubbelt så mycket.`,
      kallor: ['SKV-ROT'],
    },
    'rot-slog-i': {
      text: (v: KokBeskedVarden): string =>
        `Det rotavdrag som redan är använt i år gör att ${v.kapat.includes('till') ? 'upp till ' : ''}${v.kapatMax} kr av avdraget för köket inte ryms under gränsen.`,
      kallor: ['SKV-ROT'],
    },
    'egen-insats': {
      text: (_v: KokBeskedVarden): string =>
        'Rotavdrag får du bara för arbete som du betalar någon för, så det du gör själv ger inget. El och rör kan inte väljas här, och varför det är så står under valen i formuläret.',
      kallor: ['SKV-ROT', 'ELSAK-SJALV', 'SV'],
    },
  } satisfies Record<KokRegelNyckel, KokRegelText>,

  /* "Gör inte det här", ett stycke per rad. */
  gorInte: {
    /* Rot bara på arbetet, aldrig på luckor, skiva och vitvaror. Andra meningar än badrummet och rotavdrag.ts. */
    'rot-pa-allt': `Räkna inte ${ROT_PROCENT} procent på hela priset för köket. Då blir avdraget för stort, eftersom materialet inte ger något avdrag. Leta upp raden för arbete i offerten och räkna procenten på den.`,
    /* K10: ersätter rot-pa-allt på luckor och bänkskiva. Räkna inte med avdraget förrän det är klart att det gäller, och hur läsaren tar reda på det. */
    'rot-villkor':
      'Räkna inte med rotavdrag på ett byte av bara bänkskivan. Lägg hela summan i budgeten, så blir ett avdrag som går igenom en besparing i stället för ett hål i kalkylen.',
    /* Lackering i verkstad ger inget rot (Skatteverket, "i företagets lokaler"). */
    'verkstad-rot':
      'Jämför du nya luckor med verkstadslackering av de gamla, räkna verkstadens pris utan rotavdrag och lägg till transporten av luckorna.',
    /* Fast installation av ett registrerat elinstallationsföretag; hällen är vår slutsats och märks så. */
    'el-sjalv':
      'Koppla inte in hällen och dra inga nya uttag själv, även om du monterar skåpen. Boka elektrikern till samma vecka som köket monteras, så står det inte färdigt utan ström.',
    /* Säker Vatten är branschregler, inget förbud; bara ett auktoriserat företag kan ge intyg. */
    'vvs-intyg':
      'Låt en auktoriserad VVS-firma flytta diskbänken och be om intyget om Säker Vatteninstallation när jobbet är klart. Spara intyget med kvittot. Blir det en vattenskada kan försäkringsbolaget fråga efter det.',
    /* Riv skåpen, men lämna el och vatten åt firmorna. */
    'riva-sjalv':
      'Se till att elektrikern och rörmokaren kommer på rivningsdagen. När hällen är losskopplad och rören under diskbänken är avstängda och pluggade kan du skruva ner skåpen och bära ut dem själv. Elektrikerns och rörmokarens besök finns inte med i summan.',
  } satisfies Record<KokGorInte, string>,

  /* Kolumnen Vad i antagandetabellen, en per rad i KOK_ANTAGANDEN. */
  antagande: {
    'lucka-pris': 'Pris per lucka',
    gangjarn: 'Gångjärn',
    'luckor-montering': 'Montering av luckorna, före rotavdrag',
    'luckor-fast-max': 'Hur långt det fasta priset räcker',
    'bankskiva-material': 'Bänkskivans material',
    'bankskiva-montering': 'Bänkskivans montering',
    'bankskiva-i-kok': 'Bänkskivan i ett nytt kök',
    stommar: 'Skåp och luckor i ett nytt kök',
    'stommar-modul': 'Vad varje 60 cm av skåpraden innehåller',
    'montering-kok': 'Montering av ett nytt kök, före rotavdrag',
    'montering-storlek': 'Köksstorleken i monteringspriset',
    vitvaror: 'Vitvaror',
    rivning: 'Rivning',
    el: 'Ny elgrupp',
    vvs: 'Flytt av diskbänken',
    'el-vvs-arbete': 'Elen och rören',
    'ingen-dyr-niva': 'Dyrare kök än den enklaste nivån',
    'ej-med': 'Det som inte är med',
    'rot-procent': 'Rotavdragets procentsats',
    'rot-grans': 'Rotavdragets gräns',
    'rut-skatt': 'Rutavdrag och skatt',
  } as Record<string, string>,

  /*
   * Kolumnen Värde där värdet är ord och inte tal ur konstanterna. En funktion
   * får talen färdiga som strängar.
   */
  antagandeVarde: {
    /* Kr per lucka och nivåns namn hos Vedum (prisgrupp). */
    /* prisgrupp är Vedums nummer, "1", "5" eller "10". Hantverkaren väljer om och hur det står i texten. */
    'lucka-pris': (kr: string, prisgrupp: string): string =>
      `${kr} kr för en lucka till ett 60 cm brett skåp, i Vedums prisgrupp ${prisgrupp}`,
    /* Kr styck och antal per lucka. */
    gangjarn: (kr: string, antal: string): string => `${kr} kr styck, ${antal} per lucka`,
    /* Fasta priset upp till max luckor, sedan i proportion. */
    'luckor-fast-max': (max: string): string => `Högst ${max} luckor, sedan i proportion till antalet`,
    /* Spannet per löpmeter för materialet. */
    'bankskiva-material': (spann: string): string => `${spann} per löpmeter`,
    'bankskiva-montering': (spann: string): string => `${spann} per löpmeter`,
    'bankskiva-i-kok': 'Ingår i monteringen av köket, och skivan är lika lång som skåpraden',
    stommar: (kr: string): string => `${kr} kr per meter`,
    'stommar-modul':
      'Ett bänkskåp och ett väggskåp per 60 cm, med en lucka på vardera, utan lådor, ben, sockel och handtag',
    'montering-storlek': 'Hela spannet från litet till stort kök, eftersom källan inte säger hur många meter ett litet kök är',
    'el-vvs-arbete': 'Allt räknas som arbete',
    'ingen-dyr-niva': 'Räknas inte, eftersom priser per meter saknas',
    'ej-med': 'Lådor, ben, sockel, handtag, lådfronter, frakt, installation av vitvaror och container',
    'rot-grans': (kr: string): string => `${kr} kr per person och år`,
    'rut-skatt': 'Ingår inte här. Rotavdraget delar gräns med rutavdraget och kan inte bli större än din skatt, och räknaren för rotavdrag tar med både rutavdraget och skatten.',
  },

  /* "Så räknar jag", en punkt per steg: posterna per väg, två kanter, summan, rotavdraget. */
  steg: [
    'Vilka poster som räknas beror på vad du valde överst. Väljer du luckor räknas luckorna och eventuellt nya gångjärn, väljer du bänkskiva räknas skivan, och ett helt nytt kök ger rivning, skåp, bänkskiva, vitvaror och den el och de rör du har kryssat i.',
    'Har en post ett lägsta och ett högsta pris räknar jag hela köket två gånger, en gång med alla de lägsta priserna och en gång med alla de högsta.',
    'Arbetet och materialet läggs ihop post för post till summan före rotavdraget. Det du gör själv står med noll kronor i arbete.',
    'Sist räknar jag rotavdraget på arbetet, med hänsyn till det som redan är använt i år, och drar avdraget från summan.',
  ] as string[],

  /*
   * Kortsvaret: tre till fem meningar ur kokKortsvarVarden(). Vad de tre vägarna
   * kostar i ett kök med 4 till 5 meter skåp, vad rotavdraget blir, och
   * källorna med datum. markering är talet som får <Markering>.
   */
  kortsvar: (v: KokKortsvarVarden): KortsvarDelar => {
    /* Det lägsta talet i 4 meter och det högsta i 5 meter, så att ett spann täcker båda längderna. */
    const lag = (s: string): string => s.split(/\s+till\s+/)[0] ?? s;
    const hog = (s: string): string => s.split(/\s+till\s+/).pop() ?? s;
    return {
      fore: `Byter du bara luckorna i ett kök med ${KOK_STANDARD.antalLuckor} luckor, med nya gångjärn och en snickare som monterar dem, betalar du`,
      markering: `${v.luckor.attBetala} kr`,
      efter: ` efter ett rotavdrag på ${v.luckor.rot} kr, som är ${ROT_PROCENT} procent av monteringen. En ny bänkskiva i laminat kostar ${lag(v.bankskiva4.foreRot)} till ${hog(v.bankskiva5.foreRot)} kr för 4 till 5 meter, och där räknar jag utan rotavdrag, eftersom Skatteverket inte nämner ett byte av bara skivan. Ett helt nytt kök i den enklaste nivån, med skåp för samma längd och ett paket vitvaror, kostar ${lag(v.nytt4.attBetala)} till ${hog(v.nytt5.attBetala)} kr efter avdraget. Luckornas och skåpens priser är tillverkarnas, och priset på arbetet kommer från byggfirmor och offertförmedlare. Jag hämtade alla priser den ${v.hamtat}.`,
    };
  },

  /* Publiceringsomgången. Alt under 125 tecken med orden renovera kök och kostnad. */
  skissAlt: `Blyertsskiss av en köksvägg på ${kvmText(KOK_STANDARD.meter)} meter där en lucka lyfts av, med kostnaden för att renovera köket med nya luckor`,
  skissBildtext: `Skåpraden är ${kvmText(KOK_STANDARD.meter)} meter lång. Luckan som lyfts av visar vad som byts vid ett luckbyte. Stommen bakom sitter kvar, och luckan får nya gångjärn. Summan i gult gäller ${KOK_STANDARD.antalLuckor} nya luckor i den billigaste prisnivån, med gångjärn och montering, efter rotavdraget.`,
};

/* ------------------------------------------------------------------ *
 * Adressen
 * ------------------------------------------------------------------ */

const KOK_NYCKLAR = ['vag', 'luckor', 'niva', 'gangjarn', 'meter', 'material', 'flytt', 'egen', 'agare', 'rot'] as const;

/**
 * Som tillTal, men tål också ett efterhängt st, m, lm eller meter. Tomt eller
 * skräp ger NaN.
 */
function kokTillTal(v: string | null): number {
  if (v === null) return NaN;
  const rensad = v
    .replace(/[\s  ]/g, '')
    .replace(/(st|meter|lm|m|kr)$/i, '')
    .replace(',', '.')
    .replace('−', '-');
  if (rensad === '') return NaN;
  return Number(rensad);
}

/** Ett av valen, eller standard när värdet saknas eller är okänt. */
function valEller<T extends string>(v: string | null, val: readonly T[], standard: T): T {
  return val.find((x) => x === v) ?? standard;
}

/** Läser adressen enligt specen 2.5. */
export function tolkaKokQuery(q: URLSearchParams): { indata: KokIndata; harIndata: boolean } {
  const harIndata = KOK_NYCKLAR.some((n) => q.has(n));
  const s = KOK_STANDARD;

  const raLuckor = q.get('luckor');
  const raMeter = q.get('meter');
  const raAgare = q.get('agare');
  const raRot = q.get('rot');
  const flytt = new Set(q.getAll('flytt'));
  const egen = new Set(q.getAll('egen'));

  const agare =
    raAgare === null || raAgare.trim() === ''
      ? s.agare
      : raAgare.trim() === '1'
        ? 1
        : raAgare.trim() === '2'
          ? 2
          : NaN;

  return {
    harIndata,
    indata: {
      vag: valEller(q.get('vag'), KOK_VAG_VAL, s.vag),
      antalLuckor: raLuckor === null ? s.antalLuckor : kokTillTal(raLuckor),
      niva: valEller(q.get('niva'), KOK_NIVA_VAL, s.niva),
      gangjarn: valEller(q.get('gangjarn'), KOK_GANGJARN_VAL, s.gangjarn),
      meter: raMeter === null ? s.meter : kokTillTal(raMeter),
      material: valEller(q.get('material'), KOK_MATERIAL_VAL, s.material),
      flytt: KOK_FLYTT_VAL.filter((f) => flytt.has(f)),
      egen: KOK_EGEN_VAL.filter((e) => egen.has(e)),
      agare,
      rotKr: raRot === null ? s.rotKr : raRot.trim() === '' ? 0 : kokTillTal(raRot),
    },
  };
}

/** Den delbara adressen, nycklarna i ordningen i specen 2.5, tal med komma. */
export function kokDelbarQuery(i: KokIndata): URLSearchParams {
  const q = new URLSearchParams();
  q.set('vag', i.vag);
  q.set('luckor', komma(i.antalLuckor));
  q.set('niva', i.niva);
  q.set('gangjarn', i.gangjarn);
  q.set('meter', komma(i.meter));
  q.set('material', i.material);
  for (const f of i.flytt) q.append('flytt', f);
  for (const e of i.egen) q.append('egen', e);
  q.set('agare', String(i.agare));
  q.set('rot', komma(i.rotKr));
  return q;
}

/**
 * Adressen till rotavdragsräknaren med den övre kantens arbete och material,
 * så att länken inte lovar för lite. Nycklarna är dem tolkaQuery i
 * rotavdrag.ts läser.
 */
export function kokRotavdragQuery(r: KokOk, i: KokIndata): URLSearchParams {
  const q = new URLSearchParams();
  q.set('arbete', String(r.hog.arbeteKr));
  q.set('material', String(r.hog.materialKr));
  q.set('agare', String(i.agare));
  q.set('rot', String(i.rotKr));
  return q;
}

/* ------------------------------------------------------------------ *
 * Räkningen
 * ------------------------------------------------------------------ */

/** Luckornas montering före rot: fast pris upp till KOK_LUCKOR_FAST_MAX, sedan i proportion. */
export function kokLuckorMonteringKr(antal: number): number {
  return antal <= KOK_LUCKOR_FAST_MAX
    ? KOK_LUCKOR_MONTERING_KR
    : Math.round((KOK_LUCKOR_MONTERING_KR * antal) / KOK_LUCKOR_FAST_MAX);
}

/** Posterna för en kant, k = 0 nedre och 1 övre (specen 2.6). */
function kokPoster(i: KokIndata, k: 0 | 1): KokPostRad[] {
  const egen = egenGaller(i);
  const monteringEgen = egen.includes('montering');
  const poster: KokPostRad[] = [];
  const arbete = (kr: number, arEgen: boolean): Pick<KokPostRad, 'arbeteKr' | 'arbete'> =>
    arEgen ? { arbeteKr: 0, arbete: 'egen' } : { arbeteKr: kr, arbete: 'belopp' };

  if (i.vag === 'nytt') {
    poster.push({ nyckel: 'rivning', materialKr: 0, ...arbete(KOK_RIVNING_KR[k], egen.includes('rivning')) });
    poster.push({
      nyckel: 'stommar',
      materialKr: Math.round(KOK_STOMMAR_KR_PER_M * i.meter),
      ...arbete(KOK_MONTERING_KR[k], monteringEgen),
    });
  }
  if (harLuckor(i.vag)) {
    poster.push({
      nyckel: 'luckor',
      materialKr: i.antalLuckor * KOK_LUCKA_KR[i.niva],
      ...arbete(kokLuckorMonteringKr(i.antalLuckor), monteringEgen),
    });
    if (i.gangjarn === 'nya') {
      poster.push({
        nyckel: 'gangjarn',
        materialKr: i.antalLuckor * KOK_GANGJARN_PER_LUCKA * KOK_GANGJARN_KR,
        arbeteKr: 0,
        arbete: 'ingar',
      });
    }
  }
  if (harBankskiva(i.vag)) {
    const materialKr = Math.round(i.meter * KOK_BANKSKIVA_KR_PER_LM[i.material][k]);
    poster.push(
      i.vag === 'nytt'
        ? { nyckel: 'bankskiva', materialKr, arbeteKr: 0, arbete: 'ingar' }
        : {
            nyckel: 'bankskiva',
            materialKr,
            ...arbete(Math.round(i.meter * KOK_BANKSKIVA_MONTERING_KR_PER_LM[k]), monteringEgen),
          },
    );
  }
  if (i.vag === 'nytt') {
    poster.push({ nyckel: 'vitvaror', materialKr: KOK_VITVAROR_KR[k], arbeteKr: 0, arbete: 'inget' });
    if (i.flytt.includes('el')) poster.push({ nyckel: 'el', materialKr: 0, arbeteKr: KOK_EL_KR[k], arbete: 'belopp' });
    if (i.flytt.includes('diskbank')) {
      poster.push({ nyckel: 'vvs', materialKr: 0, arbeteKr: KOK_VVS_KR[k], arbete: 'belopp' });
    }
  }
  return poster;
}

/**
 * Arbete som bara ger rotavdrag under Skatteverkets villkor: bänkskivans
 * montering utanför nytt kök (specen K10). I nytt kök ingår skivan i
 * köksmonteringen, som räknas som en omfattande renovering.
 */
const arVillkorat = (i: KokIndata, p: KokPostRad): boolean => p.nyckel === 'bankskiva' && i.vag !== 'nytt';

/** Rotavdraget genom rotavdrag.ts (specen K8) på arbetet, resten av priset som material. */
function kokRot(i: KokIndata, arbetskostnadKr: number, foreRotKr: number) {
  const rot = raknaRotavdrag({
    arbetskostnadKr,
    materialkostnadKr: foreRotKr - arbetskostnadKr,
    antalAgare: i.agare,
    utnyttjatRotKr: i.rotKr,
    utnyttjatRutKr: 0,
    skattKr: null,
  });
  if (rot.status !== 'ok') throw new Error('[renovering] Rotavdraget för köket ska alltid gå att räkna på giltig indata');
  return rot;
}

/** En kant: posterna, summorna och rotavdraget, svaret och villkoret (specen K8 och K10). */
function kokKant(i: KokIndata, k: 0 | 1): KokSiffror {
  const poster = kokPoster(i, k);
  const arbeteKr = poster.reduce((s, p) => s + p.arbeteKr, 0);
  const materialKr = poster.reduce((s, p) => s + p.materialKr, 0);
  const foreRotKr = arbeteKr + materialKr;
  const arbeteVillkorKr = poster.filter((p) => arVillkorat(i, p)).reduce((s, p) => s + p.arbeteKr, 0);
  const arbeteSakertKr = arbeteKr - arbeteVillkorKr;
  const rot = kokRot(i, arbeteSakertKr, foreRotKr);
  const allt = arbeteVillkorKr > 0 ? kokRot(i, arbeteKr, foreRotKr) : null;
  return {
    poster,
    arbeteKr,
    materialKr,
    foreRotKr,
    arbeteSakertKr,
    arbeteVillkorKr,
    rotKr: rot.avdragKr,
    raktRotKr: rot.raktAvdragKr,
    kapatKr: rot.kapatKr,
    attBetalaKr: foreRotKr - rot.avdragKr,
    andelArbeteProcent: foreRotKr === 0 ? 0 : Math.round((arbeteKr / foreRotKr) * 100),
    begransad: rot.begransatAv !== 'procent',
    villkor:
      allt === null ? null : { rotKr: allt.avdragKr, kapatKr: allt.kapatKr, attBetalaKr: foreRotKr - allt.avdragKr },
  };
}

/** Läget ur den övre kanten (specen K10). */
function kokRotLage(hog: KokSiffror): KokRotLage {
  if (hog.arbeteVillkorKr > 0 && hog.arbeteSakertKr === 0) return 'villkor';
  if (hog.arbeteVillkorKr > 0 && hog.arbeteSakertKr > 0) return 'delat';
  return 'saker';
}

/**
 * harArbete: något arbete ger eller kan ge rotavdrag. Annars gäller varken
 * rot-pa-allt eller rot-villkor.
 */
function kokGorInte(i: KokIndata, harArbete: boolean, rotLage: KokRotLage): KokGorInte[] {
  const ut: KokGorInte[] = !harArbete ? [] : rotLage === 'villkor' ? ['rot-villkor'] : ['rot-pa-allt'];
  if (harLuckor(i.vag)) ut.push('verkstad-rot');
  if (i.vag === 'nytt') {
    ut.push('el-sjalv');
    if (i.flytt.includes('diskbank')) ut.push('vvs-intyg');
    if (i.egen.includes('rivning')) ut.push('riva-sjalv');
  }
  return ut;
}

/** Posterna, båda kanterna, utfallet och reglerna utan validering. */
export function raknaKokPoster(i: KokIndata): KokOk {
  const lag = kokKant(i, 0);
  const hog = kokKant(i, 1);
  const utfall: KokUtfall = hog.begransad ? 'tak' : 'belopp';
  const spann = lag.foreRotKr !== hog.foreRotKr;
  /* Gör läsaren allt arbete själv finns inget att räkna rotavdrag på, och
     reglerna om gränsen och procenten på hela priset visas inte. */
  const harArbete = hog.arbeteKr > 0;
  /* Specen K10: luckbytet ger avdrag, bänkskivans montering bara när den
     ingår i en omfattande renovering. */
  const rotLage = kokRotLage(hog);

  const regler: KokRegelNyckel[] = [];
  if (harLuckor(i.vag)) regler.push('luckor-pris', 'luckor-montering', 'gangjarn');
  if (harBankskiva(i.vag)) regler.push('bankskiva');
  if (i.vag === 'nytt') regler.push('nytt-enkel', 'flytt');
  if (spann) regler.push('spann');
  regler.push('tillkommer');
  if (rotLage === 'villkor') regler.push('rot-villkor');
  else if (rotLage === 'delat') regler.push('rot-delat', 'rot-villkor');
  else {
    /* Granskningen 2026-09-29: vägen luckor säger varför luckbytet ger avdrag,
       som bänkskivan säger varför den inte gör det. */
    if (i.vag === 'luckor' && harArbete) regler.push('rot-luckor');
    regler.push('rot-arbete');
  }
  if (harArbete) regler.push('rot-tak');
  if (utfall === 'tak') regler.push('rot-slog-i');
  if (egenGaller(i).length > 0) regler.push('egen-insats');

  return { status: 'ok', utfall, ...lag, hog, spann, rotLage, gorInteDetHar: kokGorInte(i, harArbete, rotLage), regler };
}

export function raknaKokKostnad(i: KokIndata): KokResultat {
  const fel: Partial<Record<KokFelNyckel, string>> = {};
  const g = KOK_GRANSER;
  if (!(Number.isInteger(i.antalLuckor) && inom(i.antalLuckor, g.antalLuckor))) {
    fel.luckor = KOK_TEXT.fel.luckor(g.antalLuckor[0], g.antalLuckor[1]);
  }
  if (!inom(i.meter, g.meter)) fel.meter = KOK_TEXT.fel.meter(g.meter[0], g.meter[1]);
  const agareGiltig = i.agare === 1 || i.agare === 2;
  if (!agareGiltig) fel.agare = KOK_TEXT.fel.agare;
  const rotMax = g.rotKr[1] * (agareGiltig ? i.agare : 2);
  if (!(Number.isFinite(i.rotKr) && i.rotKr >= g.rotKr[0] && i.rotKr <= rotMax)) fel.rot = KOK_TEXT.fel.rot(rotMax);
  if (Object.keys(fel).length > 0) return { status: 'ogiltig', fel };
  return raknaKokPoster(i);
}

/* ------------------------------------------------------------------ *
 * Värdena till texterna
 * ------------------------------------------------------------------ */

export function kokBeskedVarden(r: KokOk, i: KokIndata): KokBeskedVarden {
  const h = r.hog;
  return {
    utfall: r.utfall,
    vag: i.vag,
    attBetala: spannText(r.attBetalaKr, h.attBetalaKr),
    foreRot: spannText(r.foreRotKr, h.foreRotKr),
    rot: spannText(r.rotKr, h.rotKr),
    kapat: spannText(r.kapatKr, h.kapatKr),
    kapatMax: krText(h.kapatKr),
    arbete: spannText(r.arbeteKr, h.arbeteKr),
    arbeteSakert: spannText(r.arbeteSakertKr, h.arbeteSakertKr),
    arbeteVillkor: spannText(r.arbeteVillkorKr, h.arbeteVillkorKr),
    villkorRot: r.villkor && h.villkor ? spannText(r.villkor.rotKr, h.villkor.rotKr) : '',
    villkorAttBetala: r.villkor && h.villkor ? spannText(r.villkor.attBetalaKr, h.villkor.attBetalaKr) : '',
    material: spannText(r.materialKr, h.materialKr),
    andelArbete: spannText(r.andelArbeteProcent, h.andelArbeteProcent, String),
    luckor: String(i.antalLuckor),
    meter: kvmText(i.meter),
    agare: i.agare,
    hamtat: datumText(KOK_PRISER_HAMTADE),
    spann: r.spann,
  };
}

/** Talen kortsvaret byggs av, räknade med KOK_STANDARD. Skrivs aldrig för hand. */
export function kokKortsvarVarden(): KokKortsvarVarden {
  const belopp = (andring: Partial<KokIndata>): KortsvarBelopp => {
    const r = raknaKokPoster({ ...KOK_STANDARD, ...andring });
    return {
      foreRot: spannText(r.foreRotKr, r.hog.foreRotKr),
      rot: spannText(r.rotKr, r.hog.rotKr),
      attBetala: spannText(r.attBetalaKr, r.hog.attBetalaKr),
    };
  };
  return {
    luckor: belopp({}),
    bankskiva4: belopp({ vag: 'bankskiva', meter: 4 }),
    bankskiva5: belopp({ vag: 'bankskiva', meter: 5 }),
    nytt4: belopp({ vag: 'nytt', meter: 4 }),
    nytt5: belopp({ vag: 'nytt', meter: 5 }),
    hamtat: datumText(KOK_PRISER_HAMTADE),
  };
}

/**
 * Källorna som står vid namn under en regel: allt utom förmedlarna, som bara
 * namnges i antagandetabellen (checklistans fälla).
 */
export function kokRegelKallor(nyckel: KokRegelNyckel, vag?: KokVag): KallaRef[] {
  const koder: readonly KallKod[] =
    nyckel === 'tillkommer' && vag !== undefined ? KOK_TILLKOMMER_KALLOR[vag] : KOK_TEXT.regel[nyckel].kallor;
  return koder.map((k) => KALLOR[k]).filter((k) => k.slag !== 'förmedlare');
}

/**
 * Källan under regeln tillkommer, per väg. Vedums luckpris är utan handtag och
 * lådfronter, Ikeas stommar utan ben, sockel och lådor (K5). För bänkskivan
 * säger regeln bara vad räknaren inte tar med (frakten), och ingen källa står
 * under den (granskningen 2026-09-29: Vedum var fel källa där).
 */
const KOK_TILLKOMMER_KALLOR: Record<KokVag, readonly KallKod[]> = {
  luckor: ['VED'],
  'luckor-bankskiva': ['VED'],
  bankskiva: [],
  nytt: ['IKEA'],
};

/* ------------------------------------------------------------------ *
 * Antagandetabellen (specen 2.9)
 * ------------------------------------------------------------------ */

export interface KokAntagandeDef {
  nyckel: string;
  /** Byggs av konstanterna, aldrig för hand. */
  varde: (i: KokIndata) => string;
  typ: 'Källa' | 'Antagande';
  kallor: KallKod[];
  /** När raden gäller svaret. */
  galler: (i: KokIndata) => boolean;
}

const spannKr = (s: readonly [number, number]): string => `${spannText(s[0], s[1])} kr`;
const alltid = (): boolean => true;
const arNytt = (i: KokIndata): boolean => i.vag === 'nytt';

export const KOK_ANTAGANDEN: KokAntagandeDef[] = [
  {
    nyckel: 'lucka-pris',
    varde: (i) =>
      KOK_TEXT.antagandeVarde['lucka-pris'](krText(KOK_LUCKA_KR[i.niva]), String(KOK_LUCKA_PRISGRUPP[i.niva])),
    typ: 'Källa',
    kallor: ['VED'],
    galler: (i) => harLuckor(i.vag),
  },
  {
    nyckel: 'gangjarn',
    varde: () => KOK_TEXT.antagandeVarde.gangjarn(krText(KOK_GANGJARN_KR), String(KOK_GANGJARN_PER_LUCKA)),
    typ: 'Källa',
    kallor: ['VED', 'IKEA'],
    galler: (i) => harLuckor(i.vag) && i.gangjarn === 'nya',
  },
  {
    nyckel: 'luckor-montering',
    varde: () => `${krText(KOK_LUCKOR_MONTERING_KR)} kr`,
    typ: 'Källa',
    kallor: ['TB-LUCKOR'],
    galler: (i) => harLuckor(i.vag),
  },
  {
    nyckel: 'luckor-fast-max',
    varde: () => KOK_TEXT.antagandeVarde['luckor-fast-max'](String(KOK_LUCKOR_FAST_MAX)),
    typ: 'Antagande',
    kallor: ['HK-LUCKOR'],
    galler: (i) => harLuckor(i.vag),
  },
  {
    nyckel: 'bankskiva-material',
    varde: (i) => KOK_TEXT.antagandeVarde['bankskiva-material'](spannKr(KOK_BANKSKIVA_KR_PER_LM[i.material])),
    typ: 'Källa',
    kallor: ['KIT'],
    galler: (i) => harBankskiva(i.vag),
  },
  {
    nyckel: 'bankskiva-montering',
    varde: () => KOK_TEXT.antagandeVarde['bankskiva-montering'](spannKr(KOK_BANKSKIVA_MONTERING_KR_PER_LM)),
    typ: 'Källa',
    kallor: ['TB-BANK'],
    galler: (i) => harBankskiva(i.vag) && !arNytt(i),
  },
  {
    nyckel: 'bankskiva-i-kok',
    varde: () => KOK_TEXT.antagandeVarde['bankskiva-i-kok'],
    typ: 'Antagande',
    kallor: [],
    galler: arNytt,
  },
  {
    nyckel: 'stommar',
    varde: () => KOK_TEXT.antagandeVarde.stommar(krText(KOK_STOMMAR_KR_PER_M)),
    typ: 'Källa',
    kallor: ['IKEA'],
    galler: arNytt,
  },
  {
    nyckel: 'stommar-modul',
    varde: () => KOK_TEXT.antagandeVarde['stommar-modul'],
    typ: 'Antagande',
    kallor: ['IKEA'],
    galler: arNytt,
  },
  { nyckel: 'montering-kok', varde: () => spannKr(KOK_MONTERING_KR), typ: 'Källa', kallor: ['TB-IKEA'], galler: arNytt },
  {
    nyckel: 'montering-storlek',
    varde: () => KOK_TEXT.antagandeVarde['montering-storlek'],
    typ: 'Antagande',
    kallor: ['TB-IKEA'],
    galler: arNytt,
  },
  { nyckel: 'vitvaror', varde: () => spannKr(KOK_VITVAROR_KR), typ: 'Källa', kallor: ['TB-IKEA'], galler: arNytt },
  { nyckel: 'rivning', varde: () => spannKr(KOK_RIVNING_KR), typ: 'Källa', kallor: ['HK-KOK'], galler: arNytt },
  {
    nyckel: 'el',
    varde: () => spannKr(KOK_EL_KR),
    typ: 'Källa',
    kallor: ['HK-NYTT'],
    galler: (i) => arNytt(i) && i.flytt.includes('el'),
  },
  {
    nyckel: 'vvs',
    varde: () => spannKr(KOK_VVS_KR),
    typ: 'Källa',
    kallor: ['HK-NYTT'],
    galler: (i) => arNytt(i) && i.flytt.includes('diskbank'),
  },
  {
    nyckel: 'el-vvs-arbete',
    varde: () => KOK_TEXT.antagandeVarde['el-vvs-arbete'],
    typ: 'Antagande',
    kallor: [],
    galler: (i) => arNytt(i) && i.flytt.length > 0,
  },
  {
    nyckel: 'ingen-dyr-niva',
    varde: () => KOK_TEXT.antagandeVarde['ingen-dyr-niva'],
    typ: 'Antagande',
    kallor: [],
    galler: arNytt,
  },
  { nyckel: 'ej-med', varde: () => KOK_TEXT.antagandeVarde['ej-med'], typ: 'Antagande', kallor: [], galler: alltid },
  { nyckel: 'rot-procent', varde: () => `${ROT_PROCENT} procent`, typ: 'Källa', kallor: ['SKV-ROT'], galler: alltid },
  {
    nyckel: 'rot-grans',
    varde: () => KOK_TEXT.antagandeVarde['rot-grans'](krText(ROT_TAK_KR)),
    typ: 'Källa',
    kallor: ['SKV-ROT'],
    galler: alltid,
  },
  { nyckel: 'rut-skatt', varde: () => KOK_TEXT.antagandeVarde['rut-skatt'], typ: 'Antagande', kallor: [], galler: alltid },
];

/** Raderna svaret vilar på, i tabellens ordning. */
export function kokAntagandenFor(i: KokIndata): AntagandeRad[] {
  return KOK_ANTAGANDEN.filter((a) => a.galler(i)).map((a) => ({
    nyckel: a.nyckel,
    varde: a.varde(i),
    typ: a.typ,
    kallor: a.kallor,
  }));
}
