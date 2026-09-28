# Faktablad: rakna/takavvattning

Ny räknare. `/rakna/takavvattning/` · `src/pages/rakna/takavvattning.astro` · kalkylator, `pelare: ['tak']`, `sasong` april till september, ingen produkt och inget reklamband. Huvudfras **takavvattning dimensionering** (40/mån), hängrännor dimensioner (10). Checklista: `docs/briefer/seo-checklista-2026-09-29/raknare.md`, avsnittet /rakna/takavvattning/.

**Formler, konstanter, tabeller, gränser, räkneexempel och antaganden står i räknarunderlaget:** `docs/briefer/underlag-kalkyl-takavvattning-2026-09-28.md` (det namn checklistan och skillen `nytt-verktyg` anger). Det här bladet har bara det sidan behöver utöver det. Källbeteckningar och adresser: `docs/briefer/faktablad/guider-hangrannor.md`.

Hämtat 2026-09-28.

---

## 1. Kortsvaret (checklistan punkt 6.0): 75, 125 och 200 m²

Egen avläsning ur RA Hus 21 (Teknikhandboken T1, T2, sidorna ändrade 2021-11-11 och 2020-11-19) och Plannja 2026-2 (januari 2026), ett stuprör som tar hela takfallet:

| Takfallets area | Ränna | Stuprör (RA Hus / Plannja 2026) | Stuprör (SS 824031, ensidigt) |
|---|---|---|---|
| 75 m² | 100 mm | 75 mm | 75 mm |
| 125 m² | 125 mm | 90 mm | 75 mm |
| 200 m² | 150 mm | 110 mm | 90 mm |

- Fall: minst 2,5 mm/m, självrensande 5–7 mm/m (Plannja 2026, Lindab), per dimension 7/6/5 mm/m (T1).
- Högsta rännlängd per stuprör: 10 m (Lindab 2022, Plannja 2026). Högst 20 m mellan stuprör (AMA Hus via T3).
- Året på varje källa ska synas (checklistan Bättre än ettan 4).

## 2. Tabellen bakom (checklistan punkt 6.1)

- Nyare tabell finns: RA Hus 21 via Teknikhandboken och Plannja 2026. Plannja 2010 (RA 08 Hus) står som äldre jämförelse, ordagrant i faktabladet för hängrännor 1D.
- Plannja 2010 och RA 08 Hus ger samma tal för ränna 100–150 som RA Hus 21. Skillnaden: 2010 har R125 rektangulär till 275 m², 2021/2026 har 190-ränna till 250 m².
- Stuprör: samma tal i RA 08 Hus (2010), RA Hus (T2) och Plannja 2026.
- SS 824031 ger ungefär dubbelt så stor area per stuprör. T3: RA-tabellen för stuprör är "dimensionerad i överkant", och smala rör fryser lättare.

## 3. Sökanalys (checklistan punkt 11)

- **husbyggaren.se** (ettan enligt checklistan): sidan `https://www.husbyggaren.se/dimensionering-av-takavvattning/` **inte läst**, bara sökutdrag (0,013 l/s·m², lutning under 45°, 10 minuter, en gång på 5 år, RA Hus 21, SS 82 40 31). Enligt checklistan: referenserna, inga tabeller, ingen räknare.
- **Lindab Rainline Selection Tool**: inte testat (checklistan). Får inte länkas eller nämnas i publik text (Fällor).
- **Plannja PDF 2010**: läst, se faktabladet för hängrännor 1D. Ingen räknare, diagrammen kräver att läsaren kan läsa av linjer.
- **takavvattning.nu** (BMI Group): räknare för **invändig** avvattning med takbrunnar, inte för hängrännor. Konkurrerar inte om villans fråga.
- **Plastmo** (plastmo.se/tekniska-fakta/hangrannor): kapacitetstabell som bild, inte läsbar via WebFetch.

Det vår räknare har som ingen av dem har: dimension direkt ur takarean utan PDF; antal stuprör ur rännlängden; fallet i mm per meter och i mm totalt; RA Hus och SS sida vid sida med år.

## 4. Interna länkar

- `/tak/hangrannor/` (värdartikel, "Läs vidare"): finns inte ännu, samma omgång.
- `/rakna/takbyte/` (takarean): finns inte ännu. Takarean delas med `src/lib/kalkyl/tak.ts`, som inte finns 2026-09-28. Se underlaget 2.1 om verklig mot projicerad area.
- Dräneringssidorna: ingen länk krävs. Krocken med `/grund/dranera-hus/` om utkastare gäller hängrännesidan, inte räknaren (faktabladet för hängrännor avsnitt 8).

## 5. Osäkert

- Husbyggarens sida inte läst.
- Standardernas originaltext inte läst (SS 82 40 31, SS-EN 12056-3, RA Hus 21).
- Om räknaren ska ta arean längs lutningen eller projicerad: UX-beslut, underlaget 2.1.
