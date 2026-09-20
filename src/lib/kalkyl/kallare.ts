/**
 * Självbesiktning av källaren: vad är det för fukt, och vad gör du åt den?
 * Ren modul utan importer från Astro, testbar utan bygge. Sidan
 * /rakna/kallare/ skickar formuläret som GET och bedömer på servern, så ingen
 * rad av den här filen når klienten.
 *
 * Verktyget räknar inte, det bedömer, som bygglovsverktyget och pluggväljaren.
 * Det är guiden /fukt/fukt-i-kallaren/ gjord till en stegvis checklista:
 * läsaren kryssar i vad hen ser, vad tejptestet gav och vad hygrometern visar,
 * och får en diagnos plus nästa steg. Vattnet i en källare kommer från ett av
 * tre ställen, och de kräver tre helt olika saker av läsaren.
 *
 * Varje konstant står namngiven nedan med källa eller ANTAGANDE i kommentaren,
 * och underlaget med länk per rad ligger i
 * docs/briefer/underlag-kalkyl-kallare-2026-09-19.md. Inget påstående här står
 * utanför det underlaget eller guiden.
 *
 * Testas av scripts/test-kalkyl-kallare.mjs mot symptomtabellen och
 * tejptestets tre utfall i src/content/guider/fukt/fukt-i-kallaren.mdx.
 */

/** Det läsaren ser i källaren. En rad per rad i guidens symptomtabell. */
export type Symptom = 'salt' | 'flagnar' | 'imma' | 'horn' | 'rinner' | 'lukt';

/** Vad plasten på källarväggen visade efter minst två dygn. */
export type Tejptest = 'markfukt' | 'kondens' | 'torrt' | 'inte-gjort';

/** När läsaren tittar. Kondens i källare är ett sommarproblem enligt guiden. */
export type Arstid = 'sommar' | 'vinter';

/** Hur källaren används. Villkoret i Villaägarnas femtio år. */
export type Anvandning = 'kallare' | 'bebodd';

/** Svaret i stort format. */
export type Diagnos = 'markfukt' | 'kondens' | 'lackage' | 'hog-luftfuktighet' | 'oklart';

/**
 * Guidens egen ordning: titta först, tejpa sedan, mät, åtgärda sist. Varje
 * regel bär sitt steg, och listan under verktyget sorteras på det.
 */
export type Steg = 'titta' | 'tejpa' | 'mat' | 'atgarda';

export interface Regel {
  steg: Steg;
  /** Vad regeln säger om just den här källaren, i löptext. */
  text: string;
  /** Källan bakom regeln. */
  kalla: string;
}

/** En rad i guidens symptomtabell: vad du ser, trolig orsak, nästa steg. */
export interface SymptomRad {
  varde: Symptom;
  /** Vad du ser, alltså etiketten i formuläret. */
  etikett: string;
  /** Trolig orsak enligt guidens tabell. */
  trolig: string;
  /** Nästa steg enligt guidens tabell. */
  nastaSteg: string;
  /** Vilket av de tre vattnen raden pekar på. */
  pekarPa: 'markfukt' | 'kondens' | 'lackage' | 'fuktig-luft';
  kalla: string;
}

export interface KallareIndata {
  /** Raderna läsaren kryssat i. Flera får väljas, ordningen är tabellens. */
  symptom: Symptom[];
  tejptest: Tejptest;
  /** Relativ luftfuktighet i procent. null betyder inte mätt. */
  luftfuktighet: number | null;
  arstid: Arstid;
  anvandning: Anvandning;
}

export type KallareResultat =
  | {
      status: 'ok';
      diagnos: Diagnos;
      /** "Markfukt", "Kondens", "Läckage", och så vidare. */
      beskedRubrik: string;
      /** Beskedet i en rad. Spalten bär bara rubriken och den här. */
      beskedRad: string;
      /** Nästa steg i en mening, med länken som hör till. */
      nastaStegText: string;
      nastaStegLank: { text: string; href: string };
      /** Sant när svaret pekar mot en avfuktare, alltså vid kondens. */
      visaAvfuktare: boolean;
      /** Sant när svaret pekar mot en grävning, alltså vid markfukt. */
      visaDranering: boolean;
      /** Sant när svaret pekar mot en fuktutredning med mätvärden. */
      visaUtredning: boolean;
      /** Raderna läsaren kryssat i, i tabellens ordning, med guidens tolkning. */
      valdaSymptom: SymptomRad[];
      /** Över Boverkets gräns? null när hygrometern inte är avläst. */
      overKritiskRf: boolean | null;
      /** Reglerna som slog in, i guidens ordning. */
      regler: Regel[];
      gorInteDetHar: string[];
    }
  | {
      status: 'ogiltig';
      fel: Partial<Record<keyof KallareIndata, string>>;
    };

