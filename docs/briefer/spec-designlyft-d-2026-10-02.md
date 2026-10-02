# Spec: designlyftet, test- och jämförelsesidorna

UX och bygge, 2026-10-02. Det sista steget i designlyftet. Test- och jämförelsesidorna ska följa artikelmallen enligt `docs/DESIGN.md` 5.7 och 5.3 och `docs/SPEC-SIDMALLAR.md` 4.4 och 4.5. Förebilden är `src/components/vyer/Artikel.astro` som den ser ut efter fas B, och spec fas B (`docs/briefer/spec-designlyft-b-2026-10-02.md`) gäller med sina returer i avsnitt 10. Komponentklasserna och reglerna från fas A gäller.

## 0. Villkor

- **Granskning, inte test** (SEO avsnitt 13, affiliate). Etiketten är testfilens `etikett`, och båda sidorna i dag är granskningar. Ordet test får inte stå om något vi gjort när etiketten är `granskning`: rubriken "Så testade vi" blir `TEXT granskning.metod.rubrik`, och "Testad {datum}" och kolumnen "Jag mätte" visas bara när etiketten är `test`, som i dag. Sidnamnet "Så testar jag" i länken till `/om/sa-testar-vi/` är sidans titel och står kvar.
- Bylinens datum är exakt `datePublished` och `dateModified`. `Product`-markupen, `Article`-markupen, title och `og:image` ändras inte.
- **Budget.** Mät testsidorna och jämförelsen i dev före och efter. Ingen sida över 66 kB.
- Räknarfilerna under `src/pages/rakna/` rörs inte, eftersom hantverkaren skriver i dem nu.
- Ny publik text som `TEXT SAKNAS`. Befintlig text flyttas ordagrant. Noll klient-JS.

## 1. Gemensamma delar ur artikelmallen

Lyft sidospalten och källorna ur `Artikel.astro` till komponenter, så att de tre mallarna delar dem:

- `src/components/ui/Sidospalt.astro`: `{ rubriker; produkter: { slug: string; etikett?: string; forVem?: string; ankare: boolean }[]; kalkylator?: string }`. Den renderar innehållsförteckningen (sidospaltsvarianten), "Produkterna jag nämner" med pris, "senast" och lagerläge och fotraden `artikel.produkter.fot` med äldsta datumet, Verktygskort i variant liten och Så jobbar jag-rutan, exakt som i Artikel i dag.
- `src/components/ui/Kallor.astro`: `{ kallor }`, H2 "Källor" i 22 px utan pennstreck och den numrerade listan.

`Artikel.astro` byter till komponenterna. HTML:en för två artiklar ska vara byte för byte densamma före och efter (`/fukt/avfuktare-garage/` och `/fukt/fukt-i-kallaren/`). Visa det.

## 2. Testsidan (`src/pages/tester/[slug].astro`)

`<Bas ... galleri brodsmulorIVy>`. I ordning:

1. **Huvudet** som artikelns: brödsmulorna, etiketten "{typEtikett('test', etikett)} · {nivå} · {kategorins namn}" i `text-penna`, H1 och `Byline` med läsminuter. Vid etiketten `test` står "Testad {datum}" i 14 px blyerts-2 under bylinen.
2. **Spalterna** som artikelns (`.tvaspalt .tvaspalt-rad`). Textspalten:
   - Kort svar som `Kortsvarstext` när frontmatterns `kortSvar` finns.
   - Omdömesblocket som ett `.kort` med 22 till 24 px innermarginal. Från 1024 px står produktbilden i en vit ruta i 40 procent av bredden till vänster, annars "Bild saknas"-rutan. "Mitt val" visas som `.chip-gul` när produkten är kategorins första val. Omdömet följer i ingress-storlek.
   - Mätvärdestabellen med 1 px `linje` runt varje cell och tabellhuvudet i `papper-2`, samma yta som brödtabellerna, med samma kolumner som i dag.
   - Köp om och Köp inte om som en `.yta` med två delar, staplade på mobil och i två spalter från 1024 px. Sist i blocket köpknappen (`modul="kort_full"`).
   - Innehållsförteckningens mobilvariant, innehållet, "Alternativ" (H2 och ett `Produktkort` per post med `etikett` = `varfor`), "Specifikationer" (tabellen med ram runt cellerna) och metodrubriken när innehållet saknar egen (`granskning.metod.rubrik` vid granskning, dagens text vid test). Därefter `Kallor` och den avslutande köpknappen (`modul="avslut"`).
