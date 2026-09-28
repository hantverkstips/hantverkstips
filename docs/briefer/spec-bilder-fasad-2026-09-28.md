# Spec: huvudbilder till tre fasadsidor

UX och bygge-agenten, 2026-09-28. Gäller:

| Sida | Fil |
|---|---|
| /fasad/tvatta-fasad/ | `src/content/guider/fasad/tvatta-fasad.mdx` |
| /fasad/renovera-fonster/ | `src/content/guider/fasad/renovera-fonster.mdx` |
| /fasad/valja-fasadfarg/ | `src/content/kunskap/fasad/valja-fasadfarg.mdx`, skrivs fortfarande |

Kraven kommer ur `docs/briefer/seo-checklista-2026-09-28/fasad.md`, avsnitten Bilder, och ur hantverkarens diagramkommentar i `valja-fasadfarg.mdx` rad 141–149. Reglerna är DESIGN.md avsnitt 7, Skisserna och Diagram, och bilaga A punkt 13.

Förebilder:
- `src/assets/illustrationer-kallor/el/u-varde-vagg.svg` med frontmattern i `src/content/kunskap/el/u-varde.mdx` rad 16–18, för skisserna.
- `src/assets/illustrationer-kallor/fukt/sw39fw-kapacitet.svg`, för diagrammet: Atkinson 22 px på axlarna och en anteckning i Caveat.

## 0. Gemensamt för alla tre

- **Roller:**
  - Hantverkaren skriver etiketterna, alt och bildtext.
  - Utvecklaren ritar. Han får börja med `TEXT SAKNAS` i etiketterna, eftersom placeringen står här och hänger inte på orden så länge de håller teckengränsen.
  - Jag rendrar på 343 px och godkänner.
  - Hantverkaren lägger in raderna i frontmattern.
  - Utvecklaren rör ingen innehållsfil.
- **Filer:**
  - Källan ligger i `src/assets/illustrationer-kallor/fasad/[namn].svg`, som är en ny mapp.
  - `npm run illustrationer` skriver den publicerade filen till `src/assets/illustrationer/fasad/[namn].svg`. Skriptet går igenom mapparna rekursivt, så ingen registrering behövs.
  - Utvecklaren kör skriptet för de tre filerna men bygger inte.
- **Papper och penna:**
  - Papperet är 600 × 360 med `pattern` linjerat var 24:e px och marginallinjen i penna vid 35 procents opacitet på x 40, som förebilden.
  - Tokens i hex: papper #f5efe3, linje #c9bca3, blyerts #2a2521, blyerts-2 #625a50, penna #ad3519, tumstock #e8b830.
- **Linjer:** blyerts 2 px med runda ändar. Raka linjer är kvadratiska kurvor med kontrollpunkten högst 3 procent ur led, och hörnen skjuter över 2 till 4 px.
- **Det som pekar:** en sak i penna, 2,5 px. Ett tal får tumstock bakom sig: 65 procents opacitet, roterat 1 till 2 grader, bara bakom talet.
- **Handskrift:** Caveat 500, 24 px, ingen etikett under 24. Caveat är cirka 10,5 px per tecken i 24 px, och teckengränserna nedan är räknade på det. Bakom en etikett som står på skraffering eller linjer ligger en papperslapp i `papper`.
- **Förbjudet:** människor, verktyg i drift, produktbilder och `<text>` i den publicerade filen.
- **Gränser:** varje publicerad fil under 40 kB. Rotelementet har `role="img"` och `aria-label` med samma lydelse som `bildAlt`.
- **Frontmatter,** som u-värde:

```yaml
bild: ../../../assets/illustrationer/fasad/[namn].svg
bildAlt: "…"        # högst 125 tecken, säger vad bilden visar och bär sidans fras
bildtext: "…"       # talen och detaljerna, meningar
```

  Huvudbilden står efter kortsvaret, där mallen lägger den. Ingen av bilderna står också som `<Illustration>` i brödtexten.
