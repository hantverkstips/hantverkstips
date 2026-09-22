---
name: affiliate
description: Hur hantverkstips.se tjänar pengar utan att se ut som en butik. Reklammärkning enligt marknadsföringslagen, länkar via /go/, var produktkort och köpknappar får stå, Googles recensionsriktlinjer, Adtraction och Proffsmagasinets program, spårning och mätning. Läs innan en produkt, en knapp eller en reklamrad läggs på en sida eller granskas.
---

# Affiliate

Nätverket är Adtraction, programmet är Proffsmagasinet, och principen är att produkten kommer efter resonemanget. En köpknapp innan läsaren vet vad hon behöver är brus; samma knapp efter meningen "du behöver minst 12 liter per dygn" är service. Allt nedan följer av det. Detaljer, källor och det som ännu är antaganden om programmet står i `docs/AFFILIATE.md`.

## 1. Juridiken, det som aldrig förhandlas

- **Reklammärkning** på varje sida med affiliatelänkar, ovanför första länken, synlig vid flyktig kontakt, med ordet "Reklam" (Konsumentverkets ord) och avsändaren namngiven (IAB, Sveriges Tidskrifter och TU, september 2025). Layouten visar bandet när rutten skickar `reklam={true}`; det bestäms av sidtyp och innehåll i rutten, aldrig i innehållsfilen. Fastställd lydelse:

  > Reklam. Sidan innehåller annonslänkar till Proffsmagasinet. Handlar du via dem får jag provision, priset för dig är detsamma. Så tjänar jag pengar.

- **Under varje köpknapp** står "Annonslänk · pris 12 sep". Priset har alltid datum.
- **Alla affiliatelänkar** går via `/go/[produkt-slug]/` med `rel="sponsored nofollow"`, byggda av `<Kopknapp>` och `goLank()` i `src/lib/affiliate.ts`. Aldrig en `<a>` direkt till butiken, aldrig en handbyggd `/go/`-adress. Bygget stoppar på båda.
- **Inga kakor som kräver samtycke.** Adtraction sätter inget hos oss, vi kör inget nätverksskript, ingen Google Analytics. Att inget skript smyger in är en granskningspunkt.
- **Sidan "Så tjänar jag pengar"** (`/om/sa-tjanar-vi-pengar/`, adressen byts inte) förklarar affären och att produktvalet görs på datablad innan länkarna läggs på.

## 2. Var produkter får stå

Sidtyp för sidtyp. Allt annat plockas bort vid granskning.

- **Projektguide**: högst ett kompakt produktkort per H2 där texten faktiskt diskuterar verktyget och motiverar valet, plus modulen "Det här behöver du" sist (frontmatter `behover`: verktyg med köpknapp, material som text). Aldrig kort ovanför kortsvaret, aldrig knapp i en faktaruta.
- **Problemguide**: produkten på ett ställe, efter diagnosen, i avsnittet som säger vilken åtgärd som gäller. Vissa fall ska säga "köp ingenting". Reklamband bara när `produkter` inte är tom.
- **Köpguide**: kort där texten nämner produkten, blocket "Produkterna vi nämner" sist.
- **Kunskap**: inga produktkort, ingen reklam, utom undantaget "en produkt per typ, sist" som mallen renderar när `produkter` finns.
- **Kategorisida** (bäst i test): "Våra val" med tre konkreta etiketter (aldrig premium, mellan, budget), jämförelsetabell med köpknapp i sista raden, knapp efter varje produktavsnitt.
- **Test**: första knappen i omdömesblocket, sista efter "Så testade jag", ingen däremellan.
- **Räknare**: två till tre produkter som klarar det uträknade värdet, sorterade på pris, alltid efter beskedet, aldrig mellan formulär och svar. Aldrig en produkt som inte klarar värdet med marginal; hellre "jag har inte granskat någon i den storleken". Reklamband bara på räknare som visar produkter; i dag avfuktare, gipsskruv och innervägg.
- **Förbrukningsvara** (ordervärde under 1 500 kr) får ett kort bara när räkningens utdata *är* varan, som bandad gipsskruv där verktyget räknar fram antal och längd, och kortet måste försvinna när svaret inte längre passar produkten. En vara texten nämner i förbifarten får inget kort.

