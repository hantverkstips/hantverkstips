# Spec: snedtak isolerat inifrån, i snitt längs takfallet

UX och bygge, 2026-09-30. Beställd av koordinatorn som huvudbild för `src/content/guider/el/isolera-tak.mdx` (utkast), där platshållaren i frontmatter väntar på `el/snedtak-inifran.svg`. Checklistan är `docs/briefer/seo-checklista-2026-09-30/isolera-tak.md` avsnitt 8, faktabladet `docs/briefer/faktablad/guider-isolera-tak.md` avsnitt 16. Handen, papperet, ledarna, byglarna och pannorna är desamma som i `src/assets/illustrationer-kallor/tak/takfot-snitt.svg`, som har samma taklutning (0,40); läs den först och skriv i samma form. Allt som inte står här gäller som i `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3 (ram, papper, tokens), 5 (handskrift och ledare) och 8 (tillstånd).

## 1. Vad bilden ska säga

Ett snedtak som isoleras inifrån har en luftspalt kvar under råsponten, och luften går in vid takfoten och ut vid nocken. Luftens väg i penna är den enda saken som pekar. Skikten under spalten får namn i den ordning sidan går igenom dem, och hela paketet får ett mått och ett U-värde.

**Nyckeltalet är U-värde 0,13**, med gul markering en gång.

| Skikt, utifrån och in | Mått | Källa |
|---|---|---|
| Råspont | minst 20 mm | TräGuiden, tegelpannor |
| Luftspalt | 25 mm (Rockwool: minst 20) | TräGuiden, betongpannor; Rockwool snedtak |
| Luftningsläkt | 25 × 23, vid takstolens överkant och mitt i facket | TräGuiden, betongpannor |
| Vindskydd | 3,2 mm hård träfiberskiva | TräGuiden, betongpannor |
| Isolering | 250 mm mellan takstolar 45 × 220 c 1 200 | Rockwool tabell A; TräGuiden |
| Ångspärr | 0,20 mm, 200 mm överlapp på takstol | TräGuiden; Rockwool |
| Installationsskikt | 45 × 70 c 400, 70 mm isolering | TräGuiden; Rockwool tabell A |
| Gips | 13 mm | Rockwool (vindsbjälklag) |
| Byggdjup | 361 mm innanför råsponten (25 + 3,2 + 250 + 0,2 + 70 + 13) | faktabladet avsnitt 4, egen summa |
| U-värde | 0,13 | Rockwool tabell A |
| Nock | öppning cirka 30 mm före nockbrädan | TräGuiden; Rockwool inredd vind |
| Takfot | insektsnät 2,5 mm | TräGuiden, inklädnad av takfot |

## 2. Beslut

- **Snitt längs takfallet, genom ett fack mellan två takstolar**, sett från gaveln. Då syns spalten hela vägen från takfot till nock. Takstolen bakom ritas inte: i takfotsskissen lästes dess kontur som en lös diagonal och ströks. Luftningsläkten löper längs takfallet och syns därför inte i snittet; den är spaltens höjd och står i bildtexten.
- **Installationsskiktets reglar går tvärs takstolarna** och syns därför som små tvärsnitt längs bandet. Det är det som gör skiktet begripligt.
- **Inte skalenligt.** Skikten är förstorade, vindskyddet mest. Måttet 361 mm står på bygeln, inte i geometrin.
- **Etiketter bara på fyra skikt.** Råsponten, gipsen, pannorna och insektsnätet ritas men namnges inte; bildtexten gör det. Fler etiketter i 24 px ryms inte, och filen skulle gå över budgeten (en konverterad bokstav väger cirka 270 byte).

## 3. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/el/snedtak-inifran.svg` | Ny källa med `<text>` |
| `src/assets/illustrationer/el/snedtak-inifran.svg` | Skrivs av `npm run illustrationer` |

Rör inga andra filer. Särskilt inte `src/content/` (hantverkaren arbetar i sidan nu; frontmatter byter UX och bygge själv efter godkännandet), inte `src/assets/illustrationer-kallor/fukt/` (en annan illustratör ritar där samtidigt), inte komponenter, skript eller `global.css`.

## 4. Motivet, koordinater

Takfallet stiger åt vänster: nocken uppe till vänster, takfoten nere till höger. Rummet under snedtaket nere till vänster, himlen uppe till höger. Koordinaterna är en startpunkt; flytta högst 8 enheter om en etikett kräver det, men behåll ordningen och tjockleken på skikten.

