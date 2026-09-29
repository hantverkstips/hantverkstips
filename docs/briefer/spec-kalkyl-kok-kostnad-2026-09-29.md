# Spec: räknaren /rakna/kok-kostnad/

UX och bygge-agenten, 2026-09-29. Gäller steg 1 till 4 i skillen nytt-verktyg, förberedelsen av steg 6 (`MED_FORMULAR`) och vad bilderna ska visa. Registret, inbäddningen i artiklarna och bilderna görs i publiceringsomgången (avsnitt 8). Underlaget är `docs/briefer/faktablad/rakna-kok-kostnad.md` (här "underlaget"). Kraven kommer från `docs/briefer/seo-checklista-2026-09-29/raknare.md`, regel 1 till 4 överst, avsnittet /rakna/kok-kostnad/ med besluten 2026-09-29 och tillägget för startlista 4 (här "checklistan"). Förebilden i koden är badrumsräknaren: `src/lib/kalkyl/renovering.ts`, `src/pages/rakna/badrum-kostnad.astro`, `src/components/kalkyl/BadrumKostnadForm.astro` och `scripts/test-kalkyl-badrum-kostnad.mjs`, med specen `docs/briefer/spec-kalkyl-badrum-kostnad-2026-09-29.md`.

Står något inte här gäller badrumsspecen, och därefter `docs/SPEC-SIDMALLAR.md` 4.7.

**Inga produkter och inget reklamband** (checklistan 1 och 12). `reklam={false}`.

**Utkast.** `UTKAST = true`. Sidan svarar 404 i produktion och noindex i dev tills hantverkarens text finns och koordinatorn publicerar. Den står inte i registret förrän då.

---

## 0. Godkännande av underlaget

Underlaget är **godkänt med SEO-besluten 2026-09-29** och besluten K1 till K9 nedan. Varje post har **en** källa, den som talet kommer från. En post utan källa tas inte med.

### K1. Fyra vägar

Läsaren väljer en väg (radio `vag`):

| Värde | Vad | Poster |
|---|---|---|
| `luckor` | nya luckor på befintlig stomme | luckor, gångjärn |
| `bankskiva` | ny bänkskiva | bänkskiva |
| `luckor-bankskiva` | båda | luckor, gångjärn, bänkskiva |
| `nytt` | nytt kök, enkel nivå | rivning, stommar och luckor, bänkskiva, vitvaror, och el och VVS vid ändrad planlösning |

`luckor-bankskiva` är med eftersom värdartikelns Faq frågar efter just det och källornas totalspann för "luckor och bänkskiva" skiljer en faktor fyra. Räknaren summerar posterna i stället.

### K2. Luckor (väg luckor och luckor-bankskiva)

- **Pris per lucka:** Vedum, luckprislista 2026, lucka 696 × 596 mm, inklusive moms. `enkel` prisgrupp 1, 390 kr. `mellan` prisgrupp 5, 1 444 kr. `hog` prisgrupp 10, 3 673 kr. Vedum och inte Ikea, eftersom värdartikelns räkneexempel är Vedum och testet läser artikeln som facit. Ikea står bara som källa för stommarna (K5).
- **Gångjärn:** 169 kr styck (Vedum, Grass), två per lucka (Ikea: "Komplettera med 2 gångjärn"). Radio `gangjarn`: `nya` (standard) eller `behall`. Radio och inte kryssruta, eftersom en kryssruta som är ikryssad från början inte går att skilja från en tom adress.
- **Montering:** Totalbyggarna, fast pris 7 500 kr före rotavdraget (350 kr/h efter avdraget, 15 debiterbara timmar, omräknat med `ROT_PROCENT`). **ANTAGANDE:** det fasta priset gäller upp till 20 luckor, och över 20 luckor växer det i proportion, `Math.round(7 500 · antal / 20)`. 20 är Hantverkskollens "15–20 luckor" för ett vanligt kök. Under 20 luckor står det fasta priset kvar, så räknaren lovar inte för lite.
- Handtag, lådfronter och frakt saknar pris och tas inte med. Resultatet säger det (regeln `tillkommer`).

### K3. Bänkskiva (väg bankskiva, luckor-bankskiva och nytt)

- **Material per löpmeter:** Kitchens.se (maj 2026), 60 till 63 cm djup. `laminat` 500 till 1 500, `tra` (massivt trä) 1 200 till 3 500, `komposit` (kvartskomposit) 2 000 till 5 000 kr. Tre material, samma tre som `/kok/byta-bankskiva/` jämför (kok-4.md, krav på underlaget).
- **Montering per löpmeter:** Totalbyggarna, 500 till 2 000 kr (2026-03-30). Egen post i väg `bankskiva` och `luckor-bankskiva`.
- I väg `nytt` ingår monteringen av bänkskivan i monteringen av köket (underlagets formel för väg C), och cellen visar `postIngar`. **ANTAGANDE**, i antagandetabellen.
- **Samma tal på `/kok/byta-bankskiva/`** (checklistans tillägg 4). Testet läser artikeln när den finns och kräver att de tre materialspannen och monteringsspannet står där som "A till B". Ändras ett tal ändras räknaren och artikeln i samma commit.
- Hantverkskollen (inklusive montering) och Totalbyggarna (per kvadratmeter) används inte. En källa per post.

### K4. Spann

Alla poster med ett spann hos källan räknas i två kanter, en nedre med alla nedre tal och en övre med alla övre. Resultatet skrivs "A till B" med hårda mellanslag inne i talen (`krText`, `spannText`, `spannDelar` ur badrummet, som återanvänds). Ingen post får ett medelvärde. Väg `luckor` har inga spann och ger ett tal.

### K5. Nytt kök, bara enkel nivå

