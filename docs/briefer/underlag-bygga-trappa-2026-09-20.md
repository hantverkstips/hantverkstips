# Underlag: bygga trappa, `/golv/bygga-trappa/`

Skribentens eget underlag, skrivet 2026-09-20. Uppdrag: huvudfras "bygga trappa", 880 sökningar per
månad, topp september, vinnbarhet 5 enligt `docs/SOKORDSANALYS.md` avsnitt 7.2 och 7.6. Typ
projektguide, pelare golv, nivå mellan. Inga produkter, inga produktkort.

## 1. Sökanalys

Sökningen gjord 2026-09-20 på svenska. Topp 5 organiskt: beijerbygg.se, clasfixare.se, viivilla.se,
byggmax.se (två träffar, "bygga trappa inomhus" och "bygga altantrappa"), byggoteknik.se.

**Ettan, beijerbygg.se/privat/sv/bygga-trappa.** Hämtad och läst. Det är en kategorisida i
butikens navigering, inte en guide. Ingen trappformel, inga mått, ingen bild på en trappkonstruktion,
inget publiceringsdatum, ingen källa, ingen brödtext utöver rubriken. Den rankar på domän.

**Tvåan, clasfixare.se/bygga-trappa-utomhus.** Hybrid mellan guide och offertsida, cirka 1 500 till
1 800 ord, med rubriken "Låt oss hjälpa dig bygga din utomhustrappa" mitt i texten. Anger steghöjd
14 till 18 cm och stegdjup 28 till 35 cm utan källa. Ingen trappformel, inget om frostdjup, ingen
Boverkshänvisning, inget datum. Bara utomhus.

**Trean, viivilla.se/gor-det-sjalv/trappor/bygga-trappa-utomhus.** Den hederligaste sidan i fältet.
Publicerad 2006-03-30, uppdaterad 2025-10-24, skriven av snickaren Jan Ohlis. Har trappformeln i
formen "två sättstegshöjder plus ett insteg ska bli 630 mm", sätter sättstegshöjden till högst
150 mm, och har en spännviddstabell för planstegen (28 mm bär 700 mm, 34 mm bär 800 mm, 45 mm bär
1 000 mm). Ingen Boverkshänvisning, ingen källa till talen. Bara utomhus.

**Sökintention.** Delad, och det är hela öppningen. Två av topp tre svarar bara på utetrappan,
Byggmax har en sida för inne och en för altantrappan, och ingen sida i toppen löser båda på en
adress. Den som söker "bygga trappa" i september är i två lägen: entrétrappan eller altantrappan ska
stå före hösten, eller källaren eller vinden ska få en trappa som håller. Båda behöver samma tre
tal (steghöjd, stegdjup, antal steg) och sedan helt olika saker.

**Ingen sida i topp fem nämner Boverket.** Byggreglerna byttes 1 juli 2026, och de sidor som ändå
citerar regler citerar de gamla råden i BBR utan att veta om det.

### Så blir vår sida bättre än ettan

1. **Den löser båda intentionerna på en adress.** Trappformeln och antalet steg är gemensamt, sedan
   ett eget avsnitt för innetrappans hål i bjälklaget och ett för utetrappans fundament. Ingen sida i
   topp fem gör det.
2. **Den citerar rätt författning, med paragraf.** BFS 2024:9 2 kap. 5, 6, 7, 8, 11, 12, 13 och
   25 §§, hämtade 2026-09-20, plus att föreskriften uttryckligen inte anger några stegmått. Fältet
   citerar antingen ingenting eller gamla BBR-råd som upphörde 1 juli 2026. (Löftet skärptes
   2026-09-20 efter granskningens krav 5.1.1, som visade att den första formuleringen "5 till 13 §§"
   lovade fler paragrafer än sidan bar. Nu står exakt de paragrafer sidan citerar, och sidan bär
   dem alla. 9 och 10 §§ handlar om sjukbårstransport och om fallskydd i allmänhet, och de är
   medvetet utelämnade: bårkravet gäller inte en villatrappa, och fallskyddet täcks av 11 §.)
