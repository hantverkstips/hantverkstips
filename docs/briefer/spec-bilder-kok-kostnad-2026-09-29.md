# Spec: bilderna till /rakna/kok-kostnad/

UX och bygge, 2026-09-29. Gäller avsnitt 9 i `docs/briefer/spec-kalkyl-kok-kostnad-2026-09-29.md`. Två filer, en utvecklare. Reglerna är `docs/DESIGN.md` avsnitt 7 (Varumärkesillustrationen, Skisserna, Illustrationer för verktygen); står något inte här gäller de. Förebilderna, läs dem först:

- varumärkesbilden: `src/assets/illustrationer/rakna/varumarke/badrum-kostnad.svg` (samma ram, samma transform, samma golv och pennstreck)
- skissen: `src/assets/illustrationer-kallor/rakna/badrum-kostnad.svg` (samma papper, marginal, färger, tumstocksrektangel, textgrupp)

## 1. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer/rakna/varumarke/kok-kostnad.svg` | ny, ingen `<text>`, ingen källfil |
| `src/assets/illustrationer-kallor/rakna/kok-kostnad.svg` | ny källa med `<text>` |
| `src/assets/illustrationer/rakna/kok-kostnad.svg` | skrivs av `npm run illustrationer`, aldrig för hand |

Rör inga andra filer. Kör inte `npm run build`, `npm run delningsbilder` eller något som skriver under `public/`. Registerposten läggs inte in.

Tokens i hex, aldrig `currentColor` eller `var(...)`: papper `#f5efe3`, linje `#c9bca3`, blyerts `#2a2521`, blyerts-2 `#625a50`, penna `#ad3519`, tumstock `#e8b830`.

## 2. Varumärkesbilden

600 × 360, `viewBox="0 0 600 360"`, `role="img"`, `aria-label` som beskriver motivet i en mening (ingen text syns). Transparent bakgrund. Konturer blyerts 2 px, `stroke-linecap="round"`, `stroke-linejoin="round"`. Tumstock den enda fyllningen. Ingen linjering, ingen skraffering, ingen text, inga tal. Kommentaren överst som i badrummets fil: motiv, bbox, kvot, transform, tokens.

**Motivet:** en köksvägg rakt framifrån. Ritas i egen skala, x 0–560, y 0–322 (golvet y 298, pennstrecket y 311–321, som badrummet), och läggs ut med `transform="translate(24.98 22.71) scale(0.9822)"` i yttre `g`. Räkna om transformen om bboxen avviker, så att bredden blir 90 till 94 procent av 600 och kvoten 1,72 ± 0,05.

| Del | Koordinater (motivets skala) | Stil |
|---|---|---|
| Golvet | `M0,298 Q280,300 560,298` | blyerts 2 |
| Sockeln | rak linje y 286 från x 16 till x 544, med korta lodräta ändar ner till golvet vid x 16 och x 544 | blyerts 2 |
| Bänkskåpen | tre stommar sida vid sida, x 10–190, 190–370, 370–550, y 170–286. Delningarna x 190 och x 370 är lodräta linjer | blyerts 2 |
| Bänkskåpens luckor | två per skåp, 4 enheter luft i mitten och 3 mot stommens kant: skåp 1 luckor x 13–98 och 102–187, skåp 2 x 193–278 och 282–367, skåp 3 x 373–458 och 462–547, alla y 174–282 | blyerts 2 |
| Handtagen, bänkskåp | ett kort lodrätt streck per lucka, 22 lång, 8 in från luckans kant mot skåpets mitt, y 186–208 (vänster lucka x = högerkant − 8, höger lucka x = vänsterkant + 8) | blyerts 2 |
| Bänkskivan | rektangel x 0–560, y 150–170, fylld tumstock, kontur blyerts 2. Det enda gula | tumstock + blyerts 2 |
| Diskhon | i bänkskivans överkant mitt över skåp 2: överkantens linje bryts x 236–324 och ersätts av en grund skål `M236,150 Q238,164 250,164 L310,164 Q322,164 324,150`; skålen och kanten i blyerts 2, det gula klipps bort inuti skålen (clipPath, ingen pappersfylld yta) | blyerts 2 |
| Blandaren | pelare från bänkskivan upp och pip mot hon: `M296,150 L296,118 Q296,106 284,106 L270,106 Q264,106 264,114 L264,122`, och en kort spak `M296,124 L308,116` | blyerts 2 |
| Väggskåpen | två, x 10–190 och x 370–550, y 0–104, ingen skåp över hon | blyerts 2 |
| Väggskåpens luckor | två per skåp som bänkskåpen, x som skåp 1 och skåp 3 ovan, y 4–100 | blyerts 2 |
| Handtagen, väggskåp | ett kort lodrätt streck per lucka, 22 lång, samma x-regel som bänkskåpen, y 74–96 | blyerts 2 |
| Pennstrecket | `M170,316 Q260,321 350,314 Q440,311 520,316`, penna 4,5, runda ändar | penna 4,5 |

