# Innehållsarkitektur

Beslutad 2026-09-15 av SEO-strategen. Styr navigation, URL-struktur och vilka sidor som byggs de första sex månaderna. Designansvarig ritar menyer och startsida mot det här dokumentet, utvecklaren bygger rutter mot avsnitt 3. Ändringar i URL-regler kräver uppdatering här och i `docs/ARKITEKTUR.md`.

Vi har inga sökvolymer. Allt som står om volym är bedömning utifrån vad som rankar i Sverige i september 2026 och hur frågorna ställs i forum. När Search Console har tre månaders data prioriterar vi om.

## 1. Ämnesområden

Briefens sju områden håller, med två justeringar. "Grund och källare" överlappar "Fukt" nästan helt i hur folk söker ("fukt i källaren", "avfuktare krypgrund", "dränera hus"), så Fukt äger allt som handlar om symptom, mätning och avfuktning, medan Grund äger byggnadsåtgärderna (dränering, isolering av krypgrund, platta). Grund startar inte förrän Fukt har tio sidor. Den andra justeringen är att luftavfuktare och byggfläktar inte är "verktyg" i en husägares huvud, de är inomhusklimat. Produktkategorierna får därför egna adresser i roten (avsnitt 3) och hör hemma i flera pelare samtidigt.

| Pelare | Prefix | Omfattar |
|---|---|---|
| Fukt och inomhusklimat | `/fukt/` | Fukt och mögel i källare, krypgrund, vind och garage, luftfuktighet, kondens, avfuktning och uppvärmning som åtgärd |
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

Prioritet 1 byggs inom tre månader, 2 inom sex, 3 när data motiverar. "Affiliate" anger var köpknappar och produktkort hör hemma. Kunskapssidor har aldrig produktkort, bara textlänkar till köpguiden.

### Fukt och inomhusklimat

Hub är `/fukt/`. Den äger ingen stor sökfras, den är diagnosstart och länknav. Trafikdrivaren är problemguiden om källaren.

| URL | Arbetstitel | Typ | Huvudfras | Intention | Prio | Affiliate |
|---|---|---|---|---|---|---|
| `/fukt/` | Fukt i huset, hitta orsaken innan du köper något | hub, kunskap | fuktproblem hus | informativ | 1 | nej, länkar till kategorier |
| `/fukt/fukt-i-kallaren/` | Fukt i källaren, så tar du reda på varifrån den kommer | problemguide | fukt i källaren | informativ | 1 | sist, en produkt |
| `/fukt/luftavfuktare-kallare/` | Rätt avfuktare till källaren, och hur stor den behöver vara | köpguide | luftavfuktare källare | kommersiell | 1 | ja |
| `/fukt/avfuktare-krypgrund/` | Avfuktare i krypgrund, varför kondensavfuktaren inte räcker | köpguide | avfuktare krypgrund | kommersiell | 1 | ja |
| `/fukt/sorptionsavfuktare-eller-kondensavfuktare/` | Sorption eller kondens, temperaturen avgör | kunskap | sorptionsavfuktare eller kondensavfuktare | informativ | 1 | en produkt per typ, sist |
| `/rakna/avfuktare/` | Hur stor avfuktare behöver du? | kalkylator | avfuktare kalkylator, hur stor avfuktare | kommersiell | 1 | ja, produkter som klarar resultatet |
| `/luftavfuktare/` | Bästa luftavfuktaren för källare, krypgrund och garage | bäst i test | bästa luftavfuktare, avfuktare bäst i test | kommersiell | 1 | ja |
| `/fukt/mogel-i-kallaren/` | Mögel i källaren, sanera själv eller ringa någon | problemguide | mögel i källaren | informativ | 2 | nej |
| `/fukt/normal-luftfuktighet-inomhus/` | Vad är normal luftfuktighet inomhus, och när blir det fel | kunskap | normal luftfuktighet inomhus | informativ | 2 | nej |
| `/fukt/avfuktare-garage/` | Avfuktare i garaget, kallt och stort är en egen klass | köpguide | avfuktare garage | kommersiell | 2 | ja |
| `/fukt/vad-drar-en-avfuktare-i-el/` | Vad kostar en avfuktare i drift | kunskap | hur mycket el drar en avfuktare | informativ | 2 | nej, länk till kalkylator |
| `/rakna/elkostnad/` | Elkostnad för avfuktare och byggfläkt | kalkylator | elkostnad avfuktare | informativ | 2 | nej |
| `/fukt/kondens-pa-fonster/` | Kondens på insidan av fönstret | problemguide | kondens på fönster insida | informativ | 3 | nej |

