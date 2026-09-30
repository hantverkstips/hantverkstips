/**
 * Daggpunktskalkylatorn. Ren funktion utan importer från Astro, testbar utan bygge.
 * Sidan /rakna/daggpunkt/ skickar formuläret som GET och räknar på servern,
 * så ingen rad av den här filen når klienten.
 *
 * Kalkylatorn svarar på tre frågor i samma räkning: vid vilken temperatur luften
 * i rummet börjar fälla ut vatten (daggpunkten), hur fuktig luften blir just intill
 * den kallaste ytan, och vad som faktiskt hjälper mot det. Rådet beror på årstiden
 * och på vilket utrymme det gäller, eftersom uteluften är torr i januari och fuktig
 * i augusti. Därför säger kalkylatorn också när en åtgärd är fel.
 *
 * Magnus-formeln och 75 procent som högsta tillåtna fukttillstånd är samma tal som
 * kunskapsartikeln /fukt/luftfuktighet-inomhus/ redan räknar med.
 *
 * Konstanterna nedan står också i src/lib/kalkyl/avfuktare.ts. De ligger i båda
 * filerna med flit: varje kalkylator ska gå att läsa, testa och granska utan att
 * följa en import till en annan formel.
 *
 * Testas av scripts/test-kalkyl-daggpunkt.mjs mot daggpunktstabellerna i
 * /fukt/luftfuktighet-inomhus/.
 */

export type Arstid = 'vinter' | 'sommar';
export type Rum = 'bostad' | 'sovrum' | 'fonster' | 'kallare' | 'krypgrund' | 'vind' | 'garage';
export type Bedomning = 'kondens' | 'mogelrisk' | 'ingen_risk';
export type Atgard =
  | 'vadra'
  | 'sank_fuktproduktion'
  | 'varm_eller_isolera_ytan'
  | 'avfuktare'
  | 'tata_bjalklaget'
  | 'ventilera_vinden';

export interface DaggpunktIndata {
  /** Lufttemperatur i rummet, grader Celsius. */
  luftTempC: number;
  /** Relativ luftfuktighet i rummet, procent. Talet hygrometern visar. */
  rfProcent: number;
  /** Den kallaste ytans temperatur, grader Celsius. */
  ytTempC: number;
  arstid: Arstid;
  rum: Rum;
  /** Fönstrets U-värde, W/m²K. Används bara när rum är 'fonster'. */
  uVarde?: number;
  /** Temperaturen ute, grader Celsius. Används bara när rum är 'fonster'. */
  uteTempC?: number;
}

/** Varifrån rummets normala luftfuktighet kommer. Texten per källa står i TEXT.normaltKalla. */
export type NormalKalla = 'traguiden' | 'astma-allergi' | 'fohm' | 'villaagarna' | 'olsson-sp' | 'sbi' | 'lth-vind';

export interface Normalt {
  /** Lägsta normala luftfuktighet, procent, eller null när källan bara ger ett högsta tal. */
  lagst: number | null;
  /** Högsta normala luftfuktighet, procent. */
  hogst: number;
  kalla: NormalKalla;
}

export type DaggpunktResultat =
  | {
      status: 'ok';
      /** Daggpunkten i grader Celsius. */
      daggpunktC: number;
      /** Formelns osäkerhet i grader, ur källan. */
      osakerhetC: number;
      /** Vattnet i luften, gram per kubikmeter. */
      anghaltGPerM3: number;
      /** Relativ luftfuktighet i luftskiktet närmast den kalla ytan, procent. */
      rfVidYtanProcent: number;
      /** Ytans temperatur minus daggpunkten. Negativt betyder kondens. */
      marginalC: number;
      bedomning: Bedomning;
      /** Luftfuktighet i rummet som ger 75 procent vid ytan, procent, avrundad nedåt. */
      rfForGransenProcent: number;
      /** Yttemperatur som ger 75 procent vid ytan med dagens luftfuktighet, avrundad uppåt. */
      ytTempForGransenC: number;
      /** Sant när kravet på luftfuktigheten är så lågt att det inte går att vädra sig till. */
      ytanMasteBliVarmare: boolean;
      /** Åtgärder i den ordning de ska göras. Tom vid ingen risk. */
      atgarder: Atgard[];
      /** Sidan visar avfuktarkalkylatorn när den här är sann. */
      visaAvfuktare: boolean;
      /** Åtgärden som är fel i just det här läget, eller null. */
      gorInteDetHar: string | null;
      /** Ytan räkningen använde, grader. För fönstret glasets temperatur mitt på rutan. */
      ytTempC: number;
      /** Rummets normala luftfuktighet för årstiden, och var rummets tal ligger. */
      normalt: Normalt & { lage: 'under' | 'inom' | 'over' };
    }
  | { status: 'ogiltig'; fel: Partial<Record<keyof DaggpunktIndata, string>> };

