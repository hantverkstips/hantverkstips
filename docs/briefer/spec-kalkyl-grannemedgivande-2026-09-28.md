# Spec: räknaren /rakna/grannemedgivande/

UX och bygge-agenten, 2026-09-28. Gäller steg 1 till 6 i skillen nytt-verktyg, bilderna, utskriften och rättningen av `/rakna/bygglov-altan/`. Underlaget är `docs/briefer/underlag-kalkyl-grannemedgivande-2026-09-28.md` (här "underlaget", avsnittsnummer därifrån), SEO-kraven står i `docs/briefer/seo-checklista-2026-09-28/raknare.md` avsnittet `/rakna/grannemedgivande/` (här "checklistan"). Mönstret är `docs/SPEC-SIDMALLAR.md` 4.7. Närmaste förebilder: `src/lib/kalkyl/bygglov-altan.ts` (regler med lagrum, "Därför blev svaret så") och `docs/briefer/spec-kalkyl-u-varde-2026-09-24.md` (TEXT-objektet, lägeslänkarna, testupplägget).

Utvecklaren gissar ingenting. Står något inte här gäller 4.7, och står det inte där frågar utvecklaren innan hen bygger.

Verktyget är en **generator**, inte en kalkylator. Del 1 är en kontroll som ger ett av tre utfall: medgivande krävs, krävs inte, eller bygglov oavsett. Del 2 är ett medgivande att skriva ut och låta grannen skriva under, och det visas bara när utfallet är "krävs".

---

## 0. Godkännande av underlaget

Underlaget är **godkänt med de beslut som står här**. Jag har läst om 9 kap. 10, 19, 34, 35, 37, 38 och 52 §§ i lydelse Lag (2025:974) på lagen.nu i dag, och de stämmer ordagrant med underlagets avsnitt 1.2 och 2.1. Konstanterna i avsnitt 7 används som de står.

| # | Underlaget | Beslut |
|---|---|---|
| 1 | Att verifiera 1: altan utan tak nära gräns | **Lagen gäller.** Altan står inte i 9 kap. 34 §, och prop. 2024/25:169 s. 162 säger att regeringen medvetet avstod. Båda räknarna säger "krävs inte" för altan utan tak. Med skärmtak eller inglasning är altanen en tillbyggnad (9 kap. 10 §) och då krävs medgivandet enligt 34 § 1. Se beslut 2 i avsnitt 1 och rättningen i avsnitt 11 |
| 2 | Att verifiera 2: återkallelse | Ingen text, ingen blankett och inget besked får säga att medgivandet är bindande eller inte kan återkallas. Se beslut 3 i avsnitt 1 |
| 3 | Att verifiera 3: digital underskrift | Blanketten är papper och penna. Sidan lovar inte att BankID eller e-signatur godtas och säger inte heller att det är förbjudet |
| 4 | Att verifiera 4: bostadsrättsförening, egen samägd fastighet | Verktyget påstår ingenting om vem som tecknar en förening. Blanketten har fyra underskriftsrutor och ledtexten säger att alla ägare skriver under; det är allt |
| 5 | Att verifiera 5: sanktionsavgift för byggnad | Behövs inte. Verktyget visar ingen avgift |
| 6 | Att verifiera 6: 9 kap. 10 § gäller alla byggnader som inte är komplementbyggnader | **Stämmer**, kontrollerat mot lagtexten: "en tillbyggnad av en byggnad som inte är en komplementbyggnad eller ett komplementbostadshus". `takRegel` i bygglov-altan.ts och antagandet om flerbostadshus på altansidan är fel och rättas (avsnitt 11) |
| 7 | Att verifiera 7: grannen på andra sidan gatan | Godkänt som ANTAGANDE G3 nedan, och ingen text påstår det som fakta |
| 8 | K9, prickmark | Inget fält för planstrid. ANTAGANDE G1 (en- eller tvåbostadshus) gör att alla åtgärder i verktyget får strida mot plan enligt 10 kap. 2 a §, så medgivandet verkar även på prickmark. Står som villkorsrad, inget eget test |
| 9 | Väg utanför detaljplan | Godkänt: bygglov, med lagrummet "9 kap. 34 och 35 §§ samt prop. 2024/25:169 s. 170" |
| 10 | Pool | Inte ett val i formuläret. Får nämnas i text av hantverkaren med prop. s. 162 som källa |

ANTAGANDEN i denna spec, som ska stå i antagandetabellen (avsnitt 4.7):

- **G1.** Huset på tomten är ett en- eller tvåbostadshus. Då omfattas komplementbyggnad, tillbyggnad och mur eller plank av 10 kap. 2 a §, och medgivandet verkar även där åtgärden strider mot detaljplanen, utom mot skyddsbestämmelser (som fångas av fältet för värdefullt).
- **G2.** Formuläret frågar inte efter tre villkor i lagen: att komplementbyggnaden är mindre än huvudbyggnaden och står inom tomten (9 kap. 4 och 5 §§ punkt 2 och 4), och att tillbyggnaden inte går över husets taknock (9 kap. 10 § 2). De står som villkorsrader under svaret.
- **G3.** Avståndet mäts till den närmaste gränsen, och "andra sidan" gäller den gränsen. Ligger fler gränser inom 4,5 m behövs ett medgivande per fastighet. Mot en gata räknas grannen på andra sidan gatan inte.
- **G4.** Fältens gränser (avsnitt 2.4) är satta för att fånga skrivfel, inte ur lagen.
- **G5.** Papper och penna är det enda sätt att skriva under som alla källor godtar.

---

## 1. De tre besluten

### Beslut 1. Integriteten: blanketten skrivs ut med tomma rader (underlagets väg A)

**Adressen bär bara åtgärden, måtten, planen och vad som ligger på andra sidan gränsen.** Blanketten förtrycks med de uppgifterna och har tomma rader för allt som är personuppgifter: fastighetsbeteckningar, adresser, namn, ort och datum, namnteckningar. Formuläret har inga fritextfält alls.

Varför A och inte B eller C:

- **Inga personuppgifter lämnar webbläsaren**, eftersom de aldrig skrivs in i den. Då finns inget att logga hos Vercel, inget i webbläsarhistoriken, inget i Referer och inget i CDN-cachen, och vi behöver inget beslut om serverloggar (B) eller en React-ö (C, CLAUDE.md regel 5). Sidan förblir ett GET-formulär med 0 kB JavaScript.
- **Underskriften görs ändå för hand.** Kravet är "nedskrivet och undertecknat" (prop. s. 432–433), och papper med penna är det enda alla källor godtar (G5). Den som ska skriva sitt namn sitter redan med pennan; att grannen själv skriver sin fastighetsbeteckning och sitt namn ger färre fel än att byggherren skriver dem åt henne.
- **Det som skiljer oss från en tom PDF behålls**: blanketten har åtgärden, måtten, avståndet, detaljplanen och lagrummet förtryckta, alltså precis det Boverket säger ska framgå ("det viktiga är att det tydligt framgår vilken åtgärd grannen har medgivit"). Checklistans krav 1 ("blankett att skriva ut, gratis, utan e-post och utan inloggning") uppfylls. SERP-läsningens önskan om "ifyllt medgivande i webbläsaren" uppfylls för åtgärden men inte för personfälten; det är priset för att sidan inte behandlar personuppgifter, och jag tar det.
- **Delningen fungerar som på alla räknare**: den delade adressen ger samma svar och samma förtryckta blankett.

Konsekvenser som byggs in:

- `tolkaQuery` läser bara nycklarna i 2.6. Okända nycklar (`namn`, `fb`, vad som helst) ignoreras, och sidan skriver aldrig ut ett värde ur adressen som inte gått genom `tolkaQuery` och validerats till tal eller en känd nyckel. Testas (6.4).
- `delbarQuery` skriver bara ut nycklarna i 2.6. Testas.
- Webbläsarens egen sidhuvud och sidfot vid utskrift visar adressen. Den innehåller inga personuppgifter, så det är i sin ordning.

### Beslut 2. Altanen: lagen gäller, och de två räknarna säger samma sak

| Altan | Närmare gränsen än 4,5 m | Lagrum |
|---|---|---|
| Utan tak, på mark eller plintar | **Medgivande krävs inte** | 9 kap. 34 § (altan saknas i uppräkningen), prop. 2024/25:169 s. 162 |
| Ovanpå en byggnad, utan tak | Krävs inte (fasadändring står inte i 34 §) | 9 kap. 34 § |
| Med skärmtak eller inglasning, högst 30 kvm tillsammans med andra lovfria tillbyggnader | **Krävs** | 9 kap. 10 §, 34 § 1, 35 § första stycket 3 |
| Med tak eller inglasning över 30 kvm | Bygglov, medgivandet hjälper inte | 9 kap. 10 § |
| Tätt plank över 1,2 m på eller vid altanen | Krävs för planket | 9 kap. 34 § 3 |
| Över måtten i 9 kap. 19 § inom detaljplan, eller värdefullt hus | Bygglov, medgivandet hjälper inte | 9 kap. 19, 37, 38 §§ |

Grannemedgivanderäknaren har "Altan utan tak" som eget val och hänvisar altan med tak till valet "Tillbyggnad". Altanräknaren behåller sina fält och får en rättad `gransRegel` (avsnitt 11). Boverkets konsumentsida "Mur, plank, altan och annat" (2026-06-04) säger något annat; den får nämnas i texten som det den är, en sammanfattning som säger emot lagtexten och Boverkets egen kunskapsbank, men den styr inget svar. Inget besked säger "hämta grannens underskrift ändå" om en altan utan tak; det vore att säga att lagen kräver något den inte kräver.

Testet för grannemedgivandet kör båda modulerna på samma altaner och kräver samma svar (6.3). Då kan de inte glida isär igen.

### Beslut 3. Återkallelsen: båda källorna, inget löfte

- **Propositionen** (prop. 2024/25:169 s. 166–167, med NJA 2014 s. 445): inget hindrar att grannen återkallar medgivandet, även efter att arbetet börjat. Den som vill ha ett beslut som står sig kan söka lov fast åtgärden är lovfri, **9 kap. 52 §** (kontrollerat i dag: "Även om en åtgärd inte omfattas av krav på bygglov … får den som avser att vidta åtgärden ansöka om lov").
- **Boverket** (PBL kunskapsbanken, ändrad 2026-02-10): medgivandet är ett avtal som inte ensidigt kan brytas.
- **Ingen domstol har prövat frågan efter 1 december 2025** (underlaget har inte hittat något).

Regler för all text och kod:

1. Beskeden, blanketten, kortsvaret, Faq, "Gör inte det här" och registerraden får inte innehålla orden "bindande", "oåterkallelig", "oåterkalleligt", "kan inte ångra", "kan inte återkalla", "kan inte dra tillbaka". Testet söker igenom `TEXT` (6.4), och jag söker igenom sidan vid granskningen.
2. Frågan besvaras på ett ställe med båda källorna och utan avgörande: i checklistans avsnitt 5 (om grannen säger nej, och om grannen kan ångra sig) och kort i Faq. Ordet "avtal" får stå där, som Boverkets uppfattning.
3. Rådet som följer av propositionen står i "Gör inte det här" (`lita-pa-pappret`): vill du vara säker, sök lov enligt 9 kap. 52 §.
4. Blanketten säger bara vad medgivandet avser. Den säger inget om hur länge det gäller eller om det kan återkallas.

---

## 2. Formelmodulen `src/lib/kalkyl/grannemedgivande.ts`

Ren modul utan Astro-importer. Enda importen:

```ts
import {
  GRANS_M, HOJD_NARA_BYGGNAD_M, HOJD_LANGRE_BORT_M, NARA_BYGGNAD_M,
  LOVFRI_TILLBYGGNAD_KVM, REGLERNA_GALLER_FRAN,
} from './bygglov-altan.ts';
```

med `.ts`-ändelse. Samma lag, samma tal, ett ställe; 9 kap. 19 § gäller mur, plank och altan lika. Konstanterna nedan som inte finns där skrivs här, namngivna överst med kommentaren `Källa:` eller `ANTAGANDE:`.

### 2.1 Typer

```ts
export type Atgard = 'komplement' | 'tillbyggnad' | 'altan' | 'plank' | 'staket' | 'ekonomi';
export type Plan = 'ja' | 'nej';
/** Vad som ligger på andra sidan den närmaste gränsen. */
export type Mot = 'tomt' | 'gata' | 'vag';
export type Utfall = 'kravs' | 'kravs-inte' | 'bygglov';
export type Mottagare = 'grannar' | 'huvudman' | 'jarnvag';

export interface GrannemedgivandeIndata {
  atgard: Atgard;
  plan: Plan;
  gransM: number;            // avstånd till närmaste gräns
  mot: Mot;
  jarnvag: boolean;          // järnvägsspår närmare än 30 m från åtgärden
  vardefullt: boolean;       // huset eller området utpekat som särskilt värdefullt
  // komplement
  byaKvm: number;            // byggnadsarea
  nockM: number;             // taknockshöjd
  ovrigaKvm: number;         // andra lovfria komplementbyggnader på tomten, byggnadsarea
  // tillbyggnad
  areaKvm: number;           // bruttoarea eller öppenarea
  ovrigaTbKvm: number;       // andra lovfria tillbyggnader på huset
  // plank
  plankHojdM: number;
  plankAvstandM: number;     // till närmaste byggnad
  // altan
  golvM: number;
  altanAvstandM: number;     // till närmaste byggnad
}

export type RegelNyckel =
  | 'varde'
  | 'bya' | 'nock' | 'summa'                 // komplement
  | 'area'                                   // tillbyggnad
  | 'hojd-19'                                // plank och altan inom plan
  | 'utanfor-plan-19'                        // plank och altan utanför plan
  | 'ekonomi' | 'altan-inte-34' | 'staket-inte-34' | 'plank-lagt'
  | 'langt-fran-grans' | 'grans-tomt' | 'grans-gata' | 'grans-vag' | 'jarnvag'
  | 'skriftligt'
  | 'villkor-huvudbyggnad' | 'villkor-tomten' | 'villkor-taknock'
  | 'villkor-flera-granser' | 'villkor-planstrid' | 'villkor-tatt-plank';

/** Etiketten på raden: vad regeln gör med svaret. */
export type Slag = 'bygglov' | 'inom' | 'kravs' | 'kravs-inte' | 'villkor';

export interface Regel { nyckel: RegelNyckel; slag: Slag; lagrum: string }

export type GorInte = 'muntligt' | 'tystnad' | 'bygga-annat' | 'lita-pa-pappret'
  | 'mata-fran-vaggen' | 'medgivande-mot-lov';

export type FelNyckel = 'atgard' | 'mot' | 'grans' | 'bya' | 'nock' | 'ovriga'
  | 'area' | 'ovrigatb' | 'plankhojd' | 'plankavstand' | 'golv' | 'altanavstand';

export type GrannemedgivandeResultat =
  | {
      status: 'ok';
      utfall: Utfall;
      mottagare: Mottagare[];        // tom utom vid 'kravs'; ordning grannar, huvudman, jarnvag
      regler: Regel[];               // i den ordning de slog in, villkoren sist
      gorInteDetHar: GorInte[];
    }
  | { status: 'ogiltig'; fel: Partial<Record<FelNyckel, string>> };
```

