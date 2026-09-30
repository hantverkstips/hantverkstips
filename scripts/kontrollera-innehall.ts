/**
 * Byggtidskontroll av innehållet i src/content/. Körs före astro build:
 *
 *   npm run kontrollera            (ingår i npm run build)
 *
 * Stoppar bygget (exit 1) vid:
 *   - publicerad sida som länkar till ett utkast: länken blir 404 för läsaren
 *   - dubbla slugs: två filer med samma filnamn i guider + kunskap, i tester
 *     eller i jämförelser (filnamnet är adressen, mappen är bara ordning)
 *   - fil i fel undermapp: guider/kunskap ska ligga i [pelare]/, tester och
 *     jämförelser i [kategori]/, övriga samlingar platt
 *   - saknad pelare: pelare som inte finns i src/lib/pelare.ts, eller pelare
 *     utan hubfil i src/content/pelare/ (utkast räcker)
 *   - kategori, författare eller kalkylator som inte finns
 *   - intern länk (frontmatter eller brödtext) till en adress som inte finns,
 *     utan avslutande snedstreck, eller direkt till /go/
 *   - bild i frontmatter som pekar på en fil som saknas
 *   - tankstreck (– eller —) i publik text, en fras ur listan i docs/ROST.md
 *     avsnitt 3, kortSvar som inte är i blockstil (|), och <Illustration> utan alt
 *     (tillagt 2026-09-22: det mekaniska i rösten räknas här, inte av en agent)
 *   - platshållaren TEXT SAKNAS i en fil under src/, och en pelare i
 *     src/lib/pelare.ts vars ikon saknas i ikoner.svg (tillagt 2026-09-28)
 *   - plats som inte finns i registret för sidans pelare (src/lib/plats.ts),
 *     på guide, kunskap, jämförelse, kategori eller räknare, och grannsidor i en
 *     hubfil som pekar fel (tillagt 2026-09-30)
 *
 * Varnar (bygget går vidare) vid:
 *   - publicerad artikel, test eller jämförelse utan inlänk från en annan
 *     innehållsfil. Sidfoten, menyn och mallarnas automatiska listor räknas
 *     inte; huben och kategorisidan får sina länkar därifrån och kontrolleras
 *     inte. Se docs/INNEHALLSARKITEKTUR.md avsnitt 6. Blir stopp när sajten
 *     har fler sidor.
 *   - publicerad sida vars seoTitle (eller title när seoTitle saknas) är över
 *     60 tecken, eller vars description ligger utanför 120 till 155 tecken
 *   - alt på <Illustration> eller bildtext utan bildAlt över 125 tecken, och
 *     räkneorden "alltså", "avgör"/"styr" och "innan du" över gränsen per sida
 *   - räknarnas BESKRIVNING utanför spannet och alt över 125 i src/pages/rakna/
 *   - publicerad guide eller kunskapssida utan plats i en pelare med platsregister
 *
 * Varningarna om titel och beskrivning gäller sökresultatet, inte schemat.
 *
 * Skriptet läser filerna direkt och använder inte Astro, så det går på två
 * sekunder och kan köras utan att bygga. Schemat i src/content.config.ts är
 * fortfarande facit för fälten; det här kontrollerar det schemat inte ser:
 * relationer mellan filer.
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { lasFrontmatter, strang } from './frontmatter.ts';
import { KALKYLATORER } from '../src/lib/kalkyl/register.ts';
import { NIVAER } from '../src/lib/niva.ts';
import { PELARE, PELARE_SLUGS } from '../src/lib/pelare.ts';
import { PLATSER, type Plats } from '../src/lib/plats.ts';

const ROT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const INNEHALL = join(ROT, 'src', 'content');

type Samling = 'guider' | 'kunskap' | 'tester' | 'jamforelser' | 'pelare' | 'kategorier' | 'sidor' | 'forfattare';
const SAMLINGAR: Samling[] = ['guider', 'kunskap', 'tester', 'jamforelser', 'pelare', 'kategorier', 'sidor', 'forfattare'];
/** Samlingar vars filer ligger i en undermapp, och vilket fält mappen ska matcha. */
const UNDERMAPP: Partial<Record<Samling, 'pelare' | 'kategori'>> = {
  guider: 'pelare',
  kunskap: 'pelare',
  tester: 'kategori',
  jamforelser: 'kategori',
};
/** Sidtyper som ska ha minst en handskriven inlänk. */
const KRAVER_INLANK: Samling[] = ['guider', 'kunskap', 'tester', 'jamforelser'];

