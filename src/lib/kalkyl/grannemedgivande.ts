/**
 * Grannemedgivande: krävs det, krävs det inte, eller blir det bygglov oavsett?
 * Ren modul utan importer från Astro, testbar utan bygge. Sidan
 * /rakna/grannemedgivande/ skickar formuläret som GET och svarar på servern, så
 * ingen rad av den här filen når klienten.
 *
 * Verktyget är en generator, inte en kalkylator. Del 1 är kontrollen med tre
 * utfall. Del 2 är ett medgivande att skriva ut, och det visas bara när
 * utfallet är "krävs". Adressen bär bara åtgärden, måtten, planen och vad som
 * ligger på andra sidan gränsen; personuppgifter skrivs för hand på
 * utskriften och går aldrig genom webbläsaren (specen beslut 1).
 *
 * Reglerna följer plan- och bygglagen (2010:900) i lydelse efter lag 2025:974,
 * 9 kap. 4, 5, 10, 19, 34, 35, 37, 38 och 52 §§ och 10 kap. 2 a §. Måtten som
 * delas med altanräknaren importeras från bygglov-altan.ts, så att samma lag
 * och samma tal står på ett ställe.
 *
 * Spec: docs/briefer/spec-kalkyl-grannemedgivande-2026-09-28.md.
 * Underlag: docs/briefer/underlag-kalkyl-grannemedgivande-2026-09-28.md.
 * Testas av scripts/test-kalkyl-grannemedgivande.mjs.
 *
 * Svaret är vägledning, inte ett myndighetsbeslut.
 */
import {
  GRANS_M, HOJD_NARA_BYGGNAD_M, HOJD_LANGRE_BORT_M, NARA_BYGGNAD_M,
  LOVFRI_TILLBYGGNAD_KVM, REGLERNA_GALLER_FRAN,
} from './bygglov-altan.ts';

export { GRANS_M, HOJD_NARA_BYGGNAD_M, HOJD_LANGRE_BORT_M, NARA_BYGGNAD_M, LOVFRI_TILLBYGGNAD_KVM, REGLERNA_GALLER_FRAN };

/* ------------------------------------------------------------------ *
 * Typer (specen 2.1)
 * ------------------------------------------------------------------ */

export type Atgard = 'komplement' | 'tillbyggnad' | 'altan' | 'plank' | 'staket' | 'ekonomi';
export type Plan = 'ja' | 'nej';
/** Vad som ligger på andra sidan den närmaste gränsen. */
export type Mot = 'tomt' | 'gata' | 'vag';
export type Utfall = 'kravs' | 'kravs-inte' | 'bygglov';
export type Mottagare = 'grannar' | 'huvudman' | 'jarnvag';

export interface GrannemedgivandeIndata {
  atgard: Atgard;
  plan: Plan;
  /** Avstånd till närmaste gräns, i meter. */
  gransM: number;
  mot: Mot;
  /** Järnvägsspår närmare än 30 m från åtgärden. */
  jarnvag: boolean;
  /** Huset eller området utpekat som särskilt värdefullt. */
  vardefullt: boolean;
  /* komplement */
  /** Byggnadsarea, m². */
  byaKvm: number;
  /** Taknockshöjd, m. */
  nockM: number;
  /** Andra lovfria komplementbyggnader på tomten, byggnadsarea, m². */
  ovrigaKvm: number;
  /* tillbyggnad */
  /** Bruttoarea eller öppenarea, m². */
  areaKvm: number;
  /** Andra lovfria tillbyggnader på huset, m². */
  ovrigaTbKvm: number;
  /* plank */
  plankHojdM: number;
  /** Planket till närmaste byggnad, m. */
  plankAvstandM: number;
  /* altan */
  golvM: number;
  /** Altanen till närmaste byggnad, m. */
  altanAvstandM: number;
}

export type RegelNyckel =
  | 'varde'
  | 'bya' | 'nock' | 'summa'
  | 'area'
  | 'hojd-19'
  | 'utanfor-plan-19'
  | 'ekonomi' | 'altan-inte-34' | 'staket-inte-34' | 'plank-lagt'
  | 'langt-fran-grans' | 'grans-tomt' | 'grans-gata' | 'grans-vag' | 'jarnvag'
  | 'skriftligt'
  | 'villkor-huvudbyggnad' | 'villkor-tomten' | 'villkor-taknock'
  | 'villkor-flera-granser' | 'villkor-planstrid' | 'villkor-tatt-plank';

/** Etiketten på raden: vad regeln gör med svaret. */
export type Slag = 'bygglov' | 'inom' | 'kravs' | 'kravs-inte' | 'villkor';

export interface Regel { nyckel: RegelNyckel; slag: Slag; lagrum: string }

export type GorInte = 'muntligt' | 'muntligt-myndighet' | 'tystnad' | 'bygga-annat' | 'lita-pa-pappret'
  | 'mata-fran-vaggen' | 'medgivande-mot-lov';

export type FelNyckel = 'atgard' | 'mot' | 'grans' | 'bya' | 'nock' | 'ovriga'
  | 'area' | 'ovrigatb' | 'plankhojd' | 'plankavstand' | 'golv' | 'altanavstand';

export type GrannemedgivandeResultat =
  | {
      status: 'ok';
      utfall: Utfall;
      /** Tom utom vid 'kravs'; ordning grannar, huvudman, jarnvag. */
      mottagare: Mottagare[];
      /** I den ordning de slog in, villkoren sist. */
      regler: Regel[];
      gorInteDetHar: GorInte[];
    }
  | { status: 'ogiltig'; fel: Partial<Record<FelNyckel, string>> };

export type GrannemedgivandeOk = Extract<GrannemedgivandeResultat, { status: 'ok' }>;

/* ------------------------------------------------------------------ *
 * Konstanter (specen 2.2). GRANS_M, HOJD_NARA_BYGGNAD_M,
 * HOJD_LANGRE_BORT_M, NARA_BYGGNAD_M, LOVFRI_TILLBYGGNAD_KVM och
 * REGLERNA_GALLER_FRAN är importerade ur bygglov-altan.ts med sina lagrum där.
 * ------------------------------------------------------------------ */

/**
 * Avståndet från järnvägsspårets mitt inom vilket lovplikten nära gräns också
 * gäller. Används bara i etiketten och antagandetabellen; fältet är en
 * kryssruta. Källa: plan- och bygglagen 9 kap. 34 §, lagen.nu/2010:900, läst
 * 2026-09-28.
 */
export const JARNVAG_M = 30.0;

/**
 * Mur eller plank högre än 1,2 m över marken står i 34 § 3; lägre gör det inte.
 * Jämförelsen är `>`. Källa: plan- och bygglagen 9 kap. 34 § 3, lagen.nu/2010:900,
 * läst 2026-09-28.
 */
export const PLANK_HOJD_GRANS_M = 1.2;

/**
 * Lovfri komplementbyggnad och komplementbostadshus: byggnadsarea, nockhöjd och
 * alla komplementbyggnader på tomten sammanlagt, alla jämförda med `<=`.
 * Källa: plan- och bygglagen 9 kap. 4 § (inom detaljplan) och 5 § (utanför),
 * punkt 1, 3 och 5, lagen.nu/2010:900, läst 2026-09-28.
 */
export const KOMPLEMENT: Record<Plan, { byaKvm: number; nockM: number; summaKvm: number }> = {
  ja: { byaKvm: 30, nockM: 4.0, summaKvm: 45 },
  nej: { byaKvm: 50, nockM: 4.5, summaKvm: 65 },
};

/* ------------------------------------------------------------------ *
 * Åtgärderna, gränserna och standardvärdena (specen 2.3 till 2.5)
 * ------------------------------------------------------------------ */

export const ATGARD_ORDNING: Atgard[] = ['komplement', 'tillbyggnad', 'altan', 'plank', 'staket', 'ekonomi'];

/**
 * ANTAGANDE G4: fältens gränser är satta för att fånga skrivfel, inte ur lagen.
 * Inklusive. Bara den valda åtgärdens fält valideras.
 */
export const GRANSER = {
  gransM: [0, 100],
  byaKvm: [1, 200],
  nockM: [0.5, 15],
  ovrigaKvm: [0, 500],
  areaKvm: [1, 200],
  ovrigaTbKvm: [0, 200],
  plankHojdM: [0.1, 5],
  plankAvstandM: [0, 100],
  golvM: [0, 10],
  altanAvstandM: [0, 100],
} as const;

/**
 * Standardfallet är underlagets fall 1: ett förråd på 12 m², 2,0 m från gränsen
 * mot grannens tomt, inom detaljplan. Det ger 'kravs' med avsikt, så att den som
 * söker en mall ser blanketten utan att fylla i något. Måtten för de andra
 * åtgärderna är underlagets fall 4, 5 och 6.
 */
export const STANDARD: GrannemedgivandeIndata = {
  atgard: 'komplement', plan: 'ja', gransM: 2.0, mot: 'tomt', jarnvag: false, vardefullt: false,
  byaKvm: 12, nockM: 3.0, ovrigaKvm: 0,
  areaKvm: 20, ovrigaTbKvm: 0,
  plankHojdM: 1.6, plankAvstandM: 2.0,
  golvM: 0.6, altanAvstandM: 0,
};

/** Fälten per åtgärd: query-nyckel och fält i indata. Staket och ekonomi har inga. */
export const ATGARD_FALT: Record<Atgard, readonly { nyckel: TalNyckel; falt: TalFalt }[]> = {
  komplement: [
    { nyckel: 'bya', falt: 'byaKvm' },
    { nyckel: 'nock', falt: 'nockM' },
    { nyckel: 'ovriga', falt: 'ovrigaKvm' },
  ],
  tillbyggnad: [
    { nyckel: 'area', falt: 'areaKvm' },
    { nyckel: 'ovrigatb', falt: 'ovrigaTbKvm' },
  ],
  altan: [
    { nyckel: 'golv', falt: 'golvM' },
    { nyckel: 'altanavstand', falt: 'altanAvstandM' },
  ],
  plank: [
    { nyckel: 'plankhojd', falt: 'plankHojdM' },
    { nyckel: 'plankavstand', falt: 'plankAvstandM' },
  ],
  staket: [],
  ekonomi: [],
};

