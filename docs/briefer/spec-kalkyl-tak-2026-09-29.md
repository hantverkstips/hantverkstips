# Spec: räknarna /rakna/takbyte/ och /rakna/takavvattning/, med den delade modulen tak.ts

UX och bygge-agenten, 2026-09-29. Specen gäller steg 1 till 4 i skillen nytt-verktyg för två räknare, plus deras varumärkesbilder. Steg 5 och 6 (registret och inbäddningen) och skisserna görs i publiceringsomgången, se avsnitt 10.

Underlagen:
- **Takbyte:** `docs/briefer/faktablad/rakna-takbyte.md` (här "takbytesunderlaget"). Filen får behålla sitt namn. Den har räknarunderlagets form och räknas som underlaget.
- **Takavvattning:** `docs/briefer/underlag-kalkyl-takavvattning-2026-09-28.md` ("avvattningsunderlaget") och `docs/briefer/faktablad/rakna-takavvattning.md`. Källbeteckningarna T1, T2, T3, P26, P10, L1, L2, PM och LG, med adresser, står i `docs/briefer/faktablad/guider-hangrannor.md`.
- **Checklistan:** `docs/briefer/seo-checklista-2026-09-29/raknare.md`, med regel 1 till 4 överst, avsnitten /rakna/takbyte/ och /rakna/takavvattning/ och de två besluten från 2026-09-29 (prisunderlaget och takavvattningen). Dessutom `tak.md` punkt 9 för plåttak, hängrännor, snörasskydd och takstolar.

Förebilderna i koden är `src/pages/rakna/fasadyta.astro` och `src/lib/kalkyl/fasadyta.ts`, som har all publik text i `TEXT`, beskeden som funktioner och `antagandenFor()`, samt `src/lib/kalkyl/rotavdrag.ts` och specen `docs/briefer/spec-kalkyl-badrum-kostnad-2026-09-29.md`, som byggs parallellt med samma mönster. Står något inte här gäller badrumsspecen i samma fråga, därefter `docs/SPEC-SIDMALLAR.md` 4.7. Står det inte heller där frågar utvecklaren innan hen bygger.

**Inga produkter och inget reklamband** på någon av sidorna (checklistan 1). `reklam={false}`.

**Utkast.** Ingen av sidorna publiceras förrän värdartikeln (`/tak/plattak/` respektive `/tak/hangrannor/`) publiceras och hantverkarens text finns. Båda svarar 404 i produktion så länge `UTKAST` är `true`, och ingen av dem står i registret (4.2 och 10).

---

## 0. Godkännande av underlagen och besluten

Båda underlagen är **godkända med besluten nedan**. Varje konstant har källa eller är märkt ANTAGANDE, och räkneexemplen går att räkna om. Jag har kontrollräknat dem med node 2026-09-29.

### B1. Takarean mäts längs lutningen, i båda räknarna

Takarean är den verkliga ytan längs takfallet: **A = P / cos v**, där P är den vågräta projektionen med utsprången. Den ytan används på tre sätt.

- **I takbytet:** källornas priser gäller per kvadratmeter takyta (Tak i Väst: "exemplen avser takyta"). En projicerad yta skulle ge för lågt pris.
- **I takavvattningen:** tabellerna i RA Hus 21 och Plannja 2026 är tillverkarnas. Plannja mäter "takets längd och bredd på varje takhalva" (P26 s. 10), och Plannjas monteringsanvisning mäter bredden längs pannorna "från takfoten till taknocken" (PM). Ytan längs lutningen är större, och därför är svaret på den säkra sidan.
- **SS-EN 12056-3, som BMI sammanfattar den,** räknar med vågrät bredd (takavvattning.nu). Den står som jämförelse i "Så räknar jag" på takavvattningen, med ytan och dimensionen räknade vågrätt (`vagratt` i 4.2 och 5.3). Tabellen över påslaget visar skillnaden på takbytet.

Kravet i checklistans beslut 4 är uppfyllt: båda räknarna räknar på samma sätt och säger det, med källa i "Så räknar jag".

### B2. Takformer: sadeltak och pulpettak, inte valmtak i första versionen

Valmtaket går att räkna geometriskt (takbytesunderlaget 2.4). Det kommer ändå inte med i första versionen, av två skäl:

- **Takbytet:** priserna gäller sadeltak (P1: "enplansvilla med ett sadeltak"). Takexperter och Tak i Väst skriver att valm blir dyrare, men ingen av dem anger hur mycket. Med sadeltakets pris skulle räknaren lova för lite.
- **Takavvattningen:** ett valmat tak har fyra rännor och en egen regel för stuprören (P26: "två stuprör per långsida"). Det blir ett eget utfall med egna tester.

Valm blir en senare version när ett pris finns. Faq får ta upp frågan (avsnitt 10).

### B3. Priserna i takbytet (efter SEO:s beslut om prisunderlaget)

Källorna är P1 (Takexperter), P4 (Hantverkskollen, plåttak) och P5 (Totalbyggarna). P3 (Byggstart) kommer inte med. Underlaget visar inte att Byggstarts pris gäller före rot, och det står bara "Summan inkluderar samtliga kostnader". Därmed har **shingel ingen källa och tas bort** (regel 3: en post utan källa tas inte med).

| Material (nyckel) | Källornas tal, kr per m² takyta före rot | Spann i räknaren | Andel arbete |
|---|---|---|---|
| `bandplat` | P4 1 600–2 500; P5 1 500–2 500; P1 (72 000 + 90 000) / 150 = 1 080 | 1 080–2 500 | lägsta av P4 670/1 600, P4 1 190/2 500, P1 72 000/162 000 = **41,875 %** |
| `takpanneplat` | P4 950–1 300; P5 900–1 500 | 900–1 500 | lägsta av P4 220/950, P4 430/1 300 = **23,16 %** |
| `betong` | P1 (93 600 + 75 000) / 150 = 1 124 | 1 124 | P1 93 600/168 600 = **55,52 %** |
| `tegel` | P1 (93 600 + 126 000) / 150 = 1 464 | 1 464 | P1 93 600/219 600 = **42,62 %** |
| `papp` | P1 (57 600 + 57 500) / 150 = 767,33 | 767,33 | P1 57 600/115 100 = **50,04 %** |

- **Spannet** går från den lägsta låga till den högsta höga, enligt SEO-beslutet. Inget medelvärde räknas. Betong, tegel och papp har en enda källa och ett enda tal. De får ett tal i stället för ett spann, och antagandetabellen säger att det finns en källa.
- **P1:s pris per m²** räknas i modulen ur P1:s kronor för 150 m² och avrundas inte. Talen i tabellen ovan är facit.
- **Andelen arbete:** SEO-beslutet säger P4 och P1. Där båda finns (bandplåt) och där P4 ger två tal (lågt och högt) tar räknaren **den lägsta andelen**. Det är ett ANTAGANDE och står i antagandetabellen. Skälet: en låg andel arbete ger ett mindre rotavdrag, och räknaren ska inte lova mer avdrag än källorna bär. Varje andel räknas i modulen ur källans kronor (arbete delat med totalt), aldrig som en inskriven procentsats.
- **Takexperters tillägg**, cirka 30 000 kr för resor, etablering och projektering, blir en egen rad i "Därför blev svaret så" och i antagandetabellen. **Det räknas inte in i summan.** Tillägget gäller bara P1, medan P4 och P5 redan har etableringen i sina tal (takbytesunderlaget 4.4). Räknas det in för alla material blir det dubbelt. Raden säger att det kan tillkomma.
- **Ställning och container** ingår i källornas pris per m² (takbytesunderlaget 4.3 och 4.4). De blir inga egna poster, och det står i antagandetabellen.
- **Skalningen** är linjär bara när takarean ligger mellan 100 och 200 m², med gränserna inräknade (SEO-beslutet). Utanför visar räknaren takarean, vinkeln och takstolarna, men inget belopp.
- **Rotavdraget** räknas genom att `raknaRotavdrag()` anropas två gånger, en gång för spannets låga ände och en gång för den höga. Ingenting i `rotavdrag.ts` skrivs om (checklistan regel 4).

### B4. Takstolarna

Antal = ⌈L / c/c⌉ + 1, med L gavel till gavel utan gavelutsprång (takbytesunderlaget 3). c/c är 1 200 mm som standard, med 600 och 900 som val (TräGuiden 1.3.1 och 4.2.2). Talet räknas i hela millimeter så att flyttal inte ger en takstol för mycket: `Math.ceil(Math.round(L · 1000) / cc) + 1`. Att den första och den sista takstolen står i gavellivet är ett ANTAGANDE. Resultatet säger att leverantören bestämmer antalet. Räknaren dimensionerar inga takstolar och räknar ingen snölast (checklistans fälla).

### B5. Takavvattningen

- **Stupröret dimensioneras efter RA Hus 21** (T2), och **rännan efter RA Hus 21 och Plannja 2026** (T1, P26). Det är SEO-besluten 1 och 2.
- **Lindab-raden.** SEO-beslut 2 säger att beskedet får en pekrad om Lindab när takfallet är mellan 50 och 75 m². Lindabs egen gräns (L1) har ett andra intervall där Lindab vill ha en större ränna än RA Hus: **över 100 och upp till 125 m²**, där Lindab säger 150 och RA Hus säger 125 ("Om takets area överstiger 100 m² finns det hängrännor som är 150 mm breda"). Beslutets påstående att "källorna är överens" utanför 50 till 75 stämmer alltså inte. Räknaren visar därför Lindab-raden **varje gång Lindabs ränna är större än RA Hus ränna**. Vid 50 till 75 m² blir det 125 mot 100, och över 100 till 125 m² blir det 150 mot 125. Regeln är beslutets egen princip: läsaren väljer efter det fabrikat hon köper. Lindabs gränser är data (`LINDAB_RANNA`), så SEO och GEO-agenten kan stänga det andra intervallet med en ändring och ett test. Frågan står i avsnitt 11.
- **SS 82 40 31** visas inte i svaret. Den står bara i "Så räknar jag", som en jämförelse (SEO-beslut 1). Årtalet 1988 är inte bekräftat i någon läst källa (avvattningsunderlaget 7). Därför är `SS_AR` `null`, och hantverkaren skriver inget år förrän det har kontrollerats hos SIS. Det motsäger checklistans fälla "står med år", och frågan står i avsnitt 11.
- **Plast får inget pris**, och **räknaren visar inga kronor i första versionen.** SEO-beslut 3 säger att materialkostnaden räknas för stål, "där varje post har en källa". Enligt avvattningsunderlaget 5 saknar stål pris för ränna 150 och 190, stuprör 75 och 100 till 120, krokar till 100 och 150, omvikningskupa, skarv, gavel, svep och utkastare. Standardhuset får ränna 100 och stuprör 75, och det finns inget pris för något av dem. En summa av bara de poster som har pris skulle lova för lite, och regel 3 säger att en post utan källa inte tas med. Räknaren visar därför dimensioner, antal och fall. Kronorna blir en senare version när underlaget har ett pris för varje post (avsnitt 11). Plast nämns i svaret utan kronor, i regeln `plast`, med Plastmos fall.
- **Stuprörens antal:** n = ⌈rännlängd / 10⌉, minst 1 (L1, P26, Lindabs strängare regel). Arean delas lika mellan n rännfall, var och en rännlängd / n lång. Det är ett ANTAGANDE och den försiktiga läsningen: med stuprör i båda ändar och i mitten blir rännfallen i verkligheten kortare, aldrig längre. Stuprörets läge efterfrågas inte.
- **Sadeltak ger två takfall** med halva arean var och en ränna per långsida. Pulpettak ger ett takfall med hela arean och en ränna längs den låga sidan. Svaret gäller ett takfall. Summorna för hela huset står under "Därför blev svaret så".
- **Utanför:** blir arean per rännfall större än 250 m² ger räknaren ingen dimension och hänvisar till tillverkaren (T1).

