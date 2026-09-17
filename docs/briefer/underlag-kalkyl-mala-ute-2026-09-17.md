# Underlag: kan du måla ute i dag?

Hämtat 2026-09-17 av utvecklaren inför verktyg 9 i `docs/VERKTYGSPLAN.md`, alltså `src/lib/kalkyl/mala-ute.ts` och sidan `/rakna/mala-ute/`. Fasadguiden om att måla är inte skriven än, så det här dokumentet är tills vidare den enda faktakällan bakom verktyget. Varje konstant i modulen pekar hit, och varje rad nedan säger **Källa** eller **ANTAGANDE**.

Verktyget räknar inget material. Det svarar på om färgen hinner torka innan daggen faller och om dagen alls duger enligt färgtillverkarnas gränser. Ingen svensk sida räknar det: målarfirmornas bloggar upprepar tillverkarnas gränser i löptext, och ingen av dem tar in nattens temperatur, klockslaget och daggpunkten i samma räkning.

Avsnitt 9 listar vad chefredaktören ska verifiera i webbläsare innan sidan går ut ur utkast.

## 1. Vad som gick att hämta maskinellt

| Sida | Gick att läsa | Vad den gav |
|---|---|---|
| beckers.se, Rätt väder för målning | Ja | Dygnstemperatur och yttemperatur inte under 7 °C, dagg och regn inom ett dygn, sol, fuktkvot 16 % |
| beckers.se, Perfekt Fasad | Ja | Akrylat, klibbfri 1 h, övermålningsbar 4 h vid 23 °C och 50 %, yttemperatur 7 till 25 °C, regn inom 1 h och dagg inom 2 h |
| beckers.se, Perfekt Oljefärg | Ja | Alkyd, klibbfri 2 h, övermålningsbar 6 h, yttemperatur minst 7 °C, fuktkvot 16 %, regn eller dagg inom 1 till 2 h |
| beckers.se, Elit Träolja | Ja | Klibbfri 8 h, övermålningsbar 16 h, yttemperatur 10 till 25 °C, regn inom närmaste dygnet, fuktkvot 16 % |
| beckers.se, Utomhus (tips och råd) | Delvis | Bara rubriken Målningstemperatur och länkar vidare |
| forum.beckers.se, Måla i kyla | Ja | 7 till 10 grader över dygnet, torktiden dubbleras vid cirka 15 grader |
| forum.beckers.se, Torktid vid 5 till 10 grader | Ja | Avråder under 10 grader över dygnets timmar, ingen faktor |
| alcrostudio.se, Måla träfasad | Ja | Yttemperatur inte under 7 °C, dagg inom 1 till 2 h, regn inom 8 h, stark sol, sent på kvällen, fuktkvot under 16 % |
| alcrostudio.se, Måla utomhus (översikten) | Nej, 404 | Inget; undersidan Måla träfasad ligger kvar |
| forum.alcrostudio.se, Måla i kyla | Ja | 7 till 10 grader för yta och luft över dygnet, torktider gäller 23 °C och 50 %, fuktighet förlänger |
| forum.alcrostudio.se, Måla när det är varmt | Ja | Avråder från direkt sol och för varm yta, 20 till 25 grader på avsvalnad yta går bra |
| alcrostudio.se, Bestå Täckfärg | Delvis | Produktsidan hänvisar till faktabladet; talen hämtade hos återförsäljaren Lovely Home |
| alcrostudio.se, Modern Oljefärg | Delvis | Bara att den är vattenburen; talen ligger i faktabladet |
| alcrostudio.se, Uteplats träolja | Delvis | Bara att den är vattenburen; talen ligger i faktabladet |
| alcro.se, produktsidorna | Nej, 301 eller 404 | Allt ligger numera på alcrostudio.se |
| nordsjo.se, Tinova Exterior | Ja | Dammtorr 1 h, övermålningsbar 2 h, inte under 5 °C, inte över 80 % RF, inte i direkt sol |
| nordsjo.se, Tinova Traditional Exterior | Ja | Alkydolja, dammtorr 12 h, övermålningsbar 16 h, inte under 5 °C, inte över 80 % RF, regn eller dagg inom 6 h |
| jotun.com, Demidekk Terrasslasyr | Delvis | Bara "regnsäker efter 1 timme"; daggpunktsregeln ligger i databladet |
| Jotuns datablad Demidekk Ultimate, PDF | Nej, komprimerad PDF | Inget |
| falurodfarg.com, torktid | Ja | Torr på ytan efter cirka en timme, torktiden beror på temperatur, fuktighet och skikttjocklek |
| falurodfarg.com, årstid | Ja | Lägsta dygnstemperatur omkring +5 °C, stabilt dag och natt, torr luft |
| falurodfarg.com, regn efter målning | Ja | Lätt regn skadar sällan när ytan torkat, slagregn får färgen att fälla |
| traguiden.se, fuktkvot och mätning | Ja | Ytfuktkvot högst 16 % vid ytbehandling |
| svenskttra.se, ytbehandling av utvändigt trä | Ja | Ytfuktkvot högst 16 %, akrylat och alkydolja kräver 7 till 25 °C |

