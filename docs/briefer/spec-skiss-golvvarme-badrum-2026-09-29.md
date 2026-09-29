# Spec: snittskiss av badrumsgolvet med golvvärme

UX och bygge, 2026-09-29. Beställd av koordinatorn som huvudbild för `src/content/kunskap/badrum/golvvarme-badrum.mdx` (utkast). Checklistan är `docs/briefer/seo-checklista-2026-09-29/badrum-4.md` rad 169, faktabladet `docs/briefer/faktablad/kunskap-golvvarme-badrum.md` avsnitt 1a, 1b, 1d och 3 (GVK § 5.3 och figur 7). Hantverkarens förslag (koordinatorns beställning 2026-09-29): genomskärning av golvet med betong, värmekabel i avjämningsmassa med golvgivaren, tätskikt, fix och klinker; pennan pekar på tätskiktet ovanför värmen; 27 grader markeras på ytan.

Handen, papperet, skrafferingen, klinkern, fästmassans prickar och ledarna är desamma som i `src/assets/illustrationer-kallor/badrum/toalettstol-fot.svg` och `fogar-badrum-snitt.svg`. Läs `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3, 5, 7 och 8 och `docs/briefer/spec-skiss-toalettstol-fot-2026-09-29.md` i sin helhet; allt som inte står här gäller som där.

## 1. Vad bilden ska säga

Värmen ligger under tätskiktet. En läsare ser på en sekund skikten uppifrån och ner, klinker, fästmassa, tätskikt, avjämningsmassa med kabeln och givaren, betong, och att tätskiktet i penna ligger ovanför värmen. Det är den enda saken som pekar.

Källorna: "Golvvärmesystemet ska placeras under tätskiktet" och figur 7 "Avjämningsmassa och golvvärme ska placeras under tätskikt" (GVK Säkra Våtrum 2026 § 5.3); "I våtrum skall värmekabeln förläggas under tätskikt" (Ebeco, manualen s. 4); "Golvytans temperatur får inte överstiga 27 °C" (GVK § 5.3); golvgivaren (DEVI Installation Guide s. 10, Ebeco produktblad). **Nyckeltalet är 27 grader, ett tak på golvets yta.** Det får gul markering en gång.

## 2. Beslut

- **Isoleringen ritas inte.** Faktabladet har ingen källa för var isoleringen ligger i ett badrumsgolv eller hur tjock den är, bara att den behövs (Energimyndigheten, Ebeco om platta på mark). Ett skikt utan källa i en regelbild blir läst som en regel. Hantverkaren kan ta det i brödtexten, där det redan står.
- **Inget mått på massan över kabeln.** Ebeco anger 5 mm spackel för klinker och DEVI minst 5 mm, men en andra bygel kostar etiketter som budgeten inte har. Bildtexten nämner det inte heller.
- **Kabel, inte matta.** Snittet visar en kabel i tvärsnitt. Bildtexten säger att en matta ligger på samma ställe.
- Givarens läge mellan två kabelvarv är ritat, inte hämtat ur en källa; bildtexten säger bara att givaren ligger i golvet.

## 3. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/badrum/golvvarme-snitt.svg` | Ny källa med `<text>` |
| `src/assets/illustrationer/badrum/golvvarme-snitt.svg` | Skrivs av `npm run illustrationer` |

Rör inga andra filer, inte heller sidan; frontmatter läggs in av UX och bygge efter godkännandet.

## 4. Motivet, koordinater

Snitt genom golvet sett från sidan, i hela bredden. Rummet ovanför, golvet nedtill. **Inte skalenligt:** skikten är förstorade. Flytta högst 8 enheter om en etikett kräver det, behåll ordningen.

| Skikt | y | Stil |
|---|---|---|
| Rummet | 0–150 | papperet, bär etiketterna |
| Klinker | 150–176, cementfog (glipa 10 med tre tvärstreck som i fogskissen) vid x 250 och x 500 | blyerts 2 |
| Fästmassa | 176–190, glesa prickar som i fogskissen | prickar blyerts-2 |
| Tätskikt | 190–198, två linjer | **penna 2,5**, ingen fyllning |
| Avjämningsmassa | 198–250, utan textur, så att kabeln syns | kontur ritas av tätskiktet ovan och betongen under |
| Värmekabel | tvärsnitt, cirklar r 5 i blyerts 2 vid y 226, x 70, 120, 170, 220, 270, 420, 470, 520, 570 | blyerts 2 |
| Golvgivare | en slang i tvärsnitt, cirkel r 9 med en inre cirkel r 3, vid (345, 226), mitt i luckan mellan x 270 och 420 | blyerts 2, inre cirkel blyerts-2 1,5 |
| Betong eller bjälklag | 250–360, skraffering som i fogskissen, en `<path>` per rad | kontur blyerts 2 bara på ovansidan; skraffering blyerts-2 1,25 |

