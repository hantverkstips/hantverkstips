/**
 * Behöver altanen bygglov? Ren modul utan importer från Astro, testbar utan
 * bygge. Sidan /rakna/bygglov-altan/ skickar formuläret som GET och räknar på
 * servern, så ingen rad av den här filen når klienten.
 *
 * Det här verktyget räknar inget material. Det ger ett ja, ett nej eller ett
 * kanske, och varje regel som slår in bär sitt lagrum. Reglerna följer
 * plan- och bygglagen (2010:900) i lydelse efter lag 2025:974, som trädde i
 * kraft den 1 december 2025 och skrev om hela bygglovskapitlet. Samma regler
 * står i /altan/bygglov-altan/, och underlaget är
 * docs/briefer/underlag-bygglov-altan-2026-09-16.md.
 *
 * Svaret är vägledning, inte ett myndighetsbeslut. Byggnadsnämnden i kommunen
 * prövar altanen.
 *
 * Testas av scripts/test-kalkyl-bygglov-altan.mjs.
 */

/** Ligger tomten inom detaljplan? "Vet inte" ger svaret för båda fallen. */
export type Detaljplan = 'ja' | 'nej' | 'vet-inte';
/** Tak över altanen: inget, ett skärmtak utan väggar, eller väggar och glas. */
export type Tak = 'nej' | 'skarmtak' | 'vaggar';
export type Vardefullt = 'ja' | 'nej' | 'vet-inte';

/** Svaret i stort format. */
export type Svar = 'nej' | 'granne' | 'kanske' | 'ja';

/**
 * Vad en enskild regel betyder. "granne" är regeln när ett skärmtak eller en
 * inglasning gör altanen till en tillbyggnad närmare tomtgränsen än 4,5 m: då
 * krävs grannens skriftliga medgivande (plan- och bygglagen 9 kap. 34 § 1 och
 * 35 § första stycket 3), annars bygglov. Den kräver inget bygglov i sig och
 * lyfter därför inte svaret. En altan utan tak står inte i 34 § och får aldrig
 * "granne" (prop. 2024/25:169 s. 162).
 */
export type Utfall = 'nej' | 'granne' | 'kanske' | 'ja';

export interface Regel {
  utfall: Utfall;
  /** Vad regeln säger om just den här altanen, i löptext. */
  text: string;
  /** Paragrafen eller källan bakom regeln. */
  lagrum: string;
}

export interface Bedomning {
  /** "Inom detaljplan" eller "Utanför detaljplan". */
  fall: string;
  svar: Svar;
  regler: Regel[];
}

export interface BygglovAltanIndata {
  /** Ligger tomten inom detaljplan? */
  detaljplan: Detaljplan;
  /** Altangolvets höjd över marken där den är som högst, i meter. */
  hojdM: number;
  /** Avstånd från altanen till närmaste byggnad, i meter. */
  avstandByggnadM: number;
  /** Avstånd från altanen till tomtgränsen, i meter. */
  avstandGransM: number;
  /** Tak över altanen. */
  tak: Tak;
  /** Altanen ligger ovanpå ett garage eller en annan byggnad. */
  paTak: boolean;
  /** Altanens yta i kvadratmeter. */
  ytaKvm: number;
  /** Är huset eller området utpekat som särskilt värdefullt? */
  vardefullt: Vardefullt;
}

export type BygglovAltanResultat =
  | {
      status: 'ok';
      /** Svaret i stort format, sammanvägt av alla regler som slog in. */
      svar: Svar;
      /** Samma svar som rubrik: "Nej, inget bygglov" och så vidare. */
      svarRubrik: string;
      /** En bedömning, eller två när läsaren inte vet om tomten ligger inom plan. */
      bedomningar: Bedomning[];
      /** Sant när de två fallen ger olika svar. */
      olikaFall: boolean;
      /**
       * Sant när någon bedömning har en regel med utfallet "granne": altanen har
       * skärmtak eller inglasning, är en lovfri tillbyggnad och står närmare
       * gränsen än 4,5 m. Inte längre bara avståndet; en altan utan tak kräver
       * inget medgivande (plan- och bygglagen 9 kap. 34 §, prop. 2024/25:169 s. 162).
       */
      kravGrannmedgivande: boolean;
      /** Byggsanktionsavgiften i kronor om altanen byggs utan lov. */
      avgiftKr: number;
      /** Grundbeloppet, alltså ett kvarts prisbasbelopp. */
      avgiftGrundKr: number;
      /** Tillägget för ytan. */
      avgiftTillaggKr: number;
      /** Avgiften nedsatt till hälften. */
      avgiftHalvKr: number;
      /** Avgiften nedsatt till en fjärdedel. */
      avgiftFjardedelKr: number;
      /** Råden som gäller just den här altanen. */
      gorInteDetHar: string[];
    }
  | { status: 'ogiltig'; fel: Partial<Record<keyof BygglovAltanIndata, string>> };

