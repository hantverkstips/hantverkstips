# Tre designriktningar för hantverkstips.se

Skrivet 2026-09-15 av designansvarig, efter att första designomgången (docs/DESIGN.md) underkänts. Christians omdöme var att sajten såg ut som en åtta år gammal WordPress-sajt, utan ikoner, utan egna former, utan något som bygger ett varumärke, och att den var helt byggd runt affiliate. Det omdömet är riktigt. DESIGN.md är ett bra regelverk för typografi, avstånd och komponenter, men det svarar inte på frågan vem som pratar. Det här dokumentet gör det, tre gånger.

Varje riktning är ett eget svar på frågan "vad är Hantverkstips för sorts avsändare". De är inte tre nyanser av samma sak. En kunskapshub om hus, bygge och renovering kan vara en erfaren snickares anteckningsbok, en ritning från någon som mäter innan hen tycker, eller ett byggmagasin med stora rubriker. Alla tre klarar affiliatereglerna (reklammärkning, `/go/`, ärliga köpknappar), och i alla tre är produkten en gäst i texten, inte värden.

Till varje riktning finns riktiga tillgångar i `src/assets/brand/riktning-1/`, `riktning-2/` och `riktning-3/`: ordmärke, symbol, 16 ikoner som sprite, en situationsillustration av en källare med fukt, och ett mönster. De är handskrivna SVG:er, validerade och renderade i webbläsare innan de lämnades.

## Vad som gäller oavsett riktning

Mobil först, 375 px. Kontrast enligt WCAG AA på all text. Alla färger som tokens i `global.css`, inga andra. Två typsnittsfiler i woff2, latin-subset, var och en under 60 kB, self-hostade och förladdade. Inga stockfoton. Illustrationer och diagram är egna, i riktningens stil, och de är sajtens huvudbilder tills egna foton finns. Ikoner får finnas i gränssnitt och som pelarmarkörer, aldrig som dekoration framför varje rubrik. Förbudslistan i DESIGN.md avsnitt 8 gäller fortfarande, utom punkten om ikoner som lättas upp enligt varje riktnings ikonsystem.

Typsnittens filstorlekar nedan är uppskattningar för Google Fonts latin-subset i woff2. Teknisk ansvarig verifierar vid hämtning och har veto.

## Riktning 1. Anteckningsboken

Känslan är en snickare med tjugo år i yrket som ritar upp problemet på ett block vid köksbordet, med snickarpennan i handen.

### Varumärkesidé

Ordmärket är "Hantverkstips" i en slabserif med ett handdraget pennstreck under, som när man stryker under det viktiga i sin egen anteckning. Symbolen är en tumstock vikt till ett H. Tumstocken är det mest svenska verktyget som finns, alla känner igen den, och den säger både "mäta" och "snickare" utan att säga "butik". Tonaliteten i text är precis den stilguiden redan beskriver: jag-form när det är erfarenhet, du-tilltal, otålig med dåliga produkter. Den här riktningen är den där text och form säger samma sak.

### Typografi

| Roll | Typsnitt | Vikt | Filstorlek, uppskattad |
|---|---|---|---|
| Rubriker, ordmärke | Zilla Slab | 600 | 25 kB |
| Brödtext, gränssnitt, tabeller | Atkinson Hyperlegible | 400 och 700 | 17 kB per fil |
| Handskrift i illustrationer | Caveat | 500 | ingen webbfont, konverteras till banor vid bygget |

Zilla Slab är en slabserif med rundade, vänliga former som ändå håller ihop på 30 px i en rubrik. En slab har samma karaktär som bokstäverna på en byggarbetsplats: stadig, lite grov, aldrig elegant på ett sätt som skulle kännas falskt här. Atkinson Hyperlegible är ritat för att vara maximalt läsbart, med tydlig skillnad mellan 1, l och I, vilket vi behöver i tabeller med mätvärden. Det är också ett typsnitt nästan ingen svensk sajt använder, så det bidrar till igenkänning. Caveat används enbart som handskrift i illustrationer och kalkylatorernas "anteckningar" och skickas aldrig som font till klienten. Tre filer blir totalt runt 60 kB, alltså samma budget som första omgången.

### Färgsystem

