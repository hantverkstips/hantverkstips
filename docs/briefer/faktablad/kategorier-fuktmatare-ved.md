# Faktablad: ved före eldning, till /fuktmatare/

Beställt av hantverkaren 2026-10-04. Underlag till kategorisidan `src/content/kategorier/fuktmatare.md` (valet "ved och virke") och till räknaren /rakna/fuktkvot/ (checklistan `docs/briefer/seo-checklista-2026-10-04/raknare-fuktkvot.md`, avsnitt 5, punkt 5 "Ved").

Läst 2026-10-04. Ingen tidigare hämtning fanns i `docs/briefer/` (sökt på "ved", "eldning", "fukthalt", "Energimyndigheten", "Naturvårdsverket", "Skogsstyrelsen"). `affiliate-fukt-2026-09-30.md` nämner ved som användning för Bosch UniversalHumid men har inget tal och ingen källa för gränsen.

## 1. Gränsen

| Tal | Storhet som källan skriver | Källa | Rang | Sidans datum |
|---|---|---|---|---|
| 15–20 procent | "fukthalt", ej definierad | Naturvårdsverket, Elda med ved i kamin, spis och ugn | Myndighet | Granskad 16 februari 2026 |
| 15–20 procent | "fukthalt", ej definierad | Naturvårdsverket, Elda med ved i vedpanna | Myndighet | Granskad 16 februari 2026 |
| "runt 15-20 procent" | "fukthalt", ej definierad | Energimyndigheten, Braskaminer (test) | Myndighet | Senast uppdaterad 2016-03-07 |
| 15–20 procent | "fukthalt", ej definierad | Brandskyddsföreningen, Elda rätt i din eldstad (nyhet) | Branschorganisation | Publicerad 2024-11-08 |
| under 10 procent = "väldigt torrt" | "fukthalt" | Naturvårdsverket, kamin-sidan | Myndighet | Granskad 16 februari 2026 |
| runt 50 procent nyhuggen | "fukthalt" | Naturvårdsverket, båda sidorna | Myndighet | Granskad 16 februari 2026 |

**Storheten:** Alla fyra källor skriver "fukthalt". Ingen av dem definierar ordet, varken som andel av hela vikten eller av torrvikten (kontrollerat: sidorna innehåller inte "torrvikt", "fuktkvot" eller någon definition med "vikt"). Att "fukthalt" här betyder vatten i procent av hela vedens vikt är branschens vanliga språkbruk men **står inte i källan**. Skriv det inte som källans uppgift.

### Citat, ordagrant

Naturvårdsverket, "Elda med ved i kamin, spis och ugn", rubrik "Torr ved", granskad 16 februari 2026, läst 2026-10-04:
<https://www.naturvardsverket.se/vagledning-och-stod/luft-och-klimat/vedeldning/elda-med-ved-i-kamin-spis-och-ugn/>

> "Veden ska vara lagom torr. Det innebär att den har en fukthalt på 15–20 procent. Alltför fuktig ved ger sämre förbränning och större utsläpp av luftföroreningar, eftersom vattnet först måste kokas av. En bra tumregel att veden bör ha legat utomhus under tak i minst ett halvår och gärna ett år. Under den tiden hinner fukthalten minska från runt 50 procent till runt 15–20 procent."

> "Använd den ved du tar in inom ett par veckor, annars kan den bli lite väl torr. Ett väldigt torrt vedträ med en fukthalt under tio procent brinner upp fort och ger lite mindre värme. Dessutom blir utsläppen av föroreningar som sot och kolväten lite högre när vedträn som är väldigt torra eldas."

(Meningen "En bra tumregel att veden bör ..." saknar "är" i källan. Citerat som det står.)

Naturvårdsverket, "Elda med ved i vedpanna", granskad 16 februari 2026, läst 2026-10-04:
<https://www.naturvardsverket.se/vagledning-och-stod/luft-och-klimat/vedeldning/elda-med-ved-i-panna/>

> "Veden ska vara lagom torr, vilket innebär en fukthalt på 15–20 procent. Det finns fuktmätare som kan användas för att mäta fukthalt i vedträ. Annars är en tumregel att veden bör ha legat utomhus under tak i minst ett halvår och gärna ett år. Under den tiden hinner vedens fukthalt minska från runt 50 procent som nyhuggen till runt 15–20 procent."

Energimyndigheten, "Braskaminer" (test), senast uppdaterad 2016-03-07, läst 2026-10-04:
<https://www.energimyndigheten.se/effektiv-energianvandning/tester/tester-a-o/braskaminer/>

