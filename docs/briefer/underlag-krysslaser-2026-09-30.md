# Underlag: krysslaser, kategorisidan /krysslaser/ (granskning på datablad)

Beställt av affiliateagenten 2026-09-30. Hämtat 2026-09-30. Priser inkl. moms, lästa i Proffsmagasinets strukturerade data (kategorisidans och produktsidans JSON) 2026-09-30. Butik (PM = Proffsmagasinet) är källa för pris, lager, EAN och vad som ingår, aldrig för prestanda. **Utdrag** = sökmotorns utdrag, sidan inte läst. **Sammanfattning** = WebFetch-sammanfattning av sidan, inte ordagrant. Egen räkning är märkt med formel. Inga slugs föreslås här.

- Omräkning till jämförelsenyckeln `noggrannhet_mm_per_10m`: egen räkning, mm/10 m = (mm/m) × 10.
- "PM-bilaga" = tillverkarens bruksanvisning eller produktblad som PM lägger upp på produktsidan, hämtad från `https://pm-asset.azureedge.net/api/asset-download?id=<id>`. Texten i PDF:en är tillverkarens. Id står per modell.

---

## Sammanfattning

| # | Modell | Pris 30/9 (PM) | Lager | Färg | Linjer | Noggrannhet mm/10 m | Räckvidd utan / med mottagare | Klass | Batteri, drifttid | EAN (PM) | URL-status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Bosch GLL 2-10 Professional | 1 250 | i lager | röd | 2 (H+V) | ±3 | 10 m / – | 2 | 3×AA; 9 h kors, 17 h linje | 3165140850247 | 200, ingen omdirigering |
| 2 | Ryobi RBCLLG2 | 1 495 | i lager | grön | 2 (H+V) med referensmarkering | ±5 | 15 m / – | 2 | 2×AA; 5 h | 4892210203779 | 200, ingen omdirigering |
| 3 | Ryobi RB360GLL | 2 149 | i lager | grön | 360° H + V | ±5 | 25 m / – | 2 | 4×AA; 5 h | 4892210201874 | 200, ingen omdirigering |
| 4 | DeWalt DW088K | 2 171 | i lager | röd | 2 (H+V) | ±3 | 10 m synbarhet inomhus / 50 m (bara butikstext) | 2 | 3×AA; "över 40 timmar" | 5035048338575 | 200, ingen omdirigering |
| 5 | Bosch AdvancedLevel 360 (Bosch DIY) | 2 252 | i lager | grön linje, röd lodpunkt | 360° H + 2 V + lodpunkt | ±4 (lodpunkt ±10) | 24 m (diameter) / – | 2 | 4×AA; minst 4 h | 4053423245165 | 200, ingen omdirigering |
| 6 | DeWalt DW088CG | 2 484 | i lager | grön | 2 (H+V) | ±3 | 15 m / 50 m | 2 (butik) | 3×AA; 16 h | 5035048669600 | 200, ingen omdirigering |
| 7 | Milwaukee CLL-C | 2 543 (ord. 3 391) | i lager | grön | 2 (H+V) | ±3 | 30 m / 50 m | 2 | 4×AA; 8 h | 4058546360351 | 200, ingen omdirigering |
| 8 | Bosch GCL 2-15 G Professional | 2 619 | i lager | grön linje, röda punkter | 2 (H+V) + 2 lodpunkter | ±3 (punkter ±7) | 15 m linje, 10 m punkt / – | 2 | 3×AA; 6–22 h beroende på läge | 3165140869553 | 200, ingen omdirigering |
| 9 | Makita SK105DZ | 2 781 (ord. 3 091) | i lager | röd | 2 (H+V) | ±3 | 25 m / 80 m | 2 | 12V max CXT, ingår inte; 15/20/40 h | 088381851893 | 200, ingen omdirigering |
| 10 | Bosch GCL 2-50 G Professional (PM art. 2930433) | 2 863 | i lager | grön linje, gröna punkter | 2 (H+V) + 2 lodpunkter | ±3 (punkter ±7) | 15 m / 5–50 m | 2 | 4×AA; drifttid saknas | 4059952511085 | 200, ingen omdirigering |
| 11 | Leica Lino L2s-1 | 3 570 | i lager | röd | 2 (H+V) | ±2 (butik; tillverkarens blad ej läst) | 25 m / saknas | 2 | 3×AA; "upp till 13 tim." (butik) | 7640110697511 | 200, ingen omdirigering |
| 12 | Bosch GLL 3-80 Professional | 4 501 | i lager | röd | 3 × 360° | ±3 | 30 m / 5–120 m | 2 | 4×AA; max 4 h i 3-linjeläge | 3165140888356 | 200, ingen omdirigering |

- Lager: alla tolv har B2C-status `InStock` och texten "Skickas inom 24 timmar!" på produktsidan 2026-09-30.
- URL-status: `curl -s -I -L` 2026-09-30, slutkod 200 och `num_redirects=0` för alla tolv.
- Färg: 5 röda (1, 4, 9, 11, 12), 7 gröna (2, 3, 5, 6, 7, 8, 10). 360°: 3, 5, 12. Enkel tvålinjers kors: 1, 4, 6 (också 2, 7, 9, 11).
- Pris på kortlistan 1 250–4 501 kr; tio av tolv ligger i 1 500–4 000 kr.
- Produktsidans pris stämmer med kategorisidans för alla tolv.

---

## Steg 1. Sortimentet hos Proffsmagasinet, 2026-09-30

Kategori: `https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar` ("144 produkter", `?page=1` till `?page=3`; sida 4 och framåt är tomma). Under `/maskiner-verktyg/laserinstrument` finns också avståndsmätare, laserkikare/golfkikare, punktlasrar, rörlasrar, rotationslaserpaket, rotationslasrar och tillbehör. De är inte med. Ingen annan kategori för kors- eller linjelaser finns.

- Totalt i kategorin: 144 artiklar (479–20 017 kr).
- **1 200–5 000 kr: 65 artiklar.** Av dem 40 i 1 500–4 000 kr. 32 av 65 har status `InStock` (egen räkning ur tabellen).
- Pris = försäljningspris i kategorisidans data. "Ord. pris" = butikens `ListPrice` när en rabatt visas.
- Typen är butikens benämning. Självnivellering är inte kontrollerad rad för rad utanför kortlistan. Troligen inte kors-/linjelaser med pendel: Bosch GTL 3 ("Kaklingslaser"), Milwaukee CLLLDM30 ("Laserkit", innehåll inte läst), DeWalt DCE825NG18 ("Krysslaser 5 punkt"). De står kvar för fullständighet.
- Leica Lino L2-1 (rad 54): kategorisidan visar 4 460 kr, produktsidan 4 779 kr samma dag. Produktsidan gäller.
- Full adress = `https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar/` + adresskolumnen.

| # | Pris kr | Ord. pris | Märke | Modell | Butikens typ / tillägg | Lager 30/9 | Art.nr | Adress | Kortlista |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 1 248 |  | STANLEY | Cubix Set | Korslaserpaket, med grön laser, stativ & väska | i lager, "Skickas inom 24 timmar!" | 2901366 | stanley-cubix-set-korslaserpaket-med-gron-laser-stativ-vaska-2901366 |  |
| 2 | 1 250 |  | Bosch | GLL 2-10 | Korslaser | i lager, "Skickas inom 24 timmar!" | CQ17000 | bosch-gll-2-10-korslaser-cq17000 | **ja** |
| 3 | 1 295 |  | Bosch | PLL 360-1 | Cirkellaser | slut | 4079919 | bosch-pll-360-1-cirkellaser-4079919 |  |
| 4 | 1 310 |  | Limit | 1000-R | Korslaser, rött laserljus, inkl. batterier | slut | 3073182 | limit-1000-r-korslaser-rott-laserljus-inkl-batterier-3073182 |  |
| 5 | 1 346 |  | Ironside | 102517 | Minilaser, med grön laser | i lager, "Skickas inom 24 timmar!" | 3041830 | ironside-102517-minilaser-med-gron-laser-3041830 |  |
| 6 | 1 349 |  | Elma | X2 | Korslaser | i lager, "Skickas inom 24 timmar!" | 3071159 | elma-x2-korslaser-3071159 |  |
| 7 | 1 376 |  | Bosch | PLL 360-1G E | Cirkellaser | slut | 4079917 | bosch-pll-360-1g-e-cirkellaser-4079917 |  |
| 8 | 1 463 |  | STANLEY | Cross 90 | Korslaser, med röd laser | slut | 2901358 | stanley-cross-90-korslaser-med-rod-laser-2901358 |  |
| 9 | 1 495 |  | Ryobi | RBCLLG2 | Korslaser, grön, med batterier | i lager, "Skickas inom 24 timmar!" | 4048990 | ryobi-rbcllg2-korslaser-gron-med-batterier-4048990 | **ja** |
| 10 | 1 529 | 2 490 | PELA | 544413 | Linjelaser, grön, med fäste | i lager, "Skickas inom 24 timmar!" | 4068900 | pela-544413-linjelaser-gron-med-faste-4068900 |  |
| 11 | 1 562 |  | STANLEY | Cross 90 | Korslaser, med grön laser | slut | 2901359 | stanley-cross-90-korslaser-med-gron-laser-2901359 |  |
| 12 | 1 610 |  | Geo Fennel | GEO-X1 | Korslaser | i lager, "Skickas inom 24 timmar!" | 3097806 | geo-fennel-geo-x1-korslaser-3097806 |  |
| 13 | 1 712 |  | Bosch | GCL 2-15 | Korslaser, Solo | i lager, "Skickas inom 24 timmar!" | CQ17007-1 | bosch-gcl-2-15-korslaser-solo-cq17007-1 |  |
| 14 | 1 788 |  | Limit | 1000-G | Korslaser, inkl. batterier | slut | 3073179 | limit-1000-g-korslaser-inkl-batterier-3073179 |  |
| 15 | 1 795 |  | Ryobi | RB360RLL | Linjelaser, röd, med batterier | slut | 4048998 | ryobi-rb360rll-linjelaser-rod-med-batterier-4048998 |  |
| 16 | 1 890 |  | Bosch | PLL 360-1G | Cirkellaser | slut | 4079916 | bosch-pll-360-1g-cirkellaser-4079916 |  |
| 17 | 1 990 |  | STANLEY | SLL360 | Korslaser, med grön laser | slut | 2901361 | stanley-sll360-korslaser-med-gron-laser-2901361 |  |
| 18 | 2 115 |  | Bosch | GTL 3 | Kaklingslaser | i lager, "Skickas inom 24 timmar!" | CQ17050 | bosch-gtl-3-kaklingslaser-cq17050 |  |
| 19 | 2 126 |  | STANLEY | 360 Set | Korslaserpaket, med röd laser, stativ & väska | slut | 2901364 | stanley-360-set-korslaserpaket-med-rod-laser-stativ-vaska-2901364 |  |
| 20 | 2 144 |  | Bosch DIY | UniversalLevel 360 | Linjelaser, med stativ | slut | 4054176 | bosch-diy-universallevel-360-linjelaser-med-stativ-4054176 |  |
| 21 | 2 149 |  | Ryobi | RB360GLL | Linjelaser, grön, med batterier | i lager, "Skickas inom 24 timmar!" | 4048997 | ryobi-rb360gll-linjelaser-gron-med-batterier-4048997 | **ja** |
| 22 | 2 171 |  | DeWalt | DW088K | Korslaser | i lager, "Skickas inom 24 timmar!" | CQ11810 | dewalt-dw088k-korslaser-cq11810 | **ja** |
| 23 | 2 252 |  | Bosch DIY | AdvancedLevel 360 | Linjelaser, grön laser | i lager, "Skickas inom 24 timmar!" | 4054173 | bosch-diy-advancedlevel-360-linjelaser-gron-laser-4054173 | **ja** |
| 24 | 2 263 |  | STANLEY | 360 Set | Korslaserpaket, med grön laser, stativ & väska | i lager, "Skickas inom 24 timmar!" | 2901365 | stanley-360-set-korslaserpaket-med-gron-laser-stativ-vaska-2901365 |  |
| 25 | 2 312 |  | Leica | 848435 | Linjelaser, inkl magnetadaptor | slut | 4012358 | leica-848435-linjelaser-inkl-magnetadaptor-4012358 |  |
| 26 | 2 367 |  | Bosch | GCL 2-15 | Korslaser, med hård plastväska | i lager, "Skickas inom 24 timmar!" | CQ17007-3 | bosch-gcl-2-15-korslaser-med-hard-plastvaska-cq17007-3 |  |
| 27 | 2 390 |  | STANLEY | SLL360 | Korslaser, med röd laser | slut | 2901360 | stanley-sll360-korslaser-med-rod-laser-2901360 |  |
| 28 | 2 484 |  | DeWalt | DW088CG | Korslaser | i lager, "Skickas inom 24 timmar!" | CQ11809 | dewalt-dw088cg-korslaser-cq11809 | **ja** |
| 29 | 2 520 |  | Bosch DIY | AdvancedLevel 360 | Linjelaser, med stativ | i lager, "Skickas inom 24 timmar!" | 4054175 | bosch-diy-advancedlevel-360-linjelaser-med-stativ-4054175 |  |
| 30 | 2 543 | 3 391 | Milwaukee | CLL-C | Krysslaser, med batteri | i lager, "Skickas inom 24 timmar!" | 3139094 | milwaukee-cll-c-krysslaser-med-batteri-3139094 | **ja** |
| 31 | 2 619 |  | Bosch | GCL 2-15 G | Korslaser | i lager, "Skickas inom 24 timmar!" | CQ17008 | bosch-gcl-2-15-g-korslaser-cq17008 | **ja** |
| 32 | 2 664 |  | Ironside | 152300 | Korslaser, med röd laser | i lager, "Skickas inom 24 timmar!" | 3041754 | ironside-152300-korslaser-med-rod-laser-3041754 |  |
| 33 | 2 681 |  | Stabila | LAX 50 | Korslaser, med batterier och stativ | slut | 1220046 | stabila-lax-50-korslaser-med-batterier-och-stativ-1220046 |  |
| 34 | 2 781 | 3 091 | Makita | SK105DZ | Korslaser, röd, utan batteri och laddare | i lager, "Skickas inom 24 timmar!" | 2320023 | makita-sk105dz-korslaser-rod-utan-batteri-och-laddare-2320023 | **ja** |
| 35 | 2 815 |  | Ironside | 103850 | Linjelaser, grön laser, 3 linjer | i lager, "Skickas inom 24 timmar!" | 4067690 | ironside-103850-linjelaser-gron-laser-3-linjer-4067690 |  |
| 36 | 2 863 |  | Bosch | GCL 2-50/RM10 | Kombilaser, grön, med batterier | i lager, "Skickas inom 24 timmar!" | 2930433 | bosch-gcl-2-50rm10-kombilaser-gron-med-batterier-2930433 | **ja** |
| 37 | 2 937 |  | Bosch | GLL 20-22 G | Linjelaser, grön laser | slut | 4066338 | bosch-gll-20-22-g-linjelaser-gron-laser-601065602-4066338 |  |
| 38 | 2 960 |  | DeWalt | DW0811 | Korslaser | slut | CQ11806 | dewalt-dw0811-korslaser-cq11806 |  |
| 39 | 3 289 |  | Elma | X360-3 | Linjelaser, med batteri | i lager, "Skickas inom 24 timmar!" | 3102737 | elma-x360-3-linjelaser-med-batteri-3-stycken-360-linjer-3102737 |  |
| 40 | 3 344 |  | DeWalt | DW0887100-1 | Krysslinjelaser, med batteri och laddare, grön laser | slut | 4080280 | dewalt-dw0887100-1-krysslinjelaser-med-batteri-och-laddare-gron-laser-4080280 |  |
| 41 | 3 375 |  | Bosch | GCL 2-50 G | Kombilaser, grön, med batterier och roterande fäste | i lager, "Skickas inom 24 timmar!" | 2930436 | bosch-gcl-2-50-g-kombilaser-gron-med-batterier-och-roterande-faste-2930436 |  |
| 42 | 3 535 |  | Bosch | GCL 2-50/RM10 | Kombilaser, grön, med väska och batterier | slut | 2930437 | bosch-gcl-2-50rm10-kombilaser-gron-med-vaska-och-batterier-2930437 |  |
| 43 | 3 570 |  | Leica | Lino L2S-1 | Korslaser | i lager, "Skickas inom 24 timmar!" | CQ12200 | leica-lino-l2s-1-korslaser-cq12200 | **ja** |
| 44 | 3 590 |  | DeWalt | DCLE14201RB-XJ | Korslaser, röd laser | slut | 4068327 | dewalt-dcle14201rb-xj-korslaser-rod-laser-4068327 |  |
| 45 | 3 650 |  | DeWalt | DCE088NG18-XJ | Krysslaser | i lager, "Skickas inom 24 timmar!" | 4080282 | dewalt-dce088ng18-xj-krysslaser-0-4080282 |  |
| 46 | 3 664 |  | Flex | ALC2/1-G/R | Korslaser, grön, med laddare | slut | 3140936 | flex-alc21-gr-korslaser-gron-med-laddare-3140936 |  |
| 47 | 3 708 |  | Spectra Precision | LT20G | Korslaser, med batteri, grön laser | slut | 4014185 | spectra-precision-lt20g-korslaser-med-batteri-gron-laser-4014185 |  |
| 48 | 3 844 |  | DeWalt | DCLE14201GB-XJ | Korslaser, grön laser | slut | 4068325 | dewalt-dcle14201gb-xj-korslaser-gron-laser-4068325 |  |
| 49 | 3 967 |  | Limit | 360 V2 | Korslaser | slut | CQ14301 | limit-360-v2-korslaser-cq14301 |  |
| 50 | 4 058 |  | Ironside | 102123 | Korslaser, med grön laser | i lager, "Skickas inom 24 timmar!" | 3041560 | ironside-102123-korslaser-med-gron-laser-3041560 |  |
| 51 | 4 157 |  | DeWalt | DCLE34021N-XJ | Krysslinjelaser | slut | 4080277 | dewalt-dcle34021n-xj-krysslinjelaser-0-4080277 |  |
| 52 | 4 329 |  | STANLEY | FatMax FMHT77598-1 | Korslaser, med grön laser | slut | 2901341 | stanley-fatmax-fmht77598-1-korslaser-med-gron-laser-2901341 |  |
| 53 | 4 341 |  | Milwaukee | L4 CLL-301C | Korslaser | slut | 2291132 | milwaukee-l4-cll-301c-korslaser-2291132 |  |
| 54 | 4 460 (produktsidan 4 779) |  | Leica | Lino L2-1 | Korslaser | i lager, "Skickas inom 24 timmar!" | CQ12201 | leica-lino-l2-1-korslaser-cq12201 |  |
| 55 | 4 501 |  | Bosch | GLL 3-80 | Korslaser, med alkaliska batterier | i lager, "Skickas inom 24 timmar!" | CQ17021 | bosch-gll-3-80-korslaser-med-alkaliska-batterier-cq17021 | **ja** |
| 56 | 4 504 |  | Ironside | 103112 | Linjelaser, grön, med batterier | i lager, "Skickas inom 24 timmar!" | 3140024 | ironside-103112-linjelaser-gron-med-batterier-3140024 |  |
| 57 | 4 539 |  | Elma | X360-3 | Linjelaser, med batteri | i lager, "Skickas inom 24 timmar!" | 4065183 | elma-x360-3-linjelaser-med-batteri-4065183 |  |
| 58 | 4 569 |  | STANLEY | FatMax FMHT77586-1 | Korslaser, med grön laser | slut | 2901343 | stanley-fatmax-fmht77586-1-korslaser-med-gron-laser-2901343 |  |
| 59 | 4 582 |  | Milwaukee | CLLLDM30 | Laserkit | slut | 4054249 | milwaukee-cllldm30-laserkit-4054249 |  |
| 60 | 4 724 | 5 249 | Milwaukee | L4 CLLP-301C | Kombilaser | slut | 2291133 | milwaukee-l4-cllp-301c-kombilaser-2291133 |  |
| 61 | 4 735 |  | Ironside | 102125 | Korslaserpaket, med stativ, grön laser | i lager, "Skickas inom 24 timmar!" | 3041756 | ironside-102125-korslaserpaket-med-stativ-gron-laser-3041756 |  |
| 62 | 4 832 |  | DeWalt | DCE825NG18-XJ | Krysslaser, 5 punkt, grön | slut | 4080275 | dewalt-dce825ng18-xj-krysslaser-5-punkt-gron-4080275 |  |
| 63 | 4 857 |  | DeWalt | DCE0811D1R | Korslaser | slut | CQ11800 | dewalt-dce0811d1r-korslaser-cq11800 |  |
| 64 | 4 859 |  | Bosch | GCL 12V-50-22 CG | Kombilaser, grön, med batterier och roterande fäste | slut | 4072535 | bosch-gcl-12v-50-22-cg-kombilaser-gron-med-batterier-och-roterande-faste-4072535 |  |
| 65 | 4 880 |  | Flex | ALC3/1-G/R | Korslaser, med laddare | slut | 3140937 | flex-alc31-gr-korslaser-med-laddare-3140937 |  |

