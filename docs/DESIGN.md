# Design för hantverkstips.se

Beslutad 2026-09-15 av designansvarig, efter att Christian valt riktning 1, Anteckningsboken, av de tre i `docs/DESIGNRIKTNINGAR.md`. Det dokumentet är nu historik. Det här är det enda gällande designdokumentet. Ändringar i tokens görs i `src/styles/global.css` och speglas här. Utvecklaren bygger mot det här dokumentet, chefredaktören och affiliateansvarig granskar mot det. Navigation, adresser och startsidans ordning följer `docs/INNEHALLSARKITEKTUR.md`, reklammärkningen följer `docs/AFFILIATE.md`.

Två saker tas in från riktning 3, Magasinet, enligt Christians beslut: kalkylatorns resultat är ett stort tal som fungerar som bild, och "Kort svar" är en färgad yta i stället för en linje till vänster.

Allt mäts först på 375 px bredd (iPhone SE och de flesta Android i mellanklass). Desktop är en bonus, inte utgångspunkten.

## 1. Designprinciper

1. **En snickares anteckningsbok, inte en affiliatesajt.** Känslan är en person med tjugo år i yrket som ritar upp problemet på ett block vid köksbordet. Varmt papper, blyertstext, snickarpennan för det viktiga. Ingenting blinkar, ingenting glider in, inga rabattmärken.
2. **Svaret först, sedan resonemanget.** Första skärmen på mobil ska innehålla ett konkret svar (siffra, produkt, val). Layouten är byggd för att det ska gå utan att skrika.
3. **Reklamen är synlig och lugn.** Reklammärkningen är en del av layouten, samma typsnitt, samma färger. Den göms inte och den skäms inte. Köpknappen ser ut som en understruken uppmaning i en anteckning, inte som en rea-skylt.
4. **Två färger med varsin roll.** Snickarpennan (`penna`) är den enda färg som skriver på sidan: länkar, knappar, strecket under rubriker, ringar och pilar i illustrationer. Tumstocksgult (`tumstock`) är överstrykningspennan: den ligger bakom ett tal som ska synas, aldrig bakom en hel rad och aldrig som knapp. Ingen av dem används som dekoration.
5. **Tabeller, diagram och skisser är innehåll.** De ritas med samma omsorg som texten och i samma hand. Egna diagram med egna siffror är det som skiljer oss från sajter med tio leverantörsbilder på rad.
6. **Handritat följer regler.** Darr, överskjut och linjebredd är specificerade (avsnitt 7) så att tio agenter ritar som en hand. Slarvigt handritat blir gulligt, och gulligt är fel.
7. **Ingenting kräver JavaScript för att se rätt ut.** Innehållssidor är statisk HTML. Det som rör sig är kalkylatorerna, och de renderas färdiga från servern innan de hydreras.
8. **Mobil först, bokstavligen.** Varje skiss ritas för 375 px. Om något inte fungerar där byggs det inte.

## 2. Typografi

### Val

Två typsnitt, tre filer, 59,8 kB tillsammans. Alla under 60 kB var. Verifierat vid hämtning 2026-09-15.

| Roll | Typsnitt | Vikt | Fil | Storlek |
|---|---|---|---|---|
| H1, H2, ordmärke, stora tal | Zilla Slab | 600 | `zilla-slab-latin-600.woff2` | 25,9 kB (26 472 byte) |
| Brödtext, gränssnitt, tabeller | Atkinson Hyperlegible | 400 | `atkinson-hyperlegible-latin-400.woff2` | 16,8 kB (17 208 byte) |
| H3, etiketter, fet text | Atkinson Hyperlegible | 700 | `atkinson-hyperlegible-latin-700.woff2` | 17,1 kB (17 524 byte) |
| Handskrift i illustrationer | Caveat | 500 | ingen fil | 0 kB, konverteras till banor |

**Varför Zilla Slab.** En slabserif med rundade, vänliga former som håller ihop på 30 px i en rubrik. Slaben har samma karaktär som bokstäverna på en byggarbetsplats: stadig, lite grov, aldrig elegant på ett sätt som skulle kännas falskt här. Hög x-höjd gör att den läses större än sin punktstorlek, så första omgångens rubrikstorlekar behålls. Vi laddar bara vikten 600.

**Varför Atkinson Hyperlegible.** Ritat för maximal läsbarhet, med tydlig skillnad mellan 1, l och I och mellan 0 och O, vilket vi behöver i tabeller med mätvärden. Nästan ingen svensk sajt använder det, så det bidrar till igenkänning. Familjen finns bara i 400 och 700, så halvfet betyder 700 överallt. Utvecklaren kontrollerar vid första tabellen att siffrorna står i raka kolumner med `font-variant-numeric: tabular-nums`; om typsnittet saknar tabellsiffror högerställs sifferkolumner så att kommatecknen ändå hamnar i linje.

**Varför Caveat, och varför den inte laddas.** Handskriften är snickarens anteckning i marginalen och finns bara i illustrationer och i marginalanteckningen (avsnitt 6). Den skickas aldrig till klienten som webbfont. Texten konverteras till banor i SVG-filen innan publicering, så att illustrationen ser likadan ut överallt och kostar noll byte typsnitt. `--font-hand` finns i `global.css` bara för SVG-källfilerna och för att namnet ska vara ett. `font-hand` i HTML är ett fel.

Bortvalda från första omgången: IBM Plex Sans (30,2 kB, bra men anonymt) och Source Serif 4 (tidningskänslan var fel svar).

### Filer

Latin-subset i woff2 direkt från Google Fonts, samma filer som deras CSS-API serverar till moderna webbläsare. Subsetet täcker U+0000 till U+00FF, alltså å, ä, ö, é och de tecken svenska behöver. Filerna ligger i `public/fonts/` och är hämtade 2026-09-15 från de här adresserna (Google roterar versionsnumret i sökvägen ibland):

| Fil | Hämtad från |
|---|---|
| `public/fonts/zilla-slab-latin-600.woff2` | `https://fonts.gstatic.com/s/zillaslab/v12/dFa5ZfeM_74wlPZtksIFYuUe6HOpWw.woff2` |
| `public/fonts/atkinson-hyperlegible-latin-400.woff2` | `https://fonts.gstatic.com/s/atkinsonhyperlegible/v12/9Bt23C1KxNDXMspQ1lPyU89-1h6ONRlW45G04pIo.woff2` |
| `public/fonts/atkinson-hyperlegible-latin-700.woff2` | `https://fonts.gstatic.com/s/atkinsonhyperlegible/v12/9Bt73C1KxNDXMspQ1lPyU89-1h6ONRlW45G8Wbc9dCWP.woff2` |

Behöver de hämtas om: anropa `https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@600&family=Atkinson+Hyperlegible:wght@400;700&display=swap` med en Chrome-user-agent, och `/* latin */`-blocken ger rätt fil. Alternativ källa med samma subset är google-webfonts-helper (gwfh.mranftl.com), välj "latin" och woff2.

Licens är SIL Open Font License för alla tre (Zilla Slab från Typotheque för Mozilla, Atkinson Hyperlegible från Braille Institute, Caveat från Impallari Type). Self-hosting är tillåten.

Layouten förladdar alla tre filerna i `<head>` med `<link rel="preload" as="font" type="font/woff2" crossorigin>`. `font-display: swap`. Reservstack medan filen laddar: system-ui för sans, Georgia för serif.

### Typskala

Storlekar i px, mobil (375 px) först och desktop (från 1024 px) efter snedstrecket. Radavstånd som faktor.

| Roll | Typsnitt | Vikt | Mobil / desktop | Radavstånd | Token |
|---|---|---|---|---|---|
| Brödtext | Atkinson | 400 | 17 / 18 | 1,6 | `text-brod`, `lg:text-brod-lg` |
| Ingress | Atkinson | 400 | 19 / 21 | 1,5 | `text-ingress`, `lg:text-ingress-lg` |
| H1 | Zilla Slab | 600 | 30 / 42 | 1,15 | `text-h1`, `lg:text-h1-lg` |
| H2 | Zilla Slab | 600 | 24 / 28 | 1,25 | `text-h2`, `lg:text-h2-lg` |
| H3 | Atkinson | 700 | 19 / 21 | 1,35 | `text-h3`, `lg:text-h3-lg` |
| Liten text (bildtext, meta, tabellfot) | Atkinson | 400 | 14 / 14 | 1,5 | `text-liten` |
| Finstilt (källhänvisning, prisdatum) | Atkinson | 400 | 13 / 13 | 1,5 | `text-finstilt` |
| Etikett (taggar, kolumnrubriker) | Atkinson | 700, versaler, spärrning 0,06 em | 12 / 13 | 1,3 | `text-etikett` |
| Stor siffra (kalkylatorresultat) | Zilla Slab | 600 | 48 / 64 | 1,0 | `text-siffra`, `lg:text-siffra-lg` |

Regler:

