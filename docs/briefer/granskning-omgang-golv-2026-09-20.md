# Granskning omgång golv, 2026-09-20, sex sidor och två verktyg

Granskad med alla fyra hattarna: chefredaktör (stil och fakta), SEO-strateg, affiliateansvarig och
designansvarig. Samma form och samma ribba som `granskning-omgang-altan-grund-2026-09-19.md` och
`granskning-grund-2-2026-09-20.md`.

Ingen artikelfil och ingen formelmodul är ändrad av granskaren. Inlänkarna från befintliga sidor är
inlagda, de står i avsnitt 6. `src/content/pelare/golv.mdx` är satt till `utkast: false` och
`uppdaterad: 2026-09-20`, och hubben är byggd, hämtad och läst, se avsnitt 7. `npm run build` är
grön och `npm run kontrollera` ger **51 filer, 45 publicerade sidor, 0 fel, 0 varningar**.
Varningen om vindsidan utan inlänk är borta.

Metod. Det mekaniska stilpasset är kört som sökning över alla åtta filerna plus de två
formulärkomponenterna (tankstreck, "X: Y"-rubriker, frågerubriker, förbjudna fraser, hedging, "man",
fetstil i punktlistor, emojis, Fördelar/Nackdelar som rubrik). Alla femton illustrationerna är
renderade till PNG i 1 200 px och lästa som bilder, och därefter mätta i källfilernas egna
koordinater, eftersom renderingen två gånger gav fel intryck åt båda hållen. Korsdubbletterna är
hittade maskinellt med sjugram över de sex nya sidorna mot **samtliga 34 publicerade artiklar** i
repot. Varje tal i de sex artiklarna som går att räkna efter är omräknat. **Hela regelverket om
trappor är verifierat mot författningstexten i BFS 2024:9 som PDF och mot Boverkets vägledning**,
och **varje tal, datum och citat om rotavdraget är verifierat mot Skatteverkets egna sidor**; båda
kontrollerna står i sin helhet i avsnitt 2 och 3. Resultatspalterna är mätta i dev-servern vid
standardvärdena. Hubben är läst i `dist/client/golv/index.html`, inte bara i dev.

## 1. Sammanfattning

1. **Ingen sida är underkänd. Alla åtta går igenom efter en retur.** 84 ändringskrav fördelade på
   åtta sidor: bygga-trappa 13, renovera-trappa 11, slipa-parkettgolv 9, lägga-klickgolv 10,
   golv-i-kallare 10, tilläggsisolera-vind 12, rakna/trappa 10, rakna/rotavdrag 9.
2. **Det mekaniska stilpasset ger en enda träff på hela omgången:** `src/pages/rakna/trappa.astro`
   rad 279, FAQ-frågan "Hur räknar man ut stegdjupet?". Inga tankstreck, inga "X: Y"-rubriker,
   inga frågerubriker i brödtexten, ingen hedging, inga emojis, ingen fetstil i punktlistor, inga
   slentriantreklanger. Det är andra omgången i rad som i praktiken går igenom första passet rent.
3. **Regelverkskontrollen på trappor: de två agenterna hade rätt om författningen och rätt i sak
   om stegmåtten, men tre av underlagets påståenden om gamla BBR håller inte.** BFS 2024:9 är rätt
   författning, alla nio paragrafer stämmer ordagrant, och föreskriften anger mycket riktigt inga
   stegmått. Men BBR angav aldrig en steghöjd, aldrig trappformeln och aldrig en trappbredd på
   0,9 m. Två gällande källor med stegmått saknas helt på båda sidorna, och den ena av dem är den
   standard Boverket själva hänvisar till. Hela kontrollen i avsnitt 2.
4. **Rotavdragskontrollen: alla tal är rätt, men en källhänvisning är påhittad.** 30 procent,
   50 000 kr, 75 000 kr, 12 maj till 31 december 2025, maskinformuleringen, skatteformuleringen och
   ägarkravet stämmer ordagrant mot Skatteverket. Men räkneexemplet 10 000 / 3 000 / 7 000 står
   inte på den sida koden, underlaget och testskriptet alla tre säger att det står på. Krav 5.2.1.
   Hela kontrollen i avsnitt 3.
5. **Omgångens tyngsta enskilda fel är korsdubbletten mellan `bygga-trappa.mdx` och
   `rakna/trappa.astro`: 78 sjugram, varav sju hela meningar ordagrant.** De två sidorna säger
   samma sak med samma ord om trappformeln, gånglinjen, de borttagna råden och räcket. Krav 5.1.1.
6. **Mellan de sex artiklarna finns däremot nästan inga korsdubbletter alls.** Sjugramssökningen
   mot samtliga 34 publicerade artiklar ger fyra träffar totalt, varav en är ett fel: definitionen
   av relativ luftfuktighet, som nu står på sin sjätte sida. Rotavdragsmeningen står på tre sidor
   men i tre olika formuleringar, vilket är rätt hanterat. Avsnitt 4.
7. **Faktakontrollen håller överallt där den går att räkna efter.** Alla fyra raderna i Rockwools
   besparingstabell stämmer på hundradelen mot 89 280 gradtimmar. Trappformelns tabell stämmer på
   alla fem raderna. Exempeltrappan (16 steg, 169 mm, 292 mm, 4,4 m, 30 grader, formelsumma 629,5)
   är identisk i guiden och i verktyget, vilket testskriptet också låser. Färgåtgången, hålets
   längd i bjälklaget, materialsumman 18 802 kr, lösullens 252 kr per kvadratmeter och
   återbetalningstiderna är alla omräknade och rätt.
8. **Omgångens designfråga är att tre skisser inte visar det texten säger.** `el/vind-bjalklag`
   ritar 256 mm ny lösull över 144 mm gammal när artikeln räknar på 300 över 100;
   `golv/kallargolv-fuktskala` har en axel som börjar på 80 procent utan att säga det, och ritar
   två olika tabellrader som en och samma stapel; `golv/klickgolv-forband` har en penna som ringar
   in något utan att säga vad. Krav 5.6.9, 5.5.8 och 5.4.8.
9. **Alla femton illustrationerna klarar de mekaniska kraven.** 5,0 till 33,4 kB, alla under 40 kB.
   Ingen har `<text>` kvar. Alla är 600 × 360 med `role="img"`, och rot-taggens `aria-label` ligger
   på 277 till 550 tecken, alltså under 600. Fyra av dem är dessutom måttriktiga på under en
   procent, vilket är första gången i tre omgångar: `trappa-vangstycke` ritar 35 mot 60 enheter där
   etiketterna säger 169 mot 292 mm, och `rakna/trappa` 36 mot 62. Det ska sägas rakt ut, eftersom
   de två förra omgångarna föll på just det.
10. **Affiliate är rent på alla åtta.** Ingen affiliatelänk, ingen butikslänk i löptext, inget
    produktkort, ingen köpknapp, inget reklamband. Fem av sex artiklar har `produkter: []`, ingen är
    `kopguide`, ingen rad i `behover` bär en `produkt`, och båda verktygssidorna har
    `reklam={false}`. De butiker som citeras (K-Bygg, Hornbach, Bauhaus, Bolist, Byggmax, Beijer,
    Bygghemma, Illerbrands, Stureby) står genomgående som källor, och på tre ställen som källor vi
    går emot, vilket är bättre än neutralt. **Inga krav från affiliatehåll på någon sida.**
    `bygga-trappa.mdx` saknar `produkter: []` helt, vilket schemat tål men som bryter mönstret;
    krav 5.1.13.
11. **Ett verktygskort per sida, som beställt**, men i fel form på två ställen. bygga-trappa
    `<Kalkylator namn="trappa" />` (rätt, sidan äger frågan), golv-i-kallare
    `<Verktygskort kalkylator="kallare" />` (rätt), renovera-trappa, slipa-parkettgolv och
    tilläggsisolera-vind `<Kalkylator namn="rotavdrag" />`. Den sista är rätt på renovera-trappa och
    slipa-parkettgolv, där kostnaden är sidans eget avsnitt, men lägga-klickgolv bäddar in hela
    kvadratmeterräknaren för en fråga den skickar vidare i nästa mening. Krav 5.4.6.
12. **Rotavdragsverktyget bäddas in på tre artiklar, inte fyra**, och de tre säger inte samma sak
    om det gemensamma taket. Krav 5.2.4.
13. **Bättre än ettan-listorna är levererade i sin helhet på sju av åtta sidor.** Undantaget är
    bygga-trappa, vars punkt 2 lovar BFS 2024:9 "2 kap. 5 till 13 §§ och 25 §" medan sidan citerar
    6, 11, 12 och 25 §§. Krav 5.1.1. Två delvis levererade punkter till: renovera-trappas punkt 3
    lovar "när färgen tål att gås på" i tabellen och sidan har det bara i prosa för ett av tre
    fabrikat (krav 5.3.5), och vindens brief lovar en länk till `/rakna/elkostnad/` som saknas
    (krav 5.6.10).
14. **Längden håller på alla sex.** Brödtext utan tabeller och FAQ: bygga-trappa 2 247,
    golv-i-kallare 2 013, renovera-trappa 2 295, slipa-parkettgolv 2 701, lägga-klickgolv 2 736,
    tilläggsisolera-vind 2 778. Med tabellerna och FAQ:n inräknade landar lägga-klickgolv på cirka
    3 140 och tilläggsisolera-vind på cirka 3 120 ord. Bedömningen och vad som ändå ska strykas
    står i avsnitt 5.
15. **Resultatspalterna klarar 4.7 med god marginal.** Mätt i dev vid standardvärdena: rotavdrag
    559 tecken, trappa 484. Spec-avsnittets jämförelsetal är dränering 989, måla-ute 695 och
    bygglov-altan 441. Trappa är den näst kortaste spalten på sajten. Båda bär bara beskedet, det
    stora talet med sina rader och de två länkarna; regler med källa och "Gör inte det här" står som
    egna H2 under verktyget. **Godkänt utan krav**, med en frivillig strykning i 5.2.9.
16. **Metadata är i ordning på alla sex.** Alla har `seoTitle`, till skillnad från tre sidor i
    omgång 1. description 142 till 155 tecken, seoTitle 39 till 56, title 26 till 61. Två
    description ligger på 155 tecken, vilket är en tecken över förra omgångens egen ribba; krav
    5.5.10 och 5.7.9.

## 2. Regelverkskontrollen om trappor, punkt för punkt

Uppdraget bad om verifiering av 2 kap. 5, 6, 7, 8, 10, 11, 12, 13 och 25 §§. Allt nedan är hämtat
2026-09-20 ur **författningens egen PDF** på `rinfo.boverket.se`, inte ur en vägledningssida, och
kontrollerat mot Boverkets vägledning i PBL kunskapsbanken.

### 2.1 Författningen

**BFS 2024:9 är rätt, och de två agenterna har rätt.** Fullständigt namn: *Boverkets föreskrifter
(BFS 2024:9) om säkerhet vid användning av byggnader*. Beslutad 19 november 2024, i kraft
1 juli 2025. **Den saknar allmänna råd helt** — den heter "föreskrifter om", inte "föreskrifter och
allmänna råd om". Av de nio nya författningarna är det bara 2024:6 och 2024:7 som har allmänna råd.

En namnjustering: underlaget och en av agenterna kallar den på sina ställen "skydd mot olyckor".
Det är rubriken på 4 kap. i BFS 2024:13 om tomter, inte namnet på den här författningen. Båda
artiklarna skriver rätt namn i brödtexten, så inget krav faller på dem, men benämningen ska inte
citeras vidare.

### 2.2 Paragraferna

| Paragraf | Handlar om trappor | Utfall |
|---|---|---|
| 2 kap. 5 § | ja | **stämmer ordagrant** |
| 2 kap. 6 § | ja | **stämmer ordagrant** |
| 2 kap. 7 § | ja, plan framför dörr | **stämmer, men står inte på någon av våra sidor** |
| 2 kap. 8 § | ja, markering | **stämmer, och småhusundantaget är rätt återgivet** |
| 2 kap. 10 § | ja, skydd mot fall | **stämmer, men står inte på någon av våra sidor** |
| 2 kap. 11 § | ja, räcket | **stämmer ordagrant, alla fem punkterna** |
| 2 kap. 12 § | ja, ledstänger | **stämmer ordagrant** |
| 2 kap. 13 § | ja, ledstängernas utformning | **stämmer, men utan paragrafnummer på sidan** |
| 2 kap. 25 § | ja, fri höjd | **stämmer ordagrant** |

Källa: BFS 2024:9, hämtad som PDF och läst i sin helhet 2026-09-20.

**5 § i sin helhet:** "Trappor och ramper ska vara utformade så att personer kan förflytta sig
säkert." Verktygets antagandetabell citerar det ordagrant. Guiden citerar det inte alls, utan går
direkt på vägledningen. Krav 5.1.1.

**6 §:** "Öppningar i trappor ska vara utformade så att yngre barn inte kan falla igenom eller
fastna i dem. Öppningar mellan plansteg i trappor ska vara högst 100 mm." Båda sidorna rätt.

**7 §**, som ingen av sidorna har: "Det ska finnas ett plan, mellan en dörr och en nedåtgående
trappa, ramp eller enstaka trappsteg, om det inte är obehövligt." Det är ett krav som biter i en
villa, det finns inte på någon konkurrentsida, och det hör hemma i guidens tabell. Krav 5.1.1.

**8 §:** "I en trappa ska varje trapplopps början och slut tydligt markeras. Krav på tydlig
markering gäller även för trappsteg med avvikande höjd där ett sådant inte kan undvikas." Andra
stycket: "Kraven på markering i första stycket gäller dock inte för en- och tvåbostadshus, i
bostadslägenheter i flerbostadshus eller om det annars är obehövligt." **Guiden rad 120 har detta
exakt rätt, inklusive undantaget.** Verktyget har det fel, se krav 5.7.3.

**11 §**, andra stycket, alla fem punkterna ordagrant: klätterskydd på 0,8 meter av skyddets höjd,
vertikala öppningar högst 100 mm, trappräckets underkant till stegnos högst 50 mm, underkant till
trapplan eller golv högst 100 mm, inga horisontella öppningar i intervallet 110 till 230 mm.
**`renovera-trappa.mdx` rad 118 till 122 återger alla fem korrekt.** Men villkoret är fel återgivet
på båda sidorna, se nedan.

