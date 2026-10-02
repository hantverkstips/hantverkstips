# Texter till designlyftet, 2026-10-02

Till hantverkaren, via koordinatorn. Varje rad nedan står som `TEXT SAKNAS` i koden med nyckeln i en kommentar på samma rad. Byt strängen mot din text i filen som anges; rör inget annat på raden. `npm run kontrollera` är rött tills alla är skrivna, och sidan byggs inte förrän dess.

Kolumnen "I skissen" är vad formgivaren skrev för att fylla ytan. Den är ingen beställning och inte skriven i rösten; använd den bara för att se hur lång raden får bli och vad den ska göra. `{månad}`, `{antal}` och liknande fylls i av koden och ska stå kvar ordagrant.

## Fas A

### Startsidan, `src/pages/index.astro`

| Nyckel | Var och vad | Längd | I skissen |
|---|---|---|---|
| `start.hero.etikett` | Etiketten ovanför H1, versaler i liten stil. Måste innehålla `{månad}` | högst 24 tecken | "Just nu, {månad}" |
| `start.hero.siffror` | Raden under knapparna i heron, 14 px grått. Måste innehålla `{sidor}`, `{raknare}` och `{kategorier}`. En eller två meningar | högst 140 tecken | "{sidor} sidor, {raknare} räknare, {kategorier} granskade kategorier. Alla tal har källa, och det jag inte mätt kallar jag inte test." |
| `start.amnen.rubrik` | H2 över de elva ämneskorten | högst 30 tecken | "Var sitter problemet?" |
| `start.amnen.storst` | Tillägg i etiketten på det största ämnet, efter "Hela huset · 23 sidor · " | högst 18 tecken | "störst just nu" |
| `start.guider.rubrik` | H2 över det stora kortet och de fyra senaste. Måste innehålla `{månad}` | högst 30 tecken | "Börja här i {månad}" |
| `start.bast.rubrik` | H2 över de två kategorikorten med valen och priserna | högst 40 tecken | "Granskat på datablad, inte gissat" |
| `start.bast.prisrad` | Raden under kategorikorten. Måste innehålla `{butik}` och `{datum}`. Affiliateagenten läser den | högst 140 tecken | "Priserna är lästa hos {butik} {datum}. Jag har läst databladen men inte provat maskinerna." |
| `start.rakna.rubrik` | H2 över räknarna. Får innehålla `{antal}` | högst 30 tecken | "Räkna själv, {antal} räknare" |
| `start.rakna.alla` | Sista raden i listan över räknarna, en länk till /rakna/. Får innehålla `{antal}` | högst 50 tecken | "Alla {antal} räknare, med antagandena utskrivna" |
| `start.jobbar.rad` | Raden under H2 "Så jobbar jag", bredvid porträttplatsen | högst 90 tecken | "Christian, husägare med köksbord fullt av datablad. Ingen firma, ingen butik." |
| `start.jobbar.1.rubrik` | Första principen, rubrik i fetstil. Ett arbetssätt som går att kontrollera på sidorna, aldrig ett adjektiv | högst 28 tecken | "Egna räkningar" |
| `start.jobbar.1.text` | Första principen, en mening | högst 110 tecken | "Varje räknare visar antagandena, och alla tal går att spåra till en källa eller till mig." |
| `start.jobbar.2.rubrik` | Andra principen | högst 28 tecken | "Tillverkaren, inte butiken" |
| `start.jobbar.2.text` | | högst 110 tecken | "Prestanda kommer ur datablad och myndigheter. Butiken är källa bara för pris och lager." |
| `start.jobbar.3.rubrik` | Tredje principen | högst 28 tecken | "Granskat, inte testat" |
| `start.jobbar.3.text` | | högst 110 tecken | "Det jag inte haft i handen kallar jag granskning. Reklamen är märkt, och den styr inte valen." |

Utanför listan men värt att läsa om: stycket i heron står i `src/content/sidor/startsida.mdx` och säger "i september". Säsongsraden under det tar nu månaden, så stycket kan släppa den. Stycket är dessutom för långt för första skärmen: på 375 px hamnar knapparna under vecket med dagens elva rader. Högst tre meningar, cirka 300 tecken, så att etiketten, H1, stycket och knapparna ryms på 375 × 667.

### Säsongsraden, `src/lib/sasong.ts`

