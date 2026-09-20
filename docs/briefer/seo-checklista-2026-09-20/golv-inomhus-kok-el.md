# SEO-checklista inför omskrivningen, 2026-09-20

Fjorton sidor i pelarna Golv, Inomhus, Kök och El. Skribenten läser sitt avsnitt före skrivningen, SEO-strategen läser den färdiga sidan mot samma avsnitt efteråt.

Så här läses checklistan:

- **Volymerna** kommer ur `docs/SOKORDSANALYS.md` avsnitt 7 (körning 2, 2026-09-20) och avsnitt 2 (körning 1). Talet är Keyword Planners månadsvolym för frasen, klustertalet står separat när sidan äger flera fraser.
- **Sidofraserna** ska finnas som naturlig svenska på angiven plats. Ingen fras ska stå ordagrant om den inte går att säga högt. En fras som bara går att klistra in stryks hellre än tvingas in.
- **Teckenantalet** för title räknas utan suffixet `· Hantverkstips`, som layouten lägger på (16 tecken). Målet 40 till 55 tecken håller hela taggen under 71.
- **Punkt 6** anger vad ett avsnitt ska svara på, aldrig hur rubriken ska formuleras. Rubrikerna är skribentens, enligt `docs/ROST.md` avsnitt 2.
- **Punkt 12** är det som bär ranking och är lätt att stryka av misstag. Går en sådan sak förlorad är sidan inte godkänd, även om den är bättre skriven.

Två saker gäller alla fjorton sidor och upprepas inte per sida:

1. Talen, källorna, `Källa:`-raderna under tabellerna och konstanterna i kalkylmodulerna ändras inte (`docs/ROST.md` avsnitt 4). Tabellrubriker och celltexter får skrivas om, talen inte.
2. Frontmatterfälten `slug`, `pelare`, `typ`, `niva`, `kategori`, `produkter`, `publicerad`, `kallor`, `behover.produkt` och `bild` rörs inte. `title`, `seoTitle`, `description`, `kortSvar`, `bildtext`, `uppdaterad`, alt-texter och `behover`-motiveringarna får skrivas om.

---

## /golv/bygga-trappa/

### 1. Adress och sidtyp

`/golv/bygga-trappa/` · `src/content/guider/golv/bygga-trappa.mdx` · projektguide, pelaren Golv, nivå mellan. Klustrets näst största sida och den som bär trappkalkylatorn.

### 2. Huvudfras och sidofraser

**Huvudfras: bygga trappa, 880 per månad**, toppmånad september, vinnbarhet 5. Kluster 890 med "bygga innertrappa" (10).

Sidofraser, med plats:

- **trappformeln** — i en H2 och i brödtexten kring formeln. Det är ordet folk söker när de redan vet att det finns en formel.
- **steghöjd och stegdjup** — i brödtext i formelavsnittet och i tabellraderna. Frasen "trappa steghöjd" (50) ägs av `/rakna/trappa/`, så den ska nämnas här men inte få en egen H2.
- **utetrappa** eller **trappa utomhus** — i H2:n för utetrappan. Två av tre i toppen svarar bara på utomhustrappan, och avsnittet är därför trafikbärande i sig.
- **innertrappa** — i H2:n om bjälklaget, som naturlig svenska ("trappan inomhus" duger lika bra).
- **våningshöjd** — i brödtext i första skärmen och i räkneexemplet.

### 3. Title

Nuvarande `seoTitle`: "Bygga trappa, måtten och formeln för inne och ute", 49 tecken. Ligger rätt.

Krav: 40 till 55 tecken. "Bygga trappa" ska stå först och obrutet. Något som signalerar både inne och ute ska vara kvar, eftersom det är sidans hela vinkel mot toppen. Orden "måtten" och "formeln" får bytas mot annat som lovar samma sak.

### 4. Meta description

Nuvarande: 137 tecken. Ligger rätt.

Krav: 120 till 155 tecken. Ska innehålla "bygga trappa" eller "trappa" i naturlig form, och lova tre saker sidan faktiskt ger: formeln, antalet steg ur våningshöjden och skillnaden mellan innetrappa och utetrappa. Inget utropstecken, ingen fråga.

### 5. H1

Nuvarande: "Bygga trappa, inne och ute", 26 tecken.

Krav: huvudfrasen i naturlig form, skild i formulering från title. H1 får vara kortare och rakare än title. Ingen kolonkonstruktion, ingen fråga.

### 6. H2-struktur

Sju H2 i dag. Följande avsnitt måste finnas kvar, oavsett vad de heter:

1. Vad trappformeln är och varför höjden räknas två gånger. **Bär sidofrasen trappformeln.**
2. Hur antalet steg räknas ur våningshöjden, i ordning, och hur lång trappan blir på golvet. **Bär våningshöjd och steghöjd.**
3. Vad Boverket faktiskt kräver i dag, och vad som bara är gamla allmänna råd. Det här avsnittet är sidans enda verkliga försprång mot hela topp fem.
4. Innetrappan och hålet i bjälklaget, med fri höjd och anmälningsplikten. **Bär innertrappa.**
5. Utetrappan, fundamentet och frostdjupet. **Bär utetrappa.**
6. Valet mellan infällda steg och stödkonsol.
7. Felen som inte går att rätta i efterhand.

### 7. Längd

Nuvarande: 2 873 ord i brödtexten. Mål **2 600 till 3 200 ord**.

Motivering: ettan är en tom kategorisida och trean ligger på 1 500 till 1 800 ord. Längden behövs inte för att slå dem, den behövs för att sidan löser två intentioner på en adress. Under 2 600 ord går ett av de två spåren förlorat.

### 8. Bilder

- **Huvudbild**, `illustrationer/golv/trappa-vangstycke.svg`. Alt-texten sätts av mallen ur `bildtext`-fältet. Bildtexten ska beskriva vad snittet visar och nämna vangstycket, eftersom bilden är sidans enda förklaring av ordet. Under 125 tecken i den del som blir alt.
- **`<Illustration namn="golv/trappa-utetrappa">`**, alt-texten i dag 458 tecken. Den är för lång och ska kortas till under 125 tecken, men får inte tappa: utetrappa, plinten till frostfritt djup, och fallet på planstegen. Förslag på innehåll, inte formulering: genomskärning av en utetrappa, plinten ner till frostfritt djup, stegen med fall utåt.

### 9. Interna länkar

Ut från sidan, alla tre måste finnas kvar:

- `/altan/bygga-altan/` — bär frostdjupstalen, som den här sidan inte upprepar.
- `/altan/trallskruv/` — bär förklaringen till svarta ränder vid blandade metaller.
- `/golv/renovera-trappa/` — parsidan i klustret.

In till sidan, ankartexten ska inte göras obrukbar:

| Från | Ankare |
|---|---|
| `/altan/bygga-altan/` | bygga trappa |
| `/golv/renovera-trappa/` (två ställen) | bygga trappa |
| `/golv/slipa-parkettgolv/` | bygga trappa |
| `/grund/inreda-kallare/` | bygga trappa |

Fem inlänkar med samma ankare, "bygga trappa". Det är avsiktligt och ska inte varieras bort av de sidor som länkar hit.

### 10. Strukturerad data och komponenter

`Article` via mallen. Ingen `FAQPage` på sidan i dag, och ingen ska läggas till: sidan har ingen Faq-komponent och ska inte få en.

Rörs inte: `<Kalkylator namn="trappa" />` (trappräknaren bor här och ingen annanstans), `<Markering>` kring trappformeln, `<Varning rubrik=...>` om ingreppet i stommen, och de två tabellerna med sina `Källa:`-rader.

### 11. Det ettan har som vi måste behålla

Ettan (beijerbygg.se) är en kategorisida utan innehåll, så jämförelsen går mot tvåan och trean.

1. Trappformeln uttryckt som ett tal mellan 600 och 650 mm. Trean har den, och det är fältets enda gemensamma nämnare.
2. Ett spann för steghöjd och ett för stegdjup, angivna i millimeter.
3. Ett räkneexempel på en verklig våningshöjd.
4. Att utetrappan ska vara flackare än innetrappan.
5. Fundamentet under utetrappan, med djup.

### 12. Fällor

- **Tabellen steghöjd/stegdjup/lutning** med sin `Källa:`-rad. Raden längst ner (180 mm) ligger medvetet utanför Svenskt Träs spann och förklaras i texten under. Stryks tabellen eller raden faller förklaringen.
- **Paragraftabellen över BFS 2024:9 2 kap.** Den är sidans starkaste försprång. Varje rad med paragrafnummer ska stå kvar.
- **Meningen om att föreskriften inte anger ett enda stegmått**, och citatet ur Boverkets vägledning om riskanalys. Det är det som skiljer oss från alla som citerar gamla BBR.
- **Orden vangstycke, plansteg, sättsteg och stegnos** och deras förklaringar i ingressen. Fyra ord som bär hela sidan och som en omskrivning gärna slätar ut.
- **Datumen 1 juli 2025 och 1 juli 2026** för när föreskriften trädde i kraft och när de gamla reglerna upphörde. Utan dem är regelavsnittet bara ännu en åsikt.

---

## /golv/golv-i-kallare/

### 1. Adress och sidtyp

`/golv/golv-i-kallare/` · `src/content/guider/golv/golv-i-kallare.mdx` · problemguide, pelaren Golv, nivå mellan. Femte sidan i pelaren och därmed den som gav Golv sin hub. Bron mot Grund och Fukt.

### 2. Huvudfras och sidofraser

**Huvudfras: golv i källare, 390 per månad**, toppmånad september, vinnbarhet 5. Kluster 460 med "golv på betongplatta" (70).

Sidofraser, med plats:

- **golv på betongplatta** — i en H2 eller i brödtext direkt under H1. Egen fras med egen volym.
- **relativ fuktighet** — i brödtext i mätavsnittet, utskrivet första gången.
- **fuktspärr** — i H2:n om klickgolv och i brödtext.
- **klinker i källare** — i H2:n om klinker, som naturlig svenska.
- **fuktmätning** eller **mäta fukt i betong** — i brödtext i första avsnittet.

### 3. Title

Nuvarande `seoTitle`: "Golv i källare, välj efter fukten i betongplattan", 49 tecken. Ligger rätt.

Krav: 40 till 55 tecken. "Golv i källare" i obruten form först, eftersom det är den sökta ordföljden. Resten ska säga att fukten styr valet. Ordet "betongplatta" får gå om något kortare behövs, men då ska "fukt" stå kvar.

### 4. Meta description

Nuvarande: 148 tecken. Ligger rätt, i övre kanten.