/** Talfältens query-nycklar utöver grans. */
export type TalNyckel = 'bya' | 'nock' | 'ovriga' | 'area' | 'ovrigatb' | 'plankhojd' | 'plankavstand' | 'golv' | 'altanavstand';
export type TalFalt = Exclude<keyof typeof GRANSER, 'gransM'>;

/** Enheten efter varje talfält. */
export const ENHET: Record<TalNyckel | 'grans', 'm' | 'm²'> = {
  grans: 'm',
  bya: 'm²',
  nock: 'm',
  ovriga: 'm²',
  area: 'm²',
  ovrigatb: 'm²',
  plankhojd: 'm',
  plankavstand: 'm',
  golv: 'm',
  altanavstand: 'm',
};

/* ------------------------------------------------------------------ *
 * Tal i text
 * ------------------------------------------------------------------ */

/** Heltal utan decimal, annars decimalkomma: 2 blir "2", 2.5 blir "2,5". */
export function talText(n: number): string {
  return Number.isInteger(n) ? String(n) : String(n).replace('.', ',');
}

/** Hårt mellanslag, så att talet aldrig skiljs från sin enhet. */
const HART = ' ';

/* ------------------------------------------------------------------ *
 * Publika strängar (specen 2.10), skrivna av hantverkaren 2026-09-28. En
 * text med tal är en funktion som stoppar in talen ur konstanterna. Förbjudna ord enligt beslut 3 får aldrig stå här:
 * bindande, oåterkallelig, kan inte ångra, kan inte återkalla, kan inte dra
 * tillbaka. Testet söker igenom objektet.
 * ------------------------------------------------------------------ */

type MedIndata = (i: GrannemedgivandeIndata) => string;
type MinMax = (min: number, max: number) => string;

/** Tal med meter eller kvadratmeter, med hårt mellanslag före enheten. */
const mt = (n: number) => `${talText(n)}${HART}m`;
const kvm = (n: number) => `${talText(n)}${HART}m²`;
/** Detaljplanen i löptext. */
const planOrd = (p: Plan) => (p === 'ja' ? 'inom detaljplan' : 'utanför detaljplan');