---

## 1. Filer

| Fil | Gör |
|---|---|
| `src/lib/kalkyl/tak.ts` | skapas: takets geometri, delad (avsnitt 2) |
| `src/lib/kalkyl/fasadyta.ts` | ändras **bara** enligt 2.6 |
| `src/lib/kalkyl/takbyte.ts` | skapas (avsnitt 3) |
| `src/lib/kalkyl/takavvattning.ts` | skapas (avsnitt 5) |
| `scripts/test-kalkyl-tak.mjs` | skapas (7.1) |
| `scripts/test-kalkyl-takbyte.mjs` | skapas (7.2) |
| `scripts/test-kalkyl-takavvattning.mjs` | skapas (7.3) |
| `src/components/kalkyl/TakbyteForm.astro` | skapas (4.1) |
| `src/components/kalkyl/TakavvattningForm.astro` | skapas (6.1) |
| `src/pages/rakna/takbyte.astro` | skapas (4.2 till 4.6) |
| `src/pages/rakna/takavvattning.astro` | skapas (6.2 till 6.5) |
| `src/assets/illustrationer/rakna/varumarke/takbyte.svg` | skapas (8.1) |
| `src/assets/illustrationer/rakna/varumarke/takavvattning.svg` | skapas (8.2) |

**Rörs inte:** `src/lib/kalkyl/register.ts` (flera specar lägger till där, och posterna kommer i publiceringsomgången), `src/components/ui/Kalkylator.astro`, `src/components/ui/Verktygskort.astro`, `src/lib/kalkyl/rotavdrag.ts`, `stil.ts`, `renovering.ts`, `src/lib/verktygsbild.ts`, `src/lib/strukturdata.ts`, `src/layouts/Bas.astro`, `src/styles/global.css`, `scripts/budget-html.mjs`, `scripts/kontrollera-innehall.ts`, `scripts/test-kalkyl-fasadyta.mjs`, `src/pages/rakna/fasadyta.astro`, allt under `src/content/`, och varje fil som badrumsspecen eller pelarspecen för badrum skapar.

Arbetaren kör inte `npm run build` och committar inte.

---

## 2. Den delade modulen `src/lib/kalkyl/tak.ts`

Ren modul utan importer, inte ens från andra kalkylmoduler. Både `fasadyta.ts`, `takbyte.ts` och `takavvattning.ts` importerar från den, med `.ts`-ändelsen. Modulen har ingen publik text. Feltexterna ägs av den modul som anropar (2.4).

### 2.1 Typer och konstanter

```ts
export type Takform = 'sadel' | 'pulpet';
export type Matt = 'vinkel' | 'nock';

export interface TakIndata {
  langdM: number;      // L, gavel till gavel längs takfoten, fasadliv till fasadliv
  breddM: number;      // B, gavelns bredd, fasadliv till fasadliv (utvändigt, som takstolsleverantören mäter)
  utsprangM: number;   // u_f, takfotsutsprång vågrätt från fasadlivet
  gavelM: number;      // u_g, gavelutsprång vågrätt, per gavel
  takform: Takform;
  matt: Matt;          // vilket av vinkel och nock som räknas
  vinkelGrader: number;
  nockM: number;       // t, nockhöjd över takfoten vid fasadlivet (pulpet: höjdskillnaden mellan väggarna)
}

export type TakFel = 'langd' | 'bredd' | 'utsprang' | 'gavel' | 'vinkel' | 'nock';
```

| Namn | Värde | Märkning |
|---|---|---|
| `GRADER` | `Math.PI / 180` | – |
| `VINKELGRANSER` | `{ sadel: [5, 60], pulpet: [3, 30] } as const` | ANTAGANDE, flyttad oförändrad från `fasadyta.ts` med sin kommentar |
| `TAK_STANDARD` | `{ langdM: 12, breddM: 9, utsprangM: 0.5, gavelM: 0.4, takform: 'sadel', matt: 'vinkel', vinkelGrader: 27, nockM: 2.3 }` | ANTAGANDE: villan i takbytesunderlaget 1. 27° är samma som `STANDARD.vinkelGrader` i `fasadyta.ts`, så att talen går att jämföra. 2,3 m är nockhöjden vid 27° avrundad till en decimal |
| `TAK_GRANSER` | `{ langdM: [3, 40], breddM: [3, 20], utsprangM: [0, 1.5], gavelM: [0, 1.5] } as const` | ANTAGANDE: takbytesunderlaget 1, inklusive |
| `CC_VAL` | `[600, 900, 1200] as const` | Källa: TräGuiden 1.3.1, Egentyngd, 2021-11-02 |
| `CC_STANDARD` | `1200` | Källa: TräGuiden 4.2.2, Takstolsdimensioner, 2021-11-02, och 1.3.1. Adresserna står i `docs/briefer/faktablad/kunskap-takstolar.md` avsnitt 3 och skrivs in i kommentaren |
| `PASLAG_GRADER` | `[6, 10, 14, 18, 22, 27, 30, 34, 38, 45] as const` | raderna i takbytesunderlaget 2.3 |

### 2.2 Geometrin

```ts
export function nockUrVinkel(takform: Takform, v: number, B: number): number   // (sadel ? B/2 : B) · tan v
export function vinkelUrNock(takform: Takform, t: number, B: number): number   // atan(sadel ? 2t/B : t/B), i grader
export function nockGranser(takform: Takform, B: number): [number, number]
  // nockhöjden vid VINKELGRANSER, med en decimal och avrundad inåt: nedre uppåt, övre nedåt (fasadytans 14.3 B3)

export interface TakGeometri {
  takform: Takform;
  vinkelGrader: number;          // den angivna eller den uträknade
  nockM: number;                 // den angivna eller den uträknade
  bottenytaM2: number;           // L · B
  projektionM2: number;          // P = (L + 2·u_g) · (B + 2·u_f)
  takareaM2: number;             // A = P / cos v
  paslagProcent: number;         // (1 / cos v − 1) · 100
  takfallslangdM: number;        // sadel: (B/2 + u_f) / cos v; pulpet: (B + 2·u_f) / cos v
  takfall: 1 | 2;                // pulpet 1, sadel 2
  takareaPerTakfallM2: number;   // A / takfall
  projektionPerTakfallM2: number;// P / takfall
  rannlangdM: number;            // L + 2·u_g, längden på en takfot
}

export function raknaTak(i: TakIndata): TakGeometri   // förutsätter giltig indata
export function antalTakstolar(langdM: number, ccMm: number): number
  // Math.ceil(Math.round(langdM · 1000) / ccMm) + 1
export function paslagstabell(): { grader: number; faktor: number; procent: number; nockPerMeter: number }[]
  // en rad per PASLAG_GRADER: faktor = 1 / cos v, procent = (faktor − 1) · 100, nockPerMeter = tan v
```

Inget avrundas i modulen. Avrundningen görs vid visningen (2.5).

### 2.3 Läsa och skriva adressen

```ts
export function tillTal(s: string | null): number
export function lasTak(q: URLSearchParams, standard: TakIndata): TakIndata
export function takQuery(i: TakIndata, g: TakGeometri | null): URLSearchParams
```

- `tillTal`: `null` ger `NaN`. Den tar bort mellanslag, också hårda och smala (U+00A0, U+202F), som tusentalsavgränsare. Decimalkomma blir punkt. Ett efterhängt `m`, `m²`, `m2`, `kvm`, `°`, `grader`, `mm` eller `kr` tas bort, med eller utan mellanslag före. Tom sträng efter rensningen ger `NaN`. Annars `Number(...)`, och det som inte är ett ändligt tal ger `NaN`.
- `lasTak`: nycklarna `langd`, `bredd`, `utsprang`, `gavel`, `takform`, `matt`, `vinkel` och `nock`.

| Nyckel | Saknas | Tomt | Okänt |
|---|---|---|---|
| `langd`, `bredd`, `vinkel`, `nock` | standard | `NaN` | `NaN` |
| `utsprang`, `gavel` | standard | `0` | `NaN` |
| `takform` (`sadel`, `pulpet`) | standard | standard | standard |
| `matt` (`vinkel`, `nock`) | standard | standard | standard |

- `takQuery`: nycklarna i ordningen `langd`, `bredd`, `utsprang`, `gavel`, `takform`, `matt`, `vinkel`, `nock`, med decimalkomma och utan tusentalsavgränsare. **Fältet som inte räknas skrivs som det uträknade värdet** ur `g` (vinkel med en decimal, nock med två). När `g` är `null` skrivs det som det står. Skälet: en delad länk ska visa båda talen rätt när mottagaren byter mått.

### 2.4 Validering

```ts
export interface TakFeltext {
  langd: (min: number, max: number) => string;
  bredd: (min: number, max: number) => string;
  utsprang: (min: number, max: number) => string;
  gavel: (min: number, max: number) => string;
  vinkel: (min: number, max: number) => string;
  nock: (min: number, max: number) => string;
  'nock-tal': string;
}
export function valideraTak(i: TakIndata, text: TakFeltext): Partial<Record<TakFel, string>>
```

Samma logik som `raknaFasadyta` för sadel och pulpet: bara det som räknas valideras, och nockens gränser räknas ur `VINKELGRANSER` och bredden med `nockGranser`. Är bredden ogiltig och nocken ett tal får nocken inget gränsfel. Är nocken inget tal blir felet `'nock-tal'`. Gränserna är inklusive med toleransen `1e-9`, som i fasadyta.

### 2.5 Visning

```ts
export function m2Text(n: number): string       // högst en decimal, decimalkomma, hårt mellanslag som tusentalsavgränsare: 143.66 → "143,7", 128 → "128"
export function meterText(n: number): string    // två decimaler: 5.6116 → "5,61", 2.3 → "2,30"
export function vinkelText(n: number): string   // högst en decimal: 27 → "27", 27.07 → "27,1"
export function procentText(n: number): string  // högst en decimal: 12.23 → "12,2"
```

`m2Text` och `vinkelText` flyttas från `fasadyta.ts` om de är identiska (se 2.6). Annars skrivs de här och fasadyta behåller sina.

### 2.6 Ändringen i `fasadyta.ts`

Bara det här ändras:

1. `GRADER`, `vinkelUrNock`, `nockUrVinkel` och definitionen av `VINKELGRANSER` tas bort ur filen.
2. `import { nockUrVinkel, vinkelUrNock, VINKELGRANSER } from './tak.ts';` läggs till, och `export { VINKELGRANSER } from './tak.ts';` så att sidan och testet importerar som förut.
3. Om `m2Text` och `vinkelText` flyttas till `tak.ts` (2.5), gör fasadyta samma sak: import och återexport.

`scripts/test-kalkyl-fasadyta.mjs` ska vara grönt **utan att filen rörs**. `nockGranser` i tak.ts ersätter inte fasadytans egen inlinade gränskod. Den får stå kvar, eftersom den är testad. Ingen annan rad i fasadyta.ts ändras.

---

## 3. Formelmodulen `src/lib/kalkyl/takbyte.ts`

Ren modul. De enda importerna:

```ts
import { /* det som behövs */ } from './tak.ts';
import { raknaRotavdrag, kronor, ROT_PROCENT, ROT_TAK_KR, SKATTEVERKET_ROTAVDRAGET, SKATTEVERKET_GER_RATT } from './rotavdrag.ts';
```

Varje konstant står överst med namn och kommentaren `Källa:` (titel, adress och datum som i takbytesunderlaget 4.1) eller `ANTAGANDE:`.