En post per månad, `sasong.1` till `sasong.12`. Raden står i heron under stycket. `fras` är en mening i din röst om vad som är aktuellt i huset den månaden; `lank` är de ord i frasen som blir länk, ordagrant ett utsnitt ur `fras`; `href` är adressen till den sida länken går till, med avslutande snedstreck, en publicerad sida.

| Nyckel | Längd | I skissen (oktober) |
|---|---|---|
| `sasong.[1–12].fras` | högst 140 tecken | "Luktar det instängt i källaren i oktober börjar du med orsaken, inte med maskinen." |
| `sasong.[1–12].lank` | två till sex ord ur frasen | |
| `sasong.[1–12].href` | en adress | |

### Sidfoten, `src/layouts/Bas.astro`

| Nyckel | Var och vad | Längd | I skissen |
|---|---|---|---|
| `sidfot.rad` | Raden under ordmärket i sidfoten, på varje sida | högst 70 tecken | "Huset, från nock till dränering. Skrivet vid köksbordet." |

### Pelarhubben, `src/components/vyer/PelarHub.astro`

| Nyckel | Var och vad | Längd | I skissen |
|---|---|---|---|
| `hub.borja.rubrik` | H2 över det stora kortet på varje hub | högst 24 tecken | "Börja här" |
| `hub.grannar.etikett` | Etiketten före chipsen till grannsidorna, längst ner på en hub som har dem. Måste innehålla `{pelare}` | högst 30 tecken | "Granne till {pelare}:" |

### Räkna själv-indexet, `src/pages/rakna/index.astro` och `src/lib/kalkyl/grupper.ts`

| Nyckel | Var och vad | Längd | I skissen |
|---|---|---|---|
| `rakna.prova.etikett` | Etiketten över den inbäddade daggpunktsräknaren i rubrikbandet | högst 20 tecken | "Prova direkt" |
| `rakna.prova.rad` | Raden bredvid daggpunktens tal (9,3 °C vid standardvärdena) i Prova direkt: vad talet betyder för väggarna | högst 120 tecken | "Ytor kallare än så blir våta. En yttervägg på 12 grader klarar sig, ett tvåglasfönster i januari gör det inte." |
| `grupper.fukt.rubrik` | H2 för gruppen daggpunkt, avfuktare, källaren, elkostnad. Står också i chipsen | högst 30 tecken | "Fukt" |
| `grupper.fukt.rad` | Raden efter H2, får vara tom | högst 60 tecken | "Säsong nu, oktober till januari." |
| `grupper.el.rubrik` | H2 för u-värde och rotavdrag | högst 30 tecken | "El och energi" |
| `grupper.el.rad` | | högst 60 tecken | |
| `grupper.kostnad.rubrik` | H2 för kök, badrum, takbyte och dränering | högst 30 tecken | "Vad kostar det?" |
| `grupper.kostnad.rad` | | högst 60 tecken | "Post för post, med arbete och material för sig." |
| `grupper.inne.rubrik` | H2 för innervägg, gipsplugg, gipsskruv, kvadratmeter, trappa | högst 30 tecken | "Väggar, golv och trappor" |
| `grupper.inne.rad` | | högst 60 tecken | |
| `grupper.ute.rubrik` | H2 för bygglov, grannemedgivande, altan, kontrollplan, måla ute, fasadyta, takavvattning | högst 30 tecken | "Altan, fasad och grund" |
| `grupper.ute.rad` | | högst 60 tecken | "Bäst i mars till september." |

### Registret, `src/lib/kalkyl/register.ts`

`register.[slug].svar`, en per räknare, 22 stycken: svarets form i två till fyra ord, gemener, utan punkt. Står till höger i räkna-indexets lista och i startsidans talkort när räknaren inte svarar med ett tal. I skissen: "inköpslista" (innervägg), "plugg eller regel" (gipsplugg), "längd och antal" (gipsskruv), "färg, tapet, golv" (kvadratmeter), "stegformeln" (trappa), "ja, nej eller anmälan" (bygglov-altan), "färdigt medgivande" (grannemedgivande), "inköpslista" (altan), "pdf till kommunen" (kontrollplan), "väder och daggpunkt" (måla ute), "burkar och liter" (fasadyta).

### Talkorten, `src/lib/kalkyl/korttal.ts`

