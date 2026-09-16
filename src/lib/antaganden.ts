/**
 * Gemensamma antaganden och nyckeltal som flera sidor räknar med. Ett värde här,
 * aldrig inskrivet i en kalkylator, komponent eller innehållsfil, så att alla
 * sidor säger samma sak och ett byte slår igenom överallt.
 *
 * Ren modul utan importer från Astro, så att kalkylfunktionerna i src/lib/kalkyl/
 * och kontrollskriptet kan läsa den.
 */

/**
 * Elpris i kronor per kilowattimme för hushåll.
 *
 * Genomsnittligt totalpris för hushåll med 5 000 till 14 999 kWh per år, juli till
 * december 2025, inklusive elhandel, nätavgift, energiskatt och moms. Källa: SCB,
 * Priser på elenergi och på överföring av el,
 * https://www.statistikdatabasen.scb.se/goto/sv/ssd/SSDManadElhandelpris (elhandel)
 * och SCB:s halvårsstatistik för hushållskunder. Uppdateras varje halvår.
 *
 * Sidor som visar elkostnad i kronor skriver perioden intill siffran (ELPRIS_KALLA)
 * så att läsaren ser hur gammalt priset är.
 */
export const ELPRIS_KR_PER_KWH = 2.4;

/** Källan till elpriset, så att sidor kan visa den under en tabell eller ett resultat. */
export const ELPRIS_KALLA = {
  titel: 'SCB, Priser på elenergi och på överföring av el',
  url: 'https://www.statistikdatabasen.scb.se/goto/sv/ssd/SSDManadElhandelpris',
  /** Perioden priset gäller. Byts när ett nytt halvår publicerats. */
  period: 'juli till december 2025',
  /** Vad siffran omfattar, för fotnoten under en tabell. */
  omfattar: 'hushåll med 5 000 till 14 999 kWh per år, inklusive elhandel, nätavgift, energiskatt och moms',
} as const;
