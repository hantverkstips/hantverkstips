# SEO-checklista, kallras, startlista 6 omgång A, 2026-09-30

Omgång A i startlista 6 (`docs/SOKORDSANALYS.md` 12.7, rad A4; `docs/INNEHALLSARKITEKTUR.md` avsnitt 9). Ny sida. Kallras är vinterbenets sida om draget vid fönstret, och den knyter ihop fönstret, elementet under det och tilluften. Hantverkaren läser checklistan före skrivningen, `underlag` läser punkt 11 och 12 innan faktabladet skrivs, och SEO och GEO-agenten läser den färdiga sidan mot samma lista.

Så här läses checklistan:

- **Underlag:** underlagsarbetarens SERP-läsning 2026-09-30 (topp 5 på "kallras" och "kallras fönster", ettan på "kallrasskydd"), volymerna i `docs/data/keyword-stats-2026-09-30-fukt-sorterad.tsv`, det gemensamma faktabladet `docs/briefer/faktablad/fukt-gemensamma-tal.md` och glastemperaturerna på `/fukt/kondens-pa-fonster/`.
- **Sökverktyget svarar från USA.** Domänerna i topp 5 är kontrollerade genom att sidorna lästes. Ordningen mellan dem är inte kontrollerad.
- **Title** räknas utan suffixet " · Hantverkstips".
- **Punkt 11** innehåller **Bättre än ettan** (krav) och **Krav på faktabladet**.

Tre saker som styr sidan:

1. **Två avsikter, två sidor.** "kallras" (720) är draget från fönstret. "kallrasskydd" (880) är ett backspjäll i fläktkanalen för 80 till 170 kr, och Google visar bara butiker. Kallrasskyddet ägs av `/fukt/badrumsflakt/` (omgång D). Den här sidan nämner det i en mening för den som kommit fel, och den länkar dit först när fläktsidan finns.
2. **Sidan är en diagnos.** Den som känner drag vid fönstret vet inte om det är kallras, ett otätt fönster, en spaltventil eller kylan från glaset. Ingen konkurrent skiljer dem åt, och det är där sidan är bättre.
3. **Säsong:** toppen kommer i januari (1 600). Sidan ska ut i oktober, så att den är indexerad före december.

---

## /fukt/kallras/

### 1. Adress och sidtyp

`/fukt/kallras/` · `src/content/guider/fukt/kallras.mdx` · samling **guider**, `typ: problemguide`, `pelare: fukt`, `plats: fonster`, `niva: enkel`. Hubgrupp: Hitta felet, under Fönster och väggar. Inga produktkort och inget reklamband.

Läsaren sitter i soffan under fönstret en kväll i januari och känner kalla fötter och drag, trots att elementet är varmt. Hon vill veta vad det är och vad som hjälper, helst utan att byta fönster.

### 2. Huvudfras och sidofraser

**Huvudfras: kallras, 720 per månad**, topp i januari (1 600). Vinnbarhet 4: ettan är en synonymordbok, och första sakliga sidan är en elementtillverkare med ett enda tal utan källa.

Sidofraser, med plats:

- **kallras fönster** (110, topp i januari med 320) i title eller H1.
- **drag från fönster**, **kallras element** och **kallras nya fönster** har ingen data. De står i brödtexten och i diagnostabellen.
- **kallrasskydd** (880) ägs av `/fukt/badrumsflakt/`. Det står i en mening här, inte i title, H1 eller en H2.

### 3. Title

Ny sida. Krav: **högst 44 tecken**, och titeln börjar med **"Kallras"**, gärna följt av "från fönster" eller "vid fönster". Förslag: "Kallras från fönster och vad som hjälper" (40) eller "Kallras vid fönster, orsak och åtgärd" (37). Ingen annan sida börjar med "Kallras". `/fasad/dreva-fonster/` har H2:n "Felen bakom kallras vid nya fönster", som är en rubrik och inte en title, och ingen krock.

