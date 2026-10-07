# Retur, fukt i källaren, utbyggnad, omgång F (F3)

Sida: `src/content/guider/fukt/fukt-i-kallaren.mdx`, publicerad. Checklista: `docs/briefer/seo-checklista-2026-10-07/fukt-i-kallaren-utbyggnad.md`. Faktablad: `docs/briefer/faktablad/guider-fukt-i-kallaren.md`, tillägget 2026-10-07 (A–F), beställt av underlagsarbetaren och godkänt av mig.

## Vad som ändrats

- A. H2 "Lukt i källaren kommer före fläcken" heter nu "Mögellukt i källaren kommer före fläcken". Ett nytt stycke om träskyddsmedel med länk till `/fukt/mogellukt/` står efter meningen om luftrenaren.
- B. Ny H2 "Mögel i källaren sitter bakom väggen och under mattan", före Prislappen. Den länkar till `/fukt/svartmogel/` och `/fukt/mogel-i-huset/`.
- C. Ny H2 "Sommar och vinter ger olika luftfuktighet i källaren", efter kondens-H2:n enligt checklistan. Den har en tabell med källarens temperatur mot luft utifrån i augusti och i januari. Den egna räkningen är märkt i källraden. Den länkar till `/fukt/hygrometer/`, `/fukt/fuktkvot/`, `/fukt/fuktmatning-betong/` och `/rakna/daggpunkt/?rum=kallare` (länk, ingen fjärde inbäddning).
- `kallor`: Boverket om fuktrisker med källare, Boverket om fukttransport till betongplatta och källare, SMHI Meteorologi 154, SMHI öppna data (Stockholm) och SWESIAQ version 16.
- Rättelser i befintlig text, på koordinatorns uppdrag:
  - Vädringsrådet: "vädra tidigt på morgonen" ersatt med SMHI-talen. Kl. 05 bär luften 11,2 g/m³ och kl. 14 bär den 10,3 g/m³, så morgonen är inte torrare.
  - 17,3 har blivit 17,2 g/m³, enligt gemensamma tal 3.3.
  - Villaägarnas mening om dränering och förråd står nu hel.
  - "uppvärmd källare" har blivit "en källare som är svalare än luften ute".
  - "augusti och september" har blivit "juli och augusti, när uteluften bär som mest vatten", enligt SMHI-talen i A3.
  - "ibland med flera månader" och "trappan och varje genomföring" är strukna. Spridningen står nu med SWESIAQ s. 8 som källa.
  - Faktarutan påstår inte längre att hyllan gör hörnet kallare. Rubriken heter "Det som gör kondensen värre utan att du märker det".
- `uppdaterad: 2026-10-07`.

## Läsaren

- Varv 1 gav 3 av 5. Läsaren fann tre motsägelser: "varje källare under 17 grader" saknade villkor, en vecka stod mot en hel sensommar, och det fanns inget svar på vad som är normalt. Mögelavsnittet upprepade rutan ovanför och svartmögelsidan ("begränsad effekt", "försvagar inte träet", "hur saneringen går till"). Källor stod som subjekt i var tredje mening. Träskyddsstycket stod på fel plats.
  - Rättat: villkoret om luft utifrån står i texten och i tabellen. Veckoregeln följer luftfuktighet-inomhus. Beviset om morgonluften står vid påståendet. Mögelavsnittet är kortat och omskrivet. Träskyddsstycket handlar om lukt utan mögel.
- Varv 2 gav 4 av 5.
  - Rättat efter det: "växer igen" har blivit "möglar först". "lite nytta" har blivit "liten nytta". "Något tal … finns inte" pekar nu på tabellen. Halvmeningen om den stängda källaren är tillagd. Kolumnerna heter "Luft utifrån i augusti/januari". Gränstalen är samordnade (trä 75 till 80, gips 80 till 85). Boverket och Villaägarna står inte längre i par. Rubriken för mögel är kortad. Länktexten till svartmögel säger nu vad läsaren gör.
