/**
 * Kan du måla ute i dag? Ren modul utan importer från Astro, testbar utan
 * bygge. Sidan /rakna/mala-ute/ skickar formuläret som GET och räknar på
 * servern, så ingen rad av den här filen når klienten.
 *
 * Det här verktyget räknar inget material. Det svarar ja, ja men sluta senast
 * ett klockslag, eller vänta, och varje regel som slog in bär sin källa, som
 * bygglovsverktyget bär lagrum. Räkningen är fyra steg: daggpunkten nu med
 * Magnus-formeln, torktiden för vald färg omräknad från databladets 23 °C och
 * 50 % till dagens väder, senaste klockslaget att sluta så att färgen är
 * klibbfri i god tid före solnedgången, och tillverkarnas gränser för
 * temperatur, luftfuktighet, natt, regn och sol.
 *
 * Varje konstant står namngiven nedan med källa eller ANTAGANDE i kommentaren,
 * och underlaget med hämtningsdatum och länk per rad ligger i
 * docs/briefer/underlag-kalkyl-mala-ute-2026-09-17.md.
 *
 * Magnus-konstanterna står också i src/lib/kalkyl/daggpunkt.ts. De ligger i
 * båda filerna med flit: varje kalkylator ska gå att läsa, testa och granska
 * utan att följa en import till en annan formel.
 *
 * Testas av scripts/test-kalkyl-mala-ute.mjs mot daggpunktstabellerna i
 * /fukt/luftfuktighet-inomhus/ och underlagets räkneexempel.
 */

export type Fargtyp = 'akrylat' | 'oljealkyd' | 'slamfarg' | 'traolja';
export type Yta = 'skugga' | 'sol';

/** Svaret i stort format. */
export type Utfall = 'mala' | 'mala_men' | 'vanta';

/**
 * Vad en enskild regel betyder. "sluta" är daggregeln: den stoppar inte dagen,
 * den sätter ett klockslag att sluta senast.
 */
export type RegelUtfall = 'ok' | 'varning' | 'sluta' | 'stopp';

export interface Regel {
  utfall: RegelUtfall;
  /** Vad regeln säger om just den här dagen, i löptext. */
  text: string;
  /** Tillverkaren eller källan bakom regeln. */
  kalla: string;
}

export interface Farg {
  namn: string;
  /** Lägsta temperatur för yta och luft, grader. */
  minTempC: number;
  /** Timmar till klibbfri vid 23 °C och 50 % enligt databladet. */
  klibbfriH: number;
  /** Timmar till övermålningsbar vid 23 °C och 50 % enligt databladet. */
  overmalningsbarH: number;
  /** Timmar färgen behöver innan den tål regn, enligt databladet. */
  regnfriH: number;
  /** Produkten vars datablad talen kommer ur. */
  kalla: string;
  kallaUrl: string;
}

export interface MalaUteIndata {
  /** Lufttemperatur just nu utomhus i skuggan, grader. */
  luftTempC: number;
  /** Relativ luftfuktighet just nu, procent. */
  rfProcent: number;
  /** Prognosens lägsta temperatur i natt, grader. */
  nattMinC: number;
  /** Klockslaget du börjar måla, hel timme 0 till 23. */
  startTimme: number;
  /** Klockslaget solen går ner, hel timme 0 till 23. Står i väderappen. */
  solnedgangTimme: number;
  fargtyp: Fargtyp;
  /** Ytan du målar under dagen: i skugga eller i direkt sol. */
  yta: Yta;
  /** Regn väntas inom 24 timmar. */
  regn: boolean;
}

