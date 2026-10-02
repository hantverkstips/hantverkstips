# Design för hantverkstips.se

Beslutad 2026-09-15 av designansvarig, efter att Christian valt riktning 1, Anteckningsboken, av de tre i `docs/DESIGNRIKTNINGAR.md`. Det dokumentet är nu historik. Det här är det enda gällande designdokumentet. Ändringar i tokens görs i `src/styles/global.css` och speglas här. Utvecklaren bygger mot det här dokumentet, UX och bygge-agenten granskar mot det. Navigation, adresser och startsidans ordning följer `docs/INNEHALLSARKITEKTUR.md`, reklammärkningen följer `docs/AFFILIATE.md`.

**Designlyftet 2026-10-02.** Christian godkände fem skisser rakt av ("exakt så här ska alla sidor se ut") efter att ha kallat sidorna platta och tomma och räknarna fula: startsidan, en pelarhub (Tak), räkna själv-indexet, en räknare (daggpunkt) och en artikel (avfuktare i garaget). Det här dokumentet beskriver sedan dess den formen, och den äldre formen (urklipp utan skugga, linjerat papper med röd marginallinje, inga piller) står inte kvar som alternativ. Formen i en mening: **block på linjerat papper med ram och en hård skugga, pappersrutor runt bilderna, gula runda symboler, chips, knappar i fylld penna, svaret som färgad yta och det stora talet som bild.** Lätt och snabbt gäller som förut: noll klient-JS, högst 66 kB HTML per sida, 375 px först. Införandet sker i tre faser (A: startsida, hubbar, räkna-index och de delade komponenterna; B: artikel- och kategorimallen; C: räknarmallen). En sida som ännu inte är flyttad följer det gamla utseendet tills dess fas är byggd, men nya sidor och ändringar byggs bara mot det som står här.

Två saker togs in från riktning 3, Magasinet, redan 2026-09-15 och gäller fortfarande: räknarens resultat är ett stort tal som fungerar som bild, och "Kort svar" är en färgad yta.

Allt mäts först på 375 px bredd (iPhone SE och de flesta Android i mellanklass). Skisserna är ritade för 1280 px; mobilformen står utskriven under varje mall nedan och är lika bindande.

## 1. Designprinciper

1. **En snickares anteckningsbok, inte en affiliatesajt.** Känslan är en person med tjugo år i yrket som ritar upp problemet på ett block vid köksbordet. Varmt papper, blyertstext, snickarpennan för det viktiga. Blocken ligger på bordet: de har en ram och en hård skugga snett nedåt till höger, som papper som ligger ovanpå papper. Ingenting blinkar, ingenting glider in, inga rabattmärken.
2. **Svaret först, sedan resonemanget.** Första skärmen på mobil ska innehålla ett konkret svar (siffra, produkt, val). Layouten är byggd för att det ska gå utan att skrika.
3. **Reklamen är synlig och lugn.** Reklammärkningen är en del av layouten, samma typsnitt, samma färger. Den göms inte och den skäms inte. Köpknappen är samma fyllda pennknapp som sajtens andra huvudhandlingar, och det som skiljer den är texten, butiksnamnet och raden "Annonslänk · pris [datum]" under.
4. **Färgerna har roller.** Snickarpennan (`penna`) skriver: länkar, knappar, strecket under rubriker, ringar och pilar i illustrationer. Tumstocksgult (`tumstock`) markerar: bakom ett tal, som fyllning i en etikett-chip, i den runda symbolen och i siffran i ett numrerat steg. `papper-2` är bandet och den färgade ytan, `ruta` är papperet i blocket och runt en bild. Ingen färg används som dekoration utan en av de rollerna.
5. **Tabeller, diagram och skisser är innehåll.** De ritas med samma omsorg som texten och i samma hand. Egna diagram med egna siffror är det som skiljer oss från sajter med tio leverantörsbilder på rad.
6. **Handritat följer regler.** Darr, överskjut och linjebredd är specificerade (avsnitt 7) så att tio agenter ritar som en hand. Slarvigt handritat blir gulligt, och gulligt är fel.
7. **Ingenting kräver JavaScript.** Varje sida är statisk HTML eller renderas färdig på servern. Det som ser interaktivt ut är länkar, `<details>` och vanliga formulär med GET.
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

**Varför Caveat, och varför den inte laddas.** Handskriften är snickarens anteckning och finns bara inne i illustrationerna. Den skickas aldrig till klienten som webbfont och står aldrig som HTML-text i gränssnittet: skissernas handskrivna rader bredvid en bild, en rubrik eller en mätare ersattes 2026-10-02 av en etikett eller ströks. Texten i en illustration konverteras till banor i SVG-filen innan publicering (`npm run illustrationer`, se bilaga B och `docs/ARKITEKTUR.md`), så att illustrationen ser likadan ut överallt och kostar noll byte typsnitt. `--font-hand` finns i `global.css` bara för SVG-källfilerna och för att namnet ska vara ett. `font-hand` i HTML är ett fel.

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
| H1 på startsidan | Zilla Slab | 600 | 30 / 54 | 1,1 | `text-h1`, `lg:text-h1-xl` |
| H2 | Zilla Slab | 600 | 24 / 28 | 1,25 | `text-h2`, `lg:text-h2-lg` |
| H3 | Atkinson | 700 | 19 / 21 | 1,35 | `text-h3`, `lg:text-h3-lg` |
| Liten text (bildtext, meta, tabellfot, chip) | Atkinson | 400 | 14 / 14 | 1,5 | `text-liten` |
| Finstilt (källhänvisning, prisdatum) | Atkinson | 400 | 13 / 13 | 1,5 | `text-finstilt` |
| Etikett (taggar, kolumnrubriker) | Atkinson | 700, versaler, spärrning 0,06 em | 12 / 13 | 1,3 | `text-etikett` |
| Kortrubrik (rubriken i ett kort) | Zilla Slab | 600 | 20 / 22 | 1,25 | `text-kortrubrik`, `lg:text-kortrubrik-lg` |
| Stora kortets rubrik | Zilla Slab | 600 | 24 / 32 | 1,2 | `text-h2`, `lg:text-kortrubrik-xl` |
| Stor siffra (räknarens tal i kort och inbäddning) | Zilla Slab | 600 | 48 / 64 | 1,0 | `text-siffra`, `lg:text-siffra-lg` |
| Svarets siffra (räknarsidans svarsyta) | Zilla Slab | 600 | 64 / 84 | 0,95 | `text-siffra-lg`, `lg:text-siffra-xl` |

Regler:

- H4 finns inte. Behövs en fjärde nivå är texten fel strukturerad.
- H1 och H2 sätts alltid med `font-serif`. H3 i löptext är sans, fet. Det är skillnaden i typsnitt, inte bara i storlek, som gör att läsaren ser nivåerna.
- Kortrubriken är undantaget (beslut 2026-09-16). Rubriken i ett kort är semantiskt en H3 (eller ett `<p>` när kortet kan stå före sidans första H2) men sätts i Zilla Slab 600, som en liten tidningsrubrik. Det är skälet till att ett rutnät läses som en tidningssida i stället för som en länklista.
- H2 har pennstrecket under sig (`.pennstreck`, avsnitt 6). H1 har det inte. H3 har det aldrig. Källförteckningens rubrik är undantaget: en H2 i 22 px utan streck, eftersom den är en förteckning och inte ett avsnitt.
- Brödtext är aldrig under 17 px på mobil. Reklammärkningen är 14 px, inte 13, den ska kunna läsas.
- Rubriker har luft ovanför sig, inte under. H2 i löptext får 40 px ovanför på mobil och desktop och 14 px under strecket; en sektion på en galleri­sida (startsida, hub, räkna-index) börjar med 48 px på mobil och 56 till 64 på desktop. H3 får 32 ovanför, 8 under.
- Stycken skiljs med 1 em, inte med indrag.
- Läsbredd är max 44 rem (704 px), vilket ger 65 till 75 tecken per rad vid 18 px. Tabeller, diagram och illustrationer får gå ut till sidbredden 72 rem.
- Alla tabeller och räknare sätter `font-variant-numeric: tabular-nums`.
- Fet text i brödtext används för ett par ord, aldrig för hela meningar. Kursiv för titlar och främmande ord.
- Nyckeltal i löptext får gul markering (`.markering`), högst två per skärm, aldrig på rubriker. "Minst 12 liter per dygn" markeras som "12 liter per dygn", inte hela meningen.
- Länkar i löptext är penna-färgade med rak understrykning (1 px, 3 px avstånd). Vid hover blir understrykningen 2 px. Länkar ser inte ut som knappar och knappar ser inte ut som länkar.
- Text på linjerat papper följer inte linjerna. Linjerna är papperets struktur, inte ett radsystem (ändrat 2026-10-02, då linjeavståndet blev 28 px).

## 3. Färger

Slutgiltiga tokens. Kontrast räknad enligt WCAG 2.x (relativ luminans), verifierad 2026-09-15 och för de nya kombinationerna 2026-10-02.

| Token | Hex | Används till |
|---|---|---|
| `papper` | `#f5efe3` | Sidbakgrund och kortens yta. Varmt papper, aldrig vitt |
| `papper-2` | `#ebe2cf` | Banden i full bredd, den färgade ytan (Kort svar, räknarens svarsyta, Gör inte det här, Så jobbar jag-rutan), tabellhuvud, reklamband, chipens yta, kortens skugga, raderna i Granskat-blocket |
| `ruta` | `#faf6ec` | Pappersrutan: ytan runt en illustration i ett kort och blockens linjerade papper (startsidans hero, räknarens formulär, inbäddad räknare, hubbens bild). Ny 2026-10-02 |
| `linje` | `#c9bca3` | Ramar runt kort, block och tabeller, avdelare, papperets linjer (65 procent mot `ruta`), kortets skugga vid hover. Som text bara på `blyerts` (sidfotens etiketter och fotrad, 8,09:1) |
| `blyerts` | `#2a2521` | All text, rubriker, illustrationernas linjer, sidfotens bakgrund |
| `blyerts-2` | `#625a50` | Sekundär text, metadata, bildtexter, skraffering, formulärfältens ram |
| `penna` | `#ad3519` | Snickarpennan. Länkar, den fyllda knappen och konturknappen, pennstrecket, etiketten som pekar (typetiketten i ett stort kort, "Prova direkt", "Räkna själv"), mätarens gränsstreck, pilar och ringar i illustrationer, fokusring |
| `tumstock` | `#e8b830` | Överstrykning bakom nyckeltal, den runda symbolen i ämneskort, etikett-chip (val, produktens roll), siffran i ett numrerat steg, aktuell pelare i ämnesraden, mätarens fyllning, markerat värde i tabell |
| `ok` | `#2e6b3b` | "Bäst i raden" i tabeller, giltig indata |
| `varning` | `#8c5300` | Varningsrutor, ikonen i "Gör inte det här" och i svarets statusrad, ogiltig indata, "slut i lager" |
| `vit` | `#ffffff` | Bakom produktbilder och i formulärfält och radioknappar, som ifyllbara rutor på papperet. Ingenting annat |

Det finns ingen mörkare hover-färg. Hover på en knapp är att pennan trycks hårdare: bakgrunden blir `blyerts`, ramen `blyerts`, texten `papper`. Det gäller den fyllda knappen, konturknappen och köpknappen.

### Verifierad kontrast

| Kombination | Kontrast | Krav | Resultat |
|---|---|---|---|
| blyerts på papper | 13,24:1 | 4,5 | Godkänd, även AAA |
| blyerts på papper-2 | 11,78:1 | 4,5 | Godkänd |
| blyerts på ruta | 14,05:1 | 4,5 | Godkänd |
| blyerts på vit (fält, produktruta) | 15,16:1 | 4,5 | Godkänd |
| blyerts på tumstock (markering, chip, symbol, steg) | 8,18:1 | 4,5 | Godkänd |
| blyerts-2 på papper | 5,92:1 | 4,5 | Godkänd |
| blyerts-2 på papper-2 | 5,27:1 | 4,5 | Godkänd |
| blyerts-2 på ruta | 6,28:1 | 4,5 | Godkänd |
| blyerts-2 på vit | 6,78:1 | 4,5 | Godkänd |
| penna som text på papper | 5,56:1 | 4,5 | Godkänd |
| penna som text på papper-2 | 4,94:1 | 4,5 | Godkänd |
| penna som text på ruta | 5,90:1 | 4,5 | Godkänd |
| papper på penna (knapptext) | 5,56:1 | 4,5 | Godkänd |
| papper på blyerts (hover, sidfot) | 13,24:1 | 4,5 | Godkänd |
| linje som text på blyerts (sidfotens etiketter) | 8,09:1 | 4,5 | Godkänd |
| ok som text på papper | 5,59:1 | 4,5 | Godkänd |
| ok som text på papper-2 | 4,97:1 | 4,5 | Godkänd |
| varning som text på papper | 5,47:1 | 4,5 | Godkänd |
| varning som text på papper-2 | 4,87:1 | 4,5 | Godkänd |
| varning som text på ruta | 5,80:1 | 4,5 | Godkänd |
| penna som text på tumstock | 3,44:1 | 4,5 | Underkänd, används inte |
| blyerts-2 på tumstock | 3,66:1 | 4,5 | Underkänd, används inte |
| linje på papper | 1,64:1 | 3,0 för gränssnittskomponenter | Underkänd, med avsikt |
| linje på papper-2 | 1,46:1 | 3,0 | Underkänd, med avsikt |