**Råspontens undersida är R(x) = 236 − 0,40 × (520 − x).** Stödpunkter: R(92) = 64,8, R(200) = 108, R(300) = 148, R(400) = 188, R(500) = 228, R(520) = 236, R(556) = 250,4. Varje skikt är en linje parallell med R, förskjuten d enheter lodrätt (plus är nedåt, in mot rummet). Linjerna har darr enligt DESIGN.md avsnitt 7 som i förebilden.

| Del | d (lodrätt från R) | x | Stil |
|---|---|---|---|
| Pannor | ovansida −28 | 92 till 568 | blyerts 2, raka plattor som överlappar med en kort nos nedåt i nedre änden, form som i `takfot-snitt.svg`; den nedersta går förbi takfotsbrädan till x 568 |
| Bärläkt | −23 till −17 | små rektanglar 10 breda var 80:e enhet i x | blyerts 2 |
| Ströläkt | −17 till −9 | 102 till 556 | blyerts 2 |
| Råspont med papp | −9 till 0 | 102 till 556 | blyerts 2; ovankanten är papplinjen |
| Luftspalt | 0 till 16 | 92 till 500, öppen i båda ändar | tom |
| Vindskydd | 16 och 21, två linjer | 92 till 500 | blyerts 2 |
| Isolering | 21 till 86 | 92 till 500 | skraffering som i förebilden, blyerts-2 1,25, en `<path>` per rad, 4 enheter från konturer och lappar; ingen egen kontur |
| Ångspärr | 87 | 92 till 500 | blyerts-2 3,5, som ångspärren i `el/vind-takfot.svg` |
| Installationsskikt | 88 till 112 | 92 till 500 | reglarnas tvärsnitt som parallellogram 12 breda i x, vid x 130, 200, 270, 340, 410 och 480, blyerts 2; skraffering mellan dem, en rad |
| Gips | 112 till 119 | 92 till 500 | blyerts 2 |

G(x) = R(x) + 119 är gipsens undersida, taket i rummet.

**Nocken, vänster ände.** Nockbrädan lodrät x 86–92, y 44–84, blyerts 2. De inre skikten (vindskydd till gips) slutar mot en lodrät linje vid x 92 från y 84 ner till G(92) = 184. Råspont och ströläkt slutar vid x 102, så att en **öppning på 10 enheter** står kvar mellan råspontens ände och nockbrädan: det är de cirka 30 mm. Pannorna går ända in till nocken, och en nockpanna läggs som en båge över nocken från (78, 40) till (112, 40) med högsta punkt y 26. Ingen motstående takhalva; bilden slutar vid nocken.

**Takfoten, höger ände.** Ytterväggen: utsidan lodrät x 500 från y 244 ner till y 360 (linjen sluter också de inre skikten), insidan x 470 från G(470) = 335 ner till y 360. Råspont, ströläkt och pannor fortsätter ut över väggen. Takfotsbrädan lodrät x 548–556 från råspontens undersida ner till y 276. **Insektsnätet** vågrätt vid y 276 från x 500 till x 548: blyerts-2 1,25 streckad linje med korta tvärstreck var 6:e enhet. Utrymmet mellan väggen, råsponten, brädan och nätet är öppet och leder in i spalten.

**Snickarpennan, den enda saken som pekar.** Luftens väg, penna 2,5 px, runda ändar, en mjuk och svagt darrande kurva: in underifrån vid (526, 352), upp genom nätet till cirka (526, 290), in åt vänster till spaltens mitt vid (500, 236), längs spalten på R(x) + 8 hela vägen till x 110, och upp genom öppningen vid nocken där den slutar med ett öppet pilhuvud (två ben om 9) med spetsen vid (97, 50), under nockpannan. Inget annat i penna utom marginallinjen och L1 med sin ledare.

**Måttbygeln 361 mm** i blyerts-2 1,5, vinkelrätt mot taket: från råspontens undersida vid (400, 188) till gipsens undersida vid (359, 290,6), med korta tvärstreck parallella med taket i båda ändarna. Bygeln bryts 3 enheter på var sida om luftens väg där den korsar spalten.

## 5. Handskriften

Caveat 500, 24 px, inget under. Ledare i blyerts-2 1,25 px, raka, som slutar med en liten fylld prick r 2 inne i skiktet de pekar på. En ledare får korsa skikt men aldrig en annan ledare, bygeln eller luftens väg. Papperslapp i `#f5efe3` bakom etiketter som står i skraffering. **Etikettexten är högst 73 tecken utan mellanslag, de sju nedan.** Orden är sidans egna; alla står i `isolera-tak.mdx`.

