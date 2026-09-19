# Underlag: självbesiktning av källaren

Skrivet 2026-09-19 av utvecklaren inför verktyg 17 i `docs/VERKTYGSPLAN.md`, alltså `src/lib/kalkyl/kallare.ts` och sidan `/rakna/kallare/`. Verktyget räknar inte, det bedömer, som bygglovsverktyget och pluggväljaren.

Till skillnad från dräneringsverktyget hämtade utvecklaren inga nya källor. Hela faktaunderlaget finns redan: guiden `/fukt/fukt-i-kallaren/` och dess underlag `docs/briefer/underlag-fukt-i-kallaren-2026-09-16.md`. Verktyget är den guiden gjord till en checklista, och varje konstant och varje regel pekar tillbaka hit eller dit. Ett påstående som inte står där står inte i verktyget.

Avsnitt 5 listar vad chefredaktören ska verifiera innan sidan går ut ur utkast.

## 1. Sökanalys

**Reservation.** Bara huvudfrasen har data. Volymerna för de tre fraserna verktyget siktar på gick inte att hämta: Googles verktyg kräver ett aktivt annonskonto, och `docs/data/keyword-stats-2026-09-16.csv` täcker 56 fraser där ingen av de tre ingår. Talen nedan är därför **uppskattningar** utom den första raden, och uppskattningarna publiceras inte på sidan.

| Fras | Sökningar per månad | Varifrån talet kommer |
|---|---|---|
| fukt i källaren, fuktig källare | 480, YoY -46 % | `docs/SOKORDSANALYS.md`. Google slår ihop de två varianterna och räknar dem en gång |
| fuktig källare vad göra, fukt i källaren åtgärd | 100 till 400 | Uppskattning. Svansen på huvudfrasen, och den delen av den som har en handling i sig |
| besiktiga källare själv, kolla fukt i källaren | 30 till 150 | Uppskattning. Liten fras, men den med närmast intention till vad verktyget gör |

Säsongen är känd och står i samma dokument: frasen toppar i september med 880 sökningar och bottnar i december till januari med 170. Kondensen som driver toppen är ett sommarproblem, juli till september enligt guiden. Registret sätter därför säsongen till juli till oktober.

**Ettan på huvudfrasen** är Anticimex, ett sanerings- och besiktningsföretag, med Gör Det Själv och Ocab efter sig. Analysen av alla tre ligger i avsnitt 1 i `underlag-fukt-i-kallaren-2026-09-16.md` och upprepas inte här. Det som gäller just det här verktyget är att **ingen av dem har ett verktyg alls**. De listar orsaker parallellt, som om de vore lika sannolika och lika lätta att skilja åt, och ingen av dem frågar läsaren vad hon faktiskt ser.

**Vad vår sida har som ettan saknar.**

1. En diagnos ur läsarens egna svar, inte en orsakslista att läsa uppifrån och ner.
2. Tejptestets tre utfall som val i ett formulär, inte som en mening mitt i en text. Gör Det Själv beskriver ett av tre.
3. Symptomtabellens sex rader som kryssrutor, med guidens troliga orsak och nästa steg bakom varje rad.
4. Hygrometern vägd mot Boverkets gräns på 75 procent, med raden att talet inte säger varifrån vattnet kommer.
5. En utskriven prioritetsordning mellan indata, märkt som vårt eget antagande. Ingen konkurrent säger vad som väger tyngst när två tecken pekar åt olika håll.
6. Att torr plast betyder fel vägg och inte frisk källare. Ingen annan sida skriver det.
7. Svaret i adressen, så att det går att dela eller klistra in i ett forum.
8. Källa eller antagande per rad i en tabell på tjugo rader, och länk till var och en.
9. Fyra saker att inte göra, som följer av diagnosen och inte av vad någon vill sälja.
10. Vägen vidare till rätt verktyg: avfuktarkalkylatorn vid kondens, dräneringsverktyget vid markfukt, en fuktutredning med pris vid läckage eller oklart.

## 2. Reglerna, en per rad med källa

### Steg 1, titta

