# Granskning av språktvätten, 16 september 2026

Chefredaktörens genomgång av de tjugo publicerade sidorna efter att två redaktörer tvättat dem mot avsnitten "Sidan står för sig själv" och "Tabeller" i STILGUIDE.md. Underlag: `git diff` (19 innehållsfiler ändrade, kontaktsidan orörd), alla tjugo filer lästa i sin helhet som en besökare från Google, tio stickprov i diffen, och skärmdumpar i 375 px av de fem mest ändrade sidorna.

Konvention nedan: **Krav** är retur, sidan ska rättas innan den räknas som klar i omgången. **Anmärkning** är något att ta i nästa varv, sidan får ligga kvar publicerad.

## Sammanfattning

1. Rösten är räddad. Christians fyra invändningar (procent utan luftfuktighet, syftningar på kartongen, tre tal och två tillverkarnamn i Kort svar, kolumnistmaner) är i allt väsentligt borta ur alla tjugo sidor.
2. Alla Kort svar är nu fyra till fem meningar, ett tal per mening, utan tillverkarnamn. Tavelsidans Kort svar är ordagrant stilguidens facit.
3. Anekdoterna (grannen på två sidor, hyllan som föll) är borttagna eller omskrivna till allmänna situationer, och sidorna börjar på svaret.
4. Facktermerna förklaras nu i samma mening: kondens och sorption på varje fuktsida, syll, hammarband, kortling, cc-mått, hygrostat, daggpunkt, kartong, djupanslag.
5. Nio av tjugo sidor får krav, sammanlagt 23. Inget av dem är ett tillbakafall till det gamla; de flesta är rester som tvätten inte nådde.
6. Allvarligast: Kort svar på krypgrundssidan har en syftning som gör att meningen läses fel ("Den är för kall för en kondensavfuktare" pekar på sorptionsmaskinen, inte grunden). Det är det första en Googlebesökare läser.
7. Systematiskt: tabellcellerna på tre fuktsidor använder förkortningen "20/60" för "20 grader och 60 procent luftfuktighet" utan att den förklaras någonstans, och några celler bär två tal.
8. Ordet "kartongen" lever kvar på granskningen av Wood's SW39FW (två ställen), och sorptionssidan öppnar med "Lådan lovade" innan någon låda är nämnd.
9. Faktan är intakt: alla tal i de delade tabellerna och de nya punktlistorna finns kvar, och inga länkar, produktkort, illustrationer eller verktygskort har försvunnit. Två mycket små uppgifter har fallit bort, se avsnittet Faktakontroll.
10. På mobil ser punktlistorna och de flesta delade tabellerna rätt ut, men kolumnrubriker radbryts inte, så tabeller med långa rubriker skrollar i sidled även när de bara har två kolumner. Det är en CSS-fråga för teknisk ansvarig, plus en regel om korta rubriker.

## Per sida

### Guider, fukt

**avfuktare-kallare.mdx**: Krav.

1. Rad 104, "då räcker varken den eller MDK21". MDK21 nämns här för första gången i löptexten, utan tillverkare och utan att ha presenterats. Önskad lydelse: "då räcker varken den eller den billigare Wood's MDK21".
2. Rad 152 till 157, tabellen med tillverkarnas kapacitet. Cellerna "7,4 vid 20/60, 9,7 som mest" och "1,09 vid 10/60, 0,47 vid 5/60" använder förkortningen 20/60 som inte förklaras på sidan, och bär två tal per cell. Önskad lydelse: skriv en mening ovanför tabellen, "20/60 betyder 20 grader och 60 procent luftfuktighet", och lägg andra talet i texten under ("Acetec anger dessutom 9,7 liter som mest", "vid 5 grader anger Elgiganten 0,47 liter").
3. Kort svar och rad 140 säger att kondens räcker över 10 grader, men tabellrubrikerna på rad 74 och 83 säger att kondenstabellen gäller över 15 grader och sorptionstabellen mellan 5 och 15. En källare på 12 grader får två olika svar på samma sida. Önskad lydelse på rad 74: "Den första tabellen gäller kondensavfuktare. Talen är räknade för 15 grader, och gäller med marginal ner till 10." Alternativt ändra regeln till 15 grader överallt, men det kräver produktexpertens ord.
4. Kort svar, sista meningen: "en vanlig villakällare landar på 16 liter per dygn i märkt kapacitet". Storleken på källaren saknas och "märkt kapacitet" är oförklarad. Önskad lydelse: "En källare på 40 kvm landar på 16 liter per dygn i märkt kapacitet, alltså talet på lådan."