const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;

/** Längsta titel Google visar i sökresultatet. Samma tal som MAX_TITEL i
 *  src/layouts/Bas.astro, som lägger på " · Hantverkstips" bara när totalen
 *  ryms under det. En titel över gränsen får alltså varken varumärke eller
 *  synligt slut, och det är den varningen som saknades. */
const MAX_TITEL = 60;
/** Spannet en meta-beskrivning ska ligga i. Under 120 tecken lämnar Google
 *  plats oanvänd eller skriver en egen text ur sidan, över 155 klipps slutet. */
const MIN_DESCRIPTION = 120;
const MAX_DESCRIPTION = 155;

/** Grupperna <Kortgrupp> känner till. Speglar src/components/ui/Kortgrupp.astro. */
const KORTGRUPPER = ['hitta-felet', 'valj-ratt', 'gor-det-sjalv', 'rakna'] as const;

interface Fil {
  samling: Samling;
  /** Sökväg relativt projektroten, med snedstreck. */
  sokvag: string;
  /** Första undermappen under samlingen, eller null om filen ligger platt. */
  mapp: string | null;
  id: string;
  data: Record<string, unknown>;
  body: string;
  utkast: boolean;
  /** Adressen sidan får, eller null om filen inte blir en egen sida. */
  url: string | null;
}

const fel: string[] = [];
const varningar: string[] = [];
function felet(fil: string, text: string) {
  fel.push(`${fil}: ${text}`);
}
function varna(fil: string, text: string) {
  varningar.push(`${fil}: ${text}`);
}

// ---------------------------------------------------------------------------
// Läs alla filer

function lasMapp(mapp: string): string[] {
  if (!existsSync(mapp)) return [];
  const ut: string[] = [];
  for (const namn of readdirSync(mapp)) {
    const hel = join(mapp, namn);
    if (statSync(hel).isDirectory()) ut.push(...lasMapp(hel));
    else if (/\.(md|mdx)$/.test(namn)) ut.push(hel);
  }
  return ut;
}

/** Läsningen ligger i scripts/frontmatter.ts, delad med delningsbilderna. */
function delaFrontmatter(text: string, fil: string): { data: Record<string, unknown>; body: string } {
  const { data, body, fel: meddelande } = lasFrontmatter(text);
  if (meddelande) felet(fil, meddelande);
  return { data, body };
}

function urlFor(samling: Samling, id: string, data: Record<string, unknown>): string | null {
  switch (samling) {
    case 'guider':
    case 'kunskap': {
      const pelare = strang(data.pelare);
      return pelare ? `/${pelare}/${id}/` : null;
    }
    case 'tester':
      return `/tester/${id}/`;
    case 'jamforelser':
      return `/jamforelser/${id}/`;
    case 'pelare':
    case 'kategorier':
      return `/${id}/`;
    case 'sidor':
      return id === 'startsida' ? '/' : id === 'om' ? '/om/' : `/om/${id}/`;
    case 'forfattare':
      return `/forfattare/${id}/`;
  }
}

const filer: Fil[] = [];
for (const samling of SAMLINGAR) {
  const bas = join(INNEHALL, samling);
  for (const hel of lasMapp(bas)) {
    const sokvag = relative(ROT, hel).split('\\').join('/');
    const rel = relative(bas, hel).split('\\').join('/');
    const delar = rel.split('/');
    const filnamn = delar[delar.length - 1] ?? rel;
    const id = filnamn.replace(/\.(md|mdx)$/, '');
    const mapp = delar.length > 1 ? (delar[0] ?? null) : null;
    const { data, body } = delaFrontmatter(readFileSync(hel, 'utf8'), sokvag);
    const utkast = data.utkast === true;
    filer.push({ samling, sokvag, mapp, id, data, body, utkast, url: urlFor(samling, id, data) });

    if (!SLUG.test(id) || id === 'index') {
      felet(sokvag, `filnamnet "${id}" blir adressen och får bara innehålla a-z, 0-9 och bindestreck (inte "index")`);
    }
    if (delar.length > 2) felet(sokvag, 'ligger två nivåer ner. Bara en undermapp per samling');
  }
}

const per = (s: Samling) => filer.filter((f) => f.samling === s);
const hubbar = new Map(per('pelare').map((f) => [f.id, f]));
const kategorier = new Map(per('kategorier').map((f) => [f.id, f]));
const forfattare = new Set(per('forfattare').map((f) => f.id));
const kalkylatorer = new Set(KALKYLATORER.map((k) => k.slug));

