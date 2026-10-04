# Startlista 6, omgång D, fukt: ordning, länkar och gränser, 2026-10-04

Omgång D i startlista 6 (`docs/SOKORDSANALYS.md` 12.7), **publiceras senast 31 januari**, och omgången publiceras samlad. Den består av fem sidor och har inget nytt verktyg. Badrummet och tvättstugan toppar i september och oktober och ska vara indexerade långt före hösten 2027. Checklistorna per sida ligger i samma mapp:

| # | Fil | Adress | Sidtyp | Volym | Vinn | Väntar på |
|---|---|---|---|---|---|---|
| D1 | `svartmogel-badrum.md` | `/fukt/svartmogel-badrum/` | problemguide | 3 270 | 4 | frånluftskravet (delas med D2) |
| D2 | `badrumsflakt.md` | `/fukt/badrumsflakt/` | köpguide med kort | 6 920 | 2 på ordet | affiliate A1 till A5 |
| D3 | `sjalvdrag.md` | `/fukt/sjalvdrag/` | kunskap | 6 360 | 4; spaltventil och ftx 2 | faktablad |
| D4 | `avfuktare-tvattstuga.md` | `/fukt/avfuktare-tvattstuga/` | köpguide med kort | 1 660 | 4 | affiliate B1 till B3 |
| D5 | `torpargrund.md` | `/fukt/torpargrund/` | problemguide | 370 | 4 | faktablad |

Summa 18 580 i månaden. Underlaget är SERP-läsningen 2026-09-30 för D1, D2 och D4 (SOKORDSANALYS 12.3) och 2026-10-04 för D3 och D5 (block E och F). Sökverktyget svarar från USA. Title räknas utan suffix.

## 1. Ordningen inom omgången

1. **D1 svartmögel i badrummet** skrivs först. Checklistan är klar, och hantverkaren har påbörjat faktabladet. Sidan bygger på mögelbladet från omgång C.
2. **Frånluften i badrummet, samma besked på tre sidor (rättat 2026-10-04):** det finns inget krav per rum i dag. D3:s faktablad (S6, S20, S42) visar att talen per rum var allmänna råd 1994 till 2006 och är borttagna. D1, D2 och D3 säger detsamma. Affiliate A1 bekräftar läget och lägger S20 och S42 i `fukt-gemensamma-tal.md` som T-nummer.
3. **D3 självdrag och D5 torpargrund** skrivs parallellt när deras faktablad finns. Inget av dem väntar på affiliate.
4. **D2 badrumsfläkten och D4 tvättstugan** skrivs när affiliate har levererat. Texten utan korten kan påbörjas före.
5. Publicering sker samlat när alla fem är godkända.

## 2. Länkar som ska läggas när omgången publiceras

En länk till ett utkast stoppar bygget, så inlänkarna läggs i samma commit som `utkast: false`. Varje ny sida ska ha minst två inlänkar från innehållsfiler. Radnumren är lästa 2026-10-04; sök på citatet om raden har flyttat. **Länkar i Faq-svar fungerar inte** (svaren är ren text), så alla länkar nedan står i brödtext.

