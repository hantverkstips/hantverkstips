/**
 * Numrerar köpknapparna i den färdiga HTML:en. Kopknapp skriver position=KPOS
 * när ingen position skickats in; här blir de 1, 2, 3 i sidans ordning. Astro
 * renderar syskon parallellt, så en räknare under renderingen ger fel ordning.
 * Körs både för prerendrade sidor i bygget och för räknarna på servern.
 * Spec: docs/briefer/spec-kopknapp-position-2026-09-30.md.
 */
import { defineMiddleware } from 'astro:middleware';

import { numreraKopknappar, POSITION_PLATSHALLARE } from './lib/affiliate';

export const onRequest = defineMiddleware(async (_context, next) => {
  const svar = await next();
  if (!svar.body) return svar;
  if (svar.status >= 300 && svar.status < 400) return svar;
  if (!(svar.headers.get('content-type') ?? '').includes('text/html')) return svar;

  // En kopia läses, så att svaret kan skickas vidare orört när platshållaren saknas.
  const text = await svar.clone().text();
  if (!text.includes(POSITION_PLATSHALLARE)) return svar;

  const headers = new Headers(svar.headers);
  // Talen är kortare än platshållaren; en satt längd skulle inte längre stämma.
  headers.delete('content-length');
  return new Response(numreraKopknappar(text), { status: svar.status, statusText: svar.statusText, headers });
});
