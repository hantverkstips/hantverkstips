# Spec: räknaren /rakna/badrum-kostnad/

UX och bygge-agenten, 2026-09-29. Gäller steg 1 till 4 i skillen nytt-verktyg plus varumärkesbilden. Steg 5 och 6 (registret och inbäddningen) och skissen görs i publiceringsomgången, se avsnitt 8. Underlaget är räknarunderlaget i `docs/briefer/faktablad/kunskap-tatskikt-badrum.md`, avsnitt A till H efter rubriken "Räknarunderlag" (här "underlaget"). Kraven kommer från `docs/briefer/seo-checklista-2026-09-29/raknare.md` (regel 1 till 4 överst och avsnittet om badrum-kostnad, här "checklistan") och `docs/SOKORDSANALYS.md` 8.3 och 8.9. Förebilderna i koden är `src/pages/rakna/fasadyta.astro` och `src/lib/kalkyl/fasadyta.ts` (all publik text i `TEXT`, beskeden som funktioner, `antagandenFor()`) och `src/lib/kalkyl/rotavdrag.ts`.

Utvecklaren gissar ingenting. Står något inte här gäller `docs/SPEC-SIDMALLAR.md` 4.7, och står det inte där frågar utvecklaren innan hen bygger.

**Inga produkter och inget reklamband** (checklistan 1 och 12, SOKORDSANALYS 8.6). `reklam={false}`.

**Utkast.** Sidan publiceras inte förrän värdartikeln `/badrum/tatskikt-badrum/` publiceras och hantverkarens text finns. Se 4.1: sidan svarar 404 i produktion så länge `UTKAST` är `true`, och den står inte i registret.

---

## 0. Godkännande av underlaget

Underlaget är **godkänt med besluten nedan**. Badrumsexperters kalkyl (BE) går ihop med egen räkning (underlaget B: 118 800 kr arbete, 90 000 kr material, 35 640 kr rot, 173 160 kr att betala) och är den enda källan som delar arbete och material per post. Därför är den modellens grund. Byggstart (BS) och Totalbyggarna (TB) används för mellannivån, containern och kontrollen av skalningen.

### B1. Posterna

SEO-beslutet 2026-09-29 säger rivning, tätskikt och kakel, VVS, el och inredning, plus container. Två av BE:s poster får ingen egen plats i den listan: förarbetena och målningen. Tas de bort hamnar summan 61 400 kr under källans, och räknaren lovar då för lite. Därför gäller:

| Post (nyckel) | BE:s poster | Timmar vid 5 kvm | Material vid 5 kvm | Skalar med golvytan |
|---|---|---|---|---|
| `rivning` | rivning | 32 | 0 | ja |
| `tatskikt-kakel` | förarbeten och plattsättning, plus kakel och klinker | 48 + 70 = 118 | 20 000 + 3 500 + 24 500 = 48 000 | ja |
| `vvs` | VVS | 12 | 6 000 | nej |
| `el` | el | 12 | 8 000 | nej |
| `malning` | målning | 16 | 3 000 | ja |
| `inredning` | montering av inredning, plus inredning, sanitet och armatur | 8 | enligt nivå (B2) | nej |
| `container` | ingen hos BE; TB | 0 | 5 000 (B4) | nej |

- `tatskikt-kakel` slår ihop BE:s förarbeten och plattsättning, eftersom BE lägger tätskiktet i dem (underlaget B, raden Tätskikt). Det står som en egen rad i antagandetabellen.
- `malning` är med som egen post, eftersom summan annars inte stämmer med källan. **Den kan inte väljas som egen insats**, se B5.
- Byggstädning tas inte med (SEO-beslutet). Resultatet säger att den tillkommer.

### B2. Nivåerna

Nivån ändrar bara inredningens material. Arbetet och de andra posterna är desamma.

- `enkel`: 25 000 kr. Källa BE ("standardvitvaror": toalett, handfat, badkar, duschkabin, skåp, armatur).
- `mellan`: 48 000 kr. Källa BS (16 000 kr armaturer plus 32 000 kr badkar och möbler, egna inköp).
- Ingen tredje nivå. Den saknar källa (underlaget D3).

### B3. Skalningen och intervallet (ändrat 2026-09-29 efter SEO-beslutet)

Beslutet står i `docs/briefer/seo-checklista-2026-09-29/raknare.md`, "Beslut efter bygget, 2026-09-29", punkt 3. Det ersätter den första versionen, som gav belopp för 4 till 6 kvm och skalade linjärt åt båda hållen.

- **Intervallet är 4 till 8 kvm, gränserna inräknade.** Utanför det visas inget belopp. 8 kvm är vår gräns, eftersom BS inte anger hur långt tillägget räcker. Det är ett ANTAGANDE och står i antagandetabellen.
- **4 till 5 kvm:** linjär nedskalning av de poster som skalar, med faktorn yta / 5. ANTAGANDE.
- **Över 5 kvm:** BS:s tillägg, 8 000 till 16 000 kr per extra kvadratmeter (Källa BS). Resultatet är ett spann med en nedre och en övre kant. Faktorn för de poster som skalar är `1 + (yta − 5) · tillägg / 150 600`, där 150 600 kr är BE:s skalande poster vid 5 kvm, 600 kr/h och ingen egen insats. Med standardvärdena blir summan exakt BE vid 5 kvm plus BS:s tillägg per kvadratmeter.
- **Tillägget delas på arbete och material** i samma proportion som BE:s skalande poster vid 5 kvm (ANTAGANDE, bekräftat vid granskningen). Det behövs för att rotavdraget ska gå att räkna. Tillägget följer läsarens timpris och egen insats.
- **Rotgränsen följer den övre kanten** (bekräftat): utfallet blir `tak` när gränsen slår i vid den övre kanten. Det som faller bort kan då vara ett spann som börjar på 0.
- **Länken till rotavdragsräknaren** får den övre kantens arbete och material (bekräftat), så att den inte lovar för lite.
- **Spann i texten** skrivs "A till B". Inne i ett tal står hårt mellanslag, och raden får bara brytas vid "till". I posttabellen står den övre kanten på egen rad, som "till B".

### B4. Containern

5 000 kr, TB:s övre kant ("bortforsling avfall 2 000–5 000", firma, 2026-03-30). Det finns ingen andra källa. Övre kanten är vald så att räknaren inte lovar för lite. **ANTAGANDE**, och posten märks så i posttabellen och i antagandetabellen. Containern räknas som material och ger inget rotavdrag (Skatteverket: inget avdrag för att "forsla bort").

### B5. Egen insats (ändrat 2026-09-29 efter SEO-beslutet)

Läsaren kan välja **rivning** och **bortforsling** (SEO-beslutet, punkt 1). Monteringen av inredningen går inte längre att välja.

- Rivning: postens arbete blir 0 kr.
- Bortforsling: containern står kvar som 5 000 kr, ANTAGANDE. Den har inget arbete och ger inget rotavdrag, så valet ändrar inga tal. Det ändrar texten: `regel.container` och `steg[2]` säger att containern kostar också när du kör själv.
- Tätskikt, kakel, VVS, el och målning kan aldrig väljas (SOKORDSANALYS 8.3, BBV 26:1 § 1.5, Säker Vatten 2026:1, Elsäkerhetsverket och MVK). Målningen är en egen post med ett godkänt våtrumssystem utfört av målare (SEO-beslutet, punkt 2).

### B6. Timpriset

