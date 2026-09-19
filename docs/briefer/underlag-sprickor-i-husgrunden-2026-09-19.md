# Underlag: Sprickor i grunden

Skribentens eget underlag, skrivet 2026-09-19 inför `src/content/guider/grund/sprickor-i-husgrunden.mdx`.
Adress `/grund/sprickor-i-husgrunden/`. Typ problemguide, pelare grund, nivå enkel.

## 1. Sökanalys

### Vald huvudfras

**"sprickor i husgrunden"**, med "spricka i grunden" och "sättningssprickor" som sidofraser
som samma sida äger. Volymen är **inte hämtad** ur Google Ads; `docs/data/keyword-stats-2026-09-16.csv`
täcker inte grundpelaren. Min uppskattning, byggd på att de tre fraserna alla har fylld SERP med
kommersiella aktörer och en egen People-also-ask-ruta: **200 till 500 sökningar per månad tillsammans**,
med tyngdpunkt på "sprickor i husgrunden". Märkt som uppskattning, ska ersättas när Search Console
har data.

Slugen är `sprickor-i-husgrunden`, alltså adressen `/grund/sprickor-i-husgrunden/`.

Första utkastet hade `sprickor-i-grunden`, med motiveringen att adressen annars fick ordet grund två
gånger. Chefredaktören returnerade det 2026-09-19 (krav 2.7.1) och har rätt: `/grund/sprickor-i-grunden/`
har ordet två gånger ändå, men utan huvudfrasens ord husgrund, så vi betalade priset utan att få något
för det. Arkitekturens regel om att slugen är huvudfrasen kokad till två till fyra ord väger tyngre än
hur adressen låter. Filen döptes om innan publicering, så ingen omdirigering behövdes.

Sökintentionen är **informativ med en diagnoskomponent**. Läsaren har redan sett sprickan och vill
veta två saker i den här ordningen: ska jag vara orolig, och vem ringer jag. Ingen kommersiell
intention, inga produktkort på sidan.

### Ettan och de tre översta

1. **bygg.se, "Laga sprickor i husgrund eller fasaden, när bör du oroa dig?"**
   Svarade **HTTP 403** på vår hämtning, både på artikeln och på domänens andra sidor. Innehållet nedan
   är läst ur Googles utdrag, inte ur sidan. Täcker: tunna stillastående sprickor i puts är oftast
   mindre allvarliga, sprickor bredare än några millimeter som går genom betongen eller växer kan vara
   sättningar, betong rör sig när den torkar och härdar, fukt som fryser i en spricka vidgar den, ring
   fackman vid rejäla sättningar. Sedan följer en lagningsdel.
2. **dinbyggare.se, "Så lagar du sprickor i husgrunden"** och **"Sättningsskador på hus"**.
   Delar upp i torksprickor och sättningsskador. Åtta orsaker listade. Råder att markera med färg, mäta
   och fotografera. Femton steg för lagning av torksprickor.
3. **Geobear, "Tecken på sättningar"** (tidigare `geobear.se/villaagare/sprickor-i-grunden/`, 301 till
   `geobear.com/sv-se/tecken-pa-sattningar`). Fem spricktyper, diagonala sprickor bredare än 3 mm,
   fyra orsaker. Säljer geopolymerinjektering, så allt leder till en offert.

Övriga på första sidan: Sustend, Vi i Villa, Villanytt, Byggahus forumtråd, plus ett nät av
byggfirmabloggar (byggfirma-djuro.se, dalabyggare.se, stockholm-byggfirma.se och ett tjugotal till)
med identiska formuleringar på olika domäner. De är innehållsspam och används inte som källa.

### Vad ettan och tvåan saknar

- **Ingen diagnosordning.** De beskriver spricktyper men ger ingen ordning att gå igenom hemma.
  Läsaren får veta att diagonala sprickor kan vara allvarliga och lämnas där.
- **Ingen mätmetod med tider.** "Mät regelbundet" utan att säga hur ofta, hur länge, eller vilken
  förändring som betyder något.
