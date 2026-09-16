/**
 * Adresser som är noindex och därför inte hör hemma i sitemapen.
 *
 * Sitemapen byggs av @astrojs/sitemap, och dess filter körs i astro.config.mjs,
 * utanför Astros runtime: `astro:content` finns inte där, så frontmattret läses
 * direkt från filerna i stället. Kategorisidan är enda sidtypen med fältet
 * noindex (`src/content/kategorier/[kategori].md`, se docs/ARKITEKTUR.md);
 * lägger vi fältet på fler samlingar utökas listan här.
 *
 * Utkast behöver inte hanteras: de byggs inte alls och kan därför inte hamna
 * i sitemapen.
 *
 * Ren Node, inga Astro-beroenden, så att modulen kan laddas när konfigurationen
 * läses. Parsas med yaml, samma bibliotek som scripts/kontrollera-innehall.ts.
 */
import { globSync, readFileSync } from 'node:fs';
import { parse } from 'yaml';

/** Sidor som mallarna sätter noindex på utan att något frontmatter styr det. */
const FASTA = ['/404/'];

/** Frontmattret mellan de två `---`-raderna, eller null när filen saknar sådant. */
function frontmatter(text) {
  const traff = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
  if (!traff) return null;
  const data = parse(traff[1]);
  return data && typeof data === 'object' ? data : null;
}

/**
 * Alla adresser i bygget som har `<meta name="robots" content="noindex">`.
 * Adressen är kategorislugen i roten med avslutande snedstreck, precis som
 * `kategoriUrl()` i src/lib/innehall.ts bygger den.
 *
 * @returns {Set<string>} sökvägar, till exempel `/luftavfuktare/`
 */
export function noindexAdresser() {
  const adresser = new Set(FASTA);
  const filer = globSync('src/content/kategorier/*.{md,mdx}');
  for (const fil of filer) {
    const data = frontmatter(readFileSync(fil, 'utf8'));
    if (!data?.noindex) continue;
    const slug = (fil.split(/[\\/]/).pop() ?? '').replace(/\.(md|mdx)$/, '');
    adresser.add(`/${slug}/`);
  }
  return adresser;
}
