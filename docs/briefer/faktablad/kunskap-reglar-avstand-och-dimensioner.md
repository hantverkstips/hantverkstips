# Faktablad: kunskap/altan/reglar-avstand-och-dimensioner

Ur den publicerade sidan 2026-09-20. Tabellerna nedan är låsta: tal, decimaler och kolumnordning står orörda, testskriptet för altankalkylatorn har samma tal som assertioner. Frontmatterfält jag inte rör: pelare altan, typ kunskap, niva mellan, publicerad 2026-09-19, produkter, kallor, utkast.

## Grundpåståenden

- c 600 mm = 600 mm från mitten på en regel till mitten på nästa. Källorna skriver ibland cc 600 eller s 600, samma sak.
- Talet kommer från trallen, inte från reglarna.
- Bärlinor = grova balkar tvärs under reglarna. Plintar = gjutna eller nedgrävda stöd under bärlinorna.
- Spännvidd = måttet mellan två bärlinor, eget svar per regeldimension. Därför två tabeller.

## Tabell 1: trallens tjocklek

| Trall, mm | Största c-mått, mm | Skruv, mm |
|---|---|---|
| 22 | 400 | 45 |
| 26, värmebehandlad | 450 | 55 |
| 28 | 600 | 55 |
| 34 | 800 | 75 |

Källa: TräGuiden, Läggning av trall, tabell 1. Skruvlängden i högerkolumnen hör ihop med tjockleken och gäller oavsett vilket c-mått du valt.

- TräGuiden = branschorganisationen Svenskt Träs kunskapsbank.
- Räknaren har bara c 400 och c 600 mm. 26 mm trall räknas på c 400 mm (närmaste på säkra sidan).
- 28 mm är tjockleken Svenskt Trä använder i sina altanexempel, därav c 600 mm som standard. `<Markering>c 600 mm</Markering>`.
- 22 mm trall tvingar ner till c 400 mm, regelvirket äter upp besparingen. Länk: /altan/trallskruv/.
- 34 mm trall: c 800 mm enligt TräGuiden, Lathunden skriver 600 till 800 mm. Råd: håll c 600 mm under tjock trall om altanen ska bära ett fullsatt matbord.

## Tabell 2: spännvidd (fri längd i meter mellan två bärlinor, C24)

| Regel, mm | c 600, m | c 400, m | c 300, m |
|---|---|---|---|
| 45 × 120 | 1,91 | 2,19 | 2,32 |
| 45 × 145 | 2,31 | 2,64 | 2,81 |
| 45 × 170 | 2,71 | 3,10 | 3,30 |
| 45 × 195 | 3,11 | 3,56 | 3,78 |
| 45 × 220 | 3,51 | 4,01 | 4,27 |
| 45 × 245 | 3,91 | 4,35 | 4,67 |

Källa: Lathunden utgåva 8:2021, sid. 30, golvbjälkar av konstruktionsvirke i ett fack till altan. Dimensionerad enligt Boverkets konstruktionsregler EKS 11 i säkerhetsklass 1 och klimatklass 3, med nedböjningen begränsad till 1/200 av spännvidden.

- Höjden gör jobbet, inte bredden. C24 = konstruktionsvirke sorterat och stämplat för viss bärförmåga, stämpeln syns i hyllan.
- `<Kalkylator namn="altan" />` efter tabellen.
- Svenskt Träs byggbeskrivning för altan: 45 × 145 mm C24 på c 600 mm, reglar 2 400 mm långa = tre centimeter mer än tabellvärdet 2,31. Exemplet räknat utan marginal.
- 45 × 95 mm står inte i tabellen. Lathundens altantabell börjar på 45 × 120 mm, TräGuidens tabell för golvbjälkar inomhus likadant. Svenskt Trä räknar inte 45 × 95 mm som bärande altanregel.
- Undantag: däck direkt på mark, regeln har stöd i hela sin längd, då räcker 45 × 95 mm enligt samma organisation. Länk: /altan/tradack-pa-mark/.
- Hållfasthetsklass: 45 × 170 mm vid c 600 mm klarar 2,71 m i C24, 2,08 m i C14, enligt samma tabellrad. Klasserna ligger ofta i samma gång i byggvaruhuset.
- Reglar 70 mm tjocka: spännvidden växer ungefär 16 procent, omräkningsfaktor i samma tabell.

## Tabell 3: plintavstånd (största avstånd mellan plintarnas mitt, meter, C24)

| Bärlina, mm | 2,4 m regel | 3,6 m regel | 4,8 m regel |
|---|---|---|---|
| 45 × 120 | 1,38 | 1,03 | 0,83 |
| 45 × 145 | 1,64 | 1,25 | 1,00 |
| 45 × 170 | 1,92 | 1,47 | 1,18 |
| 45 × 195 | 2,20 | 1,68 | 1,35 |
| 45 × 220 | 2,49 | 1,90 | 1,53 |
| 70 × 220 | 3,10 | 2,56 | 2,18 |

