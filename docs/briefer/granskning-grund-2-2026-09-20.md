# Granskning grund, omgång 2, 2026-09-20, två sidor plus pelarens hubb

Granskad med alla fyra hattarna: chefredaktör (stil och fakta), SEO-strateg, affiliateansvarig och
designansvarig. Samma form och samma ribba som `granskning-omgang-altan-grund-2026-09-19.md`.

Ingen artikelfil är ändrad av granskaren. Inlänkarna från befintliga sidor är inlagda, de står i
avsnitt 4. `src/content/pelare/grund.mdx` är satt till `utkast: false` och `uppdaterad: 2026-09-20`
enligt uppdraget, och hubben är hämtad och läst, se avsnitt 5. `npm run build` är grön:
45 filer, 38 publicerade sidor, 0 fel, 0 varningar.

Metod. Det mekaniska stilpasset är kört som sökning över båda filerna (tankstreck, "X: Y"-rubriker,
frågerubriker, förbjudna fraser, hedging, "man", fetstil i punktlistor, emojis, treklanger). Alla
fyra illustrationerna är renderade till PNG i 1 200 px och lästa som bilder, och därefter mätta i
källfilernas egna koordinater, eftersom två av dem visade sig ha fel proportioner. Korsdubbletterna
är hittade maskinellt med sjugram över de två nya sidorna plus de sju fukt- och grundsidor de
gränsar mot. **Samtliga sex regelverkspåståenden på inreda-kallare är verifierade mot Boverkets PBL
kunskapsbanken och mot författningstexten i dag**, liksom Rockwools, Parocs (arkiverad), Golv-
branschens, Isolas, Fuktcentrums, Vi i Villas och Byggstarts uppgifter. Alla 22 käll-URL:er i de
två filerna svarar 200.

## 1. Sammanfattning

1. **Ingen sida är underkänd. Båda går igenom efter en retur.** Tretton ändringskrav på
   isolera-kallarvagg, tretton på inreda-kallare.
2. **Det mekaniska stilpasset ger noll träffar på hela omgången.** Inga tankstreck, inga
   "X: Y"-rubriker, inga frågerubriker, ingen hedging, inget "man", inga emojis, ingen fetstil i
   punktlistor, inga slentriantreklanger. Det är första omgången som går igenom första passet rent.
3. **Regelverkskontrollen på inreda-kallare: fyra av sex paragrafhänvisningar är exakt rätt, de två
   historiska påståendena är rätt, och två framställningar måste ändras.** Se avsnitt 2 i sin
   helhet. Kort: BFS 2024:8 5 kap. 1 §, BFS 2024:8 13 kap. 5 §, BFS 2024:7 2 kap. 26 § och PBL
   9 kap. 15 § stämmer ordagrant. Men **BBR har inte upphävts** (energikraven ligger kvar där till
   1 oktober 2026), och **0,8 procent dagsljus gäller när en ny bostad inreds i en lokal**, inte när
   en villaägare gör om sitt eget källarförråd till sovrum. Krav 3.2.1 och 3.2.2.
4. **Den arkiverade Paroc-källan godtas som bärande källa, men ska märkas i löptexten.** Bedömningen
   och skälen står i krav 3.1.1. Jag har öppnat arkivsidan och båda citaten står där ordagrant.
5. **Alla tre U-värdes- och andelsuträkningarna stämmer.** Rockwools sex rader ger 47, 53, 42, 48,
   37 och 43 procent isolering ute, alltså precis spannet 37 till 53 som sidan anger, och 0,18 mot
   0,13 är de fem hundradelar sidan säger. Daggpunkten 9,3 grader vid 20 grader och 50 procent
   luftfuktighet är räknad om med Magnus-formeln och stämmer på decimalen.
6. **Omgångens designfråga är att tre av fyra illustrationer inte klarar måttkontrollen.**
   `kallarvagg-daggpunkt` har ett nyckeltal som pekar på något bilden inte ritar (bygeln säger
   minst en tredjedel ute och panelen ritar allt ute), `kallarvagg-inifran` ritar grundmuren
   90 mm tjock vid bygelns egen skala när källorna förutsätter 200 till 250 mm, och
   `inreda-kallare-fonster` ritar 0,90 gånger 0,60 m med kvoten 1,63 i stället för 1,50. Den
   fjärde, `inreda-kallare-golv`, har rätt proportioner men lägger sin pennanteckning 196 enheter
   från det den pekar på. Krav 3.1.3, 3.1.5, 3.2.9 och 3.2.8.
7. **Alla fyra illustrationerna klarar de mekaniska kraven.** 19,4 till 35,9 kB, alla under 40 kB.
   Ingen har `<text>` kvar. Alla är 600 × 360 med `role="img"`, och rot-taggens `aria-label` ligger
   på 333 till 448 tecken, alltså under 600. Handskriften är 24 px.
8. **Korsdubbletterna går isär helt mellan de två sidorna.** isolera-kallarvagg är ren: sjugram-
   sökningen ger inte en enda träff i brödtexten mot någon av de sju systersidorna, bara två
   källtitlar som med rätta är gemensamma. inreda-kallare har sju träffar, varav den tyngsta är
   sidans andra stycke, som öppnar med samma tolv ord som isolera-krypgrund. Krav 3.2.11.
9. **Affiliate är rent på båda sidorna.** Ingen affiliatelänk, ingen butikslänk i löptext, inget
   produktkort, ingen köpknapp, inget reklamband. Båda har `produkter: []`, ingen är `kopguide`,
   ingen rad i `behover` bär en `produkt`, och ingen av sidorna har en enda extern länk i
   brödtexten; alla källor ligger i källförteckningen. Byggstart, Isola och Kährs står som källor,
   och Byggstart dessutom som en källa sidan går emot i regelfrågan, vilket är bättre än neutralt.
   Inga krav från affiliatehåll på någon sida.
10. **Ett verktygskort per sida**, som beställt: `daggpunkt` på isolera-kallarvagg rad 53 och
    `kallare` på inreda-kallare rad 96. Den dubblett skribenten höll på att ta bort är borta;
    `git status` låg stilla på filen under hela granskningen.
11. **Bättre än ettan-listorna.** isolera-kallarvagg levererar alla åtta punkter. inreda-kallare
    levererar fyra av fem helt; den femte, "utrymningsfönstrets fyra mått i en egen skiss", är
    levererad i texten men skissen visar tre av de fyra. Krav 3.2.9.
12. **Metadata är i ordning på båda.** description 145 och 138 tecken, seoTitle 44 och 50, title 56
    och 33. Båda har seoTitle, till skillnad från tre sidor i förra omgången.
