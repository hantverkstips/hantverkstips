# Spec: /rakna/fuktkvot/

UX och bygge, 2026-10-04. Räknaren byggs enligt skillen `nytt-verktyg` (sex steg) och räknarmallen `src/components/vyer/Raknarsida.astro` (`docs/SPEC-SIDMALLAR.md` 4.7.0, spec fas C avsnitt 2 och 9 till 14).

**Underlaget** `docs/briefer/faktablad/rakna-fuktkvot.md` är godkänt av UX och bygge 2026-10-04. Varje formel, gräns och konstant där har källa eller är märkt EGEN eller ANTAGANDE. Modellen är kontrollerad mot Wood Handbooks tabell 4-2 och TräGuidens tabell 2. Största avvikelsen är 0,55 procentenheter vid 75 %. Sökkraven står i `docs/briefer/seo-checklista-2026-10-04/raknare-fuktkvot.md`. SEO och GEO-agentens beslut 2026-10-04 står i avsnitt 6.

Ingen produkt och inget reklamband. Pelaren är `fukt`. All publik text är `TEXT SAKNAS` med nyckeln i en kommentar på raden, och nycklarna står i avsnitt 9.

## 1. Formelmodulen `src/lib/kalkyl/fuktkvot.ts`

Ren TypeScript utan Astro-importer, i samma form som `daggpunkt.ts`. Alla konstanter står namngivna överst med kommentaren `Källa:` (kod och sida i faktabladet) eller `ANTAGANDE:`.

**Lägen.** `type Lage = 'luft' | 'vikt' | 'halt'`, query-nyckel `lage`.

| Läge | Indata (query) | Ut |
|---|---|---|
| `luft` | `temp` (°C), `rf` (%) | jämviktsfuktkvoten, ekvation (4-5) i Wood Handbook 2021 (faktabladet 4.1) |
| `vikt` | `vat`, `torr` (g) | fuktkvot u = (våt − torr) / torr × 100 och fukthalt w = (våt − torr) / våt × 100 (2.1) |
| `halt` | `tal` (%), `vilket` (`fukthalt` eller `fuktkvot`) | det andra talet, u = w / (1 − w) och w = u / (1 + u) (3) |

**Standard:** `lage: 'luft'`, `temp: 20`, `rf: 65`, `vat: 1100`, `torr: 1000`, `tal: 18`, `vilket: 'fukthalt'`. Utan query visar sidan alltså 12,0.

**Gränser.**
- `temp`: −20 till 40. Under −1,1 räknas det men märks som extrapolation (`extrapolerad: true`), eftersom tabell 4-2 börjar vid −1,1 °C.
- `rf`: 5 till 100. Över 95 ger utfallet `fibermattnad` och inget exakt tal (4.2): svaret blir "över 24 %".
- `torr`: större än 0, högst 100 000.
- `vat`: minst `torr`, högst 1 000 000. Är `vat` mindre än `torr` blir det `ogiltig` med feltexten för förväxlade tal.
- `tal`: fukthalt 0 till 95, fuktkvot 0 till 300.

**Funktioner.**
- `jamviktsfuktkvot(tempC, rfProcent): number`: ekvation (4-5) med W, K, K1 och K2 för °C, ordagrant ur 4.1.
- `rfForFuktkvot(u, tempC): number`: bisektion på (4-5), för talen i Därför blev svaret så.
- `fuktkvotUrVikt`, `fukthaltUrVikt`, `kvotTillHalt`, `haltTillKvot`.
- `tolkaQuery(q)`: tål decimalkomma och fyller på med standard.
- `delbarQuery(indata)`.
- `formVarden(indata)`.
- `forvalFranAdress(forval)`: som daggpunkten, för `Kalkylator`.
- `raknaFuktkvot(indata): FuktkvotResultat`, med status `ok`, `ogiltig` (fel per fält) eller `fibermattnad`.

**Resultatet vid `ok`.**
- `fuktkvot` och `fukthalt`, med full precision. Avrundningen till en decimal görs i sidan.
- `extrapolerad` och `lage`.
- `bedomningar`: en post per användning, i ordningen ved, målning, inbyggnad, golv, mögel och röta, var och en `{ anvandning, utfall: 'ok' | 'varning', grans }`. Reglerna ur faktabladet 5:
  - ved: fukthalten 15–20 % är `ok` (NV). Under 10 och över 20 ger `varning`. Mellan 10 och 15 är också `ok`, eftersom NV bara varnar under 10.
  - målning: fuktkvot högst 16 (TG-FM).
  - inbyggnad: fuktkvot högst 18 (TG-FM, TG-S).
  - golv: fuktkvot 7,0–9,0 (TG-S tabell 3 och 4, målfuktkvot 8 för golvbräder inomhus, partiets spridning).
  - mögel: i läge `luft` RF under 75 (TG-M), i de andra lägena fuktkvot under 15 (TG-M tabell 2, ungefär 15 vid 75 % RF och 20 °C).
  - röta: under 20 är `ok` (TG-M). 20 och över ger `varning`, och över 30 sätts dessutom `rotaEtablerad: true` (TG-M).
