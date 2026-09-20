# Underlag: rotavdragskalkylatorn

Verktyg 15 i `docs/VERKTYGSPLAN.md`, byggt 2026-09-20 till `/rakna/rotavdrag/`. Underlaget är hämtat av utvecklaren direkt hos Skatteverket, eftersom rotklustret inte är skrivet och ingen artikel på sajten bär talen än. Dräneringsverktyget har sedan 2026-09-18 tre av konstanterna (`ROT_ANDEL`, `ROT_TAK_KR` och antagandet `ROT_GRUNDANDE_ANDEL`), och de två modulerna säger samma sak om procentsats och tak.

Varje tal nedan är läst 20 september 2026 på den adress som står på raden. Ingen siffra i verktyget kommer från en bank, en offertförmedlare eller en branschsajt.

## 1. Sökanalys

`docs/SOKORDSANALYS.md` avsnitt 7.2 och 7.4. Klustret är 18 460 sökningar i månaden: rotavdrag 2026 18 100 (+236 procent), rotavdrag hur mycket 320, rotavdrag renovering 30, rotavdrag beräkna 10. Vinnbarhet 5.

Ettan på huvudfrasen är Nordea, och topp fem är bank, hantverksförmedlare, bank, offertförmedlare och låneförmedlare. **Skatteverket rankar inte i topp fem på sin egen regel.** Fyra luckor i fältet, och de är verktygets fyra skäl att finnas:

1. **Ingen anger datum.** Nordea har procentsats och tak rätt men skriver inte när de började gälla. Ingen sida i topp fem förklarar att det är betalningsdatumet och inte fakturadatumet som avgör vilken procentsats som gäller, alltså det enda som betyder något vid ett årsskifte.
2. **Ingen räknar.** Frasen är per definition en räkneuppgift och besvaras med ett statiskt intervall.
3. **Ingen räknar mot betald skatt**, som är det som faktiskt sätter taket för den som tjänar lite.
4. **Två faktafel går att slå på direkt.** Ettan på "renovera kök kostnad" anger rot-taket till 75 000 kr, vilket är det gemensamma taket för rot och rut. Ettan på "byta tak kostnad" nämner inte rotavdrag alls på en fras där arbetet är merparten av notan.

Sidan döps om varje december. Rutinen står i kommentaren vid `ARET` i `src/lib/kalkyl/rotavdrag.ts`.

## 2. Talen, en per rad med källa

Tabellen läses av `scripts/test-kalkyl-rotavdrag.mjs`, som jämför varje rad mot konstanten med samma namn i modulen och kräver att varje adress går till Skatteverket. Ändras ett tal här utan att modulen ändras, eller tvärtom, faller testet.

| Konstant | Värde | Källa | Adress |
|---|---|---|---|
| ROT_PROCENT | 30 | Skatteverket, så fungerar rotavdraget: "Företaget får dra av högst 30 procent av arbetskostnaden" | https://www.skatteverket.se/privat/fastigheterochbostad/rotarbeteochrutarbete/safungerarrotavdraget.4.5947400c11f47f7f9dd80004014.html |
| ROT_PROCENT_HOJT | 50 | Skatteverket, nyheten Rotavdraget höjs till 50 procent | https://www.skatteverket.se/omoss/pressochmedia/nyheter/2025/nyheter/rotavdragethojstill50procent.5.6e1dd38d196873bc1e11af.html |
| ROT_TAK_KR | 50000 | Skatteverket: "Du kan få högst 75 000 kronor per år i rotavdrag och rutavdrag. Av den summan får högst 50 000 kronor vara rotavdrag" | https://www.skatteverket.se/privat/fastigheterochbostad/rotarbeteochrutarbete/safungerarrotavdraget.4.5947400c11f47f7f9dd80004014.html |
| GEMENSAMT_TAK_KR | 75000 | Skatteverket, samma mening som raden ovan | https://www.skatteverket.se/privat/fastigheterochbostad/rotarbeteochrutarbete.4.2e56d4ba1202f95012080002966.html |
| NYBYGGT_SPARRAR_AR | 5 | Skatteverket: "Du kan inte få rotavdrag för ombyggnad eller tillbyggnad de första fem åren efter det år huset byggdes färdigt" | https://www.skatteverket.se/privat/fastigheterochbostad/rotarbeteochrutarbete/safungerarrotavdraget.4.5947400c11f47f7f9dd80004014.html |
| SKV_EXEMPEL_ARBETE_EXKL_MOMS_KR | 10000 | Skatteverkets eget räkneexempel, på företagssidan, som utgår från arbetskostnad utan moms | https://www.skatteverket.se/foretag/skatterochavdrag/rotochrut/safungerarrotavdraget.4.2ef18e6a125660db8b080002709.html |
| SKV_EXEMPEL_ARBETE_INKL_MOMS_KR | 12500 | Samma exempel, samma sida: 10 000 kr plus 25 procent moms | https://www.skatteverket.se/foretag/skatterochavdrag/rotochrut/safungerarrotavdraget.4.2ef18e6a125660db8b080002709.html |
| SKV_EXEMPEL_AVDRAG_KR | 3750 | Samma exempel, samma sida: "3 750 kronor" i rotavdrag | https://www.skatteverket.se/foretag/skatterochavdrag/rotochrut/safungerarrotavdraget.4.2ef18e6a125660db8b080002709.html |
| ARET | 2026 | Året verktyget räknar för | https://www7.skatteverket.se/portal/rot-rut/ |

