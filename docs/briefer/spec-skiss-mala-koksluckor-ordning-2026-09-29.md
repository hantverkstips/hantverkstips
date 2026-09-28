# Spec: skiss av skikten när du målar köksluckor

UX och bygge, 2026-09-29. Beställd av koordinatorn som nummer sex för `src/content/guider/kok/mala-koksluckor.mdx` (utkast), där kommentaren på rad 107 väntar på en skiss. Namnet blir `kok/mala-koksluckor-ordning`. Checklistan är `docs/briefer/seo-checklista-2026-09-29/kok.md` rad 157 och 192, faktabladet `docs/briefer/faktablad/guider-mala-koksluckor.md` avsnitt 4 (rad 67–83). Allt som inte står här gäller som i `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3 (ram, papper, tokens), 4 (darr, hörn), 5 (handskrift och ledare), 7 (kontroller) och 8 (tillstånd); läs den först.

## 1. Vad bilden ska säga

Färgen fäster bara på en yta som är tvättad och slipad matt (sidan rad 75). Ordningen syns som skikt i luckans kant, nerifrån och upp: den gamla ytan, den mattslipade ytan, grunden och två strykningar med en lätt slipning emellan. Den mattslipade ytan är den enda saken som pekar.

Källorna: ordningen tvätta, slipa matt, grunda, spackla, två strykningar (Caparol, Nordsjö, Alcro, Flügger och Hornbach, faktabladet rad 81), korn 240 (Caparols guide, sidan rad 111), två strykningar med lätt slipning emellan (Jotun, sidan rad 115). **Nyckeltalet är korn 240**, eftersom det står vid den yta som pekar. Det får gul markering. Hornbachs korn 180 och 400 är en butiks tal och står bara i texten.

## 2. Beslut: skikt i stället för steg, och inga kanter först

Kommentaren och checklistan (rad 157) ber om en lucka på bockar med ordningen slipa, grunda och måla, kanterna först. Två ändringar:

- **Skikt, inte en rad med steg.** Stegen står redan som numrerad lista direkt under skissen (rad 109–115). En bild som upprepar listan tillför inget. Ett förstorat snitt genom luckans yta visar det listan inte kan: varför grunden ska ligga på en matt yta och inte på den blanka. Luckan på bockarna finns kvar till vänster, så att läsaren ser var snittet är taget.
- **Kanterna först stryks.** Ingen källa i faktabladet säger att kanterna ska målas först. Hornbach säger att insidan tas före utsidan och kanterna med pensel (rad 81), och sidan skriver så på rad 114. En ordning utan källa ritas inte.

## 3. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/kok/mala-koksluckor-ordning.svg` | Ny källa med `<text>` |
| `src/assets/illustrationer/kok/mala-koksluckor-ordning.svg` | Skrivs av `npm run illustrationer` |

Rör inga andra filer. Listan över förbjudna filer i fogspecen avsnitt 2 gäller, och dessutom allt under `src/content/`. Inbäddningen gör hantverkaren senare: `<Illustration namn="kok/mala-koksluckor-ordning" alt="[ALT]" bildtext="[BILDTEXT]" />`. Kommentaren på rad 107 nämner inget namn; hantverkaren använder det här.

## 4. Motivet, koordinater

**Vänster, luckan på bockarna (x 44–230).** Sedd från sidan: luckan som ett liggande band x 56–222, y 170–184, på två bockar (enkla A-formade ben med en överliggare) med benen ner till golvlinjen y 300. Golvlinje från x 44 till x 230. En öppen ring i blyerts-2 1,5 r 18 runt luckans högra ände vid (212,177), och två raka hjälplinjer i blyerts-2 1,25 från ringen till detaljens ram, som på en ritning.

**Höger, detaljen (x 250–594, y 40–320).** En rektangulär ram i blyerts-2 1,25 x 250–594, y 40–320, med förstorat snitt genom luckans yta. Skikten ligger vågrätt och läses nerifrån. **Inte skalenligt:** färgskikten är tunnare än en millimeter i verkligheten.

