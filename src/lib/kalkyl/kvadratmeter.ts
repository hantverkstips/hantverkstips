/**
 * Kvadratmeter och åtgång. Räknar ut golv, väggar netto efter avdrag och tak ur
 * ett rums mått, och därefter hur mycket färg, tapet, parkett eller klinker som
 * går åt på ytan. Ren modul utan importer från Astro, testbar utan bygge. Sidan
 * /rakna/kvadratmeter/ skickar formuläret som GET och räknar på servern, så
 * ingen rad av den här filen når klienten.
 *
 * Två saker skiljer den här räknaren från marknadens: avdragen för dörr och
 * fönster görs på riktigt, och varje åtgångstal har en källa. Varje konstant
 * står namngiven nedan med källa eller ANTAGANDE i kommentaren, och underlaget
 * med hämtningsdatum och länk per rad ligger i
 * docs/briefer/underlag-kalkyl-kvadratmeter-2026-09-17.md.
 *
 * Testas av scripts/test-kalkyl-kvadratmeter.mjs mot räkneexemplen i underlaget.
 */

export type Raknar = 'golv' | 'vaggar' | 'tak' | 'alla';
export type Material = 'inget' | 'vaggfarg' | 'takfarg' | 'tapet' | 'parkett' | 'klinker';
export type Laggning = 'rak' | 'diagonal';

export interface KvadratmeterIndata {
  /** Rummets längd i meter. */
  langdM: number;
  /** Rummets bredd i meter. */
  breddM: number;
  /** Takhöjden i meter. */
  takhojdM: number;
  /** Antal dörröppningar som ska dras av från väggytan. */
  dorrar: number;
  /** Dörröppningens bredd i meter. */
  dorrBreddM: number;
  /** Dörröppningens höjd i meter. */
  dorrHojdM: number;
  /** Antal fönster som ska dras av från väggytan. */
  fonster: number;
  /** Fönstrets bredd i meter. */
  fonsterBreddM: number;
  /** Fönstrets höjd i meter. */
  fonsterHojdM: number;
  /** Vilken yta det stora talet ska visa. */
  raknar: Raknar;
  /** Vad ytan ska täckas med. `inget` ger bara kvadratmeter. */
  material: Material;
  /** Antal strykningar när materialet är färg. */
  strykningar: number;
  /** Rak eller diagonal läggning när materialet är golv eller klinker. */
  laggning: Laggning;
  /** Kvadratmeter per paket golv eller kakel. Null när läsaren lämnar fältet tomt. */
  paketKvm: number | null;
}

/** En burk i inköpslistan: storleken i liter och hur många av den. */
export interface Burk {
  literPerBurk: number;
  antal: number;
}

export interface Fargsvar {
  /** Ytan färgen ska täcka i kvadratmeter. */
  ytaKvm: number;
  /** Ytans namn i klartext, så att sidan aldrig behöver gissa. */
  ytaNamn: string;
  /** Liter räknat, alltså yta gånger strykningar delat med åtgången. */
  literRaknat: number;
  /** Burkarna som ger minst färg över. */
  burkar: Burk[];
  /** Liter du faktiskt bär hem. */
  literAttKopa: number;
  /** Liter grundfärg för en strykning på obehandlat underlag. */
  grundLiterRaknat: number;
  grundBurkar: Burk[];
  grundLiterAttKopa: number;
}

export interface Tapetsvar {
  /** Väggarnas omkrets minus dörrarnas bredd, alltså det som ska tapetseras. */
  vaderBreddM: number;
  /** Antal våder. */
  antalVader: number;
  /** Vådens längd med påslag, i meter. */
  vadLangdM: number;
  /** Hur många våder som går ur en rulle utan mönsterpassning. */
  vaderPerRulle: number;
  /** Antal rullar utan mönsterpassning. */
  rullar: number;
  /** Vådens längd uppåt till hel mönsterrapport. */
  vadLangdMonsterM: number;
  vaderPerRulleMonster: number;
  /** Antal rullar med mönsterpassning. */
  rullarMonster: number;
}