| Fil | Var | Länk till | Ankare, förslag |
|---|---|---|---|
| `src/content/kunskap/fukt/svartmogel.mdx` | H2 "Ta bort svartmögel från trä, tapet och fogar", rad 122: "I badrummet kan det räcka att städa och vädra oftare" | `/fukt/svartmogel-badrum/` | "I badrummet" eller "svartmögel i badrummet" |
| `src/content/kunskap/fukt/svartmogel.mdx` | samma stycke: "Mycket påväxt kan betyda att ventilationen behöver ses över" | `/fukt/badrumsflakt/` | "ventilationen" |
| `src/content/guider/fukt/mogel-i-huset.mdx` | H2 "Var möglet brukar sitta", badrumsraden i tabellen (rad 93). Kolumnen "Mer om platsen" länkar i dag till `/badrum/fogar-badrum/`. Byt målet, eftersom de andra raderna länkar till platssidan och fogsidan redan har sin inlänk från svartmögelsidan rad 122 | `/fukt/svartmogel-badrum/` i stället för fogsidan | "fogen eller fukten bakom kaklet" |
| `src/content/guider/fukt/mogellukt.mdx` | H2 med lukttabellen, badrumsraden: "Instängt och fuktigt i badrummet" | `/fukt/svartmogel-badrum/` | i kolumnen "Så kontrollerar du" |
| `src/content/guider/badrum/fogar-badrum.mdx` | H2 "Mögel på fogen eller fukt i väggen", som byter namn och kortas enligt avsnitt 3 | `/fukt/svartmogel-badrum/` | "om möglet sitter i fogen eller i väggen" |
| `src/content/kunskap/fukt/luftfuktighet-inomhus.mdx` | rad 159, H2 "Normal luftfuktighet inomhus, rum för rum": "det är frånluftens jobb att ta topparna" | `/fukt/badrumsflakt/` | "frånluftens jobb" |
| `src/content/guider/fukt/kallras.mdx` | rad 128, H2 "Låt ventilen ovanför fönstret vara öppen": "Ordet kallrasskydd betyder något annat" | `/fukt/badrumsflakt/` | "kallrasskydd" |
| `src/content/guider/fukt/kallras.mdx` | samma H2, om ventilen ovanför fönstret | `/fukt/sjalvdrag/` | "ventilen ovanför fönstret" (bara en länk per mening; kallrasskyddet står i ett eget stycke) |
| `src/content/guider/fukt/kondens-pa-fonster.mdx` | rad 149: "ett hus med självdragsventilation" | `/fukt/sjalvdrag/` | "självdragsventilation" |
| `src/content/guider/fukt/fukt-pa-vinden.mdx` | rad 88, H2 "Kondens på vinden kommer från tre håll": "Hus med självdrag" | `/fukt/sjalvdrag/` | "Hus med självdrag" |
| `src/content/guider/grund/inreda-kallare.mdx` | rad 176, H2 "Ett rum under mark behöver fläkt": "Självdrag räcker sällan i en källare" | `/fukt/sjalvdrag/` | "Självdrag" |
| `src/content/guider/fukt/avfuktare-krypgrund.mdx` | rad 83: "en avfuktare som gör nytta i tvättstugan" | `/fukt/avfuktare-tvattstuga/` | "en avfuktare som gör nytta i tvättstugan" |
| `src/content/kategorier/luftavfuktare.md` | Så väljer du, där tvätten eller tvättstugan nämns | `/fukt/avfuktare-tvattstuga/` | "avfuktare i tvättstugan" |
| `src/pages/rakna/elkostnad.astro` | tvättlägets text | `/fukt/avfuktare-tvattstuga/` | UX väljer ankaret (räknas inte som innehållsfil men ska finnas) |
| `src/content/guider/fukt/avfuktare-krypgrund.mdx` | en H2 om grunden, till exempel "Därför är grunden blötast mitt i sommaren" | `/fukt/torpargrund/` | "torpargrund" (beslut i 12.4) |
| `src/content/guider/fukt/fukt-i-krypgrund.mdx` | H2 "Varm sommarluft blir vatten i en kall grund" | `/fukt/torpargrund/` | "torpargrund" eller "en äldre torpargrund" |
| `src/content/guider/grund/isolera-krypgrund.mdx` | H2 "Uteluftsventilerad krypgrund eller varmgrund" | `/fukt/torpargrund/` | "torpargrund" |

Länkarna mellan omgångens egna sidor står i varje checklista under punkt 9.

## 3. Kannibaliseringsgränser

**Mot `/badrum/fogar-badrum/`** (äger "mögel i fogarna i duschen" 170, "mögel i fogar badrum" 70, "svartmögel i fogar" 40, fogmassa, rengöring och fogbyte, och kemikalievarningen):

- D1 har diagnosen (fog, ventilation, fukt bakom), beslutet och en länk. Den har inga steg för tvätt eller byte och ingen H2 som heter "Mögel i fogarna".
- **Beslut 2026-10-04: D1:s title står kvar, och fogsidans avsnitt kortas.** Fogsidans H2 "Mögel på fogen eller fukt i väggen" är D1 i liten skala och ligger för nära D1:s title ("Svartmögel i badrummet, fogen eller fukten"). Det är D1 som äger frågan fog eller fukt, eftersom det är D1:s huvudfras (1 900) och avsikten. Fogsidan äger fogen. Vid publiceringen av D:
  - Fogsidans H2 byter namn till en rubrik om fogen, till exempel "När möglet kommer tillbaka på fogen". Rubriken får inte innehålla "fukt i väggen".
  - Första stycket står kvar. Det säger att mögel som kommer tillbaka på en gammal fog betyder att fogen är slut.
  - Stycket om fukt i väggen kortas till en eller två meningar. Det slutar i länken till D1 med ankaret "om möglet sitter i fogen eller i väggen". Länken till tätskiktssidan står kvar.
  - Fogsidans seoTitle "Fogar i badrum med mögel, tvätta eller byta" ändras inte.
  Hantverkaren som lägger inlänkarna gör ändringen i samma commit.
