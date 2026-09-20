# SEO-checklista inför omskrivningen, altan, grund och fasad

Skriven 2026-09-20 av SEO-strategen, på uppdrag av koordinatorn. Fjorton sidor skrivs om i ny röst av en skribent som får ändra all publik text. Det här dokumentet säger vad som inte får försvinna på vägen.

**Så används filen.** Skribenten läser sitt avsnitt före skrivningen. SEO-strategen läser den färdiga sidan mot samma avsnitt efteråt och svarar med konkreta ändringar eller "Godkänd av SEO".

**Gäller alla fjorton sidorna, sägs inte om igen under varje rubrik:**

- Rösten får ändras. Adress, huvudfras, tabellernas tal, källraderna under tabellerna och de interna länkarnas mål får inte ändras.
- Suffixet " · Hantverkstips" läggs på av layouten. Teckenantalen nedan gäller `seoTitle` (eller `title` när `seoTitle` saknas) utan suffix.
- `title` är H1 och sidans löfte. `seoTitle` är `<title>` och får vara mer sökordsdriven, men ska vara läsbar. De två ska inte vara identiska formuleringar (STILGUIDE, Rubriker och metadata).
- Två sidor får aldrig dela de tre första orden i title (INNEHALLSARKITEKTUR 6).
- `title` och `description` är samtidigt kortets rubrik och brödtext på hubben, `/amnen/`, `/guider/` och startsidan (`src/lib/kort.ts`). En ny description ändrar alltså fyra ställen till.
- `kortSvar` är fyra till fem korta meningar, ett tal per mening, första meningen svarar på frågan i H1. Det fetmarkerade talet är ett per sida.
- Alla tal i tabeller har en källrad under sig. Källraden följer med om tabellen skrivs om.
- Strukturerad data byggs av mallen (`Article` + `BreadcrumbList` på guider och kunskap, `FAQPage` där `<Faq>` finns). Skribenten rör inte `strukturdata.ts`, men tar inte heller bort en `<Faq>`, för då försvinner `FAQPage`.
- Volymerna kommer ur `docs/data/keyword-stats-2026-09-16.csv` och `keyword-stats-2026-09-20.csv` (Google Ads, 12 månader till 31 augusti 2026). Där jag gissar står det "uppskattning".

---

## /altan/bygga-altan/

**1. Adress och sidtyp.** `/altan/bygga-altan/`, projektguide, pelare altan, nivå mellan. Fil: `src/content/guider/altan/bygga-altan.mdx`.

**2. Huvudfras och sidofraser.** Huvudfras **bygga altan, 3 600/mån** (YoY −34 %, topp april till maj, botten november till december). Sidofraser som ska finnas naturligt:

- *bygga altan på plintar* (ej mätt, uppskattning) — i H1-området eller ingressen, och i plintavsnittets H2.
- *avstånd mellan plintar altan* 140 — i brödtexten i avsnittet om bärlinor och reglar. Tabellen ägs av regelsidan, inte av den här.
- *bärlina altan dimension* 110 — samma avsnitt, i löptext.
- *fall på altan* (ej mätt) — i H2 om fallet.
- *tryckimpregnerat NTR A* (ej mätt) — i brödtext i stomavsnittet.

Ingen fras måste stå ordagrant. "Bygga altan" ska däremot finnas som ordpar i H1 och i första stycket, eftersom det är sidans enda stora fras.

**3. Title.** Nuvarande `seoTitle`: "Bygga altan steg för steg, måtten och ordningen", 47 tecken. Krav: 40 till 58 tecken, börjar med **Bygga altan**, och ska skilja sig i formulering från H1. "steg för steg" får bytas, "måtten" och "ordningen" får bytas. Orden "Bygga altan" först får inte bytas.

**4. Meta description.** Nuvarande: "Plintavstånd, regeldimension, fall och springa, med måtten från Svenskt Trä. Ordningen som gör altanen rak, och en räknare för ditt eget virke.", 143 tecken. Krav: 120 till 155 tecken, innehåller "altan", nämner att sidan ger mått med källa och en räknare. Inget utropstecken.

**5. H1.** Ett löfte, inte en fras. Ska innehålla "altan" och antyda att sidan täcker hela kedjan. Nuvarande "Bygga altan, från plint till sista trallskruven" får skrivas om, men får inte bli en ren sökfras ("Bygga altan 2026") och inte dela tre första ord med `seoTitle`.

**6. H2-struktur.** Åtta avsnitt i dag. Dessa frågor måste fortfarande besvaras, i den här ordningen:

1. Kräver altanen bygglov, och varför avgörs det innan spaden går i marken. Bär *bygglov altan* som sidofras, men bara som hänvisning.
2. Hur ytan sätts ut och varför diagonalerna mäts före grävningen.
3. Vad plintarna ska stå på och vad tjälen kräver. Bär *avstånd mellan plintar altan*.
4. Vilka dimensioner stommen ska ha och hur långt reglar och bärlinor får spänna. Bär *bärlina altan dimension*.
5. Varför fallet ligger i reglarna och inte i trallen.
6. Vilken tralltjocklek som hör till vilket c-mått (tabellavsnittet).
7. Hur första brädan och skarvarna läggs.
8. Felen som syns först nästa sommar.

**7. Längd.** 2 144 ord i dag. Mål **1 900 till 2 400**. Ettan (K-Bygg, daterad 2026-06-15, namngiven snickare, sju steg) är kortare men har ingen tabell och ingen källa; vår övervikt ligger i tabellerna och ska inte skrivas bort. Under 1 800 ord går något av de åtta avsnitten förlorat.

**8. Bilder.**

- Huvudbild `altan/bygga-altan-stomme.svg` med bildtext. Bildtexten ska nämna plint, bärlina, regel och c 600 mm. Alt-text sätts av mallen ur bildtexten; bildtexten är alltså det som ska vara beskrivande, under 125 tecken räknas inte här eftersom det är en bildtext och inte en alt.
- `<Illustration namn="altan/bygga-altan-fall">`. Alt-texten får kortas men måste beskriva vad bilden visar: genomskärning, trall med springor, lutning bort från huset, inre och yttre bärlina, rörelsefog, en centimeter fall per meter. Alt utan innehåll ger byggfel. Behåll ordet "fall" i alten.

**9. Interna länkar.**

Ut (alla fem ska finnas kvar, med ankartext som säger vad målet handlar om):

| Mål | Var | Nuvarande ankare |
|---|---|---|
| `/altan/bygglov-altan/` | bygglovsavsnittet | bygglov för altan, måtten som avgör |
| `/altan/tradack-pa-mark/` | plintavsnittet | lågt trädäck direkt på mark eller plattor |
| `/altan/reglar-avstand-och-dimensioner/` | stomavsnittet | avstånd mellan reglar och plintar |
| `/altan/trallskruv/` | två ställen, beslag och trall | trallskruv, vilken som håller i tjugo år |
| `/golv/bygga-trappa/` | trappan ner från altanen | bygga trappa |

In (ankartext som andra sidor bygger på, får inte göras meningslös genom att sidan byter namn): `/altan/tradack-pa-mark/`, `/altan/trallskruv/` och `/altan/bygglov-altan/` länkar hit med **"bygga altan, från plint till sista trallskruven"**, `/altan/reglar-avstand-och-dimensioner/` och `/golv/bygga-trappa/` med **"bygga altan"**. Byter H1 helt formulering ska de fem ankartexterna bytas i samma omgång, annars pekar halva klustret på ett namn som inte finns.

**10. Strukturerad data och komponenter.** `<Verktygskort kalkylator="bygglov-altan" />` i bygglovsavsnittet och `<Kalkylator namn="altan" />` i stomavsnittet. Båda ska ligga kvar, och kalkylatorn ska stå efter att spännvidd och dimension har förklarats, inte före. En `<Varning>` om hög altan och konstruktör. En `<Markering>` ("28 mm trall"), en per sida. Ingen `<Faq>` i dag, och ingen ska läggas till här: FAQ-frågorna för altan ligger på bygglovs- och regelsidan.

**11. Det ettan har som vi måste behålla** (ur `underlag-bygga-altan-2026-09-19.md` avsnitt 3):

1. Dimensionstabellen tjocklek mot c-mått mot skruvlängd, med TräGuiden som källrad. Ettan har ingen tabell alls.
2. Springan som mått per brädbredd (5, 6, 7 mm), inte "ett tumstocksblad".
3. Bygglovsfrågan före första spadtaget, med verktygskortet inbäddat.
4. Kalkylatorn inbäddad där talen förklaras.
5. Plintavståndet som räknat tal ur Lathunden, inte tumregeln "max 2 meter".

**12. Fällor.** Det här bär ranking och stryks lätt:

- Meningen som säger att **c 600 mm** är mitt till mitt och att cc och s betyder samma sak. Den finns på fem sidor och är sajtens enda skrivsätt (STILGUIDE punkt 10).
- Tabellen med tjocklek, c-mått och skruvlängd, inklusive raden "Källa: TräGuiden, läggning av trall, hämtad 19 september 2026".
- Tabellen med brädbredd mot springa.
- Meningen om att Lathunden ger 1,47 m mellan plintarna för 45 × 170 mm under reglar som spänner 3,6 m, alltså rättelsen av "två och en halv meter som står på halva internet". Det är sidans tydligaste skillnad mot fältet.
- Orden NTR A och NTR AB med sin skillnad. Två bokstavskombinationer som ingen konkurrent har.

---

## /altan/tradack-pa-mark/

**1. Adress och sidtyp.** `/altan/tradack-pa-mark/`, projektguide, pelare altan, nivå mellan. Fil: `src/content/guider/altan/tradack-pa-mark.mdx`.

**2. Huvudfras och sidofraser.** Huvudfras **bygga trädäck, 1 000/mån** (YoY −41 %). Sidan äger dessutom **trädäck på mark, 320/mån, +129 % på ett år**, den enda växande frasen i hela altanklustret. Sidofraser:

- *trädäck på mark* 320 — i `seoTitle`, i en H2 och i första stycket.
- *trädäck på plattor* 90 — i H2 om de två metoderna.
- *trädäck på gräsmatta* 70 — i brödtexten i markavsnittet, där vi säger att gräs och matjord ska bort.
- *trädäck direkt på mark* 10 — i H1 eller ingressen.

