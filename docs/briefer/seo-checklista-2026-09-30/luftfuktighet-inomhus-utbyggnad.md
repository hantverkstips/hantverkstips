# SEO-checklista, luftfuktighet inomhus, utbyggnad, startlista 6 omgång A, 2026-09-30

Omgång A i startlista 6 (`docs/SOKORDSANALYS.md` 12.7, rad A5; `docs/INNEHALLSARKITEKTUR.md` avsnitt 9). Sidan är publicerad sedan 2026-09-16 och rättad mot det gemensamma faktabladet 2026-09-30. Det här är en **utbyggnad, inte en omskrivning**. Huvudfrasen ligger kvar ("luftfuktighet inomhus", 3 600), men sidan får **vinter och sommar som egna H2**, en tabell per årstid med källa per rad, och en **kortare koksalt-H2 som länkar till `/fukt/hygrometer/`**, som tar över kalibreringen. Adressen ändras inte. Hantverkaren läser checklistan före skrivningen, `underlag` läser punkt 11 och 12, och SEO och GEO-agenten läser den färdiga sidan mot samma lista.

Så här läses checklistan:

- **Underlag:** underlagsarbetarens SERP-läsning 2026-09-30 (topp 5 på "luftfuktighet inomhus" och topp 3 på "luftfuktighet inomhus vinter"), den äldre läsningen `docs/briefer/underlag-seo-luftfuktighet-inomhus.md` (2026-09-16), volymerna i `docs/data/keyword-stats-2026-09-30-fukt-sorterad.tsv` och det gemensamma faktabladet `docs/briefer/faktablad/fukt-gemensamma-tal.md`, som är talens enda källa. Avsnitt 2 där är den här sidans tabell.
- **Sökverktyget svarar från USA.** Domänerna i topp 5 är kontrollerade genom att sidorna lästes. Ordningen mellan dem är det inte. Ettan har bytts sedan 16 september (Alingsås kommun låg etta då; nu är det Intab, med Alingsås på plats tre). Hantverkstips syns inte i verktyget, så vår placering är okänd.
- **Title** räknas utan suffixet " · Hantverkstips".
- **Punkt 11** innehåller **Bättre än ettan** (krav) och **Krav på faktabladet**.

Tre saker som styr utbyggnaden:

1. **Sidan är redan bättre än ettan på det mesta.** Tabellen för absolut fuktighet, två daggpunktstabeller, räknaren, diagrammet, Folkhälsomyndighetens fyra indikationer, rumstabellen med källa per rad, ordningen vädra, värm, avfukta och snickarens gränser har ingen i topp 5. Allt det står kvar, med tabellvärden och källrader orörda.
2. **Det som saknas är årstiden som rubrik.** "luftfuktighet inomhus vinter" är 590 i månaden och 1 900 i januari och februari, och sidan toppar i januari. I dag står vintern under rubriken "Torr luft i januari är normalt", och sommaren har ingen egen rubrik. Ingen i topp 3 på vinterfrasen har ett vintervärde med källa.
3. **Säsong:** toppen kommer i januari. Sidan ska vara klar senast 31 oktober, så att den hinner indexeras om före december.

---

## /fukt/luftfuktighet-inomhus/

### 1. Adress och sidtyp

`/fukt/luftfuktighet-inomhus/` · `src/content/kunskap/fukt/luftfuktighet-inomhus.mdx` · samling **kunskap**, `typ: kunskap`, `pelare: fukt`, `plats: luften`, `niva: mellan`. Hubgrupp: Hitta felet, under Luften inomhus. Inga produktkort och inget reklamband (`produkter: []` står kvar). `kategori: luftavfuktare` står kvar som i dag.

Läsaren har en hygrometer som visar ett tal, ofta 25 procent i januari eller 65 procent i augusti, och vill veta om det är normalt för årstiden och rummet, och vad hon ska göra om det inte är det.

### 2. Huvudfras och sidofraser

**Huvudfras: luftfuktighet inomhus, 3 600 per månad**, topp i januari. Vinnbarhet 3. Ettan är en butik (Intab) utan daggpunkt, utan rumstabell och utan sommarvärde.