### 4. Description

Krav: 120 till 155 tecken, **"kallras"** i första meningen, vad det är i sak, och att sidan skiljer det från annat drag och ger åtgärder i kostnadsordning. Förslag att mäta mot: "Kallras från fönster är kall luft som faller längs glaset och rinner ut över golvet. Så skiljer du det från drag och gör något åt det, billigast först." (151).

### 5. H1

Sidans löfte. Krav: säger vad läsaren får (varför det drar och vad som hjälper). Delar inte de tre första orden med title och börjar inte med "Kallras från fönster" eller "Kallras vid fönster".

### 6. H2-struktur

`kortSvar`, tre till fem meningar som går att lyfta rakt av: kallras är luft som kyls mot ett kallt glas, faller och sprider sig över golvet; det blir värre ju kallare glaset är och ju högre fönstret är; ett element under fönstret som är minst lika brett som fönstret bryter det; och det skiljer sig från drag genom ett otätt fönster, som kommer genom springor och känns vid karmen. Ett tal med källa (Folkhälsomyndighetens gräns för lufthastighet eller golvtemperatur, när faktabladet har verifierat den).

1. **Varför det drar från ett stängt fönster**. Fysiken med skissen, och vad som gör draget starkare (glasets temperatur, fönstrets höjd, utetemperaturen). Glasets temperatur per fönstertyp står på kondenssidan: här räcker ett exempel och en länk dit, inte tabellen igen.
2. **Kallras eller något annat** (diagnosen). Tabell med orsak, var det känns, när det känns och vad som hjälper: kallras från glaset, strålningsdrag (kylan från en kall yta utan luftrörelse), otätt fönster eller brister i drevningen, och en spaltventil eller ett tilluftsdon ovanför fönstret. Länk till `/fasad/dreva-fonster/` på raden om otätheten.
3. **Mät draget själv**. Ett test läsaren kan göra: termometer vid golvet under fönstret och mitt i rummet, ett ljus, en rökpenna eller en tunn plastremsa längs glaset och karmen, och glasets temperatur med IR-termometer. Folkhälsomyndighetens värden för lufthastighet och golvtemperatur som jämförelse, med rätt författning.
4. **Vad som hjälper, billigast först**. Gardinen och möblerna (fri väg för värmen från elementet, gardinen slutar ovanför elementet), termostatventilen, elementets placering och bredd, tätningslister där det är otätt, ett innerglas eller energiglas som höjer glasets temperatur (Energimyndighetens fönsterguide, U-värde 1,3 till 1,8, som på kondenssidan) och fönsterbyte sist. Varje steg med ungefärlig kostnad och källa där den finns.
5. **Kallras och tilluften** (kort). Tilluftsdonet eller spaltventilen ovanför fönstret ska stå kvar öppet, eftersom luften behövs, och att elementet under ventilen värmer den inkommande luften. Folkhälsomyndighetens och Boverkets uteluftsflöde (T43) i en mening. En mening om kallrasskyddet i badrumsfläkten, som är något annat.
6. **Faq**, två eller tre frågor som inte upprepar H2 2 och 4, till exempel "Kan man få kallras med nya fönster?", "Hjälper golvvärme mot kallras?" (bara med källa) och "Ska elementet sitta under fönstret?".

Rubrikerna får formuleras om, gärna i frågeform där det faller sig naturligt.

### 7. Längd

Mål **1 400 till 2 000 ord**. Den längsta sakliga konkurrenten är Airmove (cirka 2 000 ord, med tal utan grund). Bygghemma har cirka 1 150 och Purmo, GDS och Bygg Förslag i Norr 800 till 1 100.

### 8. Bilder