600 kr/h, BE:s timpris. Det används för alla poster och räknas inte upp till dagens nivå (SEO-beslutet). Att det är inklusive moms är ett ANTAGANDE (utdraget från Hantverkarpriser säger "including VAT"). Sonochfars timpriser, 500 kr/h och 687,50 kr/h före rot, står bara som jämförelse i antagandetabellen och blandas inte in i talet.

Läsaren kan skriva in ett eget timpris, till exempel från en offert. Det gäller då alla poster med arbete.

### B7. Rotavdraget

Det räknas genom att `raknaRotavdrag()` i `src/lib/kalkyl/rotavdrag.ts` anropas, och ingen del av den skrivs om (checklistan regel 4). Indata:

```ts
raknaRotavdrag({
  arbetskostnadKr: arbeteKr,                    // alla posters arbete; containern har inget
  materialkostnadKr: materialKr + containerKr,
  antalAgare: i.agare,
  utnyttjatRotKr: i.rotKr,
  utnyttjatRutKr: 0,
  skattKr: null,
})
```

Rutavdrag och skatt vägs inte in. Det står i antagandetabellen, och spalten länkar till rotavdragsräknaren med värdena ifyllda, så att den som vill kan väga dem där. Att rivning av ytskikt ger rot är en tolkning av "riva väggar" hos Skatteverket (underlaget G) och en rad i antagandetabellen.

---

## 1. Filer

| Fil | Gör |
|---|---|
| `src/lib/kalkyl/renovering.ts` | skapas (namnet står i checklistan och delas senare med `/rakna/kok-kostnad/`) |
| `scripts/test-kalkyl-badrum-kostnad.mjs` | skapas |
| `src/components/kalkyl/BadrumKostnadForm.astro` | skapas |
| `src/pages/rakna/badrum-kostnad.astro` | skapas |
| `src/assets/illustrationer/rakna/varumarke/badrum-kostnad.svg` | skapas (9.1) |

**Rörs inte:** `src/lib/kalkyl/register.ts`, `src/components/ui/Kalkylator.astro`, `src/lib/pelare.ts`, `src/components/ui/Ikon.astro`, `src/assets/brand/`, allt under `src/content/`, `src/layouts/Bas.astro`, `src/styles/global.css`, `src/lib/kalkyl/rotavdrag.ts`, `stil.ts`, `verktygsbild.ts`, `strukturdata.ts`, `scripts/budget-html.mjs`, `scripts/kontrollera-innehall.ts`, och alla filer i `docs/briefer/spec-pelare-badrum-2026-09-29.md`. Pelaren byggs parallellt av en annan utvecklare. Räknarsidan behöver inte pelaren.

Arbetaren kör inte `npm run build` och committar inte.

---

## 2. Formelmodulen `src/lib/kalkyl/renovering.ts`

Ren modul utan Astro-importer. Den enda tillåtna importen, med `.ts`-ändelse så att testet kan köra filen med node:

```ts
import { raknaRotavdrag, kronor, ROT_PROCENT, ROT_TAK_KR, SKATTEVERKET_ROTAVDRAGET, SKATTEVERKET_GER_RATT } from './rotavdrag.ts';
```

Varje konstant står namngiven överst med kommentaren `Källa:` (titel, adress, datum som i underlaget A) eller `ANTAGANDE:`. Modulen är byggd för poster som data, så att köket kan få en egen `KOK_POSTER` senare. Bygg ingenting för köket nu.

### 2.1 Typer

```ts
export type PostNyckel = 'rivning' | 'tatskikt-kakel' | 'vvs' | 'el' | 'malning' | 'inredning' | 'container';
export type Niva = 'enkel' | 'mellan';
export type Egen = 'rivning' | 'bortforsling';
export type Agare = 1 | 2;

export interface KallaRef {
  kod: 'BE' | 'BS' | 'TB' | 'SF' | 'HK' | 'SKV-ROT' | 'SKV-RATT' | 'BBV' | 'SV' | 'ELSAK';
  titel: string;      // källans egen titel, ur underlaget
  url: string;        // https
  slag: 'förmedlare' | 'firma' | 'myndighet' | 'branschregel';
  datum: string;      // "senast ändrad 2024-04-06", "2026-03-30", "hämtad 2026-09-28"
}

export interface PostDef {
  nyckel: PostNyckel;
  timmarVidRef: number;                 // vid REFERENSYTA_KVM
  materialVidRef: number | Record<Niva, number>;
  skalar: boolean;
  egen: Egen | null;                    // vilket val som nollar postens arbete
  antagande: boolean;                   // true bara för container
  kallor: KallaRef['kod'][];            // minst en; den första är den som talet kommer från
}

export interface BadrumIndata {
  ytaKvm: number;
  niva: Niva;
  egen: Egen[];                         // unik, i ordningen i EGEN_VAL
  agare: Agare;
  rotKr: number;                        // utnyttjat rot i år, alla ägare tillsammans
  timprisKr: number;
}

export type FelNyckel = 'yta' | 'agare' | 'rot' | 'timpris';

export interface PostRad {
  nyckel: PostNyckel;
  arbeteKr: number;                     // 0 när läsaren gör posten själv
  materialKr: number;
  timmar: number;                       // efter skalning, före egen insats
  egenInsats: boolean;
}

export type Utfall = 'belopp' | 'tak' | 'utanfor';
export type GorInte = 'tatskikt-sjalv' | 'rot-pa-allt' | 'riva-sjalv';
export type RegelNyckel =
  | 'poster' | 'skalning' | 'niva' | 'container' | 'stad'
  | 'rot-arbete' | 'rot-tak' | 'rot-slog-i' | 'egen-insats' | 'intervall';

export type BadrumResultat =
  | {
      status: 'ok';
      utfall: 'belopp' | 'tak';
      poster: PostRad[];                // i POSTER-ordning, container sist
      arbeteKr: number;                 // summan av posternas arbete
      materialKr: number;               // summan av posternas material utom container
      containerKr: number;
      foreRotKr: number;                // arbete + material + container
      rotKr: number;                    // avdragKr ur raknaRotavdrag
      raktRotKr: number;                // raktAvdragKr
      kapatKr: number;                  // kapatKr
      attBetalaKr: number;              // foreRot − rot
      andelArbeteProcent: number;       // Math.round(arbete / foreRot · 100)
      perKvmKr: number;                 // vad en kvadratmeter till kostar före rot, med läsarens egen insats
      gorInteDetHar: GorInte[];
      regler: RegelNyckel[];
    }
  | {
      status: 'ok';
      utfall: 'utanfor';
      sida: 'under' | 'over';
      gorInteDetHar: GorInte[];
      regler: RegelNyckel[];
    }
  | { status: 'ogiltig'; fel: Partial<Record<FelNyckel, string>> };
```

Exporter utöver typerna: `REFERENSYTA_KVM`, `YTA_INTERVALL`, `TIMPRIS_KR`, `CONTAINER_KR`, `INREDNING_KR`, `POSTER`, `KALLOR`, `EGEN_VAL`, `NIVA_VAL`, `PRISER_HAMTADE`, `STANDARD`, `GRANSER`, `ANTAGANDEN`, `TEXT`, `tolkaQuery`, `raknaBadrumKostnad`, `delbarQuery`, `rotavdragQuery`, `antagandenFor`, `beskedVarden`, `kortsvarVarden`, `kvmText`, `kronor` (återexport).

### 2.2 Konstanter

