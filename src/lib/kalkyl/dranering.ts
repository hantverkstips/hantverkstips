/**
 * Dränering och källare: vad kostar det, och behöver du göra det alls? Ren
 * modul utan importer från Astro, testbar utan bygge. Sidan /rakna/dranering/
 * skickar formuläret som GET och räknar på servern, så ingen rad av den här
 * filen når klienten.
 *
 * Verktyget svarar på två frågor i samma räkning. Den första är priset: ett
 * intervall i kronor per löpmeter husgrund och en summa för hela grunden, med
 * arbete, material och återställning var för sig. Den andra är den som saknas
 * på marknaden: behöver du gräva alls? Dräneringens ålder och vad tejptestet i
 * /fukt/fukt-i-kallaren/ gav avgör om svaret blir dränera om, mät först eller
 * gör det billiga först, och varje regel som slår in bär sin källa, som
 * bygglovsverktyget bär lagrum.
 *
 * Poängen med att räkna båda samtidigt är förhållandet mellan talen. En
 * kondensavfuktare kostar knappt sex tusen, en fuktutredning med mätvärden
 * drygt fem, och en omdränering av en villagrund ligger på ett par hundra
 * tusen. Skillnaden mellan rätt och fel diagnos är alltså en faktor tjugo, och
 * det är den jämförelsen svaret bygger på.
 *
 * Varje konstant står namngiven nedan med källa eller ANTAGANDE i kommentaren,
 * och underlaget med hämtningsdatum och länk per rad ligger i
 * docs/briefer/underlag-kalkyl-dranering-2026-09-18.md.
 *
 * Testas av scripts/test-kalkyl-dranering.mjs mot kostnadstabellen och
 * räkneexemplet i src/content/guider/fukt/fukt-i-kallaren.mdx.
 */

/** Hur grävmaskinen kommer åt runt huset, och vad som ligger i schakten. */
export type Atkomst = 'fri' | 'trang' | 'berg';

/** Vad som ska läggas tillbaka ovanpå schakten när röret är i marken. */
export type Aterstallning = 'gras' | 'rabatt' | 'plattgang' | 'asfalt' | 'altan';

/** Vad plasten på källarväggen visade efter minst två dygn. */
export type Tejptest = 'markfukt' | 'kondens' | 'torrt' | 'inte-gjort';

/** Svaret i stort format: ett av tre besked. */
export type Besked = 'dranera' | 'mat-forst' | 'billiga-forst';

/**
 * Vad en enskild regel betyder. "billigt" är raden om stuprör, markfall och
 * dagvattenbrunn: den stoppar inte grävningen, den ska göras före den.
 */
export type RegelUtfall = 'grav' | 'mat' | 'billigt' | 'ok';

export interface Regel {
  utfall: RegelUtfall;
  /** Vad regeln säger om just det här huset, i löptext. */
  text: string;
  /** Källan bakom regeln. */
  kalla: string;
}

/** En kostnadspost i kronor per löpmeter husgrund, med undre och övre kant. */
export interface Post {
  namn: string;
  lagKrPerM: number;
  hogKrPerM: number;
  lagKr: number;
  hogKr: number;
}

export interface DraneringIndata {
  /** Husets längd i meter, utvändigt. */
  husLangdM: number;
  /** Husets bredd i meter, utvändigt. */
  husBreddM: number;
  /** Schaktdjup i meter, alltså ner till dräneringsledningen vid sulan. */
  schaktDjupM: number;
  atkomst: Atkomst;
  aterstallning: Aterstallning;
  /** Dräneringens ålder i år. Vet du inte, skriv husets ålder. */
  alderAr: number;
  tejptest: Tejptest;
}

export type DraneringResultat =
  | {
      status: 'ok';
      /** Husets omkrets i meter, alltså löpmetern räkningen går på. */
      omkretsM: number;
      /** Arbetet, materialet och återställningen var för sig. */
      poster: Post[];
      /** Arbetskostnaden per löpmeter, undre och övre kant. */
      arbeteLagKrPerM: number;
      arbeteHogKrPerM: number;
      /** Arbetet för hela grunden, alltså det stora talet på sidan. */
      arbeteLagKr: number;
      arbeteHogKr: number;
      /** Hela grunden, alla tre posterna, undre och övre kant. */
      summaLagKr: number;
      summaHogKr: number;
      /** Summan per löpmeter, alltså det tal som går att jämföra med en offert. */
      summaLagKrPerM: number;
      summaHogKrPerM: number;
      /** Vad arbetet kostar efter rotavdrag, undre och övre kant. */
      efterRotLagKr: number;
      efterRotHogKr: number;
      /** Rotavdraget i kronor, begränsat av taket per person och år. */
      rotavdragKr: number;
      /** Den del av arbetsposten som är rotgrundande, alltså utan maskinhyra. */
      rotGrundandeKr: number;
      /** Sant när taket för rotavdraget tar stopp före procentsatsen. */
      rotTaketNas: boolean;
      /** Faktorn djupet lägger på arbetet, 1 vid referensdjupet. */
      djupFaktor: number;
      /** Faktorn åtkomsten lägger på arbetet, 1 vid fri tomt. */
      atkomstFaktor: number;
      besked: Besked;
      /** "Dränera om", "Mät först" eller "Gör det billiga först". */
      beskedRubrik: string;
      /** Beskedet i en mening. */
      beskedRad: string;
      /** Hur många gånger dyrare den undre kanten är än en avfuktare. */
      faktorMotAvfuktare: number;
      /** Hur många gånger dyrare den undre kanten är än en fuktutredning. */
      faktorMotUtredning: number;
      /** Sant när svaret pekar mot en avfuktare i stället för mot en spade. */
      visaAvfuktare: boolean;
      /** Varje regel i den ordning den prövas, med utfall och källa. */
      regler: Regel[];
      gorInteDetHar: string[];
    }
  | { status: 'ogiltig'; fel: Partial<Record<keyof DraneringIndata, string>> };

