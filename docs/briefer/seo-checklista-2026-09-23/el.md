# SEO-checklista, pelaren El, 2026-09-23

Tre nya sidor i pelaren El, värme och energi. Hantverkaren läser sitt avsnitt före skrivningen, underlagsarbetaren läser punkt 11 och 12 före faktabladet, och SEO och GEO-agenten läser den färdiga sidan mot samma avsnitt efteråt (skillen `ny-sida`, steg 1 och 5).

Så här läses checklistan:

- **Volymerna** kommer ur `docs/data/keyword-stats-2026-09-20-sorterad.tsv` och `docs/SOKORDSANALYS.md` avsnitt 7. Sidofraser som saknas i exporten är märkta "volym okänd". Det är språkbruk, inte uppmätt efterfrågan, och de ska aldrig tvingas in.
- **Title** räknas utan suffixet " · Hantverkstips" (16 tecken). Layouten lägger på suffixet bara när totalen ryms i 60, alltså vid 44 tecken eller kortare. Kravet är därför 44 tecken om frasen tillåter.
- **Punkt 6** anger vad ett avsnitt ska svara på och vilken fras det bär, aldrig hur rubriken ska låta. Rubrikerna är hantverkarens, enligt `docs/ROST.md`.
- **Punkt 11** har två delar: det ettan har som vi måste ha, och listan **Bättre än ettan**. Varje punkt i den listan är ett krav. Saknas en i den färdiga sidan publiceras den inte (CLAUDE.md regel 8).
- **SERP-läsningen** gjordes 2026-09-22. Google Sverige gick inte att läsa direkt: google.se svarar verktyget med en omdirigering till samtyckessidan. Topp fem är därför domänerna i `SOKORDSANALYS.md` 7.2 (maskinellt hämtade 2026-09-20) och bekräftade mot en sökning samma dag, och varje sida är hämtad och läst med WebFetch. Där en sida inte gick att nå står det. Den exakta ordningen mellan plats två och fem är inte kontrollerad i webbläsare.

Tre saker gäller alla tre sidor och upprepas inte per sida:

1. **Hubben `/el/` är utkast** (`src/content/pelare/el.mdx`, `utkast: true`) och publiceras vid fem sidor. Med de här tre har El fyra artiklar: `/el/tillaggsisolera-vind/` plus de tre nya. Ingen av sidorna får länka till `/el/`, för en länk till ett utkast stoppar bygget. Brödsmulan visar pelarens namn utan länk tills huben är publicerad.
2. **Ingen sida får ha produktkort eller reklammärkning.** Pelaren bär ingen affiliate i den här omgången, och ingen av de tre intentionerna är kommersiell. `produkter: []`.
3. **Varje tal får källa och datum i löptexten**, inte bara i `kallor`. Det är den enda skillnad mot fältet som gäller alla tre SERP:ar: av femton lästa sidor anger två ett datum och en en källa.

---

## /el/jordfelsbrytare-loser-ut/

### 1. Adress och sidtyp

`/el/jordfelsbrytare-loser-ut/` · `src/content/guider/el/jordfelsbrytare-loser-ut.mdx` · **problemguide**, pelaren El, nivå **enkel**. Hubgrupp: Hitta felet. Den största frasen i pelaren och den bästa ingången till den.

Intentionen är akut och praktisk: strömmen har gått, läsaren står vid centralen med mobilen och vill veta vad hen gör nu, vad hen får göra, och när det är dags att ringa. Det är en text, inte en räknare.

### 2. Huvudfras och sidofraser

**Huvudfras: jordfelsbrytare löser ut, 1 300 per månad**, 0 procent på ett år (stabil, vilket är ovanligt i körningen), låg konkurrens, toppmånad november, vinnbarhet 4.

Sidofraser, med plats:

- **jordfelsbrytaren löser ut** (bestämd form) eller **jordfelsbrytaren slår ifrån**, volym okänd — i H1 och i kortsvaret. Elsäkerhetsverket använder "slår ifrån" i sin egen rubrik.
- **löser ut när det regnar**, volym okänd — i H2:n om fukt. Det är den vanligaste följdfrågan i hela topp fem.
- **felsökning**, volym okänd — i H2:n om ordningen. Två av fem konkurrenter har ordet i titeln.
- **testa jordfelsbrytaren** eller **testknappen**, volym okänd — i H2:n om test.
- **jordfel**, volym okänd — i brödtext, förklarat första gången det står.

"vad får man göra själv el" (30) och "dra el själv" (70) ska **inte** bli sidans fraser. De hör till en egen sida senare (se rapporten till koordinatorn). Här får avsnittet om vad en lekman får göra finnas, men utan att leda title eller H1.

### 3. Title

Nuvarande: ingen, sidan är ny.

Krav: **högst 44 tecken.** "Jordfelsbrytare löser ut" först och obrutet i obestämd form, 24 tecken, så det finns 20 tecken kvar till löftet. Löftet ska säga att sidan leder läsaren till felet (ordning, steg, felsökning) och gärna att den säger när elektrikern behövs. Inget årtal, ingen fråga, inget "guide".

### 4. Description

Nuvarande: ingen.