Export utöver typerna: `JARNVAG_M`, `PLANK_HOJD_GRANS_M`, `KOMPLEMENT`, `STANDARD`, `GRANSER`, `ATGARD_ORDNING`, `ATGARDSTABELL`, `ANTAGANDEN`, `TEXT`, `tolkaQuery`, `raknaGrannemedgivande`, `delbarQuery`, `bytAtgardQuery`, `blankettFakta`, `altanraknarQuery`, `talText`.

### 2.2 Konstanter

| Namn | Värde | Märkning |
|---|---|---|
| `GRANS_M` | importerad, 4.5, jämförelse `<` | (bygglov-altan.ts; kommentaren där rättas, avsnitt 11) |
| `JARNVAG_M` | `30.0` | Källa: plan- och bygglagen 9 kap. 34 §, lagen.nu/2010:900, läst 2026-09-28. Används bara i etiketter och antagandetabell; fältet är en kryssruta |
| `PLANK_HOJD_GRANS_M` | `1.2`, jämförelse `>` | Källa: 9 kap. 34 § 3 |
| `HOJD_NARA_BYGGNAD_M`, `HOJD_LANGRE_BORT_M`, `NARA_BYGGNAD_M` | importerade, 1.8 / 1.2 / 3.6, `<=` för avståndet (lagen: "inom 3,6 meter") och `>` för höjden | 9 kap. 19 § |
| `KOMPLEMENT` | `{ ja: { byaKvm: 30, nockM: 4.0, summaKvm: 45 }, nej: { byaKvm: 50, nockM: 4.5, summaKvm: 65 } }`, alla `<=` | Källa: 9 kap. 4 § (inom plan) och 5 § (utanför), punkt 1, 3 och 5 |
| `LOVFRI_TILLBYGGNAD_KVM` | importerad, 30, `<=` för både area och area plus övriga | 9 kap. 10 § 1 och 3 |
| `REGLERNA_GALLER_FRAN` | importerad, '1 december 2025' | SFS 2025:974 |

### 2.3 Åtgärderna

`ATGARD_ORDNING: Atgard[] = ['komplement', 'tillbyggnad', 'altan', 'plank', 'staket', 'ekonomi']`. Formulärets val och tabellen står i den ordningen.

| Nyckel | Vad det är (för hantverkaren, inte etiketten) | Fält |
|---|---|---|
| `komplement` | komplementbyggnad och komplementbostadshus: förråd, garage, gäststuga, det som hette friggebod och attefallshus. Flytt av en bod är nybyggnad och hör hit | `bya`, `nock`, `ovriga` |
| `tillbyggnad` | tillbyggnad av huset: extra rum, skärmtak, inglasat uterum, altan med tak, vidbyggd carport, takkupa. Tillbyggnad av ett förråd eller garage hör till `komplement` med hela ytan efteråt (9 kap. 11, 12 §§) | `area`, `ovrigatb` |
| `altan` | altan utan tak | `golv`, `altanavstand` |
| `plank` | mur eller plank, också tätt räcke eller plank på en altan | `plankhojd`, `plankavstand` |
| `staket` | glest staket, spaljé, pergola utan tak | inga |
| `ekonomi` | ekonomibyggnad för jord- eller skogsbruk utanför detaljplan | inga |

### 2.4 Gränser

```ts
export const GRANSER = {
  gransM: [0, 100],
  byaKvm: [1, 200],
  nockM: [0.5, 15],
  ovrigaKvm: [0, 500],
  areaKvm: [1, 200],
  ovrigaTbKvm: [0, 200],
  plankHojdM: [0.1, 5],
  plankAvstandM: [0, 100],
  golvM: [0, 10],
  altanAvstandM: [0, 100],
} as const;
```

Inklusive. ANTAGANDE G4. Bara den valda åtgärdens fält valideras; de andra finns i indata med standardvärden och läses inte.

### 2.5 Standardvärden

```ts
export const STANDARD: GrannemedgivandeIndata = {
  atgard: 'komplement', plan: 'ja', gransM: 2.0, mot: 'tomt', jarnvag: false, vardefullt: false,
  byaKvm: 12, nockM: 3.0, ovrigaKvm: 0,
  areaKvm: 20, ovrigaTbKvm: 0,
  plankHojdM: 1.6, plankAvstandM: 2.0,
  golvM: 0.6, altanAvstandM: 0,
};
```

Standardfallet är underlagets fall 1: ett förråd på 12 kvm, 2,0 m från gränsen mot grannens tomt, inom detaljplan. Det ger `kravs`, och det är avsiktligt: den som söker "grannemedgivande mall" ska se blanketten utan att fylla i något. Måtten för de andra åtgärderna är underlagets fall 4, 5 och 6.

### 2.6 `tolkaQuery(q: URLSearchParams): { indata: GrannemedgivandeIndata; harIndata: boolean }`

| Nyckel | Fält | Värden | Saknas | Okänt värde |
|---|---|---|---|---|
| `atgard` | atgard | nycklarna i 2.3 | standard | standard |
| `plan` | plan | `ja`, `nej` | standard | standard |
| `grans` | gransM | tal | standard | NaN |
| `mot` | mot | `tomt`, `gata`, `vag` | standard | standard |
| `jarnvag` | jarnvag | `1` är sant, allt annat falskt | falskt | falskt |
| `varde` | vardefullt | `1` är sant, allt annat falskt | falskt | falskt |
| `bya`, `nock`, `ovriga` | komplement | tal | standard | NaN |
| `area`, `ovrigatb` | tillbyggnad | tal | standard | NaN |
| `plankhojd`, `plankavstand` | plank | tal | standard | NaN |
| `golv`, `altanavstand` | altan | tal | standard | NaN |

- `harIndata` är sant när någon av nycklarna finns.
- Talen tolkas som i `bygglov-altan.ts` (`tillTal`: trim, decimalkomma), utökat så att ett efterhängande `m`, `m2` eller `m²` tolkas ("2,5 m").
- **Inga andra nycklar läses.** Beslut 1.

### 2.7 `raknaGrannemedgivande(i): GrannemedgivandeResultat`

**Validering**, alla fel samlas, `ogiltig` om minst ett:

- `atgard` är `ekonomi` och `plan` är `ja` → `fel.atgard` (TEXT `fel-ekonomi-inom-plan`).
- `mot` är `gata` och `plan` är `nej` → `fel.mot` (`fel-gata-utanfor-plan`). `mot` är `vag` och `plan` är `ja` → `fel.mot` (`fel-vag-inom-plan`).
- `gransM` utanför gränsen eller NaN → `fel.grans`.
- Den valda åtgärdens tal utanför gränsen eller NaN → felet på sin nyckel (`bya`, `nock`, `ovriga`, `area`, `ovrigatb`, `plankhojd`, `plankavstand`, `golv`, `altanavstand`). Feltexterna är funktioner med talen ur `GRANSER`, som i u-värdesspecen 2.9.

**Beslutsgången, i den här ordningen.** Varje steg lägger sina regler i `regler`. Ett steg som ger `bygglov` avslutar.

1. **Värdefullt.** `vardefullt` och åtgärden är inte `staket` → regel `varde` (slag `bygglov`, lagrum `Plan- och bygglagen 9 kap. 37 §` för komplement, tillbyggnad och ekonomi, `9 kap. 38 §` för altan och plank). Utfall `bygglov`.
2. **Storleken och undantagen, per åtgärd.**
   - `komplement`: med `k = KOMPLEMENT[plan]`, tre regler i ordning, varje med slag `inom` eller `bygglov`:
     `bya` (`byaKvm <= k.byaKvm`), `nock` (`nockM <= k.nockM`), `summa` (`byaKvm + ovrigaKvm <= k.summaKvm`). Lagrum `Plan- och bygglagen 9 kap. 4 § 1` / `4 § 3` / `4 § 5` inom plan och `5 §` på samma sätt utanför. Minst en `bygglov` → utfall `bygglov`, slut. Annars villkoren `villkor-huvudbyggnad` (`9 kap. 4 § 2` / `5 § 2`) och `villkor-tomten` (`4 § 4` / `5 § 4`) läggs åt sidan till steg 5. Åtgärden står i 34 § 1.
   - `tillbyggnad`: regel `area`, slag `inom` om `areaKvm <= 30 && areaKvm + ovrigaTbKvm <= 30`, annars `bygglov` och slut. Lagrum `Plan- och bygglagen 9 kap. 10 § 1 och 3`. Villkoret `villkor-taknock` (`9 kap. 10 § 2`) läggs åt sidan. Åtgärden står i 34 § 1.
   - `plank`: inom plan regel `hojd-19` med `nara = plankAvstandM <= 3.6`, `max = nara ? 1.8 : 1.2`, slag `inom` om `plankHojdM <= max`, annars `bygglov` och slut; lagrum `Plan- och bygglagen 9 kap. 19 §`. Utanför plan regel `utanfor-plan-19` (slag `inom`, lagrum `Plan- och bygglagen 9 kap. 19 § gäller bara inom detaljplan`). Sedan: `plankHojdM > 1.2` → åtgärden står i 34 § 3. Annars regel `plank-lagt` (slag `kravs-inte`, lagrum `Plan- och bygglagen 9 kap. 34 § 3`), utfall `kravs-inte`, slut.
   - `altan`: `hojd-19` eller `utanfor-plan-19` som plank, med `golvM` och `altanAvstandM`. Klarar den sig: regel `altan-inte-34` (slag `kravs-inte`, lagrum `Plan- och bygglagen 9 kap. 34 § och prop. 2024/25:169 s. 162`) och villkoret `villkor-tatt-plank` (`9 kap. 34 § 3`), utfall `kravs-inte`, slut.
   - `staket`: regel `staket-inte-34` (slag `kravs-inte`, lagrum `Plan- och bygglagen 9 kap. 34 §`), utfall `kravs-inte`, slut.
   - `ekonomi` (bara utanför plan): regel `ekonomi` (slag `kravs-inte`, lagrum `Plan- och bygglagen 9 kap. 35 § 1`), utfall `kravs-inte`, slut.
3. **Gränsen.** `nara = gransM < GRANS_M`.
   - `nara` och `mot === 'vag'` → regel `grans-vag` (slag `bygglov`, lagrum `Plan- och bygglagen 9 kap. 34 och 35 §§ samt prop. 2024/25:169 s. 170`), utfall `bygglov`, slut.
   - `nara` och `mot === 'tomt'` → regel `grans-tomt` (slag `kravs`, lagrum `Plan- och bygglagen 9 kap. 34 § {punkt} och 35 § första stycket 3`, där punkt är 1 för komplement och tillbyggnad och 3 för plank), mottagare `grannar`.
   - `nara` och `mot === 'gata'` → regel `grans-gata` (slag `kravs`, lagrum `Plan- och bygglagen 9 kap. 34 § {punkt} och 35 § andra stycket`), mottagare `huvudman`.
4. **Järnvägen.** `jarnvag` → regel `jarnvag` (slag `kravs`, lagrum `Plan- och bygglagen 9 kap. 34 § {punkt} och 35 § andra stycket`), mottagare `jarnvag`.
5. **Utfallet.**
   - Inga mottagare → regel `langt-fran-grans` (slag `kravs-inte`, lagrum `Plan- och bygglagen 9 kap. 34 §`), utfall `kravs-inte`, sedan villkoren från steg 2.
   - Annars utfall `kravs`, regel `skriftligt` (slag `kravs`, lagrum `Plan- och bygglagen 9 kap. 35 § första stycket 3, i lydelse enligt lag 2025:974`), villkoren från steg 2, `villkor-flera-granser` när `grannar` finns (`9 kap. 35 § första stycket 3`), `villkor-planstrid` när plan är `ja` (`9 kap. 35 § första stycket 3 b och 10 kap. 2 a §`).

Lagrumssträngarna ovan är data och skrivs ordagrant. De är de enda publika strängarna utvecklaren skriver.

**gorInteDetHar**, i den här ordningen, de som gäller:
`muntligt`, `tystnad`, `bygga-annat`, `lita-pa-pappret` (alla fyra vid `kravs`); `mata-fran-vaggen` (åtgärd `komplement` eller `tillbyggnad` och utfall inte `bygglov`); `medgivande-mot-lov` (utfall `bygglov`).

### 2.8 Hjälpfunktioner (exporteras, sidan använder bara dessa)

