# Underlag: kvadratmeter, färg, tapet och golv

Hämtat 2026-09-17 av utvecklaren inför verktyg 8 i `docs/VERKTYGSPLAN.md`, alltså `src/lib/kalkyl/kvadratmeter.ts` och sidan `/rakna/kvadratmeter/`. Ämnena golv, kök och inomhus har ännu ingen guide som räknar åtgång, så det här dokumentet är tills vidare den enda faktakällan bakom kalkylatorn. Varje konstant i modulen pekar hit, och varje rad nedan säger **Källa** eller **ANTAGANDE**.

Poängen med verktyget är att avdragen görs rätt och att varje åtgångstal har en källa. Marknadens räknare gör varken det ena eller det andra: de multiplicerar längd gånger bredd och drar ingenting alls för dörr och fönster.

Avsnitt 8 listar vad chefredaktören ska verifiera i webbläsare innan sidan går ut ur utkast.

## 1. Vad som gick att hämta maskinellt

| Sida | Gick att läsa | Vad den gav |
|---|---|---|
| beckers.se, Scotte 7 | Ja | Åtgång 8 till 10 m²/l, 1 till 2 strykningar, grundmåla obehandlat |
| beckers.se, Scotte R2 Takfärg | Ja | Åtgång 8 m²/l, 1 till 2 gånger, grundmåla obehandlat |
| beckers.se, Scotte Grund | Ja | Åtgång 6 till 8 m²/l |
| alcrostudio.se, Milltex 7 Matt Täckfärg | Ja | Teoretisk färgåtgång 8 m²/l |
| alcrostudio.se, Milltex 5 Helmatt Täckfärg | Ja | Teoretisk färgåtgång 8 m²/l |
| alcrostudio.se, Milltex 2 RF Helmatt Takfärg | Ja | Teoretisk färgåtgång 8 m²/l |
| alcro.se, produktsidorna | Nej, 301 eller 404 | Allt ligger numera på alcrostudio.se |
| nordsjoprofessional.se, Ambiance Smooth Silk | Ja | Åtgång 8 till 10 m²/l, grunda en gång och stryk sedan 1 till 2 |
| nordsjo.se, Beräkna hur mycket färg du behöver | Ja, löptext | Metoden: yta, avdrag för dörr och fönster, gånger strykningar |
| Nordsjös tekniska datablad, PDF | Nej, komprimerad PDF | Inget |
| borastapeter.com, Tapetkalkylator | Ja | Rullbredd 53 cm, rullängd 10,05 m, vad rapport och passning betyder |
| sandbergwallpaper.com, produktsida | Nej, 410 | Inget |
| midbectapeter.se, räkna ut åtgång | Nej, 403 | Inget |
| kahrs.com, Frågor om golv | Ja | Cirka 5 procent spill, 7 till 10 procent vid komplexa mönster |
| pergogolv.se, Hur mycket golv behöver jag | Ja | 5 procent extra, 10 procent i små rum med svåra ytor |
| kakelgiganten.se, Riktlinjer | Ja | 10 procent spill, 15 procent vid mönster eller diagonalt |
| gds.se, Hur mycket klinker behövs | Ja | Alltid 10 procent mer än det uträknade |
| hillceramic.se, beräkningssidan | Nej, bara navigation | Inget |
| bauhaus.se, Lägga golv | Delvis | "Mät rummet noggrant och räkna med spill", utan procenttal |
| swedoor.se, Måttabeller innerdörrar | Ja | Modul 9x21: öppningsmått 910 × 2110 mm |
| elitfonster.se, Frågefönstret | Delvis | Modulmåttet ändras i steg om 100 mm, karmen är 20 mm mindre |

Två saker är värda att veta om tabellen. Alcro flyttade hela produktkatalogen till alcrostudio.se, och konsumentsidorna svarar med omdirigering eller 404; talen nedan är hämtade på den nya adressen. Hillceramic, som stod i uppdraget som möjlig källa för kakelspill, går inte att läsa maskinellt alls, så klinkerspillet vilar i stället på Kakelgiganten och GDS.

## 2. Färgåtgång