- D1:s title börjar med "Svartmögel i badrummet" och fogsidans med "Fogar i badrum med mögel".

**Mot `/badrum/tatskikt-badrum/`:** tätskiktet och reglerna stannar där. D1 och D2 länkar dit. "fuktskada badrum" (210) får ingen H2 i omgången och väntar på en egen sida i Badrum (12.4, Utanför planen).

**Mellan D1 och D2:** D1 äger svartmögel badrum, mögel badrum och svartmögel i duschen. D2 äger badrumsfläkt, ventilation badrum, luftfuktighet badrum, avfuktare badrum och kallrasskydd. D1 anger frånluftskravet i en mening och länkar till D2.

**Mot `/fukt/kallras/`:** kallras vid fönster stannar där. "kallrasskydd" (880) ägs av D2, och kallrassidan har redan stycket om skillnaden.

**Mellan D2 och D3:** fläkten i badrummet ägs av D2. Systemen för hela huset (självdrag, frånluft, frånluftsvärmepump, FTX, spaltventil) ägs av D3.

**Mot `/fukt/fukt-pa-vinden/`** (äger "ventilation på vinden" 260): D3 nämner självdraget och vinden med länk och har ingen H2 om vinden.

**Mot krypgrundssidorna:**

- `/fukt/fukt-i-krypgrund/` äger fukt i krypgrund, gränserna, åtgärderna, besiktningen och försäkringen.
- `/fukt/avfuktare-krypgrund/` äger maskinvalet och korten.
- `/grund/isolera-krypgrund/` äger isoleringen och "uteluftsventilerad krypgrund" (90).
- D5 äger torpargrund fukt, avfuktare torpargrund, ventilera torpargrund och krypgrund vs torpargrund. Den har inga kort och skriver om gränserna bara det som skiljer torpargrunden, med länk för resten.

**Mot avfuktarsidorna:**

- D4 äger tvätten, torkrummet och "avfuktare eller torktumlare".
- "hur stor avfuktare" ägs av `/rakna/avfuktare/`, "avfuktare källare" av köpguiden för källaren och det nakna ordet "avfuktare" av `/luftavfuktare/`.
- D4:s title börjar med "Avfuktare i tvättstugan" (12.8).

**Mot omgång C:** arten och "svartmögel farligt" ägs av `/fukt/svartmogel/`, symptomen och mögeltestet av `/fukt/mogel-i-huset/` och lukten av `/fukt/mogellukt/`. D1 har ett stycke om hälsan med länk.

## 4. Vad var och en behöver veta

### Hantverkaren

- **D1:s kärna** är Folkhälsomyndighetens besked om svarta prickar i badrummet (mögelbladet avsnitt 5.4, ordagrant). Badrumsmögel beror sällan på ett byggfel. Lite påväxt tar man med städning och vädring, och mycket påväxt pekar på ventilationen.
- **D3:s kärna** är det tätare huset utan tilluft. Kraven har rätt beteckning (T43, T46). Polarpumpens "0,35 liter per kvadratmeter" och Aerius 0,4 l/s rättas i sak och utan namn.
- **D5** redovisar oenigheten mellan källorna om vad en torpargrund är. Fuktcentrum LTH bär sommarbeskedet.
- **D4:** Energimyndighetens test (0,23 mot 0,32 kWh per kg, 2017) och tvättläget i elkostnaden är sidans grund. Butikernas inställda luftfuktighet står inte utan källa.
- **Hälsan på D1** kommer bara från Folkhälsomyndigheten och 1177, med länk till omgång C.
- **Ingen sida** säger test, testad eller mätt om något vi gjort.
- **Platsfältet:** D1, D2 och D4 får `plats: badrum`, D3 `plats: luften` och D5 `plats: krypgrund`.

### Affiliate

- **D2:** A1 frånluftskravet (delas med D1), A2 tryck- och flödeskurvor och EAN, A3 urval och kort efter flöde mot kanaltryck, A4 kategorin `badrumsflakt` med nycklarna i affiliatebeslutet avsnitt 5, A5 lagrummet för fast elanslutning med Elsäkerhetsverket.
- **D4:** B1 urval ur `luftavfuktare` efter tvättstugans temperatur, med svaret om Wood's, B2 effekt i W per kort för elkostnadens förval, B3 torkläge om det finns.
- **D1, D3 och D5:** inga produkter, inga kort och inget reklamband. Spaltventilen på D3 nämns med datablad men får ingen köpknapp. Avfuktaren på D5 länkar till köpguiden för krypgrund.

