# Faktablad: avfuktare i kalla utrymmen (förråd, sommarstuga, jordkällare)

Beställt av affiliateagenten 2026-10-07 för utbyggnaden av `/fukt/avfuktare-garage/` (omgång F, F5). Ingen publik text. Allt läst **2026-10-07** om inget annat står. PM = Proffsmagasinet. **Ordagrant** = kopierat ur dokumentets text (curl + pdftotext eller HTML). **Avläst** = värde läst ur ett diagram (bild) av oss, ungefärligt. **Utdrag** = sökmotorns sammanfattning, sidan inte läst. Egen räkning är märkt med formel.

Bygger på och upprepar inte: `docs/briefer/underlag-avfuktare-garage-2026-09-29.md`, `docs/briefer/faktablad/guider-avfuktare-garage.md`, `docs/briefer/underlag-avfuktare-vind-2026-10.md` del B, `docs/briefer/faktablad/fukt-gemensamma-tal.md` avsnitt 5.

---

## 0. Besked

- **Jordkällaren ska vara fuktig.** Länsstyrelsen i Västra Götaland: rotfrukter "+1-3 grader C och en relativ luftfuktighet 90-95 procent", potatis "+3-7 grader C och en relativ luftfuktighet 85-90 procent". En avfuktare i en jordkällare med rotfrukter motverkar förvaringen. Ingen av de sex tillverkarna nämner jordkällare eller matkällare. Avsnitt 3.
- **Kondensmaskinen (Wood's MDK21) stänger av under +5 °C.** Wood's råder själv att hålla rummet över +5 med "värmeelement eller värmefläkt" eller "frostvakt", i samma manual som förbjuder förvaring i rum med ständigt använda elektriska värmare (R290). Ett ouppvärmt förråd eller sommarstuga på vintern ligger utanför vad Wood's anger.
- **Alla fem sorptionsmaskiner anger −20 till +40 °C.** Men Drybox X4 avfuktar i program 1 bara "Vid temperaturer över +4°C", och i mögelprogrammen släpper den upp fukten till ca 70 eller 80 % under 0 °C.
- **Ingen tillverkare skriver något om att vatten fryser i tank eller slang.** Sorptionsmaskinerna har ingen tank. Fresh, Acetec RCF och Drybox varnar för kondens i våtluftsslangen (luta nedåt, isolera, kort slang), utan att nämna frost.
- **Förråd och fritidshus nämns ordagrant av Acetec (6H 2.0), Fresh och Wood's ("sommarstugor").** Drybox nämner "sommarstuga" och "sommarstugor". Acetec RCF 12 nämner krypgrund, kallvind och garage; förråd bara hos PM.
- **Pris och lager har ändrats sedan 30 september.** Acetec 6H 2.0 och RCF 12 G1 är i lager i dag (var restnoterade). Fresh D-800 7 211 kr (var 7 250). Inga kampanjpriser.

---

## Del 1. Pris och lager hos PM i dag

Källa: PM:s produktsidor, `__INIT_STATE__`, en curl per adress utan `-L`, 2026-10-07. Alla sex svarade **200**, `redirect_url` tomt. Fält: `Price.ListPrice.AmountWithTax`, `GtmStockInfo.StockQuantity/StockStatus`, `Status.Availability.B2C`.

- `Discount`, `SalePrice` och `LowestHistoricalPrice` **finns inte** i produktdatan för någon av de sex (fälten finns bara på varor med kampanj; produktens `Campaigns: []` på alla sex). Alltså: inget nedsatt pris, inget jämförpris.
- `AvailableForPurchase` **finns inte** i produktdatan för någon av de sex (fältet förekommer på PM bara för varor som inte är i lager). Alla sex är `InStock` i B2C.

| slug | art.nr (Sku) | ListPrice inkl. moms | Rabatt / SalePrice / LowestHistoricalPrice | StockStatus | StockQuantity | StockText ordagrant | Förra läsningen |
|---|---|---|---|---|---|---|---|
| acetec-evodry-6h-2 | 1150001 | **10 588 kr** | finns ej | InStock | 4 | "Skickas inom 24 timmar!" | 10 588 kr, restnoterad (29/9) |
| woods-mdk21 | VS57632 | **3 118 kr** | finns ej | InStock | 25 | "Skickas inom 24 timmar!" | 3 118 kr, i lager (29/9) |
| acetec-evodry-rcf-12-g1 | 4043420 | **15 455 kr** | finns ej | InStock | 7 | "Skickas inom 24 timmar!" | 15 455 kr, restnoterad (30/9) |
| fresh-d800 | 3055560 | **7 211 kr** | finns ej | InStock | 22 | "Skickas inom 24 timmar!" | 7 250 kr (30/9), 7 211 kr (seed 4/10) |
| fresh-d1200 | 3055561 | **10 995 kr** | finns ej | InStock | 8 | "Skickas inom 24 timmar!" | 10 995 kr, 10 st (30/9) |
| drybox-x4 | 2950004 | **12 763 kr** | finns ej | InStock | 7 | "Skickas inom 24 timmar!" | 12 763 kr, 8 st (30/9) |

Adresser (bas `https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/`):
- acetec-evodry-6h-20-sorptionsavfuktare-1150001
- woods-mdk21-avfuktare-upp-till-70-m-vs57632
- acetec-evodry-rcf-12-g1-sorptionsavfuktare-4043420
- fresh-d800-sorptionsavfuktare-3055560
- fresh-d1200-sorptionsavfuktare-3055561
- drybox-x4-avfuktare-upp-till-250-m-2950004

Butikens egna texter (bara som butiksuppgift, inte prestanda): 6H 2.0 "För mindre utrymmen såsom garage, förråd, mindre källare, fritidshus, båt, husvagn och husbil"; RCF 12 "källare, garage, kallvind, krypgrund och förråd"; Fresh "Drift dygnet runt i temperaturer mellan -20 gr C till +40 gr C"; MDK21 "Arbetsintervall temperatur|+5 till +35ºC". Ordet "Sommar-/fritidshus" står på alla sex sidorna men ser ut att vara sajtens meny, inte produkttext; används inte.

---

## Del 2. Vad tillverkaren säger om kyla, frost och kalla utrymmen

### 2.1 Acetec EvoDry 6H 2.0 (sorption)

Källa: Acetec, "Dokumentation EvoDry 6H 2.0", ref-20100, "Uppdaterad: 7 september 2026" / "Utgivningsdatum: 7 september 2026", https://docs.acetec.se/dokument/ref-20100/ (curl, ordagrant).

| Fråga | Ordagrant |
|---|---|
| Lägsta arbetstemperatur | "Arbetsområde (°C)" "-20 till +40" |
| Ouppvärmda och kalla utrymmen | "Avfuktaren lämpar sig väl för ouppvärmda eller periodvis kalla miljöer med risk för fuktskador, exempelvis båt, husvagn, husbil, förråd, skjul, lager, kylrum, container, täckt bilsläp, källare, sadelkammare och fritidshus." |
| Förråd | "Källare, förråd och bodar: EvoDry 6H 2.0 håller luftfuktigheten nere i mindre ouppvärmda utrymmen där kondens, lukt och mögel annars lätt uppstår." |
| Undantag | "EvoDry 6H 2.0 är inte avsedd för krypgrund eller kallvind. För dessa applikationer rekommenderas EvoDry RCF 12 (art.nr 20012) eller EvoDry RCF 20 (art.nr 20020)." |
| Montering | "Avfuktaren är avsedd för installation endast inomhus eller i väderskyddat utrymme." |
| Frost, avfrostning, frostskydd, frysrisk | ej angivet (sorption, ingen tank; inget om frost i slangen) |
| Jordkällare, matkällare, sommarstuga | ej nämnt. **Fritidshus** och **kylrum** nämns (se ovan) |
| Fläktlägen (relevant för utrymme som står tomt) | "Läge 2: … Fläkten startar dock under 15 minuter var 4:e timme för att cirkulera luft i utrymmet och kontrollera fukthalten." "Läge 3: … under 3 minuter var 12:e timme" |

Kapacitet i kyla, **avläst** ur Acetecs diagram https://docs.acetec.se/wp-content/uploads/2025/11/kapacitetsdiagram-evodry-6h-2-0.jpg ("Kapacitet gr / timme", kurvor 40/60/80 % RF). Liter per dygn = g/h × 24 / 1 000 (egen räkning).

| Temp | 60 % RF | 80 % RF |
|---|---|---|
| 0 °C | ca 120 g/h ≈ 2,9 l/dygn | ca 150 g/h ≈ 3,6 l/dygn |
| 5 °C | ca 160 g/h ≈ 3,8 l/dygn | ca 190 g/h ≈ 4,6 l/dygn |
| 10 °C | ca 195 g/h ≈ 4,7 l/dygn | ca 228 g/h ≈ 5,5 l/dygn |

- 0 och 10 °C vid 60 % står redan i vindunderlaget B5. 5 °C och 80 % är nya.
- **Källorna säger olika** (redan noterat i vindunderlaget): diagrammet ger ca 255 g/h ≈ 6,1 l vid 20/60, tabellen 7,4 l. Tabellen är den uttalade uppgiften; diagramvärdena kan vara låga i samma grad.

### 2.2 Wood's MDK21 (kondens, R290)

Källa: Wood's, "Operating instructions for MDK21 MDK26", "Revision date: 2022-05-02", https://woods.se/wp-content/uploads/2024/12/woods_manual_mdk21_mdk26pdf.pdf (curl + pdftotext, svenska delen s. 12–15, ordagrant). PM:s bilaga (https://pm-asset.azureedge.net/api/asset-download?id=AssetDocument29471753) är en **äldre revision**, "Revision date: 20-May, 2019"; används inte.

| Fråga | Ordagrant |
|---|---|
| Lägsta arbetstemperatur | "Rekommenderade gränser för användning: Temp. MDK +5°C to +35°C Relativ fuktighet: 30% to 90%" (s. 14) |
| Under +5 °C | "Wood's avfuktare är utrustade med styrsystem som ser till att kylslingorna avfrostas vid behov. Styrsystemet stänger av kompressorn, vilket gör att kylningen av slingorna upphör. Fläkten fortsätter att dra den rumstempererade luften genom avfuktaren och på så sätt smälter isen och vattnet rinner ner i behållaren. Notera att detta styrsystem gör att avfuktaren fungerar vid så låg temperatur som +5°C. Vid lägre temperatur stänger avfuktaren av automatiskt" (s. 14) |
| Felsökning | "Avfuktar ej" … "-Temperaturen eller den relativa fuktigheten i rummet är för låg." → "Avfuktningen fortlöper när fuktighetsnivån är högre än 35% och temperaturen i utrymmet är högre än +5°C." (s. 12) |
| Frost, råd | "-Använd en frostvakt om temperaturen faller under +5°C" (s. 14). "Man kan med fördel använda ett värmeelement eller värmefläkt för att hålla temperaturen ovan +5°C." (s. 13) |
| Kontrollpanelen | "Avfuktaren är utrustad med ett automatiskt avfrostningsystem för att förhindra att maskinen fryser" (s. 15) |
| Frysrisk i tank eller slang | ej angivet |
| Sommarstuga, kalla miljöer | "En avfuktare kan användas bland annat i källare, tvättstugor, garage, husvagnar, sommarstugor och i båtar. Kommer avfuktaren att stå i kallare miljöer bör du titta närmare på tipsen i slutet av manualen." Och: "De används med gott resultat i utrymmen som lätt blir fuktiga, såsom källare, garage eller sommarstugor." (s. 13) |
| Varför temperaturgränsen | "Vid kallt väder sjunker den absoluta fuktigheten och därmed minskar våra avfuktarens fuktuttag ur luften. Därför är avfuktaren anpassad att användas i temperaturintervallet +5°C to +35°C." (s. 13) |
| Inomhus | engelska delen: "This device is only for indoor use." Svenska: "avsedd att användas i hushållsliknande tillämpningar såsom: - källare, krypgrunder, pentryn i butiker, på kontor och liknande arbetsmiljöer." |
| Motsägelsen | "Produkten ska inte förvaras i ett rum där kontinuerligt använda tändkällor finns (till exempel; öppen eld, gasvärmare eller elektriska värmare)." Samma häfte råder värmefläkt eller frostvakt under +5. Redan noterat i garagefaktabladet. |
| Förråd, jordkällare, matkällare, fritidshus | ej nämnt (bara "sommarstugor") |
| Kapacitet vid 5–10 °C | ej angivet (bara 20 l vid 30 °C/80 %) |

### 2.3 Fresh D-800 och D-1200 (sorption)

Källa: Fresh, "Fresh Avfuktare D-800/D-1200" bruksanvisning, dokument 008634-A_200116, PM-bilaga https://pm-asset.azureedge.net/api/asset-download?id=AssetDocument70505787 (curl + pdftotext, ordagrant). Samma text för båda modellerna.

| Fråga | Ordagrant |
|---|---|
| Lägsta arbetstemperatur | "Drifttemperatur" "-20oC till +40oC" (båda, tekniska data s. 14; tabellen förskjuten i texten) |
| Kyla och ouppvärmt | "Tack vare sorbtionstekniken har denna avfuktare 3-4 gånger så hög prestanda jämfört med kompressoravfuktare vid temperaturer under 10 °C. Där kompressoravfuktare slutar att fungera vid 5 °C fortsätter enheter med sorbtionsteknik att torka luft ända ned till -20 °C, vilket gör dem idealiska för ouppvärmda rum och uthus." (s. 4) |
| Användning | "boytor, vindar, källare, båtar, fritidshus, garage och lagerutrymmen" (s. 4) |
| Inomhus | "Enheten är avsedd för inomhusbruk." (s. 2). "Modellerna har konstruerats för inomhusbruk men kan placeras i eller utanför det rum som ska torkas." (s. 9) |
| Kondens i slangen | "Utloppet 'fuktig luft ut' från avfuktaren bör luta nedåt där så är möjligt om det finns en risk för att kondens bildas i utloppskanalen och rinner tillbaka till avfuktaren. Detta kan undvikas antingen med korta kanallängder … eller tillräcklig isolering av kanalen". "Drag omedelbart ut kontakten ur vägguttaget om du ser att vatten droppar från avfuktaren." "Använd inte avfuktaren om det finns minsta misstanke om att den inte är helt torr inuti." (s. 11) |
| Frost, avfrostning, frostskydd, frysrisk | ej angivet |
| Förråd, jordkällare, matkällare | ej nämnt. **Fritidshus**, **lagerutrymmen** och **uthus** nämns |
| Kapacitet vid 5–10 °C | **ej angivet i liter.** Bara "3-4 gånger så hög prestanda jämfört med kompressoravfuktare vid temperaturer under 10 °C". Kapacitet bara vid 27 °C/60 % (6 resp. 10 l) och 35 °C/90 % (8 resp. 12 l) |

- Två ord att notera: Fresh säger "inomhusbruk" och "uthus" i samma häfte. Uthus är en byggnad, alltså inomhus i den meningen. Egen läsning.
- "slutar att fungera vid 5 °C" är Fresh om kompressoravfuktare i allmänhet, inte om någon viss maskin.

### 2.4 Drybox X4 (sorption)

Källor: Drybox "MANUAL AVFUKTARE", PM-bilaga https://pm-asset.azureedge.net/api/asset-download?id=AssetDocument29528728, odaterad (curl + pdftotext, ordagrant). Drybox produktsida https://drybox.se/produkter/drybox-x4/, `dateModified` 2026-08-19 (curl, ordagrant).

| Fråga | Ordagrant |
|---|---|
| Lägsta arbetstemperatur | "Sorptionstekniken avfuktar effektivt inom temperaturområdet -20°C till +40°C" (manualen s. 2; allmänt om tekniken, inte i ett datablock för X4) |
| Produktsidan | "Drybox X4 är en effektiv adsorptionsavfuktare utvecklad för utrymmen med låga temperaturer och kan avfukta även vid minusgrader." |
| Program 1 (under +4 °C) | "Vid temperaturer över +4°C sker avfuktning tills luftfuktigheten når inställt RF-värde. Fläkten går kontinuerligt vid temperaturer över +2°C. Vid lägre temperaturer stannar fläkten men startar efter 4 timmar." (s. 6) |
| Program 2 | "Avfuktning startar när luftfuktigheten överstiger valt RF-värde. Fläkten går kontinuerligt oavsett temperatur." |
| Program 3 | "Avfuktning och fläkten går kontinuerligt oberoende av luftfuktigheten, under förutsättning att temperaturen överstiger +2°C. Vid lägre temperaturer stannar fläkten men startar efter 4 timmar för att rotera luften i 15 minuter och bedöma aktuell status." |
| Program 4 | "Avfuktning och fläkt går kontinuerligt oberoende av luftfuktighet och temperatur." |
| Program 5 och 6 (under 0 °C) | "För temperaturer högre än +15°C regleras luftfuktigheten till inställt RF-värde. Vid temperaturer mellan 0 och +15°C minskar reglervärdet för luftfuktigheten 1% per grad C. Detta innebär att vid temperaturer lägre än 0°C regleras luftfuktigheten till ca 70%." (program 5, 55-läget); "ca 80%" (program 6, 65-läget) |
| Vilket program X4 levereras i | ej angivet i manualen (vindunderlaget: PM skriver 65 % och mögelindex, motsvarar program 6) |
| Frost, avfrostning, frostskydd, frysrisk | ej angivet |
| Sommarstuga | manualen s. 3: "krypgrunder, källare, tvättstugor, badrum, sommarstugor och garage". Produktsidans FAQ: "källare, garage, kallvind, sommarstuga, husbil, husvagn, båt, hobbyflygplan, lagerlokal och byggarbetsplats. De är särskilt effektiva i utrymmen där konventionella avfuktare som kondensavfuktare kanske inte är lika effektiva på grund av temperaturförhållanden. såsom krypgrunder och kallvindar samt alla utrymmen som är kallställda." |
| Förråd, jordkällare, matkällare, fritidshus | ej nämnt ("lagerlokal" och "alla utrymmen som är kallställda" nämns) |
| Kapacitet vid 5–10 °C | **ej angivet.** 19 l/dygn utan villkor |

- **Manualen motsäger sig själv i program 5/6:** texten säger att reglervärdet "minskar" 1 % per grad, men slutsatsen (55 → ca 70 %, 65 → ca 80 % under 0 °C) betyder att tillåten RF **ökar** när det blir kallare. Siffrorna 70 och 80 är det uttalade; ordet "minskar" skrivs inte vidare.
- Konsekvens för en sommarstuga i minusgrader (egen läsning): i program 1 avfuktar X4 inte alls under +4 °C; i program 5/6 tillåter den 70–80 % under 0 °C. Bara program 2 och 4 avfuktar "oavsett temperatur".

### 2.5 Acetec EvoDry RCF 12 G1 (sorption)

Källa: Acetec, "Dokumentation EvoDry RCF 12 G1", ref-20012, "Uppdaterad: 26 maj 2026", https://docs.acetec.se/dokument/ref-20012/ (curl, ordagrant). Diagram https://docs.acetec.se/wp-content/uploads/2025/11/kapacitetsdiagram-rcf-12-1.jpg ("Liter / Dygn").

| Fråga | Ordagrant |
|---|---|
| Lägsta arbetstemperatur | "-20 till +40" |
| Kyla i styrningen | "Fuktinställning gäller i detta fall alltid vid 15°C. Fukthalten tillåts stiga med 1% per grad °C lägre temperatur är +15°C. Funktionen är endast aktiv i temperaturområdet 0-15°C." (läge RF + temp). Läge RF: "arbetar avfuktaren mot det inställda fuktvärdet utan hänsyn till temperatur." |
| Användning | "Krypgrund", "Kallvind", "Garage: I garage uppstår ofta hög fuktbelastning från fordon, portar och temperaturskillnader. En RCF-avfuktare håller luften torr och skyddar byggnad, inredning och verktyg mot skadliga fuktnivåer." |
| Montering | "Avfuktaren är avsedd för installation endast inomhus eller i ett väderskyddat utrymme." Panelen: "Placera den inte på kallvind eller i krypgrund." / "Monteringen ska ske i ett varmt och väderskyddat utrymme." |
| Kondens i slangen | "Våtgasslangen ska hållas så kort som möjligt för att undvika kondensbildning i slangen. Slangen kan även isoleras utvändigt eller, om möjligt, monteras med fall (lutning) mot utloppsplåten." Kondenshål "ca 3–5 mm" i lägsta punkten. |
| Frost, avfrostning, frostskydd, frysrisk | ej angivet |
| Förråd, fritidshus, sommarstuga, jordkällare | ej nämnt hos Acetec (förråd bara i PM:s text) |

Kapacitet, **avläst** (0 och 10 °C redan i vindunderlaget B6; 5 °C ny, mellan diagrammets markerade punkter, alltså ur den ritade kurvan):

| Temp | 60 % RF | 80 % RF |
|---|---|---|
| −10 °C | ca 3,6 l/dygn | ca 4,3 l/dygn |
| 0 °C | ca 6,7 | ca 7,9 |
| 5 °C | ca 8,2 (kurva, ingen punkt) | ca 9,4 (kurva, ingen punkt) |
| 10 °C | ca 9,6 | ca 10,8 |
| 20 °C | 12 (= databladet) | ca 13,0 |

### 2.6 Sammanställning kapacitet vid 5–10 °C

| Maskin | 5 °C | 10 °C | Typ av uppgift |
|---|---|---|---|
| Acetec 6H 2.0 | ca 3,8 (60 %) / 4,6 (80 %) l | ca 4,7 / 5,5 l | avläst, egen omräkning g/h → l |
| Acetec RCF 12 G1 | ca 8,2 / 9,4 l | ca 9,6 / 10,8 l | avläst |
| Fresh D-800 / D-1200 | ej angivet | ej angivet | – |
| Drybox X4 | ej angivet | ej angivet | – |
| Wood's MDK21 | ej angivet; under +5 stänger av | ej angivet | – |

---

## Del 3. Myndigheter och oberoende källor om jordkällare och fritidshus

| # | Källa | Rang | Ordagrant | Adress | Datum | Läst |
|---|---|---|---|---|---|---|
| M1 | Länsstyrelsen i Västra Götalands län och Göteborgs universitet, "Ta hand om din jordkällare" (serien Agrarhistoria i Västra Götaland) | myndighet (kulturmiljö, inte föreskrift) | "Jordkällarens höga luftfuktighet och låga temperatur över fryspunkten gör att det är mycket gynnsamt att lagra rotfrukter i den. Avdunstningen från växtdelar upphör nästan helt vid 90-95 procent relativ luftfuktighet i den omgivande luften." "Rotfrukter till exempel morot, kålrot, rotselleri och rödbetor ska förvaras vid +1-3 grader C och en relativ luftfuktighet 90-95 procent." "Potatis vill ha det mörkt och +3-7 grader C och en relativ luftfuktighet 85-90 procent." "Frukt ska förvaras vid +-3 grader C och 90 procent relativ luftfuktighet." (tryckt s. 32). "I en jordkällare är det självdragsprincipen som gäller. På vintern kommer kall luft in … luften byter långsamt värme till jordkällarens, +1-3 grader C." "Frånluftsventilen kan täppas till på vintern med halm eller liknande." (s. 27). "Idag kan man sätta in en frostvakt om det finns el eller värmeljus." Och: "under första vintern kontrollmäta temperaturen … och sätta in en hygrometer som mäter luftfuktigheten." | https://catalog.lansstyrelsen.se/store/13/resource/2920 (PDF, 15 s.) | tryckt 2015 | 2026-10-07, ordagrant |
| M2 | Livsmedelsverket, flyer "Ta hand om oss!" (förvaring av frukt och grönt, matsvinn) | myndighet | "Potatis mår bäst av att förvaras mörkt och svalt. Lägg den i en påse som inte släpper in ljus." Kylskåp "+4°". **Ingen RF-uppgift, jordkällare nämns inte.** | https://www.livsmedelsverket.se/globalassets/matvanor-halsa-miljo/matsvinn/flyer-forvaring-frukt-och-gront-minska-matsvinn.pdf | odaterad | 2026-10-07, ordagrant |
| M3 | Folkhälsomyndigheten, FoHMFS 2014:14 (fukt och mikroorganismer) | myndighet, allmänt råd | Gäller enligt sökmotorns sammanfattning bostäder och lokaler för allmänna ändamål där människor vistas mer än tillfälligt. **Fritidshus nämns inte** i utdraget. Utredningsgränsen 7 g/kg står i `fukt-gemensamma-tal.md` T10 | https://www.fohm.se/contentassets/26ea6c0d999742c0a5351c63e70cb0ce/fohmfs-2014-14.pdf | 2014 | **UTDRAG**; adressen svarar inte (DNS, se sist) |

- **M1 är det viktiga.** Det är den enda myndighetskälla som ger RF för en jordkällare, och den säger 85–95 %, alltså högt med flit. Avfuktning nämns inte. Ventilation (självdrag), frostvakt och hygrometer nämns. Att en avfuktare skulle torka ut rotfrukterna är egen slutsats ur M1 ("Avdunstningen … upphör nästan helt vid 90-95 procent"), inte källans ord.
- Jämför (egen läsning, inget nytt tal): M1:s 85–95 % ligger över BFS 2024:8:s 75 % och SBI:s 60 % för rost. En jordkällare för matförvaring och ett förråd för verktyg vill alltså ha motsatta saker.
- Boverket, Energimyndigheten, Jordbruksverket: **inget hittat** om RF eller avfuktning i jordkällare eller fritidshus. Sökträffar om underhållsvärme i fritidshus (minst 10 grader) kom från försäljare och försäkringsbolag, inte myndighet; inte lästa, används inte.
- Länsstyrelsen Gotland (https://www.lansstyrelsen.se/gotland/samhalle/kulturmiljo/bidrag-till-kulturhistoriska-miljoer.html, 200) har enligt sökutdraget ett förenklat bidrag till restaurering av jordkällare 2026–2028, högst 50 % och 30 000 kr. **Utdrag**, sidan hämtad men inte genomläst; utanför beställningen, nämns bara som tips.

---

## Öppet

- Kapacitet vid 5–10 °C saknas för Fresh D-800/D-1200, Drybox X4 och Wood's MDK21. Bara Acetec har diagram, och bara som avläsning.
- Ingen tillverkare säger något om frysrisk för kondens i våtluftsslangen när utloppet går ut i minusgrader. De säger kondens, inte is.
- Drybox X4: vilket program den levereras i står inte i manualen. Ordet "minskar" i program 5/6 går emot de siffror som står.
- Wood's MDK21: vad maskinen gör med vattnet i tanken under +5 (om den fryser) står inte. Bara att den stänger av.
- Jordkällare: om läsaren menar en källare för verktyg och saker (då gäller förrådsreglerna) eller för mat (då gäller M1) måste sidan skilja på. Ingen tillverkare tar upp skillnaden.
- FoHMFS 2014:14:s tillämpning på fritidshus är inte läst i originaltext.

## Sidor som inte gick att läsa

- https://www.fohm.se/contentassets/26ea6c0d999742c0a5351c63e70cb0ce/fohmfs-2014-14.pdf: curl gav ingen anslutning (000), WebFetch "getaddrinfo ENOTFOUND www.fohm.se". Sökmotorns utdrag används, märkt.
- Inga andra. PM (6 adresser), docs.acetec.se (2 sidor, 2 diagram), woods.se-manualen, tre PM-bilagor (Fresh, Drybox ×2, Wood's), drybox.se, Länsstyrelsens PDF och Livsmedelsverkets PDF svarade 200.