**Villkoret "där yngre barn kan vistas".** Boverkets vägledning: "Till sådana utrymmen räknas
bostadslägenheter, det vill säga bostäder i både flerbostadshus och småhus." **En bostad räknas
alltså alltid dit, oavsett om det bor barn där i dag.** Guiden rad 169 skriver "Finns barn i huset
är tre tal viktigare än alla andra", och renovera-trappa rad 116 skriver "i utrymmen där barn under
sex år kan vistas". Båda är fel: det första gör kravet frivilligt för den barnlöse, det andra sätter
en åldersgräns som inte finns i föreskriften. Krav 5.1.2 och 5.3.2.

**12 §:** "Trappor och ramper ska ha ledstänger på båda sidor som stöd för balansen. Det räcker dock
med en ledstång på ena sidan om det, med hänsyn till trappans eller rampens användning eller
utformning, är obehövligt med ledstänger på båda sidor." Guiden rad 165 och verktyget rad 613 rätt.

**13 §:** tre punkter om att ledstängerna ska vara lätta att gripa om, löpa kontinuerligt och ge
stöd innan och efter förflyttningen. Guiden rad 165 återger alla tre, men utan paragrafnumret.

**25 §:** "Den fria höjden ska vara minst 2,00 meter i utrymningspassager, trappor, dörrar och
andra kommunikationsutrymmen." Båda sidorna rätt.

### 2.3 Stegmåtten: rätt i sak, för brett formulerat på ett ställe

**Påståendet håller.** Föreskriften anger inget tal för stegdjup, steghöjd, lutning, trappbredd,
ledstångshöjd eller räckeshöjd. Kontrollerat med sökning i hela författningstexten. Boverkets
vägledning säger det själv, och **guiden rad 126 citerar meningen ordagrant och rätt**: "Kravet
anger inga mått, eftersom det behövs en riskanalys av det enskilda fallet."

Men föreskriften innehåller åtta bindande tal (100 mm, 0,8 m, 50 mm, 110 till 230 mm, 2,00 m med
flera). Formuleringen ska därför alltid vara "inga **stegmått**", aldrig "inga mått".

- Guiden rad 126 skriver "inga stegmått alls" ✓, och rad 128 säger uttryckligen vad som däremot
  står i siffror ✓. **Rätt hanterat.**
- Verktygets brödtext rad 485 till 490 och FAQ rad 284 skriver "inga stegmått" ✓.
- **Verktygets antagandetabell rad 193 skriver "Föreskriften anger inga mått"**, tre rader ovanför
  tre rader som citerar mått ur samma föreskrift. Krav 5.7.2.

### 2.4 Gamla BBR: tre av underlagets uppgifter håller inte

Boverkets BBR-sida om trappor svarar nu 404, eftersom övergångsperioden gick ut. Kontrollen är
gjord mot grundförfattningens PDF (`BFS2011-6.pdf`) och mot en arkiverad ögonblicksbild av
Boverkets egen återgivning; de två stämmer överens.

**Stämmer, och står rätt i verktygets antagandetabell:**

- BBR 8:232, allmänt råd: "Stegdjupet i trappor bör vara minst 0,25 meter, mätt i gånglinjen."
- BBR 8:91, allmänt råd: "Trappstegens djup i en trappa bör vara minst 0,30 meter, mätt i
  gånglinjen." och "För att minimera risken att någon snubblar bör en trappa ha fler än två steg."
- BBR 8:232, allmänt råd: trapplan inom en bostadslägenhet minst 1,3 meter.
- BBR 8:2322, allmänt råd: "Ledstänger bör sitta på 0,9 meters höjd."

**Håller inte, och ska inte citeras vidare:**

- **BBR angav aldrig en steghöjd.** Ordet "steghöjd" förekommer inte en enda gång i BBR, varken i
  föreskrift eller allmänt råd. Talet 0,18 m respektive 0,20 m kommer ur Svensk Byggnorm, före BBR,
  och stod bara i Boverkets löpande vägledningstext. Ingen av våra sidor publicerar det som ett
  BBR-tal, så inget behöver rättas, men uppgiften ska ut ur underlaget.
- **Trappformeln har aldrig stått i någon svensk byggregel.** Varken "600", "650" eller formeln
  finns i BBR. Den kommer ur branschlitteraturen. Guiden rad 75 och verktyget skriver rätt
  avsändare (Svenskt Trä) ✓.
- **Trappbredd 0,9 m var aldrig ett BBR-krav.** BBR:s breddtal var 1,20 m (sjukbårstransport) och
  2,5 m (delning i flera lopp). 0,9 m i BBR är räckeshöjd och ledstångshöjd. Guiden rad 159 skriver
  "runt nio decimeter" som egen erfarenhet, vilket är ärligt, men det finns en riktig källa, se
  krav 5.1.11.

### 2.5 Två gällande källor med stegmått som saknas på båda sidorna

Det här är omgångens största missade möjlighet, och den ligger precis i det hål sökordsanalysen
pekar ut.

**SIS/TS 59:2025, *Trappor, ramper, räcken och balkonger — Säkerhet vid användning*.** Publicerad
20 maj 2025, uttryckligen för att fylla luckan efter BBR:s allmänna råd. SIS projektledare:
"Innehållet grundas till stor utsträckning på Boverkets allmänna råd som försvinner i samband med
att samexistensperioden löper ut 2026." **Det är den "standard" Boverkets vägledning syftar på när
den hänvisar vidare.** Båda våra sidor skriver i stället att myndigheten hänvisar till "standarder
och handböcker" och gissar att trappformeln fyller platsen. Standarden kostar 1 250 kr och ligger
bakom betalvägg, så vi kan inte citera ett enda tal ur den. Men att namnge den och säga att vi inte
läst den är både sant och mer än något annat i fältet har. Krav 5.1.4 och 5.7.5.

**AFS 2023:12 om utformning av arbetsplatser, Arbetsmiljöverket, i kraft 1 januari 2025.** Det här
är **den enda gällande svenska författningen med stegmått i klartext**. 25 §, allmänt råd: "För att
en trappa ska vara säker att använda bör minsta stegdjup normalt vara 0,25 meter och största
steghöjd 0,18 meter. Trappan bör ha kontrastmarkeringar samt ha ledstänger på en höjd av 0,9 meter,
mätt vid stegnosen." Den gäller arbetsplatser, inte bostäder, och det måste stå. Men på en sida vars
hela poäng är att måtten försvann ur byggreglerna är det en betydande upplysning att de finns kvar i
arbetsmiljöreglerna, med nästan samma tal. Krav 5.1.5.

**TMF:s handledning för trätrappor inom enfamiljshus** (2013, branschhandledning, refererar till
upphävda regler och kan inte åberopas som regelkälla): "Lämplig steghöjd är 170-210 mm. Stegdjupet
rekommenderas vara minst 250 mm i gånglinjen." och "Trappor inom enfamiljshus/lägenheter utförs
vanligtvis med en fri bredd av 900 mm." Den sista meningen är källan till guidens egen erfarenhet.
Krav 5.1.11.

### 2.6 Datumen, och vad uppdraget hade fel om

Uppdraget säger att guiden skriver "Byggreglerna byttes den 1 juli 2026". **Den meningen finns inte
i filen.** `bygga-trappa.mdx` rad 124 skriver: "Författningen trädde i kraft den 1 juli 2025, och
möjligheten att i stället följa de gamla byggreglerna upphörde ett år senare." Det är korrekt, och
det stämmer med verktygets `NYA_REGLER_FRAN = '1 juli 2025'` och `GAMLA_RADEN_TILL = '1 juli 2026'`.
Bägge datumen är verifierade mot Boverket i dag.

**Det verkliga problemet är ett annat: guiden skriver aldrig ut det andra datumet.** Rad 142 säger
"Råden är borta sedan i somras", och rad 140 säger "ett år senare". En läsare som landar från Google
i mars 2027 kan inte räkna ut vilken sommar. Verktyget skriver ut datumet på alla tre ställen utom
ett. Krav 5.1.3 och 5.7.6.

**Bygglovsreformen 1 december 2025** (Lag 2025:974) tog bort lovplikten för fasadändringar på en-
och tvåbostadshus, och den nuvarande lydelsen av 9 kap. 19 § PBL sätter altangränserna till 1,8 m
inom 3,6 m från byggnaden och 1,2 m i övrigt. Entrétrappa till ett småhus kräver alltså normalt
inte bygglov. Guidens utetrappeavsnitt säger ingenting om lov. Krav 5.1.12.

**Gränsdragningen byggnad mot tomt är rätt.** Guiden rad 144 återger Boverkets egen formulering
korrekt: entrétrappan är en del av byggnaden och lyder under BFS 2024:9, medan en trappa i en
gångväg på tomten ligger i BFS 2024:13. **Det är omgångens bästa enskilda regeluppgift** och den
finns inte på någon svensk konkurrentsida.

## 3. Rotavdragskontrollen, punkt för punkt

Allt hämtat hos Skatteverket 2026-09-20, citaten ordagrant ur den hämtade sidan.

### 3.1 Det som stämmer

| Uppgift | Utfall |
|---|---|
| 30 procent av arbetskostnaden | **stämmer ordagrant** |
| Rot-taket 50 000 kr per person och år | **stämmer ordagrant** |
| Gemensamt tak rot och rut 75 000 kr | **stämmer ordagrant** |
| Den tillfälliga nivån 50 procent | **stämmer ordagrant** |
| 12 maj till 31 december 2025 | **stämmer ordagrant** |
| Betalningen daterar avdraget | **stämmer, men på fel källa** |
| Maskinell utrustning undantagen | **stämmer ordagrant** |
| Skatterna avdraget räknas av mot | **stämmer ordagrant** |
| Ägarkravet | **stämmer, men tre villkor saknas** |
| 2026: 30 procent, oförändrade tak | **stämmer** |

Källa: Skatteverket, *Så fungerar rotavdraget*, *Rot och rut*, *Ger arbetet rätt till rotavdrag?*,
nyheten om den tillfälliga höjningen, FAQ-sidan om hur mycket man måste tjäna, samt *Nya lagar och
regler 2026*. Alla sex URL:er i `rotavdrag.ts` svarar 200 och innehåller det de påstås innehålla,
med ett undantag (3.2).

**En viktig precisering om de 75 000 kronorna.** Uppdraget formulerar det som att 75 000 kr var ett
tillfälligt höjt tak 12 maj till 31 december 2025. Så var det inte. Under den perioden var det
**procentsatsen** som var höjd, till 50 procent; taken rördes inte. Ett separat rottak på 75 000 kr
fanns däremot, under **beskattningsåret 2024**, med en begränsning som höll kvar 50 000 kr fram till
30 juni 2024. Verktyget har detta rätt: det märker 50 procent som "Den tillfälliga nivån" med de två
datumen, och 75 000 kr som "Gemensamt tak, rot och rut". **Ingen rättelse behövs i koden.**

### 3.2 Källhänvisningen som inte håller

**Räkneexemplet 10 000 / 3 000 / 7 000 står inte hos Skatteverket.** Sidan *Så fungerar rotavdraget*
har hämtats i sin helhet och genomsökts; talen förekommer inte. Det enda 10 000-exemplet hos
Skatteverket ligger på företagssidan och ger ett annat svar, eftersom det räknar 30 procent på
arbetskostnaden **inklusive moms**: 10 000 kr plus moms är 12 500 kr, och avdraget blir 3 750 kr.

Vår formel är inte fel. Fältet frågar efter arbetskostnad inklusive moms, och 10 000 kr inklusive
moms ger korrekt 3 000 kr. **Det är källhänvisningen som är påhittad**, och den står på fem ställen:
`rotavdrag.ts` rad 82 till 89, `underlag-kalkyl-rotavdrag-2026-09-20.md` rad 30 till 32, 51 och 85,
och `scripts/test-kalkyl-rotavdrag.mjs` rad 79 till 93. Krav 5.2.1.

### 3.3 Tre luckor som spelar roll för just den här omgången

1. **Femårsregeln saknas helt.** Skatteverket: "Du kan inte få rotavdrag för ombyggnad eller
   tillbyggnad de första fem åren efter det år huset byggdes färdigt... Reparation och
   underhållsarbeten ger rätt till rotavdrag oavsett hur gammalt huset är." Verktyget länkar i
   "Läs vidare" till `/golv/bygga-trappa/` och (efter avsnitt 6) till `/el/tillaggsisolera-vind/`,
   alltså två arbeten som Skatteverket uttryckligen klassar som ombyggnad. Krav 5.2.2 och 5.6.5.
2. **Skattefältet modellerar fel skatt.** Formuläret frågar efter "Din preliminära skatt i år".
   Skatteverket: avdraget kan aldrig bli större än "slutlig skatt efter det att den slutliga skatten
   minskats med skattereduktionerna för allmän pensionsavgift, arbetsinkomst (jobbskatteavdrag) och
   underskott av kapital". Jobbskatteavdraget är stort och äter av samma utrymme. Det är en
   förenkling, den är försvarbar, men den står inte som Antagande någonstans. Krav 5.2.3.
3. **Grävmaskinistens tid ger rot.** Skatteverket: "som kranskötare eller grävmaskinist utföra
   arbete som är godkänt för rotavdrag på tomten" står under *Rotavdrag ges för att*. Bara maskinen
   är undantagen. `GOR_INTE_MASKINHYRA_I_ARBETET` riskerar att läsas som att markjobb med maskin
   inte ger rot alls. Krav 5.2.7.

### 3.4 Golv- och trappjobben i A–Ö-listan

| Arbete | Småhus | Vad Skatteverket faktiskt skriver |
|---|---|---|
| Slipa golv | **ger rot** | "slipa och byta golv, tak och väggmaterial", under reparation och underhåll |
| Lägga golv | **ger rot** | samma rad; uppgradering ligger under ombyggnad med femårsregel |
| Tilläggsisolera vind | **ger rot** | "arbeta med tilläggsisolering", under bygga om, krav: bostaden äldre än fem år |
| Bygga innertrappa | **nämns inte** | bara entrétrappor är namngivna |
| Renovera innertrappa | **nämns inte** | bara entrétrappor är namngivna |