**3. Title.** Nuvarande `seoTitle`: "Bygga trädäck på mark, måtten för makadam, reglar och fall", 58 tecken. Krav: högst 58 tecken, måste innehålla **trädäck på mark** som sammanhängande ordföljd, eftersom det är den växande frasen. "Bygga" får stå kvar först. Svansen får skrivas om.

**4. Meta description.** Nuvarande: "Makadam, markduk och markreglar i NTR A. Måtten för fall och regelavstånd, och när det låga däcket är fel och altanen på plintar är rätt.", 137 tecken. Krav: 120 till 155 tecken, innehåller "trädäck", lovar mått och gränsen där metoden är fel.

**5. H1.** Ska säga att däcket ligger på marken utan plintar. Får inte dela tre första ord med `/altan/bygga-altan/`:s title, alltså inte börja "Bygga altan". Nuvarande "Bygga trädäck direkt på mark, utan en enda plint" är rätt riktad.

**6. H2-struktur.** Elva avsnitt i dag. Dessa svar måste finnas kvar:

1. Lagren i marken i rätt ordning, med djup och packning.
2. Direkt på makadam mot på betongplattor, med jämförelsetabellen. Bär *trädäck på plattor*.
3. Träskyddsklass: NTR A mot mark, NTR AB ovanför. Sidans viktigaste avsnitt.
4. Fallet från huset i mm per meter.
5. Grundisoleringspapp på regelns översida, och att luftningen saknar källa.
6. Regelavståndet styrs av tralltjockleken.
7. Hur däcket blir rakt utan fasta punkter.
8. Trallen, springan och skruven.
9. Materialåtgång (kalkylatorn).
10. Bygglov för ett däck som ligger på marken.
11. När plintar är rätt och metoden fel.

**7. Längd.** 2 500 ord i dag. Mål **2 200 till 2 800**. Ettan (Bolist) är runt 900 ord och saknar fall, träskyddsklass, dimension och bygglov. Vår längd är motiverad av att vi har sex saker de inte har; ord utöver det ska inte läggas till.

**8. Bilder.**

- Huvudbild `altan/tradack-sektion.svg`, bildtexten ska nämna att reglarna ligger på markduk och makadam, att hela stommen lutar bort från huset och att c 600 mm är regelavståndet.
- `<Illustration namn="altan/tradack-plattor">`. Alt-texten ska beskriva snittet: regel som vilar på två plattor med 2 m mellan sig och hänger fritt däremellan. Behåll "2 m" i alten.

**9. Interna länkar.**

Ut: `/altan/reglar-avstand-och-dimensioner/` (två ställen: plattvarianten och regelavståndet), `/altan/trallskruv/` (två ställen), `/altan/bygglov-altan/`, `/altan/bygga-altan/` (i sista avsnittet, när plintar är rätt).

In: `/altan/bygga-altan/` och `/altan/bygglov-altan/` med **"lågt trädäck direkt på mark eller plattor"**, `/altan/trallskruv/` med **"lågt trädäck på mark"**, `/altan/reglar-avstand-och-dimensioner/` med **"lågt trädäck direkt på mark"**. Ankarna innehåller frasen som växer; de ska inte bytas mot "det låga däcket" eller liknande.

**10. Strukturerad data och komponenter.** `<Kalkylator namn="altan" />` i materialavsnittet, `<Verktygskort kalkylator="bygglov-altan" />` i bygglovsavsnittet, en `<Faktaruta>` om att luftningen inte gick att belägga, en `<Markering>` ("c 600 mm"). Faktarutan om det vi inte kunde belägga är en E-E-A-T-tillgång och tas inte bort. Ingen `<Faq>`.

**11. Det ettan har som vi måste behålla** (ur `underlag-tradack-pa-mark-2026-09-19.md`):

1. Kopplingen mellan stödavstånd och regeldimension. Ettan, tvåan och Bygghemma säger alla "plattor med cirka två meters mellanrum" utan att säga vilken regel som klarar det.
2. Träskyddsklassen NTR A mot NTR AB. Ingen av de tre översta nämner den.
3. Fallet 10 mm per meter och grundisoleringspappen på regelns översida. Finns inte i någon konkurrent.
4. Att vi skriver ut var källorna tiger (luftningen).
5. Avsnittet om när metoden är fel. Byggvaruhusens guider har inget skäl att avråda.

**12. Fällor.**

- Jämförelsetabellen "Frågan | Direkt på makadam | På betongplattor" med raderna 45 × 95 mm, 45 × 145 mm, fritt spann och stöd. Den är sidans svar på ettans lucka.
- Meningen om att Svenskt Trä lägger duken **ovanpå** makadamen medan handelns guider lägger den i botten, och att vi lägger en av varje. Den nyansen finns ingen annanstans.
- Talet 200 mm packad makadam och ordet markvibrator.
- Meningen om att räknaren börjar på 45 × 120 mm och att Lathundens altantabell saknar rad för 45 × 95 mm. Den håller ihop sidan med kalkylatorn och med regelsidan.
- Andra stycket, där vi säger att vi läst de tre översta guiderna och att ingen nämner träskyddsklass, fall eller spännvidd. Förstahandsarbetet ska synas.

---

## /altan/trallskruv/

**1. Adress och sidtyp.** `/altan/trallskruv/`, problemguide, pelare altan, nivå enkel. Fil: `src/content/guider/altan/trallskruv.mdx`.

**2. Huvudfras och sidofraser.** Huvudfras **trallskruv, 3 600/mån** (YoY −18 %, topp maj, botten december till februari). Sidofraser:

- *trallskruv längd* och *trallskruv 28 mm trall* (ej mätta, uppskattning) — i första H2 och i brödtext.
- *rostfri trallskruv A4* (ej mätt) — i H2 om stålet.
- *skruv till trall* 30 — i brödtext, en gång, naturligt.
- *regelavstånd trall* 50 — i brödtexten under första tabellen.
- *trallskruv per kvm* (ej mätt) — i H2 om antalet.

**3. Title.** Nuvarande `seoTitle`: "Trallskruv, rätt kvalitet och rätt längd till 28 mm trall", 57 tecken. Krav: högst 58 tecken, **börjar med ordet Trallskruv**, och ska innehålla antingen längden eller kvaliteten. Ordet först är inte förhandlingsbart: frasen är kommersiell, butikerna äger SERP:en, och ledordet är det enda vi har.

**4. Meta description.** Nuvarande: "Rostfri A4, A2 eller ytbehandlad C4 till altanen. Rätt längd till 28 mm trall, antal skruv per kvadratmeter och varför det blir svarta ränder.", 142 tecken. Krav: 120 till 155 tecken, innehåller "trallskruv" eller "trall", nämner både kvalitet, längd och antal. "Svarta ränder" är den formulering som drar klick och bör vara kvar i någon form.

**5. H1.** Ska innehålla ordet **trallskruv** och ett löfte om hållbarhet eller val. Nuvarande "Trallskruv, vilken som håller i tjugo år" är rätt, och tjugoårslöftet infrias i stålavsnittet, så byts H1 ska löftet fortfarande besvaras i texten.

**6. H2-struktur.** Åtta avsnitt. Dessa svar måste finnas kvar:

1. Måttet först: 4,2 × 55 mm till 28 mm trall, med tabellen. Bär *trallskruv längd*.
2. Stålet, korrosivitetsklass och oberoende test. Bär *rostfri trallskruv A4*.
3. Virket som angriper skruven inifrån (garvsyra, koppar, svarta ringar).
4. Vad som gör en trallskruv till en trallskruv (hals, fibersnitt, huvud, torx, varvtal).
5. Så många skruv går det åt, med tabell och räknare. Bär *trallskruv per kvm*.
6. Färgen och grånandet.
7. Skruvautomat eller skruvdragare.
8. Resten av altanbygget (länkavsnittet).

**7. Längd.** 2 379 ord i dag. Mål **2 000 till 2 500**. Butikernas guider ligger på 500 till 1 000 ord. Vår längd bärs av fyra tabeller och ett citerat test; skrivs tabellerna bort ska längden ner, inte fyllas med text.

**8. Bilder.**

- Huvudbild `altan/trallskruv-sektion.svg`. Bildtexten ska säga att skruven är delgängad och att den släta halsen går genom trallen.
- `<Illustration namn="altan/trallskruv-kant">`. Alten ska beskriva två brädor uppifrån, två skruv per regel, 30 mm från kanten, och den inringade skruven som sitter för nära. Behåll "trettio millimeter" eller "30 mm" i alten.

**9. Interna länkar.**

Ut: `/altan/reglar-avstand-och-dimensioner/` (under första tabellen), `/altan/tradack-pa-mark/` (A2-fallet), `/altan/bygga-altan/` och `/altan/bygglov-altan/` (sista avsnittet).

In: `/altan/bygga-altan/` (två ställen), `/altan/tradack-pa-mark/` (två ställen) och `/altan/reglar-avstand-och-dimensioner/` länkar hit med **"trallskruv, vilken som håller i tjugo år"**, `/golv/bygga-trappa/` med **"trallskruv"**. Sex inlänkar, fler än någon annan sida i klustret. Tappar H1 ordet trallskruv blir alla sex fel.

**10. Strukturerad data och komponenter.** `<Kalkylator namn="altan" />` i antalsavsnittet, `<Varning>` om rostfritt i varmförzinkade beslag, `<Markering>` ("55 mm"). Fyra tabeller: tjocklek mot längd, läge mot kvalitet, Villaägarnas testresultat, skruv per kvm. Ingen `<Faq>` i dag; läggs en till ska den ha minst fyra frågor och `FAQPage` följer automatiskt.

**11. Det ettan har som vi måste behålla** (ur `underlag-trallskruv-2026-09-19.md`):

