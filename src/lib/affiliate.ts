/**
 * Affiliatelänkar och klickspårning. Se docs/AFFILIATE.md avsnitt 2 och 6.
 *
 * Kedjan: <Kopknapp> bygger en /go/-länk med modul, sidtyp och position som
 * query-parametrar. /go/[slug].ts loggar klicket, får ett id, gör om det till bas 36
 * (epi) och bygger spårningslänken från butiker.lankmall. Ingen annan kod bygger
 * länkar till butiker.
 */

/** Var på sidan knappen satt. Kolumnen klick.modul har en check-constraint på listan. */
export const KLICK_MODULER = [
  'varaval',
  'tabell',
  'kort_kompakt',
  'kort_full',
  'kalkylator',
  'behovslista',
  'avslut',
] as const;
export type KlickModul = (typeof KLICK_MODULER)[number];

/**
 * Vilken sidtyp knappen satt på. Rutten sätter den, se Astro.locals.sidtyp.
 * Listan speglas av check-constrainten klick_sidtyp_check i databasen
 * (migration 0002, utökad med kunskap i 0003); ändras den ena ändras den andra.
 */
export const SIDTYPER = [
  'guide',
  'problemguide',
  'projektguide',
  'test',
  'kategori',
  'verktyg',
  'jamforelse',
  'kunskap',
] as const;
export type Sidtyp = (typeof SIDTYPER)[number];

export function arKlickModul(v: string | null | undefined): v is KlickModul {
  return typeof v === 'string' && (KLICK_MODULER as readonly string[]).includes(v);
}

export function arSidtyp(v: string | null | undefined): v is Sidtyp {
  return typeof v === 'string' && (SIDTYPER as readonly string[]).includes(v);
}

/** Klickradens id som EPI. Bas 36 ger korta, URL-säkra värden: 1 000 000 blir "lfls". */
export function tillBas36(id: number): string {
  if (!Number.isInteger(id) || id < 0) throw new Error(`Ogiltigt klick-id: ${id}`);
  return id.toString(36);
}

export function franBas36(epi: string): number {
  return parseInt(epi, 36);
}

export interface GoParametrar {
  butik?: string;
  modul?: KlickModul;
  sidtyp?: Sidtyp;
  position?: number;
}

/** Bygger /go/-länken som Kopknapp använder. Bara kända parametrar följer med. */
export function goLank(produkt: string, p: GoParametrar = {}): string {
  const q = new URLSearchParams();
  if (p.butik) q.set('butik', p.butik);
  if (p.modul) q.set('modul', p.modul);
  if (p.sidtyp) q.set('sidtyp', p.sidtyp);
  if (p.position !== undefined && Number.isInteger(p.position) && p.position > 0) {
    q.set('position', String(p.position));
  }
  const fraga = q.toString();
  return `/go/${produkt}/${fraga ? `?${fraga}` : ''}`;
}

export interface SparlankVarden {
  /** Klickradens id i bas 36. */
  epi: string;
  /** Kategori-slug, så att nätverkets statistik går att läsa utan databas. */
  epi2?: string;
  /** Butikens egen produktadress (erbjudanden.butik_url). URL-kodas och ska ligga sist i mallen. */
  url: string;
}

/** Platshållare mallen får innehålla. Allt annat i {} är ett ifyllt värde som saknas. */
const KANDA_PLATSHALLARE = new Set(['epi', 'epi2', 'url']);

/**
 * Id:n som nätverket ska byta ut innan programmet är godkänt. En mall med dem
 * kvar skickar läsaren till en död sida hos nätverket i stället för till butiken.
 */
const OIFYLLDA_ID = /ANNONS_ID|KANAL_ID/;

/**
 * Varför mallen inte duger, annars null. Ett fel här betyder att /go/ ska falla
 * tillbaka på erbjudanden.affiliate_url, som är butikens egen produktadress:
 * ospårat är bättre än trasigt.
 */
export function lankmallFel(lankmall: string | null | undefined): string | null {
  if (!lankmall || lankmall.trim() === '') return 'lankmall saknas';
  if (OIFYLLDA_ID.test(lankmall)) return 'lankmall har oifyllda id:n (ANNONS_ID eller KANAL_ID)';
  const okanda = [...lankmall.matchAll(/\{([^}]*)\}/g)]
    .map((m) => m[1] ?? '')
    .filter((namn) => !KANDA_PLATSHALLARE.has(namn));
  if (okanda.length > 0) return `lankmall har okända platshållare: ${okanda.map((n) => `{${n}}`).join(', ')}`;
  if (!lankmall.includes('{url}')) return 'lankmall saknar {url}';
  return null;
}

/**
 * Vakt framför byggSparlank. Duger mallen inte varnar den en gång per butik och
 * returnerar false, så att anroparen kan använda affiliate_url i stället.
 */
const varnadeMallar = new Set<string>();
export function anvandbarLankmall(lankmall: string | null | undefined, butik = 'okänd butik'): boolean {
  const fel = lankmallFel(lankmall);
  if (!fel) return true;
  if (!varnadeMallar.has(butik)) {
    varnadeMallar.add(butik);
    console.warn(`[affiliate] ${butik}: ${fel}. Faller tillbaka på erbjudandets affiliate_url.`);
  }
  return false;
}

/**
 * Fyller i butiker.lankmall. Platshållare: {epi}, {epi2}, {url}.
 * Exempel på mall (Adtraction):
 * https://track.adtraction.com/t/t?a=A&as=AS&t=2&tk=1&epi={epi}&epi2={epi2}&url={url}
 *
 * Kastar hellre än bygger en halvfärdig länk. Anropa anvandbarLankmall först.
 */
export function byggSparlank(lankmall: string, v: SparlankVarden): string {
  const fel = lankmallFel(lankmall);
  if (fel) throw new Error(fel);
  return lankmall
    .replace('{epi}', encodeURIComponent(v.epi))
    .replace('{epi2}', encodeURIComponent(v.epi2 ?? ''))
    .replace('{url}', encodeURIComponent(v.url));
}