3. **Den räknar, och räkningen är delbar.** Kalkylatorn `/rakna/trappa/` bäddas in där formeln
   förklaras och ger antal steg, steghöjd, stegdjup och trapplängd ur våningshöjden. Den enda
   svenska trappräknaren i fältet är enligt sökordsanalysen en artikel från 2012 med en app från
   2020, och den nämner inte Boverket.
4. **Den har talen ettan och tvåan saknar helt:** trapplängden på golvet, hålets längd i bjälklaget
   vid 2,00 meter fri höjd, plinthålets djup, träskyddsklasserna och anmälningsplikten när
   bjälklaget bryts.
5. **Den säger var de lösa talen på internet kommer ifrån.** Stegdjupet "minst 0,25 meter i
   gånglinjen" är ett allmänt råd ur gamla BBR som inte gäller längre, och det står på halva fältet
   som om det vore ett krav.

### Rubrikstruktur

H1 Bygga trappa, inne och ute. H2: trappformeln; räkna stegen ur våningshöjden; vad Boverket kräver;
innetrappan och bjälklaget; utetrappan och fundamentet; vangstycke eller stödkonsol; felen som inte
går att rätta.

### Interna länkar

Ut: `/altan/bygga-altan/` (stommen och tjäldjupet), `/altan/bygglov-altan/` (höjden över mark),
`/altan/trallskruv/` (rostfritt i tryckimpregnerat), `/golv/renovera-trappa/` (befintlig trappa),
`/grund/inreda-kallare/` (källaren som ska få en trappa), plus `/rakna/trappa/` via inbäddningen.
In: förslagen står i rapporten.

## 2. Faktaunderlag

### Svenskt Trä, byggbeskrivningen "Bygg en trappa"

Hämtad 2026-09-20 från `byggbeskrivningar.se/utvandigt/trappor/`, sidan uppdaterad 2021-07-18,
publicerad 2017-10-01. Alla mått i mm där inget annat anges.

| Uppgift | Värde | Ordagrant hos källan |
|---|---|---|
| Trappformeln | 2 × steghöjden + stegdjupet = 600 till 650 | ja |
| Formelexempel | steghöjd 150 ger stegdjup 300 | ja |
| Steghöjd | 140 till 200 | ja |
| Stegdjup | minst 250, normalt cirka 300 | ja |
| Normal trappa | 300 djupa plansteg, 150 höga sättsteg | ja |
| Stigningsvinkel | 17 till 30 grader | ja |
| Utomhus mot inomhus | utvändiga trappor bör ha mindre lutning | ja |
| Fall på steget | cirka 1:50, alltså cirka 1,2 grader | ja |
| Vangstycke, tjocklek | 45 | ja |
| Vangstycke, hög yttertrappa | 45 × 195 till 220 | ja |
| Plansteg, hög yttertrappa | två bitar 45 × 145, springa 10, ger 300 djup | ja |
| Stödkonsoler | 34 × 45, skruvlimmade mot vangstyckets insida | ja |
| Gängstång som hopdragning | 10 mm med brickor och muttrar | ja |
| Ledstång | 900 över planstegsnosen mot vägg | ja |
| Plinthål | 500 till 700 om marken är stadig, annars till frostfritt djup | ja |
| Pappform i plinthålet | 150 | ja |
| Träskyddsklass, markkontakt och säkerhetskritiska delar | NTR/A | ja |
| Träskyddsklass, övrigt ovan mark | NTR/AB | ja |
| Bärande delar | konstruktionsvirke lägst C14 | ja |
| Beslag, spik, skruv, bult | rostfritt stål eller varmförzinkat | ja |
| Målning | inte på trä med fuktkvot över 16 % | ja |
| Alkydfärg | täckmålad yta, men trappan blir hal vid fukt och frost | ja |
| Sågat virke ute | minskar halkrisken | ja |
| Låg yttertrappa, springa | 5 mellan tralläkten, distansbitar som mall | ja |
| Låg yttertrappa, stegnos | främre tralläkten överlappar sättsteget med 10 | ja |
| Låg yttertrappa, stegen | första steget 123 högt, övriga 145, vid 28 tjock tralläkt | ja |
| Ordlista | vangstycke = trappans sida, plansteg = trappsteget, sättsteg = höjdavståndet mellan planstegen | ja |

