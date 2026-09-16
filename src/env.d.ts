/// <reference types="astro/client" />

/**
 * Per-request-tillstånd som delas mellan sidmall och komponenter under renderingen.
 * Fungerar både vid byggtid (prerender) och på servern.
 *
 * Sidmallen (vyn) sätter sidtyp överst i sin frontmatter. Kopknapp läser den när
 * propen saknas, och räknar upp kopknappPosition för varje knapp så att klicket
 * kan kopplas till "tredje knappen på sidan" utan att innehållsfiler behöver ange det.
 */
declare namespace App {
  interface Locals {
    sidtyp?: import('./lib/affiliate').Sidtyp;
    kopknappPosition?: number;
    /**
     * Pelaren som renderas just nu. Sätts av src/pages/[rot]/index.astro och av
     * vyn PelarHub, och läses av <Kortgrupp> inuti hubbens MDX: komponenten står
     * i innehållsfilen och kan inte få pelaren som prop därifrån.
     */
    pelare?: import('./lib/pelare').PelareSlug;
  }
}