| Namn | Värde | Märkning |
|---|---|---|
| `REFERENSYTA_KVM` | `5` | Källa: BE och BS, båda exemplen är 5 kvm |
| `YTA_INTERVALL` | `[4, 6]` | ANTAGANDE, med skälen i B3 i kommentaren, också talen 6,1 och 7,1 procent |
| `TIMPRIS_KR` | `600` | Källa: BE, senast ändrad 2024-04-06. Kommentar: inte uppräknat, momsen är ett ANTAGANDE (B6) |
| `CONTAINER_KR` | `5000` | ANTAGANDE: TB:s övre kant, 2 000 till 5 000 kr, 2026-03-30 (B4) |
| `INREDNING_KR` | `{ enkel: 25000, mellan: 48000 }` | Källa: BE (enkel) och BS (mellan), B2 |
| `POSTER` | tabellen i B1 som `PostDef[]` | Källa per post: BE. Stöd enligt nedan |
| `PRISER_HAMTADE` | `'2026-09-28'` | Dagen underlaget läste källorna |

`POSTER[].kallor`, med den första som talets källa:

| Post | kallor |
|---|---|
| `rivning` | BE, BS, TB |
| `tatskikt-kakel` | BE, BS, TB, HK |
| `vvs` | BE, BS, TB |
| `el` | BE, BS, TB |
| `malning` | BE, BS |
| `inredning` | BE, BS |
| `container` | TB |

`KALLOR: Record<KallaRef['kod'], KallaRef>` med adresserna ur underlaget A och faktabladet avsnitt 1 och 4: BE, BS, TB, SF (`https://sonochfar.se/`, firma, "läst 2026-09-28"), HK, SKV-ROT (`SKATTEVERKET_ROTAVDRAGET`), SKV-RATT (`SKATTEVERKET_GER_RATT`), BBV (BBV 26:1-pdf:en, branschregel, 2026), SV (Säker Vatten 2026:1-pdf:en, branschregel, 2026), ELSAK (Elsäkerhetsverket, installation av golvvärme, "granskad 2026-02-03"). Titlarna är källornas egna och skrivs av utvecklaren ur underlaget. **TB och SF är samma firma.** Det står i kommentaren, och de räknas aldrig som två källor i någon text.

`EGEN_VAL: readonly Egen[] = ['rivning', 'bortforsling']`. `NIVA_VAL: readonly Niva[] = ['enkel', 'mellan']`.

### 2.3 Standardvärden

```ts
export const STANDARD: BadrumIndata = {
  ytaKvm: 5, niva: 'enkel', egen: [], agare: 1, rotKr: 0, timprisKr: TIMPRIS_KR,
};
```

Kommentar: källornas badrum. En ägare av samma skäl som i `rotavdrag.ts` (det försiktiga svaret). Standard ger 213 800 kr före rot, 35 640 kr i rot och 178 160 kr att betala.

### 2.4 Gränser

```ts
export const GRANSER = {
  ytaKvm: [1, 30],        // ANTAGANDE: fältets rimlighet. Belopp ges bara inom YTA_INTERVALL
  timprisKr: [300, 1500], // ANTAGANDE: fältets rimlighet
  rotKr: [0, ROT_TAK_KR], // per ägare; taket i fältet är ROT_TAK_KR · agare
} as const;
```

Inklusive. En yta inom `GRANSER.ytaKvm` men utanför `YTA_INTERVALL` är **inte ett fel**. Den ger `utfall: 'utanfor'`.

### 2.5 `tolkaQuery(q: URLSearchParams): { indata: BadrumIndata; harIndata: boolean }`

| Nyckel | Fält | Värden | Saknas | Tomt | Okänt |
|---|---|---|---|---|---|
| `yta` | ytaKvm | tal | standard | NaN | NaN |
| `niva` | niva | `enkel`, `mellan` | standard | standard | standard |
| `egen` | egen | `rivning`, `bortforsling`, flera gånger (`getAll`) | `[]` | ignoreras | ignoreras |
| `agare` | agare | `1`, `2` | standard | standard | NaN, som ger fel |
| `rot` | rotKr | tal | standard | 0 | NaN |
| `timpris` | timprisKr | tal | standard | standard | NaN |

- Tal tolkas med decimalkomma, mellanslag (också hårt) som tusentalsavgränsare, och ett efterhängt `kvm`, `m2`, `m²`, `kr` eller `kr/h` tas bort. Skriv en egen `tillTal`; den i `rotavdrag.ts` exporteras inte och ska inte röras.
- `egen` dedupliceras och sorteras i `EGEN_VAL`s ordning.
- `harIndata` är sant när någon av nycklarna finns.

### 2.6 `raknaBadrumKostnad(i: BadrumIndata): BadrumResultat`

**Validering.** Alla fel samlas. Resultatet blir `ogiltig` om minst ett fel finns. Feltexterna är funktioner i `TEXT.fel` som får gränserna som tal.

- `yta`: NaN eller utanför `GRANSER.ytaKvm` ger fel.
- `agare`: annat än 1 eller 2 ger fel.
- `timpris`: NaN eller utanför gränserna ger fel.
- `rot`: NaN, under 0 eller över `ROT_TAK_KR · agare` ger fel (texten får taket för det antalet ägare).

**Utanför.** Är ytan giltig men under `YTA_INTERVALL[0]` blir svaret `utanfor` med sidan `under`, och över `YTA_INTERVALL[1]` blir det `utanfor` med sidan `over`. `regler: ['intervall', 'skalning']`, `gorInteDetHar: ['tatskikt-sjalv']`. Inga belopp räknas.

**Räkningen, i den här ordningen.** Inget avrundas förrän per post i steg 2.

1. `faktor = skalar ? ytaKvm / REFERENSYTA_KVM : 1`.
2. För varje post i `POSTER`:
   - `timmar = timmarVidRef · faktor`
   - `egenInsats = post.egen !== null && i.egen.includes(post.egen)`
   - `arbeteKr = egenInsats ? 0 : Math.round(timmar · timprisKr)`
   - material: för `inredning` är det `INREDNING_KR[niva]`, för `container` `CONTAINER_KR`, och annars `Math.round(materialVidRef · faktor)`
3. `arbeteKr` är summan av posternas arbete. `materialKr` är summan av posternas material utom containern, och `containerKr` är containerns material. `foreRotKr = arbete + material + container`.
4. Rot enligt B7. `rotKr = avdragKr`, `raktRotKr = raktAvdragKr`, `kapatKr = kapatKr`, `attBetalaKr = foreRotKr − rotKr`. Använd **inte** `attBetalaKr` ur rotavdragsmodulen; räkna det här, så att summan alltid går ihop med posterna (samma tal, men en källa för summan).
5. `utfall = begransatAv === 'procent' ? 'belopp' : 'tak'`.
6. `perKvmKr = Math.round(Σ över skalande poster (arbete + material) / ytaKvm)`. Med läsarens egen insats, före rot.
7. `andelArbeteProcent = Math.round(arbeteKr / foreRotKr · 100)`.
8. **gorInteDetHar**, i den här ordningen: `tatskikt-sjalv` alltid; `rot-pa-allt` alltid; `riva-sjalv` när `egen` innehåller `rivning`.
9. **regler**, i den här ordningen: `poster`, `skalning`, `niva`, `container`, `stad`, `rot-arbete`, `rot-tak`, `rot-slog-i` (bara vid `tak`) och `egen-insats` (bara när `egen` inte är tom).

### 2.7 Hjälpfunktioner

