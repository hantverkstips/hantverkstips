# SEO-checklista, /fuktmatare/ som granskning på datablad, startlista 6 omgång C, 2026-10-04

Omgång C i startlista 6 (`docs/SOKORDSANALYS.md` 12.7, rad C1), deadline **20 december**. Ny kategorisida. Produktvalet är gjort: affiliatebeslutet `docs/briefer/affiliate-fukt-2026-09-30.md` avsnitt 4 ger åtta modeller, tre val och 15 spec-nycklar utan `bast`, och fröet `supabase/seed-produkter-fuktmatare-2026-10.sql` finns men är inte kört. Christian köper inga instrument, så sidan är en granskning på datablad och säger aldrig test, testad eller mätt om något vi gjort. Mönstret är `/krysslaser/` (`docs/briefer/seo-checklista-2026-09-30/krysslaser.md`).

Underlaget är SERP-läsningen i körning 2 (SOKORDSANALYS 7.2 och 7.5, 2026-09-20), affiliatebeslutet och varv 2 i `docs/briefer/underlag-fukt-sortiment-2026-09-30.md`. SERP:en lästes inte om, eftersom den är två veckor gammal; kontrollera topp 5 i google.se innan faktabladet skrivs. Title räknas utan suffix.

---

## /fuktmatare/

### 1. Adress och sidtyp

`/fuktmatare/` · `src/content/kategorier/fuktmatare.md` · samling **kategorier**, Granskning. Mallen `src/components/vyer/Kategorisida.astro` bygger jämförelsetabellen, Våra val, en rubrik per produkt och ItemList ur databasen, och sätter reklambandet. `pelare: [fukt]`.

Läsaren ska mäta ved, virke före målning, en syll i krypgrunden eller ett golv, och undrar vilken mätare som räcker, varför de kostar 500 eller 10 000 kronor, och om hennes billiga mätare visar rätt i kyla.

### 2. Huvudfras och sidofraser

**Huvudfras: fuktmätare, 6 600 per månad**, jämn över året med topp i september. Sidan äger **8 430**. Vinnbarhet 3 på ordet, 4 på "fuktmätare trä", 5 på "fuktkvotsmätare".

Sidofraser, med plats:

- **fuktmätare trä** (880, +30 %) i seoTitle eller H1, och i Så väljer du.
- **fuktmätare ved** (210, +53 %, topp oktober) i valet för ved och virke och i en mening i Så väljer du.
- **fuktkvotsmätare** (210) i ingressen eller första H2, som det andra namnet på samma instrument.
- **fuktmätare bäst i test** (210, +52 %), **fuktmätare test** (90) och **fuktmätare trä bäst i test** (70) i ingressen eller metoddelen i klartext: det här är en jämförelse på datablad, inget test. Aldrig i title eller H1.
- **fuktmätare vägg** (50) och **fuktmätare hus** (30) i H2 om stiftlösa mätare och byggmaterial.
- **fuktmätare stift** och **stiftlös** (ingen data) i H2 om typerna.

### 3. Title

Krav: `seoTitle` **högst 44 tecken**, börjar med **Fuktmätare** eller **Bästa fuktmätaren**, säger datablad eller jämförd, och innehåller aldrig test, mätt eller bäst i test. Delar inte de tre första orden med `/luftavfuktare/` ("Avfuktare och luftavfuktare jämförda") eller `/krysslaser/` ("Bästa krysslasern enligt databladen"). Förslag: **"Fuktmätare för trä, jämförda på datablad"** (40). Den tar ordet och trä-frasen i början.

### 4. Description

Krav: 120 till 155 tecken, ordet fuktmätare först, trä eller ved, datablad, temperaturen eller stift mot stiftlös, och att inga egna mätningar är gjorda. Inget utropstecken.

### 5. H1

`title` är sidans löfte. Fuktmätare tidigt, säger att jämförelsen bygger på tillverkarnas siffror, inga ord om mätning. Delar inte de tre första orden med `seoTitle`.

`ingress`: vad tabellen jämför, att en tom ruta betyder att tillverkaren inte anger talet, och att fuktkvotsmätare är samma sak.

