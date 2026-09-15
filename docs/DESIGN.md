# Design för hantverkstips.se

Beslutad 2026-09-15 av designansvarig. Ändringar i tokens görs i `src/styles/global.css` och speglas här. Utvecklaren bygger mot det här dokumentet, chefredaktören och affiliateansvarig granskar mot det.

Allt mäts först på 375 px bredd (iPhone SE och de flesta Android i mellanklass). Desktop är en bonus, inte utgångspunkten.

## 1. Designprinciper

1. **Facktidning, inte affiliatesajt.** Sidan ska se ut som något en redaktion gjort. Rejäl typografi och gott om luft. Få färger. Ingenting blinkar, ingenting glider in, inga rabattmärken.
2. **Svaret först, sedan resonemanget.** Första skärmen på mobil ska innehålla ett konkret svar (produkt, kapacitet, val). Layouten är byggd för att det ska vara möjligt utan att skrika.
3. **Reklamen är synlig och lugn.** Reklammärkningen är en del av layouten, samma typsnitt, samma färger. Den göms inte och den skäms inte. Köpknappen är tydlig men ser ut som en knapp i en tidning, inte som en rea-skylt.
4. **En accentfärg, en användning.** Rostorange betyder handling (knappar, länkar, det viktiga i ett diagram). Den används aldrig som dekoration.
5. **Tabeller och diagram är innehåll.** De ritas med samma omsorg som texten. Egna diagram med egna siffror är det som skiljer oss från sajter med tio leverantörsbilder på rad.
6. **Ingenting kräver JavaScript för att se rätt ut.** Innehållssidor är statisk HTML. Det som rör sig är kalkylatorerna, och de renderas färdiga från servern innan de hydreras.
7. **Mobil först, bokstavligen.** Varje skiss ritas för 375 px. Om något inte fungerar där byggs det inte.

## 2. Typografi

### Val

Två typsnitt, två filer, 48 kB tillsammans.

| Roll | Typsnitt | Vikt | Fil | Storlek |
|---|---|---|---|---|
| Brödtext, gränssnitt, tabeller, H3 | IBM Plex Sans (variabel) | 400 till 700 | `ibm-plex-sans-latin-400-700.woff2` | 30,2 kB |
| H1, H2, logotyp, citat | Source Serif 4 | 600 | `source-serif-4-latin-600.woff2` | 17,9 kB |

**Varför IBM Plex Sans.** Ritat för teknisk text och skärmar, har tabellsiffror (`tnum`) så att priser och mätvärden står i raka kolumner, och tydlig skillnad mellan 1, l och I. Det ser ut som ett datablad från någon som bryr sig, vilket är exakt rätt ton. Det är inte Inter, och det är inte Roboto, så sajten ser inte ut som varje annan Tailwind-sajt. En variabel fil täcker regular, semibold och fet, så vi slipper tre filer.

**Varför Source Serif 4.** En serif för rubriker ger tidningskänslan utan att bli gammaldags. Source Serif är öppen, har svenska tecken, och dess semibold i 30 till 42 px har tillräcklig tyngd för H1 utan att bli tung. Vi laddar bara en vikt (600). Den variabla filen är 98 kB och faller för budgeten.

Bortvalda: Source Serif 4 variabel (98 kB), Newsreader (85 kB för en vikt-axel), Literata (69 kB), Source Sans 3 variabel (59 kB, klarar budgeten men Plex är tydligare i tabeller och hälften så stor).

### Filer att hämta

Latin-subset i woff2 direkt från Google Fonts (samma filer som deras CSS-API serverar till moderna webbläsare). Subsetet täcker U+0000 till U+00FF, alltså å, ä, ö, é och de tecken svenska behöver. Lägg dem i `public/fonts/`.

| Spara som | Hämta från |
|---|---|
| `public/fonts/ibm-plex-sans-latin-400-700.woff2` | `https://fonts.gstatic.com/s/ibmplexsans/v23/zYXzKVElMYYaJe8bpLHnCwDKr932-G7dytD-Dmu1syxQKYbABA.woff2` |
| `public/fonts/source-serif-4-latin-600.woff2` | `https://fonts.gstatic.com/s/sourceserif4/v14/vEFy2_tTDB4M7-auWDN0ahZJW3IX2ih5nk3AucvUHf6OAVIJmeUDygwjisltnhVdDtwG.woff2` |

Om länkarna roterat (Google byter versionsnummer i sökvägen ibland) hämtas nya via `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400..700&family=Source+Serif+4:wght@600&display=swap` med en Chrome-user-agent, och `/* latin */`-blocket ger rätt fil. Alternativ källa med samma subset: google-webfonts-helper (gwfh.mranftl.com), välj "latin" och woff2.

Licens för båda är SIL Open Font License, self-hosting är tillåten.

Layouten förladdar båda filerna i `<head>` med `<link rel="preload" as="font" type="font/woff2" crossorigin>`. `font-display: swap`. Reservstack medan filen laddar: system-ui för sans, Georgia för serif.

### Typskala

Storlekar i px, mobil (375 px) först och desktop (från 1024 px) efter snedstrecket. Radavstånd som faktor.

