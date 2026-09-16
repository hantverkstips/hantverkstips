/**
 * Nivå på en artikel: vem den är skriven för. Beslutad 2026-09-16 (docs/SOKORDSANALYS.md
 * avsnitt 5): målgrupp är inte ett ämne, så pelarna delas inte i proffs och hemmafixare.
 * I stället får varje artikel ett fält niva som visas som etikett i artikelhuvudet
 * ("Kunskap · Expert") och grupperar listan "Alla sidor i ..." på hubsidan.
 *
 * content.config.ts bygger sitt enum härifrån. Ordningen är visningsordningen på huben.
 */
export const NIVAER = ['enkel', 'mellan', 'expert'] as const;

export type Niva = (typeof NIVAER)[number];

export const STANDARD_NIVA: Niva = 'mellan';

/** Ordet som visas. Ett ord, samma stil som typetiketten. Se docs/DESIGN.md avsnitt 6. */
export function nivaEtikett(niva: Niva): string {
  switch (niva) {
    case 'enkel':
      return 'Enkel';
    case 'mellan':
      return 'Mellan';
    case 'expert':
      return 'Expert';
  }
}
