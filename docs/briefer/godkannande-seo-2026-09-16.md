# SEO-granskning av fyra publicerade sidor, 2026-09-16

Granskat av SEO-strategen mot rollbeskrivningens sex punkter och "bättre än ettan"-listan i respektive underlag (`docs/briefer/underlag-seo-*.md`). Underlag: mdx-filerna, den publicerade HTML:en (head, JSON-LD, rubriker, länkar), hubbarna `/fukt/` och `/inomhus/`, startsidan och HTTP-status för varje länkmål. Ingen fil är ändrad.

Radnummer avser mdx-filen. Sajtgemensamma fel (avsnitt 5) listas en gång och ändras en gång, men gäller alla fyra sidor.

## 1. /fukt/luftfuktighet-inomhus/

Fil: `src/content/kunskap/fukt/luftfuktighet-inomhus.mdx`

Intention: informativ, matchar. Inga produktkort, inget reklamband, verktygskort och textlänk till köpguiden. Första skärmen (Kort svar, rad 9–12) svarar med 50 procent, 30 till 70 och 75-gränsen. Kannibaliserar ingen sida. Länkar inte till utkast (fukt-i-kallaren, sa-testar-vi, avfuktare-kallare och sorptionsavfuktare svarar alla 200).

Bättre än ettan: krav 1 (daggpunktstabell, Magnus, källa) finns rad 71–78. Krav 2 (75 procent, BBR 6:52, Folkhälsomyndigheten) finns rad 84. Krav 4 (vädra, värma, avfukta med länk till köpguiden) finns rad 119–131. Krav 5 (egna mätvärden) har platshållaren enligt underlaget. Krav 3 är bara delvis uppfyllt, se punkt 3.

1. Rad 2, `title`. Title och H1 är identiska ("Rätt luftfuktighet inomhus, och vad du gör när hygrometern visar fel · Hantverkstips"). Title enligt underlag c: "Luftfuktighet inomhus, vad som är normalt och när det blir fel". Kräver fältet i avsnitt 5 C.
2. Rad 3, `description`. "Runt 50 procent är bra" saknar ämnesordet, snippeten säger inte vad som är 50 procent. Byt till: "Normal luftfuktighet inomhus är runt 50 procent, 30 till 70 går an. Tabell per rum, daggpunkt förklarad, och vad du gör när det är för fuktigt eller torrt." (155 tecken).
3. H2 "Normalt per rum och årstid", tabellen rad 100–105. Underlagets krav 3 är riktvärde per rum och årstid, med källvärden från Alingsås, Boverket och Intab tills egna mätningar finns. Nu finns bara ett riktvärde per rum, och vinter och sommar står som platshållare. Lägg till kolumnerna "Riktvärde vinter" och "Riktvärde sommar" med de källvärden som redan står i löptexten (Intab: vinter vanligen under 40, ibland under 15; Alingsås: 6 procent efter uppvärmning av luft från -20; Folkhälsomyndigheten: 45 procent vid 21 grader som utredningsgräns över eldningssäsong; Astma- och Allergiförbundet: under 45 i sovrum vintertid), behåll `[MÄTNING SAKNAS]` i "hos oss"-kolumnerna. Lägg till raden Vind, som underlaget listar (sovrum, badrum, källare, vind); vardagsrum får stå kvar.
4. Rubrikskissens H2 6, "Snickarens gräns, RF du kan lägga golv och måla vid", saknas helt. Lägg till avsnittet mellan "För fuktigt, vädra först..." och "Mät rätt...". Innehåll: RF-gräns i rummet och i underlaget för golvläggning och målning, med källa (golv- och färgtillverkarnas anvisningar, skribenten hämtar). Det är avsnittet som skiljer sidan från Alingsås för proffsläsaren och som sidans nivå "mellan, båda målgrupperna" bygger på.
5. Rad 129, `<Verktygskort kalkylator="avfuktare" />`. Underlaget anger verktygskort till `/rakna/daggpunkt/` i H2 2 som sidans enda. Räknaren finns inte (404). Nuvarande placering godtas tills den byggs. När `/rakna/daggpunkt/` finns: verktygskortet flyttas till H2 "Daggpunkten avgör om väggen blir våt" och avfuktarkalkylatorn blir en textlänk i H2 "För fuktigt", eftersom ingen sida får ha två verktygskort. Beställningen på `/rakna/daggpunkt/` till utvecklaren kvarstår, och Kort svar får länken till räknaren först då.
6. Inlänk från hubben. `src/content/pelare/fukt.mdx`, H2 "Hitta felet", rad 20. Lägg till länk till `/fukt/luftfuktighet-inomhus/` med ankaret "vad som är normal luftfuktighet inomhus" (underlag e). Sidan finns i dag bara i hubbens automatiska lista "Alla sidor i Fukt", inte i den handskrivna gruppen.
7. Inlänk från startsidan. `src/content/pelare/fukt.mdx`, `viktiga` rad 5–11. Byt raden `/rakna/avfuktare/` mot `/fukt/luftfuktighet-inomhus/` med titeln "Rätt luftfuktighet inomhus". Kalkylatorn har redan startsidans säsongskort och egen rad i sidfoten; underlaget anger "Börja här" under Fukt för den här sidan.
8. Valfritt, inte blockerande. `Article` saknar `image` eftersom frontmatter saknar `bild`. Sätt `bild` till `fukt/hus-rf-per-rum` när skissen finns (rad 107).

