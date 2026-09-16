# Startsida, hub och överblick, nydesign inom Anteckningsboken

Skriven 2026-09-16 av designansvarig efter Christians granskning av startsidan och `/fukt/`. Det här är en plan för godkännande, ingenting i `src/` är ändrat. Stilen (papper, blyerts, pennstreck, illustrationer, typsnitt) ligger fast. Det som görs om är sidtypernas form: hur läsaren får överblick och hur hon bläddrar.

Mockuper: `docs/briefer/mockup-startsida-2026-09-16.html` och `docs/briefer/mockup-guider-2026-09-16.html`, ritade för 1200 px, med riktiga titlar, beskrivningar och illustrationer från de publicerade sidorna.

## 1. Diagnos, varför det varken är tidning eller blogg

Jag tittade på de riktiga sidorna i 1400 och 375 px bredd, inte bara koden. Det Christian ser är riktigt, och det har sju orsaker.

**Tomrummet till höger.** Startsidan ber layouten om sidbredd (72 rem, 1152 px) men allt innehåll utom verktygskortet ligger i läsbredd (44 rem, 704 px) till vänster. Verktygskortet hamnar i en högerspalt som bara har det kortet i sig, så från 230 px och neråt är fyrtio procent av skärmen tomt papper. En tidning fyller sin sida, en blogg centrerar sin spalt. Vi gör ingetdera, vi lämnar en spalt tom.

**Ett enda spår.** Under H1 är allt en lodrät ström i samma bredd: illustration, tre pelarrader, en artikel, en rad, sex rader, en lista, ett stycke. Ingenting ligger bredvid något annat. Ögat får aldrig välja, det får bara scrolla. Det är bloggkänslan.

**Samma bild två gånger.** Källarskissen är både säsongens illustration och bilden till "Just nu" (fukt i källaren), 640 px bred båda gångerna, 500 px ifrån varandra. Det ser ut som ett fel, och det äter en hel skärmhöjd på desktop.

**Rubrikerna har en röst, resten en annan.** H1 och H2 är Zilla Slab och ser ut som en tidning. Allt under dem, från "Börja här" till "Senaste guider och tester", är 19 px Atkinson fet med understrykning. Sex artikeltitlar i rad i samma sans, understrukna, utan ram och utan bild, ser ut som en länklista i en sidfot, inte som ett urval.

**Inga kort, inga bilder, ingen rytm.** Sektionerna har olika höjd men samma form (H2 med pennstreck, sedan rader). "Bäst i test just nu" är en rad, "Senaste" är sex, "Räkna själv" är en. Ingen sektion är ett block man kan se på håll och känna igen. Det är därför det inte känns som en tidning: en tidning har moduler av olika storlek, och storleken säger vad som är viktigt.

**Etiketterna är för små för att bära struktur.** "PROBLEMGUIDE" i 12 px ovanför en 640 px bild, "KÖPGUIDE" ovanför en textrad. Etiketten är rätt, men utan kort runt sig sitter den löst.

**Huben är en artikel.** `/fukt/` är läsbredd, centrerad, med tre H2 och länkar i löptext. Det är rätt för en artikel och fel för en ingång: läsaren måste läsa fyra meningar för att hitta fem länkar. "Alla sidor i Fukt" är sedan en lista med etikett och understruken titel, ingen beskrivning, ingen bild. Och sidan är 1 700 px hög på en 3 200 px skärmdump, resten är tomt papper ovanför sidfoten. Huben ger ingen bild av vad pelaren innehåller, bara en lista av vad den heter.

Sammanfattat: stilen är rätt, formen är en enspaltig textsida. Det som saknas är ett rutnät av kort med bild, etikett och rubrik, och sektioner som är olika stora.

En sak till, utanför uppdraget men sedd: Edge headless klipper mobilsidorna till höger vid 375 px (H1 går utanför kanten på skärmdumpen). Det är sannolikt en minsta fönsterbredd i headless och inte sajten, tidigare mobilgranskningar via CDP såg rätt ut. Teknisk ansvarig får bekräfta med en riktig telefon.

## 2. Beslut som gäller alla fyra sidtyperna

**Kortrutnät, tre kolumner på desktop.** Artiklar, tester, jämförelser och kategorisidor visas som Artikelkort (avsnitt 9) i ett rutnät med 24 px mellanrum. Tre kolumner från 1024 px, två från 640, en under. Rutnätet använder sidbredden (72 rem), inte läsbredden. Det är beslutet som löser "varken tidning eller blogg": en tidning har en förstasida av rutor, och rutnätet är det.

**Regeln om tre kort i rad ändras.** DESIGN.md avsnitt 8 förbjuder "tre kolumner med ikon, rubrik och en rad" och tillåter tre lika kort bara för jämförbara val. Regeln finns för att stoppa marknadsföringens tre ikoner ("Snabbt, Enkelt, Tryggt"). Ett rutnät av artiklar är något annat: N jämförbara saker i den ordning de publicerats. Ny lydelse: tre lika kort i rad är tillåtet när korten är samma slags sak (produkter i "Våra val", artiklar i ett rutnät), aldrig när de är tre påståenden om sajten. Pelarna visas fortfarande som rader, aldrig som tre ikonkolumner.

**Kortet är ett urklipp, inte ett WordPress-kort.** 1 px ram i `linje`, 2 px radie, bakgrund `papper`, ingen skugga, ingen färgad kant, ingen rundning. Bilden sitter kant i kant upptill med en 1 px linje under sig, som ett fotografi klistrat på ett kort. Hover lyfter ingenting, det stryker under rubriken med pennan.

**Kortrubriken är Zilla Slab.** Ny typografisk roll `kortrubrik`, Zilla Slab 600, 20 px på mobil och 22 på desktop, radavstånd 1,25. Semantiskt är den H3, men den ser ut som en liten tidningsrubrik. Det är den enda ändringen i typskalan, och den är skälet till att rutnätet läses som en tidningssida i stället för en länklista. Regeln "H3 är sans" gäller fortfarande för H3 i löptext; inuti ett Artikelkort gäller kortrubriken. Pennstrecket under H2 håller isär nivåerna.

