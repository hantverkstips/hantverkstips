# Underlag varv 3: sex påståenden på /rakna/kontrollplan/

Beställning: koordinatorn 2026-09-28. Kontroll av påståenden i `src/pages/rakna/kontrollplan.astro` (ANDRAT_STYCKEN, INGEN_PLAN_STYCKEN) och `src/lib/kalkyl/kontrollplan.ts`.

- **Allt läst 2026-09-28.** Utdrag är ordagranna, radbrytningar borttagna. "Egen läsning" = min slutsats, inte källans.
- Lagtext: riksdagens SFS-text. PBL "Ändrad: t.o.m. SFS 2026:1583", PBF "Ändrad: t.o.m. SFS 2026:1722".

## Källor

| Id | Källa | Adress | Status |
|---|---|---|---|
| R1 | Plan- och bygglag (2010:900) | https://data.riksdagen.se/dokument/sfs-2010-900.text | t.o.m. SFS 2026:1583 |
| R2 | Plan- och byggförordning (2011:338) | https://data.riksdagen.se/dokument/sfs-2011-338.text | t.o.m. SFS 2026:1722 |
| KB-BB | PBL kunskapsbanken: Byggbedömare i lov- och byggprocessen | https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/byggprocessen/byggbedomare/ | Senast ändrad 17 september 2026 |
| KB-KP | PBL kunskapsbanken: Kontrollplan | https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/byggprocessen/kontrollplan/ | Senast ändrad 1 juli 2026 |
| KB-SB | PBL kunskapsbanken: Startbesked | https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/byggprocessen/startbesked/ | Senast ändrad 1 juli 2026 |
| KB-AN | PBL kunskapsbanken: Anmälan | https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/anmalningsplikt/anmalan/ | Senast ändrad 29 januari 2026 |
| KB-KA | PBL kunskapsbanken: Kontrollansvariga | https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/byggprocessen/kontrollansvariga/ | Senast ändrad 1 juli 2026 |
| KB1 | PBL kunskapsbanken: Altan | https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/anmalningsplikt/bygglov-for-anlaggningar/altan/ | Senast ändrad 12 december 2025 |
| BFS26-1 | BFS 2026:1, omtryck av Boverkets allmänna råd (2012:12) om anmälan för åtgärder som inte är bygglovspliktiga | https://rinfo.boverket.se/BFS2012-12/pdf/BFS2026-1.pdf | gäller från 1 april 2026 |
| K-TY | Tyresö kommun: Badrum | https://www.tyreso.se/boende--miljo/bygga/bygglovswebben/badrum.html | uppdaterad 3 mars 2026 |
| K-BO | Botkyrka kommun: Flytt av kök eller badrum | https://www.botkyrka.se/boende-och-narmiljo/bygglov-och-tillstand/sa-soker-du-bygglov/bygglov-a-o/flytt-av-kok-eller-badrum | senast uppdaterad 2 juni 2026 |

---

## Besked, en rad per påstående

