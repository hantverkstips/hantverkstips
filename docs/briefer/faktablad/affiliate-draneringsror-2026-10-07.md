# Affiliateunderlag: /grund/draneringsror/ (omgång F, F1)

Beställt av affiliateagenten 2026-10-07. Frågan: förtjänar något ur Proffsmagasinets sortiment ett kort på kunskapssidan om dräneringsrör? Hantverkarens faktablad rörs inte. Ingen text här är förlaga.

Skrivet 2026-10-07 av underlag. "Läst 2026-10-07" betyder hämtat med curl (utan -L) och läst den dagen; PDF:er med pdftotext. Citat inom citattecken är ordagranna. Märkning: **BUTIK** (pris, lager, art.nr, butikens egen text), **TILLVERKARE**, **EGEN** (egen räkning, formeln utskriven), **ANTAGANDE**, **UTDRAG** (sökmotorns utdrag).

---

## 0. Kort svar

- Proffsmagasinet (PM) har **ett** dräneringsrör, och det är ett **jordbruksdräneringsrör** (Pipelife PVC 92/80, 10 m ring, 1 820 kr). Butikens egen produkttext säger: "Vid dränering runt hus rekommenderas byggdräneringsrör". Pipelife själv listar röret under "Jordbruksdränering". Ett byggdräneringsrör (Pipelife BDR, Uponor, Wavin) finns inte i PM:s sitemap. I lager: 1 ring.
- PM har **fiberduk** (Gelia, 1,4 × 50 m, N1, 1 285 kr; 1,4 × 15 m, 464 kr). Ingen tillverkarkälla hittad.
- PM har **inga** dräneringsbrunnar, spolbrunnar, spol-T-rör, inspektionsbrunnar, grundmursskivor, noppmattor (Platon, Delta MS, Isodrän), makadam eller singel.
- Ordervärde för det som går att köpa hos PM till en grund på 40 löpmeter: **8 565 kr** med fel rörtyp (4 ringar jordbruksrör och en rulle duk), **1 285 kr** om bara det som passar husdränering räknas (duken). Räknarens materialpost för samma grund är 12 000–36 000 kr.

---

## 1. Sortimentet hos Proffsmagasinet (del 1)

### 1.1 Hur sökningen gjordes

- Produktsitemap: `https://proffsmaster.blob.core.windows.net/product-feeds/proffs-se_sv-se_sitemap_products_1.xml` till `_4.xml` (länkade från `https://www.proffsmagasinet.se/sitemap.xml`), **178 166 adresser**, och kategorisitemapen `proffs-se_sv-se_sitemap_categories.xml`, 1 797 adresser, hämtade 2026-10-07.
- Sökt i adresserna på: dranering, draneringsror, dränering, fiberduk, geotextil, markduk, makadam, singel, grundmur, grundskydd, platon, delta-ms, isodran, noppmatt, spolbrunn, inspektionsbrunn, dagvattenbrunn, sandfang, markbrunn, filterduk, slitsad, omholj, grundisol, sockelskiv, grundmursskiv, draneringsslang, brunn, isola, cellplast, xps, sundolitt, jackon, finnfoam, markisol.
- Kategorin `vvs-inomhusklimat/installation/markavlopp-dranering` har fyra underkategorier. Alla fyra hämtade en gång, **200 utan omdirigering**:

| Kategori | `TotalProducts` | Innehåll |
|---|---|---|
| `.../markavlopp-dranering/draneringsror` | 2 | Pipelife dräneringsrör 92/80 10 m; LK Systems V2 dräneringsböj (reservdel till golvvärmefördelare, inte markdränering) |
| `.../markavlopp-dranering/tillbehor-dranering` | 9 | Gelia fiberduk 1,4 × 50 m; åtta Icopal-delar för hängrännor och stuprör (rännkrok, rännskarv, ränngavel, mellanstycke, omvikningskupa, rörsvep) |
| `.../markavlopp-dranering/markror` | 23 | Släta markavloppsrör och böjar (Uponor, Pipelife, Ostendorf), 50–160 mm; inga slitsade rör |
| `.../markavlopp-dranering/markrannor-punktavvattning` | 1 | Icopal brunnsutkastare Ø90 (stuprörsdel) |