Konsekvenser. Text på gult (markering, chip, symbol, steg) är alltid `blyerts`, aldrig `penna` eller `blyerts-2`, så en länk kan inte ligga på gult. `linje` är dekor: ramen runt ett kort, ett block och en tabell får vara `linje` eftersom kortets innehåll bär sin egen betydelse, men ramen runt ett formulärfält, en radioknapp, en kryssruta och en chip som går att klicka på ska vara `blyerts-2` (5,92:1 mot papper), eftersom gränsen måste kunna urskiljas. Fokusring är alltid `penna`, 3 px, 2 px utanför elementet.

Tailwinds standardpalett är avstängd i `global.css` (`--color-*: initial`). Skriver någon `bg-blue-500` byggs det inte. Det är meningen.

Färg bär aldrig information ensam. "Bäst i raden" i en tabell är både grön och fet. Ogiltig indata är både varningsfärgad och har en text under fältet. Ett markerat nyckeltal är också det tal meningen handlar om. Mätarens fyllning har talet och gränsen utskrivna i raden ovanför. Aktuell pelare i ämnesraden har `aria-current="page"`.

Mörkt läge finns inte i fas 1. Sajten är ett papper.

## 4. Avstånd, radier, skuggor

### Avstånd

Bas 4 px. Tailwinds standardskala används (`p-4` är 16 px) men bara följande steg är tillåtna. Inne i ett kort får skissernas mellanmått 10, 14, 18, 22 och 26 px användas som Tailwinds halvsteg (`2.5`, `3.5`, `4.5`, `5.5`, `6.5`), aldrig godtyckliga värden i hakparentes:

| Steg | px | Typisk användning |
|---|---|---|
| 1 | 4 | Mellan etikett och värde, inuti taggar |
| 1,5 | 6 | Mellan ikon och text i en chip, mellan etikett, rubrik och beskrivning i ett kort |
| 2 | 8 | Mellan chips, mellan rader i en lista, mellan knapp och finstilt |
| 3 | 12 | Innanför tabellceller, pappersrutan runt en bild i ett litet kort, mellan knappar |
| 4 | 16 | Sidmarginal på mobil, innanför kort på mobil, mellan kort på mobil |
| 5 | 20 | Mellan kort i rutnät från lg, innanför ämneskort och pappersrutan i ett stort kort |
| 6 | 24 | Innanför kort och block på desktop, sidmarginal på surfplatta |
| 8 | 32 | Sidmarginal på desktop, ovanför H3 |
| 10 | 40 | Ovanför H2 i löptext |
| 12 | 48 | Mellan sektioner på mobil, mellan blockets spalter på desktop |
| 14 | 56 | Mellan sektioner på galleri­sidor |
| 16 | 64 | Mellan sektioner på desktop, ovanför och under band |
| 24 | 96 | Ovanför sidfoten på desktop |

Sidmarginal (utfall) är 16 px på 375, 24 px från 640, 32 px från 1024. Inget innehåll rör kanten på mobil, utom banden, vars yta går kant till kant medan innehållet håller marginalen.

Brytpunkter: bas (375 och uppåt), `sm` 640, `lg` 1024. `md` (768) används inte i sidmallar, bara om en tabell eller ett kort behöver det.

### Radier

| Token | Värde | Används till |
|---|---|---|
| `rounded-sm` | 4 px | Kort, block, faktarutor, färgade ytor, formulärfält, radioknappar, tabeller, bilder, raderna i Granskat-blocket |
| `rounded-md` | 6 px | Knappar, startsidans heroblock, öppen mobilmeny |
| `rounded-full` | helt runt | Chips, den runda symbolen, numrerade steg, bylinens porträttplats, mätarens stapel |

`sm` var 2 px till 2026-10-02 och blev 4 px med skisserna. Tailwinds övriga radier är avstängda. Runt är bara det som ska läsas som en sak man kan ta i (chip), en stämpel (symbol, steg, porträtt) eller en stapel.

### Skuggor

Tre, alla i `global.css`:

| Token | Värde | Används till |
|---|---|---|
| `shadow-kort` | `2px 3px 0 papper-2` | Kort och block: Artikelkort, ämneskort, Verktygskort, Granskat-korten, kompakta listans kort, räknarens formulär, inbäddad räknare, Så räknar jag-kortet, produktkort, sidospaltens kort |
| `shadow-kort-hover` | `2px 3px 0 linje` | Samma kort vid hover när hela kortet är en länk |
| `shadow-block` | `3px 4px 0 papper-2` | Startsidans heroblock |
| `shadow-lyft` | `0 2px 8px rgb(42 37 33 / 0.14)` | Det som faktiskt ligger ovanpå sidan: den öppna mobilmenyn |

Skuggan är hård, utan oskärpa, och förskjuten snett nedåt till höger: papper som ligger på papper. Den rör sig inte, och hover byter bara dess färg. Färgade ytor (Kort svar, svarsytan, Gör inte det här, band) har ram men ingen skugga: de är tryckta på sidan, inte lagda på den.

### Kort och block, en gång för alla

Ett **kort** är ett papper på bordet: bakgrund `papper`, 1 px `linje`-ram, radie `sm`, `shadow-kort`, 16 px inre marginal på mobil och 20 till 24 på desktop. Är hela kortet en länk byter skuggan till `shadow-kort-hover` vid hover. Ett kort med en bild har bilden i en **pappersruta** överst eller till vänster: ytan `ruta`, 12 px luft runt bilden (20 i ett stort kort), 1 px `linje` mot kortets text, bilden i `object-fit: contain`.

Ett **block** är ett kort på linjerat papper: ytan `ruta` med linjer i `linje` (65 procent mot `ruta`) var 28:e px, ingen marginallinje. Block bär det man fyller i eller tittar på: startsidans hero (med `shadow-block` och radie `md`), räknarens formulär, inbäddad räknare och hubbens bild.

En **färgad yta** är `papper-2` med 1 px `linje`-ram, radie `sm`, ingen skugga: Kort svar, räknarens svarsyta, Gör inte det här, Så jobbar jag-rutan i artikelns spalt (den senare utan ram).

Ett **band** är en sektion i full bredd på `papper-2` med 1 px `linje` ovanför och under, och innehållet i sidbredd med vanlig sidmarginal. Band växlar med papper så att en lång galleri­sida får rytm: på startsidan är ämnena och räknarna band, på hubben rubrikblocket och Räkna, på räkna-indexet rubrikblocket, på artikeln Läs vidare.

## 5. Sidmallar

Gemensamt för alla sidor:

**Sidhuvud.** 56 px högt på mobil, 64 på desktop. Vänster: ordmärket som inlinead SVG (`src/assets/brand/riktning-1/ordmarke-inline.svg`, symbol, "Hantverkstips" i Zilla Slab och pennstrecket), 28 px högt på mobil och 32 på desktop, `width: auto`. Ordmärket är den enda länken till startsidan. Höger på mobil: knappen "Meny" (text, inte hamburgare, ikonen `ikon-meny` får stå bredvid ordet), som öppnar en lista under sidhuvudet via `<details>`, alltså utan JavaScript. Desktop: de fasta sidorna i rad till höger, 15 px, blyerts, understrykning i penna vid hover. Ingen sökruta i fas 1. 1 px `linje` under sidhuvudet.

**Ämnesraden.** Undre raden i sidhuvudet på desktop, sedan 2026-09-17, i chips sedan 2026-10-02: ett band i `papper-2` med 1 px `linje` ovanför, och i det alla publicerade pelarhubbar i `src/lib/pelare.ts`-ordning som chips (avsnitt 6, Chip) med pelarikonen i 20 px och `kort`-namnet, 8 px mellan chipsen, och sist "Alla ämnen" som vanlig länk mot högerkanten. Den pelare sidan hör till (hubben själv, och en artikel i pelaren) har chipen i `tumstock` och `aria-current="page"` på hubben, `aria-current="true"` på en artikel. Raden bryts till en andra rad när hubbarna inte ryms, aldrig sidledsrullning. Inga undermenyer. En pelare kommer in genom att dess hub får `utkast: false`.

**Mobilmenyn.** Lodrät lista med `shadow-lyft` under sidhuvudet, 48 px per rad, linje mellan raderna. Uppifrån: de publicerade hubbarna grupperade under etiketterna Utsidan, Insidan och Hela huset, var och en med pelarikonen till vänster om hela namnet (24 px, blyerts), sedan "Alla ämnen" i fetstil och de fasta sidorna. Menyn växer nedåt med antalet hubbar.

**Reklammärkning.** Ett smalt band direkt under sidhuvudet på alla sidor som innehåller affiliatelänkar. Se komponent i avsnitt 6. Startsidan, pelarhubbar och kunskapsartiklar utan produkter har inga köpknappar och därför inget band.

**Brödsmulor.** 14 px, blyerts-2, med snedstreck som avdelare. Följer URL:en. På mobil visas bara de två sista nivåerna. Ingen ikon. På galleri­sidor med rubrikband (hub, räkna-index) står brödsmulorna inne i bandet, ovanför etiketten.

**Sidfot.** Bakgrund blyerts, text papper, 15 px på desktop och 14 på mobil. Första spalten är varumärket: ordmärket i papper, en rad om sajten i `linje` och "© {år} Hantverkstips" i 13 px `linje`. Därefter tre länkspalter, var och en med sin rubrik i etikett-stil i `linje` och länkarna i papper med understrykning: Ämnen (de fyra största pelarna, i dag Fukt, Badrum, Kök och Tak), Räkna själv (tre räknare i säsong för byggmånaden, rotavdraget som reserv, aldrig en räknare med färre än två inlänkar från innehållet, och "Alla räknare") och Om sajten (Så testar jag, Så tjänar jag pengar, Kontakt, Integritet). En spalt på mobil, fyra från `lg`. Inga enskilda artiklar, inga sociala ikoner. Urvalet är SEO och GEO-agentens beslut 2026-10-02 (`docs/SOKORDSANALYS.md` avsnitt 13): sidfotslänkar räknas inte som inlänkar, så varje räknare ska ha minst två inlänkar från innehållet, och `npm run kontrollera` varnar annars.

**Hoppa till innehåll.** Första fokuserbara elementet på varje sida, synligt bara vid fokus.

**Galleri­sidorna** (startsidan, pelarhubben, räkna-indexet) har ingen läsbredd på `<main>`: de byggs av sektioner och band i full bredd, var och en med innehållet i sidbredd (72 rem) och sidmarginal. Varje sektion har en rubrikrad: H2 med pennstreck till vänster och antingen en länk ("Alla ämnen", "Alla guider och tester", "Alla räknare") längst till höger, eller en kort rad i blyerts-2 direkt efter rubriken på samma baslinje (desktop) eller under den (mobil).

### 5.1 Startsida

Startsidan är en uppslagen anteckningsbok, inte en landningssida. Ingen bakgrundsbild, inga köpknappar, inget reklamband. Ordningen, uppifrån: heroblock, Var sitter problemet (band), Börja här, Granskat på datablad, Räkna själv (band), Så jobbar jag.

```
┌──────────────────────────────────────────────┐
│ Sidhuvud (ämnesrad med chips)                │
├──────────────────────────────────────────────┤
│ ┌ Heroblock (block, linjerat, shadow-block) ┐│
│ │ Säsongsetikett        │                   ││
│ │ H1 (54 px)            │  Huset i snitt    ││
│ │ Stycket               │  (varumärkesbild) ││
│ │ Säsongsraden          │                   ││
│ │ [Räkna själv] [Hitta felet] [Bäst i test] ││
│ │ Sifferrad             │                   ││
│ └───────────────────────────────────────────┘│
├──────────── band ────────────────────────────┤
│ H2 Var sitter problemet?        Alla ämnen   │
│ Elva ämneskort, fyra i rad, största ×2       │
├──────────────────────────────────────────────┤
│ H2 Börja här i {månad}   Alla guider/tester  │
│ Stort kort (bild ½ · text ½)                 │
│ Fyra kort i rad                              │
├──────────────────────────────────────────────┤
│ H2 Granskat på datablad                      │
│ Två kategorikort med två val var             │
│ Prisrad med datum                            │
├──────────── band ────────────────────────────┤
│ H2 Räkna själv, {n} räknare    Alla räknare  │
│ Tre talkort                                  │
│ Kort med kompakt lista i två spalter         │
├──────────────────────────────────────────────┤
│ Porträtt · H2 Så jobbar jag │ Tre principer  │
├──────────────────────────────────────────────┤
│ Sidfot                                       │
└──────────────────────────────────────────────┘
```

