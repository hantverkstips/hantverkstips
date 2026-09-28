/**
 * U-värdesräknaren: U-värdet ur skikten eller ett känt U-värde, jämförelsen mot
 * Boverkets tal, sparade kilowattimmar och kronor, och återbetalningstiden för
 * ullen. Ren modul utan importer från Astro, testbar utan bygge. Sidan
 * /rakna/u-varde/ skickar formuläret som GET och räknar på servern, så ingen
 * rad av den här filen når klienten.
 *
 * Konstanterna står överst, var och en med Källa eller ANTAGANDE. Underlaget
 * med adress och datum per rad ligger i
 * docs/briefer/underlag-kalkyl-u-varde-2026-09-24.md, och specen med besluten
 * i docs/briefer/spec-kalkyl-u-varde-2026-09-24.md.
 *
 * All text läsaren ser och som modulen äger står i TEXT och skrivs av
 * hantverkaren. Talen i texterna läses ur konstanterna ovanför.
 *
 * Testas av scripts/test-kalkyl-u-varde.mjs mot underlagets räkneexempel och
 * mot /el/u-varde/ och /el/tillaggsisolera-vind/, som läses från disk.
 */
/* Ändelsen står med, så att node kan köra testskriptet utan bygge. */
import { ELPRIS_KR_PER_KWH, ELPRIS_KALLA } from '../antaganden.ts';

/* ------------------------------------------------------------------ *
 * Typer
 * ------------------------------------------------------------------ */

export type Lage = 'skikt' | 'uvarde';
export type Byggnadsdel = 'vagg' | 'tak' | 'golv' | 'fonster' | 'dorr';
export type Region = 'mitt' | 'syd' | 'norr';
export type MaterialNyckel =
  | 'mineralull-okand'
  | 'cellplast-okand'
  | 'stenull-paroc'
  | 'stenull-flexibatts'
  | 'stenull-granulate'
  | 'stenull-vindsull'
  | 'glasull-fyllupp'
  | 'cellulosa'
  | 'eps'
  | 'pir'
  | 'tra'
  | 'gips'
  | 'lattbetong'
  | 'betong'
  | 'luftspalt';
export type VpTyp = 'luft-luft' | 'luft-vatten' | 'jord-sjo' | 'berg' | 'franluft';
export type Kolumn = 'till-2026-09-30' | 'fran-2026-10-01';

export interface Skikt {
  /** Formulärets rad, 1 till 6. Felet hamnar på den raden. */
  rad: number;
  /** null när adressen hade ett värde som inte är en nyckel. */
  material: MaterialNyckel | null;
  /** Millimeter. Läses inte för luftspalt. NaN när fältet inte gick att läsa. */
  tjocklekMm: number;
  reglar: boolean;
}
export interface Tillagg {
  /** Formulärets rad, 1 eller 2. */
  rad: number;
  material: Exclude<MaterialNyckel, 'luftspalt'> | null;
  tjocklekMm: number;
}
export interface UVardeIndata {
  lage: Lage;
  del: Byggnadsdel;
  ytaM2: number;
  region: Region;
  /** Bara icke-tomma rader, i radordning. */
  skikt: Skikt[];
  /** 0 till 2, bara icke-tomma rader. */
  tillagg: Tillagg[];
  /** Läget uvarde. */
  uFore: number;
  /** Läget uvarde. */
  uEfter: number;
  /**
   * Bara när `rg` i adressen pekar på en skiktrad som inte finns. Då har inget
   * skikt reglar och räkningen ger felet `reglar`. Saknas nyckeln helt i övriga
   * fall, så att en rundtur genom adressen ger samma objekt.
   */
  reglarPaTomRad?: number;
}

export type FelNyckel =
  | 'del'
  | 'yta'
  | 'uFore'
  | 'uEfter'
  | 'skikt'
  | 'tillagg'
  | 'reglar'
  | 's1'
  | 's2'
  | 's3'
  | 's4'
  | 's5'
  | 's6'
  | 't1'
  | 't2';

export type Besked =
  | 'bara-u-klarar'
  | 'bara-u-over'
  | 'ingen-forbattring'
  | 'klarar'
  | 'klarar-gamla'
  | 'battre-men-over';

export type GorInte = 'ug-mot-kravet' | 'glom-termostaten' | 'inifran-utan-daggpunkt';
export type RegelNyckel =
  | 'formel'
  | 'luftspalt'
  | 'reglar'
  | 'delta-u'
  | 'tak-kallvind'
  | 'golv-uteluft'
  | 'cellulosa'
  | 'boverket-andring'
  | 'boverket-overgang'
  | 'boverket-anpassning'
  | 'boverket-50'
  | 'fonster-uw'
  | 'gradtimmar'
  | 'elpris'
  | 'scop'
  | 'energi-inte-matare'
  | 'aterbetalning-bara-ull';

export type AterbetalningSaknas = 'uvarde-lage' | 'fonster-dorr' | 'bara-vind' | 'inget-pris' | 'ingen-besparing';

export interface SkiktRad {
  kalla: 'fore' | 'tillagg';
  rad: number;
  material: MaterialNyckel;
  /** null för luftspalt. */
  tjocklekMm: number | null;
  /** null för luftspalt. */
  lambda: number | null;
  /** d/λ, m²K/W; null för luftspalt. */
  r: number | null;
  /** d/0,14 för skiktet med reglar, annars null. */
  rRegel: number | null;
  /** false för luftspalten och allt utanför den. */
  raknas: boolean;
  reglar: boolean;
}
export interface Motstand {
  rsi: number;
  rse: number;
  /** R_T. */
  rTotal: number;
  /** Bara med reglar. */
  rOvre: number | null;
  rUndre: number | null;
  u: number;
}
export interface Jamforelse {
  kolumn: Kolumn;
  grans: number;
  klarar: boolean;
}
export interface Varmepump {
  typ: VpTyp;
  scopMin: number;
  scopMax: number;
  krMin: number;
  krMax: number;
}

export type UVardeResultat =
  | {
      status: 'ok';
      lage: Lage;
      del: Byggnadsdel;
      ytaM2: number;
      region: Region;
      /** Skiktläge: skiktens U; uvarde: uFore. */
      uFore: number;
      /** null i skiktläge utan tillägg. */
      uEfter: number | null;
      /** uEfter ?? uFore. Det stora talet och jämförelsen. */
      uSlut: number;
      /** null i läget uvarde. */
      detaljer: { rader: SkiktRad[]; fore: Motstand; efter: Motstand | null } | null;
      /** För uSlut, kolumnerna i den ordningen. */
      jamforelse: [Jamforelse, Jamforelse];
      /** För uFore. */
      jamforelseFore: [Jamforelse, Jamforelse];
      besked: Besked;
      besparing: {
        gradtimmar: number;
        kwhPerAr: number;
        /** Direktverkande el. */
        krPerAr: number;
        /** Fem rader i VP_TYPER:s ordning. */
        varmepump: Varmepump[];
      } | null;
      aterbetalning: { kostnadKr: number; ar: number } | null;
      /** null när aterbetalning finns. */
      aterbetalningSaknas: AterbetalningSaknas | null;
      gorInteDetHar: GorInte[];
      regler: RegelNyckel[];
      /**
       * Hur mycket mer av tillägg 1:s material (utan tillägg: mineralull utan
       * märke) som behövs för att nå kolumnen från 1 oktober 2026. Bara i läget
       * skikt vid bara-u-over och battre-men-over; null annars och när ingen
       * tjocklek räcker inom tjocklekens övre gräns, tillägg 1 inräknat.
       * Specen 12.9, 12.20 och 12.21. För Flexibatts är totalen en summa av
       * skivtjocklekarna med pris (12.46).
       */
      saknas: { mm: number; material: MaterialNyckel; grans: number } | null;
    }
  | { status: 'ogiltig'; fel: Partial<Record<FelNyckel, string>> };

export type UVardeOk = Extract<UVardeResultat, { status: 'ok' }>;

/** Talen som varje beskeds rubrik får, som strängar färdiga att visa. Specen 12.10. */
export interface BeskedVarden {
  u: string;
  grans: string;
  uFore: string;
  kr: string | null;
  /** Det som saknas, mm. */
  mm: string | null;
  material: string | null;
  /** Tjockleken på tillägg 1 i alla besked, eller null utan tillägg. Specen 12.21 och 12.25. */
  mmValt: string | null;
  /** Tillägg 1:s korta namn i alla besked, eller null utan tillägg. Specen 12.25. */
  materialValt: string | null;
  /** mmValt plus mm när tillägg finns, annars samma som mm. Specen 12.21. */
  mmTotalt: string | null;
  /** Båda kolumnerna i jamforelseFore klarar, som i beskedKontext. Specen 12.35. */
  klaradeFore: boolean;
  /** Specen 12.35. */
  del: Byggnadsdel;
  /**
   * Läget skikt, delen tak, vägg eller golv, och tilläggen är formulärets förval
   * för delen: samma rad, material och tjocklek, i samma antal. Specen 12.36.
   */
  forval: boolean;
  /** Tillägg 1 som rubrikord genom namnIRubrik, null utan tillägg. Specen 12.37. */
  tillaggNamn: string | null;
  /** saknas.material som rubrikord genom namnIRubrik, null utan saknas. Specen 12.37. */
  forslagNamn: string | null;
}

/**
 * Det raden under beskedet får veta om svaret, så att den bara säger det som
 * stämmer i just det fallet (specen 12.28).
 */
export interface BeskedKontext {
  lage: Lage;
  del: Byggnadsdel;
  /** jamforelseFore: båda kolumnerna klarar. */
  klaradeFore: boolean;
  /** Läget skikt med minst ett tillägg. */
  harTillagg: boolean;
  /** Tilläggen är delens förval (specen 12.36), samma flagga som i BeskedVarden. */
  forval: boolean;
  /** aterbetalning !== null. */
  aterbetalning: boolean;
  aterbetalningSaknas: AterbetalningSaknas | null;
}

export interface KallaRef {
  titel: string;
  url: string;
  /** Datum då källan lästes eller priset hämtades. */
  last: string;
}

/* ------------------------------------------------------------------ *
 * Källorna, en gång. Adress och datum som i underlaget.
 * ------------------------------------------------------------------ */

const TRAGUIDEN: KallaRef = {
  titel: 'Svenskt Trä, Träguiden, 9.3 KL-trä och värmeisolering',
  url: 'https://www.traguiden.se/konstruktion/kl-trakonstruktioner/kl-tra-och-varme-och-fukt/9.3-kl-tra-och-varmeisolering/kl-tra-och-varmeisolering/',
  last: '2026-09-22',
};
const SLU: KallaRef = {
  titel: 'SLU, Christer Nilsson, Byggnadsfysik värmelära, TN0258',
  url: 'https://slunik.slu.se/kursfiler/TN0258/30276.1011/Byggfysik_Varmelara_forelasning_110316.pdf',
  last: '2026-09-22',
};
const PAROC_FASAD: KallaRef = {
  titel: 'Paroc, Projekteringsanvisning välisolerade ventilerade fasader, oktober 2025, s. 15 och 18',
  url: 'https://www.paroc.com/sv/documents/uploads/ventilated-facades-design-guide',
  last: '2026-09-22',
};
const ROCKWOOL_VIND: KallaRef = {
  titel: 'Rockwool, Isolera eller tilläggsisolera vind och innertak',
  url: 'https://www.rockwool.com/se/produkter-och-konstruktioner/takisolering/vind/',
  last: '2026-09-24',
};
const BAUHAUS_VINDSULL: KallaRef = {
  titel: 'Bauhaus, Rockwool Vindsull 20 kg',
  url: 'https://www.bauhaus.se/losull-rockwool-roxull-vindsull-20kg',
  last: '2026-09-24',
};
const BAUHAUS_FLEXIBATTS_45: KallaRef = {
  titel: 'Bauhaus, Rockwool Flexibatts 45 × 565 × 1 170',
  url: 'https://www.bauhaus.se/isolering-rockwool-flexibatts-45x565x1170mm-7-93m-stenullsisolering',
  last: '2026-09-24',
};
const BAUHAUS_FLEXIBATTS_95: KallaRef = {
  titel: 'Bauhaus, Rockwool Flexibatts 95 × 580 × 1 170',
  url: 'https://www.bauhaus.se/isolering-rockwool-flexibatts-95x580x1170mm-4-07m-stenullsisolering',
  last: '2026-09-24',
};
const ENERGIMYNDIGHETEN_ISOLERING: KallaRef = {
  titel: 'Energimyndigheten, Isolering, ET 2025:06',
  url: 'https://energimyndigheten.a-w2m.se/Arkitektkopia/GetTemplateResource/121?id=fd3d494afb2148e7ab08bae60c7d06a7&res=4cc33ab6dd69484ca99def154051181d&lr=False&fn=ET_2025_06_BQ_EPRO011_ISOLERING_ET_2025_06_A4_TA.pdf&elp=portal&elt=t&eloid=fd3d494afb2148e7ab08bae60c7d06a7',
  last: '2026-09-22',
};
const ENERGIMYNDIGHETEN_VP: KallaRef = {
  titel: 'Energimyndigheten, Värmepumpar, ET 2025:05, mars 2025, s. 9, tabell 1',
  url: 'https://energimyndigheten.a-w2m.se/arkitektkopia/GetTemplateResource/121?id=f2885ffb97944c4faff591107207e98c&res=e424cc0a9f144dfe985d72b3b35f97cd&lr=False&fn=ET_2025_05+_BQ_EPRO011_V%C3%84RMEPUMPAR_ET_2025_05_A4_TA.pdf',
  last: '2026-09-24',
};
const BBR_9_92: KallaRef = {
  titel: 'Boverket, BFS 2011:6 i lydelse BFS 2024:14, avsnitt 9:92',
  url: 'https://rinfo.boverket.se/BFS2011-6/pdf/BFS2024-14.pdf',
  last: '2026-09-22',
};
const BFS_2026_9: KallaRef = {
  titel: 'Boverket, BFS 2026:9, bilaga 2 tabell 6',
  url: 'https://rinfo.boverket.se/BFS2026-9/pdf/BFS2026-9.pdf',
  last: '2026-09-22',
};

/* ------------------------------------------------------------------ *
 * Konstanter. Källa eller ANTAGANDE i kommentaren över varje.
 * ------------------------------------------------------------------ */

/**
 * Inre övergångsmotstånd per byggnadsdel, m²K/W. Vägg: värmen går åt sidan,
 * tak: uppåt, golv: nedåt.
 * Källa: Svenskt Trä, Träguiden 9.3, enligt SS-EN ISO 6946, läst 2026-09-22;
 * SLU TN0258 (2011), läst 2026-09-22.
 */
export const RSI = { vagg: 0.13, tak: 0.1, golv: 0.17 } as const;

/**
 * Yttre övergångsmotstånd mot uteluft, m²K/W.
 * Källa: Träguiden 9.3; SLU TN0258. Samma som ovan.
 */
