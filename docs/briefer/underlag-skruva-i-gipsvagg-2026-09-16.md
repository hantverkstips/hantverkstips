# Underlag: skruva i gipsvägg

Skrivet 2026-09-16 av skribenten. Sidtyp problemguide, URL `/inomhus/skruva-i-gipsvagg/`, nivå enkel, pelare inomhus. Huvudfras "skruva i gipsvägg" (840/mån, YoY 0 %). Sekundära: "plugg gipsvägg", "gipsplugg tv", "hänga tung hylla gipsvägg", "hitta regel i gipsvägg". Volymer ur `docs/data/keyword-stats-2026-09-16.csv` via `docs/SOKORDSANALYS.md` avsnitt 2 rad 10.

Inga pluggar finns i produktdatabasen, så sidan har inga köpknappar och inget reklamband. Pluggtyper nämns generiskt, aldrig som artikelnummer.

## 1. Vad som rankar och vad ettan gör

Sökresultat lästa 2026-09-16.

| Plats | Sida | Vem | Vad den ger | Vad den saknar |
|---|---|---|---|---|
| 1 | [Hemfixarna, skruva i gipsvägg](https://hemfixarna.se/2025/03/17/skruva-i-gipsvagg/) | Tjänsteföretag, lead-generering | Tre korta avsnitt: "Så får du bäst resultat", "Välj rätt skruv och infästning", "Skruva i gipsvägg utan plugg". Nämner mollyplugg och gipsankare, säger att man ska leta regel för tungt, nämner tv som exempel | Inte en enda siffra. "Lätt pryl" och "tyngre föremål" är hela viktresonemanget. Ingen tabell, ingen bild, ingen källa, ingen skivtjocklek, ingen felsökning |
| 2 | FixarTV, "Välj rätt skruv för gipsvägg" (YouTube) | Video | Visar pluggtyper i handen | Ingen text att ranka mot, inga värden, inget om regel |
| 3 | [Byggahus, forumtråd om skruv i gipsvägg med stålregel](https://www.byggahus.se/forum/en/threads/screw-for-drywall-with-metal-stud-plywood.570013/) | Forum | Riktiga svar från folk som gjort det | Odaterat, spretigt, en enda vägg diskuteras, ingen sammanställning |
| 4 | [Bygghemma, så väljer du rätt plugg till gipsvägg](https://www.bygghemma.se/reportage-och-guider/plugg-gipsvagg/) | Butik | Flest pluggtyper av alla: expanderplugg, metallexpander, gipsankare, gipskrok, expandertång. Bra på borrmomentet | Skriver rakt ut att man "måste ha koll på hur stor vikt din infästning klarar (vilket brukar framgå av produktspecifikationen)" och ger sedan **noll** värden. Inget om regelsökning, inget om tv |

Ettans problem i en mening: den beskriver pluggarna men vägrar säga vad de bär.

## 2. Sökintention

Två läsare på samma fras, båda med samma oro.

1. **Hemmafixaren med en sak i handen.** Hyllan, tv:n, badrumsskåpet, handdukshängaren. Vill veta: håller det, och vad ska jag köpa. Hon vet inte vad saken väger och vet inte att det spelar roll per skruv.
2. **Den som redan misslyckats.** Pluggen snurrar i hålet, eller hyllan lossnade med en bit gips. Söker samma fras och vill ha felet förklarat.

Intentionen är informativ med ett köpbeslut i svansen (pluggpaket för under hundralappen), inte kommersiell. Därför problemguide, inte köpguide.

**Sidtyp.** Problemguide. Läsaren har ett problem, inte ett projekt: hon ska inte bygga något i en ordning utan avgöra vilken infästning som gäller för hennes sak. Projektguidens signaturmodul "Det här behöver du" kräver dessutom verktyg med produktslug i databasen (`content.config.ts`, `behover.verktyg[].produkt`), och den modulen renderas inte under tre rader. Problemguidemallen ger i stället "Kort svar" som en ordning, vilket är exakt vad sidan behöver, och utlöser inget reklamband när `produkter` är tom (`Artikel.astro` rad 60 till 67).

## 3. Minst tre sätt vår sida blir bättre än ettan

1. **Egen viktabell "vad väger saken, vilken infästning".** Ettan och tvåan har inga kg alls. Vi bygger en tabell från tillverkarnas värden (avsnitt 4), märkt som tillverkarvärden i en 13 mm skiva, och räknar per infästningspunkt i stället för per föremål. Ingen svensk sida på frasen har det.
2. **Beslutsträd regel, plugg eller kortling.** Ettan säger "leta regel om det är tungt". Vi ger gränsen: vad som får sitta i skivan ensam (Norgips: 5 till 6 kg på en skruv), vad plugg klarar, och när väggen ska öppnas för en kortling (Norgips om oregelbunden last och värme).
3. **Felen som gör att pluggen roterar.** Ingen av de fyra sidorna har ett felavsnitt. Vi har fem fel med orsak: för stort hål, dammet kvar, dragaren på fullt moment, plugg för kort skiva, fästpunkter för tätt (Norgips 50 mm respektive 300 mm).
4. **Tv-fästet som eget avsnitt.** "gipsplugg tv" och "montera tv på gipsvägg" (90/mån) har ingen sida som räknar på hävarmen från ett svängarmsfäste. Vi skriver att fyra punkter i två reglar är svaret och varför vinkelfästet ändrar räkningen.
5. **Hitta regeln med cc-måtten och fyra metoder i ordning.** "hitta regel i gipsvägg" (110/mån, +57 % tre månader) är en egen fras som ingen av de fyra svarar på.

## 4. Faktaunderlag, en källa per påstående

### 4.1 Vad skivan själv bär

- "Lättare saker upp till 5-6 kg kan du hänga på en skruv, som du fäster direkt i gipsskivan med en lämplig plugg." Källa: [Norgips, hänga upp saker på väggen](https://www.norgips.se/situation/hanga-saker/).
- Avstånd mellan fästpunkter: skruv med plugg bör inte sitta tätare än 50 mm från varandra; ska varje skruv bära maximal belastning ska avståndet ökas till minst 300 mm. Källa: Norgips, hänga upp saker på väggen, och [Norgips, hänga upp saker på gipsvägg](https://www.norgips.se/kunskapsbank/nar-du-vill-kunna-hanga-saker-pa-vaggarna/): "Det skall alltid vara minst 50 mm mellan fästpunkterna när man använder plugg (borrat hål)."
- Tak: högst cirka 20 kg per fästpunkt vid infästning direkt i skivorna, och stift eller X-krok fungerar inte i tak. Källa: Norgips, hänga upp saker på gipsvägg.
- Ultra-board bär upp till 23 kg per skruv och 60 kg med rätt plugg. Källa: Norgips, hänga upp saker på väggen. (Gäller en specifik skiva, inte vanlig normalgips. Används bara som jämförelse, inte i tabellen.)
- Tyngre upphängningar och oregelbunden last (bänkskivor, större hyllplan, fönsterbeslag, väggmonterad badrumsarmatur) ska ha tvärreglar eller kortlingar bakom gipset. Värmeelement och varma lampor ska alltid i regel eller kortling, eftersom varaktig temperatur över 50 °C gör skivan spröd. Källa: Norgips, hänga upp saker på väggen.
- Kortlingshållare finns som färdig produkt (Norgips KB 12 för 12 mm byggplywood, passar trä- och stålreglar, monteras med förmonterad dubbelhäftande tejp). Källa: Norgips, hänga upp saker på gipsvägg.

### 4.2 Tillverkarvärden per pluggtyp

Alla värden nedan är tillverkarens eller leverantörens **rekommenderade last per plugg**, inte brottlast, och gäller den skivtjocklek som anges. fischer anger 12,5 mm, alltså den skiva som i Sverige kallas 13 mm.

| Typ | Produktexempel | 1 lag 12,5 mm | 2 lag 12,5 mm | Källa |
|---|---|---|---|---|
| Självborrande gipsplugg, nylon | fischer GK | 8 kg (7 kg i 9,5 mm) | ej angivet | [fischer, Plasterboard fixing GK](https://www.fischer-international.com/en/products/cavity-fixings/board-fixing/plasterboard-fixing-gk) |
| Självborrande gipsplugg, metall | fischer GKM | 8 kg (7 kg i 9,5 mm) | ej angivet, förborras ø 8 mm | [fischer, Plasterboard fixing metal GKM](https://www.fischer-international.com/en/products/cavity-fixings/board-fixing/plasterboard-fixing-metal-gkm) |
| Självborrande med utvikande blad | fischer DuoBlade | 10 kg (8 kg i 9,5 mm) | 20 kg | [fischer, Plasterboard fixing DuoBlade](https://www.fischer-international.com/en/products/cavity-fixings/board-fixing/plasterboard-fixing-duoblade) |
| Kilformat clips | Essve Arrow Anchor | 10 kg | 15 kg | [Gör Det Själv, varianter av gipspluggar, 2026-07-21](https://gds.se/vagg/gipsvagg/varianter-av-gipspluggar) |
| Hålrumsplugg ø 6 | expanderplugg för hålrum | 18 kg | 28 kg | Gör Det Själv, som ovan |
| Gipsankare med utvikande fot | Duck Foot | 25 kg | 40 kg | Gör Det Själv, som ovan |
| Molly, metallexpander med rosett ø 10 | vikplugg i metall, sätts med tång | 38 kg | 70 kg | Gör Det Själv, som ovan |
| Vipplugg med krok | fjäderplugg | ej angivet | 25 kg, bara tak | Gör Det Själv, som ovan |

Noteringar:

- DuoBlade anger dessutom 34 kg i 12,5 mm gipsfiberskiva. Källa: fischer, DuoBlade. Gipsfiberskiva är inte vanlig gips och värdet får inte blandas in i tabellen.
- fischers HM (metallhålrumsplugg, molly) anger paneltjocklek 6 till 15 mm och sätts med tången HM-Z 1 eller med skruvdragare där infästningen själv används som vridstopp. Lasttabellen ligger i en PDF som inte gick att läsa maskinellt, så vi anger ingen siffra från fischer för molly. Källa för monteringen: [fischer, Metal cavity fixing HM](https://www.fischer-international.com/en/products/cavity-fixings/board-fixing/metal-cavity-fixing-hm).
- Gör Det Själv skriver själva att "de angivna vikterna kan variera från tillverkare till tillverkare och ska därför endast betraktas som vägledande". Det ska stå i tabellfoten.
- Essve: plugg används "vid relativt låg belastning", exempel "spegel, mindre vägghyllor, gardinskenor, lättare belysning eller kabelstegar", och "universalplugg ersätter inte betongankare eller kemisk infästning (ankarmassa)", som är "utvecklade för höga laster och montage med krav på dokumenterad hållfasthet". Källa: [Essve, en plugg för flera material](https://essve.com/sv/bygguider/allt-om-betong-och-lattbetong/en-plugg-for-flera-material-sa-fungerar-universalpluggen). Alltså: kemankare hör hemma i betong och hålsten, inte i en 13 mm gipsskiva.

Vår egen belastningsundersökning (åtta pluggtyper i 13 mm gips belastade till brott med hängvåg, `/inomhus/gipsplugg/`) är inte gjord. Texten säger att den kommer och redovisar inga egna siffror.

### 4.3 Hitta regeln

- Svenska innerväggsreglar sitter vanligtvis c 600 eller c 450, räknat från ett hörn, en yttervägg eller en dörrpost. Källa: [BraByggare, hitta regel i vägg](https://www.brabyggare.se/info/hitta-regel-i-vagg/).
- Regelavstånd från byggbeskrivningen: c 400 när du sätter en skiva, c 600 när du sätter två lag med förskjutna skarvar. Källa: [Svenskt Trä, bygga innervägg](https://www.byggbeskrivningar.se/renovering/bygga-innervagg/). Gyproc standardstålstomme är c 450, och första skruven högst 100 mm från hörnet. Källa: [Gyproc, standardstålstomme c 450](https://www.gyproc.se/gyproc-standardstalstomme-c-450-mm-montering-av-profiler-och-gipsskivor).
- Metoder: knacka ("Över en regel låter det ofta dovare medan det mellan reglarna låter ihåligt"), regeldetektor ("det enklaste alternativet", "en av de mest tillförlitliga metoderna"), stark magnet som dras längs väggen tills den fastnar på en skruv eller spik, och synliga ledtrådar: "synliga regelskruvar eller spikhuvuden ... bakom golvlister, socklar eller i närheten av eluttag". Källa: BraByggare, som ovan.
- Skruvraden i skivan: gipsskivan är skruvad c 200 längs kanterna och c 300 i fält, alltså följer en lodrät rad skruvar varje regel. Källa: [Norgips, att tänka på innan montering](https://www.norgips.se/kunskapsbank/att-tanka-pa-innan-montering/) via `docs/briefer/underlag-fakta-gipsskruv.md` avsnitt 3.

### 4.4 El i väggen

- "Titta efter där strömbrytare, vägguttag och lamputtag sitter. Mellan dem, i raka linjer, lär det gå elrör." "De flesta ledningar går lodrätt i väggarna. Har du två lamputtag finns det också risk att det går ett vågrätt elrör däremellan. Elledningar ligger oftast formade i ett rutnät." Elsökare är "ett bra verktyg, men det är inte hundra procent säkert". Källa: [Bostadsrätterna, slipp stöta dig med elen i väggen](https://www.bostadsratterna.se/nyheter/fixartipset/2022/slipp-stota-dig-med-elen-i-vaggen).

## 5. Rubrikstruktur

H1: Skruva i gipsvägg, så sitter hyllan, tv:n och skåpet kvar

1. Kort svar (frontmatter): väg saken, dela på antalet skruvar, under 5 kg räcker skivan, över 20 kg ska det i regel.
2. Huvudbild: genomskärning med fyra pluggtyper sida vid sida.
3. H2 Det är vikten per skruv som avgör, inte vikten på saken
4. H2 Hitta regeln innan du köper en enda plugg (cc-mått, fyra metoder, Varning om el)
5. H2 Fyra pluggar, och vad tillverkarna säger att de bär (viktabellen)
6. H2 Hyllan, skåpet och handdukshängaren
7. H2 Tv:n är en hävarm, inte en vikt (Varning över 30 kg)
8. H2 Fem fel som gör att pluggen roterar i hålet
9. H2 När du ska öppna väggen i stället (kortling)

Längd 1 200 till 1 800 ord. Komponenter: Faktaruta, Varning (el, tung tv), Illustration (två), Markering (ett nyckeltal), tabeller.

## 6. Interna länkar

Ut från sidan, minst tre:

1. `/inomhus/gipsskruv/` i avsnitt 4 eller 9, ankartext om gipsskruvens längd mot trä och stål. Given i uppdraget.
2. `/inomhus/gipsplugg/` när belastningsundersökningen är publicerad. Skrivs som HTML-kommentar tills sidan finns.
3. `/inomhus/hanga-tavla-gipsvagg/` för det lätta fallet, tavlan. Kommentar tills sidan finns.
4. `/inomhus/bygga-innervagg/` för regelavstånd och kortlingar. Kommentar tills sidan finns.

In till sidan, minst två inom en vecka (föreslås i rapporten, skribenten rör inte andras filer): från `/inomhus/gipsskruv/` sista avsnittet, som redan har en platshållarkommentar, och från `/inomhus/gipsplugg/` när den skrivs.

## 7. Det vi inte vet

- fischers lasttabeller för HM (molly) och KD (fjäderplugg) ligger i PDF:er som inte gick att läsa maskinellt. Molly- och fjäderpluggvärdena i tabellen kommer därför från Gör Det Själv, inte från fischer, och är märkta så.
- Gyprocs tre sidor om lätta, medeltunga och tunga upphängningar (5 till 15 kg, upp till 20 kg, upp till 35 kg) svarar 403 på maskinell hämtning. Chefredaktören bör läsa dem manuellt innan publicering och komplettera tabellen med Gyprocs egna gränser.
- Ingen källa anger hur mycket ett tv-fäste med svängarm ökar lasten på den övre skruvraden. Texten resonerar om hävarmen utan att ange en faktor.
- Våra egna brottlaster finns inte förrän `/inomhus/gipsplugg/` är gjord.
