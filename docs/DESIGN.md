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

**Varför Caveat, och varför den inte laddas.** Handskriften är snickarens anteckning i marginalen och finns bara i illustrationer och i marginalanteckningen (avsnitt 6). Den skickas aldrig till klienten som webbfont. Texten konverteras till banor i SVG-filen innan publicering (`npm run illustrationer`, se bilaga B och `docs/ARKITEKTUR.md`), så att illustrationen ser likadan ut överallt och kostar noll byte typsnitt. `--font-hand` finns i `global.css` bara för SVG-källfilerna och för att namnet ska vara ett. `font-hand` i HTML är ett fel.

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
| Kortrubrik (rubriken i ett artikelkort) | Zilla Slab | 600 | 20 / 22 | 1,25 | `text-kortrubrik`, `lg:text-kortrubrik-lg` |
| Stor siffra (kalkylatorresultat) | Zilla Slab | 600 | 48 / 64 | 1,0 | `text-siffra`, `lg:text-siffra-lg` |

Regler:

- H4 finns inte. Behövs en fjärde nivå är texten fel strukturerad.
- H1 och H2 sätts alltid med `font-serif`. H3 är sans, fet. Det är skillnaden i typsnitt, inte bara i storlek, som gör att läsaren ser nivåerna.
- Kortrubriken är undantaget (beslut 2026-09-16). Rubriken i ett artikelkort är semantiskt en H3 men sätts i Zilla Slab 600, som en liten tidningsrubrik. Det är skälet till att ett rutnät läses som en tidningssida i stället för som en länklista. Regeln "H3 är sans" gäller fortfarande för H3 i löptext, och pennstrecket under H2 håller isär nivåerna. Startsidans stora kort använder `text-kortrubrik-xl` (24 px), som bara finns där.
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

**Huvudmeny.** De publicerade pelarhubbarna i den ordning `src/lib/pelare.ts` anger, högst tre (`MAX_HUBBAR_I_MENY`, sänkt från fem 2026-09-16), följda av Ämnen (`/amnen/`), Guider (`/guider/`), Räkna själv (`/rakna/`) och Så testar vi (`/om/sa-testar-vi/`). Sju poster i 15 px får plats vid 1024 px med ordmärket. September 2026 är det Fukt, Inomhus, Ämnen, Guider, Räkna själv, Så testar vi. Pelare utanför de tre finns under Ämnen och i sidfoten. Inga undermenyer. Menyn är inte hårdkodad: en pelare kommer in genom att dess hub får `utkast: false`.

**Mobilmenyn.** Lodrät lista med `shadow-lyft`, 48 px per rad, ram 1 px linje, 6 px radie. Uppifrån: de tre hubbarna med sin pelarikon till vänster om namnet (24 px, blyerts), raden "Alla ämnen" utan ikon, sedan "Guider och tester" och "Räkna själv" (`ikon-kalkylator`), sedan etiketten "Bäst i test" och kategorierna med publicerad kategorisida (max fyra rader, utan ikon), sist "Så testar vi" och "Om Hantverkstips".

**Reklammärkning.** Direkt under sidhuvudet på alla sidor som innehåller affiliatelänkar. Se komponent i avsnitt 6. Startsidan, pelarhubbar och kunskapsartiklar har inga köpknappar och därför inget band.

**Brödsmulor.** 14 px, blyerts-2, med snedstreck som avdelare. Följer URL:en: guide "Hantverkstips / Fukt / Rätt avfuktare till källaren", test "Hantverkstips / Luftavfuktare / Wood's MRD20", kalkylator "Hantverkstips / Räkna själv / Avfuktarkalkylator". På mobil visas bara de två sista nivåerna. Ingen ikon i brödsmulor.

**Sidfot.** Bakgrund blyerts, text papper. Ordmärket överst i papper (samma inlineade SVG, pennstrecket i penna syns bra på blyerts). Fyra spalter på desktop, en spalt på mobil, i den här ordningen: Ämnen (publicerade pelare, sist raderna "Alla ämnen" och "Alla guider och tester"), Bäst i test (kategorisidor), Räkna själv (kalkylatorer), Om sajten (Om oss, Så testar vi, Så tjänar vi pengar, Författare, Kontakt, Integritet). 14 px text. Inga enskilda artiklar, inga sociala ikoner.

**Hoppa till innehåll.** Första fokuserbara elementet på varje sida, synligt bara vid fokus.

**Marginalanteckning.** Högst en per sida, se avsnitt 6. Det är det enda stället där handskrift får förekomma utanför illustrationer.

### 5.1 Startsida

Startsidan är en uppslagen anteckningsbok, inte en landningssida. Ingen bakgrundsbild, inga köpknappar, inget reklamband.

Blocken skrevs om 2026-09-16 efter granskningen av den byggda sidan: layouten låg i läsbredd med en tom högerspalt, allt var en lodrät ström av rader, och säsongsbilden och "Just nu" visade samma skiss två gånger. Rutnätet av kort är svaret. Samma dag togs säsongsblocket bort helt, efter ägarens omdöme om övre halvan: etikett, säsongsrubrik, källarskiss, verktygskort och "Läs först" sa fem saker samtidigt och läsaren fick inget svar på vad sajten gör. Kvar blev ett hero som säger det med en bild och en mening, och säsongen styrs i stället genom `justNu` och rutnätet.

```
┌────────────────────────────────────┐
│ Sidhuvud                           │
├────────────────────────────────────┤
│ Hero (sidbredd, 6/12 + 6/12)       │
│   H1 (Zilla Slab) · ett stycke     │
│   Illustration till höger          │
├────────────────────────────────────┤
│ Ämnesrad (sidbredd)                │
│   Åtta ämneskort, fyra i rad       │
│   Ikon 40 px · namn · en rad       │
│   Länk "Alla ämnen" till höger     │
├────────────────────────────────────┤
│ Guider och tester                  │
│   H2 + länk "Alla guider och       │
│   tester" på samma rad             │
│   Rutnät: 1 stort kort (justNu)    │
│   + 4 vanliga, tre kolumner        │
├────────────────────────────────────┤
│ Bäst i test just nu                │
│   Rad per kategori: kategori,      │
│   vårt val, pris, antal granskade  │
├────────────────────────────────────┤
│ Räkna själv (verktygskort, 3 sp.)  │
├────────────────────────────────────┤
│ Så jobbar vi (kort text, 2 länkar) │
├────────────────────────────────────┤
│ Sidfot                             │
└────────────────────────────────────┘
```

**Hero.** Överst, i sidbredd. Desktop: två spalter om 6/12 med 48 px mellanrum, lodrätt centrerade. Vänster är H1 i Zilla Slab, vänsterställd, och under den startsidans stycke i ingress-storlek med sina två länkar i löptext, en till en problemguide och en till en kalkylator. Höger är illustrationen, `src/assets/illustrationer/start/hus-tumstock.svg`, ritad i ordmärkets stil. Mobil: H1, stycket, sedan illustrationen i full bredd. H1 är ett påstående om huset, inte om verktygsköp och inte en välkomstfras. Första skärmen innehåller inget pris.

