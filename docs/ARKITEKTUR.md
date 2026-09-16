# Arkitektur

Beslutad 2026-09-15, uppdaterad samma dag efter innehållsarkitekturen (`docs/INNEHALLSARKITEKTUR.md`) och affiliatestrategin (`docs/AFFILIATE.md`), och 2026-09-16 efter Christians beslut om pelaren Inomhus, nivåfältet, kategorin krysslaser och att innehållssamlingarna ska bära flera hundra artiklar inom ett år (undermappar, byggkontroll, illustrationer). Ändringar kräver uppdatering av detta dokument. Den tekniska specen för sidmallar och komponenter finns i `docs/SPEC-SIDMALLAR.md`.

## Stack

| Del | Val | Motiv |
|---|---|---|
| Ramverk | Astro 7 | Noll JavaScript till klienten som standard, content collections, bäst Core Web Vitals utan handpåläggning |
| Interaktivitet | React 19 som Astro-öar | Bara för `/admin` i fas 1. Kalkylatorerna byggs utan ö (formulär via GET, beräkning på servern) |
| Styling | Tailwind CSS 4 | Tokenbaserat designsystem i `src/styles/global.css`, konsekvens över hundratals sidor |
| Innehåll | MDX i `src/content/` | Agenter skriver filer direkt, allt i git, inget CMS |
| Databas | Supabase Postgres | Produkter, priser, prishistorik, klick, konverteringar |
| Auth | Supabase Auth | Bara för `/admin` |
| Hosting | Vercel via `@astrojs/vercel` | Statisk output plus serverfunktioner för `/go/`, `/rakna/` och `/admin` |
| Rendering | Statisk som standard. `prerender = false` på `/go/*`, `/admin/*` och kalkylatorerna under `/rakna/[slug]/` | Kalkylatorn räknar på servern så att den fungerar utan klient-JS. Sidan utan query-parametrar cachas på CDN:et |
| Mätning | Search Console + Vercel Analytics | Inget Google Analytics |
| Språk | TypeScript strikt | |

## Mappstruktur

```
C:\Hantverkstips\
├── CLAUDE.md
├── docs/                      # projektdokument, läses av alla agenter
├── .claude/agents/            # agentdefinitioner, en per roll
├── public/
│   ├── fonts/                 # tre woff2-filer, self-hostade
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── brand/riktning-1/  # ordmärke, symbol, ikonsprite, mönster
│   │   ├── illustrationer/    # egna skisser, en mapp per pelare: fukt/kallare.svg
│   │   └── bilder/            # egna foton, en mapp per pelare, refereras från frontmatter
│   ├── content/               # content collections. Undermappar är ordning, aldrig adress
│   │   ├── guider/[pelare]/   # projektguider, problemguider, köpguider (fältet typ)
│   │   ├── kunskap/[pelare]/  # kunskapsartiklar
│   │   ├── tester/[kategori]/ # tester och granskningar (fältet etikett)
│   │   ├── jamforelser/[kategori]/  # X mot Y
│   │   ├── pelare/            # en handskriven hub per pelare, platt
│   │   ├── kategorier/        # en fil per produktkategori, styr bäst i test-sidan, platt
│   │   ├── sidor/             # om-sidor plus startsidans text (id startsida), platt
│   │   └── forfattare/        # en fil per författare, platt
│   ├── content.config.ts      # scheman för samlingarna och loadern som ger id från filnamnet
│   ├── env.d.ts               # App.Locals: sidtyp och köpknappens löpnummer
│   ├── components/
│   │   ├── ui/                # Astro-komponenter, ingen klient-JS. Illustration.astro inlinear skisser
│   │   ├── vyer/              # sidmallar som rutterna monterar (Artikel, Kategorisida, PelarHub)
│   │   └── islands/           # React-komponenter som hydreras. Bara /admin i fas 1
│   ├── layouts/
│   │   └── Bas.astro          # sidhuvud, reklamband, brödsmulor, sidfot
│   ├── pages/
│   │   ├── index.astro        # startsida
│   │   ├── [rot]/index.astro  # pelarhub ELLER kategorisida, avgörs i getStaticPaths
│   │   ├── [rot]/[slug].astro # guide och kunskap under pelaren
│   │   ├── tester/[slug].astro
│   │   ├── jamforelser/[slug].astro
│   │   ├── rakna/             # kalkylatorer: index.astro (lista) och en fil per kalkylator
│   │   ├── om/                # index.astro (/om/) och [slug].astro
│   │   ├── forfattare/[slug].astro
│   │   ├── 404.astro
│   │   ├── go/[slug].ts       # affiliate-redirect, serverkörd
│   │   └── admin/             # dashboard, serverkörd, bakom auth
│   ├── lib/
│   │   ├── supabase.ts        # klienter (server med service role, publik med anon)
│   │   ├── produkter.ts       # hämta produkter och erbjudanden vid byggtid, med fallback
│   │   ├── affiliate.ts       # modul- och sidtypslistor, bas 36, länkmall, /go/-länk
│   │   ├── antaganden.ts      # gemensamma antaganden (elpris) som kalkylatorer och komponenter delar
│   │   ├── pelare.ts          # register över pelare, reserverade rotslugs, max hubbar i menyn
│   │   ├── niva.ts            # nivåerna enkel, mellan, expert och deras etiketter
│   │   ├── innehall.ts        # utkastfilter, adresser, brödsmulor
│   │   ├── format.ts          # pris, datum, tal enligt stilguiden
│   │   ├── strukturdata.ts    # byggare för JSON-LD
│   │   └── kalkyl/            # rena beräkningsfunktioner, en fil per kalkylator, plus register
│   └── styles/
│       └── global.css         # Tailwind + designtokens
├── supabase/
│   ├── migrations/            # 0001_grund.sql, 0002_klick_och_konverteringar.sql, 0003_sidtyp_kunskap.sql
│   ├── seed.sql               # utvecklingsdata, körs manuellt, aldrig mot produktion
│   └── seed-*-2026-09-16.sql  # verkliga produkter ur produktexpertens underlag, idempotenta, körs manuellt
└── scripts/
    └── kontrollera-innehall.ts  # byggkontroll av innehållet, körs av npm run build före astro build.
                                 # Senare även feed-import, konverteringsimport, ombyggnadstriggers
```