### 3.1 Typer

```ts
export type Material = 'bandplat' | 'takpanneplat' | 'betong' | 'tegel' | 'papp';
export type Agare = 1 | 2;
export type Kallkod = 'P1' | 'P4' | 'P5' | 'TRAGUIDEN' | 'SKV-ROT' | 'SKV-RATT' | 'TAKIVAST';

export interface KallaRef { kod: Kallkod; titel: string; url: string; slag: 'förmedlare' | 'firma' | 'branschhandbok' | 'myndighet'; datum: string; }

export interface PrisRad { kalla: 'P1' | 'P4' | 'P5'; lagKr: number; hogKr: number; hur: 'ordagrant' | 'egen räkning'; }
export interface AndelRad { kalla: 'P1' | 'P4'; arbeteKr: number; totaltKr: number; }
export interface MaterialDef { nyckel: Material; priser: PrisRad[]; andelar: AndelRad[]; }

export interface TakbyteIndata extends TakIndata { material: Material; ccMm: 600 | 900 | 1200; agare: Agare; rotKr: number; }
export type FelNyckel = TakFel | 'cc' | 'agare' | 'rot';

export interface Ande { prisKvm: number; kostnadKr: number; arbeteKr: number; materialKr: number; rotKr: number; raktRotKr: number; kapatKr: number; attBetalaKr: number; begransatAv: Begransning; }

export type Utfall = 'belopp' | 'tak' | 'utanfor';
export type GorInte = 'bottenyta' | 'rot-pa-allt' | 'bestall-takstolar';
export type RegelNyckel =
  | 'takarea' | 'vinkel' | 'pris' | 'en-kalla' | 'andel-arbete' | 'tillagg'
  | 'rot-arbete' | 'rot-grans' | 'rot-slog-i' | 'intervall' | 'takstolar';

export type TakbyteResultat =
  | { status: 'ok'; utfall: 'belopp' | 'tak'; geometri: TakGeometri; takstolar: number;
      lag: Ande; hog: Ande; ettTal: boolean;           // ettTal: lagKr === hogKr för materialet
      andelArbete: number;                             // bråk, 0 till 1
      tillaggKr: number;                               // TILLAGG_KR, visas men räknas inte in
      gorInteDetHar: GorInte[]; regler: RegelNyckel[]; }
  | { status: 'ok'; utfall: 'utanfor'; sida: 'under' | 'over'; geometri: TakGeometri; takstolar: number;
      gorInteDetHar: GorInte[]; regler: RegelNyckel[]; }
  | { status: 'ogiltig'; fel: Partial<Record<FelNyckel, string>> };
```

`Begransning` importeras som typ ur `rotavdrag.ts`.

### 3.2 Konstanter

| Namn | Värde | Märkning |
|---|---|---|
| `KALLOR` | `Record<Kallkod, KallaRef>` | P1: Takexperter, förmedlare, `'rubriken säger "Pris 2026", hämtad 2026-09-28'`. P4: Hantverkskollen, förmedlare, `'uppdaterad 2026-07-17'`. P5: Totalbyggarna, firma, `'2026-03-30'`. TRAGUIDEN: Svenskt Trä, TräGuiden 4.2.2, branschhandbok, `'2021-11-02'`. SKV-ROT: `SKATTEVERKET_ROTAVDRAGET`, myndighet, `'läst 2026-09-28'`. SKV-RATT: `SKATTEVERKET_GER_RATT`, myndighet, `'läst 2026-09-28'`. TAKIVAST: Tak i Väst, firma, `'ändrad 2026-08-17'` (bara för varningen om takyta, inget pris). Titlarna och adresserna tas ordagrant ur takbytesunderlaget 4.1 och 5 |
| `MATERIAL` | `MaterialDef[]` i ordningen bandplat, takpanneplat, betong, tegel, papp, med talen i B3. P1:s pris skrivs som uttryck, `(72000 + 90000) / 150`, med kommentaren "egen räkning ur P1:s tabell för 150 m²" | Källa per rad |
| `PRISER_HAMTADE` | `'2026-09-28'` | dagen underlaget läste källorna |
| `TILLAGG_KR` | `30000` | Källa: P1, "Till totalpriset ovan tillkommer resekostnader, etableringskostnad och projekteringskostnader med cirka 30 000 kronor." Räknas inte in (B3) |
| `YTA_INTERVALL` | `[100, 200]` | Källa: SEO-beslutet 2026-09-29, ur P4 (100–200 m²) och P1 och P5 (150 m²) |
| `MATERIAL_VAL` | `readonly Material[]`, samma ordning | – |

Härledda funktioner, inga inskrivna tal:

```ts
export function spann(m: Material): [number, number]   // [min(lagKr), max(hogKr)] över priser
export function andelArbete(m: Material): number        // min(arbeteKr / totaltKr) över andelar
```

### 3.3 Standard och gränser

```ts
export const STANDARD: TakbyteIndata = { ...TAK_STANDARD, material: 'betong', ccMm: CC_STANDARD, agare: 1, rotKr: 0 };
export const GRANSER = { ...TAK_GRANSER, rotKr: [0, ROT_TAK_KR] } as const;   // rot per ägare, taket i fältet är ROT_TAK_KR · agare
```

Kommentar: betong är takbytesunderlagets förslag och det vanligaste materialet på villor i källorna. En ägare av samma skäl som i `rotavdrag.ts`. Standard ger takarean 143,66 m² och 134 578 kr att betala, se 7.2.

### 3.4 `tolkaQuery(q: URLSearchParams): { indata: TakbyteIndata; harIndata: boolean }`

Takets fält läses med `lasTak(q, STANDARD)`. Resten:

| Nyckel | Fält | Värden | Saknas | Tomt | Okänt |
|---|---|---|---|---|---|
| `material` | material | `MATERIAL_VAL` | standard | standard | standard (också `shingel`) |
| `cc` | ccMm | `600`, `900`, `1200` | standard | standard | `NaN`, som ger fel |
| `agare` | agare | `1`, `2` | standard | standard | `NaN`, som ger fel |
| `rot` | rotKr | tal | standard | 0 | `NaN` |

`harIndata` är sant när någon av de tolv nycklarna finns.

### 3.5 `raknaTakbyte(i: TakbyteIndata): TakbyteResultat`

**Validering.** Alla fel samlas. `valideraTak(i, TEXT.fel)` för taket. `cc` får fel om värdet inte är ett av `CC_VAL`. `agare` får fel om det inte är 1 eller 2. `rot` får fel vid `NaN`, under 0 eller över `ROT_TAK_KR · agare`, och texten får taket för det antalet ägare. Minst ett fel ger `ogiltig`.

**Räkningen, i den här ordningen.**

1. `geometri = raknaTak(i)`. `takstolar = antalTakstolar(i.langdM, i.ccMm)`.
2. Ligger `geometri.takareaM2` utanför `YTA_INTERVALL` blir svaret `utanfor`, med `sida` `under` eller `over`. `regler: ['takarea', 'vinkel', 'intervall', 'takstolar']`, `gorInteDetHar: ['bottenyta', 'bestall-takstolar']`. Inga belopp räknas.
3. För ändarna `lag` och `hog` med `prisKvm` ur `spann(material)`:
   - `kostnadKr = Math.round(takareaM2 · prisKvm)` (arean oavrundad)
   - `arbeteKr = Math.round(kostnadKr · andelArbete(material))`, och `materialKr = kostnadKr − arbeteKr`
   - `raknaRotavdrag({ arbetskostnadKr: arbeteKr, materialkostnadKr: materialKr, antalAgare: agare, utnyttjatRotKr: rotKr, utnyttjatRutKr: 0, skattKr: null })`. Resultatet ger `rotKr = avdragKr`, `raktRotKr`, `kapatKr` och `begransatAv`.
   - `attBetalaKr = kostnadKr − rotKr`
4. `utfall = hog.begransatAv === 'procent' ? 'belopp' : 'tak'`.
5. `ettTal = lag.prisKvm === hog.prisKvm`.
6. **gorInteDetHar**, i den här ordningen: `bottenyta`, `rot-pa-allt` och `bestall-takstolar`, alltid.
7. **regler**, i den här ordningen: `takarea`, `vinkel`, `pris`, `en-kalla` (bara när materialet har en enda källa), `andel-arbete`, `tillagg`, `rot-arbete`, `rot-grans`, `rot-slog-i` (bara vid `tak`), `intervall` och `takstolar`.

### 3.6 Hjälpfunktioner

- `kronor` återexporteras ur `rotavdrag.ts`. Sidan sätter talen i `whitespace-nowrap`.
- `delbarQuery(i, g)`: `takQuery(i, g)` följt av `material`, `cc`, `agare` och `rot`, alltid alla.
- `rotavdragQuery(r, i)`: `arbete` och `material` från den **höga** änden, plus `agare` och `rot`. Nycklarna är desamma som `tolkaQuery` i `rotavdrag.ts` läser. Den höga änden väljs för att det är där gränsen för avdraget kan nås. Det står i TEXT-kommentaren för länken. Bara vid `belopp` och `tak`.
- `avvattningQuery(i, g)`: `satt=hus` följt av `takQuery(i, g)`, till länken mot takavvattningen.
- `kortsvarVarden()`: räknar `STANDARD` för `betong`, `tegel` och `bandplat`. Den returnerar `{ betong, tegel, bandplat }` som `{ prisKvm: "1 124" eller "1 080–2 500", attBetala }` i formaterade kronor, och dessutom `takarea` ("143,7"), `bottenyta` ("108"), `paslag27` ("12,2"), `hamtat` och `kallor` (de kodade källor som förekommer). Kortsvaret byggs av de talen och skrivs aldrig för hand (checklistan H2 0: tre material, källa och datum, faktorn som lutningen styr).
- `beskedVarden(r, i)`: `{ utfall, attBetalaLag, attBetalaHog, kostnadLag, kostnadHog, rotLag, rotHog, kapat, arbeteLag, arbeteHog, materialLag, materialHog, takarea, bottenyta, paslag, vinkel, nock, takfallslangd, takstolar, cc, min, max, sida, agare, ettTal, tillagg, hamtat, material }`, alla formaterade. `material` är `TEXT.material[nyckel]`.
- `antagandenFor(r, i)`: se 4.5.

### 3.7 Publika strängar

Allt läsaren ser och som modulen äger står i **ett** objekt, `export const TEXT`, som i badrumsspecen 2.8. Varje värde är `'TEXT SAKNAS: <nyckel>'` tills hantverkaren skriver det, och en kommentar per nyckel säger när den visas och vad den ska säga. Utanför TEXT får bara de två gränssnittstexterna stå (standardvarningen och delatexten, ordagrant ur nytt-verktyg) och de fasta rubrikerna "Därför blev svaret så", "Gör inte det här", "Så räknar jag", "Vad siffrorna vilar på" och "Läs vidare".

**Beskeden.** `TEXT.besked[utfall].rubrik(v)` och `.rad(v)`. Varje rubrik är en mening med ett verb som säger vad läsaren ska göra.

| Utfall | Rubrik (bär) | Rad |
|---|---|---|
| `belopp` | vad läsaren ska räkna med att betala för sitt material, bär `attBetalaLag` (och `attBetalaHog` när `ettTal` är falskt) | säger något annat än rubriken, till exempel att offerten ska räkna på takytan `takarea`, inte bottenytan |
| `tak` | samma, bär `attBetalaLag` | att gränsen för rotavdraget stoppar `kapat` kr i den höga änden, och vad två ägare gör |
| `utanfor` | vad läsaren ska göra i stället, alltså begära offert, bär `takarea` | att källornas priser gäller tak från `min` till `max` m², så att räknaren inte visar något belopp för ett tak som är `sida`. Kort |