- **Delningsbild:** `npm run delningsbilder` gör sidans delningsbild av huvudbilden. Ingen hand ritar en.

---

## 1. Tvätta fasad: `fasad/tvatta-panel`

**Frågan bilden svarar på:** åt vilket håll medlet stryks och åt vilket håll det sköljs, och hur torr panelen ska vara innan den får färg. Det är kortsvarets två stycken: "Stryk på nerifrån och upp … skölj uppifrån och ner", och **16 procent**.

**Motiv.** En bit stående lockpanel rakt framifrån, som en vägg från sockeln upp till takfoten. Ingen slang, ingen borste och ingen högtryckstvätt, eftersom verktyg i drift inte ritas. Riktningarna visas som pilar.

| Del | Mått i 600 × 360 |
|---|---|
| Marklinje | Blyerts 2 px på y ≈ 316, från x 56 till 584. Skraffering under, 10 px streck i 45 grader, blyerts-2 1,25 px, 22 px emellan, ner till y 348 |
| Sockel | Rektangel x 196 till 404, y 292 till 316, tom |
| Takfot | Takutsprångets underkant som en linje på y 52 från x 180 till 420, med två korta takfall uppåt i kanterna som brytlinjer |
| Panelen | x 200 till 400, y 56 till 292. Fyra underbrädor, cirka 44 px breda, med tre lockbrädor över skarvarna, cirka 14 px breda. Lockbrädorna har dubbla linjer så att de läses som brädor ovanpå, och de går förbi underbrädornas skarvar hela vägen. Inga kvistar, inga spikar |
| Pil upp | I blyerts-2 1,5 px längs panelens vänstra halva, x ≈ 236, från y 280 upp till y 80, med spetsen uppåt. Den säger att medlet stryks nerifrån och upp |
| Pil ner | Det som pekar, i penna 2,5 px, längs panelens högra halva, x ≈ 364, från y 72 ner till y 284, med spetsen nedåt. Tre korta vågiga streck i penna bredvid pilen, som vatten som rinner. Sköljningen är det checklistan kräver ("sköljriktningen utsatt"), och det är den som oftast görs åt fel håll |
| Nyckeltalet | Uppe till höger på x ≈ 470, y ≈ 70: "16 %" med tumstock bakom. Ingen annan siffra markeras |

**Etiketterna.** Orden skrivs av hantverkaren. Här står plats och teckengräns.

| Etikett | Plats | Högst | Färg |
|---|---|---|---|
| Medlet stryks nerifrån och upp | Vänster om panelen, x 52 till 190, två rader på y 150 och 176 | 13 tecken per rad | blyerts |
| Sköljningen uppifrån och ner | Höger om panelen, x 412 till 590, två rader på y 170 och 196 | 16 tecken per rad | blyerts |
| Vad talet 16 % är, fuktkvoten innan målning | Under nyckeltalet, x 430 till 590, två rader på y 100 och 126 | 15 tecken per rad | blyerts-2 |

**Alt** (hantverkaren, högst 125 tecken) säger att det är en panel där medlet stryks nerifrån och upp och sköljs uppifrån och ner, och innehåller "tvätta fasad" eller "fasadtvätt". **Bildtexten** har talen: 16 procent fuktkvot enligt Svenskt Trä, Beckers och Nordsjö, och verkningstiden om hantverkaren vill.

**Plats:** frontmattern i `tvatta-fasad.mdx`, rad 3–9, som `bild`, `bildAlt` och `bildtext`.

**Checklistans andra förslag,** en skiss av fuktmätaren mot panelen, görs inte. Den visar ett verktyg i drift, och var man mäter står redan i text (300 mm från brädans ände, skuggsidan). En bild per sida räcker här.

---

## 2. Renovera fönster: `fasad/fonsterbage-kittfals`

**Frågan bilden svarar på:** var kittet sitter och varför kittfalsen grundas innan kittet läggs. Sidan definierar kittfalsen i steg 4 och säger efter listan att sprickor i kittet kommer av en fals som inte grundats (Illbruck). Kortsvaret säger "grundmåla det bara träet, och kitta glasen när grundfärgen har torkat".