## Datamodell (Supabase)

Migration 0001 skapar grundtabellerna, 0002 lägger till spårning och konverteringar. Migrationer körs i ordning, aldrig redigeras i efterhand.

```sql
butiker        id, namn, slug, affiliate_natverk, cookie_dagar, provision_procent, lankmall
kategorier     id, slug, namn, beskrivning, foralder_id
produkter      id, slug, namn, marke, modell, kategori_id, bild_url,
               specs jsonb, ean, aktiv, skapad, uppdaterad
erbjudanden    id, produkt_id, butik_id, pris, ord_pris, lagerstatus,
               butik_url, affiliate_url, uppdaterad
prishistorik   id, erbjudande_id, pris, datum
klick          id, produkt_id, butik_id, sida, modul, sidtyp, position, epi,
               kategori_slug, tidpunkt
konverteringar id, epi, klick_id, order_varde, provision, valuta, status,
               klick_tid, order_tid, betalstatus, natverks_id, osaker, importerad
```

Principer:

- En produkt kan ha erbjudanden från flera butiker. Vi startar med en butik men bygger för fler.
- `butiker.lankmall` är mallen för spårningslänken med platshållarna `{epi}`, `{epi2}` och `{url}`. En andra butik i ett annat nätverk är en rad till, inte en kodväg till. Saknas mallen faller `/go/` tillbaka på `erbjudanden.affiliate_url`.
- `erbjudanden.butik_url` är butikens egen produktadress och det som läggs i `{url}`. Feedens spårade länk lagras som `affiliate_url` bara som reserv.
- `specs` är JSONB med kategorispecifika fält (`kapacitet_liter_dygn`, `max_avstand_m`, `klingdiameter_mm`). Kategorifilen i `src/content/kategorier/` deklarerar vilka specs som finns, hur de visas och vilket värde som är bäst. Specs fylls av produktexperten från datablad, inte av feeden.
- Prishistorik fylls av feed-importen, en rad per prisändring, inte per körning.
- Klick lagras utan personuppgifter. IP sparas inte. `modul` och `sidtyp` har check-constraints som speglar listorna i `src/lib/affiliate.ts`; ändras listan ändras båda.
- `konverteringar` fylls dagligen av ett skript från nätverkets transaktionsendpoint. Matchning sker på `epi`. Saknas EPI matchas på `klick_tid` mot klick inom fem minuter och raden märks `osaker`. `natverks_id` är unik så att importen kan köras om.
- RLS: produktdata läses publikt med anon-nyckeln. `klick` och `konverteringar` har inga policyer, bara service role läser och skriver.

