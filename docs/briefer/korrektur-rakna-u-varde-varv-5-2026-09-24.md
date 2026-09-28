# Korrektur, /rakna/u-varde/, varv 5

Läst 2026-09-24. Bara svenskan: grammatik, meningsbyggnad, idiom och kommatering. Röst, innehåll och sökbarhet bedöms inte här. Alla rättelser från varv 4 är införda och korrekta.

## src/pages/rakna/u-varde.astro

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 72–74 | ”Lägger du 300 mm lösull ovanpå kommer den ner till 0,085 W/m²K och klarar kravet med god marginal.” | ”Lägger du 300 mm lösull ovanpå kommer U-värdet ner till 0,085 W/m²K, och vinden klarar kravet med god marginal.” | syftning (”den” kan peka på lösullen eller vinden, och ingen av dem kommer ner till 0,085; det är U-värdet som gör det) |

## src/components/kalkyl/UVardeForm.astro

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| – | – | – | – |

Komponentens egen text är knappens ”Räkna ut” och enheterna. Den är korrekt. Resten kommer ur TEXT.

## src/lib/kalkyl/u-varde.ts, TEXT

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 768 | ”Utsidan räknas i stället som stilla luft, med 0,13 och inte 0,04, på samma sätt som …” | ”Utsidan räknas i stället som stilla luft, med motståndet 0,13 i stället för 0,04, på samma sätt som …” | ihoptryckt (två nakna tal, läsaren får gissa vad de mäter; regeln visas för sig, utan tabellen bredvid) |
| 780 | ”Vindsbjälklaget räknar jag med 0,04 på utsidan, som om ullen låg direkt mot uteluften.” | ”Vindsbjälklaget räknar jag med motståndet 0,04 på utsidan, som om ullen låg direkt mot uteluften.” | ihoptryckt (samma som ovan) |
| 780 | ”Tillverkarens tabell för samma vind räknar med takstolar på 1,2 meters avstånd. Ändå får jag ett sämre U-värde än tabellen, …” | ”Rockwools tabell för samma vind räknar med takstolar på 1,2 meters avstånd. Ändå får jag ett sämre U-värde än i tabellen, …” | syftning (bestämd form om en tillverkare som inte nämnts i texten, samma fel som rättades i regeln gradtimmar i varv 4); jämförelse (U-värdet jämförs med tabellen, inte med talet i den) |
| 796 | ”Börjar du jobbet, söker bygglov eller gör en anmälan före 1 oktober 2027 får du välja de gamla reglerna.” | ”Om du påbörjar arbetet, söker bygglov eller gör en anmälan före 1 oktober 2027 får du välja de gamla reglerna.” | meningsbyggnad (subjektet ”du” står bara efter första verbet i en omvänd villkorsbisats, så de två följande leden saknar subjekt); idiom (”börjar jobbet” läses lätt som att gå till jobbet) |

## src/lib/kalkyl/register.ts, posten u-varde

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| – | – | – | – |

Namnet och raden är korrekta.

## src/content/kunskap/el/u-varde.mdx, lambdatabellen och källraden

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| – | – | – | – |

Tabellen och den rättade källraden är korrekta.

## Gränsfall, inte räknade

- ”okänt märke och ålder” (u-varde.ts rad 364 och 884, u-varde.astro rad 108, u-varde.mdx rad 143) står kvar från varv 4. Det godtas, men ”okänt märke och okänd ålder” är säkrare.
- Regeln elpris (u-varde.ts rad 816) blir ”SCB:s genomsnitt för juli till december 2025, för hushåll med …”. Två ”för” i rad med olika betydelse (tid och grupp) är korrekt men tungt. ”SCB:s genomsnitt för hushåll med … under juli till december 2025” läses lättare.
- Källistan under antagandetabellen (u-varde.astro rad 543–546): `</a>` följs av radbrytning och sedan `, {k.last}`. Om Astro gör radbrytningen till ett mellanslag blir det ”titel , 2026-09-24” med mellanslag före kommat. Kontrollera på den renderade sidan.
- FAQ om tegelfasad (u-varde.astro rad 100): ”Utan teglet blir U-värdet något för högt, och det är bättre än att räkna för lågt.” Ett tillstånd jämförs med en handling. Det går i talspråk, men ”och hellre för högt än för lågt” är renare.

## Summering

5 fel: 1 i u-varde.astro, 0 i UVardeForm.astro, 4 i u-varde.ts, 0 i register.ts, 0 i u-varde.mdx. Texten är korrekt svenska. Inget fel är grovt, men subjektsbortfallet på rad 796 och syftningen i kortsvaret ska rättas före publicering. Det behövs inget fullt varv till. Det räcker att kontrollera de rättade raderna.