| Nr | Påstående | Besked | Föreslagen lydelse av faktat |
|---|---|---|---|
| 1 | Byggbedömare får bara användas vid nybyggnad (10 kap. 6 och 13 §§); därför inte för altan, eldstad, tillbyggnad | **Stämmer, men ofullständigt.** Lagtexten begränsar till nybyggnad som omfattas av Boverkets föreskrifter enligt 16 kap. 9 § 2. Sådana föreskrifter finns inte; Boverket räknar med hösten 2027, och det finns inga ackrediterade certifieringsorgan. I dag kan byggbedömare alltså inte användas alls | - Byggbedömare: bara för nybyggnad (uppförande eller flyttning av byggnad) som Boverkets föreskrifter pekar ut (PBL 10 kap. 13 §, 16 kap. 9 § 2; PBF 10 kap. 23 § 2).<br>- Föreskrifterna finns inte än; beräknas hösten 2027 (KB-BB).<br>- Inga ackrediterade certifieringsorgan i dag (KB-BB).<br>- Följd: i dag behövs kontrollplan för alla lov- och anmälningspliktiga åtgärder, även nybyggnad.<br>- Altan (anläggning), eldstad (installation), tillbyggnad (ändring) är aldrig nybyggnad; byggbedömare gäller aldrig dem. |
| 2 | En altan är inte en byggnad och därför inte "nybyggnad" | **Stämmer.** Nybyggnad avser en byggnad; altanen står i PBL under bygglov för "andra anläggningar än byggnader" och kallas "anläggningen" i 9 kap. 19 § | - Altan = annan anläggning än byggnad (PBL 9 kap. 1 § 2, 19 §).<br>- Nybyggnad = "uppförande av en ny byggnad eller flyttning av en tidigare uppförd byggnad till en ny plats" (PBL 1 kap. 4 §).<br>- Rätt verb för altan i lagen: "uppföra, flytta eller utöka" (9 kap. 19 §). "Ny altan" håller. |
| 3 | 6 a §: nämnden får besluta att en enklare åtgärd klarar sig utan kontrollplan, "till exempel en mur, ett plank eller en ändring av fasaden" | **Stämmer.** Boverket ger exakt de exemplen, med hänvisning till prop. 2024/25:169 s. 344. Propositionen själv är inte läst | - PBL 10 kap. 6 a §: nämnden får "i det enskilda fallet" besluta att kontrollplan inte behövs för enklare åtgärder.<br>- Boverkets exempel: trädfällning, fasadändring, mur, plank, skyltar, ljusanordningar, ändrad användning utan byggåtgärd, mindre rivningsåtgärder (KB-KP, jfr prop. 2024/25:169 s. 344). |
| 4 | Förbudet att påbörja före startbesked gäller också grävning för grunden | **Stämmer, med villkor.** "Påbörja" är inte definierat i lag. Enligt MÖD-praxis som Boverket återger ingår ett arbetsmoment som är del av och förutsättning för åtgärden; schakt och grundläggning för en lovsökt tillbyggnad har räknats som påbörjad åtgärd. Grävning för annat syfte (väg, dagvatten) har inte räknats | - PBL 10 kap. 3 §: åtgärden får inte påbörjas före startbesked.<br>- Arbetsmoment som är del av och förutsättning för åtgärden ingår i den (KB-SB; MÖD 2015:13, 2016:12, 2020:29, P 8944-18, P 4197-22).<br>- Schakt, grundläggning, rörgravar för avlopp till huset har räknats som påbörjat (KB-SB).<br>- Gräv inte för grund eller plintar före startbesked. |
| 5 | VA-installation eller "större ändring av ledningarna, till exempel när badrummet byggs om och rören dras nytt eller flyttas" ska anmälas | **Lagrummet stämmer, exemplet stämmer inte.** Rätt lagrum är PBF **6 kap. 1 § 5** (inte 6 kap. 5 §, som handlar om anmälans handläggning); koden har rätt nummer. Lagens ord är "väsentlig ändring", inte "större". Boverket har inga allmänna råd om vad som är väsentlig ändring av VA (BFS 2012:12 i lydelse 2026:1 gäller bara 6 kap. 1 § första st. 3 och 4). Två kommuner säger uttryckligen att rördragning till befintlig stam normalt **inte** är anmälningspliktig | - PBF 6 kap. 1 § 5: anmälan vid "en installation eller väsentlig ändring av en anläggning för vattenförsörjning eller avlopp i en byggnad".<br>- "Väsentlig" är inte definierat av Boverket (BFS 26-1 omfattar inte p. 5).<br>- Anmälningspliktigt enligt Tyresö och Botkyrka: ny VA-stam i nytt schakt.<br>- Inte anmälningspliktigt enligt samma: ny stam i befintligt schakt med samma läge; rördragning för anslutning till befintlig stam.<br>- Vanlig badrumsrenovering: normalt ingen anmälan för VA; fråga nämnden vid flytt av stam eller ny stam.<br>- Även VA i en ny lovfri komplementbyggnad ska anmälas (KB-AN). |
| 6 | Undantag från kontrollansvarig för "små ändringar av en- eller tvåbostadshus" (angivet PBF 7 kap. 5 §); skärmtak "kan räknas som en liten ändring av huset" | **Undantaget stämmer, lagrummet stämmer inte: rätt är PBL 10 kap. 10 § 1.** PBF 7 kap. 5 § är "utöver" det och täcker bl.a. altan (p. 6) och "annan liten ändring" (p. 11). Att ett skärmtak kan vara en liten ändring **kan inte beläggas**: varken lag, PBF eller Boverket definierar "små ändringar" eller nämner skärmtak. Formuleringen "kan räknas" är inte fel men saknar stöd | - Ingen KA för "små ändringar av en- eller tvåbostadshus, om byggnadsnämnden inte beslutar annat" (PBL 10 kap. 10 § 1).<br>- Ingen KA för att "uppföra eller utöka en mur, ett plank eller en altan" (PBF 7 kap. 5 § 6); nämnden får ändå kräva KA (7 kap. 5 § andra st.).<br>- Ändring av byggnad inkluderar tillbyggnad (KB-KA).<br>- Om skärmtaket är tillbyggnad: storleksgräns för "liten" finns inte; nämnden avgör.<br>- Egen läsning: är skärmtaket en lovfri och anmälningsfri tillbyggnad (PBL 9 kap. 10 §) behövs varken KA (PBF 7 kap. 5 § 1) eller kontrollplan (PBL 10 kap. 6 § via 3 §). |