Källan säger också, om beräkningsordningen: "När man vet trappans totala höjd och djup, delas först
djupet med 300 för att få fram antal plansteg. Därefter delas höjden med antalet plansteg för att få
fram sättstegshöjden." Vi vänder på den ordningen i texten, eftersom villaägarens låsta mått är
höjden och inte djupet, och säger att vi gör det.

### Boverket, säkra trappor och ramper

Hämtad 2026-09-20 från PBL kunskapsbanken, sidan "Säkra trappor och ramper". Senast granskad och
senast ändrad 1 juli 2026, publicerad 16 december 2024. Föreskriftstexterna nedan är dessutom
kontrollerade mot författningens egen pdf, `rinfo.boverket.se/BFS2024-9/pdf/BFS2024-9.pdf`, och
stämmer ordagrant.

**Rätt författning är BFS 2024:9, inte BFS 2024:8.** Uppdraget pekade på BFS 2024:8, som är
föreskrifterna om bostäders och byggnaders utformning (rumshöjd, dagsljus) och som systersidan
`/grund/inreda-kallare/` bygger på. Trappor ligger i Boverkets föreskrifter (BFS 2024:9) om säkerhet
vid användning av byggnader, 2 kap. Uppförande av nya byggnader. Ingen paragraf om trappor finns i
BFS 2024:8.

| Sidans påstående | Paragraf | Utfall |
|---|---|---|
| Trappor ska vara utformade så att personer kan förflytta sig säkert | BFS 2024:9 2 kap. 5 § | ordagrant |
| Öppningar mellan plansteg högst 100 mm | 2 kap. 6 § | ordagrant |
| Plan mellan dörr och nedåtgående trappa, minst 0,8 m i utrymningspassage | 2 kap. 7 § | ordagrant |
| Kontrastmarkering, gäller inte en- och tvåbostadshus | 2 kap. 8 § | ordagrant |
| Skydd mot fall vid trappor | 2 kap. 10 § | ordagrant |
| Barnsäkerhet: 0,8 m klätterskydd, 100 mm vertikala öppningar, 50 mm till stegnosen, 100 mm till trapplanet, inga öppningar 110 till 230 mm | 2 kap. 11 § | ordagrant |
| Ledstänger på båda sidor, en räcker om det är obehövligt | 2 kap. 12 § | ordagrant |
| Ledstången ska gå att gripa om, löpa kontinuerligt, ge stöd före och efter | 2 kap. 13 § | ordagrant |
| Fri höjd minst 2,00 m i trappor | 2 kap. 25 § | ordagrant |

Vägledningen, ordagrant och viktigast på hela sidan: "För trappor behöver även stegdjup och
steghöjd, och måttförhållandet mellan dem, utformas på ett sätt så att trappan blir säker. Kravet
anger inga mått, eftersom det behövs en riskanalys av det enskilda fallet." Och: "Som vägledning
finns standarder och handböcker om utformning av säkra trappor och ramper."

Gränsdragningen, ordagrant: "Exempelvis en entrétrappa eller entréramp betraktas som en del av
byggnaden och omfattas av reglerna om säkerhet för byggnader. Krav på säkra gångvägar på tomter finns
i Boverkets föreskrifter (BFS 2024:13) om krav på tomter." BFS 2024:13 4 kap. 1 § gäller gångvägar
mellan entré och parkerings- och angöringsplatser.

