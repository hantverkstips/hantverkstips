/**
 * Vad håller i gipsväggen? Ren modul utan importer från Astro, testbar utan
 * bygge. Sidan /rakna/gipsplugg/ skickar formuläret som GET och räknar på
 * servern, så ingen rad av den här filen når klienten.
 *
 * Det här är ett beslutsverktyg, inte en materialräknare. Det svarar med ett av
 * fyra besked: klisterkrok eller X-krok räcker, plugg räcker, sätt den i
 * regeln, eller kortling behövs. Under beskedet står de infästningar som klarar
 * lasten per infästningspunkt i den skiva läsaren valt, med tillverkarens eget
 * värde på raden.
 *
 * Talen är tillverkarnas rekommenderade last per infästning, inte brottlast.
 * Underlaget är docs/briefer/underlag-skruva-i-gipsvagg-2026-09-16.md, och
 * samma tal står i viktabellen i /inomhus/skruva-i-gipsvagg/ och i
 * krokstabellen i /inomhus/hanga-tavla-gipsvagg/.
 *
 * Gränsen på 20 kg för regel eller kortling är sajtens egen, fastställd i
 * docs/INNEHALLSARKITEKTUR.md avsnitt 2. Den är konservativ mot mollyns 38 kg,
 * och den gäller tills vår egen belastningsundersökning med hängvåg ger ett
 * uppmätt tal.
 *
 * Testas av scripts/test-kalkyl-gipsplugg.mjs.
 */

/** Vad saken är. Avgör hur lasten fördelar sig och vilka infästningar som får stå kvar. */
export type Sak = 'tavla' | 'hylla' | 'tv-fast' | 'tv-svangarm' | 'skap' | 'krok' | 'tak';

/** Skivan bakom infästningen. Den tunna skivan kallas ofta 9 mm och mäter 9,5. */
export type Skiva = 'ett-lag' | 'tva-lag' | 'tunn';

/** Sitter det en regel bakom där saken ska sitta? */
export type RegelBakom = 'ja' | 'nej' | 'vet-inte';

/** Beskedet i stort format. */
export type Svar = 'krok' | 'plugg' | 'regel' | 'kortling';

export interface GipspluggIndata {
  /** Vad saken väger, i kilogram. */
  viktKg: number;
  /** Vad det är som ska upp. */
  sak: Sak;
  /** Skivtjocklek och antal lag. */
  skiva: Skiva;
  /** Antal infästningspunkter, alltså skruvar eller krokar saken hänger i. */
  punkter: number;
  /** Finns en regel bakom där saken ska sitta? */
  regel: RegelBakom;
}

/** En rad i tabellen över infästningar, som den visas för just den här lasten. */
export interface InfastningRad {
  id: string;
  namn: string;
  /** Tillverkarens rekommenderade last i den valda skivan. null när värde saknas. */
  kapacitetKg: number | null;
  /** Klarar raden lasten per punkt? Falskt gråmarkerar raden i tabellen. */
  klarar: boolean;
  /** Källan som anger talet, presenterad med ett eller två ord. */
  kalla: string;
  kallaUrl: string;
  /** Villkoret som hör till talet, när ett sådant finns. */
  anm?: string;
}

