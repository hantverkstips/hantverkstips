---
name: astro-och-prestanda
description: Hur hantverkstips.se är byggd och hålls blixtsnabb. Astro med content collections och MDX, noll klient-JS, räknare som GET-formulär på servern, Tailwind-tokens, Vercel. Konventioner, prestandabudget och hur den mäts, bilder och SVG, cache, teknisk SEO i kod, tester och bygge. Läs innan du bygger, ändrar eller granskar kod.
---

# Astro och prestanda

Sajten är statisk HTML från Astro med content collections, MDX och Tailwind, hostad på Vercel. Ingen publik sida skickar JavaScript till besökaren. Räknarna är vanliga formulär som skickas med GET till samma sida, renderas på servern (`prerender = false`) och cachas på CDN:et. Det är därför sajten är snabb: det finns nästan inget att ladda. Varje ändring mäts mot det. Källan för allt här är `docs/ARKITEKTUR.md` och `docs/SPEC-SIDMALLAR.md`; Astros egen dokumentation på docs.astro.build gäller för det som ändras med versionerna.

## 1. Konventioner som inte förhandlas

- **Noll klient-JS på publika sidor.** En React-ö bara när något faktiskt måste hända i webbläsaren, med minsta `client:`-direktiv, och bara efter beslut. Tabeller sorteras på servern. Räknare räknar på servern.
- **Innehåll är filer.** `src/content/[samling]/[undermapp]/[slug].mdx`. Id och adress kommer från filnamnet, aldrig från mappen. Frontmatter valideras i `src/content.config.ts`. Innehållsfiler importerar ingenting; mallen skickar komponenterna.
- **Tokens, inga hexvärden.** Allt i `src/styles/global.css`. `--color-*: initial` stoppar resten. Radier bara `sm` och `md`, skugga bara `lyft`.
- **TypeScript strikt, inga `any`.** `npx astro check --minimumSeverity error` utan fel.
- **Återanvänd.** Läs `src/components/ui/`, `src/components/vyer/`, `src/lib/` innan du bygger något. Inga nya beroenden utan beslut, och pinnade versioner för det som skriver filer Google läser (`@astrojs/sitemap`).
- **Hemligheter aldrig i git.** Service role bara på servern. `PUBLIC_` bara för det som får nå klienten.
- **Mappar**: `pages/` rutter, `components/ui/` byggstenar utan klient-JS, `components/vyer/` sidmallar, `components/kalkyl/` räknarnas formulär, `lib/` logik, `lib/kalkyl/` rena formelmoduler utan Astro-importer, `assets/illustrationer/` publicerade skisser, `assets/illustrationer-kallor/` källor med `<text>`, `scripts/` byggkontroller och tester.

## 2. Prestandabudgeten

Mätt på mobil med Lighthouse: LCP under 2,0 s, INP under 200 ms, CLS under 0,05, 0 kB JavaScript till klienten, inga externa skript utom Vercel Analytics, tre typsnittsfiler under 64 kB totalt med `font-display: swap` och preload, HTML per innehållssida under 60 kB okomprimerat exklusive sprite och ordmärke (cirka 6 kB), alltså 66 kB i filen.

Så mäts den efter `npm run build` (PowerShell, från projektroten; hela listan i SPEC-SIDMALLAR.md avsnitt 10):

```powershell
# Script-taggar utöver JSON-LD: förväntat ingen utskrift
Get-ChildItem dist\client -Recurse -Filter *.html | ForEach-Object { $h = Get-Content -Raw -Encoding UTF8 $_.FullName; $n = ([regex]::Matches($h, '<script(?![^>]*application/ld\+json)')).Count; if ($n -gt 0) { "$($_.FullName): $n" } }
# HTML-storlek per sida, största först: ingen innehållssida över 66 kB
Get-ChildItem dist\client -Recurse -Filter *.html | Select-Object @{n='sida';e={$_.FullName.Replace((Get-Location).Path + '\dist\client','')}}, @{n='kB';e={[math]::Round($_.Length/1kb,1)}} | Sort-Object kB -Descending | Select-Object -First 20
```

Räknarna finns inte i `dist/client`; de kontrolleras med `npm run preview` och `curl`. Skisserna serveras sedan 2026-09-22 som `<img>` (avsnitt 4) och väger inget i HTML:en. Det som fortfarande ligger över budgeten är 13 långa sidor: skalet (sidhuvud, sidfot, head) är 18 kB per sida, inte de 6 budgeten räknar av, och därtill 4 000 till 5 000 ord text, Tailwind-klasser på 18 till 30 kB och FAQ på 5 till 10 kB. Kategorisidan `/luftavfuktare/` bär 55 kB klassattribut i sin tabell. Mätningen och kandidaterna står i `docs/briefer/spec-skisser-som-img-2026-09-22.md` avsnitt 10; en egen spec ska ta dem.

## 3. Rendering och cache