---

## Utdrag

### 1. Byggbedömare

| Lagrum/källa | Ordagrant |
|---|---|
| PBL 1 kap. 7 § (R1) | "Med byggbedömare avses i denna lag ett företag som 1. har ett kvalitetsledningssystem, … 3. kan styrka sitt kvalitetsledningssystem och sin lämplighet, sakkunskap och erfarenhet med ett certifikat. Lag (2026:712)." |
| PBL 10 kap. 6 § första st. (R1) | "I fråga om en sådan åtgärd som avses i 3 § ska byggherren se till att det finns en plan för att kontrollera utförandet av åtgärden. Kravet på kontrollplan gäller inte utförande som omfattas av en byggbedömares kontroll." Lag (2026:712) |
| PBL 10 kap. 13 § (R1) | "En byggbedömare får användas för kontroll vid genomförandet av nybyggnad som omfattas av föreskrifter som meddelats med stöd av 16 kap. 9 § 2. En byggbedömare får dock inte användas om någon åtgärd vid genomförandet omfattas av obligatorisk sakkunnigkontroll. Lag (2026:712)." |
| PBL 16 kap. 9 § 2 (R1) | "Regeringen eller den myndighet som regeringen bestämmer får meddela … 2. föreskrifter om vilka nybyggnader som ska omfattas av 9 kap. 68 § och 10 kap. 23 a §," Lag (2026:712) |
| PBF 10 kap. 23 § 2 (R2) | "Boverket får meddela föreskrifter om … 2. vilka nybyggnader som ska omfattas av 9 kap. 68 § och 10 kap. 23 a § plan- och bygglagen (2010:900), … Förordning (2026:709)." |
| Boverkets rinfo-flöde | Ingen BFS om byggbedömare. Sökt "byggbed" i https://rinfo.boverket.se/index.atom, `<updated>2026-08-28T07:55:57Z</updated>`: 0 träffar |
| KB-BB | "För att byggherren ska kunna använda en byggbedömare måste Boverket först ta fram föreskrifter och allmänna råd om byggbedömare och vilka slags byggnader som får omfattas av byggbedömarens uppdrag. Föreskrifter och allmänna råd beräknas vara klara hösten 2027. För att byggbedömare ska kunna certifiera sig måste det därefter finnas certifieringsorgan som har tillstånd, det vill säga är ackrediterade, för att utfärda sådana certifikat. I dagsläget finns det inga ackrediterade certifieringsorgan." |
| KB-BB | "En byggbedömare får även användas vid flyttning av byggnad eftersom flyttning innefattas i begreppet nybyggnad." |

### 2. Altan är inte byggnad