export type GipspluggResultat =
  | {
      status: 'ok';
      /** Beskedet i stort format. */
      svar: Svar;
      /** Hela beskedet som en mening: "Plugg räcker". */
      svarRubrik: string;
      /** Ordet som sätts i sifferstorlek. */
      svarOrd: string;
      /** Resten av beskedet, på samma baslinje som ordet. */
      svarRest: string;
      /** Meningen som förklarar beskedet. */
      svarText: string;
      /** Lasten per infästningspunkt, i kilogram, avrundad till en decimal. */
      lastPerPunktKg: number;
      /** Antal punkter som faktiskt bär lasten. */
      barandePunkter: number;
      /** Hur lasten per punkt kom fram, i ord. */
      lastText: string;
      /** Infästningarna som gäller för den här saken, enklast först. */
      infastningar: InfastningRad[];
      /** Sant när ingen infästning i skivan klarar lasten per punkt. */
      ingenKlarar: boolean;
      /** Raden som säger vilka infästningar som är utelämnade, och varför. */
      utelamnade: string | null;
      /** Sant när sajtens regel skickar saken till regel eller kortling. */
      kraverRegel: boolean;
      /** Varför regeln slog in, i ord. Tom sträng när den inte gjorde det. */
      kraverRegelSkal: string;
      /** Råden som gäller just den här infästningen. */
      gorInteDetHar: string[];
    }
  | { status: 'ogiltig'; fel: Partial<Record<keyof GipspluggIndata, string>> };

/*
 * Konstanter. Källa eller ANTAGANDE i kommentaren över varje.
 */

/**
 * Gränsen för när något ska sitta i regel eller kortling i stället för i en
 * plugg. Vår egen gräns, fastställd för hela gipsklustret i
 * docs/INNEHALLSARKITEKTUR.md avsnitt 2. Norgips skriver "tyngre saker" utan
 * tal; vi sätter ett, och det är konservativt mot mollyns 38 kg i ett skivlag.
 * ANTAGANDE.
 */
export const GRANS_REGEL_KG = 20;

/**
 * Vad en skruv med plugg direkt i skivan bär enligt gipstillverkaren Norgips:
 * lättare saker upp till 5 till 6 kg. Talet används som den nedre av de två
 * kontrollerna i texten, inte i tabellen.
 * Källa: Norgips, hänga upp saker på väggen.
 */
export const NORGIPS_SKIVAN_KG = 6;

/**
 * Minsta avstånd mellan två infästningar i en gipsskiva, och avståndet som
 * krävs för att varje skruv ska få bära sin maxlast.
 * Källa: Norgips, hänga upp saker på gipsvägg.
 */
export const MIN_AVSTAND_MM = 50;
export const MAXLAST_AVSTAND_MM = 300;

/**
 * I tak anger Norgips högst cirka 20 kg per fästpunkt vid infästning direkt i
 * skivorna, och skriver rakt ut att stift och X-krok inte fungerar där.
 * Källa: Norgips, hänga upp saker på gipsvägg.
 */
export const TAK_MAX_KG = 20;

/**
 * Hävarmen på ett tv-fäste med svängarm. Ingen tillverkare vi hittat anger hur
 * mycket armen ökar lasten i den övre skruvraden, så talet är vårt: vi räknar
 * med att den övre raden ensam får bära hela tv:ns vikt gånger 1,5.
 * Svaret blir ändå alltid regel eller kortling, så faktorn styr inte beskedet;
 * den visar hur stor lasten blir i den skruv som dras rakt ut ur väggen.
 * ANTAGANDE.
 */
export const SVANGARM_FAKTOR = 1.5;

/** Gränsen där en X-krok med spik tar slut enligt beslagsbutiken BGA. */
export const XKROK_KG = 5;

export const SVAR_RUBRIK: Record<Svar, string> = {
  krok: 'Klisterkrok eller X-krok räcker',
  plugg: 'Plugg räcker',
  regel: 'Sätt den i regeln',
  kortling: 'Kortling behövs',
};

/** Ordet i sifferstorlek och resten av beskedet på samma baslinje. */
export const SVAR_DELAR: Record<Svar, { ord: string; rest: string }> = {
  krok: { ord: 'Krok', rest: 'klisterkrok eller X-krok räcker' },
  plugg: { ord: 'Plugg', rest: 'en plugg i skivan räcker' },
  regel: { ord: 'Regeln', rest: 'sätt den i regeln bakom skivan' },
  kortling: { ord: 'Kortling', rest: 'öppna väggen och sätt en kortling' },
};

