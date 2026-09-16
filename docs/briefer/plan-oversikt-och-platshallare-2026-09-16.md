# Plan, översiktssidor och platshållare, 2026-09-16

Skriven av chefredaktören efter Christians två önskemål samma dag: en sida med alla kategorier, ett galleri där man ser och klickar på artiklar och guider, och att befintligt innehåll ersätter all platshållartext. Texterna ligger i `texter-platshallare-2026-09-16.md`. Designansvarig levererar layout för de fyra sidtyperna parallellt; den här planen är innehållet och ordningen.

Läget som inventeringen utgår från. Sitemapen (`/sitemap-0.xml`, hämtad 2026-09-16) listar 18 adresser: startsidan, `/fukt/`, `/inomhus/`, `/verktyg/`, `/fukt/avfuktare-kallare/`, `/fukt/fukt-i-kallaren/`, `/fukt/luftfuktighet-inomhus/`, `/fukt/sorptionsavfuktare/`, `/inomhus/gipsskruv/`, `/altan/bygga-altan/`, `/rakna/`, `/rakna/avfuktare/`, `/om/`, `/om/sa-testar-vi/`, `/om/sa-tjanar-vi-pengar/`, `/om/kontakt/`, `/om/integritet/` och `/forfattare/redaktionen/`. Noindex har `/luftavfuktare/` (frontmatter) och `/404/`; de saknas i sitemapen med flit. Allt med `utkast: true` byggs inte alls. Databasen har 15 produkter: 13 avfuktare och 2 skruvverktyg. Slugen `woods-mrd20`, som tre innehållsfiler pekar på, tas bort av `supabase/seed-produkter-2026-09-16.sql` och finns inte.

## a. Inventering

Tolv innehållsfiler har texten "Platshållartext" eller "Platshållare" i brödtext eller frontmatter, sju av dem på sidor som är publicerade och indexerbara. Därtill kommer tre publicerade sidor med mätplatshållare, två filer med produktslugs som inte finns, och sex utkast.

