# Faktablad: /rakna/gipsplugg/

Ur `src/pages/rakna/gipsplugg.astro`, `GipspluggForm.astro`, `src/lib/kalkyl/gipsplugg.ts` och registret, lästa 2026-09-20. Inget här ändras i sak.

## Metadata och namn

- SLUG gipsplugg, VERKTYGSNAMN "Vad håller i gipsväggen". Inga produktkort, inget reklamband.
- Title "Pluggväljare för gipsvägg, vad håller din vikt" 46. Får inte leda med gipsplugg. Måste ha gipsvägg + vikt. Under 44 ger varumärket.
- Description 142. Behåll plugg, gipsvägg/vägg, vikt och de tre utfallen. "vad saken är" får gå.
- H1 "Vad håller i gipsväggen? Välj plugg efter vikten". Behåll gipsvägg + vikt.
- Registret: namn "Vad håller i gipsväggen?" behålls. rad substantivramsa.

## Formuläret

- vikt "Vad saken väger" kg, hjälp: väg den, badrumsvågen med saken i famnen, dra bort egen vikt, hylla räknas fylld.
- punkter "Antal infästningspunkter" st, hjälp: alla skruvar eller krokar, två konsoler med två hål = fyra.
- sak radio SAK_VAL: tavla "Tavla eller spegel", hylla "Hylla med saker på", tv-fast "Tv på fast fäste", tv-svangarm "Tv på svängarm", skap "Skåp med lucka", krok "Handdukshängare eller krok", tak "I tak, till exempel en lampa". Legend "Vad är det som ska upp?".
- skiva radio SKIVA_VAL: ett-lag "12,5 mm, ett lag", tva-lag "12,5 mm, två lag", tunn "9,5 mm, den tunna skivan". Hjälp: skruva loss eluttag med strömmen bruten, mät i kanten; ett lag 12,5 (kallas 13); två lag dubbla; tunna 9,5.
- regel radio Ja/Nej/Vet inte, legend "Sitter det en regel bakom där saken ska sitta?". Hjälp: regeln = lodräta trä- eller stålbiten; knacka, magnet, regelsökare; vet inte → osäkra fallet.
- Knapp "Ge mig svaret".

## Konstanter (rörs inte)

- GRANS_REGEL 20 kg (egen, INNEHALLSARKITEKTUR avsnitt 2, konservativ mot mollyns 38). NORGIPS_SKIVAN 6 (5 till 6 kg skruv med plugg direkt i skivan). MIN_AVSTAND 50 mm, MAXLAST_AVSTAND 300 mm (Norgips). TAK_MAX 20 kg per fästpunkt (Norgips; stift och X-krok fungerar inte i tak). SVANGARM_FAKTOR 1,5 (egen). XKROK 5 kg (BGA).
- Infästningar (ett lag / två lag / tunn): klisterremsa 7/7/7 (3M, hela tavlan vid 60 × 90, ej på tapet, perSak), X-krok 5/5/5 (BGA, gips inte trä), klokrok 7/7/7 (3M Claw), självborrande 8/null/7 (fischer GK GKM), DuoBlade 10/20/8 (fischer, tak ok), clips 10/15/null (GDS), hålrumsplugg ø 6 18/28/null (GDS, tak ok), gipskrok stål 20/20/null (Habo, krok), gipsankare 25/40/null (GDS Duck Foot, tak ok), molly ø 10 38/70/null (GDS, expandertång, tak ok), vipplugg null/25/null (GDS, bara tak).
- STANDARD 8 kg, hylla, ett lag, 2 punkter, vet-inte → plugg, självborrande först. GRANSER vikt 0,1 till 200, punkter 1 till 12.
- Fel: /vikten/, /infästningspunkter/.
- Logik: hylla, skåp, svängarm → övre raden bär = halva punkterna nedåt, minst 1. Svängarm × 1,5. Kräver regel: svängarm (skäl /arm/), skåp (/lucka/), vikt > 20. Krok om tavla och last ≤ 5. Regel ja → regel ("bästa pluggen är ingen plugg"). Ingen klarar → kortling. Annars plugg.
- Testet matchar svarRubrik = SVAR_RUBRIK (krok "Klisterkrok eller X-krok räcker", plugg "Plugg räcker", regel "Sätt den i regeln", kortling "Kortling behövs"); svarText > 40 tecken; lastText > 20; utelamnade /X-krokar/, /tunna skivan/, /ø 8 mm/; gorInteDetHar innehåller 'svängarm', 'X-krok', '50 mm', 'en enda punkt'.

## Strängar i modulen