| Token | Hex | Används till |
|---|---|---|
| `papper` | `#f5efe3` | Sidbakgrund, varmare än första omgångens |
| `papper-2` | `#ebe2cf` | Faktarutor, tabellhuvud, reklamband |
| `linje` | `#c9bca3` | Linjerat papper, avdelare, ramar. Bara dekorativt |
| `blyerts` | `#2a2521` | Text, illustrationernas linjer, sidfot |
| `blyerts-2` | `#625a50` | Sekundär text, skraffering, bildtexter |
| `penna` | `#ad3519` | Snickarpennan. Länkar, knappar, understrykningar, ringar i illustrationer |
| `tumstock` | `#e8b830` | Överstrykning bakom nyckeltal, symbolen, markerat i tabell |
| `ok` | `#2e6b3b` | Bäst i raden, giltig indata |
| `varning` | `#8c5300` | Varningsrutor, ogiltig indata |

Kontrast, verifierad med WCAG-formeln: blyerts på papper 13,24, på papper-2 11,78. Blyerts-2 på papper 5,92, på papper-2 5,27. Penna som text på papper 5,56, på papper-2 4,94. Papper som text på penna (knapp) 5,56. Blyerts på tumstock 8,18. Ok 5,59 och varning 5,47 på papper. Linje på papper 1,64, därför bara dekorativ. Allt över 4,5.

Färgen bär varumärket så här. Papperet är alltid varmt, aldrig vitt, och det linjerade mönstret skymtar i faktarutor och bakom kalkylatorer. Snickarpennan är den enda färg som "skriver" på sidan: den understryker, ringar in och pekar, och därför är det också den som är länk och knapp. Tumstocksgult är överstrykningspennan: det lägger sig bakom ett tal som ska synas ("12 liter per dygn"), aldrig bakom en hel rad och aldrig som knapp. Två färger med varsin roll, en som skriver och en som markerar, är hela systemet.

### Ikonsystem

Linjeikoner, 1,75 px, runda ändar och hörn, 24 px grid med 2,5 px marginal. Det som gör dem egna är att långa linjer har ett lätt darr (svaga kurvor i stället för raka linjer) och att hörn skjuter över en aning, som blyerts. Ingen fyllning.

De 16 ikonerna: fukt (droppe), altan (trall med räcke), tak (sadeltak med skorsten), grund (markyta med sula), isolering (regel med sicksack), verktyg (hammare), el (blixt), kalkylator, meny, stäng, sök, pil höger, extern länk, varning, info, check. Pelarikonerna används på kategorisidor, i menyn och i brödsmulor. Gränssnittsikonerna alltid med textalternativ.

### Illustrationsstil

Blyertsskiss på linjerat papper. Huset ritas i genomskärning med en linjebredd (2 px blyerts), marken skrafferas med korta snedstreck i blyerts-2, och allt som handlar om problemet ritas med snickarpennan: pilarna där fukten kommer in, dropparna, en ring runt det våta hörnet. Anteckningar i handskrift (Caveat) förklarar i samma ton som brödtexten: "markfukt trycker in genom väggen", "ingen dränering sedan 1971". Nyckeltalet ("78 % RF i augusti") får en gul överstrykning. Inga människor, ingen skuggning. Altanen ritas som en snickares egen skiss med mått på reglarna, taket som en takstol med vinkeln noterad.

### Signaturelement

Det röda pennstrecket. Det ligger under ordmärket, under H2-rubriker (handdraget, inte rakt), som ring runt det viktiga i illustrationer och som understrykning på länkar. Man känner igen sajten på strecket och på det linjerade papperet.

### Layoutprincip

Startsidan är en uppslagen anteckningsbok: en rubrik i Zilla Slab som är ett påstående, sedan en handskissad illustration av säsongens problem (källaren i september, altanen i april) med länk till guiden och kalkylatorn. Under den sju pelare som en lodrät lista med ikon, namn och en rad, sedan senaste guider utan bilder. Bäst i test-listan ligger sist, som en anteckning i marginalen, inte som huvudsak.

Artikelsidan har rubrik, ingress och en faktaruta "Kort svar" med pennstreck till vänster, sedan illustrationen i full bredd på mobil. Löptexten är bred nog för 70 tecken, faktarutor ligger på linjerat papper-2, och produktkort ser ut som inklistrade urklipp med 1 px ram. Köpknappen är penna-röd med papper-text och ser ut som en understruken uppmaning, inte som en butiksknapp.

### Avvägning