**Motiv.** Ett snitt genom bågens nedre del, sett från sidan: inne till vänster och ute till höger. Glaset står upp i falsen, och kittet ligger som en sned list på utsidan av glaset. Skalan är inte verklig. Glaset och färgskiktet ritas tjockare än de är för att synas, och det står i en kommentar i filen, som i förebilden.

| Del | Mått i 600 × 360 |
|---|---|
| Bågens nederstycke | Rektangel i blyerts 2 px, x 220 till 400, y 196 till 300. Den nedre kanten får en brytlinje i blyerts-2 som visar att bågen fortsätter |
| Kittfalsen | Ett urtag i nederstyckets övre högra (yttre) hörn: från (340, 196) ner till (340, 236) och ut till (400, 236) |
| Glaset | Två parallella linjer i blyerts 2 px, x 330 och 340, från y 232 upp till y 48, med en brytlinje upptill. Glaset står på falsens botten via en kort klots, eller direkt; utvecklaren väljer det som läses tydligast vid 343 px. Ingen fyllning |
| Kittet | Fyllt med papperet, utan egen färg. Blyertskontur 2 px: från glaset i (340, 200) snett ner till falsens yttre kant i (398, 236), och längs falsens botten och glaset tillbaka. En stiftspik i blyerts genom kittet in i falsens vägg, liten men större än 6 px |
| Det som pekar | Falsens två ytor, den lodräta och den vågräta, omritade i penna 2,5 px som ett tunt lager direkt på träet under kittet. Det är grundfärgen i falsen. Ingen pil behövs, eftersom linjen själv är markeringen |
| Färgen på glaset | Färgen över kittet ritas som en linje i blyerts-2 1,5 px längs kittets överkant, som slutar en bit upp på glaset. En måttbygel i blyerts-2 1,5 px vid glaset visar hur långt, med nyckeltalet |
| Nyckeltalet | "1 till 2 mm" vid bygeln, med tumstock bakom. Skriv inte "1–2", eftersom tankstreck inte används. Ingen annan siffra |
| Riktningarna | "inne" till vänster (x ≈ 90, y ≈ 120) och "ute" till höger (x ≈ 520, y ≈ 120), i blyerts-2, som i förebilden |

**Etiketterna** (hantverkaren skriver orden):

| Etikett | Plats | Högst | Färg |
|---|---|---|---|
| glas | Vänster om glaset, x ≈ 262, y ≈ 110 | 6 tecken | blyerts |
| kitt | Ute till höger om kittet, x ≈ 420, y ≈ 214, med en ledlinje i blyerts-2 1,5 px in i kittet | 8 tecken | blyerts |
| Kittfalsen, grundad före kittet | Under bågen, x 300 till 580, två rader på y 322 och 346, med en ledlinje i blyerts-2 upp till falsens hörn | 22 tecken per rad | blyerts |
| Vad bygeln mäter, färgen ut på glaset | Vid nyckeltalet, x 400 till 590, y ≈ 70 och 96 | 18 tecken per rad | blyerts-2 |
| bågen | Inne i nederstycket, x ≈ 250, y ≈ 256 | 8 tecken | blyerts-2 |

**Alt** (högst 125 tecken) säger att det är ett snitt genom en fönsterbåge med glaset, kittet och den grundade kittfalsen, och bär frasen "renovera fönster" eller "kitta fönster". **Bildtexten** har måttet 1 till 2 millimeter (stegen 7 och 8) och att falsen grundas eller oljas innan kittet läggs, med Illbruck som källa för sprickorna.

**Plats:** frontmattern i `renovera-fonster.mdx`, som `bild`, `bildAlt` och `bildtext`.

**Checklistans andra förslag,** tidsplanen som skiss, görs inte. Tabellen finns och är kravet.

**Förbjudet här:** ingen IR-värmare, inga verktyg och ingen hand med kittkniv (checklistan, Bilder).