## Klickkedjan

1. `<Kopknapp produkt="woods-mrd20" modul="kort_kompakt" />` renderar `/go/woods-mrd20/?modul=kort_kompakt&sidtyp=guide&position=3`. `sidtyp` sätts av rutten i `Astro.locals.sidtyp`, `position` räknas upp per sida i `Astro.locals.kopknappPosition`. Löpnumret följer renderingsordningen, som är stabil mellan byggen men inte alltid dokumentordningen; analyser grupperar på `modul` först.
2. `/go/[slug].ts` slår upp erbjudandet (billigast om butik inte anges), validerar parametrarna mot listorna, gör insert i `klick`, hämtar id, skriver `epi = id` i bas 36, och bygger målet från `butiker.lankmall` med `epi`, `epi2 = kategori_slug` och URL-kodad `butik_url` sist. 302, `Cache-Control: no-store`, `X-Robots-Tag: noindex`.
3. Misslyckas loggningen skickas läsaren ändå vidare, med `epi=x`. Loggning får aldrig stoppa ett klick.
4. Konverteringsimporten (fas 2, `scripts/`) läser transaktioner, matchar på `epi` och skriver `konverteringar`.

## Konventioner

**URL:er.** Små bokstäver, bindestreck, svenska utan diakritiska tecken, avslutande snedstreck överallt. Mönstren är beslutade i `docs/INNEHALLSARKITEKTUR.md` avsnitt 3 och gäller:

| Sidtyp | Mönster | Källa |
|---|---|---|
| Pelarhub | `/[pelare]/` | `src/content/pelare/[pelare].md` |
| Guide, kunskap | `/[pelare]/[slug]/` | `src/content/guider/[pelare]/[slug].mdx`, `src/content/kunskap/[pelare]/[slug].mdx`, fältet `pelare` styr |
| Bäst i test | `/[kategori]/` | `src/content/kategorier/[kategori].md` plus databasen |
| Test | `/tester/[slug]/` | `src/content/tester/[kategori]/[slug].mdx` |
| Jämförelse | `/jamforelser/[slug]/` | `src/content/jamforelser/[kategori]/[slug].mdx` |
| Kalkylator | `/rakna/[slug]/` | `src/pages/rakna/[slug].astro`, en fil per kalkylator |
| Om sajten | `/om/` och `/om/[slug]/` | `src/content/sidor/` |
| Författare | `/forfattare/[slug]/` | `src/content/forfattare/` |

Rotnamnrymden delas av pelare och kategorier. Pelarslugs (`src/lib/pelare.ts`: `fukt`, `inomhus`, `altan`, `tak`, `grund`, `isolering`, `verktyg`, `el`) är reserverade och får aldrig användas som kategorislug, och ingen av dem får vara `tester`, `jamforelser`, `rakna`, `om`, `forfattare`, `go`, `admin`. Kategorislugs i roten just nu: `luftavfuktare`, `krysslaser`. Rutten `src/pages/[rot]/index.astro` kontrollerar det i `getStaticPaths` och bygget stoppar vid kollision. En publicerad URL byts aldrig utan 301 (`vercel.json`, redirects); före lansering byts slugs fritt genom att filen döps om (så byttes `luftavfuktare-kallare` till `avfuktare-kallare` och `sorptionsavfuktare-eller-kondensavfuktare` till `sorptionsavfuktare` 2026-09-16).