Krav: 120 till 155 tecken. Huvudfrasen eller "källargolv" ska med. Löftet är att läsaren får golvtyperna ställda mot ett mätvärde med källa, och får veta när mätningen inte betyder något. Det sista ledet är det som skiljer oss från hela topp fem och ska inte strykas för att få plats.

### 5. H1

Nuvarande: "Golv i källaren, fuktkravet avgör golvvalet", 43 tecken.

Krav: huvudfrasen i naturlig form (bestämd form "källaren" är bra och ska inte tvingas till obestämd), och en andra del som säger att fukten bestämmer. Skild formulering från title.

### 6. H2-struktur

Nio H2 i dag. Följande avsnitt måste finnas kvar:

1. Hur fukt i betong mäts och när mätvärdet betyder något. **Bär relativ fuktighet och fuktmätning.** Måste ligga först: det är sidans tes att man börjar i betongen och inte i butiken.
2. Golvtyperna ställda mot varsin fuktgräns, som tabell. **Bär golv på betongplatta.**
3. Klinker och varför det är det enda golvet utan fukttak.
4. Limmad matta och kravet på ett mätvärde.
5. Klickgolv och fuktspärren som aldrig är valfri. **Bär fuktspärr.**
6. Uppreglat trägolv och varför sidan avråder.
7. Vad golvvärme gör med gränsen man mäter mot.
8. Rörelsefogen och det ventilerade golvets spalt.
9. När golvet är symptomet och felet sitter någon annanstans. Det här avsnittet är bron till Fukt och Grund.

### 7. Längd

Nuvarande: 2 694 ord. Mål **2 400 till 3 000 ord**.

Motivering: ettan är 5 000 ord men handlar om att gräva ur källaren, tvåan 1 100 ord butiksguide. Vår längd ska räcka till fyra golvtyper med varsin gräns och källa, inte mer. Går sidan över 3 000 ord börjar den konkurrera med `/grund/inreda-kallare/`.

### 8. Bilder

- **Huvudbild**, `illustrationer/golv/kallargolv-fuktskala.svg`. Bildtexten ska nämna att skalan börjar på 80 procent och att en platta mot jord hamnar på 100. Talen är låsta.
- **`<Illustration namn="golv/kallargolv-borrhal">`**, alt-texten i dag 521 tecken. Kortas till under 125 tecken. Får inte tappa: snitt genom betongplatta, mäthålets djup 0,4 av plattans tjocklek, och att hålet är förbrukat efteråt.

### 9. Interna länkar

Ut från sidan, alla måste finnas kvar. Sidan är en bro och länkarna är dess funktion i klustret:

- `/fukt/fukt-i-kallaren/`, två ställen — diagnosen före golvvalet.
- `/grund/dranera-hus/`, två ställen — när felet sitter utanför huset.
- `/grund/inreda-kallare/`, tre ställen — golvuppbyggnaden och golvvärmefrågan.
- `/golv/lagga-klickgolv/`, två ställen — läggningen och tillverkarnas rörelsefogar.

In till sidan:

| Från | Ankare |
|---|---|
| `/fukt/fukt-i-kallaren/` | golv i källaren |
| `/golv/lagga-klickgolv/` | golv i källaren |
| `/golv/slipa-parkettgolv/` | golv i källare |
| `/grund/inreda-kallare/` | golv i källaren |

### 10. Strukturerad data och komponenter

`Article` plus `FAQPage`. **Faq-komponenten har fyra frågor och ska ha fyra frågor efteråt.** Frågorna får skrivas om helt, antalet inte. Frågeställningarna som ska finnas kvar i någon form: vilket golv som är bäst, om laminat får läggas direkt på betong, hur man vet att plattan är torr nog, och om man behöver mäta när man ändå lägger klinker.

Rörs inte: `<Verktygskort kalkylator="kallare" />` och dess placering efter diagnosstycket, samt tabellen med fyra golv och sin `Källa:`-rad.

### 11. Det ettan har som vi måste behålla

Ettan (husgrunder.com) är en byggblogg om att gräva ur källaren.

1. Att fuktspärr eller kapillärbrytande skikt under plattan är avgörande.
2. Att ett golv i källaren kan byggas med luftspalt under.
3. Att ett felval inte syns förrän långt efteråt.
4. Konkreta tjocklekar och materialnamn, inte bara principer.
5. Rådet att veta vad som ligger under plattan innan något beslutas.

### 12. Fällor

- **Tabellen med fyra golv och deras fuktgränser.** Sidans kärna. Varje rad har en egen källa i `Källa:`-raden under.
- **Skillnaden mellan byggfukt och markfukt**, och meningen om att limrekommendationen heter "på nya betongunderlag". Det är den fotnot som gör alla tal på sidan begripliga, och den är lätt att stryka som teknikalitet.
- **Talet 0,4 gånger plattans tjocklek** och att hålet är förbrukat efteråt. Ingen annan svensk sida på frasen har det.
- **RBK och Rådet för Byggkompetens**, presenterat första gången. Förkortningen ensam säger ingenting för läsaren, men namnet är det som gör mätavsnittet trovärdigt.
- **Meningen att ett ventilerat golv är ett system som ska dimensioneras, inte ett material man köper på rulle.** Den avslutar ett avsnitt som annars låter som en produktbeskrivning.

---

## /golv/lagga-klickgolv/

### 1. Adress och sidtyp

`/golv/lagga-klickgolv/` · `src/content/guider/golv/lagga-klickgolv.mdx` · projektguide, pelaren Golv, nivå enkel. Sidan med flest tabeller i hela pelaren.

### 2. Huvudfras och sidofraser

**Huvudfras: lägga klickgolv, 720 per månad**, topp september till oktober, vinnbarhet 4. Kluster 1 540.

Sidofraser, med plats:

- **lägga laminatgolv (590)** — i brödtext tidigt och i H2:n om laminat mot parkett. Egen fras, nästan lika stor som huvudfrasen, och den ska inte tryckas ner i sista avsnittet.
- **rörelsefog** — i H2:n om fogen mot väggen.
- **laminat eller parkett (90)** — i H2:n om skillnaden.
- **lägga golv själv (140)** — i brödtext i ingressen eller i första avsnittet, som naturlig svenska.
- **underlagsmatta** och **ångspärr** — i H2:n om skikten under golvet.

### 3. Title

Nuvarande `seoTitle`: "Lägga klickgolv, alla mått med källa", 36 tecken. Under målet.

Krav: 40 till 55 tecken, alltså **ska bli längre**. "Lägga klickgolv" först och obrutet. Ordet "laminat" bör in, eftersom systerfrasen bär 590 sökningar och i dag inte syns i taggen alls. Löftet om mått med källa ska vara kvar i någon form.

### 4. Meta description

Nuvarande: 146 tecken. Ligger rätt.

Krav: 120 till 155 tecken. Huvudfrasen med. Ska nämna minst två av de fyra måtten (rörelsefog, akklimatisering, undergolvets tolerans, golvvärmegränsen) och behålla löftet att det står utskrivet när tillverkarna säger olika. Det sista är sidans hela existensberättigande mot ettan.

### 5. H1

Nuvarande: "Lägga klickgolv, måtten som avgör om det håller", 47 tecken.

Krav: huvudfrasen i naturlig form, och en andra del som säger att sidan är en monteringsguide och inte en köpguide. Skild formulering från title.

### 6. H2-struktur

Elva H2 i dag, och det är många. De får slås ihop, men följande frågor måste ha ett eget svar någonstans:

1. Hur länge golvet ska ligga i rummet innan det öppnas, och i vilket klimat.
2. Hur plant undergolvet måste vara och hur man mäter det.
3. Vilka skikt som ska under golvet och när fuktspärren är obligatorisk. **Bär underlagsmatta och ångspärr.**
4. Hur bred rörelsefogen ska vara och att tillverkarna inte är överens. **Bär rörelsefog.** Sidans viktigaste avsnitt.
5. Hur golvet delas i dörröppningar och hur stor en sammanhängande yta får vara.
6. Vad som gäller över golvvärme, inklusive 27-gradersgränsen.
7. Vilken riktning brädorna läggs i.
8. Hur man räknar så att sista raden inte blir en remsa, och hur kortändarna förskjuts.
9. Hur mycket golv som ska köpas hem, med spillpåslag.
10. Vad skillnaden mellan laminat och parkett gör för läggningen. **Bär lägga laminatgolv och laminat eller parkett.**
11. Vad som görs när golvet ligger.

### 7. Längd

Nuvarande: 2 996 ord. Mål **2 700 till 3 300 ord**.

Motivering: ettan innehåller inte ett enda mått, och sidan vinner på att ha dem. Sju tabeller tar plats och ska ha den. Under 2 700 ord måste en tabell bort, och varje tabell är ett tal ingen konkurrent har.

### 8. Bilder

- **Huvudbild**, `illustrationer/golv/klickgolv-rorelsefog.svg`. Bildtexten ska nämna att minst 10 mm gäller i ett vanligt rum. Talet är låst.
- **`<Illustration namn="golv/klickgolv-undergolv">`**, alt i dag 118 tecken. Under gränsen, låt den vara kort. Måste behålla rätskiva, svacka och gränsen 3 mm.
- **`<Illustration namn="golv/klickgolv-forband">`**, alt i dag 148 tecken. Kortas till under 125. Måste behålla förskjutna kortändsskarvar och den för smala sista raden.

### 9. Interna länkar

Ut från sidan, alla måste finnas kvar:

- `/fukt/luftfuktighet-inomhus/` — spannet 30 till 60 procent.
- `/golv/golv-i-kallare/` — i varningen om över 95 procent relativ fuktighet.
- `/grund/inreda-kallare/` — i samma varning.
- `/golv/renovera-trappa/` — nedersta trappsteget som rörelsehinder.
- `/golv/slipa-parkettgolv/` — slitskiktet som avgör om golvet kan slipas om.

In till sidan:

| Från | Ankare |
|---|---|
| `/golv/golv-i-kallare/` (två ställen) | lägga klickgolv |
| `/golv/slipa-parkettgolv/` | lägga klickgolv |
| `/grund/inreda-kallare/` | lägga klickgolv |
| `/fukt/luftfuktighet-inomhus/` | lägga klickgolv |

### 10. Strukturerad data och komponenter

`Article`. Ingen Faq på sidan och ingen ska läggas till.

Rörs inte: `<Verktygskort kalkylator="kvadratmeter" />`, `<Markering>3 mm</Markering>`, de två `<Varning>`-blocken (över 95 procent, och laminat på elslingor), `<Faktaruta>` om tunga möbler, och alla sju tabeller med sina `Källa:`-rader.

### 11. Det ettan har som vi måste behålla

Ettan (villaagarna.se) är en planeringsartikel, men den är kompetent på fyra punkter och alla fyra ska finnas kvar hos oss:

1. Att en gammal plastmatta ofta får ligga kvar om tillverkaren tillåter det.
2. Att tunga möbler och köksöar låser ett flytande golv.
3. Stegljudsmattan och vad den gör.
4. Att läggningen ska dokumenteras, alltså satsnummer och ett extra paket undan.
5. Att man mäter in rummet i förväg så att hörnen inte får passbitar.

### 12. Fällor

- **Alla sju tabeller.** Akklimatisering, undergolvets tolerans, fuktspärr per undergolv, rörelsefog per tillverkare, rörelsefog per golvbredd, största yta, förskjutning. Sidan är tabellerna.
- **Meningen om att tio millimeter av golvet mot en enda yta räcker för att expansionen ska upphöra.** Den är Bjelins och den är den enda meningen på sidan som får läsaren att faktiskt lägga fogen rätt.
- **Att sockeln väljs efter fogen och inte tvärtom**, med talet 1,5 gånger fogens bredd.
- **Ställningstagandet "min hållning är 10 mm"** med motiveringen. Där tar sidan ställning mot en tillverkare, och det är precis vad `docs/ROST.md` avsnitt 1 kräver.
- **Ordet dilatationsfog** och att den är summan av de två rummens rörelsefogar.

---

## /golv/renovera-trappa/

### 1. Adress och sidtyp

`/golv/renovera-trappa/` · `src/content/guider/golv/renovera-trappa.mdx` · projektguide, pelaren Golv, nivå mellan. Parsida till `/golv/bygga-trappa/`.

### 2. Huvudfras och sidofraser

**Huvudfras: renovera trappa, 880 per månad**, toppmånad september, vinnbarhet 4.

Sidofraser, med plats:

- **renovera trappa kostnad** — i H2:n om vad det kostar att anlita någon, och i kostnadstabellen högst upp. Frasens verkliga intention.
- **måla trappa** eller **måla trappa inomhus** — i H2:n om målningsvägen.
- **byta trappsteg** — i H2:n om nya steg ovanpå de gamla.
- **renoveringssteg** — i brödtext i samma avsnitt, förklarat första gången.
- **renovera trätrappa** — i brödtext tidigt, som naturlig svenska.

### 3. Title

Nuvarande `seoTitle`: "Renovera trappa, tre sätt med tid och kostnad", 45 tecken. Ligger rätt.

Krav: 40 till 55 tecken. "Renovera trappa" först och obrutet. Ordet kostnad eller pris ska vara kvar, eftersom ingen i topp fem anger ett pris och det är vårt enda löfte som syns i SERP:en.

### 4. Meta description

Nuvarande: 142 tecken. Ligger rätt.

Krav: 120 till 155 tecken. Huvudfrasen med. De tre vägarna ska räknas upp, och löftet om timmar och kronor ska stå kvar. Torktiderna får gå om utrymmet inte räcker.

### 5. H1

Nuvarande: "Renovera trappa, tre vägar med timmar och kronor", 48 tecken.

Krav: huvudfrasen i naturlig form, och en andra del som säger att sidan väljer åt läsaren. Skild formulering från title. Talet tre får gärna vara kvar, det är sidans struktur.

### 6. H2-struktur

Sju H2 i dag. Följande avsnitt måste finnas kvar:

1. De tre vägarna ställda mot varandra i pengar, timmar och dygn ur bruk. **Bär renovera trappa kostnad.** Måste ligga först.
2. Vad man mäter för att veta vilken väg trappan tål, med mätgränserna.
3. Målningsvägen med kornval, åtgång och torktider. **Bär måla trappa.**
4. Nya steg limmade ovanpå de gamla, med priser och följderna av att trappan blir högre. **Bär byta trappsteg och renoveringssteg.**
5. När hela trappan måste bytas i stället.
6. Vad det kostar att låta någon annan göra det, med rotavdraget förklarat.
7. Hur huset fungerar medan jobbet pågår.

### 7. Längd

Nuvarande: 2 798 ord. Mål **2 500 till 3 100 ord**.

Motivering: ettan är 3 500 till 4 000 ord utan ett enda pris. Vi behöver inte matcha längden, vi behöver matcha metodbredden och slå den på tal. Under 2 500 ord får en av de tre vägarna för lite plats och sidan blir en artikel om att måla trappa.

### 8. Bilder

- **Huvudbild**, `illustrationer/golv/renovera-trappa-steg.svg`. Bildtexten ska säga att snittet är i skala och nämna 12 mm mot 40 mm. Talen är låsta.
- Inga inline-illustrationer på sidan. Om skribenten saknar en skiss anmäls det till designansvarig, den läggs inte till på eget bevåg.

### 9. Interna länkar

Ut från sidan, alla måste finnas kvar:

- `/golv/bygga-trappa/`, två ställen — trappformeln och hålet i bjälklaget.
- `/golv/slipa-parkettgolv/` — vad som skiljer ett plansteg i massivt trä från ett parkettgolv.
- `/kok/slipa-bankskiva/` — samma kornval, utförligare.
- `/inomhus/` — hubblänk, målning av lister och foder.
- `/om/sa-testar-vi/` — under färgtabellen, där värden hämtade från tillverkare ska förklaras.

In till sidan:

| Från | Ankare |
|---|---|
| `/golv/bygga-trappa/` | renovera trappa |
| `/golv/lagga-klickgolv/` | renovera trappa |
| `/golv/slipa-parkettgolv/` | renovera trappa |

### 10. Strukturerad data och komponenter

`Article`. Ingen Faq på sidan och ingen ska läggas till.

Rörs inte: `<Kalkylator namn="rotavdrag" />` och dess placering i kostnadsavsnittet, `<Varning rubrik=...>` om att en trappa inte går att stänga av, och alla fem tabeller med sina `Källa:`-rader.

### 11. Det ettan har som vi måste behålla

Ettan (clasfixare.se) räknar upp alla metoder och det är dess enda styrka.

1. Hela metodbredden nämnd, inte bara de tre vi rekommenderar: lackering, oljning, byte av räcke, klickgolv på stegen, halkremsor.
2. En verktygslista.
3. Rimlig ordning på momenten.
4. Frågan hur länge en trätrappa håller.
5. Underhållsfrågan efter renoveringen.

Punkt 1 och 5 är de som är lättast att tappa när sidan skärps till tre vägar. Metoderna vi väljer bort ska nämnas och väljas bort, inte utelämnas.

### 12. Fällor

- **Tabellen med tre vägar** och de två meningarna under den om att lösa steg över disk kostar mer än ett fast pris från en firma. Det är sidans mest överraskande fynd och det ligger i en passage som ser ut som utfyllnad.
- **Beslutstabellen "vad du ser, vad det betyder, vilken väg"** med sina fem rader. Den svarar på den fråga hela topp fem duckar.
- **Punktlistan med fem krav ur BFS 2024:9 2 kap. 11 §** och `Källa:`-raden under. Får inte kortas till "räcket ska vara barnsäkert".
- **De fyra följderna av att trappan blir 12 mm högre**, särskilt att första och sista klivet ändras åt olika håll.
- **Orden plansteg, sättsteg, vangstycke och trappnos** med sina förklaringar. Samma ordlista som på `/golv/bygga-trappa/`, men den ska förklaras här också, eftersom sidorna läses var för sig.

---

## /golv/slipa-parkettgolv/

### 1. Adress och sidtyp

`/golv/slipa-parkettgolv/` · `src/content/guider/golv/slipa-parkettgolv.mdx` · projektguide, pelaren Golv, nivå mellan. **Pelarens största sida sett till volym.**

### 2. Huvudfras och sidofraser

**Huvudfras: slipa parkettgolv, 1 300 per månad**, toppmånad september, vinnbarhet 4. Kluster 2 270.

Sidofraser, med plats:

- **slipa golv själv (880)** — i H1, i title och i brödtext. Ordet "själv" är inte kosmetika: ettan avråder genomgående från att göra det själv, och hela vår vinkel är den motsatta. Det ska synas i första skärmen.
- **slitskikt** — i första H2:n och i kortsvaret. Sidans avgörande ord.
- **kornföljd** eller **korn** — i H2:n om slipningens tre pass.
- **hyra golvslip** — i H2:n om maskinerna, som naturlig svenska.
- **renovera golv (90)** — i brödtext, ingen egen rubrik.

### 3. Title

Nuvarande `seoTitle`: "Slipa parkettgolv själv, slitskiktet avgör", 42 tecken. Ligger rätt.

Krav: 40 till 55 tecken. "Slipa parkettgolv" först och obrutet, följt av "själv". Båda leden är trafikbärande. Resten får skrivas om fritt.

### 4. Meta description

Nuvarande: 140 tecken. Ligger rätt.

Krav: 120 till 155 tecken. Huvudfrasen med. Ska lova det ettan inte ger: ett mått på slitskiktet, kornnummer, hyrpriser och torktider. Minst tre av de fyra ska nämnas.

### 5. H1

Nuvarande: "Slipa parkettgolv själv, och hur du vet om golvet tål det", 57 tecken.

Krav: huvudfrasen plus "själv" i naturlig form. Andra ledet ska signalera beslutet före arbetet. Skild formulering från title.

### 6. H2-struktur

Nio H2 i dag. Följande avsnitt måste finnas kvar, i den här ordningen:

1. Hur slitskiktet mäts och var man kommer åt det. **Bär slitskikt.** Måste ligga först, före maskinerna. Det är sidans tes.
2. Hur många gånger ett golv går att slipa om.
3. Vilka maskiner som hyrs och vad de kostar. **Bär hyra golvslip.**
4. Kornföljden och varför inget pass går att hoppa över. **Bär kornföljd.**
5. Kanterna och hörnen, och tiden de tar.
6. Lack mot olja, med torktiderna som styr helgen.
7. När man inte ska göra det själv, inklusive den avrådan vi inte håller med om.
8. Vad det kostar att anlita någon, med rotavdraget.
9. Felen som syns först när ytbehandlingen är på.

### 7. Längd

Nuvarande: 3 200 ord. Mål **2 900 till 3 500 ord**.

Motivering: ettan är 1 200 ord och saknar allt av substans. Längden här motiveras inte av konkurrensen utan av att sidan äger tre fraser och måste svara på alla tre. Den är pelarens längsta och ska förbli det.

### 8. Bilder

- **Huvudbild**, `illustrationer/golv/slipa-slitskikt.svg`. Bildtexten ska nämna att måttet tas vid en kapad ände och inte uppifrån. Talen 15 mm och 3,5 mm är låsta.
- **`<Illustration namn="golv/slipa-passen">`**, alt i dag 316 tecken. Kortas till under 125. Måste behålla: två diagonala pass, ett sista pass längs brädorna, och bandet längs väggen som är kantslipens.