**Etiketten på kort är "Typ · Nivå".** "Köpguide · Mellan", "Kunskap · Expert", "Bäst i test" på kategorikort. DESIGN.md avsnitt 6 säger i dag att nivån inte visas på startsidan; det ändras, nivån visas på alla kort. Christian bad om det, och det är den enda platsen där en hemmafixare och ett proffs ser vilka sidor som är för dem utan att klicka.

**Placeholder utan illustration.** Ett blankt blad ur samma block som skisserna: linjerat `papper-2` med marginallinje i penna, och pelarens ikon i 40 px i `blyerts-2` mitt på. Det är "skissen som inte är ritad än", och det ser ut som sajten. Aldrig en grå ruta, aldrig ett stockfoto, aldrig en packshot.

**Inget JavaScript.** Filter är länkar till statiska sidor, paginering är länkar, hela kortet klickbart med CSS. Ingen ö.

## 3. Startsidan

Blockordningen från `docs/INNEHALLSARKITEKTUR.md` avsnitt 5 behålls i allt utom ett: "Just nu" och "Senaste guider och tester" slås ihop till ett rutnät där "Just nu" är det stora kortet. Det tar bort dubbelbilden och ger sidan sin tidningsmodul. Rubriken "Räkna själv" renderas bara när det finns minst två kalkylatorer; med en enda är den redan säsongens verktygskort, och samma kort två gånger på en sida är samma fel som samma bild två gånger.

### Desktop, 1152 px innehållsbredd

```
┌──────────────────────────────────────────────────────────────────┐
│ H  Hantverkstips            Fukt Inomhus Verktyg Ämnen Guider    │
│ ‾‾‾‾‾‾‾‾‾‾‾                          Räkna själv  Så testar vi   │
├──────────────────────────────────────────────────────────────────┤
│ H1 Bygg, renovera och sköt huset utan att köpa fel.  (max 44rem) │
│ Ingress, två länkar i löptext                                    │
│                                                                  │
│ ┌ SÄSONG, 7/12 ─────────────────────┐ ┌ 5/12 ─────────────────┐ │
│ │                                   │ │ SÄSONGENS ÄMNE · SEPT │ │
│ │  Illustration (källaren)          │ │ H2 rubrik + pennstreck│ │
│ │  600 × 360 i ram                  │ │ En mening              │ │
│ │                                   │ │ ┌ Verktygskort ──────┐│ │
│ │                                   │ │ │ ▦ RÄKNA SJÄLV      ││ │
│ │                                   │ │ │ Hur stor avfuktare ││ │
│ │                                   │ │ │ Till kalkylatorn   ││ │
│ │ Bildtext                          │ │ └────────────────────┘│ │
│ └───────────────────────────────────┘ │ Läs först: 3 länkar    │ │
│                                       └────────────────────────┘ │
│                                                                  │
│ H2 Guider och tester ‾‾‾‾‾‾          Alla guider och tester →   │
│ ┌ STORT KORT (2 kolumner) ───────────────┐ ┌ KORT ─────────────┐ │
│ │ ┌ bild 5:3 ──────┐ PROBLEMGUIDE·MELLAN │ │ bild 5:3          │ │
│ │ │                │ Kortrubrik 26 px    │ ├───────────────────┤ │
│ │ │                │ Beskrivning 3 rader │ │ KÖPGUIDE · MELLAN │ │
│ │ │                │ Fukt · 15 sep 2026  │ │ Kortrubrik 22 px  │ │
│ │ └────────────────┘                     │ │ Beskrivning       │ │
│ └────────────────────────────────────────┘ │ Fukt · 16 sep     │ │
│ ┌ KORT ───────────┐ ┌ KORT ───────────┐ ┌ KORT ───────────────┐ │
│ │ bild            │ │ placeholder     │ │ bild                │ │
│ ├─────────────────┤ ├─────────────────┤ ├─────────────────────┤ │
│ │ PROJEKTGUIDE ·  │ │ KUNSKAP · MELLAN│ │ KUNSKAP · MELLAN    │ │
│ │ Kortrubrik      │ │ Kortrubrik      │ │ Kortrubrik          │ │
│ │ Beskrivning     │ │ Beskrivning     │ │ Beskrivning         │ │
│ │ Inomhus · 16 sep│ │ Fukt · 16 sep   │ │ Fukt · 16 sep       │ │
│ └─────────────────┘ └─────────────────┘ └─────────────────────┘ │
│                                                                  │
│ H2 Börja här ‾‾‾‾‾‾                          Alla ämnen →       │
│ ┌──────────────────────────────┬──────────────────────────────┐  │
│ │ ◇ Fukt                       │ ≋ Inomhus                    │  │
│ │ En mening om pelaren         │ En mening om pelaren         │  │
│ │ Länk 1                       │ Länk 1                       │  │
│ │ Länk 2                       │                              │  │
│ │ Länk 3                       │                              │  │
│ ├──────────────────────────────┼──────────────────────────────┤  │
│ │ ⚒ Verktyg                    │ (tom cell tills nästa pelare)│  │
│ │ En mening                    │                              │  │
│ │ Länk 1                       │                              │  │
│ └──────────────────────────────┴──────────────────────────────┘  │
│                                                                  │
│ H2 Bäst i test just nu ‾‾‾‾‾‾                                    │
│ ┌──────────────────────────────┬──────────────────────────────┐  │
│ │ Luftavfuktare                │ (nästa kategori)             │  │
│ │ VÅRT VAL Wood's SW39FW       │                              │  │
│ │ 5 948 kr · 9 granskade       │                              │  │
│ │ Alla vi granskat             │                              │  │
│ └──────────────────────────────┴──────────────────────────────┘  │
│                                                                  │
│ H2 Räkna själv ‾‾‾‾‾‾  (bara när det finns minst två)            │
│ ┌ Verktygskort ─┐ ┌ Verktygskort ─┐ ┌ Verktygskort ─┐            │
│                                                                  │
│ H2 Så jobbar vi ‾‾‾‾‾‾                                           │
│ Två till fyra meningar med två länkar (läsbredd)                 │
├──────────────────────────────────────────────────────────────────┤
│ Sidfot, fyra spalter                                             │
└──────────────────────────────────────────────────────────────────┘
```

### Mobil, 375 px