Anmärkning: fem punchlines på sidan ("Den låter som om den jobbar, men den avfuktar inte", "vilket är ärligare", "Invändningarna då.", "Du har köpt en elräkning, inte en lösning", "hur bra pris den än har"). Inom tolerans på 2 500 ord, men ta bort "Invändningarna då." nästa varv.

**avfuktare-krypgrund.mdx**: Krav.

1. Kort svar, mening två: "Den är för kall för en kondensavfuktare, som vill ha runt 15 grader för att fungera." Närmaste substantiv är sorptionsavfuktaren, så meningen läses som att maskinen är för kall. Önskad lydelse: "Grunden är för kall för en kondensavfuktare, som vill ha runt 15 grader för att fungera."
2. Rad 105 till 112, kapacitetstabellen: "17 (20/60)", "6 (27/60)", "8,8 (20/70)", "1,09 (10/60)". Samma oförklarade förkortning som på källarsidan. Önskad lydelse: en mening ovanför tabellen som förklarar skrivsättet, eller skriv "vid 20 °C och 60 %" i cellerna.
3. Rad 189: "Kanalen får vara 15 meter lång i dimension 100, eller 10 meter i dimension 63". Tal utan storhet. Önskad lydelse: "i dimension 100 mm" och "i dimension 63 mm".
4. Rad 235: "Drybox anger 52 dB på 3 meters avstånd, Fresh 40 dB(A) och Acetec 48 dB(A), de två sista utan angivet avstånd." Fyra tal i en mening. Önskad lydelse: punktlista med tre rader, "Drybox X4, 52 dB på 3 meters avstånd", "Fresh D-800, 40 dB(A), avstånd ej angivet", "Acetec EvoDry 6H 2.0, 48 dB(A), avstånd ej angivet".
5. Rad 87: "Skillnaden fälls ut på blindbottens undersida och på syllen." Två facktermer utan förklaring på en mellansida. Önskad lydelse: "Skillnaden fälls ut på undersidan av blindbotten, alltså skivorna som bär golvisoleringen, och på syllen, den nedersta regeln som vilar på grundmuren."

Anmärkning: rad 287, "En grund under 40 kvm kostar cirka 50 000 kr, och över 140 kvm upp till 65 000 kr", går att dela i två meningar. Rad 167 nämner "en Drybox X4" och "en Fresh D-800" utan ordet avfuktare; produktkorten ovanför räddar det, men "sorptionsavfuktaren Drybox X4" är säkrare.

**fukt-i-kallaren.mdx**: Krav.

1. Rad 95: "ibland sker den genom diffusion". Termen förklaras inte, och "diffusionsöppna" på rad 99 bygger på den. Önskad lydelse: "ibland sker den genom diffusion, alltså som vattenånga rakt genom materialet".
2. Rad 66 till 73, symptomtabellen. Cellerna är hela meningar ("Markfukt. Salterna följer med vattnet ut ur väggen och blir kvar när det avdunstar"), vilket bryter mot regeln om högst tre ord per cell. Tabellen fungerar ändå på mobil, för den har tre kolumner och cellerna radbryts. Önskad åtgärd: korta mittkolumnen till orsaken ("Markfukt", "Kondens", "Läckage") och flytta förklaringarna till texten under, eller ge diagnostabeller ett undantag i stilguiden (se förslag nedan). Jag föredrar undantaget; tabellen är sidans bästa del.

Anmärkning: tre lättsamma grepp ("Läs sista meningen en gång till", brandvarnaren, "Och gräv inte förrän plasten har svarat"). Behåll de två sista.

### Kunskap, fukt

**sorptionsavfuktare.mdx**: Krav.

1. Rad 73, sista meningen i första stycket: "Lådan lovade att den skulle vara full varje morgon." Ingen låda har nämnts. Önskad lydelse: "Enligt kapaciteten på förpackningen skulle tanken ha varit full varje morgon."
2. Rad 99 till 119, de två kapacitetstabellerna: "22 vid 20/70", "8 vid 35/90", "16,2 vid 35/80". Förkortningen förklaras inte. Önskad lydelse: "Skrivsättet 20/70 betyder 20 grader och 70 procent luftfuktighet" i meningen på rad 95, som redan säger att talen är liter per dygn.
3. Rad 131: "Regenereringsvärmaren är hela förklaringen." Ordet har inte använts tidigare; rad 85 kallar samma sak "ett elelement". Önskad lydelse: "Värmaren som torkar rotorn, regenereringsvärmaren, är hela förklaringen."

