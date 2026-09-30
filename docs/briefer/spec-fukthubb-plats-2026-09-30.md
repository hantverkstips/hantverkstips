# Spec: platsfältet och fukthubben efter plats, 2026-09-30

Beställd av koordinatorn efter SEO:s klusterplan (`docs/INNEHALLSARKITEKTUR.md` avsnitt 9, UX och bygge punkt 1, och `docs/SOKORDSANALYS.md` 12.5). Klar före omgång B. Specad av UX och bygge.

## 1. Vad som byggs

Hubben `/fukt/` ordnas efter plats i huset: åtta H2 i fast ordning, under varje en tät lista över sidorna, ordnade efter de fyra vanliga grupperna. Alla andra hubbar ser ut exakt som i dag. Platsen är ett valfritt frontmatterfält som bara har betydelse i en pelare som har ett platsregister, i dag bara Fukt.

Skälet till en lista i stället för kortrutnät: med 29 artiklar, tre kategorisidor, en jämförelse, sju grannsidor och sex räknare blir det runt 46 poster. Artikelkortet väger 1,0 kB i HTML och ungefär 420 px på mobil; 46 kort blir 46 kB plus skalet (12 kB) och 19 000 px sida. Listraden väger runt 0,25 kB och 60 px. Det är budgeten och 375 px som avgör, inte smak. Registret sist på hubben var redan en sådan lista (DESIGN.md 5.2, före 2026-09-17).

## 2. Beslut

| Fråga | Beslut |
|---|---|
| Fältets namn | `plats` |
| Tillåtna värden | `kallare`, `krypgrund`, `vind`, `garage`, `badrum`, `fonster`, `luften`, `hela-huset`, i den ordningen, definierade i `src/lib/plats.ts` per pelare |
| Var fältet finns | guider, kunskap, jämförelser och kategorier, valfritt. Inte på tester (de visas inte på hubben) |
| Sidor utan plats | Hamnar under Hela huset, sist. Ingen sida försvinner ur hubben för att fältet saknas. `npm run kontrollera` varnar för en guide eller kunskapssida i Fukt utan plats |
| Räknare | Nytt valfritt fält `plats` i `src/lib/kalkyl/register.ts`. Utan plats: Hela huset. Visas som listrad med etiketten "Räkna själv" sist under sin plats |
| Kategorisidor | Fältet `plats` i kategorifilen. Utan plats: Hela huset. Står först i Välj rätt under sin plats |
| Sidor i andra pelare | Listan `grannsidor` i `src/content/pelare/fukt.mdx`: `{ id, plats }`. Kortet får pelarens korta namn i etiketten. Sidan flyttar inte |
| Tester | Visas inte på hubben, som i dag. De nås via kategorisidan |
| Ordning inom en plats | Hitta felet (problemguide, kunskap), Välj rätt (kategori, sedan köpguide och jämförelse), Gör det själv (projektguide), Räkna. Inom gruppen pelarens egna sidor före grannsidorna, sedan nyast först; räknare i registrets ordning |
| Tom plats | Visas inte |
| Hopp till plats | `<Innehallsforteckning variant="hopfallbar">` med platserna som har sidor, bara på mobil (komponenten är redan `lg:hidden`). Ingen ny text |
| Budget | `/fukt/` under 40 kB vid 46 poster (golvet är 66 kB) |

## 3. Datamodell

### 3.1 `src/lib/plats.ts` (ny, ren TypeScript utan Astro-importer, så att kontrollskriptet och testet kan läsa den)

