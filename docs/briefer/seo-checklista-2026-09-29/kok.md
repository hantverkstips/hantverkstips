# SEO-checklista, köksklustret, 2026-09-29

En justerad sida och tre nya i pelaren Kök (`kok`, som byter namn från "Kök och badrum", beslut 1 och 3 i SOKORDSANALYS 8.9): olja och slipa bänkskiva, måla köksluckor, måla kakel (flyttad från Badrum 2026-09-29, beslut 5) och byta köksluckor. Räknaren `/rakna/kok-kostnad/` har sin checklista i `raknare.md`. Med `/rakna/rotavdrag/` och `/rakna/kvadratmeter/` har Kök fem sidor efter `/kok/mala-kakel/`, sex efter `/kok/byta-koksluckor/` och sju med kostnadsräknaren, så hubben kan publiceras.

Så här läses checklistan:

- **Underlag:** SERP-läsningen i SOKORDSANALYS 8.2 (Kök), volymerna i `docs/keyword-stats-2026-09-28.csv`, affiliatebeskedet i 8.6.
- **Ordningen i topp 5 är osäker**, eftersom sökverktyget svarar från USA. Hornbachs projektsidor gav bara menyer och är olästa, trots att de ligger i topp 5 på tre fraser. Underlag läser dem i webbläsare innan faktabladet skrivs.
- **Title** räknas utan suffixet " · Hantverkstips". 44 tecken är kravet om frasen tillåter det.
- **Punkt 11** innehåller **Bättre än ettan** (krav) och **Krav på faktabladet**.

Fyra saker gäller alla fyra sidor:

1. **Köket är säljarnas.** Köksfirmor, luckfabrikanter och offertförmedlare fyller varje fras, och ingen skriver för den som gör jobbet själv. Sidorna skriver för den som gör det själv, med tal från tillverkarnas datablad.
2. **Kök är den enda av de tre nya pelarna som bär produkter** (8.6): färgspruta, excenterslip, cirkelsåg och överfräs. Varje kort godkänns av affiliateagenten innan sidan publiceras, och reklambandet står ovanför första kortet.
3. **Rotavdraget** är 30 procent av arbetet, högst 50 000 kr per person och år och 75 000 kr gemensamt med rut (Skatteverket, från 1 januari 2026). Clas Fixare anger fortfarande 75 000 kr som rot-tak. Det nämns inte, men sidorna har rätt tal.
4. **`src/content/pelare/kok.mdx`** byter `title` till "Kök", och description och ingress skrivs om så att de inte lovar våtrum eller tätskikt (beslut 1). Det görs i samma commit som registerändringen, före första nya köksidan.

---

## /kok/slipa-bankskiva/ (justering)

### 1. Adress och sidtyp

`/kok/slipa-bankskiva/` · `src/content/guider/kok/slipa-bankskiva.mdx` · publicerad 2026-09-16 · `typ: projektguide`, `niva: enkel`. Adress, H1 och sidtyp rörs inte. Beslut 3 i SOKORDSANALYS 8.9: sidan ska äga både "olja bänkskiva" och "slipa bänkskiva".

### 2. Huvudfras och sidofraser

**Huvudfras: olja bänkskiva, 590 per månad**, −33 procent på ett år, jämn med en svacka i juni. Avsikten med varianterna är 720 (ek 90, mörkare 30, torktid 10). Vinnbarhet 4.

**Andra fras: slipa bänkskiva**, 210 i körning 1, plus slipa bänkskiva ek 110 och för hand 10. Frasen står kvar i H1.

Sidofraser, med plats:

- **olja bänkskiva ek** (90) i en H2 eller H3 om ek.
- **olja bänkskiva torktid** (10) finns redan i oljetabellen. Kolumnrubriken ska säga torktid.
- **olja bänkskiva mörkare** (30) som Faq-fråga.

### 3. Title

