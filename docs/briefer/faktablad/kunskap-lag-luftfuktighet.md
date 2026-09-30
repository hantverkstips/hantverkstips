# Faktablad: /fukt/lag-luftfuktighet/

Beställt av hantverkaren 2026-09-30. Checklista: `docs/briefer/seo-checklista-2026-09-30/lag-luftfuktighet.md`. Gemensamma tal: `fukt-gemensamma-tal.md` (T-numren nedan upprepas inte, bara hänvisas till).

Skrivet 2026-09-30 av underlag. "Läst 2026-09-30" = hämtat och läst den dagen. Citat inom citattecken är ordagranna ur källans text (PDF-text via pdftotext, HTML via curl), om inget annat står. **EGEN** = egen räkning, med formel. **UTDRAG** = WebFetch-sammanfattning, inte ordagrant kontrollerad. **ANTAGANDE** = eget antagande utan källa. Ingen text här är förlaga.

- **Huvudfras:** luftfuktare (18 100/mån, topp februari 40 500). Sidofraser enligt checklistan avsnitt 2.
- **Sidtyp:** kunskap, `pelare: fukt`, `plats: luften`, `niva: enkel`, `produkter: []`. Inga produkter, inga `/go/`-länkar, ingen reklammärkning. Modellnamnen i avsnitt 5 är underlag för storleksordning, inte sidtext.

---

## 0. Nya tal i en tabell

| Nr | Tal | I sak | Källa | Rang | Läst |
|---|---|---|---|---|---|
| L1 | 0,5 rumsvolymer per timme | I bostäder bör luftomsättningen inte understiga detta | FoHMFS 2014:18 | myndighet, allmänt råd | 2026-09-30, PDF |
| L2 | 3 g/m³ | Skillnaden i absolut luftfuktighet mellan inne och ute vintertid bör inte regelmässigt överstiga detta | FoHMFS 2014:18 (samma tal som T11 ur 2014:14) | myndighet | 2026-09-30, PDF |
| L3 | 20–40 % RF, snitt ca 30 % | Uppmätt inne under uppvärmningssäsongen i Boverkets "Så mår våra hus"; "kan betraktas som normala värden inomhus" | Folkhälsomyndigheten, Vägledning om ventilation | myndighet | 2026-09-30, HTML |
| L4 | ca 6 % (webben) / 5 % (broschyren) | Uteluft −20 °C och 100 % värmd till 20 °C | Alingsås kommun | kommun | 2026-09-30, bild och PDF |
| L5 | 15 % | Uteluft 80 % RF (vid −5 °C) värmd till 20 °C | Tarkett (golvtillverkare) | tillverkare | 2026-09-30, HTML |
| L6 | ca 1,5 % per grad | Så mycket stiger RF när innetemperaturen sänks en grad | Tarkett | tillverkare | 2026-09-30, HTML |
| L7 | 30–60 % RF | Trägolv; under 30 % kan springor bli större än AMA medger | Tarkett (citerar Hus AMA 08 RA); Kährs underhållshandbok 2019-04 | tillverkare | 2026-09-30 |
| L8 | 20–45 °C | Legionella förökar sig i vatten i detta spann, särskilt stillastående | 1177; Folkhälsomyndigheten, tillsynsvägledning legionella | myndighet / regionernas tjänst | 2026-09-30 |
| L9 | 1 fall | Ett bekräftat legionellafall i Sverige med kranvatten i en luftfuktare i hemmet som smittkälla | Folkhälsomyndigheten, sjukdomsstatistik (sökmotorns utdrag) | myndighet | **UTDRAG**, sidan gav 404 |
| L10 | 68,8 / 82,5 g/h | Vatten som sovrummet i räkneexemplet behöver för 40 / 45 % vid −5 °C ute | **EGEN**, avsnitt 6 | – | – |
| L11 | 14,9 % | RF inne vid 21 °C om uteluften (−5 °C, 80 %) bara värms, utan fukttillskott | **EGEN**, avsnitt 6 | – | – |
| L12 | 31,3 % | Samma, med fukttillskottet 3 g/m³ | **EGEN**, avsnitt 6 | – | – |
| L13 | 10,2 / 11,6 °C | Daggpunkt vid 21 °C och 50 / 55 % | **EGEN**, T18 | – | – |

---

## 1. Folkhälsomyndigheten, FoHMFS 2014:14 och 2014:18

### 1.1 Status