- `kronor(n)` återexporteras ur `rotavdrag.ts`. Den skriver vanliga mellanslag. **Sidan** sätter talen i `whitespace-nowrap`, så att "178 160" aldrig bryts.
- `kvmText(n)`: heltal utan decimal, annars en decimal med komma. 5 blir "5", 4.5 blir "4,5".
- `delbarQuery(i): URLSearchParams`: nycklarna i ordningen `yta`, `niva`, `egen` (en per val), `agare`, `rot`, `timpris`, med talen i decimalkomma. `rot` och `timpris` tas alltid med.
- `rotavdragQuery(r, i): URLSearchParams`: `arbete`, `material` (material + container), `agare`, `rot`. Nycklarna är desamma som `tolkaQuery` i `rotavdrag.ts` läser. Bara vid `belopp` och `tak`.
- `kortsvarVarden()`: räknar `STANDARD` med ytan 4 och 5 och båda nivåerna, och returnerar `{ enkel4, enkel5, mellan4, mellan5 }` som `{ foreRot, rot, attBetala }` i formaterade kronor, plus `andelArbete5` (procent vid 5 kvm, enkel) och `hamtat`. Kortsvaret byggs av de talen och skrivs aldrig för hand.
- `beskedVarden(r, i)`: `{ utfall, attBetala, foreRot, rot, kapat, arbete, material, container, yta, min, max, sida, agare, hamtat }`, alla tal formaterade.
- `antagandenFor(r, i)`: se 4.5.

### 2.8 Publika strängar

All text läsaren ser och som modulen äger står i **ett** objekt, `export const TEXT`, där varje värde är `'TEXT SAKNAS: <nyckel>'` tills hantverkaren har skrivit det, med en kommentar per nyckel om när den visas och vad den ska säga. Funktioner returnerar `` `TEXT SAKNAS: <nyckel>` ``. Inga publika strängar står i komponenten eller sidan, utom de två gränssnittstexterna (standardvarningen och delatexten, ordagrant ur nytt-verktyg) och de fasta rubrikerna "Därför blev svaret så", "Gör inte det här", "Så räknar jag", "Vad siffrorna vilar på" och "Läs vidare".

**Beskeden.** `TEXT.besked[utfall].rubrik(v)` och `.rad(v)` får `BeskedVarden`. Varje rubrik är en mening med ett verb som säger vad läsaren ska göra.

| Utfall | Rubrik (bär) | Rad |
|---|---|---|
| `belopp` | Vad läsaren ska räkna med att betala. Bär `attBetala` | Säger inte samma sak som rubriken. Till exempel hur mycket av summan som är arbete, eller att offerten ska ha samma poster |
| `tak` | Samma sak, bär `attBetala` | Att gränsen för rotavdraget stoppar `kapat` kr, och vad två ägare eller betalning efter nyår gör |
| `utanfor` | Vad läsaren ska göra i stället: begära offert. Bär `yta` och intervallet | Att källorna bara räknar på badrum från `min` till `max` kvm, så räknaren visar inget belopp för ett rum som är `sida`. Kort |

Övriga nycklar, alla `TEXT SAKNAS`:

- `form.*`: legender, etiketter och hjälprader, se avsnitt 3. Ordet "tak" får inte stå ensamt där det kan betyda innertak eller rotavdragets gräns (nytt-verktyg: ord med två betydelser). Gränsen för rotavdraget heter "gräns" i etiketter och hjälprader.
- `niva.<Niva>`: radioetiketterna. Etiketten ska säga vad som ingår (toalett, handfat och dusch mot badkar och möbler), inte bara "enkel".
- `egen.<Egen>`: kryssrutornas etiketter.
- `post.<PostNyckel>`: postens namn i tabellen. `tatskikt-kakel` bär orden tätskikt och kakel (sidofraserna "kakla badrum pris" och "tätskikt badrum pris", checklistan 2).
- `postEgen`: markeringen i arbetscellen när läsaren gör posten själv (ett eller två ord).
- `postAntagande`: markeringen efter containerns namn (ett ord).
- `fel.*`: `yta(min, max)`, `agare`, `rot(max)`, `timpris(min, max)`.
- `spalt.*`: `etikett-betala`, `rad-summa(foreRot, rot)`, `rad-delning(arbete, material, container)`, `rad-kallor(hamtat)`, `pekrad`, `lank-rotavdrag`, `lank-sa-raknar-jag`.
  - `rad-kallor` är den korta raden under beloppet. Den ska säga tre saker: att priserna är förmedlares och firmors snitt, att de hämtades `hamtat` och att byggstädningen tillkommer och huset kan avvika. En mening, högst två. Förmedlarna nämns inte vid namn (checklistans fälla).
- `darfor.*`: `tabell-post`, `tabell-arbete`, `tabell-material` (kolumnrubrikerna, enheten "kr" i rubriken), `summa`, `rot(v)`, `betala(v)`, `per-kvm(v)`, `kallrad` (raden under tabellen som pekar ner till "Vad siffrorna vilar på"), `utanfor(v)`.
- `regel.<RegelNyckel>`: `{ text: (v) => string, kallor: KallaRef['kod'][] }`. Källorna är data, texten saknas. `kallor` per nyckel: `poster` BE; `skalning` BE, BS; `niva` BE, BS; `container` TB, SKV-RATT; `stad` SKV-RATT; `rot-arbete` SKV-ROT, SKV-RATT; `rot-tak` SKV-ROT; `rot-slog-i` SKV-ROT; `egen-insats` SKV-ROT, BBV, ELSAK; `intervall` BE, BS. **Förmedlarna får inte nämnas vid namn, varken i `text` eller i länkarna under regeln** (checklistans fälla). Sidan visar bara källor som inte är förmedlare under en regel. Blir inga kvar visas `darfor.kallrad` som länk till `#vad-siffrorna-vilar-pa`. Rättat vid granskningen 2026-09-29.
- `gorInte.<GorInte>`: `tatskikt-sjalv` (BBV § 1.5: kvalitetsdokument kan inte utfärdas för eget arbete, pekar till `/badrum/tatskikt-badrum/`), `rot-pa-allt` (rot bara på arbete, inte material eller container; får inte ha samma meningar som `rotavdrag.ts`), och `riva-sjalv` (riv ytskikten men lämna golvbrunn, rör och el åt firmorna; Säker Vatten 4.4.5 och Elsäkerhetsverket).
- `antagande.<nyckel>`: kolumnen Vad i antagandetabellen, se 4.5.
- `steg`: "Så räknar jag", en lista som följer 2.6 steg 1 till 4, med tal som byggs av konstanterna.
- `kortsvar(v)`: tre till fem meningar, byggda av `kortsvarVarden()`. Vad 4 och 5 kvm kostar i enkel och mellan, hur stor del som är arbete, vad rotavdraget blir, och källorna som "förmedlare och en firma" med datum. En `<Markering>` runt ett tal.
- `skissAlt`, `skissBildtext`: sparas till publiceringsomgången.

Testerna låser nycklarna och att varje värde är en icke-tom sträng. Påståenden om ordalydelsen skrivs som `{ todo: 'text' }` tills texten finns.

---

## 3. Formuläret `src/components/kalkyl/BadrumKostnadForm.astro`

Props som `RotavdragForm`: `indata?`, `varden?` (`{ yta, rot, timpris }` som de skrevs), `fel?`, `kompakt?`, `idPrefix?`, `knappText?` (standard "Räkna ut"). Klasser bara ur `stil.ts`. Ingen klient-JS. `<form method="get" action="/rakna/badrum-kostnad/">`. Id via `id(namn)` med `idPrefix`. Namnen är query-nycklarna.

