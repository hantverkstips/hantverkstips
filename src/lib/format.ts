/**
 * Formatering av tal och datum enligt docs/STILGUIDE.md: decimalkomma,
 * mellanslag som tusentalsavgränsare, enheter med mellanslag.
 * Mellanslagen är hårda (U+00A0) så att "4 990 kr" aldrig radbryts.
 */

const HART = ' ';

export function formateraTal(n: number, decimaler = 0): string {
  const fast = n.toFixed(decimaler);
  const [heltal, dec] = fast.split('.');
  const grupperat = heltal!.replace(/\B(?=(\d{3})+(?!\d))/g, HART);
  return dec ? `${grupperat},${dec}` : grupperat;
}

/**
 * Ett värde ur databasens specs med decimalkomma: 13.2 och "13.2" blir "13,2",
 * 1250 blir "1 250". Talet behåller sina decimaler, högst två. Allt annat,
 * som "IP44" eller "12–13 dB(A)", returneras oförändrat.
 */
export function formateraSpecVarde(v: unknown): string {
  let n: number | null = null;
  if (typeof v === 'number' && Number.isFinite(v)) n = v;
  else if (typeof v === 'string' && /^-?\d+\.\d+$/.test(v)) n = Number(v);
  if (n === null) return String(v);
  const dec = /\.(\d+)$/.exec(String(n))?.[1]?.length ?? 0;
  return formateraTal(n, Math.min(dec, 3));
}

/**
 * Ett tal med ordet efter i rätt numerus: "1 timme", "8 timmar", "1,5 timmar".
 * Singular bara när talet är exakt 1. Heltal skrivs utan decimal, andra tal med
 * en; mellanslaget är hårt, som i formateraPris.
 */
export function antalOrd(n: number, en: string, flera: string): string {
  return `${formateraTal(n, Number.isInteger(n) ? 0 : 1)}${HART}${n === 1 ? en : flera}`;
}

/** "4 990 kr". Ören visas aldrig. */
export function formateraPris(kr: number): string {
  return `${formateraTal(Math.round(kr))}${HART}kr`;
}

const MANADER_KORT = ['jan', 'feb', 'mars', 'apr', 'maj', 'juni', 'juli', 'aug', 'sep', 'okt', 'nov', 'dec'];
const MANADER = [
  'januari',
  'februari',
  'mars',
  'april',
  'maj',
  'juni',
  'juli',
  'augusti',
  'september',
  'oktober',
  'november',
  'december',
];

/** "12 sep". Används i finstilt under köpknappar. */
export function formateraDatumKort(d: Date): string {
  return `${d.getDate()}${HART}${MANADER_KORT[d.getMonth()]}`;
}

/** "16 sep 2026". Används i artikelkortens metarad, där året behövs men inte plats. */
export function formateraDatumKortMedAr(d: Date): string {
  return `${d.getDate()}${HART}${MANADER_KORT[d.getMonth()]}${HART}${d.getFullYear()}`;
}

/** "September". Månadens namn med versal första bokstav, för säsongsetiketten. */
export function manadNamn(d: Date): string {
  const namn = MANADER[d.getMonth()] ?? '';
  return namn.charAt(0).toUpperCase() + namn.slice(1);
}

/** "12 september 2026". Används i meta-rader och författarrutor. */
export function formateraDatum(d: Date): string {
  return `${d.getDate()}${HART}${MANADER[d.getMonth()]}${HART}${d.getFullYear()}`;
}

/** ISO-datum för <time datetime> och strukturerad data. */
export function isoDatum(d: Date): string {
  return d.toISOString().slice(0, 10);
}
