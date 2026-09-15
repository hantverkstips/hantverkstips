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
  }
}
