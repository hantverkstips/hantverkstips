# Faktablad: rakna/trappa

Ur verktygssidan 2026-09-20, före omskrivningen. Fyra filer: `src/pages/rakna/trappa.astro`, `src/components/kalkyl/TrappaForm.astro`, `src/lib/kalkyl/trappa.ts`, raden i `src/lib/kalkyl/register.ts`. Konstanter, källor, logik och tester rörs inte.

## Konstanter (renderas in)

- Trappformeln: 2 × steghöjd + stegdjup = 600 till 650 mm (TRAPPFORMEL_MIN/MAX). Källa Svenskt Trä, byggbeskrivningen Trappor.
- Bästa spannet 620 till 630 mm (trappföretaget Stepsta). Målsumma 630 mm, vårt val (ANTAGANDE), samma som guidens tabeller.
- Steghöjd 140 till 200 mm (Svenskt Trä). Normalt stegdjup cirka 300 mm. Lutning 17 till 30 grader (Svenskt Trä). Fall ute 1:50 (bara i text).
- BFS 2024:9, Boverkets föreskrifter om säkerhet vid användning av byggnader, gäller trappor sedan 1 juli 2025 (NYA_REGLER_FRAN). 2 kap. 5 §: trappor ska vara utformade så att personer kan förflytta sig säkert. Inga stegmått.
- I siffror hos Boverket: öppning mellan plansteg högst 100 mm (2 kap. 6 §), fri höjd minst 2,00 m (2 kap. 25 §), räcke till stegnos högst 50 mm där yngre barn kan vistas och klätterskydd 800 mm (2 kap. 11 §). Markeringskrav 2 kap. 8 § med undantag för en- och tvåbostadshus och bostadslägenheter.
- Gamla råden gick att välja till 1 juli 2026 (GAMLA_RADEN_TILL), övergångsbestämmelserna till BFS 2024:14 punkt 3.
- Borttagna allmänna råd i BBR (2011:6 t.o.m. 2014:3): stegdjup inne minst 250 mm i gånglinjen (8:232), stegdjup ute minst 300 mm (8:91), fler än två steg ute (8:91), trapplan minst 1,3 m (8:232), ledstång 0,9 m (8:2322).
- Ledstång 900 mm: antagande, Svenskt Trä monterar så. Räckeshöjder 900/1100 mm vid våningshöjd över 3000 mm (bara i text, ej på sidan i dag).
- Standard: våningshöjd 2 700 mm, stegdjup 300 mm önskat, längd 4 400 mm, inne, rak. Ger 16 steg, 168,75 mm (169), 292 mm djup, 4,4 m, 30 grader, formel 629,5 mm.
- Gränser: våningshöjd 250 till 6 000 mm; stegdjup 200 till 400 mm; längd 500 till 20 000 mm. Max 40 steg. Antagande.
- Standarden Boverket pekar på: SIS/TS 59:2025 om trappor, ramper, räcken och balkonger, maj 2025, bakom betalvägg, inte läst. Verktyget mäter inte mot den. (Testet kräver "SIS/TS 59:2025" och "Inte läst" på sidan.)
- Vilplanet läggs på mitten med längre loppet nederst (antagande). Stegdjupet avrundas nedåt till hel mm; steghöjden avrundas aldrig.

## Testlåsta strängar

- Sidan: innehåller "anger inga stegmått", inte "anger inga mått"; "Att vi mäter mot de gamla råden"; "SIS/TS 59:2025"; "Inte läst"; inte "borta sedan i somras"; mallsträngen `borttaget den ${GAMLA_RADEN_TILL}`.
- beskedRubrik vid avvikelse: exakt "Måtten håller inte". beskedRad > 20 tecken.
- Avvikelse stegdjup: text innehåller "Stegdjupet" och "tomten" (ute), kalla /8:91/ (ute). Antal steg ute: text "fler än två", kalla /8:91/.
- Boverketregler: minst 3; en med "anger inga stegmått", BFS-beteckning i text, kalla /2 kap\. 5 §/; en med "Fri höjd", "2,00 m", "100 mm". Ingen med "anger inga mått".
- Gamla rådet: text matchar /allmän(t|na) råd/, /gamla byggreglerna/, /borta/, /gånglinjen/, /kommer inte ur föreskriften/.
- Alla regler: text > 40, kalla > 5.
- gorInte: 4 st. [0] /avviker i höjd/, /småhus/, /undantagna/, /inte steget mindre farligt/. [1] /färdigt/. [2] /brantare/. [3] /fria höjden/.
- Fel: /mellan 250 och 6 000/, /mellan 200 och 400/, längd med vilplan /vilplan/i.

## Regler i "Därför blev svaret så" (åtta rader)

