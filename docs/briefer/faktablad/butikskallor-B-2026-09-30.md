# Butikskällor i `kallor`, del B

Underlag till svepet enligt `docs/AFFILIATE.md`, "/go/-rutten", beslutet 2026-09-30. Listan: 32 rader ur `B.txt`. Allt läst 2026-09-30 om inget annat står. Radnummer i kolumnen "Vad källan bär" är radnummer i mdx-filen.

**Grupper.** P: butiken är källa bara för pris, lager eller artikelnummer. S: en butikssida är källa för prestanda, specifikation, mått, åtgång eller råd. D: tillverkarens dokument ligger på butikens server.

**Gäller alla rader i grupp D.** Beijer Byggs väg `beijerbygg.se/wcsstore/...` och Byggmax väg `byggmax.se/media/catalog/...` står **inte** i undantagslistan. Den listan har bara `pm-asset.azureedge.net/api/asset-download`, `media.hornbach.se` och `img.bygghemma.se`. Därför behöver rad 4, 24, 25, 26 och 32 en adress hos tillverkaren, eller ett beslut av UX om att lägga till vägen.

**Sammanfattning:** 17 P, 10 S (varav 3 är helt eller delvis referat av vad butiken själv skriver), 5 D.

---

## guider/kok/byta-bankskiva.mdx

| Rad | Grupp | Vad källan bär (citat ur vår sida) | Ny källa |
|---|---|---|---|
| 71, Hornbach, byta bänkskiva | S + referat | **142:** "För framkanten anger Bygghemma 5 till 10 millimeter och Hornbach 10 till 15." **148:** "Det enklaste är att låta butiken kapa. Hornbach bjuder på det första raka snittet, [...] Då får du vänta ett par dagar på skivan." Enligt faktabladet (`guider-byta-bankskiva.md` avsnitt 2) kommer också **125** "Mät längden i skivans bakkant, där den möter väggen" från Hornbach. | **Framkant 10–15 mm: ingen källa.** Jag sökte hos Vedum (anvisning 39270, produktguiden 2026) och LG Collection. Ingen tillverkare anger 10–15 mm. LG anger 5–10 mm eller i liv med luckan (se rad 75). **148:** referat av butikens egen tjänst (transportsnitt, leveranstid). Du avgör om meningen står kvar utan url. **125 (mät i bakkant):** ingen tillverkarkälla hittad. Vedum och LG skriver bara att du ska mäta noga och kontrollera väggen med vattenpass. |
| 73, Hornbach, sågservice | Referat | **148:** "i fem av sina varuhus fräser de också hörn och sågar urtag mot betalning." **174:** "en butik kan fräsa hörnet på en skiva du köpt någon annanstans. Hornbach gör det". | Referat av butikens tjänst och vad den kostar. Det finns ingen tillverkarkälla att hämta. Du avgör om meningen står kvar utan url eller stryks. |
| 75, Bygghemma, guide | S | **142:** "Djupet kommer från Bygghemma och Ikea. För framkanten anger Bygghemma 5 till 10 millimeter". **133 (tabell):** "Skivans djup \| 600 till 625 \| 600 till 625". | **Framkant:** LG Collection, "Vi har bänkskivor för alla kök", https://www.lgcoll.se/vi-har-bankskivor-for-alla-kok/, odaterad, läst 2026-09-30: "Djupet bestäms av var skåpets framkant hamnar från vägg, i kombination med hur mycket överhäng du vill ha. Låt skivan liva med luckan eller ha ett överhäng på ca 5-10 mm." Stämmer med 5–10 mm. Bygghemmas guide är skriven av en expert från LG. **Djup:** Vedum, Produktguide kök 2026, standardsortiment (filen daterad 260309), s. 8, https://www.vedum.se/globalassets/dokument/kok/produktguider/produktguide_kok_2026_260309.pdf: "*4070 mm gäller i djup 610 mm. Djupare skivor maxlängd 3630 mm." Det styrker 610 mm som standarddjup och att djupare skivor finns. **Spannet 600 till 625 har ingen tillverkarkälla.** 600 kom från Bygghemma och 625 från Ikea eller Byggmax (butik). |

## guider/kok/kakla-kok.mdx