Krav: **120 till 155 tecken.** Frasen med i naturlig form. Ska lova tre saker sidan faktiskt har: ordningen att felsöka i, vad du får göra själv enligt Elsäkerhetsverket, och när det är elektrikern. Ett tal gör den bättre än hela topp fem, till exempel 30 mA. Inget utropstecken.

### 5. H1

Krav: huvudfrasen i naturlig form, gärna bestämd ("jordfelsbrytaren"), skild från title så att de inte delar de tre första orden i onödan. H1 är löftet till den som står vid centralen, inte sökfrasen.

### 6. H2-struktur

Avsnitten nedan måste finnas. Ordningen följer läsarens läge: först det som får tillbaka strömmen, sedan förklaringen.

0. **kortSvar** (blockstil, fältet `kortSvar`): tre till fem meningar som går att citera utan resten av sidan. Återställ en gång. Löser den ut igen: dra ur allt och slå av alla grupper, slå på en i taget. Den grupp eller apparat som löser ut är felet. Löser den ut med allt urdraget är felet i den fasta installationen, och då är det en behörig elinstallatör. Det här stycket är det en AI lyfter.
1. **Felsökningen i ordning**, steg för steg, som numrerad lista. **Bär felsökning.** Ska skilja på de fyra lägena: löser ut direkt vid återställning, när en viss grupp slås på, när en viss apparat startar, och till synes slumpvis.
2. **Tabellen symptom, trolig orsak, vad du gör, när det är elektrikern.** Kan ligga i avsnitt 1 eller som eget avsnitt. Rubrikrad och en rad per läge.
3. **När det regnar, och när det är fukt i en maskin.** **Bär löser ut när det regnar.** Utomhusuttag, belysning ute, motorvärmare, och maskinerna som står fuktigt: tvättmaskin, diskmaskin, varmvattenberedare, avfuktaren i källaren eller krypgrunden. Vad läsaren gör med en maskin som varit fuktig (dra ur, låt torka, pröva igen) och när den inte ska prövas igen. Här ligger bron till fuktklustret.
4. **Vad en jordfelsbrytare gör**, kort. 30 mA, jordfel förklarat, varför den löser ut på summan av små läckströmmar. **Bär jordfel.** Kort, för läsaren kom inte hit för teorin.
5. **Testa jordfelsbrytaren.** **Bär testknappen.** Hur ofta enligt Elsäkerhetsverket, och vad det betyder om den inte löser ut på testknappen eller är tillverkad före 1996.
6. **Vad du får göra själv, och vad som kräver en behörig elinstallatör.** Med Elsäkerhetsverket som källa och regelns namn utskrivet. Ska vara konkret för just det här felet: återställa, dra ur, slå av och på grupper, byta propp och koppla in en portabel jordfelsbrytare får du. Öppna centralen, mäta, byta jordfelsbrytaren, felsöka i den fasta installationen får du inte.
7. **Vad elektrikern kostar**, dagtid mot jour, med datum på priserna och rotavdraget. Kort.
8. **Faq** med riktiga följdfrågor, inte dubbletter av brödtexten. Förslag på frågeställningar: kan jordfelsbrytaren själv vara trasig, varför den löser ut på natten, får jag byta den själv, varför den löser ut efter åska, och om det är farligt att återställa den flera gånger.

### 7. Längd

Mål **1 500 till 2 200 ord.**

Motivering: Elsäkerhetsverket är en kort myndighetssida och plats två till fem är lead-sidor. Ordantalen i topp fem är inte räknade, bara lästa; bedömningen är att ingen går över 1 500 ord. Längden ska inte konkurrera, den ska bära tabellen, fuktavsnittet och gränsen mot behörig. Över 2 200 ord blir sidan för lång för någon som står i en mörk hall med mobilen.

### 8. Bilder

- **Huvudbild** (`bild` och `bildtext`): en skiss av en elcentral med huvudbrytare, jordfelsbrytare med testknapp och grupper, där läsaren ser vilket reglage som är vilket. Det är sidans enda bild och den bär första steget. Alt under 125 tecken, med "jordfelsbrytare" och "elcentral". Måtten eller märkningen (30 mA) i bildtexten, inte i alt. Beställs av UX och bygge enligt `stil-och-design`.
- Ingen fler bild krävs. Ett flödesschema är tabellens jobb.

### 9. Interna länkar

Ut från sidan, alla ska finnas:

- `/el/byta-elcentral/` — i avsnitt 5 eller 6, där en jordfelsbrytare från före 1996 eller ett proppskåp utan jordfelsbrytare kommer upp. Ankare om att byta centralen.
- `/fukt/avfuktare-kallare/` — i avsnitt 3, där avfuktaren i källaren nämns. Köpguiden, inte kategorisidan (skillen avsnitt 4).
- `/fukt/fukt-i-kallaren/` — i avsnitt 3, där fukt i uttag och kablar i källaren nämns.
- `/rakna/rotavdrag/` — i avsnitt 7, som länk eller `<Verktygskort kalkylator="rotavdrag" />`. Ett verktygskort per sida.

`/el/tillaggsisolera-vind/` och `/rakna/elkostnad/` passar inte den här intentionen och ska inte tvingas in.

In till sidan, inom en vecka från publicering:

