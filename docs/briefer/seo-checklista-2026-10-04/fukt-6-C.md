# Startlista 6, omgång C, fukt: ordning, länkar och gränser, 2026-10-04

Omgång C i startlista 6 (`docs/SOKORDSANALYS.md` 12.7), **publiceras senast 20 december**. Sex adresser, en räknare och fem sidor. Den här filen säger i vilken ordning de görs, vilka länkar som ska läggas, var gränserna mellan sidorna går, och vad hantverkaren, affiliate och UX behöver veta. Checklistorna per sida ligger i samma mapp:

| # | Fil | Adress | Sidtyp | Volym | Vinn |
|---|---|---|---|---|---|
| C0 | `raknare-fuktkvot.md` | `/rakna/fuktkvot/` | räknare, ny | ingen data (räknaren lever på inlänkar och delade adresser) | 4 |
| C1 | `fuktmatare.md` | `/fuktmatare/` | kategorisida, granskning på datablad | 8 430 | 3; 4 på trä |
| C2 | `fuktkvot.md` | `/fukt/fuktkvot/` | kunskap | 210 | 4 |
| C3 | `svartmogel.md` | `/fukt/svartmogel/` | kunskap, YMYL | 5 880 | 3 |
| C4 | `mogel-i-huset.md` | `/fukt/mogel-i-huset/` | problemguide, YMYL | 2 390 | 3 |
| C5 | `mogellukt.md` | `/fukt/mogellukt/` | problemguide | 750 | 4 |

Underlaget är underlagsarbetarens SERP-läsning 2026-10-04 för C0, C2, C4 och C5 (block A till D nedan i checklistorna), läsningen 2026-09-30 för svartmögel (SOKORDSANALYS 12.3) och körning 2 för fuktmätare (7.2, 7.5). Sökverktyget svarar från USA, så ordningen mellan plats ett och fem är osäker. Title räknas utan suffix i alla checklistor.

## 1. Ordningen inom omgången

Omgången publiceras ihop, men den skrivs i den här ordningen, eftersom sidorna bygger på varandra:

1. **Faktablad först, två stycken.** Underlagsarbetaren tar fram (a) **räknarunderlaget för fuktkvoten** (krav i `raknare-fuktkvot.md` punkt 5) och (b) **ett gemensamt faktablad för mögel**, `docs/briefer/faktablad/fukt-mogel-gemensamt.md`, som C3, C4 och C5 alla bygger på (krav i respektive checklista punkt 11). Mögelsidorna får inte skriva ett hälsopåstående som inte står i det bladet. Fuktkvot och fuktmätare använder `fukt-gemensamma-tal.md` avsnitt 4 och affiliatebeslutet.
2. **C0 räknaren.** Formel, test och spec före allt annat (skillen `nytt-verktyg`). C2 bäddar in den och C1 länkar till den.
3. **C2 fuktkvoten och C1 fuktmätaren, parallellt.** De länkar till varandra. C1 kräver att fröet `supabase/seed-produkter-fuktmatare-2026-10.sql` är inläst i databasen som bygget läser; annars blir tabellen och ItemList tomma, och sidan publiceras inte.
4. **C3 svartmögel.** Den största frasen i omgången (4 400, topp september och oktober). Arten och om den är farlig.
5. **C4 mögel i huset.** Symptomen, testet, saneringen och var man letar. Länkar till C3 och C5.
6. **C5 mögellukt.** Diagnosen per lukt. Länkar till C4 och till platssidorna.

Svartmögel toppar i september och oktober. Det är för sent för i år, men sidorna ska vara indexerade långt före september 2027, och det är därför de inte kan vänta till våren.

## 2. Länkar som ska läggas när omgången publiceras

En länk till ett utkast stoppar bygget, så de här läggs i samma commit som `utkast: false`, eller senast en vecka efter. Varje ny sida ska ha minst två inlänkar från innehållsfiler. Radnumren är lästa 2026-10-04; sök på citatet om raden har flyttat.

### Väntande länkar från omgång A och B (12.7, status 2026-09-30)