| Roll | Typsnitt | Vikt | Mobil / desktop | Radavstånd | Token |
|---|---|---|---|---|---|
| Brödtext | Plex Sans | 400 | 17 / 18 | 1,6 | `text-brod`, `lg:text-brod-lg` |
| Ingress | Plex Sans | 400 | 19 / 21 | 1,5 | `text-ingress`, `lg:text-ingress-lg` |
| H1 | Source Serif 4 | 600 | 30 / 42 | 1,15 | `text-h1`, `lg:text-h1-lg` |
| H2 | Source Serif 4 | 600 | 24 / 28 | 1,25 | `text-h2`, `lg:text-h2-lg` |
| H3 | Plex Sans | 600 | 19 / 21 | 1,35 | `text-h3`, `lg:text-h3-lg` |
| Liten text (bildtext, meta, tabellfot) | Plex Sans | 400 | 14 / 14 | 1,5 | `text-liten` |
| Finstilt (källhänvisning, prisdatum) | Plex Sans | 400 | 13 / 13 | 1,5 | `text-finstilt` |
| Etikett (taggar, kolumnrubriker) | Plex Sans | 600, versaler, spärrning 0,06 em | 12 / 13 | 1,3 | `text-etikett` |
| Stor siffra (kalkylatorresultat) | Plex Sans | 600, tabellsiffror | 36 / 48 | 1,1 | `text-siffra`, `lg:text-siffra-lg` |

Regler:

- H4 finns inte. Behövs en fjärde nivå är texten fel strukturerad.
- Brödtext är aldrig under 17 px på mobil. Reklammärkningen är 14 px, inte 13, den ska kunna läsas.
- Rubriker har luft ovanför sig, inte under. H2 får 48 px ovanför på mobil och 64 på desktop, 12 px under. H3 får 32 ovanför, 8 under.
- Stycken skiljs med 1 em, inte med indrag.
- Läsbredd är max 44 rem (704 px), vilket ger 65 till 75 tecken per rad vid 18 px. Tabeller och diagram får gå ut till 72 rem.
- Alla tabeller och kalkylatorer sätter `font-variant-numeric: tabular-nums`.
- Fet text i brödtext används för ett par ord, aldrig för hela meningar. Kursiv för titlar och främmande ord.
- Länkar i löptext är accentfärgade med understrykning (1 px, 3 px avstånd). Vid hover blir understrykningen 2 px. Länkar ser inte ut som knappar och knappar ser inte ut som länkar.

## 3. Färger

Slutgiltiga tokens. Kontrast räknad enligt WCAG 2.x (relativ luminans), verifierad 2026-09-15.

| Token | Hex | Används till |
|---|---|---|
| `yta` | `#faf8f3` | Sidbakgrund. Varmt papper, inte kritvitt |
| `yta-2` | `#f0ede5` | Faktarutor, tabellhuvud, markerad kolumn, reklamband |
| `linje` | `#d6d2c8` | Avdelare, kortramar, tabellinjer. Bara dekorativt |
| `blaeck` | `#1a1917` | All text, rubriker, sidfotens bakgrund |
| `blaeck-2` | `#5b5852` | Sekundär text, metadata, bildtexter, formulärramar |
| `accent` | `#b5410f` | Knappar, länkar, det markerade i ett diagram |
| `accent-2` | `#8a2f08` | Hover och aktivt läge för accent |
| `ok` | `#1b6e35` | "Bäst i raden" i tabeller, lagerstatus, giltig indata |
| `varning` | `#8f5a00` | Varningsrutor, ogiltig indata, "slut i lager" |
| `vit` | `#ffffff` | Text på accent, bakgrund bakom produktbilder |

### Verifierad kontrast

| Kombination | Kontrast | Krav | Resultat |
|---|---|---|---|
| bläck på yta | 16,55:1 | 4,5 | Godkänd, även AAA |
| bläck på yta-2 | 15,02:1 | 4,5 | Godkänd |
| bläck-2 på yta | 6,68:1 | 4,5 | Godkänd |
| bläck-2 på yta-2 | 6,06:1 | 4,5 | Godkänd |
| accent som text på yta | 5,31:1 | 4,5 | Godkänd |
| accent som text på yta-2 | 4,82:1 | 4,5 | Godkänd |
| vit på accent (knapptext) | 5,63:1 | 4,5 | Godkänd |
| vit på accent-2 (hover) | 8,43:1 | 4,5 | Godkänd |
| ok som text på yta | 5,94:1 | 4,5 | Godkänd |
| vit på ok | 6,31:1 | 4,5 | Godkänd |
| varning som text på yta | 5,45:1 | 4,5 | Godkänd |
| vit på varning | 5,78:1 | 4,5 | Godkänd |
| yta på bläck (sidfot) | 16,55:1 | 4,5 | Godkänd |
| linje på yta | 1,42:1 | 3,0 för gränssnittskomponenter | Underkänd, med avsikt |

Konsekvensen av sista raden: `linje` får bara användas för dekorativa avdelare och ramar runt kort och tabeller. Ramen runt ett formulärfält, en kryssruta eller en radioknapp ska vara `blaeck-2` (6,68:1), eftersom fältets gräns måste kunna urskiljas. Fokusring är alltid `accent`, 3 px, 2 px utanför elementet.

Tailwinds standardpalett är avstängd i `global.css` (`--color-*: initial`). Skriver någon `bg-blue-500` byggs det inte. Det är meningen.