| Från | Plats | Ankare |
|---|---|---|
| `src/content/guider/fukt/avfuktare-krypgrund.mdx` | H2 "Upphöjd, med slangen på fall ut genom muren", stycket på rad 258 om jordat uttag och elektrikern | om att jordfelsbrytaren löser ut |
| `src/content/guider/fukt/avfuktare-kallare.mdx` | H2 "Ställ den fritt och ordna vattnet först" (rad 201) | om att jordfelsbrytaren löser ut |
| `src/content/guider/el/byta-elcentral.mdx` (ny) | avsnittet om vad som händer efter bytet | jordfelsbrytaren löser ut |

Meningarna i de två fuktsidorna skrivs av hantverkaren. Det räcker med en mening som säger att en maskin som står fuktigt kan lösa ut jordfelsbrytaren och vart läsaren går då.

### 10. Strukturerad data och komponenter

`Article` och `BreadcrumbList` via mallen, Christian som `author`. `FAQPage` bara om Faq-komponenten finns, och då med exakt samma text som syns. Tabellen i avsnitt 2 som vanlig Markdown-tabell med rubrikrad. Ingen `HowTo`, den stöds inte av `strukturdata.ts`.

`<Varning>` får användas en gång, för läget där brytaren löser ut direkt med allt urdraget eller där det luktar bränt eller är varmt. Inte fler, för då slutar läsaren se dem.

### 11. Ettan, och bättre än ettan

**Topp fem, lästa 2026-09-22:**

1. elsakerhetsverket.se, "Jordfelsbrytaren, din säkerhet". Senast granskad 2026-02-03. Har 30 mA, test minst två gånger per år, byt brytare tillverkade före 1996, en felsökning i löptext (dra ur, återställ, skruva i proppar en i taget) och gränsen: montering i fast installation kräver registrerat elinstallationsföretag. Saknar ordning efter symptom, tabell, fukt och maskiner, kostnad.
2. hemfixarna.se. Fem orsaker och stegvis felsökning, inga tal alls, inget datum, inga källor. Lead-sida som slutar i "Boka en Fixare".
3. svenskaeljouren.se. Orsaker, tre steg, Faq. Inga tal utom "två gånger om året", inga källor, inget datum.
4. elektriker-alvik.se. Fem steg, flest orsaker (gamla element, armaturer, summerade läckströmmar) men förklarar dem inte, inga tal.
5. jourpartner.se. Uppdaterad 17 juli 2026, anger 30 mA, jourpris 4 375 kr efter rot, hänvisar till Elsäkerhetsverket. Tre orsaker.

Frågor som läsaren har kvar efter alla fem: vad kostar det, hur långt får jag gå själv utan att bryta mot lagen, vad gör jag med maskinen som var fuktig, och vad betyder det att den löser ut med allt urdraget.

**Det ettan har som vi måste ha:**

1. 30 mA, med vad det betyder.
2. Test med testknappen och hur ofta, med Elsäkerhetsverket som källa.
3. Att brytare tillverkade före 1996 bör bytas.
4. Felsökningen genom att dra ur och slå på en i taget.
5. Gränsen: jordfelsbrytare i fast installation monteras av registrerat elinstallationsföretag.

**Bättre än ettan, krav:**

1. **Felsökningen efter symptom, i en tabell** med de fyra lägena, trolig orsak, vad läsaren gör och när det är elektrikern. Ingen i topp fem har den; ettan har en process i löptext.
2. **Fuktavsnittet med maskinerna som står fuktigt**, med vad läsaren gör med en maskin som löst ut och när den inte ska prövas igen, och bron till källaren och krypgrunden. Topp fem nämner fukt som en rad i en lista.
3. **Gränsen för vad en lekman får göra, med regeln namngiven och länkad hos Elsäkerhetsverket**, formulerad för just det här felet (återställa, dra ur, grupper, propp, portabel brytare får du; öppna centralen, mäta, byta brytaren får du inte). Plats två till fem är källösa.
4. **Vad elektrikern kostar, dagtid mot jour, med datum och rotavdraget räknat.** Bara femman har ett pris, och bara jourpriset.
5. **Ett citerbart kortsvar** med ordningen och villkoret för när det är elektrikern, fristående från resten av sidan.

### 12. Fällor

- **Regelstycket får inte bli vagare i skrivningen.** "Det är säkrast att ringa en elektriker" är fel sorts mening här. Läsaren ska få veta vad lagen säger, med källa, och vad hen får göra. Det är hela skillnaden mot lead-sidorna.
- **Inga instruktioner som förutsätter att centralen öppnas.** Inte ens "kontrollera att kablarna sitter fast". Allt i felsökningen ska gå att göra med locket på.
- **Tabellen ska stå kvar som tabell.** Den är det som plockas rakt av, både av Google och av en AI.
- **Sidan är ingen köpsida.** Nämn inte en portabel jordfelsbrytare som produkt med modell och pris. Den får finnas som begrepp.
- **Konkurrentnamn och "jag har läst de som rankar" hör inte hemma i publik text.** Jämförelsen med topp fem står här, inte på sidan.
- **Faktabladet ska verifiera** tre saker som topp fem säger olika om: hur ofta brytaren ska testas, året 1996, och vad Elsäkerhetsverket i dag räknar som elinstallationsarbete en lekman får göra, med föreskriftens beteckning och datum.

