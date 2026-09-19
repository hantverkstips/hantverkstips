# Underlag: isolera krypgrund

Skribentens eget underlag till `src/content/guider/grund/isolera-krypgrund.mdx`, adress `/grund/isolera-krypgrund/`.
Skrivet 2026-09-19. Pelarens första sida.

## 1. Sökanalys

**Huvudfras:** isolera krypgrund
**Volym:** ej hämtad ur Google Ads. **Uppskattning: 250 till 400 sökningar per månad**, och sidan planeras mot 320.
Grunden för uppskattningen: "avfuktare krypgrund" ligger på 2 600 enligt `docs/data/keyword-stats-2026-09-16.csv`, och
isoleringsfrasen har färre annonsörer, ingen produktkategori bakom sig och en tydlig gör-det-själv-intention.
Den ligger rimligen i samma härad som "dreva fönster" (320) och "avfuktare garage" (320). Märkt som uppskattning
tills Search Console har tre månaders data. Frasen har ingen skarp säsong; krypgrunden isoleras när golvet är kallt,
alltså oktober till mars, medan fukten toppar i juli.

**Sökintention:** informativ med utförande. Den som söker har ett kallt golv, har varit nere i grunden och vill veta
vilken metod som gäller och i vilken ordning. Hon letar inte efter en produkt. Därför projektguide, inte köpguide.

**Nivå:** mellan. Läsaren vet vad en krypgrund är och har sett isolering, men kan inte skillnaden mellan
uteluftsventilerad och inneluftsventilerad grund, vet inte vad U-värde betyder i kronor och vet inte var ångspärren
ska sitta. Termerna förklaras kort första gången, inte utförligt.

### Ettan