`slipa-parkettgolv.mdx` rad 239 och `tillaggsisolera-vind.mdx` rad 145 har alltså stöd för sina
påståenden, och vindsidans formulering "under posten om att bygga om ett småhus" är exakt rätt. Men
just den posten bär femårsregeln, och sidan säger det inte. Krav 5.6.5.

`renovera-trappa.mdx` påstår aldrig att Skatteverket listar trapparbete, vilket är korrekt hållning.
**Skriv inte in det i nästa utkast.**

## 4. Korsdubbletter

Sjugram över de sex nya artiklarna mot samtliga 34 publicerade artiklar, källförteckningar
bortfiltrerade.

**Mellan de sex nya sidorna: noll träffar.** Det är första gången en omgång är helt ren internt.

**Mot systersidorna, fyra träffar:**

1. **`tillaggsisolera-vind` rad 161 mot `lagga-klickgolv` rad 86:** "hur nära mättnad luften ligger
   vid den temperatur den råkar ha". Definitionen av relativ luftfuktighet står nu på sin **sjätte**
   sida. Förra omgången räknade till fem och krävde en tredje formulering; det blev en fjärde, och
   sedan återanvändes den. Krav 5.6.6 och 5.4.9.
2. `tillaggsisolera-vind` rad 78 mot `isolera-kallarvagg`: "när det skiljer en grad mellan inne och
   ute", U-värdesdefinitionen. Lätt, men skriv om den ena. Krav 5.6.7.
3. `tillaggsisolera-vind` rad 119 mot `isolera-krypgrund`: "elpriset är 2,40 kr per kilowattimme".
   Det är ett tal ur `antaganden.ts` och ska vara lika. **Inget krav.**
4. `slipa-parkettgolv` rad 251 mot tre sidor: tabellhuvudet "Vad du ser | Trolig orsak | Nästa
   steg". Det är husets egen diagnostabellrubrik och står så i stilguiden. **Inget krav.**

**Rotavdragsmeningen står på tre sidor, i tre olika formuleringar.** Det är rätt hanterat och ger
noll sjugram. Men de tre säger olika mycket, se krav 5.2.4.

**Den stora korsdubbletten ligger utanför artiklarna:** `bygga-trappa.mdx` mot
`rakna/trappa.astro`, 78 sjugram. Den redovisas i sin helhet i krav 5.1.1.

**Självdubbletter.** Två sidor upprepar sin egen brödtext i FAQ:n nästan ordagrant:
`golv-i-kallare` (tre av fyra svar) och `tillaggsisolera-vind` (svar 1). Krav 5.5.5 och 5.6.8.

## 5. Per sida

### 5.1 Bygga trappa, `src/content/guider/golv/bygga-trappa.mdx`

**Bedömning: retur, tretton krav.** Projektguide, mellan, 2 247 ord brödtext, sju H2, description
142 tecken, seoTitle 51. Huvudfrasen står i H1 och i `kortSvar`. Fyra av fem bättre än
ettan-punkter är levererade i sin helhet; den femte, punkt 2 om paragraferna, är levererad till
drygt hälften.

Sidan är omgångens starkaste faktaarbete och den enda svenska sidan som får gränsdragningen mellan
byggnad och tomt rätt. Räkningen på rad 150 till 157 är mönstergill: antagandena står som
punktlista enligt regel 3, talen är omräknade och stämmer, och slutsatsen "Hålet i bjälklaget blir
3,7 meter långt, räknat av oss" är märkt som vår. Rad 142 är omgångens nyttigaste mening: den säger
var ett tal som står på halva byggwebben kommer ifrån och varför det inte längre biter.

Krav, viktigast först:

1. **Bättre än ettan-punkt 2 är inte levererad.** Underlaget lovar "BFS 2024:9 2 kap. 5 till 13 §§
   och 25 §". Sidan citerar 6 §, 11 §, 12 § och 25 §. Fyra paragrafer saknas, och tre av dem bär
   något sidan faktiskt behöver:
   - **5 §** ska citeras i sin helhet i rad 126, före meningen om att föreskriften inte anger
     stegmått. Lydelsen: "Trappor och ramper ska vara utformade så att personer kan förflytta sig
     säkert." Poängen blir starkare när läsaren ser hur kort kravet är.
   - **7 §** ska in i tabellen rad 130 till 137 som en egen rad: "Plan mellan dörr och trappa | ska
     finnas | 2 kap. 7 §", med en mening under tabellen om att kravet gäller en nedåtgående trappa
     direkt innanför en dörr, vilket är vanligt i en källartrappa.
   - **8 §** ska få sitt paragrafnummer i rad 120, där innehållet redan står rätt.
   - **13 §** ska få sitt paragrafnummer i rad 165, där de tre punkterna redan står rätt.
   10 § kan utelämnas; den täcks av räckeskraven i 11 §.
2. **Rad 169. Barnkraven gäller inte bara den som har barn.** "Finns barn i huset är tre tal
   viktigare än alla andra" gör ett bindande krav till en familjefråga. Boverkets vägledning:
   "Till sådana utrymmen räknas bostadslägenheter, det vill säga bostäder i både flerbostadshus och
   småhus." Skriv: "Tre tal i 11 § gäller alla bostäder, och de gäller din trappa oavsett om det bor
   barn i huset i dag. Boverket räknar varje bostad som ett utrymme där yngre barn kan vistas."
   Kontrollera samtidigt att källraden rad 138 inte säger emot: byt "gäller utrymmen där yngre barn
   kan vistas" mot "gäller utrymmen där yngre barn kan vistas, och dit räknar Boverket varje
   bostad".
3. **Rad 142. "Råden är borta sedan i somras" åldras på tolv månader.** Sidan ska gå att läsa i mars
   2027. Verktyget skriver ut datumet. Skriv: "Råden gick att luta sig mot fram till den 1 juli
   2026." Samma sak i rad 124: byt "upphörde ett år senare" mot "upphörde den 1 juli 2026".
4. **Standarden Boverket hänvisar till har ett namn, och det ska stå.** Rad 126 säger "I stället
   hänvisar myndigheten till standarder och handböcker, vilket i praktiken är den plats trappformeln
   fyller". Standarden heter SIS/TS 59:2025, *Trappor, ramper, räcken och balkonger — Säkerhet vid
   användning*, och den gavs ut i maj 2025 uttryckligen för att fylla luckan efter BBR:s allmänna
   råd. Skriv: "I stället hänvisar myndigheten till standarder och handböcker. Den som skrevs för
   ändamålet heter SIS/TS 59:2025 och kom ut i maj 2025, just för att ersätta de allmänna råd som
   försvann. Den kostar 1 250 kr och vi har inte läst den, så vad som står i den kan vi inte säga.
   I praktiken är det trappformeln som fyller platsen."
5. **Ett gällande svenskt måttpar saknas, och det är sidans bästa oanvända kort.** AFS 2023:12 om
   utformning av arbetsplatser är den enda gällande svenska författningen med stegmått i klartext.
   Allmänt råd till 25 §: "minsta stegdjup normalt vara 0,25 meter och största steghöjd 0,18 meter
   ... ledstänger på en höjd av 0,9 meter, mätt vid stegnosen". Lägg ett stycke efter rad 142:
   "Måtten finns kvar på ett ställe i svensk rätt. Arbetsmiljöverkets föreskrift om utformning av
   arbetsplatser, AFS 2023:12, har ett allmänt råd om att stegdjupet normalt bör vara minst
   0,25 meter och steghöjden högst 0,18 meter. Den gäller arbetsplatser och inte din villa, så du
   kan inte hänvisa till den heller. Men den säger något om vad som räknas som en säker trappa av
   en myndighet som fortfarande sätter tal."
6. **Illustrationen `golv/trappa-vangstycke`, sidans huvudbild: bjälklaget är ritat i fel tjocklek.**
   Mätt i källfilens koordinater är stegdjupet 60 enheter och steghöjden 35, vilket mot etiketterna
   292 mm och 169 mm ger 4,87 mm per enhet. **Stegen är alltså måttriktiga på under en procent, och
   det ska sägas rakt ut.** Men det övre bjälklaget är ritat 35 enheter tjockt, alltså 170 mm,
   medan räkneexemplet på rad 153 förutsätter 300 mm. Just den tjockleken är ingången till hela
   hålberäkningen på rad 157. Rita bjälklaget 62 enheter tjockt.
7. **Samma bild: den gula markeringen går ut i högerkanten.** Rektangeln ligger på x 525 till 591 i
   en bild som är 600 bred, alltså nio enheter från kanten, och handskriften "169 mm" fyller den
   helt. På mobil i 343 px står talet klistrat mot bildkanten. Flytta hela etiketten och dess bygel
   cirka 60 enheter åt vänster.
8. **Samma bild: två av sidans fyra ord är omärkta.** Rad 71 lär ut fyra ord och säger att de följer
   med hela vägen ner: vangstycke, plansteg, sättsteg och stegnos. Bilden namnger de två första.
   Sättsteget och stegnosen finns ritade och behöver bara varsin etikett med pekare. Det gör
   huvudbilden till sidans ordlista, vilket är precis vad rad 71 lovar.
9. **Illustrationen `golv/trappa-utetrappa`: fallet är ritat på ett steg av tre.** Alt-texten rad
   179 säger "varje plansteg lutar svagt utåt". I bilden lutar bara det nedersta, där den röda
   linjen ligger; de två övre är ritade exakt vågrätt. Rad 185 säger att lutningen läggs när stegen
   monteras och inte går att ordna efteråt, alltså på alla steg. Rita alla tre planstegen med
   samma synliga lutning utåt. Det är samma fel som förra omgångens krav 2.3.7.
10. **Samma bild: etiketten står 180 enheter från det den pekar på.** "plint, ner till frostfritt
    djup" ligger nere till vänster medan plinten står långt till höger, utan pekare emellan. Flytta
    etiketten intill plinten, eller dra en pekare i blyerts-2 dit.
11. **Rad 159. "runt nio decimeter" har en källa, och sajten skriver inte decimeter.** TMF:s
    handledning för trätrappor: "Trappor inom enfamiljshus/lägenheter utförs vanligtvis med en fri
    bredd av 900 mm." Skriv: "Bredden är enklare. Trappan får den bredd du ger den, och Trä- och
    Möbelföretagens handledning för trätrappor anger 900 mm fri bredd som det vanliga i ett
    enfamiljshus. Det är också måttet på de trappor jag byggt. Spara inte där."
12. **Utetrappan säger ingenting om lov, och regelverket byttes för tio månader sedan.** Sedan
    1 december 2025 är fasadändring på ett en- eller tvåbostadshus inte längre lovpliktig, och
    9 kap. 19 § PBL sätter altangränserna till 1,8 meter inom 3,6 meter från byggnaden. Lägg en
    mening sist i rad 177: "Bygglov behöver du normalt inte för en entrétrappa. Lovplikten för
    fasadändringar på småhus togs bort den 1 december 2025, och inom detaljplan kan kommunen ändå
    ha egna bestämmelser."
13. **Frontmatter saknar `produkter: []`.** De fem andra sidorna i omgången har fältet. Schemat tål
    det, men affiliategranskningen läser fältet för att slå fast att sidan inte kan tända ett
    reklamband. Lägg till raden.

Utan retur, för kännedom: `kortSvar` har fem meningar, ett tal per mening och markering på
**200 mm** ✓, men talet är Svenskt Träs rekommendation och sidan säger själv längre ner att
myndigheten inte har något tal. Det är inte fel, eftersom Kort svar inte får bära källor, men läs om
meningen nästa varv med den spänningen i huvudet. Trappformelstabellen rad 83 till 89 är kontrollerad
rad för rad: alla fem summerar till 630 mm och alla fem lutningar stämmer på graden. Räkneexemplet
rad 111 till 116 stämmer mot `src/lib/kalkyl/trappa.ts` och mot verktygets svar vid standardvärdena,
exakt som testskriptet kräver. Rad 93, "det märks i låren på väg upp med tvättkorgen", och rad 208,
"Foten hittar en millimeter som ögat aldrig ser", är två grepp som fungerar och som inte återkommer.
Varningen rad 161 om anmälan och startbesked är rätt lagrum och rätt hållning. Inga produkter, inget
band, inga köpknappar.

### 5.2 Rotavdragsräknaren, `src/pages/rakna/rotavdrag.astro` och `src/lib/kalkyl/rotavdrag.ts`

**Bedömning: retur, nio krav.** Verktygssida, `reklam={false}`, description 158 tecken via
`BESKRIVNING`, titel 51 tecken. Resultatspalten 559 tecken. Sidan är den kommersiellt viktigaste i
båda sökordskörningarna (18 460 i månaden, vinnbarhet 5, Skatteverket rankar inte i topp fem) och
den är byggd därefter: varje rad i antagandetabellen länkar till den Skatteverkssida regeln står på,
och avsnittet om de tre taken finns inte på svenska någon annanstans. Årsrutinen i kommentaren vid
`ARET` är den bästa underhållsanteckningen i repot.

Krav, viktigast först:

1. **Räkneexemplet tillskrivs en källa där det inte står.** `rotavdrag.ts` rad 82 till 89 säger
   "Skatteverkets eget räkneexempel på fakturamodellen ... Samma sida som ROT_PROCENT". Talen
   10 000, 3 000 och 7 000 står inte på den sidan. Skatteverkets enda 10 000-exempel ligger på
   företagssidan och ger 3 750 kr, eftersom det räknar på arbetskostnad plus moms. Behåll
   konstanterna, de är rätt räknade, men skriv om kommentaren: "Vårt eget räkneexempel, och det
   testskriptet låser formeln mot: en arbetskostnad på 10 000 kr inklusive moms ger 3 000 kr i
   avdrag och 7 000 kr att betala. Skatteverkets eget exempel ligger på företagssidan och utgår från
   10 000 kr exklusive moms, alltså 12 500 kr med moms och 3 750 kr i avdrag." Rätta samtidigt
   `underlag-kalkyl-rotavdrag-2026-09-20.md` rad 30 till 32, 51 och 85, och kommentarerna i
   `scripts/test-kalkyl-rotavdrag.mjs`. **Lägg dessutom in Skatteverkets 3 750-exempel som en rad i
   antagandetabellen**, eftersom det förklarar momsfrågan, som är den vanligaste läsarfällan och den
   enda plats där vårt fält kan missförstås.