---

## /el/u-varde/

### 1. Adress och sidtyp

`/el/u-varde/` · `src/content/kunskap/el/u-varde.mdx` · **kunskap**, pelaren El, nivå **mellan**. Hubgrupp: Hitta felet (kunskap). Ingen reklammärkning, inga produktkort.

Intentionen är informativ med en räknefråga i svansen: vad talet betyder, vad som är bra, vad Boverket kräver, hur det räknas, och vad det är värt i pengar. Frasen är en **text nu och en räknare sedan**. Artikeln ska fungera helt utan `/rakna/u-varde/` och ha en bestämd plats där räknaren bäddas in när den finns (avsnitt 6, punkt 4).

**Ägarskap, beslutat här:** artikeln äger "u värde". Den äger också "beräkna u värde" **tills `/rakna/u-varde/` publiceras**. Då går "beräkna u värde" över till räknaren (skillen avsnitt 1: "räkna ut X" ägs av räknaren), och räknarens title ska leda med "Beräkna U-värde" medan artikelns title leder med "U-värde". De delar då inte de tre första orden.

**Mot `/el/tillaggsisolera-vind/`**: vindsidan äger "tilläggsisolera vind" och "isolera vind kostnad". U-värdessidan får använda vindsbjälklaget som ett av sina exempel och länka dit, men den får inte ha en H2 om att tilläggsisolera vinden, inte vindsidans kostnad per kvadratmeter, och inte börja sin title med "Tilläggsisolera".

### 2. Huvudfras och sidofraser

**Huvudfras: u värde, 590 per månad**, −19 procent på ett år, låg konkurrens, toppmånad september, vinnbarhet 3. **Kluster 700** med **beräkna u värde, 110**, toppmånad oktober, vinnbarhet 4.

Sidofraser, med plats:

- **beräkna u värde** (110) — i H2:n om hur det räknas. Ordet "beräkna" eller "räkna ut" i rubriken.
- **u värde fönster**, volym okänd — i H2:n om fönster. Hela topp fem på huvudfrasen är fönsterbranschen, så Google läser frasen som till stor del fönster. Utan det avsnittet missar sidan halva intentionen.
- **bra u-värde** eller **vad är ett bra u-värde**, volym okänd — i H2:n med typiska värden eller i Faq.
- **lambdavärde**, volym okänd — i räkneavsnittet, förklarat första gången.
- **Boverkets krav** eller **U-värde krav**, volym okänd — i H2:n om kraven.

### 3. Title

Krav: **högst 44 tecken.** "U-värde" först, med bindestreck som ordet skrivs (Google slår ihop "u värde" och "U-värde"). Löftet ska täcka både vad talet betyder och hur det räknas, så att "beräkna u värde" är med i sak tills räknaren tar frasen. Får inte börja med "Beräkna" (reserverat för räknaren) och inte med "Tilläggsisolera". Inte bara om fönster.

### 4. Description

Krav: **120 till 155 tecken.** "U-värde" med. Ska lova vad sidan har och fönstersidorna saknar: formeln skikt för skikt, Boverkets krav, och vad en sänkning är värd i kilowattimmar och kronor. Inget utropstecken.

### 5. H1

Krav: "U-värde" i naturlig form, skild från title. En H1 som säger vad talet gör för huset slår en som definierar ordet.

### 6. H2-struktur

0. **kortSvar**: tre till fem citerbara meningar. U-värdet är hur många watt som går genom en kvadratmeter när det skiljer en grad mellan sidorna, i W/m²K, lägre är bättre. Ett tal för ett tak eller en vägg och ett för ett fönster, med Boverkets krav och källa. En mening om hur det räknas (ett genom summan av skiktens värmemotstånd).
1. **Vad talet betyder**, med enheten utskriven och ett exempel i watt en vinternatt. **Bär u värde.** Kort.
2. **Typiska U-värden per byggnadsdel och byggår**, som tabell: tak eller vindsbjälklag, yttervägg, golv, fönster, dörr, med enhet i rubrikraden och källa under. Energimyndigheten ET 2025:06 har byggårstabellen för vindsbjälklag som vindsidan redan använder; faktabladet kompletterar med övriga byggnadsdelar ur samma eller likvärdig källa. **Bär bra u-värde.**
3. **Boverkets krav, för ett nytt hus och när du bygger om.** Regelverket med beteckning och datum. Kraven vid ändring per byggnadsdel är det husägaren behöver, och U-medel för ett nytt hus förklarat i en mening. **Bär Boverkets krav.**
4. **Så räknar du ut U-värdet**, skikt för skikt. R = d/λ per skikt, övergångsmotstånden inne och ute, summan, U = 1/R. En tabell med lambdavärden för de vanliga materialen (mineralull, lösull, trä, gips, betong, lättbetong, tegel, cellplast) med källa per rad. Ett räknat exempel på en verklig konstruktion, helst en regelvägg i ett 70-talshus, med varje steg synligt. **Bär beräkna u värde och lambdavärde.** **Här bäddas räknaren in** med `<Kalkylator namn="u-varde" />` när den finns, direkt efter det räknade exemplet, där läsaren just förstått talet.
5. **Vad en sänkning är värd i kilowattimmar och kronor.** Samma formel som vindsidan och krypgrundsidan använder (U-värdets minskning gånger arean gånger gradtimmarna delat med 1 000, Bygg & teknik), samma gradtimmar och samma elpris ur `src/lib/antaganden.ts` med SCB som källa, så att sajten säger samma sak på tre sidor. Ett räknat exempel på en byggnadsdel som inte är vindsbjälklaget, och länk till vindsidan för det exemplet.
6. **U-värdet på fönster**: Uw för hela fönstret, Ug för glaset och Uf för karmen, varför tillverkarens tal gäller en provstorlek, och vad det betyder att byta ett 2-glasfönster mot ett 3-glas i kWh. **Bär u värde fönster.**
7. **Varför huset blir sämre än talet**: köldbryggor, otätheter, fuktig isolering, sammantryckt ull. Kort, med länk till vindsidans avsnitt om lufttäthet.
8. **Faq**. Förslag: vad är ett bra U-värde på ett fönster, vad är skillnaden mellan U-värde och lambdavärde, vad är U-medel, vad har ett gammalt hus för U-värde, och räknas U-värdet med eller utan reglar.

