# Läsarens retur, varv 2: grannemedgivande och altanen vid tomtgränsen, 2026-09-28

Jag har läst i en egen dev-server på localhost:4420 och stängt den efteråt. Jag läste som en husägare som vill bygga förråd, altan eller plank nära gränsen. Jämförelsesidor: /rakna/u-varde/ och /rakna/kallare/. Förra returen: docs/briefer/retur-grannemedgivande-altan-2026-09-28.md (4, 3, 3, 4).

Jag prövade samma vyer som förra gången:
- altanräknaren: skärmtak 2 m från gränsen inom plan, utanför plan och "vet inte", 35 kvm med skärmtak, och `hojd=abc`
- grannemedgivandet: plank 1,6 m och 1,0 m, altan utan tak, staket, 5 m från gränsen, gata, väg utanför plan, järnväg och `grans=abc`
- blanketterna till kommunen och till spårets förvaltare

Inga tankstreck på någon av de fyra sidorna.

---

## Säger de fyra sidorna samma sak nu?

Ja, i allt som betyder något. De fem motsägelserna från förra gången:

1. **Plankets höjd.** Rättad. Grannemedgivandet ("Står planket på en mur eller en altan räknas hela höjden"), altanräknaren ("står det på altanen räknas altanens höjd med") och artikeln ("Plankets höjd räknas från marken, så altanens egen höjd kommer med") säger samma sak. Bygga altan säger "ett tätt plank som är högre än 1,2 meter över marken", och det stämmer också.
2. **Skärmtak.** Rättad. "Skärmtak, väggar och inglasning gör alla altanen till en tillbyggnad" står nu i "Så bedömer jag", och det stämmer med resultatraden.
3. **Väg utanför detaljplan.** Halvt rättad. Altanräknaren lägger till en mening på raden för tomtgränsen: "Går gränsen mot en allmän väg blir det bygglov ändå, eftersom väghållaren inte kan medge bygget." Rubriken i spalten säger fortfarande "Grannens ja, annars bygglov", och länken till blanketten skickar alltid med `mot=tomt`. Nu finns också ett nytt glapp i ordvalet: altanräknaren och artikeln säger "allmän väg", men grannemedgivandet säger "En väg utanför detaljplan" (se nedan).
4. **Vad som är nytt sedan december 2025.** Rättad. Alla sidor säger att det nya är att medgivandet ska vara skriftligt.
5. **Medgivande eller bygglov.** Rättad. Bygga altan säger nu "ett skriftligt medgivande från grannen eller bygglov".

Villan och flerbostadshuset: rättad. Meningen "gäller villan lika väl som flerbostadshuset" är borta, och artikelns tabell säger "en villa eller ett radhus med egen tomt".

Det som skaver nu:

- **Gemensam väg eller allmän väg.** I grannemedgivandet heter valet "En väg utanför detaljplan", och svaret blir bygglov. Längre ner på samma sida står: "Gränsar tomten mot en samfällighet, till exempel en gemensam väg, är det samfällighetsföreningen som skriver under." Jag bor på landet vid en enskild väg som samfälligheten sköter. Ska jag kryssa för "väg" och få bygglov, eller "en annan tomt" och få underskrift? Altanräknaren och artikeln skriver "allmän väg", och det ordet löser problemet. Det behöver stå i valet på grannemedgivandet också.
- **Gata och park.** Artikelns vanliga frågor säger "Mot en gata eller en park är det kommunen som skriver under i grannens ställe." På de andra sidorna står "oftast kommunen" eller "eller vägföreningen". Det är ingen motsägelse, men här är det den enda gången kommunen står ensam.

---

## /rakna/grannemedgivande/

### Rättat sedan förra gången

Nästan allt:
- Ingressen säger "om det blir bygglov ändå" och "plank som är högre än 1,2 meter över marken".
- Hjälptexten om takfoten står bara där det finns en takfot. Plank har en egen text.
- Nej-beskedet ("Du behöver ingen underskrift från grannen för det här. Ändras bygget eller platsen kan svaret bli ett annat.") låter inte längre som en order.
- "Vem som är huvudman för platsen får du veta hos kommunen."
- På blanketten: "grannen fyller i den tredje". Blanketterna till kommunen och till spåret har inga ägarrader. Rubrikerna är "Huvudmannen för gatan eller parken, oftast kommunen" och "Trafikverket, eller den som annars förvaltar spåret".
- Meningen om grannen på andra sidan gatan står nu i stycket om gator.
- Arrendatorn, "betydande olägenhet" och "verkar mot detaljplanen" är borta. Frågan börjar nu "Då har du byggt".
- "Ett ja över staketet" är borta. Vid gata står i stället "Ett ja i telefonen räcker inte", och det passar.
- Ett ogiltigt värde visar inte längre ett fullt ja-svar. Det står "Ett av fälten gick inte att läsa. Rätta värdet där felet står, så visar jag svaret." och vid fältet "Skriv ett avstånd mellan 0 och 100 m.". Det är precis rätt.
- Järnvägsblanketten har raden "Bygget ligger inom detaljplan." och ett eget fält för avståndet till spåret. Den ser inte trasig ut längre.
- Datumet 1 december 2025 står 2 gånger i standardvyn, mot 7 förra gången.

