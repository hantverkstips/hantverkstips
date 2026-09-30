# Texter till elkostnadens förval per plats och avfuktarräknarens elrader

UX och bygge-agenten, 2026-09-30. Detta är alla platser där det står `TEXT SAKNAS` efter tillägget i `spec-elkostnad-forval-2026-09-30.md` avsnitt 7. Kraven på title och description står i `seo-checklista-2026-09-30/raknare-elkostnad-forval.md`. Talen kommer som parametrar och skrivs aldrig för hand.

- **E** = `src/pages/rakna/elkostnad.astro`
- **A** = `src/pages/rakna/avfuktare.astro`

| Nyckel | Var | Vad den ska säga |
|---|---|---|
| E1 `platsRad(maskin, effektW, villkorTemp, villkorRf)` | E, raden över formuläret | Samma form som produktraden: jag räknar på den här maskinen, som drar så här många watt vid tillverkarens villkor. Har du egna tal, byt ut dem |
| E2 `ELTABELL_RUBRIK` | E, H2 | Bär "hur mycket el drar en avfuktare" eller "elförbrukning avfuktare" naturligt. Inte i formen "X: Y" |
| E3 `ELTABELL_INGRESS` | E, före tabellen | Två meningar: märkeffekten gäller vid tillverkarens provklimat, och i en kall källare ger samma watt färre liter. Länka till `/fukt/sorptionsavfuktare/` med ett eget ankare |
| E4 `PLATS_KORT.kallare`, `.krypgrund`, `.garage` | E, radhuvud | Platsens namn, ett ord |
| E4b `PLATS_KORT.vind` | E, radhuvud i eltabellen | Platsens namn, ett ord, som de andra |
| E5 `ELTABELL_HORN` | E, hörncell | Kort, till exempel att raderna är maskinen |
| E6 `ELTABELL_CAPTION` | E, för skärmläsare | Vad tabellen visar |
| E7 `eltabellKallrad(period, elpris)` | E, under tabellen | Källan till effekterna (tillverkarnas datablad och bruksanvisningar), 8 timmar per dygn som antagande, och elpriset med SCB och perioden |
| E8 `titel` | E, title | Högst 44 tecken, med "el" och "avfuktare". SEO föreslår "Vad drar avfuktaren i el per år?" |
| E9 `BESKRIVNING` | E, description | 120 till 155 tecken. Avfuktaren och elpriset i första meningen, och att det finns förval för källare, krypgrund, vind och tvätt. Vind och tvätt kommer i nästa varv, så skriv det bara om de finns när sidan går ut |
| E10 `kwhRad(namn, effektW, kwhPerAr)` | A, en rad per maskin under korten | En kort mening: maskinen drar så här många kWh per år om den går 8 timmar om dygnet |
| E11 `KWH_LANK` | A, länken på raden | Vad läsaren får i elkostnadsräknaren, några ord |

Se också till att rubriken och ingressen på elkostnadssidan stämmer med den nya titeln, och att H3-avsnittet "Avfuktaren i källaren" räknar med samma 320 W som förvalet.

| E12 kolumnrubrikerna i eltabellen | E | Utvecklaren har skrivit "effekt W", "villkor", "kWh per dygn" och "kr per år". Godkänn eller skriv om. |

Ingressen E3 är delad i `fore`, `ankare` och `efter` runt länken. Mellan länken och `efter` står inget mellanslag, så börja `efter` med ett skiljetecken eller ett mellanslag.

---

## T. Tvättläget (spec avsnitt 8)

Underlaget är `faktablad/fukt-gemensamma-tal.md` avsnitt 14: Energimyndighetens test, 2017-12-11, med 7 kg per torkning. Avfuktaren drar 0,32 kWh per kg, värmepumpstumlaren 0,23 och kondenstumlaren 0,27. Testet anger inte tvättens restfukt, och restfukten räknas inte om. Avfuktaren stängs av när tvätten är torr, och står den på ett dygn blir energin två till tre gånger så stor. **M** = `elkostnad.ts`, **F** = `ElkostnadForm.astro`, **E** = `elkostnad.astro`.