[Gör Det Själv, "Isolera krypgrund själv"](https://gds.se/spara-energi/isolering/isolera-golv/laat-kylan-bli-kvar-i-krypgrunden),
Anders Utsten, publicerad 2026-02-02.

Vad den täcker, och den gör det bra:

- Ett komplett bygge i sex steg: grusat underlag, isolering i grunden, första isoleringen, fuktspärren, andra
  isoleringen, det bärande golvet
- Konkreta mått: 220 mm mineralull mellan reglarna, 50 mm expanderad polystyren mot sockeln, 50 mm västkustskivor,
  22 mm golvspånskiva, 20 cm överlapp på plastfolien, cirka 1 cm luftspalt mot vägg
- 250 kr per kvm och 4 till 5 dagar för cirka 30 kvm
- Ritning, video, materiallista och nedladdningsbar pdf
- Säger rätt sak om ångspärren: "Ångspärren läggs på plats. Till skillnad från folien på marken ska ångspärren
  sluta helt tätt, även mot väggarna."

Vad den saknar:

1. **Fukten finns inte på sidan.** Ingenstans står att en isolerad bjälklagskonstruktion gör krypgrunden kallare och
   fuktigare. Boverkets huvudvarning saknas helt, liksom gränsvärdet för relativ luftfuktighet och uppmaningen att
   leta efter mögel och röta innan man bygger in något.
2. **Bara en metod.** Sidan visar isolering i bjälklaget som om det vore det enda sättet. Varmgrunden, alltså att
   isolera marken och grundmuren i stället, nämns inte, trots att Boverket pekar ut den som lösningen när fuktrisken
   är hög.
3. **Inga U-värden och ingen besparing.** Läsaren får 220 mm men inte vad de 220 millimetrarna är värda, varken i
   W/m²K eller i kronor per år. Det är hela skälet att göra jobbet.
4. **Inga källor.** Ingen hänvisning till Boverket, Svenskt Trä eller någon isolertillverkare, och inga tal på
   ventilationsarea, plastfoliens tjocklek eller dräneringslagret under den.
5. **Riskabelt råd om ventilerna.** Sidan hanterar fukt genom att sätta luckor för ventilerna på sommaren. Det är
   samma råd som gör en otätad grund blöt när ingen avfuktare finns, och det står utan förbehåll.

### Så blir vår sida bättre

1. **Ordningen är sidans poäng.** Mät fukten, åtgärda fukten, isolera sist. Byggd på Boverkets egen text om att
   tilläggsisolering gör grunden kallare och fuktigare, med en gräns på 75 procent relativ luftfuktighet och en
   daggpunktskalkylator inbäddad där kondensrisken förklaras.
2. **Två konstruktionsprinciper mot varandra, inte en.** Bjälklagsisolering och markisolering med samma frågor
   ställda till båda, plus en regel för när man väljer vilken. Källor: Boverket, Svenskt Trä genom TräGuiden.
3. **U-värden ur tillverkarens tabell och en besparing som går att räkna efter.** Rockwools tabell för
   krypgrundsbjälklag av trä, och formeln E = ΔU · A · Gt · 0,001 ur Bygg & teknik 3/24, med antagandena utskrivna.
4. **Ångspärrens placering med källa**, inklusive var den inte får sitta, vilket är felet som ger en blöt
   konstruktion av ett annars korrekt bygge.

### Rubrikstruktur

- H1: Isolera krypgrunden, fukten först och isoleringen sist
- Kort svar (frontmatter)
- H2 Två sorters krypgrund, och bara den ena tål en isolerad bjälklagskonstruktion
- H2 Mät fukten innan du bär ner en enda skiva
- H2 Isolera bjälklaget, vad du vinner och vad det kostar grunden
- H2 Isolera marken i stället, så blir grunden varm
- H2 Ångspärren sitter uppe mot bostaden, aldrig under isoleringen
- H2 Ordningen, från hygrometern till sista skivan
- H2 När du ska lämna grunden i fred
- Faq

### Interna länkar ut

- `/fukt/avfuktare-krypgrund/` (äger avfuktaren, två gånger: vid mätningen och vid fuktåtgärden)
- `/fukt/luftfuktighet-inomhus/` (vad hygrometerns tal betyder)
- `/fukt/fukt-i-kallaren/` (vatten som kommer utifrån, inte ur luften)
- `<Verktygskort kalkylator="daggpunkt" />` under avsnittet om kondens

- `/grund/dranera-hus/` (vatten som står på marken efter regn). Lades till när systersidan blev publicerad under
  arbetets gång. `/grund/sprickor-i-grunden/` länkas inte härifrån; den länkar hit i stället, och ämnena möts inte
  naturligt i löptexten.

## 2. Faktaunderlag

### Boverket, Energiguiden, Tilläggsisolera grunden

<https://www.boverket.se/sv/energiguiden/energirenovera-smahus/5.valja_atgarder/grund/>
Hämtad 2026-09-19. Sidan är JavaScript-renderad och gick inte att läsa med vanlig hämtning; texten togs ur
sidans egen HTML-nyttolast.

- "Tilläggsisolering av en uteluftsventilerad krypgrund kan minska byggnadens energianvändning och göra det varmare
  inomhus. Men kontrollera alltid fuktrisken, eftersom isoleringen kan göra själva krypgrunden kallare och fuktigare."
- "Om du tilläggsisolerar under golvbjälklaget behöver du vara medveten om fuktriskerna. Krypgrunden kommer att bli
  kallare, och det ökar risken för kondens och fuktskador. Det går att lösa genom att skapa en så kallad varmgrund,
  alltså att isolera insidan av väggarna och ytan mot marken i krypgrunden isoleras, istället för golvbjälklaget.
  Det kan dock vara svårare att skapa en varmgrund om marken inte är jämn i kryputrymmet."
- "Undersök krypgrunden och golvbjälklaget. för att se till att det inte finns fuktskador. Om det finns mögel eller
  röta, behöver du hitta och åtgärda orsakerna, innan du börjar tilläggsisolera." (punkten mitt i meningen är Boverkets)
- "Sträva efter passiva lösningar som varmgrund. Om du har problem med fukt, kan du överväga aktiva lösningar som
  avfuktare men det ökar energianvändningen."
- "Om du isolerar på sommaren när grunden naturligt är fuktigare än annars finns en risk att stänga in fukt beroende
  på isoleringsteknik. Kontrollera fuktnivån innan du bygger in material."
- "Du kan tilläggsisolera inne i krypgrunden när som helst på året." (står före sommarvarningen ovan, och de två
  meningarna drar åt olika håll; sidan skriver ut spänningen i stället för att välja en av dem)
- "Om golvvärme ska installeras bör alltid tilläggsisolering övervägas för att inte få en ökad energianvändning."
- "Kan det bli problem med att tjälen går ner under grundläggningsdjupet om det blir kallare? Överväg i så fall att
  isolera delvis på marken."
- "Finns det rör som hamnar kallare och behöver förstärkt skydd mot frysning?"
- "Kontrollera om det finns problem med höga radonvärden. Då kan du behöva lufttäta golvbjälklaget när du
  tilläggsisolerar."
- "Har du kalla golv när det blåser? Överväg att lufttäta bjälklagskanten, annars kan nyttan med din tilläggsisolering
  försvinna."
- Besparing: **ej angiven i tal.** "Hur mycket man sparar varierar. Det beror bland annat på vilket skick huset var i
  innan isoleringen, och var i landet man bor."

### Boverket, BBR 6:52, högsta tillåtna fukttillstånd

<https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/boverkets-byggregler/fuktsakerhet/hogsta-tillatna-fukttillstand/>

- 75 procent relativ luftfuktighet som kritiskt fukttillstånd när materialets eget värde inte är väl undersökt.
  Samma tal som `/fukt/avfuktare-krypgrund/` och `/fukt/fukt-i-kallaren/` använder.

### Svenskt Trä, TräGuiden, uteluftsventilerad krypgrund

<https://www.traguiden.se/konstruktion/konstruktiv-utformning/grundlaggning/grundlaggning/uteluftsventilerad-krypgrund/>

| Uppgift | Värde |
|---|---|
| Öppningsarea, självdrag, vindutsatt läge | 0,05 m² per 100 m² bjälklagsarea |
| Öppningsarea, självdrag, vindskyddat läge | 0,1 m² per 100 m² bjälklagsarea |
| Luftflöde vid fläktventilation | 1 m³/h per m² bjälklagsarea |
| Dräneringslager på marken | minst 150 mm tvättad singel eller makadam, 16 till 32 mm |
| Plastfilm på marken | 0,30 mm åldersbeständig, omvänd taktegelprincip |
| Värmeisolering på marken | 50 till 100 mm, särskilt nödvändigt där markytan är berg i dagen |
| Isolering i moderna bottenbjälklag | 170 till 400 mm mineralull, en del bör ligga under bjälkarna |

Källa: TräGuiden, Svenskt Trä, hämtad 2026-09-19.

- "Ett särskilt lufttätt skikt, som också kan vara ångtätt, fordras på bottenbjälklagets varma sida (översidan)."
- Sommarförhållandena beskrivs som en fuktkritisk miljö där mikrobiell påväxt och blånad är problemet trots ventilation.
- Vindskydd på isoleringens undersida, golvvärme och fördelning mellan och under bjälkarna behandlas inte på sidan.

### Svenskt Trä, TräGuiden, inneluftsventilerad krypgrund

<https://www.traguiden.se/konstruktion/konstruktiv-utformning/grundlaggning/grundlaggning/inneluftsventilerad-krypgrund/>

- "Inneluftsventilerade krypgrunder ventileras med inneluft för att god fuktsäkerhet ska erhållas."
- Huvuddelen av värmeisoleringen placeras på marken och i yttre grundmurar, enligt samma princip som platta på mark.
- "Träbjälklag över inneluftsventilerade krypgrunder bör förses med cirka 50 mm tjock isolering, främst från
  ljudsynpunkt."
- "Yttre grundmurar och marken i kryputrymmet täcks invändigt med en åldersbeständig plastfilm och utförs så att den
  ger samma lufttäthet som övriga delar av klimatskärmen."
- "För att mikrobiell påväxt inte ska utvecklas får temperaturen i kryputrymmet vara högst 2–3 °C lägre än i luften i
  utrymmen ovanför bjälklaget."
- Fördelar som anges: fuktsäkrare grundläggning, användbar i bergig terräng, kan minska grundläggningsdjupet.
  Nackdelar anges inte.

### Rockwool, krypgrundsbjälklag av trä

<https://www.rockwool.com/se/produkter-och-konstruktioner/golvisolering/krypgrund/krypgrundsbjalklag-av-tra/>
och <https://www.rockwool.com/se/produkter-och-konstruktioner/golvisolering/krypgrund/>

U-värde i W/m²K. A är isolertjocklek mellan golvbjälkarna, B obruten isolertjocklek under bjälkarna, båda i mm.

| Under bjälkarna | A145 | A170 | A195 | A220 | A265 | A290 | A315 |
|---|---|---|---|---|---|---|---|
| B 0 | 0,26 | 0,22 | 0,20 | 0,18 | 0,15 | 0,14 | 0,13 |
| B 20 | 0,22 | 0,20 | 0,18 | 0,16 | 0,14 | 0,13 | 0,12 |
| B 50 | 0,18 | 0,16 | 0,15 | 0,14 | 0,12 | 0,11 | 0,11 |

Källa: Rockwool, hämtad 2026-09-19. (Tabellen kortas till fyra kolumner i den publicerade texten, enligt stilguiden.)

- "Ångspärren monteras över hela golvet och förhindrar varm fuktig luft från det uppvärmda rummet att passera ner i
  golvkonstruktionen." Minst 200 mm överlapp och lufttäta skarvar.
- "Normalt erfordras inte vindskydd på isoleringens undersida." Används det bör det vara diffusionsöppen board eller
  motsvarande, främst för att förankra isoleringen.
- "Ett välisolerat golvbjälklag gör krypgrunden kallare och den relativa luftfuktigheten högre, särskilt under
  sommaren."
- Övriga råd: ventilationsöppningar på alla sidor, rensa grunden från allt organiskt material, skotta aldrig upp snö
  så att ventilationen hindras.

### Bygg & teknik 3/24, "… och svarar", Marcus Dahlin, 2024-05-20

<https://byggteknikforlaget.se/och-svarar-3-24/>

- Formel för energibesparing vid tilläggsisolering: **E = ΔU · A · Gt · 0,001**, där E är kWh per år, ΔU är
  U-värdets minskning i W/(m² °C), A är arean i m² och Gt är gradtimmar för aktiv uppvärmning i °C h per år.
- Gt: 100 000 gradtimmar som tumregel för de flesta byggnader på de flesta platser i Sverige, 80 000 som en något
  bättre uppskattning för ungefär södra halvan av landet, och betydligt mer i norr.
- Artikelns eget räkneexempel: fönsterbyte med ΔU cirka 2 W/(m² °C) och 15 m² fönsterarea ger 3 000 kWh per år.

### Vår egen räkning, byggd på de två källorna ovan

Bjälklag på 100 kvm över en uteluftsventilerad krypgrund, 145 mm mineralull mellan bjälkarna före åtgärden:

| Steg | U-värde, W/m²K | ΔU mot utgångsläget |
|---|---|---|
| 145 mm mellan bjälkarna | 0,26 | |
| plus 50 mm obrutet under bjälkarna | 0,18 | 0,08 |
| 315 mm mellan bjälkarna plus 50 mm under | 0,11 | 0,15 |

U-värdena är Rockwools, differensen och energitalen nedan är räknade av oss.

- 0,08 × 100 × 100 000 × 0,001 = **800 kWh per år**, alltså cirka 1 900 kr vid 2,40 kr per kWh
- 0,15 × 100 × 100 000 × 0,001 = **1 500 kWh per år**, alltså cirka 3 600 kr vid samma pris

Förbehåll som måste stå i texten: Gt är gradtimmar mot uteluft. En uteluftsventilerad krypgrund är varmare än
uteluften en vinterdag, så talen är den övre änden av spannet, inte ett löfte. Elpriset är 2,40 kr per kWh
(SCB, hushåll med 5 000 till 14 999 kWh per år, juli till december 2025, inklusive elhandel, nätavgift, energiskatt
och moms), samma tal som `src/lib/antaganden.ts` håller för hela sajten.

### Gör Det Själv (ettan), egna uppgifter vi refererar

- 220 mm mineralull mellan reglarna, 50 mm expanderad polystyren mot sockeln, 50 mm västkustskivor,
  22 mm golvspånskiva, 20 cm överlapp på plastfolien, cirka 1 cm luftspalt mot vägg
- 250 kr per kvm, 4 till 5 dagar för cirka 30 kvm

## 3. Det vi inte kunde hämta

- **Isover, "Isolera golv och golvbjälklag från krypgrunden"**
  (<https://www.isover.se/supporten-tipsar/isolera-golv-och-golvbjalklag-fran-krypgrunden>). Svarar 403 och visar
  botkontroll ("We're checking your browser before allowing access") även med vanlig webbläsarsträng. Isovers
  anvisning om isolertjocklek och ångspärr saknas därför i underlaget. Chefredaktören kan öppna den i webbläsare.
- **Paroc, "Tilläggsisolera golvbjälklaget krypgrunden"**
  (<https://www.paroc.com/sv-se/campaigns/add-insulation-to-floor>). Sidan levererar bara sidhuvud och meny utan
  brödtext vid hämtning. Ingen Paroc-uppgift används på sidan.
- **Boverket, "Fuktrisker med krypgrund"** och "Risker med fukt från uteluft i krypgrund". Adresserna som står som
  källa på `/fukt/avfuktare-krypgrund/` svarar nu 404, och sökträffarna pekar på två olika sökvägar
  (`risker/` respektive `risker-byggande/`). Den som svarade 2026-09-16 gör det inte längre. Sidan lutar sig därför
  mot Energiguiden och BBR 6:52 i stället, men **källförteckningen på `/fukt/avfuktare-krypgrund/` bör kontrolleras**.
- **RISE eller SP om krypgrund.** Ingen fritt läsbar RISE-rapport hittades på frasen. Fuktcentrums artikel
  "Fuktsäkrare krypgrund" (Bygg & Teknik 8/04,
  <https://www.fuktcentrum.lth.se/fileadmin/fuktcentrum/Publikationer/Bygg-Teknik/8_04_36.pdf>) laddades ner men
  gick inte att läsa som text. Den är värd att öppna för hand; den har sannolikt tal på markisoleringens tjocklek.
- **Volymen för "isolera krypgrund".** Frasen saknas i `docs/data/keyword-stats-2026-09-16.csv`. Talet 320 i
  underlaget är en uppskattning, ingen mätning.