```
┌─────────────────────────────┐
│ H Hantverkstips      Meny ≡ │
├─────────────────────────────┤
│ H1 Bygg, renovera och       │
│ sköt huset utan att köpa    │
│ fel.                        │
│ Ingress med två länkar      │
│                             │
│ SÄSONGENS ÄMNE · SEPTEMBER  │
│ H2 rubrik ‾‾‾‾              │
│ ┌ Illustration 343 × 206 ─┐ │
│ └─────────────────────────┘ │
│ Bildtext                    │
│ ┌ Verktygskort ───────────┐ │
│ │ ▦ RÄKNA SJÄLV           │ │
│ │ Hur stor avfuktare...   │ │
│ │ Till kalkylatorn        │ │
│ └─────────────────────────┘ │
│ Läs först: 3 länkar, en per │
│ rad                         │
│                             │
│ H2 Guider och tester ‾‾‾‾   │
│ ┌ STORT KORT ─────────────┐ │
│ │ bild 343 × 206          │ │
│ ├─────────────────────────┤ │
│ │ PROBLEMGUIDE · MELLAN   │ │
│ │ Kortrubrik 22 px        │ │
│ │ Beskrivning             │ │
│ │ Fukt · 15 sep 2026      │ │
│ └─────────────────────────┘ │
│ ┌ KOMPAKT KORT ───────────┐ │
│ │ ┌bild┐ KÖPGUIDE · MELLAN│ │
│ │ │120 │ Kortrubrik 20 px │ │
│ │ │×72 │ Fukt · 16 sep    │ │
│ │ └────┘                  │ │
│ └─────────────────────────┘ │
│ ┌ KOMPAKT KORT ───────────┐ │
│ (tre till)                  │
│ Alla guider och tester →    │
│                             │
│ H2 Börja här ‾‾‾‾           │
│ ◇ Fukt                      │
│ En mening                   │
│ Länk 1 / Länk 2 / Länk 3    │
│ ───────────────────────     │
│ ≋ Inomhus ...               │
│ ───────────────────────     │
│ ⚒ Verktyg ...               │
│ Alla ämnen →                │
│                             │
│ H2 Bäst i test just nu ‾‾‾  │
│ Luftavfuktare               │
│ VÅRT VAL Wood's SW39FW      │
│ 5 948 kr · Alla vi granskat │
│                             │
│ H2 Så jobbar vi ‾‾‾‾        │
│ Text                        │
├─────────────────────────────┤
│ Sidfot, en spalt            │
└─────────────────────────────┘
```

### Blocken

**Öppning.** Som i dag men i full sidbredd utan högerspalt. H1 max 44 rem, ingress under. Inget verktygskort här; det flyttar ner till säsongsblocket där det hör hemma.

**Säsongens ämne.** Ett tvåspaltigt band på desktop, 7/12 och 5/12 med 48 px mellanrum. Vänster: illustrationen i ram med bildtext. Höger, uppifrån: etikett "Säsongens ämne · September" (månaden från byggtidpunkten), en H2 med pennstreck som chefredaktören skriver (mockupen har "Källaren är som våtast i september"), en mening, verktygskortet för säsongens kalkylator, och "Läs först" med tre länkar (hubbens `viktiga`). Marginalanteckningen får sitta vid illustrationen som förut. Mobil: etikett, H2, illustration, verktygskort, länkar, staplat. Blocket byter innehåll per säsong enligt tabellen i INNEHALLSARKITEKTUR (augusti till november fukt, december till februari elkostnad, mars till juni altan), och de tre länkarna kommer från den pelare säsongens kalkylator hör till.

**Guider och tester.** H2 med pennstreck till vänster och länken "Alla guider och tester" till höger på samma rad (15 px, penna, understruken). Rutnät med fem kort: det första är `justNu` i variant `stor` och tar två kolumner på desktop, de fyra följande är de senaste publicerade i vanlig variant, med `justNu` bortfiltrerad. Ett stort plus fyra är sex celler, två rader exakt fyllda; sex kort skulle lämna ett ensamt kort på en tredje rad. Mobil: det stora kortet i stående variant, de fyra i variant `kompakt` (bild till vänster) så att sidan inte blir 2 400 px lång, sedan länken. Tester, jämförelser och kategorisidor ingår i "senaste" på samma villkor som artiklar.

**Börja här.** Fortfarande rader, aldrig tre ikonkolumner, men i två spalter på desktop med 1 px linjer mellan raderna och 48 px mellan spalterna, i sidbredd. Rad: pelarikon 24 px och pelarnamn som H3 (sans, fet, det är löptext inte kort), en mening, sedan `viktiga` som länkar på var sin rad (inte kommaseparerade i en klump som nu, det var oläsligt vid tre länkar). Sist en länk "Alla ämnen". Med åtta pelare blir det fyra rader per spalt, och sidan behåller sin höjd.

**Bäst i test just nu.** Som nu, men i två spalter av rader på desktop (så DESIGN.md redan sa, det byggdes i en). Lägg till antalet granskade ("9 granskade") från databasen. Länktext "Alla vi granskat".

**Räkna själv.** Verktygskort i tre kolumner, samma rutnät som artikelkorten. Renderas när `KALKYLATORER.length >= 2`.

**Så jobbar vi.** Oförändrat, läsbredd.

## 4. Pelarhub, `/fukt/`

Huben förblir handskriven i sin inledning och blir ett rutnät i sina grupper. Chefredaktörens text är kartans förklaring, korten är kartan. Grupperna är fyra, en fjärde ("Gör det själv", projektguider) tillkommer för Inomhus och Altan. Grupp utan sidor renderas inte.

| Grupp | Innehåll | Ordning |
|---|---|---|
| Hitta felet | problemguider, kunskap | senaste först |
| Välj rätt | köpguider, jämförelser, kategorisidor (som kategorikort) | kategorikort först, sedan senaste |
| Gör det själv | projektguider | senaste först |
| Räkna | kalkylatorer med `kategori` i pelaren, som verktygskort | registrets ordning |

Hur chefredaktören styr: hubfilen behåller sin brödtext, och under varje H2 skriver hon sin mening och sedan `<Kortgrupp grupp="hitta-felet" />`. Komponenten läser pelaren från `Astro.locals.pelare` (som rutten sätter) och renderar rätt kort. Så blir gruppen både handskriven (meningen) och komplett (korten kommer från frontmatter, inte från att någon kommer ihåg att lägga till dem). Teknisk ansvarig avgör om `Astro.locals` eller en prop via `components` är rätt väg.