`korttal.[slug]`, en per räknare som svarar med ett tal; utvecklaren lämnar listan över vilka. Villkoret som står bredvid talet räknaren ger vid sina standardvärden, så att talet går att förstå utan sidan: vad talet gäller och de värden det är räknat på. I skissen: "vid 20 grader och 50 %" (daggpunkt 9,3 °C), "torka tvätt, en gång i veckan" (elkostnad 280 kr), "nya luckor, efter rotavdraget" (kök 16 898 kr). Högst 40 tecken. Värdena i villkoret ska vara räknarens standardvärden; UX och bygge kontrollerar dem mot formelmodulen.

## Fas B

Spec: `docs/briefer/spec-designlyft-b-2026-10-02.md`.

| Nyckel | Fil | Var och vad | Längd | I skissen |
|---|---|---|---|---|
| `artikel.jobbar.text` | `src/components/vyer/Artikel.astro` och `Kategorisida.astro` | Rutan "Så jobbar jag" i högerspalten på varje artikel och kategorisida, en eller två meningar före länken "Så testar jag" | högst 140 tecken | "Talen är tillverkarnas. Jag har läst databladen men inte haft maskinerna. Reklamen styr inte valen." |
| `artikel.produkter.fot` | `src/components/vyer/Artikel.astro` | Raden sist i högerspaltens lista "Produkterna jag nämner". Måste innehålla `{butik}` och `{datum}`. Raderna i listan är ankare till korten på sidan, inte annonslänkar, så raden säger bara var priserna kommer ifrån och när de lästes (affiliatebeslut) | högst 60 tecken | "Priser hos {butik}, lästa {datum}." (affiliateagentens exempel) |
| `kategori.fler.rubrik` | `src/components/vyer/Kategorisida.astro` | H2 över korten längst ner på kategorisidan, med guider och granskningar i samma kategori. Måste innehålla `{namn}`. Ordet test får inte stå i den (SEO avsnitt 13) | högst 50 tecken | "Fler guider och tester om {namn}" (gamla, får inte stå kvar) |
| `guider.typ.kategori.namn` | `src/lib/guider.ts` | Namnet på typfiltret för kategorisidorna på /guider/, singular, i filterraden | högst 24 tecken | förut "Bäst i test" |
| `guider.typ.kategori.plural` | `src/lib/kort.ts` | Samma i plural, H1 och title på /guider/typ/kategori/ | högst 40 tecken | förut "Bäst i test" |

Utöver nycklarna: produktkortet visar ett nytt valfritt fält `svaghet` (en mening om det som talar emot produkten), i artiklarnas `produkter` och i kategorifilernas `val`. Det står inte som TEXT SAKNAS; kortet visar testets "Köp inte om" eller ingenting tills fältet är ifyllt.

## Fas C

Spec: `docs/briefer/spec-designlyft-c-2026-10-02.md`. Räknarnas svarsyta ersätter den separata Kort svar-rutan, och SEO kräver att den alltid har en mening i klartext med talet, villkoret och källan (`[slug].klartext`). Platshållarna fylls i av koden med räknarens aktuella värden.

### Steg 1, daggpunkten

| Nyckel | Fil | Var och vad | Längd | I skissen |
|---|---|---|---|---|
| `matare.grans` | `src/components/ui/Matare.astro` | Ordet före gränsvärdet i mätarens rad, på alla räknare med mätare: "83 % · {ordet} 75 %" | ett ord | "gränsen" |
| `daggpunkt.svar.vad` | `src/pages/rakna/daggpunkt.astro` | Raden under "grader" bredvid det stora talet: vad talet är | högst 30 tecken | "daggpunkten i ditt rum" |
| `daggpunkt.matare.etikett` | samma | Vad mätaren mäter, till vänster i raden ovanför stapeln | högst 30 tecken | "Luften intill ytan" |
| `daggpunkt.klartext` | samma | En mening i svarsytan med talet, villkoret och källan. Platshållare: `{daggpunkt}`, `{temp}`, `{rf}`, `{kalla}` (ytans temperatur) | högst 200 tecken | |

### Fas C steg 1, skrivet av hantverkaren 2026-10-02