/*
 * Konstanter. Källa eller antagande i kommentaren över varje.
 */

/**
 * Magnus-formeln med Alduchov och Eskridges konstanter, a = 17,625 och b = 243,04.
 * Källa: Lawrence 2005, BAMS 86(2),
 * https://journals.ametsoc.org/view/journals/bams/86/2/bams-86-2-225.xml
 * Samma formel och samma konstanter som daggpunktstabellerna i
 * /fukt/luftfuktighet-inomhus/ är räknade med.
 */
const MAGNUS_A_HPA = 6.1094;
const MAGNUS_B = 17.625;
const MAGNUS_C = 243.04;

/** Osäkerheten i daggpunkten, grader. Källa: Lawrence 2005, samma artikel. */
export const OSAKERHET_C = 0.35;

/** Omräkning från ångtryck (hPa) till ånghalt (g/m³), ur samma härledning. */
const ANGHALT_KONSTANT = 216.68;

/**
 * Högsta tillåtna fukttillstånd, procent relativ luftfuktighet vid ytan.
 * Källa: Boverkets föreskrifter BFS 2024:8, 7 kap. 1 § andra stycket. 75 procent
 * gäller när materialets eget värde inte är väl undersökt.
 * https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/hygien-halsa-och-miljo/fuktsakerhet/
 */
export const KRITISKT_FUKTTILLSTAND_RF = 75;

/**
 * Under den här luftfuktigheten säger vi att ytan måste bli varmare i stället.
 * ANTAGANDE. Under 25 procent relativ luftfuktighet går det inte att hålla en
 * bostad vintertid utan att den blir obehagligt torr, och då är vädring fel spår.
 */
const LAGSTA_RIMLIGA_RF = 25;

/**
 * Glasets temperatur mitt på rutan: inne − RSI × U × (inne − ute).
 * Källa: SS-EN ISO 6946, värmeövergångsmotstånd för lodrät inneryta, 0,13 m²K/W
 * (docs/briefer/faktablad/kunskap-u-varde.md, tabellen över Rsi och Rse). Samma
 * formel och tal som tabellen på /fukt/kondens-pa-fonster/.
 */
export const RSI_M2K_PER_W = 0.13;

export const STANDARD: DaggpunktIndata & { uVarde: number; uteTempC: number } = {
  luftTempC: 20,
  rfProcent: 50,
  // Ytterväggen i ett äldre hus är typfallet, och det är den som blir våt först.
  ytTempC: 12,
  arstid: 'vinter',
  rum: 'bostad',
  /*
   * Används bara när rum är 'fonster'. Källa för U 3,0: tvåglas, Energimyndigheten
   * ET 2025:01 tabell 1 (2,8–3,0). Källa för −5: Folkhälsomyndighetens gräns för
   * omfattande kondens på fönstrets insida (fukt-gemensamma-tal.md T12).
   */
  uVarde: 3.0,
  uteTempC: -5,
};

/*
 * uVarde och uteTempC: ANTAGANDE, inmatningsgränser och inga påståenden. 6 täcker
 * ett enkelglas, −40 den kallaste natten i Norrland, 15 håller ute under inne i
 * hela det temperaturspann som är rimligt för frågan.
 */
export const GRANSER = {
  luftTempC: [0, 40],
  rfProcent: [5, 100],
  ytTempC: [-20, 40],
  uVarde: [0.5, 6],
  uteTempC: [-40, 15],
} as const;

export const ARSTIDER: { varde: Arstid; etikett: string }[] = [
  { varde: 'vinter', etikett: 'Vinterhalvåret, oktober till mars' },
  { varde: 'sommar', etikett: 'Sommarhalvåret, april till september' },
];

export const RUMSVAL: { varde: Rum; etikett: string }[] = [
  { varde: 'bostad', etikett: 'Ett uppvärmt rum i bostaden' },
  { varde: 'sovrum', etikett: 'Sovrum' },
  { varde: 'fonster', etikett: 'Fönstret i ett uppvärmt rum' },
  { varde: 'kallare', etikett: 'Källare' },
  { varde: 'krypgrund', etikett: 'Krypgrund' },
  { varde: 'vind', etikett: 'Kallvind' },
  { varde: 'garage', etikett: 'Garage, förråd eller uthus' },
];

/** Ett rums förval: talen formuläret och räkningen får när adressen bara säger rummet. */
export interface Forval {
  luftTempC: number;
  rfProcent: number;
  /** Saknas för fönstret, där ytan räknas fram ur uVarde och uteTempC. */
  ytTempC?: number;
  uVarde?: number;
  uteTempC?: number;
  arstid: Arstid;
}