Sidofraser, med plats (volymer ur körning 4):

- **luftfuktighet inomhus vinter** (590, topp 1 900 i januari och februari) i title och i en ny H2.
- **normal luftfuktighet inomhus** (720) i H2:n "Normal luftfuktighet inomhus, rum för rum", som står kvar.
- **luftfuktighet inomhus sommar** (210, topp i september) och **hög luftfuktighet inomhus sommar** (20) i en ny H2.
- **relativ fuktighet** (170), **absolut fuktighet** (70) och **relativ fuktighet inomhus** (50) i första H2:n, som döps om så att båda orden står i rubriken.
- **hög luftfuktighet inomhus** (110) och **fuktig luft inomhus** (30) i H2:n "Vädra, värm och avfukta", som döps om eller får frasen i första meningen.
- **luftfuktighet sovrum** (70), **luftfuktighet hus** (90) och **luftfuktighet i lägenhet** (50) i rumstabellen och i brödtexten.
- **luftfuktighet mögel** (50) och **luftfuktighet inomhus folkhälsomyndigheten** (30) står redan i texten och står kvar.

### 3. Title

Nuvarande `seoTitle`: "Rätt luftfuktighet inomhus, tabell per rum" (42).

Krav: **högst 44 tecken**, och titeln börjar med **"Luftfuktighet inomhus"** och innehåller "vinter" eller "årstid". Förslag: "Luftfuktighet inomhus, vinter och sommar" (40) eller "Luftfuktighet inomhus, per rum och årstid" (41). Jag föredrar det första, eftersom vinterfrasen är den största sidofrasen och toppar samtidigt som sidan. Ingen annan sida börjar med "Luftfuktighet inomhus", och `/fukt/lag-luftfuktighet/` (omgång B) får inte börja så.

### 4. Description

Nuvarande: "Runt 50 procent luftfuktighet inomhus är bra, 30 till 70 går an. Tabell per rum, daggpunkten förklarad, och råd för både för fuktig och för torr luft." (150). Den har ett språkfel ("både för fuktig") och saknar årstiden.

Krav: 120 till 155 tecken, **"luftfuktighet inomhus"** i första meningen, vintern och sommaren i sak, och helst ett tal med källa som går att citera. Förslag att mäta mot: "Luftfuktighet inomhus är normalt 10 till 25 procent på vintern och 45 till 60 på sommaren. Tabell per rum, daggpunkten och när talet blir ett problem." (150).

### 5. H1

Nuvarande: "Rätt luftfuktighet inomhus beror på årstiden, rummet och den kallaste ytan". **Står kvar.** Den lovar redan årstiden, och de tre första orden skiljer sig från title.

### 6. H2-struktur

`kortSvar` ska ha **tre till fem meningar** som går att lyfta rakt av och som tar upp årstiden: runt 50 procent och 30 till 70 som går bra (Alingsås kommun, namngiven), Boverkets 20 till 70 som normalnivå för hur vi upplever luften, vintervärdet 10 till 25 procent i uppvärmda rum (TräGuiden) och sommarens 45 till 60, samt mögelmeningen i sin rättade form ("kan mögel börja växa om det håller i sig"). Källorna nämns i stycket, inte bara i `kallor`.

H2 i ordning, med ändringar:

1. **Hygrometern mäter hur nära mättnad luften är** döps om så att **relativ och absolut fuktighet** står i rubriken. Innehållet och tabellen står kvar.
2. **Vid daggpunkten blir den kallaste ytan våt** står kvar, med tabellerna, räknaren och diagrammet orörda (se punkt 10 om förval).
3. **Normal luftfuktighet inomhus, rum för rum** står kvar. Boverkets "mellan cirka 20 och 70 procent" (T9) läggs in i första stycket, före Intabs 30 till 60. Rumstabellen får en kolumn eller rad med länkar till räknarens förval för sovrum, badrum och källare (punkt 10). Tabellen får inga nya rader utan källa; badrummet står kvar utan riktvärde.
4. **NY: Luftfuktighet inomhus på vintern** ersätter och bygger ut "Torr luft i januari är normalt". Avsnittet innehåller:
   - En **tabell per årstid med källa per rad**: uppvärmda rum på vintern 10 till 25 procent och på sommaren 45 till 60 (TräGuiden, T7 och T8), normalnivån för upplevelsen 20 till 70 (Boverket, T9), utredningsgränsen 7 g/kg, cirka 45 procent vid 21 °C, som medel över eldningssäsongen (FoHMFS 2014:14, T10), sovrummet under 45 procent vintertid (Astma- och Allergiförbundet, T13) och uteluften (TräGuiden, T15 och T16).
   - Varför vintern är torr (uteluften, Alingsås exempel med 6 procent), symtomen, trägolvet och rådet att sänka temperaturen en grad. Det står i dag och behålls.
   - Folkhälsomyndighetens indikation om omfattande kondens på fönstrens insida vid cirka −5 °C, med länk till `/fukt/kondens-pa-fonster/`.
   - En mening om att frågan om luftfuktare besvaras på en egen sida. **Länken läggs först när `/fukt/lag-luftfuktighet/` är publicerad** (omgång B). Till dess står ingen länk, eftersom en länk till ett utkast stoppar bygget.
5. **NY: Luftfuktighet inomhus på sommaren**. Avsnittet tar upp TräGuidens 45 till 60 procent i uppvärmda rum, att uteluften bär 9 till 11 g/m³ (T16), varför källaren och krypgrunden blir fuktigast i juli och augusti (kort, med länk till `/fukt/fukt-i-kallaren/` och `/fukt/fukt-i-krypgrund/`), och när talet blir för högt (över 70 procent försämras värmeavgivningen, enligt Boverket). Exemplet med sommarluft på 20 grader och 70 procent mot en källarvägg på 12 grader kan flyttas hit från H2 6 eller stå kvar där med en hänvisning; det får inte stå två gånger.
6. **Vädra, värm och avfukta, i den ordningen** står kvar. Rubriken eller första meningen får **"hög luftfuktighet inomhus"**. `<Verktygskort kalkylator="avfuktare" />` står kvar.
7. **Snickarens gräns för virke, betong, färg och gips** står kvar oförändrad.
8. **Mät rätt och kontrollera hygrometern med koksalt** **kortas**. Kvar står Folkhälsomyndighetens regel om medelvärden över längre tid, placeringen, en vecka med avläsning morgon och kväll, och koksaltprovet i två eller tre meningar med talet 75,3 procent vid 25 °C. Därefter kommer en länk till `/fukt/hygrometer/` för hur provet görs steg för steg och hur fel en hygrometer kan visa. Meningarna om de två testsajterna (3 och 3 till 4 procentenheter) stryks, och Boverkets ±10 procentenheter (T17) får stå i en mening i stället. Rubriken får inte längre lova kalibreringen; förslag: "Mät en vecka innan du drar slutsatser".
9. **Faq, ny, tre frågor** som inte upprepar tabellerna: till exempel "Är 25 procent för lågt på vintern?", "Vilken luftfuktighet ska sovrummet ha?" och "Varför stiger luftfuktigheten när jag sänker värmen?". Svaren skrivs med källa i svaret.

Rubrikerna får formuleras om, gärna i frågeform där det faller sig naturligt. Vinter och sommar får inte bli två rubriker efter samma mall; de ska svara på olika frågor.

### 7. Längd

Nuvarande längd är cirka 2 700 ord brödtext. Målet är **3 000 till 3 600 ord**. Sidan är redan längst i topp 5 (Intab har cirka 2 000, Alingsås och Bygghemma cirka 1 200, Polarpumpen cirka 600). Tillväxten ska komma från vinter- och sommar-H2:n och Faq, och den kortade koksalt-H2:n ska ta bort ungefär 150 ord.

### 8. Bilder

