# Spec: huvudbild med fasadens tre nivåer av förarbete

UX och bygge, 2026-09-29. Beställd av koordinatorn för `src/content/guider/fasad/mala-om-huset.mdx` (publicerad), som saknar både huvudbild och skiss. Beslutet står i `docs/briefer/huvudbilder-2026-09-29.md`. Allt som inte står här gäller som i `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3 (ram, papper, tokens), 4 (darr, hörn), 5 (handskrift och ledare), 7 (kontroller) och 8 (tillstånd); läs den först.

## 1. Vad bilden ska säga

Priset hänger på hur mycket gammal färg som ska bort (rad 107, 121). Samma stående panel i tre tillstånd, från vänster till höger: färgen sitter kvar och ska tvättas, färgen flagar och ska skrapas och grundas, all färg ska bort till rent trä. Under varje fält står målarens pris per kvadratmeter, och priset stiger tre gånger från första till sista fältet (rad 129).

Talen, alla ur sidan: nivå ett 200 till 260 kr per kvm, nivå två 300 till 420 kr per kvm (Hantverkskollen juli 2026, rad 113, 123, 125, tabellen rad 156–157), nivå tre i runda tal 600 kr per kvm (Christians egen räkning, rad 127). Alla i arbete, med moms, före rotavdrag, utan färg; det hör hemma i bildtexten.

**Snickarpennan, den enda saken som pekar:** en pil under prisraden från första fältets pris till tredje fältets, som visar att priset stiger. **Nyckeltalet är tredje fältets pris, cirka 600 kr**, med gul markering: det är talet läsaren inte hittar hos någon målare och som förklarar skillnaden mellan offerterna.

Inga verktyg, ingen skrapa, ingen infravärmare, ingen hand. Inga människor.

Den här bilden får inte se ut som `fasad/tvatta-panel` (lockpanel framifrån med pilar i medlets riktning, `docs/briefer/spec-bilder-fasad-2026-09-28.md` avsnitt 1). Därför ritas en **stående enkel panel utan lock**, tre fält i rad, och pilarna går under bilden, inte över panelen.

## 2. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/fasad/mala-om-huset-forarbete.svg` | Ny källa med `<text>` |
| `src/assets/illustrationer/fasad/mala-om-huset-forarbete.svg` | Skrivs av `npm run illustrationer` |

Rör inga andra filer, och ingenting under `src/content/`. Frontmattern sätts efter godkännandet: `bild: ../../../assets/illustrationer/fasad/mala-om-huset-forarbete.svg`, `bildAlt: "[ALT]"`, `bildtext: "[BILDTEXT]"`.

## 3. Motivet, koordinater

En bit fasad rakt framifrån, stående panel, x 56–584, y 24–220. Fyra lodräta brädor per fält, cirka 44 enheter breda, med skarvar som dubbla tunna linjer. Panelen delas i tre fält om 176 enheter: x 56–232, 232–408, 408–584. Mellan fälten en streckad lodrät linje i blyerts-2 1,25. Under panelen ett sockelband y 220–236 i blyerts 2, tomt.

**Varje fält ska se annorlunda ut vid 343 px.** Bara streck, ingen fyllning:

| Fält | Utseende |
|---|---|
| 1, tvätt | brädor i blyerts 2, hela. Några glesa prickar i blyerts-2 som smuts eller alger nedtill. Ytan är slät |
| 2, skrapning | brädor i blyerts 2. Tre eller fyra flagor: oregelbundna öar där färgkanten är ritad med en tunn blyertslinje och ytan innanför har korta ådringsstreck i blyerts-2 1,25 (bart, grånat trä). Små flagor som lossnar i kanten |
| 3, rent trä | brädornas konturer i blyerts-2 1,5, och ådring i blyerts-2 1,25 över hela fältet. Ingen färg kvar |

Ådring och prickar som en `<path>` per fält.

**Snickarpennan:** en pil i penna 2,5 px vid y 316, från x 110 till x 530, öppet pilhuvud åt höger, svagt darrande. Den ligger under prisraden.

**Markeringen:** tumstock bakom tredje fältets pris, och bara där.

## 4. Handskriften

Caveat 500, 24 px. Texten är hantverkarens; sidans ord anges med rad.

| Nr | Namnger | Ord på sidan | Färg | Placering |
|---|---|---|---|---|
| [M1] | nivå ett | "tvätt och lös färg" (rad 123) | blyerts | under fält 1, baslinje cirka y 262 |
| [M2] | nivå två | "skrapning och grundning" (tabellen rad 157) | blyerts | under fält 2, samma baslinje |
| [M3] | nivå tre | "rent trä" (rad 127) | blyerts | under fält 3, samma baslinje |
| [M4] | pris nivå ett | "200–260 kr" per kvm, skrivsätt som sidan | blyerts-2 | under [M1], baslinje cirka y 292 |
| [M5] | pris nivå två | "300–420 kr" per kvm | blyerts-2 | under [M2] |
| [M6] | pris nivå tre | "600 kr" per kvm, med "cirka" om hantverkaren vill | blyerts på tumstock | under [M3] |
| [M7] | att priset är per kvadratmeter, en gång för hela raden | (hantverkaren) | blyerts-2 | vid pilens början eller i marginalen |
| [M8] | att det blir tre gånger så dyrt | (hantverkaren) | penna | vid pilens spets |

Står [M2] för trångt i 176 enheter vid 24 px får det gå på två rader; säg till, krymp inte. Stryks något är det [M7] först, eftersom bildtexten säger det.

## 5. Alt, aria-label och bildtext

- `[ALT]`: hantverkarens, högst 125 tecken, säger vad bilden visar (samma fasad i tre skick, med målarens pris per kvadratmeter under).
- `aria-label` på roten: `[ALT]` ordagrant.
- `[BILDTEXT]`: hantverkarens. Att priserna är arbete per kvadratmeter med moms, före rotavdrag och utan färg, och varifrån talen kommer, står här.

## 6. Budget

Publicerad fil **under 28 kB**, huvudbild med `fetchpriority="high"`. Resten som fogspecen avsnitt 7, med `fasad/mala-om-huset-forarbete`. Vid granskningen på 343 px: syns tre olika skick utan att etiketterna läses, är flagorna i fält 2 flagor och inte fläckar, och är pilen det enda röda?

## 7. Hantverkarens text, ifylld 2026-09-29

Etiketterna under fälten är korta, så att de ryms i 176 enheter på en rad. Det fullständiga namnet på varje nivå står i bildtexten och i tabellen på sidan.

| Nr | Text |
|---|---|
| [M1] | tvätt |
| [M2] | skrapning |
| [M3] | rent trä |
| [M4] | 200 till 260 kr |
| [M5] | 300 till 420 kr |
| [M6] | kring 600 kr |
| [M7] | per kvm |
| [M8] | tre gånger så dyrt |

Priserna skrivs med "till", som på sidan, och inte med streck.

- `[ALT]`: Samma fasad i tre skick när du ska måla om huset, med målarens pris per kvadratmeter under varje skick.
- `[BILDTEXT]`: Samma stående panel där färgen sitter kvar och tvättas, där färgen flagar och skrapas och träet grundas, och där all färg ska bort till rent trä. Priserna är målarens arbete per kvadratmeter med moms, före rotavdraget och utan färg. De två första kommer från Hantverkskollens prisindex i juli 2026, och de 600 kronorna för rent trä har jag räknat fram utifrån infravärmarens tempo och målarens timpris.