/*
 * Förvalen per rum (docs/briefer/spec-daggpunkt-rum-2026-09-30.md avsnitt 1).
 * Ett nytt rum är en rad här, en i NORMALT_PER_RUM, en i RUMSVAL och en i
 * TEXT.rumKort, plus namnet i typen Rum.
 */
export const FORVAL_PER_RUM: Partial<Record<Rum, Forval>> = {
  /*
   * Källa för 21 °C och 45 %: Folkhälsomyndigheten FoHMFS 2014:14, "cirka 45 %
   * relativ luftfuktighet vid 21° C" (fukt-gemensamma-tal.md T10); sovrum under
   * 45 % vintertid, Astma- och Allergiförbundet (T13).
   * ANTAGANDE för ytan 12: TYPISKA_YTOR, ytterväggen i ett äldre hus 12 till 15,
   * nedre änden.
   */
  sovrum: { luftTempC: 21, rfProcent: 45, ytTempC: 12, arstid: 'vinter' },
  /*
   * Källa för 21 och 45: som sovrummet. Källa för U 3,0: tvåglas, Energimyndigheten
   * ET 2025:01 tabell 1 (2,8–3,0), samma rad som tabellen på /fukt/kondens-pa-fonster/.
   * Källa för ute −5: Folkhälsomyndighetens gräns för omfattande kondens på
   * fönstrets insida (T12). Glaset räknas med glasTemperatur och blir 10,9 grader
   * (faktablad/guider-kondens-pa-fonster.md avsnitt 3).
   */
  fonster: { luftTempC: 21, rfProcent: 45, uVarde: 3.0, uteTempC: -5, arstid: 'vinter' },
  /*
   * Källa för 20 °C och 70 %: sommarluft, SMHI 70–80 % i juli (kommentaren över
   * UTELUFT_ANGHALT_G_PER_M3 i avfuktare.ts); 20/70 med vägg 12 är exemplet på
   * /fukt/fukt-i-kallaren/ och /fukt/luftfuktighet-inomhus/ (fukt-gemensamma-tal.md
   * 3.2, daggpunkt 14,4).
   * ANTAGANDE för ytan 12: TYPISKA_YTOR, källarväggen 8 till 12, övre änden, och
   * faktablad/rakna-kallare.md rad 12.
   */
  kallare: { luftTempC: 20, rfProcent: 70, ytTempC: 12, arstid: 'sommar' },
  /*
   * Källa för 20/70: som källaren.
   * ANTAGANDE för ytan 10: "jag räknar med tio grader där nere" på
   * /fukt/avfuktare-krypgrund/; Fuktcentrums medeltemperatur i krypgrunden
   * 8,9–9,8 °C (faktablad/guider-fukt-i-krypgrund.md 3.3).
   */
  krypgrund: { luftTempC: 20, rfProcent: 70, ytTempC: 10, arstid: 'sommar' },
  /*
   * Källa för 2 °C och 83 %: SP, Samuelson och Hägerhed Engman, Bygg & teknik 4/06,
   * tabell 2, uteluft 0 °C och 95 % ger 83 % i en vind två grader varmare; LTH,
   * Harderup och Arfvidsson, Bygg & teknik 4/07, vinden 0,5–2 grader varmare än ute
   * (fukt-gemensamma-tal.md K3, K5, K8).
   * ANTAGANDE för ytan 0: råspontens undersida antas hålla uteluftens temperatur.
   * Klara nätter blir den kallare, men inget läst underlag ger ett tal (K15).
   */
  vind: { luftTempC: 2, rfProcent: 83, ytTempC: 0, arstid: 'vinter' },
  /*
   * Källa för 20/70: som källaren.
   * ANTAGANDE för ytan 10: ouppvärmt garage räknas på 10 grader i /rakna/avfuktare/
   * och på /fukt/avfuktare-garage/ (faktablad/guider-avfuktare-garage.md rad 44).
   */
  garage: { luftTempC: 20, rfProcent: 70, ytTempC: 10, arstid: 'sommar' },
};

/** Rummen med förval, i den ordning länkraden ovanför formuläret visar dem. */
export const RUM_MED_FORVAL: Exclude<Rum, 'bostad'>[] = ['sovrum', 'fonster', 'kallare', 'krypgrund', 'vind', 'garage'];

/** Rummen som får rådet för kalla utrymmen i steg 5 (spec avsnitt 1, "råd som"). */
const KALLA_RUM: readonly Rum[] = ['kallare', 'krypgrund', 'vind', 'garage'];

/*
 * Rummets normala luftfuktighet per årstid (spec avsnitt 3).
 */