/* Registret pekar ut pelare och kategori i fritext. Fel slug där gör att
   kalkylatorn tyst försvinner ur hubben och ur /amnen/, utan att något går sönder. */
for (const k of KALKYLATORER) {
  for (const p of k.pelare ?? []) {
    if (!(PELARE_SLUGS as readonly string[]).includes(p)) {
      felet('src/lib/kalkyl/register.ts', `kalkylatorn "${k.slug}" har pelare "${p}" som inte finns`);
    }
  }
  if (k.kategori !== undefined && !kategorier.has(k.kategori)) {
    felet('src/lib/kalkyl/register.ts', `kalkylatorn "${k.slug}" har kategori "${k.kategori}" som saknar fil`);
  }
}

/* Platshållaren TEXT SAKNAS får aldrig nå bygget: rad i pelarregistret syns på
   startsidan fast pelaren är utkast, och en registerrad eller komponenttext syns
   på varje sida. Specfilerna i docs/ omfattas inte. Inga undantag för
   kommentarer: * är också en punktlista i Markdown. Den som beskriver
   platshållaren i en kommentar under src/ hänvisar hit i stället.
   Spec: docs/briefer/spec-pelare-badrum-2026-09-29.md 7.1. */
const PLATSHALLARE = 'TEXT SAKNAS';
function kollaPlatshallare(mapp: string) {
  for (const namn of readdirSync(mapp)) {
    const sokvag = join(mapp, namn);
    if (statSync(sokvag).isDirectory()) kollaPlatshallare(sokvag);
    else if (/\.(ts|astro|md|mdx)$/.test(namn) && readFileSync(sokvag, 'utf8').includes(PLATSHALLARE)) {
      felet(relative(ROT, sokvag).replaceAll('\\', '/'), 'innehåller TEXT SAKNAS, texten skrivs av hantverkaren före bygget');
    }
  }
}
kollaPlatshallare(join(ROT, 'src'));

/* Varje pelare har sin ikon i spriten. En saknad symbol ger annars en tom ruta
   utan fel. Läses som text. Spec: spec-pelare-badrum-2026-09-29 7.2. */
const SPRITE = readFileSync(join(ROT, 'src', 'assets', 'brand', 'riktning-1', 'ikoner.svg'), 'utf8');
for (const p of PELARE) {
  if (!SPRITE.includes(`id="ikon-${p.ikon}"`)) {
    felet('src/lib/pelare.ts', `pelaren "${p.slug}" har ikonen "${p.ikon}" som saknas i ikoner.svg`);
  }
}

// ---------------------------------------------------------------------------
// Plats. En hub med platsregister (src/lib/plats.ts, i dag Fukt) ordnas efter
// plats i huset. Fel värde gör att bygget kastar i ordnaEfterPlats, eller att
// sidan tyst hamnar under en plats som inte finns på hubben.
// Spec: docs/briefer/spec-fukthubb-plats-2026-09-30.md avsnitt 5.

function platserFor(pelare: string): readonly Plats[] | undefined {
  return (PLATSER as Record<string, readonly Plats[] | undefined>)[pelare];
}
function harPlats(pelare: string, plats: string): boolean {
  return platserFor(pelare)?.some((p) => p.slug === plats) ?? false;
}
function kategorinsPelare(kategori: string | undefined): string[] {
  const k = kategori !== undefined ? kategorier.get(kategori) : undefined;
  return k && Array.isArray(k.data.pelare) ? k.data.pelare.map(String) : [];
}

for (const f of filer) {
  const plats = strang(f.data.plats);
  if (f.samling === 'guider' || f.samling === 'kunskap') {
    const pelare = strang(f.data.pelare) ?? '';
    if (plats !== undefined) {
      if (!platserFor(pelare)) felet(f.sokvag, `plats "${plats}", men pelaren ${pelare} har inget platsregister i src/lib/plats.ts`);
      else if (!harPlats(pelare, plats)) felet(f.sokvag, `plats "${plats}" finns inte i platsregistret för ${pelare} (src/lib/plats.ts)`);
    } else if (!f.utkast && platserFor(pelare)) {
      varna(f.sokvag, 'saknar plats och hamnar under Hela huset på hubben');
    }
  } else if ((f.samling === 'jamforelser' || f.samling === 'kategorier') && plats !== undefined) {
    const pelare = f.samling === 'kategorier' ? kategorinsPelare(f.id) : kategorinsPelare(strang(f.data.kategori));
    if (!pelare.some((p) => harPlats(p, plats))) {
      felet(f.sokvag, `plats "${plats}" finns inte i platsregistret för någon av kategorins pelare (${pelare.join(', ') || 'inga'})`);
    }
  }
}