- `talText(n)`: heltal utan decimal, annars komma ("2,5"). Samma som `matt()` i bygglov-altan.ts utan enheten.
- `delbarQuery(i): URLSearchParams`: `atgard`, `plan`, `grans`, `mot`, `jarnvag=1` bara när sant, `varde=1` bara när sant, sedan **bara den valda åtgärdens** nycklar. Tal med komma. Inga andra nycklar, någonsin.
- `bytAtgardQuery(i, ny: Atgard): URLSearchParams`: `delbarQuery` med `atgard` bytt och åtgärdsnycklarna borttagna, så att den nya åtgärden får sina standardmått. Byter man till `ekonomi` sätts `plan=nej`, och `mot=gata` blir `tomt`. Byter man från `ekonomi` behålls `plan=nej`.
- `blankettFakta(i, m: Mottagare): { atgard: Atgard; matt: string; gransM: number | null; plan: Plan; lagrum: string }`. `matt` byggs av talen och enheterna ("12 m², nockhöjd 3,0 m" som `TEXT.blankett.matt[atgard](…)`, alltså hantverkarens ord och kodens tal). `gransM` är `null` för `jarnvag` (avståndet till spårets mitt fylls i för hand). `lagrum`: grannar `Plan- och bygglagen (2010:900) 9 kap. 34 § {punkt} och 35 § första stycket 3`, huvudman och järnväg `… 35 § andra stycket`.
- `altanraknarQuery(i): URLSearchParams | null`: för `atgard === 'altan'` en adress till `/rakna/bygglov-altan/` med `plan`, `hojd` (golvM), `avstand` (altanAvstandM), `grans`, `tak=nej`. Annars `null`.

### 2.9 Tabellen över åtgärder (checklistans H2 1)

`ATGARDSTABELL` är en lista med rader `{ nyckel, indata: GrannemedgivandeIndata }` där indata är STANDARD med ändringar. Sidan kör `raknaGrannemedgivande` på varje rad och skriver kolumnen "medgivande" ur utfallet och kolumnen "lagrum" ur den regel som avgjorde. Tabellen kan därmed aldrig säga något annat än verktyget.

| nyckel | indata (utöver STANDARD) | ger |
|---|---|---|
| `komplement` | – | kravs |
| `tillbyggnad` | atgard tillbyggnad | kravs |
| `plank-hog` | plank, 1,6 m, 2,0 m från huset | kravs |
| `plank-lag` | plank, 1,2 m | kravs-inte |
| `altan` | altan | kravs-inte |
| `staket` | staket | kravs-inte |
| `ekonomi` | ekonomi, plan nej | kravs-inte |
| `pa-gransen-45` | komplement, grans 4,5 | kravs-inte |
| `for-stor` | komplement, bya 35 | bygglov |
| `gata` | komplement, mot gata, grans 3,0 | kravs (huvudman) |
| `vag` | komplement, plan nej, mot vag, grans 3,0 | bygglov |
| `jarnvag` | komplement, grans 10, jarnvag | kravs (järnväg) |

Radetiketterna `TEXT.tabell.rad[nyckel]` och kolumnrubrikerna är hantverkarens. Tabellen står i `<Tabellyta kolumner={3}>`.

### 2.10 Publika strängar

All text läsaren ser och som modulen äger står i **ett** objekt, `export const TEXT`, överst efter konstanterna. Varje värde är i dag `'TEXT SAKNAS: <nyckel>'`, och en text med tal är en funktion som stoppar in talen (`(v) => \`TEXT SAKNAS: meta-komplement ${talText(v.byaKvm)} …\``). Nycklar:

- `atgard.<Atgard>`: `namn` (valet i formuläret och i tabellen; checklistan vill ha "altan" och "staket" som ord i valen) och `hint` (en rad under namnet, t.ex. vad som ingår och de gamla namnen friggebod och attefallshus inom parentes). `komplement.hint` ska säga att flytt av en bod räknas. `tillbyggnad.hint` ska säga att altan med tak hör hit. `altan.hint` ska säga "utan tak" eller motsvarande. `plank.hint` ska säga att tätt räcke räknas.
- `falt.*`: etikett och hjälprad för `grans`, `mot` (legend och tre val), `plan` (legend, två val, hjälprad om kommunens karta), `jarnvag` (kryssrutans text, med `JARNVAG_M` insatt), `vardefullt`, `bya`, `nock`, `ovriga`, `area`, `ovrigatb`, `plankhojd`, `plankavstand`, `golv`, `altanavstand`, `atgard-rubrik`, `atgard-kompakt-legend`. Hjälpraden för `grans` ska säga att man mäter från väggen eller takutsprånget till den närmaste gränsen (MÖD 2020:9, underlaget avsnitt 7). Undvik ordet "tak" ensamt och ordet "regel" (stil-och-design).
- `utfall.<Utfall>`: `ord` (det stora ordet i spalten), `rest` (resten av raden på samma baslinje), `besked` (en mening med verb som säger vad läsaren ska göra).
- `mottagare.<Mottagare>`: en rad var i spalten som säger vem som skriver under.
- `meta.<Atgard>(i)`: raden med måtten under svaret, t.ex. förråd, yta, avstånd, plan.
- `slag.<Slag>`: etiketterna på regelraderna.
- `regel.<RegelNyckel>(i)`: en text per regel, med talen insatta. `altan-inte-34` ska säga att lagen inte kräver medgivande för en altan utan tak och att det krävs om den får tak, inglasning eller ett tätt plank över 1,2 m. `grans-gata` ska säga att huvudmannen, oftast kommunen, skriver under och att det finns fall utan huvudman där ingen kan. `skriftligt` ska säga att kravet på skriftligt är nytt sedan `REGLERNA_GALLER_FRAN`.
- `gorInte.<GorInte>`: ett stycke var. `lita-pa-pappret` bär beslut 3.
- `fel.*`: `ekonomi-inom-plan`, `gata-utanfor-plan`, `vag-inom-plan`, och en funktion per talfält med min och max.
- `blankett.*`: `rubrik`, `inledning`, `del-byggherre`, `del-atgard`, `del-granne` (per mottagare: grannfastighet, huvudman för allmän plats, järnvägens infrastrukturförvaltare), `del-underskrift`, `falt-fastighetsbeteckning`, `falt-adress`, `falt-namn`, `falt-beskrivning`, `falt-ritningar`, `ritning-situationsplan`, `ritning-fasad`, `ritning-plan`, `falt-daterade`, `falt-avstand-spar` (bara järnväg), `falt-ort-datum`, `falt-namnteckning`, `falt-namnfortydligande`, `medgivandemening` (det grannen skriver under på), `omfattning` (att medgivandet gäller åtgärden och ritningarna som undertecknats), `alla-agare`, `exemplar`, `kalla`, samt `matt.<Atgard>(i)`.
- `tabell.*`: kolumnrubriker och `rad.<nyckel>`.
- `antagande.<nyckel>`: kolumnen "Vad" i antagandetabellen.

Förbjudna ord enligt beslut 3 får inte förekomma i något `TEXT`-värde. Testerna låser nycklarna och att varje värde är en icke-tom sträng eller funktion som ger en.

---

## 3. Formuläret `src/components/kalkyl/GrannemedgivandeForm.astro`

Props, alla valfria:

```ts
interface Props {
  indata?: GrannemedgivandeIndata;       // standard: STANDARD
  varden?: Partial<Record<'grans' | 'bya' | 'nock' | 'ovriga' | 'area' | 'ovrigatb'
    | 'plankhojd' | 'plankavstand' | 'golv' | 'altanavstand', string>>;  // råa strängar ur adressen
  fel?: Partial<Record<FelNyckel, string>>;
  kompakt?: boolean;
  idPrefix?: string;
  knappText?: string;                    // standard 'TEXT SAKNAS: knapp'
  /** Länk per åtgärd, byggd av sidan med bytAtgardQuery. Krävs när kompakt är falskt. */
  atgardHref?: Record<Atgard, string>;
}
```

`<form method="get" action="/rakna/grannemedgivande/">`. Klasser bara ur `stil.ts` (`FALT_KLASS`, `ETIKETT_KLASS`, `HJALP_KLASS`, `FEL_KLASS`, `KNAPP_KLASS`, `LANK_KLASS`, `ramKlass`). Ingen klient-JS. Alla id via `id(namn)` med `idPrefix`.

### 3.1 Full form, 375 px

Innerbredden i det linjerade papperet på 375 px är 287 px (343 minus 16 + 40 i `.linjerat`). Allt i en kolumn. Talfälten är `max-w-28` med enheten som `<span>` efter på samma rad.

```
┌ 287 px ─────────────────────────────┐
│ Vad ska du bygga?   (atgard-rubrik)  │ p, etikett-stil
│ ▸ Komplementbyggnad                  │ aktuellt: <strong aria-current="true">
│   förråd, garage (friggebod …)       │ hint, text-liten blyerts-2
│ ▸ Tillbyggnad                        │ övriga: <a href={atgardHref[x]}>
│   hint                               │ varje rad min-h-11
│ ▸ Altan utan tak   … ▸ Mur eller plank│
│ ▸ Staket          ▸ Ekonomibyggnad   │ (en per rad, sex rader)
│ fel.atgard                           │
│ <input type=hidden name=atgard>      │
│                                      │
│ ── den valda åtgärdens mått ──       │
│ Byggnadsarea                         │ label
│ [ 112 px ] m²                        │
│ hjälprad                             │
│ Nockhöjd       [ 112 px ] m          │
│ Andra komplementbyggnader            │
│ [ 112 px ] m²                        │
│                                      │
│ Avstånd till gränsen                 │
│ [ 112 px ] m                         │
│ hjälprad (mät från väggen …)         │
│                                      │
│ På andra sidan gränsen (legend)      │
│ ( ) tomt  ( ) gata  ( ) väg          │ radio, en per rad, min-h-11
│ fel.mot                              │
│                                      │
│ Detaljplan (legend)                  │
│ ( ) Ja  ( ) Nej                      │ flex gap-x-6
│ hjälprad                             │
│                                      │
│ [x] Järnvägsspår närmare än 30 m     │ label min-h-11 flex items-center gap-2
│ [x] Utpekat som särskilt värdefullt  │
│                                      │
│ [ Knapp ]                            │ KNAPP_KLASS
└──────────────────────────────────────┘
```

Fälten per åtgärd: komplement `bya` (m²), `nock` (m), `ovriga` (m²); tillbyggnad `area` (m²), `ovrigatb` (m²); plank `plankhojd` (m), `plankavstand` (m); altan `golv` (m), `altanavstand` (m); staket och ekonomi inga. Bara den valda åtgärdens fält renderas.

- **Åtgärdsvalet är länkar, inte radioknappar**, samma mönster som lägesväxlingen i u-värdesräknaren. En radioknapp som byter åtgärd utan att fälten byts förrän man skickat är en fälla utan skript; en länk laddar om sidan med rätt fält och den nya åtgärdens standardmått. Länkarna bär de gemensamma värdena (`bytAtgardQuery`). Gruppen är en `<ul>` med `aria-labelledby` till rubriken. Fokusringen syns på länkarna.
- **Fel**: under fältet med id `{idPrefix}{nyckel}-fel`, `aria-describedby` från fältet, `ramKlass(true)`. `fel.atgard` under åtgärdsgruppen, `fel.mot` under radiogruppen med `aria-describedby` på alla tre radioknapparna.
- **Värden**: tal ur `varden` (strängarna som de skrevs), val ur `indata`.
- **Talfält**: `type="text" inputmode="decimal"`, `autocomplete="off"`.

### 3.2 Kompakt form (i artikeln)

Tre saker, i den ordningen: åtgärden som **radioknappar** med `name="atgard"` (här är de rätt, formuläret skickas till sidan som då visar fälten), en per rad med namnet och utan hint; avståndet till gränsen; detaljplanen ja eller nej. Ingen `mot`, inga kryssrutor, inga mått. Knappen `knappText`. Fält som inte renderas skickas inte, och sidan fyller på med standard.

---

## 4. Sidan `src/pages/rakna/grannemedgivande.astro`

Som `u-varde.astro`: `export const prerender = false`, `Astro.locals.sidtyp = 'verktyg'`, `Cache-Control: public, s-maxage=3600, stale-while-revalidate=86400` på alla svar, `reklam={false}`, `bred={true}`, brödsmulor Hantverkstips / Räkna själv / `VERKTYGSNAMN`, `ogBild={verktygsDelningsbild(SLUG)}`, `<StrukturData slot="head" data={verktyg({ url, namn: VERKTYGSNAMN, beskrivning: BESKRIVNING })} />`. Ingen produkt, inget reklamband. `FAQPage` kommer från `<Faq>` som på de andra sidorna (checklistan 10 tillåter den med riktig Faq).

```ts
const SLUG = 'grannemedgivande';
const VERKTYGSNAMN = 'TEXT SAKNAS: verktygsnamn';
const BESKRIVNING = 'TEXT SAKNAS: beskrivning';   // 120 till 155 tecken, ordet blankett (checklistan 4)
const titel = 'TEXT SAKNAS: titel';               // högst 44 tecken, börjar Grannemedgivande, mall eller blankett (checklistan 3)
```

### 4.1 Flöde

```ts
const q = Astro.url.searchParams;
const { indata } = tolkaQuery(q);
const resultat = raknaGrannemedgivande(indata);
const fel = resultat.status === 'ogiltig' ? resultat.fel : {};
const visatIndata = resultat.status === 'ogiltig' ? { ...STANDARD, atgard: fel.atgard ? STANDARD.atgard : indata.atgard } : indata;
const visat = raknaGrannemedgivande(visatIndata);   // alltid ok
```

Vid `ogiltig` står fälten kvar med läsarens värden och felen under, och spalten visar standardsvaret för samma åtgärd med standardvarningen överst, ordagrant: "Ett av fälten gick inte att läsa, så jag visar standardvärdena tills du rättat det." Blanketten visas då **inte** (den skulle förtrycka mått läsaren inte skrivit).

`atgardHref` byggs med `bytAtgardQuery(indata, x)` för varje åtgärd, som `'/rakna/grannemedgivande/?' + q`.

### 4.2 Ordningen på sidan