### 7. Längd

Mål **1 800 till 2 600 ord.**

Motivering: topp fem är fönstertillverkares artiklar på uppskattningsvis 500 till 1 000 ord (lästa, inte räknade). Längden är inte vapnet. Den behövs för att sidan ensam ska rymma fyra saker som ingen konkurrent har samtidigt: formeln med räknat exempel, Boverkets krav per byggnadsdel, kronorna och fönstrets tre U-värden. Över 2 600 ord börjar sidan göra räknarens jobb i text.

### 8. Bilder

- **Huvudbild**: snitt genom en yttervägg med skikten märkta (gips, reglar och isolering, vindskydd, luftspalt, panel) och R-värdet per skikt, så att räkneexemplet går att följa i bilden. Alt under 125 tecken med "U-värde" och "vägg". Talen i bildtexten.
- Ingen andra bild krävs. Vill hantverkaren ha en skiss av fönstrets Uw, Ug och Uf är den välkommen, men den är inte ett krav.

### 9. Interna länkar

Ut från sidan, alla ska finnas:

- `/el/tillaggsisolera-vind/` — i avsnitt 5, som det räknade exemplet för vindsbjälklaget. Ankare om att tilläggsisolera vinden.
- `/rakna/elkostnad/` — i avsnitt 5, för att räkna om sparade kilowattimmar till kronor med eget elpris. Som textlänk; verktygskortet sparas åt `/rakna/u-varde/`.
- `/grund/isolera-krypgrund/` — i avsnitt 5, formeln för energibesparing står utskriven där.
- `/grund/isolera-kallarvagg/` — i avsnitt 7 eller 4, där isolering inifrån flyttar daggpunkten.
- `/fasad/dreva-fonster/` — i avsnitt 6, där monteringen gör fönstrets U-värde sämre än databladet.
- `/rakna/u-varde/` — **först när räknaren är publicerad**, med `<Kalkylator>` i avsnitt 4. Före dess ingen länk och ingen platshållare i filen; en länk till en adress som inte finns stoppar bygget.

In till sidan, inom en vecka från publicering:

| Från | Plats | Ankare |
|---|---|---|
| `src/content/guider/el/tillaggsisolera-vind.mdx` | H2 "Värmen som går genom vindsbjälklaget i dag", rad 77, där U-värde förklaras första gången | U-värde |
| `src/content/guider/grund/isolera-krypgrund.mdx` | H2 "Isolering i bjälklaget, det du vinner och det grunden betalar", rad 111 | U-värdet |
| `src/content/kunskap/grund/isolera-kallarvagg.mdx` | H2 "Lägg minst en tredjedel på utsidan", rad 87 | U-värdet |
| `src/content/guider/fasad/dreva-fonster.mdx` | H2 "Felen bakom kallras vid nya fönster", rad 150 | om fönstrets U-värde |

Ankaret är ordet där det redan står. Förklaringen av U-värdet på de tre isoleringssidorna får vara kvar; länken ersätter den inte.

### 10. Strukturerad data och komponenter

`Article` och `BreadcrumbList`, `FAQPage` om Faq finns. Tabellerna i avsnitt 2 och 4 som Markdown-tabeller med rubrikrad, enhet i rubriken och en `Källa:`-rad under. Formeln får stå i `<Markering>` om den komponenten används på sajten för formler (som trappformeln på `/golv/bygga-trappa/`).

När räknaren byggs: `<Kalkylator namn="u-varde" />` på den plats avsnitt 6 punkt 4 anger, och räknarens `WebApplication` bor på `/rakna/u-varde/`, inte här. Räknaren och artikeln ska använda samma lambdavärden och samma gradtimmar; underlaget till räknaren skrivs ur det här faktabladet (VERKTYGSPLAN rad 9).

### 11. Ettan, och bättre än ettan

**Topp fem på "u värde", lästa 2026-09-22** (domänerna enligt SOKORDSANALYS 7.2):