export interface Golvsvar {
  /** Golvytan i kvadratmeter. */
  ytaKvm: number;
  /** Spillpåslaget i procent. */
  spillProcent: number;
  /** Kvadratmeter att köpa, alltså golvytan med spillet pålagt. */
  kvmAttKopa: number;
  /** Kvadratmeter per paket, när läsaren angett det. */
  paketKvm: number | null;
  /** Antal paket, när paketstorleken är angiven. */
  antalPaket: number | null;
  /** Kvadratmeter i paketen, när paketstorleken är angiven. */
  kvmIPaketen: number | null;
}

export type KvadratmeterResultat =
  | {
      status: 'ok';
      /** Golvets yta i kvadratmeter. */
      golvKvm: number;
      /** Takets yta i kvadratmeter. Samma tal som golvet. */
      takKvm: number;
      /** Rummets omkrets i meter. */
      omkretsM: number;
      /** Väggytan före avdrag. */
      vaggarBruttoKvm: number;
      /** Avdraget för dörrarna. */
      avdragDorrKvm: number;
      /** Avdraget för fönstren. */
      avdragFonsterKvm: number;
      /** De två avdragen tillsammans. */
      avdragKvm: number;
      /** Väggytan efter avdrag, alltså den yta som ska målas eller tapetseras. */
      vaggarNettoKvm: number;
      /** Talet som ska stå stort, efter vad läsaren valt att räkna. */
      valdKvm: number;
      /** Vad det stora talet är, i klartext. */
      valdNamn: string;
      /** Färgsvaret, när materialet är vägg- eller takfärg. */
      farg: Fargsvar | null;
      /** Tapetsvaret, när materialet är tapet. */
      tapet: Tapetsvar | null;
      /** Golvsvaret, när materialet är parkett, laminat, kakel eller klinker. */
      golv: Golvsvar | null;
      /** Råden som gäller just den här räkningen. Tom lista när inget gäller. */
      gorInteDetHar: string[];
    }
  | { status: 'ogiltig'; fel: Partial<Record<keyof KvadratmeterIndata, string>> };

/*
 * Konstanter. Källa eller antagande i kommentaren över varje. Underlaget är
 * docs/briefer/underlag-kalkyl-kvadratmeter-2026-09-17.md.
 */

/**
 * Väggfärgens åtgång i kvadratmeter per liter och strykning. Källa: Beckers
 * Scotte 7 anger 8 till 10 m²/l, Nordsjö Ambiance Smooth Silk 8 till 10, och
 * Alcro Milltex 7 Matt Täckfärg 8. Kalkylatorn räknar med den nedre kanten,
 * alltså det tal alla tre tillverkarna når. Räknar vi med tio blir svaret för
 * lågt för den som målar en spacklad vägg med rulle.
 */
export const FARG_KVM_PER_LITER = 8;

/**
 * Takfärgens åtgång per liter och strykning. Källa: Beckers Scotte R2 Takfärg
 * anger 8 m²/l och Alcro Milltex 2 RF Helmatt Takfärg samma tal.
 */
export const TAKFARG_KVM_PER_LITER = 8;

/**
 * Grundfärgens åtgång per liter. Källa: Beckers Scotte Grund anger 6 till 8
 * m²/l, mot täckfärgens 8 till 10. Grundmålning drar alltså mer, och sju är
 * mitten av tillverkarens intervall. Både Beckers och Nordsjö anger att
 * obehandlat underlag ska grundmålas en gång innan täckfärgen.
 */
export const GRUNDFARG_KVM_PER_LITER = 7;

/**
 * Burkstorlekarna i liter. ANTAGANDE: det är de storlekar inomhusfärg säljs i
 * hos de svenska kedjorna. Vissa serier har också 3 och 5 liter.
 */
export const BURKAR_LITER = [1, 2.5, 10] as const;

/**
 * Tapetrullens mått i meter. Källa: Boråstapeters tapetkalkylator anger
 * rullbredd 53 cm och rullängd 10,05 m som det normala, och Sandberg uppger
 * samma mått för sina traditionella rullar.
 */
export const TAPETRULLE_BREDD_M = 0.53;
export const TAPETRULLE_LANGD_M = 10.05;