- **Huvudbild, krav:** kallras vid fönster och element i genomskärning (INNEHALLSARKITEKTUR avsnitt 9, UX punkt 6). Rummet i sidled: kall luft faller längs glaset och rinner ut över golvet som en kall matta, och i en andra ruta eller halva stiger elementets varma luft längs glaset och bryter draget. Gardinen som stänger in värmen får gärna synas. `bildAlt` högst 125 tecken, beskriver bilden och innehåller "kallras". Spec till UX som `spec-skiss-kallras-2026-10.md`. Hantverkaren skriver bildtexten med källan.
- Diagnostabellen i H2 2 är en Markdown-tabell, inte en bild.

### 9. Interna länkar

**Ut**, minst tre i brödtexten, högst en per H2:

- `/fukt/kondens-pa-fonster/` i H2 1 (glasets temperatur per fönstertyp och imman som följer av samma kalla glas).
- `/fasad/dreva-fonster/` i H2 2 (otätt runt karmen).
- `/fasad/renovera-fonster/` i H2 4 (innerglas, energiglas och renovering).
- `/el/u-varde/` i H2 1 eller 4, där U-värdet förklaras.
- `/rakna/daggpunkt/` med förvalet för fönstret som länk i löptext i H2 1 eller 3, om hantverkaren vill ge läsaren glasets temperatur för sitt eget fönster. Ingen inbäddad räknare: räknaren svarar på kondens, inte på drag.
- `/fukt/badrumsflakt/` **först i omgång D**, när sidan finns, i meningen om kallrasskyddet.

**In**, senast en vecka efter publicering:

- `src/content/guider/fasad/dreva-fonster.mdx`, H2 "Felen bakom kallras vid nya fönster" (rad 150), punkt 1 (rad 156), där sidan definierar kallras. Ankare om vad kallras är och hur det skiljer sig från drag genom drevningen.
- `src/content/guider/fukt/kondens-pa-fonster.mdx` (utbyggnaden i samma omgång), där gardinen och elementet nämns.
- `src/content/kunskap/fukt/luftfuktighet-inomhus.mdx`, vinter-H2:n, om drag vid fönstret nämns där.

### 10. Strukturerad data och komponenter

- `Article` via guidemallen och `BreadcrumbList`. `FAQPage` bara om Faq finns, med samma text som syns.
- `kortSvar`, `bild`, `bildAlt`, `bildtext` och `kallor`. `produkter: []`, ingen `kategori`.
- Inget `<Verktygskort>` och ingen `<Kalkylator>` krävs, eftersom ingen räknare svarar på kallras. Förvalslänken till daggpunkten i punkt 9 är en vanlig länk.
- `kallor`: Folkhälsomyndighetens allmänna råd om temperatur inomhus i gällande version, Energimyndighetens fönsterguide ET 2025:01, BFS 2024:8 eller FoHMFS 2014:18 för uteluftsflödet, och källan för elementets placering och bredd.

### 11. Ettan och Bättre än ettan

**Ettan (SERP 2026-09-30):** synonymer.se, uppslagsordet "kallras" (ordbok, 80 till 90 ord) med Bonniers definition, "kallt nedåtriktat luftdrag på insidan av ett fönster". Den har inga tal och inga åtgärder. **Första sakliga sidan**, som också är etta på "kallras fönster", är purmo.com, "Undvik kallras och drag från fönster" (elementtillverkare, 2026-07-08, 800 till 900 ord). Den förklarar fysiken ("rasar nedåt och sprider ut sig över golvet som en kall matta") och har ett enda tal, lufthastigheten 0,10 till 0,15 m/s, utan källa. Dess åtgärd är ett element under fönstret. Den har ingen elementbredd, inget U-värde, inget om tilluftsdon, termostatventil, gardiner eller strålningsdrag.

Trean till femman är GDS (magasin, 2026-01-07, åtgärder utan tal), Bygg Förslag i Norr (firma, sex tips som leder mot fönsterbyte) och Airmove (firma, 2024-12-16, tal som "20 till 30 procent av svenska hem" och "25 procent värmeförlust" utan källa). Bygghemma, plats fyra på "kallras fönster", är mest komplett. Den nämner termostatventilen och möblerna och har "U-värde under 1,2" tillskrivet Energimyndigheten, utan länk. Ingen sida har en myndighetskälla som går att följa.

