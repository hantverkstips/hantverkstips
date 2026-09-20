/**
 * Avfuktarkalkylatorn. Ren funktion utan importer från Astro, testbar utan bygge.
 * Sidan /rakna/avfuktare/ skickar formuläret som GET och räknar på servern,
 * så ingen rad av den här filen når klienten.
 *
 * Formeln kommer från docs/briefer/underlag-kalkyl-avfuktare.md. Den räknar
 * fuktbelastningen per dygn i värsta månaden (augusti) och delar sedan med en
 * omräkningsfaktor, så att talet går att jämföra med kapaciteten på lådan.
 * Varje konstant nedan är märkt med källa eller med ordet antagande.
 *
 * Testas av scripts/test-kalkyl-avfuktare.mjs mot de tre räkneexemplen i
 * underlagets avsnitt 5.
 */

export type Fuktniva = 'medel' | 'hog' | 'mycket_hog';
export type Temperaturval = 'over_15' | 'fem_till_15' | 'under_5';
export type Avfuktartyp = 'kondens' | 'sorption';

export interface AvfuktareIndata {
  ytaKvm: number;
  takhojdM: number;
  fuktniva: Fuktniva;
  temperatur: Temperaturval;
}

export type AvfuktareResultat =
  | {
      status: 'ok';
      volymM3: number;
      /** Dimensionerande temperatur i utrymmet, grader Celsius. */
      temperaturC: number;
      typ: Avfuktartyp;
      /** Vad maskinen faktiskt behöver ta upp per dygn vid temperaturC och 55 % RF. */
      literPerDygnVerklig: number;
      /** Talet att efterfråga, jämförbart med kapacitet_liter_dygn i databasen. */
      marktKapacitetLiter: number;
      /** Samma tal räknat med faktorns ytterlägen, lägst och högst. */
      marktIntervall: [number, number];
      /** Villkoret som den märkta kapaciteten är uppgiven vid. */
      kapacitetVillkor: string;
    }
  | { status: 'ogiltig'; fel: Partial<Record<keyof AvfuktareIndata, string>> }
  | { status: 'utanfor'; text: string };

/*
 * Konstanter. Källa eller antagande enligt underlagets avsnitt 6.
 */

/**
 * Magnus-formeln med Alduchov och Eskridges konstanter.
 * Källa: Lawrence 2005, BAMS 86(2),
 * https://journals.ametsoc.org/view/journals/bams/86/2/bams-86-2-225.xml
 */
const MAGNUS_A_HPA = 6.1094;
const MAGNUS_B = 17.625;
const MAGNUS_C = 243.04;
/** Omräkning från ångtryck (hPa) till ånghalt (g/m³), ur samma härledning. */
const ANGHALT_KONSTANT = 216.68;

/** Målnivå i utrymmet. Källa: BBR 6:52 via Boverket sätter 75 % RF som kritiskt fukttillstånd, 55 % ger marginal ner till det. */
const MAL_RF = 0.55;

/**
 * Luftomsättning i oms/h. ANTAGANDE. FoHMFS 2014:18 ger 0,35 l/s per m² golvyta
 * i bostad, vilket vid 2,5 m takhöjd är 0,5 oms/h. Att samma tal gäller i källare
 * och krypgrund är vårt eget antagande; stängda ventiler ger lägre, öppet fönster högre.
 */
const LUFTOMSATTNING_OMS_PER_H = 0.5;

/**
 * Uteluftens ånghalt sommartid i g/m³. Källa: SMHI anger 70 till 80 % RF i juli i
 * inlandet, vid 17 °C motsvarar det 10,1 till 11,6 g/m³; Byggutbildarna anger 7 till 10.
 * Vi räknar med 10,0, den försiktiga änden av SMHI:s spann.
 */
const UTELUFT_ANGHALT_G_PER_M3 = 10.0;

/**
 * Marginal på summan. ANTAGANDE. Betyder att maskinen ska klara augustibelastningen
 * på cirka 18 timmar per dygn, så att hygrostaten hinner stänga av. Luftmiljöbutiken
 * och LFS säger "hellre för stor än för liten" utan siffra. Christians mätning i höst
 * avgör om det ska vara 1,2 eller 1,5.
 */
const MARGINAL = 1.3;

/** Startnivå i utrymmet per fuktnivå, 0 till 1. ANTAGANDE, avläst RF översatt till ett steg. */
const RF_START: Record<Fuktniva, number> = { medel: 0.65, hog: 0.75, mycket_hog: 0.85 };

/**
 * Fukt från mark och material i gram per m² och dygn. Bara 100 vilar på källa:
 * Kurnitski, Building and Environment 36(3) 2001, mätte 86 till 137 g per m² och
 * dygn från bar mark. 10 och 40 är ANTAGANDE för en tät respektive kapillärt
 * fuktig betongplatta, utan svensk tabell över betongens ångmotstånd att luta sig mot.
 */