export const RSE = 0.04;

/**
 * Yttre övergångsmotstånd bakom en väl ventilerad luftspalt, m²K/W: luftspalten
 * och allt utanför den räknas inte, och utsidan räknas som stillastående luft.
 * Källa: Paroc, Projekteringsanvisning välisolerade ventilerade fasader, oktober
 * 2025, s. 15 och 18, https://www.paroc.com/sv/documents/uploads/ventilated-facades-design-guide ,
 * läst 2026-09-22.
 */
export const RSE_LUFTSPALT = 0.13;

/**
 * Regelandel i ett skikt med reglar, 12 procent.
 * Källa: Träguiden 9.3, Svenskt Träs räkneexempel (170 mm, R_T 4,575).
 */
export const REGELANDEL = 0.12;

/**
 * λ för trä i regeln, W/mK.
 * Källa: Träguiden 9.3.
 */
export const LAMBDA_REGEL = 0.14;

export interface Material {
  lambda: number | null;
  /** Artikelns tabellcell ordagrant. Står i skikttabellen. */
  etikett: string;
  /** Högst 26 tecken, står i formulärets listor (specen 12.4). */
  kort: string;
  /** Sant för isoleringen, den enda som kan ligga mellan reglar (specen 12.12). */
  isolering: boolean;
  kalla: KallaRef;
  pris: 'vindsull' | 'flexibatts' | null;
}

/**
 * Materialen, λ i W/mK. Källa per rad i `kalla`, adress och datum ur
 * underlaget avsnitt 2. Etiketten är artikelns tabellcell ordagrant.
 */
export const MATERIAL: Record<MaterialNyckel, Material> = {
  /*
   * Källa: Energimyndigheten ET 2025:06, tabell 1, s. 7: stenull 0,035 till
   * 0,045, glasull 0,032 till 0,040.
   * ANTAGANDE: spannets sämre ände, 0,045, som täcker både sten- och glasull,
   * för ull vars märke och ålder läsaren inte känner till (specen 12.14).
   */
  'mineralull-okand': {
    lambda: 0.045,
    etikett: 'Mineralull, okänt märke och okänd ålder',
    kort: 'Mineralull utan märke',
    isolering: true,
    kalla: ENERGIMYNDIGHETEN_ISOLERING,
    pris: null,
  },
  /* Källa: Paroc produktblad, uppdaterat 2023-06-12. */
  'stenull-paroc': {
    lambda: 0.036,
    etikett: 'Stenull, skiva, Paroc eXtra',
    kort: 'Paroc eXtra',
    isolering: true,
    kalla: {
      titel: 'Paroc, produktblad Paroc eXtra, uppdaterat 2023-06-12',
      url: 'https://media.derome.se/medias/docus/137/PAROC-eXtra-sv-SE.pdf',
      last: '2026-09-22',
    },
    pris: null,
  },
  /* Källa: Rockwool, vind ("λ 37"), omläst 2026-09-24; Bauhaus λD 37 mW/mK, 2026-09-24. */
  'stenull-flexibatts': {
    lambda: 0.037,
    etikett: 'Stenull, skiva, Rockwool Flexibatts',
    kort: 'Rockwool Flexibatts',
    isolering: true,
    kalla: ROCKWOOL_VIND,
    pris: 'flexibatts',
  },
  /* Källa: Rockwool, vind, omläst 2026-09-24. */
  'stenull-granulate': {
    lambda: 0.041,
    etikett: 'Stenull, lösull maskinblåst 25 kg/m³, Rockwool Granulate Pro Plus',
    kort: 'Inblåst lösull (stenull)',
    isolering: true,
    kalla: ROCKWOOL_VIND,
    pris: null,
  },
  /* Källa: Bauhaus produktdata (λ 42 mW/mK), omläst 2026-09-24. Med enligt specens beslut 2. */
  'stenull-vindsull': {
    lambda: 0.042,
    etikett: 'Stenull, lösull handutlagd, Rockwool Vindsull',
    kort: 'Utlagd lösull (stenull)',
    isolering: true,
    kalla: BAUHAUS_VINDSULL,
    pris: 'vindsull',
  },
  /* Källa: Byggkatalogen, Isover Easy FyllUpp, läst 2026-09-22. */
  'glasull-fyllupp': {
    lambda: 0.045,
    etikett: 'Glasull, lösull handutlagd, Isover Easy FyllUpp',
    kort: 'Utlagd lösull (glasull)',
    isolering: true,
    kalla: {
      titel: 'Byggkatalogen, Isover Easy FyllUpp',
      url: 'https://byggkatalogen.byggtjanst.se/produkt/byggmaterial/isolering/losfyllnadsisolering-drev/isover-easy-fyllupp-losfyllnadsisolering/17202',
      last: '2026-09-22',
    },
    pris: null,
  },
  /*
   * Källa: Energimyndigheten ET 2025:06, tabell 1, s. 7, spannet 0,037 till 0,040.
   * ANTAGANDE: spannets sämre ände, 0,040, eftersom inget aktuellt
   * tillverkardatablad finns.
   */
  cellulosa: {
    lambda: 0.04,
    etikett: 'Cellulosa, lösull, räknad med 0,040',
    kort: 'Inblåst lösull (cellulosa)',
    isolering: true,
    kalla: ENERGIMYNDIGHETEN_ISOLERING,
    pris: null,
  },
  /*
   * Källa: Energimyndigheten ET 2025:06, tabell 1, s. 7: EPS 0,035 till 0,038,
   * XPS 0,030 till 0,036 (docs/briefer/faktablad/kunskap-u-varde.md).
   * ANTAGANDE: EPS-spannets sämre ände, 0,038, som också täcker XPS, för
   * cellplast vars märke läsaren inte känner till (specen 12.26).
   */
  'cellplast-okand': {
    lambda: 0.038,
    etikett: 'Cellplast, okänt märke',
    kort: 'Cellplast utan märke',
    isolering: true,
    kalla: ENERGIMYNDIGHETEN_ISOLERING,
    pris: null,
  },
  /* Källa: Sundolitt, S80, läst 2026-09-22. */
  eps: {
    lambda: 0.038,
    etikett: 'Cellplast EPS, Sundolitt S80',
    kort: 'Cellplast Sundolitt S80',
    isolering: true,
    kalla: {
      titel: 'Sundolitt, S80',
      url: 'https://www.sundolitt.se/product/s80--3040?code=3040',
      last: '2026-09-22',
    },
    pris: null,
  },
  /* Källa: Kingspan, Therma TW55, läst 2026-09-22. */
  pir: {
    lambda: 0.022,
    etikett: 'PIR, Kingspan Therma TW55',
    kort: 'PIR-skiva Kingspan TW55',
    isolering: true,
    kalla: {
      titel: 'Kingspan, Therma TW55',
      url: 'https://www.insulation.kingspan.com/se/sv/produkter/isoleringsskivor/vaggisoleringsskivor/therma-tw55',
      last: '2026-09-22',
    },
    pris: null,
  },
  /* Källa: Träguiden 9.3. */
  tra: { lambda: 0.14, etikett: 'Trä, gran och furu', kort: 'Trä', isolering: false, kalla: TRAGUIDEN, pris: null },
  /* Källa: Träguiden 9.3. */
  gips: { lambda: 0.24, etikett: 'Gips', kort: 'Gipsskiva', isolering: false, kalla: TRAGUIDEN, pris: null },
  /* Källa: Betongföreningen, Fråga experten, Oskar Esping (odaterad), läst 2026-09-22. */
  lattbetong: {
    lambda: 0.14,
    etikett: 'Lättbetong 500 kg/m³, med fukt inräknad',
    kort: 'Lättbetong',
    isolering: false,
    kalla: {
      titel: 'Betongföreningen, Fråga experten, Oskar Esping',
      url: 'https://betongforeningen.se/fraga_experten/2307-2/',
      last: '2026-09-22',
    },
    pris: null,
  },
  /* Källa: Träguiden 9.3; Rockwool vind ("200 mm armerad betong, λ 1,7"). */
  betong: { lambda: 1.7, etikett: 'Betong', kort: 'Betong', isolering: false, kalla: TRAGUIDEN, pris: null },
  /* Källa: Paroc 2025, s. 15; Träguiden tabell 9.6. Ingen λ, se RSE_LUFTSPALT. */
  luftspalt: { lambda: null, etikett: 'Luftspalt, ventilerad', kort: 'Ventilerad luftspalt', isolering: false, kalla: PAROC_FASAD, pris: null },
};

export type MaterialGrupp = 'okand' | 'losull' | 'skivor' | 'ovrigt';

/**
 * Grupperna i formulärets listor, uppifrån, var och en en <optgroup> med
 * rubriken TEXT.form['grupp-<grupp>'] (specen 12.40). Lösullen står med de två
 * som läggs för hand först och de två som blåses in sedan.
 */
export const MATERIAL_GRUPPER: { grupp: MaterialGrupp; material: MaterialNyckel[] }[] = [
  { grupp: 'okand', material: ['mineralull-okand', 'cellplast-okand'] },
  { grupp: 'losull', material: ['stenull-vindsull', 'glasull-fyllupp', 'stenull-granulate', 'cellulosa'] },
  { grupp: 'skivor', material: ['stenull-flexibatts', 'stenull-paroc', 'eps', 'pir'] },
  { grupp: 'ovrigt', material: ['gips', 'tra', 'lattbetong', 'betong', 'luftspalt'] },
];

/** Ordningen i formulärets listor och i antagandetabellen, uppifrån. */
export const MATERIAL_ORDNING: MaterialNyckel[] = MATERIAL_GRUPPER.flatMap((g) => g.material);

/**
 * Gradtimmar per år, °Ch. 3 720 graddagar gånger 24 för Mellansverige, 20
 * procent lägre i söder och 35 procent högre i norr.
 * Källa: Rockwool, Isolera eller tilläggsisolera vind och innertak,
 * https://www.rockwool.com/se/produkter-och-konstruktioner/takisolering/vind/ ,
 * omläst 2026-09-24: "normalårets graddagar: 3720 som är representativa för
 * Mellansverige", "ca 20% lägre" i södra och "ca 35% större" i norra Sverige.
 */
export const GRADTIMMAR: Record<Region, number> = {
  mitt: 3720 * 24,
  syd: 3720 * 24 * 0.8,
  norr: 3720 * 24 * 1.35,
};

/**
 * SCOP per typ av värmepump, lägsta och högsta. Jord och sjö har samma spann
 * och är ihopslagna.
 * Källa: Energimyndigheten, Värmepumpar, ET 2025:05, mars 2025, s. 9, tabell 1,
 * läst 2026-09-24.
 */
export const VP_TYPER: { typ: VpTyp; scopMin: number; scopMax: number }[] = [
  { typ: 'luft-luft', scopMin: 3.5, scopMax: 5.0 },
  { typ: 'luft-vatten', scopMin: 3.0, scopMax: 4.5 },
  { typ: 'jord-sjo', scopMin: 4.0, scopMax: 5.0 },
  { typ: 'berg', scopMin: 4.0, scopMax: 5.5 },
  { typ: 'franluft', scopMin: 2.5, scopMax: 4.0 },
];

/**
 * Boverkets U-värden vid ändring av en befintlig byggnad, W/m²K, båda
 * regelverken. Båda visas alltid (specens beslut 5): sidan cachas och
 * övergången låter båda gälla till 2027-10-01.
 * Källa: BFS 2011:6 i lydelse BFS 2024:14, 9:92, tabell 9:92,
 * https://rinfo.boverket.se/BFS2011-6/pdf/BFS2024-14.pdf ; BFS 2026:9, bilaga 2
 * tabell 6, https://rinfo.boverket.se/BFS2026-9/pdf/BFS2026-9.pdf . Lästa 2026-09-22.
 */
export const BOVERKET: Record<Kolumn, Record<Byggnadsdel, number>> = {
  'till-2026-09-30': { tak: 0.13, vagg: 0.18, golv: 0.15, fonster: 1.2, dorr: 1.2 },
  'fran-2026-10-01': { tak: 0.13, vagg: 0.18, golv: 0.15, fonster: 1.1, dorr: 1.1 },
};

/** Kolumnernas ordning i jämförelsen. */
const KOLUMNER: [Kolumn, Kolumn] = ['till-2026-09-30', 'fran-2026-10-01'];

/**
 * Rockwool Vindsull, kr per m² och mm: 19,95 kr/kg gånger 0,042 kg per m² och mm.
 * Källa: Bauhaus, Rockwool Vindsull 20 kg, 19,95 kr/kg och ≥ 42 kg/m³,
 * https://www.bauhaus.se/losull-rockwool-roxull-vindsull-20kg , hämtat 2026-09-24.
 */
export const PRIS_VINDSULL_KR_M2_MM = 19.95 * 0.042;

/**
 * Rockwool Flexibatts 45 mm, kr per m² och mm.
 * Källa: Bauhaus jämförpris 44,95 kr/m², hämtat 2026-09-24.
 */
export const PRIS_FLEXIBATTS_45_KR_M2_MM = 44.95 / 45;

/**
 * Rockwool Flexibatts 95 mm, kr per m² och mm.
 * Källa: Bauhaus jämförpris 84,95 kr/m², hämtat 2026-09-24.
 */
export const PRIS_FLEXIBATTS_95_KR_M2_MM = 84.95 / 95;

/**
 * ANTAGANDE A2: skivpriset från närmaste tjocklek. Upp till och med 70 mm
 * räknas med 45-millimeterspriset, över 70 mm med 95-millimeterspriset.
 */
export const FLEXIBATTS_GRANS_MM = 70;

/**
 * Skivtjocklekarna som har pris, mm. Förslaget i rubriken för Flexibatts är en
 * summa av dessa, så att totalen går att köpa (specen 12.46).
 * Källa: Bauhaus, Rockwool Flexibatts 45 och 95 mm, hämtat 2026-09-24 (samma
 * rader som PRIS_FLEXIBATTS_45_KR_M2_MM och PRIS_FLEXIBATTS_95_KR_M2_MM).
 */
export const FLEXIBATTS_TJOCKLEKAR_MM = [45, 95] as const;

/**
 * Gränserna, inklusive.
 * Yta, tjocklek och antal: beställarens gränser (underlaget avsnitt 8).
 * uOpak och uFonster: ANTAGANDE, underlaget avsnitt 8, ingen källa för gränsen.
 */
export const GRANSER = {
  ytaM2: [1, 500],
  tjocklekMm: [10, 600],
  /** Luftspalten räknas som skikt. */
  antalSkikt: [1, 6],
  antalTillagg: [0, 2],
  /** Vägg, tak, golv. ANTAGANDE, underlaget avsnitt 8. */
  uOpak: [0.05, 3.0],
  /** Fönster och dörr. ANTAGANDE, underlaget avsnitt 8. */
  uFonster: [0.5, 6.0],
} as const;

