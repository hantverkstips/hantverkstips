# Affiliatestrategi för hantverkstips.se

Skriven 2026-09-15 av affiliateansvarig. Nätverket är Adtraction, programmet är Proffsmagasinet, sajten är ännu inte godkänd. Gäller tills programbeskrivningen är läst i Adtractions gränssnitt, då uppdateras avsnitt 2 och 7. Varje uppgift är märkt **verifierad** (källa längst ner) eller **antagande** (branschpraxis, kontrolleras vid godkännande).

## 0. Läget

Proffsmagasinets egen sida om affiliate, uppdaterad 2026-05-06, bekräftar att programmet går via Adtraction. Två svenska programkataloger anger 5 procent provision på ordervärdet och 30 dagars cookie. **Verifierad** att uppgifterna finns (källa 1, 2), **antagande** att de fortfarande gäller tills vi läst programbeskrivningen själva.

Beslut: `/go/` och databasen byggs ändå nätverksoberoende. Tabellen `butiker` får kolumnen `lankmall` med platshållare, så att en andra butik i ett annat nätverk blir en rad till, inte en kodväg till.

## 1. Hur en kunskapshub tjänar pengar utan att se ut som en butik

Principen är att produkten kommer efter resonemanget, och att varje produktmodul svarar på en fråga läsaren just fått. En köpknapp som dyker upp innan läsaren vet vad hon behöver är brus. Samma knapp efter meningen "du behöver minst 12 liter per dygn" är service.

### Projektguide ("bygg altan")

Tre moduler, i den här ordningen på sidan.

Först, inbäddat i texten, kompakta produktkort där ett verktyg faktiskt avgör resultatet. I altanguiden är det avsnittet om att skruva trall (skruvdragare) och avsnittet om att kapa reglar i vinkel (kap- och gersåg). Max ett kort per H2-avsnitt, och kortet motiveras av texten runt det: "en 18-voltsmaskin orkar 400 trallskruv på en laddning, en 12-voltsmaskin gör det inte".

Sedan, i slutet, modulen "Det här behöver du". En lista i två delar, verktyg och material, där verktygen har köpknapp och materialet är text utan länk (Proffsmagasinet säljer inte virke, se avsnitt 3). Den modulen väntas stå för merparten av klicken på en projektguide, eftersom läsaren har läst färdigt och vet vad hon saknar. Fem till åtta rader med en mening per rad om varför just den, ingen tabell.

Inbäddad prisjämförelse mellan butiker hör hemma på produktsidor, inte i projektguider.

Vad som stör: produktkort ovanför "Kort svar", köpknappar i faktarutor, och kort som texten inte nämner. Sådana plockas bort vid granskning.

### Problemguide ("fukt i källaren")

Produkten introduceras på ett ställe: efter diagnosen, i avsnittet som säger vilken åtgärd som gäller för läsarens fall. Kondens på rören ger ett avfuktarkort där. Inträngande markvatten ger ingen produkt alls, bara en länk till artikeln om när man ringer ett proffs. Att sajten ibland säger "köp ingenting" är det som gör att knappen fungerar när den väl kommer.

Utöver det bara verktygskortet till kalkylatorn, där texten talar om storlek. Nämner texten en enda produkt räcker kortet i texten, ingen lista i slutet.

### Produktsidor och bäst i test

Här får sajten se ut som en tidning med testresultat, och här ligger intäkten. DESIGN.md beskriver layouten. Från affiliatehåll är kraven att "Våra val" har tre etiketter som är konkreta (inte "premium", "mellanklass", "budget"), att jämförelsetabellen har köpknapp i sista raden, och att varje produktavsnitt slutar med en knapp. På testsidor ligger första knappen i omdömesblocket och den sista efter "Så testade vi", ingen däremellan.

### Kalkylatorer

Resultatet följs av två till tre produkter som klarar det uträknade värdet, sorterade på pris. Det är den mest kvalificerade klicksituationen på sajten: läsaren har själv matat in sin källare och ser en maskin som passar. Kalkylatorn ska aldrig rekommendera en produkt som inte klarar värdet med marginal, hellre visa "vi har inte testat någon i den storleken". Korten ligger alltid efter svaret, aldrig mellan formuläret och beskedet.