- `rfForGranser`, bara i läge `luft`: RF vid samma temperatur som ger 16 och 18 procent fuktkvot.

**Förval** (`FORVAL`, nyckeln `rum` och `arstid` som i daggpunkten, beslutade med SEO 2026-10-04). RF är alltid källans övre gräns, alltså det fuktigaste normala läget. Temperaturen är ANTAGANDE.

| rum, arstid | °C | RF | Källa för RF |
|---|---|---|---|
| bostad, vinter | 20 | 25 | TG-TF, 10–25 % |
| bostad, sommar | 20 | 60 | TG-TF, 45–60 % |
| krypgrund | 15 | 75 | Olsson, SP (som daggpunktens `NORMALT_PER_RUM`) |
| kallare | 15 | 75 | Villaägarna (samma) |
| vind | 2 | 83 | LTH 79–88 (samma som daggpunktens förval) |
| ute, sommar | 15 | 75 | TG-TF, 65–75 % |
| ute, vinter | 0 | 95 | TG-TF, 90–95 % |

Garaget får inget förval, eftersom ingen källa ger RF där. Värdet `ute` finns bara i den här räknaren.

## 2. Testet `scripts/test-kalkyl-fuktkvot.mjs`

`node --experimental-strip-types --test`. Varje fall jämförs mot faktabladet, inte mot modulen själv.

1. Viktläget, tabell 2.4: alla fem raderna, u och w på en decimal.
2. Omräkningen, tabellerna i 3: alla nio raderna, på en decimal.
3. Modellen mot Wood Handbooks tabell 4-2, tabell 4.3: alla tio punkterna, med modellens tal avrundat till en decimal lika med tabellens.
4. Testfallen i 4.8: modellen på två decimaler, med tolerans 0,01.
5. `rfForFuktkvot` mot de omvända talen i 4.8, med tolerans 0,2 procentenheter RF.
6. Mot TräGuidens tabell 2 vid 20 °C (4.4): avvikelsen är högst 0,6 procentenheter i varje punkt.
7. Gränserna: `rf=96` ger `fibermattnad`, `temp=-5` ger `extrapolerad`, `vat` mindre än `torr` ger `ogiltig` med fel på `vat`, och `torr=0` ger `ogiltig`.
8. Bedömningarna vid 15,9, 16,0, 16,1, 17,9, 18,0, 19,9, 20,0 och 30,1 procent fuktkvot. För veden fukthalterna 9,9, 10, 15, 20 och 20,1.
9. `tolkaQuery` med decimalkomma, okänt läge (blir standard) och varje förval: rätt temperatur, RF och fuktkvot, en decimal.

## 3. Formuläret `src/components/kalkyl/FuktkvotForm.astro`

Props som de andra formulären: `indata`, `varden`, `fel`, `kompakt`, `idPrefix`, `knappText`. Klasser från `stil.ts`.

- **Lägena** står som en grupp radioknappar (`name="lage"`) överst, i knappform enligt de globala reglerna, med etiketterna `TEXT fuktkvot.lage.*`. Fälten för alla tre lägena renderas. Fält för ett läge som inte är valt ligger i ett `<fieldset>` med `disabled`, så att de inte skickas och läsaren ser vad som gäller. Utan JS byter läsaren läge med radioknappen och "Räkna ut".
- **Läge `luft`:** `temp` (°C) och `rf` (%), två i bredd från 640 px.
- **Läge `vikt`:** `vat` och `torr` (g), två i bredd, med hjälpraden om torrviktsmetoden (`TEXT fuktkvot.hjalp.vikt`).
- **Läge `halt`:** `tal` (%) och radioknapparna `vilket`.
- Felraderna kopplas med `aria-describedby`.
- `kompakt` visar bara det valda lägets fält och lägesknapparna.

## 4. Sidan `src/pages/rakna/fuktkvot.astro`

`prerender = false`, `Astro.locals.sidtyp = 'verktyg'`, cache-header som de andra. `SLUG`, `VERKTYGSNAMN`, `BESKRIVNING` och `titel` överst, alla `TEXT SAKNAS`. Sidan bygger på `<Raknarsida>` med `delaUrl` och `saRaknarId="sa-raknar-vi"`.

