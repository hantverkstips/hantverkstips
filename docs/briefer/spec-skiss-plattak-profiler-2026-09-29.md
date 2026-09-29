# Spec: huvudbild med de fyra plåttaken och deras minsta lutning

UX och bygge, 2026-09-29. Beställd av koordinatorn för `src/content/kunskap/tak/plattak.mdx` (publicerad), som saknar huvudbild. Beslutet och skälet står i `docs/briefer/huvudbilder-2026-09-29.md`. Sidans egen skiss `tak/plattak-snitt` stannar i avsnittet om läkten (rad 173); den svarar på hur taket byggs, inte på rubrikens fråga, och väger 39,7 kB, för mycket för en bild som laddas med hög prioritet. Allt som inte står här gäller som i `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3 (ram, papper, tokens), 4 (darr, hörn), 5 (handskrift och ledare), 7 (kontroller) och 8 (tillstånd); läs den först.

## 1. Vad bilden ska säga

Rubriken frågar vilken sorts plåt som passar ditt tak. Sidan svarar med fyra plåttak som ser olika ut (rad 70) och har olika gräns för hur flackt taket får vara (rad 74–78, tabellen rad 84–87). Bilden visar de fyra profilerna sedda från gaveln, var och en med sin minsta lutning, så att läsaren ser skillnaden i form och vet att lutningen är det första hen ska ta reda på.

**Snickarpennan, den enda saken som pekar:** takpanneplåten, som Christian väljer för den som har pannor i dag och minst 14 grader (rad 80). **Nyckeltalet är 14°**, med gul markering. Inga priser i bilden; de står i kortsvaret och tabellen.

Källorna är sidans: minsta lutning 5,7° trapetsplåt, 14° takpanneplåt, 8° klickfals (Plannja och Lindab, rad 76 och tabellen rad 84–86). Bandtäckningen har ingen minsta lutning i tabellen (tom cell rad 87) och får ingen i bilden.

## 2. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/tak/plattak-profiler.svg` | Ny källa med `<text>` |
| `src/assets/illustrationer/tak/plattak-profiler.svg` | Skrivs av `npm run illustrationer` |

Rör inga andra filer, och ingenting under `src/content/`. Frontmattern sätter koordinatorn eller hantverkaren när bilden är godkänd: `bild: ../../../assets/illustrationer/tak/plattak-profiler.svg`, `bildAlt: "[ALT]"`, `bildtext: "[BILDTEXT]"`.

## 3. Motivet, koordinater

600 × 360, fyra rutor i två rader. Rutorna ritas inte som ramar; de är bara ytor. Varje ruta har tre delar uppifrån: profilen, lutningstecknet, etiketterna.

| Ruta | Yta (x, y) | Plåt |
|---|---|---|
| 1 | 48–312, 16–176 | trapetsplåt |
| 2 | 324–588, 16–176 | takpanneplåt |
| 3 | 48–312, 188–348 | klickfals |
| 4 | 324–588, 188–348 | falsad bandtäckning |

**Profilen**, sedd från gaveln, som en tunn plåt: en enda blyertslinje 2 px, cirka 200 enheter bred, centrerad i rutan med underkant cirka 60 enheter under rutans överkant. Under profilen en tunn rad läkt eller underlag som ett band 6 enheter högt i blyerts-2 1,5, så att plåten ser ut att ligga på något. Profilerna ska gå att skilja vid 343 px; det är hela bilden.

| Plåt | Form |
|---|---|
| Trapetsplåt | kantiga vågor: fem trapetsformade toppar, raka sidor, platta toppar och dalar, topphöjd cirka 22 enheter |
| Takpanneplåt | rundade vågor som pannor: fem mjuka bågar, topphöjd cirka 18 enheter. Ingen kant, inga raka sidor |
| Klickfals | slät yta med tre upphöjda skarvar, varje skarv en smal rundad uppstående kant cirka 16 enheter hög |
| Falsad bandtäckning | slät yta med tre upphöjda skarvar, varje skarv en smal uppstående kant med en vikning överst (liten krok åt sidan), cirka 18 enheter hög. Ska skilja sig från klickfalsen på kroken |