"Alla sidor i Fukt" med nivågrupperna finns kvar sist, som säkerhetslistan mot föräldralösa sidor, men i tre spalter på desktop (Enkel, Mellan, Expert sida vid sida) och med länken "Alla guider i Fukt" till `/guider/fukt/` ovanför. Den är ett register, inte en läsyta, så den får vara tät: 15 px, etikett och titel per rad.

### Desktop

```
┌──────────────────────────────────────────────────────────────────┐
│ Sidhuvud                                                         │
├──────────────────────────────────────────────────────────────────┤
│ Hantverkstips / Fukt                                             │
│ ◇ H1 Fukt i huset, hitta orsaken innan du köper något (44 rem)   │
│ Ingress                                                          │
│ Handskriven inledning, ett till tre stycken (läsbredd)           │
│                                                                  │
│ H2 Hitta felet ‾‾‾‾‾‾                                            │
│ Chefredaktörens mening om var man börjar (läsbredd)              │
│ ┌ KORT ──────────┐ ┌ KORT ──────────┐ ┌ KORT ──────────┐         │
│ │ bild           │ │ placeholder    │ │ bild           │         │
│ │ PROBLEMGUIDE · │ │ KUNSKAP ·      │ │ KUNSKAP ·      │         │
│ │ Kortrubrik     │ │ Kortrubrik     │ │ Kortrubrik     │         │
│ │ Beskrivning    │ │ Beskrivning    │ │ Beskrivning    │         │
│ └────────────────┘ └────────────────┘ └────────────────┘         │
│                                                                  │
│ H2 Välj rätt ‾‾‾‾‾‾                                              │
│ Mening                                                           │
│ ┌ KATEGORIKORT ──┐ ┌ KORT ──────────┐ ┌ KORT ──────────┐         │
│ │ placeholder ◇  │ │ bild           │ │ bild           │         │
│ │ BÄST I TEST    │ │ KÖPGUIDE ·     │ │ JÄMFÖRELSE ·   │         │
│ │ Luftavfuktare  │ │ Kortrubrik     │ │ Kortrubrik     │         │
│ │ Vårt val ...   │ │ Beskrivning    │ │ Beskrivning    │         │
│ │ 9 granskade    │ │                │ │                │         │
│ └────────────────┘ └────────────────┘ └────────────────┘         │
│                                                                  │
│ H2 Räkna ‾‾‾‾‾‾                                                  │
│ ┌ Verktygskort ──┐                                               │
│                                                                  │
│ H2 Alla sidor i Fukt ‾‾‾‾‾‾          Alla guider i Fukt →       │
│ ┌ Enkel ──────────┬ Mellan ─────────┬ Expert ─────────┐          │
│ │ TYP  Titel      │ TYP  Titel      │ TYP  Titel      │          │
│ │ TYP  Titel      │ TYP  Titel      │                 │          │
│ └─────────────────┴─────────────────┴─────────────────┘          │
├──────────────────────────────────────────────────────────────────┤
│ Sidfot                                                           │
└──────────────────────────────────────────────────────────────────┘
```

### Mobil

```
┌─────────────────────────────┐
│ Sidhuvud                    │
├─────────────────────────────┤
│ Hantverkstips / Fukt        │
│ ◇ H1 Fukt i huset, hitta    │
│   orsaken innan du köper    │
│ Ingress                     │
│ Inledning                   │
│                             │
│ H2 Hitta felet ‾‾‾‾         │
│ Mening                      │
│ ┌ KORT (stående) ─────────┐ │
│ │ bild 343 × 206          │ │
│ │ PROBLEMGUIDE · MELLAN   │ │
│ │ Kortrubrik              │ │
│ │ Beskrivning             │ │
│ └─────────────────────────┘ │
│ ┌ KORT ───────────────────┐ │
│ (staplade, 16 px emellan)   │
│                             │
│ H2 Välj rätt ‾‾‾‾           │
│ ...                         │
│ H2 Räkna ‾‾‾‾               │
│ Verktygskort                │
│ H2 Alla sidor i Fukt ‾‾‾‾   │
│ Enkel / Mellan / Expert som │
│ tre listor under varandra   │
├─────────────────────────────┤
│ Sidfot                      │
└─────────────────────────────┘
```

På mobil används stående kort i huben (inte kompakta), eftersom huben är en läsyta för den som valt ämne och bilden är halva anledningen att klicka. Med tjugo sidor i en pelare är det 20 kort, cirka 7 000 px; det är ett accepterat pris, och "Alla sidor i Fukt" ligger under för den som bara vill ha listan.

Layouten går från läsbredd till sidbredd (`bred={true}`), men rubrikblocket, inledningen och gruppernas meningar hålls till 44 rem.

## 5. Alla ämnen, `/amnen/`

URL enligt INNEHALLSARKITEKTUR avsnitt 3: sidan är varken pelare, kategori, test eller kalkylator, så den får en egen rot som läggs i `RESERVERADE_ROTSLUGS`. `/amnen/` följer slugreglerna (gemener, inga diakritiska tecken, avslutande snedstreck) och läses av människor som "ämnen". Alternativet `/karta/` är kortare men säger inte vad sidan är.

Sidan är kartan över sajten, ordnad som människor tänker: ämne först, sedan vad som finns i ämnet. En sektion per publicerad pelare i `PELARE`-ordning. Opublicerade pelare visas inte (en karta med tomma rum är sämre än en mindre karta). I varje sektion: pelarikon 32 px och pelarnamn som H2 med pennstreck (länk till huben), pelarens ingress, sedan tre spalter på desktop:

| Spalt | Innehåll |
|---|---|
| Guider (7/12) | Länklistor grupperade under etikett per typ i fast ordning: Problemguider, Kunskap, Köpguider, Projektguider, Jämförelser. Varje rad är titel som länk och nivån i etikett-stil efter. Tester listas under kategorin, inte här |
| Bäst i test (3/12) | Ett kategorikort per kategorisida vars `pelare` innehåller pelaren, med vårt val och antal granskade. Under kortet: testerna i kategorin som länkrader |
| Räkna (2/12) | Verktygskort för kalkylatorer med `kategori` i pelaren |

Inget rutnät av artikelkort här. Kartan ska vara tät och skanningsbar, och med femhundra artiklar måste den vara en lista. Korten finns för kategorier och kalkylatorer, som är få.

