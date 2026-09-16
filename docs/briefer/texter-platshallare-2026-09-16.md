# Texter som ersätter platshållarna, 2026-09-16

Skrivna av chefredaktören. En rubrik per fil, i den ordning utvecklaren klistrar in. Frontmatterfält står som fält, brödtext står som brödtext. Rader som börjar med "Utvecklaren" är instruktioner, inte text som ska in på sajten. Allt annat är slutlig text och ska klistras in ordagrant, inklusive länkar och komponenter.

Inga siffror här är nya. Varje tal kommer ur en publicerad sida (`/fukt/luftfuktighet-inomhus/`, `/fukt/avfuktare-kallare/`, `/fukt/sorptionsavfuktare/`, `/inomhus/gipsskruv/`), ur `docs/briefer/tabell-dimensionering-avfuktare.md`, ur `docs/briefer/underlag-kalkyl-avfuktare.md` eller ur en källa som anges vid talet. Inga egna mätvärden finns, och ingen text påstår att det finns.

Tre uppgifter måste komma från Christian innan steg 1 kan committas: e-postadressen till kontaktsidan, företagsnamn eller postadress till om-sidan, och en bekräftelse på att hans namn får stå på om-sidan och författarsidan. De tre ställena är markerade med hakparentes i texterna nedan och är de enda hakparenteserna som ska finnas kvar när texterna är inklistrade.

Beslut och motiv står i `plan-oversikt-och-platshallare-2026-09-16.md`.

---

## src/content/sidor/startsida.mdx

Fält:

```
title: Sköt om huset utan att köpa fel
description: Guider och kalkylatorer om fukt inomhus och väggar i gips, skrivna av folk som läser databladet och räknar innan de rekommenderar något.
uppdaterad: 2026-09-16
justNu:
  samling: guider
  id: avfuktare-kallare
```

Utvecklaren byter också title-taggen i `src/pages/index.astro` rad 146 till `Hantverkstips, sköt om huset utan att köpa fel`, så att H1 och flik säger samma sak.

Brödtext (hela filen under frontmatter, 54 ord):

Vi läser databladen och räknar på din källare innan vi rekommenderar något, och vi skriver köp inte när det är svaret. Visar hygrometern 65 procent? Börja med [vad talet faktiskt betyder](/fukt/luftfuktighet-inomhus/). Vet du redan att det är kondens? [Räkna ut hur stor avfuktare du behöver](/rakna/avfuktare/) innan du tittar på ett enda pris.

---

## src/content/pelare/fukt.mdx

Fält:

```
ingress: Källare, krypgrund, vind och garage. Först varifrån fukten kommer, sedan vilken maskin, om någon.
viktiga:
  - titel: Vad hygrometern faktiskt säger
    href: /fukt/luftfuktighet-inomhus/
  - titel: Rätt avfuktare till källaren
    href: /fukt/avfuktare-kallare/
  - titel: Hur stor avfuktare behöver du?
    href: /rakna/avfuktare/
uppdaterad: 2026-09-16
```

Brödtext (ersätter allt under frontmatter):

Det luktar i källartrappan i augusti och sovrumsfönstret immar i januari. Två olika problem med två olika svar, och bara det ena löses med en maskin. Därför börjar varje sida här med diagnosen och slutar med produkten, om den behövs alls. Siffrorna kommer ur tillverkarnas datablad och myndighetskällor, eller är räknade av oss med källan utskriven. Egna mätningar i källare och kammare pågår och redovisas när de är klara, inte före.

## Hitta felet

Ett tal på hygrometern säger ingenting förrän du vet hur kall den kallaste ytan i rummet är. [Rätt luftfuktighet inomhus](/fukt/luftfuktighet-inomhus/) ger daggpunkten i tabell, gränsen vid 75 procent enligt Boverket och riktvärden per rum. Är det källaren, gör [tejptestet som skiljer kondens från markfukt](/fukt/fukt-i-kallaren/) innan du köper något. Visar det markfukt hjälper ingen avfuktare i världen.

## Välj rätt