Riktningen är bäst på förtroende. Den ser ut som en person, inte som en sajt, och den gör det svårt att misstänka affiliate ens på en bäst i test-sida. Den passar husägaren med ett problem, som är vår första målgrupp. Risken är att handritat blir gulligt om det görs slarvigt, och att det är den svåraste stilen att hålla konsekvent när tio agenter producerar illustrationer: darr och överskjut måste följa regler, annars ser det ut som tio olika händer. Den riskerar också att kännas för mjuk för hantverkaren som jämför specifikationer.

## Riktning 2. Ritningen

Känslan är en konstruktör som mäter innan hen tycker, och som visar sina mått så att du kan kontrollera dem.

### Varumärkesidé

Ordmärket är "Hantverkstips" ritat som ritningsbokstäver, enkellinje med runda ändar, i stil med ISO 3098 (bokstäverna på tekniska ritningar). Det är helt egna banor, inget typsnitt. Under ordet en måttlinje med pilar, som om ordet vore måttsatt. Symbolen är ett H där tvärstrecket är en måttlinje. Tonaliteten i text är fortfarande stilguidens, men med tyngdpunkt på siffror med källa: "vi mätte 11,2 liter per dygn vid 20 grader, tillverkaren uppger 20". Sajten är den som visar sitt underlag.

### Typografi

| Roll | Typsnitt | Vikt | Filstorlek, uppskattad |
|---|---|---|---|
| Rubriker, etiketter, mått i illustrationer | Barlow Semi Condensed | 600 | 20 kB |
| Brödtext, gränssnitt, tabeller | IBM Plex Sans (variabel) | 400 till 700 | 30,2 kB |

Barlow är ritat med DIN-bokstäverna som förlaga, alltså vägskyltar och tekniska ritningar, och den halvkondenserade varianten ger rubriker som är höga och täta utan att bli smala. Den ser ut som text i en namnruta. IBM Plex Sans behålls från första omgången av samma skäl som då: tabellsiffror, tydlig 1/l/I, ritat för tekniskt innehåll. Skillnaden mot första omgången är att serifen försvinner. Tidningskänslan var fel svar; ritningskänslan är rätt. Två filer, runt 50 kB.

### Färgsystem

| Token | Hex | Används till |
|---|---|---|
| `kalk` | `#f4f2ec` | Sidbakgrund, kalkerpapper, varmt men inte gult |
| `kalk-2` | `#e9e6dd` | Faktarutor, tabellhuvud, reklamband |
| `rutnat` | `#cfd6da` | Rutnätet, avdelare, ramar. Bara dekorativt |
| `blaeck` | `#1e2a38` | Brödtext, mörk sidfot |
| `ritblaeck` | `#1c4a80` | Rubriker, ordmärke, ikoner, alla ritade linjer |
| `blaeck-2` | `#55637a` | Sekundär text, bildtexter, förutsättningar under resultat |
| `matt` | `#b83015` | Måttlinjer, pilar, länkar, knappar |
| `ok` | `#1f6f46` | Bäst i raden, giltig indata |
| `varning` | `#9a5a00` | Varningsrutor, ogiltig indata |

Kontrast, verifierad: blaeck på kalk 13,0, på kalk-2 11,66. Ritblaeck på kalk 8,01, på kalk-2 7,19. Blaeck-2 på kalk 5,43, på kalk-2 4,87. Mått som text på kalk 5,40, på kalk-2 4,85. Vit på mått (knapp) 6,05. Vit på ritblaeck 8,97 och kalk på ritblaeck 8,01 (mörka block). Ok 5,48 och varning 4,89 på kalk. Rutnät på kalk 1,31, bara dekorativt. Allt över 4,5.

Färgen bär varumärket så här. Ritbläcket är den färg som ritar: rubriker, ikoner, diagram, illustrationernas konturer, alla i samma blå. Brödtexten är nästan svart så att den skiljer sig från det ritade. Måttrött är färgen för det som mäts och det som ska göras. På en ritning är måttlinjerna det man tittar på först, och på sajten är det samma färg som visar mätvärdet i ett diagram, pilen i en illustration och köpknappen. Den kopplingen, att handling och mått är samma färg, är själva idén: du klickar på det du kan kontrollera.

### Ikonsystem

Linjeikoner, 1,5 px, raka ändar, skarpa hörn, 24 px grid med 2 px marginal och geometri snappad till hela pixlar. Pelarikonerna har ett ritningsdrag: grunden har markskraffering, fukten en vattenlinje, verktyget är ett vattenpass med libell. Gränssnittsikonerna är strikt geometriska.