- **ingress:** `TEXT fuktkvot.ingress`.
- **forval:** visas bara i läge `luft`. Etiketten är `TEXT fuktkvot.forval.etikett` och chipsen `TEXT fuktkvot.forval.[rum]-[arstid]`. Länkarna går till `?lage=luft&rum=…&arstid=…#raknaren` med `aria-current`.
- **svar:**
  - Varningsraden vid `ogiltig` är gränssnittets standardmening.
  - `Svarstal` visar fuktkvoten med en decimal och enheten "%". `vad` är `TEXT fuktkvot.svar.vad.[lage]`.
  - I läge `vikt` och `halt` står fukthalten (eller fuktkvoten) som en rad under talet: `TEXT fuktkvot.svar.andra` med `{tal}`.
  - Vid `fibermattnad` står "över 24" som tal och `TEXT fuktkvot.besked.fibermattnad`.
  - Vid `extrapolerad` följer en rad `TEXT fuktkvot.besked.extrapolerad`.
  - Därefter `Matare` mot 20 (röta) med etiketten `TEXT fuktkvot.matare.etikett`.
  - Sist bedömningslistan, en rad per användning: etiketten `TEXT fuktkvot.anv.[anvandning]`, gränsen (`grans`, satt av koden: "högst 16 %", "7–9 %", "fukthalt 15–20 %"), och en ikon med texten `TEXT fuktkvot.utfall.ok` eller `.varning` (`check` i `ok`, `varning` i `varning`). Klassen `.bedomningar`: rader med 1 px `linje` mellan sig, 15 px, och etiketten i fetstil.
  - Klartextmeningen per läge: `TEXT fuktkvot.klartext.luft` med `{fuktkvot}`, `{temp}`, `{rf}`; `.vikt` med `{fuktkvot}`, `{fukthalt}`, `{vat}`, `{torr}`; `.halt` med `{tal}`, `{vilket}`, `{annat}`. Ordet "ungefär" och källan skriver hantverkaren.
- **rad:** inga råd i första versionen. Slotten utgår.
- **darfor:** H2 `TEXT fuktkvot.darfor.rubrik` och stycket `TEXT fuktkvot.darfor.text`, med platshållarna `{rf16}` och `{rf18}` i läge `luft` (`rfForGranser`) och källraden under.
- **gorInte:** `TEXT fuktkvot.gorinte`.
- **saRaknarJag:** skissen `<Illustration namn="rakna/fuktkvot" alt={TEXT fuktkvot.skiss.alt} bildtext={TEXT fuktkvot.skiss.bildtext}>` i pappersrutan, och stegen i ord `TEXT fuktkvot.steg.1` till `.4` (formeln för vikten, omräkningen, ekvationen i Wood Handbook, gränserna). Formeln u = (m_våt − m_torr) / m_torr × 100 står utskriven, eftersom sidofrasen "fuktkvot formel" kräver det.
- **efter**, i ordning:
  1. H3 `TEXT fuktkvot.antaganden.rubrik` och antagandetabellen i `Tabellyta kolumner={3}`, en rad per konstant och gräns, märkt Källa eller Antagande, med källans titel och adress ur faktabladet 1 (titlarna är källornas egna). Kolumnrubrikerna står som `TEXT SAKNAS`.
  2. H2 `TEXT fuktkvot.tabell.rubrik` och tabellen vid 20 °C med raderna 30, 40, 50, 60, 65, 70, 75, 80, 85, 90 och 95 % RF. Kolumnerna är RF (%), "Wood Handbook" (modellen, en decimal) och "TräGuiden" (TG-M tabell 2 och TG-S, ordagrant ur faktabladet 4.8, tom cell där TräGuiden saknar tal). Kolumnrubrikerna är `TEXT SAKNAS`. Under tabellen står källraden `TEXT fuktkvot.tabell.kalla`.
  3. Läs vidare som kort: `/fukt/fuktkvot/` (när den är publicerad), `/fuktmatare/` (när den är publicerad), `/rakna/daggpunkt/` och `/fukt/hussvamp/`.
  4. `<Faq fragor={FRAGOR}>` med `FRAGOR = []` tills hantverkaren skrivit frågorna. En tom lista renderar ingenting.
- **Strukturerad data:** `verktyg()` som de andra. `og:image` är `verktygsDelningsbild('fuktkvot')`.

## 5. Registret, inbäddningen och korten

- `src/lib/kalkyl/register.ts`: `{ slug: 'fuktkvot', namn: TEXT, rad: TEXT, svar: TEXT, sasong: [9, 10], pelare: ['fukt'] }`. Utan `plats`, alltså Hela huset på hubben.
- `src/lib/kalkyl/grupper.ts`: lägg `fuktkvot` i gruppen `fukt`. Gruppen får då fem räknare och visas som kompakt lista enligt regeln. Det är rätt.
- `src/lib/kalkyl/korttal.ts`: `fuktkvot` får talet vid standard, "12,0 %", och villkoret `TEXT korttal.fuktkvot`.
- `src/components/ui/Kalkylator.astro`: `fuktkvot` läggs i `MED_FORMULAR`, och `forval` tillåts för `fuktkvot` (som daggpunkten), till exempel `forval="lage=vikt"` eller `forval="rum=krypgrund"`.
- `scripts/kontrollera-innehall.ts`: inget nytt. Inlänkskontrollen varnar tills `/fukt/fuktkvot/` och de andra sidorna länkar, och det är väntat.