- SVAR_DELAR: krok "Krok"/"klisterkrok eller X-krok räcker"; plugg "Plugg"/"en plugg i skivan räcker"; regel "Regeln"/"sätt den i regeln bakom skivan"; kortling "Kortling"/"öppna väggen och sätt en kortling".
- lastText: svängarm (hävarm, övre raden × 1,5 på N punkter, vår regel), skåp (ojämnt vid luckan, hela vikten på övre), hylla (vrider sig ut), annars jämnt.
- svarText per gren: kortling utan regel (såga upp gipset mellan två reglar, kortling = kort träbit eller 12 mm plywood, sätt tillbaka, spackla); regel ja (träskruv; gipsskruven i påsen håller skiva mot regel, inget annat); vet inte (leta regel med knackning, magnet, regelsökare, annars kortling); krok (under 5 kg per punkt X-krok; klisterremsa 7 kg slätmålad, inget hål); regel ja utan krav (bästa pluggen är ingen plugg, träskruv bär mer än tabellen); ingen klarar (fördela på fler punkter eller kortling); plugg (lasten X, enklaste märkta är …, regel ändå bättre).
- utelamnade: tak (krokar, remsor, självborrande utelämnade; Norgips stift och X-krok; högst 20 kg per punkt); ej tavla (remsor, X-krokar, gipskrokar utelämnade, för tavla i tråd); tunn (hålrumsplugg, gipsankare, molly, clips saknas, inga värden, gissad siffra är ingen siffra); två lag (självborrande saknas, fischer inget värde, metallvarianten förborras ø 8 mm).
- Gör inte: svängarm i plugg (armen drar övre raden ut, träskruv i två reglar eller kortling); X-krok i tak (Norgips, lasten drar ut); tätt (50 mm, 300 mm för maxlast); en enda punkt (två delar lasten, står snett); tomvikt (överskåp med porslin dubbla).

## Resultatspalten i dag

Etikett sak på X kg, skiva. Stort ord svarOrd + svarRest. Rad punkter, regel. Last per infästningspunkt (stort tal) + lastText. svarText. Tabell "Infästningar i [skiva]" (Infästning, Last kg, Räcker), källrad, ingenKlarar-varning, utelamnade. Pekrad till #gor-inte-det-har. Länk #sa-bedomer-vi. Dela ("Dela svaret").
Kortsvar: väg och dela på punkter; under 5 kg per punkt X-krok eller remsa; upp till 8 kg självborrande; över 20 kg regel eller kortling; svängarm och skåp alltid regel.

## Brödtext

- H2 id gor-inte-det-har (villkorlig) redan under verktyget.
- H2 id plugg-i-gipsvagg "Plugg i gipsvägg, vad gipspluggen bär och var gränsen går" (ska bära "hur mycket en plugg i gipsvägg håller" + 20 kilo; gipsplugg högst en gång): skivan bär mer än folk tror, mindre än de hoppas; per skruv; hylla 80 cm, kokböcker 25 kg, fyra punkter drygt 6 kg; Norgips 6 kg direkt i skivan. Avstånd 50 och 300 mm; fyra pluggar inom en handflata.
- H3 "Hänga tungt i gipsvägg utan att öppna väggen": andra skivlaget värt mer än pluggen; molly 38 → 70 (GDS); plugg för ett lag fel i dubbelgips, når inte igenom; mät i eluttaget. Gräns 20 kg: regel (lodräta trä- eller stålbiten) eller kortling (kort träbit vågrätt mellan två reglar); tillverkarens tal gäller stilla vikt i hel skiva; gränsen vår, försiktig, tills vi belastat själva.
- H3 "Tv-fäste på gipsvägg, armen ändrar räkningen" (ska bli tydligare, nämn "montera tv på gipsvägg"): platt mot väggen: två reglar, träskruv. Arm: dra ut halvmeter, bänder, övre raden dras ut, nedre pressas in. Ingen tillverkare anger; vår faktor 1,5; beskedet detsamma: svängarm i regeln, aldrig plugg; kortling; faller framåt över soffan.
- H2 id sa-bedomer-vi "Så bedömer vi": skiss rakna/gipsplugg (alt 157 tecken i dag: genomskärning gipsvägg 12,5 med hålrum, plugg som viker ut armar, vikt i skruven). Åtta steg. Tabell 21 rader (sista "Vår egen mätning kommer i vinter"; åtta pluggtyper till brott med hängvåg i 13 mm; "fischers egen tabell för HM ligger i en PDF vi inte kunnat läsa" ska bort). Efter: talen är rekommenderad last, inte brottlast; GDS skriver vägledande; tro på förpackningen. "Vi bygger en vägg ... i vinter" (får stå som plan, inte som gjort). Verktyget ser inte din vägg: skadad skiva, urborrat hål, elkabel; borra aldrig rakt över/under uttag; regelsökare.
- Läs vidare: /inomhus/skruva-i-gipsvagg/, /inomhus/hanga-tavla-gipsvagg/, /inomhus/gipsskruv/. Lägg till /inomhus/gipsplugg/ med "gipsplugg" i ankaret.
- Faq (74 ord, ska bli 3 till 5 meningar var): hur mycket håller en plugg (beror på plugg och lag; självborrande 8 kg ett lag; molly 38, nästan dubbla i två; rekommenderad last stilla vikt, en plugg i taget). När räcker inte pluggen (över 20 kg regel eller kortling; ojämn last skåp; svängarm oavsett vikt; gränsen vår, försiktig; lank skruva-i-gipsvagg). Hur nära (aldrig under 50, 300 för maxlast; delar samma gips; fyra inom en handflata; tung sak i två värre än lättare i fyra).

## Krav ur checklistan

- Sidofraser: hur mycket en plugg i gipsvägg håller (H2), 20 kilo (resultat + H2), montera tv på gipsvägg (H3), kortling (ingress eller resultat).
- Behåll: viktgräns per pluggtyp, per infästningspunkt, armen räknas annorlunda, tillverkarens tal tills vi mätt, regel eller kortling. Inget "vi testade". Längd 1 150 till 1 400, gärna kortare än i dag.
