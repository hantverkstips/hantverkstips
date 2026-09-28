# Spec: zonskissen i badrummet, två varianter

UX och bygge, 2026-09-28. Beställd av koordinatorn för två sidor: tätskiktssidan `src/content/kunskap/badrum/tatskikt-badrum.mdx` (kommentaren på rad 121 väntar på `badrum/vatzoner`) och `src/content/kunskap/badrum/vatrumsfarg.mdx` (kommentaren på rad 52). Checklistan är `docs/briefer/seo-checklista-2026-09-29/badrum.md` avsnitt 8 för båda sidorna. Underlaget: `docs/briefer/faktablad/kunskap-tatskikt-badrum.md` avsnitt 2 (BBV 26:1 § 3.2, GVK 2026 § 4.1–4.3) och `docs/briefer/faktablad/kunskap-vatrumsfarg.md` avsnitt 1b och 1c (MVK 2026). Allt som inte står här gäller som i `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3, 5, 7 och 8; läs den först.

## 1. Beslut: två filer, en ritning

Zonerna skiljer sig mellan branschreglerna och MVK. BBV och GVK har hela golvet och hela ytterväggen i våtzon 1; MVK har inte golvet alls, lägger taket i våtzon 2 och väggen bakom en vägghängd toalett i våtzon 1. En gemensam bild skulle antingen utelämna det som skiljer eller visa båda regelverken i samma rum, och då pekar den på två saker. Därför **två publicerade filer med samma rum**, en per sida. Varje sida laddar bara sin egen fil, lazy, så kostnaden per sida är en fil, och ingen av dem ligger i HTML:en. Utvecklaren ritar BBV-varianten först och gör MVK-varianten som en kopia där bara det i avsnitt 4 skiljer.

Kommentaren på tätskiktssidan ber om plan- och väggvy. Jag ersätter det med ett rum snett uppifrån, som en öppen låda: golv och två väggar i samma bild förstås på en sekund, och en planvy bredvid en väggvy kräver att läsaren sätter ihop dem själv.

## 2. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/badrum/vatzoner.svg` | Ny källa, BBV och GVK. Namnet är det tätskiktssidan redan väntar på |
| `src/assets/illustrationer-kallor/badrum/vatzoner-vatrumsfarg.svg` | Ny källa, MVK |
| `src/assets/illustrationer/badrum/vatzoner.svg` och `.../vatzoner-vatrumsfarg.svg` | Skrivs av `npm run illustrationer` |

Mappen `badrum/` finns sedan fogskissen. Rör inga andra filer; listan i fogspecen avsnitt 2 gäller, och dessutom allt under `src/content/`.

## 3. Rummet, gemensamt

Parallellprojektion, 100 enheter per meter i bredd och höjd, djupvektor (−40, 28) per meter. Bilden är ungefär skalenlig; måtten står bara där avsnitt 4 säger.

| Del | Koordinater | Stil |
|---|---|---|
| Bakvägg, 3,0 m bred och 2,4 m hög | x 150–450, y 44–284 | blyerts 2 |
| Vänstervägg, 2,4 m djup | (150,44) (150,284) (54,351) (54,111) | blyerts 2 |
| Golv | (150,284) (450,284) (354,351) (54,351); högra kanten är öppen, ingen högervägg | blyerts 2 |
| Duschplats 0,9 × 0,9 m i hörnet | på golvet (150,284) (240,284) (204,309) (114,309), streckad i blyerts-2 1,5; golvbrunn som liten cirkel r 6 vid (177,296) | |
| Duschplatsens vägg upp till 2,0 m | streckad lodrät linje i blyerts-2 1,5 vid x 240 från y 284 till y 84, och streckad vågrät från x 150 till 240 vid y 84 | |
| Duschen | stång med duschhuvud på bakväggen vid x 222, från y 250 upp till y 90 | blyerts 2 |
| Vägghängd toalett | på bakväggen, mitt x 405: skål x 385–425 hängande y 236–262 utan fot, spolknapp x 395–415, y 170–190 | blyerts 2 |
| **Zongränsen**, den enda saken som pekar | lodrätt streck i penna 2,5 vid x 340 från golv till tak (y 284 till 44), svagt darrande | penna |
| Måttet 1 m | bygel i blyerts-2 1,5 från x 240 till x 340 vid y 64, texten "1 m" under den på tumstock 65 procent | blyerts-2 |

Ingen skraffering: det finns ingen mark eller betong i bilden. Ytor fylls inte; zonerna skiljs åt av gränsstrecket och etiketterna.

## 4. Det som skiljer

**BBV-varianten (`vatzoner.svg`)**