| Nr | Text | Färg | Placering |
|---|---|---|---|
| L1 | luftspalt 25 mm | penna | i himlen, baslinje y 84, x 300–440; ledare i penna 1,25 från (330, 92) ner till luftens väg vid (310, 160) |
| L2 | vindskydd | blyerts-2 | i rummet, vänsterställd x 50, baslinje y 240; ledare från (140, 232) till vindskyddet vid (170, 115) |
| L3 | ångspärr | blyerts-2 | i rummet, x 50, baslinje y 266; ledare från (132, 260) till ångspärren vid (230, 207) |
| L4 | installationsskikt | blyerts-2 | i rummet, x 50, baslinje y 292; ledare från (204, 286) till skiktet mellan två reglar vid (305, 250) |
| L5 | isolering | blyerts-2 | inne i isoleringen på lapp, x 258–336, baslinje y 206; ingen ledare |
| M1 | 361 mm | blyerts-2 | i rummet till vänster om bygelns nedre ände, x 262–330, baslinje y 316 |
| K1 | U-värde 0,13 | blyerts på tumstock | i rummet under M1, x 214–330, baslinje y 344; ingen ledare |

Tecken utan mellanslag: 13 + 9 + 8 + 18 + 9 + 5 + 11 = 73. Det ger ungefär 26 kB. **Går filen ändå över 28 kB stryks L2 (vindskydd)**, och det rapporteras. Tumstock `#e8b830` 65 procent bakom K1, roterad 1 till 2 grader; ingen annan markering. Står etiketterna för tätt för 24 px: säg till, krymp inte.

## 6. Alt, aria-label och bildtext

Texterna är hantverkarens och står redan i sidans frontmatter. Ändra dem inte.

- `aria-label` på roten, ordagrant `bildAlt`: "Snitt genom ett snedtak isolerat inifrån, från råsponten och luftspalten ut till installationsskiktet och innertaket."
- `bildtext` (sidan): nämner råspont, luftspalt 25, vindskydd, 250 isolering, ångspärr 0,20, 70 installationsskikt, 13 gips och U-värdet 0,13. Bilden får inte visa ett tal som bildtexten inte har, utom 361 mm, som står i sidans text.

## 7. Budget och kontroller

- Publicerad fil **under 28 kB, 28 672 byte** (1 kB = 1 024 byte). Källan under 10 kB.
- Ingen `<text>` i den publicerade filen, ingen `currentColor`, ingen `var(--`. Rotens `width` och `height` lika med viewBox 600 × 360.
- Kör och redovisa: `npm run illustrationer` (rapportera om den skriver någon annan fil än din; en annan illustratör kör samma skript för `fukt/krypgrund-matning` samtidigt, och dess fil får skrivas), `npx astro check --minimumSeverity error`, `node --experimental-strip-types --test scripts/test-illustration.mjs`, byte för båda filerna, `grep -c "<text"` på den publicerade. Rendera den publicerade filen till PNG i 343 px bredd med sharp till scratchpad och titta: känns det igen som ett tak med pannor på en sekund, går luftens väg att följa från takfoten till nocken, skiljer sig vindskyddet, isoleringen, ångspärren och installationsskiktet åt, går alla etiketter att läsa. **Kör inte `npm run build`**, committa inte.

## 8. Tillstånd

Ifyllt är det enda. En saknad fil eller fel mått ger byggfel i `Illustration.astro`, vilket är rätt. Bilden visas som huvudbild efter kortsvaret, 343 px på 375 px, och blir sidans delningsbild eftersom den ligger i `bild`.

## 9. Godkännande

UX och bygge rendrar på 343 px och granskar mot avsnitt 1–7 och DESIGN.md avsnitt 7. Därefter byter UX och bygge platshållaren i frontmatter mot `bild: ../../../assets/illustrationer/el/snedtak-inifran.svg` och rör ingen annan rad.

Godkänd av UX och bygge 2026-09-30, publicerad fil 28 538 byte. Godkända avvikelser: pannorna lutar 0,225 med nos 15 så att de trappar som i takfotsskissen; bärläkten vid x 104 till 504 var 80:e; pilhuvudets ben ±25 grader för att rymmas i öppningen vid nocken. Rättat vid granskningen: M1 flyttad till x 298, baslinje 318, rakt under bygelns nedre ände, så att 361 mm läses som bygelns mått och inte som en lös ledare. L2 står kvar. Inlagd i `isolera-tak.mdx` som `bild`.

Kontrollerat 2026-09-30: måttlinjen 361 mm går från råspontens undersida R(400) = 188 till gipsens undersida mot rummet G(359) = R(359) + 119 = 290,6, alltså hela byggdjupet innanför råsponten. Ingen ändring.