**Innehållsfiler och undermappar** (beslut 2026-09-16, för att samlingarna ska bära hundratals filer). Guider och kunskap ligger i en undermapp per pelare, tester och jämförelser i en undermapp per kategori: `src/content/guider/fukt/avfuktare-kallare.mdx`, `src/content/tester/luftavfuktare/woods-mrd20.mdx`. Mappen är ordning för människor och verktyg; **id och adress kommer alltid från filnamnet**, aldrig från sökvägen, så en fil kan flyttas mellan mappar utan att URL:en ändras. Loadern i `src/content.config.ts` (`artikelLoader`) sätter id till filnamnet utan ändelse och stoppar bygget om två filer i samma samling har samma namn, oavsett mapp, och `prerenderConflictBehavior: 'error'` i `astro.config.mjs` gör detsamma på Astros nivå. Filnamnet får bara innehålla `a-z`, `0-9` och bindestreck, aldrig `index`. Mappen måste stämma med fältet: `guider/fukt/` kräver `pelare: fukt`, `tester/luftavfuktare/` kräver `kategori: luftavfuktare`; kontrollskriptet stoppar annars. Pelare, kategorier, sidor och författare är platta, en fil i en undermapp där läses inte av bygget och ger fel i kontrollen. Första artikeln i en pelare kräver att hubfilen `src/content/pelare/[pelare].md` finns, `utkast: true` räcker. Relativa sökvägar i frontmatter (`bild`) utgår från filens plats, alltså tre nivåer upp till `src/assets/`.

**Kanonisk värd.** `https://www.hantverkstips.se`. Utan www svarar 308 dit, och canonical ska peka på adressen som svarar 200. Värdet står på två ställen som måste stämma överens: `site` i `astro.config.mjs` och `SAJT` i `src/lib/strukturdata.ts`. Byts primär domän i Vercel byts båda samtidigt. Beslutat 2026-09-16 efter SEO-granskningen.

**Byggkontroll.** `npm run build` kör `scripts/kontrollera-innehall.ts` (ren Node med typborttagning, Node 22.18 eller senare, inget Astro) före `astro build`. Den stoppar bygget vid dubbla slugs, fil i fel undermapp, pelare som saknas i registret, saknar hubfil eller har en hubfil som inte är `.mdx`, kategori, författare eller kalkylator som inte finns, intern länk i frontmatter eller brödtext som leder ingenstans, saknar avslutande snedstreck eller pekar på ett utkast (länken blir 404 i bygget), länk direkt till `/go/`, och `bild` som pekar på en fil som saknas. Den varnar, utan att stoppa, när en publicerad artikel, test eller jämförelse saknar inlänk från en annan innehållsfil (sidfot, meny och mallarnas automatiska listor räknas inte; hubbar och kategorisidor har sina länkar därifrån och kontrolleras inte). Varningen blir stopp när sajten har fler sidor. Kör den ensam med `npm run kontrollera`.

**Affiliatelänkar.** Alltid `/go/[produkt-slug]/` med query-parametrar från `<Kopknapp>`. Länkar får `rel="sponsored nofollow"`. Skriv aldrig `<a>` direkt till en butik, och bygg aldrig `/go/`-länkar för hand, använd `goLank()` i `src/lib/affiliate.ts`.

**Reklammärkning.** Layouten visar bandet när rutten skickar `reklam={true}`. Rutten sätter det efter sidtyp och innehåll, aldrig innehållsfilen: köpguide, projektguide, test, jämförelse, kategori och kalkylator alltid; problemguide och kunskap bara när `produkter` inte är tom (kunskap enligt undantaget "en produkt per typ, sist" i `docs/DESIGN.md` 5.3: mallen renderar då blocket "Produkterna vi nämner" sist med köpknappar och sidtypen `kunskap` i klicklänken; kunskap utan `produkter` har varken band eller kort). Formuleringen är fastställd i `docs/AFFILIATE.md` avsnitt 5. Under varje köpknapp står "Annonslänk · pris 12 sep".

**Bilder.** Astro `<Image>` med width och height. `bild` i frontmatter valideras med `image()` och pekar relativt från innehållsfilen till `src/assets/bilder/[pelare]/` (foto) eller `src/assets/illustrationer/[pelare]/` (skiss). Leverantörsbilder laddas ner vid import, hotlinkas aldrig; tills importen finns visar produktkortet tillståndet "Bild saknas" för externa adresser.