2. **Femårsregeln saknas, och sidan länkar till två arbeten där den biter.** Skatteverket: "Du kan
   inte få rotavdrag för ombyggnad eller tillbyggnad de första fem åren efter det år huset byggdes
   färdigt. Det är året som räknas ... Det år huset byggdes färdigt kallas för värdeår. Reparation
   och underhållsarbeten ger rätt till rotavdrag oavsett hur gammalt huset är." Lägg till en femte
   rad i `gorInteDetHar`: "Räkna inte med rotavdrag på ett nybyggt hus. Är huset yngre än fem år,
   räknat från värdeåret, ger ombyggnad och tillbyggnad inget avdrag alls. Reparation och underhåll
   gör det däremot, oavsett husets ålder, och gränsen mellan de två är det första du ska reda ut med
   hantverkaren." Lägg också en rad i antagandetabellen: storhet "Nybyggt hus", värde "Fem år",
   grund Källa, med länk till `SKATTEVERKET_ROTAVDRAGET`.
3. **Skattefältet modellerar fel skatt, och förenklingen står inte som Antagande.** Formuläret
   frågar efter "Din preliminära skatt i år" och `rotavdrag.ts` rad 353 drar av utnyttjat rot och
   rut från den. Skatteverkets regel är slutlig skatt efter att den minskats med jobbskatteavdraget,
   allmän pensionsavgift och underskott av kapital. Sidan rad 529 säger tvärtom "Verktyget har inga
   egna tal om rotavdraget". Lägg en rad i antagandetabellen: storhet "Vad skattefältet är", värde
   "En förenkling", grund **Antagande**, stöd "Skatteverkets gräns är den slutliga skatten efter
   jobbskatteavdrag, allmän pensionsavgift och underskott av kapital. Vi frågar efter den
   preliminära skatten, som är det tal du faktiskt har i handen, och svaret blir därför något
   generöst. Är du nära gränsen, räkna i Skatteverkets e-tjänst." Byt samtidigt rad 529 till "Alla
   tal om procentsats, tak och datum kommer från Skatteverket. Det som är vårt är standardvärdet på
   antalet ägare, gränserna på fälten och förenklingen i skattefältet."
4. **De tre artiklar som bäddar in verktyget säger olika mycket om det gemensamma taket.** Sidan rad
   441 kallar den raden "den som slarvas bort oftast". `slipa-parkettgolv.mdx` rad 239 har den rätt
   ("rot och rut tillsammans ryms inom 75 000 kr"). `renovera-trappa.mdx` rad 195 och
   `tillaggsisolera-vind.mdx` rad 145 nämner bara 50 000 kr. En läsare som redan tagit ut rutavdrag
   får alltså fel besked på två av tre sidor innan hon når räknaren. Se krav 5.3.7 och 5.6.5;
   verktyget ska inte ändras, men koordinatorn ska kontrollera att alla tre säger samma sak i samma
   commit.
5. **Rad 442. Påståendet om ettans fel saknar både avsändare och årtal.** "Ett av de svenska
   kostnadsexemplen vi läst anger rot-taket till just 75 000 kr, vilket är fel." Sökordsanalysen
   avsnitt 7.2 namnger den: ettan på "renovera kök kostnad". Och påståendet behöver ett årtal,
   eftersom rot-taket under beskattningsåret 2024 faktiskt var 75 000 kr som eget tak. Skriv: "Den
   sida som i dag rankar högst på 'renovera kök kostnad' anger rot-taket till just 75 000 kr. För
   2026 är det fel: den summan är rot plus rut tillsammans. Under 2024 fanns ett tillfälligt eget
   rottak på 75 000 kr, och det är förmodligen därifrån talet lever kvar."
6. **Dateringsregeln hänger på en nyhetssida när det finns en permanent.** `rotavdrag.ts` rad 419
   till 424 pekar på `SKATTEVERKET_HOJNINGEN`. Skatteverket säger det rakt ut på *Så fungerar
   rotavdraget*, under rubriken "Din betalning styr vilket år rotavdraget hamnar på": "Det är
   datumet som du betalar för arbetet som styr vilket beskattningsår rotavdraget hamnar på, inte
   fakturadatumet." En nyhet kan tas bort, en regelsida kan inte. Byt `url` på den regeln till
   `SKATTEVERKET_ROTAVDRAGET` och behåll nyhetslänken i antagandetabellens rad om den tillfälliga
   nivån.
7. **Rad 162 och `GOR_INTE_MASKINHYRA_I_ARBETET` säger två saker som inte har stöd.**
   - "inte när arbetet gjordes" är vår tolkning, och den är delvis fel: Skatteverket kräver att
     arbetet är utfört och att företaget ansökt om utbetalning senast 31 januari året efter
     betalningen. Skriv i stället "det är dagen du betalar som avgör, inte fakturans datum", och
     lägg till i antagandetabellens rad om datumet: "Arbetet ska dessutom vara utfört och företagets
     ansökan inne senast den 31 januari året efter att du betalade."
   - Maskinraden riskerar att läsas som att markjobb med maskin inte ger rot. Skatteverket skriver
     uttryckligen att grävmaskinistens arbetade tid **ger** avdrag. Lägg till sist i
     `GOR_INTE_MASKINHYRA_I_ARBETET`: "Maskinistens arbetade tid ger däremot avdrag, det är bara
     maskinen som inte gör det, så be om en faktura där de två står på var sin rad."
8. **Tre villkor för vem som får göra avdraget saknas.** Skatteverkets villkorslista har sex
   punkter; regel 7 i `rotavdrag.ts` rad 458 täcker tre. Lägg till i samma regel: att du ska ha
   fyllt 18 år senast vid årets slut, att du ska vara obegränsat skattskyldig i Sverige, och att en
   hyrd bostad inte ger rotavdrag alls. Hyresrättsfrågan är en vanlig sökning och den saknar svar i
   hela fältet. Rätta samtidigt `GOR_INTE_DELA_MED_ICKE_AGARE`, där kravet står som "att du äger
   den": Skatteverket kräver att ägarna **nyttjar** bostaden, inte bara äger den.
9. **FAQ rad 245 och 249 skriver tal med bokstäver.** "Trettio procent" och "Femtio procent" mot
   siffror överallt annars på sidan, i tabellen och i brödtexten. Ett skrivsätt per tal. Skriv
   "30 procent" och "50 procent".

Utan retur, för kännedom: `<Faktaruta variant="kortsvar">` har fem korta meningar med ett tal var
och markering bakom procentsatsen ✓. Resultatspalten är 559 tecken och bär bara svaret, med reglerna
och "Gör inte det här" som egna H2 under verktyget, exakt som SPEC 4.7 kräver. Den femte raden i
spalten, "Utan avdrag på fakturan ... alltså 33 procent av den", är den enda som bara upprepar en
indata och får gärna strykas nästa varv; det tar spalten till cirka 440 tecken, i nivå med
bygglov-altan. Antagandetabellen har tre kolumner och ligger i `<Tabellyta kolumner={3}>` ✓. Alla
sex Skatteverks-URL:er svarar 200. `begransatAv`-logiken är kontrollerad: med tomt skattefält blir
`kvarSkatt` oändlig och kan aldrig bli det bindande taket, vilket är rätt. Skissen `rakna/rotavdrag`
visar tre fakturarader medan formuläret har två fält, **och det är rätt**: sidans skarpaste
upplysning (rad 580) är att maskinhyran inne i arbetsposten gör räkningen för hög, och bilden lär ut
just det. Men formuläret säger aldrig var maskinhyran ska skrivas in. Hjälptexten under
arbetsfältet säger "be om en faktura där den står för sig"; lägg till i materialfältets hjälptext
"Maskinhyra och resekostnader hör hemma här." Det är en mening och det stänger frågan.

### 5.3 Renovera trappa, `src/content/guider/golv/renovera-trappa.mdx`

**Bedömning: retur, elva krav.** Projektguide, mellan, 2 295 ord brödtext, sju H2, description 148
tecken, seoTitle 46. Alla åtta bättre än ettan-punkter är levererade, en av dem till två
tredjedelar.

Rad 92 till 94 är **omgångens bästa journalistik**: sidan upptäcker att det är billigare att låta
firman göra hela jobbet än att köpa stegen själv, förklarar varför med rotavdraget, och säger sedan
rakt ut att det ändå inte är ett skäl att ringa firman. Hela topp fem på frasen säljer antingen
tjänsten eller stegen; vi räknar fram ett svar som går emot vårt eget upplägg och redovisar det.
Varningen rad 153, "Du kan inte stänga av en trappa", är sidans näst bästa idé och finns inte
någonstans i fältet.

Krav, viktigast först:

1. **Rad 126 och 177 citerar ett kapitel som inte är verifierat.** Sidan säger att "Vid en ändring
   gäller 3 kap. i stället" och att "3 kap. 2 § sätter golvet: byggnadens säkerhet får inte
   försämras av ändringen", och rad 177 upprepar det. Faktagranskningen har läst 2 kap. i BFS 2024:9
   i sin helhet men inte 3 kap., och anpassningsreglerna vid ändring ligger delvis i PBL 8 kap. 7 §.
   **Två paragrafhänvisningar på en sida vars främsta försprång är att citera rätt får inte stå
   okontrollerade.** Antingen öppnas BFS 2024:9 3 kap. och lydelsen bekräftas före publicering,
   eller så stryks paragrafnumren och meningen skrivs om utan dem.
2. **Rad 116. "barn under sex år" står inte i föreskriften.** 11 § säger "i utrymmen där yngre barn
   kan vistas", utan åldersgräns, och Boverkets vägledning räknar varje bostad dit. Skriv: "Samma
   kapitel ställer i 11 § fem krav till på räcket. De gäller utrymmen där yngre barn kan vistas, och
   dit räknar Boverket varje bostad, oavsett vem som bor där i dag."
3. **Rad 92 och 195 säger samma sak två gånger på samma sida.** Rad 92: "firman tillverkar stegen
   själv och drar rotavdraget på sin egen arbetskostnad innan fakturan skrivs. Som privatperson
   betalar du fullt pris för materialet, och där finns inget avdrag att hämta." Rad 195: "Firman
   drar av 30 procent av sin egen arbetskostnad innan fakturan skrivs. Du betalar fullt pris i
   butiken och har ingenting att dra av." Behåll rad 195, som står i kostnadsavsnittet där den hör
   hemma och bär procentsatsen. Korta rad 92 till: "Det beror inte på att butiken är dyr, utan på
   att firman får dra av på sitt eget arbete medan du betalar fullt pris för materialet. Varför det
   blir så står under rubriken om vad det kostar att låta någon annan göra det."
4. **Tabellen rad 84 till 88: enheten står i cellerna i stället för i kolumnrubriken.** Kolumnen
   heter "Ur bruk" och cellerna säger "5 till 7 dygn", "1 till 2 dygn", "1 dygn". Stilguiden kräver
   enheten i rubriken. Skriv rubriken "Ur bruk, dygn" och cellerna "5 till 7", "1 till 2" och "1".
   Det kortar dessutom tabellen med tolv tecken per cell på mobil.
5. **Bättre än ettan-punkt 3 är levererad till två tredjedelar.** Underlaget lovar torktiderna med
   "den siffra som betyder mest i en trappa: när färgen tål att gås på och när den är genomhärdad".
   Tabellen rad 143 till 147 har "Övermålningsbar" och "Full hårdhet", men inte "tål att gås på";
   det talet står bara i prosa på rad 149 och bara för Alcro. Byt kolumnen "Övermålningsbar, h" mot
   "Gå på, h" och flytta övermålningstiden till källraden, eller lägg till en fjärde kolumn. Fyra
   kolumner är tillåtet och cellerna är korta.
6. **Rad 78. "de yttersta tio centimetrarna" bryter sidans eget måttskrivsätt.** Sidan skriver
   millimeter överallt annars (2 mm, 12 mm, 200 mm, 250 mm, 294 mm). Skriv "de yttersta 100
   millimetrarna åt vardera hållet".
7. **Rad 195 nämner inte det gemensamma taket.** Sidan säger "Skatteverkets tak ligger på 50 000 kr
   i rotavdrag per person och år". Verktyget som bäddas in två rader ner kallar det gemensamma taket
   på 75 000 kr "den raden som slarvas bort oftast". Lägg till: "Rot och rut räknas dessutom ihop
   och ryms tillsammans i 75 000 kr per person och år, så har du haft städhjälp i år är det mindre
   kvar." Samma tillägg gäller `tillaggsisolera-vind.mdx`, se krav 5.6.5.
8. **Illustrationen `golv/renovera-trappa-steg`, sidans huvudbild: skalan stämmer nästan.** Mätt i
   källfilens koordinater är djupbygeln 328 enheter för 294 mm, alltså 0,896 mm per enhet. Det nya
   steget är ritat 14 enheter, alltså 12,5 mm mot etikettens 12 mm ✓ **rätt på en halv millimeter**.
   Det gamla steget är ritat 50 enheter, alltså 44,8 mm, medan bildtexten rad 16 säger 40 mm. Det är
   tolv procent fel på en bild vars bildtext uttryckligen säger "ritat i skala". Krymp det gamla
   steget till 45 enheter, eller skriv 45 mm i bildtexten.
9. **Samma bild: nyckeltalet ligger 250 enheter från det det mäter.** Måttbygeln för det nya stegets
   tjocklek sitter vid stegets vänstra ände; etiketten "nytt steg / 12 mm" med sin gula markering
   står nere i vänstra hörnet, förbunden med en lång pekare. Pekaren räddar läsbarheten, men på
   mobil i 343 px blir avståndet en halv bildbredd. Flytta etiketten upp intill bygeln; det finns
   tom yta rakt till vänster om den.