### Våra egna räknetal, som inte står hos Skatteverket

Rättat 2026-09-20 efter granskningen. Fram till dess påstod den här filen, modulen och testskriptet att talen nedan var Skatteverkets eget räkneexempel på fakturamodellen. **Det stämmer inte.** Sidan *Så fungerar rotavdraget* har hämtats i sin helhet och genomsökts, och talen står inte där. Konstanterna är rätt räknade på procentsatsen, men källhänvisningen var påhittad och är nu borta.

| Vårt tal | Värde | Vad det är |
|---|---|---|
| EXEMPEL_ARBETE_KR | 10000 | En arbetskostnad inklusive moms, vald för att den är lätt att räkna i huvudet |
| EXEMPEL_AVDRAG_KR | 3000 | Procentsatsen på den, räknad av oss |
| EXEMPEL_BETALA_KR | 7000 | Vad som blir kvar, räknat av oss |

Skillnaden mot Skatteverkets exempel är momsen och ingenting annat. Myndigheten utgår från 10 000 kr **exklusive** moms, alltså 12 500 kr med moms, och landar på 3 750 kr. Vårt fält frågar efter arbetskostnaden **inklusive** moms, så samma faktura ger samma svar i båda räkningarna; det är bara vilket av de två talen läsaren skriver in som skiljer. Momsen är den vanligaste läsarfällan på sidan, och därför står Skatteverkets tal som en egen rad i antagandetabellen.

Testskriptet låser numera båda hållen: vårt exempel mot formeln, och formeln mot Skatteverkets verkliga exempel (12 500 kr in ger 3 750 kr ut).

### Citaten, ordagrant

**Procentsatsen och taken.** "Företaget får dra av högst 30 procent av arbetskostnaden." "Du kan få högst 75 000 kronor per år i rotavdrag och rutavdrag. Av den summan får högst 50 000 kronor vara rotavdrag." Skatteverket, Så fungerar rotavdraget.

**Vad som ger avdrag.** "Det är endast arbetskostnaden som ger rätt till rotavdrag." Material och resor gör det inte. Skatteverket, Så fungerar rotavdraget.

**Maskinell utrustning.** Att betala för "maskinell utrustning, till exempel grävmaskiner, borraggregat eller liknande" ger inte rätt till rotavdrag. Skatteverket, Ger arbetet rätt till rotavdrag.

**Betalningsdatumet.** "Höjningen är tillfällig och gäller färdiga arbeten där kunden betalar fakturan mellan 12 maj och 31 december 2025." Skatteverket, nyheten Rotavdraget höjs till 50 procent. Det är alltså betalningen och inte fakturan eller arbetet som daterar avdraget.

**Skatten som tak.** "Summan av skattereduktionerna får inte överstiga summan av kommunal inkomstskatt, statlig inkomstskatt, fastighetsavgift och fastighetsskatt." Skatteverket, Rotarbete och rutarbete. På frågesidan: "Rot- eller rutavdraget räknas av mot kommunal och statlig inkomstskatt, statlig fastighetsskatt och kommunal fastighetsavgift", och "Exakt vilken inkomst du måste ha för att kunna utnyttja den maximala skattereduktionen är omöjligt att säga."

**Flera ägare.** "Om flera personer äger fastigheten kan de dela på avdraget. Sammanlagt kan dock rotavdraget aldrig bli högre än 30 procent av den totala arbetskostnaden." Skatteverket, Så fungerar rotavdraget.

**Vem som får göra avdraget.** Sex villkor: du ska äga bostaden under den period arbetet utförs **och** nyttja den, eller låta en förälder göra det; du ska ha fyllt 18 år senast vid årets slut; du ska vara obegränsat skattskyldig i Sverige; och du ska betala elektroniskt. "Du kan inte få rotavdrag för arbeten som du utför åt dig själv", och inte heller av en närstående. **En hyrd bostad ger inget rotavdrag alls.**

**Räkneexemplet, på företagssidan.** Arbetskostnad 10 000 kr, material 8 000 kr, resa 400 kr och moms 25 procent på 4 600 kr. Rotavdraget blir "3 750 kronor", alltså procentsatsen på arbetskostnaden med moms. Skatteverket, Så fungerar rotavdraget för företag. Det är myndighetens enda räkneexempel av den här sorten, och det är momsen som gör att det landar på ett annat tal än vårt.