Lagerstatus visas bara när den är negativ. Ordinarie pris får stå i `blyerts-2` med "tidigare" framför, aldrig överstruket i rött. Inga rabattmärken, ingen "spara 20 %".

## 3. Vilka produkter

Produktfokus är ordervärde från cirka 1 500 kr: luftavfuktare, kap- och gersågar, sänksågar, skruvdragare, lasermätare och krysslaser, byggfläktar, kompressorer, borrhammare, fuktmätare som ingång till fuktklustret. Inte virke, inte handverktyg, inte skydd, inte VVS-installation.

Produkten väljs på meriter ur datablad och oberoende källor, aldrig på provision. Provisionen är densamma oavsett maskin inom programmet, och den som väljer produkt gör det innan länken läggs på. Är två maskiner lika bra får den billigare stå först. Valet dokumenteras i `docs/briefer/underlag-*.md` med källa per påstående; specs i databasen fylls därifrån, inte ur feeden.

Prioritet per kategori efter sökvolym från körning 2: fuktmätare och hygrometer, kap- och gersåg, krysslaser, lasermätare, byggfläkt, skruvautomat. Nakna produktord slår "bäst i test".

## 4. Googles recensionsriktlinjer

Varje test och kategorisida ska klara "Write high quality reviews": egna mätvärden med metod, egna bilder eller diagram, vad som skiljer produkten från konkurrenterna, vad som är dåligt, för vem den passar och inte, motivering när något kallas bäst, rankade listor som fungerar utan klick, datum för test och uppdatering, `rel="sponsored"`. Etiketten Test bara när produkten varit i handen, annars Granskning, och vi skriver aldrig "jag testade" på en granskning. En sida som bara är produktlista med knappar publiceras inte. Systemet slår på hela sajten om andelen recensionsinnehåll blir hög, så kunskap och problemguider ska vara majoriteten.

## 5. Adtraction och Proffsmagasinet

Det verifierade: spårningslänken `https://track.adtraction.com/t/t?a={annons-id}&as={kanal-id}&t=2&tk=1&epi={epi}&url={mål}` med `url` sist; API v3 med `X-Token`; XML-feed synlig först vid Approved; inga tredjepartskakor; godkännande i två steg (kanalen, sedan varumärket) och ett avslag på programmet kan inte skickas om. Antaganden tills programbeskrivningen är läst: 5 procent provision, 30 dagars cookie, feedens fält. Programmets egna villkor och riktlinjer läses in i det här dokumentets avsnitt så fort sajten är godkänd; till dess är det ett känt hål.

`/go/` (`src/pages/go/[slug].ts`) loggar klicket utan personuppgifter (produkt, butik, sida, modul, sidtyp, position, kategori), sätter `epi` till klickradens id i bas 36, bygger målet ur `butiker.lankmall`, svarar 302 med `no-store` och `noindex`. Loggning får aldrig stoppa ett klick. Andra butiker är en rad till i tabellen, inte en kodväg.

## 6. Mätning

Intäkt per sida, modul och sidtyp är det som styr designbeslut från fas 3. Klicktabellen bär `modul` (varaval, tabell, kort_kompakt, kort_full, kalkylator, behovslista, avslut), `sidtyp` och `position`. Konverteringar importeras dagligen från API:t och matchas på `epi`. Klick per 100 besök kräver sidvisningar från Vercel Analytics. Inga siffror om klickfrekvens publiceras eller antas utan egen data; branschens "0,5 till 1 procent" saknar metod.

## 7. Granskning av en sida

1. Går alla länkar via `/go/` med `sponsored nofollow`?
2. Står reklambandet ovanför första länken, och bara på sidtyper som ska ha det?
3. Står varje kort där avsnitt 2 tillåter, efter resonemanget, och nämner texten produkten?
4. Klarar produkten det värde sidan räknat fram, och försvinner kortet när den inte gör det?
5. Är produkten vald på meriter med underlag, finns den i databasen med pris och datum?
6. Skulle sidan klara recensionsriktlinjerna, och är etiketten Test eller Granskning rätt?
7. Har inget skript eller extern resurs smugit in?

Svaret är "Godkänd av affiliate" eller en lista med fil, rad och vad som ska ändras.