- Inte rättat: fem av tio H2 innehåller "i källaren". Det följer av sidans ämne och checklistans krav på fraserna i rubriken. Placeringen av luftfuktighets-H2:n mellan kondens och läckage bryter enligt läsaren de tre orsakernas ordning. Koordinatorn har beslutat att den står kvar, och SEO får frågan vid kontrollen.

## Korrektur

14 fel rapporterades. Alla är rättade utom ett: "under 75 procent i medel" står kvar, eftersom klustrets tabell på luftfuktighet-inomhus använder den formen. Där det gäller gram per kubikmeter står nu "i genomsnitt".

## Kontroll

`npm run kontrollera`: 108 filer, 0 fel, 0 varningar.

## För SEO och GEO

- Placeringen av C (se ovan).
- B:s rubrik "Mögel i källaren sitter bakom väggen och under mattan" bär frasen. C:s rubrik bär "luftfuktighet i källaren".
- Hälsomeningen i B är ersatt av länken till mogel-i-huset. Hälsan står redan i A med samma länk.
- Inlänkarna enligt fukt-6-F.md avsnitt 2 (mogel-i-huset, luftfuktighet-inomhus) är inte gjorda, eftersom de ligger i andra filer.

## För affiliate

`forVem` i produktkortet och i frontmatter säger "15 grader eller mer i augusti och september". Texten säger nu juli och augusti, och tabellen ger runt 84 procent vid 15 grader med bara luft utifrån. Halvmeningen om den stängda källaren gör att det går ihop, men septembermånaden i `forVem` bör ses över. Jag rör inte produktkortet.

## Kvar i underlaget, inte rättat

- (Löst 2026-10-08, se nedan.) Tabellraden om fläcken bakom hyllan saknade källa.
- I faktabladet står Optihus fortfarande som källa för geosmin (rad 82), och den egna mätserien beskrivs som pågående (rad 71).
- BETSI:s 8 procent för källare är inte använt, eftersom tabell 1.6 inte är kontrollerad med ögonen.

## Efter SEO:s kontroll 2026-10-08

- H2 "Sommar och vinter ger olika luftfuktighet i källaren" är flyttad så att den står direkt efter "Läckage kommer med regnet". Markfukt, kondens och läckage står nu i följd.
- Rubrik A heter nu "Mögellukten kommer före fläcken". B och C behåller "i källaren".
- Raden om den mörka fläcken bakom hyllan har fått källa. Underlagsarbetaren hittade SWESIAQ, "6. Vad vet man om fukt- och mögelskador?" (uppdaterad 2024-09-20), ordagrant: det blir ofta över 70 till 75 procent RF "bakom möbler som står tätt mot (dåligt isolerade) ytterväggar". Faktabladet har fått avsnitt G. Förklaringen under tabellen säger nu att väggen bakom hyllan blir kallare och att luftfuktigheten där ofta blir så hög att mögel kan växa. "Där luften aldrig rör sig" är struket, eftersom källan förklarar det med kyla. SWESIAQ presenteras här första gången på sidan. Källan står i `kallor`.
- Månadsrättelsen: tabellraden om imma på rören säger nu "i juli och augusti" i stället för juli till september. `forVem` på rad 14 och i produktkortet säger "juli och augusti". I `kategorier/luftavfuktare.md` rad 63 står "juli och augusti, när uteluften bär som mest vatten", med `uppdaterad: 2026-10-08`.
- Korrekturen på de omskrivna meningarna hittade 0 grammatikfel och gav två putsningar, som båda är gjorda.
- `npm run kontrollera`: 0 fel, 0 varningar.

Godkänd av hantverkaren 2026-10-08. Ändrat efter läsaren (varv 1 och 2), korrekturen och SEO:s tre beslut enligt ovan, och de gamla påståendena utan källa är rättade på koordinatorns uppdrag.
