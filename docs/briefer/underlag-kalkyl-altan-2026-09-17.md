# Underlag: trall, reglar och plintar till altan

Hämtat 2026-09-17 av utvecklaren inför verktyg 6 i `docs/VERKTYGSPLAN.md`, alltså `src/lib/kalkyl/altan.ts` och sidan `/rakna/altan/`. Altanguiden skrivs i februari, så det här dokumentet är tills vidare den enda faktakällan bakom kalkylatorn. Varje konstant i modulen pekar hit, och varje rad nedan säger **Källa** eller **ANTAGANDE**.

Avsnitt 7 listar vad chefredaktören ska verifiera i webbläsare innan sidan går ut ur utkast.

## 1. Vad som gick att hämta maskinellt

| Sida | Gick att läsa | Vad den gav |
|---|---|---|
| byggbeskrivningar.se/utvandigt/altan/ | Ja, löptext | Trall 28 × 95 till 120, springa 5 mm, reglar 45 × 145 C24 på c 600, träskyddsklass |
| byggbeskrivningar.se/utvandigt/montering-av-trall/ | Delvis | Löptexten, men tabell 1 till 3 ligger som bilder och gick inte att läsa |
| traguiden.se, Läggning av trall | Ja, med tabeller | Tjocklek mot c-mått, skruvlängd, kant-till-kant-avstånd, dubbel infästning |
| traguiden.se, Altanbjälklag, principlösning | Ja | Bjälke minst 45 × 170 på c 600, trall 28 × 120, egentyngd 0,60 kN/m² |
| traguiden.se, spännviddstabeller | Nej, 404 | Inget |
| beijerbygg.se, byggbeskrivning altan | Nej, bara navigation | Inget |
| byggmax.se/bjalklag-altan | Nej, bara navigation | Inget |
| byggahus.se, välja dimensioner virke altan | Nej, 403 | Inget |
| altanplaneraren.se, bärlina altan | Ja | Bärlina mot plintavstånd, regel mot avstånd mellan bärlinor |
| essve.com, trallskruv 4,2 × 55 | Nej, 404 på produktsidan | Måtten togs i stället ur TräGuidens tabell och ur handelsdata hos Beijer |

Svenskt Träs egna tabeller ligger alltså som bilder på byggbeskrivningar.se. TräGuiden, som drivs av samma organisation, publicerar samma tal som text, och det är den sidan modulen hänvisar till.

## 2. Trallen

**Tjocklek mot centrumavstånd och skruvlängd.** Källa: TräGuiden, Läggning av trall, tabell över minsta tjocklek.

| Tjocklek, mm | Största c-mått, mm | Skruvlängd, mm | Halslängd, mm |
|---|---|---|---|
| 22 | 400 | 45 | 22 |
| 26 (värmebehandlad) | 450 | 55 | 28 |
| 28 | 600 | 55 | 28 |
| 34 | 800 | 75 | 34 |