13. **Hubben öppnas korrekt men renderar bara tre av fyra grupper, och det beror på en bugg i
    mallen.** Räkna-gruppen är dold på `/grund/` trots att två kalkylatorer pekar på pelaren. Samma
    bugg döljer gruppen på `/altan/` och `/inomhus/`. Avsnitt 5 och krav 6.1.
14. **Att publicera hubben tar huvudmenyn till elva poster.** DESIGN.md säger högst tre hubbar i
    menyn, konstanten `MAX_HUBBAR_I_MENY` finns inte i koden, och menyn visar nu sex hubbar. Det är
    inte orsakat av den här omgången, men den gjorde det värre. Avsnitt 5 och krav 6.2.

## 2. Regelverkskontrollen på inreda-kallare, punkt för punkt

Uppdraget kallar det sidans starkaste kort och också det farligaste. Här är kontrollen i sin helhet.
Allt är hämtat från Boverket 2026-09-20, och föreskriftstexten är citerad ur författningsrutorna i
PBL kunskapsbanken, som återger paragraferna ordagrant.

| Sidans påstående | Utfall | Vad källan säger |
|---|---|---|
| BBR slutade gälla 1 juli 2026 | delvis | se nedan |
| Nio nya författningar | **stämmer** | BFS 2024:4, 6, 7, 8, 9, 10, 11, 12, 13 |
| Takhöjd 2,40 m finns inte längre | **stämmer** | BBR 3:311 är ur kraft |
| Fönsterarea en tiondel finns inte längre | **stämmer** | ersatt av dagsljusfaktor |
| Rumshöjd i BFS 2024:8 5 kap. 1 § | **stämmer ordagrant** | se nedan |
| Dagsljus 0,8 procent i 13 kap. 5 § | **rätt paragraf, fel läsare** | se nedan |
| Fönstermåtten i BFS 2024:7 2 kap. 26 § | **stämmer ordagrant** | se nedan |
| Ändrad användning, PBL 9 kap. 15 § | **stämmer** | se nedan |

Källa: Boverket, PBL kunskapsbanken, sidorna Rumshöjd, Ljusförhållanden, Antal utrymningsvägar och
utrymning via fönster, Anmälan, Bygglov för ändrad användning, samt Om Boverkets nya byggregler.
Samtliga sex sidor är märkta "Senast ändrad 1 juli 2026".

**Rumshöjd.** BFS 2024:8 5 kap. 1 §: "Rumshöjden ska vara tillräcklig för att undvika olägenheter
för människors hälsa och vara anpassad till rummets avsedda användning." Sidans rad 170 återger det
ordagrant. Bedömningsgrunderna på rad 172 (golvyta, hur många samtidigt, hur länge, vilka
aktiviteter, användarnas känslighet) står i exakt den ordningen hos Boverket, och hållpunkten "en
person som är 2 meter lång når cirka 2,50 meter upp med fullt utsträckta armar" är ett ordagrant
citat. Godkänt utan ändring. Det gamla kravet stämmer också: BBR 3:311 krävde 2,40 m i bostäder och
tillät 2,30 m i vind och källare i småhus.

**Dagsljus.** BFS 2024:8 4 kap. 1 § kräver dagsljusfaktor minst 1,0 procent för minst halva den
sammanlagda bedömda ytan av samtliga rum där människor vistas mer än tillfälligt. 13 kap. 5 §
lyder: "Om en byggnad ändras så att bostäder inreds i lokaler, som inte tidigare använts som
bostad, ska den ändrade delen uppfylla kraven i 4 kap. 1 §. Finns skäl enligt 12 kap. 1 § så kan
dock tillgång till dagsljus motsvarande en dagsljusfaktor om 0,8 procent godtas." De två villkoren
på sidans rad 180 är ordagrant rätt, och undantaget för en lokal som tidigare varit bostad (rad 182)
är rätt. Vistelserumsdefinitionen och "inget krav på direkt dagsljus" är rätt.

Men paragrafen börjar med *bostäder inreds i lokaler*, och Boverkets vägledning säger rakt ut:
"Regeln gäller om en ny bostad inreds i en befintlig byggnad, det kan till exempel vara oinredda
vindar eller butikslokaler i bostadshus." Sidans läsare är en villaägare som gör om sitt eget
källarförråd till sovrum. Hennes villa är redan en bostad, ingen ny bostad inreds, och 13 kap. 5 §
slår inte till. Hon styr efter 1,0 procent över bostaden som helhet, vilket sidan själv förklarar
på rad 178 och vilket är bättre besked än 0,8 procent. Krav 3.2.2.

**Utrymningsfönstret.** BFS 2024:7 2 kap. 26 §: fönster eller motsvarande för utrymning ska
"1. vara öppningsbara utan nyckel eller annat redskap, 2. stanna i öppet läge efter öppning, 3. ha
en fri öppning med minst 0,50 meter bredd, 4. ha en fri öppning med minst 0,60 meter höjd, 5. ha en
summa av bredd och höjd som är minst 1,50 meter, och 6. ha ett avstånd från underkant till golv,
plattform eller liknande på högst 1,20 meter." Sidans rad 203 återger alla sex punkterna korrekt,
och rätt paragraf. Grundkravet på två utrymningsdörrar i bostad står i 7 kap. 9 §, och småhus-
undantaget i 7 kap. 14 §. Godkänt utom två detaljer, krav 3.2.3.

**Ändrad användning.** PBL 9 kap. 15 § (i lydelsen enligt Lag 2025:974, som flyttade bestämmelsen
från 9 kap. 2 §) kräver bygglov när byggnaden "helt eller delvis tas i anspråk eller inreds för ett
väsentligen annat ändamål än det som byggnaden senast har använts för", och punkt 2 när "det i
byggnaden inreds ytterligare en bostad". Sidans rad 186 och 188 stämmer, och slutsatsen att en
villa är en bostad före och efter stöds av Boverkets eget exempel om fritidshus till helårsbostad.
Anmälningslistan på rad 190 till 195 stämmer mot PBF 6 kap. 1 § i lydelsen enligt Förordning
2025:979, och att listan ändrades 1 december 2025 bekräftas av att Boverket själva lagt den äldre
vägledningen under rubriken "Äldre vägledning innan 1 dec 2025". Startbesked och slutbesked
stämmer. Godkänt utan ändring. **Det här är omgångens bästa arbete** och den enda sidan på svenska
som får den här frågan rätt.

