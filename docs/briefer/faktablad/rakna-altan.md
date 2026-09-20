# Faktablad: rakna/altan

Ur verktygssidan 2026-09-20, före omskrivningen. Fyra filer: `src/pages/rakna/altan.astro`, `src/components/kalkyl/AltanForm.astro`, `src/lib/kalkyl/altan.ts`, raden i `src/lib/kalkyl/register.ts`. Konstanter, tabeller, logik och tester rörs inte.

## Konstanter

- Trall 28 mm tjock (TräGuiden, får ligga på c 600). Springa 5, 6, 7 mm för 95, 120, 145 mm (TräGuiden, kant till kant 100, 126, 152). Två skruv per korsning, 30 mm från kanten (TräGuiden). Skruv 4,2 × 55 mm rostfritt A4.
- Regelavstånd c 600 eller c 400 (Lathunden 8:2021 sid. 30). c 450 fanns tidigare, står inte i tabellen (vårt ändringsdatum 19 september 2026 ska bort ur publik text).
- Spännvidd, Lathunden sid. 30, C24, c 600/c 400: 45×120 1,91/2,19; 45×145 2,31/2,64; 45×170 2,71/3,1; 45×195 3,11/3,56; 45×220 3,51/4,01. Byggbeskrivningen lägger 45×145 med 2 400 mm fri längd.
- Plintavstånd, Lathunden sid. 24, bärlina × fri längd 2,4/3,6/4,8: 45×120 1,38/1,03/0,83; 45×145 1,64/1,25/1,0; 45×170 1,92/1,47/1,18; 45×195 2,2/1,68/1,35; 45×220 2,49/1,9/1,53; 70×220 3,1/2,56/2,18. Tidigare fast 2,5 m (vårt ändringsdatum ska bort).
- Bärlina antas samma dimension som regeln (antagande, säkra sidan). Plintavstånd högst 4 × c-mått (antagande, vår tillämpning av Lathundens villkor, ger fler plintar).
- Tabellhuvud: C24, EKS 11, säkerhetsklass 1, klimatklass 3, nedböjning 1/200 (bjälkar) och 1/300 (bärlinor). Ingen snözon.
- Handelslängder 3,6, 4,2, 4,8 m (antagande). Spill 10 procent (antagande). Förpackning 250 eller 1 000 (butikskontroll 19 september 2026: Bauhaus 200 och 250, Byggmax 250, K-Bygg och Essve 250 och hink 1 000; ingen 500).
- Fall 1:100, en centimeter per meter; rörelsefog 6 mm mot vägg (byggbeskrivningen Altan).
- Infästning: vinkelbeslag och ankarskruv eller snedskruvning två skruv; beslag varmförzinkade eller rostfria.
- Standard 4 × 3 m, 120 mm, längs långsidan, c 600, 45×145, plintar: 24 brädor, 96 lpm, 24 längder à 4,2 m, 8 reglar, 3 bärlinor, 12 plintar (1,64 m), 384 skruv. Gränser 1 till 20 m.
- Exempel i brödtext: 120 mm bräda tar 126 mm; knappt åtta lpm per kvm; 145 mm knappt sju; 95 mm nästan tio. 45×145 klarar 2,31 m, tre meter djup altan får bärlinrad på mitten; 45×195 bär hela djupet. Bärlina 45×145 bär 1,64 m vid 2,4 m fri längd, 1,25 m vid 3,6 m.
- Spabad, badtunna: konstruktör. TräGuiden: bärförmågan ska dimensioneras. Fjäll och Norrlands inland: Svenskt Träs dimensioneringsprogram.

## Testlåsta strängar

- Rådet om spännvidd börjar med "Spänn inte" och innehåller "45 × 195 mm" (dimensionText). Antal råd per fall låst av logiken.

## Sidan

- Ingress innehåller sökfrasen "Hur mycket trall behöver jag ... räkna trall" inklistrad; skriv om, behåll bilden av bygghandeln. Sidofras "löpmeter och antal längder" i ingress och resultatspalt.
- H2 "Hur mycket trall behöver jag, och hur många plintar altanen behöver" upprepar behöver; båda frågorna ska stå kvar.
- Brödtext ~1 363 ord, mål 1 000–1 250. Faq 225 ord, behålls.
- Publik text som ska bort: "fram till den 19 september 2026", "sedan den 19 september 2026", "som verktyget erbjöd före 19 september 2026", "Verktyget räknade före 19 september 2026 med 2,5 m".
- Illustration `rakna/altan`: altan uppifrån, nio brädor, fem reglar, tolv plintar, måttbygel c 600, springa 5 mm. Alt 143 → under 125; c 600 och 5 mm kvar.
- Interna länkar: /altan/reglar-avstand-och-dimensioner/ (×2), /altan/bygglov-altan/ (×2), /rakna/bygglov-altan/ (×2), /altan/trallskruv/, /om/sa-testar-vi/. Lägg till /altan/ i Läs vidare.
- Pennstreck-id: hur-mycket-trall, sa-raknar-vi, las-vidare.
- Faq tre: trall per kvm; springan; plintar (med lank till bygglov).

## Formuläret

- Längd (ytterkant till ytterkant), bredd (ut från husväggen). Trallbredd tre val + hjälp om 28 mm. Riktning två val + hjälp. Regelavstånd c 600/c 400 + hjälp. Regeldimension fem val + hjälp. Grund: plintar eller befintlig + hjälp + länk till bygglovsverktyget.

## Metadata

- Title `Trallkalkylator, räkna trall, reglar och plintar` (48). Led med "räkna ut trall" och kom under 44.
- Description 150, substantivuppräkning, skriv om med verb; behåll trall och altan.
- H1 `Räkna ut trall, reglar och plintar till altanen` behålls.
- Register: namn "Räkna trall, reglar och plintar" behålls; rad blir mening med verb.