Undantaget från regeln om ordervärde över 1 500 kr: en förbrukningsvara får ett eget kort när räkningens utdata *är* den varan, alltså när verktyget räknar fram antal och dimension och kortet svarar på just de talen. Bandad gipsskruv på /rakna/innervagg/ och /rakna/gipsskruv/ är det enda fallet i september 2026. Villkoret är att kortet försvinner när svaret inte längre passar produkten: visas 45 eller 51 mm i resultatet får inget 41-millimeterskort stå kvar. En förbrukningsvara som texten bara nämner i förbifarten får inget kort.

### Förväntad klickfrekvens

Det finns inga publicerade svenska siffror per modultyp, och de internationella sammanställningarna jag hittat (wecantrack, Partnero) anger 0,5 till 1 procent som "bra" för affiliatelänkar generellt, utan urval eller metod redovisad, och utan uppdelning per placering. **Verifierad att siffrorna saknas** (källa 3). Vi sätter därför egna riktvärden efter första kvartalet med data och räknar tills dess med att bäst i test-sidor och kalkylatorer klickar tio gånger oftare än projektguider, vilket är ett antagande.

## 2. Adtraction konkret

### Verktyg som finns

**Verifierat** (källa 4, 5, 6, 7):

Spårningslänk: `https://track.adtraction.com/t/t?a={annons-id}&as={kanal-id}&t=2&tk=1&epi={epi}&url={måladress}`. Upp till fem fria parametrar, `epi` till `epi5`, och `url` för djuplänk måste ligga sist. EPI följer med till transaktioner och statistik i API:t. Maxlängd och teckenuppsättning är inte dokumenterade; vi håller oss till bokstäver, siffror och bindestreck under 64 tecken (antagande).

API v3 på `https://api.adtraction.net/v3/` med token i headern `X-Token` (hämtas under Account > Settings). Transaktionsobjektet innehåller `epi`, `epi2` till `epi5`, `orderValue`, `commission`, `transactionStatus`, `transactionDate`, `clickDate`, `programId`, `channelId`, `currency`, `paymentStatus` (1 ej fakturerad, 2 fakturerad annonsör, 3 klar för utbetalning, 4 utbetald) och `orderId`. Anropsgräns per timme, redovisad i svarshuvuden `X-RateLimit-Limit`, `X-RateLimit-Remaining` och `X-RateLimit-Reset`. Klick äldre än 14 månader kan inte hämtas. Det finns endpoints för klick, statistik (grupperad på program, kanal, dag, annons eller EPI), skapande av spårningslänkar, reklamationer (claims), utbetalningar och produktdatabas.

Produktfeed: alla feeder via Adtraction levereras som XML, uppdateras normalt en gång per dygn (varierar per annonsör), och feed-URL:en blir synlig först när kanalen har status Approved hos varumärket, under Products > Feeds. Hjälpartikeln bekräftar titlar, priser, bild-URL:er och lagerstatus som innehåll men listar inte fälten. Antagande, baserat på Adtraction-feeder jag sett: `SKU`, `Name`, `Description`, `Category`, `Price`, `OriginalPrice`, `Currency`, `Shipping`, `Instock`, `ProductUrl` (butikens adress), `TrackingUrl` (spårad adress utan EPI), `ImageUrl`, `Brand`, `Ean`, `ManufacturerArticleNumber`. Vilka Proffsmagasinet fyller i vet vi först när feeden är öppnad. Räkna med att `Ean`, `Brand`, `Price`, `Instock` och `ImageUrl` finns, att specifikationer saknas helt, och att `Category` följer butikens eget träd. Vår `specs`-JSONB fylls därför av produktexperten från datablad, inte av feeden.

Rapporter i gränssnittet: transaktioner, klick och statistik per EPI, vilket räcker för manuell kontroll. Allt systematiskt går via API:t.

### /go/-rutten

Rutten finns i `src/pages/go/[slug].ts` och gör 302 till `erbjudanden.affiliate_url`. Två ändringar krävs.

Först lagras inte feedens `TrackingUrl` som primär länk. Vi lagrar `ProductUrl` som `butik_url` och bygger spårningslänken vid anropet från `butiker.lankmall`, till exempel `https://track.adtraction.com/t/t?a=A&as=AS&t=2&tk=1&epi={epi}&url={url}`. Skälet är EPI: feedens länk har inget EPI, och utan EPI kan vi inte koppla en konvertering till en sida. `url`-värdet URL-kodas och ligger sist, som dokumentationen kräver.