Gelia fiberduk 1,4 × 15 m (2360209) finns i sitemapen och är aktiv med 377 i lager, men syns inte i kategorilistan (9 artiklar utan den).

### 1.2 Träffarna som rör dränering runt hus (BUTIK, läst 2026-10-07)

Data ur sidans `__INIT_STATE__` (`Variation.Price.ListPrice.AmountWithTax`, `Status.Availability.B2C`, `GtmStockInfo`, `Campaigns`, `Gtin`, `Mpn`, `FreeShippingEligible`). Alla fyra produktsidor hämtade en gång: **200, ingen omdirigering**. Ingen har kampanj (`Campaigns: []`).

| # | Vara (PM:s namn) | PM art.nr | Tillv.nr hos PM (`Mpn`) | EAN (PM) | Pris | Enhet | Pris per enhet, **EGEN** | Lager (B2C) | Leveranstext ordagrant | `StoredInOurWarehouse` |
|---|---|---|---|---|---|---|---|---|---|---|
| R1 | 3002003031 Pipelife Dräneringsrör PVC, 92 x 80 mm, 10 m | 2360205 | 3002003031 | 7033732402050 | 1 820 kr | ring om 10 m | 1 820 ÷ 10 = 182 kr/m | InStock, **1** | "Skickas inom 24 timmar!" | false |
| D1 | 3002006781 Gelia Fiberduk 1,4 x 50 m | 2360210 | 3002006781 | 7392462125739 | 1 285 kr | rulle 1,4 × 50 m = 70 m² | 1 285 ÷ 70 = 18,4 kr/m² | InStock, 98 | "Skickas inom 24 timmar!" | false |
| D2 | 3002006761 Gelia Fiberduk 1,4 x 15 m | 2360209 | 3002006761 | 7392462125722 | 464 kr | rulle 1,4 × 15 m = 21 m² | 464 ÷ 21 = 22,1 kr/m² | InStock, 377 | "Skickas inom 24 timmar!" | false |
| – | V2 LK Systems Dräneringsböj, dräneringspaket | 3091938 | V2 | 7331590057109 | 336 kr | st | – | InStock, 33 | "Skickas inom 24 timmar!" | true |

Adresser (efter `https://www.proffsmagasinet.se/vvs-inomhusklimat/installation/markavlopp-dranering/`):
- R1 `draneringsror/pipelife-3002003031-draneringsror-pvc-92-x-80-mm-10-m-2360205`
- D1 `tillbehor-dranering/gelia-3002006781-fiberduk-14-x-50-m-2360210`
- D2 `tillbehor-dranering/gelia-3002006761-fiberduk-14-x-15-m-2360209`
- LK `draneringsror/lk-systems-v2-draneringsboj-draneringspaket-3091938`

**Butikens egen text om R1** (`FullReview.LongDescription`, ordagrant, utdrag):
- "Lämpar sig till alla jordarter med undantag för moss- och järnhaltig jord. Dräneringsröret har en slitsstorlek på cirka 1,3x5,0 mm samt slitstyp 1 enligt SS 3520."
- "OBS! Flexibla dräneringsrör kräver en helt plan botten med fall och bör endast användas som dränering i fria ytor"
- **"Vid dränering runt hus rekommenderas byggdräneringsrör RSK nummer: 2371910"**
- "Levereras i ring inklusive en skarvmuff"
- "Utvändig rördiameter 92 mm Längd 10 m Rörfärg Vit Nominell innerdiameter Ansl. 80 (3\")"

**Butikens text om D1 och D2** (ordagrant): "Uppfyller kraven för ATB VÄG 05 och NorGeoSpec 2002 Bruksklass N1 (tidigare klass 2)", "Vikt 90 g/m²", "lämpar sig väl för exempelvis trädgården, gångar med marksten, vägar och dränering". RSK enligt PM: 19024242 (D1), 19024243 (D2). Åtta siffror; RSK-nummer brukar ha sju. Inte kontrollerat.

