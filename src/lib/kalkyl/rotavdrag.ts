/**
 * Rotavdrag: hur mycket drar du av, och vad betalar du efteråt?
 * Ren modul utan importer från Astro, testbar utan bygge. Sidan
 * /rakna/rotavdrag/ skickar formuläret som GET och räknar på servern, så ingen
 * rad av den här filen når klienten.
 *
 * Varje konstant står namngiven nedan med källa eller ANTAGANDE i kommentaren,
 * och underlaget med länk per rad ligger i
 * docs/briefer/underlag-kalkyl-rotavdrag-2026-09-20.md. Varje tal om
 * procentsats, tak och datum är hämtat hos Skatteverket och ingenstans annars.
 *
 * Testas av scripts/test-kalkyl-rotavdrag.mjs mot Skatteverkets eget
 * räkneexempel och mot takbeloppen.
 *
 * VIKTIGT: talen i den här filen är årsberoende. ARET, ROT_PROCENT och de två
 * takbeloppen läses om varje december inför det nya året, och sidans titel döps
 * om samtidigt. Se kommentaren vid ARET.
 */

/**
 * Året verktyget räknar för. Procentsatsen och takbeloppen nedan är de som
 * gäller det här året, och sidans rubrik och title bär årtalet.
 *
 * DÖPS OM VARJE DECEMBER. Frasen "rotavdrag 2026" är sidans sökfras, och i
 * december varje år ska tre saker göras i en och samma commit: talet här höjs,
 * procentsatsen och takbeloppen kontrolleras om hos Skatteverket, och
 * VERKTYGSNAMN, titel och H1 i src/pages/rakna/rotavdrag.astro byts till det
 * nya årtalet. Adressen /rakna/rotavdrag/ ändras aldrig, så inga omdirigeringar
 * behövs och inkommande länkar överlever årsskiftet.
 */
export const ARET = 2026;

/**
 * Så stor del av arbetskostnaden företaget får dra av på fakturan.
 * Källa: Skatteverket, så fungerar rotavdraget. "Företaget får dra av högst
 * 30 procent av arbetskostnaden."
 * https://www.skatteverket.se/privat/fastigheterochbostad/rotarbeteochrutarbete/safungerarrotavdraget.4.5947400c11f47f7f9dd80004014.html
 * Läst 20 september 2026.
 */
export const ROT_PROCENT = 30;

/**
 * Den tillfälligt höjda nivån, och de två datum den gällde. Det är dagen du
 * betalade fakturan som avgör vilken procentsats som gäller, inte fakturans
 * datum och inte när arbetet utfördes.
 * Källa: Skatteverket, nyheten Rotavdraget höjs till 50 procent. "Höjningen är
 * tillfällig och gäller färdiga arbeten där kunden betalar fakturan mellan
 * 12 maj och 31 december 2025."
 * https://www.skatteverket.se/omoss/pressochmedia/nyheter/2025/nyheter/rotavdragethojstill50procent.5.6e1dd38d196873bc1e11af.html
 * Läst 20 september 2026.
 */
export const ROT_PROCENT_HOJT = 50;
export const HOJNINGEN_FRAN = '12 maj 2025';
export const HOJNINGEN_TILL = '31 december 2025';

/**
 * Taket för rotavdraget, per person och år.
 * Källa: Skatteverket, så fungerar rotavdraget. "Du kan få högst 75 000 kronor
 * per år i rotavdrag och rutavdrag. Av den summan får högst 50 000 kronor vara
 * rotavdrag." Läst 20 september 2026.
 */
export const ROT_TAK_KR = 50000;

/**
 * Det gemensamma taket för rot och rut, per person och år. Samma källa och
 * samma mening som ROT_TAK_KR. Det är den här raden ettan på "renovera kök
 * kostnad" har fel om: 75 000 kr är rot plus rut tillsammans, inte rot.
 */
export const GEMENSAMT_TAK_KR = 75000;