/*
 * Konstanter. Källa eller ANTAGANDE i kommentaren över varje. Underlaget är
 * docs/briefer/underlag-kalkyl-dranering-2026-09-18.md.
 */

/**
 * Arbetskostnad per löpmeter husgrund, undre kanten. Källa: Villaägarna,
 * "måste du dränera huset", cirka 3 000 kr per löpmeter husgrund i
 * arbetskostnad. Samma tal som kostnadstabellen i /fukt/fukt-i-kallaren/.
 * https://www.villaagarna.se/radgivning-och-tips/utomhus/grund/maste-du-dranera-huset/
 */
export const ARBETE_KR_PER_LOPMETER = 3000;

/**
 * Övre kanten, alltså det dubbla. Källa: samma sida, "men det kan gå upp till
 * det dubbla", beroende på grävdjup, bergsprängning och markförhållanden.
 */
export const ARBETE_FAKTOR_OVRE = 2;

/**
 * Hur stor del av påslaget för djup och åtkomst som slår igenom på den övre
 * kanten. ANTAGANDE, och ett av de viktigare talen i modulen.
 *
 * Villaägarnas fördubbling är redan motiverad med just grävdjup,
 * bergsprängning och markförhållanden. Att lägga våra påslag ovanpå den i båda
 * ändarna vore att räkna samma svårighet två gånger, och den övre kanten hade
 * hamnat långt över allt marknaden publicerar. Vi flyttar därför den undre
 * kanten helt och den övre halvt: berättar du att tomten är svår vet vi mer om
 * jobbet än Villaägarna gjorde, och då ska spannet bli smalare och inte bara
 * högre. Vid en fri tomt på referensdjup är faktorn 1 och spannet är exakt
 * Villaägarnas eget, alltså 3 000 till 6 000 kr per löpmeter.
 */
export const OVRE_DAMPNING = 0.5;

/**
 * Schaktdjupet Villaägarnas tal förutsätter. ANTAGANDE. Källan anger inget
 * djup, och en full källare i en svensk villa från femtiotalet och framåt har
 * sulan på ungefär två meters djup. Djupet är referens, inte gräns: faktorn
 * nedan är 1 här och rör sig därifrån.
 */
export const SCHAKTDJUP_REFERENS_M = 2;

/**
 * Så mycket ändras arbetskostnaden per meter schakt över eller under
 * referensdjupet. Källa för storleken: BraByggare, "varje extra halvmeter ökar
 * kostnaden med 25–50 procent", alltså 50 till 100 procent per meter. Vi
 * räknar med den nedre kanten, eftersom deras tal gäller hela jobbet medan vår
 * faktor bara flyttar arbetet. Att kurvan är rak är vårt ANTAGANDE; BraByggare
 * ger tre djupband, inte en formel.
 * https://www.brabyggare.se/info/vad-kostar-dranering-av-hus-2026/
 */
export const DJUP_PASLAG_PER_M = 0.5;

/**
 * Faktorn kläms mellan de här kanterna, så att ett extremdjup inte skenar.
 * ANTAGANDE. Undre kanten nås vid 1,2 m, alltså överkanten på BraByggares
 * grundaste djupband, och övre kanten vid 4 m, som är fältets egen gräns.
 */
export const DJUP_FAKTOR_MIN = 0.6;
export const DJUP_FAKTOR_MAX = 2;

/**
 * Vad åtkomsten gör med arbetskostnaden. Fri tomt är 1, alltså Villaägarnas
 * eget fall.
 *
 * Trång tomt: källa BraByggare, "trångt utrymme mellan hus och tomtgräns
 * (under 3 m) kan utgöra merarbete på 10–25 procent". Vi tar övre kanten, för
 * den som kryssar i rutan har ett verkligt problem och inte ett gränsfall.
 *
 * Berg: ANTAGANDE. BraByggares svåraste klass (berg, sprängning, trång tomt)
 * ligger på 7 500 till 9 500 kr per löpmeter mot standardklassens 4 200 till
 * 5 500, alltså ungefär 1,7 gånger. Vi räknar lägre, eftersom sprängningens
 * fasta kostnader ligger utanför meterpriset och står som en egen rad i svaret.
 */