### 9. Interna länkar

Ut från sidan, alla måste finnas kvar:

- `/golv/lagga-klickgolv/` — vad man gör när golvet visar sig vara ett fanergolv.
- `/golv/renovera-trappa/` — där golvet fortsätter ner i en trappa.
- `/golv/bygga-trappa/` — ny trappa i samma trä.
- `/fukt/luftfuktighet-inomhus/` — spannet 30 till 60 procent året om.
- `/golv/golv-i-kallare/` — fukt underifrån.
- `/om/sa-testar-vi/` — under torktidstabellen.

In till sidan:

| Från | Ankare |
|---|---|
| `/golv/lagga-klickgolv/` | slipa parkettgolv själv |
| `/golv/renovera-trappa/` | slipa parkettgolv |
| `/kok/slipa-bankskiva/` | slipa parkettgolv själv |

### 10. Strukturerad data och komponenter

`Article`. Ingen Faq på sidan och ingen ska läggas till.

Rörs inte: `<Kalkylator namn="rotavdrag" />`, `<Varning rubrik=...>` om oljetrasorna, och alla sex tabeller med sina `Källa:`-rader.

### 11. Det ettan har som vi måste behålla

Ettan (k-bygg.se) är en FAQ som avråder, tvåan är Tarkett.

1. Att golvslipen väger 60 till 80 kg och inte bärs av en person.
2. Att grovslipningen går diagonalt i två riktningar.
3. Att kanter och hörn tas med mindre maskiner.
4. Maskering mot övriga rum och andningsskydd.
5. Ett pris per kvadratmeter för att anlita någon.

Dessutom Tarketts två tal, som är det enda i fältet vi inte får vara utan: slitskiktet ska vara minst 1 mm kvar, och golvet kan slipas om 2 till 4 gånger.

### 12. Fällor

- **Gränsen 2,5 mm** och att den är Golvbranschens definition av vad som får kallas parkett. Sidans första tal och det enda som avgör hela projektet.
- **Citatet om att fanergolvet inte går att slipa.** Ett konstaterande, inte en försiktighetsåtgärd, och sidan säger det uttryckligen.
- **Kornföljdstabellen** där Bona, Bolist och Trägolvsbutiken ligger olika, och resonemanget om varför korn 24 inte är en smaksak på ett tunt slitskikt.
- **Avsnittet där vi motsäger K-Bygg om flytande golv**, inklusive meningen om att båda sidor har intressen i frågan. Det är sidans tydligaste ställningstagande.
- **Torktidstabellen med två rader ur samma datablad** ("gå försiktigt" 8 timmar mot "lätt belastning" 24 timmar) och förklaringen till varför båda står där.
- **Feltabellens sista rad**, att genomslipat slitskikt inte går att rätta, och kopplingen tillbaka till skjutmåttet i första avsnittet.

---

## /golv/ (pelarhub)

### 1. Adress och sidtyp

`/golv/` · `src/content/pelare/golv.mdx` · pelarhub. **Filen har ingen brödtext.** Hubben är ett galleri som mallen bygger av artiklarnas frontmatter (`docs/DESIGN.md` 5.2). Det skribenten får röra är `title`, `description` och `ingress`.

### 2. Huvudfras och sidofraser

**Ingen mätbar huvudfras.** "golv" ensamt är ett handelsord där hela första sidan är butiker, och hubben ska inte försöka ta det. Hubbens funktion är intern: den samlar pelarens fem sidor, går in i huvudmenyn och tar emot brödsmulorna.

Ord som ska finnas i `title`, `ingress` eller `description`, som naturlig svenska: **golv**, **trappor**, **trägolv**, **klinker**, **laminat**. De ger hubben ämnestäckning utan att peka på en fras någon annan sida äger.

### 3. Title

Nuvarande `title`: "Golv och trappor", 16 tecken. Ingen `seoTitle`.

Krav: behåll "Golv och trappor" eller något lika kort och lika rakt, 14 till 30 tecken. Hubbtitlar är namn, inte löften. Lägg **inte** till `seoTitle`, och skriv inte om titeln till en fras: en hubbtitel som börjar konkurrera med "lägga klickgolv" kannibaliserar pelarens egna sidor.

### 4. Meta description

Nuvarande: 141 tecken. Ligger rätt.

Krav: 120 till 155 tecken. Ska säga vilka ämnen pelaren täcker och vad läsaren hittar här, inte upprepa en enskild sidas löfte.

### 5. H1

Sätts av mallen ur `title`. Inga andra krav än under punkt 3.

### 6. H2-struktur

Ingen. Mallen bygger sektionerna Hitta felet, Välj rätt, Gör det själv och Räkna ur artiklarnas frontmatter. **Skribenten lägger inte till brödtext eller H2 i hubbfilen.** Kommentaren i filen som förklarar det ska stå kvar.

### 7. Längd

Noll ord brödtext i dag och noll efteråt. `ingress` är 90 tecken och ska ligga mellan 60 och 120.

### 8. Bilder

Inga. Hubbens visuella innehåll är korten, som mallen bygger.

### 9. Interna länkar

Hubben länkar ut via mallens kort, inte via brödtext. Inga inlänkar med ankartext i innehållsfilerna i dag; hubben får sina länkar från sidfoten, menyn och brödsmulorna, och kontrolleras därför inte av `npm run kontrollera`.

Det betyder att **ingressen och beskrivningen är hubbens enda egna text**, och att de bär hela dess ämnessignal.

### 10. Strukturerad data och komponenter

`BreadcrumbList` via mallen. Kortgrupperna byggs av mallen och rörs inte. Fältet `viktiga` är tomt och ska förbli tomt, som i `pelare/fukt.mdx`.

### 11. Det ettan har som vi måste behålla

Ej tillämpligt. Hubben rankar inte mot en etta, den finns för klustret och för menyn.

### 12. Fällor

- **`utkast: false`.** Hubben är publicerad och det är den som gör att Golv syns i huvudmenyn. Ändras fältet försvinner fem sidors brödsmulor.
- **Kommentaren i frontmattret** om att hubben är ett galleri. Utan den skriver nästa skribent in brödtext här.
- **Att lägga till `seoTitle`** är den troligaste felhandlingen. Gör det inte.

---

## /inomhus/bygga-innervagg/

### 1. Adress och sidtyp

`/inomhus/bygga-innervagg/` · `src/content/guider/inomhus/bygga-innervagg.mdx` · projektguide, pelaren Inomhus, nivå mellan. Bär två kalkylatorer och är gipsklustrets tyngsta guide.

### 2. Huvudfras och sidofraser

**Huvudfras: bygga innervägg, 880 per månad**, YoY −18 procent, vinnbarhet 4. Kluster 900 med "regelavstånd innervägg" (20).

Sidofraser, med plats:

- **regelavstånd** — i H2:n om regelavståndet och i kortsvaret. Liten fras, stor betydelse: tabellen är sidans kärna.
- **avväxling** — i H2:n om dörröppningen, förklarad första gången.
- **hammarband** och **syll** — i H2:erna om stommen och i ingressen.
- **stålregel** — i H2:n om val av stomme.
- **skruvavstånd** — i H2:n om skruvningen.

### 3. Title

Nuvarande `seoTitle`: "Bygga innervägg med reglar och gips, steg för steg med mått", 59 tecken. **Över målet.**

Krav: kortas till 40 till 55 tecken. "Bygga innervägg" först och obrutet. Antingen "reglar och gips" eller "steg för steg med mått" får gå, inte båda. Ordet "mått" är det som skiljer oss från topp tre och bör vinna.

### 4. Meta description

Nuvarande: 135 tecken. Ligger rätt.

Krav: 120 till 155 tecken. Huvudfrasen med. Ska lova regelavstånd med källa och materiallistan per löpmeter, eftersom ingen konkurrent har någotdera.

### 5. H1

Nuvarande: "Bygga innervägg med reglar och gips, hela ordningen med måtten", 62 tecken. Lång men läsbar.

Krav: huvudfrasen i naturlig form. H1 får vara längre än title men ska gå att läsa högt i ett andetag. Skild formulering från title, vilket den i dag knappt är: "steg för steg med mått" och "hela ordningen med måtten" säger samma sak. **Det här paret ska skiljas åt i omskrivningen.**

### 6. H2-struktur

Tolv H2 i dag, vilket är sidans största svaghet som text och största styrka som svar. De får slås ihop till åtta till tio, men följande frågor måste ha ett eget svar:

1. Vad som ritas och bestäms innan virket köps, inklusive eldragningen.
2. Trä eller stål, och vilken dimension. **Bär stålregel.**
3. Hur syllen fästs i träbjälklag respektive betong.
4. Hur hammarbandet sätts i lod över syllen. **Bär hammarband.**
5. Regelavståndet mot skivbredd och antal skivlag, som tabell. **Bär regelavstånd.** Sidans kärna.
6. Dörröppningen och avväxlingen över den. **Bär avväxling.**
7. Kortlingar där något ska hänga, och el i regeln.
8. Vad som faktiskt gör väggen tyst.
9. Hur skivorna sätts och hur skarvarna förskjuts.
10. Skruvavstånd. **Bär skruvavstånd.**
11. Materialåtgång per löpmeter.
12. Felen som spricker i spacklet.

### 7. Längd

Nuvarande: 2 724 ord. Mål **2 500 till 3 000 ord**.

Motivering: ettan (bolist.se) har tre tal på hela sidan, tvåan två. Vår längd bärs av tabeller och en materialräkning, inte av prosa. Under 2 500 ord faller materiallistan eller ljudavsnittet bort, och båda är egna fraser i vardande.

### 8. Bilder

- **Huvudbild**, `illustrationer/inomhus/innervagg-uppbyggnad.svg`. Bildtexten ska nämna c 400 mm och c 600 mm och vad som skiljer dem. Talen är låsta.
- **`<Illustration namn="inomhus/innervagg-dorroppning">`**, alt i dag 230 tecken. Kortas till under 125. Måste behålla: dörröppning i regelvägg, avväxlingen över, och skivskarven ovanför dörrhörnet med sprickan.
- **`<Illustration namn="inomhus/innervagg-skivor">`**, alt i dag 178 tecken. Kortas till under 125. Måste behålla: förskjutning en halv skivbredd mellan sidorna, och springorna.

### 9. Interna länkar

Ut från sidan, alla måste finnas kvar:

- `/fasad/dreva-fonster/` — drevning av spalten runt karmen.
- `/inomhus/skruva-i-gipsvagg/` — vad som håller i den färdiga väggen.
- `/inomhus/gipsskruv/` — skruvens längd och gänga.
- `/kok/slipa-bankskiva/` — brygga till Kök-pelaren, sista meningen på sidan.
- `/om/sa-testar-vi/` — under regelavståndstabellen.