/**
 * Skatterna som avdraget räknas av mot. Avdraget kan aldrig bli större än dem.
 * Källa: Skatteverket, svar på vanlig fråga om hur mycket man måste tjäna.
 * "Rot- eller rutavdraget räknas av mot kommunal och statlig inkomstskatt,
 * statlig fastighetsskatt och kommunal fastighetsavgift."
 * https://www.skatteverket.se/privat/etjansterochblanketter/svarpavanligafragor/rotochrutarbete/privatrotochrutarbetefaq/hurmycketmastejagtjanaforattkunnautnyttjamaximalskattereduktionforrotochrutarbete.5.5fc8c94513259a4ba1d800034104.html
 * Läst 20 september 2026.
 */
export const SKATTER_SOM_RAKNAS_AV =
  'kommunal och statlig inkomstskatt, statlig fastighetsskatt och kommunal fastighetsavgift';

/**
 * VÅRT EGET räkneexempel, och det testskriptet låser formeln mot: en
 * arbetskostnad på 10 000 kr inklusive moms ger 3 000 kr i avdrag och 7 000 kr
 * att betala. Talen står inte hos Skatteverket, de är räknade av oss på
 * procentsatsen ovan, och kommentaren sa fel fram till 2026-09-20.
 *
 * Skatteverkets eget exempel ligger på företagssidan och utgår i stället från
 * 10 000 kr exklusive moms. Se SKV_EXEMPEL nedan: samma formel, annan ingång.
 */
export const EXEMPEL_ARBETE_KR = 10000;
export const EXEMPEL_AVDRAG_KR = 3000;
export const EXEMPEL_BETALA_KR = 7000;

/**
 * Skatteverkets eget räkneexempel, som är den enda plats där ett tal av den
 * här sorten faktiskt står hos myndigheten. Det räknar på en arbetskostnad på
 * 10 000 kr exklusive moms, alltså 12 500 kr med moms, och avdraget blir
 * 3 750 kr. Vårt fält frågar efter arbetskostnaden inklusive moms, så samma
 * formel på samma faktura ger samma svar; skillnaden är vilket av de två
 * talen läsaren skriver in.
 *
 * Momsen är läsarfällan på hela sidan, och därför står de här talen som en rad
 * i antagandetabellen.
 * Källa: Skatteverket, så fungerar rotavdraget för företag. Läst 20 september 2026.
 * https://www.skatteverket.se/foretag/skatterochavdrag/rotochrut/safungerarrotavdraget.4.2ef18e6a125660db8b080002709.html
 */
export const SKV_EXEMPEL_ARBETE_EXKL_MOMS_KR = 10000;
export const SKV_EXEMPEL_ARBETE_INKL_MOMS_KR = 12500;
export const SKV_EXEMPEL_AVDRAG_KR = 3750;

/**
 * Femårsregeln. Ombyggnad och tillbyggnad ger inget avdrag de första fem åren
 * efter det år huset byggdes färdigt, alltså räknat från värdeåret. Reparation
 * och underhåll ger avdrag oavsett hur gammalt huset är, och gränsen mellan de
 * två är det första läsaren ska reda ut med hantverkaren.
 * Källa: Skatteverket, så fungerar rotavdraget. Läst 20 september 2026.
 */
export const NYBYGGT_SPARRAR_AR = 5;

/**
 * Sista dagen företaget kan begära utbetalning för ett arbete. Arbetet ska
 * dessutom vara utfört. Regeln hör ihop med betalningsdatumet: betalningen
 * daterar avdraget, men ansökan måste komma in.
 * Källa: Skatteverket, så fungerar rotavdraget. Läst 20 september 2026.
 */
export const ANSOKAN_SENAST = '31 januari året efter att du betalade';

/** Skatteverkets sidor, en per regel. Varje rad i svaret pekar på sin egen. */
export const SKATTEVERKET_ROTAVDRAGET =
  'https://www.skatteverket.se/privat/fastigheterochbostad/rotarbeteochrutarbete/safungerarrotavdraget.4.5947400c11f47f7f9dd80004014.html';
