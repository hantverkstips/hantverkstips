# Innehållsarkitektur

Beslutad 2026-09-15 av SEO-strategen, uppdaterad 2026-09-16 efter sökordsanalysen och 2026-09-30 med klusterplanen för Fukt (avsnitt 2 och 9) (`docs/SOKORDSANALYS.md`) och Christians beslut samma dag: ny pelare Inomhus och montering, nivå på artiklar, kategorisida för krysslaser, lättad Grund-regel och ny startlista (avsnitt 8). Styr navigation, URL-struktur och vilka sidor som byggs de första sex månaderna. Designansvarig ritar menyer och startsida mot det här dokumentet, utvecklaren bygger rutter mot avsnitt 3. Ändringar i URL-regler kräver uppdatering här och i `docs/ARKITEKTUR.md`.

Volymerna i avsnitt 2 och 8 kommer från Google Ads (`docs/data/keyword-stats-2026-09-16.csv`, Sverige, september 2024 till augusti 2026) och är genomsnitt per månad. När Search Console har tre månaders data prioriterar vi om.

## 1. Ämnesområden

**Omgjort 2026-09-17.** Christian: kategorierna ska stödja en fastighet från tak till grund, både utsida och insida, och vara byggda för det vi fyller på framåt. Registret i `src/lib/pelare.ts` har därför tio pelare i tre grupper, i den ordning de visas överallt:

| Grupp | Slug | Namn | Innehåll |
|---|---|---|---|
| Utsidan | `tak` | Tak och vind | yttertak, hängrännor, takfönster, vind, läckor |
| Utsidan | `fasad` | Fasad, fönster och dörrar | panel, puts, fönster, ytterdörrar, drevning, målning ute |
| Utsidan | `altan` | Altan och trädgård | altan, trädäck, staket, plank, bygglov |
| Utsidan | `grund` | Grund och dränering | krypgrund, källarvägg, dränering, sättningar |
| Insidan | `inomhus` | Väggar och innertak | reglar, gips, infästning, innertak, målning inne |
| Insidan | `golv` | Golv och trappor | trägolv, klinker, laminat, trappor |
| Insidan | `kok` | Kök och badrum | bänkskivor, våtrum, kakel, vitvaror |
| Hela huset | `fukt` | Fukt och inomhusklimat | luftfuktighet, avfuktare, mögel, ventilation |
| Hela huset | `el` | El, värme och energi | el, värme, isolering, energi |
| Hela huset | `verktyg` | Verktyg och maskiner | granskningar, jämförelser, bäst i test |

Slugen `inomhus` behölls för väggarna eftersom den står i publicerade adresser; namnet ändrades. Pelaren `isolering` gick upp i `el`. Två artiklar flyttade med permanenta omdirigeringar i `astro.config.mjs`: dreva fönster till `fasad`, slipa bänkskiva till `kok`. Hubbarna är gallerier utan handskriven text (avsnitt 5 i DESIGN.md); en hub publiceras så snart den har en sida. Beskrivningarna av klustren nedan gäller fortfarande, men under de nya pelarnamnen.

Briefens sju områden håller, plus en åttonde pelare från 2026-09-16, med tre justeringar. "Grund och källare" överlappar "Fukt" nästan helt i hur folk söker ("fukt i källaren", "avfuktare krypgrund", "dränera hus"), så Fukt äger allt som handlar om symptom, mätning och avfuktning, medan Grund äger byggnadsåtgärderna (dränering, isolering av krypgrund, platta). Grund startar när Fukt har sju sidor (lättat från tio 2026-09-16, eftersom avfuktarklustret krympte till sju sidor); första sidan är `/grund/isolera-krypgrund/`. Den andra justeringen är att luftavfuktare och byggfläktar inte är "verktyg" i en husägares huvud, de är inomhusklimat. Produktkategorierna får därför egna adresser i roten (avsnitt 3) och hör hemma i flera pelare samtidigt. Den tredje är att sajten riktar sig lika mycket till fackmän som till hemmafixare (Christians besked 2026-09-16). Målgrupp är inte ett ämne, så pelarna delas inte; i stället har varje artikel en nivå, `enkel`, `mellan` eller `expert`, som visas som etikett i artikelhuvudet ("Kunskap · Expert") och grupperar hubsidans lista. Nivån sätts i briefen av SEO-strategen och chefredaktören tillsammans.

| Pelare | Prefix | Omfattar |
|---|---|---|
| Fukt och inomhusklimat | `/fukt/` | Fukt och mögel i källare, krypgrund, vind och garage, luftfuktighet, kondens, avfuktning och uppvärmning som åtgärd |
| Inomhus och montering | `/inomhus/` | Väggar och skivor (regla, gipsa, skruva), upphängning (tavla, hylla, tv, plugg), fönster och dörrar (dreva, täta, justera), ytbehandling inomhus (slipa och olja bänkskiva, senare golv). Ny 2026-09-16, största klustret i startlistan och utan säsong |
| Altan och uteplats | `/altan/` | Bygga, grundlägga, dimensionera och underhålla altan och trädäck, regler och bygglov |
| Tak | `/tak/` | Taktyper, byta och lägga tak, takavvattning, när det behövs proffs |
| Grund och källare | `/grund/` | Dränering, krypgrundsisolering, källarrenovering, platta på mark |
| Isolering och energi | `/isolering/` | Tilläggsisolering, vind, väggar, uppvärmning av garage och verkstad |
| Verktyg och maskiner | `/verktyg/` | Välja, jämföra och testa maskiner. Affiliate-tyngdpunkten |
| El och säkerhet | `/el/` | Det en lekman får göra, jordfelsbrytare, skyddsutrustning, arbetsmiljö i verkstaden |

Så söker svenskar. Problem som problem ("fukt i källaren"), projekt som verb ("bygga altan", "dränera hus"), regler som fråga ("bygglov altan") och produkter med "bäst i test" eller "test" efter kategorin ("kap och gersåg bäst i test", "lasermätare test"). Den kommersiella frasen är oftast kategori plus plats ("avfuktare källare", "avfuktare krypgrund"). Vi bygger en sida per sökmönster, inte en per synonym.

Vad de som rankar gör dåligt:

- Bäst i test-sajterna (bast-i-test.se, test.se, testra.se, testkollen.se, testix.se) rankar på "avfuktare bäst i test" och "kapsåg bäst i test" utan en enda egen mätning. Årtal i titeln, "kundfavoriter", omskrivna datablad. Råd & Röns senaste avfuktartest är från 2007 och Testfakta har inget aktuellt. Ett test med egna siffror på kapacitet vid 10 °C är ensamt i sin klass.
- Butikernas egna tester (Proffsmagasinet "3 kundfavoriter jämförda", Bygghemma "vi jämför") rankar på butikens auktoritet men rekommenderar bara det de säljer och skriver aldrig "köp inte".
- Fukt i källaren-sökningen ägs av saneringsföretag (Ocab, Anticimex) och tillverkare (Ozoneair). Alla svar leder till deras tjänst eller produkt. Ingen ger läsaren en diagnosordning för att själv avgöra om det är markfukt, kondens eller läckage.
- Byggahus rankar med forumtrådar på detaljfrågorna ("avstånd mellan reglar", "avfuktare krypgrund vilken typ"). Svaren är bra men spridda, odaterade och utan tabell. En sida som samlar dimensionstabellen med källa slår tråden.
- Viivilla har minst fem överlappande altanartiklar som konkurrerar med varandra. Vi bygger en per fras.
- Bygglovssidorna för altan skrivs av byggfirmor som lead-generering. Reglerna ändrades 1 december 2025 (anmälan och startbesked borttagna för lovfria åtgärder) och flera sidor är inte uppdaterade. Chefredaktören verifierar mot Boverket innan vi publicerar.

## 2. Kluster

Prioritet 1 byggs inom tre månader, 2 inom sex, 3 när data motiverar. "Affiliate" anger var köpknappar och produktkort hör hemma. Kunskapssidor har aldrig produktkort, bara textlänkar till köpguiden. Byggordningen mellan klustren står i avsnitt 8; tabellerna här är registret över vilken sida som äger vilken fras. Slugs som byttes 2026-09-16 efter volymerna (`docs/SOKORDSANALYS.md` avsnitt 6, punkt 3): `luftavfuktare-kallare` blev `avfuktare-kallare`, `sorptionsavfuktare-eller-kondensavfuktare` blev `sorptionsavfuktare`, `normal-luftfuktighet-inomhus` blev `luftfuktighet-inomhus`. Sajten är inte lanserad, så inga 301 behövdes; filerna döptes om.

