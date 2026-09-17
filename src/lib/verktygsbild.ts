/**
 * Bilderna som hör till ett verktyg under /rakna/: illustrationen som står i
 * sidhuvudet på verktygssidan och på kortet i galleriet, och delningsbilden
 * som går ut som og:image.
 *
 * Modulen ligger utanför src/lib/kalkyl/, eftersom formelmodulerna där ska gå
 * att köra med node i testskripten. `import.meta.glob` är Vite och hade brutit
 * det. Se docs/SPEC-SIDMALLAR.md avsnitt 4.7.
 */

/**
 * Eager glob: alla skisser läses vid bygget, och en slug utan fil ger
 * `undefined` i stället för byggfel. Sidorna ska fungera innan skisserna finns.
 * Nyckeln är sökvägen relativt den här filen.
 */
const illustrationer = import.meta.glob<ImageMetadata>('../assets/illustrationer/rakna/*.svg', {
  eager: true,
  import: 'default',
});

/** Skissen till verktyget, 600 × 360 (5:3). `undefined` när filen inte finns än. */
export function verktygsillustration(slug: string): ImageMetadata | undefined {
  return illustrationer[`../assets/illustrationer/rakna/${slug}.svg`];
}

/**
 * Delningsbilden i 1200 × 630, ritad till public/og/. Sökvägen är en sträng i
 * public och behöver ingen kontroll: saknas filen faller layouten aldrig, och
 * delningstjänsten tar sajtens standardbild.
 */
export function verktygsDelningsbild(slug: string): string {
  return `/og/rakna-${slug}.png`;
}
