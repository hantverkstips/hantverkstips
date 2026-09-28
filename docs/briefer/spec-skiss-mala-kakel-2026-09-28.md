# Spec: skiss av stänkskyddet i fyra steg

UX och bygge, 2026-09-28. Beställd av koordinatorn för `src/content/guider/kok/mala-kakel.mdx` (utkast). Checklistan är `docs/briefer/seo-checklista-2026-09-29/kok.md` avsnitt 8 för måla kakel, faktabladet `docs/briefer/faktablad/guider-mala-kakel.md` (tabellen över tillverkarna och avsnitt 7, raden Kök, stänkskydd). Allt som inte står här gäller som i `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3, 5, 7 och 8; läs den först.

## 1. Vad bilden ska säga

Samma kaklade stänkskydd mellan bänk och överskåp, i fyra steg från vänster till höger: tvättat, mattat, grundat, målat. Läsaren ser ordningen innan hen läst rubriken. Inga mått (stänkskyddets 60 cm är guidens eget exempel, inte en källa), inga tal, ingen gul markering. Inga verktyg, ingen roller, ingen hand.

Bilden blir troligen guidens huvudbild (`bild`, `bildAlt`, `bildtext` i frontmatter) och renderas då av `Artikel.astro` som `<img fetchpriority="high">` efter kortsvaret. Den är därmed LCP-kandidat på mobil, och vikten räknas strängare: se avsnitt 5.

## 2. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/kok/mala-kakel-stankskydd.svg` | Ny källa. Mappen `kok/` är ny |
| `src/assets/illustrationer/kok/mala-kakel-stankskydd.svg` | Skrivs av `npm run illustrationer` |

Rör inga andra filer; listan i fogspecen avsnitt 2 gäller, och dessutom allt under `src/content/`.

## 3. Motivet

Köksväggen rakt framifrån.

| Del | Koordinater | Stil |
|---|---|---|
| Överskåp | x 50–590, y 14–118, tre luckor med ett handtag var (kort lodrätt streck nära nederkanten) | blyerts 2 |
| Stänkskydd, kakel | y 118–262, x 50–590 | se fälten nedan |
| Bänkskiva | band x 44–596, y 262–280, framkanten något tjockare markerad | blyerts 2 |
| Under bänken | tomt papper, inga underskåp; här står stegens etiketter och pilen | |

Kaklet delas i fyra fält om 135 enheter: x 50–185, 185–320, 320–455, 455–590. Mellan fälten en tunn streckad lodrät linje i blyerts-2 1,25. Plattorna är 36 × 36 enheter med fogar ritade som linjer, fyra rader. **Varje fält ska se annorlunda ut vid 343 px**; det är hela bilden. Ingen fyllning, bara streck:

| Fält | Utseende |
|---|---|
| 1 | plattor i blyerts 2 med en blank glimt per platta (en kort båge i blyerts-2 1,25 i övre hörnet) och tre eller fyra droppar som rinner |
| 2 | plattor i blyerts 2 utan glimtar, med glesa prickar i blyerts-2 som matt yta |
| 3 | plattor i blyerts-2 1,5 (svagare), med glesa snedställda penseldrag i blyerts-2 1,25 som ett första lager |
| 4 | fogarna knappt synliga (blyerts-2 1,0), täta parallella drag i blyerts-2 1,25 över hela fältet som två strykningar |

Håll antalet streck nere: droppar och prickar som en `<path>` per fält, draget som en `<path>` per fält.

**Snickarpennan, den enda saken som pekar**: en pil i penna 2,5 under bänkskivan, vid y 336, från x 70 till x 570 med öppet pilhuvud åt höger, svagt darrande. Den visar ordningen.

## 4. Handskriften

| Nr | Text | Färg | Placering |
|---|---|---|---|
| C1 | överskåp | blyerts-2 | inne i en överskåpslucka, till vänster |
| C2 | bänkskiva | blyerts-2 | under bänkskivans vänstra ände eller ovanför den på stänkskyddet, på papperslapp |
| C3–C6 | tvättat · mattat · grundat · målat | blyerts | en per fält, centrerad under fältet mellan bänkskivan och pilen (baslinje cirka y 312) |
| C7 | ingen, pilen räcker | penna | vid pilens spets, bara om hantverkaren vill ha den |

Står stegens etiketter för trångt i 135 enheter vid 24 px: säg till.

## 5. Budget

Publicerad fil under 28 kB, eftersom den laddas med hög prioritet ovanför vecket. Resten som fogspecen avsnitt 7. Om den blir huvudbild ändras inget i sidans HTML-vikt utöver `<figure>`, `<img>` och bildtexten.

## 6. Alt och aria-label

`aria-label` på roten: Måla kakel på stänkskyddet mellan bänk och överskåp i köket, i fyra steg från tvättat till målat. `bildAlt` i frontmatter har samma lydelse.

`bildtext`: Samma stänkskydd i fyra steg, från vänster till höger. Med Beckers Ceramic Tile hoppar du över grunden och målar samma färg två gånger.

Hantverkaren 2026-09-28: C3 till C6 är fyra etiketter, en per fält; mittpunkten ovan skiljer dem bara här i specen och ritas inte.
