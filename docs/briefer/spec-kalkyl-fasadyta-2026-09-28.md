# Spec: räknaren /rakna/fasadyta/ (arbetsnamn)

UX och bygge-agenten, 2026-09-28. Gäller steg 1 till 6 i skillen nytt-verktyg plus bilderna. Underlaget är `docs/briefer/underlag-kalkyl-fasadyta-2026-09-28.md` (här "underlaget", avsnittsnummer därifrån). Mönstret är `docs/SPEC-SIDMALLAR.md` 4.7, och närmaste förebild är `src/pages/rakna/u-varde.astro` och `src/lib/kalkyl/u-varde.ts` i det skick de har efter granskning 12 G: alla publika strängar i `TEXT`, beskedrubriker som funktioner med tal, `antagandenFor()`, tabellklasser en gång på `<table>`. Allt som tog sju varv på U-värdet står här från början.

Utvecklaren gissar ingenting. Står något inte här gäller 4.7, och står det inte där frågar utvecklaren innan hen bygger.

**Slug, fras, titel och namn är öppna.** SEO och GEO-agenten bestämmer dem parallellt (troligen kring "beräkna fasadyta" och "hur mycket färg behövs", `docs/briefer/serp-raknare-2026-09-28.md` avsnitt C). Utvecklaren bygger under `fasadyta`. Väljer SEO en annan slug före commit byts `SLUG`, sju filnamn och registerposten; ingen 301 behövs, eftersom inget är publicerat.

**Inga produkter och inget reklamband**, enligt affiliateagentens beslut i `docs/briefer/affiliate-fasad-2026-09-28.md` avsnitt 3. `reklam={false}`.

---

## 0. Godkännande av underlaget

Underlaget är **godkänt med de beslut som står nedan**. Geometrin i avsnitt 1, profilräkningen i avsnitt 2, åtgångstalen i avsnitt 3, strykningarna i avsnitt 4, tegelkällorna i avsnitt 5 och burkstorlekarna i avsnitt 6 har källa och datum och används som de står, utom där ett beslut här säger annat.

### K1. Paneltillägget: två tal, lockpanel som standard

**Beslut.** Verktyget visar **två ytor**:

- **Fasadytan** (väggytan netto): omkrets gånger höjd plus gavelspetsar minus fönster och dörrar. Det är det stora talet på sidan. Det är det tal målaren tar betalt för, det tal guidens kvadratmeterpriser gäller, och det tal guiden räknar fram till 98.
- **Målad yta**: fasadytan gånger profilfaktorn. Färgen räknas på den. Den visas på en egen rad under litern, och bara när faktorn inte är 1.

Profilen är ett eget val (fältet `fasad`) med **lockpanel som standard**, faktor 1,20.

Varför lockpanel och inte slät som standard:
- Lockpanel är den vanligaste panelen i Sverige enligt Svenskt Trä (källa i underlaget avsnitt 2). En läsare som inte rör fältet har troligen lockpanel.
- Felet ska ligga åt rätt håll. Standard slät ger den som har lockpanel en femtedel för lite färg, och då tar burkarna slut på sista väggen. Den som har slät panel och glömmer fältet får en burk över. Samma skäl som dörrmodulen i `kvadratmeter.ts`: "den marginalen ligger åt rätt håll".
- Faktorn är egen räkning ur Svenskt Träs panelmått, inte ett tillverkartal, och det står på raden i "Därför blev svaret så" och i antagandetabellen. 1,195 avrundat till 1,20.

Lockläktpanel slås ihop med lockpanel till **ett** alternativ. Båda ger 1,20 (1,16 till 1,22 beroende på brädbredd, underlaget avsnitt 2), och två alternativ med samma tal är ett val läsaren inte behöver göra. Spontad panel och fasspont blir alternativet slät, faktor 1,00 (ANTAGANDE: faser försummas).

**Guiden `src/content/guider/fasad/mala-om-huset.mdx` ändras (hantverkaren skriver, avsnitt 11):** väggytan 98 och "jag rundar till 100" står kvar. Litern blir beroende av panelen. Talen hantverkaren ska landa på:

| Var i guiden | I dag | Blir |
|---|---|---|
| Stycket **Färgen**, rad 157 | "På 100 kvadratmeter blir det 29 liter, tre burkar om 10 liter." | Slät panel: 29 liter, tre burkar om 10. Lockpanel: en femtedel mer yta att måla, 34 liter, fyra burkar om 10. Faktorn nämns som egen räkning ur Svenskt Träs panelmått. |
| Samma stycke | "Räkna med 7 000 till 10 000 kronor i täckfärg." | 7 000 till 13 000 kronor (tre burkar à 2 299 till fyra à 3 319). |
| **kortSvar**, rad 10 | "Färgen kostar 7 000 till 10 000 kronor för två strykningar" | 7 000 till 13 000 kronor |
| Stycket om slamfärg, rad 159 | "100 kvadratmeter blir tre burkar och drygt 2 000 kronor per strykning" | se K3 |
| Summeringen, rad 167 | "7 000 till 10 000 kronor i färg … Summan är ungefär 21 000 till 28 000 kronor … summa 29 000 till 36 000 kronor" | 7 000 till 13 000 i färg; själv 21 000 till 31 000; med målare 29 000 till 39 000 |
| **Faq** "Vad kostar det …", rad 217 | "Färgen kostar 70 till 100 kronor per kvadratmeter till" | 70 till 130 kronor |
| **Faq** "Hur mycket färg …", rad 218 | "På 100 kvadratmeter fasad blir det 29 liter, tre burkar om 10 liter." | Samma uppdelning som stycket Färgen, 29 liter slät och 34 lockpanel. |

Egen räkning bakom talen: 100 × 2 / 7 = 28,57 → 29 liter, 30 liter i burkar. 100 × 1,20 × 2 / 7 = 34,29 → 34 liter, 40 liter i burkar. 4 × 3 319 = 13 276 kr. 13 000 + 7 500 + 18 200 = 38 700. 13 000 + 2 300 + 16 000 = 31 300.

### K2. Åtgångens kant: nedre kanten av delintervallet för fallet

**Beslut.** Samma princip som `kvadratmeter.ts` ("den nedre kanten, det tal alla tillverkarna når"), tillämpad på det delintervall som gäller läsarens fall:

- Där en tillverkare delar upp på sågat eller nytt mot hyvlat eller tidigare målat, gäller **nedre kanten av rätt delintervall**.
- Tillverkare som anger ett odelat intervall används som kontroll: talet ska ligga inom deras intervall.

| Fall | m²/l | Nedre kant hos | Inom |
|---|---|---|---|
| Täckfärg på tidigare målat eller grundat trä (akrylat, oljealkyd) | **7** | Beckers Perfekt Oljefärg 7–8 (läst), Alcro Bestå 7–8 (utdrag) | Beckers Perfekt Fasad 6–8, Nordsjö Tinova ommålning 6–8, Lovely Home Alcro 6–8 |
| Täckfärg på nytt eller rent sågat trä | **6** | Beckers Perfekt Oljefärg 6–7, Alcro Bestå 6–7 (utdrag) | Beckers Perfekt Fasad 6–8. Nordsjö Tinova nymålning 4–6 har 6 som övre kant; det står på regelraden |
| Grundfärg på sågat eller skrapat trä | **6** | Beckers Primex Trägrund Plus 6–7 | Nordsjö Tinova Primer 4–8, Alcro Grundfärg 6–8 (utdrag) |
| Grundfärg på tidigare målat trä | **7** | Beckers Primex Trägrund Plus 7–8 | samma |
| Slamfärg | **3** | Falu Rödfärg Original: "ca 3" (folder), 3–4 (FAQ), 3 (produktsida) | |
| Silikatfärg på puts | **3** | Beckers Mineral Silikatfärg 3–5 | |

Guidens 29 liter på 100 m² är 7 m²/l, så verktyget och guiden räknar med samma tal på slät panel.

Utelämnas: Jotun Drygolin Nordic Extreme (akryl-alkyd, talen bara från butik och norsk sida), linoljefärg (utdrag, produktsidan 404). Att verifiera 3 (Alcros datablad) stoppar inte bygget: 7 och 6 bärs av Beckers läst datablad och ligger inom alla lästa intervall.

### K3. Slamfärgen i guiden (min egen, uppstår av K2)

Guiden säger att 100 m² slamfärg blir tre burkar. Med 3 m²/l är det 33,3 liter på slät panel och 40 liter på lockpanel. Burkregeln ger **tre om 10 och en om 5** respektive **fyra om 10**. Guidens tre burkar gäller bara vid 3,33 m²/l eller mer, alltså inte vid tillverkarens "ca 3". Kronorna per strykning blir 3 × 699 + 499 = 2 596 och 4 × 699 = 2 796 kr (K-Bygg 10 l enligt guiden, Happy Homes 5 l enligt underlaget avsnitt 6). Hantverkaren skriver om meningen på rad 159; "drygt 2 000" blir "kring 2 600 till 2 800".

### Det som saknar källa

| Sak | Beslut | Hur det syns |
|---|---|---|
| **Spill** | **Bort ur talet.** Ingen tillverkare anger en procent. Burkregeln ger redan upp till 30 procent över | Regelrad `spill` i "Därför": Fasadums 10–15 procent för bättringar är en målerifirmas råd och inte inräknat. Antagandetabellen: raden `inget-spill` |
| **Fönsterschablon** 1,2 × 1,2 m | **Eget fält** med standardvärdet, som i `kvadratmeter.ts` (samma ANTAGANDE, samma kommentar) | Antagandetabellen: `fonster-matt`, visas när fönsterfältet har standardvärdet |
| **Dörrmått** 1,0 × 2,1 m | **Eget fält.** Guidens ytterdörr, inte kvadratmeterräknarens innerdörr 0,9 × 2,1 | `dorr-matt`, visas när dörrfälten har standardvärdet |
| **Burkavrundningen** | **ANTAGANDE med synlig rad.** Samma `bastaBurkar()` som kvadratmeterräknaren, med storlekar per färg | `burkar` (regeln) och `burkar-storlekar` (storlekarna och varifrån de kommer) |
| **Burkstorlekar för puts** 1/5/10 l | **Bort.** Ingen källa hämtad. Puts visar liter utan burkar | `puts-burkar` säger att burkarna saknas |
| **Grundolja** | **Bort ur litern.** Ingen källa för andelen ändträ och skarvar | Regelrad `grundolja` med Beckers Primex Grundolja som källa för *var* den ska, i fallen skrapat, rent och nytt |
| **Halvvalmat tak** | **Bort som alternativ.** Formeln kräver valmens höjd | Hjälpraden under takformen och antagandetabellen (`halvvalm`, visas vid sadeltak): välj sadeltak och mät till nocken; räkningen tar då med valmens lilla triangel som vägg och ger lite för mycket färg |
| **Kulörbyte "stor skillnad"** | **ANTAGANDE**: läsaren avgör själv | `kulor-grans`, visas vid skick `kulor` |
| **Silikatfärgens strykningar** | **ANTAGANDE**: 2, tät yta. Porös puts tar en till (Beckers, underlagets sammanfattning) | `puts-strykningar`. Att verifiera 6 läses av underlagsarbetaren före publicering, ändrar inte koden |
| **Slamfärg, skrapat och kulörbyte** | **ANTAGANDE**: skrapat 1 strykning som ommålning, kulörbyte 2 som nytt virke | `slam-skick` |
| **Slamfärgens första strykning förtunnad** | **ANTAGANDE**: räknas som full strykning, alltså något för mycket | samma rad |
| **Nytt trä är sågat** | **ANTAGANDE**: fasadpanel köps sågad | `nytt-sagat` |

### Övriga beslut om underlaget

1. **Nockens mått är höjden från takfoten till nocken**, inte från sockeln. Det är guidens mått i steg 3 ("höjden från takfot till nock"), och det gör fältet oberoende av väggens höjd: den som ändrar höjden till takfot för ett tvåplanshus får inget fel av ett förifyllt nocktal. Underlagets "t = nockhöjd − H" används inte.
2. **Mansardtak är med i version ett, bara med höjder.** Tre mått: nocken och brytpunkten, båda från takfoten, och brytpunktens indrag från fasaden. Ingen vinkel. Formeln är underlagets med t1 = bryt och t2 = nock − bryt.
3. **Skicket följer guidens tre nivåer** i stället för underlagets fall, så att räknaren och guiden där den bäddas in talar samma språk: ommålning (nivå ett), skrapat (nivå två), rent eller nytt trä (nivå tre och nytt virke), kulörbyte, och byte av färgtyp. Talen per fall står i 2.2.
4. **Skrapat får grundfärg med 6 m²/l**, inte 7. Guiden säger om nivå två: "Den skrapade ytan drar dessutom mer färg, för sågat trä suger." Kulörbyte på hel färg behåller 7 (underlagets E4).
5. **Byte av färgtyp och slamfärg på täckfärg ger inga liter**, bara ytan och ett besked (Beckers, välj rätt fasadfärg; Falu folder). Det är skicket `byte`.
6. **Gränserna** i underlaget avsnitt 1 godkänns: längd och bredd 2 till 50 m, höjd 1,5 till 12 m, vinkel 5 till 60 grader för sadeltak och 3 till 30 för pulpet. Nockhöjden valideras mot samma vinklar (2.4).

---

## 1. Filer

| Fil | Gör | Uppdrag |
|---|---|---|
| `src/lib/kalkyl/fasadyta.ts` | skapas | A |
| `scripts/test-kalkyl-fasadyta.mjs` | skapas | A |
| `src/lib/kalkyl/kvadratmeter.ts` | `bastaBurkar` får en valfri andra parameter (2.7). Inget annat | A |
| `src/components/kalkyl/FasadytaForm.astro` | skapas | A |
| `src/pages/rakna/fasadyta.astro` | skapas | A |
| `src/lib/kalkyl/register.ts` | en post efter `mala-ute` | A |
| `src/components/ui/Kalkylator.astro` | import, `'fasadyta'` sist i `MED_FORMULAR`, en renderingsrad | A |
| `src/content/guider/fasad/mala-om-huset.mdx` | **en rad byts** (avsnitt 8) | A |
| `src/pages/rakna/kvadratmeter.astro`, `src/pages/rakna/mala-ute.astro` | en `<li>` i "Läs vidare" var (avsnitt 8) | A |
| `src/assets/illustrationer/rakna/varumarke/fasadyta.svg` | skapas | A |
| `src/assets/illustrationer-kallor/rakna/fasadyta.svg` | skapas; `npm run illustrationer` skriver den publicerade | B |

Rörs inte: `src/lib/kalkyl/mala-ute.ts` (bara import av `FARGTYPER`), `stil.ts`, `verktygsbild.ts`, `strukturdata.ts`, `Bas.astro`, andra kalkylmoduler, någon annan rad i guiden. `docs/SPEC-SIDMALLAR.md` 4.7.16 skriver jag efter granskningen.

**Uppdrag A** är steg 1 till 6 och varumärkesbilden. **Uppdrag B** är skissen och ges när hantverkaren skrivit skissens etiketter (9.1). Sidan fungerar utan skiss.

Arbetaren kör inte `npm run build`.

---

## 2. Formelmodulen `src/lib/kalkyl/fasadyta.ts`

Ren modul utan Astro-importer. Tillåtna importer, med `.ts`-ändelse så att testet kan köra filen med node:

```ts
import { bastaBurkar, OVERSKOTT_GRANS, type Burk } from './kvadratmeter.ts';
import { FARGTYPER } from './mala-ute.ts';
```

`kvadratmeter.ts` importerar i sin tur inget; kontrollera att `mala-ute.ts` inte heller gör det, annars kopieras de tre etiketterna ordagrant med en kommentar om varifrån. Varje konstant namngiven överst med kommentaren `Källa:` (titel, adress, läst-datum som i underlaget) eller `ANTAGANDE:`.

### 2.1 Typer

```ts
export type Takform = 'sadel' | 'pulpet' | 'valmat' | 'mansard';
export type Matt = 'nock' | 'vinkel';
export type Fasad = 'lock' | 'slat' | 'puts' | 'tegel';
export type Farg = 'akrylat' | 'oljealkyd' | 'slamfarg';      // samma nycklar som mala-ute.ts
export type Skick = 'ommalning' | 'skrapat' | 'rent' | 'kulor' | 'byte';
export type Stryk = 'auto' | 1 | 2 | 3;

export interface FasadytaIndata {
  langdM: number;        // långsidan, längs takfoten på sadeltak
  breddM: number;        // gaveln, sidan där taket syns i profil
  hojdM: number;         // sockel till takfot
  takform: Takform;
  matt: Matt;
  nockM: number;         // takfot till nock
  vinkelGrader: number;
  brytM: number;         // mansard: takfot till brytpunkt. NaN när tomt
  indragM: number;       // mansard: vågrätt från fasadlivet till brytpunkten. NaN när tomt
  fonster: number; fonsterBreddM: number; fonsterHojdM: number;
  dorrar: number;  dorrBreddM: number;    dorrHojdM: number;
  fasad: Fasad;
  farg: Farg;
  skick: Skick;
  stryk: Stryk;
}

export type FelNyckel = 'langd' | 'bredd' | 'hojd' | 'matt' | 'nock' | 'vinkel' | 'bryt' | 'indrag'
  | 'fonster' | 'fonsterbredd' | 'fonsterhojd' | 'dorrar' | 'dorrbredd' | 'dorrhojd';

export type Utfall = 'farg' | 'puts' | 'tegel' | 'byte';
export type GorInte = 'utan-avdrag' | 'en-strykning' | 'blanda-partier' | 'ny-puts';
export type RegelNyckel =
  | 'vaggar' | 'gavel-sadel' | 'gavel-pulpet' | 'gavel-valmat' | 'gavel-mansard' | 'avdrag'
  | 'profil-lock' | 'profil-slat' | 'atgang' | 'kanten' | 'strykningar' | 'grundfarg' | 'grundolja'
  | 'slam-underlag' | 'burkar' | 'spill' | 'tegel' | 'byte' | 'silikat';

export interface Farglager {
  m2PerLiter: number;
  strykningar: number;
  strykningarValda: boolean;      // true när läsaren valt 1, 2 eller 3
  literRaknat: number;            // två decimaler, som i kvadratmeter.ts
  burkar: Burk[] | null;          // null för puts
  literAttKopa: number | null;    // null för puts
}

export type FasadytaResultat =
  | {
      status: 'ok';
      utfall: Utfall;
      omkretsM: number;
      vaggarBruttoM2: number;       // omkrets × höjd
      gavelM2: number;              // enligt takform
      bruttoM2: number;
      avdragFonsterM2: number;
      avdragDorrM2: number;
      avdragM2: number;
      fasadytaM2: number;           // det stora talet
      tM: number | null;            // höjd takfot–nock som räknats; null för valmat och mansard
      vinkelGrader: number | null;  // vinkel som räknats; null för valmat och mansard
      mansard: { t1M: number; t2M: number; ovreBreddM: number } | null;
      profilfaktor: number | null;  // null för tegel
      maladYtaM2: number | null;    // null för tegel och byte
      tackfarg: Farglager | null;   // null för tegel och byte
      grundfarg: Farglager | null;  // bara trä, akrylat eller oljealkyd, skick skrapat, rent, kulor
      gorInteDetHar: GorInte[];
      regler: RegelNyckel[];
    }
  | { status: 'ogiltig'; fel: Partial<Record<FelNyckel, string>> };
```

Exporter utöver typerna: `STANDARD`, `GRANSER`, `VINKELGRANSER`, `PROFILFAKTOR`, `ATGANG`, `GRUND_ATGANG`, `STRYK_AUTO`, `BURKAR_FARG`, `FONSTER_BREDD_M`, `FONSTER_HOJD_M`, `DORR_BREDD_M`, `DORR_HOJD_M`, `FARG_VAL`, `ANTAGANDEN`, `TEXT`, `tolkaQuery`, `raknaFasadyta`, `gavelyta`, `delbarQuery`, `antagandenFor`, `beskedVarden`, `burkText`, `m2Text`, `literText`.

### 2.2 Konstanter

| Namn | Värde | Märkning |
|---|---|---|
| `PROFILFAKTOR` | `{ lock: 1.2, slat: 1.0, puts: 1.0 }` | lock: Källa Svenskt Trä, Byggbeskrivningar, utvändiga träpaneler, 2021-12-27, och SKI-0142 (22 mm lockbräda, c/c 225 mm); egen räkning 1 + 2 · 22 / 225 = 1,195, avrundat. slat: ANTAGANDE, faser och spår försummas. puts: ingen profil |
| `ATGANG` | `{ akrylat: { malat: 7, sagat: 6 }, oljealkyd: { malat: 7, sagat: 6 }, slamfarg: 3, silikat: 3 }` | Källa per tal enligt K2-tabellen, med adress och läst-datum ur underlaget avsnitt 3 |
| `GRUND_ATGANG` | `{ sagat: 6, malat: 7 }` | Källa: Beckers Primex Trägrund Plus |
| `STRYK_AUTO` | se nedan | Källa per rad, underlaget avsnitt 4; ANTAGANDE där det står |
| `BURKAR_FARG` | `{ akrylat: [1, 3, 10], oljealkyd: [1, 3, 10], grund: [1, 3, 10], slamfarg: [5, 10] }` | Källa: Lovely Home, Alcro Bestå 1, 3, 10 l; Happy Homes Falu Original 5 l och K-Bygg 10 l (guiden), 2026-09-28. Valet att räkna med just dem är ANTAGANDE |
| `FONSTER_BREDD_M`, `FONSTER_HOJD_M` | `1.2`, `1.2` | ANTAGANDE, kommentaren kopierad från `kvadratmeter.ts` |
| `DORR_BREDD_M`, `DORR_HOJD_M` | `1.0`, `2.1` | ANTAGANDE: guidens ytterdörr, källa saknas (Att verifiera 9) |

Vilken åtgång och hur många strykningar, per fall. `malat` = 7, `sagat` = 6:

| fasad | farg | skick | Täckfärg m²/l | Strykningar (auto) | Grundfärg |
|---|---|---|---|---|---|
| lock, slat | akrylat, oljealkyd | ommalning | malat 7 | 2 | ingen |
| | | skrapat | malat 7 | 2 | en, 6 (sågat) |
| | | rent | sagat 6 | 2 | en, 6 |
| | | kulor | malat 7 | 2 | en, 7 |
| | slamfarg | ommalning | 3 | 1 (Falu folder) | ingen |
| | | skrapat | 3 | 1 (ANTAGANDE) | ingen |
| | | rent | 3 | 2 (Falu folder, nytt virke) | ingen |
| | | kulor | 3 | 2 (ANTAGANDE) | ingen |
| puts | ignoreras | allt utom byte | silikat 3 | 2 (ANTAGANDE, tät yta) | ingen |
| alla utom tegel | | byte | ingen liter | | |
| tegel | ignoreras | ignoreras | ingen liter | | |

`STRYK_AUTO` är den kolumnen som funktion eller tabell. Väljer läsaren 1, 2 eller 3 gäller det för täckfärgen och silikatfärgen, aldrig för grundfärgen, och `strykningarValda` blir sant.

### 2.3 Standardvärden

Guidens hus, med lockpanel (K1):

```ts
export const STANDARD: FasadytaIndata = {
  langdM: 10, breddM: 8, hojdM: 2.8,
  takform: 'sadel', matt: 'nock', nockM: 2.0, vinkelGrader: 27,
  brytM: NaN, indragM: NaN,
  fonster: 10, fonsterBreddM: FONSTER_BREDD_M, fonsterHojdM: FONSTER_HOJD_M,
  dorrar: 2, dorrBreddM: DORR_BREDD_M, dorrHojdM: DORR_HOJD_M,
  fasad: 'lock', farg: 'akrylat', skick: 'ommalning', stryk: 'auto',
};
```

Kommentar över: ANTAGANDE, guidens räkneexempel i avsnittet om fasadytan; vinkeln 27 är förifylld och används bara när läsaren väljer vinkel. Standard ger E2b: 98,2 m², 117,84 m² målat, 33,67 liter, fyra burkar om 10.

**Inga standardvärden beror på ett annat val.** Strykningarna följer fallet genom `stryk: 'auto'`, inte genom ett förifyllt tal, så att ett byte av färg eller skick aldrig bär med sig ett tal som hörde till det förra valet (lärdomen från u-värde 12.27).

### 2.4 Gränser

```ts
export const GRANSER = {
  langdM: [2, 50], breddM: [2, 50], hojdM: [1.5, 12],
  fonster: [0, 60], dorrar: [0, 20],
  fonsterBreddM: [0.2, 6], fonsterHojdM: [0.2, 4],     // som kvadratmeter.ts
  dorrBreddM: [0.3, 5], dorrHojdM: [1, 4],             // som kvadratmeter.ts
} as const;
export const VINKELGRANSER = { sadel: [5, 60], pulpet: [3, 30] } as const;  // ANTAGANDE, underlaget avsnitt 1
```

Gränserna är inklusive. Antal fönster och dörrar är heltal; ett decimaltal ger fel.

### 2.5 `tolkaQuery(q: URLSearchParams): { indata: FasadytaIndata; harIndata: boolean }`

| Nyckel | Fält | Värden | Saknas | Okänt värde |
|---|---|---|---|---|
| `langd` | langdM | tal | standard | NaN |
| `bredd` | breddM | tal | standard | NaN |
| `hojd` | hojdM | tal | standard | NaN |
| `takform` | | `sadel`, `pulpet`, `valmat`, `mansard` | standard | standard |
| `matt` | | `nock`, `vinkel` | standard | standard |
| `nock` | nockM | tal | standard | NaN |
| `vinkel` | vinkelGrader | tal | standard | NaN |
| `bryt` | brytM | tal | NaN | NaN |
| `indrag` | indragM | tal | NaN | NaN |
| `fonster`, `dorrar` | | heltal | standard | NaN |
| `fonsterbredd`, `fonsterhojd`, `dorrbredd`, `dorrhojd` | | tal | standard | NaN |
| `fasad` | | `lock`, `slat`, `puts`, `tegel` | standard | standard |
| `farg` | | `akrylat`, `oljealkyd`, `slamfarg` | standard | standard |
| `skick` | | `ommalning`, `skrapat`, `rent`, `kulor`, `byte` | standard | standard |
| `stryk` | | `auto`, `1`, `2`, `3` | `auto` | `auto` |

- Fönster- och dörrnycklarna heter som i `kvadratmeter.ts`, `farg` och dess värden som i `mala-ute.ts`.
- Tal tolkas som `tillTal` i `kvadratmeter.ts` (decimalkomma), utökat så att mellanslag och ett efterhängande `m` tolkas ("2,8 m").
- `harIndata` sant när någon nyckel ovan finns.
- `farg=traolja` (mala-utes fjärde värde) är okänt och ger standard.

### 2.6 `raknaFasadyta(i: FasadytaIndata): FasadytaResultat`

**Validering.** Alla fel samlas, `ogiltig` om minst ett. Feltexterna är funktioner i `TEXT.fel` som tar gränserna som tal.

- `langd`, `bredd`, `hojd`, fönster- och dörrmåtten utanför gräns eller NaN → fel på fältet.
- `fonster`, `dorrar` utanför gräns, NaN eller inte heltal → fel på fältet.
- **Taket**, bara det som räknas valideras:
  - `sadel`, `pulpet` med `matt: 'vinkel'`: vinkel utanför `VINKELGRANSER[takform]` eller NaN → `fel.vinkel`.
  - `sadel`, `pulpet` med `matt: 'nock'`: nock NaN eller ≤ 0, eller vinkeln ur nocken (2.7) utanför `VINKELGRANSER[takform]` → `fel.nock`. Texten får de tillåtna nockhöjderna i meter för den bredden: sadel `(B/2)·tan(min)` till `(B/2)·tan(max)`, pulpet `B·tan(min)` till `B·tan(max)`, två decimaler. (B 8 m sadel: 0,35 till 6,93 m.)
  - `valmat`: inga takfält valideras.
  - `mansard` med `matt: 'vinkel'` → `fel.matt` (mansard räknas med höjder).
  - `mansard` med `matt: 'nock'`: nock NaN eller ≤ 0 → `fel.nock`; bryt NaN, ≤ 0 eller ≥ nock → `fel.bryt`; indrag NaN, ≤ 0 eller ≥ B/2 → `fel.indrag`.
- Avdraget ≥ brutto (när resten är giltigt) → `fel.fonster` och `fel.dorrar`, samma text på båda, som `kvadratmeter.ts`.

Fälten för färg och skick valideras inte; de är uppräkningar med standard.

**Räkningen, i den här ordningen. Inget avrundas förrän det visas, utom litern (steg 8).**

1. `omkretsM = 2 · (L + B)`, `vaggarBruttoM2 = omkretsM · H`.
2. `t` och vinkel, bara sadel och pulpet:
   - `matt: 'vinkel'`: sadel `t = (B/2) · tan v`, pulpet `t = B · tan v`.
   - `matt: 'nock'`: `t = nockM`; sadel `v = atan(2t / B)`, pulpet `v = atan(t / B)`, i grader.
3. `gavelyta(takform, L, B, t, mansard)`, exporterad:
   - sadel `B · t`
   - pulpet `t · (B + L)`: två trianglar på gavlarna och den höga långsidan. Taket lutar över B; att byta L och B ändrar svaret, och fältets etikett säger vilken sida som är gavel.
   - valmat `0`
   - mansard: `t1 = brytM`, `t2 = nockM − brytM`, `ovreBredd = B − 2 · indragM`, yta `2 · ((B + ovreBredd) / 2 · t1 + ovreBredd · t2 / 2)`.
