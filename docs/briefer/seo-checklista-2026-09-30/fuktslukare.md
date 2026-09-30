# SEO-checklista, fuktslukare, startlista 6 omgång A, 2026-09-30

Omgång A i startlista 6 (`docs/SOKORDSANALYS.md` 12.7, rad A3; `docs/INNEHALLSARKITEKTUR.md` avsnitt 9). Ny sida. Frasen har vinnbarhet 5: hela topp 5 är butiker, och **ingen sida säger hur mycket vatten burken tar upp**. Svaret på frasen är ett tal, och det talet är sidans skäl att finnas. Hantverkaren läser checklistan före skrivningen, `underlag` läser punkt 11 och 12 innan faktabladet skrivs, och SEO och GEO-agenten läser den färdiga sidan mot samma lista.

Så här läses checklistan:

- **Underlag:** underlagsarbetarens SERP-läsning 2026-09-30 (topp 5 på "fuktslukare" och ettan på "fuktabsorberare"), volymerna i `docs/data/keyword-stats-2026-09-30-fukt-sorterad.tsv`, det gemensamma faktabladet `docs/briefer/faktablad/fukt-gemensamma-tal.md` och affiliatebeslutet `docs/briefer/affiliate-fukt-2026-09-30.md` (villkor 3 för hela klustret).
- **Sökverktyget svarar från USA.** Domänerna i topp 5 är kontrollerade genom att sidorna lästes, utom Office Depot, vars produkt svarar 404. Ordningen mellan dem är inte kontrollerad.
- **Title** räknas utan suffixet " · Hantverkstips".
- **Punkt 11** innehåller **Bättre än ettan** (krav) och **Krav på faktabladet**.

Tre saker som styr sidan:

1. **Affiliate: inget kort, inga annonslänkar och inget reklamband.** Fuktslukaren är en förbrukningsvara under 1 500 kr (affiliatebeslutet, villkor 3). Sidan länkar internt till köpguiderna för avfuktare, och det är där en köpknapp står. Den kommersiella delen av avsikten får sitt svar i jämförelsen mellan burk och avfuktare, inte i en produktlista.
2. **Talet kommer ur källa eller räkning, inte ur vägning.** Christian köper inga produkter (beslut 2026-09-30), så burken vägs inte. Mängden vatten tas ur tillverkarens uppgifter, säkerhetsdatabladet och kalciumkloridens kända förmåga att binda vatten vid olika luftfuktighet, med räkningen redovisad och märkt som egen.
3. **Säsong:** frasen toppar i november (3 600) och "fuktabsorberare" samma månad. Butikerna pekar på vinterförvaring (husvagn, husbil, båt, ouppvärmd sommarstuga) och imma i bilen. Sidan ska vara indexerad i slutet av oktober.

---

## /fukt/fuktslukare/

### 1. Adress och sidtyp

`/fukt/fuktslukare/` · `src/content/kunskap/fukt/fuktslukare.mdx` · samling **kunskap**, `typ: kunskap`, `pelare: fukt`, `plats: garage` (Garage och förråd, där sommarstugan och förrådet står), `niva: enkel`. Hubgrupp: Välj rätt. Det är en kunskapssida med köpråd i sak men utan produkter: `produkter: []`, ingen `kategori`.

Läsaren står i butiken eller har en burk i garderoben, sommarstugan eller bilen. Hon vill veta om den gör någon nytta, hur mycket den tar och när den inte räcker.

### 2. Huvudfras och sidofraser

**Huvudfras: fuktslukare, 1 600 per månad**, 14 procent upp på tre månader, topp i november (3 600). Vinnbarhet 5.

Sidofraser, med plats:

- **fuktabsorberare** (170, topp i november) i en H2 eller i första stycket, som samlingsnamn och för kiselgel. Ettan på ordet är Amazons bästsäljarlista med kiselgel, alltså en annan produktfamilj, och sidan ska skilja de två åt.
- **fuktslukare refill**, **fuktslukare garderob**, **fuktslukare sommarstuga**, **fuktslukare bil** och **fuktslukare husvagn** har ingen data i exporten. De står i brödtexten och i H2:n om var burken räcker, inte i rubriker.
- **hur mycket vatten tar en fuktslukare** har ingen data men är avsikten bakom frasen enligt SERP:en, och den står i H1 eller i en H2.

### 3. Title

Ny sida. Krav: **högst 44 tecken**, och titeln börjar med **"Fuktslukare"**. Förslag: "Fuktslukare, så mycket vatten tar burken" (40) eller "Fuktslukare, hur mycket vatten burken tar" (41). Ingen annan sida börjar med "Fuktslukare".

### 4. Description

Krav: 120 till 155 tecken, **"fuktslukare"** i första meningen, talet eller löftet om talet, och gränsen mot avfuktaren. Förslag att mäta mot: "En fuktslukare med kalciumklorid tar upp vatten tills saltet är upplöst. Så mycket tar burken, var den räcker och när du behöver en avfuktare i stället." (152). Byt mot det faktiska talet när faktabladet har det, om det ryms.

### 5. H1

Sidans löfte. Krav: svarar på frågan om mängden eller om burken räcker. Delar inte de tre första orden med title och börjar inte med "Fuktslukare,".

### 6. H2-struktur

`kortSvar`, tre till fem meningar som går att lyfta rakt av: vad burken innehåller (kalciumklorid), hur mycket vatten en burk eller påfyllning tar upp totalt med källa och villkor (luftfuktighet, temperatur), hur länge det räcker i ett stängt utrymme, och att den inte klarar ett utrymme där fukten hela tiden kommer in, som en källare eller en krypgrund, där en avfuktare tar mer på ett dygn än burken tar på hela sin livstid (om talen bär det).

1. **Hur mycket vatten en fuktslukare tar upp** (bär frågan). Talet med källa: tillverkarens uppgift, säkerhetsdatabladets innehåll och kalciumkloridens jämviktskurva. Gärna en tabell över hur mycket vatten ett kilo kalciumklorid binder vid 50, 60, 70 och 80 procent luftfuktighet, och vad det blir för en vanlig påfyllning på 450 gram. Räkningen redovisas och märks som egen.
2. **Vad som händer i burken** (bär "fuktabsorberare"). Kalciumklorid tar upp vatten tills saltet har löst sig, och därför samlas saltlösning i botten. Under vilken luftfuktighet saltet slutar dra åt sig vatten, med källa. Kiselgel och andra fuktabsorberare som går att torka om, och varför de passar för små slutna utrymmen som en verktygslåda eller en kamerväska.
3. **Burken mot avfuktaren**. Tabell med vad en burk eller påfyllning tar totalt, vad den kostar per liter upptaget vatten, och vad en liten kondens- och sorptionsavfuktare tar per dygn enligt datablad och kostar i el per liter. Allt räknat med redovisad formel. Här står `<Verktygskort kalkylator="avfuktare" />`.
4. **Där burken räcker och där den inte gör det**. Garderoben, bilen, en båt eller husvagn i vinterförvaring och en stängd sommarstuga, mot källaren, krypgrunden och garaget där uteluften hela tiden bär in nytt vatten. Förklaringen till att "räcker till 15 m²" är fel mått: det är mängden vatten som kommer in som avgör, inte ytan. Länkar till köpguiderna för garage och källare.
5. **Säkerhet och spill**. H319 (allvarlig ögonirritation) ur säkerhetsdatabladet, att vätskan är saltlösning som fräter på metall och fläckar trä och textil, och hur burken töms. Barn och husdjur enligt databladet.
6. **Faq**, två eller tre frågor som inte upprepar H2 1 och 4, till exempel "Kan man torka och återanvända fuktslukaren?", "Hjälper en fuktslukare mot mögellukt?" och "Varför är burken full på en vecka i källaren?".