Anmärkning: Kort svar använder "kondensavfuktare" utan förklaring; lägg till "som kyler fram vattnet ur luften". Rad 123 har fyra tal i en mening (76 procent vid 10 grader, 65 procent vid 5 grader); dela i två. Fyra lättsamma grepp på sidan (värmefläkten i cirkel, "Temperaturen gör det", "torkar hela Sverige", "ingen trevlig granne"); stryk ett. "modularkabel" på rad 220 förklaras inte.

**luftfuktighet-inomhus.mdx**: Godkänd.

Anmärkning: första meningen börjar med "En hygrometer" utan förklaring; förklaringen kommer först i nästa avsnitt. Skriv "En hygrometer, alltså fuktmätaren på väggen, som visar 65 procent...". Rad 199 hänvisar till "två testsajter" utan namn, vilket bryter mot kravet på namngiven tredje part; namnge eller stryk. "RBK-auktoriserad" på rad 189 förklaras inte. Cellerna i tabellen på rad 174 är längre än tre ord, men tabellen är tvåkolumnig och läsbar.

### Guider, inomhus

**bygga-innervagg.mdx**: Krav.

1. Sidan blandar tre skrivsätt för samma mått utan att säga att de betyder samma sak: "cc 400" i Kort svar och på rad 131, "c 400" i tabellen på rad 119, och "s 450" och "s 600" på rad 129 och 165. Cc-måttet förklaras på rad 117, men inte att c, cc och s är samma sak. Önskad lydelse, tillägg på rad 117: "Vi skriver c, Svenskt Trä skriver cc och Norgips skriver s. Det är samma mått."

Anmärkning: rad 165 har fyra tal i en mening ("455 mm passar reglar på s 450 och 610 mm passar reglar på s 600"); två meningar. Rad 236 har tre tal i första meningen; en fyraradig lista är tydligare. Tre punchlines ("Den håller, men den känns billig", "Det fotot är värt en timme om ett år", "Det är priset"), inom tolerans.

**gipsskruv.mdx**: Krav. Sidan är märkt enkel, och då gäller strängaste nivån.

1. Källorna presenteras inte. Norgips (rad 71), Essve (rad 82), Svenskt Trä (rad 93), Gör Det Själv (rad 101) och Gyproc (rad 105) dyker upp som namn utan att läsaren får veta vad de är. Önskad lydelse första gången: "Gipstillverkaren Norgips", "skruvtillverkaren Essve", "branschorganisationen Svenskt Trä", "tidningen Gör Det Själv", "gipstillverkaren Gyproc".
2. Rad 122, tabellraden "Tak, yttersta lag | ca 200 | ca 300". "ca" bredvid "c 200" och "s 750" ser ut som ett fjärde skrivsätt. Önskad lydelse: "cirka c 200" och "cirka c 300", eller en rad under tabellen: "Gyproc skriver cirka för taket."
3. Rad 162: "ligger i C4". Korrosivitetsklassen förklaras för C1 på rad 160 men inte för C4. Önskad lydelse: "ligger i korrosivitetsklass C4, alltså utomhus".

Anmärkning: Kort svar använder "grov gänga" och "fin gänga" utan förklaring; på en enkel sida kan man skriva "grov gänga, som biter i trä" och "fin gänga, som biter i plåt". Artikelnummer 522224 och produktnamnen QS Quick och QT Quick på rad 105 är tungt för nivån; behåll som källa men flytta till källraden. "elförzinkad eller fosfaterad" på rad 109 förklaras inte.

**hanga-tavla-gipsvagg.mdx**: Krav.

1. Rad 84 till 86, punktlistan med tillverkarnas flera värden. Första punkten har sex tal ("2 kg upp till 20 × 25 cm, 5 kg upp till 45 × 60 cm och 7 kg upp till 60 × 90 cm"), tredje punkten har fyra ("5, 10 och 15 kg för storlek 1 till 4"). Regeln säger tabell. Önskad lydelse: en liten tabell för 3M, "Ramstorlek, cm | Bär, kg" med tre rader, och för Essve en mening: "Essve anger 5 till 15 kg beroende på storlek, men med trä som underlag."