const MARKFUKT_G_PER_KVM_DYGN: Record<Fuktniva, number> = { medel: 10, hog: 40, mycket_hog: 100 };

interface Temperaturlage {
  varde: Temperaturval;
  etikett: string;
  /** Dimensionerande temperatur. ANTAGANDE: 15 för uppvärmt, 10 för ouppvärmt. */
  dimTempC: number;
  typ: Avfuktartyp;
  /**
   * Omräkning från märkt kapacitet till verklig vid dimTempC och 55 % RF.
   * Källa för mätpunkterna: Meacos blogg (10L, 20L, 30L, 40L, DD8L), Corroventa
   * CTR STD-TT och Wood's produktsidor via Proffsmagasinet. Mittvärdet räknar vi med,
   * ytterlägena blir intervallet vi visar.
   */
  faktor: number;
  faktorMin: number;
  faktorMax: number;
  /** Villkoret tillverkaren uppger den märkta kapaciteten vid. */
  kapacitetVillkor: string;
}

const TEMPERATURLAGEN: Temperaturlage[] = [
  {
    varde: 'over_15',
    etikett: 'Uppvärmt, över 15 grader',
    dimTempC: 15,
    typ: 'kondens',
    // 0,30 är interpolerat mellan mätpunkterna 0,38 vid 20 °C och 0,20 vid 10 °C. ANTAGANDE.
    faktor: 0.3,
    faktorMin: 0.25,
    faktorMax: 0.35,
    kapacitetVillkor: '30 °C och 80 % RF',
  },
  {
    varde: 'fem_till_15',
    etikett: 'Ouppvärmt, 5 till 15 grader',
    dimTempC: 10,
    typ: 'sorption',
    // Corroventa CTR STD-TT ger 0,76 och Meaco DD8L 0,99 vid 10 °C. Vi räknar med 0,80.
    faktor: 0.8,
    faktorMin: 0.75,
    faktorMax: 1.0,
    kapacitetVillkor: '20 °C och 60 % RF',
  },
  {
    varde: 'under_5',
    etikett: 'Kallt, under 5 grader',
    dimTempC: 5,
    typ: 'sorption',
    faktor: 0.65,
    faktorMin: 0.65,
    faktorMax: 0.65,
    kapacitetVillkor: '20 °C och 60 % RF',
  },
];

/** Under 5 grader räknar vi inte. Texten är produktexpertens, underlagets avsnitt 4. */
const UNDER_FEM_GRADER =
  'Under 5 grader tappar även en sorptionsmaskin farten, och en kondensmaskin står stilla. Läs guiden om krypgrunden innan du köper något.';

export const STANDARD: AvfuktareIndata = {
  ytaKvm: 40,
  takhojdM: 2.4,
  fuktniva: 'hog',
  // Källaren är typfallet, och den är sällan uppvärmd.
  temperatur: 'fem_till_15',
};

export const GRANSER = { ytaKvm: [5, 300], takhojdM: [0.5, 4] } as const;

export const FUKTNIVAER: { varde: Fuktniva; etikett: string }[] = [
  { varde: 'medel', etikett: '60 till 70 procent, det luktar lite unket' },
  { varde: 'hog', etikett: '70 till 80 procent, det finns fuktfläckar och det luktar' },
  { varde: 'mycket_hog', etikett: 'över 80 procent, det syns mögel' },
];

export const TEMPERATURVAL: { varde: Temperaturval; etikett: string }[] = TEMPERATURLAGEN.map((t) => ({
  varde: t.varde,
  etikett: t.etikett,
}));

export function fuktnivaEtikett(n: Fuktniva): string {
  return FUKTNIVAER.find((f) => f.varde === n)?.etikett ?? n;
}

export function temperaturEtikett(t: Temperaturval): string {
  return TEMPERATURLAGEN.find((v) => v.varde === t)?.etikett ?? t;
}

/**
 * Mättnadsånghalt i g/m³ vid temperaturen, Magnus-formeln.
 * Ger 9,38 vid 10 °C och 12,80 vid 15 °C, samma som tabellen i underlaget.
 */
export function mattnadsanghalt(tempC: number): number {
  const angtryckHpa = MAGNUS_A_HPA * Math.exp((MAGNUS_B * tempC) / (MAGNUS_C + tempC));
  return (ANGHALT_KONSTANT * angtryckHpa) / (tempC + 273.15);
}

function arFuktniva(v: string | null): v is Fuktniva {
  return v === 'medel' || v === 'hog' || v === 'mycket_hog';
}

function arTemperaturval(v: string | null): v is Temperaturval {
  return v === 'over_15' || v === 'fem_till_15' || v === 'under_5';
}