export const SKATTEVERKET_ROT_OCH_RUT =
  'https://www.skatteverket.se/privat/fastigheterochbostad/rotarbeteochrutarbete.4.2e56d4ba1202f95012080002966.html';
export const SKATTEVERKET_GER_RATT =
  'https://www.skatteverket.se/foretag/skatterochavdrag/rotochrut/gerarbetetratttillrotavdrag.4.5c1163881590be297b5173bf.html';
export const SKATTEVERKET_HOJNINGEN =
  'https://www.skatteverket.se/omoss/pressochmedia/nyheter/2025/nyheter/rotavdragethojstill50procent.5.6e1dd38d196873bc1e11af.html';
export const SKATTEVERKET_SKATTEN =
  'https://www.skatteverket.se/privat/etjansterochblanketter/svarpavanligafragor/rotochrutarbete/privatrotochrutarbetefaq/hurmycketmastejagtjanaforattkunnautnyttjamaximalskattereduktionforrotochrutarbete.5.5fc8c94513259a4ba1d800034104.html';
export const SKATTEVERKET_RAKNA = 'https://www7.skatteverket.se/portal/rot-rut/';
export const SKATTEVERKET_FORETAG =
  'https://www.skatteverket.se/foretag/skatterochavdrag/rotochrut/safungerarrotavdraget.4.2ef18e6a125660db8b080002709.html';

/** Vad som band avdraget: procentsatsen eller ett av de tre taken. */
export type Begransning = 'procent' | 'rot-tak' | 'gemensamt-tak' | 'skatt';

/** Raden i "Därför blev svaret så". Etiketten är slaget. */
export type Slag = 'arbete' | 'procent' | 'datum' | 'tak' | 'skatt';

export interface Regel {
  slag: Slag;
  /** Vad regeln säger om just den här fakturan, i löptext. */
  text: string;
  /** Källan bakom regeln, presenterad med ett eller två ord. */
  kalla: string;
  /** Adressen till källan. */
  url: string;
}

export interface RotavdragIndata {
  /** Arbetskostnaden på fakturan, inklusive moms. */
  arbetskostnadKr: number;
  /** Material och annat som inte ger avdrag. Noll när läsaren hoppar över det. */
  materialkostnadKr: number;
  /** Ägare som kan dela avdraget. Varje ägare har ett eget tak. */
  antalAgare: number;
  /** Rotavdrag som redan är utnyttjat i år, av alla ägare tillsammans. */
  utnyttjatRotKr: number;
  /** Rutavdrag som redan är utnyttjat i år, av alla ägare tillsammans. */
  utnyttjatRutKr: number;
  /** Preliminär skatt för året. null betyder inte angiven, och då vägs den inte. */
  skattKr: number | null;
}

export type RotavdragResultat =
  | {
      status: 'ok';
      /** Avdraget i kronor, efter alla tak. */
      avdragKr: number;
      /** Avdraget rakt på procentsatsen, innan taken. */
      raktAvdragKr: number;
      /** Vad taken kapade bort, noll när inget tak slog i. */
      kapatKr: number;
      /** Hela fakturan: arbete plus material. */
      fakturaKr: number;
      /** Vad du betalar efter avdraget. */
      attBetalaKr: number;
      /** Delen av fakturan som inte ger avdrag, alltså materialet. */
      utanAvdragKr: number;
      /** Samma del i procent av fakturan. */
      andelUtanAvdragProcent: number;
      /** Rot-taket för alla ägare tillsammans. */
      rotTakTotaltKr: number;
      /** Det gemensamma taket för alla ägare tillsammans. */
      gemensamtTakTotaltKr: number;
      /** Kvar av rot-taket efter det här jobbet. */
      kvarRotTakKr: number;
      /** Kvar av det gemensamma taket efter det här jobbet. */
      kvarGemensamtKr: number;
      /** Vad som band avdraget. */
      begransatAv: Begransning;
      /** Beskedet i spalten: en rubrik och en rad. */
      beskedRubrik: string;
      beskedRad: string;
      /** Reglerna som slog in, i läsordning. */
      regler: Regel[];
      gorInteDetHar: string[];
    }
  | {
      status: 'ogiltig';
      fel: Partial<Record<keyof RotavdragIndata, string>>;
    };

