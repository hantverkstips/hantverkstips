# Retur från SEO och GEO, fasadklustret, 2026-09-28

Steg 5 i ny-sida. De tre sidorna lästa mot `docs/briefer/seo-checklista-2026-09-28/fasad.md`, punkt för punkt, med egen dev-server (stängd efteråt) och `npm run kontrollera` (0 fel). Stil och röst bedöms inte här.

Sammanfattning: **15 punkter**: 5 på de tre sidorna (S1, S2 och en punkt per sida), 7 inlänkar (L1–L7) och 3 i hubben. En av dem stoppar publicering av tvättguiden (sidan renderas inte efter ingressen) och en stoppar fasadfärgssidan (diagrammet, som ritas nu). Resten är inlänkar, en utlänk, en title och en description.

---

## Stoppar publicering

**S1. `/fasad/tvatta-fasad/` renderas bara fram till första H2.** Dev-servern ger `Expected component Tabellyta to be defined` (tvatta-fasad.mdx rad 119). `Tabellyta` finns inte i MDX-komponenterna i `src/components/vyer/Artikel.astro` rad 84–95, och ingen annan innehållsfil använder den. Följden i HTML: ingen H2, ingen tabell, inget produktkort, ingen Faq, ingen `FAQPage`, ingen `</main>`. Google skulle få kortsvaret och innehållsförteckningen och inget annat. Åtgärd för UX och bygge: lägg till `Tabellyta` i `kunskapskomponenter` i Artikel.astro, eller ta bort omslaget rad 119 och 130 i MDX-filen och låt tabellen stå som vanlig Markdown-tabell. Kontrollera sedan att sidan har fem H2 och en `FAQPage` med fem frågor.

**S2. `/fasad/valja-fasadfarg/`: diagrammet ur Folksams data saknas** (Bättre än ettan punkt 4). Rad 137–145 är en kommentar. Det ritas enligt `spec-bilder-fasad-2026-09-28.md`; sidan publiceras inte förrän det står där kommentaren står nu, med alt under 125 tecken utan ordet "test" om vår sida (förslaget i kommentaren, 107 tecken, håller) och källan i bildtexten. Ta bort kommentaren när bilden är inlagd.

---

## Inlänkar, exakt var

Kontrollen varnar bara för fasadfärgssidan, eftersom tvätt- och fönstersidan redan har en inlänk var från fasadfärgssidan. Kravet är två från andra filer. Med länkarna nedan får tvätt tre, fönster fyra och fasadfärg tre.

| # | Fil | Stycke | Mål | Ankare (hantverkaren formulerar meningen) |
|---|---|---|---|---|
| L1 | `src/content/guider/fasad/mala-om-huset.mdx` rad 204 | Steg 1 i "Från tvätt till sista strykningen" | `/fasad/tvatta-fasad/` | Länka början av steget: `[Tvätta med fasadtvätt](/fasad/tvatta-fasad/), borsta och skölj.` Resten av steget orört |
| L2 | `src/content/guider/fasad/mala-om-huset.mdx` rad 215 | Första stycket under H2 "Måla med samma sorts färg som redan sitter där", efter meningen om att byta typ | `/fasad/valja-fasadfarg/` | En ny mening med ankaret **vilken fasadfärg som går på den gamla**. Guidens korta svar står kvar; detaljerna finns på kunskapssidan |
| L3 | `src/content/guider/fasad/mala-om-huset.mdx` rad 176 | Stycket **Verktygen.**, efter meningen om Speedheater Twin Plus | `/fasad/renovera-fonster/` | En ny mening om att samma sorts värmare tar färg och kitt på bågarna, ankare **renovera gamla fönster**. Rad 176 har redan en ändring som inte är committad; lägg länken ovanpå den |
| L4 | `src/content/guider/fasad/dreva-fonster.mdx` rad 162 | H2 "Felen bakom kallras vid nya fönster", som första mening i stycket som börjar "Imma på insidan" | `/fasad/renovera-fonster/` | Drar det mellan båge och karm på ett gammalt fönster är det bågen och tätningslisterna, inte drevet. Ankare **renovera gamla fönster** |
| L5 | `src/content/kunskap/el/u-varde.mdx` rad 227 | H2 "U-värdet på fönster gäller glas, båge och karm", sist i stycket som börjar "Vill du behålla bågarna" | `/fasad/renovera-fonster/` | En mening om att glaset byts när bågen ändå är nere för renovering. Ankare **renovera fönsterbågarna** eller **renovera gamla fönster**. Stycket har ingen annan länk |
| L6 | `src/pages/rakna/fasadyta.astro` rad 91–95, `LAS_VIDARE` | Läs vidare, som första rad | `/fasad/valja-fasadfarg/` | `{ href: '/fasad/valja-fasadfarg/', text: 'Vilken fasadfärg som går på den färg huset redan har' }`. Ingen länk i hjälptexten till färgvalet (`fasadyta.ts` rad 767); den ska vara kort |
| L7 | `src/pages/rakna/mala-ute.astro` rad 665–670, Läs vidare | Andra raden, efter fasadyta | `/fasad/tvatta-fasad/` | Ny `<li>` med texten **Tvätta fasaden och mät när den är torr nog att måla**, samma klasser som raderna runt |

