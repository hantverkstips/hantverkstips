# Faktablad: /rakna/kvadratmeter/

Ur `src/pages/rakna/kvadratmeter.astro`, `KvadratmeterForm.astro`, `src/lib/kalkyl/kvadratmeter.ts` och registret, lästa 2026-09-20. Inget här ändras i sak.

## Metadata och namn

- SLUG kvadratmeter, VERKTYGSNAMN "Kvadratmeterräknare". Inga produktkort, inget reklamband.
- Title "Räkna ut kvadratmeter, färg, tapet och golv", 43 tecken. Rör inte längden; måste börja med "räkna ut kvadratmeter".
- Description 148 i dag. Behåll "räkna ut kvadratmeter" + minst ett åtgångssvar. "med källa per tal" får gå.
- H1 i dag nästan samma som title; behåll "räkna ut kvadratmeter", variera resten.
- Registret: namn "Räkna ut kvadratmeter och åtgång" (byt "åtgång" mot vad det betyder, behåll kvadratmeter). rad substantivramsa.

## Formuläret

- langd Rummets längd m (mät längs golvet vägg till vägg), bredd Rummets bredd m (vinklat rum: två rektanglar), takhojd Takhöjd m (golv till tak; "sjuttiotalshus oftast 2,4 m" är en okällad uppgift i hjälptexten).
- dorrar/dorrbredd/dorrhojd: Antal dörrar st, Dörrens bredd/höjd m. Hjälp: måtten gäller hålet i väggen, Swedoor anger 910 × 2110 mm för vanligaste innerdörren, avrundat till 0,9 × 2,1.
- fonster/fonsterbredd/fonsterhojd: Antal fönster, bredd, höjd. Hjälp: hålet i väggen, 1,2 × 1,2 är ett antagande.
- raknar radio RAKNAR_VAL: golv Golvet, vaggar Väggarna, tak Taket, alla Alla tre. Hjälp: valet styr vilket tal som står stort, alla tre räknas ändå.
- material radio MATERIAL_VAL: inget Bara kvadratmeter, vaggfarg Väggfärg, takfarg Takfärg, tapet Tapet, parkett Parkett eller laminat, klinker Klinker eller kakel. Hjälp: materialet väljer sin yta.
- strykningar Antal strykningar färg st, hjälp: åtgångstal per strykning, två är normalt.
- paket Kvm per paket golv, valfritt, placeholder 2,2, hjälp: står på paketet, ger antal paket.
- laggning radio LAGGNINGAR rak Rak läggning, diagonal Diagonal läggning. Hjälp: diagonalt kapas i båda ändar, Kährs anger 7 till 10 procent.
- Knapp Räkna ut.

## Konstanter (rörs inte)

- FARG 8 kvm/l per strykning (Beckers Scotte 7 8 till 10, Nordsjö Ambiance Smooth Silk 8 till 10, Alcro Milltex 7 Matt 8; nedre kanten). TAKFARG 8 (Beckers Scotte R2, Alcro Milltex 2 RF). GRUNDFARG 7 (Beckers Scotte Grund 6 till 8, mitten).
- BURKAR 1, 2,5, 10 liter (antagande, kedjornas storlekar, vissa serier 3 och 5). OVERSKOTT_GRANS 0,3: färst burkar bland dem som lämnar högst 30 procent över, vid lika minst över; finns ingen inom gränsen vinner minst liter totalt.
- Tapetrulle 0,53 × 10,05 m (Boråstapeter). Påslag 0,1 m (antagande, 5 cm topp och botten; ger fyra våder per rulle vid 2,4 m). Rapport 0,53 m (antagande, Boråstapeters kollektioner 17,67 till 64 cm, läs av på rullen). Tapet drar av dörrens bredd, inte fönstret.
- Spill golv rak 5 procent, diagonal 10 (Kährs ca 5, 7 till 10 vid komplexa mönster; Pergo 5 vanligt rum, 10 svåra ytor). Klinker rak 10, diagonal 15 (Kakelgiganten).
- Dörr 0,9 × 2,1 m (Swedoor modul 9x21, 910 × 2110), = 1,89 kvm. Fönster 1,2 × 1,2 m (antagande, Elitfönsters modulsystem, 1,44 kvm).
- STANDARD 4 × 3 m, 2,5 m tak, 1 dörr, 1 fönster, raknar alla, material inget, 2 strykningar, rak, paket null.
- GRANSER: längd/bredd 0,5 till 50, takhöjd 1,5 till 6, dörrar/fönster 0 till 20 heltal, dörrbredd 0,3 till 5, dörrhöjd 1 till 4, fönsterbredd 0,2 till 6, fönsterhöjd 0,2 till 4, strykningar 1 till 5, paket 0,1 till 20.
- Fel: /längd/, /takhöjd/, "Dörrarna och fönstren tar upp hela väggytan" (/hela väggytan/).

## Räkneexemplet (standardrummet)

