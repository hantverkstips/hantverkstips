# Underlag: jämförelse Wood's SW39FW mot Acetec EvoDry 6H 2.0

Skrivet 2026-09-16 av skribenten. Sidtyp jämförelse, URL `/jamforelser/woods-sw39fw-vs-acetec-evodry-6h-2/`, nivå mellan, kategori luftavfuktare. Vi har inte haft någon av maskinerna, så allt är tillverkarens eller butikens uppgift plus våra egna omräkningar, och de senare står märkta som våra på sidan. Priser och uppgifter lästa 2026-09-16.

Sökord: "kondensavfuktare eller sorptionsavfuktare källare", "woods sw39fw eller acetec evodry", "avfuktare källare 10 grader". Vinkeln är samma källare på 40 kvm vid tre temperaturer, 15, 10 och 5 grader, och vilken av de två maskinerna som ger mest vatten per kWh och per krona vid varje temperatur.

## 1. Vad som rankar i dag

Sökningarna gjordes 2026-09-16. De tre översta läsbara organiska träffarna per fras:

| Fras | Sida | Vad den täcker | Vad den saknar |
|---|---|---|---|
| kondensavfuktare eller sorptionsavfuktare källare | [Proffsmagasinet, sorptionsavfuktare eller kondensavfuktare](https://www.proffsmagasinet.se/kunskapsportalen/guider/sorptionsavfuktare-eller-kondensavfuktare), cirka 2 800 ord | Funktion, arbete i kyla, kapacitet, utseende, ljud, underhåll, installation, investeringskostnad. Säger att sorption arbetar ner till minus 20 och att kondens slutar nära noll. Ljud: sorption sällan under 47 dB, vissa kondens runt 30. Pris: kondens 2 000 till 3 000 kr, sorption flerdubbelt. Installation: slangar och våtluft genom vägg mot bara placering | Inte en enda liter vid låg temperatur, ingen elförbrukning, ingen kostnad över tid, ingen konkret maskin mot en annan, ingen temperaturgräns i grader för när kondens tappar |
| samma fras | [Ozoneair, kondensavfuktare vs sorptionsavfuktare](https://ozoneair.se/kondensavfuktare-vs-sorptionsavfuktare/), cirka 1 700 ord | Hur de fungerar, "kondens effektiv över cirka 10 grader", när vilken passar, vanliga frågor. Nämner bara egna produkter (Ozoneair Dry, Guard) | Inga kapacitetstal, ingen el, inget ljud, ingen jämförelse av två maskiner |
| samma fras | [Fuktguide, sorptionsavfuktare eller kondensavfuktare](https://fuktguide.se/sorptionsavfuktare-eller-kondensavfuktare/) | Generell typjämförelse | Inte hämtad i detalj, sökutdraget ger samma innehåll som de två ovan |
| woods sw39fw eller acetec evodry | Proffsmagasinets kategori- och märkessidor, Acetecs dokumentation för andra EvoDry-modeller, en Byggahus-tråd om krypgrundsavfuktare | Ingen sida ställer de två maskinerna mot varandra. Frasen har ingen etta | Allt. Vi blir första sidan på frasen |
| avfuktare källare 10 grader | [Elon, avfuktare i källare](https://www.elon.se/avfuktare-i-kallare-din-vag-till-ett-battre-inomhusklimat), cirka 1 200 ord | Butiksguide med fyra maskiner (Wood's SW38FX, SW22FW, två Canvac) och prisspann 1 990 till 6 990 kr. Säger att kondens fungerar bäst över 10 grader | Ingen kapacitet vid 10 grader, ingen el, inget ljud, ingen sorption som alternativ |
| samma fras | [Test.se, bäst i test avfuktare](https://www.test.se/avfuktare/) | Lista utan egna mätningar | Ingen temperatur alls |
| samma fras | [Bygghemma, avfuktare för källare](https://www.bygghemma.se/reportage-och-guider/avfuktare-kallare/), cirka 1 500 ord | Typskillnad i en mening, fem maskiner per användning (Wood's SW38F, Fresh D-800 och D-1200, Olimpia, Meaco), priser 3 990 till 8 990 kr | Ingen jämförelse maskin mot maskin, ingen liter vid låg temperatur, ingen el |

Sökintention: kommersiell med informativ ingång. Läsaren har en källare som är kallare än en bostad, har förstått att det finns två tekniker och vill veta vilken som är rätt för just sin temperatur, och helst vilken maskin. Ingen av ettorna svarar med tal.

## 2. Så blir vår sida bättre

1. **Liter per dygn för båda maskinerna vid 15, 10 och 5 grader**, räknade ur tillverkarnas märkkapacitet med sajtens omräkningsfaktorer (`docs/briefer/underlag-kalkyl-avfuktare.md` avsnitt 2, `src/lib/kalkyl/avfuktare.ts`). Ingen av ettorna har ett enda tal vid låg temperatur. Talen är våra och står så.
2. **Behovet i samma källare vid samma temperaturer**, ur kalkylformeln, så att läsaren ser om maskinen räcker och inte bara vilken som ger mest.
3. **El per liter vatten och per månad vid varje temperatur**, i kWh och kronor med SCB-pris, och en treårskostnad med inköp och el. Proffsmagasinets guide säger "flerdubbelt" om priset och ingenting om driften.
4. **Installationen i praktiken**: tank på 11,4 liter mot slang genom ytterväggen, vikt 22,5 kg mot 5,4 kg, slang som inte ingår mot slang som ingår, hygrostat på maskinen.
5. **Tre tydliga fall med "köp ingen av dem"**, vilket ingen butiksguide skriver.
6. **Ett eget diagram** med literna vid tre temperaturer.

Rubrikstruktur: H1 med båda maskinerna och de tre temperaturerna, H2 för vatten per dygn, el per liter, el per månad och tre år, ljud, tank mot slang, tre fall.

Interna länkar ut: `/tester/woods-sw39fw/`, `/tester/acetec-evodry-6h-2/` (skrivs parallellt), `/fukt/sorptionsavfuktare/`, `/fukt/avfuktare-kallare/`, `/rakna/avfuktare/` (verktygskort), `/fukt/fukt-i-kallaren/`, `/fukt/avfuktare-krypgrund/`, `/luftavfuktare/`.

Föreslagna inlänkar (exakt fil och mening) står i rapporten och i avsnitt 7.

## 3. Faktaunderlag, källa för källa

### Wood's SW39FW I-EcoDefrost+

Proffsmagasinet, produktsidan (läst 2026-09-16): 5 948 kr inkl. moms, fler än 10 i lager. 19 liter per dygn utan villkor, 320 W, 2 till 40 °C, 190 till 340 m³/h, tank 11,4 l med nivåindikering, 140 kvm, 527 × 345 × 495 mm, R290 110 g, 230 V, slangkoppling möjlig (slang ingår ej), omstart efter strömavbrott, garanti upp till 10 år för privatpersoner. Ljudnivå, vikt och hygrostat ej angivet.

Wood's, SW38FW (systermodell med samma mått, tank, luftflöde, kapacitet och köldmedium; produktsida och produktblad, lästa 2026-09-16 i underlaget för granskningen): 19 l vid 30 °C och 80 % RF, 510 W vid 30/80, 54 till 57 dB utan mätavstånd, 22,5 kg, garanti upp till 6 år med registrering och årligt filterbyte. Wood's har ingen sida för SW39FW (404).

Hela underlaget: `docs/briefer/underlag-woods-sw39fw-2026-09-16.md`.

### Acetec EvoDry 6H 2.0

Acetec, dokumentation ref 20100 (läst 2026-09-16): kapacitet vid 20 °C och 60 % RF 7,4 l/24 h, effekt vid avfuktning 530 W, fläkt 25 W, avsäkring 10 A, torrluft 110 m³/h, våtluft 20 m³/h, 48 dBA, arbetstemperatur minus 20 till plus 40 °C, lämplig upp till 100 m³, 217 × 225 × 307 mm, 5,4 kg, våtluftstos 50 mm med slang 1,5 m som ingår, torrluftstos 100 mm, inbyggd elektronisk hygrostat med graderad skala, manöverpanel: nej, utloppsplåt med nederbördsskydd ingår. Citat: "inte avsedd för krypgrund eller kallvind. För dessa applikationer rekommenderas EvoDry RCF 12 (art.nr 20012) eller EvoDry RCF 20 (art.nr 20020)."

Proffsmagasinet, produktsidan (läst 2026-09-16): 9 995 kr inkl. moms. 7,4 l vid 20 °C/60 % RF, "upp till 9,7 l/24 h", 530 W, 46 dB(A), minus 20 till plus 40 °C, upp till 100 m³, 4,7 kg, 225 × 217 × 307 mm, slang 1,5 m ingår, utloppsenhet och två slangklämmor ingår, hygrostat 0 till 100 % RF, ingen vattenbehållare, filterbyte två gånger om året.

Skillnader mellan källorna: ljud 48 (Acetec) mot 46 (butiken), vikt 5,4 mot 4,7 kg, 9,7 liter finns bara hos butiken. Sidan går på Acetecs egna tal.

### Faktorer och gränser

- Kondens 30/80 till 15 °C och 55 %: f = 0,30 (0,25 till 0,35, interpolerad utan mätpunkt). Till 10 °C: 0,20 (0,15 till 0,24). Sorption 20/60 till 15 °C: 0,90 (0,85 till 1,0). Till 10 °C: 0,80 (0,75 till 1,0). Till 5 °C: 0,65 (en källa, Corroventa). Källa: `underlag-kalkyl-avfuktare.md` avsnitt 2, mätpunkterna ur Meacos blogg, Corroventa CTR STD-TT och Wood's par via Proffsmagasinet.
- Kondens vid 5 °C: ingen faktor. Enda tredjepartstalet är Meaco 10L ABC, 0,47 l vid 5 °C och 60 % mot 10 l märkt, butiksuppgift från Elgiganten. Det är en tjugondel.
- Ljungby Fuktkontroll: kondens behöver plus 15 grader för att fungera väl. Dantherm: kondens över 8 grader och 40 % RF. Sajtens regel: 10 grader.
- Elpris 2,40 kr/kWh: SCB, hushåll 5 000 till 14 999 kWh per år, juli till december 2025, inkl. nätavgift, energiskatt och moms.

## 4. Våra egna räkningar

Allt här är vår räkning och står så på sidan.

### Källaren

40 kvm, 2,2 m i tak, 88 m³, 65 procent luftfuktighet i augusti (fuktnivå medel i kalkylatorn), samma exempel som köpguiden. Kalkylformeln (`src/lib/kalkyl/avfuktare.ts`):

| | 15 °C | 10 °C |
|---|---|---|
| v_s, v_mål (g/m³) | 12,80, 7,04 | 9,38, 5,16 |
| M_luft | 88 × 0,10 × 12,80 / 1000 = 0,11 | 88 × 0,10 × 9,38 / 1000 = 0,08 |
| G_luft | 0,5 × 88 × 24 × 2,96 / 1000 = 3,13 | 0,5 × 88 × 24 × 4,84 / 1000 = 5,11 |
| G_mark | 40 × 10 / 1000 = 0,40 | 0,40 |
| Summa × 1,3 | 3,64 × 1,3 = 4,73 | 5,59 × 1,3 = 7,27 |
| Verkligt behov | 4,7 l/dygn | 7,3 l/dygn |
| Märkt kondens (f 0,30) | 16 l | |
| Märkt sorption (f 0,90 resp. 0,80) | 6 l | 10 l |

16 och 10 stämmer med köpguidens tabeller för 40 kvm vid 60 till 70 procent. Vid 5 grader räknar kalkylatorn inte, och en källare på 5 grader i augusti finns inte, så behovet vid 5 grader står inte på sidan.

### Liter per dygn

| Maskin | 15 °C | 10 °C | 5 °C |
|---|---|---|---|
| SW39FW, 19 l märkt | 19 × 0,30 = 5,7 (4,8 till 6,7) | 19 × 0,20 = 3,8 (2,9 till 4,6) | ingen faktor. Meacos andel, en tjugondel, ger 0,9. Skrivs "under 1" med källan utskriven |
| EvoDry, 7,4 l märkt | 7,4 × 0,90 = 6,7 (6,3 till 7,4) | 7,4 × 0,80 = 5,9 (5,6 till 7,4) | 7,4 × 0,65 = 4,8 |

Mot behovet: vid 15 grader räcker båda (4,7). Vid 10 grader räcker ingen av dem på vår formel: SW39FW ger hälften, EvoDry fyra femtedelar (märkt behov 10 mot 7,4). Acetec anger 100 m³, vilket täcker 88 m³. Köpguiden säger 20 kvm för EvoDry vid 60 till 80 procent, och det står så här också.

### El per liter, kontinuerlig drift

SW39FW 320 W dygnet runt = 7,68 kWh. EvoDry 530 W dygnet runt = 12,72 kWh.

| Maskin | Temp | kWh/liter | kr/liter (2,40) |
|---|---|---|---|
| SW39FW | 15 °C | 7,68 / 5,7 = 1,35 | 3,2 |
| SW39FW | 10 °C | 7,68 / 3,8 = 2,0 | 4,9 |
| EvoDry | 20 °C | 12,72 / 7,4 = 1,7 (tillverkarens båda tal) | 4,1 |
| EvoDry | 15 °C | 12,72 / 6,7 = 1,9 | 4,6 |
| EvoDry | 10 °C | 12,72 / 5,9 = 2,2 | 5,2 |
| EvoDry | 5 °C | 12,72 / 4,8 = 2,7 | 6,4 |

Med Wood's 510 W: 12,24 / 5,7 = 2,1 kWh/liter vid 15 °C, alltså sämre än EvoDry vid samma temperatur. Står i texten som osäkerhet. 1,35 och 1,7 är samma tal som på granskningen och köpguiden.

### El per månad

| Maskin | Gångtid | kWh/månad | kr/månad |
|---|---|---|---|
| SW39FW 320 W | 8 h | 76,8 | 184 |
| SW39FW 320 W | 24 h | 230,4 | 553 |
| SW39FW 510 W | 8 h | 122,4 | 294 |
| EvoDry 530 W | 8 h | 127,2 | 305 |
| EvoDry 530 W | 24 h | 381,6 | 916 |

Samma tal som granskningen, köpguiden, sorptionssidan och krypgrundsguiden.

### Tre år

Antagande: 8 timmar per dygn, sex månader om året (maj till oktober), 2,40 kr/kWh, butikens 320 W. 18 månader.

| Maskin | Inköp | El 3 år | Summa |
|---|---|---|---|
| SW39FW | 5 948 | 184 × 18 = 3 312 | 9 260 |
| EvoDry | 9 995 | 305 × 18 = 5 490 | 15 485 |

Hela året (36 månader): 6 624 och 12 572 kr; 10 980 och 20 975 kr. SW39FW med 510 W, sex månader: 294 × 18 = 5 292, summa 11 240 kr. Filter (Wood's årligt, Acetec två gånger om året) och slang till SW39FW ingår inte; pris ej angivet i källorna.

### Övrigt

- Tanktid SW39FW: 11,4 / 5,7 = 2,0 dygn vid 15 °C, 11,4 / 3,8 = 3,0 dygn vid 10 °C.
- Vikt: 22,5 kg (Wood's SW38FW) mot 5,4 kg (Acetec), fyra gånger.

## 5. Det vi inte kunde hämta

För chefredaktören att öppna i webbläsare:

- Wood's egen sida för SW39FW: 404 vid tidigare besök, ingen träff på woods.se. Alla Wood's-tal som inte finns hos butiken kommer från SW38FW.
- Acetecs dokumentation ref 20100 säger "Manöverpanel: nej", medan sorptionssidan säger att Acetec drar en manöverpanel in i bostaden på modularkabel. Sidan här skriver att hygrostaten sitter på maskinen och nämner ingen panel. Produktexperten avgör vilket som gäller för 6H 2.0 (panelen kan vara ett tillbehör, "Upgrade kit EvoDry Display" finns hos Acetec).
- Talet 9,7 liter "som mest" finns hos Proffsmagasinet men inte i Acetecs dokumentation vid hämtningen. Sidan använder bara 7,4.
- Kapacitet vid 15, 10 eller 5 grader för någon av maskinerna: ingen källa anger något. Allt är vår omräkning.
- Meacos manual bakom Elgigantens 0,47 liter vid 5 grader: inte läst.
- Filterpriser för båda maskinerna.
- Fuktguide.se: inte hämtad i detalj.

## 6. Illustration

`src/assets/illustrationer-kallor/fukt/sw39fw-vs-evodry-kapacitet.svg`, 600 × 360. Grupperade staplar vid 15, 10 och 5 grader: SW39FW i blyerts, EvoDry i penna (den serie texten pekar på). Talen 5,7/3,8/under 1 och 6,7/5,9/4,8. Nyckeltalet 5,9 får gul markering. Stapeln "under 1" är streckad eftersom den bygger på Meacos andel och inte på en faktor. En anteckning i Caveat: "här byter de plats", med pil mot 10-gradersgruppen. Skala 25 px per liter, nollinje y = 300.

## 7. Föreslagna inlänkar

1. `src/content/tester/luftavfuktare/woods-sw39fw.mdx`, stycket om Acetec EvoDry 6H 2.0 under "Mot de tre den ska jämföras med", lägg sist: "Vad de två ger i samma källare vid 15, 10 och 5 grader står i [jämförelsen SW39FW mot EvoDry 6H 2.0](/jamforelser/woods-sw39fw-vs-acetec-evodry-6h-2/)."
2. `src/content/kunskap/fukt/sorptionsavfuktare.mdx`, avsnittet "Krypgrund, garage, vind och källare", stycket "Källaren går åt båda hållen", lägg sist: "Räknat på en konkret kondensmaskin mot en konkret sorptionsmaskin i samma källare står det i [Wood's SW39FW mot Acetec EvoDry 6H 2.0](/jamforelser/woods-sw39fw-vs-acetec-evodry-6h-2/)."
3. `src/content/guider/fukt/avfuktare-kallare.mdx`, stycket "Valet blir alltså kort", lägg sist: "Ligger källaren precis runt 10 grader visar [jämförelsen mellan SW39FW och EvoDry 6H 2.0](/jamforelser/woods-sw39fw-vs-acetec-evodry-6h-2/) hur mycket vatten var och en ger där."
4. `src/content/tester/luftavfuktare/acetec-evodry-6h-2.mdx` (skrivs parallellt), i avsnittet om alternativ eller elkostnad: samma länk med ankaret "kondens mot sorption i samma källare".

Kategorisidan listar jämförelsen automatiskt under "Fler guider och tester om Luftavfuktare".

## 8. Källor

- [Proffsmagasinet, Wood's SW39FW I-EcoDefrost+](https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/woods-sw39fw-i-ecodefrost-avfuktare-med-luftfilter-140-m-4058317)
- [Proffsmagasinet, Acetec EvoDry 6H 2.0](https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/acetec-evodry-6h-20-sorptionsavfuktare-1150001)
- [Acetec, dokumentation EvoDry 6H 2.0](https://docs.acetec.se/dokument/ref-20100/)
- [Wood's, SW38FW](https://woods.se/en/products/dehumidifiers/woods-sw38fw/) och [produktbladet](https://woods.se/wp-content/themes/woods/action/product-sheet.php?id=36050&lang=en)
- [Ljungby Fuktkontroll, välj rätt avfuktare](https://www.lfs-web.se/avfuktare-valj-ratt-for-bast-ekonomi-och-sakrast-avfuktning/)
- [Dantherm, adsorption eller kondensation](https://www.danthermgroup.com/se/artiklar/adsorption-eller-kondensation-vaelj-raett-avfuktare-foer-dina-behov)
- [Meaco, my dehumidifier is bigger than your dehumidifier](https://blog.meaco.com/my-dehumidifier-is-bigger-than-your-dehumidifier-no-its-not/)
- [Corroventa, CTR STD-TT](https://www.corroventa.se/produkter/krypgrundsavfuktare/krypgrundsavfuktare-ctr-std-tt/)
- [Elgiganten, Meaco 10L ABC](https://www.elgiganten.se/product/hem-hushall-tradgard/inomhusklimat-uppvarmning/luftkvalitet/luftavfuktare/meaco-10l-abc-vit-avfuktare-10-liter-per-dag-hygrostat-kompressor/295839) (butiksuppgift)
- [SCB, priser på elenergi och överföring av el](https://www.statistikdatabasen.scb.se/goto/sv/ssd/SSDManadElhandelpris)
- Ettorna: [Proffsmagasinet, sorption eller kondens](https://www.proffsmagasinet.se/kunskapsportalen/guider/sorptionsavfuktare-eller-kondensavfuktare), [Ozoneair](https://ozoneair.se/kondensavfuktare-vs-sorptionsavfuktare/), [Elon](https://www.elon.se/avfuktare-i-kallare-din-vag-till-ett-battre-inomhusklimat), [Bygghemma](https://www.bygghemma.se/reportage-och-guider/avfuktare-kallare/), [Test.se](https://www.test.se/avfuktare/)
- `docs/briefer/underlag-kalkyl-avfuktare.md`, `docs/briefer/underlag-woods-sw39fw-2026-09-16.md`, `docs/briefer/underlag-fakta-sorptionsavfuktare.md`, `docs/briefer/underlag-fakta-avfuktare-kallare.md`
