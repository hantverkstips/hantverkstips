# Spec: skiss av takfoten med hängränna, fall och utkastare

UX och bygge, 2026-09-29. Beställd av koordinatorn för `src/content/guider/tak/hangrannor.mdx` (utkast), där kommentaren på rad 70 väntar på `tak/hangranna-takfot`. Checklistan är `docs/briefer/seo-checklista-2026-09-29/tak.md` rad 302 och 338, faktabladet `docs/briefer/faktablad/guider-hangrannor.md` avsnitt 5 och 8. Allt som inte står här gäller som i `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3 (ram, papper, tokens), 5 (handskrift och ledare), 7 (kontroller) och 8 (tillstånd); läs den först. Förebild för huset och takfoten: `src/assets/illustrationer-kallor/tak/snorasskydd-entre.svg`.

## 1. Vad bilden ska säga

Rännan lutar mot stupröret, och vattnet ska ut en bit från huset, inte ner vid sockeln. Läsaren ser vattnets väg från rännan, ner genom stupröret, ut ur utkastaren och bort längs ränndalen. Den vägen är den enda saken som pekar.

Källorna: fallet minst 2,5 mm per meter (Plannja 2026, Lindab, Teknikhandboken; sidan rad 108), självrensande fall 6 mm per meter för 125-rännan (RA Hus 21 tabell 4:4; sidan rad 82), på 10 meter ränna blir det 25 och 60 millimeter (sidans egen räkning, rad 112), utkastare när röret inte går till dagvattenledning (Plannja P26 s. 25), ränndal minst 2 m (Ystad), 2 till 3 m (Umeå). **Nyckeltalet är 2,5 mm per meter**, regeln som Lindabs garanti hänger på. Det får gul markering. Ränndalens längd och krokarnas c 600 står i texten och ritas inte, så att bilden bara har fallet att läsa.

## 2. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/tak/hangranna-takfot.svg` | Ny källa med `<text>` |
| `src/assets/illustrationer/tak/hangranna-takfot.svg` | Skrivs av `npm run illustrationer` |

Rör inga andra filer. Listan över förbjudna filer i fogspecen avsnitt 2 gäller, och dessutom allt under `src/content/`. Inbäddningen gör hantverkaren senare: `<Illustration namn="tak/hangranna-takfot" alt="[ALT]" bildtext="[BILDTEXT]" />`.

## 3. Motivet

Husets långsida rakt framifrån, bara den övre delen av väggen och marken närmast huset. Takets framkant syns som ett band överst. Marken framför huset ritas lätt uppifrån, så att ränndalen kan gå ut från väggen mot läsaren. **Inte skalenligt:** fallet är kraftigt överdrivet i höjdled, annars syns det inte. Inga fönster, ingen dörr, ingen skorsten.

| Del | Koordinater | Stil |
|---|---|---|
| Takytan | band x 48–408, y 36–96, några glesa vågräta pannrader i blyerts-2 1,25 | blyerts 2 för konturen |
| Takfotsbrädan | x 48–408, y 96–110 | blyerts 2 |
| Väggen | vänsterkant utanför bild; väggens högra hörn x 400, från y 110 ner till y 300 | blyerts 2 |
| Rännan | halvrund i profil sedd framifrån: ett band 14 enheter högt vars överkant går från (56,118) till (398,138), med ränngavel vid vänstra änden | blyerts 2 |
| Krokarna | sju band 4 enheter breda från takfotsbrädan ner över rännans framkant, jämnt fördelade från x 70 till x 370 | blyerts 2 |
| Hjälplinjen, vågrätt | streckad från (56,118) till (440,118) | blyerts-2 1,5, streck 6 mellanrum 5 |
| Fallet 6 mm per meter | streckad linje från (56,118) till (398,166), samma streck som hjälplinjen. Den visar var rännans överkant hade legat med det brantare fallet | blyerts-2 1,5 |
| Stupröret | x 380–396, från rännans underkant vid y 152 ner till y 282, med utlopp (kupa) i rännan vid x 388 och två rörsvep som korta tvärband | blyerts 2 |
| Utkastaren | böj från rörets fot, mynning vid (396,300), riktad ut från väggen mot läsaren | blyerts 2 |
| Marken | linje y 300 från x 44 till x 594. Ingen skraffering (marken är sedd uppifrån, inte i snitt) | blyerts 2 |
| Ränndalen | öppen ränna på marken från utkastarens mynning mot läsaren: fyrhörning (388,304) (410,304) (424,356) (384,356), med en mittlinje i blyerts-2 1,25 som botten | blyerts 2 |
| Måttet 10 m | bygel under rännan från x 56 till x 398 vid y 196, text centrerad på papperslapp | blyerts-2 1,5 |
| Måttet 25 mm | lodrät bygel vid x 420 från y 118 till y 138 | blyerts-2 1,5 |
| Måttet 60 mm | lodrät bygel vid x 436 från y 118 till y 166 | blyerts-2 1,5 |