Nu: `seoTitle: Slipa bänkskiva i trä, rätt korn och rätt olja`, 47 tecken. Suffixet läggs inte på.

Krav: börjar med **Olja bänkskiva** och innehåller **slipa**. Högst 60 tecken, helst högst 44. Ingen annan sida börjar med "Olja".

### 4. Description

Nu: 153 tecken och börjar med "Slipa bänkskiva i trä".

Krav: **120 till 155 tecken**, med både olja och slipa, och olja före slipa. Ska lova vilken olja, hur många lager och torktid innan bänken används, och sista kornet.

### 5. H1

**Rörs inte.** "Slipa bänkskiva i trä och sluta tidigare än du tror" bär slipa-frasen och delar inte de tre första orden med den nya seoTitle.

### 6. H2-struktur

Sidan har sju H2. Ändringarna är två:

- H2:n "Olja bänkskivan tunt och torka bort allt som blir över" bär redan frasen i böjd form. Den behålls.
- **Ny H3 eller kort H2 om ek**: vilken olja som passar ek, och varför ek blir svart av järn (det står redan i feltabellen, men frågan "olja bänkskiva ek" ska få ett svar i en rubrik). **Bär olja bänkskiva ek.**

Kortsvaret nämner i dag olja i andra stycket. Det räcker. Kortsvaret skrivs inte om.

Faq: lägg till "blir bänkskivan mörkare av olja?" om faktabladet har ett svar från en tillverkare. **Bär olja bänkskiva mörkare.**

### 7. Längd

I dag cirka 2 100 ord med frontmatter. Tillägget är högst 200 ord.

### 8. Bilder

Rörs inte.

### 9. Interna länkar

**Ut**, nytt krav: `/kok/mala-koksluckor/` där luckorna nämns, om ett naturligt ställe finns. Annars ingen ny länk.

**In** finns redan från `/golv/renovera-trappa/` och `/inomhus/bygga-innervagg/`. Nytt krav: `/kok/byta-koksluckor/` eller `/kok/mala-koksluckor/` länkar hit där bänkskivan nämns.

### 10. Strukturerad data och komponenter

`Article` med `dateModified` från `uppdaterad`, som ska sättas till ändringsdagen. Varningsrutan om trasorna och oljetabellen behåller sin form.

### 11. Ettan och Bättre än ettan

Topp 5 för "olja bänkskiva": gds.se (2026-08-05, Flemming Rasmussen), byggahus.se (forum), colorama.se (produktsida), lovelyhome.se, gebenna.com. För "slipa bänkskiva" delvis samma adresser. **Ettan: gds.se.** Sidan har cirka 1 200 ord och nio bilder, med korn 80, 120 och 180 och 15 minuter mellan lagren, men ingenting om ek, ingenting om självantändning och inga källor.

Det ettan har som vi måste ha: bilder på momenten (vi har skissen över kornen) och intervallet för underhåll.

**Bättre än ettan** (krav, de tre första finns redan och får inte strykas):

1. **Oljetabellen med torktid per fabrikat och datum.** Finns.
2. **Varningen för självantändande trasor**, med en myndighetskälla utöver tillverkarna. Varningen finns, men myndighetskällan är ny.
3. **Feltabellen med svarta fläckar på ek.** Finns.
4. **Svaret på vilken olja som passar ek**, med tillverkarens källa. Nytt.

**Krav på faktabladet** (`docs/briefer/faktablad/guider-slipa-bankskiva.md`, tillägg):

- **Myndighetskälla för självantändning** av trasor med torkande olja: MSB eller Räddningstjänsten, med adress och datum.
- Vad två tillverkare säger om olja på ek, och om oljan gör träet mörkare.

### 12. Fällor

- **H1 och URL rörs inte.** Två sidor på sajten länkar hit med ankare om slipning.
- Sidan är publicerad och skriven i rösten. Hantverkaren rättar bara det checklistan pekar på (`ny-sida` steg 6, kirurgiska varv).

