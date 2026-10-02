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