export const TEXT = {
  /** Valen i formuläret och raderna i tabellen. namn visas som val och i blanketten, hint på raden under i formuläret. */
  atgard: {
    komplement: {
      namn: 'Komplementbyggnad',
      /* Ska säga att flytt av en bod räknas, och de gamla namnen friggebod och attefallshus inom parentes. */
      hint: 'Förråd, garage eller gäststuga, också med egen bostad (förr friggebod och attefallshus). Att flytta en bod räknas som att bygga nytt.',
    },
    tillbyggnad: {
      namn: 'Tillbyggnad',
      /* Ska säga att altan med tak hör hit. */
      hint: 'Ett rum till, ett skärmtak, ett inglasat uterum eller en altan med tak.',
    },
    altan: {
      /* Checklistan vill ha ordet altan i valet. */
      namn: 'Altan utan tak',
      /* Ska säga utan tak eller motsvarande. */
      hint: 'Trall på mark eller plintar, utan skärmtak och utan glas runt om.',
    },
    plank: {
      namn: 'Mur eller plank',
      /* Ska säga att tätt räcke räknas. */
      hint: 'Ett tätt räcke eller plank på altanen räknas också hit.',
    },
    staket: {
      /* Checklistan vill ha ordet staket i valet. */
      namn: 'Staket',
      hint: 'Ett glest staket som man ser igenom, en spaljé eller en pergola utan tak.',
    },
    ekonomi: {
      namn: 'Ekonomibyggnad',
      hint: 'Lada, stall eller maskinhall för jord- eller skogsbruk, utanför detaljplan.',
    },
  } satisfies Record<Atgard, { namn: string; hint: string }>,

  /** Formulärets etiketter och hjälprader. Hjälpraderna visas bara i fullt format. */
  falt: {
    /* Rubriken över åtgärdslänkarna i fullt format. */
    'atgard-rubrik': 'Vad ska du bygga?',
    /* Legend över åtgärdens radioknappar i det inbäddade formuläret. */
    'atgard-kompakt-legend': 'Vad ska du bygga?',
    grans: {
      etikett: 'Avstånd till närmaste gräns',
      /* Ska säga att man mäter från väggen eller takutsprånget till den närmaste gränsen (MÖD 2020:9). */
      /*
       * Två hjälprader (specen 12.5): byggnad visas när åtgärden har en takfot
       * (harTakfot: komplement och tillbyggnad), annat för altan, plank, staket och
       * ekonomibyggnad.
       */
      hjalp: {
        byggnad: 'Mät från det som sticker ut längst, takfoten om taket skjuter ut, till den gräns som ligger närmast.',
        /* Säger bara att man mäter till den närmaste gränsen. */
        annat: 'Mät det kortaste avståndet till den gräns som ligger närmast.',
      },
    },
    mot: {
      legend: 'Vad ligger på andra sidan gränsen?',
      tomt: 'En annan tomt eller en enskild väg',
      gata: 'En gata, ett torg eller en park',
      vag: 'En allmän väg utanför detaljplan',
    },
    plan: {
      legend: 'Ligger tomten inom detaljplan?',
      ja: 'Ja',
      nej: 'Nej',
      /* Hjälpraden om kommunens karta. */
      hjalp: 'Kommunens karta över detaljplaner visar det, och annars vet bygglovsenheten.',
    },
    /* Kryssrutans text, med JARNVAG_M insatt. */
    jarnvag: (m: number) => `Ett järnvägsspår ligger närmare än ${mt(m)}, räknat från spårets mitt`,
    /* Kryssrutans text. */
    vardefullt: 'Huset eller området är utpekat som särskilt värdefullt',
    bya: { etikett: 'Byggnadsarea', hjalp: 'Den yta byggnaden tar upp på marken.' },
    nock: { etikett: 'Nockhöjd', hjalp: 'Från marken upp till nocken, takets högsta linje.' },
    ovriga: {
      etikett: 'Andra komplementbyggnader utan lov på tomten',
      hjalp: 'Räkna ihop deras byggnadsarea. Skriv 0 om det inte finns några.',
    },
    area: { etikett: 'Tillbyggnadens yta', hjalp: 'Mät utvändigt, eller ytan under taket om det är ett skärmtak.' },
    ovrigatb: {
      etikett: 'Tidigare tillbyggnader utan lov',
      hjalp: 'Räkna ihop det du redan byggt till på huset utan lov. Skriv 0 om det inte finns något.',
    },
    plankhojd: {
      etikett: 'Plankets höjd',
      hjalp: 'Från marken på utsidan till överkanten. Står planket på en mur eller en altan räknas hela höjden.',
    },
    plankavstand: { etikett: 'Avstånd till närmaste byggnad', hjalp: 'Mät från planket till huset, garaget eller förrådet, det som står närmast.' },
    golv: { etikett: 'Golvets höjd över marken', hjalp: 'Ta måttet där altanen står som högst.' },
    altanavstand: { etikett: 'Avstånd till närmaste byggnad', hjalp: 'Skriv 0 om altanen ligger an mot huset.' },
    /* Knappen i fullt format (formulärets standard för knappText). */
    knapp: 'Visa svaret',
    /* Knappen i det inbäddade formuläret står i Kalkylator.astro (knapp-kompakt). */
  },

  /** Svaret i spalten: det stora ordet, resten på samma baslinje, och en mening med verb. */
  utfall: {
    kravs: {
      ord: 'Ja',
      rest: 'medgivande krävs',
      besked: 'Skriv ut blanketten längre ner och samla in underskrifterna innan du börjar bygga. Utan dem behöver bygget lov.',
    },
    'kravs-inte': {
      ord: 'Nej',
      rest: 'inget medgivande',
      besked: 'Du behöver ingen underskrift från grannen för det här. Ändras bygget eller platsen kan svaret bli ett annat.',
    },
    bygglov: {
      ord: 'Bygglov',
      rest: 'krävs för det här bygget',
      besked: 'Sök bygglov hos kommunen. Grannens underskrift gör inte det här bygget lovfritt.',
    },
  } satisfies Record<Utfall, { ord: string; rest: string; besked: string }>,

  /** En rad per mottagare i spalten vid 'kravs': vem som skriver under. */
  mottagare: {
    grannar: 'Alla som äger grannfastigheten skriver under, på en blankett per fastighet.',
    huvudman: 'Huvudmannen för gatan eller parken, oftast kommunen, skriver under.',
    jarnvag: 'Trafikverket, eller den som annars förvaltar spåret, skriver under.',
  } satisfies Record<Mottagare, string>,

  /** Raden med måtten under svaret i spalten, versaler. */
  meta: {
    komplement: (i: GrannemedgivandeIndata) =>
      `Komplementbyggnad ${kvm(i.byaKvm)}, ${mt(i.gransM)} från gränsen, ${planOrd(i.plan)}`,
    tillbyggnad: (i: GrannemedgivandeIndata) =>
      `Tillbyggnad ${kvm(i.areaKvm)}, ${mt(i.gransM)} från gränsen, ${planOrd(i.plan)}`,
    altan: (i: GrannemedgivandeIndata) =>
      `Altan ${mt(i.golvM)} hög, ${mt(i.gransM)} från gränsen, ${planOrd(i.plan)}`,
    plank: (i: GrannemedgivandeIndata) =>
      `Plank ${mt(i.plankHojdM)} högt, ${mt(i.gransM)} från gränsen, ${planOrd(i.plan)}`,
    staket: (i: GrannemedgivandeIndata) => `Staket ${mt(i.gransM)} från gränsen, ${planOrd(i.plan)}`,
    ekonomi: (i: GrannemedgivandeIndata) => `Ekonomibyggnad ${mt(i.gransM)} från gränsen, utanför detaljplan`,
  } satisfies Record<Atgard, MedIndata>,

  /** Etiketten över varje rad i "Därför blev svaret så". */
  slag: {
    bygglov: 'Kräver bygglov',
    inom: 'Inom måtten',
    kravs: 'Kräver medgivande',
    'kravs-inte': 'Inget medgivande',
    villkor: 'Förutsätter',
  } satisfies Record<Slag, string>,

  /** En text per regel i "Därför blev svaret så", med talen insatta. */
  regel: {
    varde: (_i: GrannemedgivandeIndata) =>
      'Huset eller området är utpekat som särskilt värdefullt, och då kräver bygget lov hur litet det än är. Ett medgivande ändrar inte på det.',
    bya: (i: GrannemedgivandeIndata) =>
      `Byggnaden tar ${kvm(i.byaKvm)} av marken. Utan lov får den ta högst ${kvm(KOMPLEMENT[i.plan].byaKvm)} ${planOrd(i.plan)}.`,
    nock: (i: GrannemedgivandeIndata) =>
      `Nocken ligger ${mt(i.nockM)} över marken, och utan lov får den ligga högst ${mt(KOMPLEMENT[i.plan].nockM)}.`,
    summa: (i: GrannemedgivandeIndata) =>
      `Med det som redan står på tomten blir det ${kvm(i.byaKvm + i.ovrigaKvm)} komplementbyggnader, och utan lov får de vara högst ${kvm(KOMPLEMENT[i.plan].summaKvm)} tillsammans.`,
    area: (i: GrannemedgivandeIndata) =>
      i.ovrigaTbKvm > 0
        ? `Tillbyggnaden blir ${kvm(i.areaKvm)}, och du har byggt till ${kvm(i.ovrigaTbKvm)} förut. Utan lov får det bli högst ${kvm(LOVFRI_TILLBYGGNAD_KVM)} sammanlagt.`
        : `Tillbyggnaden blir ${kvm(i.areaKvm)}, och utan lov får den vara högst ${kvm(LOVFRI_TILLBYGGNAD_KVM)}, räknat ihop med allt du byggt till utan lov.`,
    /* Plank och altan inom detaljplan. Höjden är plankets eller golvets, avståndet till närmaste byggnad. */
    'hojd-19': (i: GrannemedgivandeIndata) => {
      const altan = i.atgard === 'altan';
      const hojd = altan ? i.golvM : i.plankHojdM;
      const avstand = altan ? i.altanAvstandM : i.plankAvstandM;
      const nara = avstand <= NARA_BYGGNAD_M;
      const max = nara ? HOJD_NARA_BYGGNAD_M : HOJD_LANGRE_BORT_M;
      const var_ = avstand === 0 ? 'ligger an mot en byggnad' : `står ${mt(avstand)} från närmaste byggnad`;
      const zon = nara ? `Inom ${mt(NARA_BYGGNAD_M)} från en byggnad` : `Längre bort än ${mt(NARA_BYGGNAD_M)} från en byggnad`;
      return altan
        ? `Golvet ligger ${mt(hojd)} över marken, och altanen ${var_}. ${zon} får golvet ligga högst ${mt(max)} upp utan bygglov.`
        : `Planket är ${mt(hojd)} högt och ${var_}. ${zon} får det vara högst ${mt(max)} utan bygglov.`;
    },
    'utanfor-plan-19': (_i: GrannemedgivandeIndata) =>
      'Utanför detaljplan sätter lagen ingen höjdgräns för plank och altaner. Där är det bara närheten till gränsen som kan kräva något.',
    ekonomi: (_i: GrannemedgivandeIndata) =>
      'En ekonomibyggnad för jord- eller skogsbruk utanför detaljplan är undantagen och får stå nära gränsen utan grannens medgivande.',
    /* Ska säga att lagen inte kräver medgivande för en altan utan tak, och att det krävs om den får tak, inglasning eller ett tätt plank över 1,2 m. */
    'altan-inte-34': (_i: GrannemedgivandeIndata) =>
      `En altan utan tak finns inte bland det som kräver medgivande nära gränsen. Det ändras om den får skärmtak eller glas runt om, eller ett tätt plank som är högre än ${mt(PLANK_HOJD_GRANS_M)} över marken.`,
    'staket-inte-34': (_i: GrannemedgivandeIndata) =>
      'Ett staket som man ser igenom räknas inte som mur eller plank, så det behöver inget medgivande hur nära gränsen det än står.',
    'plank-lagt': (i: GrannemedgivandeIndata) =>
      `Planket är ${mt(i.plankHojdM)} högt, och det är bara mur och plank högre än ${mt(PLANK_HOJD_GRANS_M)} över marken som kräver medgivande.`,
    'langt-fran-grans': (i: GrannemedgivandeIndata) =>
      `Bygget står ${mt(i.gransM)} från gränsen. Medgivande krävs bara när det kommer närmare än ${mt(GRANS_M)}.`,
    'grans-tomt': (i: GrannemedgivandeIndata) =>
      `Du bygger ${mt(i.gransM)} från gränsen mot grannens tomt. Närmare än ${mt(GRANS_M)} måste grannen medge bygget, annars krävs bygglov.`,
    /* Ska säga att huvudmannen, oftast kommunen, skriver under, och att det finns fall utan huvudman där ingen kan. */
    'grans-gata': (i: GrannemedgivandeIndata) =>
      `Du bygger ${mt(i.gransM)} från gränsen mot gatan eller parken, närmare än ${mt(GRANS_M)}. Där är det huvudmannen, oftast kommunen, som medger bygget. Finns ingen huvudman utsedd kan ingen medge det, och då krävs bygglov. Vem som är huvudman för platsen får du veta hos kommunen.`,
    'grans-vag': (i: GrannemedgivandeIndata) =>
      `Du bygger ${mt(i.gransM)} från en allmän väg utanför detaljplan, närmare än ${mt(GRANS_M)}. Väghållaren kan inte medge bygget där, så det blir bygglov.`,
    jarnvag: (_i: GrannemedgivandeIndata) =>
      `Ett järnvägsspår ligger närmare än ${mt(JARNVAG_M)}, och då ska den som förvaltar spåret också medge bygget.`,
    /* Ska säga att kravet på skriftligt är nytt sedan REGLERNA_GALLER_FRAN. */
    skriftligt: (_i: GrannemedgivandeIndata) =>
      'Medgivandet ska vara nedskrivet och undertecknat. Det kravet kom med lagändringen, och förut ställde lagen inget krav på form.',
    'villkor-huvudbyggnad': (_i: GrannemedgivandeIndata) =>
      'Byggnaden ska vara mindre än huset den hör till. Det har jag inte frågat efter.',
    'villkor-tomten': (_i: GrannemedgivandeIndata) => 'Hela byggnaden ska stå inom din tomt.',
    'villkor-taknock': (_i: GrannemedgivandeIndata) => 'Tillbyggnaden får inte gå högre än husets taknock.',
    'villkor-flera-granser': (_i: GrannemedgivandeIndata) =>
      `Ligger flera gränser närmare än ${mt(GRANS_M)} behövs ett medgivande från varje fastighet.`,
    'villkor-planstrid': (_i: GrannemedgivandeIndata) =>
      'Medgivandet räcker också där detaljplanen säger att marken inte får bebyggas, så länge huset är ett en- eller tvåbostadshus. Mot planens skyddsbestämmelser hjälper det inte.',
    'villkor-tatt-plank': (_i: GrannemedgivandeIndata) =>
      `Ett plank på altanen mäts från marken på utsidan, så altanens höjd räknas in i de ${mt(PLANK_HOJD_GRANS_M)}.`,
  } satisfies Record<RegelNyckel, MedIndata>,

  /** Ett stycke per råd under "Gör inte det här". */
  gorInte: {
    /* Visas vid kravs när grannar finns bland mottagarna. */
    muntligt:
      'Ett muntligt ja räcker inte. Utan grannens underskrift på papper är bygget lovpliktigt, och du har inget att visa upp om kommunen frågar.',
    /* Visas vid kravs i stället för muntligt när bara huvudmannen eller järnvägens förvaltare medger (specen 12.10). */
    'muntligt-myndighet':
      'Ett ja i telefonen räcker inte. Medgivandet ska vara skriftligt också när kommunen eller spårets förvaltare lämnar det, och har kommunen en e-tjänst för det är det den vägen du ska gå.',
    tystnad:
      'Om grannen inte svarar har du inget medgivande. Tystnad räknas inte som ett ja, så då återstår bygglov eller en annan plats för bygget.',
    'bygga-annat':
      'Bygg det grannen har skrivit under på. Medgivandet gäller bara det grannen fått se, så blir bygget större eller hamnar det närmare gränsen gäller medgivandet inte längre.',
    /* Bär beslut 3: vill du vara säker, sök lov enligt 9 kap. 52 §. */
    'lita-pa-pappret':
      'Lägg inte ett dyrt bygge på ett papper som går att ifrågasätta. Vill du vara helt säker söker du bygglov fast bygget är lovfritt, vilket lagen tillåter i 9 kap. 52 §.',
    'mata-fran-vaggen':
      `Står bygget nära ${mt(GRANS_M)} från gränsen ska du mäta från takfoten och inte från väggen. Mark- och miljööverdomstolen har sagt att ett taksprång räknas när det går att mäta (MÖD 2020:9), och några decimeter taksprång kan vara skillnaden mellan att behöva ett medgivande och att slippa.`,
    'medgivande-mot-lov':
      'Be inte grannen om en underskrift för att slippa lovet. När bygget kräver lov av andra skäl än avståndet hjälper inget medgivande, och kommunen prövar ansökan som vanligt.',
  } satisfies Record<GorInte, string>,

  /** Feltexterna under fälten. */
  fel: {
    'ekonomi-inom-plan': 'En ekonomibyggnad är bara undantagen utanför detaljplan. Välj Nej under detaljplan eller ett annat bygge.',
    'gata-utanfor-plan': 'Gator och parker finns bara inom detaljplan. Utanför plan väljer du allmän väg.',
    'vag-inom-plan': 'Inom detaljplan räknas vägen som gata. Välj gata, torg eller park.',
    grans: (min: number, max: number) => `Skriv ett avstånd mellan ${talText(min)} och ${talText(max)} m.`,
    bya: (min: number, max: number) => `Skriv en yta mellan ${talText(min)} och ${talText(max)} m².`,
    nock: (min: number, max: number) => `Skriv en höjd mellan ${talText(min)} och ${talText(max)} m.`,
    ovriga: (min: number, max: number) => `Skriv en yta mellan ${talText(min)} och ${talText(max)} m².`,
    area: (min: number, max: number) => `Skriv en yta mellan ${talText(min)} och ${talText(max)} m².`,
    ovrigatb: (min: number, max: number) => `Skriv en yta mellan ${talText(min)} och ${talText(max)} m².`,
    plankhojd: (min: number, max: number) => `Skriv en höjd mellan ${talText(min)} och ${talText(max)} m.`,
    plankavstand: (min: number, max: number) => `Skriv ett avstånd mellan ${talText(min)} och ${talText(max)} m.`,
    golv: (min: number, max: number) => `Skriv en höjd mellan ${talText(min)} och ${talText(max)} m.`,
    altanavstand: (min: number, max: number) => `Skriv ett avstånd mellan ${talText(min)} och ${talText(max)} m.`,
  } satisfies Record<'ekonomi-inom-plan' | 'gata-utanfor-plan' | 'vag-inom-plan', string> &
    Record<TalNyckel | 'grans', MinMax>,

  /** Resultatspalten utöver svaret. */
  spalt: {
    /* Länken till #medgivandet, bara vid 'kravs'. */
    'lank-blankett': 'Till blanketten',
    /* Pekraden till #darfor-blev-svaret-sa. */
    pekrad: 'Paragraferna bakom svaret',
    /* Etiketten över fältet med den delbara adressen. */
    'dela-etikett': 'Länk till ditt svar',
  },

  /** Blanketten. Visas bara vid 'kravs', en per mottagare. */
  blankett: {
    rubrik: 'Medgivande till åtgärd nära gräns',
    /* Ledtexten i blanketten, om den finns: vad pappret är. */
    /*
     * En per mottagare (specen 12.4). Den som bygger fyller i del 1 och del 2,
     * den som medger fyller i del 3 och skriver under; texten räknar rätt antal
     * delar. Förut, för alla: "Pappret gäller en åtgärd som är lovfri men ska stå
     * närmare gränsen än 4,5 m. Den som bygger fyller i de två första delarna,
     * och den som medger skriver under längst ner."
     */
    inledning: (m: Mottagare): string =>
      m === 'grannar'
        ? `Pappret gäller en åtgärd som är lovfri men ska stå närmare gränsen än ${mt(GRANS_M)}. Den som bygger fyller i de två första delarna, och grannen fyller i den tredje. Sedan skriver alla som äger grannfastigheten under längst ner.`
        : m === 'huvudman'
          ? `Pappret gäller en åtgärd som är lovfri men ska stå närmare än ${mt(GRANS_M)} från en gata, ett torg eller en park. Den som bygger fyller i de två första delarna, och huvudmannen för platsen fyller i den tredje och skriver under längst ner.`
          : `Pappret gäller en åtgärd som är lovfri men ska stå närmare än ${mt(JARNVAG_M)} från ett järnvägsspår, räknat från spårets mitt. Den som bygger fyller i de två första delarna, och den som förvaltar spåret fyller i den tredje och skriver under längst ner.`,
    'del-byggherre': 'Den som bygger',
    'del-atgard': 'Åtgärden',
    /* Rubriken över grannens del, efter mottagare. */
    'del-granne': {
      grannar: 'Grannfastigheten',
      /* Ska säga samma sak som TEXT.mottagare.huvudman (specen 12.4). Förut: "Huvudmannen för allmän plats". */
      huvudman: 'Huvudmannen för gatan eller parken, oftast kommunen',
      /* Ska säga samma sak som TEXT.mottagare.jarnvag; lagens ord får stå inom parentes. Förut: "Järnvägens infrastrukturförvaltare". */
      jarnvag: 'Trafikverket, eller den som annars förvaltar spåret (infrastrukturförvaltaren)',
    } satisfies Record<Mottagare, string>,
    /*
     * De två tomma raderna i grannens del, efter mottagare (specen 4.5 punkt 4):
     * grannfastighetens beteckning och adress, huvudmannen och förvaltningen
     * eller föreningen, infrastrukturförvaltaren.
     */
    'falt-granne': {
      grannar: ['Fastighetsbeteckning', 'Adress'],
      huvudman: ['Huvudman', 'Förvaltning eller förening'],
      jarnvag: ['Den som förvaltar spåret', 'Avdelning eller handläggare'],
    } satisfies Record<Mottagare, readonly [string, string]>,
    /* Rubriken över varje underskriftsblock, n är 1 till 4. */
    'del-underskrift': (n: number) => `Underskrift ${n}`,
    'falt-fastighetsbeteckning': 'Fastighetsbeteckning',
    'falt-adress': 'Adress',
    'falt-namn': 'Namn',
    'falt-beskrivning': 'Beskrivning av åtgärden',
    'falt-ritningar': 'Ritningar som hör till medgivandet',
    'ritning-situationsplan': 'Situationsplan',
    'ritning-fasad': 'Fasadritning',
    'ritning-plan': 'Planritning',
    'falt-daterade': 'Ritningarnas datum',
    /* Bara järnväg: avståndet till spårets mitt fylls i för hand. */
    'falt-avstand-spar': 'Avstånd till spårets mitt, i meter',
    'falt-ort-datum': 'Ort och datum',
    'falt-namnteckning': 'Namnteckning',
    'falt-namnfortydligande': 'Namnförtydligande',
    /* Det grannen skriver under på. */
    medgivandemening:
      'Jag medger att åtgärden ovan utförs utan bygglov, på den plats och med de mått som står här.',
    /* Att medgivandet gäller åtgärden och ritningarna som undertecknats. Inget om hur länge det gäller (beslut 3). */
    omfattning: 'Medgivandet gäller bara den åtgärd som beskrivs här och på de ritningar jag har skrivit under.',
    'alla-agare': 'Har fastigheten flera ägare skriver alla under, var och en i ett eget fält.',
    exemplar: 'Skriv under två exemplar, så att var och en sparar ett.',
    /* Sajtens namn och verktygets adress utan query. */
    kalla: (adress: string) => `Blankett från Hantverkstips, ${adress}`,
    /* Förtryckt avstånd till gränsen, utom för järnväg. */
    avstand: (gransM: number) => `${mt(gransM)} från gränsen`,
    /*
     * Detaljplanen som en hel mening, på järnvägsblanketten där avståndet till
     * gränsen inte står förtryckt (specen 12.4).
     */
    'plan-ensam': {
      ja: 'Bygget ligger inom detaljplan.',
      nej: 'Bygget ligger utanför detaljplan.',
    } satisfies Record<Plan, string>,
    /* Förtryckt detaljplan. */
    plan: {
      ja: 'inom detaljplan',
      nej: 'utanför detaljplan',
    } satisfies Record<Plan, string>,
    /* Måtten förtryckta på blanketten: hantverkarens ord, kodens tal. */
    matt: {
      komplement: (i: GrannemedgivandeIndata) => `Byggnadsarea ${kvm(i.byaKvm)}, nockhöjd ${mt(i.nockM)}`,
      tillbyggnad: (i: GrannemedgivandeIndata) => `Yta ${kvm(i.areaKvm)}`,
      altan: (i: GrannemedgivandeIndata) => `Golvet ${mt(i.golvM)} över marken`,
      plank: (i: GrannemedgivandeIndata) =>
        `Höjd ${mt(i.plankHojdM)}, ${mt(i.plankAvstandM)} från närmaste byggnad`,
      staket: (_i: GrannemedgivandeIndata) => 'Glest staket, spaljé eller pergola',
      ekonomi: (_i: GrannemedgivandeIndata) => 'Ekonomibyggnad för jord- eller skogsbruk',
    } satisfies Record<Atgard, MedIndata>,
  },

  /** Tabellen över åtgärder (checklistans H2 1). */
  tabell: {
    caption: 'Vilka byggen nära gränsen som kräver grannemedgivande',
    atgard: 'Det du bygger',
    medgivande: 'Medgivande',
    lagrum: 'Lagrum',
    /* Kolumnen medgivande, ur utfallet. */
    utfall: {
      kravs: 'Krävs',
      'kravs-inte': 'Krävs inte',
      bygglov: 'Räcker inte, bygglov krävs',
    } satisfies Record<Utfall, string>,
    rad: {
      komplement: 'Komplementbyggnad eller komplementbostadshus, 12 m², 2 m från gränsen',
      tillbyggnad: 'Tillbyggnad eller altan med tak, 20 m², 2 m från gränsen',
      'plank-hog': 'Plank 1,6 m över marken, 2 m från gränsen',
      'plank-lag': 'Plank högst 1,2 m över marken',
      altan: 'Altan utan tak, 2 m från gränsen',
      staket: 'Glest staket, 2 m från gränsen',
      ekonomi: 'Ekonomibyggnad utanför detaljplan, 2 m från gränsen',
      'pa-gransen-45': 'Komplementbyggnad precis 4,5 m från gränsen',
      'for-stor': 'Komplementbyggnad på 35 m² inom detaljplan',
      gata: 'Komplementbyggnad 3 m från en gata, huvudmannen medger bygget',
      vag: 'Komplementbyggnad 3 m från en allmän väg utanför detaljplan',
      jarnvag: 'Komplementbyggnad nära ett järnvägsspår, förvaltaren medger bygget',
    },
  },

  /** Kolumnen "Vad" i antagandetabellen. */
  antagande: {
    grans: 'Avstånd till gränsen där medgivande krävs',
    jarnvag: 'Avstånd till järnvägsspår',
    plank: 'Höjd över marken där mur och plank kräver medgivande',
    'hojd-19': 'Lovfri höjd för plank och altan inom detaljplan',
    komplement: 'Lovfri komplementbyggnad',
    tillbyggnad: 'Lovfri tillbyggnad',
    skriftligt: 'Medgivandet ska vara skriftligt',
    huvudman: 'Mot gata, torg och park',
    'vag-utanfor-plan': 'Mot allmän väg utanför detaljplan',
    altan: 'Altan utan tak',
    ekonomi: 'Ekonomibyggnad utanför detaljplan',
    vardefullt: 'Särskilt värdefull bebyggelse',
    'frivilligt-lov': 'Söka lov fast bygget är lovfritt',
    aterkallelse: 'Om grannen kan ta tillbaka sitt ja',
    G1: 'Huset på tomten',
    G2: 'Det formuläret inte frågar efter',
    G3: 'Vilken gräns jag mäter mot',
    G4: 'Fältens gränser',
    G5: 'Hur medgivandet skrivs under',
  },

  /**
   * Kolumnen "Värde" i antagandetabellen där värdet är ord och inte bara ett
   * tal med enhet. Talen stoppas in av koden.
   */
  'antagande-varde': {
    jarnvag: (m: number) => `${mt(m)} från spårets mitt`,
    'hojd-19': (nara: number, langre: number, avstand: number) =>
      `${mt(nara)} inom ${mt(avstand)} från en byggnad, annars ${mt(langre)}`,
    komplement: (k: typeof KOMPLEMENT) =>
      `Inom detaljplan ${kvm(k.ja.byaKvm)}, nockhöjd ${mt(k.ja.nockM)}, ${kvm(k.ja.summaKvm)} sammanlagt på tomten. Utanför ${kvm(k.nej.byaKvm)}, ${mt(k.nej.nockM)} och ${kvm(k.nej.summaKvm)}`,
    tillbyggnad: (m2: number) => `${kvm(m2)} sammanlagt`,
    skriftligt: (_datum: string) => 'Nedskrivet och undertecknat',
    huvudman: 'Huvudmannen för platsen medger bygget',
    'vag-utanfor-plan': 'Väghållaren kan inte medge bygget, bygglov krävs',
    altan: 'Inget medgivande krävs',
    ekonomi: 'Undantagen, inget medgivande krävs',
    vardefullt: 'Bygglov krävs, medgivandet hjälper inte',
    'frivilligt-lov': 'Tillåtet',
    /* Värdet ska vara att källorna säger olika (specen 4.7). */
    aterkallelse: 'Källorna säger olika',
    G1: 'Ett en- eller tvåbostadshus, så medgivandet gäller även där bygget strider mot detaljplanen, utom mot skyddsbestämmelser',
    G2: 'Att en komplementbyggnad är mindre än huset och står inom tomten, och att en tillbyggnad inte går över taknocken',
    G3: `Den närmaste. Ligger flera gränser inom ${mt(GRANS_M)} behövs ett medgivande per fastighet, och grannen på andra sidan en gata räknas inte`,
    G4: 'Satta för att fånga skrivfel, inte hämtade ur lagen',
    G5: 'Papper och penna, det enda sätt som alla källor godtar',
  },

  /** Sidans egen text, i den ordning den står på sidan (specen 4.2). */
  sida: {
    h1: 'Grannens medgivande, se om du behöver det och skriv ut blanketten',
    ingress: `Ska ett nytt förråd, en tillbyggnad eller ett plank som är högre än ${talText(PLANK_HOJD_GRANS_M)} meter över marken stå närmare tomtgränsen än ${talText(GRANS_M)} meter, får du bara bygga utan lov om grannen har sagt ja på papper. Välj vad du bygger och fyll i måtten, så säger jag om medgivandet krävs, om det inte behövs eller om det blir bygglov ändå. Krävs det får du en blankett att skriva ut och ta med över till grannen, med bygget och måtten förtryckta.`,
    /* Kortsvaret, tre till fem meningar. markering är orden runt 4,5 meter som får gul markering. */
    kortsvar: [
      {
        fore: `Du behöver grannens medgivande när något som annars är lovfritt, som ett förråd, en tillbyggnad eller ett plank som är högre än ${talText(PLANK_HOJD_GRANS_M)} meter över marken, ska stå närmare tomtgränsen än `,
        markering: `${talText(GRANS_M)} meter`,
        efter: '. Det står i plan- och bygglagen, 9 kap. 34 och 35 §§.',
      },
      {
        fore: `Sedan ${REGLERNA_GALLER_FRAN} ska medgivandet vara skriftligt, och alla som äger grannfastigheten skriver under. Mot en gata eller en park är det huvudmannen för platsen som medger bygget, och det är oftast kommunen.`,
      },
      { fore: 'En altan utan tak och ett vanligt staket behöver inget medgivande alls.' },
    ] as { fore: string; markering?: string; efter?: string }[],
    /* H2 över blanketten, bara vid 'kravs'. */
    'h2-medgivandet': 'Medgivandet att skriva ut',
    /*
     * Ledtexten över blanketten, två till fyra meningar, bara vid 'kravs'. En
     * funktion av mottagarna (specen 12.4): ledtext-grannar när grannar finns
     * bland dem, annars ledtext-annan. Raden om en blankett per grannfastighet
     * och alla ägare står bara i den första. Förut, för alla: "Skriv ut sidan med Ctrl+P på datorn, eller med Dela och Skriv ut på telefonen, så kommer bara blanketten med. Använd en blankett per grannfastighet och låt alla ägare skriva under. Bifoga en situationsplan, en karta över tomten där bygget är inritat. Pappret skickas inte till kommunen, men spara det, för det är du som ska kunna visa upp det."
     */
    ledtext: (mottagare: readonly Mottagare[]): string =>
      mottagare.includes('grannar')
        ? 'Skriv ut sidan med Ctrl+P på datorn, eller med Dela och Skriv ut på telefonen, så kommer bara blanketten med. Använd en blankett per grannfastighet och låt alla ägare skriva under. Bifoga en situationsplan, en karta över tomten där bygget är inritat. Pappret skickas inte till kommunen, men spara det, för det är du som ska kunna visa upp det.'
        : 'Skriv ut sidan med Ctrl+P på datorn, eller med Dela och Skriv ut på telefonen, så kommer bara blanketten med. Fråga först den som ska skriva under hur den vill ha medgivandet, eftersom en del kommuner har en egen e-tjänst för det. Bifoga en situationsplan med bygget inritat, och spara pappret när det är underskrivet.',
    /* Sista raden i "Därför blev svaret så" vid altan: länken till altanräknaren. */
    'lank-altanraknaren': 'Pröva samma altan med tak eller högre golv i räknaren för bygglov',
    /* Checklistans H2 1: vilka åtgärder som kräver medgivande. Tabellen står efter stycket. */
    'h2-atgarder': 'Vilka byggen som kräver medgivande och varför altanen och staketet slipper',
    'atgarder-stycken': [
      `Vid ett vanligt villahus är det tre sorters bygge som kräver medgivande när de kommer närmare gränsen än ${talText(GRANS_M)} meter: en ny byggnad, en tillbyggnad och en mur eller ett plank som är högre än ${talText(PLANK_HOJD_GRANS_M)} meter över marken. Det gäller bara om bygget annars hade varit lovfritt. Är bygget för stort blir det bygglov, vad grannen än tycker.`,
      'En altan utan tak står inte med i lagen, och regeringen skriver i propositionen, sitt förslag till riksdagen, att den själv medvetet lät bli att ta med altaner. Boverkets sida för privatpersoner säger att grannen ska medge även en öppen altan, men lagtexten gör det inte, och jag går på lagen. Får altanen skärmtak eller inglasning är den en tillbyggnad, och då krävs medgivandet.',
    ],
    /* Checklistans H2 2: vad som ändrades 1 december 2025. */
    'h2-andrades': 'Lagen skrevs om 1 december 2025',
    'andrades-stycken': [
      'Lag 2025:974 gav plan- och bygglagen ett nytt kapitel om bygglov. Medgivandet nära gränsen står nu i 9 kap. 34 och 35 §§, och för första gången kräver lagen att det är skriftligt. Förut fanns inget formkrav alls, bara domstolarnas råd att ta det på papper.',
      'Samtidigt fick byggnaderna nya namn. Det som hette friggebod och attefallshus heter nu komplementbyggnad, eller komplementbostadshus om det finns en bostad i det, och samma mått gäller för alla sorter. Nytt är också att lagen pekar ut vem som ska medge bygget när gränsen går mot en gata eller park eller när ett järnvägsspår ligger nära: huvudmannen för platsen och den som förvaltar spåret.',
    ],
    /* Checklistans H2 3: vem som räknas som granne. */
    'h2-granne': 'Vem som räknas som granne',
    'granne-stycken': [
      'Granne är den som äger fastigheten på andra sidan gränsen. Har den flera ägare, som ett gift par eller ett dödsbo, skriver alla under. Äger ett företag, en förening eller kommunen fastigheten är det ägaren som medger bygget. Gränsar tomten mot en samfällighet, till exempel en gemensam väg, är det samfällighetsföreningen som skriver under.',
      'Mot en gata, ett torg eller en park inom detaljplan är det huvudmannen, den som ansvarar för platsen, som medger bygget. Det är oftast kommunen, men på en del håll är det en vägförening. När kommunen skriver under gör den det som granne och inte som bygglovsmyndighet, men den kan ändå vara sträng. Lunds kommun skriver att den är mycket restriktiv med byggen närmare gränsen än en meter. Grannen på andra sidan gatan räknar jag inte med, eftersom det är gränsen mot gatan som ligger närmast. Det är min tolkning av Boverkets text och inte prövat i domstol.',
      `Järnvägen räknas för sig. Ligger ett spår närmare än ${talText(JARNVAG_M)} meter, mätt från spårets mitt, ska den som förvaltar spåret medge bygget.`,
    ],
    /* Checklistans H2 4: vad medgivandet ska innehålla, och H3 om grannehörande med tabellen. */
    'h2-innehall': 'Det här ska stå på pappret',
    'innehall-stycken': [
      'Lagen kräver bara att medgivandet är skriftligt, och propositionen förklarar det som nedskrivet och undertecknat. Boverket skriver att det viktiga är att det tydligt framgår vilken åtgärd grannen har medgett. Jag har byggt blanketten på det som Stockholm, Sandviken och Örebro kräver eller föreslår: fastighetsbeteckningarna, vad du bygger och hur stort, avståndet till gränsen, ritningarna med datum, och en underskrift med namnförtydligande från varje ägare.',
      'Situationsplanen är den viktigaste bilagan. Rita in bygget och måttet till gränsen och låt grannen skriva under kartan också, så går det inte att bråka om var bygget skulle stå.',
    ],
    'h3-grannehorande': 'Grannehörande är något annat',
    'grannehorande-stycken': [
      'Grannehörande gör kommunen när du söker bygglov för något som avviker från detaljplanen. Då skickar kommunen brev till grannarna, som får tycka till, men ingen av dem behöver säga ja.',
    ],
    /* Checklistans H2 5: om grannen säger nej, och om grannen kan ångra sig. Bär beslut 3 med båda källorna. */
    'h2-nej': 'Om grannen säger nej eller ångrar sig',
    'nej-stycken': [
      `Grannen behöver inte gå med på något, och kommunen kan inte kräva det. Säger grannen nej kan du flytta bygget till minst ${talText(GRANS_M)} meter från gränsen, söka bygglov eller låta bli. Söker du lov för något som följer detaljplanen behöver kommunen inte höra grannen alls, och då är det kommunen och inte grannen som bestämmer. Grannen får veta om beslutet och kan överklaga det.`,
      'Om grannen kan ta tillbaka ett medgivande som redan är underskrivet är inte avgjort. Regeringen skriver i propositionen att inget hindrar det, och hänvisar till en dom i Högsta domstolen (NJA 2014 s. 445). Boverket menar tvärtom att medgivandet är ett avtal som den ena parten inte får bryta på egen hand. Jag har inte hittat någon dom efter lagändringen som säger vem som har rätt.',
    ],
    /* "Så räknar jag": stegen i ord, följer specen 2.7 steg 1 till 5. */
    steg: [
      'Först ser jag efter om huset eller området är utpekat som särskilt värdefullt. Då krävs bygglov för allt utom ett glest staket, och resten spelar ingen roll.',
      `Sedan prövar jag storleken: byggnadsarea och nockhöjd för en komplementbyggnad, ytan för en tillbyggnad och höjden för ett plank eller en altan. Är det för stort blir svaret bygglov. En altan utan tak, ett staket, ett plank på högst ${mt(PLANK_HOJD_GRANS_M)} över marken och en ekonomibyggnad utanför plan stannar här med svaret att inget medgivande krävs.`,
      `Därefter jämför jag avståndet med ${mt(GRANS_M)}. Är det kortare ska grannen medge bygget när gränsen går mot en tomt, och huvudmannen när den går mot en gata eller park. Mot en allmän väg utanför detaljplan blir det bygglov.`,
      'Har du kryssat för ett järnvägsspår ska även den som förvaltar spåret medge bygget.',
      'Finns det någon som ska medge bygget blir svaret ja, och du får en blankett för var och en. Finns det ingen krävs inget medgivande.',
    ],
    /* Skissen i "Så räknar jag": alt under 125 tecken med grannemedgivande eller tomtgränsen, bildtext med talet. */
    'skiss-alt': 'Tomten uppifrån med ett förråd 2,0 m från tomtgränsen, inne i bältet där grannemedgivande krävs',
    'skiss-bildtext': `Det skrafferade bältet är de sista ${mt(GRANS_M)} före gränsen. Förrådet på 12 m² står 2,0 m från gränsen, inne i bältet, så grannen ska medge det.`,
    /* "Läs vidare": länktexterna. */
    'las-vidare': {
      'altan-bygglov-altan': 'När altanen behöver bygglov',
      'rakna-bygglov-altan': 'Räknaren för bygglov till altanen',
      'altan-bygga-altan': 'Bygga altan från plintarna till trallen',
      boverket: 'Boverket om utökad lovplikt nära gräns',
    },
    /* Faq, tre till fem frågor som inte dubblerar avsnitten. */
    faq: [
      {
        fraga: 'Hur länge gäller ett grannemedgivande?',
        svar: 'Lagen sätter ingen tidsgräns, till skillnad från ett bygglov, som måste användas inom några år. Säljer grannen huset gäller medgivandet också mot den nya ägaren, enligt Boverket. Om grannen själv kan ta tillbaka det säger källorna olika.',
      },
      {
        fraga: 'Går det att skriva under med BankID?',
        svar: 'Ingen myndighet har sagt ja eller nej till det, så jag håller mig till papper och penna, som alla godtar. Lund och Skara har e-tjänster med BankID, men bara för fall där kommunen själv är granne.',
      },
      {
        fraga: 'Behöver jag grannens medgivande för en pool?',
        svar: 'Nej. En pool står inte bland det som kräver medgivande nära gränsen, och regeringen valde att inte införa något krav när lagen skrevs om.',
      },
      {
        fraga: 'Vad händer om jag bygger utan medgivande?',
        svar: 'Då har du byggt något som kräver lov utan att ha det. Kommunen kan ta ut en byggsanktionsavgift och kräva att du rättar till bygget eller river det, enligt 11 kap. i plan- och bygglagen.',
      },
    ] as { fraga: string; svar: string }[],
  },

  /** Tabellen grannehörande mot grannemedgivande (underlaget 2.3), i checklistans H2 4. */
  grannehorande: {
    caption: 'Skillnaden mellan grannemedgivande och grannehörande',
    kolumner: ['Fråga', 'Grannemedgivande', 'Grannehörande'] as [string, string, string],
    /* Raderna: rubrik, grannemedgivande, grannehörande. Lagrummen är data. */
    rader: [
      [
        'När',
        `Bygget är lovfritt men står närmare gränsen än ${mt(GRANS_M)}`,
        'Du söker lov för något som avviker från detaljplanen eller ligger utanför den',
      ],
      ['Lagrum', 'Plan- och bygglagen 9 kap. 34 och 35 §§', 'Plan- och bygglagen 9 kap. 94, 95 och 96 §§'],
      ['Vem som ordnar det', 'Du själv', 'Kommunen'],
      ['Vilka som tillfrågas', 'De grannar som berörs', 'Grannar som gränsar till tomten eller bara skiljs från den av en gata'],
      ['Måste grannen säga ja?', 'Ja, alla som berörs', 'Nej, kommunen väger in vad grannen tycker'],
      ['Om grannen inte svarar', 'Inget medgivande', 'Kommunen beslutar ändå'],
    ] as [string, string, string][],
  },
};