/**
 * Yta och U-värden per byggnadsdel (specen 12.27). De följer delen: saknas
 * yta, uf eller ue i adressen tas värdet härifrån, och när delen byts ersätts
 * den gamla delens värden med den nya delens (sd i tolkaQuery). Står inte i
 * antagandetabellen; det är förifyllda fält och inget svaret vilar på.
 */
export const STANDARD_PER_DEL: Record<Byggnadsdel, { ytaM2: number; uFore: number; uEfter: number }> = {
  /** Källa: Rockwools tabellrad (specens fall 4a). Ytan ANTAGANDE: vindguidens exempel. */
  tak: { ytaM2: 100, uFore: 0.184, uEfter: 0.078 },
  /**
   * Källa: Energimyndigheten ET 2025:06, 1961 till 1980, och Boverkets krav.
   * Ytan ANTAGANDE: artikelns fasad (specens fall 3).
   */
  vagg: { ytaM2: 100, uFore: 0.4, uEfter: 0.18 },
  /** ANTAGANDE: underlagets golvexempel (specens fall 8) avrundat till tre decimaler. */
  golv: { ytaM2: 80, uFore: 0.233, uEfter: 0.177 },
  /**
   * ANTAGANDE: underlagets fönsterexempel (specens fall 7a), ett fönster med
   * karm som i hjälptexten för ytan. 0,9 ligger i Energimyndighetens spann för
   * energifönster (ET 2025:01, tabell 1).
   */
  fonster: { ytaM2: 1.5, uFore: 2.8, uEfter: 0.9 },
  /** ANTAGANDE: ingen källa. En ytterdörr med karm, och efter lika med kravet. */
  dorr: { ytaM2: 2, uFore: 2.0, uEfter: 1.1 },
};

/** Delarna som går att räkna skikt för skikt. */
export type SkiktDel = 'tak' | 'vagg' | 'golv';

/**
 * Skikten och tilläggen per byggnadsdel (specen 12.30). De följer delen på
 * samma sätt som STANDARD_PER_DEL: saknas m-nycklarna i adressen tas skikten
 * härifrån, och när delen byts ersätts den gamla delens standardskikt med den
 * nya delens (sd i tolkaQuery). Skikten har inga varumärken; gammal ull är
 * mineralull utan märke (specen 12.20). Märket står i standardtilläggen där det
 * behövs för priset, så att återbetalningen visas (specen 12.18 och 12.34), och
 * rubriken nämner inte märket när tillägget är förvalet (specen 12.36 och 12.37).
 */
export const STANDARD_SKIKT_PER_DEL: Record<SkiktDel, { skikt: Skikt[]; tillagg: Tillagg[] }> = {
  /*
   * ANTAGANDE: samma vind som skissen, Rockwools tabellrad och
   * /el/tillaggsisolera-vind/ (specen 12.18), 13 mm gips och 200 mm mineralull
   * utan märke räknat utan reglar (specen 12.24), och 300 mm Rockwool Vindsull ovanpå.
   */
  tak: {
    skikt: [
      { rad: 1, material: 'gips', tjocklekMm: 13, reglar: false },
      { rad: 2, material: 'mineralull-okand', tjocklekMm: 200, reglar: false },
    ],
    tillagg: [{ rad: 1, material: 'stenull-vindsull', tjocklekMm: 300 }],
  },
  /*
   * Skikten ANTAGANDE: underlagets sjuttiotalsvägg (avsnitt 7, exempel 1) med
   * okänt märke: gips 13, 120 mm ull mellan reglar, ventilerad luftspalt, panel 22.
   * Tillägget, 95 mm Rockwool Flexibatts (specen 12.34): Källa för priset Bauhaus
   * jämförpris 84,95 kr/m², 2026-09-24 (PRIS_FLEXIBATTS_95_KR_M2_MM); tjockleken
   * ANTAGANDE: den tjockaste skiva med daterat pris.
   */
  vagg: {
    skikt: [
      { rad: 1, material: 'gips', tjocklekMm: 13, reglar: false },
      { rad: 2, material: 'mineralull-okand', tjocklekMm: 120, reglar: true },
      { rad: 3, material: 'luftspalt', tjocklekMm: NaN, reglar: false },
      { rad: 4, material: 'tra', tjocklekMm: 22, reglar: false },
    ],
    tillagg: [{ rad: 1, material: 'stenull-flexibatts', tjocklekMm: 95 }],
  },
  /*
   * Skikten ANTAGANDE: underlagets golv (specens fall 8) med okänt märke, trä 22
   * och 145 mm ull utan reglar, 80 m². Tillägget som väggen (specen 12.34): Källa
   * för priset Bauhaus jämförpris 84,95 kr/m², 2026-09-24; tjockleken ANTAGANDE:
   * den tjockaste skiva med daterat pris.
   */
  golv: {
    skikt: [
      { rad: 1, material: 'tra', tjocklekMm: 22, reglar: false },
      { rad: 2, material: 'mineralull-okand', tjocklekMm: 145, reglar: false },
    ],
    tillagg: [{ rad: 1, material: 'stenull-flexibatts', tjocklekMm: 95 }],
  },
};

/**
 * Standardvärdena. ANTAGANDE: samma vind som skissen, Rockwools tabellrad och
 * /el/tillaggsisolera-vind/ (specen 12.18). Skiktläget är vindsbjälklaget med
 * 13 mm gips och 200 mm mineralull utan märke, räknat utan reglar (specen
 * 12.24), och 300 mm Rockwool Vindsull ovanpå, 100 m² i Mellansverige (0,216
 * till 0,085). Läget uvarde är Rockwools rad för samma vind, 0,184 till 0,078
 * (specens fall 4a). Skikten och talen läses ur vindens rader ovanför.
 */
export const STANDARD: UVardeIndata = {
  lage: 'skikt',
  del: 'tak',
  ytaM2: STANDARD_PER_DEL.tak.ytaM2,
  region: 'mitt',
  skikt: STANDARD_SKIKT_PER_DEL.tak.skikt,
  tillagg: STANDARD_SKIKT_PER_DEL.tak.tillagg,
  uFore: STANDARD_PER_DEL.tak.uFore,
  uEfter: STANDARD_PER_DEL.tak.uEfter,
};

/* ------------------------------------------------------------------ *
 * Publika strängar. Skrivs av hantverkaren. Talen stoppar koden in.
 * ------------------------------------------------------------------ */

/** Ett råd under ”Gör inte det här”, med en länk i löptexten när lank finns (specen 12.41). */
export type GorInteText = { text: string; lank?: { href: string; text: string } };

/** lank: false visar källan som text; länken står då bara en gång, i källistan under antagandetabellen. */
type RegelText = { text: string; kalla: { titel: string; url: string; lank?: false } };
const kallaLank = (k: KallaRef): { titel: string; url: string } => ({ titel: k.titel, url: k.url });

/**
 * Tal i löptext med decimalkomma. Står här och inte vid formateringen längre
 * ner, eftersom reglernas texter byggs när modulen laddas och ska läsa
 * konstanterna i stället för att skriva av dem.
 */
const medKomma = (n: number): string => String(n).replace('.', ',');
const ELPRIS_TEXT = ELPRIS_KR_PER_KWH.toFixed(2).replace('.', ',');
/** Kronor med ören och komma: 44.95 blir "44,95". */
const krMedOren = (n: number): string => n.toFixed(2).replace('.', ',');
/** "Södra Sverige" blir "södra Sverige" mitt i en mening. Mellansverige är ett namn och behåller versalen. */
const regionIMening = (region: string): string =>
  region === 'Mellansverige' ? region : region.charAt(0).toLowerCase() + region.slice(1);

/**
 * Ett materialnamn mitt i en mening: "Gipsskiva" blir "gipsskiva", men ett namn
 * som börjar med märket eller en förkortning ("Rockwool Flexibatts", "PIR-skiva")
 * behåller versalen.
 */
const MARKEN = ['Rockwool', 'Paroc', 'Isover', 'Sundolitt', 'Kingspan'];
const materialIMening = (namn: string): string =>
  MARKEN.some((m) => namn.startsWith(m)) || /^[A-ZÅÄÖ]{2}/.test(namn)
    ? namn
    : namn.charAt(0).toLowerCase() + namn.slice(1);

/** Materialet i ett förslag: "Mineralull utan märke" blir bara "mineralull", märket står bara när läsaren valt det. */
const materialIForslag = (namn: string): string => materialIMening(namn).replace(/ utan märke$/, '');

/**
 * Rubrikorden för lösullen (specen 12.43). De korta namnen har parentes och
 * passar i listan men inte mitt i en uppmaning. Vindsull är standardfallets val
 * och heter bara "lösull". Orden står som koordinatorn specat dem.
 */
const RUBRIKORD: Partial<Record<MaterialNyckel, string>> = {
  'stenull-vindsull': 'lösull',
  'stenull-granulate': 'lösull av stenull',
  'glasull-fyllupp': 'lösull av glasull',
  cellulosa: 'cellulosa',
};

/**
 * Den enda vägen från ett material till ett ord i beskedets rubrik (specen
 * 12.37 och 12.43). materialIForslag används bara här.
 */
function namnIRubrik(m: MaterialNyckel, forval: boolean): string {
  const ord = RUBRIKORD[m];
  if (ord !== undefined) return ord;
  /* Utan märke står bara slaget av material: "mineralull", "cellplast" (specen 12.43). */
  if (m === 'mineralull-okand' || m === 'cellplast-okand') return materialIForslag(MATERIAL[m].kort);
  /* Slaget av material utan märke; visas bara när Flexibatts är förvalet på vägg och golv (specen 12.34). */
  if (m === 'stenull-flexibatts' && forval) return 'stenullsskivor';
  return materialIMening(MATERIAL[m].kort);
}

/** Delen som subjekt i rubrikerna när det gamla redan klarade kravet (specen 12.35). */
const DEL_I_RUBRIK: Record<Byggnadsdel, string> = {
  tak: 'Vinden',
  vagg: 'Väggen',
  golv: 'Golvet',
  fonster: 'Fönstret',
  dorr: 'Dörren',
};

/**
 * Tal under tretton med bokstäver i löptext (specen 12.44): 6 blir "sex". Större
 * tal står som siffror. Neutrum ("ett skikt") behövs inte, eftersom gränserna är
 * två och sex.
 */