export const SAK_VAL: { varde: Sak; etikett: string; kort: string }[] = [
  { varde: 'tavla', etikett: 'Tavla eller spegel', kort: 'Tavla' },
  { varde: 'hylla', etikett: 'Hylla med saker på', kort: 'Hylla' },
  { varde: 'tv-fast', etikett: 'Tv på fast fäste', kort: 'Tv, fast' },
  { varde: 'tv-svangarm', etikett: 'Tv på svängarm', kort: 'Tv, svängarm' },
  { varde: 'skap', etikett: 'Skåp med lucka', kort: 'Skåp' },
  { varde: 'krok', etikett: 'Handdukshängare eller krok', kort: 'Hängare' },
  { varde: 'tak', etikett: 'I tak, till exempel en lampa', kort: 'I tak' },
];

export const SKIVA_VAL: { varde: Skiva; etikett: string; kort: string }[] = [
  { varde: 'ett-lag', etikett: '12,5 mm, ett lag', kort: '12,5 ett lag' },
  { varde: 'tva-lag', etikett: '12,5 mm, två lag', kort: '12,5 två lag' },
  { varde: 'tunn', etikett: '9,5 mm, den tunna skivan', kort: '9,5 mm' },
];

export const REGEL_VAL: { varde: RegelBakom; etikett: string }[] = [
  { varde: 'ja', etikett: 'Ja' },
  { varde: 'nej', etikett: 'Nej' },
  { varde: 'vet-inte', etikett: 'Vet inte' },
];

/** Skivan i ord, för metaraden under beskedet. */
export const SKIVA_TEXT: Record<Skiva, string> = {
  'ett-lag': 'ett lag 12,5 mm gips',
  'tva-lag': 'två lag 12,5 mm gips',
  tunn: 'ett lag 9,5 mm gips',
};

/** Saken i ord, för metaraden under beskedet. */
export const SAK_TEXT: Record<Sak, string> = {
  tavla: 'tavla eller spegel',
  hylla: 'hylla med saker',
  'tv-fast': 'tv på fast fäste',
  'tv-svangarm': 'tv på svängarm',
  skap: 'skåp med lucka',
  krok: 'handdukshängare eller krok',
  tak: 'i tak',
};

/**
 * Infästningarna, sorterade från enklast till starkast. Talen är tillverkarens
 * eller leverantörens rekommenderade last per infästning i den skiva kolumnen
 * anger, aldrig brottlast. null betyder att källan inte anger något värde för
 * just den skivan, och raden faller då bort ur tabellen.
 *
 * `krok` är sant för de infästningar du hänger något på. De gäller en tavla
 * eller en spegel med tråd, inte en hyllkonsol eller ett tv-fäste som skruvas
 * fast. `tak` är sant för de infästningar som viker ut sig bakom skivan och
 * därför går att använda i ett tak. Båda urvalen är våra, inte källornas.
 * ANTAGANDE.
 */
export interface Infastning {
  id: string;
  namn: string;
  /** Rekommenderad last per infästning, kg, per skivtyp. */
  kg: Record<Skiva, number | null>;
  krok: boolean;
  tak: boolean;
  /** Vippluggen med krok är avsedd för tak, och värdet gäller bara där. */
  baraTak?: boolean;
  /**
   * Värdet gäller hela saken, inte en infästningspunkt. 3M anger vikten per
   * tavla och inte per remsa, så den raden prövas mot hela vikten. ANTAGANDE.
   */
  perSak?: boolean;
  kalla: string;
  kallaUrl: string;
  anm?: string;
}