- H4 finns inte. Behövs en fjärde nivå är texten fel strukturerad.
- H1 och H2 sätts alltid med `font-serif`. H3 är sans, fet. Det är skillnaden i typsnitt, inte bara i storlek, som gör att läsaren ser nivåerna.
- H2 har pennstrecket under sig (klassen `.pennstreck`, avsnitt 6). H1 har det inte, ordmärket räcker ovanför. H3 har det aldrig.
- Brödtext är aldrig under 17 px på mobil. Reklammärkningen är 14 px, inte 13, den ska kunna läsas.
- Rubriker har luft ovanför sig, inte under. H2 får 48 px ovanför på mobil och 64 på desktop, 12 px under strecket. H3 får 32 ovanför, 8 under.
- Stycken skiljs med 1 em, inte med indrag.
- Läsbredd är max 44 rem (704 px), vilket ger 65 till 75 tecken per rad vid 18 px. Tabeller, diagram och illustrationer får gå ut till 72 rem.
- Alla tabeller och kalkylatorer sätter `font-variant-numeric: tabular-nums`.
- Fet text i brödtext används för ett par ord, aldrig för hela meningar. Kursiv för titlar och främmande ord.
- Nyckeltal i löptext får gul markering (`.markering`), högst två per skärm, aldrig på rubriker. "Minst 12 liter per dygn" markeras som "12 liter per dygn", inte hela meningen.
- Länkar i löptext är penna-färgade med rak understrykning (1 px, 3 px avstånd). Vid hover blir understrykningen 2 px. Det handdragna strecket finns bara under ordmärket och H2, inte på länkar; blir det på varje länk slutar det betyda något. Länkar ser inte ut som knappar och knappar ser inte ut som länkar.
- Text på linjerat papper (`.linjerat`) sätts med radavstånd 24 px så att raderna landar på linjerna.

## 3. Färger

Slutgiltiga tokens. Kontrast räknad enligt WCAG 2.x (relativ luminans), verifierad 2026-09-15.

| Token | Hex | Används till |
|---|---|---|
| `papper` | `#f5efe3` | Sidbakgrund. Varmt papper, aldrig vitt |
| `papper-2` | `#ebe2cf` | Faktarutor, linjerat papper, tabellhuvud, markerad kolumn, reklamband |
| `linje` | `#c9bca3` | Linjerna på papperet, avdelare, kortramar, tabellinjer. Bara dekorativt |
| `blyerts` | `#2a2521` | All text, rubriker, illustrationernas linjer, sidfotens bakgrund |
| `blyerts-2` | `#625a50` | Sekundär text, metadata, bildtexter, skraffering, formulärramar |
| `penna` | `#ad3519` | Snickarpennan. Länkar, knappar, pennstrecket, pilar och ringar i illustrationer, fokusring |
| `tumstock` | `#e8b830` | Överstrykning bakom nyckeltal, symbolen, markerat värde i tabell |
| `ok` | `#2e6b3b` | "Bäst i raden" i tabeller, giltig indata |
| `varning` | `#8c5300` | Varningsrutor, ogiltig indata, "slut i lager" |
| `vit` | `#ffffff` | Bakgrund i rutan bakom produktbilder. Ingenting annat |

Det finns ingen mörkare hover-färg. Hover på en knapp är att pennan trycks hårdare: bakgrunden blir `blyerts`, texten `papper`. Det gäller både köpknappen (penna i vila) och kalkylatorns "Räkna ut" (blyerts-ram i vila).

### Verifierad kontrast

| Kombination | Kontrast | Krav | Resultat |
|---|---|---|---|
| blyerts på papper | 13,24:1 | 4,5 | Godkänd, även AAA |
| blyerts på papper-2 | 11,78:1 | 4,5 | Godkänd |
| blyerts på vit (produktruta) | 15,16:1 | 4,5 | Godkänd |
| blyerts på tumstock (markering) | 8,18:1 | 4,5 | Godkänd |
| blyerts-2 på papper | 5,92:1 | 4,5 | Godkänd |
| blyerts-2 på papper-2 | 5,27:1 | 4,5 | Godkänd |
| blyerts-2 på vit | 6,78:1 | 4,5 | Godkänd |
| penna som text på papper | 5,56:1 | 4,5 | Godkänd |
| penna som text på papper-2 | 4,94:1 | 4,5 | Godkänd |
| papper på penna (knapptext) | 5,56:1 | 4,5 | Godkänd |
| papper på blyerts (hover, sidfot) | 13,24:1 | 4,5 | Godkänd |
| ok som text på papper | 5,59:1 | 4,5 | Godkänd |
| ok som text på papper-2 | 4,97:1 | 4,5 | Godkänd |
| varning som text på papper | 5,47:1 | 4,5 | Godkänd |
| varning som text på papper-2 | 4,87:1 | 4,5 | Godkänd |
| penna som text på tumstock | 3,44:1 | 4,5 | Underkänd, används inte |
| blyerts-2 på tumstock | 3,66:1 | 4,5 | Underkänd, används inte |
| linje på papper | 1,64:1 | 3,0 för gränssnittskomponenter | Underkänd, med avsikt |

Konsekvenser. Text på gul markering är alltid `blyerts`, aldrig `penna` eller `blyerts-2`, så en länk kan inte ligga inuti en markering. `linje` får bara användas för dekorativa avdelare, papperslinjer och ramar runt kort och tabeller. Ramen runt ett formulärfält, en kryssruta eller en radioknapp ska vara `blyerts-2` (5,92:1), eftersom fältets gräns måste kunna urskiljas. Fokusring är alltid `penna`, 3 px, 2 px utanför elementet.

Tailwinds standardpalett är avstängd i `global.css` (`--color-*: initial`). Skriver någon `bg-blue-500` byggs det inte. Det är meningen.

Färg bär aldrig information ensam. "Bäst i raden" i en tabell är både grön och fet. Ogiltig indata är både varningsfärgad och har en text under fältet. Ett markerat nyckeltal är också det tal meningen handlar om, så markeringen kan tas bort utan att något går förlorat.

Mörkt läge finns inte i fas 1. Sajten är ett papper.

## 4. Avstånd, radier, skuggor

### Avstånd

Bas 4 px. Tailwinds standardskala används (`p-4` är 16 px) men bara följande steg är tillåtna:

| Steg | px | Typisk användning |
|---|---|---|
| 1 | 4 | Mellan etikett och värde, inuti taggar |
| 2 | 8 | Mellan rader i en lista, mellan knapp och finstilt |
| 3 | 12 | Innanför tabellceller, under rubriker |
| 4 | 16 | Sidmarginal på mobil, innanför kort och faktarutor på mobil |
| 6 | 24 | Innanför kort på desktop, mellan block i ett kort, sidmarginal på surfplatta |
| 8 | 32 | Sidmarginal på desktop, ovanför H3 |
| 12 | 48 | Ovanför H2 på mobil, mellan sektioner på mobil |
| 16 | 64 | Ovanför H2 på desktop, mellan sektioner på desktop |
| 24 | 96 | Ovanför sidfoten på desktop |

Sidmarginal (utfall) är 16 px på 375, 24 px från 640, 32 px från 1024. Inget innehåll rör kanten på mobil.

Brytpunkter: bas (375 och uppåt), `sm` 640, `lg` 1024. `md` (768) används inte i sidmallar, bara om en tabell eller ett kort behöver det.

### Radier

| Token | Värde | Används till |
|---|---|---|
| `rounded-sm` | 2 px | Kort, faktarutor, formulärfält, taggar, tabeller, bilder |
| `rounded-md` | 6 px | Knappar, öppen mobilmeny |

Kort och faktarutor har 2 px, inte 6, eftersom de ska se ut som urklipp som klistrats in i boken, och urklipp är skurna med kniv. Inga piller, inga cirklar (utom om något faktiskt är runt). Författarfoto är kvadratiskt med 2 px radie. Tailwinds övriga radier är avstängda.

### Skuggor

En enda: `shadow-lyft`, `0 2px 8px rgb(42 37 33 / 0.14)`. Används bara på det som faktiskt ligger ovanpå sidan: den öppna mobilmenyn och rullgardiner i kalkylatorer. Kort har ram (1 px `linje`), inte skugga. Övriga Tailwind-skuggor är avstängda.

### Kort, en gång för alla

Ett kort på hantverkstips.se är ett urklipp: en yta med 1 px `linje`-ram, 2 px radie, 16 px inre marginal på mobil och 24 på desktop, samma bakgrund som sidan. Det får `papper-2` som bakgrund bara om det är en markerad produkt. Faktarutor är inte kort, de är linjerat papper (avsnitt 6). Inga skuggor, ingen färgad överkant, ingen ikon i hörnet.

## 5. Sidmallar

Gemensamt för alla sidor:

**Sidhuvud.** 56 px högt på mobil, 64 på desktop. Vänster: ordmärket som inlinead SVG (`src/assets/brand/riktning-1/ordmarke-inline.svg`, symbol, "Hantverkstips" i Zilla Slab och pennstrecket), 28 px högt på mobil och 36 på desktop, `width: auto`. Ordmärket är den enda länken till startsidan. Höger på mobil: knappen "Meny" (text, inte hamburgare, ikonen `ikon-meny` får stå bredvid ordet), som öppnar en lista under sidhuvudet via `<details>`, alltså utan JavaScript. Desktop: huvudmenyns fem poster i rad till höger, 15 px, blyerts, understrykning i penna vid hover. Ingen sökruta i fas 1. 1 px `linje` under sidhuvudet.

**Huvudmeny.** Fem poster, i den här ordningen: Fukt (`/fukt/`), Altan (`/altan/`), Verktyg (`/verktyg/`), Räkna själv (`/rakna/`), Så testar vi (`/om/sa-testar-vi/`). Inga undermenyer. Den sjätte platsen är reserverad för nästa pelare när den har sex publicerade sidor.

**Mobilmenyn.** Lodrät lista med `shadow-lyft`, 48 px per rad, ram 1 px linje, 6 px radie. Först de fem posterna, där pelarna (Fukt, Altan, Verktyg) har sin pelarikon till vänster om namnet (24 px, blyerts) och Räkna själv har `ikon-kalkylator`. Sedan en 1 px avdelare, etiketten "Bäst i test" och kategorierna med publicerad kategorisida (max fyra rader, utan ikon). Sedan en avdelare och "Om Hantverkstips".

