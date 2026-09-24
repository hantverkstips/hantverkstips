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
   - läget uvarde: `null`, `aterbetalningSaknas: 'uvarde-lage'`
   - ingen besparing: `null`, `'ingen-besparing'`
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
4. Jämförelsen, två rader i en `<ul>` med `border-t border-linje py-2`: kolumnens rubrik, gränsen med tre decimaler för vägg, tak, golv och en decimal för fönster och dörr, och `klarar` eller `klararInte`.
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

Prisraderna har datum i Värde eller Källa. Testet kontrollerar att varje konstant i 2.2 har en rad.

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