export type MalaUteResultat =
  | {
      status: 'ok';
      utfall: Utfall;
      /** "Ja, måla", "Ja, men sluta senast kl 16" eller "Vänta". */
      utfallRubrik: string;
      /** Det som står stort: "Ja", "kl 16" eller "Vänta". */
      stortTal: string;
      /** Daggpunkten nu, grader. */
      daggpunktC: number;
      /** Ytans temperatur i natt, alltså nattens lägsta minus avdraget. */
      ytTempNattC: number;
      /** Ytans temperatur i natt minus daggpunkten. Noll eller under betyder dagg. */
      marginalC: number;
      /** Sant när ytan når daggpunkten i natt. */
      daggFaller: boolean;
      /** Färgen läsaren valt, med databladets tal. */
      farg: Farg;
      /** Omräkningsfaktorn för torktiden vid dagens väder. */
      torktidFaktor: number;
      /** Timmar till klibbfri vid dagens väder. */
      klibbfriIdagH: number;
      /** Timmar till övermålningsbar vid dagens väder. */
      overmalningsbarIdagH: number;
      /** Klockslaget färgen är övermålningsbar om du börjar på starttimmen. */
      overmalningsbarKl: number;
      /** Senaste klockslaget att sluta måla, i timmar med decimal. */
      senasteSlutTimme: number;
      /** Samma klockslag som text, avrundat nedåt: "kl 16". */
      senasteSlutText: string;
      /** Sant när färgen torkar över natten och natten därför måste klara gränsen. */
      torkarOverNatten: boolean;
      /** Varje regel i den ordning den prövas, med utfall och källa. */
      regler: Regel[];
      gorInteDetHar: string[];
    }
  | { status: 'ogiltig'; fel: Partial<Record<keyof MalaUteIndata, string>> };

/*
 * Konstanter. Källa eller antagande i kommentaren över varje. Underlaget är
 * docs/briefer/underlag-kalkyl-mala-ute-2026-09-17.md.
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

/**
 * Luftfuktighet där dagen stoppas, procent. Källa: Nordsjö Tinova Exterior och
 * Tinova Traditional Exterior, "inte under +5°C eller vid en hög relativ
 * fuktighet (över 80%)". Beckers och Alcro säger samma sak i ord utan tal.
 * https://www.nordsjo.se/sv/produkter/nordsj%C3%B6-tinova-exterior
 */
export const RF_STOPP_PROCENT = 80;

/**
 * Timmar mellan sista penseldraget och dagg, alltså tillverkarnas "i god tid".
 * Källa: Beckers Perfekt Fasad, måla inte "vid risk för ... dagg inom 2 timmar
 * efter målningens avslutande"; Alcro Måla träfasad, "dagg inom 1–2 timmar".
 * Verktyget räknar med den längre av de två.
 * https://beckers.se/produkter/perfekt-fasad
 */
export const DAGG_MARGINAL_H = 2;

/**
 * Hur många grader under luften en yta ligger på kvällen under klar himmel.
 * ANTAGANDE. Ytan strålar mot natthimlen och blir kallare än luften intill;
 * det är därför bilar och tak får dagg vid plusgrader. Efter solnedgången
 * ligger alla ytor i skugga, så avdraget gäller oavsett vad läsaren valde
 * för dagen.
 */
export const YTAVDRAG_NATT_C = 2;

/**
 * Villkoren databladens torktider gäller vid. Källa: Beckers, Alcro och
 * Nordsjö anger alla +23 °C och 50 % relativ luftfuktighet.
 */
export const TORKTID_REFERENS_C = 23;
export const TORKTID_REFERENS_RF = 50;

/**
 * Torktiden fördubblas för varje så många grader under 23. Källa för punkten:
 * Beckers forum, Måla i kyla, "Om temperaturen istället är ca 15 grader så får
 * man dubblera torktiden", alltså en fördubbling på 8 grader.
 * https://forum.beckers.se/org/beckers/d/mala-i-kyla/
 * ANTAGANDE att fördubblingen fortsätter per 8 grader hela vägen ner. Beckers
 * ger en punkt, inte en kurva; avdunstningen faller ungefär exponentiellt med
 * temperaturen, så kurvan är rimlig, men den är vår. Ingen förkortning över 23.
 */
export const FORDUBBLING_PER_C = 8;

/**
 * Över den här luftfuktigheten förlängs torktiden med faktorn. ANTAGANDE.
 * Beckers och Alcro skriver båda att fuktig luft förlänger torktiden, men
 * ingen anger hur mycket. Databladets 50 procent är "max" enligt Alcro, och
 * 80 procent är stopp, så påslaget läggs på spannet däremellan.
 */
export const FUKT_GRANS_RF = 70;
export const FUKT_FAKTOR = 1.5;