4. `bruttoM2`, avdragen var för sig (`fonster · fb · fh`, `dorrar · db · dh`), `fasadytaM2 = brutto − avdrag`.
5. **Utfall:** `tegel` om fasad är tegel; annars `byte` om skick är byte; annars `puts` om fasad är puts; annars `farg`.
6. `profilfaktor = PROFILFAKTOR[fasad]` (null för tegel). `maladYtaM2 = fasadytaM2 · profilfaktor` för `farg` och `puts`, annars null.
7. Åtgång och strykningar enligt tabellen i 2.2.
8. `literRaknat = tvaDecimaler(maladYta · strykningar / m2PerLiter)` (samma `tvaDecimaler` som `kvadratmeter.ts`). Grundfärgen: en strykning.
9. `burkar = bastaBurkar(literRaknat, BURKAR_FARG[...])`: täckfärgen med färgens storlekar, grundfärgen med `grund`. `literAttKopa = totalt`. Puts: `burkar` och `literAttKopa` null.
10. **gorInteDetHar**, i den här ordningen: `utan-avdrag` när fönster och dörrar båda är 0 (alla utfall); `en-strykning` när `stryk` är 1 och färgen inte är slamfärg (utfall farg eller puts); `blanda-partier` när täckfärgens burkar är två eller fler; `ny-puts` när fasad puts och skick rent.
11. **regler**, i den här ordningen, de som gäller:
    - `vaggar` och `gavel-{takform}`: alltid.
    - `avdrag`: när minst ett fönster eller en dörr finns.
    - `profil-lock` eller `profil-slat`: fasad lock respektive slat, utfall farg.
    - `atgang` och `kanten`: utfall farg.
    - `silikat`: utfall puts.
    - `strykningar`: farg och puts.
    - `grundfarg`: när grundfärg finns.
    - `grundolja`: trä, akrylat eller oljealkyd, skick skrapat, rent eller ommalning. Vid ommålning säger raden "bara på bart trä".
    - `slam-underlag`: farg slamfarg (Falu Original bara på omålat eller slamfärgat, sågat trä).
    - `burkar`: utfall farg.
    - `spill`: farg och puts.
    - `tegel`: utfall tegel.
    - `byte`: utfall byte.

### 2.7 `bastaBurkar` i `kvadratmeter.ts`

Signaturen blir `bastaBurkar(liter: number, storlekar: readonly number[] = BURKAR_LITER)`. Regeln ändras inte: uttömmande sökning, färst burkar inom `OVERSKOTT_GRANS`, vid lika antal minst över, annars minst liter totalt; den minsta storleken högst 20 st; burkarna i utdata största först. Den ska klara en, två och tre storlekar.

- Kvadratmeterräknaren anropar den som förut, utan andra parameter. `scripts/test-kalkyl-kvadratmeter.mjs` ska vara grönt oförändrat.
- Svarstiden: vid fasadens största möjliga behov (50 × 50 m, 12 m, pulpet 30 grader, lock, slamfärg, tre strykningar) ska ett anrop ta under 50 ms. Det får lösas med tak på antalet av de mindre storlekarna, men bara så att regressionstestet i 6.4 håller.

### 2.8 Formatering (exporteras; sidan använder bara dessa)

- `m2Text(n)`: en decimal med komma, mellanslag som tusentalsavgränsare. 98.2 → "98,2", 1234.56 → "1 234,6".
- `literText(n)`: som `talText` i `kvadratmeter.astro` (heltal utan decimal, annars en eller två). 33.67 → "33,67", 40 → "40".
- `burkText(burkar: Burk[])`: samma form som `burkRad` i `kvadratmeter.astro`, med räkneord för små tal: `[{10,3},{1,1}]` → "tre burkar om 10 liter och en om 1 liter". Orden är gränssnitt och får samma lydelse som kvadratmeterräknarens; hantverkaren får ändra dem, men då i båda.
- `delbarQuery(i): URLSearchParams`: alla nycklar i 2.5 i tabellens ordning, tal med komma. `bryt` och `indrag` bara vid mansard. `nock` och `vinkel` båda (så att bytet av `matt` i formuläret behåller läsarens andra tal). `stryk` alltid, även `auto`.

### 2.9 Publika strängar

All text läsaren ser och som modulen äger står i **ett** objekt, `export const TEXT`, med varje värde `'TEXT SAKNAS: <nyckel>'` tills hantverkaren skrivit det, och en kommentar per nyckel om när den visas och vad den ska säga. Ingen publik sträng i komponenten eller sidan utom de två gränssnittstexterna (standardvarningen och delatexten), rubrikerna "Därför blev svaret så", "Gör inte det här", "Så räknar jag", "Vad siffrorna vilar på", "Läs vidare", och etiketterna för `farg` som kommer ur `FARGTYPER`.

**Beskeden.** `TEXT.besked[utfall].rubrik` är en funktion `(v: BeskedVarden) => string` och `rad` en funktion av samma objekt. `beskedVarden(r)` exporteras:

```ts
interface BeskedVarden {
  utfall: Utfall;
  fasad: Fasad; farg: Farg; skick: Skick; takform: Takform;
  yta: string;                    // m2Text(fasadytaM2)
  maladYta: string | null;        // m2Text, null när faktorn är 1 eller utfallet saknar liter
  liter: string | null;           // literText(tackfarg.literRaknat)
  literAttKopa: string | null;
  burkar: string | null;          // burkText(tackfarg.burkar)
  strykningar: number | null;
  grundLiter: string | null; grundBurkar: string | null;
  fargNamn: string | null;        // TEXT.fargIMening[farg] eller silikatfärgens ord
}
```

Vad varje utfall ska säga (hantverkaren skriver; varje rubrik en mening med verb som säger vad läsaren ska göra, och **med tal**):

| Utfall | Rubrik | Rad |
|---|---|---|
| `farg` | Köp så här många liter, i de här burkarna. Bär `literAttKopa` och `burkar`. | Varför det blev fler liter än fasadytan antyder när `maladYta` finns (lockens kanter); att grundfärgen står under när `grundLiter` finns. Säger inte samma sak som rubriken |
| `puts` | Köp så här många liter silikatfärg. Bär `liter`. | Att burkstorlekarna inte är räknade och att ny puts ska härda först när skicket är rent |
| `tegel` | Låt teglet vara omålat. Bär `yta` (ytan finns, färgen behövs inte) | Varför, med Alcros frostsprängning; och vad som gäller om huset redan är målat eller teglet skadat (slamning och silikatfärg, pekar till "Därför") |
| `byte` | Ta reda på vad den nya färgen kräver innan du köper. Bär `yta` | Att räknaren bara räknar samma färgtyp som redan sitter där, och att slamfärg inte går på täckfärg |

Övriga nycklar, alla `TEXT SAKNAS`:

- `form.*`: etiketter och hjälprader, se avsnitt 3. Ordet "tak" får inte stå ensamt i en etikett där det kan betyda innertak (stil-och-design: ord med två betydelser); "takform", "takfot" och "takvinkel" går bra.
- `fasad.<Fasad>`: radioetiketterna. `lock` ska visa att lockläktpanel hör hit; `slat` att spontad panel och fasspont hör hit.
- `skick.<Skick>`: radioetiketterna, med guidens nivåer i orden (tvätt och lös färg, skrapning, ner till rent trä eller nytt virke, ny kulör, annan sorts färg).
- `stryk.auto` och `stryk.n(n)`: alternativen i listan.
- `takform.<Takform>`.
- `fargIMening.<Farg>`: färgens namn inne i en mening ("akrylatfärg", "oljefärg", "slamfärg").
- `fel.*`: `langd(min,max)`, `bredd(min,max)`, `hojd(min,max)`, `vinkel(min,max)`, `nock(minM,maxM)`, `matt-mansard`, `bryt`, `indrag(maxM)`, `antal(min,max)`, `heltal`, `matt-oppning(min,max)`, `avdrag`.
- `spalt.*`: `etikett-yta`, `rad-brutto(brutto, avdrag)`, `etikett-farg`, `rad-raknat(liter, maladYta|yta, strykningar, m2PerLiter)`, `rad-malad-yta(maladYta, faktor)`, `etikett-grund`, `rad-grund(liter, burkar)`, `rad-puts-burkar`, `pekrad`, `lank-mala-ute`.
- `gorInte.<GorInte>`: fyra stycken. `utan-avdrag` och `blanda-partier` har samma innebörd som i `kvadratmeter.ts` men får inte vara samma meningar (läsarens regel om återanvända block); `en-strykning`: tillverkarna vill ha två; `ny-puts`: 6 till 8 veckors härdning, Beckers.
- `regel.<RegelNyckel>`: `{ text, kallor: KallaRef[] }` där källorna är data (titel, adress, läst) och texten saknas. `kanten` säger K2-regeln i en mening och att Nordsjö anger 4–6 för nymålning. `profil-lock` säger att faktorn är egen räkning ur Svenskt Träs mått, med måtten.
- `antagande.<nyckel>`: kolumnen Vad i antagandetabellen.
- `steg`: "Så räknar jag", en lista som följer 2.6 steg 1 till 9, med tal byggda av konstanterna.

Testerna låser nycklarna och att varje värde är en icke-tom sträng. Påståenden om ordalydelsen skrivs när texten finns, som `{ todo: 'text' }` tills dess.

---

## 3. Formuläret `src/components/kalkyl/FasadytaForm.astro`

Props som `KvadratmeterForm`: `indata?`, `varden?` (råsträngarna ur adressen för varje talfält), `fel?`, `kompakt?`, `idPrefix?`, `knappText?` (standard "Räkna ut"). Klasser bara ur `stil.ts`. Ingen klient-JS. `<form method="get" action="/rakna/fasadyta/">`. Id via `id(namn)` med `idPrefix`; radionamnen är query-nycklarna.

### 3.1 Layout på 375 px

Innerbredden i det linjerade papperet är 311 px. Allt i en kolumn. Två fält bredvid varandra bara där det står nedan (`grid grid-cols-2 gap-3`, varje fält med egen etikett ovanför), aldrig tre.

```
┌ 311 px ───────────────────────────────┐
│ HUSET (legend)                         │
│ Längd, långsidan                       │  etikett
│ [ fält                    ] m          │  48 px, enheten som span
│ Gavelns bredd                          │
│ [ fält                    ] m          │
│ hjälp: sidan där taket syns i profil   │  bara full
│ Höjd från sockel till takfot           │
│ [ fält                    ] m          │
│ hjälp: där panelen slutar under        │  bara full
│        takutsprånget                   │
│                                        │
│ TAKFORM (legend)                       │
│ ( ) Sadeltak                           │  radio, en per rad, min-h-11
│ ( ) Pulpettak                          │
│ ( ) Valmat tak                         │
│ ( ) Mansardtak                         │
│ hjälp: halvvalmat, välj sadeltak       │  bara full
│                                        │
│ SÅ MÄTER DU TAKET (legend)             │
│ ( ) Höjden takfot–nock ( ) Vinkeln     │  radio `matt`, flex-wrap
│ Höjd till nock  │ Takvinkel            │  grid-cols-2
│ [ fält ] m      │ [ fält ] °           │
│ hjälp (full): valmat behöver inget     │
│                                        │
│ BARA MANSARDTAK (legend)               │  bara full
│ Till brytpunkten│ Indrag               │  grid-cols-2
│ [ fält ] m      │ [ fält ] m           │
│ hjälp: båda från takfoten/fasadlivet   │
│                                        │
│ FÖNSTER OCH DÖRRAR (legend)            │
│ Antal fönster                          │
│ [ fält ]                               │  max-w-28
│ Bredd           │ Höjd                 │  grid-cols-2, bara full
│ [ fält ] m      │ [ fält ] m           │
│ Antal dörrar                           │
│ [ fält ]                               │
│ Bredd           │ Höjd                 │  bara full
│ [ fält ] m      │ [ fält ] m           │
│                                        │
│ FASADEN (legend)                       │
│ ( ) lock  ( ) slät  ( ) puts ( ) tegel │  en per rad
│                                        │
│ FÄRGEN (legend)                        │
│ ( ) akrylat ( ) oljealkyd ( ) slamfärg │  en per rad, FARGTYPER-etiketterna
│ hjälp: gäller trä; puts räknas med     │  bara full
│        silikatfärg                     │
│                                        │
│ FASADENS SKICK (legend)                │
│ ( ) … fem alternativ, en per rad       │
│                                        │
│ Strykningar                            │
│ [ select: auto, 1, 2, 3        ▾]      │  bara full
│                                        │
│ [ Räkna ut ]                           │
└────────────────────────────────────────┘
```

Detaljer:

- Varje grupp är `<fieldset>` med synlig `<legend>`. Varje talfält har `<label for>` ovanför, `type="text" inputmode="decimal"` (antalen `inputmode="numeric"`), `FALT_KLASS`, enheten som `<span>` efter fältet.
- Fel under fältet i `FEL_KLASS` med id `{idPrefix}{nyckel}-fel` och `aria-describedby` på fältet; fältet får `ramKlass(true)`. `fel.matt` står under legenden "Så mäter du taket" och kopplas till båda radioknapparna. Hjälprad och fel på samma fält: båda id:na i `aria-describedby`.
- Nock- och vinkelfältet står båda alltid, med sina egna värden. Radioknappen avgör vilket som räknas; det andra valideras inte. Mansardfälten står alltid i fullt format och är tomma som standard.
- Värdena i talfälten kommer ur `varden` (som de skrevs), valen ur `indata`.
- **Kompakt** (i guiden): Huset (tre fält), Takform med **tre** alternativ (sadel, pulpet, valmat) och under dem en rad `TEXT.form['kompakt-mansard']` med länk till `/rakna/fasadyta/?takform=mansard`, "Så mäter du taket", Antal fönster, Antal dörrar, Fasaden, Färgen, Fasadens skick. Inga hjälprader, inga öppningsmått, ingen strykningslista, inga mansardfält. Det som inte renderas skickas inte och tas ur `STANDARD`.

---

## 4. Sidan `src/pages/rakna/fasadyta.astro`

Som `u-varde.astro`: `export const prerender = false`, `Astro.locals.sidtyp = 'verktyg'`, `Cache-Control: public, s-maxage=3600, stale-while-revalidate=86400` på alla svar, `reklam={false}`, `bred={true}`, brödsmulor Hantverkstips / Räkna själv / `VERKTYGSNAMN`, `ogBild={verktygsDelningsbild(SLUG)}`, `<StrukturData slot="head" data={verktyg({ url, namn: VERKTYGSNAMN, beskrivning: BESKRIVNING })} />`. Ingen produkt, inget reklamband.

```ts
const SLUG = 'fasadyta';
const VERKTYGSNAMN = 'TEXT SAKNAS: verktygsnamn';   // SEO:s fras
const BESKRIVNING = 'TEXT SAKNAS: beskrivning';     // 120 till 155 tecken
const titel = 'TEXT SAKNAS: titel';                 // högst 60 tecken, SEO:s fras
```

### 4.1 Flöde

```ts
const q = Astro.url.searchParams;
const { indata } = tolkaQuery(q);
const resultat = raknaFasadyta(indata);
const fel = resultat.status === 'ogiltig' ? resultat.fel : {};
const visatIndata = resultat.status === 'ogiltig' ? STANDARD : indata;
const visat = raknaFasadyta(visatIndata);   // alltid ok
```

Vid `ogiltig` står fälten kvar med läsarens värden och felen under, och spalten visar standardsvaret med standardvarningen överst, ordagrant: "Ett av fälten gick inte att läsa, så jag visar standardvärdena tills du rättat det." `varden` byggs som `faltVarde()` i `kvadratmeter.astro`.

Delbar adress: `new URL('/rakna/fasadyta/?' + delbarQuery(visatIndata), Astro.site ?? Astro.url)` i ett skrivskyddat fält, delatexten under ordagrant: "Dina värden ligger i adressen. Markera den och kopiera, så får den du skickar länken till samma svar."

### 4.2 Ordningen på sidan

