/**
 * Klasserna som kalkylatorernas formulär och resultat sätts med. Ett ställe,
 * så att ett fält ser likadant ut på verktygssidan och i det inbäddade
 * formuläret i en artikel. Tokens ur src/styles/global.css, inga egna färger.
 *
 * Utseendet står i docs/DESIGN.md avsnitt 5.8: fälthöjd 48 px, ram blyerts-2
 * 1 px, radie sm, bakgrund papper, etiketten ovanför fältet.
 */

export const FALT_KLASS = 'w-full min-h-12 rounded-sm border bg-papper px-3 text-brod text-blyerts tabular-nums';
export const ETIKETT_KLASS = 'block mb-1 font-bold text-blyerts';
export const HJALP_KLASS = 'm-0 mt-1 text-liten text-blyerts-2';
export const FEL_KLASS = 'm-0 mt-1 text-liten text-varning';
export const KNAPP_KLASS =
  'inline-flex min-h-12 items-center rounded-md border-2 border-blyerts px-5 py-3 font-bold text-blyerts hover:bg-blyerts hover:text-papper';
export const LANK_KLASS = 'text-penna underline decoration-1 underline-offset-2 hover:decoration-2';
export const CELL_KLASS = 'border-b border-linje p-2 align-top text-blyerts';

/** Ramen på ett fält: varning när fältet har ett fel, annars blyerts-2. */
export function ramKlass(harFel: boolean): string {
  return harFel ? 'border-varning' : 'border-blyerts-2';
}