### 3.1 Layout på 375 px

Innerbredden i det linjerade papperet är 311 px. Allt står i en kolumn.

```
┌ 311 px ───────────────────────────────┐
│ BADRUMMET (legend)                     │
│ Golvyta                                │  etikett
│ [ fält                    ] kvm        │  48 px, max-w-40, enheten som span
│ hjälp: mät golvet, räkna med duschen   │  bara full
│                                        │
│ INREDNINGEN (legend)                   │
│ ( ) enkel: etikett med innehåll        │  radio, en per rad, min-h-11
│ ( ) mellan: etikett med innehåll       │
│                                        │
│ DET HÄR GÖR DU SJÄLV (legend)          │
│ [ ] rivningen                          │  kryssruta, en per rad, min-h-11
│ [ ] bortforslingen av avfallet           │
│ hjälp: tätskikt, kakel, VVS och el     │  alltid, också kompakt
│        går inte att välja, och varför  │
│                                        │
│ ÄGARE OCH ROTAVDRAG (legend)           │
│ ( ) En   ( ) Två                       │  radio `agare`, flex-wrap gap-x-4
│ Rotavdrag ni redan använt i år         │
│ [ fält                    ] kr         │
│ hjälp                                  │  bara full
│                                        │
│ Timpris                                │  bara full
│ [ fält                    ] kr/h       │  max-w-40
│ hjälp: från en offert, annars 600      │
│                                        │
│ [ Räkna ut ]                           │
└────────────────────────────────────────┘
```

- Varje grupp är en `<fieldset>` med synlig `<legend>`. Varje talfält har `<label for>` ovanför, `type="text"`, `inputmode="decimal"` (rot `inputmode="numeric"`; timpris `decimal`, eftersom 687,5 ska gå att skriva, rättat 2026-09-29), `FALT_KLASS`, och enheten som `<span>` efter fältet. `rot` har `placeholder="0"`.
- Fel står under fältet i `FEL_KLASS` med id `{idPrefix}{nyckel}-fel` och `aria-describedby` på fältet. Fältet får `ramKlass(true)`. Har fältet både hjälprad och fel står båda id:na i `aria-describedby`, och hjälpraden står kvar. `fel.agare` står under radioknapparna och kopplas med `aria-describedby` till båda.
- Hjälpraden under egen insats har id och kopplas till båda kryssrutorna med `aria-describedby`. Den står också i kompakt form, eftersom den bär gränsen (checklistans fälla).
- Talfälten får sina värden ur `varden`, som de skrevs. Valen kommer ur `indata`.
- **Kompakt:** inga hjälprader utom den under egen insats, och inget timprisfält. Det som inte renderas skickas inte och tas ur `STANDARD`. Ingen artikel bäddar in formuläret i dag. Propen finns för mönstrets skull.

---

## 4. Sidan `src/pages/rakna/badrum-kostnad.astro`

Som `fasadyta.astro`: `export const prerender = false`, `Astro.locals.sidtyp = 'verktyg'`, `Cache-Control: public, s-maxage=3600, stale-while-revalidate=86400` på alla svar, `reklam={false}`, `bred={true}`, brödsmulor Hantverkstips / Räkna själv / `VERKTYGSNAMN`, `ogBild={verktygsDelningsbild(SLUG)}`, `<StrukturData slot="head" data={verktyg({ url, namn: VERKTYGSNAMN, beskrivning: BESKRIVNING })} />`. `FAQPage` bara när Faq har frågor.

```ts
const SLUG = 'badrum-kostnad';
/* Utkast: sidan svarar 404 i produktion och noindex i dev tills värdartikeln
   /badrum/tatskikt-badrum/ publiceras och hantverkarens text finns. Sätts till
   false i publiceringscommiten, samtidigt som registerposten läggs till. */
const UTKAST = true;
const VERKTYGSNAMN = 'TEXT SAKNAS: verktygsnamn';
const BESKRIVNING = 'TEXT SAKNAS: beskrivning';   // 120 till 155 tecken, checklistan 4
const titel = 'TEXT SAKNAS: titel';               // högst 44 tecken, checklistan 3
const H1 = 'TEXT SAKNAS: h1';                     // checklistan 5
const INGRESS = 'TEXT SAKNAS: ingress';
```

### 4.1 Flöde och utkast

```ts
if (UTKAST && import.meta.env.PROD) {
  return new Response(null, { status: 404, headers: { 'X-Robots-Tag': 'noindex' } });
}
const q = Astro.url.searchParams;
const { indata } = tolkaQuery(q);
const resultat = raknaBadrumKostnad(indata);
const fel = resultat.status === 'ogiltig' ? resultat.fel : {};
const visatIndata = resultat.status === 'ogiltig' ? STANDARD : indata;
const visat = raknaBadrumKostnad(visatIndata);   // alltid ok
```

Vill utvecklaren hellre använda `Astro.rewrite('/404')` går det bra, om statusen blir 404. Utvecklaren visar det med ett anrop mot `astro build` följt av den byggda servern, eller förklarar varför det inte går att köra lokalt och visar koden. `noindex={UTKAST}` till `Bas`.

Vid `ogiltig` står fälten kvar med läsarens värden och felen under, och spalten visar standardsvaret med standardvarningen överst. Varningen och delatexten står ordagrant som i nytt-verktyg. Den delbara adressen är `new URL('/rakna/badrum-kostnad/?' + delbarQuery(visatIndata), Astro.site ?? Astro.url)` i ett skrivskyddat fält, som på `fasadyta.astro`.

### 4.2 Ordningen på sidan

1. Sidhuvudet som på fasadyta: H1 och ingress i 7/12 och varumärkesbilden i 5/12 från 1024 px, och under ingressen på mobil. `alt=""`, `fetchpriority="high"`, inget `loading="lazy"`.
2. `<Faktaruta variant="kortsvar">` med `TEXT.kortsvar(kortsvarVarden())` och en `<Markering>`.
3. `<div class="linjerat …">` med formuläret och spalten (4.3), som på fasadyta.
4. H2 "Därför blev svaret så" (`id="darfor-blev-svaret-sa"`) (4.4).
5. H2 "Gör inte det här": raderna ur `gorInteDetHar` som stycken.
6. Tre H2 med hantverkarens brödtext, checklistans H2 1 till 3, i den här ordningen. Rubrikerna är `TEXT SAKNAS` (konstanter i sidan). Brödtexten står direkt som markup i sidan: en `<section>` per H2 med `<p>TEXT SAKNAS: …</p>`, och klasserna för länkarna står en gång på `<section>` (`[&_a]:lank`-mönstret eller `.lank` på `<a>`, som på fasadyta). Kommentaren i varje sektion säger vad den ska innehålla och vilka länkar den kräver:
   - "Vad som gör priset": posterna, vilka som är arbete och vilka som är material.
   - "Vad du kan göra själv och vad det sparar": bär "renovera badrum billigt". Länkar till `/badrum/tatskikt-badrum/` (gränsen) och `/badrum/fogar-badrum/` (det billigaste sättet att fräscha upp).
   - "Rotavdraget för badrummet": två ägare, gräns som redan är använd, att material inte ger avdrag. Länkar till `/rakna/rotavdrag/`.
