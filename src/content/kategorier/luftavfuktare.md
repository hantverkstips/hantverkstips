---
namn: Luftavfuktare
title: Luftavfuktare jämförda på tillverkarnas egna siffror, och tre vi står för
seoTitle: Bästa luftavfuktaren, jämförd på datablad
description: Avfuktarna i Proffsmagasinets sortiment jämförda på tillverkarnas egna siffror, tre vi rekommenderar och hur stor du behöver. Inga egna mätningar än.
ingress: Samma mått för alla maskiner i en tabell, och tillverkarens kapacitet med villkoret utskrivet. Tre val vi står för tills kammartestet vid 10 och 20 grader är gjort. Det som saknas i databladen står som saknas, inte som en gissning.
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
forfattare: redaktionen
uppdaterad: 2026-09-16
# Indexerad sedan 2026-09-16 kväll, när köpknapparna började svara (secret key i Vercel).
utkast: false
---

## Så väljer du

Temperaturen i utrymmet först, storleken sedan.

Håller källaren över 10 grader året om räcker en kondensavfuktare, alltså en maskin som kyler fram vattnet ur luften. Där är Wood's SW39FW vårt förstaval för upp till 40 kvm vid 60 till 70 procent luftfuktighet. Vad de 19 literna blir i en källare på 15 grader står i [granskningen av Wood's SW39FW](/tester/woods-sw39fw/). Wood's MDK21 är den billiga vägen om det finns golvbrunn och källaren håller 15 grader.

Ligger utrymmet under 10 grader en längre period på vintern är det sorption som gäller, alltså en maskin som binder vattnet i ett fuktsugande hjul. Då pekar vi på Acetec EvoDry 6H 2.0. Vad den kostar i drift och vad installationen kräver står i [granskningen av EvoDry 6H 2.0](/tester/acetec-evodry-6h-2/). Reservationen är att den drar 530 W och behöver ett hål i ytterväggen för våtluftsslangen. Varför gränsen går vid 10 grader, och vad tillverkarna själva anger vid 5, 10 och 20 grader, står i [sorptionsavfuktare, temperaturen avgör](/fukt/sorptionsavfuktare/).

Storleken räknar du ut från yta, takhöjd och den fuktnivå du mäter i dag. Ta en källare på 40 kvm med 2,2 meter i tak. Ligger den på 65 procent luftfuktighet i augusti landar den på 16 liter märkt kapacitet för kondens, alltså siffran på förpackningen. Ligger samma källare på 75 procent krävs 22 liter. Hela tabellen från 20 till 80 kvm, antagandena bakom den och maskinerna som klarar talen finns i [rätt avfuktare till källaren](/fukt/avfuktare-kallare/). Vill du ha talet för just ditt utrymme gör [kalkylatorn](/rakna/avfuktare/) räkningen med samma formel.

Är utrymmet en krypgrund, alltså det låga utrymmet mellan marken och bottenbjälklaget, dimensionerar du efter golvytan och inte efter volymen. Hela tabellen står i [avfuktare till krypgrunden](/fukt/avfuktare-krypgrund/).

Siffran på lådan är mätt vid 30 grader och 80 procent luftfuktighet, ett klimat som inte finns i en svensk källare. Ingen kondensmaskin i tabellen ovan har en uppgift om kapacitet vid 10 grader, och det är just den siffran som avgör vad du får ut i november. Tills vi mätt den själva läser du tabellens kapacitet som ett tak, inte som ett löfte. Vill du förstå fukten innan du väljer maskin, börja i [pelaren Fukt](/fukt/).

## Så granskade vi

Vi har inte haft någon av maskinerna i handen. Allt i tabellen är tillverkarens uppgift, återgiven via Proffsmagasinets produktsida eller tillverkarens eget datablad, och varje sida i kategorin är märkt Granskning av det skälet. Kapaciteten står med det villkor tillverkaren anger. En maskin som ger 20 liter per dygn vid 30 grader och 80 procent luftfuktighet ger inte 20 liter vid 12 grader och 75 procent. Saknas villkoret på produktsidan står det ej angivet, och vi räknar inte fram en siffra åt tillverkaren.

Tre saker har vi räknat själva:

- Kilowattimmar per månad ur märkeffekten
- Kilowattimmar per liter, där tillverkaren anger både effekt och kapacitet vid samma villkor
- Dimensioneringstabellen, med Magnus-formeln

Konstanterna och källorna står under [så räknar vi](/rakna/avfuktare/#sa-raknar-vi).

Valen ovan bygger på vad databladen säger om lägsta arbetstemperatur, tank, slanganslutning och effekt, och på att vi hellre pekar på en maskin med svenskt datablad än på en billigare utan. Det är därför eeese Adam 20 inte är vårt val trots lägre pris och lägre uppgiven ljudnivå.

Det som fattas är mätningen. Kapacitet i kammare vid 10 och 20 grader och ljud på 1 och 3 meter är planerade, och när de är gjorda byts etiketten till Test och den här texten skrivs om. Metoden i sin helhet står under [så testar vi](/om/sa-testar-vi/).