1. klarfonster.se, "Vad är U-värde på fönster". Definition med enhet, tabell över tre fönstertyper (3,0, 1,1, 0,7 till 0,8), påverkansfaktorer. Inga källor, ingen formel, inget om Boverkets krav i den lästa versionen, inget om vägg eller tak. (SOKORDSANALYS 7.2 noterade den 2026-09-20 som daterad 2026-09-08 med två räknare; räknarna syntes inte i den hämtade versionen.)
2. mockfjards.se. Max 1,2 för permanentboende, U-värden per byggperiod för fönster, att U-värdet ska gälla hela fönstret. Inga källor, bara fönster.
3. elitfonster.se. Tabell per fönstertyp, rekommendation per klimatzon, hänvisning till en energiräknare. Bara fönster.
4. svenskafonster.se. Tabell, "Boverkets krav 1,2 eller lägre" utan regelverk eller datum, "upp till 35 procent värmeförlust" utan källa.
5. vibostugan.se. Kort, enkelglas 5,4, egna produkter 1,4. Bara fönster.

**På "beräkna u värde":** isover.se svarar 403 och gick inte att läsa. dimensionera.se har formeln R = d/λ, skikt för skikt med synliga lambdavärden och övergångsmotstånd, men är byggd för konsulter: inget datum, inga kWh, inga kronor, inga krav.

Frågor läsaren har kvar: vad betyder talet för min vägg och mitt tak, vad kräver Boverket i dag och i vilket regelverk, och vad är det värt i pengar att sänka det.

**Det ettan har som vi måste ha:**

1. Definitionen med enhet och "lägre är bättre", i första skärmen.
2. En tabell med typiska U-värden för fönster av olika slag.
3. Att fönstrets U-värde gäller hela fönstret, inte glaset.
4. Talet 1,2 för fönster, men med rätt regelverk och källa.

**Bättre än ettan, krav:**

1. **Formeln skikt för skikt, med en synlig lambdatabell med källa per rad och ett räknat exempel på en verklig vägg.** Ingen av fönstersidorna har formeln; dimensionera.se har den utan förklaring.
2. **U-värdet omräknat till kilowattimmar och kronor**, med formel, gradtimmar och SCB-elpriset, samma tal som vindsidan och krypgrundsidan. Ingen i topp fem.
3. **Boverkets krav med regelverkets beteckning och datum, per byggnadsdel, för nytt hus och vid ändring.** Fönstersidorna säger "1,2" utan regelverk och bara för fönster.
4. **Uw, Ug och Uf förklarade**, och varför tillverkarens tal gäller en provstorlek. SOKORDSANALYS 7.2 noterade att ettan saknar uppdelningen.
5. **Typiska U-värden för tak, vägg, golv och fönster per byggår i en tabell.** Topp fem har bara fönster.

### 12. Fällor

- **Regelverket ska verifieras, inte skrivas av.** Boverket har bytt föreskrifter under 2025 och 2026 (trappsidan citerar BFS 2024:9 med ikraftträdande 1 juli 2025). Faktabladet ska fastställa vilket regelverk som gäller för energihushållning i dag, med beteckning och datum, och kraven vid ändring per byggnadsdel. Mina minnesvärden (tak 0,13, vägg 0,18, golv 0,15, fönster och dörr 1,2) är att kontrollera, inte att använda.
- **Samma tal som grannsidorna.** Gradtimmarna (89 280, ur Rockwools 3 720 graddagar) och elpriset (SCB, `src/lib/antaganden.ts`) ska vara desamma som på `/el/tillaggsisolera-vind/` och `/grund/isolera-krypgrund/`. Ett annat tal här är en motsägelse på sajten.
- **Ingen kannibalisering av vindsidan.** Ingen H2 om att tilläggsisolera vinden, ingen kostnad per kvadratmeter för vind, ingen "400 millimeter"-rekommendation. Länka dit.
- **Ingen platshållare för räknaren i publik text.** Inte "räknaren kommer snart", inte en kommentar som syns. Platsen står här i checklistan.
- **Fönsteravsnittet får inte strykas** för att sidan ligger i El. Hela SERP:en är fönster, och utan det avsnittet svarar sidan inte på halva intentionen.
- **Ingen produkt och inget fönstermärke** med U-värde och pris. Det är en kunskapssida.

---

## /el/byta-elcentral/

### 1. Adress och sidtyp

`/el/byta-elcentral/` · `src/content/guider/el/byta-elcentral.mdx` · **problemguide**, pelaren El, nivå **enkel**. Hubgrupp: Hitta felet.

**Varför problemguide och inte projektguide:** en projektguide lovar att läsaren gör jobbet, och hamnar under Gör det själv i huben. Bytet får bara göras av ett registrerat elinstallationsföretag. Intentionen bakom "byta elcentral" är beslutet: behöver jag, vad kostar det, hur går det till, och vad kan jag göra själv innan. Det är en problemguide som slutar i en beställning, och sidan ska säga det rakt. En text, inte en räknare; rotavdraget räknas av den räknare som redan finns.

### 2. Huvudfras och sidofraser

**Huvudfras: byta elcentral, 210 per månad**, +55 procent på tre månader och −19 procent på ett år, medelkonkurrens, toppmånad september, vinnbarhet 5.

