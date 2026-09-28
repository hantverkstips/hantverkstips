# Korrektur: kontrollplan, 2026-09-28

Läst: TEXT i src/lib/kalkyl/kontrollplan.ts (mallarna med talen insatta), src/pages/rakna/kontrollplan.astro, src/components/kalkyl/KontrollplanForm.astro, src/components/kalkyl/KontrollplanPlan.astro och posten kontrollplan i src/lib/kalkyl/register.ts. Planens celler är bedömda som blankettext. Lagrummen är inte ändrade. I de rättade lydelserna står de bara där de hör till meningen.

## src/lib/kalkyl/kontrollplan.ts

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 755 | Med bygglov och utan någon som bor där. Ett gästhus som kräver bygglov kan jag inte göra plan för här. | Byggnaden kräver bygglov och ingen ska bo i den. Ett gästhus som kräver bygglov kan jag inte göra någon plan för här. | fragment, saknat ord |
| 1043 | Brandtätning där kanalen går genom en brandavskiljande vägg eller bjälklag | Brandtätning där kanalen går genom en brandavskiljande vägg eller ett brandavskiljande bjälklag | kongruens |
| 1057 | Före första användning | Före första användningen | form (jfr rad 1031 "Före första eldningen") |
| 1127 | Byggherren bedömer att det är uppenbart att någon avfallshanteringsplan inte behövs | Byggherren bedömer att det är uppenbart att en avfallshanteringsplan inte behövs | negation, "någon … inte" |
| 1137 | Det gäller först när byggnadsnämnden har fastställt planen i startbeskedet, enligt PBL 10 kap. 24 §. | Planen gäller först när byggnadsnämnden har fastställt den i startbeskedet, enligt PBL 10 kap. 24 §. | syftning ("det" pekar på förslaget, inte planen) |
| 1160 | Sedan 1 juli 2026 är avfallet en egen plan, avfallshanteringsplanen, och inte längre en del av kontrollplanen. | Sedan 1 juli 2026 har avfallet en egen plan, avfallshanteringsplanen, som inte längre är en del av kontrollplanen. | ihoptryckt (avfallet är ingen plan) |
| 1161 | Den kan alltså se annorlunda ut än den du skickade in. | Planen som gäller kan alltså se annorlunda ut än den du skickade in. | syftning ("den" i meningen före är nämnden) |
| 1163 | Det enda som låg kvar i BBR var energikraven, som flyttade till en egen föreskrift den 1 oktober 2026. | Det enda som låg kvar i BBR var energikraven, som har en egen föreskrift från den 1 oktober 2026. | tempus (preteritum om ett datum som inte har kommit än) |
| 1166 | Kom den in 1 juli till 30 september 2026 gäller BBR: … Kom den in från 1 oktober 2026 räknas tillbyggnaden … | Kom den in mellan 1 juli och 30 september 2026 gäller BBR: … Kom den in 1 oktober 2026 eller senare räknas tillbyggnaden … | preposition (två ställen) |
| 1168 | Beviljades lovet före 1 juli 2026 med de äldre byggreglerna valda, gäller de reglerna också vid startbeskedet. | Beviljades lovet före 1 juli 2026 och valde du då de äldre byggreglerna, gäller de också vid startbeskedet. | anglicism ("med X valda") |
| 1170 | Undantaget är energiraden för en tillbyggnad som söktes före 1 oktober 2026. | Undantaget är energiraden för en tillbyggnad där ansökan kom in före 1 oktober 2026. | ihoptryckt (man söker lov, inte tillbyggnad) |
| 1203 | Lag (2026:746) och förordning (2026:1265) ändrar inget lagrum i planen, lästa 28 september 2026 | Lag (2026:746) och förordning (2026:1265), lästa 28 september 2026, ändrar inget lagrum i planen | syftning (participet hänger efter fel led) |
| 1219 | Bara energiraden för ärenden 1 juli till 30 september 2026, och övergångsbestämmelsen om att de äldre reglerna upphört | Bara energiraden för ärenden som kom in 1 juli till 30 september 2026, och övergångsbestämmelsen om att de äldre reglerna har upphört | saknat ord |

Utanför räkningen: rad 811, `spalt.beskedsvarning`, är fortfarande platshållaren "TEXT SAKNAS: beskedsvarning" och visas för läsaren så fort ett fält är ogiltigt. Texten måste skrivas innan sidan publiceras.

Antal fel: 13.

## src/pages/rakna/kontrollplan.astro

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 64 | Kontrollplan mall, ifylld efter ditt bygge | Mall för kontrollplan, ifylld efter ditt bygge | särskrivning (sökfrasen "kontrollplan mall" får SEO väga mot detta) |
| 102 | … och kontrollen att allt stämmer med beslutet allra sist. | … och kontrollen av att allt stämmer med beslutet allra sist. | saknat ord (preposition) |
| 138 | I ärenden som kommit in från 1 juli 2026 hör BBR och EKS inte hemma i planen, … | I ärenden som kommit in den 1 juli 2026 eller senare hör BBR och EKS inte hemma i planen, … | preposition |
| 259, 268, 276, 337 | Mallen `{TEXT} ({lagrum})` sätter parentesen efter meningens punkt, t.ex. "… fastställer planen i startbeskedet. (PBL 10 kap. 23 och 24 §§)" | Parentesen före punkten: "… fastställer planen i startbeskedet (PBL 10 kap. 23 och 24 §§)." Samma för ka.\* (268), regel.\* i spalten vid äldre regler (276) och gorInte.\* (337), t.ex. "Kontrollansvarig krävs inte för det här, om nämnden inte beslutar annat (PBF 7 kap. 5 § första och andra st.)." | interpunktion |

Antal fel: 4.

## src/components/kalkyl/KontrollplanPlan.astro

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 101 | `{TEXT[ka.*]} ({KA_LAGRUM})` ger "… om nämnden inte beslutar annat. (PBF 7 kap. 5 § första och andra st.)" | "… om nämnden inte beslutar annat (PBF 7 kap. 5 § första och andra st.)." | interpunktion (som i sidan) |

Antal fel: 1.

## src/components/kalkyl/KontrollplanForm.astro

Ingen egen text utom knappens standardvärde "Visa kontrollplanen", som är korrekt. Antal fel: 0.

## src/lib/kalkyl/register.ts, posten kontrollplan

Namn och rad är korrekta. Antal fel: 0.

## Sammanfattning

18 fel, plus en publik platshållare som saknar text. Blankettcellerna är i övrigt korrekt svenska. Brödtexten behöver ett varv till för syftningarna i regeltexterna (1137, 1161), tempus på rad 1163 och prepositionerna kring datumen (1166, 1219, sidan 138). Interpunktionen i mallen med parentesen löses i koden, inte i TEXT.