**Heroblock.** Ett block (avsnitt 4) i sidbredd med radie `md` och `shadow-block`, 48 px innermarginal på desktop och 20 på mobil (skissens 56 bröt knappraden på 1280 px), 56 px ovanför och 48 under. Desktop: två spalter 13/10 (`minmax(0,1.3fr) minmax(0,1fr)`, skissens 11/10 bröt knappraden på 1280 px) med 48 px emellan, lodrätt centrerade. Vänster, uppifrån med 22 px emellan: säsongsetiketten i etikett-stil blyerts-2 ("Just nu, oktober", månaden från bygget), H1 i 30/54 px, startsidans stycke i ingress-storlek (max 34 em), säsongsraden (en mening ur säsongsmodulen med en länk, avsnitt 6 Säsongsraden), knappraden och sifferraden. Knappraden: "Räkna själv" som fylld knapp med `ikon-kalkylator` och "Hitta felet" som konturknapp med `ikon-sok`, 12 px emellan. Skissens tredje knapp, "Bäst i test", byggs inte: kategorisidorna är granskningar, och ordet test får inte bära dem (SEO och GEO-agentens beslut 2026-10-02, `docs/SOKORDSANALYS.md` avsnitt 13). Samma beslut håller "Bäst i test" ur toppmenyn tills `/verktyg/` har fem sidor. Sifferraden i 14 px blyerts-2: antalet publicerade innehållssidor (guider, kunskap, tester, jämförelser och kategorisidor, inte hubbar och om-sidor), räknare och granskade kategorier, räknade i bygget, följt av en mening om källorna. Höger: varumärkesbilden `start/hus-tumstock.svg` som `<img alt="">` med `fetchpriority="high"`, max 460 px bred, centrerad. Den handskrivna raden under bilden i skissen byggs inte. Mobil: en spalt, texten först och bilden sist i full bredd. Första skärmen på 375 × 667 visar etiketten, H1, stycket och knapparna.

**Var sitter problemet?** Band. Rubrikraden med H2 och länken "Alla ämnen" till `/amnen/`. Ett rutnät av ämneskort (avsnitt 6, Ämneskort) för alla elva pelare i `PELARE`-ordning, fyra kolumner från 1024 px, tre från 640 och två under, 20 px mellan korten på desktop och 12 på mobil. Den pelare som har flest publicerade sidor tar två kolumner och har ytan `ruta`; därmed blir elva kort tolv celler och raderna går jämnt ut i alla tre bredder. Etiketten på det kortet får tillägget ur textlistan ("störst just nu").

**Börja här i {månad}.** Rubrikraden med H2 och länken "Alla guider och granskningar" till `/guider/`. Först det stora kortet (avsnitt 6, Artikelkort, variant stor) med chefredaktörens `justNu` i sidbredd: pappersrutan till vänster och texten till höger i två lika spalter från 1024 px, bilden överst på mobil. Under det fyra standardkort i en rad från 1024 px (två från 640, kompakta på mobil): de fyra senast publicerade med `justNu` bortfiltrerad. Korten har ingen beskrivning, bara etikett, rubrik och datum. Utan `justNu` blir det senaste kortet det stora.

**Granskat på datablad.** H2. Ett kort per publicerad och indexerbar kategori, två i rad från 1024 px, staplade på mobil, 20 px emellan, 24 till 28 px innermarginal. Kortets huvud: kategorins namn i Zilla Slab 24 px till vänster och "{n} granskade" i etikett-stil till höger. Under det en rad per val i kategorifilen, högst två: yta `papper-2`, radie `sm`, 14 px innermarginal, valets etikett som gul chip, produktens namn i fetstil och priset högerställt i tabellsiffror. Raderna är inte länkar och har ingen köpknapp. Sist i kortet en länk till kategorisidan. Under korten en rad i 14 px blyerts-2 med butikens namn och datumet då priserna lästes, från erbjudandets `uppdaterad`. Utan databas visas raderna utan pris och prisraden utgår.

**Räkna själv.** Band. Rubrikraden med H2 ("Räkna själv, {n} räknare") och länken "Alla räknare" till `/rakna/`. Tre talkort (avsnitt 6, Verktygskort, variant tal) i en rad från 1024 px, staplade på mobil: de tre första räknarna i registret vars säsong omfattar byggmånaden och som har ett tal vid standardvärdena, fylls på i registerordning. Under dem ett kort med den kompakta listan (avsnitt 6, Kompakt lista) över alla övriga räknare i två spalter från 1024 px, en på mobil: pelarens korta namn som etikett i en fast spalt på 88 px och räknarens namn. Sista raden är länken till `/rakna/`.

**Så jobbar jag.** Ingen ram, ingen yta. Desktop: två spalter 1/2 med 48 px emellan, lodrätt centrerade. Vänster: porträttplatsen (avsnitt 6, Porträttplats) i 120 px, H2 "Så jobbar jag" och en rad om vem som skriver. Höger: tre principer i tre spalter, var och en med en ikon ur spriten i 30 px `penna`, en rubrik i fetstil och en mening i 15 px blyerts-2, och under dem länken till `/om/sa-testar-vi/`. Mobil: allt staplat. Blocket är det enda stället där principer om sajten står i kolumner (avsnitt 8): varje princip är ett arbetssätt som går att kontrollera på sidorna, aldrig ett adjektiv.

### 5.2 Pelarhub

Hubben är ett galleri som mallen bygger. Hubfilen bär frontmatter (title, description, ingress och de valfria fälten nedan); mallen bygger allt annat ur artiklarnas frontmatter. Inga köpknappar, inget reklamband. Publiceras vid minst fem sidor.

```
┌──────────────────────────────────────────────┐
│ Sidhuvud (aktuell pelare gul i ämnesraden)   │
├──────────── band ────────────────────────────┤
│ Brödsmulor                │                  │
│ Etikett · sidor · räknare │  Block med       │
│ H1                        │  hubbens bild    │
│ Ingress                   │                  │
│ Chips till grupperna      │                  │
├──────────────────────────────────────────────┤
│ H2 Börja här                                 │
│ Stort kort (bild 1 · text 1,4)               │
├──────────────────────────────────────────────┤
│ H2 Hitta felet   rad                         │
│ Kort, fyra i rad                             │
│ H2 Välj rätt     rad                         │
│ H2 Gör det själv rad                         │
├──────────── band ────────────────────────────┤
│ H2 Räkna   rad                               │
│ Verktygskort med bild, två i rad             │
├──────────────────────────────────────────────┤
│ H2 Läs i ordning (om hubfilen har det)       │
│ Numrerade steg, fyra i rad                   │
│ Grannar: chips (om hubfilen har det)         │
├──────────────────────────────────────────────┤
│ Sidfot                                       │
└──────────────────────────────────────────────┘
```

**Rubrikbandet.** Band med 40 px ovanför och 44 under på desktop, 24 och 32 på mobil. Desktop: två spalter 1,3/1 med 48 px emellan. Vänster, uppifrån med 16 px emellan: brödsmulorna, etiketten "{grupp} · {n} sidor · {m} räknare" i etikett-stil (räknarna utelämnas vid noll), H1, ingressen i ingress-storlek (max 30 em) och en rad chips som ankarlänkar till sidans grupper ("Hitta felet · 5"), med gruppens ikon i 18 px och ytan `papper`. Höger: ett block med hubbens bild i `ruta` (avsnitt 6, Block), 24 px innermarginal. Bilden är hubfilens `bild` om den finns, annars den nyast publicerade artikeln i pelaren med `bild` som inte är Börja här-kortets. Finns ingen bild blir bandet en spalt. Mobil: en spalt, bilden sist. Pelarikonen vid H1 utgår: chipen i ämnesraden och etiketten säger var läsaren är.

**Börja här.** Rubrikraden med H2 och länken "Alla guider om {pelarens namn med liten bokstav}" till `/guider/[pelare]/` (den som förut stod under ingressen), och ett stort kort (avsnitt 6, Artikelkort, variant stor) med pappersrutan till vänster i 1/2,4 av bredden och texten till höger: typetiketten i penna, rubriken i 24/30 px, beskrivningen och datumet. Kortet är hubfilens `borjaHar` om den finns, annars den nyaste problemguiden eller kunskapsartikeln i pelaren. Kortet står inte också i sin grupp nedanför.

**Grupperna.** Hitta felet, Välj rätt och Gör det själv, i den ordningen, var och en en sektion med 48 px ovanför: rubrikraden med H2 och gruppens generella rad i blyerts-2 på samma baslinje, sedan Artikelkort med pappersruta, etikett "Typ · Nivå", rubrik och beskrivning, inget datum. Fyra kolumner från 1024 px när gruppen har fyra kort eller fler, annars tre; två från 640, en under. Välj rätt har kategorikorten först. En tom grupp visas inte, och dess chip i rubrikbandet utgår.

**Räkna.** Band med 48 px ovanför. Rubrikraden med H2 och raden, sedan Verktygskort i variant bild (avsnitt 6), två i rad från 1024 px, ett under.

**Läs i ordning** (valfritt, hubfilens `lasordning`). H2 i 26 px med hubfilens rubrik och två till fem numrerade steg (avsnitt 6, Steg) i en rad från 1024 px, staplade under, varje steg en länk. **Grannar** (valfritt, hubfilens `grannar`): under stegen, efter 1 px `linje` och 24 px luft, en rad i 15 px blyerts-2 med etiketten och chips till två till fyra sidor i andra pelare. Båda utgår när fälten saknas.

**Platsläge** (2026-09-30, `docs/briefer/spec-fukthubb-plats-2026-09-30.md`, klädsel 2026-10-02). En pelare med platsregister i `src/lib/plats.ts`, i dag bara Fukt, ordnas efter plats i huset i stället för efter grupperna. Rubrikbandet är detsamma, men chipsen leder till platserna, och de ersätter innehållsförteckningen. Börja här står kvar. Varje plats är en sektion med H2 och pennstreck och under den den täta listan (`Platslista.astro`) i ett kort: etiketten "Typ · Nivå" i etikett-stil ovanför rubriken på mobil och i en fast spalt till vänster från 640 px, rubriken som länk, 1 px `linje` mellan raderna, hela raden klickbar med `papper-2` vid hover. Raderna står i gruppordningen Hitta felet, Välj rätt (kategorin först), Gör det själv, Räkna, nyast först inom gruppen. Sidor utan plats står under Hela huset, sist. Skälet till listan är budgeten och mobilen: med runt 45 poster väger korten 46 kB och 19 000 px, listan en fjärdedel.

**Mobil.** Stående kort med pappersruta, inte kompakta: den som valt ämne är här för att läsa, och bilden är halva anledningen att klicka.

### 5.3 Artikelmallen, och problemguiden

En mall för problemguider, projektguider, köpguider och kunskap (`vyer/Artikel.astro`); typerna skiljer sig i var produkterna står (5.3 till 5.5), inte i formen. URL `/[pelare]/[slug]/`.

```
┌──────────────────────────────────────────────────┐
│ Sidhuvud                                         │
│ Reklamband, smalt (bara med köpknappar)          │
├──────────────────────────────────────────────────┤
│ Brödsmulor                                       │
│ Etikett (penna): Typ · Nivå · Pelare             │
│ H1                                               │
│ (o) Christian · Publicerad …, uppdaterad … · min │
├───────────────────────────────┬──────────────────┤
│ Huvudbild i kort med ruta     │ Innehåll (kort)  │
│ Kort svar (färgad yta)        │ Produkterna jag  │
│ Brödtext, H2 med pennstreck   │   nämner (kort)  │
│   Inbäddad räknare (block)    │ Verktygskort     │
│   Tabeller, produktkort       │ Så jobbar jag    │
│ Vanliga frågor (details)      │   (färgad yta)   │
│ Källor (numrerad lista)       │  sticky från lg  │
├──────────── band ─────────────┴──────────────────┤
│ H2 Läs vidare i {pelare}: tre kort               │
├──────────────────────────────────────────────────┤
│ Sidfot                                           │
└──────────────────────────────────────────────────┘
```

**Huvudet.** I sidbredd ovanför spalterna, 32 px ovanför: brödsmulorna, etiketten i `penna` ("Köpguide · Mellan · Fukt", pelarens korta namn sist), H1 (max 18 em) och bylinen (avsnitt 6, Byline). Ingen ingress här: ingressen är brödtextens första stycke.

**Spalterna.** Från 1024 px ett rutnät med texten i läsbredd (`minmax(0, 44rem)`) och sidospalten i 300 px, 48 px emellan, `align-items: start`. Sidospalten är `position: sticky; top: 24px`. Under 1024 px faller sidospalten under texten, före Läs vidare-bandet, utom innehållsförteckningen, som på mobil står som den hopfällbara `<details>` mellan Kort svar och brödtexten (avsnitt 6, Innehållsförteckning).

**Textspalten, uppifrån.** Huvudbilden i ett kort med pappersruta (20 px luft) och bildtexten under rutan i 14 px blyerts-2, 28 px under. Kort svar som färgad yta (avsnitt 6), 36 px under. Brödtexten med H2 i 28 px, pennstreck, 40 px ovanför och 14 under. Inbäddad räknare som block, tabeller med ram runt varje cell, produktkort där texten talar om produkten. Vanliga frågor, sedan Källor. På mobil står Kort svar före huvudbilden, så att svaret är i första skärmen; från 1024 px står bilden först.

