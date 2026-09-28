# Spec: räknaren /rakna/u-varde/

UX och bygge-agenten, 2026-09-24. Gäller steg 1 till 6 i skillen nytt-verktyg plus bilderna. Underlaget är `docs/briefer/underlag-kalkyl-u-varde-2026-09-24.md` (här kallat "underlaget", avsnittsnummer därifrån). Mönstret är `docs/SPEC-SIDMALLAR.md` 4.7 och närmast förebild är `src/pages/rakna/trappa.astro` (spalten, "Därför blev svaret så") och `src/lib/kalkyl/elkostnad.ts` (elpriset, `tillTal`).

Utvecklaren gissar ingenting. Står något inte här gäller 4.7, och står det inte där frågar utvecklaren innan hen bygger.

---

## 0. Godkännande av underlaget

Underlaget är **godkänt med fem ändringar**. Formeln, övergångsmotstånden, lambdatabellen, gradtimmarna, SCOP-tabellen, Boverkets tal och materialpriserna har källa och datum och används som de står.

| # | Underlaget säger | Beslut | Varför |
|---|---|---|---|
| 1 | Tillägg på artikelns vägg: R_T 2,800 + 1,351 = 4,151, **U 0,241** (avsnitt 7, exempel 1) | **U 0,235** (R_T 4,2525). Testet låser 0,235 | SS-EN ISO 6946 så som Träguiden 9.3 återger den räknar övre och undre gränsvärdet över **hela** konstruktionen. Ett homogent skikt som läggs till hamnar i båda snitten (ull och regel) och i λ-blandningens summa. Att lägga 1,351 på det färdiga medelvärdet är en förenkling som ger 0,006 för högt. Egen räkning: R_isol 4,90876, R_regel 2,52266, R_övre 4,40839, R_undre 4,09664, R_T 4,25251, U 0,23516. Se avsnitt 11, rättning 1 |
| 2 | Vindsull (λ 0,042) valfri | **Med** som material `stenull-vindsull` | Det enda lösullspriset för egen läggning gäller Vindsull. Utan den skulle återbetalningen på vinden, verktygets vanligaste fall, alltid stå som saknas. Artikelns lambdatabell får raden (avsnitt 11, rättning 2) |
| 3 | Firmapris för tak, två återbetalningstider | **Inte med** | Koordinatorns beslut 3: återbetalning bara för egen läggning |
| 4 | Eget elprisfält, ANTAGANDE | **Inget fält.** `ELPRIS_KR_PER_KWH` och perioden ur `ELPRIS_KALLA` | Koordinatorns beslut 3, "sajtens elpris". Spalten länkar till `/rakna/elkostnad/` för eget pris |
| 5 | Boverket: båda kolumnerna eller datumstyrt | **Båda kolumnerna alltid** | Sidan cachas i en timme och övergången gör att båda regelverken får användas till 2027-10-01. Inget i koden läser dagens datum |

Övriga ANTAGANDEN i underlaget avsnitt 9 godkänns som de står: ΔU = 0, luftspalt bara vägg och bara ventilerad och högst en, tak mot kallvind och golv med Rse 0,04, reglar i högst ett skikt och bara 12 procent, cellulosa 0,040, hela besparingen från värmepumpen och spann per typ, exakt åtgång, skivpris från närmaste tjocklek, ingen besparing när U efter ≥ U före, gränserna för känt U, två lägen. Inget fritt lambdafält, inget tegel.

Tillkommande ANTAGANDE i denna spec, som ska stå i antagandetabellen:

- **A1.** Tilläggsskikten ligger utan reglar som bryter dem och räknas alltid, alltså innanför en eventuell luftspalt. Samma som artikelns 50 mm "utanpå reglarna så att inget trä bryter det".
- **A2.** Skivpriset för Flexibatts: tjocklek upp till och med 70 mm räknas med 45-millimeterspriset, över 70 mm med 95-millimeterspriset (gränsen mitt emellan).
- **A3.** Återbetalningen räknas mot kronorna vid direktverkande el.

---

## 1. Filer

| Fil | Gör | Uppdrag |
|---|---|---|
| `src/lib/kalkyl/u-varde.ts` | skapas | A |
| `scripts/test-kalkyl-u-varde.mjs` | skapas | A |
| `src/components/kalkyl/UVardeForm.astro` | skapas | A |
| `src/pages/rakna/u-varde.astro` | skapas | A |
| `src/lib/kalkyl/register.ts` | en post läggs till | A |
| `src/components/ui/Kalkylator.astro` | import, `'u-varde'` i `MED_FORMULAR`, en renderingsrad | A |
| `src/content/kunskap/el/u-varde.mdx` | **en rad** läggs till (avsnitt 8) | A |
| `src/content/guider/el/tillaggsisolera-vind.mdx` | **en rad** läggs till (avsnitt 8) | A |
| `src/assets/illustrationer/rakna/varumarke/u-varde.svg` | skapas | A |
| `src/assets/illustrationer-kallor/rakna/u-varde.svg` | skapas, `npm run illustrationer` skriver den publicerade | B |

Rörs inte: `src/lib/antaganden.ts`, `src/lib/kalkyl/stil.ts`, `src/lib/verktygsbild.ts`, `src/lib/strukturdata.ts`, `Bas.astro`, andra kalkylmoduler, någon annan mening i de två innehållsfilerna. `u-varde.mdx` har ocommittade ändringar i arbetskatalogen från hantverkaren; lägg till raden i den befintliga filen, skriv aldrig över den. `docs/SPEC-SIDMALLAR.md` 4.7.15 skriver jag efter granskningen.

**Uppdrag A** är steg 1 till 6 och varumärkesbilden. **Uppdrag B** är skissen och ges först när hantverkaren skrivit skissens etiketter (avsnitt 9.1). Sidan fungerar utan skiss: `verktygsillustration()` ger `undefined`, delningsbilden får tumstocken med en varning i bygget, inget fel.

Arbetaren kör inte `npm run build`.

---

## 2. Formelmodulen `src/lib/kalkyl/u-varde.ts`

Ren modul utan Astro-importer. Enda importen: `import { ELPRIS_KR_PER_KWH, ELPRIS_KALLA } from '../antaganden.ts';` med ändelsen. Varje konstant namngiven överst med kommentaren `Källa:` (titel, adress, datum som i underlaget) eller `ANTAGANDE:`. Ingen konstant utan en av dem.

### 2.1 Typer

```ts
export type Lage = 'skikt' | 'uvarde';
export type Byggnadsdel = 'vagg' | 'tak' | 'golv' | 'fonster' | 'dorr';
export type Region = 'mitt' | 'syd' | 'norr';
export type MaterialNyckel =
  | 'stenull-paroc' | 'stenull-flexibatts' | 'stenull-granulate' | 'stenull-vindsull'
  | 'glasull-fyllupp' | 'cellulosa' | 'eps' | 'pir'
  | 'tra' | 'gips' | 'lattbetong' | 'betong' | 'luftspalt';
export type VpTyp = 'luft-luft' | 'luft-vatten' | 'jord-sjo' | 'berg' | 'franluft';
export type Kolumn = 'till-2026-09-30' | 'fran-2026-10-01';

export interface Skikt {
  /** Formulärets rad, 1 till 6. Felet hamnar på den raden. */
  rad: number;
  /** null när adressen hade ett värde som inte är en nyckel. */
  material: MaterialNyckel | null;
  /** Millimeter. Läses inte för luftspalt. NaN när fältet inte gick att läsa. */
  tjocklekMm: number;
  reglar: boolean;
}
export interface Tillagg {
  /** Formulärets rad, 1 eller 2. */
  rad: number;
  material: Exclude<MaterialNyckel, 'luftspalt'> | null;
  tjocklekMm: number;
}
export interface UVardeIndata {
  lage: Lage;
  del: Byggnadsdel;
  ytaM2: number;
  region: Region;
  skikt: Skikt[];       // bara icke-tomma rader, i radordning
  tillagg: Tillagg[];   // 0 till 2, bara icke-tomma rader
  uFore: number;        // läget uvarde
  uEfter: number;       // läget uvarde
}

export type FelNyckel = 'del' | 'yta' | 'uFore' | 'uEfter' | 'skikt' | 'tillagg'
  | 's1' | 's2' | 's3' | 's4' | 's5' | 's6' | 't1' | 't2';

export type Besked =
  | 'bara-u-klarar' | 'bara-u-over'          // skiktläge utan tillägg: ett U-värde
  | 'ingen-forbattring'                       // U efter >= U före
  | 'klarar'                                  // U efter klarar båda kolumnerna
  | 'klarar-gamla'                            // fönster eller dörr: klarar 1,2 men inte 1,1
  | 'battre-men-over';                        // lägre än före men över gränsen

export type GorInte = 'ug-mot-kravet' | 'glom-termostaten' | 'inifran-utan-daggpunkt';
export type RegelNyckel = 'formel' | 'luftspalt' | 'reglar' | 'delta-u' | 'tak-kallvind' | 'golv-uteluft'
  | 'cellulosa' | 'boverket-andring' | 'boverket-overgang' | 'boverket-anpassning' | 'boverket-50'
  | 'fonster-uw' | 'gradtimmar' | 'elpris' | 'scop' | 'energi-inte-matare' | 'aterbetalning-bara-ull';

export interface SkiktRad {
  kalla: 'fore' | 'tillagg';
  rad: number;
  material: MaterialNyckel;
  tjocklekMm: number | null;     // null för luftspalt
  lambda: number | null;         // null för luftspalt
  r: number | null;              // d/λ, m²K/W; null för luftspalt
  rRegel: number | null;         // d/0,14 för skiktet med reglar, annars null
  raknas: boolean;               // false för luftspalten och allt utanför den
  reglar: boolean;
}
export interface Motstand {
  rsi: number; rse: number;
  rTotal: number;                // R_T
  rOvre: number | null;          // bara med reglar
  rUndre: number | null;
  u: number;
}
export interface Jamforelse { kolumn: Kolumn; grans: number; klarar: boolean }
export interface Varmepump { typ: VpTyp; scopMin: number; scopMax: number; krMin: number; krMax: number }

export type UVardeResultat =
  | {
      status: 'ok';
      lage: Lage; del: Byggnadsdel; ytaM2: number; region: Region;
      uFore: number;                    // skiktläge: skiktens U; uvarde: uFore
      uEfter: number | null;            // null i skiktläge utan tillägg
      uSlut: number;                    // uEfter ?? uFore. Det stora talet och jämförelsen
      detaljer: { rader: SkiktRad[]; fore: Motstand; efter: Motstand | null } | null;  // null i läget uvarde
      jamforelse: [Jamforelse, Jamforelse];      // för uSlut, kolumnerna i den ordningen
      jamforelseFore: [Jamforelse, Jamforelse];  // för uFore
      besked: Besked;
      besparing: {
        gradtimmar: number;
        kwhPerAr: number;
        krPerAr: number;                // direktverkande el
        varmepump: Varmepump[];         // fem rader i VP_TYPER:s ordning
      } | null;                         // null vid bara-u-* och ingen-forbattring
      aterbetalning: { kostnadKr: number; ar: number } | null;
      aterbetalningSaknas: 'uvarde-lage' | 'inget-pris' | 'ingen-besparing' | null;  // null när aterbetalning finns
      gorInteDetHar: GorInte[];
      regler: RegelNyckel[];
    }
  | { status: 'ogiltig'; fel: Partial<Record<FelNyckel, string>> };
```

Export utöver typerna: `STANDARD`, `GRANSER`, `MATERIAL`, `MATERIAL_ORDNING`, `RSI`, `RSE`, `RSE_LUFTSPALT`, `REGELANDEL`, `LAMBDA_REGEL`, `GRADTIMMAR`, `VP_TYPER`, `BOVERKET`, `PRIS_VINDSULL_KR_M2_MM`, `PRIS_FLEXIBATTS_45_KR_M2_MM`, `PRIS_FLEXIBATTS_95_KR_M2_MM`, `FLEXIBATTS_GRANS_MM`, `ANTAGANDEN`, `TEXT`, `tolkaQuery`, `raknaUVarde`, `uForSkikt`, `besparingKwh`, `materialprisKrM2Mm`, `delbarQuery`, `treDecimaler`, `heltal`, `endecimal`.

### 2.2 Konstanter (värde, märkning)

| Namn | Värde | Märkning |
|---|---|---|
| `RSI` | `{ vagg: 0.13, tak: 0.10, golv: 0.17 }` | Källa: Träguiden 9.3; SLU TN0258 |
| `RSE` | `0.04` | samma |
| `RSE_LUFTSPALT` | `0.13` | Källa: Paroc, Projekteringsanvisning välisolerade ventilerade fasader, oktober 2025, s. 15 och 18 |
| `REGELANDEL` | `0.12` | Källa: Träguiden 9.3, Svenskt Träs exempel |
| `LAMBDA_REGEL` | `0.14` | Källa: Träguiden 9.3 |
| `MATERIAL` | se 2.3 | Källa per rad |
| `GRADTIMMAR` | `{ mitt: 3720 * 24, syd: 3720 * 24 * 0.8, norr: 3720 * 24 * 1.35 }` (89 280, 71 424, 120 528) | Källa: Rockwool vind, omläst 2026-09-24. Skriv uttrycket, inte talet, så att härledningen syns |
| `VP_TYPER` | luft-luft 3,5–5,0; luft-vatten 3,0–4,5; jord-sjo 4,0–5,0; berg 4,0–5,5; franluft 2,5–4,0, i den ordningen | Källa: Energimyndigheten ET 2025:05, mars 2025, s. 9, tabell 1. Jord och sjö har samma spann och slås ihop |
| `BOVERKET` | `{ 'till-2026-09-30': { tak: 0.13, vagg: 0.18, golv: 0.15, fonster: 1.2, dorr: 1.2 }, 'fran-2026-10-01': { tak: 0.13, vagg: 0.18, golv: 0.15, fonster: 1.1, dorr: 1.1 } }` | Källa: BFS 2011:6 i lydelse BFS 2024:14, 9:92; BFS 2026:9 bilaga 2 tabell 6 |
| `PRIS_VINDSULL_KR_M2_MM` | `19.95 * 0.042` (0,8379) | Källa: Bauhaus, Rockwool Vindsull 20 kg, 19,95 kr/kg och ≥ 42 kg/m³, hämtat 2026-09-24 |
| `PRIS_FLEXIBATTS_45_KR_M2_MM` | `44.95 / 45` (0,99889) | Källa: Bauhaus jämförpris 44,95 kr/m², 2026-09-24 |
| `PRIS_FLEXIBATTS_95_KR_M2_MM` | `84.95 / 95` (0,89421) | Källa: Bauhaus jämförpris 84,95 kr/m², 2026-09-24 |
| `FLEXIBATTS_GRANS_MM` | `70` | ANTAGANDE A2 |
| `STANDARD` | se 2.5 | ANTAGANDE: artikelns räkneexempel |

Elpriset importeras, skrivs aldrig in.

### 2.3 Materialen

`MATERIAL: Record<MaterialNyckel, { lambda: number | null; etikett: string; kalla: { titel: string; url: string; last: string }; pris: 'vindsull' | 'flexibatts' | null }>`. `MATERIAL_ORDNING` är listan nedan uppifrån, och formulärets alternativ kommer i den ordningen.

| Nyckel | λ | `etikett` (ordagrant artikelns tabellcell) | pris |
|---|---|---|---|
| `stenull-paroc` | 0.036 | Stenull, skiva, Paroc eXtra | null |
| `stenull-flexibatts` | 0.037 | Stenull, skiva, Rockwool Flexibatts | flexibatts |
| `stenull-granulate` | 0.041 | Stenull, lösull maskinblåst 25 kg/m³, Rockwool Granulate Pro Plus | null |
| `stenull-vindsull` | 0.042 | TEXT SAKNAS: material-vindsull (samma cell som hantverkaren skriver i artikelns tabell, rättning 2) | vindsull |
| `glasull-fyllupp` | 0.045 | Glasull, lösull handutlagd, Isover Easy FyllUpp | null |
| `cellulosa` | 0.040 | TEXT SAKNAS: material-cellulosa (artikelns cell säger "0,037 till 0,040"; etiketten ska säga att räknaren tar 0,040) | null |
| `eps` | 0.038 | Cellplast EPS, Sundolitt S80 | null |
| `pir` | 0.022 | PIR, Kingspan Therma TW55 | null |
| `tra` | 0.14 | Trä, gran och furu | null |
| `gips` | 0.24 | Gips | null |
| `lattbetong` | 0.14 | Lättbetong 500 kg/m³, med fukt inräknad | null |
| `betong` | 1.7 | Betong | null |
| `luftspalt` | null | TEXT SAKNAS: material-luftspalt | null |

Källa och adress per rad: underlaget avsnitt 2, kolumnen "Källa, adress, datum".

### 2.4 Gränser