| Nyckel | Var | Vad den ska säga |
|---|---|---|
| T1 felraderna för `kg` och `torkningar` | M | Som de befintliga felraderna: "Skriv … mellan … och …" |
| T2 etikett `kg` | F | Hur mycket tvätt en torkning är, i kg |
| T3 hjälptext `kg` | F | Testet torkade 7 kg, och en full tvättmaskin brukar vara ungefär så. Säg bara det som står i underlaget |
| T4 etikett `torkningar` | F | Hur många gånger i veckan |
| T5 hjälptext `torkningar` | F | En mening |
| T6 `tvattRubrik(krAvfuktare, krVarmepump)` | E, beskedet | En mening med verb som säger vad läsaren ska göra, till exempel att det är tumlaren som är billigast att driva om hon ska köpa ny, eller att avfuktaren duger om den redan står där |
| T7 `tvattRad(…)` | E, under beskedet | Säger något annat än T6 |
| T8 `TVATT_TAL_ETIKETT` | E, ovanför det stora talet | Vad talet är: avfuktarens kronor per år |
| T9 `TVATT_METODNAMN.avfuktare`, `.varmepumpstumlare`, `.kondenstumlare` | E | Metodernas namn |
| T10 `tvattKortsvar(…)` | E, Faktarutan | Tre till fem meningar med talen, och en markering |
| T11 `TVATT_DARFOR_RAKNING(…)` | E, "Därför blev svaret så" | Hur talet räknas: kg i veckan gånger testets kWh per kg |
| T12 `TVATT_DARFOR_RESTFUKT` | E | Testet anger inte hur blöt tvätten var. Jämförelsen gäller testets tvätt. Skriv inget om centrifugering eller restfukt som påstående, eftersom underlaget saknar källa för det (GT 14.2) |
| T13 `TVATT_KALLRAD` | E, källrad under T11 och T12 | Energimyndigheten, testet av luftavfuktare för tvätt, 11 december 2017 |
| T14 `TVATT_GOR_INTE` | E, "Gör inte det här" | Låt inte avfuktaren gå dygnet runt för tvättens skull. Testets tal gäller en maskin som stängs av när tvätten är torr. Två till tre gånger så mycket på ett dygn |
| T15 `TVATTABELL_RUBRIK` | E, H2 | Bär "avfuktare eller torktumlare" naturligt |
| T16 `TVATTABELL_INGRESS` | E | En eller två meningar |
| T17 `tvattabellKallrad(datum)` | E, under tabellen | Energimyndighetens test med datum. Testet är från 2017 och tumlarna var märkta A+ och A++ på den gamla skalan |
| T18 `TVATT_LANK` | E, under eltabellen i maskinläget | Länktext till tvättläget, några ord |
| T19 `TVATTABELL_HORN`, `TVATTABELL_KOLUMN_PER_KG`, `TVATTABELL_KOLUMN_PER_TORKNING`, `TVATTABELL_CAPTION`, och enheterna bredvid fälten `kg` och `torkningar` | E och F | Lagt till av utvecklaren 2026-09-30. Tvättabellens hörncell (raderna är metoden), kolumnrubrikerna kWh per kg och kWh per torkning om testets 7 kg, en caption för skärmläsare, och enheten efter vart och ett av de två fälten (som "W" och "timmar" i maskinläget) |
| T20 `TVATT_PEKRAD_FORE` | E, pekraden i resultatspalten, före länken "står under verktyget" | Vad som står under verktyget i tvättläget: hur talet räknas och vad testet säger. Början av en mening som fortsätter med länken |

---

## Skrivet av hantverkaren, 2026-09-30

Texterna står i koden på nycklarnas platser. Tal i klamrar kommer som parametrar eller konstanter.