| Fil | Var | Länk till | Ankare, förslag |
|---|---|---|---|
| `src/content/kunskap/fukt/hygrometer.mdx` | rad 139, H2 "Vilken hygrometer som passar var i huset": "behöver du en fuktmätare för trä" | `/fuktmatare/` | "en fuktmätare för trä" |
| `src/content/kunskap/fukt/hussvamp.mdx` | rad 142, H2 "Svampen kom för att träet har varit blött länge": "Fuktkvoten, det tal som en fuktkvotsmätare visar" | `/fukt/fuktkvot/` | "Fuktkvoten" eller "gränserna för fuktkvot" |
| `src/content/kunskap/fukt/hussvamp.mdx` | rad 153, samma H2: "når träet ungefär 23 procent fuktkvot när luften … runt 92 procent" | `/rakna/fuktkvot/` | "räkna ut vilken fuktkvot träet får i din krypgrund" |
| `src/content/kunskap/fukt/luftfuktighet-inomhus.mdx` | rad 240, H2 "Snickarens gräns för virke, betong, färg och gips": "Trä mäts i fuktkvot" | `/fukt/fuktkvot/` | "fuktkvot" eller "vad fuktkvoten betyder för virket" |

Hussvampens länk till `/fuktmatare/` (rad 142, "fuktkvotsmätare") är valfri; samma stycke får fuktkvoten, och två länkar i samma mening ska undvikas.

### Nya inlänkar till omgång C

| Fil | Var | Länk till | Ankare, förslag |
|---|---|---|---|
| `src/content/guider/fukt/fukt-i-krypgrund.mdx` | rad 119, H2 "Mät fukten i krypgrunden själv": "Fuktmätaren för träet i krypgrunden kallas fuktkvotsmätare" | `/fuktmatare/` | "fuktkvotsmätare" |
| `src/content/guider/fukt/fukt-i-krypgrund.mdx` | rad 138, H2 "Gränsvärden för mögel i krypgrunden": "runt 15 procent fuktkvot i träet" | `/rakna/fuktkvot/` eller `/fukt/fuktkvot/` | hantverkaren väljer en; räknaren om meningen handlar om luftens RF mot träets fuktkvot |
| `src/content/guider/fukt/fukt-i-krypgrund.mdx` | rad 86, H2 "Tecken på fukt och mögel i krypgrunden": "Lukten märks ofta före allt annat" | `/fukt/mogellukt/` | "vad lukten säger om var fukten sitter" |
| `src/content/guider/fukt/fukt-i-krypgrund.mdx` | Faq rad 209, "Är mögel i krypgrunden farligt för hälsan?" | `/fukt/mogel-i-huset/` | "symptomen och när du ska söka vård" (bara om Faq-svaret får länkar; annars stycket ovan) |
| `src/content/guider/fukt/fukt-pa-vinden.mdx` | rad 118, H2 "Hygrometern och fuktkvotsmätaren visar hur fuktig vinden är": "Fuktkvotsmätaren har två stift" | `/fuktmatare/` | "Fuktkvotsmätaren" |
| `src/content/guider/fukt/fukt-pa-vinden.mdx` | rad 80, H2 "Tecknen syns på undersidan av yttertaket": "det luktar unket på vinden och ibland nere i huset" | `/fukt/mogellukt/` | "luktar unket" |
| `src/content/guider/fukt/fukt-pa-vinden.mdx` | rad 163, H2 "Fukt på vinden i besiktningsprotokollet": "Mät fuktkvoten i råsponten i stället" | `/fukt/fuktkvot/` | "Mät fuktkvoten" |
| `src/content/guider/fukt/fukt-i-kallaren.mdx` | rad 176, H2 "Lukt i källaren kommer före fläcken": "Svart påväxt över stora ytor sanerar du inte själv" | `/fukt/svartmogel/` | "Svart påväxt" |
| `src/content/guider/fukt/fukt-i-kallaren.mdx` | rad 171, samma H2: "inga hälsobaserade riktvärden för mikrobiella exponeringar" | `/fukt/mogel-i-huset/` | "vad mögel i huset gör med hälsan" |
| `src/content/kunskap/fukt/luftfuktighet-inomhus.mdx` | rad 123, H2 "Vid daggpunkten blir den kallaste ytan våt": "Mögel kan börja växa på trä" | `/fukt/svartmogel/` | "Mögel" eller "mögel på trä" |

Krav: varje ny sida får minst två av raderna ovan. Räknarens inlänkar räknas från innehållsfiler, inte från C2:s inbäddning (C2 bäddar in och länkar dessutom). Sidfoten och `/rakna/` räknas inte.

## 3. Kannibaliseringsgränser

Ingen av de sex delar de tre första orden i title med en befintlig sida eller med varandra, om förslagen i checklistorna följs. Gränserna i sak:

**Mot `/fukt/hussvamp/`** (äger äkta hussvamp, rötsvamp, hussvamp krypgrund, fuktkvot syll):

- `/fukt/fuktkvot/` har rötgränserna (under 20, över 30 procent, TräGuiden) i sin tabell men inte arten, igenkänningen eller försäkringen. Hussvampens egna tal (Botaniska Analysgruppen, 23 till 26 procent för nytt angrepp) står bara på hussvampssidan. En mening med länk.
- `/fukt/svartmogel/` skiljer mögel från röta i en mening ("mögel sitter på ytan, röta bryter ner träet") med länk. Ingen tabell över rötsvampar; jämförelsetabellen finns redan på hussvampssidan.
- `/fukt/mogellukt/` har champinjonlukten som en rad i lukttabellen med länk till hussvampen. Ingen H2 om hussvamp.
- `/fukt/mogel-i-huset/` nämner röta och hussvamp under "var du letar" med länk, ingen H2.

**Mot `/fukt/fukt-i-krypgrund/`** (äger mögel i krypgrund 110, krypgrund lukt, mögelsanering krypgrund, fuktmätare och fuktkvot krypgrund, krypgrund besiktning):

- Ingen av de nya sidorna har en H2 om krypgrunden. Krypgrunden är en rad i "var du letar" (C4), en rad i lukttabellen (C5) och ett förval i räknaren (C0), varje gång med länk till krypgrundssidan.
- `/fuktmatare/` nämner krypgrunden i valet "kalla utrymmen" och länkar dit; gränsvärdena för krypgrunden står inte på kategorisidan.
- `/fukt/fuktkvot/` får ha en rad "krypgrund och kallvind" i jämviktstabellen men inga åtgärder.

**Mellan omgångens sidor:**

- **`/fukt/svartmogel/`** äger arten, svartmögel farligt, vitmögel och ättikan. Den svarar på "är det farligt" med myndighetens besked i ett stycke och länkar till C4 för symptomen. Ingen symptomlista.
- **`/fukt/mogel-i-huset/`** äger symptomen, mögeltestet, saneringen, mögelhunden, besiktningen, försäkringen och hyresrätten. Ingen H2 om arterna.
- **`/fukt/mogellukt/`** äger lukten, alla "luktar …"-fraser utom de platsbundna, och luktsaneringen. Mögeltestet nämns med länk till C4.
- **`/fukt/fuktkvot/`** äger gränserna, begreppet och mätmetoden (tre mätningar, ytfuktkvot). **`/fuktmatare/`** äger valet av instrument och temperaturkorrigeringen i instrumentet. **`/rakna/fuktkvot/`** äger räkningen (vikt, jämvikt, fukthalt). Registret 12.6 gav räknaren "fuktkvot trä"; det rättas här: **kunskapssidan äger "fuktkvot trä"**, räknaren "räkna ut fuktkvot", "fuktkvot formel" och "jämviktsfuktkvot".

**Mot sidor som kommer senare:** `/fukt/svartmogel-badrum/` (D1) äger badrummet och duschen; ingen av C-sidorna har en H2 om badrummet, och `/fukt/svartmogel/` börjar inte med "Svartmögel i". `/fukt/mogel-pa-vinden/` (E2) äger mögelsanering vind och råsponten. `/fukt/vattenskada/` (E4) äger torkningen efter läckan; "mögel efter vattenskada" (10) står på C4 som en mening. `/fukt/fuktmatning-betong/` (E5) äger RF i betong; `/fuktmatare/` säger att betong mäts med RF-givare i borrhål och att den sidan kommer, utan länk tills den finns. `/fukt/radon/` äger "radon lukt" (50); C5 skriver bara att radon inte luktar, med länk.

**Platssidorna behåller sina mögel- och luktfraser:** mögel i källaren och mögellukt i källare (`/fukt/fukt-i-kallaren/`), mögel i fönsterkarmen (`/fukt/kondens-pa-fonster/`), mögel garage och unken lukt i sommarstuga (`/fukt/avfuktare-garage/`), luktar mögel i badrum (D1).

## 4. Tjänsterna och företagen