De 16 ikonerna: fukt (droppe med vattenlinje), altan (trall i sektion med räcke), tak (sadeltak med skorsten), grund (sula med skraffering), isolering (regel med sicksack), verktyg (vattenpass), el (blixt), kalkylator, meny, stäng, sök, pil höger, extern länk, varning, info, check.

### Illustrationsstil

Sektionsritning på kalkerpapper med rutnät. Mark skrafferas i 45 grader, betong i motsatt riktning, tätare. Allt ritas i ritblått med en linjebredd, och det som handlar om problemet ritas i måttrött: pilar med fyllda spetsar där fukten kommer in, droppar på insidan. Måttlinjer med snedstreck som ändmarkering (ritningskonvention) anger takhöjd, bredd och väggtjocklek. Etiketter i versaler i Barlow. En namnruta i hörnet anger sajt, blad och skala. Nyckeltalet ("78 % RF") står stort i ritblått mitt i rummet. Samma regler för altan (plan och sektion med regelavstånd) och tak (takstol med lutning i grader).

### Signaturelement

Måttlinjen. Den ligger under ordmärket, ramar in kalkylatorresultat ("minst 12 liter per dygn" mellan två snedstreck), markerar mätvärden i diagram och sitter i varje illustration. Tillsammans med rutnätet, som skymtar i faktarutor och bakom kalkylatorer, känns sajten igen på tre sekunder.

### Layoutprincip

Startsidan är ett ritningsblad: en tunn ram, en namnruta med ordmärket och datum överst, sedan en rubrik som är ett påstående och säsongens problem som sektionsritning i full bredd med länk till guide och kalkylator. Pelarna visas som ett rutnät av sju rutor med ikon och namn, inte tre kolumner utan en tabellaktig lista. Bäst i test ligger som en tabell med mätvärden, längre ner.

Artikelsidan börjar med rubrik, ingress och "Kort svar" som en måttsatt faktaruta med siffran i ritblått. Illustrationen ligger direkt under, med rutnät. Löptexten är nästan svart på kalk, diagram och tabeller får gå ut till full bredd och ritas i ritblått med måttrött för det texten handlar om. Produktkort ser ut som specifikationsrutor, med mätvärden i tabellsiffror, och köpknappen är måttröd med vit text.

### Avvägning

Riktningen är bäst på trovärdighet inför den som jämför, alltså målgrupp två och tre, och den är den som är lättast att producera konsekvent: allt är geometri, mått och regler, vilket är exakt vad kodagenter är bra på. Diagram, illustrationer och ikoner följer samma linjebredd och samma två färger, så nya tillgångar ser ut som de gamla utan att någon behöver "känna" stilen. Den bygger dessutom vidare på det som redan finns (Plex, tokens, komponenterna i DESIGN.md), så mycket arbete räddas. Risken är kyla. En ritning är inte en kompis, och husägaren med ett fuktproblem vill ha en kompis. Det motverkas med det varma kalkerpapperet i stället för vitt, med handfasta etiketter i illustrationerna och med att stilguidens röst inte ändras en millimeter.

## Riktning 3. Magasinet

Känslan är ett byggmagasin på ett fikabord i en verkstad: stora rubriker, svart och gult, en siffra som fyller halva sidan.

### Varumärkesidé

Ordmärket är "HANTVERKSTIPS" i versaler i en tung svensk grotesk, med en symbol till vänster: en svart kvadrat med två vita stolpar och en gul bjälke, ett H byggt som en portal. Bjälken är varumärket. Tonaliteten i text är rak och kort, rubriker som tar ställning ("Tystast i testet, dyrast i testet"), och det tillåts vara lite kaxigare än de andra två. Stilguiden gäller, men den här riktningen använder dess otålighet mer.

### Typografi

| Roll | Typsnitt | Vikt | Filstorlek, uppskattad |
|---|---|---|---|
| Rubriker, ordmärke, stora siffror, etiketter | Familjen Grotesk (variabel) | 400 till 700 | 30 kB |
| Brödtext, tabeller | Source Serif 4 | 400 | 18 kB |

Familjen Grotesk är ritat i Stockholm och är den enda grotesken på Google Fonts med tydlig svensk avsändare, vilket är en berättelse i sig. Den har en tyngd i 700 som fungerar för rubriker på 36 px och uppåt och för tal på 64 px. Source Serif 4 i brödtexten ger magasinets kontrast mellan svart grotesk och lugn serif, och den har tabellsiffror. Tabeller sätts i serifen, stora resultat i grotesken. Två filer, runt 50 kB.