Temperaturen avgör typen. Håller källaren över 10 grader året om räcker kondens, ligger den under 10 grader en längre period på vintern krävs sorption. [Rätt avfuktare till källaren](/fukt/avfuktare-kallare/) landar i tre maskiner med kapacitet, elkostnad och nackdelar, och [sorptionsavfuktare, temperaturen avgör](/fukt/sorptionsavfuktare/) förklarar varför kondensmaskinen ger upp i kylan, med tillverkarnas egna siffror vid 5, 10 och 20 grader. Alla maskiner vi gått igenom står samlade under [luftavfuktare](/luftavfuktare/).

## Räkna

[Hur stor avfuktare behöver du?](/rakna/avfuktare/) räknar liter per dygn ur yta, takhöjd och fuktnivå, och visar maskinerna som klarar talet. Antagandena står under resultatet, märkta som källa eller gissning.

---

## src/content/pelare/inomhus.mdx

Fält:

```
ingress: Väggar som håller och saker som sitter kvar, från gipsskruven till tv-fästet.
viktiga:
  - titel: Rätt gipsskruv för regeln och skivan
    href: /inomhus/gipsskruv/
uppdaterad: 2026-09-16
```

Brödtext (ersätter allt under frontmatter):

Gipset håller ingenting, regeln bakom gör det. Så börjar vår guide om gipsskruv, och meningen bär hela pelaren: det som ska sitta kvar sitter i regeln eller i pluggen, aldrig i skivan. Pelaren är ny och har en sida i dag. Guiderna om att skruva i gipsvägg och om vilken plugg som håller vad kommer i höst, och pluggarna belastas till brott innan vi skriver en enda siffra om dem.

## Hitta felet

Sviktar hyllan eller sitter tavlan snett sitter felet nästan alltid i infästningen, inte i skivan. En grovgängad skruv i en stålregel snurrar utan att ta, och en gipsskruv som gått genom kartongen hänger i gipsmassan, som inte håller någon skiva. Båda felen, och hur du känner dem med handflatan, står i [rätt gipsskruv för regeln och skivan](/inomhus/gipsskruv/).

## Välj rätt

Skivtjockleken plus 20 mm in i trä, plus 10 mm genom stål. Grov gänga i trä, fin gänga i stål. Tabellen med längder för en och två skivor, skruvavstånden i kant och fält, och gränsen vid 0,9 mm plåt där nålspetsen slutar fungera finns i [gipsskruvguiden](/inomhus/gipsskruv/). Vilken plugg som håller vad får en egen sida när vi belastat dem själva.

## Räkna

Ingen kalkylator i pelaren än.

---

## src/content/kategorier/luftavfuktare.md

Fält:

```
title: Luftavfuktare jämförda på tillverkarnas egna siffror, och tre vi står för
seoTitle: Bästa luftavfuktaren till källare, krypgrund och garage, jämförda på datablad
description: Avfuktarna i Proffsmagasinets sortiment jämförda på tillverkarnas egna siffror, tre vi rekommenderar och hur stor du behöver. Inga egna mätningar än.
ingress: Samma mått för alla maskiner i en tabell, tillverkarens kapacitet med villkoret utskrivet, och tre val vi står för tills kammartestet vid 10 och 20 grader är gjort. Det som saknas i databladen står som saknas, inte som en gissning.
uppdaterad: 2026-09-16
```

Utvecklaren tar bort raden `noindex: true` och de två kommentarraderna ovanför den. Utvecklaren gör det i samma commit som punkt 1 till 3 i `docs/briefer/godkannande-affiliate-2026-09-16.md` (service role-nyckeln i Vercel, `lankmall` till NULL, `arSlut` för `ej_bestallningsbar`); är de inte gjorda står noindex kvar tills de är det. SEO-strategen bekräftar `seoTitle` före commit, eftersom "bästa" kräver att sidan förklarar hur valet gjorts, vilket avsnittet "Så granskade vi" gör.

Brödtext (ersätter allt under frontmatter):

## Så väljer du