### Fukt och inomhusklimat

Hub är `/fukt/`. Den äger ingen stor sökfras, den är diagnosstart och länknav, och från 2026-09-30 ordnas den efter plats i huset (avsnitt 9). Pelaren har tre säsonger: vinterbenet november till februari (luftfuktare, kondens, kallras, vinden), som är störst, höstbenet september till oktober (avfuktare, mögel, badrummet) och vårbenet mars till april (radonsug, fuktskada, dränering). Registret nedan är omgjort efter körning 4 (`docs/SOKORDSANALYS.md` avsnitt 12). "Omgång" är startlista 6 (12.7); sidor som redan finns står som publicerade. Arbetstiteln är en beskrivning för teamet, inte H1.

| URL | Arbetstitel | Typ | Huvudfras | Volym | Intention | Omgång | Affiliate |
|---|---|---|---|---|---|---|---|
| `/fukt/` | Fukt i huset, efter plats | hub | ingen fras | | informativ | publicerad; platsordning i A till B | nej, länkar till kategorier |
| `/fukt/luftfuktighet-inomhus/` | Normal luftfuktighet, rum för rum och årstid | kunskap | luftfuktighet inomhus (äger normal, vinter, sommar, relativ och absolut fuktighet) | 5 880 | informativ | publicerad, utbyggnad A5 | nej |
| `/fukt/kondens-pa-fonster/` | Kondens på fönster, insida, utsida och mellan glasen | problemguide | kondens på fönster (äger insida, utsida, imma på fönster, sovrum, mögel i fönsterkarmen; bytt 2026-09-30 från "kondens på fönster insida") | 1 760 | informativ | publicerad, utbyggnad A1 | nej |
| `/rakna/daggpunkt/` | Blir väggen våt? | räknare | daggpunkt (äger daggpunkt tabell och kalkylator) | 1 050 | informativ | publicerad, förval A0 | nej |
| `/fukt/kallras/` | Kallras från fönster och element | problemguide | kallras (äger kallras fönster) | 830 | informativ | A4 | nej |
| `/fukt/sjalvdrag/` | Självdrag, frånluft och FTX i äldre hus | kunskap | självdragsventilation (äger självdrag, spaltventil, frånluftsventilation, ftx ventilation, ventilation i hus) | 6 360 | informativ | D3 | nej |
| `/fukt/badrumsflakt/` | Badrumsfläkt som klarar kravet på luftflöde | köpguide | badrumsfläkt (äger fuktstyrd, ventilation badrum, avfuktare badrum, kallrasskydd) | 6 920 | kommersiell | D2 | ja, badrumsfläkt |
| `/luftfuktare/` | Luftfuktare jämförda på datablad | bäst i test, granskning | luftfuktare (äger luftfuktare bäst i test, låg luftfuktighet inomhus) | 21 110 | kommersiell | B1, **affiliatebeslut senast 15 oktober** | ja |
| `/fukt/lag-luftfuktighet/` | Torr luft på vintern och om du behöver en luftfuktare | kunskap med köpråd | låg luftfuktighet inomhus, och luftfuktare om kategorisidan inte byggs | 110 till 21 110 | informativ | B1, bara om `/luftfuktare/` faller | sist, om affiliate säger ja |
| `/fukt/svartmogel/` | Svartmögel, vad det är och när det är farligt | kunskap | svartmögel (äger svartmögel farligt, vitmögel, mögel ättika) | 5 880 | informativ, YMYL | C3 | nej |
| `/fukt/svartmogel-badrum/` | Svartmögel i badrummet, fogen eller fukten bakom | problemguide | svartmögel badrum (äger mögel badrum, svartmögel i duschen) | 3 270 | informativ | D1 | nej |
| `/fukt/mogel-i-huset/` | Mögel i huset, symptom, test och sanering | problemguide | mögel i hus (äger mögel symptom, mögeltest, mögelsanering, mögelhund, mögelbesiktning) | 2 390 | informativ, YMYL | C4 | nej |
| `/fukt/mogellukt/` | Vad lukten i huset säger om var fukten är | problemguide | hur luktar mögel (äger mögellukt, unken lukt i hus, luktsanering) | 750 | informativ | C5 | nej |
| `/fukt/hussvamp/` | Äkta hussvamp och rötsvamp | kunskap | äkta hussvamp (äger rötsvamp) | 880 | informativ | B5 | nej |
| `/fukt/fukt-i-kallaren/` | Fukt i källaren, hitta orsaken själv | problemguide | fukt i källaren (äger fuktig källare, mögel i källaren, mögellukt i källare, luftfuktighet källare, ventilera källare) | 2 210 | informativ | publicerad, utbyggnad F3 | sist, en produkt |
| `/fukt/fukt-i-krypgrund/` | Fukt i krypgrund, mät själv och välj åtgärd | problemguide | fukt i krypgrund (äger fuktig krypgrund, mögel i krypgrund, luftfuktighet krypgrund, fuktmätare och hygrometer krypgrund) | 1 220 | informativ | startlista 5, sidofraser före publicering | nej, länk till köpguiden |
| `/fukt/torpargrund/` | Fukt i torpargrunden | problemguide | torpargrund fukt (äger avfuktare torpargrund, ventilera torpargrund) | 370 | informativ | D5 | nej, länk till köpguiden |
| `/fukt/fukt-pa-vinden/` | Fukt på vinden, varifrån den kommer | problemguide | fukt på vinden (äger ventilation på vinden, kondens på vinden) | 570 | informativ | B3 | nej |
| `/fukt/mogel-pa-vinden/` | Mögel på råsponten, sanera eller vänta | problemguide | mögel på vinden (äger svartmögel på vinden, mögelsanering vind, mögel på råspont) | 460 | informativ | E2 | nej |
| `/fuktmatare/` | Fuktmätare för trä, betong och vägg | bäst i test | fuktmätare (äger fuktmätare trä, fuktkvotsmätare, fuktmätare bäst i test, ved) | 8 430 | kommersiell | C1, **affiliatebeslut** | ja |
| `/fukt/hygrometer/` | Hygrometern, hur exakt den är och hur du kontrollerar den | kunskap med köpråd | hygrometer (äger luftfuktighetsmätare, mäta luftfuktighet, hygrometer bäst i test, kalibrering) | 5 920 | informativ | A2 | affiliatebeslut, högst sist |
| `/fukt/fuktkvot/` | Fuktkvot i trä, gränserna för mögel, röta och målning | kunskap | fuktkvot trä (äger kritiskt fukttillstånd) | 210 | informativ | C2 | nej |
| `/rakna/fuktkvot/` | Räkna ut fuktkvoten | räknare | fuktkvot trä formel (ingen data) | | informativ | C0 | nej |
| `/fukt/fuktmatning-betong/` | Fuktmätning i betong före golv och tätskikt | kunskap, expert | fuktmätare betong (äger fuktspärr golv, fuktmätning betongplatta, fukt i betongplatta, byggfukt) | 1 020 | informativ | E5 | nej |
| `/luftavfuktare/` | Avfuktare och luftavfuktare jämförda | bäst i test, granskning | avfuktare (äger luftavfuktare, avfuktare och luftavfuktare bäst i test och test; bytt 2026-09-30 från "avfuktare bäst i test") | 18 380 | kommersiell | publicerad, metadata i A | ja |
| `/fukt/avfuktare-kallare/` | Avfuktare till källaren, hur stor och vilken typ | köpguide | avfuktare källare (äger luftavfuktare källare, avfuktare källare bäst i test) | 4 090 | kommersiell | publicerad | ja |
| `/fukt/avfuktare-krypgrund/` | Avfuktare i krypgrund | köpguide | avfuktare krypgrund (äger krypgrundsavfuktare, sorptionsavfuktare krypgrund, pris) | 3 500 | kommersiell | publicerad | ja |
| `/fukt/avfuktare-garage/` | Avfuktare i garaget, förrådet och sommarstugan | köpguide | avfuktare garage (äger förråd, sommarstuga, jordkällare) | 740 | kommersiell | publicerad, utbyggnad F5 | ja |
| `/fukt/avfuktare-vind/` | Avfuktare på kallvinden | köpguide | avfuktare vind (äger vindsavfuktare) | 780 | kommersiell | B4 | ja |
| `/fukt/avfuktare-tvattstuga/` | Avfuktare i tvättstugan, mot torktumlaren i kronor | köpguide | avfuktare tvättstuga (äger torkrum, torka tvätt, avfuktare eller torktumlare) | 1 660 | kommersiell | D4 | ja |
| `/fukt/sorptionsavfuktare/` | Sorption eller kondens, temperaturen avgör | kunskap med köpråd | sorptionsavfuktare (äger kondensavfuktare, byggavfuktare) | 2 400 | informativ | publicerad | en produkt per typ, sist |
| `/fukt/fuktslukare/` | Hur mycket vatten en fuktslukare tar | kunskap | fuktslukare (äger fuktabsorberare) | 1 770 | informativ | A3 | nej, länk till köpguiderna |
| `/rakna/avfuktare/` | Hur stor avfuktare behöver du? | räknare | hur stor avfuktare | ingen data | kommersiell | publicerad, kWh i resultatet | ja |
| `/rakna/elkostnad/` | Vad kostar maskinen i el? | räknare | elkostnad avfuktare (äger hur mycket el drar en avfuktare) | 70 | informativ | publicerad, förval B0 | nej |
| `/rakna/kallare/` | Besiktiga källaren själv | räknare | ingen fras | | informativ | publicerad | nej |
| `/fukt/fuktskada/` | Fuktskada, tecknen per yta och vad försäkringen tar | kunskap | fuktskada (äger fuktskada vägg, golv, tak, fuktkontroll, fuktbesiktning, fuktsanering) | 1 600 | informativ | E3 | nej |
| `/fukt/vattenskada/` | Efter vattenläckan, torka ut och anmäl | kunskap | vattenskada försäkring (äger hyra avfuktare, fuktskada parkett, vattenskada golv) | 960 | informativ | E4 | nej |
| `/fukt/radon/` | Radon i huset, gränsvärdet, mätningen och kostnaden | kunskap | radon (äger radon gränsvärde, radon i hus, radonmätare, radonmätning villa) | 15 340 | informativ, YMYL | B2 | affiliatebeslut om radonmätare |
| `/fukt/radonsug/` | Radonsug, när den behövs och vad den kostar | kunskap | radonsug (äger radonsanering, radon åtgärder, radon ventilation) | 1 150 | informativ | E1 | nej |