```ts
import type { PelareSlug } from './pelare';

export const PLATS_SLUGS = ['kallare', 'krypgrund', 'vind', 'garage', 'badrum', 'fonster', 'luften', 'hela-huset'] as const;
export type PlatsSlug = (typeof PLATS_SLUGS)[number];
export interface Plats { slug: PlatsSlug; namn: string }

/** Platsen en sida utan fältet hamnar under. */
export const STANDARD_PLATS: PlatsSlug = 'hela-huset';

/** Pelare som ordnar hubben efter plats, med platserna i visningsordning. Övriga hubbar har inget register. */
export const PLATSER: Partial<Record<PelareSlug, readonly Plats[]>> = {
  fukt: [
    { slug: 'kallare', namn: 'Källare' },
    { slug: 'krypgrund', namn: 'Krypgrund och grund' },
    { slug: 'vind', namn: 'Vind' },
    { slug: 'garage', namn: 'Garage och förråd' },
    { slug: 'badrum', namn: 'Badrum och tvättstuga' },
    { slug: 'fonster', namn: 'Fönster och väggar' },
    { slug: 'luften', namn: 'Luften inomhus' },
    { slug: 'hela-huset', namn: 'Hela huset' },
  ],
};

export const HUBGRUPPER = ['hitta-felet', 'valj-ratt', 'gor-det-sjalv', 'rakna'] as const;
export type Hubgrupp = (typeof HUBGRUPPER)[number];

export interface Platsrad {
  plats?: PlatsSlug;
  grupp: Hubgrupp;
  /** 0 kategorisidor, 1 pelarens egna sidor och räknare, 2 grannsidor. Tillagt i granskningen: egna sidor före grannarna. */
  forrang: 0 | 1 | 2;
  /** Millisekunder. Räknare 0; stabil sortering behåller registrets ordning. */
  datum: number;
}

/**
 * Ordnar raderna efter platsregistret. Rad utan plats hamnar under STANDARD_PLATS.
 * Plats som inte finns i registret: throw med platsens slug i meddelandet.
 * Inom plats: HUBGRUPPER-ordning, sedan forrang, sedan datum fallande, stabilt.
 * Platser utan rader tas inte med.
 */
export function ordnaEfterPlats<T extends Platsrad>(rader: readonly T[], platser: readonly Plats[]): { plats: Plats; rader: T[] }[];

/** Grupp för en korttyp: problemguide|kunskap → hitta-felet, kopguide|jamforelse|kategori → valj-ratt, projektguide → gor-det-sjalv. */
export function gruppForTyp(typ: string): Hubgrupp;
```

Namnen är H2 på sidan och kommer ordagrant ur SEO:s plan (12.5). Hantverkaren får byta ord i `namn`; slugen är ankaret och byts inte.

### 3.2 `src/content.config.ts`

- `artikel`: `plats: z.enum(PLATS_SLUGS).optional()` med kommentar som hänvisar hit och till `src/lib/plats.ts`.
- `tester`: `.omit({ pelare: true, plats: true })`.
- `kategorier`: `plats: z.enum(PLATS_SLUGS).optional()`.
- `pelare`: `grannsidor: z.array(z.object({ id: z.string(), plats: z.enum(PLATS_SLUGS) })).default([])`. `id` är filnamnet på en guide eller kunskapssida i en annan pelare.

### 3.3 `src/lib/kalkyl/register.ts`

`plats?: PlatsSlug` i `Kalkylator`, med kommentar: gäller i en pelare som har platsregister, och i dag bara Fukt. Värden:

| Räknare | plats |
|---|---|
| daggpunkt | `luften` |
| dranering | `kallare` |
| kallare | `kallare` |
| avfuktare, elkostnad | inget (Hela huset) |

### 3.4 Frontmatter som sätts (bara fältet, en rad efter `niva:` eller `typ:`, ingen annan ändring)

| Fil | plats |
|---|---|
| `src/content/guider/fukt/avfuktare-garage.mdx` | `garage` |
| `src/content/guider/fukt/avfuktare-kallare.mdx` | `kallare` |
| `src/content/guider/fukt/avfuktare-krypgrund.mdx` | `krypgrund` |
| `src/content/guider/fukt/fukt-i-kallaren.mdx` | `kallare` |
| `src/content/guider/fukt/kondens-pa-fonster.mdx` | `fonster` |
| `src/content/kunskap/fukt/luftfuktighet-inomhus.mdx` | `luften` |
| `src/content/kunskap/fukt/sorptionsavfuktare.mdx` | `hela-huset` |
| `src/content/jamforelser/luftavfuktare/woods-sw39fw-vs-acetec-evodry-6h-2.mdx` | `kallare` |
| `src/content/kategorier/luftavfuktare.md` | inget (Hela huset: kategorin gäller alla rum) |

