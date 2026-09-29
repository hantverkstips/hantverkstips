/**
 * Renovering: vad kostar badrummet, post för post, före och efter rotavdraget?
 * Ren modul utan importer från Astro, testbar utan bygge. Sidan
 * /rakna/badrum-kostnad/ skickar formuläret som GET och räknar på servern, så
 * ingen rad av den här filen når klienten.
 *
 * Posterna är data (POSTER), så att köket kan få en egen lista senare med
 * samma räkning. Inget för köket är byggt än.
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
 * Testas av scripts/test-kalkyl-badrum-kostnad.mjs.
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
  kod: 'BE' | 'BS' | 'TB' | 'SF' | 'HK' | 'SKV-ROT' | 'SKV-RATT' | 'BBV' | 'SV' | 'ELSAK';
  /** Källans egen titel, ur underlaget. */
  titel: string;
  /** https. */
  url: string;
  slag: 'förmedlare' | 'firma' | 'myndighet' | 'branschregel';
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
