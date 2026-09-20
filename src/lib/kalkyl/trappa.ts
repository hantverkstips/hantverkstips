/**
 * Trappräknaren: antal steg, steghöjd, stegdjup och lutning ur våningshöjden.
 * Ren modul utan importer från Astro, testbar utan bygge. Sidan /rakna/trappa/
 * skickar formuläret som GET och räknar på servern, så ingen rad av den här
 * filen når klienten.
 *
 * KONSTANTERNA STÅR ÖVERST MED FLIT. Guiden /golv/bygga-trappa/ skriver med
 * exakt samma tal, och den som skriver om trappor på sajten ska kunna läsa dem
 * här i stället för att leta upp källorna igen. Varje konstant bär källa eller
 * ANTAGANDE i kommentaren, och underlaget med länk per rad ligger i
 * docs/briefer/underlag-kalkyl-trappa-2026-09-20.md.
 *
 * Testas av scripts/test-kalkyl-trappa.mjs mot Svenskt Träs tabell och mot
 * räkneexemplet i /golv/bygga-trappa/, som läses från disk.
 */

/* ------------------------------------------------------------------ *
 * Trappformeln. Branschorganisationen Svenskt Trä och trappbranschen.
 * ------------------------------------------------------------------ */

/**
 * Trappformeln: två gånger steghöjden plus stegdjupet ska landa i spannet
 * nedan, allt i millimeter. Höjden räknas två gånger och djupet en, eftersom
 * steget framåt blir kortare ju högre du lyfter foten.
 * Källa: Svenskt Trä, byggbeskrivningen Trappor. "2 x steghöjden + stegdjupet
 * = 600 – 650". https://www.byggbeskrivningar.se/utvandigt/trappor/
 * Läst 20 september 2026.
 */
export const TRAPPFORMEL_MIN_MM = 600;
export const TRAPPFORMEL_MAX_MM = 650;

/**
 * Det spann trappbranschen kallar utmärkt komfort inom Svenskt Träs vidare
 * spann. Källa: trappföretaget Stepsta, som skriver formeln som 2H + B = 590
 * till 650 mm och anger 620 till 630 mm som bäst.
 * https://stepsta.se/trappformel-berakna-en-bekvam-trappa Läst 20 september 2026.
 */
export const TRAPPFORMEL_BAST_MIN_MM = 620;
export const TRAPPFORMEL_BAST_MAX_MM = 630;

/**
 * Summan verktyget siktar på när det väljer antal steg och räknar fram
 * stegdjupet. ANTAGANDE: 630 mm ligger i trappbranschens bästa spann och i
 * Svenskt Träs, och det är samma tal som tabellerna och räkneexemplet i
 * /golv/bygga-trappa/ är räknade med. Ingen källa pekar ut ett enda tal.
 */
export const TRAPPFORMEL_MAL_MM = 630;

/**
 * Steghöjdens spann. Källa: Svenskt Trä, samma byggbeskrivning.
 * "Steghöjden får variera mellan minimalt 140 och maximalt 200."
 */
export const STEGHOJD_MIN_MM = 140;
export const STEGHOJD_MAX_MM = 200;

/**
 * Stegdjupet i en trappa med normal lutning. Källa: Svenskt Trä, samma sida.
 * "trappor med normal lutning har cirka 300 djupa plansteg".
 */
export const STEGDJUP_NORMAL_MM = 300;

/**
 * Stigningsvinkelns spann. Källa: Svenskt Trä, samma sida.
 * "Stigningsvinkeln bör vara mellan 17° och 30°".
 */
export const LUTNING_MIN_GRADER = 17;
export const LUTNING_MAX_GRADER = 30;

/**
 * Svagt fall utåt på planstegen ute, så att vattnet rinner av. Källa: Svenskt
 * Trä, samma sida: cirka 1:50. Används bara i texten, inte i räkningen.
 */
export const FALL_UTE = '1:50';

/* ------------------------------------------------------------------ *
 * Boverket. Det som är föreskrift i dag, och det som var allmänt råd.
 * ------------------------------------------------------------------ */

/**
 * Författningen som trappor ligger i sedan de nya byggreglerna. Kraven står i
 * 2 kap. Källa: Boverkets föreskrifter (2024:9) om säkerhet vid användning av
 * byggnader, hämtad och läst i sin helhet 20 september 2026.
 * https://rinfo.boverket.se/BFS2024-9/pdf/BFS2024-9.pdf
 *
 * OBS. Föreskriften anger inga stegmått alls. Varken steghöjd eller stegdjup
 * står i siffror, och 5 § säger bara att trappor "ska vara utformade så att
 * personer kan förflytta sig säkert". Det är därför trappformeln behövs: den
 * fyller platsen där myndigheten hänvisar till en riskbedömning i det enskilda
 * fallet. Talen nedan är de som faktiskt står i siffror.
 */
