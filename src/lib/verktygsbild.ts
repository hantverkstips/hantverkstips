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
 * Varumärkesillustrationerna, tillagda 2026-09-19: tumstocken som form, ingen
 * text, samma stil som symbolen och startsidans hero. Sidhuvudet och galleriet
 * visar den när den finns och skissen annars, så verktyg utan varumärkesbild
 * fungerar som förut. Se docs/DESIGN.md avsnitt 7, Illustrationer för verktygen.
 */
const varumarkesbilder = import.meta.glob<ImageMetadata>('../assets/illustrationer/rakna/varumarke/*.svg', {
  eager: true,
  import: 'default',
});

/** Varumärkesillustrationen till verktyget, 600 × 360 (5:3). `undefined` när den inte är ritad. */
export function verktygsVarumarkesbild(slug: string): ImageMetadata | undefined {
  return varumarkesbilder[`../assets/illustrationer/rakna/varumarke/${slug}.svg`];
}

/**
 * Delningsbilden i 1200 × 630, ritad till public/og/. Sökvägen är en sträng i
 * public och behöver ingen kontroll: saknas filen faller layouten aldrig, och
 * delningstjänsten tar sajtens standardbild.
 */
export function verktygsDelningsbild(slug: string): string {
  return `/og/rakna-${slug}.png`;
}
