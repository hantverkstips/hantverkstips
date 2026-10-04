# Spec: skissen fukt/svartmogel-badrum, 2026-10-04

UX och bygge, till illustratören. Hantverkarens beskrivning står som YAML-kommentar i `src/content/guider/fukt/svartmogel-badrum.mdx` (frontmattern, "Huvudbild, skiss till UX"). Reglerna står i `docs/DESIGN.md` avsnitt 7, Skisserna: 600 × 360, blyerts på linjerat papper, bara en sak i `penna`, ett nyckeltal med gul markering, Caveat minst 24 px, inga människor och under 40 960 byte. Källan läggs i `src/assets/illustrationer-kallor/fukt/svartmogel-badrum.svg`, och `npm run illustrationer` skriver den publicerade filen.

## Motivet

- **Duschhörnet** i ett badrum, i genomskärning: en kaklad vägg och ett klinkergolv som möts i ett hörn.
- **Framför kaklet (ytan):** svarta prickar på cementfogarna mellan plattorna och i silikonfogen i hörnet, ritade som små fyllda prickar i blyerts. Det är det enda som är fyllt.
- **Bakom kaklet:** väggen i snitt med lagren fästmassa, tätskikt och väggskiva, i den ordningen inifrån rummet, som tre tunna parallella lager. Tätskiktet ritas som en tydligare linje än de andra två.
- **I golvet:** golvbrunnen i snitt med klämringen som håller tätskiktet.
- **I taket:** frånluftsventilen, en liten rund ventil.
- **Under dörren,** i bildens ena kant: en springa där tilluften kommer in. Visa den med en kort pil i blyerts.
- **Pennan** (penna, 2,5 px) är en enda bygel eller pil som skiljer ytan från det som sitter bakom tätskiktet. Den visar att prickarna sitter framför kaklet och att fukten bakom är en annan sak. Ingen annan del är i penna.
- **Nyckeltalet** med gul markering står vid golvbrunnen.

## Etiketterna (Caveat 24 px)

Hantverkaren har inte gett några ordalydelser. Orden nedan kommer ur beskrivningen och bekräftas av hantverkaren efteråt.

- vid prickarna: "ytan"
- vid tätskiktet: "bakom tätskiktet"
- vid golvbrunnen, med gul markering: "37 % av läckorna"
- vid ventilen: "frånluft"
- vid springan under dörren: "tilluft"

Inga andra etiketter. Ryms de inte i 24 px blir motivet enklare, aldrig texten mindre.

## Kontroller

- Rendera skissen på 343 och 600 px.
- Kontrollera att ingen `<text>` finns kvar och att filen är under 40 960 byte.
- Kör `npm run illustrationer` och `npx astro check`.
- Rör inte mdx-filen. Hantverkaren skriver i den, och UX sätter `bild:`.
