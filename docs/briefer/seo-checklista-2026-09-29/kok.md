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

Krav: **120 till 155 tecken.** Ska lova att sidan börjar med luckans material, slipning och antal strykningar, hur länge färgen behöver härda, och vad det kostar mot att lackera.

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
2. **Slipning, övermålningstid och genomhärdning med källa**, med fabrikat och datum. Ingen tillverkare anger korn för luckor, så kornet tas från Caparols produktlista (240) och anges som Caparols. Hornbachs 180 och 400 får stå som butikens. Härdningen är genomhärdning (Flügger 28 dagar, Jotun 4 veckor) och Alcros en vecka för ställytor. Den skrivs aldrig som "innan köket kan användas", eftersom ingen tillverkare säger det.
3. **Kostnaden mot lackering och byte** i kronor för samma kök, med källa och datum och rotavdraget rätt.
4. **Roller mot färgspruta** med ett besked.
5. **Skiss** av ordningen på luckan.

**Krav på faktabladet** (`docs/briefer/faktablad/guider-mala-koksluckor.md`):

- Datablad för två snickerifärger och två grundfärger för svåra underlag (laminat, melamin): korn, övermålning, härdning.
- Prisexempel för målare på plats och sprutlackering per lucka från två källor som går att läsa, med datum. Leadhives 350 och 600 kr per lucka får vara den ena.
- Materialkostnad för ett kök med 16 luckor i egen regi, räknad av underlag och märkt som egen räkning.
- Hornbachs projektsida läst i webbläsare.

### 12. Fällor

- **Ingen härdningstid utan fabrikat**, och ingen tid "innan köket kan användas". Det som finns är genomhärdning och Alcros ställytor.
- **Lackering i verkstad ger inget rotavdrag**, eftersom arbetet inte görs i hemmet. Jämförelseraden för verkstadslackering har inget rot. Målare på plats har rot.
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

### Kontroll efter skrivningen, 2026-09-29

H1 är nu "Ge kaklet i köket ny färg utan att riva något". Mot seoTitle "Måla kakel i köket, men aldrig i badrummet" (42 tecken), "Måla köksluckor i trä, MDF eller laminat" och "Måla om huset kostnad 2026 …" delas inga tre första ord, och ingen annan title eller H1 börjar med "Ge". Godkänt. Alla fem punkter i Bättre än ettan finns; punkt 2 kräver sidnumret vid regeln i badrumsavsnittet. Handtestet vid full låga på gasspisen är ett råd om gasspis utan källa (punkt 12) och stryks. Huvudbilden `kok/mala-kakel-stankskydd` får bildAlt på högst 125 tecken; specens lydelse är 130.

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
3. **Byta, måla eller lackera.** Tabell i kronor för samma kök med 16 luckor: byta, måla själv, målare på plats (med rot), sprutlackering i verkstad (utan rot), och folie utan kronor per lucka (se punkt 11). Källorna står på en rad under tabellen. **Bär renovera köksluckor.**
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
- Pris per lucka i tre prisnivåer från minst två luckleverantörer, med datum. Picky Livings exempel (20 769 kr exklusive frakt) saknar publiceringsdatum och får stå med hämtningsdatum, "hämtat 28 september 2026". **IKEA:s monteringspris 3 399 kr stryks**, eftersom det inte står på IKEA:s sida.
- Montering per timme eller per kök från två källor, med datum. Totalbyggarnas 350 kr per timme efter rot räknas om till pris före rot och märks.
- Pris för sprutlackering per lucka, med rotregeln ovan. **Folie** har bara ett pris utan antal luckor (Design Foliering) och kan inte räknas om till pris per lucka. I tabellen står folie utan kronor per lucka, med priset som källan anger det och villkoret utskrivet, eller inte alls.

### 12. Fällor

