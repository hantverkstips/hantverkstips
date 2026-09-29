# Spec: snittskiss av duschväggens skruv i träregel och i betong

UX och bygge, 2026-09-29. Beställd av koordinatorn som huvudbild för `src/content/guider/badrum/montera-duschvagg.mdx` (utkast). Checklistan är `docs/briefer/seo-checklista-2026-09-29/badrum-4.md` rad 353 och 383, faktabladet `docs/briefer/faktablad/guider-montera-duschvagg.md` avsnitt 1a (GVK § 10.2 och 10.3) och 1d (BBV 26:1 § 9, figur 29 och 30). Hantverkarens förslag: två snitt efter BBV figur 29 och 30, till vänster skruv genom kakel och tätskikt in i en regel, till höger plugg i betong med tätningsmassa i två steg; pennan pekar på tätningsmassan i tätskiktets höjd.

Handen, papperet, skrafferingen, fästmassans prickar, tätningsmassans täta prickar och ledarna är desamma som i `src/assets/illustrationer-kallor/badrum/toalettstol-fot.svg`. Läs `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3, 5, 7 och 8 och `docs/briefer/spec-skiss-toalettstol-fot-2026-09-29.md` i sin helhet; allt som inte står här gäller som där.

## 1. Vad bilden ska säga

Skruven går genom tätskiktet, och hålet tätas med massa ända in till tätskiktet. Till vänster en skivvägg där skruven bottnar i träregeln, till höger en betongvägg med plugg där massan läggs både i hålet och i pluggen. Den enda saken som pekar är tätningsmassan där den möter tätskiktet, i båda väggarna, på samma sätt som zongränsen står på två väggar i zonskissen.

Källorna: "Vid efterkommande installationer där hål ska borras igenom tätskikt, måste tätning ske i tätskiktsnivån" och "hålet fylls med tätningsmassa före plugg/skruv, så att massan tätar mot tätskiktet bakom keramiken, se figur 29 och 30" (BBV 26:1 § 9); figur 29 "Skruven ska bottna i regeln", figur 30 "Skruven ska bottna i betongen"; skivvägg: "Borra endast genom ytskikt och tätskikt", "Fyll hålet med åldersbeständig tätningsmassa", skruven "in i träregeln" (GVK § 10.3); betong: bottenhål, massa, plugg, massa i pluggen, skruv (GVK § 10.2).

**Inget nyckeltal.** Ingen källa ger ett mått för hålet, massan eller skruven. Därför ingen bygel, inget tal och ingen gul markering, samma undantag som fogskissen avsnitt 1.

## 2. Beslut: två väggar som står mot varandra

Halvorna speglas, så att skivväggen står till vänster med rummet åt höger och betongväggen står till höger med rummet åt vänster. Rummet blir en gemensam yta i mitten, som två väggar i ett duschhörn sedda uppifrån i snitt, och etiketten för tätningsmassan kan stå en gång i mitten med en ledare till varje vägg. Ingen delningslinje behövs.

## 3. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/badrum/duschvagg-skruv.svg` | Ny källa med `<text>` |
| `src/assets/illustrationer/badrum/duschvagg-skruv.svg` | Skrivs av `npm run illustrationer` |

Rör inga andra filer, inte heller sidan.

## 4. Motivet, koordinater

Snitt genom väggarna, skikten lodräta och i hela höjden y 0–360. **Inte skalenligt.** Flytta högst 8 enheter om en etikett kräver det, behåll ordningen och tjockleken.

**Vänster vägg, skiva på träregel** (utifrån och in mot rummet):

| Skikt | x | Stil |
|---|---|---|
| Träregel | 44–100 | blyerts 2 på insidan (x 100); två eller tre lodräta, svagt vågiga fiberlinjer i blyerts-2 1,25 som ådring. Ingen skraffering, trä är inte betong |
| Skiva | 100–118 | blyerts 2 |
| Tätskikt | 118–124, två linjer | blyerts 2 |
| Fästmassa | 124–140, glesa prickar | prickar blyerts-2 |
| Kakel | 140–160, med en cementfog (glipa 10 med tre tvärstreck) vid y 250 | blyerts 2 |
| Duschväggens profil | 160–182, y 40–330, en smal rektangel mot kaklet med skruvhålet | blyerts 2 |

Skruven vid y 150: huvud i profilen x 174–182, y 142–158; gängad stång (ett band 6 brett med små tvärstreck i blyerts-2) från x 174 genom kakel, fästmassa, tätskikt och skiva in i regeln till x 64, där den **bottnar**. Hålet genom kakel, fästmassa och tätskikt är 12 brett (y 144–156) från x 118 till x 160 och fylls runt skruven med tätningsmassa, tätt prickad i blyerts (hälften av fästmassans avstånd) som i toalettstolsskissen. I skivan och regeln finns inget förborrat hål; skruven går själv.

**Höger vägg, betong** (spegelvänd, rummet till vänster):