Illustrationen renderas som `<img>` med width och height ur filen, `fetchpriority="high"` och `decoding="async"`. Den är sidans LCP-bild. `alt=""`: bilden är dekorativ, H1 bär meningen. Ingen ram, ingen bildtext och inget linjerat papper bakom — heron ska vara en ren yta, och undantaget från ramregeln i avsnitt 7 gäller just den här bilden.

**Ämnesrad.** Direkt under heron, i sidbredd: ett rutnät av ämneskort för alla åtta pelare i `PELARE`-ordning, fyra kolumner från 1024 px och två under. Komponenten är `Amnesrad.astro`, utseendet står i avsnitt 6. Den ersatte "Börja här" 2026-09-16, efter att ägaren påpekade att startsidan inte hade något att klicka på ovanför vecket och ingen väg till ämnena. Raden ska förbli kompakt: heron tar övre halvan, och ämneskorten ska ändå nå vecket på desktop. Under rutnätet ligger länken "Alla ämnen" till `/amnen/` till höger, i samma stil som "Alla guider och tester".

**Guider och tester.** H2 med pennstreck till vänster och länken "Alla guider och tester" till `/guider/` till höger på samma rad. Ett rutnät med fem Artikelkort: det första är chefredaktörens `justNu` i variant `stor` och tar två kolumner på desktop, de fyra följande är de senaste publicerade med `justNu` bortfiltrerad. Ett stort plus fyra är sex celler, alltså två fyllda rader; sex kort hade lämnat ett ensamt kort på en tredje rad. Mobil: det stora kortet stående, de fyra i kompakt variant. Tester, jämförelser och kategorisidor ingår på samma villkor som artiklar. Säsongen syns här: chefredaktören väljer `justNu` efter årstiden, och blocket är sedan 2026-09-16 det enda stället där säsongen styr startsidan.

**Bäst i test just nu.** Rubrik "Bäst i test just nu" som H2. En rad per kategori med 1 px linje emellan, två spalter av rader på desktop. Kategorinamn i H3, "Vårt val" i etikett-stil följt av produktnamnet, priset och antalet granskade ("13 granskade") i blyerts-2, och länken "Alla vi granskat" till kategorisidan. Bara länkar, inga köpknappar, ingen produktbild. Blocket ska vara lätt, en anteckning i marginalen, inte huvudsaken. Data från kategorifilen och databasen.

**Räkna själv.** Verktygskort i tre spalter på desktop, två från `sm` och en på mobil. Blocket renderas så snart registret har minst en kalkylator: sedan säsongsblocket och dess verktygskort togs bort 2026-09-16 är det enda stället på startsidan där verktygen syns, och verktygen är det vi har som ingen annan har.

**Så jobbar vi.** Två till fyra meningar om hur vi testar och hur vi tjänar pengar, med länkar till "Så testar vi" och "Så tjänar vi pengar". Det här blocket finns för förtroendet, och för Google.

### 5.2 Pelarhub

**Omgjort 2026-09-17.** Hubben är ett galleri som mallen bygger, utan handskriven text. Skälet är Christians läsning av `/inomhus/`: specifik information om tavlor och skruvar hör hemma i artiklarna, hubben ska säga "här listar vi" och visa korten. Hubfilen bär bara frontmatter (title, description, ingress). Mallen `PelarHub.astro` visar gruppetiketten (Utsidan, Insidan, Hela huset), ikon, H1, ingress, antal sidor med länk till `/guider/[pelare]/`, och därefter de fyra grupperna Hitta felet, Välj rätt, Gör det själv och Räkna, var och en med en generell rad som aldrig nämner en enskild sida, produkt eller ett tal, följd av kortrutnätet. En tom grupp visas inte. Registret per nivå längst ner är borttaget, `/guider/[pelare]/` fyller den funktionen. Sidhuvudet beskrivs i INNEHALLSARKITEKTUR.md avsnitt 4.

URL `/fukt/`. Huben är diagnosstart och länknav, handskriven av chefredaktören, inte en automatisk lista. Inga köpknappar, inget reklamband.

```
┌────────────────────────────────────┐
│ Sidhuvud                           │
├────────────────────────────────────┤
│ Brödsmulor                         │
│ Pelarikon (32 px) + H1             │
│ Ingress                            │
│ Handskriven inledning (läsbredd)   │
├────────────────────────────────────┤
│ H2 Hitta felet                     │
│   Chefredaktörens mening           │
│   Rutnät av Artikelkort            │
├────────────────────────────────────┤
│ H2 Välj rätt                       │
│   Kategorikort först, sedan kort   │
├────────────────────────────────────┤
│ H2 Gör det själv (projektguider)   │
├────────────────────────────────────┤
│ H2 Räkna                           │
│   Verktygskort i rutnät            │
├────────────────────────────────────┤
│ H2 Alla sidor i Fukt   + länk      │
│   Enkel · Mellan · Expert i tre    │
│   spalter, tätt register           │
├────────────────────────────────────┤
│ Sidfot                             │
└────────────────────────────────────┘
```

**Rubrikblock.** Pelarikonen står till vänster om H1, 32 px, blyerts. H1 är hubbens löfte, till exempel "Fukt i huset, hitta orsaken innan du köper något". Ingressen säger vad pelaren täcker i två meningar. Rubrikblocket, inledningen och gruppernas meningar hålls till läsbredd; rutnäten går ut i sidbredd.

**Grupperna.** Fyra möjliga H2 med pennstreck, i den här ordningen: "Hitta felet" (problemguider och kunskap), "Välj rätt" (kategorisidor som kategorikort först, sedan köpguider och jämförelser), "Gör det själv" (projektguider) och "Räkna" (kalkylatorerna i pelaren, som verktygskort). Chefredaktören skriver H2:n och sin mening i hubfilen och lägger `<Kortgrupp grupp="hitta-felet" />` under den; komponenten läser pelaren ur rutten och renderar korten ur frontmatter. Så blir gruppen både handskriven och komplett. En grupp utan sidor renderar ingenting. Hubben publiceras när den har minst fem sidor att länka till.

**Alla sidor i pelaren.** Registret ligger sist som säkerheten mot föräldralösa sidor, i tre spalter på desktop (Enkel, Mellan, Expert sida vid sida), med länken "Alla guider i Fukt" till `/guider/fukt/` på rubrikraden. Det är ett register, inte en läsyta, så det får vara tätt: etikett och titel per rad, 1 px linje mellan raderna.

**Mobil.** Stående kort i huben, inte kompakta: den som valt ämne är här för att läsa, och bilden är halva anledningen att klicka. Registret blir tre listor under varandra.

**Desktop.** Sidbredd, ingen innehållsförteckning (sidan är sin egen).

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

