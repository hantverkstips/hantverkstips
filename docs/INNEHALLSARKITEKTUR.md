# Innehållsarkitektur

Beslutad 2026-09-15 av SEO-strategen, uppdaterad 2026-09-16 efter sökordsanalysen (`docs/SOKORDSANALYS.md`) och Christians beslut samma dag: ny pelare Inomhus och montering, nivå på artiklar, kategorisida för krysslaser, lättad Grund-regel och ny startlista (avsnitt 8). Styr navigation, URL-struktur och vilka sidor som byggs de första sex månaderna. Designansvarig ritar menyer och startsida mot det här dokumentet, utvecklaren bygger rutter mot avsnitt 3. Ändringar i URL-regler kräver uppdatering här och i `docs/ARKITEKTUR.md`.

Volymerna i avsnitt 2 och 8 kommer från Google Ads (`docs/data/keyword-stats-2026-09-16.csv`, Sverige, september 2024 till augusti 2026) och är genomsnitt per månad. När Search Console har tre månaders data prioriterar vi om.

## 1. Ämnesområden

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

Hub är `/fukt/`. Den äger ingen stor sökfras, den är diagnosstart och länknav. Pelaren har två säsonger: avfuktare juli till september (sommarkondensen), luftfuktighet november till januari (vinterbenet, som är större). Klustret krympte från tio till sju avfuktarsidor 2026-09-16.

| URL | Arbetstitel | Typ | Huvudfras | Volym | Intention | Prio | Affiliate |
|---|---|---|---|---|---|---|---|
| `/fukt/` | Fukt i huset, hitta orsaken innan du köper något | hub, kunskap | fuktproblem hus | ingen fras | informativ | 1 | nej, länkar till kategorier |
| `/fukt/luftfuktighet-inomhus/` | Vad är normal luftfuktighet inomhus, och när blir det fel | kunskap | luftfuktighet inomhus (äger även normal luftfuktighet inomhus) | 4 320 | informativ | 1 | nej |
| `/fukt/avfuktare-kallare/` | Rätt avfuktare till källaren, och hur stor den behöver vara | köpguide | avfuktare källare | 3 490 | kommersiell | 1 | ja |
| `/fukt/sorptionsavfuktare/` | Sorption eller kondens, temperaturen avgör | kunskap med köpråd | sorptionsavfuktare | 1 910 | informativ | 1 | en produkt per typ, sist |
| `/rakna/avfuktare/` | Hur stor avfuktare behöver du? | kalkylator | hur stor avfuktare | ingen data | kommersiell | 1 | ja, produkter som klarar resultatet |
| `/fukt/avfuktare-krypgrund/` | Avfuktare i krypgrund, varför kondensavfuktaren inte räcker | köpguide | avfuktare krypgrund (äger även krypgrundsavfuktare) | 2 600 | kommersiell | 1 | ja |
| `/luftavfuktare/` | Bästa luftavfuktaren för källare, krypgrund och garage | bäst i test | avfuktare bäst i test | 1 650 | kommersiell | 1 | ja |
| `/fukt/fukt-i-kallaren/` | Fukt i källaren, så tar du reda på varifrån den kommer | problemguide | fukt i källaren | 480 | informativ | 1 | sist, en produkt |
| `/fukt/avfuktare-garage/` | Avfuktare i garaget, kallt och stort är en egen klass | köpguide | avfuktare garage | 320 | kommersiell | 2 | ja |
| `/fukt/mogel-i-kallaren/` | Mögel i källaren, sanera själv eller ringa någon | problemguide | mögel i källaren | 260 | informativ | 2 | nej |
| `/fukt/vad-drar-en-avfuktare-i-el/` | Vad kostar en avfuktare i drift | kunskap | hur mycket el drar en avfuktare | 30 | informativ | 3 | nej, länk till kalkylator |
| `/rakna/elkostnad/` | Elkostnad för avfuktare och byggfläkt | kalkylator | elkostnad avfuktare | | informativ | 3 | nej |
| `/fukt/kondens-pa-fonster/` | Kondens på insidan av fönstret | problemguide | kondens på fönster insida | ej hämtad | informativ | 3 | nej |