---

## 3. Välja fasadfärg: `fasad/folksam-fasadfarg`

Hantverkarens beskrivning i `valja-fasadfarg.mdx` rad 141–149 är underlaget. Den godkänns med tre ändringar, som står sist i avsnittet.

**Frågan diagrammet svarar på:** vad Folksams två tester visade: hållbarheten blev mycket bättre, miljön mycket sämre, och antalet som klarade båda stod still på fyra. Kortsvarets markering är **4 av 46**, och diagrammet markerar samma tal.

**Diagrammets hand** (DESIGN.md avsnitt 7, Diagram):
- papperet och marginallinjen som skisserna
- axlar och etiketter i blyerts-2, Atkinson Hyperlegible 22 px (som i förebilden `sw39fw-kapacitet.svg`)
- ingen handskrift utom en anteckning i penna
- inga tårtor, inget 3D, ingen hover

| Del | Mått i 600 × 360 |
|---|---|
| Plotytan | x 80 till 560, y 70 till 290 |
| Y-axeln | Blyerts-2 1,5 px på x 80, från 0 (y 290) till 50 (y 70), alltså 4,4 px per färg. Skalstreck och tal vid 0, 10, 20, 30, 40 och 50 i Atkinson 22 blyerts-2, höger­ställda vid x 72. Inga stödlinjer utom den som papperet redan har |
| X-axeln | Blyerts 2 px på y 290 från x 80 till 560 |
| Grupperna | Två grupper, 2015 med staplarna på x 120 till 290 och 2018 på x 350 till 520. Tre staplar per grupp, 48 px breda med 13 px mellan, i ordningen hållbarheten, miljö och hälsa, båda |
| Staplarnas höjd | Talet gånger 4,4 px från y 290: 9 blir 39,6 px, 16 blir 70,4, 4 blir 17,6, 31 blir 136,4 och 5 blir 22 |
| Hållbarheten | Kontur i blyerts 2 px, ingen fyllning |
| Miljö och hälsa | Kontur i blyerts-2 2 px, fylld med `linje` |
| Båda | Kontur i penna 2,5 px, ingen fyllning. Det är den enda serien i penna |
| Tal ovanför varje stapel | Atkinson 22 i blyerts, 6 px över stapeln. Talet 4 över 2018 års "båda"-stapel får tumstock bakom, som enda markering |
| Antalet färger i testet | En tunn streckad linje i `linje` 1,5 px över varje grupp på 45 (y 92) och 46 (y 87,6), bara så bred som gruppen, med talet i blyerts-2 till höger om linjen. Den ger "av 45" och "av 46" utan en fjärde stapel |
| Gruppetiketterna | Under x-axeln, centrerade under gruppen, Atkinson 22 blyerts-2 på y 318: årtalet. En andra rad på y 344 med antalet färger, eller bara årtalet om linjen ovan räcker. Hantverkaren väljer |
| Förklaringen | Överst, y ≈ 40, tre rutor om 16 × 16 px i seriernas stil, med orden bredvid i Atkinson 22 blyerts-2, från x 80. Alternativet är att skriva seriens namn under varje stapel, men sex namn under sex smala staplar blir gröt vid 343 px |
| Anteckningen | En enda, i Caveat 24 penna, mellan grupperna ovanför "båda"-staplarna, y ≈ 230, med en kort penna-pil till 2018 års "båda"-stapel. Den säger att det blev fyra båda åren |

**Etiketterna** (hantverkaren skriver orden):

| Etikett | Plats | Högst |
|---|---|---|
| Förklaringens tre namn | y 40, i rad från x 104 | 12, 16 och 6 tecken (Atkinson 22 är cirka 11 px per tecken, och raden ryms i 480 px med 24 px mellan) |
| Gruppetiketterna | y 318 och 344 | 14 tecken per rad |
| Anteckningen | x 300 till 470, y 220 och 246 | 14 tecken per rad, högst två rader |