1. Sidhuvudet: H1 (TEXT SAKNAS, checklistan 5) och ingress (TEXT SAKNAS) i 7/12, varumärkesbilden i 5/12 från 1024 px, under ingressen på mobil, `alt=""`, `fetchpriority="high"`, utan `loading="lazy"`.
2. `<Faktaruta variant="kortsvar">` (TEXT SAKNAS, tre till fem meningar enligt checklistan 6.0, en `<Markering>` runt 4,5 meter).
3. `<div class="linjerat mt-8 lg:grid lg:grid-cols-2 lg:gap-8">` med formuläret och resultatspalten (4.3).
4. **Bara vid `kravs` och status ok:** H2 med `id="medgivandet"` (TEXT SAKNAS), en ledtext på två till fyra meningar (TEXT SAKNAS: skriv ut sidan, bara blanketten kommer med; en blankett per grannfastighet; alla ägare skriver under; bifoga en situationsplan med åtgärden inritad; spara pappret, det skickas inte till kommunen), sedan en `<GrannemedgivandeBlankett>` per mottagare (4.5). **Avvikelse från 4.7**, avsiktlig: blanketten är verktygets andra halva och står direkt under svaret, före "Därför blev svaret så". Jag skriver in avvikelsen i SPEC-SIDMALLAR 4.7.16 efter granskningen.
5. H2 "Därför blev svaret så" (`id="darfor-blev-svaret-sa"`): `regler` som lista, varje rad med `border-l-2 border-linje pl-4`, etiketten `TEXT.slag[slag]` i etikett-stil, texten `TEXT.regel[nyckel](visatIndata)`, lagrummet i `text-liten text-blyerts-2`. Som bygglov-altan. Vid `atgard === 'altan'`: sist en rad med länk till `/rakna/bygglov-altan/?{altanraknarQuery}` (TEXT SAKNAS: länktext). Sist raden att reglerna gäller sedan `REGLERNA_GALLER_FRAN` genom lag 2025:974.
6. H2 "Gör inte det här" när listan inte är tom: raderna som stycken.
7. Checklistans H2 1 till 5 (rubrikerna TEXT SAKNAS, innehållet enligt checklistan 6). H2 1 har tabellen `ATGARDSTABELL` (2.9). H2 4 har tabellen grannehörande mot grannemedgivande (underlaget 2.3) som statisk tabell i `<Tabellyta kolumner={3}>`, texten TEXT SAKNAS. H2 5 bär beslut 3. Längd enligt checklistan 7.
8. H2 "Så räknar jag" (`id="sa-raknar-jag"`): skissen som `<Illustration namn="rakna/grannemedgivande" alt="TEXT SAKNAS" bildtext="TEXT SAKNAS" />` när både skiss och varumärkesbild finns, stegen i ord som numrerad lista (TEXT SAKNAS, följer 2.7 steg 1 till 5), H3 "Vad siffrorna vilar på" och antagandetabellen (4.6).
9. H2 "Läs vidare": `/altan/bygglov-altan/`, `/rakna/bygglov-altan/`, `/altan/bygga-altan/`. `/rakna/kontrollplan/` läggs till först när den sidan är publicerad (annars rött i `kontrollera`). Extern länk, en gång, till Boverkets "Utökad lovplikt nära gräns" eller PBL på riksdagen.se (checklistan 9). Länktexterna TEXT SAKNAS.
10. `<Faq>` med tre till fem frågor, TEXT SAKNAS, inga dubbletter av avsnitten (checklistan 6).

### 4.3 Resultatspalten

`mt-8 border-t border-linje pt-6 lg:mt-0 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8`. Uppifrån:

1. Standardvarningen, bara vid `ogiltig`.
2. `TEXT.meta[atgard](visatIndata)` i etikett-stil, versaler, `text-blyerts-2`.
3. På en baslinje, `flex flex-wrap items-baseline gap-x-2`: `TEXT.utfall[utfall].ord` i `text-siffra` med `<Markering>`, och `.rest` i `text-ingress`. Som svarsordet i bygglov-altan.
4. `TEXT.utfall[utfall].besked` i `text-brod`.
5. Vid `kravs`: en rad per mottagare, `TEXT.mottagare[m]`, i en `<ul>` med `border-t border-linje py-2`. Sedan länken till `#medgivandet` (TEXT SAKNAS: `lank-blankett`) som `inline-flex min-h-11`.
6. Pekraden till `#darfor-blev-svaret-sa` (TEXT SAKNAS: `pekrad`) i `text-liten text-blyerts-2`, länken "Så räknar jag" till `#sa-raknar-jag`.
7. Den delbara adressen: `new URL('/rakna/grannemedgivande/?' + delbarQuery(visatIndata), Astro.site ?? Astro.url)` i ett skrivskyddat fält, med delatexten under ordagrant: "Dina värden ligger i adressen. Markera den och kopiera, så får den du skickar länken till samma svar."

Inga tabeller i spalten, alla tal med `&nbsp;` mot sin enhet. **Spaltbudget: högst 700 tecken synlig text vid standardvärdena**, exklusive den delbara adressen. Utvecklaren rapporterar talet.

### 4.4 Tillstånden

| Tillstånd | Formuläret | Spalten | Blanketten |
|---|---|---|---|
| Tom adress | komplement, standardmått | `kravs`, grannar | en, förtryckt med standard |
| Ifyllt, `kravs` | läsarens värden | svaret, mottagarna | en per mottagare |
| Ifyllt, `kravs-inte` | läsarens värden | svaret | ingen, H2 4 renderas inte |
| Ifyllt, `bygglov` | läsarens värden | svaret | ingen |
| Ogiltigt | läsarens värden, fel under fälten | standardsvaret för åtgärden med varningen | ingen |
| Utanför gränserna | som ogiltigt | som ogiltigt | ingen |
| Okänd nyckel i adressen (`?namn=Anna`) | som tom adress | som tom adress | som tom adress, och `Anna` finns ingenstans i HTML:en |

### 4.5 Blanketten `src/components/kalkyl/GrannemedgivandeBlankett.astro`

```ts
interface Props {
  indata: GrannemedgivandeIndata;
  mottagare: Mottagare;
  /** Sant för blankett nummer två och senare: sidbrytning före i utskrift. */
  nyttBlad?: boolean;
}
```

Hämtar fakta med `blankettFakta(indata, mottagare)` och all text ur `TEXT.blankett`. Rotelementet är `<article data-utskrift class="…">`. Inga formulärfält: raderna att skriva på är tomma ytor med en prickad underkant, eftersom de ska fyllas i med penna efter utskrift, och ledtexten ovanför blanketten säger det. En tom rad är `<div class="min-h-10 border-b border-dotted border-blyerts-2" aria-hidden="true">` under sin etikett, och etiketten är vanlig text så att skärmläsaren läser vad som ska stå där.

Innehåll, uppifrån (etiketterna TEXT SAKNAS):

1. H3 `rubrik`, raden `lagrum` ur `blankettFakta` i `text-liten`.
2. **Byggherren**: fastighetsbeteckning, adress, namn. Tre tomma rader.
3. **Åtgärden**: förtryckt i fetstil `TEXT.atgard[atgard].namn`, `matt`, avståndet till gränsen (`talText(gransM)` m, utom för järnväg där en tom rad med `falt-avstand-spar` står i stället) och detaljplanen. Sedan beskrivning (två tomma rader), ritningarna som tre rutor med text (en 14 px stor ram `border border-blyerts` per ruta, `aria-hidden`, texten bredvid: situationsplan, fasadritning, planritning) och "daterade" med en tom rad.
4. **Grannen**, efter mottagare: grannfastighetens beteckning och adress (grannar), huvudmannen och förvaltningen eller föreningen (huvudman), infrastrukturförvaltaren (järnväg). Två tomma rader.
5. `medgivandemening` och `omfattning` i `text-brod`, `alla-agare` i `text-liten`.
6. **Underskrifter**: fyra block, vart och ett med ort och datum, namnteckning, namnförtydligande (tre tomma rader). `break-inside: avoid`.
7. `exemplar` och `kalla` (sajtens namn och verktygets adress utan query) i `text-finstilt`.

**På skärmen, 375 px:** ett urklipp, `rounded-sm border border-linje bg-papper-2 p-4`, alltså 343 px brett och 311 px inuti. Allt i en kolumn; underskriftsblocken under varandra. Mellan två blanketter `mt-8`.

```
┌ 343 px ───────────────────────────┐
│ MEDGIVANDE … (H3)                  │
│ Plan- och bygglagen … 35 § …       │ text-liten
│                                    │
│ BYGGHERREN                         │ etikett
│ Fastighetsbeteckning               │
│ ·································· │ min-h-10, prickad
│ Adress                             │
│ ·································· │
│ Namn                               │
│ ·································· │
│ ÅTGÄRDEN                           │
│ Komplementbyggnad                  │ fetstil, förtryckt
│ 12 m², nockhöjd 3,0 m              │
│ 2,0 m från gränsen, inom detaljplan│
│ Beskrivning                        │
│ ·································· │ ×2
│ ☐ Situationsplan ☐ Fasad ☐ Plan    │ flex-wrap
│ Daterade ························· │
│ GRANNFASTIGHETEN                   │
│ Fastighetsbeteckning  ············ │
│ Adress               ············· │
│ medgivandemening, omfattning       │
│ alla-agare                         │ text-liten
│ UNDERSKRIFT 1                      │
│ Ort och datum ···················· │
│ Namnteckning ····················· │
│ Namnförtydligande ················ │
│ … 2, 3, 4 …                        │
│ exemplar · kalla                   │ text-finstilt
└────────────────────────────────────┘
```

**I utskrift, A4:** en blankett per sida, marginal 15 mm. Byggherren och grannen i två kolumner (fastighetsbeteckning | adress), underskriftsblocken i ett rutnät 2 × 2. Tomma rader minst 9 mm höga. Svart på vitt, ingen ram runt urklippet, ingen bakgrund. Hela blanketten ska rymmas på **en** A4; gör den inte det vid standardfallet är layouten fel, inte texten.

```
┌ A4, 180 × 267 mm inom marginal ───────────────────────┐
│ MEDGIVANDE …                        lagrum            │
│ BYGGHERREN                                            │
│ Fastighetsbeteckning ........  Adress .............   │
│ Namn ...............................................  │
│ ÅTGÄRDEN  Komplementbyggnad, 12 m², nock 3,0 m,       │
│           2,0 m från gränsen, inom detaljplan         │
│ Beskrivning ........................................  │
│ ....................................................  │
│ ☐ Situationsplan ☐ Fasadritning ☐ Planritning         │
│ daterade ..........                                   │
│ GRANNFASTIGHETEN                                      │
│ Fastighetsbeteckning ........  Adress .............   │
│ medgivandemening. omfattning. alla-agare              │
│ ┌ Underskrift 1 ──────────┐ ┌ Underskrift 2 ────────┐ │
│ │ Ort och datum .......   │ │ Ort och datum ......  │ │
│ │ Namnteckning ........   │ │ Namnteckning .......  │ │
│ │ Namnförtydligande ...   │ │ Namnförtydligande ..  │ │
│ └─────────────────────────┘ └───────────────────────┘ │
│ ┌ Underskrift 3 ──────────┐ ┌ Underskrift 4 ────────┐ │
│ └─────────────────────────┘ └───────────────────────┘ │
│ exemplar · kalla                                      │
└───────────────────────────────────────────────────────┘
```

Tvåkolumnslayouten görs med Tailwinds `print:`-variant i komponenten (`print:grid print:grid-cols-2 print:gap-x-6`). Blanketten nummer två har `print:break-before-page`.

### 4.6 Utskriften i `src/styles/global.css`

Ett block **sist i filen**, utanför alla lager, så att det vinner. Det gäller bara sidor som har en blankett, och ändrar ingenting i `Bas.astro`:

```css
/*
  Utskrift av räknarnas blanketter. En sida med [data-utskrift] skriver bara ut
  blanketterna: allt som varken är en blankett, ligger i en eller innehåller en
  döljs, och förfäderna tappar marginal, ram och bakgrund. Se
  docs/briefer/spec-kalkyl-grannemedgivande-2026-09-28.md avsnitt 4.6.
*/
@media print {
  @page { size: A4; margin: 15mm; }
  body:has([data-utskrift]) *:not([data-utskrift], [data-utskrift] *, :has([data-utskrift])) {
    display: none !important;
  }
  body:has([data-utskrift]),
  body:has([data-utskrift]) :has([data-utskrift]) {
    margin: 0 !important; padding: 0 !important; border: 0 !important;
    background: none !important; max-width: none !important; width: auto !important;
    box-shadow: none !important;
  }
  [data-utskrift] {
    border: 0 !important; background: none !important; padding: 0 !important;
    color: var(--color-blyerts); font-size: 10.5pt; line-height: 1.35;
  }
}
```

Inga hexvärden, inga nya tokens. `:has()` och komplexa selektorer i `:not()` finns i alla webbläsare vi stöder. Sidor utan `[data-utskrift]` påverkas inte; utvecklaren skriver ut `/rakna/u-varde/` före och efter och bekräftar att den ser likadan ut.

Ingen utskriftsknapp. `window.print()` är klient-JS, och webbläsarens egen utskrift (dator: Ctrl+P, telefon: dela, skriv ut) fungerar och kan spara som PDF. Ledtexten över blanketten säger hur.

### 4.7 Antagandetabellen

`export const ANTAGANDEN: { nyckel: string; varde: string; typ: 'Källa' | 'Antagande'; kalla?: { titel: string; url: string; last: string } }[]` i modulen, som i u-värdesmodulen. Sidan renderar den i `<Tabellyta kolumner={3}>` med kolumnerna Vad (`TEXT.antagande[nyckel]`), Värde (byggt av konstanterna, aldrig skrivet för hand) och Källa eller antagande. Raderna i ordning:

`grans` (4,5 m, 9 kap. 34 §), `jarnvag` (30 m från spårets mitt, 34 §), `plank` (1,2 m, 34 § 3), `hojd-19` (1,8 m inom 3,6 m, 1,2 m längre bort, 19 §), `komplement` (30, 4,0, 45 inom plan; 50, 4,5, 65 utanför; 4 och 5 §§), `tillbyggnad` (30 kvm sammanlagt, 10 §), `skriftligt` (35 § första stycket 3 i lydelse lag 2025:974, prop. s. 166), `huvudman` (35 § andra stycket), `vag-utanfor-plan` (prop. s. 170), `altan` (34 §, prop. s. 162), `ekonomi` (35 § 1), `vardefullt` (37 och 38 §§), `frivilligt-lov` (52 §), `aterkallelse` (prop. s. 166–167 och Boverket PBL kb; värdet "källorna säger olika"), och antagandena `G1` till `G5`.