/**
 * Standardvärdena: ett jobb på 100 000 kr i arbete och 50 000 kr i material,
 * en ägare, ingenting utnyttjat och ingen skatt angiven.
 *
 * En ägare är med flit, inte för att en villa oftast har en. Det är det
 * försiktiga svaret: två ägare dubblar taket, och ett verktyg som antar två
 * ägare skulle visa ett avdrag den ensamstående läsaren aldrig får. Hela
 * fältet med de andras fel är att avdraget ser större ut än det blir, så vårt
 * standardvärde lutar åt andra hållet. Raden under fältet säger att två ägare
 * dubblar taket.
 */
export const STANDARD: RotavdragIndata = {
  arbetskostnadKr: 100000,
  materialkostnadKr: 50000,
  antalAgare: 1,
  utnyttjatRotKr: 0,
  utnyttjatRutKr: 0,
  skattKr: null,
};

/**
 * Gränserna på fälten. Övre kanterna är fältens rimlighetskontroll och inga
 * regler hos Skatteverket.
 * ANTAGANDE: fem miljoner kronor på en faktura till en bostad, och fyra ägare
 * som delar en bostad, är den övre kant där ett skrivfel är troligare än en
 * verklig siffra. Skatteverket sätter ingen gräns för antalet ägare.
 * Nedre kanten på antalet ägare är en: någon måste äga bostaden.
 */
export const GRANSER = {
  arbetskostnadKr: [0, 5000000],
  materialkostnadKr: [0, 5000000],
  antalAgare: [1, 4],
  utnyttjatRotKr: [0, 500000],
  utnyttjatRutKr: [0, 500000],
  skattKr: [0, 5000000],
} as const;

/**
 * Valen för antalet ägare, i formuläret och i den delbara adressen. Varje
 * ägare har ett eget tak, så raden flyttar svaret mer än något annat val.
 */
export const AGARVAL: { varde: number; etikett: string }[] = [
  { varde: 1, etikett: 'En' },
  { varde: 2, etikett: 'Två' },
  { varde: 3, etikett: 'Tre' },
  { varde: 4, etikett: 'Fyra' },
];

/*
 * Råden skrivs enligt docs/STILGUIDE.md: högst ett tal per mening, och två
 * bara när de två talen är jämförelsen.
 */

const GOR_INTE_PROCENT_PA_HELA_FAKTURAN =
  'Räkna inte procentsatsen på hela fakturan. Avdraget gäller arbetskostnaden och ingenting annat, så material och resor ligger utanför. På en nota där materialet är halva summan blir avdraget hälften av vad du trodde, och mellanskillnaden är din.';

const GOR_INTE_MASKINHYRA_I_ARBETET =
  'Låt inte maskinhyran ligga i arbetsposten. Skatteverket undantar maskinell utrustning uttryckligen, alltså grävmaskiner, borraggregat och liknande. Maskinistens arbetade tid ger däremot avdrag, det är bara maskinen som inte gör det, så be om en faktura där de två står på var sin rad.';

const GOR_INTE_GAMMAL_FAKTURA =
  'Betala inte en faktura från förra året nu och räkna med den högre procentsatsen. Det är dagen du betalar som avgör, inte fakturans datum. Arbetet ska dessutom vara utfört, och företagets ansökan om utbetalning ska vara inne senast den 31 januari året efter att du betalade.';

const GOR_INTE_DELA_MED_ICKE_AGARE =
  'Dela inte avdraget med någon som inte äger och bor i bostaden. Skatteverket kräver båda delarna, och den som står utanför har inget eget tak att lägga till. En sambo utan andel i bostaden hjälper alltså inte notan.';