/**
 * En oljefärg härdar med syre, och hela torktiden till övermålningsbar
 * sträcker sig därför över natten. ANTAGANDE: minst ett dygn för oljealkyd,
 * oavsett vad databladet säger om övermålning vid 23 °C.
 */
export const OLJEFARG_MINST_H = 24;

/**
 * Högsta fuktkvot i virket före målning, procent. Källa: TräGuiden,
 * "Ytfuktkvoten får vara högst 18 % vid inbyggnad och högst 16 % vid
 * ytbehandling"; Svenskt Trä, Alcro och Beckers anger samma tal.
 * https://www.traguiden.se/om-tra/byggfysik/fukt/fukt/fuktkvot-och-matning/
 */
export const FUKTKVOT_MAX_PROCENT = 16;

/**
 * Färgtyperna med databladens tal vid 23 °C och 50 %. Källa i varje rad.
 *
 * Akrylat: Beckers Perfekt Fasad, klibbfri 1 h, övermålningsbar 4 h,
 * yttemperatur 7 till 25 °C, regn inom 1 h. Alcro Bestå Täckfärg anger 1 h
 * och 3 till 4 h och samma +7 °C. Nordsjö Tinova Exterior 1 h och 2 h.
 *
 * Oljealkyd: Beckers Perfekt Oljefärg, klibbfri 2 h, övermålningsbar 6 h,
 * yttemperatur minst 7 °C, regn eller dagg inom 1 till 2 h.
 *
 * Slamfärg: Falu Rödfärg Original, torr på ytan efter cirka en timme,
 * genomtorr på ett dygn, lägsta dygnstemperatur omkring +5 °C.
 *
 * Träolja: Beckers Elit Träolja, klibbfri 8 h, övermålningsbar 16 h,
 * yttemperatur 10 till 25 °C, regn inom det närmaste dygnet.
 */
export const FARGER: Record<Fargtyp, Farg> = {
  akrylat: {
    namn: 'Vattenburen akrylatfärg för fasad',
    minTempC: 7,
    klibbfriH: 1,
    overmalningsbarH: 4,
    regnfriH: 1,
    kalla: 'Beckers Perfekt Fasad',
    kallaUrl: 'https://beckers.se/produkter/perfekt-fasad',
  },
  oljealkyd: {
    namn: 'Oljealkydfärg för fasad',
    minTempC: 7,
    klibbfriH: 2,
    overmalningsbarH: 6,
    regnfriH: 2,
    kalla: 'Beckers Perfekt Oljefärg',
    kallaUrl: 'https://beckers.se/produkter/perfekt-oljefarg-0',
  },
  slamfarg: {
    namn: 'Slamfärg',
    minTempC: 5,
    klibbfriH: 1,
    overmalningsbarH: 24,
    regnfriH: 1,
    kalla: 'Falu Rödfärg Original',
    kallaUrl: 'https://falurodfarg.com/vanliga-fragor/malningen/kan-man-mala-med-falu-rodfarg-oavsett-arstid/',
  },
  traolja: {
    namn: 'Träolja eller lasyr för trall och altan',
    minTempC: 10,
    klibbfriH: 8,
    overmalningsbarH: 16,
    regnfriH: 24,
    kalla: 'Beckers Elit Träolja',
    kallaUrl: 'https://beckers.se/produkter/elit-traolja',
  },
};

export const FARGTYPER: { varde: Fargtyp; etikett: string }[] = [
  { varde: 'akrylat', etikett: 'Akrylatfärg, vattenburen fasadfärg' },
  { varde: 'oljealkyd', etikett: 'Oljealkydfärg' },
  { varde: 'slamfarg', etikett: 'Slamfärg, som Falu Rödfärg' },
  { varde: 'traolja', etikett: 'Träolja eller lasyr till trall' },
];

export const YTOR: { varde: Yta; etikett: string }[] = [
  { varde: 'skugga', etikett: 'I skugga' },
  { varde: 'sol', etikett: 'I direkt sol' },
];

export const UTFALL_RUBRIK: Record<Utfall, string> = {
  mala: 'Ja, måla',
  mala_men: 'Ja, men sluta senast',
  vanta: 'Vänta',
};