L1 till L5 räknas av `npm run kontrollera`; L6 och L7 är räknarsidor och räknas inte där, men de är redaktionella länkar och gäller för klustret. Efter L2 ska varningen för fasadfärgssidan vara borta.

---

## /fasad/tvatta-fasad/

`src/content/guider/fasad/tvatta-fasad.mdx`

1. **Rad 162–166, H3 "Slamfärg borstas i första hand": utlänken till `/fasad/valja-fasadfarg/` saknas** (checklistan punkt 9, krav). Lägg den i stycket rad 164, där tvätten beror på vilken färg som sitter på väggen. Ankare till exempel **vilken färg huset har**. Det är sidans enda saknade utlänk.

Resten, punkt för punkt:

- Adress, typ, produktkort efter texten om maskinen, reklamband: Inget att ändra.
- Title "Tvätta fasad med rätt medel och torktid", 39 tecken, börjar med frasen, lovar torktiden: Inget att ändra.
- Description 150 tecken, frasen, medel och blandning, spolningen, 16 procent: Inget att ändra.
- H1 delar inte de tre första orden med title: Inget att ändra.
- H2 bär fasadtvätt och alg- och mögeltvätt, högtryckstvätt, "tvätta fasaden innan målning", dagvatten, eternit; kostnaden som H3: Inget att ändra.
- Kortsvaret, fem meningar med 16 procent och Nordsjös tvätt två dagar före: citerbart. Inget att ändra.
- Längd: cirka 1 850 ord löptext mot målet 1 200 till 1 500. Överskottet är doseringstabellen, kostnadsavsnittet och dagvattnet, som ingen i topp fem har. Inget att korta för sökningens skull. Inget att ändra.
- Utlänkar i övrigt: `/fasad/mala-om-huset/` rad 180 med ankaret "måla om huset", `<Verktygskort kalkylator="mala-ute" />` efter torktidsavsnittet, `/rakna/fasadyta/` rad 136 där mängden blandning räknas. Inget att ändra.
- Strukturerad data: `Article` och `BreadcrumbList` finns; `FAQPage` kommer först när S1 är löst. Ingen `Product`. Inget att ändra utöver S1.
- Bättre än ettan: 1 torktiden som tal med tre källor och fuktmätaren, 2 doseringstabellen med verkningstid och regnfri tid, 3 dagvattnet med kommunerna och 500-kvadratmetersgränsen ur förordningen, 4 eternit med Burlöv och Arbetsmiljöverkets ordalydelse (bekräftad i faktabladet), 5 kostnaden med daterade hyrpriser. Alla fem finns. Det ettan har som vi måste ha: diskmedel med Folksam 2011, nerifrån och upp, högtrycket som risk, slamfärg borstas. Alla finns.
- Fällor: trycket i bar och avståndet står nu med Jotuns datablad som källa, inte som eget tal. Inget att ändra.
- Huvudbilden: alt enligt spec med "tvätta fasad" eller "fasadtvätt", under 125 tecken.