- **Inget om dörrar och fönster.** Det som skiljer en sättning som rör hela huset från en spricka i
  ytskiktet är om byggnaden vridit sig, och det ser man på dörrar och socklar, inte på sprickan.
- **Inget om försäkringen.** Varenda sida säger "ring fackman" och ingen säger att den vanliga
  villaförsäkringen inte betalar för en sättning.
- **Inget om vad man ska be om.** Skillnaden mellan besiktningsman och geotekniker, och vad ett
  utredningspapper måste innehålla för att vara värt något, saknas överallt.
- **Vinklade avsändare.** Geobear, Stabtech och Golvlyftarna säljer grundförstärkning. Byggfirmorna
  säljer lagning. Ingen av dem tjänar på att säga "vänta ett halvår och mät".

### Tre sätt vår sida blir bättre

1. **Symptomtabell och mätmetod med tider.** Vad du ser, trolig orsak och nästa steg i en tabell,
   sedan gipsmarkören med datum och intervallen en vecka, en månad, ett halvår, inklusive vad som
   räknas som förändring. Ingen av de tre översta har någondera.
2. **Fyra tecken som skiljer ytspricka från byggnadsrörelse**, där tre av dem inte sitter i sprickan:
   dörrar som kärvar, golvsocklar som glipar, sprickan som går genom både puts och betong.
   Ettan tittar bara på sprickan.
3. **Försäkringsvillkoret citerat.** If:s villaförsäkring, avsnitt E: skada genom sättning i marken av
   annan anledning än jordskred, jordras, bergras, jordskalv, lavin eller vulkanutbrott ersätts inte.
   Allriskdelen undantar dessutom skada i samband med markarbete och sättningar i marken. Det är den
   enskilt viktigaste upplysningen på sidan och den saknas på varenda konkurrent.

Plus två till: priser med namngiven källa på både besiktning och geoteknisk utredning, och en tydlig
gräns mot systersidan om dränering i stället för att skriva om dräneringen en gång till.

### Rubrikstruktur

- H1: Sprickor i grunden, vad som är normalt och när du ska ringa
- H2 Titta först, det tar en kvart (symptomtabell)
- H2 Krympsprickorna får vara kvar
- H2 Sättningssprickan ser annorlunda ut
- H2 Mät sprickan, det är hela beviset
- H2 Varför marken rör sig under just ditt hus
- H2 Det du kan göra själv, och det du ska låta bli
- H2 När du ska ringa, och vem
- H2 Försäkringen betalar sällan för en sättning
- Faq

### Interna länkar

Ut från sidan:

| Mål | Varför |
|---|---|
| `/fukt/fukt-i-kallaren/` | När sprickan läcker vatten efter regn är det källarguidens läckagefall |
| `/rakna/dranering/` | När dålig avvattning är orsaken, via Kalkylator-komponenten |
| `/grund/dranera-hus/` | Dräneringen ägs av systersidan, inte av den här |

In till sidan, föreslås i rapporten: `src/content/guider/fukt/fukt-i-kallaren.mdx` i läckageavsnittet,
där "en spricka efter en sättning" redan står i löptexten.

## 2. Faktaunderlag

Varje uppgift med källa. Saknas en uppgift står det "ej angivet".

### Jordarter och rörelse

| Uppgift | Värde | Källa |
|---|---|---|
| Lera och silt | Finkornigare än sandjordar, tjälfarliga jordarter | Svenskt Trä, Träguiden, Markförhållanden och grundläggning |
| Morän | Block, stenar och finare partiklar, ofta hårt packade, god bärighet | Svenskt Trä, Träguiden |
| Trähus och sättningar | Trähus kan ta upp sättningar, även ojämna | Svenskt Trä, Träguiden |
| Grundvattensänkning 2 m i lera | Motsvarar ökning av markpåkänningar med 20 kN/m², ungefär en meters uppfyllnad eller mer än vikten av ett normalt småhus av trä | Svenskt Trä, Träguiden |
| Sockelhöjd vid träfasad | Minst 200 mm | Svenskt Trä, Träguiden |
| Grundläggningens andel av byggkostnaden | Cirka 20 procent | SGI, Grundläggning och förstärkning |
| Varför grundläggning måste göras rätt | "för att undvika sättningar, stabilitetsbrott eller svängningsrörelser" | SGI |