Anticimex, Ocab och Polygon (och de andra saneringsföretagen i SERP:en) äger servicefraserna. De får inga egna sidor hos oss, och de nämns aldrig med länk i brödtext. Tjänsterna blir avsnitt: mögelsanering (410), mögelhund (170), mögelbesiktning (90) och mögeltest (740) på C4, luktsanering (90) på C5. Varje avsnitt har tre saker: vad det kostar med källa och datum, när det behövs, och vad läsaren kontrollerar själv först. Priser ur en firmas prislista står i `kallor` och i texten som firmans uppgift, aldrig som sajtens. Anticimex statistik över lukt (18 procent av 26 466 besiktade bostäder, 2024) får citeras som Anticimex uppgift med år.

## 5. Vad var och en behöver veta

### Hantverkaren

- **Mögel är YMYL.** Hälsa bara ur Folkhälsomyndigheten, 1177, Boverket och Arbetsmiljöverket, med datum. Det som står i SERP:en om cancer, foster, minnesförlust och neurologi upprepas inte, inte ens för att avfärdas med namn på en firma. Säger ingen myndighet något, står ingenting.
- **Det viktigaste beskedet i omgången** är Folkhälsomyndighetens att provtagning av mikroorganismer inte mäter hälsorisken, och att synlig påväxt eller mikrobiell lukt räcker som underlag för att leta fuktkällan (UTDRAG i SERP-läsningen; läses ordagrant i faktabladet). Ingen i topp 9 har det. Det bär både C4 och C5.
- **Fuktkvoten:** sidorna i SERP:en ger mögelgränsen som 16, 17, 17–18, 17–20 och 18 procent och rötgränsen som 18–20, 24 och 24–25, alla utan källa. Vår gräns är TräGuidens, och mögel avgörs av ytfuktkvoten och luftens RF över tid. Den källösa "Boverket 15 procent" (storhognatrahus.se) är fel: Boverkets regel (BFS 2024:8 7 kap. 1 §) uttrycks i RF och gäller byggnadsdelar. Det får stå i sak utan att konkurrenten nämns.
- **Ved:** veden anges ofta som fukthalt, mätaren visar fuktkvot. Faktabladet ger myndighetens gräns för ved och omräkningen.
- **Ingen mätning är vår.** Christian har inga instrument och köper inga. "Jag har mätt", "testad" och "test" om något vi gjort står inte på någon av sidorna.
- `plats: hela-huset` på C2 till C5.

### Affiliate

- **C3, C4, C5 och C2:** inga produktkort, ingen köpknapp, inga annonslänkar, inget reklamband (villkor 1 i affiliatebeslutet 2026-09-30 för mögelsidorna; för fuktkvoten mitt förslag, eftersom kategorisidan ligger en länk bort). Säg till om C2 ska få undantaget "en produkt per typ, sist".
- **Mögeltest:** inga kort och inga annonslänkar, eftersom sidan säger att testet sällan behövs. Testpriser hämtas från laboratoriernas prislistor, inte från butiker (butiksdomäner varnas i `kallor`).
- **C1:** fröet ska köras före publicering, och priser och lager läses om samma dag. Etiketterna i `val` får inte innehålla test, mätt, bäst i test, budget eller premium. "fuktmätare bäst i test" (210) och "fuktmätare test" (90) står i klartext som det sidan inte är.

### UX och bygge

- **C0** byggs i sex steg enligt `nytt-verktyg` och räknarmallen 4.7.0. Förvalen använder **samma `rum=`-värden som daggpunkten** (`kallare`, `krypgrund`, `vind`, `garage`, `sovrum`) plus `arstid`, så att en platssida kan länka båda räknarna med samma adressdel. Elkostnadens `plats=` rörs inte. Registret: `pelare: ['fukt']`, `sasong` september och oktober (ved). `fuktkvot` läggs i `MED_FORMULAR` så att C2 kan bädda in.
- **C1:** ny rotslug `fuktmatare` (godkänd), samlingen `kategorier`, 15 spec-nycklar utan `bast`. Hubben listar den under Välj rätt och under Hela huset.
- **Skisser** där de hjälper läsaren: C2 (var på brädan du mäter), C4 (var i huset möglet brukar sitta). C3 och C5 bär tabeller i stället; ingen skiss är krav där.
- **C3 till C5:** `Article`, `BreadcrumbList` och `FAQPage` bara med synlig Faq.

## 6. Efter publiceringen

Begär indexering i Search Console på `/fuktmatare/` och `/fukt/svartmogel/` när Christian ber om det; resten följer via sitemapen. Fråga en AI om "svartmögel farligt", "mögeltest" och "fuktkvot trä" en månad efter publicering och anteckna i SOKORDSANALYS 12.7 om sajten nämns.
