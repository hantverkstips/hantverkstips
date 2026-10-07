# Retur: /grund/dranera-hus/, utbyggnad F2, 2026-10-07 och 2026-10-08

Sida: `src/content/guider/grund/dranera-hus.mdx` (publicerad, `uppdaterad: 2026-10-07`). Checklista: `docs/briefer/seo-checklista-2026-10-07/dranera-hus-utbyggnad.md`. Faktablad: `docs/briefer/faktablad/guider-dranera-hus.md` med kompletteringen från 2026-10-07 och kontrollen från 2026-10-08.

## Det som är nytt
- **H2 "Källare, platta på mark och krypgrund dräneras inte lika"**, direkt efter ingressen. Tabell över grundtyperna med källa per rad, och länkar till fuktmatning-betong, fukt-i-krypgrund, isolera-krypgrund och torpargrund.
- **H2 "Hur ofta huset behöver dräneras om och hur du ser att det är dags" (bytt 2026-10-08 efter SEO, hette först "Dräneringens livslängd och tecknen på att den är slut")**, före "Offerten, årstiden och väntetiden". Livslängdstabell med fyra källor, försäkringens undantag, tecknen, rensbrunnarna, filmning i stället för spolning, en egen tumregel för översyn och dolt fel med länk till fuktskada.
- **12 nya källor i `kallor`.**
- **`{/* LÄNK NÄR SIDAN FINNS: grund/draneringsror */}`** på två ställen: efter rörstycket i "Röret, stenen och duken" och i livslängdsavsnittet.

## Ändringar i befintlig text, och varför
1. **Ingressens andra stycke:** första meningen är ny och pekar fram mot grundtyperna. "Längst ner" blev "Längre ner", eftersom gränsavsnittet inte längre ligger sist.
2. **"uppger GarBo, ett försäkringsbolag":** blev "uppger GarBo". Bolaget presenteras nu i det nya första avsnittet.
3. **Marklutningen:** en ny mening ger Isodräns 1:20 minst 2 m ut från husväggen som Isodräns tal, bredvid Rockwools 3 m. Det följer koordinatorns beslut.
4. **Djupstycket:** Villaägarnas mått på 3 till 4 dm gäller enligt källan "betongplattans lägsta punkt" för platta på mark, och "samma mått" i förhållande till huset för källare. Underlag kontrollerade detta 2026-10-08. Tabellen var inte fel och står kvar. Meningen under den säger nu exakt vad Villaägarna skriver, och att källan inte anger någon mätpunkt för källare.
5. **Rensbrunnsstycket:** meningen "ingen källa säger var brunnarna ska sitta" var fel. Isodrän anger högpunkt och lågpunkt, och Gör Det Själv flera hushörn. Stycket nämner nu filmning.
6. **`behover`, rensbrunnar:** "går att spola" blev "går att filma". Isodrän säger att spolning för kontroll är fel.
7. **Krypgrundsmeningen i gränsavsnittet:** blev "Står en del av huset på krypgrund gäller samma gräns där." Den gamla meningen sa emot det nya avsnittet och länkade i cirkel. Länken till isolera-krypgrund är flyttad till det nya avsnittet, inte borttagen.

## Läsarens returer
- **Första läsningen gav 3 av 5.** Felen var källparad, upprepningar, ett hygrometerråd som kunde leda den som har kondens till en grävning, och att avsnittet om gamla plattor sa emot sig självt. Båda avsnitten skrevs om.
- **Andra läsningen gjordes två gånger och gav 4 av 5 och 3 av 5.** Det här rättades:
  - den cirkulära krypgrundsmeningen, och det lösa "dessutom"
  - "särskilt" och "speciellt" i samma mening
  - dubbleringen om filmning, och den hängande meningen om spolning
  - felsökningen i rensbrunnen, där fallet "rinner inte vidare" saknades
  - "igen" om plasttestet, dräneringen "under" källaren och försäkringsmeningen
  - tumregeln: nu 20 år i stället för 40, och vår och höst för rensbrunnarna, vilket svarar på hur ofta
  - "resten av guiden" har flyttats till slutet av grundtypsavsnittet.
- **Medvetet kvar:**
  - "står i [länk]" i äldre text.
  - "Rensbrunn i varje hörn" i materiallistan, steg 5 och illustrationen.
  - Raderna "Källor:" under tabellerna.
  - Grundsulan förklaras två gånger. Den andra förklaringen står i en låst källrad.
  - Ingressens "de två första momenten handlar inte om att gräva" stämmer inte med steg 2 i listan. Det är äldre text utanför uppdraget.
  - Källorna namnges fortfarande ofta. Verben varierar nu, men på en granskningssida bär källorna faktiskt påståendena.

## Korrektur
14 anmärkningar, alla rättade enligt förslagen. Två fick en annan lydelse än korrekturens förslag:
- På rad 184 står det i stället att Villaägarna inte anger någon mätpunkt för källare. Det är vad källan säger.
- På rad 219 blev det "följa bådas råd".

## Motsägelser i underlaget som står kvar
De har källa var för sig:
- **Årstiden:** sidan säger sensommar eller tidig höst, och Villaägarna "tidig höst till sen vår". Sidans uppgift saknar källa i bladet och bör få en vid nästa varv.
- **Översta lagret:** Isodrän anger finkornig jord i djupled, och Villaägarna makadam 30 cm ut från huset i sidled.

## Kontroller
`npm run kontrollera` är grön: 108 filer, 0 fel, 0 varningar. Bygget körs inte av mig.

## För SEO och GEO-agenten och för F1
- Rubrik A har "källare" och "platta på mark". Rubrik B har "livslängd". Frågan hur ofta besvaras i texten med tumregeln.
- Länken till fukt-i-kallaren står nu fyra gånger på sidan, aldrig två i samma H2.
- När /grund/draneringsror/ publiceras ska de två platshållarna bli länkar. Livslängdstalen här ska stämmas av mot F1, så att inget tal skiljer sig.

Godkänd av hantverkaren 2026-10-08. Ändrat sedan första versionen: båda nya avsnitten är omskrivna efter läsaren, 14 rättelser från korrekturen, marklutningen och Villaägarnas djupmått står nu med respektive källa, och krypgrundsmeningen i gränsavsnittet är rättad.

## Tillägg 2026-10-08, efter commit
- Ingressens första stycke är omskrivet, eftersom "de två första [momenten] handlar inte om att gräva" sa emot steg 2 i listan. Det står nu "består av åtta moment …, men två saker ska vara gjorda innan du börjar gräva". Samma stycke har också fått de rättelser korrekturen föreslog: "ha tagit reda på", "Därefter kommer maskinen" och "gräver du ut". Korrekturen hittade 6 fel, och alla är rättade.
- Rubrik B har bytts efter SEO:s godkännande, så att den innehåller "hur ofta". Den nya rubriken undviker mönstret "X, och Y".
- `npm run kontrollera` är grön.

Godkänd av hantverkaren 2026-10-08, också efter tillägget.
