# Affiliate, /krysslaser/, 2026-09-30

Beslut från affiliateagenten om vilka krysslasrar som står på kategorisidan `/krysslaser/`, som är en granskning på datablad. Underlag: `docs/briefer/underlag-krysslaser-2026-09-30.md` (varv 1 och 2, underlagsarbetaren samma dag), `docs/briefer/seo-checklista-2026-09-30/krysslaser.md`, skillen `affiliate`, `docs/AFFILIATE.md` avsnitt 1 till 3, `src/components/vyer/Kategorisida.astro` och `src/lib/produkter.ts`. SQL: `supabase/seed-produkter-2026-09-30.sql`, inte körd. Kommentaren i `supabase/seed.sql` om kategorins spec-nycklar är uppdaterad. Ingen innehållsfil är ändrad.

## Beslut

Kategorimallen visar varje aktiv produkt i kategorin, både i jämförelsetabellen och som ett eget avsnitt med fullt kort och köpknapp, sorterat på pris. Därför har varje rad i tabellen fått samma prövning som ett kort: den ska ha tillverkarens datablad och vara värd en köpknapp på meriter.

Tio modeller i tabellen, alla i lager hos Proffsmagasinet 2026-09-30 och alla med produktadress som svarade 200 utan omdirigering (kontrollerat av underlag och av mig samma dag):

| Slug | Modell | Pris 30/9 | Färg, linjer | mm/10 m | Varför den står här |
|---|---|---|---|---|---|
| `bosch-gll-2-10` | Bosch GLL 2-10 | 1 250 kr | röd, kors | 3 | Billigaste som håller ±0,3 mm/m, IP54, pendellås, 9 h. Sidans modell under 1 500 kr |
| `geo-fennel-geo1x-green` | geo-FENNEL Geo1X-GREEN (butiken: GEO-X1) | 1 610 kr | grön, kors | 3 | Billigaste gröna med ±0,3 mm/m, IP54, mottagarläge och manuell lutning. Tillverkarens datablad bekräftar butikens uppgifter |
| `ryobi-rb360gll` | Ryobi RB360GLL | 2 149 kr | grön, 360° + 1 vertikal | 5 | Billigaste gröna 360°. Enda modellen i intervallet med oberoende mätning: 0 mm/m hos Gör Det Själv, men kvalitet 5 av 10 |
| `bosch-advancedlevel-360` | Bosch AdvancedLevel 360 | 2 252 kr | grön, 360° + 2 vertikala + lodpunkt | 4 | 360° med två vertikaler och lodpunkt för 103 kr mer än Ryobi |
| `dewalt-dw088cg` | DeWalt DW088CG | 2 484 kr | grön, kors | 3 | En av ettans fyra modeller; längst drifttid på AA av de gröna (16 h). Svagare än CLL-C på papperet, står för jämförelsen |
| `milwaukee-cll-c` | Milwaukee CLL-C | 2 543 kr (tidigare 3 391) | grön, kors | 3 | 30 m, mottagarläge, manuellt läge och pendellås, IP54 |
| `bosch-gcl-2-50-g` | Bosch GCL 2-50 G | 2 863 kr | grön, kors + 2 lodpunkter | 3 | Gröna lodpunkter upp och ned, IP64, vridbart fäste RM 10 och måltavla ingår |
| `leica-lino-l2s` | Leica Lino L2s | 3 825 kr | röd, kors | 2 | Noggrannast i tabellen på datablad (±0,2 mm/m), 80 m med mottagare, pendellås |
| `bosch-gll-3-80` | Bosch GLL 3-80 | 4 501 kr | röd, 3 × 360° | 3 | Enda 3 × 360° från en etablerad tillverkare under 5 000 kr i lager |
| `milwaukee-m12-3pl-401c` | Milwaukee M12 3PL-401C | 7 939 kr (tidigare 8 822) | grön, 3 × 360°, Li-ion | 3 | Proffsklassen som checklistan kräver. Bäst belagd av de gröna 3 × 360-kiten: Milwaukees bruksanvisning och sida, och Gör Det Själv mätte 0,2 mm/m |

### Våra val, högst tre

| Slug | Uppgift för etiketten | forVem, sakinnehåll |
|---|---|---|
| `bosch-gll-2-10` | kors för en vägg i taget | kakel eller en skåprad på en vägg inomhus, avstånd under 10 m, vanligt inomhusljus |
| `bosch-advancedlevel-360` | linje runt hela rummet | skåp runt hela köket eller en höjdlinje för undertak i ett rum, inomhus |
| `bosch-gcl-2-50-g` | kors med lodpunkter | innervägg där syllen ska lodas upp till taket, ljusa rum, och den som vill kunna köpa mottagare senare |

Hantverkaren skriver etiketterna och `forVem` i Christians röst. Villkor: konkreta, aldrig "premium", "budget", "testvinnare", "test", "mätt" eller "bäst i test" (SEO-checklistan punkt 12). Ordningen i `val` är den ovan, billigast först; den första blir "Vårt val" på startsidan.

Varför de tre: var och en är den billigaste i tabellen som löser sin uppgift fullt ut. GLL 2-10 gör samma jobb som DW088K för 921 kr mindre. AdvancedLevel 360 har två vertikaler och lodpunkt där Ryobi har en vertikal, och bättre noggrannhet på datablad (4 mot 5 mm på 10 m). GCL 2-50 G är den enda i intervallet med gröna lodpunkter, som är det innerväggen på `/inomhus/bygga-innervagg/` behöver. Geo1X-GREEN är nästan lika bra som GLL 2-10 och grön, men för kakel inomhus under 10 m gör röd samma jobb, och den billigare står först.