/**
 * Påslag per våd i meter. ANTAGANDE: fem centimeter i topp och botten för kap.
 * Talet ger den kända tumregeln, alltså fyra våder per rulle vid 2,4 m takhöjd
 * utan mönsterpassning och tre med.
 */
export const TAPET_PASLAG_M = 0.1;

/**
 * Mönsterrapporten i meter, alltså höjden på mönsterbilden innan den upprepas.
 * ANTAGANDE: Boråstapeters kollektioner ligger mellan 17,67 och 64 cm, och
 * 53 cm är en vanlig rapport eftersom den är lika med rullens bredd. Läsaren
 * ska läsa av sin egen rapport på rullen, och sidan säger det.
 */
export const TAPET_RAPPORT_M = 0.53;

/**
 * Spill på parkett och laminat. Källa: Kährs anger cirka 5 procent, och 7 till
 * 10 procent vid komplexa mönster som fiskben, chevron och trappor. Pergo säger
 * samma sak för laminat: 5 procent i ett vanligt rum och 10 i ett litet rum med
 * många svåra ytor. Kalkylatorn tar den övre kanten på det diagonala, eftersom
 * varje diagonal rad kapas i båda ändar.
 */
export const SPILL_GOLV: Record<Laggning, number> = { rak: 0.05, diagonal: 0.1 };

/**
 * Spill på kakel och klinker. Källa: Kakelgiganten anger 10 procent som vanlig
 * rekommendation och 15 procent vid mönster eller diagonal läggning. GDS anger
 * också 10 procent.
 */
export const SPILL_KLINKER: Record<Laggning, number> = { rak: 0.1, diagonal: 0.15 };

/**
 * Dörröppningens mått i meter. Källa: Swedoors måttabell för innerdörrar. Modul
 * 9x21, den vanligaste innerdörren, har öppningsmått 910 × 2110 mm. Kalkylatorn
 * räknar med modulmåttet avrundat, alltså 1,89 kvm per dörr, och den marginalen
 * ligger åt rätt håll: färgen räcker hellre över än under.
 */
export const DORR_BREDD_M = 0.9;
export const DORR_HOJD_M = 2.1;

/**
 * Fönstrets mått i meter. ANTAGANDE. Elitfönster förklarar modulsystemet, alltså
 * att modulmåttet anges i decimeter och att karmen är 20 mm mindre än hålet i
 * väggen, så ett fönster med modul 12x12 sitter i ett hål på 1200 × 1200 mm.
 * Att just det måttet är det vanligaste i svenska bostäder är däremot vårt
 * antagande; ingen tillverkare publicerar den statistiken.
 */
export const FONSTER_BREDD_M = 1.2;
export const FONSTER_HOJD_M = 1.2;

export const RAKNAR_VAL: { varde: Raknar; etikett: string }[] = [
  { varde: 'golv', etikett: 'Golvet' },
  { varde: 'vaggar', etikett: 'Väggarna' },
  { varde: 'tak', etikett: 'Taket' },
  { varde: 'alla', etikett: 'Alla tre' },
];

export const MATERIAL_VAL: { varde: Material; etikett: string }[] = [
  { varde: 'inget', etikett: 'Bara kvadratmeter' },
  { varde: 'vaggfarg', etikett: 'Väggfärg' },
  { varde: 'takfarg', etikett: 'Takfärg' },
  { varde: 'tapet', etikett: 'Tapet' },
  { varde: 'parkett', etikett: 'Parkett eller laminat' },
  { varde: 'klinker', etikett: 'Klinker eller kakel' },
];

export const LAGGNINGAR: { varde: Laggning; etikett: string }[] = [
  { varde: 'rak', etikett: 'Rak läggning' },
  { varde: 'diagonal', etikett: 'Diagonal läggning' },
];

/** Standardrummet: 4 × 3 m, takhöjd 2,5 m, en dörr och ett fönster. */
export const STANDARD: KvadratmeterIndata = {
  langdM: 4,
  breddM: 3,
  takhojdM: 2.5,
  dorrar: 1,
  dorrBreddM: DORR_BREDD_M,
  dorrHojdM: DORR_HOJD_M,
  fonster: 1,
  fonsterBreddM: FONSTER_BREDD_M,
  fonsterHojdM: FONSTER_HOJD_M,
  raknar: 'alla',
  material: 'inget',
  strykningar: 2,
  laggning: 'rak',
  paketKvm: null,
};