/*
 * Konstanter. Lagrum eller källa i kommentaren över varje.
 */

/**
 * Höjdgränserna inom detaljplan. Bygglov krävs för en altan som får en höjd
 * över marken som överstiger 1,8 m och placeras inom 3,6 m från en byggnad,
 * eller som överstiger 1,2 m och inte placeras inom 3,6 m från en byggnad.
 * Lagrum: plan- och bygglagen 9 kap. 19 §, i lydelse efter lag 2025:974.
 */
export const HOJD_NARA_BYGGNAD_M = 1.8;
export const HOJD_LANGRE_BORT_M = 1.2;
export const NARA_BYGGNAD_M = 3.6;

/**
 * Avståndet till tomtgränsen. Närmare gränsen än 4,5 m krävs bygglov för en
 * annars lovfri byggnad, tillbyggnad eller mur och plank över 1,2 m, om inte
 * de berörda grannarna skriftligen har medgett åtgärden. Altan står inte i
 * uppräkningen, så för en altan utan tak gäller det inte (prop. 2024/25:169
 * s. 162); med skärmtak eller inglasning är altanen en tillbyggnad och då
 * gäller det. Jämförelsen är `<`. Samma konstant används av
 * src/lib/kalkyl/grannemedgivande.ts.
 * Lagrum: plan- och bygglagen 9 kap. 34 och 35 §§.
 */
export const GRANS_M = 4.5;

/**
 * Lovfri tillbyggnad av en byggnad som inte är en komplementbyggnad eller ett
 * komplementbostadshus: högst 30,0 kvm bruttoarea eller öppenarea, sammanlagt
 * med andra lovfria tillbyggnader på huset, och inte högre än husets taknock.
 * Gäller alltså inte bara en- eller tvåbostadshus. Den gamla regeln om
 * skärmtak på 15 kvm är borta ur lagen. Lagrum: plan- och bygglagen 9 kap. 10 §.
 */
export const LOVFRI_TILLBYGGNAD_KVM = 30;

/**
 * Prisbasbeloppet för 2026, som regeringen fastställde i september 2025.
 * Källa: regeringens pressmeddelande, samma tal som Uppsala kommun anger.
 */
export const PRISBASBELOPP_KR = 59200;

/**
 * Byggsanktionsavgiften för att påbörja en lovpliktig altan utan startbesked:
 * 0,25 prisbasbelopp plus 0,005 prisbasbelopp per kvadratmeter berörd area.
 * Lagrum: plan- och byggförordningen 9 kap. 12 § 3.
 */
export const AVGIFT_GRUND_PBB = 0.25;
export const AVGIFT_PER_KVM_PBB = 0.005;

/** Reglerna nedan gäller sedan lag 2025:974 trädde i kraft. */
export const REGLERNA_GALLER_FRAN = '1 december 2025';

/**
 * Rådet som står under varje svar. Lagrum: plan- och bygglagen 9 kap. 2 §,
 * ytterligare bestämmelser om lov kan finnas i en detaljplan eller i
 * områdesbestämmelser.
 */
export const RAD_KOMMUNEN =
  'Byggnadsnämnden prövar just din altan, och detaljplanen eller områdesbestämmelserna kan lägga till lovplikt utöver lagen. Är du osäker kostar ett mejl till bygglovsavdelningen ingenting.';