| Fil | Var det syns | Publicerad, i sitemap | Beslut |
|---|---|---|---|
| `sidor/startsida.mdx` | Rad 11 "Platshållartext. Chefredaktören skriver..." är första stycket under H1 på startsidan. `justNu` pekar på fukt-i-kallaren, öppningen länkar dit | Ja, ja | a. Ny H1, nytt stycke, `justNu` byts till avfuktare-kallare |
| `sidor/om.mdx` | Rad 9, första stycket på `/om/` | Ja, ja | a. Ny text. Kräver företagsnamn eller adress från Christian |
| `sidor/sa-testar-vi.mdx` | Rad 9 (första stycket), rad 17 (hela avsnittet Luftavfuktare), rad 21 (hela avsnittet Så räknar vi) | Ja, ja | a. Ny text, ärlig om att inget är mätt |
| `sidor/sa-tjanar-vi-pengar.mdx` | Rad 9, första stycket | Ja, ja | a. Ny text, säger att programmet inte är godkänt än |
| `sidor/kontakt.mdx` | Rad 8, första stycket. Ingen e-postadress på sidan | Ja, ja | a. Ny text. Kräver e-postadress från Christian |
| `sidor/integritet.mdx` | Rad 8, första stycket. Rad 14 påstår Vercel Analytics, som inte finns i `package.json` | Ja, ja | a. Ny text. Analytics-stycket tas med först när paketet finns |
| `forfattare/redaktionen.md` | Rad 8, första stycket på `/forfattare/redaktionen/`, som sidfoten länkar från varje sida | Ja, ja | a. Ny text |
| `forfattare/christian.md` | Hela filen, "[YRKE]", "[PRESENTATION]" | Nej, utkast | b. Kvar som utkast tills Christian lämnat yrke, år, foto och presentation |
| `pelare/fukt.mdx` | Rad 16, första stycket på `/fukt/`. Avsnitten under är riktiga | Ja, ja | a. Ny ingress, inledning och tre avsnitt |
| `pelare/inomhus.mdx` | Ingen platshållartext, men två "kommer"-meningar och en tunn inledning | Ja, ja | a. Lätt omskrivning, samma struktur |
| `pelare/verktyg.mdx` | Rad 12 (inledning) och rad 16 ("Hitta felet: Platshållare.") på `/verktyg/`, som ligger i huvudmenyn, i "Börja här" på startsidan och i sidfoten | Ja, ja | b. `utkast: true`. Pelaren har noll artiklar och står som "direkt efter, i mars" i startlistan |
| `pelare/altan.mdx` | Rad 14 och 18 | Nej, utkast | b. Kvar som utkast till februari |
| `kategorier/luftavfuktare.md` | Ingressen rad 5 under H1, rad 58 (första stycket efter produktavsnitten), rad 68 (hela "Så testade vi"). Sidan har 29 köpknappar och länkas från sidfot, mobilmeny, startsidans "Bäst i test just nu", huben Fukt, köpguiden, sorptionssidan och kalkylatorn | Ja, noindex, inte i sitemap | a. Ingress, "Så väljer du" och "Så granskade vi" skrivna. Noindex tas bort när affiliategranskningens punkt 1 till 3 är gjorda |
| `kategorier/krysslaser.md` | Rad 5, 33, 37, 41 | Nej, utkast | b. Kvar som utkast till mätningen (startlistan 18) |
| `guider/fukt/fukt-i-kallaren.mdx` | Rad 25 "Platshållartext. Skribenten ersätter..." är första stycket. Produktkortet på rad 49 pekar på `woods-mrd20`, som inte finns i databasen. Rad 47 säger att 10 liter räcker till 40 kvm, köpguiden säger 16. Källan på rad 20 är Boverkets startsida. Länkad från startsidan (två ställen), huben (två ställen), köpguiden och luftfuktighetsartikeln | Ja, ja | a. Interimstext av chefredaktören nu, fullständig problemguide av skribenten i nästa omgång |
| `guider/altan/bygga-altan.mdx` | Rad 26 första stycket, rad 17 "Platshållare. Här står en riktig maskin..." i verktygslistan, `woods-mrd20` som verktyg till en altan. Brödsmulan visar Altan utan länk | Ja, ja | b. `utkast: true`. Innehållet hör dessutom hemma på `/altan/`, där huben är projektguiden, och skrivs om i februari |
| `guider/inomhus/skruva-i-gipsvagg.mdx` | Hela filen | Nej, utkast | b. Kvar som utkast, skrivs i nästa omgång |
| `kunskap/inomhus/gipsplugg.mdx` | Hela filen | Nej, utkast | b. Kvar som utkast, väntar på belastningstestet |
| `tester/luftavfuktare/woods-mrd20.mdx` | Hela filen, produkten finns inte i databasen, alternativen är platshållarslugs | Nej, utkast | b. Filen döps om till `woods-sw39fw.mdx` och skrivs som granskning i nästa omgång |
| `jamforelser/luftavfuktare/woods-mrd20-vs-platshallare-sorption.mdx` | Hela filen, båda slugs saknas i databasen | Nej, utkast | b. Filen döps om till `woods-sw39fw-vs-acetec-evodry-6h-2.mdx` och skrivs efter granskningen |
| `guider/fukt/avfuktare-kallare.mdx` rad 191, `kunskap/fukt/sorptionsavfuktare.mdx` rad 165, `kunskap/fukt/luftfuktighet-inomhus.mdx` rad 116 och 122 till 125 | "[MÄTNING SAKNAS ...]", "[TEST SAKNAS ...]" och rubriken "i [månad]" i löptext och tabell | Ja, ja | c. Ligger kvar enligt koordinatorns beslut, men skrivs om till läsarmeningar utan värden (texter, sista avsnittet) |
| `src/assets/illustrationer/fukt/hus-rf-per-rum.svg` | Platshållarrutor i en illustration som ingen sida använder (kommentar i luftfuktighetsartikeln) | Nej | c. Ligger kvar oanvänd tills mätningen finns |

Ordet platshållare i `src/lib/produkter.ts`, `src/lib/affiliate.ts`, `src/pages/go/[slug].ts` och `src/content.config.ts` är kodkommentarer och variabelnamn, inte publik text. Inget att göra.

Två saker som inte är platshållare men som ändras av besluten ovan: startsidans title-tagg i `src/pages/index.astro` rad 146 ("bygg och renovera utan att köpa fel") ska följa den nya H1, och "Börja här" på startsidan visar efter steg 1 två pelare i stället för tre.