| Lagrum/källa | Ordagrant |
|---|---|
| PBL 1 kap. 4 § (R1, lydelse t.o.m. 2026-12-31; samma definitioner i lydelsen från 2027) | "byggnad: en varaktig konstruktion som består av tak eller av tak och väggar och som är varaktigt placerad på mark … samt är avsedd att vara konstruerad så att människor kan uppehålla sig i den," / "nybyggnad: uppförande av en ny byggnad eller flyttning av en tidigare uppförd byggnad till en ny plats," |
| PBL 9 kap. 1 § (R1) | "1. bygglov för byggnader (3-18 §§ ), 2. bygglov för andra anläggningar än byggnader (19-33 §§ )," |
| PBL 9 kap. 19 § med rubrik (R1) | Rubrik "Bygglov för murar, plank och altaner". "Det krävs bygglov för att utomhus uppföra, flytta eller utöka en mur, ett plank eller en altan i ett område som omfattas av en detaljplan, om anläggningen …" Lag (2025:974) |

### 3. Enklare åtgärder utan kontrollplan

| Lagrum/källa | Ordagrant |
|---|---|
| PBL 10 kap. 6 a § (R1) | "Byggnadsnämnden får i det enskilda fallet besluta att en kontrollplan inte behövs för enklare åtgärder. Lag (2025:974)." |
| KB-KP | "Byggnadsnämnden kan även i enskilda fall besluta att kontrollplan inte krävs för enklare åtgärder. Exempel på enklare åtgärder: trädfällning, fasadändring, mur, plank, skyltar, ljusanordningar, ändrad användning där ingen byggåtgärd vidtas, mindre rivningsåtgärder. (jfr prop. 2024/25:169 sid. 344)" |

### 4. Påbörja före startbesked

| Lagrum/källa | Ordagrant |
|---|---|
| PBL 10 kap. 3 § (R1) | "En åtgärd får inte påbörjas innan byggnadsnämnden har gett ett startbesked, om åtgärden omfattas av krav på 1. bygglov, rivningslov eller marklov, eller 2. en anmälan enligt föreskrifter som har meddelats med stöd av 16 kap. 8 §." Lag (2025:974) |
| KB-SB | "Vad som menas med att den lov- eller anmälningspliktiga åtgärden inte får påbörjas är inte närmare preciserat i plan- och bygglagstiftningen. … Ett arbetsmoment som är en del av och en förutsättning för genomförandet av en viss åtgärd ska anses ingå i åtgärden. (MÖD 2015-03-12 mål nr P 7526-14/2015:13, MÖD 2016-03-21 mål nr P 9722-15/2016:12, MÖD 2020-01-17 Mål nr P 1219-19/2020:29, MÖD 2020-01-17 mål nr P 8944-18 och MÖD 2023-05-02 mål nr P 4197-22)" |
| KB-SB (tillbyggnad, P 8944-18) | "I det här fallet hade ett bolag schaktat, monterat kantelement och isolering, lagt armering samt förberett rördragning för el och vatten. … Dessutom hade förhållandevis omfattande grundläggningsarbeten vidtagits. De utförda arbetsmomenten hade enligt MÖD varit nödvändiga för den lovsökta tillbyggnaden." Utgång: åtgärden ansågs påbörjad, byggsanktionsavgift kunde tas ut |
| KB-SB (P 4197-22) | "arbetsmoment för installation av avloppsanläggning samt för tillhörande rörgravar kan vara en del av uppförandet av ett enbostadshus … Sprängning för vägar och dagvattenhantering avseende tomten kan enligt MÖD däremot inte medföra att den bygglovspliktiga åtgärden har påbörjats." |

### 5. VA-anmälan