export const SVAR_RUBRIK: Record<Svar, string> = {
  nej: 'Nej, du slipper bygglov',
  ja: 'Ja, du behöver bygglov',
  kanske: 'Troligen, fråga kommunen',
  /*
   * Svaret när en regel säger granne och ingen säger ja eller kanske (specen 12.1).
   * Sidan delar rubriken på ', ' i ett stort ord och en rest. Det stora ordet får
   * inte ensamt kunna läsas som att bygget är fritt; villkoret, grannens
   * underskrift, står i ordet eller direkt efter det.
   */
  granne: 'Grannens ja, annars bygglov',
};

export const DETALJPLAN_VAL: { varde: Detaljplan; etikett: string }[] = [
  { varde: 'ja', etikett: 'Ja' },
  { varde: 'nej', etikett: 'Nej' },
  { varde: 'vet-inte', etikett: 'Vet inte' },
];

export const TAK_VAL: { varde: Tak; etikett: string; kort: string }[] = [
  { varde: 'nej', etikett: 'Inget tak, altanen är öppen', kort: 'Inget tak' },
  { varde: 'skarmtak', etikett: 'Skärmtak utan väggar', kort: 'Skärmtak' },
  { varde: 'vaggar', etikett: 'Inglasning eller väggar', kort: 'Inglasning' },
];

export const VARDEFULLT_VAL: { varde: Vardefullt; etikett: string }[] = [
  { varde: 'ja', etikett: 'Ja' },
  { varde: 'nej', etikett: 'Nej' },
  { varde: 'vet-inte', etikett: 'Vet inte' },
];

/**
 * Standardvärdena. En vanlig altan på plintar intill huset: golvet knappt en
 * meter över marken, altanen står mot fasaden, tomtgränsen ligger på det
 * avstånd som lagen räknar med, och ytan är den som avgiftstabellen i artikeln
 * börjar med.
 */
export const STANDARD: BygglovAltanIndata = {
  detaljplan: 'ja',
  hojdM: 0.8,
  avstandByggnadM: 0,
  avstandGransM: 4.5,
  tak: 'nej',
  paTak: false,
  ytaKvm: 20,
  vardefullt: 'nej',
};

export const GRANSER = {
  hojdM: [0, 10],
  avstandByggnadM: [0, 100],
  avstandGransM: [0, 200],
  ytaKvm: [1, 500],
} as const;

/** Hårt mellanslag, så att talet aldrig skiljs från sin enhet vid radbryt. */
const HART = ' ';

/** "1,8 m" med hårt mellanslag mellan talet och enheten. */
function matt(n: number, enhet: string): string {
  const tal = Number.isInteger(n) ? String(n) : String(n).replace('.', ',');
  return `${tal}${HART}${enhet}`;
}

/** Decimalkomma accepteras: '0,8' blir 0.8. Tomt eller skräp ger NaN. */
function tillTal(v: string | null): number {
  if (v === null) return NaN;
  const rensad = v.trim().replace(',', '.');
  if (rensad === '') return NaN;
  return Number(rensad);
}

/**
 * Byggsanktionsavgiften i kronor, avrundad till hela kronor. Grundbeloppet är
 * ett kvarts prisbasbelopp och tillägget en halv hundradel per kvadratmeter.
 * Lagrum: plan- och byggförordningen 9 kap. 12 § 3.
 */
export function sanktionsavgift(ytaKvm: number): {
  grundKr: number;
  tillaggKr: number;
  summaKr: number;
} {
  const grundKr = Math.round(AVGIFT_GRUND_PBB * PRISBASBELOPP_KR);
  const tillaggKr = Math.round(AVGIFT_PER_KVM_PBB * PRISBASBELOPP_KR * ytaKvm);
  return { grundKr, tillaggKr, summaKr: grundKr + tillaggKr };
}

/**
 * Svaret ur reglerna, i fallande ordning: ett ja ger ja, annars ger ett kanske
 * kanske, annars ger ett granne granne, annars nej. Ett nej som bara gäller om
 * grannen skriver under är inget nej (specen 12.1).
 */
function sammanvag(regler: Regel[]): Svar {
  const har = (u: Utfall) => regler.some((r) => r.utfall === u);
  if (har('ja')) return 'ja';
  if (har('kanske')) return 'kanske';
  if (har('granne')) return 'granne';
  return 'nej';
}