/* ------------------------------------------------------------------ *
 * Tabellen över åtgärder (specen 2.9). Sidan kör raknaGrannemedgivande på
 * varje rad, så tabellen kan aldrig säga något annat än verktyget.
 * ------------------------------------------------------------------ */

export type TabellNyckel = keyof typeof TEXT.tabell.rad;

export const ATGARDSTABELL: { nyckel: TabellNyckel; indata: GrannemedgivandeIndata }[] = [
  { nyckel: 'komplement', indata: { ...STANDARD } },
  { nyckel: 'tillbyggnad', indata: { ...STANDARD, atgard: 'tillbyggnad' } },
  { nyckel: 'plank-hog', indata: { ...STANDARD, atgard: 'plank', plankHojdM: 1.6, plankAvstandM: 2.0 } },
  { nyckel: 'plank-lag', indata: { ...STANDARD, atgard: 'plank', plankHojdM: 1.2 } },
  { nyckel: 'altan', indata: { ...STANDARD, atgard: 'altan' } },
  { nyckel: 'staket', indata: { ...STANDARD, atgard: 'staket' } },
  { nyckel: 'ekonomi', indata: { ...STANDARD, atgard: 'ekonomi', plan: 'nej' } },
  { nyckel: 'pa-gransen-45', indata: { ...STANDARD, gransM: 4.5 } },
  { nyckel: 'for-stor', indata: { ...STANDARD, byaKvm: 35 } },
  { nyckel: 'gata', indata: { ...STANDARD, mot: 'gata', gransM: 3.0 } },
  { nyckel: 'vag', indata: { ...STANDARD, plan: 'nej', mot: 'vag', gransM: 3.0 } },
  { nyckel: 'jarnvag', indata: { ...STANDARD, gransM: 10, jarnvag: true } },
];