Källa: Lathunden sid. 24, bärlinor av konstruktionsvirke till golvbjälkar i ett fack till altan, klass C24. Cellerna är största avstånd mellan plintarnas mitt i meter, och kolumnrubrikerna är reglarnas fria längd.

- Plintarna står under bärlinorna, inte under reglarna. Bärlinans dimension avgör, inte altanens storlek. Andra ingångsvärdet: ju längre reglarna spänner, desto mer last per meter bärlina, desto tätare plintar.
- 45 × 170 mm med reglar på 2,4 m: högst 1,92 m mellan plintarna. Flera altansidor och materialräknare säger 2,5 m för samma bärlina = för glest. Talet hör hemma på raden för 45 × 220 mm.
- Lathunden: reglarnas centrumavstånd bör vara högst en fjärdedel av plintavståndet. Vid c 600 mm får plintarna aldrig stå längre isär än 2,4 m, oavsett bärlina.

## c 400 mm

- c 400 mm är ett svar på ett problem: 22 mm trall, eller reglar som behöver gå längre än dimensionen klarar.
- Altan 4 m lång: åtta reglar vid c 600 mm, elva vid c 400 mm.
- Vinst: längre spännvidd (45 × 145 mm: en tredjedels meter mellan de två kolumnerna, ibland sparar en plintrad), stummare golv (framför grillen, vid bordet).
- Förlust: tre reglar till, varje med egen infästning, drygt en tredjedel fler trallskruv (fler korsningar).

## Snözon

- Lathundens taktabeller frågar efter snözon, altantabellerna gör det inte, de är rikstal. Samma tal i Malmö och Kiruna.
- Snölastens grundvärde på mark enligt kartan i samma bok: 1,0 kN/m² i sydligaste Skåne till 5,5 kN/m² i fjälltrakterna. 1 kN/m² ≈ 100 kg per kvadratmeter. Stora delar av Norrlands inland: 3,0 till 4,5 kN/m².
- Altan skottas sällan lika ofta som uppfarten.
- Eget råd (inte ett tal ur tabellen): snözon 3,0 eller högre, gå upp ett steg i regeltabellen, 45 × 170 mm i stället för 45 × 145 mm.
- Räknat svar: Svenskt Träs dimensioneringsprogram på byggbeskrivningar.se frågar efter ort och räknar snölasten.

## Tre saker tabellerna inte täcker

- Varning: räcke som löper åt samma håll som reglarna kräver en extra regel mellan de två yttersta, skriver Lathunden. Räcket lastar kanten.
- Tabellen gäller regel i ett fack (två bärlinor). Regel obruten över tre bärlinor bär mer, Lathunden har egen tabell, villkor: mittstödet inom 0,4 till 0,6 av fria längden. Räknas inte här.
- Virket: konstruktionsvirke, tryckimpregnerat: NTR A där virket möter mark, NTR AB ovan mark, enligt Svenskt Träs byggbeskrivning. Bygghandelsvirke utan hållfasthetsstämpel hör inte hemma i ett bjälklag ute i tjugo år.

## Interna länkar (alla ska finnas kvar)

- /altan/trallskruv/
- /altan/tradack-pa-mark/
- /altan/bygglov-altan/
- /rakna/altan/ (ankare "trall-, regel- och plinträknaren")
- /altan/bygga-altan/
- /altan/ (hubben, ankare "altan och trädgård", hubbens title)

## Faq (fyra frågor, fråga två med lank till /rakna/altan/)

1. Hur långt mellan reglarna? c 600 mm, 28 mm trall. 22 mm → c 400 mm. Mitt till mitt, aldrig kant till kant.
2. Vilken dimension? Avgörs av spannet mellan bärlinor. 45 × 145 mm klarar 2,31 m. Längre: 45 × 170 eller 45 × 195 mm. C24, Lathunden. Mät spannet först. Lank: "Räkna reglar, bärlinor och plintar", /rakna/altan/.
3. Duger 45 × 95 mm? Inte som bärande regel. Lathundens altantabell börjar på 45 × 120 mm, TräGuidens tabell för golvbjälkar inomhus likadant.
4. Hur tätt plintar? Bärlinan avgör. 45 × 170 mm C24 högst 1,92 m, vid reglar som spänner 2,4 m. Vid c 600 mm aldrig över 2,4 m.

## Bildtext (huvudbild altan/reglar-avstand.svg)

Bjälklaget uppifrån, reglar på c 600 mm spänner 2,3 meter mellan bärlinorna, som vilar på plintar. Spännvidden är måttet mellan bärlinorna, inte altanens längd.