Sedan sätts `epi` till klickradens id i bas 36. Det ger en unik koppling per klick, och allt vi vill veta om klicket (sida, modul, sidtyp) står redan i klickraden. `epi2` sätts till kategori-slug så att statistiken i gränssnittet går att läsa utan databas.

### Cookie-tid

Adtraction har ingen nätverksstandard; varje annonsör sätter sin i programbeskrivningen, som blir synlig vid ansökan. **Verifierad** (källa 8). Att Proffsmagasinet har 30 dagar är ett antagande stött av katalogerna i källa 2.

### Samtycke

Adtraction använder inga tredjepartscookies. Spårningen bygger på förstapartscookies hos annonsören, och samtycket för dem "should be gained on the advertiser's website". **Verifierad** (källa 9). Ingenting sätts på hantverkstips.se eftersom vi inte kör något Adtraction-skript, så ingen samtyckesbanner behövs. Att inget skript smyger in är en granskningspunkt.

När kunden nekar samtycke hos butiken går köpet ospårat. Adtraction lanserade i januari 2026 "Fair tracking", en kombination av sannolikhetsbaserad spårning och en klickersättning som ska kompensera för det, men vilka annonsörer som omfattas framgår inte. **Verifierad** (källa 10). Vi frågar vid godkännande om Proffsmagasinet är med.

### Vad godkännande kräver

Två steg. Först granskar Adtraction kanalen (sajten) och avslår vid "insufficient content or websites under construction", "amateurish web design" och "insufficient descriptions". Sedan ansöker vi till Proffsmagasinet med knappen "Apply to promote", och det är varumärket som avgör, inte Adtraction, normalt inom 1 till 7 arbetsdagar, ibland upp till två veckor. Ett avslag kan inte skickas om till samma varumärke. **Verifierad** (källa 8, 11). Det sista är skälet till att vi inte ansöker förrän fas 1 är publicerad: om-sida med namn och kontaktuppgifter, sidan "Så tjänar vi pengar", och tio till femton färdiga artiklar i nischen. Vad svenska byggvaruprogram tittar på därutöver, baserat på erfarenhet: att inget ser ut som en rabatt- eller kupongsajt, och att kanalbeskrivningen i Adtraction säger exakt vad sajten är (antagande).

## 3. Proffsmagasinet, vilka kategorier

Proffsmagasinet har över 140 000 produkter, fri frakt över 999 kr och utsågs till Årets butik 2025. Omsättning 2024 var 846 miljoner kronor, ägare är DV Group. **Verifierad** (källa 12, 13). Det är en stabil motpart, men de driver också en egen kunskapsportal med "bäst i test"-artiklar som konkurrerar med oss i sök. Deras kapsågstest bygger på Trustpilot-omdömen, inte egna mätningar, vilket är exakt det gap vi ska fylla. **Verifierad** (källa 14).

Prioriterade kategorier, i ordning. Sökvolym är min uppskattning tills SEO-strategen kört siffrorna.

| # | Kategori | Ordervärde | Säsong | Sök | Konkurrens | Koppling till kunskap |
|---|---|---|---|---|---|---|
| 1 | Luftavfuktare | 3 000 till 15 000 kr, byggavfuktare upp till 170 000 | aug till nov | Hög | Hög i sök, men tunna sidor | Fukt i källare, krypgrund, garage. Kalkylator |
| 2 | Kap- och gersågar | 2 000 till 11 000 kr | mars till sep | Hög | Butiken själv, Testix | Altan, panel, golv |
| 3 | Sänksågar och cirkelsågar | 2 000 till 8 000 kr | vår, sommar | Medel | Medel | Altan, skivmaterial, kök |
| 4 | Skruvdragare och slagskruvdragare | 1 500 till 5 000 kr med batteri | året runt | Mycket hög | Mycket hög | Altan (trallskruv), allt bygge. Här räcker det med en bra kategorisida |
| 5 | Lasermätare och krysslaser | 1 500 till 8 000 kr | året runt | Medel | Låg | Renovering, kakel, altan i våg |
| 6 | Byggfläktar och byggtorkar | 1 500 till 20 000 kr | nov till mars | Medel | Låg | Uttorkning efter vattenskada, garage, bygge på vintern |
| 7 | Kompressorer och spikpistoler | 2 500 till 15 000 kr | vår, sommar | Medel | Låg | Altan, panel, tak (som par, spikpistolen kräver kompressorn eller batteri) |
| 8 | Borrhammare | 1 500 till 6 000 kr | året runt | Medel | Medel | Grund, källare, betong |
| 9 | Fuktmätare | 500 till 3 000 kr | aug till nov | Medel | Låg | Diagnos i fuktguider. Lågt ordervärde men bästa ingången till avfuktarklustret |