In till sidan:

| Från | Ankare |
|---|---|
| `/fasad/dreva-fonster/` | bygga innervägg med reglar och gips |
| `/inomhus/gipsskruv/` | Regelavståndet när du bygger innervägg |
| `/inomhus/skruva-i-gipsvagg/` | guiden om att bygga innervägg |

### 10. Strukturerad data och komponenter

`Article`. Ingen Faq på sidan och ingen ska läggas till.

Rörs inte: `<Kalkylator namn="gipsskruv" />` i skruvavsnittet, `<Kalkylator namn="innervagg" />` i materialavsnittet, deras inbördes placering, `<Markering>c 400 mm</Markering>`, `<Faktaruta rubrik=...>` om vad som gör väggen tyst, `<Varning rubrik=...>` om golvvärme i betong, och alla fyra tabeller med sina källrader.

### 11. Det ettan har som vi måste behålla

Ettan (bolist.se) har sex steg och tre tal.

1. Ordningen: markera platsen, syll och hammarband, lodräta reglar, kortlingar, gips på ena sidan, isolering, gips på andra sidan.
2. c 450 för 900 mm skivor och c 600 för 1 200 mm skivor.
3. Dörröppning = karmens mått plus ett tillägg i centimeter.
4. Att reglarna kapas något kortare än rumshöjden.
5. Att glipan mot taket döljs av en list.

### 12. Fällor

- **Regelavståndstabellen med fem rader.** Sidans kärna, och den enda i fältet med källa per rad. `Källa:`-resonemanget under den, om att Svenskt Trä är strängast just för den vägg folk bygger hemma, hör ihop med tabellen och får inte skiljas från den.
- **Skrivsättet `c 400 mm`** och meningen om att vi skriver c, Svenskt Trä skriver cc och Norgips skriver s. Den meningen är varför läsaren kan jämföra vår tabell med tillverkarnas, och den finns inte hos någon konkurrent.
- **Förbudet mot skivskarv i linje med dörrhörnet.** Svenskt Trä förbjuder det uttryckligen och ingen annan skriver ut det.
- **Faktarutan om att fler gipslag slår dyrare ull**, med 6 dB respektive nästan 12 dB. Sidans mest användbara enskilda råd.
- **Materialtabellen per löpmeter med sina sex antaganden och de sju uträkningsraderna under.** Kontrollräkningen (35 skruv på 5,0 kvm blir 7 per kvm) är det som gör tabellen trovärdig och ser ut som utfyllnad.

---

## /inomhus/gipsskruv/

### 1. Adress och sidtyp

`/inomhus/gipsskruv/` · `src/content/guider/inomhus/gipsskruv.mdx` · projektguide, pelaren Inomhus, nivå enkel. **Sajtens näst största enskilda fras.**

### 2. Huvudfras och sidofraser

**Huvudfras: gipsskruv, 3 600 per månad**, YoY 0 procent, ingen säsong, vinnbarhet 3. Toppen är butiker och tillverkare.

Sidofraser, med plats:

- **gipsskruv längd** — i H2:n om längden och i längdtabellen.
- **grov eller fin gänga** — i H2:n om gängan.
- **borrspets** — i samma H2 och i brödtext, med godstjockleksgränsen.
- **skruvavstånd gips** — i H2:n om hur tätt skruvarna sitter.
- **försänkning** — i H2:n om huvudet, förklarad första gången.

### 3. Title

Nuvarande `seoTitle`: "Gipsskruv, rätt längd och gänga", 31 tecken. **Under målet.**

Krav: 40 till 55 tecken, alltså **ska bli längre**. "Gipsskruv" först och obrutet. Lägg till det som skiljer oss från butikshyllorna som rankar: att sidan svarar på trä mot stål, eller att den ger skruvavstånden. Butikerna i toppen har titlar som är produktnamn, och en title som lovar ett svar är vår enda differentiering i SERP:en.

### 4. Meta description

Nuvarande: 135 tecken. Ligger rätt.

Krav: 120 till 155 tecken. Huvudfrasen med. Ska lova längd och gänga för en eller två skivor på trä eller stål. Det ledet är hela frasens intention och står redan rätt i dag.

### 5. H1

Nuvarande: "Rätt gipsskruv för regeln och skivan, längd och gänga på en sida", 64 tecken. Lång.

Krav: huvudfrasen i naturlig form, gärna tidigare i meningen än i dag. Kortas till under 55 tecken. Andra ledet ska säga att regeln bakom skivan bestämmer, inte gipset. Skild formulering från title.

### 6. H2-struktur

Sju H2 i dag. Följande avsnitt måste finnas kvar:

1. Hur längden räknas ur skivtjockleken plus regeln, med längdtabellen. **Bär gipsskruv längd.**
2. Gänga och spets, och att regeln bestämmer båda. **Bär grov eller fin gänga och borrspets.**
3. Skruvavstånden i kant och fält, som tabell. **Bär skruvavstånd gips.**
4. Hur huvudet försänks utan att kartongen brister. **Bär försänkning.**
5. Våtrum, brandgips och utegips, med korrosivitetsklasserna.
6. Bandad skruv och skruvautomat, och när det lönar sig. **Enda avsnittet med produkter och affiliatevärde.**
7. Att skruven som håller skivan inte är skruven som håller hyllan.

### 7. Längd

Nuvarande: 1 983 ord. Mål **1 800 till 2 400 ord**.

Motivering: frasen är stor men intentionen är smal. Toppen är butikskategorier och tillverkarsidor på några hundra ord. Vår sida vinner på att vara den enda som svarar fullständigt, inte på att vara längst. Över 2 400 ord börjar den överlappa `/inomhus/bygga-innervagg/`.

### 8. Bilder

- **Huvudbild**, `illustrationer/inomhus/gipsskruv-sektion.svg`. Bildtexten ska nämna plus 20 mm i trä och plus 10 mm genom stål. Talen är låsta.
- **`<Illustration namn="inomhus/gipsskruv-ganga">`**, alt i dag 131 tecken. Kortas marginellt till under 125. Måste behålla: två skruvar, grov gänga med nålspets för trä, fin gänga med borrspets för stål.
- **`<Illustration namn="inomhus/gipsskruv-avstand">`**, alt i dag 110 tecken. Under gränsen. Måste behålla c 200 i kant, c 300 i fält och kantavståndet.
- **`<Illustration namn="inomhus/gipsskruv-forsankning">`**, alt i dag 130 tecken. Kortas till under 125. Måste behålla tre försänkningar och att mitten är rätt.

### 9. Interna länkar

Ut från sidan, alla måste finnas kvar:

- `/inomhus/bygga-innervagg/` — regelavståndet med tabell.
- `/inomhus/skruva-i-gipsvagg/` — infästning av saker.
- `/inomhus/hanga-tavla-gipsvagg/` — tavelkroken.
- `/om/sa-testar-vi/` — under längdtabellen.

MDX-kommentaren `{/* LÄNK NÄR SIDAN FINNS: inomhus/gipsplugg */}` sist i filen ska stå kvar. Den är instruktionen för när gipspluggsidan publiceras.

In till sidan:

| Från | Ankare |
|---|---|
| `/inomhus/bygga-innervagg/` | vilken gipsskruv som gäller för din regel och dina skivor |
| `/inomhus/hanga-tavla-gipsvagg/` | gipsskruv i rätt längd och gänga |
| `/inomhus/skruva-i-gipsvagg/` | guiden om rätt gipsskruv |

### 10. Strukturerad data och komponenter

`Article`. Ingen Faq på sidan och ingen ska läggas till.

Rörs inte: `<Kalkylator namn="gipsskruv" />` direkt under längdtabellen, `<Kalkylator namn="innervagg" />` i skruvavståndsavsnittet, `<Markering>20 mm</Markering>`, båda tabellerna med sina källrader, och produktraderna i `behover.verktyg` (`makita-dfr550zx1`, `essve-fzb-39x41`). **Produktslugsen är affiliatelänkar och rörs inte alls.**

### 11. Det ettan har som vi måste behålla

Ettan är clasohlson.com, alltså en butikskategori. De innehållssidor som rankar i toppen är Gyproc, gds.se och Norgips.

1. Längder i millimeter, uppställda som ett urval man väljer ur.
2. Grov gänga i trä, fin gänga i stål.
3. Att huvudet ska försänkas utan att pappret brister.
4. Skruvavstånd i kant och fält.
5. Att fel gänga i fel underlag gör att skruven inte tar.

### 12. Fällor

- **Längdtabellen med fyra rader** och punktlistan under med minimilängderna räknade ur Norgips tumregel. Tabellen ensam ser komplett ut, men punktlistan är det som visar varifrån talen kommer.
- **Talet 20 mm ner i träregeln** i `<Markering>`. Ett tal bär hela tabellen, och sidan säger det uttryckligen.
- **Meningen om att Svenskt Trä anger kortare skruv än Norgips**, och att vi ändå tar 41 mm. Två källor som säger olika, och vi säger vilken vi går på. Det är `docs/ROST.md` avsnitt 1 i praktiken.
- **Gränsen 0,9 mm godstjocklek** mellan nålspets och borrspets. Frasens enda verkliga fallgrop och det som gör sidan användbar på ett bygge.
- **Korrosivitetsklasserna C1 och C4** i utegipsavsnittet. Ett led ingen konkurrent har.
- **Skruvavståndstabellens rad för innersta laget i tvålagersvägg (c 750)**, som är den rad folk gör fel på av gammal vana.

---

## /inomhus/hanga-tavla-gipsvagg/

### 1. Adress och sidtyp

`/inomhus/hanga-tavla-gipsvagg/` · `src/content/guider/inomhus/hanga-tavla-gipsvagg.mdx` · projektguide, pelaren Inomhus, nivå enkel. Klustrets minsta sida, byggd som Christians exempel. Volymen motiverar inte tillväxt.

### 2. Huvudfras och sidofraser

**Huvudfras: hänga tavla gipsvägg, 40 per månad**, plus "sätta upp tavla gipsvägg" (110). **Kluster 150.** Vinnbarhet 4 med tre forum i topp sju.

Sidofraser, med plats:

- **sätta upp tavla** — i brödtext tidigt. Den större av de två fraserna, och den ska stå som naturlig svenska minst en gång.
- **tavelkrok** — i H2:n om vikten och i tabellen.
- **gipsplugg** — i samma H2. Sidan äger inte frasen (5 400, den går till `/inomhus/gipsplugg/` när den finns), så den nämns men får ingen egen rubrik.
- **höjd på tavla** eller **hur högt ska tavlan hänga** — i H2:n om 145 cm.
- **klisterremsa** eller **tavelkrok utan spik** — i H2:n om klisterkroken.