```ts
export const GRANSER = {
  ytaM2: [1, 500],
  tjocklekMm: [10, 600],
  antalSkikt: [1, 6],        // luftspalten räknas som skikt
  antalTillagg: [0, 2],
  uOpak: [0.05, 3.0],        // vägg, tak, golv. ANTAGANDE, underlaget avsnitt 8
  uFonster: [0.5, 6.0],      // fönster och dörr. ANTAGANDE, underlaget avsnitt 8
} as const;
```

Gränserna är inklusive. Decimalkomma tolkas.

### 2.5 Standardvärden

```ts
export const STANDARD: UVardeIndata = {
  lage: 'skikt', del: 'vagg', ytaM2: 100, region: 'mitt',
  skikt: [
    { rad: 1, material: 'gips', tjocklekMm: 13, reglar: false },
    { rad: 2, material: 'stenull-flexibatts', tjocklekMm: 120, reglar: true },
    { rad: 3, material: 'luftspalt', tjocklekMm: NaN, reglar: false },
    { rad: 4, material: 'tra', tjocklekMm: 22, reglar: false },
  ],
  tillagg: [{ rad: 1, material: 'stenull-flexibatts', tjocklekMm: 50 }],
  uFore: 0.4, uEfter: 0.18,
};
```

Skiktläget är artikelns sjuttiotalsvägg med 50 mm på insidan (0,357 till 0,235). Läget uvarde är artikelns fasad (0,40 till 0,18 på 100 m²). Samma `del`, `ytaM2` och `region` delas av båda lägena.

### 2.6 `tolkaQuery(q: URLSearchParams): { indata: UVardeIndata; harIndata: boolean }`

Query-nycklar:

| Nyckel | Värden | Saknas | Okänt värde |
|---|---|---|---|
| `lage` | `skikt`, `uvarde` | standard | standard |
| `del` | `vagg`, `tak`, `golv`, `fonster`, `dorr` | standard | standard |
| `yta` | tal | standard | NaN, fel i räkningen |
| `region` | `mitt`, `syd`, `norr` | standard | standard |
| `m1`–`m6` | materialnyckel eller tomt | se nedan | `material: null`, fel på raden |
| `d1`–`d6` | tal i mm | NaN | NaN |
| `r1`–`r6` | `1` betyder reglar, allt annat nej | nej | nej |
| `tm1`, `tm2` | materialnyckel utom `luftspalt`, eller tomt | se nedan | `material: null`, fel på raden |
| `td1`, `td2` | tal i mm | NaN | NaN |
| `uf`, `ue` | tal i W/m²K | standard | NaN |

- `harIndata` är sant när någon av nycklarna ovan finns.
- **Skikten:** finns minst en av `m1`–`m6` i adressen byggs listan helt ur adressen, rad för rad, och en rad med tomt eller saknat `m` hoppas över (dess `d` och `r` läses inte). Finns ingen av dem gäller `STANDARD.skikt`. `m7` och högre läses inte.
- **Tilläggen:** samma regel med `tm1`, `tm2`. `tm1=&tm2=` ger en tom lista, alltså inget tillägg. Ingen av nycklarna ger `STANDARD.tillagg`.
- `luftspalt` i `tm` är ett okänt värde.
- Talen tolkas med `tillTal` som i `elkostnad.ts`, utökat så att mellanslag i talet och ett efterhängande `mm` eller `m2` tolkas ("1 200", "12,5 mm").
- Ett okänt enum-värde ger standardvärdet utan fel, som `cc=450` i altan. Ett okänt material ger fel, eftersom det annars tyst skulle försvinna ett skikt ur räkningen.

### 2.7 `raknaUVarde(i: UVardeIndata): UVardeResultat`

**Validering** (alla fel samlas, inget avbryter de andra; `ogiltig` om minst ett):

Alltid:
- `yta` utanför [1, 500] eller NaN → `fel.yta`.

Läget `skikt`:
- `del` är `fonster` eller `dorr` → `fel.del` (TEXT `fel-del-skikt`).
- 0 skikt → `fel.skikt` (`fel-skikt-tomt`). Fler än 6 → `fel.skikt` (`fel-skikt-for-manga`).
- Per skikt, på `s{rad}` (ett fel per rad, första som slår in i den här ordningen): `material` null → `fel-material-okant`; luftspalt och `del` inte vägg → `fel-luftspalt-bara-vagg`; inte luftspalt och tjocklek utanför [10, 600] eller NaN → `fel-tjocklek`; `reglar` på luftspalt → `fel-reglar-luftspalt`.
- Mer än en luftspalt → `fel.skikt` (`fel-luftspalt-tva`).
- Luftspalten är det första skiktet i listan → `fel.skikt` (`fel-luftspalt-innerst`).
- `reglar` på mer än ett skikt → `fel.skikt` (`fel-reglar-flera`).
- Fler än 2 tillägg → `fel.tillagg`. Per tillägg på `t{rad}`: `material` null → `fel-material-okant`; tjocklek utanför [10, 600] eller NaN → `fel-tjocklek`.

Läget `uvarde`:
- `uf` och `ue` mot `uOpak` för vägg, tak, golv och mot `uFonster` för fönster och dörr → `fel.uFore`, `fel.uEfter` (`fel-u-opak`, `fel-u-fonster`).
- `ue >= uf` är **inte** ett fel.

Skikt och tillägg valideras inte i läget `uvarde`, och `uf`, `ue` inte i läget `skikt`.

**Räkningen, i den här ordningen. Inget avrundas förrän det visas.**

1. **Vilka skikt som räknas.** Gå genom skikten i ordning. Från och med luftspalten sätts `raknas: false` på luftspalten och allt utanför den, och `rse = RSE_LUFTSPALT`. Utan luftspalt är `rse = RSE`. `rsi = RSI[del]`.
2. **Motståndet per skikt.** `r = (tjocklekMm / 1000) / lambda`. För skiktet med reglar även `rRegel = (tjocklekMm / 1000) / LAMBDA_REGEL`.
3. **U före**, `uForSkikt(rsi, rse, homogena, regelskikt)` där `homogena` är summan av r för de skikt som räknas utom regelskiktet:
   - Utan reglar: `R_T = rsi + Σr + rse`, `U = 1 / R_T`.
   - Med reglar (underlaget 1.2):
     - `R_isol = rsi + homogena + r + rse`, `R_regel = rsi + homogena + rRegel + rse`
     - `R_ovre = 1 / ((1 − REGELANDEL) / R_isol + REGELANDEL / R_regel)`
     - `λ_mix = (1 − REGELANDEL) × λ + REGELANDEL × LAMBDA_REGEL`
     - `R_undre = rsi + homogena + (tjocklekMm / 1000) / λ_mix + rse`
     - `R_T = (R_ovre + R_undre) / 2`, `U = 1 / R_T`
   - Ett regelskikt som ligger utanför luftspalten räknas inte och ger inga reglar.
4. **U efter**, bara när det finns tillägg: samma funktion, med tilläggens r adderade till `homogena` (A1). Med reglar hamnar tillägget alltså i både R_isol, R_regel och R_undre.
5. **uSlut** = uEfter om det finns, annars uFore.
6. **Jämförelsen** för uSlut och för uFore, per kolumn: `klarar = Math.round(u * 1000) / 1000 <= grans`. Talet som visas och beskedet får aldrig säga olika saker.
7. **Beskedet:**
   - skiktläge utan tillägg: `bara-u-klarar` om båda kolumnerna klarar, annars `bara-u-over` (för vägg, tak och golv är kolumnerna lika)
   - `uEfter >= uFore` (oavrundat): `ingen-forbattring`
   - båda kolumnerna klarar: `klarar`
   - bara `till-2026-09-30` klarar: `klarar-gamla`
   - annars: `battre-men-over`
8. **Besparingen**, bara vid `klarar`, `klarar-gamla`, `battre-men-over`:
   - `kwhPerAr = (uFore − uEfter) × ytaM2 × GRADTIMMAR[region] / 1000`
   - `krPerAr = kwhPerAr × ELPRIS_KR_PER_KWH`
   - per värmepump: `krMin = kwhPerAr / scopMax × elpris`, `krMax = kwhPerAr / scopMin × elpris`. Inget medelvärde.
9. **Återbetalningen:**
   - ingen besparing: `null`, `'ingen-besparing'` (först; ändrat vid granskning 1, fall 10 i 6.1 kräver det)
   - läget uvarde: `null`, `aterbetalningSaknas: 'uvarde-lage'`
   - något tillägg saknar pris: `null`, `'inget-pris'`
   - annars `kostnadKr = Σ ytaM2 × tjocklekMm × materialprisKrM2Mm(material, tjocklekMm)`, `ar = kostnadKr / krPerAr`, `aterbetalningSaknas: null`
   - `materialprisKrM2Mm`: vindsull → `PRIS_VINDSULL_KR_M2_MM`; flexibatts → 45-priset om `tjocklekMm <= 70`, annars 95-priset; övriga `null`.
10. **gorInteDetHar**, i den här ordningen: `ug-mot-kravet` när `del` är fonster; `inifran-utan-daggpunkt` när skiktläge, `del` vägg och minst ett tillägg; `glom-termostaten` när besparing finns.
11. **regler**, i den här ordningen, de som gäller: `formel` (skiktläge), `luftspalt` (en luftspalt finns), `reglar` (ett regelskikt räknas), `delta-u` (skiktläge), `tak-kallvind` (skikt, tak), `golv-uteluft` (skikt, golv), `cellulosa` (cellulosa i något skikt eller tillägg), `fonster-uw` (fönster eller dörr), `boverket-andring`, `boverket-overgang`, `boverket-anpassning`, `boverket-50` (de fyra alltid), `gradtimmar`, `elpris`, `scop`, `energi-inte-matare` (de fyra när besparing finns), `aterbetalning-bara-ull` (när återbetalning finns).

### 2.8 Formatering (exporteras, sidan använder bara dessa)

- `treDecimaler(n)`: `n.toFixed(3)` med komma. 0.35689 → "0,357".
- `heltal(n)`: `Math.round(n)` med mellanslag som tusentalsavgränsare, som `millimeter()` i `trappa.ts`. 2271.28 → "2 271".
- `endecimal(n)`: som i `trappa.ts`. 11.7188 → "11,7".
- `delbarQuery(i: UVardeIndata): URLSearchParams`: `lage`, `del`, `yta`, `region`, sedan bara lägets nycklar. Skikt: `m{n}`, `d{n}` (inte för luftspalt), `r{n}=1` bara när sant, tillägg `tm{n}`, `td{n}`, alla med sina radnummer. Uvarde: `uf`, `ue`. Tal med komma.

### 2.9 Publika strängar

All text läsaren ser och som modulen äger står i **ett** objekt, `export const TEXT`, överst efter konstanterna. Varje värde är i dag `'TEXT SAKNAS: <nyckel>'`, så att `grep -r "TEXT SAKNAS" src/` hittar allt hantverkaren ska skriva. Feltexter med gränser är funktioner som tar talen ur `GRANSER`, till exempel `felTjocklek: (min: number, max: number) => \`TEXT SAKNAS: fel-tjocklek ${min} ${max}\``, så att hantverkaren skriver meningen och koden stoppar in talen.

Nycklar:

- `besked.<Besked>.rubrik` och `besked.<Besked>.rad`, sex par. Vad de ska säga: bara-u-klarar (väggen klarar Boverkets tal redan), bara-u-over (talet ligger över, lägg till ett tillägg för att se vad det sparar), ingen-forbattring (efter är inte lägre än före, kolla talen), klarar (du når Boverkets tal och sparar så här mycket), klarar-gamla (klarar 1,2 men inte 1,1 som gäller från 1 oktober 2026), battre-men-over (du sparar, men når inte gränsen). Varje rubrik en mening med verb som säger vad läsaren ska göra.
- `fel.*`: `del-skikt`, `skikt-tomt`, `skikt-for-manga`, `material-okant`, `luftspalt-bara-vagg`, `tjocklek(min,max)`, `reglar-luftspalt`, `luftspalt-tva`, `luftspalt-innerst`, `reglar-flera`, `yta(min,max)`, `u-opak(min,max)`, `u-fonster(min,max)`, `tillagg-for-manga`.
- `gorInte.<GorInte>`: tre stycken. Källor: Energimyndigheten ET 2025:06 s. 13 (termostaten), artikeln om Uw och Ug, artikeln och `/rakna/daggpunkt/` om isolering inifrån.
- `regel.<RegelNyckel>`: en rad per regel, med `kalla: { titel, url }` bredvid texten (källan är data, texten saknas).
- `kolumn.<Kolumn>`: rubriken på varje Boverkskolumn.
- `klarar`, `klararInte`: orden i jämförelsen.
- `aterbetalningSaknas.<orsak>`: tre korta rader. Koordinatorns beslut: ordet "saknas" ska synas.
- `region.<Region>`: "Mellansverige", "Södra Sverige", "Norra Sverige" (artikelns tabell, får stå).
- `del.<Byggnadsdel>`: TEXT SAKNAS. **Ordet "tak" får inte stå ensamt** (stil-och-design: ord med två betydelser); hantverkaren väljer.
- `vp.<VpTyp>`: "Luft-luft", "Luft-vatten", "Jord eller sjö", "Berg", "Frånluft" (Energimyndighetens namn, får stå).
- `antagande.<nyckel>`: kolumnen "Vad" i antagandetabellen, se 4.5.

Testerna låser nycklarna och att varje värde är en icke-tom sträng. När hantverkaren skrivit texterna läggs påståenden på dem till; tal rörs aldrig.

---

## 3. Formuläret `src/components/kalkyl/UVardeForm.astro`

Props (alla valfria, som `ElkostnadForm`):

```ts
interface Props {
  indata?: UVardeIndata;                                   // standard: STANDARD
  varden?: {                                               // råa strängar ur adressen
    yta: string; uf: string; ue: string;
    d: [string, string, string, string, string, string];
    td: [string, string];
  };
  fel?: Partial<Record<FelNyckel, string>>;
  kompakt?: boolean;
  idPrefix?: string;
  knappText?: string;                                      // standard 'Räkna ut'
  /** Länken som byter läge, byggd av sidan. Utelämnad: /rakna/u-varde/?lage=<andra läget>. */
  bytLageHref?: string;
}
```

Klasser bara ur `stil.ts`. Ingen klient-JS. `<form method="get" action="/rakna/u-varde/">` med `<input type="hidden" name="lage" value={indata.lage}>` först.

### 3.1 Ordning och layout på 375 px

Innerbredden i det linjerade papperet är 311 px (343 minus papperets inre marginal; kontrollera `.linjerat` i `global.css` och rapportera om den inte är 16 px per sida). Allt står i en kolumn. Ingenting får vara bredare än 311 px, och inga fält står bredvid varandra utom tjocklek, enhet och kryssruta på samma rad.

```
┌ 311 px ───────────────────────────────┐
│ TEXT SAKNAS: lage-rubrik               │  text-liten
│ [Skikt för skikt] · Jag vet U-värdet   │  aktuellt läge i fetstil utan länk,
│                                        │  det andra en LANK_KLASS-länk
│ Byggnadsdel (legend)                   │
│ ( ) Vägg  ( ) …  ( ) …                 │  radio, en per rad, min-h-11
│                                        │
│ Skikten inifrån och ut (legend)        │
│ hjälprad (bara full)                   │
│ Skikt 1                                │  etikett till select
│ [ select, hela bredden, 48 px     ▾]   │
│ [ 112 px ] mm   [x] med reglar         │  flex flex-wrap items-center gap-2
│ fel för raden                          │
│ … rad 2 till 6 likadana …              │
│                                        │
│ Det du lägger till (legend)            │
│ hjälprad (bara full)                   │
│ Tillägg 1                              │
│ [ select, hela bredden             ▾]  │
│ [ 112 px ] mm                          │
│ … Tillägg 2 …                          │
│                                        │
│ Yta                                    │
│ [ fält             ] m²                │
│ hjälprad (bara full)                   │
│                                        │
│ Del av landet (legend)                 │
│ ( ) Mellansverige ( ) Södra ( ) Norra  │  radio, en per rad
│                                        │
│ [ Räkna ut ]                           │
└────────────────────────────────────────┘
```

Läget `uvarde` byter blocken "Skikten" och "Det du lägger till" mot två fält, `uf` (U-värde före) och `ue` (U-värde efter), var och en med enheten "W/m²K" bredvid och en hjälprad under (bara full) som för fönster och dörr säger att det är Uw. Byggnadsdelen har då fem alternativ, i skiktläget tre (vägg, tak, golv).

Detaljer:

- **Lägesväxlingen** är två länkar, inte flikar och inte skript. Den som gäller är `<strong aria-current="true">`, den andra en länk till `bytLageHref`. Byggs av sidan (4.2). I kompakt form står bara en länk till `/rakna/u-varde/?lage=uvarde` med texten `TEXT SAKNAS: lage-kompakt`.
- **Skiktraderna** är `<fieldset>` per rad med `<legend class="sr-only">` "Skikt N" och en synlig `<label for={id('m'+n)}>` "Skikt N" (TEXT SAKNAS: `skikt-etikett`, med N ifyllt av koden). Selectens första alternativ har `value=""` och texten `TEXT SAKNAS: skikt-tomt-alternativ`. Därefter materialen i `MATERIAL_ORDNING`; i tilläggens select utan luftspalt. Luftspalten står med i skiktens select oavsett vald byggnadsdel; fel ges vid räkningen (formuläret kan inte dölja den utan skript).
- **Tjockleken** `d{n}`: `type="text" inputmode="decimal"`, `class` FALT_KLASS plus `max-w-28` (112 px), `aria-label` "Skikt N, tjocklek i millimeter" (TEXT SAKNAS: `tjocklek-aria`), enheten "mm" som `<span>` efter. För en luftspalt får fältet stå tomt.
- **Kryssrutan** `r{n}` value `1`, i en `<label class="flex min-h-11 items-center gap-2">` med texten `TEXT SAKNAS: reglar-kryss`. Undvik ordet "regel" ensamt i texten om hantverkaren kan (dubbel betydelse); det är hantverkarens val.
- **Fel** för en rad står under raden med id `{idPrefix}s{n}-fel`, och både select, tjockleksfält och kryssruta har `aria-describedby` till det. Felet `skikt` står direkt under legend "Skikten inifrån och ut" med id `{idPrefix}skikt-fel`, och alla sex selecter får det i `aria-describedby` utöver radens eget. Samma för `tillagg`. Fältet med fel får `ramKlass(true)`.
- **Värden i fälten** kommer ur `varden` (strängarna som de skrevs), valen ur `indata`. En tom rad i adressen står tom.
- **Kompakt** (i artikeln): skiktrader 1 till 4, tillägg 1, inga hjälprader, byggnadsdel och region som `flex flex-wrap gap-x-4`. Fälten som inte renderas skickas inte, och `tolkaQuery` läser då bara raderna som finns.
- **id**: alla via `id(namn)` med `idPrefix`, som `ElkostnadForm`. Radionamnen `del` och `region` behåller sina namn.
- Hjälpraderna (TEXT SAKNAS: `hjalp-skikt`, `hjalp-tillagg`, `hjalp-yta`, `hjalp-uf`, `hjalp-ue`, `hjalp-uw`) står i `TEXT` i modulen, inte i komponenten, så att alla publika strängar finns på ett ställe. `hjalp-skikt` ska säga: inifrån och ut, luftspalten och allt utanför räknas inte, tegel finns inte med. `hjalp-yta` ska säga vilken yta det gäller för vind och fönster.

---

## 4. Sidan `src/pages/rakna/u-varde.astro`

Som `trappa.astro`: `export const prerender = false`, `Astro.locals.sidtyp = 'verktyg'`, `Cache-Control: public, s-maxage=3600, stale-while-revalidate=86400` på alla svar, `reklam={false}`, `bred={true}`, brödsmulor Hantverkstips / Räkna själv / `VERKTYGSNAMN`, `ogBild={verktygsDelningsbild(SLUG)}`, `<StrukturData slot="head" data={verktyg({ url, namn: VERKTYGSNAMN, beskrivning: BESKRIVNING })} />`. Ingen produkt, inget reklamband, ingen `FAQPage`.

```ts
const SLUG = 'u-varde';
const VERKTYGSNAMN = 'TEXT SAKNAS: verktygsnamn';
const BESKRIVNING = 'TEXT SAKNAS: beskrivning';   // meta description, 120 till 155 tecken
const titel = 'TEXT SAKNAS: titel';               // högst 60 tecken, bär "beräkna U-värde"
```

### 4.1 Flöde

```ts
const q = Astro.url.searchParams;
const { indata } = tolkaQuery(q);
const resultat = raknaUVarde(indata);
const fel = resultat.status === 'ogiltig' ? resultat.fel : {};
const visatIndata = resultat.status === 'ogiltig' ? { ...STANDARD, lage: indata.lage } : indata;
const visat = raknaUVarde(visatIndata);   // alltid ok
```

Vid `ogiltig` står fälten kvar med läsarens värden och felen under, och spalten visar standardvärdenas svar i samma läge med standardvarningen överst: "Ett av fälten gick inte att läsa, så jag visar standardvärdena tills du rättat det." (gränssnittstext, ordagrant).

`varden` byggs som `faltVarde()` i trappa: råsträngen ur adressen när nyckeln finns, annars standardvärdet med komma. För `d1`–`d6` och `td1`, `td2`: råsträngen när nyckeln finns; saknas alla `m`-nycklar, standardskiktens tjocklekar på sina rader och tomt på resten.

### 4.2 Länkarna

- **Delbar adress**: `new URL('/rakna/u-varde/?' + delbarQuery(visatIndata), Astro.site ?? Astro.url)` i ett skrivskyddat fält med delatexten under, ordagrant: "Dina värden ligger i adressen. Markera den och kopiera, så får den du skickar till samma svar."
- **bytLageHref**: adressens egen query med `lage` bytt. Byter man till skikt och `del` är fonster eller dorr sätts `del=vagg`. Ingen annan nyckel ändras, så värdena från det andra läget följer med tillbaka.

### 4.3 Ordningen på sidan

1. Sidhuvudet som trappa: H1 (TEXT SAKNAS) och ingress (TEXT SAKNAS) i 7/12, varumärkesbilden i 5/12 från 1024 px, under ingressen på mobil, `alt=""`, `fetchpriority="high"`, utan `loading="lazy"`.
2. `<Faktaruta variant="kortsvar">` (TEXT SAKNAS, tre till fem meningar, en `<Markering>`).
3. `<div class="linjerat mt-8 lg:grid lg:grid-cols-2 lg:gap-8">` med formuläret och resultatspalten (4.4).
4. H2 "Därför blev svaret så" (`id="darfor-blev-svaret-sa"`, rubriken är mönstrets och får stå) (4.5).
5. H2 "Gör inte det här" när `gorInteDetHar` inte är tom: raderna som stycken.
6. H2 "Så räknar jag" (`id="sa-raknar-jag"`): skissen som `<Illustration namn="rakna/u-varde" alt="TEXT SAKNAS" bildtext="TEXT SAKNAS" />` när både skiss och varumärkesbild finns (som trappa), stegen i ord som en numrerad lista (TEXT SAKNAS, följer räkningen i 2.7 steg 1 till 9), sedan H3 "Vad siffrorna vilar på" och antagandetabellen (4.6).
7. H2 "Läs vidare" (rubriken är mönstrets): `/el/u-varde/`, `/el/tillaggsisolera-vind/`, `/rakna/elkostnad/`, `/rakna/daggpunkt/`. Länktexterna TEXT SAKNAS.
8. `<Faq>` med tre till fem frågor, TEXT SAKNAS. Inga frågor som artikeln redan besvarar ordagrant (trappans regel: guiden äger frasen).

### 4.4 Resultatspalten

`mt-8 border-t border-linje pt-6 lg:mt-0 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8`, som trappa. Innehållet uppifrån:

1. Standardvarningen, bara vid `ogiltig`.
2. Beskedet: `TEXT.besked[visat.besked].rubrik` i H3-stil (`<p>`, inte `<h3>`), raden under i `text-brod`.
3. Etiketten "U-värde" (TEXT SAKNAS: `etikett-u`) i etikett-stil, sedan på en baslinje: `treDecimaler(uSlut)` i `text-siffra` med `<Markering>`, och "W/m²K" i `text-ingress`. När `uEfter` finns, en rad i `text-liten text-blyerts-2` med U före (TEXT SAKNAS: `rad-u-fore`, talet ur koden).
4. Jämförelsen, två rader i en `<ul>` med `border-t border-linje py-2`: kolumnens rubrik, gränsen som Boverket skriver den ("0,18", "1,1"; ändrat vid granskning 1, se 12.3), och `klarar` eller `klararInte`.
5. Bara när `besparing` finns: etiketten (TEXT SAKNAS: `etikett-sparar`), `heltal(krPerAr)` + " kr" i `text-h1` (andra talet, ingen Markering), en rad i `text-liten` med `heltal(kwhPerAr)` kWh, regionens namn och elprisets `ELPRIS_KALLA.period` (TEXT SAKNAS: `rad-kwh`). Perioden ska stå intill kronorna.
6. Bara när `besparing` finns: värmepumparna, fem rader i en `<ul>`, "{vp-namn}: {heltal(krMin)} till {heltal(krMax)} kr" (TEXT SAKNAS: `rad-vp`, talen ur koden). Ingen tabell i spalten.
7. Återbetalningen: finns den, `endecimal(ar)` år och `heltal(kostnadKr)` kr i ull (TEXT SAKNAS: `rad-aterbetalning`); annars `TEXT.aterbetalningSaknas[orsak]`.
8. Pekraden till `#darfor-blev-svaret-sa` (TEXT SAKNAS: `pekrad`), länken "Så räknar jag" till `#sa-raknar-jag`, länken till `/rakna/elkostnad/` för eget elpris (TEXT SAKNAS: `rad-eget-elpris`), och den delbara adressen.

Vid `bara-u-*` och `ingen-forbattring` faller punkt 5 och 6 bort och punkt 7 säger orsaken. Spalten får inte ha sidledsscroll på 375 px: alla tal med `&nbsp;` mot sin enhet, inga tabeller, `tabular-nums` på listorna. **Spaltbudget: högst 1 000 tecken synlig text vid standardvärdena**, exklusive den delbara adressen; utvecklaren rapporterar talet.

### 4.5 "Därför blev svaret så"

- **Skiktläget:** en tabell i `<Tabellyta kolumner={4}>` med kolumnerna Skikt, Tjocklek (mm), λ (W/mK), R (m²K/W) (rubrikerna TEXT SAKNAS, enheten i rubriken). Rader: Rsi; varje skikt i `detaljer.rader` med `kalla: 'fore'` (ett skikt som inte räknas har R-cellen `TEXT SAKNAS: raknas-inte`; skiktet med reglar visar R som "{r} / {rRegel}" med tre decimaler); Rse; och för före: vid reglar raderna övre gräns, undre gräns, R_T; utan reglar R_T; sist U före. Därefter, om tillägg finns, tilläggens rader, R_T efter (och övre och undre gräns vid reglar) och U efter. Alla R med tre decimaler, U med tre decimaler. Radetiketterna TEXT SAKNAS.
- Under tabellen, eller direkt i läget uvarde: `regler` som en lista, varje rad med etikett efter slag (TEXT SAKNAS: `slag-formel`, `slag-boverket`, `slag-besparing`, `slag-begransning`), texten ur `TEXT.regel[nyckel]` och källan som länk under. Slaget: formel, luftspalt, reglar, delta-u, cellulosa → formel; boverket-*, fonster-uw → boverket; gradtimmar, elpris, scop, aterbetalning-bara-ull → besparing; tak-kallvind, golv-uteluft, energi-inte-matare → begränsning.

### 4.6 Antagandetabellen

`export const ANTAGANDEN: { nyckel: string; varde: string; typ: 'Källa' | 'Antagande'; kalla?: { titel: string; url: string; last: string } }[]` i modulen, sidan renderar den i `<Tabellyta kolumner={3}>` med kolumnerna Vad (`TEXT.antagande[nyckel]`), Värde (`varde`, byggt av konstanterna, aldrig skrivet för hand) och Källa eller antagande (typ plus länk). Raderna, i ordning:

formeln; Rsi vägg, tak, golv; Rse; Rse bakom ventilerad luftspalt; regelandel; λ i regeln; de tretton materialen; gradtimmar Mellansverige, söder, norr; elpris med period; fem SCOP-rader; Boverket tak, vägg, golv, fönster, dörr (värdet "0,13 och 0,13", båda kolumnerna); pris Vindsull, Flexibatts 45, Flexibatts 95; ANTAGANDE ΔU = 0; A1 tillägg utan reglar och innanför luftspalten; A2 skivpris närmaste tjocklek; exakt åtgång och bara ullen; A3 återbetalning mot direktverkande el och utan ränta, prisändring och rotavdrag; hela besparingen från värmepumpen; tak mot kallvind Rse 0,04; golv som bjälklag mot uteluft; cellulosa 0,040 spannets sämre ände; gränserna för känt U.

Prisraderna har datum i Värde eller Källa. Testet kontrollerar att varje konstant i 2.2 har en rad, utom `STANDARD` (granskning 1: standardvärdena syns i formuläret och är inget svaret vilar på). Sidan visar bara raderna som gäller svaret, se 12.2.

---

## 5. Registret

Efter posten `elkostnad` i `KALKYLATORER`:

```ts
{
  slug: 'u-varde',
  namn: 'TEXT SAKNAS: register-namn',   // bär frasen "beräkna U-värde"; ankartext i artiklarna
  rad: 'TEXT SAKNAS: register-rad',     // högst tolv ord, en mening med verb
  /* Eldningssäsongen. "tilläggsisolera vind" toppar i februari enligt
     docs/SOKORDSANALYS.md, och frågan om vad isoleringen sparar ställs när
     elräkningen kommer. */
  sasong: [10, 3],
  pelare: ['el'],
},
```

---

## 6. Testet `scripts/test-kalkyl-u-varde.mjs`

`node --experimental-strip-types --test scripts/test-kalkyl-u-varde.mjs`. Tolerans: U ± 0,0005 mot det oavrundade värdet nedan (och exakt mot tre decimaler), kWh ± 0,5, kr ± 0,5, år ± 0,05. Talen i facit är egen räkning ur underlagets formler, kontrollerad 2026-09-24.

### 6.1 Fallen

| # | Indata | Facit |
|---|---|---|
| 1 | STANDARD skikt utan tillägg (`tillagg: []`) | uFore 0,35689 ("0,357"), uEfter null, besked `bara-u-over`, besparing null, `aterbetalningSaknas: 'ingen-besparing'`, detaljer.fore: rOvre 2,85861, rUndre 2,74528, rTotal 2,80195, rse 0,13 |
| 2 | STANDARD (skikt, 50 mm Flexibatts, 100 m², mitt) | uFore 0,35689, **uEfter 0,23516** ("0,235"), rTotal efter 4,25251, rOvre 4,40839, rUndre 4,09664, besked `battre-men-over`, kWh 1 086,89, kr 2 608,54, kostnad 4 994,44 kr (100 × 50 × 44,95/45), år 1,9, gorInte `['inifran-utan-daggpunkt', 'glom-termostaten']`. VP luft-luft 521,71 till 745,30 |
| 3 | uvarde, vägg, 0,40 → 0,18, 100 m², mitt | kWh 1 964,16, kr 4 713,98, besked `klarar`, återbetalning null med `'uvarde-lage'` |
| 4a | uvarde, tak, 0,184 → 0,078, 100 m², mitt | **kWh 946,37, kr 2 271,28**, besked `klarar`, VP: luft-luft 454,26–648,94; luft-vatten 504,73–757,09; jord-sjo 454,26–567,82; berg 412,96–567,82; franluft 567,82–908,51 |
| 4b | samma, syd | kWh 757,09, kr 1 817,03 |
| 4c | samma, norr | kWh 1 277,60, kr 3 066,23 |
| 5 | uvarde, tak, 0,357 → 0,099, 100 m², mitt / syd / norr | kWh 2 303,42 / 1 842,74 / 3 109,62; kr 5 528,22 / 4 422,57 / 7 463,09 (vindguiden: "drygt 2 300", "ungefär 5 500", "kring 4 400", "runt 7 500") |
| 6a | skikt, tak, gips 13 + Flexibatts 200; tillägg Vindsull 300; 100 m², mitt | uFore 0,17859, uEfter 0,07848, kWh 893,76, kr 2 145,01, kostnad 25 137 kr, år 11,7, besked `klarar`, rsi 0,10, rse 0,04 |
| 6b | samma med tillägg Granulate 300 | uEfter 0,07742, kWh 903,21, aterbetalning null med `'inget-pris'` |
| 7a | uvarde, fönster, 2,8 → 0,9, 1,5 m², mitt | kWh 254,45, kr 610,68, besked `klarar`, gorInte innehåller `ug-mot-kravet` |
| 7b | `besparingKwh(1.0, 1.5, 'mitt')`, alltså U-skillnad, yta, region (artikelns stycke om Energimyndighetens metod) | 133,92 (artikeln: 134) |
| 7c | uvarde, fönster, 2,8 → 1,15 | besked `klarar-gamla`, jamforelse `[klarar: true, klarar: false]` |
| 8 | skikt, golv, trä 22 + Flexibatts 145; tillägg Flexibatts 50; 80 m², mitt | uFore 0,23331, uEfter 0,17739, kWh 399,46, kr 958,71, kostnad 3 995,56, år 4,2, besked `battre-men-over`, rsi 0,17 |
| 9a | skikt, vägg, gips 13 + Flexibatts 120 (inga reglar) + luftspalt + trä 22 | U 0,28110 (artikeln: 0,281), raden med trä `raknas: false`, rse 0,13 |
| 9b | samma utan träskiktet | U 0,28110, exakt lika med 9a |
| 9c | samma utan luftspalt (gips, ull, trä direkt) | U 0,27590, rse 0,04 |
| 10 | uvarde, tak, 0,078 → 0,184 | besked `ingen-forbattring`, besparing null, `'ingen-besparing'`, gorInte utan `glom-termostaten` |
| 11 | skikt, vägg, gips 12,5 (från adressen "12,5") + Flexibatts 120 | status ok, U 0,28857 |
| 12 | skikt, vägg, gips 13 + Flexibatts 95 (inga reglar, ingen luftspalt); tillägg Flexibatts 95; 20 m², mitt | uFore 0,35820, uEfter 0,18659, kWh 306,42, kr 735,42, kostnad 1 699,00 (20 × 95 × 84,95/95, 95-priset enligt A2), år 2,3 |
| 13 | STANDARD med tillägget bytt till Paroc 50 | aterbetalning null, `'inget-pris'` |