export const INFASTNINGAR: Infastning[] = [
  {
    id: 'klisterremsa',
    namn: 'Klisterremsa för tavla',
    kg: { 'ett-lag': 7, 'tva-lag': 7, tunn: 7 },
    krok: true,
    tak: false,
    perSak: true,
    kalla: 'tillverkaren 3M',
    kallaUrl:
      'https://command.3msverige.se/3M/sv_SE/command-EU/how-to/how-to-hang-picture-without-nails/',
    anm: 'hela tavlan vid ram 60 × 90 cm, mindre ram bär mindre. Fungerar inte på tapet',
  },
  {
    id: 'xkrok',
    namn: 'X-krok med spik',
    kg: { 'ett-lag': XKROK_KG, 'tva-lag': XKROK_KG, tunn: XKROK_KG },
    krok: true,
    tak: false,
    kalla: 'beslagsbutiken BGA',
    kallaUrl: 'https://www.bga.se/Magazine/satta-upp-tavlor-pa-gipsvagg/',
    anm: 'gäller kroken i gipsvägg, inte i trä',
  },
  {
    id: 'klokrok',
    namn: 'Inslagen klokrok',
    kg: { 'ett-lag': 7, 'tva-lag': 7, tunn: 7 },
    krok: true,
    tak: false,
    kalla: 'tillverkaren 3M',
    kallaUrl: 'https://www.clasohlson.com/se/3M-Claw-tavelkrok-for-gipsvagg,-7-kg/p/41-4261',
  },
  {
    id: 'sjalvborrande',
    namn: 'Självborrande gipsplugg',
    kg: { 'ett-lag': 8, 'tva-lag': null, tunn: 7 },
    krok: false,
    tak: false,
    kalla: 'infästningstillverkaren fischer',
    kallaUrl:
      'https://www.fischer-international.com/en/products/cavity-fixings/board-fixing/plasterboard-fixing-gk',
    anm: 'nylon eller metall, GK och GKM',
  },
  {
    id: 'duoblade',
    namn: 'Självborrande med utvikande blad',
    kg: { 'ett-lag': 10, 'tva-lag': 20, tunn: 8 },
    krok: false,
    tak: true,
    kalla: 'infästningstillverkaren fischer',
    kallaUrl:
      'https://www.fischer-international.com/en/products/cavity-fixings/board-fixing/plasterboard-fixing-duoblade',
    anm: 'DuoBlade',
  },
  {
    id: 'clips',
    namn: 'Kilformat clips',
    kg: { 'ett-lag': 10, 'tva-lag': 15, tunn: null },
    krok: false,
    tak: false,
    kalla: 'tidningen Gör Det Själv',
    kallaUrl: 'https://gds.se/vagg/gipsvagg/varianter-av-gipspluggar',
  },
  {
    id: 'halrumsplugg',
    namn: 'Hålrumsplugg ø 6 mm',
    kg: { 'ett-lag': 18, 'tva-lag': 28, tunn: null },
    krok: false,
    tak: true,
    kalla: 'tidningen Gör Det Själv',
    kallaUrl: 'https://gds.se/vagg/gipsvagg/varianter-av-gipspluggar',
  },
  {
    id: 'gipskrok',
    namn: 'Gipskrok i stål',
    kg: { 'ett-lag': 20, 'tva-lag': 20, tunn: null },
    krok: true,
    tak: false,
    kalla: 'beslagstillverkaren Habo',
    kallaUrl: 'https://habo.com/se/sortiment/mobelbeslag/tavelhangare/gipskrok-19756',
  },
  {
    id: 'gipsankare',
    namn: 'Gipsankare med utvikande fot',
    kg: { 'ett-lag': 25, 'tva-lag': 40, tunn: null },
    krok: false,
    tak: true,
    kalla: 'tidningen Gör Det Själv',
    kallaUrl: 'https://gds.se/vagg/gipsvagg/varianter-av-gipspluggar',
    anm: 'Duck Foot',
  },
  {
    id: 'molly',
    namn: 'Molly ø 10 mm med rosett',
    kg: { 'ett-lag': 38, 'tva-lag': 70, tunn: null },
    krok: false,
    tak: true,
    kalla: 'tidningen Gör Det Själv',
    kallaUrl: 'https://gds.se/vagg/gipsvagg/varianter-av-gipspluggar',
    anm: 'sätts med expandertång',
  },
  {
    id: 'vipplugg',
    namn: 'Vipplugg med krok',
    kg: { 'ett-lag': null, 'tva-lag': 25, tunn: null },
    krok: false,
    tak: true,
    baraTak: true,
    kalla: 'tidningen Gör Det Själv',
    kallaUrl: 'https://gds.se/vagg/gipsvagg/varianter-av-gipspluggar',
    anm: 'avsedd för tak',
  },
];