- **Luckleverantörerna får inte bli en topplista.** De står i `kallor` och i tabellfoten, inte som rekommendationer.
- **Inga mått utan tillverkarkälla.**
- Clas Fixares fel rot-tak nämns inte.

---

## Kontroll efter röstvarvet, 2026-09-29

Läst mot punkt 1 till 12 för varje sida. Teckenantalen är räknade i Node, och `npm run kontrollera` ger 0 fel och inga varningar för köksfilerna. Radnumren gäller filerna som de ligger nu. Sju punkter ska rättas, och två av dem ändrar krav i den här checklistan (se under byta-koksluckor och publiceringen).

### /kok/slipa-bankskiva/

seoTitle 41 tecken och börjar med "Olja bänkskiva", description 154 tecken med olja före slipa, H1 oförändrad. Rubriken om ek (rad 117) bär "olja bänkskiva ek" och svarar också på "mörkare", så någon Faq behövs inte. Kolumnen heter "Torktid, timmar". MSB och Brandskyddsföreningen står i varningen och i `kallor`. Bättre än ettan 1 till 4 finns. Inlänkar finns från renovera-trappa och bygga-innervagg och från byta-koksluckor (Faq).

1. **Rad 12, kortSvar.** "slutar på **korn 150**, inte finare" saknar villkoret. Kortsvaret är det stycke en AI lyfter, och där ska talet och villkoret stå tillsammans (skillen avsnitt 5). Med Herdins olja stämmer inte 150, och det står först på rad 93. Lägg till en bisats om att burken går före, och att det för Herdins är 120. Description (rad 4) får stå kvar som den är, eftersom den är ett löfte och inte ett svar.
2. **Rad 167, vid publiceringen av köket.** Länken till `/inomhus/` i sista meningen byts mot en länk till `/kok/byta-koksluckor/`, med ett ankare som säger vad läsaren hittar där. Sidan hör nu till Kök men länkar inte till någon av syskonsidorna, och bytessidan behöver en andra inlänk (se nedan). Länken läggs i samma commit som bytessidan publiceras, eftersom en länk till ett utkast stoppar bygget.

### /kok/mala-koksluckor/

seoTitle "Måla köksluckor i trä, MDF eller laminat" (40 tecken), description 154 tecken och lovar material, slipning, två strykningar, härdning och kostnad mot lackering. H1 "Nästan alla köksluckor går att måla om själv" delar inga tre första ord med någon title. "Måla köksluckor själv" står i kortsvaret och i H2:n om arbetsgången, och H2:orna om roller, färg och kostnad bär sina sidofraser. Alt 104 tecken. Bättre än ettan 1 till 5 finns: materialtabellen, härdningen med fabrikat och utan "innan köket kan användas", kostnadstabellen med rätt rotregel för verkstad, beskedet om roller och skissen. Länkar ut till byta-koksluckor, slipa-bankskiva och mala-kakel. Inlänkar från byta-koksluckor och mala-kakel. Från slipa-bankskiva krävs ingen, eftersom luckorna inte nämns där.

3. **Rad 107 (steg 3) eller rad 29 (materiallistan).** Korn 240 står utan källa i löptexten och är Caparols enligt bildtexten. Punkt 11.2 kräver att kornet anges som Caparols. Namnge Caparol vid 240 på ett av de två ställena.

Verktygskortet för kostnadsräknaren (rad 161) står som kommentar tills räknaren finns i registret. Se byta-koksluckor för varför sidan ändå publiceras.

### /kok/mala-kakel/

Inget att ändra. seoTitle 42 tecken, description 141, bildAlt 97, H1 oförändrad sedan förra kontrollen. Alla fem punkter i Bättre än ettan finns kvar efter omskrivningen: tabellen per yta, s. 19 och datumet för MVK:s regler (rad 90 och 153), fyra tillverkare som avråder (rad 151), 60 till 70 grader och en månad (rad 121 och 141), och alternativen med 30 mm och länkar (rad 159 till 166). Raden om gasspis (rad 145) säger bara att avståndet saknas i databladen, och det tillåter punkt 6.3. Försäkringskopplingen står som Christians slutsats. Proffsmagasinet och Folksams självrisk finns inte med. Inlänkar finns från mala-koksluckor, vatrumsfarg, tatskikt-badrum och fogar-badrum.