export const GRANSER = {
  langdM: [0.5, 50],
  breddM: [0.5, 50],
  takhojdM: [1.5, 6],
  dorrar: [0, 20],
  fonster: [0, 20],
  dorrBreddM: [0.3, 5],
  dorrHojdM: [1, 4],
  fonsterBreddM: [0.2, 6],
  fonsterHojdM: [0.2, 4],
  strykningar: [1, 5],
  paketKvm: [0.1, 20],
} as const;

/*
 * Råden skrivs enligt docs/STILGUIDE.md: högst ett tal per mening, och två bara
 * när de två talen är jämförelsen.
 */

const GOR_INTE_EXAKT_YTAN =
  'Köp inte exakt den yta du räknat fram. Talet är rummets mått, inte ditt kap, och varje hörn och varje kapad rad äter av högen. Spillpåslaget i svaret är det minsta du ska lägga på.';

const GOR_INTE_UTAN_LAGNINGSRESERV =
  'Lämna inte butiken utan några brädor över. Spricker en bricka om tre år går den inte att byta mot en bräda ur en annan tillverkningssats, för nyansen och ytbehandlingen har hunnit ändras. Lägg det som blir kvar på vinden i stället för att räkna hem exakt.';

const GOR_INTE_UTAN_PLATTRESERV =
  'Lämna inte butiken utan några plattor över. Knäcks en platta när en gryta faller går den inte att ersätta med samma sort om fem år, för då är serien utbytt eller färgsatsen har glidit. Lägg undan en kartong i stället för att räkna hem exakt.';

const GOR_INTE_BLANDA_PARTIER =
  'Blanda inte två färgpartier på samma vägg. Burkar med olika satsnummer kan skilja sig i nyans, och skillnaden syns först när den andra burken möter den första mitt på väggen i dagsljus. Köp allt du behöver på en gång, och är ytan stor rör du ihop burkarna i en hink innan du börjar.';

const GOR_INTE_EN_STRYKNING =
  'Nöj dig inte med en strykning på en vägg som byter kulör. Täckfärgen är gjord för att ligga i två skikt, och tillverkarnas tal för hur långt den räcker gäller per strykning. En enda omgång ser klar ut i lampljus och randig i motljus.';

const GOR_INTE_UTAN_AVDRAG =
  'Räkna inte bort dörren och fönstret i huvudet efteråt. Du har varken dörr eller fönster ifyllt, så väggytan här är hela omkretsen gånger höjden. Har rummet en dörr fyller du i den, annars köper du färg till en yta som inte finns.';

/** Decimalkomma accepteras: '2,5' blir 2.5. Tomt eller skräp ger NaN. */
function tillTal(v: string | null): number {
  if (v === null) return NaN;
  const rensad = v.trim().replace(',', '.');
  if (rensad === '') return NaN;
  return Number(rensad);
}

/** Avrundning till två decimaler, så att 31,669999999 blir 31,67. */
function tvaDecimaler(n: number): number {
  return Math.round(n * 100) / 100;
}

/**
 * Största överskott en burkkombination får ge, som andel av behovet.
 * ANTAGANDE, och koordinatorns beslut 2026-09-17. Gränsen sattes först till 25
 * procent, men standardrummets väggar behöver 7,92 liter och en tiolitersburk
 * lämnar 2,08 liter över, alltså 26 procent. Gränsen hade stängt ute just det
 * fall regeln finns till för, och den är därför 30 procent.
 */
export const OVERSKOTT_GRANS = 0.3;

/**
 * Burkarna att köpa. Sökningen är uttömmande över de tre storlekarna, och
 * ordningen mellan två kombinationer är koordinatorns beslut 2026-09-17.
 *
 * Bland de kombinationer som lämnar högst OVERSKOTT_GRANS över vinner den med
 * färst burkar, och vid lika antal den som lämnar minst över. Färre burkar är
 * billigare per liter, lättare att bära och ett partinummer mindre att hålla
 * isär på samma vägg. Finns ingen kombination inom gränsen vinner den med minst
 * liter totalt, så att ett litet behov aldrig blir en tiolitersburk.
 *
 * Knappt åtta liter blir därför en burk om tio, medan tre liter blir en burk om
 * 2,5 plus en literburk: tiolitersburken hade lämnat sju liter över.
 */