**Reklammärkning.** Direkt under sidhuvudet på alla sidor som innehåller affiliatelänkar. Se komponent i avsnitt 6. Startsidan, pelarhubbar och kunskapsartiklar har inga köpknappar och därför inget band.

**Brödsmulor.** 14 px, blyerts-2, med snedstreck som avdelare. Följer URL:en: guide "Hantverkstips / Fukt / Rätt avfuktare till källaren", test "Hantverkstips / Luftavfuktare / Wood's MRD20", kalkylator "Hantverkstips / Räkna själv / Avfuktarkalkylator". På mobil visas bara de två sista nivåerna. Ingen ikon i brödsmulor.

**Sidfot.** Bakgrund blyerts, text papper. Ordmärket överst i papper (samma inlineade SVG, pennstrecket i penna syns bra på blyerts). Fyra spalter på desktop, en spalt på mobil, i den här ordningen: Ämnen (publicerade pelare), Bäst i test (kategorisidor), Räkna själv (kalkylatorer), Om sajten (Om oss, Så testar vi, Så tjänar vi pengar, Författare, Kontakt, Integritet). 14 px text. Inga enskilda artiklar, inga sociala ikoner.

**Hoppa till innehåll.** Första fokuserbara elementet på varje sida, synligt bara vid fokus.

**Marginalanteckning.** Högst en per sida, se avsnitt 6. Det är det enda stället där handskrift får förekomma utanför illustrationer.

### 5.1 Startsida

Startsidan är en uppslagen anteckningsbok, inte en landningssida. Inget hero, ingen bakgrundsbild, inga köpknappar, inget reklamband.

```
┌────────────────────────────────────┐
│ Sidhuvud                           │
├────────────────────────────────────┤
│ Öppning                            │
│   H1 (Zilla Slab, vänsterställd)   │
│   Ett stycke, 2 till 3 rader       │
│   Två textlänkar                   │
├────────────────────────────────────┤
│ Säsongens problem                  │
│   Illustration (skiss, full bredd) │
│   Verktygskort (kalkylator)        │
├────────────────────────────────────┤
│ Börja här                          │
│   Rad per pelare: ikon · H3 ·      │
│   en mening · 2 till 3 länkar      │
├────────────────────────────────────┤
│ Just nu (en artikel, stor)         │
│   Bild 3:2 · Etikett · Rubrik ·    │
│   Ingress · Meta                   │
├────────────────────────────────────┤
│ Bäst i test just nu                │
│   Rad per kategori: kategori,      │
│   vårt val, pris, länk             │
├────────────────────────────────────┤
│ Senaste guider och tester (6 st)   │
│   Rad: Etikett · Rubrik · En rad · │
│   Datum                            │
├────────────────────────────────────┤
│ Räkna själv (kalkylatorlista)      │
├────────────────────────────────────┤
│ Så jobbar vi (kort text, 2 länkar) │
├────────────────────────────────────┤
│ Sidfot                             │
└────────────────────────────────────┘
```

**Öppning.** H1 är ett påstående om huset, inte om verktygsköp och inte en välkomstfras. Riktning (chefredaktören skriver den riktiga): "Bygg, renovera och sköt huset utan att köpa fel." Under den ett stycke i ingress-storlek. Två länkar i löptext, en till en problemguide och en till en kalkylator. Vänsterställt, läsbredd. Första skärmen innehåller inget pris.

**Säsongens problem.** Den handskissade illustrationen av säsongens problem (källaren i september, altanen i april) i full bredd på mobil, med bildtext. Under den ett verktygskort (avsnitt 6) med säsongens kalkylator: avfuktare augusti till november, elkostnad december till februari, trall mars till juni. På desktop ligger illustrationen till vänster (60 procent) och verktygskortet till höger. Det här är det enda stället på startsidan där marginalanteckningen får sitta, som en handskriven rad vid illustrationen. Statiskt, ingen ö.

**Börja här.** Rubrik "Börja här" som H2 med pennstreck. En rad per publicerad pelare, aldrig kolumner: pelarikon (24 px, blyerts) och pelarnamn som H3 på samma rad, en mening om vad du hittar, sedan två till tre länkar till klustrets viktigaste sidor i löptext med kommatecken emellan. 1 px linje mellan raderna. Det här är sajtens karta, och det är härifrån hubbarna får sin interna länkkraft.

**Just nu.** En artikel, vald av chefredaktören. Mobil: bild 3:2 i full bredd, sedan etikett ("Köpguide", "Test", "Granskning"), rubrik i H2-storlek utan pennstreck (den är en länk), ingress, meta. Desktop: bild till vänster (halva bredden), text till höger, lodrätt centrerad. Bilden är eget foto eller egen illustration. Ingen leverantörsbild här.

**Bäst i test just nu.** Rubrik "Bäst i test just nu" som H2. En rad per kategori med 1 px linje emellan. Vänster: kategorinamn i H3. Mitten: "Vårt val" i etikett-stil följt av produktnamnet, och priset i blyerts-2 med datum. Höger: länken "Alla vi testat" till kategorisidan. Mobil: allt staplas inom raden, länken sist. Desktop: två spalter av rader. Bara länkar, inga köpknappar, ingen produktbild. Blocket ska vara lätt, en anteckning i marginalen, inte huvudsaken. Data från kategorifilen och databasen.

**Senaste guider och tester.** Sex rader, samma anatomi som "Just nu" men utan bild och med rubrik i H3. Mobil en spalt, desktop två spalter. Etiketten säger typ: "Test", "Granskning", "Köpguide", "Problemguide", "Projektguide", "Kunskap", "Jämförelse".

**Räkna själv.** Lista med varje kalkylator: namn som länk och en rad om vad man får ut. Ingen ikon.

**Så jobbar vi.** Två till fyra meningar om hur vi testar och hur vi tjänar pengar, med länkar till "Så testar vi" och "Så tjänar vi pengar". Det här blocket finns för förtroendet, och för Google.

### 5.2 Pelarhub

URL `/fukt/`. Huben är diagnosstart och länknav, handskriven av chefredaktören, inte en automatisk lista. Inga köpknappar, inget reklamband.

```
┌────────────────────────────────────┐
│ Sidhuvud                           │
├────────────────────────────────────┤
│ Brödsmulor                         │
│ Pelarikon (32 px) + H1             │
│ Ingress                            │
├────────────────────────────────────┤
│ Illustration (pelarens situation)  │
├────────────────────────────────────┤
│ H2 Hitta felet                     │
│   Rad: Rubrik (länk) · en mening   │
├────────────────────────────────────┤
│ H2 Välj rätt                       │
│   Rad: Rubrik (länk) · en mening   │
├────────────────────────────────────┤
│ H2 Räkna                           │
│   Verktygskort                     │
├────────────────────────────────────┤
│ H2 Testat i kategorin              │
│   Rad per kategorisida: namn (länk)│
│   · vårt val · antal testade       │
├────────────────────────────────────┤
│ Sidfot                             │
└────────────────────────────────────┘
```

**Rubrikblock.** Pelarikonen står till vänster om H1, 32 px, blyerts, det enda stället där en ikon står vid en rubrik. H1 är hubbens löfte, till exempel "Fukt i huset, hitta orsaken innan du köper något". Ingressen säger vad pelaren täcker i två meningar.

**Grupperna.** Tre H2 med pennstreck i den ordning innehållsarkitekturen anger: "Hitta felet" (problemguider och kunskap), "Välj rätt" (köpguider och jämförelser), "Räkna" (kalkylatorerna, som verktygskort). Varje rad är rubriken som länk i H3-storlek och en mening skriven av chefredaktören, inte ingressen kopierad. 1 px linje mellan rader. Hubben publiceras när den har minst fem sidor att länka till.

**Testat i kategorin.** Kategorisidor som hör till pelaren, samma anatomi som "Bäst i test just nu" på startsidan. Bara länkar.

**Desktop.** Läsbredd, ingen innehållsförteckning (sidan är sin egen).

### 5.3 Problemguide

URL `/fukt/fukt-i-kallaren/`. Diagnosordningen är sidan. Produkten dyker upp på ett ställe, efter diagnosen, i det avsnitt som säger vilken åtgärd som gäller för läsarens fall. Ibland är svaret "köp ingenting", och då finns ingen produkt på sidan alls.

```
┌────────────────────────────────────┐
│ Sidhuvud                           │
│ Reklammärkning (bara om produkt)   │
├────────────────────────────────────┤
│ Brödsmulor                         │
│ H1                                 │
│ Ingress                            │
│ Meta                               │
├────────────────────────────────────┤
│ Kort svar (linjerat papper)        │
│   Vad du ska kontrollera först,    │
│   i vilken ordning                 │
├────────────────────────────────────┤
│ Illustration (situationen)         │
├────────────────────────────────────┤
│ Innehållsförteckning               │
├────────────────────────────────────┤
│ H2 per symptom eller orsak         │
│   Löptext, faktarutor, varning     │
│   Verktygskort där texten talar    │
│   om storlek (högst ett per sida)  │
├────────────────────────────────────┤
│ H2 Åtgärden för ditt fall          │
│   Produktkort kompakt (högst ett)  │
│   eller länk till "ring ett proffs"│
├────────────────────────────────────┤
│ Källor                             │
│ Relaterat (3 till 4 länkar)        │
│ Författarruta                      │
│ Sidfot                             │
└────────────────────────────────────┘
```