### /kok/byta-koksluckor/

seoTitle "Byta köksluckor på befintlig stomme" (35 tecken), description 139, H1 "Nya luckor på köksstommarna du redan har". "Befintlig stomme" står i title och i H2:n om kostnaden, och rotavdraget med taket och två ägare står på rad 164 till 166. Alt 115 tecken. Bättre än ettan 1, 2 och 5 finns. Tabellen per märke har inte gångjärnssystemet i en egen kolumn, men systemen står i löptexten för Ikea, Vedum och Blum, och det räcker.

4. **Rad 170 till 172, fråga 1 och 2.** Nej, en mening med länk räcker inte. Punkt 11.3 i Bättre än ettan är ett krav, och "renovera köksluckor" (390) ägs av den här sidan. Den som söker frasen vill se alternativen mot varandra i kronor, och en mening med bara målarfärgen besvarar inte det. Under H2:n ska det stå en jämförelse för samma kök med 16 luckor, som tabell eller kort lista, med källorna på en rad under:
   - byta: 16 898 kr efter rot med Vedums billigaste luckor, nya gångjärn och fast monteringspris (från tabellen på rad 154)
   - måla själv: cirka 1 700 kr i färg
   - målare hemma: 4 800 till 8 000 kr före rot
   - sprutlackering i verkstad: 5 280 till 11 200 kr, utan rot, plus transport och montering (Kungslack)

   Talen ska vara exakt desamma som i tabellen på mala-koksluckor, och källorna finns redan i `kallor`. Det är ingen kannibalisering. "Måla köksluckor pris" ägs av målningssidan genom dess title och H2, och här blir talen en jämförelse som länkar dit för detaljerna. Folie får utebli (punkt 11, faktabladet). Med tabellen på plats har H2:n också innehåll nog, och fråga 2 är löst. Lägg gärna till en mening om när ett byte slår målning: annan form på luckan eller skadade luckor, som redan står på rad 172.
5. **Rad 13, kortSvar.** Punkt 6.0 kräver priset jämfört med att måla. Lägg till en mening om vad det kostar att måla samma 16 luckor själv. Det är jämförelsen som AI-svar på "byta eller måla köksluckor" bygger på.
6. **Rad 4, description.** Punkt 4 kräver "vad byte kostar mot att måla", och de sista orden saknas. Det finns 16 tecken kvar till 155.

**Punkt 11.4, räknaren inbäddad: kravet ändras.** `/rakna/kok-kostnad/` är inte byggd, och underlaget till den är inte beställt. Kostnadstabellen på rad 154 till 160 ger redan det kravet gällde, alltså arbete och material för sig och rotavdraget rätt, och ingen i topp 5 har något liknande. Både "måla köksluckor" och "byta köksluckor" har sin topp i september och oktober. Sidan publiceras därför utan räknaren. Kommentaren på rad 168 ersätts med `<Kalkylator namn="kok-kostnad" />`, och kommentaren på rad 161 i mala-koksluckor med `<Verktygskort kalkylator="kok-kostnad" />`, i samma commit som räknaren publiceras. Det kravet flyttas till räknarens checklista i `raknare.md`.

**Inlänkar.** I dag länkar bara mala-koksluckor hit. Den andra inlänken kommer från slipa-bankskiva, punkt 2 ovan.

### Hubben, `src/content/pelare/kok.mdx`

7. **Rad 3, description: 162 tecken, gränsen är 155.** Den ska kortas med minst 7 tecken. Innehållet stämmer och lovar inget om våtrum, så det räcker att stryka ord. Ingressen och title "Kök" stämmer med beslut 1 i 8.9.

