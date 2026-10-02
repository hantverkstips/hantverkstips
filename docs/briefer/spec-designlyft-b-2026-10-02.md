# Spec: designlyftet fas B, artikelmallen och kategorisidan

UX och bygge, 2026-10-02. Fas A är committad (07a7aa4). Underlaget är Christians godkända skiss Artikel.dc.html och `docs/DESIGN.md` 5.3 till 5.6 och avsnitt 6 (Byline, Köpknapp, Produktkort, Verktygskort variant liten, Inbäddad räknare, Faktaruta och Kort svar, Reklammärkning, Frågor och svar, Innehållsförteckning, Källor, Läs vidare), och `docs/SPEC-SIDMALLAR.md` 2.2, 2.3, 2.5, 2.7, 2.8, 2.9d, 2.12, 4.2 och 4.3. Fas A:s komponentklasser (`.kort`, `.blad`, `.yta`, `.band`, `.sidram`, `.pappersruta`, `.chip-gul`, `.knapp`, `.knapp-fylld`) och regler (spec fas A avsnitt 0) gäller. Gissar du är specen fel skriven: bygg resten och skriv frågan i leveransen.

## 0. Villkor

- **SEO** (`docs/SOKORDSANALYS.md` avsnitt 13): bylinen visar publicerad och uppdaterad med exakt samma datum som `datePublished` och `dateModified` i Article-markupen, och "Christian" länkar till `/forfattare/[id]/`. Article-markupen ändras inte.
- **Budget.** Mät före du ändrar något: `/fasad/mala-om-huset/`, `/fukt/avfuktare-kallare/`, `/grund/inreda-kallare/`, `/fukt/avfuktare-vind/`, `/el/u-varde/`, `/luftavfuktare/`, `/krysslaser/` och de tre största artiklarna. Ingen sida får gå över 66 kB i dev-mätningen, och de tre största ska ha minst 1 kB kvar till gränsen. Räcker det inte: korta i den här ordningen och skriv vad du gjorde: (1) sidospaltens produktlista visar bara namn och pris, (2) Läs vidare blir två kort, (3) verktygskortet i spalten utgår. Texten kortas aldrig.
- Allt utseende som upprepas är komponentklasser. Inga godtyckliga hakparentesvärden utom grid-template-columns.
- Ny publik text som `TEXT SAKNAS` med nyckeln i en kommentar på raden (nycklarna i avsnitt 9). Befintlig text flyttas ordagrant.
- Affiliateagenten granskar produktkortet, köpknappen, reklambandet och sidospaltens produktlista i dev innan fasen är klar; UX och bygge skickar den.

## 1. Delade ändringar

**1.1 Tvåspalten.** `.tvaspalt` får `max-width: 66rem`, `.tvaspalt-rad` `grid-template-columns: minmax(0, 44rem) 300px` (förut 16rem). Sidospalten är `position: sticky; top: 24px` från `lg`.

**1.2 Tabeller i brödtext och jämförelsetabellen.** 1 px `linje` runt varje cell (`th` och `td`), tabellhuvudet i `papper-2` som förut. Inget annat i tabellreglerna ändras.

**1.3 Ny komponent `Byline.astro`** enligt SPEC-SIDMALLAR 2.8: `{ forfattare: string; publicerad?: Date; uppdaterad?: Date; minuter?: number }`. `<p class="byline">` med `<Portratt storlek={40} />`, namnet som `<a class="lank text-blyerts font-bold" href="/forfattare/[id]/">`, "Publicerad <time>", ", uppdaterad <time>" och " · {minuter} min". Utan `publicerad` (kategorisidan): "Uppdaterad <time>". `.byline`: `display: flex; flex-wrap: wrap; align-items: center; gap: 4px 14px; font-size: 15px (0.9375rem); color: blyerts-2;`. Datumen formateras med `formateraDatum` och `datetime` med `isoDatum`, samma värden som skickas till `artikel()`.