### 6. H2-struktur

Mallen sätter jämförelsen och en rubrik per produkt. H2:orna nedan är brödtexten.

1. **Så väljer du** (bär "fuktmätare trä" och "ved"). Tre frågor i ordning: vad du ska mäta (ved, virke före målning, en syll eller ett golv), hur kallt det är där, och om stifthålen får synas. En mening om att ved ofta anges som fukthalt och mätaren visar fuktkvot, med länk till `/rakna/fuktkvot/`.
2. **Stift eller stiftlös fuktmätare** (bär "stift", "stiftlös", "vägg"). Stiftmätaren ger fuktkvot i virket, den stiftlösa söker fukt bakom ytan och visar oftast en relativ skala. GMM 1-15 är den enda stiftlösa i sortimentet som ger fuktkvot (affiliatebeslutet). Byggmaterial och vägg: vad mätarna visar i puts och gips och att det inte är fuktkvot.
3. **Kallt trä visar för lite** (temperaturen; rubriken formuleras av hantverkaren). Sidans starkaste GEO-stycke: resistansmätarens värde ändras med temperaturen, intervallet ur källorna (SP Trä PX21326 2012: 0,1 till 0,15 procentenheter per grad från 20 °C; USDA Wood Handbook 2021: ungefär 0,9 per 10 °C), att SS-EN 13183-2 kräver korrigering för träslag och temperatur, och vilka modeller i tabellen som kompenserar automatiskt, manuellt eller inte alls. Intervallet, inte ett medelvärde. Det ska gå att läsa utan resten av sidan.
4. **Vad talet på mätaren betyder.** Kort: TräGuidens gränser för målning (16), inbyggnad (18), röta (20 och 30) och mätfelet ±2 procentenheter, i en liten tabell eller fyra rader, och länk till `/fukt/fuktkvot/` för resten. Inte hela gränstabellen; den ägs av kunskapssidan.
5. **Betong mäts på ett annat sätt.** Två eller tre meningar: RF i borrhål med givare, inte med stift, och att det är en egen sida (E5). Ingen länk förrän `/fukt/fuktmatning-betong/` finns.
6. **Varifrån talen i tabellen kommer** (ersätter "Så testade vi"). Varje värde ur tillverkarens datablad eller produktsida med läsdatum, tillverkarnas förbehåll utskrivna (Boschs "±1 %" säger inte om det är procentenheter), att inget är mätt av oss, och att det senaste oberoende testet i Norden är SP Träs rapport från 2012, där bara Testo 606-2 och Gann BL Compact B finns i dagens sortiment. Länk till `/om/sa-testar-vi/`. Rubriken innehåller inte ordet test.

Ingen Faq: kategorimallen har ingen Faq-komponent, och FAQPage läggs inte till utan ett synligt avsnitt.

### 7. Längd

Mål **1 200 till 1 800 ord** brödtext utöver tabellen och produktblocken. Körning 2: Biltemas kategorisida är etta, och den starkaste redaktionella sidan har cirka 1 200 ord utan egna mätningar. Vi vinner på temperaturavsnittet och tabellens förbehåll, inte på längden.

### 8. Bilder

Kategorimallen har inget bildfält. Produktbilderna kommer ur databasen; affiliate säkerställer att de får användas. Ingen egen skiss är krav.

### 9. Interna länkar

**Ut**, minst tre i brödtexten:

- `/fukt/fuktkvot/` i H2 4.
- `/rakna/fuktkvot/` i H2 1 eller 4 (eller som Verktygskort, ett per sida; mallens `kalkylator`-fält om det finns).
- `/fukt/hygrometer/` i H2 2 eller 3, för luften i stället för materialet.
- `/fukt/fukt-i-krypgrund/` eller `/fukt/fukt-pa-vinden/` vid valet för kalla utrymmen.
- `/om/sa-testar-vi/` i metoddelen.
- Hubben `/fukt/` en gång.

