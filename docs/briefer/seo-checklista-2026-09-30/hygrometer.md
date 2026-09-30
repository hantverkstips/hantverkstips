# SEO-checklista, hygrometer, startlista 6 omgång A, 2026-09-30

Omgång A i startlista 6 (`docs/SOKORDSANALYS.md` 12.7, rad A2; `docs/INNEHALLSARKITEKTUR.md` avsnitt 9). Ny sida. Hygrometern är instrumentet som alla andra fuktsidor säger åt läsaren att skaffa, och ordet är det största i fuktområdet som ingen sida på sajten äger. Beslutet i SOKORDSANALYS 7.5 att hygrometern bara skulle bli ett avsnitt är ändrat i 12.5. Hantverkaren läser checklistan före skrivningen, `underlag` läser punkt 11 och 12 innan faktabladet skrivs, och SEO och GEO-agenten läser den färdiga sidan mot samma lista.

Så här läses checklistan:

- **Underlag:** underlagsarbetarens SERP-läsning 2026-09-30 (topp 5 på "hygrometer", ettan på "hygrometer bäst i test" och "mäta luftfuktighet"), volymerna i `docs/data/keyword-stats-2026-09-30-fukt-sorterad.tsv`, det gemensamma faktabladet `docs/briefer/faktablad/fukt-gemensamma-tal.md` (talens enda källa) och affiliatebeslutet `docs/briefer/affiliate-fukt-2026-09-30.md`, punkt 2.
- **Sökverktyget svarar från USA.** Sökningen gjordes som "hygrometer sverige". Domänerna i topp 5 är kontrollerade genom att sidorna lästes, utom Elgiganten (429, bara utdrag). Ordningen mellan dem är inte kontrollerad.
- **Title** räknas utan suffixet " · Hantverkstips".
- **Punkt 11** innehåller **Bättre än ettan** (krav) och **Krav på faktabladet**.

Tre saker som styr sidan:

1. **Inga produkter, inga annonslänkar och inget reklamband** (affiliatebeslut 2026-09-30, punkt 2). Det gäller också textlänkar till butiker. Proffsmagasinets luftfuktighetsmätare börjar på 1 500 kr, och läsaren vill ha en rumsmätare för 100 till 1 000 kr. Sidan får beskriva typer och vad man ska titta efter i ett datablad, men den rankar inga modeller och skriver inte "bäst i test".
2. **Inga egna mätningar**, om de inte redan är gjorda med instrument Christian har. Christian beslutade 2026-09-30 att vi inte köper produkter. Sidan bygger på myndighetstexter, datablad och koksaltprovet som läsaren gör själv, och den säger det.
3. **Sidan äger mätningen, inte gränserna.** Vad som är normalt per rum och årstid står på `/fukt/luftfuktighet-inomhus/`, gränserna för material i det gemensamma faktabladet, och kalibreringen står här. Talet på displayen kopplas till gränserna med länkar, inte med en egen tabell.

---

## /fukt/hygrometer/

### 1. Adress och sidtyp

`/fukt/hygrometer/` · `src/content/kunskap/fukt/hygrometer.mdx` · samling **kunskap**, `typ: kunskap`, `pelare: fukt`, `plats: hela-huset` (mätningen står under Hela huset på hubben), `niva: enkel`. Hubgrupp: Hitta felet. `produkter: []`, ingen `kategori`.

Läsaren har en hygrometer eller ska köpa en. Hon vill veta vilken sort hon behöver, om talet stämmer och var den ska sitta. Den som skriver "luftfuktighetsmätare" eller "mäta luftfuktighet" har samma fråga.

### 2. Huvudfras och sidofraser

**Huvudfras: hygrometer, 4 400 per månad**, jämn över året (22 procent upp på tre månader). Vinnbarhet 4. Ettan är ett uppslagsord ur Skogsencyklopedin från 2000, och resten av topp 5 är butiker.

Sidofraser, med plats:

- **luftfuktighetsmätare** (480) i H1 eller första stycket.
- **mäta luftfuktighet** (210, 53 procent upp på tre månader) i en H2.
- **hygrometer wifi, digital, analog, trådlös och med app** (140, 110, 110, 70 och 10) i H2:n om typerna och i typtabellen. De får inga egna H2.
- **hygrometer kalibrering** (10) och "hygrometer noggrannhet" (ingen data) i H2:n om koksaltprovet.
- **hygrometer inomhus** (140 enligt 12.4) i brödtexten.
- **vilken hygrometer är bäst** (ingen data) och **hygrometer bäst i test** (210, körning 2) i en H2 om vad man ska titta efter. Den H2:n ger kriterier, inte en rangordning, och ordet "test" står inte i title, H1 eller rubriken.
- **hygrometer källare** (30) och **hygrometer krypgrund** (90) ägs av platssidorna. Här står de bara som ankare till `/fukt/fukt-i-kallaren/` och `/fukt/fukt-i-krypgrund/`.