export const BFS = 'BFS 2024:9';
export const BFS_NAMN = 'Boverkets föreskrifter om säkerhet vid användning av byggnader';
export const BFS_URL = 'https://rinfo.boverket.se/BFS2024-9/pdf/BFS2024-9.pdf';

/** Öppning mellan plansteg. BFS 2024:9, 2 kap. 6 §. */
export const OPPNING_PLANSTEG_MAX_MM = 100;

/** Fri höjd i trappa. BFS 2024:9, 2 kap. 25 §: "minst 2,00 meter". */
export const FRI_HOJD_MM = 2000;

/** Räckets underkant till stegnosen, där yngre barn kan vistas. BFS 2024:9, 2 kap. 11 §. */
export const RACKE_TILL_STEGNOS_MAX_MM = 50;

/** Den del av fallskyddets höjd som ska motverka klättring. BFS 2024:9, 2 kap. 11 §. */
export const KLATTERSKYDD_MM = 800;

/** När de nya byggreglerna trädde i kraft. Övergångsbestämmelserna i BFS 2024:9. */
export const NYA_REGLER_FRAN = '1 juli 2025';

/**
 * Sista dagen de gamla råden kunde väljas. Äldre bestämmelser fick tillämpas
 * på arbeten som kräver bygglov eller anmälan om handlingen kom in före
 * 1 juli 2026, och på arbeten utan lov och anmälan om de påbörjades före
 * samma dag. Källa: övergångsbestämmelserna till Boverkets föreskrifter
 * (2024:14) om ändring av Boverkets byggregler (2011:6), punkt 3.
 * https://rinfo.boverket.se/BFS2011-6/pdf/BFS2024-14.pdf
 */
export const GAMLA_RADEN_TILL = '1 juli 2026';

/**
 * Stegdjupet i en trappa inne i eller i anslutning till en byggnad.
 * ALLMÄNT RÅD SOM ÄR BORTA. Källa: Boverkets byggregler (BFS 2011:6 ändrad
 * t.o.m. BFS 2014:3) avsnitt 8:232: "Stegdjupet i trappor bör vara minst
 * 0,25 meter, mätt i gånglinjen." Rådet finns inte i BFS 2024:9. Verktyget
 * mäter mot det ändå, och säger på skärmen att det är ett borttaget råd och
 * inte ett krav.
 * https://www.boverket.se/contentassets/2b709d86893740bab472714cb1ffb4c0/boverkets-byggregler-avsnitt-8-bfs-2011-6-tom-2014-3.pdf
 */
export const STEGDJUP_MIN_INNE_MM = 250;

/**
 * Stegdjupet i en trappa i en gångväg på tomten, alltså utanför huskroppen.
 * Samma dokument, avsnitt 8:91: "Trappstegens djup i en trappa bör vara minst
 * 0,30 meter, mätt i gånglinjen." Också ett borttaget allmänt råd.
 */
export const STEGDJUP_MIN_UTE_MM = 300;

/**
 * Minsta antal steg ute. Samma avsnitt 8:91: "För att minimera risken att
 * någon snubblar bör en trappa ha fler än två steg." Fler än två är alltså tre.
 */
export const MINST_ANTAL_STEG_UTE = 3;

/**
 * Trapplanets djup, alltså vilplanet. Källa: samma dokument, avsnitt 8:232:
 * "Inom enskilda bostadslägenheter bör trappplan vara minst 1,3 meter."
 * Också ett borttaget allmänt råd, och verktyget räknar med det som mått på
 * vilplanet eftersom inget nyare mått finns.
 */
export const TRAPPLAN_DJUP_MM = 1300;

/**
 * Ledstångens höjd över stegnosen. ANTAGANDE: BFS 2024:9 anger ingen höjd.
 * Svenskt Trä monterar ledstången 900 mm över planstegsnosen, och samma mått
 * stod i det gamla allmänna rådet i BBR 8:2322: "Ledstänger bör sitta på
 * 0,9 meters höjd." Avsnittsnumret rättat 2026-09-20; det stod 8:2321, som är
 * räcken. Används bara i texten.
 */
export const LEDSTANG_HOJD_MM = 900;

/** Räckeshöjder ur det gamla allmänna rådet, BBR 8:2321. Används bara i texten. */
export const RACKE_HOJD_MM = 900;
export const RACKE_HOJD_HOG_MM = 1100;
export const VANINGSHOJD_FOR_HOGT_RACKE_MM = 3000;

/** Guiden som verktyget hör till, och där hela bygget står. */
export const GUIDE = '/golv/bygga-trappa/';

