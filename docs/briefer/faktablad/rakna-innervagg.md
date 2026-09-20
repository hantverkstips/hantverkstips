# Faktablad: /rakna/innervagg/

Ur `src/pages/rakna/innervagg.astro`, `InnervaggForm.astro`, `src/lib/kalkyl/innervagg.ts` och registret, lästa 2026-09-20. Inget här ändras i sak.

## Metadata och namn

- SLUG innervagg, VERKTYGSNAMN "Regelkalkylator". Sidan har reklam={true}, butikNamn och två produktkort (essve-fzb-39x41 med forVem=packRad, makita-dfr550zx1 med forVem "Från ungefär 300 skruv lönar sig en automat."). Checklistan säger att bara avfuktare och gipsskruv har reklamband, men den här sidan har det också. Rörs inte.
- Title i dag 57 tecken. Krav: under 44 eller högst 52, reglar + innervägg/vägg, inte tre första orden lika "Bygga innervägg med".
- Description 138. Behåll innervägg och materialåtgång. "med källa bakom varje tal" får gå.
- H1 nästan samma som title; H1 ska vara löftet.
- Registret: namn "Räkna reglar, gips och skruv till väggen" (bär reglar, gips, skruv, behålls). rad substantivramsa.

## Formuläret

- langd Väggens längd m, hjälp: mät längs strecket på golvet vägg till vägg. hojd Rumshöjd m, hjälp: golv till tak, reglarna kapas 15 mm kortare.
- regel radio REGELDIMENSIONER: 45x70 "45 × 70 mm, rumsdelare i normal takhöjd", 45x95 "45 × 95 mm, vägg över 3 m eller tjockare ull" (kompakt visar bara delen före kommat).
- lag radio SKIVLAG: 1 "Ett lag per sida", 2 "Två lag per sida".
- cc radio REGELAVSTAND: 400 "c 400 mm", 450 "c 450 mm", 600 "c 600 mm". Hjälp: c-måttet är avståndet mellan reglarnas mitt; Svenskt Trä anger c 400 för 1 200-skivor; c 600 först vid två lag med förskjutna skarvar; länk /inomhus/bygga-innervagg/.
- dorrar Dörröppningar stycken, hjälp: varje öppning 0,9 m, regel på vardera sidan och avväxling över (liggande regeln som bär väggen ovanför dörren).
- ull radio Ja/Nej, legend "Mineralull 45 mm".
- Knapp Räkna ut.

## Konstanter (rörs inte)

- Skiva 1 200 × 2 500 mm = 3 kvm, 12,5 mm (Norgips, Gyproc). Skruv c 200 kant, c 300 fält (Norgips, Svenskt Trä). Innerlager c 750 (Norgips, utan brandkrav). SPILL_SKIVOR 0,10, SPILL_VIRKE 0,05 (antaganden; guiden lägger 10 på virket, kalkylatorn 5 eftersom den räknar regel för regel). Handelslängder 2,4 2,7 3,0 3,6 4,2 4,8 (antagande). Kapmån 15 mm (Gyproc). Dörr 0,9 m (antagande), regelbredd 0,045, avväxling 0,99 m, två extra reglar per dörr. Ullbredd 455 vid c 450, 610 vid c 600, ingen vid c 400 (Norgips). Pack 1 000 (Essve FZB 3,9 × 41). Skruvlängd: ett lag "3,9 × 41 mm med grov gänga", två lag "45 eller 51 mm med grov gänga" (Norgips tumregel 20 mm ner i trä, via /inomhus/gipsskruv/).
- STANDARD 4 m, 2,5 m, 45x70, ett lag, c 400, 0 dörrar, ull ja. GRANSER längd 0,5 till 30, höjd 2 till 4, dörrar 0 till 10.
- ccStandardForLag: 1 → 400, 2 → 600.
- Skruv per kvm vid c 600 ≈ 6,9 (guiden 7).
- Fel: /längd/, /rumshöjd/, /dörröppningar/, /kortare/ ("Dörrarna tar X meter och väggen är kortare än så").

## Gör inte det här (modulen)

- c 600 under ett lag: Svenskt Trä anger c 400 för 1 200-skivor, glesare knyts till två lag med förskjutna skarvar; väggen håller men ger efter.
- Dörr: ingen skivskarv i linje med öppningens kant, Svenskt Trä förbjuder, vanligaste sprickan; L-format stycke eller flytta skarven en halv skivbredd.
- 45x70 över 3 m: Gyproc anger 45 × 95 upp till 4 m, ingen höjd för den klenare.