- `matare.grans`: "gränsen"
- `daggpunkt.svar.vad`: "daggpunkten i ditt rum"
- `daggpunkt.matare.etikett`: "Luften intill ytan"
- `daggpunkt.klartext`: "Vid {temp} grader och {rf} procent luftfuktighet är daggpunkten {daggpunkt} grader, räknat med Magnus-formeln. Den kallaste ytan håller {kalla} grader."
- Därtill: `KORT_SVAR_YTA` i statusraden säger nu "än daggpunkten" i stället för "än så", eftersom raden står under mätaren och inte längre efter daggpunktsmeningen. Så räknar jag-stycket säger att osäkerheten står "i tabellen nedanför".

### Steg 2, avfuktare, elkostnad, u-värde, källaren, dränering

| Nyckel | Fil | Var och vad | Platshållare | Längd |
|---|---|---|---|---|
| `avfuktare.svar.vad` | `src/pages/rakna/avfuktare.astro` | Raden under "liter per dygn" bredvid det stora talet: vad talet är (ersätter etiketten "Minst") | inga | högst 30 tecken |
| `avfuktare.klartext` | samma | Meningen sist i svarsytan med talet, villkoret och källan | `{liter}`, `{typ}` (kondensavfuktare eller sorptionsavfuktare), `{volym}` (m³), `{temp}` (grader) | högst 200 tecken |
| `elkostnad.klartext` | `src/pages/rakna/elkostnad.astro` | Samma, maskinläget (tvättläget har redan sin mening) | `{kwh}`, `{kr}`, `{dagar}`, `{effekt}` (W), `{timmar}` per dygn, `{elpris}` kr per kWh | högst 200 tecken |
| `u-varde.klartext` | `src/pages/rakna/u-varde.astro` | Samma | `{u}`, `{del}`, `{krav}`, `{ytan}` (m²) | högst 200 tecken |
| `kallare.klartext` | `src/pages/rakna/kallare.astro` | Samma, med diagnosen i stället för ett tal | `{orsak}`, `{grans}` (75 % RF) | högst 200 tecken |
| `dranering.klartext` | `src/pages/rakna/dranering.astro` | Samma | `{lag}` och `{hog}` (arbetet i kr), `{lopmeter}`, `{krPerMeter}`, `{djup}` (m) | högst 200 tecken |

Meningar ur de borttagna Kort svar-rutorna står i UX-rapporten för steg 2. Hantverkaren avgör om något av det ska in i klartextmeningen eller i Därför blev svaret så. Stycket "Själva formeln har jag inte räknat fram själv …" på daggpunkten står nu under tabellen, och dess hänvisning behöver skrivas om.

### Fas C steg 2, skrivet av hantverkaren 2026-10-02

- `avfuktare.svar.vad`: "lägsta märkning på lådan"
- `avfuktare.klartext`: "Ett utrymme på {volym} m³ vid {temp} grader behöver en {typ} som är märkt för minst {liter} liter per dygn, för att hålla 55 procent luftfuktighet i augusti, räknat med SMHI:s tal för uteluften."
- `elkostnad.klartext`: "En maskin på {effekt} W som går {timmar} timmar om dygnet drar {kwh} kWh på {dagar} dagar, och med elpriset {elpris} kr per kWh kostar det {kr}."
- `u-varde.klartext`: "U-värdet blir {u} W/m²K, och Boverkets krav för den här delen av huset är {krav} W/m²K vid en ombyggnad, enligt de nya reglerna."
- `kallare.klartext`: "Bedömningen ”{orsak}” bygger på tecknen du kryssat i och på tejptestet, om du har gjort det. Hygrometerns tal jämförs med Boverkets gräns på {grans} procent för fukt i väggar och trä."
- `dranering.klartext`: "Med {lopmeter} löpmeter runt huset och {djup} meters schaktdjup kostar arbetet {lag} till {hog} kr, räknat på Villaägarnas {krPerMeter} kr per löpmeter."
- Källaren: tejptestets avläsning och "Köp ingenting förrän plasten har svarat" ur den borttagna Kort svar-rutan står nu i regeln för ej gjort tejptest i `kallare.ts` (Därför blev svaret så).
- Daggpunkten: "tabellen nedanför" är nu "tabellen ovanför".

### Steg 3, innervägg, gipsplugg, gipsskruv, kvadratmeter, trappa

Nycklarna (`[slug].klartext` med platshållare, och `gipsplugg.matare.etikett` om mätaren byggs) fylls i här efter utvecklarens leverans. Ändring i steg 2: i `elkostnad.klartext` fyller koden nu i `{timmar}` och `{dagar}` med ordet inräknat ("1 timme", "8 timmar"). Ordet efter platshållaren i hantverkarens mening ska därför bort.