**LK V2** är enligt PM:s text "ett komplett reservdelspaket för montering av dränageböj med utloppsbricka till LK fördelarskåp GV samt UNI". Det är golvvärme/tappvatten inomhus, inte markdränering. Tas inte med.

### 1.3 Det som inte finns hos PM (sitemap 2026-10-07)

| Vara | Resultat |
|---|---|
| Byggdräneringsrör 100/110 mm, styvt, slitsat (Pipelife BDR, Uponor, Wavin) | **Finns inte.** Släta markavloppsrör 110 mm finns (t.ex. Uponor 3 m, 3081621, 820 kr), men de är inte slitsade |
| Dräneringsslang med omhöljning/filter (geotextil, kokos, PP-fiber) | **Finns inte** |
| Dräneringsrör 50 mm | **Finns inte** som dräneringsrör; bara slätt markavloppsrör 50 mm |
| Dräneringsbrunn, spolbrunn, inspektionsbrunn, sandfång för mark | **Finns inte.** Träffar på "brunn" är golvbrunnar (Purus m.fl.), kabelbrunnar (Melbye, Pipelife, Uponor kombibrunn under el-installation) och brunnspumpar |
| Spol-T-rör, grenrör för dränering | **Finns inte** |
| Grundmursskiva, noppmatta, grundskydd (Platon, Delta MS, Isodrän, Sundolitt, Jackon) | **Finns inte.** Närmast: Tecca grundisoleringspapp (3038848–3038850, under "isolering"), som är papp, inte grundmursskydd. Inte läst närmare |
| Makadam, singel, grus | **Finns inte.** "singel" ger bara lampor, möbler m.m. |
| Fiberduk utöver Gelia | Bara odlingsdukar 17–100 g/m² (Nelson Garden, Nyby Bruk) under trädgård; ingen klassning för mark |
| Verktyg för dränering | Ingen egen kategori. Rotationslaser finns (kategori `maskiner-verktyg/laserinstrument/rotationslaserpaket`, 63 adresser med "rotationslaser") men räknaren räknar inte fram något som laserns val beror på. Inte genomgånget |

### 1.4 Frakt (BUTIK)

Ur samma `__INIT_STATE__` på R1, ordagrant: `"b2c-delivery":"Fri frakt över 999 kr*"` och `"InfoMainContent"`: "* Fraktkostnad kan tillkomma på tunga och/eller skrymmande produkter". Texten för specialfrakt: "Produkten är tung och/eller skrymmande. Om fraktkostnad tillkommer så visas det enligt summeringen nedan." Alla fyra varorna har `FreeShippingEligible: true`; ingen flagga för specialfrakt syns i produktsidans data. **Om en 10-metersring räknas som skrymmande i kassan: inte kontrollerat** (kräver varukorg).

---

## 2. Ordervärdet (del 2)

### 2.1 Vad räknaren räknar

`src/lib/kalkyl/dranering.ts` räknar **kronor, inte mängder**. Utdata: omkrets, kronor per löpmeter och summa för arbete, material och återställning, ROT, och ett besked. Den räknar inte meter rör, kubikmeter makadam, kvadratmeter duk eller antal brunnar.

- Omkrets: `omkretsM = 2 * (husLangdM + husBreddM)`. Standardvärdet 12 × 8 m ger **40 löpmeter**. **ANTAGANDE i detta blad:** villan är räknarens standardhus, 12 × 8 m, schaktdjup 2 m.
- Material: `MATERIAL_LAG_KR_PER_M = 300`, `MATERIAL_HOG_KR_PER_M = 900` vid 2 m djup (materialfaktor 1). Kommentaren i modulen: undre kanten = "dräneringsslang 90 mm med geotextil 56 kr per meter (Bauhaus), noppmatta Isola Platon Xtra 80 kr per kvm (Bauhaus) i två meters höjd, fiberduk 5 kr per kvm och makadam"; övre kanten = samma rör och "en dränerande grundmursskiva av typen Isodrän 100 mm för 320 kr per kvm (Markgrossen)".
- Räknarens materialpost för 40 m, **EGEN**: 300 × 40 = 12 000 kr; 900 × 40 = 36 000 kr.