for (const k of KALKYLATORER) {
  if (k.plats === undefined) continue;
  const pelare = [...(k.pelare ?? []), ...kategorinsPelare(k.kategori)];
  if (!pelare.some((p) => harPlats(p, k.plats ?? ''))) {
    felet('src/lib/kalkyl/register.ts', `kalkylatorn "${k.slug}" har plats "${k.plats}" som inte finns i platsregistret för någon av dess pelare`);
  }
}

const artiklarPerId = new Map([...per('guider'), ...per('kunskap')].map((f) => [f.id, f]));
for (const hub of per('pelare')) {
  const grannsidor = Array.isArray(hub.data.grannsidor) ? (hub.data.grannsidor as unknown[]) : [];
  if (grannsidor.length === 0) continue;
  if (!platserFor(hub.id)) {
    felet(hub.sokvag, `grannsidor, men pelaren ${hub.id} har inget platsregister i src/lib/plats.ts`);
    continue;
  }
  const sedda = new Set<string>();
  for (const g of grannsidor) {
    const post = typeof g === 'object' && g !== null ? (g as Record<string, unknown>) : {};
    const id = strang(post.id) ?? '';
    const plats = strang(post.plats) ?? '';
    const sida = artiklarPerId.get(id);
    if (!sida) felet(hub.sokvag, `grannsidan "${id}" finns inte bland guider och kunskap`);
    else if (strang(sida.data.pelare) === hub.id) {
      felet(hub.sokvag, `grannsidan "${id}" hör redan till ${hub.id}. Sätt plats i sidans frontmatter i stället`);
    }
    if (!harPlats(hub.id, plats)) felet(hub.sokvag, `grannsidan "${id}" har plats "${plats}" som inte finns i platsregistret för ${hub.id}`);
    if (sedda.has(id)) felet(hub.sokvag, `grannsidan "${id}" står två gånger`);
    sedda.add(id);
  }
}

// ---------------------------------------------------------------------------
// Undermappar, slugs, pelare, kategori, författare, nivå, bild

function kollaDubbletter(grupp: Fil[], beskrivning: string) {
  const sedda = new Map<string, Fil>();
  for (const f of grupp) {
    const tidigare = sedda.get(f.id);
    if (tidigare) felet(f.sokvag, `dubbel slug "${f.id}" i ${beskrivning}, finns redan i ${tidigare.sokvag}`);
    else sedda.set(f.id, f);
  }
}
kollaDubbletter([...per('guider'), ...per('kunskap')], 'guider och kunskap (delar adressrymden /[pelare]/[slug]/)');
kollaDubbletter(per('tester'), 'tester');
kollaDubbletter(per('jamforelser'), 'jämförelser');
for (const s of ['pelare', 'kategorier', 'sidor', 'forfattare'] as Samling[]) kollaDubbletter(per(s), s);

// Pelare och kategori får inte dela slug: båda ligger i roten.
for (const k of kategorier.keys()) {
  if ((PELARE_SLUGS as readonly string[]).includes(k)) felet(`src/content/kategorier/${k}`, 'kategorislug kolliderar med en pelare');
}