- **Huvudbilden står kvar** (`luftfuktighet-rum.svg`). `bildAlt` är 115 tecken och innehåller "rätt luftfuktighet inomhus". Inget att ändra, men bildtexten ska inte säga "över 75 procent" om luften utan förbehållet om materialet (gemensamma faktabladet 1.3). Kontrollera den meningen.
- **Diagrammet `fukt/daggpunkt`** står kvar med sin alt (110 tecken).
- **MDX-kommentaren** `{/* ILLUSTRATION NÄR MÄTNINGEN FINNS: fukt/hus-rf-per-rum */}` syns inte publikt och får stå kvar. Egna mätningar görs inte (Christians beslut 2026-09-30), så bilden kommer inte att göras.
- Ingen ny bild krävs. Årstidstabellen är en Markdown-tabell, inte en bild, så att den går att citera.

### 9. Interna länkar

**Ut**, befintliga som står kvar: `/fukt/kondens-pa-fonster/`, `/fasad/dreva-fonster/`, `/el/tillaggsisolera-vind/`, `/badrum/fogar-badrum/`, `/golv/lagga-klickgolv/`, `/grund/isolera-kallarvagg/`, `/fukt/avfuktare-kallare/`, `/fukt/sorptionsavfuktare/`, `/fukt/fukt-i-kallaren/`, `/grund/isolera-krypgrund/` och `/om/sa-testar-vi/`. **Nya**:

- `/fukt/hygrometer/` i H2 8, med ett ankare om att kontrollera hygrometern. Det är utbyggnadens viktigaste länk.
- `/fukt/fukt-i-krypgrund/` i sommar-H2:n.
- `/fukt/kallras/` i vinter-H2:n, om drag vid fönstret nämns. Annars ingen.
- `/fukt/lag-luftfuktighet/` **först i omgång B**, när sidan finns.

**In**, som andra sidor bygger på:

- `src/content/kunskap/fukt/hygrometer.mdx` (ny): i avsnittet om vad talet betyder, med ett ankare om normal luftfuktighet per rum och årstid.
- `src/content/guider/fukt/kondens-pa-fonster.mdx`: länken i H2 "Ändra på luften först" finns redan. Den nya sovrums-H2:n får en till.
- `src/content/kunskap/fukt/fuktslukare.mdx` (ny): där sidan säger vilken luftfuktighet som är normal.

### 10. Strukturerad data och komponenter

- `Article` via kunskapsmallen och `BreadcrumbList`. `FAQPage` tillkommer när Faq läggs in, med samma text som syns.
- `<Kalkylator namn="daggpunkt" />` står kvar en gång i H2 2, utan förval, eftersom läsaren där räknar på sitt eget rum. **Förvalen länkas från rumstabellen** i H2 3 som vanliga länkar till räknarens adress med förvalet ifyllt, för sovrum, badrum och källare. Nycklarna tas ur UX:s spec. Länkarna ska gå till `/rakna/daggpunkt/` med query, och räknarens canonical ska vara adressen utan query (UX kontrollerar det).
- `<Verktygskort kalkylator="avfuktare" />` står kvar, en gång.
- `kallor`: Testkollen och Tryggt och säkert hem stryks om meningarna om testsajterna stryks. Boverkets sida om luftfuktighet, luftrörelser och drag läggs till (T9 och T17; adress i det gemensamma faktabladet avsnitt 12). Övriga står kvar.
- `uppdaterad` sätts till publiceringsdagen.

### 11. Ettan och Bättre än ettan

**Ettan (SERP 2026-09-30):** intab.se, "inomhusklimat" (instrumentbutik, odaterad, utan författare, cirka 2 000 ord). Ettan är också på "luftfuktighet inomhus vinter". Den tar upp temperatur, luftfuktighet och koldioxid. Den skriver att den rekommenderade nivån är 30 till 60 procent (utan källa), att 20 till 40 procent är vanligt inomhus, och att vintern oftast ligger under 40 procent och ibland under 15. Den har kvalstergränsen 40 till 45 procent vintertid och skriver om FoHMFS 2014:14 med 45 procent vid 21 °C och 3 g/m³, utan att säga varifrån talen kommer. Den har ingen daggpunkt, ingen rumstabell, inget sommarvärde, ingen kontroll av hygrometern och ingen Faq, och den länkar till butikens dataloggrar.