**1.4 Läsminuter.** En funktion `lasminuter(text: string): number` i `src/lib/innehall.ts`: ta bort frontmatter, MDX-taggar (`<...>`), markdownlänkarnas adresser och tabellstreck, räkna ord (sekvenser av bokstäver eller siffror), dela med 200, avrunda uppåt, minst 1. Vyn anropar den med `entry.body`.

**1.5 `Reklamband.astro`.** Samma ord. Markup: `<div class="band border-t-0">` med `<p class="sidram m-0 py-2.5 text-liten text-blyerts flex flex-wrap gap-x-4">`: "**Reklam.**" i fetstil följt av resten av meningen i ett `<span>`, och länken "Så tjänar jag pengar." med `lg:ml-auto`. Ingen annan ändring i texten.

**1.6 `Faq.astro`.** Utseende enligt DESIGN.md (Frågor och svar) i en komponentklass `.faq`: `details` med `border-top: 1px solid linje; padding-block: 14px;`, sista `details` också `border-bottom`; `summary` fetstil blyerts, `min-height: 44px; display: flex; align-items: center; justify-content: space-between; gap: 16px; cursor: pointer; list-style: none;`, markören dold (`::-webkit-details-marker` och `::marker`), och `summary::after { content: "+"; color: penna; font-weight: 700; }`, `details[open] > summary::after { content: "−"; }` (U+2212). Svaret `color: blyerts-2; margin-top: 10px;`. Markupen, texterna och FAQPage är oförändrade.

**1.7 `Innehallsforteckning.astro`.** Båda varianterna i ett `.kort`. `hopfallbar`: `<details class="kort lg:hidden">` med `summary` "Innehåll, {n} avsnitt" (som i dag) i `px-4 min-h-11`, listan med 44 px per rad. `sidospalt`: `<nav class="kort px-5.5 py-4.5">` med etiketten "Innehåll, {n} avsnitt" i etikett-stil och `<ol>` utan siffror med `border-left: 1px solid linje`, länkarna `display: block; padding: 8px 0 8px 12px; color: blyerts; text-decoration: none; font-size: 15px;`, hover `color: penna`. Klassen `.innehall`.

**1.8 `Kalkylator.astro`.** `blad` blir standard (propen tas bort, alla anrop får bladet). Etikettraden: `flex flex-wrap items-baseline justify-between gap-x-4` med "Räkna själv" (eller `etikett`) i `text-penna` etikett-stil utan ikon, och räknarens namn som länk (`.lank` i `font-serif`) till höger. Registrets `rad` visas inte. Formuläret och fotraden som i dag; `visaSvar` som i fas A. 28 px ovanför och under i brödtext (`my-7`).

**1.9 `Kortsvarstext.astro` och `Faktaruta.astro`.** `variant="kortsvar"` och `Kortsvarstext` renderas som `<div class="yta kortsvar">`: `padding: 24px 28px` (16 px på mobil), `display: flex; flex-direction: column; gap: 10px;`, etiketten "Kort svar" i etikett-stil, första stycket `font-size: 19px` (text-ingress), följande i 17 px (text-brod). Ny prop på Kortsvarstext: `val?: { etikett: string; namn: string }[]`, renderade som `.chip-gul` med "{etikett}: {namn}" i en rad `flex flex-wrap gap-2.5 mt-1.5`. `fakta` blir `.blad p-4 lg:p-6`, `kopom` `.yta p-4 lg:p-6`. Det gamla linjerade papperet (`.linjerat`) används inte längre av Faktaruta.

## 2. Köpknappen (`Kopknapp.astro`)

Logiken (pris, datum, lager, `/go/`, `rel`, `modul`, `position`) är oförändrad. Utseendet:

- Roten `<div class="kopknapp-rad">`: `display: flex; flex-direction: column; gap: 10px;` från 40rem `flex-direction: row; align-items: center; gap: 16px;`.
- Knappen `<a class="knapp knapp-fylld kopknapp">` med texten "Se pris hos {butik}" i alla lägen med pris och lager. Full bredd på mobil. Slut i lager: `knapp` (kontur) och "Slut i lager hos {butik}" som i dag.
- Prisblocket `<p class="kopknapp-pris">` med priset i 19 px fetstil tabellsiffror (`formateraPris`), och under det `<span class="kopknapp-annons">` "Annonslänk · pris {kort datum}" plus " · {lagerläge}" när `lagerlage()` ger ett negativt läge (samma ord som i dag). Utan pris: bara "Annonslänk".
- `.kopknapp`, `.kopknapp-aktiv`, `.kopknapp-full` och de gamla prisraderna i `global.css` som inte längre används tas bort; testet `scripts/test-kopknapp.mjs` ska vara grönt (ändra testet bara om det låser klassnamn, och skriv i leveransen vad som ändrades).

## 3. Produktkortet (`Produktkort.astro`)

Props: `produkt`, `etikett?`, `forVem?`, `svaghet?`, `modul?`, `rekommenderad?`, `visaTestlank?`. `variant` står kvar i Props för innehållsfilerna som skickar den men påverkar ingenting.

- Roten `<div class="kort produktkort" id={`produkt-${slug}`}>`, `rekommenderad` ger ytan `ruta`. `.produktkort` skrivs om: `padding: 16px` (22 px från 40rem), från 40rem `display: grid; grid-template-columns: 150px minmax(0, 1fr); gap: 22px;`.
- Bildrutan `.produktkort-bild`: `vit`, 1 px `linje`, radie `sm`, 96 × 72 på mobil och 150 × 150 från 40rem, `img` `object-fit: contain`; utan lokal bild märkets namn i etikett-stil. På mobil står bildrutan till vänster om chip och namn (`.produktkort-topp` som flex), resten under i full bredd.
- Textdelen, uppifrån med 8 px emellan: `etikett` som `.chip-gul` (`self-start`), namnet som `<h3>` i `font-serif` 24 px (`text-h2`), `forVem` i 15 px blyerts-2 om den finns, de tre fakta, svagheten, Kopknapp, "Räkna elkostnaden" (oförändrad), "Läs testet" när test finns.
- **Tre fakta** ur ny `src/lib/produktfakta.ts`: `export const FAKTA: Record<string, readonly string[]> = { luftavfuktare: ['arbetstemp_min_c', 'kapacitet_liter_dygn', 'effekt_w'], krysslaser: ['rackvidd_m', 'noggrannhet_mm_per_10m', 'linjer'] }`; en kategori som inte står i kartan tar de tre första specs i kategorifilen som produkten har värde för. Etiketten och enheten kommer från kategorifilens `specs`. Markup `<dl class="fakta">` med tre `<div>`, var och en `<dd>` (värde och enhet, 17 px fetstil blyerts, tabellsiffror) före `<dt>` (etiketten, 14 px blyerts-2) i källordningen `dt`, `dd` men visuellt värdet överst (`display: flex; flex-direction: column-reverse;`). Tre i bredd från 40rem, under varandra på mobil. Ett värde som saknas visas inte.
- **Svagheten**: `svaghet`-propen; annars produktens test-`kopInteOm` när ett test finns. Därefter, när produkten saknar test med etiketten `test`, meningen "Jag har läst databladet men inte provat den." (befintlig text i Kategorisida.astro). Ett stycke i 15 px blyerts-2. Finns varken svaghet eller granskningsmening utgår stycket.
- Utan produkt i databasen: som i dag.

`src/content.config.ts`: `svaghet: z.string().optional()` i `produktRef`-objektet och i kategorins `val`-objekt. Inga innehållsfiler ändras; hantverkaren fyller i fältet.

## 4. Artikelmallen (`src/components/vyer/Artikel.astro`)