## 6. Beslut med SEO och GEO-agenten, 2026-10-04

1. Svaret visas med en decimal, beskedet säger "ungefär", och tabellen vid 20 °C ställer modellen och TräGuiden sida vid sida, med raderna 65, 75, 85 och 95 % och rubrikrad med enhet.
2. Ute vinter räknas med modellen vid 0 °C och 95 % (24,3). Beskedet jämför med TräGuidens tabell 2, där 95 % ger 24. TräGuidens årstidsintervall 19–23 % står inte i svaret, bara i brödtexten om hantverkaren vill, och då med båda talen och källan.
3. Förvalen i avsnitt 1, med `ute` som nytt värde bara här, och utan garage.

## 7. Bilderna

Ritas parallellt av en egen arbetare, enligt `docs/DESIGN.md` avsnitt 7 och skillen `nytt-verktyg`, Bilderna.

- **Skissen** `src/assets/illustrationer-kallor/rakna/fuktkvot.svg`, 600 × 360, blyerts på linjerat papper.
  - Motivet: ett rum i snitt med en stående bräda (ändträet med några årsringar synligt överst) och en hygrometer på väggen bredvid. Två pilar i `penna` visar fukten mellan luften och träet, en in och en ut. Det är det enda som pekar.
  - Etiketterna, i Caveat 24 px:
    - `TEXT SAKNAS` (`skiss.fuktkvot.luft`) vid hygrometern, för luftens temperatur och RF (20 °C, 65 %)
    - `TEXT SAKNAS` (`skiss.fuktkvot.tra`) vid brädan
    - nyckeltalet `TEXT SAKNAS` (`skiss.fuktkvot.tal`, talet 12 % fuktkvot), med gul markering
  - Inga människor, inga verktyg i drift.
  - Den publicerade filen ska vara under 40 kB.
- **Varumärkesbilden** `src/assets/illustrationer/rakna/varumarke/fuktkvot.svg`, 600 × 360, i logotypens stil.
  - Motivet: en vedkubbe som ligger ned, med ändträet och årsringarna vänt mot läsaren, och en droppe ovanför.
  - Konturer i `blyerts` 2 px, `tumstock` som enda fyllning (droppen eller ändträet), ett pennstreck under. Ingen text.
  - Motivets bbox ska ha kvoten 1,72 ± 0,05 och fylla 90–94 procent av bredden. Det ska gå att känna igen på 343 px.
- **Delningsbilden** `public/og/rakna-fuktkvot.png` byggs av `npm run delningsbilder` när namnet i registret är skrivet. Rita den inte för hand.

## 8. Kontroller

1. Testet ska vara grönt, och alla andra räknartester också. `npx astro check --minimumSeverity error` ska ge 0 fel. `npm run kontrollera` får bara ge TEXT SAKNAS-fel och inlänksvarningen för fuktkvot.
2. Mät sidan i dev med standardvärden och med `?lage=vikt`, `?lage=halt`, `?rum=ute&arstid=vinter`, `?rf=97` och `?vat=900&torr=1000`. Den ska ligga under 66 kB. Kontrollera att inga script-taggar finns utöver JSON-LD.
3. Ta skärmdumpar på 375 och 1280 av adresserna ovan i `scratchpad\fuktkvot\`. Kontrollera `scrollWidth`, och tabba igenom formuläret.
4. Bädda in formuläret tillfälligt i en artikel i dev för att se att det kompakta formuläret fungerar. Ta sedan bort det igen.
5. Bygg inte, committa inte.

## 9. Nycklar

Alla står i textlistan `docs/briefer/texter-fuktkvot-2026-10-04.md`, som utvecklaren fyller i med fil och rad när koden är skriven.

## 10. Granskning 2026-10-04, en rättelse

Vedens bedömning: vid standardvärdena (12,0 % fuktkvot, alltså 10,7 % fukthalt) visar svaret "Ved, fukthalt 15 till 20 %, Inom gränsen". Det säger emot den gräns som står på samma rad. Regeln i avsnitt 1 var fel skriven. Den rättas så här: veden är `ok` bara när fukthalten ligger mellan 15 och 20 % (Naturvårdsverkets "lagom torr"). Under 15 och över 20 är det `varning`. Testfall 8 ändras i samma ändring: fukthalterna 9,9, 10 och 20,1 ger `varning`, 15 och 20 ger `ok`. Resten av räknaren är godkänd.