"slut" = status `OutOfStock`, ingen leveranstext visas. Ingen artikel i intervallet står som beställningsvara eller restnoterad; utanför intervallet visar PELA 544411 och Milwaukee M12 CLLP-0C "Skickas om 5-7 dagar".

---

## Steg 2. Kortlistan, 12 modeller

### Varför de andra i steg 1 är utelämnade

- **Slut i lager 2026-09-30** (33 artiklar), bland annat Stabila LAX 50, Limit 1000-R, 1000-G och 360 V2, Bosch GLL 20-22 G, Bosch PLL 360-1 (alla fyra), Bosch UniversalLevel 360, Stanley Cross 90 och SLL360, Ryobi RB360RLL, DeWalt DW0811, DCLE14201RB/GB, DCLE34021N, DW0887100-1, DCE0811D1R, Milwaukee L4 CLL-301C och L4 CLLP-301C, Flex ALC2/1 och ALC3/1, Spectra LT20G. Kan tas in när de kommer tillbaka.
- **Varianter av en modell på listan:**
  - Bosch GCL 2-15, röd (CQ17007-1, 1 712 kr, och CQ17007-3 i hård väska, 2 367 kr). Samma bruksanvisning som GCL 2-15 G (1 609 92A 8E9).
  - Bosch AdvancedLevel 360 med stativ TT 150 (4054175, 2 520 kr).
  - Bosch GCL 2-50 G, art. 2930436 (3 375 kr) och 2930437 (3 535 kr, slut).
  - Leica 848435 (4012358, 2 312 kr, slut) har samma GTIN 7640110697511 som Lino L2S-1 CQ12200: samma produkt listad två gånger.
- **Märken utanför uppdragets lista över etablerade tillverkare:** PELA (544413), Ironside (sex artiklar), Elma (X2, X360-3 ×2). Datablad inte sökt.
- **I lager men bortvalda för att hålla tolv:**
  - Geo-Fennel GEO-X1, 1 610 kr, EAN 4045921015548. Butiken anger ±3 mm/10 m, ±3° självnivellering, 30 m radie utan och 60 m med mottagare, grön, IP54, 4×AA, 5 h, låsfunktion för manuell användning, 1/4" och 5/8". Tillverkarens datablad inte läst. Första reserv om en grön kors nära 1 500 kr behövs.
  - Leica Lino L2-1 (CQ12201, 4 779 kr på produktsidan, EAN 7640110697528). Den är modellen som Leicas bifogade bruksanvisning faktiskt gäller (se modell 11). Reserv om L2s-1 inte kan beläggas.
  - Stanley Cubix Set grön (1 248 kr) och 360 Set grön (2 263 kr): paket med stativ och väska. Gör Det Själv gav Stanleys SLL360 kvalitet 3/10 (steg 3).
  - DeWalt DCE088NG18 (3 650 kr, 18V utan batteri, EAN 5054905296377). Butiken anger bara 0–30 m, IP54, grön, klass 2. Två DeWalt finns redan.
  - Bosch GTL 3 (2 115 kr, "Kaklingslaser"): annan typ, inte kontrollerad.
- **Under 1 200 kr** men med i oberoende test: Ryobi RBCLLG1 (1 095 kr), Bosch Quigo Green (858 kr), Stanley Cubix (670 och 942 kr).

---

### 1. Bosch GLL 2-10 Professional (röd, två linjer)

- PM: art.nr CQ17000, **1 250 kr**, inget ordinarie pris visat, i lager "Skickas inom 24 timmar!".
- URL (ren laser, enda varianten): https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar/bosch-gll-2-10-korslaser-cq17000 → 200, ingen omdirigering.
- EAN 3165140850247 (PM, fältet `Gtin` i produktdata). Boschs artikelnummer 0 601 063 L00.

| Nyckel | Värde | Källa |
|---|---|---|
| rackvidd_m | 10 m. "Arbetsområdet kan reduceras vid ogynnsamma omgivningsvillkor (t.ex. direkt solljus)." Ingen mottagare nämns | Bosch bruksanvisning 1 609 92A 8M3 (17.04.2023), svensk del s. 125, PM-bilaga id AssetDocument71570696; https://www.bosch-professional.com/se/sv/products/gll-2-10-0601063L00 |
| noggrannhet_mm_per_10m | ±3 (Bosch: ±0,3 mm/m, vid 20–25 °C och "normala till gynnsamma omgivningsvillkor") | bruksanvisningen |
| linjer | 2: horisontell och vertikal. Röd | bruksanvisningen |
| sjalvnivellering_grader | ±4°, < 4 s | bruksanvisningen |
| laserklass | 2; < 1 mW, 630–650 nm | bruksanvisningen |
| batteri | 3 × 1,5 V LR6 (AA). Drifttid krysslinje 9 h, linje 17 h | bruksanvisningen |
| IP | IP54 | bruksanvisningen |
| Stativgänga | 1/4" och 5/8" | bruksanvisningen |
| Pendellås / lutning | "Alla driftsätt kan väljas med nivelleringsautomatik eller pendelarretering." Med pendelarretering går den att ställa lutande. Pendeln låses när den stängs av | bruksanvisningen |
| Mottagare / puls | Inte angivet | bruksanvisningen |
| Vikt | 0,49 kg (EPTA 01:2014) | bruksanvisningen |
| Ingår | 3 × AA, förvaringsväska | PM; Bosch-sidan: batterier och skyddsväska |
| Garanti | "Gratis förlängning … från 1 till 3 år" via Bosch PRO360 | PM:s text, inte läst hos Bosch |

- **Källorna säger olika:** PM anger drifttid "6 h vid korslaser- och punktanvändning … 22 h vid punktanvändning". Det är GCL 2-15:s tabell (GLL 2-10 har inga punkter). Boschs bruksanvisning (9 h och 17 h) väger tyngst.

### 2. Ryobi RBCLLG2 (grön, kors med referensmarkering)

- PM: art.nr 4048990, **1 495 kr**, i lager "Skickas inom 24 timmar!".
- URL: https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar/ryobi-rbcllg2-korslaser-gron-med-batterier-4048990 → 200, ingen omdirigering. Enda varianten.
- EAN 4892210203779 (PM).

| Nyckel | Värde | Källa |
|---|---|---|
| rackvidd_m | 15 m. Mottagare inte nämnd | Ryobi bruksanvisning, "Product specifications", PM-bilaga id 74933631 |
| noggrannhet_mm_per_10m | ±5 (Ryobi: ±0,5 mm/m) | bruksanvisningen |
| linjer | "Cross line with marker". Grön, 520 nm ± 10 nm | bruksanvisningen |
| sjalvnivellering_grader | ±3°, 2–5 s | bruksanvisningen |
| laserklass | 2, < 1 mW | bruksanvisningen |
| batteri | 2 × AA LR6 alkaliska, 5 h | bruksanvisningen |
| IP | Inte angivet | bruksanvisningen |
| Stativgänga | 1/4" | bruksanvisningen |
| Pendellås / lutning / puls | Inte angivet (delförteckningen: strömbrytare, LED, batterilucka, gänga, laserplatta) | bruksanvisningen |
| Vikt | 0,4 kg | PM (butik) |
| Mått | 69 × 63 × 72 mm | bruksanvisningen |
| Ingår | 2 × AA, 1 referensplatta | PM |
| Garanti | 2 år, +1 år vid registrering inom 30 dagar, "inom ramen för en icke-professionell användning" | PM:s återgivning av Ryobis villkor |

### 3. Ryobi RB360GLL (grön, 360°)

- PM: art.nr 4048997, **2 149 kr**, i lager "Skickas inom 24 timmar!".
- URL: https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar/ryobi-rb360gll-linjelaser-gron-med-batterier-4048997 → 200, ingen omdirigering. Röda RB360RLL (1 795 kr) slut.
- EAN 4892210201874 (PM).