Övriga nycklar, alla `TEXT SAKNAS`:

- `form.*`: legender, etiketter och hjälprader, se 4.1. Ordet "tak" står inte ensamt där det kan betyda rotavdragets gräns, som heter "gräns". Nockhöjden förklaras i hjälpraden (mätt från takfoten vid väggen).
- `takform.<Takform>`, `material.<Material>` och `cc.<600|900|1200>`: etiketterna till valen. `bandplat` bär orden bandtäckt eller falsad plåt.
- `fel.*`: `TakFeltext` plus `cc`, `agare` och `rot(max)`.
- `spalt.*`: `etikett-betala`, `till(v)` (raden "till X kr" efter det stora talet, bara när `ettTal` är falskt), `rad-takarea(v)` (takarean och påslaget mot bottenytan), `rad-delning(v)` (arbete och material), `rad-rot(v)`, `rad-kallor(v)`, `rad-geometri(v)` (vinkel eller nock, den som inte angavs, takfallslängden och takstolarna vid `cc`), `etikett-takarea` och `enhet-takarea` (vid `utanfor`), `pekrad`, `lank-sa-raknar-jag`, `lank-rotavdrag`, `lank-takavvattning` och `lank-takstolar`.
  - `rad-kallor`: att priserna är förmedlares och en firmas priser före rot, hämtade `hamtat`. Förmedlarna nämns inte vid namn (checklistans fälla). En mening.
- `darfor.*`: `tabell-ande`, `tabell-lag`, `tabell-hog` (kolumnrubrikerna), `rad-pris`, `rad-kostnad`, `rad-arbete`, `rad-material`, `rad-rot`, `rad-betala` (radrubrikerna, med enheten i rubriken), `tillagg(v)`, `kallrad`, `utanfor(v)` och `ett-tal(v)` (stycket som ersätter tabellen när `ettTal` är sant).
- `regel.<RegelNyckel>`: `{ text: (v) => string, kallor: Kallkod[] }`. Källorna är data och texten saknas. `kallor`: `takarea` TAKIVAST; `vinkel` []; `pris` källorna för materialet (funktion av `i`); `en-kalla` P1; `andel-arbete` P1, P4; `tillagg` P1; `rot-arbete` SKV-ROT, SKV-RATT; `rot-grans` SKV-ROT; `rot-slog-i` SKV-ROT; `intervall` P1, P4, P5; `takstolar` TRAGUIDEN. En regel utan källa är egen räkning, och det står i texten. Förmedlarna får inte nämnas vid namn i `text`.
- `gorInte.<GorInte>`: `bottenyta` (jämför aldrig ett pris per kvadratmeter mot bottenytan), `rot-pa-allt` (ställningshyra, container och material ger inget avdrag; montering av ställningen gör det, enligt Skatteverket i takbytesunderlaget 5; får inte ha samma meningar som `rotavdrag.ts` och `renovering.ts`) och `bestall-takstolar` (beställ inte efter räknarens antal, leverantören räknar).
- `antagande.<nyckel>`: kolumnen Vad i antagandetabellen, se 4.5.
- `steg`: "Så räknar jag" som en lista, där talen byggs av konstanterna: takarean, priset, andelen, rotavdraget och takstolarna.
- `paslag.*`: rubrikerna till påslagstabellen (4.4) och raden under den.
- `kortsvar(v)`: tre till fem meningar byggda av `kortsvarVarden()`, med en `<Markering>`.
- `skissAlt` och `skissBildtext`: sparas till publiceringsomgången.

Testerna låser nycklarna och att varje värde är en icke-tom sträng. Påståenden om ordalydelsen skrivs som `{ todo: 'text' }` tills texten finns.

---

## 4. Takbytets formulär och sida

### 4.1 `src/components/kalkyl/TakbyteForm.astro`

Props som `FasadytaForm`: `indata?`, `varden?` (talfälten som de skrevs: `langd`, `bredd`, `utsprang`, `gavel`, `vinkel`, `nock`, `rot`), `fel?`, `kompakt?`, `idPrefix?`, `knappText?` (standard "Räkna ut"). Klasser bara ur `stil.ts`, samma fieldset- och legendklasser som `FasadytaForm`. Ingen klient-JS. `<form method="get" action="/rakna/takbyte/">`. Namnen är query-nycklarna.

Layout på 375 px. Innerbredden i det linjerade papperet är 311 px.

```
┌ 311 px ───────────────────────────────┐
│ HUSET (legend)                         │
│ Längd            Bredd                 │  grid-cols-2 gap-3
│ [ 12    ] m      [ 9     ] m           │  48 px, min-w-0
│ Takfotsutsprång  Gavelutsprång         │  bara full
│ [ 0,5   ] m      [ 0,4   ] m           │
│ hjälp: mät utvändigt, vågrätt ut       │  bara full
│                                        │
│ TAKET (legend)                         │
│ ( ) Sadeltak   ( ) Pulpettak           │  flex-wrap gap-x-4, min-h-11
│ ( ) Vinkel     ( ) Nockhöjd            │  radio `matt`, bara full
│ Vinkel           Nockhöjd              │  grid-cols-2, båda fälten alltid
│ [ 27    ] °      [ 2,3   ] m           │
│ hjälp: nockhöjden från takfoten        │  bara full
│                                        │
│ NYTT TAK (legend)                      │
│ ( ) bandtäckt plåt                     │  en per rad, min-h-11
│ ( ) takpanneplåt                       │
│ ( ) betongpannor                       │
│ ( ) tegelpannor                        │
│ ( ) papp                               │
│                                        │
│ TAKSTOLAR (legend)                     │  bara full
│ ( ) 600  ( ) 900  ( ) 1 200 mm         │  flex-wrap gap-x-4
│                                        │
│ ÄGARE OCH ROTAVDRAG (legend)           │
│ ( ) En   ( ) Två                       │
│ Rotavdrag ni redan använt i år         │  bara full
│ [ 0                 ] kr               │  max-w-40
│                                        │
│ [ Räkna ut ]                           │
└────────────────────────────────────────┘
```

- Varje talfält har en `<label for>` ovanför, `type="text"`, `inputmode="decimal"` (`rot` får `inputmode="numeric"` och `placeholder="0"`), `FALT_KLASS`, `min-w-0` och enheten som `<span>` efter fältet. Radioknapparna ligger i `VAL_KLASS` med minst 44 px klickyta.
- Felen står under fältet i `FEL_KLASS`, med id `{idPrefix}{nyckel}-fel` och `aria-describedby`. Fältet får `ramKlass(true)`. Har fältet både hjälprad och fel står båda id:na i `aria-describedby`. `fel.cc` och `fel.agare` står under sina radioknappar och kopplas till var och en av dem.
- **Kompakt** (inbäddningen i `/tak/plattak/`): bara Längd, Bredd, takformen, Vinkel, materialet och ägarna. Inga hjälprader. Det som inte renderas skickas inte och tas ur `STANDARD`, och för `matt` betyder det vinkel. Rubriken för kompakt form hanteras av `Kalkylator.astro` i publiceringsomgången.

### 4.2 Sidan `src/pages/rakna/takbyte.astro`

Som `fasadyta.astro`: `export const prerender = false`, `Astro.locals.sidtyp = 'verktyg'`, `Cache-Control: public, s-maxage=3600, stale-while-revalidate=86400` på alla svar, `reklam={false}`, `bred={true}`, brödsmulor Hantverkstips / Räkna själv / `VERKTYGSNAMN`, `ogBild={verktygsDelningsbild(SLUG)}`, `<StrukturData slot="head" data={verktyg({ url, namn: VERKTYGSNAMN, beskrivning: BESKRIVNING })} />`. `FAQPage` finns bara när Faq har frågor.

```ts
const SLUG = 'takbyte';
/* Utkast: sidan svarar 404 i produktion och har noindex i dev tills värdartikeln
   /tak/plattak/ publiceras och hantverkarens text finns. Sätts till false i
   publiceringscommiten, samtidigt som registerposten läggs till. */
const UTKAST = true;
const VERKTYGSNAMN = 'TEXT SAKNAS: verktygsnamn';
const BESKRIVNING = 'TEXT SAKNAS: beskrivning';   // 120 till 155 tecken, checklistan 4
const titel = 'TEXT SAKNAS: titel';               // högst 44 tecken, börjar med "Byta tak, kostnad" eller "Vad kostar det att byta tak", checklistan 3
const H1 = 'TEXT SAKNAS: h1';                     // läsarens fråga, delar inte de tre första orden med titeln
const INGRESS = 'TEXT SAKNAS: ingress';
```

**Flödet och utkastet** som badrumsspecen 4.1:

```ts
if (UTKAST && import.meta.env.PROD) {
  return new Response(null, { status: 404, headers: { 'X-Robots-Tag': 'noindex' } });
}
const { indata } = tolkaQuery(Astro.url.searchParams);
const resultat = raknaTakbyte(indata);
const fel = resultat.status === 'ogiltig' ? resultat.fel : {};
const visatIndata = resultat.status === 'ogiltig' ? STANDARD : indata;
const visat = raknaTakbyte(visatIndata);   // alltid ok
```

`noindex={UTKAST}` till `Bas`. Vid `ogiltig` står fälten kvar med läsarens värden och felen under, och spalten visar standardsvaret med standardvarningen överst. Den delbara adressen är `new URL('/rakna/takbyte/?' + delbarQuery(visatIndata, visat.geometri), Astro.site ?? Astro.url)`, i ett skrivskyddat fält som på fasadyta.

**Ordningen på sidan:**

1. Sidhuvudet som på fasadyta, med H1 och ingress i 7/12 och varumärkesbilden i 5/12 från 1024 px, och under ingressen på mobil. `alt=""`, `fetchpriority="high"`, inget `loading="lazy"`.
2. `<Faktaruta variant="kortsvar">` med `TEXT.kortsvar(kortsvarVarden())`.
3. `<div class="linjerat …">` med formuläret och spalten (4.3).
4. H2 "Därför blev svaret så" (`id="darfor-blev-svaret-sa"`), se 4.4.
5. H2 "Gör inte det här", med raderna ur `gorInteDetHar` som stycken.
6. Tre H2 med hantverkarens brödtext, checklistans H2 1 till 3, i den här ordningen. Rubrikerna är `TEXT SAKNAS`-konstanter i sidan. Brödtexten står som markup i sidan, en `<section>` per H2 med `<p>TEXT SAKNAS: …</p>`, och länkklasserna står en gång på `<section>`. Kommentaren i varje sektion säger vad den ska innehålla:
   - **Takarean ur husets mått.** Bär "beräkna takarea" och "takvinkel". Formeln i klartext och påslagstabellen ur `paslagstabell()` (4.4, punkt 4), med takutsprånget.
   - **Vad som ingår i priset.** Rivning, underlag, läkt, material, plåtdetaljer, ställning och container. Arbete och material för sig. Länk till `/tak/plattak/`.
   - **Rotavdraget på takbytet.** Två ägare och vad som räknas som arbete. Länk till `/rakna/rotavdrag/`.
7. H2 "Så räknar jag" (`id="sa-raknar-jag"`): skissen `<Illustration namn="rakna/takbyte" …>` **bara när filen finns** (`verktygsillustration(SLUG)`), sedan `TEXT.steg` som numrerad lista och H3 "Vad siffrorna vilar på" (`id="vad-siffrorna-vilar-pa"`) med antagandetabellen (4.5).
8. H2 "Läs vidare": `/tak/plattak/`, `/rakna/takavvattning/`, `/rakna/rotavdrag/` och `/rakna/fasadyta/`. Länktexterna är `TEXT SAKNAS`.
9. `<Faq>` med tre platshållare (`TEXT SAKNAS`).