Källor: lagen.nu/2010:900 och riksdagen.se-adressen för PBL, propositionens adress, Boverkets "Utökad lovplikt nära gräns", alla som i underlaget med datum. Sidan visar alla rader (verktyget är litet nog).

---

## 5. Registret

Efter posten `bygglov-altan` i `KALKYLATORER`:

```ts
{
  slug: 'grannemedgivande',
  namn: 'TEXT SAKNAS: register-namn',   // bär "grannemedgivande"; ankartext i artiklarna
  rad: 'TEXT SAKNAS: register-rad',     // högst tolv ord, en mening med verb
  /* Byggsäsongen. "grannemedgivande" toppar i mars enligt
     docs/data/keyword-stats-2026-09-20-sorterad.tsv. */
  sasong: [2, 6],
  pelare: ['altan'],
},
```

---

## 6. Testet `scripts/test-kalkyl-grannemedgivande.mjs`

`node --experimental-strip-types --test scripts/test-kalkyl-grannemedgivande.mjs`. Facit är underlagets avsnitt 6, egen kontroll mot lagtexten 2026-09-28.

### 6.1 Fallen

| # | Indata (utöver STANDARD) | utfall | mottagare | regel som avgör, lagrum innehåller |
|---|---|---|---|---|
| 1 | – (förråd 12 kvm, nock 3,0, 2,0 m, inom plan) | kravs | grannar | `grans-tomt`, "34 § 1 och 35 § första stycket 3" |
| 2 | grans 5,0 | kravs-inte | – | `langt-fran-grans` |
| 3 | bya 35, nock 3,5 | bygglov | – | `bya` slag bygglov, "4 § 1" |
| 4 | tillbyggnad, area 20, grans 3,0 | kravs | grannar | `grans-tomt`, "34 § 1" |
| 5 | plank 1,6, plankavstand 2,0, grans 1,0 | kravs | grannar | `grans-tomt`, "34 § 3" |
| 6 | altan, golv 0,6, altanavstand 0, grans 1,0 | kravs-inte | – | `altan-inte-34`, "prop. 2024/25:169 s. 162" |
| K1 | grans 4,5 | kravs-inte | – | `langt-fran-grans` |
| K1b | grans 4,49 | kravs | grannar | – |
| K2 | plank 1,2, plankavstand 2,0, grans 1,0 | kravs-inte | – | `plank-lagt` |
| K2b | plank 1,21, plankavstand 2,0, grans 1,0 | kravs | grannar | – |
| K3 | plank 2,0, plankavstand 5,0, grans 1,0 | bygglov | – | `hojd-19`, "19 §" |
| K4 | plank 2,0, plankavstand 5,0, grans 1,0, plan nej | kravs | grannar | `utanfor-plan-19` finns, `grans-tomt` |
| K5 | plan nej, bya 45, nock 4,2, grans 3,0 | kravs | grannar | `bya` slag inom, "5 § 1" |
| K6 | ekonomi, plan nej, grans 1,0 | kravs-inte | – | `ekonomi`, "35 § 1" |
| K7 | mot gata, grans 3,0 | kravs | huvudman | `grans-gata`, "35 § andra stycket" |
| K8 | bya 20, ovriga 30, grans 3,0 | bygglov | – | `summa` slag bygglov, "4 § 5" |
| K10 | vardefullt | bygglov | – | `varde`, "37 §" |
| K10b | plank 1,6, plankavstand 2,0, vardefullt | bygglov | – | `varde`, "38 §" |
| K10c | staket, vardefullt, grans 1,0 | kravs-inte | – | `staket-inte-34` |
| J1 | grans 10, jarnvag | kravs | jarnvag | `jarnvag`, "35 § andra stycket" |
| J2 | grans 2,0, jarnvag | kravs | grannar, jarnvag | båda reglerna, i den ordningen |
| J3 | plank 1,0, plankavstand 2,0, grans 10, jarnvag | kravs-inte | – | `plank-lagt` |
| V1 | plan nej, mot vag, grans 2,0 | bygglov | – | `grans-vag`, "prop. 2024/25:169 s. 170" |
| V2 | plan nej, mot vag, grans 6,0 | kravs-inte | – | `langt-fran-grans` |
| G1 | nock 4,0 (exakt) | kravs | – | `nock` slag inom |
| G2 | nock 4,01 | bygglov | – | `nock` |
| G3 | bya 30 (exakt), ovriga 15 | kravs | – | `summa` slag inom (45) |
| G4 | tillbyggnad, area 25, ovrigatb 10 | bygglov | – | `area` |
| G5 | tillbyggnad, area 30, ovrigatb 0 | kravs | – | `area` slag inom |
| G6 | altan, golv 1,8, altanavstand 3,6, grans 1,0 | kravs-inte | – | `altan-inte-34` |
| G7 | altan, golv 1,81, altanavstand 3,6 | bygglov | – | `hojd-19` |
| G8 | altan, golv 1,3, altanavstand 3,7 | bygglov | – | `hojd-19` |
| S1 | staket, grans 0 | kravs-inte | – | `staket-inte-34` |

Per fall asserteras dessutom: `regler` är inte tom, varje regel har ett lagrum som börjar med "Plan- och bygglagen" eller "Prop.", villkoren står sist, och `gorInteDetHar` enligt 2.7 (fall 1: `['muntligt', 'tystnad', 'bygga-annat', 'lita-pa-pappret', 'mata-fran-vaggen']`; fall 3: `['medgivande-mot-lov']`; fall 6: `[]`).

### 6.2 Ogiltigt, ett test per rad

| Indata | Fel på |
|---|---|
| ekonomi, plan ja | `atgard` |
| mot gata, plan nej | `mot` |
| mot vag, plan ja | `mot` |
| grans −1, grans 101, grans NaN | `grans` |
| komplement, bya 0 / 201 / NaN | `bya` |
| komplement, nock 0,4 | `nock` |
| tillbyggnad, area 0 | `area` |
| plank, plankhojd 0 | `plankhojd` |
| altan, golv 11 | `golv` |
| komplement med plankhojd NaN | ok (andra åtgärders fält valideras inte) |
| bya 0 och grans NaN | båda nycklarna |

### 6.3 De två räknarna säger samma sak

Importera `raknaBygglovAltan` och `STANDARD as ALTAN` ur `../src/lib/kalkyl/bygglov-altan.ts`.

| Altanräknaren | `kravGrannmedgivande` | Grannemedgivandet | utfall |
|---|---|---|---|
| ALTAN, grans 1,0 | false | altan, golv 0,8, altanavstand 0, grans 1,0 | kravs-inte |
| ALTAN, tak skarmtak, yta 20, grans 2,0 | true | tillbyggnad, area 20, grans 2,0 | kravs |
| ALTAN, tak vaggar, yta 40, grans 2,0 | false | tillbyggnad, area 40, grans 2,0 | bygglov |
| ALTAN, tak skarmtak, yta 20, grans 4,5 | false | tillbyggnad, area 20, grans 4,5 | kravs-inte |
| ALTAN, hojd 1,9, grans 1,0 | false | altan, golv 1,9, altanavstand 0, grans 1,0 | bygglov |

Och: `GRANS_M` är samma värde i båda (import, inte kopia).

### 6.4 Övrigt

- Konstanterna: `KOMPLEMENT` exakt, `JARNVAG_M === 30`, `PLANK_HOJD_GRANS_M === 1.2`, importerna 4,5 / 1,8 / 1,2 / 3,6 / 30.
- `tolkaQuery`: tom adress ger STANDARD och `harIndata: false`; `grans=2,5` och `grans=2,5 m` ger 2.5; okänd `atgard` ger standard; `jarnvag=1` sant, `jarnvag=ja` falskt; `bya=tolv` ger NaN.
- **Integriteten:** `tolkaQuery(new URLSearchParams('namn=Anna&fb=Ekeby+1:2&adress=Storgatan+1'))` ger STANDARD och `harIndata: false`; `delbarQuery` på vad som helst ger bara nycklar ur mängden i 2.6; `delbarQuery(STANDARD).toString()` är exakt `atgard=komplement&plan=ja&grans=2&mot=tomt&bya=12&nock=3&ovriga=0`.
- Rundtur: `tolkaQuery(delbarQuery(x)).indata` ger samma svar som x för fall 1, 4, 5, 6, K7 och J2.
- `bytAtgardQuery(STANDARD, 'ekonomi')` har `plan=nej` och inga komplementnycklar; `bytAtgardQuery({ ...STANDARD, mot: 'gata' }, 'ekonomi')` har `mot=tomt`.
- `blankettFakta`: fall 1 med `grannar` har `gransM` 2 och lagrummet "9 kap. 34 § 1 och 35 § första stycket 3"; J1 med `jarnvag` har `gransM` null och "35 § andra stycket"; fall 5 har "34 § 3".
- `altanraknarQuery` för fall 6 är `plan=ja&hojd=0,6&avstand=0&grans=1&tak=nej`, och `null` för komplement.
- `ATGARDSTABELL`: varje rad ger utfallet i 2.9.
- `TEXT`: varje `Atgard`, `Utfall`, `Mottagare`, `Slag`, `RegelNyckel`, `GorInte`, varje `ANTAGANDEN`-nyckel och varje blankettnyckel har ett icke-tomt värde (funktioner anropas med STANDARD).
- **Beslut 3:** inget värde i `TEXT` (funktioner anropade med STANDARD och med fall 4) matchar `/bindande|oåterkallel|kan inte (ångra|återkalla|dra tillbaka)/i`.
- `ANTAGANDEN` har raderna i 4.7, och varje rad med typ Källa har en `https`-adress.

---

## 7. Budget och kontroller

- Testet grönt, 0 todo. `node --experimental-strip-types --test scripts/test-kalkyl-bygglov-altan.mjs` grönt efter rättningen.
- `npx astro check --minimumSeverity error`: 0 fel. `npm run kontrollera`: 0 fel, varningarna rapporteras.
- Sidan i `npm run dev`, mätt med `curl` (koordinatorn bygger, jag mäter om på bygget): 0 `<script>` utöver JSON-LD, ingen `.js`-referens, HTML under 66 kB vid standard **och** vid J2 (två blanketter). Utvecklaren rapporterar båda storlekarna.
- `/rakna/bygglov-altan/` under 66 kB och utan script efter rättningen.
- Utskriften: utvecklaren skriver ut standardfallet och J2 till PDF med Chrome (`--headless --print-to-pdf`) och rapporterar sidantalet: 1 respektive 2, inget sidhuvud, ingen meny, ingen sidfot från sajten, inget formulär. Jag öppnar PDF:erna vid granskningen.
- `/rakna/u-varde/` utskriven före och efter ändringen i global.css ger samma PDF (sidantal och utseende).
- Varumärkesbilden under 30 kB, skissen under 40 kB utan `<text>`.
- 375 px: ingen sidledsscroll utom inuti `<Tabellyta>`, alla fält 48 px, åtgärdslänkarna minst 44 px höga, fokusring synlig på länkar, fält, radioknappar och kryssrutor, varje fält med etikett.

---

## 8. Inbäddningen

- `src/components/ui/Kalkylator.astro`: `import GrannemedgivandeForm from '../kalkyl/GrannemedgivandeForm.astro';`, `'grannemedgivande'` sist i `MED_FORMULAR`, och `{namn === 'grannemedgivande' && <GrannemedgivandeForm kompakt={true} idPrefix={prefix} knappText="TEXT SAKNAS: knapp-kompakt" />}` efter u-värdets rad.
- **Värdartikel:** `src/content/kunskap/altan/bygglov-altan.mdx` (adressen `/altan/bygglov-altan/`; filen ligger under `kunskap/`, inte `guider/`). `<Kalkylator namn="grannemedgivande" />` på egen rad med blankrad före och efter, **direkt efter det första stycket under den H2 som i dag heter "Nära tomtgränsen räcker grannens ja"** (i dag rad 79), alltså det stycke hantverkaren skriver om enligt 11.3. Checklistan 9 anger platsen. Sidan har redan `<Kalkylator namn="bygglov-altan" />`; två olika kalkylatorer i en artikel finns redan på `bygga-innervagg` och `gipsskruv`, och `idPrefix` håller id:na isär.
- Utvecklaren lägger bara till den raden i artikeln. Allt annat i artikeln skriver hantverkaren.
- `/altan/bygga-altan/`: textlänk till `/rakna/grannemedgivande/` i bygglovsstycket (checklistan 9), skrivs av hantverkaren i samma omskrivning som 11.4.

---

## 9. Bilderna

### 9.1 Skissen, uppdrag B

`src/assets/illustrationer-kallor/rakna/grannemedgivande.svg`, 600 × 360, blyerts på linjerat papper enligt DESIGN.md avsnitt 7, Caveat 500 i 24 px, konverteras av `npm run illustrationer`. Artikelns huvudbild och altanräknarens skiss visar huset från sidan; den här visar **tomten uppifrån**, som en situationsplan, så att den inte blir en tredje sidovy.

- **Motiv:** tomten sedd ovanifrån. Till vänster huset som en rektangel med taknocken som en linje, till höger den streckade tomtgränsen lodrätt över bilden och bortom den grannens hus som en rektangel i blyerts-2. Parallellt med gränsen, 4,5 m in på den egna tomten, en tunn streckad linje i blyerts-2; ytan mellan den och gränsen lätt skrafferad, så att zonen syns. Inne i zonen ett förråd som en liten rektangel med taksprång antytt.
- **Mått som byglar** i blyerts-2: från förrådets vägg till gränsen "2,0 m", från den streckade linjen till gränsen "4,5 m". Förrådet märkt "12 m²".
- **Det som pekar:** en pil i `penna` från förrådet ut mot gränsen, mot grannens hus. Inget annat i penna.
- **Nyckeltalet** med gul markering: "4,5 m". Ingen annan siffra markerad.
- **Etiketterna ordagrant: TEXT SAKNAS, skrivs av hantverkaren** (för gränsen, grannen och zonen). Talen är fasta: 4,5 m, 2,0 m, 12 m².
- Alt under 125 tecken med ordet grannemedgivande eller tomtgränsen, bildtext med talet (checklistan 8): TEXT SAKNAS.

### 9.2 Varumärkesbilden, uppdrag A