Struket 2026-09-30: `/fukt/mogel-i-kallaren/` (frasen går till `/fukt/fukt-i-kallaren/`) och `/fukt/vad-drar-en-avfuktare-i-el/` (frasen går till `/rakna/elkostnad/`). Väntar: `/fukt/lackagebrytare/` (760), `/badrum/fuktskada-badrum/` (450), `/fukt/ftx-ventilation/`. Görs inte: husvagn och båt. Grund får `/grund/draneringsror/` (3 660, omgång F1) och utbyggnader av `/grund/dranera-hus/` och `/grund/isolera-krypgrund/`.

### Inomhus och montering

Hub är `/inomhus/`. Gipsklustret (11 600 sökningar per månad) är större än avfuktarklustret och söks lika mycket i januari som i september. Sidorna kräver ingen produktdatabas och ingen godkänd affiliateansökan, så pelaren är första innehållsprioritet och når hubgränsen på fem sidor i november. Slipa bänkskiva (210) och hitta regel i vägg (110) läggs här när huben finns.

Klustrets gemensamma tal, fastställt 2026-09-16 efter att tre sidor hittat på var sitt: **gränsen för när något ska sitta i regel eller kortling i stället för i plugg är 20 kg**, eller lägre när lasten sitter på en arm (tv-fäste) eller skiftar (skåp med lucka). Det är vår gräns, konservativ mot mollyns 38 kg i ett skivlag; Norgips säger "tunga saker" utan tal. Alla sidor i klustret använder 20 kg tills gipsplugg-undersökningen ger ett uppmätt tal.

| URL | Arbetstitel | Typ | Huvudfras | Volym | Nivå | Prio | Affiliate |
|---|---|---|---|---|---|---|---|
| `/inomhus/` | Inomhus, väggar som håller och saker som sitter kvar | hub | ingen fras | | | 1 | nej |
| `/inomhus/gipsplugg/` | Gipsplugg, åtta pluggtyper belastade till brott | undersökning och guide (kunskap) | gipsplugg (äger även plugg gipsvägg) | 6 400 | expert | 1 | nej |
| `/inomhus/gipsskruv/` | Gipsskruv, rätt längd och gänga mot trä och stål | guide (kunskap) | gipsskruv | 3 600 | enkel | 1 | nej |
| `/inomhus/skruva-i-gipsvagg/` | Skruva i gipsvägg, hylla, tv och tunga saker | problemguide | skruva i gipsvägg (äger även montera tv på gipsvägg, hylla gipsvägg) | 840 | enkel | 1 | nej |
| `/inomhus/bygga-innervagg/` | Bygga innervägg med reglar och gips, regelavståndstabellen | projektguide | bygga innervägg (äger även regelavstånd innervägg) | 900 | mellan | 1 | nej |
| `/inomhus/hanga-tavla-gipsvagg/` | Hänga tavla på gipsvägg | guide | hänga tavla gipsvägg (äger även sätta upp tavla gipsvägg) | 150 | enkel | 1 | nej |
| `/inomhus/dreva-fonster/` | Dreva fönster, tätt inne och öppet ute | projektguide | dreva fönster | 320 | enkel | 1 | nej |

### Altan och uteplats

Hub är `/altan/`, och här är huben själv den stora projektguiden eftersom pelaren i praktiken är ett enda projekt. Säsongen toppar april till maj och bottnar november till december, så klustret ska vara indexerat i februari. Tills dess är altanhuben utkast och Inomhus har dess plats i huvudmenyn (avsnitt 4). Volymerna backar 20 till 35 procent på ett år; prognoser för 2027 räknar med lägre tal än 2025.

| URL | Arbetstitel | Typ | Huvudfras | Volym | Intention | Prio | Affiliate |
|---|---|---|---|---|---|---|---|
| `/altan/` | Bygga altan, från plint till sista trallskruven | hub, projektguide | bygga altan | 3 600 | informativ | 1 | verktygslista sist |
| `/altan/trallskruv/` | Trallskruv, vilken som håller i tjugo år | guide | trallskruv (äger även skruv till trall) | 3 630 | kommersiell | 1 | liten. Binder altanguide och kalkylator |
| `/altan/bygglov-altan/` | Bygglov för altan, måtten som avgör | kunskap | bygglov altan | 1 000 | informativ | 1 | nej. Verifieras mot Boverket och lag 2025:974 |
| `/altan/tradack-pa-mark/` | Lågt trädäck direkt på mark eller plattor | projektguide | bygga trädäck | 1 000 | informativ | 1 | verktygslista sist |
| `/altan/reglar-avstand-och-dimensioner/` | Avstånd mellan reglar och plintar, tabellen du letar efter | kunskap, tabell | avstånd mellan reglar altan | 70, +80 % | informativ | 1 | nej |
| `/altan/plintar-eller-markskruv/` | Plintar eller markskruv, marken bestämmer | jämförelse (metod) | markskruv eller plint | 40 | informativ | 2 | nej |
| `/altan/verktyg-for-altanbygge/` | Verktygen som gör altanbygget rakt | köpguide | verktyg bygga altan | | kommersiell | 2 | ja |
| `/rakna/trall/` | Räkna ut trall, reglar och skruv | kalkylator | räkna ut trall, trallkalkylator | 90 | informativ | 2 | nej, länk till verktygsguiden |
| `/altan/valja-trall/` | Tryckimpregnerat, lärk eller komposit | köpguide (material) | vilken trall ska man välja | | kommersiell | 2 | nej, vi säljer inte virke |
| `/altan/vad-kostar-altan/` | Vad kostar det att bygga altan själv | kunskap | bygga altan kostnad | informativ | 2 | nej |
| `/altan/olja-och-underhall/` | Olja altanen, när och med vad | projektguide | olja altan | informativ | 2 | nej |
| `/altan/altanracke/` | Räcke på altanen, höjd och regler | kunskap | altanräcke höjd regler | informativ | 3 | nej |

### Verktyg och maskiner

Hub är `/verktyg/`. Huben listar produktkategorierna och guiderna om att välja, men har inga köpknappar. Kategorisidorna ligger i roten och räknas till klustret. Krysslaser fick egen kategorisida 2026-09-16: frasen växer 23 procent, är större än lasermätare och delar leverantörer och köpguide med den.