**BBR:s status.** Boverket skriver: "Möjligheten att tillämpa de äldre reglerna upphörde den
1 juli 2026." Så långt stämmer sidan. Men samma sida skriver också: "Till skillnad från EKS har
inte BBR upphävts. Detta beror på att Boverket ännu inte har gett ut några nya regler om
energihushållning som ersätter reglerna i BBR. Kraven på energihushållning regleras alltså fortsatt
i BBR." Den nya energiförfattningen träder i kraft 1 oktober 2026. Underlaget hade raden
"Energikraven kvar i BBR till 1 oktober 2026" i sin tabell; artikeln tappade den. Krav 3.2.1.

## 3. Per sida

### 3.1 Isolera källarväggen, `src/content/kunskap/grund/isolera-kallarvagg.mdx`

**Bedömning: retur, tretton krav.** Kunskap, mellan, 2 236 ord, sju H2, description 145 tecken,
seoTitle 44. Alla åtta bättre än ettan-punkterna är levererade. Sidan är omgångens bästa löptext
och den enda i två omgångar som är helt fri från korsdubbletter mot systersidorna; den skriver om
både daggpunktsförklaringen och c-måttsförklaringen i stället för att återanvända dem, vilket är
precis vad förra omgångens krav 2.1.1 bad om. Källhanteringen är mönstergill: sex av sju källor
presenteras med ett eller två ord första gången, och Isodrän märks ut som part i frågan innan de
citeras. Sidan tar ställning tre gånger med jag-form (rad 100, 124, 126) och redovisar varje gång
vad som talar emot. Det enda som verkligen brister är bilderna och hur den bär sin viktigaste
källa.

Krav, viktigast först:

1. **Den arkiverade Paroc-källan ska märkas i löptexten, inte bara i listan.** Rad 98 och 100 lutar
   hela den invändiga anvisningen, alltså sidans mest handfasta råd, på en sida som Paroc har tagit
   bort; citaten kommer ur Internet Archives ögonblicksbild 2023-03-29. Samtidigt citerar rad 69 ett
   annat, levande Paroc-dokument som inte innehåller 70 mm. Två källor av mycket olika styrka står
   under samma namn, och läsaren som klickar landar på web.archive.org utan förvarning.
   **Min bedömning: den arkiverade källan duger som bärande källa här.** Den är daterad, oföränderlig
   och läsbar för vem som helst, jag har öppnat den och båda citaten står där ordagrant, och ingen
   levande källa i ämnet ger ett tal alls. Men den ska märkas där talet står. Skriv rad 98:
   "Är villkoren uppfyllda sätter Paroc taket i millimeter. Välj en tunn isolertjocklek, skriver de,
   med högst 70 mm stenull mellan reglarna. Anvisningen stod på Parocs egen svenska sajt, som togs
   ner när Owens Corning tog över, så vi citerar den arkiverade versionen från mars 2023. Någon
   nyare tillverkare som sätter ett tal har vi inte hittat."
2. **70 mm är inte hela lagret, och jämförelsen med Multipor blir därför skev.** Paroc anger
   20 mm ROB 80 takboard *plus* högst 70 mm ull, alltså 90 mm mot muren, vilket sidan själv listar
   på rad 114. Rad 124 jämför ändå "Paroc sätter taket vid 70 mm" med "Multiporväggen i tidningen
   är 100 mm tjock", och gör skillnaden nästan dubbelt så stor som den är. Skriv rad 124:
   "En invändning hör till. Parocs vägg blir 90 mm tjock med takboarden inräknad, och Multiporväggen
   i tidningen är 100 mm. Talen gäller olika material och ska inte jämföras rakt av, eftersom ull i
   en luftad spalt och en massiv mineralskiva limmad mot betong beter sig olika i fukt. Men ingen av
   de källor vi har kunnat läsa säger var gränsen går för den limmade skivan. Vill du ha marginal
   finns samma skiva i 50 och 80 mm."
3. **Illustrationen `grund/kallarvagg-daggpunkt`, sidans huvudbild, motsäger sitt eget nyckeltal.**
   Mätt i källfilens koordinater ligger vänstra snittets isolering på x 92 till 126, alltså
   34 enheter, och grundmuren på 126 till 186. Någon isolering på insidan finns inte. Måttbygeln på
   rad 112 spänner exakt över samma 34 enheter och är märkt "minst 1/3 ute". Bygeln mäter alltså
   100 procent och säger en tredjedel. Det är samma fel som förra omgångens krav 2.5.9, ett
   nyckeltal som pekar på tom yta. Rita ett inre isolerlager också i vänstra panelen, 68 enheter
   brett från murens insida, och låt en yttre bygel spänna över hela 102 enheter med de 34
   yttre markerade. Då visar bilden exakt tillverkarens golv, och talet blir sant.
4. **Samma bild: skriv "en tredjedel", inte "1/3".** Etiketten på rad 127 är det enda stället på
   sajten där måttet skrivs som bråk. Sidan skriver "en tredjedel" i kortSvar, i bildtexten rad 18
   och i rad 71, och stilguiden kräver ett skrivsätt per mått på hela sajten. Rockwool skriver
   visserligen 1/3, men det gör de i sin egen text, inte i vår bild. Skriv "minst en tredjedel ute".
   Bredda den gula rektangeln på rad 18 i filen så att den ligger bakom talet, inte bakom hela
   raden. Bildtexten rad 18 i artikeln följer med.
5. **Samma bild: etiketterna i murarna ligger på högkant.** "varm och torr" och "kall och fuktig"
   är roterade 90 grader inne i respektive mur. I läsbredd på mobil är illustrationen 343 px, och
   lodrät handskrift i den storleken läses inte, den betraktas. Lägg dem vågrätt under respektive
   mur, där det finns gott om tom yta.
6. **Illustrationen `grund/kallarvagg-inifran` ritar en grundmur som är för tunn, och det slår mot
   sidans poäng.** Måttbygeln sätter skalan: 56 enheter är 70 mm, alltså 1,25 mm per enhet.
   Grundmuren är ritad 72 enheter, vilket blir 90 mm. Rockwools tabell förutsätter 200 mm
   lättklinkerblock och Parocs U-värden 250 mm väggtjocklek. Hela avsnittets poäng är att
   isolerlagret ska vara tunt i förhållande till muren, och bilden ritar dem nästan lika tjocka.
   Lättaste vägen: behåll muren på 72 enheter och låt den vara 200 mm, alltså 2,78 mm per enhet, och
   krymp isolerlagret från 56 till 25 enheter. Då blir lagret visuellt tunt, vilket är vad texten
   säger.
