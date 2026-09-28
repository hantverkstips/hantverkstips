# Retur, SEO och GEO: /rakna/grannemedgivande/ med värdartikel och guide, 2026-09-28

Steg 5 i `ny-sida`. Läst mot `docs/briefer/seo-checklista-2026-09-28/raknare.md`, avsnittet /rakna/grannemedgivande/, och renderat i den dev-server som redan kördes på port 4399 (title, description, canonical, JSON-LD och länkarna lästa ur HTML:en). Bara sökningen; stil och röst är läsarens.

**Tre punkter att ändra, och en sak som stoppar committen men inte ligger på sidan.**

## Att ändra

1. **`src/pages/rakna/grannemedgivande.astro` rad 67 till 68, `BESKRIVNING`.** Huvudfrasen saknas i description; där står "grannens medgivande". Ordet **grannemedgivande** ska stå i description (skillen avsnitt 2: description med huvudfrasen; det är ordet Google fetar i snippeten på båda SERP:arna). Att byta "grannens medgivande" mot "grannemedgivande" ger 139 tecken och håller spannet 120 till 155. Samma konstant går till `WebApplication`, så strukturerad data följer med. Hantverkaren formulerar.

2. **`src/pages/rakna/grannemedgivande.astro` rad 442.** Länken till Boverket under "Läs vidare" har `rel="nofollow"`. Enligt beslutet 2026-09-24 (skillen avsnitt 4) är en redaktionell länk till en myndighet följbar och skrivs utan `rel`; det är bara källistan som behåller nofollow. Ta bort `rel="nofollow"` på den raden. Källistan på rad 422 rörs inte.

3. **`src/lib/kalkyl/register.ts` rad 169, 171, 180 och 182.** `TEXT SAKNAS: register-namn` och `register.namn` för fasadyta och kontrollplan renderas i sidfoten på **varje** sida, också på de tre sidor som granskats här (sett i HTML:en: "TEXT SAKNAS: register-namn" med länk till /rakna/fasadyta/, och en länk till /rakna/kontrollplan/). Committen med grannemedgivandet får inte ta med de två posterna så här: antingen fylls namn och rad i, eller så hålls posterna utanför registret tills räknarna är klara. Samma gäller `knappText="TEXT SAKNAS: knapp-kompakt"` för kontrollplan i `src/components/ui/Kalkylator.astro`, som syns så fort någon bäddar in den.

## Checklistan punkt för punkt

