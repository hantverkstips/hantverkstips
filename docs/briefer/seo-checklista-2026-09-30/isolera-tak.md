# SEO-checklista, isolera tak, startlista 5, 2026-09-30

Första sidan i startlista 5 (SOKORDSANALYS 9.4, "direkt efter", och avsnitt 11). Pelaren El och säkerhet, eftersom isoleringen bor där sedan arkitekturens beslut och `/el/tillaggsisolera-vind/` och `/el/u-varde/` redan står i den. Hubben `/el/` är publicerad. Hantverkaren läser checklistan före skrivningen, `underlag` läser punkt 11 och 12 innan faktabladet skrivs, och SEO och GEO-agenten läser den färdiga sidan mot samma lista.

Så här läses checklistan:

- **Underlag:** underlagsarbetarens SERP-läsning 2026-09-30 för "isolera tak" och "isolera tak inifrån", volymerna i `docs/data/keyword-stats-2026-09-28.csv`, faktabladet `docs/briefer/underlag-tillaggsisolera-vind-2026-09-20.md` (lambdatabell, Energimyndigheten ET 2025:06, Fuktcentrum/Bygg & teknik 4/07, energiformeln).
- **Ordningen i topp 5 är osäker**, eftersom sökverktyget svarar från USA. Kontrollera i google.se innan faktabladet skrivs.
- **Title** räknas utan suffixet " · Hantverkstips".
- **Punkt 11** innehåller **Bättre än ettan** (krav) och **Krav på faktabladet**.

Tre saker som styr sidan:

1. **Avsikten är blandad på huvudfrasen.** På "isolera tak" rankar både snedtakssidor och sidor om vindsbjälklaget (Byggmax "Isolera takbjälklag" på plats 5). Sidan äger taket, alltså snedtak och inredd vind inifrån och yttertaket utifrån, och lämnar bjälklaget till `/el/tillaggsisolera-vind/`. Gränsen ska synas för Google: kort svar och första stycket säger vilket fall sidan gäller och länkar till vindsidan för det andra.
2. **Säsong:** båda fraserna toppar i september (590) och ligger högt till november. Sidan ska ut i oktober.
3. **BFS 2024:8, inte BBR.** Kravet på U-värde vid ändring är samma som på `/el/u-varde/` (tak 0,13) med samma källa. PBL 8 kap. ändras 2027-01-01 (Lag 2026:746); sidan får en daterad mening om det, och den läses om i januari.

---

## /el/isolera-tak/

### 1. Adress och sidtyp

`/el/isolera-tak/` · `src/content/guider/el/isolera-tak.mdx` · samling **guider**, `typ: projektguide`, `pelare: el`, `niva: mellan`. Hubgrupp: Gör det själv. Inga produktkort: Proffsmagasinet säljer inte isolering, och inget verktyg avgör resultatet (SOKORDSANALYS 8.6). Inget reklamband.

Läsaren har ett snedtak eller en inredd vind som är kall på vintern, eller ska byta tak, och undrar om hon kan isolera inifrån, hur tjockt, och om luftspalten behövs.

### 2. Huvudfras och sidofraser

**Huvudfras: isolera tak, 320 per månad**, 0 procent på ett år, och **isolera tak inifrån, 320**, −64 procent, båda med topp i september. Avsikten med varianterna är **1 040**. Vinnbarhet 4 (ettan har inte ett enda tal).

Sidofraser, med plats:

- **isolera tak inifrån** (320) i title och H1.
- **isolera tak utan luftspalt** (140) och **isolera tak luftspalt** (110) i en H2 om luftspalten.
- **isolera tak utifrån** (110) i en H2 om yttertaket vid takbyte.
- **isolera snedtak** och **isolera inredd vind** (ej mätta) i brödtexten.
- **isolera tak garage** (40) i en mening, bara om faktabladet har något eget att säga.

### 3. Title

Ny sida. Krav: **högst 44 tecken**, börjar med **Isolera tak**, gärna **Isolera tak inifrån**. Förslag: "Isolera tak inifrån, luftspalten avgör" (38). Delar inte de tre första orden med `/el/tilläggsisolera-vind/` ("Tilläggsisolera vind, …"), `/grund/isolera-krypgrund/` ("Isolera krypgrund, …") eller `/grund/isolera-kallarvagg/`.