**Illustrationer.** Egna skisser (regler i `docs/DESIGN.md` avsnitt 7) ligger i `src/assets/illustrationer/[pelare]/[namn].svg`, en mapp per pelare, filnamn enligt slug-reglerna. Förebilden är `fukt/kallare.svg`. Två sätt att använda dem:

1. **Huvudbild.** `bild: ../../../assets/illustrationer/fukt/kallare.svg` och `bildtext` i frontmatter. Mallen renderar den efter "Kort svar" som `<img>` med width och height från filen (SVG skalas inte av bildtjänsten), och den blir sidans `image` i `Article`-markupen.
2. **Inline i löptexten.** `<Illustration namn="fukt/daggpunkt" alt="Daggpunkten vid 20 grader och 60 procent." bildtext="..." />` i MDX, utan import. Komponenten `src/components/ui/Illustration.astro` läser SVG-filen vid bygget (`import.meta.glob` med `?raw`), inlinear den i HTML:en så att `currentColor` och tokens fungerar, sätter `width` och `height` från `viewBox` mot CLS, `role="img"` och `aria-label` från `alt`, och ger filens id-attribut ett suffix så att två skisser på samma sida inte delar `<pattern id>`. Okänt namn eller saknad `alt` ger byggfel. Filer över 40 kB och filer med `<text>` kvar ger varning i byggloggen. Tillåten i guider, kunskap och hubbar (listan nedan).

**Handskrift till banor.** `src/assets/illustrationer/` innehåller bara publicerbara filer: all `<text>` är konverterad till `<path>`, så att ingen webbfont behövs för att en skiss ska se rätt ut (`docs/DESIGN.md` avsnitt 2 och 7). Flödet:

1. **Källan.** Originalet med `<text>` ligger i `src/assets/illustrationer-kallor/[pelare]/[namn].svg`, samma struktur och samma filnamn som den publicerade filen. Det är här designansvarig redigerar texten i en skiss.
2. **Konverteringen.** `npm run illustrationer` (`scripts/konvertera-handskrift.mjs`, ren Node med `opentype.js`) läser varje källa, räknar ut banan för varje `<text>` med rätt typsnittsfil och skriver den publicerade filen. Attribut ärvs från föräldrarna som i SVG (`font-family`, `font-size`, `font-weight`, `fill`, `text-anchor`, `letter-spacing`), `text-anchor` `middle` och `end` mäts med typsnittets bredder, och `transform` och övriga attribut följer med. Ordningen i dokumentet och allt annat i filen lämnas orört. Skriptet är idempotent: en källa utan `<text>` och en oförändrad utdata rör ingen fil. Ligger en fil med `<text>` kvar direkt i `src/assets/illustrationer/` sparas den först som källa och konverteras sedan på plats.
3. **Typsnitten.** `scripts/typsnitt/` med Caveat 500, Zilla Slab 600 och Atkinson Hyperlegible 400 och 700 som TTF från Google Fonts (OFL, committade, adresser i `docs/DESIGN.md` bilaga B). Mappen deployas inte (`.vercelignore`) och når aldrig klienten. `font-family` i SVG:en styr valet, `font-weight` skiljer Atkinsons två vikter, och en okänd familj sätts med Atkinson 400 och ger en varning.
4. **Storleken.** Banor väger mer än text: en skiss går från 3 till 6 kB till 18 till 38 kB. Kurvorna förenklas därför med en tolerans på 0,2 användarenheter (en femtedels bildpunkt, osynligt i text på 16 till 19 px) och skrivs med en decimal, vilket tar bort fyra femtedelar av punkterna. Gränsen för en illustration är 40 kB; över det förenklas skissen i stället.

`npm run illustrationer` ingår i `npm run build`, efter `kontrollera` och före `astro build`.

**Strukturerad data.** Byggs med `src/lib/strukturdata.ts` och renderas av `<StrukturData>`. `Article` på guider, kunskap, jämförelser och om-sidor med `strukturdata: Article`. `Product` + `AggregateOffer` på tester. `ItemList` på kategorisidor. `Person` på författarsidor. `Organization` på `/om/` och som `publisher` överallt. `BreadcrumbList` på alla sidor med brödsmulor. `FAQPage` bara där riktiga frågor finns, beslutas av SEO-strategen.

