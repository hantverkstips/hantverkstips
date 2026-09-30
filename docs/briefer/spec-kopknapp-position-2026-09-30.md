# Spec: köpknappens position följer sidans ordning

UX och bygge-agenten, 2026-09-30. Affiliate har bekräftat felet. Klickdatan per position blir fel, men juridiken påverkas inte.

## 0. Felet

`Kopknapp.astro` räknar upp `Astro.locals.kopknappPosition` i sin frontmatter. Astro renderar syskonkomponenter parallellt. En knapp som först väntar på något, som ett produktkort som hämtar sin produkt eller en innehållsknapp som hämtar sitt erbjudande, får därför ett nummer efter knappar som står längre ner på sidan. Ett exempel är `drybox-x685000` på `/fukt/avfuktare-vind/`.

Att räkna efter `await` hjälper inte. Ordningen avgörs av när varje komponent blir klar, och den kan skilja från sidans ordning åt båda hållen.

## 1. Lösningen: numrera i den färdiga HTML:en

- **Kopknapp.** När `position` inte skickas in skriver knappen platshållaren `position=KPOS` i `/go/`-länken i stället för ett tal. Räknaren i `Astro.locals` tas bort. En uttryckligen skickad `position` används som i dag.
- **`src/lib/affiliate.ts`**
  - `export const POSITION_PLATSHALLARE = 'KPOS'`.
  - `goLank` godtar `position: number | 'auto'`, där `'auto'` ger `position=KPOS`.
  - `export function numreraKopknappar(html: string): string` byter varje förekomst av `position=KPOS` mot `position=1`, `position=2` och så vidare, i den ordning de står i texten. Det fungerar både med `&amp;` och `&` före.
- **`src/middleware.ts`** är ny, med `defineMiddleware` från `astro:middleware`. Svaret skickas oförändrat vidare om det inte är `text/html`, om det saknar body eller om det är en omdirigering. Annars läses texten. Innehåller den platshållaren returneras `new Response(numreraKopknappar(text), { status, headers })` med samma status och headers. Innehåller den inte platshållaren skickas svaret vidare som det är. Middlewaren körs både för prerendrade sidor i bygget och för räknarna på servern.
- **`src/env.d.ts`:** `kopknappPosition` tas bort ur `App.Locals`, och kommentaren uppdateras.

## 2. Tester, i `scripts/test-kopknapp.mjs`

- `numreraKopknappar` numrerar tre platshållare i textens ordning, med både `&amp;` och `&`.
- En text utan platshållare kommer tillbaka oförändrad.
- En text med en uttryckligen skriven `position=7` rörs inte.
- `goLank('x', { position: 'auto' })` innehåller `position=KPOS`.
- Befintliga fall rörs inte.

## 3. Kontroller

- `npx astro check` 0 fel, och testet grönt.
- I dev: på `/fukt/avfuktare-vind/`, `/luftavfuktare/` och `/tester/woods-sw39fw/` ska positionerna i `/go/`-länkarna vara 1, 2, 3 och så vidare i sidans ordning, utan luckor, och ingen `KPOS` får finnas kvar. Samma kontroll görs på en räknare med produktkort, `/rakna/avfuktare/`.
- HTML-storleken ska vara oförändrad, inom några byte.
- Rör inget innehåll.