/**
 * Standardvärdena. Den vanligaste frågan på frasen: en vägghylla med saker på,
 * i en vanlig svensk innervägg med ett lag gips, hängd i två punkter av någon
 * som inte vet om det sitter en regel bakom.
 */
export const STANDARD: GipspluggIndata = {
  viktKg: 8,
  sak: 'hylla',
  skiva: 'ett-lag',
  punkter: 2,
  regel: 'vet-inte',
};

export const GRANSER = {
  viktKg: [0.1, 200],
  punkter: [1, 12],
} as const;

/** Decimalkomma accepteras: '8,5' blir 8.5. Tomt eller skräp ger NaN. */
function tillTal(v: string | null): number {
  if (v === null) return NaN;
  const rensad = v.trim().replace(',', '.');
  if (rensad === '') return NaN;
  return Number(rensad);
}

/** Hårt mellanslag, så att talet aldrig skiljs från sin enhet vid radbryt. */
const HART = ' ';

/** "8 kg" med hårt mellanslag, och decimalkomma när talet har decimaler. */
function kg(n: number): string {
  const avrundad = Math.round(n * 10) / 10;
  const tal = Number.isInteger(avrundad) ? String(avrundad) : String(avrundad).replace('.', ',');
  return `${tal}${HART}kg`;
}

/**
 * Punkterna som faktiskt bär lasten. En hylla vrider sig ut från väggen och ett
 * skåp belastas av luckan som öppnas, så den övre raden får bära alltihop. Vi
 * räknar den övre raden som halva antalet punkter, avrundat nedåt, och aldrig
 * färre än en. ANTAGANDE, vår regel.
 */
export function barandePunkter(sak: Sak, punkter: number): number {
  const ovreRaden = sak === 'hylla' || sak === 'skap' || sak === 'tv-svangarm';
  if (!ovreRaden) return punkter;
  return Math.max(1, Math.floor(punkter / 2));
}

/**
 * Lasten per infästningspunkt i kilogram, avrundad till en decimal. Vikten
 * delas på de punkter som bär, och en svängarm multiplicerar lasten med vår
 * hävarmsfaktor innan den delas.
 */
export function lastPerPunkt(i: GipspluggIndata): number {
  const punkter = barandePunkter(i.sak, i.punkter);
  const last = i.sak === 'tv-svangarm' ? i.viktKg * SVANGARM_FAKTOR : i.viktKg;
  return Math.round((last / punkter) * 10) / 10;
}

/** Hur lasten per punkt kom fram, i ord. En tanke per mening. */
function lastText(i: GipspluggIndata, barande: number): string {
  const punktOrd = (n: number) => (n === 1 ? '1 punkt' : `${n} punkter`);
  if (i.sak === 'tv-svangarm') {
    return `Armen gör vikten till en hävarm. Jag räknar med att den övre skruvraden får bära hela vikten gånger ${String(SVANGARM_FAKTOR).replace('.', ',')}, fördelad på ${punktOrd(barande)}. Det är min regel, ingen tillverkares.`;
  }
  if (i.sak === 'skap') {
    return `Ett skåp belastas ojämnt varje gång någon öppnar luckan. Därför lägger jag hela vikten på de övre fästena, alltså ${punktOrd(barande)} av ${i.punkter}.`;
  }
  if (i.sak === 'hylla') {
    return `En hylla vill vrida sig ut från väggen, så de övre fästena bär nästan allt. Jag lägger hela vikten på ${punktOrd(barande)} av ${i.punkter}.`;
  }
  return `Vikten delar jag jämnt på ${punktOrd(barande)}.`;
}