### 4.3 Resultatspalten

`mt-8 border-t border-linje pt-6 lg:mt-0 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8`, som på fasadyta. Uppifrån:

1. Standardvarningen, bara vid `ogiltig`.
2. Beskedet: `rubrik(v)` som `<p>` i H3-stil, och `rad(v)` under i `text-brod`.
3. Vid `belopp` och `tak`:
   - `spalt['etikett-betala']` i etikettstil.
   - `kronor(lag.attBetalaKr)` i `text-siffra` med `<Markering>`, sedan i `text-ingress` antingen `spalt.till(v)` (när `ettTal` är falskt) eller "kr". Mönstret är dräneringsräknarens. Det stora talet står i `whitespace-nowrap tabular-nums`.
   - `rad-takarea`, `rad-delning`, `rad-rot` och `rad-kallor`, var och en som ett `<p>` i `text-liten text-blyerts-2`.
4. Vid `utanfor`: `spalt['etikett-takarea']`, sedan `m2Text(takareaM2)` i `text-siffra` med `<Markering>` och `enhet-takarea` i `text-ingress`. Inga kronor.
5. Alltid: `rad-geometri`, med en länk på takstolarna till `/tak/takstolar/` (`lank-takstolar`, checklistan 9).
6. `pekrad` till `#darfor-blev-svaret-sa`, `lank-sa-raknar-jag` till `#sa-raknar-jag`, `lank-rotavdrag` till `/rakna/rotavdrag/?` + `rotavdragQuery` (bara vid `belopp` och `tak`), `lank-takavvattning` till `/rakna/takavvattning/?` + `avvattningQuery`, och sist den delbara adressen.

Varje tal står med `&nbsp;` mot sin enhet och i `tabular-nums`. Spalten har inga tabeller och ingen sidledsscroll på 375 px. **Spaltbudgeten är högst 800 tecken synlig text vid standard**, utan den delbara adressen. Utvecklaren rapporterar talet med `TEXT SAKNAS` och räknar ut utrymmet som finns kvar.

### 4.4 "Därför blev svaret så"

Vid `belopp` och `tak`:

1. **Tabellen över ändarna.** När `ettTal` är falskt: `<Tabellyta kolumner={3}>` med kolumnerna `tabell-ande`, `tabell-lag` och `tabell-hog`, och raderna pris per m², kostnad före rot, arbete, material, rotavdrag och att betala, den sista i fetstil. Talen står utan "kr", eftersom enheten står i radrubriken, och högerställda med `tabular-nums whitespace-nowrap`. Klasserna står en gång på `<table>`. När `ettTal` är sant ersätts tabellen av `darfor['ett-tal'](v)` som ett stycke.
2. `darfor.tillagg(v)` som ett eget stycke, och `darfor.kallrad` med en länk till `#vad-siffrorna-vilar-pa`.
3. `regler` som en lista. Varje rad har `TEXT.regel[nyckel].text(v)` och källorna som länkar under (`rel="nofollow"`, källans titel, `slag` och `datum`). Klasserna står en gång på `<ul>`.
4. **Påslagstabellen** står inte här. Den hör till brödtextens H2 om takarean: `<Tabellyta kolumner={3}>` med lutning (°), takytan större än bottenytan (%) och nockhöjd per meter halv bredd (m), en rad per `PASLAG_GRADER`. Raden för lutningen närmast läsarens vinkel markeras med fetstil, bara den. Rubrikerna är `TEXT.paslag.*`.

Vid `utanfor`: `darfor.utanfor(v)` och reglerna. Ingen tabell över ändarna.

### 4.5 Antagandetabellen

`ANTAGANDEN: { nyckel: string; varde: (i: TakbyteIndata) => string; typ: 'Källa' | 'Antagande' | 'Egen räkning'; kallor: Kallkod[] }[]` i modulen. `varde` byggs av konstanterna, aldrig för hand. `antagandenFor(r, i)` returnerar de rader som gäller svaret, i `ANTAGANDEN`s ordning. Sidan renderar dem som badrumsspecen 4.5, med kolumnerna Vad, Värde och Källa eller antagande, och under tabellen varje förekommande källa en gång som `<a href rel="nofollow">{titel}</a>, {slag}, {datum}`. **Här namnges förmedlarna, som förmedlare med datum.**

| Nyckel | Värdet visar | Typ | Källor | Visas när |
|---|---|---|---|---|
| `takarea` | A = P / cos v, längs lutningen | Egen räkning | – | alltid |
| `langs-lutningen` | ytan längs lutningen, inte vågrätt, i båda takräknarna | Antagande | TAKIVAST | alltid |
| `utsprang-lika` | pulpet: samma takfotsutsprång på låg och hög sida | Antagande | – | pulpet |
| `pris-<material>` | källornas tal för materialet, låg och hög, per källa | Källa | materialets | belopp, tak |
| `en-kalla` | materialet har en enda källa | Antagande | P1 | belopp, tak, en källa |
| `andel` | andelen arbete och den lägsta av källornas | Antagande | P1, P4 | belopp, tak |
| `tillagg` | `TILLAGG_KR` kr, räknas inte in | Källa | P1 | belopp, tak |
| `stallning-container` | ingår i källornas pris per m² | Källa | P1, P4, P5 | belopp, tak |
| `sadeltak-pris` | priserna gäller sadeltak på villa | Källa | P1, P4 | belopp, tak |
| `intervall` | 100 till 200 m², linjärt | Antagande | P1, P4, P5 | alltid |
| `rot-procent` | `ROT_PROCENT` procent av arbetet | Källa | SKV-ROT | belopp, tak |
| `rot-grans` | `ROT_TAK_KR` kr per person och år | Källa | SKV-ROT | belopp, tak |
| `rut-skatt` | rutavdrag och skatt vägs inte in | Antagande | – | belopp, tak |
| `cc` | `CC_STANDARD` mm, 600 och 900 förekommer | Källa | TRAGUIDEN | alltid |
| `takstol-gavel` | första och sista takstolen står i gavellivet | Antagande | – | alltid |
| `ingen-valm` | valmat tak och mansard räknas inte | Antagande | – | alltid |

Varje rad av typen Källa har minst en källa med `https`-adress.

### 4.6 Tillstånden

| Tillstånd | Adress (resten standard) | Vad sidan visar |
|---|---|---|
| Tomt | ingen query | standardsvaret för betong, 134 578 kr, utan varning |
| Ifyllt, spann | `?material=bandplat` | 135 659 kr till 314 026 kr, och tabellen över ändarna |
| Gränsen för rotavdraget | `?langd=14&bredd=10&material=bandplat` | utfall `tak`, med `kapat` i raden |
| Fel | `?langd=abc&vinkel=70` | fälten med läsarens värden och fel under Längd och Vinkel, och standardsvaret med varningen |
| Utanför | `?langd=10&bredd=7&takform=pulpet&vinkel=18&utsprang=0,4&gavel=0,3` | takarean 86,9 m² som stort tal, takstolarna och inga kronor |
| Nockhöjd | `?matt=nock&nock=2,3` | vinkeln 27,1° i `rad-geometri` |

---

## 5. Formelmodulen `src/lib/kalkyl/takavvattning.ts`

Ren modul. Den enda importen är från `./tak.ts`. Varje konstant står överst med `Källa:` (kod, titel, adress och datum ur `guider-hangrannor.md`) eller `ANTAGANDE:`.

### 5.1 Typer

```ts
export type Satt = 'hus' | 'yta';
export type Ranna = 100 | 125 | 150 | 190;
export type Stupror = 75 | 90 | 100 | 110 | 120 | 150;
export type Kallkod = 'T1' | 'T2' | 'T3' | 'P26' | 'P10' | 'L1' | 'L2' | 'PM' | 'LG' | 'BMI';

export interface TakavvattningIndata extends TakIndata { satt: Satt; ytaM2: number; rannaM: number; }
export type FelNyckel = TakFel | 'yta' | 'ranna';

export type Utfall = 'ok' | 'utanfor';
export type GorInte = 'utan-fall' | 'langre-an-10' | 'mindre-ror';
export type RegelNyckel =
  | 'yta-lutning' | 'ranna' | 'lindab' | 'stupror' | 'antal' | 'fall' | 'krokar' | 'plast' | 'over-250';

export interface Dimension { ranna: Ranna; stupror: Stupror; }

export type TakavvattningResultat =
  | { status: 'ok'; utfall: 'ok';
      takfall: 1 | 2;
      ytaTakfallM2: number;            // arean för ett takfall, längs lutningen
      rannlangdM: number;              // en takfot
      stuprorPerTakfall: number;       // n
      ytaPerRannfallM2: number;        // ytaTakfallM2 / n
      rannfallM: number;               // rannlangdM / n
      dim: Dimension;                  // RA Hus 21
      lindab: Ranna | null;            // Lindabs ränna när den är större än dim.ranna, annars null
      vagratt: Dimension | null;       // samma räkning på den vågräta arean; null vid satt = yta
      ssStupror: Stupror | null;       // SS 824031 ensidigt för ytaPerRannfallM2, bara för "Så räknar jag"
      fallMinMm: number;               // Math.ceil(rannfallM · FALL_MIN_MM_M)
      fallSjalvrensMmPerM: number | null;
      fallSjalvrensMm: number | null;  // Math.ceil(rannfallM · fallSjalvrensMmPerM)
      krokarPerTakfall: number;
      flodeLs: number;                 // REGNINTENSITET · ytaTakfallM2, bara för förklaring
      totalt: { stupror: number; krokar: number; rannmeterM: number };   // gånger takfall
      geometri: TakGeometri | null;    // null vid satt = yta
      gorInteDetHar: GorInte[]; regler: RegelNyckel[]; }
  | { status: 'ok'; utfall: 'utanfor'; takfall: 1 | 2; ytaTakfallM2: number; ytaPerRannfallM2: number;
      stuprorPerTakfall: number; geometri: TakGeometri | null; gorInteDetHar: GorInte[]; regler: RegelNyckel[]; }
  | { status: 'ogiltig'; fel: Partial<Record<FelNyckel, string>> };
```

### 5.2 Konstanter

| Namn | Värde | Märkning |
|---|---|---|
| `RANNA_RA` | `[[100, 75], [125, 125], [150, 200], [190, 250]]`, dimension och högsta takfallsyta i m² | Källa: T1 (RA Hus 21), P26 (Plannja 2026-2) |
| `RANNA_PLANNJA_2010` | `[[100, 75], [125, 125], [150, 200]]` och R125 rektangulär 275 som egen rad | Källa: P10 (Plannja 2010, RA 08 Hus). Äldre, visas bara i tabellen |
| `LINDAB_RANNA` | `100` under 50, `125` från 50 till 100, `150` över 100 (funktion `lindabRanna(a)`) | Källa: L1 (Lindab 2022-01-12), ordagrant i kommentaren |
| `RANNA_SS` | `[[100, 70], [125, 120], [150, 180]]` | Källa: T1 (SS 824031). Jämförelse |
| `STUPROR_RA` | `[[75, 80], [90, 125], [100, 180], [110, 230], [120, 300], [150, 375]]` | Källa: T2 (RA Hus), P26, P10 |
| `STUPROR_SS` | `[[75, 160], [90, 240], [100, 350], [110, 445], [120, 580]]`, ensidigt | Källa: T2 (SS 824031). Jämförelse |
| `STEG_87_90` | kommentar: 87 och 90 är samma steg, 110 och 111 är samma steg | ANTAGANDE, avvattningsunderlaget 3.2 |
| `MAX_YTA_RANNFALL_M2` | `250` | Källa: T1, P26 (största raden) |
| `REGNINTENSITET_L_S_M2` | `0.013` | Källa: L2, P10, T3 |
| `FALL_MIN_MM_M` | `2.5` | Källa: P26, L1, L2, T1, P10 |
| `FALL_SJALVRENS_MM_M` | `{ 100: 7, 125: 6, 150: 5 }`, ingen rad för 190 | Källa: T1 |
| `FALL_PLAST_MM_M` | `2` | Källa: PM ("ca. 2 mm/m"). Bara för regeln `plast` |
| `RANNLANGD_PER_STUPROR_M` | `10` | Källa: L1, P26 |
| `KROK_CC_M` | `0.6` | Källa: P26, L1, PM |
| `KROK_KANT_M` | `0.1` | Källa: P26, L1 |
| `SS_AR` | `null` | Året är inte bekräftat (B5) |
| `KALLOR` | `Record<Kallkod, KallaRef>` med titel, adress, slag (`tillverkare`, `branschhandbok`) och år eller datum ur `guider-hangrannor.md` och avvattningsunderlaget 1 (BMI: takavvattning.nu, odaterad, "läst 2026-09-28") | – |

