# Korrektur, /rakna/u-varde/, varv 7

Läst 2026-09-28. Bara svenskan: grammatik, meningsbyggnad, idiom och kommatering. Röst, innehåll och sökbarhet bedöms inte här.

## Kontroll av varv 6

Alla tre rättelserna är införda och korrekta:

- u-varde.ts, battre-men-over (nu rad 905–906): rubriken tar namnet genom namnIRubrik, så Vindsull blir ”lösull”: ”Lägg på 190 mm lösull totalt, 90 mm utöver de 100 du lagt in, så kommer U-värdet ner till 0,13”.
- u-varde.ts, regeln gradtimmar (rad 1013): ”… men drar inga gränser mot södra och norra Sverige, så du får själv välja den del av landet som stämmer bäst med din ort.”
- u-varde.mdx rad 192: ”Mellansverige, med Örebro, Västerås och Uppsala som Rockwools exempel”.

Två av gränsfallen är också åtgärdade: daggpunktsmeningen i klarar (u-varde.ts rad 880) lyder nu ”… för att se att fukt inte fälls ut inne i väggen”, och u-varde.mdx rad 160 lyder ”vilket är rätt håll att fela åt”.

## Rubrikerna prövade med verkliga tal

Alla varianter i TEXT.besked har lästs med insatta värden. Dessa är korrekta:

- bara-u-klarar: ”U-värdet 0,120 klarar redan Boverkets krav på 0,13”
- bara-u-over: ”Lägg på 300 mm mineralull, så kommer U-värdet ner till 0,13” och ”U-värdet 0,216 ligger över Boverkets krav på 0,13”
- ingen-forbattring: ”U-värdet efter ska vara lägre än 0,184, men du skrev 0,200”
- klarar: ”Vinden klarar redan kravet på 0,13, och 100 mm lösull till sparar 490 kr om året”, ”Vinden klarar redan kravet på 0,13, och med 100 mm lösull till blir U-värdet 0,090”, ”Fönstret klarar redan kravet på 1,1, och med U-värdet 0,90 sparar du ändå 300 kr om året”, ”Fönstret klarar redan kravet på 1,1, och efter jobbet blir U-värdet 0,90”, ”Lägger du på 300 mm lösull klarar du kravet på 0,13 och sparar 2 801 kr om året”, ”Lägger du på 95 mm stenullsskivor klarar du kravet på 0,18 med U-värdet 0,170”, ”Efter jobbet klarar du kravet på 0,13 och sparar 2 271 kr om året”
- klarar-gamla: ”U-värdet 1,15 räcker enligt de gamla reglerna men inte enligt de nya, som kräver 1,1”
- battre-men-over: ”Lägg på 115 mm stenullsskivor totalt, 20 mm mer än de 95 mm som står ifyllda, så kommer U-värdet ner till 0,18”, ”Lägg på 190 mm lösull totalt, 90 mm utöver de 100 du lagt in, så kommer U-värdet ner till 0,13”, ”Lägg på 115 mm Rockwool Flexibatts totalt, 20 mm utöver de 95 du lagt in, så kommer U-värdet ner till 0,18”, ”U-värdet går ner från 0,400 till 0,250, men kravet är 0,18”

Felen sitter i två av namnen som namnIRubrik lämnar över till mallarna, se u-varde.ts nedan.

## src/pages/rakna/u-varde.astro

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 597–600 | `</a>`, radbrytning, `, {k.last}` renderas som ”Boverket, BFS 2026:9, bilaga 2 tabell 6 , 2026-09-22” (Astro gör radbrytningen till ett mellanslag, vilket kommentaren på rad 549 i samma fil också säger) | `<a href={k.url} rel="nofollow" class={LANK_KLASS}>{k.titel}</a>, {k.last}` på en rad, så att det blir ”Boverket, BFS 2026:9, bilaga 2 tabell 6, 2026-09-22” | kommatering (mellanslag före komma) |

Ingressen, kortsvaret, SKISS_BILDTEXT, STEG_SKIKT, STEG_KANT_U, STEG_FONSTER_DORR, FAQ-svaren, STANDARDVARNING och DELATEXT är korrekta.

## src/components/kalkyl/UVardeForm.astro

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| – | – | – | – |

Komponenten har ingen egen text utöver ”Räkna ut”, ”mm”, ”m²” och ”W/m²K”. Reglarnas alternativ (”Skikt 2, Mineralull utan märke”) läses rätt.