Beslut: Ej godkänd. Punkt 3 och 4 är krav ur underlaget och blockerar. Punkt 2, 6 och 7 görs samtidigt. Punkt 1 när avsnitt 5 C är på plats.

## 2. /fukt/avfuktare-kallare/

Fil: `src/content/guider/fukt/avfuktare-kallare.mdx`

Intention: kommersiell, matchar. Reklamband visas, köpknappar går via `/go/` med `rel="sponsored nofollow"`, tre kompakta kort på sina H2 och blocket "Produkterna vi nämner" sist. Ingen `Product`-markup, korrekt. Länkar inte till utkast (`/luftavfuktare/`, `/rakna/avfuktare/`, `/fukt/fukt-i-kallaren/` svarar 200; testsidan ligger som kommentar rad 64). Utlänkar enligt underlag e finns med rätt ankartexter: kalkylatorn (verktygskort rad 70), "sorptionsavfuktare för källare under 15 grader" (rad 122), "vad som är normal luftfuktighet inomhus" (rad 84), "ta reda på varifrån fukten kommer" (rad 187), "alla avfuktare vi testat" (rad 179). Inlänkar finns från luftfuktighetssidan, sorptionssidan, hubbens "Välj rätt", startsidans "Börja här" och kalkylatorn (`src/pages/rakna/avfuktare.astro` rad 426).

Bättre än ettan: krav 2 (temperaturtabell med "Tillverkaren uppger" och källa per rad) rad 98–106. Krav 3 (elkostnad med märkeffekt, drifttid, SCB-pris med datum) rad 140–149. Krav 4 (källaren i genomskärning som huvudbild, placering rätt och fel) rad 15–16 och 126. Krav 5 (avrådan med skäl: Meaco 10L ABC i kallt rum, eeese Adam 20 utan datablad) rad 173–177. Krav 1 saknas, se punkt 1.

