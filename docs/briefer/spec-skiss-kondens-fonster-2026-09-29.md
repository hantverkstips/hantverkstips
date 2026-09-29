# Spec: fönstret i genomskärning, med imman längst ner på insidan

UX och bygge, 2026-09-29. Beställd av koordinatorn som huvudbild för `src/content/guider/fukt/kondens-pa-fonster.mdx` (utkast), där platshållaren väntar på `fukt/kondens-fonster`. Checklistan är `docs/briefer/seo-checklista-2026-09-29/fukt-4.md` rad 163, 195 och 239 ("ett fönster i genomskärning med varm inneluft, kall ruta och var kondensen bildas (nederkant, kantzon)"). Faktabladet är `docs/briefer/faktablad/guider-kondens-pa-fonster.md` rad 12, 15, 67–68.

Handen och papperet som i `src/assets/illustrationer-kallor/tak/takfot-snitt.svg`. Läs `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3, 5, 7 och 8; allt som inte står här gäller som där.

## 1. Vad bilden ska säga

Imman på insidan kommer där glaset är kallast, och det är längst ner, vid kanten där listen håller isär glasen. Glaset är kallare än daggpunkten, som ligger på 8,6 grader i ett rum med 21 grader och 45 procent luftfuktighet. Imman i penna är den enda saken som pekar.

Källorna: daggpunkten 8,6 °C vid 21 °C och 45 % ur sidans tabell (Magnus-formeln med Lawrences konstanter, sidan rad 54–64 och kortsvaret). Kanten och bågens nederdel är kallare, listen leder bort värme (Helena Bülow-Hübe, LTH, faktabladet rad 68; sidan rad 88). **Kantzonen har inget tal** (faktabladet rad 15): ingen grad vid kanten, ingen grad mitt på glaset. **Nyckeltalet är 8,6°**, daggpunkten, och det får gul markering en gång.

## 2. Beslut

- Fönstret är en tvåglas isolerruta, eftersom sidans exempel är det gamla tvåglasfönstret och listen finns i en isolerruta.
- Glasets temperatur ritas inte ut. 5 grader mitt på glaset står redan tre gånger på sidan (läsarens retur, andra varvet, punkt 8), och kanten har inget tal.
- Inneluften får ingen pil. Den varma sidan visas med etiketten; en andra pil skulle konkurrera med imman.

## 3. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/fukt/kondens-fonster.svg` | Ny källa med `<text>` |
| `src/assets/illustrationer/fukt/kondens-fonster.svg` | Skrivs av `npm run illustrationer` |

Rör inga andra filer, inte heller sidan.

## 4. Motivet, koordinater

Lodrätt snitt genom fönstret, sett från sidan. Ute till vänster, inne till höger. **Inte skalenligt**: glasen, listen och bågen är förstorade. Koordinaterna är en startpunkt; flytta högst 8 enheter om en etikett kräver det.

| Del | Form och läge | Stil |
|---|---|---|
| Vägg ovanför | x 200–380, y 0–30, skrafferad, kontur på undersidan | blyerts 2, skraffering blyerts-2 1,25 som i fogskissen, en `<path>` per rad |
| Vägg under | x 200–380, y 300–360, likadant, kontur på ovansidan | som ovan |
| Karm | överstycke x 250–340, y 30–48; understycke x 250–340, y 282–300 | blyerts 2 |
| Båge | överstycke x 262–330, y 48–66; understycke x 262–330, y 262–282 | blyerts 2 |
| Ytterglas | två tunna lodräta linjer x 280 och x 284, y 66–262 | blyerts 2 |
| Innerglas | två tunna lodräta linjer x 306 och x 310, y 66–262 | blyerts 2 |
| Listen | en liten rektangel mellan glasen, x 284–306, i både över- och nederkant: y 66–78 och y 250–262 | blyerts 2 |
| Fönsterbänk | inne, x 340–404, y 282–292 | blyerts 2 |
| Fönsterbleck | ute, snett nedåt från karmens nederkant (250, 300) ut till (214, 308) | blyerts 2 |

**Snickarpennan, den enda saken som pekar.** Imman i penna på innerglasets rumssida, x 311–322: små droppar (öppna droppformer, 4 till 6 höga), glest från y 190 och tätare ner mot y 258, och en rand, en kort vågig linje, som ligger på bågens understycke mot glaset vid y 260. Ingen imma på ytterglaset och ingen mellan glasen.

## 5. Handskriften

Caveat 500, 24 px, inget under. Ledare i blyerts-2 1,25 px (i penna för T3). Papperslapp bakom etiketter som står i skraffering. **Högst 46 tecken etikettext**.

| Nr | Text | Färg | Placering |
|---|---|---|---|
| T1 | ute | blyerts-2 | till vänster om fönstret, cirka (110, 160) |
| T2 | inne 21° och 45 % | blyerts | i rummet, cirka (392, 100) |
| V1 | daggpunkt 8,6° | blyerts på tumstock | i rummet under T2, cirka (392, 150) |
| T3 | imma | penna | i rummet till höger om dropparna, cirka (356, 232), ledare i penna 1,25 till dropparna vid (322, 236) |
| T4 | listen | blyerts-2 | till vänster om fönstret, cirka (120, 246), ledare till den nedre listen vid (295, 256); ledaren korsar ytterglaset rakt |

Tecken: 3 + 17 + 14 + 4 + 6 = 44. Tumstock `#e8b830` 65 procent bakom V1, roterad 1 till 2 grader; ingen annan markering. Står något för tätt för 24 px: säg till, krymp inte.

## 6. Alt, aria-label och bildtext

- `aria-label` och `bildAlt` (102 tecken): "Snitt genom ett tvåglasfönster med kondens på fönster längst ner på insidan, vid listen mellan glasen."
- `bildtext`: "Imman kommer där glaset är kallare än daggpunkten, och den ligger på 8,6 grader i ett rum med 21 grader och 45 procent luftfuktighet. Kanten runt glaset och bågens nederdel är kallare än mitten, eftersom listen som håller isär glasen leder bort värme, och därför kommer randen längst ner först. Fönstret är förstorat i genomskärningen."

Hantverkaren har inte lämnat ordagrann alt eller bildtext för den här bilden; texterna är byggda av sidans egna meningar.

## 7. Budget och kontroller

Publicerad fil **under 28 kB, 28 672 byte**. Källan under 10 kB. Kontrollerna som i `spec-skiss-takfot-snitt-2026-09-29.md` avsnitt 7, med `fukt/kondens-fonster`. Vid granskningen på 343 px: syns det att imman sitter på insidan och längst ner, går de två glasen och listen att skilja åt, går alla etiketter att läsa.

## 8. Tillstånd

Som takfotsspecen avsnitt 8.

## 9. Godkännande

Godkänd av UX och bygge 2026-09-29, publicerad fil 17 448 byte. Godkända avvikelser: dropparna nästan slutna, eftersom halvbågar lästes som c; väggens skraffering tätare i höjdled i den låga övre väggen; fönsterblecket har en liten nos. Rättat vid granskningen: "21°" och "och" flöt ihop, så T2 står nu som två ordgrupper, "inne 21°" och "och 45 %", på samma baslinje. Inlagd i `kondens-pa-fonster.mdx` med alt och bildtext enligt avsnitt 6.