**Kort svar.** Här är det korta svaret en ordning, inte en produkt: "Känn på väggen på morgonen. Är den torr men golvet vått är det kondens. Är väggen våt längst ner och det luktar jord är det markfukt. Tejpa en bit plast på väggen och läs av efter två dygn." Länkar till kalkylatorn bara om den är relevant.

**Produkten.** Ett kompakt produktkort, i det avsnitt där texten säger att en avfuktare är rätt åtgärd, aldrig ovanför "Kort svar", aldrig i en lista sist. Nämner texten en enda produkt räcker kortet i texten. Leder diagnosen till "ring ett proffs" ersätts kortet av en länk till artikeln om när man gör det.

**Desktop.** Läsbredd med innehållsförteckning i höger spalt från 1024 px.

Kunskapsartiklar (till exempel "Sorption eller kondens, temperaturen avgör") använder samma mall utan produktblock och utan reklamband, med undantaget "en produkt per typ, sist" som innehållsarkitekturen anger för vissa sidor; då renderas de som kompakta kort under en H2 sist, och bandet visas.

### 5.4 Projektguide

URL `/altan/` (huben är projektguiden) och `/altan/tradack-pa-mark/`. Steg för steg, med verktyget där det avgör resultatet, och listan över allt du behöver sist.

```
┌────────────────────────────────────┐
│ Sidhuvud                           │
│ Reklammärkning                     │
├────────────────────────────────────┤
│ Brödsmulor                         │
│ H1                                 │
│ Ingress                            │
│ Meta (uppdaterad, författare)      │
├────────────────────────────────────┤
│ Kort svar (linjerat papper)        │
│   Tid, kostnad, svårighet, det     │
│   som avgör om du klarar det själv │
├────────────────────────────────────┤
│ Illustration (skiss med mått)      │
├────────────────────────────────────┤
│ Innehållsförteckning               │
├────────────────────────────────────┤
│ H2 per steg (Plintar, Reglar, ...) │
│   Löptext, faktarutor, varning     │
│   Egna diagram och tabeller        │
│   Produktkort kompakt där verktyget│
│   avgör (högst ett per H2)         │
│   Verktygskort (trallkalkylatorn)  │
├────────────────────────────────────┤
│ H2 Det här behöver du              │
│   H3 Verktyg (rader med köpknapp)  │
│   H3 Material (rader utan länk)    │
├────────────────────────────────────┤
│ Källor                             │
│ Relaterat                          │
│ Författarruta                      │
│ Sidfot                             │
└────────────────────────────────────┘
```

**Kort svar.** Projektets nyckeltal med markering: "En altan på 20 kvm tar två helger för två personer och kostar runt 18 000 kr i material. Det som avgör är grunden, plintar i lera är det svåraste momentet." Länk till bygglovsartikeln och kalkylatorn.

**Stegen.** Varje H2 är ett moment med rubrik som säger något ("Reglarna, avståndet som gör att däcket inte gungar"), inte "Steg 3". Kompakt produktkort bara där texten motiverar det: "en 18-voltsmaskin orkar 400 trallskruv på en laddning, en 12-voltsmaskin gör det inte". Max ett kort per H2.

**Det här behöver du.** Sist på sidan, se komponent i avsnitt 6. Fem till åtta rader totalt. Verktygen har köpknapp, materialet är text utan länk (butiken säljer inte virke). Modulen väntas stå för merparten av klicken på en projektguide, eftersom läsaren har läst färdigt och vet vad hon saknar. Kompakta kort får inte användas här.

**Desktop.** Läsbredd med innehållsförteckning i höger spalt. Diagram, tabeller och illustrationen får gå ut till sidbredd.

### 5.5 Köpguide

URL `/fukt/luftavfuktare-kallare/`. Problemet först, produkten sist, men svaret i första skärmen.

```
┌────────────────────────────────────┐
│ Sidhuvud                           │
│ Reklammärkning                     │
├────────────────────────────────────┤
│ Brödsmulor                         │
│ H1                                 │
│ Ingress                            │
│ Meta                               │
├────────────────────────────────────┤
│ Kort svar (linjerat papper)        │
│   3 till 5 rader, konkret,         │
│   nyckeltal markerat, 1 till 2     │
│   länkar                           │
├────────────────────────────────────┤
│ Illustration eller foto 3:2        │
│   med bildtext                     │
├────────────────────────────────────┤
│ Innehållsförteckning               │
├────────────────────────────────────┤
│ Löptext med H2 och H3              │
│   Faktarutor, Varning, diagram,    │
│   enstaka Produktkort (kompakt)    │
│   där texten nämner en produkt     │
├────────────────────────────────────┤
│ Verktygskort (om kalkylator finns) │
├────────────────────────────────────┤
│ H2 Produkterna vi nämner           │
│   Produktkort kompakt, staplade    │
├────────────────────────────────────┤
│ Källor                             │
│ Relaterat (3 till 4 länkar)        │
│ Författarruta                      │
│ Sidfot                             │
└────────────────────────────────────┘
```

**Kort svar.** Linjerat papper-2 med marginallinje (avsnitt 6). Innehåller det konkreta svaret med siffror, och nyckeltalet markerat: "En källare på 40 kvm med 2,2 meter i tak och 75 procent luftfuktighet behöver en avfuktare på minst **12 liter per dygn** (markerat). Vi rekommenderar Wood's MRD20, 4 990 kr." Länkar till produktens test och till kalkylatorn. Ingen köpknapp här, det kommer när läsaren fått resonemanget.

**Bilden.** Ligger under det korta svaret, inte ovanför rubriken. Saknas eget foto används en egen illustration i skisstil (källaren i genomskärning med mått och anteckningar). Saknas både foto och illustration utgår bilden. Leverantörsbild används aldrig som guidens huvudbild.

**Löptext.** Läsbredd. Produktkort i kompakt variant får ligga i texten där produkten diskuteras, max ett per H2-avsnitt. Diagram och tabeller får bryta ut till sidbredd på desktop.

**Produkterna vi nämner.** Genereras från frontmatterns `produkter`. Kompakta kort med köpknapp. Det här är guidens konverteringsyta, och den ligger sist med avsikt.

**Desktop.** Läsbredd med innehållsförteckning i höger spalt.

### 5.6 Bäst i test (kategorisida)

URL `/luftavfuktare/`. Sidan som tjänar pengar, så första skärmen på 375 × 667 ska innehålla rubrik, ingress och första rekommendationen med köpknapp. Ingen bild ovanför.

```
┌────────────────────────────────────┐
│ Sidhuvud                           │
│ Reklammärkning                     │
├────────────────────────────────────┤
│ Brödsmulor                         │
│ H1 (löfte)                         │
│ Ingress                            │
│ Meta (uppdaterad, författare,      │
│       "9 produkter, 3 testade")    │
├────────────────────────────────────┤
│ VÅRA VAL (block, papper-2)         │
│  ┌ Bäst totalt ─────────────────┐  │
│  │ bild · namn · en rad · pris  │  │
│  │ [Till Proffsmagasinet]       │  │
│  │ Annonslänk · pris 12 sep     │  │
│  └──────────────────────────────┘  │
│  ┌ Bäst till krypgrund ─────────┐  │
│  ┌ Bäst under 4 000 kr ─────────┐  │
├────────────────────────────────────┤
│ Innehållsförteckning               │
├────────────────────────────────────┤
│ Jämförelsetabell (alla produkter)  │
├────────────────────────────────────┤
│ H2 per produkt                     │
│   Etikett Test eller Granskning    │
│   Produktkort (full)               │
│   Löptext, bra, dåligt, mätvärden  │
│   Faktaruta Köp om / Köp inte om   │
│   Köpknapp                         │
│   (upprepas)                       │
├────────────────────────────────────┤
│ H2 Så väljer du (kort, länk till   │
│    hub, köpguide och kalkylator)   │
├────────────────────────────────────┤
│ H2 Så testade vi                   │
│ Källor                             │
├────────────────────────────────────┤
│ Vanliga frågor (bara riktiga)      │
├────────────────────────────────────┤
│ Fler guider och tester i kategorin │
├────────────────────────────────────┤
│ Författarruta                      │
│ Sidfot                             │
└────────────────────────────────────┘
```

**Rubrikblock.** H1 i läsbredd. Meta på en rad i 14 px blyerts-2: "Uppdaterad 12 september 2026 · Av Namn · 9 produkter, 3 testade". Prickarna är avdelare, inte tankstreck. Antalet testade mot granskade står här, så att läsaren ser skillnaden direkt.

**Våra val.** Blocket har `papper-2` som bakgrund (slätt, inte linjerat, det är ett block med kort och inte en anteckning) och går ut i full bredd på mobil (kant till kant, innehåll med 16 px marginal). Rubrik "Våra val" i H2 med pennstreck. Två eller tre kompakta produktkort med etikett ("Bäst totalt", "Bäst till krypgrund", "Bäst under 4 000 kr"). Etiketterna skrivs av redaktören, inte av mallen, och de säger något konkret, aldrig "premium", "mellanklass", "budget". Varje kort har köpknapp och länken "Läs testet". På mobil är korten staplade, 12 px emellan. På desktop ligger de tre i rad, lika breda, och blocket är lika brett som sidbredden (72 rem). Det första kortet är inte större än de andra. Tre lika kort i rad är tillåtet här eftersom det är tre likvärdiga val, inte tre ikoner.

