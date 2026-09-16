# Affiliategranskning 2026-09-16, fem publicerade sidor

Granskad av affiliateansvarig enligt rollbeskrivningens fem punkter och docs/AFFILIATE.md (märkning avsnitt 5, moduler avsnitt 1, Googles lista avsnitt 5). Underlag: HTML hämtad live 2026-09-16 från de fem adresserna, frontmatter i de tre innehållsfilerna, komponenterna Kopknapp, Produktkort, Jamforelsetabell, DetHarBehoverDu, Reklamband, Kategorisida, rutten `src/pages/go/[slug].ts`, samt tabellerna `produkter`, `erbjudanden`, `butiker` och `klick` i Supabase-projektet hantverkstips (njynynnzimxizwhjzyhx). Ingen fil är ändrad. Två testanrop mot `/go/` gjordes (position 998 och 999); båda stoppades före loggning, `klick` har 0 rader.

## Beslut

**Ej godkänd av affiliate.** Tre blockerare: alla köpknappar på sajten svarar 503 (punkt 1), spårningsmallen har platshållar-id:n (punkt 2), och en ej beställningsbar maskin har aktiv köpknapp (punkt 3). Kategorisidan ska dessutom ut ur index tills den har text (punkt 6). Sidorna avfuktare-kallare, sorptionsavfuktare och gipsskruv är godkända så snart punkt 1 till 3 och 8 är gjorda. Luftfuktighet inomhus är godkänd som den är.

## Ändringar

1. **Blockerar. Vercel, miljövariabel `SUPABASE_SERVICE_ROLE_KEY` saknas i produktion (ingen fil).** `GET https://www.hantverkstips.se/go/woods-mdk21/?modul=avslut&sidtyp=guide&position=998` svarar `503 Databas ej konfigurerad`, vilket är svaret från `src/pages/go/[slug].ts` rad 26 till 27 när `serverKlient()` i `src/lib/supabase.ts` rad 8 till 13 får tom nyckel (`.env` rad 5 är tom lokalt också). Samtliga 39 köpknappar på de fyra sidorna leder alltså till en felsida i dag, och `klick` är tom. Teknisk ansvarig lägger in nyckeln i Vercel (Production), deployar om och verifierar att samma anrop ger 302.

2. **Blockerar. Databas, `butiker` id 1, kolumn `lankmall`** = `https://track.adtraction.com/t/t?a=ANNONS_ID&as=KANAL_ID&t=2&tk=1&epi={epi}&epi2={epi2}&url={url}`. När punkt 1 är löst blir `kanSpara` sant (`[slug].ts` rad 54) och varje klick skickas till Adtraction med platshållar-id:n, alltså en död sida hos nätverket i stället för butiken. Programmet är inte godkänt än. Sätt `lankmall` till NULL tills riktiga id:n finns, då faller rutten tillbaka på `affiliate_url` (rad 55 och 109), som i dag är butikens produktsida. Lägg dessutom en vakt i `src/lib/affiliate.ts` `byggSparlank` rad 91 till 92: kasta fel om mallen innehåller `ANNONS_ID` eller `KANAL_ID`, och låt `[slug].ts` rad 54 behandla en sådan mall som saknad.

3. **Blockerar. `src/lib/produkter.ts` rad 250, `arSlut`.** Regexen `/slut|ej i lager|restnot|utg/i` matchar inte `ej_bestallningsbar`, som är lagerstatus för Innova IGDHX-30 (`erbjudanden` id 13, specs-anmärkning "Ej beställningsbar hos Proffsmagasinet 2026-09-16"). På `/luftavfuktare/` har Innova därför aktiv knapp "Till Proffsmagasinet" med 2 341 kr både i tabellen (`/go/innova-igdhx-30/?modul=tabell&sidtyp=kategori&position=4`) och i produktavsnittet (position 17), och den står först i tabellen och i ItemList-datan eftersom den är billigast. Ändra till `return e.lagerstatus !== 'i_lager'` med NULL som "okänt, visa normalt" (se punkt 11), eller minst `/slut|ej.?i.?lager|ej.?best|restnot|utg/i`. Sortera i `produkterIKategori` rad 197 till 204 så att ej beställningsbara hamnar sist.

