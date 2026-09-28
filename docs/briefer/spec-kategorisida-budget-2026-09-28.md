# Spec: /luftavfuktare/ under 66 kB

UX och bygge-agenten, 2026-09-28. Christian har gett kategorisidan plats i kön som nästa sak. Målet är att `/luftavfuktare/` hamnar under 67 584 byte på bygget, så att det sista undantaget i `scripts/budget-html.mjs` kan tas bort. Metoden är densamma som i `docs/briefer/spec-skal-budget-2026-09-28.md` (här "skalspecen"): klasser som upprepas på varje produkt skrivs en gång. Utvecklaren gissar ingenting och kör inte `npm run build`.

## 0. Läget

Mätt på `dist/client/luftavfuktare/index.html` från bygget av commit 2b64291: **68 752 byte (67,1 kB), 1 168 byte över**. Taket i skriptet är 70 155.

| Del | kB | Varav klasser |
|---|---|---|
| `<head>` | 7,2 | JSON-LD: ItemList 5,2 och brödsmulor 0,3 |
| Sidhuvud | 6,1 | – |
| Sidfot | 4,2 | – |
| `<main>` | 49,2 | 20,4 |
| **Summa** | 67,1 | |

`<main>`, per avsnitt:

| Avsnitt | kB | Klasser |
|---|---|---|
| Före första H2 (H1, ingress, reklamband) | 1,2 | 0,4 |
| Våra val | 6,2 | 3,0 |
| Jämförelsetabellen | 14,0 | 7,4 |
| 13 produktavsnitt (H2 och Produktkort), 1,1 till 3,0 kB var | 17,2 | 7,2 |
| Så väljer du | 2,6 | 0 |
| Varifrån talen i tabellen kommer | 2,5 | 0,4 |
| Fler guider och tester | 4,2 | 2,0 |

De klassträngar som upprepas mest i `<main>`:

| kB | Gånger | Klass | Var |
|---|---|---|---|
| 1,4 | 13 | `bg-papper-2 border border-linje rounded-sm w-20 h-15 flex items-center justify-center text-center p-1` | `Jamforelsetabell.astro` rad 119, bildytan i kolumnhuvudet |
| 1,4 | 31 | `m-0 mt-2 text-finstilt text-blyerts-2` | `Kopknapp.astro` rad 120, raden "Annonslänk · pris …" |
| 1,4 | 30 | `inline-flex min-h-11 items-center lank` | länkar med klickyta, flera komponenter |
| 1,3 | 30 | `text-etikett uppercase text-blyerts-2` | märket i bildytan, `Produktkort.astro` rad 116 och `Jamforelsetabell.astro` rad 120 |
| 1,2 | 27 | `kopknapp kopknapp-full kopknapp-aktiv` | köpknappen |
| 0,8 | 13 | `mt-2 block font-sans text-h3 font-bold text-blyerts` | produktnamnet i kolumnhuvudet, rad 123 |
| 0,6 | 13 | `min-w-[150px] p-3 text-left align-top` | `th scope="col"`, rad 105 |

Texten i `<main>` är 13,5 kB och rörs inte. Produkterna är 13 och alla står kvar. JSON-LD rörs inte; det är SEO och GEO-agentens.

## 1. Vad som inte får ändras

- 0 pixlar olika på 375 och 1280 px på `/luftavfuktare/`, en produktsida (`/tester/woods-sw39fw/`), en jämförelse (`/jamforelser/woods-sw39fw-vs-acetec-evodry-6h-2/`), `/fukt/avfuktare-kallare/` (produktkort i brödtext) och startsidan, och i utskriften av `/luftavfuktare/`.
- Ingen text och ingen produkt tas bort. Ordningen är densamma.
- Affiliatelänkarna: `href`, `rel="sponsored nofollow"`, `data-*` och parametrarna `modul`, `sidtyp` och `position` är exakt som förut. Reklambandet och annonsraden står kvar med samma text. Affiliateagenten tittar på sidan efter bygget.
- Tabellens beteende: sidledsscroll i behållaren, den fasta första kolumnen och den markerade kolumnen för rekommenderad produkt (`kolumnKlass`).
- Inga nya beroenden, ingen JS, inga hexvärden.

## 2. Det som byggs

### 2.1 Jämförelsetabellens kolumnhuvud skrivs en gång (`Jamforelsetabell.astro`)

Klasserna i varje `th scope="col"` flyttas till `<table>` som varianter, som steg 5.3 gjorde för raderna.
- `th scope="col"`: `min-w-[150px] p-3 text-left align-top` blir `[&_th[scope=col]]:…`. `kolumnKlass(p.slug)` står kvar på elementet, eftersom den skiljer mellan kolumner.
- Bildytan utan foto (rad 119) får klassen `produktkort-bild` med modifieraren `produktkort-bild-liten` för tabellens mindre mått (`w-20 h-15 p-1` i stället för `w-24 h-18 p-2`), i `global.css` i `@layer components`, med samma värden som i dag.
- Bildytan med foto (rad 107 och 115) behåller sina klasser. Ingen luftavfuktare har foto i bygget, men andra kategorier kan få det.
- Produktnamnet (rad 123): `mt-2 block font-sans text-h3 font-bold text-blyerts` blir en variant på `<table>`: `[&_th[scope=col]>span:last-child]:…` eller en egen klass `jmf-namn`, det som ger minst HTML.
- Förväntat: −2,0 kB.

