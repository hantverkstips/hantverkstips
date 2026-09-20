# Underlag: trappräknaren

Verktyg 13 i `docs/VERKTYGSPLAN.md`, byggt 2026-09-20 till `/rakna/trappa/`. Guiden `/golv/bygga-trappa/` skrevs parallellt och bär samma tal; konstanterna ligger namngivna överst i `src/lib/kalkyl/trappa.ts` just för att de två sidorna ska kunna läsa ur samma register.

Källorna är hämtade av utvecklaren 20 september 2026. Boverkets föreskrift är läst i sin helhet som PDF, inte via en vägledningssida.

## 1. Sökanalys

`docs/SOKORDSANALYS.md` avsnitt 7.2 och 7.4. Verktygsfrasen "trappa steghöjd" är 50 i månaden, alltså liten, men vinnbarheten är 5 och artikeln verktyget bor i är 880 ("bygga trappa") med en tom kategorisida som etta.

Läget i fältet: "Gds (2026-02-08) har trappformeln och tre räkneexempel men nämner inte Boverket. Den enda svenska trappräknaren i fältet är en artikel från 2012 med en app uppdaterad 2020, och den nämner inte heller Boverket. Boverkets mått finns alltså inte som räknat verktyg på svenska."

Verktyget siktar därför inte på egen trafik. Det är en länktillgång till guiden, precis som avfuktarkalkylatorn och källarbesiktningen, och det bär sitt eget namn i titeln.

## 2. Den viktigaste rättelsen mot uppdraget

**Uppdraget sa BFS 2024:8. Det är fel författning, och verktyget är byggt mot rätt.**

`BFS 2024:8` är *Boverkets föreskrifter om skydd med hänsyn till hygien, hälsa och miljö samt hushållning med vatten och avfall*. Ordet "trapp" förekommer inte en enda gång i den. Trappor ligger i **`BFS 2024:9`, Boverkets föreskrifter om säkerhet vid användning av byggnader**, 2 kap. Hela PDF:en är hämtad från `rinfo.boverket.se` och lästs igenom.

**Den andra och större saken: föreskriften anger inga stegmått alls.** Varken steghöjd eller stegdjup står i siffror. 2 kap. 5 § lyder i sin helhet: "Trappor och ramper ska vara utformade så att personer kan förflytta sig säkert." Det finns inga allmänna råd i de nya föreskrifterna. Boverkets egen vägledning säger att kravet inte anger några mått eftersom det behövs en riskanalys av det enskilda fallet.

Det betyder att **det inte går att skriva "uppfyller Boverket" om en steghöjd**, och verktyget gör det inte heller. Det säger i klartext att myndigheten inte anger stegmått, att måtten det mäter mot är branschens och borttagna allmänna råd, och att de två är olika saker.

## 3. Talen, en per rad med källa

Tabellen läses av `scripts/test-kalkyl-trappa.mjs` indirekt: skriptet jämför modulens konstanter mot tabellen och räkneexemplet i `/golv/bygga-trappa/`, som i sin tur är skrivna ur den här listan.

### Svenskt Trä, byggbeskrivningen Trappor

`https://www.byggbeskrivningar.se/utvandigt/trappor/?cid=103`, läst 20 september 2026. Sidan drivs av Svenskt Trä i samarbete med 540 bygg- och trävaruhandlare.

| Konstant | Värde | Citat |
|---|---|---|
| TRAPPFORMEL_MIN_MM, TRAPPFORMEL_MAX_MM | 600 och 650 | "2 x steghöjden + stegdjupet = 600 – 650" |
| STEGHOJD_MIN_MM, STEGHOJD_MAX_MM | 140 och 200 | "Steghöjden får variera mellan minimalt 140 och maximalt 200" |
| STEGDJUP_NORMAL_MM | 300 | "trappor med normal lutning har cirka 300 djupa plansteg" |
| LUTNING_MIN_GRADER, LUTNING_MAX_GRADER | 17 och 30 | "Stigningsvinkeln bör vara mellan 17° och 30°" |
| FALL_UTE | 1:50 | svagt fall på sättstegen, cirka 1:50, mot vattenansamling |

Svenskt Träs eget räkneexempel: steghöjd 150 ger stegdjupet 600 − (2 × 150) = 300.

### Trappbranschen

`https://stepsta.se/trappformel-berakna-en-bekvam-trappa`, läst 20 september 2026. Trappföretaget Stepsta AB.

| Konstant | Värde | Citat |
|---|---|---|
| TRAPPFORMEL_BAST_MIN_MM, TRAPPFORMEL_BAST_MAX_MM | 620 och 630 | "2H + B = 590 till 650 millimeter", med 620–630 mm angivet som utmärkt komfort |

### Boverkets föreskrifter (2024:9) om säkerhet vid användning av byggnader

