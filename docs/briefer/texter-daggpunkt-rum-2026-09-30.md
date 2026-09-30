# Texter till förvalen per rum i /rakna/daggpunkt/

UX och bygge-agenten, 2026-09-30. Detta är alla `TEXT SAKNAS` som förvalen per rum lägger till i daggpunktsräknaren. Hantverkaren skriver dem i filerna, och platshållaren byts mot texten på samma ställe. Specen är `docs/briefer/spec-daggpunkt-rum-2026-09-30.md`; talen och källorna står där i avsnitt 1 till 3.

Tre filer:

- **M** = `src/lib/kalkyl/daggpunkt.ts`: `RUMSVAL`, `TYPISKA_U` och objektet `TEXT` (sök på `TEXT SAKNAS`).
- **F** = `src/components/kalkyl/DaggpunktForm.astro`: fönstrets två fält.
- **S** = `src/pages/rakna/daggpunkt.astro`: konstanterna överst, resultatspalten, "Därför blev svaret så" och antagandetabellen.

En funktion får talen som parametrar. Skriv aldrig ett tal för hand; parametrarna heter `_x` tills de används, och understrecket tas bort när texten skrivs.

Gäller all text här:

- Rummens namn är de läsaren själv säger: sovrum, fönster, källare, krypgrund, garage. "Fönster" är ingen plats i huset men är den kalla ytan hon undrar över; etiketten får säga det.
- 75 procent i källaren och krypgrunden är **materialets** gräns som man håller luften under (GT 1.3), inte en gräns för luften. 60 procent i garaget är rostens gräns (SBI), inte en fuktgräns.
- Ingen myndighet ger ett målvärde för rumsluften (GT 2.2). Sovrummets 45 är Astma- och Allergiförbundets råd mot kvalster; fönstrets 45 vid 21 grader är Folkhälsomyndighetens gräns för när en bostad bör utredas, inte ett mål.
- Resultatspalten bär beskedet, talet, en pekrad och länkarna. Raden om rummets normala luftfuktighet är en rad, inte ett stycke.
- Källan står en gång, i källraden, inte i meningen ovanför (stil-och-design 1).

---

## M. Formelmodulen

| Nyckel | Var | Vad den ska säga |
|---|---|---|
| M1 `RUMSVAL` etiketter | radioknapparna "Utrymme" | `sovrum`, `fonster`, `kallare`, `krypgrund` är nya. `kallare` lyder i dag "Källare eller krypgrund" och är fel nu när krypgrunden har ett eget val. `bostad` ("Ett uppvärmt rum i bostaden") och `garage` ("Garage, förråd eller uthus") står kvar om du inte vill ändra dem. Kort, en rad på 375 px |
| M2 `TEXT.rumKort.[rum]` | länkraden ovanför formuläret | Ett eller två ord per rum: sovrum, fonster, kallare, krypgrund, garage |
| M3 `TYPISKA_U[].typ` | hjälptexten under U-värdet | Namnet på fönstertypen för spannen 2,8 till 3,0, 1,4 till 1,8 och 0,6 till 0,9 (ET 2025:01). Samma ord som tabellen på `/fukt/kondens-pa-fonster/` |
| M4 `TEXT.fel.uVarde(min, max)`, `TEXT.fel.uteTempC(min, max)` | under fälten | Som de tre befintliga felraderna: "Skriv ett ... mellan ... och ...". Minus skrivs som ordet, som `grader()` gör för ytan |
| M5 `TEXT.normaltKalla.[kalla]` | källraden i "Därför blev svaret så" | En mening per källa: `traguiden` (10–25 vinter, 45–60 sommar i uppvärmda rum), `astma-allergi` (sovrum under 45 vintertid, mot kvalster), `fohm` (45 vid 21 grader över eldningssäsongen: bostaden bör utredas), `villaagarna` (källare under 75 i medel; materialets gräns), `olsson-sp` (krypgrund, säkra nivåer cirka 75), `sbi` (ingen korrosion under 60) |

## F. Formuläret

| Nyckel | Vad den ska säga |
|---|---|
| F1 etikett `u` | Fönstrets U-värde. Enheten W/m²K står till höger om fältet och är inte din |
| F2 hjälptext `u` | Vad läsaren gör som inte vet sitt U-värde: välj efter antal glas. Listan M3 står under |
| F3 etikett `ute` | Temperaturen ute |
| F4 hjälptext `ute` | Varför talet behövs, i en mening. Förvalet är minus 5, Folkhälsomyndighetens gräns; det får nämnas här eller i S3 men inte båda |