/**
 * Höjdregeln inom detaljplan. Bygglov krävs över 1,8 m inom 3,6 m från en
 * byggnad, och över 1,2 m längre bort. Lagen säger "en byggnad", inte
 * bostadshuset, så garaget och förrådet räknas.
 * Lagrum: plan- och bygglagen 9 kap. 19 §.
 */
function hojdRegel(i: BygglovAltanIndata): Regel {
  const nara = i.avstandByggnadM <= NARA_BYGGNAD_M;
  const gransM = nara ? HOJD_NARA_BYGGNAD_M : HOJD_LANGRE_BORT_M;
  const over = i.hojdM > gransM;
  const plats = nara
    ? `Altanen står inom ${matt(NARA_BYGGNAD_M, 'm')} från en byggnad.`
    : `Altanen står längre bort än ${matt(NARA_BYGGNAD_M, 'm')} från närmaste byggnad.`;
  const dom = over
    ? `Där går gränsen vid ${matt(gransM, 'm')}, och din altan är högre.`
    : `Där går gränsen vid ${matt(gransM, 'm')}, och din altan håller sig under.`;
  return {
    utfall: over ? 'ja' : 'nej',
    text: `Golvet ligger ${matt(i.hojdM, 'm')} över marken där altanen är som högst. ${plats} ${dom}`,
    lagrum: 'Plan- och bygglagen 9 kap. 19 §',
  };
}

/**
 * Utanför detaljplan finns ingen måttregel för altan. Kvar står kravet på
 * anpassning till omgivningen och förbudet mot betydande olägenhet.
 * Källa: Boverket, mur, plank, altan och annat.
 */
function utanforPlanRegel(): Regel {
  return {
    utfall: 'nej',
    text: 'Tomten ligger utanför detaljplan. Då finns det inga mått att hålla sig till för en altan, varken för höjden eller för avståndet till huset, skriver Boverket. Kvar står kravet att altanen ska passa in i omgivningen och inte störa grannarna för mycket, det som lagen kallar betydande olägenhet.',
    lagrum: 'Boverket. Måttregeln i 9 kap. 19 § gäller bara inom detaljplan',
  };
}

/**
 * Altan ovanpå ett garage eller en annan byggnad. Volymen växer inte, så det
 * är ingen tillbyggnad, men Mark- och miljööverdomstolen har bedömt en altan
 * på tak som en ändring av fasaden, och golvet ligger nästan alltid högre än
 * höjdgränsen. Lagrum: plan- och bygglagen 9 kap. 19 § och MÖD mål P 5608-13.
 */
function takaltanRegel(planlagt: boolean): Regel {
  if (planlagt) {
    return {
      utfall: 'ja',
      text: `Altanen ligger ovanpå en byggnad. Golvet hamnar då nästan alltid högre än ${matt(HOJD_NARA_BYGGNAD_M, 'm')} över marken. Landets högsta instans i bygglovsmål, Mark- och miljööverdomstolen, har dessutom sett en altan på tak som en ändring av fasaden. Räkna med bygglov.`,
      lagrum: 'Plan- och bygglagen 9 kap. 19 § och Mark- och miljööverdomstolen, mål P 5608-13',
    };
  }
  return {
    utfall: 'kanske',
    text: 'Altanen ligger ovanpå en byggnad, och tomten ligger utanför detaljplan. Måttreglerna gäller inte där, men altanen ändrar byggnaden, och domstol har sett en altan på tak som en ändring av fasaden. Fråga kommunen innan du bygger.',
    lagrum: 'Mark- och miljööverdomstolen, mål P 5608-13',
  };
}

/**
 * Tak över altanen. Väggar eller inglasning gör altanen till en tillbyggnad,
 * och ett skärmtak räknas som öppenarea, vilket är samma sak i lagens mening.
 * Gränsen går vid 30,0 kvm för en tillbyggnad av en byggnad som inte är en
 * komplementbyggnad eller ett komplementbostadshus, vilket hus det än är.
 * Lagrum: plan- och bygglagen 9 kap. 10 §.
 */