Sidofraser, med plats:

- **byta elcentral kostnad** eller **vad kostar det att byta elcentral**, volym okänd — i H2:n om kostnaden. Två av fem konkurrenter har kostnaden i titeln.
- **byta proppskåp**, volym okänd — i H1 eller i H2:n om tecknen. Det är ordet många husägare har för sin gamla central.
- **automatsäkringar**, volym okänd — i brödtext i tecknen och i hur bytet går till.
- **byta elcentral själv**, volym okänd — i H2:n om vem som får göra det.
- **elcentral med jordfelsbrytare**, volym okänd — i brödtext.

### 3. Title

Krav: **högst 44 tecken.** "Byta elcentral" först och obrutet, 14 tecken, 30 kvar. Löftet ska täcka både när och vad det kostar. Inget årtal (tre av fem konkurrenter har "2026" och det dör i december), inget "komplett guide".

### 4. Description

Krav: **120 till 155 tecken.** Frasen med. Ska lova tecknen på att centralen ska bytas, priset uppdelat på poster med rotavdraget, och vad du själv kan förbereda. Säg gärna rakt ut att bytet görs av behörig elinstallatör, det är ett skäl att klicka för den som undrar. Inget utropstecken.

### 5. H1

Krav: frasen eller "proppskåp" i naturlig form, skild från title. H1:n får gärna ta "byta proppskåp" om title tar "byta elcentral".

### 6. H2-struktur

0. **kortSvar**: tre till fem citerbara meningar. När centralen ska bytas (proppskåp utan jordfelsbrytare, jordfelsbrytare från före 1996, för få grupper för det som ska in), att det görs av ett registrerat elinstallationsföretag, ett prisspann med datum och om det är före eller efter rotavdrag, och en dag strömlöst.
1. **Tecknen på att centralen ska bytas**, som lista med källa där det finns en. **Bär byta proppskåp.** Proppskåp med skruvsäkringar, ingen jordfelsbrytare, jordfelsbrytare från före 1996, säkringar som går ofta, värme eller brännmärken, och det som ska anslutas: laddbox, värmepump, induktionshäll. Skilja på "måste" (säkerhet) och "bör" (kapacitet).
2. **Vem som får byta den.** **Bär byta elcentral själv.** Elsäkerhetslagen, registrerat elinstallationsföretag, och hur läsaren kontrollerar att firman finns i Elsäkerhetsverkets register. Kort och rakt.
3. **Vad det kostar, post för post.** **Bär kostnad.** Tabell med posterna: centralen, automatsäkringar, jordfelsbrytare, arbetstimmar, gruppförteckning, eventuella nya ledningar eller jordning, och vad nätbolaget tar om huvudsäkringen eller mätaren berörs. Priser från minst tre firmor med datum, och tydligt om de är före eller efter rotavdrag. Rotavdraget räknat, med räknaren inbäddad.
4. **Hur bytet går till**, i ordning: offert, eventuell kontakt med nätbolaget, strömlöst, montering, egenkontroll, gruppförteckning och dokumentation. Hur lång tid. **Bär automatsäkringar.**
5. **Vad du förbereder själv.** Foton på centralen och gruppförteckningen till offerten, en lista över det som ska anslutas nu och de närmaste åren, fri plats framför centralen, och vad offerten ska innehålla för att gå att jämföra.
6. **När den nya jordfelsbrytaren börjar lösa ut.** I ett gammalt hus hittar en ny jordfelsbrytare fel som funnits länge, och att åtgärda dem ingår sällan i det fasta priset (Dryft skriver det uttryckligen). Vad det betyder för budgeten, och länk till jordfelssidan.
7. **Faq**. Förslag: hur länge håller en elcentral, måste jag byta om jag har proppar, kan jag byta bara jordfelsbrytaren, behövs det bygglov eller anmälan, och påverkar bytet försäkringen.

### 7. Längd

Mål **1 400 till 2 000 ord.**

Motivering: ettan är en forumtråd och plats två till fem är prissidor på uppskattningsvis 300 till 1 200 ord (lästa, inte räknade). Sidan vinner inte på längd utan på tabellen och på avsnitt 6. Under 1 400 ord ryms inte tecknen, posterna och förberedelserna med källa.

### 8. Bilder

- **Huvudbild**: en gammal central med skruvsäkringar bredvid en ny med automatsäkringar och jordfelsbrytare, så att läsaren känner igen sin egen. Alt under 125 tecken med "elcentral" och "proppskåp". Årtal och märkning i bildtexten. Den bär avsnitt 1.
- Ingen fler bild krävs.

### 9. Interna länkar

Ut från sidan, alla ska finnas:

- `/el/jordfelsbrytare-loser-ut/` — i avsnitt 6. Ankare om att jordfelsbrytaren löser ut.
- `/rakna/rotavdrag/` — i avsnitt 3, som `<Kalkylator namn="rotavdrag" />` direkt efter kostnadstabellen, där läsaren just förstått att bara arbetet ger avdrag. Ett per sida.
- `/grund/inreda-kallare/` — i avsnitt 1, där nya grupper behövs när en källare blir bostad.
- `/el/tillaggsisolera-vind/` eller `/rakna/elkostnad/` — **bara om det passar i sak**, till exempel om hantverkaren tar upp värmepumpen och elräkningen i avsnitt 1. Inget krav.