Färg bär aldrig information ensam. "Bäst i raden" i en tabell är både grön och fet. Ogiltig indata är både varningsfärgad och har en text under fältet.

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
| `rounded-sm` | 2 px | Formulärfält, taggar, tabeller, bilder |
| `rounded-md` | 6 px | Knappar, kort, faktarutor |

Inga piller, inga cirklar (utom om något faktiskt är runt). Författarfoto är kvadratiskt med 2 px radie. Tailwinds övriga radier är avstängda.

### Skuggor

En enda: `shadow-lyft`, `0 2px 8px rgb(26 25 23 / 0.12)`. Används bara på det som faktiskt ligger ovanpå sidan: den öppna mobilmenyn och rullgardiner i kalkylatorer. Kort har ram (`1 px linje`), inte skugga. Övriga Tailwind-skuggor är avstängda.

### Kort, en gång för alla

Ett kort på hantverkstips.se är en yta med 1 px `linje`-ram, 6 px radie, 16 px inre marginal på mobil och 24 på desktop, samma bakgrund som sidan. Det får `yta-2` som bakgrund bara om det är en faktaruta eller en markerad produkt. Inga skuggor, ingen färgad överkant, ingen ikon i hörnet.

## 5. Sidmallar

Gemensamt för alla sidor:

**Sidhuvud.** 56 px högt på mobil, 64 på desktop. Vänster: ordmärket "Hantverkstips" i Source Serif 4, 22 px, bläck. Höger på mobil: knappen "Meny" (text, inte hamburgare), som öppnar en lista under sidhuvudet via `<details>`, alltså utan JavaScript. Menyn är en lodrät lista med kategorierna, "Verktyg" och "Så testar vi", 48 px per rad, med `shadow-lyft`. Desktop: samma länkar i rad till höger, 15 px, bläck, understrykning vid hover. Ingen sökruta i fas 1. 1 px `linje` under sidhuvudet.

**Reklammärkning.** Direkt under sidhuvudet på alla sidor som innehåller affiliatelänkar. Se komponent i avsnitt 6.

**Brödsmulor.** 14 px, bläck-2, med snedstreck som avdelare. "Hantverkstips / Luftavfuktare / Wood's MRD20". På mobil visas bara de två sista nivåerna.

**Sidfot.** Bakgrund bläck, text yta. Fyra spalter på desktop, en spalt på mobil: Kategorier, Verktyg, Om sajten (Så testar vi, Så tjänar vi pengar, Kontakt, Integritet), och ett stycke om vilka vi är. Ordmärket överst, i yta. 14 px text. Inga sociala ikoner (vi har inga konton att länka till).

**Hoppa till innehåll.** Första fokuserbara elementet på varje sida, synligt bara vid fokus.

### 5.1 Startsida

Startsidan är ett tidningsomslag, inte en landningssida. Inget hero, ingen bakgrundsbild.

```
┌────────────────────────────────────┐
│ Sidhuvud                           │
├────────────────────────────────────┤
│ Öppning                            │
│   H1 (serif, vänsterställd)        │
│   Ett stycke, 2 till 3 rader       │
│   Två textlänkar                   │
├────────────────────────────────────┤
│ Verktygskort (säsong)              │
│   Diagram · Rubrik · En rad · Länk │
├────────────────────────────────────┤
│ Just nu (en artikel, stor)         │
│   Bild 3:2 · Etikett · Rubrik ·    │
│   Ingress · Meta                   │
├────────────────────────────────────┤
│ Bäst i test just nu                │
│   Rad per kategori: kategori,      │
│   vår rekommendation, pris, länk   │
├────────────────────────────────────┤
│ Senaste guider och tester (6 st)   │
│   Rad: Etikett · Rubrik · En rad · │
│   Datum                            │
├────────────────────────────────────┤
│ Räkna själv (verktygslista)        │
├────────────────────────────────────┤
│ Så jobbar vi (kort text, 2 länkar) │
├────────────────────────────────────┤
│ Sidfot                             │
└────────────────────────────────────┘
```

**Öppning.** H1 är ett påstående, inte en välkomstfras. Exempel på rätt sorts rubrik (chefredaktören skriver den riktiga): "Vi räknar på verktygsköpet innan du gör det." Under den ett stycke om vad sajten är, i ingress-storlek. Två länkar i löptext, inte knappar. Vänsterställt, läsbredd. På desktop ligger öppningen i vänster två tredjedelar och verktygskortet i höger tredjedel, på samma rad.

**Verktygskort.** Ett kort (ram, ingen skugga) med ett litet eget diagram överst (till exempel en källarplan med mått), rubriken "Hur stor avfuktare behöver du?", en rad förklaring, och länken "Till kalkylatorn". Byts med säsong (avfuktare i augusti till november, byggfläkt i november till mars). Statiskt, ingen ö på startsidan.

**Just nu.** En artikel, vald av chefredaktören. Mobil: bild 3:2 i full bredd, sedan etikett ("Köpguide"), rubrik i H2-storlek, ingress, meta. Desktop: bild till vänster (halva bredden), text till höger, lodrätt centrerad. Bilden är antingen eget foto eller ett eget diagram. Ingen leverantörsbild här.

