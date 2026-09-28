# Spec: skiss av måtten när du byter köksluckor

UX och bygge, 2026-09-29. Beställd av koordinatorn för `src/content/guider/kok/byta-koksluckor.mdx` (utkast), där kommentaren på rad 119 väntar på `kok/byta-koksluckor-matt`. Checklistan är `docs/briefer/seo-checklista-2026-09-29/kok.md` rad 361 och 374, faktabladet `docs/briefer/faktablad/guider-byta-koksluckor.md` avsnitt 1 och 2. Allt som inte står här gäller som i `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3 (ram, papper, tokens), 4 (darr, hörn), 5 (handskrift och ledare), 7 (kontroller) och 8 (tillstånd); läs den först.

## 1. Vad bilden ska säga

Vad du mäter innan du beställer: luckans bredd och höjd, stomsidans tjocklek, gångjärnskoppen och hur luckan hänger. Stomsidans framkant, som luckan ska täcka, är den enda saken som pekar. Kopphålet på 35 mm är nyckeltalet, eftersom det är samma hos Blum och Grass (sidan rad 126) och det enda tal läsaren kan känna igen på sin egen lucka. Det får gul markering.

Källorna: kopp 35 mm och borravstånd 3 till 7 mm från luckans kant till kopphålets kant (Blum CLIP top, datablad 2010, faktabladet rad 30–31), stomsidans tjocklek 18 mm hos Ikea, 16 hos Marbodal, 16 eller 19 hos Vedum (sidan rad 103), tre sätt att hänga luckan, helt påliggande, halvt påliggande och inliggande (Blum, faktabladet rad 32; sidan rad 127).

## 2. Beslut

**Överskåp, inte bänkskåp.** Kommentaren på rad 119 säger bänkskåpslucka, checklistan (rad 374) och koordinatorn säger överskåpslucka. Checklistan gäller. Hantverkaren behöver veta det när alt och bildtext skrivs.

**Tre fält i samma bild.** Luckans mått, gångjärnets mått och hur luckan hänger ligger i tre olika skalor: luckan är 400 mm bred, avståndet till koppen 3 till 7 mm. Ett enda perspektiv kan inte visa båda, så bilden har tre fält som en snickares anteckning: skåpet till vänster, en förstorad detalj uppifrån uppe till höger, tre små snitt uppifrån nere till höger. Tunna blyerts-2-linjer 1,25 skiljer fälten. Fält C finns bara om det får plats (se avsnitt 4, fält C).

**Stomsidans tjocklek mäts i fält B, inte i fält A.** I skåpets skala är 19 mm bara 8 enheter; en bygel där går inte att läsa. Fält A ringar in framkanten, fält B mäter den.

## 3. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/kok/byta-koksluckor-matt.svg` | Ny källa med `<text>` |
| `src/assets/illustrationer/kok/byta-koksluckor-matt.svg` | Skrivs av `npm run illustrationer` |

Rör inga andra filer. Listan över förbjudna filer i fogspecen avsnitt 2 gäller, och dessutom allt under `src/content/`. Inbäddningen gör hantverkaren senare: `<Illustration namn="kok/byta-koksluckor-matt" alt="[ALT]" bildtext="[BILDTEXT]" />`.

## 4. Motivet, koordinater

**Fält A, skåpet (x 44–300, y 16–356).** Ett överskåp snett uppifrån i parallellprojektion, djupvektor (40, −28) för skåpets djup. Luckan stängd framför stommen. Inte skalenligt i djupled.

| Del | Koordinater | Stil |
|---|---|---|
| Stommens framkant | rektangel x 86–262, y 72–326 | blyerts 2 |
| Stommens ovansida | parallellogram (86,72) (262,72) (302,44) (126,44); de två stomsidornas överkanter syns som smala band 8 enheter breda i vänster och höger ände av ovansidan | blyerts 2 |
| Stommens högra sida | parallellogram (262,72) (302,44) (302,298) (262,326) | blyerts 2 |
| Luckan | framsidan x 80–258, y 76–332, förskjuten (−6, +4) mot läsaren; luckans tjocklek syns som ett smalt band längs över- och högerkanten | blyerts 2 |
| Luckans bredd | bygel under luckan vid y 344 från x 80 till x 258 | blyerts-2 1,5 |
| Luckans höjd | lodrät bygel vid x 62 från y 76 till y 332 | blyerts-2 1,5 |

**Snickarpennan, den enda saken som pekar:** en öppen ring i penna 2,5 px, handritad och inte sluten, runt stomsidans framkant i det övre högra hörnet, där sidans överkant möter luckans överkant, ungefär (256,70) radie 16. Inget annat i penna utom marginallinjen.

**Fält B, gångjärnet uppifrån (x 316–594, y 16–220).** Snitt uppifrån genom luckan och stomsidan vid gångjärnet. Skala ungefär 3 enheter per mm. Skåpets insida är uppåt i bilden, rummet nedåt.