---

## /kok/mala-koksluckor/

### 1. Adress och sidtyp

`/kok/mala-koksluckor/` · `src/content/guider/kok/mala-koksluckor.mdx` · samling **guider**, `typ: projektguide`, `pelare: kok`, `niva: enkel`. Hubgrupp: Gör det själv. Produktkort för färgspruta eller excenterslip om affiliateagenten godkänner det, med reklamband.

Läsaren vill ge köket nytt liv utan att byta luckor och undrar om det håller, hur det görs och vad det kostar mot att lackera.

### 2. Huvudfras och sidofraser

**Huvudfras: måla köksluckor, 2 900 per månad**, −33 procent på ett år. Toppen är september och oktober (3 600) och januari. Vinnbarhet 4. Avsikten med varianterna är 4 940.

Sidofraser, med plats:

- **måla köksluckor själv** (1 300) i H1 eller kortsvaret.
- **måla köksluckor pris** (590) i H2:n om kostnad.
- **måla köksluckor färg** (110) i H2:n om färgval.
- **måla köksluckor med roller** (10) och **med linoljefärg** (30) i H2:n om verktyg eller som Faq-frågor.

### 3. Title

Krav: **högst 44 tecken**, börjar med **Måla köksluckor**. Löftet: vad som håller, eller vilket material som går att måla. Delar inte de tre första orden med `/kok/mala-kakel/`.

### 4. Description

Krav: **120 till 155 tecken.** Ska lova att sidan börjar med luckans material, korn och antal strykningar, härdningstid innan köket används, och vad det kostar mot att lackera.

### 5. H1

Krav: löftet. Delar inte de tre första orden med title.

### 6. H2-struktur

0. **Kortsvaret**: målade köksluckor håller om ytan tvättas fri från fett, slipas matt och grundas med rätt grundfärg för materialet. Två strykningar av en färg för snickerier, med övermålningstid och härdning ur databladet. Laminat och folie kräver en särskild grundfärg eller går inte alls.
1. **Går min lucka att måla?** Massivt trä, målad MDF, laminat, folie och högblankt, med besked per material ur färgtillverkarens anvisning. Ingen i topp 5 börjar här.
2. **Så gör du, steg för steg.** Märk och ta ner, tvätta bort fett, slipa (korn), grunda, två strykningar, tider. **Bär måla köksluckor själv.**
3. **Roller, pensel eller färgspruta.** Vad som ger jämnast yta, tid och kostnad. Produktkortet står här om det godkänns. **Bär måla köksluckor med roller.**
4. **Vilken färg.** Typ (alkyd, akrylat, linolja), glans, tålighet, med datablad. **Bär måla köksluckor färg.**
5. **Vad det kostar mot att lackera eller byta.** Material för ett kök i egen regi, målare på plats, sprutlackering, med källa och datum och rotavdraget. Länk till kostnadsräknaren och till bytessidan. **Bär måla köksluckor pris.**

Faq: måla stommen också, byta gångjärn samtidigt, hur länge innan luckorna kan hängas upp.

### 7. Längd

Mål **1 300 till 1 600 ord** plus Faq. Alcro har cirka 1 200 ord. Längden motiveras av materialavsnittet och kostnadsjämförelsen, som ingen har.

### 8. Bilder

- **Skiss** av en lucka på bockar, med ordningen slipa, grunda och måla, och kanterna först. Alt högst 125 tecken med orden måla köksluckor. Korn och tider står i bildtexten.

### 9. Interna länkar

**Ut**, alla är krav:

- `/kok/byta-koksluckor/` i kostnadsavsnittet: när byte är billigare.
- `/rakna/kok-kostnad/` som `<Verktygskort kalkylator="kok-kostnad" />` i kostnadsavsnittet.
- `/kok/slipa-bankskiva/` där bänkskivan nämns.
- `/kok/mala-kakel/` där kaklet mellan skåpen nämns.