**Sidospalten, uppifrån, 20 px emellan.** Innehållsförteckningen i ett kort. "Produkterna jag nämner" i ett kort när sidan har produkter: en rad per produkt med namnet i fetstil, rollen i blyerts-2 under och priset högerställt, varje rad en länk till produktens kort längre ner på sidan (ankare, inte `/go/`), och sist raden "Annonslänkar. Priser lästa {datum}." i 13 px. Ett Verktygskort i variant liten när sidan har en räknare som inte redan står inbäddad. "Så jobbar jag"-rutan: färgad yta utan ram, 14 px, etiketten, en mening och länken "Så testar jag".

**Läs vidare.** Band med 56 px ovanför: H2 i 26 px och tre Artikelkort med pappersruta, etikett (bara typen) och rubrik, tre i rad från 1024 px. Ersätter den tidigare listan "Läs vidare". Författarrutan längst ner utgår: bylinen bär författaren, och `Article`-markupen är oförändrad.

**Problemguiden** (`/fukt/fukt-i-kallaren/`). Diagnosordningen är sidan. Kort svar är en ordning, inte en produkt: vad du kontrollerar först och i vilken ordning. Produkten står på ett ställe, som produktkort i det avsnitt där diagnosen säger att en maskin är rätt åtgärd, aldrig ovanför Kort svar. Leder diagnosen till "ring ett proffs" ersätts kortet av en länk till artikeln om när man gör det. Ibland är svaret "köp ingenting", och då finns ingen produkt och inget reklamband.

**Kunskap** använder samma mall utan produktkort i texten och utan reklamband, med undantaget "en produkt per typ, sist" som innehållsarkitekturen anger för vissa sidor: då renderas de som produktkort under H2 "Produkterna jag nämner" sist i texten, och bandet visas.

### 5.4 Projektguide

Samma mall. Kort svar bär projektets nyckeltal (tid, kostnad, det som avgör om du klarar det själv). Varje H2 är ett moment med en rubrik som säger något, och ett produktkort står bara där texten motiverar verktyget, högst ett per H2. Sist i texten, före Vanliga frågor, står "Det här behöver du" (avsnitt 6), modulen med flest klick på en projektguide. Produktkort får inte stå i den listan.

### 5.5 Köpguide

Samma mall. Kort svar bär det konkreta svaret med nyckeltalet markerat och de val texten landar i som chips under texten ("Kallt garage: Acetec EvoDry 6H 2.0"), utan köpknapp; knappen kommer när läsaren fått resonemanget. Produktkort får stå i texten där produkten diskuteras, högst ett per H2, och sist i texten står H2 "Produkterna jag nämner" med ett produktkort per post i `produkter`. Sidospaltens lista pekar ner till korten. Saknas eget foto och illustration utgår huvudbilden; en leverantörsbild blir aldrig guidens huvudbild.

### 5.6 Bäst i test (kategorisida)

URL `/luftavfuktare/`. Sidan som tjänar pengar, så första skärmen på 375 × 667 ska innehålla rubrik, ingress och första rekommendationen med köpknapp. Ingen bild ovanför. Formen är artikelmallens (5.3), med Våra val och tabellen som bryter ut till sidbredd.

```
┌──────────────────────────────────────────────────┐
│ Sidhuvud                                         │
│ Reklamband, smalt                                │
├──────────────────────────────────────────────────┤
│ Brödsmulor                                       │
│ Etikett (penna): Bäst i test · {n} granskade     │
│ H1 · Ingress · Byline                            │
├──────────── band ────────────────────────────────┤
│ H2 Mina val                                      │
│ Produktkort ×2–3 (etikett-chip, tre fakta,       │
│ svagheten, pris med datum, knapp)                │
├───────────────────────────────┬──────────────────┤
│ H2 Jämförelse (sidbredd)                         │
├───────────────────────────────┼──────────────────┤
│ H2 per produkt                │ Innehåll (kort)  │
│   Produktkort, omdöme,        │ Verktygskort     │
│   Köp om / Köp inte om        │ Så jobbar jag    │
│ H2 Så väljer du               │                  │
│ H2 Så testade jag             │                  │
│ Vanliga frågor (details)      │                  │
├──────────── band ─────────────┴──────────────────┤
│ H2 Fler guider och tester om {namn}: kort        │
├──────────────────────────────────────────────────┤
│ Sidfot                                           │
└──────────────────────────────────────────────────┘
```

**Huvudet.** Som artikelns: brödsmulorna, etiketten i `penna` med antalet granskade, H1, ingressen i ingress-storlek och bylinen, där "Uppdaterad {datum}" ersätter publiceringsdatumet. Antalet testade mot granskade står i etiketten, så att läsaren ser skillnaden direkt.

**Valen.** Ett band med rubriken och två eller tre produktkort (avsnitt 6, Produktkort) staplade på mobil och i rad från 1024 px, lika stora. Etiketterna skrivs av redaktören och säger något konkret, aldrig "premium", "mellanklass" eller "budget". Tre lika kort i rad är tillåtet här eftersom det är tre likvärdiga val.

**Jämförelsetabellen** i sidbredd under bandet, med ram runt varje cell som tabellerna i brödtexten och de rekommenderade produkternas kolumner i `papper-2`. Beteendet på mobil står i avsnitt 6.

**Per produkt.** H2 som säger något, ett produktkort, omdömet som ett stycke, Köp om och Köp inte om som färgad yta med två delar, länken till testet och en avslutande köpknapp. Bara produkter som har ett test eller står bland valen får ett avsnitt; övriga står i tabellen med köpknappen i prisraden.

**Sidospalten** från 1024 px som artikelns: innehållsförteckningen, Verktygskort i variant liten och Så jobbar jag-rutan. Ingen "Produkterna jag nämner", eftersom valen redan står överst.

**Vanliga frågor** som `<details>` (avsnitt 6). Svaren står i HTML:en och indexeras även när raden är stängd. **Fler guider och tester** som band med Artikelkort, som artikelns Läs vidare. Författarrutan utgår som i artikeln.

**Ingen fast köpknappsrad.** En rad längst ner på skärmen som följer med skulle öka klick men strider mot principen om lugn reklam.

### 5.7 Produkttest