### 2.2 Mängderna, EGEN ur räknarens antaganden

| Vara | Mängd | Formel och källa |
|---|---|---|
| Dräneringsrör | 40 m | 1 m rör per löpmeter (räknarens "56 kr per meter" per löpmeter). Pipelife: "Dränering av husgrund sker normalt med en ledning i dimension 100 mm runt byggnaden" (3.1). Anslutning till brunn och utlopp tillkommer, längd **saknas** |
| Noppmatta / grundmursskiva | 80 m² | 2 m höjd × 40 m (räknarens "i två meters höjd") |
| Fiberduk | **saknas i räknaren** | Räknaren anger pris per kvm men ingen bredd. **ANTAGANDE:** en duk i rullens bredd 1,4 m längs hela grunden = 1,4 × 40 = 56 m² |
| Makadam | **saknas i räknaren** | Ingen volym eller schaktbredd i modulen. Räknas inte |
| Brunnar | **saknas i räknaren** | Pipelife: spolrör på högsta punkten och lutning "mot dräneringsbrunnen" (3.1), alltså minst en brunn och ett spolrör. Antalet för ett visst hus: **saknas** |

### 2.3 Kostnad hos PM, 40 löpmeter (EGEN, priser läst 2026-10-07)

| Vara | PM-artikel | Antal | Formel | Kostnad | Passar mängden? |
|---|---|---|---|---|---|
| Rör | R1, 2360205, 10 m ring | 4 ringar | ⌈40 ÷ 10⌉ = 4; 4 × 1 820 | 7 280 kr | Ja i längd (40 m jämnt), **nej i typ**: jordbruksrör, PM avråder själv vid hus. **Lager 1 ring**, 4 kan inte skickas inom 24 h enligt lagerdata |
| Fiberduk | D1, 2360210, 1,4 × 50 m | 1 rulle | 50 m ≥ 40 m; 1 × 1 285 | 1 285 kr | Ja: 70 m² ≥ 56 m², 10 m över |
| Fiberduk, alternativ | D2, 2360209, 1,4 × 15 m | 3 rullar | ⌈40 ÷ 15⌉ = 3; 3 × 464 | 1 392 kr | Dyrare än D1 |
| Noppmatta / skiva | – | – | – | finns inte | – |
| Brunnar, spolrör | – | – | – | finns inte | – |
| Makadam | – | – | – | finns inte | – |
| **Totalt, allt PM har** | | | 7 280 + 1 285 | **8 565 kr** | |
| **Totalt, bara det som passar husdränering** | | | 1 285 | **1 285 kr** | Under 1 500 kr |

- Fri frakt över 999 kr gäller båda summorna enligt butikstexten, med reservationen för skrymmande gods (1.4).
- Jämförelse, **EGEN**: PM-delen 8 565 kr är 71 procent av räknarens nedre materialpost 12 000 kr (8 565 ÷ 12 000), men nästan allt är fel rör.
- Prisjämförelse rör, **EGEN**: PM 182 kr/m mot 56 kr/m i räknarens källa (Bauhaus, dräneringsslang 90 mm med geotextil, läst 2026-09-18). Inte läst om i dag.

---

## 3. Tillverkarkällor (del 3)

### 3.1 Pipelife (TILLVERKARE)