**In**, krav:

- `/kok/byta-koksluckor/` och `/kok/slipa-bankskiva/`.
- `/kok/mala-kakel/`, där skåpen nämns.

### 10. Strukturerad data och komponenter

`Article`, `BreadcrumbList` Hantverkstips / Kök / sidan, `FAQPage` bara med riktig Faq. Produktkortet ger ingen `Product`-markup. `kallor` med färgtillverkarna, prisernas källor och Skatteverket.

### 11. Ettan och Bättre än ettan

Topp 5: alcro.se (flyttad till alcrostudio.se), hornbach.se (oläst), nordsjo.se, bygghemma.se, dinbyggare.se. För varianten själv ligger Bolist, Hornbach, gds, Bygghemma och Dinbyggare. **Ettan: alcro.se** (Maria Soxbo), cirka 1 200 ord och åtta steg, men inget datum, ingen kornstorlek, ingenting om laminat eller folie, ingen härdningstid i dagar och inget pris. Bolist är den enda i fältet med korn (120 och 160).

Det ettan har som vi måste ha:

- Stegen i rätt ordning med bilder eller skiss.
- En namngiven färgtyp för snickerier och två strykningar.

**Bättre än ettan** (krav):

1. **Besked per luckmaterial**: trä, MDF, laminat, folie, högblankt, med källa.
2. **Korn, övermålningstid och härdningstid ur datablad**, med fabrikat och datum.
3. **Kostnaden mot lackering och byte** i kronor för samma kök, med källa och datum och rotavdraget rätt.
4. **Roller mot färgspruta** med ett besked.
5. **Skiss** av ordningen på luckan.

**Krav på faktabladet** (`docs/briefer/faktablad/guider-mala-koksluckor.md`):

- Datablad för två snickerifärger och två grundfärger för svåra underlag (laminat, melamin): korn, övermålning, härdning.
- Prisexempel för målare på plats och sprutlackering per lucka från två källor som går att läsa, med datum. Leadhives 350 och 600 kr per lucka får vara den ena.
- Materialkostnad för ett kök med 16 luckor i egen regi, räknad av underlag och märkt som egen räkning.
- Hornbachs projektsida läst i webbläsare.

### 12. Fällor

- **Ingen härdningstid utan fabrikat.**
- **Kortet** står efter texten om verktyget, aldrig före kortsvaret.
- Alcro nämns bara som färgtillverkare med datablad, inte som konkurrent.

---

## /kok/mala-kakel/

Flyttad från badrumspelaren 2026-09-29 (SOKORDSANALYS 8.9, beslut 5). Faktabladet `docs/briefer/faktablad/guider-mala-kakel.md` gäller, men dess rader om pelare, slug och tabellraden för våtzon 2 ersätts av den här checklistan.

### 1. Adress och sidtyp

`/kok/mala-kakel/` · `src/content/guider/kok/mala-kakel.mdx` · samling **guider**, `typ: projektguide`, `pelare: kok`, `niva: enkel`. Hubgrupp: Gör det själv. Produktkortet för excenterslip är struket (punkt 12).

Läsaren vill fräscha upp kakel utan att riva. Sidan är en guide för köket och torra rum, och den säger nej till badrummet med skälen. Båda svaren står på samma sida, eftersom Google visar samma topp 5 för "måla kakel", "måla kakel kök" och "måla kakel badrum", och en separat badrumssida med bara ett nej vore för tunn.

### 2. Huvudfras och sidofraser

**Huvudfras: måla kakel, 2 400 per månad**, −33 procent på ett år, toppmånad september och oktober (3 600). Vinnbarhet 4. Avsikten med varianterna är 4 510.

Sidofraser, med plats:

- **måla kakel kök** (880, +14 procent) i H1 eller kortsvaret och i stegavsnittet.
- **måla kakel badrum** (1 000, +48 procent) i en egen H2 om badrummet, med ett nej.
- **måla kakel i dusch** (140) i samma H2.
- **måla kakelfogar** (90, +80 procent) i en H2 eller H3 om fogarna.