/**
 * Kritiskt fukttillstånd, alltså den relativa luftfuktighet som ska användas
 * när materialets eget värde inte är väl undersökt, och den nivå luften inte
 * bör ligga över under längre tid. Boverkets byggregler, BBR 6:52.
 * https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/boverkets-byggregler/fuktsakerhet/hogsta-tillatna-fukttillstand/
 */
export const KRITISK_RF = 75;

/**
 * Nivån hygrostaten ställs på, alltså givaren som startar och stoppar
 * avfuktaren. ANTAGANDE: guiden sätter den femton procentenheter under
 * Boverkets gräns för att maskinen ska ha marginal utan att gå i onödan.
 * Ingen källa anger ett exakt börvärde.
 */
export const HYGROSTAT_RF = 60;

/**
 * Så länge plasten ska sitta. Tidningen Gör Det Själv säger två veckor, en
 * målerifirma i Gustavsberg nöjer sig med ett till två dygn, och guiden landar
 * på minst två dygn med en vecka som säkrare.
 * https://gds.se/hus/inomhusklimat/fukt-i-kallare
 */
export const TEJPTEST_DYGN = 2;

/**
 * Hur länge hygrometern ska ligga nere innan talet betyder något. Guidens
 * symptomtabell säger en vecka på raden om tvätt som inte torkar.
 * ANTAGANDE: ingen källa anger en mättid, och en vecka täcker ett väderomslag.
 */
export const HYGROMETER_DYGN = 7;

/**
 * Hur länge en dränering kan hålla, enligt Villaägarna, med villkoret att
 * källaren bara används som källare.
 * https://www.villaagarna.se/radgivning-och-tips/utomhus/grund/maste-du-dranera-huset/
 */
export const KAN_HALLA_AR = 50;

/**
 * De tre talen ur kostnadstabellen i /fukt/fukt-i-kallaren/. Avfuktaren är
 * Wood's SW39FW hos Proffsmagasinet, läst 16 september 2026. Fuktkontrollen är
 * saneringsföretaget Ocabs eget listpris för ett källarutrymme. Dräneringen är
 * Villaägarnas arbetskostnad per löpmeter husgrund.
 */
export const AVFUKTARE_KR = 5948;
export const FUKTUTREDNING_KR = 5355;
export const DRANERING_KR_PER_LOPMETER = 3000;

/**
 * Räkneexemplet i samma avsnitt: en villagrund på 40 löpmeter. Talet används
 * bara för att visa vad en felaktig grävning kostar mot en felaktig maskin.
 */
export const VILLAGRUND_LOPMETER = 40;

/**
 * Vattnet från taket, som motiverar stuprör och markfall före allt annat.
 * Skadedjurs- och besiktningsföretaget Anticimex.
 * https://www.anticimex.se/fuktskador/grund-kallare/
 */
export const TAK_KVM = 150;
export const REGN_MM = 20;
export const REGN_LITER = 3000;

/**
 * Guidens säsong för kondens i en uppvärmd källare: juli till september.
 * Symptomtabellens rad om imma på kallvattenrör anger samma månader.
 */
export const KONDENS_MANAD_FRAN = 7;
export const KONDENS_MANAD_TILL = 9;

/** Guiden, alltså sidan varje rad i det här verktyget kommer ifrån. */
export const GUIDE = '/fukt/fukt-i-kallaren/';

/**
 * Ankarna till guidens avsnitt. Rubrikerna genererar id själva i bygget, och
 * ändras en rubrik i fukt-i-kallaren.mdx måste raden nedan ändras med den.
 */
export const GUIDE_TEJPTEST = `${GUIDE}#tejptestet-svarar-på-två-dygn`;
export const GUIDE_MARKFUKT = `${GUIDE}#markfukt-i-källaren-kommer-genom-väggen`;
export const GUIDE_KONDENS = `${GUIDE}#kondens-i-källaren-vädrar-du-in-själv`;
export const GUIDE_LACKAGE = `${GUIDE}#läckage-kommer-med-regnet`;

