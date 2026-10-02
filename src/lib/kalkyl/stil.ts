/**
 * Klasserna som kalkylatorernas formulär och resultat sätts med. Ett ställe,
 * så att ett fält ser likadant ut på verktygssidan och i det inbäddade
 * formuläret i en artikel. Tokens ur src/styles/global.css, inga egna färger.
 *
 * Utseendet står i docs/DESIGN.md avsnitt 5.8: fälthöjd 48 px, ram blyerts-2
 * 1 px, radie sm, bakgrund papper, etiketten ovanför fältet.
 */

/**
 * Fältet och etiketten runt en radioknapp eller kryssruta är komponentklasser i
 * global.css (.falt och .val), eftersom de står på varje fält i varje formulär.
 * Tillägg som ramKlass() skrivs som verktyg bredvid och vinner.
 */
export const FALT_KLASS = 'falt';
export const VAL_KLASS = 'val';
export const ETIKETT_KLASS = 'block mb-1 font-bold text-blyerts';
export const HJALP_KLASS = 'm-0 mt-1 text-liten text-blyerts-2';
export const FEL_KLASS = 'm-0 mt-1 text-liten text-varning';
/**
 * Räkna ut: fylld knapp, 52 px hög, hover blyerts enligt .knapp i global.css
 * (docs/DESIGN.md avsnitt 6 Knapp; spec-designlyft-a-2026-10-02 12.2).
 */
export const KNAPP_KLASS = 'knapp knapp-fylld min-h-13';
export const LANK_KLASS = 'lank';
export const CELL_KLASS = 'border-b border-linje p-2 align-top text-blyerts';

/** Ramen på ett fält: varning när fältet har ett fel, annars blyerts-2. */
export function ramKlass(harFel: boolean): string {
  return harFel ? 'border-varning' : 'border-blyerts-2';
}