URL `/tester/woods-mrd20/`. En produkt, ett omdöme, egna siffror. Formen är artikelmallens (5.3): huvudet med byline, sidospalten från 1024 px, Läs vidare som band; omdömesblocket är ett kort och köpknapparna följer avsnitt 6. Etiketten "Test" betyder att vi haft produkten och mätt, "Granskning" att vi jämfört datablad och tredjepartsmätningar. Den står i H1-blocket och i `Product`-markupen, och mallen är samma för båda; det som skiljer är etiketten och kolumnrubriken i omdömestabellen.

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
│ Läs vidare (band)                  │
│ Sidfot                             │
└────────────────────────────────────┘
```

**Omdömesblock.** Ett kort med ram. Mobil: bild överst (4:3, hela kortets bredd), sedan text. Desktop: bild till vänster (40 procent), text till höger. Omdömestabellen har två värdekolumner, "Jag mätte" och "Tillverkaren uppger", så att läsaren ser skillnaden; på en granskning heter kolumnerna "Tredje part mätte" (med källa i tabellfoten) och "Tillverkaren uppger". Det viktigaste uppmätta värdet får gul markering. "Köp om" och "Köp inte om" är två korta stycken med rubrik i etikett-stil, inte listor. Köpknappen är den första på sidan och den sista ligger efter "Så testade vi", ingen däremellan.

Ingen poängskala, inga stjärnor. Omdömet är en mening och två stycken. Stjärnor är det första en läsare slutar lita på.

**Diagram.** Testsidor har minst ett eget diagram (uppmätt kapacitet, ljud på avstånd, strömförbrukning över tid). Inline-SVG, ritad med tokens i skissens hand, med `width` och `height`. Se avsnitt 7.

**Alternativ.** Rubrikerna på korten säger varför alternativet finns: "Billigare, men högre ljud", "Klarar större yta".

**Specifikationer.** Full tabell från databasens `specs`, två kolumner (egenskap, värde). Ingen sidledsscroll behövs.

### 5.8 Räknaren

URL `/rakna/[slug]/`, exemplet daggpunkt. Formuläret skickas med GET till samma sida, som räknar på servern; svaret ligger i adressen. Alla 22 räknare har samma delar i samma ordning, byggda av en delad layout, så att varje räknare bara bär sina fält, sitt svar och sin text.

```
┌──────────────────────────────────────────────────┐
│ Sidhuvud                                         │
│ Reklamband (bara när räkningen visar produkter)  │
├──────────────────────────────────────────────────┤
│ Brödsmulor                                       │
│ Etikett (penna): Räkna själv · {pelare}          │
│ H1 · Ingress (blyerts-2)                         │
├────────────────────────┬─────────────────────────┤
│ Formuläret (block)     │ Svarsytan (färgad yta)  │
│  Typiska tal för: chips│  Kort svar              │
│  Fält med enhet i      │  84  grader             │
│  Radioknappar som      │      daggpunkten i …    │
│  knappar               │  Beskedet               │
│  [Räkna ut]  rad       │  Mätare (om gräns)      │
│                        │  ⚠ Statusraden          │
│                        │ Det här gör du (kort)   │
│                        │  ① ② ③                  │
│                        │ Delningsraden (streckad)│
├────────────────────────┴─────────────────────────┤
│ H2 Därför blev svaret så   │ Så räknar jag (kort)│
│ Stycken                    │  skissen i ruta     │
│ Gör inte det här (yta)     │  tabell, källrad    │
├──────────────────────────────────────────────────┤
│ Räknarens egna avsnitt (tabeller, typfall)       │
│ Produktkort (bara när räkningen pekar ut en)     │
│ H2 Läs vidare: tre kort                          │
│ Vanliga frågor (details)                         │
├──────────────────────────────────────────────────┤
│ Sidfot                                           │
└──────────────────────────────────────────────────┘
```

**Huvudet.** Brödsmulorna, etiketten i `penna` ("Räkna själv · Fukt", pelaren är den första i registret), H1 (max 20 em) och ingressen i 19 px blyerts-2 (max 40 em). Ingen bild i huvudet: varumärkesbilden bär räknaren i korten (Verktygskort, räkna-indexet), och svarsytan är sidans bild. Den separata Kort svar-rutan ovanför formuläret utgår; svarsytan är Kort svar.

**Två spalter.** Från 1024 px formuläret till vänster och svaret till höger i två lika spalter med 28 px emellan, `align-items: start`. Under 1024 px står svaret först och formuläret efter, eftersom den som skickat formuläret landar överst på sidan och ska se sitt svar utan att rulla. I källkoden står svarsspalten först, så att läs- och tabbordningen följer det läsaren ser på mobil; på desktop placeras spalterna med rutnätet.

**Formuläret.** Ett block (avsnitt 4) med 26 till 28 px innermarginal och 18 px mellan raderna. Överst, när räknaren har förval: etiketten "Typiska tal för" och förvalen som chips, där varje chip är en länk till räknarens adress med förvalets värden och den valda har `aria-current="true"` och blyertsyta. Sedan fälten (avsnitt 6, Formulärfält), två i bredd från 640 px när de är tal, en hjälprad i 14 px blyerts-2 under fältet som behöver den, radioknappar som knappar. Sist knappen "Räkna ut" som fylld knapp, 52 px hög, och bredvid den en rad i 14 px blyerts-2.

**Svarsytan.** Färgad yta med 24 till 26 px innermarginal och 14 px mellan delarna, uppifrån: etiketten "Kort svar"; det stora talet i Zilla Slab 64/84 px med enheten bredvid i en stapel (enhetsordet i Zilla Slab 26 px, vad talet är i 14 px blyerts-2); beskedet, en mening med verb, 17 px; mätaren (avsnitt 6) när räknaren har en gräns; statusraden i fetstil med ikonen `varning` i `varning`, eller `check` i `ok`, före texten. Talet har ingen markering: ytan och storleken är markeringen. Utan adress, vid standardvärdena, innehåller ytan dessutom en mening i klartext med talet, villkoret och källan, renderad på servern; det är stycket en AI lyfter när den separata Kort svar-rutan är borta (SEO-villkor 2026-10-02). Delningsbilden, förhandsbilden och `WebApplication` påverkas inte av att huvudet saknar bild.

**Det här gör du.** Ett kort under svarsytan, 16 px emellan: etiketten och räknarens råd som numrerade steg (avsnitt 6, Steg, i 26 px), en mening var. Ett nyckeltal i ett råd får markering.

**Delningsraden.** Under rådskortet (avsnitt 6, Delningsrad): adressen med räknarens värden, som text som markeras med ett klick.

**Resonemanget.** Från 1024 px två spalter 1,3/1 med 40 px emellan, 56 px ovanför. Vänster i läsbredd: H2 "Därför blev svaret så" med räknarens regler och källor i löptext, och "Gör inte det här" som färgad yta med ikon (avsnitt 6) sist i spalten. Höger: kortet "Så räknar jag" med etiketten, räknarens skiss i en pappersruta, antagandetabellen (två kolumner, ram runt cellerna, 15 px) och en rad i 14 px blyerts-2 om var källorna står. Mobil: staplat, kortet efter Gör inte det här.

**Resten**, i läsbredd eller sidbredd för tabeller: räknarens egna avsnitt (daggpunktstabellen, typfallen), produktkort efter svaret när räkningen pekar ut en produktegenskap (aldrig före svaret, och då med reklamband), H2 "Läs vidare" i 26 px med tre Artikelkort (pappersruta, etikett med bara typen, rubrik), och Vanliga frågor sist.

**Tillstånd.**

| Tillstånd | Beteende |
|---|---|
| Utan adress | Standardvärdena står i fälten och svaret för dem är räknat. Sidan ser klar ut |
| Med adress | Värdena ur adressen står i fälten, svaret för dem i ytan, delningsraden visar adressen |
| Ogiltig indata | Fältet får ram i `varning` och en rad text under i `varning` 14 px, kopplad med `aria-describedby`. Svarsytan visar standardvärdenas svar och statusraden säger att fälten ska rättas |
| Utanför intervall | Svarsytan ersätter talet med beskedet om vad som gäller i stället, och mätaren utgår |
| Inga produkter matchar | Färgad yta med en mening och länk till kategorisidan |

**Mobil.** Allt i en spalt, inget bredare än 343 px. Talet är 64 px. Fälten står två i bredd bara när båda ryms med sin enhet; annars ett per rad. Ingen sidledsscroll utom inuti en tabellyta.

### 5.8.1 Räkna själv-indexet

URL `/rakna/`. Statisk.

**Rubrikbandet.** Band som hubbens. Vänster: brödsmulorna, H1, ingressen och chips som ankarlänkar till grupperna ("Fukt · 4"). Höger: "Prova direkt", daggpunktens inbäddade räknare (`<Kalkylator namn="daggpunkt" />`, avsnitt 6) med etiketten "Prova direkt" i `penna` i stället för "Räkna själv". Mobil: en spalt, räknaren sist.

**Grupperna.** En sektion per grupp i `src/lib/kalkyl/grupper.ts`, i registrets gruppordning: rubrikraden med H2 och gruppens rad i blyerts-2 (raden får saknas). En grupp med fyra räknare eller färre visar Verktygskort i variant bild, två i rad från 1024 px. En grupp med fem eller fler visar den kompakta listan (avsnitt 6) i två spalter utan kort runt: räknarens namn i fetstil till vänster och svarets form i 14 px blyerts-2 till höger ("inköpslista", "ja, nej eller anmälan"), 1 px `linje` under varje rad. Varje räknare står i exakt en grupp.

**Sist** ett kort på `papper-2` med stycket om att varje tal har en källa och att svaret ligger i adressen.

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

Alla komponenter ligger i `src/components/ui/` som Astro utan klient-JS. Utseende som står på många element är komponentklasser i `@layer components` i `global.css` (`.kort`, `.blad`, `.yta`, `.pappersruta`, `.band`, `.sidram`, `.chip`, `.knapp`, `.symbol`, `.steg`, `.pennstreck`, `.markering`), och komponenterna använder dem i stället för att bygga egna varianter. Ett block heter `.blad` i koden, eftersom `block` är Tailwinds ord för `display: block`. Det är också budgeten: en klass på ett element väger några byte, tio verktygsklasser väger hundra.

### Signaturelement

**Pennstreck** (`.pennstreck`). Ett handdraget rött streck, 3 px i penna med rundade ändar, ritat som en mask under elementet så att färgen är token. Bredden följer textens bredd, inte spaltens. Används under ordmärket (i SVG:n) och under varje H2. Inte under H1, H3, länkar, källförteckningens rubrik eller som avdelare.

**Markering** (`.markering`). Gul överstrykning i tumstock bakom ett tal eller två till fyra ord, med lutande kanter och förskjuten något nedåt så att den ser ut som en överstrykningspenna. Text på markering är alltid blyerts. Aldrig en hel rad, aldrig en rubrik, aldrig en knapp, aldrig en länk. Högst två per skärm. Löptextens nyckeltal, Kort svar och ett råd i räknaren är de typiska ställena; räknarens stora tal har ingen markering, ytan bär det.

**Linjerat papper** (i `.blad`). Ytan `ruta` med en linje i `linje` (65 procent mot `ruta`) var 28:e px, utan marginallinje. Används bara i ett block (avsnitt 4): startsidans hero, räknarens formulär, inbäddad räknare och hubbens bild. Aldrig som sidbakgrund, aldrig bakom produktkort, tabeller eller Kort svar. Texten följer inte linjerna. Fram till 2026-10-02 var det linjerade papperet `papper-2` med linjer var 24:e px och en röd marginallinje (klassen `.linjerat`), och låg bakom Kort svar, faktarutor och räknarna; det receptet byggs inte i nya komponenter och tas bort när fas B och C har flyttat de sista.

### Ikoner

Spriten `src/assets/brand/riktning-1/ikoner.svg` serveras som en egen fil med hash och årslång cache, och `<Ikon>` pekar in i den med `<use href>`. Färgen ärvs som `currentColor`. 24 px grid, linje 1,75 px, runda ändar, lätt darr i långa linjer och små överskjut i hörnen. Ikonerna krymper aldrig i en flexrad (`svg:has(> use)` i `global.css`).

Var de står: pelarikonen i ämnesradens chips (20 px), i mobilmenyn (24 px), i ämneskortets runda symbol (26 px), i artikelkortets tomma blad (40 px) och på `/amnen/` (32 px); gruppikonen i hubbens chips (18 px); en gränssnittsikon i en knapp (22 px, i knappens textfärg), i svarets statusrad och i Gör inte det här (26 px, `varning`), i delningsraden (18 px), i bylinens porträttplats och i startsidans Så jobbar jag (penna, `kalkylator`, `info`, `check`, 30 px i `penna`). Alltid med text bredvid och `aria-hidden="true"`. Ikoner finns aldrig i löptext, aldrig framför H2 eller H3, aldrig i brödsmulor. Nya ikoner ritas i samma sprite efter reglerna i filens kommentar och godkänns av UX och bygge-agenten; `penna` (en snickarpenna snett uppåt höger) kom till 2026-10-02 för porträttplatsen.

### Etikett

**Syfte.** Säga vilken sorts sida eller vilket slags underlag läsaren har framför sig.

**Innehåll.** Ett ord i etikett-stil (12 px, 700, versaler, spärrning). På listrader typen: "Test", "Granskning", "Köpguide", "Problemguide", "Projektguide", "Kunskap", "Jämförelse". På testsidor och i kategorisidans produktavsnitt underlaget: "Test" när vi haft produkten och mätt, "Granskning" när vi jämfört datablad och tredjepartsmätningar. 

**Utseende.** Text i blyerts, ingen bakgrund, ingen ram, ingen ikon. Redaktörens etikett på ett produktkort är ingen etikett i den här meningen utan en gul chip (avsnitt 6, Chip). Typetiketten i artikelns huvud, i ett stort kort och i räknarens huvud är i `penna`; i övrigt blyerts eller blyerts-2. "Test" och "Granskning" ser likadana ut; skillnaden ska ligga i ordet, inte i en färg som säger att det ena är sämre.

**Nivå** (beslut 2026-09-16). Varje artikel, test och jämförelse har en nivå: Enkel, Mellan eller Expert (`niva` i frontmatter, orden i `src/lib/niva.ts`). I artikelhuvudet står nivån i samma etikett som typen, efter en mittpunkt (U+00B7): "Kunskap · Expert", "Test · Mellan", "Jämförelse · Enkel". Samma stil, samma blyerts, ingen färg, ingen ram, ingen ikon; nivån är en upplysning, inte ett betyg, och "Enkel" får inte se ut som något sämre än "Expert". På hubsidan grupperas listan "Alla sidor i ..." under tre H3 med samma ord, i ordningen Enkel, Mellan, Expert, och varje rad har etiketten "Typ · Nivå". Det är hubbens filter utan JavaScript: tre listor i HTML, inget dragspel, inga flikar.

Sedan 2026-09-16 visas nivån på **alla artikelkort**, även på startsidan: etiketten är "Typ · Nivå" ("Köpguide · Mellan", "Kunskap · Expert"). Det är den enda platsen där en hemmafixare och ett proffs ser vilka sidor som är för dem utan att klicka. Kategorikort har ingen nivå, de har etiketten "Bäst i test". I "Läs vidare" och i kategorisidans listor visas nivån fortfarande inte.

### Artikelkort

**Syfte.** Bära en artikel, ett test, en jämförelse eller en kategorisida i ett rutnät. `src/components/ui/Artikelkort.astro`.

**Innehåll.** Pappersrutan med bilden överst, etiketten "Typ · Nivå", kortrubriken (Zilla Slab 600, semantiskt H3 eller H2 efter sammanhang), beskrivningen i högst tre rader och en metarad som trycks mot kortets botten: datumet, på startsidan med pelarens korta namn före, eller fri text som "13 granskade". Vilka delar som visas beror på var kortet står: startsidans rutnät visar etikett, rubrik och datum; hubbens grupper etikett, rubrik och beskrivning; Läs vidare etiketten (bara typen) och rubriken.

**Mått.** Ett kort (avsnitt 4): `papper`, 1 px `linje`, radie `sm`, `shadow-kort`, och `shadow-kort-hover` vid hover. Pappersrutan är `ruta` med 12 px luft runt bilden och 1 px `linje` under, bilden 5:3 i `object-fit: contain`, alltid med `width` och `height`, `loading="lazy"` utom när kortet är sidans LCP, `decoding="async"`. Textdelen har 16 px innermarginal på mobil och 20 från 640 px, 6 px mellan etikett, rubrik och beskrivning. Rutnätet har 16 px mellan korten på mobil och 20 från 1024.

**Varianter.** *standard* (bild överst, text under). *stor*: från 1024 px två spalter, pappersrutan till vänster (20 px luft, 1 px `linje` till höger) och texten till höger med 36 px innermarginal, lodrätt centrerad, etiketten i `penna`, rubriken i 24/32 px och beskrivningen i ingress-storlek; startsidan delar 1/1, hubben 1/1,4. På mobil står bilden överst. *kompakt på mobil*: under 640 px pappersrutan som en 120 × 72-ruta till vänster, ingen beskrivning; startsidans fyra mindre kort.

**Utan illustration.** Pappersrutan fylls av det blanka bladet: `ruta` med linjerna från `.linjerat` och pelarens ikon i 40 px `blyerts-2` mitt på. Aldrig en grå ruta, aldrig ett stockfoto, aldrig en packshot.

**Tester och jämförelser** (beslut 2026-09-29). Kortets bild är frontmatterns `bild`, som pekar på en av sidans egna skisser. Produktbilden är leverantörens och blir aldrig kortets bild. Saknar sidan skiss visas det blanka bladet.

**Kategorikort.** Artikelkort med etiketten "Granskad på datablad" (till 2026-10-02 "Bäst i test"; inget är testat), kategorins namn som rubrik och dess `description`. Bladet bär två rader satta som räknarens svar: "Mitt val" i etikett-stil med produktnamnet i kortrubrik, och antalet granskade som ett stort tal med ordet "granskade" efter. Ingen packshot.

**Hover, fokus, klickyta.** Hela kortet är klickbart genom att rubrikens länk får en `::after` som täcker kortet (`.kortlank`), men bara rubriken är länk för skärmläsaren. Hover byter skuggans färg och ger rubriken 2 px understrykning i penna, `transition` 150 ms på färgerna, avstängd vid `prefers-reduced-motion`. Fokus ger hela kortet `outline: 3px solid penna` via `:has`. Klickytan är alltid över 44 px hög.

### Ämneskort (Ämnesrad)

**Syfte.** Ta läsaren från startsidan till ett ämne med ett klick och visa sajtens karta på en skärm. `src/components/ui/Amnesrad.astro`, bara på startsidan.

**Innehåll.** Den runda symbolen (avsnitt 6, Symbol) med pelarikonen, och bredvid den, uppifrån: etiketten "{grupp} · {n} sidor" i etikett-stil, pelarens hela namn (`namn`) i Zilla Slab 22 px, och pelarens `rad` i 15 px blyerts-2. Från 1024 px står symbolen till vänster om texten med 16 px emellan; under 1024 px står den överst. 20 px innermarginal på desktop, 16 på mobil. Ingen bild, ingen länklista: kortet är en dörr.

**Publicerad pelare.** Hubben finns och är inte utkast. Kortet är ett kort (avsnitt 4) med `.kortlank` på namnet, hover och fokus som Artikelkortet. Den största pelaren (flest publicerade sidor) tar två kolumner, har ytan `ruta` och etikettens tillägg ur textlistan.

**Pelare utan hub.** Kortet står kvar, dämpat: ytan `papper-2`, ingen skugga, symbolen i `papper` med ikonen i `blyerts-2`, namnet i `blyerts-2`, ingen länk, etiketten "{grupp} · Kommer".

### Chip

**Syfte.** En liten sak man kan ta i: ett ämne i ämnesraden, ett ankare till en grupp på hubben och räkna-indexet, ett förval i räknaren, en granne till hubben. Och, i gult, en etikett som säger en produkts roll ("Kallt enkelgarage", "Källare 15 grader"), som inte är en länk.

**Utseende.** `.chip`: `inline-flex`, `items-center`, 6 px mellan ikon och text, minst 44 px hög (skissen ritar 36; klickytan går före), 14 px vågrätt, radie `full`, 1 px `blyerts-2`-ram, ytan `papper-2` (i ämnesraden och på banden `papper`), text `blyerts` 14 px utan understrykning. Hover: ramen blir `blyerts` och texten får understrykning i penna. Fokus: den globala ringen. Aktuell (`aria-current`): ytan `tumstock` och ramen `tumstock` i ämnesraden; ytan `blyerts` och texten `papper` för ett valt förval i räknaren. `.chip-gul` (etiketten): ytan `tumstock`, ingen ram, 13 px fetstil, 32 px hög, 12 px vågrätt, aldrig en länk.

### Knapp

**Syfte.** En huvudhandling: gå till räknaren, räkna ut, gå till butiken.

**Utseende.** `.knapp` (kontur): `inline-flex`, 10 px mellan ikon och text, minst 48 px hög, 22 px vågrätt, 2 px ram i `penna`, radie `md`, text `penna` 17 px fetstil, ingen understrykning, genomskinlig. `.knapp-fylld`: ytan och ramen `penna`, texten `papper`. Hover på båda: ytan och ramen `blyerts`, texten `papper`. Räknarens "Räkna ut" är fylld och 52 px hög. En ikon i knappen är 22 px i knappens textfärg. Två fyllda knappar står aldrig bredvid varandra; startsidans knapprad har en fylld och två konturer. Knappar är `<a>` när de leder någonstans och `<button type="submit">` i formulär.

### Symbol och steg

**Symbol** (`.symbol`). En rund stämpel i `tumstock`, 48 px, med en ikon ur spriten i 26 px `blyerts` mitt i. Bara i ämneskortet.

**Steg** (`.steg`). En siffra i en rund stämpel i `tumstock`, 34 px (26 i räknarens råd), 15 px fetstil `blyerts` (13 px i 26-varianten). Används i en numrerad lista (`<ol>`): hubbens Läs i ordning, räknarens Det här gör du. Siffran är listans, inte text i HTML: `counter()` i `::before`, så att skärmläsaren läser listan som en lista.

### Porträttplats och byline

**Porträttplats.** Ingen bild av Christian finns. Platsen är en cirkel i `papper-2` med 1 px `linje` och ikonen `penna` i `blyerts` mitt i: 40 px med en 22 px ikon i bylinen, 120 px med en 64 px ikon i startsidans Så jobbar jag. När ett foto finns ersätter det ikonen i samma cirkel, `object-fit: cover`. Cirkeln är det enda runda porträttet; den ersätter författarrutans kvadrat.

**Byline.** En rad i 15 px blyerts-2 under H1: porträttplatsen i 40 px, 14 px luft, och "**Christian** · Publicerad {datum}, uppdaterad {datum} · {n} min", där datumen är exakt `datePublished` och `dateModified` i Article-markupen och namnet är en länk till författarsidan (det är Person-signalen, SEO-villkor 2026-10-02) i `blyerts` fetstil och läsminuterna räknas i bygget ur brödtextens ord (200 ord per minut, avrundat uppåt). Bylinen ersätter författarrutan längst ner.

### Kompakt lista

**Syfte.** Många poster av samma slag där korten skulle bli för långa: startsidans övriga räknare, räkna-indexets stora grupper, hubbens platslista.

**Utseende.** Raderna har 14 px lodrät och 16 px vågrät innermarginal och 1 px `linje` mellan sig (ovanför varje rad utom den första i en spalt). Två varianter. *I kort* (startsidan, platslistan): listan står i ett kort med 8 px innermarginal, raden har en etikett i en fast spalt till vänster (88 px på startsidan; platslistans "Typ · Nivå" står ovanför på mobil och i en spalt på 12 rem från 640 px) och namnet; hela raden är en länk, och hover ger raden `papper-2`. *Utan kort* (räkna-indexet): raderna står direkt på papperet med 1 px `linje` under varje rad, namnet i fetstil till vänster och svarets form i 14 px blyerts-2 till höger, och två spalter från 1024 px med 40 px emellan. Raden är minst 44 px hög.

### Säsongsraden

**Syfte.** Startsidan ska säga vad som är aktuellt den här månaden utan att någon behöver komma ihåg att byta det.

**Data.** `src/lib/sasong.ts`: en post per månad, 1 till 12, med `fras` (en mening i Christians röst) och `href` (en intern adress) och valfri `lank` (länkens text, ett utsnitt ur frasen). Bygget väljer månaden ur byggdatumet i svensk tid, så sidan byts vid första bygget i en ny månad. Texterna skrivs av hantverkaren; adresserna kontrolleras av `npm run kontrollera` som andra interna länkar.

**Utseende.** En rad i heroblocket under stycket, i brödtextstorlek, med länken i löptextens stil. Säsongsetiketten ovanför H1 ("Just nu, oktober") och rubriken "Börja här i oktober" tar månadsnamnet ur samma val.

### Filterrad och Paginering

**Filterrad** (`Filterrad.astro`, bara på `/guider/`). Tre rader med etikett och länkar, utseende enligt avsnitt 5.10. Ingen JavaScript.

**Paginering** (`Paginering.astro`). "Sida n av m" och länkarna Föregående sida och Nästa sida. Renderas inte när det bara finns en sida.

### Köpknapp

**Syfte.** Enda vägen till butiken. Sköter `/go/[slug]`, `rel="sponsored nofollow"`, klicklogg med `modul` och `position`.

**Innehåll.** Knappen med texten "Se pris hos {butik}" (butikens namn från databasen) och bredvid den, eller under den på mobil, priset i 19 px fetstil tabellsiffror och under priset raden "Annonslänk · pris {datum}" i 14 px blyerts-2, med "· restnoterad" eller "· slut i lager" sist när lagret säger det. Datumet är erbjudandets `uppdaterad`. Ordet är "Annonslänk", inte "Reklamlänk".

**Utseende.** `.knapp-fylld` (avsnitt 6, Knapp), full bredd inuti ett kort på mobil, ingen ikon. Från 640 px står knappen och prisblocket på en rad med 16 px emellan.

**Tillstånd.**

| Tillstånd | Utseende |
|---|---|
| Normal | Som ovan |
| Hover, aktiv | Ytan och ramen `blyerts`, texten `papper` |
| Fokus | Global fokusring |
| Slut i lager | Konturknapp, texten "Slut i lager hos {butik}", priset i blyerts-2 med "senast" framför. Länken går ändå till butiken |
| Pris saknas | "Se pris hos {butik}", inget pris, raden "Annonslänk" utan datum |
| Flera butiker (fas 2) | En knapp per butik, billigast först, bara den första fylld |

Lagerstatus visas bara när den är negativ. Ett grönt "i lager" på varje kort ser ut som en butik. Affiliateagenten godkänner varje ändring av knappen och prisraden.

### Produktkort

**Syfte.** Visa en produkt med tillräckligt för ett beslut, och en väg vidare.

**Innehåll, i ordning.** Bildrutan, etikett-chip om redaktören satt en (`.chip-gul`, "Kallt enkelgarage"), märke och modell i Zilla Slab 24 px (H3), tre fakta ur produktens `specs`, svagheten, och köpknappen med pris och datum. Länken "Läs testet" efter köpknappen när test finns.

**Tre fakta.** Vilka tre specs som visas bestäms per kategori i en karta i koden (`src/lib/produktfakta.ts`), i den ordning läsaren väljer på: för luftavfuktare lägsta arbetstemperatur, kapacitet i liter per dygn med villkoret och effekt i watt; för krysslaser räckvidd, noggrannhet och lasrarnas antal och färg. Varje faktum är värdet i 17 px fetstil `blyerts` med etiketten i 14 px blyerts-2 under, tre i bredd från 640 px och tre under varandra på mobil. Saknas ett värde visas de som finns.

**Svagheten.** En mening i 15 px blyerts-2 om det som talar emot produkten, ur kategorifilens val (`svaghet`) eller testets "Köp inte om", följd av meningen om att det är en granskning när det är en. Redaktörens text.

**Utseende.** Ett kort (avsnitt 4) med 22 till 24 px innermarginal. Från 640 px två spalter: bildrutan i 150 px till vänster och texten till höger, 22 px emellan. Bildrutan är `vit` med 1 px `linje`, radie `sm`, 150 px hög, bilden `object-fit: contain`; utan lokal bild står märkets namn i etikett-stil i rutan. Mobil: bildrutan 96 × 72 till vänster om namnet, faktan och resten under i full bredd. Rekommenderad (bland valen): ytan `ruta` i stället för `papper`. Slut i lager och pris saknas följer köpknappens tillstånd; kortet i övrigt är oförändrat. Databas saknas: kortet med `Produkt: {slug}` i etikett-stil och raden "Produktdata saknas i bygget", ingen knapp.

Prishistorik (fas 2) är ett litet linjediagram i kortet, 90 dagar, lägsta pris markerat med gul markering, inline-SVG utan hover.

### Det här behöver du

**Syfte.** Projektguidens lista över allt läsaren behöver, sist på sidan när hon läst färdigt. Modulen med flest klick på en projektguide.

**Innehåll.** Rubrik "Det här behöver du" som H2 med pennstreck. Två H3, "Verktyg" och "Material". Under varje H3 rader, fem till åtta totalt på sidan. En verktygsrad har namn (länk till testet om det finns, annars fet text), en mening om varför just den ("en 18-voltsmaskin orkar hela trallen på en laddning"), pris i blyerts 700, köpknapp och den finstilta raden "Annonslänk · pris 12 sep". En materialrad har namn, en mening och mängd om den är känd ("28 mm tryckimpregnerad trall, 46 löpmeter"), ingen länk, inget pris. Ingen tabell, inga produktbilder, inga kompakta kort.

**Utseende.** Rader med 1 px linje emellan, 16 px lodrät innermarginal. Mobil: namn och mening staplade, sedan pris och köpknapp på en rad (pris till vänster, knapp i resten av bredden). Desktop: namn och mening till vänster (två tredjedelar), pris och knapp till höger (en tredjedel), lodrätt centrerat. Materialraderna har samma anatomi utan högerdelen, så att listan läses som en lista och inte som två olika komponenter.

**Tillstånd.** Verktygsrad utan pris visar knappens "Se pris"-tillstånd. Verktygsrad utan produkt i databasen (bygget varnar) renderas som materialrad. Modulen renderas inte om den har färre än tre rader.

### Verktygskort

**Syfte.** Länken till en räknare: från startsidan, hubbens Räkna, räkna-indexet, artikelns sidospalt och brödtext, och kategorisidans spalt. En sida har aldrig två.

**Varianter.**

- *bild* (standard, i brödtext, hubbens Räkna, räkna-indexet): ett kort med räknarens varumärkesbild till vänster (skissen när varumärkesbild saknas), 120 px bred på mobil och 140 från 1024 px, och till höger etiketten "Räkna själv · {pelare}", namnet i kortrubrik som länk (`.kortlank`, hela kortet klickbart), registrets `rad` i 15 px blyerts-2 och "Till räknaren" i fetstil `penna` som sista rad. 20 px mellan bild och text, 22 till 24 px innermarginal. Bilden har `alt=""`.
- *tal* (startsidan): ett kort utan bild med etiketten (pelarens korta namn), namnet i kortrubrik som länk, och räknarens tal vid standardvärdena som bild: talet med sin enhet ("12 liter per dygn", "kl 16", ett spann när sidan visar ett spann) i Zilla Slab 48 px med villkoret bredvid i 14 px blyerts-2 ("vid 20 grader och 50 %"). Talet och villkoret kommer från `src/lib/kalkyl/korttal.ts`; talet räknas av räknarens egen formel i bygget och är samma tal som räknarsidan visar utan adress. En räknare utan tal vid standardvärdena (en ja-eller-nej-fråga, en blankett) visar i stället svarets form ur registret (`svar`) i Zilla Slab 26 px.
- *text* (`/amnen/`, där en spalt bär många räknare): kortet utan bild, med etiketten, namnet och raden. Varumärkesbilden hade kostat omkring 200 byte per kort på en sida med över trettio.
- *liten* (artikelns och kategorisidans sidospalt): ett kort med bilden i 72 px till vänster, etiketten "Räkna själv" och namnet i Zilla Slab 18 px. Ingen rad, ingen "Till räknaren".

Ingen köpknapp, inget pris. I ett rutnät sköter rutnätet avståndet; i brödtext har kortet 32 px ovanför och under.

### Inbäddad räknare

**Syfte.** Räknarens riktiga formulär på plats i en artikel, där läsaren just fått veta vad talet betyder, och som "Prova direkt" på räkna-indexet. `<Kalkylator namn="..." />`.

**Utseende.** Ett block (avsnitt 4) med 22 till 26 px innermarginal, 28 px ovanför och under i brödtext. Överst en rad med etiketten "Räkna själv" i `penna` till vänster och räknarens namn som länk till höger (på mobil under), sedan formuläret i kompakt form (fälten tre i bredd från 640 px när de är tal, annars staplade), och sist knappen "Räkna ut" som fylld knapp med fotraden bredvid i 14 px blyerts-2. Formuläret skickas med GET till räknarsidan. Den handskrivna raden i skissen byggs inte.

### Formulärfält

**Utseende.** Fältet är `vit` med 1 px `blyerts-2`-ram, radie `sm`, 48 till 50 px högt, 12 px vågrätt, 18 till 19 px text i tabellsiffror. Enheten står inne i fältet till höger i 15 px blyerts-2 (en `<span>` i fältets ram, `aria-hidden`, och enheten finns också i etiketten för skärmläsaren), och fältet har lika mycket luft till höger som enheten tar. Etiketten står ovanför i 15 px fetstil med 6 px luft. Hjälpraden står under fältet i 14 px blyerts-2 och är kopplad med `aria-describedby`. Fel: ramen i `varning` och felraden under i `varning` 14 px. `inputmode="decimal"`, decimalkomma godtas.

**Radioknappar som knappar.** Varje alternativ är en `<label>` som ser ut som en knapp: minst 46 px hög, 14 px vågrätt, `vit`, 1 px `blyerts-2`-ram, radie `sm`, 15 px text, med radioknappen synlig till vänster i 18 px och `accent-color: penna`. Den valda får 2 px ram i `blyerts` och fetstil (`:has(:checked)`). Alternativen står i rad och delar bredden när de ryms, annars under varandra. Fokus: den globala ringen runt hela etiketten (`:has(:focus-visible)`). Legenden är en etikett ovanför.

**Kryssruta.** Samma etikett som en radioknapp, med kryssrutan i stället.

### Mätare

**Syfte.** Visa hur nära läsaren är en gräns när räknaren har en: luften vid ytan mot mögelgränsen 75 procent (daggpunkt), väggens U-värde mot kravet 0,13 (U-värde), maskinens kapacitet mot behovet i liter (avfuktare).

**Utseende.** I svarsytan under beskedet. En rad i 14 px blyerts-2 med vad som mäts till vänster och värdet i fetstil `blyerts` följt av "· gränsen {värde}" till höger. Under den stapeln: 14 px hög, radie `full`, ytan `papper` med 1 px `linje`, fyllningen i `tumstock` från vänster till värdet (radie `full` på vänsterkanten), och gränsen som ett lodrätt streck i `penna`, 3 px brett och 6 px över och under stapeln. Skalan går från 0 till gränsen gånger 1,33, så att gränsen står vid 75 procent av bredden, och fyllningen stannar vid kanten när värdet är större. Stapeln är `role="img"` med en `aria-label` som säger raden ovanför i ord; raden ovanför bär informationen, och färgen ensam säger ingenting. Ingen handskrift vid strecket. Statiskt, ingen animation.

### Delningsrad

**Syfte.** Ge läsaren adressen med hennes värden, så att hon kan skicka svaret till den som ska göra jobbet.

**Utseende.** En rad med 1 px streckad `linje`-ram, radie `sm`, 12 px lodrätt och 16 px vågrätt, 14 px blyerts-2: ikonen för länk i 18 px, adressen utan `https://` som text med `user-select: all` (ett klick markerar hela), avklippt med ellips på en rad, och bredvid den gränssnittstexten om att markera och kopiera. Ingen kopiera-knapp: kopiering kräver JavaScript. Adressen är den kanoniska med räknarens tolkade värden, samma som förut stod i ett skrivskyddat fält.