Luckan mellan x 270 och 420 är till för givaren och dess ledare. Ingen värmepil, inga vågor: värmen syns inte, den sitter i golvet.

## 5. Handskriften

Caveat 500, 24 px, inget under. Ledare i blyerts-2 1,25 px, raka. Papperslapp i `#f5efe3` bakom varje etikett i skrafferingen. **Högst 65 tecken etikettext** sammanlagt; det är vad 28 kB tål med skraffering (fogskissen: 85 tecken och skraffering gav 32 kB).

| Nr | Text | Färg | Placering |
|---|---|---|---|
| G1 | klinker | blyerts-2 | rummet, cirka (60, 124), ledare till klinkern vid (110, 164) |
| G2 | tätskikt | penna | rummet, cirka (170, 70), ledare i penna 1,25 till tätskiktet vid (210, 194); ledaren korsar klinkern och fästmassan |
| G3 | högst 27 grader | blyerts på tumstock | rummet, cirka (340, 80), ledare till klinkerns yta vid (400, 150). Tumstock `#e8b830` 65 procent bakom hela etiketten, roterad 1 till 2 grader |
| G4 | värmekabel | blyerts-2 | i betongen på lapp, cirka (60, 300), ledare till kabeln vid (120, 226) |
| G5 | golvgivare | blyerts-2 | i betongen på lapp, cirka (290, 300), ledare till givaren vid (345, 235) |
| G6 | avjämningsmassa | blyerts-2 | i betongen på lapp, cirka (400, 344), ledare till massan vid (490, 240) mellan två kabelvarv |

Tecken: 7 + 8 + 15 + 10 + 10 + 15 = 65. Betongen och fästmassan får ingen etikett; skrafferingen och prickarna känns igen som i syskonskisserna. Står etiketterna för tätt för 24 px: säg till, krymp inte.

## 6. Alt, aria-label och bildtext

- `aria-label` och `bildAlt` (122 tecken): "Snitt genom golvet i ett badrum med golvvärme, där värmekabeln och golvgivaren ligger i avjämningsmassan under tätskiktet."
- `bildtext`: "Värmekabeln eller mattan ligger i avjämningsmassan på betongen eller bjälklaget, och tätskiktet läggs ovanpå. Sedan kommer fästmassan och klinkern. Golvgivaren i golvet talar om för termostaten hur varmt det är, och ytan får bli högst 27 grader. Skikten är ritade mycket tjockare än de är. Källa: GVK Säkra Våtrum 2026 § 5.3."

Hantverkaren har inte lämnat ordagrann alt eller bildtext för den här bilden; texterna ovan är skrivna ur sidans egna ord och ska höras av hantverkaren före publicering.

## 7. Budget och kontroller

- Publicerad fil **under 28 kB, 28 672 byte** (1 kB = 1 024 byte). Källan under 10 kB.
- Ingen `<text>` i den publicerade filen, ingen `currentColor`, ingen `var(--`. Rotens `width` och `height` lika med viewBox 600 × 360.
- Kör och redovisa: `npm run illustrationer` (rapportera om den skriver någon annan fil än din), `npx astro check --minimumSeverity error`, `node --experimental-strip-types --test scripts/test-illustration.mjs`, byte för båda filerna, `grep -c "<text"` på den publicerade. Rendera den publicerade filen till PNG i 343 px bredd med sharp till scratchpad och titta: syns tätskiktet i penna ovanför kabeln, går givaren att skilja från kabeln, går alla etiketter att läsa. **Kör inte `npm run build`**, committa inte.

## 8. Tillstånd

Ifyllt är det enda. En saknad fil eller fel mått ger byggfel i `Illustration.astro`, vilket är rätt. Bilden visas i läsbredd, 343 px på 375 px, och blir sidans delningsbild eftersom den ligger i `bild`.

## 9. Godkännande

Godkänd 2026-09-29 av UX och bygge, granskad i 343 px: 24 886 byte, ingen `<text>`. Inga avvikelser i skikten; skrafferingen gör uppehåll runt lapparna och ledarna. Inlagd som `bild` på golvvärmesidan.