**Bäst i test just nu.** En tabell utan att se ut som en tabell: en rad per kategori med 1 px linje emellan. Vänster: kategorinamn i H3. Mitten: "Vårt val: Wood's MRD20" och pris i bläck-2. Höger: länken "Alla vi testat". Mobil: allt staplas inom raden, länken sist. Desktop: två spalter av rader. Data från kategorifilen och databasen, inte handskrivet. Ingen produktbild här, listan ska vara snabb att skumma.

**Senaste guider och tester.** Sex rader, samma anatomi som "Just nu" men utan bild och med rubrik i H3. Mobil en spalt, desktop två spalter. Etiketten säger typ ("Test", "Köpguide", "Jämförelse").

**Räkna själv.** Lista med varje kalkylator: namn som länk och en rad om vad man får ut. Ingen ikon.

**Så jobbar vi.** Två till fyra meningar om hur vi testar och hur vi tjänar pengar, med länkar till respektive sida. Det här blocket finns för förtroendet, och för Google.

### 5.2 Bäst i test-sida (kategorisida)

URL `/luftavfuktare/`. Sidan som tjänar pengar, så första skärmen på 375 × 667 ska innehålla rubrik, ingress och första rekommendationen med köpknapp. Ingen bild ovanför.

```
┌────────────────────────────────────┐
│ Sidhuvud                           │
│ Reklammärkning                     │
├────────────────────────────────────┤
│ Brödsmulor                         │
│ H1 (löfte)                         │
│ Ingress                            │
│ Meta: uppdaterad, författare,      │
│       "9 produkter jämförda"       │
├────────────────────────────────────┤
│ VÅRA VAL (block, yta-2)            │
│  ┌ Bäst totalt ─────────────────┐  │
│  │ bild · namn · en rad · pris  │  │
│  │ [Till Proffsmagasinet]       │  │
│  └──────────────────────────────┘  │
│  ┌ Bäst till krypgrund ─────────┐  │
│  ┌ Bäst under 4 000 kr ─────────┐  │
├────────────────────────────────────┤
│ Innehållsförteckning               │
├────────────────────────────────────┤
│ Jämförelsetabell (alla produkter)  │
├────────────────────────────────────┤
│ H2 per produkt                     │
│   Produktkort (full)               │
│   Löptext: bra, dåligt, mätvärden  │
│   Faktaruta: Köp om / Köp inte om  │
│   Köpknapp                         │
│   (upprepas)                       │
├────────────────────────────────────┤
│ H2 Så väljer du (kort, länk till   │
│    köpguide och kalkylator)        │
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

**Rubrikblock.** H1 i läsbredd. Meta på en rad i 14 px bläck-2: "Uppdaterad 12 september 2026 · Av Namn · 9 produkter jämförda". Prickarna är avdelare, inte tankstreck.

**Våra val.** Blocket har `yta-2` som bakgrund och går ut i full bredd på mobil (kant till kant, innehåll med 16 px marginal). Rubrik "Våra val" i H2. Två eller tre kompakta produktkort med etikett ("Bäst totalt", "Bäst till krypgrund", "Bäst under 4 000 kr"). Etiketterna skrivs av redaktören, inte av mallen, och de säger något konkret. Varje kort har en köpknapp och länken "Läs testet". På mobil är korten staplade, 12 px emellan. På desktop ligger de tre i rad, lika breda, och blocket är lika brett som sidbredden (72 rem). Det första kortet är inte större än de andra. Tre lika kort i rad är tillåtet här eftersom det är tre likvärdiga val, inte tre ikoner.

**Jämförelsetabell.** Alla produkter i kategorin som vi testat eller granskat, från databasen. Kolumnerna styrs av kategorifilen (för avfuktare: kapacitet liter per dygn vid 20 °C och 60 % RF, effekt W, ljud dB, arbetsområde °C, pris). Beteende beskrivs i avsnitt 6. Rekommenderade produkter har `yta-2` som kolumnbakgrund.

**Per produkt.** H2 som säger något ("Wood's MRD20, tystast i testet men dyr"). Under H2 ett fullt produktkort med bild till vänster på desktop, överst på mobil. Sedan löptext, ett par stycken, gärna med ett eget diagram (uppmätt kapacitet vid olika temperaturer). Faktaruta med rubriken "Köp om / Köp inte om" och två korta stycken. Köpknapp sist. Mellan produkter 48 px på mobil, 64 på desktop, plus 1 px linje.

**Så väljer du.** Tre till fem stycken som sammanfattar köpguiden, med länk till den och till kalkylatorn. Kalkylatorlänken är ett verktygskort som på startsidan.

**Vanliga frågor.** Bara om chefredaktören har riktiga frågor. Varje fråga som H3, svar i 1 till 3 stycken. Inte `<details>`, svaren ska synas och indexeras.

**Desktop.** Innehåll i läsbredd centrerat i sidbredden, med innehållsförteckningen i höger spalt (sticky, 15 px, bläck-2) från 1024 px. Tabellen och blocket "Våra val" bryter läsbredden och använder hela sidbredden.

**Ingen fast köpknappsrad.** En rad längst ner på skärmen som följer med skulle öka klick men strider mot principen om lugn reklam. Beslutet omprövas när vi har klickdata i fas 3.

### 5.3 Köpguide

URL `/guider/avfuktare-kallare/`. Problemet först, produkten sist, men svaret i första skärmen.

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
│ Faktaruta "Kort svar"              │
│   3 till 5 rader, konkret,         │
│   1 till 2 länkar                  │
├────────────────────────────────────┤
│ Bild 3:2 med bildtext              │
│   (eget foto eller eget diagram)   │
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

**Kort svar.** Faktaruta med 4 px accentlinje till vänster. Innehåller det konkreta svaret, med siffror: "En källare på 40 kvm med 2,2 meter i tak och 75 procent luftfuktighet behöver en avfuktare på minst 10 liter per dygn. Vi rekommenderar Wood's MRD20, 4 990 kr." Länkar till produktens test och till kalkylatorn. Ingen köpknapp här, det kommer när läsaren fått resonemanget.

**Bilden.** Ligger under det korta svaret, inte ovanför rubriken. Saknas eget foto används ett eget diagram (situationen: en källare i genomskärning med mått). Saknas både foto och diagram utgår bilden. Leverantörsbild används aldrig som guidens huvudbild.

**Löptext.** Läsbredd. Produktkort i kompakt variant får ligga i texten där produkten diskuteras, max ett per H2-avsnitt. Diagram och tabeller får bryta ut till sidbredd på desktop.

**Produkterna vi nämner.** Genereras från frontmatterns `produkter`. Kompakta kort med köpknapp. Det här är guidens konverteringsyta, och den ligger sist med avsikt.

**Desktop.** Som bäst i test-sidan: läsbredd med innehållsförteckning i höger spalt.

### 5.4 Produkttest

URL `/tester/woods-mrd20/`. En produkt, ett omdöme, egna siffror.

```
┌────────────────────────────────────┐
│ Sidhuvud                           │
│ Reklammärkning                     │
├────────────────────────────────────┤
│ Brödsmulor                         │
│ H1 (produkt + omdöme)              │
│ Ingress                            │
│ Meta: testad, uppdaterad, av       │
├────────────────────────────────────┤
│ OMDÖME (block, ram)                │
│   Produktbild 4:3                  │
│   Etikett (om "Vårt val")          │
│   En mening omdöme                 │
│   Tabell: 3 till 5 uppmätta värden │
│          (vårt värde / uppgivet)   │
│   Köp om / Köp inte om             │
│   Pris + Köpknapp                  │
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