function takRegel(i: BygglovAltanIndata): Regel | null {
  if (i.tak === 'nej') return null;
  const lovfri = i.ytaKvm <= LOVFRI_TILLBYGGNAD_KVM;
  const inledning =
    i.tak === 'vaggar'
      ? 'Väggar eller inglasning gör altanen till en tillbyggnad, för då växer husets volym.'
      : `Ett tak utan väggar räknas som yta under tak, och även det är en tillbyggnad. Den gamla regeln om skärmtak på ${matt(15, 'kvm')} finns inte kvar.`;
  const jamforelse = `Altanen är ${matt(i.ytaKvm, 'kvm')} och gränsen för en lovfri tillbyggnad går vid ${matt(LOVFRI_TILLBYGGNAD_KVM, 'kvm')}.`;
  const dom = lovfri
    ? 'Du håller dig under, så tillbyggnaden är lovfri.'
    : 'Du ligger över, och då krävs bygglov.';
  return {
    utfall: lovfri ? 'nej' : 'ja',
    text: `${inledning} ${jamforelse} ${dom}`,
    lagrum: 'Plan- och bygglagen 9 kap. 10 §',
  };
}

/**
 * Särskilt värdefull byggnad, anläggning eller område. Då krävs lov även för
 * det som annars är lovfritt. Lagrum: plan- och bygglagen 9 kap. 37 och 38 §§.
 */
function vardefulltRegel(i: BygglovAltanIndata): Regel | null {
  if (i.vardefullt === 'nej') return null;
  if (i.vardefullt === 'ja') {
    return {
      utfall: 'ja',
      text: 'Huset eller området är utpekat som särskilt värdefullt. Då krävs bygglov även för en altan som annars hade varit lovfri.',
      lagrum: 'Plan- och bygglagen 9 kap. 37 och 38 §§',
    };
  }
  return {
    utfall: 'kanske',
    text: 'Du vet inte om huset eller området är utpekat som särskilt värdefullt. Är det utpekat krävs bygglov även för en altan som annars hade varit lovfri. Mejla kommunens bygglovsavdelning, så får du svar på frågan.',
    lagrum: 'Plan- och bygglagen 9 kap. 37 och 38 §§',
  };
}

/**
 * Avståndet till tomtgränsen, närmare än 4,5 m. Tre fall:
 * - Utan tak står altanen inte i 9 kap. 34 §, och inget medgivande krävs
 *   (prop. 2024/25:169 s. 162). Regeln säger det, med utfallet "nej".
 * - Med skärmtak eller inglasning är altanen en tillbyggnad (9 kap. 10 §). Har
 *   en annan regel redan krävt lov (harJa) hjälper inget medgivande, och regeln
 *   utelämnas.
 * - Annars krävs grannens skriftliga medgivande, utfallet "granne"
 *   (9 kap. 34 § 1 och 35 § första stycket 3). Texten skiljer på fallet inom
 *   och utanför detaljplan (planlagt): utanför plan kan väghållaren för en
 *   allmän väg inte medge (prop. 2024/25:169 s. 170).
 * Specen: docs/briefer/spec-kalkyl-grannemedgivande-2026-09-28.md avsnitt 11.1 och 12.3.
 */
function gransRegel(i: BygglovAltanIndata, harJa: boolean, planlagt: boolean): Regel | null {
  if (i.avstandGransM >= GRANS_M) return null;
  if (i.tak === 'nej') {
    return {
      utfall: 'nej',
      text: `Altanen står ${matt(i.avstandGransM, 'm')} från tomtgränsen. Lagen räknar upp vad som kräver grannens medgivande närmare gränsen än ${matt(GRANS_M, 'm')}, och en altan utan tak finns inte med, så du behöver inget. Sätter du skärmtak eller glas över altanen, eller ett tätt plank som är högre än ${matt(1.2, 'm')} på den, krävs grannens skriftliga medgivande. Plankets höjd räknas från marken, så altanens höjd kommer med.`,
      lagrum: 'Plan- och bygglagen 9 kap. 34 § och prop. 2024/25:169 s. 162',
    };
  }
  if (harJa) return null;
  return {
    utfall: 'granne',
    text: planlagt
      ? /* Inom detaljplan: grannen skriver under, och mot en gata eller park huvudmannen. Säger inte att medgivandet är nytt, bara att skriftligheten är det (specen 12.3). */
        `Altanen står ${matt(i.avstandGransM, 'm')} från tomtgränsen, och med tak räknas den som en tillbyggnad. Närmare gränsen än ${matt(GRANS_M, 'm')} krävs då grannens skriftliga medgivande, annars bygglov. Går gränsen mot en gata eller en park är det huvudmannen för platsen som medger bygget.`
      : /* Utanför detaljplan: grannen skriver under, men mot en allmän väg blir det bygglov, eftersom väghållaren inte kan medge (prop. 2024/25:169 s. 170). */
        `Altanen står ${matt(i.avstandGransM, 'm')} från tomtgränsen, och med tak räknas den som en tillbyggnad. Närmare gränsen än ${matt(GRANS_M, 'm')} krävs då grannens skriftliga medgivande, annars bygglov. Går gränsen mot en allmän väg blir det bygglov ändå, eftersom väghållaren inte kan medge bygget.`,
    lagrum: 'Plan- och bygglagen 9 kap. 34 § 1 och 35 § första stycket 3',
  };
}