export const ATKOMST_FAKTOR: Record<Atkomst, number> = {
  fri: 1,
  trang: 1.25,
  berg: 1.5,
};

/**
 * Sprängningens fasta kostnader, som inte följer löpmetern: etablering av
 * borrigg och täckning av omgivningen. Källa: HelpHero, kunskapsbank om
 * bergsprängning, etablering cirka 10 000 kr för ett normalt uppdrag och
 * täckning cirka 15 000 kr. Beloppen står som en upplysning i svaret och
 * räknas aldrig in i meterpriset.
 * https://helphero.se/kunskapsbank/markarbete/sa-mycket-kostar-bergsprangning
 */
export const SPRANGNING_ETABLERING_KR = 10000;
export const SPRANGNING_TACKNING_KR = 15000;

export const ATKOMSTER: { varde: Atkomst; etikett: string; hjalp: string }[] = [
  {
    varde: 'fri',
    etikett: 'Fri tomt, grävmaskinen kommer runt hela huset',
    hjalp: 'Marken är jord eller morän, och massorna får plats bredvid schakten.',
  },
  {
    varde: 'trang',
    etikett: 'Trångt, en eller flera sidor måste grävas för hand',
    hjalp: 'Radhus, tomtgräns tätt inpå, eller massor som måste köras bort med en gång.',
  },
  {
    varde: 'berg',
    etikett: 'Berg eller sten i schakten',
    hjalp: 'Det behövs hydraulhammare eller sprängning innan röret kan läggas.',
  },
];

/**
 * Material per löpmeter husgrund, undre och övre kant i kronor, vid
 * referensdjupet. Posterna är hyllpriser inklusive moms, lästa 18 september
 * 2026, och summan är vår.
 *
 * Undre kanten, cirka 300 kr per meter: dräneringsslang 90 mm med geotextil
 * 56 kr per meter (Bauhaus), noppmatta Isola Platon Xtra 80 kr per kvm
 * (Bauhaus) i två meters höjd, fiberduk 5 kr per kvm och makadam i nedre
 * kanten av 100 kr per ton (markochanlaggning.se, riktvärden exklusive moms).
 *
 * Övre kanten, cirka 900 kr per meter: samma rör, men en dränerande
 * grundmursskiva av typen Isodrän 100 mm för 320 kr per kvm (Markgrossen) i
 * stället för noppmattan, fiberduk i övre kanten och mer makadam.
 *
 * Priserna är färskvara, och hämtningsdatumet står i antagandetabellen på
 * sidan. Byggmax, K-Rauta, Beijer och Hornbach visar sina priser med
 * JavaScript och gick inte att läsa maskinellt.
 */
export const MATERIAL_LAG_KR_PER_M = 300;
export const MATERIAL_HOG_KR_PER_M = 900;

/**
 * Materialet följer djupet rakare än arbetet gör: dubbelt så djup schakt är
 * dubbelt så hög skiva mot väggen och ungefär dubbelt så mycket makadam.
 * ANTAGANDE att posten skalar rakt mot djupet, med samma klämning som ovan.
 */
export const MATERIAL_FAKTOR_MIN = 0.5;
export const MATERIAL_FAKTOR_MAX = 2;

/**
 * Att lägga tillbaka ytan ovanpå schakten, kronor per löpmeter. Schakten är
 * ungefär en meter bred vid husliv (GarBo), så talen är också kronor per
 * kvadratmeter återställd yta.
 *
 * Gräs: rullgräs kostar 36 till 51 kr per kvm hos Upplands Gräsmattor,
 * inklusive moms men utan läggning, och matjorden ligger på 150 till 300 kr
 * per ton. Vårt spann rymmer materialet plus en dags arbete.
 * Asfalt: 250 till 500 kr per kvm enligt BraByggare, utan markarbete, och en
 * smal remsa längs ett hus är dyrare per kvm än en hel uppfart.
 * Plattgång: 500 till 900 kr per kvm inklusive arbete enligt BraByggare.
 * Rabatt och altan: ANTAGANDE. Ingen källa vi hittat prissätter någon av dem.
 * Altanen är att skruva loss, spara virket och bygga upp igen.
 */
export const ATERSTALLNING: Record<Aterstallning, { etikett: string; lagKrPerM: number; hogKrPerM: number }> = {
  gras: { etikett: 'Gräsmatta', lagKrPerM: 100, hogKrPerM: 300 },
  rabatt: { etikett: 'Rabatt eller buskar', lagKrPerM: 200, hogKrPerM: 600 },
  asfalt: { etikett: 'Asfalt', lagKrPerM: 300, hogKrPerM: 700 },
  plattgang: { etikett: 'Plattgång eller marksten', lagKrPerM: 500, hogKrPerM: 900 },
  altan: { etikett: 'Altan eller trädäck', lagKrPerM: 800, hogKrPerM: 2000 },
};