/**
 * Standardvärdena: en vanlig dag i maj eller september, sval luft, en natt
 * som går ner mot åtta grader, start på förmiddagen och solnedgång klockan
 * åtta. Akrylat på en skuggsida, inget regn i prognosen.
 */
export const STANDARD: MalaUteIndata = {
  luftTempC: 15,
  rfProcent: 65,
  nattMinC: 8,
  startTimme: 10,
  solnedgangTimme: 20,
  fargtyp: 'akrylat',
  yta: 'skugga',
  regn: false,
};

export const GRANSER = {
  luftTempC: [-10, 40],
  rfProcent: [10, 100],
  nattMinC: [-10, 40],
  startTimme: [0, 23],
  solnedgangTimme: [0, 23],
} as const;

/*
 * Råden skrivs enligt docs/STILGUIDE.md: högst ett tal per mening, och två bara
 * när de två talen är jämförelsen. Alla fem gäller varje dag.
 */

const GOR_INTE_MORGONDAGG =
  'Måla inte på morgondaggen. Panelen är våt tills solen och vinden torkat den, ofta fram till sen förmiddag, och färg på en fuktig yta fäster sämre och kan få blåsor. Känn med handflatan på skuggsidan innan du öppnar burken.';

const GOR_INTE_VARM_PANEL =
  'Måla inte i direkt sol på en varm panel. Färgen börjar torka i penseln innan den är utstruken, och resultatet blir ränder och dålig vidhäftning. Följ skuggan runt huset i stället.';

const GOR_INTE_LITA_PA_DAGEN =
  'Lita inte på dagstemperaturen när natten blir kall. Tillverkarnas gräns gäller yta och luft hela dygnet, inte bara när du målar, och en oljefärg härdar långt in i natten.';

const GOR_INTE_VATT_VIRKE = `Måla inte på virke med mer än ${FUKTKVOT_MAX_PROCENT} procent fuktkvot. Det är gränsen hos både Svenskt Trä och färgtillverkarna, och en panel som stått i regn eller nyss tvättats ligger över den i flera dagar. Mät med en resistansmätare på skuggsidan.`;

const GOR_INTE_DAGEN_FORE_REGN =
  'Måla inte dagen före regn. Beckers vill ha ett dygn utan regn och dagg efter målningen, och en träolja behöver lika länge innan den tål vatten. Ett regn på färsk färg ger fläckar som inte går att tvätta bort.';

/** Decimalkomma accepteras: '12,5' blir 12.5. Tomt eller skräp ger NaN. */
function tillTal(v: string | null): number {
  if (v === null) return NaN;
  const rensad = v.trim().replace(',', '.').replace('−', '-');
  if (rensad === '') return NaN;
  return Number(rensad);
}

/** Grader skrivs med minustecknet som ord, som i löptexten på sajten. */
function grader(n: number): string {
  const rundat = Math.round(n * 10) / 10;
  const text = String(Math.abs(rundat)).replace('.', ',');
  return rundat < 0 ? `minus ${text}` : text;
}

/**
 * Grader med enhet i rätt numerus: "1 grad", "minus 1 grad", "2 grader",
 * "0,5 grader". Bara talet ett är singular.
 */
export function gradEnhet(n: number): string {
  const rundat = Math.round(n * 10) / 10;
  const enhet = Math.abs(rundat) === 1 ? 'grad' : 'grader';
  return `${grader(rundat)} ${enhet}`;
}

/** En timme med decimal som "2,5 timmar" eller "1 timme". */
function timmar(h: number): string {
  const rundat = Math.round(h * 10) / 10;
  const text = String(rundat).replace('.', ',');
  return rundat === 1 ? '1 timme' : `${text} timmar`;
}

/**
 * "kl 16", avrundat nedåt så att ett klockslag aldrig lovar mer än det håller.
 * Över midnatt blir det "kl 3 i morgon", och längre fram "kl 10 om 2 dygn".
 * Ett klockslag före dagens början skrivs aldrig som ett klockslag: då
 * räcker dagen inte till, och regeln för sent på dagen säger det i ord.
 */
