# Spec: förvalet radonsug i elkostnadsräknaren, 2026-10-07

UX och bygge. Underlaget är affiliates faktablad `docs/briefer/faktablad/kunskap-radonsug.md` avsnitt 4, som är godkänt. Det ska byggas som de andra platsförvalen (`docs/briefer/spec-elkostnad-forval-2026-09-30.md` avsnitt 7).

## Beslut

- **Förvalet är Corroventa RS 400 på 25 W, 24 timmar per dygn, i ett år (365 dagar).** Det ger 0,6 kWh per dygn, 219 kWh per år och 525,60 kr per år vid 2,40 kr per kWh.
- **Skälet:** 25 W är den övre gränsen i Corroventas "Normal consumption 10-25 W", och Corroventa är den enda tillverkare som anger normal driftförbrukning. Fläkten går dygnet runt enligt tillverkarens "continuous operation".
- **Firmornas 500 kWh** blir inte förval, eftersom inget datablad stöder dem.
- **Adressen** är `?plats=radonsug`, så att radonsidan och andra sidor länkar på samma sätt som till källaren och krypgrunden.

## Ändringar i `src/lib/kalkyl/elkostnad.ts`

1. `Plats` får värdet `'radonsug'`.
2. `PlatsForval`:
   - `typ` blir `'kondens' | 'sorption' | 'flakt'`.
   - `villkor` blir valfritt, eftersom en fläkt inte har något provklimat.
   - Nytt valfritt fält `dagar?: number`, som när det finns ersätter STANDARD:s dagar i `standardMedForval`.
3. `FORVAL_PER_PLATS.radonsug = { maskin: 'Corroventa RS 400', typ: 'flakt', effektW: 25, timmarPerDygn: 24, dagar: 365 }`, med en källkommentar:
   - Corroventas produktsida för RS 400, "Normal consumption 10-25 W", med adress och läsdatum ur faktabladet 4.1.
   - Tillverkarens "continuous operation", faktabladet avsnitt 1.4.
   - `ANTAGANDE`: den övre gränsen väljs.
4. Ny `export const AVFUKTARPLATSER = PLATSER.filter((p) => FORVAL_PER_PLATS[p].typ !== 'flakt')`. Den används av tabellen "elen per avfuktare", så att radonsugen inte står där.
5. `standardMedForval` sätter `dagar: p?.dagar ?? STANDARD.dagar`.
6. Förvalet ska fungera på samma sätt i `Kalkylator`, `forval="plats=radonsug"` (`forvalFranAdress`).

## Ändringar i `src/pages/rakna/elkostnad.astro`

1. **E1-raden:** för `typ: 'flakt'` används en egen funktion `platsRadFlakt(maskin, effektW, timmar)` med texten `TEXT SAKNAS` (nyckel `elkostnad.e1.flakt`, platshållarna `{maskin}`, `{effekt}` och `{timmar}`). Den säger vilken fläkt och vilken effekt räkningen bygger på, och att läsaren kan skriva in egna tal. Villkoret i raden för avfuktare används inte.
2. **Tabellen "elen per avfuktare":** byggs av `AVFUKTARPLATSER`. `PLATS_KORT` får `radonsug` för typens skull, men tabellen visar den inte.
3. **Antagandetabellen** får en rad:
   - vad: `TEXT SAKNAS` (nyckel `elkostnad.antagande.radonsug`)
   - värde: "25 W i 24 timmar per dygn", byggt av talen
   - källa: Corroventas produktsida med titel och adress, märkt Källa, och 24 timmar märkt Antagande
4. **Kort besked:** när `plats=radonsug` står en rad under beskedet med `TEXT SAKNAS` (nyckel `elkostnad.besked.radonsug`, platshållarna `{kwh}` och `{kr}` för året). Den ska säga vad radonsugen kostar per år, och att den ska gå dygnet runt.
5. Inga andra texter ändras.

## Kontroller

- Lägg testfall i `scripts/test-kalkyl-elkostnad.mjs`:
  - `?plats=radonsug` ger effekt 25, timmar 24 och dagar 365, och 219 kWh och 525,6 kr.
  - En effekt i adressen vinner över förvalet.
  - Tabellens platser innehåller inte radonsug.
- Kör `npx astro check` och `npm run kontrollera`. Väntat: TEXT SAKNAS i de tre nycklarna.
- Kontrollera `/rakna/elkostnad/?plats=radonsug` i dev på 375 px och mät sidans storlek.
