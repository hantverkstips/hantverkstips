# Retur från SEO och GEO, /rakna/u-varde/, 2026-09-24

Godkännande punkt 5 i `nytt-verktyg`. Jag har läst `src/pages/rakna/u-varde.astro`, rendrad text i `src/lib/kalkyl/u-varde.ts`, registerraden i `src/lib/kalkyl/register.ts`, inbäddningen i `/el/u-varde/` och verktygskortet i `/el/tillaggsisolera-vind/`. Frasen är "beräkna u värde" (110 i månaden), och artikeln äger "u värde". `npm run kontrollera` ger 0 fel.

**Två punkter.** Den ena gäller räknaren och den andra artikeln, eftersom räknaren tar över en fras från den.

| Kontroll | Utfall |
|---|---|
| Title | Inget att ändra. "Beräkna U-värde och vad mer isolering sparar" är 44 tecken, så suffixet " · Hantverkstips" kommer med. Frasen står först och obruten. |
| Description (`BESKRIVNING`) | Inget att ändra. 152 tecken, med "Beräkna U-värdet", Boverkets tal och besparingen per år. |
| H1 | **Punkt 1**, se nedan. |
| `WebApplication` via `verktyg()` | Inget att ändra. `name` är `VERKTYGSNAMN` ("U-värdesräknare"), som syns i brödsmulan. `description` är samma sträng som meta-beskrivningen, `url` är `/rakna/u-varde/`, och priset 0 SEK stämmer. Allt i markupen syns på sidan. |
| Faq mot artikelns Faq | Inget att ändra. Räknarens fyra frågor är tegelfasaden, golvet över krypgrunden, tillverkarens tabell och värmepumpen. Artikelns fem är bra U-värde på fönster, U-värde mot lambdavärde, U-medel, gamla hus och reglarna. Ingen fråga dubbleras, och varje sida har en `FAQPage` med sina egna frågor. |
| Kortsvaret | Inget att ändra. 0,357 för sjuttiotalsväggen är samma tal som i artikelns räkneexempel (rad 176) och i artikelns bildtext, och Boverkets tal stämmer med artikeln. Det går att citera fristående. |
| Länkar ut (Läs vidare) | Inget att ändra. Artikeln, vindguiden, elkostnadsräknaren och daggpunktsräknaren, med ankare som säger vart länken leder. Elkostnadsräknaren nås också från resultatspalten. |
| Länkar in | Inget att ändra. `<Kalkylator namn="u-varde" />` står i `/el/u-varde/` rad 182, direkt efter räkneexemplet som checklistan krävde. `<Verktygskort kalkylator="u-varde" />` står i vindguiden rad 79, och sidan har bara ett verktygskort. Registret lägger in räknaren på `/rakna/`, och `pelare: ['el']` lägger den i hubbens grupp Räkna när huben publiceras. |
| Kannibalisering mot vindguiden | Inget att ändra. Räknarens title och H1 börjar med "Beräkna", vindguidens med "Tilläggsisolera". Räknaren räknar på vinden men gör inte anspråk på vindguidens fraser. |
| Kannibalisering mot `/el/u-varde/` | **Punkt 2**, se nedan. |
| Internt arbete i publik text | Inget att ändra. Hänvisningarna till spec och underlag står bara i kodkommentarer. Ingen rendrad sträng i sidan eller i `TEXT` nämner spec, underlag, brief eller agenter. |
| Skissen | Inget att ändra. Alt-texten är 99 tecken och talen står i bildtexten. |

**Punkt 1. H1:n är nästan samma som title** (`src/pages/rakna/u-varde.astro` rad 61). Title är "Beräkna U-värde och vad mer isolering sparar" och H1 "Beräkna U-värdet och se vad mer isolering sparar per år". De delar de tre första orden och nästan hela löftet. Då går två chanser att matcha läsarens ord till spillo, och sajtens andra räknare skiljer dem åt. Daggpunktsräknaren har title "Daggpunkt, räkna ut om väggen blir våt" och H1 "Blir väggen våt? Räkna ut daggpunkten".

Title ska stå kvar som den är. H1 ska få en annan ingång, helst läsarens egen fråga: om väggen, vinden eller golvet når Boverkets tal, eller om det lönar sig att lägga på mer. "U-värde" ska gärna finnas kvar någonstans i H1. Formuleringen är hantverkarens.

**Punkt 2. Artikelns seoTitle konkurrerar nu med räknaren** (`src/content/kunskap/el/u-varde.mdx` rad 3). Artikelns seoTitle lyder "U-värdet, så räknar du ut det själv". Före räknaren var det rätt, eftersom artikeln ägde "beräkna u värde" tills vidare (checklistan avsnitt 1). Nu är räknaren publicerad och frasen har gått över till den, och det står i registret (`docs/SOKORDSANALYS.md` 7.4). En title som lovar att läsaren räknar ut talet drar mot samma sökning som "Beräkna U-värde". Då riskerar Google att växla mellan de två sidorna på den frasen i stället för att låta artikeln ta "u värde" (590) och räknaren "beräkna u värde" (110).

Kravet är högst 44 tecken, med "U-värde" först, och ett löfte om vad talet betyder och vad huset ska ha. Använd Boverkets krav, vad som är bra för tak, vägg och fönster, eller vad en sänkning är värd. Inte "räkna ut", "beräkna" eller "så räknar du". Frasen "u värde" söks i obestämd form, så "U-värde" är bättre än "U-värdet" som första ord.

H2:n "Räkna ut U-värdet skikt för skikt" och räkneexemplet ska stå kvar. Artikeln får förklara räkningen, men den ska inte lova den i title.

---

**Uppdaterat i registret:** `docs/SOKORDSANALYS.md` avsnitt 7.4, rad 9, står nu som byggd 2026-09-24, med ägarskapet för de tre fraserna och var räknaren är inbäddad. `docs/VERKTYGSPLAN.md` rad 9 står som byggd.

När punkt 1 och 2 är rättade läser jag de två raderna igen och skriver godkännandet här.

---

## Omläsning 2026-09-24

- **Punkt 1 är rättad.** H1 lyder "Klarar vinden eller väggen Boverkets krav på U-värde?" (`src/pages/rakna/u-varde.astro` rad 63). Den börjar med läsarens fråga, har U-värde kvar och delar inte ett enda av de tre första orden med title, som står kvar oförändrad.
- **Punkt 2 är rättad.** Artikelns seoTitle lyder "U-värde, vad som är bra och vad som krävs" och är 41 tecken (`src/content/kunskap/el/u-varde.mdx` rad 3). "U-värde" står först, och löftet handlar om bra värden och krav, inte om att räkna. Den delar inte de tre första orden med räknaren eller vindguiden.
- **Kortraden i registret är ny och stämmer med det sidan gör.** Den lovar millimetrarna som fattas och kronorna per år, och räknaren lägger på tio millimeter i taget tills gränsen nås (steg på rad 91) och visar besparingen i kronor.
- `npm run kontrollera` ger 0 fel.

Godkänd av SEO och GEO.