**Omdömesblock.** Ett kort med ram. Mobil: bild överst (4:3, hela kortets bredd), sedan text. Desktop: bild till vänster (40 procent), text till höger. Omdömestabellen har två värdekolumner, "Vi mätte" och "Tillverkaren uppger", så att läsaren ser skillnaden. "Köp om" och "Köp inte om" är två korta stycken med rubrik i etikett-stil, inte listor. Köpknappen är den första på sidan och den ligger inom första skärmen på mobil bara om ingressen är kort; det är i sin ordning, omdömet ska läsas först.

Ingen poängskala, inga stjärnor. Omdömet är en mening och två stycken. Stjärnor är det första en läsare slutar lita på.

**Diagram.** Testsidor har minst ett eget diagram (uppmätt kapacitet, ljud på avstånd, strömförbrukning över tid). Inline-SVG, ritad med tokens, med `width` och `height`. Se avsnitt 7.

**Alternativ.** Rubrikerna på korten säger varför alternativet finns: "Billigare, men högre ljud", "Klarar större yta".

**Specifikationer.** Full tabell från databasens `specs`, två kolumner (egenskap, värde). Ingen sidledsscroll behövs.

### 5.5 Verktygssida (kalkylator)

URL `/verktyg/avfuktarkalkylator/`. Exempel med avfuktarkalkylatorn. Detta är en React-ö, men den renderas färdig från servern så att sidan ser klar ut innan JavaScript laddat.

```
┌────────────────────────────────────┐
│ Sidhuvud                           │
│ Reklammärkning                     │
├────────────────────────────────────┤
│ Brödsmulor                         │
│ H1 "Hur stor avfuktare behöver du?"│
│ Ingress (2 rader)                  │
├────────────────────────────────────┤
│ KALKYLATOR (kort, yta-2)           │
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
│   12 liter per dygn                │
│   (vid 20 °C och 60 % RF)          │
│   Två meningar om vad det betyder  │
│   Länk: Så räknar vi               │
├────────────────────────────────────┤
│ Produkter som klarar det (2 till 3)│
│   Produktkort kompakt + köpknapp   │
│   Länk: Alla avfuktare vi testat   │
├────────────────────────────────────┤
│ H2 Så räknar vi (formel, antagan-  │
│    den, källor)                    │
├────────────────────────────────────┤
│ H2 Läs vidare (guider)             │
├────────────────────────────────────┤
│ Sidfot                             │
└────────────────────────────────────┘
```

**Indata.** Tre obligatoriska fält och ett valfritt. Yta och takhöjd är numeriska fält med enheten som text till höger i fältet, `inputmode="decimal"`, decimalkomma accepteras. Fuktnivå är radioknappar med förklarande text, inte en rullgardin, eftersom läsaren behöver läsa alternativen för att veta vilket som gäller. Uppvärmt är en kryssruta. Alla fält har synlig etikett ovanför, 15 px, 600. Fälthöjd 48 px. Ram `blaeck-2` 1 px, radie 2 px, bakgrund vit. Fokus enligt global regel.