| Skikt | x | Stil |
|---|---|---|
| Duschväggens profil | 418–440, y 40–330 | blyerts 2 |
| Kakel | 440–460, cementfog vid y 250 | blyerts 2 |
| Fästmassa | 460–476, glesa prickar | prickar blyerts-2 |
| Tätskikt | 476–482, två linjer | blyerts 2 |
| Betong | 482–594 | kontur blyerts 2 på insidan; skraffering som i fogskissen, en `<path>` per rad, uppehåll 4 enheter runt hålet och lappar |

Hålet vid y 150, 14 brett (y 143–157), genom kakel, fästmassa och tätskikt in i betongen till x 560, ett bottenhål som inte går igenom. Tätningsmassa i två steg: massa i botten av hålet x 546–560, pluggen x 490–546 (bredd 14, tvärräfflor i blyerts-2, som i toalettstolsskissen), och massa från pluggens mynning ut genom tätskiktet och fästmassan till kaklets yta, x 440–490. Skruven från huvudet i profilen x 418–426 till x 542, inne i pluggen.

**Snickarpennan, den enda saken som pekar.** En öppen ring i penna 2,5, en kurva som inte sluter, runt tätningsmassan där den möter tätskiktet i varje vägg: vänster runt (121, 150), höger runt (479, 150), radie cirka 18. Inget annat i penna utom marginallinjen, ringarna, etiketten T7 och dess två ledare.

Rummet x 182–418 är tomt papper och bär etiketterna.

## 5. Handskriften

Caveat 500, 24 px, inget under. Ledare i blyerts-2 1,25 px utom T7:s, som är penna 1,25. Papperslapp bakom etiketter i skrafferingen. **Högst 60 tecken etikettext**.

| Nr | Text | Färg | Placering |
|---|---|---|---|
| T1 | träregel | blyerts | överst till vänster på lapp över regeln och skivan, cirka (48, 30) |
| T2 | betong | blyerts | överst till höger på lapp i betongen, cirka (500, 30) |
| T3 | skiva | blyerts-2 | rummet till vänster, cirka (200, 80), ledare till skivan vid (109, 90) |
| T4 | kakel | blyerts-2 | rummet till vänster, cirka (200, 290), ledare till kaklet vid (150, 300) |
| T5 | tätskikt | blyerts-2 | rummet till höger, cirka (320, 80), ledare till tätskiktet vid (479, 90) |
| T6 | plugg | blyerts-2 | rummet till höger, cirka (340, 290), ledare till pluggen vid (515, 157) |
| T7 | tätningsmassa | penna | mitt i rummet, cirka (236, 206), med två ledare i penna: till vänster ringens kant nära (135, 162) och till höger ringens kant nära (465, 162) |

Tecken: 8 + 6 + 5 + 5 + 8 + 5 + 13 = 50. Profilen får ingen etikett; den står mot kaklet och bär skruvhuvudet, och bildtexten säger vad den är. Fästmassan får ingen etikett. Ledarna får korsa skikt men aldrig varandra eller ringarna. Står etiketterna för tätt för 24 px: säg till, krymp inte.

## 6. Alt, aria-label och bildtext

- `aria-label` och `bildAlt` (121 tecken): "Två snitt som visar hur du monterar duschvägg med skruv i träregel eller betong och tätningsmassa i hålet vid tätskiktet."
- `bildtext`: "Till vänster går skruven genom kaklet, tätskiktet och skivan och bottnar i träregeln. Till höger sitter en plugg i betongen, och tätningsmassan läggs två gånger, först i hålet och sedan i pluggen. I båda väggarna ska massan nå fram till tätskiktet, så att det blir helt igen runt skruven. Skikten är förstorade. Källa: BBV 26:1 § 9 figur 29 och 30, GVK Säkra Våtrum 2026 § 10.2 och 10.3."

Hantverkarens alt-förslag hade formen "X: Y" och är omskrivet till en mening. Texterna ska höras av hantverkaren före publicering.

## 7. Budget och kontroller

Publicerad fil **under 28 kB, 28 672 byte**. Resten som i golvvärmespecen avsnitt 7, med `badrum/duschvagg-skruv`. Vid granskningen på 343 px: syns det att skruven bottnar i regeln till vänster och sitter i en plugg till höger, skiljer sig tätningsmassan från fästmassan, och pekar ringarna på samma sak i båda väggarna?

## 8. Tillstånd

Som golvvärmespecen avsnitt 8.

## 9. Godkännande

Godkänd 2026-09-29 av UX och bygge, granskad i 343 px: 23 053 byte, ingen `<text>`. Rättat vid granskningen: det vänstra hålet är 16 brett (y 142–158) i stället för 12, eftersom tätningsmassan inte syntes runt skruven, och ett ensamt skrafferingsstreck ovanför lappen "betong" är borttaget. Godkända avvikelser: "träregel" vid x 46; gängorna som snedstreck. Inlagd som `bild` på duschväggssidan.