### 3. Title

Krav: **högst 44 tecken**, börjar med **Måla kakel**. Löftet ska säga var det går: i köket och i torra rum, men inte i badrummet. Delar inte de tre första orden med `/kok/mala-koksluckor/` ("Måla köksluckor") eller `/fasad/mala-om-huset/` ("Måla om huset").

### 4. Description

Krav: **120 till 155 tecken.** Ska lova hur kaklet i köket målas så att det håller (fett, mattning, grund, två strykningar), och ett rakt besked om varför badrummet inte går.

### 5. H1

Krav: löftet med köket. Delar inte de tre första orden med title.

### 6. H2-struktur

0. **Kortsvaret**: kakel i köket och i torra rum som en gästtoalett utan dusch går att måla med kakelfärg, om fett och skurmedelsrester tvättas bort, ytan mattas och två strykningar får härda. I badrummet går det inte, varken i duschen eller på väggarna utanför. Måleribranschens regler för våtrum (MVK), som gäller från 1 januari 2026, kräver att kakel tas bort före ett målat våtrumssystem i båda zonerna. Beckers, Alcro, Flügger och Caparol avråder själva från det.
1. **Var det går och var det inte gör det.** Tabell med rubrikrad: yta, besked, villkor. Kök ja, torra rum ja, badrum våtzon 2 (väggar utanför duschen och taket) nej, våtzon 1 nej, golv nej. Källorna står på en rad under tabellen (MVK 2026 s. 7 till 9 för zonerna och s. 19 för ommålningen, tillverkarnas datablad, MVK:s FAQ om golv).
2. **Så målar du kaklet i köket, steg för steg.** Tvätta bort fett och skurmedel, matta ytan, grunda om färgen kräver det, två strykningar. Tider ur databladen, och rengöring tidigast efter ungefär en månad (Beckers). **Bär måla kakel kök.**
3. **Värmen bakom hällen.** Beckers Ceramic Tile klarar ungefär 60 till 70 grader enligt Beckers eget kundforum (2024-01-02). Avstånd till gasspis och öppen låga saknas hos alla tillverkare, vilket sidan säger.
4. **Varför inte i badrummet.** MVK:s ommålningsregel (s. 19): ett underlag som inte är avsett att måla på, "t.ex. våtrumstapet, väggmatta eller kakel", ska avlägsnas helt, och det gäller både VT och VA. Taket räknas också till våtzon 2. Tillverkarna avråder. Försäkringsbolagen kräver att våtrummet följer branschreglerna. Att det påverkar ersättningen är vår slutsats och märks så, eftersom inget bolag nämner målat kakel. Alternativen står med länkar: våtrumsfärg på ny skiva, kakel och målat system på samma vägg med ungefär 30 mm överlapp mot kakelns tätskikt, våtrumsmatta, nytt kakel. **Bär måla kakel badrum och måla kakel i dusch.**
5. **Fogarna.** I köket målas fogarna med pensel före rollern. Silikonfogen tas bort och ersätts, eftersom silikon inte går att måla över (Beckers, MVK tabell 3). **Bär måla kakelfogar.**

Faq: hur länge det håller, om man kan ta bort färgen igen, om kakel i tvättstugan går. Svaret på det sista är nej, eftersom MVK räknar tvättstugans väggar till våtzon 2.

### 7. Längd

Mål **1 100 till 1 400 ord** plus Faq. Ettan är en kort amatörguide. Proffsmagasinet har cirka 1 200 ord. Tabellen och badrumsavsnittet bär längden.

### 8. Bilder

- **Skiss** av en köksvägg med stänkskyddskakel mellan bänk och överskåp, och ordningen tvätta, matta, grunda och måla. Alt högst 125 tecken med orden måla kakel och kök.
- Ingen badrumsskiss. Badrummet är ett nej och behöver ingen bild.