1. Sidhuvudet som u-värde: H1 och ingress (TEXT SAKNAS) i 7/12, varumärkesbilden i 5/12 från 1024 px, under ingressen på mobil, `alt=""`, `fetchpriority="high"`, utan `loading="lazy"`.
2. `<Faktaruta variant="kortsvar">` (TEXT SAKNAS, tre till fem meningar, en `<Markering>`). Ska säga båda ytorna och varför de skiljer sig.
3. `<div class="linjerat mt-8 lg:grid lg:grid-cols-2 lg:gap-8">` med formuläret och spalten (4.3).
4. H2 "Därför blev svaret så" (`id="darfor-blev-svaret-sa"`) (4.4).
5. H2 "Gör inte det här" när `gorInteDetHar` inte är tom: raderna som stycken.
6. H2 "Så räknar jag" (`id="sa-raknar-jag"`): skissen `<Illustration namn="rakna/fasadyta" alt={SKISS_ALT} bildtext={SKISS_BILDTEXT} />` när både skiss och varumärkesbild finns, **och bara när `visat.takform === 'sadel'`** (skissen visar ett sadeltak; u-värde 12.38). Sedan `TEXT.steg` som numrerad lista och H3 "Vad siffrorna vilar på" med antagandetabellen (4.5).
7. H2 "Läs vidare": `/fasad/mala-om-huset/`, `/rakna/mala-ute/`, `/rakna/kvadratmeter/`. Länktexterna TEXT SAKNAS.
8. `<Faq>` med tre till fem frågor (TEXT SAKNAS). Ingen fråga som guiden besvarar ordagrant; guiden äger kostnadsfrågan.

### 4.3 Resultatspalten

`mt-8 border-t border-linje pt-6 lg:mt-0 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8`. Uppifrån:

1. Standardvarningen, bara vid `ogiltig`.
2. Beskedet: `rubrik(beskedVarden(visat))` i H3-stil (`<p>`), `rad(...)` under i `text-brod`.
3. `TEXT.spalt['etikett-yta']` i etikettstil, sedan på en baslinje `m2Text(fasadytaM2)` i `text-siffra` med `<Markering>` och "m²" i `text-ingress`. Under, i `text-liten text-blyerts-2`: `rad-brutto` (brutto och avdrag).
4. Utfall `farg`: etiketten `etikett-farg`, `literText(literAttKopa)` + "&nbsp;liter" i `text-h1` (andra talet, ingen Markering), `burkText` på raden under, sedan `rad-raknat` (liter räknat, strykningar, m²/l). När `profilfaktor` inte är 1: `rad-malad-yta` med den målade ytan.
5. Grundfärg när den finns: `etikett-grund` och `rad-grund` på en rad.
6. Utfall `puts`: etiketten, `literText(literRaknat)` liter i `text-h1`, `rad-raknat`, `rad-puts-burkar`.
7. Utfall `tegel` och `byte`: inget mer än beskedet och ytan.
8. `pekrad` till `#darfor-blev-svaret-sa`, länken "Så räknar jag" till `#sa-raknar-jag`, vid `farg` och `puts` länken `lank-mala-ute` till `/rakna/mala-ute/?farg={farg}` (vid puts utan parameter), och den delbara adressen.

Alla tal med `&nbsp;` mot sin enhet, `tabular-nums`, inga tabeller i spalten, ingen sidledsscroll på 375 px. **Spaltbudget: högst 900 tecken synlig text vid standardvärdena**, exklusive den delbara adressen. Utvecklaren rapporterar talet.

### 4.4 "Därför blev svaret så"

Först **uträkningen** som en `<ol>` (inte en tabell), en rad per steg med talen ur resultatet: väggarna (omkrets × höjd), gavelspetsarna (med t och vinkeln, båda, eller mansardens två delar), fönstren, dörrarna, fasadytan, den målade ytan, litern för täckfärgen och för grundfärgen. Radernas ord i `TEXT.darfor.*` som funktioner (TEXT SAKNAS), talen ur `m2Text` och `literText`. Rader utan innehåll i utfallet står inte med.

Sedan `regler` som en lista, varje rad med `TEXT.regel[nyckel].text` och källorna som länkar under (`rel="nofollow"`). Klasserna står en gång på `<ul>` som varianter, som u-värde 12.1; bara det som skiljer raderna står på `<li>`.

### 4.5 Antagandetabellen

`ANTAGANDEN: { nyckel: string; varde: string; typ: 'Källa' | 'Antagande'; kallor: KallaRef[] }[]` i modulen. `varde` byggs av konstanterna, aldrig för hand. `antagandenFor(r)` returnerar de rader som gäller svaret, i `ANTAGANDEN`s ordning. Sidan renderar dem i `<Tabellyta kolumner={3}>` med kolumnerna Vad, Värde, Källa eller antagande (typ plus källornas titel utan länk, semikolon emellan), och under tabellen varje förekommande källa en gång som `<a href rel="nofollow">{titel}</a>, {last}` på samma rad (u-värde 12.2 och 12.42). Tabellens klasser en gång på `<table>` (u-värde 12.1).

Rader och när de visas:

| Nyckel | Typ | Visas när |
|---|---|---|
| `gavelformel` | Antagande (egen räkning, plan geometri) | alltid |
| `vinkelgranser` | Antagande | sadel, pulpet |
| `halvvalm` | Antagande | sadel |
| `mansard-matt` | Antagande (formeln kräver höjder) | mansard |
| `fonster-matt` | Antagande | fönster > 0 och fönstermåtten har standardvärdet |
| `dorr-matt` | Antagande | dörrar > 0 och dörrmåtten har standardvärdet |
| `avdrag-verklig` | Källa (Nordsjö, Lovely Home, Proffsmagasinet) | fönster eller dörrar > 0 |
| `profil-lock` | Antagande med Svenskt Trä som källa | lock, utfall farg |
| `profil-slat` | Antagande | slat, utfall farg |
| `atgang-akrylat-malat`, `atgang-akrylat-sagat`, `atgang-oljealkyd-malat`, `atgang-oljealkyd-sagat`, `atgang-slamfarg`, `atgang-silikat` | Källa | den som räknats |
| `grund-sagat`, `grund-malat` | Källa | den som räknats |
| `kanten` | Antagande | farg |
| `strykningar-tackfarg`, `strykningar-slam` | Källa | den som gäller, när `stryk` är auto |
| `slam-skick` | Antagande | slamfärg och skick skrapat, rent eller kulor |
| `puts-strykningar` | Antagande | puts och `stryk` auto |
| `nytt-sagat` | Antagande | skick rent |
| `kulor-grans` | Antagande | skick kulor |
| `burkar-storlekar` | Antagande med källorna för storlekarna | farg |
| `burkar-overskott` | Antagande (samma 30 procent som kvadratmeterräknaren) | farg |
| `puts-burkar` | Antagande | puts |
| `inget-spill` | Antagande med Fasadum som källa för talet | farg, puts |
| `tegel` | Källa (Alcro forum, Wienerberger) | tegel |
| `byte` | Källa (Beckers) | byte |
| `granser` | Antagande | alltid |

`STANDARD` får ingen rad (u-värde granskning 1).

---

## 5. Registret

Efter posten `mala-ute` i `KALKYLATORER`:

```ts
{
  slug: 'fasadyta',
  namn: 'TEXT SAKNAS: register-namn',   // bär SEO:s fras; ankartext i guiden
  rad: 'TEXT SAKNAS: register-rad',     // en mening med verb, som till en granne
  /* Fasaden mäts och färgen köps innan målarsäsongen; mala-ute går från april.
     ANTAGANDE tills SEO har säsongsdata för frasen. */
  sasong: [3, 9],
  pelare: ['fasad'],
},
```

---

## 6. Testet `scripts/test-kalkyl-fasadyta.mjs`

`node --experimental-strip-types --test scripts/test-kalkyl-fasadyta.mjs`. Tolerans: m² ± 0,005, grader ± 0,001; liter exakt på två decimaler; burkar exakt. Facit är underlagets räkneexempel, omräknade 2026-09-28 med formlerna i 2.6 (egen räkning, alla stämmer med underlaget). Fönster 1,2 × 1,2 och dörr 1,0 × 2,1 där inget annat står.

### 6.1 Fallen

Hus A = 10 × 8 m, höjd 2,5, 10 fönster, 2 dörrar. Hus G = guidens hus, 10 × 8, höjd 2,8, samma avdrag.

| # | Indata | Facit |
|---|---|---|
| E1 | Hus A, sadel, vinkel 27, lock, oljealkyd, ommalning | t 2,0381, gavel 16,305, brutto 106,305, avdrag 18,6, fasadyta 87,705, målad 105,246, liter 30,07, burkar 3 × 10 + 1 × 1 = 31, utfall farg, grundfarg null |
| E1b | E1 med slat | målad 87,705, liter 25,06, 3 × 10 |
| E2 | Hus G, sadel, nock 2,0, slat, akrylat, ommalning | väggar 100,8, gavel 16, fasadyta 98,2, vinkel 26,565, liter 28,06, 3 × 10 |
| E2b | **STANDARD** (tom adress) | fasadyta 98,2, målad 117,84, liter 33,67, 4 × 10, utfall farg, gorInte `['blanda-partier']` |
| E2c | STANDARD med `stryk=3` | liter 50,50, 5 × 10 + 1 × 1 = 51, `strykningarValda` sant |
| E2d | STANDARD med vinkel 27 och `matt=vinkel` | gavel 16,305, fasadyta 98,505, målad 118,21, liter 33,77 |
| E3 | E1 med skick rent | grund 17,54 i 2 × 10; täck (6 m²/l) 35,08 i 4 × 10 |
| E3b | E1 med skick skrapat | grund (6) 17,54 i 2 × 10; täck (7) 30,07 i 3 × 10 + 1 × 1 |
| E4 | E1 med skick kulor | grund (7) 15,04 i 1 × 10 + 2 × 3 = 16; täck 30,07 |
| E5 | Hus A, pulpet, vinkel 15, slat, akrylat, ommalning | t 2,1436, gavel 38,585, fasadyta 109,985, liter 31,42, 3 × 10 + 1 × 3 = 33 |
| E5b | E5 med längd 8 och bredd 10 | t 2,6795, gavel 48,231, fasadyta 119,631 (taket lutar över B) |
| E6 | Hus A, valmat, lock, slamfarg, ommalning | gavel 0, fasadyta 71,4, målad 85,68, liter 28,56, 3 × 10 (storlekar 5 och 10), strykningar 1 |
| E6b | E6 med skick rent | strykningar 2, liter 57,12, 6 × 10 |
| E6c | E6 med vinkel 45 och `matt=vinkel` | gavel 0, samma svar som E6 (valmat läser inte taket) |
| E7 | Hus A, sadel 27, puts | utfall puts, målad 87,705, liter 58,47, burkar null, literAttKopa null |
| E8 | Hus A, mansard, nock 3,4641, bryt 1,7321, indrag 1,0 | gavel 34,641 (± 0,005), fasadyta 106,041 |
| E9 | E1 utan fönster och dörrar | fasadyta 106,305, målad 127,566, liter 36,45, 4 × 10, gorInte innehåller `utan-avdrag` |
| E10 | Hus A, sadel, vinkel 45 | t 4,0, gavel 32, fasadyta 103,4 |
| E11 | E1 med tegel | utfall tegel, fasadyta 87,705, tackfarg null, maladYtaM2 null, regler innehåller `tegel` |
| E12 | E1 med skick byte | utfall byte, tackfarg null, regler innehåller `byte` |
| E13 | Samma hus med slamfarg och skick byte | utfall byte (slamfärg på täckfärg ger besked, inte liter) |
| E14 | E7 med skick rent | gorInte innehåller `ny-puts` |
| E15 | E1 med `stryk=1` | gorInte innehåller `en-strykning`; E6 med `stryk=1` gör det inte |

Kontroller mellan fallen:
- Nock och vinkel ger samma svar: sadel, B 8, nock 2,0 ↔ vinkel 26,56505; gavel 16,000 båda vägar.
- `gavelyta('valmat', …)` är 0 för varje vinkel.

### 6.2 Ogiltigt, ett test per rad

| Indata | Fel på |
|---|---|
| längd 1, längd 51, längd "abc" | `langd` |
| höjd 13 | `hojd` |
| sadel, vinkel 61; pulpet, vinkel 31; pulpet, vinkel 2 | `vinkel` |
| sadel, B 8, `matt=nock`, nock 7,0 (över 6,93) | `nock`, och texten innehåller "6,93" och "0,35" |
| nock 0 | `nock` |
| valmat med vinkel 90 | ok (valideras inte) |
| mansard med `matt=vinkel` | `matt` |
| mansard utan `bryt` | `bryt` |
| mansard med bryt 3,5 och nock 3,4641 | `bryt` |
| mansard med indrag 4 (B 8) | `indrag` |
| fönster 2,5 | `fonster` |
| fönster 61 | `fonster` |
| 60 fönster 3 × 3 m på hus A | `fonster` och `dorrar` (avdraget ≥ brutto) |
| fönsterbredd 0,1 | `fonsterbredd` |
| längd 1 och vinkel 61 samtidigt | båda |

### 6.3 Guiden som facit (läses från disk)

`src/content/guider/fasad/mala-om-huset.mdx`:
- Steg 2: "100,8" är E2:s `vaggarBruttoM2`. Steg 3: "8 kvadratmeter" per gavelspets och "16 för båda" är E2:s gavel delad med två och hel. Summan: "98 kvadratmeter" är E2:s fasadyta avrundad till heltal.
- Faq-svaret "Hur mycket färg går det åt till en fasad?" innehåller "29 liter" = `Math.round(100 · 2 / ATGANG.akrylat.malat)`.
- Efter K1-rättningen: guiden innehåller "34 liter" = `Math.round(100 · PROFILFAKTOR.lock · 2 / 7)` och "fyra burkar". Skrivs som `{ todo: 'K1 guiden' }` tills hantverkaren skrivit.
- Efter K3-rättningen: slamfärgsmeningen innehåller "en om 5" eller motsvarande. `{ todo: 'K3 guiden' }`.
- Guiden innehåller `<Kalkylator namn="fasadyta" />` och inte `<Verktygskort kalkylator="kvadratmeter" />`.

### 6.4 Övrigt