Anmärkning: X-kroken förklaras på rad 80, efter att den använts i Kort svar och i tabellen; flytta förklaringen till stycket före tabellen. "Clas Fixare" på rad 102 presenteras inte. Källraden på rad 78 har sex tillverkarnamn i en mening; det är tillåtet som källrad men läses tungt, dela med semikolon eller gör punktlista.

**skruva-i-gipsvagg.mdx**: Krav. Sidan är märkt enkel.

1. Källorna presenteras inte: Norgips (rad 53), BraByggare (rad 65), Svenskt Trä, Gyproc (rad 65), Bostadsrätterna (rad 80), Essve (rad 116). Samma krav som på gipsskruvsidan. Önskad lydelse: ett eller två ord om vad källan är, första gången.
2. Rad 105 och 107 i tabellen: "Hålrumsplugg ø 6" och "Molly ø 10 med rosett". Tal utan storhet. Önskad lydelse: "ø 6 mm" och "ø 10 mm".

Anmärkning: första stycket nämner "konsolen" innan hyllkonsolen förklaras på rad 51; skriv "på hyllkonsolen". Kort svar säger "regeln bakom gipset" utan förklaring; "träbiten bakom gipset" räcker på en enkel sida. "profilen" på rad 65 är stålregel; säg det.

### Tester

**tester/luftavfuktare/woods-sw39fw.mdx**: Krav.

1. Rad 88 och rubriken på rad 133 använder "kartongen" ("Siffran på kartongen är alltid tagen där maskinen har det som lättast", "Tanken räcker längre än kartongen antyder"). Resten av sajten säger "lådan", och omdömet högst upp säger "på lådan". Önskad lydelse: "Siffran på lådan" och "Tanken räcker längre än lådan antyder".
2. Rad 143 till 147, de tre jämförelsemaskinerna. Varje stycke har fem till sju tal (pris, liter, villkor, effekt, temperatur, tank). Önskad form: en tabell "Maskin | Pris, kr | Kapacitet, l/dygn | Effekt, W" med tre rader, en rad under tabellen med villkoren, och sedan en mening per maskin om när den är rätt.

Anmärkning: rad 90 har fem tal ("faktorn 0,30 från 30 grader och 80 procent till 15 grader och 55"); skriv "från tillverkarens villkor till en källare på 15 grader och 55 procent luftfuktighet" och låt 30/80 stå i stycket ovanför. "omräkningsfaktor" på rad 72 förklaras först på rad 90.

### Kategorier, pelare, sidor, författare

**kategorier/luftavfuktare.md**: Godkänd. Anmärkning: ingressen säger "kammartestet" utan att säga vad det är; "tills vi mätt dem själva i klimatkammare vid 10 och 20 grader". Rad 61, "Vad de 19 literna blir", syftar på spektabellen ovanför, vilket går, men "maskinens uppgivna 19 liter per dygn" är säkrare.

**pelare/fukt.mdx**: Godkänd. Hygrometer, kondens och sorption förklaras i samma mening.

**pelare/inomhus.mdx**: Godkänd. Regel och kartong förklaras, öppningen "En gipsskiva håller ingenting av sig själv" är rätt ton.

**sidor/startsida.mdx**: Godkänd.

**sidor/om.mdx**: Godkänd. Delningen i två stycken gjorde texten lättare.

**sidor/sa-testar-vi.mdx**: Godkänd. Anmärkning: "Mättnadsånghalt" på rad 29 förklaras inte; "mättnadsånghalt, alltså hur mycket vatten luften som mest kan bära".

**sidor/sa-tjanar-vi-pengar.mdx**: Godkänd. Anmärkning: "Produktexperten" är en roll i redaktionen som läsaren inte känner till; "Den i redaktionen som väljer produkter".

**sidor/integritet.mdx**: Godkänd.

**sidor/kontakt.mdx**: Godkänd, oförändrad.

**forfattare/redaktionen.md**: Godkänd.

Summering: 11 sidor godkända, 9 sidor med krav, 23 krav totalt.

## Faktakontroll

Antal `](/`-länkar, `<Produktkort`, `<Illustration`, `<Verktygskort` och `<Faktaruta` är identiska före och efter i alla 19 ändrade filer (räknat mot `git show HEAD:`). Inga fotnoter finns på sajten.

Tio stickprov där tal flyttats till punktlistor eller tabeller delats:

1. avfuktare-kallare, dimensioneringstabellen (7 kolumner till två tabeller med 4). Alla 24 tal stämmer rad för rad. De åtta antagandena (takhöjd, 55 procent, 0,5 omsättningar, 10,0 gram, markfukt 10/40/100, marginal 1,3, faktor 0,30 och 0,80) finns i punktlistan.
2. avfuktare-kallare, eltabellen (5 kolumner till 4 plus 4). Alla kWh och kronor stämmer, SW59FM:s 500 W vid 20/70 och 360 kWh flyttade till texten, 294 kr för 510 W kvar.
3. avfuktare-kallare, Corroventas kurva 17/13/11 liter vid 20/10/5 grader, samma tal i listan. Wood's par (16,2 till 8,8; 41 till 25; 23 till 14) samma i den nya tabellen, villkoren kompletterade ur den gamla sjukolumnstabellen.
4. avfuktare-krypgrund, dimensioneringstabellen (18 tal) oförändrad, antagandena inklusive Kurnitski 86 till 137 gram kvar, höjdlistan 17/18/21 liter kvar.
5. avfuktare-krypgrund, Drybox X4 (19 l, 250 m³/h, 850 W, 11 kg, 52 dB på 3 m) och Fresh D-800 (6 l vid 27/60, 350 W, 40 dB(A), 4,5 kg, 125/40 mm) kompletta i listorna. Eltabellerna 84/202, 127,2/305, 204/490 och 252/605, 381,6/916, 612/1 469 stämmer.
6. bygga-innervagg, regelavståndstabellen: raden "vägg som ska kaklas, c 450, Norgips" flyttad till texten, kortlingskravet för tvålagersväggen flyttat till texten. Skruvavståndstabellen: Gyprocs "c 200 mot kantprofilen och c 600 mot regeln" flyttat till texten. Materialräkningen: alla sju rader och sex antaganden kvar, kontrollräkningen 35 skruv per 5,0 kvm kvar.
7. gipsskruv, längdtabellen: handelslängderna 35/41, 41, 45/51, 51/55 och 25, 25/30, 38/41, 41 stämmer; minimilängderna 32,5/22,5, 35/25, 45/35, 50/40 i listan; Svenskt Träs 30 och 41 mm i texten; källorna för gänga (Gör Det Själv), 0,9 mm (Gyproc, Essve 522224) och borrspets 0,7 till 2,0 mm (Essve) återfinns i gängavsnittet.
8. hanga-tavla, vikttabellen: klisterremsa och klokrok delade på två rader, bildskenan (20 kg/m Artiteq Klick, 10 kg/m enklaste) flyttad till texten, 3M:s tre storlekar, fischers 8 och 7 kg och Essves 5/10/15 kg kvar i listan. Räkningen 145 plus 30 minus 8 blir 167 kvar.
9. luftfuktighet-inomhus, daggpunktstabellen delad i två: alla 18 tal stämmer mot originalet, tomma celler kvar. Riktvärdestabellen: Intabs vintervärden flyttade till löptexten, källorna i rad under.
10. sorptionsavfuktare, kapacitetstabellen delad i varm och kall: alla 21 celler stämmer. Ljudtabellen omsorterad stigande, samma sju värden. Eltabellerna 55,4/133, 84/202, 120/288, 127,2/305, 204/490 och 166,3, 252, 360, 381,6, 612 stämmer.

Två småförluster, ingen av dem ändrar ett råd:

- avfuktare-kallare, tabellen på rad 112: SW43FW hade "25,5 l, villkor ej angivet" i den gamla tabellen. Nu står 25,5 utan anmärkning, och SW43FW finns inte i tabellen längre ner som texten hänvisar till för villkoren. Lägg till "villkor ej angivet" i texten på rad 108.
- gipsskruv, tabellen på rad 78: "25 (knappt)" för ett lag 15 mm gips på stål har blivit "25 eller 30". Minimilängden 25 mm står i listan under, så läsaren kan räkna själv, men ordet "knappt" var en varning. Lägg till "25 mm ligger precis på gränsen" i texten.

Ett tillägg utan källa: gipsskruv rad 101 förklarar Hi-Lo som "en gänga med omväxlande hög och låg gängtopp". Det är korrekt, men produktexperten bör bekräfta.

## Mobil, 375 px

Skärmdumpar av avfuktare-kallare, luftfuktighet-inomhus, gipsskruv, bygga-innervagg och hanga-tavla i 375 px bredd.

