/**
 * Strängarbetet bakom <Illustration>: vilket läge en skiss ska renderas i,
 * måtten ur viewBox, och den inlinade markupen med suffixade idn.
 *
 * Modulen importerar ingenting från Astro eller Vite och går därför att köra
 * med node i scripts/test-illustration.mjs, på samma sätt som formelmodulerna
 * i src/lib/kalkyl/. Komponenten äger globbarna, filnamnen i felmeddelandena
 * och renderingen; den här filen ser bara en sträng.
 */

/** img: filen serveras som <img src> och cachas. inline: SVG:n skrivs i HTML:en. */
export type Lage = 'img' | 'inline';

/**
 * Kommentarer räknas inte när läget väljs. Flera skisser har en kommentar av
 * typen "Tokens: papper #f5efe3 ...", och en framtida kommentar som nämner
 * var(--color-penna) får inte tvinga en färdig bild till inline-läget.
 */
function utanKommentarer(svg: string): string {
  return svg.replace(/<!--[\s\S]*?-->/g, '');
}

/**
 * Inline bara när filen faktiskt behöver sidans färger, alltså currentColor
 * eller en token. Allt annat är en färdig bild och går som <img>, så att den
 * cachas i stället för att ligga i HTML:en (skillen astro-och-prestanda
 * avsnitt 4). Regeln står på filen, inte på anropet: den som skriver MDX kan
 * inte sätta läget fel.
 */
export function valjLage(svg: string): Lage {
  return /currentColor|var\(--/.test(utanKommentarer(svg)) ? 'inline' : 'img';
}

/** Rotelementets viewBox, ordagrant som den står i filen. */
function viewBoxAttribut(svg: string): string {
  const rot = svg.match(/<svg\b([^>]*)>/);
  if (!rot) throw new Error('saknar ett <svg>-element');
  const viewBox = (rot[1] ?? '').match(/viewBox="([^"]+)"/)?.[1];
  if (!viewBox) throw new Error('saknar viewBox');
  return viewBox;
}

/**
 * Måtten ur viewBox; width och height i filen ignoreras. Felen saknar filnamn
 * med flit: komponenten sätter "[Illustration] namn.svg" framför dem, så att
 * lydelsen blir densamma som före uppdelningen.
 */
export function lasViewBox(svg: string): { bredd: number; hojd: number } {
  const viewBox = viewBoxAttribut(svg);
  const [, , bredd, hojd] = viewBox.trim().split(/[\s,]+/).map(Number);
  if (!bredd || !hojd) throw new Error(`har en viewBox som inte går att läsa: "${viewBox}"`);
  return { bredd, hojd };
}

/**
 * Den inlinade SVG:n: filens innehåll utan <?xml och kommentarer, med idn
 * suffixade så att två skisser på samma sida inte delar <pattern id="linjerat">,
 * och en ny rot med måtten ur viewBox. Suffixningen behövs bara här; en <img>
 * laddar filen som eget dokument med egen id-rymd.
 */
export function inlineMarkup(svg: string, alt: string, suffix: string): string {
  const viewBox = viewBoxAttribut(svg);
  const { bredd, hojd } = lasViewBox(svg);
  const inre = svg
    .replace(/^[\s\S]*?<svg\b[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '')
    .replace(/<\?xml[^>]*\?>/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\bid="([^"]+)"/g, (_, id: string) => `id="${id}-${suffix}"`)
    .replace(/url\(#([^)]+)\)/g, (_, id: string) => `url(#${id}-${suffix})`)
    .replace(/\bhref="#([^"]+)"/g, (_, id: string) => `href="#${id}-${suffix}"`);

  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="${bredd}" height="${hojd}" ` +
    `role="img" aria-label="${alt.replace(/"/g, '&quot;')}" class="block w-full h-auto rounded-sm border border-linje">` +
    inre +
    '</svg>'
  );
}