### 5.3 Standard, gränser och räkningen

```ts
export const STANDARD: TakavvattningIndata = { ...TAK_STANDARD, satt: 'hus', ytaM2: 90, rannaM: 10 };
export const GRANSER = { ...TAK_GRANSER, ytaM2: [5, 500], rannaM: [1, 40] } as const;
```

Kommentar: huset är samma som i takbytet. 90 m² och 10 m är Plannjas exempel (P26 s. 10), som bara används när läsaren väljer `yta`. Gränserna för `yta` och `ranna` är ett ANTAGANDE (avvattningsunderlaget 3.4). Den övre ytgränsen är 500, inte 250, eftersom två stuprör delar arean. 250 per rännfall är utfallet `utanfor`, inte ett fel.

`tolkaQuery(q)`: `lasTak(q, STANDARD)` och dessutom `satt` (`hus` eller `yta`, annars standard), `yta` och `ranna` (saknas ger standard, tomt eller okänt ger `NaN`). `harIndata` när någon nyckel finns.

`raknaTakavvattning(i)`:

1. **Validering.** Vid `hus` körs `valideraTak(i, TEXT.fel)`. Vid `yta` valideras `yta` och `ranna` mot `GRANSER`. Bara det som räknas valideras.
2. **Arean och rännan.** Vid `hus`: `g = raknaTak(i)`, `takfall = g.takfall`, `ytaTakfallM2 = g.takareaPerTakfallM2` och `rannlangdM = g.rannlangdM`. Vid `yta`: `takfall = 1`, `ytaTakfallM2 = ytaM2`, `rannlangdM = rannaM` och `g = null`.
3. `n = Math.max(1, Math.ceil(rannlangdM / RANNLANGD_PER_STUPROR_M − 1e-9))`. `ytaPerRannfallM2 = ytaTakfallM2 / n`. `rannfallM = rannlangdM / n`.
4. Är `ytaPerRannfallM2 > MAX_YTA_RANNFALL_M2` blir svaret `utanfor`, med `regler: ['yta-lutning', 'antal', 'over-250']` och `gorInteDetHar: ['langre-an-10']`.
5. `dim.ranna` är den minsta i `RANNA_RA` där `ytaPerRannfallM2 ≤ gränsen`. `dim.stupror` är den minsta i `STUPROR_RA` där `ytaPerRannfallM2 ≤ gränsen`.
6. `lindab = lindabRanna(ytaPerRannfallM2) > dim.ranna ? lindabRanna(…) : null`. Lindabs gränser: `a < 50` ger 100, `50 ≤ a ≤ 100` ger 125 och `a > 100` ger 150.
7. `vagratt` vid `hus`: samma steg 5 på `g.projektionPerTakfallM2 / n`. `ssStupror`: den minsta i `STUPROR_SS` där `ytaPerRannfallM2 ≤ gränsen`.
8. Fallen: `fallMinMm = Math.ceil(rannfallM · FALL_MIN_MM_M − 1e-9)`. `fallSjalvrensMmPerM = FALL_SJALVRENS_MM_M[dim.ranna] ?? null`, och i så fall `fallSjalvrensMm = Math.ceil(rannfallM · den − 1e-9)`.
9. `krokarPerTakfall = Math.ceil((rannlangdM − 2 · KROK_KANT_M) / KROK_CC_M − 1e-9) + 1`.
10. `flodeLs = REGNINTENSITET_L_S_M2 · ytaTakfallM2`. `totalt = { stupror: n · takfall, krokar: krokarPerTakfall · takfall, rannmeterM: rannlangdM · takfall }`.
11. **gorInteDetHar**, i den här ordningen: `utan-fall`, `langre-an-10` och `mindre-ror`, alltid.
12. **regler**, i den här ordningen: `yta-lutning`, `ranna`, `lindab` (bara när `lindab` inte är `null`), `stupror`, `antal`, `fall`, `krokar` och `plast`.

### 5.4 Hjälpfunktioner och text

- `delbarQuery(i, g)`: `satt`, sedan `takQuery(i, g)` och sist `yta` och `ranna`, alltid alla, så att bytet av sätt i formuläret behåller båda talen.
- `takbyteQuery(i, g)`: `takQuery(i, g)`, bara vid `hus`, till länken mot takbytet.
- `mmText(n)` ger "100 mm". `m2Text` och `meterText` kommer ur tak.ts.
- `kortsvarVarden()`: räknar `satt: 'yta'` med 75, 125 och 200 m² och `rannaM` 10. Den returnerar dimensionerna, `FALL_MIN_MM_M`, självrensningen per dimension och `RANNLANGD_PER_STUPROR_M`, formaterade, och källornas år (`RA Hus 21`, `Plannja 2026`). Checklistans H2 0.
- `tabellRanna()` och `tabellStupror()`: raderna till tabellen i H2:n "Tabellen bakom" (6.2), byggda av konstanterna.
- `beskedVarden(r, i)`, `antagandenFor(r, i)`: som i takbytet.
- `TEXT` med samma regler som 3.7. Beskeden: `ok` säger vilken ränna och vilket stuprör läsaren ska köpa, och bär `dim.ranna` och `dim.stupror`. `utanfor` säger att läsaren ska fråga tillverkaren, och bär ytan. Nycklarna: `form.*`, `satt.<Satt>`, `takform.<Takform>`, `fel.*`, `spalt.*` (`etikett-ranna`, `och-stupror(v)`, `rad-antal(v)`, `rad-fall(v)`, `rad-krokar(v)`, `rad-yta(v)`, `rad-lindab(v)`, `pekrad`, `lank-sa-raknar-jag`, `lank-takbyte`, `lank-hangrannor`), `darfor.*` (`totalt(v)`, `utanfor(v)`, `kallrad`), `regel.<RegelNyckel>` (`kallor`: `yta-lutning` P26, PM, BMI; `ranna` T1, P26; `lindab` L1; `stupror` T2, T3; `antal` L1, P26; `fall` T1, P26, LG; `krokar` P26, L1; `plast` PM; `over-250` T1), `gorInte.<GorInte>` (`utan-fall`: under 2,5 mm/m gäller inte Lindabs garanti, LG; `langre-an-10`: mer än 10 m ränna till ett stuprör; `mindre-ror`: välj inte det smalare röret som SS-tabellen tillåter, eftersom smala rör fryser lättare, T3), `jamforelse.*` (stycket i "Så räknar jag" om SS 824031 och om den vågräta ytan, med `ssStupror` och `vagratt`), `tabell.*`, `antagande.*`, `steg`, `kortsvar(v)`, `skissAlt` och `skissBildtext`.

---

## 6. Takavvattningens formulär och sida

### 6.1 `src/components/kalkyl/TakavvattningForm.astro`

Samma props och regler som i 4.1, med `varden` för `langd`, `bredd`, `utsprang`, `gavel`, `vinkel`, `nock`, `yta` och `ranna`. `<form method="get" action="/rakna/takavvattning/">`.

```
┌ 311 px ───────────────────────────────┐
│ SÅ MÄTER DU (legend)                   │
│ ( ) Ur husets mått                     │  radio `satt`, en per rad, min-h-11
│ ( ) Jag vet takfallets yta             │
│                                        │
│ HUSET (legend)                         │  räknas vid satt = hus
│ Längd            Bredd                 │  grid-cols-2
│ Takfotsutsprång  Gavelutsprång         │
│ ( ) Sadeltak   ( ) Pulpettak           │
│ ( ) Vinkel     ( ) Nockhöjd            │
│ Vinkel           Nockhöjd              │  grid-cols-2
│ hjälp: räknaren tar ytan längs         │
│        lutningen, som tillverkarna     │
│                                        │
│ TAKFALLET (legend)                     │  räknas vid satt = yta
│ Takfallets yta   Rännans längd         │  grid-cols-2
│ [ 90    ] m²     [ 10    ] m           │
│ hjälp                                  │
│                                        │
│ [ Räkna ut ]                           │
└────────────────────────────────────────┘
```

- Båda grupperna står alltid med sina egna värden, och radioknappen avgör vilken som räknas, som vinkel och nock på fasadyta. Hjälpraden under `satt` säger det.
- **Kompakt** (inbäddningen i `/tak/hangrannor/` efter dimensionstabellen): bara gruppen TAKFALLET och `<input type="hidden" name="satt" value="yta">`. Läsaren har just läst tabellen per yta.

### 6.2 Sidan `src/pages/rakna/takavvattning.astro`

Som 4.2, med `SLUG = 'takavvattning'`, `UTKAST = true` och värdartikeln `/tak/hangrannor/` i kommentaren. Titeln börjar med "Takavvattning" eller "Hängränna och stuprör, dimension", aldrig med "Hängrännor" (checklistan 3).

**Ordningen på sidan:**

1. Sidhuvudet med varumärkesbilden.
2. Kortsvaret, `TEXT.kortsvar(kortsvarVarden())`.
3. Formuläret och spalten (6.3).
4. H2 "Därför blev svaret så" (6.4).
5. H2 "Gör inte det här".
6. H2 med hantverkarens rubrik, checklistans H2 1 "Tabellen bakom". Två tabeller i `<Tabellyta>`, byggda av `tabellRanna()` och `tabellStupror()`:
   - Rännan, `kolumner={4}`: dimension (mm), RA Hus 21 och Plannja 2026, Plannja 2010 (märkt äldre i kolumnrubriken) och Lindab 2022. Värdet är högsta takfallsyta i m², och Lindabs kolumn är ett intervall.
   - Stupröret, `kolumner={2}`: diameter (mm) och RA Hus 21, Plannja 2026 och 2010 (samma tal).
   - Källan står på en rad under varje tabell, aldrig som kolumn. SS 824031 står inte här.
   - Brödtexten är `TEXT SAKNAS`, med kommentaren att texten säger vilken tabell som är nyast och att den äldre står som jämförelse.
7. H2 "Så räknar jag": skissen när den finns, `TEXT.steg`, stycket `jamforelse` (SS 824031 och den vågräta ytan, med räknarens egna tal för läsarens tak), och H3 "Vad siffrorna vilar på" med antagandetabellen.
8. H2 "Läs vidare": `/tak/hangrannor/` och `/rakna/takbyte/`.
9. `<Faq>` med tre platshållare.

### 6.3 Resultatspalten