### Meningar som stoppar läsningen

- "En väg utanför detaljplan" (valet) mot "till exempel en gemensam väg, är det samfällighetsföreningen som skriver under". Jag vet inte vilket val jag ska göra. Skriv "En allmän väg utanför detaljplan", som de andra sidorna gör.
- "Medgivande till åtgärd nära gräns" (rubrik på alla tre blanketterna). På järnvägsblanketten handlar det om ett spår och inte om en gräns. "Åtgärd" är myndighetsord, men på en blankett går det an.
- "Nytt är också att lagen pekar ut vem som ska medge bygget när gränsen går mot en gata eller park eller när ett järnvägsspår ligger nära: huvudmannen för platsen och den som förvaltar spåret." Två "eller" och ett kolon i en och samma mening. Jag fick läsa den två gånger.
- "Regeringen skriver i propositionen att inget hindrar det, och hänvisar till en dom i Högsta domstolen (NJA 2014 s. 445)." Den är korrekt, men målnumret säger inget för mig. Det räcker med "en dom i Högsta domstolen från 2014".

### Räknaren

- **Kortet** ("Se om grannen måste skriva under, och skriv ut ett färdigt medgivande.") går att förstå utan att ha sett sidan. Det är oförändrat och bra.
- **Beskeden** säger vad jag ska göra i alla vyer jag prövade: ja, nej, bygglov, gata och järnväg. "Sök bygglov hos kommunen. Grannens underskrift gör inte det här bygget lovfritt." är kort och tydligt.

### Människa eller mall

Sidan låter nu som en person som har läst lagen och talar om vad han gör med den, och den reder ut förväxlingen med grannehörande bättre än något annat jag hittat. Den är fortfarande tung av paragrafer: "Plan- och bygglagen 9 kap." står 34 gånger i standardvyn, varav nio i "Därför blev svaret så". Källaren nöjer sig med en enda paragraf på hela sidan. Men här är paragraferna en del av det läsaren behöver om grannen bråkar, så jag drar inget för det.

**Betyg: 5**

---

## /rakna/bygglov-altan/

### Rättat sedan förra gången

- Det farliga beskedet är borta. Med skärmtak 2 m från gränsen står det nu överst i spalten "Grannens ja, annars bygglov" och "Grannen måste skriva under innan du bygger, annars behöver altanen bygglov. Skriv ut medgivandet med dina mått". Länken fyller i tillbyggnad, 20 m² och 2 m. Det var det viktigaste, och nu sitter det rätt.
- Det korta svaret ändras med mina val.
- "altanen har skärmtak" i stället för "är med skärmtak".
- Två eller tre mått: "de är två", och tomtgränsen kallas "ett tredje mått" som bara spelar in med tak, glas eller plank. Ingressen, brödtexten och bildtexten säger nu samma sak.
- Etiketten "Inget lov" har blivit "Grannens underskrift".
- Regeringen "borde kräva grannens medgivande", och "Höjden spelar in för bygglovet men inte för medgivandet".
- "Avgiften ovanför" och treledsmeningen är borta.
- Vid ett ogiltigt värde står bara uppmaningen att rätta. Inget falskt svar visas.
- Vid 35 kvm med skärmtak blir svaret "Ja, du behöver bygglov", och raden om grannens papper försvinner. Det är rätt.

### Meningar som stoppar läsningen