| Punkt | Resultat |
|---|---|
| 1. Adress och sidtyp | Inget att ändra. Generator med tre utfall, `pelare: ['altan']` i registret. |
| 2. Fraser | Inget att ändra på sidan. grannemedgivande i title, kortsvar, tabellens caption och Faq; mall i title; blankett i description och ingress; altan och staket i åtgärdsvalen och i H2 "Vilka byggen som kräver medgivande och varför altanen och staketet slipper"; 4,5 meter i kortsvaret och i samma H2. |
| 3. Title | Inget att ändra. "Grannemedgivande, gratis mall att skriva ut", 43 tecken, suffixet läggs på. Ingen annan title börjar med Grannemedgivande. |
| 4. Description | Punkt 1 ovan. I övrigt 142 tecken, blankett, 1 december 2025 och utan e-post finns med. |
| 5. H1 | Inget att ändra. "Grannens medgivande, se om du behöver det …" delar inte de tre första orden med title. |
| 6. H2-struktur | Inget att ändra. Kortsvaret har 4,5 m, 9 kap. 34 och 35 §§, skriftligt sedan 1 december 2025, alla ägare, huvudmannen. Åtgärdstabellen, "Lagen skrevs om 1 december 2025" som egen H2, vem som är granne, innehåll med H3 om grannehörande, och nej och återkallelse med båda källorna finns. Faq har fyra frågor som inte dubblerar avsnitten. |
| 7. Längd | Inget att ändra. Brödtexten ligger inom 1 000 till 1 300 ord; resten är tabeller, blankett och Faq. |
| 8. Bilder | Inget att ändra. Skissen: "Tomten uppifrån med ett förråd 2,0 m från tomtgränsen, inne i bältet där grannemedgivande krävs", under 125 tecken, båda orden med, talet i bildtexten. Varumärkesbilden har tom alt. Delningsbilden skapas i bygget. |
| 9. Länkar | Ut: /altan/bygglov-altan/, /rakna/bygglov-altan/ (i Läs vidare och i altanutfallet), /altan/bygga-altan/, Boverket en gång och i `kallor`. In: inbäddningen i /altan/bygglov-altan/, textlänken i /altan/bygga-altan/, och länken i /rakna/bygglov-altan/ vid utfallet "granne". Uppfyllt. /rakna/kontrollplan/ ska läggas till i Läs vidare när den räknaren publiceras; det stoppar inte den här. |
| 10. Strukturerad data | Inget att ändra. `WebApplication` med samma beskrivning som syns, `BreadcrumbList` Hantverkstips / Räkna själv / Grannemedgivande, ett `FAQPage` med samma fyra frågor och svar som syns. Canonical utan query. Den delbara adressen bär bara åtgärd, plan, avstånd, mot vad och mått, inga namn eller fastighetsbeteckningar. |
| 12. Fällor | Inget att ändra. Återkallelsen står som oavgjord, BankID lovas inte, de gamla namnen står bara som förr. Altanfrågan är avgjord och sajten säger samma sak på alla fyra ställen (se nedan). |

**Bättre än ettan**, alla fem finns:

1. Blankett att skriva ut utan e-post och inloggning: renderas i standardläget under "Medgivandet att skriva ut".
2. Lagrum och ändring i klartext: 9 kap. 34 och 35 §§, lag 2025:974, 1 december 2025, att skriftligheten är ny.
3. Tre utfall: krävs, krävs inte (altan utan tak, staket, plank högst 1,2 m, precis 4,5 m) och bygglov oavsett, både i verktyget och i tabellen som räknas fram av verktyget.
4. Specialfallen för granne: flera ägare, samfällighet, gata och park, järnväg.
5. Grannehörande mot grannemedgivande i en egen tabell.

## Värdartikeln /altan/bygglov-altan/

Inget att ändra. seoTitle (53 tecken) och description är oförändrade och bär fortfarande "bygglov altan", 1,8 m, 3,6 m och 1 december 2025. kortSvar har inte tappat något; andra stycket säger nu rätt sak om gränsen och har kvar 4,5 meter, anmälan och kommunens sista ord. Den omskrivna H2:n tar inte frasen grannemedgivande i rubriken, så den konkurrerar inte med räknaren. De två nya källorna (propositionen s. 162 och Boverkets kunskapsbank) stärker det enda påstående där sajten går emot Boverkets privatpersonssida. `dateModified` renderas 2026-09-28. Tabellen, kortsvaret, H2:n, Faq, `/rakna/bygglov-altan/` och `gransRegel` säger samma sak: öppen altan kräver inget medgivande, med tak eller glas krävs det.

**Räcker inbäddningen som enda länk?** Ja. `<Kalkylator>` renderar en vanlig `<a href="/rakna/grannemedgivande/">` med ankaret "Behöver du grannemedgivande?", som bär huvudfrasen och står i den H2 där läsaren just fått veta när pappret behövs. Skillen avsnitt 4 räknar inbäddningen som länken. En textlänk i brödtexten till samma adress på samma sida tillför ingen signal, och guiden bygga-altan har redan den handskrivna textlänken.

## Guiden /altan/bygga-altan/

Inget att ändra. seoTitle, description och kortSvar är orörda. Den nya meningen ger en textlänk med ankaret "skriftligt medgivande från grannen" som säger vart den leder, och den tar bort det gamla "vill Boverket" som motsade räknaren.