1. matt: våningshöjd delad i n lika höga steg; ingen avrundning. Källa: vår räkning och guiden (url GUIDE).
2. formel: stegdjup ur formeln (630 minus två steghöjder) eller längd delad på bärande plansteg. Källa Svenskt Trä, målsumman vår. url byggbeskrivningar.
3. formel: summan, spannet 600–650, bäst 620–630, i eller utanför bästa. Källa Svenskt Trä + Stepsta, url stepsta.
4. boverket: inga stegmått, BFS 2024:9 sedan 1 juli 2025, förflytta sig säkert. Källa BFS_NAMN 2 kap. 5 §.
5. boverket: stegdjupet minst X kommer inte ur föreskriften, gamla allmänna råd, gånglinjen, till 1 juli 2026, borta. Källa BBR 8:91/8:232 + övergång.
6. boverket: siffror: fri höjd 2,00 m, öppning 100 mm, räcke 50 mm. 2 kap. 6, 11 och 25 §§.
7. utforande: vilplan 1 300 mm, lopp; eller rak, längd på golvet, sista steget byggs inte, vilplan i stället för brantare.
8. utforande: ute: fall 1:50, plintar till fast botten eller dränerad mark; inne: hålet i bjälklaget, fri höjd 2,00 m.

## Gör inte det här (fyra)

0. Avvikande steg i höjd; efter tre steg går du på minnet; Boverket kräver markering utom i småhus och bostadslägenheter, undantagna; undantaget gör inte steget mindre farligt.
1. Mät inte på ofärdigt golv; klinker, spånskiva, parkett; översta steget blir lägre.
2. Inte brantare för att spara golv; 30 grader tak hos Svenskt Trä; tvättkorg, soffa; vilplan i stället.
3. Fri höjd 2 m rakt upp från varje stegyta; hålet i golvet ovanför sätter gränsen.

## Sidan

- Så räknar vi, sex steg: dela våningshöjden i helt antal steg inom 140–200; välja antal efter stegdjup eller längd (formeln närmast 630); steghöjd aldrig avrundad; stegdjup ur formeln eller längd/plansteg, nedåt hel mm; längd i plan = djup × bärande plansteg, rak har ett plansteg mindre än steg, vilplan tar ett stegs plats och 1 300 mm; prövning mot spannen.
- Publik text som ska bort: "Vi läste igenom träfflistan på trappa steghöjd i september 2026. Den enda svenska trappräknaren där är en artikel från 2012 med en app uppdaterad 2020..." och tfoot "hämtad som PDF och läst i sin helhet 20 september 2026".
- Behåll: ute 300 mm mot inne 250 mm är skillnaden på en trappa som får plats.
- Tre saker verktyget inte räknar: hålet i bjälklaget (fri höjd), räcke och ledstång (ledstång på båda sidor, en räcker när andra sidan inte behöver), hål i mellanbjälklag är ingrepp i bärande delar och kräver anmälan och startbesked. Alla i guiden.
- Illustration `rakna/trappa`: trappa i genomskärning mot bjälklag, mark under; måttbyglar 169 mm och 292 mm på näst översta steget; pil "mät våningshöjden"; formel 2 × 169 + 292 = 630 mm; 169 gulmarkerat.
- Antagandetabell 19 rader (rörs bara i text).
- Faq tre: steghöjd (140–200, lika höga, kvoten, runt 170, efter tre steg minnet); stegdjup (formeln, summan minus två steghöjder, höjden väger dubbelt, ~300); Boverket (inga stegmått, sedan 1 juli 2025 BFS 2024:9, fri höjd 2 m, öppning 100 mm, ledstänger, 250 mm är gammalt råd).
- Interna länkar: GUIDE /golv/bygga-trappa/ (flera), /rakna/kvadratmeter/, /rakna/rotavdrag/ (med ROT_ARET), /om/sa-testar-vi/. Ska tillkomma: /golv/renovera-trappa/.
- Pennstreck-id: darfor-blev-svaret-sa, gor-inte-det-har, trappformeln, sa-raknar-vi, las-vidare.

## Formuläret

- Våningshöjd golv till golv, hjälp om nytt golv efteråt. Styrs: stegdjup (djup-fält) eller längd (langd-fält), båda fält framme, radioknappen avgör. Placering inne/ute med hjälp (250/300). Utförande rak/vilplan (1 300 mm).

## Metadata

- Title `Räkna steghöjd och stegdjup till trappan` (40) behålls.
- Description 200 tecken, ska ner till 120–155; behåll steghöjd och "säger när ett mått inte håller".
- H1 ska lova kontrollen mot en regel och inte vara samma som title.
- Register: namn "Räkna steghöjd och stegdjup till trappan" behålls; rad blir mening med verb.
