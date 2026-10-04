---
namn: Fuktmätare
title: Vilken fuktmätare som räcker till veden, virket och krypgrunden
seoTitle: Fuktmätare för trä, jämförda på datablad
description: Fuktmätare för trä skiljer sig mest åt i om de har stift och om de rättar talet efter temperaturen. Här jämförs de på datablad, utan egna mätningar.
ingress: En fuktmätare för trä kallas också fuktkvotsmätare, och den visar hur mycket vatten träet håller. Tabellen har samma rader för alla mätare, så att du ser vad som skiljer en mätare för veden från en för krypgrunden. Talen är tillverkarnas egna. En ruta med ”ej angivet” betyder att tillverkaren inte anger något tal.
pelare: [fukt]
specs:
  - nyckel: typ
    etikett: Stift eller stiftlös
  - nyckel: matomrade_tra
    etikett: Mätområde i trä, % fuktkvot
  - nyckel: noggrannhet_tra
    etikett: Noggrannhet i trä
  - nyckel: traslag
    etikett: Inställning för träslag
  - nyckel: byggmaterial
    etikett: Inställning för byggmaterial
  - nyckel: rf_luft
    etikett: Mäter luftens fuktighet
  - nyckel: temperaturkompensering
    etikett: Kompenserar för temperaturen
  - nyckel: matdjup_mm
    etikett: Mätdjup utan stift
    enhet: mm
  - nyckel: stift_mm
    etikett: Stiftens längd
    enhet: mm
  - nyckel: hammarelektrod
    etikett: Hammarelektrod
  - nyckel: kontroll
    etikett: Kontroll av att mätaren visar rätt
  - nyckel: app
    etikett: App i telefonen
  - nyckel: batteri
    etikett: Batteri och drifttid
  - nyckel: ip_klass
    etikett: Skydd mot damm och vatten
  - nyckel: garanti_ar
    etikett: Garanti
    enhet: år
val:
  - produkt: bosch-universalhumid
    etikett: Vedträn och brädor att måla
    forVem: Mätaren räcker till veden och till brädor som ska målas, eftersom du kan ta in dem och mäta dem i rumstemperatur. Veden ska ha 15 till 20 procent fukthalt enligt Naturvårdsverket, vilket med min omräkning blir 18 till 25 procent fuktkvot på mätaren. En bräda kan målas när fuktkvoten i ytan är högst 16 procent, enligt TräGuiden.
    svaghet: "Den kompenserar inte för temperaturen och har bara två grupper för träslag, och den är inte skyddad mot stänk och damm."
  - produkt: elma-dt125
    etikett: Kallt trä i krypgrund och på vind
    forVem: Syllen i krypgrunden, råsponten på kallvinden och reglarna i en ouppvärmd källare mäter du bäst med den här. Den räknar om talet efter temperaturen, och när träet har en annan temperatur än luften kan du ställa in träets temperatur för hand.
    svaghet: "Temperaturen du ställer in för hand sparas inte, så den får ställas in på nytt varje gång mätaren slås på."
  - produkt: bosch-gmm-1-15
    etikett: Utan hål i golv och snickerier
    forVem: Välj den när stifthål inte får synas, i ett trägolv, i lister eller i snickerier, och när du först vill hitta var fukten sitter. Den visar fuktkvot mellan 4 och 32 procent och känner av fukten ner till 30 millimeter under ytan.
    svaghet: "Bosch anger noggrannheten som ±4 % utan att säga vad procenten avser, så när talet ska avgöra om virket kan byggas in är en mätare med stift säkrare."
kalkylator: fuktkvot
forfattare: christian
uppdaterad: 2026-10-04
utkast: false
---

## Vilken fuktmätare för trä du behöver

Den som ska mäta ved eller en lös bräda före målning har det enkelt, eftersom veden och brädan går att bära in och mäta i rumstemperatur. Svårare blir det med trä som är inbyggt i en kall krypgrund eller på en vind, och med ett golv där mätaren inte får lämna hål.

Ved ska ha en fukthalt på 15 till 20 procent när den eldas, skriver Naturvårdsverket. Fukthalten anger vattnet som andel av hela vedträets vikt. En fuktmätare för trä visar i stället fuktkvot, som anger vattnet som andel av vikten hos det torra träet, och därför får samma vedträ ett högre tal på mätaren. En fukthalt på 15 till 20 procent motsvarar ungefär [18 till 25 procent fuktkvot](/rakna/fuktkvot/). Bosch UniversalHumid, den billigaste mätaren i tabellen, räcker till veden. Ta in ett vedträ från vedboden och låt det bli rumsvarmt före mätningen.

En lös bräda som ska målas mäter du på samma sätt, inomhus. För brädan är gränsen 16 procent fuktkvot i ytan. Panel som redan sitter uppe får du mäta där den sitter. Om mätaren inte kompenserar för temperaturen visar den för lågt en kall dag och för högt i solen. Att kompensera betyder att mätaren räknar om talet efter hur kallt eller varmt träet är.