Fälten är förifyllda med typiska värden (40 kvm, 2,4 m, 70 till 80 %) så att resultatet syns direkt vid serverrendering. Knappen "Räkna ut" är primär köpknappsstil men leder inte till butik, den är i bläck, inte accent, för att skilja handling från reklam.

**Resultat.** Ordet "Minst" i etikett-stil, siffran i `text-siffra` (36 px mobil, 48 desktop), enheten på samma rad i brödtextstorlek. Under: förutsättningarna i 14 px bläck-2. Sedan två meningar som förklarar (till exempel att kapaciteten är en marginal och varför). Resultatet ligger i samma kort som formuläret, avdelat med 1 px linje, så att läsaren inte behöver leta.

**Produkter.** Två till tre produkter från databasen vars kapacitet ligger på eller strax över resultatet, sorterade på pris. Kompakta kort med köpknapp. Länk till kategorisidan.

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

**Mobil.** Alla fält i full bredd, staplade. Resultatet får aldrig bredare innehåll än 343 px (375 minus marginaler). Produktkorten staplas. Ingen sidledsscroll.

**Desktop.** Kortet är 44 rem brett, formuläret till vänster och resultatet till höger i två lika spalter. Produkterna i rad om tre under.

## 6. Komponenter

Alla komponenter ligger i `src/components/ui/` som Astro utan klient-JS, utom det som uttryckligen är en ö.

### Köpknapp

**Syfte.** Enda vägen till butiken. Sköter `/go/[slug]`, `rel="sponsored nofollow"`, klicklogg.

**Innehåll.** Pris i bläck, 600, ovanför eller till vänster om knappen ("4 990 kr"). Knappen med texten "Till Proffsmagasinet" (butikens namn hämtas från databasen). Under knappen finstilt i bläck-2: "Reklamlänk · pris 12 sep". Datumet är erbjudandets `uppdaterad`.

**Utseende.** Primär: bakgrund accent, text vit, 16 px 600, 12 px lodrät och 20 px vågrät innermarginal, minst 44 px hög, radie 6 px, ingen ikon, ingen skugga. Full bredd på mobil inuti kort. Sekundär variant (för "Läs testet" bredvid en köpknapp): genomskinlig med 1,5 px bläck-ram, bläck text.

**Tillstånd.**

| Tillstånd | Utseende |
|---|---|
| Normal | Som ovan |
| Hover | Bakgrund accent-2 |
| Fokus | Global fokusring |
| Aktiv | Accent-2, inget annat |
| Slut i lager | Sekundär stil, text "Slut i lager hos Proffsmagasinet", pris i bläck-2 med "senast" framför. Länken går ändå till butiken, lagerstatus kan vara gammal |
| Pris saknas | Text "Se pris hos Proffsmagasinet", ingen prisrad |
| Flera butiker (fas 2) | En knapp per butik, billigast först, bara den första är primär |

### Produktkort

**Syfte.** Visa en produkt med tillräckligt för ett beslut, och en väg vidare.

**Innehåll.** Bild (4:3, produkt mot vit bakgrund, i ram), etikett om redaktören satt en ("Vårt val", "Bäst till krypgrund"), märke och modell som H3, en rad "för vem" (skriven av redaktören, inte leverantören), 2 till 4 nyckelvärden från kategorifilen (etikett + värde, tabellsiffror), pris, köpknapp, länk "Läs testet" om test finns.

**Varianter.**

- *Kompakt* (i löptext, listor, kalkylatorresultat). Mobil: bild 96 × 72 px till vänster, text till höger, köpknapp i full bredd under. Desktop: samma, men köpknappen till höger på samma rad som priset.
- *Full* (kategorisidans produktavsnitt, omdömesblock). Mobil: bild överst i kortets bredd. Desktop: bild till vänster 40 procent.

**Tillstånd.**

| Tillstånd | Utseende |
|---|---|
| Normal | Ram linje, ingen skugga |
| Med etikett | Etikett i accent, etikett-stil, överst i textdelen |
| Rekommenderad | Bakgrund yta-2 istället för yta |
| Utan test | Länken "Läs testet" utgår, inget annat |
| Slut i lager | Köpknappens tillstånd, ingen genomstrykning av kortet |
| Bild saknas | Ram med yta-2 och märkets namn i etikett-stil centrerat. Inga platshållarikoner |

### Jämförelsetabell

**Syfte.** Alla produkter i en kategori mot samma mått, från databasen.

**Innehåll.** Kolumner är produkter, rader är egenskaper. Första raden: bild 4:3 (liten, 80 px bred), märke och modell, etikett om redaktören satt en. Sedan en rad per spec ur kategorifilen, i den ordning kategorifilen anger. Sista raden: pris och köpknapp (kompakt, full bredd i cellen). Enheter står i radrubriken ("Kapacitet, l/dygn"), inte i varje cell. Bästa värdet i varje rad markeras med fetstil och `ok`-färg, sämsta markeras inte. Saknat värde skrivs "ej angivet" i bläck-2.

**Utseende.** 1 px linje mellan rader, tabellhuvud (första kolumnen) i yta-2. Celler 12 px innermarginal, 15 px text, tabellsiffror. Rekommenderade produkters kolumner har yta-2 som bakgrund.