## b. Beslut per sida

**Startsidan.** H1 blir "Sköt om huset utan att köpa fel". Öppningsstycket länkar till luftfuktighetsartikeln och kalkylatorn, inte till problemguiden, eftersom luftfuktighetsartikeln är sajtens starkaste sida och problemguiden är en interimsversion. "Just nu" blir köpguiden om avfuktare till källaren: den har egen illustration, den är säsongens sida och den ska ut i september enligt startlistan. Byts i oktober till det som då är nyast.

**Hubbarna.** Fukt får ny ingress, inledning och tre handskrivna avsnitt som länkar till de fyra publicerade artiklarna, kategorisidan och kalkylatorn. Inomhus behåller sin struktur med en ärligare inledning; huben har en artikel, långt under regeln om fem, men Christian valde att ha den i menyn 2026-09-16 och gipsklustret fyller på i nästa omgång. Verktyg avpubliceras: noll artiklar, två platshållarstycken i menyn på varje sida, och startlistan har den i mars. Sidfoten, menyn och "Börja här" byggs av publicerade hubbar, så inget behöver ändras i kod.

**Kategorisidan luftavfuktare.** Ingress, "Så väljer du" och "Så granskade vi" är skrivna på köpguiden, sorptionssidan och dimensioneringstabellen. Rubriken heter "Så granskade vi" tills kammartestet finns, eftersom vi aldrig skriver "testade" om en granskning. Title och description slutar lova test. Noindex tas bort i samma commit som affiliategranskningens tre blockerare är åtgärdade (service role-nyckeln, `lankmall` till NULL, `arSlut`); en indexerad sida med 29 knappar som svarar 503 är värre än en sida utanför index.

**Fukt i källaren.** Skrivs om nu till en kort, ärlig interimsversion av chefredaktören. Skälet är att sidan är länkad från två godkända artiklar, från huben och från startsidan, och att avpublicera den skulle kräva ändringar i godkända texter. Det som står i dag är sämre än inget: en synlig platshållarrad, ett produktkort på en maskin som inte finns, och en litersiffra som motsäger köpguiden. Interimsversionen bygger på tejptestet med två citerade källor, daggpunkten från luftfuktighetsartikeln och dimensioneringen från köpguiden, med SW39FW som enda produkt. Sidan säger själv att den fullständiga guiden kommer i höst. Den fullständiga versionen (startlistan 12) skrivs av skribenten efter brief med SEO-analys av Ocab och Anticimex, och helst med Christians källarmätning.

**Bygga altan.** Avpubliceras. Sidan har platshållartext på två ställen, en avfuktare som altanverktyg, ingen hub att länka till och fel adress: projektguiden ska enligt innehållsarkitekturen vara huben `/altan/`. Adressen försvinner ur sitemapen och svarar 404; sajten är två dagar gammal och ingen 301 behövs. Skrivs i januari till februari enligt startlistan 23.

**Utkasten.** Skruva i gipsvägg, gipsplugg, krysslaser, altanhuben och Christians författarsida ligger kvar som utkast, syns inte och länkas inte. Testet och jämförelsen på woods-mrd20 döps om till maskinerna som finns i databasen, SW39FW och EvoDry 6H 2.0, och behåller `utkast: true` tills de är skrivna.

**Om-sidorna.** Alla fem skrivs nu. Så testar vi säger rakt ut att inget är mätt än och beskriver vad som kommer att mätas. Så tjänar vi pengar säger att programmet inte är godkänt än och att länkarna tills dess går ospårade; det stycket byts vid godkännande. Kontakt och Om kräver e-postadress respektive företagsnamn eller adress från Christian, och de två sidorna commitas inte förrän uppgifterna finns. Integritet får Analytics-stycket först när paketet är installerat.

**Mätplatshållarna** i de tre godkända texterna ligger kvar, men skrivs om till meningar en läsare förstår. Inga värden sätts in.

## c. Nya sidor

Två sidor, båda statiska, utan JavaScript, utan reklamband, båda i sitemapen och indexerbara.