/**
 * Symptomtabellen, rad för rad som den står i /fukt/fukt-i-kallaren/. Tabellen
 * är vår egen sammanställning; källan per rad står i fältet kalla, och de rader
 * som bara vilar på guiden säger det.
 */
export const SYMPTOM: SymptomRad[] = [
  {
    varde: 'salt',
    etikett: 'Vita ränder eller kristaller på betongen',
    trolig: 'Markfukt',
    nastaSteg: 'Gör tejptestet',
    pekarPa: 'markfukt',
    kalla: 'Villaägarna, saltutfällningar är ett tecken på att vägg och källargolv är fuktiga',
  },
  {
    varde: 'flagnar',
    etikett: 'Färg eller puts som bubblar och släpper i sjok på den nedersta halvmetern',
    trolig: 'Markfukt',
    nastaSteg: 'Gör tejptestet',
    pekarPa: 'markfukt',
    kalla: 'Vår guide om fukt i källaren: markfukt bakom ett ytskikt som är för tätt',
  },
  {
    varde: 'imma',
    etikett: 'Imma på kallvattenrören och en vägg som är fuktig överallt, juli till september',
    trolig: 'Kondens',
    nastaSteg: 'Gör tejptestet, häng sedan upp en hygrometer',
    pekarPa: 'kondens',
    kalla: 'Vår guide om fukt i källaren, symptomtabellen',
  },
  {
    varde: 'horn',
    etikett: 'En mörk fläck i hörnet bakom en hylla, torr vägg i övrigt',
    trolig: 'Kondens',
    nastaSteg: 'Flytta hyllan och mät igen om två veckor',
    pekarPa: 'kondens',
    kalla: 'Vår guide om fukt i källaren: en kall punkt där luften står still',
  },
  {
    varde: 'rinner',
    etikett: 'Rinnmärken eller en pöl vid en rörgenomföring efter regn',
    trolig: 'Läckage',
    nastaSteg: 'Följ vattnet uppåt och utåt',
    pekarPa: 'lackage',
    kalla: 'Vår guide om fukt i källaren, symptomtabellen',
  },
  {
    varde: 'lukt',
    etikett: 'Tvätt som aldrig torkar, unken lukt som kommer och går',
    trolig: 'Hög luftfuktighet',
    nastaSteg: 'Häng en hygrometer där nere i en vecka',
    pekarPa: 'fuktig-luft',
    kalla: 'Folkhälsomyndigheten räknar mikrobiell lukt som en indikation på fuktskada',
  },
];

export const TEJPTESTER: { varde: Tejptest; etikett: string; hjalp: string }[] = [
  {
    varde: 'markfukt',
    etikett: 'Fukt på plastens insida, mot väggen',
    hjalp: 'Då kommer vattnet genom betongen. Det är markfukt.',
  },
  {
    varde: 'kondens',
    etikett: 'Fukt på plastens utsida, mot rummet',
    hjalp: 'Då kommer vattnet ur luften i källaren. Det är kondens.',
  },
  {
    varde: 'torrt',
    etikett: 'Torrt på båda sidor',
    hjalp: 'Då satt plasten troligen på fel vägg. Flytta den och gör om testet.',
  },
  {
    varde: 'inte-gjort',
    etikett: 'Jag har inte gjort testet',
    hjalp: 'Det kostar dig en bit plastfolie och två dygn.',
  },
];

export const ARSTIDER: { varde: Arstid; etikett: string; hjalp: string }[] = [
  {
    varde: 'sommar',
    etikett: 'Sommar, juli till september',
    hjalp: 'Den varma luften du vädrar in möter en kall vägg, och då fäller den ut vatten.',
  },
  {
    varde: 'vinter',
    etikett: 'Resten av året, oktober till juni',
    hjalp: 'Uteluften bär mindre vatten, så fukten kommer inifrån huset eller ur marken.',
  },
];

export const ANVANDNINGAR: { varde: Anvandning; etikett: string; hjalp: string }[] = [
  {
    varde: 'kallare',
    etikett: 'Bara källare, alltså förråd, tvättstuga eller pannrum',
    hjalp: 'Kraven är lägre, och en gammal dränering får leva vidare längre.',
  },
  {
    varde: 'bebodd',
    etikett: 'Inredd och bebodd, alltså sovrum, gillestuga eller kontor',
    hjalp: 'Då gäller kraven på ett bostadsrum, och fukten blir en hälsofråga.',
  },
];