Rubrikerna får formuleras om, gärna i frågeform där det faller sig naturligt.

### 7. Längd

Mål **1 200 till 1 800 ord**. Topp 5 är butikssidor med 90 till 400 ord, och den längsta texten är Biltemas kategorisida med Faq. Sidan ska vara kort, med talet högst upp och tabellen i H2 3.

### 8. Bilder

- **Huvudbild, rekommenderad:** fuktslukaren i genomskärning, med saltet i den övre korgen, saltlösningen i botten och fuktig luft som går in genom locket. `bildAlt` högst 125 tecken, beskriver bilden och innehåller "fuktslukare". Spec till UX som `spec-skiss-fuktslukare-2026-10.md` om hantverkaren vill ha den. Sidan klarar sig utan bild om tabellerna bär den.
- Tabellerna i H2 1 och 3 är Markdown-tabeller, inte bilder.
- Inga produktbilder.

### 9. Interna länkar

**Ut**, minst tre i brödtexten, högst en per H2, och högst en per H2 till en köpguide:

- `/fukt/avfuktare-garage/` i H2 4 (förrådet, garaget och sommarstugan är dess sidofraser).
- `/fukt/avfuktare-kallare/` i H2 3 eller 4.
- `/fukt/luftfuktighet-inomhus/` där sidan säger vilken luftfuktighet som är normal.
- `/fukt/hygrometer/` där sidan säger att läsaren ska mäta före och efter.
- `/rakna/avfuktare/` via `<Verktygskort>` i H2 3.
- `/rakna/daggpunkt/` med förvalet för garage, förråd och uthus som länk i löptext i H2 4, om det passar.

**In**, senast en vecka efter publicering:

- `src/content/guider/fukt/avfuktare-garage.mdx`, där sommarstugan eller förrådet behandlas, med ett ankare om burken och varför den inte räcker.
- `src/content/guider/fukt/avfuktare-kallare.mdx`, en mening i avsnittet om märkt kapacitet eller i Faq, för den som överväger en burk.
- `src/content/kunskap/fukt/sorptionsavfuktare.mdx` eller `src/content/guider/fukt/fukt-i-kallaren.mdx`, en mening.

### 10. Strukturerad data och komponenter

- `Article` via kunskapsmallen och `BreadcrumbList`. `FAQPage` bara om Faq finns, med samma text som syns.
- `kortSvar`, `bild` (om den görs), `bildAlt`, `bildtext` och `kallor`. `produkter: []`, ingen `kategori`, inga `/go/`-länkar och ingen `Reklammarkning`.
- `<Verktygskort kalkylator="avfuktare" />` en gång.
- `kallor`: säkerhetsdatabladet, tillverkarens uppgift, källan för kalciumkloridens jämviktskurva, avfuktarnas datablad och butikerna för priserna, med datum.

### 11. Ettan och Bättre än ettan

**Ettan (SERP 2026-09-30):** biltema.se, produktsidan för artikel 36-6811 "Fuktslukare" (79,90 kr, **utgången**). Den har faroangivelsen H319, texten "kan hängas t ex i bil, båt och dynlåda" och ingen specifikation. Tvåan är Biltemas kategorisida (cirka 400 ord, Faq med två frågor). Den säger kalciumklorid, att burken räcker "flera veckor till några månader", och anger storlekar per yta (12 till 15, 15 till 20, 35 till 40 och 50 till 60 m²) för 29,90 till 119 kr, utan att säga vid vilken luftfuktighet de gäller. Rusta anger att en påfyllning räcker 1 till 3 månader och att man kan sänka värmen 2,5 °C med 15 procent lägre luftfuktighet, utan källa. Clas Ohlsons produkt är utgången och anger "upp till 6 m2" och en påfyllning på 2 × 100 gram. **Ingen sida anger hur mycket vatten burken tar**, varken per dygn eller totalt.