### 6.2 Ogiltigt, ett test per rad

| Indata | Fel på |
|---|---|
| skikt med tjocklek 700 | `s{rad}` |
| skikt med tjocklek 5 | `s{rad}` |
| sju skikt (direkt till `raknaUVarde`) | `skikt` |
| inga skikt | `skikt` |
| yta 0, yta 600, yta NaN | `yta` |
| luftspalt två gånger | `skikt` |
| luftspalt på tak | `s{rad}` |
| luftspalt som första skikt | `skikt` |
| reglar på två skikt | `skikt` |
| reglar på luftspalten | `s{rad}` |
| material `null` | `s{rad}` |
| skiktläge med del fönster | `del` |
| tre tillägg | `tillagg` |
| tillägg 5 mm | `t{rad}` |
| uvarde vägg uf 3,5 | `uFore` |
| uvarde fönster ue 0,4 | `uEfter` |
| uvarde fönster uf 6,0 och ue 0,5 | ok (gränserna är inklusive) |
| flera fel samtidigt (yta 0 och tjocklek 5) | båda nycklarna |

### 6.3 Artikeln och vindguiden som facit (läses från disk)

- `src/content/kunskap/el/u-varde.mdx`: lambdatabellen under "Räkna ut U-värdet skikt för skikt" parsas; varje rad ska ha ett material med samma λ (cellulosa: tabellens övre värde 0,040). Boverkstabellen parsas; varje cell ska vara `BOVERKET`. Gradtimmetabellen: "89 280" ska vara `GRADTIMMAR.mitt`. Stegen: "0,281" och "0,357" ska vara fall 9a och fall 1 med tre decimaler. Fasaden: "1 964" ska vara fall 3. Fönstret: "134" ska vara fall 7b avrundat. Rättning 1: fall 2 avrundat till två decimaler ska vara talet i meningen om 50 mm ("0,24").
- Så länge rättning 2 inte är gjord saknar artikeltabellen Vindsull: det testet skrivs som `test('…', { todo: 'rättning 2' }, …)` och blir ett vanligt test när raden finns. Samma för rättning 1 om summan 4,151 (ska inte finnas kvar).
- `src/content/guider/el/tillaggsisolera-vind.mdx`: Rockwoolraderna 0,184/0,078 och 0,357/0,099 läses ur tabellen och ger fall 4a och 5; "950 kilowattimmar" ska vara fall 4a avrundat till tiotal (950), "drygt 2 300" ska vara fall 5 avrundat nedåt till hundratal.

### 6.4 Övrigt som testas

- Konstanterna mot underlaget: RSI, RSE, RSE_LUFTSPALT, REGELANDEL, LAMBDA_REGEL, alla λ, GRADTIMMAR (89 280, 71 424, 120 528), VP_TYPER, BOVERKET, de tre priserna (0,8379, 0,99889, 0,89421).
- `ELPRIS_KR_PER_KWH` importeras, inte skrivet: modulens källtext innehåller inte `2.4` utanför kommentarer (läs filen och sök).
- `tolkaQuery`: tom adress ger STANDARD och `harIndata: false`; `lage=uvarde&uf=0,4&ue=0,18` tolkas; "12,5 mm" och "1 200" tolkas; okänd `del` ger standard; `m2=` tom rad hoppas över och radnumren behålls (`m1=gips&d1=13&m3=tra&d3=22` ger rad 1 och 3); `m1=tegel` ger `material: null`; `tm1=&tm2=` ger tom tilläggslista; `tm1=luftspalt` ger `material: null`; `r2=1` sätter reglar, `r2=ja` inte.
- `delbarQuery(tolkaQuery(x).indata)` tolkad igen ger samma indata för STANDARD, fall 3 och fall 6a (rundtur).
- Formatering: `treDecimaler(0.35689) === '0,357'`, `heltal(2271.28) === '2 271'`, `endecimal(11.7188) === '11,7'`.
- `TEXT`: varje `Besked`, `GorInte`, `RegelNyckel`, `Kolumn`, `Region`, `Byggnadsdel`, `VpTyp` och varje `ANTAGANDEN`-nyckel har en icke-tom sträng.
- `ANTAGANDEN` har en rad per konstant i 2.2 och varje rad med typ Källa har en `https`-adress.

---

## 7. Budget och kontroller

- `node --experimental-strip-types --test scripts/test-kalkyl-u-varde.mjs`: grönt, 0 todo utöver rättning 1 och 2.
- `npx astro check --minimumSeverity error`: 0 fel.
- `npm run kontrollera`: 0 fel, varningarna rapporteras.
- Sidan i `npm run preview` (koordinatorn bygger) med `curl`: 0 `<script>` utöver JSON-LD, ingen `.js`-referens, HTML under 66 kB vid standardvärden **och** vid fall 2 med alla sex skiktrader ifyllda. Utvecklaren mäter med `npm run dev` och rapporterar storleken; jag mäter om på bygget.
- Varumärkesbilden under 30 kB (de andra ligger på 17 till 26), skissen under 40 kB utan `<text>`.
- 375 px: ingen sidledsscroll utom inuti `<Tabellyta>`, alla fält 48 px, fokusring synlig, varje fält med etikett eller `aria-label`.

---

## 8. Inbäddningen

- `src/components/ui/Kalkylator.astro`: `import UVardeForm from '../kalkyl/UVardeForm.astro';`, `'u-varde'` sist i `MED_FORMULAR`, och `{namn === 'u-varde' && <UVardeForm kompakt={true} idPrefix={prefix} knappText="Räkna ut" />}` efter trappans rad.
- `src/content/kunskap/el/u-varde.mdx`: `<Kalkylator namn="u-varde" />` på egen rad, med en blankrad före och efter, **direkt efter stycket som slutar med U-värdet för 50 mm ull på insidan** ("Ett lager på 50 mm ull på insidan …", i dag rad 174) och före H2 "Det en lägre siffra är värd i kilowattimmar och kronor". Det är räkneexemplet: formulärets standardvärden är just den väggen, så läsaren ser samma skikt som hon just läst.
- `src/content/guider/el/tillaggsisolera-vind.mdx`: `<Verktygskort kalkylator="u-varde" />` på egen rad, direkt efter stycket som slutar "… runt 7 500 kr." och före stycket "Det finns en hake med besparingen också". Sidan har inget annat Verktygskort; `<Kalkylator namn="rotavdrag" />` räknas inte.

Ingen annan rad i de två filerna ändras av utvecklaren.

---

## 9. Bilderna

### 9.1 Skissen, uppdrag B

`src/assets/illustrationer-kallor/rakna/u-varde.svg`, 600 × 360, blyerts på linjerat papper enligt DESIGN.md avsnitt 7, Caveat 500 i 24 px, konverteras av `npm run illustrationer` till `src/assets/illustrationer/rakna/u-varde.svg`. Artikelns huvudbild visar väggens skikt (`spec-bilder-el-2026-09-24.md` avsnitt 2); den här visar vinden, så de två inte blir samma bild.

- **Motiv:** ett vindsbjälklag i genomskärning, fallet 4a. Nederst innertaket som en tunn linje med rummet under antytt av två korta vågiga värmestreck i blyerts-2 som stiger och slutar under isoleringen. Ovanpå ett lager gammal ull, ritat med ullens öglor, och ovanpå det ett tjockare lager ny lösull med glesare öglor och ojämn överkant. Två takstolar som sneda linjer i bildens övre hörn antyder yttertaket, luft kvar mellan ullen och taket.
- **Mått som byglar** i blyerts-2 till vänster: bygel över gamla lagret med "200 mm", bygel över nya lagret med "300 mm". Proportionen mellan lagren 2 : 3.
- **Det som pekar:** en pil i `penna` från nya lagret till nyckeltalet. Inget annat i penna.
- **Nyckeltalet** uppe till höger med gul markering: "2 271 kr" plus hantverkarens ord för "per år". Ingen annan siffra markerad.
- **Övriga etiketter** i handskrift, blyerts: U-värdena "0,184" och "0,078" med hantverkarens ord runt (före och efter), ytan "100 m²". 
- **Etiketterna ordagrant: TEXT SAKNAS, skrivs av hantverkaren.** Talen ovan är fasta: 200 mm, 300 mm, 0,184, 0,078, 100 m², 2 271 kr.
- Alt under 125 tecken och bildtext: TEXT SAKNAS.

### 9.2 Varumärkesbilden, uppdrag A