export const BESKED_RUBRIK: Record<Diagnos, string> = {
  markfukt: 'Markfukt',
  kondens: 'Kondens',
  lackage: 'Läckage',
  'hog-luftfuktighet': 'Fuktig luft utan känd orsak',
  oklart: 'Vet inte än',
};

/**
 * Standardvärdena: ingenting ikryssat, inget tejptest gjort och ingen
 * hygrometer avläst, en sommarkällare som används som källare. Det är med
 * flit. Den som landar från Google ska mötas av guidens eget svar, alltså gör
 * tejptestet först, och inte av en diagnos verktyget hittat på åt henne.
 */
export const STANDARD: KallareIndata = {
  symptom: [],
  tejptest: 'inte-gjort',
  luftfuktighet: null,
  arstid: 'sommar',
  anvandning: 'kallare',
};

/**
 * Hygrometern är enda talet i verktyget. Nedre kanten är vår: en hygrometer i
 * en svensk källare som visar under en procent är ett felskrivet fält, inte en
 * mätning. Övre kanten är fysikens, mättad luft.
 */
export const GRANSER = {
  luftfuktighet: [1, 100],
} as const;

/*
 * Råden skrivs enligt docs/STILGUIDE.md: högst ett tal per mening, och två
 * bara när de två talen är jämförelsen.
 */

const GOR_INTE_AVFUKTARE_MOT_MARKFUKT =
  'Köp inte en avfuktare mot markfukt. Maskinen torkar luften i rummet, mer vatten dunstar ur väggen, och väggen suger efter mer ur marken. Betongen är lika våt som förut, och du betalar för det dygnet runt.';

const GOR_INTE_LITA_PA_TORR_PLAST =
  'Lita inte på torr plast. Torrt på båda sidor betyder oftast att du tejpade på fel vägg, och sällan att källaren är frisk. Flytta plasten till den lägsta punkten på en vägg som ligger mot mark, helst i ett hörn, och gör om testet.';

const GOR_INTE_OFFERT_UTAN_MATVARDEN =
  'Ring inte efter en offert på en åtgärd innan du har en fuktutredning med mätvärden. Du vill se luftfuktighet och temperatur i materialet, var i huset de mätte och vilken slutsats de drar av just de talen. Ett papper utan en enda siffra är ett säljbesök.';

const GOR_INTE_TAT_MATTA =
  'Sätt inte en tät plastmatta mot källarväggens utsida som enda fuktskydd. Villaägarna avråder från det, för den kalla marken gör att fukten fastnar i väggen i stället för att vandra ut. Skyddet ska stoppa vattnet utifrån och samtidigt släppa ut det som redan sitter i betongen.';

/** Decimalkomma accepteras: '72,5' blir 72.5. Tomt fält ger null, skräp ger NaN. */
function tillTal(v: string | null): number {
  if (v === null) return NaN;
  const rensad = v.trim().replace(/\s/g, '').replace(',', '.').replace('−', '-');
  if (rensad === '') return NaN;
  return Number(rensad);
}