1. Gunnebos saltspraytest enligt ISO 9227 med översättningen 96 timmar ≈ 20 år. Ingen av de tre översta nämner en mätning.
2. Villaägarnas test från maj 2023 med åtta skruvar, betyg och priser, inklusive att tvåan kostade en fjärdedel av vinnaren.
3. Antalet skruv räknat på läsarens egen altan, med kvittot att räkningen ger 32 per kvm, samma tal som Essve och Bauhaus.
4. Halslängden och varför den ska vara lika lång som trallen är tjock.
5. Att källorna säger olika om längden (TräGuiden 55 mm, Proffsmagasinet 70 mm) och vilken vi följer.

**12. Fällor.**

- Testtabellen med de åtta skruvarna och betygen. Den är sidans enda oberoende data och den enda anledningen att den kan slå en butikssida.
- Prismeningen: 1,48 kr mot 0,35 kr per skruv, förpackningar om 200 till 250 skruv, 2023. Talen är daterade och ska inte tvättas bort som "gamla".
- Varvtalen 400 till 1 200 mot 400 till 2 500 och Sencos 1 600 eller 2 500. Det är hela argumentet i skruvautomatsavsnittet.
- Räkneexemplet 4 × 3 m, 28 × 120 mm, c 600 mm, 384 skruv. Det kopplar sidan till kalkylatorn.
- Anodiskt index 0,70 volt mot 0,25 volt i varningsrutan.

---

## /altan/bygglov-altan/

**1. Adress och sidtyp.** `/altan/bygglov-altan/`, kunskapsartikel, pelare altan, nivå enkel. Fil: `src/content/kunskap/altan/bygglov-altan.mdx`. Inga produktkort, ingen reklammärkning.

**2. Huvudfras och sidofraser.** Huvudfras **bygglov altan, 1 000/mån** (YoY −32 %, topp april till maj). Sidofraser:

- *altan utan bygglov* 70 — i en H2 eller i brödtexten i tabellavsnittet.
- *altan höjd bygglov* 10 och *altan 1,8 meter* (ej mätt) — i H2 om höjdmätningen.
- *bygglovsfri altan* 10 — i brödtext.
- *altan tomtgräns* (ej mätt) — i H2 om grannens medgivande.
- *bygglov altan tak* (ej mätt) — i H2 om tillbyggnad.

Notera: **grannemedgivande (210, +55 %)** får förekomma naturligt men ska inte bli sidans ledord i någon rubrik. Frasen är reserverad för det planerade verktyget `/rakna/grannemedgivande/` (SOKORDSANALYS 7.4).

**3. Title.** Nuvarande `seoTitle`: "Bygglov altan, måtten och reglerna 2026", 39 tecken. Krav: 38 till 58 tecken, **börjar med "Bygglov altan"** eller "Bygglov för altan". Årtalet 2026 får stå kvar men är ett underhållsåtagande; byts det ut mot "sedan 1 december 2025" är det lika bra och åldras långsammare.

**4. Meta description.** Nuvarande: "Under 1,8 m högt och inom 3,6 m från huset slipper altanen bygglov. Tabellen för din altan, reglerna sedan 1 december 2025 och vad ett svartbygge kostar.", 153 tecken. Krav: 120 till 155 tecken. Svaret (1,8 m och 3,6 m) ska stå först, eftersom det är det som gör utdraget till en direkt träff.

**5. H1.** Ska innehålla "bygglov" och "altan" och lova ett besked, inte en genomgång. Nuvarande "Bygglov för altan, måtten som avgör" håller.

**6. H2-struktur.** Åtta avsnitt. Dessa svar måste finnas kvar:

1. Hur höjden mäts, från marken vid yttersidan till golvets ovansida, och vad som händer på sluttande tomt och med räcke. Bär *altan höjd bygglov*.
2. Beslutstabellen "Din altan | Bygglov" med åtta rader och lagrum i källraden. Bär *altan utan bygglov*.
3. Grannens ja vid 4,5 meter. Bär *altan tomtgräns*.
4. Utanför detaljplan.
5. Tak, inglasning och altan på garagetak. Bär *bygglov altan tak*.
6. Att anmälan inte krävs sedan 1 december 2025.
7. Vad ett svartbygge kostar, med avgiftstabellen.
8. Fråga kommunen innan du köper virket.

Första skärmen: svaret (1,8 m inom 3,6 m, 1,2 m längre bort) ska stå i `kortSvar` och i första stycket, före första H2.

**7. Längd.** 1 380 ord i dag. Mål **1 200 till 1 600**. Boverket (ettan) är kortare och korrekt; Bygglovstjänst (tvåan) är cirka 6 000 ord och drunknar. Vår position är mitt emellan, och den ska hållas.

**8. Bilder.** Huvudbild `altan/bygglov-altan.svg`. Bildtexten ska nämna de tre måtten: höjden från marken till golvets ovansida, avståndet från fasaden till ytterkanten, och att ett glest räcke inte räknas in. Ingen inline-illustration i dag.

**9. Interna länkar.**

Ut: `/altan/tradack-pa-mark/` (det låga däcket kommer aldrig nära måtten), `/altan/bygga-altan/` och `/altan/reglar-avstand-och-dimensioner/` (sista avsnittet), `/guider/niva/enkel/` (fler enkla guider). Länken till nivåfiltret är den enda på sidan till ett galleri och ska ligga kvar.

In: `/altan/bygga-altan/`, `/altan/tradack-pa-mark/` och `/altan/reglar-avstand-och-dimensioner/` länkar hit med **"bygglov för altan, måtten som avgör"**, `/altan/trallskruv/` med **"bygglov för altan"**.

**10. Strukturerad data och komponenter.** `<Kalkylator namn="bygglov-altan" />` direkt under beslutstabellen, `<Markering>` ("4,5 meter"), `<Varning>` om byggsanktionsavgiften, och **`<Faq>` med fem frågor**. Antalet fem ska vara kvar; frågorna får skrivas om. Faq-fråga två har `lank` till `/rakna/bygglov-altan/` och den länken ska följa med. Sidan är den enda i altanklustret med `FAQPage`.

**11. Det ettan har som vi måste behålla** (ur `underlag-bygglov-altan-2026-09-16.md` avsnitt 3):

1. Beslutstabellen "min altan är X, då gäller Y". Ingen av de tre översta har den.
2. Rätt lagrum efter 1 december 2025: PBL 9 kap. 19, 34, 35, 10, 37 och 38 §§, PBF 6 kap. 1 § och 9 kap. 12 §, plus att attefallsaltan är ett historiskt ord.
3. Räkneexemplet på sanktionsavgiften i kronor, med prisbasbeloppet 59 200 kr.
4. Skissen med tre mått i samma bild.
5. Boverkets egna mått (1,8 m inom 3,6 m, 1,2 m längre bort, inga mått utanför detaljplan) återgivna korrekt. Ettan är en myndighet; vi vinner inte genom att säga något annat, utan genom allt runt omkring.

**12. Fällor.**

- Avgiftstabellen 20, 30 och 40 kvm med talen 20 720, 23 680 och 26 640 kr, och raden som säger att uträkningen är vår.
- Meningen om att orden friggebod, attefallshus och attefallsaltan försvann ur lagen 1 december 2025 och att anmälan inte längre krävs. Det är sidans tydligaste aktualitetsfördel och den enda punkt där halva SERP:en är inaktuell.
- Meningen om att 9 kap. 34 § inte räknar upp altaner, men att Boverket ändå råder till medgivande. Ärligheten är poängen.
- Prickmarksstycket med 50 kvadratmeter.
- Mål P 5608-13 om altan ovanpå garaget.
- Meningen "Många sidor om altan är skrivna före december 2025 och säger fortfarande att anmälan krävs. Titta på datumet." Den är sidans enda direkta jämförelse med fältet.

---

## /altan/reglar-avstand-och-dimensioner/

**1. Adress och sidtyp.** `/altan/reglar-avstand-och-dimensioner/`, kunskapsartikel, pelare altan, nivå mellan. Fil: `src/content/kunskap/altan/reglar-avstand-och-dimensioner.mdx`.

**2. Huvudfras och sidofraser.** Huvudfras **avstånd mellan reglar altan, 70/mån** (+80 % på ett år). Liten fras, växande, och sidan är klustrets tabellsida. Sidofraser:

- *avstånd mellan plintar altan* 140 — i H2 om plintavståndet. Den här sidan, inte `/altan/bygga-altan/`, äger plinttabellen.
- *plintavstånd altan* 40 — samma avsnitt, i brödtext.
- *bärlina altan dimension* 110 — samma avsnitt.
- *regelavstånd trall* 50 — i H2 om tralltjockleken.
- *reglar altan dimension* 20 — i H2 om spännvidden.

**3. Title.** Nuvarande `seoTitle`: "Avstånd mellan reglar altan, tabell med spännvidder", 51 tecken. Krav: 45 till 58 tecken, innehåller **avstånd mellan reglar** och ordet **altan**, och ordet **tabell**. Tabellordet drar klick på en fras vars hela intention är att få ett tal.

**4. Meta description.** Nuvarande: "c 600 mm gäller 28 mm trall. Spännvidden per regeldimension ur Svenskt Träs Lathunden, plintavståndet som följer av bärlinan, och när du går upp ett steg.", 154 tecken. Krav: 120 till 155 tecken, börjar med talet c 600 mm. Svaret först, källan sedan.

**5. H1.** Ska lova tabellen. Nuvarande "Avstånd mellan reglar och plintar, tabellen du letar efter" är rätt och får inte tappa ordet plintar, eftersom sidan äger båda tabellerna.

**6. H2-struktur.** Sex avsnitt. Dessa svar måste finnas kvar:

1. Trallens tjocklek bestämmer c-måttet, med tabell. Bär *regelavstånd trall*.
2. Så långt får reglarna spänna mellan bärlinorna, med spännviddstabellen. Bär *reglar altan dimension*.
3. Plintavståndet följer av bärlinan, med bärlinetabellen. Bär *avstånd mellan plintar altan* och *bärlina altan dimension*.
4. Vad du vinner och förlorar på c 400 mm.
5. Snözonen som inte står i tabellen.
6. Tre saker tabellerna inte täcker (räcket, regel i flera fack, virkeskvaliteten).