**In**, krav senast en vecka efter publicering: `/fukt/hygrometer/` rad 139, `/fukt/fukt-i-krypgrund/` rad 119 och `/fukt/fukt-pa-vinden/` rad 118 (fukt-6-C.md avsnitt 2), plus `/fukt/fuktkvot/` och `/rakna/fuktkvot/` i samma omgång. Målningssidorna (`/fasad/tvatta-fasad/` rad 166, `/fasad/mala-om-huset/` rad 201, `/tak/takfot/` rad 82) har en fuktmätare i texten; en av dem får länken om hantverkaren tycker att den passar. Affiliate avgör om "Fuktmätare med stift" i deras "Det här behöver du" blir en produkt.

### 10. Strukturerad data och komponenter

- `kategori()` i `src/lib/strukturdata.ts`: ItemList med Product och Offer per modell. **Inget Review och ingen aggregateRating.** Funktionen ändras inte.
- BreadcrumbList från mallen. Ingen FAQPage.
- `specs` i frontmatter: de 15 nycklarna i affiliatebeslutet, **ingen med `bast`**. Tomma rutor står tomma.
- `val`: de tre i affiliatebeslutet i ordningen UniversalHumid, DT125, GMM 1-15, med konkreta etiketter (ved och virke, kalla utrymmen, utan hål i ytan). `forVem` i Christians röst.
- `utkast: false` först när fröet är inläst, priserna lästa om samma dag och punkt 11 är uppfylld.

### 11. Ettan och Bättre än ettan

**Ettan (körning 2, 2026-09-20):** biltema.se, kategorisida med sortiment och pris, ingen text om fuktkvot. På "fuktmätare trä" är ettan PriceRunners prislista med elva produkter, utan gränsvärden och utan stift mot stiftlös. Redaktionellt innehåll börjar på plats fem, cirka 1 200 ord utan egna mätningar. Inget oberoende test har publicerats i Norden på tre år (affiliatebeslutet).

Det ettan har som vi måste behålla eller överträffa:

1. Aktuella priser. Vi har pris och datum per erbjudande ur databasen.
2. Ett billigt alternativ. UniversalHumid för cirka 500 kronor står med, och valet för ved är det.
3. Bredden: från en mätare för veden till besiktningsinstrumentet.

**Bättre än ettan** (krav, varje punkt kontrolleras i den färdiga sidan):

1. **Jämförelsetabellen med samma kolumner för alla åtta**, med temperaturkompensering och noggrannhet med det intervall den gäller i. Ingen i topp 5 har det.
2. **Temperaturen förklarad med källornas intervall**, och vilka modeller som kompenserar automatiskt, manuellt eller inte alls.
3. **Vad talet betyder**, med TräGuidens gränser, mätfelet och länk till räknaren. Ingen butik säger vad läsaren ska göra med talet.
4. **Ärlig metod**: varje värde med källa och läsdatum, tillverkarnas förbehåll utskrivna, inget test om oss, och det senaste oberoende testet namngivet med år.
5. **Ved och virke för cirka 500 kronor som ett av valen**, med skälet utskrivet. Ingen jämförelse i SERP:en säger när den billiga räcker.

**Krav på faktabladet** (`underlag`, `docs/briefer/faktablad/kategorier-fuktmatare.md`):

- Varje modells datablad med adress och läsdatum för de 15 nycklarna, som i fröet. Det som är tomt efter varv 2 står tomt.
- Temperaturkällorna ordagrant: SP Trä PX21326 (2012), USDA Wood Handbook (2021) kapitel om elektriska fuktmätare, SS-EN 13183-2 i den form den kan citeras, och TräGuidens "måste korrigeras för rådande temperatur och träslag".
- Vedens gräns med källa och om den gäller fukthalt eller fuktkvot (samma uppgift som räknarunderlaget punkt 5; hämtas en gång).
- Topp 5 i google.se för "fuktmätare" och "fuktmätare trä", kontrollerad.

### 12. Fällor