/** Kapaciteten i den valda skivan, med takets gräns pålagd. */
function kapacitet(inf: Infastning, skiva: Skiva, sak: Sak): number | null {
  const varde = inf.kg[skiva];
  if (varde === null) return null;
  if (sak === 'tak') return Math.min(varde, TAK_MAX_KG);
  return varde;
}

/**
 * Infästningarna som gäller för just den här saken och skivan, enklast först.
 * Rader utan värde i den valda skivan faller bort helt: en rad utan tal är inget
 * råd. Rader som inte klarar lasten står kvar, gråmarkerade.
 */
export function infastningarFor(i: GipspluggIndata, last: number): InfastningRad[] {
  const rader: InfastningRad[] = [];
  for (const inf of INFASTNINGAR) {
    if (i.sak === 'tak' ? !inf.tak : inf.baraTak === true) continue;
    if (inf.krok && i.sak !== 'tavla') continue;
    const varde = kapacitet(inf, i.skiva, i.sak);
    if (varde === null) continue;
    /* Klisterremsans tal gäller hela tavlan, alla andra tal en punkt. */
    rader.push({
      id: inf.id,
      namn: inf.namn,
      kapacitetKg: varde,
      klarar: inf.perSak ? varde >= i.viktKg : varde >= last,
      kalla: inf.kalla,
      kallaUrl: inf.kallaUrl,
      ...(inf.anm ? { anm: inf.anm } : {}),
    });
  }
  return rader;
}

/**
 * Raden som säger vad som är utelämnat ur tabellen, och varför. En rad som
 * saknas utan förklaring ser ut som ett förbiseende.
 */
function utelamnadeText(sak: Sak, skiva: Skiva): string | null {
  const delar: string[] = [];
  if (sak === 'tak') {
    delar.push(
      `Krokar, klisterremsor och den självborrande gipspluggen står inte i tabellen. Gipstillverkaren Norgips skriver att stift och X-krok inte fungerar i tak, och jag räknar bara med infästningar som viker ut sig bakom skivan. I tak gäller dessutom högst ${kg(TAK_MAX_KG)} per fästpunkt, oavsett vad förpackningen säger.`,
    );
  } else if (sak !== 'tavla') {
    delar.push(
      'Klisterremsor, X-krokar och gipskrokar står inte i tabellen. De är gjorda för en tavla som hänger i en tråd, inte för en konsol eller ett fäste som skruvas fast i väggen.',
    );
  }
  if (skiva === 'tunn') {
    delar.push(
      'Hålrumsplugg, gipsankare, molly och clips saknas också. Källorna anger inga värden för den tunna skivan, och en siffra jag gissat fram är ingen siffra.',
    );
  } else if (skiva === 'tva-lag' && sak !== 'tak') {
    delar.push(
      'Den självborrande gipspluggen saknas också. fischer anger inget värde för två lag, och metallvarianten ska dessutom förborras med en borr på ø 8 mm när den går genom två skivor.',
    );
  }
  return delar.length > 0 ? delar.join(' ') : null;
}

const GOR_INTE_SVANGARM =
  'Sätt inte ett tv-fäste med svängarm i en plugg, hur högt tal det än står på förpackningen. Armen drar den övre skruvraden rakt ut ur väggen, och tillverkarnas tal gäller en vikt som hänger stilla. Fästet ska ha träskruv i två reglar, eller i en kortling du satt in själv.';

const GOR_INTE_XKROK_TAK =
  'Slå inte upp en X-krok eller ett stift i taket. Norgips skriver rakt ut att de inte fungerar där, eftersom lasten drar rakt ut ur skivan i stället för nedåt längs den. I tak gäller en infästning som viker ut sig bakom gipset.';

