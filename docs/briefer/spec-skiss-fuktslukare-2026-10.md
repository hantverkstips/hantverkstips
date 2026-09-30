# Spec: fuktslukaren i genomskärning

UX och bygge, 2026-09-30. Beställd av koordinatorn som huvudbild (`bild`) för `src/content/kunskap/fukt/fuktslukare.mdx`. Hantverkarens motiv, alt, bildtext och etiketter står i kommentaren vid `bild:` på rad 15–23. Talet kommer ur `docs/briefer/faktablad/kunskap-fuktslukare.md` avsnitt 3.3: 0,97 kg vatten per 450 g rent salt vid 60 % RF och 25 °C, räknat ur Staples och Nuttall 1977.

Handen och papperet som i `src/assets/illustrationer-kallor/fukt/hygrometer-koksalt.svg`. Följ DESIGN.md avsnitt 7 "Skisserna".

## 1. Vad bilden ska säga

Fuktig luft går in genom locket, saltet i korgen drar åt sig vattnet och löser sig, och saltlösningen droppar ner och samlas i botten. **Dropparna som faller från korgen ner i lösningen är den enda saken i penna.** Nyckeltalet är "ca 1 liter vid 60 %", med gul markering.

## 2. Motivet (600 × 360), en burk rakt från sidan, inte skalenlig

| Del | Form och läge | Stil |
|---|---|---|
| Bordsskiva | y 322, x 80–520 | blyerts 2 |
| Behållaren | x 220–380, y 90–322, rundade hörn nedtill | blyerts 2 |
| Locket | x 212–388, y 72–92, med 4–5 korta lodräta springor | blyerts 2 |
| Luften in | två korta vågiga pilar i blyerts-2 från ovan ner mot springorna | blyerts-2 1,5 |
| Korgen | ett galler direkt under locket, x 228–372, y 96–150: kontur och glesa lodräta streck. Saltet i den som korn, oregelbundna små rundlar | blyerts 2, kornen blyerts-2 1,25 |
| Dropparna | 3–4 slutna droppformer i **penna** 2,5, i en lodrät rad från korgens botten (y 156) ner mot lösningen (y 250) | penna |
| Saltlösningen | vätskeyta som svagt vågig linje vid y 262, med 3–4 korta vågstreck under | blyerts-2 1,25 |

## 3. Handskriften (Caveat 500, 24 px, ordagrant från hantverkaren, 51 tecken)

| Nr | Text | Färg | Placering |
|---|---|---|---|
| T1 | kalciumklorid 450 g | blyerts | vänster om burken, cirka (60, 128), ledare i blyerts-2 till korgen (228, 124) |
| T2 | saltlösning | blyerts | vänster om burken, cirka (80, 286), ledare till lösningen (228, 284) |
| V1 | ca 1 liter vid 60 % | blyerts på tumstock | höger om burken, cirka (400, 250) |

Tumstock `#e8b830` 65 procent bakom V1, roterad 1 till 2 grader. Ingen annan markering. `aria-label` är hantverkarens bildAlt ordagrant: "En fuktslukare i genomskärning, med saltet i den övre korgen och saltlösning som samlas i botten."

## 4. Filer och kontroller

- Källan: `src/assets/illustrationer-kallor/fukt/fuktslukare.svg`, under 10 240 byte.
- Publicerad fil: `src/assets/illustrationer/fukt/fuktslukare.svg`, skrivs av `npm run illustrationer`. Under 28 672 byte och utan `<text>`.
- `test-illustration.mjs` ska vara grönt.
- Rendera i 343 och 1200 px. På 343 px ska det gå att se att saltet ligger överst och vätskan nederst, att dropparna faller mellan dem, och alla etiketter ska gå att läsa.

## 5. Godkännande

Godkänd av UX och bygge 2026-09-30. Publicerad fil 17 199 byte, källa 4 557 byte, ingen `<text>`. Etiketten "kalciumklorid 450 g" står något högre än specens läge, så att den inte når burken.