**Ändringar mot hantverkarens kommentar:**
1. **Y-axeln går till 50, inte 46.** Då får talen ovanför staplarna och den streckade linjen på 46 plats under förklaringen.
2. **Bara 2018 års 4 markeras.** Kortsvaret markerar "4 av 46", och ett tal per bild får tumstock. Att det var fyra även 2015 säger anteckningen i penna.
3. **"Övriga i blyerts-2" blir två stilar:** hållbarheten i blyerts och miljön i blyerts-2 med `linje` som fyllning. Annars går de två serierna inte att skilja utan färg, och penna används bara till en serie.

**Alt och bildtext:** hantverkarens förslag i kommentaren godkänns som underlag. Alten har 107 tecken. Talen i bildtexten ska stämma med tabellen på rad 132–137 och källan med dess rad.

**Plats:** som huvudbild i frontmattern i `valja-fasadfarg.mdx`, eftersom sidan inte ska ha bilder av burkar eller målade ytor (checklistan punkt 9) och kortsvaret redan bär Folksams tal. Kommentaren på rad 141–149 tas bort av hantverkaren när frontmattern är skriven. Diagrammet står inte också vid tabellen, eftersom samma bild två gånger på en sida är fel.

**Förbjudet:** inga produktnamn i diagrammet och inget som kan läsas som att Christian testat färgerna (checklistan `fasad.md` rad 349).

---

## 4. Godkännande

Jag rendrar varje fil på 343 px och i 600 och kontrollerar:
- att motivet förstås innan rubriken är läst
- att en sak är i penna
- att ett tal har tumstock
- att handskriften är 24 px och diagrammets text 22 px
- att filen inte innehåller `<text>` och är under 40 kB
- att `aria-label` är samma lydelse som `bildAlt`
- att ingen etikett når utanför 600 × 360 eller in i marginallinjen

Sedan lägger hantverkaren in frontmattern, och `npm run kontrollera` ska ge 0 fel med alt under 125 tecken.

## 5. Till koordinatorn

Ordningen:
1. **Hantverkaren** skriver etiketterna i avsnitt 1 till 3, alt och bildtext. Etiketterna kan komma efter ritningen.
2. **Utvecklaren** ritar de tre källfilerna och kör `npm run illustrationer`.
3. **Jag** godkänner.
4. **Hantverkaren** skriver frontmattern.

`valja-fasadfarg.mdx` skrivs fortfarande. Ändras talen i tabellen på rad 132–137 ändras staplarna, och utvecklaren ritar från tabellen, inte från den här specen.

---

## 6. Granskning av första ritningen och besluten om krockarna (2026-09-28)

Jag har rendrat de tre publicerade filerna i `src/assets/illustrationer/fasad/` på 343 och 600 px, med `TEXT SAKNAS` i etiketterna. Båda krockarna är mina egna fel i specen.

### 6.1 `folksam-fasadfarg`: anteckningen flyttas till höger om 2018 års hållbarhetsstapel

Specens plats, x 300 till 470 och y 220 till 246, går rakt genom 2018 års hållbarhetsstapel (x 350 till 398, upp till y 153,6).

Illustratörens förslag, ovanför y 150, godkänns inte. Där står talet 31 (y 147,6) och linjen för 46 färger (y 87,6). Om anteckningen i stället läggs över 2015 års grupp måste pilen korsa 31-stapeln för att nå 2018.

**Beslut.** Anteckningen står i det tomma fältet ovanför 2018 års miljöstapel och båda-stapel, som är 22 och 17,6 px höga:
- Två rader i Caveat 24 i penna, från x 408, på y 190 och y 216. Högst 14 tecken per rad, som förut, vilket ger cirka 147 px och slutar före x 560.
- Pilen i penna 2,5 px går från cirka (500, 224) till cirka (497, 246). Spetsen stannar ovanför talet 4 och dess tumstock och korsar inga staplar.
- Inget annat i diagrammet ändras.