export const ATERSTALLNINGAR: { varde: Aterstallning; etikett: string }[] = [
  { varde: 'gras', etikett: 'Gräsmatta' },
  { varde: 'rabatt', etikett: 'Rabatt eller buskar' },
  { varde: 'asfalt', etikett: 'Asfalt' },
  { varde: 'plattgang', etikett: 'Plattgång eller marksten' },
  { varde: 'altan', etikett: 'Altan eller trädäck' },
];

/**
 * Rotavdraget: högst 30 procent av arbetskostnaden på fakturan, och högst
 * 50 000 kr per person och år inom ett gemensamt tak för rot och rut på
 * 75 000 kr. Källa: Skatteverket, så fungerar rotavdraget. Att dränera
 * husgrunder står uttryckligen i listan över arbete som ger rätt till avdrag.
 * https://www.skatteverket.se/privat/fastigheterochbostad/rotarbeteochrutarbete/safungerarrotavdraget.4.5947400c11f47f7f9dd80004014.html
 *
 * Nivån var tillfälligt 50 procent för arbete som betalades mellan 12 maj och
 * 31 december 2025 och är tillbaka på 30 procent sedan 1 januari 2026. Det är
 * betalningsdatum och inte fakturadatum som styr.
 */
export const ROT_ANDEL = 0.3;
export const ROT_TAK_KR = 50000;

/**
 * Hur stor del av arbetsposten som faktiskt ger rätt till rotavdrag.
 * ANTAGANDE, och den enda siffran på sidan som inget annat verktyg på svenska
 * har. Skatteverket undantar uttryckligen maskinell utrustning, "till exempel
 * grävmaskiner, borraggregat eller liknande", och en dränering är till stor
 * del grävmaskin och transport av massor. BraByggare anger att arbetet är 35
 * till 50 procent av totalpriset medan vår arbetspost är närmare nio
 * tiondelar, så skillnaden är just maskinen och lassen. Vi räknar med att tre
 * femtedelar av arbetsposten är rotgrundande arbete. Källa för undantaget:
 * Skatteverket, ger arbetet rätt till rotavdrag, under "Inget avdrag ges för".
 * https://www.skatteverket.se/foretag/skatterochavdrag/rotochrut/gerarbetetratttillrotavdrag.4.5c1163881590be297b5173bf.html
 */
export const ROT_GRUNDANDE_ANDEL = 0.6;

/**
 * En gammal dränering kan fungera i femtio år, särskilt om källaren bara
 * används som källare. Källa: Villaägarna, samma sida som arbetskostnaden.
 * Rådgivarna där avråder från att gräva i förebyggande syfte.
 */
export const KAN_HALLA_AR = 50;

/**
 * Åldern där markfukt i tejptestet gör det motiverat att gräva. Källa för
 * storleken: Husgrunder, en dränering äldre än 25 till 30 år bör utvärderas.
 * Branschens spann för teknisk livslängd går från 20 år (GarBo) till 50
 * (Villaägarna), och 30 till 50 år är det vanligaste talet. Att gränsen går
 * vid just 30 är vår avvägning, och den gäller bara tillsammans med markfukt
 * på plasten: åldern ensam flyttar aldrig svaret till en grävning.
 * https://husgrunder.com/renovera-kallargrund/dranering-av-kallare-husgrund/
 */
export const TROLIGT_SLUT_AR = 30;

/**
 * Kondensavfuktare till en källare på 40 kvm. Källa: Proffsmagasinet, priset
 * på Wood's SW39FW I-EcoDefrost+, läst 16 september 2026. Samma tal som
 * kostnadstabellen i /fukt/fukt-i-kallaren/.
 */
export const AVFUKTARE_KR = 5948;

/**
 * Fuktkontroll av källarutrymme hos ett saneringsföretag, inklusive moms.
 * Källa: Ocabs eget listpris, läst 16 september 2026. Konkurrentens pris på
 * sin egen tjänst, använt som storleksordning för vad ett besök kostar.
 * https://www.ocab.se/fukt-och-vattenskador/fukt-i-kallare/
 */
export const FUKTUTREDNING_KR = 5355;

/**
 * Vad taket häller ner vid ett vanligt regn. Källa: Anticimex, fukt i källare
 * och grund: 20 mm regn på ett tak på 150 kvm ger 3 000 liter vatten som måste
 * ledas bort. Talet motiverar det billigaste steget, alltså stuprör, markfall
 * och rensad dagvattenbrunn, innan någon gräver.
 * https://www.anticimex.se/fuktskador/grund-kallare/
 */
export const TAK_KVM = 150;
export const REGN_MM = 20;
export const REGN_LITER = 3000;

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
  { varde: 'inte-gjort', etikett: 'Jag har inte gjort testet', hjalp: 'Det kostar dig en bit plast och två dygn.' },
];

export const BESKED_RUBRIK: Record<Besked, string> = {
  dranera: 'Dränera om',
  'mat-forst': 'Mät först',
  'billiga-forst': 'Gör det billiga först',
};