**7. Längd.** 1 590 ord i dag. Mål **1 300 till 1 700**. Hela förstasidan i SERP:en svarar "60 cm" på cirka 150 till 800 ord. Vår längd är tabellerna plus förklaringen av när man går upp ett steg; mer text hjälper inte en tabellsökare.

**8. Bilder.** Huvudbild `altan/reglar-avstand.svg`. Bildtexten ska säga att bilden visar bjälklaget uppifrån, att reglarna ligger med c 600 mm och spänner mellan bärlinorna, och att spännvidden är måttet mellan bärlinorna och inte altanens längd. Den sista satsen rättar den vanligaste missuppfattningen och ska inte kortas bort. Ingen inline-illustration.

**9. Interna länkar.**

Ut: `/altan/trallskruv/`, `/altan/tradack-pa-mark/`, `/altan/bygglov-altan/`, `/rakna/altan/` (ankare "trall-, regel- och plinträknaren"), `/altan/bygga-altan/`, `/altan/` (hubben). Länken till hubben är den enda i hela materialet från en artikel till `/altan/` och ska ligga kvar.

In: `/altan/bygga-altan/` med **"avstånd mellan reglar och plintar"**, `/altan/tradack-pa-mark/` med **"avstånd mellan reglar och plintar, tabellen du letar efter"** och **"avstånd mellan reglar och plintar"**, `/altan/trallskruv/` och `/altan/bygglov-altan/` med **"avstånd mellan reglar och plintar"**. Fem inlänkar med nästan identisk ankartext, alla med huvudfrasens ord.

**10. Strukturerad data och komponenter.** `<Kalkylator namn="altan" />` efter spännviddstabellen, `<Markering>` ("c 600 mm"), `<Varning>` om räckets extra regel, och **`<Faq>` med fyra frågor**. Antalet fyra ska vara kvar. Faq-fråga två har `lank` till `/rakna/altan/`, den följer med. Tre tabeller, alla med källrad och sidhänvisning till Lathunden (sid. 24, 30 och 49).

**11. Det ettan har som vi måste behålla** (ur `underlag-reglar-avstand-2026-09-19.md`):

1. Tabellen ur primärkällan. Hela förstasidan svarar "60 cm" och ingen visar Svenskt Träs tal.
2. Plintavståndet i samma sida som regelavståndet.
3. Skillnaden mellan c-måttet (trallen styr) och spännvidden (regelhöjden styr). Konkurrenterna blandar ihop dem.
4. Hållfasthetsklassen C24 mot C14, som skiljer nästan en halvmeter.
5. Snözonen besvarad i stället för viftad bort.

**12. Fällor.**

- De tre tabellerna med exakta decimaler (1,91 / 2,31 / 2,71 / 3,11 / 3,51 / 3,91 och bärlineraderna). Ett avrundat tal är en annan sida.
- Källraden med EKS 11, säkerhetsklass 1, klimatklass 3 och nedböjning 1/200. Den är skälet att tabellen går att lita på.
- Meningen om att 45 × 95 mm inte finns i Lathundens altantabell, och undantaget för däcket på mark.
- Lathundens regel att reglarnas centrumavstånd bör vara högst en fjärdedel av plintavståndet, alltså högst 2,4 m vid c 600 mm.
- Meningen om att flera altansidor säger 2,5 m för en bärlina på 45 × 170 mm och att det talet hör hemma på raden för 45 × 220 mm.

---

## /altan/

**1. Adress och sidtyp.** `/altan/`, pelarhub, filen `src/content/pelare/altan.mdx`. **Hubben har ingen brödtext.** Mallen `PelarHub.astro` bygger fyra galleriavsnitt ur artiklarnas frontmatter: Hitta felet, Välj rätt, Gör det själv och Räkna. Skribenten skriver alltså ingen löptext här och lägger inte till någon.

**2. Huvudfras och sidofraser.** Hubben jagar **ingen egen fras i första hand**. "bygga altan" (3 600) ägs av `/altan/bygga-altan/` och "bygga trädäck" (1 000) av `/altan/tradack-pa-mark/`; en hub som tar deras ord kannibaliserar klustrets två viktigaste sidor. Hubbens jobb är navigation och länkfördelning. Orden som får finnas i `title`, `description` och `ingress`: *altan*, *trädäck*, *staket*, *plank*, *bygglov*.

**3. Title.** Nuvarande `title` (ingen `seoTitle`): "Altan och trädgård", 18 tecken. Krav: 15 till 40 tecken. Får **inte** börja med "Bygga altan" eller "Bygga trädäck".

**4. Meta description.** Nuvarande: "Guider om altan, trädäck, staket, plank och bygglov. Regler som gäller, virke som håller, och ordningen som gör att det blir rakt.", 130 tecken. Krav: 120 till 155 tecken, räknar upp vad pelaren täcker. Den syns också som kort på `/amnen/`.

**5. H1.** Lika med `title`. Kort, två till fyra ord, namnet på ämnesområdet.

**6. H2-struktur.** Fasta, satta av mallen: Hitta felet, Välj rätt, Gör det själv, Räkna. Får inte ändras från innehållsfilen.

**7. Längd.** Noll ord brödtext i dag, och så ska det förbli. Enda texten är `title`, `description` och `ingress` (79 tecken i dag, håll den under 110, den visas både här och på `/amnen/`).

**8. Bilder.** Inga egna. Korten hämtar artiklarnas `bild`.

**9. Interna länkar.** Automatiska, ur artiklarnas frontmatter. In till hubben: brödsmulan på varje altanartikel, sidfoten, menyn, och en manuell länk från `/altan/reglar-avstand-och-dimensioner/` med ankartexten **"altan och trädgård"**. Ändras hubbens `title` ska den ankartexten ändras samtidigt.

**10. Strukturerad data och komponenter.** `BreadcrumbList`. `Kortgrupp` i fyra grupper, byggd av mallen. Tillåtna komponenter i hubbar är `Faktaruta`, `Varning`, `Verktygskort`, `Markering` och `Illustration`, men ingen används i dag och ingen ska läggas till.

**11. Det ettan har som vi måste behålla.** Inte tillämpligt. En hub rankar inte mot en etta, den fördelar länkkraft inom klustret. Kravet är i stället att alla fem altansidor syns i rätt grupp, alltså att artiklarnas `typ` och `niva` inte ändras i omskrivningen.

**12. Fällor.**

- Att skribenten lägger till brödtext i hubfilen. Filen ska vara frontmatter och ingenting mer (kommentaren i filen säger det, behåll den).
- Att artiklarnas `typ` ändras (projektguide, problemguide, kunskap). Byts `typ` byter kortet grupp och hubben tappar sin struktur.
- Att `description` görs kortare än 120 tecken. Den är kortets brödtext på fyra sidor.

---

## /grund/dranera-hus/

**1. Adress och sidtyp.** `/grund/dranera-hus/`, projektguide, pelare grund, nivå mellan. Fil: `src/content/guider/grund/dranera-hus.mdx`.

**2. Huvudfras och sidofraser.** Huvudfras **dränera hus, 1 000/mån** (YoY −45 %, topp september). "dränering av hus" (1 000) är samma fras räknad två gånger av Google. Sidofraser:

- *dränera källare* 320 — i första H2 eller i brödtexten i diagnosavsnittet.
- *dränering runt hus* 260 (+52 % senaste tre månaderna) — i H2 om momenten eller om röret och slingan.
- *dränera själv* 90 — i H2 om vad du kan göra själv.
- *dränering steg för steg* (ej mätt) — i H2 om momenten.

**Kostnadsfraserna ligger på verktyget, inte här.** "dränering kostnad" 590, "vad kostar dränering" 320, "dränering kostnad per meter" 50 ägs av `/rakna/dranering/`. Den här sidan får nämna pengar men ingen H2 får ledas av ordet kostnad eller pris.

**3. Title.** Nuvarande `seoTitle`: "Dränera hus, steg för steg med mått och källa", 45 tecken. Krav: 40 till 58 tecken, **börjar med "Dränera hus"**. "steg för steg" får bytas; "mått och källa" är sidans löfte och bör finnas kvar i någon form.

**4. Meta description.** Nuvarande: "Schakt, fall på ledningen, fuktskydd mot väggen och återfyllning i lager, med måttet och källan bakom varje. Plus var gränsen går för eget arbete.", 146 tecken. Krav: 120 till 155 tecken, innehåller "dränera" eller "dränering", lovar mått med källa och gränsen för eget arbete.

**5. H1.** Ska innehålla ordet dränera och lova både förloppet och gränsen för eget arbete. Nuvarande "Dränera huset, så går det till och hur långt du kommer själv" är 60 tecken, vilket är i längsta laget för en H1 på mobil men fungerar. Kortare är bättre, ordet dränera måste vara kvar.

**6. H2-struktur.** Tio avsnitt. Dessa svar måste finnas kvar, i den här ordningen:

1. Diagnosen före grävningen: markfukt, kondens eller läckage, plus det billiga (marklutning, stuprör, dagvattenbrunn).
2. Momenten i ordning, en numrerad lista på åtta punkter.
3. Schaktet, bredden och de djup som blandas ihop, med källtabellen. Bär *dränera källare*.
4. Fallet på ledningen, med källtabellen och slingans högpunkt. Bär *dränering runt hus*.
5. Röret, makadamen och duken.
6. Fuktskyddet mot muren, matta eller skiva, och diffusionsöppenhet.
7. Återfyllningen i lager och det finkorniga översta lagret.
8. Dagvattnet och kommunens regel.
9. Vad du kan göra själv, i tre högar. Bär *dränera själv*.
10. Så beställer du, när på året och vad som ska stå i offerten.

**7. Längd.** 3 044 ord i dag. Mål **2 700 till 3 200**. Konkurrenterna ligger på 800 till 1 500 ord. Vår längd är motiverad av tio konkreta luckor i fältet (se punkt 11) och av två källtabeller. Går sidan under 2 500 ord är något av de tio avsnitten borta.

**8. Bilder.**