- E1: "Jag räknar på [maskin], som drar [W] W när luften håller [°C] grader och [RF] procent luftfuktighet. Har du egna tal, skriv in dem i stället."
- E2: "Hur mycket el en avfuktare drar på ett år"
- E3: "Effekten gäller i det klimat tillverkaren provade maskinen i, och klimatet står i kolumnen Provklimat. I en kall källare ger samma watt färre liter vatten, och under tio grader är [en sorptionsavfuktare] rätt maskin."
- E4 och E4b: Källare, Krypgrund, Kallvind, Garage
- E5: "Plats och maskin". E6: "Avfuktarens effekt, provklimat, el per dygn och kostnad per år för varje plats"
- E7: "Effekterna och provklimaten kommer ur tillverkarnas datablad och bruksanvisningar och ur butikens produktsidor. Att maskinen går 8 timmar om dygnet är mitt antagande. Elpriset [pris] kr per kWh är SCB:s genomsnitt för hushåll, [period]."
- E8: "Vad drar avfuktaren i el per år?" (32 tecken)
- E9: "Räkna ut vad avfuktaren drar i el och kostar per år med ditt eget elpris. Det finns färdiga tal för källare, krypgrund, vind och garage, och för tvätt." (151 tecken)
- E10: "[namn] drar [W] W, och går den 8 timmar om dygnet blir det [kWh] kWh på ett år." E11: "Räkna ut kronorna med ditt elpris"
- E12: Effekt, W · Provklimat · kWh per dygn · Kr per år
- H1 ändrad till "Räkna ut vad avfuktaren och andra maskiner drar i el", så att den stämmer med titeln. Meningen "Det är så jag gör själv." om energimätaren är struken (påstod egen erfarenhet).
- T1: "Skriv en tvättmängd mellan [min] och [max] kg", "Skriv ett antal torkningar i veckan mellan [min] och [max]"
- T2–T5: "Tvätt per torkning" (kg), "Energimyndigheten torkade 7 kg åt gången i sitt test.", "Torkningar i veckan" (gånger), "Räkna en torkning för varje maskin tvätt du hänger upp."
- T6: "Ska du köpa nytt för tvättens skull är en tumlare med värmepump billigast att driva."
- T7: "Står det redan en avfuktare i tvättstugan kan du använda den, men stäng av den när tvätten är torr. Du torkar [kg] kg tvätt om året."
- T8: "Avfuktaren, kr per år". T9: Luftavfuktare, Torktumlare med värmepump, Kondenstumlare utan värmepump
- T10: "Torkar du [kg] kg tvätt [en gång / n gånger] i veckan med en luftavfuktare kostar det [kr] om året. En torktumlare med värmepump klarar samma tvätt för [kr], och en kondenstumlare utan värmepump för [kr]. Talen kommer från Energimyndighetens test, där avfuktaren stängdes av när tvätten var torr." Markeringen går inte att sätta i en sträng; UX kan lägga `<Markering>` runt avfuktarens kronor om funktionen delas.
- T11: "Du torkar [kg] kg tvätt i veckan, och det blir [kg] kg på ett år. En luftavfuktare drar [kWh] kWh för varje kilo, och kilona gånger det talet gånger ditt elpris ger kronorna. Tumlarna räknas på samma sätt med sina egna tal."
- T12: "Testet säger inte hur blöt tvätten var när den hängdes upp, och inte heller om tumlarna fick lika blöt tvätt som avfuktarna. Talen jämför metoderna i testet med varandra, och din egen tvätt kan hamna både över och under talen."
- T13: "Energimyndighetens test av luftavfuktare för tvätt, 11 december 2017"
- T14: "Avfuktaren ska stängas av när tvätten är torr. Står den på ett helt dygn drar den två till tre gånger så mycket el, och då blir den dyrare än båda tumlarna. Ställ in en timer eller stäng av den för hand när du tar in tvätten."
- T15: "Torka tvätten med avfuktare eller torktumlare". T16: "Energimyndigheten torkade tvätt med de tre metoderna och mätte hur mycket el det gick åt. Tumlaren med värmepump drog minst och luftavfuktaren mest."
- T17: "Energimyndighetens test av luftavfuktare för tvätt, uppdaterat [datum]. Kolumnen kWh per 7 kg är testets tal per kilo gånger 7 kg. Tumlarna i testet var märkta A+ och A++ på den gamla energiskalan, som inte har använts för nya tumlare sedan juli 2025."
- T18: "Jämför avfuktare och torktumlare för tvätten"
- T19: "Metod", "kWh per kg", "kWh per 7 kg", caption "El per kilo tvätt och per torkning för en luftavfuktare och två sorters torktumlare, ur Energimyndighetens test"; enheterna "kg" och "gånger"
- T20: "Hur talet räknas och vad testet säger" + "står under verktyget."