export const NORMALT_PER_RUM: Record<Rum, Record<Arstid, Normalt>> = {
  // Källa: TräGuiden, Trä och fukt, 10–25 % vinter och 45–60 % sommar i uppvärmda rum (fukt-gemensamma-tal.md T7, T8).
  bostad: {
    vinter: { lagst: 10, hogst: 25, kalla: 'traguiden' },
    sommar: { lagst: 45, hogst: 60, kalla: 'traguiden' },
  },
  // Källa: vinter Astma- och Allergiförbundet, sovrum under 45 % (T13); sommar TräGuiden (T7).
  sovrum: {
    vinter: { lagst: null, hogst: 45, kalla: 'astma-allergi' },
    sommar: { lagst: 45, hogst: 60, kalla: 'traguiden' },
  },
  // Källa: vinter Folkhälsomyndigheten FoHMFS 2014:14, 45 % vid 21 °C (T10); sommar TräGuiden (T7).
  fonster: {
    vinter: { lagst: null, hogst: 45, kalla: 'fohm' },
    sommar: { lagst: 45, hogst: 60, kalla: 'traguiden' },
  },
  // Källa: Villaägarna, "under 75 % i medel" (fukt-gemensamma-tal.md 2.3, med förbehållet i 1.3).
  kallare: {
    vinter: { lagst: null, hogst: 75, kalla: 'villaagarna' },
    sommar: { lagst: null, hogst: 75, kalla: 'villaagarna' },
  },
  // Källa: Lars Olsson, SP, Bygg & teknik 8/06, "sänka RF till säkra nivåer (cirka 75 procent)" (faktablad/guider-fukt-i-krypgrund.md 1.3).
  krypgrund: {
    vinter: { lagst: null, hogst: 75, kalla: 'olsson-sp' },
    sommar: { lagst: null, hogst: 75, kalla: 'olsson-sp' },
  },
  // Källa: Harderup och Arfvidsson, LTH, Bygg & teknik 4/07, kall vind: månadsmedel 79–88 % oktober–februari, "mars–september alltid under 75 %" (fukt-gemensamma-tal.md K8).
  vind: {
    vinter: { lagst: 79, hogst: 88, kalla: 'lth-vind' },
    sommar: { lagst: null, hogst: 75, kalla: 'lth-vind' },
  },
  // Källa: Stålbyggnadsinstitutet, ingen korrosion under 60 % (T41).
  garage: {
    vinter: { lagst: null, hogst: 60, kalla: 'sbi' },
    sommar: { lagst: null, hogst: 60, kalla: 'sbi' },
  },
};

/**
 * U-värden till hjälptexten under fönstrets U-värde, W/m²K.
 * Källa: Energimyndigheten, Fönster, ET 2025:01, tabell 1.
 */
export const TYPISKA_U: { typ: string; spann: [number, number] }[] = [
  { typ: 'Tvåglas', spann: [2.8, 3.0] },
  { typ: 'Treglas', spann: [1.4, 1.8] },
  { typ: 'Energifönster', spann: [0.6, 0.9] },
];

/**
 * Texterna förvalen per rum lägger till. Hantverkarens
 * (docs/briefer/texter-daggpunkt-rum-2026-09-30.md, M2, M4 och M5).
 */
export const TEXT: {
  rumKort: Record<Exclude<Rum, 'bostad'>, string>;
  fel: { uVarde: (min: number, max: number) => string; uteTempC: (min: number, max: number) => string };
  normaltKalla: Record<NormalKalla, string>;
} = {
  rumKort: {
    sovrum: 'Sovrum',
    fonster: 'Fönster',
    kallare: 'Källare',
    krypgrund: 'Krypgrund',
    vind: 'Kallvind',
    garage: 'Garage',
  },
  fel: {
    uVarde: (min, max) =>
      `Skriv ett U-värde mellan ${String(min).replace('.', ',')} och ${String(max).replace('.', ',')}`,
    uteTempC: (min, max) => `Skriv en temperatur ute mellan ${grader(min)} och ${grader(max)} grader`,
  },
  normaltKalla: {
    traguiden:
      'Svenskt Träs handbok TräGuiden anger 45 till 60 procent på sommaren och 10 till 25 procent på vintern i uppvärmda rum.',
    'astma-allergi':
      'Astma- och Allergiförbundet råder den som är allergisk mot kvalster att gärna hålla luftfuktigheten under 45 procent vintertid.',
    fohm: 'Folkhälsomyndigheten skriver i FoHMFS 2014:14 att en bostad bör utredas om luftfuktigheten i genomsnitt under eldningssäsongen ligger över cirka 45 procent vid 21 grader.',
    villaagarna:
      'Villaägarna anger att luftfuktigheten i en källare bör ligga under 75 procent i genomsnitt. Samma tal är Boverkets högsta tillåtna fukttillstånd för material vars egen gräns inte är undersökt.',
    'olsson-sp':
      'Lars Olsson på SP skriver i Bygg & teknik 8/06 att luftfuktigheten i en krypgrund ska ner till säkra nivåer, cirka 75 procent, och att mögel börjar växa vid 75 till 80 procent.',
    sbi: 'Stålbyggnadsinstitutet skriver att det i luft praktiskt taget inte sker någon korrosion under 60 procents relativ luftfuktighet.',
    'lth-vind':
      'Harderup och Arfvidsson vid LTH mätte i en kall vind i Stockholm och fick månadsmedel på 79 till 88 procent från oktober till februari och under 75 procent från mars till september.',
  },
};