| Rad | Grupp | Vad källan bär | Ny källa |
|---|---|---|---|
| 61, Weber rapid grout, datablad 2019-09-05 (Beijer) | D | **130:** "Webers rapid grout till 20 mm". **150:** "med Webers rapid grout fuktar du fogen en till tre gånger de första dagarna, som databladet säger". **153:** "databladet för Webers rapid grout anger silikon i alla vinklar och övergångar mellan olika ytor". Beijer-kopian (2019-09-05) har alla tre: "Fogbredd 0,5 - 20 mm"; "fogen fuktas 1-3 gånger under de första dagarna"; "Fogar i övergång mellan golv och vägg och andra vinklar och hörn utförs med weber neutral silicone eller weber special silicone." | **Hittad men inte läst.** Weber har databladet på https://www.se.weber/files/se/2023-05/PDS-SE-weber_rapid_grout.pdf (**utdrag**, sökresultat med titeln "weber rapid grout"). Både den och produktsidan https://www.se.weber/tatskikt/fog/weber-rapid-grout gav **403** (Cloudflare) i WebFetch och curl. Version och tal är alltså inte kontrollerade mot Webers egen fil. Mappnamnet 2023-05 tyder på en nyare version än 2019. |
| 79, Hornbach, sätta kakel | S + referat | **130:** "Hornbach anger 2 mm för plattor med en sidlängd upp till 150 mm och 2 till 8 mm för större plattor." **122:** "Slutar kaklet i en fri överkant [...] börjar du vid den höjden med hela plattor, som Hornbach beskriver." | **Fogbredd:** Byggkeramikrådet, Byggkeramikhandboken, https://www.bkr.se/teknik/byggkeramikhandboken, sidan odaterad (bara länkade riktlinjer har datum), läst 2026-09-30: "Detta innebär små variationer i kakelplattornas mått som tas upp av fogen. Av den anledningen rekommenderas en fogbredd på 2-4 mm." och "Granitkeramik kan ha en fogbredd omkring 1-3 mm." **Talen stämmer inte med Hornbachs.** BKR gör ingen uppdelning efter sidlängd (150 mm) och har inget 2–8 mm. Meningens första del, "normalt 2 till 3 mm breda på en vägg", ryms inom BKR:s 2–4. **122:** referat av Hornbachs arbetsgång. Jag sökte inte vidare efter en tillverkarkälla för startraden. |

## guider/kok/mala-koksluckor.mdx

| Rad | Grupp | Vad källan bär | Ny källa |
|---|---|---|---|
| 62, Hornbach, måla köksluckor | S + referat | **32:** "Hornbachs guide börjar med 180, men grövre än 240 behövs inte". **111:** "Måla vått i vått, som Hornbachs guide säger." **138:** "därför rekommenderar Hornbach minst halvblankt. Färgtillverkarna kräver ingen viss glans i kök". **165 (Faq):** "Ta då stommen i samma arbetsgång och maskera vägg, golv och bänkskiva först, som i Hornbachs guide." **167 (Faq):** "I Hornbachs guide hängs luckorna upp försiktigt redan 12 timmar efter sista strykningen". | Alla fem är referat av Hornbachs guide. Tillverkarkällor för samma sak: **Korn 240:** Caparol, "Så här målar du köksluckor", https://www.caparolfarg.se/mala-inomhus/sa-malar-du-inomhus/sa-malar-du-koksluckor, odaterad (står redan i kallor): "Slippapper 140X230 mm kornstorlek 240". **Glans:** samma sida: "PU-Matt, PU-Satin eller PU-Gloss beroende på önskan av glans - välj mellan matt, halvmatt och blank yta". Det stöder att tillverkaren inte kräver halvblankt. **Torktid:** samma sida: "Låt färgen torka ordentligt (gärna ett par extra dagar så den hinner härda)". **Vått i vått:** Alcro, "Måla möbler & snickerier", https://alcro.se/tips-rad/mala-inomhus/mala-mobler-snickerier, odaterad: "Eftersom vattenburen färg yttorkar snabbt, kan man inte släta ut/stryka i färgen på ett ställe som målades för 2–3 minuter sedan. Resultatet blir då randigt och kladdigt." Sidan använder inte uttrycket "vått i vått". **180, 12 timmar, maskera stommen: ingen källa** hos Nordsjö (sidan säger bara "Slipa och rugga upp ytan med sandpapper"), Caparol eller Alcro. |

## guider/tak/hangrannor.mdx

