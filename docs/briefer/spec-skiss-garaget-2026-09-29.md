# Spec: enkelgaraget i genomskärning, med avfuktaren och slangen ut

UX och bygge, 2026-09-29. Beställd av koordinatorn som huvudbild för `src/content/guider/fukt/avfuktare-garage.mdx` (utkast), namnet `fukt/garaget`. Hantverkarens förslag, genom koordinatorn: ett enkelgarage i genomskärning med porten, bilen som droppar snö, en sorptionsavfuktare vid ytterväggen med slangen ut, en hygrometer på 60 procent i gult och bensindunken utanför. Checklistan är `docs/briefer/seo-checklista-2026-09-29/fukt-4.md` rad 66 ("fuktkällorna (bil, snö, port, betongplatta) och avfuktarens placering och slang"). Faktabladet är `docs/briefer/faktablad/guider-avfuktare-garage.md` rad 13 och 89–93; sidan rad 53, 57, 106–108, 145–149 och Faq om slangen.

Handen och papperet som i `src/assets/illustrationer-kallor/tak/takfot-snitt.svg`. Läs `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3, 5, 7 och 8; allt som inte står här gäller som där. DESIGN.md avsnitt 7: "En avfuktare i en skiss är en rektangel med en pil för luftflödet", och garaget ritas "med fläkten och pilar för luftflödet".

## 1. Vad bilden ska säga

Fukten kommer in genom porten och med snön på bilen, och avfuktaren vid ytterväggen blåser ut den fuktiga luften genom en slang i väggen. Hygrometern ska visa under 60 procent. Bensinen står utanför. Den fuktiga luften som går ut genom slangen, i penna, är den enda saken som pekar.

Källorna: under 60 procent rostar stål knappt (Stålbyggnadsinstitutet, sidan rad 57). Slangen från en sorptionsavfuktare går genom ett hål på cirka 70 mm i ytterväggen (Acetec, sidan rad 106), så kort som möjligt och med fall utåt (sidans Faq). Acetec förbjuder explosiva gaser, och sidan råder att dunkarna står utanför garaget (rad 108). **Nyckeltalet är 60 procent**, på hygrometern, och det får gul markering en gång.

## 2. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/fukt/garaget.svg` | Ny källa med `<text>` |
| `src/assets/illustrationer/fukt/garaget.svg` | Skrivs av `npm run illustrationer` |

Rör inga andra filer, inte heller sidan.

## 3. Motivet, koordinater

Garaget i genomskärning på längden, sett från sidan. Porten till vänster, bakväggen till höger, ute till höger om den. **Inte skalenligt.** Koordinaterna är en startpunkt; flytta högst 8 enheter om en etikett kräver det.

| Del | Form och läge | Stil |
|---|---|---|
| Mark | linje y 310 från x 44 till x 594; skraffering under, y 314–360, glest, en `<path>` per rad | blyerts 2, skraffering blyerts-2 1,25 |
| Betongplatta | band y 298–310, x 80–510 | blyerts 2, ingen skraffering (den står på marken) |
| Tak | band 10 tjockt, y 110–120, från x 66 till x 524 | blyerts 2 |
| Porten | en lodrät skiva x 80–86 från y 120 ner till y 290, så att en **glipa på 8** blir kvar mot plattan | blyerts 2 |
| Bakvägg | x 494–510, från plattan upp till taket, med ett hål för slangen vid y 164–176 | blyerts 2 |
| Bilen | sidoprofil som ett barn ritar den: kaross x 130–384, y 222–284 med rundade hörn, kupé x 190–320, y 180–222, två hjul r 20 med centrum (178, 280) och (336, 280) som står på plattan | blyerts 2 |
| Snön | fyra eller fem små buckliga tuvor på kupétaket och motorhuven, och sex droppar som faller från karossens underkant mot plattan, x 150–370, y 288–296 | blyerts-2 1,5 |
| Avfuktaren | en rektangel x 436–488, y 196–250, som hänger på bakväggen, med ett luftgaller som tre korta vågräta streck | blyerts 2 |
| Slangen | två parallella linjer 8 isär från avfuktarens ovansida vid x 462, upp till y 170 och ut genom hålet i bakväggen till x 548, med fall utåt (y 170 vid väggen, y 176 vid x 548) | blyerts 2 |
| Hygrometern | en liten ring r 11 på bakväggens insida vid (470, 146), med en visare | blyerts 2 |
| Bensindunken | ute, stående på marken, x 540–574, y 268–310: en rektangel med ett handtag uppe och en kort pip | blyerts 2 |