### Altan och uteplats

Hub är `/altan/`, och här är huben själv den stora projektguiden eftersom pelaren i praktiken är ett enda projekt. Säsongen toppar april till juni, så klustret ska vara indexerat i februari.

| URL | Arbetstitel | Typ | Huvudfras | Intention | Prio | Affiliate |
|---|---|---|---|---|---|---|
| `/altan/` | Bygga altan, från plint till sista trallskruven | hub, projektguide | bygga altan | informativ | 1 | verktygslista sist |
| `/altan/bygglov-altan/` | Bygglov för altan, måtten som avgör | kunskap | bygglov altan | informativ | 1 | nej |
| `/altan/plintar-eller-markskruv/` | Plintar eller markskruv, marken bestämmer | jämförelse (metod) | markskruv eller plint | informativ | 1 | nej |
| `/altan/reglar-avstand-och-dimensioner/` | Avstånd mellan reglar och plintar, tabellen du letar efter | kunskap | avstånd mellan reglar altan | informativ | 1 | nej |
| `/altan/verktyg-for-altanbygge/` | Verktygen som gör altanbygget rakt | köpguide | verktyg bygga altan | kommersiell | 1 | ja |
| `/rakna/trall/` | Räkna ut trall, reglar och skruv | kalkylator | räkna ut trall, trallkalkylator | informativ | 1 | nej, länk till verktygsguiden |
| `/altan/valja-trall/` | Tryckimpregnerat, lärk eller komposit | köpguide (material) | vilken trall ska man välja | kommersiell | 2 | nej, vi säljer inte virke |
| `/altan/tradack-pa-mark/` | Lågt trädäck direkt på mark eller plattor | projektguide | bygga trädäck på marken | informativ | 2 | verktygslista sist |
| `/altan/vad-kostar-altan/` | Vad kostar det att bygga altan själv | kunskap | bygga altan kostnad | informativ | 2 | nej |
| `/altan/olja-och-underhall/` | Olja altanen, när och med vad | projektguide | olja altan | informativ | 2 | nej |
| `/altan/altanracke/` | Räcke på altanen, höjd och regler | kunskap | altanräcke höjd regler | informativ | 3 | nej |

### Verktyg och maskiner

Hub är `/verktyg/`. Huben listar produktkategorierna och guiderna om att välja, men har inga köpknappar. Kategorisidorna ligger i roten och räknas till klustret.

| URL | Arbetstitel | Typ | Huvudfras | Intention | Prio | Affiliate |
|---|---|---|---|---|---|---|
| `/verktyg/` | Maskinerna som är värda pengarna, och de som inte är det | hub, kunskap | verktyg husägare | informativ | 1 | nej, länkar till kategorier |
| `/lasermatare/` | Bästa lasermätaren, testad på riktiga avstånd | bäst i test | lasermätare test, bästa lasermätare | kommersiell | 1 | ja |
| `/verktyg/valja-lasermatare/` | Vilken lasermätare, räckvidd och noggrannhet du faktiskt behöver | köpguide | lasermätare avståndsmätare välja | kommersiell | 1 | ja |
| `/tester/[marke-modell]/` | Tre till fem tester av lasermätare och avfuktare | test | [modell] test | kommersiell | 1 | ja |
| `/jamforelser/[a-vs-b]/` | Leica Disto mot Bosch GLM | jämförelse | leica disto vs bosch glm | kommersiell | 2 | ja |
| `/kap-och-gersagar/` | Bästa kap- och gersågen | bäst i test | kap och gersåg bäst i test | kommersiell | 2 | ja |
| `/verktyg/valja-kapsag/` | Vilken kapsåg, klingdiameter styr vad du kan kapa | köpguide | vilken kapsåg ska jag köpa | kommersiell | 2 | ja |
| `/verktyg/sanksag-eller-cirkelsag/` | Sänksåg eller cirkelsåg | kunskap | sänksåg eller cirkelsåg | informativ | 2 | en produkt per typ, sist |
| `/verktyg/lasermatare-noggrannhet/` | Vad plus minus 1,5 mm betyder i praktiken | kunskap | lasermätare noggrannhet | informativ | 2 | nej |
| `/verktyg/batteriplattform/` | Välj batterisystem innan du väljer maskin | kunskap | vilket batterisystem ska man välja | informativ | 2 | liten, sist |
| `/rakna/kapsag-kapacitet/` | Vilken såg klarar din regel i gering | kalkylator | kapsåg kapacitet 45 grader | kommersiell | 3 | ja |

## 3. URL-struktur

