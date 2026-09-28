# Korrektur, /rakna/u-varde/, varv 4

Läst 2026-09-24. Bara svenskan: grammatik, meningsbyggnad, idiom och kommatering. Röst, innehåll och sökbarhet bedöms inte här.

## src/pages/rakna/u-varde.astro

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 82 | ”Skissen visar räknarens första vind, där 300 mm lösull ligger ovanpå 200 mm gammal ull.” | ”Skissen visar vinden som räknaren börjar med, där 300 mm lösull ligger ovanpå 200 mm gammal ull.” | ihoptryckt (”räknarens första vind” kräver att läsaren gissar att det är standardexemplet; kortsvaret säger det redan tydligt med ”Räknaren börjar med en vind”) |
| 117 | ”Markera den och kopiera, så får den du skickar till samma svar.” | ”Markera den och kopiera, så får den du skickar länken till samma svar.” | saknat ord, syftning (kvar från varv 2: ”den du skickar till samma svar” läses först som att man skickar något till svaret) |

## src/components/kalkyl/UVardeForm.astro

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| – | – | – | – |

Komponentens egen text är bara knappens ”Räkna ut” och enheterna. Den är korrekt. Resten kommer ur TEXT och står under nästa fil.

## src/lib/kalkyl/u-varde.ts, TEXT

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 687–688 | ”Efter jobbet klaras kravet på ${grans}, och du sparar ${kr} kr om året” och ”Efter jobbet klaras kravet på ${grans} med U-värdet ${u}” | ”Efter jobbet klarar du kravet på ${grans} och sparar ${kr} kr om året” och ”Efter jobbet klarar du kravet på ${grans} med U-värdet ${u}” | stel passiv utan agent (ingen säger ”klaras kravet”; grenarna ovanför har ”klarar du”) |
| 689 | ”Det gäller med det du lägger till, inte med det som sitter där i dag.” | ”Kravet klaras med det du lägger till, inte med det som sitter där i dag.” | ihoptryckt, syftning (”Det gäller med” har inget tydligt subjekt, och verbet passar inte ihop med ”med”) |
| 693 | ”U-värdet ${u} räcker med de gamla reglerna men inte med de nya” | ”U-värdet ${u} räcker enligt de gamla reglerna men inte enligt de nya” | preposition (”räcker med de gamla reglerna” kan läsas som att de gamla reglerna räcker) |
| 730 | ”men räkningen blir bara lägre om värmen du tillför också minskar” | ”men räkningen blir lägre bara om värmen du tillför också minskar” | ordföljd (”bara” ska stå före det villkor det begränsar; nu läses det som att räkningen ”bara blir lägre”, inget annat) |
| 745 | ”samma tal som i räkneexemplet för en regelvägg” | ”samma tal som i Svenskt Träs räkneexempel för en regelvägg” | syftning (bestämd form utan något tidigare exempel i samma text; raden visas för sig) |
| 765 | ”Ett nytt hus har i stället krav på ett genomsnitt för hela huset” | ”Ett nytt hus har i stället krav på ett genomsnittligt U-värde för hela huset” | ihoptryckt (genomsnitt av vad) |
| 769 | ”Till och med 30 september 2026 är Boverkets U-värden ett mål att sträva mot, och från 1 oktober 2026 är de ett krav.” | ”I de gamla reglerna är Boverkets U-värden ett mål att sträva mot, och i de nya, som gäller från 1 oktober 2026, är de ett krav.” | tempus (presens om en period som tar slut om sex dagar; från 1 oktober står det fel på en sida som ska vara datumoberoende) |
| 773 | ”Kravet får mildras om mer isolering skulle kosta orimligt mycket mot vad den ger, om energianvändningen bara minskar obetydligt, av tekniska skäl eller för att skydda husets kulturvärden.” | ”Kravet får mildras om mer isolering skulle kosta orimligt mycket mot vad den ger eller bara minska energianvändningen obetydligt. Det får också mildras av tekniska skäl eller för att skydda husets kulturvärden.” | meningsbyggnad (uppräkningen blandar om-satser med prepositionsfraser, så leden hänger inte ihop) |
| 785 | ”Både graddagarna och påslagen kommer från isoleringstillverkarens guide för vinden.” | ”Både graddagarna och procentsatserna kommer från isoleringstillverkaren Rockwools guide för vinden.” | ordval, syftning (20 procent färre är inget påslag; ”isoleringstillverkarens” pekar på en tillverkare som inte nämnts i texten) |

## src/lib/kalkyl/register.ts, posten u-varde

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| – | – | – | – |

Namnet och raden är korrekta.

## src/content/kunskap/el/u-varde.mdx, lambdatabellen och källraden

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 158 | ”Källa: tillverkarnas produktblad, Bauhaus produktdata för Vindsull, Energimyndigheten för cellulosa, mineralull och cellplast med okänt märke (ET 2025:06, tabell 1), Svenskt Trä för trä, gips och betong, och Betongföreningen för lättbetong.” | ”Källa: tillverkarnas produktblad; Bauhaus produktdata för Vindsull; Energimyndigheten (ET 2025:06, tabell 1) för cellulosa och för mineralull och cellplast med okänt märke; Svenskt Trä för trä, gips och betong; Betongföreningen för lättbetong.” | kommatering, syftning (listor i listan med bara komma, så det går inte att se var ett led slutar, och ”med okänt märke” kan läsas som att det gäller cellulosan också) |

## Gränsfall, inte räknade

- ”okänt märke och ålder” (u-varde.ts rad 364 och 857, u-varde.mdx rad 143): adjektivet böjs efter det närmaste substantivet, vilket godtas, men ”ålder” är utrum och läsaren snubblar. ”okänt märke och okänd ålder” är säkrare.
- Innehåll, inte språk, men kortfattat blir fel: regeln tak-kallvind (rad 753) säger att U-värdet utan takstolar blir ”något bättre än i tillverkarens tabell”, medan räknarens egen standardvind ger ett sämre tal (0,216 mot Rockwools 0,184). Meningen stämmer bara om ullen har samma lambdavärde, och det står inte. Hantverkaren bör titta på den.

## Summering

12 fel: 2 i u-varde.astro, 0 i UVardeForm.astro, 9 i u-varde.ts, 0 i register.ts, 1 i u-varde.mdx. Texten är i stort sett korrekt svenska och inget fel är grovt, men tempusfelet på rad 769 blir fel på sidan redan 1 oktober och ska rättas före publicering. Det behövs inget fullt varv till. En kontroll av de rättade raderna räcker.