export type Styrs = 'stegdjup' | 'langd';
export type Placering = 'inne' | 'ute';
export type Utforande = 'rak' | 'vilplan';

/** Raden i "Därför blev svaret så". Etiketten är slaget. */
export type Slag = 'matt' | 'formel' | 'boverket' | 'utforande';

export interface Regel {
  slag: Slag;
  text: string;
  kalla: string;
  url?: string;
}

/** En avvikelse från ett mått, med källan bakom måttet. Står alltid i beskedet. */
export interface Avvikelse {
  text: string;
  kalla: string;
}

export interface TrappaIndata {
  /** Våningshöjd i millimeter, färdigt golv till färdigt golv. */
  vaningshojdMm: number;
  /** Vad som styr trappan: ett önskat stegdjup, eller längden du har i plan. */
  styrs: Styrs;
  /** Stegdjupet du siktar på. Läses bara när styrs är stegdjup. */
  onskatStegdjupMm: number;
  /** Längden trappan får ta på golvet. Läses bara när styrs är langd. */
  tillgangligLangdMm: number;
  placering: Placering;
  utforande: Utforande;
}

export type TrappaResultat =
  | {
      status: 'ok';
      /** Antal stigningar, alltså antal steghöjder upp till nästa golv. */
      antalSteg: number;
      /**
       * Antal plansteg att bygga. Alltid ett mindre än antalet stigningar,
       * eftersom det översta plansteget är övervåningens golv, och ett till
       * mindre när trappan har vilplan: planet tar ett stegs plats.
       */
      antalPlansteg: number;
      /** Steghöjden, exakt. Den går inte att avrunda: summan måste bli våningshöjden. */
      steghojdMm: number;
      /** Steghöjden avrundad till hel millimeter, alltså det tal du läser av. */
      steghojdHelMm: number;
      /** Stegdjupet i hela millimeter. Det är ett mått du kapar efter. */
      stegdjupMm: number;
      /** Trappans längd på golvet, i millimeter. */
      langdIPlanMm: number;
      /** Lutningen i grader, en decimal. */
      lutningGrader: number;
      /** Trappformelns summa med de tal svaret landade på. */
      formelSummaMm: number;
      /** Sant när summan ligger i trappbranschens bästa spann. */
      iBastaSpannet: boolean;
      /** De två loppen när trappan har vilplan, annars null. */
      lopp: { ett: number; tva: number } | null;
      /** Sant när inget mått avviker. */
      uppfyller: boolean;
      /** Måtten som inte håller, med källan bakom varje mått. */
      avvikelser: Avvikelse[];
      beskedRubrik: string;
      beskedRad: string;
      regler: Regel[];
      gorInteDetHar: string[];
    }
  | {
      status: 'ogiltig';
      fel: Partial<Record<keyof TrappaIndata, string>>;
    };

/**
 * Standardvärdena är räkneexemplet i /golv/bygga-trappa/: en våningshöjd på
 * 2 700 mm och ett önskat stegdjup på 300 mm, alltså Svenskt Träs normala
 * plansteg. Svaret blir sexton steg, 169 mm höga och 292 mm djupa, en trappa
 * på 4,4 m i plan och 30 graders lutning. Exakt guidens tal, så att en läsare
 * som kommer från artikeln känner igen svaret och ingen av de två sidorna kan
 * glida ifrån den andra utan att testskriptet säger till.
 */
export const STANDARD: TrappaIndata = {
  vaningshojdMm: 2700,
  styrs: 'stegdjup',
  onskatStegdjupMm: STEGDJUP_NORMAL_MM,
  tillgangligLangdMm: 4400,
  placering: 'inne',
  utforande: 'rak',
};

/**
 * Gränserna på fälten.
 * ANTAGANDE: våningshöjden mellan 250 mm och sex meter, stegdjupet mellan 200
 * och 400 mm och längden mellan en halv och tjugo meter är fältens
 * rimlighetskontroll mot skrivfel, inte regler. Den undre kanten är satt för
 * en yttertrappa upp till en dörrtröskel, den övre för ett trevåningshus, och
 * en trappa till ett loft ryms däremellan. Övre kanten på antalet steg är vår.
 */
export const GRANSER = {
  vaningshojdMm: [250, 6000],
  onskatStegdjupMm: [200, 400],
  tillgangligLangdMm: [500, 20000],
} as const;

/** Så många stigningar verktyget som mest letar bland. ANTAGANDE. */
const MAX_ANTAL_STEG = 40;

export const PLACERINGAR: { varde: Placering; etikett: string; hjalp: string }[] = [
  {
    varde: 'inne',
    etikett: 'Inne i huset',
    hjalp: 'Trappan är en del av byggnaden. Det gamla rådet om stegdjup var minst 250 mm.',
  },
  {
    varde: 'ute',
    etikett: 'Ute på tomten',
    hjalp: 'Trappan ligger i en gångväg på tomten. Det gamla rådet var minst 300 mm, en flackare trappa än inne.',
  },
];