### Färgsystem

| Token | Hex | Används till |
|---|---|---|
| `vit` | `#ffffff` | Sidbakgrund |
| `grus` | `#efeeea` | Faktarutor, tabellhuvud, husets fasad i illustrationer |
| `linje` | `#d9d7d1` | Avdelare, ramar. Bara dekorativt |
| `svart` | `#111111` | Text, rubriker, färgblock, mark i illustrationer |
| `svart-2` | `#4a4a48` | Sekundär text, bildtexter |
| `gul` | `#f5c400` | Bjälken. Färgblock bakom rubriker, kalkylatorresultat, källaren i illustrationer |
| `signal` | `#c62914` | Länkar, köpknappar, pilar i illustrationer |
| `skog` | `#1c5c3c` | Bäst i raden, giltig indata |
| `varning` | `#8a5200` | Varningsrutor, ogiltig indata |

Kontrast, verifierad: svart på vit 18,88, på grus 16,26, på gul 11,49. Svart-2 på vit 8,88, på grus 7,65. Signal som text på vit 5,63, på grus 4,85. Vit på signal (knapp) 5,63. Vit på svart 18,88, gul på svart 11,49 (mörka block). Skog på vit 7,94, vit på skog 7,94. Varning på vit 6,39. Linje på vit 1,44, bara dekorativt. Allt över 4,5.

Färgen bär varumärket så här. Svart och gult är byggets färger: varselband, bjälkar, maskiner. Gult är aldrig en liten accent utan alltid ett block med svart text i, och det block som är gult är sidans svar: kalkylatorns resultat, det korta svaret, rekommendationen. Svart block med vit text är sajtens egen röst (rubrikrad, sidfot, etikett på illustrationer). Signalrött är det enda som pekar och det enda man klickar på. Tre roller, tre färger, inga gradienter, inga mellantoner utom grus.

### Ikonsystem

Fyllda former, raka hörn, 24 px grid med 2 px marginal. Pelarikonerna står på en gul sockel (2 × 20 × 3 px) som är bjälken i miniatyr; gränssnittsikonerna är enfärgade. Sök och check ritas med 3 px linje och raka ändar så att de väger lika mycket som de fyllda.

De 16 ikonerna: fukt (fylld droppe), altan (trall med räcke), tak (hus med utskuren dörr), grund (sula), isolering (stolpar med sicksack), verktyg (hammare), el (blixt), kalkylator (med utskurna tangenter), meny, stäng, sök, pil höger (fylld pil), extern länk, varning (utskuret utropstecken), info, check.

### Illustrationsstil

Platta färgfält utan konturer. Marken är svart, huset grus med svart tak, källaren ett gult block, och fukten röda fyllda pilar och droppar. En rubrikrad i svart med vit versaltext överst ("KÄLLARE I GENOMSKÄRNING") och nyckeltalet ("78 %") stort i svart inuti det gula rummet. Bildtexter i versaler ligger direkt på det svarta. Altanen blir ett gult däck mot svart mark med röda pilar för vattenavrinning, taket ett svart tak mot vit himmel med gul isolering i sektion. Stilen tål inga detaljer, så varje illustration måste kunna berättas med fyra former och ett tal.

### Signaturelement

Den gula bjälken. Den är symbolens tvärslå, en 6 px gul kant överst på varje kort som innehåller ett svar, sockeln under varje pelarikon, och blocket bakom kalkylatorresultatet. Avspärrningsbandet (diagonala ränder) finns som mönster men används bara som tunn kant på varningar och som avdelare mellan sektioner, aldrig som yta.

### Layoutprincip

Startsidan är ett omslag: ordmärket stort, en rubrik i 40 px som tar ställning, och en enda illustration i full bredd med nyckeltal. Under den ett gult block med säsongens kalkylator (frågan, ett fält, svaret), sedan pelarna som en svart lista med vit text och gul sockel-ikon. Senaste guider som rubriker i grotesk utan bild, bäst i test som en tät tabell längst ner.

Artikelsidan öppnar med rubrik i 36 px, ingress i serif och det korta svaret som gult block med svart text och stor siffra. Illustrationen ligger under svaret. Löptexten i serif, 18 px, på vit, med H2 i tung grotesk och gott om luft. Produktkort har svart rubrikrad med vit text och gul bjälke på det rekommenderade, köpknappen är signalröd med vit text.

### Avvägning