| Rad | Grupp | Vad källan bär | Produkt, butik, läsdatum |
|---|---|---|---|
| 47 | P | **129:** "Stål, Lindab \| Hornbach \| 125 mm, 4 m, 279 kr \| 69,75"; **133:** "Källa: Hornbachs och Bauhaus produktsidor den 28 september 2026" | Hängränna Lindab svart 125 × 4 000 mm, Hornbach, 2026-09-28 |
| 49 | P | **129:** "87 mm, 2,5 m, 219 kr \| 87,60" | Stuprör Lindab svart 87 × 2 500 mm, Hornbach, 2026-09-28 |
| 51 | P | **130:** "Stål, Areco \| Bauhaus \| 125 mm, 2,5 m, 169 kr"; **187:** "Arecos 125-ränna i stål kostar 169 kronor för 2,5 meter hos Bauhaus" | Hängränna Areco 125 mm 2,5 m vit, Bauhaus, 2026-09-28 |
| 53 | P | **130:** "90 mm, 2,5 m, 239 kr \| 95,60" | Stuprör Areco 90 mm 2,5 m svart, Bauhaus, 2026-09-28 |
| 55 | P | **187:** "De 18 krokarna till samma sträcka kostar 89 kronor styck" | Rännkrok kompakt Areco 125 mm, Bauhaus, 2026-09-28 |
| 57 | P | **131:** "Plast, PVC \| Bauhaus \| 100 mm, 2 m, 199 kr \| 99,50" | Hängränna 100 mm vit 2 m, PVC, Bauhaus, 2026-09-28 |

## guider/tak/takfot.mdx

| Rad | Grupp | Vad källan bär | Produkt, butik, läsdatum |
|---|---|---|---|
| 48 | P | **133:** "Arecos svarta fotplåt kostade 169 kronor för 2 meter hos Bauhaus den 29 september 2026." Adressen är en kategorisida, men den används bara för priset. | Fotplåt Areco svart 2 000 mm, Bauhaus, 2026-09-29 |

## kunskap/badrum/byta-toalettstol.mdx