```
DESKTOP                                                MOBIL
┌──────────────────────────────────────────────┐   ┌───────────────────┐
│ Hantverkstips / Alla ämnen                   │   │ H1 Alla ämnen     │
│ H1 Alla ämnen                                │   │ Ingress           │
│ Ingress: vad sajten täcker, en mening per    │   │                   │
│ pelare som kommer                            │   │ ◇ H2 Fukt ‾‾‾‾    │
│                                              │   │ Ingress           │
│ ◇ H2 Fukt och inomhusklimat ‾‾‾‾‾‾           │   │ PROBLEMGUIDER     │
│ Pelarens ingress                             │   │  Titel     MELLAN │
│ ┌ Guider 7/12 ───────┬ Bäst i test ┬ Räkna ┐ │   │ KUNSKAP           │
│ │ PROBLEMGUIDER      │ ┌kategori-┐ │┌verk-┐│ │   │  Titel     MELLAN │
│ │  Titel      MELLAN │ │kort     │ ││tygs-││ │   │  Titel     MELLAN │
│ │ KUNSKAP            │ │Luftav-  │ ││kort ││ │   │ KÖPGUIDER         │
│ │  Titel      MELLAN │ │fuktare  │ │└─────┘│ │   │  Titel     MELLAN │
│ │  Titel      MELLAN │ └─────────┘ │       │ │   │ ┌ kategorikort ─┐ │
│ │ KÖPGUIDER          │ Tester:     │       │ │   │ └───────────────┘ │
│ │  Titel      MELLAN │  Wood's ... │       │ │   │ ┌ verktygskort ─┐ │
│ └────────────────────┴─────────────┴───────┘ │   │ └───────────────┘ │
│ ─────────────────────────────────────────── │   │ ───────────────── │
│ ≋ H2 Inomhus och montering ‾‾‾‾‾‾            │   │ ≋ H2 Inomhus ‾‾‾  │
│ ...                                          │   │ ...               │
│ ⚒ H2 Verktyg och maskiner ‾‾‾‾‾‾             │   │                   │
│ ...                                          │   │                   │
│                                              │   │ Fler ämnen kommer │
│ Fler ämnen kommer: Altan (februari), Tak,    │   │ (text)            │
│ Grund, Isolering, El (text, inga länkar)     │   │                   │
└──────────────────────────────────────────────┘   └───────────────────┘
```

Sist ett stycke i blyerts-2 om vilka pelare som kommer, utan länkar. Det säger läsaren att sajten växer utan att skicka henne till en tom sida. Strukturerad data: `ItemList` med hubbarna. Brödsmulor: Hantverkstips / Alla ämnen.

## 6. Alla guider, `/guider/`

`/guider/` är ledigt: artiklar ligger under pelaren (avsnitt 3, punkt 3), och samlingsnamnet `guider` syns aldrig i en adress. Sidan läggs i `RESERVERADE_ROTSLUGS`. Den statiska mappen `src/pages/guider/` vinner över `[rot]` i Astro, så inga kollisioner.

### Vad som listas

Allt publicerat som har en sida att gå till: guider, kunskap, tester, jämförelser och kategorisidor (som kategorikort, med `noindex` respekterad, alltså en kategori som är `noindex` visas inte förrän den är indexerbar). Sorterat på `publicerad` fallande, kategorisidor på `uppdaterad`. Tester och jämförelser saknar `pelare` och får sin pelare via kategorifilens `pelare[0]`.

### Filter utan JavaScript

Tre filterrader ovanför rutnätet, varje rad är etikett och länkar. Den aktiva posten är blyerts, 700, med 2 px understrykning i penna och `aria-current="page"`, inte en länk. De andra är penna-länkar med 1 px understrykning. Antalet i parentes i blyerts-2 efter varje post. Poster med noll sidor visas inte (ett filter som ger tom sida är ett trasigt filter).

| Rad | Poster | Adress |
|---|---|---|
| Ämne | Alla, sedan pelare med minst en sida, i `PELARE`-ordning | `/guider/`, `/guider/fukt/` |
| Typ | Alla, Köpguide, Problemguide, Projektguide, Kunskap, Test, Jämförelse, Bäst i test | `/guider/typ/kopguide/` |
| Nivå | Alla, Enkel, Mellan, Expert | `/guider/niva/enkel/` |

Ett filter i taget. Att kombinera (Fukt och Enkel) skulle ge 8 × 8 × 3 statiska sidor gånger paginering, och nästan alla skulle vara tomma. På en filtersida visar de två andra raderna fortfarande sina länkar, som byter filter i stället för att lägga till. Ämne är det filter folk använder, så det får den kortaste adressen.

### Paginering

24 kort per sida (åtta rader om tre på desktop). Adresser `/guider/sida/2/` och `/guider/fukt/sida/2/`. Under rutnätet en rad: "Sida 2 av 21" i blyerts-2 till vänster, "Föregående sida" och "Nästa sida" som penna-länkar till höger, ingen sifferlista (vid 21 sidor blir den ett band av tal ingen klickar). Filtersidor pagineras på samma sätt. `rel="prev"` och `rel="next"` i `<head>`. Sidan 1 är kanonisk för filtret; sida 2 och uppåt är indexerbara men länkas bara från varandra och från sidan 1. Vid 500 artiklar: huvudlistan har 21 sidor, den största pelaren kanske 6, en nivå kanske 10. Alla byggs statiskt, cirka 60 till 80 HTML-sidor totalt, ingen kostnad.

### Layout