**Övrigt i diagrammet:**
- Förklaringens tredje namn klipps i högerkanten i renderingen, men bara för att `TEXT SAKNAS` är 11 tecken. Gränsen på 6 tecken från avsnitt 3 räcker, och ingen ändring behövs.
- Resten är godkänt:
  - bara båda-serien i penna och bara 2018 års 4 markerad
  - staplarnas höjder stämmer med tabellen
  - Atkinson 22 läses på 343 px
  - 31,0 kB, ingen `<text>`

### 6.2 `fonsterbage-kittfals`: glaset och spiken godkänns, motivet förstoras och kittfalsens etikett flyttas

**Glaset på x 346 till 356: godkänt.** Specens x 330 till 340 låg inne i träet, till vänster om falsens lodräta yta på x 340. Illustratören har rätt: glaset står i falsen, och glappet på 6 px mot falsens yta läses som kittbädden bakom glaset.

**Stiftspiken ner i falsbottnen, på x 360: godkänd.** I nederstycket trycks stiftet ner i falsens botten, tätt utanför glaset, och håller glaset mot falsens lodräta yta. Specens "in i falsens vägg" var fel för det här snittet.

**Ledlinjen och "bågen".** Ledlinjen från kittfalsens etikett ((362, 305) till (344, 240)) går cirka 45 px från ett riktigt "bågen" på 5 tecken, så själva krocken finns bara med platshållaren. Men vid 343 px ser jag ett större fel. Falsen är 60 × 40 px och kittet cirka 42 × 32 px i 600-skalan, alltså cirka 24 × 18 px på mobilen. Det bilden handlar om är den minsta detaljen i den. Etiketten under bågen trängs dessutom mot brytlinjen (y 294 till 307).

**Beslut: motivet ritas om i skala 1,5, med falsens hörn som ankare, och kittfalsens etikett flyttas till utsidan.** De nya koordinaterna ersätter tabellen och etikettabellen i avsnitt 2:

| Del | Mått i 600 × 360 |
|---|---|
| Bågens nederstycke | x 180 till 450, överkanten på y 180, brytlinjen nertill mellan y 322 och 334 |
| Kittfalsen | (360, 180) ner till (360, 240) och ut till (450, 240) |
| Glaset | x 369 till 381, från y 234 upp till y 40, med brytlinjen upptill |
| Kittet | Fyllt med papperet. Konturen går från glaset i (381, 186) snett ner till (447, 240), och längs falsbottnen och glaset tillbaka |
| Stiftspiken | x 392, från y 212 ner till y 252, med huvudet inne i kittet |
| Penna | Falsens två ytor: (363, 184) till (363, 237) till (447, 237) |
| Färgen och bygeln | Färgen längs kittets överkant och upp på glaset till y ≈ 164. Bygeln vid glaset, x ≈ 396, från y 164 till 186 |
| Nyckeltalet | "1 till 2 mm" med tumstock, x 440 till 560, y ≈ 140, ledlinje till bygeln |

| Etikett | Plats | Högst |
|---|---|---|
| inne, ute | x ≈ 80 och x ≈ 530, y ≈ 120, blyerts-2 | som nu |
| glas | Vänster om glaset, x ≈ 300, y ≈ 100 | 6 tecken |
| kitt | x 470, y 206, ledlinje i blyerts-2 in i kittet till cirka (420, 222) | 8 tecken |
| Kittfalsen, grundad före kittet | Utanför bågen på utsidan, x 460 till 590, upp till tre rader på y 272, 298 och 324. Ledlinjen i blyerts-2 går från (458, 266) till penna-linjen i cirka (432, 238) | **12 tecken per rad**, alltså cirka 36 tecken totalt, mot 22 × 2 förut |
| Vad bygeln mäter | x 402 till 590, y 70 och 96, blyerts-2 | 18 tecken per rad, som förut |
| bågen | Inne i nederstycket till vänster, x ≈ 220, y ≈ 290, blyerts-2 | 8 tecken |