### 4. Description

Krav: 120 till 155 tecken, **isolera tak** tidigt, inifrån och utifrån, luftspalten, och att bjälklaget är en annan sida. Förslag att mäta mot: "Isolera tak inifrån eller utifrån: luftspalten, ångspärren och tjockleken med källa, och när det är vindsbjälklaget du ska isolera i stället." (141).

### 5. H1

Sidans löfte. Krav: taket och inifrån tidigt, säger vad som avgör (luftspalten eller fukten), delar inte de tre första orden med title. Ingen fråga i H1 som bara upprepar sökfrasen.

### 6. H2-struktur

`kortSvar` i frontmatter: tre till fem meningar som en AI kan lyfta rakt av. Vilket fall läsaren har (snedtak inifrån, yttertak utifrån, eller bjälklaget), att luftspalten mellan isolering och råspont ska finnas med mått och källa, och vad kravet på U-värde är vid ändring.

1. **Snedtak, yttertak eller vindsbjälklag** (fallen). Beslutsträd eller tabell: tre fall, var isoleringen hamnar, när det görs, länk till vindsidan för det tredje. Bär "isolera tak" i naturlig form.
2. **Luftspalten, och när taket klarar sig utan den**. Bär luftspalt och utan luftspalt. Mått per källa med källan i texten (TräGuiden ≥ 25 mm, Rockwool 25 till 45 mm för inredd vind, äldre Rockwool via SBUF 50 mm), var den går (takfot till nock), hur den hålls öppen. Utan luftspalt: vad BFS 2024:8 7 kap. 1 § och SBUF 12321 säger, och att kompakttak ska vara provade system.
3. **Hur tjockt, och vad det tar av takhöjden**. U-värdestabell för snedtak ur tillverkarens tabell, med 0,13 som krav vid ändring. Tabellen har rubrikrad och enhet.
4. **Ångspärr eller ångbroms**. När vilken, skarvar och genomföringar, installationsskiktet.
5. **Isolera tak utifrån vid takbyte**. Bygglov och förvanskningsförbudet enligt Boverket (läst 2026-09-30), takfoten, hängrännor och att vinden enligt Boverket ofta blir torrare med utvändig isolering. Bär "isolera tak utifrån".
6. **Ordningen i ett snedtak**, från rivning till innertak (projektguidens steg).
7. **Vad det sparar**. Samma formel som vindsidan (E = ΔU · A · Gt · 0,001), märkt som egen räkning, med `<Verktygskort kalkylator="u-varde">` här eller `<Kalkylator>` där läsaren just förstått talet.

Hantverkaren får slå ihop och formulera om rubrikerna; frågeform där den är naturlig. Ingen Faq krävs; blir det en, får den inte upprepa H2 2.

### 7. Längd

Mål **1 800 till 2 600 ord**. Topp 5 är tunna: ettan saknar tal helt, hbel och skarp har några hundra ord med tal utan källa. Vindsidan är dubbelt så lång och ska inte kopieras; här bär tabellerna och luftspaltsavsnittet sidan.

### 8. Bilder

- **Huvudbild, krav:** snitt genom ett snedtak isolerat inifrån, med råspont, luftspalt, isolering, ångbroms eller ångspärr, installationsskikt och innertak, måtten ur faktabladet med källa i `bildtext`. `bildAlt` högst 125 tecken, beskriver snittet och innehåller "isolera tak" eller "snedtak". Spec till UX.
- **Valfri:** samma tak isolerat utifrån, för H2 5, bara om den visar något texten inte gör.

### 9. Interna länkar

**Ut**, minst tre i brödtexten:

- `/el/tillaggsisolera-vind/` i första stycket eller i H2 1 (bjälklaget).
- `/el/u-varde/` där kravet 0,13 nämns.
- `/tak/takfot/` där luftspalten ska vara öppen vid takfoten.
- `/rakna/u-varde/` via Verktygskort i H2 7.
- `/rakna/takbyte/` eller `/tak/plattak/` i H2 5, en av dem.
- `/fukt/luftfuktighet-inomhus/` eller `/rakna/daggpunkt/` där kondensen i taket förklaras, en av dem.