| Rad | Grupp | Vad källan bär | Ny källa, eller produkt, butik och datum |
|---|---|---|---|
| 63, Bauhaus, Gustavsberg Nautic hårdsits | S + P | **163 (tabell):** "Gustavsberg Nautic hårdsits, vit \| Nautic och Skandic \| 15,5 cm". **167:** "Gustavsberg anger inget hålavstånd på sina egna sidor, så måttet för Nautic är butikens uppgift." **169 (P):** "Gustavsbergs vita Nautic-sits kostade 759 kr hos Bauhaus i september 2026". | **Hålavstånd 15,5 cm: ingen källa hos Gustavsberg.** Jag sökte på produktsidan 9M26S101 (https://www.gustavsberg.com/en/products/toilet/toilet-seats/product/9m26s101/toilet-seat-nautic-9m26-scqr-white-4), som anger bredd 460 mm, längd 383 mm och "all toilets within the Nautic collection" men inget hålavstånd. Jag sökte också i Gustavsbergs reservdelsbroschyr från juni 2015 (https://www.gustavsberg.com/fileadmin/uploads/Brochures/Swedish/Reservdelar_Porslin_Juni2015.pdf). Där finns "Rostfria fästen, ställbara 130-155 mm (par)", men bara för modellerna 314, 315, 339, 353 och 354, inte för Nautic. **"Passar Skandic":** Gustavsbergs sida nämner bara Nautic, så Skandic har heller ingen tillverkarkälla. Bauhaus visar ingen modellkod, så det är inte fastställt vilken av 9M25 och 9M26 sitsen är. |
| 66, Byggmax, Compact | P (delvis S) | **130:** "Byggmax Compact, fristående, sits och skruvar köps till \| 1 399 kr"; **143:** "Compact-stolen behöver dessutom en sits." | Toalettstol fristående Compact, Byggmax, 2026-09-28. "Sits och skruvar köps till" är butikens uppgift om vad som ingår. Ingen tillverkare är namngiven, så det finns ingen tillverkarkälla att hämta. |
| 68, Hornbach, Ifö Spira 6260 | P | **131:** "Ifö Spira 6260 med hårdsits, för limning, s-lås \| 3 595 kr"; **134:** "Källa: Byggmax, Hornbach och Golvpoolen, 28 september 2026." | Toalettstol Ifö Spira 6260, mjukstängning, Rimfree, hårdsits, limning, s-lås, 4/2 l, RSK 7811033, Hornbach, 2026-09-28. Beskrivningen är artikelns beteckning. Ifös katalog visar en annan variant (RSK 7811036, "Fäste med skruv"), och jag hittade inte 7811033 där. |

## kunskap/el/u-varde.mdx

| Rad | Grupp | Vad källan bär | Ny källa |
|---|---|---|---|
| 57, Bauhaus, produktdata Rockwool Vindsull | S | **148 (tabell):** "Stenull, lösull handutlagd, Rockwool Vindsull \| 0,042". **158:** "Bauhaus produktdata för Vindsull". | ROCKWOOL, produktblad "Vindsull" (odaterat), https://brandcommunity.rockwool.com/asset/IpLyb_5qrJQPKZjk0BmOgQ/asset.pdf?quality=10 (omdirigeras till brandportal.rockwool.com). Citat: "Tekniska egenskaper (W/mK) 0.042" och "Värmekonduktivitet W/mK Löst upplagd: λD = 42 mW/mK, 45 kg/m³, sättning 5%". Prestandadeklaration DOP-510964, EN 14064-1:2010. **Stämmer:** 0,042. |

## kunskap/fasad/valja-fasadfarg.mdx

| Rad | Grupp | Vad källan bär | Ny källa, eller produkt, butik och datum |
|---|---|---|---|
| 79, Bauhaus, Jotun Drygolin Nordic Extreme (pris och åtgång) | S + P | **208 (tabell):** "Jotun Drygolin Nordic Extreme, blandning av akrylat och alkyd \| 6 till 8 på ohyvlat, 8 till 12 på hyvlat \| 2 till 3 \| Övermålningsbar 2 h \| 3 495 kr för 9 l, Bauhaus". **216:** "Drygolin är en blandning av akrylat och alkyd". Enligt faktabladet (`kunskap-valja-fasadfarg.md` rad 329) kom typen, åtgången och 2–3 strykningar från Bauhaus. | Jotun, Tekniskt datablad DRYGOLIN Nordic Extreme Halvblank, produktkod 39882, utgivningsdatum 11.06.2026, https://jotundatasheetsprod.blob.core.windows.net/tds/TDS%C2%A439882%C2%A4DRYGOLIN%20Nordic%20Extreme%20Halvblank%C2%A4Swe%C2%A4SE.pdf. Citat: "Generisk typ: En unik formulering med specialakryl och alkyd."; "Rekommenderad, ohyvlat trä: 6-8" och "Rekommenderad, hyvlat trä: 8 - 12" (m²/liter per strykning); "Applicera 3 strykningar DRYGOLIN Nordic Extreme på nytt hyvlat trä och 2 strykningar på ohyvlat trä." **Allt stämmer:** typ, 6–8, 8–12 och 2–3. **Övermålningsbar 2 h:** Jotuns svenska produktsida, https://www.jotun.com/se-se/decorative/products/exterior/all-exterior-products/drygolin-nordic-extreme, odaterad: "Övermålningsbar efter 2 tim". Faktabladet sa att den svenska sidan kräver inloggning, men den gick att läsa 2026-09-30. **Pris (P):** 3 495 kr för 9 l, Bauhaus, 2026-09-28. |
| 81 | P | **206:** "Nordsjö Tinova Exterior [...] \| 1 699 kr för 10 l, Hornbach" | Nordsjö Tinova Exterior vit 10 l, Hornbach, 2026-09-28. Specifikationerna på raden kommer från nordsjo.se. |
| 83 | P | **207:** "Teknos Nordica Eko [...] \| 1 989 kr för 9 l, Hornbach" | Teknos Nordica Eko bas 1 9 l, Hornbach, 2026-09-28. Specifikationerna kommer från Teknos TDS 2025-10-10. |

## kunskap/tak/papptak.mdx

| Rad | Grupp | Vad källan bär | Ny källa, eller produkt, butik och datum |
|---|---|---|---|
| 53, Bauhaus, TopSafe 3° | P + S | **128:** "Icopal TopSafe 3° kostade 1 349 kronor för en rulle på 7 meter hos Bauhaus den 29 september 2026, och rullen täcker 6,1 kvadratmeter. Det blir 221 kronor per kvadratmeter. Ett förråd med 15 kvadratmeter tak behöver tre rullar". Enligt faktabladet (`kunskap-papptak.md` rad 106) är "6,1 m² per rulle (butiken)". | **Pris (P):** Takpapp kolsvart TopSafe 3° 1 × 7 m, Bauhaus, 2026-09-29. **6,1 m²: ingen källa hos BMI.** BMI, produktblad TopSafe 3°, 2021-11-24, https://store.bmigroup.com/medias/TopSafe-3-Produktblad.pdf?context=bWFzdGVyfHJvb3R8OTIxNzExfGFwcGxpY2F0aW9uL3BkZnxhR0ZrTDJnMlppODVNRE01TVRnME1EQXpNVEF5TDFSdmNGTmhabVZmTTE5UWNtOWtkV3QwWW14aFpDNXdaR1l8Y2QxYzI4Mzg3Mjk4NDVmMmVlMjg5YjQyMjM1MzI1MjYxZjRlNjBiMTZiNTg4ZTU4ODRkZGU5MzVhNmJjZDQyYg anger "Dimension 7x1 m", "Vikt per rulle Ca 29 kg" och "har en 10 cm bred självhäftande asfaltkant", men ingen täckande yta. Produktsidan bmisverige.se anger inte heller någon. Samma adress utan `?context=` ger 400. BMI:s monteringsanvisning (2022-08-26) gav 400 i dag och är inte omläst. Enligt papptaksbladet har den tvärskarv 45 cm och klisterkant 10 cm. **221 kr/m² och "tre rullar" vilar på 6,1 och faller om det talet stryks.** |

## kunskap/tak/plattak.mdx

| Rad | Grupp | Vad källan bär | Ny källa, eller produkt, butik och datum |
|---|---|---|---|
| 25 | P | **113:** "Hos Hornbach kostade takpanneplåt från Lindab 229 kronor per kvadratmeter [...] den 28 september 2026." | Takpanneplåt Lindab LPE Norrviken svart 1 530 × 1 080 × 0,5 mm, Hornbach, 2026-09-28 (229 kr/m², 377,85 kr/st enligt `kunskap-plattak.md` rad 129) |
| 27 | P | **113:** "och trapetsplåt från samma tillverkare 185 kronor" | Takplåt Lindab LLP20 Förslöv svart 2 500 × 1 000 × 0,5 mm, Hornbach, 2026-09-28 (185 kr/m², 462,50 kr/st) |
| 53, Benders produktblad Palema, Exklusiv, Carisma (Beijer) | D | **151:** "Själva plåten i Plannjas takpanneplåt Royal väger 4,9 kilo per kvadratmeter, medan själva pannorna i Benders betongpannor väger 36 till 51 kilo enligt Benders produktblad." Beijer-kopian (odaterad): Palema "ca 36 kg", Exklusiv "ca 42 kg", Carisma "ca 51 kg" (Vikt/m²). | Benders egna produktblad, märkta "BENDERS I SE I 2026 - 02": Palema https://www.benders.se/globalassets/c4-assets/document/PB-SE-2026-TAK-Palema-2kupig-0200-HU.pdf ("Vikt kg/m² ca 36 kg"); Exklusiv https://www.benders.se/globalassets/c4-assets/document/PB-SE-2026-TAK-Exklusiv-1kupig-0100-HU.pdf ("Vikt kg/m² ca 42 kg"); Carisma https://www.benders.se/globalassets/c4-assets/document/PB-SE-2026-TAK-Carisma-platt-C000-HU.pdf ("Vikt kg/m² ca 51 kg"). **Stämmer:** 36 till 51. **Avvikelse att känna till:** Carismas minsta lutning är "min 18°" i bladet från 2026, mot "min 14°" i Beijer-kopian. Det rör inte rad 151, men `papptak.mdx` rad 65 säger "Benders betongpannor kräver minst 14 graders lutning". |

## kunskap/tak/snorasskydd.mdx

| Rad | Grupp | Vad källan bär | Ny källa, eller produkt, butik och datum |
|---|---|---|---|
| 45, Benders Monteringsanvisning Taksäkerhet 2021-03, s. 14–15 (Beijer) | D | **214–216 (tabell):** "Benders, 36 till 44° \| 900 \| 600 \| 450 \| 300 \| 300"; "22 till 35° \| 900 \| 750 \| 600 \| 450 \| 300"; "14 till 21° \| 900 \| 900 \| 750 \| 750 \| 600". **221:** "Källa: Benders, Monteringsanvisning Taksäkerhet, 2021-03, s. 14 och 15". **223:** "250, 500 eller 750 mm för Exklusiv, 210, 420 eller 630 mm för Hansa, och 346 eller 692 mm för Tvilling. På korta sträckor upp till ungefär 3 meter är Benders råd 600 mm." **121:** "25 x 120 mm hos Benders [...] På Hansa och Tvilling ska falsarna på pannans ovansida slipas ur." **208:** "hindret får bara sitta på hus där fasaden är lägre än 4 meter, och du får inte fästa en livlina i det". **251 (Faq):** "Benders och TJB använder snökrokar [...] i takdalar". | Benders, Monteringanvisning Taksäkerhet, Snöglidhinder, art nr 0817xx, märkt "BENDERS I SE I 2026 - 05", s. 2/3 och 3/3, https://www.benders.se/globalassets/c4-assets/document/MA-SE-2026---TAK-Taksakerhet-Snoglidhinder-HU.pdf. **Tabellen (6 meter mellan glidhinder) är oförändrad:** "36 - 44º 900 600 450 300 300", "22 - 35º 900 750 600 450 300", "14 - 21º 900 900 750 750 600". Oförändrat är också "Exklusiv (betong) bredd 250 mm, mått 250/500/750. Hansa (lertegel) bredd är 210 mm, mått 210/420/630. Tvilling (lertegel) bredd är 346 mm, mått 346/692.", "Vid korta sträckor upp till ca 3 m rekomenderas 60 cm avstånd.", "Monteras på hus med fasadhöjd under 4 m. Snöglidhindret är ej godkänt som livlinefäste." och "i ränndalar, kan man med fördel komplettera med snökrok". **Ändrat mot 2021:** brädan är "Infästningsbräda 22-25 x 120 mm" (2021: "25 x 120 mm"), och falsarna ska slipas "På Hansa, Tvilling och Piano" (2021: Hansa och Tvilling). Sidhänvisningen "s. 14 och 15" gäller inte den nya filen. |
| 61, TJB Förenklat snörasskydd, monteringsanvisning (Byggmax) | D | **105:** "högst 600 mm mellan konsolerna och minst tre stycken på TJB:s snöglidhinder". **111:** "TJB:s skydd går att sätta på stålplåt ned till 0,4 mm, om det sitter en konsol på varje plåtskarv och minst en mellan två skarvar och du förborrar med en borr på 3,5 mm." **121:** "22 x 120 mm hos TJB". **208** och **235:** fasadhöjd under 4 meter, ingen livlina. **251 (Faq):** snökrokar. | TJB har anvisningen i två delar på sin egen CDN, båda daterade 2021-11-12. **D1** (betong och lertegel): https://cdn.prod.website-files.com/5f2cef9299332acf3b0f7823/68539c4b8c814d6ce05eb27a_D1%20mont%20Konsol%20till%20fo%CC%88renklat%20sno%CC%88rasskydd%20sno%CC%88glidhinder%2020211112.pdf: "Korta sektioner över dörrar och portar monteras med max 600 mm konsolavstånd och min tre konsoler." och "fäst montagebräda (22 x 120 mm eller vid lätt undertak min 40 x 70 mm regel)". **D2** (plåt och papp): https://cdn.prod.website-files.com/5f2cef9299332acf3b0f7823/6194b992a9e483ab7551e42c_D2%20mont%20Konsol%20till%20f%C3%B6renklat%20sn%C3%B6rasskydd%20sn%C3%B6glidhinder%2020211112.pdf: "Montering stålplåt 0,4 mm el aluplåt min 0,7 mm" och "Montera en konsol på varje plåtskarv (förborra i dubbelplåt 3,5 mm) samt montera minst en konsol däremellan". **4 m och livlina:** TJB:s produktsida https://www.tjb.se/produkt/konsol-och-ror-till-forenklat-snorasskydd-pa-betong-lertegeltak (odaterad): "Livlina får ej fästas i Förenklat snörasskydd." och "Tvårörskonsol för hus upp till 4 meters fasadhöjd för betong-/lertegeltak." Sidan gäller konsolen för pannor, och jag hittade ingen motsvarande sida för plåtkonsolen 6340. **Snökrok:** TJB:s avståndstabell 2023-09-18, som redan står i kallor. **Alla tal stämmer.** Byggmax-kopian skriver "aluminiumplåt min 0,4 mm" och D2 skriver "min 0,7 mm", men sidan nämner bara stål. |
| 65 | P | **229:** "TJB snörasskydd för plåttak, förenklat, två rör \| Byggmax \| 1 099 kr \| 2,33 m \| 472"; **233:** "Källa: butikernas produktsidor". Längden 2,33 m styrks av TJB:s avståndstabell 2023-09-18: "Artikelnr 684XXX, paket 2,33 m eller 1,53 m." | Snörasskydd plåt/papp tak svart, TJB, Byggmax, 2026-09-28 |
| 67 | P | **230:** "CW Lundberg snörasskydd för betongtegel, komplett för råspont \| Bauhaus \| 1 895 kr \| 2,5 m \| 758" | Snörasskydd CWL för betongtegel röd 2,5 m, Bauhaus, 2026-09-28. "Komplett för råspont" och 2,5 m är artikelns beteckning och är inte kontrollerade hos CW Lundberg. |
| 69 | P | **231:** "BMI snörasskydd Jönåker, komplett paket \| Bauhaus \| 2 795 kr \| 1,2 m \| 2 329"; **235:** "BMI:s paket är bara 1,2 meter långt" | Snörasskydd svart Jönåker 1,2 m, Bauhaus, 2026-09-28. Längden är artikelns beteckning och är inte kontrollerad hos BMI. |
| 71 | P | **237:** "Benders snöglidhinder köper du i delar på Hornbach, där hindret kostar 189 kronor för en meter" | Snöglidhinder Benders svart, Hornbach, 2026-09-28. "1 meter" styrks av Benders (2021-03: "Snöglidhinder, 1 meter"). |
| 73 | P | **237:** "och konsolen 199 kronor. Tio meter med konsolerna på c 900 mm blir 10 hinder och 13 konsoler, 4 477 kronor" | Konsol för snöglidhinder Benders svart, Hornbach, 2026-09-28 |

## kunskap/tak/takstolar.mdx

| Rad | Grupp | Vad källan bär | Ny källa |
|---|---|---|---|
| 61, Plannja, PlannjaPro 2016, produktblad Royal (Beijer) | D | **137:** "Plannjas takpanneplåt Royal kräver minst 14 grader". Beijer-kopian (PlannjaPro 2016): "Plannja Royal [...] VIKT/M2 STÅL: 4.9 kg [...] MINSTA TAKLUTNING: 14°". | **Ingen läsbar källa hos Plannja i dag.** `se-plannja-montering-royal-regent-2026-1.pdf` och `-2026-2.pdf` på plannja.se ger **404**, både med och utan `sfvrsn`. Det är samma adress som `plattak.mdx` har i kallor, så den länken är också död. Produktsidan `plannja-royal_57023` (konsument och proffs) ger också 404. Plannjas produktkatalog för tak och fasad 2025-2, "Reviderad 2026-09-30", https://www.plannja.se/docs/default-source/documents-se/produktbroschyr/se-plannja-produktkatalog-tak-fasad-2025-2.pdf?sfvrsn=1a702585_47, har i textuttaget inget avsnitt om Royal, bara om Regent: "Tjocklek: 0,5 mm \| Vikt/m2: 4,7 kg \| Minsta taklutning: 14 grader". Byggkatalogen (Svensk Byggtjänst, uppdaterad 2025-12-16) anger ingen lutning för Royal. Det finns en återförsäljarkopia 2024 på media-prod.beijerflow.com (Beijer), men den är också butikens server. **Påståendet står i dag utan tillverkarkälla.** Om Royal är utgången har jag inte kunnat se. |

---

## Sidor jag inte kunde läsa

- se.weber: produktsidan och databladet för rapid grout gav 403 (Cloudflare).
- store.bmigroup.com: monteringsanvisningen för TopSafe 3° (2022-08-26) och produktbladet utan `?context=` gav 400.
- plannja.se: monteringsanvisningarna för Royal och Regent 2026-1 och 2026-2 samt produktsidan för Royal gav 404.
- Hornbach och Bygghemma lästes inte om. Citaten ur dem kommer från faktabladet `guider-byta-bankskiva.md`.

## Nya källor

```yaml
kallor:
  # byta-bankskiva
  - titel: LG Collection, Vi har bänkskivor för alla kök (odaterad, läst 2026-09-30)
    url: https://www.lgcoll.se/vi-har-bankskivor-for-alla-kok/
  - titel: Vedum, Produktguide kök 2026, standardsortiment, s. 8 (2026-03-09)
    url: https://www.vedum.se/globalassets/dokument/kok/produktguider/produktguide_kok_2026_260309.pdf
  # kakla-kok
  - titel: Byggkeramikrådet, Byggkeramikhandboken (odaterad, läst 2026-09-30)
    url: https://www.bkr.se/teknik/byggkeramikhandboken
  # Ej läst (403). Ska bara ersätta Beijer-kopian om någon kan öppna den och kontrollera talen.
  - titel: Weber, rapid grout, produktdatablad (se.weber, mapp 2023-05; ej kontrollerad)
    url: https://www.se.weber/files/se/2023-05/PDS-SE-weber_rapid_grout.pdf
  # mala-koksluckor (Caparol står redan i kallor)
  - titel: Alcro, Måla möbler och snickerier (odaterad, läst 2026-09-30)
    url: https://alcro.se/tips-rad/mala-inomhus/mala-mobler-snickerier
  # u-varde
  - titel: ROCKWOOL, Vindsull, produktblad, DOP-510964 (odaterat, läst 2026-09-30)
    url: https://brandcommunity.rockwool.com/asset/IpLyb_5qrJQPKZjk0BmOgQ/asset.pdf?quality=10
  # valja-fasadfarg
  - titel: Jotun, DRYGOLIN Nordic Extreme Halvblank, tekniskt datablad (utgivet 2026-06-11)
    url: https://jotundatasheetsprod.blob.core.windows.net/tds/TDS%C2%A439882%C2%A4DRYGOLIN%20Nordic%20Extreme%20Halvblank%C2%A4Swe%C2%A4SE.pdf
  - titel: Jotun, DRYGOLIN Nordic Extreme, produktsida (läst 2026-09-30)
    url: https://www.jotun.com/se-se/decorative/products/exterior/all-exterior-products/drygolin-nordic-extreme
  # papptak (stöder rullens mått, inte 6,1 m²)
  - titel: BMI, TopSafe 3°, produktblad (2021-11-24)
    url: https://store.bmigroup.com/medias/TopSafe-3-Produktblad.pdf?context=bWFzdGVyfHJvb3R8OTIxNzExfGFwcGxpY2F0aW9uL3BkZnxhR0ZrTDJnMlppODVNRE01TVRnME1EQXpNVEF5TDFSdmNGTmhabVZmTTE5UWNtOWtkV3QwWW14aFpDNXdaR1l8Y2QxYzI4Mzg3Mjk4NDVmMmVlMjg5YjQyMjM1MzI1MjYxZjRlNjBiMTZiNTg4ZTU4ODRkZGU5MzVhNmJjZDQyYg
  # plattak, ersätter Benders produktblad via Beijer
  - titel: Benders, produktblad Palema 2-kupig (2026-02)
    url: https://www.benders.se/globalassets/c4-assets/document/PB-SE-2026-TAK-Palema-2kupig-0200-HU.pdf
  - titel: Benders, produktblad Exklusiv 1-kupig (2026-02)
    url: https://www.benders.se/globalassets/c4-assets/document/PB-SE-2026-TAK-Exklusiv-1kupig-0100-HU.pdf
  - titel: Benders, produktblad Carisma platt (2026-02)
    url: https://www.benders.se/globalassets/c4-assets/document/PB-SE-2026-TAK-Carisma-platt-C000-HU.pdf
  # snorasskydd, ersätter Benders taksäkerhet via Beijer
  - titel: Benders, Monteringsanvisning Taksäkerhet, Snöglidhinder (2026-05)
    url: https://www.benders.se/globalassets/c4-assets/document/MA-SE-2026---TAK-Taksakerhet-Snoglidhinder-HU.pdf
  # snorasskydd, ersätter TJB via Byggmax
  - titel: TJB, Monteringsanvisning D1, konsol till förenklat snörasskydd på betong- och lertegeltak (2021-11-12)
    url: https://cdn.prod.website-files.com/5f2cef9299332acf3b0f7823/68539c4b8c814d6ce05eb27a_D1%20mont%20Konsol%20till%20fo%CC%88renklat%20sno%CC%88rasskydd%20sno%CC%88glidhinder%2020211112.pdf
  - titel: TJB, Monteringsanvisning D2, konsol till förenklat snörasskydd på plåt- och papptak (2021-11-12)
    url: https://cdn.prod.website-files.com/5f2cef9299332acf3b0f7823/6194b992a9e483ab7551e42c_D2%20mont%20Konsol%20till%20f%C3%B6renklat%20sn%C3%B6rasskydd%20sn%C3%B6glidhinder%2020211112.pdf
  - titel: TJB, Konsol och rör till förenklat snörasskydd, produktsida (läst 2026-09-30)
    url: https://www.tjb.se/produkt/konsol-och-ror-till-forenklat-snorasskydd-pa-betong-lertegeltak
```