| Nyckel | Fil | Var | Platshållare | Längd |
|---|---|---|---|---|
| `innervagg.klartext` | `src/pages/rakna/innervagg.astro` | sist i svarsytan: talet, villkoret och källan | `{reglar}`, `{skivor}` (utan spill), `{langd}`, `{hojd}` (m), `{regel}` ("45 × 70 mm"), `{cc}` (mm) | högst 200 tecken |
| `gipsplugg.klartext` | `src/pages/rakna/gipsplugg.astro` | samma | `{svar}` (fästet i ord), `{vikt}` (kg), `{punkter}`, `{last}` (kg per punkt), `{skiva}` | högst 200 tecken |
| `gipsskruv.klartext` | `src/pages/rakna/gipsskruv.astro` | samma | `{langd}` ("41 mm"), `{skiva}`, `{lag}`, `{regel}`, `{iRegeln}` ("28,5 mm") | högst 200 tecken |
| `kvadratmeter.svar.vad` | `src/pages/rakna/kvadratmeter.astro` | raden under "kvm" bredvid det stora talet: att talet är golvytan | inga | högst 30 tecken |
| `kvadratmeter.klartext` | samma | sist i svarsytan | `{golv}`, `{vaggar}` (efter avdrag), `{tak}` (kvm), `{langd}`, `{bredd}`, `{takhojd}` (m) | högst 200 tecken |
| `trappa.klartext` | `src/pages/rakna/trappa.astro` | sist i svarsytan | `{hojd}` (mm), `{antal}` (steg), `{steghojd}`, `{stegdjup}`, `{formel}` (2 × höjd + djup, mm) | högst 200 tecken |

På gipsplugg står svaret ("Regeln"), en förklarande rad och beskedet ("Skruva fast den i regeln bakom skivan.") nu under varandra i svarsytan och säger nästan samma sak två gånger. Hantverkaren avgör om raden eller beskedet ska kortas.

### Fas C steg 3, skrivet av hantverkaren 2026-10-02

- `innervagg.klartext`: "En vägg på {langd} × {hojd} m med reglar {regel} på c {cc} mm behöver {reglar} stående reglar och {skivor} gipsskivor utan spill, räknat med Gyprocs och Norgips mått."
- `gipsplugg.klartext`: "Med {last} kg per bärande punkt i {skiva} blir svaret ”{svar}”, räknat på att saken väger {vikt} kg och på tillverkarnas rekommenderade last per infästning."
- `gipsskruv.klartext`: "Till {skiva} gips i {lag} på en {regel} behöver du {langd} gipsskruv, och den går {iRegeln} in i regeln. Längden följer Norgips tumregel, gipsets tjocklek plus 20 mm in i trä eller 10 mm genom stål."
- `kvadratmeter.svar.vad`: "golvytan i rummet"
- `kvadratmeter.klartext`: "Ett rum på {langd} × {bredd} m med {takhojd} m i takhöjd har {golv} kvm golv, {tak} kvm tak och {vaggar} kvm vägg efter avdrag för dörr och fönster."
- `trappa.klartext`: "Med {hojd} mm i våningshöjd och {antal} steg blir steghöjden {steghojd} mm och stegdjupet {stegdjup} mm. Summan i trappformeln blir {formel} mm, och Svenskt Trä vill ha 600 till 650 mm."
- Gipsplugg, upprepningen: det stora ordet och resten är nu "Krok räcker", "Plugg i skivan räcker", "Regeln bakom skivan" och "Kortling mellan två reglar" (`SVAR_DELAR` i gipsplugg.ts). Beskeden för plugg och regel säger nu "Välj en plugg i tabellen som klarar lasten." och "Skruva fast saken i regeln med träskruv.". Raden om hur lasten fördelas står bara i Därför blev svaret så, inte två gånger.
- Gipsplugg, ur Kort svar-rutan: gränsen över 20 kg, tv på svängarm och skåp med lucka står nu i källraden under svaret i Därför blev svaret så. "Ingen källa, bara erfarenhet" är "Det här har jag ingen källa på. Det är mitt eget råd".
- Innervägg, gipsskruv, kvadratmeter och trappa: Kort svar-rutornas tal står redan i svarsytan eller i Därför blev svaret så; gipsskruvens tumregel och trappformelns spann står nu också i klartexten.