Det ettan har som vi måste behålla eller överträffa:

1. Platserna där burken används: bil, båt, husvagn, garderob och sommarstuga.
2. Innehållet (kalciumklorid) och varningen för ögonirritation.
3. Hur länge en påfyllning håller, nu med villkoren som avgör det.

**Bättre än ettan** (krav; varje punkt kontrolleras i den färdiga sidan):

1. **Hur mycket vatten burken tar upp, som ett tal med källa och villkor**: per påfyllning eller per kilo kalciumklorid, vid angiven luftfuktighet. Ingen sida i topp 5 har det.
2. **Tabell burk mot avfuktare**: liter totalt mot liter per dygn och kronor per liter, med räkningen redovisad och märkt som egen. Ingen konkurrent jämför.
3. **Varför ytan är fel mått**, och var burken räcker och inte räcker, kopplat till var fukten kommer ifrån. Butikerna säljer burken per kvadratmeter.
4. **Kemin i klartext med källa**: kalciumklorid mot kiselgel, varför det blir vätska i burken och under vilken luftfuktighet saltet slutar verka. Det besvarar också "fuktabsorberare".

**Krav på faktabladet** (`underlag`, eget blad `docs/briefer/faktablad/kunskap-fuktslukare.md`):

- Säkerhetsdatabladet för minst en vanlig fuktslukare eller påfyllning (Clas Ohlson länkar till ett; Biltema, Torrbollen eller Unibond Aero 360 går också): ämne, halt och faroangivelser, ordagrant.
- Tillverkarens uppgift om upptagen mängd, om någon tillverkare anger den (Unibond, Rubson, Torrbollen). Torrbollens egen Faq gick inte att läsa 2026-09-30; försök igen.
- Kalciumkloridens förmåga att binda vatten vid olika relativ luftfuktighet och temperatur, ur en tillverkares tekniska handbok (till exempel OxyChems eller Tetras handbok för kalciumklorid) eller en lärobok. Deliquescenspunkten, alltså den luftfuktighet där saltet börjar lösas upp, med källa.
- Om faktabladet inte hittar en källa för upptagen mängd: räkna ut den ur jämviktskurvan och påfyllningens vikt, redovisa formeln och märk den EGEN. Hittas ingen kurva heller, skriver sidan att talet saknas, och bättre-än-ettan-punkt 1 går tillbaka till SEO för ett nytt beslut innan texten skrivs.
- Avfuktare för jämförelsen: liter per dygn och effekt för en liten kondens- och en liten sorptionsavfuktare ur datablad (de finns i klustrets faktablad och i databasen), och elpriset räknat som i `/rakna/elkostnad/`.
- Priser per burk och per påfyllning från två eller tre butiker, med datum.
- Kiselgel: hur mycket vatten den tar i förhållande till sin vikt och vid vilken temperatur den torkas om, med källa.

### 12. Fällor

- **Inga produktkort, köpknappar, annonslänkar eller reklamband.** Burkarna nämns som typ, inte som märke med länk.
- **Rustas påstående om 2,5 grader** upprepas inte som fakta. Sidan får säga i sak att burken inte gör rummet varmare, men butiken namnges inte.
- **Ytangivelserna i kvadratmeter** från butikerna står inte som sajtens tal.
- **Avfuktarvalet** ägs av köpguiderna och `/luftavfuktare/`. Här står jämförelsen i kronor och liter, inte vilken maskin läsaren ska köpa.
- **Husvagn och båt** är inte med i klustret (12.4). De får nämnas i en mening som platser där burken används, men de får inga egna avsnitt och inga sidofraser i rubriker.
- **Mögellukt** ägs av `/fukt/mogellukt/` (omgång C). En Faq-fråga får säga att burken tar fukt och inte lukt, men den länkar inte förrän sidan finns.
- **Talet i kortsvaret får inte strykas.** Det är sidans skäl att finnas och det en AI citerar.
