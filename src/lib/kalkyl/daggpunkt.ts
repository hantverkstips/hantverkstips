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
 * Magnus-formeln och 75 procent som kritiskt fukttillstånd är samma tal som
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
export type Rum = 'bostad' | 'kallare' | 'garage';
export type Bedomning = 'kondens' | 'mogelrisk' | 'ingen_risk';
export type Atgard = 'vadra' | 'sank_fuktproduktion' | 'varm_eller_isolera_ytan' | 'avfuktare';

export interface DaggpunktIndata {
  /** Lufttemperatur i rummet, grader Celsius. */
  luftTempC: number;
  /** Relativ luftfuktighet i rummet, procent. Talet hygrometern visar. */
  rfProcent: number;
  /** Den kallaste ytans temperatur, grader Celsius. */
  ytTempC: number;
  arstid: Arstid;
  rum: Rum;
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
const OSAKERHET_C = 0.35;

/** Omräkning från ångtryck (hPa) till ånghalt (g/m³), ur samma härledning. */
const ANGHALT_KONSTANT = 216.68;

/**
 * Kritiskt fukttillstånd, procent relativ luftfuktighet vid ytan.
 * Källa: Boverket, BBR 6:52, högsta tillåtna fukttillstånd. 75 procent gäller när
 * materialets eget värde inte är väl undersökt.
 * https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/boverkets-byggregler/fuktsakerhet/hogsta-tillatna-fukttillstand/
 */
export const KRITISKT_FUKTTILLSTAND_RF = 75;

/**
 * Under den här luftfuktigheten säger vi att ytan måste bli varmare i stället.
 * ANTAGANDE. Under 25 procent relativ luftfuktighet går det inte att hålla en
 * bostad vintertid utan att den blir obehagligt torr, och då är vädring fel spår.
 */
const LAGSTA_RIMLIGA_RF = 25;

export const STANDARD: DaggpunktIndata = {
  luftTempC: 20,
  rfProcent: 50,
  // Ytterväggen i ett äldre hus är typfallet, och det är den som blir våt först.
  ytTempC: 12,
  arstid: 'vinter',
  rum: 'bostad',
};

export const GRANSER = { luftTempC: [0, 40], rfProcent: [5, 100], ytTempC: [-20, 40] } as const;

export const ARSTIDER: { varde: Arstid; etikett: string }[] = [
  { varde: 'vinter', etikett: 'Vinterhalvåret, oktober till mars' },
  { varde: 'sommar', etikett: 'Sommarhalvåret, april till september' },
];

export const RUMSVAL: { varde: Rum; etikett: string }[] = [
  { varde: 'bostad', etikett: 'Ett uppvärmt rum i bostaden' },
  { varde: 'kallare', etikett: 'Källare eller krypgrund' },
  { varde: 'garage', etikett: 'Garage, förråd eller uthus' },
];

/**
 * Typiska yttemperaturer, som hjälp till den som inte mätt.
 * VÅR ERFARENHET från fuktmätningar i äldre hus, inte en publicerad tabell.
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
};

const GOR_INTE_VINTER_BOSTAD =
  'Ett sovrum som immar i januari behöver ingen maskin. Uteluften är torr den här tiden på året, så ett fönster på vid gavel i fem minuter gör samma jobb gratis. Den som köper en avfuktare till ett sovrum i januari har betalat för att slippa öppna fönstret.';

const GOR_INTE_SOMMAR_KALLT =
  'Väggen blir blötare för varje fönster du öppnar en fuktig sommardag. Uteluft på 20 grader bär mer vatten än den kalla luften därinne, och det vattnet fälls ut på väggen så fort det kommer in. Vädra inte förrän det är kallare ute än inne.';

const GOR_INTE_VINTER_KALLT =
  'I ett kallt utrymme på vintern lägger en kondensavfuktare mer tid på att avfrosta sig själv än på att avfukta. Där är en sorptionsavfuktare rätt maskin, så spara pengarna tills du står med rätt sort i handen.';

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

function arArstid(v: string | null): v is Arstid {
  return v === 'vinter' || v === 'sommar';
}

function arRum(v: string | null): v is Rum {
  return v === 'bostad' || v === 'kallare' || v === 'garage';
}

/** Decimalkomma accepteras: '12,5' blir 12.5. Tomt eller skräp ger NaN. */
function tillTal(v: string | null): number {
  if (v === null) return NaN;
  const rensad = v.trim().replace(',', '.');
  if (rensad === '') return NaN;
  return Number(rensad);
}

export function tolkaQuery(q: URLSearchParams): { indata: DaggpunktIndata; harIndata: boolean } {
  const harIndata = q.has('temp') || q.has('rf') || q.has('ytatemp') || q.has('arstid') || q.has('rum');

  const temp = tillTal(q.get('temp'));
  const rf = tillTal(q.get('rf'));
  const ytatemp = tillTal(q.get('ytatemp'));
  const arstid = q.get('arstid');
  const rum = q.get('rum');

  return {
    harIndata,
    indata: {
      luftTempC: q.has('temp') ? temp : STANDARD.luftTempC,
      rfProcent: q.has('rf') ? rf : STANDARD.rfProcent,
      ytTempC: q.has('ytatemp') ? ytatemp : STANDARD.ytTempC,
      arstid: arArstid(arstid) ? arstid : STANDARD.arstid,
      rum: arRum(rum) ? rum : STANDARD.rum,
    },
  };
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
  if (!Number.isFinite(i.ytTempC) || i.ytTempC < ytMin || i.ytTempC > ytMax) {
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
  const esYta = mattnadsangtryck(i.ytTempC);
  const rfVidYtanProcent = Math.min(100, (eRum / esYta) * 100);
  const marginalC = i.ytTempC - daggpunktC;

  const bedomning: Bedomning =
    i.ytTempC <= daggpunktC
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
  const kallt = i.rum === 'kallare' || i.rum === 'garage';
  const atgarder: Atgard[] = [];
  let visaAvfuktare = false;
  let gorInteDetHar: string | null = null;

  if (bedomning !== 'ingen_risk') {
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
  };
}