- **Stommar och luckor per meter:** Ikea Metod, egen räkning ur Ikeas priser 2026-09-28: bänkskåp 60 × 60 × 80 599 kr, väggskåp 60 × 37 × 80 509 kr, två Veddinge 60 × 80 à 439 kr och två Utrusta-par à 159 kr, 2 304 kr per 60 cm, alltså **3 840 kr per meter**. Källa Ikea. **ANTAGANDE:** ett bänkskåp och ett väggskåp med två luckor per 60 cm, och väggskåpen är lika långa som bänkskåpen. Ben, sockel, täcksidor, lådor, skena och handtag ingår inte.
- **Montering av köket:** Totalbyggarna, IKEA kök pris (uppdaterad 2026-06-29): 15 000 till 40 000 kr före rot, hela spannet från litet till stort kök. **ANTAGANDE:** hela spannet används, eftersom källan anger köksstorleken utan mått. Att gissa var "litet" slutar i meter vore ett tal utan källa. Underlagets räkneexempel 4 räknar med "mellan", 20 000 till 30 000; det exemplet ändras därför för arbetet, se testet.
- **Vitvaror:** Totalbyggarna, budgetpaket 15 000 till 25 000 kr. Installationen av vitvarorna tas inte med (källorna delar inte upp den så att den går att räkna per kök) och resultatet säger det. Cellen för arbete visar `postInget`.
- **Rivning:** Hantverkskollen (komplett guide, 2026-07-17), 8 000 till 18 000 kr, bara arbete. Rivningen går att välja som egen insats.
- **Nivån ignoreras** i väg `nytt`. Stommar i mellan- och högnivå, container, folie och Ikeas montering 3 399 kr står inte med (SEO-beslutet). Regeln `nytt-enkel` säger att dyrare stommar ligger över räknarens gräns och att källor saknas, och den visas alltid i väg `nytt`.
- **Köksmeter** och bänkskivans längd är samma fält (`meter`). ANTAGANDE, i antagandetabellen.

### K6. El och VVS vid ändrad planlösning (väg nytt)

Kryssrutor `flytt`:
- `el`: ny elgrupp, Hantverkskollen (nytt kök, 2026-07-17), 5 000 till 15 000 kr.
- `diskbank`: flytt av diskbänk, samma källa, 5 000 till 20 000 kr.

**ANTAGANDE:** båda är bara arbete (Offerta räknar elektriker och rörmokare som arbetskostnad; underlaget 3h). Valen gäller bara väg `nytt`. I andra vägar ignoreras de, och hjälpraden under dem säger det.

### K7. Egen insats

Kryssrutor `egen`:
- `montering`: luckornas montering i väg `luckor` och `luckor-bankskiva`, bänkskivans montering i väg `bankskiva` och `luckor-bankskiva`, och köksmonteringen i väg `nytt`. Arbetet blir 0 kr.
- `rivning`: bara i väg `nytt`. Arbetet för rivningen blir 0 kr.

El och VVS kan aldrig väljas. Hjälpraden under valen säger det och står också i kompakt form. Elen: Elsäkerhetsverket, fast installation görs av ett registrerat elinstallationsföretag. Att det gäller hällens och spisens anslutning är vår slutsats och märks så (checklistan H2 2). Vattnet: Säker Vatten 2026:1 är branschregler och förbjuder ingen privatperson något; bara ett auktoriserat VVS-företag kan utfärda intyg.

### K8. Rotavdraget

Genom `raknaRotavdrag()` i `rotavdrag.ts`, som i badrummet (badrumsspecen B7), per kant: `arbetskostnadKr` summan av arbetet, `materialkostnadKr` summan av materialet, `antalAgare`, `utnyttjatRotKr`, rut 0, skatt null. Ingen rotkonstant kopieras. `utfall` blir `tak` när den övre kanten begränsas.

### K9. Inget "utanför"

Alla poster har ett pris per styck, per meter eller för hela köket, så ingen längd inom fältets gränser ligger utanför källorna. Utfallen är `belopp` och `tak`.

### K10. Rotavdraget per post: säkert för luckorna, ett villkor för bänkskivan (tillagt 2026-09-29, rättat samma dag)

**Källan.** Skatteverket, Ger arbetet rätt till rotavdrag (`faktablad/rakna-kok-kostnad.md` rad 22–23):
- "byta och reparera köksluckor …" ger avdrag utan villkor.
- "montera fast köks- och badrumsinredning … i samband med omfattande byggarbete eller renovering" ger avdrag bara under villkoret.

Bänkskivan nämns inte för sig. Den första versionen av K10 lade villkoret också på luckorna, och det var fel: luckbytet ger avdrag. Kraven kommer från SEO:s kontroll i `seo-checklista-2026-09-29/kok-4.md` (räknaren punkt 1) och tillägg 2 i `raknare.md`.

**Beslut för luckor-bankskiva: arbetet delas.** Modellen har arbetet per post, så delningen kostar en summering och ingen ny källa. Luckornas montering får avdraget i svaret. Bänkskivans montering får villkoret. Alternativet, att räkna avdrag på allt och låta en rad säga att skivans del är osäker, ger ett svar som lovar ett avdrag Skatteverket inte nämner. Det är samma fel som SEO stoppade. Med delningen säger räknaren samma sak som `/kok/byta-koksluckor/` och `/kok/byta-bankskiva/` på varje väg.

**Vilket arbete som är villkorat.** `arbeteVillkorKr` är bänkskivans montering i vägarna `bankskiva` och `luckor-bankskiva`. Allt annat arbete är säkert (`arbeteSakertKr`): luckornas montering, och i väg `nytt` allt arbete som förut. Skillnaden i `nytt` är att bänkskivans montering ingår i köksmonteringen, som räknas som en omfattande renovering.

**Per kant i `KokSiffror`:**
- `arbeteKr`, `materialKr` och `foreRotKr` som förut.
- `arbeteSakertKr` och `arbeteVillkorKr`, där summan är `arbeteKr`.
- `rotKr`, `raktRotKr`, `kapatKr`, `attBetalaKr` och `begransad`: svaret. `raknaRotavdrag` med `arbetskostnadKr = arbeteSakertKr` och `materialkostnadKr = foreRotKr − arbeteSakertKr`, alltså allt som inte ger avdrag.
- `villkor: { rotKr, kapatKr, attBetalaKr } | null`: vad det blir om också det villkorade arbetet ger avdrag. `raknaRotavdrag` med allt arbete, som i dag. `null` när `arbeteVillkorKr` är 0.