/** Decimalkomma accepteras: '2,4' blir 2.4. Tomt eller skräp ger NaN. */
function tillTal(v: string | null): number {
  if (v === null) return NaN;
  const rensad = v.trim().replace(',', '.');
  if (rensad === '') return NaN;
  return Number(rensad);
}

export function tolkaQuery(q: URLSearchParams): { indata: AvfuktareIndata; harIndata: boolean } {
  const harIndata = q.has('yta') || q.has('takhojd') || q.has('fukt') || q.has('temp') || q.has('uppvarmt');

  const yta = tillTal(q.get('yta'));
  const takhojd = tillTal(q.get('takhojd'));
  const fukt = q.get('fukt');
  const temp = q.get('temp');

  /**
   * Länkar som delades innan formuläret fick tre temperaturer bär `uppvarmt=1`.
   * De ska landa rätt, inte på standardvärdet.
   */
  function temperatur(): Temperaturval {
    if (arTemperaturval(temp)) return temp;
    if (q.has('uppvarmt')) return q.get('uppvarmt') === '1' ? 'over_15' : 'fem_till_15';
    return STANDARD.temperatur;
  }

  return {
    harIndata,
    indata: {
      ytaKvm: q.has('yta') ? yta : STANDARD.ytaKvm,
      takhojdM: q.has('takhojd') ? takhojd : STANDARD.takhojdM,
      fuktniva: arFuktniva(fukt) ? fukt : STANDARD.fuktniva,
      temperatur: temperatur(),
    },
  };
}

export function raknaAvfuktare(i: AvfuktareIndata): AvfuktareResultat {
  const fel: Partial<Record<keyof AvfuktareIndata, string>> = {};
  const [ytaMin, ytaMax] = GRANSER.ytaKvm;
  const [takMin, takMax] = GRANSER.takhojdM;

  if (Number.isFinite(i.ytaKvm) && i.ytaKvm > ytaMax) {
    return {
      status: 'utanfor',
      text: 'Över 300 kvm skulle jag sätta in två maskiner eller en fast installation. Läs guiden om krypgrunden först.',
    };
  }

  if (!Number.isFinite(i.ytaKvm) || i.ytaKvm < ytaMin) {
    fel.ytaKvm = `Skriv en golvyta mellan ${ytaMin} och ${ytaMax} kvm`;
  }
  if (!Number.isFinite(i.takhojdM) || i.takhojdM < takMin || i.takhojdM > takMax) {
    fel.takhojdM = `Skriv en takhöjd mellan ${String(takMin).replace('.', ',')} och ${takMax} meter`;
  }
  if (Object.keys(fel).length > 0) return { status: 'ogiltig', fel };

  if (i.temperatur === 'under_5') return { status: 'utanfor', text: UNDER_FEM_GRADER };

  const lage = TEMPERATURLAGEN.find((t) => t.varde === i.temperatur) ?? TEMPERATURLAGEN[1]!;

  // Steg 1 och 2. Mättnadsånghalt vid dimensionerande temperatur, och målet 55 % RF.
  const volymM3 = i.ytaKvm * i.takhojdM;
  const vsGPerM3 = mattnadsanghalt(lage.dimTempC);
  const vMalGPerM3 = MAL_RF * vsGPerM3;

  // Steg 3. Engångsuttaget ur luften i rummet, liter. Litet, men det ska tas en gång.
  const mLuft = (volymM3 * (RF_START[i.fuktniva] - MAL_RF) * vsGPerM3) / 1000;

  // Steg 4. Uteluft som ventileras in, liter per dygn. Torrare ute än inne ger noll.
  const gLuft = Math.max(
    0,
    (LUFTOMSATTNING_OMS_PER_H * volymM3 * 24 * (UTELUFT_ANGHALT_G_PER_M3 - vMalGPerM3)) / 1000,
  );

  // Steg 5. Fukt upp ur mark och material, liter per dygn.
  const gMark = (i.ytaKvm * MARKFUKT_G_PER_KVM_DYGN[i.fuktniva]) / 1000;

  // Steg 6. Verkligt behov med marginal, liter per dygn vid dimTempC och 55 % RF.
  const verkligtRa = (mLuft + gLuft + gMark) * MARGINAL;

  // Steg 7. Märkt kapacitet att efterfråga. Avrundas uppåt, det är ett minimikrav.
  const markt = (faktor: number): number => Math.max(1, Math.ceil(verkligtRa / faktor));

  return {
    status: 'ok',
    volymM3,
    temperaturC: lage.dimTempC,
    typ: lage.typ,
    literPerDygnVerklig: Math.max(1, Math.ceil(verkligtRa)),
    marktKapacitetLiter: markt(lage.faktor),
    marktIntervall: [markt(lage.faktorMax), markt(lage.faktorMin)],
    kapacitetVillkor: lage.kapacitetVillkor,
  };
}