`src/assets/illustrationer/rakna/varumarke/grannemedgivande.svg`, 600 × 360, ingen källfil. Logotypens stil som de femton befintliga: konturer i `blyerts` (hexvärdet ur global.css) 2 px med runda ändar, `tumstock` som enda fyllda färg, transparent bakgrund, ingen text, inga tal, pennstrecket som signatur så som de befintliga gör det. Läs `varumarke/bygglov-altan.svg` och `varumarke/dranering.svg` först; **huset är sajtens hus**, samma form och takfall, i lägre skala.

- **Motiv:** sajtens hus till vänster, ett litet förråd med pulpettak strax till höger om huset, en streckad lodrät tomtgräns strax till höger om förrådet, och bortom gränsen ett andra, mindre hus i samma hand (grannens). På marken mellan förrådets vägg och gränsen ligger tumstocken utfälld, vågrätt, från vägg till gränslinje. Den är det enda gula och drar ögat till avståndet, som i altanbilden.
- Förstås på en sekund: två hus, ett förråd tätt intill gränsen, och något som mäter avståndet. Tumstocken är den näst mest framträdande formen och syns vid 343 px.
- Marklinjen en rak linje på samma nivå genom hela bilden. Grannens hus får inte vara större än vårt.
- Motivets bbox-kvot 1,72 ± 0,05 och fyller 90 till 94 procent av bredden.
- Under 30 kB.

Jag rendrar båda på 343 px och godkänner mot DESIGN.md avsnitt 7 innan de räknas som klara.

---

## 10. Godkännandekriterier (min granskning)

1. Varje konstant i 2.2 namngiven med Källa eller ANTAGANDE; importerna från bygglov-altan.ts, inga kopior; ingen räkning i en `.astro`-fil.
2. Testerna i avsnitt 6 och det rättade altantestet gröna; astro check 0 fel; kontrollera 0 fel.
3. Fältnamn, query-nycklar och id exakt som i 2.6 och 3; en delad adress ger samma svar och samma förtryckta blankett; åtgärdslänkarna behåller de gemensamma värdena.
4. Tillstånden i 4.4, inklusive att `?namn=Anna` inte syns någonstans i HTML:en (jag söker i svaret med curl).
5. 375 px: formulär, spalt och blankett utan sidledsscroll, spalten högst 700 tecken, fokus synligt.
6. Utskriften: en A4 per mottagare, bara blanketten, läsbar och ifyllbar med penna (jag skriver ut en på papper).
7. Budgeten i avsnitt 7.
8. Bilderna mot 9.1 och 9.2.
9. `grep -r "TEXT SAKNAS" src/` ger bara träffar i filerna från denna spec, och listan lämnas till hantverkaren. **Sidan, registerposten, inbäddningen och rättningen av altanräknaren committas inte förrän listan är tom och hantverkaren skrivit om artikeln enligt 11.3**, eftersom sajten annars säger två saker om samma altan.

---

## 11. Rättningen av `/rakna/bygglov-altan/` och artiklarna

Görs i samma omgång som räknaren och publiceras samtidigt. Tal rörs inte; det som ändras är vilket svar en altan nära gränsen får.

### 11.1 `src/lib/kalkyl/bygglov-altan.ts` (utvecklaren)

1. **`gransRegel(i, harJa: boolean): Regel | null`**, ersätter dagens:
   - `avstandGransM >= GRANS_M` → `null`.
   - `tak === 'nej'` → `{ utfall: 'nej', text: TEXT SAKNAS (altan-grans-utan-tak), lagrum: 'Plan- och bygglagen 9 kap. 34 § och prop. 2024/25:169 s. 162' }`. Texten ska säga avståndet, att lagen inte kräver grannens medgivande för en altan utan tak, och att det krävs om altanen får tak eller inglasning eller ett tätt plank över 1,2 m.
   - `tak !== 'nej'` och `harJa` → `null` (taket, höjden eller huset kräver redan lov, och medgivandet hjälper inte).
   - annars → `{ utfall: 'granne', text: TEXT SAKNAS (altan-grans-med-tak), lagrum: 'Plan- och bygglagen 9 kap. 34 § 1 och 35 § första stycket 3' }`. Texten ska säga att taket gör altanen till en tillbyggnad, att lagen sedan 1 december 2025 kräver grannens skriftliga medgivande närmare gränsen än 4,5 m, och att det annars blir bygglov.
   - `bedomFall` anropar den sist med `harJa = regler.some(r => r.utfall === 'ja')`.
2. **`kravGrannmedgivande`** = `bedomningar.some(b => b.regler.some(r => r.utfall === 'granne'))`, inte längre bara avståndet.
3. **`GOR_INTE_MUNTLIGT_JA`** läggs till när `kravGrannmedgivande`, inte vid varje avstånd under 4,5 m. Texten skrivs om (TEXT SAKNAS): den säger i dag "Boverket vill ha medgivandet skriftligt"; det är lag sedan 1 december 2025.
4. **`takRegel`**: meningen "Du håller dig under, så tillbyggnaden är lovfri på ett en- eller tvåbostadshus." skrivs om (TEXT SAKNAS) utan begränsningen till en- eller tvåbostadshus; 9 kap. 10 § gäller varje byggnad som inte är en komplementbyggnad. Talen och utfallet ändras inte.
5. **Kommentarerna** (utvecklaren skriver dem, de är inte publika): typen `Utfall` ("granne" är regeln när taket gör altanen till en tillbyggnad nära gränsen), `kravGrannmedgivande`, `GRANS_M` (lagrummet 9 kap. 34 och 35 §§; för altan utan tak gäller det inte, prop. 2024/25:169 s. 162; stryk "rådet är därför Boverkets"), `LOVFRI_TILLBYGGNAD_KVM` och `takRegel` (tillbyggnad av en byggnad som inte är en komplementbyggnad, 9 kap. 10 §), `gransRegel`.

### 11.2 `scripts/test-kalkyl-bygglov-altan.mjs` och `src/pages/rakna/bygglov-altan.astro` (utvecklaren, text av hantverkaren)

Testet:
- Fallet "Låg altan 2 m från tomtgränsen": `grannmedgivande: false`, `lagrum: '9 kap. 34 §'`, `antalRegler: 2` (höjdregeln och gränsregeln som säger nej). `namn` oförändrat.
- Nytt fall "Skärmtak 20 kvm 2 m från tomtgränsen": `altan({ tak: 'skarmtak', avstandGransM: 2 })`, svar `nej`, 3 regler, lagrum `'35 § första stycket 3'`, `grannmedgivande: true`.
- Nytt fall "Inglasning 40 kvm 2 m från tomtgränsen": `altan({ tak: 'vaggar', ytaKvm: 40, avstandGransM: 2 })`, svar `ja`, 2 regler, lagrum `'9 kap. 10 §'`, `grannmedgivande: false`.
- Gränstestet på rad 214–216 körs med `tak: 'skarmtak'` (4,5 ger false, 4,49 ger true), och en rad till: utan tak ger 4,49 false.
- Kommentaren på rad 42 blir "Plan- och bygglagen 9 kap. 34 och 35 §§".

Sidan (utvecklaren sätter in `TEXT SAKNAS: …` på exakt dessa ställen, hantverkaren skriver):
- Kortsvaret, tredje stycket (i dag rad 328–331): "Ligger altanen närmare tomtgränsen än 4,5 m behöver du grannens skriftliga ja".
- Antagandetabellen, raden "Avstånd till tomtgränsen" (rad 157–163): `varde` och `stod` skrivs om; `stod` ska ange 9 kap. 34 och 35 §§ och prop. 2024/25:169 s. 162, `url` blir PBL på riksdagen.se.
- Antagandetabellen, raden "Huset jag räknar på" (rad 212–217): `stod` säger i dag att gränsen på 30 kvm inte gäller flerbostadshus. Det är fel enligt 9 kap. 10 §. Raden skrivs om eller tas bort; behålls den ska den säga vad antagandet faktiskt gäller (prickmark, 10 kap. 2 a §).
- Faq "Hur nära tomtgränsen får altanen ligga?" (rad 244–247): hela svaret. Det säger dessutom att man söker lov när gränsen går mot en gata; sedan 1 december 2025 kan huvudmannen medge (9 kap. 35 § andra stycket).
- H2 om de tre måtten, stycket på rad 471–477 från "Det tredje måttet är avståndet till tomtgränsen" till styckets slut, och meningen på rad 479–480 "en tillbyggnad av ett en- eller tvåbostadshus är fri upp till 30 kvadratmeter".
- Steg 7 i "Så bedömer jag" (rad 532–535).
- **Ny länk**, byggd av utvecklaren: i "Därför blev svaret så", direkt under en regel med utfall `granne`, en rad med länk till `/rakna/grannemedgivande/?` + `delbarQuery({ ...STANDARD_GM, atgard: 'tillbyggnad', areaKvm: ytaKvm, gransM: avstandGransM, plan })` (importerad ur grannemedgivande.ts; `plan` utelämnas, alltså standard, vid "vet inte"). Länktexten TEXT SAKNAS. Då landar läsaren på blanketten med sina mått förtryckta.

### 11.3 `src/content/kunskap/altan/bygglov-altan.mdx` (hantverkaren)

Meningar som säger emot lagen eller den rättade räknaren och måste skrivas om:

| Rad i dag | Vad | Varför |
|---|---|---|
| 13 (kortSvar) | "Står altanen närmare tomtgränsen än 4,5 meter behöver du grannens ja på papper." | Gäller inte altan utan tak |
| 66 (tabellen) | raden "Närmare gränsen än 4,5 m / Grannens ja räcker" | Delas i två: utan tak inget medgivande; med tak eller inglasning grannens skriftliga ja, annars lov |
| 77 (H2) | "Nära tomtgränsen räcker grannens ja" | Påståendet stämmer bara för altan med tak. Rubriken skrivs om, och Kalkylatorn står efter första stycket under den |
| 79 | hela stycket ("vill Boverket att du hämtar …") | Ska säga lagens svar: inget krav för altan utan tak, krav med tak, inglasning eller tätt plank över 1,2 m. Råden om situationsplan och om kommunen eller vägföreningen som granne (huvudmannen) kan stå kvar för det fallet |
| 81 | hela stycket ("Lagtexten haltar … Så hämta grannens underskrift oavsett.") | Säger motsatsen till beslutet. Påståendet att en hög altan med rum under kan räknas som tillbyggnad har ingen källa i underlaget och stryks om hantverkaren inte har en |
| 85 | "plus rådet om medgivande vid gränsen" | Stryks eller skrivs om |
| 91 | "får du bygga till ett en- eller tvåbostadshus med högst 30 kvadratmeter" | 9 kap. 10 § gäller varje byggnad som inte är en komplementbyggnad. Här hör också en mening hemma om att taket nära gränsen kräver grannens skriftliga medgivande |
| 133 (Faq) | "Hur nära tomtgränsen får altanen stå?", hela svaret | Som rad 79 |
| 134 (Faq) | "får du bygga till ett en- eller tvåbostadshus" | Som rad 91 |
| `kallor` | lägg till prop. 2024/25:169 (s. 162) och Boverket "Utökad lovplikt nära gräns" | Källan för det nya svaret |
| `uppdaterad` | dagens datum | – |

Boverkets konsumentsida får stå kvar i `kallor` för det den används till (måtten, plank på altan, utanför detaljplan).

### 11.4 Andra sidor (hantverkaren)

- `src/content/guider/altan/bygga-altan.mdx` rad 78, sista meningen: "Och står altanen närmare tomtgränsen än 4,5 meter vill Boverket … att du har grannens ja på papper." Samma fel. Här läggs textlänken till `/rakna/grannemedgivande/` (avsnitt 8).
- `src/content/guider/golv/bygga-trappa.mdx` rad 194, "hamnar trappan närmare tomtgränsen än 4,5 meter kan utökad lovplikt gälla": ingen rättning krävs av den här specen, men en trappa står inte i 9 kap. 34 § om den inte är en tillbyggnad. Hantverkaren bedömer.
- Bilderna `altan/bygglov-altan.svg` och `rakna/bygglov-altan.svg` visar måttet 4,5 m till gränsen. Det står kvar; måttet gäller fortfarande altan med tak. Ingen ny bild.

### 11.5 Efter granskningen (jag)

`docs/SPEC-SIDMALLAR.md`: ny 4.7.16 för grannemedgivandet med avvikelsen i 4.2 punkt 4 och utskriften, och 4.7.5 rättas (gränsregeln och 9 kap. 10 §). `docs/DESIGN.md` får ett stycke om utskrift av blanketter.

---

## 12. Granskning efter läsare, korrektur och SEO, 2026-09-28

Underlag: `retur-grannemedgivande-altan-2026-09-28.md` (läsaren, betyg 4, 3, 3, 4), `korrektur-grannemedgivande-altan-2026-09-28.md` (28 fel) och `retur-grannemedgivande-seo-2026-09-28.md`. Det som står här gäller före avsnitt 1 till 11 där de säger olika. Utvecklaren bygger 12.1 till 12.10, sedan skriver hantverkaren texterna i 12.11. Inga tal ändras. Arbetaren kör inte `npm run build`.

### 12.1 Altanräknarens svar när grannen måste skriva under

Läsaren fick "Nej, du slipper bygglov" för en altan med skärmtak 2 m från gränsen. Villkoret stod bara långt ner på sidan. Ett nej som bara gäller om grannen skriver under är inget nej.

**`src/lib/kalkyl/bygglov-altan.ts`:**
- `Svar` blir `'nej' | 'granne' | 'kanske' | 'ja'`, och `Bedomning.svar` får samma typ.
- `sammanvag(regler)`: finns något `ja` blir svaret `ja`, annars ger något `kanske` svaret `kanske`, annars ger något `granne` svaret `granne`, annars `nej`. `VIKT` ersätts av den ordningen.
- `raknaBygglovAltan`: `olikaFall` räknas som i dag. Två fall som båda ger `granne` blir `granne`. Två olika svar blir `kanske` som förut.
- `SVAR_RUBRIK.granne = 'TEXT SAKNAS: svar-granne'`. Sidan delar rubriken på `', '` i ett stort ord och en rest, så rubriken ska ha den formen. **Krav på texten:** det stora ordet får inte ensamt kunna läsas som att bygget är fritt. "Nej" räcker alltså inte som stort ord. Villkoret, grannens underskrift, ska stå i ordet eller direkt efter det på samma rad.
- Rubriken över ett av två fall på sidan (rad 440) får grenen `b.svar === 'granne'` med `TEXT SAKNAS: fall-granne`.