/** Bedömningen för ett av de två fallen, inom eller utanför detaljplan. */
export function bedomFall(planlagt: boolean, i: BygglovAltanIndata): Bedomning {
  const regler: Regel[] = [];

  if (i.paTak) {
    regler.push(takaltanRegel(planlagt));
  } else if (planlagt) {
    regler.push(hojdRegel(i));
  } else {
    regler.push(utanforPlanRegel());
  }

  const tak = takRegel(i);
  if (tak) regler.push(tak);

  const vardefullt = vardefulltRegel(i);
  if (vardefullt) regler.push(vardefullt);

  const grans = gransRegel(i, regler.some((r) => r.utfall === 'ja'), planlagt);
  if (grans) regler.push(grans);

  return {
    fall: planlagt ? 'Inom detaljplan' : 'Utanför detaljplan',
    svar: sammanvag(regler),
    regler,
  };
}

const GOR_INTE_BYGG_FORST =
  'Fråga kommunen innan du bygger, inte efteråt. Byggsanktionsavgiften i spalten får du betala ändå, och lovet söker du i efterhand. Beviljas inte lovet kan nämnden kräva att du river altanen.';

const GOR_INTE_BARA_GOLVET =
  'Hela ytan under taket räknas när du mäter tillbyggnaden, inte bara altanens golv. Gränsen gäller dessutom alla lovfria tillbyggnader på huset tillsammans, och tillbyggnaden får inte bli högre än husets taknock.';

/* Visas när kravGrannmedgivande är sant. */
const GOR_INTE_MUNTLIGT_JA =
  'Grannens ja måste stå på papper. Lagen kräver att medgivandet är skriftligt, ett krav som kom med lagändringen. Låt grannen skriva under en situationsplan, som är en enkel karta över tomten med tillbyggnaden och avståndet inritade. Har grannfastigheten flera ägare ska var och en av dem skriva under.';

const GOR_INTE_MAT_PA_OVANSIDAN =
  'Sluttar marken mäter du altanen där den är som högst, från marken upp till golvets ovansida. Måttet på tomtens höga sida säger ingenting.';