| Vad läsaren kryssar i | Trolig orsak | Källa |
|---|---|---|
| Vita ränder eller kristaller på betongen | Markfukt | [Villaägarna](https://www.villaagarna.se/radgivning-och-tips/utomhus/grund/maste-du-dranera-huset/): saltutfällningar är ett tecken på att vägg och källargolv är fuktiga |
| Färg eller puts som bubblar och släpper nedtill | Markfukt | Guiden: markfukt bakom ett ytskikt som är för tätt. Mekaniken ur [Boverket](https://www.boverket.se/sv/byggande/forebygg-fel-brister-skador/risker-byggande/risker-fuktskador/fuktrisker-for-grund/fuktrisker-med-kallare/risk-med-fuktintrangning-kallarvagg/) |
| Imma på kallvattenrör, fukt på hela väggen sommartid | Kondens | Guidens symptomtabell. ANTAGANDE, ingen extern källa |
| Mörk fläck i ett hörn bakom en hylla | Kondens | Guiden: en kall punkt där luften står still. ANTAGANDE |
| Rinnmärken eller pöl vid en rörgenomföring efter regn | Läckage | Guidens symptomtabell. ANTAGANDE |
| Tvätt som inte torkar, unken lukt som kommer och går | Hög luftfuktighet | [Folkhälsomyndigheten](https://www.folkhalsomyndigheten.se/regler-och-tillsyn/tillsynsvagledning-och-stod/halsoskydd-vagledning-och-tillsyn/tillsynsvagledning-om-fukt-och-mikroorganismer/): mikrobiell växt eller lukt är en indikation på fuktskada |

Tabellen som helhet är vår egen sammanställning och står märkt så i antagandetabellen på sidan. Tre av sex rader har en namngiven källa, tre vilar på mekaniken som guiden beskriver.

### Steg 2, tejpa

- **Testet.** En bit plastfolie på 50 gånger 50 cm, tejpad tätt mot väggen där den ser våtast ut. Källa: [Gör Det Själv](https://gds.se/hus/inomhusklimat/fukt-i-kallare).
- **Tiden. ANTAGANDE i valet, inte i talen.** Gör Det Själv säger två veckor, [Målare Gustavsberg](https://malare-gustavsberg.se/blogg/mala-kallarvaggar-av-betong-guide-till-fukt-primer-och-farg/) säger 24 till 48 timmar. `TEJPTEST_DYGN` är 2, alltså den undre kanten, med en vecka som säkrare. Samma formulering som guiden redan publicerar.
- **Utfall 1, fukt på rumssidan: kondens.** Luften bär mer vatten än den kalla väggen tål. Källa: Gör Det Själv och guiden.
- **Utfall 2, fukt på väggsidan: markfukt.** Vattnet kommer genom betongen. Källa: Gör Det Själv och Boverket.
- **Utfall 3, torrt på båda sidor: fel vägg. ANTAGANDE.** Gör Det Själv beskriver bara det ena utfallet och säger ingenting om det torra. Att torr plast betyder fel vägg och inte frisk källare är vår läsning, publicerad i guiden.
- **Två lappar på samma vägg.** Markfukt transporteras kapillärt, alltså i vätskefas genom porerna, och vattnet stiger högre i finporösa material än i grova. Källa: [Polygon, fukttransport](https://www.polygongroup.com/sv-SE/Nyheter/fukttransport/).

### Steg 3, mät

- **Gränsen. Källa.** `KRITISK_RF` är 75. I BBR 6:52 anges 75 procent relativ fuktighet som kritiskt fukttillstånd när materialets eget värde inte är väl undersökt, och fuktigheten bör inte överstiga det under längre tid. Källa: [Boverket, högsta tillåtna fukttillstånd](https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/boverkets-byggregler/fuktsakerhet/hogsta-tillatna-fukttillstand/). Villaägarna säger samma sak i praktisk form.
- **Börvärdet. ANTAGANDE.** `HYGROSTAT_RF` är 60. Ingen källa anger ett börvärde för en hygrostat i en källare. Femton procentenheter under gränsen ger marginal utan att maskinen går i onödan, och talet står redan i guiden.
- **Mättiden. ANTAGANDE.** `HYGROMETER_DYGN` är 7. Guidens symptomtabell säger "hygrometer i en vecka" på raden om tvätt som inte torkar. Ingen extern källa anger en mättid; en vecka täcker ett väderomslag.
- **Gränserna för fältet. ANTAGANDE i undre kanten.** 1 till 100 procent. Övre kanten är fysikens, mättad luft. Undre kanten är vår: en hygrometer i en svensk källare som visar under en procent är ett felskrivet fält.
- **Säsongen. ANTAGANDE.** Kondens i en uppvärmd källare är ett sommarproblem, juli till september. Guiden skriver det om mekanismen, inte som en andel, och avsnitt 5 i `underlag-fukt-i-kallaren-2026-09-16.md` säger uttryckligen att ingen statistik hittats över hur ofta de tre orsakerna förekommer. Årstiden ändrar därför aldrig diagnosen, den lägger till en rad.
- **Källarens användning. Källa.** Villaägarnas femtio år gäller uttryckligen en källare som används som källare. Folkhälsomyndigheten räknar fukt i ett rum man vistas i som en möjlig olägenhet för människors hälsa. Inte heller den här frågan ändrar diagnosen.

### Steg 4, åtgärda

- **Markfukt skyddas utifrån. Källa.** Boverket: fukttransporten från marken är främst kapillär, ibland genom diffusion, tillförseln är långsam, och väggen ska skyddas på utsidan, inklusive fyllningen som ligger an mot den. Förbehållet om att sidan renderas med JavaScript och är avläst i andra hand står i avsnitt 4 i `underlag-fukt-i-kallaren-2026-09-16.md` och gäller även här.
- **Det billiga först. Källa.** 20 mm regn på ett tak på 150 kvm ger 3 000 liter vatten. Källa: [Anticimex](https://www.anticimex.se/fuktskador/grund-kallare/).
- **Dräneringens pris. Källa.** Cirka 3 000 kr per löpmeter husgrund i arbetskostnad, upp till det dubbla. Källa: Villaägarna. Räkneexemplet på 40 löpmeter, alltså 120 000 kr, är guidens eget; multiplikationen är vår. Vad just läsarens grund kostar räknas i `/rakna/dranering/`, och det här verktyget dubblerar inte den räkningen.
- **Avfuktarens pris. Källa.** 5 948 kr, Wood's SW39FW hos [Proffsmagasinet](https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/woods-sw39fw-i-ecodefrost-avfuktare-med-luftfilter-140-m-4058317), läst 16 september 2026.
- **Fuktutredningens pris. Källa.** 5 355 kr inklusive moms för fuktkontroll av ett källarutrymme, [Ocabs](https://www.ocab.se/fukt-och-vattenskador/fukt-i-kallare/) eget listpris. Konkurrentens pris, använt som storleksordning.
- **Kondens eller sorption. ANTAGANDE.** Tio grader. En tillverkare säger femton, en annan åtta, och vår gräns ligger mitt emellan. Den är redan publicerad i `/fukt/sorptionsavfuktare/` och upprepas här utan eget tal.
- **Läckaget är det som kan bli akut. Källa: guiden.** Vatten som kommer in vid varje regn blöter upp virket i syll och bjälklag, och det märks inte förrän golvet ovanför känns mjukt.
- **Radon. Källa.** Referensnivån är 200 becquerel per kubikmeter som årsmedelvärde. Källa: [Strålsäkerhetsmyndigheten](https://www.stralsakerhetsmyndigheten.se/omraden/radon/referensniva-och-gransvarden-for-radon/). Nämns en gång, i stycket om vad verktyget inte ser, och länkar ut. Vi skriver ingen radonguide i en kalkylator.

## 3. Prioriteten mellan indata, som är verktygets enda egentliga beslut

**ANTAGANDE, hela raden.** Ingen källa vi läst rangordnar symptom, tejptest och hygrometer mot varandra. Ordningen är vår och står utskriven både i koden, i stegen under verktyget och som en egen rad i antagandetabellen.

1. **Läckage först, oavsett resten.** Rinnmärken eller en pöl efter regn pekas ut även när plasten har svarat något annat. Två skäl: det är den enda av de tre orsakerna som kan bli akut, och det är den enda tejptestet aldrig ser, eftersom plasten sitter på en vägg medan vattnet kommer vid en genomföring. Guiden säger att vattnet ska följas uppåt och utåt.
2. **Tejptestet före symptomen**, eftersom det är en mätning och inte ett intryck.
3. **Symptomen före hygrometern**, eftersom symptomtabellen redan har tolkat vad läsaren ser, medan hygrometern bara säger att luften är fuktig.
4. **Två symptom åt olika håll ger vet inte än.** Verktyget gissar inte, det ber om tejptestet. Samma hållning som bygglovsverktygets "vet inte" på detaljplan.

Standardvärdena är med flit tomma: inget ikryssat, inget tejptest gjort, ingen hygrometer avläst. Den som landar från Google ska mötas av guidens eget svar, alltså gör tejptestet först, och inte av en diagnos verktyget hittat på åt henne.

## 4. Gör inte det här

Fyra rader, alla ur guiden.

1. **Köp inte en avfuktare mot markfukt.** Luften torkar, avdunstningen ur väggen ökar, och väggen suger efter mer vatten ur marken. Källa: guiden, med Boverket bakom mekaniken.
2. **Lita inte på torr plast.** Torrt på båda sidor betyder oftast fel vägg. Källa: guiden. ANTAGANDE, se avsnitt 2.
3. **Ring inte efter en offert utan en fuktutredning med mätvärden.** Ett papper som säger att dränering rekommenderas utan en enda siffra är ett säljbesök. Källa: guiden.
4. **Sätt inte en tät matta mot väggen som enda skydd.** Den kalla marken gör att fukten fastnar i väggen i stället för att vandra ut. Källa: Villaägarna.

## 5. Vad chefredaktören verifierar

1. **Tonen i diagnosraderna.** Fem besked, var och en på en rubrik och en rad. De ska låta som guiden och inte som en maskin som ställer diagnos. Raden som är svårast är "Fuktig luft, orsaken oklar", som inte får låta som ett undvikande.
2. **Att verktyget inte lovar mer än det kan.** Sidan säger på tre ställen att det ger en trolig orsak och inte en besiktning: i ingressen, i stycket om vad det inte ser, och i raden om fuktutredning. Räcker tre gånger, eller är det två för många?
3. **Prioritetsordningen i avsnitt 3.** Är det rätt att ett läckage tar över svaret även när plasten säger markfukt? Alternativet är att visa två besked bredvid varandra, som bygglovsverktyget gör vid "vet inte" på detaljplan.
4. **Boverkets kallarväggssida.** Samma förbehåll som i `underlag-fukt-i-kallaren-2026-09-16.md`: sidan renderas med JavaScript och är avläst i andra hand. Fyra påståenden ska läsas med egna ögon, och de står uppräknade där. Verktyget lutar sig mot punkt 3, alltså att skyddet hör hemma på utsidan.
5. **Att guidens ankarlänkar håller.** Verktyget länkar till fyra avsnitt i `/fukt/fukt-i-kallaren/` med id som bygget genererar ur rubrikerna. Skrivs en rubrik om måste raderna i `src/lib/kalkyl/kallare.ts` ändras i samma commit.
6. **Priserna.** Avfuktaren och fuktkontrollen är lästa 16 respektive 18 september 2026 och står i guidens kostnadstabell. Ett pris är färskvara, och nästa avläsning hör hemma i mars.
7. **Uppskattade sökvolymer.** Två av tre rader i avsnitt 1 är uppskattningar. De ska inte publiceras, och de ska inte heller ligga till grund för ett beslut som kräver data.
8. **Att verktyget inte konkurrerar med guiden.** Sidan ska vara en väg in till `/fukt/fukt-i-kallaren/`, inte en andra upplaga av den. Det förklarande avsnittet på sidan ligger på fyra stycken med flit.
