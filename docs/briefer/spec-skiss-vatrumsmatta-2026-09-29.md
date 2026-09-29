# Spec: snittskiss av våtrumsmattan från väggen till golvbrunnen

UX och bygge, 2026-09-29. Beställd av koordinatorn som huvudbild för `src/content/kunskap/badrum/vatrumsmatta.mdx` (utkast). Checklistan är `docs/briefer/seo-checklista-2026-09-29/badrum-4.md` rad 72, faktabladet `docs/briefer/faktablad/kunskap-vatrumsmatta.md` avsnitt 1b (GVK 2026 § 8.2.4) och BBV 26:1 § 6.5.1 (rad 53). Hantverkarens förslag: hörnet vid brunnen, med mattan uppvikt minst 130 mm, en remsa på cirka 80 mm under kaklet i gult, klämring och svetsad skarv minst 500 mm från brunnen.

Handen, papperet, skrafferingen, kaklet, fästmassans prickar och ledarna är desamma som i `src/assets/illustrationer-kallor/badrum/toalettstol-fot.svg` och `fogar-badrum-snitt.svg`. Läs `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3, 5, 7 och 8 och `docs/briefer/spec-skiss-toalettstol-fot-2026-09-29.md` i sin helhet; allt som inte står här gäller som där.

## 1. Vad bilden ska säga

Mattan är ett tråg: den går obruten från väggen, över golvet och ner i brunnen, där klämringen håller den. En läsare ser uppvikningen på väggen, remsan av matta som syns under kaklet, den svetsade skarven och klämringen. Mattan i penna är den enda saken som pekar.

Källorna, GVK § 8.2.4 ordagrant: "Golvets uppvik ska vara minst 130 mm om väggen har ett keramiskt ytskikt"; avståndet mellan kaklets underkant och golvet "cirka 80 mm" för täthetskontroll av svetsfogen i innerhörnet och byte av mattan; "Skarvar på golvmattor ska trådsvetsas och placeras minst 500 mm från golvbrunnen". BBV 26:1 § 6.5.1 figur 22: "ca 80 mm synlig plastmatta". Klämringen: GBR:s skötselråd (faktabladet rad 324) och sidan. **Nyckeltalet är cirka 80 mm**, remsan. Det får gul markering en gång.

## 2. Beslut: måttens nollpunkter

- 130 mm och 80 mm räknas från golvets yta, mattans ovansida, eftersom GVK säger "mellan kaklets underkant och golvet".
- 500 mm räknas från klämringens ytterkant, brunnens synliga kant på golvet. GVK säger bara "från golvbrunnen". Ser utvecklaren en förlaga som räknar från brunnens mitt: stanna och rapportera, rita inte om.
- Väggens tätskikt bakom kaklet ritas i blyerts-2 och överlappar uppvikningens övre del utan mått. BBV:s 30 mm överlapp får inget mått; bilden har redan tre byglar.

## 3. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/badrum/vatrumsmatta-brunn.svg` | Ny källa med `<text>` |
| `src/assets/illustrationer/badrum/vatrumsmatta-brunn.svg` | Skrivs av `npm run illustrationer` |

Rör inga andra filer, inte heller sidan.

## 4. Motivet, koordinater

Snitt genom innerhörnet och golvet fram till brunnen, sett från sidan. Väggen till vänster, brunnen till höger, rummet ovanför. **Inte skalenligt**, men de lodräta måtten håller proportionen 0,8 enheter per mm mot varandra: 130 mm är 104 enheter och 80 mm är 64. Flytta högst 8 enheter om en etikett kräver det.

| Del | Koordinater | Stil |
|---|---|---|
| Väggens stomme | x 44–140, y 0–256 | kontur blyerts 2 på insidan (x 140); skraffering som i fogskissen, en `<path>` per rad |
| Golvets underlag | y 256–360, x 44–600, utom brunnen | kontur blyerts 2 på ovansidan; skraffering som ovan |
| **Mattan** | ett band 6 tjockt: lodrätt längs väggen x 140–146 från y 146 ner till hörnet, rundat innerhörn radie cirka 8, vågrätt y 250–256 från väggen till brunnen, där det böjer ner över brunnens fläns | **penna 2,5**, två linjer, ingen fyllning |
| Väggens tätskikt | en linje x 147 från y 0 ner till y 172, så att den ligger an mot uppvikningens övre 26 enheter | blyerts-2 1,5 |
| Fästmassa på väggen | x 148–164, y 0–186, glesa prickar | prickar blyerts-2 |
| Kakel | x 164–184, y 0–186, underkant vid y 186, med en cementfog (glipa 10 med tre tvärstreck) vid y 80 | blyerts 2 |
| Remsan | den del av mattan som syns mellan kaklets underkant y 186 och golvet y 250 | inget eget streck; bygeln M2 visar den |
| Svetsad skarv | vid x 300: mattans två linjer bryts med en glipa på 2, och en liten svetsvulst, en halvcirkel r 4 i penna, sitter ovanpå vid (300, 250) | penna 2,5 |
| Golvbrunnen | en tratt i underlaget: flänsen vågrät vid y 256–262 från x 470 till x 580, brunnens kropp nedåt från x 500 och x 560 till y 340, öppen nedtill | blyerts 2 |
| Klämringen | en ring i snitt, två små rektanglar 12 × 10 som klämmer mattan mot flänsen vid x 476–488 och x 562–574, y 240–250, och en tunn vågrät bro emellan i blyerts-2 1,25 som visar att det är en ring | blyerts 2 |