export function klockslag(timme: number): string {
  const hel = Math.floor(timme);
  if (hel < 0) return 'före dagens början';
  if (hel < 24) return `kl ${hel}`;
  const dygn = Math.floor(hel / 24);
  const rest = hel - dygn * 24;
  return dygn === 1 ? `kl ${rest} i morgon` : `kl ${rest} om ${dygn} dygn`;
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

/** Mättnadsångtryck i hPa, Magnus-formeln. Exporterad för testet. */
export function mattnadsangtryck(tempC: number): number {
  return MAGNUS_A_HPA * Math.exp((MAGNUS_B * tempC) / (MAGNUS_C + tempC));
}

/**
 * Faktorn databladets torktid ska multipliceras med vid dagens väder.
 * Fördubbling per FORDUBBLING_PER_C grader under 23, ingen förkortning över,
 * och FUKT_FAKTOR över FUKT_GRANS_RF procent luftfuktighet.
 */
export function torktidsfaktor(tempC: number, rfProcent: number): number {
  const kyla = Math.max(0, TORKTID_REFERENS_C - tempC);
  const temperaturFaktor = Math.pow(2, kyla / FORDUBBLING_PER_C);
  const fuktFaktor = rfProcent > FUKT_GRANS_RF ? FUKT_FAKTOR : 1;
  return temperaturFaktor * fuktFaktor;
}

function enDecimal(n: number): number {
  return Math.round(n * 10) / 10;
}

function arFargtyp(v: string | null): v is Fargtyp {
  return v === 'akrylat' || v === 'oljealkyd' || v === 'slamfarg' || v === 'traolja';
}

function arYta(v: string | null): v is Yta {
  return v === 'skugga' || v === 'sol';
}

/**
 * Läser adressen. Skräp i ett val faller tillbaka på standardvärdet, skräp i
 * ett tal blir NaN och ger ett fel på just det fältet.
 */
export function tolkaQuery(q: URLSearchParams): { indata: MalaUteIndata; harIndata: boolean } {
  const nycklar = ['temp', 'rf', 'natt', 'start', 'sol', 'farg', 'yta', 'regn'];
  const harIndata = nycklar.some((n) => q.has(n));

  const raFarg = q.get('farg');
  const raYta = q.get('yta');
  const raRegn = q.get('regn');
  const las = (nyckel: string, standardVarde: number) =>
    q.has(nyckel) ? tillTal(q.get(nyckel)) : standardVarde;

  return {
    harIndata,
    indata: {
      luftTempC: las('temp', STANDARD.luftTempC),
      rfProcent: las('rf', STANDARD.rfProcent),
      nattMinC: las('natt', STANDARD.nattMinC),
      startTimme: las('start', STANDARD.startTimme),
      solnedgangTimme: las('sol', STANDARD.solnedgangTimme),
      fargtyp: arFargtyp(raFarg) ? raFarg : STANDARD.fargtyp,
      yta: arYta(raYta) ? raYta : STANDARD.yta,
      regn: raRegn === null ? STANDARD.regn : raRegn.trim().toLowerCase() === 'ja',
    },
  };
}

export function raknaMalaUte(i: MalaUteIndata): MalaUteResultat {
  const fel: Partial<Record<keyof MalaUteIndata, string>> = {};
  const inom = (varde: number, granser: readonly [number, number]) =>
    Number.isFinite(varde) && varde >= granser[0] && varde <= granser[1];

  if (!inom(i.luftTempC, GRANSER.luftTempC)) {
    fel.luftTempC = `Ange temperaturen nu mellan ${grader(GRANSER.luftTempC[0])} och ${GRANSER.luftTempC[1]} grader`;
  }
  if (!inom(i.rfProcent, GRANSER.rfProcent)) {
    fel.rfProcent = `Ange luftfuktigheten mellan ${GRANSER.rfProcent[0]} och ${GRANSER.rfProcent[1]} procent`;
  }
  if (!inom(i.nattMinC, GRANSER.nattMinC)) {
    fel.nattMinC = `Ange nattens lägsta temperatur mellan ${grader(GRANSER.nattMinC[0])} och ${GRANSER.nattMinC[1]} grader`;
  }
  if (!inom(i.startTimme, GRANSER.startTimme) || !Number.isInteger(i.startTimme)) {
    fel.startTimme = `Ange klockslaget du börjar som en hel timme mellan ${GRANSER.startTimme[0]} och ${GRANSER.startTimme[1]}`;
  }
  if (!inom(i.solnedgangTimme, GRANSER.solnedgangTimme) || !Number.isInteger(i.solnedgangTimme)) {
    fel.solnedgangTimme = `Ange solnedgången som en hel timme mellan ${GRANSER.solnedgangTimme[0]} och ${GRANSER.solnedgangTimme[1]}`;
  }
  if (
    fel.startTimme === undefined &&
    fel.solnedgangTimme === undefined &&
    i.solnedgangTimme <= i.startTimme
  ) {
    fel.solnedgangTimme = 'Solen går ner före du börjar måla. Kontrollera de två klockslagen';
  }
  if (Object.keys(fel).length > 0) return { status: 'ogiltig', fel };

  const farg = FARGER[i.fargtyp];

  // Steg 1. Daggpunkten nu. ANTAGANDE att den håller sig genom kvällen när
  // samma luftmassa ligger kvar, och att ytan ligger YTAVDRAG_NATT_C under
  // luften efter solnedgången.
  const daggpunktC = enDecimal(daggpunkt(i.luftTempC, i.rfProcent));
  const ytTempNattC = enDecimal(i.nattMinC - YTAVDRAG_NATT_C);
  const marginalC = enDecimal(ytTempNattC - daggpunktC);
  const daggFaller = ytTempNattC <= daggpunktC;

  // Steg 2. Torktiden vid dagens väder, från databladets 23 °C och 50 %.
  const torktidFaktor = enDecimal(torktidsfaktor(i.luftTempC, i.rfProcent));
  const klibbfriIdagH = enDecimal(farg.klibbfriH * torktidFaktor);
  const overmalningsbarBasH =
    i.fargtyp === 'oljealkyd' ? Math.max(farg.overmalningsbarH, OLJEFARG_MINST_H) : farg.overmalningsbarH;
  const overmalningsbarIdagH = enDecimal(overmalningsbarBasH * torktidFaktor);
  const overmalningsbarKl = enDecimal(i.startTimme + overmalningsbarIdagH);

  // Steg 3. Senaste klockslaget att sluta: solnedgång minus "i god tid" minus
  // torktiden till klibbfri. Slutar du då är färgen klibbfri två timmar före
  // solnedgången, som Beckers och Alcro vill.
  const senasteSlutTimme = enDecimal(i.solnedgangTimme - DAGG_MARGINAL_H - klibbfriIdagH);
  const senasteSlutText = klockslag(senasteSlutTimme);

  // Färgen torkar över natten när den inte är övermålningsbar före solnedgången.
  // För oljealkyd är det alltid så, eftersom minsta tiden är ett dygn.
  const torkarOverNatten = overmalningsbarKl > i.solnedgangTimme;

  // Steg 4. Reglerna, i ordning. Varje regel bär sin källa.
  const regler: Regel[] = [];

  // 4a. Temperaturen nu mot färgens gräns.
  if (i.luftTempC < farg.minTempC) {
    regler.push({
      utfall: 'stopp',
      text: `Det är ${gradEnhet(i.luftTempC)} nu, och ${farg.namn.toLowerCase()} kräver minst ${gradEnhet(farg.minTempC)} på både yta och luft. Färgen torkar inte som den ska och kan bli klibbig, få blåsor och bli flammig.`,
      kalla: `${farg.kalla}, datablad`,
    });
  } else {
    regler.push({
      utfall: 'ok',
      text: `Det är ${gradEnhet(i.luftTempC)} nu, och färgens gräns går vid ${gradEnhet(farg.minTempC)}.`,
      kalla: `${farg.kalla}, datablad`,
    });
  }

  // 4b. Luftfuktigheten mot 80 procent.
  if (i.rfProcent > RF_STOPP_PROCENT) {
    regler.push({
      utfall: 'stopp',
      text: `Luftfuktigheten är ${i.rfProcent} procent, och över ${RF_STOPP_PROCENT} procent ska du inte måla alls. Vattnet i färgen har ingenstans att ta vägen.`,
      kalla: 'Nordsjö, Tinova Exterior',
    });
  } else {
    regler.push({
      utfall: 'ok',
      text: `Luftfuktigheten är ${i.rfProcent} procent, under gränsen på ${RF_STOPP_PROCENT} procent.`,
      kalla: 'Nordsjö, Tinova Exterior',
    });
  }

  // 4c. Natten mot färgens gräns. Gränsen gäller dygnet enligt Beckers och
  // Alcro. En akrylat som är övermålningsbar före solnedgången får passera
  // med varning, det är vårt antagande.
  if (i.nattMinC < farg.minTempC) {
    if (torkarOverNatten) {
      /* Klockslaget behålls bara för en akrylat som blir övermålningsbar
         samma dygn eller under natten. Färger som torkar igenom först nästa
         dag får det sagt i ord; "kl 4 om 5 dygn" hjälper ingen. */
      const skal =
        i.fargtyp === 'oljealkyd'
          ? 'En oljefärg härdar med syre i minst ett dygn, så natten ingår alltid i torktiden.'
          : i.fargtyp === 'slamfarg'
            ? 'Slamfärgen torkar igenom först nästa dag, så natten ingår alltid i torktiden.'
            : i.fargtyp === 'traolja'
              ? 'Träoljan torkar igenom först nästa dag, så natten ingår alltid i torktiden.'
              : overmalningsbarIdagH >= 24
                ? 'Färgen är övermålningsbar först nästa dag vid dagens väder, så natten ingår i torktiden.'
                : `Färgen är övermålningsbar först ${klockslag(overmalningsbarKl)}, alltså efter solnedgången ${klockslag(i.solnedgangTimme)}, och torkar därför genom natten.`;
      regler.push({
        utfall: 'stopp',
        text: `Natten går ner till ${gradEnhet(i.nattMinC)}, under färgens gräns på ${gradEnhet(farg.minTempC)}. ${skal} Tillverkarna vill att gränsen håller hela dygnet, inte bara medan du målar.`,
        kalla: 'Beckers och Alcro, forumsvar om målning i kyla',
      });
    } else {
      regler.push({
        utfall: 'varning',
        text: `Natten går ner till ${gradEnhet(i.nattMinC)}, under färgens gräns på ${gradEnhet(farg.minTempC)}. Färgen hinner bli övermålningsbar ${klockslag(overmalningsbarKl)}, före solnedgången, så vi låter dagen passera. Beckers och Alcro skriver ändå att gränsen gäller hela dygnet, så räkna med en marginal.`,
        kalla: 'Beckers och Alcro, forumsvar om målning i kyla. Att en torr akrylat får passera är vårt antagande',
      });
    }
  } else {
    regler.push({
      utfall: 'ok',
      text: `Natten går ner till ${gradEnhet(i.nattMinC)}, över färgens gräns på ${gradEnhet(farg.minTempC)}.`,
      kalla: 'Beckers och Alcro, forumsvar om målning i kyla',
    });
  }

  // 4d. För sent på dagen: starten ligger efter senaste sluttiden.
  const forSent = i.startTimme >= senasteSlutTimme;
  if (forSent) {
    /* Hamnar sluttiden före dagens början räcker inte dagen till alls, och
       då är ett klockslag fel svar. */
    const text =
      senasteSlutTimme < 0
        ? `Du börjar ${klockslag(i.startTimme)}, men ${farg.namn.toLowerCase()} behöver ${timmar(klibbfriIdagH)} till klibbfri vid dagens väder och ska vara klibbfri ${DAGG_MARGINAL_H} timmar före solnedgången ${klockslag(i.solnedgangTimme)}. Det ryms inte i en dag. Börja i gryningen en varmare dag.`
        : `Du börjar ${klockslag(i.startTimme)}, men senaste klockslaget att sluta är redan ${senasteSlutText}: solnedgången ${klockslag(i.solnedgangTimme)} minus ${DAGG_MARGINAL_H} timmar minus ${timmar(klibbfriIdagH)} till klibbfri vid dagens väder. Färgen hinner inte torka före kvällskylan.`;
    regler.push({
      utfall: 'stopp',
      text,
      kalla: 'Alcro, Måla träfasad, och Beckers, Rätt väder för målning',
    });
  }

  // 4e. Daggen. Ytan når daggpunkten i natt, så färgen måste vara klibbfri i
  // god tid innan.
  if (daggFaller) {
    if (!forSent) {
      regler.push({
        utfall: 'sluta',
        text: `Daggpunkten är ${gradEnhet(daggpunktC)}, och ytan går ner till ${gradEnhet(ytTempNattC)} i natt, alltså under den. Dagg faller. Sluta senast ${senasteSlutText}, så är färgen klibbfri ${DAGG_MARGINAL_H} timmar före solnedgången.`,
        kalla: 'Beckers Perfekt Fasad och Alcro, dagg inom två timmar. Daggpunkten enligt Magnus-formeln',
      });
    } else {
      regler.push({
        utfall: 'stopp',
        text: `Daggpunkten är ${gradEnhet(daggpunktC)}, och ytan går ner till ${gradEnhet(ytTempNattC)} i natt. Dagg faller på en färg som inte hunnit bli klibbfri.`,
        kalla: 'Beckers Perfekt Fasad och Alcro, dagg inom två timmar. Daggpunkten enligt Magnus-formeln',
      });
    }
  } else {
    regler.push({
      utfall: 'ok',
      text: `Daggpunkten är ${gradEnhet(daggpunktC)}, och ytan stannar på ${gradEnhet(ytTempNattC)} i natt, alltså ${gradEnhet(marginalC)} över. Ingen dagg om luften är densamma i kväll. Sluta ändå senast ${senasteSlutText}, det är tillverkarnas "i god tid".`,
      kalla: 'Daggpunkten enligt Magnus-formeln. Marginalen är vårt antagande',
    });
  }

  // 4f. Regn inom ett dygn.
  if (i.regn) {
    regler.push({
      utfall: 'stopp',
      text: `Regn väntas inom ett dygn. ${farg.kalla} tål regn efter ${timmar(farg.regnfriH)} enligt databladet, men Beckers vill ha ett dygn utan regn och dagg efter målningen, och du vet inte på timmen när regnet kommer.`,
      kalla: 'Beckers, Rätt väder för målning',
    });
  } else {
    regler.push({
      utfall: 'ok',
      text: `Inget regn i prognosen det närmaste dygnet. ${farg.kalla} tål regn efter ${timmar(farg.regnfriH)} enligt databladet.`,
      kalla: 'Beckers, Rätt väder för målning',
    });
  }

  // 4g. Direkt sol på varm yta: varning, inte stopp.
  if (i.yta === 'sol') {
    regler.push({
      utfall: 'varning',
      text: 'Ytan ligger i direkt sol. Färgen börjar torka i penseln innan den är utstruken, och en varm panel ger ränder och sämre vidhäftning. Måla den sida som ligger i skugga, och följ skuggan runt huset.',
      kalla: 'Alcro, forumsvar om målning i värme, och Beckers, Rätt väder för målning',
    });
  }

  // Steg 5. Svaret. Ett stopp ger vänta, annars ger daggen ett klockslag.
  const harStopp = regler.some((r) => r.utfall === 'stopp');
  const harSluta = regler.some((r) => r.utfall === 'sluta');
  const utfall: Utfall = harStopp ? 'vanta' : harSluta ? 'mala_men' : 'mala';
  const utfallRubrik = utfall === 'mala_men' ? `${UTFALL_RUBRIK.mala_men} ${senasteSlutText}` : UTFALL_RUBRIK[utfall];
  const stortTal = utfall === 'vanta' ? 'Vänta' : utfall === 'mala_men' ? senasteSlutText : 'Ja';

  const gorInteDetHar = [
    GOR_INTE_MORGONDAGG,
    GOR_INTE_VARM_PANEL,
    GOR_INTE_LITA_PA_DAGEN,
    GOR_INTE_VATT_VIRKE,
    GOR_INTE_DAGEN_FORE_REGN,
  ];

  return {
    status: 'ok',
    utfall,
    utfallRubrik,
    stortTal,
    daggpunktC,
    ytTempNattC,
    marginalC,
    daggFaller,
    farg,
    torktidFaktor,
    klibbfriIdagH,
    overmalningsbarIdagH,
    overmalningsbarKl,
    senasteSlutTimme,
    senasteSlutText,
    torkarOverNatten,
    regler,
    gorInteDetHar,
  };
}