### 9. Interna länkar

**Ut**, alla är krav:

- `/kok/mala-koksluckor/`, där skåpen nämns.
- `/rakna/kvadratmeter/` som `<Verktygskort kalkylator="kvadratmeter" />` där färgmängden nämns.
- `/badrum/vatrumsfarg/` i badrumsavsnittet: vad som gäller i stället.
- `/badrum/tatskikt-badrum/` i badrumsavsnittet: zonerna och försäkringen.

**In**, krav:

- `/kok/mala-koksluckor/`, där kaklet mellan skåpen nämns.
- `/badrum/vatrumsfarg/`, i avsnittet om kakel.
- `/badrum/fogar-badrum/`, där målade fogar nämns.

### 10. Strukturerad data och komponenter

`Article` med Christian som `author`, `BreadcrumbList` Hantverkstips / Kök / sidan, `FAQPage` bara med riktig Faq. `kallor` med MVK 2026, tillverkarnas datablad, Beckers kundforum och försäkringsbolagen. Inget produktkort och inget reklamband.

### 11. Ettan och Bättre än ettan

Topp 5: clasfixare.se, bygg.se (oläst), hornbach.se (bara menyer), stuvbutiken.com, proffsmagasinet.se. **Ettan: clasfixare.se**, en kort guide utan zoner, torktider, datum och författare. Flera lead-sidor som läsaren också hittar (bostadsaffarer.se, sparapengarna.se, hemkunskapen.se) påstår utan källa att målat kakel i badrummet inte påverkar tätskiktet eller försäkringen. Det är påståendet sidan svarar på, utan att nämna dem.

Det ettan har som vi måste ha:

- Tvätta, slipa eller matta, grunda och måla, i den ordningen.
- En lista över vad som behövs.

**Bättre än ettan** (krav):

1. **Besked per yta i en tabell**, med MVK 2026 som källa: kök och torra rum ja, allt i badrummet nej, golv nej.
2. **MVK:s ommålningsregel citerad med sidnummer och datum**, och att den gäller både VT och VA.
3. **Fyra tillverkare som själva avråder** från kakel i våtrum, med datablad och datum.
4. **Värmegränsen bakom hällen och rengöringen efter en månad**, med källa.
5. **Alternativen i badrummet** med länkar, inklusive överlappet på cirka 30 mm när kakel och målat system möts på samma vägg.

### 12. Fällor

- **Inget "ja med villkor" för badrummet**, inte heller för väggarna utanför duschen eller för taket.
- **Proffsmagasinet nämns inte och länkas inte**, inte heller i `kallor` (beslut 4).
- **Produktkortet för excenterslip stryks.** Ingen färgtillverkare nämner en maskin för kakel. Tillverkarna talar om mattning och fint våtslippapper, så en excenterslip vore vårt eget resonemang som bär en köpknapp. Det uppfyller inte AFFILIATE.md avsnitt 1: "kortet motiveras av texten runt det".
- **Försäkringskopplingen märks som vår slutsats.** Inget bolag nämner målat kakel.
- **Folksams självrisk på 3 000 kr** finns bara som utdrag och får inte stå.
- **Inget råd om gasspis** och avstånd till öppen låga. Källa saknas.


### Beslut efter utkastet, 2026-09-29

Utkastet `src/content/guider/kok/mala-kakel.mdx`: seoTitle "Måla kakel i köket, men aldrig i badrummet" (42 tecken), H1 "Kakelfärg på köksväggen som tål fett och disktrasa", cirka 1 580 ord brödtext utan tabeller.

