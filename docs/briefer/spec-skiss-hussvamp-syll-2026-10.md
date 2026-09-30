# Spec: hussvamp mot ytmögel på en syll

UX och bygge, 2026-09-30. Rekommenderad bild i `docs/briefer/seo-checklista-2026-09-30/hussvamp.md` punkt 8, huvudbild för `/fukt/hussvamp/`. Underlaget är `docs/briefer/faktablad/kunskap-hussvamp.md` avsnitt 1.4 och rad 149 och 178.

**Status: specad, ritas inte ännu.** Illustratören börjar när hantverkarens rapport finns, med `bildAlt`, `bildtext` och etiketterna ordagrant.

## 1. Vad bilden ska säga

Två bitar av samma syll på en grundmur, bredvid varandra.

- **Vänster: ytmögel.** Mögel växer ytligt på virket, som ett ludd på ytan, och träet under är helt (rad 149).
- **Höger: äkta hussvamp.** Träet har brunnit sönder i en kubisk röta med tvärsprickor, och sprickorna står glesare än vid annan brunröta (rad 178). Mycelsträngar växer över stenen i grundmuren och letar nytt trä (Naturhistoriska riksmuseet, rad 128: "flera meter över sten eller betong").

**Mycelsträngarna över muren är den enda saken i penna.**

**Nyckeltal:** inget i grundförslaget. Hantverkaren kan välja ett ur faktabladet, till exempel "över 30 % fuktkvot" (TräGuiden, H2) vid den högra syllen. Då får det tumstock.

## 2. Motivet (600 × 360), två rutor med en lodrät skiljelinje vid x 300

**I båda rutorna**

- Grundmuren: ett murverk i nedre halvan, block med fogar, blyerts 2. Skrafferas inte, eftersom stenen ska synas.
- Syllen ovanpå: en liggande rektangel, ungefär 220 × 40, med ådring i blyerts-2 1,25.

**Vänster**

- Syllen är hel.
- På ovansidan ligger ett tunt fält av små prickar och korta krumelurer, ludd, i blyerts-2.

**Höger**

- Syllen är sönderbruten i kuber: ett rutnät av sprickor med 18–22 enheters mellanrum.
- Kanterna är lite nedsjunkna.
- Mycelsträngarna, i **penna** 2,5: tre förgrenade, rotlika linjer från syllens undersida ner över murens block och fogar, med små förgreningar.

## 3. Handskriften

Caveat 500, 24 px, högst 55 tecken. Orden tas ur hantverkarens kommentar:

| Nr | Säger | Färg | Placering |
|---|---|---|---|
| T1 | ytmögel | blyerts | vänster, ovanför syllen |
| T2 | hussvamp | blyerts | höger, ovanför syllen |
| T3 | mycelsträngar över muren | penna | höger, vid strängarna |
| T4 | kubisk röta | blyerts-2 | höger, vid kuberna |

## 4. Filer, budget och kontroller

- Källa: `src/assets/illustrationer-kallor/fukt/hussvamp-syll.svg`, under 12 288 byte.
- Publicerad fil: `src/assets/illustrationer/fukt/hussvamp-syll.svg`, under 30 720 byte, utan `<text>`.
- Rendera på 343 och 1200 px. På 343 px ska tre saker synas:
  - att den vänstra syllen är hel med något på ytan
  - att den högra är sönderbruten i kuber
  - att strängarna går över stenen
- `aria-label` är hantverkarens `bildAlt`, med "hussvamp".

## 5. Godkännande

Godkänd av UX och bygge 2026-09-30.

## 6. Hantverkarens rapport, 2026-09-30 (gäller före avsnitt 1–3)

Kommentaren står vid `bild:` i `src/content/kunskap/fukt/hussvamp.mdx`.

- **Sidorna byter plats.** **Vänster:** syllen med kubisk brunröta, sprickor på längden och tvären, och grå mycelsträngar i penna ner över grundmuren mot nästa träbit. Den träbiten är en kort bit trä, till exempel en regel, nere till höger om muren. **Höger:** en bräda med mögelprickar bara på ytan och helt trä under.
- **Etiketterna, ordagrant och inga andra:**
  - T1 "fuktkvot över 30 %" vid syllen, med tumstock bakom "30 %".
  - T2 "75–80 % RF" vid den möglade brädan, i blyerts-2.
- Källan är TräGuiden i GT (T24 och T2).
- `aria-label` är bildAlt, ordagrant.