| Sida | URL | Innehåll |
|---|---|---|
| Alla ämnen | `/amnen/` | Varje publicerad pelare med ingress och dess viktiga sidor (samma fält som "Börja här"), sedan Bäst i test (publicerade kategorier) och Räkna själv (kalkylatorregistret). Pelare som inte är publicerade står som en rad utan länk med månad, bara Altan och Verktyg som har ett datum |
| Alla guider | `/guider/` | Alla publicerade guider, kunskapsartiklar, tester och jämförelser som artikelkort, nyast först, med typ och nivå som etikett. Filtret är statiska sidor enligt designansvarigs spec (`design-startsida-oversikt-2026-09-16.md` avsnitt 6): ett filter i taget, ämne på `/guider/[pelare]/`, typ på `/guider/typ/[typ]/`, nivå på `/guider/niva/[niva]/`, ingen JavaScript. Bara filtersidor med minst en träff byggs |

Adresserna följer avsnitt 3 i `docs/INNEHALLSARKITEKTUR.md` på det sättet att de ligger i roten som en egen sidtyp, inte under en pelare. `/guider/` är ledig: beslut 3 i avsnitt 3 säger att artiklar aldrig ligger under `/guider/`, och namnet på content-mappen syns aldrig i en adress. `/amnen/` kolliderar inte med någon pelare eller kategori. Båda slugarna läggs i `RESERVERADE_ROTSLUGS` i `src/lib/pelare.ts`, i tabellen i avsnitt 3 i innehållsarkitekturen som sidtyp "Översikt" med mönstret `/amnen/` och `/guider/`, och i URL-tabellen i `docs/ARKITEKTUR.md`. Rutterna blir `src/pages/amnen/index.astro` och `src/pages/guider/index.astro`.

Sitemap: `/amnen/`, `/guider/` och filtersidorna kommer med automatiskt, de är statiska och saknar noindex. Två adresser försvinner samtidigt (`/verktyg/`, `/altan/bygga-altan/`). Filtersidor med noll träffar byggs inte, så inga tomma sidor hamnar i sitemapen; med dagens innehåll blir det ämne Fukt och Inomhus, typerna köpguide, problemguide, projektguide och kunskap, och nivåerna enkel och mellan.

Meny och sidfot följer designansvarigs spec (avsnitt 7 i samma dokument): huvudmenyn får "Guider och tester" (till `/guider/`) efter hubbarna, mobilmenyn får raden "Alla ämnen" under hubbarna, sidfotens spalt Ämnen får sist "Alla ämnen" och "Alla guider och tester", startsidans "Börja här" avslutas med "Alla ämnen" och blocket med guider med "Alla guider och tester", och hubbens lista "Alla sidor i Fukt" får länken "Alla guider i Fukt" till `/guider/fukt/`. Från innehållshåll har jag inget att invända; ordvalen är rätt och inget lovar test som inte finns, eftersom "tester" i menyn blir sant så snart den första granskningen är publicerad och etiketten på kortet säger Granskning.

Intern länkning: `/guider/` och filtersidorna länkar till varje publicerad artikel, men det räknas som en automatisk lista i `scripts/kontrollera-innehall.ts` och befriar inte någon sida från kravet på en handskriven inlänk. `/amnen/` ger hubbarna en länk till, utöver menyn. Ingen av sidorna får produktkort eller köpknappar; kategorierna på `/amnen/` är textlänkar. Titlar på filtersidorna får inte dela de tre första orden med någon artikel (innehållsarkitekturen avsnitt 6), vilket ordvalen i textdokumentet är gjorda för.

## d. Ordning, tre steg

**Steg 1, utvecklaren på Opus, en commit-serie.** Klistrar in texterna i de elva filerna enligt textdokumentet, byter `justNu` och startsidans title-tagg, sätter `utkast: true` på `pelare/verktyg.mdx` och `guider/altan/bygga-altan.mdx`, döper om test- och jämförelsefilen, byter produktkortet i fukt-i-kallaren, skriver om de tre mätplatshållarna, tar bort noindex på kategorisidan om teknisk ansvarig har gjort affiliategranskningens punkt 1 till 3 (annars i en egen commit när det är gjort), bygger `/amnen/` och `/guider/` mot designansvarigs spec, reserverar de två slugarna och uppdaterar de tre dokumenten (innehållsarkitekturen avsnitt 3 och 7, arkitekturens URL-tabell, arkitekturens meny i DESIGN.md avsnitt 5). Kör `npm run build` grönt före varje commit. Förutsätter tre uppgifter från Christian: e-postadress, företagsnamn eller adress, och bekräftat namn. Saknas de commitas allt utom `kontakt.mdx` och sista raden i `om.mdx`.