/** Kronor med mellanrum som tusentalsavgränsare, som stilguiden vill. */
export function kronor(n: number): string {
  return Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function arSymptom(v: string): v is Symptom {
  return SYMPTOM.some((s) => s.varde === v);
}

function arTejptest(v: string | null): v is Tejptest {
  return v === 'markfukt' || v === 'kondens' || v === 'torrt' || v === 'inte-gjort';
}

function arArstid(v: string | null): v is Arstid {
  return v === 'sommar' || v === 'vinter';
}

function arAnvandning(v: string | null): v is Anvandning {
  return v === 'kallare' || v === 'bebodd';
}

/**
 * Läser adressen. Kryssrutorna kommer som flera värden på samma nyckel, och
 * okända värden faller bort tyst; ordningen blir alltid symptomtabellens,
 * oavsett i vilken ordning de står i adressen. Skräp i ett val faller tillbaka
 * på standardvärdet. Ett tomt hygrometerfält betyder inte mätt, skräp i det
 * ger ett fel på just det fältet.
 */
export function tolkaQuery(q: URLSearchParams): { indata: KallareIndata; harIndata: boolean } {
  const nycklar = ['se', 'tejp', 'rf', 'arstid', 'bruk'];
  const harIndata = nycklar.some((n) => q.has(n));

  const valda = new Set(q.getAll('se').filter(arSymptom));
  const raTejp = q.get('tejp');
  const raArstid = q.get('arstid');
  const raBruk = q.get('bruk');
  const raRf = q.get('rf');

  return {
    harIndata,
    indata: {
      symptom: SYMPTOM.filter((s) => valda.has(s.varde)).map((s) => s.varde),
      tejptest: arTejptest(raTejp) ? raTejp : STANDARD.tejptest,
      luftfuktighet: raRf === null || raRf.trim() === '' ? null : tillTal(raRf),
      arstid: arArstid(raArstid) ? raArstid : STANDARD.arstid,
      anvandning: arAnvandning(raBruk) ? raBruk : STANDARD.anvandning,
    },
  };
}

/** Raderna läsaren kryssat i, i tabellens ordning. */
function valdaRader(symptom: Symptom[]): SymptomRad[] {
  const valda = new Set(symptom);
  return SYMPTOM.filter((s) => valda.has(s.varde));
}

export function bedomKallare(i: KallareIndata): KallareResultat {
  const fel: Partial<Record<keyof KallareIndata, string>> = {};

  if (i.luftfuktighet !== null) {
    const rf = i.luftfuktighet;
    const inom = Number.isFinite(rf) && rf >= GRANSER.luftfuktighet[0] && rf <= GRANSER.luftfuktighet[1];
    if (!inom) {
      fel.luftfuktighet = `Skriv luftfuktigheten mellan ${GRANSER.luftfuktighet[0]} och ${GRANSER.luftfuktighet[1]} procent, eller lämna fältet tomt`;
    }
  }
  if (Object.keys(fel).length > 0) return { status: 'ogiltig', fel };

  const valda = valdaRader(i.symptom);
  const pekar = (vad: SymptomRad['pekarPa']) => valda.some((s) => s.pekarPa === vad);
  const harLackage = pekar('lackage');
  const harMarkfukt = pekar('markfukt');
  const harKondens = pekar('kondens');
  const harFuktigLuft = pekar('fuktig-luft');
  const overKritiskRf = i.luftfuktighet === null ? null : i.luftfuktighet >= KRITISK_RF;

  /*
   * Prioritetsordningen. ANTAGANDE: ingen källa rangordnar indata mot varandra,
   * och ordningen nedan är vår.
   *
   * Läckaget går först, eftersom det är det enda av de tre vattnen som kan bli
   * akut och det enda tejptestet aldrig ser: plasten sitter på en vägg, vattnet
   * kommer vid en genomföring. Guiden säger att det ska följas uppåt och utåt
   * först.
   *
   * Sedan tejptestet, som är en mätning och inte ett intryck. Sedan symptomen,
   * som guidens tabell redan har tolkat åt läsaren. Hygrometern sist: den säger
   * att luften är fuktig, aldrig varifrån vattnet kommer.
   */
  const diagnos: Diagnos = harLackage
    ? 'lackage'
    : i.tejptest === 'markfukt'
      ? 'markfukt'
      : i.tejptest === 'kondens'
        ? 'kondens'
        : i.tejptest === 'torrt'
          ? 'oklart'
          : harMarkfukt && harKondens
            ? 'oklart'
            : harMarkfukt
              ? 'markfukt'
              : harKondens
                ? 'kondens'
                : harFuktigLuft || overKritiskRf === true
                  ? 'hog-luftfuktighet'
                  : 'oklart';

  const tejpatUt = i.tejptest === 'markfukt' || i.tejptest === 'kondens';
  const visaAvfuktare = diagnos === 'kondens';
  const visaDranering = diagnos === 'markfukt';
  const visaUtredning = diagnos === 'lackage' || diagnos === 'oklart' || diagnos === 'hog-luftfuktighet';

  // Steg 1. Titta. En rad per kryss, med guidens egen tolkning på raden.
  const titta: Regel[] = valda.map((s) => ({
    steg: 'titta',
    text: `${s.etikett}. Det pekar mot ${s.trolig.toLowerCase()}, och nästa steg enligt tabellen är: ${s.nastaSteg.toLowerCase()}.`,
    kalla: s.kalla,
  }));
  if (valda.length === 0) {
    titta.push({
      steg: 'titta',
      text: 'Du har inte kryssat i något än. Gå ner med en ficklampa och en torr trasa, torka där väggen ser mörkast ut, känn på golvet längs ytterväggarna och dra ut det som står tätt mot dem. Tio minuter där nere stryker oftast två av orsakerna direkt.',
      kalla: 'Guiden om fukt i källaren, avsnittet Titta först',
    });
  }

  // Steg 2. Tejpa. Testets tre utfall, plus raden för den som inte gjort det.
  const tejpa: Regel[] = [];
  if (i.tejptest === 'markfukt') {
    tejpa.push({
      steg: 'tejpa',
      text: 'Plasten är våt på insidan, mot väggen. Vattnet kommer genom betongen, och det är markfukt. Boverket är tydligt med att skyddet mot den hör hemma på utsidan av väggen.',
      kalla: 'Tejptestet beskrivs av tidningen Gör Det Själv. Boverket, fuktinträngning från mark till källarvägg',
    });
  } else if (i.tejptest === 'kondens') {
    tejpa.push({
      steg: 'tejpa',
      text: 'Plasten är våt på utsidan, mot rummet. Luften bär mer vatten än den kalla väggen tål, och det är kondens. Det här är det enda av de tre fallen där en maskin är rätt svar.',
      kalla: 'Tejptestet beskrivs av tidningen Gör Det Själv',
    });
  } else if (i.tejptest === 'torrt') {
    tejpa.push({
      steg: 'tejpa',
      text: 'Torr plast på båda sidor betyder inte att du är frisk. Det betyder att du tejpade på fel vägg, så gör om testet på den lägsta punkten av en vägg som ligger mot mark.',
      kalla: 'Guiden om fukt i källaren, tejptestets tredje utfall',
    });
  } else {
    tejpa.push({
      steg: 'tejpa',
      text: `Du har inte gjort tejptestet än, och det är den enda mätning som skiljer markfukt från kondens. Tejpa en bit plastfolie på 50 gånger 50 cm tätt mot den våtaste väggen och vänta minst ${TEJPTEST_DYGN} dygn.`,
      kalla: 'Tidningen Gör Det Själv säger två veckor, en målerifirma ett till två dygn. Min gräns ligger däremellan',
    });
  }
  if (tejpatUt) {
    tejpa.push({
      steg: 'tejpa',
      text: 'Tejpa gärna två lappar på samma vägg, en vid golvet och en i brösthöjd. Vatten stiger högre i finporösa material än i grova, så är den nedre våt på väggsidan och den övre torr har du hittat gränsen där vattnet slutar orka uppåt.',
      kalla: 'Saneringsföretaget Polygon, fukttransport',
    });
  }

  // Steg 3. Mät. Hygrometern, årstiden och vad källaren används till.
  const mat: Regel[] = [];
  if (i.luftfuktighet === null) {
    mat.push({
      steg: 'mat',
      text: `Du har inte läst av någon hygrometer. Lägg en i källaren och låt den ligga i ${HYGROMETER_DYGN} dygn, så hinner mätningen täcka ett väderomslag.`,
      kalla: 'Guiden om fukt i källaren, avsnittet om kondens',
    });
  } else if (overKritiskRf) {
    mat.push({
      steg: 'mat',
      text: `Hygrometern visar ${String(i.luftfuktighet).replace('.', ',')} procent relativ luftfuktighet, alltså över Boverkets gräns på ${KRITISK_RF} procent. Så högt bör luften inte ligga någon längre tid.`,
      kalla: 'Boverket, högsta tillåtna fukttillstånd (BBR 6:52). Villaägarna säger samma sak i praktisk form',
    });
  } else {
    mat.push({
      steg: 'mat',
      text: `Hygrometern visar ${String(i.luftfuktighet).replace('.', ',')} procent relativ luftfuktighet, alltså under Boverkets gräns på ${KRITISK_RF} procent. Talet gäller bara där givaren ligger, och bakom en skiva mot ytterväggen är luften fuktigare än så.`,
      kalla: 'Boverket, högsta tillåtna fukttillstånd (BBR 6:52)',
    });
  }
  if (diagnos === 'kondens' && i.arstid === 'sommar') {
    mat.push({
      steg: 'mat',
      text: 'Kondens i en uppvärmd källare är ett sommarproblem, så du tittar i rätt tid på året. Vädra inte en varm eftermiddag i augusti, och låt inte källarfönstret stå på glänt. Vädra tidigt på morgonen i stället, när uteluften är som svalast.',
      kalla: 'Guiden om fukt i källaren, avsnittet om kondens',
    });
  }
  if (diagnos === 'kondens' && i.arstid === 'vinter') {
    mat.push({
      steg: 'mat',
      text: 'Kondens är annars ett sommarproblem, för uteluften är torr på vintern. Leta efter vattnet inne i huset i stället. En full maskin tvätt som torkar inomhus är flera liter rakt ut i rummet.',
      kalla: 'Guiden om fukt i källaren, rutan om det som gör kondensen värre',
    });
  }
  if (i.anvandning === 'bebodd') {
    mat.push({
      steg: 'mat',
      text: `Källaren är inredd och bebodd, och då ändras två saker. Villaägarnas ${KAN_HALLA_AR} år för en dränering gäller uttryckligen en källare som används som källare. Och fukt i ett rum du vistas i kan vara en olägenhet för hälsan.`,
      kalla: 'Villaägarna, måste du dränera huset. Folkhälsomyndigheten, tillsynsvägledning om fukt och mikroorganismer',
    });
  } else {
    mat.push({
      steg: 'mat',
      text: `Källaren används som källare, och det är villkoret Villaägarna sätter när de skriver att en gammal dränering kan fungera i ${KAN_HALLA_AR} år. Gräv inte för säkerhets skull.`,
      kalla: 'Villaägarna, måste du dränera huset',
    });
  }

  // Steg 4. Åtgärda. Vad diagnosen kräver, och vad det kostar i storleksordning.
  const atgarda: Regel[] = [];
  if (diagnos === 'lackage') {
    atgarda.push({
      steg: 'atgarda',
      text: 'Följ vattnet uppåt och utåt. Lägg märke till om det kommer när det regnar eller när någon duschar, för en läckande vattenledning ser likadan ut men bryr sig inte om vädret.',
      kalla: 'Guiden om fukt i källaren, avsnittet om läckage',
    });
    atgarda.push({
      steg: 'atgarda',
      text: 'Ett läckage väntar inte till helgen. Vatten vid varje regn blöter upp virket i syll och bjälklag, och det märks först när golvet ovanför känns mjukt. Fotografera innan du torkar upp.',
      kalla: 'Guiden om fukt i källaren, varningen om läckage',
    });
  }
  if (diagnos === 'markfukt') {
    atgarda.push({
      steg: 'atgarda',
      text: 'Skyddet mot markfukt sitter på utsidan av väggen. Hela utsidan, fyllningen intill inräknad, ska stoppa både vattnet som sugs upp och ångan som vandrar in i väggen, och leda ytvattnet ner till dräneringsrören.',
      kalla: 'Boverket, risker med fuktinträngning från mark till källarvägg',
    });
    atgarda.push({
      steg: 'atgarda',
      text: `Gör ändå det billiga först. Stuprören ska leda bort vattnet, marken ska luta från huset och dagvattenbrunnen ska vara rensad. Ett tak på ${TAK_KVM} kvm lämnar ifrån sig ${kronor(REGN_LITER)} liter vid ett rejält regn, och det ska inte ner längs grundmuren.`,
      kalla: 'Skadedjurs- och besiktningsföretaget Anticimex, fukt i källare och grund',
    });
    atgarda.push({
      steg: 'atgarda',
      text: `Sedan är frågan om dräneringen är slut. Arbetet kostar runt ${kronor(DRANERING_KR_PER_LOPMETER)} kr per löpmeter husgrund enligt Villaägarna, och det kan bli det dubbla. En villagrund på ${VILLAGRUND_LOPMETER} löpmeter landar då på ${kronor(DRANERING_KR_PER_LOPMETER * VILLAGRUND_LOPMETER)} kr.`,
      kalla: 'Villaägarna, måste du dränera huset. Multiplikationen är min',
    });
  }
  if (diagnos === 'kondens') {
    atgarda.push({
      steg: 'atgarda',
      text: `Det här är fallet där en maskin gör jobbet. En kondensavfuktare till en källare på 40 kvm kostar ${kronor(AVFUKTARE_KR)} kr. Ställ hygrostaten, alltså givaren som startar och stoppar maskinen, på ${HYGROSTAT_RF} procent.`,
      kalla: `Proffsmagasinet för priset, läst 16 september 2026. Börvärdet på ${HYGROSTAT_RF} procent är mitt`,
    });
    atgarda.push({
      steg: 'atgarda',
      text: 'Håller källaren över 10 grader året om räcker en kondensavfuktare. Går den under 10 grader en längre period på vintern avfrostar kylslingan i stället för att fälla ut vatten, och då ska du ha en sorptionsavfuktare, alltså en maskin med ett fuktsugande hjul.',
      kalla: 'Guiden om fukt i källaren, och sidan om sorptionsavfuktare',
    });
  }
  if (diagnos === 'hog-luftfuktighet') {
    atgarda.push({
      steg: 'atgarda',
      text: 'Luften är fuktig, men inget du fyllt i säger varifrån vattnet kommer. Gör tejptestet härnäst. Flytta under tiden tvätten som torkar inne, och dra ut hyllorna en handsbredd från ytterväggen.',
      kalla: 'Guiden om fukt i källaren, symptomtabellen och rutan om det som gör kondensen värre',
    });
  }
  if (diagnos === 'oklart') {
    atgarda.push({
      steg: 'atgarda',
      text: `Köp ingen maskin och beställ ingen grävning innan plasten har svarat. Tejptestet är det som skiljer markfukt från kondens, och det kostar en bit plastfolie och ${TEJPTEST_DYGN} dygn.`,
      kalla: 'Guiden om fukt i källaren',
    });
  }
  if (visaUtredning) {
    atgarda.push({
      steg: 'atgarda',
      text: `Kommer du inte längre själv, be om en fuktutredning med mätvärden och inte om en offert på en åtgärd. Saneringsföretaget Ocab tar ${kronor(FUKTUTREDNING_KR)} kr inklusive moms för en fuktkontroll av ett källarutrymme.`,
      kalla: 'Ocabs eget listpris, hämtat 18 september 2026',
    });
  }

  const regler: Regel[] = [...titta, ...tejpa, ...mat, ...atgarda];

  const beskedRad: string =
    diagnos === 'lackage'
      ? 'Vattnet kommer med regnet, på ett ställe. Det är den orsak som är bråttom, och den enda tejptestet aldrig ser.'
      : diagnos === 'markfukt'
        ? 'Vattnet kommer genom betongen. Skyddet mot det sitter på utsidan av väggen, så ingen maskin i rummet hjälper.'
        : diagnos === 'kondens'
          ? 'Vattnet kommer ur luften du vädrar in. Det är det enda av de tre fallen där en avfuktare gör jobbet.'
          : diagnos === 'hog-luftfuktighet'
            ? 'Luften bär mycket vatten, men inget du fyllt i säger varifrån det kommer. Tejptestet får avgöra det.'
            : 'Inget du fyllt i pekar ut markfukt, kondens eller läckage än. Tejpa en bit plast på källarväggen och läs av om två dygn.';

  const nastaStegText: string =
    diagnos === 'lackage'
      ? 'Följ vattnet uppåt och utåt i dag. Hittar du inte vägen på en eftermiddag, sluta leta och ring någon.'
      : diagnos === 'markfukt'
        ? 'Gör det billiga utvändigt först. Räkna sedan på vad en omdränering kostar för just din grund.'
        : diagnos === 'kondens'
          ? 'Räkna ut hur stor avfuktare källaren behöver innan du köper en.'
          : diagnos === 'hog-luftfuktighet'
            ? 'Gör tejptestet. Det skiljer markfukt från kondens, och det gör inte hygrometern.'
            : 'Gör tejptestet. Två dygn och en bit plastfolie skiljer markfukt från kondens.';

  const nastaStegLank =
    diagnos === 'lackage'
      ? { text: 'Så hittar du ett läckage som kommer efter regn', href: GUIDE_LACKAGE }
      : diagnos === 'markfukt' && tejpatUt
        ? { text: 'Så gör du åt markfukt som kommer genom väggen', href: GUIDE_MARKFUKT }
        : diagnos === 'kondens' && tejpatUt
          ? { text: 'Så gör du åt kondensen du vädrar in själv', href: GUIDE_KONDENS }
          : { text: 'Så gör du tejptestet, två dygn och en bit plast', href: GUIDE_TEJPTEST };

  const gorInteDetHar = [
    GOR_INTE_AVFUKTARE_MOT_MARKFUKT,
    GOR_INTE_LITA_PA_TORR_PLAST,
    GOR_INTE_OFFERT_UTAN_MATVARDEN,
    GOR_INTE_TAT_MATTA,
  ];

  return {
    status: 'ok',
    diagnos,
    beskedRubrik: BESKED_RUBRIK[diagnos],
    beskedRad,
    nastaStegText,
    nastaStegLank,
    visaAvfuktare,
    visaDranering,
    visaUtredning,
    valdaSymptom: valda,
    overKritiskRf,
    regler,
    gorInteDetHar,
  };
}