| Nyckel | Värde | Källa |
|---|---|---|
| rackvidd_m | 25 m (röda RB360RLL: 20 m). Mottagare inte nämnd | Ryobi bruksanvisning, "Product specifications", PM-bilaga id 74933628 |
| noggrannhet_mm_per_10m | ±5 (±0,5 mm/m) | bruksanvisningen |
| linjer | "Plane and vertical line": 360° horisontell och vertikal. Grön, 520 nm ± 10 nm | bruksanvisningen |
| sjalvnivellering_grader | ±4°, 2–4 s | bruksanvisningen |
| laserklass | 2, < 1 mW; divergens 1,5 mrad | bruksanvisningen |
| batteri | 4 × AA LR6 alkaliska, 5 h (röda: 20 h) | bruksanvisningen |
| IP | Inte angivet | bruksanvisningen |
| Stativgänga | 1/4" | bruksanvisningen |
| Pendellås / lutning / puls | Inte angivet | bruksanvisningen |
| Vikt | Saknas (letat i bruksanvisningen och hos PM) | – |
| Mått | 86 × 70 × 110 mm | bruksanvisningen |
| Ingår | 4 × AA (PM); bruksanvisningen listar också "Storage pouch" | PM; bruksanvisningen |
| Garanti | Som RBCLLG2 | PM |

- PM:s långbeskrivning på RB360GLL-sidan börjar "Ryobi RB360RLL är en 360˚ grön Krysslaser": fel modellnamn i butikstexten.

### 4. DeWalt DW088K (röd, två linjer)

- PM: art.nr CQ11810, **2 171 kr**, i lager "Skickas inom 24 timmar!".
- URL: https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar/dewalt-dw088k-korslaser-cq11810 → 200, ingen omdirigering. Enda varianten.
- EAN 5035048338575 (PM).

| Nyckel | Värde | Källa |
|---|---|---|
| rackvidd_m | "Synbarhet inomhus 10 m". Med mottagare: "Fungerar tillsammans med lasermottagaren DEWALT DE0892 upp till 50 m avstånd (köpes separat)" | DeWalt produktblad DW088K (odaterat), PM-bilaga id 28826262; mottagaruppgiften finns bara i PM:s text |
| noggrannhet_mm_per_10m | ±3 (DeWalt: "+/-0.3 mm/m") | produktbladet |
| linjer | 2, vertikal/horisontell. Röd | produktbladet; färg PM |
| sjalvnivellering_grader | 4° | produktbladet |
| laserklass | "2, <1mW". Våglängd saknas | produktbladet |
| batteri | 4,5 V, 3 × AA; "för över 40 timmars användningstid" | produktbladet |
| IP | Saknas. Produktbladet nämner "Skyddande kåpa och tjockt glas" | produktbladet |
| Stativgänga | 1/4" (produktbladet skriver "1.4"") | produktbladet; PM |
| Pendellås / lutning / puls | Inte angivet i produktbladet | – |
| Vikt | 0,46 kg; 112 × 61 × 113 mm | PM (butik) |
| Ingår | 3 AA-batterier, vägghållare, förvaringslåda | produktbladet |
| Garanti | "1 års garanti", "1 års fri förebyggande service", "30 dagars nöjd-kund-garanti". PM: förlängning till 3 år vid registrering inom 4 veckor | produktbladet; PM |

- dewalt.se/sv-se/produkt/dw088k-xj/krysslinjelaser gav 404; ingen annan DeWalt-sida för DW088K läst.

### 5. Bosch AdvancedLevel 360 (grön, 360°, Bosch DIY)

- PM: art.nr 4054173, **2 252 kr**, i lager "Skickas inom 24 timmar!".
- URL (ren laser): https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar/bosch-diy-advancedlevel-360-linjelaser-gron-laser-4054173 → 200, ingen omdirigering. Med stativ TT 150: `.../bosch-diy-advancedlevel-360-linjelaser-med-stativ-4054175`, 2 520 kr, i lager, EAN 4053423245042.
- EAN 4053423245165 (PM). Bosch-sidan listar varianterna 0603663B06, B07, BZ0 och BZ1; vilken PM säljer framgår inte.

| Nyckel | Värde | Källa |
|---|---|---|
| rackvidd_m | "Arbetsområde (diameter) upp till ca." 24 m; "kan reduceras vid ogynnsamma omgivningsvillkor (t.ex. direkt solljus)". Ingen mottagare nämns | Bosch bruksanvisning 1 609 92A 855 (20.09.2022), svensk del s. 77, PM-bilaga id AssetDocument76763255; https://www.bosch-diy.com/se/sv/p/advancedlevel-360-0603663b06 |
| noggrannhet_mm_per_10m | Linjer ±4 (±0,4 mm/m); lodpunkt ±10 (±1,0 mm/m) | bruksanvisningen |
| linjer | 360° horisontell, 2 vertikala i 90°, lodpunkt ned (PM: "nedre lodpunkt"). Linjerna gröna, lodpunkten röd. De vertikala linjernas öppningsvinkel 120° | bruksanvisningen; PM |
| sjalvnivellering_grader | ±4°, 4 s | bruksanvisningen |
| laserklass | 2; linjer < 10 mW, 500–540 nm (C = 10); lodpunkt < 1 mW, 630–650 nm | bruksanvisningen |
| batteri | 4 × 1,5 V LR6 (AA); "Drifttid (vid krysslinjedrift) minst 4 h" | bruksanvisningen |
| IP | Saknas (inte i bruksanvisningens tabell, inte på Bosch-sidan) | – |
| Stativgänga | 1/4" | bruksanvisningen |
| Lutning | "Arbete med lutningsfunktion": knapp, nivelleringsautomatiken av, "Laserstrålarna nivelleras inte längre och löper inte längre parallellt" | bruksanvisningen s. 79–80 |
| Mottagare / puls | Inte angivet | bruksanvisningen |
| Vikt | 0,52 kg; 117 × 80 × 126 mm | bruksanvisningen |
| Ingår | Mjuk förvaringsväska, 4 × AA, bruksanvisning | PM; Bosch-sidan detsamma, stativ i set-varianterna |
| Garanti | Saknas (inte läst hos Bosch DIY) | – |

- Klass 2 anges samtidigt som lasertypen "< 10 mW" (samma för GCL 2-15 G, GCL 2-50 G och GLL 3-80). Bosch förklarar inte sambandet i det lästa. Använd klassen som säkerhetsuppgift, inte mW-talet.

### 6. DeWalt DW088CG (grön, två linjer)

- PM: art.nr CQ11809, **2 484 kr**, i lager "Skickas inom 24 timmar!".
- URL: https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar/dewalt-dw088cg-korslaser-cq11809 → 200, ingen omdirigering. Enda varianten.
- EAN 5035048669600 (PM).

| Nyckel | Värde | Källa |
|---|---|---|
| rackvidd_m | 15 m; 50 m med detektor | https://www.dewalt.se/sv-se/produkt/dw088cg-xj/krysslinjelaser-gron (**sammanfattning**) |
| noggrannhet_mm_per_10m | ±3 ("+/-3mm per 10m") | DeWalt UK datablad DW088CG-XJ (dewalt.co.uk, läst som https://www.farnell.com/datasheets/3148476.pdf); dewalt.se (sammanfattning) |
| linjer | "horizontal, vertical and cross line". Grön | DeWalt UK datablad |
| sjalvnivellering_grader | "Self-levelling up to 4 degrees" | DeWalt UK datablad |
| laserklass | 2 | PM (butik). Tillverkarens klassuppgift inte läst i EU-källa; US-bruksanvisningen enligt **utdrag**: 510–530 nm, klass 2 |
| batteri | 3 × AA alkaliska; "3 x AA batteries for 16 hours runtime" | DeWalt UK datablad |
| IP | IP54 ("Overmoulded housing (IP 54)") | DeWalt UK datablad; dewalt.se |
| Stativgänga | 1/4" | DeWalt UK datablad |
| Puls | "Pulse mode allows use with DE0892G detector to increase the range to 50m" | DeWalt UK datablad |
| Pendellås / lutning | Inte angivet i det lästa. PM:s tekniska fält "Låsfunktion" = false | PM (butik) |
| Vikt | Saknas (dewalt.se och PM) | – |
| Ingår | 3 × AA, "Wall mount bracket", "Heavy duty carrying case" | DeWalt UK datablad |
| Garanti | 1 år; 3 år vid registrering | dewalt.se (sammanfattning) |

- **Källorna säger olika om räckvidd utan detektor:** dewalt.se 15 m, DeWalt UK-databladet "Visibility range: 20m", PM 15 m. dewalt.se (svensk marknad) väger tyngst. Ett sökutdrag från DeWalt Asia anger 30 m; inte läst.

### 7. Milwaukee CLL-C (grön, två linjer)

- PM: art.nr 3139094, **2 543 kr, ordinarie 3 391 kr** (butikens `ListPrice`, rabatt 25 %), i lager "Skickas inom 24 timmar!".
- URL: https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar/milwaukee-cll-c-krysslaser-med-batteri-3139094 → 200, ingen omdirigering. "med batteri" = 4 AA. Laddbara L4 CLL-301C (4 341 kr) slut.
- EAN 4058546360351 (PM). Milwaukees artikelnummer 4933478753 enligt **utdrag** (brittiska återförsäljare). milwaukeetool.se/sv-se/cll-c/ omdirigeras till se.milwaukeetool.eu/sv-se/cll-c/, som gav 404.

| Nyckel | Värde | Källa |
|---|---|---|
| rackvidd_m | 30 m, "med detektor 50 m" | Milwaukee bruksanvisning "CLL", svensk del "Tekniska data", PM-bilaga id 72134069 |
| noggrannhet_mm_per_10m | ±3 ("+/- 3 mm / 10 m") | bruksanvisningen |
| linjer | 2 gröna: horisontell, vertikal, kors. Öppningsvinkel 120°; linjebredd < 9,5 mm på 30 m | bruksanvisningen |
| sjalvnivellering_grader | ±4°, < 3 s | bruksanvisningen |
| laserklass | 2 (EN 60825-1:2014); 510–530 nm; "Maximal effekt 7 mW"; "Diodtyp 20 mW" | bruksanvisningen |
| batteri | 4 × 1,5 V LR6 AA alkaliska; drifttid 8 timmar | bruksanvisningen |
| IP | IP54 | bruksanvisningen |
| Stativgänga | 1/4" | bruksanvisningen |
| Lägen | "Av / låst", "På / manuellt läge", "på / självutjämningsläge". Manuellt läge: självnivelleringen av, linjer i valfri vinkel | bruksanvisningen |
| Puls | Pulstid 50 µs, frekvens 10 kHz; "Lång tryckning: detektionsläge"; detektorer Milwaukee LLD50, LRD100 | bruksanvisningen |
| Vikt | 740 g inkl. batterier | bruksanvisningen |
| Ingår | 4 × AA, takfäste, väska | PM |
| Garanti | Saknas (inte läst) | – |

- Bruksanvisningen heter "CLL", utan kitbokstav. Att CLL-C är CLL i väska bygger på PM:s och återförsäljares benämning, inte på Milwaukee.

### 8. Bosch GCL 2-15 G Professional (grön linje, röda lodpunkter)

- PM: art.nr CQ17008, **2 619 kr**, i lager "Skickas inom 24 timmar!".
- URL: https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar/bosch-gcl-2-15-g-korslaser-cq17008 → 200, ingen omdirigering. Röda GCL 2-15: `.../bosch-gcl-2-15-korslaser-solo-cq17007-1` (1 712 kr, EAN 3165140836371) och `.../bosch-gcl-2-15-korslaser-med-hard-plastvaska-cq17007-3` (2 367 kr, EAN 3165140837224), båda i lager.
- EAN 3165140869553 (PM). Boschs artikelnummer 0 601 066 J00.

| Nyckel | Värde | Källa |
|---|---|---|
| rackvidd_m | Laserlinje 15 m; laserpunkt uppåt 10 m, nedåt 10 m. Ingen mottagare i bruksanvisningen | Bosch bruksanvisning 1 609 92A 8E9 (20.03.2023), svensk del s. 75–76, PM-bilaga id AssetDocument80038516; https://www.bosch-professional.com/se/sv/products/gcl-2-15-g-0601066J00 |
| noggrannhet_mm_per_10m | Linjer ±3 (±0,3 mm/m); lodpunkter ±7 (±0,7 mm/m) | bruksanvisningen |
| linjer | Horisontell och vertikal (gröna) + två lodpunkter upp/ned (röda) | bruksanvisningen; Bosch-sidan |
| sjalvnivellering_grader | ±4°, < 4 s | bruksanvisningen |
| laserklass | 2; linje < 10 mW, 500–540 nm (C = 10); punkt < 1 mW, 630–650 nm | bruksanvisningen |
| batteri | 3 × AA. Drifttid: krysslinje + punkt 6 h, krysslinje 8 h, linje + punkt 10 h, linje 12 h, punkt 22 h (röda GCL 2-15: 6/8/12/16/22 h) | bruksanvisningen |
| IP | IP54 | Bosch-sidan |
| Stativgänga | 1/4", 5/8" | bruksanvisningen |
| Pendellås / lutning | Pendelarretering för arbete på lutande underlag; "Laserstrålarna nivelleras inte" | bruksanvisningen |
| Mottagare / puls | Inte angivet i bruksanvisningen | – |
| Vikt | 0,49 kg | bruksanvisningen |
| Ingår | PM: 3 × AA, lasermåltavla, 1/2 L-BOXX-inredning, RM 1 multifunktionshållare. Bosch-sidan: takklämma, 3 × AA, RM 1, måltavla, väska | PM; Bosch-sidan |
| Garanti | Som GLL 2-10 (PRO360, PM:s text) | PM |

- **Källorna säger olika:** PM:s tekniska data anger "Laserdiod 630 – 650 nm" för GCL 2-15 G; Bosch anger 500–540 nm för linjerna, 630–650 nm för punkterna. Bosch väger tyngst. Vad som ingår skiljer sig mellan PM och Bosch; PM:s lista gäller det PM levererar.
- WebFetch-sammanfattningen av Bosch-sidan angav "Working Range with Receiver 10 m". Bruksanvisningen har ingen mottagare, och 10 m är punkternas räckvidd. Använd inte mottagarsiffran.

### 9. Makita SK105DZ (röd, två linjer, 12V max CXT)

- PM: art.nr 2320023, **2 781 kr, ordinarie 3 091 kr**, i lager "Skickas inom 24 timmar!". **Utan batteri och laddare.**
- URL: https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar/makita-sk105dz-korslaser-rod-utan-batteri-och-laddare-2320023 → 200, ingen omdirigering. Gröna SK105GDZ (5 205 kr) slut. Ingen variant med batteri i kategorin.
- EAN 088381851893 (PM).

| Nyckel | Värde | Källa |
|---|---|---|
| rackvidd_m | 25 m* (gröna SK105GD 35 m); med mottagare 80 m. "* beroende på ljusförhållandena" | Makita bruksanvisning SK105D/SK105GD, "Tekniska data" s. 3, PM-bilaga id 28819402 |
| noggrannhet_mm_per_10m | ±3 (Makita: "±0.3 mm/m = ±3.0 mm @ 10m"); linjenoggrannhet ±0,3 mm/m | bruksanvisningen |
| linjer | Horisontell > 180°, vertikal > 160°, var för sig eller tillsammans. Röd | bruksanvisningen |
| sjalvnivellering_grader | ±4°, < 3 s | bruksanvisningen |
| laserklass | 2 (IEC 60825-1); 635 ± 5 nm | bruksanvisningen |
| batteri | Makita CXT 10,8–12 V max: BL1015/1016 15 h, BL1020B/1021B 20 h, BL1040B/1041B 40 h; även USB-adapter 5 V. Ingår inte | bruksanvisningen; PM |
| IP | IP54 | https://www.makita.se/product/sk105dz.html (**sammanfattning**) |
| Stativgänga | 1/4" (+ 5/8" med adapter) | bruksanvisningen |
| Pendellås / lutning | "Vrid på nivelleringslåset för att transportera eller luta instrumentet utöver självnivelleringsområdet." Låst: lasern blinkar var 5:e sekund | bruksanvisningen s. 4 |
| Puls | "Pulseffekt för mottagare: Ja, aut."; rekommenderad mottagare Makita LDX1 | bruksanvisningen |
| Vikt | 0,46 kg netto; 0,67–0,84 kg med batteri (EPTA 01/2014) | bruksanvisningen |
| Ingår | "Levereras utan batteri och laddare". Väska enligt **utdrag** från andra butiker (duab.se, ahlsell.se); PM anger det inte | PM |
| Garanti | Saknas (inte läst) | – |