**Interna länkar.** Reglerna i `docs/INNEHALLSARKITEKTUR.md` avsnitt 6. Mallarna garanterar minimum: artikel länkar till sin hub (brödsmula) och sin kategori, kategorisidan listar alla guider, tester och jämförelser med samma `kategori`, huben länkas från sidfoten.

**Komponenter i MDX.** Innehållsfiler importerar ingenting. Sidmallen skickar de tillåtna komponenterna via `components`-propen på `<Content>`, så att en innehållsfil kan skriva `<Faktaruta>` direkt. Tillåtna i guider: `Kopknapp`, `Produktkort`, `Jamforelsetabell`, `Faktaruta`, `Varning`, `Verktygskort`, `Markering`, `Illustration`. I kunskap: samma utom `Kopknapp`, `Produktkort` och `Jamforelsetabell`, så att en produktknapp i en kunskapsartikel ger byggfel. I hubbar: `Faktaruta`, `Varning`, `Verktygskort`, `Markering`, `Illustration`. I tester och jämförelser: som guider utan `Illustration` tills en skiss behövs där. Alla H2 i innehåll renderas via `Pennstreck`.

**Huvudmenyn.** Byggs i `src/layouts/Bas.astro` av de publicerade hubbarna i `PELARE`-ordning, högst `MAX_HUBBAR_I_MENY` (fem), följda av Räkna själv och Så testar vi. En pelare kommer in i menyn genom att dess hub får `utkast: false`, aldrig genom en ändring i layouten. Altanhuben är utkast till februari 2027; `/altan/bygga-altan/` byggs ändå, och brödsmulan och "Läs vidare" länkar inte till en hub som inte byggs (`hubPublicerad()` i `src/lib/innehall.ts`).

**Nivå.** Varje guide, kunskapsartikel, test och jämförelse har `niva: enkel | mellan | expert` (standard `mellan`, orden i `src/lib/niva.ts`). Visas i artikelhuvudet som "Kunskap · Expert" och grupperar hubsidans lista "Alla sidor i ..." i tre listor. Utseendet står i `docs/DESIGN.md` avsnitt 6.

**Utkast.** `utkast: true` visar sidan i `npm run dev` och utesluter den i `npm run build`. Filtret sitter i `publicerade()` i `src/lib/innehall.ts` och används av alla `getStaticPaths` och alla listor. Platshållarfilerna som mallarna byggs mot har `utkast: false` tills chefredaktören ersatt texten; de ska bytas innan lansering. En planerad sida får finnas som utkast med bara frontmatter och en rad text, så att huben kan länka till adressen och kontrollskriptet ser att den finns (så ligger `/inomhus/gipsplugg/`, `/inomhus/gipsskruv/` och `/inomhus/skruva-i-gipsvagg/` nu).

## Frontmatter

Fastställs i `src/content.config.ts`. Datum skrivs `2026-09-15`.

**Guider** (`typ` är `projektguide`, `problemguide` eller `kopguide`) och **kunskap** (`typ` sätts automatiskt):

```yaml
title:            # H1, sidans löfte
seoTitle:         # valfritt. <title> när sökfrasen inte tål samma formulering som H1.
                  # Utelämnad används title. Sätts av SEO-strategen, inte av skribenten.
description:      # meta description, max 160 tecken
publicerad:       # datum
uppdaterad:       # datum, valfritt
pelare:           # fukt | inomhus | altan | tak | grund | isolering | verktyg | el. Styr URL:en och undermappen
niva:             # enkel | mellan | expert, standard mellan. Etikett i artikelhuvudet, grupp på huben
typ:              # bara guider: projektguide | problemguide | kopguide
kategori:         # kategorislug, valfritt. Krävs för att listas på kategorisidan
produkter:        # lista. Antingen slug, eller { slug, forVem, etikett }
forfattare:       # slug i src/content/forfattare/, standard redaktionen
bild:             # relativ sökväg till eget foto eller skiss, valfritt: ../../../assets/illustrationer/fukt/kallare.svg
bildtext:         # valfritt
kallor:           # lista med { titel, url }
behover:          # bara projektguide: { verktyg: [{ produkt, namn?, varfor }], material: [{ namn, varfor }] }
                  # verktyg.namn visas bara när produkten saknas i databasen: raden renderas utan köpknapp och bygget varnar
utkast: true      # utesluts från bygget
```