Tre saker är värda att veta om tabellen. Alcro flyttade hela katalogen till alcrostudio.se, och produktsidorna där visar inte torktiderna själva utan hänvisar till ett faktablad; talen för Bestå Täckfärg kommer därför från en återförsäljare och ska verifieras. Jotuns datablad är en komprimerad PDF som inte gick att läsa, så regeln om tre grader över daggpunkten står här som obekräftad och används inte i verktyget. Beckers forumsvar om att dubblera torktiden vid 15 grader är det enda tillverkaruttalande med en faktor som gick att hitta.

## 2. Tillverkarnas gränser för utomhusmålning

**Beckers.** Källa: [Rätt väder för målning](https://beckers.se/tips-och-rad/fasad/nar-kan-man-mala-om-utomhus). "Måla inte när det finns risk att dygnstemperaturen och yttemperaturen sjunker under 7 °C." Om natten: "Om det finns risk för frost eller dagg under natten bör du avsluta arbetet så att färgen hinner torka innan kvällskylan kommer." Om regn: "Måla inte när det finns risk för regn och dagg inom det närmaste dygnet." Om sol: "Tänk också på att inte måla i direkt solljus eftersom en alltför varm yta kan påverka utstrykning och torktider negativt." Om virket: "träets fuktkvot får inte vara högre än 16 %." Sidan anger ingen gräns för luftfuktigheten i procent.

Källa: [Beckers forum, Måla i kyla](https://forum.beckers.se/org/beckers/d/mala-i-kyla/). Temperaturen för yta och luft ska inte gå under "7-10 grader" över dygnet. Torktiderna gäller 23 grader och högst 50 procent luftfuktighet, och "Om temperaturen istället är ca 15 grader så får man dubblera torktiden." Högre fuktighet förlänger torktiden ytterligare. Under gränsen kan färgen förbli klibbig, få blåsor och bli flammig, och fryser ytan innan färgen torkat måste den tas bort.

Källa: [Beckers forum, Torktid vid 5 till 10 grader](https://forum.beckers.se/org/beckers/d/torktid-inomhusfarg-vid-malning-5-10-grader/), som `/fukt/luftfuktighet-inomhus/` redan citerar: "Vi avråder från målning om temperatur över dygnets timmar understiger 10 grader." Och: "Låg temperatur i kombination med hög relativ luftfuktighet är inte en bra kombination när färg ska torka." Ingen faktor.

**Alcro.** Källa: [Måla träfasad](https://www.alcrostudio.se/sv-SE/inspiration-rad/mala-utomhus/mala-trafasad). "Temperaturen på ytan får inte understiga +7°C i samband med målning." Om dagg och regn: "Måla inte när det finns risk för dagg inom 1–2 timmar efter avslutad målning, eller risk för regn inom 8 timmar efter avslutad målning." Om sol och kväll: "Undvik att måla i stark solvärme, vid risk för regn eller alltför sent på kvällen." Om virket: "Före målning ska träet vara torrt och ha en fuktkvot under 16 %."

Källa: [Alcro forum, Måla i kyla](https://forum.alcrostudio.se/org/alcro/d/mala-i-kyla-och-temperaturer-under-rekommendation/). "För att den process som sker i färg när den torkar, inte ska förändras /störas så får temperaturen för ytan och luften över dygnet inte understiga 7-10 grader." Och: "De torktider som för våra produkter anges är vid optimal förutsättning dvs 23 grader och max 50% luftfuktighet." Vid cirka 15 grader eller högre fuktighet blir torktiden längre: "Vid högre fuktighet avdunstar mindre fukt från den nymålade ytan och det tar längre tid för färg att torka." Följden av kyla: "Svalare temperaturer kan göra att färgen inte sedan torkar som den ska och förblir klibbig. Även blåsor och missfärgningar kan uppstå och att ytan blir kulörmässigt flammig."

Källa: [Alcro forum, Måla när det är varmt](https://forum.alcrostudio.se/org/alcro/d/mala-nar-det-ar-varmt/). "Oberoende av vilken produkt du målar med så avråder vi från att måla i direkt sol eller på en för varm yta." Och: "20-25 grader på väl avsvalnad yta brukar inte vara något problem. Men vid högre temperaturer än så bör man vara försiktig." Rådet är att "jaga skuggan" och måla de sidor som inte är belysta.

**Nordsjö.** Källa: [Tinova Exterior](https://www.nordsjo.se/sv/produkter/nordsj%C3%B6-tinova-exterior). Måla inte "i direkt solsken, under +5°C eller vid en hög relativ fuktighet (över 80%)". Källa: [Tinova Traditional Exterior](https://www.nordsjo.se/sv/produkter/nordsj%C3%B6-tinova-traditional-exterior), alkydoljebaserad: samma gränser, och "Måla aldrig i direkt solsken eller vid risk för regn eller dagg inom ca 6 timmar efter målning."

**Falu Rödfärg.** Källa: [Kan man måla oavsett årstid](https://falurodfarg.com/vanliga-fragor/malningen/kan-man-mala-med-falu-rodfarg-oavsett-arstid/). "Från det att den lägsta dygnstemperaturen är omkring +5 °C går det bra att måla." Temperaturen ska vara stabil dag och natt, och bästa tiden är "vår, sommar eller tidig höst, när luften är torr och vädret är stabilt". Stark sol kan få färgen att torka innan den sjunkit in i träet.

**Jotun.** Källa: sökträffar på Jotuns datablad för Demidekk anger 5 till 25 °C, högst 80 till 85 procent luftfuktighet och att ytan ska ligga minst 3 grader över daggpunkten under målning och tidig torkning. Databladet gick inte att läsa, så regeln står här som obekräftad och används inte i verktyget. Produktsidan för [Demidekk Terrasslasyr](https://www.jotun.com/se-se/jotun/decorative/exterior/products/demidekk-terrasslasyr) säger bara "regnsäker efter 1 timme".

**Svenskt Trä.** Källa: [Ytbehandling av utvändigt trä](https://www.svenskttra.se/bygg-med-tra/byggande/ytbehandling/). Akrylatfärg: "De kräver en målningstemperatur mellan 7 och 25 °C." Alkydoljefärg: "Den kräver en målningstemperatur mellan 7 och 25 °C."

Sammanställt, i tabellform:

| Tillverkare | Lägsta temperatur | Gäller | Luftfuktighet |
|---|---|---|---|
| Beckers | 7 °C | Dygnet, yta och luft | Ingen procentgräns |
| Alcro | 7 °C | Dygnet, yta och luft | 50 % för databladets torktid |
| Nordsjö | 5 °C | Vid målning | Högst 80 % |
| Falu Rödfärg | 5 °C | Lägsta dygnstemperatur | Torr luft, ingen procentgräns |

Källa: sidorna ovan, hämtade 2026-09-17.

Verktyget räknar med **80 procent** som stopp för luftfuktigheten, alltså Nordsjös gräns. Den är den enda gränsen i procent någon av de fyra anger, och Beckers och Alcro säger samma sak i ord.

## 3. Torktider ur databladen

Alla tal gäller 23 °C och 50 procent relativ luftfuktighet, som databladen anger.

| Färgtyp | Produkt | Klibbfri, h | Övermålningsbar, h |
|---|---|---|---|
| Akrylat | Beckers Perfekt Fasad | 1 | 4 |
| Akrylat | Alcro Bestå Täckfärg | 1 | 3 till 4 |
| Akrylat | Nordsjö Tinova Exterior | 1 (dammtorr) | 2 |
| Oljealkyd | Beckers Perfekt Oljefärg | 2 | 6 |
| Oljealkyd | Nordsjö Tinova Traditional | 12 (dammtorr) | 16 |
| Slamfärg | Falu Rödfärg Original | 1 (torr på ytan) | 24 (genomtorr) |
| Träolja | Beckers Elit Träolja | 8 | 16 |
| Träolja | Alcro Träolja | 8 | 0 |

Källa: [Beckers Perfekt Fasad](https://beckers.se/produkter/perfekt-fasad), [Alcro Bestå Täckfärg hos Lovely Home](https://www.lovelyhome.se/farg/utomhusfarg/fasadfarg/alcro-besta-tackfarg), [Nordsjö Tinova Exterior](https://www.nordsjo.se/sv/produkter/nordsj%C3%B6-tinova-exterior), [Beckers Perfekt Oljefärg](https://beckers.se/produkter/perfekt-oljefarg-0), [Nordsjö Tinova Traditional Exterior](https://www.nordsjo.se/sv/produkter/nordsj%C3%B6-tinova-traditional-exterior), [Falu Rödfärg, torktid](https://falurodfarg.com/vanliga-fragor/malningen/vad-har-falu-rodfarg-for-torktid/), [Beckers Elit Träolja](https://beckers.se/produkter/elit-traolja), Alcro Träolja via sökträff (produktsidan är flyttad).

**Akrylat.** Beckers Perfekt Fasad: "Klibbfri efter 1(h)", "Övermålningsbar efter 4(h)" vid +23 °C och 50 %. "Mellan +7°C och ca +25°C yttemperatur." Bindemedel akrylat. Måla inte "vid risk för regn inom 1 timme eller dagg inom 2 timmar efter målningens avslutande". Verktyget räknar med Beckers tal, klibbfri 1 h och övermålningsbar 4 h, eftersom det är den längsta övermålningstiden av de tre akrylaterna och därför ger mest marginal.

**Oljealkyd.** Beckers Perfekt Oljefärg: "Klibbfri efter 2(h). Övermålningsbar efter 6(h)" vid +23 °C och 50 %, yttemperatur minst +7 °C, fuktkvot högst 16 %, och "Måla inte på solheta ytor eller vid risk för regn eller dagg inom 1-2 timmar efter målningens avslutande". Bindemedlet är alkyd förstärkt med akrylat. Nordsjös rena alkydolja anger dammtorr 12 h och övermålningsbar 16 h. Verktyget räknar med Beckers klibbfri 2 h, och med att hela torktiden till övermålningsbar för en oljefärg sträcker sig över natten, se avsnitt 5.

**Slamfärg.** Falu Rödfärg Original "torkar snabbt och är torr på ytan efter cirka en timme under normala förhållanden", och torktiden påverkas av temperatur, luftfuktighet och skikttjocklek. Det som kan skada är slagregn innan färgen torkat: "Det som kan skapa bekymmer är slagregn, alltså regn som piskar direkt mot väggen med kraft", då fäller pigmentet och rinner. Lätt regn "brukar sällan göra någon skada" när ytan torkat. Falu Rödfärg anger ingen övermålningstid i timmar för Original; söksammanfattningen säger 24 timmar, och verktyget räknar med det.

**Träolja.** Beckers Elit Träolja: "Klibbfri efter 8(h). Övermålningsbar efter 16(h)" vid +23 °C och 50 %, "Mellan +10°C till ca +25°C yttemperatur", "Undvik att olja in ytor vid risk för regn inom det närmaste dygnet", fuktkvot högst 16 %. Alcro Träolja anger också klibbfri 8 timmar och regnfritt det närmaste dygnet, samt att regn inom ett dygn ska torkas av med trasa för att undvika vita fläckar.

**Regn efter målning**, per färgtyp, som databladen anger det:

| Färgtyp | Tål regn efter | Källa |
|---|---|---|
| Akrylat | 1 h (Beckers), 8 h (Alcro) | Beckers Perfekt Fasad, Alcro Måla träfasad |
| Oljealkyd | 1 till 2 h (Beckers), 6 h (Nordsjö) | Beckers Perfekt Oljefärg, Nordsjö Tinova Traditional |
| Slamfärg | När ytan torkat, cirka 1 h | Falu Rödfärg, regn efter målning |
| Träolja | 24 h | Beckers Elit Träolja, Alcro Träolja |

Källa: sidorna ovan, hämtade 2026-09-17. Verktyget visar de här talen som upplysning, men stoppar dagen när regn väntas inom ett dygn oavsett färgtyp, eftersom Beckers råd om rätt väder säger just "det närmaste dygnet" och läsaren inte vet på timmen när regnet kommer.

## 4. Fuktkvot i virket

Källa: [TräGuiden, fuktkvot och mätning](https://www.traguiden.se/om-tra/byggfysik/fukt/fukt/fuktkvot-och-matning/): "Ytfuktkvoten får vara högst 18 % vid inbyggnad och högst 16 % vid ytbehandling." Källa: [Svenskt Trä, ytbehandling](https://www.svenskttra.se/bygg-med-tra/byggande/ytbehandling/): virke som ska målas på byggarbetsplatsen ska "ha en ytfuktkvot på högst 16 %". Alcro och Beckers anger samma tal på sina fasadsidor, se avsnitt 2. Talet står redan i `/fukt/luftfuktighet-inomhus/` med Svenskt Trä, TräGuiden och Alcro som källor.

Verktyget kan inte mäta fuktkvoten, så gränsen står i "Gör inte det här" med rådet att mäta med resistansmätare, som luftfuktighetsartikeln beskriver.

## 5. Torktiden i kyla och fukt

**Källa för temperaturen.** Beckers forum, Måla i kyla: torktiderna gäller 23 grader och högst 50 procent, och "Om temperaturen istället är ca 15 grader så får man dubblera torktiden." Alcro säger samma sak i ord utan faktor. En fördubbling från 23 till 15 grader är en fördubbling per 8 grader.

**ANTAGANDE: att fördubblingen fortsätter per 8 grader hela vägen ner.** Beckers ger en punkt, inte en kurva. Vi räknar torktiden som databladets tal gånger 2 upphöjt till (23 minus temperaturen) delat med 8, och ingen förkortning över 23 grader. Det ger faktorn 2 vid 15 grader, 3,1 vid 10 grader och 4,8 vid 5 grader. Regeln är rimlig av två skäl: filmbildning i en vattenburen färg går genom avdunstning, och avdunstningshastigheten faller ungefär exponentiellt med temperaturen eftersom mättnadsångtrycket gör det (samma Magnus-formel som daggpunkten räknas med); och Beckers punkt ligger på kurvan. Uppdraget föreslog fördubbling per 10 grader; vi valde 8 eftersom det är det tal tillverkaren faktiskt gav. Regeln är vår, inte tillverkarens, och sidan säger det.

**ANTAGANDE: plus hälften över 70 procent luftfuktighet.** Beckers och Alcro skriver båda att fuktig luft förlänger torktiden, men ingen anger en faktor. Vi lägger på 50 procent när luftfuktigheten är över 70 procent, och ingenting under. Skälet till just 70 är att databladets 50 procent är "max", att tillverkarna själva talar om längre torktid "vid högre fuktighet" utan tal, och att 80 procent redan är stopp. Faktorn 1,5 är ett runt tal som ligger mellan ingen påverkan och den fördubbling temperaturen ger; Alcros och Beckers formuleringar gör inte skillnad större än så. Regeln är vår, och sidan säger det.

Exempel på vad reglerna ger för Beckers Perfekt Fasad, klibbfri 1 h och övermålningsbar 4 h i databladet:

| Väder | Faktor | Klibbfri, h | Övermålningsbar, h |
|---|---|---|---|
| 23 °C och 50 % | 1,0 | 1,0 | 4,0 |
| 15 °C och 65 % | 2,0 | 2,0 | 8,0 |
| 15 °C och 75 % | 3,0 | 3,0 | 12,0 |
| 10 °C och 65 % | 3,1 | 3,1 | 12,3 |
| 5 °C och 65 % | 4,8 | 4,8 | 19,0 |

Källa: Beckers tal i databladet, vår regel för omräkningen.

## 6. Daggen

**Källa för daggpunkten.** Magnus-formeln med Alduchov och Eskridges konstanter efter Lawrence 2005, samma konstanter som `src/lib/kalkyl/daggpunkt.ts` och tabellerna i `/fukt/luftfuktighet-inomhus/`. Verktyget kopierar konstanterna med samma källkommentar.

**ANTAGANDE: daggpunkten håller sig genom kvällen.** Daggpunkten följer vattnet i luften, inte temperaturen, så när samma luftmassa ligger kvar över kvällen behåller den sin daggpunkt medan temperaturen sjunker. Byter vädret luftmassa gäller inte antagandet, och sidan säger det.

**ANTAGANDE: en yta under klar himmel ligger 2 grader under luften på kvällen.** Ytan strålar mot en klar natthimmel och blir kallare än luften intill, och det är därför dagg och rimfrost bildas på bilar och tak när termometern visar plusgrader. Talet 2 grader är vårt. Efter solnedgången ligger alla ytor i skugga, så avdraget görs oavsett om läsaren målade i sol eller skugga; valet sol eller skugga styr bara varningen om varm yta under dagen.

**Källa för "i god tid".** Beckers Perfekt Fasad: inte "dagg inom 2 timmar efter målningens avslutande". Alcro Måla träfasad: inte "dagg inom 1–2 timmar efter avslutad målning". Verktyget räknar med 2 timmar, alltså den längre av de två. Senaste klockslaget att sluta måla är solnedgången minus 2 timmar minus torktiden till klibbfri vid dagens väder. Solnedgången läser läsaren i väderappen; verktyget gissar inte datum.

## 7. Reglerna, i den ordning verktyget prövar dem

| Regel | Slår in när | Utfall | Källa |
|---|---|---|---|
| Temperaturen nu | Under färgens gräns | Vänta | Beckers, Alcro, Falu Rödfärg, Beckers Elit |
| Luftfuktigheten | Över 80 % | Vänta | Nordsjö |
| Natten | Lägsta under färgens gräns och färgen torkar över natten | Vänta | Beckers och Alcro forum |
| Natten, akrylat torr före solnedgång | Lägsta under gränsen | Varning | ANTAGANDE, se nedan |
| För sent på dagen | Start efter senaste sluttid | Vänta | Alcro, Beckers |
| Daggen | Ytan når daggpunkten i natt | Sluta senast kl X | Beckers, Alcro, Magnus |
| Regn | Väntas inom ett dygn | Vänta | Beckers, Rätt väder |
| Sol på varm yta | Ytan är i sol | Varning | Alcro forum, Beckers |

**ANTAGANDE: en akrylat som blir övermålningsbar före solnedgången får passera en kall natt, med varning.** Beckers och Alcro skriver att gränsen gäller dygnet, och den regeln följer verktyget för oljealkyd, slamfärg och träolja, vars torktid till övermålningsbar alltid sträcker sig över natten (oljefärgen härdar med syre i ett dygn eller mer, och verktyget räknar därför med minst 24 timmar för den). För en akrylat som redan bildat film före kvällen är risken en annan, och verktyget låter dagen passera men skriver ut att tillverkarna vill ha gränsen hela dygnet. Det är vår tolkning.

## 8. Konstantlistan, som den ska stå i modulen

| Konstant | Värde | Grund |
|---|---|---|
| `MAGNUS_A_HPA`, `MAGNUS_B`, `MAGNUS_C` | 6,1094, 17,625, 243,04 | Källa, Lawrence 2005 |
| `RF_STOPP_PROCENT` | 80 | Källa, Nordsjö |
| `DAGG_MARGINAL_H` | 2 | Källa, Beckers Perfekt Fasad och Alcro |
| `YTAVDRAG_NATT_C` | 2 | Antagande |
| `TORKTID_REFERENS_C` och `TORKTID_REFERENS_RF` | 23 och 50 | Källa, alla datablad |
| `FORDUBBLING_PER_C` | 8 | Källa, Beckers forum (punkten); antagande att kurvan fortsätter |
| `FUKT_GRANS_RF` och `FUKT_FAKTOR` | 70 och 1,5 | Antagande |
| `OLJEFARG_MINST_H` | 24 | Antagande |
| `FARGER.akrylat` | min 7 °C, klibbfri 1 h, övermålningsbar 4 h, regn 1 h | Källa, Beckers Perfekt Fasad |
| `FARGER.oljealkyd` | min 7 °C, klibbfri 2 h, övermålningsbar 6 h, regn 2 h | Källa, Beckers Perfekt Oljefärg |
| `FARGER.slamfarg` | min 5 °C, klibbfri 1 h, övermålningsbar 24 h, regn 1 h | Källa, Falu Rödfärg |
| `FARGER.traolja` | min 10 °C, klibbfri 8 h, övermålningsbar 16 h, regn 24 h | Källa, Beckers Elit Träolja |
| `FUKTKVOT_MAX_PROCENT` | 16 | Källa, TräGuiden och Svenskt Trä |

## 9. Vad chefredaktören verifierar i webbläsare

1. **Alcro Bestå Täckfärg.** Talen klibbfri 1 h och övermålningsbar 3 till 4 h kommer från återförsäljaren Lovely Home, inte från Alcros faktablad. Öppna faktabladet på alcrostudio.se och bekräfta talen och yttemperaturen +7 °C.
2. **Alcro Träolja.** Produktsidan är flyttad och talen (klibbfri 8 h, regn inom ett dygn, fuktkvot 16 %) kommer från sökträffar. Öppna faktabladet för Alcro Träolja eller Uteplats och bekräfta.
3. **Falu Rödfärg Original, 24 timmar.** Sidan om torktid säger "torr på ytan efter cirka en timme"; talet 24 timmar till genomtorr kommer ur en sökträff på samma sida. Bekräfta att det står så, annars byts `overmalningsbarH` för slamfärg.
4. **Jotuns daggpunktsregel.** Databladet för Demidekk Ultimate (PDF hos Färghem) ska enligt sökträffen säga att ytan ska ligga minst 3 grader över daggpunkten under målning och tidig torkning. Går den att bekräfta kan regeln läggas in som en femte källa i antagandetabellen och ersätta vårt ytavdrag på 2 grader med en tillverkares marginal.
5. **Beckers fördubbling vid 15 grader.** Citatet "Om temperaturen istället är ca 15 grader så får man dubblera torktiden" kommer ur forumsvaret Måla i kyla. Bekräfta ordalydelsen i webbläsaren, eftersom hela omräkningen vilar på den punkten.
6. **Beckers Perfekt Fasad, regn inom 1 timme.** Databladet säger regn inom 1 timme och dagg inom 2 timmar. Proffsmagasinets guide säger regnsäker efter 45 minuter. Bekräfta vilket som står i det aktuella databladet.

Punkt 5 är den enda som ändrar ett tal läsaren ser direkt i svaret. Tills den är gjord står omräkningen i antagandetabellen med Beckers som källa för punkten och oss som källa för kurvan.