- **Källorna säger olika om drifttid:** PM "20 timmar med ett 4,0 Ah batteri, 10 timmar med 2,0 Ah". Makitas bruksanvisning anger 40 h och 20 h för röda SK105D; PM:s tal är den gröna SK105GD:s. Makita väger tyngst.
- Den som saknar Makita CXT måste köpa batteri och laddare. Pris på dem: **inte hämtat.**

### 10. Bosch GCL 2-50 G Professional (grön linje, gröna lodpunkter)

- PM: art.nr **2930433**, **2 863 kr**, i lager "Skickas inom 24 timmar!". Butikens rubrik: "GCL 2-50/RM10 Kombilaser grön, med batterier".
- URL (billigaste varianten, laser med RM 10): https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar/bosch-gcl-2-50rm10-kombilaser-gron-med-batterier-2930433 → 200, ingen omdirigering.
- Övriga varianter: `.../bosch-gcl-2-50-g-kombilaser-gron-med-batterier-och-roterande-faste-2930436` (3 375 kr, i lager, EAN 4059952511092, PM listar "Byggstativ BT 150"); `.../bosch-gcl-2-50rm10-kombilaser-gron-med-vaska-och-batterier-2930437` (3 535 kr, slut, EAN 4059952511108, med takklämma DK 10).
- EAN 4059952511085 (PM). Vilket Bosch-nummer 2930433 motsvarar framgår inte. Bosch-sidan för 0 601 066 M00 listar väska, 4 × AA, måltavla och RM 10.

| Nyckel | Värde | Källa |
|---|---|---|
| rackvidd_m | Standardlinjer 15 m; med lasermottagare 5–50 m; laserpunkter 10 m. "Kan reduceras vid ogynnsamma omgivningsvillkor (t.ex. direkt solljus)" | Bosch bruksanvisning 1 609 92A 5EN (20.03.2020), svensk del s. 67–68, PM-bilaga id AssetDocument30281838; https://www.bosch-professional.com/se/sv/products/gcl-2-50-g-0601066M00 |
| noggrannhet_mm_per_10m | Linjer ±3 (±0,3 mm/m); punkter ±7 (±0,7 mm/m) | bruksanvisningen |
| linjer | 2 linjer (H+V) + 2 lodpunkter; linjer och punkter gröna | bruksanvisningen; Bosch-sidan |
| sjalvnivellering_grader | ±4°, < 4 s | bruksanvisningen |
| laserklass | 2; linjer 500–540 nm, < 10 mW; punkter 500–540 nm, < 1 mW | bruksanvisningen |
| batteri | 4 × 1,5 V LR6 (AA). Drifttid **saknas** (inte i bruksanvisningens tabell, inte på Bosch-sidan, inte hos PM) | – |
| IP | IP 64 | bruksanvisningen |
| Stativgänga | 1/4" | bruksanvisningen |
| Lutning | "Arbete med lutningsfunktion": på lutande yta blinkar linjerna och "nivelleras inte längre" | bruksanvisningen s. 68 |
| Mottagare | Kompatibel lasermottagare LR 7 | bruksanvisningen |
| Vikt | 0,58 kg | bruksanvisningen |
| Ingår (2930433) | RM 10 roterande fäste, lasermåltavla, 4 × AA, väska | PM |
| Garanti | Som GLL 2-10 (PRO360, PM:s text) | PM |

### 11. Leica Lino L2s-1 (röd, två linjer)

- PM: art.nr CQ12200, **3 570 kr**, i lager "Skickas inom 24 timmar!".
- URL: https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar/leica-lino-l2s-1-korslaser-cq12200 → 200, ingen omdirigering.
- Dubblett: `.../leica-848435-linjelaser-inkl-magnetadaptor-4012358` (2 312 kr, slut, samma GTIN).
- EAN 7640110697511 (PM). Samma GTIN för Leica 848435 hos Acme Tools enligt **utdrag**.

| Nyckel | Värde | Källa |
|---|---|---|
| rackvidd_m | "upp till 25 meter", enligt utdrag "depending on lighting conditions". Med mottagare: **saknas** | PM; **utdrag** (surveygear.com.au, capitalsurveyingsupplies.com) |
| noggrannhet_mm_per_10m | ±2 (±0,2 mm/m); linjenoggrannhet ±0,3 mm/m | PM (4012358-sidan); **utdrag**. Tillverkarens datablad inte läst |
| linjer | 2: horisontell > 180°, vertikal "hela vägen uppåt". Röd | PM |
| sjalvnivellering_grader | ±4° | PM; **utdrag** |
| laserklass | Klass 2. Våglängd saknas | PM (4012358) |
| batteri | Alkaliska, 3 st ingår (PM 4012358); "Lång batteritid upp till 13 tim." (PM). Li-ion upp till 44 h som tillbehör enligt **utdrag** | PM; utdrag |
| IP | IP54 | PM (4012358) |
| Stativgänga | 1/4"; 5/8" via medföljande väggfäste | PM |
| Pendellås / lutning | "Låsfunktion … Laserlinjen kan då projiceras i valfritt läge, oavsett lutning"; "Transportlåsning av pendeln" | PM |
| Mottagare | Leica RGR 200 nämns | PM |
| Vikt | Saknas | – |
| Ingår | 4012358-sidan: L2s-1, Twist 250 magnetisk adapter, måltavla, mjuk förvaringsväska, 3 batterier. CQ12200-sidan listar inget | PM |
| Garanti | Saknas för L2s. Leicas bruksanvisning för Lino L2/L2G: "two year warranty", +1 år vid registrering inom åtta veckor | L2/L2G-bruksanvisningen (annan modell) |

- **Alla prestandavärden för L2s-1 kommer från butik eller utdrag.** shop.leica-geosystems.com svarade 403 (produktsidan för L2s). PDF:en som PM bifogar som "Lino-L2S-1-Manual" (id 28826278) är bruksanvisningen för **Lino L2/L2G**, och byte för byte samma fil som PM bifogar till Lino L2-1 (id 28826279). Den gäller inte L2s-1 och ska inte användas för den.
- Om en Leica ska stå på sidan: antingen hämtar någon Leicas datablad för L2s, eller så byts den mot **Lino L2-1** (CQ12201, 4 779 kr, i lager, EAN 7640110697528, 200 utan omdirigering). För L2 finns tillverkarens tabell: räckvidd 25 m* (L2G 35 m), 80 m med mottagare, "* depending on lighting conditions"; ±0,2 mm/m = ±2,0 mm @ 10 m; linjenoggrannhet ±0,3 mm/m; ±4°, < 3 s; 635 ± 5 nm, klass 2; IP54; Li-ion 5 200 mAh eller 3 × AA; drifttid Li-ion 26 h (två strålar), alkaliska 8 h (två strålar); 530/500 g; 1/4" (+ 5/8" med adapter); pulseffekt för mottagare "Yes, auto"; pendellås. Källa: Leica bruksanvisning Lino L2/L2G, "Technical data" s. 3, PM-bilaga id 28826279. Vilket batteri som ingår i L2-1: inte läst.

### 12. Bosch GLL 3-80 Professional (röd, 3 × 360°)

- PM: art.nr CQ17021, **4 501 kr**, i lager "Skickas inom 24 timmar!".
- URL: https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar/bosch-gll-3-80-korslaser-med-alkaliska-batterier-cq17021 → 200, ingen omdirigering. Enda varianten i intervallet.
- EAN 3165140888356 (PM). Boschs artikelnummer 0 601 063 S00.

| Nyckel | Värde | Källa |
|---|---|---|
| rackvidd_m | Standard 30 m; i mottagarläge 25 m; med lasermottagare 5–120 m. "Kan reduceras vid ogynnsamma omgivningsvillkor" (fotnot A) | Bosch bruksanvisning 1 609 92A 8AT (28.10.2022), svensk del s. 55–56, PM-bilaga id AssetDocument70318723; https://www.bosch-professional.com/se/sv/products/gll-3-80-0601063S00 |
| noggrannhet_mm_per_10m | ±3 (±0,3 mm/m) | bruksanvisningen 2022; Bosch-sidan |
| linjer | 3 × 360°: en horisontell, två vertikala. Lägen H, V, 2 V, H + 2 V. Röd | bruksanvisningen |
| sjalvnivellering_grader | ±4°, < 4 s | bruksanvisningen |
| laserklass | 2; < 10 mW, 630–650 nm (C = 10) | bruksanvisningen |
| batteri | 4 × 1,5 V LR6 (AA); "Drifttid, max. 4 h i 3-linjeläge" | Bosch-sidan |
| IP | IP54 | Bosch-sidan |
| Stativgänga | 1/4", 5/8" | Bosch-sidan |
| Pendellås / lutning | "Alla driftsätt kan väljas med nivelleringsautomatik eller pendelarretering" | bruksanvisningen s. 56 |
| Puls | Mottagarläge: "laserlinjerna blinkar med mycket hög frekvens". "För det mänskliga ögat är laserlinjernas synlighet vid tillslaget mottagarläge reducerat." Mottagare LR 6 och LR 7 | bruksanvisningen; Bosch-sidan |
| Vikt | ca 0,82 kg | Bosch-sidan |
| Ingår | 4 × AA, förvaringsväska, lasermåltavla, väska | PM; Bosch-sidan |
| Garanti | Som GLL 2-10 (PRO360, PM:s text) | PM |

- **Källorna säger olika:** Boschs produktblad 24.10.2017 (PM-bilaga id 28826361) anger ±0,2 mm/m, och i fördelarna "Arbetsområde på 80 m med mottagare" men 120 m (diameter) i tekniska data. Bruksanvisningen 2022 och Bosch-sidan 2026 anger ±0,3 mm/m och 120 m; de väger tyngst. PM:s text blandar (±0,3 i tekniska data, "80 meter" i säljpunkterna).

---

## Steg 3. Oberoende källor och kända svagheter

### Tester som gäller en modell på kortlistan

**Ryobi RB360GLL.** Gör Det Själv, "Cirkellaser test (2026)", Martin Mogensen, 2026-03-12, https://gds.se/verktyg/matinstrument/test-av-cirkellasrar (**sammanfattning**).
- Metod (GDS, ordagrant): "Vi placerar en cirkellaser i mitten av ett rum och markerar en punkt på varje vägg efter lasermarkeringen." Avvikelse räknas i mm/m. Synlighet utomhus en molnig dag, 5 m, på vit panel, rött tegel, furu och betong. Räckvidd inne upp till 15 m, ute upp till 30 m.
- RB360GLL: pris 2 149 kr, totalbetyg 7,6. Precision 10/10, **uppmätt avvikelse 0 mm/m**. Synlighet 9, räckvidd 9, funktioner 5, användning 5, kvalitet 5. GDS om båda Ryobi: perfekt precision men begränsade funktioner och medelmåttig kvalitet (sammanfattning, inte ordagrant).
- I samma test: Ryobi RB360RLL (röd) 7,2, 0 mm/m. Bosch UniversalLevel 360 8,0, 0,2 mm/m. Stanley SLL360 röd och grön 7,4, 0,3 mm/m, kvalitet 3/10. Laserliner Smartline G360 9,0 (vinnare).

**DeWalt DW088CG.** Tool Box Buzz, "Dewalt DW088CG Self-Leveling Cross-Line GREEN Laser", Rob Robillard, 2017-03-03 (ändrad 2017-07-18), https://www.toolboxbuzz.com/measuring-layout/13976/ .
- Ingen mätning. Jämförelse i dagsljus mot testarens röda Bosch på 15–25 fot (egen räkning: 4,6–7,6 m, 1 fot = 0,3048 m): "I didn't struggle at all to see the Dewalt green laser at that distance, in daylight." "As the light faded, the green laser had less of an edge."
- Gäller den amerikanska versionen. Texten anger "three AAA batteries" men också "Powered by AA batteries": motsägelse i källan.
- En läsarkommentar på sidan (2021) påstår att pendellås saknas. Kommentar, inte källa; PM:s fält "Låsfunktion" = false pekar åt samma håll. **Ej verifierat hos DeWalt.**