1. **Längden godkänns.** 1 580 ord ligger 180 över målet, och det är badrumsavsnittet och gästtoalettens undantag som bär skillnaden. Båda är krav. Målet för sidan höjs till högst 1 600 ord brödtext, och inget ska kortas.
2. **Stil-och-design gäller.** Källan står på en rad under tabellen, aldrig som kolumn. Punkt 6.1 är rättad, och samma rättelse är gjord i alla tabeller i de fyra checklistorna. Kravet på källa per besked står kvar. Raden under tabellen ska räcka för att läsaren ser vilken källa som bär vilket besked, till exempel genom att nämna ytan vid källan.
3. **Sidnummer:** zonerna står på s. 7 till 9 i MVK 2026, taket i våtzon 2 på s. 8 och ommålningsregeln på s. 19. Underlag läste PDF:en, och uppgifterna finns i båda faktabladen. Checklistan är rättad från "s. 8 och 19" till "s. 7 till 9 och s. 19". Ingen ny kontroll behövs.

Title och H1 kontrolleras här eftersom de är nya: seoTitle börjar med "Måla kakel", ryms inom 44 tecken så att suffixet läggs på, och delar inte de tre första orden med H1, `/kok/mala-koksluckor/` eller `/fasad/mala-om-huset/`. Godkänt.

---

## /kok/byta-koksluckor/

### 1. Adress och sidtyp

`/kok/byta-koksluckor/` · `src/content/guider/kok/byta-koksluckor.mdx` · samling **guider**, `typ: projektguide`, `pelare: kok`, `niva: mellan`. Hubgrupp: Gör det själv. Inget produktkort i första versionen. Affiliateagenten avgör om en borrskruvdragare hör hemma i "Det här behöver du".

Sidan är värdartikel för `/rakna/kok-kostnad/` (`raknare.md`). Läsaren har ett kök med hela stommar och vill veta om nya luckor passar, hur man mäter och vad det kostar.

### 2. Huvudfras och sidofraser

**Huvudfras: byta köksluckor, 1 000 per månad**, −32 procent på ett år. Toppen är september (1 900). Vinnbarhet 5. Avsikten med varianterna är 2 590.

Sidofraser, med plats:

- **byta köksluckor befintlig stomme** (390) och **befintlig stomme pris** (210, +88 procent) i H1 eller kortsvaret och i H2:n om stommen.
- **byta köksluckor pris** (390) i H2:n om kostnad.
- **renovera köksluckor** (390) i H2:n som jämför byta, måla och lackera.
- **renovera kök behålla stommar** (110) och **köksrenovering på befintliga stommar** (50) i brödtexten eller kortsvaret.
- **byta köksluckor och bänkskiva** (50) som Faq-fråga.

### 3. Title

Krav: **högst 44 tecken**, börjar med **Byta köksluckor**. Löftet: på befintlig stomme, eller mått och pris. Ingen annan title börjar med "Byta köksluckor". `/el/byta-elcentral/` börjar med "Byta proppskåp" och krockar inte.

### 4. Description

Krav: **120 till 155 tecken.** Ska lova om luckorna passar din stomme, hur du mäter, och vad byte kostar mot att måla.

### 5. H1

Krav: löftet med den befintliga stommen. Delar inte de tre första orden med title.

### 6. H2-struktur

0. **Kortsvaret**: nya luckor på gamla stommar går om stommarna är hela och håller ett standardmått. Tre saker avgör: stommens bredd och höjd, gångjärnssystemet och hur luckan sitter i förhållande till stommen. Mät varje lucka, inte stommen. Priset med källa och datum, jämfört med att måla.
1. **Passar nya luckor min stomme?** Tabell per stommärke (IKEA, Marbodal, HTH, Vedum, Ballingslöv och fler om faktabladet har dem): standardbredder, gångjärnssystem, med källorna på en rad under tabellen. **Bär byta köksluckor befintlig stomme.**
2. **Så mäter du.** Steg och en skiss med måtten. Vad beställningen behöver: bredd, höjd, borrning för gångjärn, vänster eller höger.
3. **Byta, måla eller lackera.** Tabell i kronor för samma kök med 16 luckor: byta, måla själv, målare, sprutlackera, folie. Källorna står på en rad under tabellen. **Bär renovera köksluckor.**
4. **Vad det kostar.** Luckor per styck i tre prisnivåer, gångjärn, handtag och montering, med rotavdraget på monteringen. `<Kalkylator namn="kok-kostnad" />` bäddas in här. **Bär byta köksluckor pris och befintlig stomme pris.**
5. **Montera luckorna.** Gångjärn, justering i tre led, och vad som krävs av verktyg.

