/**
 * De tre fakta produktkortet visar, per kategori, i den ordning läsaren väljer
 * på. En kategori som inte står i kartan tar de tre första specs i
 * kategorifilen som produkten har ett värde för. Etiketten och enheten kommer
 * från kategorifilens specs, eller från SPECS_UTAN_KATEGORISIDA när kategorin
 * saknar kategorisida. Ett värde som saknas visas inte.
 * Spec: docs/briefer/spec-designlyft-b-2026-10-02.md avsnitt 3, docs/DESIGN.md
 * avsnitt 6 (Produktkort). Ingen Astro-import.
 */
import { formateraSpecVarde } from './format.ts';

export const FAKTA: Record<string, readonly string[]> = {
  luftavfuktare: ['arbetstemp_min_c', 'kapacitet_liter_dygn', 'effekt_w'],
  krysslaser: ['rackvidd_m', 'noggrannhet_mm_per_10m', 'linjer'],
  badrumsflakt: ['flode_20pa_ls', 'ljud', 'fuktstyrning'],
};

export interface SpecDef {
  nyckel: string;
  etikett: string;
  enhet?: string | undefined;
}

/**
 * Specdefinitioner för kategorier som har produkter i guiderna men ingen
 * kategorisida, och därför ingen fil i src/content/kategorier/ (AFFILIATE.md
 * avsnitt 1). Produktkortet tar etikett och enhet härifrån när kategorifilen
 * saknas; en kategorifil går alltid före kartan.
 */
export const SPECS_UTAN_KATEGORISIDA: Record<string, readonly SpecDef[]> = {
  badrumsflakt: [
    { nyckel: 'flode_20pa_ls', etikett: 'Flöde vid 20 Pa', enhet: 'l/s' }, // produktfakta.badrumsflakt.flode_20pa_ls
    { nyckel: 'ljud', etikett: 'Ljud' }, // produktfakta.badrumsflakt.ljud
    { nyckel: 'fuktstyrning', etikett: 'Fuktstyrning' }, // produktfakta.badrumsflakt.fuktstyrning
  ],
};

export interface Faktum {
  etikett: string;
  /** Värdet med enheten, som produktkortet alltid har skrivit det. */
  varde: string;
}

function harVarde(v: unknown): boolean {
  return v !== undefined && v !== null && v !== '';
}

export function treFakta(
  kategori: string | null | undefined,
  specs: readonly SpecDef[],
  varden: Readonly<Record<string, unknown>>,
): Faktum[] {
  const karta = kategori ? FAKTA[kategori] : undefined;
  const valda = karta
    ? karta.flatMap((n) => specs.filter((s) => s.nyckel === n)).filter((s) => harVarde(varden[s.nyckel]))
    : specs.filter((s) => harVarde(varden[s.nyckel])).slice(0, 3);
  return valda.map((s) => ({
    etikett: s.etikett,
    varde: `${formateraSpecVarde(varden[s.nyckel])}${s.enhet ? ` ${s.enhet}` : ''}`,
  }));
}
