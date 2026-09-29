# Spec: avstånden från hällen till stänkskyddet och fläkten

UX och bygge, 2026-09-29. Beställd av koordinatorn som huvudbild för `src/content/kunskap/kok/stankskydd.mdx` (utkast), namnet `kok/stankskydd`. Hantverkarens förslag, genom koordinatorn: avstånden från hällen till väggen och fläkten. Checklistan är `docs/briefer/seo-checklista-2026-09-29/kok-4.md` rad 264 ("köksväggen med måtten mellan bänk och skåp och zonen bakom hällen. Mått i bildtexten"). Faktabladet är `docs/briefer/faktablad/kunskap-stankskydd.md` rad 16, 18, 45, 47 och 71–73; sidans tabell under "Avståndet bakom hällen".

Handen och papperet som i `src/assets/illustrationer-kallor/tak/takfot-snitt.svg`. Läs `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3, 5, 7 och 8; allt som inte står här gäller som där.

## 1. Vad bilden ska säga

Hällen får inte sitta hur nära stänkskyddet som helst, och inte hur nära fläkten som helst. Med Mieles induktionshäll KM 6306 och ett stänkskydd av laminat är det minst 50 mm från urtaget i bänkskivan till stänkskyddets framsida, och minst 760 mm upp till fläkten när fläktens tillverkare inte anger något annat. Måttpilen för de 50 millimetrarna, i penna, är den enda saken som pekar.

Källorna: Miele KM 6306, faktabladet rad 45 ("Nischinklädnad av brännbart material (t.ex. trä): minsta avstånd till urtaget 50 mm"; "Utan uppgift från fläkttillverkaren eller med lättantändligt material ovanför: minst 760 mm"). Laminat räknas som brännbart (rad 18). **Nyckeltalet är minst 50 mm**, och det får gul markering en gång.

## 2. Beslut

- Bilden visar induktion och laminat, det fall där 50 mm gäller rakt av. Kakel och sten (35 mm vid 15 mm tjocklek) och gasbranschens mått står i sidans tabell och nämns i bildtexten utan tal.
- 760 mm mäts från hällens ovansida till fläktens underkant. Faktabladet återger inte Mieles bild; ser utvecklaren en förlaga som mäter från en annan nivå: stanna och rapportera, rita inte om.
- Checklistans "måtten mellan bänk och skåp" (50 till 60 cm, Picky Living) ritas inte: ett snitt genom hällen skär fläkten, inte överskåpen, och en tredje bygel gör bilden svårläst på 343 px. Måttet står på sidan i avsnittet om glas.

## 3. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/kok/stankskydd.svg` | Ny källa med `<text>` |
| `src/assets/illustrationer/kok/stankskydd.svg` | Skrivs av `npm run illustrationer` |

Rör inga andra filer, inte heller sidan.

## 4. Motivet, koordinater

Snitt genom bänken och hällen, sett från sidan. Väggen till vänster, rummet till höger. **Inte skalenligt**: 50 mm är förstorat och 760 mm förkortat. Koordinaterna är en startpunkt; flytta högst 8 enheter om en etikett kräver det.

| Del | Form och läge | Stil |
|---|---|---|
| Vägg | x 96–130, y 0–360, skrafferad, kontur bara på framsidan x 130 | blyerts 2, skraffering blyerts-2 1,25 som i fogskissen, en `<path>` per rad |
| Stänkskydd av laminat | en tunn skiva x 130–138 på väggen, från bänkskivan y 230 upp till y 100 | blyerts 2 |
| Bänkskiva | band y 230–250, från stänkskyddet x 138 till framkanten x 560, med urtaget för hällen x 188–470 | blyerts 2 |
| Häll | glasskivan y 222–230, x 180–478, som ligger på bänkskivan runt urtaget, och hällens kropp under bänkskivan x 196–462, y 250–284 | blyerts 2 |
| Underskåp | en lodrät linje vid framkanten x 548 från y 250 ner till y 360 och en sockel, antydd | blyerts-2 1,5 |
| Fläkt | en kåpa med underkant y 76 från x 138 till x 430, som smalnar av uppåt till en skorsten x 236–312 som går ut ur bilden vid y 0 | blyerts 2 |