**a) Röret PM säljer motsvarar Pipelifes jordbruksrör.** Pipelife Sverige, "JDR Drän Std 92x80 10 m/rle", <https://www.pipelife.se/Katalog/VA/Draeneringssystem/Jordbruksdranering/draeneringsroer_-standard/jdr-draen-std-92x80-10-mrle.html>, 200, läst 2026-10-07 (curl och WebFetch):
- Produktnamn "JDR Drän Standard 92x80 10 m/rulle, PVC"; RSK 2371939; Pipelife art.nr 70005297; GTIN 9010459172068 (enligt WebFetch-sammanfattningen).
- Ordagrant: "Slitsstorlek: Ca 1,3 x 5,0 mm. Slitstyp 1 enligt SS 3520." och "AMA kod: PBB.532 Ledning av plaströr, fabriksspecifika dränrör, i ledningsgrav."
- Sökvägen (brödsmulor): "Dräneringssystem" › "Jordbruksdränering" › "Dräneringsrör, standard". Ingen omhöljning; omhöljda varianter är egna artiklar (kokosfilter, PP-fiber 450/700).
- Mått enligt WebFetch-sammanfattningen (inte ordagrant läst): ytterdiameter 92 mm, innerdiameter 80 mm, längd 10 m, material PVC.
- **Om PM:s R1 är exakt denna artikel är inte bekräftat:** PM:s EAN 7033732402050 och `Mpn` 3002003031 stämmer inte med Pipelifes GTIN och art.nr. Dimension, längd, material och slitsning stämmer. PM:s `Mpn` har samma form som Gelia-dukarnas (3002006781), vilket tyder på grossistens nummer. EAN-prefixet 703 är norskt.

Pipelife, "Broschyr Jordbruksdränering", <https://www.pipelife.se/content/dam/pipelife/sweden/marketing/general/brochures/jordbruk/broschyr-jordbruksdraenering.pdf>, läst 2026-10-07:
- Under "Pipelife Standard": "Tillsammans med dräneringsfilter av grus eller sågspån ger detta rör ett väl fungerande och effektivt dräneringssystem. Vid dränering av mycket slamningsbenägna jordar bör Pipelife inslamningsskydd användas under röret." (radbrytningar ihopslagna)
- "Slitsstorlek: ca 1,4 x 5,0 mm. Slitstyp 1 enligt SS 3520" (broschyren säger **1,4**, produktsidan **1,3**; se 5).
- Sista sidan: "För fler typer av dräneringsrör hänvisar vi till broschyr Infra (toppslitsad dränering, vägdränering, respektive BDR Byggdränering (husgrundsdränering)."

**b) Pipelifes rör för husgrund är BDR, som PM inte säljer.** "BDR Byggdräneringsrör 110/100 6m, fullslits, PEH", <https://www.pipelife.se/Katalog/VA/Draeneringssystem/BDR-byggdranering-ror-och-delar-110-232/bdr-byggdraeneringsroer-fullslitsat-peh/bdr-byggdraeneringsroer-110100-6m-fullslits-peh.html>, 200, läst 2026-10-07. Ordagrant: "SN 8", "Slitstyp 2 enl. SS3520", "Antal slitsar per meter rör=cirka 188 st", "Fullslitsad, med en muff", "AMA kod: PB-.531 Ledning av plaströr, standardiserade dränrör", "Producerad på återvunnen råvara." RSK 2415000, art.nr 70012080.

Pipelife, broschyr "BDR Byggdränering", <https://www.pipelife.se/content/dam/pipelife/sweden/marketing/general/brochures/infrastruktur/va/byggdraenering-oktober-2022.pdf> (filnamnet säger oktober 2022), läst 2026-10-07, ordagrant (radbrytningar ihopslagna):
- "Husgrundsdränering. Dränering av husgrund sker normalt med en ledning i dimension 100 mm runt byggnaden. Spolrör placeras på högsta punkten och därefter läggs rören lämpligen i två riktningar med lutning mot dräneringsbrunnen."
- "Dräneringsledningen kringfylls normalt med tvättad singel eller tvättad makadam med fraktionen 8-16 mm. Som filter mellan kringfyllning och omgivande jord kan duk av geotextil (bruksklass 1 eller 2) eller grusfilter med minsta tjocklek 100 mm användas."
- "Pipelife BDR byggdräneringsrör i Polyeten PEH, tillverkade med slitstyp 2 enligt Svensk Standard SS 3520."
- Tabell: 110/100 i 4 och 6 m, 160/140 och 232/200 i 6 m; "Antal slitsar/m" 276 för 110/100 (produktsidan säger cirka 188; se 5). Spol/T-rör 110/110 RSK 241 50 70.