**In**, senast en vecka efter publicering:

- `src/content/guider/el/tillaggsisolera-vind.mdx`: en mening med länk där sidan förklarar vad bjälklaget är (rad 77) eller i avsnittet om den kallare vinden. Ankaret säger snedtak eller isolera taket.
- `src/content/guider/tak/takfot.mdx`, H2 "Takfotsventilationen och fukten på vinden": länk hit.
- Gärna `src/content/kunskap/el/u-varde.mdx` vid raden Tak i kravtabellen.

### 10. Strukturerad data och komponenter

- `Article` via guidemallen, `BreadcrumbList`. `FAQPage` bara om ett Faq-avsnitt finns.
- `kortSvar`, `bild`, `bildAlt`, `bildtext`, `kallor` i frontmatter. `behover` med verktyg och material som text (inga produkter).
- `<Verktygskort kalkylator="u-varde" />` en gång. Rör inte `Verktygskort` eller räknaren.
- `kallor`: Boverket (yttertaket och PBL kunskapsbanken fuktsäkerhet), BFS 2024:8, TräGuiden, Rockwool, SBUF 12321, Energimyndigheten ET 2025:06, Fuktcentrum/Bygg & teknik 4/07, med läsdatum.

### 11. Ettan och Bättre än ettan

**Ettan (SERP 2026-09-30):** clasfixare.se/isolera-tak/ på "isolera tak", en leadsida hos en firma. H2 om varför, material, steg för steg och en FAQ utan riktiga svar. **Inte ett tal**: ingen tjocklek, inget lambdavärde, inget U-värde, inget mått på luftspalten, ingen ångspärr. Skiljer inte snedtak från bjälklag, säger inget om utifrån, ingen källa, författare eller datum. På "inifrån" är ettan bygg.se ("tak och vind", gick inte att läsa); hbel och skarp har tal utan källa, och hbel påstår att byggreglerna kräver 300 till 500 mm.

Det ettan har som vi måste behålla eller överträffa:

1. Materialvalen (mineralull, cellplast, träfiber) i en mening var, med lambdavärde ur faktabladets tabell.
2. En steg för steg-ordning (H2 6).
3. Svar på de frågor ettan listar utan att besvara.

**Bättre än ettan** (krav, varje punkt kontrolleras i den färdiga sidan):

1. **Tre fall skilda åt**: snedtak inifrån, yttertak utifrån, vindsbjälklaget med länk till vindsidan. Ingen i topp 5 gör det.
2. **Luftspaltens mått med källa per källa**, och var den går. Ettan har inget mått, novoroom nämner inte spalten.
3. **"Utan luftspalt" besvarat med regeltext**: BFS 2024:8 7 kap. 1 § (75 procent RF om materialet saknar dokumenterat värde), SBUF:s slutsats och kravet på provade system. Topp 5 har inget eller säljtext för sprutisolering.
4. **U-värdestabell för snedtak** med tjocklek, U-värde och vad det tar av takhöjden, och kravet 0,13 vid ändring med samma källa som `/el/u-varde/`.
5. **Utifrån med Boverkets text om bygglov och fukt**, daterad. Ingen i topp 5 citerar Boverket.

**Krav på faktabladet** (`underlag`):

- Rockwools tabell för inredd vind läst i webbläsaren (tjocklek mot U-värde, luftspalt 25 till 45 mm, diffusionsöppen underlagstäckning utan luftspalt), med läsdatum. SERP-läsningen fick den som sammanfattning.
- Isovers anvisning för snedtak läst i webbläsare; annars används den inte (403 i verktygen).
- Energikravet vid ändring: vilken föreskrift som gäller efter 1 juli 2026 och att taket fortfarande är 0,13. Stäm av mot källan på `/el/u-varde/`.
- Boverkets yttertakssida, ordagrant om bygglov och fukt på vinden (redan läst 2026-09-30, ändrad 2026-06-15).
- Pris per kvadratmeter bara med källa och datum; saknas en sådan skrivs inget pris.
- Fuktcentrums varning (Bygg & teknik 4/07) ur vindunderlaget, redovisad som en källa bland flera.