### Träd, torka och lera

| Uppgift | Värde | Källa |
|---|---|---|
| Mekanismen | "Träden suger vatten ur leran som då krymper i volym" | Henrik Håkansson, Bjerking, i Uppsala Nya Tidning |
| Säkerhetsavstånd till träd | Finns, men beror på trädslag. Exakta meter **ej angivet** i källan | Henrik Håkansson, Bjerking, i UNT |
| Året för torkan | Artikeln publicerades 24 september 2018, så torrsommaren är 2018 | Uppsala Nya Tidning |
| Ärendevolym efter torrsommaren | Bjerking fick 3 till 4 samtal i veckan om spruckna byggnader | Uppsala Nya Tidning |
| Jämförelsetalet före torkan | **Står inte i texten.** Två läsningar av artikeln gav 2 till 3 per år respektive 2 till 3 under en hel höst, och artikeln är betald så vi kunde inte avgöra vilken som stämmer | Uppsala Nya Tidning |

### Vibrationer och sprängning

| Uppgift | Värde | Källa |
|---|---|---|
| Standard för riktvärden | SS 4604866, senaste utgåvan 2022 | SIS, Swedish Institute for Standards |
| Riskområde vid grundläggning på berg | 50 m | ENAB Konsult, som refererar SS 460 48 66 |
| Riskområde vid grundläggning på lera | 100 m | ENAB Konsult, som refererar SS 460 48 66 |
| Förbesiktning | Närliggande byggnaders skick och befintliga sprickor ska fastställas innan sprängning | ENAB Konsult |
| Facklitteratur | Peter Flygare, "Vibrationsskador i byggnader", Svensk Byggtjänst 2012. Beskriver vilka verksamheter som ger vibrationer och varför hus spricker | Svensk Byggtjänst, bokhandeln |

### Spricktyper och bedömning

| Uppgift | Värde | Källa |
|---|---|---|
| Två grundorsaker i en husgrund | "Den ena är torksprickor vilka sällan vållar några större problem. Den andra orsaken är sättningsskador, vilka är betydligt allvarligare" | dinbyggare.se |
| Sättningssprickor, utseende | Oftast diagonala, uppstår där väggen har håltagningar som dörrposter eller fönster | Sustend |
| Sättningssprickor, bredd | "oftast diagonala, bredare än 3 mm" | Geobear |
| Spricktyper | Trappstegssprickor i fogar, lodräta, diagonala från fönster och dörrar, vågräta, hårfina | Geobear |
| Sprängningssprickor | Från vibration i närheten, vanligen ofarliga | Sustend |
| Spännings- och rörelsesprickor | "generellt ganska raka och sitter oftast i hörn, vinklar och skarvar" | Sustend |
| Trappstegsspricka i murverk | Följer murförbandet, signalerar ofta långsam sättning under just den delen av väggen | Doms Entreprenad, Malmö |
| Krympning i betong | Betong rör sig när den torkar och härdar | bygg.se (läst i sökutdrag, sidan svarade 403) |

### Symptom på byggnadsrörelse

| Uppgift | Värde | Källa |
|---|---|---|
| Synliga tecken | Sprickor i murade eller betonggjutna fasader, grunder och väggar. Glipande golvsocklar. Oväntat golvdrag. Dörrar och fönster som kärvar eller öppnas av sig själva. Golv som börjar luta | dinbyggare.se |

### Orsaker, samlad lista

Åtta orsaker enligt dinbyggare.se: kraftig dränering eller översvämning, fällning av stora träd,
tjälskjutning vid felaktigt frostfritt djup, trädrötter under grunden, för hårdhänt återfyllning efter
dränering, felaktig betongblandning eller armering, grundvattenförändringar, markvibrationer från
sprängningar eller tung trafik.