7. H2 "Så räknar jag" (`id="sa-raknar-jag"`): skissen `<Illustration namn="rakna/badrum-kostnad" …>` **bara när filen finns** (`verktygsillustration(SLUG)`, som fasadyta), sedan `TEXT.steg` som numrerad lista och H3 "Vad siffrorna vilar på" (`id="vad-siffrorna-vilar-pa"`) med antagandetabellen (4.5).
8. H2 "Läs vidare": `/badrum/tatskikt-badrum/`, `/rakna/rotavdrag/`, `/badrum/fogar-badrum/`. Länktexterna är `TEXT SAKNAS`.
9. `<Faq>` med tre till fem frågor (`TEXT SAKNAS`). Utvecklaren lägger tre platshållare.

### 4.3 Resultatspalten

`mt-8 border-t border-linje pt-6 lg:mt-0 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8`, som på fasadyta. Uppifrån:

1. Standardvarningen, bara vid `ogiltig`.
2. Beskedet: `rubrik(beskedVarden(visat, visatIndata))` i H3-stil som `<p>`, och `rad(…)` under i `text-brod`.
3. Vid `belopp` och `tak`:
   - `spalt['etikett-betala']` i etikettstil. Sedan `kronor(attBetalaKr)` i `text-siffra` med `<Markering>`, och "kr" i `text-ingress`, på en baslinje i `whitespace-nowrap tabular-nums`.
   - `rad-summa` (före rot och rotavdraget) och `rad-delning` (arbete, material, container), i `text-liten text-blyerts-2`.
   - `rad-kallor` i `text-liten text-blyerts-2`.
4. Vid `utanfor`: inget tal, bara beskedet.
5. `pekrad` till `#darfor-blev-svaret-sa`, länken `lank-sa-raknar-jag` till `#sa-raknar-jag`, vid `belopp` och `tak` länken `lank-rotavdrag` till `/rakna/rotavdrag/?` + `rotavdragQuery(visat, visatIndata)`, och sist den delbara adressen.

Alla tal står med `&nbsp;` mot sin enhet, i `tabular-nums`. Det står inga tabeller i spalten och ingen sidledsscroll på 375 px. **Spaltbudget: högst 700 tecken synlig text vid standardvärdena**, exklusive den delbara adressen. Utvecklaren rapporterar talet.

### 4.4 "Därför blev svaret så"

Vid `belopp` och `tak`:

1. **Posttabellen** i `<Tabellyta kolumner={3}>`: kolumnerna `darfor.tabell-post`, `darfor.tabell-arbete` och `darfor.tabell-material`. En rad per post i `poster`, containern sist med `postAntagande` efter namnet. Arbetscellen vid egen insats visar `0` följt av `postEgen`. Sist kommer en summarad (`darfor.summa`) i fetstil, där containern ingår i materialkolumnen. Talen står utan "kr" (enheten står i kolumnrubriken), högerställda, med `tabular-nums whitespace-nowrap`. Klasserna står en gång på `<table>` som varianter (`[&_td]:…`, `[&_th]:…`). Bara det som skiljer raderna står på `<tr>` eller `<td>`.
2. Under tabellen `darfor.kallrad` med länk till `#vad-siffrorna-vilar-pa`, och sedan `darfor.rot(v)`, `darfor.betala(v)` och `darfor.per-kvm(v)` som tre korta stycken.
3. `regler` som en lista. Varje rad har `TEXT.regel[nyckel].text(v)` och källorna som länkar under (`rel="nofollow"`, källans titel, `slag` och `datum`). Klasserna står en gång på `<ul>`.

Vid `utanfor`: `darfor.utanfor(v)` och reglerna `intervall` och `skalning`. Ingen tabell.

### 4.5 Antagandetabellen

`ANTAGANDEN: { nyckel: string; varde: (i: BadrumIndata) => string; typ: 'Källa' | 'Antagande'; kallor: KallaRef['kod'][] }[]` i modulen. `varde` byggs av konstanterna, aldrig för hand. `antagandenFor(r, i)` returnerar de rader som gäller svaret, i `ANTAGANDEN`s ordning. Sidan renderar dem i `<Tabellyta kolumner={3}>` med kolumnerna Vad, Värde och Källa eller antagande (typ plus källornas kod upplöst till titel utan länk, med semikolon emellan). Under tabellen står varje förekommande källa en gång, som `<a href rel="nofollow">{titel}</a>, {slag}, {datum}`. **Här namnges förmedlarna, som förmedlare med datum** (SEO-beslutet). Tabellens klasser står en gång på `<table>`.

| Nyckel | Värdet visar | Typ | Källor | Visas när |
|---|---|---|---|---|
| `post-rivning` | 32 h, 0 kr material vid 5 kvm | Källa | BE, BS, TB | belopp, tak |
| `post-tatskikt-kakel` | 118 h, 48 000 kr | Källa | BE, BS, TB, HK | belopp, tak |
| `post-vvs` | 12 h, 6 000 kr | Källa | BE, BS, TB | belopp, tak |
| `post-el` | 12 h, 8 000 kr | Källa | BE, BS, TB | belopp, tak |
| `post-malning` | 16 h, 3 000 kr | Källa | BE, BS | belopp, tak |
| `post-inredning` | 8 h, och material enligt nivån | Källa | BE (enkel) eller BS (mellan), och den som gäller | belopp, tak |
| `tatskikt-i-forarbeten` | tätskiktet ligger i BE:s förarbeten och plattsättning | Antagande | BE | belopp, tak |
| `andel-arbete` | arbete och material delas som hos BE, egen räkning ur BE:s poster | Källa | BE | belopp, tak |
| `timpris` | 600 kr/h, inte uppräknat | Källa | BE | timpris = standard |
| `timpris-moms` | inklusive moms | Antagande | BE | timpris = standard |
| `timpris-jamforelse` | 500 och 687,50 kr/h före rot | Källa | SF | timpris = standard |
| `eget-timpris` | läsarens timpris på alla poster | Antagande | – | timpris ≠ standard |
| `skalning` | linjär med golvytan för rivning, tätskikt och kakel, målning; referens 5 kvm | Antagande | BE, BS | alltid |
| `intervall` | 4 till 8 kvm | Antagande | BE, BS | alltid |
| `container` | 5 000 kr, övre kanten av 2 000 till 5 000 | Antagande | TB | belopp, tak |
| `stad` | ingår inte, saknar belopp | Antagande | – | belopp, tak |
| `ingen-dyr-niva` | ingen nivå över mellan | Antagande | – | belopp, tak |
| `rivning-rot` | rivning av ytskikt ger rot | Antagande | SKV-RATT | belopp, tak, och rivning inte egen insats |
| `rot-procent` | `ROT_PROCENT` procent | Källa | SKV-ROT | belopp, tak |
| `rot-grans` | `ROT_TAK_KR` kr per person och år | Källa | SKV-ROT | belopp, tak |
| `rut-skatt` | rutavdrag och skatt vägs inte | Antagande | – | belopp, tak |

`STANDARD` får ingen rad. Varje rad av typen Källa har minst en källa med `https`-adress.

---

## 5. Registret (publiceringsomgången, inte nu)

Läggs till av koordinatorn i publiceringscommiten, när `UTKAST` sätts till `false`. Posten står sist i `KALKYLATORER`, efter den som är sist då:

```ts
{
  slug: 'badrum-kostnad',
  namn: '<hantverkarens namn, bär "renovera badrum kostnad">',
  rad: '<hantverkarens rad>',
  /* Checklistan 1: september till mars. Toppen för frasen är september och oktober. */
  sasong: [9, 3],
  pelare: ['badrum'],
},
```