- Huvudbild `grund/dranera-lagren.svg`. Bildtexten ska räkna upp lagren i rätt ordning från muren och utåt: fuktskydd, makadam, fiberduk, återfyllning.
- `<Illustration namn="grund/dranera-fallet">`. Alten ska beskriva huset uppifrån, slingan runt grunden, rensbrunn i varje hörn, högpunkt och uppsamlingsbrunn. Behåll orden "rensbrunn" och "högpunkt" i alten.

**9. Interna länkar.**

Ut: `/fukt/fukt-i-kallaren/` (två gånger, diagnosen och fuktutredningen), `/fukt/avfuktare-kallare/` (när det är kondens), `/grund/sprickor-i-husgrunden/` (i varningsrutan om frilagd mur), `/grund/isolera-kallarvagg/` (i faktarutan om matta eller skiva), `/grund/isolera-krypgrund/`, `/grund/inreda-kallare/`.

In, med ankartext: `/fukt/avfuktare-kallare/`, `/fukt/fukt-i-kallaren/`, `/golv/golv-i-kallare/` (två ställen), `/grund/inreda-kallare/`, `/grund/isolera-krypgrund/` och `/grund/isolera-kallarvagg/` med **"dränera huset"**, `/grund/sprickor-i-husgrunden/` med **"guiden om att dränera huset"**. Åtta inlänkar, flest i hela materialet. Ankartexten "dränera huset" ska fortsätta vara en rimlig beskrivning av sidan.

**10. Strukturerad data och komponenter.** `<Verktygskort kalkylator="kallare" />` i diagnosavsnittet och `<Kalkylator namn="dranering" />` i beställningsavsnittet, sist. Ordningen är medveten: verktyget för diagnos tidigt, kostnadsräknaren när läsaren ska beställa. En `<Varning>` om frilagd grundmur, en `<Faktaruta>` om matta eller skiva. Två källtabeller. Ingen `<Faq>` i dag.

**11. Det ettan har som vi måste behålla** (ur `underlag-dranera-hus-2026-09-19.md` avsnitt 1):

1. Källa och avsändare på varje mått, och en tabell där källorna är oense om schaktdjupet.
2. Rättelsen av räknefelet "20 graders lutning tre meter bort från huset", med räkningen utskriven (20 grader = 36 cm per meter, talet som avses är 1:20).
3. Gränsen för eget arbete i tre högar.
4. Kommunens dagvattenregel och att ersättningen kan falla bort vid felkoppling.
5. Att de översta 30 cm återfyllning inte ska dränera.

**12. Fällor.**

- Tabellen "Källa | Djup, cm | Mäter till" med Vi i Villa 15, Villaägarna 30 till 40, GarBo 50 och Isodrän 10. Den ser ut som en rörig tabell och är sidans starkaste enskilda innehåll.
- Tabellen "Källa | Fall | Så står det på sidan", med citaten i högerkolumnen. Citatkolumnen är poängen: den visar att 1:200, 0,5 cm och 5 promille är samma tal.
- Hela stycket om 20 grader mot 1:20, med Rockwools och Parocs tal. Ett räknefel som hela branschen kopierar.
- Räkneexemplet 12 × 8 m, 40 löpmeter, 20 m åt vardera hållet, 100 mm höjdskillnad, och meningen att räkningen är vår.
- Meningen om att maskinhyran ska stå på egen rad eftersom Skatteverket undantar grävmaskiner från rotavdraget.
- Anticimex tal: tak på 150 kvm, regn på 20 mm, 3 000 liter.

---

## /grund/inreda-kallare/

**1. Adress och sidtyp.** `/grund/inreda-kallare/`, projektguide, pelare grund, nivå mellan. Fil: `src/content/guider/grund/inreda-kallare.mdx`.

**2. Huvudfras och sidofraser.** Huvudfras **inreda källare, 320/mån** (+50 % senaste tre månaderna, −46 % YoY). Sidofraser:

- *renovera källare* 320 — i brödtext, en gång. Samma avsikt, eget verb, ingen egen sida.
- *källare till bostad* (ingen data) — i H2 om lov och anmälan.
- *inreda källare regler* (ingen data) — i H2 om takhöjd och dagsljus eller om lov.
- *inreda källare kostnad* 10 — i H2 om kostnaden.
- *golv i källare* 390 — **ägs av `/golv/golv-i-kallare/`**. Får nämnas och länkas, men ingen H2 här får ledas av den frasen.

**3. Title.** Nuvarande `seoTitle`: "Inreda källare, fukten och reglerna i rätt ordning", 50 tecken. Krav: 40 till 58 tecken, **börjar med "Inreda källare"**. Ordet "regler" bör finnas kvar, det är sidans vinnbara vinkel.

**4. Meta description.** Nuvarande: "Mät fukten innan något byggs in. Golvet på betongplattan, luften, dagsljuset, och de byggregler som gäller när ett förråd blir bostadsrum.", 138 tecken. Krav: 120 till 155 tecken, innehåller "källare", nämner både fukt och byggregler.

**5. H1.** Ska innehålla "inreda källaren" och sätta ordningen. Nuvarande "Inreda källaren, fuktkraven först" är kort och rätt.

**6. H2-struktur.** Åtta avsnitt. Dessa svar måste finnas kvar:

1. Mät fukten en hel sommar, med talet 75 procent RF.
2. Det som ska vara löst utifrån innan något byggs in.
3. Golvet på betongplattan, tre vägar och gränsvärdet i betongen.
4. Väggen har en egen fälla och en egen sida (gränsdragningen mot systersidan).
5. Luften i ett rum under mark, med flödeskraven.
6. Takhöjd och dagsljus, och varför de gamla talen inte gäller. Bär *inreda källare regler*.
7. Bygglov, anmälan och vägen ut, med utrymningsfönstrets fyra mått. Bär *källare till bostad*.
8. Vad det kostar och i vilken ordning pengarna ska läggas. Bär *inreda källare kostnad*.

**7. Längd.** 3 627 ord i dag, sajtens längsta sida i det här materialet. Mål **3 000 till 3 700**. Ettan (Vi i Villa) är cirka 1 200 ord och saknar hela regelhalvan. Vår längd är motiverad, men det här är sidan där omskrivningen lättast kan **korta** utan förlust: leta i avsnitt 6 och 7, där samma sak sägs två gånger i olika ordning. Inget avsnitt får däremot falla bort.

**8. Bilder.**

- Huvudbild `grund/inreda-kallare-golv.svg`. Bildtexten ska säga att 85 procent gäller betongen i plattan och inte luften i rummet. Den distinktionen är sidans vanligaste missförstånd och får inte kortas bort.
- `<Illustration namn="grund/inreda-kallare-fonster">`. Alten ska beskriva källarfönstret inifrån med tre måttbyglar och villkoret bredd plus höjd minst 1,50 meter. Behåll talen 0,60, 0,90 och 1,20 samt 1,50 i alten.

**9. Interna länkar.**

Ut, tio stycken: `/fukt/fukt-i-kallaren/`, `/fukt/avfuktare-kallare/`, `/rakna/avfuktare/`, `/fukt/luftfuktighet-inomhus/`, `/grund/dranera-hus/`, `/grund/isolera-krypgrund/`, `/grund/isolera-kallarvagg/`, `/golv/golv-i-kallare/`, `/golv/lagga-klickgolv/`, `/golv/bygga-trappa/`. Alla tio ska finnas kvar. Sidan är navet i källarklustret och länkarna är dess funktion.

In: `/fukt/fukt-i-kallaren/`, `/golv/golv-i-kallare/` (tre ställen), `/grund/dranera-hus/` och `/grund/isolera-kallarvagg/` med **"inreda källaren"**, `/golv/lagga-klickgolv/` med **"inreda källaren, fuktkraven först"**.

**10. Strukturerad data och komponenter.** `<Verktygskort kalkylator="kallare" />` i mätavsnittet. Tre `<Faktaruta>` (talen om relativ fuktighet, två källor som säger olika, fläkten kan vara anmälningspliktig), en `<Varning>` om golvvärme. **`<Faq>` med fem frågor**, antalet ska vara kvar. Två tabeller, båda med källrad.

**11. Det ettan har som vi måste behålla** (ur `underlag-inreda-kallare-2026-09-19.md`):

1. Rätt regelverk. Vi är den enda svenska sidan som skriver att BBR är ersatt sedan 1 juli 2026, att takhöjdskravet 2,40 m inte finns längre och som citerar det som gäller i stället. Ettan har sakfelet "minst 2,30 meter krävs".
2. Golvet med gränsvärde och mekanik, inte en materiallista.
3. Rätt fråga först och pengarna i en ordning där de tre första posterna är osynliga när projektet är klart.
4. Utrymningsfönstrets fyra mått i egen skiss.
5. Ventilationens två flödeskrav i liter per sekund.

**12. Fällor.**

- Faktarutan "Talen om relativ fuktighet, och vad var och ett är gräns för" (85, 60, 95, 85 igen, 75). Den ser ut som en parentes och är det enda stället på svenska där talen hålls isär.
- Meningen om att reglerna bytte namn och innehåll 1 juli 2026 och att energikraven ligger kvar till 1 oktober. Datumen är sidans aktualitetsfördel.
- Dagsljusfaktorn 1,0 procent och undantaget 0,8 procent, med villkoret att det bara gäller när en **ny** bostad inreds.
- Summan bredd plus höjd minst 1,50 meter. Det villkoret fäller flest fönster och ingen konkurrent har det.
- Prisetabellen från Byggstart med enheterna styck, kubikmeter, löpmeter och kvadratmeter, plus meningen om att raderna inte går att jämföra rakt av.
- Meningen om att ändrad användning är en bygglovsfråga och inte en anmälningsfråga. Det är felet alla konkurrenter gör.

---

## /grund/isolera-krypgrund/

**1. Adress och sidtyp.** `/grund/isolera-krypgrund/`, projektguide, pelare grund, nivå mellan. Fil: `src/content/guider/grund/isolera-krypgrund.mdx`.

**2. Huvudfras och sidofraser.** Huvudfras **isolera krypgrund, 390/mån** (+52 % senaste tre månaderna). Sidan äger också **krypgrund isolering, 480/mån**, samma intention i omvänd ordning. Sidofraser:

- *krypgrund isolering* 480 — i `seoTitle` eller i en H2, i någon naturlig ordföljd.
- *isolera krypgrund själv* 20 — i H2 om bjälklaget eller i ordningsavsnittet.
- *ventilerad krypgrund* 50 — i H2 om de två sorternas krypgrund.
- *varmgrund* (ej mätt) — i H2 om att isolera marken.
- *ångspärr krypgrund* (ej mätt) — i H2 om ångspärren.

*fukt i krypgrund* (260) och *mögel i krypgrund* (110) hör till `/fukt/avfuktare-krypgrund/`. De får nämnas och länkas, men ingen H2 här leds av dem.

**3. Title.** Sidan har **ingen `seoTitle`** i dag; mallen använder `title`, alltså "Isolera krypgrunden, fukten först och isoleringen sist", 54 tecken. Krav: behåll **"Isolera krypgrund"** eller "Isolera krypgrunden" som de två första orden. Vill skribenten göra H1 friare ska en `seoTitle` läggas till i stället, 40 till 58 tecken, som börjar med huvudfrasen. `seoTitle` sätts av SEO-strategen, inte av skribenten, så flagga i så fall i överlämningen.

**4. Meta description.** Nuvarande: "Två sätt att isolera krypgrunden, U-värden ur tillverkarens tabell och vad du sparar. Mät fukten först, annars bygger du in en grund som blir blötare.", 150 tecken. Krav: 120 till 155 tecken, innehåller "krypgrund", nämner både de två metoderna och varningen.

**5. H1.** Ska innehålla "isolera krypgrunden" och bära ordningen (fukten först). Ordningen är sidans hela tes och ska synas redan i H1.

**6. H2-struktur.** Sju avsnitt. Dessa svar måste finnas kvar:

1. Två sorters krypgrund och hur du ser vilken du har. Bär *ventilerad krypgrund*.
2. Mät fukten först, med gränsen 75 procent RF och sommarmekaniken.
3. Isolera bjälklaget: U-värdetabellen och besparingen i kronor. Bär *isolera krypgrund själv*.
4. Isolera marken i stället, varmgrunden. Bär *varmgrund*.
5. Ångspärren sitter uppe mot bostaden, aldrig under isoleringen. Bär *ångspärr krypgrund*.
6. Ordningen, från hygrometern till sista skivan, numrerad.
7. När du ska lämna grunden i fred.

**7. Längd.** 2 308 ord i dag. Mål **2 000 till 2 500**. Ettan (Gör Det Själv, 2026-02-02) är en byggbeskrivning utan fukt, utan U-värden och utan källor. Vår längd är de tre saker den saknar och ska inte växa.

**8. Bilder.**

- Huvudbild `grund/isolera-krypgrund-bjalklag.svg`. Bildtexten innehåller talet 75 procent och den kopplingen ska vara kvar.
- `<Illustration namn="grund/isolera-krypgrund-varmgrund">`. Alten ska beskriva isolering på marken och innanför grundmuren, tunt bjälklag och igensatt ventil.
- `<Illustration namn="grund/isolera-krypgrund-angsparr">`. Alten ska beskriva två snitt, ett märkt rätt och ett märkt fel, och att den felaktiga har plast även under isoleringen. Orden "rätt" och "fel" ska finnas kvar i alten, annars tappar bilden sin funktion.

**9. Interna länkar.**

Ut: `/fukt/avfuktare-krypgrund/` (två gånger, vid mätningen och i varningsrutan), `/fukt/luftfuktighet-inomhus/`, `/fukt/fukt-i-kallaren/`, `/grund/dranera-hus/`, `/el/tillaggsisolera-vind/`. Alla sex tillfällena ska finnas kvar; länken till vindssidan bär dessutom trafik åt andra hållet.

In: `/el/tillaggsisolera-vind/` (två ställen), `/fukt/avfuktare-krypgrund/`, `/grund/dranera-hus/`, `/grund/inreda-kallare/` och `/fukt/luftfuktighet-inomhus/` länkar hit, alla med ankartexten **"isolera krypgrunden"**. Sex inlänkar med identisk ankartext.

**10. Strukturerad data och komponenter.** `<Verktygskort kalkylator="daggpunkt" />` i mätavsnittet, `<Varning>` om ventilerna, två tabeller (hur du ser vilken grund du har, U-värdetabellen). **`<Faq>` med fem frågor**, antalet ska vara kvar. Ingen `<Kalkylator>` på sidan; lägg inte till en.

**11. Det ettan har som vi måste behålla** (ur `underlag-isolera-krypgrund-2026-09-19.md`):

1. Ordningen mät, åtgärda, isolera, byggd på Boverkets text om att isolering gör grunden kallare och fuktigare.
2. Två konstruktionsprinciper mot varandra, inte en. Ettan visar bara bjälklaget.
3. U-värden ur Rockwools tabell och en besparing som går att räkna efter, med antagandena utskrivna.
4. Ångspärrens placering med källa, och var den inte får sitta.
5. Ettans egna styrkor som vi ändå behåller: konkreta mått på isolering och plastfolie, och att ångspärren ska sluta helt tätt även mot väggarna.

**12. Fällor.**

- U-värdetabellen och de två läsanvisningarna under den (läs vågrätt, läs lodrätt). Utan dem är tabellen bara siffror.
- Räkningen 800 kWh och 1 900 kr, med alla fyra antagandena i punktlistan: formeln ur Bygg & teknik, gradtimmar 100 000, arean 100 kvm, elpriset 2,40 kr enligt SCB. Stryks en punkt blir talet obelagt.
- Reservationen om att gradtimmarna är räknade mot uteluft och att talet är den övre änden av spannet. Den ärligheten är skälet att talet får stå.
- Talet 75 procent relativ luftfuktighet som Boverkets kritiska fukttillstånd, och att det ska mätas på sommaren.
- Ventilationsarean per 100 kvm bjälklagsyta (0,05 kvm vindutsatt, det dubbla vindskyddat) och 1 kubikmeter per timme och kvadratmeter vid fläkt.
- Svenskt Träs tal att kryputrymmet får vara högst 2 till 3 grader kallare än rummen ovanför.

---

## /grund/sprickor-i-husgrunden/

**1. Adress och sidtyp.** `/grund/sprickor-i-husgrunden/`, problemguide, pelare grund, nivå enkel. Fil: `src/content/guider/grund/sprickor-i-husgrunden.mdx`.

**2. Huvudfras och sidofraser.** Huvudfras **sprickor i husgrunden, 70/mån** (+57 % på ett år). Sidan äger ett växande kluster på cirka 290 i månaden:

- *sättningssprickor* 70 (**+240 %, snabbast växande frasen i hela körningen**) — ska stå ordagrant i `seoTitle` och i H2 om sättningssprickan.
- *spricka i grunden* 50 (+29 %) — i H1 eller i brödtext.
- *spricka i källarvägg* 50 — i brödtext i avsnittet om att sprickan går igenom.
- *spricka i betongplatta* 50 — i brödtext.
- *sättningar hus* 210 (−35 %) — **egen H2**, enligt SOKORDSANALYS 7.3. Annan intention, alltså frågan om huset sjunker, och den H2:n ska finnas kvar tills Search Console visar om sidan bär frasen.

**3. Title.** Nuvarande `seoTitle`: "Sprickor i husgrunden, krympspricka eller sättningsspricka", 58 tecken. Krav: högst 58 tecken, **börjar med "Sprickor i husgrunden"** och **slutar på ordet sättningsspricka eller sättningssprickor**. Slutordet är redan rättat efter körning 2 och får inte ändras tillbaka.

**4. Meta description.** Nuvarande: "Så skiljer du en ofarlig krympspricka i husgrunden från en sättningsspricka. Symptomtabell, gipsmarkören som mäter rörelse, och vem du ringer.", 142 tecken. Krav: 120 till 155 tecken, innehåller både "krympspricka" och "sättningsspricka", och lovar en metod, inte en genomgång.

**5. H1.** Ska innehålla "sprickor i grunden" eller "sprickor i husgrunden" och lova beskedet: vad som är normalt och när du ska ringa. H1 rörs inte i sak; formuleringen får bytas.

**6. H2-struktur.** Åtta avsnitt. Dessa svar måste finnas kvar:

1. Titta först, det tar en kvart, med symptomtabellen. Första skärmen ska ge beskedet att de flesta sprickor är ofarliga.
2. Krympsprickorna får vara kvar.
3. Fyra tecken som skiljer sättningssprickan. Bär *sättningssprickor*.
4. Mät sprickan, gipsmarkören och intervallen.
5. Varför marken rör sig under just ditt hus, fem orsaker. Bär *sättningar hus*.
6. Det du gör själv och det du lämnar ifrån dig.
7. När du ska ringa, och vem.
8. Försäkringen betalar sällan för en sättning.

**7. Längd.** 2 571 ord i dag. Mål **2 200 till 2 700**. Ettan (bygg.se) och tvåan (dinbyggare.se) är kortare och saknar metod, tider och försäkringsfrågan. Längden är motiverad av tabellen, mätmetoden och försäkringsavsnittet.

**8. Bilder.**

- Huvudbild `grund/sprickor-grundmur.svg`. Bildtexten kontrasterar den lodräta hårsprickan mot den sneda ur fönsterhörnet, och den kontrasten är sidans diagnos i en bild.
- `<Illustration namn="grund/sprickor-mata">`. Alten ska beskriva två närbilder av samma gipsklick, i mars hel och i september sprucken. Behåll de två tidpunkterna i alten.

**9. Interna länkar.**

Ut: `/fukt/fukt-i-kallaren/` (ankare "guiden om fukt i källaren"), `/grund/dranera-hus/` (ankare "guiden om att dränera huset"), plus `lank` i Faq-fråga två till `/fukt/fukt-i-kallaren/`. Sidan har få utgående länkar och det är medvetet; lägg inte till fler än en.

In: `/fukt/fukt-i-kallaren/` med **"en spricka efter en sättning"**, `/grund/dranera-hus/` och `/grund/isolera-kallarvagg/` med **"sprickor i husgrunden"**. Bara tre inlänkar, färre än någon annan grundsida. Ankartexten från `/fukt/fukt-i-kallaren/` bär inte huvudfrasen och bör inte tas bort under omskrivningen, den fångar läckagefallet.