## /fasad/renovera-fonster/

`src/content/guider/fasad/renovera-fonster.mdx`

1. **Rad 4, description: "tar en dryg vecka" säger emot sidan.** Kortsvaret rad 11 säger fem till åtta dagar och ingressen rad 110 "ungefär en vecka". En dryg vecka är mer än sju dagar. Byt till **"tar ungefär en vecka"** (153 tecken). Beskrivningen är det Google och en AI visar som sammanfattning, och den ska säga samma tal som sidan.

Resten, punkt för punkt:

- Title "Renovera fönster med tidsplan och kostnad", 41 tecken, lovar det ettan saknar: Inget att ändra.
- H1 "Renovera gamla fönster själv …" bär sidofrasen och delar bara första ordet med title: Inget att ändra.
- H2: renovera eller byta som fråga och först, kitta fönster, linoljefärg på fönster, tätning och drevning, kostnad och rotavdrag, bly som eget avsnitt: Inget att ändra.
- Kortsvaret, fyra meningar med kittregeln, fem till åtta dagar och Energimyndighetens halvering: Inget att ändra.
- Längd: cirka 2 450 ord mot 1 600 till 2 000. Överskottet är de tre tabellerna i avsnittet om att renovera eller byta och kostnadsexemplen. U-värdestabellerna bär Bättre än ettan punkt 3 och avsnittets intention är beslutet, inte vad U-värdet betyder, så det kannibaliserar inte `/el/u-varde/`. Inget att ändra.
- Utlänkar: `/el/u-varde/` rad 140, `<Verktygskort kalkylator="u-varde" />` efter tabellerna, `/fasad/mala-om-huset/` rad 189 vid infravärmaren, `/fasad/dreva-fonster/` rad 250, `/rakna/rotavdrag/` rad 262. Ingen länk till `/rakna/mala-ute/`, rätt eftersom räknaren inte har linoljefärg. Inget att ändra.
- Strukturerad data: `Article`, `BreadcrumbList`, `FAQPage` med fyra frågor, ingen `HowTo`, ingen `Product`. Inget att ändra.
- Bättre än ettan: 1 tidsplanen i kalenderdagar ur Byggfabriken och Ottosson, 2 kittregeln med fyra källor utan att Bolist nämns, 3 beslutsregeln med Energimyndighetens tabell och räknaren, 4 blyet med Byggnadsvårdsföreningen och Kemikalieinspektionen, 5 Kvillens pris med datum och rotavdragets gräns för verkstadsarbete. Alla fem finns. Stegen i ordning, självantändningen, kittet som eget moment och varningen för glaset finns.
- Fällor: inget "bly före 1970", ingen tid per båge, inget energiglaspris från 2012, IR-kortet efter texten och inget varmluftskort. Inget att ändra.
- För affiliateagenten, inte sökningen: dev-servern varnar `Entry kategorier → fargborttagare was not found` när sidan renderas. Produkten pekar på en kategori som inte finns.

## /fasad/valja-fasadfarg/

`src/content/kunskap/fasad/valja-fasadfarg.mdx`

1. **Rad 3, seoTitle: 49 tecken, kravet är 44 när det går, och det går.** Byt till **"Fasadfärg bäst i test? Folksams två tester"** (42 tecken). Frasen står kvar som fråga, löftet säger det sidan har som ingen annan har (de två omgångarna isär), och titeln får suffixet " · Hantverkstips", som den förlorar i dag. Suffixet är sajtens namn i sökresultatet och en del av entiteten.
2. **S2 ovan**, diagrammet.

Resten, punkt för punkt:

- Juridiska gränsen: "bäst i test" står bara som fråga i title, aldrig i H1 eller som påstående. Inget att ändra.
- Description 154 tecken: inget nyare än 2018, de fyra, typvalet efter väggen, Folksam. Inget att ändra.
- H1 "Välj fasadfärg efter det som redan sitter på väggen": löftet, inte frasen. Inget att ändra.
- H2: Folksams två tester med metod och tabell, SVEFF:s invändning och Folksams sida, receptens ändringar, inget nyare test, linoljefärg eller akrylatfärg med typtabellen, hållbarheten per typ, hur du tar reda på typen, databladet utan rangordning. Inget att ändra.
- Kortsvaret, fyra meningar, 4 av 46 med namn, SVEFF, typen före märket, och sidofrasen "vilken fasadfärg som är bäst": sidans GEO-stycke. Inget att ändra.
- Längd: cirka 2 000 ord mot 1 400 till 1 800. Överskottet är hållbarhetstabellen och databladstabellen, som båda är citerbara tabeller med enhet. Inget att ändra.
- Utlänkar: `/fasad/renovera-fonster/` rad 190 vid linoljefärgen, `<Verktygskort kalkylator="fasadyta" />` efter typtabellen, `/fasad/mala-om-huset/` rad 210, `/rakna/mala-ute/` rad 257 vid temperaturgränserna, `/fasad/tvatta-fasad/` rad 230. Alla fem krav finns. Inget att ändra.
- Strukturerad data: `Article` och `BreadcrumbList` och `FAQPage` med fem frågor. Ingen `Product`, `Review`, `ItemList` eller `AggregateRating`. Etiketten i artikelhuvudet är "Kunskap · Mellan". Inget att ändra. Delningsbilden `public/og/kunskap-valja-fasadfarg.png` finns inte ännu, så `Article` saknar `image` i dev; den skapas av bygget. Koordinatorn kontrollerar efter `npm run build` att filen finns och att `image` står i `Article`.
- Bättre än ettan: 1 de två testen isär med metod, antal och namn, 2 rakt besked om att inget nyare finns, med Råd & Rön, Konsumentverket, RISE och Tænk, 3 typtabellen med sträckförmåga och strykningar och källraden, 4 diagrammet (saknas, S2), 5 räknaren efter tabellen. Fyra av fem finns.
- Det ettan har som vi måste ha: metodraden i Faktarutan, Folksams namn, SVEFF, källorna. Alla finns.
- Fällor: ingen mening om att färgen provats, inga placeringar, databladstabellen är märkt "utan rangordning" och butiksnamnen är inte länkar. Inget att ändra.

---

## Fasadhubben

`src/content/pelare/fasad.mdx`. Hubben når fem artiklar och visar alla tre nya i Hitta felet och Gör det själv; `/rakna/fasadyta/`, `/rakna/mala-ute/` och `/rakna/u-varde/` står under Räkna.

1. **Rad 3, description** nämner fasadpanel, puts och ytterdörrar, som saknar sidor, och inte tvätt, fasadfärg, målning eller fönsterrenovering, som nu har fyra. Krav: 120 till 155 tecken, nämner det som finns. Förslag att utgå från (147 tecken): "Tvätta fasaden, välj färg efter den som redan sitter där, måla om huset och renovera eller dreva fönstren. Med räknare för fasadyta och målarväder."
2. **Rad 4, ingress** talar om att köpa panel, puts eller fönster. Samma sak: skriv om efter de fem sidorna som finns.
3. **Rad 5, uppdaterad** 2026-09-20 sätts till dagen hubben ändras.

Titeln "Fasad, fönster och dörrar" är pelarens namn och står kvar.

---

## GEO efter publicering

När sidorna är live frågar jag en AI om "tvätta fasad innan målning", "renovera fönster själv" och "fasadfärg bäst i test" och antecknar i SOKORDSANALYS.md om sajten nämns. Fasadfärgssidans kortsvar är skrivet för att bli citerat på den tredje.