### Gör inte det här

**Syfte.** Det dyra misstaget i just läsarens läge, i räknaren. En räknare har högst en.

**Utseende.** Färgad yta med 18 px lodrät och 22 px vågrät innermarginal: ikonen `stang` i en cirkel (eller `varning`) i 26 px `varning` till vänster, och texten till höger med "Gör inte det här." i fetstil som första ord i stycket. Står sist i spalten Därför blev svaret så.

### Jämförelsetabell

**Syfte.** Alla produkter i en kategori mot samma mått, från databasen.

**Innehåll.** Kolumner är produkter, rader är egenskaper. Första raden: bild 4:3 (liten, 80 px bred, vit ruta), märke och modell, etikett om redaktören satt en, och "Test" eller "Granskning". Sedan en rad per spec ur kategorifilen, i den ordning kategorifilen anger. Sista raden: pris och köpknapp (kompakt, full bredd i cellen) med finstilt rad. Enheter står i radrubriken ("Kapacitet, l/dygn"), inte i varje cell. Bästa värdet i varje rad markeras med fetstil och `ok`-färg, sämsta markeras inte. Saknat värde skrivs "ej angivet" i blyerts-2.

**Utseende.** 1 px linje runt varje cell, tabellhuvud (första kolumnen) i papper-2. Celler 12 px innermarginal, 15 px text, tabellsiffror. Rekommenderade produkters kolumner har papper-2 som bakgrund. Ingen gul markering i tabeller utom i omdömestabellen på testsidor, där ett värde får den.