10. **Rad 177. "förmodligen" är hedging på det enda stället sidan gör ett rättsligt påstående.**
    "Juridiskt ryms ett enda kliv som avviker 12 mm förmodligen i det undantaget." Antingen vet vi
    eller så gör vi inte det. Skriv: "Om ett enda kliv som avviker 12 mm ryms i det undantaget har
    vi inte hittat något besked om, och ingen kommer att pröva din trappa. I mörkret på väg ner är
    det inte försumbart för foten."
11. **Två planerade länkar saknas.** Underlaget listar `/kok/slipa-bankskiva/` (slipning och kornval
    i trä) och `/inomhus/` (målningen inne) bland sidans utgående länkar. Ingen av dem finns. Lägg
    slipa-bankskiva sist i rad 130, efter meningen om korn 180 till 240: "Samma kornval och samma
    ordning gäller på en bänkskiva, och där står de utförligare i [slipa bänkskivan]
    (/kok/slipa-bankskiva/)." Lägg `/inomhus/` sist i rad 141, efter meningen om snickerifärg på
    räcket.

Utan retur, för kännedom: alla tre prislistorna är omräknade och stämmer: 695 × 14 = 9 730,
399 × 14 = 5 586, 249 × 14 = 3 486, summa 18 802 kr, vilket matchar `kortSvar`s "ungefär 19 000 kr".
Färgåtgången är kontrollerad: fjorton plansteg på 294 × 900 mm och fjorton sättsteg på 180 × 900 mm
i två strykningar blir 11,9 kvadratmeter, vilket vid 7 kvadratmeter per liter ger 1,7 liter, alltså
"knappt 2 liter" ✓. `kortSvar` har fem meningar och markering på **19 000 kr** ✓. Rad 110 och 149
är mönstergilla källrader: de säger vilken rad som kommer varifrån och vad som är vår uppskattning.
Rad 193 märker Offertas tal som förmedlarens egen statistik och inte som en mätning, vilket är rätt.
Rad 203, "du står i hallen klockan sju med en trappa full av vitt, vått trä ovanför dig", är ett bra
slut som inte sammanfattar. Ett verktygskort, `<Kalkylator namn="rotavdrag" />`, rätt form eftersom
kostnaden är sidans eget avsnitt. Inga produkter, inget band, inga köpknappar.

### 5.4 Lägga klickgolv, `src/content/guider/golv/lagga-klickgolv.mdx`

**Bedömning: retur, tio krav.** Projektguide, **enkel**, 2 736 ord brödtext och cirka 3 140 med
tabellerna, elva H2, description 154 tecken, seoTitle 39. Alla tre bättre än ettan-punkter plus den
frivilliga fjärde är levererade.

Sidan är omgångens mest kompletta faktaarbete. Nio mått, vart och ett med tillverkare och dokument
bakom, och på fyra av dem redovisas att tillverkarna säger olika och sedan tas ställning. Rad 169,
Bjelins mening om att tio millimeter mot en enda punkt räcker för att låsa hela golvet, är den
enskilt mest användbara meningen i omgången.

**Om längden.** Med tabellerna inräknat ligger sidan på cirka 3 140 ord, alltså över stilguidens
"sällan över 3 000". **Jag godkänner inte längden som den är, men den ska inte skäras med kniv.**
Jag har läst varje H2 med frågan vad som försvinner om det går bort, och svaret är varje gång något
läsaren behöver, utom på ett ställe: avsnittet "Laminat eller parkett" innehåller två stycken som
bara pekar tillbaka på tabeller längre upp. Krav 1 tar bort cirka 120 ord och elva H2 blir tio.
Resten får stå, eftersom nio mått med källa är hela sidans existensberättigande och ettan har noll.

Krav, viktigast först:

1. **Rad 262 och 264 är innehållsförteckning i prosa.** "Sammanhängande yta är den andra skillnaden.
   Laminat tål mindre av den, som tabellen längre upp visar." och "Elektrisk golvvärme är den
   tredje. Laminat har en begränsning där som parkett inte har." Båda säger bara att något står
   längre upp på sidan. Stryk dem. Skriv i stället en mening som binder ihop det som blir kvar:
   "Två av skillnaderna har redan stått i tabeller ovan, alltså den sammanhängande ytan och den
   elektriska golvvärmen, och båda faller ut till parkettens fördel."
2. **Samma avsnitt, och rad 211 till 219 i `slipa-parkettgolv`: samma maskinkadens på två sidor i
   samma omgång.** Här "Ytan är den första skillnaden ... är den andra ... är den tredje ... är den
   fjärde", där "det självklara, det näst självklara, det tredje, det fjärde, det femte". Fyra
   respektive fem stycken som alla öppnar med samma konstruktion är precis den jämna strömmen
   stilguiden stoppar. Efter krav 1 återstår två här; skriv om dem så att bara den första bär
   räkneordet. Se krav 5.5.3 för systersidan.
3. **Tre källor presenteras aldrig, på en sida märkt `niva: enkel`.** Regel 8 säger att källor
   presenteras med ett eller två ord första gången, och på enkla sidor alltid. Golvbranschen,
   Villaägarna och Pergo är presenterade ✓. **Tarkett (rad 74), Kährs (rad 76) och Bjelin (rad 84)
   möter läsaren som nakna namn i en tabell.** Skriv vid första omnämnandet i brödtexten
   "golvtillverkaren Tarkett", "parkettillverkaren Kährs" och "parkettillverkaren Bjelin".
4. **`kortSvar` saknar markering.** De fem andra sidorna i omgången har den. Markera **10 mm** i
   tredje meningen. Det är sidans nyckeltal, det är talet huvudbilden markerar, och det är den enda
   av de fem meningarna som bär ett ställningstagande.
5. **Rad 143 och `golv-i-kallare.mdx` rad 143 lämnar läsaren på olika ställen i samma fråga.** Här
   tar sidan ställning: "Min hållning är 10 mm. Pergos 5 mm är inte fel, men ..." På källarsidan
   står Pergos 5 mm ensamt, som om det vore svaret. Två sidor i samma pelare får inte ge olika
   besked om rörelsefogen. Ingen ändring här; källarsidan rättas, se krav 5.5.4.
6. **Rad 250 bäddar in hela kvadratmeterräknaren för en fråga sidan skickar vidare i nästa mening.**
   `<Kalkylator namn="kvadratmeter" />` följs på rad 252 av "Hela räkningen med sina antaganden
   finns också som ett eget verktyg på [räkna ut kvadratmeter och åtgång]". Det är den kompakta
   formens definition. Byt till `<Verktygskort kalkylator="kvadratmeter" />` och stryk den nu
   överflödiga hänvisningen i rad 252, eller behåll inbäddningen och stryk länken. Det ena eller det
   andra, inte båda. DESIGN 5.3 vill ha kortet när sidan nämner ett verktyg utan att äga det.
7. **Tabellen rad 185 till 190: kolumnen "Största yta" blandar två storheter.** Tarketts cell är
   "10 m på längden", alltså en längd; de tre andra är areor angivna som två mått. En cell bär ett
   värde, och en kolumn bär en storhet. Dela i två kolumner, "Största mått" och "Gäller", eller
   flytta Tarketts rad till texten under och låt tabellen bära de tre areorna. Källraden förklarar
   redan skillnaden och kan kortas i samma vända.
8. **Illustrationen `golv/klickgolv-forband`: den röda ringen säger ingenting.** En ellips i penna
   omsluter en kortändsskarv i den understa raden, utan anteckning och utan omnämnande i alt-texten
   rad 232. En penna som pekar utan att säga något är inte tillåtet; det är samma fel som förra
   omgångens krav 2.6.9. Ge ringen en anteckning i penna ("här hamnar skarven rakt under nästa" om
   den pekar på ett fel, eller "sista raden kapas på längden" om den pekar på mätningen), eller ta
   bort den och låt bilden ha noll saker i penna.
9. **Samma bild: etiketten "sista raden minst 40 mm" ligger utanför rummet och 600 enheter från sin
   bygel.** Måttbygeln sitter längst till höger vid den smala raden; texten står centrerad under
   hela bilden, nedanför väggens skraffering. Flytta texten intill bygeln.
10. **Rad 86 bär definitionen av relativ luftfuktighet som nu står på sex sidor.** "alltså ett mått
    på hur nära mättnad luften ligger vid den temperatur den råkar ha" står ordagrant även i
    `tillaggsisolera-vind.mdx` rad 161. På en `niva: enkel`-sida ska termen förklaras, så
    förklaringen ska vara kvar, men med egna ord. Skriv: "alltså hur mycket av den vattenånga luften
    orkar bära vid sin temperatur som faktiskt finns där". Vindsidan skriver om sin, se krav 5.6.6.

Utan retur, för kännedom: alla nio måtten är kontrollerade mot underlagets källutdrag och stämmer.
Rörelsefogstabellen rad 153 till 159 är omräknad mot formeln 1,5 mm per meter: 8 m ger 12 mm, 10 m
ger 15 mm och 12 m ger 18 mm ✓, och källraden säger rakt ut att formeln ger mindre tal på de två
första raderna och varför tabellen ändå säger 10 mm. Det är den bästa källraden i omgången. Rad 165,
sockeln som 1,5 gånger fogens bredd med exemplet 12 mm och 18 mm, är rätt räknat. Rad 181,
dilatationsfogen som summan av två rörelsefogar, är rätt och finns ingen annanstans på svenska.
Faktarutan rad 173 om tunga möbler och stenbänkskivor är sidans mest oväntade upplysning. Varningen
rad 210 om laminat på elslingor tar ställning och säger vad undantaget kräver. Rad 254, att
fotografera etiketten med satsnumret, är ett råd som bara någon som lagt golv kommer på. Illustrationerna
`klickgolv-rorelsefog` och `klickgolv-undergolv` är båda rena: ett nyckeltal med gul markering bakom
talet, en sak i penna, och måttet ritat mellan de två punkter det gäller. `klickgolv-undergolv` är
omgångens tydligaste skiss. Inga produkter, inget band, inga köpknappar.

### 5.5 Golv i källaren, `src/content/guider/golv/golv-i-kallare.mdx`

**Bedömning: retur, tio krav.** Problemguide, mellan, 2 013 ord brödtext plus 327 i fyra FAQ-svar,
nio H2, description 155 tecken, seoTitle 51. Alla fem bättre än ettan-punkter är levererade.

Sidan är omgångens bästa idé. Den vänder på frågan (mät först, välj sedan), och den ger sedan det
besked som avgör allt och som inte står någonstans i topp tio: att ett mätvärde i en platta gjuten
mot jord inte betyder något på sikt, eftersom tillverkarnas gränser gäller byggfukt och inte
markfukt. Rad 79 till 81 är den passage jag skulle visa någon som frågar vad sajten är till för.

Krav, viktigast först:

1. **Tabellen rad 70 till 75 tillskriver ett tal fel produkt.** Raden lyder "Klicklaminat | högst
   90 % | fuktspärr alltid", med källraden "Pergo och Tarkett (klickgolv)". Men rad 111 säger
   uttryckligen att talet är Tarketts **för sin klickvinyl**, ur läggningsanvisningen för Starfloor
   Click 55, och Pergo anger inget tal alls, bara att fuktspärr krävs på mineraliskt underlag. Det
   finns alltså ingen källa för 90 procent på klicklaminat. Skriv radrubriken "Klickgolv" och
   källraden "... Tarkett (talet gäller deras klickvinyl; Pergo anger inget tal för laminat utan
   kräver fuktspärr på allt mineraliskt underlag) ...". Det är omgångens enda rena faktafel i en
   artikel.
2. **Illustrationen `golv/kallargolv-fuktskala`, sidans huvudbild: axeln börjar på 80 procent utan
   att säga det.** Mätt i källfilens koordinater ligger 85 procent på x 202, 90 på x 314 och 100 på
   x 540, alltså **22,5 enheter per procentenhet, linjärt och korrekt** ✓. Alla fyra staplarna
   börjar på x 88, vilket motsvarar 79,9 procent. Den punkten är omärkt. Resultatet är att
   staplarnas **längder** ser ut att betyda något när bara deras högra ändar gör det. Sätt ett
   streck och "80 %" vid x 88, eller låt axeln börja synligt vid 80 och skriv talet.
3. **Samma bild: två olika tabellrader är ritade som samma stapel.** Tabellen säger att limmat
   trägolv ligger på 85 till 90 procent och limmad vinyl på högst 85. I bilden slutar båda på
   x 204, alltså 85 procent. Bildtexten säger dessutom "Tre av dem tar slut senast vid 90 procent",
   vilket bilden inte visar. Rita limmat trä med heldragen stapel till 85 och en tunnare, streckad
   fortsättning till 90, och lägg till i bildtexten vad den tunna delen betyder.
4. **Rad 143 ger ett annat besked om rörelsefogen än systersidan.** Här står Pergos 5 mm ensamt.
   `lagga-klickgolv.mdx` rad 149 tar ställning för 10 mm och förklarar varför Pergos tal förutsätter
   något läsaren inte vet. En läsare som kommer hit och lägger 5 mm i en källare får fel råd från
   den sida som äger fuktfrågan. Skriv: "Den första är rörelsefogen. Pergo anger 5 mm i ett
   normalstort rum, men två av de fyra tillverkare vi läst sätter minst 10 mm, och i en källare
   svänger luftfuktigheten mer än i ett rum ovan mark. Lägg 10 mm. Hela jämförelsen står i [lägga
   klickgolv](/golv/lagga-klickgolv/). Sockeln täcker springan och skruvas i väggen, aldrig i
   golvet."