4. **`src/components/ui/Kopknapp.astro` rad 58 och 70 till 81.** I slut-läge blir texten "Slut i lager hos Proffsmagasinet" oavsett orsak, och elementet är fortfarande en `<a>` till `/go/` med "Annonslänk" under. För `ej_bestallningsbar` är det fel ord, och en annonslänk till något som inte går att köpa har inget värde. Ge komponenten en prop `lagerText` (standard "Slut i lager hos …", "Ej beställningsbar hos …" för den statusen) och rendera en `<span>` i stället för `<a>` när `slut` är sant. Prisraden "senast 2 341 kr" (rad 65) är rätt och behålls.

5. **Slut i lager-rendering, ingen ändring.** Tillståndet finns i Kopknapp rad 63 till 68 och 77 samt DetHarBehoverDu rad 68 (sekundär ram, "senast" före priset) men förekommer inte live nu: 0 träffar på "Slut i lager", "senast" och "Se pris hos" i de fem sidorna. Kan bara verifieras när ett erbjudande faktiskt har status slut; testa i förhandsvisning genom att sätta ett erbjudande till `slut` innan punkt 3 stängs.

6. **`src/content/kategorier/luftavfuktare.md` rad 5, 55 och 65.** Platshållartexten är publicerad och indexerbar: ingressen "Platshållare. Tre maskiner vi står för…", brödtexten "Platshållartext. Skribenten ersätter efter brief från chefredaktören." och "Så testade vi: Platshållare. Metoden per kategori…". Sidan har 29 köpknappar, 13 gånger "Granskas. Vi har inte haft maskinen." och ingen redaktionell text, vilket är den sida AFFILIATE.md avsnitt 5 säger att Google straffar. Sätt `utkast: true`, eller ge `Kategorisida.astro` rad 85 till 93 `noindex={true}` (Bas stödjer det, rad 37 och 102) tills ingress, "Så väljer du" och "Så testade vi" är skrivna. Överväg dessutom att i `Kategorisida.astro` rad 164 till 170 rendera produktavsnittet utan köpknapp för maskiner som varken har test eller etikett; tabellens knapprad räcker för dem.

7. **`luftavfuktare.md` rad 3 och 4.** Title "Bästa luftavfuktaren…" och description "Här är de som faktiskt klarar jobbet" lovar test som inte finns. Description ändras till något i stil med "Tretton avfuktare jämförda på tillverkarnas egna siffror, tre vi rekommenderar och hur stor du behöver" tills första kammartestet är gjort. Titeln är SEO-strategens fråga, men Googles krav på förstahandsbevis bakom "bäst" gäller.

8. **`src/content/guider/fukt/avfuktare-kallare.mdx` rad 179 och `src/content/kunskap/fukt/sorptionsavfuktare.mdx` rad 215.** Länktexten "alla avfuktare vi testat" pekar på en sida som själv säger "Vi har inte haft maskinen" om alla tretton. Det är ett falskt förstahandsanspråk. Ändra till "alla avfuktare vi gått igenom".

9. **Mätplatshållarna, `avfuktare-kallare.mdx` rad 171 och `sorptionsavfuktare.mdx` rad 165.** Renderas som "[MÄTNING SAKNAS: …]" och "[TEST SAKNAS: …]". Inledningarna på rad 169 och 163 gör anspråket ärligt, och sidorna säger uttryckligen att inget är uppmätt av oss (köpguiden rad 165, sorption rad 94), så formuleringarna är ärliga nog. Men versaler i hakparentes är redaktionell jargong som ser oavslutad ut för läsare och Google. Skriv om till en läsarmening, till exempel "Mätningen startade den [datum]. RF och temperatur en vecka före och en vecka efter avfuktarstart, plus elmätarens värde, publiceras här när två veckor gått." Samma gäller de åtta platshållarna på luftfuktighet inomhus. Inte blockerande.

10. **`src/content/guider/inomhus/gipsskruv.mdx` rad 21 till 23 och `src/components/ui/DetHarBehoverDu.astro` rad 20 till 21.** Essve FZB bandad skruv står under Verktyg för att få köpknapp, men det är material. Utöka `material` med valfri `produkt` så att en materialrad kan ha knapp när butiken säljer varan, och flytta skruven dit. Inte blockerande; listan i övrigt följer AFFILIATE.md (fem rader, en mening per rad, virke utan länk).