**`rotLage` i `KokOk`** ersätter `rotVillkor`. Värdet sätts ur den övre kanten:
- `'villkor'` när arbeteVillkor > 0 och arbeteSakert = 0. Det gäller bänkskivan och luckor-bankskiva med egen montering av luckorna, vilket inte kan väljas separat men hålls generellt.
- `'delat'` när båda är > 0 (luckor-bankskiva).
- `'saker'` annars: luckor, nytt och alla nollfall.

`utfall` följer svarets rot (`hog.begransad`).

**`KokBeskedVarden` får tre fält:**
- `arbeteSakert`
- `arbeteVillkor`
- `villkorRot` och `villkorAttBetala`: spannText av `villkor`, tom sträng när `villkor` är null.

`rot` och `attBetala` är svarets. Hantverkarens befintliga villkorstexter (`spalt['rad-villkor']` och `darfor['rot-villkor']`) byter `v.rot` till `v.villkorRot` och `v.attBetala` till `v.villkorAttBetala`. Orden ändras inte. Det är ett namnbyte, eftersom betydelsen var "om avdraget gäller".

**Sidan och reglerna per läge:**

| | `saker` | `villkor` (bänkskiva) | `delat` (luckor-bankskiva) |
|---|---|---|---|
| Besked | `besked[utfall]` | `beskedVillkor` | `besked[utfall]` |
| Etikett | `etikett-betala` | `etikett-villkor` | `etikett-betala` |
| Stora talet | attBetala | foreRot | attBetala |
| Spalten | rad-summa + rad-delning | rad-delning | rad-summa + rad-delning |
| Rad efter pekraden | ingen | `rad-villkor` | `rad-villkor-delat` (ny) |
| Under posttabellen | `rot`, `betala` | `darfor['rot-villkor']` | `darfor['rot-delat']` (ny), `betala` |
| Regel om rot | `rot-arbete` | `rot-villkor` | `rot-delat` (ny) och `rot-villkor` |
| Gör inte | `rot-pa-allt` | `gorInte['rot-villkor']` | `rot-pa-allt` |

Regeln `rot-delat` har källorna SKV-RATT och SKV-ROT. `rot-tak` står när svarets arbete eller det villkorade arbetet är över 0. `rot-slog-i` står vid tak. Länken till rotavdragsräknaren står när arbeteKr > 0 och får `kokRotavdragQuery`, som i dag, med all arbetskostnad.

**Nya texter, TEXT SAKNAS tills hantverkaren skrivit dem** (textlistan avsnitt 12, tillägget):
- `spalt['rad-villkor-delat'](v)`
- `darfor['rot-delat'](v)`
- `regel['rot-delat'].text(v)`

**Facit i testet.** Talen är räknade med formlerna ovan och ur underlaget:

| Fall | Svaret | Villkoret |
|---|---|---|
| K1, luckor | attBetala 16 898, rot 2 250, som förut | null |
| K5, bänkskiva 4 m laminat | rot 0, attBetala = foreRot 4 000 till 14 000 | rot 600 till 2 400, attBetala 3 400 till 11 600 (underlaget ex 3) |
| K6, bänkskiva 3,5 m komposit | rot 0, attBetala = foreRot | attBetala 8 225 till 22 400 |
| K7, luckor-bankskiva | rot 2 250 på luckornas 7 500, attBetala = foreRot − 2 250 | attBetala 20 298 till 28 498 |
| K9 till K12, nytt kök | som förut | null |

`kokKortsvarVarden().bankskiva4.attBetala` blir foreRot. Kortsvaret läser redan `foreRot` för bänkskivan.

Nollfallen: med egen montering är arbetet 0, `rotLage` blir `saker` och sidan visas som förut.

---

## 1. Filer

| Fil | Gör |
|---|---|
| `src/lib/kalkyl/renovering.ts` | utökas med köket (avsnitt 2). Badrummets exporter och tal rörs inte |
| `scripts/test-kalkyl-kok-kostnad.mjs` | skapas (avsnitt 6) |
| `src/components/kalkyl/KokKostnadForm.astro` | skapas (avsnitt 3) |
| `src/pages/rakna/kok-kostnad.astro` | skapas (avsnitt 4) |
| `src/components/ui/Kalkylator.astro` | `kok-kostnad` i `MED_FORMULAR` och en rad som renderar formuläret kompakt. Används först när registerposten finns |
| `docs/briefer/texter-kok-kostnad-2026-09-29.md` | textlistan till hantverkaren |
| `src/lib/kalkyl/elkostnad.ts`, `src/components/kalkyl/ElkostnadForm.astro`, `src/pages/rakna/elkostnad.astro`, `scripts/test-kalkyl-elkostnad.mjs` | förvalet för golvvärme och avfuktare (9b) |

**Rörs inte:** `register.ts`, allt under `src/content/`, `rotavdrag.ts`, `stil.ts`, `verktygsbild.ts`, `strukturdata.ts`, `kallrad.ts`, `Bas.astro`, `global.css`, `scripts/budget-html.mjs`, `scripts/kontrollera-innehall.ts`, badrumssidan och dess formulär och test.

---

## 2. Formelmodulen

Köket läggs i `renovering.ts` efter badrummet, under en egen rubrik, med prefixet `Kok`/`KOK_` på allt som annars skulle krocka. Delat med badrummet: `KALLOR` (kök-koderna läggs till), `KallaRef`, `krText`, `kvmText`, `spannText`, `spannDelar`, `datumText`, importen från `rotavdrag.ts`.

### 2.1 Källkoder (läggs till i `KallaRef['kod']` och `KALLOR`)

