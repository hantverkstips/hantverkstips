/**
 * Talkortens tal på startsidan (Verktygskort variant tal). För varje räknare
 * vars sida vid standardvärdena, utan adress, visar ett tal i text-siffra i
 * resultatspalten: det första sådana talet, räknat med formelmodulens STANDARD
 * och rakna[Slug] och formaterat med samma funktion som sidan, följt av sidans
 * enhet. Räknare vars första stora värde är ett ord (Ja, Nej, Plugg, Vet inte
 * än) har ingen post; kortet visar då registrets svar.
 *
 * Ändras en räknares standardvärden eller formatering ändras posten här i
 * samma ändring. Villkoret skrivs av hantverkaren (texter-designlyft-2026-10-02).
 * Ingen Astro-import: modulen går att köra med node.
 * Spec: docs/briefer/spec-designlyft-a-2026-10-02.md avsnitt 5.2.
 */
import { formateraTal } from '../format.ts';
import { raknaAltan, STANDARD as ALTAN } from './altan.ts';
import { raknaAvfuktare, STANDARD as AVFUKTARE } from './avfuktare.ts';
import { raknaDaggpunkt, STANDARD as DAGGPUNKT } from './daggpunkt.ts';
import { raknaDranering, STANDARD as DRANERING } from './dranering.ts';
import { raknaFuktkvot, STANDARD as FUKTKVOT } from './fuktkvot.ts';
import { raknaElkostnad, STANDARD as ELKOSTNAD } from './elkostnad.ts';
import { raknaFasadyta, STANDARD as FASADYTA } from './fasadyta.ts';
import { raknaGipsskruv, STANDARD as GIPSSKRUV } from './gipsskruv.ts';
import { raknaInnervagg, STANDARD as INNERVAGG } from './innervagg.ts';
import { genereraKontrollplan, STANDARD as KONTROLLPLAN } from './kontrollplan.ts';
import { raknaKvadratmeter, STANDARD as KVADRATMETER } from './kvadratmeter.ts';
import { raknaMalaUte, STANDARD as MALA_UTE } from './mala-ute.ts';
import { KOK_STANDARD, krText, raknaBadrumKostnad, raknaKokKostnad, STANDARD as BADRUM } from './renovering.ts';
import { kronor as rotKronor, raknaRotavdrag, STANDARD as ROTAVDRAG } from './rotavdrag.ts';
import { m2Text } from './tak.ts';
import { raknaTakavvattning, STANDARD as TAKAVVATTNING } from './takavvattning.ts';
import { kronor as takKronor, raknaTakbyte, STANDARD as TAKBYTE } from './takbyte.ts';
import { raknaTrappa, STANDARD as TRAPPA } from './trappa.ts';
import { raknaUVarde, STANDARD as U_VARDE, uText } from './u-varde.ts';

export interface Korttal {
  tal: string;
  villkor: string;
}

/** Hårt mellanslag mellan talet och enheten, som sidornas &nbsp;. */
const H = ' ';

/** Kvadratmetersidans talText: hela tal utan decimal, annars en eller två. */
function kvmTalText(n: number): string {
  const rundat = Math.round(n * 100) / 100;
  if (Number.isInteger(rundat)) return formateraTal(rundat);
  if (Math.abs(Math.round(rundat * 10) / 10 - rundat) < 1e-9) return formateraTal(rundat, 1);
  return formateraTal(rundat, 2);
}

/** Resultatet vid standardvärdena. Ett ogiltigt resultat där är ett fel i formelmodulen. */
function ok<T extends { status: string }>(r: T, slug: string): Exclude<T, { status: 'ogiltig' }> {
  if (r.status === 'ogiltig') throw new Error(`[korttal] ${slug}: standardvärdena ger inget svar`);
  return r as Exclude<T, { status: 'ogiltig' }>;
}

/**
 * Ett fält som bara finns i resultatets svarsläge (inte i "utanfor"). Saknas det
 * vid standardvärdena är det ett fel i formelmodulen.
 */
function falt<T, K extends string>(r: T, nyckel: K, slug: string): Extract<T, { [P in K]: unknown }>[K] {
  if (typeof r !== 'object' || r === null || !(nyckel in r)) {
    throw new Error(`[korttal] ${slug}: standardvärdena ger inget ${nyckel}`);
  }
  return (r as Extract<T, { [P in K]: unknown }>)[nyckel];
}