`src/assets/illustrationer/rakna/varumarke/u-varde.svg`, 600 × 360, ingen källfil (ingen text). Logotypens stil: konturer i `blyerts` (#hexvärdet ur global.css) 2 px med runda ändar, `tumstock` som enda fyllda färg, transparent bakgrund, ingen text, inga tal, ett pennstreck som signatur så som de befintliga varumärkesbilderna gör det (titta på `varumarke/elkostnad.svg` och `varumarke/trappa.svg` och gör likadant).

- **Motiv:** ett brett enplanshus i genomskärning med sadeltak. Vindsbjälklaget bär ett tjockt, fyllt band i `tumstock` med knölig, molnlik överkant, så att det läses som lösull och inte som ett golv. Under bandet, inne i huset, två eller tre breda vågiga värmelinjer i blyerts som stiger och tar slut mot bandets undersida. Ovanför bandet luft upp till taket.
- Det sidan handlar om, isoleringsbandet, är den näst största formen efter huset och känns igen ensamt vid 343 px.
- Motivets bbox-kvot 1,72 ± 0,05 och fyller 90 till 94 procent av bredden. Ett enplanshus med låg takfot når kvoten utan tom mark; marklinjen är en enda rak linje, samma nivå på båda sidor.
- Inga fönster, dörrar eller skorsten med pyttedetaljer. Högst ett fönster om huset annars inte läses som hus.
- Under 30 kB.

Jag rendrar båda på 343 px och godkänner mot DESIGN.md avsnitt 7 innan de räknas som klara.

---

## 10. Godkännandekriterier (min granskning)

1. Varje konstant i 2.2 och 2.3 finns namngiven med Källa eller ANTAGANDE, och ingen räkning står i en `.astro`-fil.
2. Testet grönt med fallen i 6.1 till 6.4; astro check 0 fel; kontrollera 0 fel.
3. Fältnamn, query-nycklar och id exakt som i 2.6 och 3; en delad adress ger samma svar som formuläret; bytLageHref behåller värdena.
4. Tillstånden: tom adress (skiktläget med artikelns vägg), ifyllt, ogiltigt (fälten kvar, fel under rätt fält, standardsvar med varningen), utanför gränserna, `bara-u-*`, `ingen-forbattring`, återbetalning saknas med var och en av de tre orsakerna.
5. 375 px: formuläret och spalten utan sidledsscroll, spalten högst 1 000 tecken vid standard, fokus synligt, varje fält med etikett.
6. Budgeten i avsnitt 7.
7. Bilderna mot 9.1 och 9.2.
8. `grep -r "TEXT SAKNAS" src/` ger bara träffar i de filer som skapats här, och listan lämnas till hantverkaren. **Sidan, registerposten och de två inbäddningarna committas inte förrän listan är tom**, eftersom registret visar verktyget i `/rakna/`, sidfoten och elhubben och inbäddningarna gör det synligt i två publicerade sidor.

---

## 11. Rättningar hantverkaren gör i artikeln (inte utvecklaren)

1. **`/el/u-varde/`, stycket om 50 mm ull på insidan (i dag rad 174).** "Summan blir 4,151 och U-värdet 0,24" följer inte standardens metod. Ullagret ska läggas till i båda räkningarna: mellan reglarna blir det 3,557 + 1,351 = 4,908 och genom regeln 1,171 + 1,351 = 2,522, U-värdena 0,204 och 0,397 väger ihop till 0,227 och motståndet 4,405, den blandade räkningen ger 2,743 + 1,351 = 4,094, medelvärdet blir 4,250 och U-värdet **0,235** (med artikelns avrundning i varje steg; oavrundat 4,2525 och 0,23516). "0,24" håller fortfarande som avrundat tal. Räknaren visar 0,235.
2. **`/el/u-varde/`, lambdatabellen.** En rad för Rockwool Vindsull, stenull, lösull handutlagd, λ 0,042, och källan i `kallor`: Bauhaus produktdata, https://www.bauhaus.se/losull-rockwool-roxull-vindsull-20kg , läst 2026-09-24. Cellens ordalydelse blir `MATERIAL['stenull-vindsull'].etikett`.

Vindsexemplet: artikeln `/el/u-varde/` räknar inget vindsexempel alls, och vindguiden skriver "950 kilowattimmar om året, drygt 2 200 kr", vilket är 946 och 2 271 avrundat. Talen 862 och 2 070 står ingenstans på sajten; ingen rättning behövs för dem.

---

## 12. Granskning 1, 2026-09-24 (UX och bygge)

Testet 45 av 45 grönt, `astro check` 0 fel, delad adress ger samma spalt i fyra prövade fall, 375 px utan sidledsscroll (mätt med `scrollWidth` i en riktig 375-vy), spalten 789 tecken. Varumärkesbilden godkänd (bbox 1,75, 92,7 procent av bredden, 3,9 kB). Två medvetna avvikelser godkända: återbetalningens orsaker med `ingen-besparing` först (2.7 steg 9 är rättad), och ingen `STANDARD`-rad (4.6 är rättad).

Retur för budgeten: `/rakna/u-varde/` väger 98,9 kB vid standard och 100,3 kB med sex skikt och två tillägg (dev-HTML utan Vites skript och `data-astro-source-*`, som stämmer med bygget inom 0,5 kB på `/el/u-varde/`). Gränsen är 66. Av överskottet är 12 kB klassattribut i de två tabellerna, 7 kB samma källa upprepad per rad i antagandetabellen och 8 kB listornas materialnamn. Inbäddningen lägger 10,5 kB på `/el/u-varde/`.

### 12.1 Tabellerna utan klass per cell

Båda tabellerna i sidan (skikttabellen i "Därför blev svaret så" och antagandetabellen) får sina cellklasser en gång på `<table>` med godtyckliga varianter, i en konstant överst i sidan, till exempel `const TABELL_KLASS = 'w-full border-collapse text-liten tabular-nums [&_th]:p-2 [&_td]:p-2 [&_th]:align-top [&_td]:align-top [&_th]:text-left [&_tbody_th]:font-normal [&_tr]:border-b [&_tr]:border-linje [&_th]:text-blyerts [&_td]:text-blyerts [&_thead_th]:text-etikett [&_thead_th]:uppercase [&_thead_th]:text-blyerts-2'`. Inga `class` på `th`, `td` eller `tr` i raderna, utom `class="font-bold"` på summaradernas `<tr>`. Samma sätt för regellistan i "Därför blev svaret så": klasserna på `<li>` och dess `<span>` flyttas till `<ul>` som varianter, bara ramfärgen per slag står kvar på `<li>`. Utseendet ska vara oförändrat på 375 och 1280 px.

### 12.2 Antagandetabellen visar det svaret vilar på

- `AntagandeRad.kalla?: KallaRef` blir `kallor: KallaRef[]` (tom för Antagande). Boverksraderna får `[BBR_9_92, BFS_2026_9]`, eftersom kolumnen till och med 30 september 2026 kommer ur BFS 2011:6 och i dag inte citeras någonstans på sidan.
- Raderna `cellulosa` och `material-luftspalt` tas bort ur `ANTAGANDEN` och `TEXT.antagande`. `material-cellulosa` får `typ: 'Antagande'` med Energimyndigheten som källa (etiketten säger redan "räknad med 0,040"). `rse-luftspalt` bär luftspalten.
- Ny export `antagandenFor(r)` för ett `ok`-resultat. Den returnerar raderna ur `ANTAGANDEN`, i deras ordning, när villkoret gäller:
  - `formel`, `delta-u`: läget skikt. `rsi-{del}`: läget skikt och samma del. `rse`: läget skikt utan luftspalt. `rse-luftspalt`: luftspalt finns. `regelandel`, `lambda-regel`: ett regelskikt räknas.
  - `material-{m}`: `m` finns i `detaljer.rader` med `raknas: true` (före eller tillägg).
  - `tillagg-utan-reglar`: läget skikt med tillägg. `tak-kallvind`: skikt och tak. `golv-uteluft`: skikt och golv.
  - `boverket-{del}`: alltid, bara aktuell del.
  - `gradtimmar-{region}` (bara aktuell region), `elpris`, de fem `scop-*`, `hela-besparingen-vp`: när `besparing` finns.
  - `exakt-atgang`, `aterbetalning-direktel`: när `aterbetalning` finns. `pris-vindsull`, `pris-flexibatts-45`, `pris-flexibatts-95`: när `aterbetalning` finns och just det priset användes. `skivpris-narmaste`: när `aterbetalning` finns och Flexibatts finns bland tilläggen.
  - `granser-u`: läget uvarde.
- Sidan renderar `antagandenFor(visat)`. Kolumnen "Källa eller antagande" visar `{typ}.` och källornas `titel` som text utan länk, skilda med semikolon. Direkt under tabellen, i samma `<section>`, en `<ul class="m-0 mt-4 pl-6 text-liten">` med varje källa som förekommer i de visade raderna **en gång**, i den ordning de först förekommer: `<a href rel="nofollow" class={LANK_KLASS}>{titel}</a>, {last}`. Ingen ny text.
- Test: `antagandenFor` för fall 2 ger mängden `formel, rsi-vagg, rse-luftspalt, regelandel, lambda-regel, material-stenull-flexibatts, material-gips, gradtimmar-mitt, elpris, scop-luft-luft, scop-luft-vatten, scop-jord-sjo, scop-berg, scop-franluft, boverket-vagg, pris-flexibatts-45, delta-u, tillagg-utan-reglar, skivpris-narmaste, exakt-atgang, aterbetalning-direktel, hela-besparingen-vp`, i `ANTAGANDEN`s ordning; fall 3 innehåller `granser-u` och varken `formel` eller något `material-*`; fall 7a innehåller `boverket-fonster` och inget annat `boverket-*`; fall 6a innehåller `pris-vindsull`, `material-stenull-vindsull`, `rsi-tak` och `tak-kallvind`. Testet på hela `ANTAGANDEN` justeras för de två borttagna nycklarna.

### 12.3 U-värdet och gränsen i spalten

- Nya exporter `avrundaU(u: number, del: Byggnadsdel): number` och `uText(u, del): string`. Fönster och dörr: två decimaler. Vägg, tak och golv: tre. `avrundaU` är `Math.round(u * 10 ** n) / 10 ** n`, `uText` är `avrundaU(u, del).toFixed(n)` med komma.
- `jamfor` jämför `avrundaU(u, del)` med gränsen, så att det visade talet och klarar eller klarar inte aldrig säger olika saker.
- Sidan: det stora talet och "Före var det" använder `uText(..., visat.del)`. Gränsen visas som Boverket skriver den, `komma(grans)`: "0,18", "0,13", "0,15", "1,2", "1,1". `gransText` tas bort. Skikttabellen i "Därför" behåller tre decimaler.
- Test: `uText(1.15, 'fonster') === '1,15'`, `uText(2.8, 'fonster') === '2,80'`, `uText(0.35689, 'vagg') === '0,357'`, `uText(0.4, 'vagg') === '0,400'`; uvarde fönster 2,8 till 1,104 ger `klarar`, 2,8 till 1,106 ger `klarar-gamla`.

### 12.4 Formuläret

- `MATERIAL[m].kort`, högst 26 tecken, visas i båda listorna (fullt och kompakt). `etikett` står kvar i skikttabellen. TEXT SAKNAS till hantverkaren; testet kräver icke-tom sträng och högst 26 tecken. I dag klipps "Stenull, skiva, Rockwool Flexibatts" av i listan på 375 px.
- Fullt format: skiktrader 1 till `min(6, max(2, högsta rad i indata.skikt + 1))`, tilläggsrader 1 till `min(2, max(1, högsta rad i indata.tillagg + 1))`. Standard ger fem skiktrader och två tillägg. `hjalp-skikt` får en mening om att en ny tom rad kommer när man fyllt den sista och tryckt på knappen (hantverkaren).
- Kompakt format: skiktrader 1 till 3 (gips, ull med reglar, luftspalt; panelen utanför luftspalten ändrar inte U, fall 9a och 9b) och tillägg 1.
- Läget uvarde för fönster och dörr: `hjalp-uw` bara under `uf`, ingen hjälprad under `ue` (i dag står samma mening två gånger).

### 12.5 Sidan i övrigt

- Faq: frågan "Vad sparar jag om jag har värmepump?" tas bort. Svaret står redan i spalten och i regeln om SCOP. Tre frågor kvar.
- Steg 6 i `STEG` säger "avrundat till tre decimaler"; hantverkaren skriver om det efter 12.3.

### 12.6 Mätning och gräns

**Beslut av koordinatorn 2026-09-24, ersätter sista meningen nedan:** räknaren publiceras när granskningarna är gröna, utan att vänta på skalet. 12.1 till 12.5 är fortfarande krav för mitt godkännande, eftersom de är sidans eget överskott. Specen för sidhuvud och sidfot är mitt nästa uppdrag direkt efter, och den sänker alla sidor på en gång. Min hållning står kvar i protokollet: räknarsidorna mäts mot samma 66 kB (SPEC-SIDMALLAR.md avsnitt 10, med preview och curl), och `/rakna/u-varde/` och `/el/u-varde/` ligger över den tills skalspecen är genomförd.

Utvecklaren mäter med `npm run dev` på standard och på `?m1=gips&d1=13&m2=stenull-flexibatts&d2=120&r2=1&m3=eps&d3=50&m4=pir&d4=30&m5=luftspalt&m6=tra&d6=22&tm1=stenull-flexibatts&td1=50&tm2=stenull-vindsull&td2=100`, med HTML:en rensad från `<script>` utom JSON-LD, `<style>` och attributen `data-astro-source-file` och `data-astro-source-loc`, och rapporterar båda talen och formulärets storlek i `/el/u-varde/`. Min uppskattning efter 12.1 till 12.5 är 68 till 71 kB. Resten är skalet: sidhuvud och sidfot väger 24,6 kB, varav 8,6 kB klassattribut (samma länkklass 35 gånger i sidfoten), mot budgetens 6. Det tar jag i en egen spec om skalet. Verktyget, registerposten och de två inbäddningarna publiceras inte förrän bygget visar högst 66 kB på båda adresserna.

### 12.7 Skissen `illustrationer-kallor/rakna/u-varde.svg`

- Isoleringen skrafferas enligt DESIGN.md avsnitt 7 (korta snedstreck 10 px, 45 grader, `blyerts-2` 1,25 px, 22 px emellan) i båda lagren i stället för öglor, som i `el/vind-bjalklag.svg`. Spec 9.1 sade öglor och var fel mot DESIGN.md. Nya lagrets knöliga överkant står kvar.
- Tre bjälkar i det gamla lagret, jämnt fördelade, som smala genomskurna reglar: två lodräta linjer i `blyerts` 2 px från innertaket till gamla lagrets överkant, cirka 11 px breda, ingen skraffering i dem. Nya lagret ligger obrutet över dem.
- Markeringen bara bakom "2 271 kr", inte bakom "om året".
- `aria-label` på rotelementet blir sidans `SKISS_ALT` ordagrant.
- Allt annat står kvar. Under 40 kB efter `npm run illustrationer`. Jag rendrar på 343 px igen innan den är godkänd.

### 12.8 Vindguiden

`<Verktygskort kalkylator="u-varde" />` står i dag på rad 79, mellan två stycken som hör ihop (förklaringen av U-värdet och "Vet du inte vad som ligger där uppe"). Den flyttas till platsen i avsnitt 8: direkt efter stycket som slutar "… runt 7 500 kr." (rad 117) och före "Det finns en hake med besparingen också".

---

## 12 B. Läsarens retur, 2026-09-24 (`retur-rakna-u-varde-2026-09-24.md`, betyg 2 av 5)

Här står det som ändrar beteende eller struktur. Texterna skriver hantverkaren; varje ny nyckel står som `TEXT SAKNAS: <nyckel>` tills dess. Avsnitten 12.9 till 12.16 gäller tillsammans med 12.1 till 12.8.

### 12.9 Hur mycket mer som behövs

- Nytt fält i `ok`-resultatet: `saknas: { mm: number; material: MaterialNyckel; grans: number } | null`.
- Räknas bara i läget skikt, och bara när beskedet är `bara-u-over` eller `battre-men-over`. Annars `null`.
- Materialet är tillägg 1:s material. Vid `bara-u-over` (inga tillägg) är det `STANDARD.tillagg[0].material`, alltså Flexibatts.
- Gränsen är kolumnen `fran-2026-10-01` för delen.
- Räkningen: behåll skikten och alla valda tillägg, och lägg till ett extra homogent lager `e` av materialet. Pröva `e = 10, 20, … 600` mm. Det första `e` där `avrundaU(uForSkikt(rsi, rse, homogena + tillaggR + e/1000/λ, regelskikt).u, del) <= grans` är `mm`. Klarar inte ens 600 mm gränsen blir `saknas` `null`.
- Ny export `extraForGrans(...)` med den loopen, så att testet kan anropa den direkt.
- Test (egen räkning 2026-09-24):
  - Fall 2 ger `{ mm: 50, material: 'stenull-flexibatts', grans: 0.18 }`, och U efter 50 mm till blir 0,17735.
  - Fall 1 ger `mm: 100` med Flexibatts.
  - Fall 8 (golv, gräns 0,15) ger `mm: 40`.
  - Fall 3 och fall 10 ger `null`, fall 6a ger `null`.

### 12.10 Beskeden med tal i rubriken

- `TEXT.besked[b].rubrik` blir en funktion `(v: BeskedVarden) => string`. Samma objekt skickas till alla sex:
  `interface BeskedVarden { u: string; grans: string; uFore: string; kr: string | null; mm: string | null; material: string | null }`.
- Sidan bygger objektet med `uText(visat.uSlut, del)` och `komma(gransen i fran-kolumnen)`. `uFore` är `uText(visat.uFore, del)` och `kr` är `heltal(krPerAr)` eller `null`. `mm` är `heltal(saknas.mm)` eller `null`, och `material` är `MATERIAL[saknas.material].kort` eller `null`.
- Hantverkaren väljer vilka tal rubriken bär, som i elkostnad och rotavdrag. Kravet: rubriken för `battre-men-over` och `bara-u-over` säger millimetrarna och materialet när `mm` finns. Rubriken för `klarar` säger kronorna.
- `rad` förblir en sträng.
- Test:
  - Rubriken för fall 2 innehåller `"50"` och Flexibatts korta namn.
  - Rubriken för fall 1 innehåller `"100"`.
  - Rubriken för fall 3 innehåller `heltal(krPerAr)`.
  - Varje rubrik i fall 1, 2, 3, 7c och 10 innehåller minst en siffra.
  - Testet på `klarar-gamla` byts mot ett nytt när texten finns.

### 12.11 Återbetalningen säger vad den räknar på

`TEXT.spalt['rad-aterbetalning']` ska på samma rad säga att bara isoleringen är med, alltså inte reglar, skivor, vindskydd och arbete. Raden står kvar på sin plats i spalten, punkt 7 i 4.4. Test: raden för fall 2 innehåller hantverkarens ord för förbehållet. Påståendet skrivs när texten finns.

### 12.12 Reglarna väljs en gång, och bara på isolering

Det ersätter kryssrutorna `r1` till `r6`, som i dag står på varje rad, också på gips och panel.

- **Query:** nyckeln `rg` med ett radnummer, 1 till 6, eller tomt för inga reglar. `r1` till `r6` läses inte längre. `STANDARD` motsvarar `rg=2`. `delbarQuery` skriver `rg` bara när ett skikt har reglar.
- **Indata:** `tolkaQuery` sätter `reglar: true` på skiktet med den raden. Om raden saknas i listan har inget skikt reglar, och felet `reglar` sätts.
- **Modulen:** `MATERIAL[m].isolering: boolean`. Sant för de åtta isoleringsmaterialen och `mineralull-okand` (12.14), falskt för trä, gips, lättbetong, betong och luftspalt.
- **Validering:** ny felnyckel `reglar`, text `fel-reglar-inte-isolering`. Den sätts när `rg` pekar på en tom rad eller på ett material som inte är isolering. `fel-reglar-luftspalt` och `fel-reglar-flera` tas bort, eftersom det inte längre går att välja två.
- **Formuläret:**
  - Efter skiktraderna en `<label for={id('rg')}>` (`TEXT SAKNAS: reglar-etikett`) och en `<select name="rg">` i `FALT_KLASS`.
  - Första alternativet är `value=""` (`TEXT SAKNAS: reglar-inga`). Därefter ett alternativ per renderad skiktrad vars material är isolering, med texten `TEXT.form['skikt-etikett'](n)` följd av materialets `kort`.
  - Är `rg` satt i adressen till en rad som inte är isolering visas den ändå som valt alternativ, med felet under och `aria-describedby`.
  - Under listan står hjälpraden `hjalp-reglar`, bara i fullt format (12.13).
  - Kompakt: samma lista för rad 1 till 3.
- **Test:**
  - `rg=2` sätter reglar på rad 2.
  - `rg=1` med gips på rad 1 ger `fel.reglar`, och `rg=3` med luftspalt ger `fel.reglar`.
  - `rg=5` utan rad 5 ger `fel.reglar`.
  - Rundturen i `delbarQuery` håller.
  - Testerna på `r2=1` och `r2=ja`, på "reglar på två skikt" och på "reglar på luftspalten" ersätts av dessa.

### 12.13 Hjälptexterna där de behövs

Nya och omskrivna nycklar, alla i `TEXT.form`, bara i fullt format:

- `hjalp-reglar` står under reglarlistan. Den förklarar vad 12 procent trä betyder, alltså andelen i Svenskt Träs räkneexempel. Den säger inte vad andelen omfattar och inget cc-mått, eftersom Träguiden 9.3 bara skriver "12 procent träregelandel" (rättat vid granskning 2 efter hantverkarens kontroll; "syll och hammarband" saknade källa).
- `hjalp-skikt` skrivs om:
  - Den säger hur man ser att väggen har en ventilerad luftspalt: luft bakom en panel på läkt.
  - Den säger att tjockleksfältet på luftspaltens rad lämnas tomt.
  - Den säger att en ny tom rad kommer när den sista är ifylld (12.4).
  - Tegelmeningen flyttas ut ur hjälptexten; Faq-frågan om tegel räcker.

Formuläret ändras inte för detta, bara texten.

### 12.14 Mineralull utan märke

- Nytt material `mineralull-okand`, λ **0,045**, `isolering: true` och `pris: null`.
- Källan är Energimyndigheten, Isolering, ET 2025:06, tabell 1, s. 7: stenull 0,035 till 0,045 och glasull 0,032 till 0,040.
- `ANTAGANDE:` spannets sämre ände, som täcker både sten- och glasull, för ull vars märke och ålder läsaren inte känner till. Samma mönster som cellulosa.
- Det står först i `MATERIAL_ORDNING`, eftersom det är det vanligaste på en gammal vind.
- `etikett` och `kort` skrivs av hantverkaren.
- Antagandetabellen får raden `material-mineralull-okand` med `typ: 'Antagande'`.
- Andra material i läsarens lista (spånskiva, träfiberskiva, plywood, tegel) läggs inte till. Underlaget har inget värde för dem, och träfiber har bara ett spann utan en rad i artikeln.
- Rättning 3 i avsnitt 11 gäller: artikelns lambdatabell får samma rad, så att testet 6.3 håller.
- Test: λ 0,045. Artikelns tabell har raden, och testet läser den från disk.

### 12.15 Boverkets krav på en rad när kolumnerna är lika

- Spalten, punkt 4 i 4.4: när `jamforelse[0].grans === jamforelse[1].grans` (vägg, vindsbjälklag, golv) visas **en** rad. Etiketten är `TEXT.kolumn.bada` (TEXT SAKNAS), följd av gränsen och klarar eller klarar inte.
- Fönster och dörr behåller två rader.
- Antagandetabellen: för vägg, vindsbjälklag och golv blir värdet bara `"0,18 W/m²K"`, utan "och". `TEXT.antagande['boverket-*']` skrivs om utan datumen (hantverkaren).
- Test: fall 2 renderar en rad. Sidan har ingen testsvit, så det kontrolleras i min granskning.

### 12.16 Skissens bildtext

`SKISS_BILDTEXT` i sidan ska inte säga 0,184 och 0,078 som räknarens egna tal för gammal ull. Talen är Rockwools tabellvärden med takstolar. Skikt för skikt ger räknaren 0,179, se Faq. Hantverkaren skriver om bildtexten så att den säger var talen kommer ifrån och att de är vad man skriver in under "Jag vet U-värdet". Skissen ändras inte för detta.

### Rättning 3 i artikeln (hantverkaren, inte utvecklaren)

`/el/u-varde/`, lambdatabellen: en rad för mineralull med okänt märke, λ 0,045, sämre änden av Energimyndighetens spann. Källan finns redan i `kallor` (ET 2025:06). Cellens ordalydelse blir `MATERIAL['mineralull-okand'].etikett`.

---

## 12 C. Granskning 2 och läsarens andra läsning, 2026-09-24 (`retur-rakna-u-varde-varv-2-2026-09-24.md`, betyg 3)

Granskning 2 godkände 12.1 till 12.16 utom SCOP-raden (12.17). Avsnitten 12.18 till 12.23 kommer ur läsarens andra läsning. De gäller före allt tidigare i specen där de krockar, i första hand 2.5 (`STANDARD`), 6.1 (facit för standard) och 8 (inbäddningen).

### 12.17 SCOP-raderna i antagandetabellen

- **Fel i dag:** `ANTAGANDEN`, `scop-*` (i `VP_TYPER.map`), visar "3,5 till 5", "3 till 4,5" och "4 till 5".
- **Rättning:** värdet skrivs med `v.scopMin.toFixed(1).replace('.', ',')` och samma för `scopMax`. Då blir det "3,5 till 5,0", "3,0 till 4,5" och "4,0 till 5,0".
- **Test:** raden `scop-luft-vatten` har värdet `'3,0 till 4,5'`.

### 12.18 Standardfallet är vindsbjälklaget

Väggen med 50 mm på insidan byts ut. Rubriken uppmanade till mer isolering på insidan, fast sidan varnar för just det under "Gör inte det här". Återbetalningstiden var dessutom missvisande för en vägg, där ullen är en liten del av kostnaden. På vinden är lösullen nästan hela kostnaden, och det är vindens fall som Rockwool, skissen och vindguiden räknar på.

Beslut:
- Tillägget är **300 mm** Vindsull, inte 100 mm. Då är det samma fall som skissen, Rockwools tabellrad och vindguiden (200 plus 300 mm).
- Tillägget är Vindsull och inte Granulate, eftersom Vindsull har pris och återbetalningen därför visas.

```ts
export const STANDARD: UVardeIndata = {
  lage: 'skikt', del: 'tak', ytaM2: 100, region: 'mitt',
  skikt: [
    { rad: 1, material: 'gips', tjocklekMm: 13, reglar: false },
    { rad: 2, material: 'mineralull-okand', tjocklekMm: 200, reglar: true },   // rg=2, bjälkarna
  ],
  tillagg: [{ rad: 1, material: 'stenull-vindsull', tjocklekMm: 300 }],
  uFore: 0.184, uEfter: 0.078,   // läget uvarde: Rockwools rad, fall 4a
};
```

Kommentaren över `STANDARD` skrivs om efter detta.

**Facit** (egen räkning 2026-09-24 med modulens funktioner). Nytt fall 14 = `STANDARD`:
- `uFore` 0,26550 ("0,265", oavrundat 0,265498) och `uEfter` 0,09010 ("0,090").
- Före: rOvre 3,79275, rUndre 3,74027, rTotal 3,76651. Efter: rTotal 11,09873. rsi 0,10, rse 0,04.
- Beskedet `klarar`, `saknas` `null`.
- kWh 1 565,95 och kr 3 758,28.
- Luft-luft 751,66 till 1 073,79 kr.
- Kostnad 25 137 kr (100 × 300 × 0,8379) och återbetalning 6,7 år.
- `gorInteDetHar` är `['glom-termostaten']`.

**Uvarde-läget med standardvärden** ger fall 4a: 946,37 kWh och 2 271,28 kr.

**Testet:**
- Fall 1, fall 2, fall 13 och rundturen använder i dag `STANDARD` som väggen. De får en egen konstant i testet, `VAGG_EXEMPEL`, med väggens gamla värden: gips 13, Flexibatts 120 med reglar, luftspalt, trä 22, tillägg Flexibatts 50, 100 m² och Mellansverige. Talen i fallen ändras inte.
- Testet i 12.2 för `antagandenFor` gäller fall 2 och alltså väggen.
- Testet på `tolkaQuery` med tom adress jämför fortfarande med `STANDARD`.

**Kompakt form** visar rad 1 till 3 som förut. Med standard är rad 3 tom.

**Sidan:** kontrollera att inget i sidans text räknar med väggen som standard. Det gäller bland annat kortsvarets stycke om 0,357 och Faq-frågan om tillverkarens tabell. Standardfallets gamla ull räknas med 0,045 och bjälkar och ger 0,265, medan Faq nämner 0,179 för Flexibatts utan bjälkar och bildtexten 0,184. Hantverkaren får den listan (se slutet).

**Artikeln:** `<Kalkylator namn="u-varde" />` i `src/content/kunskap/el/u-varde.mdx` flyttas från rad 183, efter väggstycket, till efter stycket som börjar "Formeln fungerar lika bra på andra byggnadsdelar, och jag har använt den för både vindsbjälklaget …" (i dag rad 203). Det står före H2 "U-värdet på fönster gäller glas, båge och karm", med blankrad före och efter. Där har läsaren just fått kilowattimmarna och kronorna förklarade och vinden nämnd, och formuläret visar vinden. Ingen annan rad ändras.

### 12.19 Tilläggslistan innehåller bara isolering

- `UVardeForm.astro`: `tillaggsMaterial` blir `MATERIAL_ORDNING.filter((m) => MATERIAL[m].isolering)`.
- `tolkaQuery`: `tm{n}` med ett material som inte är isolering ger `material: null` och alltså felet `material-okant` på `t{n}`, på samma sätt som `luftspalt` i dag.
- **Test:** `tm1=gips` och `tm1=betong` ger `material: null`.

### 12.20 Förslaget utan valt tillägg är märkeslöst

- I `raknaUVarde` (12.9) är materialet för `saknas` tillägg 1:s material när ett tillägg finns. Annars är det `'mineralull-okand'`, inte `STANDARD.tillagg[0]`. Ett märke står bara i beskedet när läsaren själv valt det.
- **Test:**
  - Fall 1 (väggen utan tillägg) ger `{ mm: 120, material: 'mineralull-okand', grans: 0.18 }`, och U blir 0,17851.
  - `STANDARD` utan tillägg ger `{ mm: 170, material: 'mineralull-okand', grans: 0.13 }`, och U blir 0,12982.
  - Rubriken i båda fallen innehåller inget varumärke.

### 12.21 Beskedet säger hela tjockleken

- `BeskedVarden` får två fält till:
  - `mmValt: string | null`: tjockleken på tillägg 1 med `heltal`, eller `null` utan tillägg.
  - `mmTotalt: string | null`: `mmValt` plus `mm` när tillägg finns, annars samma som `mm`.
- `mm` betyder fortfarande det som saknas.
- `extraForGrans` prövar bara upp till `GRANSER.tjocklekMm[1] − tillägg 1:s tjocklek`, så att totalen aldrig blir en tjocklek formuläret avvisar. Om ingen tjocklek räcker blir `saknas` `null`.
- Rubrikerna för `battre-men-over` och `bara-u-over` skrivs om av hantverkaren. Den första ska säga totalen, till exempel att tillägget ska vara 100 mm, eller "ytterligare 50 utöver de 50" med båda talen. Formuleringen "når U-värdet" byts mot "kommer ner till".
- **Test:** väggfallet (fall 2) ger `mm '50'`, `mmValt '50'` och `mmTotalt '100'`, och rubriken innehåller `'100'`.

### 12.22 Inget löfte om eget elpris

Elkostnadsräknaren har inget fält för kilowattimmar, så löftet tas bort på alla tre ställena. Ett kWh-fält i elkostnaden blir inte en del av det här arbetet.
- Sidan tar bort länken `TEXT.spalt['rad-eget-elpris']` till `/rakna/elkostnad/` ur spalten, punkt 8 i 4.4, och ur `TEXT`.
- `TEXT.regel.elpris` stryker meningen om elkostnadsräknaren (hantverkaren). Den kan i stället säga att kronorna är kilowattimmarna gånger ditt pris per kWh.
- `LAS_VIDARE` stryker posten `/rakna/elkostnad/`. Tre länkar kvar.

**Test:** modulens `TEXT` innehåller inte strängen `elkostnadsräknaren`.

### 12.23 Återbetalningen gäller direktverkande el

Återbetalningstiden räknas bara mot kronorna med direktverkande el (A3). Den räknas inte om per värmepump, eftersom spalten redan har fem spann och tiden skulle bli fem spann till.

`TEXT.spalt['rad-aterbetalning']` ska på samma rad säga att den räknas mot direktverkande el och att den blir längre med värmepump (hantverkaren). **Test:** raden för fall 14 innehåller hantverkarens ord för värmepump, och påståendet skrivs när texten finns.

### Till hantverkaren från 12 C (texten, inte koden)

- Beskedrubrikerna för `battre-men-over` och `bara-u-over` (12.21).
- `rad-aterbetalning` (12.23) och `regel.elpris` (12.22).
- Kommentaren över `STANDARD`.
- Kortsvaret, Faq-frågan om tillverkarens tabell och bildtexten mot det nya standardfallet (12.18).
- Läsarens punkt om fönstrets kolumnrubriker ("Till och med 30 september 2026" läses i november som historia) är ren text i `TEXT.kolumn` och hör också dit.

---

## 12 D. Beslut efter granskning 3, 2026-09-24

Före detta gäller från granskning 3: skyddsraden på testets rad 736 tas bort.

### 12.24 Ingen regelrad i standardfallet

Beslut: standardfallet har **inga reglar**. `STANDARD.skikt[1].reglar` blir `false`, och `delbarQuery(STANDARD)` skriver alltså ingen `rg`. Någon egen andel för vindsbjälklag läggs inte in.

Varför:
- Svenskt Träs 12 procent gäller en regelvägg och ger en vind för stor andel trä.
- En andel på 4 procent för takstolar skulle vara egen geometri (45 på 1 200 mm) utan källa för att måtten är typiska. Underlaget avsnitt 1.3 säger just att andra andelar saknar källa.
- Regeln `tak-kallvind` säger redan att takstolarna inte är med. Med "Mineralull utan märke" (0,045, spannets sämre ände) är talet ändå försiktigt.
- Reglarlistan står kvar med 12 procent för den som räknar en vägg.
- Skissens bjälkar står kvar. De visar vad ett bjälklag är, inte räkningens andel.

**Nytt facit för standard** (fall 14, egen räkning 2026-09-24 med modulens funktioner). Det ersätter facit i 12.18:

| | Värde |
|---|---|
| U före | 0,21558, visas "0,216" (R_T 4,63861) |
| U efter | 0,08488, visas "0,085" (R_T 11,78147) |
| rsi, rse | 0,10 och 0,04, inga `rOvre`/`rUndre` |
| Besked | `klarar`, `saknas` `null` |
| kWh per år | 1 166,91, visas "1 167" |
| kr per år | 2 800,59, visas "2 801" |
| Luft-luft | 560,12 till 800,17 kr |
| Luft-vatten | 622,35 till 933,53 kr |
| Jord eller sjö | 560,12 till 700,15 kr |
| Berg | 509,20 till 700,15 kr |
| Frånluft | 700,15 till 1 120,24 kr |
| Ullen | 25 137 kr |
| Återbetalning | 8,976 år, visas "9" med `endecimal` |
| `gorInteDetHar` | `['glom-termostaten']` |
| `antagandenFor` | innehåller inte `regelandel` eller `lambda-regel` |

`STANDARD` utan tillägg ger `bara-u-over` och `saknas` `{ mm: 140, material: 'mineralull-okand', grans: 0.13 }`. Det ersätter 170 i 12.20, som räknade med reglar.

Samma tal ska stå i kortsvaret, bildtexten, Faq och skissens etiketter, om de nämner standardfallet (hantverkaren). Skissen visar Rockwools rad 0,184 till 0,078 och 2 271 kr, och den ändras inte. Standardfallet ger 2 801 kr för gammal ull utan märke. Den skillnaden ska texten förklara, inte dölja.

**Test:** fall 14 med talen ovan. Testerna i 12.18 och 12.20 som räknade standard med reglar byts mot dessa.

### 12.25 Beskedet vet alltid vad som lagts till

`beskedVarden()` fyller två fält för alla besked, inte bara när `saknas` finns:
- `mmValt` är tillägg 1:s tjocklek med `heltal`, eller `null` utan tillägg.
- Nytt fält `materialValt: string | null` är tillägg 1:s `kort`, eller `null`.
- `material` betyder fortfarande materialet i förslaget (`saknas`). `mm` och `mmTotalt` är som förut.

Rubriken för `klarar` kan då säga vad som räckte (hantverkaren). Rubriker med märke följer 12.20: märket står bara när läsaren valt det. Standardfallets Vindsull är vårt val, så rubriken för `klarar` bör använda ett ord för slaget av material och inte `materialValt` rakt av. Hantverkaren avgör formen.

**Test:** för standard ger `beskedVarden` `mmValt '300'` och `materialValt === MATERIAL['stenull-vindsull'].kort`, och fall 3 (läget uvarde) ger båda `null`.

### 12.26 Cellplast utan märke, och två texter

- **Nytt material `cellplast-okand`:** λ **0,038**, `isolering: true`, `pris: null`.
  - Källan är Energimyndigheten ET 2025:06, tabell 1, s. 7: EPS 0,035 till 0,038 och XPS 0,030 till 0,036, återgivet i `docs/briefer/faktablad/kunskap-u-varde.md`.
  - `ANTAGANDE:` den sämre änden av EPS-spannet, som också täcker XPS, för cellplast vars märke läsaren inte känner till. Samma mönster som `mineralull-okand`.
  - Det står direkt före `eps` i `MATERIAL_ORDNING`. `etikett` och `kort` skrivs av hantverkaren.
  - Antagandetabellen får raden `material-cellplast-okand` med `typ: 'Antagande'`.
  - **Test:** λ 0,038 och artikelns tabellrad.
- **Rättning 4 i artikeln (hantverkaren):** `/el/u-varde/` får en rad i lambdatabellen för cellplast med okänt märke, 0,038, och källmeningen under tabellen nämner Energimyndigheten även för den.
- **Texter:** `rad` i registerposten (`src/lib/kalkyl/register.ts`) och `BESKRIVNING` i `src/pages/rakna/u-varde.astro` skrivs om av hantverkaren. Utvecklaren rör dem inte.

### 12.27 Standardvärden per byggnadsdel

**Felet** (`retur-rakna-u-varde-varv-4-2026-09-24.md` punkt 11): byggnadsdelen byts med radioknapparna och knappen. Formuläret skickar då med vindens förifyllda 100 m², 0,184 och 0,078, och ett fönster ger 32 141 kr om året. Lägeslänken har samma fel: från skikt med en vägg till "Jag vet U-värdet" ger vindens U-värden på en vägg.

**Standardvärdena.** Ny export `STANDARD_PER_DEL: Record<Byggnadsdel, { ytaM2: number; uFore: number; uEfter: number }>`. Varje rad har kommentaren Källa eller ANTAGANDE:

| Del | Yta | U före | U efter | Märkning |
|---|---|---|---|---|
| `tak` | 100 | 0,184 | 0,078 | Källa: Rockwools tabellrad (fall 4a). Ytan ANTAGANDE: vindguidens exempel |
| `vagg` | 100 | 0,40 | 0,18 | Källa: Energimyndigheten ET 2025:06, 1961 till 1980, och Boverkets krav. Ytan ANTAGANDE: artikelns fasad (fall 3) |
| `golv` | 80 | 0,233 | 0,177 | ANTAGANDE: underlagets golvexempel (fall 8) avrundat till tre decimaler |
| `fonster` | 1,5 | 2,8 | 0,9 | ANTAGANDE: underlagets fönsterexempel (fall 7a), ett fönster med karm som i hjälptexten för ytan. 0,9 ligger i Energimyndighetens spann för energifönster (ET 2025:01, tabell 1) |
| `dorr` | 2 | 2,0 | 1,1 | ANTAGANDE: ingen källa. En ytterdörr med karm, och efter lika med kravet |

- För fönster väljer jag underlagets 1,5 m² och 0,9 i stället för de föreslagna 10 m² och 1,1. Hjälptexten säger att ytan är ett fönster med karm, och det fallet har ett räkneexempel. 10 m² har ingen källa.
- `STANDARD.ytaM2`, `uFore` och `uEfter` läses ur `STANDARD_PER_DEL.tak` i stället för att skrivas två gånger.
- Tabellen står inte i antagandetabellen. Den är förifyllda fält och inget svaret vilar på, som `STANDARD` i 4.6.

**Hur det bärs:** standardvärdena följer delen, och det går utan skript.
1. **Nyckel saknas:** saknas `yta`, `uf` eller `ue` i adressen tar `tolkaQuery` värdet ur `STANDARD_PER_DEL[del]` i stället för ur `STANDARD`.
2. **Formuläret** får ett dolt fält `<input type="hidden" name="sd" value={indata.del}>`, alltså delen som fälten fylldes i för. Det gäller både fullt och kompakt format.
3. **I `tolkaQuery`:** om `sd` är en giltig del och skiljer sig från `del`, jämförs `yta`, `uf` och `ue` var för sig med `STANDARD_PER_DEL[sd]` efter `tillTal`, med skillnad under 1e-9. Ett värde som är lika med den gamla delens standard byts mot den nya delens. Ett värde läsaren själv skrivit är olikt och står kvar. Ett ogiltigt `sd` läses inte.
4. **Lägeslänken** (`bytLageHref` i sidan): sätter också `sd` till den nuvarande delen, så att regeln i punkt 3 gäller när delen byts från fönster eller dörr till vägg.
5. **Sidans `varden`** (fältens råsträngar): när ett värde byttes i punkt 3 eller 1 visas det nya standardvärdet med komma, inte råsträngen ur adressen. `tolkaQuery` returnerar därför också `bytta: { yta: boolean; uf: boolean; ue: boolean }`, och sidan använder det.
6. **`delbarQuery`** skriver inte `sd`. Den delade adressen har de lösta talen och ger samma svar.

**Test:**
- `lage=uvarde&del=fonster` ger yta 1,5, uf 2,8 och ue 0,9, och 254,45 kWh och 610,68 kr (fall 7a). Det låser att fönstret med standardvärden ger en rimlig summa: `krPerAr < 2000`.
- `lage=uvarde&del=fonster&sd=tak&yta=100&uf=0,184&ue=0,078` ger samma indata som raden ovan (läsarens fall).
- `lage=uvarde&del=fonster&sd=tak&yta=12&uf=0,184&ue=0,078` ger yta 12 men uf 2,8 och ue 0,9.
- `lage=uvarde&del=vagg` ger 1 964,16 kWh (fall 3).
- `lage=uvarde&del=golv` ger 399,97 kWh och 959,94 kr, efter (0,233 − 0,177) × 80 × 89 280 / 1 000.
- `lage=uvarde&del=dorr` ger 160,70 kWh och 385,69 kr.
- `sd=mars` läses inte.
- `STANDARD.ytaM2 === STANDARD_PER_DEL.tak.ytaM2`.
- Rundturen i `delbarQuery` håller, och adressen har inget `sd`.
- För varje del ger standardvärdena status `ok` och ett besked som inte är `ingen-forbattring`.

---

## 12 E. Läsarens femte läsning, 2026-09-24 (`retur-rakna-u-varde-varv-5-2026-09-24.md`, betyg 3)

### 12.28 Raden under beskedet beror på läge och del

- `TEXT.besked[b].rad` blir en funktion `(k: BeskedKontext) => string`, som rubriken:
  ```ts
  interface BeskedKontext {
    lage: Lage;
    del: Byggnadsdel;
    klaradeFore: boolean;          // jamforelseFore: båda kolumnerna klarar
    harTillagg: boolean;           // läget skikt med minst ett tillägg
    aterbetalning: boolean;        // aterbetalning !== null
    aterbetalningSaknas: AterbetalningSaknas | null;
  }
  ```
  Ny export `beskedKontext(r: UVardeOk): BeskedKontext`. Sidan anropar `TEXT.besked[visat.besked].rad(beskedKontext(visat))`.
- Hantverkaren skriver varje rad så att den stämmer i alla fall där beskedet kan uppstå:
  - Vid `klarar`:
    - `klaradeFore` sant ger ingen mening om att det som sitter där i dag inte räcker.
    - Läget skikt med tillägg får ett råd som passar `del`: vind, vägg eller golv.
    - Hänvisningen till återbetalningsraden står bara när `aterbetalning` är sann.
    - Läget uvarde får inget vindsråd för fönster och dörr.
  - Samma princip gäller de andra fem beskeden.
- **Återbetalningen för fönster och dörr:** ny orsak `'fonster-dorr'` i `AterbetalningSaknas`. Den gäller i läget uvarde när `del` är fönster eller dörr, i ordningen `ingen-besparing`, `fonster-dorr`, `uvarde-lage`. Ny text `TEXT.aterbetalningSaknas['fonster-dorr']` skrivs av hantverkaren och skickar inte läsaren till Skikt för skikt, som inte finns för fönster.
- **Test:**
  - `rad` anropas för alla sex besked × båda lägena × fem delar × `klaradeFore` sant och falskt. Varje anrop ger en icke-tom sträng.
  - För `del` fönster och dörr innehåller varken `rad` eller texten för återbetalningen `TEXT.form['lage-skikt']`.
  - Fall 7a ger `aterbetalningSaknas: 'fonster-dorr'`, och fall 3 ger fortfarande `'uvarde-lage'`.
  - Påståenden om ordalydelsen läggs till när texten finns.

### 12.29 Fönster och dörr betyder läget "Jag vet U-värdet"

- `tolkaQuery`: är `del` `fonster` eller `dorr` blir `lage` alltid `'uvarde'`, vad `lage` i adressen än säger. `?del=fonster` ger då fönstrets standardvärden (12.27), status `ok` och ingen standardvarning.
- Valideringen `del-skikt` i `raknaUVarde` står kvar för direkta anrop men nås inte från en adress.
- Lägeslänken från fönster eller dörr till skikt sätter `del=vagg` som i dag, och 12.30 ger då väggens skikt.
- **Test:** `tolkaQuery('del=fonster').indata.lage === 'uvarde'`, och `lage=skikt&del=dorr` ger `'uvarde'` och status `ok`.

### 12.30 Byggnadsdelen byter också skikten

- **Ny export `STANDARD_SKIKT_PER_DEL: Record<'tak' | 'vagg' | 'golv', { skikt: Skikt[]; tillagg: Tillagg[] }>`.** Varje rad har kommentaren Källa eller ANTAGANDE. Inga varumärken i standardskikten utom vindens Vindsull, som behövs för att återbetalningen ska visas (12.18). Annars är gammal och ny ull `mineralull-okand` (12.20, samma skäl).

  | Del | Skikt | Tillägg | Märkning |
  |---|---|---|---|
  | `tak` | gips 13, mineralull-okand 200, inga reglar | stenull-vindsull 300 | som `STANDARD` (12.18, 12.24) |
  | `vagg` | gips 13, mineralull-okand 120 med reglar (`rg=2`), luftspalt, trä 22 | mineralull-okand 50 | ANTAGANDE: underlagets sjuttiotalsvägg (avsnitt 7, exempel 1) med okänt märke |
  | `golv` | trä 22, mineralull-okand 145, inga reglar | mineralull-okand 50 | ANTAGANDE: underlagets golv (fall 8) med okänt märke, 80 m² som i 12.27 |

  `STANDARD.skikt` och `STANDARD.tillagg` läses ur `STANDARD_SKIKT_PER_DEL.tak`.
- **Samma mekanik som 12.27:**
  1. Finns ingen `m`-nyckel i adressen tar `tolkaQuery` `STANDARD_SKIKT_PER_DEL[del]`. Finns ingen `tm`-nyckel tar den delens tillägg.
  2. Om `sd` är en giltig del av `tak`, `vagg` eller `golv` och skiljer sig från `del`, jämförs de tolkade skikten med `STANDARD_SKIKT_PER_DEL[sd].skikt`: samma rader, material, tjocklek (skillnad under 1e-9, NaN lika med NaN för luftspalten) och reglar. Är de lika byts de mot den nya delens. Tilläggen jämförs och byts var för sig på samma sätt. Det läsaren själv har ändrat står kvar.
  3. `bytta` från 12.27 får `skikt` och `tillagg`. Sidan visar då den nya delens tjocklekar i fälten och väljer `rg` ur den nya delens skikt.
  4. Läsaren kan välja en luftspalt på vägg och sedan byta till vind utan att ändra något annat. Då är skikten väggens standard, de byts mot vindens, och felet `luftspalt-bara-vagg` uppstår inte.
- **Facit** (egen räkning 2026-09-24):
  - Vägg: U 0,40351 till 0,27437, `battre-men-over`, 1 152,97 kWh och 2 767,14 kr, `saknas` `{ mm: 90, material: 'mineralull-okand', grans: 0.18 }`, `aterbetalningSaknas: 'inget-pris'`. U före ligger nära Energimyndighetens 0,40 för 1961 till 1980.
  - Golv: U 0,27860 till 0,21274, `battre-men-over`, 470,37 kWh och 1 128,89 kr, `saknas` `{ mm: 90, material: 'mineralull-okand', grans: 0.15 }`, `'inget-pris'`.
- **Test:**
  - `del=vagg` ger väggens skikt och tillägg och talen ovan. `del=golv` ger golvets.
  - `del=golv&sd=tak` med vindens standardskikt i adressen (`m1=gips&d1=13&m2=mineralull-okand&d2=200&tm1=stenull-vindsull&td1=300`) ger golvets skikt och tillägg.
  - Samma adress med `d2=250` behåller läsarens skikt men byter tillägget.
  - `del=tak&sd=vagg` med väggens standard, luftspalt inräknad, ger status `ok` med vindens skikt.
  - Rundturen i `delbarQuery` håller för alla tre.

### 12.31 Kolumnrubrikerna säger när reglerna gäller

- `TEXT.kolumn['till-2026-09-30']` blir "Gamla regler" och `TEXT.kolumn['fran-2026-10-01']` "Nya regler från 1 oktober 2026" (hantverkaren får finslipa orden men inte lägga ett slutdatum på de gamla reglerna). Kolumnnycklarna i koden ändras inte.
- När de gamla reglerna får väljas förklaras i regeln `boverket-overgang`, som redan visas på varje svar. Den säger fram till 1 oktober 2027 och inte blanda.
- `bada` ("Boverket, gamla och nya regler") står kvar.
- **Test:** ingen av de två kolumntexterna innehåller "30 september", och `TEXT.regel['boverket-overgang'].text` innehåller "2027".

---

## 12 F. Granskning av 12 E och läsarens sjätte läsning, 2026-09-28 (`retur-rakna-u-varde-varv-6-2026-09-24.md`, betyg 3)

12 E är granskad och inte godkänd; rättningarna står först, i 12.32 och 12.33. Avsnitten 12.34 till 12.41 kommer ur läsarens sjätte läsning och gäller före allt tidigare i specen där de krockar, i första hand 12.25 (beskedets värden), 12.30 (standardskikten) och 4.3 (sidans ordning).

**Filer som får röras:** `src/lib/kalkyl/u-varde.ts`, `src/pages/rakna/u-varde.astro`, `src/components/kalkyl/UVardeForm.astro`, `scripts/test-kalkyl-u-varde.mjs`. Inget annat. Hantverkaren redigerar texter i `u-varde.ts`; utvecklaren börjar först när koordinatorn säger att filen är fri, och skriver aldrig över en befintlig textsträng. Varje ny publik sträng står som `'TEXT SAKNAS: <nyckel>'` med en kommentar om när den visas.

**Kontroller:** `node --experimental-strip-types --test scripts/test-kalkyl-u-varde.mjs` grönt (85 i dag; alla gamla kvar eller uttryckligen ersatta nedan), `npx astro check --minimumSeverity error` 0 fel, `npm run kontrollera` 0 fel. Arbetaren kör inte `npm run build`. Inget klientskript, inget nytt beroende.

### 12.32 Lägeslänken från fönster eller dörr ger väggens skikt (rättning av 12 E)

**Felet:** från fönster eller dörr till "Skikt för skikt" sätter sidan `del=vagg`, men `m`-, `d`-, `tm`- och `td`-nycklarna från ett tidigare vindsläge följer med i adressen. `sd=fonster` är ingen skiktdel, så 12.30 byter dem inte, och vinden räknas som vägg.

- **Ny export** i `u-varde.ts`:
  ```ts
  export function bytLageQuery(q: URLSearchParams, i: UVardeIndata): URLSearchParams
  ```
  Kopierar `q`, sätter `lage` till det andra läget och `sd` till `i.del`. När det nya läget är `skikt` och `i.del` är `fonster` eller `dorr`: sätter också `del=vagg` och tar bort varje nyckel som matchar `/^t?[md][1-6]$/` samt `rg`. Inget annat ändras.
- **Sidan:** rad 170 till 175 ersätts av `const bytLageHref = '/rakna/u-varde/?' + bytLageQuery(q, indata).toString();`.
- **Test:**
  1. `lage=uvarde&del=fonster&m1=gips&d1=13&m2=mineralull-okand&d2=200&tm1=stenull-vindsull&td1=300` genom `bytLageQuery` och sedan `tolkaQuery` ger `lage 'skikt'`, `del 'vagg'`, skikt och tillägg lika med `STANDARD_SKIKT_PER_DEL.vagg`, och status `ok`.
  2. `lage=uvarde&del=dorr` utan `m`-nycklar ger samma sak.
  3. Standardvinden i skiktläget (`delbarQuery(STANDARD)`) ger `lage 'uvarde'`, `sd 'tak'`, och alla `m`-, `d`-, `tm`- och `td`-nycklar oförändrade.

### 12.33 Värdet i Boverksraden står till höger (rättning av 12 E)

`u-varde.astro` rad 381: värdets `<span>` får `class="ml-auto"`, så att "1,1 W/m²K, klarar inte" står i högerkanten även när etiketten "Nya regler från 1 oktober 2026" bryter rad på 375 px. Kontrolleras i min granskning på 375 px med fönster 2,8 till 1,15.

### 12.34 Standardtillägget på vägg och golv är en skiva med pris

**Felet:** vägg och golv har tillägget 50 mm `mineralull-okand`, alltså ull av okänd ålder som ny isolering, utan pris. Rubriken blir "140 mm mineralull totalt, 90 mm utöver de 50 du lagt in" och återbetalningen saknas.

**Beslut:** tillägget för `vagg` och `golv` blir **95 mm `stenull-flexibatts`**. Det är den tjockaste skiva som har ett daterat pris (`PRIS_FLEXIBATTS_95_KR_M2_MM`, Bauhaus 84,95 kr/m², 2026-09-24), så kostnaden räknas utan antagande A2. Flexibatts har pris bara i 45 och 95 mm (underlaget 6.2); 45 mm ger 0,266 på väggen, långt från kravet, och andra tjocklekar har inget pris. Vindens tillägg ändras inte. Skikten ändras inte.

`STANDARD_SKIKT_PER_DEL`, kommentaren per rad:

| Del | Skikt | Tillägg | Märkning |
|---|---|---|---|
| `tak` | oförändrad | oförändrad | oförändrad |
| `vagg` | oförändrad | `stenull-flexibatts` 95 | Skikten ANTAGANDE: underlagets sjuttiotalsvägg (avsnitt 7, exempel 1) med okänt märke. Tillägget: Källa för priset Bauhaus jämförpris 84,95 kr/m², 2026-09-24; tjockleken ANTAGANDE: den tjockaste skiva med daterat pris |
| `golv` | oförändrad | `stenull-flexibatts` 95 | Skikten ANTAGANDE: underlagets golv (fall 8) med okänt märke, 80 m². Tillägget som väggen |

Ingen rad står utan Källa eller ANTAGANDE, och kommentaren skiljer skikten från tillägget. Kommentaren över tabellen ("Inga varumärken … utom vindens Vindsull") skrivs om: märket står i standardtilläggen där det behövs för priset, och rubriken nämner inte märket när tillägget är förvalet (12.36, 12.37).

**Facit** (egen räkning 2026-09-28 med modulens funktioner; ersätter facit för vägg och golv i 12.30):

| | Vägg, 100 m² | Golv, 80 m² |
|---|---|---|
| U före | 0,40351 | 0,27860 |
| U efter | 0,19506 | 0,16242 |
| Besked | `battre-men-over` | `battre-men-over` |
| kWh per år | 1 861,06 | 829,82 |
| kr per år | 4 466,54 | 1 991,57 |
| Luft-luft | 893,31 till 1 276,15 | 398,31 till 569,02 |
| Ullen | 8 495,00 kr (100 × 84,95) | 6 796,00 kr (80 × 84,95) |
| Återbetalning | 1,902 år, visas "1,9" | 3,412 år, visas "3,4" |
| `saknas` | `{ mm: 20, material: 'stenull-flexibatts', grans: 0.18 }` | `{ mm: 20, material: 'stenull-flexibatts', grans: 0.15 }` |
| `mmTotalt` | "115" | "115" |
| `antagandenFor` innehåller | `pris-flexibatts-95`, `skivpris-narmaste`, `exakt-atgang`, `aterbetalning-direktel` | samma |

**Test:**
- "12.30: väggen med sina standardskikt" och "12.30: golvet med sina standardskikt" får talen ovan och `aterbetalningSaknas: null`.
- `VAGG_I_ADRESSEN` i testet får `tm1=stenull-flexibatts&td1=95`.
- Nytt: för `tak`, `vagg` och `golv` ger standardvärdena `aterbetalning !== null`, så att hela spalten syns i varje standardfall.

### 12.35 Rubriken när det gamla redan klarade kravet

**Felet:** `klarar` säger "Lägger du på 100 mm lösull klarar du kravet …", och i läget uvarde "Efter jobbet klarar du kravet …", också när det som sitter där klarade kravet redan före. Läsaren tror att jobbet behövs för kravet.

- `BeskedVarden` får två fält: `klaradeFore: boolean` (samma definition som i `beskedKontext`: båda kolumnerna i `jamforelseFore` klarar) och `del: Byggnadsdel`.
- `TEXT.besked.klarar.rubrik` väljer variant i den här ordningen:
  1. `klaradeFore` och ett tillägg finns: **ny variant** `'TEXT SAKNAS: klarar-redan-tillagg'`. Kommentar i koden: *visas i skiktläget när det som sitter där redan klarar kravet och läsaren lagt till något; säger att det redan klarar och vad tillägget sparar i kronor; får använda `del`, `mmValt`, `tillaggNamn` (12.37) och `kr`.*
  2. `klaradeFore` utan tillägg (läget uvarde, alla fem delar): **ny variant** `'TEXT SAKNAS: klarar-redan-uvarde'`. Kommentar: *visas i läget "Jag vet U-värdet" när U före redan klarar kravet; säger det och vad det nya U-värdet sparar i kronor. Får inte antyda att det inte klarade före.*
  3. Annars de varianter som finns i dag.
- Raden under (`rad`) ändras inte i koden; 12.28 har redan `klaradeFore`.
- **Test** (egen räkning 2026-09-28):
  - Skikt, tak, gips 13 och `mineralull-okand` 400, tillägg `stenull-vindsull` 100, 100 m², mitt: U 0,11010 till 0,08723, `klarar`, 489,95 kr ("490"), återbetalning 17,1 år, `beskedVarden(r).klaradeFore === true`. Rubriken innehåller "490" och skiljer sig från rubriken för samma värden med `klaradeFore: false`.
  - Uvarde, tak, 0,11 till 0,08, 100 m², mitt: `klarar`, 642,82 kr ("643"), `klaradeFore === true`, och rubriken skiljer sig från samma värden med `klaradeFore: false`.
  - `STANDARD` ger `klaradeFore === false` och samma rubrik som i dag.
  - Så länge varianterna är `TEXT SAKNAS` skrivs påståendena om skillnaden i ordalydelse som `{ todo: 'text 12.35' }`; att rubriken är en icke-tom sträng gäller från början.

### 12.36 Rubriken när tillägget är förvalet

**Felet:** "90 mm utöver de 50 du lagt in" när läsaren inte lagt in något. Förvalet talar som om läsaren valt det.

**Beslut:** jämförelse mot standard i modulen, inte `bytta` i sidan. `bytta` är sant för en adress utan nycklar men falskt för den delade adressen med samma tal, och då skulle samma svar få två rubriker. Jämförelsen ger samma rubrik för båda.

- `BeskedVarden` får `forval: boolean`: sant när `lage` är `skikt`, delen är `tak`, `vagg` eller `golv`, och tilläggsraderna i `detaljer.rader` (`kalla: 'tillagg'`) har samma rad, material och tjocklek (skillnad under 1e-9) som `STANDARD_SKIKT_PER_DEL[del].tillagg`, i samma antal. Skikten jämförs inte; det är tillägget rubriken talar om.
- `battre-men-over`, grenen med `mmValt`: när `forval` är sant **ny variant** `'TEXT SAKNAS: battre-men-over-forval'`. Kommentar: *visas när tillägget är formulärets förval; säger totalen (`mmTotalt`) och gärna hur mycket mer (`mm`) än förvalet, utan "du lagt in" och utan märke; materialet med `forslagNamn` (12.37).* Grenen med `forval` falskt står kvar ("utöver de X du lagt in").
- `klarar` med `forval` ändras inte; "Lägger du på 300 mm lösull" är ett villkor och inget påstående om vad läsaren gjort.
- **Test:**
  - `STANDARD`, `del=vagg` och `del=golv` (utan andra nycklar) ger `forval === true`. `delbarQuery` av dem, tolkad igen, ger också `forval === true`.
  - `STANDARD` med tillägget 250 mm, och väggen med `tm1=stenull-paroc&td1=95`, ger `forval === false`.
  - Läget uvarde ger alltid `forval === false`.
  - Väggens standard: rubriken innehåller "115" och inte "Rockwool". Väggen med tillägget Flexibatts 45 som läsaren valt (`forval` falskt): rubriken innehåller "115", "70", "45" och "Rockwool Flexibatts" (egen räkning: U efter 0,26648, `saknas.mm` 70).

### 12.37 Materialnamnet i rubriken, ett ställe

**Felet:** `battre-men-over` använder `materialIForslag`, som ger "lösull, stenull totalt". `klarar` använder `tillaggIMening`. Två vägar till samma namn (korrekturens varv 6, punkt 1).

- **Ny intern funktion** `namnIRubrik(m: MaterialNyckel, forval: boolean): string`, den enda som gör ett material till rubrikord:
  - `mineralull-okand` → som `materialIForslag` i dag ("mineralull").
  - `stenull-vindsull` → `'lösull'`, alltid (som `tillaggIMening` i dag; det korta namnet har kommatecken och går inte att sätta i en mening).
  - `stenull-flexibatts` med `forval` sant → `'TEXT SAKNAS: rubrik-flexibatts-forval'`. Kommentar: *slaget av material utan märke; visas bara när Flexibatts är förvalet på vägg och golv (12.34).*
  - annars `materialIMening(MATERIAL[m].kort)`.
- `BeskedVarden` får `tillaggNamn: string | null` (tillägg 1 genom `namnIRubrik`, null utan tillägg) och `forslagNamn: string | null` (`saknas.material` genom `namnIRubrik`, null utan `saknas`). `material` och `materialValt` står kvar, eftersom testet i 12.25 läser dem, men ingen rubrik använder dem.
- Alla rubriker som nämner ett material använder `tillaggNamn` eller `forslagNamn`. `materialIForslag` och `tillaggIMening` används bara inuti `namnIRubrik`.
- **Test** (egen räkning 2026-09-28): skikt, tak, gips 13 och `mineralull-okand` 50, tillägg `stenull-vindsull` 100, 100 m², mitt, ger `battre-men-over` och `saknas { mm: 170, material: 'stenull-vindsull', grans: 0.13 }`. Rubriken innehåller "270 mm lösull" och varken "Lösull, stenull" eller "lösull, stenull". `STANDARD`: rubriken innehåller "300 mm lösull".

### 12.38 "Så räknar jag" efter läge och del

**Felet:** fönster och dörr får vindens skiss och nio steg om skikt och ull.

- **Skissen** visas bara när `visat.del === 'tak'`, i båda lägena (skissens tal 0,184 och 0,078 är vindens standard i läget uvarde). Villkoret blir `varumarke && illustration && visat.del === 'tak'`. Vägg, golv, fönster och dörr får ingen bild. `SKISS_BILDTEXT` ska stämma i båda lägena (hantverkaren).
- **Stegen**, tre listor i sidan i stället för `STEG`:
  - `STEG_SKIKT`: dagens nio steg, när `visat.lage === 'skikt'`.
  - `STEG_KANT_U`: läget uvarde och delen `tak`, `vagg` eller `golv`. `TEXT SAKNAS`, fyra steg i den här ordningen: talen före och efter tas som du skrev dem; talet efter jämförs med Boverkets krav för delen; skillnaden gånger ytan gånger gradtimmarna delat med 1 000 ger kilowattimmarna, gånger elpriset kronorna, och med värmepump delat med SCOP först; återbetalningen saknas eftersom materialet inte är känt.
  - `STEG_FONSTER_DORR`: delen `fonster` eller `dorr`. `TEXT SAKNAS`, fyra steg: Uw före och efter som du skrev dem; jämförelsen med de gamla och de nya reglernas tal för delen; kilowattimmar och kronor som ovan; återbetalningen får du genom att dela priset i offerten med kronorna om året.
  - Tal i stegen byggs av konstanterna (`BOVERKET`, `GRADTIMMAR`), aldrig skrivna i strängen.
- H2 "Så räknar jag", ankaret `#sa-raknar-jag`, H3 "Vad siffrorna vilar på" och tabellen står kvar i alla fall.
- **Kontroll** i min granskning (sidan har ingen testsvit): `?del=fonster`, `?del=dorr` och `?lage=uvarde&del=vagg` visar ingen `<img>` under `#sa-raknar-jag` och rätt lista; standardvyn och `?lage=uvarde` visar skissen.

### 12.39 Etiketten för det som förenklas

**Felet:** etiketten "Det jag inte räknar med" står över regeln `tak-kallvind`, som börjar "Vindsbjälklaget räknar jag med …".

- Slaget `begransning` behåller `tak-kallvind`, `golv-uteluft` och `energi-inte-matare` och får `delta-u`, som sätter korrektionen till noll och alltså förenklar. `SLAG['delta-u']` blir `'begransning'`.
- `TEXT.darfor['slag-begransning']` blir `'TEXT SAKNAS: slag-begransning'`. Kommentar: *etiketten över regler som säger vad räkningen förenklar: vindsbjälklaget mot kall vind, golvet mot uteluft, korrektionen som sätts till noll, och att uträkningen inte är elmätaren. Den ska passa en regel som börjar med vad som räknas.*
- Inget annat i listan ändras.

### 12.40 Materiallistan i grupper

**Felet:** "Rockwool Granulate" och "Lösull, stenull" står bredvid varandra utan att läsaren kan skilja dem, lösullen är namngiven på två sätt, och samma produkt heter tre saker på samma skärm.

- **Ny export** `MATERIAL_GRUPPER: { grupp: 'okand' | 'losull' | 'skivor' | 'ovrigt'; material: MaterialNyckel[] }[]`, i den här ordningen:
  1. `okand`: `mineralull-okand`, `cellplast-okand`
  2. `losull`: `stenull-vindsull`, `glasull-fyllupp`, `stenull-granulate`, `cellulosa` (först de två man lägger för hand, sedan de två som blåses in)
  3. `skivor`: `stenull-flexibatts`, `stenull-paroc`, `eps`, `pir`
  4. `ovrigt`: `gips`, `tra`, `lattbetong`, `betong`, `luftspalt`
- `MATERIAL_ORDNING` blir `MATERIAL_GRUPPER.flatMap((g) => g.material)`. Antagandetabellen följer den nya ordningen; testet i 12.2 som räknar upp raderna för fall 2 sorteras om efter den.
- **Formuläret:** båda listorna renderar en `<optgroup label={TEXT.form['grupp-' + grupp]}>` per grupp efter alternativet "Inget valt". Tilläggens lista filtrerar på `isolering` och hoppar över en grupp som blir tom (`ovrigt`). Fältnamn, värden och id ändras inte. Inbyggd `<optgroup>`, inget skript.
- **Texterna** (hantverkaren): `TEXT.form['grupp-okand']`, `['grupp-losull']`, `['grupp-skivor']`, `['grupp-ovrigt']` som `TEXT SAKNAS`, och `kort` för de fyra lösullsmaterialen. Vad som ska stå bredvid vad:
  - Varje lösull säger ullslaget (sten, glas, cellulosa) och om den läggs för hand eller blåses in, byggt på samma sätt i alla fyra. Vindsull och Granulate skiljs åt av just det.
  - Vindsullens `kort`, dess `etikett` och rubrikordet i 12.37 ("lösull") har samma huvudord, så att samma produkt inte heter tre saker. `etikett` ändras bara om artikelns tabellcell ändras samtidigt (testet 6.3).
- **Test:** `MATERIAL_ORDNING` innehåller varje `MaterialNyckel` exakt en gång; varje `kort` är unikt och högst 26 tecken; `TEXT.form` har de fyra gruppnycklarna som icke-tomma strängar; `MATERIAL['stenull-vindsull'].kort` och `.etikett` innehåller båda "lösull" (gemener).
- **Kontroll** i min granskning: listan på 375 px, grupprubrikerna syns i den inbyggda väljaren, inga avklippta namn.

### 12.41 Hjälprad för del av landet och länk till daggpunktsräknaren

**Del av landet:**
- Formuläret, fullt format: direkt under regionens `<legend>` en `<p id={id('region-hjalp')} class={HJALP_KLASS}>` med `TEXT.form['hjalp-region']` (`TEXT SAKNAS`), och `aria-describedby={id('region-hjalp')}` på regionens `<fieldset>`. Kompakt format: ingen hjälprad.
- Kommentar till hantverkaren: *vilken del läsaren ska välja. Källan (Rockwool) nämner bara Örebro, Västerås och Uppsala och drar inga gränser.* Ska raden kunna ge besked för Gävle eller Karlstad behövs ett underlag med graddagar per ort; det beställer koordinatorn av underlagsarbetaren, och det ändrar inte koden.
- Regeln `gradtimmar` behåller sin mening om orterna.

**Länken till `/rakna/daggpunkt/`:**
- `TEXT.gorInte` bär i dag bara strängar och sidan renderar dem som `<p>`. `RegelText` bär bara källans länk. Ingen av dem kan bära en länk i löptexten, så länken ska inte ligga i regeln utan i `gorInte`.
- Typen blir `Record<GorInte, { text: string; lank?: { href: string; text: string } }>`. `lank.text` är ett ord eller en fras som står **exakt en gång** i `text`.
- `inifran-utan-daggpunkt` får `lank: { href: '/rakna/daggpunkt/', text: 'TEXT SAKNAS: daggpunkt-lanktext' }`; hantverkaren väljer frasen ur sin egen mening.
- Sidan delar `text` vid `lank.text` och renderar `{före}<a href={href} class={LANK_KLASS}>{lank.text}</a>{efter}`. Intern länk, inget `rel`. Utan `lank` som i dag.
- **Test:** för varje `gorInte` med `lank` förekommer `lank.text` exakt en gång i `text`, och `href` börjar med `/rakna/`. Så länge länktexten är `TEXT SAKNAS` skrivs testet som `{ todo: 'text 12.41' }`.

### Till hantverkaren från 12 F (texten, inte koden)

- `klarar-redan-tillagg` och `klarar-redan-uvarde` (12.35), `battre-men-over-forval` (12.36), `rubrik-flexibatts-forval` (12.37).
- `STEG_KANT_U`, `STEG_FONSTER_DORR` och `SKISS_BILDTEXT` för båda lägena (12.38).
- `slag-begransning` (12.39).
- `grupp-*` och `kort` för lösullen (12.40).
- `hjalp-region` och `daggpunkt-lanktext` (12.41).

## 12 G. Korrektur och läsare, varv 7, 2026-09-28 (`korrektur-rakna-u-varde-varv-7-2026-09-28.md`, `retur-rakna-u-varde-varv-7-2026-09-28.md`)

Specad av koordinatorn 2026-09-28, godkänns av UX och bygge. En rad per krav.

- **12.42** Källistan i `u-varde.astro`: `</a>, {k.last}` på samma rad, så att inget mellanslag hamnar före kommat. (specad av koordinatorn 2026-09-28, godkänns av UX och bygge)
- **12.43** `namnIRubrik`: `cellplast-okand` går genom `materialIForslag` som `mineralull-okand` ("cellplast"). Rubrikorden för lösullen står i en egen tabell `RUBRIKORD` i modulen: `stenull-granulate` "lösull av stenull", `glasull-fyllupp` "lösull av glasull", `cellulosa` "cellulosa", `stenull-vindsull` "lösull" som förut. Ingen strängmanipulation av `kort`. (specad av koordinatorn 2026-09-28, godkänns av UX och bygge)
- **12.44** `fel['skikt-for-manga']` och `fel['tillagg-for-manga']` skriver talet med bokstäver (sex, två) genom en liten tabell för tal under tretton i modulen; ingen exporterad hjälpare fanns i `src/lib`. (specad av koordinatorn 2026-09-28, godkänns av UX och bygge)
- **12.45** Återbetalningstid bara för vindsbjälklaget. Ny orsak `bara-vind` i `AterbetalningSaknas` för `del` `vagg` och `golv` i läget skikt när något sparas, oavsett material; texten `TEXT.aterbetalningSaknas['bara-vind']` är `TEXT SAKNAS`. Kronorna om året visas som förut. Testfallen i 12.34: vägg och golv ger `bara-vind`, vinden 9 år som förut. (specad av koordinatorn 2026-09-28, godkänns av UX och bygge)
- **12.46** Förslaget för Flexibatts är en total som går att köpa: den minsta summa av skivtjocklekarna med pris (`FLEXIBATTS_TJOCKLEKAR_MM`, 45 och 95 mm) som når kravet, räknad med `extraSkivorForGrans`. Lösull och övriga material avrundas i steg om 10 mm som förut. Testfall: standardväggen och standardgolvet. (specad av koordinatorn 2026-09-28, godkänns av UX och bygge)
- **12.47** Regeln `delta-u` visas bara för `del` `vagg`. Vinden och golvet behåller gruppen "Förenklingarna" med `tak-kallvind` respektive `golv-uteluft` och `energi-inte-matare`. (specad av koordinatorn 2026-09-28, godkänns av UX och bygge)

### Till hantverkaren från 12 G (texten, inte koden)

- `aterbetalningSaknas['bara-vind']` (12.45): visas i läget skikt för vägg och golv när något sparas. Säger varför tiden saknas: räknaren har bara skivornas pris, och en vägg eller ett golv kräver också panel, läkt, vindskydd och att konstruktionen öppnas.