`src/lib/pelare.ts` har redan `badrum` i arbetskopian (pelarspecen). Registerposten får inte gå in före den.

---

## 6. Testet `scripts/test-kalkyl-badrum-kostnad.mjs`

`node --experimental-strip-types --test scripts/test-kalkyl-badrum-kostnad.mjs`. Kronor stämmer exakt, eftersom varje post avrundas i 2.6. Facit är underlagets räkneexempel, och egen räkning med formlerna i 2.6, som jag har kontrollräknat 2026-09-29.

### 6.1 Fallen

**Ändrat 2026-09-29.** Fallen nedan är skrivna för den första versionen. Efter SEO-beslutet gäller testfilen, som har 58 tester: F7 (6 kvm) och F4 räknas med BS:s tillägg och ger spann, F10 och F11 har flyttats till 3,9 och 8,1 kvm, F6 gäller rivning och bortforsling, och 6.3 ersätts av testet att standard plus en kvadratmeter ger BE plus 8 000 och 16 000 kr före rot.

| # | Indata (resten STANDARD) | Facit |
|---|---|---|
| F1 | STANDARD (tom adress) | utfall belopp; arbete 118 800; material 90 000; container 5 000; före rot 213 800; rot 35 640; att betala 178 160; per kvm 30 120; andel arbete 56 |
| F1b | F1 utan container | arbete + material = 208 800, rot 35 640, `foreRot − container − rot` = 173 160, underlaget F1 (BE:s egen totalkostnad) |
| F1c | F1, posterna | rivning 19 200 / 0; tatskikt-kakel 70 800 / 48 000; vvs 7 200 / 6 000; el 7 200 / 8 000; malning 9 600 / 3 000; inredning 4 800 / 25 000; container 0 / 5 000 |
| F2 | agare 2 | rot 35 640 (underlaget F2) |
| F3 | rot 30 000 | rot 20 000, utfall tak, kapat 15 640 (underlaget F5) |
| F4 | yta 6, timpris 1 000 | arbete 231 200; rot 50 000; utfall tak; kapat 19 360 |
| F4b | F4 med agare 2 | rot 69 360, utfall belopp (underlaget F4, två gränser) |
| F5 | niva mellan | material 113 000; före rot 236 800; att betala 201 160 |
| F6 | egen rivning och montering | arbete 94 800; rot 28 440; före rot 189 800; att betala 161 360; per kvm 26 280; poster rivning och inredning har egenInsats sant och arbete 0 |
| F7 | yta 6 | arbete 138 720; material 100 200; före rot 243 920; rot 41 616; att betala 202 304 |
| F8 | yta 4 | arbete 98 880; material 79 800; före rot 183 680; rot 29 664; att betala 154 016 |
| F9 | yta 4,5 | tatskikt-kakel arbete `Math.round(106,2 · 600)` = 63 720; material 43 200 |
| F10 | yta 3,9 | utfall utanfor, sida under, inga belopp |
| F11 | yta 6,1 | utfall utanfor, sida over |
| F12 | yta 4 och yta 6 | inte utanfor (gränserna inräknade) |
| F13 | timpris 687,5 | arbete 136 125 (198 h · 687,5), underlaget F7 |

### 6.2 Ogiltigt, ett test per rad

| Indata | Fel på |
|---|---|
| yta 0,5; yta 31; yta "abc"; yta tom | `yta` |
| agare 3 | `agare` |
| rot −1; rot 50 001 med en ägare | `rot`, och texten innehåller "50 000" |
| rot 100 000 med två ägare | ok |
| timpris 299; timpris 1 501 | `timpris` |
| yta 31 och timpris 2 000 samtidigt | båda |

### 6.3 Skalningen mot BS (B3)

För yta 4 och 6: `|före rot(yta) − (213 800 + 16 000 · (yta − 5))| / (213 800 + 16 000 · (yta − 5)) < 0,075`. För yta 3 och 8 (räknat med en intern hjälpfunktion eller genom att tillfälligt räkna utan intervallet) är skillnaden över 0,15. Den kontrollen visar varför intervallet slutar där det gör. Exportera en ren `raknaPoster(i)` utan intervallkontroll om det behövs för testet.

### 6.4 Övrigt

- Konstanterna mot underlaget: `TIMPRIS_KR` 600, `CONTAINER_KR` 5 000, `INREDNING_KR`, `REFERENSYTA_KVM` 5, `YTA_INTERVALL` [4, 6]. Timmarna i `POSTER` summerar till 198 och materialet vid enkel nivå till 90 000.
- Rotkonstanterna är importerade: `renovering.ts` innehåller inte talen `50000`, `0.3` eller `30` som literaler för rot (läs filen som text och kontrollera att `ROT_TAK_KR` och `raknaRotavdrag` importeras från `./rotavdrag.ts`).
- `tolkaQuery`: tom adress ger `STANDARD` och `harIndata: false`. "4,5 kvm" tolkas. "1 000 kr/h" tolkas. `niva=lyx` ger enkel. `egen=tatskikt` ignoreras. `egen=bortforsling&egen=rivning&egen=rivning` ger `['rivning', 'bortforsling']`. `agare=3` ger fel. Tom `rot` ger 0 och tom `timpris` ger 600.
- Rundtur: `tolkaQuery(delbarQuery(x))` ger samma indata för STANDARD, F3, F5, F6, F9 och F13.
- `rotavdragQuery(F1)` ger `arbete=118800&material=95000&agare=1&rot=0`. `tolkaQuery` i `rotavdrag.ts` läser den till samma arbete och material.
- `kortsvarVarden()`: enkel5 attBetala "178 160", mellan5 "201 160", enkel4 "154 016", mellan4 "177 016", andelArbete5 56.
- `TEXT`: varje `Utfall`, `GorInte`, `RegelNyckel`, `PostNyckel`, `Niva`, `Egen` och varje `ANTAGANDEN`-nyckel har en icke-tom sträng eller en funktion som ger en. Rubriken för F1 och F4 innehåller `attBetala`, och `spalt['rad-kallor']` innehåller datumet (som `{ todo: 'text' }` tills texten finns).
- `antagandenFor`: F1 innehåller `container`, `stad`, `timpris`, `intervall` och `rivning-rot` men inte `eget-timpris`. F13 innehåller `eget-timpris` men inte `timpris`. F6 innehåller inte `rivning-rot`. F10 innehåller `skalning` och `intervall` och ingen `post-*`.
- `ANTAGANDEN`: varje rad av typen Källa har en källa med `https`-adress. Varje `PostDef.kallor` har minst en kod, och koden finns i `KALLOR`.
- `gorInteDetHar`: F1 ger `['tatskikt-sjalv', 'rot-pa-allt']` och F6 lägger till `riva-sjalv`. `regler` för F3 innehåller `rot-slog-i`, och för F1 gör den inte det.

---

## 7. Budget och kontroller