/**
 * Typiska yttemperaturer, som hjälp till den som inte mätt.
 * ANTAGANDE, inga mätningar i äldre hus, inte en publicerad tabell.
 * Mät med en IR-termometer om du vill ha ditt eget tal.
 */
export const TYPISKA_YTOR: { yta: string; spann: string }[] = [
  { yta: 'Ytterväggen i ett äldre hus', spann: '12 till 15 grader' },
  { yta: 'Fönsterglaset i januari', spann: '5 till 10 grader' },
  { yta: 'Källarväggen', spann: '8 till 12 grader' },
];

/** Åtgärderna i klartext. Sidan skriver ut dem i den ordning resultatet ger. */
export const ATGARDSTEXT: Record<Atgard, string> = {
  vadra:
    'Vädra kort och med genomdrag, ett par gånger om dagen. Vinterluft bär nästan inget vatten, så när den har värmts upp inne är den torrare än luften du släppte ut.',
  sank_fuktproduktion:
    'Skapa mindre fukt inne. Lägg lock på grytorna, låt fläkten gå under duschen och en stund efteråt, och torka tvätten någon annanstans än i sovrummet.',
  varm_eller_isolera_ytan:
    'Gör ytan varmare, med värme eller isolering. Ju närmare rummets temperatur väggen ligger, desto längre är den från daggpunkten. Att dra ut garderoben några centimeter från ytterväggen kostar ingenting och hjälper.',
  avfuktare:
    'Sätt in en avfuktare. I ett kallt utrymme på sommaren är det det enda som faktiskt tar bort vatten ur luften, eftersom uteluften bär mer vatten än luften inne.',
  // Spec avsnitt 15, textlistan V7. Källa: GT 13.2 (K1, Samuelson 2006).
  tata_bjalklaget:
    'Täta vindsluckan och alla ställen där rör, kablar och ventilationskanaler går upp genom bjälklaget. Luften inifrån huset bär mer vatten än vindsluften, och när den tar sig upp genom glipor kondenserar den på den kalla råsponten.',
  // Spec avsnitt 15, textlistan V8. Källa: GT 13.2 (K4, K8, K11, K12).
  // Hantverkarens (docs/briefer/texter-daggpunkt-rum-2026-09-30.md, V8b): samma råd som /fukt/avfuktare-vind/ om takfoten och gavelventilerna.
  ventilera_vinden:
    'Håll ventilerna i gavlarna fria, så att vinden aldrig blir helt utan ventilation. På en vanlig vind är takfoten också öppen, och så ska det vara så länge vinden klarar sig utan maskin. Sätter du in en avfuktare tätar du takfoten så som tillverkaren av maskinen beskriver, men gavelventilerna lämnar du öppna.',
};

const GOR_INTE_VINTER_BOSTAD =
  'Ett sovrum som immar i januari behöver ingen maskin. Uteluften är torr den här tiden på året, så ett fönster på vid gavel i fem minuter gör samma jobb gratis. Den som köper en avfuktare till ett sovrum i januari har betalat för att slippa öppna fönstret.';

const GOR_INTE_SOMMAR_KALLT =
  'Varje gång du öppnar källarfönstret eller garageporten en fuktig sommardag släpper du in luft på 20 grader, och den bär mer vatten än den kalla luften därinne. Vattnet fälls ut på väggar och golv så fort luften svalnar. Vädra inte förrän det är kallare ute än inne. I en krypgrund kommer samma luft in genom ventilerna hela sommaren, och därför behövs avfuktaren där.';

const GOR_INTE_VINTER_KALLT =
  'I ett kallt utrymme på vintern lägger en kondensavfuktare mer tid på att avfrosta sig själv än på att avfukta. Där är en sorptionsavfuktare rätt maskin, så spara pengarna tills du står med rätt sort i handen.';