`src/content/guider/fukt/fukt-i-krypgrund.mdx` rörs **inte** (en annan agent arbetar i den). Den ska ha `plats: krypgrund`; koordinatorn ser till att den som äger filen lägger in raden. Tills dess hamnar den under Hela huset när den publiceras, och kontrollen varnar.

`src/content/pelare/fukt.mdx` får, före `utkast:`:

```yaml
grannsidor:
  - { id: dranera-hus, plats: kallare }
  - { id: isolera-kallarvagg, plats: kallare }
  - { id: golv-i-kallare, plats: kallare }
  - { id: isolera-krypgrund, plats: krypgrund }
  - { id: tillaggsisolera-vind, plats: vind }
  - { id: takfot, plats: vind }
  - { id: fogar-badrum, plats: badrum }
```

Kommentaren i fukt.mdx om de fyra grupperna uppdateras till att hubben ordnas efter plats (se `src/lib/plats.ts`) med grupperna under varje plats.

## 4. Vyn

### 4.1 `src/components/vyer/PelarHub.astro`

- `const platser = PLATSER[slug]`. Utan register: exakt dagens kod och markup. Diffa HTML:en för `/grund/`, `/el/`, `/inomhus/` före och efter; den ska vara byte för byte samma.
- Med register (platsläge): rubrikblocket och raden med antal sidor som i dag. Sedan `<Innehallsforteckning rubriker={synligaPlatser.map(p => ({ slug: p.plats.slug, text: p.plats.namn }))} />`, sedan en `<section class="mt-10 lg:mt-14 max-w-lasbredd">` per plats med `<Pennstreck id={plats.slug}>{plats.namn}</Pennstreck>` och `<Platslista rader={...} />`. Ingen generell rad under platsens H2. Tomt läge (inga rader alls): samma text som i dag.
- Raderna byggs i vyn av samma källor som dagens grupper, nu med `plats`:
  - guider och kunskap med `pelare === slug`: `tillKortArtikel`, plats ur `data.plats`
  - grannsidor: slås upp bland publicerade guider och kunskap på `id`; en grannsida som inte är publicerad hoppas över tyst (kontrollen fångar id som inte finns). Etiketten får pelarens korta namn: "Projektguide · Mellan · Grund"
  - kategorier med slug i `pelare`: `tillKortKategori`, forrang 0
  - jämförelser vars kategori hör till pelaren: `tillKortJamforelse`
  - räknare: samma tvåledade filter som i dag (pelare, sedan kategori), etikett "Räkna själv", rubrik `namn`, href `/rakna/[slug]/`
- Ordningen sätts av `ordnaEfterPlats`, aldrig i vyn.
- Strukturerad data, brödsmulor, delningsbild: oförändrade.

### 4.2 `src/components/ui/Platslista.astro` (ny)

```ts
interface Props { rader: { etikett: string; rubrik: string; href: string }[] }
```

Markup, inget annat per rad (klasserna sitter i komponentklassen, inte på elementen):

```html
<ul class="platslista">
  <li>
    <p>Problemguide · Mellan</p>
    <h3><a href="/fukt/fukt-i-kallaren/">Fukt i källaren har tre orsaker …</a></h3>
  </li>
</ul>
```

`.platslista` i `@layer components` i `src/styles/global.css`, bara tokens:

- `ul`: `margin: 1rem 0 0; padding: 0; list-style: none; border-top: 1px solid var(--color-linje)`
- `li`: `position: relative; padding-block: 0.75rem; border-bottom: 1px solid var(--color-linje)`
- `p`: samma värden som `text-etikett` (storlek, radhöjd, spärrning, vikt från tokens), `text-transform: uppercase; color: var(--color-blyerts-2); margin: 0`
- `h3`: `font-family` serif-token, `font-size` och radhöjd från `--text-kortrubrik`, från `lg` `--text-kortrubrik-lg`; `margin: 0.25rem 0 0`
- `a`: som `.artikelkort .kortlank` men med understrykningen i `linje` i vila (ändrat i granskningen: listan har ingen kortram som visar att raden är klickbar) (blyerts, understruken 2 px, offset 3 px, `transition: text-decoration-color 150ms`, avstängd vid reduced motion); `::after` med `content: ""; position: absolute; inset: 0` så hela raden är klickyta (radens höjd är över 44 px); hover på `li` och `:focus-visible` ger understrykningen i penna; `li:has(a:focus-visible)` får `outline: 3px solid var(--color-penna); outline-offset: 2px` och länkens egen ring tas bort, precis som artikelkortet.