| Kod | Titel | Adress | Slag | Datum |
|---|---|---|---|---|
| `VED` | Vedum, luckprislista 2026 | vedum.se/globalassets/dokument/kok/luckprislista/luckprislista_2026.pdf | tillverkare | läst 2026-09-28 |
| `IKEA` | Ikea, Metod bänkskåp och väggskåp, Veddinge och Utrusta | ikea.com/se/sv/cat/luckor-23613/ | tillverkare | läst 2026-09-28 |
| `KIT` | Kitchens.se, vad kostar en bänkskiva | kitchens.se/inspiration/vad-kostar-en-bankskiva-prisguide-sten-komposit-keramik/ | firma | maj 2026 |
| `TB-LUCKOR` | Totalbyggarna, byta köksluckor på befintlig stomme | totalbyggarna.se/smatjanster/byta-koksluckor-befintlig-stomme-pris/ | firma | läst 2026-09-28 |
| `TB-BANK` | Totalbyggarna, bänkskiva i köket | totalbyggarna.se/blogg/kok-bankskiva/ | firma | 2026-03-30 |
| `TB-IKEA` | Totalbyggarna, vad kostar ett IKEA-kök | totalbyggarna.se/blogg/ikea-kok-pris/ | firma | uppdaterad 2026-06-29 |
| `HK-LUCKOR` | Hantverkskollen, byta köksluckor i stället för hela köket | hantverkskollen.se/artiklar/snickare/snickare-koksluckor-byta-kostnad-vad-kostar-det-att-luckor-istallet-for-hela-koket | förmedlare | uppdaterad 2026-07-17 |
| `HK-KOK` | Hantverkskollen, komplett guide till köksrenovering 2026 | hantverkskollen.se/artiklar/snickare/snickare-komplett-guide-koksrenovering-kostnad-priser-tips-och-rad-2026 | förmedlare | uppdaterad 2026-07-17 |
| `HK-NYTT` | Hantverkskollen, nytt kök från grunden | hantverkskollen.se/artiklar/snickare/snickare-nytt-kok-kostnad-vad-kostar-ett-helt-fran-grunden | förmedlare | uppdaterad 2026-07-17 |
| `ELSAK-SJALV` | Elsäkerhetsverket, vad får jag göra själv med el | elsakerhetsverket.se/privatpersoner/detta-far-du-gora-sjalv-med-el/vad-far-jag-gora-sjalv-med-el/ | myndighet | granskad 2025-07-30 |

Tillagt 2026-09-29 efter hantverkarens not: `IF`, If, Villaförsäkring, försäkringsvillkor december 2025, s. 8 och 14, if.se/globalassets/se/dokument/privat/villaforsakring-villkor.pdf, slag `försäkringsbolag` (nytt värde), december 2025. Källan till brödtextens stycke om Säker Vatten (faktabladet `guider-byta-toalettstol.md` punkt 5). Sidan lägger `ELSAK-SJALV`, `SV` och `IF` sist i källistan under antagandetabellen (`BRODTEXT_KALLOR`), eftersom brödtexten citerar dem oavsett väg.

Alla med `https://www.` eller `https://` som i underlaget. `slag` får värdet `tillverkare` tillagt. `SV`, `SKV-ROT` och `SKV-RATT` återanvänds. Totalbyggarna, TB och SF är samma firma; de räknas aldrig som flera källor i en text.

### 2.2 Typer

```ts
export type KokVag = 'luckor' | 'bankskiva' | 'luckor-bankskiva' | 'nytt';
export type KokNiva = 'enkel' | 'mellan' | 'hog';
export type KokMaterial = 'laminat' | 'tra' | 'komposit';
export type KokGangjarn = 'nya' | 'behall';
export type KokFlytt = 'el' | 'diskbank';
export type KokEgen = 'montering' | 'rivning';
export interface KokIndata {
  vag: KokVag; antalLuckor: number; niva: KokNiva; gangjarn: KokGangjarn;
  meter: number; material: KokMaterial; flytt: KokFlytt[]; egen: KokEgen[];
  agare: number; rotKr: number;
}
export type KokFelNyckel = 'luckor' | 'meter' | 'agare' | 'rot';
export type KokPostNyckel = 'luckor' | 'gangjarn' | 'bankskiva' | 'rivning' | 'stommar' | 'vitvaror' | 'el' | 'vvs';
export interface KokPostRad {
  nyckel: KokPostNyckel; arbeteKr: number; materialKr: number;
  /** belopp: talet. egen: läsaren gör det. ingar: arbetet ingår i en annan post. inget: arbetet räknas inte. */
  arbete: 'belopp' | 'egen' | 'ingar' | 'inget';
}
export type KokUtfall = 'belopp' | 'tak';
export type KokGorInte = 'rot-pa-allt' | 'verkstad-rot' | 'el-sjalv' | 'vvs-intyg' | 'riva-sjalv';
export type KokRegelNyckel =
  | 'luckor-pris' | 'luckor-montering' | 'gangjarn' | 'bankskiva' | 'nytt-enkel' | 'flytt'
  | 'spann' | 'tillkommer' | 'rot-arbete' | 'rot-tak' | 'rot-slog-i' | 'egen-insats';
```

`KokSiffror` och `KokResultat` som `BadrumSiffror` och `BadrumResultat`: översta nivån är den nedre kanten, `hog` den övre, `spann` sant när totalerna skiljer. Fälten `poster`, `arbeteKr`, `materialKr`, `foreRotKr`, `rotKr`, `raktRotKr`, `kapatKr`, `attBetalaKr`, `andelArbeteProcent`, `begransad`. Ingen container och inget per kvm.

### 2.3 Konstanter

| Namn | Värde | Märkning |
|---|---|---|
| `KOK_LUCKA_KR` | `{ enkel: 390, mellan: 1444, hog: 3673 }` | Källa VED |
| `KOK_GANGJARN_KR` | `169` | Källa VED |
| `KOK_GANGJARN_PER_LUCKA` | `2` | Källa IKEA |
| `KOK_LUCKOR_MONTERING_KR` | `7500` | Källa TB-LUCKOR, omräknat |
| `KOK_LUCKOR_FAST_MAX` | `20` | ANTAGANDE, grund HK-LUCKOR |
| `KOK_BANKSKIVA_KR_PER_LM` | laminat [500, 1500], tra [1200, 3500], komposit [2000, 5000] | Källa KIT |
| `KOK_BANKSKIVA_MONTERING_KR_PER_LM` | `[500, 2000]` | Källa TB-BANK |
| `KOK_IKEA_MODUL_KR` | 599 + 509 + 2 · 439 + 2 · 159 = 2 304 | Källa IKEA, delarna som egna konstanter |
| `KOK_STOMMAR_KR_PER_M` | `Math.round(2 304 · 100 / 60)` = 3 840 | egen räkning |
| `KOK_MONTERING_KR` | `[15000, 40000]` | Källa TB-IKEA; hela spannet ANTAGANDE |
| `KOK_VITVAROR_KR` | `[15000, 25000]` | Källa TB-IKEA |
| `KOK_RIVNING_KR` | `[8000, 18000]` | Källa HK-KOK |
| `KOK_EL_KR` | `[5000, 15000]` | Källa HK-NYTT |
| `KOK_VVS_KR` | `[5000, 20000]` | Källa HK-NYTT |
| `KOK_PRISER_HAMTADE` | `'2026-09-28'` | |

