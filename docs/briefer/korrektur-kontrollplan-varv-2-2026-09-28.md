# Korrektur: kontrollplan, varv 2, 2026-09-28

Läst i helhet: src/lib/kalkyl/kontrollplan.ts (TEXT, planens celler som blankettext, utskriften i tredje person) och src/pages/rakna/kontrollplan.astro. Läst i övrigt: src/components/kalkyl/KontrollplanForm.astro, KONTROLLPLAN_LANK i src/pages/rakna/bygglov-altan.astro, meningen om kontrollplan i src/content/kunskap/altan/bygglov-altan.mdx (rad 105) och stycket före inbäddningen i src/content/guider/grund/inreda-kallare.mdx (rad 214). Lagrummen är inte bedömda.

## Rättelserna från varv 1

| Varv 1 | Nu | Status |
|---|---|---|
| atgard.komplement.hjalp | "Byggnaden kräver bygglov och ingen ska bo i den. Ett gästhus som kräver bygglov kan jag inte göra någon plan för här." | införd |
| punkt.vent-brandtatning.vad | "… en brandavskiljande vägg eller ett brandavskiljande bjälklag" | införd |
| punkt.vent-funktionskontroll.nar | "Före första användningen" | införd |
| avfall.ruta | "… att en avfallshanteringsplan inte behövs" | införd |
| utskrift.ansvar | "Planen gäller först när byggnadsnämnden har fastställt den i startbeskedet …" | införd |
| avfallet som egen plan | ANDRAT_STYCKEN 2: "… har avfallet en egen plan, avfallshanteringsplanen, som inte längre är en del av kontrollplanen." | införd (flyttad till sidan) |
| regel.faststalls | "Planen som gäller kan alltså se annorlunda ut än den du skickade in." | införd |
| energikraven i BBR | ANDRAT_STYCKEN 4: "… som har en egen föreskrift från den 1 oktober 2026." | införd (flyttad till sidan) |
| regel.energi | "Kom den in mellan 1 juli och 30 september 2026 …", "Kom den in 1 oktober 2026 eller senare …" | införd |
| regel.aldre-byggregler | "Beviljades lovet före 1 juli 2026 och valde du då de äldre byggreglerna, gäller de också …" | införd |
| gorInte.bbr-eks | "… en tillbyggnad där ansökan kom in före 1 oktober 2026." | införd |
| antagande.A15.varde | "Lag (2026:746) och förordning (2026:1265), lästa 28 september 2026, ändrar inget lagrum i planen" | införd |
| antagande.BFS-2011-6.varde | "… för ärenden som kom in 1 juli till 30 september 2026, och övergångsbestämmelsen om att de äldre reglerna har upphört" | införd |
| spalt.beskedsvarning | "Ett av fälten gick inte att läsa. Rätta värdet där felet står, så visar jag svaret." | skriven, korrekt |
| sidan, titel (rad 64) | "Kontrollplan mall, ifylld efter ditt bygge" | **inte införd** |
| sidan, STEG 2 | "… och kontrollen av att allt stämmer med beslutet står alltid sist." | införd |
| sidan, Faq (BBR) | "I ärenden som kommit in den 1 juli 2026 eller senare …" | införd |
| parentesen efter punkt (sidan och KontrollplanPlan.astro) | medLagrum sätter parentesen före punkten | införd |

## src/lib/kalkyl/kontrollplan.ts

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 757 | Med rivningslov eller anmälan. | Rivningen kräver rivningslov eller ska anmälas. | fragment (samma mönster som komplement.hjalp i varv 1) |
| 769 | … till exempel när badrummet byggs om och rören dras nytt eller flyttas. | … till exempel när badrummet byggs om och rören dras om eller flyttas. | idiom ("dras nytt") |
| 1236 | Energiraden för ärenden från 1 oktober 2026 | Energiraden för ärenden som kommer in 1 oktober 2026 eller senare | saknat ord, preposition (jfr BFS-2011-6.varde på rad 1234) |

Blankettcellerna, utskriftstexterna i tredje person, resultatspalten, regeltexterna och antagandena i övrigt är korrekt svenska.

Antal fel: 3.

## src/pages/rakna/kontrollplan.astro

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 64 | Kontrollplan mall, ifylld efter ditt bygge | Mall för kontrollplan, ifylld efter ditt bygge | särskrivning, kvar från varv 1 (SEO får väga sökfrasen mot detta) |
| 125 | För en altan, en eldstad eller en tillbyggnad blir planen alltså kvar. | För en altan, en eldstad eller en tillbyggnad behövs planen alltså som förut. | idiom ("blir kvar") |
| 131 | Den del av en nybyggnad som en byggbedömare kontrollerar klarar sig också utan, som i avsnittet ovanför. | Den del av en nybyggnad som en byggbedömare kontrollerar klarar sig också utan, som jag skrev i avsnittet ovanför. | saknat ord (ihoptryckt) |
| 166 | Har kommunen en egen mall kan du skriva över raderna till den. | Har kommunen en egen mall kan du föra över raderna till den. | idiom ("skriva över" läses som att skriva över något, jfr utskrift.ansvar "förs raderna över dit") |
| 174 | Då kan du inte visa att planen är följd, och det är ett villkor för slutbesked. | Då kan du inte visa att planen är följd, och det måste du kunna för att få slutbesked. | syftning ("det" kan peka på att du inte kan visa) |

Kortsvaret, ingressen, rubrikerna, ANDRAT_STYCKEN 1, 2 och 4, INGEN_PLAN_STYCKEN 1 och 3, STEG, Läs vidare, DELATEXT och Faq 1, 2 och 4 är korrekta.

Antal fel: 5, varav 1 kvar från varv 1.

## src/components/kalkyl/KontrollplanForm.astro

All text kommer ur TEXT. Knappens standardvärde "Visa kontrollplanen" är korrekt. Antal fel: 0.

## src/pages/rakna/bygglov-altan.astro, KONTROLLPLAN_LANK

"Skriv ut kontrollplanen för altanen, om den kräver lov" är korrekt. Antal fel: 0.

## src/content/kunskap/altan/bygglov-altan.mdx, rad 105

"Får altanen lov behöver du också lämna in ett förslag till kontrollplan innan kommunen ger startbesked, och [en kontrollplan för altanen](/rakna/kontrollplan/) kan du skriva ut färdig att fylla i." är korrekt. Antal fel: 0.

## src/content/guider/grund/inreda-kallare.mdx, rad 214

Stycket är korrekt. Antal fel: 0.

## Sammanfattning

8 fel, varav 1 kvar från varv 1 (titeln). Alla övriga rättelser från varv 1 är införda. Texten är i stort sett korrekt svenska. Det som återstår är små rättelser på enskilda rader, och ingen fil behöver ett helt varv till. Rätta de åtta raderna, så räcker det med att kontrollera just dem.