3. **Sidospalten**: `Sidospalt` med produkten själv och alternativen, där bara alternativen är ankare till sina kort, och kategorifilens `kalkylator`.
4. **Läs vidare** som band med Artikelkort (guider och kunskap i samma kategori, högst tre), som artikelns.
5. `Forfattarruta` tas bort.

## 3. Jämförelsesidan (`src/pages/jamforelser/[slug].astro`)

Samma uppbyggnad:

- Huvudet med etiketten "Jämförelse · {nivå} · {kategorins namn}" och `Byline`.
- Kort svar som `Kortsvarstext` utan omslutande `Faktaruta`.
- Innehållsförteckningens mobilvariant.
- `Jamforelsetabell` som i dag. Den får växa ut i mellanrummet mot spalten, som brödtabellerna.
- Innehållet, och "Produkterna jag nämner" (H2 med `id="produkterna-jag-namner"`, ett `Produktkort` per post med `etikett`, `forVem`, `svaghet` och `modul="avslut"`).
- `Kallor`, `Sidospalt` och Läs vidare som band. `Forfattarruta` tas bort.

Raderar ingen fil längre `Forfattarruta.astro` än, tas den bort.

## 4. Kontroller

1. Mät `/tester/acetec-evodry-6h-2/`, `/tester/woods-sw39fw/` och `/jamforelser/woods-sw39fw-vs-acetec-evodry-6h-2/` i dev före och efter.
2. Jämför HTML:en för två artiklar byte för byte, enligt avsnitt 1.
3. `og:image`, title och JSON-LD (`Product`, `Article`, `BreadcrumbList`) ska vara oförändrade på de tre sidorna. Bylinens datum ska vara samma som i markupen.
4. `npx astro check --minimumSeverity error` ska ge 0 fel, och alla tester ska vara gröna. `npm run kontrollera` får bara ge dina nya TEXT SAKNAS-fel och de kända varningarna.
5. Ta skärmdumpar på 375 och 1280 av de tre sidorna i `scratchpad\fas-d\`. Kontrollera `scrollWidth`, och tabba igenom en testsida.
6. grep på den renderade HTML:en för de tre sidorna efter "test" och "testade": skriv var ordet står och varför.
7. Låt dev-servern gå när du är klar, och skriv porten i leveransen. Affiliateagenten granskar korten efteråt. Bygg inte, committa inte.

## 5. Nycklar

`granskning.metod.rubrik`.

## 6. Granskning, 2026-10-02

1. **Alternativens kort.** Chipen visar redaktörens korta `etikett` ("Drygt halva priset"), och `varfor` står som kortets `forVem`-rad. Saknas `etikett` blir `varfor` chipen. Sidospalten fortsätter som nu.
2. **Metodrubriken.** Standardavsnittet med `granskning.metod.rubrik` renderas bara när innehållet saknar en egen H2 om metoden. Det avgörs av `/^(så\s+(testade|granskade)\s+(vi|jag)|underlaget\b)/i` mot H2-texterna. Med det får varken woods-sw39fw eller acetec-evodry-6h-2 dubbel rubrik.
3. Köp om, Köp inte om och köpknappen i omdömeskortets hela bredd godtas. Att Läs vidare utgår vid färre än två kort godtas också.

## 7. Affiliatereturen, 2026-10-02

1. **Valets etikett i omdömesblocket.** `.chip-gul` visas för varje produkt som står i kategorifilens `val`, med valets `etikett` ("Källare som håller 15 grader"), inte med "Mitt val" och inte bara för det första valet. Valen är likställda.
2. **Tabellens caption.** Vid etiketten `granskning` lyder den dolda captionen "Tillverkarens uppgifter för {namn}" (affiliateagentens formulering). "Mätvärden för {namn}" står bara vid `test`.