Kontroll efter omritningen: inget i motivet till vänster om x 60, ingen etikett under y 352, och falsen och kittet minst 45 px breda vid 343 px.

### 6.3 `tvatta-panel`: godkänd i väntan på orden

- Lockpanelen läses som stående brädor med lock över skarvarna.
- Bara skölj-pilen och vattenstrecken står i penna, och "16 %" är det enda markerade talet.
- Marken är skrafferad, och etiketterna står fritt på båda sidor om panelen.
- 28,0 kB, ingen `<text>`.

Ingen ändring. Jag tittar igen när hantverkarens ord står i alla tre.

---

## 7. Slutgranskning av bilderna och de tre sidorna (2026-09-28)

### 7.1 Bilderna: godkända

Jag har rendrat de publicerade filerna på 343 och 600 px.

| Fil | Storlek | `<text>` | `aria-label` = `bildAlt` | Etiketterna |
|---|---|---|---|---|
| `tvatta-panel.svg` | 25,1 kB | 0 | ja | "stryk på / nerifrån upp", 12 tecken, "skölj uppifrån / och ner", "fuktkvot högst / före målning". Alla inom sina ytor och fria från panelen |
| `fonsterbage-kittfals.svg` | 29,0 kB | 0 | ja | Omritad i skala 1,5 enligt 6.2. "kittfalsen / grundas före / kittet" står utanför bågen, och ledlinjen går till penna-linjen. "bågen" står fritt. Falsen och kittet är cirka 50 px breda på 343 px |
| `folksam-fasadfarg.svg` | 33,1 kB | 0 | ja | Anteckningen "Fyra vinnare / båda åren" står enligt 6.1 och korsar inga staplar. Förklaringen ryms, och gruppetiketterna "45 färger" och "46 system" står under årtalen |

På alla tre är en sak i penna och ett tal markerat. Handskriften är 24 px och diagrammets text 22 px, och inget går in i marginallinjen. Huvudbilden på tvättguiden renderas som `<img>` 341 × 205 med alten ovan.

### 7.2 Sidorna på 375 px

Egen dev-server på port 4447 och headless Edge, sedan stängda.

- **Sidledsscroll:** ingen på någon av de tre sidorna. Alla tabeller ligger i tabellytan (`.tabell-yta` med ledtexten "Dra i sidled"), också tvättguidens doseringstabell som nu är Markdown. Hast-pluginet ger den samma yta som `<Tabellyta>`.
- **Skript:** inget eget skript utöver JSON-LD. De två som syns i dev är Vites stilinjektion.
- **Tabellerna på fasadfärgssidan:** fem stycken, 343 till 569 px breda och 231 till 1 024 px höga. Raderna är 100 till 240 px höga, och cellerna läses utan att brytas efter vartannat ord. Godkända.
- **Tabellerna på fönsterguiden:** fem stycken, alla 343 px breda utan sidledsscroll. Godkända.

### 7.3 Ändringar

| # | Vem | Fil och rad | Ändring |
|---|---|---|---|
| 1 | hantverkaren | `src/content/guider/fasad/tvatta-fasad.mdx` rad 124–130, kolumnen Efteråt | Tabellen är 463 × 995 px på 375 px. Raden för Nordsjös alg- och mögelmedel är ensam cirka 450 px hög, eftersom Efteråt-cellen har 104 tecken i den smalaste kolumnen. Varje cell i Efteråt ska vara högst cirka 45 tecken och varje cell i Blandning högst cirka 70. Villkoren som inte ryms, "24 timmar utan regn", "får upprepas en gång" och "täck marken 0,5 meter ut", flyttas till stycket under tabellen, som redan förklarar just den raden. Målet är under 800 px. Talen ändras inte |
| 2 | utvecklaren | `src/components/ui/Produktkort.astro` rad 68, och en konstant i `src/lib/kalkyl/elkostnad.ts` | Se 7.4. Länken "Räkna elkostnaden" visas bara för produkter i kategorier som elkostnadsräknaren är gjord för |
| 3 | utvecklaren | `Produktkort.astro` rad 47 | Se 7.5. Kategorin slås upp utan `getEntry` för slugar som saknar kategorifil |
| 4 | hantverkaren, underlaget | `src/content/kunskap/fasad/valja-fasadfarg.mdx` rad 136 och 214, "3 på porös yta" | Enligt Beckers datablad, som fasadräknarens 13.3 bygger på, grundas porös puts med silikatbinder och vatten utan färg och får sedan två strykningar färg. "3" stämmer bara om grundningen räknas som en strykning. Då säger sidan 3 och räknaren 2 för samma färg. Cellen ska säga att en av de tre är grundningen med binder, eller säga 2 och nämna bindern. Talet ändras inte utan att underlagsarbetaren läst databladet igen |

