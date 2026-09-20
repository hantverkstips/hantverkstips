# Uppdrag: hela sajten i Christians röst (2026-09-20)

Gäller alla hantverkare-agenter i omgången. Varje agent får en lista med sidor i sitt anrop; allt annat står här.

## Vad som ska hända

Varje publicerad sida och varje verktyg skrivs om i Christians röst enligt `docs/ROST.md`. Innehållet är rätt: talen, källorna, tabellerna och länkarna är kontrollerade och testade. Det är formen som ska bort. Läs ROST.md helt innan du börjar, och avsnitt 3 igen innan du lämnar varje sida.

Ordningen per sida står i ROST.md avsnitt 6. Den viktigaste punkten är att du skriver från faktabladet, inte från den gamla texten. Om du kommer på dig med att formulera om en gammal mening, börja om på stycket.

## SEO-checklistan

Läs avsnittet för varje sida i `docs/briefer/seo-checklista-2026-09-20/` innan du skriver. Den säger vilka fraser som ska finnas och var, titelns och beskrivningens längd, vilka avsnitt som måste finnas kvar, hur långa alt-texterna får vara, vilka länkar som ska finnas kvar och vad som lätt stryks av misstag. Strategen läser den färdiga sidan mot samma lista, så det är billigare att följa den nu.

Ankartexter: alla sidor skrivs om samtidigt, så du får skriva om ankartexterna på din egen sida fritt. Länken ska finnas kvar och ankaret ska säga vart den leder. Du behöver inte matcha målsidans rubrik.

## Filerna

**Innehåll (`src/content/`)**

- Frontmatter: du ändrar `title`, `seoTitle`, `description`, `kortSvar`, `uppdaterad` (sätt 2026-09-20) och `forVem` under produkter. Inget annat fält.
- `kortSvar` skrivs i blockstil med `|`, med blankrad mellan styckena, så att pappret får stycken. En enda `**markering**` runt nyckeltalet, eller ingen.
- Komponenttaggar (`<Faktaruta>`, `<Illustration>`, `<Varning>`, `<Verktygskort>`, `<Kalkylator>`, `<Kortgrupp>`, `<Faq>` med flera) står kvar med sina props. Texten inuti, `alt`, `bildtext` och `rubrik` är din.
- Tabeller: talen orörda, rubrik- och celltexter får skrivas om så att de svarar på kolumnrubriken. Källraden under tabellen står kvar.
- Interna länkar: alla ska finnas kvar, får flyttas.
- Faq: samma antal frågor, texten är din.
- Hubbarna (`src/content/pelare/`): brödtexten är tom med flit, mallen bygger galleriet själv. Din text är `title`, `description` och `ingress`. Ingressen är en till tre hela meningar som säger vad man gör först i ämnet och varför, sagt som Christian. Ingen substantivramsa, inget "Det som händer under huset och sällan syns i tid".
- `seoTitle` får du ändra inom checklistans krav. Två är låsta av sökordsanalysen: sprickor-i-husgrunden ska sluta på "sättningsspricka" och isolera-kallarvagg ska börja med "Isolera källare invändigt".
- Titeln får varumärket " · Hantverkstips" bara om den är högst 44 tecken. Håll den där om checklistan inte säger annat.
- Alt-texter högst 125 tecken. Det som inte får plats, som måtten, flyttas till `bildtext`. `namn` på `<Illustration>` rörs aldrig.

**Verktyg (`src/pages/rakna/`, `src/components/kalkyl/`, `src/lib/kalkyl/`)**

- Sidan: `VERKTYGSNAMN`, `BESKRIVNING`, `titel`, H1, ingressen, kortsvaret i faktarutan, avsnitten under verktyget, antagandetabellens texter, alt och bildtext på skissen, frågorna och svaren. Markup och props står kvar.
- Formuläret: etiketter, hjälptexter, alternativens synliga text, texterna i resultatspalten. Aldrig `name`, `value` eller `id`.
- Formelmodulen: de svenska strängarna som visas (besked, råd, "gör inte det här", fel). Aldrig konstanter, typer, nycklar eller logik. Kommentarerna får stå.
- Registret `src/lib/kalkyl/register.ts`: `namn` och `rad` för dina verktyg. `rad` är en mening med verb, högst två rader på kortet, som en granne skulle säga vad verktyget gör.
- Testerna `scripts/test-kalkyl-[slug].mjs` kontrollerar också synliga strängar. När du skrivit om ett besked uppdaterar du påståendet i testet till den nya texten. Påståenden om tal rör du aldrig. Kör testet efteråt: `node --experimental-strip-types --test scripts/test-kalkyl-[slug].mjs`.
- Resultatspalten bär beskedet, talet, en rad som pekar vidare och länkarna. Beskedet är en mening med verb som säger vad läsaren ska göra. Uträkningen står under verktyget.
- Bort ur publik text: SEO-analys av konkurrenter, träfflistor, PDF-filer som inte gick att läsa, datum då en konstant ändrades, vad marknadens andra räknare gör.

## Rösten, tre påminnelser

- Christian säger "jag" om det han gjort och tycker och "du" till läsaren. Ingen "redaktionen", inget "vi" utom när han menar sig själv och läsaren. Om-sidan är den enda sidan som presenterar honom, och där påstås ingenting om honom som inte redan står i den gamla texten.
- När han inte mätt själv säger han det och säger vem han går på. Etiketten test mot granskning står kvar som den är.
- Läs varje stycke högt. Om det inte går att säga till grannen skrivs det om.

## Vad du inte gör

- Kör inte `npm run build`. Koordinatorn bygger när alla är klara.
- Rör inte andra agenters filer. Har du synpunkter på en annan sida skriver du dem i rapporten.
- Ändra inte tal, källor, konstanter, slugs, komponenter eller strukturerad data. Hittar du något som ser fel ut rapporterar du det.
- Hitta inte på. Ingen anekdot som inte redan står i faktabladet, ingen kund, ingen granne.

## Innan du lämnar

1. Läs alla dina nya sidor i följd och stryk allt som börjar likna sig självt: samma slutkläm, samma rubrikform, samma skämt, samma inledning.
2. Kontrollera mot ROST.md avsnitt 3, 4 och 5.
3. `npm run kontrollera` (innehållssidor) och testerna (verktyg).
4. Rapportera: filer du skrivit om, faktablad du lagt i `docs/briefer/faktablad/`, sådant i underlaget som såg fel ut och som du lät stå, och vad strategen bör titta extra på.