**Jämförelsetabell.** Alla produkter i kategorin som vi testat eller granskat, från databasen. Kolumnerna styrs av kategorifilen (för avfuktare: kapacitet liter per dygn vid 20 °C och 60 % RF, effekt W, ljud dB, arbetsområde °C, pris). Beteende beskrivs i avsnitt 6. Rekommenderade produkter har `papper-2` som kolumnbakgrund.

**Per produkt.** H2 som säger något ("Wood's MRD20, tystast i testet men dyr"), med pennstreck. Direkt under H2 etiketten "Test" eller "Granskning" (avsnitt 6). Sedan ett fullt produktkort med bild till vänster på desktop, överst på mobil. Löptext, ett par stycken, gärna med ett eget diagram (uppmätt kapacitet vid olika temperaturer). Faktaruta med de två delarna "Köp om" och "Köp inte om". Köpknapp sist. Mellan produkter 48 px på mobil, 64 på desktop, plus 1 px linje.

**Så väljer du.** Tre till fem stycken som sammanfattar köpguiden, med länk till pelarhubben, köpguiden och kalkylatorn. Kalkylatorlänken är ett verktygskort som på startsidan. Aldrig en andra guide.

**Vanliga frågor.** Bara om chefredaktören har riktiga frågor. Varje fråga som H3, svar i 1 till 3 stycken. Inte `<details>`, svaren ska synas och indexeras.

**Desktop.** Innehåll i läsbredd centrerat i sidbredden, med innehållsförteckningen i höger spalt (sticky, 15 px, blyerts-2) från 1024 px. Tabellen och blocket "Våra val" bryter läsbredden och använder hela sidbredden.

**Ingen fast köpknappsrad.** En rad längst ner på skärmen som följer med skulle öka klick men strider mot principen om lugn reklam. Beslutet omprövas när vi har klickdata i fas 3.

### 5.7 Produkttest

URL `/tester/woods-mrd20/`. En produkt, ett omdöme, egna siffror. Etiketten "Test" betyder att vi haft produkten och mätt, "Granskning" att vi jämfört datablad och tredjepartsmätningar. Den står i H1-blocket och i `Product`-markupen, och mallen är samma för båda; det som skiljer är etiketten och kolumnrubriken i omdömestabellen.

```
┌────────────────────────────────────┐
│ Sidhuvud                           │
│ Reklammärkning                     │
├────────────────────────────────────┤
│ Brödsmulor                         │
│ Etikett Test eller Granskning      │
│ H1 (produkt och omdöme)            │
│ Ingress                            │
│ Meta (testad, uppdaterad, av)      │
├────────────────────────────────────┤
│ OMDÖME (kort, ram)                 │
│   Produktbild 4:3 (vit ruta)       │
│   Etikett (om "Vårt val")          │
│   En mening omdöme                 │
│   Tabell med 3 till 5 värden       │
│     (Vi mätte / Tillverkaren       │
│      uppger), bästa markerat       │
│   Köp om / Köp inte om             │
│   Pris + Köpknapp                  │
│   Annonslänk · pris 12 sep         │
├────────────────────────────────────┤
│ Innehållsförteckning               │
├────────────────────────────────────┤
│ Löptext med H2 som säger något     │
│   Diagram med egna mätningar       │
│   Faktarutor, Varning              │
├────────────────────────────────────┤
│ H2 Alternativ                      │
│   2 till 3 Produktkort kompakt     │
│   (billigare, tystare, större)     │
├────────────────────────────────────┤
│ H2 Specifikationer (full tabell)   │
├────────────────────────────────────┤
│ H2 Så testade vi                   │
│ Källor                             │
├────────────────────────────────────┤
│ Köpknapp (avslutande, med pris)    │
├────────────────────────────────────┤
│ Relaterat                          │
│ Författarruta                      │
│ Sidfot                             │
└────────────────────────────────────┘
```

**Omdömesblock.** Ett kort med ram. Mobil: bild överst (4:3, hela kortets bredd), sedan text. Desktop: bild till vänster (40 procent), text till höger. Omdömestabellen har två värdekolumner, "Vi mätte" och "Tillverkaren uppger", så att läsaren ser skillnaden; på en granskning heter kolumnerna "Tredje part mätte" (med källa i tabellfoten) och "Tillverkaren uppger". Det viktigaste uppmätta värdet får gul markering. "Köp om" och "Köp inte om" är två korta stycken med rubrik i etikett-stil, inte listor. Köpknappen är den första på sidan och den sista ligger efter "Så testade vi", ingen däremellan.

Ingen poängskala, inga stjärnor. Omdömet är en mening och två stycken. Stjärnor är det första en läsare slutar lita på.

**Diagram.** Testsidor har minst ett eget diagram (uppmätt kapacitet, ljud på avstånd, strömförbrukning över tid). Inline-SVG, ritad med tokens i skissens hand, med `width` och `height`. Se avsnitt 7.

**Alternativ.** Rubrikerna på korten säger varför alternativet finns: "Billigare, men högre ljud", "Klarar större yta".

**Specifikationer.** Full tabell från databasens `specs`, två kolumner (egenskap, värde). Ingen sidledsscroll behövs.

### 5.8 Kalkylator

URL `/rakna/avfuktare/`. Exempel med avfuktarkalkylatorn. Detta är en React-ö, men den renderas färdig från servern så att sidan ser klar ut innan JavaScript laddat. Kalkylatorn ligger på linjerat papper: det är snickaren som räknar på blocket.

```
┌────────────────────────────────────┐
│ Sidhuvud                           │
│ Reklammärkning                     │
├────────────────────────────────────┤
│ Brödsmulor                         │
│ H1 "Hur stor avfuktare behöver du?"│
│ Ingress (2 rader)                  │
├────────────────────────────────────┤
│ KALKYLATOR (linjerat papper)       │
│   Yta        [ 40 ] kvm            │
│   Takhöjd    [ 2,4 ] m             │
│   Fuktnivå   ( ) 60 till 70 %      │
│              (•) 70 till 80 %      │
│              ( ) över 80 % / mögel │
│   Uppvärmt   [x] Ja, över 15 °C    │
│   [ Räkna ut ]                     │
│ ───────────────────────────────    │
│ RESULTAT                           │
│   Minst                            │
│   ▌12▐ liter per dygn              │
│   (stort tal, markerat)            │
│   vid 20 °C och 60 % RF            │
│   Två meningar om vad det betyder  │
│   Länk till Så räknar vi           │
├────────────────────────────────────┤
│ Produkter som klarar det (2 till 3)│
│   Produktkort kompakt + köpknapp   │
│   Länk till Alla avfuktare vi testat│
├────────────────────────────────────┤
│ H2 Så räknar vi (formel, antagan-  │
│    den, källor)                    │
├────────────────────────────────────┤
│ H2 Läs vidare (guider)             │
├────────────────────────────────────┤
│ Sidfot                             │
└────────────────────────────────────┘
```

**Indata.** Tre obligatoriska fält och ett valfritt. Yta och takhöjd är numeriska fält med enheten som text till höger i fältet, `inputmode="decimal"`, decimalkomma accepteras. Fuktnivå är radioknappar med förklarande text, inte en rullgardin, eftersom läsaren behöver läsa alternativen för att veta vilket som gäller. Uppvärmt är en kryssruta. Alla fält har synlig etikett ovanför, 15 px, 700. Fälthöjd 48 px. Ram `blyerts-2` 1 px, radie 2 px, bakgrund papper (fälten ligger på det linjerade papperet och ska se ut som ifyllda rutor, inte som vita hål). Fokus enligt global regel.

Fälten är förifyllda med typiska värden (40 kvm, 2,4 m, 70 till 80 %) så att resultatet syns direkt vid serverrendering. Knappen "Räkna ut" är sekundär knappstil (genomskinlig, 1,5 px blyerts-ram, blyerts text) och inte penna, för att skilja handling från reklam. Hover fyller den med blyerts.

**Resultat.** Det stora talet är sidans bild. Ordet "Minst" i etikett-stil, talet i `text-siffra` (Zilla Slab, 48 px mobil, 64 desktop) med gul markering bakom bara siffrorna, enheten "liter per dygn" på samma rad i ingress-storlek, blyerts. Under: förutsättningarna i 14 px blyerts-2. Sedan två meningar som förklarar (till exempel att kapaciteten är en marginal och varför). Resultatet ligger på samma linjerade papper som formuläret, avdelat med 1 px linje, så att läsaren inte behöver leta. Talet uppdateras utan animation.

**Produkter.** Två till tre produkter från databasen vars kapacitet ligger på eller strax över resultatet, sorterade på pris. Kompakta kort med köpknapp. Aldrig en produkt som inte klarar värdet med marginal. Länk till kategorisidan.

**Tillstånd.**

| Tillstånd | Beteende |
|---|---|
| Tomt (innan hydrering) | Formuläret är förifyllt och resultatet för standardvärdena är renderat från servern. Sidan ser klar ut |
| Laddning | Ingen spinner. Om beräkningen är synkron behövs inget laddningsläge. Produkter renderas med serverdata från bygget |
| Beräknat | Resultat uppdateras vid klick på "Räkna ut" (inte vid varje tangenttryck, det gör siffran hoppig). Produktlistan uppdateras samtidigt |
| Ogiltig indata | Fältet får ram i `varning`, en rad text under fältet i `varning` 14 px: "Ange yta mellan 5 och 300 kvm". Resultatet behålls från senaste giltiga beräkning |
| Utanför intervall | Resultatet ersätts av en faktaruta: "Över 300 kvm rekommenderar vi två maskiner eller en fast installation. Läs guiden om krypgrund" |
| Inga produkter matchar | Faktaruta: "Vi har inte testat någon avfuktare i den storleken. Se alla vi testat" med länk |
| JavaScript av | Formuläret skickas som vanlig GET till samma sida, som räknar på servern. Fungerar utan ö |