| URL | Arbetstitel | Typ | Huvudfras | Volym | Intention | Prio | Affiliate |
|---|---|---|---|---|---|---|---|
| `/verktyg/` | Maskinerna som är värda pengarna, och de som inte är det | hub, kunskap | verktyg husägare | ingen fras | informativ | 1 | nej, länkar till kategorier |
| `/lasermatare/` | Bästa lasermätaren, testad på fem uppmätta avstånd | bäst i test | avståndsmätare laser (äger även lasermätare bäst i test, lasermätare test) | 1 140 | kommersiell | 1 | ja |
| `/krysslaser/` | Bästa krysslasern, jämförd på datablad (granskning; pelare inomhus och kök tills `/verktyg/` publiceras, 2026-09-30) | bäst i test | krysslaser (äger även krysslaser bäst i test och krysslaser test) | 4 150 | kommersiell | 1 | ja |
| `/tester/[marke-modell]/` | Tester av lasermätare och avfuktare | test | [modell] test | liten | kommersiell | 1 | ja |
| `/verktyg/borrhammare-eller-slagborr/` | Borrhammare eller slagborr, borrtid i betong med tre maskiner | undersökning (kunskap) | borrhammare bäst i test (äger även borrhammare eller slagborr) | 310 | kommersiell | 1 | ja. Länkmagnet |
| `/verktyg/valja-lasermatare/` | Vilken lasermätare, räckvidd och noggrannhet du faktiskt behöver | köpguide | lasermätare avståndsmätare välja | ingen mätbar | kommersiell | 2 | ja. Stöd till kategorisidan |
| `/kap-och-gersagar/` | Bästa kap- och gersågen | bäst i test | kap och gersåg bäst i test | 720 | kommersiell | 2 | ja. Kräver sågarna i handen |
| `/jamforelser/[a-vs-b]/` | Leica Disto mot Bosch GLM | jämförelse | leica disto vs bosch glm | | kommersiell | 2 | ja |
| `/verktyg/valja-kapsag/` | Vilken kapsåg, klingdiameter styr vad du kan kapa | köpguide | vilken kapsåg ska jag köpa | ingen data | kommersiell | 2 | ja |
| `/verktyg/sanksag-eller-cirkelsag/` | Sänksåg eller cirkelsåg | kunskap | sänksåg eller cirkelsåg | 170 | informativ | 2 | en produkt per typ, sist |
| `/verktyg/lasermatare-noggrannhet/` | Vad plus minus 1,5 mm betyder i praktiken | kunskap | lasermätare noggrannhet | | informativ | 2 | nej |
| `/verktyg/batteriplattform/` | Välj batterisystem innan du väljer maskin | kunskap | vilket batterisystem ska man välja | ingen data | informativ | 3 | liten, sist |
| `/skruvdragare/` | Bästa skruvdragaren, skruv per laddning | bäst i test | skruvdragare bäst i test | 1 600 | kommersiell | fas 2 | ja. Vinnbarhet 2, bara med riktigt test |
| `/rakna/kapsag-kapacitet/` | Vilken såg klarar din regel i gering | kalkylator | kapsåg kapacitet 45 grader | | kommersiell | 3 | ja |

## 3. URL-struktur

Grundregel. Kunskap får pelarens prefix, produktsidor ligger platt. Läsaren och Google ser på adressen om sidan handlar om ett problem eller en produkt.

| Sidtyp | Mönster | Exempel |
|---|---|---|
| Pelarhub | `/[pelare]/` | `/fukt/`, `/inomhus/` |
| Projektguide, problemguide, köpguide, kunskap | `/[pelare]/[slug]/` | `/fukt/avfuktare-kallare/`, `/inomhus/gipsplugg/` |
| Bäst i test (kategori) | `/[kategori]/` | `/luftavfuktare/`, `/krysslaser/` |
| Test | `/tester/[marke-modell]/` | `/tester/woods-mrd20/` |
| Jämförelse | `/jamforelser/[a-vs-b]/` | `/jamforelser/leica-disto-d2-vs-bosch-glm-50-c/` |
| Kalkylator | `/rakna/[slug]/` | `/rakna/avfuktare/` |
| Om sajten | `/om/[slug]/` | `/om/sa-testar-vi/` |
| Författare | `/forfattare/[slug]/` | `/forfattare/christian/` |
| Översikt | `/amnen/`, `/guider/` | `/amnen/`, `/guider/fukt/`, `/guider/typ/kopguide/`, `/guider/niva/enkel/` |

Beslut och motiv:

1. **Kategorisidor i roten, `/luftavfuktare/`, inte `/verktyg/luftavfuktare/`.** En luftavfuktare hör till Fukt, en kapsåg till Altan och Verktyg samtidigt. Att låsa kategorin under en pelare gör adressen fel för hälften av kategorierna. Rot-adressen är kortast, matchar frasen "luftavfuktare" och är redan beslutad i arkitekturen. Priset är att rotnamnrymden måste hållas ren; pelarslugs och kategorislugs får aldrig kollidera, och listan i den här filen är facit.
2. **Kalkylatorer flyttar från `/verktyg/` till `/rakna/`.** Briefen gjorde "Verktyg och maskiner" till en pelare och då kan `/verktyg/` inte samtidigt betyda kalkylatorer. "Räkna själv" är redan blockets namn på startsidan. Kräver ändring i `ARKITEKTUR.md` (`src/pages/verktyg/` blir `src/pages/rakna/`) och i `DESIGN.md` (exempeladresser).
3. **Guider och kunskap under pelaren, inte under `/guider/`.** Content collections behåller sina mappar (`guider`, `kunskap`), men URL:en styrs av frontmatterfältet `pelare`. Sidtypen syns inte i adressen, eftersom en kunskapsartikel kan växa till köpguide utan att flyttas. Brödsmulorna följer URL:en, så en guide i `/fukt/` visar "Hantverkstips / Fukt / Sidan". Sedan 2026-09-16 ligger filerna i en undermapp per pelare (`src/content/guider/fukt/`), och tester och jämförelser i en undermapp per kategori; mappen syns aldrig i adressen, id är filnamnet. Konventionen står i `docs/ARKITEKTUR.md`.
4. **Tester och jämförelser platt.** Ett test av en kapsåg är relevant för både Altan och Verktyg. Brödsmulan för ett test går via kategorin, inte pelaren: "Hantverkstips / Luftavfuktare / Wood's MRD20".
5. **Inga underkategorier de första sex månaderna.** `/luftavfuktare/krypgrund/` skulle bli en tunn lista. Behovet täcks av köpguiden `/fukt/avfuktare-krypgrund/`. Underkategorier byggs när Search Console visar att kategorisidan rankar på en delfras den inte kan svara på.
6. **Slugs** är huvudfrasen kokad till två till fyra ord utan stoppord: `bygglov-altan`, inte `behover-jag-bygglov-for-altan`. Det nakna produktordet slår varianten med "eller" och "test" (`sorptionsavfuktare`, inte `sorptionsavfuktare-eller-kondensavfuktare`; `trallskruv`, inte `skruv-till-trall`). Övriga regler enligt arkitekturen (gemener, inga diakritiska tecken, avslutande snedstreck). En publicerad URL byts aldrig utan 301; före lansering byts den genom att filen döps om.
7. **Nivå syns inte i adressen.** `enkel`, `mellan` och `expert` är ett frontmatterfält och en etikett, inte ett prefix. Samma pelare rymmer båda målgrupperna, och en sida kan byta nivå utan att flyttas.
8. **Två reserverade rötter för översiktssidorna** (beslut 2026-09-16). `/amnen/` är kartan över sajten, `/guider/` är galleriet med alla guider och tester och sina filtersidor. Båda ligger i roten som en egen sidtyp, ingendera under en pelare: de tillhör inget ämne. `guider` är ledigt eftersom punkt 3 säger att artiklar aldrig ligger under `/guider/`, och samlingens mappnamn aldrig syns i en adress. Slugarna ligger i `RESERVERADE_ROTSLUGS` i `src/lib/pelare.ts`, så ingen pelare och ingen kategori kan ta dem, och de statiska mapparna `src/pages/amnen/` och `src/pages/guider/` vinner över `[rot]` i Astro. Filtersidor byggs bara när filtret har minst en träff, så ingen tom adress hamnar i sitemapen. Paginering: `/guider/sida/2/` och `/guider/fukt/sida/2/`, sida 1 är kanonisk för filtret och sida 2 och uppåt länkas bara från varandra med `rel="prev"` och `rel="next"`.