Raka linjer får darra som i badrummets fil (kvadratisk kurva, kontrollpunkten högst 2 enheter från linjen); luckorna får vara raka rektanglar om darret gör filen över 12 kB. Inget annat: inga kastruller, ingen häll med plattor, ingen fläkt, inget kakel, inga lådor, inget fönster.

**Krav:** under 12 kB (12 288 byte). Bbox inklusive linjebredd, mätt på den renderade bilden: bredd 90 till 94 procent av 600, höjd 88 till 90 procent av 360, kvot 1,72 ± 0,05.

## 3. Skissen

600 × 360, blyerts på linjerat papper, allt från badrummets källa: `pattern id="linjerat"` 48 × 24, marginallinjen `M40,0 V360` penna 0,75 opacitet 0,35. `aria-label` = `KOK_TEXT.skissAlt` ordagrant:

"Blyertsskiss av en köksvägg på 4 meter där en lucka lyfts av, med kostnaden för att renovera köket med nya luckor"

**Motivet:** skåpraden i elevation, 4 meter = 360 enheter, x 60–420. Fyra bänkskåp och fyra väggskåp, två luckor vardera: 16 luckor, samma antal som standardvärdet och bildtexten. Den högra luckan i det högra bänkskåpet är lyft av och ritas i penna till höger om raden.

| Del | Koordinater | Stil |
|---|---|---|
| Golvet | y 312 från x 50 till x 440 | blyerts 2 |
| Sockeln | y 298, x 64–416, lodräta ändar ner till golvet | blyerts 2 |
| Bänkskåpen | x 60–150, 150–240, 240–330, 330–420, y 226–298 | blyerts 2 |
| Bänkskåpens luckor | två per skåp, 2 luft i mitten och 1 mot kanten: x 61–104 och 106–149 i skåp 1, sedan +90 per skåp; y 228–296. I skåp 4 ritas bara den vänstra (x 331–374) | blyerts 2 |
| Handtag, bänkskåp | lodrätt, 14 lång, 6 in från mittkanten, y 234–248 | blyerts 2 |
| Bänkskivan | x 56–424, y 214–226, bara kontur | blyerts 2 |
| Väggskåpen | x 60–420 i samma fyra delningar, y 104–168 | blyerts 2 |
| Väggskåpens luckor | som bänkskåpen, y 106–166 | blyerts 2 |
| Handtag, väggskåp | lodrätt, 14 lång, 6 in från mittkanten, y 146–160 | blyerts 2 |
| Stommen där luckan saknas | skåp 4, x 376–420: stomsidans insida som en lodrät linje x 414 från y 226 till y 298 (sidan blir ett band 6 brett mot ytterlinjen x 420), och ett hyllplan y 262 från x 376 till x 414 | blyerts 2 |
| Måttbygeln | y 84, x 60–420, lodräta ändar y 76–92 och hjälplinjer ner till väggskåpens överkant; bygeln bruten x 222–258 för texten | blyerts-2 1,5 |

**Snickarpennan, den enda saken som pekar:** den avlyfta luckan och en böjd pil från stommen till den.