1. Standardvarningen, bara vid `ogiltig`.
2. Beskedet, med rubrik och rad.
3. Vid `ok`: `spalt['etikett-ranna']`, sedan `dim.ranna` i `text-siffra` med `<Markering>` och "mm" i `text-ingress`, och på raden under i `text-ingress` `och-stupror(v)` (stupröret i mm). Sedan `rad-antal`, `rad-fall` (minsta fall och självrensande fall i mm över rännfallets längd), `rad-krokar` och `rad-yta` (arean för ett takfall längs lutningen), var och en i `text-liten text-blyerts-2`.
4. `rad-lindab` när `lindab` inte är `null`, som en egen rad i `text-brod`, direkt under det stora talet.
5. Vid `utanfor`: ytan per rännfall som stort tal i m², och inga dimensioner.
6. `pekrad`, `lank-sa-raknar-jag`, `lank-takbyte` (vid `hus`, med `takbyteQuery`) och den delbara adressen.

**Spaltbudgeten är högst 700 tecken vid standard.**

### 6.4 "Därför blev svaret så"

`darfor.totalt(v)` (hela huset: stuprör, krokar och rännmeter, och att sadeltaket har två takfall), `darfor.kallrad`, och `regler` med källor som i 4.4. Ingen tabell i det här avsnittet.

### 6.5 Antagandetabellen

| Nyckel | Värdet visar | Typ | Källor | Visas när |
|---|---|---|---|---|
| `langs-lutningen` | ytan längs lutningen, inte vågrätt, i båda takräknarna | Antagande | P26, PM, BMI | alltid |
| `ranna-tabell` | RA Hus 21, 75, 125, 200 och 250 m² | Källa | T1, P26 | ok |
| `stupror-tabell` | RA Hus 21, 80 till 375 m² | Källa | T2 | ok |
| `rannfall-lika` | arean delas lika på n rännfall, var och en rännlängd / n | Antagande | – | alltid |
| `tio-meter` | 10 m ränna per stuprör | Källa | L1, P26 | alltid |
| `lage-ej` | stuprörets läge efterfrågas inte | Antagande | – | alltid |
| `steg-87-90` | 87 och 90, 110 och 111 är samma steg | Antagande | L2 | ok |
| `fall-min` | 2,5 mm/m | Källa | T1, P26 | ok |
| `fall-sjalvrens` | 7, 6 och 5 mm/m | Källa | T1 | ok |
| `krokar` | 600 mm c/c, 100 mm från kanten, samma vid fall åt båda håll | Antagande | P26, L1 | ok |
| `regn` | 0,013 l/s per m² i hela landet | Källa | L2, P10, T3 | ok |
| `ingen-valm` | valmat tak räknas inte | Antagande | – | alltid |
| `inga-kronor` | ingen materialkostnad förrän varje post har ett pris | Antagande | – | ok |

### 6.6 Tillstånden

| Tillstånd | Adress | Vad sidan visar |
|---|---|---|
| Tomt | ingen query | 100-ränna och 75-stuprör, två stuprör per långsida, 22 krokar |
| Lindab 50 till 75 | `?satt=yta&yta=75&ranna=10` | 100 mm och Lindab-raden (125) |
| Lindab 100 till 125 | `?satt=yta&yta=110&ranna=10` | 125 mm och Lindab-raden (150) |
| Fel | `?satt=yta&yta=abc&ranna=0` | fel under båda fälten och standardsvaret med varningen |
| Fel i den grupp som inte räknas | `?satt=yta&langd=abc` | inget fel, eftersom huset inte räknas |
| Utanför | `?satt=yta&yta=260&ranna=10` | ytan som stort tal och hänvisningen till tillverkaren |
| Pulpet | `?takform=pulpet&langd=10&bredd=7&vinkel=18&utsprang=0,4&gavel=0,3` | ett takfall, 86,9 m², två stuprör |

---

## 7. Testerna

Alla körs med `node --experimental-strip-types --test <fil>`. Facit är underlagens räkneexempel och egen räkning med formlerna ovan, kontrollräknade 2026-09-29. Areor jämförs med toleransen 0,01 och kronor exakt.

### 7.1 `scripts/test-kalkyl-tak.mjs`

| # | Indata | Facit |
|---|---|---|
| G1 | TAK_STANDARD (12, 9, 0,5, 0,4, 27°, sadel) | takarea 143,66; projektion 128; takfallslängd 5,612; nock 2,293; påslag 12,2 %; takfall 2; per takfall 71,83; rännlängd 12,8 |
| G2 | 12, 9, 0, 0, 27° | takarea 121,21; bottenyta 108 |
| G3 | 10, 8, 0,6, 0,3, 38° | takarea 123,75; takfallslängd 5,837; nock 3,125 |
| G4 | pulpet 6, 4, 0,3, 0,3, 10° | takarea 30,83; takfallslängd 4,671; nock 0,705; takfall 1 |
| G5 | sadel, matt nock, B 9, t 2,3 | vinkel 27,07° |
| G6 | pulpet 10, 7, 0,4, 0,3, 18° | takarea 86,93; nock 2,274; takfallslängd 8,201 |
| T1 | antalTakstolar(12, 1200 / 900 / 600) | 11 / 15 / 21 |
| T2 | antalTakstolar(10, 1200) och (12,6, 1200) | 10 och 12 |

- `paslagstabell()` mot takbytesunderlaget 2.3, alla tio raderna: faktor på fyra decimaler, procent på en decimal och tan på fyra decimaler.
- **Samma nock som fasadytan:** `nockUrVinkel('sadel', STANDARD.vinkelGrader, STANDARD.breddM)` ur `fasadyta.ts` är lika med tak.ts räkning, och `VINKELGRANSER` ur fasadyta är samma objekt som ur tak.ts.
- `nockGranser('sadel', 9)` ger [0,4, 7,7] (4,5 · tan 5° = 0,394 uppåt blir 0,4; 4,5 · tan 60° = 7,794 nedåt blir 7,7).
- `tillTal`: "12,5" ger 12,5, "12,5 m" 12,5, "27°" 27, "1 200" 1200 (också med hårt och smalt mellanslag), "2,3m" 2,3, "" NaN, "abc" NaN och `null` NaN.
- `lasTak`: tom adress ger TAK_STANDARD. Tomt `utsprang` ger 0. `takform=valmat` ger sadel. `matt=x` ger vinkel.
- `takQuery`: vid `matt=vinkel` skrivs `nock=2,29`, och rundturen `lasTak(takQuery(i, raknaTak(i)))` ger samma `raknaTak` för G1, G4 och G5.
- `valideraTak`: langd 2,9 ger fel, 40 ger inget fel och 40,1 ger fel. Sadel med vinkel 4,9 ger fel och 60 inget fel. Pulpet med vinkel 31 ger fel. Nock 0,3 med B 9 ger ett nockfel med gränserna 0,4 och 7,7. Nock "abc" ger `'nock-tal'`. Vid `matt=vinkel` ger nock "abc" inget fel.

### 7.2 `scripts/test-kalkyl-takbyte.mjs`

| # | Indata (resten STANDARD) | Facit |
|---|---|---|
| F1 | STANDARD (betong) | belopp; ettTal; kostnad 161 471; arbete 89 642; material 71 829; rot 26 893; att betala 134 578; takstolar 11 |
| F2 | material bandplat | lag: 155 150 / 64 969 / 90 181 / 19 491 / 135 659; hog: 359 144 / 150 392 / 208 752 / 45 118 / 314 026; belopp |
| F3 | material takpanneplat | lag kostnad 129 292, att betala 120 310; hog kostnad 215 487, att betala 200 516 |
| F4 | material tegel | kostnad 210 315; rot 26 893; att betala 183 422 |
| F5 | material papp | kostnad 110 233; arbete 55 164; att betala 93 684 |
| F6 | langd 14, bredd 10, bandplat | takarea 182,71; hog rot 50 000; utfall tak; kapat 7 384; att betala hog 406 787 |
| F7 | F6 med agare 2 | hog rot 57 384; utfall belopp |
| F8 | takpanneplat, rot 45 000 | rot 5 000 i båda ändarna; utfall tak |
| F9 | matt nock, nock 2,3 | vinkel 27,07; takarea 143,75; kostnad 161 575 |
| F10 | pulpet 10, 7, 0,4, 0,3, 18° | utfall utanfor, sida under, takstolar 10, inga belopp |
| F11 | langd 16, bredd 12, utsprang 0,5, gavel 0,4 | takarea 245,12, utanfor, sida over |
| F12 | `inomIntervall(100)`, `(200)`, `(99,99)` och `(200,01)` | sant, sant, falskt och falskt. `inomIntervall(a)` exporteras och används av `raknaTakbyte` |

- **Konstanterna mot underlaget:** `spann('bandplat')` är [1 080, 2 500], `spann('takpanneplat')` [900, 1 500], `spann('betong')` [1 124, 1 124], `spann('tegel')` [1 464, 1 464] och `spann('papp')` [767,33…, 767,33…]. `andelArbete` är 0,41875; 220/950; 93 600/168 600; 93 600/219 600; 57 600/115 100. `TILLAGG_KR` är 30 000 och `YTA_INTERVALL` [100, 200]. Inget material heter shingel.
- **Rotkonstanterna är importerade:** läs `takbyte.ts` som text. Den innehåller inte `50000`, `75000` eller `0.3` som literaler, och `raknaRotavdrag` importeras från `./rotavdrag.ts`.
- **Ogiltigt, ett test per rad:** langd "abc"; bredd 21; utsprang 1,6; cc 800; agare 3; rot −1; rot 50 001 med en ägare (texten innehåller "50 000"); rot 100 000 med två ägare ger ok; langd 2 och vinkel 70 samtidigt ger två fel.
- `tolkaQuery`: tom adress ger STANDARD och `harIndata: false`. `material=shingel` ger betong. "1 200" som `cc` ger 1200. Tomt `rot` ger 0.
- **Rundtur:** `tolkaQuery(delbarQuery(x, g))` ger samma resultat för F1, F2, F6, F9 och F10.
- `rotavdragQuery(F2)` ger `arbete=150392&material=208752&agare=1&rot=0`.
- `avvattningQuery(STANDARD)` börjar med `satt=hus` och innehåller `langd=12`.
- `kortsvarVarden()`: betong "1 124" och "134 578", bandplat "1 080–2 500", takarea "143,7", paslag27 "12,2".
- `antagandenFor`: F1 innehåller `en-kalla`, `tillagg` och `intervall` men inte `utsprang-lika`. F2 innehåller inte `en-kalla`. F10 innehåller `utsprang-lika` och ingen `pris-*`.
- `gorInteDetHar` är alltid de tre. `regler` för F6 innehåller `rot-slog-i`, och för F1 gör den inte det. F1 innehåller `en-kalla`, och F2 gör det inte.
- `TEXT`: varje `Utfall`, `GorInte`, `RegelNyckel`, `Material`, `Takform`, CC-värde och varje `ANTAGANDEN`-nyckel har en icke-tom sträng eller en funktion som ger en. `ANTAGANDEN`: varje rad av typen Källa har en källa med `https`-adress.

### 7.3 `scripts/test-kalkyl-takavvattning.mjs`

