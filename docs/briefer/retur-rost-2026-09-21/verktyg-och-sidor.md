# Retur efter omskrivningen i Christians röst, 2026-09-21

Efterläsning av de femton sidorna under `/rakna/` och de fem fasta sidorna i `src/content/sidor/`, mot
`docs/briefer/seo-checklista-2026-09-20/verktyg-och-sidor.md` punkt för punkt.

Listan tar bara upp det som måste ändras för sökningen: saknad fras på angiven plats, namn i registret som
inte längre bär frasen, title eller description utanför längd, borttagen eller trasig intern länk, alt-text
över 125 tecken, strukturerad data ändrad i form. Stil och röst är inte mitt område i den här omgången.

Koordinatorns tre beslut är inräknade: H2 "Därför blev svaret så" får finnas på alla verktyg, "Så räknar vi"
heter nu "Så räknar jag" med `id="sa-raknar-vi"` orört, och metodsidorna heter "Så testar jag" och "Så tjänar
jag pengar" med oförändrade adresser.

**15 punkter totalt.**

## Kontrollerat och godkänt i hela omgången

Det här behöver ingen åtgärd och listas här så att ingen letar igen:

- Alla fjorton skiss-alt-texter ligger nu under 125 tecken, från 91 (avfuktare) till 122 (gipsplugg).
  Varumärkesbilden i sidhuvudet har tom `alt` på alla fjorton.
- `verktyg()` ger `WebApplication` med `name` = verktygets namn, `url` och `description` = samma sträng som
  meta description på alla fjorton. Ingen form är ändrad.
- `Faq` är oförändrad i form på alla fjorton. Ingen `<a>` är inbakad i ett svar; länkarna går via fältet
  `lank`. `bygglov-altan` och `rotavdrag` har fått en fjärde fråga, vilket checklistan bad om.
- Inga rubrik-id:n är ändrade. Alla hoppankare (`#sa-raknar-vi`, `#darfor-blev-svaret-sa`,
  `#gor-inte-det-har`, `#sa-bedomer-vi`) pekar på ett id som finns.
- De två länkluckorna checklistan pekade ut är täppta: `/rakna/gipsplugg/` länkar nu till
  `/inomhus/gipsplugg/` med ankaret "Gipsplugg, vilken typ som håller bäst i din vägg", och
  `/rakna/trappa/` länkar till `/golv/bygga-trappa/` tre gånger via konstanten `GUIDE` i
  `src/lib/kalkyl/trappa.ts` rad 167. `/rakna/altan/` har fått länken till altanhuben `/altan/`.
- Alla fjorton `rad`-strängar i `src/lib/kalkyl/register.ts` är nu hela meningar med verb, och alla fjorton
  `namn` bär fortfarande den fras ankartexterna behöver. De två som skulle skrivas om är omskrivna:
  `kvadratmeter` heter "Räkna ut kvadratmeter och vad som går åt" (ordet *åtgång* är borta) och `kallare`
  heter "Gå igenom källaren själv och hitta fukten" (leder med handlingen, inte med guidens fras).
- Alla tjugo titlar och descriptioner är mätta. Inget titelvärde ligger mellan 61 och 70 tecken.

---

# A. Verktygen

## /rakna/ — galleriet

Inget att ändra.

Title 11 tecken, behåller varumärket. Description 142 tecken, inom 120–155, och uppräkningen av fyra ämnen
är borta. H1 "Räkna själv" ordagrant kvar. Alla fyra sidofraser sitter på angiven plats: *räkna ut* som verb
och *material innan du köper* i ingressen, *källa bakom varje tal* och *dela uträkningen* i den avslutande
brödtexten. Fjorton kortlänkar genereras ur registret, ingen borta.

## /rakna/avfuktare/ — Avfuktarkalkylator