**Mobil.** Tabellen scrollar i sidled inom en behållare. Första kolumnen (egenskapsnamn) är `position: sticky; left: 0` med yta-2 och en 1 px linje till höger så att den syns som fast. Varje produktkolumn är 150 px bred. Behållarens högerkant har en 24 px tonad övergång till yta som visar att det finns mer, och ovanför tabellen står "Dra i sidled för att se alla" i 14 px bläck-2. Max fem produkter i en inline-tabell i löptext; kategorisidans tabell får ha fler.

**Desktop.** Full sidbredd. Upp till sex kolumner utan scroll, därefter scroll i sidled på samma sätt.

**Tillstånd.** Med och utan priser (prisraden utgår om ingen produkt har pris). Med och utan köpknappar (jämförelser i kunskapsartiklar kan sakna dem). Färre än två produkter: komponenten renderar inte, bygget varnar.

### Faktaruta

**Syfte.** Lyfta något som ska läsas även av den som skummar.

**Innehåll.** Rubrik (valfri, H3-stil) och en till tre stycken, eller en kort lista om innehållet faktiskt är en lista.

**Varianter.**

- *Kort svar.* 4 px accentlinje till vänster, ingen bakgrund, 16 px innermarginal. Används en gång per sida, högst upp.
- *Fakta* (standard). Bakgrund yta-2, radie 6 px, 16 px innermarginal på mobil, 24 på desktop.
- *Köp om / Köp inte om.* Som Fakta men med två delar under varsin etikett. Staplas på mobil, två spalter på desktop.

**Tillstånd.** Statisk. Innehåller aldrig köpknappar.

### Varning

**Syfte.** Säkerhet och dyra misstag. Inte för "tänk på att".

**Innehåll.** Ordet "Varning" i etikett-stil, färg varning, följt av en till två meningar. Rubriken kan bytas mot något specifikt ("Kräver jordfelsbrytare").

**Utseende.** 4 px linje till vänster i varning, ingen bakgrund, ingen ikon. Samma anatomi som "Kort svar" men i varningsfärg, så att läsaren lär sig mönstret.

**Tillstånd.** Statisk.

### Reklammärkning

**Syfte.** Lagkrav (marknadsföringslagen) och förtroende. Läsaren ska förstå affären på tre sekunder.

**Innehåll.** "Reklam. Sidan innehåller länkar till Proffsmagasinet. Handlar du via dem får vi provision, du betalar inte mer. Så tjänar vi pengar." Sista meningen är en länk. Butiksnamnet hämtas från databasen, i fas 2 "till butiker vi samarbetar med".

**Utseende.** Band i full bredd direkt under sidhuvudet, bakgrund yta-2, 1 px linje under, 14 px text i bläck (inte bläck-2, det ska vara läsbart), 12 px lodrät innermarginal, texten i läsbredd. Inte stängbar. Inget kryss.

**Tillstånd.** Visas på alla sidor där en köpknapp eller jämförelsetabell med köpknappar renderas. Layouten avgör det, inte innehållsfilen. Köpknappen har dessutom sin egen finstilta "Reklamlänk" under sig, så märkningen finns på två ställen: ovanför första länken och vid varje länk.

### Innehållsförteckning

**Syfte.** Skumläsning och hopp på långa sidor. Bygger på H2 i innehållet.

**Innehåll.** Rubriken "Innehåll" i etikett-stil, numrerad lista med H2-rubrikerna som länkar till ankare. Bara H2, aldrig H3.

**Mobil.** `<details>` med `<summary>` "Innehåll, 8 avsnitt", stängd som standard, ram linje, 6 px radie. Öppnad visas listan med 44 px per rad.

**Desktop.** Från 1024 px flyttas den till höger spalt, `position: sticky; top: 80px`, 15 px text i bläck-2, aktiv rad markeras inte (det kräver JavaScript). Listan är alltid öppen där.

**Tillstånd.** Färre än tre H2 på sidan: renderas inte.

### Författarruta

**Syfte.** Visa att en människa med erfarenhet skrivit. Underlag för `Article`-markup.

**Innehåll.** Foto 64 × 64 px, kvadratiskt med 2 px radie (riktigt foto, inte avatar). Namn som länk till författarsidan, 600. En rad om erfarenhet, skriven som fakta: "Snickare sedan 2004. Testar sågar och mätverktyg för Hantverkstips sedan 2025." Datum publicerad och uppdaterad i 14 px bläck-2. Länken "Så testar vi".

**Utseende.** 1 px linje ovanför, ingen ram runt, 24 px innermarginal lodrätt. Foto till vänster, text till höger på alla bredder.

**Tillstånd.**

| Tillstånd | Utseende |
|---|---|
| Med foto | Som ovan |
| Utan foto | Kvadrat i yta-2 med initialer i etikett-stil |
| Redaktionen (kalkylatorer, kategorisidor utan enskild författare) | Namn "Redaktionen", ordmärket som bild, raden "Vi testar själva eller granskar tillverkarnas data. Så gör vi." |

## 7. Bilder

I fas 1 kommer nästan alla produktbilder från leverantören. De är rena packshots mot vit bakgrund, likadana som på tjugo andra sajter. Designen ska göra att sajten ändå inte ser ut som de tjugo.

### Vad vi gör med leverantörsbilder

