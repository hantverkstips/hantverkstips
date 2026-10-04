# Spec: två mögelskisser och fuktkvotsskissens markering, 2026-10-04

UX och bygge, till illustratören. Reglerna för skisser står i `docs/DESIGN.md` avsnitt 7, Skisserna, och gäller ordagrant. Viktigast här:
- blyerts på linjerat papper, 600 × 360
- en linjebredd per lager
- bara en sorts sak i `penna`
- ett nyckeltal med gul markering, och tumstocksgult inget annat
- Caveat minst 24 px
- inga människor
- källan med `<text>` under `src/assets/illustrationer-kallor/fukt/`, och `npm run illustrationer` skriver den publicerade filen
- under 40 960 byte och läsbar på 343 px

Motivet och etiketterna kommer ur hantverkarens beskrivningar i YAML-kommentaren på respektive sida. Skisserna visar det texten säger och inget mer.

## 1. `fukt/mogel-i-huset`

Beskrivningen står i `src/content/guider/fukt/mogel-i-huset.mdx` rad 15–21, och platserna i tabellen under "Var möglet brukar sitta" (rad 87–95).

- **Motivet.** Ett hus i genomskärning med krypgrund till vänster och källare till höger under bottenvåningen, en bottenvåning med ett fönster, ett badrum och ett rum med tapet, och en kallvind under yttertaket.
- **Det som pekar.** Platserna ringas in med `penna`, med en öppen ring som inte sluter, en ring per plats. Det är den enda sorten pekande sak i bilden. Platserna är:
  - undersidan av yttertaket på vinden
  - fönstrets insida och karm
  - badrummets fogar
  - golvmatta och tapet i rummet
  - källarväggen med fuktfläck och salt (vita prickar)
  - blindbotten och syllen i krypgrunden
- **Ringarna i stället för gula symboler.** Koordinatorn bad om gula symboler, men tumstocksgult är förbehållet nyckeltalet i en skiss. Därför ringar.
- **Nyckeltalet** med gul markering: "75 % RF vid materialet".
- **Handskriven rad vid fönstret:** "kondens som rinner vid −5 grader ute". Orden kommer ur beskrivningen. Hantverkaren bekräftar dem.
- **Övrigt.** Inga andra etiketter. Platserna förklaras av tabellen och bildtexten. Huset ritas som snickarens skiss: rummen som enkla linjer, skraffering för mark och betong.

## 2. `fukt/mogellukt-luftvag`

Beskrivningen står i `src/content/guider/fukt/mogellukt.mdx` rad 15–21.

- **Motivet.** Ett enplanshus med krypgrund och kallvind, sett från sidan med gaveln bortskuren.
- **Krypgrunden:** en mörk fläck (skraffering) på blindbottens undersida.
- **Lukten upp i rummet:** pilar i blyerts från fläcken upp genom två hål i golvbjälklaget, ett för ett avloppsrör och ett för ett elrör, och ut i rummet ovanför.
- **Vinden:** en fläck under råsponten och en pil i blyerts som går ut genom gavelventilen, inte ner i huset.
- **Det som pekar.** Pennan pekar på rörets hål i golvet, med etiketten "lukten tar sig upp här". Det är den enda saken i `penna`.
- **Etiketten vid vindens pil:** "sprids sällan ner".
- **Inga mått och inget nyckeltal,** eftersom källorna inte ger några tal. Ingen gul markering.
- **Undertrycket.** Koordinatorn nämnde undertryck från ventilationen som drivkraft, men sidan säger det inte. Det ritas inte.

## 3. `rakna/fuktkvot`

I källan `src/assets/illustrationer-kallor/rakna/fuktkvot.svg` breddas den gula markeringen bakom "12 % fuktkvot" så att den täcker hela texten med några px luft på varje sida, med samma lutning och opacitet som i dag. Inget annat ändras.

## Kontroller

- Kör `npm run illustrationer`.
- Rendera de tre skisserna på 343 och 600 px och spara dem i `scratchpad\skisser-mogel\`.
- Kontrollera att ingen `<text>` finns kvar i de publicerade filerna och att varje fil är under 40 960 byte.
- Kör `npm run kontrollera`.
- Rör inte mdx-filerna. UX lägger in `bild:` efteråt.