Silorisken hanteras med länkar, inte adresser. En pelare är en ordning för läsaren och för brödsmulorna, inte en gräns för var en länk får gå. Reglerna i avsnitt 6 tvingar fram korslänkning mellan pelare och produktlager.

## 4. Navigation

**Omgjort 2026-09-17.** Sidhuvudet har två rader. Övre raden: ordmärket och de fasta sidorna Guider, Räkna själv, Om oss, Kontakt. Undre raden, ämnesraden: alla publicerade pelare i registrets ordning med ikon, och sist Alla ämnen. På mobil ligger allt i en meny grupperad Utsidan, Insidan, Hela huset, sedan Alla ämnen och de fasta sidorna. Ingen gräns på antal hubbar i menyn längre; raden scrollar i sidled om den blir bredare än skärmen. Så testar vi ligger i sidfoten och under Om oss.

Mobil först. Menyn öppnas med `<details>`, ingen JavaScript, 48 px per rad.

**Huvudmeny.** Byggs av de publicerade hubbarna i den ordning `src/lib/pelare.ts` anger, högst tre (`MAX_HUBBAR_I_MENY`), följda av Ämnen (`/amnen/`), Guider (`/guider/`), Räkna själv (`/rakna/`) och Så testar vi (`/om/sa-testar-vi/`). Listan är inte hårdkodad: en pelare kommer in genom att dess hub får `utkast: false`, vilket kräver minst fem sidor att länka till (avsnitt 6). September 2026, med Verktyg avpublicerad och Altan kvar som utkast:

1. Fukt (till `/fukt/`)
2. Inomhus (till `/inomhus/`)
3. Ämnen (till `/amnen/`)
4. Guider (till `/guider/`)
5. Räkna själv (till `/rakna/`)
6. Så testar vi (till `/om/sa-testar-vi/`)

Antalet hubbar sänktes från fem till tre 2026-09-16, när Ämnen och Guider kom in: sju poster är vad som får plats vid 1024 px med ordmärket, och pelare utanför de tre finns på `/amnen/` och i sidfoten i stället. Namnen i menyn är korta ("Ämnen", "Guider"), sidornas H1 är längre ("Alla ämnen", "Alla guider och tester"). Altan byttes mot Inomhus 2026-09-16 eftersom altanklustret inte publiceras förrän i februari och en menypost till en tom hub skadar mer än den hjälper. Inga undermenyer i fas 1. Hubsidorna är undermenyn, det är därför de finns. På desktop ligger posterna i rad till höger om ordmärket. Ordmärket är den enda länken till startsidan.

**Mobilmenyn**, uppifrån: de tre hubbarna med pelarikon, raden "Alla ämnen", sedan "Guider och tester" och "Räkna själv" (kalkylatorikon), sedan etiketten "Bäst i test" med kategorierna som har publicerad kategorisida (max fyra rader), sist "Så testar vi" och "Om Hantverkstips". 48 px per rad.

**Sidfot**, fyra spalter på desktop, en på mobil, i den här ordningen: Ämnen (alla publicerade pelare, sist raderna "Alla ämnen" och "Alla guider och tester"), Bäst i test (kategorisidor), Räkna själv (kalkylatorer), Om sajten (Om oss, Så testar vi, Så tjänar vi pengar, Författare, Kontakt, Integritet). Sidfoten är sajtens säkerhet mot föräldralösa sidor, så den listar hubbar, översiktssidor och kategorier, aldrig enskilda artiklar.

**Brödsmulor** följer URL:en och renderas som `BreadcrumbList`. Guide: Hantverkstips / Fukt / Rätt avfuktare till källaren. Test: Hantverkstips / Luftavfuktare / Wood's MRD20. Kalkylator: Hantverkstips / Räkna själv / Avfuktarkalkylator. Kategori: Hantverkstips / Luftavfuktare. Översikt: Hantverkstips / Alla ämnen, Hantverkstips / Guider, Hantverkstips / Guider / Fukt; paginerade sidor har samma brödsmulor som sida 1. På mobil visas de två sista nivåerna, enligt designdokumentet. Pelarnivån är en länk bara när huben är publicerad; en artikel som går ut före sin hub (altan hösten 2026) visar pelarens namn utan länk.

**Nivå.** Artikelhuvudet visar typ och nivå i samma etikett, "Kunskap · Expert". Hubsidans lista "Alla sidor i ..." grupperas i Enkel, Mellan och Expert som tre listor, så att läsaren hittar sin nivå utan filter i JavaScript. Utseendet står i `docs/DESIGN.md` avsnitt 6.

## 5. Startsidan

Startsidan rankar på varumärket och ingenting annat. Dess SEO-jobb är att berätta för Google vad sajten handlar om (hus, inte butik) och skicka länkkraft till hubbar, kategorisidor och kalkylatorer. Besökaren ska på tre sekunder se en redaktion som räknar och testar. Ordning uppifrån, med motiv:

1. **Heron.** H1 som ett påstående om huset, inte om verktygsköp, ett stycke med två textlänkar (en till en problemguide, en till en kalkylator) och sajtens egen husillustration bredvid, i ordmärkets stil. Motiv: identiteten sätts här, läsaren ska på en skärm se både vad sajten handlar om och att bilderna är våra egna, och första skärmen ska inte innehålla ett pris. Ersatte den textbundna öppningen och säsongsblocket 2026-09-16, efter ägarens omdöme att övre halvan sa för många saker samtidigt.
2. **Ämnesraden.** Ett kort per pelare, alla åtta i `PELARE`-ordning, fyra i rad på desktop och två på mobil: pelarikonen i 40 px, namnet och en rad om vad du hittar i ämnet (`rad` i `src/lib/pelare.ts`, chefredaktörens mening). Pelare med publicerad hub är länkar med etiketten "4 sidor", övriga står dämpade med etiketten "Kommer". Sist länken "Alla ämnen". Motiv: läsaren ska se sajtens hela ämnesbredd och kunna gå till sitt ämne redan ovanför vecket, och hubbarna får sin interna länkkraft härifrån. Ersatte "Börja här" 2026-09-16, som låg långt ned och bara visade de publicerade pelarna.
3. **Guider och tester.** Ett rutnät av artikelkort där chefredaktörens `justNu` är det stora kortet och de fyra senaste följer, med länken "Alla guider och tester" till `/guider/`. Block 4 och 6 i den gamla ordningen (Just nu, Senaste) är alltså ett block sedan 2026-09-16: två block med samma sorts innehåll gav samma bild två gånger på en skärm. Här ligger också säsongsstyrningen sedan säsongsblocket togs bort samma dag: chefredaktören väljer `justNu` efter årstiden (källaren i september, altanen i april) och rutnätet fylls på med det som publicerats senast. Motiv: färskhet, djup indexering och en huvudsak på sidan, utan ett eget block som säger samma sak en gång till.
4. **Bäst i test just nu.** En rad per kategori med vårt val, pris, antalet granskade och länken "Alla vi granskat". Inga köpknappar på startsidan, bara länkar, så att startsidan slipper reklamband. Motiv: kategorisidorna tjänar pengarna och behöver länken, men startsidan ska inte se ut som en butik.
5. **Räkna själv.** Alla kalkylatorer som verktygskort i rutnät, i tre kolumner, så snart det finns minst en. Motiv: kalkylatorerna är den länkbara tillgången, och sedan säsongsblockets verktygskort försvann är det här det enda stället där de syns på startsidan. `sasong` i registret säger vilken årstid en kalkylator hör till och är underlag för valet av `justNu`, inte något sidan renderar.
6. **Så jobbar vi.** Två till fyra meningar med länkar till "Så testar vi" och "Så tjänar vi pengar". Motiv: E-E-A-T-signal på den sida som får flest externa länkar.

Layouten står i `docs/DESIGN.md` avsnitt 5.1.

## 6. Intern länkning

En fras, en sida. Registret över vilken sida som äger vilken fras är tabellerna i avsnitt 2, och SEO-strategen kompletterar det innan en ny sida briefas. Regler för vilken sidtyp som äger vilket frasmönster: "bästa X", "X bäst i test", "X test" (kategori) ägs av kategorisidan. "X plats" ("avfuktare källare") ägs av köpguiden. "[modell] test" ägs av testsidan. "X eller Y" ägs av en kunskaps- eller jämförelsesida. Problemfraser ägs av problemguider. Kategorisidans avsnitt "Så väljer du" är en sammanfattning på tre till fem stycken som länkar till köpguiden, aldrig en andra guide. Två sidor får aldrig dela de tre första orden i title.