Ingen bild, ingen beskrivning, inget datum. Ingen ikon.

### 4.3 Mobil, 375 px

Rubrikblock, raden "N sidor · Alla guider om …", den hopfällbara "Innehåll, 8 avsnitt", sedan platserna. Allt inom läsbredd, ingen sidledsscroll. En rad med tvåradig rubrik är runt 75 px; 46 rader och åtta H2 blir runt 4 500 px, mot 19 000 med kort.

## 5. Kontroller i `scripts/kontrollera-innehall.ts`

Fel (stoppar bygget):
1. `plats` på en guide eller kunskapssida vars pelare saknar platsregister, eller med ett värde som inte finns i pelarens register.
2. `plats` på en jämförelse eller kategori där ingen av kategorins pelare har platsen i sitt register.
3. `plats` i räknarregistret som inte finns i registret för någon av räknarens pelare (eller kategorins pelare).
4. `grannsidor` i en hubfil: pelaren saknar platsregister; `id` finns inte bland guider och kunskap (utkast räknas som finns); sidan hör till samma pelare; `plats` finns inte i registret; samma `id` två gånger.

Varning:
5. Guide eller kunskapssida, inte utkast, i en pelare med platsregister, utan `plats`: "hamnar under Hela huset på hubben".

Kontrollen importerar `PLATSER` från `src/lib/plats.ts` på samma sätt som den importerar `src/lib/pelare.ts`.

## 6. Test

`scripts/test-plats.mjs`, `node --experimental-strip-types --test scripts/test-plats.mjs`, importerar `src/lib/plats.ts`. Minst åtta fall:

1. Rad utan plats hamnar under `hela-huset`.
2. Platsernas ordning följer registret, inte indata (indata i omvänd ordning).
3. Tom plats tas inte med.
4. Grupperna i ordningen hitta-felet, valj-ratt, gor-det-sjalv, rakna oavsett indata.
5. Inom Välj rätt står kategori (forrang 0) före en nyare köpguide.
6. Inom en grupp nyast först.
7. Två räknare med datum 0 behåller indataordningen.
8. Okänd plats kastar, och meddelandet innehåller slugen.
9. `gruppForTyp` för alla sex typer, och okänd typ kastar.
10. Läser `src/content/pelare/fukt.mdx` från disk: varje `grannsidor.plats` finns i `PLATSER.fukt`.

## 7. Dokument (uppdaterade av UX och bygge före bygget)

`docs/ARKITEKTUR.md` (Frontmatter), `docs/DESIGN.md` 5.2 (platsläge) och `docs/SPEC-SIDMALLAR.md` 4.2 och 3.3. Utvecklaren rör inte dokumenten.

## 8. Vad som inte får ändras

- Alla andra hubbar: HTML byte för byte som före.
- `Kortgrupp.astro`, `Artikelkort.astro`, `Artikelrutnat.astro`, startsidan, `/amnen/`, `/guider/`, kategorisidan.
- Brödtext i någon innehållsfil. Ingen publik text skrivs utöver platsnamnen ovan.
- `src/content/guider/fukt/fukt-i-krypgrund.mdx` och `src/content/kategorier/krysslaser.md`.
- Inga nya beroenden. Inget klient-JS.

## 9. Budget och godkännande

- `/fukt/` efter bygget: 0 script-taggar utöver JSON-LD, ingen JS-referens, under 66 kB. Mät dessutom bytes per listrad (medel och största) och räkna fram sidan vid 46 rader: `skal + 46 × största rad + 8 × H2-sektion`. Ska bli under 40 kB.
- `npx astro check --minimumSeverity error`: 0 fel. `node --experimental-strip-types --test scripts/test-plats.mjs`: grönt. `npm run kontrollera`: 0 fel, varningen för fukt-i-krypgrund är väntad endast om den publiceras. `npm run build` grönt med `budget-html.mjs`.
- Granskning av UX och bygge: koden mot specen, 375 px (ingen sidledsscroll, fokusring runt raden, tabbordning platser uppifrån), diff av andra hubbar.
