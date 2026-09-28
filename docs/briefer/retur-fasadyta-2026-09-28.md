# Läsarens retur: fasadräknaren och guiden om att måla om huset, 2026-09-28

Läst som husägare som ska måla om och vill veta hur mycket färg det går åt. Dev-server på port 4410, nu stängd. Jämfört med /rakna/u-varde/, /rakna/kallare/ och /el/tillaggsisolera-vind/.

Lästa vyer av /rakna/fasadyta/: standard (lockpanel, akrylat, ommålning), slät panel, puts (ommålning och rent), tegel, mansard (giltig och med tom brytpunkt), vinkel på mansard, pulpettak, valmat tak, byte av färgtyp (lockpanel, slät panel med slamfärg, puts), slamfärg på slät panel och på lockpanel, skrapat, en strykning, noll fönster och dörrar, 60 fönster samt ogiltiga värden (längd 70, tom längd, nockhöjd "abc", 2,5 fönster). Sedan /fasad/mala-om-huset/ med den inbäddade räknaren.

Inga tankstreck i den synliga texten på någon av sidorna.

## Talen: säger räknaren och guiden samma sak?

| Fall | Guiden (100 m²) | Räknaren (98,2 m²) | Stämmer det? |
|---|---|---|---|
| Fasadyta | "98 kvadratmeter, och jag rundar till 100" | 98,2 m² | Ja, avrundningen står i texten. |
| Lockpanel, akrylat | "34 liter, fyra burkar om 9 liter" | Kort svar: "34 liter, fyra burkar om 9 liter". Beskedet: "Köp 36 liter akrylatfärg i fyra burkar om 9 liter". Raden under: "33,67 liter" | Burkarna stämmer. Men läsaren ser 34, 36 och 33,67 som tre olika "liter" för samma hus. |
| Slät panel, akrylat | "29 liter, tre burkar om 9 liter och en om 2,7" | Kort svar: "28 liter fasadfärg". Beskedet: "Köp 29,7 liter". Raden under: "28,06 liter" | **Nej.** Guiden säger att formuläret har "samma hus ifyllt", men guiden säger 29 och räknarens kortsvar 28. 29 är varken det som går åt (28,06) eller det du köper (29,7). |
| Slamfärg, slät | "33 liter, tre burkar om 10 liter och en om 5" | "Köp 35 liter slamfärg i tre burkar om 10 liter och en om 5 liter", 32,73 går åt | Ja. |
| Slamfärg, lock | "40 liter, fyra burkar om 10" | "Köp 40 liter slamfärg i fyra burkar om 10 liter", 39,28 går åt | Ja. |
| Kronor | Slät panel 7 787 kr (Alcro, 3 × 2 299 + 890), lockpanel 10 780 kr (4 × Beckers 10 l à 2 695) | Räknaren visar inga kronor | Guidens multiplikation stämmer. Men lockpanelen prissätts med Beckers tioliters, medan både guiden och räknaren säger att du köper **fyra burkar om 9 liter**. Med Alcros niolitersburkar hade det blivit 9 196 kr. Spannet 8 000 till 11 000 blandar alltså två märken och två burkstorlekar utan att säga det. |
| Grundfärg vid skrapat | "grundfärgen räcker ungefär lika långt per liter som täckfärgen, så köp efter hur mycket bart trä du fått fram" | Grundfärg över hela fasaden: "19,64 liter till en strykning, två burkar om 9 liter och en om 2,7 liter" | **Nej.** Guiden säger att du köper efter det bara träet, men räknaren lägger grundfärg på hela fasaden. Guidens färgpris på 8 000 till 11 000 täcker inte de 20 litrarna. |
| Täckfärg vid skrapat | "Den skrapade ytan drar dessutom mer färg, för sågat trä suger." | Räknar skrapat med 7 m² per liter, samma som vid ommålning | **Nej.** Guiden säger att det går åt mer, men räknaren ger samma liter. |
| Åtgång per liter | "Beckers Perfekt Fasad räcker till 6 till 8 kvadratmeter per liter" | Regeln: "Där tillverkarna anger ett spann tar jag det lägsta talet". Talet som används är 7. | **Nej.** Läsaren som har läst guiden ser 6 till 8, läser "det lägsta talet" och får 7. |
| Tvåplanshus | "landar kring 200" | FAQ: 199 m², 68 liter, åtta burkar | Ja. |