/**
 * Standardvärdena: ett villahus på 12 gånger 8 meter, alltså 40 löpmeter
 * husgrund, som är samma räkneexempel som kostnadsavsnittet i
 * /fukt/fukt-i-kallaren/. Full källare, fri tomt, gräs ovanpå schakten, en
 * dränering som är lika gammal som ett hus från sjuttiotalet, och ett tejptest
 * som ännu inte är gjort. Det sista är med flit: sajtens råd är att inte gräva
 * förrän plasten har svarat.
 */
export const STANDARD: DraneringIndata = {
  husLangdM: 12,
  husBreddM: 8,
  schaktDjupM: SCHAKTDJUP_REFERENS_M,
  atkomst: 'fri',
  aterstallning: 'gras',
  alderAr: 50,
  tejptest: 'inte-gjort',
};

export const GRANSER = {
  husLangdM: [3, 60],
  husBreddM: [3, 60],
  schaktDjupM: [0.5, 4],
  alderAr: [0, 150],
} as const;

/*
 * Råden skrivs enligt docs/STILGUIDE.md: högst ett tal per mening, och två
 * bara när de två talen är jämförelsen.
 */

const GOR_INTE_GRAV_FORE_TESTET =
  'Gräv inte innan tejptestet har svarat. En bit plastfolie mot källarväggen i två dygn skiljer markfukt från kondens, och de två kräver helt olika saker av dig. Testet kostar en rulle tejp, och grävningen kostar som ett badrum.';

const GOR_INTE_AVFUKTARE_MOT_MARKFUKT =
  'Köp inte en avfuktare mot markfukt. Maskinen torkar luften i rummet, mer vatten dunstar ur väggen, och väggen suger efter mer ur marken. Betongen är lika våt som förut, och du betalar för det dygnet runt.';

const GOR_INTE_OFFERT_UTAN_MATVARDEN =
  'Ta inte in en offert på en åtgärd innan du har en fuktutredning med mätvärden. Du vill se luftfuktighet och temperatur i materialet, var i huset de mätte och vilken slutsats de drar av just de talen. Ett papper utan en enda siffra är ett säljbesök.';

const GOR_INTE_FOREBYGGANDE =
  'Gräv inte för säkerhets skull när källaren bara används som källare. Villaägarnas rådgivare säger rakt ut att det finns roligare saker att lägga pengarna på, och en grävning som inte behövdes kostar mer än allt annat på den här sidan tillsammans.';

const GOR_INTE_PLAST_MOT_VAGGEN =
  'Sätt inte en plastmatta direkt mot väggen som enda skydd utifrån. Villaägarna varnar för det, eftersom den kalla marken gör att fukten stannar i väggen i stället för att vandra ut. Skyddet ska stoppa vattnet och samtidigt släppa ut det som redan sitter i betongen.';

/** Decimalkomma accepteras: '2,5' blir 2.5. Tomt eller skräp ger NaN. */
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

/** Meter med decimalkomma: "2,5 m", "2 m". */
function meter(n: number): string {
  const rundat = Math.round(n * 100) / 100;
  return `${String(rundat).replace('.', ',')} m`;
}

function klam(varde: number, minsta: number, storsta: number): number {
  return Math.min(storsta, Math.max(minsta, varde));
}

/** Avrundning till närmaste tusental, så att ett intervall inte låtsas vara exakt. */
function tillTusental(n: number): number {
  return Math.round(n / 1000) * 1000;
}

function enDecimal(n: number): number {
  return Math.round(n * 10) / 10;
}

/**
 * Hur mycket djupare eller grundare schakt kostar i arbete. 1 vid
 * referensdjupet, klämd mellan kanterna.
 */
export function djupfaktor(schaktDjupM: number): number {
  const rak = 1 + (schaktDjupM - SCHAKTDJUP_REFERENS_M) * DJUP_PASLAG_PER_M;
  return klam(rak, DJUP_FAKTOR_MIN, DJUP_FAKTOR_MAX);
}

/** Materialet skalar rakt mot djupet: dubbelt djup är dubbel skiva och dubbel makadam. */
export function materialfaktor(schaktDjupM: number): number {
  const rak = schaktDjupM / SCHAKTDJUP_REFERENS_M;
  return klam(rak, MATERIAL_FAKTOR_MIN, MATERIAL_FAKTOR_MAX);
}

/**
 * Rotavdraget på en arbetspost: 30 procent av den del som är rotgrundande
 * arbete, alltså inte maskinhyran, och högst taket per person och år.
 * Verktyget räknar på en person, och sidan säger att två ägare har dubbelt tak.
 */
export function rotavdrag(arbeteKr: number): { grundandeKr: number; avdragKr: number; taketNas: boolean } {
  const grundandeKr = Math.round(arbeteKr * ROT_GRUNDANDE_ANDEL);
  const rakt = grundandeKr * ROT_ANDEL;
  return { grundandeKr, avdragKr: Math.round(Math.min(rakt, ROT_TAK_KR)), taketNas: rakt > ROT_TAK_KR };
}

function arAtkomst(v: string | null): v is Atkomst {
  return v === 'fri' || v === 'trang' || v === 'berg';
}

function arAterstallning(v: string | null): v is Aterstallning {
  return v === 'gras' || v === 'rabatt' || v === 'plattgang' || v === 'asfalt' || v === 'altan';
}