Faq: byta bänkskivan samtidigt, leveranstid, om IKEA-luckor passar andra stommar.

### 7. Längd

Mål **1 400 till 1 800 ord** plus Faq. Clas Fixare har cirka 1 300 ord utan ett enda mått. Tabellerna i avsnitt 1 och 3 gör längden.

### 8. Bilder

- **Skiss** av en överskåpslucka och en stomme med de mått som ska mätas och gångjärnens borrhål. Alt högst 125 tecken med orden byta köksluckor. Måtten står i bildtexten.

### 9. Interna länkar

**Ut**, alla är krav:

- `/rakna/kok-kostnad/` som `<Kalkylator namn="kok-kostnad" />` i kostnadsavsnittet. Sidan är räknarens värdartikel.
- `/kok/mala-koksluckor/` i jämförelsen i avsnitt 3.
- `/kok/slipa-bankskiva/`, i Faq-frågan om bänkskivan.
- `/rakna/rotavdrag/`, textlänk där rotavdraget nämns.

**In**, krav:

- `/kok/mala-koksluckor/` och `/kok/slipa-bankskiva/` (se deras punkt 9).

### 10. Strukturerad data och komponenter

`Article`, `BreadcrumbList`, `FAQPage` bara med riktig Faq. `kallor` med stomtillverkarnas måttlistor, luckleverantörernas priser och Skatteverket. Luckleverantörerna står bara i `kallor`, aldrig som länk i brödtext.

### 11. Ettan och Bättre än ettan

Topp 5 för huvudfrasen: clasfixare.se, vedum.se, en Facebook-grupp, ikea.com, nordanro.se. För "befintlig stomme" står luckor.se, pickyliving.se, totalbyggarna.se, norddesign och nordanro, alla säljare. **Ettan: clasfixare.se**, cirka 1 300 ord utan datum, författare och källor, utan mått och gångjärn. Enda priset är "från 650 kr per timme".

Det ettan har som vi måste ha:

- Att byte på befintlig stomme är ett alternativ till nytt kök.
- Monteringen som en tjänst med pris.

**Bättre än ettan** (krav):

1. **Tabellen per stommärke** med mått och gångjärnssystem, med källa.
2. **Mätstegen med skiss.** Pickyliving har en mätguide som PDF, ingen i topp 5 har den på sidan.
3. **Byta, måla och lackera i kronor för samma kök**, med källorna under tabellen.
4. **Räknaren inbäddad** med arbete och material för sig och rotavdraget rätt.
5. **Rotavdraget med taket** och två ägare.

**Krav på faktabladet** (`docs/briefer/faktablad/guider-byta-koksluckor.md`):

- Standardmått (bredder och höjder) och gångjärnssystem för minst fyra stommärken, från tillverkarens egna sidor eller måttlistor, med datum.
- Pris per lucka i tre prisnivåer från minst två luckleverantörer, med datum. Pickylivings exempel (20 769 kr exklusive frakt) får användas med sitt datum.
- Montering per timme eller per kök från två källor, med datum. Totalbyggarnas 350 kr per timme efter rot räknas om till pris före rot och märks.
- Pris för sprutlackering och folie per lucka från två källor.

### 12. Fällor

- **Luckleverantörerna får inte bli en topplista.** De står i `kallor` och i tabellfoten, inte som rekommendationer.
- **Inga mått utan tillverkarkälla.**
- Clas Fixares fel rot-tak nämns inte.