### 12. Fällor

- **Vindsbjälklagets fraser** (tilläggsisolera vind, isolera vindsbjälklag, lösull på vinden) ägs av `/el/tillaggsisolera-vind/`. De står inte i title, H1 eller en H2 här.
- **BBR** nämns inte som gällande regel; BFS 2024:8 gäller sedan 1 juli 2025 med övergång till 1 juli 2026.
- **"Byggreglerna kräver 300 till 500 mm"** (hbel) är fel och upprepas inte. Kravet är ett U-värde, inte en tjocklek.
- **Energiandelen genom taket**: 15 procent enligt Energimyndigheten och Rockwool, inte novorooms 30. Samma tal som vindsidan.
- **Isovers tal** får inte citeras utan läsning.
- **Kort svar och tabeller får inte strykas** för att texten blir lång; de bär både ranking och AI-citat.
- PBL-meningen om 2027-01-01 dateras och läggs i påminnelsen för januari; ingen text om vad som gäller efter nyår utan källa.

---

## Kontroll efter skrivningen, 2026-09-30

SEO och GEO-agenten har läst `src/content/guider/el/isolera-tak.mdx` (utkast, cirka 2 400 ord brödtext) mot punkt 1 till 12. **Godkänd av SEO och GEO.**

Hantverkarens avvikelser, alla godkända:

- **seoTitle** "Isolera tak inifrån utan att taket möglar" (41 tecken). Den börjar med båda huvudfraserna och ryms under 44 tecken. Kannibaliserar inte mot vindsidan eller krypgrundssidan.
- **H1** "Ett snedtak som isoleras inifrån behöver luft under yttertaket". Den delar inte de tre första orden med title, och löftet är luftspalten.
- **Description** (150 tecken): inget att ändra.
- **"Tak utan luftspalt" som H3** under luftspaltens H2. Det räcker, eftersom H2:n bär "luftspalt" och H3:n frågan.
- **BFS 2026:9 för energikravet** och BFS 2024:8 för fukten är rätt enligt faktabladet och ersätter checklistans punkt 3 och fälla 2 på den punkten. `/el/u-varde/` har samma tal, 0,13 från 1 oktober 2026. Källbeteckningen där stäms av i nästa uppdatering av den sidan.
- **Kortad besparing med länk till vindsidan**: godkänd, Verktygskort `u-varde` står kvar.
- **Ingen Faq**: godkänd.

Bättre än ettan 1 till 5: uppfyllda. Tabellen skiljer de tre fallen åt. Luftspaltstabellen har källa per rad. "Utan luftspalt" besvaras med BFS 2024:8 och SBUF. U-värdestabellen står tillsammans med tabellen över förlorad takhöjd. Utifrån-avsnittet bygger på Boverkets energiguide från juni 2026. Kort svar, tabeller med rubrikrad och enhet, och länkar ut till vindsidan, u-värde, takfot, daggpunkt och takbyte finns.

### Inlänkar som hantverkaren lägger

1. **`src/content/guider/el/tillaggsisolera-vind.mdx`, H2 "Värmen som går genom vindsbjälklaget i dag"**, stycket som börjar "Börja med det du har" (rad 77). Efter meningen "Vindsbjälklaget är golvet på vinden, som samtidigt är taket i rummen under." läggs en mening om att en inredd vind med lutande tak isoleras i snedtaket i stället. Ankaret är till exempel "isolera snedtaket inifrån" → `/el/isolera-tak/`.
2. **`src/content/guider/tak/takfot.mdx`, H2 "Takfotsventilationen och fukten på vinden"**, punkt 2 i listan, efter meningen om vindavledaren. En mening om att spalten ska gå obruten upp till nocken även när vinden är inredd och snedtaket isoleras inifrån. Ankaret är till exempel "luftspalten i ett snedtak som isoleras inifrån" → `/el/isolera-tak/`. Högst en länk dit i den H2:n.