/**
 * Regeln som avgjorde svaret, för tabellens lagrumskolumn: första regeln med
 * samma slag som utfallet (bygglov, kravs eller kravs-inte), annars den sista
 * som inte är ett villkor.
 */
export function avgorandeRegel(r: GrannemedgivandeOk): Regel {
  const slag: Slag = r.utfall;
  const traff = r.regler.find((x) => x.slag === slag);
  if (traff) return traff;
  const ejVillkor = r.regler.filter((x) => x.slag !== 'villkor');
  return ejVillkor[ejVillkor.length - 1] ?? (r.regler[0] as Regel);
}

/* ------------------------------------------------------------------ *
 * Antagandetabellen (specen 4.7). Värdena byggs av konstanterna.
 * ------------------------------------------------------------------ */

export interface KallaRef { titel: string; url: string; last: string }

const LAGEN_NU: KallaRef = {
  titel: 'Plan- och bygglag (2010:900), lagen.nu',
  url: 'https://lagen.nu/2010:900',
  last: 'läst 2026-09-28',
};
const RIKSDAGEN_PBL: KallaRef = {
  titel: 'Plan- och bygglag (2010:900), riksdagen.se',
  url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/plan-och-bygglag-2010900_sfs-2010-900/',
  last: 'läst 2026-09-28',
};
const PROPOSITIONEN: KallaRef = {
  titel: 'Prop. 2024/25:169 Ett nytt regelverk för bygglov',
  url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/proposition/ett-nytt-regelverk-for-bygglov_hc03169/html/',
  last: 'läst 2026-09-28',
};
const BOVERKET_NARA_GRANS: KallaRef = {
  titel: 'Boverket, PBL kunskapsbanken, Utökad lovplikt nära gräns',
  url: 'https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/anmalningsplikt/omrade_utokad_lovplikt/nara-grans/',
  last: 'ändrad 2026-02-10, läst 2026-09-28',
};