`https://rinfo.boverket.se/BFS2024-9/pdf/BFS2024-9.pdf`, hämtad och läst 20 september 2026. Trädde i kraft 1 juli 2025.

| Konstant | Värde | Paragraf och citat |
|---|---|---|
| — | inget mått | 2 kap. 5 §: "Trappor och ramper ska vara utformade så att personer kan förflytta sig säkert." |
| OPPNING_PLANSTEG_MAX_MM | 100 mm | 2 kap. 6 §: "Öppningar mellan plansteg i trappor ska vara högst 100 mm." |
| RACKE_TILL_STEGNOS_MAX_MM | 50 mm | 2 kap. 11 § punkt 3: "Fritt mått mellan ett balkongräckes underkant och balkonggolv, eller mellan ett trappräckes underkant och trappstegens stegnos, ska vara högst 50 mm." Gäller där yngre barn kan vistas |
| KLATTERSKYDD_MM | 800 mm | 2 kap. 11 § punkt 1: "0,8 meter av skyddets höjd ska vara utformat så att det motverkar klättring." |
| — | ledstänger | 2 kap. 12 §: på båda sidor, men en räcker "om det, med hänsyn till trappans eller rampens användning eller utformning, är obehövligt" |
| FRI_HOJD_MM | 2 000 mm | 2 kap. 25 §: "Den fria höjden ska vara minst 2,00 meter i utrymningspassager, trappor, dörrar och andra kommunikationsutrymmen." |

Två paragrafer till, som verktyget inte räknar på men som nämns: 2 kap. 7 § om plan mellan en dörr och en nedåtgående trappa, och 2 kap. 8 § om att varje trapplopps början och slut ska markeras.

**Undantaget i 8 § andra stycket är viktigt för våra läsare** och stod inte i första utkastet av `GOR_INTE_OLIKA_HOGA_STEG`: "Kraven på markering i första stycket gäller dock inte för en- och tvåbostadshus, i bostadslägenheter i flerbostadshus eller om det annars är obehövligt." Verktygets läsare bygger nästan alltid en villatrappa, och rådet säger nu både att kravet finns och att småhuset är undantaget.

### SIS/TS 59:2025, standarden vi inte har läst

Tillagd 2026-09-20 efter granskningen. *Trappor, ramper, räcken och balkonger — Säkerhet vid användning*, publicerad 20 maj 2025 uttryckligen för att fylla luckan efter BBR:s allmänna råd. Det är den standard Boverkets vägledning syftar på när den hänvisar vidare från 2 kap. 5 §. Den kostar 1 250 kr och ligger bakom betalvägg, så vi kan inte citera ett enda tal ur den. Att namnge den och säga att vi inte läst den är sant, och mer än någon konkurrentsida gör. Raden står märkt **Antagande** i antagandetabellen, med värdet "Inte läst".

### Boverkets byggregler, BBR, de borttagna allmänna råden

`https://www.boverket.se/contentassets/2b709d86893740bab472714cb1ffb4c0/boverkets-byggregler-avsnitt-8-bfs-2011-6-tom-2014-3.pdf`, hämtad och läst 20 september 2026.

| Konstant | Värde | Avsnitt och citat |
|---|---|---|
| STEGDJUP_MIN_INNE_MM | 250 mm | 8:232, allmänt råd: "Stegdjupet i trappor bör vara minst 0,25 meter, mätt i gånglinjen." |
| STEGDJUP_MIN_UTE_MM | 300 mm | 8:91, allmänt råd: "Trappstegens djup i en trappa bör vara minst 0,30 meter, mätt i gånglinjen." Gäller trappor i gångvägar på tomten |
| MINST_ANTAL_STEG_UTE | 3 | 8:91, samma råd: "För att minimera risken att någon snubblar bör en trappa ha fler än två steg." |
| TRAPPLAN_DJUP_MM | 1 300 mm | 8:232, allmänt råd: "Inom enskilda bostadslägenheter bör trappplan vara minst 1,3 meter." |
| RACKE_HOJD_MM, RACKE_HOJD_HOG_MM | 900 och 1 100 mm | 8:2321, allmänt råd: räcken i trapplopp minst 0,9 m, och minst 1,1 m om öppningen vid sidan är större än 0,4 m i båda längdriktningarna och våningshöjden är mer än 3,0 m |
| LEDSTANG_HOJD_MM | 900 mm | 8:2322, allmänt råd: "Ledstänger bör sitta på 0,9 meters höjd." Samma mått som Svenskt Trä monterar efter. Avsnittsnumret rättat 2026-09-20 efter granskningen; det stod 8:91, som är trappor på tomt |

Två råd till ur 8:232, som verktyget inte räknar på: trappor bredare än 2,5 m bör delas i flera lopp, och raka trappor till fler än två bostadslägenheter uppfyller kravet på sjukbårstransport om trapploppet är minst 1,20 m brett.