- Punktlistorna ser rätt ut på alla fem sidor. Antagandelistorna och tillverkarlistorna är lättare att läsa än meningarna de ersatte.
- Delade tabeller med korta rubriker får plats: daggpunktstabellerna, skruvlängdstabellen, skruvavståndstabellerna, regelavståndstabellen.
- Tabellceller radbryts ("Vägg, innersta lag, ej brandklassad" bryts på två rader), men kolumnrubriker gör det inte. Därför skrollar tabeller med långa rubriker i sidled även efter delningen: på källarsidan klipps "Över 80 %" i båda dimensioneringstabellerna, "Vatten, gram per kubikmeter", "Tillverkarens maxyta" och till och med tvåkolumnstabellen "kWh per månad, dygnet runt". På tavelsidan hamnar hela tredje kolumnen "Tillverkarens värde, kg" utanför skärmen, så läsaren ser inte värdena utan att dra.
- Texten "Dra i sidled för att se hela tabellen" visas ovanför varje tabell, även de som får plats.

Till teknisk ansvarig: låt `th` radbrytas (ta bort nowrap), och visa skrolltexten bara när tabellen faktiskt är bredare än sin behållare. Till redaktörerna: en kolumnrubrik på mobil är högst två ord plus enhet ("Vatten, g/m³", "Maxyta", "Tillverkaren, kg"), se förslaget till stilguiden.

## Tre stycken som nu är bra

Facit för nästa omgång. Alla tre är rakt på, ett tal per mening, termen förklarad i samma mening, och en person som talar.

**hanga-tavla-gipsvagg, första stycket:**

> Tavlan väger nästan alltid mindre än du tror, och vikten avgör vilken krok du ska ha. Ställ dig på badrumsvågen med tavlan i famnen och dra bort din egen vikt. En inramad affisch på 50 × 70 cm väger sällan över 3 kg. Så lite klarar en gipsvägg utan plugg.

**gipsskruv, avsnittet om försänkning:**

> Att försänka betyder att skruvhuvudet hamnar en aning under skivans yta, så att spacklet kan dölja det. Skruvhuvudet ska ligga 0,5 till 1,0 mm under ytan och kartongen ska vara hel, skriver Norgips. Det förutsätter en skruvdragare med djupanslag, alltså en hylsa som stoppar skruven på exakt samma djup varje gång. Essve rekommenderar djupanslag för alla gipsskruvar, och det är ett av få tillbehör som betalar sig på första väggen.

**avfuktare-krypgrund, avsnittet om plasten:**

> Läs tabellen vågrätt i stället för lodrätt, så syns det viktigaste på hela sidan. Grunden på 80 kvm behöver 18 liter med bar mark. Lägg plast och den behöver 10. Täta ventilerna också och den behöver 6.

Ett fjärde att peka på för Kort svar: fukt-i-kallaren, som svarar på rubrikens fråga i första meningen och håller sig till en tanke per mening.

## Förslag till tillägg i STILGUIDE.md

Under "Sidan står för sig själv":

8. **Källor presenteras med ett eller två ord första gången, på enkla sidor alltid.** "Gipstillverkaren Norgips", "branschorganisationen Svenskt Trä", "tidningen Gör Det Själv". På mellansidor räcker det för källor som inte är tillverkare av produkter på sidan. På expertsidor får branschkällor stå utan presentation.
9. **Mätvillkor skrivs ut, aldrig som bråk.** "vid 20 grader och 60 procent luftfuktighet" i löptext, "vid 20 °C och 60 %" i tabellceller. Skrivsättet "20/60" får användas i en tabell bara om raden ovanför tabellen säger vad det betyder, och aldrig i löptext.
10. **Ett skrivsätt per mått på en sida.** När källorna skriver olika (c, cc, s för centrumavstånd; ca för cirka) väljer sidan ett och säger en gång att de andra betyder samma sak.

Under "Tabeller":

- Kolumnrubriken är högst två ord plus enhet: "Vatten, g/m³", "Maxyta, kvm", "Tillverkaren, kg". Rubriker bryts inte på mobil, så en lång rubrik gör att tabellen skrollar oavsett hur få kolumner den har.
- En cell bär ett värde. Två värden för samma maskin ("7,4, som mest 9,7") blir en cell och en mening under tabellen.
- Undantag för diagnostabeller ("Vad du ser | Trolig orsak | Nästa steg"): högst tre kolumner, och cellerna får vara en kort mening om hela tabellen läses som en checklista. Källraden under gäller ändå.

Under "Förbjudet", Fraser och ord:

- "kartongen" och "lådan" om förpackningen innan förpackningen är nämnd. Skriv "på förpackningen" eller "tillverkarens uppgift" första gången; därefter får "lådan" stå.