| Del | Koordinater | Stil |
|---|---|---|
| Stomsidan | lodrätt band x 330–387 (19 mm), från y 40 ner till y 118, kapad upptill med brytlinje | blyerts 2; ett kryss i blyerts-2 1,25 som snittmarkering för skiva |
| Luckan | vågrätt band y 120–177 (19 mm), från x 330 (luckans kant i liv med stomsidans utsida, helt påliggande; ingen källa ger överlappet i mm, så bilden visar inget) till x 590, kapad till höger med brytlinje | blyerts 2 |
| Koppen | halvcirkelformad grop i luckans baksida, bredd 105 (35 mm) från x 345 till x 450, djup 39 (13 mm, Blums minsta håldjup) från y 120 ner till y 159 | blyerts 2 |
| Gångjärnsarmen | från koppen snett upp till en platta på stomsidans insida vid x 387–395, y 60–90 | blyerts 2 |
| Stomsidans tjocklek | bygel ovanför stomsidans brytlinje vid y 28 från x 330 till x 387, med hjälplinjer upp från sidans två ytor | blyerts-2 1,5 |
| Koppens diameter | bygel under luckan vid y 188 från x 345 till x 450 | blyerts-2 1,5 |
| Borravståndet | bygel under luckan i samma rad som koppens bygel, y 188 från luckans kant x 330 till koppens kant x 345 (5 mm, mitt i spannet 3 till 7), så att de två läses som en kedja. Streckade hjälplinjer från koppens kanter och luckans kant ner genom luckan till y 192 | blyerts-2 1,5 |

Stomsidans framkant står mot luckans baksida över en del av koppen. Det är så ett helt påliggande gångjärn sitter, och det ska ritas så: koppen ligger i liv med luckans baksida och armen går ut ur koppen in i skåpet längs stomsidans insida.

**Fält C, tre sätt att hänga luckan (x 316–594, y 226–356).** Tre små snitt uppifrån i samma skala som fält B delat med tre, staplade, ett per rad om 42 enheter. Snittet till vänster i raden (x 330–420), etiketten till höger (x 430–594, högst 15 tecken).

| Rad | Snittet |
|---|---|
| 1, y 228–268 | en stomsida, lodrätt band 19 enheter som sticker upp 20 enheter, och en lucka 19 enheter tjock som täcker hela dess framkant |
| 2, y 272–312 | en mellanvägg med två luckor som möts mitt på den och täcker var sin halva |
| 3, y 316–354 | en stomsida och en lucka som sitter mellan sidorna, i liv med framkanten |

Villkor för fält C, så att ingen behöver gissa: i renderingen på 343 px ska varje luckas tjocklek vara minst 3 px och glipan mellan luckorna i rad 2 synas. Håller det inte, tas fält C bort, fält B får hela höjden y 16–356 och förstoras, och utvecklaren rapporterar det.

## 5. Handskriften

Caveat 500, 24 px, inget under. Ledare i blyerts-2 1,25 px. Etiketterna i fält A står i luften till vänster om och under skåpet; i fält B ovanför och under snittet; i fält C till höger om varje snitt.

Texten är hantverkarens. Ord som redan står på sidan anges.

| Nr | Namnger | Ord på sidan | Färg | Placering |
|---|---|---|---|---|
| K1 | luckans bredd | "bredd" (rad 123) | blyerts-2 | fält A, under bygeln |
| K2 | luckans höjd | "höjd" (rad 123) | blyerts-2 | fält A, till vänster om bygeln, lodrätt eller på två rader |
| K3 | stomsidans framkant | "stomsidans framkant" (rad 103) | penna | fält A, ovanför skåpet vid ringen, cirka (130,28) |
| K4 | stomsidans tjocklek | "16, 18 eller 19 mm" (hantverkaren; alla tre tjocklekarna ur rad 103 och faktabladet avsnitt 1: Marbodal 16, Ikea 18, Vedum 16 eller 19) | blyerts-2 | fält B, till höger om bygeln vid y 28, på skåpets insida |
| K5 | koppens diameter | "35 mm" (rad 126) | blyerts på tumstock | fält B, under kedjan, baslinje cirka y 214 |
| K6 | borravståndet | "3 till 7 mm" (kommentaren rad 119) | blyerts-2 | fält B, under kedjan till vänster om K5, ledare till den korta bygeln; står K5 och K6 för tätt läggs K6 på skåpets insida till höger om stomsidan, x 400–590, y 40–100, med ledare ner till bygeln |
| K7 | helt påliggande | "helt påliggande" (rad 127) | blyerts-2 | fält C rad 1 |
| K8 | halvt påliggande | "halvt påliggande" (rad 127) | blyerts-2 | fält C rad 2 |
| K9 | inliggande | "inliggande" (rad 127) | blyerts-2 | fält C rad 3 |

Hantverkaren 2026-09-29: K1–K3 och K5–K9 bekräftas med orden som de står.

Tumstock `#e8b830` 65 procent bakom K5, roterad 1 till 2 grader. Ingen annan markering. Står etiketterna för tätt för 24 px: säg till, krymp inte.

## 6. Alt, aria-label och bildtext

- `[ALT]` (124 tecken): "Överskåp med luckan framför stommen och en förstoring av gångjärnet, med de mått du tar när du ska byta köksluckor."
- `aria-label`: `[ALT]` ordagrant.
- `[BILDTEXT]`: "Till vänster sitter luckan på ett överskåp, och ringen visar stomsidans framkant, som luckan ska täcka. Uppe till höger syns samma hörn uppifrån. Stomsidan är 18 mm tjock hos Ikea, 16 mm hos Marbodal och 16 eller 19 mm hos Vedum, enligt tillverkarna. Gångjärnets kopp sitter i ett hål på 35 mm, och hålets kant ligger 3 till 7 mm från luckans kant enligt Blums datablad för CLIP top. Nere till höger visas de tre sätt att hänga en lucka som Blum skiljer mellan."
- Tas fält C bort (avsnitt 4) stryks bildtextens sista mening, och K7–K9 försvinner med fältet.

## 7. Budget

Publicerad fil under 34 kB (tre fält och nio etiketter). Resten som fogspecen avsnitt 7, med `kok/byta-koksluckor-matt`. Vid granskningen på 343 px: förstås skåpet på en sekund, pekar bara ringen, går fält B att läsa som en förstoring och inte som ett eget föremål?