/** Boverkets sida om utökad lovplikt nära gräns, för den externa länken under "Läs vidare". */
export const BOVERKET_NARA_GRANS_URL = BOVERKET_NARA_GRANS.url;

export type AntagandeNyckel = keyof typeof TEXT.antagande;

export interface AntagandeRad {
  nyckel: AntagandeNyckel;
  varde: string;
  typ: 'Källa' | 'Antagande';
  /** Lagrummet eller sidan i källan, som data. */
  lagrum?: string;
  kalla?: KallaRef;
}

const AV = TEXT['antagande-varde'];

export const ANTAGANDEN: AntagandeRad[] = [
  { nyckel: 'grans', varde: `${talText(GRANS_M)}${HART}m`, typ: 'Källa', lagrum: 'Plan- och bygglagen 9 kap. 34 §', kalla: LAGEN_NU },
  { nyckel: 'jarnvag', varde: AV.jarnvag(JARNVAG_M), typ: 'Källa', lagrum: 'Plan- och bygglagen 9 kap. 34 §', kalla: LAGEN_NU },
  { nyckel: 'plank', varde: `${talText(PLANK_HOJD_GRANS_M)}${HART}m`, typ: 'Källa', lagrum: 'Plan- och bygglagen 9 kap. 34 § 3', kalla: LAGEN_NU },
  {
    nyckel: 'hojd-19',
    varde: AV['hojd-19'](HOJD_NARA_BYGGNAD_M, HOJD_LANGRE_BORT_M, NARA_BYGGNAD_M),
    typ: 'Källa',
    lagrum: 'Plan- och bygglagen 9 kap. 19 §',
    kalla: LAGEN_NU,
  },
  { nyckel: 'komplement', varde: AV.komplement(KOMPLEMENT), typ: 'Källa', lagrum: 'Plan- och bygglagen 9 kap. 4 och 5 §§', kalla: LAGEN_NU },
  { nyckel: 'tillbyggnad', varde: AV.tillbyggnad(LOVFRI_TILLBYGGNAD_KVM), typ: 'Källa', lagrum: 'Plan- och bygglagen 9 kap. 10 §', kalla: LAGEN_NU },
  {
    nyckel: 'skriftligt',
    varde: AV.skriftligt(REGLERNA_GALLER_FRAN),
    typ: 'Källa',
    lagrum: 'Plan- och bygglagen 9 kap. 35 § första stycket 3, i lydelse enligt lag 2025:974; prop. 2024/25:169 s. 166',
    kalla: PROPOSITIONEN,
  },
  { nyckel: 'huvudman', varde: AV.huvudman, typ: 'Källa', lagrum: 'Plan- och bygglagen 9 kap. 35 § andra stycket', kalla: RIKSDAGEN_PBL },
  { nyckel: 'vag-utanfor-plan', varde: AV['vag-utanfor-plan'], typ: 'Källa', lagrum: 'Prop. 2024/25:169 s. 170', kalla: PROPOSITIONEN },
  { nyckel: 'altan', varde: AV.altan, typ: 'Källa', lagrum: 'Plan- och bygglagen 9 kap. 34 §; prop. 2024/25:169 s. 162', kalla: PROPOSITIONEN },
  { nyckel: 'ekonomi', varde: AV.ekonomi, typ: 'Källa', lagrum: 'Plan- och bygglagen 9 kap. 35 § 1', kalla: LAGEN_NU },
  { nyckel: 'vardefullt', varde: AV.vardefullt, typ: 'Källa', lagrum: 'Plan- och bygglagen 9 kap. 37 och 38 §§', kalla: LAGEN_NU },
  { nyckel: 'frivilligt-lov', varde: AV['frivilligt-lov'], typ: 'Källa', lagrum: 'Plan- och bygglagen 9 kap. 52 §', kalla: LAGEN_NU },
  {
    nyckel: 'aterkallelse',
    varde: AV.aterkallelse,
    typ: 'Källa',
    lagrum: 'Prop. 2024/25:169 s. 166 och 167; Boverket, PBL kunskapsbanken',
    kalla: BOVERKET_NARA_GRANS,
  },
  { nyckel: 'G1', varde: AV.G1, typ: 'Antagande' },
  { nyckel: 'G2', varde: AV.G2, typ: 'Antagande' },
  { nyckel: 'G3', varde: AV.G3, typ: 'Antagande' },
  { nyckel: 'G4', varde: AV.G4, typ: 'Antagande' },
  { nyckel: 'G5', varde: AV.G5, typ: 'Antagande' },
];