Grundregel. Kunskap får pelarens prefix, produktsidor ligger platt. Läsaren och Google ser på adressen om sidan handlar om ett problem eller en produkt.

| Sidtyp | Mönster | Exempel |
|---|---|---|
| Pelarhub | `/[pelare]/` | `/fukt/` |
| Projektguide, problemguide, köpguide, kunskap | `/[pelare]/[slug]/` | `/fukt/luftavfuktare-kallare/` |
| Bäst i test (kategori) | `/[kategori]/` | `/luftavfuktare/` |
| Test | `/tester/[marke-modell]/` | `/tester/woods-mrd20/` |
| Jämförelse | `/jamforelser/[a-vs-b]/` | `/jamforelser/leica-disto-d2-vs-bosch-glm-50-c/` |
| Kalkylator | `/rakna/[slug]/` | `/rakna/avfuktare/` |
| Om sajten | `/om/[slug]/` | `/om/sa-testar-vi/` |
| Författare | `/forfattare/[slug]/` | `/forfattare/christian/` |

Beslut och motiv:

1. **Kategorisidor i roten, `/luftavfuktare/`, inte `/verktyg/luftavfuktare/`.** En luftavfuktare hör till Fukt, en kapsåg till Altan och Verktyg samtidigt. Att låsa kategorin under en pelare gör adressen fel för hälften av kategorierna. Rot-adressen är kortast, matchar frasen "luftavfuktare" och är redan beslutad i arkitekturen. Priset är att rotnamnrymden måste hållas ren; pelarslugs och kategorislugs får aldrig kollidera, och listan i den här filen är facit.
2. **Kalkylatorer flyttar från `/verktyg/` till `/rakna/`.** Briefen gjorde "Verktyg och maskiner" till en pelare och då kan `/verktyg/` inte samtidigt betyda kalkylatorer. "Räkna själv" är redan blockets namn på startsidan. Kräver ändring i `ARKITEKTUR.md` (`src/pages/verktyg/` blir `src/pages/rakna/`) och i `DESIGN.md` (exempeladresser).
3. **Guider och kunskap under pelaren, inte under `/guider/`.** Content collections behåller sina mappar (`guider`, `kunskap`), men URL:en styrs av ett nytt frontmatterfält `pelare`. Sidtypen syns inte i adressen, eftersom en kunskapsartikel kan växa till köpguide utan att flyttas. Brödsmulorna följer URL:en, så en guide i `/fukt/` visar "Hantverkstips / Fukt / Sidan".
4. **Tester och jämförelser platt.** Ett test av en kapsåg är relevant för både Altan och Verktyg. Brödsmulan för ett test går via kategorin, inte pelaren: "Hantverkstips / Luftavfuktare / Wood's MRD20".
5. **Inga underkategorier de första sex månaderna.** `/luftavfuktare/krypgrund/` skulle bli en tunn lista. Behovet täcks av köpguiden `/fukt/avfuktare-krypgrund/`. Underkategorier byggs när Search Console visar att kategorisidan rankar på en delfras den inte kan svara på.
6. **Slugs** är huvudfrasen kokad till två till fyra ord utan stoppord: `bygglov-altan`, inte `behover-jag-bygglov-for-altan`. Övriga regler enligt arkitekturen (gemener, inga diakritiska tecken, avslutande snedstreck). En publicerad URL byts aldrig utan 301.

Silorisken hanteras med länkar, inte adresser. En pelare är en ordning för läsaren och för brödsmulorna, inte en gräns för var en länk får gå. Reglerna i avsnitt 6 tvingar fram korslänkning mellan pelare och produktlager.

## 4. Navigation

Mobil först. Menyn öppnas med `<details>`, ingen JavaScript, 48 px per rad.

**Huvudmeny** (fem poster, den sjätte reserverad för nästa pelare när den har sex publicerade sidor):

1. Fukt (till `/fukt/`)
2. Altan (till `/altan/`)
3. Verktyg (till `/verktyg/`)
4. Räkna själv (till `/rakna/`)
5. Så testar vi (till `/om/sa-testar-vi/`)

Inga undermenyer i fas 1. Hubsidorna är undermenyn, det är därför de finns. På desktop ligger de fem i rad till höger om ordmärket. Ordmärket är den enda länken till startsidan.

**Mobilmenyn** visar de fem posterna, sedan en avdelare och gruppen "Bäst i test" med kategorierna som har publicerad kategorisida (max fyra rader), sedan "Om Hantverkstips".