const GOR_INTE_TATT = `Sätt inte två infästningar närmare varandra än ${MIN_AVSTAND_MM}${HART}mm. Då delar de på samma bit gips och bryter loss den tillsammans. Ska varje infästning bära sin maxlast vill Norgips ha minst ${MAXLAST_AVSTAND_MM}${HART}mm mellan dem.`;

const GOR_INTE_EN_PUNKT =
  'Häng inte något tungt i en enda punkt. Två infästningar med avstånd emellan delar lasten på två bitar gips, och saken slipper dessutom hänga snett två veckor senare.';

const GOR_INTE_TOMVIKT =
  'Räkna inte på skåpets tomvikt. Ett överskåp med porslin i landar snabbt på det dubbla, och det är den fyllda vikten som hänger i infästningen.';

export function raknaGipsplugg(i: GipspluggIndata): GipspluggResultat {
  const fel: Partial<Record<keyof GipspluggIndata, string>> = {};
  const [viktMin, viktMax] = GRANSER.viktKg;
  const [punktMin, punktMax] = GRANSER.punkter;

  if (!Number.isFinite(i.viktKg) || i.viktKg < viktMin || i.viktKg > viktMax) {
    fel.viktKg = `Skriv vikten som ett tal mellan ${String(viktMin).replace('.', ',')} och ${viktMax} kilo`;
  }
  if (!Number.isFinite(i.punkter) || !Number.isInteger(i.punkter) || i.punkter < punktMin || i.punkter > punktMax) {
    fel.punkter = `Skriv antalet infästningspunkter som ett helt tal mellan ${punktMin} och ${punktMax}`;
  }
  if (Object.keys(fel).length > 0) return { status: 'ogiltig', fel };

  const barande = barandePunkter(i.sak, i.punkter);
  const last = lastPerPunkt(i);
  const infastningar = infastningarFor(i, last);
  const ingenKlarar = !infastningar.some((r) => r.klarar);

  /* Sajtens fastställda regel, docs/INNEHALLSARKITEKTUR.md avsnitt 2. */
  let kraverRegelSkal = '';
  if (i.sak === 'tv-svangarm') {
    kraverRegelSkal = 'Lasten sitter på en arm, och då gäller regel eller kortling oavsett vad tv:n väger.';
  } else if (i.sak === 'skap') {
    kraverRegelSkal = 'Lasten skiftar varje gång någon öppnar luckan, och då gäller regel eller kortling oavsett vikt.';
  } else if (i.viktKg > GRANS_REGEL_KG) {
    kraverRegelSkal = `Saken väger mer än ${kg(GRANS_REGEL_KG)}, och där går min gräns för vad som får hänga i skivan.`;
  }
  /* I tak gäller Norgips tak på 20 kg per fästpunkt, men lasten per punkt är
     aldrig större än hela vikten, och vikten över 20 kg fångas redan ovan. Taket
     ligger därför i kapacitet() och behöver ingen egen gren här. */
  const kraverRegel = kraverRegelSkal !== '';

  let svar: Svar;
  let svarText: string;
  if (kraverRegel) {
    if (i.regel === 'nej') {
      svar = 'kortling';
      svarText = `${kraverRegelSkal} Du har ingen regel bakom, så såga upp gipset mellan två reglar och skruva in en kortling. Det är en kort träbit eller en bit 12 mm plywood. Sätt tillbaka gipsbiten och spackla.`;
    } else if (i.regel === 'ja') {
      svar = 'regel';
      svarText = `${kraverRegelSkal} Du har en regel bakom, så skruva i den med träskruv. Gipsskruven som ibland ligger i fästets påse håller en skiva mot en regel, och ingenting annat.`;
    } else {
      svar = 'regel';
      svarText = `${kraverRegelSkal} Leta rätt på regeln först, med knackning, magnet eller regelsökare. Hittar du ingen där saken ska sitta öppnar du väggen och sätter en kortling.`;
    }
  } else if (i.sak === 'tavla' && last <= XKROK_KG) {
    svar = 'krok';
    svarText = `Lasten per punkt ligger under ${kg(XKROK_KG)}, och det är vad en X-krok med spik bär i gipsvägg. En klisterremsa tar ${kg(7)} på en slätmålad vägg och lämnar inget hål alls. Vill du ändå borra går det förstås bra.`;
  } else if (i.regel === 'ja') {
    svar = 'regel';
    svarText =
      'Det finns en regel bakom, och den bästa pluggen i en gipsvägg är ingen plugg. En träskruv i regeln bär mer än varje rad i tabellen här under, och den kostar ingenting extra. Pluggarna i tabellen är reserven om du bommar regeln.';
  } else if (ingenKlarar) {
    svar = 'kortling';
    svarText = `Ingen infästning i ${SKIVA_TEXT[i.skiva]} är märkt för ${kg(last)} per punkt. Fördela lasten på fler punkter, eller såga upp gipset och sätt en kortling mellan två reglar.`;
  } else {
    svar = 'plugg';
    const forsta = infastningar.find((r) => r.klarar);
    svarText = `Lasten per punkt är ${kg(last)}, och den enklaste infästningen som är märkt för det i ${SKIVA_TEXT[i.skiva]} är ${forsta ? forsta.namn.toLowerCase() : 'raden överst i tabellen'}. Sitter det en regel bakom är den ändå bättre än varje plugg.`;
  }

  const gorInteDetHar: string[] = [];
  if (i.sak === 'tv-svangarm') gorInteDetHar.push(GOR_INTE_SVANGARM);
  if (i.sak === 'tak') gorInteDetHar.push(GOR_INTE_XKROK_TAK);
  if (i.sak === 'skap') gorInteDetHar.push(GOR_INTE_TOMVIKT);
  if (i.punkter >= 2) gorInteDetHar.push(GOR_INTE_TATT);
  if (i.punkter === 1 && i.viktKg > XKROK_KG) gorInteDetHar.push(GOR_INTE_EN_PUNKT);

  return {
    status: 'ok',
    svar,
    svarRubrik: SVAR_RUBRIK[svar],
    svarOrd: SVAR_DELAR[svar].ord,
    svarRest: SVAR_DELAR[svar].rest,
    svarText,
    lastPerPunktKg: last,
    barandePunkter: barande,
    lastText: lastText(i, barande),
    infastningar,
    ingenKlarar,
    utelamnade: utelamnadeText(i.sak, i.skiva),
    kraverRegel,
    kraverRegelSkal,
    gorInteDetHar,
  };
}