Resten av guidens räkning har jag gått igenom: nivå tre 525 till 610, rotavdraget i tabellen, ställningen i fem till sju veckor, 13 000 till 16 000, summorna 22 000 till 29 000 och 30 000 till 37 000, samt slamfärgens 2 600 till 2 800. Allt stämmer.

## /rakna/fasadyta/

### Meningar som stoppar läsningen

- "Det ger c 225 mm, räknat från mitten av en lockbräda till mitten av nästa." Ordet "c" förstår ingen husägare, och det står ensamt mitt i en mening.
- "Med två strykningar akrylatfärg, som räcker 7 kvadratmeter per liter, går det åt 34 liter, fyra burkar om 9 liter, medan slät panel klarar sig med 28 liter fasadfärg." Meningen säger först "akrylatfärg" och sedan "fasadfärg" om samma sak, och 34 krockar med de 36 liter som beskedet visar tio centimeter längre ner.
- "Köp 36 liter akrylatfärg i fyra burkar om 9 liter" (kortsvaret säger 34). Beskedet i sig är bra, men ingen mening förklarar att 36 är burkarna och 34 är åtgången.
- "Köp 65,47 liter silikatfärg till putsen". Ingen köper 65,47 liter. Hundradelar i en köpuppmaning låter som ett kalkylark, och samma tal står tre gånger i spalten.
- "Där tillverkarna anger ett spann tar jag det lägsta talet för ditt fall, så att färgen räcker även med den tillverkare som lovar minst. Nordsjö anger 4 till 6 m² per liter när Tinova målas på nytt trä, och där är mitt tal, 6, deras övre kant, så med Tinova på nytt trä kan du behöva mer än jag räknar med." Andra meningen motsäger den första och är för lång att följa. Den står dessutom i standardvyn, där det inte är nytt trä.
- "Akrylatfärg och oljefärg räcker 7 m² per liter och strykning på trä som målats förut och 6 på nytt sågat trä, enligt Alcro Bestå och Beckers Perfekt Oljefärg." Beckers Perfekt Fasad, den färg guiden räknar med, står inte med här. Det lägsta talet för den är 6, inte 7, så regeln ovan ser inte ut att följas.
- "Gör inte det här" följt av "Häll ihop dem i en stor hink innan du börjar, så får hela långsidan samma nyans." Rubriken säger vad jag inte ska göra, men texten säger vad jag ska göra. Stycket visas i nästan varje vy.
- "Tillverkarnas tal för hur långt en liter räcker gäller också per strykning, så en enda blir tunnare än de har tänkt sig." Jag läste den tre gånger. Om talet gäller per strykning blir en strykning precis så tjock som tillverkaren tänkt, bara en gång för lite.
- "På sadeltak är de bredden gånger höjden till nocken, på pulpettak höjden gånger bredden och längden tillsammans, och på valmat tak finns inga." Uttrycket "höjden gånger bredden och längden tillsammans" går att läsa på två sätt.
- "Ytan jag målar gånger antalet strykningar, delat med hur långt en liter räcker, blir litern." Ordet "litern" betyder här antalet liter, och det låter översatt.
- "Pulpettaket stiger 2,14 m över gaveln, med takvinkeln 15,0 grader." Det är oklart vad "över gaveln" betyder, och "15,0 grader" med en decimal ser maskinellt ut. Samma sak med "Omkretsen 36,0 m".
- "Du målar 117,8 m², fasadytan gånger 1,2." I spalten står 1,2 utan förklaring, och i reglerna står det "1,20". Samma tal skrivs på två sätt.
- Antagandetabellen: "B · t; t · (B + L); 0; 2 · ((B + b) / 2 · t1 + b · t2 / 2)". Ingen bokstav förklaras. För en husägare är det brus, och det står i standardvyn där bara sadeltaket gäller.
- "Påslag för spill och bättringar | 0 % | Antagande. Fasadum, färgåtgång vid fasadmålning". Raden kallas antagande och har en källa som säger 10 till 15 procent. Den som bara läser tabellen blir förvirrad.
- "Burkstorlekar för täckfärg och grundfärg, och för slamfärg. Nordsjö Tinovas mellanstora burk är 2,5 liter, lite mindre än 2,7". Här står en reservation i kolumnen "Vad".
- Källistan: "…, 2026-09-28" efter varje källa. Ingenting säger vad datumet betyder. I akrylatvyn står också Falu Rödfärg-burkarna med som källor.
- Skicket: "Färgen sitter, fasaden ska tvättas och lös färg bort". Verbet saknas i sista ledet, och etiketten blir hoppressad.
- Etiketten "Oljealkydfärg" i formuläret heter "oljefärg" i beskedet. Två namn på samma val.