export const UTFORANDEN: { varde: Utforande; etikett: string; hjalp: string }[] = [
  {
    varde: 'rak',
    etikett: 'Rak, ett lopp hela vägen',
    hjalp: 'Alla steg kommer i en följd. Den tar mest golv och är enklast att bygga.',
  },
  {
    varde: 'vilplan',
    etikett: 'Med vilplan på mitten',
    hjalp: `Ett plan bryter trappan på mitten. Det tar ${TRAPPLAN_DJUP_MM} mm på golvet i stället för ett steg.`,
  },
];

export const STYRVAL: { varde: Styrs; etikett: string; hjalp: string }[] = [
  {
    varde: 'stegdjup',
    etikett: 'Jag vill ha ett visst stegdjup',
    hjalp: 'Verktyget väljer antalet steg och räknar fram djupet ur trappformeln.',
  },
  {
    varde: 'langd',
    etikett: 'Jag har bara en viss längd på golvet',
    hjalp: 'Verktyget delar längden på stegen och säger till om måtten inte håller.',
  },
];

/*
 * Råden skrivs enligt docs/STILGUIDE.md: högst ett tal per mening, och två
 * bara när de två talen är jämförelsen.
 */

/*
 * Markeringskravet har ett undantag som gäller precis de hus våra läsare bor
 * i. BFS 2024:9, 2 kap. 8 § andra stycket: "Kraven på markering i första
 * stycket gäller dock inte för en- och tvåbostadshus, i bostadslägenheter i
 * flerbostadshus eller om det annars är obehövligt." Utan den meningen säger
 * verktyget emot guiden /golv/bygga-trappa/, som har det rätt.
 */
const GOR_INTE_OLIKA_HOGA_STEG =
  'Efter tre steg går du på minnet och slutar titta ner. Ett steg som avviker i höjd, allra helst det nedersta eller det översta, är därför det som fäller dig. Går det inte att undvika kräver Boverket att steget markeras tydligt, utom i småhus och bostadslägenheter, som är undantagna. Undantaget gör inte steget mindre farligt, det betyder bara att ingen kräver en markering av dig.';

const GOR_INTE_GLOMMA_GOLVET =
  'Ska det komma klinker, en spånskiva eller parkett efteråt, uppe eller nere, räkna in tjockleken redan nu i stället för att mäta på ett golv som inte är färdigt. Glömmer du den blir det översta steget lägre än de andra, och det är just det steg du inte ser när du bär något.';

const GOR_INTE_BRANT_FOR_ATT_SPARA_GOLV =
  'En trappa som gjorts brantare för att spara golv blir besvärlig med en tvättkorg och omöjlig med en soffa. Svenskt Trä sätter gränsen vid trettio grader. Vill du ha trappan kortare på golvet är det ett vilplan du ska ha, och inte högre steg.';

const GOR_INTE_MATA_RUNT_FRI_HOJD =
  'Rita hålet i golvet ovanför samtidigt som trappan, för det är hålet som bestämmer hur trappan kan läggas. Kravet på den fria höjden är två meter rakt upp från varje stegyta, hela vägen. Ritar du trappan först och hålet sedan får du bygga om ett av dem.';

/** Decimalkomma accepteras: '2 700,5' blir 2700.5. Tomt fält ger NaN. */
function tillTal(v: string | null): number {
  if (v === null) return NaN;
  const rensad = v
    .trim()
    .replace(/\s| /g, '')
    .replace(/mm$/i, '')
    .replace(',', '.')
    .replace('−', '-');
  if (rensad === '') return NaN;
  return Number(rensad);
}