**Femårsregeln.** "Du kan inte få rotavdrag för ombyggnad eller tillbyggnad de första fem åren efter det år huset byggdes färdigt. Det är året som räknas ... Det år huset byggdes färdigt kallas för värdeår. Reparation och underhållsarbeten ger rätt till rotavdrag oavsett hur gammalt huset är." Skatteverket, Så fungerar rotavdraget.

**Ansökan.** Arbetet ska vara utfört och företaget ska ha ansökt om utbetalning senast den 31 januari året efter att kunden betalade. Samma sida.

**Grävmaskinisten.** Att utföra godkänt arbete "som kranskötare eller grävmaskinist ... på tomten" står under rubriken om vad rotavdrag ges för. Det är alltså bara maskinen som är undantagen, inte maskinistens arbetade tid. Skatteverket, Ger arbetet rätt till rotavdrag.

## 3. Räkningen, i sex steg

1. **Avdraget rakt av.** Procentsatsen på arbetskostnaden, avrundat till hel krona. Material ligger utanför och rörs aldrig.
2. **Rot-taket.** 50 000 kr gånger antalet ägare, minus det rotavdrag som redan är utnyttjat i år.
3. **Det gemensamma taket.** 75 000 kr gånger antalet ägare, minus utnyttjat rot **och** utnyttjat rut.
4. **Skatten.** Den angivna skatten minus det som redan är utnyttjat i rot och rut. Lämnas fältet tomt vägs skatten inte, och svaret skriver ut att den inte är vägd.
5. **Avdraget** är det minsta av de fyra. Vilket av dem som band svaret står i beskedet.
6. **Att betala** är arbete plus material minus avdraget.

**Två fält för det utnyttjade, inte ett.** Det utnyttjade rotavdraget äter av både rot-taket och det gemensamma taket. Det utnyttjade rutavdraget äter bara av det gemensamma. Ett enda fält hade inte kunnat skilja dem åt, och skillnaden är hela skälet till att det gemensamma taket finns. Det är också den rad ettan på "renovera kök kostnad" har fel om.

## 4. Gör inte det här

1. Räkna inte procentsatsen på hela fakturan. Avdraget gäller arbetskostnaden och ingenting annat.
2. Låt inte maskinhyran ligga i arbetsposten. Grävmaskiner och borraggregat är undantagna med namns nämnande.
3. Betala inte en faktura från förra året nu och räkna med den högre procentsatsen. Dagen du betalar avgör.
4. Dela inte avdraget med någon som inte äger bostaden. Den som står utanför har inget eget tak att lägga till.

## 5. Våra egna antaganden

Alla tal om procentsats, tak och datum kommer från Skatteverket. Fyra saker är ändå våra:

- **Gränserna på fälten**, alltså fem miljoner kronor på en faktura och fyra ägare på en bostad. De är fältens rimlighetskontroll mot skrivfel, inte regler. Skatteverket sätter ingen gräns för antalet ägare.
- **Standardvärdet en ägare.** Två ägare dubblar taket, och ett verktyg som antar två skulle visa ett avdrag den ensamstående läsaren aldrig får. Hela fältets fel är att avdraget ser större ut än det blir, så vårt standardvärde lutar åt andra hållet.
- **Att det utnyttjade beloppet gäller alla ägare tillsammans.** Fälten frågar efter summan för dem som delar, eftersom taket i verktyget också är räknat för dem tillsammans.
- **Skattefältet är en förenkling.** Tillagt 2026-09-20 efter granskningen. Skatteverkets gräns är den **slutliga** skatten, efter att den minskats med jobbskatteavdraget, den allmänna pensionsavgiften och underskott av kapital. Vi frågar efter den **preliminära** skatten, som är det tal läsaren faktiskt har i handen, och svaret blir därför något generöst. Jobbskatteavdraget är stort och äter av samma utrymme. Raden står märkt Antagande i antagandetabellen, och den som ligger nära gränsen hänvisas till Skatteverkets e-tjänst.

Utöver dem är räknetalen i avsnitt 2, alltså 10 000, 3 000 och 7 000 kr, våra egna och inte Skatteverkets.

## 6. Vad chefredaktören verifierar i webbläsare

1. Att procentsatsen fortfarande är 30 på Så fungerar rotavdraget, och att ingen ny tillfällig höjning ligger ute.
2. Att de två takbeloppen står kvar i samma mening.
3. Att grävmaskiner och borraggregat fortfarande står i listan över vad som inte ger avdrag.
4. Att nyheten om den tillfälliga höjningen ligger kvar med sina två datum, eller att en annan Skatteverkssida bär dem.
5. Att företagssidans räkneexempel fortfarande landar på 3 750 kr, eftersom testskriptet låser formeln mot det. Talen 10 000, 3 000 och 7 000 kr är våra egna och ska inte letas efter hos Skatteverket.
6. Att femårsregeln står kvar med värdeåret som utgångspunkt, och att gränsen mot reparation och underhåll är oförändrad.
7. Att villkorslistan fortfarande har sex punkter, och att hyrd bostad fortfarande saknar rätt till rotavdrag.