### UX och bygge

- **Fyra skisser rekommenderas:** badrummet i genomskärning (D1), fläkten med kanal och kallrasskydd (D2), självdragshuset sommar mot vinter (D3) och torpet med kallmur och givaren genom ventilen (D5). D4:s torkrum är valfritt.
- **Ingen ny räknare.** D2 får en tabell över flödena (12.6).
- D4 länkar till `/rakna/elkostnad/` i tvättläget med förvalet ifyllt. Affiliates B2 behövs om tvättläget ska få en rad för en namngiven maskin.
- D5 länkar till daggpunkten och fuktkvoten med `rum=krypgrund`.
- **Kategorin `badrumsflakt`** finns bara i databasen och har ingen kategorisida.

## 5. Efter publiceringen

- Dag 10 i indexeringsplanen (SOKORDSANALYS avsnitt 10) begärs av Christian i den här ordningen: `/fukt/badrumsflakt/`, `/fukt/sjalvdrag/`, `/fukt/svartmogel-badrum/`, `/fukt/avfuktare-tvattstuga/`, `/fukt/torpargrund/` och `/fukt/` (begärs om).
- En månad efter publiceringen frågas en AI om "badrumsfläkt krav", "självdrag" och "svartmögel badrum", och svaret antecknas i 12.7.

## 6. Beslut och villkor för publicering, 2026-10-04

### Samma regelbesked på D1, D2 och D3

`/fukt/badrumsflakt/` (D2) äger "ventilation badrum regler" och hela regelhistorien. D1 och D3 säger samma sak kort och länkar till D2.

- **D1 kortas vid publiceringen.** Den långa regelversionen blir en eller två meningar:
  - det finns inget krav per rum i dag
  - fläkten bör klara 10 l/s med fönster och 15 utan
  - länk till D2 med ankaret "hur mycket luft badrummet ska ha ut"

  "Minst 15" för alla badrum stryks, eftersom det motsäger D2. Branschens förslag om 15 nämns bara på D2.
- **D3, `sjalvdrag.mdx` runt rad 102:** "10 i köket och 15 i badrummet" rättas mot T58 och T59 (10 med fönster, 15 utan). Det är redan beställt av koordinatorn.

### Villkor för att publicera D1 till D5 i en commit

1. **D1 är kontrollerad av SEO och GEO** mot `svartmogel-badrum.md` innan den sätts till `utkast: false`. Den kontrollen återstår.
2. **Rättelserna från kontrollerna är gjorda:**
   - **D1:** regelstycket kortat enligt ovan.
   - **D3:** källan i kortSvar, källan för 84 procent på rad 90, och rad 102 enligt T58 och T59.
   - **D4:** Energimyndigheten i description.
   - **D5:** Fuktcentrum i sommaravsnittet och i ventilationsavsnittet.
3. **Alla kommentarer om länkar är ersatta med länkar:**
   - D2 till D1 och D3
   - D3 till D2
   - D4 till D2 och D3
   - D1:s länkar till D2 och fogsidan
4. **Alla inlänkar i avsnitt 2 ligger i samma commit:**
   - fogsidans H2 har bytt namn och är kortad enligt avsnitt 3
   - badrumsradens länk i mögel i huset går till D1
   - inga länkar står i Faq-svar
5. **Produkterna finns:**
   - D2:s två Fresh-fläktar och D4:s tre avfuktare finns i databasen som bygget läser.
   - Priser och lager är lästa samma dag som publiceringen.
   - Korten visar sina fakta. UX har avgjort hur det sker för D2.
6. **`utkast: false` på alla fem samtidigt.**
7. **Kontroll och bygge:**
   - `npm run kontrollera` ger 0 fel.
   - `npm run build` är grönt i ren kopia.
   - Budgeten är grön.

   Inget pushas före det.
8. **Skisserna stoppar inte publiceringen.** En sida utan bild har inget `bildAlt`. Kommer bilden senare får den sitt alt enligt checklistan.
9. **Efter publiceringen** för SEO och GEO in dag 10 i SOKORDSANALYS avsnitt 10 och status D i 12.7.