Temperaturen i utrymmet först, storleken sedan. Håller källaren över 10 grader året om räcker en kondensavfuktare, och där är Wood's SW39FW vårt förstaval för upp till 40 kvm vid 60 till 70 procent, med MDK21 som den billiga vägen om det finns golvbrunn och källaren håller 15 grader. Ligger utrymmet under 10 grader en längre period på vintern är det sorption som gäller, och då pekar vi på Acetec EvoDry 6H 2.0, med reservationen att den drar 530 W och behöver ett hål i ytterväggen för våtluftsslangen. Varför gränsen går vid 10 grader, och vad tillverkarna själva anger vid 5, 10 och 20 grader, står i [sorptionsavfuktare, temperaturen avgör](/fukt/sorptionsavfuktare/).

Storleken räknar du ut från yta, takhöjd och den fuktnivå du mäter i dag. En källare på 40 kvm med 2,2 meter i tak och 65 procent i augusti landar på 16 liter märkt kapacitet för kondens, alltså siffran på lådan, och på 22 liter om samma källare ligger på 75 procent. Hela tabellen från 20 till 80 kvm, antagandena bakom den och maskinerna som klarar talen finns i [rätt avfuktare till källaren](/fukt/avfuktare-kallare/). Vill du ha talet för just ditt utrymme gör [kalkylatorn](/rakna/avfuktare/) räkningen med samma formel.

Siffran på kartongen är mätt vid 30 grader och 80 procent luftfuktighet, ett klimat som inte finns i en svensk källare. Ingen kondensmaskin i tabellen ovan har en uppgift om kapacitet vid 10 grader, och det är just den siffran som avgör vad du får ut i november. Tills vi mätt den själva läser du tabellens kapacitet som ett tak, inte som ett löfte. Vill du förstå fukten innan du väljer maskin, börja i [pelaren Fukt](/fukt/).

## Så granskade vi

Vi har inte haft någon av maskinerna i handen. Allt i tabellen är tillverkarens uppgift, återgiven via Proffsmagasinets produktsida eller tillverkarens eget datablad, och varje sida i kategorin är märkt Granskning av det skälet. Kapaciteten står med det villkor tillverkaren anger, för 20 liter vid 30 grader och 80 procent är inte 20 liter vid 12 grader och 75. Saknas villkoret på produktsidan står det ej angivet, och vi räknar inte fram en siffra åt tillverkaren.

