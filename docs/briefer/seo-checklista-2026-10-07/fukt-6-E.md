# Startlista 6, omgång E, fukt: ordning, länkar och gränser, 2026-10-07

Omgång E i startlista 6 (`docs/SOKORDSANALYS.md` 12.7), **publiceras senast 28 februari**, som en samlad omgång. Fem sidor, inget nytt verktyg. Vårbenet: radonsugen och mögel på vinden toppar i mars, fuktskadan i april. Checklistorna per sida ligger i samma mapp:

| # | Fil | Adress | Sidtyp | Volym | Vinn | Väntar på |
|---|---|---|---|---|---|---|
| E1 | `radonsug.md` | `/fukt/radonsug/` | kunskap | 1 150 | 4 | affiliate R1 (radonmätarkort), underlag R2 (fläktens effekt) |
| E2 | `mogel-pa-vinden.md` | `/fukt/mogel-pa-vinden/` | problemguide | 460 | 4 | faktablad |
| E3 | `fuktskada.md` | `/fukt/fuktskada/` | kunskap | 1 600 | 3 | faktabladet är klart |
| E4 | `vattenskada.md` | `/fukt/vattenskada/` | kunskap | 960 | 4 | faktablad; affiliate bekräftar att sidan inte har kort |
| E5 | `fuktmatning-betong.md` | `/fukt/fuktmatning-betong/` | kunskap, expert | 1 020 | 4 | affiliate B1 (kort för RF-givare) |

Summa 5 190 i månaden. Underlaget för E1 är SERP-läsningen 2026-09-30 (SOKORDSANALYS 12.3), och för E2 till E5 läsningen 2026-10-07 (block G till J). Sökverktyget svarar från USA och gav mest forumtrådar, så ordningen i topp 5 är osäker överallt. Title räknas utan suffix.

## 1. Ordningen inom omgången

1. **E1 radonsug** skrivs först. Checklistan är klar, och faktabladet är påbörjat. H2:erna om elen och kontrollen skrivs klart när R1 och R2 finns.
2. **E3 fuktskada och E4 vattenskada** skrivs parallellt, eftersom de delar gränsen. Båda använder Boverkets mening ordagrant: "En vattenskada innebär att det blivit så blött att fuktskador kan uppstå." Försäkringsvillkoren hämtas en gång för båda, för samma fyra bolag och med samma datum som i omgång C och D.
3. **E2 mögel på vinden** skrivs när faktabladet finns. Den använder mögelbladet från omgång C.
4. **E5 fuktmätning i betong** skrivs när faktabladet finns. Avsnittet om att mäta själv skrivs klart när B1 finns. Talen ska stämmas av mot `/golv/golv-i-kallare/` innan texten godkänns.
5. Publicering samlat när alla fem är godkända.

## 2. Länkar som ska läggas när omgången publiceras

I samma commit som `utkast: false`. Minst två inlänkar per ny sida från innehållsfiler. Radnumren är lästa 2026-10-07; sök på citatet om raden har flyttat. **Länkar i Faq-svar fungerar inte**, så alla står i brödtext.

