/**
 * Frontmatter ur en innehållsfil, läst utan Astro.
 *
 * Både scripts/kontrollera-innehall.ts och scripts/generera-delningsbilder.mjs
 * behöver title, utkast och brödtexten ur src/content/, och båda måste kunna
 * köras med node ensamt, på två sekunder, utan att starta ett Astro-bygge.
 * Läsningen bor därför här, i en modul, i stället för i två kopior som glider
 * isär: en ändrad regel för hur frontmattern avgränsas ska gälla båda.
 *
 * Modulen rapporterar inte fel själv. Den lämnar ett felmeddelande i `fel`, så
 * att anroparen får avgöra om det stoppar bygget eller bara varnar.
 */
import { parse as parseYaml } from 'yaml';

export interface LastFrontmatter {
  /** Fälten i frontmattern. Tom lista när den saknas eller inte går att läsa. */
  data: Record<string, unknown>;
  /** Allt efter den avslutande markören, alltså brödtexten. */
  body: string;
  /** Meddelande när frontmattern saknas eller är trasig, annars null. */
  fel: string | null;
}

/** Delar en md- eller mdx-fil i frontmatter och brödtext. */
export function lasFrontmatter(text: string): LastFrontmatter {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: text, fel: 'saknar frontmatter (--- ... ---) överst' };

  let data: unknown;
  try {
    data = parseYaml(m[1] ?? '');
  } catch (e) {
    return { data: {}, body: m[2] ?? '', fel: `frontmatter går inte att läsa: ${(e as Error).message}` };
  }
  if (typeof data !== 'object' || data === null || Array.isArray(data)) {
    return { data: {}, body: m[2] ?? '', fel: 'frontmatter är inte en lista av fält' };
  }
  return { data: data as Record<string, unknown>, body: m[2] ?? '', fel: null };
}

/** Fältet som sträng, eller undefined när det saknas eller har fel typ. */
export function strang(v: unknown): string | undefined {
  return typeof v === 'string' ? v : undefined;
}