**Mobil.** Tabellen scrollar i sidled inom en behållare. Första kolumnen (egenskapsnamn) är `position: sticky; left: 0` med papper-2 och en 1 px linje till höger så att den syns som fast. Varje produktkolumn är 150 px bred. Behållarens högerkant har en 24 px tonad övergång till papper som visar att det finns mer, och ovanför tabellen står "Dra i sidled för att se alla" i 14 px blyerts-2. Max fem produkter i en inline-tabell i löptext; kategorisidans tabell får ha fler.

**Desktop.** Full sidbredd. Upp till sex kolumner utan scroll, därefter scroll i sidled på samma sätt.

**Tillstånd.** Med och utan priser (prisraden utgår om ingen produkt har pris). Med och utan köpknappar (jämförelser i kunskapsartiklar kan sakna dem). Färre än två produkter: komponenten renderar inte, bygget varnar.

### Tabell i brödtext

**Syfte.** Siffror som hör till texten och inte kommer ur produktdatabasen: daggpunkter, skruvlängder, kapacitet mot yta. Skrivs som en vanlig markdown-tabell i MDX; Sätteri-pluginet i `astro.config.mjs` lägger omslaget `.brodtabell-block` runt den.

**Utseende.** Samma yta som jämförelsetabellen: 1 px linje runt varje cell, tabellhuvud i papper-2, 12 px innermarginal, 14 px text på mobil och 15 px från lg, tabellsiffror.

**Mobil.** Celler med högst 16 tecken hålls ihop på en rad (`.kort-cell`, sätts vid bygget), längre celler bryts och får minst 4 rem spaltbredd. Gränsen är satt så att ett tal med enhet ("1 × 12,5 mm") aldrig bryts mellan tal och enhet medan en kort mening ("Bygglov krävs alltid") bryts som vanlig text. Har tabellen fyra kolumner eller fler släpps nowrap på alla celler (`.brodtabell:has(tr > *:nth-child(4)) .kort-cell`): fyra celler som inte får brytas blir bredare än 343 px hur låg minsta spaltbredd som än sätts, och en kolumn läsaren aldrig ser är värre än ett brutet mätvärde. Kolumnrubriker bryts alltid, också korta: `white-space: normal`, `hyphens: auto` (`<html>` har `lang="sv"`) och 3 rem minsta spaltbredd. Räcker bredden ändå inte scrollar tabellen i sin behållare, aldrig sidan.

Uppmätt i Edge på 343 px (375 px minus marginalerna), 2026-09-17: två kolumner ryms alltid, också med celler på 20 tecken. Fyra kolumner ryms med celler upp till 20 tecken, eftersom nowrap är släppt där. Tre kolumner ryms när cellerna är högst tio tecken eller över sexton; däremellan hålls varje cell ihop på en rad och tabellen scrollar med ledtext framme. Skribenten som vill ha en trekolumnstabell utan scroll håller cellerna korta.

**Ledtext och tonad kant.** "Dra i sidled för att se hela tabellen" (jämförelsetabellen: "… se alla"), 14 px blyerts-2 över tabellen, och den tonade 24 px-övergången på behållarens högerkant. Båda visas **bara när tabellen faktiskt är bredare än ytan**, på vilken skärmbredd som helst, och kanten tonar bort när läsaren har dragit tabellen till slutet. Det avgörs i CSS utan JavaScript: en scroll-tidslinje på `.tabell-behallare` med `timeline-scope` på blocket (`.brodtabell-block` från pluginet, `.tabell-block` i Tabellyta och Jamforelsetabell). När inget går att scrolla är tidslinjen inaktiv, och då slår animationerna aldrig till. Ledtexten döljs med visibility och höjd 0, eftersom Chromium inte animerar ett element som har `display: none`. En tabell som är några pixlar för bred scrollar på riktigt och får ledtexten; rätta tabellen i stället för villkoret. Webbläsare utan scroll-tidslinjer (Firefox i dag) får reserven, alltså reglerna som gällde före 2026-09-29: ledtexten under lg från tre kolumner, kanten under lg, och jämförelsetabellen alltid. Spec: `docs/briefer/spec-tabellyta-overflod-2026-09-29.md`.

**Desktop.** I artikelmallen får tabellen växa ut i mellanrummet mot innehållsförteckningen (max läsbredd + 3 rem), aldrig över förteckningen. En tabell i en faktaruta stannar i rutan.

**Redaktionellt.** Kolumnrubriken är högst två ord plus enhet ("Vatten, g/m³", "Maxyta, kvm"), en cell bär ett värde, och källraden under tabellen sätts med `<p class="tabellfot">`. Se STILGUIDE.md.

**Ram runt cellerna** (2026-10-02). Brödtabellerna, antagandetabellerna och jämförelsetabellen har 1 px `linje` runt varje cell, inte bara mellan raderna, med tabellhuvudet i `papper-2` och sifferkolumnerna högerställda när komponenten vet att de är tal (antagandetabellen, jämförelsetabellen). Ett markerat värde, som läsarens egen cell i daggpunktstabellen, får ytan `tumstock` och fetstil.

### Faktaruta och Kort svar

**Syfte.** Lyfta något som ska läsas även av den som skummar.

**Varianter.**

- *Kort svar* (`Kortsvarstext` i artiklar, `variant="kortsvar"` där den skrivs i MDX). Färgad yta (avsnitt 4) med 24 px lodrät och 28 px vågrät innermarginal, 10 px mellan delarna: etiketten "Kort svar", första stycket i 19 px, följande stycken i 17 px, nyckeltalet markerat, och i en köpguide valen som gula chips sist. En gång per sida, högst upp i texten.
- *Fakta* (standard). Ett block (avsnitt 4) med valfri rubrik i H3-stil och en till tre stycken, eller en kort lista när innehållet är en lista. Ingen markering.
- *Köp om / Köp inte om.* Färgad yta med två delar under varsin etikett, staplade på mobil och i två spalter från 1024 px.

**Tillstånd.** Statisk. Innehåller aldrig köpknappar eller produktkort.

### Varning

**Syfte.** Säkerhet och dyra misstag. Inte för "tänk på att".

**Innehåll.** Ordet "Varning" i etikett-stil, färg varning, följt av en till två meningar. Rubriken kan bytas mot något specifikt ("Kräver jordfelsbrytare").

**Utseende.** 4 px linje till vänster i varning, ingen bakgrund, ingen ikon, 16 px innermarginal. Varningen ligger inte på linjerat papper, den ska avvika från anteckningarna runt omkring. Det är det enda blocket med linje till vänster, så läsaren lär sig att just det mönstret betyder varning.

**Tillstånd.** Statisk.

### Reklammärkning

**Syfte.** Lagkrav (marknadsföringslagen) och förtroende. Läsaren ska förstå affären på tre sekunder.

**Innehåll.** Formuleringen i `docs/AFFILIATE.md` avsnitt 5, ordagrant: "Reklam." i fetstil först, sedan meningen om annonslänkarna och provisionen, och länken "Så tjänar jag pengar" till `/om/sa-tjanar-vi-pengar/`. Butiksnamnet hämtas från databasen. Ordet "Reklam" är Konsumentverkets ord och står först.

**Utseende.** Ett smalt band i full bredd direkt under sidhuvudet: `papper-2`, 1 px `linje` under, 10 px lodrätt, texten i sidbredd, 14 px `blyerts` (inte blyerts-2, det ska vara läsbart). Från 1024 px står länken längst till höger på samma rad; på mobil bryts raden och länken står sist i texten. Inte stängbart, inget kryss, ingen ikon.

**Tillstånd.** Visas på alla sidor där en köpknapp eller jämförelsetabell med köpknappar renderas. Layouten avgör det, inte innehållsfilen. Köpknappen har dessutom sin egen rad "Annonslänk · pris [datum]", och sidospaltens produktlista sin rad "Annonslänkar. Priser lästa [datum].", så märkningen finns ovanför första länken och vid varje länk.

### Frågor och svar

`src/components/ui/Faq.astro`, tillagd 2026-09-17, klädd om 2026-10-02.

**Syfte.** De tre eller fyra frågor läsaren fortfarande har när sidan är läst. Den upprepar inte Kort svar.

**Innehåll.** H2 med pennstreck, som standard "Vanliga frågor", sedan en `<details>` per fråga. Svaret är två till fyra meningar, och en hänvisning vidare är en egen mening med en länk.

**Utseende.** 1 px `linje` ovanför varje fråga och under den sista, 14 px lodrätt, ingen ram runt, ingen yta. Frågan är `<summary>` i fetstil `blyerts` med 44 px klickhöjd, utan webbläsarens triangel, och tecknet "+" i `penna` längst till höger (`::after`), som blir "−" när raden är öppen (`details[open]`). Svaret är brödtext i blyerts-2 med 10 px luft ovanför. Alla frågor är stängda när sidan laddas; svaret står i HTML:en och indexeras ändå.