1. Rad 72. Dimensioneringstabellen, underlagets krav 1, saknas; där står en kommentar som väntar på formeln. Tabellen är sidans svar på huvudfrasen (yta gånger takhöjd mot utgångs-RF, liter per dygn i cellerna, antagandena under, samma formel som `src/lib/kalkyl/avfuktare.ts`). CLAUDE.md regel 8: en sida som saknar en punkt ur listan publiceras inte. Produktexperten levererar formeln med källa, skribenten tabellen. Tillverkarnas maxytor (rad 76–80) får stå kvar som komplement, inte som ersättning.
2. Rad 9–14, `kortSvar`. Nyckeltalet i liter per dygn saknas. Underlagets första skärm: "En källare på 40 kvm med 2,2 meter i tak och 75 procent i augusti behöver minst X liter per dygn", med talet i `<Markering>`. Läggs in när punkt 1 ger talet. Typvalet efter temperatur och de tre maskinerna står redan rätt.
3. Rad 2, `title`. Identisk med H1. Title enligt underlag c: "Avfuktare till källaren, rätt typ och rätt storlek". Kräver avsnitt 5 C.
4. Rad 3, `description`. Innehåller varken ordet avfuktare eller storleken, som är huvudfrasens fråga. Byt till: "Så stor avfuktare din källare behöver, och när kondens räcker eller sorption krävs. Tre maskiner, kapacitet vid låg temperatur och elkostnad per månad." (150 tecken). Förutsätter punkt 1.
5. Kannibalisering. H2 "Temperaturen i källaren avgör typen", tabellen rad 98–106, är i praktiken samma kapacitetstabell som sorptionssidans H2 "Temperaturen där kondensavfuktaren ger upp" (fem av sju rader identiska: DSC50FM, SW59FM, Meaco 10L ABC, EvoDry 6H 2.0, Corroventa CTR). Sorptionssidan äger frasen och jämförelsen. Korta köpguidens tabell till de tre maskinerna sidan rekommenderar plus Meaco som avskräckande exempel, och låt länken rad 122 bära resten ("hela jämförelsen mellan kondens och sorption vid 5, 10 och 20 grader"). Stapeldiagrammet rad 112 visar DSC50FM, SW59FM och AD20, tre maskiner sidan inte rekommenderar; byt underlaget till de rekommenderade maskinerna eller flytta diagrammet till sorptionssidan, där kurvdiagrammet redan gör jobbet.
6. Rad 171, `[MÄTNING SAKNAS]`. Enligt underlaget, godtas.

Beslut: Ej godkänd. Punkt 1 och 2 blockerar. Punkt 4 och 5 görs samtidigt. Punkt 3 när avsnitt 5 C är på plats.

## 3. /inomhus/gipsskruv/

Fil: `src/content/guider/inomhus/gipsskruv.mdx`

Intention: informativ del av en blandad fras, matchar. Första skärmen (Kort svar, rad 9–12) ger längd för en och två skivor på trä och stål med källa, och regeln om gängan. Kannibaliserar ingen sida: upphängning är bara en avslutande H2 utan tabell, gipsplugg nämns utan att behandlas. Länkar inte till utkast: skruva-i-gipsvagg, gipsplugg och bygga-innervagg ligger som kommentarer (rad 123, 167, 168), vilket är rätt eftersom två av dem är utkast och svarar 404. Utlänk till `/om/sa-testar-vi/` med ankaret "Så hämtar vi värden från tillverkarna" finns rad 83.

Bättre än ettan: krav 2 (avståndstabell vägg och tak, kant och fält, i mm, källa per rad) rad 105–111. Krav 3 (sektionsbild) huvudbild rad 13–14. Krav 4 (försänkning rätt och fel med 0,5 till 1,0 mm, Norgips) rad 129 och 135. Krav 5 (bandad skruv, automat, djupanslag, fingängad fel i trä) rad 149–159. Krav 1 delvis, se punkt 2.