Enligt SPEC-SIDMALLAR 4.3 och DESIGN 5.3. `<Bas ... galleri brodsmulorIVy>`; sidan bygger `<div class="sidram pt-8">` med huvudet och tvåspalten, och sist Läs vidare som band.

1. **Huvudet** (inne i `.tvaspalt`, ovanför `.tvaspalt-rad`, så att det får samma vänsterkant): `Brodsmulor`, etiketten "{typEtikett} · {nivå} · {pelarens korta namn}" i `text-penna` etikett-stil (`mt-6`), H1 (`mt-3.5 max-w-3xl`), `Byline` (`mt-3.5`) med `minuter={lasminuter(entry.body ?? '')}`.
2. **Textspalten** (`mt-7`): ett `<div class="flex flex-col">` där huvudbilden har `order-2 lg:order-1` och Kort svar `order-1 lg:order-2` med 28 px emellan (`gap-7`). Huvudbilden: `<figure class="kort m-0 overflow-hidden">` med `<div class="pappersruta p-5">` runt bilden (attributen som i dag: `fetchpriority="high"`, ingen lazy) och `<figcaption class="px-4.5 py-3 text-liten text-blyerts-2">` med `bildtext`. Kort svar: `<Kortsvarstext>` med `val` i köpguiden (`produkter` med `etikett`, namnet med `produktNamn(await hamtaProdukt(slug))`, poster utan produkt i databasen hoppas över). Sedan `<Innehallsforteckning variant="hopfallbar">` (`mt-7`), `<div class="prosa mt-7">` med innehållet, typblocken (H2 "Produkterna jag nämner" med `id="produkterna-jag-namner"` och ett `Produktkort` per post med `etikett`, `forVem`, `svaghet`, `modul="avslut"`; `DetHarBehoverDu`), och Källor: `<section>` med `<h2 id="kallor" class="mt-10 mb-2.5 font-serif text-kortrubrik-lg">Källor</h2>` (ingen Pennstreck) och `<ol class="kallor">` (`list-style: decimal; padding-left: 20px; font-size: text-liten; line-height: 1.7; color: blyerts-2;` länkarna `.lank`). Författarrutan och den gamla listan "Läs vidare" tas bort.
3. **Sidospalten** `<aside class="mt-12 flex flex-col gap-5 lg:mt-0 lg:sticky lg:top-6">`:
   - `<Innehallsforteckning variant="sidospalt">` (bara från `lg`, som i dag).
   - "Produkterna jag nämner" när sidan har `produkter` (alla typer): `<div class="kort sidolista">` med etiketten "Produkterna jag nämner", en rad per produkt `<a href="#produkt-{slug}">` när produktkortet står på sidan (köpguide och kunskap med listan; annars `<div>`), med namnet i fetstil, `etikett` (eller `forVem` om etikett saknas) i blyerts-2 under, och priset högerställt; sist `TEXT artikel.produkter.fot` med `{datum}` = senaste `uppdaterad` bland erbjudandena (`formateraDatumKort`), 13 px. `.sidolista`: `padding: 18px 22px; display: flex; flex-direction: column; gap: 10px;` raderna `display: flex; justify-content: space-between; gap: 10px; padding-top: 8px; border-top: 1px solid linje; font-size: 15px; color: blyerts; text-decoration: none;`.
   - `<Verktygskort variant="liten">` för kategorifilens `kalkylator` när artikeln har en publicerad kategori med `kalkylator` och brödtexten (`entry.body`) varken innehåller `<Kalkylator namn="{slug}"` eller `<Verktygskort kalkylator="{slug}"`.
   - Så jobbar jag: `<div class="yta border-0 px-5.5 py-4 text-liten text-blyerts-2 flex flex-col gap-1.5">` med etiketten "Så jobbar jag", `TEXT artikel.jobbar.text` och länken "Så testar jag" till `/om/sa-testar-vi/`.
   - Under `lg` står spalten under textspalten; innehållsförteckningens sidospaltsvariant är dold där.