- Konstanterna mot underlaget: `PROFILFAKTOR`, `ATGANG`, `GRUND_ATGANG`, `BURKAR_FARG`, fönster- och dörrmåtten, `VINKELGRANSER`.
- `bastaBurkar`, regressionstest: en referensimplementation i testet (den gamla funktionen kopierad, markerad som kopia) jämförs med den nya för varje behov 0,01 till 120 liter i steg om 0,01 med `BURKAR_LITER`; och en råsökning utan tak jämförs med den nya för 0,01 till 100 liter med `[1, 3, 10]` och `[5, 10]`. Samma svar i alla fall.
- `bastaBurkar` vid fasadens största behov: under 50 ms (mät med `performance.now()`, ett anrop efter ett uppvärmningsanrop).
- `tolkaQuery`: tom adress ger `STANDARD` och `harIndata: false`; "2,8 m" tolkas; `takform=kupol` ger sadel; `farg=traolja` ger akrylat; `stryk=4` ger auto; `bryt` saknas ger NaN.
- Rundtur: `tolkaQuery(delbarQuery(x))` ger samma indata för STANDARD, E5, E6b, E8 och E2c. `delbarQuery(STANDARD)` innehåller inte `bryt`.
- Formatering: `m2Text(98.2) === '98,2'`, `m2Text(1234.56) === '1 234,6'`, `literText(33.67) === '33,67'`, `literText(40) === '40'`, `burkText([{literPerBurk:10,antal:3},{literPerBurk:1,antal:1}])` är samma sträng som `burkRad` i `kvadratmeter.astro` ger för samma burkar (skriv förväntad sträng i testet).
- `TEXT`: varje `Utfall`, `GorInte`, `RegelNyckel`, `Fasad`, `Skick`, `Takform` och varje `ANTAGANDEN`-nyckel har en icke-tom sträng eller funktion som ger en icke-tom sträng; varje rubrik för E2b, E7, E11 och E12 innehåller minst en siffra.
- `antagandenFor`: E2b innehåller `profil-lock`, `atgang-akrylat-malat`, `kanten`, `fonster-matt`, `dorr-matt`, `halvvalm` och inte `atgang-slamfarg` eller `tegel`; E11 innehåller `tegel` och ingen `atgang-*`; E8 innehåller `mansard-matt` och inte `halvvalm`.
- `ANTAGANDEN` har en rad per konstant i 2.2, och varje rad med typ Källa har en `https`-adress.

---

## 7. Budget och kontroller

- Testet grönt; `scripts/test-kalkyl-kvadratmeter.mjs` grönt oförändrat.
- `npx astro check --minimumSeverity error`: 0 fel. `npm run kontrollera`: 0 fel, varningarna rapporteras.
- Sidan med `npm run dev` och `curl`, HTML rensad från `<script>` utom JSON-LD, `<style>`, `data-astro-source-file` och `data-astro-source-loc` (som u-värde 12.6):
  - 0 `<script>` utöver JSON-LD, ingen `.js`-referens.
  - **Sidans egen del högst 48 kB**, mätt som storleken på `/rakna/fasadyta/` minus storleken på `/404/` mätt på samma sätt, vid standard och vid `?takform=mansard&nock=3,4641&bryt=1,7321&indrag=1&fasad=lock&skick=rent`. Skalet är inte med i talet; det tar skalspecen. Med skalet på budgetens 6 kB blir sidan då under 66.
  - Inbäddningen lägger högst 8 kB på `/fasad/mala-om-huset/` (mät före och efter bytet av raden).
  - Utvecklaren rapporterar alla tre talen.
- Spalten högst 900 tecken vid standard.
- Varumärkesbilden under 12 kB (de andra ligger på 4 till 8), skissen under 40 kB utan `<text>`.
- 375 px: ingen sidledsscroll utom inuti `<Tabellyta>`, alla fält 48 px, fokusring synlig, varje fält med etikett.

---

## 8. Inbäddningen och korten

- `src/components/ui/Kalkylator.astro`: `import FasadytaForm from '../kalkyl/FasadytaForm.astro';`, `'fasadyta'` sist i `MED_FORMULAR`, och `{namn === 'fasadyta' && <FasadytaForm kompakt={true} idPrefix={prefix} knappText="Räkna ut" />}` efter u-värdets rad.
- `src/content/guider/fasad/mala-om-huset.mdx`, H2 "Fasadytan räknar du ut med omkrets, höjd och gavelspetsar": raden `<Verktygskort kalkylator="kvadratmeter" />` (i dag rad 135) **byts** mot `<Kalkylator namn="fasadyta" />`, på samma plats, med blankrad före och efter. Där har läsaren just räknat guidens hus för hand, och formulärets standard är samma hus. Ingen annan rad ändras av utvecklaren.
- **Stycket direkt efter** (i dag rad 137, "Räknaren är byggd för rum, men ett hus är samma räkning …") beskriver kvadratmeterräknaren och ska bort eller skrivas om. Det är text och hantverkarens. Bytet av raden committas inte förrän stycket är borta.
- `src/pages/rakna/kvadratmeter.astro` och `src/pages/rakna/mala-ute.astro`: en `<li>` först i listan under "Läs vidare", samma markup som listans andra poster, `href="/rakna/fasadyta/"`, länktext `TEXT SAKNAS` (hantverkaren skriver i sidan). I kvadratmeterräknaren är det vägen för den som landat där med ett hus; i måla ute är det mängden färg till samma fasad.
- **`<Verktygskort kalkylator="fasadyta" />` i syskonsidor:** i dag ingen. Fasadpelaren har två sidor, och den andra, `/fasad/dreva-fonster/`, handlar inte om ytan. Korten läggs i de två fasadsidor som står på tur (tvätta fasad och fasadfärg, affiliatebriefen avsnitt 1 och 3), ett per sida, i det avsnitt som nämner hur mycket färg eller hur stor yta. Koordinatorn skriver in det i deras briefer.
- Hubben `/fasad/` visar räknaren själv genom `pelare: ['fasad']`.

---

## 9. Bilderna

### 9.1 Skissen, uppdrag B

`src/assets/illustrationer-kallor/rakna/fasadyta.svg`, 600 × 360, blyerts på linjerat papper enligt DESIGN.md avsnitt 7, Caveat 500 i 24 px, konverteras av `npm run illustrationer`. Varumärkesbilden för måla ute visar en målad vägg med pensel; den här visar räkningen, inte målningen.

- **Motiv:** guidens enplanshus i enkel parallellperspektiv: gaveln rakt framifrån till vänster, långsidan snett bakåt till höger. Sadeltak med litet takutsprång. Tre fönster på långsidan, ett på gaveln, en dörr på långsidan, som raka rektanglar utan spröjs. Marklinjen rak, samma nivå under båda sidorna. Ingen skraffering på huset (skraffering är för mark).
- **Mått som byglar** i `blyerts-2`: under långsidan "10 m", under gaveln "8 m", lodrätt vid gavelns hörn "2,8 m" från sockel till takfot, lodrätt inne i gavelspetsen "2 m" från takfotens linje till nocken.
- **Det som pekar:** gavelspetsens triangel ritad om i `penna` 2 px längs sina tre sidor, och en kort pil i `penna` från triangeln till etiketten om spetsen. Inget annat i penna.
- **Nyckeltalet** uppe till höger med gul markering: "98,2 m²". Ingen annan siffra markerad.
- **Övriga etiketter** i handskrift, blyerts: vid spetsen hantverkarens ord för att gavelspetsen räknas med och "16 m²"; vid fönstren hantverkarens ord för att fönster och dörrar dras av. **Etiketterna ordagrant: TEXT SAKNAS, skrivs av hantverkaren.** Talen är fasta: 10 m, 8 m, 2,8 m, 2 m, 16 m², 98,2 m².
- `aria-label` på rotelementet är sidans `SKISS_ALT` ordagrant. Alt under 125 tecken och bildtext: TEXT SAKNAS.
- Under 40 kB efter `npm run illustrationer`.

### 9.2 Varumärkesbilden, uppdrag A

`src/assets/illustrationer/rakna/varumarke/fasadyta.svg`, 600 × 360, ingen källfil. Logotypens stil som `varumarke/u-varde.svg` och `varumarke/kvadratmeter.svg`: konturer i `blyerts` 2 px med runda ändar, `tumstock` som enda fyllda färg, transparent bakgrund, ingen text, inga tal, ett rött pennstreck som signatur så som de befintliga gör.

- **Motiv:** ett hus rakt framifrån från gaveln: en bred vägg och sadeltakets triangel ovanpå, med takfallen som två kraftiga linjer som skjuter ut en bit utanför väggen. **Hela gavelväggen, rektangeln och spetsen, är fylld med `tumstock`** som en enda form. Ett fönster och en dörr är urtag i fyllningen (fyllningen som en `path` med `fill-rule="evenodd"`, hålen visar sidans papper), med blyertskontur. Det säger ytan minus öppningarna utan ett ord.
- Till höger om huset, på samma marklinje, en färgburk i kontur med handtagsbåge, locket av, och färgytan överst som en fylld ellips i `tumstock`.
- Den gula gaveln är den största formen och känns igen ensam vid 343 px. Burken är den näst största.
- Motivets bbox-kvot 1,72 ± 0,05, fyller 90 till 94 procent av bredden och 88 till 90 procent av höjden. Kvoten nås med takutsprånget och burken, aldrig med tom mark. Marklinjen en rak linje.
- Inga pyttedetaljer: ingen panel, inga spröjs, ingen skorsten.
- Under 12 kB.

Jag rendrar båda på 343 px och godkänner mot DESIGN.md avsnitt 7 innan de räknas som klara.

---

## 10. Godkännandekriterier (min granskning)

1. Varje konstant i 2.2 och 2.4 namngiven med Källa eller ANTAGANDE; ingen räkning i en `.astro`-fil; `bastaBurkar` importerad från `kvadratmeter.ts`, inte kopierad.
2. Testet grönt med 6.1 till 6.4; kvadratmeterräknarens test grönt oförändrat; astro check 0 fel; kontrollera 0 fel.
3. Fältnamn, query-nycklar och id exakt som i 2.5 och 3; en delad adress ger samma svar som formuläret; bytet mellan nock och vinkel behåller båda talen.
4. Tillstånden: tom adress (guidens hus), ifyllt, ogiltigt (fälten kvar, fel under rätt fält, standardsvar med varningen), utanför gränserna, alla fyra utfall, mansard med och utan brytpunkt.
5. 375 px: formuläret och spalten utan sidledsscroll, spalten högst 900 tecken, fokus synligt, varje fält med etikett; kompakt form i guiden likaså.
6. Budgeten i avsnitt 7.
7. Bilderna mot 9.1 och 9.2.
8. `grep -r "TEXT SAKNAS" src/` ger bara träffar i filerna från den här specen, och listan lämnas till hantverkaren. **Sidan, registerposten och inbäddningen committas inte förrän listan är tom, K1 och K3 är skrivna i guiden och stycket på rad 137 är borta.**

---

## 11. Till hantverkaren (texten, inte koden)