### 2.2 Märket i bildytan får sin stil från bildytan (`Produktkort.astro`, `Jamforelsetabell.astro`)

`text-etikett uppercase text-blyerts-2` på `<span>` i `.produktkort-bild` (Produktkort rad 116, Jamforelsetabell rad 120) flyttas till `.produktkort-bild span` i `global.css`, med tokens (`var(--text-etikett)`, `--text-etikett--line-height`, `text-transform: uppercase`, `var(--color-blyerts-2)`), och eventuell `letter-spacing` eller `font-weight` från `text-etikett` följer med. En `.prosa`-variant behövs bara om `.prosa span` sätter något; utvecklaren kontrollerar det. Spanen får ingen klass.

Förväntat: −1,1 kB på `/luftavfuktare/`, −0,3 kB på `/fukt/avfuktare-kallare/`.

### 2.3 Annonsraden under köpknappen (`Kopknapp.astro` rad 120)

`<p class="m-0 mt-2 text-finstilt text-blyerts-2">` blir `<p class="kopknapp-annons">`, med samma värden i `global.css` bredvid `.kopknapp`, och `.prosa .kopknapp-annons` om `.prosa p` annars ger marginal. Texten och datumet är oförändrade. Raden är en del av reklammärkningen, och affiliateagenten godkänner att den ser likadan ut.

Förväntat: −0,7 kB på `/luftavfuktare/`, och −0,1 till −0,3 kB på varje sida med köpknappar.

### 2.4 Summa och undantaget

2.1 till 2.3 ger uppskattat −3,8 kB. Sidan hamnar då på cirka 64 900 byte (63,4 kB), med cirka 2,7 kB marginal till gränsen.
- Undantaget för `/luftavfuktare/` tas bort ur `UNDANTAG` i `scripts/budget-html.mjs` i samma ändring. Skriptet ska då skriva 0 undantag, och bygget vara grönt.
- Når sidan inte under 67 584 byte, rapporterar utvecklaren siffrorna, och undantagets tak sänks till den nya storleken plus 1 024 byte (regeln i skalspecen 15.1). Jag beslutar sedan om 3.1.

## 3. Det som inte byggs nu

### 3.1 Om 2.1 till 2.3 inte räcker, eller för andra sidor senare

- **Länk med klickyta:** `inline-flex min-h-11 items-center` står före `lank` 46 gånger på sidan och i ett tjugotal filer på sajten. Den kan bli en komponentklass, `lank-yta`. Uppskattat −1,5 kB här och −0,5 till −1 kB på räknarna. Den ändringen rör många filer, och hör hemma i en egen omgång när en sida behöver den.
- **Köpknappens standardläge:** `kopknapp kopknapp-full kopknapp-aktiv` står 27 gånger. `.kopknapp` skulle kunna betyda full bredd och köpbar som standard, med modifierare för undantagen. Det ändrar betydelsen av en klass som affiliateagenten granskat och sparar 0,7 kB. Görs inte utan att affiliateagenten är med.

### 3.2 JSON-LD

ItemList med 13 produkter och erbjudanden är 5,2 kB. Den rörs inte här. Om den ska kortas (till exempel utan `offers` per produkt) avgör SEO och GEO-agenten, eftersom det ändrar vad Google ser.

## 4. Filer

| Fil | Punkt |
|---|---|
| `src/components/ui/Jamforelsetabell.astro` | 2.1, 2.2 |
| `src/components/ui/Produktkort.astro` | 2.2 |
| `src/components/ui/Kopknapp.astro` | 2.3 |
| `src/styles/global.css` | `.produktkort-bild-liten`, `.produktkort-bild span`, `.kopknapp-annons` och ett eventuellt jämförelsenamn, i `@layer components` |
| `scripts/budget-html.mjs` | 2.4, undantaget bort |

Rörs inte: innehållsfilerna, `src/lib/produkter.ts`, `src/lib/affiliate.ts`, `/go/`-rutten, JSON-LD i `src/lib/strukturdata.ts`, kategorins frontmatter.

## 5. Kontroller (utvecklaren)

1. `npx astro check --minimumSeverity error`: 0 fel. Alla tester gröna. `npm run kontrollera`: 0 fel.
2. 0 pixlar olika på sidorna i avsnitt 1, på 375 och 1280 px, och i utskriften av `/luftavfuktare/`.
3. `/go/`-länkarna på `/luftavfuktare/` är identiska före och efter. Jämför listan över alla `href` som börjar med `/go/`, och deras `rel`.
4. Mätskriptet på koordinatorns bygge: `/luftavfuktare/` före och efter, och inga undantag kvar.
5. Leverans: filerna, mätningen, en rad om osäkerheter.

## 6. Godkännande (jag)

- Mätskriptet på bygget ger 0 sidor över 66 kB och 0 undantag.
- Skärmdumpar på 375 och 1280 px av `/luftavfuktare/` och en produktsida, före och efter.
- `/go/`-länkarna oförändrade.
- Affiliateagenten har sett sidan.
- Därefter rättar jag `.claude/skills/astro-och-prestanda/SKILL.md` avsnitt 2: budgeten gäller alla sidor utan undantag.
