# Spec: snittskiss av toalettstolens fot, limmad och skruvad

UX och bygge, 2026-09-29. Beställd av koordinatorn för `src/content/kunskap/badrum/byta-toalettstol.mdx` (utkast), där kommentaren på rad 113 väntar på `badrum/toalettstol-fot`. Checklistan är `docs/briefer/seo-checklista-2026-09-29/badrum.md` rad 452 och 469, faktabladet `docs/briefer/faktablad/guider-byta-toalettstol.md` avsnitt VIKTIGT 1–3, A (4.7–4.7.3), B och L. Skiktens form och tjocklek är desamma som i fogskissen, så att de två badrumsbilderna ser ut som samma hand: läs `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` i sin helhet och använd `src/assets/illustrationer-kallor/badrum/fogar-badrum-snitt.svg` som förebild. Allt som inte står här gäller som där.

## 1. Vad bilden ska säga

Tätskiktet i golvet ska vara helt när stolen sitter. Till vänster en limmad fot, där tätskiktet går obrutet under stolen. Till höger en skruvad fot, där hålet går genom tätskiktet och tätningsmassa fyller hålet i tätskiktets nivå. Tätskiktet är den enda saken som pekar, i båda halvorna, på samma sätt som zongränsen i zonskissen står på två väggar.

Källorna: limning med våtrumssilikon är branschens förstahandsval (GVK frågor och svar; BBV 26:1 § 9; Säker Vatten 4.7.3), silikonsträng under foten (Ifö 2017, Gustavsberg, sträng Ø 5 mm), hålet tätas i tätskiktsnivån med massa före plugg och skruv (BBV 26:1 § 9, GVK § 10.2), skruven i betong eller massivt (Säker Vatten 4.7.2), "Golvet under WC-stol ... ska tillåta ett borr- och skruvdjup på 60 mm" (Säker Vatten 4.7.2, GVK § 10.5.1 figur 69 "Min 60 mm"). **Nyckeltalet är 60 mm, och det är ett krav på golvet, inte på skruven** (faktabladet VIKTIGT 1). Det får gul markering en gång, med ledare till båda halvornas byglar.

## 2. Beslut: måttets nollpunkt

Säker Vatten 4.7.2 säger inte varifrån 60 mm räknas, och faktabladet kunde inte se förlagornas bilder (bild 4.7.2a, B4.7.2a, GVK figur 69, BBV figur 29 och 30). Jag räknar från golvets yta, klinkerns ovansida, eftersom ett borrdjup räknas från ytan man borrar i. Bygeln ritas så. Ser utvecklaren en förlaga som räknar från en annan nivå: stanna och rapportera, rita inte om.

## 3. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/badrum/toalettstol-fot.svg` | Ny källa med `<text>` |
| `src/assets/illustrationer/badrum/toalettstol-fot.svg` | Skrivs av `npm run illustrationer` |

Rör inga andra filer. Listan över förbjudna filer i fogspecen avsnitt 2 gäller, och dessutom allt under `src/content/`. Inbäddningen gör hantverkaren senare: `<Illustration namn="badrum/toalettstol-fot" alt="[ALT]" bildtext="[BILDTEXT]" />`.

## 4. Motivet, koordinater

Två snitt genom stolens fot och golvet, sett från sidan, vänster halva x 44–312, höger halva x 328–594. En lodrät streckad linje i blyerts-2 1,25 vid x 320 från y 16 till y 296 delar halvorna; under y 296 går betongen igenom under båda. **Inte skalenligt:** skikten är förstorade som i fogskissen.

Golvet, samma i båda halvorna och i hela bredden:

| Skikt | y | Stil |
|---|---|---|
| Klinker | 206–226, med en cementfog (glipa 10 enheter med tre tvärstreck, som i fogskissen) vid x 70 och x 560 | blyerts 2 |
| Fästmassa | 226–242, glesa prickar som i fogskissen | prickar blyerts-2 |
| Tätskikt | 242–250, två linjer | **penna 2,5**, ingen fyllning |
| Betong | 250–360, skraffering som i fogskissen, en `<path>` per rad | kontur blyerts 2 bara på ovansidan; skraffering blyerts-2 1,25 |

Stolens fot i båda halvorna: porslinsgodset i snitt, en vägg 14 enheter tjock som går upp från golvet och vidgar sig utåt mot skålen, med en fläns utåt nederst. Stolen fortsätter uppåt ut ur bilden; avsluta godset med en kort brytlinje i blyerts-2 vid y 40. Porslin skrafferas inte. Vänster fot: godset x 150–164 och x 250–264 (två väggar, stolen är ihålig), flänsar ut till x 120 och x 294 vid y 190–204. Höger fot: samma form förskjuten 284 enheter åt höger.

