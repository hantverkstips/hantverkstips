/// <reference types="astro/client" />

/**
 * Per-request-tillstånd som delas mellan sidmall och komponenter under renderingen.
 * Fungerar både vid byggtid (prerender) och på servern.
 *
 * Sidmallen (vyn) sätter sidtyp överst i sin frontmatter. Kopknapp läser den när
 * propen saknas. Knappens position räknas inte här: syskon renderas parallellt,
 * så src/middleware.ts numrerar /go/-länkarna i den färdiga HTML:en i stället.
 */
declare namespace App {
  interface Locals {
    sidtyp?: import('./lib/affiliate').Sidtyp;
    /**
     * Pelaren som renderas just nu. Sätts av src/pages/[rot]/index.astro och av
     * vyn PelarHub, och läses av <Kortgrupp> inuti hubbens MDX: komponenten står
     * i innehållsfilen och kan inte få pelaren som prop därifrån.
     */
    pelare?: import('./lib/pelare').PelareSlug;
  }
}
