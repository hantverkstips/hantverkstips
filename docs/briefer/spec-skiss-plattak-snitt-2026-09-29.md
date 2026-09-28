# Spec: snittskiss av plåttaket vid takfoten

UX och bygge, 2026-09-29. Beställd av koordinatorn för `src/content/kunskap/tak/plattak.mdx` (utkast), där kommentaren på rad 177 väntar på `tak/plattak-snitt`. Checklistan är `docs/briefer/seo-checklista-2026-09-29/tak.md` rad 195 och 232, faktabladet `docs/briefer/faktablad/kunskap-plattak.md` rad 26, 38–40, 226–234. Allt som inte står här gäller som i `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3 (ram, papper, tokens), 4 (skraffering, darr, hörn), 5 (handskrift och ledare), 7 (kontroller) och 8 (tillstånd); läs den först.

## 1. Vad bilden ska säga

Plåten ligger inte på pappen. Mellan dem finns två lager läkt: ströläkten längs takfallet, så att vatten under plåten kan rinna ner på pappen, och bärläkten tvärs över, som plåten skruvas i. Vattnet på pappen går ut över takfotsbeslaget, eftersom pappen läggs över beslaget. Det vattnet är den enda saken som pekar.

Källorna, alla Plannja om inget annat står: råspont minst 17 mm och underlagspapp lägst YAP2200 eller Anticon Coverall (Plannja PL-PANN och PL-PROF, som sidan rad 158 återger för Plannja i stort; Royal-anvisningen själv skriver "godkänt vattenavledande underlag"), "Vattenavledande underlag läggs över takfotsbeslaget" (Royal), ströläkt 25 × 50 c 600 (Royal), bärläkt 25 × 50 på träpanel (Royal), bärläkt följer pannsteget, 400 mm för Royal (Royal). **Nyckeltalet är bärläktens c 400**, det enda avståndet som går att visa i det här snittet. Det får gul markering. Ströläktens c 600 är avståndet i sidled mellan läktarna, vinkelrätt mot snittet, och kan inte ritas här; det står i etiketten och bildtexten.

## 2. Beslut: takfoten och en brytlinje, ingen nock

Kommentaren och checklistan säger "från takfot till nock". Faktabladet har ingen källa för hur nocken byggs under Royal (nockplåt, nockläkt, ventilation), och en nock utan källa blir en påhittad detalj. Snittet går därför från takfoten upp längs takfallet och slutar i en brytlinje med en etikett om att taket fortsätter upp mot nocken. Allt som sidan rad 156–175 beskriver syns ändå.

Snittet ligger mellan två ströläkter. Ströläkten som ligger bakom snittet ritas som ett band i blyerts-2 (sedd, inte skuren); bärläkterna som korsar snittet ritas som skurna rektanglar i blyerts.

## 3. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/tak/plattak-snitt.svg` | Ny källa med `<text>` |
| `src/assets/illustrationer/tak/plattak-snitt.svg` | Skrivs av `npm run illustrationer` |

Rör inga andra filer. Listan över förbjudna filer i fogspecen avsnitt 2 gäller, och dessutom allt under `src/content/`. Inbäddningen gör hantverkaren senare: `<Illustration namn="tak/plattak-snitt" alt="[ALT]" bildtext="[BILDTEXT]" />`.

## 4. Motivet, koordinater

Takfallet lutar upp åt höger. **Inte skalenligt:** skiktens tjocklek är förstorad, och lutningen har inget tal i bilden.

Baslinjen är råspontens underkant från P0 = (96,304) till P1 = (546,122), längd 485 enheter. Riktningen längs takfallet är d = (0,927, −0,375), normalen uppåt är n = (−0,375, −0,927). En punkt skrivs (s, h): s enheter längs d från P0 och h enheter längs n. Utvecklaren räknar om till x och y.

| Del | Form i (s, h) | Stil |
|---|---|---|
| Råspont | band h 0–14, s 0–470; ändytan vid s 0 vinkelrät mot takfallet. Några korta fogstreck tvärs bandet var 70:e enhet | blyerts 2; inga ådringar, ingen skraffering (trä) |
| Takfotsbeslaget | vinkel av plåt: ett ben på råspontens ovansida h 14–16, s 0–30, som viks ner över ändytan till h −12 och avslutas med en kort droppnäsa utåt | blyerts 2 |
| Underlagspappen | band h 16–20 från s −2 (över beslaget, sluter mot dess kant) till s 470 | två blyerts-linjer 1,5 |
| Ströläkten (bakom snittet) | band h 20–32, s 6–470 | blyerts-2 1,5, ingen fyllning |
| Bärläkten | fem skurna rektanglar h 32–44, bredd 24 längs s, centrerade på s = 40, 136, 232, 328, 424 | blyerts 2, med ett kryss i blyerts-2 1,25 i varje (snittmarkering för trä) |
| Takpanneplåten | profillinje ovanpå bärläkterna: vilar på läktens överkant h 44, stiger jämnt till h 54 mot nästa läkt och faller i ett trappsteg tillbaka till h 44 vid varje läkt, som pannraderna i plåten. Nedtill går plåten till s −8, förbi beslaget | blyerts 2 |
| Brytlinjen | tvärs alla skikt vid s 470: en sicksack med tre spetsar från h −4 till h 60 | blyerts-2 1,5 |
| Väggen | två lodräta linjer från råspontens underkant vid s 90 och s 118 rakt ner till y 356; väggens krön under råsponten | blyerts-2 1,5, ingen etikett |
| Måttet c 400 | bygel parallell med takfallet på h 72, från s 136 till s 232, med korta tvärstreck vid ändarna och streckade hjälplinjer ner till läktarnas mitt | blyerts-2 1,5 |