| Del | Vänster, limmad | Höger, skruvad |
|---|---|---|
| Mellan fläns och klinker | silikonsträngar: ett avlångt tvärsnitt 16 × 6 under varje fläns, vid x 124–140 och x 276–292, och foten vilar 2 enheter ovanför klinkern | foten står på klinkern med en silikonsträng under den högra flänsen vid x 560–576 som till vänster; under den vänstra flänsen, där skruven sitter, ingen sträng |
| Hålet | inget. Tätskiktet går obrutet under hela foten | ett hål genom yttre flänsen, klinkern, fästmassan och tätskiktet ner i betongen, centrum x 420, bredd 10, från y 190 till y 300 |
| Plugg och skruv | inga | plugg i betongen y 254–300, bredd 12, med tvärräfflor i blyerts-2; skruv med huvud ovanpå flänsen vid y 184–190 och gängad stång ner till y 296 |
| Tätningsmassa | ingen | fyller hålet runt skruven från hålets botten upp till y 236, tätt prickad (hälften av fästmassans avstånd) i blyerts, så att den läses som något annat än fästmassan. Tätskiktets pennlinjer slutar mot massan på båda sidor om hålet |
| Måttbygel 60 mm | lodrät vid x 304 från y 206 (klinkerns ovansida) ner till y 296, med vågrät hjälplinje från klinkerns yta | lodrät vid x 344 från y 206 till y 296, likadan |

Byglarna i blyerts-2 1,5 och utan tal vid sig: talet står en gång i V1. Byglarna går genom skrafferingen; skrafferingen gör uppehåll 4 enheter runt dem.

## 5. Handskriften

Caveat 500, 24 px, inget under. Ledare i blyerts-2 1,25 px. Papperslapp bakom varje etikett i skrafferingen. Ytan ovanför golvet på var sida om foten (x 44–116 och x 298–312 till vänster, x 328–398 och x 566–594 till höger) och luften ovanför, y 16–180, bär etiketterna.

Texten är hantverkarens. Kommentaren på rad 113 och sidan har orden; koordinatorn skriver att etiketter, alt och bildtext finns i hantverkarens rapport, men den rapporten finns inte i `docs/briefer/` och kommentaren har bara beskrivningen. Tills rapporten kommer gäller platserna nedan.

| Nr | Namnger | Ord i kommentaren eller på sidan | Färg | Placering |
|---|---|---|---|---|
| T1 | vänster halva | "limmad" (kommentaren rad 113) | blyerts | överst i vänster halva, cirka (60,40) |
| T2 | höger halva | "skruvad" (kommentaren rad 113) | blyerts | överst i höger halva, cirka (344,40) |
| T3 | silikonen | "silikonsträng" (kommentaren) eller "silikon" (rad 79) | blyerts-2 | vänster halva, luften vänster om foten, ledare till strängen vid (132,203) |
| T4 | tätskiktet | "helt tätskikt" (hantverkaren) | penna | vänster halva, luften vänster om foten, ledare till tätskiktet vid (90,246) |
| T5 | klinkern | "klinker" (kommentaren) | blyerts-2 | vänster halva, ledare till klinkern vid (100,216) |
| T6 | tätningsmassan | "tätningsmassa" (rad 106) | blyerts-2 | höger halva, luften vänster om foten, ledare till massan vid (420,238) |
| T7 | plugg och skruv | "plugg och skruv" (kommentaren) | blyerts-2 | höger halva, luften höger om foten, ledare till skruven |
| V1 | golvets krav, 60 mm | två rader: "golvet ska" / "tillåta 60 mm" (hantverkaren; sidan rad 107 citerar 4.7.2) | blyerts på tumstock | i betongen på papperslapp, centrerad kring x 320, två rader med baslinjer y 324 och 348, ledare till byglarnas nedre ändar (304,296) och (344,296) |

Hantverkaren 2026-09-29: T1 "limmad", T2 "skruvad", T3 "silikonsträng", T5 "klinker", T6 "tätningsmassa" och T7 "plugg och skruv" bekräftas. T6 får inte tillägget "i hålet", eftersom luften till vänster om den högra foten bara är 70 enheter bred. Betongen och stolens fot får ingen etikett.

Tumstock `#e8b830` 65 procent bakom V1, roterad 1 till 2 grader. Ingen annan markering. Betong och fästmassa får ingen etikett om det blir trångt; de känns igen på skrafferingen och prickarna. Står etiketterna ändå för tätt för 24 px: säg till, krymp inte.

## 6. Alt, aria-label och bildtext

- `[ALT]` (123 tecken): "Snitt genom foten på en toalettstol som är limmad med silikon och en som är skruvad, med tätskiktet i golvet under dem."
- `aria-label`: `[ALT]` ordagrant.
- `[BILDTEXT]`: "Till vänster är stolen limmad med våtrumssilikon, och tätskiktet går helt under foten. Till höger är hålet genom klinkern och tätskiktet fyllt med tätningsmassa innan pluggen och skruven sattes i. Golvet under stolen ska tillåta att man borrar och skruvar 60 mm ner. Det är ett krav på golvet och säger inget om hur lång skruven ska vara. Säker Vatten skriver inte varifrån måttet räknas, så i skissen räknar jag från klinkerns yta. Skikten är förstorade. Källa: Säker Vatten 2026:1 punkt 4.7, 4.7.2 och 4.7.3, GVK Säkra Våtrum 2026 § 10.2 och BBV 26:1 § 9."

## 7. Budget

Publicerad fil under 34 kB (två halvor och skraffering i hela bredden). Resten som fogspecen avsnitt 7, med `badrum/toalettstol-fot`. Vid granskningen på 343 px: syns det att tätskiktet är helt till vänster och tätat runt hålet till höger, skiljer sig tätningsmassan från fästmassan, och läses V1 som ett krav på golvet?