/** Talet per slug, räknat första gången det behövs. Villkoret är hantverkarens. */
const TAL: Record<string, { tal: () => string; villkor: string }> = {
  daggpunkt: {
    tal: () => `${formateraTal(ok(raknaDaggpunkt(DAGGPUNKT), 'daggpunkt').daggpunktC, 1)}${H}grader`,
    villkor: 'vid 20 grader och 50 % luftfuktighet', // korttal.daggpunkt
  },
  fuktkvot: {
    tal: () => `${formateraTal(falt(raknaFuktkvot(FUKTKVOT), 'fuktkvot', 'fuktkvot'), 1)}${H}%`,
    villkor: 'TEXT SAKNAS', // korttal.fuktkvot
  },
  avfuktare: {
    tal: () => `${falt(raknaAvfuktare(AVFUKTARE), 'marktKapacitetLiter', 'avfuktare')}${H}liter per dygn`,
    villkor: 'märkt kapacitet, kall källare på 40 kvm', // korttal.avfuktare
  },
  elkostnad: {
    tal: () => `${formateraTal(ok(raknaElkostnad(ELKOSTNAD), 'elkostnad').kwhPerPeriod, 1)}${H}kWh`,
    villkor: '320 W, 8 timmar om dygnet i 30 dagar', // korttal.elkostnad
  },
  'u-varde': {
    tal: () => {
      const r = ok(raknaUVarde(U_VARDE), 'u-varde');
      return `${uText(r.uSlut, r.del)}${H}W/m²K`;
    },
    villkor: 'efter 300 mm stenull på vinden', // korttal.u-varde
  },
  innervagg: {
    tal: () => `${formateraTal(ok(raknaInnervagg(INNERVAGG), 'innervagg').antalReglar)}${H}reglar`,
    villkor: 'en vägg på 4 meter, 2,5 meter hög', // korttal.innervagg
  },
  gipsskruv: {
    tal: () => `${ok(raknaGipsskruv(GIPSSKRUV), 'gipsskruv').langdMm}${H}mm`,
    villkor: 'ett lag 12,5 mm gips på träregel', // korttal.gipsskruv
  },
  kvadratmeter: {
    tal: () => `${kvmTalText(ok(raknaKvadratmeter(KVADRATMETER), 'kvadratmeter').valdKvm)}${H}kvm`,
    villkor: 'ett rum på 4 × 3 meter, alla ytor', // korttal.kvadratmeter
  },
  altan: {
    tal: () => `${formateraTal(ok(raknaAltan(ALTAN), 'altan').lopmeterTrall, 0)}${H}löpmeter`,
    villkor: 'trall till en altan på 4 × 3 meter', // korttal.altan
  },
  dranering: {
    tal: () => {
      const r = ok(raknaDranering(DRANERING), 'dranering');
      // Sidans kr(): formateraTal(Math.round(n)), och spannet som sidan skriver det.
      const kr = (n: number) => formateraTal(Math.round(n));
      return `${kr(r.arbeteLagKr)} till ${kr(r.arbeteHogKr)}${H}kr`;
    },
    villkor: 'arbete före rotavdrag, hus 12 × 8 m', // korttal.dranering
  },
  rotavdrag: {
    tal: () => `${rotKronor(ok(raknaRotavdrag(ROTAVDRAG), 'rotavdrag').avdragKr)}${H}kr`,
    villkor: 'på 100 000 kr i arbetskostnad', // korttal.rotavdrag
  },
  trappa: {
    tal: () => `${ok(raknaTrappa(TRAPPA), 'trappa').steghojdHelMm}${H}mm`,
    villkor: 'steghöjd vid 2 700 mm våningshöjd', // korttal.trappa
  },
  'mala-ute': {
    tal: () => ok(raknaMalaUte(MALA_UTE), 'mala-ute').stortTal,
    villkor: 'sluta måla då, en dag på 15 grader', // korttal.mala-ute
  },
  'badrum-kostnad': {
    tal: () => `${krText(falt(raknaBadrumKostnad(BADRUM), 'attBetalaKr', 'badrum-kostnad'))}${H}kr`,
    villkor: 'enkelt badrum på 5 kvm, efter rotavdrag', // korttal.badrum-kostnad
  },
  'kok-kostnad': {
    tal: () => {
      const r = ok(raknaKokKostnad(KOK_STANDARD), 'kok-kostnad');
      // Sidans stora tal: före rotavdraget i läget villkor, annars att betala.
      return `${krText(r.rotLage === 'villkor' ? r.foreRotKr : r.attBetalaKr)}${H}kr`;
    },
    villkor: '16 nya luckor, efter rotavdraget', // korttal.kok-kostnad
  },
  takbyte: {
    tal: () => `${takKronor(falt(raknaTakbyte(TAKBYTE), 'lag', 'takbyte').attBetalaKr)}${H}kr`,
    villkor: 'betongpannor, 12 × 9 m, efter rotavdrag', // korttal.takbyte
  },
  takavvattning: {
    tal: () => `${falt(raknaTakavvattning(TAKAVVATTNING), 'dim', 'takavvattning').ranna}${H}mm`,
    villkor: 'rännans bredd för ett hus på 12 × 9 m', // korttal.takavvattning
  },
  fasadyta: {
    tal: () => `${m2Text(ok(raknaFasadyta(FASADYTA), 'fasadyta').fasadytaM2)}${H}m²`,
    villkor: 'hus 10 × 8 m, fönstren avdragna', // korttal.fasadyta
  },
  kontrollplan: {
    tal: () => `${falt(genereraKontrollplan(KONTROLLPLAN), 'punkter', 'kontrollplan').length}${H}kontroller`,
    villkor: 'för en altan vid huset', // korttal.kontrollplan
  },
};

const cache = new Map<string, Korttal>();

/** Talet och villkoret för räknaren, eller undefined när dess svar inte är ett tal. */
export function korttal(slug: string): Korttal | undefined {
  const post = TAL[slug];
  if (!post) return undefined;
  const sparad = cache.get(slug);
  if (sparad) return sparad;
  const ut = { tal: post.tal(), villkor: post.villkor };
  cache.set(slug, ut);
  return ut;
}