### 3.2 Gelia fiberduk

**Ingen tillverkarkälla hittad.** Två sökningar (Gelia fiberduk med art.nr, RSK och N1) gav bara Ahlsells och andras dukar, inget Gelia-blad. Klassen N1, "tidigare klass 2", 90 g/m² och ATB VÄG 05 / NorGeoSpec 2002 är **PM:s text**, inte tillverkarens. CBR-värde: **saknas**.
- Jämförelse, **EGEN**: PM:s "N1 (tidigare klass 2)" ligger inom Pipelifes "bruksklass 1 eller 2" (3.1 b), om PM:s klassuppgift stämmer.

### 3.3 Grundskydd, brunnar

Inte sökta hos tillverkarna: PM säljer inga (1.3).

---

## 4. Bedömning mot reglerna (underlag, inte beslut)

- AFFILIATE.md avsnitt 3: "handverktyg och förbrukning (ordervärde under provisionens vettighet)" görs inte; ordervärde från ca 1 500 kr. SKILL avsnitt 2: förbrukningsvara får kort "bara när räkningens utdata *är* varan".
- Räknarens utdata är kronor och löpmeter, inte rör eller duk (2.1).
- Det enda röret är enligt både PM:s egen text och Pipelifes katalog ett jordbruksrör. Ett kort för det på en sida om husdränering skulle gå emot butikens egen anvisning.
- Duken (1 285 kr) passar Pipelifes beskrivning av filter men ligger under 1 500 kr och saknar tillverkarblad.

---

## 5. Öppet

1. Om R1 (PM 2360205) är exakt Pipelife 70005297: EAN och tillverkarnummer skiljer sig (3.1 a).
2. Slitsstorlek R1: produktsidan "Ca 1,3 x 5,0 mm", broschyren "ca 1,4 x 5,0 mm". Broschyrens datum inte läst.
3. BDR 110/100: produktsidan "cirka 188" slitsar per meter, broschyren (2022) 276. Vilket som gäller i dag: oklart; produktsidan är nyare (publicerad 2026-04-14 enligt sidans data).
4. PM:s hänvisning "byggdräneringsrör RSK nummer: 2371910": i Pipelifes jordbruksbroschyr står 237 19 10 i tabellen för JDR standard, alltså jordbruksrör. Tabellens rader blev förskjutna i textutdraget och är inte säkert lästa. Pipelifes BDR 110/100 har RSK 2415000/2414999 enligt broschyren.
5. Gelia fiberduk: tillverkare och produktblad saknas; RSK-numren har åtta siffror.
6. Skrymmande frakt för en 10-metersring: inte kontrollerat i kassan.
7. Lager R1 är 1 ring; leveranstid för fler okänd (`StoredInOurWarehouse: false`, ingen `BackorderAvailability`).
8. Räknaren saknar mängd för duk, makadam och brunnar; dukmängden här bygger på ett antagande (1,4 m bredd).

## 6. Sidor som inte gick att läsa

- Ingen sida vägrade. Alla PM-sidor (4 kategorier, 4 produkter, sitemaps) och Pipelifes två produktsidor och två PDF:er gav 200.
- Pipelifes produktdatablad (PDF under fliken "Nedladdningar", t.ex. "Product_data_sheet_JDR_Drän_Standard_92x80_10_m/rulle,_PVC.pdf") hade ingen direktlänk i sidans HTML och är inte lästa. Mått för JDR (ytter/inner, vikt) kommer därför från WebFetch-sammanfattningen, inte ordagrant.
- Gelia: ingen sida hittad att läsa.
- Sökmotorträffar på ahlsell.se (Pipelife JDR och dukar) är inte lästa; används inte.