| Fil | Var | Länk till | Ankare, förslag |
|---|---|---|---|
| `src/content/kunskap/fukt/radon.mdx` | rad 182, H2 "Protokollet visar över 200": "Det skapas med en radonsug, en radonbrunn eller smalrör" | `/fukt/radonsug/` | "en radonsug" |
| `src/content/kunskap/fukt/sjalvdrag.mdx` | rad 137, H2 "Frånluftsfläkt och frånluftsvärmepump": stycket om radon efter bytet till fläkt | `/fukt/radonsug/` | "radon" eller "åtgärden mot markradon" (radonsidans länk "Mät radonet" står kvar) |
| `src/content/guider/fukt/fukt-i-kallaren.mdx` | rad 209, stycket om radon: "Samma otäta betongvägg …" | `/fukt/radonsug/` | "suga ut markluften" eller motsvarande (länken till `/fukt/radon/` står kvar) |
| `src/content/guider/fukt/fukt-pa-vinden.mdx` | rad 84, kommentaren i H2 "Tecknen syns på undersidan av yttertaket" | `/fukt/mogel-pa-vinden/` | i stycket om mögel, till exempel "mögel på råsponten" |
| `src/content/guider/fukt/fukt-pa-vinden.mdx` | H2 "Fukt på vinden i besiktningsprotokollet" | `/fukt/mogel-pa-vinden/` | "sanering" eller "vad saneringen kostar" |
| `src/content/guider/fukt/mogel-i-huset.mdx` | rad 99: "Mögel på vinden kan sitta där i åratal …" | `/fukt/mogel-pa-vinden/` | "Mögel på vinden" |
| `src/content/guider/fukt/avfuktare-vind.mdx` | H2 "Vinden behöver en maskin bara om tätningen inte räcker" | `/fukt/mogel-pa-vinden/` | om mögel som redan finns |
| `src/content/guider/fukt/mogel-i-huset.mdx` | rad 168, H3 "Villaförsäkringen": "Mögel efter ett läckage som försäkringen gäller för …" | `/fukt/vattenskada/` | "ett läckage" |
| `src/content/guider/fukt/svartmogel-badrum.mdx` | rad 91, tabellraden "Fuktfläckar i rummet bredvid …" eller H2 "Vem du ringer" | `/fukt/vattenskada/` | "anmäl skadan" (eller E3 om stycket handlar om långsam skada) |
| `src/content/guider/fukt/svartmogel-badrum.mdx` | rad 90, tabellraden "Blåsor eller missfärgning …" | `/fukt/fuktskada/` | "Låt mäta fukten" |
| `src/content/guider/fukt/fukt-i-krypgrund.mdx` | H2 "Fukt i krypgrunden när du köper hus" | `/fukt/fuktskada/` | "fuktkontroll" eller "dolt fel" |
| `src/content/guider/fukt/kondens-pa-fonster.mdx` | där kondens vid minus 5 grader nämns som indikation | `/fukt/fuktskada/` | "tecken på fuktskada" |
| `src/content/kategorier/luftavfuktare.md` | Så väljer du, om tillfälligt behov | `/fukt/vattenskada/` | "hyra en avfuktare efter en vattenskada" |
| `src/content/kategorier/fuktmatare.md` | rad 122, H2 "Betong mäts med en givare i ett borrhål" | `/fukt/fuktmatning-betong/` | "fukten i ett betonggolv" (meningen om sidorna ordnade efter plats byts) |
| `src/content/guider/golv/golv-i-kallare.mdx` | H2 "Först en fuktmätning i plattan, sedan frågan om den går att lita på" | `/fukt/fuktmatning-betong/` | "RBK-mätning" eller "mätdjupet" |
| `src/content/guider/golv/lagga-klickgolv.mdx` | rad 126: "Fukten i betongen mäts i ett borrhål …" | `/fukt/fuktmatning-betong/` | "mäts i ett borrhål" |

Länkarna mellan omgångens egna sidor står i varje checklista under punkt 9.

## 3. Kannibaliseringsgränser

- **E1 mot `/fukt/radon/`:** radonsidan äger radon, gränsvärdet, hälsan, mätningen, mätarna och kostnaden för mätning. E1 äger åtgärden: sugen, brunnen, smalrör, tätning och ventilation mot radon, saneringen och kontrollen efter. Radonsidans H2 "Protokollet visar över 200" står kvar kort med länk till E1.
- **E2 mot `/fukt/fukt-pa-vinden/`:** fuktsidan äger orsaken, ventilationen, tätningen, besiktningsprotokollet och "köpa hus med mögel på vinden" (30). E2 äger möglet, saneringen, råsponten och kallvindens mögel. Ingen av dem börjar med "Mögel och fukt" (12.8).
- **E2 mot `/fukt/avfuktare-vind/`:** maskinen och korten stannar där.
- **E3 mot E4:** den långsamma skadan (E3) mot den plötsliga (E4). Båda har Boverkets gränsmening och länkar till varandra. E3 äger fuktkontroll, fuktbesiktning, fuktsanering, dolt fel och "fuktskada vägg, golv och tak". E4 äger vattenskada försäkring, hyra avfuktare, uttorkningen, "fuktskada parkett" och "vattenskada golv".
- **E3 och E4 mot omgång C och D:** mögelsaneringen, mögeltestet och mögelhunden ägs av `/fukt/mogel-i-huset/`. Badrummet ägs av D1, tätskiktet av `/badrum/tatskikt-badrum/`. "fuktskada badrum" (210) får fortfarande ingen H2.
- **E5 mot `/golv/golv-i-kallare/`:** golv i källaren äger golvvalet i källaren och tabellen per golvsort. E5 äger mätmetoden (RBK, mätdjup, givare, kalibrering), fuktspärren generellt, byggfukt och fuktsäkerhetsprojektering. E5 har bara de generella gränserna och länkar dit. Inget tal får skilja sig mellan sidorna.
- **E5 mot `/fuktmatare/` och `/fukt/fuktkvot/`:** trä och fuktkvot stannar där. "fuktmätare betong" (390) ägs av E5.

## 4. Vad var och en behöver veta

### Hantverkaren