7. **Samma bild: takboarden saknas.** Skiktföljden på rad 114 börjar med "En styv stenullsskiva av
   typen takboard, 20 mm, direkt mot betongen". I bilden finns i stället en tom spalt på 14 enheter
   mellan muren och isoleringen, etiketterad "luftspalt mot muren". Bilden visar alltså Rockwools
   vägg, där regelverket står avskilt från muren, medan måttet i bilden är Parocs. Rita in
   takboarden som ett eget tunt lager direkt mot betongen och etikettera den, så att bilden och
   rad 114 säger samma sak. Alt-texten rad 102 och bildtexten följer med.
8. **Rockwools egen reservation mot U-värdestabellen saknas.** Under tabellen står hos Rockwool:
   "U-värde för en källarvägg beror bl.a. på marknivåns läge mm. Kontakta ROCKWOOL för information."
   Sidan använder tabellen för att ge ett råd på rad 86, att det är den yttre skivan du gör
   tjockare, och då ska reservationen med. Lägg sist i källraden rad 84: "Rockwool skriver själva
   att talen beror på var marknivån ligger, så använd raderna för att jämföra med varandra, inte som
   projekterat värde för din vägg."
9. **Multipor tillskrivs fel tillverkare och fel material.** Rad 122: "Skivorna av lättbetong som
   Ytong säljer under namnet Multipor tillverkas av sand, kalk och cement". Handboken vi citerar är
   Xellas, och där heter Multipor "mineralbaserade isoleringsplattor", inte lättbetong; Ytong och
   Multipor är två varumärken hos samma ägare, och Ytong säljer inte Multipor. Skriv: "Den andra
   vägen är att inte bygga någon vägg alls. En mineralisk isoleringsskiva limmas direkt mot
   betongen, utan spalt och utan reglar. Tillverkaren Xella gör en sådan skiva under namnet
   Multipor, av sand, kalk och cement, alltså helt utan organiskt material, och anger uttryckligen
   källarvägg som användningsområde."
10. **Gör Det Själv tillskrivs ett påstående om Sverige som källan inte gör.** Rad 39 slutar
    "...stora problem med mögel och dålig inomhusmiljö i svenska källare." Källan skriver "har
    orsakat stora problem med mögel och dålig inomhusmiljö", utan land, och tidningen är översatt
    från danska. Stryk "i svenska". Ordet bär ingenting heller, eftersom stycket redan handlar om
    läsarens källare.
11. **Ordningen på rad 142 motsäger villkoret på rad 94.** Punkt 1 säger "en hygrometer som får
    sitta minst en vecka", punkt 4 säger "en gång på sommaren och en gång mitt i vintern", och
    villkoret på rad 94 kräver "kontrollerad både en sommar och en vinter". Listan ska säga samma
    sak som texten ovanför den. Skriv punkt 1: "Ta reda på varifrån fukten kommer. Plasttestet på
    väggen, och en hygrometer som får hänga kvar från maj till september."
12. **kortSvar använder daggpunkten utan att förklara den, och två facktermer står oförklarade på en
    mellansida.** Regel 4 gäller också i Kort svar, och det är där läsaren möter ordet först. Skriv
    tredje meningen: "Invändig isolering gör tvärtom, muren blir kallare och fukten fälls ut inne i
    betongen." Begreppet förklaras sedan där det hör hemma, på rad 45. I brödtexten: rad 117
    "Drevningsremsa eller sylltätning" och rad 126 "en murad vägg av lättklinker" ska ha sina tre
    till fem ord, till exempel "drevningsremsa eller sylltätning, alltså det mjuka bandet som tätar
    mot golv och tak" och "en murad vägg av lättklinker, alltså de grova blocken av bränd lera".
13. **Den planerade länken till sprickorsidan saknas.** Underlaget listar
    `/grund/sprickor-i-husgrunden/` bland sidans utgående länkar och sidan har den inte. Muren du
    ska klä invändigt är samma mur som spricker, och varningen på rad 136 handlar redan om vad du
    hittar när du river. Lägg sist i varningen: "Ser du i stället en spricka i muren när du river är
    det en annan fråga, och vad som är ofarligt och vad som inte är det står i
    [sprickor i husgrunden](/grund/sprickor-i-husgrunden/)."

Utan retur, för kännedom: sjugramssökningen mot `fukt-i-kallaren`, `dranera-hus`,
`isolera-krypgrund`, `sprickor-i-husgrunden`, `luftfuktighet-inomhus`, `avfuktare-kallare` och
`avfuktare-krypgrund` ger noll träffar i brödtexten. De två träffarna som finns är titlarna på
Boverket- och Lawrence-källorna i källförteckningen, vilka ska vara lika. U-värdestabellen har fyra
kolumner med korta celler och kolumnrubriker på högst två ord plus enhet, alltså inom både
fyrkolumnsregeln och mobilmätningen, och den sorterar på det läsaren letar efter. Andelskolumnen är
räknad av oss och märkt som det, och alla sex värdena stämmer på decimalen. Rad 51 har två tal i
samma mening men det är ett mätvillkor och får stå. Rad 122, "Arbetet tog två dagar. Materialet till
12 kvadratmeter kostade drygt 5 000 kr", är tre korta meningar med ett tal var och är omgångens
bästa rytm. Rad 100, "Min hållning är Parocs", och rad 104, "Och så det som frågan oftast handlar
om. Ingen plastfolie", är två grepp som fungerar och som inte återkommer. Rad 124 säger rakt ut att
vi inte har någon källa för den limmade skivans gräns, vilket är rätt hållning. Illustrationen
`kallarvagg-daggpunkt` har den gula markeringen bakom talet och inte bakom raden, till skillnad från
fönsterbilden. Inga produkter, inget band, inga köpknappar.

### 3.2 Inreda källaren, `src/content/guider/grund/inreda-kallare.mdx`

**Bedömning: retur, tretton krav.** Projektguide, mellan, 3 326 ord, åtta H2 plus fem FAQ,
description 138 tecken, seoTitle 50. Fyra av fem bättre än ettan-punkter är helt levererade, den
femte till två tredjedelar. Regelavsnittet är det bästa som finns på svenska om den här frågan, och
avsnitt 2 ovan redovisar kontrollen i sin helhet. Kostnadsordningen på rad 229 till 238 är sidans
näst bästa idé: den översätter den tekniska ordningen till kronor och säger på varje rad varför.
Sidan är längre än dranera-hus, som förra omgången kallades för lång, men den bär sin längd bättre,
eftersom regelavsnittet och kostnadsavsnittet inte finns någon annanstans. Problemen är två: den
säger sin egen ordning tre gånger innan den gör den, och den lånar formuleringar från tre
systersidor.