export function bastaBurkar(liter: number): { burkar: Burk[]; totalt: number } {
  if (!(liter > 0)) return { burkar: [], totalt: 0 };
  const [sma, mellan, stora] = BURKAR_LITER;
  const maxStora = Math.ceil(liter / stora);
  const maxMellan = Math.ceil(liter / mellan);
  /* Literburkarna får gå högre än de andra: i det smala spannet strax över en
     burkstorlek är flera literburkar den enda kombinationen inom gränsen. */
  const maxSma = Math.min(Math.ceil(liter / sma), 20);
  const tak = liter * (1 + OVERSKOTT_GRANS);

  type Kandidat = { burkar: Burk[]; totalt: number; antal: number };
  let inomGransen: Kandidat | null = null;
  let minstTotalt: Kandidat | null = null;

  for (let antalStora = 0; antalStora <= maxStora; antalStora++) {
    for (let antalMellan = 0; antalMellan <= maxMellan; antalMellan++) {
      for (let antalSma = 0; antalSma <= maxSma; antalSma++) {
        const totalt = antalStora * stora + antalMellan * mellan + antalSma * sma;
        if (totalt + 1e-9 < liter) continue;
        const antal = antalStora + antalMellan + antalSma;
        if (antal === 0) continue;

        const kandidat = (): Kandidat => {
          const burkar: Burk[] = [];
          if (antalStora > 0) burkar.push({ literPerBurk: stora, antal: antalStora });
          if (antalMellan > 0) burkar.push({ literPerBurk: mellan, antal: antalMellan });
          if (antalSma > 0) burkar.push({ literPerBurk: sma, antal: antalSma });
          return { burkar, totalt, antal };
        };

        if (totalt <= tak + 1e-9) {
          const battre =
            inomGransen === null ||
            antal < inomGransen.antal ||
            (antal === inomGransen.antal && totalt < inomGransen.totalt - 1e-9);
          if (battre) inomGransen = kandidat();
        }

        const billigare =
          minstTotalt === null ||
          totalt < minstTotalt.totalt - 1e-9 ||
          (Math.abs(totalt - minstTotalt.totalt) < 1e-9 && antal < minstTotalt.antal);
        if (billigare) minstTotalt = kandidat();
      }
    }
  }

  const bast: Kandidat | null = inomGransen ?? minstTotalt;
  if (bast === null) return { burkar: [{ literPerBurk: sma, antal: 1 }], totalt: sma };
  return { burkar: bast.burkar, totalt: tvaDecimaler(bast.totalt) };
}

function arRaknar(v: string | null): v is Raknar {
  return v === 'golv' || v === 'vaggar' || v === 'tak' || v === 'alla';
}

function arMaterial(v: string | null): v is Material {
  return (
    v === 'inget' || v === 'vaggfarg' || v === 'takfarg' || v === 'tapet' || v === 'parkett' || v === 'klinker'
  );
}

/**
 * Ytan materialet ska täcka. Färg på vägg och tapet går på väggarna efter
 * avdrag, takfärg på taket, golv och klinker på golvet. Valet av vad som ska
 * räknas styr bara vilket tal som står stort; materialet väljer sin egen yta,
 * så att ett svar aldrig kan bli åtgång på fel yta.
 */
function ytaNamnFor(material: Material): string {
  if (material === 'takfarg') return 'taket';
  if (material === 'parkett' || material === 'klinker') return 'golvet';
  return 'väggarna efter avdrag';
}