In till sidan, inom en vecka från publicering:

| Från | Plats | Ankare |
|---|---|---|
| `src/content/guider/el/jordfelsbrytare-loser-ut.mdx` (ny) | avsnittet om test, där en brytare från före 1996 nämns | byta elcentral |
| `src/content/guider/inomhus/bygga-innervagg.mdx` | H2 "Ett streck på golvet före allt annat", rad 73, "Bestäm elen nu också" | om nya grupper i centralen |
| `src/content/guider/grund/inreda-kallare.mdx` | H2 "Kostnaden, post för post och i rätt ordning", rad 224 och framåt, i listan över ordningen | byta elcentral |

### 10. Strukturerad data och komponenter

`Article`, `BreadcrumbList`, `FAQPage` om Faq finns. Kostnadstabellen som Markdown-tabell med rubrikrad, enhet (kr) i rubriken, datum och `Källa:`-rad under. `<Kalkylator namn="rotavdrag" />` enligt punkt 9. Ingen `Offer` eller `Product`: sidan säljer ingenting.

### 11. Ettan, och bättre än ettan

**Topp fem, lästa 2026-09-22:**

1. sweclockers.com, forumtråden "Värt att byta elcentral?". **Gick inte att läsa**, servern svarar 403. SOKORDSANALYS 7.2 noterade den som forum på plats ett.
2. clasfixare.se. Från 8 050 kr för arbetet, startavgift 495 kr, 11 500 kr före rot, och spannet 3 000 till 15 000 kr. Säger att bara behörig får byta. Ber läsaren skicka foto på centralen och förteckningen. Inga poster, ingen tid, inga källor, inget datum.
3. svenskaeljouren.se. Bäst i fältet: åtta rubriker, tecken (ofta lösande säkringar, 30 till 50 år gammal, ingen jordfelsbrytare, laddbox), fasta prisspann (lägenhet 15 000 till 25 000, villa 25 000 till 45 000, utökad 35 000 till 60 000 kr), tid (villa 6 till 10 timmar). Inga källor, inget datum, priserna oklart före eller efter rot.
4. dryft.se. Fast pris per antal säkringar: 6 690, 9 870, 13 750 kr. Jordfelsbrytare och gruppförteckning ingår; **åtgärd av jordfel i befintlig anläggning ingår inte.** Om priserna är före eller efter rot säger två läsningar olika; faktabladet ska kontrollera.
5. sallen.se. Timpris 725 kr, 508 kr efter rot, bilkostnad 480 kr. Tecken (över 25 år, brännlukt, blinkande ljus). Inget datum.

Spannen i topp fem går från 3 000 till 60 000 kr utan att någon förklarar vad som skiljer. Frågor läsaren har kvar: vad ingår i priset, vad kan tillkomma, är priset före eller efter rot, hur vet jag att firman är behörig, och vad händer om den nya brytaren börjar lösa ut.

**Det ettan har som vi måste ha:**

1. Att bara behörig får byta, sagt tidigt och rakt.
2. Tecknen på att centralen ska bytas.
3. Prisspann för lägenhet och villa.
4. Tidsåtgång och att bostaden är strömlös.
5. Rotavdraget på arbetet.

**Bättre än ettan, krav:**

1. **Priset uppdelat på poster i en tabell, med priser från minst tre firmor, datum, och tydligt före och efter rotavdrag, med räknaren inbäddad.** Topp fem ger ett spann eller ett från-pris.
2. **Vad som kan tillkomma efter bytet**, främst gamla jordfel som den nya brytaren hittar, som inte ingår i fast pris. Ingen i topp fem förklarar det; Dryft nämner det i en rad.
3. **Hur läsaren kontrollerar att firman är registrerad hos Elsäkerhetsverket**, med länk till registret och lagen namngiven. Topp fem säger "behörig" utan att visa hur man vet.
4. **Förberedelselistan och vad en offert ska innehålla för att gå att jämföra.** Bara Clas Fixare nämner foto på centralen.
5. **Tecknen med källa, och skillnaden mellan måste och bör.** Topp fem listar tecken utan källa och blandar säkerhet med kapacitet.

### 12. Fällor

- **Sidan får inte bli en gör det själv-sida i smyg.** Inga moment inne i centralen, inga kopplingsscheman, inga säkringsstorlekar att välja själv. Det läsaren gör själv är förberedelse och beställning.
- **Prisspannen ska vara daterade och deras villkor utskrivna** (före eller efter rot, vad som ingår). Ett odaterat spann är det topp fem redan har.
- **Inga företagsnamn som rekommendation.** Priserna från firmorna står som källa med datum, inte som tips om vem läsaren ska ringa.
- **Inget årtal i title eller H1.**
- **Avsnitt 6 är lätt att stryka** för att det ser ut som en utvikning. Det är sidans skarpaste fynd och bron till jordfelssidan.
- **Faktabladet ska verifiera** elsäkerhetslagens beteckning, Elsäkerhetsverkets register och dess adress, om nätbolaget måste kopplas in vid byte av central, och Dryfts priser före eller efter rot.