### Mätning över tid

| Uppgift | Värde | Källa |
|---|---|---|
| Metod | "Markera skadan med en färg, mät eller fotografera den, så att du säkert vet hur stor förändringen är dag från dag eller vecka till vecka" | dinbyggare.se |
| Metod | "sätta en tunn gipsplomb eller ett litet märke tvärs över sprickan och skriva dit datum" | Doms Entreprenad, Malmö |
| Tolkning | Spricker plomben inom veckor eller månader rör sig muren. Håller den en hel säsong, inklusive tjällossning och sommartorka, är sprickan sannolikt stabil | Doms Entreprenad, Malmö |
| Före lagning | "innan du lagar sprickor i husgrunden är det viktigt att kontrollera att de inte beror på sättningar" | dinbyggare.se |
| Kontrollintervall | Exakta intervall **ej angivna** i någon läst källa. Sidan skriver därför ut vilka intervall som är vårt val och varför |

### Besiktning, utredning och priser

| Uppgift | Värde | Källa |
|---|---|---|
| Överlåtelsebesiktning villa, grundnivå | Cirka 9 600 till 10 800 kr | Anticimex, prissida |
| Vad som styr priset | Omfattning, geografiskt område, vald nivå 1 till 3, tillägg som energideklaration | Anticimex |
| Enklare villautredning med provgropsgrävning och enkel rapport | Cirka 15 000 till 20 000 kr | Dala Geokonsult AB |
| Provgropsgrävning | Cirka 15 000 kr per dag | Dala Geokonsult AB |
| Fältundersökning med markteknisk undersökningsrapport | 8 000 till 30 000 kr för en dag i fält | Dala Geokonsult AB |
| Vad en geoteknisk utredning består av | Fältarbete (sonderingar, provtagningar, grundvattennivåer) plus handläggning (jordartsklassificering, stabilitets- och sättningsberäkningar, rapport med rekommendationer) | Dala Geokonsult AB |
| Vad besiktningsmannen gör | Bedömer skicket okulärt utifrån ålder, konstruktion och synliga tecken, och rekommenderar fortsatt teknisk utredning när något behöver undersökas närmare | SBR Byggingenjörerna, överlåtelsebesiktning |

### Försäkring

Källa: If, Villaförsäkring, försäkringsvillkor december 2025 (villkorshäftet för Unionen-avtalet).

| Uppgift | Värde | Avsnitt |
|---|---|---|
| Vad som ersätts vid markrörelse | "jordskalv (minst 4 på Richterskalan), jordskred, jordras, bergras, lavin eller vulkanutbrott" | E, Översvämning och markrörelser |
| Vad som inte ersätts | "Skada genom sättning i marken av annan anledning ersätts inte" | E |
| Otur (allrisk), undantag | Skada "i samband med sprängningsarbete, markarbete, gruvdrift eller sättningar i marken" ersätts inte | S, Otur |
| Otur, fler undantag som träffar en spricka | Skada orsakad av "nötning, förslitning, åldersförändring eller annan långtidspåverkan" och skada "som består i eller är en följd av konstruktions-, bygg- eller materialfel" | S, Otur |
| Otur, utifrån kommande vatten | Skada "av vatten/fukt som tränger in genom grundmur eller bottenplatta" ersätts inte | S, Otur |

Kontrollerad mot ett andra bolag: Villahemförsäkring VH25 har samma konstruktion. Avsnitt F.2.6
Övriga naturskador räknar upp jordskalv minst 4 enligt Richterskalan, jordskred, jordras, bergras,
lavin och vulkanutbrott, och undantar jordskred, jordras, bergras och lavin som orsakats av
sprängnings-, schaktnings-, pålnings- eller spontningsarbete. Allrisken K.8.1 kräver att händelsen
haft ett snabbt förlopp och undantar skada orsakad av felaktig konstruktion, felaktigt utförande eller
materialfel, och skada orsakad av slitage "vare sig skadan visar sig successivt eller plötsligt".
Sidan citerar If, eftersom det villkoret säger saken rakast, och nämner att konstruktionen är
densamma hos fler bolag utan att räkna upp dem.

