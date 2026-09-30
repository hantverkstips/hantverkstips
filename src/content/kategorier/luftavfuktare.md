---
namn: Luftavfuktare
title: Luftavfuktare jämförda på tillverkarnas egna siffror, och de tre jag pekar på
seoTitle: Avfuktare och luftavfuktare jämförda
description: Avfuktare och luftavfuktare är samma maskin, och här jämför jag dem på datablad. Temperaturen avgör om du ska ha kondens- eller sorptionsavfuktare.
ingress: Här står alla maskinerna med samma mått i en tabell, och tillverkarens kapacitet har villkoret utskrivet bredvid sig. Tre av dem är mina val, en för varje sorts källare. Saknas ett tal i databladet står det ”ej angivet” i rutan.
pelare: [fukt]
specs:
  - nyckel: kapacitet_liter_dygn
    etikett: Kapacitet
    enhet: l/dygn
    bast: hogst
  - nyckel: kapacitet_villkor
    etikett: Kapacitet uppmätt vid
  - nyckel: typ
    etikett: Typ
  - nyckel: max_yta_kvm
    etikett: Max yta
    enhet: kvm
    bast: hogst
  - nyckel: ljudniva_db
    etikett: Ljudnivå
    enhet: dB
    bast: lagst
  - nyckel: effekt_w
    etikett: Effekt
    enhet: W
    bast: lagst
  - nyckel: arbetstemp_min_c
    etikett: Lägsta arbetstemperatur
    enhet: °C
    bast: lagst
  - nyckel: tank_liter
    etikett: Tank
    enhet: l
    bast: hogst
  - nyckel: slang
    etikett: Slanganslutning
val:
  - produkt: woods-sw39fw
    etikett: Källare som håller 15 grader
    forVem: En källare på upp till 40 kvm som håller minst 15 grader och har 60 till 70 procent luftfuktighet, men ingen golvbrunn. Tanken rymmer 11,4 liter och töms för hand.
  - produkt: acetec-evodry-6h-2
    etikett: Källare under 10 grader
    forVem: En källare som är kallare än 10 grader under de fuktiga månaderna. Maskinen blåser ut den fuktiga luften genom en slang, så du behöver ta upp ett hål i ytterväggen.
  - produkt: woods-mdk21
    etikett: Källare med golvbrunn
    forVem: En källare som håller minst 15 grader och har golvbrunn. Tanken rymmer bara 4 liter, så vattnet behöver gå i slang till brunnen. Maskinen kostar mindre än Wood's SW39FW.
kopguide: /fukt/avfuktare-kallare/
kalkylator: avfuktare
forfattare: christian
uppdaterad: 2026-09-30
# Indexerad sedan 2026-09-16 kväll, när köpknapparna började svara (secret key i Vercel).
utkast: false
---


## Så väljer du

Avfuktare och luftavfuktare är två ord för samma maskin, och vilken sort du behöver hänger mest på temperaturen i utrymmet under de fuktiga månaderna. I en källare är det augusti och september. Håller det 15 grader eller mer räcker en kondensavfuktare, som kyler luften så att vattnet fälls ut. Är det kallare än 10 grader behövs i stället en maskin som torkar luften med ett material som suger åt sig fukt, och skillnaden mellan de två förklarar jag i [sorptionsavfuktare mot kondens](/fukt/sorptionsavfuktare/). Storleken tar du först när typen är bestämd.

Mellan 10 och 15 grader får en kondensmaskin ut betydligt mindre vatten än lådan lovar, och återförsäljaren Ljungby Fuktkontroll skriver att den behöver 15 grader för att göra ett bra jobb. Är källaren nästan uppe i 15 grader räcker ändå en kondensmaskin, men är den en bit under skulle jag välja sorption.

Till den varma källaren är Wood's SW39FW mitt förstaval för upp till 40 kvm vid 60 till 70 procent luftfuktighet. Vad de 19 literna på lådan blir i en källare på 15 grader räknar jag om i [granskningen av Wood's SW39FW](/tester/woods-sw39fw/). Har du dessutom golvbrunn är Wood's MDK21 den billiga vägen.