### 3. Title

Ny sida. Krav: **högst 44 tecken**, och titeln börjar med **"Hygrometer"**. Förslag: "Hygrometer, så vet du att den visar rätt" (40) eller "Hygrometer, så mäter du luftfuktigheten rätt" (44). Ingen annan sida börjar med "Hygrometer".

### 4. Description

Krav: 120 till 155 tecken, **"hygrometer"** i första meningen, felmarginalen och koksaltprovet i sak. Förslag att mäta mot: "En hygrometer kan visa tio procentenheter fel. Så väljer du en som mäter rätt, var den ska sitta och hur du kontrollerar den med koksalt hemma." (143).

### 5. H1

Sidans löfte. Krav: säger vad läsaren får veta (om mätaren visar rätt, eller hur hon mäter rätt), och innehåller gärna "luftfuktighetsmätare". Delar inte de tre första orden med title och börjar inte med "Hygrometer,".

### 6. H2-struktur

`kortSvar`, tre till fem meningar som går att lyfta rakt av: vad en hygrometer mäter (relativ luftfuktighet), att en enkel mätare kan visa upp till tio procentenheter fel och mäter bäst mellan 20 och 80 procent (Boverket, namngiven), att läsaren kan kontrollera den med koksalt (75,3 procent vid 25 °C), och att ett medelvärde över en vecka säger mer än en avläsning.

1. **Vad hygrometern mäter** (kort). Relativ luftfuktighet i en mening, och att talet ändras med temperaturen utan att vattnet gör det. Länk till `/fukt/luftfuktighet-inomhus/` för relativ och absolut fuktighet i stället för att förklara dem igen.
2. **Analog, digital eller trådlös** (bär typfraserna). Tabell med typ, hur den mäter (hår, spiral, kapacitiv givare), noggrannhet enligt tillverkarens datablad, om den loggar och ungefärligt prisspann med butik och datum men utan länk. Wifi och app förklaras som loggning och avläsning på avstånd, vilket är det som betyder något i en krypgrund eller på en vind.
3. **Så exakt är hygrometern** (bär "noggrannhet"). Boverkets ±10 procentenheter för enkla instrument och bäst mellan 20 och 80 procent, att noggrannheten kan försämras över tid, och vad givartillverkarnas datablad anger för en kapacitiv givare (±2 till 3 procentenheter om faktabladet bär det). Skillnaden mellan felmarginal i databladet och i din mätare.
4. **Kontrollera hygrometern med koksalt** (bär "kalibrering"). Steg för steg: mättad koksaltlösning, sluten burk, tid, temperatur, avläsning och hur felet räknas bort. 75,3 procent vid 25 °C (Greenspan 1977 via OIML R121). Ett andra salt med lägre punkt (till exempel magnesiumklorid, cirka 33 procent) får stå om faktabladet har källa, så att läsaren ser felet i båda ändar av skalan. Säg att de flesta billiga mätare inte kan justeras och att man därför räknar bort felet.
5. **Mäta luftfuktighet: var och hur länge** (bär "mäta luftfuktighet"). Placering (inte vid ytterväggen, fönstret, elementet eller i solen, i rätt höjd), hur lång tid instrumentet behöver för att ställa in sig, Folkhälsomyndighetens regel om medelvärde över längre tid, och mätning där problemet finns. Länkar till krypgrunden och källaren för loggning i utrymmen man inte går in i.
6. **Vad talet på displayen betyder**. Kort: normalnivån per rum och årstid står på luftfuktighetssidan (länk), 75 procent i BFS 2024:8 gäller material och inte luften (T1, gemensamma faktabladet 1.3), och det som avgör är den kallaste ytan, med daggpunkten som förklaring (Verktygskort, punkt 10). Säg rakt ut att mögelgränser på 68 och 72 procent som står på produktsidor saknar källa, utan att namnge någon.
7. **Vilken hygrometer du behöver** (bär "vilken hygrometer är bäst"). Kriterier efter uppgift: en enkel digital mätare för bostaden, en loggande med min och max för källaren, en trådlös för krypgrunden och vinden, och kraven på mätområde, upplösning och angiven noggrannhet. Inga modeller rangordnas, och inga länkar går till butiker. Fuktmätare för trä och betong nämns i en mening som en annan sak; länken till `/fuktmatare/` läggs in när den sidan är publicerad (omgång C).
8. **Faq**, två eller tre frågor som inte upprepar H2 3 och 4, till exempel "Varför visar två hygrometrar olika?" och "Kan jag justera min hygrometer?".