1. Rad 2, `title`. Identisk med H1. Title enligt underlag c: "Gipsskruv, rätt längd och gänga för trä och stål". Kräver avsnitt 5 C.
2. H2 "Längden bestäms av skivorna och regeln", tabellen rad 76–81. Underlagets krav 1 anger underlagen träregel, stålregel 0,5 till 0,9 mm och stålregel över 1 mm, med skruvlängd och gänga i varje cell. Tabellen har trä och stål, utan gänga i cellerna och utan tjock plåt. Lägg till kolumnen "Stålregel över 0,9 mm" (borrspets, Essve 0,7 till 2,0 mm, samma längder) och skriv gängan i cellerna (grov eller Hi-Lo i trä, fin i stål), så att tabellen svarar ensam. Gränsen 0,9 mm står redan i H2 2 (rad 95–97); den ska också synas i tabellen.
3. Rad 6, `typ: projektguide` med `behover`-lista och köpknappar avviker från underlaget (kunskap, ingen reklammärkning). Godtas: listan ligger sist under "Det här behöver du", första skärmen svarar utan produkt, och `Article` är rätt typ. SEO-strategen uppdaterar underlag f. Ingen ändring i filen.
4. Klustret. `src/content/pelare/inomhus.md` rad 7 och 11 (`viktiga`) samt rad 20 och 24 (brödtext) länkar till `/inomhus/gipsplugg/` och `/inomhus/skruva-i-gipsvagg/`, som är utkast och svarar 404 på den publicerade sajten. Startsidans "Börja här" ärver båda 404-länkarna via `viktiga`. Ta bort de två ur `viktiga` och skriv om raderna 20 och 24 utan länk tills sidorna publiceras. Huben behålls publicerad eftersom menyn och gipsskruvsidans brödsmula behöver den, trots att den har en sida i stället för fem (INNEHALLSARKITEKTUR avsnitt 6); det är ett medvetet undantag som noteras här.
5. Inlänkar: hubben länkar rätt (rad 24 och `viktiga` rad 9). Gipsplugg (sida 3) med ankaret "rätt gipsskruv när du monterar skivorna" och bygga-innervägg (sida 11) med "gipsskruv, längd och gänga" kontrolleras när de publiceras.

Beslut: Ej godkänd. Punkt 2 (krav ur underlaget) och punkt 4 (döda länkar i hub och startsida) blockerar. Punkt 1 när avsnitt 5 C är på plats.

## 4. /fukt/sorptionsavfuktare/

Fil: `src/content/kunskap/fukt/sorptionsavfuktare.mdx`

Intention: kunskap med köpråd, matchar. Tekniken och gränsen mot kondens först, två produkter sist i "Produkterna vi nämner" med reklamband, ingen `Product`-markup. Första skärmen (Kort svar, rad 10–13) svarar med 10-gradersgränsen, spannet 10 till 15 och elen per liter. Kannibaliserar inte köpguiden: källarens storlek och maskinval hänvisas dit (rad 76 och 207); att köpguidens tabell dubblerar den här sidans tabell hanteras i avsnitt 2 punkt 5. Länkar inte till utkast: krypgrundsguiden och testsidan ligger som kommentarer (rad 171, 197), `/luftavfuktare/` svarar 200.

Bättre än ettan: krav 1 (flödesskiss) huvudbild rad 14–15. Krav 2 (kapacitet för två sorptions- och två kondensmaskiner, "Tillverkaren uppger", källa per rad) rad 96–104, med 5 grader i stället för 0 och motiveringen utskriven rad 94; description rad 3 säger 5, 10 och 20 och stämmer med tabellen. Krav 3 (elkostnad, märkeffekt, drifttid, SCB-pris med datum, antaganden under) rad 116–141. Krav 4 (dB med avstånd, platshållaren `[TEST SAKNAS]`) rad 149–165. Krav 5 (våtluftslang, tätning, hygrostat, när kallt utrymme ändå ska ha kondens) rad 173–207. Kurvdiagram rad 108, installationsskiss rad 191. Alla fem finns.

Utlänkar enligt underlag e: "avfuktare till källaren" rad 76 och 207, "relativ luftfuktighet och daggpunkt" rad 88, "alla avfuktare vi testat" rad 215. Inlänkar: köpguiden ("sorptionsavfuktare för källare under 15 grader"), luftfuktighetssidan ("sorptionsavfuktare i kalla utrymmen"), hubbens "Välj rätt" ("sorption eller kondens"). Startsidans `viktiga` rymmer tre rader och de går till fukt-i-kallaren, avfuktare-kallare och luftfuktighet-inomhus (avsnitt 1 punkt 7); hubben räcker för den här sidan.