**Snickarpennan, den enda saken som pekar:** vattnets väg. En sammanhängande linje i penna 2,5 px, svagt darrande: inne i rännan längs dess mitt från x 70 till utloppet vid x 388, ner genom stupröret längs dess mittlinje, ut genom utkastaren och längs ränndalens mittlinje, med ett öppet pilhuvud (två ben om 9 enheter) vid (412,350). Inget annat i penna utom marginallinjen.

## 4. Handskriften

Caveat 500, 24 px, inget under. Ledare i blyerts-2 1,25 px. Kolumnen till höger om stupröret (x 444–594) rymmer högst 13 tecken per rad; en etikett som behöver mer delas på två rader.

Texten är hantverkarens. Där sidan redan har ordet står det inom citattecken och radnumret; hantverkaren bekräftar eller byter.

| Nr | Namnger | Ord på sidan | Färg | Placering |
|---|---|---|---|---|
| A1 | rännan | "hängränna" (rad 68) | blyerts | på väggen under rännans vänstra del, cirka (70,160), ledare till rännan vid (110,128) |
| A2 | en krok | "krok" (rad 112) | blyerts-2 | på takytan på papperslapp, cirka (120,72), ledare till andra kroken |
| A3 | stupröret | "stuprör" (rad 68) | blyerts-2 | på väggen till vänster om röret, cirka (290,250), ledare till röret vid (380,250) |
| A4 | utkastaren | "utkastare" (rad 152) | blyerts-2 | höger kolumn, cirka (444,296), ledare till mynningen |
| A5 | ränndalen | "ränndal" (rad 164) | blyerts-2 | höger kolumn, cirka (444,340), ledare till ränndalen |
| A6 | minsta fallet, 2,5 mm per meter, med 25 mm vid bygeln | två rader: "minst 2,5 mm" / "per m = 25 mm" (hantverkaren; talet ur rad 108 och 112) | blyerts på tumstock | höger kolumn vid 25-bygeln, cirka (444,130), en eller två rader |
| A7 | självrensande fall, 6 mm per meter, med 60 mm vid bygeln | två rader: "självrensande" / "6 mm per m" (hantverkaren; talet ur rad 82). 60 mm står i bildtexten, eftersom tre uppgifter inte ryms på två rader om 13 tecken | blyerts-2 | höger kolumn vid 60-bygeln, cirka (444,184), en eller två rader |
| A8 | rännans längd | "10 m" (rad 112 säger "10 meter") | blyerts-2 | vid 10 m-bygeln |

Hantverkaren 2026-09-29: A1–A5 och A8 bekräftas med orden som de står. "per m" är förkortat bara i handskriften, för att raden ska rymmas; bildtexten skriver ut "per meter".

Tumstock `#e8b830` 65 procent bakom A6, roterad 1 till 2 grader. Ingen annan markering. Står A6 och A7 för tätt för 24 px: säg till, krymp inte.

## 5. Alt, aria-label och bildtext

- `[ALT]` (113 tecken): "Hängränna som lutar mot stupröret, där vattnet rinner ut genom utkastaren och bort från huset i en ränndal."
- `aria-label` på roten: `[ALT]` ordagrant.
- `[BILDTEXT]`: "Hängrännan lutar mot stupröret, och vattnet går ut genom utkastaren och bort från huset i en ränndal. Rännan ska luta minst 2,5 mm per meter enligt Plannja, Lindab och Teknikhandboken. En ränna på 125 mm rensar sig själv vid 6 mm per meter enligt RA Hus 21, tabell 4:4. På 10 meter ränna blir det 25 och 60 millimeter mellan högsta och lägsta punkten, som jag har räknat själv. Fallet är kraftigt överdrivet i höjdled."

## 6. Budget

Publicerad fil under 30 kB. Resten som fogspecen avsnitt 7, med `tak/hangranna-takfot` i stället för fogskissen. Vid granskningen på 343 px: syns det att rännan lutar mot röret, och går pennans linje att följa hela vägen till ränndalen?