**Kunskap till produkt.** En problemguide eller kunskapsartikel länkar till köpguiden, inte direkt till kategorisidan, och gör det max en gång per H2-avsnitt i löptext. Produktkort finns bara i köpguider och projektguider, och bara i blocket "Produkterna vi nämner" sist på sidan plus högst ett kompakt kort per H2 där texten faktiskt diskuterar produkten. Kunskapsartiklar har inga produktkort och ingen reklammärkning.

**Produkt till kunskap.** Varje kategorisida länkar till sin pelarhub, sin köpguide och sin kalkylator i "Så väljer du", och till alla tester och jämförelser i kategorin. Varje test länkar till kategorisidan, köpguiden och minst en kunskapsartikel som förklarar det testet mäter (ljud, kapacitet vid låg temperatur).

**Hub till allt.** Pelarhuben länkar till varje sida i klustret, grupperat under "Hitta felet", "Välj rätt" och "Räkna", samt till kategorisidorna som hör till pelaren. Huben är handskriven, inte en automatisk lista. En hub publiceras när den har minst fem sidor att länka till, artiklar och räknare som hör till pelaren inräknade (Christians beslut 2026-09-28). Under fem står pelarfilen som utkast, och adressen omdirigeras tillfälligt (302) till /amnen/.

**Kalkylatorer.** Länkas med verktygskortet, ett per sida, från varje guide där resultatet är relevant, från kategorisidans "Så väljer du", från startsidan och sidfoten. Kalkylatorn länkar tillbaka till kategorisidan, köpguiden och kunskapsartikeln om hur vi räknar. Ingen sida får ha två verktygskort.

**Mängd och ankartext.** Varje ny sida har i sin brief minst tre utgående interna länkar och minst två sidor som ska länka in inom en vecka från publicering. Ankartexten säger vad sidan handlar om, aldrig "här" eller "läs mer". Bygget kör `scripts/kontrollera-innehall.ts` som listar publicerade artiklar, tester och jämförelser utan inlänk från en annan innehållsfil (sidfot, meny och mallarnas automatiska listor räknas inte) och som stoppar bygget vid länkar som leder ingenstans; listan ska vara tom, och varningen blir stopp när sajten har fler sidor. Hur skriptet räknar står i `docs/ARKITEKTUR.md`.

## 7. E-E-A-T

Google granskar affiliatesajter hårdare än andra, och recensionsriktlinjerna är tydliga med att den som skriver "test" ska ha haft produkten. Därför två etiketter: **Test** när vi haft produkten och mätt, **Granskning** när vi jämfört datablad och tredjepartsmätningar. Etiketten står i H1-blocket och i `Product`-markupen. Vi skriver aldrig "vi testade" på en granskning.

Av samma skäl heter kategorisidans metodavsnitt **"Så granskade vi"**, inte "Så testade vi", tills kammartestet vid 10 och 20 grader är gjort (beslut 2026-09-16). Rubriken byts tillbaka i samma omgång som de första egna mätvärdena publiceras, och texten skrivs om då.

Sidor som behövs innan lansering:

| Sida | Innehåll | Strukturerad data |
|---|---|---|
| `/om/` | Vilka vi är, varför sajten finns, adress och kontaktväg | `Organization` |
| `/om/sa-testar-vi/` | Metod per kategori, vilka instrument, hur vi räknar, skillnaden test och granskning | `Article` |
| `/om/sa-tjanar-vi-pengar/` | Affiliateaffären förklarad, vad provisionen påverkar (ingenting i omdömet), länkad från reklambandet | |
| `/om/kontakt/` | E-post, svarstid | |
| `/om/integritet/` | Vad som loggas (klick utan personuppgifter), inga kakor som kräver samtycke | |
| `/forfattare/[slug]/` | Foto, yrke, år i yrket, vad personen testar, lista över sidor | `Person`, länkad från `Article.author` |

Signaler på varje sida: datum för publicering och uppdatering, författarruta, källförteckning, "Vi mätte" mot "Tillverkaren uppger" på tester, och "Så testade vi" på kategorisidor.

Från Christian behöver vi: riktigt namn, foto och en kort bakgrund med kontrollerbara fakta (yrke, antal år, typ av projekt) för författarsidan; svar på om vi har fysisk tillgång till produkter (avgör test mot granskning för hela fas 1); vilka mätinstrument vi har eller köper (hygrometer, ljudmätare, elmätare, modellnamn ska stå i metoden); en postadress eller företagsnamn för `/om/`; och en e-postadress för kontakt.

## 8. Startlistan

Ersatt 2026-09-16 med startlistan från `docs/SOKORDSANALYS.md` avsnitt 2, efter volymerna. Sidorna 1 till 4 (Så testar vi, Så tjänar vi pengar, Om med kontakt och integritet, Författare) ligger kvar först och räknas inte i tabellen. Ordningen bygger på volym gånger vinnbarhet, justerad för säsong och balansen mellan målgrupperna: 15 av 25 sidor riktar sig till proffs eller båda, 7 är enkla hur gör man-sidor, 5 är expertundersökningar med egna mätningar, 7 handlar om avfuktare och 6 ligger i Inomhus. Testartikeln är `/fukt/luftfuktighet-inomhus/` (avsnitt 3 i sökordsanalysen). Avfuktarsäsongen toppar juli till september, så köpguiden om källaren måste ut i september; resten av avfuktarklustret kan byggas fram till våren. Gips saknar säsong. Altan ska vara indexerat i februari.

| # | Sida | Volym | Nivå | Typ | Motiv |
|---|---|---|---|---|---|
| 1 | `/fukt/luftfuktighet-inomhus/` | 4 320 | mellan | kunskap | Testartikeln. Största informativa frasen, vintertopp 6 600 i januari, ingen konkurrent visar egna mätserier |
| 2 | `/fukt/avfuktare-kallare/` | 3 490 | mellan | köpguide | Måste ut i september, svansen på säsongen. Prövar köpguidemallen med produktkort |
| 3 | `/inomhus/gipsplugg/` | 6 400 | expert | undersökning och guide | Expertundersökning 1. Åtta pluggtyper i 13 mm gips belastas till brott med hängvåg |
| 4 | `/inomhus/gipsskruv/` | 3 600 | enkel | guide | Längd mot trä och stål, gänga, våtrum |
| 5 | `/fukt/sorptionsavfuktare/` | 1 910 | mellan | kunskap med köpråd | Bytte huvudfras från "sorptionsavfuktare eller kondensavfuktare" (10) |
| 6 | `/rakna/avfuktare/` | ingen data | mellan | kalkylator | Länktillgång, inte trafikkälla. Länkas från 2 |
| 7 | `/fukt/avfuktare-krypgrund/` | 2 600 | mellan | köpguide | Äger även "krypgrundsavfuktare". Dyrast produkter i kategorin |
| 8 | `/luftavfuktare/` | 1 650 | expert | bäst i test | Expertundersökning 2, kapacitet i kammare vid 10 och 20 grader. Kräver produkter i databasen |
| 9 | `/tester/[avfuktare 1]/` | liten | mellan | test | Vårt val på kategorisidan måste ha ett test |
| 10 | `/inomhus/skruva-i-gipsvagg/` | 840 | enkel | problemguide | Hylla, tv och tunga saker, med tabellen från 3. Skriven 2026-09-16 |
| 11 | `/inomhus/bygga-innervagg/` | 900 | mellan | projektguide | Regelavstånd mot skivbredd, höjd och ljudklass med källa. Vinnbarhet 4. Skriven 2026-09-16 som projektguide, inte kunskapssida, eftersom sökintentionen är utförande |
| 12 | `/fukt/fukt-i-kallaren/` | 480 | mellan | problemguide | Identitetssidan, men volymen (480, YoY -46 %) motiverar inte förtur |
| 13 | `/inomhus/hanga-tavla-gipsvagg/` | 150 | enkel | guide | Christians exempel. Liten men klar på en dag, egen viktabell |
| 14 | `/tester/[avfuktare 2, sorption]/` | liten | mellan | test | Täcker det kalla utrymmet. Tredje avfuktartestet stryks till fas 2 |
| 15 | `/fukt/` | ingen fras | mellan | hub | Huben, med sju sidor att länka till |
| 16 | `/inomhus/dreva-fonster/` | 320 | enkel | guide | Två forum i topp. Tätt inne, öppet ute, egen skiss |
| 17 | `/lasermatare/` | 1 140 | expert | bäst i test | Expertundersökning 3, fem avstånd mot referens. Ingen säsong, byggs i december |
| 18 | `/krysslaser/` | 550 | expert | bäst i test | Expertundersökning 4, linjeavvikelse på 10 m och synlighet i lux. Växer 23 procent |
| 19 | `/tester/[lasermätare 1]/` | liten | mellan | test | Egna mätningar på uppmätta avstånd är enkla att göra och ingen annan gör dem |
| 20 | `/verktyg/borrhammare-eller-slagborr/` | 310 | expert | undersökning | Expertundersökning 5, borrtid i betong med tre maskiner. Länkmagnet |
| 21 | `/altan/bygglov-altan/` | 1 000 | enkel | kunskap | Januari. Verifieras mot Boverket och lag 2025:974 |
| 22 | `/altan/trallskruv/` | 3 630 | enkel | guide | Binder altanguide och kalkylator. Butikerna äger frasen, det är enda argumentet |
| 23 | `/altan/` | 3 600 | mellan | hub, projektguide | Huben och projektguiden i ett. Ute i februari, då den också går in i menyn |
| 24 | `/altan/tradack-pa-mark/` | 1 000 | mellan | projektguide | Egen fras med egen volym, inte en variant av bygga altan |
| 25 | `/altan/reglar-avstand-och-dimensioner/` | 70, +80 % | mellan | kunskap, tabell | Liten men växer, tabell slår tråd |