## Räkneexempel (standard 4 m, 2,5 m, c 400, ett lag)

11 reglar, 35,33 löpmeter, 7 skivor, 195 skruv, köp 200, 10 kvm ull utan standardbredd, handelslängd 2,7. Guidens exempel c 600: 8 reglar, 27,88 lpm (guiden 24,8 per löpmeterräkning, 6,2 lpm per meter, rymmer inte sista regeln), 7 skivor, 139 skruv, 610 mm ull. Ett 1 000-pack räcker ca 28,8 löpmeter. Två lag: 14 skivor, 184 skruv. En dörr: 10 reglar, 33,84 lpm.

## Resultatspalten i dag

Etikett "Vägg på L m, 45 × 70 mm på c X mm". Stort tal reglar, stort tal gipsskivor, rad "reglarna kapas till X m, skivorna är 1 200 × 2 500 mm". Lista: löpmeter virke (syll+hammarband, reglar, avväxling), med spill, N reglar à handelslängd ger minst spill X procent, skivor med spill + skivyta, skruv räknat/köp, packRad, skruvlängd, ull kvm + bredd eller kapa själv, reglar vid dörr. Gör inte. Länk. Dela.
Kortsvar: N lodräta reglar; virket X löpmeter syll och hammarband inräknade; N gipsskivor; köp N gipsskruv; ull kvm.

## Brödtext

- H2 id skruven-och-maskinen: skruvlängden följer antalet skivlag, antalet skruv avgör om bandet lönar sig. Två produktkort. Rad: bandet är för träregel, stålstomme = skruva för hand. Kommersiell brygga, tonas inte ner.
- H2 id materialatgang-innervagg (i dag "Materialåtgång innervägg, så räknar regelkalkylatorn", självrefererande, skrivs om, behåll materialåtgång + innervägg; ska bära "hur många reglar det går åt" och "c 450 eller c 600"): allt per löpmeter; syll och hammarband två meter virke per löpmeter; reglar = längd / c-mått + en; 4 m på c 600 = sju fack, åtta reglar. Skivor på yta, två sidor: 2,5 m tak ger 5 kvm per löpmeter, skiva 3 kvm, 1,7 skivor per löpmeter. Skruv: kant c 200, fält c 300; vid c 600 varannan regel kant; ca sju skruv per kvm. Ull en gång. Varför c 400 under ett lag: Svenskt Trä knyter glesare till dubbla lag, ett lag på c 600 ger efter, tillverkarna anger glesare utan villkoret. Spill: virke 5, skivor 10, dörrhålet dras inte av; handelslängd som spiller minst, ofta strax över rumshöjden. Länkar /inomhus/bygga-innervagg/ och /inomhus/gipsskruv/.
- H2 Så räknar vi: skiss rakna/innervagg (alt 148 tecken i dag: regelvägg framifrån, syll, hammarband, fem reglar, gipsskiva över två högra, måttbygel c 450 mellan regelmitter). Sju steg. Tabell elva rader. Efter tabellen: guiden räknar per löpmeter 6,2 lpm per meter, rymmer inte sista regeln, kalkylatorn hamnar en regel högre på kort vägg, köp efter kalkylatorn, en regel över blir kortlingar. Länk sa-testar-vi.
- Läs vidare: /inomhus/bygga-innervagg/, /inomhus/gipsskruv/. Lägg till /rakna/gipsskruv/.
- Faq: hur många reglar (längd / c-mått avrundat uppåt + en; 4 m c 600 = åtta; dörr två reglar + avväxling). c 400 eller c 600 (två lag räcker c 600; ett lag väljer verktyget c 400; Svenskt Trä mot tillverkarna; lank bygga-innervagg). Spill (virke fem, skivor tio, dörrhålet dras inte av, handelslängden som spiller minst).

## Krav ur checklistan

- Sidofraser: hur många reglar det går åt (H2 materialåtgång), c 450 eller c 600 millimeter (samma H2 + Faq), gipsskivor och skruv per löpmeter vägg (ingress), spill (Faq + tabell).
- Behåll: tabell regelavstånd/skivbredd/höjd (finns som antagandetabell), trä och stål (stål nämns bara vid bandet; verktyget räknar trä), spill i procent med skäl, materiallista per löpmeter, skruvavståndet.
- c 400 mm skrivs "c 400 mm" och förklaras en gång per sida. Längd 1 000 till 1 250.