4. **Läs vidare** efter `.sidram`: `<section class="band mt-14"><div class="sidram py-12 lg:py-14">` med `Rubrikrad` ("Läs vidare", `id="las-vidare"`) och `Artikelrutnat` med tre kort, `visaBeskrivning={false} visaMeta={false}` och etiketten bara typen (nivån utelämnas: skicka korten utan `niva`): kategorikortet (`tillKortKategori`) när kategorin är publicerad, sedan de senaste andra artiklarna i pelaren (`tillKortArtikel`), tre totalt. Färre än två: utgår. Sista sektionen före sidfoten får `pb-16 lg:pb-24` när bandet saknas.
5. Bas-propen `bred` ersätts av `galleri`. Strukturerad data, title, `og:image`, reklamregeln och komponentuppsättningen är oförändrade.

## 5. Kategorisidan (`src/components/vyer/Kategorisida.astro`)

Enligt SPEC-SIDMALLAR 4.2 (vyn) och DESIGN 5.6. `<Bas ... galleri brodsmulorIVy reklam>`.

1. Huvudet i `.sidram .tvaspalt pt-8`: brödsmulorna, etiketten "Granskad på datablad · {n} produkter" i `text-penna` (n = produkter i databasen), H1, ingressen i `text-ingress lg:text-ingress-lg`, `Byline` med bara `uppdaterad`.
2. Valen: `<section class="band mt-10"><div class="sidram py-10 lg:py-12">` med H2 (dagens rubrik, ordagrant) och `grid gap-4 lg:grid-cols-3 lg:gap-5` med ett `Produktkort` per val (`etikett`, `forVem`, `svaghet`, `modul="varaval"`, `rekommenderad`). Med tre kort i rad blir produktkortets inre rutnät för smalt: i `lg:grid-cols-3` staplas kortet (bildrutan överst, 150 px hög, full bredd) via en klass på rutnätet (`.produktkort-rad`). Tomt `val` eller databas saknas: utgår.
3. Jämförelsen i `.sidram mt-12` (sidbredd): H2 och `Jamforelsetabell` som i dag.
4. `.sidram` med `.tvaspalt .tvaspalt-rad mt-4`: i textspalten produktavsnitten som i dag (Produktkort utan `variant`), innehållet (Så väljer du, Så testade jag), Vanliga frågor om innehållet har dem; i sidospalten innehållsförteckningen (sidospaltsvariant; den hopfällbara står överst i textspalten på mobil), `<Verktygskort variant="liten">` när `kalkylator` finns (det fristående Verktygskortet i texten tas bort), och Så jobbar jag-rutan.
5. Fler: `<section class="band mt-14">` med `Rubrikrad` (`TEXT kategori.fler.rubrik` med `{namn}`) och `Artikelrutnat` (`visaMeta={false}`) av guider, kunskap, tester och jämförelser med samma `kategori`, byggda med `tillKortArtikel`, `tillKortTest` och `tillKortJamforelse`. Tomt: utgår.
6. Författarrutan tas bort. Strukturerad data, title och reklamregeln oförändrade.

## 6. Typfiltret på `/guider/`

Kategorisidorna är granskningar (SEO avsnitt 13). I `src/lib/guider.ts` blir filtrets namn för `kategori` `TEXT guider.typ.kategori.namn` och i `src/lib/kort.ts` `TYP_PLURAL.kategori` `TEXT guider.typ.kategori.plural` (den används för H1 och title på `/guider/typ/kategori/`; kontrollera i `guider.ts` om H1 och title har egna strängar och ge dem nycklarna `guider.typ.kategori.h1` och `guider.typ.kategori.titel` i så fall). Adressen `/guider/typ/kategori/` ändras inte. Kommentarerna som säger "Bäst i test" om kategorisidorna i `kort.ts` och `Kategorisida.astro` skrivs om till "granskning".