**Sidfot**, fyra spalter på desktop, en på mobil, i den här ordningen: Ämnen (alla publicerade pelare), Bäst i test (kategorisidor), Räkna själv (kalkylatorer), Om sajten (Om oss, Så testar vi, Så tjänar vi pengar, Författare, Kontakt, Integritet). Sidfoten är sajtens säkerhet mot föräldralösa sidor, så den listar hubbar och kategorier, aldrig enskilda artiklar.

**Brödsmulor** följer URL:en och renderas som `BreadcrumbList`. Guide: Hantverkstips / Fukt / Rätt avfuktare till källaren. Test: Hantverkstips / Luftavfuktare / Wood's MRD20. Kalkylator: Hantverkstips / Räkna själv / Avfuktarkalkylator. Kategori: Hantverkstips / Luftavfuktare. På mobil visas de två sista nivåerna, enligt designdokumentet.

## 5. Startsidan

Startsidan rankar på varumärket och ingenting annat. Dess SEO-jobb är att berätta för Google vad sajten handlar om (hus, inte butik) och skicka länkkraft till hubbar, kategorisidor och kalkylatorer. Besökaren ska på tre sekunder se en redaktion som räknar och testar. Ordning uppifrån, med motiv:

1. **Öppning.** H1 som ett påstående om huset, inte om verktygsköp. Riktning (chefredaktören skriver den riktiga): "Bygg, renovera och sköt huset utan att köpa fel." Ett stycke, två textlänkar (en till en problemguide, en till en kalkylator). Motiv: identiteten sätts här, och första skärmen ska inte innehålla ett pris.
2. **Verktygskort med säsong.** Avfuktarkalkylatorn augusti till november, elkostnadskalkylatorn december till februari, trallkalkylatorn mars till juni. Motiv: kalkylatorerna är den länkbara tillgången och säsongen är den största trafikhävstången vi har.
3. **Börja här, tre pelare.** Tre rader (inte tre kolumner med ikon), en per publicerad pelare: namn i H3, en mening om vad du hittar, två till tre länkar till klustrets viktigaste sidor. Motiv: det här är sajtens karta, och det är härifrån hubbarna får sin interna länkkraft.
4. **Just nu.** En artikel vald av redaktören, med eget foto eller diagram. Motiv: färskhet och en signal att sajten uppdateras.
5. **Bäst i test just nu.** En rad per kategori med vårt val, pris och länk till kategorisidan. Inga köpknappar på startsidan, bara länkar, så att startsidan slipper reklamband. Motiv: kategorisidorna tjänar pengarna och behöver länken, men startsidan ska inte se ut som en butik.
6. **Senaste guider och tester**, sex rader. Motiv: djup indexering av nya sidor.
7. **Räkna själv.** Alla kalkylatorer som lista.
8. **Så jobbar vi.** Två till fyra meningar med länkar till "Så testar vi" och "Så tjänar vi pengar". Motiv: E-E-A-T-signal på den sida som får flest externa länkar.

Skillnaden mot skissen i `DESIGN.md` är block 3 (nytt) och att block 5 saknar köpknappar. Resten står sig.

## 6. Intern länkning

En fras, en sida. Registret över vilken sida som äger vilken fras är tabellerna i avsnitt 2, och SEO-strategen kompletterar det innan en ny sida briefas. Regler för vilken sidtyp som äger vilket frasmönster: "bästa X", "X bäst i test", "X test" (kategori) ägs av kategorisidan. "X plats" ("avfuktare källare") ägs av köpguiden. "[modell] test" ägs av testsidan. "X eller Y" ägs av en kunskaps- eller jämförelsesida. Problemfraser ägs av problemguider. Kategorisidans avsnitt "Så väljer du" är en sammanfattning på tre till fem stycken som länkar till köpguiden, aldrig en andra guide. Två sidor får aldrig dela de tre första orden i title.

**Kunskap till produkt.** En problemguide eller kunskapsartikel länkar till köpguiden, inte direkt till kategorisidan, och gör det max en gång per H2-avsnitt i löptext. Produktkort finns bara i köpguider och projektguider, och bara i blocket "Produkterna vi nämner" sist på sidan plus högst ett kompakt kort per H2 där texten faktiskt diskuterar produkten. Kunskapsartiklar har inga produktkort och ingen reklammärkning.

**Produkt till kunskap.** Varje kategorisida länkar till sin pelarhub, sin köpguide och sin kalkylator i "Så väljer du", och till alla tester och jämförelser i kategorin. Varje test länkar till kategorisidan, köpguiden och minst en kunskapsartikel som förklarar det testet mäter (ljud, kapacitet vid låg temperatur).

**Hub till allt.** Pelarhuben länkar till varje sida i klustret, grupperat under "Hitta felet", "Välj rätt" och "Räkna", samt till kategorisidorna som hör till pelaren. Huben är handskriven, inte en automatisk lista. En hub publiceras när den har minst fem sidor att länka till.