- **E1:** hälsan och åtgärden bara ur SSM. Referensnivån med SFS 2018:506, aldrig som "Folkhälsomyndighetens rekommendation". Firmornas priser bara som deras uppgift med år.
- **E2:** Folkhälsomyndighetens två meningar ordagrant (antimögelmedel har begränsad effekt, skadat material byts ut). Metodtabellen redovisar oenigheten om hypoklorit.
- **E3 och E4:** Boverkets gränsmening på båda. Konsumentbyråerna är den tyngsta källan för försäkringen. Självrisk och åldersavdrag per bolag eller inte alls. Jordabalkens tidsfrister kontrolleras mot riksdagen.se.
- **E5:** RBK är Rådet för ByggKompetens. Uttaget prov används inte längre i betong. Mätdjupen ur manualen ordagrant. Gränserna stämmer med golv i källaren.
- **Plats:** E1, E3 och E4 får `plats: hela-huset`, E2 `plats: vind` och E5 `plats: krypgrund`.
- **Ingen sida** säger test, testad eller mätt om något vi gjort.

### Affiliate

- **R1 (E1):** kort för en kontinuerlig radonmätare i kontrollavsnittet, eller inget. Bygger på SSM om kontrollmätning och Airthings datablad.
- **B1 (E5):** kort för RF-givare för betong, eller inget. Bara givare som RBK:s manual listar, eller tydligt märkta som indikerande.
- **E4:** bekräfta att sidan inte har kort. Den som vill köpa hänvisas med länk till `/luftavfuktare/`.
- **E2 och E3:** inga produkter och inget reklamband.

### UX och bygge

- **R2:** förval för radonsug i `/rakna/elkostnad/` med effekten ur underlaget.
- **Skisser rekommenderas för alla fem:**
  - E1: radonsugen under plattan
  - E2: råsponten med mögel och röta
  - E3: tecknen per yta
  - E4: köket med läckan
  - E5: plattan med borrhål och mätdjup

  Ingen skiss stoppar publiceringen.
- **Inlänken från elkostnadens tvättläge till D4** (rad B14 i omgång D) står fortfarande kvar hos UX.

## 5. Efter publiceringen

Dag 11 i indexeringsplanen (SOKORDSANALYS avsnitt 10) begärs av Christian i den här ordningen:

1. `/fukt/fuktskada/` (topp i april)
2. `/fukt/radonsug/` (topp i mars)
3. `/fukt/fuktmatning-betong/`
4. `/fukt/vattenskada/`
5. `/fukt/mogel-pa-vinden/`
6. `/fukt/` (begärs om)

En månad efter publiceringen frågas en AI om "radonsug", "fuktskada försäkring" och "fuktmätning betong", och svaret antecknas i 12.7.

## 6. Tillägg 2026-10-07: husköpet och mönstret i title

**Husköpet står på tre sidor, och det ska bli en sida plus två korta stycken.** E3 (`/fukt/fuktskada/`, H2 "När du köper hus är det du som ska hitta fukten") äger undersökningsplikten, dolt fel enligt jordabalken 4 kap. 19 § och fuktkontrollen.

De två platssidorna behåller sina H2, eftersom de äger egna fraser. `/fukt/fukt-i-krypgrund/` äger "köpa hus med fukt i krypgrund" (40) och "krypgrund besiktning" (50). `/fukt/fukt-pa-vinden/` äger "köpa hus med mögel på vinden" (30). Vid publiceringen, i samma commit:

- **`src/content/guider/fukt/fukt-i-krypgrund.mdx`, H2 "Fukt i krypgrunden när du köper hus":** det som gäller alla hus (undersökningsplikten, att felet sällan godtas som dolt) krymper till en mening. Meningen länkar till `/fukt/fuktskada/` med ankaret "undersökningsplikten och dolt fel". Det som gäller krypgrunden står kvar: fuktkvoten i syllen, luckan, stuprören och att Folkhälsomyndigheten kallar krypgrunden en riskkonstruktion.
- **`src/content/guider/fukt/fukt-pa-vinden.mdx`, H2 "Fukt på vinden i besiktningsprotokollet":** det allmänna om försäkringen och långtidspåverkan krymper till en mening. Meningen länkar till `/fukt/fuktskada/` med ankaret "vad försäkringen säger om långsamma skador". Det som gäller vinden står kvar: fläckarna, fuktkvoten i råsponten, frågorna till säljaren och offerten. Kommentaren om länken till E2 på rad 84 ersätts som tabellen ovan säger.

De här två ersätter raden för `fukt-i-krypgrund.mdx` i tabellen i avsnitt 2, och en ny inlänk från fukt-pa-vinden kommer till.

**Mönstret i title och description:** beslutet står i `fuktskada.md`, under kontrollen efter skrivningen. På E-sidorna har högst två seoTitle i formen "Ämne, A och B", och ingen description har "Se …" som andra mening. De publicerade sidorna rörs inte nu.