**Mobil.** Alla fält i full bredd, staplade. Resultatet får aldrig bredare innehåll än 343 px (375 minus marginaler); 64 px-talet används först från 1024 px. Produktkorten staplas. Ingen sidledsscroll.

**Desktop.** Papperet är 44 rem brett, formuläret till vänster och resultatet till höger i två lika spalter. Produkterna i rad om tre under.

## 6. Komponenter

Alla komponenter ligger i `src/components/ui/` som Astro utan klient-JS, utom det som uttryckligen är en ö. Signaturelementen är tre hjälpklasser i `global.css` (`.pennstreck`, `.markering`, `.linjerat`), och komponenterna använder dem, de bygger inte egna varianter.

### Signaturelement

**Pennstreck** (`.pennstreck`). Ett handdraget rött streck, 3 px i penna med rundade ändar, ritat som en mask-bild under elementet så att färgen är token. Bredden följer textens bredd, inte spaltens. Används under ordmärket (i SVG:n) och under varje H2. Inte under H1, H3, länkar eller som avdelare. Två streck ovanför varandra på samma skärm är ett tecken på att en H2 borde vara H3.

**Markering** (`.markering`). Gul överstrykning i tumstock bakom ett tal eller två till fyra ord, med lutande kanter och förskjuten något nedåt så att den ser ut som en överstrykningspenna. Text på markering är alltid blyerts. Aldrig en hel rad, aldrig en rubrik, aldrig en knapp, aldrig en länk. Högst två per skärm. Kalkylatorns resultat, "Kort svar"-rutans nyckeltal och det viktigaste värdet i ett omdömesblock är de typiska ställena.

**Linjerat papper** (`.linjerat`). Bakgrund papper-2 med en linje i `linje` var 24:e px och en röd marginallinje (penna, 35 procent) 24 px in från vänster på mobil, 32 på desktop. Innehållet börjar till höger om marginallinjen. Text sätts med radavstånd 24 px så att raderna landar på linjerna. Används i faktarutor, "Kort svar" och bakom kalkylatorn. Aldrig som sidbakgrund, aldrig bakom produktkort, aldrig bakom tabeller.

**Marginalanteckning.** En handskriven rad i Caveat, levererad som SVG med texten konverterad till banor, med `role="img"` och `aria-label` som återger texten. Högst en per sida, placerad vid en illustration eller vid kalkylatorns resultat, i blyerts-2 eller penna, 16 till 19 px i illustrationens skala. Chefredaktören skriver texten (i stilguidens ton, "ingen dränering sedan 1971"), designansvarig sätter den. Den får aldrig bära information som inte också finns i löptexten.

### Ikoner

Spriten `src/assets/brand/riktning-1/ikoner.svg` inlineas i layouten så att `<use href="#ikon-fukt">` fungerar utan extra förfrågan. 16 ikoner, 24 px grid, linje 1,75 px i `currentColor`, runda ändar, lätt darr i långa linjer och små överskjut i hörnen. Pelarikoner (fukt, altan, tak, grund, isolering, verktyg, el) används i mobilmenyn, i "Börja här" och vid pelarhubbens H1, i 24 px (32 vid H1), blyerts. Gränssnittsikoner (kalkylator, meny, stäng, sök, pil höger, extern länk, varning, info, check) används bara med text bredvid och `aria-hidden="true"`. Ikoner finns aldrig i löptext, aldrig framför H2 eller H3, aldrig i brödsmulor, aldrig som dekoration. Nya ikoner ritas i samma sprite efter reglerna i filens kommentar och godkänns av designansvarig.

### Etikett

**Syfte.** Säga vilken sorts sida eller vilket slags underlag läsaren har framför sig.

**Innehåll.** Ett ord i etikett-stil (12 px, 700, versaler, spärrning). På listrader typen: "Test", "Granskning", "Köpguide", "Problemguide", "Projektguide", "Kunskap", "Jämförelse". På testsidor och i kategorisidans produktavsnitt underlaget: "Test" när vi haft produkten och mätt, "Granskning" när vi jämfört datablad och tredjepartsmätningar. På produktkort redaktörens omdöme: "Vårt val", "Bäst till krypgrund".

**Utseende.** Text i blyerts, ingen bakgrund, ingen ram, ingen ikon. Redaktörens omdömesetikett på produktkort är i penna. "Test" och "Granskning" ser likadana ut; skillnaden ska ligga i ordet, inte i en färg som säger att det ena är sämre.

### Köpknapp

**Syfte.** Enda vägen till butiken. Sköter `/go/[slug]`, `rel="sponsored nofollow"`, klicklogg med `modul` och `position`.

**Innehåll.** Pris i blyerts, 700, ovanför eller till vänster om knappen ("4 990 kr"). Knappen med texten "Till Proffsmagasinet" (butikens namn hämtas från databasen). Under knappen finstilt i blyerts-2: "Annonslänk · pris 12 sep". Datumet är erbjudandets `uppdaterad`. Ordet är "Annonslänk", inte "Reklamlänk", enligt branschrekommendationen och nätverkets riktlinjer.

**Utseende.** Primär: bakgrund penna, text papper, 16 px 700, 12 px lodrät och 20 px vågrät innermarginal, minst 44 px hög, radie 6 px, ingen ikon, ingen skugga. Full bredd på mobil inuti kort. Sekundär variant (för "Läs testet" bredvid en köpknapp, och för kalkylatorns "Räkna ut"): genomskinlig med 1,5 px blyerts-ram, blyerts text.

**Tillstånd.**

| Tillstånd | Utseende |
|---|---|
| Normal | Som ovan |
| Hover | Bakgrund blyerts, text papper (gäller båda varianterna) |
| Fokus | Global fokusring |
| Aktiv | Som hover, inget annat |
| Slut i lager | Sekundär stil, text "Slut i lager hos Proffsmagasinet", pris i blyerts-2 med "senast" framför. Länken går ändå till butiken, lagerstatus kan vara gammal |
| Pris saknas | Text "Se pris hos Proffsmagasinet", ingen prisrad, finstilt "Annonslänk" utan datum |
| Flera butiker (fas 2) | En knapp per butik, billigast först, bara den första är primär. Kortet har redan plats för två rader under priset |

Lagerstatus visas bara när den är negativ. Ett grönt "i lager" på varje kort ser ut som en butik.

### Produktkort

**Syfte.** Visa en produkt med tillräckligt för ett beslut, och en väg vidare. Kortet ser ut som ett inklistrat urklipp.

**Innehåll.** Bild (4:3, produkt i vit ruta med 1 px linje-ram), etikett om redaktören satt en ("Vårt val", "Bäst till krypgrund"), märke och modell som H3, en rad "för vem" (skriven av redaktören, inte leverantören), 2 till 4 nyckelvärden från kategorifilen (etikett och värde, tabellsiffror), pris, köpknapp med sin finstilta rad, länk "Läs testet" om test finns.

**Varianter.**

- *Kompakt* (i löptext, listor, kalkylatorresultat, "Våra val"). Mobil: bild 96 × 72 px till vänster, text till höger, köpknapp i full bredd under. Desktop: samma, men köpknappen till höger på samma rad som priset.
- *Full* (kategorisidans produktavsnitt, omdömesblock). Mobil: bild överst i kortets bredd. Desktop: bild till vänster 40 procent.

**Tillstånd.**

| Tillstånd | Utseende |
|---|---|
| Normal | Ram linje, 2 px radie, ingen skugga, bakgrund papper |
| Med etikett | Etikett i penna, etikett-stil, överst i textdelen |
| Rekommenderad | Bakgrund papper-2 i stället för papper |
| Utan test | Länken "Läs testet" utgår, inget annat |
| Slut i lager | Köpknappens tillstånd, ingen genomstrykning av kortet |
| Bild saknas | Ruta i papper-2 med märkets namn i etikett-stil centrerat. Inga platshållarikoner |

Prishistorik (fas 2) är ett litet linjediagram i det fulla kortet, 90 dagar, lägsta pris markerat med gul markering, inline-SVG utan hover.

### Det här behöver du

**Syfte.** Projektguidens lista över allt läsaren behöver, sist på sidan när hon läst färdigt. Modulen med flest klick på en projektguide.

**Innehåll.** Rubrik "Det här behöver du" som H2 med pennstreck. Två H3, "Verktyg" och "Material". Under varje H3 rader, fem till åtta totalt på sidan. En verktygsrad har namn (länk till testet om det finns, annars fet text), en mening om varför just den ("en 18-voltsmaskin orkar hela trallen på en laddning"), pris i blyerts 700, köpknapp och den finstilta raden "Annonslänk · pris 12 sep". En materialrad har namn, en mening och mängd om den är känd ("28 mm tryckimpregnerad trall, 46 löpmeter"), ingen länk, inget pris. Ingen tabell, inga produktbilder, inga kompakta kort.

**Utseende.** Rader med 1 px linje emellan, 16 px lodrät innermarginal. Mobil: namn och mening staplade, sedan pris och köpknapp på en rad (pris till vänster, knapp i resten av bredden). Desktop: namn och mening till vänster (två tredjedelar), pris och knapp till höger (en tredjedel), lodrätt centrerat. Materialraderna har samma anatomi utan högerdelen, så att listan läses som en lista och inte som två olika komponenter.

