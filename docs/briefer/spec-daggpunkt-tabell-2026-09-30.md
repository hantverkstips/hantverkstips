# Spec: daggpunktstabellen under räknaren på /rakna/daggpunkt/

UX och bygge-agenten, 2026-09-30. Beställd av koordinatorn: A0 i `docs/SOKORDSANALYS.md` 12.7 och 12.6 ("En statisk tabell under formuläret för 'daggpunkt tabell'", 110 i månaden) och `docs/INNEHALLSARKITEKTUR.md` avsnitt 9, UX punkt 2 ("luftens temperatur mot RF, daggpunkten i cellen"). Bygger på `spec-daggpunkt-rum-2026-09-30.md`.

**Byggs inte förrän hantverkaren för räknarens texter är klar i `daggpunkt.astro`.** Då skriver hantverkaren texterna T1–T4 nedan, och utvecklaren bygger i förgrunden.

## 1. Vad tabellen är

En statisk tabell: luftens temperatur i raderna, relativ luftfuktighet i kolumnerna, daggpunkten i grader i cellen. Talen räknas vid varje rendering med `daggpunkt()` i formelmodulen, alltså samma Magnus-formel med Lawrences konstanter som räknaren. Inga tal skrivs för hand. Tabellen är samma på varje adress. Den enda skillnaden är att cellen för läsarens egna värden får markering när de finns i tabellen.

Källan är densamma som räknarens: Lawrence 2005, BAMS 86(2), osäkerhet 0,35 grader. Tabellen är en egen räkning ur den formeln, samma som GT 3.2 (`faktablad/fukt-gemensamma-tal.md`).

## 2. Rader och kolumner

- **Rader, luftens temperatur:** 12, 15, 18, 20, 21, 22 °C. 12 och 15 är källarraderna på `/fukt/luftfuktighet-inomhus/`. 18 är källarluften i augusti på räknarsidan. 20, 21 och 22 är bostadens rader på sajten.
- **Kolumner, RF:** 30, 40, 50, 60, 70, 80 %.
- Alla 36 celler fylls, eftersom de räknas med formeln och inte uppskattas.

Kontrolltal som testet låser (GT 3.2, tolerans 0,05 efter avrundning till en decimal):

| | 30 | 40 | 50 | 60 | 70 | 80 |
|---|---|---|---|---|---|---|
| 22 | 3,6 | 7,8 | 11,1 | 13,9 | 16,3 | 18,4 |
| 21 | 2,8 | 6,9 | 10,2 | 12,9 | | |
| 20 | 1,9 | 6,0 | 9,3 | 12,0 | 14,4 | 16,4 |
| 15 | | | | | 9,6 | 11,6 |
| 12 | | | | 4,5 | 6,7 | 8,7 |

22/80 blir 18,4. Luftfuktighetssidan skriver 18,3, vilket är avvikelse A8 i GT 10 och rättas där, inte här.

## 3. Formelmodulen `src/lib/kalkyl/daggpunkt.ts`

- `export const TABELL_TEMP = [12, 15, 18, 20, 21, 22] as const` och `export const TABELL_RF = [30, 40, 50, 60, 70, 80] as const`. Kommentaren säger att raderna är sajtens exempel och ingen källa behövs, eftersom de är indata.
- `export function daggpunktTabell(): { tempC: number; celler: { rf: number; daggpunktC: number }[] }[]` räknar med `daggpunkt()` och avrundar till en decimal.

## 4. Sidan `src/pages/rakna/daggpunkt.astro`

**Läs filen på nytt före varje Edit, gör små Edits och rör ingen annan text.**

- **Plats:** en egen `<section>` med `<Pennstreck id="daggpunktstabell">` (rubriken är T1). Den står efter avfuktarsektionen (`#avfuktaren`) och före `#vad-daggpunkten-ar`, alltså under verktyget och förklaringen av svaret.
- En mening före tabellen (T2).
- `<Tabellyta kolumner={7} class="mt-4">` runt en `<table>`:
  - `caption` är `sr-only` (T3).
  - Första radhuvudet i `thead` är T4 (hörncellen, säger att raderna är luftens temperatur och kolumnerna luftfuktigheten).
  - Kolumnhuvudena är "30 %" till "80 %" och radhuvudena "12 °C" till "22 °C". De byggs av konstanterna.
  - Cellerna har en decimal och decimalkomma via `formateraTal(n, 1)`, med det ledande `-` bytt mot `−` (U+2212). Enheten står bara i T2 och i huvudena, inte i cellerna.
  - Klasserna står en gång på `<table>`, som `TABELL_KLASS` men med `[&_th]:px-1 [&_td]:px-1 [&_th]:py-2 [&_td]:py-2`, talen högerställda (`[&_td]:text-right`), och `thead`-raden och radhuvudena i `text-blyerts-2`. Målet är att hela tabellen ryms på 343 px utan sidledsscroll. Tabellyta tar hand om det om den inte gör det.
- **Läsarens cell:** när `visatIndata.luftTempC` finns i `TABELL_TEMP` och `visatIndata.rfProcent` i `TABELL_RF` får den cellen `<Markering>`, och ingen annan cell i tabellen får det. Standardvärdena 20 °C och 50 % ger markering på 9,3. Sovrummets förval, 21 °C och 45 %, ger ingen, eftersom 45 inte är en kolumn.
- Källraden på en rad under tabellen (T5), `text-liten text-blyerts-2`.
- Ingen JS och ingen ny komponent.

## 5. Text som hantverkaren skriver (TEXT SAKNAS tills dess)

| Nyckel | Vad den ska säga |
|---|---|
| T1 `TABELL_RUBRIK` | H2 som bär "daggpunkt tabell" naturligt. Ingen "X: Y"-form |
| T2 `TABELL_INGRESS` | En eller två meningar om hur man läser tabellen: leta upp raden för rummets temperatur och kolumnen för hygrometerns tal. En yta som är kallare än talet i cellen blir våt |
| T3 `TABELL_CAPTION` | En kort beskrivning av tabellen för skärmläsare |
| T4 `TABELL_HORN` | Hörncellen, till exempel att raderna är luften och kolumnerna fukten. Kort, eftersom den ska rymmas i 40 px |
| T5 `TABELL_KALLRAD` | Källan: Magnus-formeln med Lawrences konstanter, osäkerheten, och att talen är räknade av Hantverkstips |

Texterna läggs också i `docs/briefer/texter-daggpunkt-rum-2026-09-30.md` under rubriken T.

## 6. Test `scripts/test-kalkyl-daggpunkt.mjs`

- `daggpunktTabell()` har 6 rader med 6 celler i konstanternas ordning.
- Varje ifylld cell i kontrolltabellen i avsnitt 2 stämmer.
- Varje rad stiger med RF, och varje kolumn stiger med temperaturen.
- Befintliga fall rörs inte.

## 7. Budget och kontroller

- Tabellen får lägga till högst 2,5 kB på `/rakna/daggpunkt/`, mätt i dev som i rumsspecen. Script-taggar: 0.
- Testet grönt, astro check 0 fel, och kontrollera 0 fel utöver TEXT SAKNAS tills texten är skriven.
- 375 px: tabellen ryms eller scrollar bara inuti Tabellyta, och markeringen syns på standardadressen.
