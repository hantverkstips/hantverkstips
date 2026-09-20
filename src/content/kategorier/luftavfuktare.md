---
namn: Luftavfuktare
title: Luftavfuktare jämförda på tillverkarnas egna siffror, och de tre jag pekar på
seoTitle: Bästa luftavfuktaren, jämförd på datablad
description: Vilken luftavfuktare som är bäst enligt tillverkarnas egna siffror, tre jag står för och hur stor du behöver. Inga egna mätningar än.
ingress: Här står alla maskinerna med samma mått i en tabell, och tillverkarens kapacitet har villkoret utskrivet bredvid sig. Tre val står jag för tills kammartestet vid 10 och 20 grader är gjort. Saknas ett tal i databladet står rutan tom, för jag gissar inte åt tillverkaren.
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
    etikett: Bäst totalt
    forVem: En källare på upp till 40 kvm vid 60 till 70 procent luftfuktighet, som kallnar mot 5 grader i november.
  - produkt: acetec-evodry-6h-2
    etikett: Bäst till kall källare
    forVem: En källare under 10 grader med en vägg mot det fria för våtluftsslangen.
  - produkt: woods-mdk21
    etikett: Bäst för pengarna
    forVem: En uppvärmd källare över 10 grader med golvbrunn.
kopguide: /fukt/avfuktare-kallare/
kalkylator: avfuktare
forfattare: christian
uppdaterad: 2026-09-20
# Indexerad sedan 2026-09-16 kväll, när köpknapparna började svara (secret key i Vercel).
utkast: false
---

## Så väljer du

Börja med temperaturen i utrymmet, och ta storleken efter det. Den bästa luftavfuktaren för dig är den som gör nytta vid den temperatur din källare faktiskt har i november.

Håller källaren över 10 grader året om räcker en kondensavfuktare, som kyler fram vattnet ur luften. Där är Wood's SW39FW mitt förstaval för upp till 40 kvm vid 60 till 70 procent luftfuktighet. Vad de 19 literna på lådan blir i en källare på 15 grader står i [granskningen av Wood's SW39FW](/tester/woods-sw39fw/). Har du golvbrunn och en källare som håller 15 grader är Wood's MDK21 den billiga vägen.

Ligger utrymmet under 10 grader en längre period på vintern är det sorption som gäller, en maskin som fångar vattnet i ett fuktsugande hjul och därför klarar kyla som en kondensmaskin inte klarar. Då pekar jag på Acetec EvoDry 6H 2.0. Vad den kostar i drift och vad installationen kräver står i [granskningen av EvoDry 6H 2.0](/tester/acetec-evodry-6h-2/). Reservationen är att den drar 530 W och behöver ett hål i ytterväggen för våtluftsslangen. Varför gränsen går vid 10 grader, och vad tillverkarna själva anger vid 5, 10 och 20 grader, står i [sorptionsavfuktare, temperaturen avgör](/fukt/sorptionsavfuktare/).

Storleken räknar du ut från ytan, takhöjden och den luftfuktighet du mäter i dag. Ta en källare på 40 kvm med 2,2 meter i tak. Ligger den på 65 procent luftfuktighet i augusti landar den på 16 liter märkt kapacitet för en kondensmaskin, och märkt kapacitet är siffran på förpackningen. Ligger samma källare på 75 procent krävs 22 liter. Hela tabellen från 20 till 80 kvm, antagandena bakom den och maskinerna som klarar talen finns i [rätt avfuktare till källaren](/fukt/avfuktare-kallare/). Vill du ha talet för just ditt utrymme gör [kalkylatorn](/rakna/avfuktare/) räkningen med samma formel.

Är utrymmet en krypgrund, det låga utrymmet mellan marken och bottenbjälklaget, dimensionerar du efter golvytan och inte efter volymen. Tabellen för det står i [avfuktare till krypgrunden](/fukt/avfuktare-krypgrund/).

En sak till innan du läser tabellen. Siffran på lådan är mätt vid 30 grader och 80 procent luftfuktighet, ett klimat som ingen svensk källare har. Ingen kondensmaskin i tabellen har en uppgift om kapacitet vid 10 grader, och det är just den siffran som avgör vad du får ut i november. Tills jag mätt den själv ska du läsa tabellens kapacitet som det mesta maskinen kan ge under bästa tänkbara villkor. Vill du förstå fukten innan du väljer maskin börjar du i [pelaren Fukt](/fukt/).

## Så granskade jag

Ingen av maskinerna i tabellen har jag haft i handen. Allt i tabellen är tillverkarens uppgift, återgiven från Proffsmagasinets produktsida eller från tillverkarens eget datablad, och varje sida i kategorin är märkt Granskning av det skälet. Bäst i test kan jag inte skriva om någon luftavfuktare förrän jag mätt dem, så det står inte här.

Kapaciteten står med det villkor tillverkaren anger. En maskin som ger 20 liter per dygn vid 30 grader och 80 procent luftfuktighet ger inte 20 liter vid 12 grader och 75 procent. Saknas villkoret på produktsidan står det ej angivet, och jag räknar inte fram en siffra åt tillverkaren.

Tre saker har jag räknat själv:

- Kilowattimmar per månad ur märkeffekten
- Kilowattimmar per liter, där tillverkaren anger både effekt och kapacitet vid samma villkor
- Dimensioneringstabellen, med Magnus-formeln

Konstanterna och källorna står under [hur kalkylatorn räknar](/rakna/avfuktare/#sa-raknar-vi).

Valen ovan bygger på vad databladen säger om lägsta arbetstemperatur, tank, slanganslutning och effekt, och på att jag hellre pekar på en maskin med svenskt datablad än på en billigare utan. Det är därför eeese Adam 20 inte är mitt val, trots lägre pris och lägre uppgiven ljudnivå.

Det som fattas är mätningen. Kapacitet i kammare vid 10 och 20 grader och ljud på 1 och 3 meter är planerade. När de är gjorda byts etiketten till Test, och den här texten skrivs om. Hur jag går till väga står under [så testar vi](/om/sa-testar-vi/).