| Skikt | y | Stil |
|---|---|---|
| Luckans skiva | 236–316 | blyerts 2 för överkanten; inga ådringar, ingen skraffering |
| Den gamla ytan | 222–236, med blank överkant (en rak, jämn linje) mellan x 250 och x 320, där den inte slipats, som en påminnelse om utgångsläget | blyerts 2 |
| Den mattslipade ytan | överkanten av den gamla ytan från x 320 till x 594, ritad som en tät, lätt ojämn linje med små tänder (amplitud 1,5, period 6) | se nedan, penna |
| Grunden | 206–222 från x 320 | blyerts 2, glesa korta vågräta streck i blyerts-2 1,25 inuti |
| Första strykningen | 186–206 från x 340 | blyerts 2, ingen fyllning |
| Lätt slipning | överkanten av första strykningen, som en tunn streckad linje i blyerts-2 1,25 | |
| Andra strykningen | 166–186 från x 360 | blyerts 2, ingen fyllning |

Skikten börjar trappvis längre till höger (x 320, 340, 360) så att varje skikts kant syns och går att sätta en ledare till.

**Snickarpennan, den enda saken som pekar:** den mattslipade ytan, tänderna från x 320 till x 594 i penna 2,5 px. Inget annat i penna utom marginallinjen och M2.

## 5. Handskriften

Caveat 500, 24 px, inget under. Ledare i blyerts-2 1,25 px. Etiketterna står ovanför skikten i detaljen (y 50–150) och under luckan till vänster (y 200–290), aldrig inne i skikten.

Texten är hantverkarens. Ord som redan står på sidan anges.

| Nr | Namnger | Ord på sidan | Färg | Placering |
|---|---|---|---|---|
| M1 | den gamla ytan | "gammal blank yta" (hantverkaren) | blyerts-2 | detaljen nere till vänster, under den blanka delen, ledare till (290,229) |
| M2 | den mattslipade ytan | "mattslipad" (hantverkaren; sidan "slipa ytan matt", rad 111) | penna | detaljen, ovanför skikten, ledare till tänderna vid (330,222) |
| M3 | kornet | "korn 240" (rad 111) | blyerts på tumstock | intill M2, samma höjd eller raden under |
| M4 | grunden | "grundfärg" (hantverkaren; sidan "grunda", rad 112) | blyerts-2 | ovanför, ledare till grunden vid (330,214) |
| M5 | första strykningen | "första strykningen" (hantverkaren) | blyerts-2 | ovanför, ledare till (350,196) |
| M6 | andra strykningen med slipning emellan | "andra, efter lätt slipning" (hantverkaren; sidan rad 115) | blyerts-2 | ovanför, ledare till (370,176) |

Hantverkaren 2026-09-29: etiketterna i detaljen namnger skikt, så alla blir substantiv i stället för sidans uppmaningar. M2 blir "mattslipad", så att den läses ihop med M3 "korn 240". M4 blir "grundfärg". M6 blir "andra, efter lätt slipning", som står direkt ovanför M5 och läses ihop med den.

Etiketterna staplas i detaljens övre del med minst 26 enheters radavstånd, högst från vänster M6, M5, M4, M2 och M3, så att ingen ledare korsar en annan. Tumstock `#e8b830` 65 procent bakom M3, roterad 1 till 2 grader. Ingen annan markering. Står etiketterna för tätt för 24 px: säg till, krymp inte.

## 6. Alt, aria-label och bildtext

- `[ALT]` (108 tecken): "Lucka på bockar och ett förstorat snitt genom kanten, som visar i vilken ordning du ska måla köksluckor."
- `aria-label`: `[ALT]` ordagrant.
- `[BILDTEXT]`: "Luckan ligger på bockar, och ringen visar var snittet genom kanten är taget. Längst ner i snittet ligger den gamla ytan, som slipas matt med korn 240 enligt Caparols guide. Ovanpå kommer grundfärgen och två strykningar med en lätt slipning emellan, som Jotun anger. Hur länge varje skikt ska torka beror på färgen och står i tillverkarens datablad. Skikten är ritade mycket tjockare än de är."

## 7. Budget

Publicerad fil under 28 kB. Resten som fogspecen avsnitt 7, med `kok/mala-koksluckor-ordning`. Vid granskningen på 343 px: syns det att detaljen är luckans kant, går de fem skikten att skilja, och är de röda tänderna det första ögat fastnar på?

## 8. Godkännande

Godkänt 2026-09-29, UX och bygge: M1 står i skivans tomma yta under den blanka delen, som tabellen i avsnitt 5 anger; skivan har varken skraffering eller ådring, så regeln om att inga etiketter står i skikten gäller färgskikten. Ledarna till M2, M4, M5 och M6 går snett genom de skikt som ligger ovanför målet, vilket fogspecen avsnitt 5 tillåter, och ingen korsar en annan.