> "Elda med torr ved som har en fukthalt på runt 15-20 procent."

> "I testet används björkved med en fukthalt på 15 till 20 procent."

> "Den ved du eldar med bör ha lagrats inomhus de sista veckorna, men inte så länge att veden blir förr torr, det kan ge en lägre verkningsgrad."

("förr torr" står så i källan.)

Brandskyddsföreningen, "Elda rätt i din eldstad", publicerad 2024-11-08, läst 2026-10-04:
<https://www.brandskyddsforeningen.se/nyheter/elda-ratt-i-din-eldstad/>

> "När du eldar med ved – se till att veden är torr. Det innebär att den har en fukthalt på 15–20 procent. En bra tumregel är att veden bör ha legat utomhus under tak i minst ett halvår, gärna ett år."

## 2. Omräkning till fuktkvot (EGEN)

**EGEN räkning**, under antagandet att källornas "fukthalt" är vatten i procent av hela vikten (antagandet står inte i källorna, se ovan). Formel: u = w / (100 − w) × 100.

| Fukthalt w (källan) | Fuktkvot u (EGEN) | Uträkning |
|---|---|---|
| 10 % (för torr, NV) | 11,1 % | 10 / 90 × 100 |
| 15 % (nedre gräns) | 17,6 % | 15 / 85 × 100 |
| 20 % (övre gräns) | 25,0 % | 20 / 80 × 100 |
| 50 % (nyhuggen, NV) | 100 % | 50 / 50 × 100 |

Följd för sidan (EGEN iakttagelse): en fuktmätare för trä visar normalt fuktkvot. Visar mätaren 20 procent fuktkvot motsvarar det cirka 16,7 procent fukthalt (20 / 120 × 100, EGEN), alltså inom källornas spann. Källornas övre gräns 20 procent fukthalt motsvarar 25 procent på en mätare som visar fuktkvot. Om en viss mätare visar fuktkvot eller fukthalt måste läsas i dess datablad, per produkt; det är inte hämtat här.

## 3. Källorna mot varandra

Alla fyra ger samma tal (15–20) och samma ord (fukthalt). Ingen motsägelse. Tyngst väger Naturvårdsverket: myndigheten med ansvar för vägledning om vedeldning, sidorna granskade februari 2026, och de är de enda som också ger undre gränsen (under tio procent är för torrt) och utgångsläget (runt 50 procent nyhuggen). Energimyndighetens sida är från 2016 och Brandskyddsföreningens text upprepar Naturvårdsverkets formulering nästan ordagrant.

## 4. Att mäta veden

Det enda källorna säger om mätning:

- Naturvårdsverket, vedpanna: "Det finns fuktmätare som kan användas för att mäta fukthalt i vedträ." (adress ovan)
- Naturvårdsverket, kamin: "Det finns också fuktmätare att köpa om du vill mäta vedens fukthalt mer exakt." Samma stycke ger ett test utan mätare: "Ett enkelt sätt att testa om veden är lagom torr är att stryka lite diskmedel och vatten på ena änden av ett vedträ och blåsa kraftigt från andra änden. Om det bildas luftbubblor i diskmedlet kan luften transporteras genom vedträets längsgående fibrer och veden är lagom torr." (adress ovan)

**Saknas:** ingen av de lästa källorna säger något om att klyva vedträt, mäta på nyklyvd yta, var på vedträt eller vid vilken temperatur. Det rådet finns i sökträffar bara hos butiker och vedsäljare (vedmatch.se, varmekoncept.se, kaminhusetnalden.se), som inte är källor. Behövs det på sidan ska det hämtas ur en mätartillverkares bruksanvisning (till exempel Bosch UniversalHumid), per produkt.

## Osäkert och saknat

- Definitionen av "fukthalt" i källorna: saknas. Omräkningen i avsnitt 2 vilar på ett antagande.
- Skogsstyrelsen och Boverket: inte lästa, eftersom Naturvårdsverket och Energimyndigheten redan ger talet.
- Sveriges Skorstensfejaremästares Riksförbund (sotarna.se): sidan svarade inte (ingen anslutning, 2026-10-04). Inte läst.
- WebFetch gav 404 på båda Naturvårdsverkets sidor; samma adresser gav HTTP 200 med curl och texten ovan är läst ur den hämtade sidan, inte ur sökmotorns utdrag.

## Interna länkar (ur checklistan)

- `/rakna/fuktkvot/` (fukthaltsläget gör talet användbart)
- `/fukt/fuktkvot/`