**Tillstånd.** Verktygsrad utan pris visar knappens "Se pris"-tillstånd. Verktygsrad utan produkt i databasen (bygget varnar) renderas som materialrad. Modulen renderas inte om den har färre än tre rader.

### Verktygskort

**Syfte.** Länken till en kalkylator, ett per sida, från varje guide där resultatet är relevant, från kategorisidans "Så väljer du" och från startsidan.

**Innehåll.** Ikonen `ikon-kalkylator` (24 px) och rubriken i H3 på samma rad ("Hur stor avfuktare behöver du?"), en rad förklaring, och länken "Till kalkylatorn". På startsidan dessutom ett litet eget diagram eller en detalj ur säsongens illustration överst.

**Utseende.** Kort (ram linje, 2 px, ingen skugga), bakgrund papper. Ingen köpknapp, inget pris. Statiskt, ingen ö.

### Jämförelsetabell

**Syfte.** Alla produkter i en kategori mot samma mått, från databasen.

**Innehåll.** Kolumner är produkter, rader är egenskaper. Första raden: bild 4:3 (liten, 80 px bred, vit ruta), märke och modell, etikett om redaktören satt en, och "Test" eller "Granskning". Sedan en rad per spec ur kategorifilen, i den ordning kategorifilen anger. Sista raden: pris och köpknapp (kompakt, full bredd i cellen) med finstilt rad. Enheter står i radrubriken ("Kapacitet, l/dygn"), inte i varje cell. Bästa värdet i varje rad markeras med fetstil och `ok`-färg, sämsta markeras inte. Saknat värde skrivs "ej angivet" i blyerts-2.

**Utseende.** 1 px linje mellan rader, tabellhuvud (första kolumnen) i papper-2. Celler 12 px innermarginal, 15 px text, tabellsiffror. Rekommenderade produkters kolumner har papper-2 som bakgrund. Ingen gul markering i tabeller utom i omdömestabellen på testsidor, där ett värde får den.

**Mobil.** Tabellen scrollar i sidled inom en behållare. Första kolumnen (egenskapsnamn) är `position: sticky; left: 0` med papper-2 och en 1 px linje till höger så att den syns som fast. Varje produktkolumn är 150 px bred. Behållarens högerkant har en 24 px tonad övergång till papper som visar att det finns mer, och ovanför tabellen står "Dra i sidled för att se alla" i 14 px blyerts-2. Max fem produkter i en inline-tabell i löptext; kategorisidans tabell får ha fler.

**Desktop.** Full sidbredd. Upp till sex kolumner utan scroll, därefter scroll i sidled på samma sätt.

**Tillstånd.** Med och utan priser (prisraden utgår om ingen produkt har pris). Med och utan köpknappar (jämförelser i kunskapsartiklar kan sakna dem). Färre än två produkter: komponenten renderar inte, bygget varnar.

### Faktaruta

**Syfte.** Lyfta något som ska läsas även av den som skummar. Faktarutan är en anteckning på blocket, därför ligger den på linjerat papper.

**Innehåll.** Rubrik (valfri, H3-stil) och en till tre stycken, eller en kort lista om innehållet faktiskt är en lista.

**Varianter.**

- *Kort svar.* Linjerat papper-2 med marginallinje (`.linjerat`), rubriken "Kort svar" i H3, nyckeltalet markerat. Används en gång per sida, högst upp, under meta. Det här är den färgade ytan från Magasinet, i Anteckningsbokens hand.
- *Fakta* (standard). Samma linjerade papper, valfri rubrik. Ingen markering.
- *Köp om / Köp inte om.* Som Fakta men med två delar under varsin etikett ("Köp om", "Köp inte om"). Staplas på mobil, två spalter på desktop.

**Tillstånd.** Statisk. Innehåller aldrig köpknappar, aldrig produktkort.

### Varning

**Syfte.** Säkerhet och dyra misstag. Inte för "tänk på att".

**Innehåll.** Ordet "Varning" i etikett-stil, färg varning, följt av en till två meningar. Rubriken kan bytas mot något specifikt ("Kräver jordfelsbrytare").

**Utseende.** 4 px linje till vänster i varning, ingen bakgrund, ingen ikon, 16 px innermarginal. Varningen ligger inte på linjerat papper, den ska avvika från anteckningarna runt omkring. Det är det enda blocket med linje till vänster, så läsaren lär sig att just det mönstret betyder varning.

**Tillstånd.** Statisk.

### Reklammärkning

**Syfte.** Lagkrav (marknadsföringslagen) och förtroende. Läsaren ska förstå affären på tre sekunder.

**Innehåll.** Fastställd formulering, ordagrant:

> Reklam. Sidan innehåller annonslänkar till Proffsmagasinet. Handlar du via dem får vi provision, priset för dig är detsamma. Så tjänar vi pengar.

Sista meningen är en länk till `/om/sa-tjanar-vi-pengar/`. Butiksnamnet hämtas från databasen, i fas 2 "till butiker vi samarbetar med". Ordet "Reklam" är Konsumentverkets ord och står först.

**Utseende.** Band i full bredd direkt under sidhuvudet, bakgrund papper-2 (slät, inte linjerad), 1 px linje under, 14 px text i blyerts (inte blyerts-2, det ska vara läsbart), 12 px lodrät innermarginal, texten i läsbredd. Inte stängbar. Inget kryss. Ingen ikon.

**Tillstånd.** Visas på alla sidor där en köpknapp eller jämförelsetabell med köpknappar renderas. Layouten avgör det, inte innehållsfilen. Köpknappen har dessutom sin egen finstilta rad "Annonslänk · pris [datum]" under sig, så märkningen finns på två ställen: ovanför första länken och vid varje länk. Inga "i samarbete med", inga hashtaggar, ingen märkning som bara ligger i sidfoten.

### Innehållsförteckning

**Syfte.** Skumläsning och hopp på långa sidor. Bygger på H2 i innehållet.

**Innehåll.** Rubriken "Innehåll" i etikett-stil, numrerad lista med H2-rubrikerna som länkar till ankare. Bara H2, aldrig H3.

**Mobil.** `<details>` med `<summary>` "Innehåll, 8 avsnitt", stängd som standard, ram linje, 2 px radie. Öppnad visas listan med 44 px per rad.

**Desktop.** Från 1024 px flyttas den till höger spalt, `position: sticky; top: 80px`, 15 px text i blyerts-2, aktiv rad markeras inte (det kräver JavaScript). Listan är alltid öppen där.

**Tillstånd.** Färre än tre H2 på sidan: renderas inte.

### Författarruta

**Syfte.** Visa att en människa med erfarenhet skrivit. Underlag för `Article`-markup.

**Innehåll.** Foto 64 × 64 px, kvadratiskt med 2 px radie (riktigt foto, inte avatar). Namn som länk till författarsidan, 700. En rad om erfarenhet, skriven som fakta: "Snickare sedan 2004. Testar sågar och mätverktyg för Hantverkstips sedan 2025." Datum publicerad och uppdaterad i 14 px blyerts-2. Länken "Så testar vi".

**Utseende.** 1 px linje ovanför, ingen ram runt, 24 px innermarginal lodrätt. Foto till vänster, text till höger på alla bredder.

**Tillstånd.**

| Tillstånd | Utseende |
|---|---|
| Med foto | Som ovan |
| Utan foto | Kvadrat i papper-2 med initialer i etikett-stil |
| Redaktionen (kalkylatorer, kategorisidor utan enskild författare) | Namn "Redaktionen", symbolen (tumstocken) som bild, raden "Vi testar själva eller granskar tillverkarnas data. Så gör vi." |

## 7. Bilder

I fas 1 kommer nästan alla produktbilder från leverantören. De är rena packshots mot vit bakgrund, likadana som på tjugo andra sajter. Sajtens egna bilder är skisserna, och de är huvudbilder tills egna foton finns.

### Vad vi gör med leverantörsbilder

- **De blir små.** En packshot är aldrig en huvudbild. Den ligger i ett produktkort (96 px bred i kompakt, max 40 procent av kortet i full), i tabellhuvud (80 px) och i omdömesblocket. Aldrig i full bredd, aldrig som hero.
- **Samma ram överallt.** Alla produktbilder ligger i en 4:3-ruta med 1 px linje-ram och 2 px radie, med bilden `object-fit: contain` och 8 px luft runt. Rutans bakgrund är `vit`, det enda stället vit används. Att rutan är vit mot det varma papperet är avsiktligt: bilden ser ut som ett inklistrat urklipp, inte som en produktsida.
- **Konsekvent beskärning.** 4:3 för produkter, 3:2 för foton av situationer, 1:1 för författare. Inga fria proportioner. Alla `<Image>` har `width` och `height`, alltid.
- **Ingen retusch, ingen färgton.** Vi lägger inte filter på leverantörsbilder. Det ser billigt ut.

### Skisserna

Blyertsskiss på linjerat papper. Förebilden är `src/assets/brand/riktning-1/illustration-kallare.svg`, och varje ny illustration följer samma regler så att tio agenter ritar som en hand:

- **Papperet.** Bakgrund `papper` med linjer i `linje` var 24:e px (mönstret `monster.svg` som `<pattern>`), och en marginallinje i penna vid 35 procents opacitet 40 px från vänster. Skala 600 × 360 för en huvudbild i 3:2 (kan beskäras till 4:3 för kort).
- **Blyerts.** Allt som är hus, mark och föremål ritas i `blyerts`, 2 px, runda ändar. Raka linjer är aldrig raka: en kvadratisk kurva med kontrollpunkten förskjuten högst 3 procent av linjens längd. Hörn skjuter över 2 till 4 px. En linjebredd per lager, ingen fyllning, ingen skuggning.
- **Skraffering.** Mark, betong och isolering skrafferas med korta snedstreck (10 px, 45 grader) i `blyerts-2`, 1,25 px, 22 px emellan. Bakom text läggs en papperslapp i `papper` så att skrafferingen inte stör.
- **Snickarpennan.** Allt som handlar om problemet ritas i `penna`, 2,5 px: pilarna där fukten kommer in, dropparna, en ring runt det våta hörnet, måttpilen på det som ska mätas. Ringen är en öppen kurva som inte sluter, som när man ringar in något för hand. Aldrig mer än en sak per illustration som pekar; är det två saker är det två illustrationer.
- **Handskriften.** Caveat 500, 16 till 19 px i illustrationens skala, i blyerts (förklaringar), blyerts-2 (bakgrund, mått) eller penna (problemet). Texten är i stilguidens ton och skrivs av chefredaktören: "markfukt trycker in genom väggen", "ingen dränering sedan 1971". Konverteras till banor innan publicering; `<text>` får inte finnas kvar i en publicerad illustration.
- **Nyckeltalet.** Ett tal per illustration får gul markering: en rektangel i tumstock, 65 procents opacitet, roterad en till två grader, bakom texten.
- **Mått.** Handritade måttbyglar i blyerts-2, 1,5 px, med måttet i handskrift: "2,2 m i tak", "c 600".
- **Inga människor, inga verktyg i drift, inga produktbilder.** En avfuktare i en skiss är en rektangel med en pil för luftflödet.

Altanen ritas som snickarens egen skiss med mått på reglarna, taket som en takstol med vinkeln noterad, garaget med fläkten och pilar för luftflödet. Chefredaktören beställer, designansvarig ritar eller specar, och varje ny illustration granskas mot listan ovan.

### Diagram

Varje test och varje kategorisida har minst ett diagram med egna eller källgranskade siffror. Inline-SVG, byggd vid bygget, med tokens och i samma hand som skisserna: axlar och etiketter i blyerts-2 (Atkinson, 13 px, ingen handskrift i diagram), staplar och linjer i blyerts med 2 px linje, den produkt eller det värde texten handlar om i penna, jämförelsevärden i linje. Det viktigaste värdet får gul markering bakom siffran. En serie i penna, aldrig fler. Diagrammen har `role="img"` och en `aria-label` som säger vad de visar. Diagram är alltid rätt bredd för mobil (max 343 px utan scroll) och får inte förlita sig på hover. Ingen 3D, inga tårtor.

### Tabeller som ser ut som något

Jämförelsetabellen och omdömestabellen är designade ytor, inte utskrifter av databasen. Rätt siffror i raka kolumner, bästa värdet markerat, enheten i radrubriken.

### Egna foton när de kommer

Christian tar egna foton av produkter i drift senare. Då gäller: 3:2, dagsljus, produkten i sin miljö (avfuktaren i källaren, inte på ett bord), ingen människa i bild, ingen hjälm. Bilden får en bildtext som säger vad man ser och när det togs. Egna foton ersätter skissen som huvudbild, skissen stannar i texten.

### Vad som aldrig används

Stockfoton. Genererade bilder av verktyg. Bilder utan `width` och `height`. Bilder som hotlinkas. Bildkaruseller. Bakgrundsbilder bakom text. Handskrift som webbfont.

## 8. Förbjudet (mallsignaler)

Det här byggs inte, oavsett vem som ber om det.

- Hero med bakgrundsbild och centrerad text.
- Tre kolumner med ikon, rubrik och en rad. Tre lika kort i rad är tillåtet bara när det är tre jämförbara val (som "Våra val"), aldrig som dekoration.
- Gradienter, någonstans. (`.markering` och `.linjerat` använder `linear-gradient` som ritverktyg för en platt yta och platta linjer, det är inte en gradient i den här meningen.)
- Skugga på kort. Skugga används bara på det som ligger ovanpå sidan.
- Piller-formade knappar och taggar.
- Stjärnbetyg, poäng av tio, procent-cirklar.
- Rabattmärken, "Spara 20 %", överstrukna priser i rött. Ordinarie pris får visas i blyerts-2 med "tidigare" framför, inget mer.
- Grönt "i lager". Lagerstatus visas bara när den är negativ.
- Fasta köpknappar som följer med skärmen (fas 1).
- Popup, banderoll, "prenumerera"-ruta, cookie-ruta som täcker innehåll (vi har inga kakor som kräver samtycke).
- Animationer utöver `transition` på färg vid hover, max 150 ms. Ingen animation kräver JavaScript, och `prefers-reduced-motion` stänger av även dem. Pennstrecket ritas inte upp, det är där.
- Ikoner i löptext, framför H2 och H3, i brödsmulor eller som dekoration. Ikoner finns i mobilmenyn, i "Börja här", vid pelarhubbens H1 och i gränssnitt med text bredvid. Bara ikoner ur spriten.
- Emojis.
- Runda författarbilder.
- Karuseller. Dragspel eller flikar som döljer innehåll som ska läsas eller indexeras.
- Färger utanför tokens. `--color-*: initial` i `global.css` ser till att det inte går.
- Mörkt läge (fas 1).
- Typsnitt utöver Zilla Slab och Atkinson Hyperlegible i HTML. Caveat som webbfont, `font-hand` i en komponent, eller `<text>` i Caveat kvar i en publicerad SVG.
- Gul markering på hela rader, på rubriker, på länkar eller som knapp. Text i annat än blyerts på markering.
- Pennstreck under H3, under länkar, som avdelare, eller mer än ett per rubrik.
- Linjerat papper som sidbakgrund, bakom produktkort eller bakom tabeller.
- Mer än en marginalanteckning per sida, eller handskrift som HTML-text.
- Text på bild.
- "Läs mer"-knappar. Rubriken är länken.
- Rubriker i formen "X: Y". Kommatecken, som i stilguiden.
- Punktlistor som layoutelement för resonemang, precis som i stilguiden.

## Bilaga A. Kontrollista för visuell granskning

Designansvarig går igenom varje ny komponent och sidmall mot den här listan innan "Godkänd av design".

1. Fungerar det på 375 px utan sidledsscroll (undantag jämförelsetabellen)?
2. Är alla färger tokens? Alla avstånd ur skalan? Alla radier 2 eller 6?
3. Har varje bild `width` och `height`, och rätt proportion?
4. Ligger reklambandet ovanför första köpknappen, och har varje köpknapp raden "Annonslänk · pris [datum]" under sig?
5. Är fokusringen synlig på allt som går att tabba till, i rätt ordning?
6. Är klickytor minst 44 px höga?
7. Har formulärfält synliga etiketter och feltext under fältet?
8. Kräver något JavaScript för att se rätt ut? Då är det fel, utom inuti kalkylatorn.
9. Har varje H2 pennstreck, och ingenting annat?
10. Ligger gul markering bara bakom tal och korta fraser, i blyerts, högst två per skärm?
11. Ligger linjerat papper bara i faktarutor, "Kort svar" och kalkylatorn, och landar raderna på linjerna?
12. Finns högst en marginalanteckning, som SVG med banor och `aria-label`?
13. Följer nya illustrationer och diagram reglerna i avsnitt 7 (linjebredder, darr, en sak i penna)?
14. Finns det något på sidan som skulle kunna vara vilken affiliatesajt som helst? Stryk det.

## Bilaga B. Tillgångar

Alla filer under `src/assets/brand/riktning-1/`. Handskrivna SVG:er utan editormetadata, med viewBox, största under 6 kB. Mapparna `riktning-2/` och `riktning-3/` är historik och används inte.

| Fil | Innehåll | Används |
|---|---|---|
| `ordmarke.svg` | Symbol, "Hantverkstips" i Zilla Slab 600 med `font-family` i filen, pennstreck. Fristående, för om-sida och externt bruk | Som `<img>` där SVG:n inte kan ärva sajtens typsnitt |
| `ordmarke-inline.svg` | Samma ordmärke utan xmlns, typsnitt via `var(--font-serif)` och färger via tokens i style-attribut | Inlineas i sidhuvud och sidfot, ärver self-hostade Zilla Slab |
| `symbol.svg` | Tumstocken vikt till ett H, 32 px | Favicon, redaktionens författarruta, sociala förhandsbilder |
| `ikoner.svg` | Sprite med 16 symboler i `currentColor` | Inlineas i layouten, se Ikoner i avsnitt 6 |
| `illustration-kallare.svg` | Källaren i genomskärning, förebild för alla skisser | Huvudbild i fuktguiderna och startsidans säsongsblock (augusti till november) |
| `monster.svg` | Linjerat papper, kakelbart 48 × 24 | Som `<pattern>` i illustrationer. I HTML används `.linjerat` i stället |

Ordmärket i båda varianterna sätter texten i Zilla Slab som `<text>`. Så länge sajten self-hostar typsnittet renderas den inlineade varianten rätt. Konvertering av texten till banor görs med fonttools när det finns tillgängligt i bygg-miljön, och då byts `<text>` mot en `<path>` i båda filerna så att ordmärket blir oberoende av typsnittsladdning. Tills dess: reservstacken Georgia visas under de millisekunder swap tar, vilket är samma beteende som alla H1 på sidan.
