# Spec: elkostnadens förval per maskin, och tvättläget (B0)

UX och bygge-agenten, 2026-09-30. Beställt av koordinatorn: B0 i `docs/SOKORDSANALYS.md` 12.6 och 12.7, och `docs/INNEHALLSARKITEKTUR.md` avsnitt 9, UX punkt 3. Title, description och H1 rörs inte, eftersom SEO skriver kraven i `raknare-elkostnad-forval.md`.

## 0. Vad som finns i dag och vad som byggs

Förval per maskin finns redan på verktygssidan. `?produkt=[slug]` hämtar produkten ur databasen (`hamtaProdukt`) och fyller effekten ur `specs.effekt_w` (`produktForval`). Över formuläret står raden "Jag räknar på …", och produktkorten länkar hit med `/rakna/elkostnad/?produkt=[slug]`. **Det blir ingen ny parameter `maskin`.** Samma sak under två namn skulle ge två adresser för samma svar, och `produkt` används redan av produktkorten. Exemplet i planen blir alltså `/rakna/elkostnad/?produkt=woods-mdk21`.

Det som saknas och byggs nu:

1. **Förvalet i en inbäddning.** `<Kalkylator namn="elkostnad" forval="produkt=woods-mdk21&timmar=8" />` ska fungera. Köpguiderna i omgång B, som avfuktare vind, behöver det.
2. **Produkten följer med i den delade länken.** I dag försvinner `produkt` ur delningsfältet. Talet blir detsamma, men raden "Jag räknar på …" försvinner hos mottagaren.

Byggs inte nu:

3. **Tvättläget.** Energimyndighetens test 2017, med kWh per kg tvätt för avfuktare och torktumlare, finns inte i något faktablad. `affiliate-fukt-2026-09-30.md` avsnitt 6 säger att underlaget för tvättstugan beställs i december. Utan tal med källa byggs inget (skillen nytt-verktyg). Avsnitt 4 är specen som gäller när underlaget finns.

Ingen ny publik text i punkt 1 och 2, så ingen textlista behövs nu.

## 1. Förvalet i en inbäddning

- `FORVAL_NYCKLAR` i `src/lib/kalkyl/elkostnad.ts` får `'produkt'`.
- `forvalFranAdress(forval, produktForval?)` får en valfri andra parameter, `ProduktForval`. Funktionen förblir ren, så databasen läses aldrig i formelmodulen. Den skickar vidare till `tolkaQuery(q, forval)` och returnerar också `produktSlug` (`produktSlugFranQuery(q)`, eller null).
- I `src/components/ui/Kalkylator.astro`, bara när `namn === 'elkostnad'` och förvalet har `produkt`, sker följande:
  - Produkten hämtas med `await hamtaProdukt(slug)`, och effekten läses med `produktForval(produkt.specs)`.
  - Saknas produkten, eller har den ingen effekt, ger det ett **byggfel** med samma mönster som i dag, till exempel `[Kalkylator] Förvalet "produkt=x" till elkostnaden: produkten x finns inte eller saknar effekt_w`.
  - En `effekt` i samma förval vinner över produktens.
  - `ElkostnadForm` får `produktSlug`, så att det dolda fältet `produkt` följer med till verktygssidan, men ingen `produktRad` i den kompakta varianten.
- Kommentaren på `forval` i Kalkylator uppdateras.

## 2. Produkten i den delade länken

- I `src/pages/rakna/elkostnad.astro`: när `produkt` finns och `forval.effektW !== null` sätts `produkt` först i `delaQuery`, före `effekt`. Övriga nycklar blir som i dag. Finns inte produkten skrivs den inte.
- Den delade adressen ger samma tal som skärmen, eftersom `effekt` står i adressen och vinner över produktens.

## 3. Tester, `scripts/test-kalkyl-elkostnad.mjs`

Befintliga fall och tal rörs inte.

- `forvalFranAdress('produkt=woods-mdk21', { effektW: 275 })` ger `effektW` 275 och `produktSlug` `'woods-mdk21'`.
- `forvalFranAdress('produkt=woods-mdk21&effekt=300', { effektW: 275 })` ger 300.
- `forvalFranAdress('produkt=Ogiltig slug!')` ger `produktSlug` null. Förvalet är ändå ok, med standardeffekten.
- `forvalFranAdress('maskin=x')` ger fel, eftersom nyckeln är okänd.
- Nyckellistan innehåller `produkt`.

## 4. Tvättläget, när underlaget finns (byggs inte nu)

Underlag att beställa hos underlagsarbetaren, med källa och datum:

- Energimyndighetens test 2017: energi per kg torkad tvätt, eller per körning med angiven tvättvikt, för de testade avfuktarna och torktumlarna, och testvillkoren (rummets temperatur och RF, restfukt efter centrifugering).
- Hur mycket vatten en kilo tvätt håller efter centrifugering vid vanliga varvtal, med källa.

Tänkt form, som specas färdigt när talen finns:

- `typ=tvatt` bredvid `typ=golvvarme`.
- Fälten kg tvätt per vecka och maskin (avfuktare eller torktumlare, med kWh per kg ur testet som förval).
- Resultatet i kronor per år för båda maskinerna sida vid sida.
- Texterna blir TEXT SAKNAS i `texter-elkostnad-forval-[datum].md`.

## 5. Kontroller och budget

- Testet grönt, `npx astro check` 0 fel, `npm run kontrollera` 0 nya fel.
- Hämta `/rakna/elkostnad/?produkt=[en luftavfuktare i databasen med effekt_w]` i dev. Delningsfältet ska börja med `produkt=`, och den adressen ska ge samma kronor.
- HTML-storleken för `/rakna/elkostnad/` och `?produkt=…` får växa högst 0,5 kB. 0 script-taggar.
- 375 px: inga layoutändringar. Det dolda fältet syns inte.
- Ingen mdx rörs. Inbäddningen med `produkt` provas i en tillfällig sida under `src/pages/_skiss/`, som tas bort efteråt.

## 6. Granskning 2026-09-30

Avsnitt 1–3 är byggda. Testet ger 25 av 25, `astro check` 0 fel och `kontrollera` 0 fel. Storleken är oförändrad, och `?produkt=woods-mdk21` (240 W i databasen) växte med 24 byte. Den delade länken börjar med `produkt=` och ger samma kronor. Inbäddningen provades med Astros container-API, eftersom sidor under `src/pages/_skiss/` inte routas. En produkt som saknas ger byggfel. Godkänd av UX och bygge. Tvättläget (avsnitt 4) väntar på underlag.