Direkt efter, i mars: `/rakna/trall/`, `/altan/verktyg-for-altanbygge/`, `/altan/plintar-eller-markskruv/`, `/kap-och-gersagar/` (kräver sågarna), `/verktyg/valja-lasermatare/` (stöd till 17), `/fukt/avfuktare-garage/`, `/verktyg/` och `/grund/isolera-krypgrund/` (när Fukt har sju sidor). Skruvdragare och spikpistol väntar på fas 2. Slipa bänkskiva och hitta regel i vägg läggs i Inomhus när huben finns.

## 9. Klusterplan Fukt, 2026-09-30

Beslutad av SEO och GEO-agenten efter körning 4 (`docs/SOKORDSANALYS.md` avsnitt 12, där data, konkurrentkarta, alla sidor med sidofraser och startlista 6 står). Christians mål är att sajten ska vara den svenska källan om fukt i huset. Planen ger Fukt 23 nya sidor, varav två kategorisidor, en ny räknare och tio utbyggnader av sidor och räknare som finns. Pelaren växer från åtta artiklar till tjugonio, publicerade i sex omgångar om fem från oktober till mars. Registret över vem som äger vilken fras är tabellen i avsnitt 2.

**Hur klustret hänger ihop.** Hubben `/fukt/` visar sju platser i huset i ordningen Källare, Krypgrund och grund, Vind, Garage och förråd, Badrum och tvättstuga, Fönster och väggar, Luften inomhus, och sist Hela huset för mögel, mätning, fuktskada och radon. Inga delhubbar, eftersom ingen plats har en egen fras som bär en sida. Mätningen är en egen gren med kategorisidan `/fuktmatare/` som nav. Avfuktarna har kategorisidan `/luftavfuktare/` och en köpguide per plats. Tjänsterna (besiktning, sanering, fuktkontroll) och försäkringen är avsnitt på kunskapssidorna, inte egna sidor. Radon är med med två sidor. Husvagn och båt är inte med. Gränsen mot Grund, El, Tak och Badrum ligger kvar, och hubben länkar till deras fuktsidor under rätt plats.

**Rotnamnrymden** får två kategorier, `fuktmatare` och `luftfuktare`, om affiliateagenten säger ja. Ingen av dem krockar med en pelare, en befintlig kategori eller `RESERVERADE_ROTSLUGS`.

**Omgångarna** (detaljerna i avsnitt 12.7 i sökordsanalysen):

| Omgång | Klar | Verktyg först | Sidor |
|---|---|---|---|
| A | 31 oktober | daggpunkt, förval per rum | kondens på fönster (utbyggnad), hygrometer, fuktslukare, kallras, luftfuktighet inomhus (utbyggnad); plus metadata på `/luftavfuktare/` |
| B | 30 november | elkostnad, förval per maskin | luftfuktare, radon, fukt på vinden, avfuktare vind, hussvamp |
| C | 20 december | fuktkvot, ny | fuktmätare, fuktkvot, svartmögel, mögel i huset, mögellukt |
| D | 31 januari | | svartmögel badrum, badrumsfläkt, självdrag, avfuktare tvättstuga, torpargrund |
| E | 28 februari | | radonsug, mögel på vinden, fuktskada, vattenskada, fuktmätning betong |
| F | 31 mars | | dräneringsrör, dränera hus (utbyggnad), fukt i källaren (utbyggnad), isolera krypgrund (utbyggnad), avfuktare garage (utbyggnad) |

`/fukt/fukt-i-krypgrund/` ligger i startlista 5 och går ut i oktober med sidofraserna från avsnitt 12.4 inlagda.

### Vad hantverkaren behöver veta

Varje omgång får sin checklista i `docs/briefer/seo-checklista-[datum]/fukt-6-[omgång].md` innan du börjar, med minst tre punkter på vad sidan ska ha som ettan saknar. Sidor som står "ej läst" får sin SERP läst först. Faktabladen beställs av underlagsarbetaren som vanligt.

Före omgång A tar underlagsarbetaren fram ett gemensamt faktablad för klustret, `docs/briefer/faktablad/fukt-gemensamma-tal.md`: luftfuktighet per rum och årstid som den står på `/fukt/luftfuktighet-inomhus/`, kritiskt fukttillstånd med gällande föreskrift och paragraf, fuktkvotens gränser för mögel, röta och målning med källa, referensnivån och gränsvärdet för radon enligt SSM med författning, och mätregeln för radon. Alla sidor i klustret använder de talen och inga andra, på samma sätt som gipsklustret har sin 20-kilosgräns. Konkurrenterna ger tre olika tal för rätt luftfuktighet och tre olika år för blåbetongen, så ett tal som skiljer sig mellan två av våra sidor är det första en läsare och en AI ser.

Mögel och radon är hälsofrågor. Allt om hälsa, symptom och risk står med Folkhälsomyndigheten, SSM, Boverket eller 1177 som källa, och ingenting annat. Svartmögel är ett samlingsnamn för flera släkten, och ordet "cancerframkallande" står inte på någon sida utan en myndighet bakom.

Tjänsterna skrivs som ett avsnitt med tre delar: vad det kostar med källa och datum, när det behövs, och vad läsaren kan mäta själv först. Ingen firma nämns i brödtexten.

Egna mätningar står på en sida bara om de är gjorda. Två sidor kan få en som ingen konkurrent har: fuktslukaren (burken vägd varje dag i ett rum med loggad luftfuktighet) och hygrometern (flera instrument i samma rum och koksaltprovet). Om de inte görs bygger sidorna på datablad och säkerhetsdatablad, och det står så.

Utbyggnaderna är tillägg, inte omskrivningar. Kondens på fönster får huvudfrasen "kondens på fönster" först i seoTitle och ett avsnitt om utsidan och mellan glasen. Luftfuktighet inomhus får vinter och sommar som egna H2 och en kortare koksalt-H2 som länkar till hygrometern. Fukt i källaren får mögel och mögellukt i källaren och normal luftfuktighet i källaren sommar och vinter. Checklistan säger exakt vilken rad.

### Vad affiliateagenten behöver veta

Sex beslut, i den ordning omgångarna behöver dem:

1. **`/luftfuktare/`, besked senast 15 oktober.** 21 110 i månaden, 40 500 i februari, och ettan på "luftfuktare bäst i test" är Proffsmagasinets kundtest av tre modeller från 395 kr. Frågan är om Proffsmagasinet har ett sortiment som bär en granskning över prisgränsen. Blir svaret nej byggs `/fukt/lag-luftfuktighet/` som kunskapssida i stället, och "luftfuktare bäst i test" lämnas.
2. **Hygrometern, före omgång A.** Kunskapssida med köpråd. Priserna ligger på 100 till 1 000 kr, under gränsen i CLAUDE.md, så mitt förslag är inget kort, bara textlänkar. Ditt beslut.
3. **Radonmätare, före omgång B.** "radonmätare" är 1 000 i månaden. Kort eller inte, och om Proffsmagasinet säljer dem.
4. **`/fuktmatare/`, granskning eller test, före 15 november.** 8 430 i månaden. Körning 2 visade att ett test är ovanligt enkelt att göra (samma bräda mätt med flera instrument mot torrviktsmetoden) men kräver instrument. Köp av instrument är en pengafråga till Christian. Styr mot proffssegmentet över ordervärdesgränsen.
5. **Badrumsfläkten, före omgång D.** Köpguide med produkter. Proffsmagasinets eget "bäst i test" ligger fyra och bygger på Trustpilot; modellerna i topp 5 är Fresh Intellivent Sky, PAX Calima och PAX Levante 40, alla under 2 000 kr. Vilka och om de bär ett kort. Fast anslutning i badrum är elinstallatörens jobb, och sidan säger det.
6. **Köpguiderna för vinden och tvättstugan, före omgång B respektive D.** Produkter ur `/luftavfuktare/`, sorption för kallvinden.