### Inomhus och montering

Hub är `/inomhus/`. Gipsklustret (11 600 sökningar per månad) är större än avfuktarklustret och söks lika mycket i januari som i september. Sidorna kräver ingen produktdatabas och ingen godkänd affiliateansökan, så pelaren är första innehållsprioritet och når hubgränsen på fem sidor i november. Slipa bänkskiva (210) och hitta regel i vägg (110) läggs här när huben finns.

| URL | Arbetstitel | Typ | Huvudfras | Volym | Nivå | Prio | Affiliate |
|---|---|---|---|---|---|---|---|
| `/inomhus/` | Inomhus, väggar som håller och saker som sitter kvar | hub | ingen fras | | | 1 | nej |
| `/inomhus/gipsplugg/` | Gipsplugg, åtta pluggtyper belastade till brott | undersökning och guide (kunskap) | gipsplugg (äger även plugg gipsvägg) | 6 400 | expert | 1 | nej |
| `/inomhus/gipsskruv/` | Gipsskruv, rätt längd och gänga mot trä och stål | guide (kunskap) | gipsskruv | 3 600 | enkel | 1 | nej |
| `/inomhus/skruva-i-gipsvagg/` | Skruva i gipsvägg, hylla, tv och tunga saker | projektguide | skruva i gipsvägg (äger även montera tv på gipsvägg, hylla gipsvägg) | 840 | enkel | 1 | nej |
| `/inomhus/bygga-innervagg/` | Bygga innervägg, regelavståndstabellen | kunskap, tabell | bygga innervägg (äger även regelavstånd innervägg) | 900 | mellan | 1 | nej |
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
| `/krysslaser/` | Bästa krysslasern, linjeavvikelse mätt på 10 meter | bäst i test | krysslaser bäst i test (äger även krysslaser test) | 550 | kommersiell | 1 | ja |
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

1. **Öppning.** H1 som ett påstående om huset, inte om verktygsköp. Ett stycke, två textlänkar (en till en problemguide, en till en kalkylator). Motiv: identiteten sätts här, och första skärmen ska inte innehålla ett pris.
2. **Ämnesraden.** Ett kort per pelare, alla åtta i `PELARE`-ordning, fyra i rad på desktop och två på mobil: pelarikonen i 40 px, namnet och en rad om vad du hittar i ämnet (`rad` i `src/lib/pelare.ts`, chefredaktörens mening). Pelare med publicerad hub är länkar med etiketten "4 sidor", övriga står dämpade med etiketten "Kommer". Sist länken "Alla ämnen". Motiv: läsaren ska se sajtens hela ämnesbredd och kunna gå till sitt ämne redan ovanför vecket, och hubbarna får sin interna länkkraft härifrån. Ersatte "Börja här" 2026-09-16, som låg långt ned och bara visade de publicerade pelarna.
3. **Säsongens ämne.** Etiketten "Säsongens ämne · September" (månaden från byggtidpunkten), säsongens illustration med bildtext, en rubrik och en mening som chefredaktören skriver i startsidans frontmatter (`sasongRubrik`, `sasongText`), säsongens verktygskort och "Läs först" med hubbens `viktiga` för den pelare kalkylatorn hör till. Avfuktarkalkylatorn augusti till november, elkostnadskalkylatorn december till februari, trallkalkylatorn mars till juni. Motiv: kalkylatorerna är den länkbara tillgången och säsongen är den största trafikhävstången vi har.
4. **Guider och tester.** Ett rutnät av artikelkort där chefredaktörens `justNu` är det stora kortet och de fyra senaste följer, med länken "Alla guider och tester" till `/guider/`. Block 4 och 6 i den gamla ordningen (Just nu, Senaste) är alltså ett block sedan 2026-09-16: två block med samma sorts innehåll gav samma bild två gånger på en skärm. Ser justNu-kortet ut att ha samma illustration som säsongsblocket visas kortet med placeholder i stället. Motiv: färskhet, djup indexering och en huvudsak på sidan.
5. **Bäst i test just nu.** En rad per kategori med vårt val, pris, antalet granskade och länken "Alla vi granskat". Inga köpknappar på startsidan, bara länkar, så att startsidan slipper reklamband. Motiv: kategorisidorna tjänar pengarna och behöver länken, men startsidan ska inte se ut som en butik.
6. **Räkna själv.** Alla kalkylatorer som verktygskort i rutnät, men bara när det finns minst två. Med en enda är den redan säsongens verktygskort, och samma kort två gånger på en sida är samma fel som samma bild två gånger.
7. **Så jobbar vi.** Två till fyra meningar med länkar till "Så testar vi" och "Så tjänar vi pengar". Motiv: E-E-A-T-signal på den sida som får flest externa länkar.