Tre Bosch bland valen är ett utfall av meriterna, inte ett mål. Provisionen är densamma per krona oavsett märke.

## Utelämnade, med skäl

- **Ryobi RBCLLG2** (1 495 kr): ±0,5 mm/m, ±3°, ingen IP-klass. Geo1X-GREEN är bättre på varje punkt för 115 kr mer.
- **DeWalt DW088K** (2 171 kr): samma data som GLL 2-10 för 921 kr mer, sämre belagd (IP-klass och våglängd saknas hos DeWalt, mottagaruppgiften bara i butikens text).
- **Bosch GCL 2-15 G** (2 619 kr): GCL 2-50 G har gröna lodpunkter, IP64 och mottagarläge för 244 kr mer.
- **Makita SK105DZ** (2 781 kr): säljs utan batteri och laddare; totalpriset för den som saknar Makita CXT är inte hämtat.
- **Leica Lino L2-1** (4 779 kr): samma instrument som L2s med Li-ion, 954 kr dyrare.
- **DeWalt DCE089D1G** (6 649 kr): DeWalt anger klass 2M på dewalt.de och Proffsmagasinet klass 2; ingen bruksanvisning läst. Om en mottagare ingår säger DeWalts svenska och tyska sida olika. Kan tas in när klassen är utredd.
- **Bosch GLL 12V-100-33 CG** (8 180 kr): att Proffsmagasinets 4070631 är kitet med Li-ion och laddare bygger bara på butiksutdrag, och butiken listar inte innehållet. Den billigare 4072542 är inget kit.
- **Stanley, Ironside, Elma, PELA, Limit, Stabila**: slut i lager eller utanför de etablerade tillverkarna med datablad; Stanley SLL360 fick kvalitet 3 av 10 hos Gör Det Själv.

## Villkor för sidan

1. **Granskning, inte test.** Mallen skriver "Granskas. Vi har inte haft maskinen." under varje kort när ingen testsida finns; det är rätt och ska stå kvar. Nuvarande `title` och `description` i `src/content/kategorier/krysslaser.md` säger att vi mätt, och får inte publiceras (SEO-checklistan punkt 3 och 4).
2. **Reklambandet** sätts av mallen. Inga andra länkar till butiken än köpknapparna.
3. **Ordinarie pris** för CLL-C och M12 3PL visas som "tidigare" i `blyerts-2`, aldrig som rabatt. Båda priserna är nedsatta i dag och ska läsas om före publicering.
4. **Räckvidd går inte att jämföra rakt av.** Tillverkarna anger radie eller diameter och reserverar sig för ljuset. AdvancedLevel 360 lagras därför som text, "24 (diameter)". Mitt råd till SEO och UX, som data och inte design: `bast` i frontmatter sätts inte på `rackvidd_m` och `rackvidd_mottagare_m`, annars markeras GLL 3-80:s 120 m som bäst fast det sannolikt är diameter mot de andras radie. `bast: lagst` på noggrannheten går bra; den markerar Leica med 2 mm.
5. **Noggrannheten är omräknad**, mm/m gånger tio. Metoddelen säger det (SEO punkt 12).
6. **Produktbilder**: `bild_url` är null för alla tio. Leverantörsbilder hotlinkas inte; bilder från feeden kommer när Adtraction godkänt kanalen och programmets villkor om bilder är lästa. Tills dess är korten utan bild, som avfuktarna.
7. **Kakla kök**: när sidan är publicerad får krysslasern i "Det här behöver du" på `/kok/kakla-kok/` knapp till `bosch-gll-2-10`, samma motivering som valet. Beslutet 2026-09-29 om ingen produkt på den sidan gäller tills dess.
8. Inga nya skript, inga externa resurser.

## Öppet innan publicering

- **GCL 2-50 G**: drifttid saknas hos Bosch i alla lästa källor. Rutan i `batteri` säger bara "4 × AA". Hantverkaren skriver inte en drifttid.
- **GLL 3-80**: om 120 m med mottagare är radie eller diameter. Bruksanvisningen 2022 säger inget, produktbladet 2017 säger diameter. Går inte frågan att avgöra står det i texten att Bosch inte anger det.
- **GLL 2-10 och GCL 2-50 G**: samma fråga om radie eller diameter för räckvidden; Boschs bruksanvisningar säger inget.
- **DW088CG**: DeWalts egna källor anger 15, 20 och 30 m utan mottagare. dewalt.se (15/50 m) lagras; bruksanvisningens 30/100 m står i `anmarkning`. Pendellås beskrivs inte.
- **Geo1X-GREEN**: vikt saknas; mottagarräckvidden är 60 m i databladet och 70 m i bruksanvisningen, 60 lagras.
- **AdvancedLevel 360, RB360GLL**: IP-klass anges inte av tillverkaren; rutan står tom.
- **Leica L2s**: kopplingen Proffsmagasinet CQ12200 = Leica 848435 bygger på GTIN, inte på Leica. Garanti saknas.
- **M12 3PL-401C**: vikt med det medföljande 4 Ah-batteriet saknas; EAN bara från butiken.
- **Oberoende mätning** finns bara för RB360GLL och M12 3PL (Gör Det Själv 2026-03-12). Övriga åtta har bara tillverkarens tal, vilket sidan ska säga.
- **Priser och lager** läses om samma dag som sidan publiceras, eftersom två priser är tillfälligt nedsatta och tre modeller hade 1 till 2 st i lager.
