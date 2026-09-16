# SEO-underlag, luftfuktighet inomhus

Skrivet 2026-09-16 av SEO-strategen. Sida 1 i startlistan. URL `/fukt/luftfuktighet-inomhus/`, kunskap, nivå mellan, målgrupp båda. Testartikel, ska vara indexerad före november (4 400 sökningar), toppen är januari (6 600).

## a) Sökintention och fraser

Informativ. Läsaren har en hygrometer som visar 65 procent eller imma på fönstren och vill veta om det är fel, varför, och vad som ska göras. Inga produktkort, inget reklamband.

| Fras | Volym per månad | Roll |
|---|---|---|
| luftfuktighet inomhus | 3 600, YoY -21 % | huvudfras |
| normal luftfuktighet inomhus | 720, YoY -33 % | sekundär, ägs av sidan |

Volymer från `docs/data/keyword-stats-2026-09-16.csv`. Sidan äger inte "kondens på fönster insida" (egen problemguide), "avfuktare källare" (köpguiden) eller "hur mycket el drar en avfuktare".

## b) Bättre än ettan

Ettan är Alingsås kommun (uppdaterad 2026-08-10, cirka 1 400 ord), en myndighet, så tvåan Polarpumpen lästes också (cirka 180 ord). Alingsås har ett riktigt resonemang: myter, luftens vattenkapacitet vid olika temperaturer i två tabeller, exemplet att luft på -20 grader som värms till 20 landar på cirka 6 procent RF, och rådet att köpa en termohygrometer för 200 kronor. Den anger 50 procent som bäst och 30 till 70 som godtagbart. Sidan säger själv att den handlar om torr luft. Hög luftfuktighet, sommarens och källarens problem, saknas helt. Daggpunkt nämns inte, ingen mätning per rum eller årstid, inga källor. Polarpumpen ger 40 till 60 procent, ingen tabell, inget datum, och länkar till egna avfuktare. Läsaren har kvar: är 65 procent för mycket i sovrummet, vid vilken procent växer mögel på en kall yttervägg, varför visar hygrometern olika i olika rum, och vad gör jag åt det.

Vår sida ska ha, som krav:

1. Daggpunktstabell (temperatur mot RF, daggpunkt i cellerna) räknad med Magnus-formeln, källa angiven, med förklaringen att en yta kallare än daggpunkten blir våt.
2. Gränsen för mögel på ytor, 75 procent RF som kritiskt fukttillstånd, med källa (Boverkets byggregler om fukt, Folkhälsomyndighetens allmänna råd om fukt och mikroorganismer). Skribenten verifierar exakt avsnitt.
3. Tabell över normal RF per rum och årstid (sovrum, badrum, källare, vind), vinter och sommar, med kommentar om varför. Källvärden från Alingsås och Boverket tills egna mätningar finns.
4. Svar på hög luftfuktighet, inte bara torr, i ordningen vädra, värma, avfukta, med länk till köpguiden.
5. Egna mätvärden, se nedan.

## Beställning till Christian, egna mätningar

Fyra rum (sovrum, badrum, källare, ett rum på bottenvåningen) med en loggande termohygrometer per rum i sju dygn, avläst morgon och kväll, med utetemperatur och ute-RF från SMHI. Instrumentets modell skrivs i texten. Skribenten lämnar en tabell med rubriken "Så här såg det ut hemma hos oss i [månad]" och platshållaren `[MÄTNING SAKNAS]` i cellerna tills mätningen finns. Skribenten hittar inte på siffror.

## c) Rubrikskiss

Title: Luftfuktighet inomhus, vad som är normalt och när det blir fel

H1: Rätt luftfuktighet inomhus, och vad du gör när hygrometern visar fel

Första skärmen (Kort svar på linjerat papper): 40 till 60 procent är bra, 30 till 70 godtagbart, över 75 procent på en kall yta ger mögel, och under 30 på vintern är normalt när det är minus ute. Nyckeltalet markerat, länk till daggpunktsräknaren.

H2 i ordning:

1. Vad hygrometern faktiskt mäter (relativ mot absolut fuktighet)
2. Daggpunkten avgör om väggen blir våt (tabell och diagram)
3. Normalt per rum och årstid (tabellen med egna mätningar)
4. Så torr blir luften på vintern, och när det är ett problem
5. För fuktigt, i ordningen vädra, värma, avfukta
6. Snickarens gräns, RF du kan lägga golv och måla vid
7. Mät rätt, var hygrometern ska stå

## d) Illustrationer och verktyg

1. Daggpunktsdiagram under H2 2. X-axel rumstemperatur 10 till 25 grader, Y-axel RF 30 till 90 procent, kurvor för daggpunkt 5, 10 och 15 grader. Skraffering där en yttervägg på 12 grader blir våt. Handanteckning "här börjar imman". Inline-SVG i skissens hand.
2. Huset i genomskärning under H2 3, med RF per rum som handskrivna tal, vinter till vänster och sommar till höger. Talen kommer från tabellen, så bilden väntar på mätningen.

Verktyg: daggpunktsräknare på `/rakna/daggpunkt/`. Indata temperatur och RF, utdata daggpunkt som stort tal plus meningen "en yta kallare än X grader blir våt". Sökfras "daggpunkt" och "räkna ut daggpunkt". Volym saknas i volymfilen, jag gissar några hundra per månad med vintertopp och begär frasen i nästa hämtning. Motivering: frågan "blir väggen våt" har ett tal som svar och ingen svensk sida ger det. Länkas från den här sidan, köpguiden och kondensguiden.

## e) Intern länkning

Ut från sidan:

- `/fukt/avfuktare-kallare/`, ankare "vilken avfuktare som passar i källaren", i H2 5
- `/fukt/sorptionsavfuktare/`, ankare "sorptionsavfuktare i kalla utrymmen", i H2 5
- `/rakna/daggpunkt/`, verktygskort i H2 2 (sidans enda)
- `/fukt/fukt-i-kallaren/` när den finns, ankare "hitta varifrån fukten i källaren kommer"
- `/om/sa-testar-vi/`, ankare "så mäter vi", i H2 7

In till sidan inom en vecka:

- `/fukt/avfuktare-kallare/`, ankare "vad som är normal luftfuktighet inomhus"
- `/fukt/sorptionsavfuktare/`, ankare "relativ luftfuktighet och daggpunkt"
- Startsidan, "Börja här" under Fukt
- `/fukt/` när huben publiceras, under "Hitta felet"

## f) Metadata

Description (154 tecken): Normal luftfuktighet inomhus är 40 till 60 procent. Tabell per rum och årstid, daggpunkt förklarad, och vad du gör när det är för fuktigt eller för torrt.

Strukturerad data: `Article` med `author` till `/forfattare/christian/`, `BreadcrumbList`. Ingen `FAQPage`. Canonical till sidan själv. Raden `/fukt/normal-luftfuktighet-inomhus/` i INNEHALLSARKITEKTUR.md avsnitt 2 utgår, den här ersätter den.