Rubrikerna får formuleras om, gärna i frågeform där det faller sig naturligt.

### 7. Längd

Mål **1 600 till 2 300 ord**. Ettan har cirka 130 ord, och ettan på "mäta luftfuktighet" (Polarpumpen) cirka 1 000. Testsajterna på "bäst i test" har 5 500 till 8 000 ord utan egen mätning; den längden ska vi inte följa. Sidan ska vara kortare än luftfuktighetssidan.

### 8. Bilder

- **Huvudbild, krav: koksaltprovet** som skiss. En glasburk med lock, en skål med blött salt och hygrometern bredvid, med 75,3 procent på displayen. `bildAlt` högst 125 tecken, beskriver bilden och innehåller "hygrometer" och "koksalt". Spec till UX som `spec-skiss-hygrometer-koksalt-2026-10.md`. Hantverkaren skriver bildtexten med källan och temperaturen.
- **Valfri andra skiss:** var hygrometern ska sitta i ett rum (höjd, avstånd från yttervägg, fönster och element). Bara om H2 5 blir svår att följa utan bild.
- Typtabellen i H2 2 är en Markdown-tabell, inte en bild.
- Inga produktbilder.

### 9. Interna länkar

**Ut**, minst tre i brödtexten, högst en per H2:

- `/fukt/luftfuktighet-inomhus/` i H2 1 eller 6 (normalnivåerna per rum och årstid).
- `/fukt/fukt-i-krypgrund/` i H2 5 eller 7 (loggning över sommaren, var den hänger).
- `/fukt/fukt-i-kallaren/` i H2 5 eller 7.
- `/fukt/kondens-pa-fonster/` i H2 6, där den kallaste ytan nämns.
- `/rakna/daggpunkt/` via `<Verktygskort kalkylator="daggpunkt" />` i H2 6.
- `/fuktmatare/` **först i omgång C**, när sidan finns.

**In**, senast en vecka efter publicering (den här sidan har ingen inlänk i dag):

- `src/content/kunskap/fukt/luftfuktighet-inomhus.mdx`, den kortade koksalt-H2:n. Det är den viktigaste inlänken, och den läggs i samma omgång (se checklistan för utbyggnaden).
- `src/content/guider/fukt/fukt-i-krypgrund.mdx`, H2 "Mät fukten i krypgrunden själv", stycket som börjar "Hygrometern i krypgrunden ska logga" (rad 110), med ett ankare om att kontrollera att hygrometern visar rätt.
- `src/content/guider/fukt/fukt-i-kallaren.mdx`, raden "Häng en hygrometer där nere i en vecka" (rad 77) eller stycket under tabellen.
- `src/content/guider/fukt/avfuktare-garage.mdx`, stycket som börjar "Sätt en hygrometer i garaget" (rad 67).
- `src/content/guider/fukt/kondens-pa-fonster.mdx` (utbyggnaden i samma omgång).

### 10. Strukturerad data och komponenter

- `Article` via kunskapsmallen och `BreadcrumbList`. `FAQPage` bara om Faq finns, med samma text som syns.
- `kortSvar`, `bild`, `bildAlt`, `bildtext` och `kallor` i frontmatter. `produkter: []`, ingen `kategori`, inga `/go/`-länkar och ingen `Reklammarkning`.
- `<Verktygskort kalkylator="daggpunkt" />` en gång, i H2 6. Ingen inbäddad räknare; här ska läsaren inte räkna, bara förstå vart talet leder. Vill hantverkaren ha ett förval, gäller det förvalet för sovrummet, som länk i löptext.
- `kallor`: Boverket (risker med luftfuktighet, luftrörelser och drag), Folkhälsomyndigheten FoHMFS 2014:14, OIML R121 eller en annan källa för saltlösningarnas jämviktsfuktighet, givartillverkarens datablad och BFS 2024:8. Källor för prisspannen med butik och datum, utan att de länkas i brödtexten.

### 11. Ettan och Bättre än ettan

**Ettan (SERP 2026-09-30):** skogen.se, uppslagsordet "Hygrometer, luftfuktighetsmätare" ur Skogsencyklopedin (2000, senast ändrad 2023-03-22, cirka 130 ord). Den har en definition och typerna psykrometer, hårhygrometer, daggpunktshygrometer, halvledare och IR. Den har inga tal, ingen noggrannhet, inga nivåer och ingen kontroll av mätaren.

