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

/** "12 september 2026". Används i meta-rader och författarrutor. */
export function formateraDatum(d: Date): string {
  return `${d.getDate()}${HART}${MANADER[d.getMonth()]}${HART}${d.getFullYear()}`;
}

/** ISO-datum för <time datetime> och strukturerad data. */
export function isoDatum(d: Date): string {
  return d.toISOString().slice(0, 10);
}