- "Måtten som står i formuläret ger svaret grannens ja, annars bygglov." (kort svar vid skärmtak) Det är ingen mening, det är en etikett som klistrats in i en mening. "Med måtten i formuläret behöver grannen skriva under, annars krävs bygglov."
- "Inget krav" (etikett på raden om skärmtaket på 20 kvm) Raden under säger att grannen måste skriva under, så "Inget krav" läser jag som att det inte finns några krav alls. Det som menas är att ytan håller sig under 30 kvm. Skriv "Inom 30 kvm" eller "Inget lov för ytan".
- Utanför detaljplan med skärmtak: raden säger "Går gränsen mot en allmän väg blir det bygglov ändå", men rubriken ovanför säger fortfarande "Grannens ja, annars bygglov". För den som bor vid en landsväg är rubriken fel. Räknaren frågar inte vad som ligger bortom gränsen.
- "Så står det i lagen sedan den skrevs om." (sista meningen i frågan om tomtgränsen) Den säger ingenting. Stryk den.
- "Går gränsen mot en gata eller en park och ett medgivande behövs är det oftast kommunen som skriver under." (hjälptext under fältet för tomtgränsen) Det är för mycket för en hjälptext och hör hemma i svaret, inte vid fältet.
- "och den tas ut även om du inte visste bättre." Det står tre gånger på samma sida: i "Gör inte det här", i brödtexten om avgiften och i stycket under tabellen. Det räcker med en gång.

### Räknaren

- **Kortet** ("Fyll i hur högt golvet ligger och hur nära huset altanen står, så får du ett ja eller nej med paragrafen bakom.") är oförändrat. Det nämner inte tomtgränsen, och svaret kan nu vara "grannens ja" eller "kanske", inte bara ja eller nej. Kortet säljer in en enklare räknare än den som finns.
- **Beskeden** säger vad jag ska göra. Skärmtaksbeskedet är det bästa på sidan nu.

### Människa eller mall

Brödtexten låter som någon som kan reglerna och förklarar dem i rätt ordning. Sidan har blivit stramare sedan förra gången. Den bär fortfarande på förbehåll, som "vägledning" (3 gånger), avgiften "även om du inte visste bättre" (3 gånger) och "Titta på datumet". Den läses fortfarande som något lite för försiktigt.

**Betyg: 4**

---

## /altan/bygglov-altan/

### Rättat sedan förra gången

- H2 "Grannen skriver under när altanen får tak eller ett tätt plank" stämmer med sitt stycke.
- Plankets höjd stämmer med de andra sidorna.
- Den inbäddade grannräknaren har "Altan utan tak" förvald, och varje val har sin förklaring.
- Knapptexten säger "räknaren" och inte längre "kalkylatorn" eller "källan bakom varje tal".
- "två mått" genomgående.
- "Har du prickmark på tomten, ..., finns det en tröst." har ett verb.
- De gamla lättnaderna är förklarade: "de undantag från bygglov som en del äldre detaljplaner ger".
- "Fram till den 1 december 2025" i stället för "hösten 2025".
- "Visa ritningen innan du börjar" i stället för "över staketet".

### Meningar som stoppar läsningen

- "Regeringen skriver i propositionen till lagändringen att den medvetet lämnade altanerna utanför, och poolerna med dem." Poolen är fortfarande en främling i en altanartikel. Stryk "och poolerna med dem". Frågan om pool står redan på grannemedgivandet.
- "Sätter du skärmtak eller glas över altanen är den däremot en tillbyggnad, och då krävs grannens skriftliga medgivande." Här saknas "eller bygglov". Det kommer tre meningar senare ("Säger grannen nej söker du bygglov i stället"), men i det korta svaret och i vanliga frågor står det i samma mening.
- "Närmare gränsen än 4,5 m, med tak eller glas | Grannens underskrift, annars ja" och "Nej under 30 kvm" (tabellen) Jag måste läsa kolumnrubriken "Bygglov" igen för att förstå "annars ja". Det går, men det är hoptryckt.
- Bilden har samma text i alt som i bildtexten ("Höjden mäts från marken till golvet ..."). Den som får sidan uppläst hör samma mening två gånger.
- "Knappen tar dig till räknaren med dina värden ifyllda. Där får du hela svaret och ser vad det bygger på." Den står fortfarande under båda räknarna, med ett stycke emellan.
- "Kolla din altan mot reglerna" står ensam som en länk mitt i vanliga frågor. Den ser ut som en rest.
- "Sätt igång." Det är ett trevligt slut på stycket om anmälan, men det står i en juridisk text och låter lite som reklam.

### Människa eller mall

Den omskrivna delen låter som en person som säger vad Boverket säger, vad lagen säger och vad han själv gör, och stycket om Boverkets sida för privatpersoner är ärligt och välskrivet. Två räknare i samma artikel med ett stycke emellan är fortfarande för mycket, men nu har de åtminstone var sin tydlig uppgift.

**Betyg: 4**

---

## /altan/bygga-altan/

### Rättat sedan förra gången

- "eller bygglov" och det täta planket står med.
- Knappen heter "Till räknaren".
- Tomtgränsen kallas "ett tredje mått".