- **De blir små.** En packshot är aldrig en huvudbild. Den ligger i ett produktkort (96 px bred i kompakt, max 40 procent av kortet i full), i tabellhuvud (80 px) och i omdömesblocket. Aldrig i full bredd, aldrig som hero.
- **Samma ram överallt.** Alla produktbilder ligger i en 4:3-ruta med 1 px linje-ram och 2 px radie, med bilden `object-fit: contain` och 8 px luft runt. Rutans bakgrund är vit. Att rutan är vit mot det varma papperet är avsiktligt: bilden ser ut som en inklistrad bild i en tidning, inte som en produktsida.
- **Konsekvent beskärning.** 4:3 för produkter, 3:2 för foton av situationer, 1:1 för författare. Inga fria proportioner. Alla `<Image>` har `width` och `height`, alltid.
- **Ingen retusch, ingen färgton.** Vi lägger inte filter på leverantörsbilder. Det ser billigt ut.

### Vad vi gör istället för bilder

- **Egna diagram.** Varje test och varje kategorisida har minst ett diagram med egna eller källgranskade siffror. Inline-SVG, byggd vid bygget, med tokens: axlar och text i bläck-2, staplar och linjer i bläck, den produkt eller det värde texten handlar om i accent, jämförelsevärden i linje. En serie i accent, aldrig fler. Diagrammen har `role="img"` och en `aria-label` som säger vad de visar. Diagram är alltid rätt bredd för mobil (max 343 px utan scroll) och får inte förlita sig på hover.
- **Situationsillustrationer.** Enkla linjeteckningar av situationen texten beskriver: en källare i genomskärning med mått, ett garage med en fläkt och pilar för luftflöde, en gersåg med vinkeln markerad. Ritade i SVG med en linjebredd (1,5 px bläck), fyllning i yta-2, och en sak i accent. Ingen skuggning, inga människor. Samma stil på alla, så att de blir sajtens signatur. Chefredaktören beställer, designansvarig ritar eller specar.
- **Tabeller som ser ut som något.** Jämförelsetabellen och omdömestabellen är designade ytor, inte utskrifter av databasen. Rätt siffror i raka kolumner, bästa värdet markerat, enheten i radrubriken.
- **Egna foton när de kommer.** Christian tar egna foton av produkter i drift senare. Då gäller: 3:2, dagsljus, produkten i sin miljö (avfuktaren i källaren, inte på ett bord), ingen människa i bild, ingen hjälm. Bilden får en bildtext som säger vad man ser och när det togs. Egna foton ersätter diagrammen som huvudbild, diagrammen stannar i texten.

### Vad som aldrig används

Stockfoton. Genererade bilder av verktyg. Bilder utan `width` och `height`. Bilder som hotlinkas. Bildkaruseller. Bakgrundsbilder bakom text.

## 8. Förbjudet (mallsignaler)

Det här byggs inte, oavsett vem som ber om det.

- Hero med bakgrundsbild och centrerad text.
- Tre kolumner med ikon, rubrik och en rad. Tre lika kort i rad är tillåtet bara när det är tre jämförbara val (som "Våra val"), aldrig som dekoration.
- Gradienter, någonstans.
- Skugga på kort. Skugga används bara på det som ligger ovanpå sidan.
- Piller-formade knappar och taggar.
- Stjärnbetyg, poäng av tio, procent-cirklar.
- Rabattmärken, "Spara 20 %", överstrukna priser i rött. Ordinarie pris får visas i bläck-2 med "tidigare" framför, inget mer.
- Fasta köpknappar som följer med skärmen (fas 1).
- Popup, banderoll, "prenumerera"-ruta, cookie-ruta som täcker innehåll (vi har inga kakor som kräver samtycke).
- Animationer utöver `transition` på färg vid hover, max 150 ms. Ingen animation kräver JavaScript, och `prefers-reduced-motion` stänger av även dem.
- Ikoner i löptext och framför rubriker. Ikoner får finnas i gränssnitt (stäng, meny) om de har textalternativ, och helst är de text.
- Emojis.
- Runda författarbilder.
- Karuseller. Dragspel eller flikar som döljer innehåll som ska läsas eller indexeras.
- Färger utanför tokens. `--color-*: initial` i `global.css` ser till att det inte går.
- Mörkt läge (fas 1).
- Typsnitt utöver de två.
- Text på bild.
- "Läs mer"-knappar. Rubriken är länken.
- Punktlistor som layoutelement för resonemang, precis som i stilguiden.

## Bilaga. Kontrollista för visuell granskning

Designansvarig går igenom varje ny komponent och sidmall mot den här listan innan "Godkänd av design".

1. Fungerar det på 375 px utan sidledsscroll (undantag jämförelsetabellen)?
2. Är alla färger tokens? Alla avstånd ur skalan? Alla radier 2 eller 6?
3. Har varje bild `width` och `height`, och rätt proportion?
4. Ligger reklammärkningen ovanför första köpknappen?
5. Är fokusringen synlig på allt som går att tabba till, i rätt ordning?
6. Är klickytor minst 44 px höga?
7. Har formulärfält synliga etiketter och feltext under fältet?
8. Kräver något JavaScript för att se rätt ut? Då är det fel, utom inuti kalkylatorn.
9. Finns det något på sidan som skulle kunna vara vilken affiliatesajt som helst? Stryk det.