### 3. Title

Nuvarande `seoTitle`: "Hänga tavla på gipsvägg, krok, vikt och höjd", 44 tecken. Ligger rätt.

Krav: 40 till 55 tecken. "Hänga tavla" och "gipsvägg" ska båda stå. De tre leden krok, vikt och höjd är sidans innehåll och minst två ska vara kvar.

### 4. Meta description

Nuvarande: 139 tecken. Ligger rätt.

Krav: 120 till 155 tecken. Huvudfrasen med. Ska lova kilotal per infästning, eftersom ettan inte har en enda viktgräns. Höjden ska nämnas.

### 5. H1

Nuvarande: "Hänga tavla på gipsvägg, rätt krok för vikten och rätt höjd", 59 tecken.

Krav: huvudfrasen i naturlig form. Kortas gärna. Skild formulering från title, vilket den i dag nästan inte är. **Det här paret ska skiljas åt.**

### 6. H2-struktur

Sju H2 i dag. Följande avsnitt måste finnas kvar:

1. Vikten och vilken infästning den kräver, med tabell. **Bär tavelkrok och gipsplugg.**
2. Höjden 145 cm och var tumregeln kommer ifrån. **Bär höjd på tavla.**
3. Måttet från ramens överkant till den spända tråden. Sidans enda verkliga särdrag mot ettan.
4. När det ska vara två krokar.
5. El i väggen och var man inte borrar.
6. Klisterkroken och hur den tas bort. **Bär klisterremsa.**
7. Att spegeln och hyllan hör hemma på en annan sida.

### 7. Längd

Nuvarande: 1 390 ord. Mål **1 200 till 1 600 ord**.

Motivering: frasen är liten och intentionen är smal. Ettan är 2 500 till 3 000 ord men täcker även betongvägg. Vi vinner på att vara kort och exakt. **Den här sidan ska inte växa.** Växer den börjar den konkurrera med `/inomhus/skruva-i-gipsvagg/`.

### 8. Bilder

- **Huvudbild**, `illustrationer/inomhus/hanga-tavla.svg`. Bildtexten ska nämna 145 cm och krokarna en tredjedel in från varje kant. Talen är låsta.
- Inga inline-illustrationer. Läggs ingen till på eget bevåg.

### 9. Interna länkar

Ut från sidan, alla tre måste finnas kvar:

- `/inomhus/skruva-i-gipsvagg/` — hylla, tv och tunga saker.
- `/inomhus/gipsskruv/` — skruven som håller skivan.
- `/om/sa-testar-vi/` — i avsnittet där tillverkarvärdena presenteras.

In till sidan:

| Från | Ankare |
|---|---|
| `/inomhus/gipsskruv/` | en tavelkrok i gipsväggen |
| `/inomhus/skruva-i-gipsvagg/`, brödtext | en egen guide om krok, vikt och höjd |
| `/inomhus/skruva-i-gipsvagg/`, Faq-länk | Hänga tavla på gipsvägg |

Den sista är en `lank`-prop i Faq-komponenten på grannsidan. Den räknas som inlänk och ska inte tas bort där.

### 10. Strukturerad data och komponenter

`Article`. Ingen Faq på sidan och ingen ska läggas till.

Rörs inte: `<Kalkylator namn="gipsplugg" />`, `<Markering>145 cm</Markering>`, `<Faktaruta rubrik=...>` om två krokar, `<Varning>` om el i väggen (utan rubrikprop, den ska förbli utan), och båda tabellerna med sina källrader.

### 11. Det ettan har som vi måste behålla

Ettan (clasfixare.se) är lång och saknar tal, men täcker mer än vi gör.

1. Höjden 145 till 150 cm över golvet.
2. 15 till 25 cm mellan möbel och tavla.
3. En verktygslista.
4. Att tunga tavlor kräver ett robustare fäste än en spik.
5. Att regelsökaren används innan man borrar.

### 12. Fällor

- **Viktabellen med sju rader** och den prosakälla som står under den, alltså vilken tillverkare som står bakom vilken rad. Utan den raden är tabellen bara påståenden.
- **Meningen om att X-krokens värden gäller trä hos Essve men gips hos BGA**, och rådet att räkna med 5 kg om det inte står gips på förpackningen. Det är sidans skarpaste råd och det är gömt i ett resonemang.
- **Måttet från ramens överkant till den spända tråden**, med räkneexemplet på 167 cm. Det enda mått som avgör om tavlan hamnar rätt, och det finns inte på någon konkurrent.
- **Ramstorlekstabellen för klisterremsan.** 3M anger vikten efter ramens storlek, inte som ett tal, och det är därför tabellen har tre rader.
- **3M:s tre steg vid borttagning** (isopropylalkohol, vänta en timme, dra rakt nedåt). Det är avsnittets hela poäng.
- **Friskrivningen om att vi inte belastat någon krok själva**, med länken till `/om/sa-testar-vi/`. Krävs av `docs/ROST.md` avsnitt 4.

---

## /inomhus/skruva-i-gipsvagg/

### 1. Adress och sidtyp

`/inomhus/skruva-i-gipsvagg/` · `src/content/guider/inomhus/skruva-i-gipsvagg.mdx` · **problemguide**, pelaren Inomhus, nivå enkel. Skiljer sig från `/inomhus/gipsskruv/` i intention: den här sidan handlar om att hänga saker, inte om att montera skivor. **Den skillnaden är hela skälet till att det är två sidor.**

### 2. Huvudfras och sidofraser

**Huvudfras: skruva i gipsvägg, 720 per månad**, YoY 0 procent, vinnbarhet 3. **Kluster 840** med "montera tv på gipsvägg" (90) och "hylla gipsvägg" (30).

Sidofraser, med plats:

- **montera tv på gipsvägg (90)** — i H2:n om tv-fästet. Egen fras som slagits ihop hit, och avsnittet ska inte kortas.
- **hylla gipsvägg (30)** — i H2:n om hylla, skåp och gardinstång.
- **hitta regel i vägg (110, +57 procent på tre månader)** — i H2:n om att hitta regeln. **Den växer snabbast av sidans fraser och avsnittet ska ligga tidigt.**
- **molly** och **fjäderplugg** — i brödtext i pluggavsnittet, förklarade första gången.
- **kortling** — i H2:n om att öppna väggen.

### 3. Title

Nuvarande `seoTitle`: "Skruva i gipsvägg, vilken plugg som håller vikten", 49 tecken. Ligger rätt.

Krav: 40 till 55 tecken. "Skruva i gipsvägg" först och obrutet. Andra ledet ska handla om vikt eller plugg, alltså om att hänga saker, så att taggen skiljer sig från `/inomhus/gipsskruv/` redan i SERP:en. **De två sidornas titlar får inte bli utbytbara.**

### 4. Meta description

Nuvarande: 143 tecken. Ligger rätt.

Krav: 120 till 155 tecken. Huvudfrasen med. Ska lova viktabellen per pluggtyp och sätten att hitta regeln. Båda är fraser i klustret.

### 5. H1

Nuvarande: "Skruva i gipsvägg, så sitter hyllan, tv:n och skåpet kvar", 57 tecken.

Krav: huvudfrasen i naturlig form. De tre föremålen hylla, tv och skåp bör vara kvar eller ersättas av likvärdiga, eftersom de bär klustrets sidofraser i den första raden text läsaren ser. Skild formulering från title.

### 6. H2-struktur

Sju H2 i dag. Följande avsnitt måste finnas kvar:

1. Att lasten räknas per skruv och inte per föremål, med gränsen 5 till 6 kg. Sidans tes och ska ligga först.
2. Hur regeln hittas, med fyra metoder i ordning. **Bär hitta regel i vägg.**
3. Pluggfamiljerna och vad tillverkarna säger att de bär, som tabell. **Bär molly och fjäderplugg.**
4. Vad som gäller för hylla, skåp, handdukshängare och gardinstång. **Bär hylla gipsvägg.**
5. Tv-fästet och hävarmen. **Bär montera tv på gipsvägg.**
6. Felen som gör att pluggen roterar.
7. När väggen ska öppnas för en kortling. **Bär kortling.**

### 7. Längd

Nuvarande: 2 569 ord. Mål **2 300 till 2 900 ord**.

Motivering: ettan (hemfixarna.se) har tre korta avsnitt och inte en enda siffra. Vår längd bärs av att sidan äger fyra fraser. Under 2 300 ord måste tv-avsnittet eller regelavsnittet kortas, och båda är egna fraser.

### 8. Bilder

- **Huvudbild**, `illustrationer/inomhus/gipsvagg-pluggtyper.svg`. Bildtexten ska nämna att det som sitter bakom gipset är det som bär. Talet 13 mm är låst.
- **`<Illustration namn="inomhus/gipsvagg-hitta-regeln">`**, alt i dag 153 tecken. Kortas till under 125. Måste behålla: reglar på c 600, skruvraden över varje regel, och eluttaget intill regeln.

### 9. Interna länkar

Ut från sidan, alla måste finnas kvar:

- `/inomhus/hanga-tavla-gipsvagg/` — i brödtexten och som `lank` i första Faq-frågan. **Båda ska vara kvar.**
- `/inomhus/bygga-innervagg/` — regelavstånd och avväxlingar.
- `/inomhus/gipsskruv/` — skruvlängden till skivorna.

MDX-kommentaren `{/* LÄNK NÄR SIDAN FINNS: inomhus/gipsplugg */}` ska stå kvar.

In till sidan:

| Från | Ankare |
|---|---|
| `/inomhus/bygga-innervagg/` | skruva i gipsvägg, så sitter hyllan, tv:n och skåpet kvar |
| `/inomhus/gipsskruv/` | guiden om infästning i gips |
| `/inomhus/hanga-tavla-gipsvagg/` | skruva i gipsvägg för hylla, tv och tunga saker |

Den första inlänken är H1:n ordagrant. Skrivs H1 om ska ankaret i `/inomhus/bygga-innervagg/` skrivas om i samma omgång, annars pekar en länk på en rubrik som inte finns. **Anmäl det till koordinatorn, ändra inte grannsidan på eget bevåg.**

### 10. Strukturerad data och komponenter

`Article` plus `FAQPage`. **Faq-komponenten har fem frågor och ska ha fem frågor efteråt.** Frågorna får skrivas om helt, antalet inte, och `lank`-proppen i första frågan ska vara kvar. Frågeställningarna som ska finnas i någon form: om man kan skruva direkt i skivan utan plugg, var gränsen går för när det måste sitta i regeln, vilken plugg till en tv, vad man gör när pluggen snurrar, och hur man vet om väggen har ett eller två lag gips.