/** Spec avsnitt 15, textlistan V9. Källa: GT avsnitt 5 (kondensavfuktaren under 10 grader). */
export const GOR_INTE_VINTER_VIND =
  'En kondensavfuktare gör knappt någon nytta på vinden på vintern. Under tio grader är den fel maskin, och på en kallvind är det nästan lika kallt som ute. Ingen avfuktare av något slag ersätter heller en tät vindslucka, eftersom den fuktiga luften fortsätter att komma underifrån.';

/**
 * Mättnadsångtryck i hPa vid temperaturen, Magnus-formeln.
 * Ger 23,3 hPa vid 20 °C och 14,0 vid 12 °C.
 */
export function mattnadsangtryck(tempC: number): number {
  return MAGNUS_A_HPA * Math.exp((MAGNUS_B * tempC) / (MAGNUS_C + tempC));
}

/** Temperaturen där mättnadsångtrycket är det angivna. Magnus-formeln baklänges. */
export function temperaturForAngtryck(hPa: number): number {
  const l = Math.log(hPa / MAGNUS_A_HPA);
  return (MAGNUS_C * l) / (MAGNUS_B - l);
}

/**
 * Mättnadsånghalt i g/m³ vid temperaturen.
 * Ger 17,25 vid 20 °C och 10,64 vid 12 °C, samma tal som tabellen i
 * /fukt/luftfuktighet-inomhus/ avrundar till 17,3 och 10,6.
 */
export function mattnadsanghalt(tempC: number): number {
  return (ANGHALT_KONSTANT * mattnadsangtryck(tempC)) / (tempC + 273.15);
}

/**
 * Daggpunkten i grader vid temperatur och relativ luftfuktighet.
 * Ger 11,1 vid 22 °C och 50 %, och 14,4 vid 20 °C och 70 %, som tabellerna i
 * kunskapsartikeln.
 */
export function daggpunkt(tempC: number, rfProcent: number): number {
  const alfa = Math.log(rfProcent / 100) + (MAGNUS_B * tempC) / (MAGNUS_C + tempC);
  return (MAGNUS_C * alfa) / (MAGNUS_B - alfa);
}

/*
 * Daggpunktstabellen under räknaren (docs/briefer/spec-daggpunkt-tabell-2026-09-30.md).
 * Raderna och kolumnerna är sajtens exempel och ingen källa behövs, eftersom de är
 * indata: 12 och 15 är källarraderna på /fukt/luftfuktighet-inomhus/, 18 källarluften
 * i augusti på räknarsidan, 20 till 22 bostadens rader. Cellerna räknas med daggpunkt().
 */
export const TABELL_TEMP = [12, 15, 18, 20, 21, 22] as const;
export const TABELL_RF = [30, 40, 50, 60, 70, 80] as const;

/** Daggpunkten per rad och kolumn i TABELL_TEMP och TABELL_RF, avrundad till en decimal. */
export function daggpunktTabell(): { tempC: number; celler: { rf: number; daggpunktC: number }[] }[] {
  return TABELL_TEMP.map((tempC) => ({
    tempC,
    celler: TABELL_RF.map((rf) => ({ rf, daggpunktC: Math.round(daggpunkt(tempC, rf) * 10) / 10 })),
  }));
}

function arArstid(v: string | null): v is Arstid {
  return v === 'vinter' || v === 'sommar';
}

function arRum(v: string | null): v is Rum {
  return RUMSVAL.some((r) => r.varde === v);
}

/**
 * Glasets temperatur mitt på rutan i jämvikt: inne − RSI × U × (inne − ute).
 * Ger 10,9 vid 21 inne, −5 ute och U 3,0, som tabellen på /fukt/kondens-pa-fonster/.
 */
export function glasTemperatur(inneC: number, uteC: number, uVarde: number): number {
  return inneC - RSI_M2K_PER_W * uVarde * (inneC - uteC);
}

/** Decimalkomma accepteras: '12,5' blir 12.5. Tomt eller skräp ger NaN. */
function tillTal(v: string | null): number {
  if (v === null) return NaN;
  const rensad = v.trim().replace(',', '.');
  if (rensad === '') return NaN;
  return Number(rensad);
}

/**
 * Rummet läses först. Varje fält blir talet i adressen om nyckeln finns, annars
 * rummets förval, annars STANDARD. Ett okänt rum ger STANDARD.rum och inget förval.
 */
