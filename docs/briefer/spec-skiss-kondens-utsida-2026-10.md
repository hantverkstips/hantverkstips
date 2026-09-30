# Spec: imma på fönstrets utsida en klar morgon

UX och bygge, 2026-09-30. Krav i `docs/briefer/seo-checklista-2026-09-30/kondens-pa-fonster-utbyggnad.md` punkt 8, till nya H2 5 "Imma på utsidan av fönstret" i `src/content/guider/fukt/kondens-pa-fonster.mdx`. Faktabladet är `docs/briefer/faktablad/guider-kondens-pa-fonster.md` avsnitt 3 och 5.

**Status: specad, ritas inte ännu.** Illustratören börjar när hantverkarens rapport för kondenssidan finns, med bildAlt, bildtext och en kommentar med etiketterna och måtten. Etiketterna i avsnitt 5 tas då ordagrant därifrån. Saknar kommentaren en etikett ritas platsen inte, och illustratören skriver ingen egen.

Handen och papperet som i `src/assets/illustrationer-kallor/fukt/kondens-fonster.svg` (sidans huvudbild). Läs `docs/briefer/spec-skiss-kondens-fonster-2026-09-29.md` och `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3, 5, 7 och 8; allt som inte står här gäller som där.

## 1. Vad bilden ska säga

Ett välisolerat fönster håller ytterglaset nästan lika kallt som luften ute, och en klar natt strålar glaset ut värme mot himlen och blir kallare än luften. Då fäller uteluften sitt vatten på utsidan. Insidan är torr. Imman på ytterglasets utsida i penna är den enda saken som pekar.

Källor: Energimyndigheten ET 2025:01 s. 10, "kondens på utsidan oftast inte utgör en risk eftersom moderna fönster är byggda för att tåla hög fuktbelastning"; Villaägarna "fönstret är så välisolerande" (faktabladet avsnitt 5). Utstrålningen mot en klar himmel har **ingen källa i faktabladet ännu**; checklistan kräver en. Finns den inte i hantverkarens rapport ritas pilarna mot himlen inte, och bilden visar bara imman ute och den torra insidan.

**Nyckeltalet** är fönstrets U-värde, "U under 1,0", ur ET 2025:01 s. 13 (ett nytt fönster bör ha under 1,0). Ett tal, gul markering en gång. Inga temperaturer på glaset: faktabladet har inget tal för ytterglaset.

## 2. Beslut

- Treglas isolerruta, samma snitt och samma hand som huvudbilden, så att läsaren ser att det är samma fönster åt andra hållet. Ute till vänster, inne till höger, som i huvudbilden.
- Ingen pil för inneluften och ingen imma på insidan. Den torra insidan visas med etikett, inte med en symbol.
- Himlen är tre korta bågar och två små stjärnor (fyra korta streck i kors) uppe till vänster i blyerts-2. Ingen måne, inget moln.

## 3. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/fukt/kondens-utsida.svg` | Ny källa med `<text>` |
| `src/assets/illustrationer/fukt/kondens-utsida.svg` | Skrivs av `npm run illustrationer` |

I MDX: `<Illustration namn="fukt/kondens-utsida" alt="…" bildtext="…" />`. Rör inga andra filer.

## 4. Motivet, koordinater (600 × 360)

Lodrätt snitt, inte skalenligt. Koordinaterna är en startpunkt; flytta högst 8 enheter om en etikett kräver det.

| Del | Form och läge | Stil |
|---|---|---|
| Vägg ovanför och under | x 300–470, y 0–30 och y 300–360, skrafferade | blyerts 2, skraffering blyerts-2 1,25 |
| Karm | överstycke x 340–440, y 30–48; understycke x 340–440, y 282–300 | blyerts 2 |
| Båge | x 352–428, y 48–66 och y 262–282 | blyerts 2 |
| Tre glas | lodräta dubbellinjer vid x 366/370, x 388/392 och x 410/414, y 66–262 | blyerts 2 |
| Listerna | små rektanglar mellan glasen i över- och nederkant | blyerts 2 |
| Fönsterbleck ute | från (340, 300) snett ut till (304, 308) | blyerts 2 |
| Himlen | bågar och stjärnor inom x 60–220, y 20–90 | blyerts-2 1,5 |
| Utstrålningen (bara med källa) | två eller tre vågiga pilar från ytterglaset (x 360, y 110–170) mot himlen, spets uppe till vänster | blyerts-2 1,5 |