Bekräftat i sortimentet: avfuktare (39 maskiner, Wood's, Mitsubishi Electric, Master, Acetec, El-Björn), kap- och gersågar (DeWalt, Bosch, Makita, Metabo, Milwaukee, HiKOKI), skruvdragare (429), laserinstrument (460), kompressorer, spikpistoler, borrhammare (262). **Verifierad** (källa 15, 16, 17).

Kategorier vi inte gör: virke och trall (kategorin "Byggmaterial" har 86 produkter, inget virke), takstegar och byggställningar (inte bekräftade i sortimentet, och de kräver montage vi inte kan ansvara för), trädgårdsmaskiner och robotgräsklippare (högt ordervärde men fel identitet, sajten handlar om hus), badrum och VVS-installation (12 000 produkter men det mesta får en lekman inte göra), handverktyg och förbrukning (ordervärde under provisionens vettighet), skydd och kläder. Blir "tak" ett ämnesområde i fas 2 länkar vi verktyg (spikpistol, vinkelslip, laser), inte takmaterial.

## 4. Krav på konverteringsdesign

Det mesta finns redan i DESIGN.md. Det här är tilläggen och skärpningarna från affiliatehåll.

Modul "Det här behöver du" saknas i DESIGN.md och behöver ritas: två H3 (Verktyg, Material), rader med namn, en mening, pris och köpknapp för verktyg, bara text för material. Kompakt kort får inte användas här, det blir för tungt med åtta rader.

Priset har alltid datum, "4 990 kr hos Proffsmagasinet, 12 sep", i finstilt. Det skiljer riktig data från påhittade priser och skyddar oss när priset ändrats.

Lagerstatus visas bara när den är negativ. Ett grönt "i lager" på varje kort ser ut som en butik.

Prishistorik byggs från fas 2 som ett litet linjediagram i det fulla produktkortet, 90 dagar, lägsta pris markerat, inline-SVG utan hover. Prisjakt har gjort den grafen till sitt mest lästa element.

Flera butiker: i fas 2 en knapprad per butik, billigast först. Kortet ska redan nu ha plats för två rader under priset utan att växa.

Förebilder. Wirecutter lägger reklamtexten ovanför rubriken, "We independently review everything we recommend. When you buy through our links, we may earn a commission", och har en sida om hur intäkten hålls skild från urvalet (källa 18). RTINGS visar egna mätvärden i tabeller före löptexten och har en öppen metodsida, vilket våra omdömesblock följer (källa 19). Prisjakt märker med "annonslänk" överst på varje artikel, den svenska praxis läsare känner igen (källa 20). Alla tre **verifierade**. Motexempel är Proffsmagasinets kunskapsportal: 2 200 ord, fyra produkter, kundomdömen som "test".

## 5. Efterlevnad

### Reklammärkning

Konsumentverkets linje är att märkningen ska förstås "direkt, redan vid en flyktig kontakt" och att ordet "reklam" är det som rekommenderas. IAB Sverige, Sveriges Tidskrifter och TU publicerade i september 2025 en gemensam rekommendation för affiliatelänkar i redaktionell miljö: länken ska tydligt märkas som kommersiell, i direkt anslutning till länken ska avsändaren framgå, och annonsören får inte påverka urval eller placering. Adtractions egna riktlinjer föreslår "Inlägget är reklam för x och innehåller annonslänkar" överst. **Verifierad** (källa 21, 22, 23, 24).

Formuleringen i bandet under sidhuvudet, fastställd, omskriven till "jag" 2026-09-21 när hela sajten gick över till Christians röst (docs/ROST.md: "jag" om det han gjort och tycker, "vi" bara om honom och läsaren tillsammans). Sakinnehållet är oförändrat, och att avsändaren är en namngiven person stärker snarare kravet på att avsändaren ska framgå:

> Reklam. Sidan innehåller annonslänkar till Proffsmagasinet. Handlar du via dem får jag provision, priset för dig är detsamma. Så tjänar jag pengar.

Länkens adress är fortsatt `/om/sa-tjanar-vi-pengar/`, eftersom en publicerad URL inte byts för en formulering.

Under varje köpknapp: "Annonslänk · pris 12 sep". DESIGN.md skriver "Reklamlänk", ändras till "Annonslänk" så att vi följer branschrekommendationen och nätverkets egna riktlinjer ordagrant. Bandet använder "Reklam" eftersom det är Konsumentverkets ord. Inga "i samarbete med", inga hashtaggar, ingen märkning som bara ligger i sidfoten.

Sidan "Så tjänar vi pengar" är obligatorisk före lansering och ska säga att produktexperten väljer produkt innan affiliateansvarig ser sidan.

### Googles recensionssystem

Från Googles sida "Write high quality reviews", uppdaterad 2025-12-10, och sidan om recensionssystemet. **Verifierad** (källa 25, 26). Varje test- och bäst i test-sida ska ha:

- Egna mätvärden i siffror, med metod.
- Egna bilder eller egna diagram som bevis på hantering.
- Vad som skiljer produkten från konkurrenterna.
- Vad som är dåligt, från egen erfarenhet.
- För vem den passar och inte passar.
- Motivering med förstahandsbevis när något kallas bäst.
- Länkar till flera säljare där det är rimligt (fas 2, när andra butiken finns; tills dess länk till tillverkarens sida som sekundär källa).
- Rankade listor som fungerar utan att man klickar vidare.
- `rel="sponsored"` på alla affiliatelänkar.
- Datum för test och senaste uppdatering.
- Ingen sida som bara är produktlista med knappar.

Systemet arbetar på sidnivå men kan slå på hela sajten om andelen recensionsinnehåll är hög. Det är skälet till att kunskapsartiklar och problemguider ska vara majoriteten.

## 6. Mätning

Klicktabellen utökas med `modul` (varaval, tabell, kort_kompakt, kort_full, kalkylator, behovslista, avslut), `sidtyp` (guide, problemguide, projektguide, test, kategori, verktyg, jamforelse, kunskap), `position` (löpnummer för knappen på sidan), `epi` (bas 36 av id, skrivs efter insert) och `kategori_slug`. Köpknappen får modul och position som props; layouten sätter sidtyp. `/go/` läser dem ur query-parametrar som komponenten lägger på länken.

Ny tabell `konverteringar`: `epi`, `order_varde`, `provision`, `status` (väntande, godkänd, avvisad), `klick_tid`, `order_tid`, `betalstatus`, `natverks_id`, `importerad`. Fylls dagligen från API:ts transaktionsendpoint. Matchning sker på `epi`; saknas EPI i en rad matchas på `clickDate` mot klick inom fem minuter i samma program, och raden märks som osäker.

Intäkt per sida är summan av godkänd provision för klick med samma `sida`, per modul och sidtyp på samma sätt. Intäkt per klick per modul styr designbesluten i fas 3, till exempel om den fasta köpknappsraden ska omprövas. Klick per 100 besök kräver sidvisningar per sökväg från Vercel Analytics, exporterade veckovis till tabellen `sidvisningar`.

## 7. Risker

Programmet stängs eller villkoren ändras utan varsel. Partneravtalet säger ordagrant att ett program, inklusive provisionsvillkoren, "can be amended or terminated with immediate effect at any given time", och att båda parter kan säga upp avtalet med omedelbar verkan. **Verifierad** (källa 27). Det är hårdare än hos de flesta nätverk. Motmedel: `/go/` gör att butiken byts utan att röra innehåll, `ean` i produkttabellen gör att en andra butiks feed kan matchas automatiskt, och intäkt per sida mäts så att en sänkning syns samma månad. Andra byggvaruhandlare med program hos Adtraction bevakas från dag ett.

Avslag på programansökan är slutgiltigt. Motmedel: ansök inte förrän fas 1 är komplett, och skriv kanalbeskrivningen noga.

Feeden saknar fält, sannolikt specifikationer och ibland EAN. Motmedel: `specs` fylls av produktexperten, EAN hämtas från tillverkaren, och importen loggar produkter i innehållet som försvunnit ur feeden så att sidan får "slut"-tillstånd istället för trasig länk.

Feeden uppdateras oregelbundet och API:t har timvisa anropsgränser. Motmedel: importen körs en gång per dygn, läser `X-RateLimit-Remaining` och backar när den är låg. Klickhistoriken i API:t försvinner efter 14 månader, så vår egen klicktabell är den bestående källan.

Spårningsbortfall när kunden nekar samtycke hos butiken. Motmedel: tidsmatchningen i avsnitt 6, 10 till 20 procents antaget bortfall när en sida värderas, och frågan om Fair tracking vid godkännande.

Proffsmagasinet konkurrerar om samma sökningar. Motmedel: egna mätningar. Deras test är Trustpilot-sammanställningar, vårt är siffror.

## Källor

1. Proffsmagasinet, "Tjäna pengar på att rekommendera Proffsmagasinet", uppdaterad 2026-05-06: https://www.proffsmagasinet.se/kunskapsportalen/nyheter/tjana-pengar-pa-att-rekommendera-proffsmagasinet
2. Annonseringonline, Proffsmagasinet affiliateprogram (Adtraction, 5 %, 30 dagar): https://www.annonseringonline.se/affiliateprogram/proffsmagasinet
3. wecantrack, CTR-sammanställning utan metod: https://wecantrack.com/insights/affiliate-click-through-rate-statistics/
4. Adtraction, Get started with EPI: https://help.adtraction.com/en/articles/1563109-get-started-with-epi
5. Adtraction API-dokumentation: https://apidocs.adtraction.net/nextgen/
6. Adtraction, Product feeds via Adtraction: https://help.adtraction.com/en/articles/13398866-product-feeds-via-adtraction
7. Strackr, Adtraction API (paymentStatus-koder): https://strackr.com/docs/adtraction
8. Adtraction, Get started with partner marketing: https://help.adtraction.com/en/articles/1563019-get-started-with-partner-marketing
9. APMA, Adtraction tracking Q&A: https://theapma.co.uk/adtraction-tracking-qa/
10. Adtraction, Fair tracking, 2026-01-15: https://adtraction.com/blog/how-adtraction-is-closing-the-consent-gap-with-fair-tracking/
11. Adtraction, How do I apply to a brand: https://help.adtraction.com/en/articles/12052590-how-do-i-apply-to-a-brand
12. Proffsmagasinet, startsida (140 000 produkter, fri frakt, Årets butik 2025): https://www.proffsmagasinet.se/
13. Allabolag, Proffsmagasinet Svenska AB: https://www.allabolag.se/5567283857/proffsmagasinet-svenska-ab
14. Proffsmagasinet, kap- och gersågstest: https://www.proffsmagasinet.se/kunskapsportalen/tester/test-5-populara-kap-och-gersagar
15. Proffsmagasinet, avfuktare: https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare
16. Proffsmagasinet, kap- och gersågar: https://www.proffsmagasinet.se/maskiner-verktyg/stationara-verktyg/sagverktyg/kap-och-gersagar
17. Proffsmagasinet, maskiner och verktyg: https://www.proffsmagasinet.se/maskiner-verktyg
18. Wirecutter, hur de tjänar pengar (via Affiverse, mars 2026): https://www.affiversemedia.com/wirecutter-just-made-the-case-for-radical-transparency-most-publishers-wont-follow-it/
19. RTINGS, How we make money: https://www.rtings.com/company/how-we-make-money
20. Webbstrateg, märkning av affiliate i Sverige: https://www.webbstrateg.net/markning-av-reklam-affiliate-och-annonssamarbeten-pa-internet/
21. Konsumentverket, dold marknadsföring, regler för företag: https://www.konsumentverket.se/marknadsratt-foretag/dold-marknadsforing-i-sociala-medier-regler-for-foretag/
22. IAB Sverige, rekommendation för märkning av affiliatelänkar i redaktionell miljö, september 2025: https://iabsverige.se/wp-content/uploads/2025/09/Rekommendation-kring-affiliatemarknadsforing.pdf
23. TU, pressmeddelande om rekommendationen: https://tu.se/pressmeddelanden/enade-rekommendationer-om-affiliatelankar/
24. Adtraction, uppdaterade annonseringsriktlinjer: https://adtraction.com/se/blogg/uppdaterade-annonseringsriktlinjer/
25. Google, Write high quality reviews, uppdaterad 2025-12-10: https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews
26. Google, Reviews system: https://developers.google.com/search/docs/appearance/reviews-system
27. Adtraction, Partner agreement: https://adtraction.com/partner-agreement/