## src/lib/kalkyl/u-varde.ts, TEXT och MATERIAL

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 781–784 (namnIRubrik) | Cellplast utan märke går till materialIMening och behåller ”utan märke”, så rubriken blir ”Lägg på 150 mm cellplast utan märke totalt, 50 mm utöver de 100 du lagt in, så kommer U-värdet ner till 0,18” och ”Lägger du på 100 mm cellplast utan märke klarar du kravet på 0,18 …”. Det läses som ett råd att köpa omärkt cellplast. | ”Lägg på 150 mm cellplast totalt, 50 mm utöver de 100 du lagt in, så kommer U-värdet ner till 0,18” (cellplast-okand genom materialIForslag, som mineralull-okand, med ” utan märke” bortskuret) | meningsbyggnad (egenskapen hos listans post blir ett råd i meningen) |
| 781–784 (namnIRubrik) | De korta namnen med parentes går rakt in i rubriken: ”Lägg på 270 mm inblåst lösull (stenull) totalt, 70 mm utöver de 200 du lagt in, så kommer U-värdet ner till 0,13”, ”Lägger du på 300 mm utlagd lösull (glasull) klarar du kravet på 0,13 …”, ”Lägg på 260 mm inblåst lösull (cellulosa) totalt, …”. ”Lägg på … utlagd lösull” säger samma sak två gånger, och parentesen gör materialet till en inskjuten kommentar mitt i uppmaningen, vilket kommentaren på rad 779 själv konstaterar för Vindsull. | ”Lägg på 270 mm lösull av stenull totalt, 70 mm utöver de 200 du lagt in, så kommer U-värdet ner till 0,13”, ”Lägger du på 300 mm lösull av glasull klarar du kravet på 0,13 …”, ”Lägg på 260 mm cellulosa totalt, …” (rubrikord för stenull-granulate: ”lösull av stenull”, glasull-fyllupp: ”lösull av glasull”, cellulosa: ”cellulosa”, samma form som ”Lösull av stenull kostar där …” i regeln aterbetalning-bara-ull) | meningsbyggnad (parentes och dubblerat verb i rubriken) |
| 933 | ”Räknaren tar högst ${max} skikt.” blir ”Räknaren tar högst 6 skikt.” | ”Räknaren tar högst sex skikt.” | stavning (räkneord under tretton skrivs med bokstäver) |
| 945 | ”Räknaren tar högst ${max} lager att lägga till.” blir ”Räknaren tar högst 2 lager att lägga till.” | ”Räknaren tar högst två lager att lägga till.” | stavning (räkneord) |
| 981 (regeln tak-kallvind) | ”… räknas bara med om du väljer skiktet med ullen under ”Vilket skikt sitter mellan reglar?”.” | ”… räknas bara med om du väljer skiktet med ullen under ”Vilket skikt sitter mellan reglar?”” | kommatering (punkt efter ett citat som slutar med frågetecken) |

Resten av TEXT är korrekt: raderna under beskeden i alla kombinationer (A+B+tak, A+vägg, B+golv, fönster och dörr), fel, gorInte, regel, kolumn, aterbetalningSaknas, region, del, vp, antagande, form, spalt och darfor. MATERIAL-etiketterna och de korta namnen fungerar som listposter; felet ovan gäller bara när de korta namnen står i en mening. Elprisregeln läses med insatta värden som ”… SCB:s genomsnitt för juli till december 2025, för hushåll med 5 000 till 14 999 kWh per år, med elhandel, nätavgift, energiskatt och moms inräknade.” Den är korrekt men tung.

## src/lib/kalkyl/register.ts, posten u-varde

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| – | – | – | – |

## src/content/kunskap/el/u-varde.mdx, lambdatabellen och gradtimmestabellen

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| – | – | – | – |

Lambdatabellen (rad 141–156), källraden rad 158, gradtimmestabellen (rad 190–194) och källraden rad 196 är korrekta.

## src/content/guider/el/tillaggsisolera-vind.mdx, stycket före verktygskortet

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| – | – | – | – |

Stycket på rad 117 är korrekt. ”Den” syftar på räknaren och det sista ”den” på tiden, och båda syftningarna går att läsa entydigt.

## Summering

6 fel: 1 i u-varde.astro, 0 i UVardeForm.astro, 5 i u-varde.ts (den andra raden om namnIRubrik gäller tre material), 0 i register.ts, 0 i u-varde.mdx och 0 i tillaggsisolera-vind.mdx. Texten är i stort korrekt svenska. Rubrikerna med cellplast utan märke och med lösull i parentes syns direkt i resultatspalten så fort läsaren väljer något annat än förvalet, och mellanslaget före kommat syns i källistan på varje svar. Inget fullt varv till behövs. Det räcker att kontrollera de rättade raderna och läsa om rubrikerna med de nya rubrikorden.