for (const f of filer) {
  const faltet = UNDERMAPP[f.samling];
  if (faltet) {
    const vantad = strang(f.data[faltet]);
    if (f.mapp === null) felet(f.sokvag, `ska ligga i undermappen ${f.samling}/${vantad ?? '[' + faltet + ']'}/`);
    else if (vantad && f.mapp !== vantad) felet(f.sokvag, `ligger i mappen ${f.mapp}/ men har ${faltet}: ${vantad}. Flytta filen`);
  } else if (f.mapp !== null) {
    felet(f.sokvag, `${f.samling} har inga undermappar; filen läses inte av bygget. Flytta den till src/content/${f.samling}/`);
  }

  // Pelare: måste finnas i registret och ha en hubfil, även som utkast.
  const pelareVarden =
    f.samling === 'kategorier'
      ? Array.isArray(f.data.pelare)
        ? f.data.pelare.map(String)
        : []
      : f.samling === 'guider' || f.samling === 'kunskap'
        ? [strang(f.data.pelare) ?? '']
        : [];
  for (const p of pelareVarden) {
    if (!(PELARE_SLUGS as readonly string[]).includes(p)) {
      felet(f.sokvag, `pelare "${p}" finns inte i src/lib/pelare.ts`);
    } else if (!hubbar.has(p)) {
      felet(f.sokvag, `pelaren ${p} saknar hubfil. Skapa src/content/pelare/${p}.md (utkast: true räcker) innan första artikeln`);
    }
  }
  if (f.samling === 'pelare') {
    if (!(PELARE_SLUGS as readonly string[]).includes(f.id)) {
      felet(f.sokvag, `okänd pelare "${f.id}", lägg till i src/lib/pelare.ts`);
    }
    // Astro tillämpar components={{ h2: Pennstreck, ... }} bara på MDX. En
    // hubfil i .md får råa h2 utan pennstreck och ser ut som ett utkast.
    if (!f.sokvag.endsWith('.mdx')) {
      felet(f.sokvag, 'pelarhubbar måste vara .mdx. I .md renderas H2 utan pennstreck och komponenterna i mallen gäller inte');
    }
  }

  const kategori = strang(f.data.kategori);
  if (kategori !== undefined && !kategorier.has(kategori)) {
    felet(f.sokvag, `kategori "${kategori}" saknar fil i src/content/kategorier/`);
  }

  const forf = strang(f.data.forfattare);
  if (forf !== undefined && !forfattare.has(forf)) felet(f.sokvag, `författaren "${forf}" saknar fil i src/content/forfattare/`);

  const niva = strang(f.data.niva);
  if (niva !== undefined && !(NIVAER as readonly string[]).includes(niva)) {
    felet(f.sokvag, `niva "${niva}" är inte en av ${NIVAER.join(', ')}`);
  }

  const kalkylator = strang(f.data.kalkylator);
  if (kalkylator !== undefined && !kalkylatorer.has(kalkylator)) {
    felet(f.sokvag, `kalkylator "${kalkylator}" finns inte i src/lib/kalkyl/register.ts`);
  }
  for (const m of f.body.matchAll(/<Verktygskort\s+kalkylator="([^"]+)"/g)) {
    if (!kalkylatorer.has(m[1] ?? '')) felet(f.sokvag, `<Verktygskort kalkylator="${m[1]}"> finns inte i registret`);
  }
  // Inbäddat formulär. Samma register, annat attribut: <Kalkylator namn="daggpunkt" />.
  for (const m of f.body.matchAll(/<Kalkylator\s+namn="([^"]+)"/g)) {
    if (!kalkylatorer.has(m[1] ?? '')) felet(f.sokvag, `<Kalkylator namn="${m[1]}"> finns inte i registret`);
  }

  // Hubbens kortgrupper. Komponenten läser pelaren ur rutten och fungerar bara
  // i en pelarhub, så både okänt gruppnamn och fel samling är fel här.
  for (const m of f.body.matchAll(/<Kortgrupp\s+grupp="([^"]+)"/g)) {
    if (!(KORTGRUPPER as readonly string[]).includes(m[1] ?? '')) {
      felet(f.sokvag, `<Kortgrupp grupp="${m[1]}"> är okänd. Använd en av ${KORTGRUPPER.join(', ')}`);
    }
    if (f.samling !== 'pelare') {
      felet(f.sokvag, '<Kortgrupp> fungerar bara i en pelarhub, den läser pelaren ur rutten');
    }
  }

  const bild = strang(f.data.bild);
  if (bild !== undefined && !existsSync(resolve(ROT, dirname(f.sokvag), bild))) {
    felet(f.sokvag, `bild "${bild}" finns inte (sökvägen är relativ från filen, som ligger i en undermapp)`);
  }

  if (/\/go\//.test(f.body)) felet(f.sokvag, 'länkar direkt till /go/. Affiliatelänkar går alltid via <Kopknapp>');

  // Högst en <Faq> per sida. Komponenten skriver ut ett FAQPage-block där den
  // står, och två block på samma adress är motstridig markup: Google får två
  // listor med frågor och vet inte vilken sidan handlar om.
  const faqar = [...f.body.matchAll(/<Faq[\s/>]/g)].length;
  if (faqar > 1) {
    felet(f.sokvag, `har ${faqar} <Faq>. Högst en per sida, annars blir FAQPage-markupen motstridig`);
  }

  // Titel och beskrivning som de ser ut i sökresultatet. Gäller varje sida som
  // byggs, utkast räknas inte. Schemat tar redan max 160 tecken på description,
  // men det är gränsen för när HTML-taggen blir orimlig, inte för när Google
  // klipper. Granskningen 2026-09-16 punkt 5.5.
  if (!f.utkast && f.url) {
    const seoTitle = strang(f.data.seoTitle);
    const titeln = seoTitle ?? strang(f.data.title);
    if (titeln !== undefined && titeln.length > MAX_TITEL) {
      const falt = seoTitle === undefined ? 'title' : 'seoTitle';
      varna(
        f.sokvag,
        `${falt} är ${titeln.length} tecken, över ${MAX_TITEL}. Google klipper titeln och Bas.astro utelämnar varumärkessuffixet`,
      );
    }
    const beskrivning = strang(f.data.description);
    if (beskrivning !== undefined && (beskrivning.length < MIN_DESCRIPTION || beskrivning.length > MAX_DESCRIPTION)) {
      const riktning = beskrivning.length < MIN_DESCRIPTION ? 'under' : 'över';
      varna(
        f.sokvag,
        `description är ${beskrivning.length} tecken, ${riktning} spannet ${MIN_DESCRIPTION} till ${MAX_DESCRIPTION}`,
      );
    }
  }
}