export function tolkaQuery(q: URLSearchParams): { indata: DaggpunktIndata; harIndata: boolean } {
  const harIndata =
    q.has('temp') ||
    q.has('rf') ||
    q.has('ytatemp') ||
    q.has('arstid') ||
    q.has('rum') ||
    q.has('u') ||
    q.has('ute');

  const rumQ = q.get('rum');
  const rum = arRum(rumQ) ? rumQ : STANDARD.rum;
  const f = FORVAL_PER_RUM[rum];
  const arstid = q.get('arstid');
  const tal = (nyckel: string, forval: number | undefined, standard: number): number =>
    q.has(nyckel) ? tillTal(q.get(nyckel)) : (forval ?? standard);

  return {
    harIndata,
    indata: {
      luftTempC: tal('temp', f?.luftTempC, STANDARD.luftTempC),
      rfProcent: tal('rf', f?.rfProcent, STANDARD.rfProcent),
      ytTempC: tal('ytatemp', f?.ytTempC, STANDARD.ytTempC),
      arstid: arArstid(arstid) ? arstid : (f?.arstid ?? STANDARD.arstid),
      rum,
      uVarde: tal('u', f?.uVarde, STANDARD.uVarde),
      uteTempC: tal('ute', f?.uteTempC, STANDARD.uteTempC),
    },
  };
}

/** Fältens värden som de står i formuläret, med decimalkomma. */
export function formVarden(i: DaggpunktIndata): { temp: string; rf: string; ytatemp: string; u: string; ute: string } {
  const komma = (n: number): string => String(n).replace('.', ',');
  return {
    temp: komma(i.luftTempC),
    rf: komma(i.rfProcent),
    ytatemp: komma(i.ytTempC),
    u: komma(i.uVarde ?? STANDARD.uVarde),
    ute: komma(i.uteTempC ?? STANDARD.uteTempC),
  };
}

/** Nycklarna ett förval i <Kalkylator namn="daggpunkt" forval="..." /> får ha. */
export const FORVAL_NYCKLAR = ['temp', 'rf', 'ytatemp', 'arstid', 'rum', 'u', 'ute'] as const;

/**
 * Förvalet i en inbäddning, tolkat och prövat som adressen på verktygssidan.
 * Okänd nyckel, okänt rum, okänd årstid eller ett förval som inte går att räkna
 * ger fel, så att Kalkylator.astro kan stoppa bygget.
 */
export function forvalFranAdress(
  forval: string,
):
  | { status: 'ok'; indata: DaggpunktIndata; varden: ReturnType<typeof formVarden> }
  | { status: 'fel'; fel: string } {
  const q = new URLSearchParams(forval);
  const okanda = [...q.keys()].filter((k) => !(FORVAL_NYCKLAR as readonly string[]).includes(k));
  if (okanda.length > 0) return { status: 'fel', fel: `okänd nyckel ${okanda.join(', ')}` };
  if (q.has('rum') && !arRum(q.get('rum'))) return { status: 'fel', fel: `okänt rum ${q.get('rum')}` };
  if (q.has('arstid') && !arArstid(q.get('arstid'))) return { status: 'fel', fel: `okänd årstid ${q.get('arstid')}` };
  const { indata } = tolkaQuery(q);
  const r = raknaDaggpunkt(indata);
  if (r.status !== 'ok') return { status: 'fel', fel: Object.values(r.fel).join(' ') };
  return { status: 'ok', indata, varden: formVarden(indata) };
}

/** Grader skrivs med minustecknet som ord, som i löptexten på sajten. */
function grader(n: number): string {
  return n < 0 ? `minus ${Math.abs(n)}` : String(n);
}