Källa: TräGuiden, [Läggning av trall](https://www.traguiden.se/konstruktion/konstruktiv-utformning/tradack/tradack/laggning-av-trall/).

Kalkylatorn erbjuder c 600 mm som standard och c 450 mm som val. Talet 450 hör till 26 mm värmebehandlad trall i tabellen; för 22 mm trall anger tabellen 400 mm. Kalkylatorn säger därför i hjälptexten att 22 mm trall vill ha c 400 mm och att c 450 mm är det täta valet för den som vill ha ett stumt golv under 28 mm trall. **ANTAGANDE** att c 450 mm duger under 28 mm trall; det är tätare än kravet och därmed på säkra sidan.

**Springan.** Källa: TräGuiden, samma sida, tabell över minsta kant-till-kant-avstånd vid montering, tryckimpregnerad furu i träskyddsklass NTR A eller NTR AB. Talet är brädbredden plus springan.

| Brädbredd, mm | Kant till kant, mm | Springa, mm |
|---|---|---|
| 45 | 48 | 3 |
| 70 | 74 | 4 |
| 95 | 100 | 5 |
| 120 | 126 | 6 |
| 145 | 152 | 7 |

Samma sida säger att fogsprång i en färdig beläggning inte bör överstiga 3 mm. Det är ett annat mått: tabellen gäller vid montering, när brädan ännu är fuktig från impregneringen, och springan krymper när virket torkar.

**Infästning.** Källa: TräGuiden, samma sida. Brädor som är 95 mm breda eller bredare fästs med två skruv per regel, 30 mm från kanten. Brädor mellan 45 och 70 mm får en skruv i mitten. Skruven ska ha en ytterdiameter på minst 4,2 mm och vara rostfri i A2 eller A4, eller härdad i korrosivitetsklass C4. Förborra 3 till 3,5 mm för skruv.

**Fall.** Källa: byggbeskrivningar.se, Montering av trall: cirka 1:100, alltså cirka 0,5 grader. Samma sida anger 6 mm rörelsefog mot vägg, grund och stolpe.

## 3. Stommen

**Bjälke och bärlina.** Källa: TräGuiden, [Altanbjälklag, principlösning](https://www.traguiden.se/konstruktion/konstruktionsexempel/altaner-balkonger-och-skarmtak/altanbjalklag/principlosning/). Bjälkar och bärlina ska vara konstruktionsvirke, tryckimpregnerat i träskyddsklass NTR A eller NTR AB, med centrumavstånd högst 600 mm. Bjälke minst 45 × 170 mm i exemplet. Trall 28 × 120 mm i NTR AB med dubbel infästning för brädor från 95 mm. Egentyngd cirka 0,60 kN/m². Sidan säger uttryckligen att bärförmåga och stabilisering ska dimensioneras av konstruktör.

Byggbeskrivningen [Altan](https://www.byggbeskrivningar.se/utvandigt/altan/) anger 45 × 145 mm C24 på c 600 mm i sitt eget exempel, och trall 28 × 95 till 120 mm med 5 mm springa.

**Regeldimension mot spännvidd**, alltså hur långt reglarna får spänna mellan två bärlinor. Källa: Altanplaneraren, [Bärlina altan](https://www.altanplaneraren.se/blog/barlina-altan/), som i sin tur refererar branschens dimensioneringstabell för villaaltan utan tak.

| Regel | c 450 mm, m | c 600 mm, m |
|---|---|---|
| 45 × 145 | 2,60 | 2,30 |
| 45 × 170 | 3,00 | 2,70 |
| 45 × 195 | 3,45 | 3,10 |

Raden för 45 × 145 står ordagrant i källan (2,60 vid c 400 och 2,30 vid c 600; kalkylatorn lägger c 400-talet på c 450, vilket är på säkra sidan). Raderna för 45 × 170 och 45 × 195 är **ANTAGANDE**, byggda på samma källas trappa mellan dimensionerna och på att spännvidden växer ungefär med höjden. Chefredaktören verifierar dem enligt avsnitt 7 innan sidan publiceras.

**Bärlina mot plintavstånd.** Källa: Altanplaneraren, samma sida.

| Bärlina | Största avstånd mellan plintar, m |
|---|---|
| 45 × 145 | 2,0 |
| 45 × 170 | 2,5 |
| 45 × 195 | 3,0 |

TräGuiden säger samma sak i ord: bärlinor byggs oftast av 45 × 170 mm och har som mest 2,5 meters avstånd mellan plintarna.

Kalkylatorn räknar på bärlina 45 × 170 mm och plintavstånd 2,5 m. **ANTAGANDE**: det är den dimension både TräGuiden och handeln utgår från, och den som gör att en normal villaaltan klarar sig med tre plintar per rad.

## 4. Trallskruven

Skruvlängd 55 mm för 28 mm trall, ytterdiameter minst 4,2 mm, alltså den handelsvara som säljs som 4,2 × 55 mm. Källa: TräGuidens tabell i avsnitt 2 ovan. Den vanligaste varianten i handeln är Essve Trallskruv 4,2 × 55 i A2 eller A4, som Beijer säljer i [250-pack](https://www.beijerbygg.se/privat/sv/produkter/fastdon/skruv/trallskruv/trallskruv-essve-a2-4-2x55-250st-900208689) och som Essve själva säljer i [1 000-pack](https://www.essve.se/essvese/sv/trallskruv-4-2x55-a4-1000-644255-46). Essves produktsida för 250-packet svarade 404 vid hämtningen; förpackningsstorlekarna är därför tagna ur Beijers och Essves artikelnamn, inte ur ett datablad.

Två skruv per korsning följer av TräGuidens regel om dubbel infästning för brädor från 95 mm, inte av skruvtillverkaren.

**KÄLLA sedan 2026-09-19**: kalkylatorn räknar upp till hel förpackning om 250 eller 1 000 skruv och väljer den storlek som ger minst överskott. Butikskontrollen 2026-09-19 av skribenten på trallskruv gav Bauhaus 200 och 250 stycken, Byggmax 250, K-Bygg och Essve 250 stycken och hink om 1 000. Ingen av dem säljer 500, vilket var den andra storleken fram till dess. Antagandet nedan är alltså avgjort, och punkt 4 i avsnitt 7 är besvarad.

## 5. Handelslängder och spill

**ANTAGANDE**: trall säljs i 3,6, 4,2 och 4,8 m. Det är de längder som går att räkna med i hela landet. Vissa kedjor har också 3,0, 5,4 och 6,0 m.

**ANTAGANDE**: spillpåslag 10 procent på trallen. Det täcker kap i ändarna, en bräda som är för skev för att ligga i golvet och det som går bort vid ett hörn. Påslaget gäller löpmetern; antalet handelslängder räknas i stället ur hur många hela brädor som går ur en längd, vilket är den räkning som faktiskt håller i kassan.

## 6. Konstantlistan, som den ska stå i modulen

| Konstant | Värde | Grund |
|---|---|---|
| `TRALL_TJOCKLEK_MM` | 28 | Källa, TräGuiden, för c 600 mm |
| `TRALLBREDDER` | 95, 120, 145 mm | Källa, byggbeskrivningen och TräGuidens tabell 3 |
| `SPRINGA_MM` | 95 → 5, 120 → 6, 145 → 7 | Källa, TräGuiden, kant till kant minus bredd |
| `REGELAVSTAND` | 450 och 600 mm | Källa för 600, antagande för 450 |
| `MAX_SPANNVIDD_M` | Lathunden 8:2021 sid. 30, C24 | Källa sedan 2026-09-19, hela tabellen |
| bärlinans dimension | samma som regeln | Antagande sedan 2026-09-19, `BARLINA_TEXT` borta |
| `PLINTAVSTAND_M` | Lathunden 8:2021 sid. 24, C24 | Källa sedan 2026-09-19, hela tabellen. Var 2,5 m rakt av |
| `CC_ANDEL_AV_PLINTAVSTAND` | 4 | Antagande, hur Lathundens D/4-rad tillämpas |
| `SKRUV_PER_KORSNING` | 2 | Källa, TräGuiden, brädor från 95 mm |
| `SKRUV_TEXT` | 4,2 × 55 mm, A4 | Källa, TräGuidens tabell, handelsbeteckning ur Essve |
| `HANDELSLANGDER_M` | 3,6, 4,2, 4,8 | Antagande |
| `SPILL_TRALL` | 0,10 | Antagande |
| `FORPACKNINGAR` | 250 och 1 000 | Källa sedan 2026-09-19, butikskontroll |
| `FALL` | 1:100 | Källa, byggbeskrivningen |

## 7. Vad chefredaktören verifierar i webbläsare

Tabellerna hos Svenskt Trä ligger som bilder och gick inte att läsa maskinellt. Följande ska öppnas med ögonen innan sidan lämnar utkast:

1. **Tabell 1 och 2** på [byggbeskrivningar.se, Montering av trall](https://www.byggbeskrivningar.se/utvandigt/montering-av-trall/), alltså minsta tjocklek mot c-mått och skruvlängd. Vi har talen via TräGuiden; kontrollen gäller att Svenskt Trä säger samma sak i sin broschyr.
2. **Tabell 3** på samma sida, kant-till-kant-avstånd. Kontrollera 100, 126 och 152 mm för 95, 120 och 145 mm bred impregnerad furu.
3. ~~**Spännvidden för 45 × 170 och 45 × 195 mm** vid c 600 mm.~~ **Avklarad 2026-09-19.** Skribenten på `/altan/reglar-avstand-och-dimensioner/` hittade primärkällan i PDF: Svenskt Trä, Lathunden 8:2021, sid. 30. Talen är 2,71 och 3,11 m, alltså en centimeter över våra antaganden, och hela tabellen ligger nu i modulen med Lathunden som källa. Se `docs/briefer/underlag-reglar-avstand-2026-09-19.md` avsnitt 2.2.
4. ~~**Förpackningsstorlekarna** på trallskruv 4,2 × 55 mm i A4.~~ **Avklarad 2026-09-19.** Butikskontroll: Bauhaus 200 och 250, Byggmax 250, K-Bygg och Essve 250 samt hink om 1 000. Ingen säljer 500. `FORPACKNINGAR` är därför 250 och 1 000, märkt Källa.
5. **Fallet 1:100.** Byggbeskrivningen anger det; kontrollera om Svenskt Trä också anger ett minsta fall för altaner som ligger mot husvägg.

Samma hämtning gav plintavståndet, som var det enda egentliga felet i modulen: `PLINTAVSTAND_M` var 2,5 m rakt av, och Lathunden sid. 24 ger 1,38 till 2,49 m beroende på bärlinans dimension och reglarnas fria längd. Verktyget gav alltså för få plintar fram till 2026-09-19. Kvar som antagande är att bärlinan har samma dimension som regeln, och hur Lathundens rad om förhållandet mellan c-måttet och plintavståndet tillämpas; den sistnämnda ska teknisk ansvarig ta ställning till, se kommentaren vid `CC_ANDEL_AV_PLINTAVSTAND`.