**Snickarpennan, den enda saken som pekar.** Imman i penna på ytterglasets utsida, x 350–364: täta små droppar över hela glashöjden, tätast i mitten (y 100–230), och en öppen ring runt dem som inte sluter.

## 5. Handskriften

Caveat 500, 24 px. Ledare i blyerts-2 1,25 (penna för etiketten vid imman). Papperslapp bakom etiketter i skraffering. **Högst 50 tecken etikettext.** Orden tas ordagrant ur hantverkarens kommentar; här står vad varje plats ska säga.

| Nr | Säger | Färg | Placering |
|---|---|---|---|
| T1 | att det är ute och en klar natt eller morgon | blyerts-2 | vänster, cirka (110, 150) |
| T2 | att det är inne och att glaset är torrt | blyerts | höger, cirka (500, 120) |
| T3 | imman | penna | vänster om imman, cirka (230, 230), ledare till (352, 200) |
| V1 | U under 1,0 | blyerts på tumstock | höger, cirka (500, 200) |

Tumstock `#e8b830` 65 procent bakom V1, roterad 1 till 2 grader.

## 6. Alt och bildtext

Hantverkaren skriver `alt` (högst 125 tecken, beskriver bilden, innehåller "utsidan") och `bildtext` (med källan) i rapporten. `aria-label` i källfilen = alt.

## 7. Budget och kontroller

Publicerad fil under 28 kB (28 672 byte), källan under 10 kB, ingen `<text>` i den publicerade filen. `npm run illustrationer`, sedan rendering på 343 px och 1200 px. Vid granskningen: syns det på 343 px att imman sitter på utsidan och att insidan är torr, går tre glas att räkna, går alla etiketter att läsa.

## 8. Godkännande

Ej ritad.

## 9. Beslut efter hantverkarens rapport, 2026-09-30

Hantverkarens kommentar står i `src/content/guider/fukt/kondens-pa-fonster.mdx` rad 143–145. Den gäller före avsnitt 1–5 där de säger emot varandra.

- **Utstrålningen ritas.** Källan finns i `faktablad/guider-kondens-pa-fonster-utbyggnad-2026-09-30.md` U1 (SP, "Utstrålningen kan vara så stor att glaset blir avkylt till lägre temperatur än uteluftens"). Två eller tre vågiga pilar i blyerts-2 från ytterglaset upp mot himlen med stjärnor, som i avsnitt 4.
- **Dropparna** på ytterglasets utsida är tätast i nederdelen och glesnar uppåt. Längs kanten, närmast bågen, finns en torr rand på 6–8 enheter utan droppar. Ringen i penna runt dropparna står kvar och är den enda saken som pekar.
- **Inget nyckeltal och ingen gul markering.** Hantverkaren skriver "Inga temperaturer", och U-värdet står inte i hans beskrivning. V1 i avsnitt 5 utgår.
- **Etiketterna** är hantverkarens egna ord ur kommentaren, bildtexten och H2:n. Bara dessa, Caveat 24 px, 41 tecken:

| Nr | Text | Färg | Placering |
|---|---|---|---|
| T1 | ute | blyerts-2 | vänster, under himlen, cirka (110, 150) |
| T2 | inne | blyerts | höger, cirka (500, 110) |
| T3 | imma på utsidan | penna | vänster om dropparna, cirka (200, 240), ledare i penna till (352, 230) |
| T4 | kallare än luften ute | blyerts | vänster, cirka (150, 190), ledare i blyerts-2 till ytterglaset vid (366, 160) |
| T5 | torrt | blyerts | höger om innerglaset, cirka (470, 170), ledare till (416, 170) |

- alt och bildtext är hantverkarens. De står i kommentaren och läggs in av honom.

Godkänd av UX och bygge 2026-09-30. Publicerad fil 19 192 byte, källa 5 808 byte, ingen `<text>`. Rättat vid granskningen: ringen har ett glapp upptill, och utstrålningspilarna börjar utanför ringen. Hantverkaren lägger in bilden med `<Illustration namn="fukt/kondens-utsida" … />`.