Rörs inte: `<Kalkylator namn="gipsplugg" />`, `<Markering>c 600 mm</Markering>`, `<Faktaruta rubrik="Vi belastar dem själva i vinter">`, båda `<Varning>`-blocken, `<Illustration>`, och pluggtabellen med sin källrad.

### 11. Det ettan har som vi måste behålla

Ettan (hemfixarna.se) är tunn, men de tre saker den gör ska vi också göra.

1. Att man letar regel när saken är tung.
2. Att mollyplugg och gipsankare är de två som nämns oftast, och vad som skiljer dem.
3. Tv:n som konkret exempel.
4. Att det går att skruva i gipsvägg utan plugg för det allra lättaste.
5. Att valet av infästning görs före köpet, inte i väggen.

### 12. Fällor

- **Pluggtabellen med åtta rader och två kolumner (ett lag, två lag).** Slutsatsen under den, att det andra skivlaget är värt mer än pluggen, är det enda i fältet som ingen annan har skrivit.
- **Gränsen 5 till 6 kg per skruv från Norgips**, med räkneexemplen på hyllan (25 kg på fyra punkter) och badrumsskåpet (18 kg på två mot fyra punkter). Räkneexemplen är själva poängen med "per skruv, inte per föremål".
- **Avstånden 50 mm och 300 mm mellan infästningar.** De återkommer tre gånger på sidan, och det är avsiktligt.
- **Meningen om att ingen tillverkare anger hur mycket en svängarm ökar lasten, och att vi därför inte ger en faktor.** Ett uttalat icke-svar som `docs/ROST.md` avsnitt 1 kräver, och som en omskrivning gärna byter mot en uppfunnen siffra.
- **Faktarutan om att vi belastar pluggarna själva i vinter.** Den är ett löfte till läsaren och en markering av att tabellen är tillverkarnas. Stryks den ser tabellen ut som våra egna mätvärden.
- **Att `typ: problemguide`** och att texten inte glider över i att handla om att montera gipsskivor. Kannibaliseringsrisken mot `/inomhus/gipsskruv/` är sidans största.

---

## /inomhus/ (pelarhub)

### 1. Adress och sidtyp

`/inomhus/` · `src/content/pelare/inomhus.mdx` · pelarhub. **Ingen brödtext.** Galleri byggt av mallen. Skribenten rör `title`, `description` och `ingress`.

### 2. Huvudfras och sidofraser

**Ingen mätbar huvudfras.** Pelaren heter "Väggar och innertak" och ska inte försöka ta någon av klustrets fraser, eftersom fyra publicerade sidor redan äger dem.

Ord som ska finnas i `title`, `ingress` eller `description`, som naturlig svenska: **väggar**, **reglar**, **gips**, **infästning**, **innertak**.

### 3. Title

Nuvarande `title`: "Väggar och innertak", 19 tecken. Ingen `seoTitle`.

Krav: 14 till 30 tecken, ett namn och inte ett löfte. Lägg **inte** till `seoTitle`. Ordet "gipsvägg" ska **inte** in i titeln: det kannibaliserar `/inomhus/skruva-i-gipsvagg/` och `/inomhus/gipsskruv/`.

### 4. Meta description

Nuvarande: 139 tecken. Ligger rätt.

Krav: 120 till 155 tecken. Ska beskriva pelarens omfång, inte en enskild sidas löfte.

### 5. H1

Sätts av mallen ur `title`. Inga andra krav än under punkt 3.

### 6. H2-struktur

Ingen. Kommentaren i frontmattret ska stå kvar.

### 7. Längd

Noll ord brödtext i dag och noll efteråt. `ingress` är 88 tecken och ska ligga mellan 60 och 120.

### 8. Bilder

Inga.

### 9. Interna länkar

In till hubben, med ankare som ska vara kvar på de sidor som länkar hit:

| Från | Ankare |
|---|---|
| `/golv/renovera-trappa/` | väggar och innertak |
| `/kok/slipa-bankskiva/` | projekten inomhus |

Det första ankaret är hubbens `title` ordagrant. Byts titeln ska ankaret i `/golv/renovera-trappa/` bytas i samma omgång. **Anmäl till koordinatorn.**

### 10. Strukturerad data och komponenter

`BreadcrumbList` via mallen. Kortgrupperna rörs inte. `viktiga` är tomt och förblir tomt.

### 11. Det ettan har som vi måste behålla

Ej tillämpligt.

### 12. Fällor

- **`utkast: false`.** Hubben är i menyn.
- **Att lägga till `seoTitle` eller brödtext.** Gör inte något av det.
- **Ankartexten "väggar och innertak"** på grannsidan, som hänger ihop med hubbens titel.

---

## /kok/slipa-bankskiva/

### 1. Adress och sidtyp

`/kok/slipa-bankskiva/` · `src/content/guider/kok/slipa-bankskiva.mdx` · projektguide, pelaren Kök och badrum, nivå enkel. **Pelarens enda publicerade sida.** Den bär därför hubben ensam.

### 2. Huvudfras och sidofraser

**Huvudfras: slipa bänkskiva, 210 per månad**, vinnbarhet 3.

Sidofraser, med plats:

- **olja bänkskiva** — i H2:n om oljan. Naturlig systerfras och den som gör att sidan täcker hela jobbet.
- **massiv eller fanerad bänkskiva** — i H2:n om kanten, som naturlig svenska.
- **korn** eller **kornighet** — i H2:n om de tre kornen.
- **hårdvaxolja** — i oljeavsnittet, förklarad första gången.
- **underhåll bänkskiva trä** — i H2:n om underhållet.

### 3. Title

Nuvarande `seoTitle`: "Slipa bänkskiva i trä, kornighet, slipriktning och olja", 55 tecken. Ligger i övre kanten.

Krav: 40 till 55 tecken. "Slipa bänkskiva" först och obrutet. "i trä" ska vara kvar: det skiljer sidan från laminat- och stenskivor och håller intentionen ren. Uppräkningen av tre led får kortas till två.

### 4. Meta description

Nuvarande: 141 tecken. Ligger rätt.

Krav: 120 till 155 tecken. Huvudfrasen med. Ska lova att sidan säger när skivan inte tål slipning, och att den stannar på ett kornnummer. Det andra är hela differentieringen mot ettan, som går till korn 400.

### 5. H1

Nuvarande: "Slipa bänkskiva i trä, tre korn räcker och det sista är inte det finaste", 72 tecken. **För lång.**

Krav: kortas till under 60 tecken. Huvudfrasen i naturlig form. Andra ledet ska bära poängen att man slutar tidigare än man tror. Skild formulering från title.

### 6. H2-struktur

Sju H2 i dag. Följande avsnitt måste finnas kvar:

1. Hur man ser om skivan är massiv eller fanerad, och vad det betyder. **Bär massiv eller fanerad bänkskiva.** Måste ligga först.
2. De tre kornen och varför man stannar. **Bär korn.**
3. Maskin eller hand, och slipriktningen.
4. Att fibrerna reser sig av fukt och att sista kornet körs om.
5. Oljan, tunna lager, överskottet bort. **Bär olja bänkskiva och hårdvaxolja.**
6. Underhållet som gör att nästa slipning uteblir. **Bär underhåll bänkskiva trä.**
7. Felen som ger fläckar.

### 7. Längd

Nuvarande: 1 526 ord. Mål **1 400 till 1 900 ord**.

Motivering: ettan är 800 till 900 ord, tvåan 650. Sidan är redan nästan dubbelt så lång som toppen och behöver inte växa. Den ska däremot inte krympa under 1 400 ord, eftersom fyra av dess sju avsnitt inte finns hos någon konkurrent.

### 8. Bilder

- **Huvudbild**, `illustrationer/inomhus/slipa-bankskiva-korn.svg`. Observera att filen ligger under pelaren `inomhus` trots att sidan ligger i `kok`. **Sökvägen rörs inte.** Bildtexten ska nämna stopp på 150 och vad steget till 240 gör.
- Inga inline-illustrationer.

### 9. Interna länkar

Ut från sidan, alla måste finnas kvar:

- `/fukt/luftfuktighet-inomhus/` — varför skivan slår sig om bara ovansidan oljas.
- `/inomhus/` — hubblänk.
- `/golv/slipa-parkettgolv/` — samma korn och ordning på ett golv.
- `/om/sa-testar-vi/` — under oljetabellen.

In till sidan:

| Från | Ankare |
|---|---|
| `/golv/renovera-trappa/` | slipa bänkskivan |
| `/inomhus/bygga-innervagg/` | slipa och olja bänkskivan |

Två inlänkar är minimum enligt byggkontrollen. **Sidan tål inte att förlora någon av dem.**

### 10. Strukturerad data och komponenter

`Article`. Ingen Faq på sidan och ingen ska läggas till.

Rörs inte: `<Varning rubrik=...>` om självantändning, och båda tabellerna med sina källrader.

### 11. Det ettan har som vi måste behålla

Ettan (gds.se) har sex stegbilder och en film.

1. Excenterslip på ytorna och något mindre i hörnen.
2. Att gammal olja och fläckar tas bort med grovt papper först.
3. Att oljan masseras in och får dra en stund.
4. Att man upprepar tills skivan är mättad.
5. Verktygslistan under en egen rubrik.

### 12. Fällor

- **Korntabellen med tre rader** och meningen under att trappan är vår medan sista kornet är oljetillverkarnas. Utan den meningen ser vårt eget val ut som en tillverkaruppgift.
- **Oljetabellen med fyra rader**, där kolumnen "sista korn" är hela beviset för att ettan har fel. Tabellen är sidans argument.
- **Ikeas 3 mm faner** och Byggmax 26 mm stavlimmade skiva. De två talen är hela skillnaden mellan de två skivtyperna.
- **Steget att fukta ytan och slipa sista kornet igen.** Finns inte hos någon av de tre översta och är sidans mest användbara moment.
- **Feltabellen med sex rader**, särskilt raden om järn på ek och raden om genomslipat faner.
- **Att sidan inte pekar ut ettan vid namn.** Formuleringen "den mest lästa guiden på nätet leder fel här" är avsiktlig. Redaktionens SEO-analys av konkurrenter får inte stå i publik text (`docs/ROST.md` avsnitt 3), och den formuleringen är gränsen. **Skriv den inte tydligare.**

---

## /kok/ (pelarhub)

### 1. Adress och sidtyp

`/kok/` · `src/content/pelare/kok.mdx` · pelarhub. **Ingen brödtext.** Galleri byggt av mallen. Skribenten rör `title`, `description` och `ingress`.

Pelaren har **en enda publicerad sida**, `/kok/slipa-bankskiva/`. Hubben är därför tunn av konstruktion, inte av slarv, och ska inte kompenseras med text.

