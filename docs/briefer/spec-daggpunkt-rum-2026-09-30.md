# Spec: förval per rum i /rakna/daggpunkt/

UX och bygge-agenten, 2026-09-30. Beställt av koordinatorn efter SEO:s klusterplan (`docs/SOKORDSANALYS.md` 12.6 och 12.7 A0, `docs/INNEHALLSARKITEKTUR.md` avsnitt 9, "Vad UX och bygge behöver veta" punkt 2). Talen kommer ur `docs/briefer/faktablad/fukt-gemensamma-tal.md` (här "GT") och `docs/briefer/faktablad/rakna-daggpunkt.md`, plus de publicerade sidor och faktablad som GT hänvisar till. Ingen konstant i den här specen är ny: varje tal står redan på en publicerad sida eller i ett faktablad med källa.

Texten i listan i avsnitt 8 skrivs av hantverkaren. Utvecklaren skriver `TEXT SAKNAS` på varje sådan plats. Listan till hantverkaren är `docs/briefer/texter-daggpunkt-rum-2026-09-30.md`.

## 0. Vad som byggs, och vad som inte gör det

Byggs nu:

1. Rummet i adressen: `?rum=sovrum`, `fonster`, `kallare`, `krypgrund`, `garage`, plus `bostad` som i dag. Ett rum utan tal i adressen fyller formuläret och räkningen med rummets förval. Tal i adressen vinner alltid över förvalet.
2. Fönstret som kall yta: med `rum=fonster` byts fältet för ytans temperatur mot två fält, fönstrets U-värde och temperaturen ute, och glasets temperatur räknas fram.
3. Rummets normala luftfuktighet i resultatspalten, med källa under verktyget.
4. En rad länkar ovanför formuläret, en per rum, som öppnar förvalet (ingen JS).
5. `<Kalkylator namn="daggpunkt" forval="rum=fonster" />` i artiklar, på samma sätt som elkostnaden.

Byggs inte nu, med skäl:

- **Badrum och kallvind.** GT har inget tal för dem: "Saknas: riktvärde för badrum" (GT 11), och ingen temperatur eller luftfuktighet för en kallvind vintertid. Utan tal med källa byggs inget förval. Koordinatorn beställer underlag (avsnitt 9). Koden ska göra det till en rad i `FORVAL_PER_RUM`, en i `NORMALT_PER_RUM` och en i `RUMSVAL` att lägga till dem.
- **Tabellen "daggpunkt tabell"** under formuläret (A0 i 12.7) ingår inte i det här uppdraget. Egen spec när koordinatorn beställer den; talen finns i GT 3.2 och räknas ur samma formel.
- Title, description, H1 och registerraden rörs inte. Det är SEO:s och hantverkarens.

## 1. Förvalen

Varje förval är fem tal och en årstid. Kolumnen "Källa" går in som kommentar ovanför raden i koden.

| rum | temp °C | rf % | kallaste ytan | årstid | råd som | Källa |
|---|---|---|---|---|---|---|
| `bostad` | 20 | 50 | 12 | vinter | varmt | `STANDARD`, oförändrad |
| `sovrum` | 21 | 45 | 12 | vinter | varmt | 21 °C och 45 %: Folkhälsomyndigheten FoHMFS 2014:14, "cirka 45 % relativ luftfuktighet vid 21° C" (GT T10); sovrum under 45 % vintertid, Astma- och Allergiförbundet (GT T13). Ytan 12: `TYPISKA_YTOR`, ytterväggen i ett äldre hus 12 till 15, nedre änden (ANTAGANDE, redan publicerat i hjälptexten och antagandetabellen) |
| `fonster` | 21 | 45 | räknas: U 3,0 och ute −5 ger 10,9 | vinter | varmt | 21 och 45 som sovrummet. U 3,0: tvåglas, Energimyndigheten ET 2025:01 tabell 1 (2,8–3,0), samma rad som tabellen på `/fukt/kondens-pa-fonster/`. Ute −5: Folkhälsomyndighetens gräns för omfattande kondens på fönstrets insida (GT T12). Glaset: `faktablad/guider-kondens-pa-fonster.md` avsnitt 3 |
| `kallare` | 20 | 70 | 12 | sommar | kallt | 20 °C och 70 %: sommarluft, SMHI 70–80 % i juli (kommentaren över `UTELUFT_ANGHALT_G_PER_M3` i `avfuktare.ts`); 20/70 med vägg 12 är exemplet på `/fukt/fukt-i-kallaren/` och `/fukt/luftfuktighet-inomhus/` (GT 3.2, kontroll 14,4). Ytan 12: `TYPISKA_YTOR` källarväggen 8 till 12, övre änden, och `faktablad/rakna-kallare.md` rad 12 |
| `krypgrund` | 20 | 70 | 10 | sommar | kallt | 20/70 som källaren. Ytan 10: "jag räknar med tio grader där nere" på `/fukt/avfuktare-krypgrund/` (rad 88); Fuktcentrums medeltemperatur i krypgrunden 8,9–9,8 °C (`faktablad/guider-fukt-i-krypgrund.md` 3.3) |
| `garage` | 20 | 70 | 10 | sommar | kallt | 20/70 som källaren. Ytan 10: ouppvärmt garage räknas på 10 grader i `/rakna/avfuktare/` och på `/fukt/avfuktare-garage/` (rad 77; `faktablad/guider-avfuktare-garage.md` rad 44) |