**10. Strukturerad data och komponenter.** `<Verktygskort kalkylator="dranering" />` i orsaksavsnittet. Två `<Faktaruta>` (sprickan efter en smäll, vad som räknas som en förändring), två `<Varning>` (spackla inte över, förbesiktning före sprängning). **`<Faq>` med fem frågor**, antalet ska vara kvar. Symptomtabellen är en diagnostabell enligt stilguidens undantag: tre kolumner, cellerna får vara korta meningar.

**11. Det ettan har som vi måste behålla** (ur `underlag-sprickor-i-husgrunden-2026-09-19.md`):

1. Symptomtabellen och mätmetoden med tider (en vecka, en månad, ett halvår). Ingen av de tre översta har någondera.
2. Fyra tecken där tre inte sitter i sprickan: dörrar som kärvar, socklar som glipar, sprickan som går genom hela muren.
3. Försäkringsvillkoret citerat. Den enskilt viktigaste upplysningen på sidan och den saknas hos varenda konkurrent.
4. Priser med namngiven källa på både besiktning och geoteknisk utredning.
5. Att vi säger "vänta ett halvår och mät" när alla konkurrenter säljer förstärkning eller lagning.

**12. Fällor.**

- Symptomtabellen med sju rader och källraden under. Den är sidans första skärm efter kortsvaret.
- Meningen om att ingen myndighet och ingen branschorganisation sätter en millimetergräns, och att Geobears 3 mm är en leverantörs tumregel. Den ärligheten är skälet att sidan är trovärdigare än fältet.
- If:s villkorscitat: jordskalv på minst 4 på Richterskalan, jordskred, jordras, bergras, lavin, vulkanutbrott, och att sättning av annan anledning inte ersätts. Med avsnittsangivelsen E och S och datumet december 2025.
- Grundvattentalet: en sänkning med 2 meter i lera lastar marken som en meter ny fyllning.
- SS 460 48 66 med riskområdena 50 meter på berg och 100 meter på lera.
- Gipsklicken, blyertsstrecken och skjutmåttet som tre separata moment. De är sidans metod och den metoden är dess enda verkliga USP.

---

## /grund/isolera-kallarvagg/

**1. Adress och sidtyp.** `/grund/isolera-kallarvagg/`, kunskapsartikel, pelare grund, nivå mellan. Fil: `src/content/kunskap/grund/isolera-kallarvagg.mdx`. Inga produktkort, ingen reklammärkning, inga köpknappar (byggfel om de läggs in i kunskap).

**2. Huvudfras och sidofraser.** Huvudfras **isolera källare invändigt, 50/mån** (+67 % på ett år). Google slår ihop den med "isolera källarvägg invändigt" (30, −50 %). Sidofraser:

- *isolera källarvägg invändigt* 30 — i H1 eller första stycket.
- *isolera källare inifrån* 40 — i H2 om när du ändå får isolera inifrån.
- *isolera källarvägg utvändigt* 20 — i H2 om utsidan.
- *fuktspärr källarvägg* 10 — i avsnittet om plastfolien.
- *ångspärr källare* (ingen data) — samma avsnitt.

**Jaga inte "isolera vägg inifrån" (170).** Det är en annan intention, en yttervägg i vilket hus som helst, och den frasen hör till isoleringsklustret i pelaren El (SOKORDSANALYS 7.3). Blandas den in tappar sidan sin intention.

**3. Title.** Nuvarande `seoTitle`: "Isolera källare invändigt eller utvändigt", 41 tecken. Krav: 40 till 58 tecken, **börjar med "Isolera källare invändigt"** och behåller "eller utvändigt" i svansen. Ledordet är rättat efter körning 2 och får inte ändras tillbaka till "källarvägg".

**4. Meta description.** Nuvarande: "Invändig isolering gör grundmuren kallare, inte varmare. Så vet du om väggen tål det, var taket går i millimeter och varför plastfolien ska bort.", 145 tecken. Krav: 120 till 155 tecken. Första satsen ska vara påståendet som vänder på läsarens antagande; det är sidans klickargument.

**5. H1.** Ska innehålla "isolera källarväggen" och antyda risken. Nuvarande "Isolera källarväggen invändigt utan att stänga in fukten" håller. H1 och URL rörs inte enligt 7.3.

**6. H2-struktur.** Sju avsnitt. Dessa svar måste finnas kvar:

1. Isoleringen värmer rummet och kyler muren, med daggpunkten. Sidans mekanik.
2. Frågan som avgör allt är om väggen är torr i dag, med de två mätningarna.
3. Utsidan först, och en tredjedel räcker långt, med U-värdetabellen. Bär *isolera källarvägg utvändigt*.
4. När du ändå får isolera inifrån, med de tre villkoren och taket i millimeter. Bär *isolera källare inifrån*.
5. Två uppbyggnader som fungerar, regelvägg mot limmad mineralskiva.
6. Det som redan sitter på väggen ska bort först.
7. Ordningen, numrerad, och steget alla hoppar över.

Plastfoliefrågan ligger i avsnitt 4 och bär *fuktspärr källarvägg* och *ångspärr källare*.

**7. Längd.** 2 342 ord i dag. Mål **2 000 till 2 500**. Toppen består av en kort supportsida och tre nästan identiska byggfirmatexter utan en enda siffra. Vår längd är siffrorna.

**8. Bilder.**

- Huvudbild `grund/kallarvagg-daggpunkt.svg`. Bildtexten är lång men bär hela mekaniken: samma vägg i två snitt, daggpunktslinjen ute i det ena och inne i betongen i det andra, och tillverkarens golv på en tredjedel. Kortas bildtexten ska alla tre delarna vara kvar.
- `<Illustration namn="grund/kallarvagg-inifran">`. Alten ska beskriva skiktföljden från betongen och inåt och den överkryssade plastfolien. Behåll "max 70 mm" och "ingen plastfolie" i alten.

**9. Interna länkar.**

Ut: `/fukt/fukt-i-kallaren/` (två gånger, tejptestet och fuktutredningen i varningsrutan), `/rakna/kallare/`, `/fukt/luftfuktighet-inomhus/`, `/grund/dranera-hus/`, `/grund/sprickor-i-husgrunden/`, `/grund/inreda-kallare/`. Sista stycket är gränsdragningen mot inredningsprojektet och ska ligga kvar som avslutning.

In: `/fukt/fukt-i-kallaren/`, `/grund/dranera-hus/` (i faktarutan om matta eller skiva), `/grund/inreda-kallare/` och `/fukt/luftfuktighet-inomhus/` med ankartexten **"isolera källarväggen"**. Fyra inlänkar, alla med samma ankare.

**10. Strukturerad data och komponenter.** `<Verktygskort kalkylator="daggpunkt" />` i mekanikavsnittet, `<Varning>` om mögel bakom den gamla väggen, en U-värdetabell med sex rader. Ingen `<Faq>`, ingen `<Kalkylator>`. Lägg inte till produktkort eller köpknapp: det är byggfel i samlingen kunskap.

**11. Det ettan har som vi måste behålla** (ur `underlag-isolera-kallarvagg-2026-09-19.md`):

1. Mekaniken ritad och räknad, med daggpunktens läge. Ingen konkurrent har en bild av konstruktionen alls.
2. Ett tak i millimeter med avsändare: Paroc, högst 70 mm stenull plus 20 mm takboard, stålreglar, ingen ångspärr, och ordet "riskkonstruktion" ordagrant.
3. Tredjedelsregeln med källa och den räknade efterkontrollen (37 till 53 procent ute i tillverkarens egen tabell).
4. U-värdestabellen. Ingen av de tre översta har ett enda U-värde.
5. Plastfolievillkoret ordagrant: används inte på källarväggar såvida inte merparten av väggen ligger över marknivå.

**12. Fällor.**

- Daggpunktsräkningen: 20 grader, 50 procent RF, 9,3 grader, Magnus-formeln enligt Lawrence i BAMS. Ett räknat tal med akademisk källa, unikt i fältet.
- U-värdetabellens andelskolumn och meningen att andelen är räknad av oss ur tillverkarens egna tal.
- Ordet **riskkonstruktion** och att det är Parocs eget ord.
- Meningen om att Parocs anvisning låg på en sajt som togs ner när Owens Corning tog över och att vi citerar den arkiverade versionen från mars 2023. Källkritiken ska synas.
- Skiktföljden i punktlistan, inklusive 20 mm takboard direkt mot betongen.
- Stycket om att flagnande färg nedtill inte är ett målningsfel utan en avläsning.
- Isodräns datering av problemet till sextiotalet. Den ger läsaren igenkänningen och ingen konkurrent har den.

---

## /grund/

**1. Adress och sidtyp.** `/grund/`, pelarhub, filen `src/content/pelare/grund.mdx`. Ingen brödtext; mallen bygger fyra galleriavsnitt ur artiklarnas frontmatter.

**2. Huvudfras och sidofraser.** Hubben jagar ingen egen fras. "dränera hus" (1 000), "isolera krypgrund" (390) och "inreda källare" (320) ägs av artiklarna. Ord som får finnas i `title`, `description` och `ingress`: *grund*, *krypgrund*, *källarvägg*, *dränering*, *sättningar*.

**3. Title.** Nuvarande `title` (ingen `seoTitle`): "Grund och dränering", 19 tecken. Krav: 15 till 40 tecken. Får inte börja med "Dränera hus" eller "Dränera huset", eftersom guiden gör det.

**4. Meta description.** Nuvarande: "Guider om krypgrund, källarvägg, dränering och sättningar. Hitta felet under huset innan du köper något, och vet när du ska ringa.", 130 tecken. Krav: 120 till 155 tecken.

**5. H1.** Lika med `title`. Två till fyra ord.

**6. H2-struktur.** Fast: Hitta felet, Välj rätt, Gör det själv, Räkna. Sätts av mallen.

**7. Längd.** Noll ord brödtext, så ska det förbli. `ingress` är 98 tecken i dag; håll den under 110.

**8. Bilder.** Inga egna.