function arSak(v: string | null): v is Sak {
  return SAK_VAL.some((s) => s.varde === v);
}

function arSkiva(v: string | null): v is Skiva {
  return SKIVA_VAL.some((s) => s.varde === v);
}

function arRegel(v: string | null): v is RegelBakom {
  return REGEL_VAL.some((s) => s.varde === v);
}

/**
 * Läser adressen. Skräp i ett val faller tillbaka på standardvärdet, skräp i
 * ett tal blir NaN och ger ett fel på just det fältet.
 */
export function tolkaQuery(q: URLSearchParams): { indata: GipspluggIndata; harIndata: boolean } {
  const harIndata = q.has('vikt') || q.has('sak') || q.has('skiva') || q.has('punkter') || q.has('regel');
  const raSak = q.get('sak');
  const raSkiva = q.get('skiva');
  const raRegel = q.get('regel');

  return {
    harIndata,
    indata: {
      viktKg: q.has('vikt') ? tillTal(q.get('vikt')) : STANDARD.viktKg,
      sak: arSak(raSak) ? raSak : STANDARD.sak,
      skiva: arSkiva(raSkiva) ? raSkiva : STANDARD.skiva,
      punkter: q.has('punkter') ? tillTal(q.get('punkter')) : STANDARD.punkter,
      regel: arRegel(raRegel) ? raRegel : STANDARD.regel,
    },
  };
}