- Vänsterväggen är en yttervägg: ett fönster på den, parallellogram mellan djup 1,2 och 1,8 m och höjd 1,1 till 1,7 m. Ingen zongräns på vänsterväggen, eftersom hela ytterväggen är våtzon 1.
- Måttbygeln "2,0 m" i blyerts-2 lodrätt vid x 160 från y 284 till y 84, texten bredvid utan tumstock (bara 1 m är nyckeltal).
- Etiketter:

| Nr | Text | Färg | Placering |
|---|---|---|---|
| B1 | dusch | blyerts-2 | vid duschplatsen på golvet eller vid duschstången |
| B2 | våtzon 1 | blyerts | på bakväggen mellan x 245 och 335, mitt på höjden, på papperslapp om den korsar något |
| B3 | våtzon 2 | blyerts | på bakväggen till höger om gränsen, ovanför toaletten (x 345–450, y 80–150) |
| B4 | hela golvet våtzon 1 | blyerts | på golvet, mitt i golvytan |
| B5 | hel yttervägg våtzon 1 (två rader: "hel yttervägg", "våtzon 1") | blyerts | på vänsterväggen, ovanför eller under fönstret, lodrätt eller längs väggens lutning om det krävs |
| B6 | 1 m | blyerts-2 på tumstock | se avsnitt 3 |
| B7 | 2,0 m | blyerts-2 | vid 2,0-bygeln |

`aria-label`: "Badrum snett uppifrån där tätskiktets våtzon 1 omfattar väggarna en meter ut från duschen, hela golvet och ytterväggen."

I MDX:en (hantverkaren): `<Illustration namn="badrum/vatzoner" alt="Badrum snett uppifrån där tätskiktets våtzon 1 omfattar väggarna en meter ut från duschen, hela golvet och ytterväggen." bildtext="Zonerna enligt BBV 26:1 § 3.2 och GVK Säkra Våtrum 2026. Platsen för dusch går 2,0 meter upp på väggen bakom. Våtzon 1 går från golv till tak och minst 1 meter åt sidan från duschen, och omfattar hela golvet och hela ytterväggen med fönstret. Övriga väggar är våtzon 2." />`

**MVK-varianten (`vatzoner-vatrumsfarg.svg`)**

- Inget fönster. Zongränsen står på båda väggarna: på bakväggen vid x 340 som ovan, och på vänsterväggen vid djup 1,9 m, från (74,97) till (74,337), också i penna. Det är samma sak, gränsen, på två väggar.
- Ingen 2,0-bygel.
- Bakom toaletten: en streckad rektangel i blyerts-2 1,5 från x 370 till 440 och y 150 till 284, den yta som spolas eller får vattenspill.
- Etiketter:

| Nr | Text | Färg | Placering |
|---|---|---|---|
| M1 | dusch | blyerts-2 | vid duschplatsen |
| M2 | VT, våtzon 1 | blyerts | på bakväggen mellan x 245 och 335, och en gång till på vänsterväggen innanför gränsen om den får plats, annars bara bakväggen |
| M3 | VA, våtzon 2 | blyerts | på bakväggen till höger om gränsen, ovanför den streckade rektangeln (x 345–450, y 60–140) |
| M4 | VT bakom toaletten (två rader: "VT bakom", "toaletten") | blyerts | inne i den streckade rektangeln, ovanför skålen |
| M5 | taket VA | blyerts | i högerspalten (x 460–590) med ledare till takets kant, bakväggens överkant, vid (430,44) |
| M6 | golvet ingår inte | blyerts-2 | på golvet, om hantverkaren vill ha den |
| M7 | 1 m | blyerts-2 på tumstock | se avsnitt 3 |

`aria-label`: "Badrum snett uppifrån där våtrumsfärgen ska vara klass VT vid duschen och bakom toaletten och VA på resten."

I MDX:en (hantverkaren): `<Illustration namn="badrum/vatzoner-vatrumsfarg" alt="Badrum snett uppifrån där våtrumsfärgen ska vara klass VT vid duschen och bakom toaletten och VA på resten." bildtext="Zonerna enligt Måleribranschens regler för våtrum 2026. Våtzon 1 går från golv till tak och minst 1 meter ut från duschen, och dit hör också väggen bakom en vägghängd toalett. Där krävs klass VT. Övriga väggar och taket är våtzon 2, där klass VA räcker, och golvet ingår inte i reglerna." />`

## 5. Budget

Varje publicerad fil under 28 kB (inga skrafferingar, få etiketter). Resten som fogspecen avsnitt 7. Kontrollera båda filerna.