Till den kalla källaren är Acetec EvoDry 6H 2.0 mitt val. Haken är att den drar 530 W och behöver ett hål i ytterväggen för våtluftsslangen, den slang som för ut den fuktiga luften. [Granskningen av EvoDry 6H 2.0](/tester/acetec-evodry-6h-2/) räknar på driftkostnaden och hålet i väggen.

Storleken räknar du ut från ytan, takhöjden och den luftfuktighet du mäter i dag. Ta en källare på 40 kvm med 2,2 meter i tak. Visar hygrometern 65 procent luftfuktighet i augusti behöver källaren en kondensmaskin med 16 liter märkt kapacitet. Talet är omräknat till samma provvillkor som tillverkaren använder, så du kan jämföra det direkt med siffran på förpackningen. Vid 75 procent krävs 22 liter. Hela tabellen från 20 till 80 kvm, antagandena bakom den och maskinerna som klarar talen finns i [rätt avfuktare till källaren](/fukt/avfuktare-kallare/). Vill du ha talet för just ditt utrymme gör [kalkylatorn](/rakna/avfuktare/) räkningen med samma formel.

Är utrymmet en krypgrund dimensionerar du efter golvytan och inte efter volymen, med tabellen i [avfuktare till krypgrunden](/fukt/avfuktare-krypgrund/). En kallvind är på vintern så kall att bara en sorptionsmaskin klarar den, och en [avfuktare på kallvinden](/fukt/avfuktare-vind/) behövs först när vinden är tätad mot bostaden och ändå är för fuktig. Ett garage får dessutom fukt genom porten och med bilen, och om det värms eller inte spelar roll för valet av maskin. Läs om [vilken maskin ett kallt eller ett uppvärmt garage behöver](/fukt/avfuktare-garage/). Vill du först veta var fukten kommer ifrån hittar du svaret bland [guiderna om fukt](/fukt/).

Till en lägenhet eller ett sovrum, där det är varmt, räcker en liten kondensavfuktare. Vill du ha en tyst maskin jämför du raden för ljudnivå i tabellen, men flera tillverkare anger den inte, och då vet du inte hur det låter. Ska du bara hålla en garderob eller ett skåp torrt kan en [fuktslukare med salt](/fukt/fuktslukare/) räcka, men till ett helt rum tar den upp för lite.

I en husvagn eller en båt gäller samma gränser vid 10 och 15 grader som i en källare. Maskiner för just dem har jag inte granskat, och inte heller vägghängda maskiner eller maskiner med en pump som lyfter vattnet i slang upp till ett avlopp.

För de flesta kondensmaskinerna är siffran på lådan mätt vid 30 grader och 80 procent luftfuktighet, ett varmare och fuktigare klimat än i en källare. Ingen kondensmaskin i tabellen har en uppgift om kapacitet vid 10 grader, och det är just i en sval källare den siffran behövs. Läs därför tabellens kapacitet som det mesta maskinen kan ge under bästa tänkbara villkor.

## Varifrån talen i tabellen kommer

Ingen av maskinerna i tabellen har jag haft i handen. Allt i tabellen är tillverkarens uppgift, återgiven från Proffsmagasinets produktsida eller från tillverkarens eget datablad, så sidan är en granskning och inget test. Hur jag hämtar och räknar om tillverkarnas tal har jag skrivit ner i [metoden](/om/sa-testar-vi/).

Kapaciteten står med det villkor tillverkaren anger. En maskin som ger 20 liter per dygn under tillverkarens provvillkor ger inte 20 liter vid 12 grader och 75 procent. Anger tillverkaren inget villkor står det ”ej angivet” på raden för villkoret.

Tre saker har jag räknat själv:

- Kilowattimmar per månad ur märkeffekten
- Kilowattimmar per liter, där tillverkaren anger både effekt och kapacitet vid samma villkor
- Dimensioneringstabellen, som bygger på Magnus-formeln för hur mycket vatten luften bär vid en viss temperatur

Konstanterna och källorna står under [hur kalkylatorn räknar](/rakna/avfuktare/#sa-raknar-vi).

Valen ovan bygger på vad databladen säger om lägsta arbetstemperatur, tank, slanganslutning och effekt, och på att jag hellre väljer en maskin med svenskt datablad än en billigare maskin utan. Det är därför eeese Adam 20 inte är mitt val, fast den kostar mindre. Vill du jämföra den med valen står den i tabellen ovanför korten.
