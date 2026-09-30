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

## 7. Tillägg 2026-09-30: förval per plats, tabellen och avfuktarräknaren

Efter SEO:s checklista `docs/briefer/seo-checklista-2026-09-30/raknare-elkostnad-forval.md`. Checklistan vill ha sju förval. Tre av dem har tal med källa och byggs nu. Fyra väntar på underlag:

- **vind:** affiliates urval för vinden görs efter nytt underlag (`affiliate-fukt-2026-09-30.md` avsnitt 6).
- **luftfuktare:** affiliatebeslut 15 oktober, och inget datablad finns i något faktablad.
- **radonsug:** inget fläktdatablad.
- **tvätt:** Energimyndighetens test 2017 är beställt.

Ingen effekt gissas. Varje saknat förval blir en rad i `FORVAL_PER_PLATS` när talet finns.

### 7.1 Formelmodulen `src/lib/kalkyl/elkostnad.ts`

- Ny nyckel `plats` i adressen, med värdena `kallare`, `krypgrund` och `garage`. Den läggs i `FORVAL_NYCKLAR`.
- `export type Plats = 'kallare' | 'krypgrund' | 'garage'` och `export const FORVAL_PER_PLATS: Record<Plats, PlatsForval>`, där `PlatsForval = { maskin: string; typ: 'kondens' | 'sorption'; effektW: number; villkor: { tempC: number; rf: number }; timmarPerDygn: number }`. Källan står som kommentar ovanför varje rad:

| plats | maskin | typ | effekt | villkor | Källa |
|---|---|---|---|---|---|
| kallare | Wood's SW39FW | kondens | 320 W | 20 °C, 70 % | Proffsmagasinets produktsida, 320 W (`faktablad/guider-avfuktare-kallare.md` rad 104). Wood's bruksanvisning för systermodellen SW38F: 320 W vid 20 °C och 70 % (`faktablad/guider-avfuktare-garage.md` rad 74). Förstavalet i köpguiden för källaren |
| krypgrund | Fresh D-800 | sorption | 350 W | 27 °C, 60 % | Fresh: 350 W, 6 l vid 27 °C och 60 % (`faktablad/guider-avfuktare-krypgrund.md` rad 84). Valet i köpguiden för krypgrunden som har villkor; Drybox X4 anger inga |
| garage | Wood's MDK21 | kondens | 275 W | 30 °C, 80 % | Wood's bruksanvisning rev. 2022-05-02: 275 W vid 30 °C och 80 %. Tillverkaren väger tyngst mot butikens 240 W (`faktablad/guider-avfuktare-garage.md` rad 18 och 73). Valet i köpguiden för det uppvärmda garaget |

- `timmarPerDygn` är 8 i alla tre, samma ANTAGANDE som i `GANGTIDER` och köpguidernas tabeller.
- `tolkaQuery`: effekten tas i första hand ur `effekt` i adressen, sedan ur produkten, sedan ur platsen och sist ur `STANDARD`. Gångtiden tas ur `timmar`, sedan ur platsen, sedan ur `STANDARD`. Ett okänt `plats` ger inget förval. `forvalFranAdress` ger fel för ett okänt `plats`.
- `export function platsFranQuery(q): Plats | null`.
- Kontrolltal, som testet låser, med 8 h per dygn, 365 dagar och 2,40 kr per kWh:

| plats | kWh per dygn | kWh per år | kr per år |
|---|---|---|---|
| kallare | 2,56 | 934,4 | 2 242,56 |
| krypgrund | 2,8 | 1 022 | 2 452,80 |
| garage | 2,2 | 803 | 1 927,20 |

### 7.2 Sidan `src/pages/rakna/elkostnad.astro`

**Läs filen på nytt före varje Edit, och gör små Edits.**

- **Delningslänken** skriver `plats` först när platsen finns, före `produkt`. Den delade adressen ger samma tal som skärmen.
- **Raden över formuläret:** har adressen `plats` men ingen `produkt` visas en rad i samma form som `produktRad`. Texten är `platsRad(maskin, effektW, villkorTemp, villkorRf)` (E1). Formuläret får platsen som dolt fält `plats`, på samma sätt som `produkt`, så `ElkostnadForm` får en prop `plats`.
- **Tabellen:** en ny `<section>` direkt efter "Därför blev svaret så" och före `#watt-till-kwh`. `Pennstreck id="elen-per-avfuktare"` (E2). Före tabellen står en eller två meningar om villkoret (E3), med länk till `/fukt/sorptionsavfuktare/`.
  - `<Tabellyta kolumner={5}>` med kolumnerna maskinen, effekt W, villkor, kWh per dygn och kr per år.
  - Radhuvudet är platsens korta namn (E4, en per plats) följt av maskinens namn och typen. Namnet är en länk till `?plats=[plats]`.
  - Villkoret skrivs "20 °C, 70 %". Talen byggs av konstanterna. Klasserna står en gång på `<table>`, som daggpunktens tabell, med talen högerställda.
  - Hörncellen (E5) och en caption för skärmläsare (E6).
  - Under tabellen står källraden (E7). Den tar emot `ELPRIS_KALLA.period` och `formateraTal(ELPRIS_KR_PER_KWH, 2)` som parametrar och säger att gångtiden är 8 timmar.