| # | Indata | Facit |
|---|---|---|
| A1 | STANDARD (hus) | takfall 2; yta per takfall 71,83; n 2; per rännfall 35,91; rännfall 6,4 m; ränna 100; stuprör 75; lindab null; fall 16 mm och 45 mm (7 mm/m); krokar 22; totalt 4 stuprör, 44 krokar, 25,6 m |
| A2 | yta 75, ranna 10 | ränna 100; stuprör 75; n 1; krokar 18; fall 25 och 70; lindab 125 (avvattningsunderlaget ex. 1) |
| A3 | yta 90, ranna 10 | ränna 125; stuprör 90; lindab null (ex. 2, Plannja) |
| A4 | yta 125, ranna 12 | n 2; per rännfall 62,5; ränna 100; stuprör 75; lindab 125 (ex. 3) |
| A5 | yta 200, ranna 16 | n 2; 100 per rännfall; ränna 125; stuprör 90; lindab null (ex. 5) |
| A6 | yta 162, ranna 18 | n 2; 81; ränna 125; stuprör 90 (ex. 6, tabellsvaret) |
| A7 | yta 260, ranna 10 | utanfor (ex. 7) |
| A8 | yta 110, ranna 10 | ränna 125; stuprör 90; lindab 150 |
| A9 | yta 250 och yta 250,1 med ranna 10 | 190 och stuprör 120; utanfor |
| A10 | gränserna: yta 50, 49,9, 75, 75,1, 80, 80,1 med ranna 10 | lindab 125 / null; ränna 100 / 125; stuprör 75 / 90 |
| A11 | hus 16, 10, 0,5, 0,4, 30° | per rännfall 53,35; ränna 100; lindab 125; vagratt ränna 100 och stuprör 75 (46,2 m²); krokar 29 |
| A12 | pulpet 10, 7, 0,4, 0,3, 18° | takfall 1; 86,93; n 2; 43,47; ränna 100; stuprör 75; krokar 19 |
| A13 | krokar med ranna 4 | 8 (ex. 9) |
| A14 | flöde, yta 125 | 1,625 l/s (ex. 8) |
| A15 | ranna 190: `FALL_SJALVRENS_MM_M[190]` | null, och fallSjalvrensMm null |

- `tolkaQuery`: "12,5" som `ranna` ger 12,5 (ex. 10). `satt=x` ger `hus`. Vid `satt=yta` ger `langd=abc` inget fel. Vid `satt=hus` ger `yta=abc` inget fel.
- Ogiltigt: yta 4, yta 501, ranna 0,5, ranna 41 och yta "abc" ger fel på rätt fält.
- `ssStupror` för A1 är 75, och för A6 (81 m²) är den också 75.
- Konstanterna mot underlaget: `RANNA_RA`, `STUPROR_RA`, `STUPROR_SS`, `RANNA_SS`, `FALL_MIN_MM_M` 2,5, `FALL_SJALVRENS_MM_M` och `RANNLANGD_PER_STUPROR_M` 10.
- **Samma yta som takbytet:** för STANDARD är `ytaTakfallM2 · takfall` lika med `raknaTakbyte(takbyte STANDARD).geometri.takareaM2`.
- `kortsvarVarden()`: 75 m² ger 100 och 75, 125 m² ger 125 och 90, 200 m² ger 150 och 110. Tabellraderna i `tabellRanna()` har fyra dimensioner och Plannja 2010 har tomt för 190.
- `TEXT`- och `ANTAGANDEN`-kontrollerna som i 7.2.

---

## 8. Varumärkesbilderna

Båda är 600 × 360 utan källfil, i logotypens stil som `varumarke/fasadyta.svg` och `varumarke/rotavdrag.svg`: konturer i `blyerts` 2 px med runda ändar, `tumstock` som enda fyllda färg, transparent bakgrund, ingen text, inga tal, och ett pennstreck i `penna` på 4,5 px under motivet som signatur. `role="img"`, en `aria-label` som beskriver motivet och en kommentar överst om motivet. Motivets bbox-kvot är 1,72 ± 0,05. Motivet fyller 90 till 94 procent av bredden och 88 till 90 procent av höjden och skalas med `transform` på det yttre `g`:et. Varje fil är under 12 kB. Tunnaste linjen är 1,4 i motivets skala. Linjer bakom något bryts där det går fram, aldrig med en pappersfylld yta.

### 8.1 `takbyte.svg`

- **Motiv:** en villa sedd rakt från långsidan. Taket är den största formen: ett brett takfall som en liggande parallelltrapets över väggen, med nocken som en rak linje överst och takfoten som skjuter ut förbi väggarna på båda sidor.
- **Det som byts:** takfallet är ritat som pannrader, med fyra till fem vågräta rader och korta lodräta skarvar i förband. **Den vänstra delen, ungefär två femtedelar av takfallet, är fylld med `tumstock`** och är det nya taket. Resten är bara konturer, det gamla. Gränsen mellan dem följer pannornas förband i trappsteg, inte en rak linje.
- Väggen är en rektangel med två fönster (rektangel med ett korsande spröjs) och en dörr. En skorsten står på takfallet till höger. Marken är en rak linje utan skraffering.
- Inga människor, ingen stege, ingen ställning, inga verktyg.
- Kvoten nås med husets längd, aldrig med tom mark.

### 8.2 `takavvattning.svg`

- **Motiv:** ett utsnitt av ett hushörn, sett rakt framifrån. Upptill finns takfotens kant som ett smalt band med två eller tre pannrader över, tvärs över bilden. Under kanten löper **hängrännan** hela vägen, ritad som ett halvrör i genomskärning vid den fria änden till vänster och som ett rör med vulst längs framkanten. Vid högra änden går **stupröret** ner: en omvikningskupa under rännan, två böjar in mot väggen och ett rakt rör ner till en utkastare strax ovanför marken.
- **Rännan och stupröret är fyllda med `tumstock`.** De är bildens ämne och den största formen tillsammans. Väggen bakom är en rak lodlinje till höger om stupröret, med två rörsvep som korta band runt röret.
- Rännkrokarna syns som tre eller fyra korta krokar över rännan. Marken är en rak linje, och utkastaren pekar ut över den.
- Inga droppar, inget vatten, inget regn och inga löv.
- Kvoten nås med rännans längd. Stupröret ger höjden.

Båda bilderna ska gå att skilja åt vid 343 px: takbytet är ett helt hus med ett gult takfall, och takavvattningen är ett gult rör i vinkel utan hus. Jag rendrar dem på 343 px och godkänner mot DESIGN.md avsnitt 7 innan de räknas som klara.

---

## 9. Budget och kontroller

- De tre nya testerna är gröna, och `test-kalkyl-fasadyta.mjs` och `test-kalkyl-rotavdrag.mjs` är gröna utan att ha ändrats.
- `npx astro check --minimumSeverity error` ger 0 fel.
- `npm run kontrollera`: **de enda nya felen får vara `TEXT SAKNAS`** i `takbyte.ts`, `takavvattning.ts`, `takbyte.astro` och `takavvattning.astro`. Utvecklaren listar felen före och efter.
- Mät med `npm run dev` och `curl`, med samma rensning som `scripts/budget-html.mjs --dev` (skript utom JSON-LD, stilblocken i `<head>` och `data-astro-source-*`). Sidorna finns inte i registret, så skriptet hittar dem inte. Mät därför med ett eget kommando i scratchpad och rör inte skriptet.
  - 0 `<script>` utöver JSON-LD och ingen `.js`-referens.
  - **Varje sida är högst 66 kB (67 584 byte)** i varje tillstånd i 4.6 och 6.6. Utvecklaren rapporterar talen i byte, och `/rakna/fasadyta/` mätt på samma sätt som jämförelse.
  - Med `TEXT SAKNAS` i alla textfält ska varje sida ligga **under 55 kB vid standard**. Då finns 11 kB kvar till kortsvar, brödtext (800 till 1 100 ord på takbytet, 500 till 800 på takavvattningen), regler och Faq. Ligger en sida över kommer utvecklaren tillbaka innan något annat görs.
- Spaltbudgeten: 800 tecken för takbytet och 700 för takavvattningen, vid standard.
- 375 px: ingen sidledsscroll utom inuti `<Tabellyta>`, alla fält 48 px, klickytorna för radioknapparna minst 44 px, fokusringen synlig, och varje fält har en etikett.

---

## 10. Publiceringsomgången (inte nu)

Görs när värdartiklarna publiceras, efter att hantverkaren har skrivit och läsaren och SEO har godkänt:

1. `UTKAST = false` på båda sidorna.
2. Registerposterna sist i `KALKYLATORER`, utan att andras poster flyttas:
   - `{ slug: 'takbyte', namn: <bär "byta tak kostnad">, rad: <…>, sasong: [3, 10], pelare: ['tak'] }`
   - `{ slug: 'takavvattning', namn: <bär "takavvattning">, rad: <…>, sasong: [4, 9], pelare: ['tak'] }`
3. `takbyte` och `takavvattning` i `MED_FORMULAR` i `Kalkylator.astro`. `<Kalkylator namn="takbyte" />` i kostnadsavsnittet på `/tak/plattak/` och `<Kalkylator namn="takavvattning" />` efter dimensionstabellen på `/tak/hangrannor/`.
4. `<Verktygskort kalkylator="takbyte" />` på `/tak/snorasskydd/` och `/tak/takstolar/`. **Snörasskyddssidan kan inte få kortet före registerposten.** `kontrollera-innehall.ts` stoppar en `<Verktygskort>` med en slug som inte finns i registret, också i ett utkast. Kortet läggs in i samma commit som registerposten.
5. En länk till `/rakna/takbyte/` i "Läs vidare" på `/rakna/fasadyta/` (checklistan 9).
6. Skisserna, med etiketter som hantverkaren skriver ordagrant innan jag specar dem i detalj:
   - `rakna/takbyte.svg`: husets gavel med bredd, takutsprång, lutning och takfallslängd utsatta. Det som pekar är takfallslängden. Nyckeltalet är takarean "143,7 m²" med gul markering. Alten ska ha orden takbyte och takarea.
   - `rakna/takavvattning.svg`: taket i planvy med rännor, stuprör och fall utsatta. Det som pekar är fallet mot stupröret. Nyckeltalet är "100 mm". Alten ska ha orden takavvattning och dimension.
   - Sedan `npm run illustrationer` och `npm run delningsbilder`.
7. `budget-html.mjs` behöver inget nytt, eftersom registerposterna tar med sidorna vid standard.

Faq-frågor som hantverkaren kan överväga, utan att upprepa avsnitten: valmtak (inte med i första versionen), om takstolarna måste bytas vid takbyte, och varför räknaren inte räknar snölast.

---

## 11. Frågor till koordinatorn och SEO och GEO-agenten

1. **Lindab-raden** (B5): SEO-beslut 2 säger att källorna är överens utom mellan 50 och 75 m². Enligt L1 vill Lindab ha 150 också över 100 och upp till 125 m², där RA Hus säger 125. Räknaren visar raden i båda intervallen. SEO bekräftar, eller beslutar att bara 50 till 75 ska visas. Det senare är en ändring i `lindabRanna` och ett test.
2. **Inga kronor i takavvattningen** (B5): SEO-beslut 3 bygger på att varje stålpost har en källa. Det har de inte, och standardhusets ränna och stuprör saknar båda pris. Kronorna kommer i en senare version, när underlag har hämtat pris med datum för ränna 100 till 190, stuprör 75 till 120, krokar, kupa, skarv, gavel, svep och utkastare, och när formuläret har ett fält för stuprörets höjd.
3. **Shingel** faller bort ur takbytet (B3), eftersom Byggstart är den enda källan och underlaget inte visar att priset gäller före rot. Underlag kan leta efter en källa som anger före rot.
4. **Takexperters tillägg** räknas inte in i summan (B3), eftersom P4 och P5 redan har etableringen i sina tal. Det står som en egen rad, som beslutet säger.
5. **Andelen arbete** är den lägsta av källornas tal (B3). Det gör att takpanneplåt får 23 procent arbete, efter Hantverkskollens tabell.
6. **SS 82 40 31:s år** är inte bekräftat. Checklistans fälla vill ha året med, och underlaget har inte hittat det. `SS_AR` är `null` tills SIS har kontrollerats.
7. **Valmtak** kommer inte med i första versionen (B2). SEO-beslutet lämnade frågan till UX.