Sidan säger också att kraven ska tillämpas vid uppförande av nya byggnader, och att de vid ändring
av byggnad får anpassas om det finns skäl.

**Ikraftträdandet, ordagrant ur författningens pdf:** "1. Denna författning träder i kraft den
1 juli 2025. 2. Äldre bestämmelser i Boverkets byggregler (2011:6) ... får dock tillämpas i den
utsträckning som framgår av punkten 3 i övergångsbestämmelserna till Boverkets föreskrifter
(2024:14)." Alltså två datum, inte ett: föreskriften gäller sedan 1 juli 2025, och möjligheten att i
stället följa BBR upphörde 1 juli 2026. Artikeln skriver båda, och skriver dem i den ordningen.

**Samma tal som verktyget.** `src/lib/kalkyl/trappa.ts` landade under arbetets gång och är byggd på
samma konstanter: formelsumman 630 mm, steghöjd 140 till 200 mm, stegdjup normalt 300 mm, lutning 17
till 30 grader, BFS 2024:9 och de borttagna BBR-råden 0,25 respektive 0,30 meter. Modulens
standardvärden ger artikelns räkneexempel tal för tal (2 700 mm, sexton steg, 169 mm, 292 mm, 4,4 m,
30 grader), och `scripts/test-kalkyl-trappa.mjs` läser artikelns tabell och räkneexempel från disk.
Alla 19 testerna är gröna 2026-09-20.

### Boverkets gamla byggregler, BBR, som inte gäller längre

Hämtat 2026-09-20 ur Boverkets egen pdf över avsnitt 8, BFS 2011:6 ändrad t.o.m. BFS 2014:3.
Möjligheten att tillämpa BBR upphörde 1 juli 2026 (verifierat i granskningen av
`/grund/inreda-kallare/`, `docs/briefer/granskning-grund-2-2026-09-20.md` avsnitt 2).

- 8:232, allmänt råd: "Stegdjupet i trappor bör vara minst 0,25 meter, mätt i gånglinjen."
- 8:91, allmänt råd, trappor i gångvägar på tomten: "Trappstegens djup i en trappa bör vara minst
  0,30 meter, mätt i gånglinjen. För att minimera risken att någon snubblar bör en trappa ha fler än
  två steg." Samt "Ledstången bör sitta på 0,9 meters höjd."
- 8:2321, allmänt råd: "Räcken i trapplopp bör vara minst 0,9 meter höga. Om en öppning vid sidan av
  ett trapplopp är större än 0,4 meter i båda längdriktningarna och våningshöjden är mer än
  3,0 meter, mätt från golv till golv, bör räcket vara minst 1,1 meter."
- 8:2322, allmänt råd: "Ledstänger bör sitta på 0,9 meters höjd... De bör löpa förbi trappan eller
  rampens början och slut med minst 30 cm."

Obs: pdf:en är en konsoliderad lydelse t.o.m. BFS 2014:3, inte den sista lydelsen av BBR. Talen ovan
används därför i texten bara som "det gamla rådet sa", aldrig som gällande krav, och 0,9 meter för
ledstången stöds dessutom av Svenskt Träs 900 över planstegsnosen.

**Tre BBR-uppgifter som inte håller, och som inte ska in här (kontrollerat efter granskningen
2026-09-20).** Granskningen slog fast att BBR aldrig angav en steghöjd, aldrig trappformeln och
aldrig en trappbredd på 0,9 meter; BBR:s breddtal var 1,20 m för sjukbårstransport och 2,5 m för
delning i flera lopp, och 0,9 m i BBR är räckes- och ledstångshöjd. Jag har läst igenom det här
underlaget mot den listan: **ingen av de tre uppgifterna finns i det**, varken i tabellerna eller i
löptexten, och ingen av dem har stått i artikeln. Raderna ovan citerar bara stegdjupet, antalet steg
ute, trapplanets djup, räckeshöjden och ledstångshöjden, som alla fyra bekräftades i granskningen.
Noteringen står kvar här så att talen aldrig vandrar in den här vägen: steghöjdens spann kommer från
Svenskt Trä, trappformeln kommer från Svenskt Trä, och 900 mm fri bredd kommer från TMF, se nedan.

