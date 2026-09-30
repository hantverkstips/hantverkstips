# Spec: koksaltprovet för hygrometern

UX och bygge, 2026-09-30. Krav i `docs/briefer/seo-checklista-2026-09-30/hygrometer.md` punkt 8, huvudbild för `src/content/kunskap/fukt/hygrometer.mdx` (ny sida, omgång A). Talet står i `docs/briefer/faktablad/fukt-gemensamma-tal.md` avsnitt 2.5.

**Status: specad, ritas inte ännu.** Illustratören börjar när hantverkarens rapport för hygrometersidan finns, med bildAlt, bildtext och en kommentar med etiketterna och måtten. Etiketterna i avsnitt 5 tas då ordagrant därifrån. Illustratören skriver inga egna.

Handen och papperet som i `src/assets/illustrationer-kallor/fukt/tejptest.svg` (ett föremål på ett bord, sett från sidan). Läs `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3, 5, 7 och 8; allt som inte står här gäller som där.

## 1. Vad bilden ska säga

Lägg hygrometern i en sluten burk tillsammans med en skål blött koksalt, vänta tills talet står still, och läs av: en rätt hygrometer visar 75,3 procent vid 25 grader. Det läsaren ska se är att burken är sluten och att hygrometern ligger bredvid saltet, inte i det.

Källa: mättad koksaltlösning ger 75,3 % RF vid 25 °C, Greenspan 1977 via OIML R121 (GT 2.5). GT säger att talet **inte är läst om** 2026-09-30; hantverkarens faktablad för hygrometern ska ha läst det innan bilden ritas. Skiljer sig talet ritas det som faktabladet säger.

**Nyckeltalet är 75,3 %**, ritat på hygrometerns display i handskrift, med gul markering. Ingen annan siffra har markering.

## 2. Beslut

- Burken ses från sidan: en hög rektangel med rundade hörn nedtill, ett lock med två korta streck för gängan. Glasets kant markeras med en kort reflexlinje i blyerts-2. Ingen etikett på burken.
- Skålen står till vänster i burken: en låg halvcirkel med saltet som ett fält av korta prickar och streck, och en tunn vattenlinje över saltet (mättad välling, lite vatten).
- Hygrometern står upp till höger om skålen: en rektangel med rundade hörn och en rektangulär display. Inget märke, inga knappar, ingen fot med detaljer. Den ska vara en hygrometer, inte en viss modell.
- Burken står på en bordsskiva, en lång, lätt böjd linje. Ingen klocka: väntetiden står i en etikett, så att bilden bara har en sak som pekar.

## 3. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/fukt/hygrometer-koksalt.svg` | Ny källa med `<text>` |
| `src/assets/illustrationer/fukt/hygrometer-koksalt.svg` | Skrivs av `npm run illustrationer` |

Frontmatter på sidan: `bild`, `bildAlt`, `bildtext` (huvudbild). Rör inga andra filer.

## 4. Motivet, koordinater (600 × 360)

| Del | Form och läge | Stil |
|---|---|---|
| Bordsskiva | y 318, x 60–540 | blyerts 2 |
| Burken | x 180–420, y 70–318, lock x 172–428, y 50–72 | blyerts 2 |
| Skålen | halvcirkel, x 200–300, y 270–318 | blyerts 2 |
| Saltet | prickar och korta streck i skålen, y 280–312 | blyerts-2 1,25 |
| Vattenlinjen | kort vågig linje över saltet, y 282 | blyerts-2 1,25 |
| Hygrometern | x 320–400, y 170–318, display x 330–390, y 190–240 | blyerts 2 |

**Snickarpennan, den enda saken som pekar.** En öppen ring i penna runt displayen, som inte sluter.

## 5. Handskriften

Caveat 500, 24 px. Ledare i blyerts-2 1,25. **Högst 50 tecken etikettext** utöver displayen. Orden tas ordagrant ur hantverkarens kommentar.

| Nr | Säger | Färg | Placering |
|---|---|---|---|
| V1 | 75,3 % | blyerts på tumstock | i displayen |
| T1 | koksalt med lite vatten | blyerts | vänster om burken, cirka (60, 250), ledare till skålen |
| T2 | locket stängt, och hur länge man väntar | blyerts | ovanför locket eller till vänster, cirka (60, 60) |
| T3 | temperaturen, 25 grader | blyerts-2 | höger om burken, cirka (440, 120) |

Tumstock `#e8b830` 65 procent bakom V1, roterad 1 till 2 grader. Får 75,3 % inte plats i displayen i 24 px görs displayen bredare, inte texten mindre.

## 6. Alt och bildtext

Hantverkaren skriver `bildAlt` (högst 125 tecken, innehåller "hygrometer" och "koksalt") och `bildtext` (med källan och temperaturen) i rapporten. `aria-label` i källfilen = bildAlt.

## 7. Budget och kontroller

Publicerad fil under 28 kB (28 672 byte), källan under 10 kB, ingen `<text>` i den publicerade filen. Rendering på 343 px och 1200 px. Vid granskningen: syns det på 343 px att burken är sluten, att hygrometern står bredvid saltet, och går 75,3 % att läsa.

## 8. Godkännande

Ej ritad.

## 9. Hantverkarens rapport, 2026-09-30

Står i kommentaren vid `bild:` i `src/content/kunskap/fukt/hygrometer.mdx`. Gäller före avsnitt 5. Källan är Greenspan 1977, 75,29 ± 0,12 vid 25 °C, ur faktabladet `kunskap-hygrometer.md` 2.2. Etiketterna, ordagrant, Caveat 24 px, 41 tecken:

| Nr | Text | Färg | Placering |
|---|---|---|---|
| V1 | 75,3 % | blyerts på tumstock | i displayen |
| T1 | blött koksalt | blyerts | vid skålen, vänster om burken, ledare till saltet |
| T2 | locket på, ett dygn | blyerts | vid locket, ovanför eller till vänster |
| T3 | 25 grader | blyerts-2 | till höger om burken |

`aria-label` = bildAlt ordagrant: "En hygrometer i en sluten glasburk bredvid en skål med blött koksalt, och displayen visar 75,3 procent."

Godkänd av UX och bygge 2026-09-30. Publicerad fil 16 506 byte, källa 3 791 byte, ingen `<text>`. Godkända avvikelser: displayen och hygrometern är bredare, så att 75,3 % ryms i 24 px, och ringen går utanför hygrometerns kanter.