## 7. Filer

Får röras: `src/styles/global.css`; `src/components/ui/` Byline (ny), Reklamband, Faq, Innehallsforteckning, Kalkylator, Kortsvarstext, Faktaruta, Kopknapp, Produktkort, Verktygskort (bara om `liten` behöver rättas); `src/components/vyer/Artikel.astro`, `Kategorisida.astro`; `src/lib/innehall.ts` (`lasminuter`), `src/lib/produktfakta.ts` (ny), `src/lib/guider.ts`, `src/lib/kort.ts` (6), `src/content.config.ts` (`svaghet`); `scripts/test-kopknapp.mjs` bara enligt avsnitt 2. Tester och jämförelser (`src/pages/tester/`, `src/pages/jamforelser/`) får bara ändras om Produktkort- eller Kopknappsändringen ger typfel där. Rör inte räknarsidorna, formulären, formelmodulerna, innehållsfilerna, `Forfattarruta.astro` (står kvar för testsidorna).

## 8. Kontroller

1. Budgeten före och efter (avsnitt 0) med dev-rensningen, tabell i leveransen.
2. `npx astro check --minimumSeverity error`: 0 fel. Alla räknartester och `scripts/test-kopknapp.mjs`, `test-lagerlage.mjs`: gröna. `npm run kontrollera`: bara TEXT SAKNAS-fel och de kända varningarna.
3. Inga `<script>` utöver JSON-LD.
4. Skärmdumpar i `scratchpad\fas-b\` på 375 och 1280 px: `/fukt/avfuktare-garage/` (eller den köpguide som finns med produkter och kategori), `/fukt/fukt-i-kallaren/`, `/fasad/mala-om-huset/`, `/luftavfuktare/`. `scrollWidth` 375 på mobil.
5. Bylinens datum mot Article-markupen på två sidor: samma `datePublished` och `dateModified` som `<time datetime>`.
6. Tabba igenom en köpguide på 1280: fokus på chips, knappar, innehållsförteckningen, Faq-raderna och korten.
7. Bygg inte, committa inte.

## 9. Nycklar (textlistan, fas B)

`artikel.jobbar.text`, `artikel.produkter.fot`, `kategori.fler.rubrik`, `guider.typ.kategori.namn`, `guider.typ.kategori.plural` (och `.h1`, `.titel` om de behövs).

## 10. Retur efter affiliategranskningen och UX-granskningen, 2026-10-02

1. **Test eller granskning i länken** (affiliate, blockerar). `Produktkort.astro`: länken till testsidan heter "Läs granskningen" när testets `etikett` är `granskning` och "Läs testet" bara när den är `test`. Samma regel i `Kategorisida.astro` för "Läs hela testet" ("Läs hela granskningen" vid granskning). Ingen annan text ändras.
2. **Äldsta prisdatumet** (affiliate, blockerar). Där ett datum står för flera priser är det det äldsta erbjudandets `uppdaterad`, aldrig det senaste: sidospaltens fotrad i `Artikel.astro` och `prisDatum` i `kategoriVal()` i `src/lib/kort.ts` (startsidans prisrad).
3. **Fotraden säger var priserna kommer ifrån** (affiliate). Platshållaren `artikel.produkter.fot` får både `{butik}` och `{datum}` (butiken ur erbjudandena, som i köpknappen). Strängen förblir `TEXT SAKNAS` tills hantverkaren skriver den.
4. **Lagerläget i sidospaltens lista** (affiliate). För en produkt där `arSlut()` är sant står "senast" före priset, och ett negativt lagerläge ur `lagerlage()` står i blyerts-2 under namnet, med samma ord som köpknappen använder.
5. **Gul chip som bryts** (UX). `.chip-gul`: `border-radius: 1rem; padding-block: 4px; line-height: 1.3;` så att en etikett på två rader på mobil blir en rundad ruta.