Mattan går från y 250 ner i en mjuk böj till flänsen vid x 470 och ligger på flänsen under klämringen, till x 492.

**Måttbyglar** i blyerts-2 1,5 med hjälplinjer:

| Nr | Mått | Var |
|---|---|---|
| M1 | minst 130 mm | lodrät vid x 124 i väggens skraffering, från y 146 (uppvikningens överkant) till y 250, hjälplinje vågrätt från uppvikningens överkant. Skrafferingen gör uppehåll 4 runt bygeln |
| M2 | ca 80 mm | lodrät vid x 204 i rummet, från y 186 (kaklets underkant) till y 250, hjälplinjer från kaklets underkant och från golvet |
| M3 | minst 500 mm | vågrät vid y 226 i rummet, från x 300 (skarven) till x 476 (klämringens ytterkant), hjälplinjer ner till skarven och ringen |

## 5. Handskriften

Caveat 500, 24 px, inget under. Ledare i blyerts-2 1,25 px. Papperslapp bakom etiketter i skrafferingen. **Högst 65 tecken etikettext**.

| Nr | Text | Färg | Placering |
|---|---|---|---|
| V1 | matta | penna | rummet, cirka (240, 150), ledare i penna 1,25 till uppvikningen vid (146, 210) under kaklet; ledaren får inte korsa M2:s bygel, så går den över eller under bygelns etikett |
| V2 | kakel | blyerts-2 | rummet, cirka (220, 60), ledare till kaklet vid (184, 60) |
| V3 | minst 130 mm | blyerts-2 | i väggens skraffering på lapp, två rader om det behövs ("minst" / "130 mm"), vid M1 |
| V4 | ca 80 mm | blyerts på tumstock | rummet till höger om M2, vänsterställd vid cirka (214, 206), så att den slutar före x 296 där M3 börjar |
| V5 | minst 500 mm | blyerts-2 | ovanför M3, centrerad kring x 388, baslinje y 216 |
| V6 | svetsad skarv | blyerts-2 | rummet, cirka (300, 120), ledare ner till svetsvulsten vid (300, 244) |
| V7 | klämring | blyerts-2 | rummet uppe till höger, cirka (490, 150), ledare till ringen vid (482, 240) |

Tecken: 5 + 5 + 12 + 8 + 12 + 13 + 8 = 63. Tumstock `#e8b830` 65 procent bakom V4, roterad 1 till 2 grader; ingen annan markering. Golvbrunnen och underlaget får ingen etikett; klämringens ledare och tratten säger vad det är. Står etiketterna för tätt för 24 px: säg till, krymp inte.

## 6. Alt, aria-label och bildtext

- `aria-label` och `bildAlt` (117 tecken): "Snitt genom hörnet vid golvbrunnen, där våtrumsmattan är uppvikt på väggen under kaklet och hålls fast av klämringen."
- `bildtext`: "Mattan viks upp minst 130 mm på väggen när väggen har kakel, och ungefär 80 mm av den syns som en remsa under kaklet, så att svetsfogen i hörnet går att kontrollera. En svetsad skarv i golvet ska ligga minst 500 mm från brunnen, och nere i brunnen håller klämringen fast mattan. Skissen är inte skalenlig. Källa: GVK Säkra Våtrum 2026 § 8.2.4 och BBV 26:1 § 6.5.1."

Hantverkaren har inte lämnat ordagrann alt eller bildtext; texterna ovan är skrivna ur sidans egna ord och ska höras av hantverkaren före publicering.

## 7. Budget och kontroller

Publicerad fil **under 28 kB, 28 672 byte**. Resten som i golvvärmespecen avsnitt 7, med `badrum/vatrumsmatta-brunn`. Vid granskningen på 343 px: syns mattan som ett obrutet band från väggen till brunnen, syns remsan under kaklet, och går de tre måtten att skilja från varandra?

## 8. Tillstånd

Som golvvärmespecen avsnitt 8.

## 9. Godkännande

Godkänd 2026-09-29 av UX och bygge, granskad i 343 px: 25 258 byte, ingen `<text>`. Godkända avvikelser: brunnen ligger 8 lägre så att mattan får en böj ner till flänsen; mattan ritas också på brunnens högra sida så att klämringen har något att klämma; skarvens ledare är också 500-bygelns hjälplinje; M2 saknar undre hjälplinje eftersom den skulle ligga på mattan; M1 har en undre hjälplinje. 500 mm räknas från klämringens ytterkant enligt avsnitt 2; ingen förlaga som räknar från brunnens mitt hittades. Inlagd som `bild` på mattsidan.