### Trä- och Möbelföretagen, handledningen för trätrappor

Hämtad 2026-09-20 som pdf (`tmf.se/imagevault/.../trappguide-131126.pdf`), sammanställd av SP Trätek
och trappgruppen inom TMF, daterad 2013. Branschhandledning som hänvisar till upphävda regler och
alltså inte kan åberopas som regelkälla, men den bär ett tal ingen annan svensk källa ger:

- "Trappor inom enfamiljshus/lägenheter utförs vanligtvis med en fri bredd av 900 mm." Ordagrant,
  sidan 3 i pdf:en. Det är källan bakom artikelns breddstycke, som före granskningen bara vilade på
  egen erfarenhet.
- "Lämplig steghöjd är 170-210 mm. Stegdjupet rekommenderas vara minst 250 mm i gånglinjen."
  Ordagrant, men används inte i artikeln: Svenskt Trä är den färskare och snävare källan, och två
  spann för samma sak på samma sida hjälper ingen.

### Arbetsmiljöverket, AFS 2023:12

Hämtad som pdf 2026-09-20 från `av.se`, i kraft 1 januari 2025. **Den enda gällande svenska
författningen med stegmått i klartext.** 25 §, allmänt råd, ordagrant: "För att en trappa ska vara
säker att använda bör minsta stegdjup normalt vara 0,25 meter och största steghöjd 0,18 meter.
Trappan bör ha kontrastmarkeringar samt ha ledstänger på en höjd av 0,9 meter, mätt vid stegnosen."
Föreskriften gäller arbetsplatser, inte bostäder, och artikeln skriver ut det i samma stycke som
talen.

### SIS/TS 59:2025

Produktsidan hos SIS hämtad 2026-09-20: beteckning SIS/TS 59:2025, titel *Trappor, ramper, räcken
och balkonger, säkerhet vid användning*, fastställd 20 maj 2025, status gällande, pris 1 250 kr för
pdf eller papper. SIS egen nyhet 2025-02-07 ger syftet, med projektledaren Tobias Lundgren ordagrant:
"Innehållet grundas till stor utsträckning på Boverkets allmänna råd som försvinner i samband med att
samexistensperioden mellan Boverkets gällande föreskrifter och deras nya löper ut 2026." **Det är
den standard Boverkets vägledning syftar på.** Den ligger bakom betalvägg, vi har inte läst den, och
artikeln säger båda sakerna rakt ut.

### Boverket om lovplikten för en entrétrappa

Sidan "Ändra fasad eller tak", publicerad 4 juni 2026, hämtad 2026-09-20, ordagrant: "Du behöver
vare sig bygglov eller anmälan för att ändra fasad eller tak på ditt hus." Samma sida listar de fem
skälen till utökad lovplikt, däribland "närmare gräns än 4,5 meter", och att kommunen kan ha beslutat
om ändrad lovplikt i detaljplan. Datumet 1 december 2025 för bygglovsreformen är inte hämtat ur den
här sidan utan ur granskningen av `/grund/inreda-kallare/`, där PBL i lydelsen enligt Lag 2025:974
och PBF enligt Förordning 2025:979 verifierades mot Boverkets författningsrutor. Artikeln bär
datumet som reformens datum, aldrig som ett eget regelpåstående.

### Boverket om ingrepp i bärande delar

Sidan "Ingrepp i husets bärande delar", publicerad 4 juni 2026, hämtad 2026-09-20. Ordagrant:
"Däremot krävs en anmälan till kommunens byggnadsnämnd om du vill göra ändringar som innebär att
byggnadens bärande delar i ditt hus påverkas väsentligt" och "Om de bärande delarna påverkas
väsentligt måste du lämna in en anmälan till byggnadsnämnden och invänta att du får ett startbesked
innan du påbörjar arbetena". Listan över vanliga bärande delar i ett småhus tar upp "Bjälklag:
källarbjälklag, bottenbjälklag, mellanbjälklag".