- **Test, testad, mätt, testvinnare, bäst i test, budget, premium** om något vi gjort, var som helst på sidan, i `val` och i `forVem`.
- **Boschs och Testos "±1 %"** skrivs inte om till procentenheter.
- **SP-rapportens omdöme om Testo 606-2** får inte skrivas om som ett omdöme om 606-1.
- **Flir MR55** är inget val. Den står i tabellen på sina egna meriter, och temperaturavsnittet förklarar varför DT125 fick uppgiften.
- **Gränstabellen för fuktkvot** ägs av `/fukt/fuktkvot/`. Här står fyra rader och en länk.
- **Gränsvärdena för krypgrunden** ägs av `/fukt/fukt-i-krypgrund/`.
- **"fuktmätare betong"** (390) ägs av `/fukt/fuktmatning-betong/` (E5). Här står betongen i tre meningar.
- Proffsmagasinets egna guider och kundbetyg är ingen källa för kvalitet; deras produktsidor används för pris.

---

## Kontroll efter skrivningen, 2026-10-04

SEO och GEO-agenten har läst `src/content/kategorier/fuktmatare.md` (utkast) mot punkt 1 till 12. **Godkänd av SEO och GEO**, med två punkter som rättas och villkor för publicering.

- **Metadata.** seoTitle "Fuktmätare för trä, jämförda på datablad" (40) och description (148) är godkända. H1 "Vilken fuktmätare som räcker till veden, virket och krypgrunden" saknar ordet datablad, men etiketten "Granskad på datablad" och seoTitle säger det. Det godkänns, och H1 delar inte de tre första orden med seoTitle.
- **Sidofraserna.** "fuktmätare trä" står i första H2, ved i första H2 och i valet, och fuktkvotsmätare i ingressen. Stift och stiftlös har en egen H2. "bäst i test" står i klartext i det sista avsnittet som det sidan inte är, och "test" står där med samma ärlighet.
- **Bättre än ettan.** Punkt 1, 2, 4 och 5 är uppfyllda: tabellen med 15 rader, temperaturavsnittet med spannet och en egen tabell (räkningen stämmer, 0,9 till 3,0 procentenheter mellan 10 och 0 grader), SP-rapporten från 2012 med namn och Boschs och Testos förbehåll, och skälet till ved för cirka 500 kronor. Punkt 3 är uppfylld först när länken till räknaren finns.
- **Ingen Faq** och inga ord om egna mätningar. Inget att ändra.

**Rättas:**

1. **Länken till `/fukt/fuktkvot/` flyttas.** Kommentaren på rad 119 föreslår ankaret "golvbrädor levereras med 8 procent fuktkvot", som pekar på en detalj. Lägg länken på rad 107, "Gränserna nedan kommer från TräGuiden", med ett ankare som säger vad sidan ger, till exempel "gränserna för fuktkvot i trä". Kommentaren på rad 119 stryks.
2. **`kalkylator: fuktkvot`** läggs i frontmatter när räknaren är publicerad (fältet finns i schemat). Länken på rad 65 med ankaret "18 till 25 procent fuktkvot" står kvar som den är föreslagen.

**Villkor för `utkast: false`:** sidan publiceras först i samma commit som `/fukt/fuktkvot/` och `/rakna/fuktkvot/`, med båda länkarna lagda. Fröet ska vara inläst, och priser och lager ska läsas om samma dag.

**Inlänkar till `/fuktmatare/`**, alla med fil, H2 och ankare:

1. `src/content/kunskap/fukt/hygrometer.mdx`, H2 "Vilken hygrometer som passar var i huset", rad 139. Ankare: "en fuktmätare för trä" i "behöver du en fuktmätare för trä".
2. `src/content/guider/fukt/fukt-i-krypgrund.mdx`, H2 "Mät fukten i krypgrunden själv", rad 119. Ankare: "fuktkvotsmätare" i "Fuktmätaren för träet i krypgrunden kallas fuktkvotsmätare".
3. `src/content/guider/fukt/fukt-pa-vinden.mdx`, H2 "Hygrometern och fuktkvotsmätaren visar hur fuktig vinden är", rad 118. Ankare: "Fuktkvotsmätaren" i "Fuktkvotsmätaren har två stift".
4. `src/content/kunskap/fukt/fuktkvot.mdx`, H2 "Mät tre gånger och räkna med marginalen", rad 149. Ankare: "genomgången av fuktmätare" (kommentaren på rad 151).
