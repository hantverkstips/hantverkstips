import { KALKYLATORER } from './register';

/**
 * Räknarnas inlänkar från innehållet, räknade i bygget (spec-designlyft-a-2026-10-02
 * avsnitt 12.7). Samma tre mönster som varningen i scripts/kontrollera-innehall.ts:
 * en fil räknas en gång, hur många länkar den än har, och utkast räknas med.
 * Kontrollskriptet behåller sin egen räkning; de två ska ge samma tal.
 */
const filer = import.meta.glob<string>('/src/content/**/*.{md,mdx}', {
  query: '?raw',
  import: 'default',
  eager: true,
});

/** Antal innehållsfiler som länkar till varje räknare, nyckel = slug. */
export function inlankar(): Map<string, number> {
  const texter = Object.values(filer);
  const antal = new Map<string, number>();
  for (const k of KALKYLATORER) {
    const monster = [`/rakna/${k.slug}/`, `<Kalkylator namn="${k.slug}"`, `<Verktygskort kalkylator="${k.slug}"`];
    antal.set(k.slug, texter.filter((ra) => monster.some((m) => ra.includes(m))).length);
  }
  return antal;
}