- Testet grönt, och `scripts/test-kalkyl-rotavdrag.mjs` grönt oförändrat.
- `npx astro check --minimumSeverity error`: 0 fel.
- `npm run kontrollera`: **de enda felen får vara `TEXT SAKNAS` i de fyra nya filerna under `src/`**, plus det som redan fanns före (pelararbetet). Utvecklaren listar felen.
- Mät med `npm run dev` och `curl`, och skala HTML:en som `scripts/budget-html.mjs --dev` gör (skript utom JSON-LD, stilblocken i `<head>`, `data-astro-source-*`). Räknaren finns inte i registret, så skriptet hittar den inte. Mät med samma rensning i ett eget kommando i scratchpad, och rör inte skriptet:
  - 0 `<script>` utöver JSON-LD och ingen `.js`-referens.
  - **Hela sidan högst 66 kB (67 584 byte)** vid standard, vid `?yta=5&niva=mellan&egen=rivning&egen=bortforsling&agare=2&rot=10000&timpris=750` och vid `?yta=3`. Utvecklaren rapporterar alla tre talen i byte, och storleken på `/rakna/rotavdrag/` mätt på samma sätt som jämförelse.
  - Sidan ska hålla gränsen med hantverkarens text. Med `TEXT SAKNAS` i alla textfält ska den ligga **under 56 kB**, så att 10 kB finns kvar till kortsvar, brödtext om 700 till 1 000 ord, regler och Faq. Över det kommer utvecklaren tillbaka innan något annat görs.
- Spalten har högst 700 tecken vid standard.
- Varumärkesbilden under 12 kB.
- 375 px: ingen sidledsscroll utom inuti `<Tabellyta>`, alla fält 48 px, klickytorna för radio och kryssrutor minst 44 px, fokusringen synlig, och varje fält har en etikett.

---

## 8. Publiceringsomgången (inte nu)

Görs i samma omgång som `/badrum/tatskikt-badrum/` publiceras, efter att hantverkaren har skrivit och läsaren och SEO har godkänt:

1. `UTKAST = false`.
2. Registerposten (avsnitt 5).
3. `<Verktygskort kalkylator="badrum-kostnad" />` i värdartikelns kostnadsavsnitt (checklistan 9). Ingen `<Kalkylator>`-inbäddning och ingen rad i `MED_FORMULAR`, eftersom checklistan ber om ett kort.
4. Skissen (9.2), och sedan `npm run illustrationer` och `npm run delningsbilder`.
5. `EXTRA` i `scripts/budget-html.mjs` behöver inget. Registerposten tar med sidan vid standard.

---

## 9. Bilderna

### 9.1 Varumärkesbilden, nu

`src/assets/illustrationer/rakna/varumarke/badrum-kostnad.svg`, 600 × 360. Den har ingen källfil. Logotypens stil som `varumarke/rotavdrag.svg` och `varumarke/fasadyta.svg`: konturer i `blyerts` 2 px med runda ändar, `tumstock` som enda fyllda färg, transparent bakgrund, ingen text, inga tal, och ett pennstreck i `penna` på 4,5 px under motivet som signatur. `role="img"` och en `aria-label` som beskriver motivet, plus en kommentar överst om motivet, som i de andra.

- **Motiv:** ett badkar på fötter, sett rakt från sidan, framför en kakelvägg. Väggen är ett rutnät av kakelplattor bakom och ovanför karet, med rak överkant och raka sidor. **En del av väggen, ett sammanhängande block om ungefär en tredjedel av plattorna, är fylld med `tumstock`**: det nya kaklet. Resten är bara konturer. Det säger "renovering" och "badrum" utan ett ord.
- Karet är den största formen, med kant, fyra fötter och en blandare med pip på väggen ovanför karets ena ände. Kakelväggen är den näst största. Båda ska gå att känna igen var för sig vid 343 px.
- Golvet är en rak linje under fötterna. Ingen skraffering (det är inte mark).
- Rutnätet har högst 5 × 4 plattor, så att fogarna inte blir gröt vid 343 px. Linjerna bakom karet bryts där karet går fram, och ingen pappersfylld yta används.
- Inga pyttedetaljer: inga droppar, inga handdukar, ingen duschslang, ingen avloppspropp.
- Motivets bbox-kvot 1,72 ± 0,05. Motivet fyller 90 till 94 procent av bredden och 88 till 90 procent av höjden, och skalas med `transform` på det yttre `g`:et. Kvoten nås med kakelväggens bredd, aldrig med tomt golv.
- Under 12 kB.

Jag rendrar den på 343 px och godkänner mot DESIGN.md avsnitt 7 innan den räknas som klar.

### 9.2 Skissen, i publiceringsomgången

`src/assets/illustrationer-kallor/rakna/badrum-kostnad.svg`, 600 × 360, blyerts på linjerat papper, Caveat 500 i 24 px. Badrummet i planvy 2,0 × 2,5 m (5 kvm) med dörr, dusch eller kar, toalett, handfat och golvbrunn som enkla former. Måtten är byglar, "2,0 m" och "2,5 m". Posterna är utmärkta med korta etiketter. **Det som pekar** är golvbrunnen och tätskiktets kant längs väggarna, i `penna`. **Nyckeltalet** "178 160 kr" står med gul markering. Etiketterna skriver hantverkaren ordagrant innan jag specar skissen i detalj. Alt under 125 tecken med orden renovera badrum och kostnad (checklistan 8).

---

## 10. Godkännandekriterier (min granskning)

1. Varje konstant i 2.2 och 2.4 är namngiven med Källa eller ANTAGANDE. Ingen räkning står i en `.astro`-fil. Rot räknas genom `raknaRotavdrag` och ingen rotkonstant är kopierad.
2. Testet är grönt med 6.1 till 6.4, rotavdragets test är grönt oförändrat, och astro check har 0 fel.
3. Fältnamnen, query-nycklarna och id:na är exakt som i 2.5 och 3. En delad adress ger samma svar som formuläret.
4. Tillstånden: tom adress, ifyllt, ogiltigt (fälten står kvar, felet under rätt fält, standardsvaret med varningen), utanför (under och över), tak och egen insats.
5. 375 px: formuläret, spalten och posttabellen utan sidledsscroll i sidan, spalten högst 700 tecken, fokusringen synlig, och varje fält har en etikett.
6. Budgeten i avsnitt 7.
7. Varumärkesbilden mot 9.1.
8. `UTKAST` är `true`, och ingen fil utanför avsnitt 1 är ändrad.

---

## 11. Till hantverkaren

Allt som är `TEXT SAKNAS` i `renovering.ts` och i `badrum-kostnad.astro`: `VERKTYGSNAMN`, `BESKRIVNING`, `titel`, H1, ingress, kortsvaret, beskeden, spaltens rader, formulärets legender, etiketter och hjälprader, nivå- och egen-etiketterna, postnamnen, feltexterna, "Därför blev svaret så" (tabellrubriker, kallrad, rot, betala, per kvm, utanför, regeltexterna), de tre raderna i Gör inte det här, stegen i "Så räknar jag", antagandetabellens Vad-kolumn, de tre H2:ornas rubriker och brödtext (700 till 1 000 ord med länkarna i 4.2), länktexterna i Läs vidare, och Faq med tre till fem frågor. Senare också namn och rad i registret och skissens etiketter, alt och bildtext. Kraven på title, description och H1 står i checklistan 3 till 5.

## 12. Till koordinatorn

- **Målningen som egen insats** (B5) strider mot 8.3 efter ändringen 2026-09-29. Jag har tagit bort den. SEO och GEO-agenten bekräftar, eller säger att checklistans H2 2 ska ändras.
- **Intervallet** är 4 till 8 kvm efter SEO-beslutet 2026-09-29, med BS:s tillägg över 5 kvm (B3).
- **Målningen är en egen post** (B1), trots att SEO-beslutets lista inte nämner den, eftersom summan annars ligger 12 600 kr under källans (förarbetena ligger i tätskikt och kakel).