`KOK_VAG_VAL`, `KOK_NIVA_VAL`, `KOK_MATERIAL_VAL`, `KOK_GANGJARN_VAL`, `KOK_FLYTT_VAL = ['el', 'diskbank']`, `KOK_EGEN_VAL = ['montering', 'rivning']`.

### 2.4 Standard och gränser

```ts
export const KOK_STANDARD: KokIndata = {
  vag: 'luckor', antalLuckor: 16, niva: 'enkel', gangjarn: 'nya', meter: 4,
  material: 'laminat', flytt: [], egen: [], agare: 1, rotKr: 0,
};
export const KOK_GRANSER = {
  antalLuckor: [1, 60],   // ANTAGANDE, fältets rimlighet (underlaget 6)
  meter: [0.5, 15],       // ANTAGANDE, bänkskiva 0,5 till 15 lm (underlaget 6)
  rotKr: [0, ROT_TAK_KR], // per ägare
} as const;
```

16 luckor är värdartikelns kök och underlagets exempel 1, 4 meter underlagets exempel 3. Standard ger 19 148 kr före rot, 2 250 kr i rot och **16 898 kr** att betala, samma tal som artikeln.

### 2.5 `tolkaKokQuery(q)`

| Nyckel | Fält | Värden | Saknas | Tomt | Okänt |
|---|---|---|---|---|---|
| `vag` | vag | K1 | standard | standard | standard |
| `luckor` | antalLuckor | tal, "st" tas bort | standard | NaN | NaN |
| `niva` | niva | enkel, mellan, hog | standard | standard | standard |
| `gangjarn` | gangjarn | nya, behall | standard | standard | standard |
| `meter` | meter | tal, "m", "lm", "meter" tas bort | standard | NaN | NaN |
| `material` | material | laminat, tra, komposit | standard | standard | standard |
| `flytt` | flytt | el, diskbank, flera gånger | `[]` | ignoreras | ignoreras |
| `egen` | egen | montering, rivning, flera gånger | `[]` | ignoreras | ignoreras |
| `agare` | agare | 1, 2 | standard | standard | NaN, fel |
| `rot` | rotKr | tal | standard | 0 | NaN |

Decimalkomma och mellanslag (också hårda) tolkas. `flytt` och `egen` dedupliceras och sorteras i valens ordning.

### 2.6 `raknaKokKostnad(i)`

**Validering**, alla fel samlas, oberoende av väg (fälten syns alltid): `luckor` heltal inom gränserna, `meter` inom gränserna, `agare` 1 eller 2, `rot` 0 till `ROT_TAK_KR · agare`. Ett decimaltal i `luckor` är ett fel.

**Poster per kant** (k = 0 nedre, 1 övre), i den här ordningen, bara de som vägen har:

1. `rivning` (nytt): arbete `KOK_RIVNING_KR[k]`, 0 vid egen `rivning`; material 0.
2. `stommar` (nytt): material `Math.round(KOK_STOMMAR_KR_PER_M · meter)`; arbete `KOK_MONTERING_KR[k]`, 0 vid egen `montering`.
3. `luckor` (luckor, luckor-bankskiva): material `antal · KOK_LUCKA_KR[niva]`; arbete `antal <= 20 ? 7 500 : Math.round(7 500 · antal / 20)`, 0 vid egen `montering`.
4. `gangjarn` (samma vägar, bara `nya`): material `antal · 2 · 169`; arbete `ingar`.
5. `bankskiva` (bankskiva, luckor-bankskiva, nytt): material `Math.round(meter · KOK_BANKSKIVA_KR_PER_LM[material][k])`; arbete i nytt `ingar`, annars `Math.round(meter · montering[k])`, 0 vid egen `montering`.
6. `vitvaror` (nytt): material `KOK_VITVAROR_KR[k]`; arbete `inget`.
7. `el` (nytt och `flytt` el): arbete `KOK_EL_KR[k]`; material 0.
8. `vvs` (nytt och `flytt` diskbank): arbete `KOK_VVS_KR[k]`; material 0.

Summor, rot, `attBetalaKr = foreRot − rot`, `andelArbeteProcent`, `begransad` som badrummet. `utfall` följer den övre kanten.

**gorInteDetHar:** `rot-pa-allt` först när den övre kantens arbete är över 0 kr (ändrat 2026-09-29 efter hantverkarens not; utan arbete finns inget att räkna procenten på). `verkstad-rot` när vägen har luckor. `el-sjalv` i nytt. `vvs-intyg` i nytt med `flytt` diskbank. `riva-sjalv` i nytt med egen `rivning`.

**regler**, i ordning: `luckor-pris`, `luckor-montering`, `gangjarn` (vägar med luckor); `bankskiva` (vägar med bänkskiva); `nytt-enkel`, `flytt` (nytt); `spann` (när `spann`); `tillkommer` alltid; `rot-arbete`; `rot-tak` när den övre kantens arbete är över 0 kr (ändrat 2026-09-29); `rot-slog-i` vid tak; `egen-insats` när ett val i `egen` gäller vägen (`montering` alltid, `rivning` bara i nytt).

### 2.7 Hjälpfunktioner