function arTejptest(v: string | null): v is Tejptest {
  return v === 'markfukt' || v === 'kondens' || v === 'torrt' || v === 'inte-gjort';
}

/**
 * Läser adressen. Skräp i ett val faller tillbaka på standardvärdet, skräp i
 * ett tal blir NaN och ger ett fel på just det fältet.
 */
export function tolkaQuery(q: URLSearchParams): { indata: DraneringIndata; harIndata: boolean } {
  const nycklar = ['langd', 'bredd', 'djup', 'atkomst', 'aterstall', 'alder', 'tejp'];
  const harIndata = nycklar.some((n) => q.has(n));

  const raAtkomst = q.get('atkomst');
  const raAterstallning = q.get('aterstall');
  const raTejp = q.get('tejp');
  const las = (nyckel: string, standardVarde: number) =>
    q.has(nyckel) ? tillTal(q.get(nyckel)) : standardVarde;

  return {
    harIndata,
    indata: {
      husLangdM: las('langd', STANDARD.husLangdM),
      husBreddM: las('bredd', STANDARD.husBreddM),
      schaktDjupM: las('djup', STANDARD.schaktDjupM),
      atkomst: arAtkomst(raAtkomst) ? raAtkomst : STANDARD.atkomst,
      aterstallning: arAterstallning(raAterstallning) ? raAterstallning : STANDARD.aterstallning,
      alderAr: las('alder', STANDARD.alderAr),
      tejptest: arTejptest(raTejp) ? raTejp : STANDARD.tejptest,
    },
  };
}