**Markup.** FAQPage i ett `<script type="application/ld+json">` på plats, med ordagrant samma text som på skärmen. Högst en per sida, kontrollerat av `npm run kontrollera`.

### Innehållsförteckning

**Syfte.** Skumläsning och hopp på långa sidor. Bygger på H2 i innehållet.

**Mobil.** `<details>` med `<summary>` "Innehåll, {n} avsnitt", stängd som standard, i ett kort. Öppnad visas listan med 44 px per rad.

**Desktop.** Från 1024 px överst i sidospalten, i ett kort med 18 px lodrät och 22 px vågrät innermarginal: etiketten "Innehåll, {n} avsnitt" och listan med rubrikerna som länkar i 15 px `blyerts` utan understrykning, 8 px lodrätt per rad, minst 44 px klickhöjd på mobil, med en 1 px `linje` till vänster om listan. Hover: texten blir `penna`. Ingen aktiv rad: att markera var läsaren är kräver JavaScript.

**Tillstånd.** Färre än tre H2: renderas inte.

### Källor

H2 "Källor" i Zilla Slab 22 px utan pennstreck, 40 px ovanför, och en numrerad lista (`<ol>`) i 15 px blyerts-2 med radavstånd 1,7, en källa per rad med länk när den har adress och datumet då den lästes. Står sist i textspalten.

### Läs vidare

Ett band efter spalterna (artikel, kategorisida) eller en sektion (räknare): H2 i 26 px med pennstreck och tre Artikelkort med pappersruta, etiketten (bara typen) och rubriken, tre i rad från 1024 px och staplade på mobil. Korten väljs som förut: kategorisidan om sidan har en kategori, och de senaste andra sidorna i samma pelare.

## 7. Bilder

I fas 1 kommer nästan alla produktbilder från leverantören. De är rena packshots mot vit bakgrund, likadana som på tjugo andra sajter. Sajtens egna bilder är skisserna, och de är huvudbilder tills egna foton finns.

### Vad vi gör med leverantörsbilder

- **De blir små.** En packshot är aldrig en huvudbild. Den ligger i produktkortets bildruta (150 px på desktop, 96 × 72 på mobil), i tabellhuvud (80 px) och i omdömesblocket. Aldrig i full bredd, aldrig som hero.
- **Samma ram överallt.** Alla produktbilder ligger i en ruta med 1 px linje-ram och radie `sm`, med bilden `object-fit: contain` och 8 px luft runt. Rutans bakgrund är `vit`, som formulärfältens. Att rutan är vit mot det varma papperet är avsiktligt: bilden ser ut som ett inklistrat urklipp, inte som en produktsida.
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
- **Storlek.** Den publicerade filen är under 40 kB. En kB är 1 024 byte, i den här gränsen, i varje specs egen gräns och i HTML-budgeten, eftersom det är vad `npm run illustrationer`, `scripts/budget-html.mjs` och PowerShells `1kb` skriver ut (beslut 2026-09-29). Gränsen 40 kB är alltså 40 960 byte, och en spec som säger 30 kB menar 30 720 byte.

Altanen ritas som snickarens egen skiss med mått på reglarna, taket som en takstol med vinkeln noterad, garaget med fläkten och pilar för luftflödet. Chefredaktören beställer, designansvarig ritar eller specar, och varje ny illustration granskas mot listan ovan.

### Illustrationer för verktygen

Varje kalkylator i `src/lib/kalkyl/register.ts` har en egen skiss, ritad 2026-09-17. Den ligger i en egen mapp, `src/assets/illustrationer-kallor/rakna/[slug].svg` med den konverterade i `src/assets/illustrationer/rakna/[slug].svg`, och heter samma sak som verktyget i registret. Mappen är inte en pelare utan verktygen: elkostnadskalkylatorn hör till två pelare och avfuktarkalkylatorn till en kategori, så pelarmappen hade inte räckt.

**Sidhuvudet byter stil, beslutat 2026-09-19.** Christian vill att räknarnas bild ovanför vecket håller samma stil som symbolen och startsidans hero. Därför får varje verktyg en andra bild, en varumärkesillustration i `src/assets/illustrationer/rakna/varumarke/[slug].svg`, 600 × 360 så att den passar samma 7/5-rutnät och samma gallerikort som skissen. Den följer reglerna under Varumärkesillustrationen ovan utan undantag: logotypens stil med tumstocken som accent eller inte alls, ett motiv som förstås på en sekund, ingen text och inga läsbara tal, ett pennstreck, transparent bakgrund, inga pyttedetaljer, motivet fyller ytan. Tre erfarenheter från dräneringsbilden 2026-09-19 gäller nästa: det sidan handlar om ska vara den största eller näst största formen i bilden och gå att känna igen ensamt vid 343 px; när bilden visar mark ska markytans nivå vara entydig och densamma på bildens båda sidor, så att en grop är ett hål och inte en backe; och marken skrafferas med skissernas värden (10 px streck, 45 grader, blyerts-2 1,4 px) men glesare, 26 px mellan strecken, eftersom ytan är större. En fjärde från innerväggsbilden samma dag: i ren konturteckning utan fyllning läses en sluten rektangel delad av streck alltid som en panel, aldrig som en stomme, så delarna ska synas ligga över varandra och löpa förbi eller vara kapade, och det som ska kännas igen ska ha sitt igenkänningstecken kvar, som spåret i skruvhuvudet. Två från altanbilderna: kravet på fyllnad är i praktiken ett krav på proportion, eftersom skalningen är enhetlig, så motivets egen bbox ska ha kvoten 1,72 ± 0,05 (bredd genom höjd) och höjden byggs med innehåll som djupa plintar eller öppet utrymme, aldrig med tom mark; och ett mått måste skilja sig i form från det bärverk det står bland, smalare, med runda ändar och lätt lutning, annars läses tumstocken som en stolpe bland stolpar. Behöver ett föremål ligga framför ett annat bryts linjerna bakom exakt där det går fram, som skruven i heron, aldrig med en pappersfylld yta. Den har ingen källa under `illustrationer-kallor/` eftersom den saknar `<text>`. Sedan 2026-10-02 står varumärkesbilden i Verktygskortet (variant bild och liten) och på räkna-indexet, och räknarsidans huvud har ingen bild (5.8). Skissen står i kortet Så räknar jag, där den förklarar räkningen med sina mått, och den är fortfarande delningsbilden, eftersom nyckeltalet är kroken när någon delar länken. Saknar ett verktyg varumärkesbild visar kortet skissen. Dränering var prototypen. Christian har sett den och sagt ja, så de andra tio ritas i dag, och alla elva verktygssidor är sedan 2026-09-19 kopplade till mönstret: varumärkesbilden i sidhuvudet när den finns, skissen som figur i "Så räknar vi" (på gipsplugg och bygglov-altan heter avsnittet "Så bedömer vi").

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

Det här byggs inte, oavsett vem som ber om det. Listan skrevs om 2026-10-02 med skisserna: hård skugga på kort, chips, runda stämplar och principerna på startsidan blev tillåtna, med de gränser som står här.

- Hero med bakgrundsbild och centrerad text. Text på bild.
- Tre kolumner med ikon, rubrik och en rad som säger något om sajten ("Snabbt", "Tryggt", "Oberoende"). Undantaget är startsidans Så jobbar jag (5.1): tre arbetssätt som går att kontrollera på sidorna, en gång, längst ner. Lika kort i rad är tillåtet när korten är samma slags sak: tre jämförbara val, artiklar i ett rutnät, ämneskorten, räknarnas talkort.
- Gradienter. (`.markering`, `.linjerat` och tabellytans tonade kant använder `linear-gradient` som ritverktyg för en platt yta och platta linjer, det är inte en gradient i den här meningen.)
- Mjuka skuggor med oskärpa på något annat än mobilmenyn. Skuggan på kort och block är hård och fast (`shadow-kort`, `shadow-block`), och den rör sig aldrig.
- Kort som lyfter, växer eller flyttar sig vid hover. Hover byter färg på skuggan och understrykningen, inget annat.
- Piller-formade knappar. Chips är runda, knappar har radie `md`, och en chip är aldrig en köpknapp.
- Stjärnbetyg, poäng av tio, procent-cirklar. Mätaren är en stapel mot en gräns ur en källa, aldrig ett betyg.
- Rabattmärken, "Spara 20 %", överstrukna priser i rött. Ordinarie pris får visas i blyerts-2 med "tidigare" framför, inget mer.
- Grönt "i lager". Lagerstatus visas bara när den är negativ.
- Fasta köpknappar som följer med skärmen (fas 1). Fast sidospalt (`sticky`) är tillåten, eftersom den inte täcker texten.
- Popup, banderoll, "prenumerera"-ruta, cookie-ruta som täcker innehåll.
- Animationer utöver `transition` på färg vid hover, max 150 ms. `prefers-reduced-motion` stänger av även dem. Pennstrecket ritas inte upp, det är där.
- Ikoner i löptext, framför H2 och H3, i brödsmulor eller som dekoration. Bara ikoner ur spriten.
- Emojis.
- Runda porträtt utom porträttplatsen (avsnitt 6), som är en, i bylinen och i Så jobbar jag.
- Karuseller. Flikar. Dragspel som döljer innehåll som ska läsas; `<details>` är tillåtet för Vanliga frågor, innehållsförteckningen på mobil och mobilmenyn, där innehållet står i HTML:en.
- Färger utanför tokens. `--color-*: initial` i `global.css` ser till att det inte går.
- Mörkt läge (fas 1).
- Typsnitt utöver Zilla Slab och Atkinson Hyperlegible i HTML. Handskrift som HTML-text, Caveat som webbfont, `font-hand` i en komponent, eller `<text>` kvar i en publicerad SVG.
- Gul markering på hela rader, på rubriker, på länkar eller som knapp. Text i annat än blyerts på gult.
- Pennstreck under H3, under länkar, som avdelare, eller mer än ett per rubrik.
- Linjerat papper utanför ett block, som sidbakgrund, bakom produktkort, tabeller eller Kort svar.
- "Läs mer"-knappar. Rubriken är länken.
- Rubriker i formen "X: Y". Kommatecken, som i rösten.
- Punktlistor som layoutelement för resonemang.

## Bilaga A. Kontrollista för visuell granskning

UX och bygge-agenten går igenom varje ny komponent och sidmall mot den här listan innan "Godkänd av UX och bygge".

1. Fungerar det på 375 px utan sidledsscroll (undantag tabeller i sin tabellyta)?
2. Är alla färger tokens? Alla avstånd ur skalan? Alla radier `sm`, `md` eller `full`? Alla skuggor `kort`, `kort-hover`, `block` eller `lyft`?
3. Är kort och block byggda av komponentklasserna (`.kort`, `.blad`, `.yta`, `.pappersruta`, `.chip`, `.knapp`), inte av egna verktygsrader?
4. Har varje bild `width` och `height`, rätt proportion och `object-fit: contain` i sin pappersruta?
5. Ligger reklambandet ovanför första köpknappen, och har varje köpknapp raden "Annonslänk · pris [datum]"?
6. Är fokusringen synlig på allt som går att tabba till, runt hela kortet där hela kortet är en länk, i rätt ordning?
7. Är klickytor minst 44 px höga, chips inräknade?
8. Har formulärfält synliga etiketter, enheten i fältet och feltext under fältet?
9. Kräver något JavaScript för att se rätt ut eller fungera? Då är det fel.
10. Har varje H2 pennstreck (utom Källor), och ingenting annat?
11. Ligger gult bara bakom tal och korta fraser, i chips, symboler och steg, med blyerts på?
12. Ligger linjerat papper bara i block?
13. Finns det handskrift någonstans utanför en illustration? Stryk den.
14. Följer nya illustrationer och diagram reglerna i avsnitt 7?
15. Håller sidan 66 kB HTML efter `npm run build` och `node scripts/budget-html.mjs`?
16. Finns det något på sidan som skulle kunna vara vilken affiliatesajt som helst? Stryk det.

## Bilaga B. Tillgångar

Alla filer under `src/assets/brand/riktning-1/`. Handskrivna SVG:er utan editormetadata, med viewBox, största under 6 kB. Mapparna `riktning-2/` och `riktning-3/` är historik och används inte.

| Fil | Innehåll | Används |
|---|---|---|
| `ordmarke.svg` | Symbol, "Hantverkstips" i Zilla Slab 600 med `font-family` i filen, pennstreck. Fristående, för om-sida och externt bruk | Som `<img>` där SVG:n inte kan ärva sajtens typsnitt |
| `ordmarke-inline.svg` | Samma ordmärke utan xmlns, typsnitt via `var(--font-serif)` och färger via tokens i style-attribut | Inlineas i sidhuvud och sidfot, ärver self-hostade Zilla Slab |
| `symbol.svg` | Tumstocken vikt till ett H, 32 px | Favicon, redaktionens författarruta, sociala förhandsbilder |
| `ikoner.svg` | Sprite med symboler i `currentColor` | Egen fil i `/_astro/`, refereras av `<Ikon>`, se Ikoner i avsnitt 6 |
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
