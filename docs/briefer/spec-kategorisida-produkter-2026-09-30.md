# Spec: kategorisidan håller budgeten när produkterna blir fler

UX och bygge-agenten, 2026-09-30. Blockerande: `npm run build` ger `/luftavfuktare/` 70 624 byte mot gränsen 67 584, med 15 produkter. De två senaste, fresh-d1200 och acetec-evodry-rcf-12-g1, lades i kategorin för vindguidens skull.

## 0. Varför, och beslutet

I dev kostar varje produkt omkring 2,3 kB:

- en kolumn i jämförelsetabellen, cirka 0,85 kB
- en egen sektion med fullt Produktkort, cirka 1,1 kB
- en post i ItemList, cirka 0,4 kB

Sidan växer alltså med varje maskin som läggs i databasen, oavsett om kategorisidan har något att säga om den.

**Beslut:** bara produkter som har ett test eller står i `val` får en egen sektion med fullt kort. Alla produkter står kvar i jämförelsetabellen, med köpknappen i prisraden, och i ItemList.

- Kategorifilen får inget nytt fält, och databasen styr fortfarande vad tabellen jämför.
- Med tre val och två tester ger det fem sektioner i stället för femton. Det sparar omkring 11 kB.
- Varje ny otestad produkt kostar sedan cirka 1,25 kB.

`docs/SPEC-SIDMALLAR.md` avsnitt 4.2 punkt 5 och stycket om strukturerad data är ändrade.

Utfallet jag valde bort: ett fält `produkter:` i kategorifilen som begränsar tabellen. Då skulle en jämförelsesida inte jämföra alla maskiner, och varje ny produkt skulle kräva en ändring i innehållet.

## 1. `src/components/vyer/Kategorisida.astro`

- `const medSektion = produkter.filter((p) => testPerProdukt.has(p.slug) || valSlugs.includes(p.slug))`. Tabellens ordning behålls.
- Sektionerna per produkt loopar över `medSektion` i stället för `produkter`. Kanten `i > 0` räknas på den nya listan.
- `rubriker` till innehållsförteckningen: "Jämförelse" och sedan bara `medSektion`, följt av H2:orna ur kategorifilen, som i dag.
- `kategoriData`, alltså ItemList, har alla produkter som i dag. `url` blir testsidan om det finns ett test, annars `#${slugify(namn)}` om produkten har en sektion, annars `#${slugify('Jämförelse')}`.
- Raden "{n} produkter jämförda" räknar alla produkter, som i dag.
- Grenen "Utan test" i sektionen, med raden "Granskas …", står bara kvar om en produkt i `val` saknar test. Den rörs inte.

## 2. Rörs inte

- `Jamforelsetabell.astro`, `Produktkort.astro` och `strukturdata.ts`.
- Kategorifilerna och innehållet.
- JSON-LD:s form. Om den ska kortas beslutar SEO, som tidigare.

## 3. Kontroller, efter ett riktigt bygge

`npm run build` stannar på `kontrollera`, som har tre fel om länkar till utkast i andras mdx. Kör därför samma steg i ordning utan `kontrollera`: `npm run illustrationer`, `npm run delningsbilder`, `npx astro build`, `node scripts/budget-html.mjs`. Bara länkfelen till utkast får finnas i `kontrollera`.

- `/luftavfuktare/` ska vara under 67 584 byte i `dist/client`, och storleken rapporteras.
- Budgeten ska vara grön för alla sidor.
- Script-taggar utöver JSON-LD: 0.
- Alla räknartester ska vara gröna, och `astro check` ska ge 0 fel.
- 375 px: sidan ska renderas utan sidledsscroll utanför tabellytan.
- Kontrollera att alla ankare i ItemList finns på sidan: varje `#…` i JSON-LD ska ha ett element med samma id.