Tre saker har vi räknat själva: kilowattimmar per månad ur märkeffekten, kilowattimmar per liter där tillverkaren anger både effekt och kapacitet vid samma villkor, och dimensioneringstabellen med Magnus-formeln. Konstanterna och källorna står under [så räknar vi](/rakna/avfuktare/#sa-raknar-vi).

Valen ovan bygger på vad databladen säger om lägsta arbetstemperatur, tank, slanganslutning och effekt, och på att vi hellre pekar på en maskin med svenskt datablad än på en billigare utan. Det är därför eeese Adam 20 inte är vårt val trots lägre pris och lägre uppgiven ljudnivå.

Det som fattas är mätningen. Kapacitet i kammare vid 10 och 20 grader och ljud på 1 och 3 meter är planerade, och när de är gjorda byts etiketten till Test och den här texten skrivs om. Metoden i sin helhet står under [så testar vi](/om/sa-testar-vi/).

Utvecklaren: rubriken heter "Så granskade vi", inte "Så testade vi", eftersom vi aldrig skriver "testade" om en granskning (docs/INNEHALLSARKITEKTUR.md avsnitt 7). Den byts tillbaka när kammartestet finns. Notera i `docs/INNEHALLSARKITEKTUR.md` avsnitt 7 att rubriken heter "Så granskade vi" tills första testet är gjort.

---

## src/content/guider/fukt/fukt-i-kallaren.mdx

Interimsversion. Den fullständiga problemguiden skrivs av skribenten i nästa innehållsomgång (plan, avsnitt e). Den här versionen finns för att sidan är länkad från två godkända artiklar och från huben, och för att det som står i dag är en synlig platshållare, ett produktkort på en maskin som inte finns i databasen och en siffra som säger emot köpguiden.

Fält (ersätter `produkter`, `kortSvar` och `kallor`, lägg till `uppdaterad`):

```
uppdaterad: 2026-09-16
produkter:
  - slug: woods-sw39fw
    forVem: Källare på upp till 40 kvm vid 60 till 70 procent, som håller över 10 grader året om.
kortSvar: >-
  Tejpa en bit plastfolie mot källarväggen och vänta minst två dygn. Vatten på plastens
  utsida är kondens, då hjälper en avfuktare. Vatten på insidan, mot väggen, är markfukt,
  då hjälper ingen maskin förrän du dränerat. Rinnande vatten efter regn är ett läckage,
  ring någon.
kallor:
  - titel: Gör Det Själv, putsning av källarvägg med diffusionsöppen puts (Rolf Murhart, 2025-12-04)
    url: https://gds.se/hus/inomhusklimat/fukt-i-kallare/laga-fuktskador-paa-ratt-satt
  - titel: Målare Gustavsberg, måla källarväggar av betong
    url: https://malare-gustavsberg.se/blogg/mala-kallarvaggar-av-betong-guide-till-fukt-primer-och-farg/
  - titel: Boverket, PBL kunskapsbanken, högsta tillåtna fukttillstånd (BBR 6:52)
    url: https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/boverkets-byggregler/fuktsakerhet/hogsta-tillatna-fukttillstand/
```

Brödtext (ersätter allt under frontmatter):

Källaren luktar i augusti och färgen släpper längst ner på väggen. Innan du köper något ska du veta om vattnet kommer ur luften eller ur marken, för det ena löser en avfuktare och det andra gör den bara dyrare.

Den här sidan är kort med flit. Den fullständiga guiden, med mätvärden från vår egen källare, kommer i höst. Testet nedan kan du göra i dag.

## Tejptestet, två dygn och en bit plast

Skär en bit plastfolie på 50 gånger 50 cm och tejpa den mot källarväggen där den ser våtast ut, med bred tejp runt hela kanten så att det blir tätt. Vänta minst två dygn. Gör Det Själv rekommenderar en vecka, en målerifirma i Gustavsberg nöjer sig med 24 till 48 timmar. Ju längre plasten sitter, desto tydligare blir svaret.

Sedan tittar du. Droppar på plastens utsida, mot rummet, betyder att luften i källaren bär mer vatten än den kalla väggen tål. Det är kondens. Droppar på insidan, mot väggen, betyder att vattnet kommer genom betongen. Det är markfukt. Är plasten torr på båda sidor har du inte hittat den våtaste väggen, flytta den.

## Tre orsaker, tre olika åtgärder

Kondens är det vanliga i en uppvärmd källare på sommaren. Varm luft kommer in genom fönster och dörr, kyls mot väggen och släpper vatten. Det syns som våta rör, mörka hörn och lukt i augusti. Luft på 20 grader och 70 procent har daggpunkten 14,4 grader, och en källarvägg på 12 grader ligger under den; varför står i [rätt luftfuktighet inomhus](/fukt/luftfuktighet-inomhus/). Åtgärden är mindre vädring på sommaren och en avfuktare.

Markfukt trycker in genom betongen när dräneringen är gammal eller aldrig fanns. Plasten är våt på väggsidan, färgen släpper i sjok, och det blir inte bättre av att du vädrar. En avfuktare sänker luftfuktigheten några procent och väggen är fortfarande våt. Pengarna ska läggas utanför huset, på dränering.

Läckage är vatten som kommer efter regn eller snösmältning, ofta i ett hörn eller vid en rörgenomföring. Det är det enda av de tre som kan bli akut, och det enda där svaret är att ringa någon direkt.

<Varning rubrik="Mögel bakom skivor">
Har du gipsskivor eller träpanel mot källarväggen kan det växa mögel bakom utan att det syns. Öppna en bit innan du köper något. Boverket räknar 75 procent relativ fuktighet som kritiskt fukttillstånd för material, och en vägg bakom en skiva ligger ofta där. Svart mögel på stora ytor sanerar du inte själv.
</Varning>

## Om det är kondens

Här kommer maskinen, och bara här. Håller källaren över 10 grader året om räcker en kondensavfuktare, ligger den under 10 grader en längre period på vintern behöver du sorption. En källare på 40 kvm med 2,2 meter i tak och 65 procent i augusti behöver 16 liter märkt kapacitet, alltså siffran på lådan, och vid 75 procent 22 liter. Hela resonemanget, tabellen och tre maskiner med sina nackdelar står i [rätt avfuktare till källaren](/fukt/avfuktare-kallare/).

<Produktkort produkt="woods-sw39fw" variant="kompakt" modul="kort_kompakt" etikett="Bäst totalt" forVem="Källare på upp till 40 kvm vid 60 till 70 procent, som håller över 10 grader året om." />

Hur stor just din källare behöver räknar du ut här:

<Verktygskort kalkylator="avfuktare" />

---

## src/content/sidor/om.mdx

Fält: `uppdaterad: 2026-09-16`. Övriga fält oförändrade.

Brödtext (ersätter allt under frontmatter):

Hantverkstips är en kunskapssajt för den som bygger och sköter hus, startad i september 2026 av Christian Karlsson. Vi skriver om fukt, om väggar och infästning, om altan när säsongen kommer, och om maskinerna som behövs för att göra jobbet. Produkterna kommer sist i texten, efter resonemanget, och ibland är svaret att inte köpa något alls.

Två saker skiljer oss från butikernas köpguider och från bäst i test-sajterna. Vi räknar: kalkylatorerna bygger på fysik och tillverkarnas datablad, med varje antagande utskrivet och märkt som källa eller gissning. Och vi säger vad vi inte vet: en maskin vi inte haft i handen kallas granskad, aldrig testad, och en kapacitet tillverkaren inte anger står som ej angivet i stället för en uppskattning.

Sajten finansieras av annonslänkar till Proffsmagasinet. Hur det fungerar och vad det inte påverkar står på [så tjänar vi pengar](/om/sa-tjanar-vi-pengar/). Hur vi granskar, räknar och så småningom mäter står på [så testar vi](/om/sa-testar-vi/).

Hittar du ett fel, ett pris som inte stämmer eller en produkt som utgått, skriv till oss via [kontaktsidan](/om/kontakt/). Vi svarar inom en vecka.

Sajten drivs av [FÖRETAGSNAMN, POSTADRESS].

Utvecklaren: sista raden fylls i med det Christian lämnar. Lämnar han inget företagsnamn skrivs raden "Sajten drivs av Christian Karlsson, [ORT]." Samma uppgift går in i `organisation()` i `src/lib/strukturdata.ts` om fältet finns där.

---

## src/content/sidor/sa-testar-vi.mdx

Fält: `uppdaterad: 2026-09-16`. Övriga oförändrade.

Brödtext (ersätter allt under frontmatter):

I september 2026 har vi inte mätt något själva. Varje siffra på sajten kommer ur ett datablad, en myndighetskälla eller vår egen räkning, och var den kommer ifrån står vid siffran. Den här sidan säger vad det betyder för dig som läser, och vad som ändras när mätningarna börjar.

## Test eller granskning

Ett test betyder att vi har haft produkten och mätt. En granskning betyder att vi jämfört tillverkarens datablad med mätningar från namngivna tredje parter. Etiketten står överst på varje sida och i den strukturerade datan, och vi skriver aldrig "vi testade" om en granskning. I dag är allt på sajten granskning.

## Vad vi gör med ett datablad

Vi återger tillverkarens siffra med villkoret den är mätt vid. En avfuktare som anges till 20 liter per dygn vid 30 grader och 80 procent luftfuktighet står så, inte som "20 liter", för i en svensk källare i november ger den en bråkdel av det. Saknar produktsidan villkoret skriver vi ej angivet. Saknar den siffran helt, som ljudnivån för flera av Wood's maskiner, skriver vi det också, och vi lånar inte ett värde från en systermodell.

När två källor säger olika saker, som Acetecs 48 dBA mot butikens 46 för samma maskin, går vi på tillverkaren och skriver ut båda.

## Så räknar vi i kalkylatorerna

Avfuktarkalkylatorn räknar belastningen i augusti, den värsta månaden, i tre poster: vattnet som redan står i luften, det som kommer in med uteluften och det som avdunstar från golvet. Summan får en marginal på 1,3 och räknas om till siffran på lådan med en faktor för hur mycket en kondensmaskin tappar vid 15 grader och en sorptionsmaskin vid 10. Varje konstant är märkt som källa eller antagande i tabellen under [så räknar vi](/rakna/avfuktare/#sa-raknar-vi), och de svagaste leden, markfukten och faktorn vid 15 grader, står utpekade där. Resultatet är ett intervall, inte ett exakt tal.

Mättnadsånghalt och daggpunkt räknas med Magnus-formeln enligt Lawrence 2005, med en osäkerhet på 0,35 grader. Elkostnader räknas ur märkeffekt gånger timmar, med SCB:s elpris för hushåll, 2,40 kr per kWh juli till december 2025 inklusive nätavgift, skatt och moms, och datumet står alltid vid beloppet.

## Vad som kommer att mätas

Planerat, i den här ordningen. Relativ fuktighet och temperatur i fyra rum i ett bostadshus under en vecka i vinter och en i sommar, med hygrometern kontrollerad i mättad koksaltlösning, som ger 75,3 procent vid 25 grader enligt Greenspan 1977. En avfuktare i en verklig källare i sju dygn, med liter i tanken, gångtimmar och elmätarens värde per dygn, vilket avgör om marginalen 1,3 i kalkylatorn är rätt. Kapacitet vid 10 och 20 grader i kammare för de maskiner vi pekar på. Ljudnivå på 1 och 3 meter. Gipspluggar belastade till brott i 13 mm gips.

Instrumentens modell skrivs ut när mätningen publiceras, och tabellen "Vi mätte" mot "Tillverkaren uppger" fylls i på varje testsida. Mätvärden som saknas i en tabell står tomma. Vi fyller inte i dem på känsla.

---

## src/content/sidor/sa-tjanar-vi-pengar.mdx

Fält: `uppdaterad: 2026-09-16`. Övriga oförändrade.

Brödtext (ersätter allt under frontmatter):

När du klickar på en köpknapp på Hantverkstips går du till Proffsmagasinet via en annonslänk. Handlar du där får vi en provision på ordervärdet från butiken, via affiliatenätverket Adtraction. Priset för dig är detsamma som om du gått direkt till butiken.

Så här ser det ut i september 2026. Sajten är ny och ännu inte godkänd i Proffsmagasinets program. Tills det är klart går länkarna till butikens produktsida utan spårning, och vi tjänar ingenting på dem. Vi skriver om den här sidan när det ändras.

## Vad provisionen inte påverkar

Produktexperten väljer vilka maskiner en sida tar upp, och vilken som lyfts, innan den som ansvarar för annonslänkarna ser texten. Provisionen är densamma oavsett maskin, så det finns inget att vinna på att peka på en dyrare. Vi skriver "köp inte" när det är svaret, och två av maskinerna i vår köpguide om avfuktare avråder vi från med angivet skäl.

Vi tar inte betalt av tillverkare eller butiker, och ingen annonsör ser en sida innan den publiceras. Får vi låna en maskin för ett test står det på testsidan.

## Så ser du var länkarna finns

Varje sida med annonslänkar har ett band överst som säger det, och under varje köpknapp står "Annonslänk" med datumet priset hämtades. Länkar i källförteckningen är vanliga länkar utan provision. Kunskapsartiklar utan produkter har varken band eller köpknappar.

## Vad vi loggar när du klickar

Ett klick sparas med produkt, butik, vilken av våra sidor du kom från och var på sidan knappen satt. Ingen IP-adress och ingen uppgift som kan kopplas till dig. Mer om det på [integritet](/om/integritet/).

Utvecklaren: stycket "Så här ser det ut i september 2026" byts när Adtraction godkänt programmet. Lägg en kommentar i filen om det.

---

## src/content/sidor/kontakt.mdx

Fält: `uppdaterad: 2026-09-16`. Övriga oförändrade.

Brödtext (ersätter allt under frontmatter):

Skriv till [E-POSTADRESS]. Vi svarar inom en vecka, oftast fortare.

Det vi helst vill höra om är fel: ett pris som inte stämmer, en maskin som utgått, en siffra som inte matchar databladet, eller en mätning du gjort själv som säger emot vår tabell. Skriv vilken sida det gäller.

Vi säljer inget och lagerför inget, så frågor om leverans och retur går till butiken du handlade i.

Tillverkare och butiker som vill att vi tar upp en produkt skickar databladet. Vi lovar ingen text, och det som skrivs skrivs utan att ni läser det först.

Utvecklaren: e-postadressen skrivs som en vanlig `mailto:`-länk med adressen som länktext. Saknas adressen från Christian commitas inte sidan; då står den gamla texten kvar en dag till.

---

## src/content/sidor/integritet.mdx

Fält: `uppdaterad: 2026-09-16`. Övriga oförändrade.

Brödtext (ersätter allt under frontmatter):

Hantverkstips sätter inga kakor som kräver samtycke, och du ser därför ingen samtyckesruta. Här står vad som ändå loggas.

## När du klickar på en köpknapp

Klicket går via vår egen adress /go/ innan du skickas vidare till butiken. Då sparar vi vilken produkt du klickade på, vilken butik länken gick till, vilken sida på hantverkstips.se du kom från och var på sidan knappen satt. Vi sparar ingen IP-adress och ingen annan uppgift som kan kopplas till dig. Klicket får ett löpnummer som följer med till affiliatenätverket Adtraction, så att ett köp kan räknas till rätt sida hos oss, men numret säger inget om vem du är.

Butiken du kommer till har egna villkor och egna kakor, och det är där du tar ställning till dem. Adtraction sätter inga kakor på vår sajt.

## Besöksstatistik

Vi använder Vercel Analytics för att se hur många som läser vilka sidor. Tjänsten sätter inga kakor. Vi ser antal besök per sida, inte vem som besökt.

## Kalkylatorerna

Det du fyller i en kalkylator ligger i adressfältet, så att du kan dela uträkningen. Det sparas inte hos oss.

## Frågor

Undrar du något om det här, skriv till oss via [kontaktsidan](/om/kontakt/).

Utvecklaren: avsnittet "Besöksstatistik" tas med bara om `@vercel/analytics` finns i `package.json` vid commit. Det gör det inte i dag (PLAN.md steg 6 slår på det vid lansering). Utan paketet stryks avsnittet, och läggs in i samma commit som paketet.

---

## src/content/forfattare/redaktionen.md

Fält:

```
presentation: Vi granskar tillverkarnas datablad och räknar själva. Ingen egen mätning är publicerad än, och det står där den saknas.
```

Brödtext (ersätter allt under frontmatter):

Redaktionen står som författare på kategorisidor, kalkylatorer och sidor där ingen enskild person skrivit texten. I september 2026 är det alla sidor. Sajten är nystartad av Christian Karlsson, och en författarsida med namn, yrke, år i yrket och foto kommer när den första egna mätningen är publicerad.

Det redaktionen står för är sättet att arbeta. Varje siffra har en källa vid sig, tillverkarens kapacitet återges med villkoret den är mätt vid, och en maskin vi inte haft i handen kallas granskad, inte testad. Hur det går till, och vad som kommer att mätas, står på [så testar vi](/om/sa-testar-vi/).

---

## Nya sidor, texten i mallarna

Sidorna byggs av utvecklaren mot designansvarigs spec. Texten nedan är den enda redaktionella på dem; resten är listor som mallen genererar.

### /amnen/ (Alla ämnen)

H1: Alla ämnen

Ingress: Sajten är ordnad efter husets problem, inte efter butikens hyllor. Två ämnen är i gång, resten är på väg och listas utan länk tills de har något att visa.

Title-tagg: Alla ämnen · Hantverkstips

Description: Alla ämnen på Hantverkstips, från fukt inomhus till väggar i gips, med bäst i test-sidor och kalkylatorer. Två i gång, sex på väg.

Rad för ämnen som inte är publicerade (utan länk): "På väg. Altan i februari, Verktyg i mars." Övriga pelare (Tak, Grund, Isolering, El) nämns inte förrän de har ett datum.

### /guider/ (Alla guider och tester)

Namnet följer designansvarigs spec, avsnitt 6 i `design-startsida-oversikt-2026-09-16.md`.

H1: Alla guider och tester

Ingress: Varje guide, kunskapsartikel, test och jämförelse på sajten, nyast först. Etiketten säger typ och nivå, så du ser om sidan är skriven för dig. Det vi inte haft i handen är märkt Granskning, inte Test.

Title-tagg: Alla guider och tester · Hantverkstips

Description: Alla guider, kunskapsartiklar, tester och jämförelser på Hantverkstips, nyast först, med typ och nivå på varje kort.

Filtersidorna, svar på designansvarigs fråga om ordval. "Enkel" står som Enkel i filtret och i etiketten, precis som i artikelhuvudet, och blir inte "för nybörjare" i H1: gipsskruvguiden är enkel nivå och skriven för proffs, så nybörjare är fel ord för halva målgruppen. H1 per filter:

| Filter | H1 | Title-tagg |
|---|---|---|
| Ämne | "Guider och tester om " plus pelarens namn i gemener, alltså "Guider och tester om fukt och inomhusklimat" | "Guider om fukt och inomhusklimat · Hantverkstips" |
| Typ | Typen i plural, "Köpguider", "Problemguider", "Projektguider", "Kunskapsartiklar", "Tester och granskningar", "Jämförelser", "Bäst i test" | Samma som H1 plus " · Hantverkstips" |
| Nivå enkel | Enkla guider, klara på en dag | Enkla guider · Hantverkstips |
| Nivå mellan | Guider på mellannivå | Guider på mellannivå · Hantverkstips |
| Nivå expert | Expertsidor och undersökningar | Expertsidor och undersökningar · Hantverkstips |

Description per filter, mallgenererad: "Alla " plus H1 i gemener plus " på Hantverkstips, nyast först, med typ och nivå på varje kort." För nivåsidorna: "Sidor på nivå enkel" respektive mellan och expert i stället för H1.

---

## Mätplatshållarna i de publicerade texterna

Ligger kvar enligt koordinatorns beslut, men versaler i hakparentes ser oavslutat ut för läsaren och för Google (affiliategranskningen punkt 9). Inga värden, bara läsarmeningar. Utvecklaren byter ordagrant.

`src/content/guider/fukt/avfuktare-kallare.mdx`, rad 189 till 191. Nuvarande två stycken ersätts med ett:

Mätningen i vår egen källare pågår. Relativ fuktighet och temperatur en vecka före och en vecka efter avfuktarstart, plus elmätarens värde, publiceras här när två veckor gått.

`src/content/kunskap/fukt/sorptionsavfuktare.mdx`, rad 163 till 165. Nuvarande två stycken ersätts med ett:

Vår egen ljudmätning på 1 och 3 meter i ett kallt utrymme pågår och publiceras här när den är klar.

`src/content/kunskap/fukt/luftfuktighet-inomhus.mdx`, rad 116 och 120 till 125. Rubriken "Så här såg det ut hemma hos oss i [månad]" blir "Så här ser det ut hemma hos oss", kolumnrubrikerna "Vinter hos oss" och "Sommar hos oss" blir "Vinter hos oss (mäts i december)" och "Sommar hos oss (mäts i augusti)", och alla åtta cellerna med "[MÄTNING SAKNAS ...]" töms. Stycket under tabellen säger redan att cellerna står tomma tills vi mätt själva, så inget mer behövs. MDX-kommentaren på rad 118 tas bort.