### 7.4 Beslut: "Räkna elkostnaden" på produktkortet

**Åtgärdas, kod.** Länken visas i dag för varje produkt med `effekt_w` i databasen (`Produktkort.astro` rad 68). Därför står den på Speedheater-kortet i fönsterguiden, och med samma logik på Nilfisk-kortet i tvättguiden, eftersom `effekt_w` 1 400 finns i `supabase/seed-produkter-2026-09-28.sql` rad 45.

Elkostnadsräknaren är gjord för maskiner som går i timmar varje dag i månader. Registrets rad säger avfuktaren, värmefläkten och frysen. En värmare som används några timmar per fönster, eller en högtryckstvätt en dag om året, ger ett tal på några kronor. Länken ser ut som utfyllnad, och ett kort ska bara ha det som hjälper köpet (DESIGN.md bilaga A punkt 14).

- I `src/lib/kalkyl/elkostnad.ts` läggs `export const ELKOSTNAD_KATEGORIER: readonly string[] = ['luftavfuktare'] as const`. Kommentaren säger att kategorin läggs till när en maskin i den går i timmar varje dag, som avfuktare och värmefläktar.
- `harEffekt` i `Produktkort.astro` rad 68 blir sann bara när `produkt.kategoriSlug` finns i `ELKOSTNAD_KATEGORIER` och effekten finns.
- Kontroll: avfuktarkorten på fuktsidorna har kvar länken, och Speedheater- och Nilfisk-korten har ingen. `/rakna/elkostnad/?produkt=…` fungerar som förut för den som har adressen.

### 7.5 Beslut: varningarna om kategorierna fargborttagare och hogtryckstvattar

**Åtgärdas, kod. Inga kategorifiler skapas.** Varningen kommer från `getEntry('kategorier', produkt.kategoriSlug)` i `Produktkort.astro` rad 47. Databasen har kategorierna (seed rad 29–30), men `src/content/kategorier/` har bara filer för de kategorier som har en kategorisida. En fil för färgborttagare eller högtryckstvättar skulle bli en tom bäst-i-test-sida, och den ska inte finnas förrän det finns produkter att jämföra.

Sidorna renderar rätt i dag. Korten saknar bara nyckelvärden, som hämtas från kategorifilens `specs`. Men bygget ska vara grönt utan varningar från komponenterna (skillen astro-och-prestanda avsnitt 7 punkt 4), och varningen kommer att upprepas för varje ny produkt i en kategori utan sida.

- Rad 47 slår upp kategorin med `(await getCollection('kategorier')).find((k) => k.id === produkt.kategoriSlug)` i stället för `getEntry`. Det ger `undefined` utan varning, och koden efter hanterar redan `undefined`.
- Samma mönster i `src/lib/kort.ts` rad 178 om den kan nås med en slug utan fil. Utvecklaren kontrollerar det och rapporterar.
- Kontroll: dev-loggen har ingen `[WARN] [content] Entry kategorier` när tvätt- och fönsterguiden laddas, och avfuktarkorten visar fortfarande sina nyckelvärden.

Efter rad 2 och 3 kör utvecklaren astro check, kontrollera och testet för elkostnad. Rad 1 och 4 ändrar inget test. Bilderna granskas inte igen.