1. Rad 2, `title`. Identisk med H1. Title enligt underlag c: "Sorptionsavfuktare, när den behövs och när kondens räcker". Kräver avsnitt 5 C.

Beslut: Godkänd av SEO. Punkt 1 görs när avsnitt 5 C är på plats.

## 5. Sajtgemensamt, gäller alla fyra sidor

A. Canonical pekar på fel värd. `<link rel="canonical">`, `mainEntityOfPage`, brödsmulornas `item` och författarens `url` är alla `https://hantverkstips.se/...`, medan sidorna serveras på `https://www.hantverkstips.se/` och värden utan www svarar 308. Canonical ska peka på adressen som svarar 200. Ändra `site` i `astro.config.mjs` rad 13 och `SAJT` i `src/lib/strukturdata.ts` rad 17 till `https://www.hantverkstips.se`, eller byt primär domän i Vercel till utan www. De två måste stämma överens, och beslutet ska in i `docs/ARKITEKTUR.md`.

B. `publisher.logo` i `Article` är trasig på alla sidor: `"https://hantverkstips.sedata:image/svg+xml,..."`. `symbol.svg` inlineas som data-URI av Vite och `absolut()` i `src/lib/strukturdata.ts` rad 19–21 sätter `SAJT` framför eftersom den bara kontrollerar `http`. Byt `logo` till en fil under `public/` (`${SAJT}/favicon.svg` fungerar tekniskt; Google vill ha en rasterbild minst 112 × 112 px, så lägg en PNG av symbolen i `public/`), och låt `absolut()` lämna `data:` orört så att felet inte kommer tillbaka.

C. Title saknar eget fält. `src/content.config.ts` rad 65 (guider och kunskap) har bara `title`, och `src/layouts/Bas.astro` rad 99 skriver `<title>` som H1 plus " · Hantverkstips". Stilguiden ("Title-taggen får vara mer sökordsdriven än H1") och granskningens punkt 3 förutsätter att de kan skiljas. Lägg till valfritt `seoTitle` i schemat för guider, kunskap, tester och jämförelser, låt `src/pages/[rot]/[slug].astro` skicka `seoTitle ?? title` till layouten, och sätt sedan titlarna i punkt 1 på varje sida ovan.

D. Författare. Alla fyra har `author` Redaktionen (`/forfattare/redaktionen/`) eftersom `src/content/forfattare/christian.md` är utkast; underlagen angav `/forfattare/christian/`. Byt `forfattare: christian` i de fyra filerna när författarsidan publiceras. Inte blockerande.

E. Inga `og:`-taggar (`og:title`, `og:description`, `og:image`) i `<head>` på någon sida. Ligger utanför de sex punkterna men CLAUDE.md regel 9 kräver förhandsvisningsbild för verktyg, och artiklar som delas utan bild tappar klick. Lägg till i `Bas.astro` med `bild` från frontmatter när den finns, annars symbolen. Inte blockerande för de fyra sidorna.

## Sammanfattning

| Sida | Beslut | Blockerande punkter |
|---|---|---|
| /fukt/luftfuktighet-inomhus/ | Ej godkänd | 1.3 årstidsvärden i rumstabellen, 1.4 H2 om golv och målning |
| /fukt/avfuktare-kallare/ | Ej godkänd | 2.1 dimensioneringstabell, 2.2 liter per dygn i Kort svar |
| /inomhus/gipsskruv/ | Ej godkänd | 3.2 gänga och tjock plåt i längdtabellen, 3.4 döda länkar i hub och startsida |
| /fukt/sorptionsavfuktare/ | Godkänd av SEO | ingen |

Sajtgemensamt A (canonical) och B (publisher-logotyp) rättas en gång i kod och gäller alla sidor; C (title-fält) krävs innan punkt 1 på varje sida kan göras.