### 2. Huvudfras och sidofraser

**Ingen mätbar huvudfras.** Ord som ska finnas, som naturlig svenska: **kök**, **badrum**, **bänkskivor**, **våtrum**, **kakel**.

Frasen "renovera badrum kostnad" (1 300) tillhör pelaren men har ingen sida ännu, och hubben ska **inte** försöka ta den. Det är en sida som ska byggas, inte en rubrik som ska formuleras.

### 3. Title

Nuvarande `title`: "Kök och badrum", 14 tecken. Ingen `seoTitle`.

Krav: 14 till 30 tecken, ett namn. Lägg **inte** till `seoTitle`.

### 4. Meta description

Nuvarande: 121 tecken. Precis över nedre gränsen.

Krav: 120 till 155 tecken. Ska beskriva pelarens omfång. Får gärna bli några tecken längre, eftersom den i dag ligger på gränsen.

### 5. H1

Sätts av mallen ur `title`.

### 6. H2-struktur

Ingen. Kommentaren i frontmattret ska stå kvar.

### 7. Längd

Noll ord brödtext i dag och noll efteråt. `ingress` är 103 tecken och ska ligga mellan 60 och 120.

### 8. Bilder

Inga.

### 9. Interna länkar

Inga inlänkar med ankartext från innehållsfiler i dag. Hubben når läsaren via menyn, sidfoten och brödsmulan från `/kok/slipa-bankskiva/`.

### 10. Strukturerad data och komponenter

`BreadcrumbList` via mallen. Kortgrupperna rörs inte. `viktiga` är tomt och förblir tomt.

### 11. Det ettan har som vi måste behålla

Ej tillämpligt.

### 12. Fällor

- **`utkast: false`.** Ändras det förlorar `/kok/slipa-bankskiva/` sin brödsmula.
- **Meningen i `ingress` om var gränsen går mot tätskikt och el.** Den är pelarens avgränsning och det enda som hindrar att nästa skribent lägger våtrumssidor här som borde ligga i Fukt.
- **Frestelsen att skriva brödtext** för att hubben ser tom ut med en sida. Gör inte det.

---

## /el/tillaggsisolera-vind/

### 1. Adress och sidtyp

`/el/tillaggsisolera-vind/` · `src/content/guider/el/tillaggsisolera-vind.mdx` · projektguide, pelaren El, nivå mellan. **Pelarens första sida.** Bär U-värdesmotorn och är därmed första halvan av verktygsplanens rad 9.

**Säsongskrav:** toppmånad februari. Sidan måste vara indexerad i januari. Omskrivningen får inte avpublicera den, och `publicerad: 2026-09-20` rörs inte.

### 2. Huvudfras och sidofraser

**Huvudfras: tilläggsisolera vind, 480 per månad**, **+51 procent på ett år och +84 på tre månader**, vinnbarhet 5. **Kluster 610** med "isolera vind kostnad" (90). Näst snabbaste växaren i hela körning 2.

Sidofraser, med plats:

- **isolera vind kostnad (90)** — i H2:n om vad det kostar. Egen fras, och kostnadsavsnittet ska inte kortas.
- **vindsbjälklag** — i första H2:n och i brödtext. Fackterm som förklaras första gången.
- **U-värde** — i samma avsnitt, förklarad första gången. Sidan bär motorn till `/rakna/u-varde/` och termen ska stå utskriven.
- **lösull** — i H2:n om lösull mot skivor.
- **vindsluckan** eller **lufttäthet** — i H2:n om tätningen.

### 3. Title

Nuvarande `seoTitle`: "Tilläggsisolera vind, vad det sparar och vad det kostar", 55 tecken. Övre kanten men rätt.

Krav: 40 till 55 tecken. "Tilläggsisolera vind" först och obrutet, i obestämd form som frasen söks. Både "sparar" och "kostar" bör vara kvar: ettan är en forumtråd om lönsamhet, och det är den frågan som ska synas i SERP:en.

### 4. Meta description

Nuvarande: 147 tecken. Ligger rätt.

Krav: 120 till 155 tecken. Huvudfrasen med. Ska nämna 400 millimeter, ett pris per kvadratmeter eller sparade kronor, och fuktfrågan. Alla tre är skäl att klicka och ingen konkurrent har alla tre.

### 5. H1

Nuvarande: "Tilläggsisolera vinden, vad det sparar och när det blir fel", 59 tecken.

Krav: huvudfrasen i naturlig form (bestämd form "vinden" är bra i H1 och ska inte tvingas till obestämd). Skild formulering från title, vilket den i dag nästan inte är: "vad det sparar" står i båda. **Det här paret ska skiljas åt.**

### 6. H2-struktur

Åtta H2 i dag. Följande avsnitt måste finnas kvar:

1. Vad 400 millimeter sparar, med U-värde och kilowattimmar. **Bär vindsbjälklag och U-värde.**
2. Vad det kostar, med både forumtrådens verkliga offert och den kommunala rådgivningens spann. **Bär isolera vind kostnad.**
3. Lösull mot skivor och vad som faktiskt avgör. **Bär lösull.**
4. Att vinden blir kallare och fuktigare, och att det är väntat.
5. Lufttätheten som det egentliga arbetet. **Bär vindsluckan och lufttäthet.**
6. Ventilationen, och att den ska vara kvar men inte ökas.
7. Ordningen på arbetsmomenten.
8. När vinden ska lämnas ifred.

### 7. Längd

Nuvarande: 3 442 ord. **Sajtens längsta sida i den här omgången.** Mål **3 100 till 3 700 ord**.

Motivering: ettan är en forumtråd, tvåan en myndighetssida utan siffror, resten produktkataloger. Ingen äger frasen. Längden motiveras av att sidan ensam svarar på tre frågor som ligger i olika texter i dag: lönar det sig, vad kostar det, och vad går sönder. Den ska inte krympa. Den ska heller inte växa över 3 700 ord innan `/rakna/u-varde/` finns att flytta räknedelen till.

### 8. Bilder

- **Huvudbild**, `illustrationer/el/vind-bjalklag.svg`. Bildtexten ska nämna 300 mm ny lösull ovanpå 100 gamla och att måttet gäller båda lagren. Talen är låsta.
- **`<Illustration namn="el/vind-takfot">`**, alt i dag 626 tecken. **Sidans längsta alt-text och den som måste kortas mest.** Ner till under 125 tecken. Måste behålla: två takfötter, en rätt och en fel, vindavledaren som håller luftspalten öppen, och talet 50 mm. Resten av detaljerna hör hemma i bildtexten, inte i alt.

### 9. Interna länkar

Ut från sidan, alla måste finnas kvar:

- `/grund/isolera-krypgrund/`, två ställen — formeln för energibesparing och samma mekanik nedåt.
- `/fukt/luftfuktighet-inomhus/`, två ställen — relativ luftfuktighet och Folkhälsomyndighetens gräns.
- `/rakna/elkostnad/` — omräkning av sparade kilowattimmar till kronor. **Enda länken till ett verktyg och den ska ligga kvar direkt efter antagandelistan.**

In till sidan:

| Från | Ankare |
|---|---|
| `/grund/isolera-krypgrund/` | tilläggsisolera vinden |
| `/fukt/luftfuktighet-inomhus/` | tilläggsisolera vinden |

**Bara två inlänkar, och pelaren El har ingen hub ännu.** Sidan är den svagast länkade i hela omgången. Den tål inte att förlora någondera, och den ska inte heller tappa sina utgående länkar, eftersom de är dess enda koppling till resten av sajten.

### 10. Strukturerad data och komponenter

`Article` plus `FAQPage`. **Faq-komponenten har fem frågor och ska ha fem frågor efteråt.** Frågorna får skrivas om helt, antalet inte. Frågeställningarna som ska finnas i någon form: om det lönar sig, hur mycket isolering som ska ligga, om vinden blir fuktig, om ångspärr behövs, och vad det kostar per kvadratmeter.

Rörs inte: `<Kalkylator namn="rotavdrag" />` i kostnadsavsnittet, `<Faktaruta rubrik=...>` om gångbryggan, `<Illustration>`, och alla tre tabeller med sina källrader.

### 11. Det ettan har som vi måste behålla

Ettan är en forumtråd på rikatillsammans.se, och den är bättre än den låter.

1. Ett verkligt prisexempel med ort, datum och uppdelning: 10 000 kr förarbete, 29 000 kr isolering, 39 000 kr totalt för 40 kvadratmeter.
2. Återbetalningstiden som frågans kärna, inklusive misstanken att 3 till 4 år är för bra.
3. Fuktdiskussionen: mögelrisk, hål i ångspärren, luftspalt, gavelventiler.
4. Varningen från en byggnadsingenjör mot att täta och isolera utan bedömning.
5. Att frågan ställs av någon som redan vet att vinden är dåligt isolerad, alltså ingen introduktion till vad isolering är.

### 12. Fällor

- **Rockwools besparingstabell med fyra rader** och fotnoten om 3 720 graddagar. Vår omräkning till 89 280 gradtimmar är det som gör att läsaren kan räkna på sin egen yta, och den står i ett stycke som ser ut som en metodanmärkning.
- **Listan med fyra antaganden** under räkneexemplet, särskilt elpriset 2,40 kr per kWh med SCB som källa och perioden utskriven. Utan den är 5 500 kr ett påhittat tal.
- **De 39 000 kronorna och 975 kr per kvadratmeter** ur forumtråden, mot 150 till 500 kr per kvadratmeter från kommunal rådgivning. Kontrasten mellan de två talen är sidans skarpaste avsnitt.
- **Räkningen som visar att materialet ensamt kostar 252 kr per kvadratmeter**, och förklaringen med densiteten (25 kg maskinblåst mot 12,6 kg handkrattat per kvadratmeter vid 300 mm). Det är sidans mest kontraintuitiva fynd.
- **Meningen om att energianvändningen inte nödvändigtvis minskar om värmesystemet inte sänks efteråt.** Energimyndighetens och den vanligaste orsaken till besvikelse.
- **Att en ny tät folie inte får läggas längre ut i konstruktionen än den gamla.** Ett råd som är dyrt att missa och lätt att korta bort.
- **Punkt tolv i ordningslistan**, att gå upp på vinden första vintern och leta rimfrost. Listan har tolv punkter av ett skäl, och den sista är den som avgör om arbetet blev rätt.
- **Rubriken "Vad det kostar, och vad de 39 000 kronorna i forumtråden innehöll"** nämner en konkurrentsida i publik text. Det ligger på gränsen mot `docs/ROST.md` avsnitt 3. Talet och offerten ska vara kvar, men **rubriken får gärna skrivas om så att den beskriver kostnaden i stället för källan.**