**Snickarpennan, den enda saken som pekar:** vattnet på pappen. En linje i penna 2,5 px längs pappens ovansida (h 21) från s 300 ner till s 0, där den följer pappen ut över beslaget och slutar i ett öppet pilhuvud (två ben om 9 enheter) utanför droppnäsan, riktat nedåt. Svagt darrande. Inget annat i penna utom marginallinjen.

## 5. Handskriften

Caveat 500, 24 px, inget under. Ytan ovanför taket (övre vänstra triangeln, ungefär x 44–400, y 12–200) är luft för skikten ovanifrån; ytan under taket till höger (ungefär x 260–594, y 200–350) är luft för skikten underifrån. Ledarna går från etikettens närmaste kant till en punkt inne i skiktet och korsar aldrig varandra eller pennans linje.

Texten är hantverkarens. Ord som redan står på sidan anges med rad.

| Nr | Namnger | Ord på sidan | Färg | Placering |
|---|---|---|---|---|
| P1 | plåten | "takpanneplåt" (rad 160) | blyerts-2 | ovanför, ledare till plåten vid s 380 |
| P2 | bärläkten | "bärläkt" (rad 160) | blyerts-2 | ovanför, ledare till läkten vid s 328 |
| P3 | bärläktens avstånd | "c 400" med "c" som sidan skriver det (rad 160 skriver "c 600 mm") | blyerts på tumstock | vid bygeln, ovanför den |
| P4 | ströläkten, med dimension och c-mått om hantverkaren vill | "ströläkt 25 x 50 millimeter på c 600 mm" (rad 160) | blyerts-2 | under taket, ledare till ströläkten vid s 260 |
| P5 | pappen | "underlagspapp" (rad 158) | blyerts-2 | under taket, ledare till pappen vid s 200 |
| P6 | råsponten | "råspont" (rad 158) | blyerts-2 | under taket, ledare till råsponten vid s 150 |
| P7 | beslaget | "takfotsbeslaget" (rad 158) | blyerts-2 | nere till vänster, ledare till vinkeln |
| P8 | att vattnet rinner på pappen och ut över beslaget | två rader: "vatten på pappen" / "rinner ut här" (hantverkaren) | penna | nära pilhuvudet, nere till vänster eller ovanför takfoten |
| P9 | att taket fortsätter upp mot nocken | "vidare mot nocken" (hantverkaren) | blyerts-2 | vid brytlinjen, uppe till höger |

Hantverkaren 2026-09-29: P3 blir "c 400 mm" och P4 "ströläkt c 600"; kortas P4 blir det bara "ströläkt", och c 600 står ändå i bildtexten. P1, P2 och P5–P7 bekräftas med sidans ord.

Nio etiketter är taket för bilden. Står de för tätt för 24 px är P9 den som stryks först och P4 kortas till bara ordet; säg till, krymp inte.

## 6. Alt, aria-label och bildtext

- `[ALT]` (113 tecken): "Snitt genom plåttaket vid takfoten med råspont, underlagspapp, ströläkt, bärläkt och takpanneplåt i lager."
- `aria-label`: `[ALT]` ordagrant.
- `[BILDTEXT]`: "Under takpanneplåten ligger bärläkt, ströläkt, underlagspapp och längst ner råspont. Ströläkten är 25 x 50 millimeter och ligger längs takfallet på c 600 mm, så i snittet syns den som ett band. Bärläkten ligger tvärs över på c 400 mm och följer pannsteget. Vatten som kommer in under plåten rinner på pappen och ut över takfotsbeslaget. Läkten och beslaget är ritade efter Plannjas monteringsanvisning för Royal och Regent 2026-2, som kräver ett godkänt vattenavledande underlag. Skikten är förstorade, och taket fortsätter upp mot nocken utanför bilden."

## 7. Budget

Publicerad fil under 32 kB. Resten som fogspecen avsnitt 7, med `tak/plattak-snitt`. Vid granskningen på 343 px: går de fem skikten att skilja, ser bärläkterna ut som tvärsnitt och ströläkten som ett band, och syns pennans linje gå ut över beslaget?

## 8. Godkännande

Godkänd 2026-09-29 av UX och bygge på 40 639 byte (39,7 kB), över specens 32 kB men under sajtens gräns 40 kB (40 960 byte, DESIGN.md avsnitt 7). Nio etiketter på 122 tecken väger cirka 35 kB som banor, och bilden läses ändå. Filen serveras som `<img loading="lazy">` med hash och `immutable`-cache och väger inget i sidans HTML, så etiketterna kortas inte för bytens skull. Bilden har ingen marginal kvar: en tionde etikett eller en längre lydelse kräver att en annan stryks, P9 först.