/** Källorna under antagandetabellen, var och en en gång, i den ordning de först förekommer. */
export function antagandeKallor(): KallaRef[] {
  const ut: KallaRef[] = [];
  for (const a of ANTAGANDEN) if (a.kalla && !ut.some((k) => k.url === a.kalla?.url)) ut.push(a.kalla);
  return ut;
}

/* ------------------------------------------------------------------ *
 * Räkningen (specen 2.7)
 * ------------------------------------------------------------------ */

const PBL = 'Plan- och bygglagen';

function inomGrans(v: number, [min, max]: readonly [number, number]): boolean {
  return Number.isFinite(v) && v >= min && v <= max;
}

/**
 * Har åtgärden en takfot att mäta från? Komplementbyggnad och tillbyggnad har
 * det; altan, plank, staket och ekonomibyggnad mäts bara till närmaste gräns.
 * Styr hjälpraden för gränsen och rådet mata-fran-vaggen (specen 12.5).
 */
export function harTakfot(atgard: Atgard): boolean {
  return atgard === 'komplement' || atgard === 'tillbyggnad';
}

/** Punkten i 34 § för åtgärden: 1 för byggnad och tillbyggnad, 3 för mur och plank. */
function punkt34(a: Atgard): number {
  return a === 'plank' ? 3 : 1;
}

export function raknaGrannemedgivande(i: GrannemedgivandeIndata): GrannemedgivandeResultat {
  /* Validering. Alla fel samlas. */
  const fel: Partial<Record<FelNyckel, string>> = {};
  if (i.atgard === 'ekonomi' && i.plan === 'ja') fel.atgard = TEXT.fel['ekonomi-inom-plan'];
  if (i.mot === 'gata' && i.plan === 'nej') fel.mot = TEXT.fel['gata-utanfor-plan'];
  if (i.mot === 'vag' && i.plan === 'ja') fel.mot = TEXT.fel['vag-inom-plan'];
  if (!inomGrans(i.gransM, GRANSER.gransM)) fel.grans = TEXT.fel.grans(...GRANSER.gransM);
  for (const { nyckel, falt } of ATGARD_FALT[i.atgard]) {
    const g = GRANSER[falt];
    if (!inomGrans(i[falt], g)) fel[nyckel] = TEXT.fel[nyckel](g[0], g[1]);
  }
  if (Object.keys(fel).length > 0) return { status: 'ogiltig', fel };

  const regler: Regel[] = [];
  const villkor: Regel[] = [];
  const bygglov = (): GrannemedgivandeOk => ({
    status: 'ok',
    utfall: 'bygglov',
    mottagare: [],
    regler,
    gorInteDetHar: gorInte('bygglov', i.atgard),
  });
  const kravsInte = (): GrannemedgivandeOk => ({
    status: 'ok',
    utfall: 'kravs-inte',
    mottagare: [],
    regler: [...regler, ...villkor],
    gorInteDetHar: gorInte('kravs-inte', i.atgard),
  });

  /* 1. Värdefullt. Staket står inte i 34 § och får aldrig lov här. */
  if (i.vardefullt && i.atgard !== 'staket') {
    const par = i.atgard === 'altan' || i.atgard === 'plank' ? '38' : '37';
    regler.push({ nyckel: 'varde', slag: 'bygglov', lagrum: `${PBL} 9 kap. ${par} §` });
    return bygglov();
  }

  /* 2. Storleken och undantagen, per åtgärd. */
  const hojd19 = (hojdM: number, avstandM: number): boolean => {
    if (i.plan === 'nej') {
      regler.push({ nyckel: 'utanfor-plan-19', slag: 'inom', lagrum: `${PBL} 9 kap. 19 § gäller bara inom detaljplan` });
      return true;
    }
    const nara = avstandM <= NARA_BYGGNAD_M;
    const max = nara ? HOJD_NARA_BYGGNAD_M : HOJD_LANGRE_BORT_M;
    const ok = hojdM <= max;
    regler.push({ nyckel: 'hojd-19', slag: ok ? 'inom' : 'bygglov', lagrum: `${PBL} 9 kap. 19 §` });
    return ok;
  };

  switch (i.atgard) {
    case 'komplement': {
      const k = KOMPLEMENT[i.plan];
      const par = i.plan === 'ja' ? '4' : '5';
      const prov: [RegelNyckel, boolean, number][] = [
        ['bya', i.byaKvm <= k.byaKvm, 1],
        ['nock', i.nockM <= k.nockM, 3],
        ['summa', i.byaKvm + i.ovrigaKvm <= k.summaKvm, 5],
      ];
      for (const [nyckel, ok, p] of prov) {
        regler.push({ nyckel, slag: ok ? 'inom' : 'bygglov', lagrum: `${PBL} 9 kap. ${par} § ${p}` });
      }
      if (prov.some(([, ok]) => !ok)) return bygglov();
      villkor.push({ nyckel: 'villkor-huvudbyggnad', slag: 'villkor', lagrum: `${PBL} 9 kap. ${par} § 2` });
      villkor.push({ nyckel: 'villkor-tomten', slag: 'villkor', lagrum: `${PBL} 9 kap. ${par} § 4` });
      break;
    }
    case 'tillbyggnad': {
      const ok = i.areaKvm <= LOVFRI_TILLBYGGNAD_KVM && i.areaKvm + i.ovrigaTbKvm <= LOVFRI_TILLBYGGNAD_KVM;
      regler.push({ nyckel: 'area', slag: ok ? 'inom' : 'bygglov', lagrum: `${PBL} 9 kap. 10 § 1 och 3` });
      if (!ok) return bygglov();
      villkor.push({ nyckel: 'villkor-taknock', slag: 'villkor', lagrum: `${PBL} 9 kap. 10 § 2` });
      break;
    }
    case 'plank': {
      if (!hojd19(i.plankHojdM, i.plankAvstandM)) return bygglov();
      if (!(i.plankHojdM > PLANK_HOJD_GRANS_M)) {
        regler.push({ nyckel: 'plank-lagt', slag: 'kravs-inte', lagrum: `${PBL} 9 kap. 34 § 3` });
        return kravsInte();
      }
      break;
    }
    case 'altan': {
      if (!hojd19(i.golvM, i.altanAvstandM)) return bygglov();
      regler.push({ nyckel: 'altan-inte-34', slag: 'kravs-inte', lagrum: `${PBL} 9 kap. 34 § och prop. 2024/25:169 s. 162` });
      villkor.push({ nyckel: 'villkor-tatt-plank', slag: 'villkor', lagrum: `${PBL} 9 kap. 34 § 3` });
      return kravsInte();
    }
    case 'staket': {
      regler.push({ nyckel: 'staket-inte-34', slag: 'kravs-inte', lagrum: `${PBL} 9 kap. 34 §` });
      return kravsInte();
    }
    case 'ekonomi': {
      regler.push({ nyckel: 'ekonomi', slag: 'kravs-inte', lagrum: `${PBL} 9 kap. 35 § 1` });
      return kravsInte();
    }
  }

  /* 3. Gränsen. */
  const p = punkt34(i.atgard);
  const mottagare: Mottagare[] = [];
  const nara = i.gransM < GRANS_M;
  if (nara && i.mot === 'vag') {
    regler.push({ nyckel: 'grans-vag', slag: 'bygglov', lagrum: `${PBL} 9 kap. 34 och 35 §§ samt prop. 2024/25:169 s. 170` });
    return bygglov();
  }
  if (nara && i.mot === 'tomt') {
    regler.push({ nyckel: 'grans-tomt', slag: 'kravs', lagrum: `${PBL} 9 kap. 34 § ${p} och 35 § första stycket 3` });
    mottagare.push('grannar');
  }
  if (nara && i.mot === 'gata') {
    regler.push({ nyckel: 'grans-gata', slag: 'kravs', lagrum: `${PBL} 9 kap. 34 § ${p} och 35 § andra stycket` });
    mottagare.push('huvudman');
  }

  /* 4. Järnvägen. */
  if (i.jarnvag) {
    regler.push({ nyckel: 'jarnvag', slag: 'kravs', lagrum: `${PBL} 9 kap. 34 § ${p} och 35 § andra stycket` });
    mottagare.push('jarnvag');
  }

  /* 5. Utfallet. */
  if (mottagare.length === 0) {
    regler.push({ nyckel: 'langt-fran-grans', slag: 'kravs-inte', lagrum: `${PBL} 9 kap. 34 §` });
    return kravsInte();
  }
  regler.push({ nyckel: 'skriftligt', slag: 'kravs', lagrum: `${PBL} 9 kap. 35 § första stycket 3, i lydelse enligt lag 2025:974` });
  regler.push(...villkor);
  if (mottagare.includes('grannar')) {
    regler.push({ nyckel: 'villkor-flera-granser', slag: 'villkor', lagrum: `${PBL} 9 kap. 35 § första stycket 3` });
  }
  if (i.plan === 'ja') {
    regler.push({ nyckel: 'villkor-planstrid', slag: 'villkor', lagrum: `${PBL} 9 kap. 35 § första stycket 3 b och 10 kap. 2 a §` });
  }
  return {
    status: 'ok',
    utfall: 'kravs',
    mottagare,
    regler,
    gorInteDetHar: gorInte('kravs', i.atgard, mottagare),
  };
}