URL `/fukt/avfuktare-kallare/`. Problemet först, produkten sist, men svaret i första skärmen.

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
│     (Jag mätte / Tillverkaren       │
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

**Omdömesblock.** Ett kort med ram. Mobil: bild överst (4:3, hela kortets bredd), sedan text. Desktop: bild till vänster (40 procent), text till höger. Omdömestabellen har två värdekolumner, "Jag mätte" och "Tillverkaren uppger", så att läsaren ser skillnaden; på en granskning heter kolumnerna "Tredje part mätte" (med källa i tabellfoten) och "Tillverkaren uppger". Det viktigaste uppmätta värdet får gul markering. "Köp om" och "Köp inte om" är två korta stycken med rubrik i etikett-stil, inte listor. Köpknappen är den första på sidan och den sista ligger efter "Så testade vi", ingen däremellan.

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

### 5.9 Alla ämnen

URL `/amnen/`. Kartan över sajten, ordnad som människor tänker: ämne först, sedan vad som finns i ämnet. En sektion per publicerad pelare i `PELARE`-ordning; opublicerade pelare visas inte, en karta med tomma rum är sämre än en mindre karta.

Sektionen börjar med pelarikonen i 32 px och pelarnamnet som H2 med pennstreck, länkat till huben, sedan pelarens ingress. Under den tre spalter på desktop:

| Spalt | Innehåll |
|---|---|
| Guider (6/12) | Länklistor under etikett per typ i fast ordning: Problemguider, Kunskap, Köpguider, Projektguider, Jämförelser. Varje rad är titeln som länk och nivån i etikett-stil efter. Tester ligger under kategorin, inte här |
| Bäst i test (3/12) | Ett kategorikort per kategorisida vars `pelare` innehåller pelaren, och under kortet kategorins tester som länkrader |
| Räkna (3/12) | Verktygskort för kalkylatorer med `kategori` i pelaren |

Inget rutnät av artikelkort här. Kartan ska vara tät och skanningsbar, och med femhundra artiklar måste den vara en lista; korten finns för kategorier och kalkylatorer, som är få. Sist ett stycke i blyerts-2 om vilka pelare som kommer, utan länkar, så att läsaren ser att sajten växer utan att skickas till en tom sida. På mobil staplas spalterna. Strukturerad data: `ItemList` med hubbarna. Brödsmulor: Hantverkstips / Alla ämnen.

Spaltbredden är 6/3/3, inte 7/3/2 som i designbriefen: med 2/12 blev verktygskortet 192 px brett och bröt rubriken till ett ord per rad.

### 5.10 Alla guider och tester

URL `/guider/`, med filtersidorna `/guider/[pelare]/`, `/guider/typ/[typ]/` och `/guider/niva/[niva]/`. Galleriet med allt publicerat som har en sida att gå till: guider, kunskap, tester, jämförelser och kategorisidor (som kategorikort, och bara när de är indexerbara). Sorterat på `publicerad` fallande, kategorisidor på `uppdaterad`.

Under H1 en rad i 14 px blyerts-2: "43 sidor, den senaste 16 september 2026". På `/guider/` står chefredaktörens ingress ovanför den.

**Filtret.** Ett block i slätt `papper-2` (det är ett gränssnitt, inte en anteckning) med 1 px linje och tre rader: Ämne, Typ och Nivå. Varje rad är en etikett och länkar med antalet i parentes i blyerts-2. Den aktiva posten är blyerts 700 med 2 px understrykning i penna och `aria-current="page"`, inte en länk. Poster med noll sidor visas inte. Ett filter i taget: de två andra raderna byter filter i stället för att lägga till, och deras "Alla" står som aktiv. Länkarna har 44 px klickhöjd, radbryts och har 8 px vågrätt mellanrum. Ingen rullgardin, ingen `<select>`, inga knappar, ingen JavaScript.

**Rutnätet.** Artikelkort i tre kolumner, 24 kort per sida.

**Pagineringen.** `/guider/sida/2/` och `/guider/fukt/sida/2/`. Under rutnätet en rad: "Sida 2 av 21" i blyerts-2 till vänster, "Föregående sida" och "Nästa sida" som penna-länkar till höger, ingen sifferlista. Raden renderas inte när det bara finns en sida. `rel="prev"` och `rel="next"` ligger i `<head>`.

H1 och title per filter står i `docs/briefer/texter-platshallare-2026-09-16.md`: ämnesfiltret "Guider och tester om fukt och inomhusklimat", typfiltret typen i plural, nivåfiltret "Enkla guider, klara på en dag", "Guider på mellannivå" och "Expertsidor och undersökningar". Strukturerad data: `ItemList` med sidans kort. Brödsmulor: Hantverkstips / Guider / Fukt.

## 6. Komponenter

Alla komponenter ligger i `src/components/ui/` som Astro utan klient-JS, utom det som uttryckligen är en ö. Signaturelementen är tre hjälpklasser i `global.css` (`.pennstreck`, `.markering`, `.linjerat`), och komponenterna använder dem, de bygger inte egna varianter.

### Signaturelement

**Pennstreck** (`.pennstreck`). Ett handdraget rött streck, 3 px i penna med rundade ändar, ritat som en mask-bild under elementet så att färgen är token. Bredden följer textens bredd, inte spaltens. Används under ordmärket (i SVG:n) och under varje H2. Inte under H1, H3, länkar eller som avdelare. Två streck ovanför varandra på samma skärm är ett tecken på att en H2 borde vara H3.

**Markering** (`.markering`). Gul överstrykning i tumstock bakom ett tal eller två till fyra ord, med lutande kanter och förskjuten något nedåt så att den ser ut som en överstrykningspenna. Text på markering är alltid blyerts. Aldrig en hel rad, aldrig en rubrik, aldrig en knapp, aldrig en länk. Högst två per skärm. Kalkylatorns resultat, "Kort svar"-rutans nyckeltal och det viktigaste värdet i ett omdömesblock är de typiska ställena.

**Linjerat papper** (`.linjerat`). Bakgrund papper-2 med en linje i `linje` var 24:e px och en röd marginallinje (penna, 35 procent) 24 px in från vänster på mobil, 32 på desktop. Innehållet börjar till höger om marginallinjen. Text sätts med radavstånd 24 px så att raderna landar på linjerna. Används i faktarutor, "Kort svar" och bakom kalkylatorn. Aldrig som sidbakgrund, aldrig bakom produktkort, aldrig bakom tabeller.

**Marginalanteckning.** En handskriven rad i Caveat, levererad som SVG med texten konverterad till banor, med `role="img"` och `aria-label` som återger texten. Högst en per sida, placerad vid en illustration eller vid kalkylatorns resultat, i blyerts-2 eller penna, minst 24 px i illustrationens skala (samma regel som i avsnitt 7). Chefredaktören skriver texten (i stilguidens ton, "ingen dränering sedan 1971"), designansvarig sätter den. Den får aldrig bära information som inte också finns i löptexten.

### Ikoner

Spriten `src/assets/brand/riktning-1/ikoner.svg` inlineas i layouten så att `<use href="#ikon-fukt">` fungerar utan extra förfrågan. 16 ikoner, 24 px grid, linje 1,75 px i `currentColor`, runda ändar, lätt darr i långa linjer och små överskjut i hörnen. Pelarikoner (fukt, altan, tak, grund, isolering, verktyg, el) används i mobilmenyn, i startsidans ämnesrad och vid pelarhubbens H1, i 24 px (40 i ämneskortet, 32 vid H1), blyerts. Gränssnittsikoner (kalkylator, meny, stäng, sök, pil höger, extern länk, varning, info, check) används bara med text bredvid och `aria-hidden="true"`. Ikoner finns aldrig i löptext, aldrig framför H2 eller H3, aldrig i brödsmulor, aldrig som dekoration. Nya ikoner ritas i samma sprite efter reglerna i filens kommentar och godkänns av designansvarig.

### Etikett

**Syfte.** Säga vilken sorts sida eller vilket slags underlag läsaren har framför sig.

**Innehåll.** Ett ord i etikett-stil (12 px, 700, versaler, spärrning). På listrader typen: "Test", "Granskning", "Köpguide", "Problemguide", "Projektguide", "Kunskap", "Jämförelse". På testsidor och i kategorisidans produktavsnitt underlaget: "Test" när vi haft produkten och mätt, "Granskning" när vi jämfört datablad och tredjepartsmätningar. På produktkort redaktörens omdöme: "Vårt val", "Bäst till krypgrund".

**Utseende.** Text i blyerts, ingen bakgrund, ingen ram, ingen ikon. Redaktörens omdömesetikett på produktkort är i penna. "Test" och "Granskning" ser likadana ut; skillnaden ska ligga i ordet, inte i en färg som säger att det ena är sämre.

**Nivå** (beslut 2026-09-16). Varje artikel, test och jämförelse har en nivå: Enkel, Mellan eller Expert (`niva` i frontmatter, orden i `src/lib/niva.ts`). I artikelhuvudet står nivån i samma etikett som typen, efter en mittpunkt (U+00B7): "Kunskap · Expert", "Test · Mellan", "Jämförelse · Enkel". Samma stil, samma blyerts, ingen färg, ingen ram, ingen ikon; nivån är en upplysning, inte ett betyg, och "Enkel" får inte se ut som något sämre än "Expert". På hubsidan grupperas listan "Alla sidor i ..." under tre H3 med samma ord, i ordningen Enkel, Mellan, Expert, och varje rad har etiketten "Typ · Nivå". Det är hubbens filter utan JavaScript: tre listor i HTML, inget dragspel, inga flikar.

Sedan 2026-09-16 visas nivån på **alla artikelkort**, även på startsidan: etiketten är "Typ · Nivå" ("Köpguide · Mellan", "Kunskap · Expert"). Det är den enda platsen där en hemmafixare och ett proffs ser vilka sidor som är för dem utan att klicka. Kategorikort har ingen nivå, de har etiketten "Bäst i test". I "Läs vidare" och i kategorisidans listor visas nivån fortfarande inte.

### Artikelkort

**Syfte.** Bära en artikel, ett test, en jämförelse eller en kategorisida i ett rutnät. Ett urklipp, inte ett WordPress-kort. `src/components/ui/Artikelkort.astro`.

**Innehåll.** Bild kant i kant upptill med 1 px `linje` under, etiketten "Typ · Nivå", kortrubriken (Zilla Slab 600, semantiskt H3), beskrivningen i högst tre rader och en metarad som trycks mot kortets botten: "{pelarens korta namn} · {datum}", eller fri text som "13 granskade". På hubben, där alla kort har samma pelare, står bara datumet.

**Mått.** Ram 1 px `linje`, radie 2 px, bakgrund `papper`, ingen skugga, ingen färgad kant. Bilden är 5:3 (343 × 206 på mobil, cirka 368 × 221 i tre kolumner), alltid med `width` och `height`, `loading="lazy"` utom startsidans stora kort, `decoding="async"`. Inre marginal 16 px på mobil, 24 på desktop. Rutnätet har 16 px mellan korten på mobil och 24 på desktop, tre kolumner från 1024 px, två från 640.

**Varianter.** *standard* (bild överst, text under). *stor*, bara startsidans första kort: två kolumner på desktop, bilden till vänster i 7/12 av kortets bredd och texten i 5/12 lodrätt centrerad, kortrubrik 24 px, beskrivning i fyra rader. Bilden ligger i `object-fit: contain` mot `papper`, aldrig `cover`: en skiss med handskrift tål ingen beskärning. Kortets höjd sätts av rutnätets rad, alltså av standardkortet bredvid, så en 5:3-skiss får luft ovan och under i sin spalt. Papperet är samma färg som skissens eget, så kanterna syns inte. *kompakt på mobil*: bild 120 × 72 till vänster, ingen beskrivning, används för kort två och uppåt i startsidans rutnät.

**Utan illustration.** Bildytan fylls av ett blankt blad ur samma block som skisserna: `papper-2` med linjer i `linje` var 24:e px och marginallinje i penna vid 35 procent, och pelarens ikon i 40 px `blyerts-2` mitt på. Aldrig en grå ruta, aldrig ett stockfoto, aldrig en packshot.

**Kategorikort.** Ingen egen komponent: Artikelkort med etiketten "Bäst i test", kategorins namn som rubrik och kategorins `description` som beskrivning. Bildytan är det blanka bladet med två rader satta som kalkylatorns resultat: "Vårt val" i etikett-stil med produktnamnet i kortrubrik, och antalet granskade som ett stort tal i Zilla Slab med ordet "granskade" efter. Ingen packshot, aldrig. Utan databas visas bladet utan tal.

**Hover, fokus, klickyta.** Hela kortet är klickbart genom att rubrikens länk får en `::after` som täcker kortet, men bara rubriken är länk för skärmläsaren (regeln "rubriken är länken"). Hover lyfter ingenting: rubriken får 2 px understrykning i penna, `transition: text-decoration-color 150ms`, avstängd vid `prefers-reduced-motion`. Fokus ger hela kortet `outline: 3px solid penna` via `:has`. Klickytan är alltid över 44 px hög.

### Ämneskort (Ämnesrad)

**Syfte.** Ta läsaren från startsidan till ett ämne med ett klick, och visa hela sajtens karta på en skärm. `src/components/ui/Amnesrad.astro`, bara på startsidan. Korten är navigering, inte påståenden om sajten, och faller därför inte under regeln i avsnitt 8.

**Rutnät.** Ett kort per pelare, alla åtta, i `PELARE`-ordning. Fyra kolumner från 1024 px och två under, alltså två rader på desktop och fyra på mobil. 16 px mellan korten på mobil, 24 på desktop. Korten är cirka 150 px höga, klickytan alltid över 44 px. Under rutnätet länken "Alla ämnen" till höger.

**Innehåll.** Vänsterställt, uppifrån: pelarikonen i 40 px, en etikett i versaler, pelarens namn i Zilla Slab 600 (kortrubrik, 20 px på mobil och 22 på desktop) och pelarens `rad` från `src/lib/pelare.ts`, en mening på högst åtta ord som chefredaktören skriver. Ingen bild, ingen beskrivning, ingen länklista: kortet är en dörr, inte en sida.

**Publicerad pelare.** Hubben finns och är inte utkast (`hubPublicerad`). Kortet är en länk till `/[pelare]/` med artikelkortets mått och beteende: 1 px `linje`, radie 2 px, bakgrund `papper`, ingen skugga, hela kortet klickbart via `::after` på namnets länk, hover ger 2 px pennunderstrykning på namnet och fokus en ring runt kortet. Etiketten är antalet sidor i pelaren, publicerade guider och kunskapsartiklar: "4 sidor", "1 sida".

**Pelare utan hub.** Kortet står kvar, dämpat: bakgrund `papper-2`, ikon och namn i `blyerts-2`, ingen länk, etiketten "Kommer". Kartan visar hela sajten, inte bara det som hunnit publiceras, och en länk till en hub som är utkast byggs aldrig.

### Filterrad och Paginering

**Filterrad** (`Filterrad.astro`, bara på `/guider/`). Tre rader med etikett och länkar, utseende enligt avsnitt 5.10. Ingen JavaScript.

**Paginering** (`Paginering.astro`). "Sida n av m" och länkarna Föregående sida och Nästa sida. Renderas inte när det bara finns en sida.

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

**Utseende.** Kort (ram linje, 2 px, ingen skugga), bakgrund papper. Ingen köpknapp, inget pris. Statiskt, ingen ö. I ett rutnät (hubbens grupp Räkna, startsidans "Räkna själv", `/amnen/`) sköter rutnätet avståndet och kortet har ingen egen luft ovanför och under.

### Jämförelsetabell

**Syfte.** Alla produkter i en kategori mot samma mått, från databasen.

**Innehåll.** Kolumner är produkter, rader är egenskaper. Första raden: bild 4:3 (liten, 80 px bred, vit ruta), märke och modell, etikett om redaktören satt en, och "Test" eller "Granskning". Sedan en rad per spec ur kategorifilen, i den ordning kategorifilen anger. Sista raden: pris och köpknapp (kompakt, full bredd i cellen) med finstilt rad. Enheter står i radrubriken ("Kapacitet, l/dygn"), inte i varje cell. Bästa värdet i varje rad markeras med fetstil och `ok`-färg, sämsta markeras inte. Saknat värde skrivs "ej angivet" i blyerts-2.

**Utseende.** 1 px linje mellan rader, tabellhuvud (första kolumnen) i papper-2. Celler 12 px innermarginal, 15 px text, tabellsiffror. Rekommenderade produkters kolumner har papper-2 som bakgrund. Ingen gul markering i tabeller utom i omdömestabellen på testsidor, där ett värde får den.

**Mobil.** Tabellen scrollar i sidled inom en behållare. Första kolumnen (egenskapsnamn) är `position: sticky; left: 0` med papper-2 och en 1 px linje till höger så att den syns som fast. Varje produktkolumn är 150 px bred. Behållarens högerkant har en 24 px tonad övergång till papper som visar att det finns mer, och ovanför tabellen står "Dra i sidled för att se alla" i 14 px blyerts-2. Max fem produkter i en inline-tabell i löptext; kategorisidans tabell får ha fler.

**Desktop.** Full sidbredd. Upp till sex kolumner utan scroll, därefter scroll i sidled på samma sätt.

**Tillstånd.** Med och utan priser (prisraden utgår om ingen produkt har pris). Med och utan köpknappar (jämförelser i kunskapsartiklar kan sakna dem). Färre än två produkter: komponenten renderar inte, bygget varnar.

### Tabell i brödtext

**Syfte.** Siffror som hör till texten och inte kommer ur produktdatabasen: daggpunkter, skruvlängder, kapacitet mot yta. Skrivs som en vanlig markdown-tabell i MDX; Sätteri-pluginet i `astro.config.mjs` lägger omslaget `.brodtabell-block` runt den.

**Utseende.** Samma yta som jämförelsetabellen: 1 px linje mellan rader, tabellhuvud i papper-2, 12 px innermarginal, 14 px text på mobil och 15 px från lg, tabellsiffror.

**Mobil.** Celler med högst 16 tecken hålls ihop på en rad (`.kort-cell`, sätts vid bygget), längre celler bryts och får minst 4 rem spaltbredd. Gränsen är satt så att ett tal med enhet ("1 × 12,5 mm") aldrig bryts mellan tal och enhet medan en kort mening ("Bygglov krävs alltid") bryts som vanlig text. Har tabellen fyra kolumner eller fler släpps nowrap på alla celler (`.brodtabell:has(tr > *:nth-child(4)) .kort-cell`): fyra celler som inte får brytas blir bredare än 343 px hur låg minsta spaltbredd som än sätts, och en kolumn läsaren aldrig ser är värre än ett brutet mätvärde. Kolumnrubriker bryts alltid, också korta: `white-space: normal`, `hyphens: auto` (`<html>` har `lang="sv"`) och 3 rem minsta spaltbredd. Räcker bredden ändå inte scrollar tabellen i sin behållare, aldrig sidan.

Uppmätt i Edge på 343 px (375 px minus marginalerna), 2026-09-17: två kolumner ryms alltid, också med celler på 20 tecken. Fyra kolumner ryms med celler upp till 20 tecken, eftersom nowrap är släppt där. Tre kolumner ryms när cellerna är högst tio tecken eller över sexton; däremellan hålls varje cell ihop på en rad och tabellen scrollar med ledtext framme. Skribenten som vill ha en trekolumnstabell utan scroll håller cellerna korta.

**Ledtext och tonad kant.** "Dra i sidled för att se hela tabellen", 14 px blyerts-2 över tabellen, och den tonade 24 px-övergången på behållarens högerkant. Båda visas bara på mobil och bara när tabellen har tre kolumner eller fler. Villkoret är `:has()` på omslaget (`:has(.brodtabell tr > *:nth-child(3))`), eftersom pluginet lägger ledtexten över varje tabell och en tvåkolumnstabell alltid ryms; då är texten fel och kanten får en tabell som ryms att se skymd ut. Gränsen gick tidigare vid fyra kolumner, och då kunde en trekolumnstabell dölja sin tredje kolumn utan ett ord om att den fanns (granskningen 2026-09-16). Webbläsare utan `:has()` får ingen ledtext men behåller kanten (`:not(:has(…))` är ogiltigt där och regeln faller bort); tabellen scrollar ändå. Jämförelsetabellen delar `.tabell-yta` men scrollar alltid på mobil och behåller sin kant.

**Desktop.** I artikelmallen får tabellen växa ut i mellanrummet mot innehållsförteckningen (max läsbredd + 3 rem), aldrig över förteckningen. En tabell i en faktaruta stannar i rutan.

**Redaktionellt.** Kolumnrubriken är högst två ord plus enhet ("Vatten, g/m³", "Maxyta, kvm"), en cell bär ett värde, och källraden under tabellen sätts med `<p class="tabellfot">`. Se STILGUIDE.md.

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

**Tillstånd.** Visas på alla sidor där en köpknapp eller jämförelsetabell med köpknappar renderas. Layouten avgör det, inte innehållsfilen. På en projektguide betyder det att minst en verktygsrad i "Det här behöver du" pekar på en produkt: rader utan produkt renderas som text utan knapp, och en lista med bara sådana rader ger inget band. Köpknappen har dessutom sin egen finstilta rad "Annonslänk · pris [datum]" under sig, så märkningen finns på två ställen: ovanför första länken och vid varje länk. Inga "i samarbete med", inga hashtaggar, ingen märkning som bara ligger i sidfoten.

### Frågor och svar

Tillagd 2026-09-17. Komponenten är `src/components/ui/Faq.astro`.

**Syfte.** De tre eller fyra frågor läsaren fortfarande har när sidan är läst, och som annars skickar hen tillbaka till Google. Den är inte en sammanfattning av sidan och den upprepar inte kort svar.

**Innehåll.** H2 med pennstreck, som standard "Vanliga frågor", sedan en rad per fråga. Frågan är formulerad som läsaren skulle skriva den, svaret är två till fyra meningar enligt STILGUIDE.md, med de tal sidan redan använder. Ett svar får avslutas med en hänvisning vidare, och den är då en egen mening med en länk, aldrig en länk inbakad mitt i svaret.

**Utseende.** 1 px linje över listan och under varje fråga, ingen ram runt, ingen bakgrund, ingen skugga. Frågan är `<summary>` i sans 700 blyerts med 44 px klickhöjd och webbläsarens egen triangel kvar; den är det enda som säger att raden går att fälla ut. Svaret är brödtext, 16 px indrag noll, med 16 px luft under. Rutan står sist i brödtexten, före författarrutan, och är alltid stängd när sidan laddas.

**Tillstånd.** Tom lista: renderas inte. Ingen JavaScript, `<details>` sköter öppna och stäng.

**Markup.** Komponenten skriver själv ut FAQPage i ett `<script type="application/ld+json">` på plats i brödtexten, inte i head, och texten i markupen är ordagrant den som står på skärmen. Högst en per sida, kontrollerat av `npm run kontrollera`.

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

### Varumärkesillustrationen

En skiss förklarar något. En varumärkesillustration säger vem vi är, och det är en annan bild. Den enda som finns är startsidans hero, `src/assets/illustrationer/start/hus-tumstock.svg` (600 × 420, 9,3 kB, ritad 2026-09-16 när säsongsblocket togs bort och övre halvan blev rubrik till vänster och bild till höger). Den visar ett hus i genomskärning där konturen är en tumstock vikt i sex segment, med leder, streck och måttsiffrorna 20, 40, 60 och 80, och inuti huset en takstol, ett elskåp med blixt, en skruv på väg in i väggen och en droppe i källaren, med en altan utanför den högra väggen. De fem detaljerna är sajtens bredd i en bild: tak, el, montering, fukt, altan.

Reglerna skiljer sig från skissernas på fyra punkter, och de gäller varje ny varumärkesillustration:

- **Logotypens stil, inte anteckningsblockets.** Konturer i `blyerts` 2 px med helrunda ändar, `tumstock` som den enda fyllda färgen, inget linjerat papper, ingen marginallinje, ingen skraffering utom marken. Bakgrunden är transparent så att sidans papper syns igenom. Tumstocken är varumärkets signatur och får gärna finnas med, som i heron där den är husets kontur, men den är inte obligatorisk som form (beslut av Christian 2026-09-19 efter prototypen på dränering: stilen och färgerna var rätt, motivet gick inte att förstå, och allt måste inte vara den gula måttstocken). När den finns med ritas den som symbolen: segment med leder som fylld nit i blyerts och beslagsring i `blyerts-2`.
- **Motivet ska förstås på en sekund.** Bilden står bredvid en H1 och ska säga vad sidan handlar om innan läsaren läst rubriken: ett hus, en vägg, en altan, en grävd grop längs grunden. Ett snitt eller en profil som kräver att man vet vad man tittar på är fel bild, hur rätt den än är tekniskt. Tvekar du, rita det som en sjuåring skulle känna igen.
- **Ingen text.** Inga etiketter, inga anteckningar, ingen Caveat. Måttsiffrorna på tumstocken är ritade som banor och är textur, inte information: de ska inte gå att läsa som ett värde. Behöver bilden en förklaring hör den hemma i en skiss i stället.
- **Ett pennstreck som signatur.** Ett enda streck i `penna`, 4,5 px, under motivet, som i ordmärket. Snickarpennan pekar inte på något här, den skriver under.
- **Inga pyttedetaljer.** Bilden ligger i 560 px på desktop och 343 px på mobil. Tunnaste linje är 1,4 i motivets skala, alltså knappt 1 px på mobil. Varje detalj som blir gröt vid 343 px stryks i stället för att krympas.
- **Motivet fyller ytan.** En varumärkesillustration ska väga lika mycket som rubriken bredvid, så den får inte ligga som en liten vinjett mitt i en tom viewBox. Motivet tar 90 till 94 procent av bredden och 88 till 90 procent av höjden, mätt på den renderade bilden, med jämna marginaler runt om. Motivet ritas i sin egen skala och skalas på plats med ett `transform` i det yttre `g`:et, så att koordinaterna går att räkna på och utsnittet går att justera på ett ställe.

Den ligger på startsidan som `<img alt="">` eftersom H1 bär meningen. Filen har ändå `role="img"` och `aria-label` för den som öppnar den för sig. Den innehåller ingen `<text>`, så `npm run illustrationer` rör den inte och den behöver ingen källfil under `illustrationer-kallor/`.

### Skisserna

Blyertsskiss på linjerat papper. Förebilden är `src/assets/illustrationer/fukt/kallare.svg` (flyttad från `brand/riktning-1/` 2026-09-16; illustrationer ligger i `src/assets/illustrationer/[pelare]/`, hur en artikel refererar dem står i `docs/ARKITEKTUR.md`), och varje ny illustration följer samma regler så att tio agenter ritar som en hand:

- **Papperet.** Bakgrund `papper` med linjer i `linje` var 24:e px (mönstret `monster.svg` som `<pattern>`), och en marginallinje i penna vid 35 procents opacitet 40 px från vänster. Skala 600 × 360 för en huvudbild i 3:2 (kan beskäras till 4:3 för kort).
- **Blyerts.** Allt som är hus, mark och föremål ritas i `blyerts`, 2 px, runda ändar. Raka linjer är aldrig raka: en kvadratisk kurva med kontrollpunkten förskjuten högst 3 procent av linjens längd. Hörn skjuter över 2 till 4 px. En linjebredd per lager, ingen fyllning, ingen skuggning.
- **Skraffering.** Mark, betong och isolering skrafferas med korta snedstreck (10 px, 45 grader) i `blyerts-2`, 1,25 px, 22 px emellan. Bakom text läggs en papperslapp i `papper` så att skrafferingen inte stör.
- **Snickarpennan.** Allt som handlar om problemet ritas i `penna`, 2,5 px: pilarna där fukten kommer in, dropparna, en ring runt det våta hörnet, måttpilen på det som ska mätas. Ringen är en öppen kurva som inte sluter, som när man ringar in något för hand. Aldrig mer än en sak per illustration som pekar; är det två saker är det två illustrationer.
- **Handskriften.** Caveat 500, minst 24 px i illustrationens skala (600 px bred), 22 px som absolut minimum för en etikett som måste vara liten, i blyerts (förklaringar), blyerts-2 (bakgrund, mått) eller penna (problemet). Skälet är mobilen: en illustration i läsbredd är 343 px bred på 375 px, så 24 px i skalan blir 13,7 px på skärmen och 22 blir 12,6, den nedre gränsen för att ett mått ska gå att läsa utan att zooma (beslut 2026-09-16 efter granskningen av de första skisserna, som låg på 16 till 20). Får etiketterna inte plats i 24 px är det för många etiketter, och skissen delas i två. Texten är i stilguidens ton och skrivs av chefredaktören: "markfukt trycker in genom väggen", "ingen dränering sedan 1971". Konverteras till banor innan publicering; `<text>` får inte finnas kvar i en publicerad illustration.
- **Nyckeltalet.** Ett tal per illustration får gul markering: en rektangel i tumstock, 65 procents opacitet, roterad en till två grader, bakom texten.
- **Mått.** Handritade måttbyglar i blyerts-2, 1,5 px, med måttet i handskrift: "2,2 m i tak", "c 600".
- **Inga människor, inga verktyg i drift, inga produktbilder.** En avfuktare i en skiss är en rektangel med en pil för luftflödet.

Altanen ritas som snickarens egen skiss med mått på reglarna, taket som en takstol med vinkeln noterad, garaget med fläkten och pilar för luftflödet. Chefredaktören beställer, designansvarig ritar eller specar, och varje ny illustration granskas mot listan ovan.

### Illustrationer för verktygen

Varje kalkylator i `src/lib/kalkyl/register.ts` har en egen skiss, ritad 2026-09-17. Den ligger i en egen mapp, `src/assets/illustrationer-kallor/rakna/[slug].svg` med den konverterade i `src/assets/illustrationer/rakna/[slug].svg`, och heter samma sak som verktyget i registret. Mappen är inte en pelare utan verktygen: elkostnadskalkylatorn hör till två pelare och avfuktarkalkylatorn till en kategori, så pelarmappen hade inte räckt.

**Sidhuvudet byter stil, beslutat 2026-09-19.** Christian vill att räknarnas bild ovanför vecket håller samma stil som symbolen och startsidans hero. Därför får varje verktyg en andra bild, en varumärkesillustration i `src/assets/illustrationer/rakna/varumarke/[slug].svg`, 600 × 360 så att den passar samma 7/5-rutnät och samma gallerikort som skissen. Den följer reglerna under Varumärkesillustrationen ovan utan undantag: logotypens stil med tumstocken som accent eller inte alls, ett motiv som förstås på en sekund, ingen text och inga läsbara tal, ett pennstreck, transparent bakgrund, inga pyttedetaljer, motivet fyller ytan. Tre erfarenheter från dräneringsbilden 2026-09-19 gäller nästa: det sidan handlar om ska vara den största eller näst största formen i bilden och gå att känna igen ensamt vid 343 px; när bilden visar mark ska markytans nivå vara entydig och densamma på bildens båda sidor, så att en grop är ett hål och inte en backe; och marken skrafferas med skissernas värden (10 px streck, 45 grader, blyerts-2 1,4 px) men glesare, 26 px mellan strecken, eftersom ytan är större. En fjärde från innerväggsbilden samma dag: i ren konturteckning utan fyllning läses en sluten rektangel delad av streck alltid som en panel, aldrig som en stomme, så delarna ska synas ligga över varandra och löpa förbi eller vara kapade, och det som ska kännas igen ska ha sitt igenkänningstecken kvar, som spåret i skruvhuvudet. Två från altanbilderna: kravet på fyllnad är i praktiken ett krav på proportion, eftersom skalningen är enhetlig, så motivets egen bbox ska ha kvoten 1,72 ± 0,05 (bredd genom höjd) och höjden byggs med innehåll som djupa plintar eller öppet utrymme, aldrig med tom mark; och ett mått måste skilja sig i form från det bärverk det står bland, smalare, med runda ändar och lätt lutning, annars läses tumstocken som en stolpe bland stolpar. Behöver ett föremål ligga framför ett annat bryts linjerna bakom exakt där det går fram, som skruven i heron, aldrig med en pappersfylld yta. Den har ingen källa under `illustrationer-kallor/` eftersom den saknar `<text>`. Sidhuvudet och kortet i galleriet visar varumärkesbilden när den finns, annars skissen som förut, så de tio verktyg som ännu saknar en fortsätter fungera. Skissen försvinner inte: den flyttar ner till avsnittet "Så räknar vi", där den förklarar räkningen med sina mått, och den är fortfarande delningsbilden, eftersom nyckeltalet är kroken när någon delar länken. Dränering var prototypen. Christian har sett den och sagt ja, så de andra tio ritas i dag, och alla elva verktygssidor är sedan 2026-09-19 kopplade till mönstret: varumärkesbilden i sidhuvudet när den finns, skissen som figur i "Så räknar vi" (på gipsplugg och bygglov-altan heter avsnittet "Så bedömer vi").

Skissen visar det verktyget räknar på, inte verktyget. Reglerna är skissernas ovan, med tre skärpningar som gäller just de här bilderna, eftersom de också blir delningsbilder och därmed det första någon ser av sajten:

- **Ett nyckeltal, ett svar.** Talet med gul markering är det kalkylatorn svarar med: liter per dygn, daggpunkten i grader, kronor i månaden, regelavståndet, höjden i meter. Ingen annan siffra i bilden får markering.
- **Motivet är situationen, med mått.** Källaren med maskinen, väggen med termometern och dropparna där ytan är kallare än daggpunkten, maskinen med sladden till elmätaren, regelväggen med c-måttet och skruven, altanen vid huset med 1,8 m, 3,6 m och 4,5 m. Måtten ritas som byglar i blyerts-2 med måttet i handskrift, aldrig som text utan bygel.
- **Handskriften är 24 px.** De här bilderna visas både i läsbredd på mobil och nedskalade till 560 px i delningsbilden, så undantaget på 22 px används inte här.

Filerna, mätta 2026-09-17 efter `npm run illustrationer`: `avfuktare.svg` 18,6 kB, `bygglov-altan.svg` 25,1 kB, `daggpunkt.svg` 17,5 kB, `elkostnad.svg` 21,4 kB, `innervagg.svg` 17,0 kB. Alla under gränsen 40 kB, ingen `<text>` kvar.

**Delningsbilden.** `scripts/generera-delningsbilder.mjs` bygger dessutom `public/og/rakna-[slug].png`, 1200 × 630, en per kalkylator. Skriptet läser registret direkt (`import { KALKYLATORER } from '../src/lib/kalkyl/register.ts'`, Node 24 tar bort typerna själv) och den redan konverterade skissen, så namnet i bilden är samma namn som på sidan och i menyn, och en ändring i registret slår igenom med en körning. Uppslaget är: papper som yta, verktygets namn till vänster i Zilla Slab 600 på två rader med ett pennstreck under, ordmärket nere till vänster, och skissen inklistrad till höger i 560 px bredd med 1 px `linje`-ram, som ett urklipp. Namnet delas vid det ordmellanrum som ger jämnast rader och krymper från 54 px tills den bredaste raden får plats i spalten; det är skälet till att ett långt namn inte behöver kortas i registret. Skriptet kastar om skissen saknas eller fortfarande har `<text>`, så en oklar bild kan inte smyga ut. Filerna väger 47 till 57 kB och är committade; skriptet körs för hand när ett namn, en skiss eller märket ändras.

### Diagram

Varje test och varje kategorisida har minst ett diagram med egna eller källgranskade siffror. Inline-SVG, byggd vid bygget, med tokens och i samma hand som skisserna: axlar och etiketter i blyerts-2 (Atkinson, 22 px i diagrammets 600-skala, vilket är 13 px på mobil; ingen handskrift i diagram utom en enda anteckning i penna vid det diagrammet pekar på), staplar och linjer i blyerts med 2 px linje, den produkt eller det värde texten handlar om i penna, jämförelsevärden i linje. Det viktigaste värdet får gul markering bakom siffran. En serie i penna, aldrig fler. Diagrammen har `role="img"` och en `aria-label` som säger vad de visar. Diagram är alltid rätt bredd för mobil (max 343 px utan scroll) och får inte förlita sig på hover. Ingen 3D, inga tårtor.

### Tabeller som ser ut som något

Jämförelsetabellen och omdömestabellen är designade ytor, inte utskrifter av databasen. Rätt siffror i raka kolumner, bästa värdet markerat, enheten i radrubriken.

### Egna foton när de kommer

Christian tar egna foton av produkter i drift senare. Då gäller: 3:2, dagsljus, produkten i sin miljö (avfuktaren i källaren, inte på ett bord), ingen människa i bild, ingen hjälm. Bilden får en bildtext som säger vad man ser och när det togs. Egna foton ersätter skissen som huvudbild, skissen stannar i texten.

### Vad som aldrig används

Stockfoton. Genererade bilder av verktyg. Bilder utan `width` och `height`. Bilder som hotlinkas. Bildkaruseller. Bakgrundsbilder bakom text. Handskrift som webbfont.

## 8. Förbjudet (mallsignaler)

Det här byggs inte, oavsett vem som ber om det.

- Hero med bakgrundsbild och centrerad text.
- Tre kolumner med ikon, rubrik och en rad som säger något om sajten ("Snabbt", "Tryggt", "Oberoende"). Lika kort i rad är tillåtet när korten är samma slags sak: tre jämförbara val (som "Våra val"), artiklar i ett rutnät i den ordning de publicerats, eller ämneskorten i startsidans ämnesrad, som är dörrar till sajtens åtta ämnen. Skillnaden är vad kortet gör: ett ämneskort leder till en sida och bär pelarens namn och en rad om vad du hittar där, en marknadsföringsruta bär ett påstående om oss och leder ingenstans. Påståenden om sajten sätts aldrig i kolumner (omformulerat 2026-09-16, utvidgat med ämnesraden samma dag; regeln finns för att stoppa marknadsföringens tre ikoner, inte för att stoppa en tidningssida eller en meny).
- Gradienter, någonstans. (`.markering` och `.linjerat` använder `linear-gradient` som ritverktyg för en platt yta och platta linjer, det är inte en gradient i den här meningen.)
- Skugga på kort. Skugga används bara på det som ligger ovanpå sidan.
- Piller-formade knappar och taggar.
- Stjärnbetyg, poäng av tio, procent-cirklar.
- Rabattmärken, "Spara 20 %", överstrukna priser i rött. Ordinarie pris får visas i blyerts-2 med "tidigare" framför, inget mer.
- Grönt "i lager". Lagerstatus visas bara när den är negativ.
- Fasta köpknappar som följer med skärmen (fas 1).
- Popup, banderoll, "prenumerera"-ruta, cookie-ruta som täcker innehåll (vi har inga kakor som kräver samtycke).
- Animationer utöver `transition` på färg vid hover, max 150 ms. Ingen animation kräver JavaScript, och `prefers-reduced-motion` stänger av även dem. Pennstrecket ritas inte upp, det är där.
- Ikoner i löptext, framför H2 och H3, i brödsmulor eller som dekoration. Ikoner finns i mobilmenyn, i startsidans ämnesrad, på "Alla ämnen", vid pelarhubbens H1 och i gränssnitt med text bredvid. Bara ikoner ur spriten.
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
| `monster.svg` | Linjerat papper, kakelbart 48 × 24 | Som `<pattern>` i illustrationer. I HTML används `.linjerat` i stället |

Illustrationerna ligger inte i brand-mappen utan i `src/assets/illustrationer/[pelare]/`: `fukt/kallare.svg` (källaren i genomskärning, förebild för alla skisser, huvudbild i fuktguiderna). En ny skiss läggs i pelarens mapp och refereras från artikeln enligt `docs/ARKITEKTUR.md`. Startsidans hero är undantaget: `start/hus-tumstock.svg` hör till ingen pelare utan till sajten, viewBox 600 × 420, genomskinlig bakgrund, ritad i ordmärkets stil. Verktygens skisser ligger i `rakna/`, en per kalkylator i registret och med samma slug (avsnitt 7).

**Illustrationernas två mappar.** Texten i en skiss redigeras aldrig i den publicerade filen, utan i källan:

| Mapp | Innehåll | Deployas |
|---|---|---|
| `src/assets/illustrationer-kallor/[pelare]/[namn].svg` | Originalet med `<text>` i Caveat 500, Zilla Slab 600 eller Atkinson. Här skriver designansvarig om en anteckning | Nej |
| `src/assets/illustrationer/[pelare]/[namn].svg` | Samma skiss med all `<text>` konverterad till `<path>`. Det är den här filen artiklarna använder | Ja |
| `scripts/typsnitt/*.ttf` | Caveat 500, Zilla Slab 600, Atkinson Hyperlegible 400 och 700 som TTF, för konverteringen. OFL, committade | Nej |

Arbetsgången: ändra texten i `illustrationer-kallor/`, kör `npm run illustrationer` (ingår i `npm run build`), committa båda filerna. Skriptet är `scripts/konvertera-handskrift.mjs` (Node med `opentype.js`), det bevarar allt annat i filen och rör inte en fil som redan är konverterad. Tekniken beskrivs i `docs/ARKITEKTUR.md` under Illustrationer. Banor väger mer än text, så en skiss landar på 18 till 38 kB i stället för 3 till 6; gränsen är 40 kB och över den förenklas skissen.

TTF-filerna i `scripts/typsnitt/` hämtas med samma CSS-API som woff2-filerna i avsnitt 2, men med en user-agent som inte kan woff2 (till exempel Android 4), så att `/* latin */`-blocken ger `.ttf`:

```
https://fonts.googleapis.com/css2?family=Caveat:wght@500&family=Zilla+Slab:wght@600&family=Atkinson+Hyperlegible:wght@400;700
```

Hämtade 2026-09-16: `caveat-500.ttf` (245,8 kB), `zilla-slab-600.ttf` (93,4 kB), `atkinson-hyperlegible-400.ttf` (34,5 kB), `atkinson-hyperlegible-700.ttf` (34,7 kB). Ingen av dem skickas till klienten; Caveat finns bara i banorna.

Ordmärket i båda varianterna sätter texten i Zilla Slab som `<text>`. Så länge sajten self-hostar typsnittet renderas den inlineade varianten rätt. Konvertering av texten till banor görs med fonttools när det finns tillgängligt i bygg-miljön, och då byts `<text>` mot en `<path>` i båda filerna så att ordmärket blir oberoende av typsnittsladdning. Tills dess: reservstacken Georgia visas under de millisekunder swap tar, vilket är samma beteende som alla H1 på sidan.