Det ettan har som vi måste behålla eller överträffa:

1. En rak definition i en mening, tidigt (ordbokens styrka).
2. Fysiken med den kalla mattan över golvet, och elementet under fönstret som huvudåtgärd (Purmos styrka).
3. Termostaten, gardinerna och möblerna (Bygghemmas styrka).

**Bättre än ettan** (krav; varje punkt kontrolleras i den färdiga sidan):

1. **Skissen av luftens väg**, med och utan elementets varma luft. Ingen i topp 5 har en förklarande bild.
2. **Diagnostabellen** som skiljer kallras från strålningsdrag, otätt fönster och spaltventil, med var det känns och vad som hjälper. Ingen konkurrent skiljer dem åt.
3. **Ett test läsaren gör själv**, med termometer vid golvet, en plastremsa eller ett ljus och glasets temperatur, och Folkhälsomyndighetens värden som jämförelse med rätt författning.
4. **Åtgärderna i kostnadsordning med källa**, där innerglaset och energiglaset får Energimyndighetens U-värden och glasets temperatur hänvisas till kondenssidans tabell. Konkurrenternas åtgärder saknar källa och ordning.

**Krav på faktabladet** (`underlag`, eget blad `docs/briefer/faktablad/guider-kallras.md`):

- Folkhälsomyndighetens allmänna råd om temperatur inomhus: **vilken författning som gäller i dag** (FoHMFS 2014:17 eller en ersättare, underlagsarbetaren nämnde HSLF-FS 2024:10 men kunde inte verifiera det), och ordagrant värdena för lufthastighet, golvtemperatur och strålningsasymmetri från fönster om de finns. Läs PDF:en eller myndighetens vägledningssida.
- BFS 2024:8: om föreskriften har krav på termiskt klimat eller drag i nya byggnader, med paragraf. Finns inget, skriv det.
- Energimyndighetens fönsterguide ET 2025:01 om kallras och om innerglas och energiglas (U-värden redan i kondenssidans källor; läs om det som gäller drag).
- Elementets placering och bredd under fönstret, med en källa av rang (Energimyndigheten, Boverket eller en lärobok i VVS eller byggnadsfysik). Elementtillverkare (Purmo) får stå märkta som tillverkare om inget annat finns.
- Fönsterhöjdens betydelse för hur starkt kallraset blir, med källa, om det finns.
- Om golvvärme mot kallras: bara med källa, annars stryks frågan.
- Kallrasskydd: en mening om vad det är (backspjäll i kanalen) med en källa som inte är en butik, eller Boverkets eller tillverkarens beskrivning.
- Airmoves andelar och procent får inte användas, om de inte går att spåra till SCB eller Energimyndigheten.

### 12. Fällor

- **"kallrasskydd"** står inte i title, H1 eller en H2. Det ägs av `/fukt/badrumsflakt/`.
- **Glastemperaturen per fönstertyp** ägs av `/fukt/kondens-pa-fonster/`. Tabellen kopieras inte hit; ett exempel och en länk räcker.
- **Drevning och tätning runt karmen** ägs av `/fasad/dreva-fonster/`. Här står diagnosen och en länk, inte arbetet.
- **Fönsterbyte** är sista steget, inte huvudrådet. Tre av fem konkurrenter leder mot fönsterbyte, och det är det sidan ska vara bättre än.
- **Tal utan källa**, som Purmos 0,10 till 0,15 m/s, Bygghemmas 60 till 70 watt per kvadratmeter och Airmoves procent, upprepas inte förrän faktabladet har en källa för dem.
- **Stäng inte tilluften** som råd. Sidan säger det motsatta, med uteluftsflödet som skäl.
- **Kortsvaret, diagnostabellen och skissen får inte strykas.** De bär både rankingen och AI-citaten.