Hubben får sex sidor, inte fem: slipa-bankskiva, mala-kakel, mala-koksluckor och byta-koksluckor under Gör det själv, och rotavdrag och kvadratmeter under Räkna. Båda räknarna har `kok` i registret. Med kostnadsräknaren blir det sju.

### Hantverkarens fråga 4: "enligt X" och "skriver X"

För GEO är det inget problem, utan tvärtom. Ett tal med tillverkarens namn i samma mening är just det en AI kan citera och spåra (skillen avsnitt 5, "tal med källa och datum i texten"). Faran är bara om meningarna blir så lika att sidorna ser genererade ut, och det bedömer läsaren med örat. Varierar hantverkaren formen ska källans namn stå kvar i samma mening som talet. Det får inte flyttas till en egen mening, till en fotnot eller bara till `kallor`. Kortsvaren ska behålla sina källor: Flügger på mala-koksluckor och Beckers och MVK på mala-kakel.

### Publiceringen

**Ersatt 2026-09-29** av den gemensamma listan "Publicering badrum och kök" sist i `badrum.md`. Alla steg nedan finns med där. Texten står kvar som historik.

**Köket kan inte gå före badrummet.** Länkarna binder ihop sidorna. Mala-kakel länkar till vatrumsfarg och tatskikt-badrum, och det är krav (Bättre än ettan 5), och även till fogar-badrum. Tatskikt-badrum länkar i sin tur till byta-toalettstol. Mala-koksluckor länkar till mala-kakel och byta-koksluckor, och byta-koksluckor länkar till mala-koksluckor. Hubben når inte fem sidor utan mala-kakel. Att stryka badrumslänkarna i mala-kakel bryter ett krav. Köket publiceras därför i samma commit som badrumssidorna vatrumsfarg, tatskikt-badrum, fogar-badrum och byta-toalettstol, när de är godkända i sin egen kedja (fogar-badrum har 3 från läsaren i dag). Badrumshubben följer sin egen kontroll.

Undantaget är slipa-bankskiva. Den är publicerad och länkar inte till något utkast, så punkt 1 kan gå ut nu, med `uppdaterad` satt till den dag ändringen driftsätts.

Ordningen, i en och samma commit:

1. Punkt 1 och 3 till 7 är rättade, och läsaren och korrekturen har sett de nya meningarna.
2. `utkast: false` på `guider/kok/mala-kakel.mdx`, `guider/kok/mala-koksluckor.mdx`, `guider/kok/byta-koksluckor.mdx` och `pelare/kok.mdx`, tillsammans med de fyra badrumssidorna.
3. `publicerad` och `uppdaterad` sätts till publiceringsdagen på de tre nya köksidorna. Mala-kakel står i dag på 2026-09-28. Hubben får samma `uppdaterad`.
4. Punkt 2: slipa-bankskiva rad 167 länkar till `/kok/byta-koksluckor/` i stället för `/inomhus/`, och sidans `uppdaterad` sätts till samma dag.
5. `npm run kontrollera` med 0 fel och inga föräldralösa sidor, och `npm run build` grönt.

Efter publiceringen:

- Varje ny köksida har då minst två inlänkar från innehållsfiler. Mala-kakel har fyra, mala-koksluckor två och byta-koksluckor två.
- När Christian ber om det begärs indexering i Search Console för `/kok/`, `/kok/mala-koksluckor/` och `/kok/mala-kakel/`. Resten följer via sitemapen.
- När `/rakna/kok-kostnad/` publiceras byts de två kommentarerna mot räknaren (se byta-koksluckor) i samma commit.
- En vecka efter publiceringen ställs frågor till en AI om "måla köksluckor", "måla kakel i badrummet" och "byta köksluckor på befintlig stomme". Om sajten nämns antecknas det i SOKORDSANALYS.md.