```
DESKTOP
┌──────────────────────────────────────────────────────────────────┐
│ Hantverkstips / Guider                                           │
│ H1 Alla guider och tester                                        │
│ 43 sidor, den senaste 16 september 2026                          │
│                                                                  │
│ ┌ FILTER (papper-2, slät, 1 px linje, 16/24 px inre marginal) ─┐ │
│ │ ÄMNE   Alla (43)  Fukt (12)  Inomhus (9)  Altan (4) ...       │ │
│ │ TYP    Alla  Köpguide (6)  Problemguide (4)  Kunskap (11) ... │ │
│ │ NIVÅ   Alla  Enkel (14)  Mellan (22)  Expert (7)              │ │
│ └───────────────────────────────────────────────────────────────┘ │
│                                                                  │
│ ┌ KORT ──────────┐ ┌ KORT ──────────┐ ┌ KORT ──────────┐         │
│ │ bild 5:3       │ │ placeholder    │ │ bild           │         │
│ ├────────────────┤ ├────────────────┤ ├────────────────┤         │
│ │ KÖPGUIDE·MELLAN│ │ KUNSKAP·MELLAN │ │ PROJEKTGUIDE·  │         │
│ │ Kortrubrik     │ │ Kortrubrik     │ │ Kortrubrik     │         │
│ │ Beskrivning    │ │ Beskrivning    │ │ Beskrivning    │         │
│ │ Fukt · 16 sep  │ │ Fukt · 16 sep  │ │ Inomhus·16 sep │         │
│ └────────────────┘ └────────────────┘ └────────────────┘         │
│ (åtta rader om tre)                                              │
│                                                                  │
│ Sida 1 av 2                     Föregående sida · Nästa sida     │
├──────────────────────────────────────────────────────────────────┤
│ Sidfot                                                           │
└──────────────────────────────────────────────────────────────────┘

MOBIL
┌─────────────────────────────┐
│ Hantverkstips / Guider      │
│ H1 Alla guider och tester   │
│ 43 sidor                    │
│ ┌ FILTER ─────────────────┐ │
│ │ ÄMNE                    │ │
│ │ Alla · Fukt · Inomhus · │ │
│ │ Altan (radbryts)        │ │
│ │ TYP                     │ │
│ │ Alla · Köpguide · ...   │ │
│ │ NIVÅ                    │ │
│ │ Alla · Enkel · Mellan · │ │
│ └─────────────────────────┘ │
│ ┌ KORT (stående) ─────────┐ │
│ │ bild 343 × 206          │ │
│ │ KÖPGUIDE · MELLAN       │ │
│ │ Kortrubrik              │ │
│ │ Beskrivning             │ │
│ │ Fukt · 16 sep           │ │
│ └─────────────────────────┘ │
│ (staplade)                  │
│ Sida 1 av 2                 │
│ Föregående · Nästa          │
└─────────────────────────────┘
```

Filterblocket är slätt `papper-2`, inte linjerat (det är ett gränssnitt, inte en anteckning). Länkarna i filtret har 44 px klickhöjd på mobil genom `padding-block`, och 8 px vågrätt mellanrum, radbrutna. Ingen rullgardin, ingen `<select>`, inga knappar.

H1 på filtersidor: "Guider och tester om fukt", "Köpguider", "Guider för nybörjare" ("Enkel" blir "för nybörjare" i H1 men "Enkel" i filtret; chefredaktören bestämmer ordvalet). `<title>` "Alla guider och tester · Hantverkstips" respektive "Guider om fukt · Hantverkstips". Meta description per filter, mallgenererad. Strukturerad data: `ItemList` med sidans kort.

## 7. Huvudmenyn, mobilmenyn och sidfoten

INNEHALLSARKITEKTUR avsnitt 4 ger menyn fem hubbar plus Räkna själv och Så testar vi. Med två nya poster blir det för många, så antalet hubbar i menyn sänks från fem till tre (`MAX_HUBBAR_I_MENY = 3`) och "Ämnen" tar hand om resten. Så här:

**Desktop**, 15 px, till höger om ordmärket, i ordning: de tre första publicerade hubbarna (Fukt, Inomhus, Verktyg), Ämnen (`/amnen/`), Guider (`/guider/`), Räkna själv, Så testar vi. Sju poster, cirka 640 px vid 15 px med 24 px mellanrum, får plats vid 1024 med ordmärket. Namnen i menyn är korta ("Ämnen", "Guider"), sidornas H1 är längre ("Alla ämnen", "Alla guider och tester"). När Altan publiceras i februari trängs den inte in i menyn, den finns under Ämnen och på startsidan; om Christian vill ha den i menyn byts Verktyg ut, en redaktionell fråga.

**Mobilmenyn**, 48 px per rad, uppifrån: de tre hubbarna med pelarikon, raden "Alla ämnen" utan ikon, avdelare, "Guider och tester" och "Räkna själv" (kalkylatorikon), avdelare, etiketten "Bäst i test" och kategorierna som nu, avdelare, "Så testar vi" och "Om Hantverkstips".

**Sidfoten** behåller sina fyra spalter. Spalten Ämnen får sist raderna "Alla ämnen" och "Alla guider och tester". Ingenting annat ändras.

**Brödsmulor.** `/amnen/`: Hantverkstips / Alla ämnen. `/guider/`: Hantverkstips / Guider. `/guider/fukt/`: Hantverkstips / Guider / Fukt. Paginerade sidor har samma brödsmulor som sida 1.

## 8. Komponent Artikelkort

`src/components/ui/Artikelkort.astro`. Ett urklipp med bild, etikett, rubrik, beskrivning och metarad. Samma komponent bär artiklar, tester, jämförelser och kategorisidor; det som skiljer är vad som skickas in.

### Props

```ts
interface Props {
  etikett: string;          // "Köpguide", "Test", "Bäst i test". Från typEtikett()
  niva?: 'enkel' | 'mellan' | 'expert';   // visas som " · Mellan" efter etiketten. Kategorikort har ingen
  rubrik: string;           // title
  beskrivning: string;      // description, klipps till tre rader i CSS
  illustration?: ImageMetadata;   // bild från frontmatter. SVG renderas som <img>, raster via <Image>
  bildAlt?: string;         // standard "" (bilden är dekorativ på ett kort, rubriken bär betydelsen)
  pelare: PelareSlug;       // för placeholderns ikon och metaradens pelarnamn
  datum?: Date;             // publicerad eller uppdaterad. Utelämnas på kategorikort
  meta?: string;            // fri text i stället för datum: "9 granskade", "3 testade"
  href: string;
  variant?: 'standard' | 'stor' | 'kompakt';   // standard
  rubrikniva?: 2 | 3;       // standard 3. 2 i rutnät som saknar H2 ovanför (förekommer inte i dag)
}
```

Inga andra props. Ingen `class`-prop, korten ser likadana ut överallt. Datan byggs av en hjälpfunktion `tillKort(entry)` i `src/lib/kort.ts` så att startsida, hub, `/amnen/` och `/guider/` mappar frontmatter till props på ett ställe.

### Mått och typografi