## S. Sidan

| Nyckel | Var | Vad den ska säga |
|---|---|---|
| S1 `RUMSRAD_RUBRIK` och `RUMSRAD_ARIA` | ovanför länkraden | En kort uppmaning att börja från sitt rum, och `aria-label` för navigeringen |
| S2 `normaltRad(rumNamn, lagst, hogst, rfInne, lage)` | resultatspalten, under raden om ytan | En mening: vad som är vanligt eller rimligt i rummet och var läsarens tal ligger. `lagst` kan vara `null` (då är det "högst"), `lage` är `under`, `inom` eller `over`. Säger inte vad läsaren ska göra; det gör beskedet |
| S3 `fonsterRad(u, ute, glas)` | "Därför blev svaret så", först, bara för fönstret | Hur glaset kom fram: U-värdet och temperaturen ute ger glasets temperatur mitt på rutan, och den jämförs med daggpunkten. Kanten är kallare än mitten (utan tal, faktabladet för kondens på fönster avsnitt 3) |
| S4 källrad till S3 | under S3 | Formeln och 0,13 ur SS-EN ISO 6946, U-värdena ur Energimyndighetens fönsterguide ET 2025:01 |
| S5 källrad till normalvärdet | "Därför blev svaret så", sist före "Det svaga ledet" | Mening ur M5 för rummets källa, med en inledning om rummet om det behövs |
| S6 antagandetabellen | sju nya rader | "Vad" och "Källa eller antagande" för: RSI; U-värdena i hjälptexten; förvalet för sovrum, fönster, källare, krypgrund, garage. Källorna per förval står i specen avsnitt 1. Ytorna 12 och 10 grader är antaganden som redan står på sajten och märks Antagande; 21 och 45, 20 och 70, U 3,0 och minus 5 har källa |

## Att titta på, inga nya nycklar

- `BESKED_RAD.avfuktare` lyder "Stäng fönstret och sätt in en avfuktare." En krypgrund har inget fönster att stänga, och ett garage har en port. Skriv om den så att den gäller alla tre, eller säg till så delar jag den per rum.
- `GOR_INTE_SOMMAR_KALLT` talar om "fönster du öppnar". Samma fråga för krypgrundens ventiler.
- Legenden "Utrymme" över radioknapparna gäller nu också fönstret.

---

## T. Daggpunktstabellen (spec-daggpunkt-tabell-2026-09-30.md)

Konstanter överst i `src/pages/rakna/daggpunkt.astro`, som läggs in när tabellen byggs. Talen i cellerna och huvudena räknas och skrivs inte.

| Nyckel | Vad den ska säga |
|---|---|
| T1 `TABELL_RUBRIK` | H2 som bär "daggpunkt tabell" naturligt, inte i formen "X: Y" |
| T2 `TABELL_INGRESS` | Hur man läser tabellen: raden för rummets temperatur, kolumnen för hygrometerns tal. En yta som är kallare än talet i cellen blir våt. En eller två meningar |
| T3 `TABELL_CAPTION` | Kort beskrivning för skärmläsare |
| T4 `TABELL_HORN` | Hörncellen: raderna är luftens temperatur, kolumnerna luftfuktigheten. Ryms i 40 px |
| T5 `TABELL_KALLRAD` | Magnus-formeln med Lawrences konstanter, osäkerheten 0,35 grader, räknat av Hantverkstips |

---

## T. Daggpunktstabellen

Hantverkaren, 2026-09-30, till `spec-daggpunkt-tabell-2026-09-30.md` avsnitt 5. Talen i T3 och T5 byggs av konstanterna där det går; 0,35 är `OSAKERHET_C` och bör läsas därifrån om den exporteras.

| Nyckel | Text |
|---|---|
| T1 `TABELL_RUBRIK` | Daggpunkt i tabell för vanliga temperaturer inne |
| T2 `TABELL_INGRESS` | Leta upp raden för temperaturen i rummet och kolumnen för det hygrometern visar. Talet där de möts är daggpunkten i grader, och en yta som är kallare än så blir våt. |
| T3 `TABELL_CAPTION` | Daggpunkten i grader vid olika temperatur och luftfuktighet inne, med temperaturen i raderna och luftfuktigheten i kolumnerna |
| T4 `TABELL_HORN` | °C / RF |
| T5 `TABELL_KALLRAD` | Räknat av Hantverkstips med Magnus-formeln och de konstanter Mark Lawrence publicerade 2005. Formeln kan visa upp till 0,35 grader för mycket eller för lite. |