/** Råden under "Gör inte det här", i specens ordning (2.7). */
function gorInte(utfall: Utfall, atgard: Atgard, mottagare: readonly Mottagare[] = []): GorInte[] {
  const ut: GorInte[] = [];
  if (utfall === 'kravs') {
    /* muntligt bara när grannar skriver under, annars muntligt-myndighet (specen 12.10). */
    ut.push(mottagare.includes('grannar') ? 'muntligt' : 'muntligt-myndighet', 'tystnad', 'bygga-annat', 'lita-pa-pappret');
  }
  if (harTakfot(atgard) && utfall !== 'bygglov') ut.push('mata-fran-vaggen');
  if (utfall === 'bygglov') ut.push('medgivande-mot-lov');
  return ut;
}

/* ------------------------------------------------------------------ *
 * Adressen (specen 2.6 och 2.8). Inga andra nycklar läses eller skrivs
 * (beslut 1): personuppgifter går aldrig genom adressen.
 * ------------------------------------------------------------------ */

/** Alla nycklar verktyget läser och skriver. */
export const NYCKLAR = [
  'atgard', 'plan', 'grans', 'mot', 'jarnvag', 'varde',
  'bya', 'nock', 'ovriga', 'area', 'ovrigatb', 'plankhojd', 'plankavstand', 'golv', 'altanavstand',
] as const;

/**
 * Decimalkomma accepteras, och ett efterhängt m, m2 eller m² tas bort:
 * "2,5 m" blir 2.5. Tomt eller skräp ger NaN.
 */
function tillTal(v: string | null): number {
  if (v === null) return NaN;
  const rensad = v.trim().replace(/\s*m(²|2)?$/i, '').trim().replace(',', '.');
  if (rensad === '') return NaN;
  return Number(rensad);
}

function arAtgard(v: string | null): v is Atgard {
  return v !== null && (ATGARD_ORDNING as string[]).includes(v);
}
function arPlan(v: string | null): v is Plan {
  return v === 'ja' || v === 'nej';
}
function arMot(v: string | null): v is Mot {
  return v === 'tomt' || v === 'gata' || v === 'vag';
}

/**
 * Läser adressen. Skräp i ett val faller tillbaka på standardvärdet, skräp i
 * ett tal blir NaN och ger ett fel på just det fältet. Okända nycklar läses
 * aldrig.
 */
export function tolkaQuery(q: URLSearchParams): { indata: GrannemedgivandeIndata; harIndata: boolean } {
  const harIndata = NYCKLAR.some((n) => q.has(n));
  const tal = (nyckel: string, standard: number) => (q.has(nyckel) ? tillTal(q.get(nyckel)) : standard);
  const atgard = q.get('atgard');
  const plan = q.get('plan');
  const mot = q.get('mot');
  return {
    harIndata,
    indata: {
      atgard: arAtgard(atgard) ? atgard : STANDARD.atgard,
      plan: arPlan(plan) ? plan : STANDARD.plan,
      gransM: tal('grans', STANDARD.gransM),
      mot: arMot(mot) ? mot : STANDARD.mot,
      jarnvag: q.get('jarnvag') === '1',
      vardefullt: q.get('varde') === '1',
      byaKvm: tal('bya', STANDARD.byaKvm),
      nockM: tal('nock', STANDARD.nockM),
      ovrigaKvm: tal('ovriga', STANDARD.ovrigaKvm),
      areaKvm: tal('area', STANDARD.areaKvm),
      ovrigaTbKvm: tal('ovrigatb', STANDARD.ovrigaTbKvm),
      plankHojdM: tal('plankhojd', STANDARD.plankHojdM),
      plankAvstandM: tal('plankavstand', STANDARD.plankAvstandM),
      golvM: tal('golv', STANDARD.golvM),
      altanAvstandM: tal('altanavstand', STANDARD.altanAvstandM),
    },
  };
}

/** Den delbara adressen: de gemensamma nycklarna och bara den valda åtgärdens. Tal med komma. */
export function delbarQuery(i: GrannemedgivandeIndata): URLSearchParams {
  const q = new URLSearchParams();
  q.set('atgard', i.atgard);
  q.set('plan', i.plan);
  q.set('grans', talText(i.gransM));
  q.set('mot', i.mot);
  if (i.jarnvag) q.set('jarnvag', '1');
  if (i.vardefullt) q.set('varde', '1');
  for (const { nyckel, falt } of ATGARD_FALT[i.atgard]) q.set(nyckel, talText(i[falt]));
  return q;
}

/**
 * Länken som byter åtgärd: de gemensamma värdena följer med, åtgärdens mått
 * tas bort så att den nya åtgärden får sina standardmått. Till ekonomibyggnad
 * blir planen nej och en gata blir en tomt; från ekonomibyggnad behålls planen.
 */
export function bytAtgardQuery(i: GrannemedgivandeIndata, ny: Atgard): URLSearchParams {
  const q = delbarQuery(i);
  for (const { nyckel } of ATGARD_FALT[i.atgard]) q.delete(nyckel);
  q.set('atgard', ny);
  if (ny === 'ekonomi') {
    q.set('plan', 'nej');
    if (i.mot === 'gata') q.set('mot', 'tomt');
  }
  return q;
}

/** Det som förtrycks på blanketten för en mottagare. */
export function blankettFakta(
  i: GrannemedgivandeIndata,
  m: Mottagare,
): { atgard: Atgard; matt: string; gransM: number | null; plan: Plan; lagrum: string } {
  const p = punkt34(i.atgard);
  const lagrum =
    m === 'grannar'
      ? `${PBL} (2010:900) 9 kap. 34 § ${p} och 35 § första stycket 3`
      : `${PBL} (2010:900) 9 kap. 34 § ${p} och 35 § andra stycket`;
  return {
    atgard: i.atgard,
    matt: TEXT.blankett.matt[i.atgard](i),
    gransM: m === 'jarnvag' ? null : i.gransM,
    plan: i.plan,
    lagrum,
  };
}

/** Adressen till altanräknaren för en altan utan tak, annars null. */
export function altanraknarQuery(i: GrannemedgivandeIndata): URLSearchParams | null {
  if (i.atgard !== 'altan') return null;
  const q = new URLSearchParams();
  q.set('plan', i.plan);
  q.set('hojd', talText(i.golvM));
  q.set('avstand', talText(i.altanAvstandM));
  q.set('grans', talText(i.gransM));
  q.set('tak', 'nej');
  return q;
}