- Statiskt som standard. `prerender = false` bara på `/go/*`, `/admin/*` och `/rakna/[slug]/`.
- Räknare: `Astro.response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')` på alla svar. Vercel cachar per fullständig URL inklusive query, och indatan är validerad till ett begränsat antal värden.
- `/go/`: `no-store`, `X-Robots-Tag: noindex`, 302. Loggning får aldrig stoppa ett klick.
- Bygget: `npm run build` kör `kontrollera` (innehåll och relationer), `illustrationer` (handskrift till banor), `delningsbilder` (OG-bilder) och sedan `astro build`. Ett rött bygge levereras aldrig. Parallella byggen skriver över varandra; bara koordinatorn bygger.

## 4. Bilder och SVG

- Foton och packshots genom Astros `<Image>` med `width` och `height`, alltid. 4:3 för produkter, 3:2 för situationer, 1:1 för författare. Inga hotlinkade bilder.
- Skisser är SVG. Publicerade filer får inte innehålla `<text>`; `npm run illustrationer` konverterar Caveat till banor från källan i `illustrationer-kallor/`. Gräns 40 kB per fil. Färgerna skrivs som tokenvärdena i hex, aldrig som `currentColor` eller `var(--color-...)`, så att filen är en färdig bild.
- `<Illustration>` väljer läge på filens innehåll, aldrig med en prop (`src/lib/illustration.ts`, spec i `docs/briefer/spec-skisser-som-img-2026-09-22.md`). En fil i fasta färger importeras som tillgång (`import.meta.glob` utan `?raw`, `ImageMetadata`) och renderas som `<img>` från `/_astro/` med hash och `immutable`-cache, `alt`, `width`, `height`, `loading="lazy"` och `decoding="async"`; inget id-suffix behövs, filen är sitt eget dokument. Bara en fil som använder `currentColor` eller en token inlineas, med `role="img"`, `aria-label` och suffixade idn så två skisser inte delar `<pattern>`. Ingen publicerad skiss gör det i dag. Varumärkesbilderna i räknarnas sidhuvud är `<img>` med `fetchpriority="high"` eftersom de är LCP.
- Delningsbilder genereras i bygget ur skissen och registret. Rita aldrig för hand.
- Favicon är symbolen; `favicon.ico` finns för äldre klienter, `apple-touch-icon.png` för iOS.

## 5. Teknisk SEO i kod

- Kanonisk värd `https://www.hantverkstips.se`, satt på två ställen som måste stämma: `site` i `astro.config.mjs` och `SAJT` i `src/lib/strukturdata.ts`.
- Sitemap via `@astrojs/sitemap` med filtret `iSitemap()` som utesluter `/go/`, `/admin/`, `/_skiss/` och allt med noindex. `public/robots.txt` pekar på `sitemap-index.xml`. Utkast byggs inte alls.
- Strukturerad data byggs i `src/lib/strukturdata.ts` och renderas av `<StrukturData>`; texten i den ska vara samma som syns på sidan. Vad varje sidtyp har står i skillen seo-och-geo.
- Titeln får suffixet " · Hantverkstips" i `Bas.astro` bara när totalen ryms i 60 tecken.
- En publicerad adress byts aldrig utan 301 i `vercel.json`.
- Brödsmulor, `BreadcrumbList`, författarruta med `Person` och datum finns i mallarna; en ny sidtyp får dem från `Bas.astro` och vyn, inte handskrivet.

## 6. Räknarna

Sex steg i ordning, formeln först och utseendet sist: formelmodul i `src/lib/kalkyl/[slug].ts` (STANDARD, GRANSER, `tolkaQuery`, `rakna[Slug]`, varje konstant märkt Källa eller ANTAGANDE), test i `scripts/test-kalkyl-[slug].mjs` (`node --experimental-strip-types --test`, minst sex fall, talen mot en källa utanför koden), formulär i `src/components/kalkyl/[X]Form.astro` med klasser från `src/lib/kalkyl/stil.ts`, sidan i `src/pages/rakna/[slug].astro`, en rad i `src/lib/kalkyl/register.ts`, och inbäddning via `MED_FORMULAR` i `Kalkylator.astro`. Hela mönstret med text- och bildregler står i skillen nytt-verktyg och SPEC-SIDMALLAR.md 4.7. Testerna läser ibland publicerade artiklar från disk och låser tal och tabellceller; ändras artikeln ändras testet, aldrig tvärtom utan beslut.

## 7. Kontroller före leverans

1. `npx astro check --minimumSeverity error`: 0 fel.
2. Testerna för de räknare du rört: gröna.
3. `npm run kontrollera`: 0 fel. Varningar rapporteras.
4. `npm run build` (bara koordinatorn när flera arbetar parallellt): grönt utan varningar från komponenterna.
5. Budgeten i avsnitt 2 för sidor du rört: script-taggar 0, storlek under 66 kB, ingen JS-referens.
6. Tabba genom sidan på 375 px: fokus synligt, ingen sidledsscroll utom inuti `<Tabellyta>`, formulär med etiketter.
7. Leverans: filer skapade och ändrade, byggresultat, en rad om det du var osäker på. Inga sammanfattningar av vad koden gör; den läses.