**Kalkylatorer.** Länkas med verktygskortet, ett per sida, från varje guide där resultatet är relevant, från kategorisidans "Så väljer du", från startsidan och sidfoten. Kalkylatorn länkar tillbaka till kategorisidan, köpguiden och kunskapsartikeln om hur vi räknar. Ingen sida får ha två verktygskort.

**Mängd och ankartext.** Varje ny sida har i sin brief minst tre utgående interna länkar och minst två sidor som ska länka in inom en vecka från publicering. Ankartexten säger vad sidan handlar om, aldrig "här" eller "läs mer". Bygget kör ett skript som listar sidor utan inlänk från annan sida än sidfoten; listan ska vara tom.

## 7. E-E-A-T

Google granskar affiliatesajter hårdare än andra, och recensionsriktlinjerna är tydliga med att den som skriver "test" ska ha haft produkten. Därför två etiketter: **Test** när vi haft produkten och mätt, **Granskning** när vi jämfört datablad och tredjepartsmätningar. Etiketten står i H1-blocket och i `Product`-markupen. Vi skriver aldrig "vi testade" på en granskning.

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

## 8. De 20 första sidorna

Ordningen följer säsongen: avfuktare nu (september till november), lasermätare i december när säsong saknas och produktfeeden bör finnas, altan i januari och februari för att vara indexerad till april.

| # | Sida | Motiv |
|---|---|---|
| 1 | `/om/sa-testar-vi/` | Måste finnas innan första testet. Reklambandet och författarrutan länkar hit |
| 2 | `/om/sa-tjanar-vi-pengar/` | Lagkrav i praktiken, reklambandet länkar hit |
| 3 | `/om/` med kontakt och integritet | Tre korta sidor, en dag. Förtroende och `Organization` |
| 4 | `/forfattare/christian/` | Alla artiklar behöver en människa |
| 5 | `/fukt/luftavfuktare-kallare/` | Testartikeln i planens steg 4. Kommersiell fras mitt i säsong |
| 6 | `/rakna/avfuktare/` | Första länkbara tillgången, länkas från sida 5 |
| 7 | `/luftavfuktare/` | Sidan som tjänar pengar. Kräver produkter i databasen |
| 8 | `/tester/[avfuktare 1]/` | Vårt val på kategorisidan måste ha ett test |
| 9 | `/fukt/sorptionsavfuktare-eller-kondensavfuktare/` | Frågan som avgör krypgrund mot källare, stöttar 5, 7 och 11 |
| 10 | `/tester/[avfuktare 2, sorption]/` | Täcker det kalla utrymmet |
| 11 | `/fukt/fukt-i-kallaren/` | Identitetssidan. Störst volym i pelaren, informativ, ger länkar |
| 12 | `/fukt/avfuktare-krypgrund/` | Dyrast produkter i kategorin |
| 13 | `/fukt/` | Huben, nu med fem sidor att länka till |
| 14 | `/tester/[avfuktare 3]/` | Tre tester gör kategorisidan trovärdig |
| 15 | `/fukt/normal-luftfuktighet-inomhus/` | Ren kunskap, bred fras, länkas från allt i pelaren |
| 16 | `/lasermatare/` | Andra kategorin. Ingen säsong, byggs i december |
| 17 | `/verktyg/valja-lasermatare/` | Köpguiden som kategorisidan sammanfattar |
| 18 | `/tester/[lasermätare 1]/` | Egna mätningar på uppmätta avstånd är enkla att göra och ingen annan gör dem |
| 19 | `/altan/bygglov-altan/` | Publiceras i januari, ren kunskap, hinner indexeras före våren |
| 20 | `/altan/` | Huben och projektguiden i ett. Ute i februari |

Direkt efter följer `/rakna/trall/`, `/altan/verktyg-for-altanbygge/`, `/altan/plintar-eller-markskruv/`, `/altan/reglar-avstand-och-dimensioner/` och `/verktyg/`, alla före mars.

## Ändringar som krävs i andra dokument

- `ARKITEKTUR.md`: kalkylatorer på `/rakna/`, guider och kunskap på `/[pelare]/[slug]/`, nytt frontmatterfält `pelare`, rutter för `/om/` och `/forfattare/`.
- `DESIGN.md`: huvudmenyns poster (avsnitt 4), startsidans block 3 och 5 (avsnitt 5), exempeladresser.
- `content.config.ts`: `pelare` i `artikel`, etikett `test` eller `granskning` i `tester`.

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