### Anticimex om grunden

| Uppgift | Värde | Källa |
|---|---|---|
| Vad dräneringen är | Dräneringsledning plus dränerande material utanför och under källaren, som grus eller singel | Anticimex, fukt i källare och grund |
| Marklutning | "Se till att marken lutar bort från huset om den inte gör det" | Anticimex |
| Krypgrunder med fuktskada | Ungefär varannan krypgrund drabbas av fukt- och mögelskador | Anticimex |

## 3. Det vi inte kunde hämta

Chefredaktören kan öppna de här i webbläsare.

- **bygg.se/sprickor-i-hus-nar-bor-du-oroa-dig/** svarade HTTP 403 Forbidden. Det är ettan på
  huvudfrasen och vi har bara läst Googles utdrag av den. Alla påståenden om vad ettan täcker i
  avsnitt 1 är hämtade därifrån och bör kontrolleras innan sidan publiceras. Ingen faktauppgift på
  vår sida bygger på bygg.se.
- **byggahus.se/geoteknisk-markundersokning-fakta-pris-tid** svarade HTTP 403 Forbidden. Skulle ha
  gett en andra prisuppgift på geoteknisk undersökning vid sidan av Dala Geokonsults.
- **boverket.se, PBL kunskapsbanken, Geokonstruktioner och Risker för grund.** Sidorna hämtades men
  levererade bara navigationen, inte brödtexten, i två olika försök. Boverket är därför **inte** källa
  till något på sidan, trots att uppdraget bad om det. Den regel som pekats ut i sökresultat, att
  geokonstruktioner ska utformas så att de inte skadar närliggande byggnader och att synliga sprickor
  och stora deformationer räknas som skada, är alltså **inte verifierad av oss** och står inte i texten.
- **tyrens.se, riskanalys och skadeutredningar** svarade HTTP 404. Skulle ha gett en oberoende
  konsults beskrivning av vad en skadeutredning innehåller.
- **SBUF** gav inga träffar på sättningar i småhus som gick att läsa. Uppdraget nämnde SBUF som
  möjlig källa; den ersattes av Svenskt Trä, SGI och Svensk Byggtjänst.
- **Uppsala Nya Tidning, torkan förvärrar sättningsskador.** Artikeln är betald och gick bara att läsa
  i utdrag. Publiceringsdatumet 24 september 2018 och Henrik Håkanssons citat om träden och leran är
  säkra, och årtalet står nu i texten enligt returkravet. Jämförelsetalet för hur många samtal Bjerking
  brukade få före torkan gav två olika läsningar, per år respektive per höst, så det **togs bort ur
  texten** i stället för att gissas. Chefredaktören kan öppna artikeln och lägga tillbaka det.
- **Volymsiffror.** Ingen sökvolym är hämtad från Google Ads för den här pelaren. Talet i avsnitt 1 är
  en uppskattning och ska bytas mot mätt data.
- **Sprickvidd som gränsvärde.** Ingen myndighet och ingen branschorganisation vi kunnat läsa sätter
  en siffra i millimeter för när en spricka i en husgrund blir allvarlig. De enda tal som finns
  kommer från Geobear, som säljer grundförstärkning. Sidan skriver därför ut att 3 mm är Geobears
  siffra, inte en norm, och lutar i stället hela bedömningen mot förändring över tid.

## 4. Illustrationer

- `src/assets/illustrationer-kallor/grund/sprickor-grundmur.svg`, huvudbild. Grundmur i uppriss med
  två sprickor: en hårfin lodrät i putsen, och en diagonal som går från källarfönstrets hörn och
  vidgas uppåt, inringad i penna.
- `src/assets/illustrationer-kallor/grund/sprickor-mata.svg`, inline. Gipsmarkören tvärs över sprickan
  med datum, och måttet över sprickans bredd.