**Bosch GLL 3-80.** Tools in Action, Eric Jopp, 2012-05-31 (https://toolsinaction.com/bosch-laser-gll3-80-review/) och 2013-06-27 (https://toolsinaction.com/bosch-gll3-80-3-plane-laser-review/) (**sammanfattning**).
- Ingen mätning; användning i källarbygge, kakling och lodöverföring. Kritik: begränsad räckvidd utomhus utan mottagare, mjuk väska. Amerikansk version, 13 år gammal.

### Tester av närliggande modeller (inte samma produkt)

- Gör Det Själv, "Krysslaser test (2026)", Martin Mogensen, 2026-03-12, https://gds.se/verktyg/matinstrument/krysslaser-test (**sammanfattning**): elva krysslasrar 599–1 270 kr. Ryobi RBCLLG1 (syskon till RBCLLG2) 1 095 kr, 8,0. Bosch Quigo Green 7,4. Einhell TC-LL 2 G "största precisionsavvikelsen (1 mm/m)". Vinnare Laserliner SmartCross GX 9,2.
- Gör Det Själv, "Vi testar 8 krysslasrar för hantverkare", 2026-03-12, https://gds.se/verktyg/matinstrument/test-av-krysslasrar-for-hantverkare (**sammanfattning**): Makita SK106D (röd, syskon till SK105) 7,6 med anmärkning om den röda linjens synlighet; DeWalt DCLE14201RB 7,0 med anmärkning om röd synlighet och stela knappar; Bosch GLL 20-22 G 7,4. Vinnare Stabila LAX 500 G 9,2.
- Gör Det Själv, "Test av 3x360 graders lasrar (2026)", 2026-03-12, https://gds.se/verktyg/matinstrument/test-av-3x360-graders-lasrar-for-hantverkare (**sammanfattning**): GLL 3-80 inte med. Makita SK700D 8,5 (finns hos PM, 5 205 kr).
- Samlingsartikel: Gör Det Själv, "Världens största test av laserverktyg", 2025-07-09, https://gds.se/verktyg/matinstrument/varldens-storsta-test-av-laserverktyg (36 lasrar i fyra tester).

### Inget oberoende hittat

Bosch GLL 2-10, Ryobi RBCLLG2, DeWalt DW088K, Bosch AdvancedLevel 360, Milwaukee CLL-C, Bosch GCL 2-15 G, Makita SK105DZ, Bosch GCL 2-50 G, Leica Lino L2s-1: **inget oberoende test med mätning hittat.**

- Sökträffar som inte räknas: testsieger.de, testbericht.de, vergleich.org, kreuzlinienlasertest.com, topratgeber24.de, laser-messgeraete.de, laserlevelhub.net, laserlevelguide.net, bestviewsreviews.com (sammanställningar eller jämförelsesajter), YouTube-klipp.
- akku-helden.de "Bosch GCL 2-15 im Test", 2023-01-02: 403, inte läst. Enligt **utdrag** stämde "±3 mm" med testarens mätvärden. Gäller röda GCL 2-15.
- Pro Tool Reviews testade DeWalt DW088LG (12V, annan modell) och Milwaukees amerikanska korslasrar (andra modeller). Inte använda.
- Selbst.de, Heimwerker-Praxis, Testfakta, Råd & Rön, Byggnadsarbetaren, Toolstop: ingen träff på modellerna i sökningen.

### Kända svagheter med källa

- **Återkallelser:** ingen hittad för någon av de tolv (en bred sökning; enda CPSC-träffen gäller elverktyg 2001 och inte lasrar). Tillverkarnas egna återkallelselistor inte genomgångna.
- **Räckvidd i sol:** Bosch (GLL 2-10, AdvancedLevel 360, GCL 2-50 G, GLL 3-80) skriver i fotnot att arbetsområdet "kan reduceras vid ogynnsamma omgivningsvillkor (t.ex. direkt solljus)". Makita och Leica L2 skriver "beroende på ljusförhållandena". Tillverkarens egen reservation, inte ett test.
- **Mottagarläge sänker synligheten** (GLL 3-80, Boschs bruksanvisning, citat ovan).
- **Röd linje i dagsljus:** GDS anmärker på synligheten hos röda Makita SK106D och DeWalt DCLE14201RB (syskonmodeller, inte kortlistans).
- **Ryobi:** GDS gav kvalitet 5/10 och funktioner 5/10 (RB360GLL).
- **Kalibreringsdrift, bräcklig pendellåsning, dålig mottagare:** inget med källa hittat för någon av de tolv.

---

## Steg 4. Regler och fakta som påverkar valet

### Strålsäkerhetsmyndigheten

Gällande föreskrift: **SSMFS 2014:4**, Strålsäkerhetsmyndighetens föreskrifter och allmänna råd om laser, starka laserpekare och intensivt pulserat ljus, "Konsoliderad version med ändringar införda t.o.m. SSMFS 2023:2". https://www.stralsakerhetsmyndigheten.se/contentassets/0fe4c6bd44c64bd6948a9d7c2b40653d/ssmfs-20144-stralsakerhetsmyndighetens-foreskrifter-och-allmanna-rad-om-laser-starka-laserpekare-och-intensivt-pulserat-ljus-konsoliderad-version.pdf (läst 2026-09-30).

- 2 §: "laser: teknisk anordning som kan alstra laserstrålning, eller produkt som innehåller en sådan anordning, och som inte är en stark laserpekare". Laserklass enligt "svensk standard SS-EN 60825-1, utgåva 4, 2007".
- 13 §: "För laser i laserklass 3B eller 4 krävs tillstånd till 1. användning som avser underhållning, konst eller reklam, 2. användning som ger bestrålning av allmän plats eller luftrummet, eller 3. innehav eller användning av laser som kan hållas i handen på allmän plats, inom skolområde där undervisning bedrivs eller i fordon på allmän plats."
- 14 §: "Bestämmelser om tillstånd för starka laserpekare finns i 5 kap. 9–13 §§ strålskyddsförordningen (2018:506)."
- 17 §: lasrar ska "vara utformade, klassificerade och märkta enligt svensk standard SS-EN 60825-1, utgåva 4, 2007, eller på annat sätt erbjuda en likvärdig säkerhet".

Strålskyddsförordningen (2018:506) 1 kap. 6 §, återgiven på https://www.stralsakerhetsmyndigheten.se/omraden/laser/tillstand-for-laser/ : "Med stark laserpekare avses en bärbar teknisk anordning som har de strålningsegenskaper som uppfyller kriterierna för laserklass 3R, 3B eller 4 enligt svensk standard SS EN 60825-1, utgåva 4, 2007." Förordningstexten är inte läst direkt hos riksdagen.

SSM, "Laserklasser", https://www.stralsakerhetsmyndigheten.se/omraden/laser/om-laser/laserklasser/ (läst 2026-09-30, ordagrant):
- "Laserklass 2: Enkla laserpekare, avståndsmätare, laservattenpass, streckkodsläsare. Till denna klass räknas lasrar som har uteffekt mindre än eller lika med 1 mW, men starkare än laserklass 1. Laserklass 2 gäller bara för synlig laser."
- "Om ögonen träffas av en laser i laserklass 2 blinkar vi oftast automatiskt, vilket förhindrar skador på näthinnan. Men en sådan laser kan ändå skada ögonen om den som träffas av lasern medvetet undviker att blinka när strålen når ögat."
- "Till lasrar i laserklass 3R räknas lasrar som har uteffekt mindre än eller lika med 5 mW, men starkare än lasrar i laserklass 2." "Starka laserpekare i denna laserklass är förbjudna om du inte har särskilt tillstånd från Strålsäkerhetsmyndigheten."
- 3B: "mindre än eller lika med 500 mW". "Det krävs också tillstånd för handhållna lasrar i denna laserklass som används eller innehas på allmän plats."
- "Alla lasrar ska vara märkta med laserklass. Dessutom ska alla lasrar, utom de i laserklass 1, ha en varningstext och varningssymbol. Varningarna ska vara tryckta med svart text på gul botten."

SSM, "Starka laserpekare kräver tillstånd", https://www.stralsakerhetsmyndigheten.se/omraden/laser/om-laser/starka-laserpekare-kraver-tillstand/ (ordagrant): "För att hantera starka laserpekare, det vill säga laserklass 3R, 3B eller 4, med en uteffekt över 1 milliwatt (mW), krävs tillstånd från Strålsäkerhetsmyndigheten. Du behöver tillstånd för att inneha, tillverka, köpa, ta emot, använda, sälja, ge bort, låna eller hyra ut eller föra in starka laserpekare till Sverige. Att bryta mot reglerna kan ge böter eller fängelse i högst två år." Samma sida: "Det är inte färgen på laserstrålen som avgör hur skadlig den är."

Vad det betyder för kortlistan (egen tolkning av texterna ovan, för faktagranskning): alla tolv är klass 2 enligt tillverkaren. Klass 2 ingår inte i tillståndskraven i 13 § eller i definitionen av stark laserpekare. En byggnadslaser på stativ är ingen "bärbar … laserpekare" i SSM:s mening, men SSM skriver inte uttryckligen om byggnadslasrar. Tillstånd för klass 3B/4 gäller bara användningarna i 13 §. **Ingen SSM-text om byggnadslasrar i klass 3R hittad.**

### Grön mot röd synlighet, vem säger vad

| Påstående | Vem | Var |
|---|---|---|
| "Gröna horisontella och vertikala laserlinjer för upp till fyra gånger bättre synlighet jämfört med röda linjer" | Bosch Professional (GCL 2-15 G) | https://www.bosch-professional.com/se/sv/products/gcl-2-15-g-0601066J00 (HTML läst 2026-09-30) |
| "Tack vare grön laserteknik är synligheten upp till 4x högre jämfört med röda laserlinjer, även vid starkt ljus." | Bosch DIY (AdvancedLevel 360) | https://www.bosch-diy.com/se/sv/p/advancedlevel-360-0603663b06 (HTML) |
| "Tydliga gröna laserlinjer och gröna lodpunkter ger ökad synlighet i ljus omgivning" (ingen faktor) | Bosch Professional (GCL 2-50 G) | Bosch-sidan för 0601066M00 (**sammanfattning**) |
| "Green Beam is 4x brighter than Red Beam" | DeWalt (DW088CG-XJ) | DeWalt UK datablad, https://www.farnell.com/datasheets/3148476.pdf |
| "Upp till 4x ljusstyrka vs. röd laserlinje" | PM:s text om Milwaukee CLL-C; Milwaukees egen sida gav 404 | PM |
| "Grön laserteknik förbättrar laserlinjernas synlighet upp till 4 gånger" | PM:s text om Ryobi RB360GLL och RBCLLG2 | PM |
| "Visibility: up to 4 times better than DIY line lasers" om **röda** Lino L2; "Green laser visibility - 6 times better than typical DIY product" om gröna L2P5G | Leica Geosystems, broschyr "Leica Lino" (2020) | https://shop.leica-geosystems.com/sites/default/files/2020-10/Lino_Infosheet_Brochure_2020.pdf |

- Ingen tillverkare anger hur "4 gånger" är mätt (ljusstyrka, luminans, ögats känslighet eller räckvidd). Leica använder samma faktor om en röd laser jämfört med DIY-lasrar, så faktorn är inte bara en färgfråga.
- Oberoende: GDS cirkellasertest 2026-03-12 gav röda och gröna Stanley SLL360 samma synlighetsbetyg (9/10) och skrev att röd eller grön markering inte gav någon praktisk skillnad (**sammanfattning**); Ryobi röd 8, grön 9. Tool Box Buzz 2017: grönt lättare att se i dagsljus på 4,6–7,6 m, liten skillnad i skymning (ingen mätning).
- Ögats känslighet per våglängd (CIE V(λ)) som fysikalisk grund: **inte hämtad.** Ska inte anges utan källa.
- Batteritid: tillverkarnas egna tal visar att grönt kostar drifttid. Ryobi RB360GLL 5 h mot RB360RLL 20 h; Makita SK105GD 20 h mot SK105D 40 h (BL1040B); Bosch GCL 2-15 G 12 h mot GCL 2-15 16 h i linjedrift. Källor under respektive modell.

---

## Det som saknas

Uppdaterat efter varv 2 (2026-09-30). Det som hittats är struket med hänvisning; detaljerna står under "Varv 2, 2026-09-30" sist i filen.

- **Leica Lino L2s-1:** ~~tillverkarens datablad~~ hittat i varv 2 (Leica "Product Data Sheet Leica Lino L2", 2201 V1.0: L2s = art. 848435 = Lino L2 med alkaliska batterier). ~~Räckvidd med mottagare, våglängd, vikt~~ hittat i varv 2. Kvar: **garanti för L2s** (bara L2/L2G-bruksanvisningens "two year warranty"); att PM:s "Lino L2S-1" är 848435 bygger på PM:s GTIN och utdrag, inte på Leica. Pris ändrat sedan varv 1 (3 570 → 3 825 kr).
- **Bosch GCL 2-50 G:** **drifttid saknas fortfarande** (letat i bruksanvisningen 1 609 92A 5EN 2020 och 1 609 92A 8M2 2023, Boschs produktdatablad 01.12.2020, Bosch-sidorna se/sv, de/de, gb/en, PM). ~~Vilket Bosch-artikelnummer PM:s 2930433 motsvarar~~ hittat i varv 2: 0 601 066 M00.
- **DeWalt DW088CG:** ~~vikt; laserklass och våglängd från DeWalt i EU; om pendellås finns~~ hittat i varv 2 (EU-bruksanvisningen). Kvar: **räckvidd utan detektor, tre olika DeWalt-uppgifter** (15, 20 och 30 m), och med detektor två (50 och 100 m). Drifttid 16 h bara i DeWalt UK-databladet och PM.
- **DeWalt DW088K:** IP-klass, våglängd, pendellås och pulsläge från DeWalt; mottagaruppgiften (DE0892, 50 m) finns bara i PM:s text. (Inte sökt i varv 2.)
- **Ryobi RB360GLL och RBCLLG2:** ~~vikt för RB360GLL~~ hittat i varv 2 (0,5 kg, Ryobi). Kvar: **IP-klass och pendellås/lutning**, anges varken i bruksanvisningen eller på se.ryobitools.eu.
- **Bosch AdvancedLevel 360:** ~~garanti, vilken Bosch-variant PM säljer~~ hittat i varv 2 (0603663BZ0; 2 år, 3 år vid registrering). Kvar: **IP-klass** (inte hos Bosch DIY, inte i bruksanvisningen; ett sökutdrag säger IP54 utan källa).
- **Milwaukee CLL-C:** ~~Milwaukees produktsida; garanti; bekräftelse på att "CLL"-manualen gäller CLL-C~~ hittat i varv 2. Kvar: om just CLL-C finns i Milwaukees lista över produkter med förlängningsbar garanti (registreringsformuläret kräver inloggning).
- **Makita SK105DZ:** garanti; vad som ingår (väska) från Makita eller PM; pris på CXT-batteri och laddare. (Inte sökt i varv 2.)
- **Garanti från tillverkaren:** ~~Milwaukee inte läst~~ läst i varv 2; Bosch DIY läst i varv 2; DeWalt från dewalt.se. Kvar: Bosch PRO360:s villkor läst bara via PM:s text och Bosch-sidans länk; Makita inte läst.
- **Oberoende tester:** ~~bara Ryobi RB360GLL~~ Milwaukee M12 3PL tillkommer i varv 2 (GDS 3x360-testet). Inget test med mätning för DeWalt DCE089D1G, Bosch GLL 12V-100-33 CG eller de övriga tio i kortlistan. Återkallelselistor hos tillverkarna inte genomgångna.
- **Grön mot röd:** ingen tillverkare anger mätmetod för "4 gånger"; CIE:s ljuskänslighetskurva inte hämtad.
- **SSM:** inget uttryckligt om byggnadslasrar i klass 3R eller om privatpersoners användning av klass 2-byggnadslaser. Strålskyddsförordningen 1 kap. 6 § inte läst direkt (bara SSM:s återgivning).
- **Geo-Fennel GEO-X1 (reserv):** ~~tillverkarens datablad inte läst~~ läst i varv 2 (Geo1X-GREEN). Kvar: **vikt**; räckvidd med mottagare 60 m (datablad, webb) mot 70 m (bruksanvisningen).
- **Nytt i varv 2, proffsklassen:**
  - **DeWalt DCE089D1G:** EU-bruksanvisning inte hittad. **Laserklass** 2 (PM) mot 2M (dewalt.de); **drifttid och vikt saknas** från DeWalt. Räckvidd med detektor 60 m (dewalt.se) mot 50 m (dewalt.co.uk, PM). Om en detektor ingår: dewalt.se säger "mottagare", dewalt.co.uk och dewalt.de listar en måltavla.
  - **Bosch GLL 12V-100-33 CG (PM 4070631):** PM listar ingen leveransomfattning; att EAN 4053423303292 = 0 601 065 401 (L-BOXX, GBA 2,0 Ah, laddare) bygger på **utdrag** från butiker, inte på Bosch.
  - **Milwaukee M12 3PL-401C:** Milwaukee anger inget EAN för -401C (bara PM: 4058546340353). Vikt bara med 6 Ah-batteri (1 607 g); med det medföljande 4 Ah-batteriet saknas.

### Sidor som inte gick att läsa

- shop.leica-geosystems.com/measurement-tools/lino/leica-lino-l2s: 403.
- acmetools.com (Leica 848435): 403.
- akku-helden.de (GCL 2-15-test): 403.
- se.milwaukeetool.eu/sv-se/cll-c/ (omdirigerad från milwaukeetool.se): 404.
- dewalt.se/sv-se/produkt/dw088k-xj/krysslinjelaser: 404 (gissad adress).
- dewalt.com NA-manual DW088/DW088CG (PDF): 404.
- bosch-diy.com/se/sv/p/advancedlevel-360-0603663b03: 404 (B06-sidan lästes i stället).
- Leicas broschyr-PDF gick inte att läsa med WebFetch; lästes med pdftotext.
- Varv 2: Boschs produktdatablad pro-gcl-2-50-g-sheet.pdf (länkat från bosch-professional.com/de/de och se/sv): 503.
- Varv 2: Milwaukees gissade adresser /sv-se/m12-3pl/ och /sv-se/cll/ (se.milwaukeetool.eu, milwaukeetool.eu, milwaukeetool.co.uk): 404. Sidorna hittades under andra adresser (se varv 2).
- Varv 2: DeWalt NA/EU quick start DW089/DCE089 på dewalt.com: 404; samma fil hos toolservicenet.com (SBD) är bildbaserad, ingen text gick att läsa.
- Varv 2: dewalt.no och dewalt.dk (gissade adresser för DCE089D1G): 404.
- Varv 2: ingen EU-bruksanvisning för DCE089D1G hittad hos DeWalt. ManualsLib-manualen NA532740 (nov. 2024) gäller DCE089G18, en annan generation, och är bara läst som sammanfattning.
- Varv 2: bosch-diy.com .../advancedlevel-360-0603663b07 och ...bz1: 404 (rätt adress för set-varianterna är .../advancedlevel-360-sats-0603663b07 resp. ...bz1).
- Varv 2: Milwaukees registreringsformulär för förlängd garanti kräver inloggning, inte läst.

---

## Varv 2, 2026-09-30

Beställt av affiliateagenten 2026-09-30, hämtat 2026-09-30. Samma regler som varv 1: pris inkl. moms ur PM:s kategori- och produktsidors data, butik är källa för pris, lager, EAN och innehåll, aldrig för prestanda. **Utdrag** = sökmotorns utdrag, **sammanfattning** = WebFetch-sammanfattning. mm/10 m = (mm/m) × 10, egen räkning där tillverkaren anger mm/m.

### A. Proffsklassen hos PM: gröna 3 × 360° med Li-ion

Kategorin lästes om, `?page=1` till `?page=3`, 144 artiklar (alla priser, även över 5 000 kr). Full adress = `https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar/` + adresskolumnen. "Ord." = butikens `ListPrice` när rabatt visas.

| Märke | Modell | PM art.nr | Pris kr (ord.) | Batteri enligt PM | Lager 30/9 | Adress |
|---|---|---|---|---|---|---|
| DeWalt | DCE089D1G | CQ11818 | 6 649 | 12V 2,0 Ah + laddare | i lager, "Fler än 10 st i lager \| Skickas inom 24 timmar!" | dewalt-dce089d1g-korslaser-med-gron-laser-cq11818 |
| DeWalt | DCE089D1G18-QW | 3070206 | 8 883 | batteri + laddare | slut, "Skickas om 8-12 dagar" | – |
| DeWalt | DCE089NG18-XJ | 3070207 | 8 258 | utan batteri | slut, "Skickas om 8-12 dagar" | – |
| DeWalt | DCLE34031N-XJ (18V) | 3123803 | 5 415 | utan batteri och laddare | i lager, "2 st i lager" | dewalt-dcle34031n-xj-korslaser-med-gron-laser-3123803 |
| DeWalt | DCLE34031D1-QW (18V) | 3105832 | 11 646 | 2,0 Ah + laddare | i lager, "8 st i lager" | dewalt-dcle34031d1-qw-krysslinjelaser-3105832 |
| DeWalt | DCLE34035B-XJ (fjärrstyrd) | 4068328 | 14 034 | utan | slut, "Skickas om 8-12 dagar" | – |
| DeWalt | DCLE34035D1-QW | 4068326 | 12 910 | med | slut, "Skickas om 8-12 dagar" | – |
| Milwaukee | M12 3PL-401C | 2291046 | 7 939 (8 822) | 4,0 Ah + laddare | i lager, "7 st i lager" | milwaukee-m12-3pl-401c-korslaser-gron-med-batteri-och-laddare-2291046 |
| Milwaukee | M12 3PL-0C | 2291047 | 6 932 (7 703) | utan | i lager, "4 st i lager" | milwaukee-m12-3pl-0c-korslaser-gron-utan-batterier-och-laddare-2291047 |
| Milwaukee | M12 3PLKIT-401P | 3100227 | 11 947 (14 056) | 4,0 Ah + laddare, stativ, LLD50 | i lager | – |
| Milwaukee | M12 3PLSKIT-401P | 4066441 | 10 287 | med | slut, "Skickas om 9-14 dagar" | – |
| Milwaukee | M12 A3PLO-401C / -0C | 4066478 / 4066477 | 15 333 / 14 262 | med / utan | slut, "Skickas om 8-12 dagar" | – |
| Bosch | GLL 12V100-33 CG | 4070631 | 8 180 | "Batterikapacitet 2.0 Ah", ingen leveranslista | i lager, "5 st i lager" | bosch-gll-12v100-33-cg-linjelaser-gron-laser-4070631 |
| Bosch | GLL 12V-100-33 CG | 4072542 | 7 289 | 4 × AA + AA1-adapter, **inget Li-ion-batteri** | i lager, "1 st i lager" | bosch-gll-12v-100-33-cg-linjelaser-gron-med-batterier-4072542 |
| Laserliner | CompactPlane Laser 3G Pro | 4065112 | 6 244 | USB-C-laddning; PM:s fält "Batteri ingår: Nej" | i lager, "1 st i lager" | laserliner-compactplane-laser-3g-pro-linjelaser-tredimensionell-4065112 |
| Makita | SK700GD (4 H + 4 V, inte 3 × 360) | 4032817 | 7 629 (8 477) | utan | slut, "Skickas om 8-12 dagar" | – |
| Flex | ALC3x360 10.8 G/R (Set) | 3100320 / 3100322 | 8 294 / 10 624 | utan / med | slut, "Skickas om 7-8 dagar" | – |
| Hultafors | H3x360G | 3117990 | 5 995 | inte kontrollerat | slut, "Skickas 2026-10-15" | – |
| Stanley | FatMax X3G | 2901348 | 6 815 | inte kontrollerat | slut, "Skickas om 9-14 dagar" | – |

- **Bosch GLL 3-80 CG och GLL 12V-80-33 CG finns inte i kategorin.** Bosch GLL 80-33 G M (4066336, 8 659 kr) slut. Röda Makita SK700D (5 205 kr, ord. 5 784) i lager men röd.
- Inte med: Ironside 102381 och 102494 (i lager, gröna, 7 317 och 7 101 kr; utanför etablerade märken, typ inte kontrollerad), Leica L6G-1 och L6GS-1, Geo-Fennel Geo6X SP och Geo 6XR (alla slut).
- Butikstext, inte källa: PM:s kortbeskrivning av M12 3PL-401C säger "räckvidd på 38/50 m med/utan mottagare" (omvänd ordning mot Milwaukee).

### A. Utvalda tre, alla i lager och i kit med batteri och laddare

| | DeWalt DCE089D1G | Milwaukee M12 3PL-401C | Bosch GLL 12V-100-33 CG (PM 4070631) |
|---|---|---|---|
| Varför | billigaste gröna 3 × 360-kitet i lager; en av ettans fyra modeller | billigaste Milwaukee-kitet i lager; ettans dyraste modell; högst i GDS 3x360-test | enda Bosch 3 × 360 grön med Li-ion i lager; kitvarianten |
| Pris kr (ord.) | 6 649 | 7 939 (8 822, −10 %) | 8 180 |
| Lager | "Fler än 10 st i lager \| Skickas inom 24 timmar!" | "7 st i lager \| Skickas inom 24 timmar!" | "5 st i lager \| Skickas inom 24 timmar!" |
| URL-status | 200, ingen omdirigering | 200, ingen omdirigering | 200, ingen omdirigering |
| EAN (PM) | 5035048489628 | 4058546340353 | 4053423303292 |
| Tillverkarens nr | DCE089D1G-QW | 4933478102 | 0 601 065 401 (via utdrag, se nedan) |

URL-status: `curl -s -L -w "%{http_code} %{num_redirects}"` 2026-09-30.

#### DeWalt DCE089D1G (12V, grön, 3 × 360°)

- PM: art.nr CQ11818, **6 649 kr**, inget ordinarie pris, i lager. https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar/dewalt-dce089d1g-korslaser-med-gron-laser-cq11818 → 200, ingen omdirigering.
- Tillverkarsidor, alla lästa som HTML: https://www.dewalt.se/sv-se/produkt/dce089d1g-qw/12v-xr-3x360deg-krysslinjelaser-gron, https://www.dewalt.de/de-de/produkt/dce089d1g-qw/multilinienlaser-grun-3x360deg-108v, https://www.dewalt.co.uk/en-gb/product/dce089d1g-gb/12v-xr-cross-line-green-laser-3-x-360-mm-1-2ah-battery (UK-varianten -GB). **Ingen EU-bruksanvisning hittad.**

| Nyckel | Värde | Källa |
|---|---|---|
| rackvidd_m | 30 m | dewalt.se ("Räckvidd: 30M"); dewalt.co.uk ("30m"); PM |
| rackvidd_mottagare_m | **Källorna säger olika:** 60 m (dewalt.se "60M m/ detektor"), 50 m (dewalt.co.uk "50m w/detector", PM). dewalt.se gäller svensk marknad men står ensam; ingen bruksanvisning avgör | dewalt.se; dewalt.co.uk; PM |
| noggrannhet_mm_per_10m | ±3 ("+/-3mm@10m"); dewalt.de "3mm / 10m" | dewalt.se; dewalt.de |
| linjer | 3 × 360°: en horisontell, två vertikala, var för sig eller alla. Grön | dewalt.se; PM |
| sjalvnivellering_grader | 4° ("bis 4°") | dewalt.de; PM |
| laserklass | **Källorna säger olika:** dewalt.de "Laserdiode: 515nm (<1mW) / Laserklasse 2M"; PM "2"; RS Online enligt **utdrag** "Klasse 2". Ingen DeWalt-bruksanvisning läst. Klass 2M är inte samma klass som 2; måste redas ut innan sidan anger klass | dewalt.de; PM |
| Våglängd | 515 nm | dewalt.de |
| batteri | DeWalt 12V (10,8V) XR Li-ion 2,0 Ah (DCB127 enligt dewalt.de), laddare DCB107 (dewalt.de). **Drifttid saknas** hos DeWalt | dewalt.se; dewalt.de |
| IP | IP65 | dewalt.co.uk; dewalt.de; PM |
| Stativgänga | 1/4" | dewalt.se |
| Pendellås / lutning | "Låsfunktion för att förhindra skador på inre komponenter"; "Locking pendulum prevents damage in transit". Manuellt läge nämns: "Flertal blinkande sekvenser i manuellt läge", inte beskrivet närmare | dewalt.se; dewalt.co.uk |
| Puls / mottagare | "Pulsfunktion kan användas med detektor - bibehåller full ljusstyrka"; detektor DE0892G | dewalt.se; dewalt.co.uk; dewalt.de |
| Vikt | **Saknas** från DeWalt. PM: "Vikt 4,4 kg", "Mått 317 x 450 x 155 mm" (troligen låda eller förpackning; butik). Utdrag från tysk butik: 1,15 kg med batteri | PM; utdrag |
| Ingår | **Källorna säger olika:** dewalt.se "1 x 2.0Ah batteri, laddare, mottagare, laserglasögon, fäste och TSTAK förvaringsväska"; dewalt.de "Koffer, 10.8V / 2Ah XR Akku, Ladegerät, Lasersichtbrille, Zieltafel, Wandhalterung"; dewalt.co.uk (-GB) listar ingen laddare och en "Laser Target"; PM "12V 2,0Ah XR Litiumjonbatteri, laddare, fäste, TSTAK förvaringslåda, laserglasögon". Att en **mottagare** ingår står bara på dewalt.se; dewalt.de och UK säger måltavla | dewalt.se; dewalt.de; dewalt.co.uk; PM |
| Garanti | "1 års begränsad garanti, 3 års begränsad garanti när du är registrerad". PM: registrering inom 4 veckor | dewalt.se; PM |
| EAN / PM-nr | 5035048489628 / CQ11818 | PM |

- Oberoende test med mätning: **inget hittat.** Inte med i GDS 3x360-testet 2026-03-12 (där DeWalt representeras av DCLE34035D1-QW). Sökträffar: YouTube, butiker, niveaux-laser.com och zone-outillage.fr (test- och jämförelsesajter, inte lästa).
- ManualsLib har en manual NA532740 (nov. 2024) för **DCE089G18**, en nyare 12V/18V-generation med andra värden (70 m, ≤ 1,50 mW per stråle, 510–530 nm; **sammanfattning**). Gäller inte DCE089D1G-QW och ska inte användas.

#### Milwaukee M12 3PL-401C (12V, grön, 3 × 360°)

- PM: art.nr 2291046, **7 939 kr, ordinarie 8 822 kr** (rabatt 10 %), i lager. https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar/milwaukee-m12-3pl-401c-korslaser-gron-med-batteri-och-laddare-2291046 → 200, ingen omdirigering. Solo: M12 3PL-0C, 6 932 kr (ord. 7 703), i lager, EAN 4058546340360 (Milwaukee anger samma EAN för 3PL-0C, art. 4933478103).
- Tillverkarsida: https://se.milwaukeetool.eu/sv-se/m12-gron-360-176;-treplanslaser/m12-3pl/ (HTML och produktdata läst). Bruksanvisning: Milwaukee M12 3PL, 4931 4704 51 (01.21), svensk del "Tekniska data" s. 111–112, Milwaukees PDF (Techtronic Industries GmbH) hämtad från distributören Beijer: https://media-prod.beijerflow.com/media/medias/docus/251/4931470451-M12-3PL.pdf

| Nyckel | Värde | Källa |
|---|---|---|
| rackvidd_m | 38 m | bruksanvisningen ("Räckvidd 38 m (med detektor 50 m)"); Milwaukee SE ("Arbetsintervall, synligt 38.0") |
| rackvidd_mottagare_m | 50 m med LLD50 (bruksanvisningen); Milwaukee SE "50 / 100" m med LLD50 / LRD100. 100 m förutsätter LRD100 | bruksanvisningen; Milwaukee SE |
| noggrannhet_mm_per_10m | ±3 ("+/- 3 mm / 10 m"); Milwaukee SE "0.3" mm/m | bruksanvisningen; Milwaukee SE |
| linjer | "3 x 360 ° linjer gröna (1x horisontella, 2x vertikala)"; 3 dioder | bruksanvisningen |
| sjalvnivellering_grader | ±4°, 3 s | bruksanvisningen |
| laserklass | 2 ("Laserklass II"; EN 60825-1:2014); 510–530 nm; "Maximal effekt ≤ 8 mW"; diodtyp 50 mW | bruksanvisningen |
| batteri | M12 Li-ion 12 V; "15 timmar med batteri M12 4.0 Ah"; Milwaukee SE "Max. driftstid med M12 B4 batteri 15" | bruksanvisningen; Milwaukee SE |
| IP | IP54; "Litiumjonbatteriet och batterifacket täcks inte av IP54-skyddet"; fall 1 m (Milwaukee SE) | bruksanvisningen; Milwaukee SE |
| Stativgänga | 1/4" och 5/8" | bruksanvisningen |
| Pendellås / lutning | Vridomkopplare: "Av / låst", "På / manuellt läge", "på / självutjämningsläge". "I manuellt läge är självnivelleringen avaktiverad och laser kan ställas in till valfri lutning hos laserlinjerna." 10° mikrojustering (±5°) | bruksanvisningen s. 112, 117 |
| Puls | Pulstid ≤ 80 µs, frekvens 10 kHz; detektor LLD50 (bruksanvisningen), LLD50 / LRD100 (Milwaukee SE) | bruksanvisningen; Milwaukee SE |
| Vikt | 1 607 g "inkl. batterier 6 Ah". Med det medföljande 4,0 Ah-batteriet: saknas | bruksanvisningen |
| Ingår | Milwaukee SE (4933478102): 1 × M12 B4-batteri, C12 C-laddare, väska; standardutrustning takfäste och HI-VIST-målplatta. PM: 4,0 Ah REDLITHIUM, C12 C, Hi-Vis målplatta, takfäste, väska. Ingen mottagare | Milwaukee SE; PM |
| Garanti | Milwaukee: "Garantitiden för en standardgaranti är 1 år"; "utvalda" verktyg kan förlängas "till som längst 3 år (1+2)" vid registrering "inom 30 dagar"; batterier till 2 år. Om M12 3PL är ett av de utvalda: inte kontrollerat (formuläret kräver inloggning). https://se.milwaukeetool.eu/header/service/service-og-garantivilkar/ | Milwaukee |
| EAN / PM-nr | 4058546340353 (PM; Milwaukee SE anger inget EAN för -401C) / 2291046 | PM |

- Oberoende test: Gör Det Själv, "Test av 3x360 graders lasrar (2026)", Martin Mogensen, 2026-03-12, https://gds.se/verktyg/matinstrument/test-av-3x360-graders-lasrar-for-hantverkare (**sammanfattning**). M12 3PL totalbetyg 9,2 (högst av nio), pris i testet 6 874 kr. Precision 8, synlighet 10, räckvidd 10, funktioner 9, användning 9, kvalitet 9. **Uppmätt avvikelse 0,2 mm/m.** Omdöme enligt sammanfattningen: stor och solid, robust, fininställningsskruv för vertikala markeringar; testexemplaret hade 6 Ah-batteri. Metod (sammanfattning av GDS): lasern i mitten av rummet, punkt på varje vägg, vrids 180° och punkterna jämförs; synlighet ute en molnig dag på 5 m mot vit panel, tegel, furu och betong.
- I samma test (sammanfattning): DeWalt DCLE34035D1-QW 8,9; Bosch GLL 18V-120-33 CG 8,8; Stabila LAX 600 G 8,8; Laserliner X3 Laser Pro 8,6; Makita SK700D och SK700GD 8,5 (0,2 mm/m); Stabila LAX 600 8,0; Hultafors H3X360G 7,6. **DeWalt DCE089 och Bosch GLL 12V-100-33 CG är inte med.**

#### Bosch GLL 12V-100-33 CG Professional (12V, grön, 3 × 360°), PM 4070631

- PM: art.nr 4070631, **8 180 kr**, inget ordinarie pris, i lager. https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar/bosch-gll-12v100-33-cg-linjelaser-gron-laser-4070631 → 200, ingen omdirigering. PM:s rubrik "GLL 12V100-33 CG Linjelaser grön laser"; ingen leveranslista, tekniska fältet "Batterikapacitet 2.0 Ah".
- Den billigare PM 4072542 (7 289 kr, EAN 4053423303285) levereras enligt PM med "4 stycken 1,5 V LR6-batterier (AA)" och "AA1 alkalisk batteriadapter", **utan Li-ion-batteri och laddare**; innehållet motsvarar Boschs variant 0 601 065 400. Den är inte ett kit.
- Vilket Bosch-nummer 4070631 är: EAN 4053423303292 = 0 601 065 401 enligt **utdrag** från klium.com, cotebrico.fr och toomanytools.com. Bosch-sidan listar varianterna 0 601 065 401 och 0 601 065 470 (L-BOXX 136, GBA 12V 2,0 Ah, takklämma DK 20, snabbladdare GAL 12V-40) och 0 601 065 400 (4 × AA, AA1). EAN står inte på Bosch-sidan.
- Källor: Bosch bruksanvisning 1 609 92A 9AX (14.08.2024), svensk del s. 160–166, PM-bilaga `AssetDocument81355597` (på 4072542-sidan); https://www.bosch-professional.com/se/sv/products/gll-12v-100-33-cg-0601065401 (HTML läst).

| Nyckel | Värde | Källa |
|---|---|---|
| rackvidd_m | 30 m (radie). "Arbetsområdet kan reduceras vid ogynnsamma omgivningsvillkor (t.ex. direkt solljus)" | bruksanvisningen; Bosch-sidan |
| rackvidd_mottagare_m | 5–100 m (radie) med LR 7 | bruksanvisningen; Bosch-sidan |
| noggrannhet_mm_per_10m | ±3 (±0,3 mm/m, vid de fyra horisontella krysspunkterna; "Vid max. självnivelleringsintervall ska en avvikelse på ±0,1 mm/m beräknas") | bruksanvisningen |
| linjer | 3 × 360°: en vågrät, två lodräta, var för sig. Grön | bruksanvisningen |
| sjalvnivellering_grader | ±4°, < 4 s | bruksanvisningen |
| laserklass | 2; < 10 mW, 500–540 nm; C₆ = 10 | bruksanvisningen |
| batteri | 12 V Li-ion (rekommenderat GBA 12V 2–3 Ah) eller 4 × 1,5 V LR6 med batteriadapter. Drifttid med tre linjer: Li-ion 6 h, alkaliska 4 h; "Kortare drifttid vid drift med Bluetooth®" | bruksanvisningen; Bosch-sidan ("6 h (litiumjon) och 4 h (4 x AA) i 3-linjeanvändning") |
| IP | IP65; "Litiumjonbatteri och batteriadapter är undantagna från skyddsklassen" | bruksanvisningen |
| Stativgänga | 1/4", 5/8" | bruksanvisningen |
| Pendellås / lutning | "Vid avstängning låses pendelenheten." "Alla driftsätt fungerar med både nivelleringsautomatik och lutningsfunktion"; utanför ±4° växlar den automatiskt till lutningsfunktion, linjerna blinkar | bruksanvisningen s. 164–166 |
| Puls / mottagare | "Alla driftsätt är lämpliga för användning tillsammans med lasermottagaren"; pulsfrekvens 10 kHz; LR 7. Fjärrstyrning via Bluetooth-appen "Bosch Levelling Remote App" | bruksanvisningen |
| Vikt | 0,96 kg "utan batteri/batteriadapter/batterier"; 162 × 89 × 139 mm | bruksanvisningen |
| Ingår (0 601 065 401) | Universalfäste LB 10, väska, lasermåltavla; för varianten L-BOXX 136, 1 × GBA 12V 2,0 Ah, takklämma DK 20, snabbladdare GAL 12V-40. PM listar inget för 4070631 | Bosch-sidan |
| Garanti | Bosch-sidan länkar "Utöka tre års garanti" (PRO360); villkoren inte lästa hos Bosch | Bosch-sidan |
| EAN / PM-nr | 4053423303292 / 4070631 | PM |

- Oberoende test med mätning: **inget hittat** (sökningen gav butiker, testbericht.de-sammanställning och Bosch-videor). Inte med i GDS 3x360-testet.

#### Varianter utanför de tre, för tabellen "solo eller kit"

- DeWalt DCLE34031N-XJ (18V, solo): 5 415 kr, i lager, EAN 5054905301859. PM:s text (butik): 40 m, 100 m med detektor, 510–530 nm, ≤ 1,50 mW per stråle, klass 2, IP54, "±3,0 mm per 10 m". Inga DeWalt-källor lästa. Kit DCLE34031D1-QW 11 646 kr.
- Laserliner CompactPlane Laser 3G Pro: 6 244 kr, i lager, EAN 4021563716647; inbyggt batteri laddas med USB-C enligt PM, men PM:s fält säger "Batteri ingår: Nej". PM (butik): 17 h drifttid, 9 h med alla linjer, pendellås, manuell lutning, handmottagarläge. Inga Laserliner-källor lästa.

### B. Luckor i modellerna från varv 1

Lager och pris lästa om på produktsidorna 2026-09-30. **Enda ändringen sedan varv 1: Leica Lino L2s-1 (CQ12200) kostar nu 3 825 kr** (3 570 kr i varv 1), "2 st i lager | Skickas inom 24 timmar!". Oförändrade och i lager: GCL 2-50 G 2930433 2 863 kr, DW088CG 2 484 kr, AdvancedLevel 360 2 252 kr ("1 st i lager"), CLL-C 2 543 kr (ord. 3 391), RB360GLL 2 149 kr ("2 st i lager"), GLL 3-80 4 501 kr, GEO-X1 1 610 kr ("4 st i lager"), Lino L2-1 4 779 kr ("1 st i lager"). Alla adresser 200 utan omdirigering.

#### 1. Bosch GCL 2-50 G (PM 2930433)

- **Drifttid: saknas fortfarande.** Letat i bruksanvisningen 1 609 92A 8M2 (13.07.2023, nyare utgåva än varv 1:s 5EN från 2020; https://www.bosch-professional.com/binary/manualsmedia/o425737v21_160992A8M2_202307.pdf, svensk del s. 65–66): tekniska data har batterier "4 × 1,5 V LR6 (AA)" men ingen drifttid. Inte heller i Boschs produktdatablad (01.12.2020, PM-bilaga id 30281342), på bosch-professional.com se/sv, de/de eller gb/en. Boschs "Produktdatenblatt" på de/de gav 503.
- 2023-utgåvan har samma värden som varv 1: 15 m, 5–50 m med mottagare, punkter 10 m, ±0,3/±0,7 mm/m, ±4°, < 4 s, klass 2, linjer < 10 mW och punkter < 1 mW, båda 500–540 nm, 10 kHz, LR 7, 1/4", IP64.
- **PM 2930433 = 0 601 066 M00.** EAN 4059952511085 = 0601066M00 enligt **utdrag** (klium.com, toolteam24.com, toolnation.com, eBay). Bosch-sidans varianter stämmer med PM:s tre: M00 "med 4 st. batterier (AA), roterande fäste RM 10" (PM 2930433), M01 "med 4 st. batterier (AA), stativ" (BT 150; PM 2930436), M02 "i väska med 4 st. batterier (AA), roterande fäste RM 10" med takklämma DK 10 och hantverkarväska (PM 2930437). Alla varianter: väska, 4 × AA, lasermåltavla, RM 10. https://www.bosch-professional.com/se/sv/products/gcl-2-50-g-0601066M00

#### 2. DeWalt DW088CG

- **dewalt.se lästes nu som HTML** (inte sammanfattning): "ARBETSOMRÅDE: 15m (50m med detektor)", "NOGGRANNHET: +/-3mm@10m", "IP54-KLASSNING", "Tålig för 1m fall", "Fungerar med DE0892CG-detektor", "Heltidspulsläge tillåter användning med detektor". Inkluderar "1 x Laser, 1 x Förvaringsväska, 1 x Batteri, 1 x Monteringsfäste"; "Laddare ingår: Nej"; "Totalt antal batterier: 3". Garanti "1 års begränsad garanti, 3 års begränsad garanti när du är registrerad". https://www.dewalt.se/sv-se/produkt/dw088cg-xj/krysslinjelaser-gron
- **DeWalts EU-bruksanvisningar** (länkade från dewalt.se):
  - https://assets.dewalt.se/GLOBALBOM/XJ/DW088CG/1/Instruction_Manual/EN/DW088-DW088CG-TYP2-PART_A_EUR.pdf (NA127863, 08/22), svensk del s. 79–88, "Tekniska data", kolumn DW088CG (typ 1): 4,5 V; 3 × LR6 (AA); lasereffekt < 1,3 mW; **laserklass 2**; arbetsområde **30 m, 100 m med detektor** (säljs separat); noggrannhet (nivå) ±3,0 mm för 10 m; **våglängd 510–530 nm**; IP54; nivåinställning ±4°; −10 till +45 °C; 1/4" × 20 TPI; **vikt 0,75 kg**.
  - https://assets.dewalt.se/GLOBALBOM/XJ/DW088CG/1/Instruction_Manual/EN/DW088_T2_DW088CG_T1_EU.pdf (N498356), svensk del s. 102: samma klass, våglängd, effekt, IP, ±4° och 0,75 kg; ingen räckvidd i tabellen.
- **Pendellås / manuellt läge:** bruksanvisningen beskriver inget pendellås och inget manuellt läge. Den säger: "Om laserstrålen börjar blinka anger detta att apparaten har ställts i en lutning som överskrider självriktningsområdet på 4°. Stäng av apparaten, ställ upp den på nytt inom självriktningsområdet och starta den igen." Linjerna slås på med var sin strömbrytare. Det stöder varv 1:s PM-fält "Låsfunktion = false", men DeWalt skriver inte uttryckligen att pendellås saknas.
- **Är 15 m riktigt? Källorna säger olika:** dewalt.se 15 m / 50 m med detektor; DeWalts EU-bruksanvisning (08/22) 30 m / 100 m med detektor; DeWalt UK-datablad (varv 1) "Visibility range: 20m" / 50 m med detektor; PM 15 m. Varv 1:s sammanfattning återgav dewalt.se rätt. Bruksanvisningen är tillverkarens tekniska dokument, dewalt.se är svensk marknad; båda är DeWalt. Förslag: ange 15 m som DeWalts svenska uppgift och skriv att bruksanvisningen anger 30 m.
- **Vikt:** 0,75 kg (bruksanvisningen). PM "Vikt (med batteri) 0.55 g" (felskrivet i butiken).
- **Drifttid:** inte i EU-bruksanvisningen. "16 hours" i DeWalt UK-databladet (varv 1) och "upp till 16 timmars användningstid" hos PM.

#### 3. Bosch AdvancedLevel 360 (PM 4054173, EAN 4053423245165)

- **Variant: 0603663BZ0.** Bosch DIY:s produktdata (sidan för B06, https://www.bosch-diy.com/se/sv/p/advancedlevel-360-0603663b06, läst som HTML) listar per variant:
  - 0603663B06, EAN 4059952648026: 4 × AA, mjuk förvaringsväska, kartong.
  - 0603663B07 (sats), EAN 4059952648033: dessutom TT 150-stativ.
  - **0603663BZ0, EAN 4053423245165: 4 × AA, mjuk förvaringsväska, eCommerce-kartong** (= PM 4054173).
  - 0603663BZ1 (sats), EAN 4053423245042: dessutom TT 150, eCommerce-kartong (= PM 4054175).
- **IP-klass: saknas fortfarande.** Bosch DIY:s tekniska lista (arbetsintervall 24 m, 500–540 nm linje, 630–650 nm punkt, klass 2, ±4°, ±0,4 mm/m, 4 s, 1/4", 117 × 80 × 126 mm, 0,520 kg, öppningsvinkel 120°, 4 batterier) har ingen IP. Ett sökutdrag angav IP54 utan att det framgick varifrån; **inte belagt, använd inte.**
- **Garanti (Bosch DIY):** "Hos Bosch får du en 2 garanti på privat använda verktyg. Du kan också utvidga garantin för dina nyinköpta gröna elektriska, trädgårds- eller mätverktyg från Bosch gratis till tre år. Allt du behöver göra är att registrera dig på vår MyBosch serviceplattform och registrera ditt verktyg inom fyra veckor efter köpet." https://www.bosch-diy.com/se/sv/service/garanti ("2 garanti" står så på sidan; sidans rubrik och övrig text talar om 2 och 3 år.)

#### 4. Milwaukee CLL-C (EAN 4058546360351)

- **Bekräftat av Milwaukee.** https://se.milwaukeetool.eu/sv-se/alkalisk-krysslaser-med-gron-laserfarg/cll/ ("Alkalisk krysslaser - med grön laserfärg", modell CLL-C, artikelnummer **4933478753**, **EAN-kod 4058546360351**). Produktdata på sidan: arbetsintervall synligt 30 m, med mottagare 50 m; automatisk nivellering; IP54; mottagare LLD50 / LRD100; klass 2; grön; 1x vertikal, 1x horisontell; nivelleringstid 3 s; noggrannhet 0,3 mm/m; självnivellering 4°; levereras med "4 x AA Batterier, Väska"; standardutrustning takfäste; batterityp alkalisk.
- Egenskaper på samma sida: "4 x AA alkaliska batterier ger över 8 timmars drifttid"; "3-läges pendelsystem: Manuellt läge för användning i valfri vinkel, 4° självnivellering och pendellås-läge för att skydda komponenter under transport"; "IP 54-klassat skydd, klarar fukt och damm samt fall på upp till 1 m".
- Allt stämmer med bruksanvisningen "CLL" från varv 1 (30/50 m, ±3 mm/10 m, ±4°, < 3 s, klass 2, IP54, 8 h, lägena av/låst, manuellt, självutjämning). Bruksanvisningen gäller alltså CLL-C.
- **Garanti:** Milwaukees villkor, se M12 3PL ovan (1 år; utvalda verktyg till 3 år vid registrering inom 30 dagar). Om CLL-C är ett "utvalt" verktyg: inte kontrollerat.

#### 5. Ryobi RB360GLL

- Ryobis produktsida https://se.ryobitools.eu/elverktyg/test-matinstrument/rb360gll/rb360gll/ (produktdata läst): artikelnummer 5133005310, EAN 4892210201874, **vikt 0,5 kg**, räckvidd 25 m, klass 2 < 1 mW, 520 nm ± 10 nm, grön, 2–4 s, självnivellering 4°, alkaliska 4 × 1,5 V.
- **IP-klass: inte angiven** av Ryobi (sidan, bruksanvisningen). **Lutningsläge/pendellås: inte angivet.** Sidan nämner bara "Automatisk självnivelleringsfunktion med intuitiv LED-lampa som visar när lasern är ur nivå" och "skjutreglage för ON/OFF".
- RBCLLG2 på samma sajt (https://se.ryobitools.eu/elverktyg/test-matinstrument/rbcllg2/rbcllg2/): 5133005497, EAN 4892210203779, 0,4 kg, 15 m, självnivellering 3°, max 5 s, 2 × AA; ingen IP, inget lås. **Källorna säger olika om våglängd:** sidan "510-520" nm, bruksanvisningen (varv 1) 520 ± 10 nm.

#### 6. Bosch GLL 3-80 (CQ17021)

- **Bekräftat i bruksanvisningen 2022.** Bosch 1 609 92A 8AT (28.10.2022), svensk del s. 55, PM-bilaga `AssetDocument70318723`: "Drifttid med 3 lasernivåer 4 h" (fotnot B: vid 20–25 °C). Samma tabell: batterier 4 × 1,5 V LR6 (AA); vikt enligt EPTA-Procedure 01:2014 0,82 kg; 149 × 84 × 142 mm; IP54 (damm- och stänkvattenskyddad); pulsfrekvens utan mottagarläge 23 kHz, i mottagarläge 10 kHz; LR 6, LR 7; 1/4", 5/8".
- Påslag: "position On (för arbete med pendelarretering) eller … On (för arbete med nivelleringsautomatik)"; "Vid avstängning låses pendelenheten."

#### 7. Geo-Fennel GEO-X1 (PM 3097806, 1 610 kr)

- Tillverkarens namn: **Geo1X-GREEN**, artikelnummer 541250, EAN 4045921015548 (samma som PM). Källor: https://geo-fennel.de/produkte/linienlaser/kreuzlinienlaser/geo1x-green (HTML), datablad https://geo-fennel.de/media/pdf/g0/e4/da/geo-fennel_541250_DE_neu.pdf och bruksanvisning https://geo-fennel.de/media/pdf/20/31/0a/Geo1X-GREEN_DE_final.pdf.

| Nyckel | Värde | Källa |
|---|---|---|
| rackvidd_m | 30 m (radie), "* abhängig von Raumhelligkeit" | datablad; webbsida; bruksanvisning |
| rackvidd_mottagare_m | **Källorna säger olika:** 60 m (radie) i datablad och webbsida; 70 m (radie) i bruksanvisningens tabell och text ("Der Arbeitsbereich kann somit auf 70 m …"). Mottagare FR 75-MM, FR 55, FR 55-M (tillval) | datablad; bruksanvisning |
| noggrannhet_mm_per_10m | ±3 ("± 3 mm / 10 m") | datablad |
| linjer | 1 vertikal + 1 horisontell, grön | datablad |
| sjalvnivellering_grader | ±3° | datablad |
| laserklass | 2 (DIN EN 60825-1:2014); "P ≤ 1 mW @ 515 - 530 nm" | bruksanvisning |
| batteri | 4 × AA alkaliska, 5 h. Tillval Li-ion-set med laddare, "Akkulaufzeit 10 h" | datablad |
| IP | IP 54 | datablad |
| Stativgänga | 1/4" och 5/8" | datablad |
| Lutning | "Manuellfunktion zur Schräganwendung"; optisk/akustisk signal utanför självnivelleringsområdet | datablad; bruksanvisning ("MANUELL-FUNKTION") |
| Pendellås | Inte nämnt som eget lås i det lästa | – |
| Puls / mottagare | Mottagarfunktion för FR 75-MM / FR 55 / FR 55-M | webbsida; bruksanvisning |
| Vikt | **Saknas** (inte i datablad, webbsida eller bruksanvisning) | – |
| Ingår | 4 × AA, vägg-/stativhållare (magnetisk, skruvhål, 1/4" och 5/8"), vadderad väska | webbsida; datablad |
| Garanti | "Die Garantiezeit beträgt zwei (2) Jahre" | bruksanvisning |

- **Butikens uppgifter mot tillverkaren:** ±3 mm/10 m, 30 m, grön, IP54, 4 × AA, 5 h, ±3° och låsfunktion för manuell användning stämmer med geo-FENNEL. 60 m med mottagare stämmer med datablad och webbsida men inte med bruksanvisningen (70 m).

#### 8. Leica Lino L2s-1

- **Leicas datablad hittat:** "Product Data Sheet Leica Lino L2", 2201 V1.0 (engelska), https://shop.leica-geosystems.com/sites/default/files/2022-04/Leica%20Lino%20L2%20data-sheet_2201_V1.0_EN.pdf (PDF-filen gick att hämta; produktsidan på samma domän gav 403 i varv 1). Bladet har två kolumner, **"Lino L2s" = art. no. 848435** och "Lino L2" = art. no. 864413, med samma tekniska data:

| Nyckel | Värde (Lino L2s, 848435) | Källa |
|---|---|---|
| rackvidd_m | 25 m, "* Depending on lighting conditions" | Leica-databladet |
| rackvidd_mottagare_m | 80 m (mottagare RGR 200) | Leica-databladet |
| noggrannhet_mm_per_10m | ±2 ("± 0.2 mm/m or ± 1.0 mm @ 5m or ± 2.0 mm @ 10m"); linjenoggrannhet ±0,3 mm/m | Leica-databladet |
| linjer | 2 linjer (röda), vertikal > 170°, horisontell > 180° | Leica-databladet |
| sjalvnivellering_grader | ±4°, < 3 s; "automatic pendulum"; utanför nivå blinkar linjerna var 5:e s | Leica-databladet |
| laserklass | "635 ± 5 nm, class 2 acc. IEC 60825-1" | Leica-databladet |
| batteri | L2s: 3 × AA alkaliska; drifttid alkaliska 8 h (två linjer) – 13 h (en linje). Li-ion-pack 5 200 mAh (26–44 h) ingår i L2, tillbehör till L2s (art. 866131) | Leica-databladet |
| IP | IP54 (IEC 60529) | Leica-databladet |
| Stativgänga | 1/4" (+ 5/8" med adapter) | Leica-databladet |
| Pendellås | "Pendulum lock: yes" | Leica-databladet |
| Puls | "Pulse power for receiver: yes, auto" | Leica-databladet |
| Vikt | 500 g med alkaliska (530 g med Li-ion); 110 × 60 × 100 mm | Leica-databladet |
| Ingår (L2s, 848435) | "Leica Lino L2, battery tray for Alkaline, 3 x AA Alkaline batteries, TWIST 250 magnetic adapter, target plate, quick start guide, Calibration Certificate Blue, pouch" | Leica-databladet |
| Garanti | **Saknas** i databladet. L2/L2G-bruksanvisningen (varv 1): två år, +1 år vid registrering inom åtta veckor | – |

- Följd för varv 1:s problem: L2s är en Lino L2 med alkaliskt batterifack i mjuk väska. Bruksanvisningen för Lino L2/L2G som PM bifogar (id 28826278) gäller alltså instrumentet, och butikens värden (25 m, ±0,2 mm/m, 13 h, IP54, 500 g) stämmer med Leica. Att PM:s "Lino L2S-1" (CQ12200) är 848435 bygger på GTIN 7640110697511 (PM) och utdrag, inte på Leica.
- Butikens "upp till 13 tim." gäller **en** linje; med båda linjerna 8 h enligt Leica.