**9. Interna länkar.** Automatiska. Ingen artikel länkar manuellt till `/grund/` i dag, så det finns ingen ankartext att skydda. Det är samtidigt en lucka: huben bör få minst en manuell inlänk när klustret växer, men det är inte skribentens uppgift i den här omgången.

**10. Strukturerad data och komponenter.** `BreadcrumbList` och `Kortgrupp`. Ingen komponent i innehållsfilen.

**11. Det ettan har som vi måste behålla.** Inte tillämpligt.

**12. Fällor.**

- Att brödtext läggs till i hubfilen.
- Att en artikels `typ` ändras och kortet byter grupp. Grundklustret har i dag problemguide (sprickor), projektguider (dränera, inreda, krypgrund) och kunskap (källarvägg), alltså sidor i tre av fyra grupper. Byts `typ` blir galleriet skevt.

---

## /fasad/dreva-fonster/

**1. Adress och sidtyp.** `/fasad/dreva-fonster/`, projektguide, pelare fasad, nivå enkel. Fil: `src/content/guider/fasad/dreva-fonster.mdx`. Nivå enkel betyder att varje fackterm förklaras i samma mening första gången, även karm, båge, smyg och diffusionstät.

**2. Huvudfras och sidofraser.** Huvudfras **dreva fönster, 320/mån** (YoY 0 %, topp september 590). Sidofraser, ingen av dem mätt, alla uppskattningar:

- *drevremsa* — i H2 om material.
- *fogskum fönster* — i H2 om material, och i varningsrutan.
- *kallras nya fönster* — i H2 om felen.
- *dreva fönster mineralull* — i H2 om material eller i brödtext.
- *tätt inne öppet ute* — i den H2 som bär principen.

**3. Title.** Nuvarande `seoTitle`: "Dreva fönster, material, ordning och tätt inne öppet ute", 56 tecken. Krav: högst 58 tecken, **börjar med "Dreva fönster"**. Formuleringen "tätt inne öppet ute" är sidans princip och bör finnas kvar i title eller H1, helst i båda.

**4. Meta description.** Nuvarande: "Vad drevning är, vilket drev du ska välja, hur hårt det packas och varför insidan tätas men inte utsidan. Med fönstertillverkarnas egna mått.", 141 tecken. Krav: 120 till 155 tecken, innehåller "dreva" eller "drevning", och löftet om tillverkarnas mått.

**5. H1.** Ska innehålla "dreva fönster" och principen. Nuvarande "Dreva fönster, så blir spalten tät inne och öppen ute" håller.

**6. H2-struktur.** Sju avsnitt. Dessa svar måste finnas kvar:

1. Tätt inne och öppet ute, principen som styr allt annat. Bär *tätt inne öppet ute*.
2. Spalten ska vara 10 till 15 mm.
3. Mineralull, lin eller expanderande band, och när fogskum är fel, med materialtabellen. Bär *drevremsa*, *dreva fönster mineralull* och *fogskum fönster*.
4. Så hårt packar du.
5. Ordningen, utsidan först och insidan sist, numrerad.
6. Tätningen på insidan, fogmassa eller tejp.
7. Felen som ger drag och kondens. Bär *kallras nya fönster*.

**7. Längd.** 1 421 ord i dag, kortast av de elva artiklarna här. Mål **1 300 till 1 700**. Ettan (Bolist) är 900 till 1 000 ord utan princip, utan insidans tätning och utan ett enda mått. Sidan får gärna växa något i det sjätte avsnittet, men inte genom upprepning.

**8. Bilder.**

- Huvudbild `inomhus/dreva-fonster-snitt.svg`. Notera att filen ligger under pelaren **inomhus** medan sidan ligger under **fasad**; det är kvar sedan sidan flyttades och sökvägen ska inte "rättas" i omskrivningen, då bryts bygget. Bildtexten ska nämna att det är tomt ytterst, drev i mitten och bottningslist med fogmassa innerst.
- `<Illustration namn="inomhus/dreva-fonster-tatt-ute">`. Alten ska beskriva samma spalt men med fogmassa på båda sidor och droppar i drevet. Behåll att fukten inte kan torka ut i alten.

**9. Interna länkar.**

Ut, tre stycken, alla ska finnas kvar: `/om/sa-testar-vi/` (ankare "Så hämtar vi värden från tillverkarna", under materialtabellen), `/fukt/luftfuktighet-inomhus/` (ankare "normal luftfuktighet inomhus", i felavsnittet om imma), `/inomhus/bygga-innervagg/` (ankare "bygga innervägg med reglar och gips"). Länken till `/om/sa-testar-vi/` är sidans enda E-E-A-T-länk och ligger medvetet direkt under tabellen.

In: `/inomhus/bygga-innervagg/` med **"dreva fönster och dörrar, tätt inne och öppet ute"**, `/fukt/luftfuktighet-inomhus/` med **"dreva fönster"**. Bara två inlänkar; sidan tål inte att förlora någon av dem, och den bör få en till från fasadklustret när det växer.

**10. Strukturerad data och komponenter.** En `<Varning>` om fogskum och garantin, en `<Faktaruta>` om ljudet, en `<Markering>` ("10 till 15 mm"), en materialtabell med fyra rader och källrad. Inget `<Verktygskort>`, ingen `<Kalkylator>`, ingen `<Faq>`. Inga produktkort: inget drev, ingen fogmassa och ingen drevspade finns i produktdatabasen, och `behover` listar verktyg utan produkt.

**11. Det ettan har som vi måste behålla** (ur `underlag-dreva-fonster-2026-09-16.md` avsnitt 3):

1. Principen tätt inne och öppet ute förklarad med skiss och källa. Ingen av de tre förklarar varför.
2. Insidans tätning som eget avsnitt, med tre vägar: bottningslist och fogmassa, ångspärrstejp, Isovers plastade remsa. Ettan slutar när remsan sitter.
3. Fogskum med tillverkarnas eget ord, och att vi tar ställning.
4. Måtten: spalt 10 till 15 mm, väggöppning 15 till 30 mm större, 80 procent av karmdjupet, yttersta 15 mm tomt, skarv 10 till 15 cm. Ettan har inte ett enda mått.
5. Ettans egna styrkor som vi behåller: att man börjar en bit upp från hörnet, att remsan viks dubbel och inte sträcks runt hörnen, och att utsidan drevas först.

**12. Fällor.**

- Materialtabellen "Material | Packas | Justerbar" med raden om fogskum som inte går att justera. Tre kolumner, ser oviktig ut, är sidans beslutsstöd.
- Källraden under tabellen som namnger Isover, Nacka Byggnadsvård, 3C Production och Svenskt Trä rad för rad. Den plus länken till `/om/sa-testar-vi/` är sidans trovärdighet.
- Citaten om fogskum: Elitfönster (ska ej användas, karmen deformeras), Traryd (bara om det går att efterjustera), Svenskt Trä (kan inte efterjusteras). Tre tillverkare i rad är hela argumentet.
- Talet 80 procent av karmens djup och de yttersta 15 mm tomma. Två tal som ingen konkurrent har.
- TräGuidens anslutning av väggens ångbroms: en remsa på cirka 200 mm kvar in i fönsterhålet, klämd med bottningslist.
- Meningen om att imma på insidan av glaset inte är drevningens fel. Den avgränsar sidan mot fuktklustret och förhindrar kannibalisering.

---

## /fasad/

**1. Adress och sidtyp.** `/fasad/`, pelarhub, filen `src/content/pelare/fasad.mdx`. Ingen brödtext.

**2. Huvudfras och sidofraser.** Ingen egen fras. Pelaren har bara en publicerad artikel i det här materialet, så hubben är i praktiken en platshållare som väntar på fasadklustret (tvätta fasad 720, måla om huset kostnad 590, byta fönster kostnad 1 000, renovera fönster 1 000, fasadfärg bäst i test 480). Ord som får finnas: *fasad*, *panel*, *puts*, *fönster*, *ytterdörr*, *drevning*.

**3. Title.** Nuvarande `title` (ingen `seoTitle`): "Fasad, fönster och dörrar", 25 tecken. Krav: 15 till 40 tecken. Får inte börja med "Dreva fönster".

**4. Meta description.** Nuvarande: "Guider om panel, puts, fönster, ytterdörrar och drevning. Hitta felet, välj rätt material och gör jobbet själv med rätt mått och ordning.", 137 tecken. Krav: 120 till 155 tecken.

**5. H1.** Lika med `title`.

**6. H2-struktur.** Fast: Hitta felet, Välj rätt, Gör det själv, Räkna. Sätts av mallen. Med bara en publicerad artikel i pelaren är tre av fyra grupper tomma; det är ett innehållsproblem, inte ett skrivproblem, och löses inte av skribenten.

**7. Längd.** Noll ord brödtext. `ingress` är 101 tecken; håll den under 110.

**8. Bilder.** Inga egna.

**9. Interna länkar.** Automatiska. Ingen manuell inlänk till `/fasad/` i dag, alltså ingen ankartext att skydda.

**10. Strukturerad data och komponenter.** `BreadcrumbList` och `Kortgrupp`. Ingen komponent i innehållsfilen.

**11. Det ettan har som vi måste behålla.** Inte tillämpligt.

**12. Fällor.**

- Att brödtext läggs till i hubfilen.
- Att `dreva-fonster.mdx` får `pelare: inomhus` igen "för att bildmappen heter inomhus". Sidan ligger under fasad, bilden under inomhus, och det är avsiktligt. Byts `pelare` byts URL:en och alla inlänkar går sönder.

---

## Efterkontroll

Efter omskrivningen läser SEO-strategen varje sida mot sitt avsnitt ovan och svarar med en lista över konkreta ändringar med rad eller rubrik som referens, eller med "Godkänd av SEO". Sex frågor per sida: intention, svar i första skärmen, H1 mot title, kannibalisering, interna länkar på plats, metadata och strukturerad data.

Utöver det ska `npm run kontrollera` vara grön innan någon sida räknas som klar. Den stoppar bygget vid interna länkar som leder ingenstans, och den varnar för publicerade artiklar utan inlänk från en annan innehållsfil. Varningslistan ska vara tom efter omgången.