### Meningar som stoppar läsningen

- "Avståndet till tomtgränsen är ett tredje mått, men det spelar bara in när altanen får tak, glas eller ett tätt plank." Meningen står ordagrant också i altanräknaren. En kväll med tre sidor, och samma mening två gånger.
- Stycket har blivit sex meningar om lov och medgivande i en byggguide. Det är korrekt, men det tynger. Det som fanns förut, en mening och en länk, passade den här sidan bättre. Nu läser jag reglerna en tredje gång innan jag får börja gräva.
- "Samma sak gäller ett tätt plank som är högre än 1,2 meter över marken." Här står inte "på altanen". Ett fristående plank i trädgården kräver också medgivande, så det är inte fel, men i ett stycke om altanen blir jag osäker på vad som menas.
- Kortet "Fyll i hur högt golvet ligger och hur nära huset altanen står, så får du ett ja eller nej med paragrafen bakom." Samma kort som i registret, med samma brist: det nämner inte tomtgränsen.

### Människa eller mall

Resten av sidan låter som en snickare som förklarar i rätt ordning ("Två millimeter fel per bräda syns inte på bräda två. På bräda trettio är det sex centimeter."). Bygglovsstycket är den enda delen som låter som en jurist.

**Betyg: 4**

---

## Återkommande mönster

Förra gången hittade jag elva mönster. Status:

| Mönster | Förra gången | Nu |
|---|---|---|
| 1 december 2025 | 7, 10, 7 | 2, 2, 3. Rättat |
| "jag går på lagen" | 3 sidor | Sagt ordentligt i artikeln. Grannemedgivandet säger det kort, och altanräknaren länkar till artikeln. Rättat |
| "Ett ja över staketet" | 3 | 0. Rättat |
| Två eller tre mått | motsägelse på 3 sidor | Samma sak överallt. Rättat |
| "Sista ordet" / nämnden | 6 | 1 (artikeln). Rättat |
| Mejl med foto och måtten | 2 | Artikeln 1, altanräknaren i annan form. Godtagbart |
| "Titta på datumet" | 3 | 2 (altanräknaren, artikeln). Står kvar |
| Knapptext under inbäddade räknare | 3 | 3, med ny lydelse. Står kvar |
| Källa. / Antagande. | 19 celler | Samma som u-värdet och källaren. Det är sajtens form, inte ett fel |
| "Betydande olägenhet" | 5 | 1, förklarad. Rättat |
| "Oftast kommunen" | 3+2 | 2 på grannemedgivandet, 1 på altanräknaren. Godtagbart |

Nya eller kvarstående mönster:

1. **"Även om du inte visste bättre"**: altanräknaren 3 gånger (i "Gör inte det här", brödtexten och under tabellen), artikeln 1 ("en straffavgift som du betalar även om du inte visste bättre") och bygga altan 1 ("Den tas ut även av den som inte visste bättre"). Det är fem gånger på en kväll. Det är ett bra argument, men det slits ut.
2. **Samma meningar på flera sidor**:
   - "Avståndet till tomtgränsen är ett tredje mått, men det spelar bara in när altanen får tak, glas eller ett tätt plank." (altanräknaren, bygga altan)
   - "Äger flera personer grannfastigheten skriver alla under." (altanräknaren, artikeln)
   - "situationsplan, som är en enkel karta/ritning över tomten" (altanräknaren, artikeln, och grannemedgivandet i nästan samma form)

   Varje sida ska kunna läsas ensam, men ordagranna meningar gör att jag hör klistret.
3. **Knapptexten** "Knappen tar dig till räknaren med dina värden ifyllda. Där får du hela svaret och ser vad det bygger på.": 2 gånger i artikeln och 1 gång i bygga altan. Det är en mallrad, och en knapp som heter "Ge mig svaret" eller "Till räknaren" behöver ingen förklaring.
4. **Paragrafer**: "9 kap." står 34 gånger i grannemedgivandets standardvy, 13 i altanräknaren och 5 i artikeln. Jämförelsesidorna u-värdet och källaren har 0 och 1. På grannemedgivandet är det motiverat, men det gör sajtens två bygglovssidor till en egen dialekt.
5. **Öppningen**: källaren och u-värdet öppnar hos läsaren ("Du har mätt ullen på vinden ..."). Grannemedgivandet närmar sig nu med "Ska ett nytt förråd ... stå närmare tomtgränsen", men altanräknaren öppnar fortfarande med regeln: "Två mått avgör om du får bygga altanen utan bygglov". Det står kvar sedan förra gången.

**Medelbetyg: 4,25** (5, 4, 4, 4)