### Räknaren som räknare

- **Kortet i guiden**: "Mät huset runt om och upp till takfoten, så räknar jag ut väggytan med gavlarna och hur många burkar färg den tar." Det går att förstå utan att ha sett sidan. Raden under säger "kalkylatorn" när resten av sajten säger "räknaren".
- **Beskedet** säger vad jag ska göra i alla lägen: "Köp …", "Låt de 98,2 m² tegel vara omålade", "Fråga tillverkaren vad den nya färgen kräver innan du köper till 98,2 m²". Det fungerar bra.
- **Grundfärgen** hamnar utanför beskedet. Rubriken säger "Köp 36 liter", och de 20 litrarna grundfärg står längre ner på en rad utan verb: "Grundfärg 19,64 liter till en strykning, två burkar om 9 liter och en om 2,7 liter." Den som bara läser rubriken köper för lite.
- **Byte av färgtyp**: formuläret frågar efter "Färgen", men det framgår inte om det är färgen som sitter på väggen eller den nya. Med skicket "En annan sorts färg" blir valet tvetydigt, och beskedet svarar generellt: "Sitter det slamfärg där ska den ha slamfärg igen, och gammal oljefärg vill ha grundfärg under en akrylatfärg."
- **Ogiltigt värde**: med längden 70 visas en liten varning, och under den står "Köp 36 liter akrylatfärg i fyra burkar om 9 liter". Då ser det ut som ett svar på mitt hus. Beskedet borde inte säga "Köp" när talen inte är mina.
- **"abc" i nockhöjden** ger "Med den gavelbredden ska höjden till nocken ligga mellan 0,35 och 6,93 meter." Meddelandet säger inte att jag har skrivit bokstäver, och gränser med hundradelar känns godtyckliga.
- Puts: "Burkarna räknar jag inte, för jag har inga säkra storlekar på silikatfärg." Den är ärlig och bra.
- Noll öppningar: "varje fönster du glömmer blir färg som du betalar för och sedan har stående i förrådet." Det är sajtens röst när den är som bäst.

### Människa eller mall

Ingressen, kortsvaret, beskeden och de fyra frågorna låter som en person som vet hur man mäter ett hus. "Det är ytan en målare tar betalt för" och sockelfrågan är riktigt bra. Men "Därför blev svaret så" och antagandetabellen är skrivna för den som byggt räknaren. Där hör jag en revisor som redovisar varje beslut, inte en granne som förklarar, och sidan blir dubbelt så lång som den behöver vara för att svara på frågan i H1.

**Betyg: 3 av 5.** Toppen av sidan skulle jag skicka vidare. Resten får folk att sluta läsa.

## /fasad/mala-om-huset/

### Meningar som stoppar läsningen