const RAKNEORD = ['noll', 'en', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio', 'elva', 'tolv'] as const;
const raknaord = (n: number): string => (Number.isInteger(n) && n >= 0 && n < RAKNEORD.length ? RAKNEORD[n] : String(n));

/** Raden under beskedet av de meningar som gäller i fallet, i ordning. */
const meningar = (...delar: (string | false)[]): string =>
  delar.filter((d): d is string => typeof d === 'string' && d.length > 0).join(' ');

export const TEXT = {
  /*
   * rad är en funktion av läge, del och vad svaret innehåller (specen 12.28).
   * Varje rad ska stämma i alla fall där beskedet kan uppstå. Texterna före
   * 12 E står i kommentarerna som underlag för hantverkaren.
   */
  besked: {
    'bara-u-klarar': {
      rubrik: (v: BeskedVarden) => `U-värdet ${v.u} klarar redan Boverkets krav på ${v.grans}`,
      /*
       * Uppstår bara i läget skikt utan tillägg, för vind, vägg och golv.
       * Förut: "Vill du ändå se vad mer isolering sparar, välj isoleringen under
       * ”Det du lägger till” och räkna igen."
       */
      rad: (_k: BeskedKontext) =>
        'Du behöver inte lägga på mer för att klara kravet. För att se vad mer isolering ändå skulle spara väljer du den under ”Det du lägger till” och trycker på ”Räkna ut” igen.',
    },
    'bara-u-over': {
      rubrik: (v: BeskedVarden) =>
        v.mm !== null && v.material !== null
          ? `Lägg på ${v.mmTotalt} mm ${v.forslagNamn}, så kommer U-värdet ner till ${v.grans}`
          : `U-värdet ${v.u} ligger över Boverkets krav på ${v.grans}`,
      /*
       * Uppstår bara i läget skikt utan tillägg, för vind, vägg och golv.
       * Förut: "Under ”Det du lägger till” kan du pröva andra material och
       * tjocklekar och se vad varje förslag sparar i kronor om året."
       */
      rad: (_k: BeskedKontext) =>
        'Skriv in det du tänker lägga på under ”Det du lägger till”, så ser du U-värdet efter och vad det sparar i kronor om året.',
    },
    'ingen-forbattring': {
      rubrik: (v: BeskedVarden) => `U-värdet efter ska vara lägre än ${v.uFore}, men du skrev ${v.u}`,
      /*
       * Uppstår i läget uvarde, för alla fem delar. Förut: "Ett lägre U-värde är
       * bättre, så det lägre talet hör hemma i fältet ”U-värde efter”. Har du
       * skrivit talen i fel fält byter du bara plats på dem."
       */
      rad: (_k: BeskedKontext) =>
        'Det lägre talet hör hemma i fältet ”U-värde efter”, eftersom ett lägre U-värde betyder att mindre värme tar sig ut. Byt plats på talen om de har hamnat i fel fält.',
    },
    klarar: {
      /* Med tillägg säger rubriken vad som räckte, märket bara när läsaren valt det (specen 12.25). */
      rubrik: (v: BeskedVarden) => {
        if (v.klaradeFore && v.mmValt !== null && v.tillaggNamn !== null) {
          /* Skiktläget: det som sitter där klarade redan kravet, och läsaren har lagt till något (specen 12.35). */
          return v.kr !== null
            ? `${DEL_I_RUBRIK[v.del]} klarar redan kravet på ${v.grans}, och ${v.mmValt} mm ${v.tillaggNamn} till sparar ${v.kr} kr om året`
            : `${DEL_I_RUBRIK[v.del]} klarar redan kravet på ${v.grans}, och med ${v.mmValt} mm ${v.tillaggNamn} till blir U-värdet ${v.u}`;
        }
        if (v.klaradeFore && v.mmValt === null) {
          /* Läget ”Jag vet U-värdet”: U före klarade redan kravet, alla fem delar (specen 12.35). */
          return v.kr !== null
            ? `${DEL_I_RUBRIK[v.del]} klarar redan kravet på ${v.grans}, och med U-värdet ${v.u} sparar du ändå ${v.kr} kr om året`
            : `${DEL_I_RUBRIK[v.del]} klarar redan kravet på ${v.grans}, och efter jobbet blir U-värdet ${v.u}`;
        }
        return v.mmValt !== null && v.tillaggNamn !== null
          ? v.kr !== null
            ? `Lägger du på ${v.mmValt} mm ${v.tillaggNamn} klarar du kravet på ${v.grans} och sparar ${v.kr} kr om året`
            : `Lägger du på ${v.mmValt} mm ${v.tillaggNamn} klarar du kravet på ${v.grans} med U-värdet ${v.u}`
          : v.kr !== null
            ? `Efter jobbet klarar du kravet på ${v.grans} och sparar ${v.kr} kr om året`
            : `Efter jobbet klarar du kravet på ${v.grans} med U-värdet ${v.u}`;
      },
      /*
       * Uppstår i båda lägena och för alla fem delar. Förut: "Kravet klaras med
       * det du lägger till, inte med det som sitter där i dag. Hur snart det
       * betalar sig ser du i raden om återbetalning längre ner. Är det vinden du
       * isolerar tätar du genomföringarna och luckan först, och lämnar en öppen
       * spalt vid takfoten så att vinden fortfarande får luft."
       */
      rad: (k: BeskedKontext) =>
        meningar(
          /* Bara när det som sitter där i dag inte klarade kravet. */
          !k.klaradeFore && 'Det du har i dag klarar inte kravet, så det är först efter jobbet som U-värdet räcker.',
          /* Hänvisningen till återbetalningsraden, bara när den finns. */
          k.aterbetalning && 'Hur snart ullen har betalat sig står längre ner, under kronorna.',
          /* Rådet för delen: vind, vägg, golv. Fönster och dörr får inget vindsråd. */
          k.del === 'tak' &&
            'Täta först runt rör och andra genomföringar och runt vindsluckan. Vid takfoten lämnar du en öppen spalt, så att vinden fortfarande får luft.',
          k.del === 'vagg' &&
            'På en yttervägg ska vindskyddet sitta utanför den nya isoleringen och ångbromsen på den varma sidan, mot rummet. Om du isolerar inifrån behöver du också räkna på daggpunkten, för att se att fukt inte fälls ut inne i väggen.',
          k.del === 'golv' &&
            'Ullen i ett golv mot uteluft behöver ett vindskydd på undersidan, och golvet ska vara tätt mot ytterväggen hela vägen runt.',
          arFonsterEllerDorr(k.del) &&
            'Springan mellan karmen och väggen ska drevas och tätas, annars drar det kallt runt karmen hur bra fönstret eller dörren än är.',
        ),
    },
    'klarar-gamla': {
      rubrik: (v: BeskedVarden) =>
        `U-värdet ${v.u} räcker enligt de gamla reglerna men inte enligt de nya, som kräver ${v.grans}`,
      /*
       * Uppstår bara där kolumnerna har olika tal, i dag fönster och dörr i
       * läget uvarde. Förut: "Börjar arbetet före 1 oktober 2027 får du välja de
       * gamla reglerna, men då gäller de för hela jobbet och du kan inte blanda
       * in något ur de nya."
       */
      rad: (_k: BeskedKontext) =>
        'Du får välja de gamla reglerna om du påbörjar arbetet, söker bygglov eller gör en anmälan före 1 oktober 2027, men då gäller de för hela jobbet. Med de nya reglerna behöver du ett fönster eller en dörr med lägre Uw.',
    },
    'battre-men-over': {
      rubrik: (v: BeskedVarden) => {
        if (v.mm !== null && v.forslagNamn !== null && v.mmValt !== null && v.forval) {
          /* Tillägget är formulärets förval: utan ”du lagt in” och utan märke (specen 12.36). */
          return `Lägg på ${v.mmTotalt} mm ${v.forslagNamn} totalt, ${v.mm} mm mer än de ${v.mmValt} mm som står ifyllda, så kommer U-värdet ner till ${v.grans}`;
        }
        return v.mm !== null && v.forslagNamn !== null && v.mmValt !== null
          ? `Lägg på ${v.mmTotalt} mm ${v.forslagNamn} totalt, ${v.mm} mm utöver de ${v.mmValt} du lagt in, så kommer U-värdet ner till ${v.grans}`
          : v.mm !== null && v.forslagNamn !== null
            ? `Lägg på ${v.mmTotalt} mm ${v.forslagNamn}, så kommer U-värdet ner till ${v.grans}`
            : `U-värdet går ner från ${v.uFore} till ${v.u}, men kravet är ${v.grans}`;
      },
      /*
       * Uppstår i båda lägena; i läget uvarde finns inget valt tillägg. Förut:
       * "Det du valt sparar pengar varje år, men det räcker inte för att klara
       * kravet. Kravet gäller från 1 oktober 2026, och bara för den del av huset
       * du bygger om."
       */
      rad: (k: BeskedKontext) =>
        meningar(
          /* Läget skikt med tillägg som läsaren valt. */
          k.harTillagg &&
            !k.forval &&
            'Det du lagt till sparar pengar varje år, men det räcker inte för att klara kravet. Kravet gäller från 1 oktober 2026 och bara för den del av huset du bygger om.',
          /* Läget skikt med formulärets förval. */
          k.harTillagg &&
            k.forval &&
            'Det som står ifyllt sparar pengar varje år, men det räcker inte för att klara kravet. Kravet gäller från 1 oktober 2026 och bara för den del av huset du bygger om.',
          /* Läget uvarde, alla fem delar. */
          !k.harTillagg &&
            'Jobbet sparar pengar varje år, men U-värdet efter når inte ner till kravet. Kravet gäller från 1 oktober 2026 och bara för den del av huset du bygger om.',
        ),
    },
  } satisfies Record<Besked, { rubrik: (v: BeskedVarden) => string; rad: (k: BeskedKontext) => string }>,

  fel: {
    'del-skikt':
      'Ett fönster eller en dörr går inte att bygga upp av skikt. Välj ”Jag vet U-värdet” och skriv in talet från databladet.',
    'skikt-tomt': 'Välj minst ett material, så har jag något att räkna på.',
    'skikt-for-manga': (max: number) => `Räknaren tar högst ${raknaord(max)} skikt. Slå ihop två skikt av samma material.`,
    'material-okant': 'Det materialet känner jag inte igen. Välj ett ur listan.',
    'luftspalt-bara-vagg': 'En luftspalt går bara att räkna på en yttervägg. Ta bort raden eller byt till ”Yttervägg”.',
    tjocklek: (min: number, max: number) => `Skriv en tjocklek mellan ${min} och ${max} mm.`,
    'luftspalt-tva': 'Välj luftspalt bara en gång. Det som sitter utanför den första räknas ändå inte.',
    'luftspalt-innerst': 'Luftspalten kan inte ligga innerst. Börja listan med skiktet som vetter mot rummet.',
    'reglar-inte-isolering':
      'Reglarna kan bara stå i ett skikt av isolering. Välj raden med ullen mellan reglarna, eller ”Inga reglar”.',
    yta: (min: number, max: number) => `Skriv en yta mellan ${min} och ${max} m².`,
    'u-opak': (min: string, max: string) => `Skriv ett U-värde mellan ${min} och ${max} W/m²K.`,
    'u-fonster': (min: string, max: string) =>
      `Skriv ett U-värde mellan ${min} och ${max} W/m²K. Det står som Uw på databladet.`,
    'tillagg-for-manga': (max: number) => `Räknaren tar högst ${raknaord(max)} lager att lägga till.`,
  },

  /* lank.text står exakt en gång i text och blir en länk i löptexten (specen 12.41). */
  gorInte: {
    'ug-mot-kravet': {
      text: 'Ug på databladet gäller bara glaset, mätt mitt i rutan, och ser därför normalt bättre ut än Uw. Be om Uw i offerten och jämför två offerter på det talet.',
    },
    'glom-termostaten': {
      text: 'Sänk termostaterna när isoleringen är på plats. Energimyndigheten skriver att huset annars bara blir varmare inne, och då blir räkningen inte lägre.',
    },
    'inifran-utan-daggpunkt': {
      text: 'Lägger du isolering på insidan av en yttervägg flyttar du också punkten där det blir så kallt att fukt kan fällas ut. Räkna fram i daggpunktsräknaren var den hamnar med din inomhusluft, och gör det medan väggen fortfarande är öppen. På en källarvägg kan punkten hamna inne i muren, och då ska minst en del av isoleringen sitta på utsidan.',
      /* Länktexten står exakt en gång i meningen ovanför (specen 12.41). */
      lank: { href: '/rakna/daggpunkt/', text: 'daggpunktsräknaren' },
    },
  } satisfies Record<GorInte, GorInteText>,

  regel: {
    formel: {
      text: 'Varje skikts motstånd är tjockleken i meter delat med lambdavärdet, som anger hur bra materialet leder värme. Motstånden läggs ihop med luftens motstånd inne och ute, och U-värdet är 1 delat med summan. Metoden kommer från standarden SS-EN ISO 6946, så som Svenskt Trä återger den. Avsnittet där handlar om KL-trä, massiva skivor av korslimmat trä, men formeln och luftens motstånd är standardens egna och gäller lika för en vind eller en vägg av ull och reglar.',
      kalla: kallaLank(TRAGUIDEN),
    },
    luftspalt: {
      text: `I en ventilerad luftspalt strömmar uteluften fritt, så spalten och allt utanför den räknas inte. Utsidan räknas i stället som stilla luft, med motståndet ${medKomma(RSE_LUFTSPALT)} m²K/W i stället för ${medKomma(RSE)}, på samma sätt som isoleringstillverkaren Paroc räknar sina väggar.`,
      kalla: kallaLank(PAROC_FASAD),
    },
    reglar: {
      text: `Reglarna leder värme mycket bättre än ullen, så standarden räknar skiktet med reglar på två sätt. Den första räkningen utgår från att värmen antingen går rakt genom ullen eller rakt genom en regel, och den står på raden ”Ull och reglar var för sig” i tabellen. Den andra behandlar ull och trä som ett enda blandat material och står på raden ”Ull och reglar blandade”. U-värdet bygger på medelvärdet av de två. Andelen trä är ${Math.round(REGELANDEL * 100)} procent, med lambdavärdet ${medKomma(LAMBDA_REGEL)}, samma tal som i Svenskt Träs räkneexempel för en regelvägg. På skiktets egen rad i tabellen står motståndet genom ullen före snedstrecket och genom regeln efter.`,
      kalla: kallaLank(TRAGUIDEN),
    },
    'delta-u': {
      text: 'Standarden lägger till en liten korrektion för springor i isoleringen och för spik och skruv som går igenom den. I Svenskt Träs räkneexempel, en vägg av KL-trä med 170 mm isolering mellan reglar utanpå, är korrektionen 0,01 W/m²K. Här är den satt till noll. För en vägg byggd på samma sätt kan du själv lägga ungefär 0,01 på U-värdet.',
      kalla: kallaLank(TRAGUIDEN),
    },
    'tak-kallvind': {
      text: `På vindsbjälklagets utsida används motståndet ${medKomma(RSE)} m²K/W, som om ullen låg direkt mot uteluften. Bjälkarna eller takstolarna som går genom ullen räknas bara med om du under ”Vilket skikt sitter mellan reglar?” väljer skiktet med ullen. Rockwools tabell för samma vind räknar med takstolar på 1,2 meters avstånd. Ändå får jag ett sämre U-värde än i tabellen, eftersom den gamla ullen här får det sämre lambdavärdet för ull vars märke och ålder du inte känner till. Vinden som formuläret börjar med visar det: 0,216 W/m²K här mot 0,184 i tabellen.`,
      kalla: kallaLank(TRAGUIDEN),
    },
    'golv-uteluft': {
      text: 'Golvet räknas som ett bjälklag med uteluft rakt under. Ett golv mot en krypgrund eller direkt på mark räknas efter en annan standard, och för ett sådant golv blir talet här för högt.',
      kalla: kallaLank(TRAGUIDEN),
    },
    cellulosa: {
      text: `För cellulosa gäller här lambdavärdet ${(MATERIAL.cellulosa.lambda ?? NaN).toFixed(3).replace(".", ",")}, den sämre änden av Energimyndighetens spann på 0,037 till 0,040. Något aktuellt datablad från en tillverkare har jag inte hittat, så jag tar det försiktiga talet.`,
      kalla: kallaLank(ENERGIMYNDIGHETEN_ISOLERING),
    },
    'boverket-andring': {
      text: 'Boverkets krav gäller när du bygger om ett befintligt hus, och bara för den del du gör om. Ett nytt hus har i stället krav på ett genomsnittligt U-värde för hela huset, och det talet ger räknaren inte.',
      kalla: kallaLank(BFS_2026_9),
    },
    'boverket-overgang': {
      text: 'I de gamla reglerna är Boverkets U-värden ett mål att sträva mot, och i de nya, som gäller från 1 oktober 2026, är de ett krav. Om du påbörjar arbetet, söker bygglov eller gör en anmälan före 1 oktober 2027 får du välja de gamla reglerna. Då gäller de hela vägen, och du kan inte plocka delar ur båda.',
      kalla: kallaLank(BFS_2026_9),
    },
    'boverket-anpassning': {
      text: 'Kravet får mildras om mer isolering skulle kosta orimligt mycket mot vad den ger eller bara minska energianvändningen obetydligt. Det får också mildras av tekniska skäl eller för att skydda husets kulturvärden.',
      kalla: kallaLank(BFS_2026_9),
    },
    'boverket-50': {
      text: 'Ett hus med mindre än 50 kvadratmeter uppvärmd yta omfattas inte av de nya reglerna.',
      kalla: kallaLank(BFS_2026_9),
    },
    'fonster-uw': {
      text: 'För fönster och dörrar jämför jag med Uw, U-värdet för hela fönstret eller dörren med glas, båge och karm. Det är så jag läser föreskriften.',
      kalla: kallaLank(BFS_2026_9),
    },
    gradtimmar: {
      text: `Gradtimmarna säger hur mycket och hur länge det är kallt ute under ett normalår. Jag utgår från 3 720 graddagar för Mellansverige, som blir ${heltal(GRADTIMMAR.mitt)} gradtimmar. Södra Sverige får 20 procent färre och norra Sverige 35 procent fler. Både graddagarna och procentsatserna kommer från isoleringstillverkaren Rockwools guide för vinden. Rockwool nämner Örebro, Västerås och Uppsala som exempel på Mellansverige men drar inga gränser mot södra och norra Sverige, så du får själv välja den del av landet som stämmer bäst med din ort.`,
      kalla: kallaLank(ROCKWOOL_VIND),
    },
    elpris: {
      text: `Kronorna bygger på ${ELPRIS_TEXT} kr per kilowattimme, SCB:s genomsnitt för ${ELPRIS_KALLA.period}, för ${ELPRIS_KALLA.omfattar.replace(/, inklusive (.+)$/, ', med $1 inräknade')}. Med ett annat elpris tar du kilowattimmarna gånger ditt eget pris per kWh.`,
      kalla: { titel: ELPRIS_KALLA.titel, url: ELPRIS_KALLA.url },
    },
    scop: {
      text: 'Med värmepump delar jag den sparade värmen med pumpens SCOP, ett mått på hur många kilowattimmar värme den ger för varje kilowattimme el under ett helt år. Spannen kommer från Energimyndighetens tabell, och uträkningen utgår från att all värme kommer från pumpen. Energimyndigheten skriver att det är ovanligt att en pump klarar hela husets behov. Resten täcks oftast med el, så din besparing hamnar någonstans mellan pumpens tal och direktelens.',
      kalla: kallaLank(ENERGIMYNDIGHETEN_VP),
    },
    'energi-inte-matare': {
      text: 'Uträkningen visar hur mycket mindre värme som går ut genom konstruktionen, inte vad elmätaren kommer att visa. Den siffran beror också på hur du värmer huset.',
      kalla: kallaLank(ENERGIMYNDIGHETEN_ISOLERING),
    },
    'aterbetalning-bara-ull': {
      text: `I återbetalningstiden ingår bara ullen, i exakt mängd och utan spill, till Bauhaus priser den 24 september 2026. Lösull av stenull kostar där ungefär ${heltal(PRIS_VINDSULL_KR_M2_MM * 100)} kr per kvadratmeter för varje 100 mm, och Rockwool Flexibatts ${krMedOren(PRIS_FLEXIBATTS_45_KR_M2_MM * 45)} kr per kvadratmeter i 45 mm och ${krMedOren(PRIS_FLEXIBATTS_95_KR_M2_MM * 95)} kr i 95 mm. Reglar, läkt, skivor, ångbroms och vindskydd är inte med, och inte heller ränta, prisändringar eller rotavdrag.`,
      kalla: { ...kallaLank(BAUHAUS_VINDSULL), lank: false },
    },
  } satisfies Record<RegelNyckel, RegelText>,

  kolumn: {
    /*
     * Utan slutdatum på de gamla reglerna (specen 12.31): de får väljas fram
     * till 1 oktober 2027, vilket regeln boverket-overgang säger på varje svar.
     * Specens förslag: "Gamla regler" och "Nya regler från 1 oktober 2026".
     */
    'till-2026-09-30': 'Gamla regler',
    'fran-2026-10-01': 'Nya regler från 1 oktober 2026',
    /* En rad när kolumnerna har samma tal: vägg, vindsbjälklag och golv. Målet i de gamla reglerna, kravet i de nya. */
    bada: 'Boverket, gamla och nya regler',
  } satisfies Record<Kolumn | 'bada', string>,
  klarar: 'klarar',
  klararInte: 'klarar inte',

  aterbetalningSaknas: {
    'uvarde-lage':
      'Återbetalningstid saknas, eftersom jag inte vet vilket material du tänkt dig. Den får du om du räknar ”Skikt för skikt”.',
    /* Läget uvarde för fönster och dörr (specen 12.28). Skickar inte läsaren till Skikt för skikt. */
    'fonster-dorr':
      'Återbetalningstid saknas, eftersom jag inte har något pris på fönster och dörrar. Dela priset i offerten med kronorna om året här ovanför, så får du antalet år.',
    /*
     * Specen 12.45. Visas i läget skikt för vägg och golv när något sparas,
     * oavsett material. Kronorna om året står kvar ovanför.
     */
    'bara-vind':
      'Återbetalningstid saknas, eftersom jag bara har priset på isoleringen. En vägg eller ett golv måste också öppnas och få ny panel, läkt och vindskydd, så isoleringens pris säger för lite om vad jobbet kostar.',
    'inget-pris': 'Återbetalningstid saknas, för jag har bara pris på lösull av stenull och på Rockwool Flexibatts.',
    'ingen-besparing': 'Återbetalningstid saknas, eftersom inget sparas med de här talen.',
  } satisfies Record<AterbetalningSaknas, string>,

  /* Artikelns tabell, får stå enligt specen 2.9. */
  region: {
    mitt: 'Mellansverige',
    syd: 'Södra Sverige',
    norr: 'Norra Sverige',
  } satisfies Record<Region, string>,

  /* Ordet "tak" står inte ensamt: det kan vara yttertaket lika gärna som bjälklaget. */
  del: {
    vagg: 'Yttervägg',
    tak: 'Vindsbjälklag',
    golv: 'Golvbjälklag',
    fonster: 'Fönster',
    dorr: 'Ytterdörr',
  } satisfies Record<Byggnadsdel, string>,

  /* Energimyndighetens namn, får stå enligt specen 2.9. */
  vp: {
    'luft-luft': 'Luft-luft',
    'luft-vatten': 'Luft-vatten',
    'jord-sjo': 'Jord eller sjö',
    berg: 'Berg',
    franluft: 'Frånluft',
  } satisfies Record<VpTyp, string>,

  /* Kolumnen "Vad" i antagandetabellen, en per rad i ANTAGANDEN. */
  antagande: {
    formel: 'Formeln för U-värdet',
    'rsi-vagg': 'Luften inne mot en yttervägg',
    'rsi-tak': 'Luften inne mot vindsbjälklaget',
    'rsi-golv': 'Luften inne mot golvet',
    rse: 'Luften ute',
    'rse-luftspalt': 'Luften ute bakom en ventilerad luftspalt',
    regelandel: 'Andel trä i ett skikt med reglar',
    'lambda-regel': 'Lambdavärdet för trä i reglarna',
    'material-mineralull-okand': 'Mineralull med okänt märke och okänd ålder',
    'material-stenull-paroc': 'Stenull, skiva, Paroc eXtra',
    'material-stenull-flexibatts': 'Stenull, skiva, Rockwool Flexibatts',
    'material-stenull-granulate': 'Stenull, lösull maskinblåst, Rockwool Granulate Pro Plus',
    'material-stenull-vindsull': 'Stenull, lösull handutlagd, Rockwool Vindsull',
    'material-glasull-fyllupp': 'Glasull, lösull handutlagd, Isover Easy FyllUpp',
    'material-cellulosa': 'Cellulosa, lösull',
    'material-cellplast-okand': 'Cellplast med okänt märke',
    'material-eps': 'Cellplast EPS, Sundolitt S80',
    'material-pir': 'PIR, Kingspan Therma TW55',
    'material-tra': 'Trä, gran och furu',
    'material-gips': 'Gips',
    'material-lattbetong': 'Lättbetong 500 kg/m³, med fukt inräknad',
    'material-betong': 'Betong',
    'gradtimmar-mitt': 'Gradtimmar per år i Mellansverige',
    'gradtimmar-syd': 'Gradtimmar per år i södra Sverige',
    'gradtimmar-norr': 'Gradtimmar per år i norra Sverige',
    elpris: 'Elpriset',
    'scop-luft-luft': 'SCOP för luft-luftvärmepump',
    'scop-luft-vatten': 'SCOP för luft-vattenvärmepump',
    'scop-jord-sjo': 'SCOP för jord- eller sjövärme',
    'scop-berg': 'SCOP för bergvärme',
    'scop-franluft': 'SCOP för frånluftsvärmepump',
    'boverket-tak': 'Boverkets krav för vindsbjälklag, samma som målet i de gamla reglerna',
    'boverket-vagg': 'Boverkets krav för yttervägg, samma som målet i de gamla reglerna',
    'boverket-golv': 'Boverkets krav för golv, samma som målet i de gamla reglerna',
    'boverket-fonster': 'Boverkets mål för fönster i de gamla reglerna och kravet i de nya',
    'boverket-dorr': 'Boverkets mål för ytterdörr i de gamla reglerna och kravet i de nya',
    'pris-vindsull': 'Pris på lösull av stenull',
    'pris-flexibatts-45': 'Pris på Rockwool Flexibatts 45 mm',
    'pris-flexibatts-95': 'Pris på Rockwool Flexibatts 95 mm',
    'delta-u': 'Korrektion för springor, spik och skruv',
    'tillagg-utan-reglar': 'Det du lägger till',
    'skivpris-narmaste': 'Flexibatts upp till den här tjockleken räknas med 45-millimeterspriset, tjockare med 95-millimeterspriset',
    'exakt-atgang': 'Mängden ull i återbetalningen',
    'aterbetalning-direktel': 'Återbetalningstiden, räknad mot kronorna med direktverkande el',
    'hela-besparingen-vp': 'Hur stor del av värmen som kommer från värmepumpen',
    'tak-kallvind': 'Vindsbjälklag mot kall vind',
    'golv-uteluft': 'Golv, räknat som bjälklag med uteluft under',
    'granser-u': 'Tillåtna U-värden i fälten, först för vägg, vindsbjälklag och golv, sedan för fönster och dörr',
  } as Record<string, string>,

  /* Formuläret (specen avsnitt 3). */
  form: {
    'lage-rubrik': 'Hur vill du räkna?',
    'lage-skikt': 'Skikt för skikt',
    'lage-uvarde': 'Jag vet U-värdet',
    'lage-kompakt': 'Vet du redan U-värdet, eller gäller det ett fönster? Skriv in talet direkt.',
    'legend-del': 'Del av huset',
    'legend-skikt': 'Skikten inifrån och ut',
    'legend-tillagg': 'Det du lägger till',
    'legend-region': 'Del av landet',
    'etikett-yta': 'Yta',
    'etikett-uf': 'U-värde före',
    'etikett-ue': 'U-värde efter',
    'skikt-etikett': (n: number) => `Skikt ${n}`,
    'tillagg-etikett': (n: number) => `Tillägg ${n}`,
    'skikt-tomt-alternativ': 'Inget valt',
    'tjocklek-aria': (n: number) => `Skikt ${n}, tjocklek i millimeter`,
    'tillagg-tjocklek-aria': (n: number) => `Tillägg ${n}, tjocklek i millimeter`,
    'reglar-etikett': 'Vilket skikt sitter mellan reglar?',
    'reglar-inga': 'Inga reglar',
    'hjalp-reglar': `Välj skiktet där ullen ligger mellan reglar eller bjälkar, så räknas ${Math.round(REGELANDEL * 100)} procent av skiktet som trä. Talet kommer från branschorganisationen Svenskt Träs räkneexempel för en regelvägg med 170 mm isolering. På en vind med takstolar väljer du ”Inga reglar”. Rockwool räknar med takstolar på 1,2 meters avstånd, och med så glesa takstolar tar träet en betydligt mindre del av ytan än ${Math.round(REGELANDEL * 100)} procent.`,
    /* Skrivs om av hantverkaren (specen 12.13): luftspalten, tomt tjockleksfält, ny rad, inget om tegel. */
    'hjalp-skikt':
      'Börja med skiktet närmast rummet. På vinden är det innertaket i rummet under, och sedan går du uppåt, medan du i en vägg går inifrån och ut. Sitter väggens ytterpanel på läkt, med luft mellan panelen och vindskyddet, väljer du ”Ventilerad luftspalt” och lämnar tjockleken tom, för varken spalten eller panelen påverkar U-värdet. När du har fyllt i den sista raden och tryckt på ”Räkna ut” kommer en ny tom rad.',
    'hjalp-tillagg':
      'Det du lägger till räknar jag som hela lager, som om inget trä gick igenom dem. Det stämmer för lösull ovanpå den gamla ullen på vinden. På en vägg där det nya lagret sitter mellan egna reglar blir U-värdet i verkligheten något sämre än här.',
    'hjalp-yta':
      'För en yttervägg räknar du bort fönster och dörrar. För vinden gäller bjälklagets yta, ungefär golvytan i rummen under, och för ett fönster hela fönstret med karm.',
    'hjalp-uf':
      'Vet du inte talet kan du gissa utifrån byggåret. Enligt Energimyndigheten hade en yttervägg från sjuttiotalet 0,40 när den var ny, och ett vindsbjälklag från samma tid 0,30.',
    'hjalp-ue': 'Skriv det U-värde konstruktionen får när jobbet är klart, till exempel ur tillverkarens tabell för isoleringen du tänkt lägga på.',
    'hjalp-uw': 'Skriv talet som står som Uw på databladet, inte Ug.',
    /*
     * Hjälpraden direkt under ”Del av landet”, bara i fullt format (specen
     * 12.41). Rockwool nämner bara Örebro, Västerås och Uppsala och drar inga
     * gränser, så raden drar inga heller.
     */
    'hjalp-region':
      'Örebro, Västerås och Uppsala ligger i Mellansverige, enligt Rockwool som talen kommer från. Var gränserna mot södra och norra Sverige går säger Rockwool inte, så välj den del som bäst stämmer med hur långa och kalla vintrarna är där du bor.',
    /*
     * Rubrikerna på grupperna i materiallistorna, <optgroup label> (specen
     * 12.40). ovrigt står bara i skiktlistorna, inte bland tilläggen.
     */
    'grupp-okand': 'Okänt märke',
    'grupp-losull': 'Lösull, för hand eller inblåst',
    'grupp-skivor': 'Skivor',
    'grupp-ovrigt': 'Annat än isolering',
  },

  /* Resultatspalten (specen 4.4). Talen står med hårt mellanslag mot sin enhet. */
  spalt: {
    'etikett-u': 'U-värde',
    'rad-u-fore': (u: string) => `Före var det ${u} W/m²K.`,
    'etikett-sparar': 'Sparar per år',
    'rad-kwh': (kwh: string, region: string, period: string) =>
      `Det är ${kwh} kWh om året i ${regionIMening(region)}. Kronorna är räknade med direktverkande el och ${ELPRIS_TEXT} kr per kWh, SCB:s snitt för ${period}. Med värmepump sparar du mindre:`,
    'rad-vp': (namn: string, min: string, max: string) => `${namn}: ${min} till ${max} kr`,
    'rad-aterbetalning': (ar: string, kostnad: string) =>
      `Ullen kostar ${kostnad} kr om du lägger den själv, och den betalar sig på ${ar} år med direktverkande el och på längre tid med värmepump. Med en offert där en firma gör förarbetet och lägger ullen kan tiden bli flera gånger så lång.`,
    pekrad: 'Se uträkningen och var varje tal kommer ifrån',
    'dela-etikett': 'Dela uträkningen',
  },

  /* "Därför blev svaret så" (specen 4.5). */
  darfor: {
    'tabell-skikt': 'Skikt',
    'tabell-tjocklek': 'Tjocklek, mm',
    'tabell-lambda': 'λ, W/mK',
    'tabell-r': 'R, m²K/W',
    'tabell-caption': 'Motståndet i varje skikt och U-värdet före och efter',
    'raknas-inte': 'räknas inte',
    'rad-rsi': 'Luften inne, Rsi',
    'rad-rse': 'Luften ute, Rse',
    'rad-ovre': 'Ull och reglar var för sig',
    'rad-undre': 'Ull och reglar blandade',
    'rad-rt-fore': 'Motstånd före',
    'rad-u-fore-tabell': 'U-värde före',
    'rad-tillagg': (namn: string) => `Tillägg: ${namn}`,
    'rad-ovre-efter': 'Ull och reglar var för sig, efter',
    'rad-undre-efter': 'Ull och reglar blandade, efter',
    'rad-rt-efter': 'Motstånd efter',
    'rad-u-efter': 'U-värde efter',
    'slag-formel': 'Formeln',
    'slag-boverket': 'Boverket',
    'slag-besparing': 'Besparingen',
    /*
     * Etiketten över regler som säger vad räkningen förenklar: vindsbjälklaget
     * mot kall vind, golvet mot uteluft, korrektionen som sätts till noll, och
     * att uträkningen inte är elmätaren (specen 12.39).
     */
    'slag-begransning': 'Förenklingarna',
  },
};

/* ------------------------------------------------------------------ *
 * Formatering. Sidan använder bara dessa.
 * ------------------------------------------------------------------ */

const komma = (n: number): string => String(n).replace('.', ',');

/** Tre decimaler med komma: 0.35689 blir "0,357". */
export function treDecimaler(n: number): string {
  return n.toFixed(3).replace('.', ',');
}

/** Heltal med mellanrum som tusentalsavgränsare: 2271.28 blir "2 271". */
export function heltal(n: number): string {
  return Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

/** Ett tal med högst en decimal, med komma: 11.7188 blir "11,7". */
export function endecimal(n: number): string {
  const rundat = Math.round(n * 10) / 10;
  return String(rundat).replace('.', ',');
}

/** Decimalerna ett U-värde visas med: två för fönster och dörr, tre för resten (specen 12.3). */
const uDecimaler = (del: Byggnadsdel): number => (del === 'fonster' || del === 'dorr' ? 2 : 3);

/** U-värdet avrundat så som det visas. Jämförelsen med Boverket görs på det här talet. */
export function avrundaU(u: number, del: Byggnadsdel): number {
  const n = uDecimaler(del);
  return Math.round(u * 10 ** n) / 10 ** n;
}

/** U-värdet som text med komma: 1.15 för ett fönster blir "1,15", 0.4 för en vägg "0,400". */
export function uText(u: number, del: Byggnadsdel): string {
  return avrundaU(u, del).toFixed(uDecimaler(del)).replace('.', ',');
}

/* ------------------------------------------------------------------ *
 * Antagandetabellen. Värdena byggs av konstanterna.
 * ------------------------------------------------------------------ */

export interface AntagandeRad {
  nyckel: string;
  varde: string;
  typ: 'Källa' | 'Antagande';
  /** Tom för ett antagande utan källa. */
  kallor: KallaRef[];
}

const W_MK = 'W/mK';
const M2K_W = 'm²K/W';
const W_M2K = 'W/m²K';
const KR_M2_MM = 'kr/m²/mm';
const avrunda = (n: number, dec: number): number => Math.round(n * 10 ** dec) / 10 ** dec;

/** Material vars λ är ett antagande ur ett spann (cellulosa, mineralull och cellplast utan märke). */
const LAMBDA_ANTAGANDE: readonly MaterialNyckel[] = ['mineralull-okand', 'cellulosa', 'cellplast-okand'];

/** Boverkets värde: ett tal när kolumnerna är lika, annars båda (specen 12.15). */
function boverketVarde(d: Byggnadsdel): string {
  const a = BOVERKET['till-2026-09-30'][d];
  const b = BOVERKET['fran-2026-10-01'][d];
  return a === b ? `${komma(a)} ${W_M2K}` : `${komma(a)} och ${komma(b)} ${W_M2K}`;
}

export const ANTAGANDEN: AntagandeRad[] = [
  { nyckel: 'formel', varde: 'U = 1 / (Rsi + Σ d/λ + Rse)', typ: 'Källa', kallor: [TRAGUIDEN] },
  { nyckel: 'rsi-vagg', varde: `${komma(RSI.vagg)} ${M2K_W}`, typ: 'Källa', kallor: [TRAGUIDEN] },
  { nyckel: 'rsi-tak', varde: `${komma(RSI.tak)} ${M2K_W}`, typ: 'Källa', kallor: [TRAGUIDEN] },
  { nyckel: 'rsi-golv', varde: `${komma(RSI.golv)} ${M2K_W}`, typ: 'Källa', kallor: [SLU] },
  { nyckel: 'rse', varde: `${komma(RSE)} ${M2K_W}`, typ: 'Källa', kallor: [TRAGUIDEN] },
  { nyckel: 'rse-luftspalt', varde: `${komma(RSE_LUFTSPALT)} ${M2K_W}`, typ: 'Källa', kallor: [PAROC_FASAD] },
  { nyckel: 'regelandel', varde: `${komma(REGELANDEL * 100)} %`, typ: 'Källa', kallor: [TRAGUIDEN] },
  { nyckel: 'lambda-regel', varde: `${komma(LAMBDA_REGEL)} ${W_MK}`, typ: 'Källa', kallor: [TRAGUIDEN] },
  /* Luftspalten har ingen λ; raden rse-luftspalt bär den (specen 12.2). */
  ...MATERIAL_ORDNING.filter((m) => m !== 'luftspalt').map((m): AntagandeRad => {
    const mat = MATERIAL[m];
    return {
      nyckel: `material-${m}`,
      varde: `${komma(mat.lambda ?? NaN)} ${W_MK}`,
      typ: LAMBDA_ANTAGANDE.includes(m) ? 'Antagande' : 'Källa',
      kallor: [mat.kalla],
    };
  }),
  { nyckel: 'gradtimmar-mitt', varde: `${heltal(GRADTIMMAR.mitt)} °Ch`, typ: 'Källa', kallor: [ROCKWOOL_VIND] },
  { nyckel: 'gradtimmar-syd', varde: `${heltal(GRADTIMMAR.syd)} °Ch`, typ: 'Källa', kallor: [ROCKWOOL_VIND] },
  { nyckel: 'gradtimmar-norr', varde: `${heltal(GRADTIMMAR.norr)} °Ch`, typ: 'Källa', kallor: [ROCKWOOL_VIND] },
  {
    nyckel: 'elpris',
    varde: `${ELPRIS_KR_PER_KWH.toFixed(2).replace('.', ',')} kr/kWh, ${ELPRIS_KALLA.period}`,
    typ: 'Källa',
    kallor: [{ titel: ELPRIS_KALLA.titel, url: ELPRIS_KALLA.url, last: ELPRIS_KALLA.period }],
  },
  ...VP_TYPER.map(
    (v): AntagandeRad => ({
      nyckel: `scop-${v.typ}`,
      /* En decimal på båda, så att 5 står som 5,0 (specen 12.17). */
      varde: `${v.scopMin.toFixed(1).replace('.', ',')} till ${v.scopMax.toFixed(1).replace('.', ',')}`,
      typ: 'Källa',
      kallor: [ENERGIMYNDIGHETEN_VP],
    }),
  ),
  ...(['tak', 'vagg', 'golv', 'fonster', 'dorr'] as const).map(
    (d): AntagandeRad => ({
      nyckel: `boverket-${d}`,
      varde: boverketVarde(d),
      typ: 'Källa',
      kallor: [BBR_9_92, BFS_2026_9],
    }),
  ),
  {
    nyckel: 'pris-vindsull',
    varde: `${komma(avrunda(PRIS_VINDSULL_KR_M2_MM, 4))} ${KR_M2_MM}`,
    typ: 'Källa',
    kallor: [BAUHAUS_VINDSULL],
  },
  {
    nyckel: 'pris-flexibatts-45',
    varde: `${komma(avrunda(PRIS_FLEXIBATTS_45_KR_M2_MM, 4))} ${KR_M2_MM}`,
    typ: 'Källa',
    kallor: [BAUHAUS_FLEXIBATTS_45],
  },
  {
    nyckel: 'pris-flexibatts-95',
    varde: `${komma(avrunda(PRIS_FLEXIBATTS_95_KR_M2_MM, 4))} ${KR_M2_MM}`,
    typ: 'Källa',
    kallor: [BAUHAUS_FLEXIBATTS_95],
  },
  { nyckel: 'delta-u', varde: `0 ${W_M2K}`, typ: 'Antagande', kallor: [] },
  { nyckel: 'tillagg-utan-reglar', varde: 'hela lager utan reglar, innanför luftspalten om väggen har en', typ: 'Antagande', kallor: [] },
  { nyckel: 'skivpris-narmaste', varde: `${FLEXIBATTS_GRANS_MM} mm`, typ: 'Antagande', kallor: [] },
  { nyckel: 'exakt-atgang', varde: 'exakt åtgång, inget spill', typ: 'Antagande', kallor: [] },
  { nyckel: 'aterbetalning-direktel', varde: 'ullens pris delat med kronorna per år', typ: 'Antagande', kallor: [] },
  { nyckel: 'hela-besparingen-vp', varde: 'all värme från pumpen', typ: 'Antagande', kallor: [] },
  { nyckel: 'tak-kallvind', varde: `Rse ${komma(RSE)} ${M2K_W}`, typ: 'Antagande', kallor: [] },
  { nyckel: 'golv-uteluft', varde: `Rse ${komma(RSE)} ${M2K_W}`, typ: 'Antagande', kallor: [] },
  {
    nyckel: 'granser-u',
    varde: `${komma(GRANSER.uOpak[0])} till ${komma(GRANSER.uOpak[1])} och ${komma(GRANSER.uFonster[0])} till ${komma(GRANSER.uFonster[1])} ${W_M2K}`,
    typ: 'Antagande',
    kallor: [],
  },
];

/**
 * Raderna ur ANTAGANDEN som svaret vilar på, i tabellens ordning (specen 12.2).
 * Sidan visar bara dessa.
 */
export function antagandenFor(r: UVardeOk): AntagandeRad[] {
  const skikt = r.lage === 'skikt';
  const rader = r.detaljer?.rader ?? [];
  const harLuftspalt = rader.some((x) => x.material === 'luftspalt');
  const harRegelskikt = rader.some((x) => x.raknas && x.reglar);
  const raknade = new Set(rader.filter((x) => x.raknas).map((x) => x.material));
  const tillagg = rader.filter((x) => x.kalla === 'tillagg');
  const aterbetalning = r.aterbetalning !== null;
  const prisAnvant = new Set<string>();
  if (aterbetalning) {
    for (const t of tillagg) {
      const pris = materialprisKrM2Mm(t.material, t.tjocklekMm ?? NaN);
      if (pris === PRIS_VINDSULL_KR_M2_MM) prisAnvant.add('pris-vindsull');
      else if (pris === PRIS_FLEXIBATTS_45_KR_M2_MM) prisAnvant.add('pris-flexibatts-45');
      else if (pris === PRIS_FLEXIBATTS_95_KR_M2_MM) prisAnvant.add('pris-flexibatts-95');
    }
  }
  const harFlexibattsTillagg = tillagg.some((t) => MATERIAL[t.material].pris === 'flexibatts');
  const besparing = r.besparing !== null;

  const galler = (nyckel: string): boolean => {
    if (nyckel === 'formel' || nyckel === 'delta-u') return skikt;
    if (nyckel.startsWith('rsi-')) return skikt && nyckel === `rsi-${r.del}`;
    if (nyckel === 'rse') return skikt && !harLuftspalt;
    if (nyckel === 'rse-luftspalt') return harLuftspalt;
    if (nyckel === 'regelandel' || nyckel === 'lambda-regel') return harRegelskikt;
    if (nyckel.startsWith('material-')) return raknade.has(nyckel.slice('material-'.length) as MaterialNyckel);
    if (nyckel === 'tillagg-utan-reglar') return skikt && r.detaljer?.efter != null;
    if (nyckel === 'tak-kallvind') return skikt && r.del === 'tak';
    if (nyckel === 'golv-uteluft') return skikt && r.del === 'golv';
    if (nyckel.startsWith('boverket-')) return nyckel === `boverket-${r.del}`;
    if (nyckel.startsWith('gradtimmar-')) return besparing && nyckel === `gradtimmar-${r.region}`;
    if (nyckel === 'elpris' || nyckel.startsWith('scop-') || nyckel === 'hela-besparingen-vp') return besparing;
    if (nyckel === 'exakt-atgang' || nyckel === 'aterbetalning-direktel') return aterbetalning;
    if (nyckel.startsWith('pris-')) return prisAnvant.has(nyckel);
    if (nyckel === 'skivpris-narmaste') return aterbetalning && harFlexibattsTillagg;
    if (nyckel === 'granser-u') return !skikt;
    return false;
  };
  return ANTAGANDEN.filter((a) => galler(a.nyckel));
}

/* ------------------------------------------------------------------ *
 * Adressen
 * ------------------------------------------------------------------ */

const LAGEN: readonly Lage[] = ['skikt', 'uvarde'];
const DELAR: readonly Byggnadsdel[] = ['vagg', 'tak', 'golv', 'fonster', 'dorr'];
const REGIONER: readonly Region[] = ['mitt', 'syd', 'norr'];

function arLage(v: string | null): v is Lage {
  return v !== null && (LAGEN as readonly string[]).includes(v);
}
function arDel(v: string | null): v is Byggnadsdel {
  return v !== null && (DELAR as readonly string[]).includes(v);
}
function arRegion(v: string | null): v is Region {
  return v !== null && (REGIONER as readonly string[]).includes(v);
}
function arMaterial(v: string): v is MaterialNyckel {
  return (MATERIAL_ORDNING as readonly string[]).includes(v);
}

/**
 * Decimalkomma, mellanslag i talet och ett efterhängande "mm" eller "m2"
 * accepteras: "1 200" blir 1200, "12,5 mm" blir 12.5. Tomt eller skräp ger NaN.
 */
function tillTal(v: string | null): number {
  if (v === null) return NaN;
  const rensad = v
    .trim()
    .replace(/(mm|m2|m²)$/i, '')
    .replace(/\s/g, '')
    .replace(',', '.');
  if (rensad === '') return NaN;
  return Number(rensad);
}

const MAX_SKIKTRADER = 6;
const MAX_TILLAGGSRADER = 2;

/**
 * Vilka värden som togs ur standarden för delen i stället för ur adressen
 * (specen 12.27 och 12.30): nyckeln saknades, eller värdet var den gamla
 * delens standard och byttes när delen byttes.
 */
export interface ByttaVarden {
  yta: boolean;
  uf: boolean;
  ue: boolean;
  skikt: boolean;
  tillagg: boolean;
}

const SKIKT_DELAR: readonly SkiktDel[] = ['tak', 'vagg', 'golv'];
function arSkiktDel(v: string | null): v is SkiktDel {
  return v !== null && (SKIKT_DELAR as readonly string[]).includes(v);
}

/** Två tjocklekar är lika under 1e-9, och NaN är lika med NaN (luftspalten). */
const sammaTjocklek = (a: number, b: number): boolean =>
  (Number.isNaN(a) && Number.isNaN(b)) || Math.abs(a - b) < 1e-9;
const sammaSkikt = (a: Skikt[], b: Skikt[]): boolean =>
  a.length === b.length &&
  a.every((s, n) => s.rad === b[n].rad && s.material === b[n].material && s.reglar === b[n].reglar && sammaTjocklek(s.tjocklekMm, b[n].tjocklekMm));
const sammaTillagg = (a: Tillagg[], b: Tillagg[]): boolean =>
  a.length === b.length &&
  a.every((t, n) => t.rad === b[n].rad && t.material === b[n].material && sammaTjocklek(t.tjocklekMm, b[n].tjocklekMm));

export function tolkaQuery(q: URLSearchParams): {
  indata: UVardeIndata;
  harIndata: boolean;
  bytta: ByttaVarden;
} {
  const nycklar = ['lage', 'del', 'yta', 'region', 'uf', 'ue'];
  for (let n = 1; n <= MAX_SKIKTRADER; n++) nycklar.push(`m${n}`, `d${n}`);
  nycklar.push('rg');
  for (let n = 1; n <= MAX_TILLAGGSRADER; n++) nycklar.push(`tm${n}`, `td${n}`);
  const harIndata = nycklar.some((k) => q.has(k));

  const raLage = q.get('lage');
  const raDel = q.get('del');
  const raRegion = q.get('region');

  const del = arDel(raDel) ? raDel : STANDARD.del;
  /* Fönster och dörr räknas bara med känt U-värde (specen 12.29). */
  const lage: Lage = arFonsterEllerDorr(del) ? 'uvarde' : arLage(raLage) ? raLage : STANDARD.lage;
  /* Skikten för delen. Fönster och dörr har inga; där står vindens, som inte läses i läget uvarde. */
  const delensSkikt = arSkiktDel(del) ? STANDARD_SKIKT_PER_DEL[del] : STANDARD_SKIKT_PER_DEL.tak;

  /*
   * sd: delen som fälten fylldes i för (specen 12.27 och 12.30). Ett värde som
   * är lika med den delens standard byts mot den nya delens; ett värde läsaren
   * själv skrivit står kvar. Ett ogiltigt sd läses inte.
   */
  const raSd = q.get('sd');
  const sd = arDel(raSd) && raSd !== del ? raSd : null;

  /* rg: radnumret med reglar, 1 till 6. Tomt eller annat betyder inga reglar. */
  const raRg = q.get('rg')?.trim() ?? '';
  const rg = /^[1-6]$/.test(raRg) ? Number(raRg) : null;

  let skikt: Skikt[] = delensSkikt.skikt;
  let byttSkikt = true;
  if (q.has('rg')) skikt = delensSkikt.skikt.map((s) => ({ ...s, reglar: s.rad === rg }));
  const harSkikt = Array.from({ length: MAX_SKIKTRADER }, (_, i) => `m${i + 1}`).some((k) => q.has(k));
  if (harSkikt) {
    skikt = [];
    for (let n = 1; n <= MAX_SKIKTRADER; n++) {
      const m = q.get(`m${n}`);
      if (m === null || m.trim() === '') continue;
      const nyckel = m.trim();
      skikt.push({
        rad: n,
        material: arMaterial(nyckel) ? nyckel : null,
        tjocklekMm: tillTal(q.get(`d${n}`)),
        reglar: n === rg,
      });
    }
    byttSkikt = false;
    if (sd !== null && arSkiktDel(sd) && arSkiktDel(del) && sammaSkikt(skikt, STANDARD_SKIKT_PER_DEL[sd].skikt)) {
      skikt = delensSkikt.skikt;
      byttSkikt = true;
    }
  }

  let tillagg: Tillagg[] = delensSkikt.tillagg;
  let byttTillagg = true;
  const harTillagg = Array.from({ length: MAX_TILLAGGSRADER }, (_, i) => `tm${i + 1}`).some((k) => q.has(k));
  if (harTillagg) {
    tillagg = [];
    for (let n = 1; n <= MAX_TILLAGGSRADER; n++) {
      const m = q.get(`tm${n}`);
      if (m === null || m.trim() === '') continue;
      const nyckel = m.trim();
      tillagg.push({
        rad: n,
        /* Bara isolering går att lägga till (specen 12.19). */
        material: arMaterial(nyckel) && nyckel !== 'luftspalt' && MATERIAL[nyckel].isolering ? nyckel : null,
        tjocklekMm: tillTal(q.get(`td${n}`)),
      });
    }
    byttTillagg = false;
    if (sd !== null && arSkiktDel(sd) && arSkiktDel(del) && sammaTillagg(tillagg, STANDARD_SKIKT_PER_DEL[sd].tillagg)) {
      tillagg = delensSkikt.tillagg;
      byttTillagg = true;
    }
  }

  const nyStandard = STANDARD_PER_DEL[del];
  const gammalStandard = sd !== null ? STANDARD_PER_DEL[sd] : null;
  const falt = (nyckel: 'yta' | 'uf' | 'ue', namn: 'ytaM2' | 'uFore' | 'uEfter'): [number, boolean] => {
    if (!q.has(nyckel)) return [nyStandard[namn], true];
    const tal = tillTal(q.get(nyckel));
    if (gammalStandard !== null && Math.abs(tal - gammalStandard[namn]) < 1e-9) return [nyStandard[namn], true];
    return [tal, false];
  };
  const [ytaM2, byttYta] = falt('yta', 'ytaM2');
  const [uFore, byttUf] = falt('uf', 'uFore');
  const [uEfter, byttUe] = falt('ue', 'uEfter');

  const indata: UVardeIndata = {
    lage,
    del,
    ytaM2,
    region: arRegion(raRegion) ? raRegion : STANDARD.region,
    skikt,
    tillagg,
    uFore,
    uEfter,
  };
  /* Bytta skikt är den nya delens standard; rg gällde den gamla delens. */
  if (rg !== null && !(harSkikt && byttSkikt) && !skikt.some((s) => s.rad === rg)) indata.reglarPaTomRad = rg;
  return {
    harIndata,
    indata,
    bytta: { yta: byttYta, uf: byttUf, ue: byttUe, skikt: byttSkikt, tillagg: byttTillagg },
  };
}

/**
 * Adressen till svaret: lage, del, yta, region och sedan bara lägets nycklar.
 * rg bara när ett skikt har reglar.
 * Tal med komma. Utan tillägg skrivs `tm1=` ut, så att en tom lista inte blir
 * standardtillägget när adressen läses igen.
 */
export function delbarQuery(i: UVardeIndata): URLSearchParams {
  const q = new URLSearchParams();
  q.set('lage', i.lage);
  q.set('del', i.del);
  q.set('yta', komma(i.ytaM2));
  q.set('region', i.region);
  if (i.lage === 'skikt') {
    for (const s of i.skikt) {
      if (s.material === null) continue;
      q.set(`m${s.rad}`, s.material);
      if (s.material !== 'luftspalt') q.set(`d${s.rad}`, komma(s.tjocklekMm));
    }
    const regel = i.skikt.find((s) => s.reglar);
    if (regel) q.set('rg', String(regel.rad));
    if (i.tillagg.length === 0) q.set('tm1', '');
    for (const t of i.tillagg) {
      if (t.material === null) continue;
      q.set(`tm${t.rad}`, t.material);
      q.set(`td${t.rad}`, komma(t.tjocklekMm));
    }
  } else {
    q.set('uf', komma(i.uFore));
    q.set('ue', komma(i.uEfter));
  }
  return q;
}

/**
 * Adressen till länken som byter läge (specen 12.32): adressens egen query med
 * lage bytt och sd satt till den nuvarande delen, så att standardvärdena följer
 * med. Från fönster eller dörr till skikt för skikt blir delen vägg, och
 * skiktnycklarna och rg tas bort, så att väggen får sina egna standardskikt och
 * inte skikten från ett tidigare vindsläge. Inget annat ändras.
 */
export function bytLageQuery(q: URLSearchParams, i: UVardeIndata): URLSearchParams {
  const byt = new URLSearchParams(q);
  const tillLage: Lage = i.lage === 'skikt' ? 'uvarde' : 'skikt';
  byt.set('lage', tillLage);
  byt.set('sd', i.del);
  if (tillLage === 'skikt' && arFonsterEllerDorr(i.del)) {
    byt.set('del', 'vagg');
    for (const k of [...byt.keys()]) if (/^t?[md][1-6]$/.test(k)) byt.delete(k);
    byt.delete('rg');
  }
  return byt;
}

/* ------------------------------------------------------------------ *
 * Räkningen
 * ------------------------------------------------------------------ */

function inom(v: number, grans: readonly [number, number]): boolean {
  return Number.isFinite(v) && v >= grans[0] && v <= grans[1];
}

/**
 * U-värdet för en konstruktion. `homogena` är summan av d/λ för de skikt som
 * räknas utom regelskiktet. Med reglar räknas övre och undre gränsvärdet över
 * hela konstruktionen enligt SS-EN ISO 6946 så som Träguiden 9.3 återger den.
 */
export function uForSkikt(
  rsi: number,
  rse: number,
  homogena: number,
  regelskikt: { tjocklekMm: number; lambda: number } | null,
): Motstand {
  if (regelskikt === null) {
    const rTotal = rsi + homogena + rse;
    return { rsi, rse, rTotal, rOvre: null, rUndre: null, u: 1 / rTotal };
  }
  const d = regelskikt.tjocklekMm / 1000;
  const rIsol = rsi + homogena + d / regelskikt.lambda + rse;
  const rRegel = rsi + homogena + d / LAMBDA_REGEL + rse;
  const rOvre = 1 / ((1 - REGELANDEL) / rIsol + REGELANDEL / rRegel);
  const lambdaMix = (1 - REGELANDEL) * regelskikt.lambda + REGELANDEL * LAMBDA_REGEL;
  const rUndre = rsi + homogena + d / lambdaMix + rse;
  const rTotal = (rOvre + rUndre) / 2;
  return { rsi, rse, rTotal, rOvre, rUndre, u: 1 / rTotal };
}

/**
 * Sparade kilowattimmar per år ur skillnaden i U-värde, ytan och delen av landet.
 * Källa: Bygg & teknik 3/24, Marcus Dahlin, https://byggteknikforlaget.se/och-svarar-3-24/
 * (artikelns källa). Formeln återskapar Rockwools vindtabell, 9,46 kWh/m² och år.
 */
export function besparingKwh(skillnadU: number, ytaM2: number, region: Region): number {
  return (skillnadU * ytaM2 * GRADTIMMAR[region]) / 1000;
}

/** Pris per m² och mm för ett tillägg, eller null när materialet saknar pris. */
export function materialprisKrM2Mm(material: MaterialNyckel, tjocklekMm: number): number | null {
  const pris = MATERIAL[material].pris;
  if (pris === 'vindsull') return PRIS_VINDSULL_KR_M2_MM;
  if (pris === 'flexibatts') {
    return tjocklekMm <= FLEXIBATTS_GRANS_MM ? PRIS_FLEXIBATTS_45_KR_M2_MM : PRIS_FLEXIBATTS_95_KR_M2_MM;
  }
  return null;
}

function jamfor(u: number, del: Byggnadsdel): [Jamforelse, Jamforelse] {
  const rundat = avrundaU(u, del);
  const [a, b] = KOLUMNER;
  return [
    { kolumn: a, grans: BOVERKET[a][del], klarar: rundat <= BOVERKET[a][del] },
    { kolumn: b, grans: BOVERKET[b][del], klarar: rundat <= BOVERKET[b][del] },
  ];
}

const arFonsterEllerDorr = (del: Byggnadsdel): boolean => del === 'fonster' || del === 'dorr';

function validera(i: UVardeIndata): Partial<Record<FelNyckel, string>> {
  const fel: Partial<Record<FelNyckel, string>> = {};
  const [ytaMin, ytaMax] = GRANSER.ytaM2;
  const [tjMin, tjMax] = GRANSER.tjocklekMm;

  if (!inom(i.ytaM2, GRANSER.ytaM2)) fel.yta = TEXT.fel.yta(ytaMin, ytaMax);

  if (i.lage === 'skikt') {
    if (arFonsterEllerDorr(i.del)) fel.del = TEXT.fel['del-skikt'];

    if (i.skikt.length < GRANSER.antalSkikt[0]) fel.skikt = TEXT.fel['skikt-tomt'];
    else if (i.skikt.length > GRANSER.antalSkikt[1]) fel.skikt = TEXT.fel['skikt-for-manga'](GRANSER.antalSkikt[1]);

    for (const s of i.skikt) {
      const nyckel = `s${s.rad}` as FelNyckel;
      if (s.material === null) fel[nyckel] = TEXT.fel['material-okant'];
      else if (s.material === 'luftspalt' && i.del !== 'vagg') fel[nyckel] = TEXT.fel['luftspalt-bara-vagg'];
      else if (s.material !== 'luftspalt' && !inom(s.tjocklekMm, GRANSER.tjocklekMm))
        fel[nyckel] = TEXT.fel.tjocklek(tjMin, tjMax);
    }

    /* Reglarna: rg pekar på en tom rad, eller på ett material som inte är isolering. */
    const regelPaFel = i.skikt.some((s) => s.reglar && s.material !== null && !MATERIAL[s.material].isolering);
    if (i.reglarPaTomRad !== undefined || regelPaFel) fel.reglar = TEXT.fel['reglar-inte-isolering'];

    if (fel.skikt === undefined) {
      const luftspalter = i.skikt.filter((s) => s.material === 'luftspalt');
      if (luftspalter.length > 1) fel.skikt = TEXT.fel['luftspalt-tva'];
      else if (i.skikt[0]?.material === 'luftspalt') fel.skikt = TEXT.fel['luftspalt-innerst'];
    }

    if (i.tillagg.length > GRANSER.antalTillagg[1]) fel.tillagg = TEXT.fel['tillagg-for-manga'](GRANSER.antalTillagg[1]);
    for (const t of i.tillagg) {
      const nyckel = `t${t.rad}` as FelNyckel;
      if (t.material === null) fel[nyckel] = TEXT.fel['material-okant'];
      else if (!inom(t.tjocklekMm, GRANSER.tjocklekMm)) fel[nyckel] = TEXT.fel.tjocklek(tjMin, tjMax);
    }
  } else {
    const fonster = arFonsterEllerDorr(i.del);
    const grans = fonster ? GRANSER.uFonster : GRANSER.uOpak;
    const text = fonster ? TEXT.fel['u-fonster'] : TEXT.fel['u-opak'];
    if (!inom(i.uFore, grans)) fel.uFore = text(komma(grans[0]), komma(grans[1]));
    if (!inom(i.uEfter, grans)) fel.uEfter = text(komma(grans[0]), komma(grans[1]));
  }
  return fel;
}

/** Stegen i extraForGrans, mm. */
const EXTRA_STEG_MM = 10;

/**
 * Hur många millimeter av ett homogent extra lager med lambdavärdet `lambda` som
 * behövs för att U-värdet, avrundat som det visas, ska nå `grans`. Prövar 10,
 * 20 och så vidare upp till `maxMm`, som raknaUVarde sätter till tjocklekens
 * övre gräns minus tillägg 1, så att totalen aldrig blir en tjocklek formuläret
 * avvisar. null när inte ens den räcker. `homogena` är motståndet i de homogena
 * skikten inklusive de valda tilläggen. Specen 12.9 och 12.21.
 */
export function extraForGrans(
  rsi: number,
  rse: number,
  homogena: number,
  regelskikt: { tjocklekMm: number; lambda: number } | null,
  lambda: number,
  grans: number,
  del: Byggnadsdel,
  maxMm: number = GRANSER.tjocklekMm[1],
): number | null {
  for (let e = EXTRA_STEG_MM; e <= maxMm; e += EXTRA_STEG_MM) {
    const u = uForSkikt(rsi, rse, homogena + e / 1000 / lambda, regelskikt).u;
    if (avrundaU(u, del) <= grans) return e;
  }
  return null;
}

/**
 * Alla totaler som går att lägga ihop av skivorna i `tjocklekar`, stigande och
 * utan dubbletter, upp till och med `maxMm`: med 45 och 95 blir det 45, 90, 95,
 * 135, 140 och så vidare.
 */
export function skivsummor(tjocklekar: readonly number[], maxMm: number): number[] {
  const nar = new Set<number>([0]);
  for (let s = 0; s <= maxMm; s++) {
    if (!nar.has(s)) continue;
    for (const t of tjocklekar) if (s + t <= maxMm) nar.add(s + t);
  }
  return [...nar].filter((s) => s > 0).sort((a, b) => a - b);
}

/**
 * Som extraForGrans, men för ett skivmaterial (specen 12.46): den minsta total,
 * tillägg 1 (`valtMm`) plus det extra, som är en summa av skivtjocklekarna och
 * når `grans`. Returnerar det extra i mm, alltså totalen minus `valtMm`, eller
 * null när ingen total inom `maxTotalMm` räcker.
 */
export function extraSkivorForGrans(
  rsi: number,
  rse: number,
  homogena: number,
  regelskikt: { tjocklekMm: number; lambda: number } | null,
  lambda: number,
  grans: number,
  del: Byggnadsdel,
  valtMm: number,
  tjocklekar: readonly number[],
  maxTotalMm: number = GRANSER.tjocklekMm[1],
): number | null {
  for (const total of skivsummor(tjocklekar, maxTotalMm)) {
    const e = total - valtMm;
    if (e <= 0) continue;
    const u = uForSkikt(rsi, rse, homogena + e / 1000 / lambda, regelskikt).u;
    if (avrundaU(u, del) <= grans) return e;
  }
  return null;
}

/**
 * Talen till beskedets rubrik, färdiga att visa (specen 12.10). Gränsen är
 * kolumnen från 1 oktober 2026.
 */
export function beskedVarden(r: UVardeOk): BeskedVarden {
  /* Tillägg 1, i alla besked (specen 12.25). */
  const forsta = r.detaljer?.rader.find((x) => x.kalla === 'tillagg' && x.rad === 1) ?? null;
  const valt = forsta?.tjocklekMm ?? null;
  const saknasMm = r.saknas?.mm ?? null;
  /* Specen 12.36: tilläggen jämförs med delens förval, skikten inte. */
  const tillaggsrader = r.detaljer?.rader.filter((x) => x.kalla === 'tillagg') ?? [];
  const forvalet = arSkiktDel(r.del) ? STANDARD_SKIKT_PER_DEL[r.del].tillagg : [];
  const forval =
    r.lage === 'skikt' &&
    arSkiktDel(r.del) &&
    tillaggsrader.length === forvalet.length &&
    tillaggsrader.every(
      (x, n) =>
        x.rad === forvalet[n].rad &&
        x.material === forvalet[n].material &&
        sammaTjocklek(x.tjocklekMm ?? NaN, forvalet[n].tjocklekMm),
    );
  return {
    u: uText(r.uSlut, r.del),
    grans: komma(BOVERKET['fran-2026-10-01'][r.del]),
    uFore: uText(r.uFore, r.del),
    kr: r.besparing ? heltal(r.besparing.krPerAr) : null,
    mm: r.saknas ? heltal(r.saknas.mm) : null,
    material: r.saknas ? MATERIAL[r.saknas.material].kort : null,
    mmValt: valt !== null ? heltal(valt) : null,
    materialValt: forsta !== null ? MATERIAL[forsta.material].kort : null,
    mmTotalt: saknasMm !== null ? heltal(saknasMm + (valt ?? 0)) : null,
    klaradeFore: r.jamforelseFore[0].klarar && r.jamforelseFore[1].klarar,
    del: r.del,
    forval,
    tillaggNamn: forsta !== null ? namnIRubrik(forsta.material, forval) : null,
    forslagNamn: r.saknas ? namnIRubrik(r.saknas.material, forval) : null,
  };
}

/** Det raden under beskedet behöver veta (specen 12.28). */
export function beskedKontext(r: UVardeOk): BeskedKontext {
  return {
    lage: r.lage,
    del: r.del,
    klaradeFore: r.jamforelseFore[0].klarar && r.jamforelseFore[1].klarar,
    harTillagg: r.lage === 'skikt' && (r.detaljer?.rader.some((x) => x.kalla === 'tillagg') ?? false),
    forval: beskedVarden(r).forval,
    aterbetalning: r.aterbetalning !== null,
    aterbetalningSaknas: r.aterbetalningSaknas,
  };
}

export function raknaUVarde(i: UVardeIndata): UVardeResultat {
  const fel = validera(i);
  if (Object.keys(fel).length > 0) return { status: 'ogiltig', fel };

  const regler: RegelNyckel[] = [];
  let uFore: number;
  let uEfter: number | null;
  let detaljer: { rader: SkiktRad[]; fore: Motstand; efter: Motstand | null } | null = null;
  let harLuftspalt = false;
  let harRegelskikt = false;
  let harCellulosa = false;
  /* Det extraForGrans behöver, satt i skiktläget. */
  let bas: {
    rsi: number;
    rse: number;
    homogena: number;
    regelskikt: { tjocklekMm: number; lambda: number } | null;
  } | null = null;

  if (i.lage === 'skikt') {
    // Steg 1. Vilka skikt som räknas: allt innanför en eventuell luftspalt.
    const rsi = i.del === 'vagg' ? RSI.vagg : i.del === 'tak' ? RSI.tak : RSI.golv;
    let utanfor = false;
    const rader: SkiktRad[] = [];
    for (const s of i.skikt) {
      const material = s.material as MaterialNyckel;
      if (material === 'luftspalt') {
        utanfor = true;
        harLuftspalt = true;
        rader.push({ kalla: 'fore', rad: s.rad, material, tjocklekMm: null, lambda: null, r: null, rRegel: null, raknas: false, reglar: false });
        continue;
      }
      // Steg 2. Motståndet per skikt.
      const lambda = MATERIAL[material].lambda as number;
      const d = s.tjocklekMm / 1000;
      rader.push({
        kalla: 'fore',
        rad: s.rad,
        material,
        tjocklekMm: s.tjocklekMm,
        lambda,
        r: d / lambda,
        rRegel: s.reglar ? d / LAMBDA_REGEL : null,
        raknas: !utanfor,
        reglar: s.reglar,
      });
    }
    const rse = harLuftspalt ? RSE_LUFTSPALT : RSE;

    // Steg 3. U före. Ett regelskikt utanför luftspalten ger inga reglar.
    const regelrad = rader.find((r) => r.raknas && r.reglar) ?? null;
    harRegelskikt = regelrad !== null;
    const homogena = rader.filter((r) => r.raknas && r !== regelrad).reduce((sum, r) => sum + (r.r ?? 0), 0);
    const regelskikt =
      regelrad === null ? null : { tjocklekMm: regelrad.tjocklekMm as number, lambda: regelrad.lambda as number };
    const fore = uForSkikt(rsi, rse, homogena, regelskikt);

    // Steg 4. U efter: tilläggen ligger utan reglar innanför luftspalten (A1).
    let efter: Motstand | null = null;
    if (i.tillagg.length > 0) {
      let tillaggR = 0;
      for (const t of i.tillagg) {
        const material = t.material as Exclude<MaterialNyckel, 'luftspalt'>;
        const lambda = MATERIAL[material].lambda as number;
        const r = t.tjocklekMm / 1000 / lambda;
        tillaggR += r;
        rader.push({
          kalla: 'tillagg',
          rad: t.rad,
          material,
          tjocklekMm: t.tjocklekMm,
          lambda,
          r,
          rRegel: null,
          raknas: true,
          reglar: false,
        });
      }
      efter = uForSkikt(rsi, rse, homogena + tillaggR, regelskikt);
      bas = { rsi, rse, homogena: homogena + tillaggR, regelskikt };
    } else {
      bas = { rsi, rse, homogena, regelskikt };
    }

    harCellulosa = rader.some((r) => r.material === 'cellulosa');
    detaljer = { rader, fore, efter };
    uFore = fore.u;
    uEfter = efter?.u ?? null;
  } else {
    uFore = i.uFore;
    uEfter = i.uEfter;
  }

  // Steg 5 och 6. Talet som visas och jämförelsen.
  const uSlut = uEfter ?? uFore;
  const jamforelse = jamfor(uSlut, i.del);
  const jamforelseFore = jamfor(uFore, i.del);

  // Steg 7. Beskedet.
  let besked: Besked;
  if (uEfter === null) besked = jamforelse[0].klarar && jamforelse[1].klarar ? 'bara-u-klarar' : 'bara-u-over';
  else if (uEfter >= uFore) besked = 'ingen-forbattring';
  else if (jamforelse[0].klarar && jamforelse[1].klarar) besked = 'klarar';
  else if (jamforelse[0].klarar) besked = 'klarar-gamla';
  else besked = 'battre-men-over';

  // Steg 8. Besparingen.
  let besparing: Extract<UVardeResultat, { status: 'ok' }>['besparing'] = null;
  if (uEfter !== null && (besked === 'klarar' || besked === 'klarar-gamla' || besked === 'battre-men-over')) {
    const kwhPerAr = besparingKwh(uFore - uEfter, i.ytaM2, i.region);
    besparing = {
      gradtimmar: GRADTIMMAR[i.region],
      kwhPerAr,
      krPerAr: kwhPerAr * ELPRIS_KR_PER_KWH,
      varmepump: VP_TYPER.map((v) => ({
        typ: v.typ,
        scopMin: v.scopMin,
        scopMax: v.scopMax,
        krMin: (kwhPerAr / v.scopMax) * ELPRIS_KR_PER_KWH,
        krMax: (kwhPerAr / v.scopMin) * ELPRIS_KR_PER_KWH,
      })),
    };
  }

  // Steg 9. Återbetalningen, bara för ullen i egen läggning.
  let aterbetalning: { kostnadKr: number; ar: number } | null = null;
  let aterbetalningSaknas: AterbetalningSaknas | null = null;
  if (besparing === null) aterbetalningSaknas = 'ingen-besparing';
  /* Fönster och dörr går inte att räkna skikt för skikt, så de får en egen orsak (specen 12.28). */
  else if (i.lage === 'uvarde' && arFonsterEllerDorr(i.del)) aterbetalningSaknas = 'fonster-dorr';
  else if (i.lage === 'uvarde') aterbetalningSaknas = 'uvarde-lage';
  /*
   * Vägg och golv: modulen räknar bara skivorna, men jobbet kräver panel, läkt,
   * vindskydd och att konstruktionen öppnas, så en tid vore vilseledande. Bara
   * vindsbjälklaget får återbetalningstid (specen 12.45).
   */
  else if (i.del === 'vagg' || i.del === 'golv') aterbetalningSaknas = 'bara-vind';
  else {
    let kostnadKr = 0;
    let allaHarPris = true;
    for (const t of i.tillagg) {
      const pris = materialprisKrM2Mm(t.material as MaterialNyckel, t.tjocklekMm);
      if (pris === null) allaHarPris = false;
      else kostnadKr += i.ytaM2 * t.tjocklekMm * pris;
    }
    if (allaHarPris) aterbetalning = { kostnadKr, ar: kostnadKr / besparing.krPerAr };
    else aterbetalningSaknas = 'inget-pris';
  }

  // Steg 10. Gör inte det här.
  const gorInteDetHar: GorInte[] = [];
  if (i.del === 'fonster') gorInteDetHar.push('ug-mot-kravet');
  if (i.lage === 'skikt' && i.del === 'vagg' && i.tillagg.length > 0) gorInteDetHar.push('inifran-utan-daggpunkt');
  if (besparing !== null) gorInteDetHar.push('glom-termostaten');

  // Hur mycket mer som behövs för gränsen (specen 12.9).
  let saknas: UVardeOk['saknas'] = null;
  if (bas !== null && (besked === 'bara-u-over' || besked === 'battre-men-over')) {
    /* Ett märke står bara i beskedet när läsaren själv valt det (specen 12.20). */
    const forsta = i.tillagg[0];
    const material: MaterialNyckel | null = forsta ? forsta.material : 'mineralull-okand';
    const lambda = material === null ? null : MATERIAL[material].lambda;
    if (material !== null && lambda !== null) {
      const grans = BOVERKET['fran-2026-10-01'][i.del];
      const valtMm = forsta?.tjocklekMm ?? 0;
      const maxMm = GRANSER.tjocklekMm[1] - valtMm;
      /* Skivor föreslås i en total som går att köpa (specen 12.46); lösull och annat i steg om 10 mm. */
      const mm =
        MATERIAL[material].pris === 'flexibatts'
          ? extraSkivorForGrans(bas.rsi, bas.rse, bas.homogena, bas.regelskikt, lambda, grans, i.del, valtMm, FLEXIBATTS_TJOCKLEKAR_MM)
          : extraForGrans(bas.rsi, bas.rse, bas.homogena, bas.regelskikt, lambda, grans, i.del, maxMm);
      if (mm !== null) saknas = { mm, material, grans };
    }
  }

  // Steg 11. Reglerna som gäller, i fast ordning.
  if (i.lage === 'skikt') regler.push('formel');
  if (harLuftspalt) regler.push('luftspalt');
  if (harRegelskikt) regler.push('reglar');
  /* Regeln talar om en vägg byggd som Svenskt Träs exempel, så den står bara för väggen (specen 12.47). */
  if (i.lage === 'skikt' && i.del === 'vagg') regler.push('delta-u');
  if (i.lage === 'skikt' && i.del === 'tak') regler.push('tak-kallvind');
  if (i.lage === 'skikt' && i.del === 'golv') regler.push('golv-uteluft');
  if (harCellulosa) regler.push('cellulosa');
  if (arFonsterEllerDorr(i.del)) regler.push('fonster-uw');
  regler.push('boverket-andring', 'boverket-overgang', 'boverket-anpassning', 'boverket-50');
  if (besparing !== null) regler.push('gradtimmar', 'elpris', 'scop', 'energi-inte-matare');
  if (aterbetalning !== null) regler.push('aterbetalning-bara-ull');

  return {
    status: 'ok',
    lage: i.lage,
    del: i.del,
    ytaM2: i.ytaM2,
    region: i.region,
    uFore,
    uEfter,
    uSlut,
    detaljer,
    jamforelse,
    jamforelseFore,
    besked,
    besparing,
    aterbetalning,
    aterbetalningSaknas,
    gorInteDetHar,
    regler,
    saknas,
  };
}