Tvåan till femman är Polarpumpen (40 till 60 procent och "aldrig över 70", utan källa), Alingsås kommun (runt 50 och 30 till 70, talen i bilder), Proffsmagasinet (35 till 50 procent och mögel vid "72 % och 6 °C", utan källa) och Biltema (vintern 40 till 45 procent och sommaren 60 till 65, utan källa, och rådet att inte starta köksfläkten). Ingen i topp 5 har Boverkets 20 till 70, TräGuidens årstidsvärden eller Folkhälsomyndighetens indikation vid minus 5 grader.

Det ettan har som vi måste behålla eller överträffa:

1. Temperaturen och koldioxiden som ram. Vi tar dem inte som egna avsnitt, men ventilationen (0,35 l/s per m²) och Folkhälsomyndighetens 1 000 ppm får stå i en mening i H2 6 om faktabladet bär dem (T43, T45).
2. Kvalstergränsen för sovrummet (finns, T13).
3. Utredningsgränsen ur FoHMFS 2014:14 (finns), nu med författningen namngiven i årstidstabellen.

**Bättre än ettan** (krav; varje punkt kontrolleras i den färdiga sidan):

1. **Tabell för vinter och sommar med källa per rad**: TräGuiden 10 till 25 och 45 till 60, Boverket 20 till 70, FoHMFS 7 g/kg (cirka 45 procent vid 21 °C), sovrummet under 45 procent vintertid och uteluften. Ettan har årstiden i löptext med tal utan källa.
2. **Boverkets 20 till 70 procent i kortsvaret eller i normal-H2:n**, som ingen i topp 5 har.
3. **Daggpunkten och den kallaste ytan, med räknaren och förval per rum**. Tabellerna och räknaren finns i dag, och förvalslänkarna i rumstabellen är nya. Ettan har ingen daggpunkt.
4. **Folkhälsomyndighetens indikationer, med minus 5 grader vid fönstret, i vinter-H2:n**. De finns i dag i H2 2 och ska också stå, eller hänvisas till, där vintern behandlas.
5. **Hur läsaren kontrollerar sitt eget tal**: medelvärde över en vecka och koksaltprovet med 75,3 procent, och länken till hygrometersidan. Ettan säljer mätaren men säger inte hur den kontrolleras.

**Krav på faktabladet** (`underlag`). Allt finns i det gemensamma faktabladet; inga nya tal behövs.

- Hämta T7 till T17 och T43 till T45 ur `fukt-gemensamma-tal.md` till ett kort utdrag för sidan, med de ordagranna citaten ur avsnitt 2.1 och 2.5.
- Boverkets ±10 procentenheter och "mäter ofta bra mellan 20 procent och 80 procent" (2.5) ordagrant.
- Kontrollera bildtexten mot 1.3 (75 procent gäller materialet) och att kortsvarets mögelmening följer T2 och T6.
- Mättnadstabellen: sidan skriver 4,9 och 17,3 g/m³, faktabladet 4,8 och 17,2 (avsnitt 3.3). Det är avrundning och inget fel. Ändras det, ska samma skrivsätt gälla på `/fukt/fukt-i-kallaren/` rad 129 i samma commit, annars inte alls.

### 12. Fällor