`kokDelbarQuery(i)` (nycklarna i tabellens ordning, `flytt` och `egen` en per val, tal med komma, `rot` alltid med), `kokRotavdragQuery(r, i)` (övre kantens arbete och material), `kokBeskedVarden(r, i)` (`attBetala`, `foreRot`, `rot`, `kapat`, `kapatMax`, `arbete`, `material`, `andelArbete`, `luckor`, `meter`, `agare`, `hamtat`, `vag`, `spann`), `kokKortsvarVarden()` (luckor vid standard, bänkskiva i laminat 4 och 5 m, nytt kök 4 och 5 m, som `{ foreRot, rot, attBetala }` med spann), `kokAntagandenFor(r, i)`, `kokRegelKallor(nyckel)` (utan förmedlare).

### 2.8 Publika strängar

Allt i `KOK_TEXT`, varje värde `'TEXT SAKNAS: <nyckel>'` tills hantverkaren skrivit det. Nycklarna och vad de ska säga står i textlistan. Undantagen, som är gränssnitt och står ordagrant: standardvarningen och delatexten ur nytt-verktyg, `spalt['dela-etikett']` som på badrummet, och de fasta rubrikerna.

**Regelkällor:** `luckor-pris` VED; `luckor-montering` TB-LUCKOR, HK-LUCKOR; `gangjarn` VED, IKEA; `bankskiva` KIT, TB-BANK; `nytt-enkel` IKEA, TB-IKEA; `flytt` HK-NYTT, ELSAK-SJALV; `spann` KIT, TB-IKEA; `tillkommer` VED; `rot-arbete` SKV-ROT, SKV-RATT; `rot-tak` SKV-ROT; `rot-slog-i` SKV-ROT; `egen-insats` SKV-ROT, ELSAK-SJALV, SV. Förmedlarna namnges aldrig under en regel.

### 2.9 Antagandetabellen

| Nyckel | Värdet | Typ | Källor | Visas när |
|---|---|---|---|---|
| `lucka-pris` | kr per lucka för vald nivå; `antagandeVarde['lucka-pris'](kr, prisgrupp)` får Vedums prisgrupp ur `KOK_LUCKA_PRISGRUPP` (1, 5, 10) | Källa | VED | luckor |
| `gangjarn` | 169 kr styck, 2 per lucka | Källa | VED, IKEA | luckor och `nya` |
| `luckor-montering` | 7 500 kr före rotavdrag | Källa | TB-LUCKOR | luckor |
| `luckor-fast-max` | upp till 20 luckor, sedan i proportion | Antagande | HK-LUCKOR | luckor |
| `bankskiva-material` | spann per löpmeter för valt material | Källa | KIT | bänkskiva |
| `bankskiva-montering` | 500 till 2 000 kr per löpmeter | Källa | TB-BANK | bankskiva, luckor-bankskiva |
| `bankskiva-i-kok` | ingår i monteringen, längd = köksmeter | Antagande | – | nytt |
| `stommar` | 3 840 kr per meter | Källa | IKEA | nytt |
| `stommar-modul` | ett bänkskåp och ett väggskåp per 60 cm | Antagande | IKEA | nytt |
| `montering-kok` | 15 000 till 40 000 kr | Källa | TB-IKEA | nytt |
| `montering-storlek` | hela spannet, storlek utan mått | Antagande | TB-IKEA | nytt |
| `vitvaror` | 15 000 till 25 000 kr | Källa | TB-IKEA | nytt |
| `rivning` | 8 000 till 18 000 kr | Källa | HK-KOK | nytt |
| `el` | 5 000 till 15 000 kr | Källa | HK-NYTT | nytt och flytt el |
| `vvs` | 5 000 till 20 000 kr | Källa | HK-NYTT | nytt och flytt diskbänk |
| `el-vvs-arbete` | allt arbete | Antagande | – | nytt och någon flytt |
| `ingen-dyr-niva` | dyrare stommar räknas inte | Antagande | – | nytt |
| `ej-med` | handtag, lådfronter, frakt, vitvarornas installation, container | Antagande | – | alltid |
| `rot-procent`, `rot-grans`, `rut-skatt` | som badrummet | | | alltid |

---

## 3. Formuläret `KokKostnadForm.astro`

Props som badrummet: `indata?`, `varden?` (`{ luckor, meter, rot }` som de skrevs), `fel?`, `kompakt?`, `idPrefix?`, `knappText?`. `<form method="get" action="/rakna/kok-kostnad/">`. Klasser ur `stil.ts`. Ingen klient-JS.

### 3.1 Layout på 375 px (311 px innerbredd)

```
┌ 311 px ───────────────────────────────┐
│ VAD SKA GÖRAS (legend)                 │
│ ( ) luckor  ( ) bänkskiva              │  radio vag, en per rad, min-h-11
│ ( ) luckor och bänkskiva  ( ) nytt kök │
│                                        │
│ LUCKORNA (legend)                      │
│ Antal luckor                           │
│ [ fält          ] st                   │  48 px, max-w-40, inputmode numeric
│ hjälp                                  │  bara full
│  Prisnivå (legend, nästlad fieldset)   │
│  ( ) enkel ( ) mellan ( ) hög          │  en per rad
│  hjälp: nytt kök räknas i enkel        │  bara full
│  Gångjärn (legend, nästlad)            │
│  ( ) nya  ( ) behåll                   │
│                                        │
│ BÄNKSKIVAN (legend)                    │
│ Längd                                  │
│ [ fält          ] m                    │  inputmode decimal
│ hjälp: vid nytt kök skåpradens längd   │  bara full
│  Material (legend, nästlad)            │
│  ( ) laminat ( ) trä ( ) komposit      │
│                                        │
│ NYTT KÖK (legend)                      │
│ [ ] el   [ ] diskbänk                  │  kryssrutor flytt
│ hjälp: gäller bara nytt kök            │  alltid
│                                        │
│ DET HÄR GÖR DU SJÄLV (legend)          │
│ [ ] montering  [ ] rivning             │
│ hjälp: el och VVS går inte att välja   │  alltid, också kompakt
│                                        │
│ ÄGARE OCH ROTAVDRAG (legend)           │
│ ( ) En   ( ) Två                       │
│ Rotavdrag som redan är använt i år     │
│ [ fält          ] kr                   │
│ hjälp                                  │  bara full
│ [ Räkna ut ]                           │
└────────────────────────────────────────┘
```