- **Title och description:** `titel` och `BESKRIVNING` blir TEXT SAKNAS (E8, E9). SEO:s krav: title högst 44 tecken med "el" och "avfuktare", description 120 till 155 tecken. `VERKTYGSNAMN` står kvar.

### 7.3 Avfuktarräknaren `src/pages/rakna/avfuktare.astro`

Under korten i `#produkter-som-klarar-det`, när det finns träffar:

- En lista (`<ul>`, en rad per träff i samma ordning som korten). Varje rad är `kwhRad(namn, effektW, kwhPerAr)` (E10), och effekten kommer ur `produktForval(produkt.specs)`.
- kWh per år räknas med `raknaElkostnad`, med 8 timmar per dygn och 365 dagar, alltså ingen egen räkning i sidan.
- Varje rad länkar till `/rakna/elkostnad/?produkt=[slug]&timmar=8&dagar=365` med länktexten E11.
- En produkt utan effekt får ingen rad.
- Stycket efter listan, som i dag länkar till elkostnadsräknaren, står kvar.

### 7.4 Kalkylator

`forval="plats=kallare"` fungerar via `forvalFranAdress`. Platsen skickas till `ElkostnadForm` som dolt fält, och ingen rad visas i det kompakta formuläret.

### 7.5 Tester, i `test-kalkyl-elkostnad.mjs`

- Varje plats ger förvalet och kontrolltalen i 7.1.
- `plats=kallare&effekt=500` ger 500.
- `plats=kallare&timmar=24` ger 24.
- `plats=vind` ger inget förval i `tolkaQuery` och fel i `forvalFranAdress`.
- Nyckellistan har `plats`.
- `FORVAL_PER_PLATS` har villkor på varje rad.

I avfuktarens test ändras inget.

### 7.6 Kontroller

- Testerna för elkostnaden och avfuktaren ska vara gröna.
- `astro check` 0 fel.
- `kontrollera`: bara TEXT SAKNAS i de tre filerna.
- HTML-storleken för `/rakna/elkostnad/`, `?plats=kallare` och `/rakna/avfuktare/`, före och efter. Tabellen får kosta högst 2,5 kB och avfuktarlistan högst 1 kB. 0 script-taggar.
- 375 px: tabellen ryms eller scrollar bara inuti Tabellyta.

## 7.7 Granskning av avsnitt 7, 2026-09-30

- **Kontroller:** elkostnadens test 30 av 30, avfuktarens 8 av 8, `astro check` 0 fel. `kontrollera` ger bara TEXT SAKNAS.
- **Storlek:** tabellsektionen väger 1 755 byte och avfuktarlistan 198 byte.
- **375 px:** renderat. Tabellen ryms utan sidledsscroll.
- **Kolumnrubrikerna** "effekt W", "villkor", "kWh per dygn" och "kr per år" står som specens ord och går till hantverkaren som E12.

Godkänd av UX och bygge för koden.

## 8. Tvättläget, det sjunde förvalet (ersätter avsnitt 4)

Underlaget finns i `faktablad/fukt-gemensamma-tal.md` avsnitt 14. Koordinatorns beslut: testets tal per kg gäller för alla metoder. Restfukten räknas inte om, eftersom ingen källa ger den per varvtal, och EU-märkningen provar tumlare vid 60 %.

### 8.1 Formelmodulen `src/lib/kalkyl/elkostnad.ts`

`ElTyp` blir `'maskin' | 'golvvarme' | 'tvatt'`, och `typFranQuery` läser också `tvatt`.

Konstanter:

- `TVATT_KWH_PER_KG = { avfuktare: 0.32, varmepumpstumlare: 0.23, kondenstumlare: 0.27 }`. Källa: Energimyndigheten, "Luftavfuktare torka tvätt", testsida senast uppdaterad 2017-12-11, tabell 1. Adressen: https://www.energimyndigheten.se/effektiv-energianvandning/tester/tester-a-o/luftavfuktare-torka-tvatt/
- `TVATT_TEST = { kgPerTorkning: 7, datum: '2017-12-11', url: … }`. Källa: samma sida, "7 kilo tvätt på torkning".
- `TVATT_STANDARD = { kgPerTorkning: 7, torkningarPerVecka: 1, elprisKrPerKwh: ELPRIS_KR_PER_KWH }`.
  - 7 kg har testet som källa.
  - 1 torkning i veckan är ett ANTAGANDE: en enhet att skala från, som läsaren byter mot sitt eget tal.
- `TVATT_GRANSER = { kgPerTorkning: [1, 20], torkningarPerVecka: [0.1, 30], elprisKrPerKwh: samma som GRANSER }`. ANTAGANDE, inmatningsgränser.
- Ett år räknas som `DAGAR_PER_AR / 7` veckor.

Funktioner:

- `export function tolkaTvatt(q): { indata: TvattIndata; harIndata }` läser nycklarna `kg`, `torkningar` och `elpris`. Decimalkomma godtas.
- `export function raknaTvatt(i: TvattIndata)` ger `{ status: 'ok', kgPerAr, metoder: { avfuktare, varmepumpstumlare, kondenstumlare }: { kwhPerAr, krPerAr, kwhPerTorkning } }`, eller `ogiltig` med fel per fält. Felraderna (T1) blir TEXT SAKNAS.
- `FORVAL_NYCKLAR` får `kg` och `torkningar`. `forvalFranAdress` klarar `typ=tvatt`.

Kontrolltal med 7 kg, 1 torkning i veckan och 2,40 kr ger 365 kg per år:

| Metod | kWh per år | kr per år | kWh per torkning |
|---|---|---|---|
| avfuktare | 116,8 | 280,32 | 2,24 |
| värmepumpstumlare | 83,95 | 201,48 | 1,61 |
| kondenstumlare | 98,55 | 236,52 | 1,89 |

### 8.2 Formuläret `ElkostnadForm.astro`

Med `typ === 'tvatt'` byts fälten effekt, timmar, dagar och liter mot två fält: `kg` (kg per torkning) och `torkningar` (torkningar per vecka). Elpriset står kvar. Det dolda fältet `typ=tvatt` följer med, som för golvvärmen. Mönstret är det befintliga talfältet: etikett, fält på 48 px, enhet, fel, och hjälptext när formuläret inte är kompakt. Etiketterna och hjälptexterna är T2 till T5.

### 8.3 Sidan `src/pages/rakna/elkostnad.astro`

**Läs filen på nytt före varje Edit, och gör små Edits.** När `typ === 'tvatt'`:

- **Räkning:** `tolkaTvatt` och `raknaTvatt` används i stället för maskinens räkning. Ogiltig indata ger standardvarningen och `TVATT_STANDARD`, som i dag.
- **Resultatspalten:**
  - Beskedet (T6) och en rad under det (T7).
  - Det stora talet är avfuktarens kr per år, med etiketten T8.
  - Under talet står en rad per tumlare med kr per år, där namnen kommer ur T9.
  - Pekraden och delningsfältet är som i dag. Delningslänken är `typ=tvatt&kg=…&torkningar=…&elpris=…`.
- **Kortsvaret** i Faktarutan: T10, som en funktion som får talen.
- **"Därför blev svaret så":** bara två punkter, T11 (hur talet räknas, per kg ur testet) och T12 (att testet inte anger restfukten, och varför tumlaren och avfuktaren ändå jämförs med testets tal). Båda får en källrad, T13, med datumet 2017-12-11.
- **"Gör inte det här":** T14. Avfuktaren ska stängas av när tvätten är torr. Står den på ett dygn blir energin två till tre gånger så stor, enligt samma testsida.
- **Eltabellen:** den för maskinerna döljs i tvättläget.
- **Tvättabellen** står i stället: tre rader (avfuktare, värmepumpstumlare, kondenstumlare) med kWh per kg ur konstanterna och kWh per torkning om 7 kg. Rubriken är T15, ingressen T16 och källraden T17, med datum och adress. Den ligger i `<Tabellyta kolumner={3}>` med klasserna en gång på tabellen.

I maskinläget står en rad under eltabellen som länkar till `?typ=tvatt` (T18). Title, H1, ingress och Faq rörs inte, eftersom de gäller hela sidan.

### 8.4 Kalkylator

`forval="typ=tvatt"` ger det kompakta tvättformuläret.

### 8.5 Tester

- `raknaTvatt(TVATT_STANDARD)` ger kontrolltalen i 8.1.
- Decimalkomma fungerar: `kg=3,5` ger halva talen per torkning.
- Gränserna ger fel per fält.
- `forvalFranAdress('typ=tvatt')` är ok, och `forvalFranAdress('typ=tvatt&kg=50')` ger fel.
- `typFranQuery` ger `tvatt`.
- `TVATT_KWH_PER_KG` är exakt 0,32, 0,23 och 0,27.

Befintliga fall rörs inte.

### 8.6 Kontroller

- Testet grönt, `astro check` 0 fel, `kontrollera` bara TEXT SAKNAS.
- Storleken för `?typ=tvatt` och `/rakna/elkostnad/`, före och efter. Tvättläget får kosta högst 2,5 kB mot maskinläget. 0 script-taggar.
- 375 px i tvättläget: två fält, resultatspalten och tvättabellen utan sidledsscroll.

## 8.7 Granskning av avsnitt 8, 2026-09-30

- **Kontroller:** testet 36 av 36 med kontrolltalen låsta, avfuktarens test 8 av 8, `astro check` 0 fel. `kontrollera` ger bara TEXT SAKNAS.
- **Storlek:** `?typ=tvatt` väger 31,5 kB, alltså lättare än maskinläget. Maskinläget växte med 124 byte.
- **375 px:** renderat, utan sidledsscroll.
- **Pekraden:** UX och bygge lade till T20. Pekraden i tvättläget sa "per dygn, per liter och på ett år", vilket inte stämmer för tvätt.

Godkänd av UX och bygge för koden.