**Steg 2, en granskning.** Chefredaktören läser alla elva sidor live en gång och kontrollerar att texterna är ordagranna och att inga hakparenteser är kvar. Designansvarig granskar de två nya sidorna visuellt. Affiliateansvarig kontrollerar kategorisidan och Så tjänar vi pengar. SEO-strategen bekräftar `seoTitle` på kategorisidan och de två nya adresserna. Utvecklaren rättar, chefredaktören slutgranskar. Inga mellanled.

**Steg 3, skribenten på Opus, nästa innehållsomgång.** Sju sidor enligt avsnitt e, med brief per sida i vanlig ordning: SEO-strategens analys av ettan och listan över vad vi ska ha som ettan saknar, produktexpertens faktaunderlag, chefredaktörens brief, två utkast, granskning. Fukt i källaren och SW39FW-granskningen kan börja direkt, eftersom faktaunderlaget redan finns i köpguidens och sorptionssidans underlag.

## e. Nästa innehållsomgång

Prioritet efter `docs/SOKORDSANALYS.md` avsnitt 2, justerad för vad som går att skriva utan egna mätningar och för säsongen. Avfuktarsäsongen är i sin svans, gips saknar säsong.

| # | Sida | Startlistan | Volym | Kan skrivas nu | Motiv |
|---|---|---|---|---|---|
| 1 | `/fukt/avfuktare-krypgrund/` | 7 | 2 600 | Ja, på datablad | Dyraste produkterna i kategorin, Drybox X4 och EvoDry finns i databasen, sorptionssidan har redan halva underlaget och länkar hit med en kommentar |
| 2 | `/tester/woods-sw39fw/` som granskning | 9 | liten | Ja, på datablad | Vårt val på kategorisidan måste ha en egen sida. Etikett granskning tills maskinen är i handen; ljud och kapacitet vid 20 grader saknas i databladet och står som saknas |
| 3 | `/inomhus/bygga-innervagg/` | 11 | 900 | Ja, på Svenskt Trä, Gyproc och Norgips | Tabellsida, vinnbarhet 4, gipsskruvguiden länkar hit med en kommentar |
| 4 | `/inomhus/skruva-i-gipsvagg/` | 10 | 840 | Ja, på tillverkarnas belastningsvärden | Enkel nivå, hylla, tv och tunga saker. Egen viktabell från datablad, ersätts av hängvågstabellen när pluggundersökningen är gjord |
| 5 | `/fukt/fukt-i-kallaren/`, fullständig | 12 | 480 | Ja, bättre med Christians källarmätning | Ersätter interimsversionen. Identitetssidan, diagnosordning som Ocab och Anticimex inte ger |
| 6 | `/inomhus/hanga-tavla-gipsvagg/` | 13 | 150 | Ja | Christians exempel, klar på en dag, egen viktabell |
| 7 | `/inomhus/gipsplugg/` | 3 | 6 400 | Nej, kräver belastningstestet | Högst volym i hela listan men hela poängen är åtta pluggtyper till brott med hängvåg. Brief och testprotokoll skrivs nu så att Christian kan göra mätningen; texten skrivs när siffrorna finns |

Efter granskningen av SW39FW skrivs jämförelsen `/jamforelser/woods-sw39fw-vs-acetec-evodry-6h-2/` och granskningen `/tester/acetec-evodry-6h-2/` (startlistan 14). Verktygshuben kommer tillbaka i mars med lasermätare och krysslaser (17 och 18), altanhuben i februari (21 till 25).

Från Christian behöver omgången två saker utöver de tre uppgifterna i steg 1: källarmätningen enligt beställningen i `docs/briefer/underlag-kalkyl-avfuktare.md` avsnitt 6 (sju dygn med liter, gångtimmar, temperatur och RF), och besked om han kan göra belastningstestet av gipspluggar med hängvåg.