| Lagrum/källa | Ordagrant |
|---|---|
| PBF 6 kap. 1 § 5 (R2) | "För en åtgärd som inte omfattas av krav på bygglov, rivningslov eller marklov enligt plan- och bygglagen (2010:900) krävs det en anmälan vid … 5. en installation eller väsentlig ändring av en anläggning för vattenförsörjning eller avlopp i en byggnad," Förordning (2025:979) |
| PBF 6 kap. 5 § (R2) | "Det som enligt 9 kap. 85, 86, 90, 91, 99-101 och 107 §§ plan- och bygglagen (2010:900) gäller för en ansökan gäller också för en anmälan. …" (handläggning, inte anmälningsplikt) |
| KB-AN | "Boverket har tagit fram allmänna råd om vad som avses med väsentlig ändring av eldstad och rökkanal samt väsentlig ändring av anordning för ventilation. Det finns även allmänna råd om vad som avses med ändring av en byggnad som väsentligt påverkar brandskyddet." (VA nämns inte) |
| BFS26-1 | "Detta är allmänna råd till 6 kap. 1 § första stycket 3 och 4 plan- och byggförordningen (2011:338)." |
| KB-AN | "… om det ska finnas anordningar för ventilation, vattenförsörjning eller avlopp i en sådan byggnad ska detta anmälas innan installation av anordningen sker." (om lovfria komplementbyggnader och komplementbostadshus) |
| K-TY | "göra väsentlig ändring av byggnadens vatten- och avloppsinstallationer. Ny VA- stam i nytt schakt är ett exempel på väsentlig ändring. Ny VA-stam i befintligt schakt med samma placering och läge är inte anmälningspliktigt. Rördragning inom en lägenhet för anslutning till befintlig stam är normalt inte anmälningspliktigt, …" |
| K-BO | Samma lydelse som K-TY, under "Väsentlig ändring av byggnadens vatten- och avloppsinstallationer". Inledning: "Att flytta ett kök eller badrum är inte bygglovspliktigt och ofta inte anmälningspliktigt." |

Källrang: K-TY och K-BO är kommuner (myndighet, men inte vägledande myndighet för PBL). Boverket säger ingenting om badrum; kommunernas linje är det enda skrivna stödet som hittats. Egen läsning: exemplet "rören dras nytt eller flyttas" i ett badrum beskriver det kommunerna kallar normalt inte anmälningspliktigt.

### 6. Kontrollansvarig

| Lagrum/källa | Ordagrant |
|---|---|
| PBL 10 kap. 10 § (R1) | "Trots 9 § krävs det inte någon kontrollansvarig i fråga om 1. små ändringar av en- eller tvåbostadshus, om byggnadsnämnden inte beslutar annat, eller 2. andra små åtgärder enligt föreskrifter som har meddelats med stöd av 16 kap. 10 §." |
| PBF 7 kap. 5 § (R2) | "Utöver det som följer av 10 kap. 10 § 1 plan- och bygglagen (2010:900) krävs det inte en kontrollansvarig för 1. en åtgärd som inte omfattas av krav på lov eller anmälan, … 6. att uppföra eller utöka en mur, ett plank eller en altan, … 11. en annan liten ändring än de som avses i 10 kap. 10 § 1 plan- och bygglagen. Trots det som sägs i första stycket 2-11 får byggnadsnämnden besluta att det krävs en kontrollansvarig. Förordning (2025:979)." |
| KB-KA | "I plan- och bygglagen, PBL, definieras ändring av en byggnad som en eller flera åtgärder som ändrar byggnadens konstruktion, funktion, användningssätt, utseende eller kulturhistoriska värde. I begreppet ändring ingår även tillbyggnad och ombyggnad. Byggnadsnämndens bedömning av om kontrollansvarig ska krävas får inte överklagas." |
| KB-KA | "Det krävs ingen kontrollansvarig vid vissa enklare åtgärder, det vill säga i relativt okomplicerade ärenden, där byggherren bedöms kunna uppfylla sitt ansvar utan stöd av en kontrollansvarig." (ingen storleksgräns, inget om skärmtak) |

---

## Saknade källor och olästa sidor

- **Prop. 2024/25:169 s. 344** (exemplen i 3): inte läst; exemplen tas från Boverkets återgivning (KB-KP).
- **Vad som är "små ändringar" av en- eller tvåbostadshus**: ingen definition i lag, PBF eller Boverket. Förarbetena (prop. 2009/10:170) inte lästa.
- **Vad som är "väsentlig ändring" av VA**: inga allmänna råd från Boverket; bara kommunernas skrivningar.
- **Boverkets föreskrifter om byggbedömare**: finns inte (rinfo t.o.m. 2026-08-28; KB-BB 17 september 2026).
- Inga sidor blockerade. WebFetch gav bara menyn på KB-BB; sidan lästes i stället med curl och fullständig html.