- Beskrivningen: "Förarbetet skiljer offerterna åt med tre gånger." Det är inte svenska. Det ska vara "skiljer tre gånger" eller "gör en offert tre gånger dyrare".
- "Färgen kostar 8 000 till 11 000 kronor för två strykningar, och gör du jobbet själv är det ungefär vad du betalar, plus ställningen." Längre ner kostar ställningen 13 000 till 16 000, mer än färgen. Kortsvaret gör kostnaden för att göra det själv mindre än den är.
- "Fråga i stället om fönsterfoder och knutbrädor ingår i priset, för de målas ofta i en annan kulör och tar tid utan att ge kvadratmeter." Det är oklart vad "i stället" syftar på.
- "Ett tvåplanshus med samma bottenplatta har det dubbla på väggarna, samma gavelspetsar och lika många fönster i räkningen, och landar kring 200." Meningen är hoppressad, och "lika många fönster i räkningen" måste läsas två gånger.
- "Slamfärg är billigare i kronor och dyrare i liter." Vändningen fungerar inte. Det som menas är att det går åt fler liter, inte att litern är dyrare, och nästa mening säger att litern är billigare.
- "Nu till frågan ingen prissida bryr sig om men som förstör fler fasader än ett slarvigt förarbete. Vädret." Fragmentet efter punkten är ett bloggtrick, och det är sidans tredje "ingen prissida".
- "Daggen är det som fäller de flesta kvällar." och i FAQ:n "Det är natten som fäller de flesta dagar på hösten". Samma bild två gånger, och "fäller en kväll" är ingen vanlig svenska.
- "Med två timmars torktid ska sista penseldraget ligga fyra timmar före solnedgången." Ett steg saknas: att daggen faller vid solnedgången och att färgen ska vara klibbfri två timmar innan dess.
- "Den räcker lika långt per liter och har samma gräns på 7 grader, men natten måste också klara gränsen." Det står om oljefärgen, men tre avsnitt tidigare står att natten ska klara gränsen för all färg. Ordet "också" gör att meningarna säger emot varandra.
- "Vill du byta typ frågar du tillverkaren av den nya färgen vad den nya färgen kräver under sig, för det är svaret på om du hamnar på nivå tre." "Den nya färgen" står två gånger i samma mening.
- "Är det redan september är en målare som kan sin färg värd pengarna, för hen vet vilka dagar som duger, och du får bara några." Det är oklart vad "och du får bara några" syftar på.
- "Och vet du inte vilken färg som sitter där kostar fel färg ovanpå nivå tre nästa gång." Den här meningen förstod jag inte vid första läsningen. Den är för hoppressad.
- "På en fasad som ska ner till rent trä är arbetet kring 42 000 kronor efter avdrag, och där lönar det sig att ta semester." Två avsnitt senare står "Ring också när färgen ska ner till rent trä på hela huset". Guiden råder mig både att göra det själv och att ringa en målare.
- "Det korta svaret är att du målar med samma typ av färg som fasaden redan har." Det är en formel. Sidan har redan ett kort svar överst.
- "Formuläret här under har samma hus ifyllt." Påståendet stämmer inte helt, eftersom guiden räknar färgen på 100 m² och formuläret på 98,2. Därför blir slät panel 29 liter i guiden och 28 i räknaren.
- "grundfärgen räcker ungefär lika långt per liter som täckfärgen, så köp efter hur mycket bart trä du fått fram" säger emot räknaren, som lägger grundfärg på hela fasaden vid skrapat, se tabellen överst.
- Kronorna för lockpanel räknas med "fyra burkar Beckers" à 10 liter, medan meningen innan och räknaren säger fyra burkar om 9 liter. Bytet av märke och burkstorlek sägs inte.

### Det som är bra

Inledningen om två offerter som skiljer det dubbla "utan att någon av målarna försöker lura dig", "Jag tror inte att någon av dem ljuger", "Det är en sommar", uträkningen av nivå tre och avsnittet "Fallen där jag hade ringt en målare" låter som en människa. Varje kronbelopp går att räkna efter, och det gjorde jag.

### Människa eller mall

Mest människa. Tonen påminner om vindsguiden, med tal från källor, egna räkningar som sägs vara egna och korta klämmar efter långa stycken. Men klämmarna kommer lite för tätt, och tre sakfel mellan avsnitten (semester eller målare, nattgränsen, grundfärgen) gör att jag slutar lita på detaljerna.

**Betyg: 4 av 5.** Jag skulle skicka den till en vän, men först rätta de tre motsägelserna.

## Återkommande mönster