**`src/pages/rakna/bygglov-altan.astro`, resultatspalten:**
- Vid `kravGrannmedgivande` står en rad direkt under de två metaraderna, med länken `grannemedgivandeHref`: `TEXT SAKNAS: spalt-granne` (en mening med verb) och länktexten `TEXT SAKNAS: spalt-granne-lank`, som `inline-flex min-h-11`. Länken under regeln i "Därför blev svaret så" står kvar.
- Metaraden "Det är … m till tomtgränsen, och altanen är {takText}." byggs om till "…, och altanen {takFras}." `takFras` har fyra hela verbfraser: `TEXT SAKNAS: tak-vaggar`, `tak-skarmtak`, `tak-patak`, `tak-nej`. Korrekturen och läsaren underkände "altanen är med skärmtak".
- Kortsvarets första rad följer svaret som förut. Med `granne` byter den därför innehåll av sig själv.

**Test** (`scripts/test-kalkyl-bygglov-altan.mjs`):
- Fallet "Skärmtak 20 kvm 2 m från tomtgränsen" får `svar: 'granne'`, och rubriken ska vara `SVAR_RUBRIK.granne`.
- Nytt test: `altan({ detaljplan: 'vet-inte', tak: 'skarmtak', avstandGransM: 2 })` ger `svar === 'granne'` och `olikaFall === false`.
- Nytt test: `SVAR_RUBRIK.granne` innehåller `', '`.
- **I `scripts/test-kalkyl-grannemedgivande.mjs` 6.3:** varje rad med `kravGrannmedgivande: true` ska också ha `svar === 'granne'`.

### 12.2 Hur ett plank på altanen mäts

**Beslut: från marken på altanens yttersida upp till plankets överkant.**
- **Lagrum:** 9 kap. 34 § 3 säger ordagrant "en mur eller ett plank som är högre än 1,2 meter **över marken**". Jag läste det på lagen.nu i dag.
- **Källa:** Boverket skriver samma sak om plank på mur eller altan: höjden räknas för hela konstruktionen, från marken vid yttersidan till konstruktionens ovansida. Det står i PBL kunskapsbanken, "Altan" (ändrad 2025-12-12), och på konsumentsidan "Mur, plank, altan och annat" (2026-06-04). Underlaget avsnitt 7 och `granskning-omgang-3-2026-09-16.md` rad 86 har citatet.
- **Följd:** en altan med golvet 0,6 m upp och ett tätt plank på 1,0 m är 1,6 m. Står den närmare gränsen än 4,5 m krävs medgivandet.
- Vad som räknas som tätt står redan i artikeln (Länsstyrelsens handläggarstöd). Det behöver inte upprepas.

Alla fyra sidorna ska säga detta, med orden "över marken" eller "från marken". Grannemedgivandet säger det redan rätt (`villkor-tatt-plank`, hjälpraden för `plankhojd`). De tre andra ställena skrivs om av hantverkaren (12.11 B), och inget av dem får säga "ett plank som är högre än 1,2 m" utan att säga varifrån det mäts. Räknarna får inget nytt fält för plank. Den som har ett plank på altanen väljer "Mur eller plank" i grannemedgivandet och skriver hela höjden. Hjälpraden där säger redan det.

### 12.3 Väg utanför detaljplan i altanräknaren

**Beslut: inget nytt fält.** Altanräknaren svarar på bygglov för altanen. Gränsfrågan i detalj hör till grannemedgivandet, som frågar vad som ligger på andra sidan och dit länken i 12.1 leder med måtten ifyllda. Ett nionde fält för ett ovanligt fall gör formuläret sämre för alla andra.

Regeltexten får däremot inte längre lova att grannen kan skriva under när det kanske inte finns någon som kan. `gransRegel(i, harJa, planlagt)` får `planlagt` som argument (bedomFall skickar sitt eget), och texten för utfallet `granne` delas i två:
- `TEXT SAKNAS: altan-grans-med-tak-inom`, inom detaljplan. Texten säger att grannen skriver under, och mot en gata eller park huvudmannen.
- `TEXT SAKNAS: altan-grans-med-tak-utanfor`, utanför detaljplan. Texten säger att grannen skriver under, men att det blir bygglov mot en allmän väg, eftersom väghållaren inte kan medge (prop. 2024/25:169 s. 170).

Lagrummet är oförändrat för båda. Vid "vet inte" om detaljplanen visas båda texterna, var och en under sitt fall, som i dag.

Samma texter ska rätta faktafelet läsaren hittade: kravet på medgivande nära gränsen fanns före 1 december 2025. Nytt sedan dess är att medgivandet ska vara skriftligt och att huvudmannen och järnvägens förvaltare kan medge (prop. s. 166 och 432, underlaget 1.1). Ingen text får säga att själva medgivandet är nytt.

### 12.4 Blanketten

`src/components/kalkyl/GrannemedgivandeBlankett.astro` och `TEXT.blankett`:
- `alla-agare` renderas **bara när `mottagare === 'grannar'`**.
- `inledning` blir en funktion av mottagaren, `(m: Mottagare) => string`, med `TEXT SAKNAS: blankett-inledning-{m}`. **Beslut om vem som fyller i vad:** den som bygger fyller i del 1 (byggherren) och del 2 (åtgärden). Den som medger fyller i del 3 (sin fastighet, eller för huvudman och järnväg vem den är) och skriver under. Texten ska räkna rätt antal delar.
- `del-granne.huvudman` och `del-granne.jarnvag` skrivs om så att de säger samma sak som spaltens rader i `TEXT.mottagare`. Läsaren förstår "Trafikverket, eller den som annars förvaltar spåret", men inte "infrastrukturförvaltare". Lagens ord får stå inom parentes om hantverkaren vill.
- **Järnvägsraden**: när `f.gransM === null` står i dag bara "inom detaljplan" ensamt på raden. Den raden ersätts av `TEXT SAKNAS: blankett-plan-ensam.{ja|nej}`, en hel mening. Raden för avståndet till spårets mitt står kvar under.

På sidan `src/pages/rakna/grannemedgivande.astro`:
- `S.ledtext` blir en funktion av mottagarlistan: `TEXT SAKNAS: ledtext-grannar` när `grannar` finns bland mottagarna, annars `ledtext-annan`. Raden "en blankett per grannfastighet och låt alla ägare skriva under" står bara i den första.

Test: `TEXT.blankett.inledning` anropad med varje mottagare ger en icke-tom sträng.

### 12.5 Hjälpraden om takfoten

`TEXT.falt.grans.hjalp` blir `{ byggnad: string; annat: string }`. `byggnad` (dagens text om takfoten) visas när `atgard` är `komplement` eller `tillbyggnad`. `annat` (`TEXT SAKNAS: grans-hjalp-annat`) visas för `altan`, `plank`, `staket` och `ekonomi` och säger bara att man mäter till den närmaste gränsen. Villkoret skrivs som en funktion i modulen, `harTakfot(atgard)`, som formuläret använder. Det gör att `mata-fran-vaggen` i 2.7 följer samma funktion. Testa `harTakfot` för alla sex åtgärderna.

### 12.6 Inbäddningen i altanartikeln

**`Kalkylator.astro` får en valfri prop:** `forval?: string`, en querysträng. Den gäller bara `grannemedgivande`. Där renderas `<GrannemedgivandeForm kompakt indata={forval ? tolkaQuery(new URLSearchParams(forval)).indata : undefined} … />`. Får en annan slug `forval` kastar komponenten ett byggfel som säger att förval bara finns för grannemedgivandet, så att ingen tror att det fungerar tyst. Regexen i `scripts/kontrollera-innehall.ts` kräver att `namn` står först, och därför skrivs `forval` efter `namn`.

- **Artikeln** `src/content/kunskap/altan/bygglov-altan.mdx`: raden blir `<Kalkylator namn="grannemedgivande" forval="atgard=altan" />`. Den flyttas från direkt efter första stycket till **sist i samma H2**, efter stycket om Boverkets sida och före `## På landet gäller inga mått alls`. Läsaren tyckte att två räknare med ett stycke emellan var för mycket. Nu står hela avsnittet mellan dem, och inbäddningen står fortfarande i den H2 som checklistan 9 anger. SEO får veta flytten via koordinatorn.
- **Den kompakta formen visar åtgärdernas förklaring.** Under varje radioknapp står `TEXT.atgard[x].hint` i `HJALP_KLASS`, med `aria-describedby` från radioknappen. Den som har en altan med tak ser då att det heter tillbyggnad. Detta ersätter "utan hint" i 3.2.
- **Knapptexten** "Se om grannen ska skriva under" står kvar. Det som står två gånger är **fotraden** i `Kalkylator.astro`: "Knappen tar dig till kalkylatorn med dina värden ifyllda. Där står svaret med källan bakom varje tal." Den är fel för generatorerna, som inte ger något tal, och den säger "kalkylatorn" där resten av sajten säger "räknaren". Fotraden blir `TEXT SAKNAS: kalkylator-fotrad`, en konstant i komponenten. Texten ska vara sann för alla arton inbäddade verktyg och får inte nämna tal. Den står då fortfarande två gånger i artikeln, men med avsnittet emellan och utan fel.

### 12.7 "Så bedömer jag" i altanräknaren

`src/pages/rakna/bygglov-altan.astro` rad 540 till 573. Ordningen i listan ska vara ordningen i `bedomFall`, och det är den redan. Två steg säger fel:
- Steg 4 (rad 552): "Tak med väggar eller inglasning" skrivs om som `TEXT SAKNAS: steg-tak`. Steget ska säga att skärmtak, väggar och inglasning alla gör altanen till en tillbyggnad (9 kap. 10 §, öppenarea), vilket `takRegel` redan gör.
- Steg 7 (rad 564): "prövar jag sist" skrivs om som `TEXT SAKNAS: steg-grans`. Avståndet prövas sist av **reglerna**, och steget ska nämna svaret `granne`.
- Steg 8 (rad 570) behåller "sist", eftersom avgiften räknas efter alla regler och oavsett svaret.

Bildtexten på rad 536 och ingressen säger olika antal mått (se 12.11 E). **Beslut:** två mått avgör bygglovet, höjden och avståndet till en byggnad. Avståndet till tomtgränsen är ett tredje mått som bara spelar in med tak, glas eller ett tätt plank. Alla altansidor räknar så.

### 12.8 Ogiltigt värde i en räknare som ger ett besked

Läsarens invändning gäller. En räknare som ger ett tal visar standardvärdets tal under varningen, och det talet uppfattas som ett exempel. En räknare som ger ett besked visar under varningen ett fullständigt "Ja, medgivande krävs" med regler och råd, och det uppfattas som läsarens eget svar.

**Beslut:**
- **Talräknarna behåller mönstret.** Standardsvaret visas under varningen, som i dag, och `STANDARDVARNING` är oförändrad.
- **Beskedsräknarna ändras.** De är `grannemedgivande` och `bygglov-altan` nu, och `kontrollplan` när den byggs. Vid `ogiltig` visar spalten bara en varning, `BESKEDSVARNING = 'TEXT SAKNAS: beskedsvarning'`, som är likadan på alla beskedsräknare och säger att svaret kommer när fältet är rättat. Under varningen står bara den delbara adressen. Inget stort ord, inget besked, inga mottagare, ingen avgift. Sektionerna "Därför blev svaret så" och "Gör inte det här" renderas inte heller, och det gör inte blanketten, som redan är dold. I altanräknaren renderas inte heller kortsvarets första rad (rad 341).
- Formuläret visar läsarens värden och felet under fältet, som i dag.
- Jag skriver in skillnaden mellan tal- och beskedsräknare i SPEC-SIDMALLAR 4.7 efter granskningen.

`visat` behövs fortfarande för den delbara adressen och räknas som i dag.

### 12.9 SEO:s tre punkter

1. `BESKRIVNING` i grannemedgivande.astro ska innehålla ordet **grannemedgivande**, med 120 till 155 tecken. Det skriver hantverkaren.
2. Rad 442 i grannemedgivande.astro: `rel="nofollow"` tas bort från Boverkslänken under "Läs vidare". Källistan på rad 422 behåller sin `rel`.
3. `register.ts` innehåller posterna `fasadyta` och `kontrollplan` med TEXT SAKNAS, och `Kalkylator.astro` har kontrollplanens `knappText="TEXT SAKNAS: knapp-kompakt"`. Detta hör inte till den här specen, men **committen för grannemedgivandet får inte ta med dem**. Koordinatorn har två vägar: committa grannemedgivandets rader med `git add -p` och lämna de två posterna ocommittade, eller vänta tills fasadyta och kontrollplan har text. `npm run build` på arbetskatalogen visar sidfoten med de två posterna. Koordinatorn bygger därför på en ren utcheckning av committen innan push, eller kontrollerar sidfoten med curl.

### 12.10 Datumet och ett överflödigt stycke

- Grannemedgivandet: den fristående raden "Paragraferna gäller sedan …" under "Därför blev svaret så" (`TEXT`, rad 663, och där sidan renderar den) tas bort. Datumet står i regeln `skriftligt` och i H2:n om lagändringen, och det räcker. Altanräknaren behåller sin rad, som står där sedan 2026-09-17.
- Grannemedgivandet `gorInte.muntligt` visas bara när `grannar` finns bland mottagarna. För huvudman eller järnväg ensamma gäller `muntligt-myndighet` (`TEXT SAKNAS`) i stället. Lägg till nyckeln i `GorInte`, och uppdatera testet i 6.1: J1 och K7 har `muntligt-myndighet` i stället för `muntligt`.

### 12.11 Det hantverkaren skriver

**A. Korrekturen.** Alla 28 rättelser i `korrektur-grannemedgivande-altan-2026-09-28.md`, plus det objektlösa "medger" i tabellcellerna (rad 582, 584, 623, 624). Utom rad 64 i korrekturen, som besvaras av 12.7.