| Del | Koordinater | Stil |
|---|---|---|
| Luckan | rektangel 43 × 68 med mitten i (486, 262), `transform="rotate(10 486 262)"` | penna 2,5 |
| Gångjärnskopparna | två cirklar r 5 på luckan, 9 in från luckans vänstra kant, 12 in från över- och underkant, i luckans rotation | penna 2,5 |
| Pilen | `M424,276 Q446,296 458,282` med en öppen pilspets vid (458, 282) | penna 2,5 |

Inget annat i penna utom marginallinjen och etiketten "lucka".

**Handskriften,** Caveat 500, 24 px, i en `<g>` som i badrummet. Orden står redan i hantverkarens texter på sidan (anges); inga andra ord.

| Nr | Text | Ord på sidan | Färg | Placering (baslinje) | Ledare, blyerts-2 1,25 |
|---|---|---|---|---|---|
| E1 | `4 m` | `skissBildtext` "4 meter", bänkskivans fält i meter | blyerts-2 | mitt i bygelns lucka, x 225, y 90 | ingen |
| E2 | `bänkskiva` | `post.bankskiva` "Bänkskiva" | blyerts | x 72, y 206, i luckan mellan väggskåpen och skivan | ingen |
| E3 | `stomme` | `skissBildtext` "Stommen" | blyerts | x 344, y 344, under golvet | från (390, 326) upp till (398, 290) |
| E4 | `gångjärn` | `skissBildtext` "gångjärn" | blyerts | x 488, y 204 | från (500, 210) till kopparnas övre cirkel |
| E5 | `lucka` | `skissBildtext` "Luckan", `post.luckor` | penna | x 530, y 268, höger om den avlyfta luckan | ingen |
| E6 | `16 898 kr` | spalten vid standard, `kokKortsvarVarden().luckor.attBetala` | blyerts | x 466, y 336 | ingen |

**Nyckeltalet:** tumstocksrektangel bakom E6 som i badrummet, `fill-opacity="0.65"`, roterad −1,5 grader om sin mitt, 6 utanför textens bredd på var sida, höjd 30. Ingen annan markering. Talet är räknat, inte skrivet: ändras konstanterna ändras talet här, och det står i kommentaren överst.

Kommentaren överst som i badrummets källa: motivet, att raden är 4 m och 16 luckor som standardvärdet, att det enda i penna är den avlyfta luckan med pilen, att etiketterna är ord ur hantverkarens texter 2026-09-29, tokens.

Kolliderar en etikett med en linje eller en annan etikett flyttas etiketten högst 12 enheter; räcker det inte, rapportera, ändra inte motivet.

**Krav:** den publicerade filen under 40 kB (40 960 byte), ingen `<text>` kvar efter `npm run illustrationer`.

## 4. Kontroller utvecklaren kör

1. `npm run illustrationer`; rapportera raden för `rakna/kok-kostnad` och storleken på båda publicerade filerna i byte.
2. `grep -c "<text" src/assets/illustrationer/rakna/kok-kostnad.svg src/assets/illustrationer/rakna/varumarke/kok-kostnad.svg`: 0 och 0.
3. Rendera båda till PNG i 343 px bredd med sharp (finns i node_modules) och titta på dem. Skissen på vit bakgrund, varumärkesbilden på papper `#f5efe3`. Lägg PNG:erna i scratchpad, inte i projektet.
4. Varumärkesbildens bbox ur den renderade alfakanalen (sharp `trim` eller egen skanning) i procent av bredd och höjd, och kvoten.
5. `node --experimental-strip-types --test scripts/test-illustration.mjs` grönt.

## 5. Godkännande (jag)

Varumärkesbilden: förstås som ett kök på en sekund vid 343 px, bänkskivan är den gula formen och det enda gula, luckornas handtag syns, inget blir gröt, 90–94 procent bredd, kvot 1,72 ± 0,05, under 12 kB. Skissen: 16 luckor, "4 m" på bygeln, en sak i penna, etiketterna läsbara vid 343 px (24 px i skalan), nyckeltalet 16 898 kr är det enda gula, under 40 kB, ingen `<text>`.