/** Millimeter med mellanrum som tusentalsavgränsare, som stilguiden vill. */
export function millimeter(n: number): string {
  return Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

/** Ett tal med högst en decimal, med komma som decimaltecken. */
export function endecimal(n: number): string {
  const rundat = Math.round(n * 10) / 10;
  return String(rundat).replace('.', ',');
}

/** Millimeter skrivet som meter med två decimaler: 2 000 blir "2,00". */
export function meter(mm: number): string {
  return (mm / 1000).toFixed(2).replace('.', ',');
}

/** Trappformelns summa: två gånger höjden plus djupet, allt i millimeter. */
export function trappformel(steghojdMm: number, stegdjupMm: number): number {
  return 2 * steghojdMm + stegdjupMm;
}

/** Lutningen i grader ur steghöjd och stegdjup. */
export function lutning(steghojdMm: number, stegdjupMm: number): number {
  return (Math.atan(steghojdMm / stegdjupMm) * 180) / Math.PI;
}

/** Stegdjupet det gamla rådet satte som undre kant, efter var trappan står. */
export function minstaStegdjup(placering: Placering): number {
  return placering === 'ute' ? STEGDJUP_MIN_UTE_MM : STEGDJUP_MIN_INNE_MM;
}

function arStyrs(v: string | null): v is Styrs {
  return v === 'stegdjup' || v === 'langd';
}

function arPlacering(v: string | null): v is Placering {
  return v === 'inne' || v === 'ute';
}

function arUtforande(v: string | null): v is Utforande {
  return v === 'rak' || v === 'vilplan';
}

/**
 * Läser adressen. Skräp i ett val faller tillbaka på standardvärdet, skräp i
 * ett tal blir NaN och ger ett fel på just det fältet.
 */
export function tolkaQuery(q: URLSearchParams): { indata: TrappaIndata; harIndata: boolean } {
  const nycklar = ['hojd', 'styrs', 'djup', 'langd', 'plats', 'utforande'];
  const harIndata = nycklar.some((n) => q.has(n));

  const tal = (nyckel: string, standardVarde: number): number => {
    const ra = q.get(nyckel);
    if (ra === null) return standardVarde;
    return tillTal(ra);
  };

  const raStyrs = q.get('styrs');
  const raPlats = q.get('plats');
  const raUtforande = q.get('utforande');

  return {
    harIndata,
    indata: {
      vaningshojdMm: tal('hojd', STANDARD.vaningshojdMm),
      styrs: arStyrs(raStyrs) ? raStyrs : STANDARD.styrs,
      onskatStegdjupMm: tal('djup', STANDARD.onskatStegdjupMm),
      tillgangligLangdMm: tal('langd', STANDARD.tillgangligLangdMm),
      placering: arPlacering(raPlats) ? raPlats : STANDARD.placering,
      utforande: arUtforande(raUtforande) ? raUtforande : STANDARD.utforande,
    },
  };
}

function inom(v: number, grans: readonly [number, number]): boolean {
  return Number.isFinite(v) && v >= grans[0] && v <= grans[1];
}

/**
 * Så många plansteg som bär längden i plan. Rak trappa har ett plansteg
 * mindre än antalet stigningar, eftersom det översta plansteget är
 * övervåningens golv. Med vilplan tar planet ett stegs plats i längdled.
 */
function antalDjupbarandePlansteg(antalSteg: number, utforande: Utforande): number {
  return utforande === 'vilplan' ? antalSteg - 2 : antalSteg - 1;
}

export function raknaTrappa(i: TrappaIndata): TrappaResultat {
  const fel: Partial<Record<keyof TrappaIndata, string>> = {};

  if (!inom(i.vaningshojdMm, GRANSER.vaningshojdMm)) {
    fel.vaningshojdMm = `Skriv våningshöjden i millimeter, mellan ${millimeter(GRANSER.vaningshojdMm[0])} och ${millimeter(GRANSER.vaningshojdMm[1])}`;
  }
  if (i.styrs === 'stegdjup' && !inom(i.onskatStegdjupMm, GRANSER.onskatStegdjupMm)) {
    fel.onskatStegdjupMm = `Skriv stegdjupet i millimeter, mellan ${GRANSER.onskatStegdjupMm[0]} och ${GRANSER.onskatStegdjupMm[1]}`;
  }
  if (i.styrs === 'langd' && !inom(i.tillgangligLangdMm, GRANSER.tillgangligLangdMm)) {
    fel.tillgangligLangdMm = `Skriv längden i millimeter, mellan ${millimeter(GRANSER.tillgangligLangdMm[0])} och ${millimeter(GRANSER.tillgangligLangdMm[1])}`;
  }
  if (Object.keys(fel).length > 0) return { status: 'ogiltig', fel };

  const vh = i.vaningshojdMm;
  const minSteg = i.utforande === 'vilplan' ? 3 : 2;

  /*
   * Antalet stigningar väljs så att trappformelns summa hamnar så nära målet
   * som möjligt, inom det spann där steghöjden håller sig i Svenskt Träs
   * 140 till 200 mm. Finns inget sådant antal söker verktyget i hela spannet
   * i stället och låter avvikelsen stå kvar i svaret. Det är avsiktligt: ett
   * verktyg som vägrar svara hjälper ingen, ett som svarar utan att säga att
   * måttet brister är värre.
   */
  const franSteghojd = Math.max(minSteg, Math.ceil(vh / STEGHOJD_MAX_MM));
  const tillSteghojd = Math.min(MAX_ANTAL_STEG, Math.floor(vh / STEGHOJD_MIN_MM));
  const harGiltigtSpann = franSteghojd <= tillSteghojd;
  const fran = harGiltigtSpann ? franSteghojd : minSteg;
  const till = harGiltigtSpann ? tillSteghojd : MAX_ANTAL_STEG;

  /** Stegdjupet för ett givet antal stigningar, innan avrundning. */
  function djupFor(antalSteg: number): number {
    if (i.styrs === 'stegdjup') {
      // Djupet följer av formeln: målsumman minus två steghöjder.
      return TRAPPFORMEL_MAL_MM - (2 * vh) / antalSteg;
    }
    const barande = antalDjupbarandePlansteg(antalSteg, i.utforande);
    if (barande < 1) return Number.NaN;
    const langd = i.utforande === 'vilplan' ? i.tillgangligLangdMm - TRAPPLAN_DJUP_MM : i.tillgangligLangdMm;
    return langd / barande;
  }

  /*
   * Hur bra ett givet antal stigningar är.
   *
   * Styrs trappan av ett önskat stegdjup ligger formelsumman redan på målet
   * för varje antal, eftersom djupet räknas ur formeln. Då är det djupet som
   * ska komma så nära önskemålet som möjligt.
   *
   * Styrs den av en längd är djupet låst av längden, och då är det formelns
   * summa som ska komma så nära målet som möjligt.
   */
  function avstandFor(antal: number, d: number): number {
    return i.styrs === 'stegdjup'
      ? Math.abs(d - i.onskatStegdjupMm)
      : Math.abs(trappformel(vh / antal, d) - TRAPPFORMEL_MAL_MM);
  }

  let antalSteg = fran;
  let bastAvstand = Number.POSITIVE_INFINITY;
  for (let n = fran; n <= till; n++) {
    const d = djupFor(n);
    if (!Number.isFinite(d) || d <= 0) continue;
    const avstand = avstandFor(n, d);
    if (avstand < bastAvstand) {
      bastAvstand = avstand;
      antalSteg = n;
    }
  }

  const steghojdMm = vh / antalSteg;
  const raDjup = djupFor(antalSteg);
  if (!Number.isFinite(raDjup) || raDjup <= 0) {
    // Går bara att nå med en längd som vilplanet äter upp helt.
    return {
      status: 'ogiltig',
      fel: {
        tillgangligLangdMm: `Längden räcker inte till en trappa med vilplan. Vilplanet tar ${millimeter(TRAPPLAN_DJUP_MM)} mm av den innan det första steget ens är lagt`,
      },
    };
  }

  /*
   * Steghöjden går inte att avrunda: summan av stegen måste bli exakt
   * våningshöjden, annars blir ett steg fel. Stegdjupet går däremot att välja,
   * och det avrundas nedåt till hel millimeter. Nedåt, eftersom det är måttet
   * du kapar efter och en trappa som blir en aning kortare får plats där en
   * som blir en aning längre inte gör det. Samma avrundning som
   * räkneexemplet i /golv/bygga-trappa/: 292,5 blir 292.
   */
  const stegdjupMm = Math.floor(raDjup);
  const steghojdHelMm = Math.round(steghojdMm);
  const barande = antalDjupbarandePlansteg(antalSteg, i.utforande);
  /* Planstegen som faktiskt byggs är just de som bär längden: vilplanet är
     inget plansteg, och det översta plansteget är övervåningens golv. */
  const antalPlansteg = barande;
  const langdIPlanMm =
    i.utforande === 'vilplan' ? barande * stegdjupMm + TRAPPLAN_DJUP_MM : barande * stegdjupMm;
  const lutningGrader = Math.round(lutning(steghojdMm, stegdjupMm) * 10) / 10;
  const formelSummaMm = Math.round(trappformel(steghojdMm, stegdjupMm) * 10) / 10;
  const iBastaSpannet = formelSummaMm >= TRAPPFORMEL_BAST_MIN_MM && formelSummaMm <= TRAPPFORMEL_BAST_MAX_MM;

  /* Vilplanet läggs så nära mitten som möjligt, med det längre loppet nederst. */
  const lopp =
    i.utforande === 'vilplan'
      ? { ett: Math.ceil(antalSteg / 2), tva: antalSteg - Math.ceil(antalSteg / 2) }
      : null;

  /*
   * Avvikelserna. Varje mått som brister står här med sin källa, och beskedet
   * bär dem. Verktyget räknar aldrig fram ett steg som bryter mot ett mått
   * utan att säga det.
   */
  const avvikelser: Avvikelse[] = [];
  if (steghojdMm < STEGHOJD_MIN_MM || steghojdMm > STEGHOJD_MAX_MM) {
    avvikelser.push({
      text: `Steghöjden blir ${endecimal(steghojdMm)} mm, och det ligger utanför spannet ${STEGHOJD_MIN_MM} till ${STEGHOJD_MAX_MM} mm.`,
      kalla: 'Svenskt Trä, byggbeskrivningen Trappor',
    });
  }
  const minDjup = minstaStegdjup(i.placering);
  if (stegdjupMm < minDjup) {
    avvikelser.push({
      text: `Stegdjupet blir ${millimeter(stegdjupMm)} mm, och det är grundare än de ${millimeter(minDjup)} mm som gällde ${i.placering === 'ute' ? 'på tomten' : 'inne'}.`,
      kalla: `Borttaget allmänt råd i de gamla byggreglerna, BBR ${i.placering === 'ute' ? '8:91' : '8:232'}`,
    });
  }
  if (formelSummaMm < TRAPPFORMEL_MIN_MM || formelSummaMm > TRAPPFORMEL_MAX_MM) {
    avvikelser.push({
      text: `Trappformeln landar på ${endecimal(formelSummaMm)} mm, utanför spannet ${TRAPPFORMEL_MIN_MM} till ${TRAPPFORMEL_MAX_MM} mm.`,
      kalla: 'Svenskt Trä, byggbeskrivningen Trappor',
    });
  }
  if (lutningGrader < LUTNING_MIN_GRADER || lutningGrader > LUTNING_MAX_GRADER) {
    avvikelser.push({
      text: `Lutningen blir ${endecimal(lutningGrader)} grader, utanför spannet ${LUTNING_MIN_GRADER} till ${LUTNING_MAX_GRADER} grader.`,
      kalla: 'Svenskt Trä, byggbeskrivningen Trappor',
    });
  }
  if (i.placering === 'ute' && antalSteg < MINST_ANTAL_STEG_UTE) {
    avvikelser.push({
      text: `Trappan får ${antalSteg} steg, och ute bör en trappa ha fler än två så att ingen snubblar på den.`,
      kalla: 'Borttaget allmänt råd i de gamla byggreglerna, BBR 8:91',
    });
  }

  const uppfyller = avvikelser.length === 0;

  const beskedRubrik = uppfyller ? 'Måtten håller' : 'Måtten håller inte';
  const beskedRad = uppfyller
    ? iBastaSpannet
      ? 'Trappformeln landar i det spann trappbranschen kallar bäst, så bygg efter de här måtten.'
      : 'Trappformeln landar inom Svenskt Träs spann, så måtten går att bygga efter.'
    : avvikelser.length === 1
      ? `${avvikelser[0]!.text} Ändra våningshöjden, längden eller stegdjupet och räkna igen.`
      : `${avvikelser.length} mått avviker, så ändra något och räkna igen. Alla står under verktyget, med den som satt måttet.`;

  const regler: Regel[] = [];

  regler.push({
    slag: 'matt',
    text: `Våningshöjden på ${millimeter(vh)} mm delas i ${antalSteg} lika höga steg på ${endecimal(steghojdMm)} mm var. Steghöjden går inte att runda av. Alla steg lagda på varandra ska bli exakt våningshöjden, och rundar du av hamnar felet i det nedersta eller det översta steget.`,
    kalla: 'Min räkning, och guiden om att bygga trappa',
    url: GUIDE,
  });

  regler.push({
    slag: 'formel',
    text:
      i.styrs === 'stegdjup'
        ? `Stegdjupet kommer ur trappformeln. Jag tar ${millimeter(TRAPPFORMEL_MAL_MM)} mm minus två steghöjder, och det landar på ${millimeter(stegdjupMm)} mm. Du bad om ${millimeter(i.onskatStegdjupMm)} mm, och antalet steg valdes så att djupet hamnar så nära det som ett helt antal steg tillåter.`
        : `Längden du har, ${millimeter(i.tillgangligLangdMm)} mm, delas på de ${barande} plansteg som bär den, och det ger ${millimeter(stegdjupMm)} mm i djup. Antalet steg valdes så att trappformeln hamnar så nära ${millimeter(TRAPPFORMEL_MAL_MM)} mm som möjligt.`,
    kalla: 'Svenskt Trä, byggbeskrivningen Trappor. Målsumman är min',
    url: 'https://www.byggbeskrivningar.se/utvandigt/trappor/',
  });

  regler.push({
    slag: 'formel',
    text: `Två gånger steghöjden plus stegdjupet blir ${endecimal(formelSummaMm)} mm. Spannet är ${TRAPPFORMEL_MIN_MM} till ${TRAPPFORMEL_MAX_MM} mm, och trappbranschen kallar ${TRAPPFORMEL_BAST_MIN_MM} till ${TRAPPFORMEL_BAST_MAX_MM} mm bäst. ${iBastaSpannet ? 'Din trappa ligger i det bästa spannet.' : 'Din trappa ligger utanför det bästa spannet, men inom det som duger.'}`,
    kalla: 'Svenskt Trä för spannet, trappföretaget Stepsta för det bästa',
    url: 'https://stepsta.se/trappformel-berakna-en-bekvam-trappa',
  });

  regler.push({
    slag: 'boverket',
    text: `Boverket anger inga stegmått. Sedan ${NYA_REGLER_FRAN} ligger trappor i ${BFS}, och där står bara att trappan ska vara utformad så att personer kan förflytta sig säkert. Måtten ovan kommer från branschen och inte från myndigheten, och det är hela skälet till att trappformeln behövs.`,
    kalla: `${BFS_NAMN}, 2 kap. 5 §`,
    url: BFS_URL,
  });

  regler.push({
    slag: 'boverket',
    text: `Stegdjupet på minst ${millimeter(minDjup)} mm kommer inte ur föreskriften utan ur de gamla byggreglernas allmänna råd, och det mäts i gånglinjen, där foten faktiskt går. Rådet gick att hänvisa till fram till ${GAMLA_RADEN_TILL} och är borta sedan dess. Måttet duger fortfarande som riktvärde, men du kan inte längre vinna en diskussion med det.`,
    kalla: `Boverkets byggregler, BBR ${i.placering === 'ute' ? '8:91' : '8:232'}, och övergångsbestämmelserna till BFS 2024:14`,
    url: 'https://www.boverket.se/contentassets/2b709d86893740bab472714cb1ffb4c0/boverkets-byggregler-avsnitt-8-bfs-2011-6-tom-2014-3.pdf',
  });

  regler.push({
    slag: 'boverket',
    text: `Det som står i siffror i dag är säkerheten runt trappan. Fri höjd ska vara minst ${meter(FRI_HOJD_MM)} m över stegytan hela vägen upp, öppningen mellan planstegen får vara högst ${OPPNING_PLANSTEG_MAX_MM} mm, och där yngre barn kan vistas får det vara högst ${RACKE_TILL_STEGNOS_MAX_MM} mm mellan räckets underkant och stegnosen.`,
    kalla: `${BFS_NAMN}, 2 kap. 6, 11 och 25 §§`,
    url: BFS_URL,
  });

  regler.push({
    slag: 'utforande',
    text:
      i.utforande === 'vilplan'
        ? `Vilplanet tar ${millimeter(TRAPPLAN_DJUP_MM)} mm på golvet i stället för ett plansteg, och delar trappan i ${lopp!.ett} steg nedanför och ${lopp!.tva} ovanför. Trappan blir ${endecimal(langdIPlanMm / 1000)} m på golvet.`
        : `Trappan är rak och blir ${endecimal(langdIPlanMm / 1000)} m på golvet, räknat på ${barande} plansteg. Det sista steget landar på golvet ovanför och byggs därför inte. Blir längden ett problem är det ett vilplan du ska ha och inte en brantare trappa.`,
    kalla:
      i.utforande === 'vilplan'
        ? 'Trapplanets djup ur det gamla allmänna rådet i BBR 8:232, om trapplan inom en bostadslägenhet'
        : 'Min räkning',
    url: i.utforande === 'vilplan' ? GUIDE : undefined,
  });

  regler.push({
    slag: 'utforande',
    text:
      i.placering === 'ute'
        ? `Trappan står ute, och då tillkommer två saker räkningen inte ser. Planstegen ska luta svagt utåt, cirka ${FALL_UTE}, annars står vattnet kvar och blir till is. Trappan ska dessutom stå på plintar ner till fast botten eller på dränerad mark.`
        : `Trappan står inne, och då är öppningen i bjälklaget nästa mått att ta. Den fria höjden på ${meter(FRI_HOJD_MM)} m avgör hur långt hålet måste vara, och det är hålet som bestämmer om trappan får plats.`,
    kalla: 'Svenskt Trä, byggbeskrivningen Trappor, och guiden om att bygga trappa',
    url: GUIDE,
  });

  return {
    status: 'ok',
    antalSteg,
    antalPlansteg,
    steghojdMm,
    steghojdHelMm,
    stegdjupMm,
    langdIPlanMm,
    lutningGrader,
    formelSummaMm,
    iBastaSpannet,
    lopp,
    uppfyller,
    avvikelser,
    beskedRubrik,
    beskedRad,
    regler,
    gorInteDetHar: [
      GOR_INTE_OLIKA_HOGA_STEG,
      GOR_INTE_GLOMMA_GOLVET,
      GOR_INTE_BRANT_FOR_ATT_SPARA_GOLV,
      GOR_INTE_MATA_RUNT_FRI_HOJD,
    ],
  };
}