- **Årstidstalen kommer bara ur det gemensamma faktabladet.** Biltemas 40 till 45 procent vintertid, Proffsmagasinets 35 till 50 och 72 procent vid 6 °C, Polarpumpens "aldrig över 70" och Intabs 30 till 60 som "rekommendation" upprepas inte som sajtens tal. En mening om att butikerna anger andra tal utan källa får stå, men utan att butikerna namnges.
- **"Folkhälsomyndigheten rekommenderar 30 till 70"** står inte på sidan. Det står inte i myndighetens vägledningar (gemensamma faktabladet 2.2).
- **"låg luftfuktighet inomhus" och luftfuktaren** ägs av `/fukt/lag-luftfuktighet/` (omgång B). Vinter-H2:n svarar på vad som är normalt och vad som går att göra utan maskin, men den väljer ingen luftfuktare och beskriver inga typer.
- **"daggpunkt tabell"** ägs av `/rakna/daggpunkt/`, som får en statisk tabell nu. Den här sidans två daggpunktstabeller står kvar, men de byggs inte ut till ett fullt rutnät, och ingen H2 heter "Daggpunktstabell".
- **Kalibreringen** ägs av `/fukt/hygrometer/`. H2 8 blir kortare och länkar dit. Den får inte behålla steg-för-steg-beskrivningen.
- **Kondens på fönster** ägs av `/fukt/kondens-pa-fonster/`. Vinter-H2:n nämner indikationen och länkar dit, men förklarar inte glastemperaturen.
- **Befintliga tabeller, källrader och den rättade mögelmeningen rörs inte**, utom där punkt 6 säger något annat.
- **Snickarens gränser** står kvar. Fuktkvoten får en egen sida i omgång C (`/fukt/fuktkvot/`), och då läggs en länk dit. Tabellen flyttas inte.

---

## Kontroll efter skrivningen, 2026-09-30

SEO och GEO-agenten har läst `src/content/kunskap/fukt/luftfuktighet-inomhus.mdx` (publicerad och utbyggd, cirka 3 050 ord med Faq) mot punkt 1 till 12. **Två punkter ska rättas. Därefter är sidan godkänd.**

### Retur

1. **Rad 252, ankaret "här är saltprovet steg för steg".** Ett ankare börjar aldrig med "här" (skillen avsnitt 4). Länka orden som säger vart läsaren kommer, till exempel "[saltprovet steg för steg](/fukt/hygrometer/)" eller "[hur du kontrollerar hygrometern med koksalt](/fukt/hygrometer/)". Meningen i övrigt formulerar hantverkaren.
2. **Rad 186, länken till kallras.** Meningen "Kalla, dragiga fönster är en annan sak än fukt" pekar i dag bara på drevningen. Kallras finns nu och äger draget från fönstret. Länka "kalla, dragiga fönster" till `/fukt/kallras/`, och låt länken till drevningen stå kvar.

Resten stämmer. Inget att ändra:

- **Title och description.** Title är "Luftfuktighet inomhus, vinter och sommar" (40). Description har 145 tecken, med frasen först och årstidstalen. H1 står kvar.
- **Kortsvaret** har Alingsås kommun, Boverkets 20 till 70, TräGuidens 10 till 25 och 45 till 60, och mögelmeningen i rättad form.
- **Två årstidstabeller i stället för en.** Godkänt: var och en har källrader, och vinter och sommar svarar på olika frågor. Bättre än ettan 1 är uppfylld.
- **Rumstabellen** har förvalslänkar för sovrum och källare. Badrummet står utan länk. Godkänt: rummet saknar riktvärde, och ett förval utan riktvärde vore tomt.
- **H2:n om relativ och absolut fuktighet** är omdöpt. "hög luftfuktighet inomhus" står i brödtexten i sommar-H2:n. Koksalt-H2:n är kortad till mätregeln, Boverkets ±10 och provets tal, och testsajterna och deras källor är borta.
- **Faq** har tre frågor som inte upprepar tabellerna.
- **Luftfuktaremeningen är inte skriven**, eftersom ROST förbjuder "har en egen sida". Godkänt. Länken till `/fukt/lag-luftfuktighet/` läggs i omgång B, och checklistan för B anger var.
- **Bättre än ettan 2 till 5 är uppfyllda.** Boverket står i kortsvaret och i normal-H2:n. Daggpunkten har räknaren och förvalen. Indikationen om minusgrader står i H2 2 och länkas från vinter-H2:n. Hygrometerkontrollen har länk.
- **`npm run kontrollera`** ger ett fel för länken till `/fukt/hygrometer/`, som är utkast. Felet försvinner när hygrometern publiceras i samma commit.