"Råd som" ersätter dagens `kallt = rum === 'kallare' || rum === 'garage'`: `kallt` är sant för `kallare`, `krypgrund` och `garage`. `sovrum` och `fonster` får samma råd och samma "Gör inte det här" som `bostad`. Logiken i steg 5 rörs inte i övrigt.

Kontrolltal, som testet låser (tolerans 0,1):

| rum | daggpunkt | ytan | RF vid ytan | bedömning |
|---|---|---|---|---|
| sovrum | 8,6 | 12 | 80 | mogelrisk |
| fonster | 8,6 | 10,9 | 86 | mogelrisk |
| kallare | 14,4 | 12 | 100 | kondens |
| krypgrund | 14,4 | 10 | 100 | kondens |
| garage | 14,4 | 10 | 100 | kondens |

## 2. Fönstret

Glasets temperatur, mitt på glaset i jämvikt: `glas = inne − RSI × U × (inne − ute)`, `RSI = 0,13` m²K/W.

- Källa för RSI: SS-EN ISO 6946, lodrät inneryta (`faktablad/kunskap-u-varde.md`, tabellen över Rsi och Rse). Samma formel och tal som `/fukt/kondens-pa-fonster/` rad 91.
- Testfall ur tabellen på `/fukt/kondens-pa-fonster/` (faktabladet avsnitt 3), alla med 21 inne: U 3,0 vid −5 → 10,9; vid −10 → 8,9; vid −20 → 5,0. U 2,8 vid −20 → 6,1. U 1,4 vid −20 → 13,5. U 0,8 vid −20 → 16,7.
- `GRANSER.uVarde = [0.5, 6]`, `GRANSER.uteTempC = [-40, 15]`. ANTAGANDE: inmatningsgränser, inga påståenden. 6 täcker ett enkelglas, −40 den kallaste natten i Norrland, 15 håller ute under inne i hela temp-spannet som är rimligt för frågan.
- `TYPISKA_U`: tre rader till hjälptexten, samma källa som ovan (ET 2025:01 tabell 1): tvåglas 2,8 till 3,0; treglas 1,4 till 1,8; energifönster 0,6 till 0,9. Spannen skrivs som tal i koden; namnet på raden är text (avsnitt 8, M3).
- Med `rum=fonster` används aldrig `ytatemp`. Ytan i resultatet är glasets temperatur.

## 3. Rummets normala luftfuktighet

`NORMALT_PER_RUM` i formelmodulen, en rad per rum och årstid. `lagst` får vara `null`.

| rum | vinter | sommar | kalla (nyckel) | Källa |
|---|---|---|---|---|
| `bostad` | 10–25 | 45–60 | `traguiden` | TräGuiden, Trä och fukt (GT T7, T8) |
| `sovrum` | högst 45 | 45–60 | vinter `astma-allergi`, sommar `traguiden` | GT T13; T7 |
| `fonster` | högst 45 | 45–60 | vinter `fohm`, sommar `traguiden` | GT T10; T7 |
| `kallare` | högst 75 | högst 75 | `villaagarna` | GT 2.3, "under 75 % i medel", Villaägarna, med förbehållet i GT 1.3 |
| `krypgrund` | högst 75 | högst 75 | `olsson-sp` | Lars Olsson, SP, Bygg & teknik 8/06, "sänka RF till säkra nivåer (cirka 75 procent)" (`faktablad/guider-fukt-i-krypgrund.md` 1.3) |
| `garage` | högst 60 | högst 60 | `sbi` | Stålbyggnadsinstitutet, ingen korrosion under 60 % (GT T41) |

