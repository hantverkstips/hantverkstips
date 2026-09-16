# Underlag: dimensioneringsformel för avfuktarkalkylatorn

Skrivet 2026-09-16 av produktexperten. Gäller `src/lib/kalkyl/avfuktare.ts` (ersätter PLATSHÅLLARFORMEL) och sidan `/rakna/avfuktare/`. Indata som i dag: yta, takhöjd, fuktnivå i tre steg, uppvärmt ja/nej. Källor sist, antaganden i avsnitt 6.

## 1. Fysiken

Luften i rummet är inte problemet. En källare på 96 m³ vid 15 °C och 75 % RF bär 0,9 liter vatten, och att ta ner den till 55 % kostar ett kvarts glas. Maskinen köps för det som kommer in varje dygn: uteluft genom ventilationen och fukt från mark och material. Formeln räknar belastning per dygn i värsta månaden (augusti).

Beteckningar: A yta (m²), h takhöjd (m), V = A × h (m³), T dimensionerande temperatur (°C), v_s(T) mättnadsånghalt (g/m³), RF_start startnivå (0 till 1), n luftomsättning (1/h), v_ute uteluftens ånghalt (g/m³), q markfukt (g per m² och dygn).

Steg 1, mättnadsånghalt. Magnus-formeln med Alduchov och Eskridges konstanter (Lawrence 2005): e_s = 6,1094 × exp(17,625 × T / (243,04 + T)) hPa, v_s = 216,68 × e_s / (T + 273,15) g/m³. Kalkylatorn kan hårdkoda: v_s(10) = 9,38 och v_s(15) = 12,80 g/m³ (tabell i underlaget om luftfuktighet).

Steg 2, dimensionerande temperatur. Uppvärmt (kryssrutan "över 15 grader") räknas vid T = 15, ouppvärmt vid T = 10. Målet är 55 % RF, så v_mål = 0,55 × v_s(T): 7,04 g/m³ vid 15 °C, 5,16 vid 10 °C.

Steg 3, engångsuttag ur luften (liter): M_luft = V × (RF_start − 0,55) × v_s(T) / 1000. RF_start per fuktnivå: medel 0,65, hög 0,75, mycket hög 0,85. Ligger på 0,1 till 0,4 liter.

Steg 4, luftväxling (liter per dygn): G_luft = n × V × 24 × (v_ute − v_mål) / 1000, aldrig under noll. n = 0,5 oms/h, v_ute = 10,0 g/m³. Skillnaden är 2,96 g/m³ vid 15 °C och 4,84 vid 10 °C, därför blir ett kallt utrymme fuktigare av sommarvädring.

Steg 5, mark och material (liter per dygn): G_mark = A × q / 1000, med q per fuktnivå: medel 10, hög 40, mycket hög 100 g/m² och dygn.

Steg 6, verkligt behov: L_verklig = (M_luft + G_luft + G_mark) × 1,3 liter per dygn vid T och 55 % RF.

Steg 7, märkt kapacitet, det tal som ska jämföras med `kapacitet_liter_dygn` i databasen: L_märkt = L_verklig / f(T, typ), faktorer i avsnitt 2. Avrunda uppåt till heltal.

Typ: uppvärmt ger kondens, ouppvärmt ger sorption, som i dag.

## 2. Omräkning från uppgiven kapacitet

Tillverkarnas egna par, samtliga ur underlaget om avfuktare till källaren och Meacos blogg:

| Maskin | Typ | Märkt | Vid 20 °C/60 % | Vid 10 °C/60 % |
|---|---|---|---|---|
| Meaco 10L | kondens | 10 (30/80) | 3,9 (0,39) | 1,9 (0,19) |
| Meaco 20L | kondens | 20 (30/80) | 8,0 (0,40) | 2,9 (0,15) |
| Meaco 30L | kondens | 30 (30/80) | 12,2 (0,41) | 7,3 (0,24) |
| Meaco 40L | kondens | 40 (30/80) | 16,2 (0,41) | 9,5 (0,24) |
| Wood's SW59FM | kondens | 41 (30/80) | 25 vid 20/70 (0,61) | saknas |
| Wood's DSC50FM | kondens | 16,2 (35/80) | 8,8 vid 20/70 (0,54) | saknas |
| Corroventa CTR STD-TT | sorption | 17 (20/60) | 1,00 | 13 (0,76), 11 vid 5 °C (0,65) |
| Meaco DD8L | sorption | 7,4 (20/60) | 1,00 | 7,3 (0,99) |

Wood's värden ligger högre för att de mäts vid 70 % RF, inte 60. Faktorer att använda, med intervallet som osäkerhet:

| Från | Till | Faktor f | Intervall |
|---|---|---|---|
| Kondens 30 °C/80 % | 20 °C/55 % | 0,38 | 0,35 till 0,42 |
| Kondens 30 °C/80 % | 15 °C/55 % | 0,30 | 0,25 till 0,35 (interpolerat, ingen mätpunkt) |
| Kondens 30 °C/80 % | 10 °C/55 % | 0,20 | 0,15 till 0,24 |
| Sorption 20 °C/60 % | 15 °C/55 % | 0,90 | 0,85 till 1,0 |
| Sorption 20 °C/60 % | 10 °C/55 % | 0,80 | 0,75 till 1,0 |
| Sorption 20 °C/60 % | 5 °C/55 % | 0,65 | 0,65 (en källa) |

Kalkylatorn räknar med mittvärdet. Det stora talet är L_märkt med raden "märkt kapacitet vid 30 °C och 80 % RF" (kondens) eller "vid 20 °C och 60 % RF" (sorption), och därunder "motsvarar X liter i din källare vid 15 grader". Dagens rad "vid 20 °C och 60 % RF" stämmer inte med databasens 30/80-värden.

## 3. Marginal

Faktorn 1,3 i steg 6 betyder att maskinen ska klara augustibelastningen på cirka 18 timmar per dygn. Hygrostaten stänger av vid börvärdet och startar en bit över det, så en maskin som måste gå dygnet runt håller aldrig 55 % utan pendlar över 60. En kondensmaskin som går jämt vid 15 °C avfrostar dessutom oftare än den avfuktar. Luftmiljöbutiken och LFS säger "hellre för stor än för liten" utan siffra; 1,3 är vårt val, och Christians mätning avgör om det ska vara 1,2 eller 1,5. Belastningen är redan värsta månaden, så mer än 1,5 blir dubbel marginal.

## 4. Gränser

- Yta över 300 kvm: som i dag, "Över 300 kvm rekommenderar vi två maskiner eller en fast installation."
- Takhöjd: dagens 1,8 till 4 m utesluter varje krypgrund. Sänk till 0,5 m. Under 0,5 eller över 4: ogiltig indata.
- Under 5 grader: formuläret saknar temperatur. Byt kryssrutan mot tre alternativ: "över 15 grader", "5 till 15 grader", "under 5 grader". Det sista ger status utanför: "Under 5 grader tappar även sorptionsmaskiner fart och kondensmaskiner står stilla. Läs guiden om krypgrund innan du köper." Går inte formuläret att ändra: samma mening under resultatet för ouppvärmt.
- Kondens i ouppvärmt utrymme visas aldrig. Exempel 2 skulle ge 82 liter märkt kondens, ett tal som skickar läsaren fel.

## 5. Räkneexempel

Konstanter: v_ute 10,0, n 0,5, marginal 1,3, q 10/40/100, RF_start 0,65/0,75/0,85, f kondens 15 °C 0,30, f sorption 10 °C 0,80.

| | Ex 1: källare | Ex 2: krypgrund | Ex 3: förråd |
|---|---|---|---|
| Indata | 40 kvm, 2,4 m, hög, uppvärmt | 60 kvm, 1,8 m, mycket hög, ouppvärmt | 20 kvm, 2,4 m, medel, ouppvärmt |
| T, v_s, v_mål | 15 °C, 12,80, 7,04 | 10 °C, 9,38, 5,16 | 10 °C, 9,38, 5,16 |
| V | 96 m³ | 108 m³ | 48 m³ |
| M_luft | 96 × 0,20 × 12,80 / 1000 = 0,25 | 108 × 0,30 × 9,38 / 1000 = 0,30 | 48 × 0,10 × 9,38 / 1000 = 0,05 |
| G_luft | 0,5 × 96 × 24 × 2,96 / 1000 = 3,41 | 0,5 × 108 × 24 × 4,84 / 1000 = 6,27 | 0,5 × 48 × 24 × 4,84 / 1000 = 2,79 |
| G_mark | 40 × 40 / 1000 = 1,60 | 60 × 100 / 1000 = 6,00 | 20 × 10 / 1000 = 0,20 |
| Summa × 1,3 | 5,26 × 1,3 = 6,84 | 12,57 × 1,3 = 16,34 | 3,04 × 1,3 = 3,95 |
| L_verklig | 7 l/dygn vid 15 °C | 17 l/dygn vid 10 °C | 4 l/dygn vid 10 °C |
| Typ, f | kondens, 0,30 | sorption, 0,80 | sorption, 0,80 |
| L_märkt (visas) | 23 liter | 21 liter | 5 liter |
| Intervall ur f | 20 till 27 | 17 till 22 | 4 till 6 |

Rimlighet. Ex 1 pekar på Wood's SW43FW (25,5 l) eller AD30 (26 l); Meacos regel för 10 till 15 °C är "stor kondensmaskin, 20 till 25 liter". Ex 2 med verklig krypgrundshöjd 0,8 m ger V = 48, summa 8,93 × 1,3 = 11,6, märkt sorption 15 liter; Corroventa anger CTR STD-TT (17 l) för grunder upp till 150 m³ med plast på marken, så utan plast ska vi landa högre. Ex 3 ger en liten sorptionsmaskin som Meaco DD8L.

## 6. Källa eller antagande