/** Läser adressen. Skräp faller tillbaka på standardvärdet, inte på ett fel. */
export function tolkaQuery(q: URLSearchParams): { indata: KvadratmeterIndata; harIndata: boolean } {
  const nycklar = [
    'langd',
    'bredd',
    'takhojd',
    'dorrar',
    'dorrbredd',
    'dorrhojd',
    'fonster',
    'fonsterbredd',
    'fonsterhojd',
    'raknar',
    'material',
    'strykningar',
    'laggning',
    'paket',
  ];
  const harIndata = nycklar.some((n) => q.has(n));

  const raRaknar = q.get('raknar');
  const raMaterial = q.get('material');
  const material: Material = arMaterial(raMaterial) ? raMaterial : STANDARD.material;

  /* Utan ett eget val följer det stora talet materialet: den som ska måla taket
     vill se takets kvadratmeter först, inte rummets alla tre ytor. */
  const raknarStandard: Raknar =
    material === 'takfarg'
      ? 'tak'
      : material === 'parkett' || material === 'klinker'
        ? 'golv'
        : material === 'vaggfarg' || material === 'tapet'
          ? 'vaggar'
          : STANDARD.raknar;
  const raknar: Raknar = arRaknar(raRaknar) ? raRaknar : raknarStandard;

  const laggning: Laggning = q.get('laggning') === 'diagonal' ? 'diagonal' : 'rak';
  const raPaket = q.get('paket');
  const paketKvm = raPaket === null || raPaket.trim() === '' ? null : tillTal(raPaket);

  const las = (nyckel: string, standardVarde: number) =>
    q.has(nyckel) ? tillTal(q.get(nyckel)) : standardVarde;

  return {
    harIndata,
    indata: {
      langdM: las('langd', STANDARD.langdM),
      breddM: las('bredd', STANDARD.breddM),
      takhojdM: las('takhojd', STANDARD.takhojdM),
      dorrar: las('dorrar', STANDARD.dorrar),
      dorrBreddM: las('dorrbredd', STANDARD.dorrBreddM),
      dorrHojdM: las('dorrhojd', STANDARD.dorrHojdM),
      fonster: las('fonster', STANDARD.fonster),
      fonsterBreddM: las('fonsterbredd', STANDARD.fonsterBreddM),
      fonsterHojdM: las('fonsterhojd', STANDARD.fonsterHojdM),
      raknar,
      material,
      strykningar: las('strykningar', STANDARD.strykningar),
      laggning,
      paketKvm,
    },
  };
}