const GOR_INTE_NYBYGGT_HUS = `Räkna inte med rotavdrag på ett nybyggt hus. Är huset yngre än ${NYBYGGT_SPARRAR_AR} år, räknat från värdeåret, ger ombyggnad och tillbyggnad inget avdrag alls. Reparation och underhåll gör det däremot, oavsett husets ålder, och gränsen mellan de två är det första du ska reda ut med hantverkaren.`;

/** Decimalkomma accepteras: '12 500,50' blir 12500.5. Tomt fält ger NaN. */
function tillTal(v: string | null): number {
  if (v === null) return NaN;
  const rensad = v
    .trim()
    .replace(/\s| /g, '')
    .replace(/kr$/i, '')
    .replace(',', '.')
    .replace('−', '-');
  if (rensad === '') return NaN;
  return Number(rensad);
}

/** Kronor med mellanrum som tusentalsavgränsare, som stilguiden vill. */
export function kronor(n: number): string {
  const rundat = Math.round(n);
  const tecken = rundat < 0 ? '-' : '';
  return (
    tecken +
    Math.abs(rundat)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  );
}

/**
 * Avdraget på en arbetskostnad, innan taken. Egen funktion så att testskriptet
 * kan låsa den mot Skatteverkets räkneexempel utan att gå via resten.
 */
export function avdragRakt(arbetskostnadKr: number): number {
  return Math.round((arbetskostnadKr * ROT_PROCENT) / 100);
}

/**
 * Läser adressen. Ett tomt talfält betyder noll utom i skattefältet, där tomt
 * betyder inte angivet. Skräp i ett fält ger ett fel på just det fältet.
 */
export function tolkaQuery(q: URLSearchParams): { indata: RotavdragIndata; harIndata: boolean } {
  const nycklar = ['arbete', 'material', 'agare', 'rot', 'rut', 'skatt'];
  const harIndata = nycklar.some((n) => q.has(n));

  /** Ett valfritt talfält: saknas nyckeln gäller standardvärdet, tomt fält blir noll. */
  const tal = (nyckel: string, standardVarde: number): number => {
    const ra = q.get(nyckel);
    if (ra === null) return standardVarde;
    if (ra.trim() === '') return 0;
    return tillTal(ra);
  };

  const raSkatt = q.get('skatt');

  return {
    harIndata,
    indata: {
      arbetskostnadKr: tal('arbete', STANDARD.arbetskostnadKr),
      materialkostnadKr: tal('material', STANDARD.materialkostnadKr),
      antalAgare: tal('agare', STANDARD.antalAgare),
      utnyttjatRotKr: tal('rot', STANDARD.utnyttjatRotKr),
      utnyttjatRutKr: tal('rut', STANDARD.utnyttjatRutKr),
      skattKr: raSkatt === null || raSkatt.trim() === '' ? null : tillTal(raSkatt),
    },
  };
}

function inom(v: number, grans: readonly [number, number]): boolean {
  return Number.isFinite(v) && v >= grans[0] && v <= grans[1];
}