### Övergången, alltså varför råden inte längre går att luta sig mot

`https://rinfo.boverket.se/BFS2011-6/pdf/BFS2024-14.pdf`, övergångsbestämmelserna punkt 2 och 3, hämtade 20 september 2026.

BFS 2024:9 trädde i kraft 1 juli 2025. Äldre bestämmelser **ska** tillämpas om bygglov meddelats före det datumet, och **får** tillämpas på arbeten som kräver bygglov eller anmälan om handlingen kom in till kommunen före 1 juli 2026, eller som varken kräver lov eller anmälan om de påbörjades före samma dag. Efter det är valet borta.

Guiden `/golv/bygga-trappa/` sammanfattar det som att byggreglerna byttes 1 juli 2026. Det är dagen valet försvann, inte dagen föreskriften trädde i kraft, och verktyget skriver ut båda datumen.

## 4. Räkningen, i sex steg

1. **Våningshöjden** delas i lika höga steg. Antalet stigningar söks i det intervall där steghöjden håller sig mellan 140 och 200 mm.
2. **Antalet steg väljs** efter vad som styr trappan. Styr ett önskat stegdjup väljs det antal som ger ett djup närmast önskemålet. Styr en längd i plan väljs det antal som får trappformelns summa närmast målet.
3. **Steghöjden** är våningshöjden delad med antalet stigningar, och den avrundas aldrig. Stegen ska summera till exakt våningshöjden.
4. **Stegdjupet** kommer ur trappformeln (målsumman minus två steghöjder) eller ur längden delad på planstegen, och avrundas **nedåt** till hel millimeter. Nedåt, eftersom det är måttet man kapar efter och en trappa som blir en aning kortare får plats där en som blir en aning längre inte gör det.
5. **Längden i plan** är stegdjupet gånger antalet plansteg som bär längden. En rak trappa har ett plansteg mindre än antalet stigningar, eftersom det översta plansteget är övervåningens golv. Med vilplan tar planet ett stegs plats i längdled.
6. **Måtten prövas** mot steghöjdens spann, stegdjupets undre kant, trappformelns spann, lutningens spann och antalet steg ute. Varje avvikelse står i beskedet med sin källa.

**Verktyget räknar aldrig fram ett steg som bryter mot ett mått utan att säga det.** Det är formulerat som ett krav i uppdraget och implementerat som en lista `avvikelser`, som beskedet i resultatspalten bär och som hela avsnittet "Därför blev svaret så" redovisar rad för rad.

## 5. Våra egna antaganden

- **TRAPPFORMEL_MAL_MM 630.** Ingen källa pekar ut ett enda tal inom spannet. 630 ligger i trappbranschens bästa spann och i Svenskt Träs, och det är talet guidens tabeller och räkneexempel är räknade med.
- **Att mäta mot borttagna allmänna råd.** Stegdjupets undre kant, vilplanets djup och regeln om fler än två steg ute är råd som inte längre gäller. De är de enda svenska siffermått som finns, de är fortfarande bra mått, och verktyget säger på skärmen att de är borttagna råd och inte krav. **Talen själva står kvar som Källa i tabellen**, eftersom de står ordagrant i BBR och kolumnen svarar på var värdet kommer ifrån. Men **beslutet att låta räknaren säga "Måttet håller inte" mot ett upphävt råd är vårt**, och det står sedan 2026-09-20 som en egen rad märkt Antagande. Alternativet vore att inte pröva stegdjupet alls, och det hjälper ingen som bygger en trappa.
- **Att stegdjupet avrundas nedåt** medan steghöjden inte avrundas alls.
- **Vilplanet läggs på mitten**, med det längre loppet nederst när antalet steg är udda. Ingen källa säger var ett vilplan ska ligga.
- **Gränserna på fälten**, alltså 250 mm till 6 m i våningshöjd, 200 till 400 mm i stegdjup och en halv till tjugo meter i längd. De är rimlighetskontroll mot skrivfel.
- **Att söka bland högst fyrtio stigningar.**

## 6. Vad chefredaktören verifierar i webbläsare

1. Att Svenskt Träs byggbeskrivning fortfarande skriver formeln som 600 till 650 mm, och att spannen för steghöjd och stigningsvinkel står kvar.
2. Att BFS 2024:9 fortfarande saknar stegmått, alltså att ingen ändringsförfattning har lagt till ett.
3. Att paragrafnumren i tabellen ovan stämmer mot den hämtade PDF:en: 5, 6, 11, 12 och 25 §§ i 2 kap.
4. Att guiden `/golv/bygga-trappa/` och verktyget säger samma sak om övergångsdatumet. Guiden skriver 1 juli 2026, verktyget skriver ut både ikraftträdandet 1 juli 2025 och den dagen valet försvann.
5. Att guidens räkneexempel står kvar med sina sex tal, eftersom testskriptet låser verktyget mot dem.