**Lutningstecknet**, under profilen, i rutorna 1–3: en vågrät linje 70 enheter och en lutande linje från samma vänstra punkt i plåtens minsta lutning, med en liten båge mellan dem. Vinkeln ritas i verklig grad (5,7°, 14°, 8°), så att skillnaden syns. Blyerts-2 1,5. Ruta 4 har inget lutningstecken.

**Snickarpennan:** en ring i penna 2,5 px, handritad och inte sluten (öppning uppe till höger), runt takpanneplåtens profil i ruta 2. Inget annat i penna utom marginallinjen.

**Markeringen:** tumstock bakom etiketten för 14° i ruta 2, och bara där.

## 4. Handskriften

Caveat 500, 24 px. Namnet står till vänster under lutningstecknet, lutningen till höger om tecknet. Texten är hantverkarens; sidans ord anges med rad.

| Nr | Namnger | Ord på sidan | Färg | Placering |
|---|---|---|---|---|
| [A1] | trapetsplåten | "trapetsplåt" (rad 76) | blyerts | ruta 1, under profilen |
| [A2] | dess minsta lutning | "5,7°" (tabellen rad 84) | blyerts-2 | ruta 1, vid lutningstecknet |
| [A3] | takpanneplåten | "takpanneplåt" (rad 76) | blyerts | ruta 2, under profilen |
| [A4] | dess minsta lutning | "14°" (tabellen rad 85) | blyerts på tumstock | ruta 2, vid lutningstecknet |
| [A5] | klickfalsen | "klickfals" (rad 76) | blyerts | ruta 3, under profilen |
| [A6] | dess minsta lutning | "8°" (tabellen rad 86) | blyerts-2 | ruta 3, vid lutningstecknet |
| [A7] | bandtäckningen | "falsad bandtäckning" eller "bandtäckning" (rad 78) | blyerts | ruta 4, under profilen |
| [A8] | att bandtäckningen läggs av plåtslagare, om hantverkaren vill ha en rad där lutningen annars står | (hantverkaren) | blyerts-2 | ruta 4, där lutningen står i de andra |
| [A9] | att lutningen är minsta tillåtna, en gång för hela bilden, om hantverkaren vill | (hantverkaren) | blyerts-2 | ovanför ruta 1 eller i marginalen |

Åtta etiketter är taket. Blir det trångt stryks [A9] först, sedan [A8]; säg till, krymp inte.

## 5. Alt, aria-label och bildtext

- `[ALT]`: hantverkarens, högst 125 tecken, säger vad bilden visar (fyra plåtprofiler från gaveln med minsta lutning).
- `aria-label` på roten: `[ALT]` ordagrant.
- `[BILDTEXT]`: hantverkarens. Källraden (Plannjas och Lindabs monteringsanvisningar, som tabellen) och att profilerna inte är skalenliga hör hemma här.

## 6. Budget

Publicerad fil **under 28 kB**: den blir huvudbild och laddas med `fetchpriority="high"` ovanför vecket. Resten som fogspecen avsnitt 7, med `tak/plattak-profiler`. Vid granskningen på 343 px: går de fyra profilerna att skilja, framför allt klickfals mot bandtäckning, syns skillnaden mellan 5,7° och 8°, och är det bara ringen som är röd?

## 7. Hantverkarens text, ifylld 2026-09-29

| Nr | Text |
|---|---|
| [A1] | trapetsplåt |
| [A2] | 5,7° |
| [A3] | takpanneplåt |
| [A4] | 14° |
| [A5] | klickfals |
| [A6] | 8° |
| [A7] | falsad bandtäckning |
| [A8] | läggs av plåtslagare |
| [A9] | minsta lutning |

Blir [A7] för bred i rutan står bara "bandtäckning".

- `[ALT]`: Fyra plåttak sedda från gaveln, med minsta lutning för trapetsplåt, takpanneplåt, klickfals och falsad bandtäckning.
- `[BILDTEXT]`: De fyra plåtarna sedda från gaveln. Profilerna är inte skalenliga, men vinklarna är ritade med rätt gradtal. Trapetsplåt klarar tak ned till 5,7 grader, klickfals ned till 8 och takpanneplåt ned till 14, enligt Plannjas och Lindabs monteringsanvisningar. Den falsade bandtäckningen läggs av en plåtslagare.