Golv 12 kvm, tak 12, omkrets 14 m, väggar brutto 35, dörr 1,89, fönster 1,44, netto 31,67, alla tre 55,67. Väggfärg två strykningar: 7,92 liter → en burk om 10 (26 procent över, inom 30). En strykning 3,96 → två om 2,5. Takfärg 3 liter → 2,5 + 1. Grundfärg väggar 4,52 l, tak 1,71. Tapet: 13,1 m (14 minus 0,9), 25 våder, våd 2,6 m, 3 per rulle, 9 rullar; mönster 2,65 m, fortfarande 3 per rulle, 9 rullar. Vid 2,4 m tak: våd 2,5, 4 per rulle, 7 rullar; mönster 2,65, 3 per rulle, 9. Parkett rak 12,6 kvm, diagonal 13,2; paket 2,2 → 6 paket = 13,2 kvm. Klinker rak 13,2, diagonal 13,8.

## Gör inte det här (i modulen)

- Exakt ytan (alla material): köp inte exakt, talet är rummets mått inte ditt kap, spillpåslaget är det minsta.
- Parkett: lämna inte butiken utan brädor över, en bricka som spricker om tre år går inte att laga ur annan sats, lägg undan på vinden.
- Klinker: plattor över, serien bytts ut om fem år, lägg undan en kartong.
- Färg: blanda inte två partier på samma vägg, olika satsnummer, syns i dagsljus, köp allt på en gång, rör ihop i hink.
- Färg 1 strykning: nöj dig inte, täckfärg gjord för två skikt, randig i motljus.
- Utan dörr och fönster: räkna inte bort dem i huvudet, fyll i dörren.

## Resultatspalten i dag

Etikett "Rum på L × B m, takhöjd H m, material". Stort tal vald kvm + valdNamn. Stort tal liter färg / tapetrullar / kvm golv. Lista: golv+tak, omkrets → brutto, dörravdrag, fönsteravdrag, netto; färg: yta, strykningar → liter räknat, köp burkar, grundfärg; tapet: våder på bredd, vådlängd → per rulle, mönster → rullar; golv: spill på yta, paket. Gör inte. Länk. Dela.
Kortsvar: mät rummet först; golvet X kvm och taket lika; väggarna Y före avdrag; dörr och fönster tar bort Z; kvar N.

## Brödtext

- H2 id rakna-ut-kvadratmeter (ska innehålla huvudfrasen): exemplet 4 × 3 × 2,5 med avdrag; "Där stannar marknadens räknare" ska bort. Avdragen: 1,89 + 1,44, netto 31,67, en tiondel av färgen.
- H3 färg: tillverkarna per liter och strykning; 8 till 10 Beckers och Nordsjö, Alcro 8; räknar med lägsta för spacklad vägg suger; två strykningar på 31,67 = knappt åtta liter → tiolitersburk; färst burkar inom 30 procent; taket tre liter → 2,5 + 1; grundfärg 6 till 8.
- H3 tapet: våder inte kvadratmeter; 0,53 × 10,05 Boråstapeter; dörrens bredd bort, inte fönstrets; 13,1 m, 25 våder; våd = takhöjd + 10 cm; tre per rulle; nio rullar; mönster kapas vid hel rapport, kan tappa en våd.
- H3 golv: 12 kvm beställs aldrig rakt av; Kährs ca 5 procent rakt, 7 till 10 mönster/diagonalt; Kakelgiganten 10 klinker, 15 diagonalt; 12 parkett → 12,6, klinker → 13,2; paket avrundas uppåt. Länkar /kok/slipa-bankskiva/ och /inomhus/bygga-innervagg/ i texten.
- H2 Så räknar vi: skiss rakna/kvadratmeter, alt 133 tecken i dag (rum uppifrån, måttbyglar 4 och 3 m, tolv kvm mitt i golvet, dörr och fönster dras av). Åtta steg. Tabell 17 rader. Efter tabellen: fönstrets mått och rapporten är egna antaganden, båda går att skriva över. Länk sa-testar-vi.
- Läs vidare: /inomhus/bygga-innervagg/, /kok/slipa-bankskiva/, /rakna/innervagg/.
- Faq: kvadratmeter på en vägg (omkrets × takhöjd minus dörr och fönster; 14 m × 2,5 = 35; dörr 1,89, fönster 1,44; knappt 32). Färg per kvadratmeter (8 till 10 per liter per strykning; Beckers Nordsjö, Alcro 8; räkna med 8; två strykningar dubblar; grund drar mer). Tapetrullar (våder; 53 cm × 10,05 Boråstapeter; våd = takhöjd + 10 cm; 2,5 m → tre våder per rulle; mönster kan tappa en våd).

## Krav ur checklistan

- Sidofraser: färg per kvadratmeter (H3), tapetrullar (H3), spill när man lägger golv (H3 + tabell), dra av dörr och fönster (ingress).
- Tre H3 var för sig. Spill och avdrag måste stå kvar i räkning och text. Meningen om att resultatet ligger i adressen ska finnas på sidan.
- Längd 1 200 till 1 500 plus Faq.