**Väggfärg.** Källa: Beckers [Scotte 7](https://beckers.se/produkter/scotte-7), som anger "8 - 10 m²/l" och "1-2 strykningar". Nordsjö [Ambiance Smooth Silk](https://www.nordsjoprofessional.se/sv/produkter/nordsj%C3%B6-ambiance-smooth-silk) anger 8 till 10 m²/l. Alcro [Milltex 7 Matt Täckfärg](https://www.alcrostudio.se/sv-SE/pro/product/Milltex%207%20Matt%20T%C3%A4ckf%C3%A4rg/221002ASE20133) och [Milltex 5 Helmatt Täckfärg](https://www.alcrostudio.se/sv-SE/pro/product/milltex-5-helmatt-tackfarg/221002ASE20132) anger båda "Teoretisk färgåtgång 8 m²/l".

| Tillverkare | Produkt | Åtgång, m² per liter |
|---|---|---|
| Beckers | Scotte 7 | 8 till 10 |
| Nordsjö | Ambiance Smooth Silk | 8 till 10 |
| Alcro | Milltex 7 Matt Täckfärg | 8 |

Källa: tillverkarnas egna produktsidor, hämtade 2026-09-17.

Kalkylatorn räknar med **8 m² per liter och strykning**. Det är den nedre kanten av intervallet och det enda tal alla tre tillverkarna når. Räknar vi med 10 blir svaret för lågt för den som målar en spacklad vägg med rulle, och en läsare som står i butiken med två liter för lite har fått fel hjälp.

**Takfärg.** Källa: Beckers [Scotte R2 Takfärg](https://beckers.se/produkter/scotte-r2-takfarg), "8 m²/l", och Alcro [Milltex 2 RF Helmatt Takfärg](https://www.alcrostudio.se/sv-SE/pro/product/milltex-2-rf-helmatt-takfarg/221002ASE20129), "Teoretisk färgåtgång 8 m²/l". Alcro skriver på samma rad att "Färgens åtgång beror på appliceringsmetod, temperatur/luftfuktighet och underlagets ytstruktur". Takfärg räknas alltså med samma tal som väggfärg, 8 m² per liter och strykning.

**Grundmålning drar mer.** Källa: Beckers [Scotte Grund](https://beckers.se/produkter/scotte-grund), "6 - 8 m²/l", mot täckfärgens 8 till 10. Både Beckers och Nordsjö anger att obehandlat underlag ska grundmålas först: Beckers skriver "Grundmåla med Scotte Grund", Nordsjö "grunda en gång med Nordsjö Original Grundfärg, stryk sedan 1 till 2 gånger". Kalkylatorn räknar grundstrykningen med **7 m² per liter**, alltså mitten av Beckers intervall, och visar den som en egen rad vid sidan av täckfärgen.

**Metoden.** Källa: [Nordsjö, Beräkna hur mycket färg du behöver](https://www.nordsjo.se/sv/inredningstips-och-r%C3%A5d/ber%C3%A4kna-hur-mycket-f%C3%A4rg-du-beh%C3%B6ver). Mät ytan, dra av dörrar och fönster, multiplicera med antalet strykningar (minst två) och dela med m² per liter på burken. Det är exakt den ordningen kalkylatorn räknar i.

**ANTAGANDE**: burkstorlekarna 1, 2,5 och 10 liter. Det är de storlekar inomhusfärg säljs i hos de svenska kedjorna. Vissa serier har också 3 och 5 liter, och den som hittar en sådan läser talet "liter räknat" i stället.

**ANTAGANDE**: burkarna väljs i två steg, enligt koordinatorns beslut 2026-09-17. Först sållas kombinationerna till dem som lämnar högst **30 procent** av behovet över. Bland dem vinner den med färst burkar, och vid lika antal den som lämnar minst över. Finns ingen kombination inom gränsen vinner den med minst liter totalt, vilket bara inträffar under en literburk.

Gränsen prövades först på 25 procent. Standardrummets väggar behöver 7,92 liter, och en tiolitersburk lämnar 2,08 liter över, alltså 26 procent; 25 procent hade stängt ute just det fall regeln finns till för. Gränsen är därför 30 procent, och det är det talet som står i antagandetabellen på sidan.

Regeln ger de tre fall som styr den: knappt åtta liter blir en burk om tio, åtta liter jämnt blir samma burk, och tre liter blir en burk om 2,5 plus en literburk i stället för sju liter på hyllan. Skälet att färre burkar går före är att de är billigare per liter, lättare att bära och ett partinummer mindre att hålla isär på samma vägg. Talet "liter räknat" står kvar bredvid burkarna för den som hellre köper nära ytan.

## 3. Tapeten

**Rullens mått.** Källa: [Boråstapeter, Tapetkalkylator](https://www.borastapeter.com/guider-sjalvhjalp/tapetkalkylator). Rullbredden är normalt 53 cm och rullängden oftast 10,05 m, men måttet ska alltid läsas av på produktsidan. Sandberg anger samma mått för sina traditionella rullar; produktsidan svarade 410 vid hämtningen, så det talet står här utan länk.

**Mönsterrapporten.** Källa: samma sida. Boråstapeter definierar mönster- eller rapportstorlek som "ett mått som anger höjden på tapetens mönsterbild", och den upprepas flera gånger på höjden i samma våd. Passningen anges som ingen passning, rak passning, halvförsatt, förskjuten mönsterpassning i tredjedel eller kvartsrapport.

Det som gör skillnad i kassan är att varje våd måste kapas vid en hel rapport när mönstret ska gå ihop. Kalkylatorn räknar därför vådlängden två gånger: en gång rakt av, och en gång uppåt till närmaste hela rapport.

**ANTAGANDE**: rapport 53 cm. Boråstapeters egna kollektioner ligger i spannet från 17,67 cm till 64 cm, och 53 cm är en vanlig rapport eftersom den är lika med rullens bredd. Läsaren ska läsa av sin egen rapport på rullen, och sidan säger det.

**ANTAGANDE**: påslag 10 cm per våd, alltså 5 cm i topp och botten för kap och sneda tak. Talet stämmer mot den kända tumregeln i branschen: en rulle ger fyra våder vid 2,4 m takhöjd utan mönsterpassning, och tre våder när mönstret ska passas. Kalkylatorns formel ger just fyra och tre vid den takhöjden, vilket testskriptet asserterar.

**ANTAGANDE**: dörrarnas bredd dras av från väggarnas omkrets innan våderna räknas, men inte fönstrens. En dörr går från golv till tak och tar bort hela våder; ett fönster gör det inte, för tapeten ska ändå upp ovanför och ner under det.

## 4. Spill på golv

**Parkett och laminat.** Källa: [Kährs, Frågor om golv](https://www.kahrs.com/se/b2b/fragor-och-svar/fragor-om-golv): "Du bör räkna med cirka 5 % spill när du beräknar hur mycket golv du behöver", och "Vid mer komplexa mönster som fiskben eller chevron samt trappor bör du räkna med 7–10 %". [Pergo](https://www.pergogolv.se/sv-se/vanliga-fragor/laminatgolv/lagga/hur-mycket-golv-behover-jag-till-mitt-rum) säger samma sak för laminat: 5 procent extra i ett vanligt rum, 10 procent i ett litet rum med många svåra ytor.

**Kakel och klinker.** Källa: [Kakelgiganten, Riktlinjer](https://kakelgiganten.se/riktlinjer): "En vanlig rekommendation är att köpa 10% extra kakel eller klinker för spill", och "Om du planerar att lägga plattorna i ett mönster eller diagonalt, bör du öka mängden spill till 15%". Samma sida anger 15 till 20 procent för plattor över 30 × 30 cm. [GDS](https://gds.se/material/sten/kakel-och-klinker/hur-mycket-klinker-behovs) skriver att man "alltid ska köpa 10 procent mer än det du räknar ut att du behöver".

| Material | Rak läggning | Diagonal läggning |
|---|---|---|
| Parkett och laminat | 5 procent | 10 procent |
| Kakel och klinker | 10 procent | 15 procent |

Källa: Kährs och Pergo för trägolvet, Kakelgiganten för plattorna.

Raden för diagonal parkett är den enda som behöver en anmärkning: Kährs anger 7 till 10 procent och kalkylatorn tar den övre kanten, eftersom en diagonal rad kapas i båda ändar. Bauhaus, som stod i uppdraget som möjlig källa, skriver bara "Mät rummet noggrant och räkna med spill" utan procenttal.

## 5. Avdragen för dörr och fönster

**Dörren.** Källa: [Swedoor, Måttabeller innerdörrar](https://www.swedoor.se/tips-och-rad/mattabeller-innerdorrar). Modul 9x21, som är den vanligaste innerdörren i nybyggda hus, har öppningsmått 910 × 2110 mm, karmyttermått 886 × 2089 mm och dörrbladsmått 825 × 2040 mm. Kalkylatorn räknar med **0,9 × 2,1 m**, alltså modulmåttet avrundat, vilket ger ett avdrag på 1,89 kvm per dörr. Det är två procent mindre än öppningsmåttet, och den marginalen ligger åt rätt håll: färgen räcker hellre över än under.

**Fönstret.** Elitfönster förklarar modulsystemet: modulmåttet anges i decimeter, det ändras i steg om 100 mm, och karmyttermåttet är 20 mm mindre än hålet i väggen. Ett fönster med modul 12x12 sitter alltså i ett hål på 1200 × 1200 mm och har en karm på 1180 × 1180 mm.

**ANTAGANDE**: att 1,2 × 1,2 m är ett typiskt fönster. Modulsystemet är en källa, men vilket mått som är vanligast i svenska bostäder är det inte, och ingen tillverkare publicerar den statistiken. Avdraget blir 1,44 kvm per fönster, och läsaren kan skriva in sina egna mått i stället.

## 6. Räkneexemplet som testskriptet kör mot

Ett rum på 4 × 3 m med takhöjd 2,5 m, en dörr och ett fönster.

| Yta | Räkning | Kvm |
|---|---|---|
| Golv | 4 × 3 | 12 |
| Tak | 4 × 3 | 12 |
| Väggar brutto | (4 + 3) × 2 × 2,5 | 35 |
| Avdrag dörr | 0,9 × 2,1 | 1,89 |
| Avdrag fönster | 1,2 × 1,2 | 1,44 |
| Väggar netto | 35 − 1,89 − 1,44 | 31,67 |

Åtgången på de talen, med två strykningar:

| Material | Räkning | Svar |
|---|---|---|
| Väggfärg | 31,67 × 2 ÷ 8 | 7,9 liter, alltså en burk om 10 liter |
| Takfärg | 12 × 2 ÷ 8 | 3 liter, alltså en burk om 2,5 och en om 1 liter |
| Tapet utan mönster | omkrets 14 m minus dörren 0,9 m, 25 våder à 2,6 m | 9 rullar |
| Parkett rakt lagd | 12 × 1,05 | 12,6 kvm |
| Klinker rakt lagd | 12 × 1,10 | 13,2 kvm |

## 7. Konstantlistan, som den ska stå i modulen

| Konstant | Värde | Grund |
|---|---|---|
| `FARG_KVM_PER_LITER` | 8 | Källa, Alcro, Beckers och Nordsjö, nedre kanten |
| `TAKFARG_KVM_PER_LITER` | 8 | Källa, Beckers Scotte R2 och Alcro Milltex 2 RF |
| `GRUNDFARG_KVM_PER_LITER` | 7 | Källa, Beckers Scotte Grund 6 till 8 |
| `BURKAR_LITER` | 1, 2,5 och 10 | Antagande |
| `TAPETRULLE_BREDD_M` | 0,53 | Källa, Boråstapeter |
| `TAPETRULLE_LANGD_M` | 10,05 | Källa, Boråstapeter |
| `TAPET_PASLAG_M` | 0,10 | Antagande |
| `TAPET_RAPPORT_M` | 0,53 | Antagande |
| `SPILL_GOLV` | 0,05 rakt, 0,10 diagonalt | Källa, Kährs och Pergo |
| `SPILL_KLINKER` | 0,10 rakt, 0,15 diagonalt | Källa, Kakelgiganten |
| `DORR_BREDD_M` och `DORR_HOJD_M` | 0,9 och 2,1 | Källa, Swedoor modul 9x21 |
| `FONSTER_BREDD_M` och `FONSTER_HOJD_M` | 1,2 och 1,2 | Antagande, Elitfönsters modulsystem |

## 8. Vad chefredaktören verifierar i webbläsare

1. **Burkstorlekarna.** Står 1, 2,5 och 10 liter på hyllan hos Beckers, Alcro och Nordsjö, eller är 3 och 5 liter så vanliga att de ska med i listan?
2. **Rapporten 53 cm.** Slå upp tio tapeter hos Boråstapeter och se var rapporterna faktiskt ligger. Blir medianen en annan ändras `TAPET_RAPPORT_M` och testskriptet.
3. **Fönstermåttet 12x12.** Det är vårt antagande, inte en källa. Finns det statistik hos Elitfönster, Svenska Fönster eller SCB över vilket modulmått som är vanligast i svenska bostäder, byts antagandet mot den källan.
4. **Kakelspillet.** Kakelgiganten är återförsäljare, inte tillverkare. Kontrollera om Byggkeramikrådet anger ett spillpåslag i BBV, och låt i så fall den källan gå före.
5. **Diagonal parkett.** Kährs anger 7 till 10 procent för fiskben, chevron och trappor. Kontrollera om de anger ett eget tal för rent diagonal läggning, som är det kalkylatorn frågar efter.

Punkt 3 är den enda som ändrar ett tal läsaren ser direkt i svaret. Tills den är gjord står fönstrets mått i antagandetabellen märkt Antagande, inte Källa.