11. **Databas, `erbjudanden` id 17 och 18 (Makita DFR550ZX1, Essve FZB), `lagerstatus` NULL.** Importen ska sätta `i_lager` när det är kontrollerat, annars visas knappen även när butiken är slut. Ingen fil, men görs samtidigt med punkt 3 så att NULL får en definierad betydelse.

## Kontrollpunkterna

**1. Går alla länkar via `/go/`?** Ja i HTML. 6 + 2 + 2 + 29 = 39 knappar, alla `/go/<slug>/?modul=…&sidtyp=…&position=…` med `rel="sponsored nofollow"`, modul och sidtyp ur den tillåtna listan, position löpande i dokumentordning (köpguiden 1 till 6, kunskap 1 till 2, projektguiden 1 till 2, kategorin 1 till 29). Inga script-taggar med src, inga träffar på adtraction i sidorna. Direktlänkar till proffsmagasinet.se finns bara i källförteckningen under H2 Källor (5, 7 respektive 5 stycken, `rel="nofollow"`), vilket är rätt: de är källhänvisningar, inte annonslänkar, och ska inte gå via `/go/`. Men rutten svarar 503, punkt 1.

**2. Reklammärkning?** Ja. Bandet står under sidhuvudet före första `/go/` på alla fyra sidor med köpknappar (byteindex 12 720 till 12 897 mot första knapp 15 822 till 107 023), med den fastställda formuleringen och länk till `/om/sa-tjanar-vi-pengar/` (svarar 200 och säger att produktexperten väljer produkt innan den som ansvarar för annonslänkarna ser sidan). Bandet saknas på luftfuktighet inomhus, som inte har någon knapp. "Annonslänk · pris 16 sep" står under 39 av 39 knappar.

**3. Finns produkterna i feed och lager?** 13 avfuktare (id 4 till 16) och två skruvverktyg (id 17 och 18), alla med ett erbjudande hos Proffsmagasinet med pris, uppdaterade 2026-09-16 10:00. Inga rader med slug som namn, inga "saknas" i HTML, inga byggvarningar synliga. Innova är ej beställningsbar men får knapp, punkt 3.

**4. Vald på meriter?** Ja. Bäst totalt SW39FW, bäst till kall källare EvoDry 6H 2.0, bäst för pengarna MDK21 i köpguidens frontmatter, kategorifilens `val` och sorptionssidans två produkter. Provisionen är 5 procent oavsett maskin, så ingen affiliatevinst av ett annat val. Den billigare och tystare eeese Adam 20 är avfärdad med redovisat skäl (saknar svenskt datablad). Jag överprövar inte valet.

**5. Googles recensionsriktlinjer?** Köpguiden och sorptionssidan: jämförelsetabeller med källa per rad, nackdelar för varje rekommenderad maskin, för vem och inte, två maskiner vi avråder från, `rel="sponsored"`, datum. Förstahandserfarenhet saknas men det sägs rakt ut, och det är rätt sätt att sakna den. Bristerna är "vi testat" i länktexten (punkt 8) och platshållarnas form (punkt 9). Länk till fler säljare: bara en butik, som planerat till fas 2; tillverkarlänkar finns i källorna. Projektguiden gipsskruv har inga recensionsanspråk och klarar sig. Kategorisidan klarar inte: platshållartext, 29 knappar, inga omdömen (punkt 6 och 7). Luftfuktighet inomhus berörs inte.

## Status per sida

| Sida | Status | Förutsätter |
|---|---|---|
| /fukt/avfuktare-kallare/ | Godkänd av affiliate efter åtgärd | 1, 2, 8 (9 rekommenderas) |
| /fukt/sorptionsavfuktare/ | Godkänd av affiliate efter åtgärd | 1, 2, 8 (9 rekommenderas) |
| /inomhus/gipsskruv/ | Godkänd av affiliate efter åtgärd | 1, 2, 11 (10 rekommenderas) |
| /fukt/luftfuktighet-inomhus/ | Godkänd av affiliate | inget |
| /luftavfuktare/ | Ej godkänd | 1, 2, 3, 4, 6, 7 |