// ---------------------------------------------------------------------------
// Texten som den ser ut för läsaren. Tillagt 2026-09-22 efter
// läsbarhetsutredningen: det mekaniska i docs/ROST.md avsnitt 3 ska räknas av
// ett skript, inte av en agent. Fel stoppar bygget, räkneorden varnar.

/** Fraser ur ROST.md avsnitt 3 som avslöjar maskintext. Ett fall är fel. */
const FORBJUDNA_FRASER: RegExp[] = [
  /\blåt oss\b/i,
  /\bdyk(a)? ner i\b/i,
  /\butforska\b/i,
  /\bnyckeln till\b/i,
  /\bsömlös/i,
  /\brobust/i,
  /\boptimal/i,
  /\bperfekt för\b/i,
  /\bidealisk för\b/i,
  /\bdet är viktigt att (notera|nämna)\b/i,
  /\bdet är värt att nämna\b/i,
  /\bkom ihåg att\b/i,
  /\bhåll i minnet\b/i,
  /\bsammanfattningsvis\b/i,
  /\bavslutande tankar\b/i,
  /\bi slutändan\b/i,
  /\bnär allt kommer omkring\b/i,
  /\bspelförändrare\b/i,
  /\binte bara \S+ utan (också|även)\b/i,
  /\bvare sig det gäller\b/i,
  /\bi den här guiden går vi igenom\b/i,
  /\blycka till med\b/i,
];
/** Tankstreck som pausmarkör. Bindestreck och minus i tal är tillåtna. */
const TANKSTRECK = /[–—]/;
/** Alt-text och bildtext som blir alt: längre än så här klipps av skärmläsare och sökmotorer. */
const MAX_ALT = 125;
/** Räkneord: över gränsen per sida låter det som en mall. Varning, inte fel. */
const RAKNEORD: { namn: string; monster: RegExp; max: number }[] = [
  { namn: '"alltså"', monster: /\balltså\b/gi, max: 6 },
  { namn: '"avgör" eller "styr"', monster: /\b(avgör|styr)\b/gi, max: 5 },
  { namn: '"innan du"', monster: /\binnan du\b/gi, max: 5 },
];

/** Den publika texten i en fil: brödtexten utan kodkommentarer, plus de fält som syns. */
function publikText(f: Fil): string {
  const falt = ['title', 'seoTitle', 'description', 'ingress', 'kortSvar', 'bildtext', 'omdome', 'kopOm', 'kopInteOm']
    .map((k) => strang(f.data[k]) ?? '')
    .join('\n');
  const body = f.body.replace(/\{\/\*[\s\S]*?\*\/\}/g, '').replace(/<!--[\s\S]*?-->/g, '');
  return `${falt}\n${body}`;
}