Krav, viktigast först:

1. **Rad 82. BBR har inte upphävts.** Meningen säger "när Boverkets byggregler slutade gälla och
   ersattes av nio nya författningar från samma myndighet". Boverket skriver tvärtom: "Till skillnad
   från EKS har inte BBR upphävts... Kraven på energihushållning regleras alltså fortsatt i BBR",
   och den nya energiförfattningen träder i kraft 1 oktober 2026. Underlaget hade uppgiften och
   artikeln tappade den. Skriv: "En sak till, innan vi börjar. Reglerna för det här bytte både namn
   och innehåll den 1 juli 2026. Då upphörde möjligheten att tillämpa Boverkets gamla byggregler,
   och nio nya författningar från samma myndighet tog över allt utom energikraven, som ligger kvar i
   de gamla reglerna till den 1 oktober i år. Takhöjdskravet på 2,40 meter finns inte längre. Kravet
   på en fönsterarea motsvarande en tiondel av golvytan finns inte heller."
2. **Rad 180 och FAQ-svaret rad 243. Dagsljusfaktorn 0,8 procent gäller inte sidans läsare.**
   13 kap. 5 § börjar "Om en byggnad ändras så att bostäder inreds i **lokaler**, som inte tidigare
   använts som bostad", och Boverkets vägledning säger "Regeln gäller om en ny bostad inreds i en
   befintlig byggnad, det kan till exempel vara oinredda vindar eller butikslokaler i bostadshus".
   Villaägaren som gör sovrum av sitt källarförråd inreder ingen ny bostad; villan är en bostad både
   före och efter, och då gäller 1,0 procent över bostaden som helhet, vilket sidan själv förklarar
   på rad 178 och vilket är bättre besked. Att kalla regeln "skriven just för källare" i FAQ:n är
   dessutom en övertolkning av Boverkets motivering; myndigheten nämner källare som exempel på
   mörka utrymmen, inte som regelns adressat. Skriv rad 180: "Sedan finns en paragraf som ser ut att
   vara skriven rakt in i det här problemet, och den gäller färre än man tror. Inreds en ny bostad i
   ett utrymme som inte varit bostad förut, till exempel en uthyrningsdel i en tidigare oinredd
   källare eller en lägenhet i en butikslokal, kan en dagsljusfaktor på 0,8 procent godtas. Men bara
   om ljusförhållandena skulle förbättras försumbart av att kravet uppfylls, eller om det krävs för
   att inte förvanska en särskilt värdefull byggnad. Att det blir dyrt att ta upp ett fönster är
   inget skäl. Gör du i stället om ett rum i din egen villa är villan en bostad redan, ingen ny
   bostad inreds, och då är det 1,0 procent över hela bostaden som gäller." Skriv om FAQ-svaret på
   samma sätt, och stryk "den regeln är skriven just för källare".
3. **Rad 201 och 209. Utrymningsavsnittet tappar två villkor och tillskriver föreskriften en mening
   som står i vägledningen.** Rad 201 återger 7 kap. 14 § men utelämnar att undantaget bara gäller
   byggnadsklass 2 och 3, och att underkanten får sitta 8,0 meter upp om det finns en fast monterad
   stege. Rad 209 säger "föreskriften säger uttryckligen att ett utrymningsfönster inte får släppa
   ut folk på ett tak eller liknande"; föreskriften säger bara "Fönstret leder till säker plats",
   och det om taket står i Boverkets vägledning till paragrafen. På en sida som bygger sitt
   främsta försprång på att citera rätt är den skillnaden viktig. Lägg till i rad 201 efter
   femmetersvillkoret: "eller 8,0 meter om det finns en fast monterad stege på fasaden. Undantaget
   gäller bara i byggnadsklass 2 och 3, vilket en vanlig villa är." Och skriv i rad 209: "och
   Boverket förklarar villkoret med att ett utrymningsfönster inte får släppa ut folk på ett tak
   eller liknande".