| Del | Mobil (375) | Desktop (från 1024) |
|---|---|---|
| Kortets bredd | 343 px (en kolumn) | 368 px i tre kolumner om 1152 med 24 px mellanrum; 552 i två |
| Ram, radie, bakgrund | 1 px `linje`, 2 px, `papper` | samma |
| Bild | kortets bredd, 5:3 (343 × 206), 1 px `linje` under | 368 × 221 |
| Text, inre marginal | 16 px | 24 px |
| Etikett | Atkinson 700, 12 px, versaler, 0,06 em, `blyerts` | 13 px |
| Kortrubrik | Zilla Slab 600, 20 px, radavstånd 1,25, `blyerts`, 8 px ovanför | 22 px |
| Beskrivning | Atkinson 400, 17 px, radavstånd 1,5, `blyerts-2`, 8 px ovanför, högst 3 rader (`-webkit-line-clamp: 3`) | samma |
| Metarad | Atkinson 400, 14 px, `blyerts-2`, 12 px ovanför, trycks mot kortets botten (`margin-top: auto`) | samma |
| Mellan kort | 16 px (staplade) | 24 px |

Bildformatet är 5:3, inte 3:2, eftersom skisserna är 600 × 360 och en skiss med handskrift inte tål beskärning. Foton (3:2) beskärs till 5:3 med `object-fit: cover`, det tål de. Bilden har alltid `width` och `height`, `loading="lazy"` utom på startsidans stora kort som är LCP, `decoding="async"`.

Metaraden är "{Pelarens korta namn} · {datum}", där datumet är `formateraDatumKort` ("16 sep 2026"). På kategorikort är den `meta` ("9 granskade"). På hubben, där alla kort har samma pelare, visas bara datumet.

Kortet är `display: flex; flex-direction: column` så att metaraden landar i botten oavsett textlängd, och korten i en rad blir lika höga av rutnätet.

### Varianter

**standard.** Bild överst, text under. Beskrivningen visas.

**stor.** Bara på startsidan, bara det första kortet. Desktop: kortet tar två kolumner (760 px), bilden till vänster 5/8 av kortets bredd (475 px bred), texten till höger lodrätt centrerad, kortrubrik 26 px, beskrivning i 18 px och upp till fyra rader. Bilden får `object-fit: contain` mot `papper`, aldrig `cover`: en skiss med handskrift tål ingen beskärning, och skissens eget papper är samma färg så kanterna syns inte. Blir texten högre än bilden får bilden luft ovan och under. Mobil: identisk med standard. Det stora kortet finns för att sidan ska ha en huvudsak, och det är chefredaktörens `justNu`.

**kompakt.** Bild 120 × 72 till vänster (5:3), text till höger, ingen beskrivning, etikett, kortrubrik 20 px och metarad. Kortets höjd 96 px med 12 px inre marginal. Används på mobil i startsidans rutnät (kort två till sex) och där en lista ska vara tät. Placeholdern fungerar i 120 × 72 med ikonen i 24 px.

### Utan illustration

Bildytan fylls av ett blankt blad: bakgrund `papper-2`, linjer i `linje` var 24:e px, marginallinje i `penna` vid 35 procent 24 px in (samma recept som `.linjerat` men utan innehållsmarginal), och pelarens ikon ur spriten centrerad, 40 px, `blyerts-2`, `aria-hidden`. Ingen text på bladet. Det är samma papper som skisserna ritas på, så kort med och utan skiss ser ut som samma slags urklipp. Kategorikort använder alltid placeholdern, en packshot får aldrig vara ett korts bild.

### Hover, fokus, klickyta

Hela kortet är klickbart, men länken är rubriken (regeln "rubriken är länken", inga "Läs mer"). Tekniken: `<a>` runt rubriktexten med `::after { position: absolute; inset: 0 }` och kortet `position: relative`. Skärmläsare får en länk per kort med rubriken som namn.

| Tillstånd | Utseende |
|---|---|
| Vila | Rubrik utan understrykning. Ram `linje` |
| Hover | Rubriken får 2 px understrykning i `penna`, `text-underline-offset: 3px`. Ingenting annat rör sig, kortet lyfter inte, ramen byter inte färg. `transition: text-decoration-color 150ms` |
| Fokus | `.artikelkort:has(a:focus-visible)` ger kortet `outline: 3px solid penna; outline-offset: 2px`. Webbläsare utan `:has` visar ringen runt rubriken |
| Aktiv | Som hover |
| Bild saknas | Placeholder enligt ovan |
| Beskrivning saknas | Metaraden flyttar upp, kortet blir kortare. Får inte hända för artiklar (bygget varnar), men händer för kategorikort utan `meta` |

`prefers-reduced-motion` tar bort övergången. Klickytan är alltid över 44 px hög.

### Rutnätet, `Artikelrutnat.astro`

`interface Props { kort: KortData[]; storForsta?: boolean; kompaktPaMobil?: boolean }`. `<ul>` utan punkter, `display: grid; gap: 24px` (16 på mobil), `grid-template-columns: repeat(3, minmax(0, 1fr))` från 1024, två från 640, en under. Med `storForsta` får första `<li>` `grid-column: span 2` från 1024. Kortet renderas som `<li>` med `<article>`. Rubriken är H3 (H2 ovanför är sektionens rubrik med pennstreck).

## 9. Övriga komponenter som berörs

**Verktygskort.** Får propen `iRutnat?: boolean` som tar bort `my-8` så att det kan ligga i ett rutnät med samma ram och radie som artikelkorten. Innehållet oförändrat.

**Kategorikort.** Ingen egen komponent: Artikelkort med `etikett="Bäst i test"`, `rubrik` kategorins namn, `beskrivning` "Vårt val är Wood's SW39FW I-EcoDefrost+, 5 948 kr." (skrivs av `tillKort` från kategorifilens `val[0]` och databasen), `meta` "9 granskade" och placeholder. Kategorier utan databas visar beskrivningen utan pris.

**Filterrad** (`Filterrad.astro`, bara på `/guider/`). `interface Props { rader: { etikett: string; poster: { namn: string; antal: number; href: string; aktiv: boolean }[] }[] }`. Utseende enligt avsnitt 6.

**Paginering** (`Paginering.astro`). `interface Props { sida: number; antal: number; bas: string }`. Renderar raden "Sida n av m" och länkarna. Renderas inte när `antal === 1`.