Källa:
- Magnus-formeln och mättnadsånghalter: Lawrence 2005, tabellen i underlaget om luftfuktighet.
- Kapacitetsfaktorer: Meacos blogg (10L, 20L, 30L, 40L, DD8L), Corroventa CTR STD-TT, Wood's produktsidor via Proffsmagasinet (SW59FM, DSC50FM).
- Markavdunstning från bar mark 3,6 till 5,7 g per m² och timme, alltså 86 till 137 g per m² och dygn: Kurnitski, Building and Environment 36(3) 2001, s. 359 till 373, refererad via sökträff; abstraktet ligger bakom betalvägg och bör läsas i original.
- Uteluftsflöde 0,35 l/s per m² golvyta i bostad, vilket vid 2,5 m takhöjd är 0,5 oms/h: FoHMFS 2014:18. Ventilationsluft som fuktkälla i krypgrund sommartid: Boverket, "Risker med fukt från uteluft i krypgrund".
- Uteluftens ånghalt sommar 7 till 10 g/m³ (Byggutbildarna, utan primärkälla) och 9 till 11 g/m³ (sökträff med hänvisning till Fukthandboken); SMHI: 70 till 80 % RF i juli i inlandet, vid 17 °C 10,1 till 11,6 g/m³.
- Kondens tappar under 15 °C, frost vid 5 °C: LFS. Meacos temperaturregel: sorption under 10 °C, stor kondens 10 till 15, valfri över 15.
- 75 % RF som kritiskt fukttillstånd: BBR 6:52 via Boverket.

Antagande, vårt eget:
- q per fuktnivå (10/40/100). Bara 100 vilar på Kurnitski. 10 och 40 är gissningar för en tät respektive kapillärt fuktig betongplatta; ångdiffusion genom 100 mm betong ger enligt vår överslagsräkning 1 till 5 g per m² och dygn, utan svensk tabell över betongens ångmotstånd att luta det mot.
- n = 0,5 oms/h även i källare och krypgrund. Stängda ventiler ger lägre, öppet fönster högre.
- T = 15 för uppvärmt och 10 för ouppvärmt, marginal 1,3, RF_start per fuktnivå, faktorn 0,30 vid 15 °C (interpolerad).
- Att uppmätt RF säger något om markfukten alls. Kalkylatorns svagaste led.

Beställning till Christian. Kör en avfuktare med hygrostat på 55 % i din källare sju dygn i följd i augusti eller september. Notera per dygn: liter i tanken, gångtimmar (kWh på elmätare delat med maskinens effekt), temperatur och RF morgon och kväll, SMHI:s värden för orten. Tejpa samtidigt 50 × 50 cm plast på golvet och på ytterväggen, läs av efter två dygn: vått under betyder kapillär fukt. Det ger q i en verklig källare och gångtiden som säger om 1,3 räcker.

## Källor

- [Lawrence 2005, BAMS 86(2)](https://journals.ametsoc.org/view/journals/bams/86/2/bams-86-2-225.xml)
- [Meaco, my dehumidifier is bigger than your dehumidifier](https://blog.meaco.com/my-dehumidifier-is-bigger-than-your-dehumidifier-no-its-not/)
- [Meaco, which dehumidifier for a 3, 4, 5 bedroom house](https://blog.meaco.com/which-dehumidifier-do-i-buy-for-a-3-4-5-bedroom-house/)
- [Corroventa, CTR STD-TT](https://www.corroventa.se/produkter/krypgrundsavfuktare/krypgrundsavfuktare-ctr-std-tt/)
- [Kurnitski, Ground moisture evaporation in crawl spaces, Aalto](https://research.aalto.fi/en/publications/ground-moisture-evaporation-in-crawl-spaces/) och [ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0360132300000135)
- [FoHMFS 2014:18, allmänna råd om ventilation](https://www.folkhalsomyndigheten.se/contentassets/641784832543443ea4eebe9b300c244e/fohmfs-2014-18.pdf)
- [Boverket, risker med fukt från uteluft i krypgrund](https://www.boverket.se/sv/byggande/forebygg-fel-brister-skador/risker/risker-fuktskador/fuktrisker-for-grund/krypgrund/risk-med-fukt-fran-uteluft-i-krypgrund/)
- [Byggutbildarna, lite fuktteori](https://nyttochviktigt.byggutbildarna.com/grundlaggande-byggteknik-lite-fuktteori/)
- [SMHI, olika mått på luftfuktighet](https://www.smhi.se/kunskapsbanken/meteorologi/luftfuktighet/olika-matt-pa-luftfuktighet)
- [LFS, välj rätt avfuktare](https://www.lfs-web.se/avfuktare-valj-ratt-for-bast-ekonomi-och-sakrast-avfuktning/) och [LFS, frågor och svar](https://www.lfs-web.se/avfuktare-fragor-svar.htm)
- [Luftmiljöbutiken, hur väljer jag avfuktare](https://luftmiljobutiken.se/faq-2/hur-valjer-jag-avfuktare/) (butik, bara som indikation)
- Wood's och Acetec: se underlaget om avfuktare till källaren.