**Snickarpennan, den enda saken som pekar.** Måttpilen för 50 mm i penna 2,5: vågrät vid y 206, från stänkskyddets framsida x 138 till urtagets kant x 188, med pilspetsar i båda ändar och korta lodräta hjälplinjer i penna 1,25 ner till y 230 vid båda ändarna.

**Bygeln för 760 mm** i blyerts-2 1,5: lodrät vid x 404, från hällens ovansida y 222 upp till fläktens underkant y 76, med korta vågräta hjälplinjer.

## 5. Handskriften

Caveat 500, 24 px, inget under. Ledare i blyerts-2 1,25 px. Papperslapp bakom etiketter som står i skraffering. **Högst 48 tecken etikettext.**

| Nr | Text | Färg | Placering |
|---|---|---|---|
| V1 | minst 50 mm | blyerts på tumstock | ovanför måttpilen, cirka (150, 188), vänsterställd så att den inte går in i väggen |
| T2 | minst 760 mm | blyerts-2 | till höger om bygeln, mitt på den, cirka (414, 154) |
| T3 | laminat | blyerts-2 | i rummet mellan stänkskyddet och fläkten, cirka (150, 130), ledare till skivan vid (134, 140) |
| T4 | häll | blyerts-2 | under bänkskivan i rummet, cirka (480, 300), ledare till hällens kropp vid (462, 270) |
| T5 | fläkt | blyerts-2 | till höger om kåpan, cirka (446, 64) |
| T6 | bänkskiva | blyerts-2 | framför bänkskivans framkant nertill, cirka (470, 332), ledare till framkanten vid (556, 244) om T4 inte redan står där; annars ovanför bänkskivan till höger, cirka (486, 214) |

Tecken: 11 + 12 + 7 + 4 + 5 + 9 = 48. Tumstock `#e8b830` 65 procent bakom V1, roterad 1 till 2 grader; ingen annan markering. Står något för tätt för 24 px: säg till, krymp inte.

## 6. Alt, aria-label och bildtext

- `aria-label` och `bildAlt`: "Snitt genom köksbänken med hällen, som visar avståndet till stänkskyddet i köket och upp till fläkten."
- `bildtext`: "Mieles induktionshäll KM 6306 ska sitta minst 50 mm från ett stänkskydd av laminat, räknat från urtaget i bänkskivan till stänkskyddets framsida, och minst 760 mm under fläkten om fläktens tillverkare inte anger något annat. Kakel och sten får sitta närmare, och en gasspis har andra mått. Ta måtten ur anvisningen till din egen häll. Skissen är inte skalenlig."

Hantverkaren har lämnat motivet men inte ordagrann alt eller bildtext; texterna är byggda av sidans egna meningar.

## 7. Budget och kontroller

Publicerad fil **under 28 kB, 28 672 byte**. Källan under 10 kB. Kontrollerna som i `spec-skiss-takfot-snitt-2026-09-29.md` avsnitt 7, med `kok/stankskydd`. Vid granskningen på 343 px: syns det var de 50 millimetrarna räknas från och till, går de två måtten att skilja åt, går alla etiketter att läsa.

## 8. Tillstånd

Som takfotsspecen avsnitt 8.

## 9. Godkännande

Godkänd av UX och bygge 2026-09-29, publicerad fil 19 111 byte. Godkända avvikelser: T6 på den andra platsen, med en kort ledare ner i bänkskivan; bänkskivans underkant går in till väggen så att stänkskyddet står på den; hällens kropp hänger från glaset genom urtaget. Inlagd i `stankskydd.mdx` med alt och bildtext enligt avsnitt 6. Sidan hade ingen platshållarkommentar.