**B. Plankets höjd (12.2), mätt från marken, på tre ställen:**
- `bygglov-altan.ts` `gransRegel`, texten för utan tak (rad 372).
- `bygglov-altan.astro` Faq "Hur nära tomtgränsen …" (rad 264) och H2-stycket på rad 505.
- `bygglov-altan.mdx` rad 84, sista meningen.

Grannemedgivandets `altan-inte-34` säger "ett tätt plank högre än 1,2 m" och ska också säga "över marken".

**C. Nya nycklar från 12.1 till 12.10:**
- `svar-granne` (kravet i 12.1) och `fall-granne`
- `spalt-granne` och `spalt-granne-lank`
- `tak-vaggar`, `tak-skarmtak`, `tak-patak`, `tak-nej`
- `altan-grans-med-tak-inom` och `altan-grans-med-tak-utanfor`, som ersätter dagens granne-text och säger vad som faktiskt är nytt
- `blankett-inledning-grannar`, `-huvudman`, `-jarnvag`
- `del-granne.huvudman` och `del-granne.jarnvag`
- `blankett-plan-ensam.ja` och `.nej`
- `ledtext-grannar` och `ledtext-annan`
- `grans-hjalp-annat`
- `kalkylator-fotrad` (sann för alla verktyg, inga tal, ordet räknaren)
- `steg-tak` och `steg-grans`
- `beskedsvarning`
- `muntligt-myndighet`
- `BESKRIVNING` med ordet grannemedgivande

**D. Meningar läsaren stoppade på, grannemedgivandet:**
- Ingressen: "inte räcker", och "ett plank" utan 1,2 m.
- `utfall['kravs-inte'].besked`: ska passa alla åtgärder, också staketet, och inte låta som en order.
- `utfall.bygglov.rest`: ordet "ändå" ska kunna läsas utan ett tidigare besked.
- `regel['grans-gata']`: säg hur man tar reda på huvudmannen. Det enda underlaget bär är att fråga kommunen.
- `gorInte.muntligt`: utan staketet. Uttrycket står på tre sidor.
- Stycket med de två meningarna om grannen på andra sidan gatan: flytta dem från järnvägsstycket till gatustycket.
- Arrendatorn: säg om hen skriver under i stället för ägaren eller också, eller stryk meningen. Underlaget (prop. s. 166) säger bara att en arrendator **kan** vara granne.
- "Betydande olägenhet": förklara en gång per sida, eller skriv om.
- Antagandet G1 i tabellen: "verkar mot detaljplanen".
- Faq i preteritum ("Då byggde du …").

**E. Meningar läsaren stoppade på, altanräknaren:**
- `GOR_INTE_BYGG_FORST` ("avgiften ovanför", tre led).
- Etiketten "Inget lov" på gränsregeln för en öppen altan (sidans `UTFALL_ETIKETT.nej` används för alla nej-regler). Hantverkaren väljer mellan en text som passar båda och att be om en egen etikett. I det senare fallet får regeln ett eget utfall och jag specar det.
- Meningen om regeringen och "lov" på rad 503, som ska säga medgivande.
- Faq-meningen "Närmare än 4,5 meter går bra …" och "det har gått sedan".
- `takRegel`: meningen "Det gäller villan lika väl som radhuset och flerbostadshuset" stryks, och likadant i artikeln rad 91. **Beslut:** sidorna säger ingenting om hustyp vid 30 kvm-gränsen. Antagandet om en- eller tvåbostadshus står bara där det spelar roll, vid prickmarken.
- Två eller tre mått enligt 12.7: ingressen, H2-stycket "de är tre", bildtexten rad 536, `RAD_KOMMUNEN` och artikelns bildtext.
- Upprepningarna: "sista ordet" (fyra gånger), "bärande delar, brandskydd eller installationer" (tre gånger), "titta på datumet" (två gånger). Behåll en av varje.

**F. Artikeln `bygglov-altan.mdx`:**
- H2:n "Grannen behöver skriva under först när altanen får tak". Den ska också täcka planket och kan inte använda "först".
- Rad 84: "den … dem … poolen". Korrekturen har en rättelse.
- Prickmarksmeningen utan verb.
- "Gamla lättnaderna i planerna" (december 2027): säg vilka eller stryk.
- "Fram till hösten 2025" ska bli december.
- "Över staketet".
- Stycket på rad 90 om Boverkets sida för privatpersoner.

**G. `bygga-altan.mdx`:**
- Meningen om medgivandet får "eller bygglov".
- Ett tätt plank över 1,2 m över marken nämns.
- Knappen "Till kalkylatorn" ska säga räknaren.
- "Två mått" följer 12.7.

**H. Resonemanget om Boverkets sida för privatpersoner** skrivs fullt ut på ett ställe, i artikeln `/altan/bygglov-altan/`. Det står där med källorna och passar bäst där. Grannemedgivandets H2 1 och altanräknarens H2-stycke säger det i en mening och länkar till artikeln. Inga nya länkmål behövs. Båda sidorna länkar redan dit.

**I. Datumet "1 december 2025"** står högst två gånger i standardvyn på varje sida, utöver lagrumsraderna. I dag står det sju till tio gånger.

### 12.12 Godkännande för del 12

- Testerna gröna med ändringarna i 12.1, 12.4, 12.5 och 12.10. `npx astro check` ger 0 fel och `npm run kontrollera` ger 0 fel.
- Jag kontrollerar följande:
  - skärmtaket 2 m från gränsen i altanräknaren, spalten på 375 px
  - `?grans=abc` på båda räknarna
  - blanketten för gata och järnväg, utskriven till PDF
  - den inbäddade räknaren i artikeln, med altan förvald och förklaringarna synliga
  - att ingen sida längre mäter planket på två sätt, med en sökning efter "1,2" i de fyra filerna
- Därefter läser läsaren ett varv till på de fyra sidorna.

### 12.13 Granskning av del 12, 2026-09-28 (UX och bygge)

Kört själv:
- Testerna: grannemedgivande 73 av 73 och bygglov-altan 22 av 22 gröna. `npx astro check` ger 0 fel på 146 filer. `npm run kontrollera` ger 0 fel och 10 varningar, alla om bildtext i andra sidor.
- Egen dev-server på port 4455, stängd efteråt. Headless Edge med `Emulation.setDeviceMetricsOverride` på 375 px.

**Godkänt mot specen:**
- 12.1: skärmtak 2 m ger "Grannens ja / annars bygglov" med raden och länken till blanketten i spalten, och "altanen har skärmtak".
- 12.2 och 12.3: texterna i räknarmodulen.
- 12.4: blanketten per mottagare.
- 12.5: takfotshjälpen bara för byggnad.
- 12.6: altan förvald i artikeln, förklaringarna synliga, räknaren sist i H2:n, fotraden ny.
- 12.7: "Så bedömer jag".
- 12.9 punkt 2: nofollow borttagen.
- 12.10.
- `?namn=Anna&fb=…` syns ingenstans i HTML:en. TEXT SAKNAS förekommer 0 gånger på de sidor jag läst. Ingen sidledsscroll på 375 px; bredare tabeller ligger i `<Tabellyta>`. Spalten är 451 tecken vid standard (gräns 700).
- Utskriften i Edge: grannar 1 sida, gata 1 sida, järnväg 1 sida, grannar och järnväg 2 sidor. Bara blanketten kommer med. Raden om flera ägare står bara för grannar, och järnvägsraden är en hel mening. `/rakna/u-varde/` skrivs ut som hel sida (11 sidor), alltså opåverkad av utskriftsblocket.
- `Verktygskort.astro`: "Till räknaren" godkänt.

**Retur, fyra punkter:**

**1. Delningsfältet i ogiltigt läge (samma fel som kontrollplanen, och jag specade det själv i 12.8).** Vid `?grans=abc` visar fältet en adress byggd av standardvärdena. På grannemedgivandet blir `grans=abc` till `grans=2`, och på altanräknaren blir `plan=nej&tak=vaggar` till `plan=ja&tak=nej`. Fältet visas dessutom fast det inte finns något svar att dela. Rättning:
- `src/pages/rakna/grannemedgivande.astro` rad 259 till 264 (blocket med `label for="dela"` och `input id="dela"`): renderas bara när `!ogiltig`.
- `src/pages/rakna/bygglov-altan.astro` rad 448 till 457, samma block och samma villkor. Kommentaren på rad 448 till 450 ("Står också vid ogiltigt värde …") rättas.
- 12.8 ändras: vid ogiltigt värde visar spalten **bara** beskedsvarningen, ingenting under den. `delaLank` får fortfarande byggas av `visatIndata`; den används bara när svaret visas.
- Jag kontrollerar med curl att `id="dela"` saknas vid `?grans=abc` på båda sidorna och finns vid standard.

**2. Sidvikten.** Mätt i dev med riktig text, med dev-CSS och dev-skript bortskurna. Metoden stämmer mot bygget: `/altan/bygga-altan/` ger 65,9 kB här och 65,0 kB i senaste `dist/`.

| Sida | kB i filen | Budget 66 |
|---|---|---|
| `/rakna/grannemedgivande/`, standard | 69,3 | över 3,3 |
| samma med två blanketter (grannar och järnväg) | 74,7 | över 8,7 |
| `/altan/bygglov-altan/` | 67,5 (60,1 i senaste bygget) | över 1,5 |
| `/rakna/bygglov-altan/`, skärmtak | 62,2 | under |
| `/rakna/u-varde/`, för jämförelse | 69,3 | över 3,3 |

Grannemedgivandets eget innehåll i `<main>` är 42,2 kB, varav blanketten 4,6 kB, formuläret 6,4 och regellistan 7,2. Skalet runt `<main>` är 24 kB (sidhuvud 9,5 och sidfot 8,4) och är det som bär sajtens kända budgetbrott (skillen astro-och-prestanda avsnitt 2). Sidfotens lista över räknare har dessutom vuxit med tre poster i dag. Artikeln har vuxit med 7,4 kB i den här omgången: den inbäddade räknaren med förklaringar är 4,4 kB, och resten är text.

Beslut:
- **Regellistan i "Därför blev svaret så" på båda räknarna** får sina klasser på `<ul>` som varianter, så som u-värdesspecen 12.1 gör. Bara ramfärgen per slag står kvar på `<li>`. Utseendet ska vara oförändrat på 375 och 1280 px. Detta är utvecklarens del i den här omgången.
- **Skalet** tar jag i en egen spec, `docs/briefer/spec-skal-budget-2026-09-28.md`, som jag skriver direkt efter den här granskningen. Den gäller alla sidor och tar sidhuvudet, sidfotens räknarlista och de 13 långa sidorna. **Koordinatorns beslut 2026-09-28:** grannemedgivandet och altanartikeln publiceras när punkt 1 och regellistan är byggda och godkända, utan att vänta på skalspecen, som `/rakna/u-varde/` gjorde. Texten kortas inte. Skalspecen är `docs/briefer/spec-skal-budget-2026-09-28.md` och byggs direkt efter att de tre nya räknarna är publicerade. Dess mål är att alla sidor hamnar under 66 kB på bygget, också grannemedgivandet med två blanketter (förväntat cirka 61 kB).

**3. Hantverkarens fråga om plankregeln.** Meningen i altanräknaren om att ett tätt plank ovanpå räknas in i altanens höjd (`GOR_INTE_MAT_PA_OVANSIDAN`, bygglov-altan.ts rad 438) går ihop med 9 kap. 34 § 3. Det är **ett mått och två gränser**:
- Måttet är detsamma i båda paragraferna, från marken på altanens yttersida till plankets överkant. 34 § 3 säger "över marken", och 19 § säger "höjd över marken" för mur, plank och altan. Boverket (PBL kunskapsbanken, "Altan") räknar plank på altan som hela konstruktionen från marken.
- 19 § avgör **bygglovet**: över 1,8 m inom 3,6 m från en byggnad, annars över 1,2 m.
- 34 § 3 avgör **medgivandet**: över 1,2 m och närmare gränsen än 4,5 m.

En altan på 0,6 m med ett tätt plank på 1,0 m är alltså 1,6 m. Den klarar 19 § intill huset men kräver grannens medgivande närmare gränsen än 4,5 m. Meningen får stå. Om hantverkaren vill kan meningen och gränsregelns text säga att det är samma mått, men det är inget krav.

**4. Budgeten för ogiltigt läge** är inget problem (grannemedgivandet 58,3 kB). Den står här för att den mättes.

När punkt 1 och regellistan i punkt 2 är byggda kontrollerar jag dem med curl och på 375 px. Budgeten kontrollerar jag på koordinatorns bygge efter skalspecen.

### 12.14 Kontroll av 12.13, 2026-09-28 (UX och bygge)

Egen dev-server på port 4456 och headless Edge med CDP, båda stängda efteråt.

- **Delningsfältet** vid `?grans=abc`: `id="dela"` saknas på båda räknarna. Spalten har bara beskedsvarningen, och "Därför blev svaret så" renderas inte. Vid standard finns fältet och sektionen. `?namn=Anna` syns inte i HTML:en. TEXT SAKNAS förekommer 0 gånger.
- **Regellistan**: klasserna står på `<ul>`, och bara ramfärgen per slag står kvar på `<li>` (grannemedgivandet `border-linje` 7 och `border-blyerts` 2, som före). Den beräknade stilen är densamma som med de gamla klasserna, på 375 och 1280 px, i fyra lägen (standard, gata med järnväg, altan med skärmtak, altan med "vet inte"):
  - `li`: 16 px marginal under, 2 px vänsterram, 16 px indrag
  - etiketten: 12/13 px, versaler, fet, blyerts-2
  - texten: 17/18 px
  - lagrummet: 14 px, blyerts-2
  - blankettlänken i altanräknaren står fyra i ordningen och påverkas inte av `nth-child(3)`
- Ingen sidledsscroll på 375 px.
- Testerna: grannemedgivande 73 av 73, bygglov-altan 22 av 22. `astro check` ger 0 fel och `kontrollera` ger 0 fel.

Godkänd av UX och bygge.