export function raknaRotavdrag(i: RotavdragIndata): RotavdragResultat {
  const fel: Partial<Record<keyof RotavdragIndata, string>> = {};

  if (!inom(i.arbetskostnadKr, GRANSER.arbetskostnadKr)) {
    fel.arbetskostnadKr = `Ange arbetskostnaden i kronor, mellan ${kronor(GRANSER.arbetskostnadKr[0])} och ${kronor(GRANSER.arbetskostnadKr[1])}`;
  }
  if (!inom(i.materialkostnadKr, GRANSER.materialkostnadKr)) {
    fel.materialkostnadKr = `Ange materialkostnaden i kronor, mellan ${kronor(GRANSER.materialkostnadKr[0])} och ${kronor(GRANSER.materialkostnadKr[1])}, eller lämna fältet tomt`;
  }
  if (!inom(i.antalAgare, GRANSER.antalAgare) || !Number.isInteger(i.antalAgare)) {
    fel.antalAgare = `Ange antalet ägare som hela år, mellan ${GRANSER.antalAgare[0]} och ${GRANSER.antalAgare[1]}`;
  }
  if (!inom(i.utnyttjatRotKr, GRANSER.utnyttjatRotKr)) {
    fel.utnyttjatRotKr = 'Ange det utnyttjade rotavdraget i kronor, eller lämna fältet tomt';
  }
  if (!inom(i.utnyttjatRutKr, GRANSER.utnyttjatRutKr)) {
    fel.utnyttjatRutKr = 'Ange det utnyttjade rutavdraget i kronor, eller lämna fältet tomt';
  }
  if (i.skattKr !== null && !inom(i.skattKr, GRANSER.skattKr)) {
    fel.skattKr = `Ange skatten i kronor, mellan ${kronor(GRANSER.skattKr[0])} och ${kronor(GRANSER.skattKr[1])}, eller lämna fältet tomt`;
  }
  if (Object.keys(fel).length > 0) return { status: 'ogiltig', fel };

  const fakturaKr = i.arbetskostnadKr + i.materialkostnadKr;
  const raktAvdragKr = avdragRakt(i.arbetskostnadKr);

  /*
   * De tre taken, i den ordning Skatteverket beskriver dem.
   *
   * Rot-taket och det gemensamma taket är båda per person och år, så ett jobb
   * på en bostad med flera ägare har så många tak som det finns ägare. Det
   * utnyttjade rotavdraget äter av båda; det utnyttjade rutavdraget äter bara
   * av det gemensamma. Därför är fälten två och inte ett: ett enda fält hade
   * inte kunnat skilja dem åt, och skillnaden är hela poängen med att det
   * gemensamma taket finns.
   */
  const rotTakTotaltKr = ROT_TAK_KR * i.antalAgare;
  const gemensamtTakTotaltKr = GEMENSAMT_TAK_KR * i.antalAgare;
  const kvarRotTak = Math.max(0, rotTakTotaltKr - i.utnyttjatRotKr);
  const kvarGemensamt = Math.max(0, gemensamtTakTotaltKr - i.utnyttjatRotKr - i.utnyttjatRutKr);

  /*
   * Skatten som tak. Skattereduktionen räknas av mot årets skatt, och det som
   * redan är utnyttjat i rot och rut har redan tagit av samma skatt.
   * Lämnas fältet tomt vägs skatten inte alls, och svaret säger det.
   */
  const kvarSkatt =
    i.skattKr === null ? Number.POSITIVE_INFINITY : Math.max(0, i.skattKr - i.utnyttjatRotKr - i.utnyttjatRutKr);

  const avdragKr = Math.round(Math.min(raktAvdragKr, kvarRotTak, kvarGemensamt, kvarSkatt));
  const kapatKr = raktAvdragKr - avdragKr;

  const begransatAv: Begransning =
    avdragKr === raktAvdragKr
      ? 'procent'
      : avdragKr === kvarSkatt
        ? 'skatt'
        : avdragKr === kvarGemensamt && kvarGemensamt < kvarRotTak
          ? 'gemensamt-tak'
          : 'rot-tak';

  const attBetalaKr = fakturaKr - avdragKr;
  const utanAvdragKr = i.materialkostnadKr;
  const andelUtanAvdragProcent = fakturaKr === 0 ? 0 : Math.round((utanAvdragKr / fakturaKr) * 100);

  const kvarRotTakKr = Math.max(0, kvarRotTak - avdragKr);
  const kvarGemensamtKr = Math.max(0, kvarGemensamt - avdragKr);

  // Beskedet i spalten: en rubrik och en rad, aldrig mer.
  const beskedRubrik =
    begransatAv === 'procent'
      ? `${ROT_PROCENT} procent av arbetet`
      : begransatAv === 'skatt'
        ? 'Skatten sätter gränsen'
        : begransatAv === 'gemensamt-tak'
          ? 'Det gemensamma taket slog i'
          : 'Rot-taket slog i';

  const beskedRad =
    begransatAv === 'procent'
      ? 'Inget tak slog i, så avdraget är hela procentsatsen på arbetskostnaden.'
      : begransatAv === 'skatt'
        ? `Avdraget kan inte bli större än skatten du betalar, och därför försvann ${kronor(kapatKr)} kr.`
        : begransatAv === 'gemensamt-tak'
          ? `Rot och rut räknas ihop, och det taket hade du redan ätit av. Därför försvann ${kronor(kapatKr)} kr.`
          : `Arbetskostnaden är större än taket bär, så ${kronor(kapatKr)} kr av avdraget föll bort.`;

  const agarText =
    i.antalAgare === 1 ? 'en ägare' : `${i.antalAgare} ägare`;

  const regler: Regel[] = [];

  // 1. Vad avdraget alls gäller. Den rad hela fältet missar.
  regler.push({
    slag: 'arbete',
    text:
      i.materialkostnadKr > 0
        ? `Bara arbetskostnaden ger avdrag. Av din faktura på ${kronor(fakturaKr)} kr står ${kronor(utanAvdragKr)} kr utanför, alltså material och annat som inte är arbete. Maskinell utrustning är undantagen med namns nämnande: grävmaskiner, borraggregat och liknande ger inget avdrag ens när de står på arbetsraden.`
        : 'Bara arbetskostnaden ger avdrag. Material och resor gör det inte, och maskinell utrustning är undantagen med namns nämnande: grävmaskiner, borraggregat och liknande ger inget avdrag ens när de står på arbetsraden.',
    kalla: 'Skatteverket, ger arbetet rätt till rotavdrag',
    url: SKATTEVERKET_GER_RATT,
  });

  // 2. Procentsatsen, och vad den ger på just den här arbetskostnaden.
  regler.push({
    slag: 'procent',
    text: `Företaget får dra av högst ${ROT_PROCENT} procent av arbetskostnaden på fakturan. På ${kronor(i.arbetskostnadKr)} kr i arbete blir det ${kronor(raktAvdragKr)} kr, innan något tak vägs in.`,
    kalla: 'Skatteverket, så fungerar rotavdraget',
    url: SKATTEVERKET_ROTAVDRAGET,
  });

  /*
   * 3. Betalningsdatumet. Den rad ingen konkurrent har.
   *
   * Källan är regelsidan och inte nyheten om höjningen: Skatteverket skriver
   * det rakt ut under rubriken "Din betalning styr vilket år rotavdraget
   * hamnar på". En nyhet kan tas bort, en regelsida kan inte, och raden ska
   * överleva nästa gång procentsatsen ändras. Nyhetslänken står kvar i
   * antagandetabellens rad om den tillfälliga nivån, där den hör hemma.
   */
  regler.push({
    slag: 'datum',
    text: `Det är dagen du betalar fakturan som avgör procentsatsen, inte fakturans datum. Den högre nivån på ${ROT_PROCENT_HOJT} procent gällde färdiga arbeten som betalades mellan ${HOJNINGEN_FRAN} och ${HOJNINGEN_TILL}, så betalar du i dag gäller ${ROT_PROCENT} procent. Arbetet ska dessutom vara utfört, och företagets ansökan om utbetalning ska vara inne senast den ${ANSOKAN_SENAST}.`,
    kalla: 'Skatteverket, så fungerar rotavdraget',
    url: SKATTEVERKET_ROTAVDRAGET,
  });

  // 3b. Femårsregeln. Den skiljer ombyggnad från reparation, och den saknas i hela fältet.
  regler.push({
    slag: 'arbete',
    text: `Är huset yngre än ${NYBYGGT_SPARRAR_AR} år ger ombyggnad och tillbyggnad inget avdrag. Åren räknas från värdeåret, alltså det år huset byggdes färdigt, och det är året som gäller, inte dagen. Reparation och underhåll ger däremot avdrag oavsett hur gammalt huset är, så gränsen mellan de två är värd att reda ut med hantverkaren innan fakturan skrivs.`,
    kalla: 'Skatteverket, så fungerar rotavdraget',
    url: SKATTEVERKET_ROTAVDRAGET,
  });

  // 4. Taket per person, med ägarna inräknade.
  regler.push({
    slag: 'tak',
    text: `Rotavdraget är högst ${kronor(ROT_TAK_KR)} kr per person och år. Bostaden har ${agarText} som kan dela på det, så taket för det här jobbet är ${kronor(rotTakTotaltKr)} kr.${
      i.utnyttjatRotKr > 0 ? ` Av det är ${kronor(i.utnyttjatRotKr)} kr redan utnyttjat i år.` : ''
    }`,
    kalla: 'Skatteverket, så fungerar rotavdraget',
    url: SKATTEVERKET_ROTAVDRAGET,
  });

  // 5. Det gemensamma taket. Två tal i samma mening, för de två talen är jämförelsen.
  regler.push({
    slag: 'tak',
    text: `Rot och rut räknas ihop och är tillsammans högst ${kronor(GEMENSAMT_TAK_KR)} kr per person och år, varav rot får vara ${kronor(ROT_TAK_KR)} kr. Med ${agarText} är det gemensamma taket ${kronor(gemensamtTakTotaltKr)} kr.${
      i.utnyttjatRutKr > 0 ? ` Rutavdraget du redan tagit ut, ${kronor(i.utnyttjatRutKr)} kr, ligger inne i det.` : ''
    }`,
    kalla: 'Skatteverket, rot och rut',
    url: SKATTEVERKET_ROT_OCH_RUT,
  });

  // 6. Skatten som tak. Den rad räknefrasen "rotavdrag hur mycket" saknar svar på.
  regler.push({
    slag: 'skatt',
    text:
      i.skattKr === null
        ? `Avdraget kan aldrig bli större än skatten du betalar in under året. Det räknas av mot ${SKATTER_SOM_RAKNAS_AV}. Du har inte fyllt i någon skatt, så den gränsen är inte vägd här, och för den som tjänar lite är det ofta den som sätter taket och inte beloppet ovan.`
        : `Avdraget kan aldrig bli större än skatten du betalar in under året. Du har fyllt i ${kronor(i.skattKr)} kr, och efter det som redan är utnyttjat finns ${kronor(kvarSkatt)} kr kvar att räkna av mot. Avdraget räknas av mot ${SKATTER_SOM_RAKNAS_AV}.`,
    kalla: 'Skatteverket, svar på frågan om hur mycket du måste tjäna',
    url: SKATTEVERKET_SKATTEN,
  });

  // 7. Vem som får göra avdraget alls. Sex villkor, inte tre.
  regler.push({
    slag: 'arbete',
    text: 'Du ska äga bostaden under den period arbetet utförs och bo i den, eller låta en förälder göra det. Du ska ha fyllt 18 år senast vid årets slut, vara obegränsat skattskyldig i Sverige och betala med kort eller överföring. En hyrd bostad ger inget rotavdrag alls, oavsett vad du gör i den, och kontanter, arbete du utför åt dig själv och arbete du köper av en närstående ger det inte heller.',
    kalla: 'Skatteverket, så fungerar rotavdraget',
    url: SKATTEVERKET_ROTAVDRAGET,
  });

  return {
    status: 'ok',
    avdragKr,
    raktAvdragKr,
    kapatKr,
    fakturaKr,
    attBetalaKr,
    utanAvdragKr,
    andelUtanAvdragProcent,
    rotTakTotaltKr,
    gemensamtTakTotaltKr,
    kvarRotTakKr,
    kvarGemensamtKr,
    begransatAv,
    beskedRubrik,
    beskedRad,
    regler,
    gorInteDetHar: [
      GOR_INTE_PROCENT_PA_HELA_FAKTURAN,
      GOR_INTE_MASKINHYRA_I_ARBETET,
      GOR_INTE_GAMMAL_FAKTURA,
      GOR_INTE_NYBYGGT_HUS,
      GOR_INTE_DELA_MED_ICKE_AGARE,
    ],
  };
}