Resultatet får fältet `normalt: { lagst: number | null; hogst: number; kalla: NormalKalla; lage: 'under' | 'inom' | 'over' }`. `lage` är `'over'` när `rfProcent > hogst`, `'under'` när `lagst !== null && rfProcent < lagst`, annars `'inom'`.

## 4. Formelmodulen `src/lib/kalkyl/daggpunkt.ts`

- `Rum = 'bostad' | 'sovrum' | 'fonster' | 'kallare' | 'krypgrund' | 'garage'`. `arRum` följer typen.
- `DaggpunktIndata` får `uVarde?: number` och `uteTempC?: number`. `STANDARD` får `uVarde: 3.0` och `uteTempC: -5` (används bara när `rum === 'fonster'`); övriga fält i `STANDARD` rörs inte.
- `RSI_M2K_PER_W = 0.13` med Källa-kommentaren i avsnitt 2. `export function glasTemperatur(inneC, uteC, uVarde): number`.
- `FORVAL_PER_RUM: Partial<Record<Rum, Forval>>` enligt avsnitt 1, med källan som kommentar ovanför varje rad. `export const RUM_MED_FORVAL: Rum[]` i ordningen sovrum, fonster, kallare, krypgrund, garage.
- `NORMALT_PER_RUM` och `type NormalKalla` enligt avsnitt 3.
- `raknaDaggpunkt`: när `rum === 'fonster'` valideras `uVarde` och `uteTempC` mot `GRANSER` (fel per fält, nycklarna `uVarde` och `uteTempC` i `fel`), och `ytTempC` ersätts av `glasTemperatur(luftTempC, uteTempC, uVarde)` innan räkningen. Annars valideras `ytTempC` som i dag och u/ute ignoreras. Resultatet får `ytTempC` (ytan som räkningen använde) och `normalt`. Felsträngarna för de två nya fälten är text (avsnitt 8, M4).
- `tolkaQuery`: läs `rum` först. Varje fält: talet i adressen om nyckeln finns, annars rummets förval, annars `STANDARD`. Gäller `temp`, `rf`, `ytatemp`, `u`, `ute` och `arstid`. `harIndata` blir sant också för `u` och `ute`. Ett okänt `rum` ger `STANDARD.rum` och inget förval, som i dag.
- `formVarden(i)`: fältens strängar med decimalkomma, `{ temp, rf, ytatemp, u, ute }`.
- `FORVAL_NYCKLAR = ['temp', 'rf', 'ytatemp', 'arstid', 'rum', 'u', 'ute']` och `forvalFranAdress(forval)` som i `elkostnad.ts`: okänd nyckel, okänt rum, okänd årstid eller ett förval som ger `ogiltig` ger `{ status: 'fel', fel }`; annars `{ status: 'ok', indata, varden }`.
- Strängarna som är text (etiketter, feltexter, källrader) ligger i ett exporterat `TEXT`-objekt eller i `RUMSVAL`/`TYPISKA_U` och är `TEXT SAKNAS` tills hantverkaren skrivit dem. Befintliga strängar rörs inte, utom etiketten för `kallare` som i dag lyder "Källare eller krypgrund" och nu blir fel (M1).

## 5. Formuläret `src/components/kalkyl/DaggpunktForm.astro`

- `varden` får `u` och `ute`. Standard ur `formVarden(STANDARD)`.
- `indata.rum === 'fonster'`: fältet för den kallaste ytan byts mot två fält, `u` och `ute`, i samma mönster som `talfalt` (etikett ovanför, 48 px fält, `inputmode="decimal"`, enhet till höger, fel under med `aria-describedby`, hjälptext när inte kompakt). Hjälptexten för `u` visar `TYPISKA_U` som listan under ytans fält gör i dag. Inget dolt `ytatemp`.
- Annars som i dag.
- `RUMSVAL` får de nya raderna i ordningen bostad, sovrum, fonster, kallare, krypgrund, garage. Kompakt läge: samma `flex flex-wrap gap-x-4`.

## 6. Sidan `src/pages/rakna/daggpunkt.astro`

En hantverkare rättar texter i samma fil samtidigt. **Läs filen på nytt före varje Edit, gör små Edits, rör aldrig löptext eller Faq utanför det som står här.**