export function raknaDaggpunkt(i: DaggpunktIndata): DaggpunktResultat {
  const fel: Partial<Record<keyof DaggpunktIndata, string>> = {};
  const [tempMin, tempMax] = GRANSER.luftTempC;
  const [rfMin, rfMax] = GRANSER.rfProcent;
  const [ytMin, ytMax] = GRANSER.ytTempC;

  if (!Number.isFinite(i.luftTempC) || i.luftTempC < tempMin || i.luftTempC > tempMax) {
    fel.luftTempC = `Skriv en lufttemperatur mellan ${tempMin} och ${tempMax} grader`;
  }
  if (!Number.isFinite(i.rfProcent) || i.rfProcent < rfMin || i.rfProcent > rfMax) {
    fel.rfProcent = `Skriv en luftfuktighet mellan ${rfMin} och ${rfMax} procent`;
  }
  // För fönstret är ytan glaset, räknat ur U-värdet och temperaturen ute; ytatemp används inte.
  let ytTempC = i.ytTempC;
  if (i.rum === 'fonster') {
    const [uMin, uMax] = GRANSER.uVarde;
    const [uteMin, uteMax] = GRANSER.uteTempC;
    const u = i.uVarde ?? STANDARD.uVarde;
    const ute = i.uteTempC ?? STANDARD.uteTempC;
    if (!Number.isFinite(u) || u < uMin || u > uMax) fel.uVarde = TEXT.fel.uVarde(uMin, uMax);
    if (!Number.isFinite(ute) || ute < uteMin || ute > uteMax) fel.uteTempC = TEXT.fel.uteTempC(uteMin, uteMax);
    ytTempC = glasTemperatur(i.luftTempC, ute, u);
  } else if (!Number.isFinite(i.ytTempC) || i.ytTempC < ytMin || i.ytTempC > ytMax) {
    fel.ytTempC = `Skriv en yttemperatur mellan ${grader(ytMin)} och ${ytMax} grader`;
  }
  if (Object.keys(fel).length > 0) return { status: 'ogiltig', fel };

  // Steg 1. Ångtrycket i rummet, och daggpunkten det ger.
  const esRum = mattnadsangtryck(i.luftTempC);
  const eRum = (i.rfProcent / 100) * esRum;
  const daggpunktC = daggpunkt(i.luftTempC, i.rfProcent);

  // Steg 2. Vattnet i luften, gram per kubikmeter.
  const anghaltGPerM3 = (i.rfProcent / 100) * mattnadsanghalt(i.luftTempC);

  /*
   * Steg 3. Luftfuktigheten i skiktet närmast den kalla ytan. Vattnet är samma,
   * det är taket som sjunker när luften kyls. Kvoten räknas på ångtryck och inte
   * på g/m³, så att 100 procent infaller exakt vid daggpunkten.
   */
  const esYta = mattnadsangtryck(ytTempC);
  const rfVidYtanProcent = Math.min(100, (eRum / esYta) * 100);
  const marginalC = ytTempC - daggpunktC;

  const bedomning: Bedomning =
    ytTempC <= daggpunktC
      ? 'kondens'
      : rfVidYtanProcent > KRITISKT_FUKTTILLSTAND_RF
        ? 'mogelrisk'
        : 'ingen_risk';

  /*
   * Steg 4. De två vägarna ner under 75 procent vid ytan: torrare luft i rummet,
   * eller varmare yta. Kravet på luftfuktigheten avrundas nedåt och kravet på
   * yttemperaturen uppåt, eftersom båda är gränser som ska klaras, inte träffas.
   */
  const rfForGransenProcent = Math.floor(((KRITISKT_FUKTTILLSTAND_RF / 100) * esYta * 100) / esRum);
  const ytTempForGransenC =
    Math.ceil(temperaturForAngtryck(eRum / (KRITISKT_FUKTTILLSTAND_RF / 100)) * 10) / 10;
  const ytanMasteBliVarmare = rfForGransenProcent < LAGSTA_RIMLIGA_RF;

  // Steg 5. Rådet. Årstiden avgör om uteluften är torrare eller fuktigare än inne,
  // rummet avgör om en avfuktare är rätt maskin, och en kall yta är fel i alla lägen.
  const kallt = KALLA_RUM.includes(i.rum);
  const atgarder: Atgard[] = [];
  let visaAvfuktare = false;
  let gorInteDetHar: string | null = null;

  if (bedomning !== 'ingen_risk' && i.rum === 'vind') {
    // Spec avsnitt 15: på vinden är det inneluft som läcker upp genom bjälklaget
    // (GT 13.2). Grenen går före KALLA_RUM och ger aldrig avfuktaren.
    atgarder.push('tata_bjalklaget', 'ventilera_vinden');
    gorInteDetHar = i.arstid === 'vinter' ? GOR_INTE_VINTER_VIND : null;
  } else if (bedomning !== 'ingen_risk') {
    if (i.arstid === 'vinter') {
      atgarder.push('vadra', 'sank_fuktproduktion');
      gorInteDetHar = kallt ? GOR_INTE_VINTER_KALLT : GOR_INTE_VINTER_BOSTAD;
    } else if (kallt) {
      atgarder.push('avfuktare');
      visaAvfuktare = true;
      gorInteDetHar = GOR_INTE_SOMMAR_KALLT;
    } else {
      atgarder.push('sank_fuktproduktion');
    }
    atgarder.push('varm_eller_isolera_ytan');
  }

  // Rummets normala luftfuktighet för årstiden, och var rummets tal ligger.
  const n = NORMALT_PER_RUM[i.rum][i.arstid];
  const lage: 'under' | 'inom' | 'over' =
    i.rfProcent > n.hogst ? 'over' : n.lagst !== null && i.rfProcent < n.lagst ? 'under' : 'inom';

  return {
    status: 'ok',
    daggpunktC,
    osakerhetC: OSAKERHET_C,
    anghaltGPerM3,
    rfVidYtanProcent,
    marginalC,
    bedomning,
    rfForGransenProcent,
    ytTempForGransenC,
    ytanMasteBliVarmare,
    atgarder,
    visaAvfuktare,
    gorInteDetHar,
    ytTempC,
    normalt: { ...n, lage },
  };
}