Fel under fältet med `aria-describedby`, hjälpraden står kvar. Ingen tabell i formuläret. Kompakt: inga hjälprader utom under `flytt` och `egen`. Alla fält renderas också kompakt, eftersom varje väg behöver sina.

---

## 4. Sidan `kok-kostnad.astro`

Som `badrum-kostnad.astro`, rad för rad, med de här skillnaderna:

- `SLUG = 'kok-kostnad'`, `UTKAST = true`, `VERKTYGSNAMN`, `BESKRIVNING`, `titel`, `H1`, `INGRESS`, `H2_VAGAR`, `H2_SJALV`, `H2_ROT` är `TEXT SAKNAS`.
- Spalten: beskedet, `etikett-betala`, det stora talet (spann som "A till B" vid spann), `rad-summa(foreRot, rot)` och `rad-delning(arbete, material)` i ett stycke, pekraden, länken till rotavdragsräknaren med `kokRotavdragQuery` (bara när den övre kantens arbete är över 0 kr), `rad-kallor(hamtat)`, länken till "Så räknar jag", dela. Ordningen skiljer sig från badrummets med avsikt (ändrad 2026-09-29): varje rad följs av länken som går vidare från den.
- Källraderna under reglerna och i källistan: datumet i ett eget `<span>` med `whitespace-nowrap`, så att "2026-09-28" aldrig bryts vid bindestrecket. **Högst 700 tecken synlig text vid standard.**
- "Därför blev svaret så": posttabellen med `arbete`-cellen som tal, `postEgen`, `postIngar` eller `postInget`; summaraden; `kallrad`; `rot(v)`, `betala(v)`; reglerna med `kokRegelKallor` och `kallradEfterRegel(kallor, false)`.
- Tre H2 med brödtext (checklistan 6): vägarna, med länk till `/kok/byta-koksluckor/` och `/kok/mala-koksluckor/`; egen insats, bär "renovera kök billigt", länk till `/kok/mala-koksluckor/`; rotavdraget, länk till `/rakna/rotavdrag/`.
- Läs vidare: `/kok/byta-koksluckor/`, `/kok/mala-koksluckor/`, `/rakna/rotavdrag/`. `/kok/byta-bankskiva/` läggs till först när den är publicerad (checklistans tillägg 3); en länk till ett utkast stoppar bygget.
- Faq: tre platshållare.

---

## 5. Registret (publiceringsomgången)

```ts
{ slug: 'kok-kostnad', namn: '<hantverkaren, bär "renovera kök kostnad">', rad: '<hantverkaren>', sasong: [9, 3], pelare: ['kok'] },
```

---

## 6. Testet `scripts/test-kalkyl-kok-kostnad.mjs`

Facit är värdartikeln, läst från disk, underlagets räkneexempel och egen räkning med formlerna i 2.6.

| # | Indata (resten KOK_STANDARD) | Facit |
|---|---|---|
| K1 | standard | luckor 6 240 / 7 500, gångjärn 5 408; arbete 7 500; material 11 648; före rot 19 148; rot 2 250; att betala 16 898; andel 39; inget spann. Artikelns tabell: 6 240, 5 408, 7 500, 2 250, 16 898, och 19 148 i jämförelsen |
| K2 | gangjarn behall | att betala 11 490 (artikeln: 5 408 mindre) |
| K3 | niva mellan; niva hog | att betala 33 762; 69 426 |
| K4 | luckor 20; 21; 30; 1 | montering 7 500; 7 875; 11 250; 7 500. 30 luckor: att betala 29 715 |
| K5 | bankskiva, 4 m laminat | material 2 000 till 6 000; arbete 2 000 till 8 000; rot 600 till 2 400; att betala 3 400 till 11 600 (underlaget ex 3) |
| K6 | bankskiva, 3,5 m komposit | att betala 8 225 till 22 400 |
| K7 | luckor-bankskiva | att betala 20 298 till 28 498 |
| K8 | nytt, 4,8 m, egen rivning | material 35 832 till 50 632 (underlaget ex 4); arbete 15 000 till 40 000; att betala 46 332 till 78 632 |
| K9 | nytt, 4 m | före rot 55 360 till 104 360; rot 6 900 till 17 400; att betala 48 460 till 86 960 |
| K10 | K9 med flytt el och diskbänk | arbetet +10 000 till +35 000, rotavdraget +3 000 till +10 500 (underlaget ex 6); att betala 55 460 till 111 460 |
| K11 | K10 med rot 30 000 | tak; övre kantens rot 20 000, kapat 7 900; nedre kanten 9 900 |
| K12 | K11 med två ägare | belopp |
| K13 | egen montering (luckor) | arbete 0, rot 0, att betala 11 648 |
| K14 | egen rivning i väg luckor; flytt i väg luckor | samma tal som K1, ingen `egen-insats` |
| K15 | nytt med niva hog | samma tal som K9, `nytt-enkel` i reglerna |

Ogiltigt: luckor 0, 61, 2,5, "abc", tomt; meter 0,4, 15,1, tomt; agare 3; rot −1, 50 001 med en ägare; 100 000 med två är ok; två fel samtidigt.

Övrigt: konstanterna mot underlaget; 3 840 kr per meter ur Ikeas delar; rotkonstanterna importerade (badrumstestet gäller samma fil); `tolkaKokQuery` med tom adress, "16 st", "4,5 m", okända värden, dubbletter; rundtur `tolkaKokQuery(kokDelbarQuery(x))` för K1, K3, K6, K8, K10; `kokRotavdragQuery`; `kokKortsvarVarden`; `KOK_TEXT` har varje nyckel som icke-tom sträng; reglerna och gör inte-raderna per väg; antagandetabellen per väg; källorna finns och har https, och ingen regel namnger en förmedlare; varje post har exakt en källa; spannen har hårt mellanslag inne i talen; bänkskivans tal står i `/kok/byta-bankskiva/` när den finns. Ordalydelser som `todo` tills texten finns.

---

## 7. Budget och kontroller