Layouten står i `docs/DESIGN.md` avsnitt 5.1.

## 6. Intern länkning

En fras, en sida. Registret över vilken sida som äger vilken fras är tabellerna i avsnitt 2, och SEO-strategen kompletterar det innan en ny sida briefas. Regler för vilken sidtyp som äger vilket frasmönster: "bästa X", "X bäst i test", "X test" (kategori) ägs av kategorisidan. "X plats" ("avfuktare källare") ägs av köpguiden. "[modell] test" ägs av testsidan. "X eller Y" ägs av en kunskaps- eller jämförelsesida. Problemfraser ägs av problemguider. Kategorisidans avsnitt "Så väljer du" är en sammanfattning på tre till fem stycken som länkar till köpguiden, aldrig en andra guide. Två sidor får aldrig dela de tre första orden i title.

**Kunskap till produkt.** En problemguide eller kunskapsartikel länkar till köpguiden, inte direkt till kategorisidan, och gör det max en gång per H2-avsnitt i löptext. Produktkort finns bara i köpguider och projektguider, och bara i blocket "Produkterna vi nämner" sist på sidan plus högst ett kompakt kort per H2 där texten faktiskt diskuterar produkten. Kunskapsartiklar har inga produktkort och ingen reklammärkning.

**Produkt till kunskap.** Varje kategorisida länkar till sin pelarhub, sin köpguide och sin kalkylator i "Så väljer du", och till alla tester och jämförelser i kategorin. Varje test länkar till kategorisidan, köpguiden och minst en kunskapsartikel som förklarar det testet mäter (ljud, kapacitet vid låg temperatur).

**Hub till allt.** Pelarhuben länkar till varje sida i klustret, grupperat under "Hitta felet", "Välj rätt" och "Räkna", samt till kategorisidorna som hör till pelaren. Huben är handskriven, inte en automatisk lista. En hub publiceras när den har minst fem sidor att länka till.

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
| 10 | `/inomhus/skruva-i-gipsvagg/` | 840 | enkel | guide | Hylla, tv och tunga saker, med tabellen från 3 |
| 11 | `/inomhus/bygga-innervagg/` | 900 | mellan | kunskap, tabell | Regelavstånd mot skivbredd, höjd och ljudklass med källa. Vinnbarhet 4 |
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

## Ändringar som gjorts i andra dokument

- 2026-09-15: `ARKITEKTUR.md` (kalkylatorer på `/rakna/`, guider och kunskap på `/[pelare]/[slug]/`, fältet `pelare`, rutter för `/om/` och `/forfattare/`), `DESIGN.md` (huvudmenyn, startsidans block 3 och 5, exempeladresser), `content.config.ts` (`pelare`, etikett `test` eller `granskning`).
- 2026-09-16: `ARKITEKTUR.md` (pelaren `inomhus`, kategorin `krysslaser`, fältet `niva`, undermappar, byggkontroll, illustrationer), `DESIGN.md` (menyposter i avsnitt 5, nivåetiketten i avsnitt 6), `content.config.ts` (`niva`, loader med id från filnamnet), `src/lib/pelare.ts` (inomhus, max hubbar i menyn), `supabase/seed.sql` (kategoriraden krysslaser).

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