1. **`src/pages/rakna/avfuktare.astro` rad 495, ankartexten till `/om/sa-testar-vi/`.** Står "Så testar vi".
   Målsidan heter sedan omskrivningen "Så testar jag" (`src/content/sidor/sa-testar-vi.mdx` rad 2). Ankaret
   beskriver inte längre målsidan. Ska stå: `Så testar jag`.

Övrigt klart. Title 38 tecken med suffix 54, kolonformen borta och titeln ligger nu i konstanten `titel`
rad 124 som checklistan krävde. Description 139 tecken. H1 "Hur stor avfuktare behöver du?" bär *hur stor*
och *avfuktare* och är skild från title. *liter per dygn* står i ingressen och i resultatspalten, *märkt
kapacitet mot verklig* i H2:n rad 401, *sorption eller kondens* i brödtexten under den och i Faq. Alla sex
utgående länkar kvar i rätt antal, inklusive `/luftavfuktare/` tre gånger. Ordningen "Produkter som klarar
det" före "Så räknar jag" är orörd. Alt-text 91 tecken. `reklam={true}` kvar.

## /rakna/daggpunkt/ — Daggpunktskalkylatorn

1. **`src/pages/rakna/daggpunkt.astro` rad 552, ankartexten till `/om/sa-testar-vi/`.** Står "Så testar vi".
   Ska stå: `Så testar jag`.

Övrigt klart. Title "Daggpunkt, räkna ut om väggen blir våt", 38 tecken, leder med frasen och behåller
varumärket med suffix (54). Description 143 tecken, och det återanvända blocket "Källa på varje tal" är
borta. H1 bär *daggpunkten* och är skild från title. *kondens på väggen* i ingressen, *kritiskt
fukttillstånd* och *75 procent* i H2:n rad 425, *kondens på insidan av fönstret* i H3:n "Sovrummet i
januari". Alla utgående länkar kvar, och vägen tillbaka till `/grund/isolera-kallarvagg/` som checklistan
bad om är på plats. `<Verktygskort kalkylator="avfuktare">` kvar i det villkorliga avsnittet. Alt-text 99
tecken.

## /rakna/elkostnad/ — Elkostnadskalkylatorn

1. **`src/pages/rakna/elkostnad.astro` rad 498, ankartexten till `/om/sa-testar-vi/`.** Står "Så testar vi".
   Ska stå: `Så testar jag`.

Övrigt klart. Title 41 tecken, med suffix 57. Description 153 tecken, och "antagandena utskrivna" är borta.
*kronor per månad och år* och *kilowattimmar* i ingressen, *räkna om watt till kilowattimmar* i H2:n rad
386, elpriset med SCB som källa och period i brödtexten under "Så räknar jag", *vad en avfuktare drar* i
H3:n "Avfuktaren i källaren" och i Faq. `/luftavfuktare/` är tillagd i Läs vidare, vilket checklistan
föreslog. `ELPRIS_KR_PER_KWH` och `ELPRIS_KALLA` importeras fortfarande. Alt-text 94 tecken.

## /rakna/innervagg/ — Regelkalkylatorn

