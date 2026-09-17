/**
 * Delningsbilden (og:image) för en innehållssida.
 *
 * scripts/generera-delningsbilder.mjs ritar en PNG i 1200 × 630 per publicerad
 * sida till public/og/[samling]-[slug].png, och skriptet ingår i npm run build
 * före astro build. Sidan skickar sökvägen hit som `ogBild` till Bas.astro och
 * som `bildUrl` till artikel() i src/lib/strukturdata.ts.
 *
 * Varför en funktion och inte bara en sträng: sidans egen bild i frontmatter är
 * en SVG, och en SVG duger varken som og:image (Facebook, LinkedIn och Slack
 * hämtar ingen) eller som Article-bild i Google. Dessutom inlinear Vite en
 * liten SVG som data-URI, vilket gör den oanvändbar som absolut adress. PNG:en
 * är svaret på båda, och kontrollen här gör att en sida vars bild ännu inte är
 * byggd faller tillbaka på sajtens standardbild i stället för att peka på 404.
 *
 * Kontrollen sker vid bygget, i node, och kostar ett existsSync per sida.
 * Sökvägen utgår från process.cwd(), alltså projektroten: både astro dev och
 * astro build körs därifrån, medan import.meta.url hade pekat på den byggda
 * modulen i dist och inte på src/lib/.
 */
import { existsSync } from 'node:fs';
import { join } from 'node:path';

/** Samlingarna som får en egen delningsbild. Speglar SAMLINGAR i skriptet. */
export type Delningssamling = 'guider' | 'kunskap' | 'tester' | 'jamforelser' | 'pelare';

const OG_KATALOG = join(process.cwd(), 'public', 'og');

/**
 * `/og/[samling]-[slug].png` när filen finns, annars undefined. Undefined låter
 * Bas.astro använda /og-standard.png och artikel() utelämna image-fältet.
 */
export function delningsbild(samling: Delningssamling, slug: string): string | undefined {
  const fil = `${samling}-${slug}.png`;
  return existsSync(join(OG_KATALOG, fil)) ? `/og/${fil}` : undefined;
}