I krypgrunden, på kallvinden och i en ouppvärmd källare är träet ofta långt under 20 grader. Till de utrymmena väljer jag Elma DT125. Den kompenserar själv, men du kan också ställa in temperaturen för hand. Samma instrument mäter dessutom fukten i puts och luftens fuktighet. Talen du får håller du sedan mot [gränserna för fukt i krypgrunden](/fukt/fukt-i-krypgrund/).

Ska mätaren inte lämna hål, i ett trägolv, en list eller ett målat dörrfoder, behöver du en stiftlös mätare. Bosch GMM 1-15 är den enda stiftlösa i tabellen som visar fuktkvot.

## Stift i virket eller stiftlöst genom golv och vägg

En stiftmätare har två metallstift som trycks in i träet. Den mäter det elektriska motståndet mellan stiften och räknar om det till fuktkvot. Det är den sortens mätning som standarden SS-EN 13183-2 beskriver. Stiften är 8 till 10 millimeter långa på de mätare där längden står i databladet. Boschs stiftmätare, UniversalHumid och GMP 2-15, ger bäst resultat när stiften sitter 4 till 5 millimeter in i träet, så talet gäller träet närmast ytan. Vill du mäta längre in finns en hammarelektrod som tillval till Elma DT125 och Protimeter BLD5375, med längre stift som slås in i virket.

En stiftlös mätare trycks mot ytan och känner av fukten under den utan att göra hål. Många stiftlösa mätare visar bara en relativ skala, ett tal som blir högre där det är fuktigare men som inte är fuktkvot. En sådan mätare hittar den fuktiga delen av en vägg eller ett golv, men den visar inte hur fuktigt det är där.

GMM 1-15 visar däremot fuktkvot i trä och passar för att leta efter fukt och för att följa fukten i ett golv utan att skada det. Ska talet avgöra om virket kan byggas in tar jag hellre en stiftmätare, eftersom det är den metoden standarden beskriver. Protimeter BLD5375, som säljs under namnet SurveyMaster, har både stift och stiftlöst läge i samma instrument och kostar därefter.

I puts, gips och betong visar ingen av mätarna fuktkvot på samma sätt som i trä. Elma DT125 har fyra grupper för byggmaterial och Testo 606-1 kurvor för bland annat cementputs, gips och tegel. För GMM 1-15 är värdena i byggmaterial bara tänkta som en ledtråd. Protimeter visar fukten i byggmaterial som WME, efter engelskans wood moisture equivalent. Det är det tal en bit trä skulle visa om den fick ligga mot materialet tills fukten hade jämnat ut sig. Talen duger bra för att jämföra en fuktig fläck på väggen med en torr del av samma vägg, men något gränsvärde att hålla dem mot ger ingen av tillverkarna.

Mätarna här mäter fukten i materialet. Vill du veta hur fuktig luften i rummet är behöver du en [hygrometer, som mäter luftens relativa fuktighet](/fukt/hygrometer/). Tre av mätarna i tabellen har en givare för luftens fuktighet inbyggd: Elma DT125, Bosch GMP 2-15 och Flir MR55.

## Kallt trä visar för låg fuktkvot

En fuktmätare med stift som inte kompenserar för temperaturen visar för låg fuktkvot i kallt trä och för hög i varmt. För varje grad under 20 visar den 0,1 till 0,15 procentenheter för lite, enligt SP Trä, i dag en del av forskningsinstitutet RISE, som undersökte fuktmätare 2012. Den amerikanska Wood Handbook från 2021 anger en något mindre ändring, ungefär 0,9 procentenheter per tio grader. Räknar man med båda källorna blir det ett spann.

| Träets temperatur | Mätaren utan kompensering visar för lågt med |
|---|---|
| 10 °C | 0,9 till 1,5 procentenheter |
| 5 °C | 1,3 till 2,3 procentenheter |
| 0 °C | 1,8 till 3,0 procentenheter |

Egen räkning ur SP Trä, rapport PX21326 (2012), och USDA Forest Products Laboratory, Wood Handbook (2021), kapitel 13. Wood Handbook räknar från den temperatur som mätaren är kalibrerad vid. Den står inte i databladen, så jag har räknat från 20 °C, som SP Trä.

Det låter lite, men det räcker för att hamna på fel sida om en gräns. Virke ska ha högst 18 procent fuktkvot i ytan när det byggs in, enligt TräGuiden. Säg att du har reglar som legat i ett ouppvärmt garage på 5 grader och att mätaren visar 17 procent. Den verkliga fuktkvoten är då 18,3 till 19,3 procent, och reglarna är för fuktiga. Lägg till talet ur tabellen när träet är kallare än 20 grader, och ta det högre talet om du vill ha marginal. När träet är varmare drar du ifrån i stället.

