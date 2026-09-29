# Spec: huvudbild med huset, rummen och den kalla väggen

UX och bygge, 2026-09-29. Beställd av koordinatorn för `src/content/kunskap/fukt/luftfuktighet-inomhus.mdx` (publicerad), som saknar huvudbild. Beslutet står i `docs/briefer/huvudbilder-2026-09-29.md`. Sidans diagram `fukt/daggpunkt` stannar i avsnittet om daggpunkten bredvid räknaren. Mallen `fukt/hus-rf-per-rum` (rad 153) väntar på Christians egen mätning och rörs inte; den här bilden bygger bara på sidans källor och har inga mätvärden. Allt som inte står här gäller som i `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3 (ram, papper, tokens), 4 (darr, hörn, skraffering), 5 (handskrift och ledare), 7 (kontroller) och 8 (tillstånd); läs den först.

## 1. Vad bilden ska säga

Rubriken säger att rätt luftfuktighet beror på årstiden, rummet och den kallaste ytan. Kortsvaret (rad 12–14): runt 50 procent är bäst, 30 till 70 går bra, och över 75 procent vid en kall yta, som ytterväggen bakom en garderob, börjar mögel växa. Bilden är huset i genomskärning med rummens riktvärden ur tabellen (rad 144–147), och den kalla ytterväggen bakom garderoben som det enda som pekar.

Talen, alla ur sidan: sovrum under 45 % vintertid (Astma- och Allergiförbundet), vardagsrum runt 50 %, 30 till 70 går bra (Alingsås kommun), källare under 75 % i medel (Villaägarna), badrum inget riktvärde. Mögelgränsen 75 procent vid kall yta ur kortsvaret.

**Snickarpennan, den enda saken som pekar:** ytterväggen bakom garderoben i sovrummet. **Nyckeltalet är vardagsrummets 50 %**, med gul markering, som i kortsvaret.

Inga människor, inga möbler utom garderoben, ingen hygrometer.

## 2. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/fukt/luftfuktighet-rum.svg` | Ny källa med `<text>` |
| `src/assets/illustrationer/fukt/luftfuktighet-rum.svg` | Skrivs av `npm run illustrationer` |

Rör inga andra filer, inte `fukt/hus-rf-per-rum.svg` i någon av mapparna, och ingenting under `src/content/`. Frontmattern sätts efter godkännandet: `bild: ../../../assets/illustrationer/fukt/luftfuktighet-rum.svg`, `bildAlt: "[ALT]"`, `bildtext: "[BILDTEXT]"`.

## 3. Motivet, koordinater

Utgå från husets form i källan `src/assets/illustrationer-kallor/fukt/hus-rf-per-rum.svg`: sadeltak från (86,92) till nocken (330,30) och ner till (574,92), ytterväggar x 100 och x 560, marklinjen kring y 260 med skraffering under, tre plan (vind med sovrum, bottenvåning med vardagsrum och badrum, källare under mark). Ta inte med platshållarrutorna eller texten "fylls i när mätningen finns".

| Del | Stil |
|---|---|
| Huset, bjälklagen, mellanväggen mellan vardagsrum och badrum | blyerts 2 |
| Jord och källarväggens utsida | skraffering blyerts-2 1,25 som i källan |
| Garderoben | en rektangel i sovrummet tätt mot den vänstra ytterväggen (x 100), cirka 40 enheter bred och så hög som rummet medger, med en lodrät dörrskarv. Blyerts 2 |
| Glipan bakom garderoben | 6 enheter mellan garderobens rygg och väggen, tom |

**Snickarpennan:** den del av ytterväggens insida som ligger bakom garderoben ritas om i penna 2,5 px, med tre eller fyra små prickar i penna i glipan (fukt, början till mögel). En kort ledare i penna från den biten ut till [L6]. Inget annat i penna utom marginallinjen.

**Markeringen:** tumstock bakom vardagsrummets tal, och bara där.

## 4. Handskriften

Caveat 500, 24 px. Rummets namn överst till vänster i rummet, talet under. Texten är hantverkarens; sidans ord anges med rad.

| Nr | Namnger | Ord på sidan | Färg | Placering |
|---|---|---|---|---|
| [L1] | sovrummet och dess riktvärde | "sovrum", "under 45 % vintertid" (rad 144) | blyerts, talet blyerts-2 | i sovrummet, till höger om garderoben |
| [L2] | vardagsrummet och dess riktvärde | "vardagsrum", "runt 50 %" (rad 145) | blyerts, talet blyerts på tumstock | i vardagsrummet |
| [L3] | badrummet | "badrum" (rad 146), och om hantverkaren vill att inget riktvärde finns | blyerts, ev. rad blyerts-2 | i badrummet |
| [L4] | källaren och dess riktvärde | "källare", "under 75 %" (rad 147) | blyerts, talet blyerts-2 | i källaren |
| [L5] | spannet som går bra, en gång, om hantverkaren vill | "30 till 70 % går bra" (rad 145) | blyerts-2 | under [L2] eller utelämnas |
| [L6] | den kalla väggen bakom garderoben och mögelgränsen | kortsvaret rad 12: "över 75 procent vid en kall yta" | penna | utanför huset till vänster, i marginalen x 44–96 eller ovanför taket till vänster, med ledaren till väggen |

Sex etiketter är taket, och [L5] stryks först. Ryms [L6] inte i vänstermarginalen får den stå ovanför takfallet till vänster med längre ledare; säg till, krymp inte.

## 5. Alt, aria-label och bildtext

- `[ALT]`: hantverkarens, högst 125 tecken, säger vad bilden visar (huset i genomskärning med riktvärden per rum och den kalla väggen bakom garderoben).
- `aria-label` på roten: `[ALT]` ordagrant.
- `[BILDTEXT]`: hantverkarens. Källorna för rummens tal står här, som i raden under tabellen, och att det är riktvärden och inte mätningar.

## 6. Budget

Publicerad fil **under 28 kB**, huvudbild med `fetchpriority="high"`. Mallen `hus-rf-per-rum` väger 38,8 kB publicerad med tjugo korta etiketter; den här har sex, så gränsen håller om etiketterna hålls korta. Resten som fogspecen avsnitt 7, med `fukt/luftfuktighet-rum`. Vid granskningen på 343 px: syns garderoben som en garderob och glipan bakom den, går rummens tal att läsa, och är väggbiten det enda röda?

## 7. Hantverkarens text, ifylld 2026-09-29

| Nr | Text |
|---|---|
| [L1] | sovrum / under 45 % på vintern |
| [L2] | vardagsrum / runt 50 % |
| [L3] | badrum / inget riktvärde |
| [L4] | källare / under 75 % |
| [L5] | 30 till 70 % går bra |
| [L6] | mögel växer här / över 75 % |

Snedstrecket betyder ny rad. [L6] står på två rader i marginalen; ryms den inte där, går den ovanför takfallet som specen säger.

- `[ALT]`: Huset i genomskärning med rätt luftfuktighet inomhus för varje rum och en kall yttervägg bakom sovrummets garderob.
- `[BILDTEXT]`: Riktvärdena gäller relativ luftfuktighet som medel över längre tid, och de är inga mätningar. Sovrummets tal kommer från Astma- och Allergiförbundet, vardagsrummets från Alingsås kommun och källarens från Villaägarna. Den röda biten är ytterväggen bakom garderoben, en kall yta där mögel börjar växa när luftfuktigheten går över 75 procent.