for (const f of filer) {
  if (f.utkast || !f.url) continue;
  const text = publikText(f);

  if (TANKSTRECK.test(text)) {
    const rad = text.split('\n').findIndex((r) => TANKSTRECK.test(r)) + 1;
    felet(f.sokvag, `innehåller ett tankstreck (– eller —). Komma, punkt eller ny mening. Se docs/ROST.md avsnitt 3 (första träffen på textrad ${rad})`);
  }
  for (const fras of FORBJUDNA_FRASER) {
    const m = text.match(fras);
    if (m) felet(f.sokvag, `innehåller "${m[0]}", en fras ur listan i docs/ROST.md avsnitt 3`);
  }

  // Kortsvaret ska ha stycken: blockstil | bevarar radbrytningarna, >- viker ihop dem.
  const raKortsvar = readFileSync(join(ROT, f.sokvag), 'utf8').match(/^kortSvar:\s*(>-?|\|-?)?/m);
  if (raKortsvar && raKortsvar[1] !== undefined && raKortsvar[1].startsWith('>')) {
    felet(f.sokvag, 'kortSvar skrivs i blockstil med | så att styckena når pappret; >- viker ihop radbrytningarna');
  }

  const bildAlt = strang(f.data.bildAlt);
  const bildtext = strang(f.data.bildtext);
  if (bildAlt === undefined && bildtext !== undefined && bildtext.length > MAX_ALT) {
    varna(f.sokvag, `bildtext är ${bildtext.length} tecken och blir huvudbildens alt. Sätt bildAlt (högst ${MAX_ALT} tecken) eller korta bildtexten`);
  }
  for (const m of f.body.matchAll(/<Illustration\b[^>]*\balt="([^"]*)"/g)) {
    const alt = m[1] ?? '';
    if (alt.length > MAX_ALT) varna(f.sokvag, `<Illustration> har alt på ${alt.length} tecken, högst ${MAX_ALT}. Detaljerna går i bildtext`);
    if (alt.length === 0) felet(f.sokvag, '<Illustration> har tom alt. Skriv vad bilden visar');
  }

  for (const r of RAKNEORD) {
    const antal = (text.match(r.monster) ?? []).length;
    if (antal > r.max) varna(f.sokvag, `${r.namn} ${antal} gånger, över ${r.max}. Läs docs/ROST.md avsnitt 3 om röstens tics`);
  }
}