Utöver besluten: `/luftavfuktare/` tar det nakna ordet "avfuktare" som huvudfras i omgång A. Märkesnamnen är 12 850 i månaden och går bara att nå med tester. Wood's (2 900 på märket) och Drybox X4 (+50 %) är kandidater för nästa test när det finns mätutrustning. Kunskapssidorna om mögel, radon, fuktskada och vattenskada har inga produktkort.

### Vad UX och bygge behöver veta

1. **Hubben efter plats, före omgång B.** Hubben byggs i dag av `PelarHub.astro` i fyra grupper efter typ. Fukt behöver en platsnivå ovanför grupperna: ett valfritt frontmatterfält, till exempel `plats` med värdena kallare, krypgrund, vind, garage, badrum, fonster, luften och hela-huset, och en lista i `src/content/pelare/fukt.mdx` över sidor i andra pelare som ska visas under en plats (`/grund/dranera-hus/`, `/grund/isolera-krypgrund/`, `/grund/isolera-kallarvagg/`, `/el/tillaggsisolera-vind/`, `/tak/takfot/`, `/badrum/fogar-badrum/`, `/golv/golv-i-kallare/`). Hur det byggs är ditt beslut. Övriga hubbar ska se ut som i dag. Hubben ska gå att läsa vid 375 px med trettio sidor.
2. **`/rakna/daggpunkt/`, före omgång A.** Förval för källare, krypgrund, kallvind, garage, badrum och sovrum med rummets normala intervall i resultatet, fönstret som kall yta ur U-värdet, och en statisk tabell under formuläret (luftens temperatur mot RF, daggpunkten i cellen) för "daggpunkt tabell".
3. **`/rakna/elkostnad/`, före omgång B.** Förval för avfuktare i källare, krypgrund, garage och på vinden, radonsug och luftfuktare, med effekt ur datablad, och ett tvättläge med kWh per kg ur Energimyndighetens test 2017 så att avfuktare och torktumlare jämförs i kronor per maskin. `/rakna/avfuktare/` visar kWh per år i resultatet och länkar till elkostnaden med förvalet ifyllt.
4. **`/rakna/fuktkvot/`, ny, före omgång C.** Två lägen: fuktkvot ur vikt före och efter torkning, och jämviktsfuktkvot ur luftens RF och temperatur. Utfall mot gränserna för ved, målning, golvläggning, mögel och röta, gränserna ur det gemensamma faktabladet. Delbart resultat i adressen, förhandsvisningsbild, egen sökfras "fuktkvot trä". Formel och konstanter tas fram av underlagsarbetaren med källa innan specen skrivs. Registret: `pelare: ['fukt']`, säsong september.
5. **Kategorisidorna `/fuktmatare/` och `/luftfuktare/`** byggs i samlingen `kategorier` när affiliateagenten sagt ja. Rotnamnrymden är kontrollerad.
6. **Illustrationer där de hjälper:** kallras vid fönster och element, självdrag med tilluft och frånluft, vinden med fuktig inneluft genom bjälklaget och takfotens ventilation, badrumsfläktens flöde och spjäll, radonsugens sugpunkt under plattan, kondens på fönstrets utsida. Hantverkaren säger i checklistan vilka som behövs på varje sida.

## Ändringar som gjorts i andra dokument

- 2026-09-15: `ARKITEKTUR.md` (kalkylatorer på `/rakna/`, guider och kunskap på `/[pelare]/[slug]/`, fältet `pelare`, rutter för `/om/` och `/forfattare/`), `DESIGN.md` (huvudmenyn, startsidans block 3 och 5, exempeladresser), `content.config.ts` (`pelare`, etikett `test` eller `granskning`).
- 2026-09-16: `ARKITEKTUR.md` (pelaren `inomhus`, kategorin `krysslaser`, fältet `niva`, undermappar, byggkontroll, illustrationer), `DESIGN.md` (menyposter i avsnitt 5, nivåetiketten i avsnitt 6), `content.config.ts` (`niva`, loader med id från filnamnet), `src/lib/pelare.ts` (inomhus, max hubbar i menyn), `supabase/seed.sql` (kategoriraden krysslaser).
- 2026-09-30: avsnitt 2, Fukt, omgjort och avsnitt 9 tillagt efter körning 4 (`SOKORDSANALYS.md` avsnitt 12). Inga andra dokument ändrade. Kodändringarna (platsfält i hubben, räknarna, kategorierna) specas av UX och bygge-agenten enligt avsnitt 9.

## Källor

- [Byggahus, bygga altan och trädäck, regler](https://www.byggahus.se/bygga/bygga-altan-tradack-regler) och [forumtråd om avstånd mellan reglar](https://www.byggahus.se/forum/threads/avstand-mellan-reglar-barlina.8018/)
- [Vi i Villa, altan och trädäck](https://viivilla.se/bygg/altan/)
- [Bygghemma, avfuktare för källare](https://www.bygghemma.se/reportage-och-guider/avfuktare-kallare/) och [bäst i test luftavfuktare](https://www.bygghemma.se/reportage-och-guider/bast-i-test-luftavfuktare/)
- [Proffsmagasinet, kap- och gersåg bäst i test](https://www.proffsmagasinet.se/kunskapsportalen/tester/test-5-populara-kap-och-gersagar), [lasermätare bäst i test](https://www.proffsmagasinet.se/kunskapsportalen/tester/lasermatare-bast-i-test) och [sorption eller kondens](https://www.proffsmagasinet.se/kunskapsportalen/guider/sorptionsavfuktare-eller-kondensavfuktare)
- [Bäst-i-test.se, avfuktare](https://www.bast-i-test.se/tester_pa_basta/avfuktare-inomhus.html), [Test.se, avfuktare](https://www.test.se/avfuktare/), [Testra, luftavfuktare källare](https://testra.se/test/luftavfuktare-kallare-bast-i-test-2026)
- [Råd & Rön, tester](https://www.radron.se/tester/) och [AlltOmBostad om Råd & Röns avfuktartest](https://www.alltombostad.se/test-av-luftavfuktare-23686/nyhet.html)
- [Ocab, fukt i källare](https://www.ocab.se/fukt-och-vattenskador/fukt-i-kallare/), [Anticimex, krypgrundsavfuktare](https://www.anticimex.se/nyhetsrum/det-har-behover-du-veta-om-krypgrundsavfuktare/), [Ozoneair, kondens mot sorption](https://ozoneair.se/kondensavfuktare-vs-sorptionsavfuktare/)
- [Bygglovstjänst, bygglov för altan 2026](https://www.bygglovstjanst.se/bygglov-for-altan/) och [BraByggare om reglerna](https://www.brabyggare.se/info/behover-jag-bygglov-for-altan-2026/)
- [Bygg.se, markskruv](https://bygg.se/markskruv/), [Byggahus, plintar och grundläggning](https://www.byggahus.se/bygga/plintar-grundlaggning-altanen)
- [Beijer, trallväljaren](https://www.beijerbygg.se/privat/trallvaljaren), [Kalkylverket, trallkalkylator](https://kalkylverket.se/kalkylatorer/bygg-renovering/material/trall-kalkylator)
- [Polarpumpen, hur mycket el drar en avfuktare](https://www.polarpumpen.se/kunskapsbanken/ventilation-avfuktare-kunskapsbank/avfuktare-kunskapsbank/valja-avfuktare/hur-mycket-el-drar-en-avfuktare/)
- [Ventilation.se, normal luftfuktighet](https://ventilation.se/sv/post/vad-ar-normal-luftfuktighet-i-ett-hus-guide-till-inomhusklimat)
- [GDS, sänksåg mot cirkelsåg](https://gds.se/verktyg/elsag/cirkelsag/darfor-ar-sanksagen-sakrare-an-cirkelsagen)