4. **Rad 116, 126 och 139. Tre gränsvärden för tre olika frågor står som en skala.** Läsaren möter
   85 procent (rad 116), sedan 60 och 95 procent (rad 126), sedan 85 procent igen i en helt annan
   betydelse (rad 139), och sidan säger aldrig att de mäter olika saker. Golvbranschens 85 är
   dessutom ett exempel, inte ett gränsvärde: källan skriver "om ytskiktet kräver RF 85 % så måste
   det säkerställas att betongens RF inte överstiger 85 %", alltså ett villkorssamband där talet
   kommer från golvet. Fuktcentrums 85 är något annat igen, nämligen den nivå markfukten aldrig kan
   driva plattan över om värmeisoleringen räcker. Sidan säger halva sanningen på rad 116 ("kommer
   inte från en myndighet utan från golvet du väljer") och tappar den sedan. Skriv in en kort ruta
   eller fyra rader efter rad 116 som säger vad varje tal är gräns för, och **ta ställning**, vilket
   sidan gör om golvtypen men inte om talet: säg att det tal du beställer mätningen mot är det ditt
   ytskikt kräver, att 85 procent är det vanligaste kravet men ska läsas ur golvtillverkarens
   anvisning och inte ur den här sidan, att 60 procent är gränsen under vilken Kährs inte kräver
   fuktskydd alls på ett bjälklag och som aldrig gäller en källarplatta, och att 95 procent är den
   nivå över vilken en plastfolie inte längre duger som fuktskydd.
5. **Rad 139 och FAQ rad 244. Johan Hedström tillskrivs ett skäl han inte ger, och Fuktcentrum en
   slutsats som är hårdare än deras egen.** Hedström säger i Vi i Villa: "Välj bort golvvärme...
   Det är en riskfylld konstruktion eftersom äldre hus inte är byggda för att värmas på det viset.
   Med tiden kommer marken under huset bli så uppvärmd att risken för fuktskador ökar." Han säger
   inte "äldre hus saknar isolering under plattan", vilket sidan lägger i hans mun på två ställen.
   Fuktcentrum skriver dessutom att golvvärme på sikt gör plattan *torrare*, och att risken är
   "kortvarig uppfuktning under sommaren om man har en tät golvbeläggning" i hus med tunn
   värmeisolering. Rubriken "den enskilt sämsta idén i projektet" är vår slutsats, och den får stå,
   men då ska den märkas som vår. Skriv slutet av varningen: "En gammal källarplatta utan isolering
   under klarar inte det villkoret. Fuktcentrums egen slutsats är försiktigare än vår: risken de
   beskriver är en kortvarig uppfuktning på sommaren, och bara om golvbeläggningen ovanpå är tät.
   Johan Hedström på Småhusskadenämnden går längre och avråder rakt av, eftersom äldre hus inte är
   byggda för att värmas den vägen och marken under dem blir varmare för varje år. Vi håller med
   honom." Rätta FAQ-svaret på samma sätt.
6. **Rad 80 och 82 och 229. Sidan säger sin egen ordning tre gånger innan den gör den.** Rad 80 är
   en innehållsförteckning i prosa ("Därför går den här sidan i den ordning arbetet faktiskt ska
   ske. Först mäter du..."), rad 82 är en till ("Vad som står i stället kommer under egna rubriker
   längre ner"), och rad 229 gör om hela ordningen en tredje gång. Det är samma fel som förra
   omgångens krav 2.6.1 och 2.6.2 på dräneringssidan, meta i stället för innehåll, och rad 80 är
   dessutom en korsdubblett (krav 11). Stryk rad 80 helt. Rad 78 har redan sagt att källaren med en
   säng i ställer alla krav och att de flesta handlar om fukt, och H2-raden säger resten. Behåll
   rad 82 och rad 229, som båda bär något eget.
7. **Illustrationen `grund/inreda-kallare-golv`, sidans huvudbild, skriver "85 % RF".** Förkortningen
   RF står inte en enda gång i brödtexten, som konsekvent skriver "relativ fuktighet", och på en
   mellansida förklaras termen kort första gången. Det är samma fel som förra omgångens krav 2.5.4,
   en etikett utan utskriven storhet. Skriv "85 % relativ fuktighet" i bilden, eller korta motivet
   så att det får plats.
8. **Samma bild: pennanteckningen ligger 196 enheter från det den pekar på, och övre halvan är
   tom.** Ritningen börjar på y 217 och slutar på y 354, medan anteckningen "markfukten ut med
   spaltluften" står på y 50. Hela den övre tredjedelen av ytan är tomt linjerat papper. Det är
   samma fel som förra omgångens krav 2.3.7, en penna som pekar i luften. Flytta anteckningen ner så
   att den slutar vid den vågräta röda pilen i spalten, eller lyft hela snittet uppåt så att motivet
   fyller ytan. Samma bild: betongplattan (48 enheter) och marken (52 enheter) är nästan lika tjocka
   och båda skrafferade, så plattan läses som ett andra jordlager. Gör plattan tydligt tunnare än
   marken och låt markskrafferingen löpa ut ur bildens underkant i stället för att avslutas med en
   linje, så blir marken mark och inte ett fjärde lager.
9. **Illustrationen `grund/inreda-kallare-fonster` är inte ritad i de proportioner den påstår.**
   Höjdbygeln spänner 156 enheter och är märkt 0,90 meter, breddbygeln 96 enheter och är märkt
   0,60 meter. Det ger 173 enheter per meter på höjden och 160 på bredden, alltså en avvikelse på
   drygt åtta procent, och en öppning med kvoten 1,63 där etiketterna säger 1,50. På just den här
   sidan, vars poäng är att två mått som var för sig klarar kravet kan falla på summan, ska bilden
   vara måttriktig. Rita om så att öppningen blir 96 gånger 144 enheter vid samma skala.
10. **Samma bild: den gula markeringen ligger bakom hela raden, och det fjärde måttet saknas.**
    Rektangeln är 276 enheter bred och täcker "bredd + höjd, minst 1,50 m"; regeln är en markering
    bakom talet. Krymp den till talet. Och bättre än ettan-punkt fyra lovar "utrymningsfönstrets
    fyra mått i en egen skiss"; skissen visar tre. Måttet från öppningens underkant till golvet,
    högst 1,20 meter, är det enda som faktiskt går att missa i en källare med uppbyggt golv, och det
    finns redan en golvlinje i bilden att mäta till. Rita in den fjärde bygeln. Bildtexten rad 207
    säger dessutom att fönstret "precis klarar alla tre måtten på den fria öppningen"; 0,60 och 0,90
    klarar minimikraven 0,50 och 0,60 med god marginal, och det är bara summan som ligger precis på
    gränsen. Skriv: "Ett fönster på 0,60 meter i bredd och 0,90 i höjd. Bredden och höjden har
    marginal till minimimåtten, men summan landar exakt på 1,50 meter, och det är det villkoret som
    fäller flest fönster."
11. **Sju korsdubbletter mot tre systersidor.** Sjugramssökningen ger, viktigast först:
    - Rad 80 mot `isolera-krypgrund` rad 67: "Därför går den här sidan i den ordning arbetet
      faktiskt ska ske. Först mäter du..." står nästan ordagrant på båda. Löses av krav 6, som
      stryker raden.
    - Rad 88 mot `isolera-krypgrund` rad 91: "är 75 procent relativ luftfuktighet. Relativ
      luftfuktighet är hur mycket vattenånga luften bär..." och "alltså den nivå trä och skivor inte
      bör ligga över". Underlaget lovade att formuleringen var egen. Den är det inte. Skriv om båda
      leden här.
    - Definitionen av relativ luftfuktighet, "hur mycket vattenånga luften bär jämfört med vad den
      skulle kunna bära", står nu på **fem** sidor samtidigt. Systersidan isolera-kallarvagg löser
      det genom att skriva om den ("alltså hälften av den vattenånga luften kan bära vid just den
      temperaturen"). Gör likadant här, med en tredje formulering.
    - Rad 90 mot `fukt-i-kallaren` rad 131: "Villaägarna säger samma sak i praktisk form" och "över
      75 procent under en längre period är". Skriv om ingången.
    - Rad 94 mot `dranera-hus` rad 90: "Testet som skiljer dem åt kostar en rulle tejp".
    - Rad 102 mot `fukt-i-kallaren` rad 107: "En gammal dränering kan fungera i femtio år". Sidan
      vänder visserligen på påståendet och använder villkoret, vilket var rätt tänkt, men satsen är
      ändå ordagrann. Skriv "Villaägarnas byggnadstekniske rådgivare ger en gammal dränering ett
      halvsekel, men han ger den det på ett villkor."
    - Rad 128 mot `dranera-hus` rad 179: "plastmatta med utstansade knoppar som håller ett
      mellanrum mellan". Dräneringssidan äger noppmattan utvändigt, den här sidan mattan under
      golvet; beskrivningen får inte vara densamma.
    Två lättare, som får rättas i samma vända: rad 27 mot `dranera-hus` rad 29 ("det är den enda
    dokumentation som finns på") och rad 38 mot `isolera-krypgrund` rad 146 ("alltså skivor av
    expanderad eller extruderad polystyren"). Rad 148 mot `dranera-hus` rad 165, "Det rådet är vårt
    eget, ingen av de källor vi...", är en husformulering och får stå, men variera den andra gången
    den används på samma pelare.
12. **Kährs-källan pekar på en startsida, och överlappsmåttet saknas.** Källförteckningen rad 65
    till 66 anger `https://www.kahrs.com/sv-se/` som stöd för 0,2 mm, 60 procent och 95 procent.
    En startsida kan inte bära tre tal. Kährs egna dokumentadresser svarar 404, vilket underlaget
    noterade, men läggningsanvisningen för Woodloc 2G ligger läsbar hos Bygghemma på
    `https://img.bygghemma.se/pfiles/kahrs-installationguide-2g__cc46bbfc-28f1-4435-b283-81d849366b8e.pdf`
    och svarar 200. Sätt den adressen, skriv ut i titeln att den är distribuerad av Bygghemma och
    att Kährs egna adresser ligger nere, och lägg till det mått som föll bort i extraktionen:
    folien ska läggas med **minst 200 mm överlapp**. Det hör hemma i rad 126 och i materiallistan
    rad 31, där "Tätningsband till skarvarna" i dag står utan att säga hur mycket som ska överlappa.
13. **kortSvar lovar mer anmälan än brödtexten, och tre punchlines ligger på rad i slutet.**
    Sista meningen i kortSvar säger "en anmälan till kommunen gör det ofta", medan rad 190 säger att
    fyra punkter "kan slå till" och rad 163 att gränsen dras av kommunen. Skriv: "Bygglov krävs
    sällan i en villa. Anmälan krävs så fort du rör bärande delar, brandskyddet, ventilationen eller
    avloppet." Och rad 234, 236 och 238 avslutas alla tre med en poäng ("en dyr förvaringslåda med
    tapet", "det enda som går att göra om nästa år", "börjar lukta källare efter några år"), följt
    av rad 209:s "så är frågan avklarad för alltid". Nio delar lugn, en del lättsam: behåll den
    sista, som är sidans slut, och gör de andra tre raka.

Utan retur, för kännedom: hela regelavsnittet från rad 184 till 205 är omgångens bästa arbete och
går igenom faktakontrollen utan en enda ändring utöver krav 3. Alla tal i kostnadsavsnittet stämmer
mot Byggstarts sida i dag: 20 000 kr i snitt, spannet 15 000 till 26 000, halva summan vid enbart
ytskikt, och enhetspriserna 8 000, 4 500, 4 500, 2 800 och 550 kr. Källraden rad 225 beskriver
projektet bakom talen korrekt. Isolas knopphöjd 5,5 mm och tillverkarens rekommendation av den
mekaniskt ventilerade varianten vid renovering stämmer ordagrant. Fuktcentrums tre grader och
85 procent stämmer ordagrant. Vi i Villa-citaten stämmer allihop, inklusive "att ett golv skulle
kunna ventilera sig självt är en myt" och rådet om ställbara skruvar. Boverkets 75 procent
(BFS 2024:8 7 kap. 1 §), 0,35 liter per sekund och kvadratmeter samt 4,0 liter per sekund och person
(3 kap. 5 §) stämmer ordagrant. Faktarutan rad 130, där två källor får gå emot varandra och
skribenten väljer sida och redovisar nackdelen med sitt val, är precis vad stilguiden vill ha. Rad
148 märker ut ett eget råd utan källa. Rad 199, om att kraven gäller även utan lov och att skadan
följer med huset till nästa köpare, är sidans nyttigaste mening. Båda tabellerna håller tre kolumner
och får "Dra i sidled"-raden automatiskt av hast-pluginet. Alla åtta planerade utgående länkar finns.
Inga produkter, inget band, inga köpknappar.

## 4. Inlänkar som granskaren lagt in

Fyra filer, sex länkar, alla skrivna som meningar i löptext i stilguidens ton. `npm run build` grön
efteråt, 0 fel och 0 varningar.

| Fil | Var | Mål |
|---|---|---|
| `src/content/guider/fukt/fukt-i-kallaren.mdx` | i stycket om invändiga ytskikt, direkt efter "...medan tätningen hör hemma utomhus." | `/grund/isolera-kallarvagg/` |
| `src/content/guider/fukt/fukt-i-kallaren.mdx` | nytt stycke sist i avsnittet "Markfukt, vattnet kommer genom väggen" | `/grund/inreda-kallare/` |
| `src/content/guider/grund/dranera-hus.mdx` | sist i faktarutan "Matta eller skiva, och när jag väljer vilken" | `/grund/isolera-kallarvagg/` |
| `src/content/guider/grund/dranera-hus.mdx` | nytt stycke sist i "Vad du kan göra själv, och var gränsen går" | `/grund/inreda-kallare/` |
| `src/content/kunskap/fukt/luftfuktighet-inomhus.mdx` | direkt efter meningen om källarväggen på 12 grader | `/grund/isolera-kallarvagg/` |
| `src/pages/rakna/kallare.astro` | "Läs vidare", ny post före dräneringsräknaren | `/grund/inreda-kallare/` |

En anmärkning till protokollet. Uppdraget sade "sist i avsnittet om markfukt, efter länken till
dränera huset". Avsnittet fortsätter två stycken efter den länken, om det billiga man gör först och
om krypgrunden, så meningen ligger sist i avsnittet, vilket uppfyller båda leden. Den säger
dessutom vad som tillkommer när källaren ska bli bostad i stället för att bara peka, eftersom
`fukt-i-kallaren` redan har "Du ska inreda källaren till bostad" som en punkt i listan ovanför och
en ren hänvisning hade läst sig som en dubblering.

## 5. Vad hubben visar

`src/content/pelare/grund.mdx` är satt till `utkast: false` och `uppdaterad: 2026-09-20`. Pelaren
har fem publicerade sidor, vilket är precis vad `docs/INNEHALLSARKITEKTUR.md` och DESIGN.md 5.2
kräver för att en hub ska publiceras.

`/grund/` renderar, läst både i dev och i `dist/client/grund/index.html`:

- Gruppetiketten **Utsidan** överst, pelarikonen till vänster om H1, H1 **"Grund och dränering"**,
  och ingressen "Krypgrund, källarvägg, dränering och sättningar. Det som händer under huset och
  sällan syns i tid."
- Raden **"5 sidor · Alla guider om grund och dränering"** med länk till `/guider/grund/`.
- **Hitta felet**, med sin generella rad och två kort: sprickorsidan (Problemguide · Enkel) och
  isolera källarväggen (Kunskap · Mellan). Rätt kort, rätt etiketter.
- **Välj rätt** visas inte, korrekt, eftersom pelaren varken har köpguider, kategorisidor eller
  jämförelser.
- **Gör det själv**, med tre kort: dränera huset, inreda källaren och isolera krypgrunden, alla
  Projektguide · Mellan. Rätt kort.
- **Räkna visas inte**, och det är fel. Se krav 6.1.
- Registret "Alla sidor i pelaren" finns inte, vilket stämmer med att det togs bort 2026-09-17.
- `/amnen/` tar upp pelaren, och sidfotens ämnesspalt gör det också.
- Huvudmenyn tar upp pelaren, men med sex hubbar och inte tre. Se krav 6.2.

Dev-servern är stängd.

## 6. Utanför omgången

1. **Räkna-gruppen är dold på varje pelare utan kategorisida, och det är en bugg i mallen.**
   `src/components/vyer/PelarHub.astro` räknar gruppens storlek så här:
   `const kalkylatorer = KALKYLATORER.filter((k) => k.kategori && kategorier.some((x) => x.id === k.kategori));`
   Den tittar alltså bara på kalkylatorns `kategori` och ignorerar `pelare`. `src/components/ui/Kortgrupp.astro`
   gör tvärtom rätt och har till och med en kommentar om varför båda leden behövs
   ("Daggpunktskalkylatorn pekar inte på någon kategori, och utan det första ledet skulle den aldrig
   synas i en hub"). Resultatet är att `synliga` i PelarHub döljer en grupp som Kortgrupp hade fyllt.
   På `/grund/` gäller det `dranering` och `kallare`, som båda har `pelare: ['grund']`. Kontrollerat:
   `/altan/` och `/inomhus/` saknar Räkna av samma skäl, medan `/fukt/` har gruppen eftersom fukt har
   kategorin luftavfuktare. Teknisk ansvarig får ge utvecklaren samma tvåledade filter i PelarHub
   som i Kortgrupp. Fyra hubbar blir hela när det är gjort.
2. **Huvudmenyns gräns på tre hubbar finns bara i dokumentet.** DESIGN.md avsnitt 5 säger "högst
   tre (`MAX_HUBBAR_I_MENY`, sänkt från fem 2026-09-16)" och att sju poster ryms vid 1024 px.
   Konstanten finns inte någonstans i `src/`. `src/layouts/Bas.astro` bygger `publiceradeHubbar` av
   alla publicerade pelare utan tak, och den byggda sidan visar nu Fasad, Altan, Grund, Väggar, Kök
   och bad och Fukt, plus Alla ämnen, Guider, Räkna själv, Om oss och Kontakt. Elva poster. Menyn
   avviker dessutom från dokumentet på en punkt till: "Så testar vi" står i DESIGN.md men i koden
   står "Om oss" och "Kontakt". Att öppna grundhubben var rätt enligt uppdraget, men det gjorde
   menyn en post längre, och frågan om vilka tre som ska stå kvar är Christians och
   designansvarigs, inte min. Antingen implementeras taket och de övriga hubbarna flyttas under
   Ämnen, eller så skrivs DESIGN.md om efter hur menyn faktiskt ska se ut med sex pelare.
   Jag har inte rört någondera.
3. **Sprickorsidans titel säger fortfarande "i grunden".** Filen och adressen döptes om till
   `sprickor-i-husgrunden` efter förra omgångens krav 2.7.1, men `title` lyder ännu "Sprickor i
   grunden, vad som är normalt och när du ska ringa", och det är den texten som står på
   grundhubbens kort. Huvudfrasen är "sprickor i husgrunden" och den står i seoTitle. Skriv om H1 i
   samma vända som resten av returen på den sidan.
4. **Isover-sidan är fortfarande oläst.** Underlaget till isolera-kallarvagg säger rakt ut att vi
   har skrivit om ettans ämne utan att ha läst ettan, eftersom isover.se svarar 403 mot både
   WebFetch och curl. Det gäller än. Sidan bör öppnas i webbläsare innan publicering, så att vi vet
   att vi inte går emot den utan att veta om det. Samma sak gäller Byggahus sida om att inreda
   källare, som ligger i topp tre på den frasen och svarar 403.
5. **Underlagets uppgift om ettans sakfel går inte att styrka i dag.** Underlaget till
   inreda-kallare skriver att Byggstart har sakfelet "Minst 2,30 meter krävs för godkänd boendeyta".
   Den meningen finns inte på Byggstarts sida i dag; de skriver i stället "Är det för låg takhöjd
   måste det åtgärdas" utan tal. Påståendet står inte i artikeln, så inget behöver rättas, men
   underlagets anmärkning ska inte citeras vidare som om den vore kontrollerad.
6. **`docs/DESIGN.md` avsnitt 5.2 motsäger sig själv.** Brödtexten säger sedan 2026-09-17 att
   hubfilen bara bär frontmatter och att registret längst ner är borttaget, medan ASCII-skissen
   strax under fortfarande visar både "Handskriven inledning" och "H2 Alla sidor i Fukt". Koden
   följer brödtexten. Skissen ska uppdateras, annars skriver nästa agent in en handskriven inledning
   i en hubfil som schemat inte tar emot.
7. **Dräneringssidans mening om 1:20 ska skrivas om.** Underlaget till isolera-kallarvagg påpekar
   att `dranera-hus.mdx` rad 100 säger att 1:20 är vårt eget riktvärde eftersom ingen källa anger
   det med avsändare. Det stämmer inte längre: Rockwool skriver "Markytan ska luta minst 1:20
   (ca 3º) inom 3 m från byggnaden" och Parocs projekteringsstöd anger samma fall med samma
   avstånd. Jag har läst båda i dag och de står där. Riktvärdet ska få sina två avsändare nästa gång
   dräneringssidan öppnas. Jag har inte rört den meningen, eftersom den ligger utanför den här
   omgången.
8. **Delningsbilder.** `public/og/kunskap-isolera-kallarvagg.png` och `public/og/guider-inreda-kallare.png`
   finns och byggdes utan varning. Men de är byggda av de tre skisser som ska ritas om enligt krav
   3.1.3, 3.1.5, 3.2.8 och 3.2.9, och delningsbilden är det första någon ser när en länk delas. Kör
   `npm run delningsbilder` igen efter att skisserna rättats, före commit.