Standarden för fuktmätning med stift, SS-EN 13183-2, kräver att talet rättas efter träslag och temperatur, antingen av mätaren själv eller med en tabell. Med en mätare som inte gör det får du rätta talet själv med tabellen här ovanför. I jämförelsen gör Elma DT125 och Laserliner 082.321A, som säljs som DampMaster Compact Plus, det både automatiskt och med en temperatur som du ställer in för hand. Flir MR55 sköter det bara automatiskt. Boschs UniversalHumid och GMP 2-15 saknar funktionen. Bosch skriver bara att träet ska ha samma temperatur som luften omkring, men även då visar mätaren för lågt om båda är kalla. För Testo och Protimeter står ingenting om temperaturen.

Den automatiska rättningen utgår från luftens temperatur. Där träet och luften har haft samma temperatur länge räcker det, och då gör Flir MR55 samma jobb som Elma. Men en grov bjälke i krypgrunden kan vara kallare än luften en vårdag, när luften har hunnit bli varmare och träet inte. Då mäter du träets yta med en termometer och ställer in temperaturen för hand, vilket bara går på Elma och Laserliner. Elma blev mitt val för kalla utrymmen. Den har handinställningen och kostade 1 428 kronor den 4 oktober 2026, mot 2 317 för Flir och 5 236 för Laserliner. Elmas och Flirs priser var då kampanjpriser som gäller tills vidare, och utan kampanjen kostar Elma 1 680 kronor. Laserlinern har en app och inställningar för fler byggmaterial än Elma, men inget av det behövs för att mäta en syll eller en takstol.

Rättningen i temperaturtabellen gäller stiftmätare. För den stiftlösa GMM 1-15 finns ingen uppgift om temperaturen.

## Vad 16, 18 och 20 procent betyder för virket

Fuktkvoten säger vad du kan göra med träet. Tabellen nedan tar upp de vanligaste [gränserna för fuktkvot i trä](/fukt/fuktkvot/). Talen kommer från TräGuiden, Svenskt Träs kunskapsbank. De två första gäller fuktkvoten i träets yta.

| Fuktkvot | Vad det betyder |
|---|---|
| högst 16 % i ytan | träet kan målas eller ytbehandlas |
| högst 18 % i ytan | virket kan byggas in |
| under 20 % | liten risk för röta |
| över 30 % | rötsvampar kan etablera sig |

Källa: TräGuiden, sidorna ”Fuktkvot och mätning”, ”Planering” och ”Mikroorganismer”, lästa den 30 september 2026.

Tillverkarna anger ofta en snävare noggrannhet, men TräGuiden räknar med att en stiftmätare kan visa upp till ungefär 2 procentenheter fel i en enskild bit trä. Visar mätaren 14 procent på en bräda som ska målas har du marginal till gränsen, men 16 kan i verkligheten vara 18. Golvbrädor för inomhusbruk ska levereras med 8 procent fuktkvot och lister med 12 procent, enligt samma källa.

## Betong mäts med en givare i ett borrhål

Testo 606-1 har visserligen en kurva för betong, men fukten i ett betonggolv bedöms på ett annat sätt. Den mäts som luftens relativa fuktighet i ett borrat hål, med en givare och inte med stift. Instrumenten för det är en annan sort än de här. Sidorna om fukt i källargolvet och i resten av huset hittar du [ordnade efter var i huset fukten sitter](/fukt/).

## Det senaste oberoende testet är från 2012

SP Träs undersökning från 2012 är det senaste oberoende testet av fuktmätare i Norden som jag har hittat. Där jämfördes elva mätare mot kalibreringsblock och mot provbitar av gran och furu. Två av dem säljs fortfarande, Testo 606-2 och en stiftlös mätare från Gann, men ingen av de två står i tabellen. 606-2 fick omdömet ”OK med konstant felvisning”, det vill säga att den visade fel men lika mycket fel varje gång. Syskonmodellen 606-1 saknar givaren för luftens fuktighet men är i övrigt samma mätare. Rapporten prövade bara 606-2, så jag låter omdömet stanna där. Protimeter SurveyMaster i rapporten var en äldre modell än BLD5375.

När en fuktmätare kallas bäst i test i dag finns det inget nytt oberoende test bakom. Den här sidan är en granskning av databladen, och [skillnaden mot ett test](/om/sa-testar-vi/) är densamma på hela sajten. Jag läste tillverkarnas datablad, bruksanvisningar och produktsidor den 30 september 2026, och priserna i tabellen hämtade jag från Proffsmagasinet den 4 oktober 2026.

För sina stiftmätare skriver Bosch ±1 %, och Testo skriver samma sak för 606-1. Ingen av dem säger om det är procentenheter fuktkvot eller procent av talet på displayen. Det gör stor skillnad, för vid 15 procent fuktkvot är 1 procent av talet bara 0,15 procentenheter. Flirs ±2 gäller procentenheter, och Elma ger en noggrannhet för varje del av mätområdet. För Laserliner skiljer sig databladet och bruksanvisningen åt, och tabellen följer databladet.

För GMP 2-15 och GMM 1-15, som säljs som verktyg för proffs, står garantin i tabellen som ett år. Det är Boschs garantitid när verktyget används yrkesmässigt, och vid privat bruk är den två år. Registrerar du mätaren hos Bosch inom fyra veckor från köpet förlängs garantin till tre år.