export function raknaBygglovAltan(i: BygglovAltanIndata): BygglovAltanResultat {
  const fel: Partial<Record<keyof BygglovAltanIndata, string>> = {};
  const [hojdMin, hojdMax] = GRANSER.hojdM;
  const [byggnadMin, byggnadMax] = GRANSER.avstandByggnadM;
  const [gransMin, gransMax] = GRANSER.avstandGransM;
  const [ytaMin, ytaMax] = GRANSER.ytaKvm;

  if (!Number.isFinite(i.hojdM) || i.hojdM < hojdMin || i.hojdM > hojdMax) {
    fel.hojdM = `Skriv altangolvets höjd över marken mellan ${hojdMin} och ${hojdMax} meter`;
  }
  if (!Number.isFinite(i.avstandByggnadM) || i.avstandByggnadM < byggnadMin || i.avstandByggnadM > byggnadMax) {
    fel.avstandByggnadM = `Skriv avståndet till närmaste byggnad mellan ${byggnadMin} och ${byggnadMax} meter`;
  }
  if (!Number.isFinite(i.avstandGransM) || i.avstandGransM < gransMin || i.avstandGransM > gransMax) {
    fel.avstandGransM = `Skriv avståndet till tomtgränsen mellan ${gransMin} och ${gransMax} meter`;
  }
  if (!Number.isFinite(i.ytaKvm) || i.ytaKvm < ytaMin || i.ytaKvm > ytaMax) {
    fel.ytaKvm = `Skriv altanens yta mellan ${ytaMin} och ${ytaMax} kvadratmeter`;
  }
  if (Object.keys(fel).length > 0) return { status: 'ogiltig', fel };

  const bedomningar: Bedomning[] =
    i.detaljplan === 'vet-inte'
      ? [bedomFall(true, i), bedomFall(false, i)]
      : [bedomFall(i.detaljplan === 'ja', i)];

  const forsta = bedomningar[0] as Bedomning;
  const olikaFall = bedomningar.length === 2 && bedomningar[0]!.svar !== bedomningar[1]!.svar;
  const svar: Svar = olikaFall ? 'kanske' : forsta.svar;

  const avgift = sanktionsavgift(i.ytaKvm);

  /* Grannens medgivande krävs bara när en regel i någon bedömning säger "granne" (specen 11.1 punkt 2). */
  const kravGrannmedgivande = bedomningar.some((b) => b.regler.some((r) => r.utfall === 'granne'));

  const gorInteDetHar: string[] = [GOR_INTE_BYGG_FORST];
  if (i.tak !== 'nej') gorInteDetHar.push(GOR_INTE_BARA_GOLVET);
  if (kravGrannmedgivande) gorInteDetHar.push(GOR_INTE_MUNTLIGT_JA);
  if (i.detaljplan !== 'nej' && !i.paTak) gorInteDetHar.push(GOR_INTE_MAT_PA_OVANSIDAN);

  return {
    status: 'ok',
    svar,
    svarRubrik: SVAR_RUBRIK[svar],
    bedomningar,
    olikaFall,
    kravGrannmedgivande,
    avgiftKr: avgift.summaKr,
    avgiftGrundKr: avgift.grundKr,
    avgiftTillaggKr: avgift.tillaggKr,
    avgiftHalvKr: Math.round(avgift.summaKr / 2),
    avgiftFjardedelKr: Math.round(avgift.summaKr / 4),
    gorInteDetHar,
  };
}

function arDetaljplan(v: string | null): v is Detaljplan {
  return v === 'ja' || v === 'nej' || v === 'vet-inte';
}

function arTak(v: string | null): v is Tak {
  return v === 'nej' || v === 'skarmtak' || v === 'vaggar';
}

/**
 * Läser adressen. Skräp i ett val faller tillbaka på standardvärdet, skräp i
 * ett tal blir NaN och ger ett fel på just det fältet.
 */
export function tolkaQuery(q: URLSearchParams): { indata: BygglovAltanIndata; harIndata: boolean } {
  const harIndata =
    q.has('plan') ||
    q.has('hojd') ||
    q.has('avstand') ||
    q.has('grans') ||
    q.has('tak') ||
    q.has('patak') ||
    q.has('yta') ||
    q.has('vardefullt');

  const raPlan = q.get('plan');
  const raTak = q.get('tak');
  const raVardefullt = q.get('vardefullt');
  const raPaTak = q.get('patak');

  return {
    harIndata,
    indata: {
      detaljplan: arDetaljplan(raPlan) ? raPlan : STANDARD.detaljplan,
      hojdM: q.has('hojd') ? tillTal(q.get('hojd')) : STANDARD.hojdM,
      avstandByggnadM: q.has('avstand') ? tillTal(q.get('avstand')) : STANDARD.avstandByggnadM,
      avstandGransM: q.has('grans') ? tillTal(q.get('grans')) : STANDARD.avstandGransM,
      tak: arTak(raTak) ? raTak : STANDARD.tak,
      paTak: raPaTak === null ? STANDARD.paTak : raPaTak.trim().toLowerCase() === 'ja',
      ytaKvm: q.has('yta') ? tillTal(q.get('yta')) : STANDARD.ytaKvm,
      vardefullt: arDetaljplan(raVardefullt) ? (raVardefullt as Vardefullt) : STANDARD.vardefullt,
    },
  };
}
