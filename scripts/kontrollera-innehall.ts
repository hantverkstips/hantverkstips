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
 *
 * Varnar (bygget går vidare) vid:
 *   - publicerad artikel, test eller jämförelse utan inlänk från en annan
 *     innehållsfil. Sidfoten, menyn och mallarnas automatiska listor räknas
 *     inte; huben och kategorisidan får sina länkar därifrån och kontrolleras
 *     inte. Se docs/INNEHALLSARKITEKTUR.md avsnitt 6. Blir stopp när sajten
 *     har fler sidor.
 *
 * Skriptet läser filerna direkt och använder inte Astro, så det går på två
 * sekunder och kan köras utan att bygga. Schemat i src/content.config.ts är
 * fortfarande facit för fälten; det här kontrollerar det schemat inte ser:
 * relationer mellan filer.
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse as parseYaml } from 'yaml';
import { KALKYLATORER } from '../src/lib/kalkyl/register.ts';
import { NIVAER } from '../src/lib/niva.ts';
import { PELARE_SLUGS } from '../src/lib/pelare.ts';

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

function delaFrontmatter(text: string, fil: string): { data: Record<string, unknown>; body: string } {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) {
    felet(fil, 'saknar frontmatter (--- ... ---) överst');
    return { data: {}, body: text };
  }
  let data: unknown;
  try {
    data = parseYaml(m[1] ?? '');
  } catch (e) {
    felet(fil, `frontmatter går inte att läsa: ${(e as Error).message}`);
    return { data: {}, body: m[2] ?? '' };
  }
  if (typeof data !== 'object' || data === null || Array.isArray(data)) {
    felet(fil, 'frontmatter är inte en lista av fält');
    return { data: {}, body: m[2] ?? '' };
  }
  return { data: data as Record<string, unknown>, body: m[2] ?? '' };
}

function strang(v: unknown): string | undefined {
  return typeof v === 'string' ? v : undefined;
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