Båda står i "Förteckning över gällande föreskrifter och allmänna råd den 1 januari 2026" (<https://www.folkhalsomyndigheten.se/publikationer-och-material/foreskrifter-och-allmanna-rad/forteckning-over-gallande-foreskrifter-och-allmanna-rad/>, läst 2026-09-30): "FoHMFS 2014:14 Folkhälsomyndighetens allmänna råd om fukt och mikroorganismer" och "FoHMFS 2014:18 Folkhälsomyndighetens allmänna råd om ventilation". **Gäller.** Båda är allmänna råd till tillsynsmyndigheten, beslutade 2 januari 2014, utkom 4 februari 2014, och "gäller för bostäder och lokaler för allmänna ändamål där människor vistas mer än tillfälligt".

### 1.2 FoHMFS 2014:14, fukt och mikroorganismer

PDF: <https://www.folkhalsomyndigheten.se/contentassets/26ea6c0d999742c0a5351c63e70cb0ce/fohmfs-2014-14.pdf>, läst 2026-09-30 ordagrant ur PDF-texten. Avsnittet "Undersökningar", indikationer som kan föranleda krav på undersökning:

> - synliga fuktskador och fuktfläckar, missfärgningar eller bubblor i mattor och tapeter,
> - omfattande kondens på fönstrens insida vid en utetemperatur av ca -5° C eller lägre,
> - om fukttillskottet inomhus, under vinterförhållanden, regelmässigt överstiger 3 g/m3 luft, eller
> - om luftfuktighetens medelvärde överstiger 7 g vatten/kg torr luft under en längre period under eldningssäsongen, vilket motsvarar ca 45 % relativ luftfuktighet vid 21° C.

- **T10, T11 och T12 bekräftade** ord för ord. Enda skillnaden: PDF:en skriver "ca", tillsynsvägledningen (HTML, uppdaterad 9 april 2026) skriver "cirka". Samma lydelse i övrigt.
- **Befuktare, luftfuktare, befuktarfeber, legionella, befuktningsvatten: nämns inte** i FoHMFS 2014:14 (hela texten är två sidor, genomläst).
- Tillsynsvägledningen om fukt och mikroorganismer (<https://www.folkhalsomyndigheten.se/regler-och-tillsyn/tillsynsvagledning-och-stod/halsoskydd-vagledning-och-tillsyn/tillsynsvagledning-om-fukt-och-mikroorganismer/>, uppdaterad 9 april 2026, läst 2026-09-30 ur HTML) nämner inte heller befuktare. Den skriver: "Eftersom de specifika sambanden mellan mikrobiella faktorer och hälsoeffekter inte är kända finns ännu inga hälsobaserade riktvärden för acceptabla nivåer av mikrobiella exponeringar."
- EGEN kontroll av 7 g/kg = ca 45 % vid 21 °C: blandningsförhållande x = 622 × e / (p − e), e = 0,45 × 24,82 hPa = 11,17 hPa, p = 1 013,25 hPa → x = 6,93 g/kg. **Stämmer.**

### 1.3 FoHMFS 2014:18, ventilation

PDF: <https://www.folkhalsomyndigheten.se/contentassets/641784832543443ea4eebe9b300c244e/fohmfs-2014-18.pdf>, läst 2026-09-30 ordagrant ur PDF-texten.

> I bostäder bör det specifika luftflödet (luftomsättningen) inte understiga 0,5 rumsvolymer per timme (rv/h). Uteluftsflödet bör inte understiga 0,35 liter luft per sekund per kvadratmeter (l/s per m2) golvarea eller 4 l/s per person.

> I bostäder och lokaler för allmänna ändamål, där människor vistas stadigvarande, bör skillnaden i absolut luftfuktighet mellan ute och inne under vinterförhållanden inte regelmässigt överstiga 3 g/m3.

Ventilationen bör också undersökas bland annat:

> - vid omfattande kondensbildning på fönsters insida vid en utetemperatur av ca -5° C,
> - vid konstaterad allergi mot husdammskvalster,
> - […]
> - vid inträffade fall av t.ex. legionärssjuka och luftfuktarfeber; en kontroll av ventilationssystemet bör framför allt inriktas på att finna möjliga tillväxtplatser för mikroorganismer i systemet eller i närheten av luftintaget.

- **Ordet i föreskriften är "luftfuktarfeber"**, inte "befuktarfeber". Det gäller **ventilationssystem** (tillväxtplatser i systemet eller vid luftintaget), inte en bärbar luftfuktare i ett sovrum. Använd inte citatet som om det handlade om hemmabefuktare.
- **L1 ersätter EGEN-räkningen i T46:** 0,5 luftomsättningar per timme står uttryckligen i FoHMFS 2014:18 (0,5 rv/h). Förslag till gemensamma faktabladet: T46 får myndighetskälla. Alingsås kommun skriver samma sak i ord: "Byggnormen anger att hälften av luften i en bostad ska bytas ut varje timma, en del bostäder ventileras mer än så, de flesta ventileras mindre."

### 1.4 Folkhälsomyndigheten, Vägledning om ventilation (HTML)

<https://www.folkhalsomyndigheten.se/regler-och-tillsyn/tillsynsvagledning-och-stod/halsoskydd-vagledning-och-tillsyn/vagledning-om-ventilation/>, uppdaterad 12 december 2024, läst 2026-09-30 ordagrant ur HTML (tidigare UTDRAG i gemensamma faktabladet 7.2, nu kontrollerat).

- "Om luftfuktigheten är mer än 3 gram per kubikmeter luft (Absolut fuktighet, AF) jämfört med AF utomhus tyder det på att ventilationens funktion är för dålig för att kunna ta hand om fukttillskottet inomhus. Tillfälligt kan skillnaden vara över 3 g/kubikmeter, till exempel i våtutrymmen eller kök."
- **L3:** "I Boverkets rapport "Så mår våra hus" redovisades att inomhusvärdet för RF under uppvärmningssäsongen pendlade mellan 20–40 % med ett snitt runt 30 %, vilket kan betraktas som normala värden inomhus. Under sensommaren och början på hösten kan dock RF inomhus tidvis stiga helt naturligt till över 70 % när utomhusluften är varm och fuktig."
- Tabell 1, bostäder: "Minst 0,35 l/kvadratmeter och s eller minst 4 l/s person"; luftomsättning "Minst 0,5 rv/t"; "Fuktskillnad, inne-ute" "Högst 3 g/kubikmeter", med fotnoten "(a) Fuktmängden är högre inomhus."; koldioxid "Högst 1 000 ppm" (T45 nu ordagrant).
- Kondens: "Kondens på fönsters insida kan vara en indikator på låg luftomsättning om huset har dåligt isolerade fönster. En indikation på extrem fuktalstring eller bristande luftväxling är omfattande och varaktig kondensbildning på fönstrens insida." och "Kondens kan förekomma även om utetemperaturen är över -5 grader C men blir tydligare vid lägre temperatur. Vid mycket låga utomhustemperaturer kan det bli kondens utan att det behöver bero på dålig ventilation."
- Befuktare nämns inte.

### 1.5 Legionella och luftfuktare: vad myndigheterna säger

| Källa | Rang | Ordagrant | Adress | Datum | Läst |
|---|---|---|---|---|---|
| 1177 (regionernas vårdguide), "Legionella – Legionärssjuka" | offentlig vårdinformation | "Legionellabakterier förökar sig i stillastående vatten och kan förorena vattenledningar, klimatanläggningar, duschar och bubbelpooler."; "Bakterierna förökar sig i vatten som är mellan 20 och 45 grader och framför allt om vattnet står still."; "Du kan bli smittad genom att andas in legionellabakterier, genom finfördelade vattendroppar i luften." Luftfuktare nämns inte. | <https://www.1177.se/sjukdomar--besvar/lungor-och-luftvagar/inflammation-och-infektion-ilungor-och-luftror/legionella/> | uppdaterad 2024-02-12 | 2026-09-30, HTML |
| Folkhälsomyndigheten, Tillsynsvägledning om legionella | myndighet | "Legionella smittar via inandning av små vattendroppar (aerosoler) …"; "Risken för att legionellabakterier ska föröka sig är störst när vattnet är stillastående och temperaturen är mellan 20 och 45 °C." Befuktare och bostäder nämns inte. | <https://www.folkhalsomyndigheten.se/regler-och-tillsyn/tillsynsvagledning-och-stod/halsoskydd-vagledning-och-tillsyn/vagledning-om-smitta-fran-objekt-och-djur/tillsynsvagledning-om-legionella/> | uppdaterad 28 april 2025 | 2026-09-30, **UTDRAG** |
| Folkhälsomyndigheten, Legionellainfektion, sjukdomsstatistik | myndighet | Sökmotorns utdrag: vanligaste bekräftade smittkällan var kranvatten i bostäder via dusch, med undantag för två fall, "ett där smittkällan var kranvatten i en luftfuktare i hemmet". **Årtal okänt.** | <https://www.folkhalsomyndigheten.se/folkhalsorapportering-statistik/statistik-a-o/sjukdomsstatistik/legionellainfektion/> | – | **Kunde inte läsas (404)**, bara sökmotorns utdrag |
| Folkhälsomyndigheten, "Riskanalys för legionella", kapitel i "Legionella i miljön – hantering av smittrisker", juli 2015 | myndighet | Nämner "grönsaksbefuktare" och Boverkets gamla allmänna råd BFS 2011:6 avsnitt 6:626 om "befuktningsinstallationer" samt att ASHRAE-standarden omfattar "luftrenare, luftfuktare och luftkonditionering". Inget om bärbara hemmabefuktare. | <https://www.folkhalsomyndigheten.se/contentassets/cfb528effedf4326a2956f85beeb71a4/riskanalys-for-legionella.pdf> | juli 2015 | 2026-09-30, PDF |
| Vårdhandboken, "Förebyggande åtgärder i vård och omsorgsmiljö" (Legionella) | regionernas vårdhygieniska handbok (Inera), vård och omsorg, inte bostäder | "Luftfuktare, vattenfontäner och bubbelbad har risk för tillväxt av legionellabakterier och skapar vattendimma. De bör därför undvikas runt infektionskänsliga individer. Luftfuktare med varm ånga som uppnått koktemperatur bedöms dock inte utgöra en risk [6]." | <https://www.vardhandboken.se/vardhygien-infektioner-och-smittspridning/infektioner-och-smittspridning/legionella-inom-vard-och-omsorg/forebyggande-atgarder-i-vard-och-omsorgsmiljo/> | senast granskad 2025-09-15 | 2026-09-30, HTML |
| Region Jönköpings län, Smittskydd, Legionella | region | "Smittspårning och provtagning av misstänkta smittkällor som kyltorn, befuktningsanläggningar, vattenreservoarer och tappvatten är ett kommunalt ansvar." | <https://folkhalsaochsjukvard.rjl.se/vardstod/smittskydd-och-vardhygien/smittor-a-o2/legionella/> | 2026-02-18 | 2026-09-30, **UTDRAG** |
| Viss.nu (Region Stockholm), vårdprogram "Inomhusmiljö och hälsa" | regional vårdriktlinje | "Ett annat exempel är lunginflammation orsakad av legionellabakterier som kan finnas i luftfuktaranläggningar eller vattensystem med felaktig temperatur." Allergisk alveolit "orsakas av relativt höga halter mikroorganismer som kan spridas via ventilationssystem". | <https://viss.nu/kunskapsstod/vardprogram/inomhusmiljo-och-halsa> | publicerat januari 2010, uppdaterat december 2019 | 2026-09-30, HTML |

**Slutsats för sidan:**

- **Ingen svensk myndighet har ett eget råd om legionella i bärbara hemmabefuktare.** Det som finns: 1177 och FoHM om 20–45 grader och stillastående vatten (allmänt), FoHMFS 2014:18 om "legionärssjuka och luftfuktarfeber" (ventilationssystem), och ett enskilt fall i FoHM:s statistik (UTDRAG, årtal okänt).
- Närmast ett råd om hemmabefuktare är Vårdhandboken, som gäller vård och omsorg. Den säger att ånga som nått koktemperatur inte bedöms vara en risk.
- **Befuktarfeber i hemmabefuktare: saknas** hos svensk myndighet. 1177 har ingen sida om luftfuktare (sökt på "luftfuktare" site:1177.se).

### 1.6 US EPA (utländsk myndighet, väger lättare än svenska källor men är den enda myndighet som skriver om hemmabefuktarnas typer)

"Use and Care of Home Humidifiers", <https://www.epa.gov/indoor-air-quality-iaq/use-and-care-home-humidifiers>, "Last updated on April 29, 2026", läst 2026-09-30 ordagrant ur HTML:

- "Several studies have shown that ultrasonic and impeller (or "cool mist") humidifiers can disperse materials, such as microorganisms and minerals, from their water tanks into indoor air. […] Microorganisms often grow in humidifiers which are equipped with tanks containing standing water. Breathing mist containing these pollutants has been implicated as causing a certain type of inflammation of the lungs."
- "Steam vaporizer and evaporative humidifiers are not expected to disperse substantial amounts of minerals."
- "Researchers have documented that ultrasonic or impeller humidifiers are very efficient at dispersing minerals in tap water into the air. In addition, some consumers are bothered by a "white dust" that may appear on surfaces during use of these devices."
- "Clean portable humidifiers every third day to reduce the buildup of scale and microorganisms."
- "Steam and boiling water may cause burns." (råd: håll ångbefuktare utom räckhåll för barn, UTDRAG för den meningen)
- "Do not humidify to indoor relative humidity levels exceeding 50 percent."
- "If water condenses on windows, walls, or pictures, relocate the humidifier, lower its humidistat setting, or reduce its use."
- **Oense:** EPA:s tak 50 % mot FoHMFS 2014:14:s utredningsgräns ca 45 % vid 21 °C (T10). FoHM väger tyngst för en svensk bostad. EPA:s 50 används inte som sajtens tal.

---

## 2. Symtom på torr luft

| Källa | Rang | Ordagrant | Adress | Datum | Läst |
|---|---|---|---|---|---|
| Boverket | myndighet | T9 (ögon och hals under 20 %) | se gemensamma 2.1 | – | redan läst |
| Alingsås kommun, "Luftfuktighet inomhus" | kommun (energi- och klimatrådgivningen) | "De vanligaste tecknen på torr luft är: Irriterade ögon / Torr hy / Statisk elektricitet, "flygigt" hår / Irriterad hals, heshet / Nästäppa nattetid vilket kan ge huvudvärk / Spruckna läppar / Återkommande förkylningar" | <https://www.alingsas.se/bygga-bo-och-miljo/boende/luftfuktighet-inomhus/> | uppdaterad 16 september 2026 | 2026-09-30, **ordagrant ur HTML** (tidigare UTDRAG) |
| Alingsås kommun, broschyr "Torr luft inomhus" | kommun | Samma lista, men "Nästäppa och snarkningar nattetid vilket kan ge huvudvärk". "Många människor mår dåligt på grund av detta men vet inte varför." | <https://municipio.alingsas.se/wp-content/uploads/networks/1/sites/2/2024/01/Folder_torr-luft_A4_webben.pdf> | uppladdad januari 2024 | 2026-09-30, PDF |
| 1177, "Torra ögon" | offentlig vårdinformation | Exempel på när du kan få torra ögon: "Du är i torr, varm, rökig eller dammig luft under lång tid." | <https://www.1177.se/sjukdomar--besvar/ogon/ogonbesvar/torra-ogon/> | uppdaterad 2023-09-29 | 2026-09-30, HTML |
| 1177, "Torr hud och klåda" | offentlig vårdinformation | "På vintern är luften torrare både utomhus och inomhus. Då behöver du sköta om din hud extra noga." (råden gäller tvätt och kräm, inte luftfuktare) | <https://www.1177.se/sjukdomar--besvar/hud-har-och-naglar/klada-utslag-och-eksem/torr-hud-och-klada/> | uppdaterad 2024-10-28 | 2026-09-30, HTML |
| 1177, "Nästäppa och snuva" | offentlig vårdinformation | Vid vasomotorisk rinit: "Besvären kan komma om du äter någon särskild mat, dricker alkohol eller befinner dig i torr luft." | <https://www.1177.se/sjukdomar--besvar/infektioner/forkylning-och-influensa/nastappa-och-snuva/> | uppdaterad 2026-05-18 | 2026-09-30, HTML |
| Viss.nu (Region Stockholm) | regional vårdriktlinje | Om hudsymtom: "Det är dock ovanligt att inomhusmiljö är enda orsak till hudbesvär (snarare försämringstillstånd till exempel på grund av torr luft)" | adress i 1.5 | uppdaterat december 2019 | 2026-09-30, HTML |
| Arbetsmiljöverket, "Inomhusmiljö och hälsobesvär" | myndighet (arbetsplatser) | "Ofta är det flera orsaker som samverkar när arbetstagarna upplever byggnadsrelaterad ohälsa. Torr luft och dålig städning samverkar till exempel ofta." | <https://www.av.se/inomhusmiljo/inomhusmiljon-ska-framja-arbetsmiljo-halsa/inomhusmiljo-och-halsobesvar/> | uppdaterad 2025-10-14 | 2026-09-30, HTML |
| Miljö Skaraborg (miljöförvaltning, östra Skaraborg) | kommunal förvaltning | "Många upplever att inomhusluften är torr. Ibland räcker det att sänka temperaturen eftersom varm luft kan kännas torr. Det kan också bero på damm eller föroreningar." | <https://www.miljoskaraborg.se/privatperson/Bostadsmiljo1/Temperatur/> | uppdaterad 2026-05-13 | 2026-09-30, HTML |

- **"Återkommande förkylningar"** står i Alingsås lista. Det är ett hälsopåstående från en kommun, inte en hälsomyndighet. Checklistan: "Inga hälsopåståenden utan myndighet: inte virus". Hantverkarens val om det ska med; om det står, med Alingsås som källa.
- Alingsås diagram (bild, alt-text: "optimala luftfuktighetsnivåer … bakterier, virus, svamp, kvalster, luftvägsinfektioner, astma, kemiska processer och ozonproduktion") är Sterling-diagrammet. Tarkett kallar det "Sunda Hus-projektets diagram". Upprepas inte (virus, checklistan).
- **När befuktning är motiverad (eksem, torra slemhinnor): ingen myndighet hittad** som säger det. 1177:s sidor om torra ögon, torr hud och nästäppa nämner torr luft som orsak men rekommenderar inte luftfuktare. **Saknas.** Närmast: Viss.nu, torr luft kan försämra hudbesvär.
- **Att befuktning i bostäder sällan behövs: ingen myndighet säger det rakt ut.** Närmast: Miljö Skaraborg ("Ibland räcker det att sänka temperaturen"), FoHM:s ventilationsvägledning (20–40 %, snitt 30 %, "normala värden inomhus", L3) och Boverket (under 20 % "inte ovanligt vintertid", T9). En ventilationsbutik (ventilationsbutiken.se, blogg 2015) skriver att befuktning ska undvikas; butik, **inte källa**.
- Statisk elektricitet: bara Alingsås. Ingen myndighet med tal.

---

## 3. Trä och torr luft

| Källa | Rang | Ordagrant | Adress | Datum | Läst |
|---|---|---|---|---|---|
| TräGuiden, "Träets fuktrörelser" | branschorganisation | "Träets rörelse inomhus över året, från sommar till vinter, är i genomsnitt 1,6 procent. Fuktkvoten i virket ändras cirka 6 % från sommar till vinter, vilket kan ge en maximal rörelse på 16 mm/meter i tangentiell riktning"; "Krympningen blir hälften så stor om brädan är utsågad i radiell riktning än i tangentiell riktning, det vill säga med stående årsringar. Golvspringorna blir hälften så stora." | <https://www.traguiden.se/om-tra/materialet-tra/traets-egenskaper-och-kvalitet/fuktegenskaper1/traets-fuktrorelser/> | publicerad 2017-05-15, uppdaterad 2021-06-14 | 2026-09-30, HTML |
| TräGuiden, "Bärande golvbeläggning" | branschorganisation | "Om brädorna håller en fuktkvot som är högre än den fuktkvot som motsvarar den rådande luftfuktigheten, kommer de att krympa. Alltför stora fuktrörelser i golvbrädor orsakar springor eller att brädorna kupar sig eller spricker." | <https://www.traguiden.se/konstruktion/konstruktionsexempel/bjalklag/bjalklag--generellt/barande-golvbelaggning/> | publicerad 2003-09-01, uppdaterad 2021-02-23 | 2026-09-30, HTML |
| TräGuiden, "Trä och fukt" | branschorganisation | T29: fuktkvot 2–6 % vintertid i uppvärmd bostad | gemensamma 4.4 | – | redan läst |
| Tarkett, "Fukt och parkett – den perfekta balansen" | tillverkare (golv) | "RF skall ligga mellan 30 – 60 % för att golvmaterialet skall fungera som avsett."; "Om RF blir lägre än 30 % vill golvet röra sig mer än vad installationen tillåter och golvet kan spricka isär."; ur Hus AMA 08 RA enligt Tarkett: "Vid lägre relativ luftfuktighet än 30 % i lokalen kan t ex springors antal och storlek mellan parkettbräder bli större än vad AMA föreskriver." | <https://proffs.tarkett.se/sv_SE/node/fukt-och-parkett-den-perfekta-balansen-459> | datum saknas på sidan | 2026-09-30, HTML |
| Kährs, "Underhållshandbok bostäder" 2019-04 | tillverkare (golv) | "RF ska ligga mellan 30–60 % för att golvmaterialet skall fungera som avsett. På vintern när RF sjunker vill träfibrerna dra ihop sig vilket kan göra att golvbrädorna blir konkava och springor visar sig mellan bräderna. Då krävs att fuktighet tillförs till luften genom t ex en luftfuktare." | <https://www.bauhaus.se/media/pdf/kahrsunderhall.pdf> (Kährs egen adress gav HTML i stället för PDF) | 2019-04 | 2026-09-30, PDF |

- Luftfuktighetssidans rad 180 ("golvtillverkarna vill ha 30 till 60 procent året om") har nu två namngivna tillverkare. **Stämmer.**
- **Möbler: ingen källa hittad** om att möbler spricker vid torr luft. TräGuidens citat gäller golvbrädor och virke. **Saknas.** Skriv "trägolv", inte "möbler", om inte en källa hittas.
- Kährs och Tarkett skriver också att "vi människor" mår bättre i 30–60 %. Tillverkare om hälsa: **används inte**.
- Instrument (piano, gitarr): **inte sökt, saknas.** Checklistan H2 3 nämner "ett instrument".

---

## 4. Därför blir luften torr: Alingsås, ordagrant

Alingsås kommun, adress i avsnitt 2, läst 2026-09-30 ur HTML och bilder:

- "Perioden för torr luft brukar vara ungefär halva året, mellan lucia och midsommar. Då har de flesta bostäder och kontor i Sverige för torr inomhusluft."
- "Vi mår bäst när den relativa luftfuktigheten är runt 50 %. Det är inte jättenoga, mellan 30 och 70 % går bra." (T14, nu ordagrant)
- "När det är kallt ute kommer den inkommande luften att värmas och då sjunker den relativa luftfuktigheten drastiskt. Trots att allt vatten finns kvar i luften! Det spelar ingen roll hur huset värms upp eller hur det ventileras, är det kallt ute så kommer inomhusluften att bli torr."
- "Elradiatorer varken ökar eller minskar fukten i luften"
- **6-procentsexemplet** står i en bild (tabell-b.png), inte i brödtexten. Bildens tabell, "Uteluft med 100% luftfuktighet värms till 20°C": 20 → 100 %, 10 → 35 %, 0 → 25 %, −10 → 12 %, −20 → 6 %. Alt-texten: "… medan den sjunker till 6% när luften värms från -20°C." Sidan skriver ovanför: "OBS! Alla siffror är avrundade!"
- **Broschyren säger 5 %:** "Den lilla tabellen ovan till höger visar att den kalla luften bara kan ha 1 gram vatten per kubikmeter som mest. När den luften kommer in och värms till 20 plusgrader sjunker den relativa fuktigheten från 100% till 5% trots att inget vatten tas bort." Webbens bild säger 2 g/m³ vid −20 °C, broschyren 1.
- **EGEN kontroll** (T18, T19): mättnadsånghalt vid −20 °C = 1,08 g/m³, vid 20 °C = 17,25 g/m³ → 6,2 %. Webbens 6 % stämmer; broschyrens 5 % och webbens "2 g" är avrundningar. Sajten har redan "cirka 6 procent" (luftfuktighetssidan rad 163). **Behåll 6.**
- **Alingsås 10 °C → 35 % stämmer inte:** EGEN 9,40 / 17,25 = 54 %. Använd inte den raden. 0 °C → 25 % (EGEN 28 %) och −10 °C → 12 % (EGEN 14 %) ligger inom avrundningen.

---

## 5. Typerna: ultraljud, förångning, ånga

### 5.1 Så fungerar de, med tillverkarens ord

| Typ | Tillverkarens beskrivning (ordagrant) | Källa |
|---|---|---|
| Ultraljud | "Thanks to effective high-frequency technology, the water is converted into a micro-fine mist and given off to the indoor air by a fan." | Boneco, U200, produktsidan, System Description Ultrasonic |
| Förångning (evaporativ) | "The self-regulating evaporation principle ensures the right amount of humidity in the room since the air automatically collects as much moisture as it needs at the moment." | Boneco, E200, "System description of evaporator" |
| Förångning, skivor i vattenbad | "As the VentWave™ 3D disk stack rotates in a water tray, clean water evaporates and humidifies the air" (UTDRAG); "humidifies indoor air using only water. There's no need for additional mats or filters." (HTML) | Venta, LW25 Classic Original |
| Ånga | "The Steam Humidifier system heats water to the boiling point and the generated steam helps to humidify the indoor air fast. By boiling the water, this system helps to eliminate bacteria in the steam and mineral-free humidification is guaranteed. Furthermore, energy is set free by the warm steam which slightly increases the room temperature" | Boneco, S250, System Description Steam Humidifier |
| Alla fyra (myndighet) | ultraljud "create a cool mist by means of ultrasonic sound vibrations"; förångning "transmit moisture into the air invisibly by using a fan to blow air through a moistened absorbent material, such as a belt, wick, or filter"; ånga "create steam by heating water with an electrical heating element or electrodes" | US EPA (UTDRAG för dessa tre meningar) |

- Självreglering: tillverkarens påstående för förångare (Boneco E200, W200). Ingen oberoende källa. Står det på sidan ska det stå som tillverkarens.
- Boneco U200: "As the room temperature can fall slightly as the mist evaporates …". Boneco S250: ångan höjer rumstemperaturen något. Båda tillverkarens påståenden, inga tal.

### 5.2 Effekt och befuktning, storleksordning

Tillverkarens egna tal, läst 2026-09-30. Adresserna i källistan.

| Typ | Modell | Effekt | Befuktning, högst | Rum enligt tillverkaren | Källa |
|---|---|---|---|---|---|
| Ultraljud | Boneco U200 | 20 W | 340 g/h (produktsidan); 300 g/h (äldre bruksanvisning) | 50 m² / 125 m³ | tillverkare |
| Förångning | Boneco E200 | 2,2–5,7 W | 200 g/h | 30 m² / 75 m³ | tillverkare |
| Förångning | Venta LW25 Classic Original | 2 / 4 / 6,5 W (tre lägen) | 339 ml/h, "Tested according to AHAM HU-1-2016 in an independent laboratory" (villkoret 21 °C och 30 % enligt WebFetch, UTDRAG) | upp till 49 m², "Based on a ceiling height at a max of 2.5 m" | tillverkare |
| Ånga | Boneco S250 | 145 W / 285 W, "vid 230 V ~ 50 Hz" | 300 g/h | 50 m² / 125 m³ | tillverkare, bruksanvisningen (svenska avsnittet "Tekniska data") och produktsidan |
| Förångning (stor) | HACE PCMH45 | 70 W (tabellen); "Humidifier consumption does not exceed 0.5 Amps (110Wh)" (texten) | 45 L/24h "(at 21°C x 30% RH)" = EGEN 1,9 l/h | – | tillverkare, bruksanvisning PCMH45-DW |

- **Storleksordning (EGEN sammanfattning):** förångare 2–7 W, ultraljud cirka 20 W, ånga 145–285 W. Ånga drar alltså tiotals gånger mer el än de andra för ungefär samma vattenmängd (300 g/h mot 200–340 g/h). Befuktningen för hemmamodellerna ligger på 200–340 g/h.
- Tillverkarnas tal är högsta läge. Förångarens effekt beror på luftens torrhet (självreglerande enligt tillverkaren). Venta och HACE anger villkoret 21 °C och 30 % RF; Boneco anger inget villkor.
- HACE PCMH45: bruksanvisningen motsäger sig själv om effekten (70 W i tabellen, 0,5 A / "110Wh" i texten). Tabellen är den tekniska uppgiften.
- Philips (HU4803, 220 ml/h enligt sökmotorns utdrag): produktbladet gick inte att läsa (404). **Används inte.**
- Elkostnaden ägs av `/rakna/elkostnad/` (checklistan). Här bara watt.

### 5.3 HACE PCMH45: typen bekräftad

Bruksanvisning "INSTRUCTION MANUAL Model No. PCMH45-DW", Proffsmagasinets bilaga <https://pm-asset.azureedge.net/api/asset-download?id=28832034>, läst 2026-09-30 ur PDF-texten, avsnittet "HOW IT WORKS":

> Two major systems are employed: 1.Air flow system, which uses an asynchronous motor and axial flow fan to drive the air through the evaporative pads and blow a certain amount of humid air into the room. 2. Water wheel, which holds the evaporative pads onto the drum, which is driven by a synchronous motor and gear mechanism. The pads deliver water from the water tank through the drum rotation and the fan removes certain moisture from the sponge by the principle of evaporation.

- **Bekräftat: förångning.** Bruksanvisningen använder inte ordet "evaporator" om hela maskinen och inte ordet "förångare" (den är på engelska), men beskriver "evaporative pads" och "the principle of evaporation". Ultraljud nämns inte i bruksanvisningen. Butikens "ultrasonisk" är fel (samma slutsats som `underlag-fukt-sortiment-2026-09-30.md` 1c).

### 5.4 Vitt damm, rengöring och avkalkning

| Typ | Ordagrant | Källa |
|---|---|---|
| Ultraljud, vitt damm | "The demineralization cartridge must be replaced every 2–3 months. If the water is very hard, it may be necessary to replace the cartridge earlier. White dust around the appliance is a sure sign that the cartridge needs replacing." | Boneco U200, bruksanvisning (tillverkare) |
| Ultraljud, rengöring | "Clean the water tank and the nebulizer space regularly once a week"; "Only use the brush to clean the membrane (30). This should be done once a week."; "Change the water in the tank at least once a week." | samma |
| Ultraljud, vatten | "use only clean, contamination-free, cold, fresh tap water in your humidifier. If your water source is contaminated or if you are uncertain of its safety use distilled water." | samma |
| Ultraljud, hygrostat | "The appliance does not have an integrated hygrostat. Use an external hygrostat to avoid damage through over-humidification." | samma |
| Ultraljud, vitt damm (myndighet) | se 1.6 (EPA): ultraljud sprider mineraler ur kranvatten, "white dust"; ånga och förångning "not expected to disperse substantial amounts of minerals" | US EPA |
| Ånga, kalk | "Kalkdynan tar upp kalk från vattnet så att den inte sprids till rumsluften."; "Även om kalkplattan tar upp det mesta av kalken i vattnet blir värmeplattan i BONECO S250 så småningom igenkalkad." Avkalkning: "Stäng av BONECO S250 och låt den svalna i en timme." och "Blanda en påse CalcOff® med en liter varmt kranvatten." | Boneco S250, bruksanvisning, svenska avsnittet (tillverkare) |
| Ånga, rengöringsintervall | "Från dag tre när apparaten inte används: Töm vattenkaret och vattentanken och fyll dem med rent vatten"; "Varannan vecka: Rengör vattentanken, täckkåpan, doftbehållaren och ångröret med diskmedel och en mjuk plastborste"; "Varannan till var fjärde vecka: Kontrollera A451 kalkdynan och byt den vid behov" | samma |
| Ånga, hygrostat | "Önskad luftfuktighet kan ställas in på mellan 30 och 70 %." | samma |
| Förångning, mattor | "It is essential to keep the pads clean and replace them periodically (at least yearly, but preferably twice a year depending on the amount of use, water hardness, local air pollution." och "clean the foam pads with white vinegar or de-scaling agent" | HACE PCMH45-DW (tillverkare) |
| Alla, myndighet | "Clean portable humidifiers every third day"; brännskador av ånga och kokande vatten | US EPA |

- **Brännrisk vid ånga:** Boneco S250:s bruksanvisning hänvisar till separata säkerhetsinstruktioner, som **inte gick att hitta**. Tillverkaren skriver i produkttexten att ångan är varm och värmer rummet något. Brännrisken har bara EPA som källa ("Steam and boiling water may cause burns."). **Svensk källa saknas.**
- **Hårt vatten i Sverige** (var det är hårt, dH): **inte hämtat, saknas.**
- Rengöringsintervallen skiljer sig: EPA var tredje dag, Boneco U200 en gång i veckan, Boneco S250 varannan vecka. Inget medelvärde. EPA är myndighet men amerikansk; tillverkaren gäller sin egen maskin.

---

## 6. Så mycket vatten behöver rummet (EGEN)

### 6.1 Formel och konstanter

- Mättnadsångtryck (Magnus, Lawrence 2005, T18): es(T) = 6,1094 × exp(17,625 × T / (T + 243,04)) hPa.
- Ångtryck: e = RF/100 × es(T).
- Ånghalt (T19): v = 216,68 × e / (T + 273,15) g/m³.
- Luftflöde: Q = golvyta × takhöjd × luftomsättning. Omsättningen 0,5 per timme: FoHMFS 2014:18 (L1), samma som T46 (0,35 l/s per m² × 12 m² = 4,2 l/s = 15,1 m³/h).
- Vattenbehov: m = Q × (v_mål − v_ute − fukttillskott) g/h. 1 g vatten = 1 ml. Per dygn: m × 24 / 1 000 liter.
- **ANTAGANDE:** all uteluft som kommer in värms till rummets temperatur och blandas helt; ingen fukt tas upp eller avges av väggar, möbler och textilier (fuktbuffring ignoreras); luftfuktaren går jämnt.
- **Formeln räknar över vatten även under 0 °C.** Över is blir mättnadsångtrycket vid −5 °C något lägre. RF-talet från en vanlig väderprognos anges över vatten. Skillnaden ändrar inte slutsatsen, men talen gäller inom formelns osäkerhet.

### 6.2 Räkneexempel: sovrum 12 m², 2,5 m, 0,5 oms/h, ute −5 °C och 80 %, inne 21 °C

| Steg | Räkning | Resultat |
|---|---|---|
| Rummets volym | 12 × 2,5 | 30 m³ |
| Luftflöde | 30 × 0,5 | 15 m³/h |
| es(−5 °C) | 6,1094 × exp(17,625 × −5 / 238,04) | 4,22 hPa |
| e ute | 0,80 × 4,22 | 3,38 hPa |
| Ånghalt ute | 216,68 × 3,38 / 268,15 | **2,7 g/m³** (2,73) |
| es(21 °C) | 6,1094 × exp(17,625 × 21 / 264,04) | 24,82 hPa |
| Mättnadsånghalt 21 °C | 216,68 × 24,82 / 294,15 | 18,3 g/m³ (18,28) |
| Mål 40 % | 0,40 × 18,28 | **7,3 g/m³** (7,31) |
| Mål 45 % | 0,45 × 18,28 | **8,2 g/m³** (8,23) |
| Skillnad, 40 % | 7,31 − 2,73 | 4,6 g/m³ (4,59) |
| Skillnad, 45 % | 8,23 − 2,73 | 5,5 g/m³ (5,50) |
| Vatten per timme, 40 % | 4,59 × 15 | **68,8 g/h = 68,8 ml/h** |
| Vatten per timme, 45 % | 5,50 × 15 | **82,5 g/h = 82,5 ml/h** |
| Per dygn, 40 % | 68,8 × 24 / 1 000 | **1,7 l/dygn** (1,65) |
| Per dygn, 45 % | 82,5 × 24 / 1 000 | **2,0 l/dygn** (1,98) |

Det här är vattnet om **inget** annat tillför fukt. Med fukttillskottet från de boende räknat som 3 g/m³ (övre gränsen i T11, **ANTAGANDE** att rummet ligger just där):

| | 40 % | 45 % |
|---|---|---|
| Skillnad kvar | 4,59 − 3 = 1,6 g/m³ | 5,50 − 3 = 2,5 g/m³ |
| Per timme | 23,8 ml/h | 37,5 ml/h |
| Per dygn | 0,6 l | 0,9 l |

### 6.3 RF inne utan luftfuktare (EGEN)

| Fall | Ånghalt inne | RF vid 21 °C |
|---|---|---|
| Uteluften bara värmd, inget fukttillskott | 2,7 g/m³ | 2,73 / 18,28 = **14,9 %** |
| Med fukttillskott 3 g/m³ (T11) | 2,73 + 3 = 5,7 g/m³ | 5,73 / 18,28 = **31,3 %** |
| Samma vid 20 °C (en grad lägre) | 5,7 g/m³ | 33,2 % |
| Samma vid 19 °C | 5,7 g/m³ | 35,2 % |

- Tarkett (L5): −5 °C och 80 % värmd till 20 °C ger "endast 15 %". EGEN vid 20 °C: 15,8 %. **Stämmer** i storleksordning.
- Tarkett (L6): "För varje grad man sänker innetemperaturen så höjer man RF med ungefär 1,5%." EGEN kontroll, samma ånghalt, 21 → 20 °C: från 20 % blir det 21,2 %; från 30 % blir det 31,8 %; från 40 % blir det 42,4 %. Alltså 1,2 till 2,4 procentenheter per grad beroende på nivån. Tarketts "ungefär 1,5" gäller runt 25 %.

### 6.4 Två som sover i rummet (EGEN, med sajtens egen källa)

- Kondenssidan (`src/content/guider/fukt/kondens-pa-fonster.mdx` rad 155): utandningen "minst ett kilo vatten per person och dygn, enligt SP" (faktablad `guider-kondens-pa-fonster-utbyggnad-2026-09-30.md` S1).
- EGEN: 1 000 g / 24 h = 41,7 g/h per person. Två personer: 83,3 g/h. I rummet ovan: 83,3 / 15 = 5,6 g/m³ tillskott → 2,73 + 5,56 = 8,3 g/m³ → **45,3 %** vid 21 °C.
- **ANTAGANDE** att all fukt stannar i rummet (dörren stängd), att ventilationen är exakt 0,5 oms/h och att SP:s dygnstal gäller under natten. Slutsatsen i sak: två sovande i ett stängt sovrum på 12 m² tillför ungefär lika mycket vatten per timme som räkneexemplets luftfuktare vid 45 % (83 mot 82,5 g/h). Talet är en räkning, inte en mätning. Hur mycket som faktiskt hamnar i sovrummet har kondenssidan redan skrivit att den inte hittat en säker siffra på.

### 6.5 Mot tillverkarnas tal

- Räkneexemplets behov är 24–83 ml/h. Hemmamodellerna i 5.2 ger 200–340 g/h på högsta läge och anges för 30–50 m² golv. EGEN: det är tre till fyra gånger rummets behov vid 45 % utan tillskott, och tio gånger med tillskottet. En luftfuktare utan hygrostat på högsta läge i ett litet sovrum når därför taket fort. Boneco U200 har ingen inbyggd hygrostat (5.4).
- EGEN, samma formel: hur mycket av 340 g/h som stannar i rummet beror på ventilationen. Vid 15 m³/h och 340 g/h skulle ånghalten stiga med 22,7 g/m³, mer än mättnadsånghalten 18,3 vid 21 °C. Det betyder att rummet mättas och vattnet fälls ut på kalla ytor långt innan. Räkningen är teoretisk (ingen buffring, jämn blandning).

---

## 7. Daggpunkt och kondens

### 7.1 Daggpunkt vid 21 °C (EGEN, T18)

γ = ln(RF/100) + 17,625 × 21 / (243,04 + 21); Td = 243,04 × γ / (17,625 − γ).

| RF vid 21 °C | Ånghalt, g/m³ | Daggpunkt, °C |
|---|---|---|
| 40 % | 7,3 | 6,9 (T20) |
| 45 % | 8,2 | **8,6** (T20, kontrollerad: 8,61) |
| 50 % | 9,1 | **10,2** (10,18; T20 har 10,2) |
| 55 % | 10,1 | **11,6** (11,62; T20 har 11,6) |

**Stämmer** med T20.

### 7.2 Vad sajten redan säger om glaset och väggen

| Uppgift | Tal | Var | Källa som sidan anger |
|---|---|---|---|
| Tvåglas U 3,0, glaset vid −5 °C ute | 10,9 °C | `src/content/guider/fukt/kondens-pa-fonster.mdx` rad 101 (tabellen) och rad 91 | EGEN räkning: inne − 0,13 × U × (inne − ute), 21 °C inne, mitt på glaset; Rsi 0,13 ur SS-EN ISO 6946 via Svenskt Trä; U-värden ur Energimyndighetens ET 2025:01 (rad 107) |
| Samma vid −10 °C | 8,9 °C | rad 101 | samma |
| Samma vid −20 °C | 5,0 °C | rad 101; rad 12 ("bara 5 plusgrader mitt på glaset en natt med 20 minusgrader"); rad 109; faq rad 181 | samma |
| Förbehåll | "Tabellen räknar med U-värdet för hela fönstret, med båge och karm. Själva glaset isolerar oftast lite bättre, så mitt på rutan är det i verkligheten lite varmare än tabellen visar" | rad 113 | – |
| Ytterväggen i ett äldre hus | "12 till 15 grader" | `src/lib/kalkyl/daggpunkt.ts` rad 348 (`TYPISKA_YTOR`) | rad 344: "ANTAGANDE, inga mätningar i äldre hus, inte en publicerad tabell." |
| Fönsterglaset i januari | "5 till 10 grader" | samma, rad 349 | samma antagande |
| Räknarens standardvägg | 12 °C | `daggpunkt.ts` rad 140–141: "Ytterväggen i ett äldre hus är typfallet, och det är den som blir våt först." | antagande |

EGEN kontroll av glaset: 21 − 0,13 × 3,0 × 41 = 5,01 °C; 21 − 0,13 × 3,0 × 26 = 10,86 °C; 21 − 0,13 × 3,0 × 31 = 8,91 °C. **Stämmer.**

### 7.3 Kondens och mögelrisk när rummet fuktas (EGEN)

RF vid ytan = e_rum / es(ytans temperatur) × 100 (räknarens metod, `daggpunkt.ts` steg 3: kvoten på ångtryck). Över 100 = kondens. Över 75 = räknarens mögelrisk (T1 tillämpad på ytan).

| RF i rummet, 21 °C | Vägg 12 °C | Glas vid −5 ute (10,9 °C) | Glas vid −10 ute (8,9 °C) | Glas vid −20 ute (5,0 °C) |
|---|---|---|---|---|
| 40 % (Td 6,9) | 71 % | 76 % | 87 % | kondens |
| 45 % (Td 8,6) | 80 % | 86 % | 98 % | kondens |
| 50 % (Td 10,2) | 89 % | 96 % | kondens | kondens |
| 55 % (Td 11,6) | 98 % | kondens | kondens | kondens |

- RF i rummet vid 21 °C som ger kondens (EGEN, es(yta)/es(21)): gamla tvåglaset vid −20 °C redan vid **35 %**; vid −10 °C vid 46 %; vid −5 °C vid 52 %; väggen på 12 °C vid 56 %.
- Kondenssidan rad 109 säger samma sak i ord ("där immar det gamla tvåglasfönstret när det blir riktigt kallt").
- Talen gäller mitt på glaset. Kanten och bågens nederdel är kallare (räknarens text S3, `daggpunkt.astro`; kondenssidan H2 "Var på glaset vattnet sitter").

### 7.4 Räknaren med förvalet rum=sovrum

Adress: `/rakna/daggpunkt/?rum=sovrum` (länkraden i `src/pages/rakna/daggpunkt.astro` rad 489 bygger `/rakna/daggpunkt/?rum=${r}#raknaren`). Checklistan föreslår `<Kalkylator namn="daggpunkt" forval="rum=sovrum" />`.

Förvalet (`daggpunkt.ts` rad 205): `sovrum: { luftTempC: 21, rfProcent: 45, ytTempC: 12, arstid: 'vinter' }`. Källor i kommentaren rad 198–204: 21 och 45 ur FoHMFS 2014:14 (T10), sovrum under 45 vintertid ur Astma- och Allergiförbundet (T13), ytan 12 är "ANTAGANDE … TYPISKA_YTOR, ytterväggen i ett äldre hus 12 till 15, nedre änden".

Det läsaren ser (kontrolltal i `scripts/test-kalkyl-daggpunkt.mjs` rad 228: `sovrum: { daggpunkt: 8.6, yta: 12, rfYta: 80, bedomning: 'mogelrisk' }`; EGEN kontroll av de övriga):

- Daggpunkt **8,6 grader**, ånghalt 8,2 g/m³.
- Ytan 12 grader, luften vid ytan cirka **80 %** (EGEN 79,8), bedömning **mögelrisk** (över 75, ingen kondens).
- Gränsen: rummet får ha högst **42 %** för att ytan ska hålla 75 (EGEN 42,3, avrundat nedåt), eller ytan måste upp till **13,0 grader** (EGEN 12,94, avrundat uppåt).
- Åtgärder vintertid i bostad (`daggpunkt.ts` rad 608–609 och 618): vädra, sänk fuktproduktionen, gör ytan varmare.
- "Gör inte det här" (rad 371–372, `GOR_INTE_VINTER_BOSTAD`): "Ett sovrum som immar i januari behöver ingen maskin. Uteluften är torr den här tiden på året, så ett fönster på vid gavel i fem minuter gör samma jobb gratis. Den som köper en avfuktare till ett sovrum i januari har betalat för att slippa öppna fönstret."
- Normalraden för sovrum vintertid: högst 45 % (Astma- och Allergiförbundet), och 45 räknas som "inom" (testet rad 373).
- Förvalsraden på sidan (`daggpunkt.astro` rad 254–256): "Talen i sovrummet vintertid" / "Talen för luften har stöd hos Folkhälsomyndigheten och Astma- och Allergiförbundet. Väggens temperatur ligger i den kallare änden av spannet för ytterväggar i hjälptexten, som är mitt antagande".
- Rummet `fonster` (`?rum=fonster`, rad 213): samma luft, U 3,0, ute −5, glaset 10,9 grader; kontrolltal rfYta 86, mögelrisk (testet rad 229).
- **Obs för texten:** räknarens sovrumsförval visar alltså redan mögelrisk vid 45 % mot en vägg på 12 grader. En luftfuktare som håller 45 % i ett sådant rum ligger på gränsen enligt sajtens egen räknare.

---

## 8. T12 bekräftad

FoHMFS 2014:14, ordagrant ur PDF: "omfattande kondens på fönstrens insida vid en utetemperatur av ca -5° C eller lägre". FoHMFS 2014:18 har samma indikation för ventilationen: "vid omfattande kondensbildning på fönsters insida vid en utetemperatur av ca -5° C". **Bekräftad.** På sidan: "cirka" (vägledningen) eller "ca" (föreskriften), båda rätt.

---

## 9. Sänka temperaturen eller ventilationen

| Källa | Rang | Ordagrant | Läst |
|---|---|---|---|
| Alingsås kommun | kommun | Under "Vad kan göras för att få högre luftfuktighet inomhus?": "Lägre inomhustemperatur" (webben); "Ha en lägre inomhustemperatur" (broschyren). Om ventilationen: "Mekanisk ventilation (ventilation med fläkt) ventilerar i allmänhet på lika mycket oavsett årstid. Det gör att i de flesta hus blir luften för torr vintertid." | 2026-09-30, HTML och PDF |
| Miljö Skaraborg | kommunal förvaltning | "Ibland räcker det att sänka temperaturen eftersom varm luft kan kännas torr." | 2026-09-30, HTML |
| Tarkett | tillverkare | L6 (ca 1,5 % per grad); "En felaktig och alltför kraftig ventilation torkar ut luften i onödan"; för nya, tomma lägenheter: "I sådana måste kanske temperaturen och ventilationen sänkas och eventuellt kan även luftfuktare sättas in." | 2026-09-30, HTML |
| Luftfuktighetssidan, sajtens egen text | – | rad 182: "Vill du höja talet några enheter, sänk värmen en grad." och "Stäng däremot inte ventilationen för att spara på fukten. Då stiger fukttillskottet, och det är det talet som gränsen på 3 gram per kubikmeter gäller." | – |

- **Energimyndigheten: inget hittat** om temperatur och luftfuktighet. **Saknas.**
- **Att minska ventilationen för att höja RF: ingen myndighet råder till det.** FoHMFS 2014:18 sätter golvet 0,5 rv/h (L1) och 0,35 l/s per m². Tarkett (tillverkare) nämner sänkt ventilation bara för överventilerade nya lägenheter. Sidan bör hålla linjen från luftfuktighetssidan rad 182: kontrollera att ventilationen inte är **för stor**, inte stryp den under 0,5.
- EGEN: 21 → 20 °C ger +1,2 till +2,4 procentenheter beroende på nivån (6.3).

---

## 10. Luftfuktighetssidan, stycket som nya sidan inte får säga emot

`src/content/kunskap/fukt/luftfuktighet-inomhus.mdx`, H2 "Luftfuktighet inomhus på vintern" (rad 161), läst i arbetskopian 2026-09-30 (senaste commit på filen 0bc863d; git status ren vid start).

**Rad 178, ordagrant:**

> Irriterade ögon, torr hud, statisk elektricitet i tröjor och mattor, halsont, nästäppa på natten och spruckna läppar är vanliga tecken på för torr luft. Något svenskt gränsvärde för torr luft finns inte.

- Inga tal i stycket. Symtomen motsvarar Alingsås lista utan "återkommande förkylningar". Stycket anger ingen källa i sig; källraden står under tabellen (rad 174).
- "Något svenskt gränsvärde för torr luft finns inte." **Stämmer** med läsningen här: FoHMFS 2014:14 och 2014:18 har bara övre indikationer (7 g/kg, 3 g/m³). Inget undre tal hittat hos Boverket, FoHM, Arbetsmiljöverket eller 1177.

Talen i samma H2, som nya sidan citerar och inte avviker från:

| Rad | Tal | Källa enligt sidan |
|---|---|---|
| 163 | uteluft −20 °C mättad, värmd till 20 °C: "cirka 6 procent" | Alingsås kommun (L4) |
| 165–172 | tabellen (källrad 174): 10–25 % vanligt; under 20 % ögon och hals; över 7 g/kg, ca 45 % vid 21 °C; sovrum under 45 %; uteluften 90–95 %; 3–5 g/m³ | TräGuiden, Boverket, FoHMFS 2014:14, Astma- och Allergiförbundet (rad 174) |
| 180 | trägolv: tillverkarna vill ha 30–60 % året om; under 30 i februari kan ge springor | tillverkare utan namn på sidan; nu Tarkett och Kährs (avsnitt 3) |
| 182 | "sänk värmen en grad"; stäng inte ventilationen; 3 g/m³ | – ; FoHMFS |

- Rad 182 har också sajtens hållning: "Min hållning är att torr luft i februari är obehaglig men inte farlig för stommen, och springorna i golvet går ihop när luften blir fuktigare igen." Nya sidan bör inte säga emot den.
- Inlänken som checklistan beställer hör hemma efter rad 178 (checklistan avsnitt 9).

---

## 11. Interna länkar som ska finnas

Ur checklistan avsnitt 9, kontrollerade att sidorna finns:

- `/fukt/luftfuktighet-inomhus/` (H2 1)
- `/fukt/hygrometer/` (H2 3)
- `/fukt/kondens-pa-fonster/` och `/rakna/daggpunkt/?rum=sovrum` (H2 5), eller `<Kalkylator namn="daggpunkt" forval="rum=sovrum" />`
- `/rakna/elkostnad/` med luftfuktarförvalet, när UX byggt det (B0). `spec-elkostnad-forval-2026-09-30.md` rad 77: "luftfuktare: affiliatebeslut 15 oktober, och inget datablad finns i något faktablad." Watt-talen i 5.2 är nu det databladet, om UX vill ha dem.

---

## 12. Källor

```yaml
kallor:
  - titel: "Folkhälsomyndigheten, FoHMFS 2014:14 Folkhälsomyndighetens allmänna råd om fukt och mikroorganismer, beslutade 2 januari 2014"
    url: https://www.folkhalsomyndigheten.se/contentassets/26ea6c0d999742c0a5351c63e70cb0ce/fohmfs-2014-14.pdf
  - titel: "Folkhälsomyndigheten, FoHMFS 2014:18 Folkhälsomyndighetens allmänna råd om ventilation, beslutade 2 januari 2014"
    url: https://www.folkhalsomyndigheten.se/contentassets/641784832543443ea4eebe9b300c244e/fohmfs-2014-18.pdf
  - titel: "Folkhälsomyndigheten, Förteckning över gällande föreskrifter och allmänna råd den 1 januari 2026"
    url: https://www.folkhalsomyndigheten.se/publikationer-och-material/foreskrifter-och-allmanna-rad/forteckning-over-gallande-foreskrifter-och-allmanna-rad/
  - titel: "Folkhälsomyndigheten, Tillsynsvägledning om fukt och mikroorganismer, uppdaterad 9 april 2026"
    url: https://www.folkhalsomyndigheten.se/regler-och-tillsyn/tillsynsvagledning-och-stod/halsoskydd-vagledning-och-tillsyn/tillsynsvagledning-om-fukt-och-mikroorganismer/
  - titel: "Folkhälsomyndigheten, Vägledning om ventilation, uppdaterad 12 december 2024"
    url: https://www.folkhalsomyndigheten.se/regler-och-tillsyn/tillsynsvagledning-och-stod/halsoskydd-vagledning-och-tillsyn/vagledning-om-ventilation/
  - titel: "Folkhälsomyndigheten, Tillsynsvägledning om legionella, uppdaterad 28 april 2025"
    url: https://www.folkhalsomyndigheten.se/regler-och-tillsyn/tillsynsvagledning-och-stod/halsoskydd-vagledning-och-tillsyn/vagledning-om-smitta-fran-objekt-och-djur/tillsynsvagledning-om-legionella/
  - titel: "Folkhälsomyndigheten, Riskanalys för legionella, kapitel i Legionella i miljön, juli 2015"
    url: https://www.folkhalsomyndigheten.se/contentassets/cfb528effedf4326a2956f85beeb71a4/riskanalys-for-legionella.pdf
  - titel: "Folkhälsomyndigheten, Legionellainfektion – sjukdomsstatistik (ej läst, 404; sökmotorns utdrag)"
    url: https://www.folkhalsomyndigheten.se/folkhalsorapportering-statistik/statistik-a-o/sjukdomsstatistik/legionellainfektion/
  - titel: "1177, Legionella – Legionärssjuka, uppdaterad 2024-02-12"
    url: https://www.1177.se/sjukdomar--besvar/lungor-och-luftvagar/inflammation-och-infektion-ilungor-och-luftror/legionella/
  - titel: "1177, Torra ögon, uppdaterad 2023-09-29"
    url: https://www.1177.se/sjukdomar--besvar/ogon/ogonbesvar/torra-ogon/
  - titel: "1177, Torr hud och klåda, uppdaterad 2024-10-28"
    url: https://www.1177.se/sjukdomar--besvar/hud-har-och-naglar/klada-utslag-och-eksem/torr-hud-och-klada/
  - titel: "1177, Nästäppa och snuva, uppdaterad 2026-05-18"
    url: https://www.1177.se/sjukdomar--besvar/infektioner/forkylning-och-influensa/nastappa-och-snuva/
  - titel: "Vårdhandboken, Legionella: Förebyggande åtgärder i vård och omsorgsmiljö, granskad 2025-09-15"
    url: https://www.vardhandboken.se/vardhygien-infektioner-och-smittspridning/infektioner-och-smittspridning/legionella-inom-vard-och-omsorg/forebyggande-atgarder-i-vard-och-omsorgsmiljo/
  - titel: "Region Jönköpings län, Legionella, 2026-02-18"
    url: https://folkhalsaochsjukvard.rjl.se/vardstod/smittskydd-och-vardhygien/smittor-a-o2/legionella/
  - titel: "Viss.nu, Inomhusmiljö och hälsa, uppdaterat december 2019"
    url: https://viss.nu/kunskapsstod/vardprogram/inomhusmiljo-och-halsa
  - titel: "Arbetsmiljöverket, Inomhusmiljö och hälsobesvär, uppdaterad 2025-10-14"
    url: https://www.av.se/inomhusmiljo/inomhusmiljon-ska-framja-arbetsmiljo-halsa/inomhusmiljo-och-halsobesvar/
  - titel: "Alingsås kommun, Luftfuktighet inomhus, uppdaterad 16 september 2026"
    url: https://www.alingsas.se/bygga-bo-och-miljo/boende/luftfuktighet-inomhus/
  - titel: "Alingsås kommun, broschyr Torr luft inomhus (januari 2024)"
    url: https://municipio.alingsas.se/wp-content/uploads/networks/1/sites/2/2024/01/Folder_torr-luft_A4_webben.pdf
  - titel: "Miljö Skaraborg, Temperatur, luftfuktighet och drag, uppdaterad 2026-05-13"
    url: https://www.miljoskaraborg.se/privatperson/Bostadsmiljo1/Temperatur/
  - titel: "US EPA, Use and Care of Home Humidifiers, uppdaterad 2026-04-29"
    url: https://www.epa.gov/indoor-air-quality-iaq/use-and-care-home-humidifiers
  - titel: "TräGuiden, Träets fuktrörelser, uppdaterad 2021-06-14"
    url: https://www.traguiden.se/om-tra/materialet-tra/traets-egenskaper-och-kvalitet/fuktegenskaper1/traets-fuktrorelser/
  - titel: "TräGuiden, Bärande golvbeläggning, uppdaterad 2021-02-23"
    url: https://www.traguiden.se/konstruktion/konstruktionsexempel/bjalklag/bjalklag--generellt/barande-golvbelaggning/
  - titel: "Tarkett, Fukt och parkett – den perfekta balansen (odaterad)"
    url: https://proffs.tarkett.se/sv_SE/node/fukt-och-parkett-den-perfekta-balansen-459
  - titel: "Kährs, Underhållshandbok bostäder, 2019-04"
    url: https://www.bauhaus.se/media/pdf/kahrsunderhall.pdf
  - titel: "Boneco, Humidifier Ultrasonic U200, produktsida"
    url: https://www.boneco.com/products/u200
  - titel: "Boneco, U200 Instructions for use (äldre utgåva, via distributör)"
    url: https://boneco.vn/upload/lanphuong/file/may-tao-am/huong-dan-su-dung-may-tao-am-boneco-u200.pdf
  - titel: "Boneco, Humidifier Evaporator E200, produktsida"
    url: https://www.boneco.com/products/e200
  - titel: "Boneco, Humidifier Steamer S250, produktsida"
    url: https://www.boneco.com/products/s250
  - titel: "Boneco, S250 Manual, alla språk (svenska avsnittet)"
    url: https://www.boneco.com/cdn/shop/files/Manual_S250_Humidifier_Steamer_BONECO_all_languages.pdf?v=1
  - titel: "Venta, LW25 Classic Original, produktsida"
    url: https://www.venta-air.com/en_de/LW25-Original-Air-Humidifier/7025401
  - titel: "HACE, Instruction manual PCMH45-DW (Proffsmagasinets bilaga)"
    url: https://pm-asset.azureedge.net/api/asset-download?id=28832034
```

Alla lästa 2026-09-30.

---

## 13. Osäkert och saknas

**Saknas (ingen källa hittad, skriv inte):**

1. Svensk myndighet om legionella i **bärbara hemmabefuktare**. Det finns bara allmänna 20–45 °C (1177, FoHM), FoHMFS 2014:18 om ventilationssystem, Vårdhandboken för vård och omsorg, och ett statistikfall som bara syns i sökmotorns utdrag.
2. **Befuktarfeber** i hemmabefuktare hos svensk myndighet. FoHMFS 2014:18 säger "luftfuktarfeber" om ventilationssystem.
3. Myndighet som säger **när befuktning är motiverad** (eksem, torra slemhinnor).
4. Myndighet som säger att **befuktning i bostäder sällan behövs**. Närmast: FoHM:s 20–40 % som "normala värden" (L3), Miljö Skaraborg om att sänka temperaturen.
5. **Energimyndigheten** om temperatur och luftfuktighet.
6. **Möbler** som spricker i torr luft. Bara trägolv har källa.
7. **Instrument** (piano, gitarr): inte sökt.
8. **Brännrisk vid ånga** med svensk källa. Bara EPA. Bonecos separata säkerhetsinstruktioner hittades inte.
9. **Vattnets hårdhet** i Sverige.
10. Philips produktblad (404).

**Osäkert:**

1. L9: FoHM-statistikens fall med luftfuktare i hemmet är sökmotorns utdrag. Sidan gav 404, årtalet är okänt. Används bara om den läses.
2. Tillsynsvägledningen om legionella och Region Jönköping: WebFetch-utdrag, inte ordagrant kontrollerade.
3. Venta: villkoret 21 °C och 30 % för 339 ml/h är WebFetch-utdrag; sidan anger bara AHAM HU-1-2016.
4. Boneco U200: 340 g/h på produktsidan, 300 g/h i den äldre bruksanvisningen. Produktsidan är nyare.
5. HACE PCMH45: 70 W i tabellen, "0.5 Amps (110Wh)" i texten.
6. Alingsås: 6 % (webben) mot 5 % (broschyren), 2 mot 1 g/m³ vid −20 °C, och 10 °C → 35 % som inte stämmer med formeln (EGEN 54 %).
7. Tarkett är odaterad. Hus AMA 08 RA-citatet är Tarketts återgivning, inte läst i AMA.
8. 6.4 (två sovande) bygger på SP:s dygnstal och antagandet att allt stannar i rummet.
9. Magnus-formeln över vatten under 0 °C (6.1).
10. T18 och T19 är fortfarande inte omlästa i originalkällan (samma status som i gemensamma faktabladet).

**Förslag till gemensamma faktabladet** (koordinatorn eller den som äger det): T46 har nu myndighetskälla (FoHMFS 2014:18, 0,5 rv/h). T14 och T45 kan tas bort från UTDRAG (lästa ordagrant här). L3 (20–40 %, snitt 30 %) kan bli ett gemensamt tal.