**Snickarpennan, den enda saken som pekar.** Den fuktiga luften ut: en pil i penna 2,5 som börjar i slangens mynning vid (550, 176) och går ut och lätt nedåt till cirka (586, 186), med öppet pilhuvud, och två korta vågiga streck bredvid som luft. Inget annat i penna utom etiketten T5 och marginallinjen.

## 4. Handskriften

Caveat 500, 24 px, inget under. Ledare i blyerts-2 1,25 px. Papperslapp bakom etiketter som står i skraffering. **Högst 46 tecken etikettext**, orden är sidans egna.

| Nr | Text | Färg | Placering |
|---|---|---|---|
| T1 | porten | blyerts-2 | inne i garaget vid porten, cirka (96, 164), ledare till glipan vid (84, 294) |
| T2 | snö | blyerts-2 | ovanför bilens kupé, cirka (238, 160), ledare till en tuva på kupétaket |
| T3 | avfuktare | blyerts-2 | under avfuktaren, mellan bilens bakdel och bakväggen, cirka (392, 276), ledare till rektangeln |
| V1 | under 60 % | blyerts på tumstock | till vänster om hygrometern, cirka (344, 152), ledare till ringen |
| T5 | slangen ut | penna | ovanför taket till höger, cirka (470, 94), ledare i penna 1,25 till slangens mynning utanför väggen |
| T6 | bensin | blyerts-2 | ute ovanför dunken, cirka (534, 258) |

Tecken: 6 + 3 + 9 + 10 + 10 + 6 = 44. Tumstock `#e8b830` 65 procent bakom V1, roterad 1 till 2 grader; ingen annan markering. Står något för tätt för 24 px: säg till, krymp inte.

## 5. Alt, aria-label och bildtext

- `aria-label` och `bildAlt` (116 tecken): "Ett enkelgarage i genomskärning med en avfuktare i garaget vid ytterväggen, där slangen leder den fuktiga luften ut."
- `bildtext`: "Fukten kommer in genom porten och med snön på bilen. Avfuktaren hänger vid ytterväggen, och slangen tar ut den fuktiga luften genom ett hål på cirka 70 millimeter, så kort som möjligt och med fall utåt. Hygrometern ska visa under 60 procent, för där rostar stål knappt alls. Dunken med bensin står utanför garaget. Källa: Stålbyggnadsinstitutet och Acetecs dokumentation för EvoDry 6H 2.0."

Hantverkaren har lämnat motivet men inte ordagrann alt eller bildtext; texterna är byggda av sidans egna meningar.

## 6. Budget och kontroller

Publicerad fil **under 28 kB, 28 672 byte**. Källan under 10 kB. Kontrollerna som i `spec-skiss-takfot-snitt-2026-09-29.md` avsnitt 7, med `fukt/garaget`. Vid granskningen på 343 px: känns garaget och bilen igen på en sekund, syns det att slangen går ut genom väggen, går alla etiketter att läsa, och läses dunken som en dunk.

## 7. Tillstånd

Som takfotsspecen avsnitt 8.

## 8. Godkännande

Godkänd av UX och bygge 2026-09-29, publicerad fil 19 271 byte. Godkända avvikelser: hjulen på y 278 så att de står på plattan; hålet i väggen 14 högt; "bensin" flyttad fri från pipen; två konsolstreck som håller avfuktaren på väggen; kupéfönster och ett kryss på dunken så att motiven känns igen. Inlagd i `avfuktare-garage.mdx` med alt och bildtext enligt avsnitt 5. Sidan hade ingen platshållarkommentar.