1. **"Ingen X anger/berättar/publicerar …" som sätt att presentera källor.** Det förekommer 5 gånger i guiden och 4 gånger på räknarsidan, men inte en enda gång i vindsguiden. Exempel: "för ingen färgtillverkare anger något tillägg" (guiden), "för ingen färgtillverkare anger ett tillägg för panelen" (räknaren, profil-lock), "men ingen färgtillverkare anger något påslag" (räknaren, spill), "Ingen av dem räknar med ett schablonavdrag" (räknaren, avdrag), "ingen av dem anger hur stor del av fasaden det blir" (räknaren, grundolja), "Ingen av prissidorna berättar hur du får fram ditt kvadratmetertal" (guiden), "frågan ingen prissida bryr sig om" (guiden), "Ingen målerifirma jag hittat publicerar ett pris" (guiden). Efter den tredje hör man en formel i stället för en upptäckt.
2. **Lockbrädornas kanter förklaras sex gånger.** Frasen "lockbrädornas kanter … ska ha färg" står 2 gånger i guiden och 4 gånger på räknarsidan: i kortsvaret, beskedet, "Därför"-listan och regeln, plus antagandetabellen. Den står också i FAQ:n i guiden. Det räcker att säga det en gång per sida och sedan hänvisa.
3. **"Det är min egen räkning" och "räknat fram själv".** Det står 4 gånger i guiden (femtedelen, nivå tre två gånger, tabellens tredje rad) och 1 gång i räknaren. Ärligheten är bra, men upprepad blir den en ritual. Vindsguiden säger det en gång ("resten är min multiplikation").
4. **"lite mer, aldrig mindre" och "lite för mycket färg, aldrig för lite".** Två gånger på räknarsidan (hjälpraden om halvvalm och regeln om burkar). Samma slutkläm.
5. **"sitter" som bild.** 10 gånger i guiden: "Skillnaden sitter i förarbetet", "Här sitter pengarna", "färgen sitter kvar", "samma sorts färg som redan sitter där" och så vidare. Hälften är naturliga, men "sitter i" som förklaring kommer för ofta. Vindsguiden har 3.
6. **"fäller" två gånger** i guiden (brödtext och FAQ). Det är samma ovanliga bild.
7. **Kort kläm efter ett långt stycke.** I guiden: "Här sitter pengarna.", "Från 200 till 600 kronor är tre gånger.", "Det är en sommar.", "Vädret.", "Det är hela förklaringen …". Vindsguiden gör likadant ("Det var det.", "Det är den obehagliga poängen."), så det är sajtens röst. Men fragmentet "Vädret." går över gränsen.
8. **Rubriker byggda som "X, Y och Z" eller "X, apposition".** Fyra av nio H2 i guiden: "Tvätt, skrapning eller rent trä, de tre nivåerna av förarbete", "Gör du det själv betalar du färgen, ställningen och tiden", "Fasadytan räknar du ut med omkrets, höjd och gavelspetsar", "Tvåhundra kronor per kvadratmeter för en välskött fasad, fyrahundra för en eftersatt". Var för sig fungerar de, men tillsammans blir det ett mönster.
9. **Hundradelar och tiondelar överallt i räknaren.** "33,67 liter", "65,47 liter", "36,0 m", "15,0 grader", "19,64 liter". Jämförelsesidan u-värde håller talen på den nivå man läser dem. Här ser det ut som rådata.
10. **Källistan med datumet utan förklaring.** Datumet "2026-09-28" står 13 gånger i rad på räknarsidan, och ingen rad säger vad det betyder.
11. **Tankstreck:** inga, på någon av sidorna.
12. **Bilder:** ingen upprepad bild mellan sidorna. Räknarsidans sidhuvudbild har tom alt, vilket är rätt för dekor, och skissen har en bra bildtext.

## Det viktigaste att rätta

1. Guiden och räknaren motsäger varandra om grundfärgen (bart trä mot hela fasaden), om skrapat trä (mer färg mot samma åtgång) och om "det lägsta talet" (6 till 8 mot 7).
2. Slät panel blir 28 liter i räknarens kortsvar och 29 i guiden, trots att guiden kallar det samma hus. Välj en mening om vad "liter" betyder: åtgång eller att köpa.
3. Vid ett ogiltigt värde ska beskedet inte säga "Köp 36 liter".
4. "Gör inte det här" ska inte stå över ett råd om vad man ska göra.
5. Guiden säger både "ta semester" och "ring en målare" om rent trä.