Riktningen är bäst på igenkänning. Ingen kommer att förväxla den med en affiliatesajt eller med ett WordPress-tema, och den ser modern ut på ett sätt som Christian efterfrågat. Den gör stora siffror till bilder, vilket passar kalkylatorerna. Risken är att svart och gult i stora ytor läses som rea eller varning, att tunga rubriker på små skärmar äter plats, och att stilen kräver disciplin: en enda dålig gul yta och det ser ut som en byggvaruhuskatalog. Den är också den som ligger längst från stilguidens "erfaren kompis", och den tar mest arbete att bygga om från nuvarande komponenter.

## Rekommendation

Jag rekommenderar Riktning 2, Ritningen, med Riktning 1 som reserv om Christian vill ha något varmare.

Skälen. Sajtens vallgrav enligt briefen är egna verktyg, egna mätningar och hastighet. Ritningen är den enda riktning där själva formen säger "vi mäter": måttlinjer, sektioner, siffror med förutsättningar. Illustrationerna av källare, altan och tak blir bättre i den stilen än i någon av de andra, eftersom en genomskärning med mått är precis vad en husägare behöver för att förstå sitt problem. Ikonerna och illustrationerna är geometri och regler, vilket betyder att kodagenter kan producera nya tillgångar som ser ut som de gamla, medan Anteckningsboken kräver en hand och Magasinet kräver smak vid varje ny yta. Ritningen återanvänder också mest av det som redan finns i DESIGN.md (Plex, tokensystemet, komponenterna), så vägen till en färdig sajt är kortast. Slutligen klarar den bäst av att ha affiliate som intäkt utan att ha det som identitet: en köpknapp i måttrött på ett ritningsblad ser ut som ett mått bland andra, inte som en butik.

Kylan är den verkliga risken, och den hanteras med tre beslut: kalkerpapper i stället för vitt, etiketter i illustrationerna som pratar som stilguiden ("ingen dränering sedan 1971" får stå i namnrutan om det behövs), och ett rött streck som får peka. Om Christian efter att ha sett tillgångarna ändå tycker att Ritningen är för teknisk är Anteckningsboken det rätta svaret, och då byter vi snickarpennan mot måttlinjen och behåller resten.

Magasinet rekommenderar jag inte som helhet, men två saker därifrån ska in oavsett val: stora tal som bild i kalkylatorernas resultat, och att "Kort svar"-rutan får vara en färgad yta i stället för en linje till vänster.

## Tillgångar

Alla filer under `src/assets/brand/`. Alla är handskrivna, utan editormetadata, med viewBox, och den största är under 6 kB. Ikonsprites använder `currentColor` så att ikonen tar färg från texten; tokenvärdet anges i filens kommentar. Ordmärkena i riktning 1 och 3 är satta i typsnitt med `font-family` angiven i filen och konverteras till banor med fonttools när riktningen är vald. Ordmärket i riktning 2 är redan egna banor.

| Riktning | Filer |
|---|---|
| riktning-1 | `ordmarke.svg` (Zilla Slab 600, med pennstreck), `symbol.svg` (tumstock som H), `ikoner.svg` (16 symboler), `illustration-kallare.svg`, `monster.svg` (linjerat papper) |
| riktning-2 | `ordmarke.svg` (egna banor, ritningsbokstäver), `symbol.svg` (H med måttlinje), `ikoner.svg` (16 symboler), `illustration-kallare.svg`, `monster.svg` (rutnät) |
| riktning-3 | `ordmarke.svg` (Familjen Grotesk 700), `symbol.svg` (H med gul bjälke), `ikoner.svg` (16 symboler), `illustration-kallare.svg`, `monster.svg` (avspärrningsband) |

Ikonerna används så: `<svg width="24" height="24" aria-hidden="true"><use href="/brand/ikoner.svg#ikon-fukt"/></svg>` med text bredvid, eller inlinead sprite i layouten om vi vill slippa en förfrågan. Ordmärkena är ritade så att de fungerar i 24 px (sidhuvud på mobil) och 120 px (sidfot, om-sida); i riktning 2 kan gruppen `id="matt"` under ordet tas bort i 24 px.

Det som händer efter valet: tokens i `global.css` byts till den valda riktningens, typsnitten hämtas och verifieras, ordmärket konverteras till banor, och DESIGN.md skrivs om i de avsnitt som rör typografi, färg, ikoner och bilder. Sidmallarna i DESIGN.md avsnitt 5 behålls i struktur men får riktningens layoutprincip.