export function raknaDranering(i: DraneringIndata): DraneringResultat {
  const fel: Partial<Record<keyof DraneringIndata, string>> = {};
  const inom = (varde: number, granser: readonly [number, number]) =>
    Number.isFinite(varde) && varde >= granser[0] && varde <= granser[1];

  if (!inom(i.husLangdM, GRANSER.husLangdM)) {
    fel.husLangdM = `Skriv husets längd mellan ${GRANSER.husLangdM[0]} och ${GRANSER.husLangdM[1]} meter`;
  }
  if (!inom(i.husBreddM, GRANSER.husBreddM)) {
    fel.husBreddM = `Skriv husets bredd mellan ${GRANSER.husBreddM[0]} och ${GRANSER.husBreddM[1]} meter`;
  }
  if (!inom(i.schaktDjupM, GRANSER.schaktDjupM)) {
    fel.schaktDjupM = `Skriv schaktdjupet mellan ${String(GRANSER.schaktDjupM[0]).replace('.', ',')} och ${GRANSER.schaktDjupM[1]} meter`;
  }
  if (!inom(i.alderAr, GRANSER.alderAr) || !Number.isInteger(i.alderAr)) {
    fel.alderAr = `Skriv dräneringens ålder som ett helt antal år mellan ${GRANSER.alderAr[0]} och ${GRANSER.alderAr[1]}`;
  }
  if (Object.keys(fel).length > 0) return { status: 'ogiltig', fel };

  // Steg 1. Löpmetern. Läsaren mäter två sidor, verktyget räknar omkretsen.
  const omkretsM = enDecimal(2 * (i.husLangdM + i.husBreddM));

  // Steg 2. Arbetet. Villaägarnas spann, flyttat av djupet och åtkomsten.
  const djupFaktor = enDecimal(djupfaktor(i.schaktDjupM));
  const atkomstFaktor = ATKOMST_FAKTOR[i.atkomst];
  const arbeteFaktor = djupFaktor * atkomstFaktor;
  const arbeteLagKrPerM = Math.round(ARBETE_KR_PER_LOPMETER * arbeteFaktor);
  // Den övre kanten rör sig bara halva vägen, se OVRE_DAMPNING.
  const arbeteHogKrPerM = Math.round(
    ARBETE_KR_PER_LOPMETER * ARBETE_FAKTOR_OVRE * (1 + (arbeteFaktor - 1) * OVRE_DAMPNING),
  );

  // Steg 3. Materialet, som följer djupet rakare än arbetet gör.
  const materialFaktor = materialfaktor(i.schaktDjupM);
  const materialLagKrPerM = Math.round(MATERIAL_LAG_KR_PER_M * materialFaktor);
  const materialHogKrPerM = Math.round(MATERIAL_HOG_KR_PER_M * materialFaktor);

  // Steg 4. Återställningen, som bara beror på vad som ligger ovanpå schakten.
  const aterstallning = ATERSTALLNING[i.aterstallning];

  const post = (namn: string, lagKrPerM: number, hogKrPerM: number): Post => ({
    namn,
    lagKrPerM,
    hogKrPerM,
    lagKr: tillTusental(lagKrPerM * omkretsM),
    hogKr: tillTusental(hogKrPerM * omkretsM),
  });

  const poster: Post[] = [
    post('Arbete', arbeteLagKrPerM, arbeteHogKrPerM),
    post('Material', materialLagKrPerM, materialHogKrPerM),
    post(`Återställning, ${aterstallning.etikett.toLowerCase()}`, aterstallning.lagKrPerM, aterstallning.hogKrPerM),
  ];

  const summaLagKr = poster.reduce((s, p) => s + p.lagKr, 0);
  const summaHogKr = poster.reduce((s, p) => s + p.hogKr, 0);
  const summaLagKrPerM = Math.round(summaLagKr / omkretsM);
  const summaHogKrPerM = Math.round(summaHogKr / omkretsM);

  // Steg 5. Rotavdraget, som bara gäller arbetet.
  const rot = rotavdrag(poster[0]!.lagKr);
  const efterRotLagKr = summaLagKr - rot.avdragKr;
  const efterRotHogKr = summaHogKr - rotavdrag(poster[0]!.hogKr).avdragKr;

  // Steg 6. Jämförelsen som är hela poängen med verktyget.
  const faktorMotAvfuktare = Math.round(summaLagKr / AVFUKTARE_KR);
  const faktorMotUtredning = Math.round(summaLagKr / FUKTUTREDNING_KR);

  // Steg 7. Beskedet. Tejptestet avgör först, åldern sedan.
  const gammal = i.alderAr >= TROLIGT_SLUT_AR;
  const besked: Besked =
    i.tejptest === 'markfukt' ? (gammal ? 'dranera' : 'billiga-forst') : i.tejptest === 'kondens' ? 'mat-forst' : 'billiga-forst';
  const visaAvfuktare = i.tejptest === 'kondens';

  // Steg 8. Reglerna, i ordning. Varje regel bär sin källa.
  const regler: Regel[] = [];

  // 8a. Tejptestet, som är den enda mätningen läsaren kan göra gratis.
  if (i.tejptest === 'markfukt') {
    regler.push({
      utfall: 'grav',
      text: 'Plasten är våt på väggsidan. Vattnet kommer alltså genom betongen, och det är markfukt. Skyddet mot den sitter på utsidan av väggen, så allt du gör inifrån flyttar problemet i stället för att lösa det.',
      kalla: 'Boverket, fuktinträngning från mark till källarvägg. Tejptestet beskrivs av tidningen Gör Det Själv',
    });
  } else if (i.tejptest === 'kondens') {
    regler.push({
      utfall: 'mat',
      text: `Plasten är våt på rumssidan. Vattnet kommer alltså ur luften, och det är kondens. Det är det enda av de tre fallen där en maskin hjälper. En avfuktare kostar ${kronor(AVFUKTARE_KR)} kr, och grävningen kostar ${faktorMotAvfuktare} gånger mer.`,
      kalla: 'Tejptestet beskrivs av tidningen Gör Det Själv. Avfuktarens pris är läst hos Proffsmagasinet',
    });
  } else if (i.tejptest === 'torrt') {
    regler.push({
      utfall: 'billigt',
      text: 'Torrt på båda sidor betyder oftast att plasten satt på fel vägg, och sällan att huset är friskt. Flytta plasten till den lägsta punkten på en vägg som ligger mot mark, helst i ett hörn, och gör om testet.',
      kalla: 'Tidningen Gör Det Själv, bekämpa fukt i källaren',
    });
  } else {
    regler.push({
      utfall: 'billigt',
      text: 'Vattnet i en källare kommer från ett av tre ställen: markfukt genom väggen, kondens ur luften, eller ett läckage som kommer med regnet. Tejptestet säger vilket av dem du har, och det kostar dig en bit plast och två dygn.',
      kalla: 'Tidningen Gör Det Själv, bekämpa fukt i källaren',
    });
  }

  // 8b. Åldern. Villaägarnas femtio år är taket, vår gräns ligger under det.
  if (gammal) {
    regler.push({
      utfall: i.tejptest === 'markfukt' ? 'grav' : 'ok',
      text: `Dräneringen är ${i.alderAr} år gammal. Villaägarna säger att en dränering kan hålla i femtio år, så åldern ensam är inget skäl att gräva. Tillsammans med markfukt på plasten är den det.`,
      kalla: 'Villaägarna, måste du dränera huset. Gränsen på 30 år är min',
    });
  } else {
    regler.push({
      utfall: 'ok',
      text: `Dräneringen är ${i.alderAr} år gammal, alltså långt från de femtio år Villaägarna räknar med. Är källaren ändå fuktig sitter felet troligen ovan mark, i ett stuprör, i markfallet eller i en otät genomföring.`,
      kalla: 'Villaägarna, måste du dränera huset',
    });
  }

  // 8c. Det billiga, som alltid ska göras först.
  regler.push({
    utfall: 'billigt',
    text: `Stuprören ska leda bort vattnet, marken ska luta från huset och dagvattenbrunnen ska vara rensad. Ett tak på ${TAK_KVM} kvm lämnar ifrån sig ${kronor(REGN_LITER)} liter vid ett rejält regn, och det ska inte ner längs grundmuren.`,
    kalla: 'Skadedjurs- och besiktningsföretaget Anticimex, fukt i källare och grund',
  });

  // 8d. Fuktutredningen, som är det enda som gör en offert läsbar.
  regler.push({
    utfall: 'mat',
    text: `En fuktutredning med mätvärden kostar ${kronor(FUKTUTREDNING_KR)} kr, och grävningen kostar ${faktorMotUtredning} gånger mer. Be om utredningen först och om offerten på åtgärden sedan.`,
    kalla: 'Saneringsföretaget Ocab, listpris på fuktkontroll av källarutrymme',
  });

  // 8e. Åtkomsten och djupet, alltså varför priset ser ut som det gör.
  if (i.atkomst !== 'fri' || i.schaktDjupM !== SCHAKTDJUP_REFERENS_M) {
    const del =
      i.atkomst === 'berg'
        ? 'Berg eller sten i schakten betyder sprängning eller hydraulhammare innan röret kan läggas'
        : i.atkomst === 'trang'
          ? 'En trång tomt betyder handgrävning på de sidor maskinen inte når'
          : `Schakten går ner till ${meter(i.schaktDjupM)} och inte till de ${meter(SCHAKTDJUP_REFERENS_M)} som räknas som normalt djup`;
    // Djup och åtkomst kan ta ut varandra. Då blir "i stället för" en jämförelse
    // mellan två lika tal, och raden säger i stället att talet står kvar.
    const prisdel =
      arbeteLagKrPerM === ARBETE_KR_PER_LOPMETER
        ? `Arbetet hamnar ändå på Villaägarnas eget tal, ${kronor(ARBETE_KR_PER_LOPMETER)} kr per löpmeter.`
        : `Därför ligger arbetet på ${kronor(arbeteLagKrPerM)} kr per löpmeter i stället för ${kronor(ARBETE_KR_PER_LOPMETER)}.`;
    regler.push({
      utfall: 'ok',
      text: `${del}. ${prisdel}`,
      kalla: 'Villaägarna för spannet, byggsajten BraByggare för påslagen på djup och trång tomt',
    });
  }

  // 8f. Sprängningens fasta kostnader, som aldrig ryms i ett meterpris.
  if (i.atkomst === 'berg') {
    regler.push({
      utfall: 'ok',
      text: `Sprängning har fasta kostnader som inte ryms i ett meterpris. Borriggen kostar runt ${kronor(SPRANGNING_ETABLERING_KR)} kr att få på plats, och täckningen av husen omkring kostar runt ${kronor(SPRANGNING_TACKNING_KR)} kr. Be om dem som egna rader i offerten.`,
      kalla: 'Tjänsteförmedlaren HelpHero, kunskapsbank om bergsprängning',
    });
  }

  // 8g. Rotavdraget, och fällan som ingen annan svensk sida skriver ut.
  regler.push({
    utfall: 'ok',
    text: `Dränering ger rotavdrag, men inte på maskinhyran, och grävmaskinen är en stor del av notan. Här blir avdraget ${kronor(rot.avdragKr)} kr, räknat på tre femtedelar av arbetet. Be om en faktura där maskinen står på egen rad.`,
    kalla: 'Skatteverket, så fungerar rotavdraget, och listan över arbete som ger rätt till avdrag. Femtedelarna är mitt antagande',
  });

  const beskedRad =
    besked === 'dranera'
      ? `Plasten visar markfukt och dräneringen har passerat trettio år, så räkna med ${kronor(summaLagKr)} till ${kronor(summaHogKr)} kr för hela grunden. Skaffa en fuktutredning med mätvärden innan du tar in offerter.`
      : besked === 'mat-forst'
        ? `Vattnet kommer ur luften och inte ur marken. En avfuktare kostar knappt sex tusen kronor, och den här grävningen börjar på ${kronor(summaLagKr)} kr. Mät över en vinter innan du river upp tomten.`
        : `Rensa dagvattenbrunnen, se över stuprören och markfallet, och gör tejptestet. Det kostar dig en helg, medan grävningen börjar på ${kronor(summaLagKr)} kr.`;

  const gorInteDetHar = [
    GOR_INTE_GRAV_FORE_TESTET,
    GOR_INTE_AVFUKTARE_MOT_MARKFUKT,
    GOR_INTE_OFFERT_UTAN_MATVARDEN,
    GOR_INTE_FOREBYGGANDE,
    GOR_INTE_PLAST_MOT_VAGGEN,
  ];

  return {
    status: 'ok',
    omkretsM,
    poster,
    arbeteLagKrPerM,
    arbeteHogKrPerM,
    arbeteLagKr: poster[0]!.lagKr,
    arbeteHogKr: poster[0]!.hogKr,
    summaLagKr,
    summaHogKr,
    summaLagKrPerM,
    summaHogKrPerM,
    efterRotLagKr,
    efterRotHogKr,
    rotavdragKr: rot.avdragKr,
    rotGrundandeKr: rot.grundandeKr,
    rotTaketNas: rot.taketNas,
    djupFaktor,
    atkomstFaktor,
    besked,
    beskedRubrik: BESKED_RUBRIK[besked],
    beskedRad,
    faktorMotAvfuktare,
    faktorMotUtredning,
    visaAvfuktare,
    regler,
    gorInteDetHar,
  };
}