**Tester:**

```yaml
title, description, publicerad, uppdaterad, niva, forfattare, bild, bildtext, kallor, utkast  # som ovan
kategori:         # krävs, brödsmulan går via kategorin och styr undermappen
produkt:          # produktslug i databasen
etikett:          # test | granskning
testad:           # datum, valfritt
omdome:           # en mening
kopOm:            # ett kort stycke
kopInteOm:        # ett kort stycke
matningar:        # lista med { etikett, enhet, vi, tillverkaren }. vi är tom på granskningar
alternativ:       # lista med { produkt, varfor }
```

**Jämförelser:** som guider utan `pelare` och `typ`, med `niva`, `kategori` (krävs, styr undermappen) och `produkter` (minst två).

**Pelare** (`src/content/pelare/[pelare].mdx`, slug måste finnas i `src/lib/pelare.ts`). Filändelsen måste vara `.mdx`: Astro tillämpar mallens `components` bara på MDX, och en hub i `.md` får H2 utan pennstreck. `npm run kontrollera` stoppar bygget på `.md`.

```yaml
title, description, uppdaterad, utkast
seoTitle:         # valfritt, som ovan
ingress:          # en mening för "Börja här" på startsidan
viktiga:          # upp till tre { titel, href } som startsidan länkar till.
                  # Bara publicerade adresser: en länk till ett utkast är byggfel
```

**Kategorier** (`src/content/kategorier/[kategori].md`):

```yaml
namn:             # "Luftavfuktare"
title:            # H1
seoTitle:         # valfritt, som ovan
description:      # meta
ingress:          # under H1
pelare:           # lista med pelarslugs, minst en
specs:            # lista med { nyckel, etikett, enhet, bast: hogst | lagst }, i visningsordning.
                  # Nycklarna är produkter.specs i databasen; kategoriraden i seed.sql listar dem
val:              # upp till tre { produkt, etikett, forVem } för "Våra val". Första är "Vårt val"
kopguide:         # sökväg till köpguiden
kalkylator:       # slug i src/lib/kalkyl/register.ts
noindex:          # valfritt, standard false. <meta name="robots" content="noindex"> utan att
                  # avpublicera sidan. Används medan kategorin bara har platshållartext
forfattare, uppdaterad, utkast
```

**Sidor** (`src/content/sidor/`): `title`, `seoTitle` (valfritt), `description`, `uppdaterad`, `strukturdata` (`Organization` | `Article` | `ingen`), `utkast`. Filen `startsida.mdx` har dessutom `justNu: { samling, id }` och renderas av `index.astro`, aldrig under `/om/`.

**Författare** (`src/content/forfattare/`): `namn`, `yrke`, `sedan` (årtal), `bild` (kvadratisk), `presentation` (en rad, fakta), `utkast`. Brödtexten är den längre presentationen.

## Prestandabudget

Gäller alla publika sidor, mätt på mobil med Lighthouse:

- LCP under 2,0 s
- INP under 200 ms
- CLS under 0,05
- Total JavaScript till klienten: 0 kB på alla publika sidor i fas 1, inklusive kalkylatorer. Under 60 kB om en ö senare motiveras
- Inga externa skript utom Vercel Analytics
- Typsnitt: tre filer (Zilla Slab 600, Atkinson Hyperlegible 400 och 700), self-hostade i `public/fonts/`, totalt under 64 kB, `font-display: swap`, förladdade i `<head>`
- HTML per innehållssida under 60 kB okomprimerat, exklusive inlinead ikonsprite och ordmärke (cirka 6 kB tillsammans)

Kontrollen beskrivs i `docs/SPEC-SIDMALLAR.md` avsnitt 10.

## Miljövariabler

```
PUBLIC_SUPABASE_URL
PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY      # bara server, aldrig PUBLIC_
ADMIN_EMAILS                    # kommaseparerad, vilka som får logga in
```

Aldrig i git. `.env.example` visar vilka som behövs. Saknas `PUBLIC_SUPABASE_URL` bygger sajten ändå: produktkort visar platshållare och `/go/` svarar 503.