- Testet grönt, badrummets och rotavdragets test gröna oförändrade.
- `npx astro check --minimumSeverity error`: 0 fel.
- `npm run kontrollera`: de enda felen får vara `TEXT SAKNAS` i `renovering.ts` och `kok-kostnad.astro`.
- Mät i dev med rensningen i `budget-html.mjs --dev` (skript utom JSON-LD, stil i head, `data-astro-source-*`): 0 `<script>` utöver JSON-LD, ingen `.js`. **Hela sidan under 56 kB med platshållare** vid standard, vid `?vag=nytt&meter=4,8&material=komposit&flytt=el&flytt=diskbank&egen=rivning&agare=2&rot=10000` och vid ett ogiltigt värde. 66 kB är gränsen med texten.
- 375 px: ingen sidledsscroll utom inuti `<Tabellyta>`, fält 48 px, klickytor minst 44 px, fokus synligt, varje fält har etikett.

---

## 8. Publiceringsomgången (inte nu)

1. Hantverkaren har skrivit textlistan, läsaren och SEO har godkänt.
2. `UTKAST = false`, registerposten (5).
3. `<Kalkylator namn="kok-kostnad" />` i `/kok/byta-koksluckor/` (kommentaren i kostnadsavsnittet) och `<Verktygskort kalkylator="kok-kostnad" />` i `/kok/mala-koksluckor/` (kommentaren före "Byta eller måla"). `MED_FORMULAR` är redan klar.
4. Bilderna (9), `npm run illustrationer`, `npm run delningsbilder`.

---

## 9. Bilderna (utvecklaren ritar senare, jag godkänner på 343 px)

### 9.1 Varumärkesbilden

`src/assets/illustrationer/rakna/varumarke/kok-kostnad.svg`, 600 × 360, logotypens stil som `varumarke/badrum-kostnad.svg`: blyerts 2 px med runda ändar, `tumstock` som enda fyllning, transparent, ingen text, inga tal, pennstreck 4,5 px i `penna` under motivet.

- **Motiv:** en köksvägg rakt framifrån. Tre bänkskåp med luckor under en bänkskiva, två väggskåp ovanför, en diskho med blandare i bänkskivan. **Bänkskivan är fylld med `tumstock`**, det nya i bilden; allt annat är konturer. Säger "kök" och "något byts" utan ett ord.
- Varje lucka har ett kort handtag, inga andra detaljer. Inga kastruller, ingen häll med plattor, ingen fläkt, inget kakel.
- Golvet är en rak linje. Bbox-kvot 1,72 ± 0,05 (nås med skåpradens längd), 90 till 94 procent av bredden. Under 12 kB.

### 9.2 Skissen

`src/assets/illustrationer-kallor/rakna/kok-kostnad.svg`, 600 × 360, blyerts på linjerat papper, Caveat 500 i 24 px. Köksväggen i elevation med stommar, luckor och bänkskiva (checklistan 8). **Mått:** skåpraden som bygel, "4 m". **Posterna utmärkta** med korta etiketter på luckorna, gångjärnet, bänkskivan och stommen. **Det som pekar** i `penna`: en lucka som lyfts av stommen. **Nyckeltalet** "16 898 kr" med gul markering (standardvärdet). Etiketterna, alt (under 125 tecken med orden renovera kök och kostnad) och bildtexten skriver hantverkaren, sedan specar jag skissen ordagrant.

---

## 9b. Elkostnaden med förval (SEO:s fråga i checklistans tillägg)

Svaret är ja. Ändringen är liten och gjord i samma omgång:

- `src/lib/kalkyl/elkostnad.ts`: `forvalFranAdress(forval)` tolkar förvalet som adressen (nycklarna `effekt`, `timmar`, `dagar`, `elpris`, `liter` och `typ`), och ger fel vid en okänd nyckel, en okänd typ eller ett värde som räknaren inte godtar. `formVarden(i)` ger fältens strängar. `typFranQuery(q)` ger `golvvarme` eller `maskin`. `gorInteText(r, typ)` ger avfuktarens text för en maskin och `GOR_INTE_DYGNET_RUNT_GOLVVARME` för golvvärme vid 24 timmar. Den är `null` tills hantverkaren skrivit den, och då står ingen text alls. Själva räkningen ändras inte.
- `Kalkylator.astro`: `forval` godtas för `elkostnad` och går till `ElkostnadForm` som `indata`, `varden` och `typ`. Ett förval som inte går att räkna ger byggfel.
- `ElkostnadForm.astro`: `typ=golvvarme` följer med som ett dolt fält. `/rakna/elkostnad/` läser typen, sätter den i den delbara adressen och visar `gorInteText`.
- **Talen och källorna är artikelns.** Förvalet tar emot hela golvets effekt i watt. Golvvärmesidan räknar tillverkarens W/m² gånger den fria golvytan, med källan i sin egen text. Ett exempel ur faktabladet: DEVImat 150T, 150 W/m², gånger 4 m² blir `<Kalkylator namn="elkostnad" forval="effekt=600&dagar=365&typ=golvvarme" />`. Gångtiden saknar källa och får bara stå med om artikeln märker den som antagande. Annars utelämnas `timmar` och läsaren skriver den själv. Ett fält för W/m² och yta ingår inte. Det kräver ett nytt fält, nya texter och en ny räkning, och det görs bara om SEO vill ha det.
- Garagesidan: `forval="effekt=<avfuktarens W ur databladet>"`, utan typ.
- Hjälptexten om gångtid (`GANGTIDER`) nämner inte golvvärme, och standardeffekten 320 W gäller en avfuktare. I kompakt form syns ingen av dem. På verktygssidan står avfuktarexemplen kvar i hjälpraden som exempel.

## 10. Godkännande (min granskning)

1. Varje konstant namngiven med Källa eller ANTAGANDE, en källa per post, ingen räkning i `.astro`, rot genom `raknaRotavdrag`.
2. Testet och de två syskontesterna gröna, astro check 0 fel.
3. Query-nycklar, fältnamn och id exakt som i 2.5 och 3. Delad adress ger samma svar.
4. Tillstånden: tom adress, varje väg, ogiltigt, tak, egen insats, flytt i fel väg.
5. 375 px och spalten under 700 tecken.
6. Budgeten i 7.
7. `UTKAST = true`, inga filer utanför avsnitt 1 ändrade.
