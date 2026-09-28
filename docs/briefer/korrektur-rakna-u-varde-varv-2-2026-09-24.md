# Korrektur, /rakna/u-varde/, varv 2 (2026-09-24)

Jag har bara läst svenskan: grammatik, meningsbyggnad, idiom och kommatering. Radnumren gäller filerna som de ser ut i arbetskopian i dag.

## src/pages/rakna/u-varde.astro

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 59, 65 | ”når Boverkets krav” (BESKRIVNING och INGRESS) | ”klarar Boverkets krav” | idiom |
| 74 | ”så väggen ligger nästan dubbelt så högt som den ska” | ”så väggens U-värde är nästan dubbelt så högt som det får vara” | syftning |
| 82 | ”med 200 mm ull före och 300 mm lösull ovanpå efter” | ”med 200 mm ull före och med 300 mm lösull ovanpå efter” eller ”före med 200 mm ull och efter med 300 mm lösull ovanpå” | ihoptryckt |
| 89 | ”Har du lagt till något är det nya U-värdet svaret, och annars det du har i dag.” | ”Har du lagt till något är svaret det nya U-värdet, annars det du har i dag.” | meningsbyggnad |
| 90 | ”Jag jämför U-värdet med Boverkets gräns avrundat precis som det står i svaret” | ”Jag avrundar U-värdet precis som det står i svaret och jämför det sedan med Boverkets gräns” | syftning, kongruens (”gräns avrundat”) |
| 104 | ”Något lambdavärde för tegel som jag kan lita på har jag inte hittat. U-värdet blir då något för högt” | ”Något lambdavärde för tegel som jag kan lita på har jag inte hittat. Utan teglet blir U-värdet något för högt” | syftning (”då” pekar på fel mening) |
| 118 | ”Markera den och kopiera, så får den du skickar till samma svar.” | ”Markera den och kopiera, så får den du skickar länken till samma svar.” | saknat ord, syftning |

## src/components/kalkyl/UVardeForm.astro

Inga egna texter. All synlig text kommer ur TEXT och står under u-varde.ts. Knapptexten ”Räkna ut” är korrekt.

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| – | – | – | – |

## src/lib/kalkyl/u-varde.ts (TEXT och antagandetabellens värden)

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 689 | ”hade glaset 1,1 medan hela fönstret landade på 1,4 eller 1,6” | ”hade glaset 1,1, medan hela fönstret landade på 1,4 eller 1,6” | kommatering (kontrasterande ”medan”, och två tal i rad) |
| 693 | ”Räkna i daggpunktsräknaren fram var den hamnar med din inomhusluft” | ”Räkna fram i daggpunktsräknaren var den hamnar med din inomhusluft” | ordföljd (partikeln skild från verbet) |
| 702 | ”Bakom en ventilerad luftspalt strömmar uteluften fritt” | ”I en ventilerad luftspalt strömmar uteluften fritt” | preposition |
| 750 | ”SCB:s genomsnitt för hushåll med 5 000 till 14 999 kWh per år, inklusive elhandel, nätavgift, energiskatt och moms, juli till december 2025.” | ”SCB:s genomsnitt för juli till december 2025, för hushåll med 5 000 till 14 999 kWh per år, med elhandel, nätavgift, energiskatt och moms inräknade.” | syftning (perioden hänger löst sist) |
| 754 | ”Energimyndigheten skriver att det inte är vanligt att en pump klarar hela husets behov, och resten täcks oftast med el, så din besparing hamnar …” | ”Energimyndigheten skriver att det är ovanligt att en pump klarar hela husets behov. Resten täcks oftast med el, så din besparing hamnar …” | satsradning, syftning (”resten” efter en nekad sats) |
| 758 | ”Räkningen visar hur mycket mindre värme som går ut genom konstruktionen.” | ”Uträkningen visar hur mycket mindre värme som går ut genom konstruktionen.” | syftning (”räkningen” betyder elräkningen på rad 691 och i meningen efter) |
| 877 | ”Vilket skikt står mellan reglar?” | ”Vilket skikt sitter mellan reglar?” | idiom (hjälptexten på rad 879 säger ”sitter”) |
| 889 | ”Skriv talet för konstruktionen när jobbet är klart” | ”Skriv det U-värde konstruktionen får när jobbet är klart” | syftning (kan läsas som att man ska skriva när jobbet är klart) |
| 899 | ”${kwh} kWh om året i Mellansverige.” | ”Det är ${kwh} kWh om året i Mellansverige.” | fragment |
| 899 | ”Kronorna gäller direktverkande el och 2,40 kr per kWh” | ”Kronorna är räknade med direktverkande el och 2,40 kr per kWh” | ihoptryckt |
| 902 | ”men då räknar jag bara ullen, inte reglar, skivor eller arbete” | ”men då räknar jag bara med ullen, inte med reglar, skivor eller arbete” | preposition |

Övriga strängar i TEXT (besked, fel, regel, kolumn, aterbetalningSaknas, region, del, vp, antagande, form, spalt, darfor) och värdena i ANTAGANDEN är korrekt svenska. Rubrikfunktionerna ger hela och grammatiska rubriker med alla material i listan, också när materialIMening gör om första bokstaven (”cellplast Sundolitt S80”, ”lösull av cellulosa”).

## src/lib/kalkyl/register.ts, posten u-varde

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| – | – | – | – |

Namnet och raden är korrekta.

## src/content/kunskap/el/u-varde.mdx, de ändrade raderna

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 139 | ”För cellulosa och för ull där du inte vet märket” | ”För cellulosa och för ull vars märke du inte vet” | relativt ”där” om något som inte är en plats |

seoTitle (rad 3), tabellraden för mineralull (rad 143), raden för Vindsull och källraden (rad 157) är korrekta.

## Summering

20 fel: 8 i u-varde.astro (raden 59 och 65 räknas som två), 11 i u-varde.ts, 0 i UVardeForm.astro, 0 i register.ts och 1 i u-varde.mdx. Inget av felen är grovt, men syftningarna på rad 90, 104 och 118 i sidan och på rad 758 och 889 i modulen kan få läsaren att förstå fel. Texten behöver ett kort varv till för de raderna. Resten är korrekt svenska.