// Räknarnas sidor: beskrivning och alt, det som syns i sökresultat och för skärmläsare.
const RAKNA = join(ROT, 'src', 'pages', 'rakna');
if (existsSync(RAKNA)) {
  for (const namn of readdirSync(RAKNA)) {
    if (!namn.endsWith('.astro') || namn === 'index.astro') continue;
    const sokvag = `src/pages/rakna/${namn}`;
    const kod = readFileSync(join(RAKNA, namn), 'utf8');
    const beskrivning = kod.match(/const BESKRIVNING\s*=\s*`([^`]*)`/)?.[1] ?? kod.match(/const BESKRIVNING\s*=\s*'([^']*)'/)?.[1];
    if (beskrivning !== undefined) {
      const ren = beskrivning.replace(/\$\{[^}]*\}/g, '2026');
      if (ren.length < MIN_DESCRIPTION || ren.length > MAX_DESCRIPTION) {
        varna(sokvag, `BESKRIVNING är ${ren.length} tecken, utanför spannet ${MIN_DESCRIPTION} till ${MAX_DESCRIPTION}`);
      }
    }
    for (const m of kod.matchAll(/<Illustration\b[^>]*\balt="([^"]*)"/g)) {
      const alt = m[1] ?? '';
      if (alt.length > MAX_ALT) varna(sokvag, `<Illustration> har alt på ${alt.length} tecken, högst ${MAX_ALT}`);
    }
    // Synlig text i mallen: allt mellan > och < som inte är kod. Tankstreck är fel även här.
    const mall = kod.replace(/^[\s\S]*?\n---\n[\s\S]*?\n---\n/, '').replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
    if (TANKSTRECK.test(mall)) felet(sokvag, 'mallen innehåller ett tankstreck (– eller —) i synlig text');
  }
}

// ---------------------------------------------------------------------------
// Interna länkar

const sidorPerUrl = new Map<string, Fil>();
for (const f of filer) if (f.url) sidorPerUrl.set(f.url, f);
/**
 * Adresser som mallarna bygger utan en innehållsfil. De får länkas till, men de
 * räknas aldrig som en handskriven inlänk: /guider/ och dess filtersidor listar
 * varje publicerad artikel automatiskt, och /amnen/ listar varje hub. En sida
 * som bara nås därifrån är fortfarande föräldralös. Eftersom de saknar
 * innehållsfil hamnar de aldrig i inlankar-tabellen, och regeln följer av sig
 * själv; listan finns här för att länkkontrollen ska hitta målet.
 */
const OVERSIKTSSIDOR = [
  '/amnen/',
  '/guider/',
  ...PELARE_SLUGS.map((p) => `/guider/${p}/`),
  ...['kopguide', 'problemguide', 'projektguide', 'kunskap', 'test', 'jamforelse', 'kategori'].map(
    (t) => `/guider/typ/${t}/`,
  ),
  ...NIVAER.map((n) => `/guider/niva/${n}/`),
];

const statiska = new Set<string>([
  '/',
  '/rakna/',
  ...KALKYLATORER.map((k) => `/rakna/${k.slug}/`),
  ...OVERSIKTSSIDOR,
]);

/** Alla interna länkar i en fil: strängar i frontmatter som börjar med /, markdown-länkar och href i brödtexten. */
function lankarI(f: Fil): string[] {
  const ut = new Set<string>();
  const gaIgenom = (v: unknown) => {
    if (typeof v === 'string') {
      if (/^\/[a-z0-9\-/]*$/.test(v)) ut.add(v);
    } else if (Array.isArray(v)) v.forEach(gaIgenom);
    else if (v && typeof v === 'object') Object.values(v).forEach(gaIgenom);
  };
  gaIgenom(f.data);
  const kategori = strang(f.data.kategori);
  if (kategori) ut.add(`/${kategori}/`);
  const justNu = f.data.justNu;
  if (justNu && typeof justNu === 'object') {
    const { samling, id } = justNu as { samling?: string; id?: string };
    const mal = filer.find((x) => x.samling === samling && x.id === id);
    if (mal?.url) ut.add(mal.url);
    else felet(f.sokvag, `justNu pekar på ${samling}/${id} som inte finns`);
  }
  for (const m of f.body.matchAll(/\]\((\/[^)\s]*)\)/g)) ut.add(m[1] ?? '');
  for (const m of f.body.matchAll(/href="(\/[^"]*)"/g)) ut.add(m[1] ?? '');
  return [...ut];
}

const inlankar = new Map<string, Set<string>>();
for (const f of filer) {
  for (const ra of lankarI(f)) {
    const url = ra.replace(/[#?].*$/, '');
    if (url === '') continue;
    if (!url.endsWith('/')) {
      felet(f.sokvag, `länken ${ra} saknar avslutande snedstreck`);
      continue;
    }
    if (url.startsWith('/go/')) {
      felet(f.sokvag, `länken ${ra} går direkt till /go/. Använd <Kopknapp>`);
      continue;
    }
    const mal = sidorPerUrl.get(url);
    if (!mal && !statiska.has(url)) {
      const text = `länken ${url} leder ingenstans. Ingen innehållsfil, kalkylator eller fast sida har den adressen`;
      if (f.utkast) varna(f.sokvag, text);
      else felet(f.sokvag, text);
      continue;
    }
    if (mal) {
      if (mal.utkast && !f.utkast) {
        // Fel, inte varning: en publicerad sida som länkar till ett utkast ger
        // 404 för läsaren och en död länk för Google. Hubbarna och startsidan
        // hade tre sådana. Ta bort länken tills målet publiceras.
        felet(f.sokvag, `länkar till ${url} som är utkast. Länken blir 404 i bygget, ta bort den tills målet publiceras`);
      }
      if (mal.sokvag !== f.sokvag) {
        const s = inlankar.get(mal.sokvag) ?? new Set<string>();
        s.add(f.sokvag);
        inlankar.set(mal.sokvag, s);
      }
    }
  }
}

for (const f of filer) {
  if (!KRAVER_INLANK.includes(f.samling) || f.utkast) continue;
  if (!inlankar.has(f.sokvag)) {
    varna(f.sokvag, `${f.url} saknar inlänk från en annan innehållsfil. Sidfot, meny och automatiska listor räknas inte`);
  }
}

// ---------------------------------------------------------------------------
// Rapport

const publiceradeSidor = filer.filter((f) => f.url && !f.utkast).length;
for (const v of varningar) console.warn(`VARNING  ${v}`);
for (const e of fel) console.error(`FEL      ${e}`);
console.log(
  `Innehållskontroll: ${filer.length} filer, ${publiceradeSidor} publicerade sidor, ${fel.length} fel, ${varningar.length} varningar.`,
);
if (fel.length > 0) process.exit(1);