**BorjaHar.** Två spalter från 1024, länkar på egen rad, sist "Alla ämnen". Annars oförändrad.

## 10. Filer som ändras och skapas

Utvecklaren bygger, teknisk ansvarig specar datat, chefredaktören skriver texterna som markeras. Ordningen är den jag rekommenderar.

| Fil | Ändring |
|---|---|
| `src/styles/global.css` | Ny textroll `--text-kortrubrik` 1,25 rem och `--text-kortrubrik-lg` 1,375 rem (radavstånd 1,25, vikt 600). Klasserna `.artikelkort` (flex, position, `:has` fokus) och `.plats-blad` (placeholderns papper). Inga nya färger |
| `src/lib/kort.ts` | Ny. `KortData`, `tillKort(entry)` för guider, kunskap, tester, jämförelser och kategorier, `allaKort()` sorterad, `pelareForKategori()` |
| `src/components/ui/Artikelkort.astro` | Ny, enligt avsnitt 8 |
| `src/components/ui/Artikelrutnat.astro` | Ny |
| `src/components/ui/Kortgrupp.astro` | Ny. Hubbens grupper, läser pelaren från rutten och renderar Artikelrutnat |
| `src/components/ui/Filterrad.astro` | Ny |
| `src/components/ui/Paginering.astro` | Ny |
| `src/components/ui/Verktygskort.astro` | Prop `iRutnat` |
| `src/components/ui/BorjaHar.astro` | Två spalter, länkar radvis, länk till `/amnen/` |
| `src/pages/index.astro` | Ny blockordning enligt avsnitt 3. Säsongsblocket, rutnätet med `storForsta`, "Räkna själv" villkorad |
| `src/content/sidor/startsida.mdx` | Chefredaktören: säsongsrubrik och mening som nya fält `sasongRubrik`, `sasongText` (schema i `content.config.ts`) |
| `src/components/vyer/PelarHub.astro` | Grupper som rutnät via Kortgrupp, register i tre spalter, `bred={true}`, länk till `/guider/[pelare]/` |
| `src/content/pelare/fukt.mdx`, `inomhus.mdx`, `verktyg.mdx` | Chefredaktören: inledning, en mening per grupp och `<Kortgrupp grupp="..." />` under varje H2 |
| `src/pages/amnen/index.astro` | Ny, enligt avsnitt 5 |
| `src/pages/guider/[...vag].astro` | Ny. `getStaticPaths` bygger `/guider/`, `/guider/[pelare]/`, `/guider/typ/[typ]/`, `/guider/niva/[niva]/` och `/sida/n/` under var och en. Vy i `src/components/vyer/Guidegalleri.astro` |
| `src/layouts/Bas.astro` | Huvudmenyn med Ämnen och Guider, mobilmenyn enligt avsnitt 7, sidfotens två rader, `rel="prev"` och `rel="next"` via ny prop `paginering?` |
| `src/lib/pelare.ts` | `MAX_HUBBAR_I_MENY = 3`, `'amnen'` och `'guider'` i `RESERVERADE_ROTSLUGS` |
| `src/content.config.ts` | Startsidans två nya fält |
| `docs/DESIGN.md` | Avsnitt 2 (kortrubrik), 5.1 och 5.2 skrivs om, nya 5.9 Alla ämnen och 5.10 Alla guider, avsnitt 6 Artikelkort och Filterrad, avsnitt 6 Etikett (nivå på kort), avsnitt 8 (tre kort i rad). Designansvarig gör det efter godkännande |
| `docs/INNEHALLSARKITEKTUR.md` | Avsnitt 3 (två reserverade rötter), 4 (menyn), 5 (startsidans block 4 och 6 slås ihop). SEO-strategen godkänner |
| `docs/SPEC-SIDMALLAR.md` | Avsnitt 2 (nya komponenter), 4.1, 4.2, nya 4.11 och 4.12. Teknisk ansvarig |

### Vad som inte ändras

Tokens för färg, avstånd, radier och skugga. Typsnitten och deras filer. Pennstreck, markering, linjerat papper och deras regler. Artikelmallen (`Artikel.astro`), kategorisidan, testsidan, jämförelsen, kalkylatorn, om-sidorna, författarsidan. Produktkort, köpknapp, jämförelsetabell, faktaruta, varning, reklamband, brödsmulor, innehållsförteckning, författarruta. Illustrationerna och deras regler. Sidhuvudets höjd och ordmärket. Sidfotens struktur. Reklamreglerna: startsidan, hubben, `/amnen/` och `/guider/` har inga köpknappar och inget reklamband, kategorikorten är länkar. Inga nya beroenden, ingen klient-JS.

## 11. Mockuperna

Två HTML-filer, 1200 px, inline CSS med tokens från DESIGN.md, typsnitt från Google Fonts (i produktion self-hostade), inga skript. Ordmärket är förenklat (symbolen är ritad om i mockupen, produktionen använder `ordmarke-inline.svg`). Illustrationerna hämtas från de publicerade adresserna under `/_astro/` på www.hantverkstips.se; luftfuktighetsartikeln och altanguiden saknar bild i frontmatter och visar placeholdern, vilket är precis det tillståndet vi behöver se.

- `mockup-startsida-2026-09-16.html`: hela startsidan med fem av de sex publicerade sidorna i rutnätet (altanguiden är äldst och faller utanför) och kategorin Luftavfuktare. Säsongsrubriken är min platshållare, chefredaktören skriver den riktiga.
- `mockup-guider-2026-09-16.html`: `/guider/` med filter, sju kort och pagineringsraden som exempel på hur den ser ut vid många sidor (i dag skulle den inte renderas, det står i mockupen).

## 12. Frågor till Christian

1. Nivå på alla kort, även startsidan: ja eller nej? Jag rekommenderar ja.
2. Menyn med tre hubbar plus Ämnen och Guider: rätt avvägning, eller vill du ha fyra hubbar och stryka Så testar vi ur menyn (den finns i sidfoten och i "Så jobbar vi")?
3. Kortrubrik i Zilla Slab: det är den enda typografiska nyheten och den syns på varje kort. Titta på mockupen innan du säger ja.
4. Vill du ha `/amnen/` eller är sidfoten plus startsidans "Börja här" tillräckligt tills sajten har fem pelare? Jag rekommenderar att bygga den nu, den kostar en dag och ger Google en ren karta.