Tvåan till femman är butiker: Hornbach (sex produkter för 119 till 269 kr och nästan ingen text), Friska Hem (mögelgränser på 68 och 72 procent utan källa), Humidor Discount (för cigarrhumidorer, spiralhygrometer ±5 procent) och Elgiganten (oläst, enligt utdraget 40 till 60 procent och en mätare för 20 till 95 procent). På "hygrometer bäst i test" är ettan testexperterna.se (2025-10-27, cirka 6 000 ord, ingen egen mätning, ±2 till 3 procent utan källa, saltprovet utan målvärde). På "mäta luftfuktighet" är ettan Polarpumpen (cirka 1 000 ord, tre olika gränser utan källa och "gram väte per kubikmeter"). Ingen av dem har Boverkets ±10, saltprovets 75,3 procent eller skillnaden mellan luftens och materialets 75 procent.

Det ettan har som vi måste behålla eller överträffa:

1. Typerna av hygrometrar med hur de mäter. Vi tar de typer en husägare köper, i en tabell.
2. Ordet "luftfuktighetsmätare" som synonym, tidigt.

**Bättre än ettan** (krav; varje punkt kontrolleras i den färdiga sidan):

1. **Felmarginalen med myndighet som källa**: Boverkets ±10 procentenheter för enkla instrument, bäst mellan 20 och 80 procent, och att noggrannheten kan försämras över tid. Ingen i topp 5 har den.
2. **Koksaltprovet steg för steg med målvärdet**: 75,3 procent vid 25 °C med källa, hur lång tid det tar och hur felet räknas bort. Testsajten på plats ett för "bäst i test" beskriver provet utan målvärde, och ingen annan har det.
3. **Typtabell med noggrannheten ur tillverkarens datablad**, med analog, digital, loggande och trådlös, och vad var och en passar till. Butikerna har produkter utan specifikationer, och ordboken har typer utan tal.
4. **Placering och mättid med Folkhälsomyndighetens medelvärdesregel**, och var hygrometern hänger i krypgrunden och källaren (länkar). Ingen i topp 5 säger var den ska sitta.
5. **Talet kopplat till rätt gräns**: 75 procent i BFS 2024:8 gäller material och inte luft, normalnivåerna per årstid står med källa på luftfuktighetssidan, och daggpunkten avgör. Mögelgränserna 68 och 72 procent utan källa rättas i sak.

**Krav på faktabladet** (`underlag`, eget blad `docs/briefer/faktablad/kunskap-hygrometer.md`):

- Boverket, ordagrant: "Dessa mätare mäter ofta bra mellan 20 procent och 80 procent." och "+/- 10 procent" (gemensamma faktabladet 2.5).
- Saltlösningarnas jämviktsfuktighet: koksalt 75,3 procent vid 25 °C, och gärna också vid 20 °C, samt magnesiumklorid som andra punkt. Källa: OIML R121 eller Greenspan 1977 i original (läs om, det gemensamma faktabladet markerar den som ej läst om). Hur lång tid provet behöver och hur temperaturen påverkar det, med källa.
- Noggrannhet per typ ur datablad: minst en kapacitiv givare (till exempel Sensirions datablad för SHT-serien), en vanlig digital rumsmätare, en analog hårhygrometer och en loggande eller trådlös mätare. Märk tillverkarens uppgift som tillverkarens. Inga länkar till butiker.
- Prisspann per typ från två eller tre butiker, med datum. Används som spann i tabellen och inte som rekommendation.
- Folkhälsomyndighetens regel om medelvärden över längre tid och mätning där problemet misstänks, ordagrant (gemensamma faktabladet markerar den som ej läst om).
- Varifrån 68 och 72 procent kommer, om det går att spåra. Går det inte, skriver sidan att talen saknar källa.
- Inställningstid efter flytt mellan rum, ur ett datablad eller en bruksanvisning.

### 12. Fällor

- **Inga produktnamn med länk, inga annonslänkar och inget reklamband** (affiliatebeslutet). Modellnamn får stå i typtabellen som exempel på en datablad-uppgift, men aldrig som en rekommendation, och aldrig "bäst", "testvinnare" eller "vi testade".
- **"test", "mätt" och "jag testade"** står inte i title, H1 eller rubriker. Egna mätningar står bara på sidan om de är gjorda.
- **Rumstabellen och årstidsvärdena** ägs av `/fukt/luftfuktighet-inomhus/`. Här står en länk, inte en ny tabell.
- **Hygrometer i källare och krypgrund** ägs av platssidorna. Här står de som länkar.
- **Fuktmätare för trä och betong** ägs av `/fuktmatare/` (omgång C) och `/fukt/fuktmatning-betong/` (omgång E). En mening här räcker.
- **75 procent** skrivs aldrig som luftens gräns. Mögelgränserna 68 och 72 procent upprepas inte.
- **Polarpumpens "gram väte"**, testsajternas ±2 till 3 utan källa och Elgigantens 40 till 60 upprepas inte.
- **Kortsvaret och koksaltprovet får inte strykas.** De är det en AI citerar.