1. `varden`: `faltVarde(nyckel, tolkatVarde)` där talet utan nyckel i adressen kommer från `formVarden(indata)`, alltså förvalet, inte `STANDARD`. Vid `ogiltig` som i dag.
2. `delaQuery`: `temp`, `rf`, `arstid`, `rum` alltid; `u` och `ute` när `rum === 'fonster'`, annars `ytatemp`. Värdena ur `visatIndata`, som i dag. Adressen `?rum=fonster` ska ge en delningslänk som öppnar samma svar.
3. `tal.ytTemp` ur `visat.ytTempC` (glaset för fönstret), inte ur indata.
4. **Rumsraden.** Ovanför `<div class="linjerat ...">`, ett `<nav aria-label={TEXT...}>` med en rubrikrad (`text-etikett`, TEXT S1) och en `<ul>` med en länk per rum i `RUM_MED_FORVAL` till `/rakna/daggpunkt/?rum=[rum]#raknaren`. Länkarna: `LANK_KLASS`, `inline-flex min-h-11 items-center`, `flex flex-wrap gap-x-4` på listan. Rummet som visas har `aria-current="true"` och `font-bold`. Länktexten är det korta namnet (M2). `id="raknaren"` på den linjerade diven. Ingen JS, inga knappar, inga piller.
5. **Resultatspalten.** En rad till, `text-liten text-blyerts-2`, direkt efter raden om den kallaste ytan: rummets normala luftfuktighet och var ditt tal ligger (S2, en funktion som får `rumNamn`, `lagst`, `hogst`, `rfInne`, `lage`). Spalten får inget annat nytt.
6. **Därför blev svaret så.** Två `li` till, i samma form som de andra (mening, sedan källraden i `text-liten`):
   - med `rum === 'fonster'`, först i listan: hur glasets temperatur kom fram ur U-värdet och temperaturen ute (S3, med `u`, `ute`, `glas` som tal), källrad S4.
   - alltid, sist före "Det svaga ledet": källan till rummets normala luftfuktighet (S5, en text per `NormalKalla`).
7. **Antagandetabellen** får rader, i den här ordningen efter Magnus-raden: RSI (Källa, SS-EN ISO 6946), U-värdena i hjälptexten (Källa, ET 2025:01), och en rad per förval (Källa eller Antagande enligt avsnitt 1). Kolumnen "Jag räknar med" byggs av konstanterna; "Vad" och "Källa eller antagande" är text (S6). URL:er: ET 2025:01 enligt `faktablad/guider-kondens-pa-fonster.md` avsnitt 5; SS-EN ISO 6946 utan länk.
8. Kortsvaret, H1, ingress, title, description, FAQ och brödtexten rörs inte.

## 7. `src/components/ui/Kalkylator.astro`

- `forval` tillåts för `daggpunkt`. `forvalFranAdress` från `daggpunkt.ts`, fel ger byggfel med samma mönster som elkostnaden. `DaggpunktForm` får `indata` och `varden` ur förvalet.
- Kommentaren på `forval` och felmeddelandet för andra slugs uppdateras.

## 8. Text som hantverkaren skriver

Nycklarna och vad de ska säga står i `docs/briefer/texter-daggpunkt-rum-2026-09-30.md`. M = formelmodulen, F = formuläret, S = sidan.

## 9. Tal som saknas (till koordinatorn)

Beställs hos underlagsarbetaren innan badrum och vind får förval:

- Badrum efter dusch: lufttemperatur och luftfuktighet, och den kallaste ytan (ytterväggens insida eller fönstret), med källa. GT 11: riktvärde saknas.
- Kallvind vintertid: luftens temperatur och luftfuktighet, och undersidan av råsponten en klar natt, med källa. TräGuidens uteluft 90–95 % vinter (GT T15) finns, temperaturen på råsponten gör det inte.
- Normal luftfuktighet för badrum och vind, med källa, eller ett beslut att raden står tom.

## 10. Tester `scripts/test-kalkyl-daggpunkt.mjs`

Befintliga fall och tal rörs inte. Påståendet `deepEqual` i "tolkaQuery läser adressen" får `uVarde` och `uteTempC` tillagda (standardvärdena), inget annat. Nya fall:

1. `glasTemperatur` mot de sex testfallen i avsnitt 2.
2. Varje förval: `tolkaQuery(new URLSearchParams('rum=X'))` ger förvalets indata, och `raknaDaggpunkt` ger kontrolltalen i avsnitt 1.
3. Tal i adressen vinner: `rum=kallare&temp=15` ger 15 och källarens övriga förval.
4. `rum=bostad` och ingen `rum` ger `STANDARD` som i dag.
5. Fönstret: `rum=fonster&u=1,4&ute=-20` ger ytan 13,5 och ingen kondens vid 21/45; `ytatemp` i adressen påverkar inte resultatet; `u=9` och `ute=tjugo` ger fel på `uVarde` respektive `uteTempC`.
6. `normalt.lage`: garage vid 70 → `over`; sovrum vinter 45 → `inom`; bostad vinter 30 → `over`; bostad sommar 40 → `under`.
7. `forvalFranAdress`: `rum=fonster` ok; `rum=vind` fel; `farg=bla` fel; `rum=kallare&rf=120` fel.
8. `TEXT` och de nya `RUMSVAL`-/`TYPISKA_U`-raderna finns som strängar (TEXT SAKNAS godtas, som K10 i kökets test).

## 11. Vad som inte får ändras

- Konstanterna och talen i `daggpunkt.ts` utanför det som läggs till här, `STANDARD` utöver `uVarde` och `uteTempC`, `GRANSER` för de tre befintliga fälten, bedömningslogiken och åtgärdsordningen.
- Fältnamnen `temp`, `rf`, `ytatemp`, `arstid`, `rum`. En delad adress från i dag ska ge samma svar i morgon, också `rum=kallare` med alla tal.
- `prerender = false`, cache-headern, `ogBild` (delningsbilden är per verktyg och fungerar för alla rum), `canonical` (sökvägen utan query, så `?rum=` blir inga egna sidor i indexet).
- Ingen klient-JS. Inga nya beroenden.

## 12. Budget och kontroller

- `node --experimental-strip-types --test scripts/test-kalkyl-daggpunkt.mjs`: grönt.
- `npx astro check --minimumSeverity error`: 0 fel.
- `npm run kontrollera`: 0 fel utöver `TEXT SAKNAS` i de tre filerna. Varje annat fel är retur.
- Budget: `node scripts/budget-html.mjs --dev http://localhost:4321` och HTML-storleken för `/rakna/daggpunkt/`, `?rum=fonster` och `?rum=kallare` mätt från dev med samma skalning. Högst 66 kB; tillägget ska vara under 2 kB. Script-taggar utöver JSON-LD: 0.
- Bygget körs inte av arbetaren: hantverkaren arbetar i samma fil och `kontrollera` är rött på TEXT SAKNAS tills texten är skriven.
- 375 px: rumsraden radbryter utan sidledsscroll, fönstrets två fält får plats, resultatspalten går att läsa. UX och bygge rendrar och tittar.

## 13. Granskning 2026-09-30

Byggt av utvecklaren och granskat av UX och bygge. Testet 21 av 21 grönt, astro check 0 fel, kontrollera 3 fel och alla är TEXT SAKNAS i de tre tillåtna filerna. Budget i dev: `/rakna/daggpunkt/` 38,3 kB (+1,0 kB), `?rum=kallare` 39,0 kB, `?rum=fonster` 38,5 kB, 0 script-taggar utöver JSON-LD. Antagandetabellens cellklasser står nu en gång på `<table>` (`TABELL_KLASS`, som badrum-kostnad), med samma utseende. 375 px renderat i en 375 px bred ram: ingen sidledsscroll, fönstrets två fält och resultatspalten ryms. Canonical på `?rum=fonster` är `/rakna/daggpunkt/`.

Godkänd av UX och bygge för koden. Sidan publiceras inte förrän texterna i `texter-daggpunkt-rum-2026-09-30.md` är skrivna och `npm run build` är grönt.

Förvalsadresser för sidorna i omgång A och B:

| Rum | Länk | Inbäddning |
|---|---|---|
| Fönster (sovrummets fönster vintertid, 21 °C, 45 %, U 3,0, minus 5 ute) | `/rakna/daggpunkt/?rum=fonster` | `<Kalkylator namn="daggpunkt" forval="rum=fonster" />` |
| Sovrum | `/rakna/daggpunkt/?rum=sovrum` | `forval="rum=sovrum"` |
| Källare | `/rakna/daggpunkt/?rum=kallare` | `forval="rum=kallare"` |
| Krypgrund | `/rakna/daggpunkt/?rum=krypgrund` | `forval="rum=krypgrund"` |
| Garage, förråd, uthus | `/rakna/daggpunkt/?rum=garage` | `forval="rum=garage"` |
| Badrum, kallvind | finns inte, tal saknas (avsnitt 9) | – |

`<Verktygskort>` tar inget förval; en förvalslänk skrivs som vanlig länk i löptext. Förvalet kan kombineras med tal, till exempel `forval="rum=fonster&ute=-10"`.