Författningsstödet, PBF 6 kap. 1 § punkt 2 i lydelsen enligt Förordning (2025:979), ordagrant:
anmälan krävs vid "en ändring av en byggnad, om ändringen innebär att konstruktionen av byggnadens
bärande delar påverkas väsentligt". Läst i författningsrutan på Boverkets anmälningssida
2026-09-20.

### Våra egna uträkningar

Märkta i texten som våra.

**Exempeltrappan inne.** Våningshöjd 2 700 mm golv till golv. 16 stigningar ger steghöjd 168,75 mm,
avrundat 169. Trappformeln med summan 630 ger stegdjup 630 − 337,5 = 292,5 mm, avrundat 292.
Trapplängd på golvet: 15 stegdjup, eftersom det översta planet är övre golvet, alltså
15 × 292,5 = 4 387,5 mm, avrundat 4,4 m. Lutning arctan(168,75/292,5) = 30,0 grader, alltså precis på
Svenskt Träs övre gräns.

**Hålet i bjälklaget.** Samma trappa, bjälklag 300 mm tjockt, alltså undersidan på 2 400 mm.
Fri höjd 2,00 m kräver att taket är minst 400 mm över stegytan. Stigningen är 0,577 mm per mm i
längdled, så de 400 mm är uppnådda 693 mm in i trappan. Hålets längd blir 4 387,5 − 693 = 3 694 mm,
avrundat 3,7 m.

**Lutningstabellen.** Stegdjupet i tabellen är räknat med formelsumman 630, och lutningen är
arctan(steghöjd/stegdjup): 140/350 = 21,8; 150/330 = 24,4; 160/310 = 27,3; 170/290 = 30,4;
180/270 = 33,7 grader.

### Det vi inte kunde hämta

1. **Innehållet i den standard Boverket hänvisar till.** Efter granskningen är standarden hittad och
   namngiven, SIS/TS 59:2025, men den kostar 1 250 kr och ligger bakom betalvägg. Vi har alltså
   namnet, titeln, datumet och syftet men inte ett enda tal ur den, och sidan säger det rakt ut.
   (Den första versionen av det här underlaget skrev att ingen standard gick att hitta. Det var för
   tidigt uppgivet: sökningen fastnade på SS 831335, som visade sig vara snörasskydd.)
2. **Någon svensk branschorganisation för trappor med tekniskt underlag på webben.** Sökningen ger
   trappfirmor (Trappverket, Forssells, Trappspecialisterna) och nischsajter. Närmast en
   branschkälla är Trä- och Möbelföretagens handledning för trätrappor, som är hittad och läst efter
   granskningen och som bär breddmåttet, men den är från 2013 och hänvisar till upphävda regler.
3. **Villaägarna om trappor.** Sökning på villaagarna.se ger bygglovssidor i allmänhet, ingen sida om
   trappor, räcken eller trappmått. Källan utgår.
   - Tillagt efter granskningen: **Boverkets egen sida om gamla BBR:s trappavsnitt svarar 404**
     sedan övergångsperioden gick ut. Vi läser därför BBR ur Boverkets pdf över avsnitt 8.
4. **Sista lydelsen av BBR avsnitt 8.** Boverket publicerar pdf:en t.o.m. BFS 2014:3 på den adress
   som rankar; senare konsolideringar hittades inte som pdf. Talen används därför bara som historik.
   Öppna gärna i webbläsare om formuleringen ska citeras skarpare.
5. **Byggmax två sidor och byggoteknik.se** lästes bara som sökträffar, inte i sin helhet, eftersom
   topp tre räckte för att fastställa intentionen och luckan.