5. **Tre av fyra FAQ-svar upprepar brödtexten nästan ordagrant.** Svar 2 återger rad 109 och 111 med
   samma ord ("en fuktspärr ska användas när ... läggs på ett mineraliskt underlag, oavsett hur
   gammalt underlaget är" och "värdet inte gäller fukttillskott vid golv på mark"). Svar 3 återger
   rad 48 och 50 ordagrant ("ytan torkar ikapp rumsluften medan det är fuktigare längre in" och
   "borras hålet till 0,4 gånger plattans tjocklek"). Svar 1 återger `kortSvar`. En FAQ är till för
   den som kommer från en sökruta och den får säga samma sak, men inte med samma meningar, eftersom
   båda versionerna ligger i samma HTML. Skriv om de tre svaren i egna ord. Svar 4, om att mäta
   fukten ändå när du lägger klinker, är det enda som bär något eget, och det är också det bästa.
6. **`kortSvar` saknar markering.** Markera **100 procent** i andra meningen, eller det tal du
   väljer. Det är samma tal huvudbilden markerar och sidans hela poäng: en platta mot jord hamnar
   där, och då finns inget mätvärde att luta sig mot.
7. **Sidan har en enda illustration på nio H2 och 2 340 ord.** Huvudbilden bär golvvalet. Det som
   saknas bild är det sidan öppnar med och som ingen konkurrent har: mätningen. Beställ en andra
   skiss, `golv/kallargolv-borrhal`: snitt genom en betongplatta med ett borrhål, måttbygeln från
   ytan ner till 0,4 gånger plattans tjocklek som nyckeltal, den torra ytzonen antydd överst, och
   i penna anteckningen att hålet aldrig får återanvändas. Lägg den efter rad 52. Det är samma
   invändning som förra omgångens krav 2.3.9.
8. **Rad 117 och 121: två bedömningar är märkta som våra, en tredje är det inte.** Rad 117 säger
   "Den bedömningen är vår och inte tillverkarens" ✓ och rad 103 säger "Därför limmar jag ingen
   matta i en källare utan två besked på papper" ✓. Men rad 89, "Ligger din platta direkt mot jord
   ... lägg klinker", är sidans starkaste rekommendation och den står utan avsändare, mellan två
   stycken som refererar Byggkeramikrådet. Skriv "Mitt råd är enkelt: ligger din platta direkt mot
   jord ... Det är vårt val och inte Byggkeramikrådets, som inte rangordnar golv."
9. **Rad 151. Fyra meningsfragment i rad utan predikat.** "Vitt pulver på betongen, alltså salt som
   blivit kvar när vatten avdunstat ur plattan. En fuktrand längs ytterväggen. En gammal matta som
   luktar när du river den. Ett hörn som blir mörkt varje höst." Greppet fungerar en gång; fyra i
   rad är strukturen och inte kryddan. Gör de två mittersta till hela meningar.
10. **description är 155 tecken.** Förra omgångens ribba var under 155, och sidorna låg på 137 till
    154. Korta med två tecken. Samma sak på `slipa-parkettgolv.mdx`, se krav 5.7.9.

Utan retur, för kännedom: sjugramssökningen mot samtliga 34 publicerade artiklar ger noll träffar i
brödtexten. Gränsdragningen mot `/grund/inreda-kallare/` är den snyggaste i omgången: rad 64 säger
i en mening var sidan slutar och skickar vidare tre gånger, och rad 129 delar upp golvvärmefrågan i
två och säger vilken halva som hör hit. Rad 52, om att mätdjupet förutsätter ett diffusionstätt
skikt, är den enda meningen i hela topp tio som avgör golvvalet i en gammal källare. Rad 79 till 81,
skillnaden mellan byggfukt och markfukt, är det som gör sidan bättre än ettan, och den är rätt
placerad direkt under tabellen. Rad 91, att en klinkeryta som ska bilas upp är den dyraste rivningen
i källaren, är en ärlig nackdel på sidans egen rekommendation. Rad 147, att sockellisten är en del av
ett system och inte en list, är rätt slutsats av tillverkarspråket ovanför. Rad 155, "Allt som skulle
ha gjorts före det ligger under det", är omgångens bästa slutmening. Ett verktygskort,
`<Verktygskort kalkylator="kallare" />`, rätt form eftersom sidan inte äger diagnosen. Inga
produkter, inget band, inga köpknappar.

### 5.6 Tilläggsisolera vinden, `src/content/guider/el/tillaggsisolera-vind.mdx`

**Bedömning: retur, tolv krav.** Projektguide, mellan, 2 778 ord brödtext plus 338 i fem FAQ-svar,
åtta H2, description 151 tecken, seoTitle 56. Alla sju bättre än ettan-punkter är levererade.

Sidan gör det sökordsanalysen bad om och lite till. Den tar forumtrådens egen offert, räknar om
appens tre till fyra år till nio, och säger sedan att det verkliga talet är längre än så eftersom
tråden hade dubbelt så tjock gammal isolering som raden förutsätter. **Att vända en etta mot sig
själv med dess egna tal är det bästa en sida kan göra**, och ingen annan på frasen gör det. Rad 141,
att maskinblåst ull ger samma U-värde av betydligt mindre material, är en upplysning som ändrar
läsarens beslut och som inte står hos vare sig Boverket, Rockwool eller forumet.

**Om längden.** 3 116 ord med FAQ:n. Jag godkänner den, med skäl: fem av de åtta H2 finns inte i
någon form hos ettan, tvåan eller trean, och tolvpunktslistan på rad 209 till 222 är sidans mest
användbara avsnitt trots att den är lång. Krav 1 och 8 tar bort cirka 90 ord utan att något
försvinner.

Krav, viktigast först:

1. **Tre tal krockar med varandra på samma sida.** Rad 112 säger "drygt 2 300 kilowattimmar", rad
   234 säger "ungefär 2 300 kr", rad 121 säger "kring 4 400 kr" och rad 131 säger "omkring
   4 400 kr" om två helt olika saker. Alla fyra talen är rätt räknade, men en läsare som skummar
   möter 2 300 två gånger med olika storhet och 4 400 två gånger med olika underlag. Rad 234 är den
   som ska ändras, eftersom den ligger sist och kan formuleras om utan förlust: "På 100
   kvadratmeter blir det 950 kilowattimmar om året, alltså drygt 2 200 kr." Och rad 131 skriver ut
   vad talet gäller: "Det motsvarar omkring 4 400 kr på de 40 kvadratmetrarna."
2. **`description` lovar ett annat tal än sidan svarar med.** description säger "Vad 300 millimeter
   lösull sparar", H2 rad 76 säger "Vad 400 millimeter på vindsbjälklaget sparar", och `kortSvar`
   säger "Sikta på 400 millimeter totalt". Båda talen är sanna, men den som klickar från Google har
   fått löftet 300 och möter 400 i första rubriken. Skriv description: "Vad 400 millimeter på
   vindsbjälklaget sparar i kilowattimmar och kronor, vad det kostar per kvadratmeter, och varför
   vinden blir fuktigare när jobbet är klart." (149 tecken.)
3. **Tabellen rad 82 till 89 har enheten i källraden och fyra olika decimalskrivsätt.** Stilguiden
   kräver enheten i kolumnrubriken. Skriv rubriken "U-värde, W/m²K". Och cellerna skriver 0,5, 0,5,
   0,45, 0,3, 0,20 och 0,13, alltså en, två, en, två decimaler om vartannat. Skriv alla med två:
   0,50, 0,50, 0,45, 0,30, 0,20, 0,13. Första raden heter dessutom bara "1920" medan de andra är
   spann; skriv "till 1920".
4. **Tabellen rad 97 till 102: två kolumnrubriker saknar storhet och en saknar tid.** "U före" och
   "U efter" säger inte vad de mäts i, och "Spara, kWh/kvm" saknar att det gäller per år. Skriv
   "U före, W/m²K", "U efter, W/m²K" och "Spara, kWh/kvm och år". Källraden kan då kortas.
5. **Rotavdragsavsnittet saknar två saker som gäller just det här jobbet.** Rad 145 säger rätt sak
   om att tilläggsisolering står med på Skatteverkets lista under posten om att bygga om ett småhus.
   **Men just den posten bär ett villkor: "Bostaden ska vara äldre än fem år."** Och sidan nämner
   inte det gemensamma taket på 75 000 kr, som verktyget två rader ner kallar den rad som slarvas
   bort oftast. Skriv: "Anlitar du någon gäller rotavdraget. Tilläggsisolering står med bland
   rotarbetena på Skatteverkets lista, under posten om att bygga om ett småhus, och den posten har
   ett villkor: huset ska vara äldre än fem år räknat från värdeåret. Regeln är att företaget drar
   30 procent av arbetskostnaden direkt på fakturan, och att en person får ut högst 50 000 kr på ett
   år. Rot och rut räknas dessutom ihop och ryms tillsammans i 75 000 kr. Materialet ger inget
   avdrag alls, vilket på just det här jobbet betyder mer än det låter, eftersom ullen är en stor
   del av notan."
6. **Rad 161 bär definitionen av relativ luftfuktighet som nu står på sex sidor.** "alltså hur nära
   mättnad luften ligger vid den temperatur den råkar ha" står ordagrant i `lagga-klickgolv.mdx`
   rad 86. Sidan behöver inte definitionen alls på den platsen: meningen handlar om varför
   fuktigheten stiger när luften kyls, och det sägs redan i ledet före. Skriv: "Kall luft bär mindre
   vattenånga än varm, så samma mängd vatten ger en högre relativ fuktighet när temperaturen
   sjunker." Klickgolvssidan behåller sin förklaring med egna ord, se krav 5.4.10.
7. **Rad 78 bär U-värdesdefinitionen från `isolera-kallarvagg`.** "hur många watt som passerar varje
   kvadratmeter när det skiljer en grad mellan inne och ute" ekar systersidan. Skriv: "Det talet
   säger hur mycket värme som läcker ut genom en kvadratmeter av bjälklaget för varje grads
   temperaturskillnad."
8. **FAQ-svar 1 upprepar rad 112 nästan ordagrant.** "Ta en vind på 100 kvadratmeter som har 100
   millimeter gammal mineralull. Fylls den på med lösull sparar den drygt 2 300 kilowattimmar om
   året, alltså ungefär 5 500 kronor" mot brödtextens "Ta en vind på 100 kvadratmeter med 100
   millimeter gammal mineralull. Med 300 millimeter lösull ovanpå blir det drygt 2 300
   kilowattimmar mindre om året. Det är ungefär 5 500 kr." Skriv om svaret så att det bär
   återbetalningstiden, som är frågan, och inte räkneexemplet, som redan står på sidan.
9. **Rad 141. "två tredjedelar" stämmer inte med talen i samma stycke.** 7,5 kg mot 12,6 kg är 0,60,
   alltså tre femtedelar, inte två tredjedelar. Skriv "Maskinen gör samma U-värde av sextio procent
   så mycket ull."
10. **Den planerade länken till `/rakna/elkostnad/` saknas.** Underlaget listar den under "Interna
    länkar ut", vid elpriset. Lägg den i rad 119, sist i punkten om elpriset, eller som en mening
    efter punktlistan: "Vill du räkna om besparingen till ditt eget elpris finns [elkostnadsräknaren]
    (/rakna/elkostnad/)."
11. **Illustrationen `el/vind-bjalklag`, sidans huvudbild: lagren är ritade i fel förhållande.**
    Mätt i källfilens koordinater spänner måttbygeln 100 enheter och är märkt 400 mm, alltså 4 mm
    per enhet. Den nya lösullen är ritad 64 enheter (256 mm) och den gamla ullen 36 enheter
    (144 mm). Artikeln räknar genomgående på 300 mm ny ovanpå 100 mm gammal, och tabellraden i
    exemplet är "mineralull 100". Flytta gränsen mellan lagren från y 246 till y 257, så att den nya
    ullen blir 75 enheter och den gamla 25. Då visar bilden exakt det räkneexempel sidan bygger på.
12. **Illustrationen `el/vind-takfot` har inget nyckeltal, och har två att välja på.** Rad 193 ger
    två mått som hör precis till den här bilden: spalten vid takfoten på cirka 50 millimeter och
    vindavledaren som ska sluta cirka 150 millimeter över färdig isoleringsnivå. Bilden visar
    spalten men mäter den inte. Rita en måttbygel över spalten i den vänstra panelen med "50 mm" i
    handskrift och gul markering bakom talet. Samma bild: alt-texten rad 195 räknar upp
    "ytterväggen", som inte går att urskilja i någon av panelerna. Rita väggen eller stryk ordet ur
    alt-texten.

Utan retur, för kännedom: **alla fyra raderna i Rockwools besparingstabell är omräknade och stämmer
på hundradelen** mot 89 280 gradtimmar: 45,71, 23,03, 14,46 och 9,46. Det är den bästa
källgranskningen i omgången, och rad 110 redovisar hur den gjordes. Materialräkningen rad 135 till
139 är kontrollerad: 19,95 × 240 = 4 788 kr, 240 / 42 = 5,71 kubikmeter, utlagt i 300 mm ger
19 kvadratmeter och 252 kr per kvadratmeter ✓. Återbetalningstiderna är omräknade: nio år för
forumets offert, tre till nio år för exemplet på 100 kvadratmeter, sju till tjugotvå år vid 200 mm
befintlig ull ✓. Regionjusteringen (4 416 och 7 452 kr) stämmer. Rad 123, att energianvändningen
inte nödvändigtvis minskar om du inte sänker värmesystemet efteråt, är den upplysning som gör mest
för läsarens plånbok och den står ingenstans i fältet. Rad 197, att forskarna går emot
tillverkarens ventilationsråd, och rad 199, där sidan tar ställning mellan dem och säger vilket, är
precis vad stilguiden vill ha. Rad 185, att gammalt sågspån får ligga kvar eftersom det är
relativt lufttätt, är ett råd som går emot allt annat på internet och har källa. Faktarutan rad 201
om gångbryggan och frågan om vad du förvarar på vinden är omgångens mest omtänksamma avsnitt.
Ett verktygskort, `<Kalkylator namn="rotavdrag" />`, rätt form. Inga produkter, inget band, inga
köpknappar.

### 5.7 Trappräknaren, `src/pages/rakna/trappa.astro` och `src/lib/kalkyl/trappa.ts`

**Bedömning: retur, tio krav.** Verktygssida, `reklam={false}`, titel 42 tecken, resultatspalt 484
tecken, alltså den näst kortaste på sajten.

**Utvecklarens rättelse ska stå i protokollet.** Uppdraget angav BFS 2024:8. Det är fel författning;
ordet trapp förekommer inte en enda gång i den. Utvecklaren hämtade hela BFS 2024:9 som PDF, läste
den, upptäckte att trappor ligger där och att föreskriften inte anger några stegmått alls, och
byggde verktyget mot rätt regel. **Faktagranskningen bekräftar varje paragrafnummer i
antagandetabellen, inklusive de fyra BBR-referenserna.** Det är den bästa enskilda insatsen i
omgången.

Formelmodulen är repots renaste: varje konstant står namngiven överst med källa eller ANTAGANDE,
avrundningsregeln är motiverad i klartext, och kommentaren på rad 450 till 457 förklarar varför
verktyget hellre svarar med en redovisad avvikelse än vägrar svara. Standardvärdena är guidens
räkneexempel, så de två sidorna kan inte glida isär utan att testskriptet säger till.

Krav, viktigast först:

1. **Korsdubbletten mot guiden är omgångens tyngsta enskilda fel: 78 sjugram och sju hela meningar
   ordagrant.** Avsnittet "Trappformeln, och varför Boverket inte har något att säga om måtten"
   (rad 476 till 513) säger samma sak med samma ord som `bygga-trappa.mdx` rad 79, 128, 142, 165 och
   169. De ordagranna:
   - "En trappa som bryter mot formeln känns fel i benen långt innan du kan säga varför."
   - "Talet du möter överallt när du söker, alltså stegdjup på minst ... millimeter mätt i
     gånglinjen, kommer inte därifrån. Det är ett allmänt råd ur de gamla byggreglerna, och
     gånglinjen är linjen där foten faktiskt går, mitt i trappan när den är rak."
   - "samma råd sa att en trappa bör ha fler än två steg"
   - "De är fortfarande bra mått, de är bara inte längre något du kan ..."
   - "Det som däremot står i siffror är säkerheten runt trappan."
   - "på en snygg öppen trappa där räcket svävar en bit ovanför stegen"
   - "ledstänger på båda sidor men godtar en enda när den andra är obehövlig"

   **Guiden äger frågan och behåller sin text.** Sökordsanalysens startlista säger det rakt ut:
   verktyget "bär ingen trafik själv men äger frasen" och "bor i" guiden, som är 890 i månaden mot
   verktygets 50. Två sidor med samma stycken konkurrerar dessutom med varandra på samma fras.
   Korta verktygets avsnitt till två stycken med egna ord, ungefär: att myndigheten inte har några
   stegmått och vad 5 § säger i stället; och att den här räknaren därför mäter mot branschens tal
   och mot två borttagna allmänna råd, och att den säger vilket som är vilket i varje svar. Allt
   annat, inklusive gånglinjen, räcket och den fria höjden, ligger redan i antagandetabellen och i
   "Därför blev svaret så", och guiden bär resten. Byt rubriken till "Vad räknaren mäter mot, och
   varför det inte är Boverkets mått".
2. **Antagandetabellen rad 193 säger "Föreskriften anger inga mått" tre rader ovanför tre rader som
   citerar mått ur samma föreskrift.** Raderna "Öppning mellan plansteg", "Fri höjd i trappan" och
   "Räcke till stegnos" kommer alla ur BFS 2024:9. Skriv "Föreskriften anger inga stegmått".
3. **`GOR_INTE_OLIKA_HOGA_STEG` utelämnar småhusundantaget, och verktygets läsare bygger en
   villatrappa.** Rådet slutar "Går det inte att undvika kräver Boverket att steget markeras
   tydligt." 2 kap. 8 § andra stycket: "Kraven på markering i första stycket gäller dock inte för
   en- och tvåbostadshus, i bostadslägenheter i flerbostadshus eller om det annars är obehövligt."
   Guiden rad 120 har det rätt; verktyget säger emot den. Skriv: "Går det inte att undvika kräver
   Boverket att steget markeras tydligt, utom i småhus och bostadslägenheter, som är undantagna.
   Undantaget gör inte steget mindre farligt."
4. **Rad 279. Enda mekaniska stilträffen i omgången.** FAQ-frågan "Hur räknar man ut stegdjupet?"
   Skriv "Hur räknar du ut stegdjupet?"
5. **Standarden Boverket hänvisar till har ett namn.** Se krav 5.1.4 för resonemanget. Lägg en rad i
   antagandetabellen: storhet "Standarden Boverket pekar på", värde "Inte läst", grund
   **Antagande**, stöd "Boverkets vägledning hänvisar vidare till standarder. Den som skrevs för
   ändamålet är SIS/TS 59:2025 om trappor, ramper, räcken och balkonger, utgiven i maj 2025 för att
   ersätta de allmänna råd som försvann. Den ligger bakom betalvägg och vi har inte läst den, så
   verktyget mäter inte mot den."
6. **Rad 221. "borta sedan i somras" i en antagandetabell som ska stå i flera år.** Samma fel som
   guidens rad 142, och här värre, eftersom tabellen är sidans varaktiga dokumentation. Skriv "Ett
   råd, inte ett krav, och borttaget den 1 juli 2026". Konstanten `GAMLA_RADEN_TILL` finns redan och
   bär exakt det datumet; använd den.
7. **De borttagna råden: Källa eller Antagande?** Uppdraget ber om en bedömning. **Min bedömning:
   raderna ska stå kvar som Källa, och en ny rad märkt Antagande ska förklara varför vi mäter mot
   dem.** Skälet: kolumnen svarar på frågan om värdet kommer från en källa eller är vårt eget val,
   och 0,25 m, 0,30 m och 1,3 m står ordagrant i BBR. Det är sant och kontrollerbart, och fotnoten
   säger redan att de är råd som inte längre gäller. Men **beslutet att låta räknaren säga "Måttet
   håller inte" mot ett upphävt allmänt råd är vårt**, och det står ingenstans. Lägg till en rad:
   storhet "Att vi mäter mot de gamla råden", värde "Vårt val", grund **Antagande**, stöd
   "Föreskriften har inga stegmått, och utan något att mäta mot kan verktyget inte säga något alls
   om stegdjupet. Vi mäter därför mot de allmänna råd som gällde till den 1 juli 2026 och säger i
   varje svar att de är råd och inte krav. Alternativet vore att inte pröva stegdjupet alls, och det
   hjälper ingen som bygger en trappa."
8. **Illustrationen `rakna/trappa`: alt-texten säger att fel sak är gulmarkerad.** Alt-texten rad 522
   avslutas "över trappan står den gulmarkerade formeln två gånger steghöjd plus stegdjup lika med
   630 mm". Mätt i källfilen ligger den gula rektangeln på x 276 till 356 och y 119 till 147, alltså
   bakom handskriften "169 mm", medan formeltexten ligger på y 31 till 53 helt utan markering. Alt-
   texten beskriver en bild som inte finns. Skriv om den sista satsen: "över trappan står formeln
   två gånger steghöjd plus stegdjup lika med 630 mm, och nyckeltalet steghöjd 169 mm är
   gulmarkerat." **Bilden i övrigt är måttriktig:** bygeln för steghöjden är 36 enheter och bygeln
   för stegdjupet 62, vilket ger 0,581 mot etiketternas 0,579. Ingen ändring behövs i ritningen.
9. **Rad 559. Ett påstående om konkurrenterna står utan avsändare och utan datum.** "den enda
   svenska trappräknaren i fältet är från 2012, och varken den eller artiklarna som rankar nämner
   Boverket alls." Påståendet är riktigt och kommer ur `docs/SOKORDSANALYS.md` avsnitt 7.2, men på
   sidan står det som något vi bara vet. Skriv: "Vi läste igenom träfflistan på trappa steghöjd i
   september 2026. Den enda svenska trappräknaren där är en artikel från 2012 med en app uppdaterad
   2020, och varken den eller någon av artiklarna omkring nämner Boverket."
10. **Rad 615. "Allt tre står i guiden."** Skriv "Alla tre står i guiden".

Utan retur, för kännedom: räkningen är kontrollerad mot standardvärdena och ger 16 steg, 168,8 mm
steghöjd, 292 mm stegdjup, 4,4 m i plan, 30,0 graders lutning och formelsumman 629,5 mm, alltså
exakt guidens räkneexempel ✓. Avrundningen nedåt på stegdjupet och den uteblivna avrundningen på
steghöjden är båda motiverade i koden och i "Så räknar vi", och motiveringen är riktig: stegen måste
summera till våningshöjden. `MINST_ANTAL_STEG_UTE = 3` med kommentaren "Fler än två är alltså tre"
är en korrekt läsning av det gamla rådet. Skillnaden mellan 250 mm inne och 300 mm ute, som rad 560
lyfter fram, är verktygets nyttigaste enskilda funktion och finns inte i något annat svenskt
verktyg. `<Faktaruta variant="kortsvar">` har fem korta meningar ✓. Läs vidare-listan länkar till
guiden, och rad 508 gör det dessutom som en synlig mening i brödtexten, så uppdragets krav på en
sådan länk är redan uppfyllt före den här granskningen. Antagandetabellen ligger i
`<Tabellyta kolumner={3}>` ✓. Inga produkter, inget band, inga köpknappar.

### 5.8 Slipa parkettgolv, `src/content/guider/golv/slipa-parkettgolv.mdx`

**Bedömning: retur, nio krav.** Projektguide, mellan, 2 701 ord brödtext, nio H2, description 155
tecken, seoTitle 44. Alla tre bättre än ettan-punkter är levererade, plus de fyra luckor
sökordsanalysen räknar upp (kornnummer, slitskiktets tjocklek, torktider, hyrpriser).

Sidan gör det svåraste en affiliatesajt kan göra: den läser ettans avrådan, prövar den mot
tillverkarnas egna uppgifter, redovisar att båda parter har intressen i frågan och tar sedan
ställning med ett eget villkor (rad 221 till 223). Rad 112, där två sekundärkällor spretar dubbelt
och sidan säger rakt ut att ingen tillverkare anger ett tal och att vi därför räknar med den övre
änden, är den ärligaste passagen i omgången.

Krav, viktigast först:

1. **Rad 211 till 219: fem stycken i rad med samma konstruktion.** "Fanergolvet är det självklara.
   Fiskbensparketten är det näst självklara. Stora ytor är det tredje. Dammet är det fjärde. Det
   femte är avrådan jag inte håller med om." Det är en punktlista utskriven som prosa, och det är
   samma kadens som `lagga-klickgolv.mdx` rad 260 till 266 i samma omgång. Behåll räkneordet i den
   första och den sista, som ramar in avsnittet, och skriv om de tre i mitten så att de börjar i
   sak: "Fiskbensparketten är nästan lika enkel att avgöra." / "Stora ytor tippar kalkylen åt andra
   hållet." / "Dammet är det argument jag tar på störst allvar."
2. **Tabellen rad 183 till 189 skriver samma tid på två sätt.** Raden "Mattor på golvet" säger "en
   vecka" och raden "Genomhärdat" säger "7 dagar", i samma kolumn. Ett skrivsätt per storhet. Skriv
   "7 dagar" på båda, eller "en vecka" på båda.
3. **Diagnostabellens källrad saknar ordet "Källa:".** Rad 260 börjar "Diagnoserna är vår
   erfarenhet." Alla andra tabeller i omgången inleder källraden med "Källa:", och förra omgångens
   krav 2.5.8 slog fast att det ska vara konsekvent. Skriv "Källa: diagnoserna är vår erfarenhet,
   och nästa steg följer Bonas anvisning om mellanslipning i korn 150."
4. **Rad 239 säger 75 000 kr utan att säga vad taket gör med just den här läsaren.** Formuleringen
   "rot och rut tillsammans ryms inom 75 000 kr" är korrekt och den enda av de tre artiklarna som
   har med det gemensamma taket, vilket ska noteras. Men meningen står som en upplysning bland
   andra. Lägg till en följdsats som gör den användbar: "... och rot och rut tillsammans ryms inom
   75 000 kr per person och år, så har hushållet haft städhjälp eller flytthjälp i år är det mindre
   kvar till golvet än rot-taket antyder."
5. **Tabellen rad 229 till 235 blandar två prisbaser i en sorterad kolumn.** Fyra rader är priser
   före rotavdrag och en, "Efter rotavdrag, Stockholm", är efter. Stilguiden säger att sorteringen
   aldrig bryts av en rad som egentligen hör hemma någon annanstans. Källraden förklarar det, vilket
   räddar sidan, men raden gör kolumnen omöjlig att jämföra rakt av. Flytta rotavdragsraden till en
   mening under tabellen, eller lägg till "före rot" respektive "efter rot" i första kolumnens
   celler.
6. **Rad 199. "ungefär sju liter lack" ligger i den dyra änden utan att det sägs.** Bona anger 8 till
   10 kvadratmeter per liter, så 60 kvadratmeter blir 6 till 7,5 liter. Sidan tar 7,5 och avrundar
   nedåt. Det är rätt håll att fela åt, men skriv ut det: "Det blir 60 kvadratmeter, alltså mellan
   sex och sju och en halv liter lack beroende på var i Bonas spann golvet hamnar. Köp sju."
7. **Rad 102 och 213 säger samma sak om fanergolvet med nästan samma ord.** "En golvslip tar mer än
   en millimeter på första passet, och då sitter du med spånskiva i vardagsrummet" och "Under
   2,5 mm slitskikt finns inget att slipa, och ingen hantverkare i landet kan ändra på det." Båda är
   bra meningar, men de gör samma jobb och den andra står i ett avsnitt om när du ska lämna över.
   Korta rad 213 till en rad som pekar tillbaka: "Fanergolvet avgjordes redan med skjutmåttet. Det
   finns ingenting att slipa, och det gäller lika mycket för en hantverkare som för dig."
8. **Illustrationen `golv/slipa-passen`: grovslipningens två pass är ritade i samma tunna grå ton
   som brädorna.** Bilden visar rummets brädor som vågräta linjer i blyerts-2 och lägger
   grovslipningens diagonaler i nästan samma vikt, så det tar en stund att se vilka linjer som är
   golvet och vilka som är maskinens väg. Rita de två diagonalerna i blyerts 2 px, alltså samma
   vikt som allt annat strukturellt, och låt brädlinjerna ligga kvar tunna. Alt-texten rad 161
   säger "Två tunna linjer i kors", som då ska ändras.
9. **description är 155 tecken.** Korta med minst ett tecken, som på `golv-i-kallare.mdx`.

Utan retur, för kännedom: räkningen på rad 114 är kontrollerad och stämmer (3,5 mm slitskikt minus
Tarketts krav på 1 mm kvar ger 2,5 mm att slipa bort, alltså en till två omgångar), och den är
sidans bästa idé: den gör tillverkarnas spann till ett tal för läsarens eget golv. `kortSvar` har
fem meningar och markering på **2,5 mm** ✓. Rad 130 och 237 är mönstergilla källrader, den senare
med tre olika datum för tre olika rader och en mening om vilka som anger pris före och efter
rotavdrag. Rad 112, att ingen av de två sekundärkällorna är primärkälla och att spannet mellan dem
är dubbelt, är den sortens redovisning som bygger förtroende. Rad 134, "Ett golv du stressat fram
syns i tio år", och rad 262, om att nästa slipning avgörs av hur torrt du håller rummet i januari,
är två grepp som fungerar. Varningen rad 205 om oljetrasor som självantänder är en säkerhetsupplysning
som saknas hos ettan och tvåan. Rad 175 binder ihop pelaren snyggt genom att skicka vidare till båda
trappsidorna. Illustrationen `slipa-slitskikt` är **måttriktig**: 3,5 mm-bygeln är ritad i rätt
förhållande till 15 mm-bygeln, och de tre lagren stämmer med rad 92. Ett verktygskort,
`<Kalkylator namn="rotavdrag" />`, rätt form eftersom kostnaden är sidans eget avsnitt. Inga
produkter, inget band, inga köpknappar.

## 6. Inlänkar som granskaren lagt in

Sju filer, nio länkar, alla skrivna som meningar i löptext i stilguidens ton. `npm run build` grön
efteråt, `npm run kontrollera` 0 fel och 0 varningar.

| Fil | Var | Mål |
|---|---|---|
| `src/content/guider/grund/inreda-kallare.mdx` | sist i stycket "Ojämnheten avgör ofta valet åt dig" | `/golv/golv-i-kallare/` |
| `src/content/guider/grund/inreda-kallare.mdx` | sist i stycket om uppreglat golv av trä | `/golv/lagga-klickgolv/` |
| `src/content/guider/grund/inreda-kallare.mdx` | nytt stycke efter stycket om golvuppbyggnad och takhöjd | `/golv/bygga-trappa/` |
| `src/content/guider/fukt/fukt-i-kallaren.mdx` | nytt stycke sist i "Markfukt, vattnet kommer genom väggen" | `/golv/golv-i-kallare/` |
| `src/content/guider/kok/slipa-bankskiva.mdx` | sista stycket, ny mening | `/golv/slipa-parkettgolv/` |
| `src/content/guider/altan/bygga-altan.mdx` | nytt stycke sist i "Plintarna, och vad marken bestämmer" | `/golv/bygga-trappa/` |
| `src/content/guider/grund/isolera-krypgrund.mdx` | nytt stycke sist i bjälklagsavsnittet | `/el/tillaggsisolera-vind/` |
| `src/content/kunskap/fukt/luftfuktighet-inomhus.mdx` | nytt stycke efter stycket om fukttillskott | `/el/tillaggsisolera-vind/` |
| `src/content/kunskap/fukt/luftfuktighet-inomhus.mdx` | i avsnittet om torr vinterluft, före "Min hållning" | `/golv/lagga-klickgolv/` |
| `src/pages/rakna/rotavdrag.astro` | "Läs vidare", två nya poster före bygga-trappa | `/golv/renovera-trappa/` och `/el/tillaggsisolera-vind/` |

Tre anmärkningar till protokollet:

- **Källartrappan hade ingen naturlig plats i `inreda-kallare.mdx`.** Uppdraget sade "där
  källartrappan kan nämnas", men filen nämnde trappan bara i förbigående i dagsljusavsnittet ("en
  trappa upp"), som handlar om något annat. Länken ligger i stället sist i golvavsnittet, efter
  meningen om att varje lager tar från takhöjden, och meningen säger varför trappan berörs: en
  höjd golvnivå gör det nedersta steget lägre än de andra. Det binder ihop de två sidorna på en
  sakfråga i stället för på ett ord.
- **`src/pages/rakna/trappa.astro` behövde ingen ny länk.** Uppdraget bad om "en synlig mening i
  brödtexten som länkar `/golv/bygga-trappa/`". Sidan har redan två: rad 508 ("Hela bygget, alltså
  hålet i bjälklaget, vangstyckena, fundamentet under en utetrappa och virkeskraven, står i guiden
  om att bygga trappa") och rad 615. Jag har inte lagt till en tredje.
- **Vindsidans inlänksvarning är borta.** Före omgången saknade `/el/tillaggsisolera-vind/` inlänk,
  vilket `npm run kontrollera` varnade för. Efter de två länkarna från `isolera-krypgrund` och
  `luftfuktighet-inomhus` är kontrollen ren: 51 filer, 45 publicerade sidor, 0 fel, 0 varningar.

## 7. Vad hubben visar

`src/content/pelare/golv.mdx` är satt till `utkast: false` och `uppdaterad: 2026-09-20`. Pelaren har
fem publicerade sidor, vilket är precis vad `docs/INNEHALLSARKITEKTUR.md` och DESIGN.md 5.2 kräver.

**Om fältet `viktiga`.** Pelarschemat i `src/content.config.ts` rad 210 har det:
`viktiga: z.array(z.object({ titel, href })).max(3).default([])`, och `/amnen/` läser det.
**Men ingen av de tio pelarfilerna använder fältet, inte heller `pelare/fukt.mdx`, som uppdraget
pekade ut som förebild.** Att fylla i det för golv ensamt hade gjort golv till den enda pelaren med
handplockade sidor på `/amnen/`, vilket är ett innehållsbeslut och inte en granskningsåtgärd. Jag
har följt fukt.mdx, alltså lämnat fältet tomt, och lagt en kommentar i filen som säger varför. Se
avsnitt 8 punkt 6.

`/golv/` renderar, läst i `dist/client/golv/index.html`:

- Gruppetiketten **Insidan** överst, pelarikonen till vänster om H1, H1 **"Golv och trappor"**, och
  ingressen "Trägolv, klinker, laminat och trappor. Lägga nytt, slipa gammalt och laga det som
  knarrar."
- Raden **"5 sidor · Alla guider om golv och trappor"** med länk till `/guider/golv/`.
- **Hitta felet**, med sin generella rad och ett kort: golv i källaren (Problemguide · Mellan).
- **Välj rätt visas inte**, korrekt, eftersom pelaren varken har köpguider, kategorisidor eller
  jämförelser.
- **Gör det själv**, med fyra kort: bygga trappa, lägga klickgolv, renovera trappa och slipa
  parkettgolv, alla Projektguide. Rätt kort.
- **Räkna renders med tre verktygskort**: kvadratmeter, rotavdrag och trappa. Uppdraget väntade två;
  kvadratmeter är den tredje, och den hör dit, eftersom den har `pelare: ['golv', 'inomhus', 'kok']`
  i registret sedan tidigare.
- Registret "Alla sidor i pelaren" finns inte, vilket stämmer med att det togs bort 2026-09-17.

**En varning om dev-servern.** Hämtad i dev visade `/golv/` bara ett verktygskort, kvadratmeter, och
ämnesraden visade tio pelare inklusive de tre som är `utkast: true`. Båda skillnaderna är
dev-artefakter: modulen `register.ts` hade ändrats medan servern startade, och dev renderar utkast.
**Bygget är facit, och bygget är rätt.** Den som kontrollerar en hub ska läsa `dist/client/`, inte
dev. Dev-servern är stängd.

**Huvudmenyn.** Räkningen som förra omgångens krav 6.2 efterlyste ser annorlunda ut nu, eftersom
menyn har byggts om sedan dess. Byggd sida, `<header>`:

- **Nav "Sajtens sidor": fyra poster** (Guider, Räkna själv, Om oss, Kontakt) plus ordmärket.
- **Nav "Ämnen", en egen ämnesrad under menyn: sju publicerade hubbar** (Fasad, Altan, Grund,
  Väggar, Golv, Kök och bad, Fukt) plus "Alla ämnen".

**Att publicera golvhubben tar alltså ämnesraden från sex till sju hubbar, och huvudmenyn står
still på fyra poster.** Förra omgångens invändning, elva poster i en meny som DESIGN.md säger ska ha
högst tre hubbar, är därmed delvis löst av ombyggnaden: hubbarna ligger inte längre i huvudmenyn.
Men `MAX_HUBBAR_I_MENY` finns fortfarande inte i koden, och DESIGN.md avsnitt 5 beskriver
fortfarande en meny som inte finns. Se avsnitt 8 punkt 2.

## 8. Utanför omgången

1. **Rotavdragsverktyget ligger i åtta pelare, och det är för brett.** `register.ts` rad 127 ger det
   `pelare: ['grund', 'golv', 'fasad', 'tak', 'kok', 'el', 'altan', 'inomhus']`. Motiveringen i
   kommentaren är riktig i sak: rot gäller arbete på den egna bostaden, alltså nästan varje jobb vi
   skriver om. Men hubbens grupp Räkna svarar på frågan vad läsaren kan räkna ut **om just det
   ämnet**, och en rotavdragsräknare säger ingenting om tak. Jämför: kvadratmeter ligger i tre
   pelare, elkostnad i två, och ingen annan i fler än två. På `/tak/` och `/fasad/`, som ännu inte
   har någon egen kalkylator, blir rotavdraget det enda eller dominerande kortet i gruppen och ger
   ett falskt löfte om vad hubben innehåller. **Min rekommendation: begränsa till de tre pelare där
   frågan "ska jag anlita någon" faktiskt är sidans egen fråga**, alltså grund, golv och kök, och
   låt resten nå verktyget via `/rakna/`, via artiklarnas inbäddningar och via Läs vidare. Beslutet
   är SEO-strategens och affiliateansvarigs, inte mitt, men det ska fattas innan fler hubbar öppnas.
2. **Menyn och DESIGN.md avsnitt 5 beskriver inte samma sajt.** Dokumentet säger "högst tre hubbar
   i menyn (`MAX_HUBBAR_I_MENY`, sänkt från fem 2026-09-16)" och att "Så testar vi" står i menyn.
   Koden har ingen sådan konstant, hubbarna ligger i en egen ämnesrad med sju poster utan tak, och
   menyn säger "Om oss" och "Kontakt". Ombyggnaden är en förbättring och löste den akuta frågan, men
   dokumentet ska skrivas om efter hur menyn faktiskt ser ut, annars fattar nästa agent beslut mot
   en meny som inte finns. Förra omgångens krav 6.2 kan stängas i samma vända.
3. **Testskriptet för rotavdraget låser formeln mot en påhittad källhänvisning.**
   `scripts/test-kalkyl-rotavdrag.mjs` rad 79 till 93 och rad 255 jämför mot `EXEMPEL_ARBETE_KR`,
   `EXEMPEL_AVDRAG_KR` och `EXEMPEL_BETALA_KR` och beskriver dem som Skatteverkets räkneexempel.
   Talen är rätt och testet ska vara kvar; bara beskrivningen ska rättas, i samma commit som krav
   5.2.1. Skriptet bör samtidigt få ett fall till, mot Skatteverkets verkliga företagsexempel:
   12 500 kr inklusive moms ger 3 750 kr.
4. **U-värdesräknaren har en plats på vindsidan men finns inte.** Underlaget till
   `tillaggsisolera-vind` anger var den ska bäddas in (direkt efter Rockwools tabell, före stycket
   om regionjusteringen) och att motorn är verktygsplanens rad 9, delad med `/rakna/u-varde/`.
   Sidan säger på rad 108 "Din vind ligger sällan på exakt någon av de fyra raderna, och då får du
   interpolera eller räkna själv", vilket är precis det hål verktyget ska fylla. Raden bör inte
   skrivas om förrän verktyget finns, och verktyget bör byggas innan februaritoppen.
5. **Sökordsanalysens startlista säger att SERP:en för "golv i källare" inte är läst.**
   `docs/SOKORDSANALYS.md` avsnitt 7.6, rad 7: "SERP:en är inte läst och frasen kontrolleras innan
   briefen skrivs." Den är läst sedan dess: underlaget har topp tre med datum 2026-09-20, en
   vinnbarhetsbedömning på 5 och en genomgång av vad ettan täcker och saknar. SEO-strategen ska
   uppdatera raden, annars läser nästa agent att sidan står på osäker grund.
6. **Fältet `viktiga` i pelarschemat är dött kod.** Det finns i `src/content.config.ts`, `/amnen/`
   läser det, och noll av tio pelarfiler använder det. Antingen fylls det i för alla publicerade
   pelare i en och samma omgång, eller så tas det bort ur schemat. Att det ligger halvt
   implementerat gör att varje ny pelare måste ta ställning till det igen, vilket den här
   granskningen just fick göra.
7. **Två källor bör öppnas i webbläsare innan publicering.** SIS/TS 59:2025 ligger bakom betalvägg
   på 1 250 kr; ingen av våra sidor citerar ett tal ur den och ingen får göra det innan någon köpt
   den. Och BFS 2024:9 **3 kap.** är inte läst, trots att `renovera-trappa.mdx` citerar 3 kap. 2 §
   två gånger. Krav 5.3.1 hänger på att den läses.
8. **Delningsbilder.** Alla åtta finns i `public/og/` med rätt prefix och byggdes utan varning. Men
   de är byggda av de skisser som ska ritas om enligt krav 5.1.6, 5.1.7, 5.1.9, 5.4.8, 5.5.2,
   5.5.3, 5.6.11 och 5.6.12, och delningsbilden är det första någon ser när en länk delas. Kör
   `npm run delningsbilder` igen efter att skisserna rättats, före commit.
9. **Ingenting är committat.** `git status` visar de nio inlänksändringarna, pelarfilen och den här
   rapporten som ändrade eller nya. Artikelfilerna, formelmodulerna och verktygssidorna är orörda
   av granskaren, med undantag för de två Läs vidare-posterna i `rakna/rotavdrag.astro`.