export function raknaKvadratmeter(i: KvadratmeterIndata): KvadratmeterResultat {
  const fel: Partial<Record<keyof KvadratmeterIndata, string>> = {};
  const inom = (varde: number, granser: readonly [number, number]) =>
    Number.isFinite(varde) && varde >= granser[0] && varde <= granser[1];
  const komma = (n: number) => String(n).replace('.', ',');

  if (!inom(i.langdM, GRANSER.langdM)) {
    fel.langdM = `Skriv rummets längd som ett tal mellan ${komma(GRANSER.langdM[0])} och ${GRANSER.langdM[1]} meter`;
  }
  if (!inom(i.breddM, GRANSER.breddM)) {
    fel.breddM = `Skriv rummets bredd som ett tal mellan ${komma(GRANSER.breddM[0])} och ${GRANSER.breddM[1]} meter`;
  }
  if (!inom(i.takhojdM, GRANSER.takhojdM)) {
    fel.takhojdM = `Skriv takhöjden som ett tal mellan ${komma(GRANSER.takhojdM[0])} och ${GRANSER.takhojdM[1]} meter`;
  }
  if (!inom(i.dorrar, GRANSER.dorrar) || !Number.isInteger(i.dorrar)) {
    fel.dorrar = `Skriv antalet dörrar som ett helt tal mellan ${GRANSER.dorrar[0]} och ${GRANSER.dorrar[1]}`;
  }
  if (!inom(i.fonster, GRANSER.fonster) || !Number.isInteger(i.fonster)) {
    fel.fonster = `Skriv antalet fönster som ett helt tal mellan ${GRANSER.fonster[0]} och ${GRANSER.fonster[1]}`;
  }
  if (!inom(i.dorrBreddM, GRANSER.dorrBreddM)) {
    fel.dorrBreddM = `Skriv dörrens bredd som ett tal mellan ${komma(GRANSER.dorrBreddM[0])} och ${GRANSER.dorrBreddM[1]} meter`;
  }
  if (!inom(i.dorrHojdM, GRANSER.dorrHojdM)) {
    fel.dorrHojdM = `Skriv dörrens höjd som ett tal mellan ${GRANSER.dorrHojdM[0]} och ${GRANSER.dorrHojdM[1]} meter`;
  }
  if (!inom(i.fonsterBreddM, GRANSER.fonsterBreddM)) {
    fel.fonsterBreddM = `Skriv fönstrets bredd som ett tal mellan ${komma(GRANSER.fonsterBreddM[0])} och ${GRANSER.fonsterBreddM[1]} meter`;
  }
  if (!inom(i.fonsterHojdM, GRANSER.fonsterHojdM)) {
    fel.fonsterHojdM = `Skriv fönstrets höjd som ett tal mellan ${komma(GRANSER.fonsterHojdM[0])} och ${GRANSER.fonsterHojdM[1]} meter`;
  }
  if (!inom(i.strykningar, GRANSER.strykningar) || !Number.isInteger(i.strykningar)) {
    fel.strykningar = `Skriv antalet strykningar som ett helt tal mellan ${GRANSER.strykningar[0]} och ${GRANSER.strykningar[1]}`;
  }
  if (i.paketKvm !== null && !inom(i.paketKvm, GRANSER.paketKvm)) {
    fel.paketKvm = `Skriv kvadratmeter per paket som ett tal mellan ${komma(GRANSER.paketKvm[0])} och ${GRANSER.paketKvm[1]}, eller lämna fältet tomt`;
  }
  if (Object.keys(fel).length > 0) return { status: 'ogiltig', fel };

  // Steg 1. Golvet och taket. Rummet räknas som en rektangel; en vinkel eller en
  // nisch delas upp i två rektanglar och räknas var för sig.
  const golvKvm = tvaDecimaler(i.langdM * i.breddM);
  const takKvm = golvKvm;

  // Steg 2. Väggarna före avdrag. Omkretsen gånger takhöjden.
  const omkretsM = tvaDecimaler(2 * (i.langdM + i.breddM));
  const vaggarBruttoKvm = tvaDecimaler(omkretsM * i.takhojdM);

  // Steg 3. Avdragen. Det här är steget marknadens räknare hoppar över.
  const avdragDorrKvm = tvaDecimaler(i.dorrar * i.dorrBreddM * i.dorrHojdM);
  const avdragFonsterKvm = tvaDecimaler(i.fonster * i.fonsterBreddM * i.fonsterHojdM);
  const avdragKvm = tvaDecimaler(avdragDorrKvm + avdragFonsterKvm);

  if (avdragKvm >= vaggarBruttoKvm) {
    return {
      status: 'ogiltig',
      fel: {
        dorrar: 'Dörrarna och fönstren tar upp hela väggytan, så något är fel. Kontrollera antalet och måtten',
        fonster: 'Dörrarna och fönstren tar upp hela väggytan, så något är fel. Kontrollera antalet och måtten',
      },
    };
  }

  const vaggarNettoKvm = tvaDecimaler(vaggarBruttoKvm - avdragKvm);

  // Steg 4. Talet som ska stå stort.
  const valdKvm =
    i.raknar === 'golv'
      ? golvKvm
      : i.raknar === 'vaggar'
        ? vaggarNettoKvm
        : i.raknar === 'tak'
          ? takKvm
          : tvaDecimaler(golvKvm + vaggarNettoKvm + takKvm);
  const valdNamn =
    i.raknar === 'golv'
      ? 'golv'
      : i.raknar === 'vaggar'
        ? 'vägg efter avdrag'
        : i.raknar === 'tak'
          ? 'tak'
          : 'golv, väggar och tak';

  // Steg 5. Åtgången. Materialet väljer sin egen yta, så att ett svar aldrig kan
  // bli åtgång på fel yta.
  let farg: Fargsvar | null = null;
  let tapet: Tapetsvar | null = null;
  let golv: Golvsvar | null = null;

  if (i.material === 'vaggfarg' || i.material === 'takfarg') {
    const ytaKvm = i.material === 'takfarg' ? takKvm : vaggarNettoKvm;
    const atgang = i.material === 'takfarg' ? TAKFARG_KVM_PER_LITER : FARG_KVM_PER_LITER;
    const literRaknat = tvaDecimaler((ytaKvm * i.strykningar) / atgang);
    const kopa = bastaBurkar(literRaknat);
    const grundLiterRaknat = tvaDecimaler(ytaKvm / GRUNDFARG_KVM_PER_LITER);
    const grundKopa = bastaBurkar(grundLiterRaknat);
    farg = {
      ytaKvm,
      ytaNamn: ytaNamnFor(i.material),
      literRaknat,
      burkar: kopa.burkar,
      literAttKopa: kopa.totalt,
      grundLiterRaknat,
      grundBurkar: grundKopa.burkar,
      grundLiterAttKopa: grundKopa.totalt,
    };
  }

  if (i.material === 'tapet') {
    /* Dörrarnas bredd går bort ur omkretsen, för en dörr tar hela våder. Ett
       fönster gör det inte: tapeten ska ändå upp ovanför och ner under det. */
    const vaderBreddM = Math.max(0, tvaDecimaler(omkretsM - i.dorrar * i.dorrBreddM));
    const antalVader = Math.ceil(vaderBreddM / TAPETRULLE_BREDD_M - 1e-9);
    const vadLangdM = tvaDecimaler(i.takhojdM + TAPET_PASLAG_M);
    const vaderPerRulle = Math.floor((TAPETRULLE_LANGD_M + 1e-9) / vadLangdM);
    const vadLangdMonsterM = tvaDecimaler(
      Math.ceil(vadLangdM / TAPET_RAPPORT_M - 1e-9) * TAPET_RAPPORT_M,
    );
    const vaderPerRulleMonster = Math.floor((TAPETRULLE_LANGD_M + 1e-9) / vadLangdMonsterM);
    tapet = {
      vaderBreddM,
      antalVader,
      vadLangdM,
      vaderPerRulle,
      rullar: vaderPerRulle > 0 ? Math.ceil(antalVader / vaderPerRulle) : 0,
      vadLangdMonsterM,
      vaderPerRulleMonster,
      rullarMonster: vaderPerRulleMonster > 0 ? Math.ceil(antalVader / vaderPerRulleMonster) : 0,
    };
  }

  if (i.material === 'parkett' || i.material === 'klinker') {
    const spill = i.material === 'klinker' ? SPILL_KLINKER[i.laggning] : SPILL_GOLV[i.laggning];
    const kvmAttKopa = tvaDecimaler(golvKvm * (1 + spill));
    const antalPaket = i.paketKvm !== null ? Math.ceil(kvmAttKopa / i.paketKvm - 1e-9) : null;
    golv = {
      ytaKvm: golvKvm,
      spillProcent: Math.round(spill * 100),
      kvmAttKopa,
      paketKvm: i.paketKvm,
      antalPaket,
      kvmIPaketen: antalPaket !== null && i.paketKvm !== null ? tvaDecimaler(antalPaket * i.paketKvm) : null,
    };
  }

  // Steg 6. Råden. "Gör inte det här" gäller det material läsaren valt.
  const gorInteDetHar: string[] = [];
  if (i.material !== 'inget') gorInteDetHar.push(GOR_INTE_EXAKT_YTAN);
  if (i.material === 'parkett') gorInteDetHar.push(GOR_INTE_UTAN_LAGNINGSRESERV);
  if (i.material === 'klinker') gorInteDetHar.push(GOR_INTE_UTAN_PLATTRESERV);
  if (i.material === 'vaggfarg' || i.material === 'takfarg') {
    gorInteDetHar.push(GOR_INTE_BLANDA_PARTIER);
    if (i.strykningar < 2) gorInteDetHar.push(GOR_INTE_EN_STRYKNING);
  }
  if (i.dorrar === 0 && i.fonster === 0) gorInteDetHar.push(GOR_INTE_UTAN_AVDRAG);

  return {
    status: 'ok',
    golvKvm,
    takKvm,
    omkretsM,
    vaggarBruttoKvm,
    avdragDorrKvm,
    avdragFonsterKvm,
    avdragKvm,
    vaggarNettoKvm,
    valdKvm,
    valdNamn,
    farg,
    tapet,
    golv,
    gorInteDetHar,
  };
}