1. **`src/pages/rakna/innervagg.astro` rad 227–228, Faq-frågan.** Frågan lyder "Ska reglarna sitta på c 400
   eller c 600 mm?" och svaret nämner bara c 400 och c 600. Checklistan kräver sidofrasen *c 450 eller c 600
   millimeter* både i H2:n och i Faq. Brödtexten under H2:n rad 468 har den ("när c 450 eller c 600 skulle
   spara reglar"), Faq har den inte. Svaret ska nämna c 450 mm en gång, skrivet `c&nbsp;450&nbsp;mm` som på
   raderna ovanför, så att formuläret tredje valbara värde också täcks av texten.
2. **`src/pages/rakna/innervagg.astro` rad 596, ankartexten till `/om/sa-testar-vi/`.** Står "Så testar vi".
   Ska stå: `Så testar jag`.

Övrigt klart. Title "Räkna reglar och gips till innerväggen", 38 tecken, med suffix 54, och den delar inte
tre första ord med `/inomhus/bygga-innervagg/` vars seoTitle börjar "Bygga innervägg, regelavstånd".
Description 151 tecken, och "med källa bakom varje tal" är borta. H1 rad 281 är nu tydligt skild från title.
H2:n rad 468 heter "Materialåtgången till en innervägg, regel för regel", behåller *materialåtgång* och
*innervägg* och talar inte längre om sig själv. *hur många reglar det går åt* står i samma avsnitt,
*gipsskivor och skruv per löpmeter vägg* i ingressen. Alla utgående länkar kvar, och `/rakna/gipsskruv/` är
tillagd. Alt-text 96 tecken med c 450 bevarat.

## /rakna/gipsplugg/ — Vad håller i gipsväggen

1. **`src/pages/rakna/gipsplugg.astro` rad 655, ankartexten till `/om/sa-testar-vi/`.** Står "Så testar vi".
   Ska stå: `Så testar jag`.

Övrigt klart. Title "Pluggväljare för gipsvägg efter vikt", 36 tecken, med suffix 52. Den leder med
verktygets eget namn och inte med "gipsplugg", vilket håller avståndet till `/inomhus/gipsplugg/`.
Description 148 tecken, och "vad saken är" är borta. H2:n rad 520 bär *hur mycket en plugg i gipsvägg
håller* och *20 kilo* och har ordet gipsplugg noll gånger. *montera tv på gipsvägg* står i H3:n rad 550,
*kortling* i ingressen och i kortsvaret. `GRANS_REGEL_KG = 20` orörd. Länken till `/inomhus/gipsplugg/` är
på plats med ett ankare som innehåller ordet. Alt-text 122 tecken.

## /rakna/gipsskruv/ — Vilken gipsskruv

1. **`src/pages/rakna/gipsskruv.astro` rad 81, `const titel`.** Står `Vilken gipsskruv? Rätt längd och
   gänga`. Guidens seoTitle är `Gipsskruv, rätt längd och gänga för trä och stål`
   (`src/content/guider/inomhus/gipsskruv.mdx` rad 3). Verktygets title är nu guidens title med ett frågeord
   framför, alltså två nästan identiska titlar i samma kluster på samma SERP. De tre första orden skiljer sig
   formellt, men marginalen som checklistan varnade för är borta. Behåll frågeordet och byt resten, till
   exempel `Vilken gipsskruv? Längd och gänga för din vägg` (46 tecken) eller `Vilken gipsskruv passar din
   vägg?` (34 tecken, får suffix). Frasen *gipsskruv* och *längd* ska vara kvar.
2. **`src/pages/rakna/gipsskruv.astro` rad 638, ankartexten till `/om/sa-testar-vi/`.** Står "Så testar vi".
   Ska stå: `Så testar jag`.

Övrigt klart. Description 152 tecken, och *spetsen* och *ytbehandling* är borta. H1 rad 307 behåller
frågeordet och *längd*. H2:n rad 513 bär *hur lång gipsskruven ska vara* och säger "träregel" så att ordet
regel är entydigt; H3:n rad 536 bär *stålregel mot träregel*, och båda återkommer i Faq. *grov och fin
gänga* står i resultatspalten och i brödtexten, *rostfritt i våtrum* i Faq-svaret rad 259. Handelslängden
som begrepp är kvar. Alla utgående länkar kvar, `/rakna/innervagg/` två gånger. `reklam={true}` och
produktkortet kvar. Alt-text 98 tecken.

## /rakna/kvadratmeter/ — Kvadratmeterräknaren

1. **`src/pages/rakna/kvadratmeter.astro` rad 779, ankartexten till `/om/sa-testar-vi/`.** Står "Så testar
   vi". Ska stå: `Så testar jag`.

Övrigt klart. Title oförändrad på 43 tecken och behåller varumärket med suffix (59), och börjar ordagrant
med *räkna ut kvadratmeter*. Description 148 tecken, och "med källa per tal" är borta. H1 rad 411 är nu
skild från title och behåller frasen. H2:n rad 642 har kvar `id="rakna-ut-kvadratmeter"` och huvudfrasen, och
de tre H3:na bär färg, tapet och golv var för sig, en fras var. *dra av dörr och fönster* i ingressen.
Spillpålägget och avdragen står kvar i både räkning och text. Alla utgående länkar kvar. Alt-text 112
tecken.

## /rakna/bygglov-altan/ — Bygglov för altan

Inget att ändra.

Title 40 tecken, frågeformen först, med suffix 56. Description 154 tecken, och det tvetydiga "Varje regel med
sitt lagrum" är utbytt mot "Varje svar har sin paragraf". H1 rad 293 skild från title. H2:n rad 455 bär
huvudfrasen i naken form, `plan- och bygglagen 9 kap. 19 §` och datumet 1 december 2025. *1,8 meter över
marken* och *3,6 meter från huset* står i ingressen, *vad ett bygge utan lov kostar* i brödtexten under H2:n.
Lag 2025:974 nämns med sitt nummer. Den inklistrade sökfrasen "Söker du på altan, höjd och bygglov…" är
struken, vilket checklistan krävde. Faq har fått den fjärde frågan om anmälan och startbesked. Alla utgående
länkar kvar, ankaret till `/om/sa-testar-vi/` säger redan "Så testar jag". Alt-text 118 tecken.

## /rakna/altan/ — Trallkalkylatorn

1. **`src/pages/rakna/altan.astro` rad 285–286, `const BESKRIVNING`.** 157 tecken, två över gränsen på 155.
   Korta med minst tre tecken. Checklistan säger att *bärlinor* och *trallskruv* får gå, och de är redan
   borta, så korta i stället "hur mycket trall du ska köpa, i löpmeter och antal längder" till "hur mycket
   trall du ska köpa i löpmeter och antal längder". *trall* och *altan* ska vara kvar.
2. **`src/pages/rakna/altan.astro` rad 143 mot rad 325, title och H1.** Title lyder "Räkna ut trall och
   plintar till altanen" och H1 "Räkna ut trall, reglar och plintar till altanen". De skiljer sig på ett ord
   och läses som samma mening. Checklistans krav 2 säger att de inte får vara samma sträng, och att title får
   vara sökordsdriven medan H1 är löftet till läsaren. Skriv om title, exempelvis `Räkna ut trall till
   altanen` (30 tecken, får suffix och landar på 46), och låt H1 stå.

Övrigt klart. H2:n rad 465 bär båda sidofraserna, *hur mycket trall som går åt per kvadratmeter* och *hur
många plintar altanen behöver*. *löpmeter och antal längder* i ingressen och i resultatspalten, *springan
mellan brädorna* i brödtexten och i Faq. Länken till altanhuben `/altan/` är tillagd på rad 624, och alla
tidigare utgående länkar är kvar i rätt antal. Ankaret till `/om/sa-testar-vi/` säger "Så testar jag".
`BYGGBESKRIVNING` och talen orörda. Alt-text 115 tecken med c 600 och springan på 5 mm kvar.

## /rakna/dranering/ — Dränering

Inget att ändra.

Title 52 tecken, *dränering* först och *kostnad* i de tre första orden, ordningen från 2026-09-20 är inte
kastad om. Description 145 tecken och behåller *dränering*, *kostar*, *per löpmeter* och löftet om att sidan
säger om man behöver gräva. H1 rad 436 behåller frågeformen och är nu tydligt skild från H2:n rad 637, som
checklistan bad om. Alla fyra H3 finns kvar och bär sina sidofraser: *hur länge en dränering håller*,
*rotavdraget på arbetet*, *avfuktare i stället för att gräva*, plus den om vad som gör priset dubbelt så
högt. *kostnad per löpmeter* i H2 och i resultatspalten. Rotavdragsfällan länkar vidare till
`/rakna/rotavdrag/` i stället för att upprepa regelverket. Alla åtta utgående länkar kvar. Ankaret till
`/om/sa-testar-vi/` säger "Så testar jag". Alt-text 117 tecken.

## /rakna/kallare/ — Självbesiktning av källaren

1. **`src/pages/rakna/kallare.astro` rad 351–354, ingressen.** Checklistan kräver sidofrasen *markfukt,
   kondens eller läckage* både i ingressen och i H2:n. Ingressen beskriver de tre hållen i omskrivning
   ("genom väggen från marken, ur luften i rummet, eller in genom en otäthet när det regnar") och nämner
   inget av de tre orden. Orden står först i kortsvaret rad 357 och i första meningen under H2:n rad 480. Sätt
   in de tre orden en gång i ingressen, förslagsvis efter uppräkningen, så att den som bara läser första
   skärmen ser dem. *tejptestet* och *vad hygrometern visar* sitter redan rätt.

Övrigt klart. Title "Besiktiga källaren själv och hitta vattnet", 42 tecken, alltså under de 52 checklistan
krävde, och den börjar inte med "Fuktig källare" eller "Fukt i källaren". Description nere på 143 tecken från
156, med de tre orsakerna och löftet om nästa steg kvar. H1 rad 347 är nu skild från title. H2:n rad 480
väger orsakerna och åtgärden och leder inte längre med guidens fras. *nästa steg* står som rubrik i
resultatspalten rad 411. Tejptestets två dygn, gränsvärdena och `KRITISK_RF` orörda. Alla utgående länkar
kvar. Ankaret till `/om/sa-testar-vi/` säger "Så testar jag". Alt-text nere på 121 tecken från 458, och
detaljerna ligger i bildtexten.

## /rakna/rotavdrag/ — Rotavdrag [år]

Inget att ändra.

Title 52 tecken med `ARET` som konstant, aldrig utskrivet årtal. Description nere på 148 tecken från 172, med
*rotavdraget*, årtalet och löftet om vad man betalar efteråt kvar; meningen om Skatteverket är struken.
H1 rad 318 bär `Rotavdrag ${ARET}` och lovar både avdraget och slutsumman, och är skild från title. H2:n rad
470 bär de tre taken, och de tre H3:na bär *taket per person på 50 000 kronor*, *det gemensamma taket för rot
och rut på 75 000 kronor*, det tredje taket och *att det är betalningsdatumet som avgör*. *hur mycket du får
tillbaka* i ingressen, *att bara arbetskostnaden ger avdrag* i H2-avsnittet och i Faq. Faq har byggts ut till
fyra frågor. Inget ändringsdatum mot Skatteverket står i publik text. Alla sju utgående länkar kvar. Ankaret
till `/om/sa-testar-vi/` säger "Så testar jag". Alt-text nere på 120 tecken från 386.

## /rakna/trappa/ — Trappräknaren

Inget att ändra.

Title oförändrad på 40 tecken, *steghöjd* tidigt, varumärket ryms (56). Description nere på 138 tecken från
200, med *steghöjd* och löftet att verktyget säger ifrån när ett mått inte håller. H1 rad 327 lovar nu det
title inte gör, alltså att måtten kontrolleras, och är skild från title. H2:n rad 491 behåller ordet
*Boverket* och distinktionen, och talar inte längre om sig själv som "räknaren". *trappformeln, två gånger
steghöjden plus stegdjupet* står i både kortsvaret och H2-avsnittet, *lutningen* i resultatspalten och
brödtexten, *våningshöjd från färdigt golv till färdigt golv* i ingressen. Vem som satt vilket mått hålls
isär i varje mening. Länkluckan är täppt: `/golv/bygga-trappa/` länkas tre gånger via `GUIDE`, och
`/golv/renovera-trappa/` står i Läs vidare. Ankaret till `/om/sa-testar-vi/` säger "Så testar jag". Alt-text
nere på 109 tecken från 401.

## /rakna/mala-ute/ — Måla ute i dag

1. **`src/pages/rakna/mala-ute.astro` rad 351–353, H1.** Står "Hinner färgen torka innan daggen faller?
   Räkna på dagen och natten". Sidans huvudfras är "måla ute temperatur", och H1 innehåller varken *måla ute*
   eller *temperatur*. Title (rad 142) och H2 (rad 519) bär båda orden, men H1 är sidans starkaste
   on page-signal och den enda rubrik Google visar i toppen. Skriv om så att *måla ute* står i H1, och behåll
   gärna daggen, exempelvis `Kan du måla ute i dag? Hinner färgen torka innan daggen faller`. H1 får inte bli
   samma sträng som title.
2. **Sidan är fortfarande föräldralös, noterat till koordinatorn.** Ingen artikel länkar hit och ingen bäddar
   in formuläret; inlänkarna är galleriet och sidfoten. Det går inte att lösa på sidan och ligger utanför
   omskrivningen, men det är kvar att lösa när pelaren Fasad byggs. Checklistan punkt 9 bad om att det
   noteras vid granskningen.

Övrigt klart. Title oförändrad på 42 tecken, med suffix 58. Description 155 tecken, precis inom gränsen, och
substantivuppräkningen är borta. H2:n rad 519 använder inte längre kolonformen och bär *måla ute* och
*temperatur*. De tre H3:na bär *hur kallt det får vara när man målar ute*, *daggen* och *vår och höst*, och
*luftfuktighet över 80 procent* står i den första H3:n och i Faq. Klockslaget i svaret är kvar. Tillverkarna
namnges vid sina gränser. Alla utgående länkar kvar. Ankaret till `/om/sa-testar-vi/` säger "Så testar jag".
Alt-text 116 tecken.

---

# B. Sidorna i src/content/sidor/

## startsida.mdx — `/`

Inget att ändra.

`seoTitle` "Hantverkstips, det mesta med huset går att lösa själv", 53 tecken, suffixet faller bort så
varumärket står en gång. `title`, som blir H1, är "Det mesta med huset går att lösa själv", 38 tecken, alltså
ett påstående om huset och en annan sträng än title-taggen. Description oförändrad på 136 tecken med
*guider*, *kalkylatorer*, *hus* och *skruv i gipsvägg*. Exakt två länkar i heron enligt
`INNEHALLSARKITEKTUR.md` avsnitt 5, båda med sina beskrivande ankare kvar: `/fukt/fukt-i-kallaren/` på "ett
tejptest på källarväggen visar på två dygn varifrån fukten kommer" och `/rakna/avfuktare/` på "räknar du ut
hur stor avfuktare rummet kräver", som fortfarande bär *hur stor avfuktare*. `justNu`, `utkast` och
`uppdaterad` orörda. Inga H2 tillagda i innehållsfilen. Ingen strukturdata på sidan.

## om.mdx — `/om/`

Inget att ändra.

Title "Om mig och sajten", 17 tecken, får suffix och landar på 33, och varumärket står därmed en gång i
stället för två. Description 151 tecken, inom gränsen, och det ordagranna lånet från startsidans sista mening
är borta. Sidan har fått tre H2 som bär resonemanget: "Varför jag byggde sajten", "Så jobbar jag", "Var
pengarna kommer ifrån". Alla fyra sidofraser sitter: *startad i september 2026 av Christian Karlsson* i
första stycket, *jag räknar* som eget stycke under "Så jobbar jag", *granskad, aldrig testad* i samma
avsnitt, *annonslänkar till Proffsmagasinet* under "Var pengarna kommer ifrån". Alla tre utgående länkar kvar
med beskrivande ankare i stället för sidornas titlar i gemener: "sidan om hur jag testar och granskar",
"sidan om hur jag tjänar pengar", "kontaktsidan". `strukturdata: Organization` orörd. Inga bilder tillagda.

## kontakt.mdx — `/om/kontakt/`

Inget att ändra.

Title "Kontakt", 7 tecken, med suffix 23. Description 143 tecken, och den inkilade förklaringen "alltså" är
borta. `mailto:info@hantverkstips.se` står först och är fortfarande en länk, inte brödtext. Svarstiden står i
första stycket. *skriv till oss* och *fel, priser och egna mätningar* på plats. Uppmaningen "Skriv vilken
sida det gäller" är kvar, liksom gränsen mot butikens ansvar och meningen om att tillverkare inte får läsa
texten i förväg. Inga H2 och inga bilder tillagda. Ingen strukturdata.

## sa-tjanar-vi-pengar.mdx — `/om/sa-tjanar-vi-pengar/`

1. **`src/layouts/Bas.astro` rad 141–142, sidfotens länkar.** Sidfoten säger fortfarande "Så testar vi" och
   "Så tjänar vi pengar", medan sidorna heter "Så testar jag" (`sa-testar-vi.mdx` rad 2) och "Så tjänar jag
   pengar" (`sa-tjanar-vi-pengar.mdx` rad 2). Checklistan punkt 3 för den här sidan säger uttryckligen att
   formuleringen "står likadant i sidfoten, i menyn och i länkarna från artiklarna" och är ett fast ankare på
   hela sajten; den likheten är bruten nu. Ska stå `Så testar jag` respektive `Så tjänar jag pengar`.
   Adresserna rörs inte. Samma sträng står på `src/components/ui/Forfattarruta.astro` rad 84 ("Så testar vi")
   och ska ändras i samma svep; `src/components/ui/Reklamband.astro` rad 19 säger redan "Så tjänar jag
   pengar".

Övrigt klart. Title "Så tjänar jag pengar", 20 tecken, med suffix 36. Description 144 tecken med
*annonslänkar* och *provision*, och formen "vad den påverkar och vad den inte påverkar" är omskriven. Alla
tre H2 finns kvar i sak: "Vad provisionen inte får styra", "Så ser du var länkarna finns", "Vad jag loggar
när du klickar". Sidofraserna sitter: *annonslänk* i första stycket och i H2:n om var länkarna finns,
*provision på ordervärdet* och *priset är detsamma för dig* i första stycket, *jag skriver köp inte när det
är svaret* under "Vad provisionen inte får styra". Exemplet med två avrådda maskiner är kvar och länkar till
`/fukt/avfuktare-kallare/`. Meningen om att provisionen är densamma oavsett maskin och att ingen annonsör ser
en sida före publicering står kvar. Länken till `/om/integritet/` är kvar och ankaret är omskrivet från bara
"integritet" till "sidan om integritet". MDX-kommentaren om Adtraction-godkännandet står kvar orörd.
`strukturdata: Article` orörd.

## integritet.mdx — `/om/integritet/`

Inget att ändra.

Title "Integritet", 10 tecken, med suffix 26. Description 154 tecken, inom gränsen, med *kakor* och
*IP-adress* kvar, och öppningen är inte längre formen "X, och inte X". Alla tre H2 finns kvar i sak, och
etiketten "Kalkylatorerna" är omskriven till "Vad som händer med det du fyller i en kalkylator" som
checklistan krävde; "Frågor" heter nu "Har du frågor om det här". Sidofraserna sitter: *inga kakor som kräver
samtycke* i första stycket, *ingen IP-adress* i H2:n om klick, *det du fyller i ligger i adressfältet* i H2:n
om kalkylatorerna. Uppräkningen av vad som loggas vid ett klick är intakt post för post, och meningen om att
löpnumret inte säger något om vem läsaren är står kvar. Länken till `/om/kontakt/` med ankaret "kontaktsidan"
är kvar. MDX-kommentaren om Besöksstatistik och `@vercel/analytics` står kvar och dess text är inte flyttad
ut i sidan. Inga bilder tillagda. Ingen strukturdata.