- Alla `TEXT SAKNAS` i `fasadyta.ts`, sidans konstanter, länktexterna i "Läs vidare" på tre sidor, registerposten, skissens etiketter, alt och bildtext. Fras, titel och namn från SEO och GEO-agenten.
- Guiden `mala-om-huset.mdx`: K1-raderna i tabellen i avsnitt 0, K3, och stycket på rad 137 bort eller omskrivet till en mening som leder in i formuläret.
- Källorna i guidens `kallor` får Svenskt Trä, byggbeskrivningar, utvändiga träpaneler (https://www.byggbeskrivningar.se/utvandigt/utvandiga-trapaneler/, uppdaterad 2021-12-27) för panelfaktorn, och Happy Homes Falu Rödfärg 5 l (https://www.happyhomes.se/farg/utomhusfarg/fasadfarg/falu-rodfarg-rod-5l, 2026-09-28) för K3.

## 12. Till koordinatorn

- Underlagsarbetaren läser före publicering: Beckers Mineral Silikatfärgs datablad ordagrant om strykningarna (Att verifiera 6), och gärna Alcro Bestås datablad (Att verifiera 3). Inget av dem stoppar bygget; ändras ett tal ändras konstanten och testet, inte koden.
- `docs/VERKTYGSPLAN.md` rad 38: produktkolumnen säger redan "Ingen".
- Verktygskort i briefen för tvätta fasad och fasadfärg (avsnitt 8).

---

## 13. Granskning av uppdrag A och beslut om burkar och silikatfärg (UX och bygge-agenten, 2026-09-28)

Granskat: `fasadyta.ts`, testet, `FasadytaForm.astro`, `fasadyta.astro`, `bastaBurkar` i `kvadratmeter.ts`, registerposten, `Kalkylator.astro`, skissen och varumärkesbilden. Kört: fasadtestet (52 gröna, 3 todo), kvadratmetertestet (19 gröna, oförändrat), `npx astro check --minimumSeverity error` (0 fel), `npm run kontrollera` (0 fel; den enda nya varningen är `BESKRIVNING` på 24 tecken, TEXT SAKNAS). Sidan i dev och headless Edge på 375 px: standard, mansard, mansard utan brytpunkt, tegel, puts, byte, felaktiga fält, största huset. Ingen sidledsscroll utanför `<Tabellyta>`, alla fält 48 px, varje fält har etikett, fokusringen syns (3 px penna) och tabbordningen följer formuläret, spalten, delafältet och källorna. 0 `<script>` utöver JSON-LD, ingen `.js`-referens. Sidans egen del 29,6 kB vid standard och 30,5 kB vid mansard (budget 48), med platshållare; mäts igen när texten finns. `bastaBurkar` vid största behovet: 11,5 ms med 1/3/10 och 15,0 ms med 0,9/2,7/9.

Formeln, valideringen, avrundningen och tolkningen av adressen stämmer med 2.5 till 2.8. Varumärkesbilden är godkänd (13.4). Resten står i 13.1.

### 13.1 Ändringar, utvecklaren

Filer som får röras: de i tabellen. Kontroller efteråt: fasadtestet och kvadratmetertestet gröna, astro check 0 fel, kontrollera 0 fel, sidan och guiden mätta enligt avsnitt 7. Bygget körs inte.

| # | Fil och rad | Ändring |
|---|---|---|
| 1 | `src/pages/rakna/fasadyta.astro` rad 145 | `[&_span:last-child]:text-liten [&_span:last-child]:text-blyerts-2` byts mot `[&_span+span]:text-liten [&_span+span]:text-blyerts-2`. I dag får en regel utan källor (`vaggar`, `gavel-*`) källradens lilla grå stil på sin egen text |
| 2 | `fasadyta.astro` rad 353–355 | Pekraden är en ensam länk och ska ha 44 px klickyta (DESIGN.md bilaga A punkt 6): `inline-flex min-h-11 items-center` på `<a>`, som länken "Så räknar jag" under |
| 3 | `FasadytaForm.astro` rad 185 och 204 | Den kompakta länken till mansardtaket landar i dag på `?takform=mansard`, som ger fel på brytpunkt och indrag och standardvarningen fast läsaren inte skrivit något fel. Länken blir `href="/rakna/fasadyta/#takform"`, och takformens `<fieldset>` får `id={id('takform')}`. Kommentaren vid `TEXT.form['kompakt-mansard']` säger att läsaren väljer mansardtak och fyller i brytpunkten på verktygssidan |
| 4 | `fasadyta.ts` rad 1045 | `nytt-sagat` bara när färgen är akrylat eller oljealkyd: `if (i.skick === 'rent' && i.farg !== 'slamfarg')`. Vid slamfärg hänger inget tal på antagandet |
| 5 | `fasadyta.ts` rad 1054 | `kulor-grans` flyttas in i blocket för `utfall === 'farg'`. På puts ändrar kulörbytet inget tal |
| 6 | `fasadyta.ts` rad 1388 | `en-strykning` bara vid `utfall === 'farg' && i.farg !== 'slamfarg'`. Beckers vill ha en ytstrykning på tät puts (13.3), så raden stämmer inte för puts |
| 7 | `fasadyta.ts` rad 1404 | Regeln `strykningar` bara vid `utfall === 'farg'`; källorna är träfärgernas. Silikatfärgens strykningar står i regeln `silikat` |
| 8 | `fasadyta.ts` rad 183–187 | `ALCRO_BESTA` blir produktfaktabladet: titel `Alcro, Bestå Täckfärg, produktfaktablad (version 100724)`, adress `https://dam-cdn.ppg.com/adaptivemedia/rendition?id=4db5407f1a3c9ee8e3a4838cb0fc20fe14307bb4`, läst 2026-09-28. Ordet "sökutdrag" och kommentaren om utdrag försvinner, också i kommentaren över `ATGANG` (rad 330–335) |
| 9 | `fasadyta.ts`, nya källor | `ALCRO_BESTA_SIDA`: `Alcro, Bestå Täckfärg, produktsida`, `https://alcro.se/produkter/besta-tackfarg`, 2026-09-28, för burkstorlekarna. `PROFFS_PERFEKT_FASAD`: `Proffsmagasinet, Beckers Perfekt Fasad halvmatt faluröd 10 l`, `https://www.proffsmagasinet.se/bygg-interior/farg-tapeter/utomhusfarg/fasadfarg/beckers-perfekt-fasad-fasadfarg-halvmatt-falurod-3141021`, 2026-09-28 |
| 10 | `fasadyta.ts` rad 188–192 och varje användning (rad 822, 835, 962, 1002) | `LOVELY_BESTA` tas bort. Åtgången bärs av Alcros faktablad, burkarna av Alcros produktsida |
| 11 | `fasadyta.ts` rad 228–232 | `BECKERS_SILIKAT` blir produktdatabladet: titel `Beckers, Mineral Silikatfärg, produktdatablad (version 20240708)`, adress `https://beckers.se/sites/default/files/pim/documents/Mineral_Silikatf%C3%A4rg_SV_PDS_Beckers_0.pdf` |
| 12 | `fasadyta.ts` rad 378–390 | `BURKAR_FARG` enligt 13.2, med kommentaren därifrån |
| 13 | `fasadyta.ts` rad 369–370 | Kommentaren över `STRYK_AUTO.silikat` enligt 13.3. Talet 2 står kvar |
| 14 | `fasadyta.ts` rad 416–421 | Kommentaren över `STANDARD`: "… 33,67 liter och fyra burkar om 9 liter, 36 liter" |
| 15 | `fasadyta.ts` rad 995 | `puts-strykningar`: typ `Källa`, källa `BECKERS_SILIKAT`, värdet `String(STRYK_AUTO.silikat)` som förut |
| 16 | `fasadyta.ts` ANTAGANDEN, efter `puts-strykningar` | Ny rad `silikatbinder`, typ `Antagande`, värdet `'0 l'`, källa `BECKERS_SILIKAT`, visas vid utfall `puts`. Ny nyckel i `TEXT.antagande` med kommentaren: grunden med Primex Silikatbinder köps för sig och ingår inte i litern; databladet anger ingen åtgång |
| 17 | `fasadyta.ts` rad 833 och 838 | `grundolja` får `ALCRO_BESTA` som andra källa ("ändträ, skarvar och spikhuvuden"). `byte` får `ALCRO_BESTA` ("samma färgtyp som använts innan") och `BECKERS_SILIKAT` ("Måla ej på organiska underlag") |
| 18 | `fasadyta.ts` rad 999–1003 och 835 | `burkar-storlekar`: värdet byggs av `BURKAR_FARG` som förut (blir "0,9, 2,7, 9 l; 5, 10 l"), källorna `ALCRO_BESTA_SIDA`, `PROFFS_PERFEKT_FASAD`, `HAPPY_FALU_5`, `KBYGG_FALU_10`. Regeln `burkar` samma källor |
| 19 | `scripts/test-kalkyl-fasadyta.mjs` | Facit enligt 13.2. Nya påståenden: E7 med `stryk=1` ger ingen `en-strykning`; E7:s regler innehåller `silikat` men inte `strykningar`; `antagandenFor(E7)` innehåller `silikatbinder`; E6b innehåller inte `nytt-sagat`, E3 gör det; E7 med skick kulor innehåller inte `kulor-grans`. Råsökningen jämförs också med `[0.9, 2.7, 9]` för 0,01 till 60 liter. Tidstestet körs med den nya serien i `BURKAR_FARG.akrylat` |
| 20 | `src/content/guider/fasad/mala-om-huset.mdx` rad 135 | `<Verktygskort kalkylator="kvadratmeter" />` byts mot `<Kalkylator namn="fasadyta" />` nu, enligt avsnitt 8, så att inbäddningen går att mäta (högst 8 kB) och tabba på 375 px. Todo-testet för inbäddningen blir ett vanligt test. Commit väntar som förut på stycket på rad 137 |
| 21 | `src/pages/rakna/kvadratmeter.astro`, `src/pages/rakna/mala-ute.astro` | `<li>` först under "Läs vidare" till `/rakna/fasadyta/`, länktext `TEXT SAKNAS`, enligt avsnitt 8. Saknas i leveransen |

Utvecklarens osäkerheter, besked:

1. `beskedVarden(r, i)` och `antagandenFor(r, i)` med indatan som andra parameter: **godkänt.** Resultatet bär inte fasad, färg och skick, och ska inte göra det. 2.9 läses så.
2. Nytt fel `'nock-tal'` (nock tom, noll eller negativ på mansardtak, eller nocken ogiltig när bredden är ogiltig): **godkänt.** `nock(minM, maxM)` har inga gränser att visa i de fallen.
4. Villkoren: `nytt-sagat` och `kulor-grans` ändras enligt rad 4 och 5, `en-strykning` enligt rad 6. Övriga villkor i `antagandenFor` stämmer med 4.5.
6. Tusentalsavgränsaren U+00A0, samma som `src/lib/format.ts`: **godkänt.** `tillTal` tål den (`\s` täcker U+00A0), så ett inklistrat "1 234" tolkas.

Tillägg utvecklaren gjort utan spec, godkända: `TEXT.antagandeVarde` för rader utan konstant, `TEXT.spalt['dela-etikett']`, `TEXT.fargIMening.silikat`.

### 13.2 Beslut: burkstorlekar per färgtyp

**Beslut.** Räknaren räknar täckfärg på trä (akrylat och oljealkyd) och grundfärg med **0,9, 2,7 och 9 liter**. Slamfärg står kvar på **5 och 10 liter**. Silikatfärg på puts visar fortfarande liter utan burkar (Beckers storlekar finns bara i bildernas filnamn, och bindern ingår inte).

Varför 0,9/2,7/9:

- Felet ska ligga åt rätt håll, samma princip som lockpanelen i K1. Den som får ett förslag i 9-litersburkar och köper 10 liter får mer, aldrig mindre: varje burk i 1/3/10-serien är minst lika stor som sin motsvarighet i 0,9/2,7/9. Omvänt tar färgen slut: 18,5 liter blir två burkar om 10 i den gamla serien, men två om 9 är 18 liter.
- En fasad målas nästan alltid i en bruten kulör, och kulörerna blandas i brytbaser. Alcro Bestås baser A och C finns bara i 0,9, 2,7 och 9 liter (Alcros produktsida, kontrollen 2026-09-28); Jotun Drygolin säljs i 2,7 och 9. Bara färdigtonad vit (Bestå 313) och färdigblandade kulörer som Proffsmagasinets Beckers Perfekt Fasad kommer i 10 liter.
- Antalet stora burkar för guidens hus ändras inte: fyra i båda serierna.
- Undantaget står i antagandetabellens text (hantverkaren): Nordsjö Tinovas mellanburk är 2,5 liter, 0,2 liter mindre än 2,7.

Grundfärgen följer täckfärgens serie: grundfärg bryts ofta mot täckfärgens kulör, och grundfärgens egna burkar är inte hämtade. ANTAGANDE, som förut.

Konstanten:

```ts
/**
 * Burkstorlekarna i liter per färg. Källa, lästa 2026-09-28: Alcro, Bestå
 * Täckfärg, produktsida: brytbaserna för kulör 0,9, 2,7 och 9 l, färdigtonad
 * vit 313 i 1, 3 och 10 l; Proffsmagasinet, Beckers Perfekt Fasad i 10 l;
 * Happy Homes, Falu Rödfärg röd 5 l; K-Bygg, Falu Rödfärg Original 10 l.
 * ANTAGANDE: räknaren räknar trä och grund med brytbasernas 0,9, 2,7 och 9 l,
 * så att den som köper 1, 3 eller 10 l får mer och aldrig mindre. Samma
 * storlekar för oljefärg och grundfärg är ANTAGANDE.
 */
export const BURKAR_FARG = {
  akrylat: [0.9, 2.7, 9],
  oljealkyd: [0.9, 2.7, 9],
  grund: [0.9, 2.7, 9],
  slamfarg: [5, 10],
} as const;
```

Nytt facit i 6.1 (egen räkning med `bastaBurkar`, 2026-09-28; liter och ytor oförändrade):

| # | Täckfärg | Grundfärg |
|---|---|---|
| E1 | 30,07 l → 4 × 9 = 36 | |
| E1b | 25,06 l → 3 × 9 = 27 | |
| E2 | 28,06 l → 3 × 9 + 1 × 2,7 = 29,7 | |
| E2b (STANDARD) | 33,67 l → 4 × 9 = 36; `gorInte` fortfarande `['blanda-partier']` | |
| E2c | 50,50 l → 6 × 9 = 54 | |
| E2d | 33,77 l → 4 × 9 = 36 | |
| E3 | 35,08 l → 4 × 9 = 36 | 17,54 l → 2 × 9 = 18 |
| E3b | 30,07 l → 4 × 9 = 36 | 17,54 l → 2 × 9 = 18 |
| E4 | 30,07 l → 4 × 9 = 36 | 15,04 l → 2 × 9 = 18 |
| E5 | 31,42 l → 4 × 9 = 36 | |
| E9 | 36,45 l → 4 × 9 + 1 × 0,9 = 36,9 | |
| E6, E6b, E6c | oförändrade (slamfärg 5/10) | |

**Guiden `mala-om-huset.mdx` för guidens hus.** Ersätter burkarna i K1-tabellen; hantverkaren skriver. Litern står kvar: 29 liter slät panel, 34 liter lockpanel (100 m², 7 m²/l, två strykningar, faktor 1,20).

| Var | Blir |
|---|---|
| Stycket Färgen, rad 157, och Faq "Hur mycket färg …", rad 218 | Slät panel: 29 liter, **tre burkar om 9 liter och en om 2,7** (29,7 l). Lockpanel: 34 liter, **fyra burkar om 9 liter** (36 l). Den som köper tiolitersburkar, färdigtonad vit eller färdigblandad kulör, klarar slät panel med tre (30 l) och lockpanel med fyra (40 l). Storlekarna förklaras som brytbasernas: kulörerna blandas i 0,9, 2,7 och 9 liter |
| Samma stycke: "tioliters" och Alcros 2 299 kr | Underlagsarbetaren kontrollerar före skrivningen om Lovely Homes 2 299 kr gäller vit 313 i 10 l eller bas i 9 l (kontrollen fann "3 liter" och "10 liter" i en sammanfattning, inte ordagrant), och hämtar priset för Bestå 2,7 l eller 3 l på samma sida, med datum |
| Kronorna: kortSvar rad 10, stycket Färgen, summeringen rad 167, Faq rad 217 | **Övre kanten ändras inte** från K1: fyra burkar om 10 à 3 319 = 13 276, alltså 13 000 i färg, 31 000 själv, 39 000 med målare, 130 kr/m². **Nedre kanten** är slät panel. Gäller 2 299 kr vit 10 l räcker tre burkar, 3 × 2 299 = 6 897, och "7 000" står kvar som i K1. Gäller 2 299 kr bas 9 l blir nedre kanten 3 × 2 299 + priset för 2,7 l, avrundat nedåt till hela tusental i löptexten och till hela tiotal kronor per kvadratmeter i Faq; summeringens nedre summor räknas om med samma tal och samma tillägg som i K1 (+ 2 300 + 16 000 själv, + 7 500 + 18 200 med målare) |
| Slamfärgen, rad 159 (K3) | Oförändrad: tre om 10 och en om 5 (slät, 33,33 l), fyra om 10 (lock, 40 l), 2 596 och 2 796 kr per strykning |

Testet i 6.3: "34 liter" och "fyra burkar" gäller fortfarande. Todo K1 får dessutom påståendet att guiden nämner 2,7 för slät panel, skrivet när hantverkaren skrivit.

### 13.3 Beslut: silikatfärgens strykningar

**Beslut.** `STRYK_AUTO.silikat` står kvar på **2**. Märkningen ändras från ANTAGANDE till källa, och texten om porös puts rättas. Inga tal ändras.

Beckers produktdatablad (version 20240708, kontrollen 2026-09-28): porös yta grundas med Primex Silikatbinder och vatten 1:1, utan färg, och får sedan två strykningar silikatfärg, mellan och yta. Tät yta grundas med Silikatbinder och silikatfärg 1:2 och får en ytstrykning. Egen räkning: tät yta tar 1 + 2/3 ≈ 1,67 strykningar färg, om grundblandningen räcker lika långt som färgen (ANTAGANDE; databladet anger ingen åtgång för blandningen). Två strykningar är alltså exakt för porös yta och en tredjedel för mycket för tät. Felet ligger åt rätt håll, och läsaren behöver inte veta om putsen är porös eller tät för att få ett tal som räcker.

Kommentaren över konstanten:

```ts
 * silikat 2: Källa: Beckers Mineral Silikatfärg, produktdatablad version
 *   20240708. Porös puts: grund av Primex Silikatbinder och vatten 1:1 utan
 *   färg, sedan två strykningar färg. Tät puts: grund av Silikatbinder och
 *   färg 1:2, sedan en strykning, alltså 1 + 2/3 strykning färg (egen räkning,
 *   ANTAGANDE att grundblandningen räcker lika långt). 2 är exakt för porös
 *   yta och något för mycket för tät. Silikatbindern ingår inte i litern.
```

Det som ändras i texten (hantverkaren):

- Raden "Silikatfärgens strykningar" under "Det som saknar källa" i avsnitt 0 gäller inte längre. "Porös puts tar en till" är fel: porös puts tar två strykningar färg och en grund av binder och vatten utan färg.
- `regel.silikat` säger åtgången 3 m²/l (nedre kanten av 3 till 5), att räknaren räknar två strykningar färg, att porös puts grundas med Silikatbinder och vatten och tät puts med Silikatbinder och färg, och att bindern köps för sig.
- `antagande.puts-strykningar` säger att två är exakt för porös yta och lite för mycket för tät. `antagande.silikatbinder` enligt 13.1 rad 16.
- `besked.puts.rad` nämner bindern om spaltbudgeten tillåter; annars står den bara i "Därför blev svaret så".
- `regel.byte` får Beckers "Måla ej på organiska underlag" för puts som målats med plast- eller akrylatfärg: det är skicket byte.
- `gorInte.en-strykning` gäller efter 13.1 rad 6 bara trä, så texten behöver inte ta hänsyn till puts.

### 13.4 Bilderna

**Varumärkesbilden** `varumarke/fasadyta.svg`: **godkänd.** Rendrerad i 343 och 600 px: huset och burken känns igen på en sekund, den gula gaveln är största formen och burken näst största, urtagen för fönster och dörr läses som öppningar. Motivets bbox 552 × 324 px, 92,0 procent av bredden och 90,0 av höjden, kvot 1,704, marginaler 24 och 24 i sidled, 18 och 18 i höjdled. 4,1 kB, ingen `<text>`, tunnaste linje 1,4. Kvar: `aria-label` på rotelementet är TEXT SAKNAS och skrivs av hantverkaren (DESIGN.md avsnitt 7: filen har `role="img"` och `aria-label` fast sidan visar den med `alt=""`).

**Skissen** `rakna/fasadyta.svg`: **retur, motivet ritas om.** Utvecklarens misstanke stämmer. I parallellperspektivet stiger långsidans fot från y 300 till 262 medan marklinjen fortsätter rakt till x 584, så långsidan ser ut att sväva 38 px över marken i bortre hörnet. Kravet i 9.1, "marklinjen rak, samma nivå under båda sidorna", går inte att förena med en långsida som går snett bakåt; felet är specens. Dessutom blir 10 m kortare på papperet än 8 m (143 mot 208 px), fel budskap i en bild som förklarar mått, och pilen pekar bort från triangeln i stället för på den.

Ny 9.1, motivet. Ersätter punkterna Motiv, Mått som byglar och Det som pekar; resten av 9.1 gäller:

- **Två vyer bredvid varandra på en gemensam marklinje**, som snickarens fasadritning: gaveln rakt framifrån till vänster, långsidan rakt framifrån till höger. Ingen perspektivlinje. Skala 24 px per meter i båda vyerna, så att 10 m blir längre än 8 m.
- Marklinjen: blyerts 2 px, y ≈ 300, från x 56 till 584.
- Gaveln: x 100 till 292 (8 m), vägg y 233 till 300 (2,8 m), nocken i (196, 185), 2 m över takfoten. Takfallen skjuter ut cirka 10 px utanför väggen. Ett fönster mitt på.
- Långsidan: x 324 till 564 (10 m), vägg y 233 till 300. Taket sett från långsidan: takfotslinjen på y 233 från x 314 till 574, nocklinjen på y 185 från x 318 till 570, och de två korta gavelkanterna mellan dem. Tre fönster och en dörr som står på marklinjen. 32 px mellan vyerna.
- Mått som byglar i blyerts-2 1,5 px: "8 m" under gaveln och "10 m" under långsidan, båda på y ≈ 318; "2,8 m" lodrätt till vänster om gaveln; "2 m" lodrätt inne i spetsen från takfotens linje till nocken.
- **Det som pekar:** gavelspetsens triangel omritad i penna **2,5 px** (DESIGN.md avsnitt 7; 9.1 sade 2), och en kort pil i penna **från etiketten till triangeln**, med spetsen inne i triangeln.
- Etiketterna: vid spetsen hantverkarens ord och "16 m²"; eftersom bara en gavel syns ska orden säga att talet gäller båda spetsarna. Ovanför långsidans tak hantverkarens ord om att fönster och dörrar dras av. Nyckeltalet "98,2 m²" uppe till höger med gul markering, som nu.
- Talen är fasta: 10 m, 8 m, 2,8 m, 2 m, 16 m², 98,2 m². Under 40 kB efter `npm run illustrationer`.

Uppdrag B kan ritas om nu med TEXT SAKNAS i etiketterna: placeringen beror inte på orden så länge varje etikett ryms på en rad i 24 px, högst cirka 22 tecken vid spetsen och 20 ovanför långsidan. Jag rendrar på 343 px och godkänner.

### 13.5 Till hantverkaren, utöver avsnitt 11

- Etiketterna i formulärets tvåkolumnsrader (nock och vinkel, brytpunkt och indrag, bredd och höjd för fönster och dörrar) ska rymmas i 130 px på 375 px, högst cirka 14 tecken, annars hamnar fälten på olika höjd.
- Varumärkesbildens `aria-label`.
- Skissens två etiketter enligt 13.4, inom teckengränserna där.
- `TEXT.antagande.silikatbinder` och de ändrade texterna i 13.3.
- Guiden enligt 13.2, efter underlagsarbetarens priskontroll.

### 13.6 Till koordinatorn

- Underlagsarbetaren före hantverkarens skrivning av guiden: vilken storlek Lovely Homes 2 299 kr för Alcro Bestå gäller (vit 313 i 10 l eller bas i 9 l), och priset för 2,7 l eller 3 l, ordagrant med datum.
- Spaltens 900 tecken och sidans 48 kB mäts igen när texten är skriven; inbäddningens 8 kB efter 13.1 rad 20.
- När 13.1 är gjord och skissen omritad granskar jag igen. Därefter är uppdrag A klart för text.

---

## 14. Andra granskningen, med texten (UX och bygge-agenten, 2026-09-28)

Kört: fasadtestet 56 gröna, 0 todo; alla 18 räknartester gröna (bygglov-altan var rött i en körning och grönt i nästa, medan grannemedgivande-arbetet ändrade filerna samtidigt); `npx astro check --minimumSeverity error` 0 fel; `npm run kontrollera` 0 fel, 12 varningar, ingen i fasadytans filer. `grep "TEXT SAKNAS"` ger inget i fasadytans filer. 13.1 rad 1 till 21 är gjorda som specat.

Egen dev-server på port 4391 och headless Edge på 375 px: standard, slät panel, puts, puts med rent, tegel, mansard med och utan brytpunkt, byte, ogiltigt (längd "abc", vinkel 61, fönster 2,5) och guiden med den inbäddade räknaren. Inget av fallen har sidledsscroll. Alla 15 fält är 48 px och har etikett, `aria-describedby` pekar alltid på id som finns, och felen står under rätt fält med standardvarningen överst i spalten. Tabbordningen följer formuläret, spalten, delafältet, källorna, Läs vidare och Faq, med 3 px penna-ring överallt. I den rensade HTML:en finns 0 `<script>` utöver JSON-LD och ingen `.js`-referens.

Budget: sidans egen del är 39,0 kB vid standard och 40,0 kB vid mansard (budget 48). Spalten har 581 tecken vid standard, 751 vid mansard och 664 med varningen (budget 900). Inbäddningen är 7,4 kB (budget 8). Guiden är 83,5 kB i sin helhet, men det är skalet och den långa texten från avsnitt 2 i skillen, inte inbäddningen.

Skissen är godkänd. Vid 343 px förstås den på en sekund: gaveln och långsidan står på samma marklinje, 10 m är längre än 8 m, bara triangeln och pilen är i penna (2,5 px), och pilen går från etiketten in i triangeln. "98,2 m²" är det enda markerade talet. Handskriften är 24 px, filen 22,5 kB utan `<text>`, och `aria-label` är ordagrant `SKISS_ALT`. Etiketten "2,8 m" står fritt mellan marginallinjen och bygeln. Takets pennlinje ligger på gavelns takfall, och takutsprången syns som korta blyertsstumpar utanför, vilket är rätt. "öppningarna dras av" slutar cirka 30 px före långsidans takkant och ryms helt.

### 14.1 Beslut på hantverkarens två frågor

1. **Skicket `rent` vid puts.** Värdet står kvar, eftersom det är en nyckel i adressen, men etiketten ska täcka båda fasaderna. Formuläret har ingen JS och kan inte byta etikett när fasaden byts. `TEXT.skick.rent` skrivs om så att ny puts hör hit, på högst två rader i 311 px (cirka 45 tecken). Koden ändras inte: `ny-puts` och `besked.puts.rad` läser redan skicket `rent`.
2. **`rad-raknat` utan ytan: godkänt.** Vid slät panel och puts är ytan det stora talet, och på lockpanel står den i `rad-malad-yta`. Men i dag står raden om den målade ytan *efter* litern, så att kedjan läses baklänges. Den flyttas före `rad-raknat` (14.2 rad 1). Parametern `_yta` står kvar oanvänd, så att signaturen inte ändras.

### 14.2 Ändringar

| # | Vem | Fil och rad | Ändring |
|---|---|---|---|
| 1 | utvecklare | `src/pages/rakna/fasadyta.astro` rad 328–340 | Blocket `visaMaladYta && …` (`rad-malad-yta`) flyttas före `<p>` med `rad-raknat`, så att ordningen blir liter att köpa, burkar, målad yta och liter räknat |
| 2 | utvecklare | `src/components/kalkyl/FasadytaForm.astro` rad 204 | Den kompakta länken till mansardtaket är 17 px hög (bilaga A punkt 6). `class:list={['inline-flex min-h-11 items-center', LANK_KLASS]}` på `<a>`, och `mt-1` bort från `<p>` på rad 203 |
| 3 | hantverkaren | `src/lib/kalkyl/fasadyta.ts` rad 731 | `TEXT.skick.rent` enligt 14.1 punkt 1 |
| 4 | hantverkaren | `src/lib/kalkyl/fasadyta.ts` rad 738 | `TEXT.stryk.auto` klipps i listan på 375 px ("Så många som tillverkarna ange"). Högst 26 tecken |
| 5 | koordinatorn | `src/components/ui/Kalkylator.astro` rad 95 | `FOTRAD = 'TEXT SAKNAS: kalkylator-fotrad'` kommer från grannemedgivandet (dess spec 12.6) och syns under räknaren i `/fasad/mala-om-huset/` och under varje annan inbäddning. Guiden och `Kalkylator.astro` committas inte förrän raden är skriven |

Rad 1 och 2 görs i samma varv som 14.3 och 14.4. Rad 3 och 4 ändrar inget test.

### 14.3 Beslut på SEO:s retur och läsarens retur

Källor: `docs/briefer/retur-fasadyta-seo-2026-09-28.md` punkt 1 och `docs/briefer/retur-fasadyta-2026-09-28.md`. SEO:s punkt 2 är samma sak som 14.2 rad 5.

**A. Åtgångstabellen (SEO punkt 1, stoppar publiceringen). Kod, med text från hantverkaren.** Specad i 14.4.

**B1. Skrapat trä räknas med 7 m² per liter täckfärg. Beslutet står kvar, och texten ändras.** Enligt K2 och övriga beslut punkt 4 grundas den skrapade ytan först, och grundfärgen räknas på sågat trä, 6 m² per liter. Täckfärgen stryks sedan på grundat trä, och där anger Beckers Perfekt Oljefärg och Alcro Bestå 7 till 8, alltså 7 som nedre kant. Att det skrapade träet suger mer färg syns alltså i grundfärgen, inte i täckfärgen. Beckers Perfekt Fasad anger 6 till 8 utan att dela upp på underlag, och är därför en kontroll: 7 ligger inom intervallet. Det är ingen motsägelse mot "den nedre kanten".
- *Text (hantverkaren):* `regel.kanten` ska säga regeln som den är: nedre kanten av det intervall som gäller ditt underlag, och Beckers Perfekt Fasads odelade 6 till 8 som kontroll. Nordsjö-meningen flyttas till `antagande.nytt-sagat`, som bara visas vid skick `rent`. `regel.atgang` nämner Beckers Perfekt Fasad.
- *Guiden (hantverkaren):* "Den skrapade ytan drar dessutom mer färg, för sågat trä suger" ska säga att det är grundfärgen som tar det.

**B2. Grundfärgen vid skrapat räknas per 10 m² bart trä, inte på hela fasaden. Kod och text.** Guiden har rätt: hur mycket bart trä skrapningen ger är okänt, och en grundstrykning på hela fasaden ger 16 till 20 liter för mycket. Vid `rent` och `kulor` står grundfärgen kvar på hela fasaden. Rent trä är bart överallt, och vid kulörbyte grundar Alcro hela ytan.
- *Kod:* `grundfarg` blir `null` vid skicket skrapat. Nytt fält i `ok`-resultatet: `grundPer10M2: number | null`, som är `tvaDecimaler(10 / GRUND_ATGANG.sagat)` = 1,67 vid skrapat på trä med akrylat eller oljealkyd, annars `null`.
  - Spalten visar `etikett-grund` med `TEXT.spalt['rad-grund-bart'](liter)`.
  - "Därför" får raden `TEXT.darfor['grund-bart'](liter, m2PerLiter)`.
  - `BeskedVarden` får `grundPer10: string | null`.
  - `antagandenFor` tar med `grund-sagat` när `grundPer10M2` finns.
- *Text:* hantverkaren skriver de nya strängarna.
- *Guiden:* meningen "köp efter hur mycket bart trä du fått fram" får talet 1,7 liter per 10 m². Guidens kronor gäller en fasad i gott skick, och där står redan att grundfärgen kommer utöver, så kronorna ändras inte.

**B3. Talformat. Kod, och i guiden text.**
- **Ytor:** `m2Text` skriver högst en decimal och tar bort en nolla på slutet: 36 blir "36", 16 blir "16" och 98,2 står kvar. Omkretsen i "Därför" går genom den.
- **Vinkel:** ny `vinkelText`, heltal när talet är helt, annars en decimal: 15 blir "15" och 26,565 blir "26,6".
- **Liter som går åt:** ny `literGarAtText`, en decimal utan nolla på slutet, i `rad-raknat`, `darfor.liter-*` och tabellen i 14.4. 33,67 blir "33,7". `literRaknat` står kvar med två decimaler i resultatet, så testernas facit står kvar.
- **Liter att köpa:**
  - Trä: burkarnas summa som i dag (36, 29,7, 36,9), eftersom talet är exakt.
  - Puts: `literAttKopa = Math.ceil(literRaknat)`, heltal uppåt, med `burkar` fortfarande `null`. Standardputsen blir "Köp 66 liter". Stora talet i spalten vid puts är `literAttKopa`.
- **Profilfaktorn** skrivs "1,2" överallt: `LOCK_FAKTOR_TEXT = komma(PROFILFAKTOR.lock)`. Regeln får nämna 1,195 som det avrundade talet.
- **Nockfelet:** gränserna skrivs med en decimal, avrundade inåt (nedre uppåt, övre nedåt), så att B 8 ger "0,4 och 6,9". Valideringen står kvar på de exakta gränserna. En nocken som är NaN, alltså bokstäver, ger `TEXT.fel['nock-tal']` i stället för intervallet.

**B4. 33,67, 34 och 36 liter. Text, och talen i guiden.** Det är två begrepp och ett avrundat tal. Sidan får två ord och håller sig till dem: *går åt* för åtgången (en decimal i spalten, heltal i löptext) och *köp* för burkarna.
- *Hantverkaren:*
  - Kortsvaret säger att det går åt 34 liter och att fyra burkar om 9 blir 36.
  - `rad-raknat` börjar med "går åt" och står under raden om den målade ytan (14.2 rad 1).
  - Kortsvaret använder ett ord för färgen, inte både "akrylatfärg" och "fasadfärg".
- *Guiden (hantverkaren):* stycket Färgen och Faq-svaret "Hur mycket färg …" räknar färgen på husets 98 m² och inte på 100. Det ger 28 liter slät och 34 lockpanel. Burkarna blir desamma: tre om 9 och en om 2,7, respektive fyra om 9. Då stämmer "samma hus ifyllt". Kvadratmeterpriserna står kvar på 100, med "jag rundar till 100".
  - Att lockpanelens övre kant prissätts med Beckers tiolitersburkar ska sägas i meningen, som 13.2 redan säger.
- *Test:* 6.3 blir "28 liter" = `Math.round(98.2 · 2 / ATGANG.akrylat.malat)` i stället för 29 på 100.

**B5. "Gör inte det här" över rådet att hälla ihop burkarna. Text.** Rubriken är mallens och står kvar. `gorInte.blanda-partier` skrivs om så att den säger vad man inte ska göra, till exempel att måla ur en burk i taget, och sedan hur man gör i stället. Samma gäller `gorInte.en-strykning`, som läsaren inte förstod: talet gäller per strykning, så en strykning blir lika tjock men ger för lite skydd. Guiden ändras inte.

**B6. Ogiltigt värde: bekräftat. Ingen ändring.** Fasadytan är en talräknare, och grannemedgivandets 12.8 säger att talräknarna behåller standardsvaret under varningen. `STANDARDVARNING` är ordagrant gränssnitt för alla talräknare.

### 14.4 Spec: åtgångstabellen

**Plats:** `src/pages/rakna/fasadyta.astro`, i "Så räknar jag" efter `TEXT.steg`-listan (rad 453–455) och före H3:n "Vad siffrorna vilar på" (rad 457). Den renderas alltid, oberoende av indata, också vid tegel, byte, mansard och ogiltigt värde.

**Data i modulen**, exporterad, ingen räkning i sidan:

```ts
export type AtgangsNyckel =
  | 'tack-ommalning' | 'tack-skrapat' | 'grund-skrapat' | 'tack-nytt' | 'grund-nytt'
  | 'tack-kulor' | 'grund-kulor' | 'slam-ommalning' | 'slam-nytt' | 'silikat' | 'tegel';
export interface AtgangsRad {
  nyckel: AtgangsNyckel;
  m2PerLiter: number | null;     // null för tegel
  strykningar: number | null;    // null för tegel
  literGarAt: number | null;     // grund-skrapat: liter per 10 m² bart trä; tegel null
  literAttKopa: number | null;   // burkarnas summa; silikat Math.ceil; grund-skrapat och tegel null
  burkar: Burk[] | null;
}
export const ATGANG_YTA = { ...STANDARD, fasad: 'slat', stryk: 'auto' } as const satisfies FasadytaIndata;
export function atgangstabell(): AtgangsRad[];
```

Varje rad byggs med `raknaFasadyta({ ...ATGANG_YTA, farg, skick, fasad })`, och ingenting skrivs för hand. Oljefärg har ingen egen rad, eftersom `ATGANG.akrylat` och `ATGANG.oljealkyd` är lika. Testet låser att de är lika, så att raderna delas upp om ett tal ändras.

| Nyckel | farg, skick (fasad) | Ur resultatet | Facit, egen räkning 2026-09-28 |
|---|---|---|---|
| `tack-ommalning` | akrylat, ommalning | `tackfarg` | 7, 2, 28,06 l, tre om 9 och en om 2,7 = 29,7 |
| `tack-skrapat` | akrylat, skrapat | `tackfarg` | 7, 2, 28,06 l, 29,7 |
| `grund-skrapat` | akrylat, skrapat | `grundPer10M2` (B2) | 6, 1, 1,67 l per 10 m², inga burkar |
| `tack-nytt` | akrylat, rent | `tackfarg` | 6, 2, 32,73 l, fyra om 9 = 36 |
| `grund-nytt` | akrylat, rent | `grundfarg` | 6, 1, 16,37 l, två om 9 = 18 |
| `tack-kulor` | akrylat, kulor | `tackfarg` | 7, 2, 28,06 l, 29,7 |
| `grund-kulor` | akrylat, kulor | `grundfarg` | 7, 1, 14,03 l, två om 9 = 18 |
| `slam-ommalning` | slamfarg, ommalning | `tackfarg` | 3, 1, 32,73 l, tre om 10 och en om 5 = 35 |
| `slam-nytt` | slamfarg, rent | `tackfarg` | 3, 2, 65,47 l, sju om 10 = 70 |
| `silikat` | (puts), ommalning | `tackfarg` | 3, 2, 65,47 l, köp 66, inga burkar |
| `tegel` | (tegel) | inget | ingen färg |

**Text i `TEXT.atgangstabell` (hantverkaren, TEXT SAKNAS tills dess):**
- `rubrik`: H3.
- `kolumner`: fem rubriker.
- `rad.<AtgangsNyckel>`: radnamnet, som säger både akrylat- och oljefärg på täckfärgsraderna.
- `liter(literGarAt, literAttKopa, burkar)`: cellen.
- `grundBart(liter)`: cellen för grund-skrapat.
- `putsUtanBinder(liter, kopa)`: cellen för silikat, med bindern utanför.
- `tegel.*`: tegelradens celler.
- `kalla.<AtgangsNyckel>`: tillverkarens namn, kort.
- `under`: en mening om varifrån talen kommer.

Talen i cellerna formateras med `literGarAtText`, `literText` och `burkText`. Källcellen är text utan länk, och länkarna står redan i källistan under antagandetabellen. Tegelradens källa är Alcro och Wienerberger.

**Markup:** `<h3>` som "Vad siffrorna vilar på". Tabellen ligger i `<Tabellyta kolumner={5}>` med `TABELL_KLASS` på `<table>` och `<th scope="row">` för radnamnet. Kolumnerna är Färg och underlag, m² per liter och strykning, Strykningar, Liter och burkar till 98 m², och Källa. `under` står i `text-liten` under tabellen.

**Test** i `scripts/test-kalkyl-fasadyta.mjs`:
- `atgangstabell()` har 11 rader i ordningen ovan och talen i facitkolumnen.
- `ATGANG.akrylat` är lika med `ATGANG.oljealkyd`.
- Tabellen är lika för två olika indata. Den tar inga, men testet låser att den inte läser `STANDARD` efter en ändring.
- `TEXT.atgangstabell` har en icke-tom sträng per nyckel.

**Budget:** sidans egen del under 48 kB vid standard och mansard (i dag 39,0 och 40,0), och ingen sidledsscroll utanför `<Tabellyta>` på 375 px. Utvecklaren rapporterar talen.

### 14.5 Uppdrag till utvecklaren, samlat

**Filer:**
- `src/lib/kalkyl/fasadyta.ts`
- `src/pages/rakna/fasadyta.astro`
- `src/components/kalkyl/FasadytaForm.astro`
- `scripts/test-kalkyl-fasadyta.mjs`

Inga andra filer. Guiden, `Kalkylator.astro` och all publik text är inte utvecklarens.

**Innehåll:**
- 14.2 rad 1 och 2.
- B2: `grundPer10M2`, `grundfarg` null vid skrapat, och de nya TEXT-nycklarna som `TEXT SAKNAS`.
- B3: `m2Text`, `vinkelText`, `literGarAtText`, puts `literAttKopa`, `LOCK_FAKTOR_TEXT`, nockfelets decimaler och `nock-tal` vid NaN.
- 14.4: tabellen.

**Nytt facit i testet:**
- E3b: `grundfarg` null och `grundPer10M2` 1,67.
- E7: `literAttKopa` 59.
- Standard med puts: 66.
- 6.2: nock 7,0 ger "6,9" och "0,4", och nock "abc" ger `nock-tal`.
- `m2Text(36) === '36'`, `vinkelText(15) === '15'`, `vinkelText(26.565) === '26,6'` och `literGarAtText(33.67) === '33,7'`.
- 6.3: "28 liter" som `{ todo: 'guiden B4' }` tills hantverkaren skrivit.

Kontroller efteråt: fasadtestet och kvadratmetertestet gröna, astro check 0 fel och kontrollera 0 fel. Mätningen i 14.4 görs på egen port. Arbetaren bygger inte.

**Hantverkaren** skriver efter utvecklaren:
- 14.2 rad 3 och 4.
- B1, B2, B4 och B5 i modulen, kortsvaret och `TEXT.atgangstabell`.
- Guiden enligt B1, B2 och B4.

Vid nästa varv granskar jag 14.2 till 14.5.

### 14.6 Tredje granskningen (UX och bygge-agenten, 2026-09-28)

Kört:
- Fasadtestet: 61 gröna.
- Kvadratmetertestet: 19 gröna.
- `npx astro check --minimumSeverity error`: 0 fel i två körningar. En tidigare körning gav 5 fel medan andra filer ändrades samtidigt, och de gick inte att återskapa.
- `npm run kontrollera`: 0 fel, ingen varning i fasadytans filer.
- "TEXT SAKNAS": inget i fasadytans filer eller i `Kalkylator.astro`. Fotraden är skriven.
- Koden stämmer med 14.2 rad 1 och 2 och med 14.3 B2, B3 och 14.4.

Egen dev-server på port 4431 och headless Edge på 375 px, sedan stängda:
- **Lägen:** standard, slät, skrapat, rent, kulör, slamfärg på nytt virke, puts med rent, tegel, byte, mansard, pulpet med vinkel 15, ogiltigt (längd och nock "abc") och guiden.
- **Sidledsscroll:** ingen på sidan i något läge.
- **Fält och fel:** alla fält 48 px med etikett, och `aria-describedby` hel. Bokstäver i nocken ger `nock-tal`.
- **Tabbordning** och fokusring som förut. Mansardlänken i guiden är inte längre under 44 px.
- **Budget:** 0 `<script>` utöver JSON-LD, ingen `.js`-referens.

| Mått | Standard | Mansard | Skrapat | Rent | Ogiltigt | Budget |
|---|---|---|---|---|---|---|
| Spalten | 578 tecken | 782 | 742 | 757 | 661 | 900 |

| Mått | Uppmätt | Budget |
|---|---|---|
| Sidans egen del, standard | 42,5 kB | 48 kB |
| Sidans egen del, mansard | 43,8 kB | 48 kB |
| Inbäddningen i guiden | 7,5 kB | 8 kB |

**Retur.** Åtgångstabellen fungerar tekniskt: skrollen ligger inne i `<Tabellyta>`, och ledtexten står ovanför. Men den går inte att läsa på 375 px.
- Tabellen blir 454 px bred i 343 och 2 180 px hög.
- Webbläsaren ger kolumnerna för "7" och "2" mest bredd, eftersom rubrikerna "M² per liter och strykning" och "Strykningar" är långa. Cellen med liter och burkar krymper till cirka 60 px, bryts efter vart annat ord och klipps i högerkanten i första vyn.
- Ett besked som tar tre skärmar för att läsa en rad är ingen tabell som en granne läser, och det är inte heller en tabell som en AI citerar rent.

| # | Vem | Fil och rad | Ändring |
|---|---|---|---|
| 1 | utvecklare | `src/pages/rakna/fasadyta.astro` rad 497 | Tabellen får egna breddklasser utöver `TABELL_KLASS`, skrivna en gång på `<table>`. Ingen ny global klass. Talkolumnerna 2 och 3 inte bredare än talet och rubriken kräver. `[&_tbody_th]:min-w-36`, `[&_td:nth-child(2)]:whitespace-nowrap`, `[&_td:nth-child(3)]:whitespace-nowrap`, `[&_td:nth-child(4)]:min-w-56`, `[&_td:nth-child(5)]:min-w-32`. Tabellen blir då bredare än 343 och skrollar inne i `<Tabellyta>`, som är tillåtet. Varje rad ska vara högst cirka 5 textrader hög på 375 px. Utvecklaren rapporterar tabellens höjd, målet under 900 px |
| 2 | hantverkaren | `src/lib/kalkyl/fasadyta.ts` rad 921–929, `TEXT.atgangstabell.kolumner` | Rubrikerna för kolumn 2 och 3 så korta att de ryms på högst två rader om cirka 10 tecken, till exempel storheten på en rad och enheten på nästa. Enheten ska stå kvar i rubriken, med storheten utskriven |
| 3 | hantverkaren | `fasadyta.ts` rad 943–946, `TEXT.atgangstabell.liter` | Cellen blir högst cirka 60 tecken. I dag bär den både "går åt" och "Köp …" som två meningar. Talen och de två orden står kvar, men cellen är en rad data och inte två meningar |
| 4 | hantverkaren | `fasadyta.ts` rad 659–660, `besked.farg.rad` vid skrapat | Raden säger samma "1,7 liter för varje 10 m²" som grundfärgsraden i spalten, 20 rader längre ner. Talet står en gång. Beskedet pekar ner till grundfärgen, så som det gör vid rent och kulör |

Efter rad 1 kör utvecklaren fasadtestet, astro check och kontrollera, och mäter tabellens höjd och sidans egen del på egen port. Rad 2 till 4 ändrar inget test. Sidans vikt, spalten, inbäddningen, formuläret och besluten i 14.3 är godkända och granskas inte igen. Nästa varv gäller bara raderna ovan.

### 14.7 Fjärde granskningen, bara 14.6 (UX och bygge-agenten, 2026-09-28)

Egen dev-server på port 4437 och headless Edge på 375 px, sedan stängda.

- **Rad 1, godkänd.** Breddklasserna står på `<table>` som specat.
  - Tabellen är 698 × 802 px. Radhöjderna är 59 till 80 px, och höjden ligger under målet på 900.
  - Den skrollar inne i `<Tabellyta>` (behållaren är 343 px, `scrollLeft` når 355), och ledtexten står ovanför.
  - Sidan har ingen sidledsscroll, och inget element utanför behållaren går förbi 375 px.
  - Liter-cellen bryts på två eller tre rader och går att läsa i sin helhet efter en dragning.
- **Rad 4, godkänd.** Beskedet vid skrapat pekar ner till grundfärgen, och talet står en gång.
- **Rad 2 och 3: retur, ett skrivsätt per mått (ROST.md avsnitt 4).**
  - Kolumnrubriken "m²/l per strykning" versaliseras av `[&_thead_th]:uppercase` till "M²/L PER STRYKNING". Stort M är megameter, och "m²/l" är ett andra skrivsätt för det som spalten, regeln och "Därför" skriver "m² per liter".
  - Liter-cellen skriver "28,1 l" och "29,7 l" men "om 9 liter" i samma cell. Resten av sajten skriver "liter".

| # | Vem | Fil och rad | Ändring |
|---|---|---|---|
| 1 | hantverkaren | `src/lib/kalkyl/fasadyta.ts` rad 923, `TEXT.atgangstabell.kolumner[1]` | Rubriken skrivs i ord, utan förkortad enhet, så att versalerna inte gör om den. Till exempel "Kvadratmeter per liter och strykning" eller "Räcker, m² per liter". Samma skrivsätt som "m² per liter" på resten av sidan |
| 2 | hantverkaren | `fasadyta.ts` rad 944, `TEXT.atgangstabell.liter` | "l" blir "liter" på båda ställena. Cellen får då bli upp till cirka 80 tecken. Rader med två burkstorlekar får en rad till, och tabellen hamnar kring 880 px. Går den över 900 kortar hantverkaren orden runt talen, inte talen |

Efter raderna mäter koordinatorn eller utvecklaren tabellens höjd på 375 px på egen port. Under 900 px räknas raderna som godkända utan ett nytt varv hos mig, eftersom inget annat ändras. Över 900 kommer det tillbaka hit.

**Uppföljning, 2026-09-28.** Koordinatorn gjorde raderna: kolumn 2 heter "Kvadratmeter per liter och strykning", och cellen skriver "liter" på båda ställena. Mätt av mig på port 4443 i headless Edge på 375 px, servern stängd efteråt:
- Tabellen är 724 × 818 px, under 900. Rubrikraden är 63 px och raderna 59 till 80 px.
- Skrollen ligger inne i `<Tabellyta>`, och sidan har ingen sidledsscroll.

**Godkänd av UX och bygge.** Det gäller uppdrag A och B enligt 13 och 14. Committen väntar fortfarande på det koordinatorn själv äger: bygget och läsarens och SEO:s godkännande av den nya texten.
