/**
 * Filtren på /guider/: vilka sidor som byggs, vad de heter och vad som står i
 * filterraderna. Logiken ligger här och inte i rutten, eftersom getStaticPaths
 * körs i sin egen omfattning och bara når det som är importerat.
 *
 * Ett filter i taget, och bara filter med minst en träff. Se docs/DESIGN.md
 * avsnitt 5.10 och designbriefen avsnitt 6.
 */
import { typEtikett } from './innehall';
import { allaKort, KORTTYPER, TYP_PLURAL, type KortData, type KortTyp } from './kort';
import { NIVAER, nivaEtikett, type Niva } from './niva';
import { PELARE, type PelareSlug } from './pelare';

/** 24 kort per sida, åtta rader om tre på desktop. */
export const PER_SIDA = 24;

const H1_ALLA = 'Alla guider och tester';
const INGRESS_ALLA =
  'Varje guide, kunskapsartikel, test och jämförelse på sajten, nyast först. Etiketten säger typ och nivå, så du ser om sidan är skriven för dig. Det vi inte haft i handen är märkt Granskning, inte Test.';
const BESKRIVNING_ALLA =
  'Alla guider, kunskapsartiklar, tester och jämförelser på Hantverkstips, nyast först, med typ och nivå på varje kort.';

/**
 * H1 per nivåfilter. "Enkel" står som Enkel i filtret och i etiketten och blir
 * inte "för nybörjare": gipsskruvguiden är enkel nivå och skriven för proffs.
 */
const NIVA_H1 = {
  enkel: 'Enkla guider, klara på en dag',
  mellan: 'Guider på mellannivå',
  expert: 'Expertsidor och undersökningar',
};
const NIVA_TITEL = {
  enkel: 'Enkla guider',
  mellan: 'Guider på mellannivå',
  expert: 'Expertsidor och undersökningar',
};

export type FilterSort = 'alla' | 'pelare' | 'typ' | 'niva';

export interface Filter {
  sort: FilterSort;
  varde: string;
  /** Filtrets adress, sida 1. */
  bas: string;
  h1: string;
  titel: string;
  beskrivning: string;
  /** Bara /guider/ har en skriven ingress. Filtersidorna har den räknade raden. */
  ingress?: string;
  kort: KortData[];
}

export interface FilterPost {
  namn: string;
  antal: number;
  href: string;
  aktiv: boolean;
}

/** Typens namn i filtret, singular. Kategorisidor heter Bäst i test. */
export function typNamn(typ: KortTyp): string {
  return typ === 'kategori' ? 'Bäst i test' : typEtikett(typ);
}

function gemener(text: string): string {
  return text.charAt(0).toLowerCase() + text.slice(1);
}

function beskrivningAv(h1: string): string {
  return `Alla ${gemener(h1)} på Hantverkstips, nyast först, med typ och nivå på varje kort.`;
}

/** Alla filter som har minst en träff, i den ordning filterraderna visar dem. */
export async function guidefilter(): Promise<Filter[]> {
  const alla = await allaKort();

  const filter: Filter[] = [
    {
      sort: 'alla',
      varde: '',
      bas: '/guider/',
      h1: H1_ALLA,
      titel: `${H1_ALLA} · Hantverkstips`,
      beskrivning: BESKRIVNING_ALLA,
      ingress: INGRESS_ALLA,
      kort: alla,
    },
  ];

  for (const p of PELARE) {
    const kort = alla.filter((k) => k.pelare === p.slug);
    if (kort.length === 0) continue;
    const h1 = `Guider och tester om ${gemener(p.namn)}`;
    filter.push({
      sort: 'pelare',
      varde: p.slug,
      bas: `/guider/${p.slug}/`,
      h1,
      titel: `Guider om ${gemener(p.namn)} · Hantverkstips`,
      beskrivning: beskrivningAv(h1),
      kort,
    });
  }

  for (const typ of KORTTYPER) {
    const kort = alla.filter((k) => k.typ === typ);
    if (kort.length === 0) continue;
    const h1 = TYP_PLURAL[typ];
    filter.push({
      sort: 'typ',
      varde: typ,
      bas: `/guider/typ/${typ}/`,
      h1,
      titel: `${h1} · Hantverkstips`,
      beskrivning: beskrivningAv(h1),
      kort,
    });
  }

  for (const niva of NIVAER) {
    const kort = alla.filter((k) => k.niva === niva);
    if (kort.length === 0) continue;
    filter.push({
      sort: 'niva',
      varde: niva,
      bas: `/guider/niva/${niva}/`,
      h1: NIVA_H1[niva],
      titel: `${NIVA_TITEL[niva]} · Hantverkstips`,
      beskrivning: `Alla sidor på nivå ${niva} på Hantverkstips, nyast först, med typ och nivå på varje kort.`,
      kort,
    });
  }

  return filter;
}

/**
 * Filterraderna är desamma på varje sida: de byter filter, de lägger inte till.
 * Posten "Alla" är aktiv i de rader som inte är sidans eget filter.
 */
export function filterrader(
  filter: Filter[],
  aktivSort: FilterSort,
  aktivtVarde: string,
): { etikett: string; poster: FilterPost[] }[] {
  const totalt = filter.find((f) => f.sort === 'alla')?.kort.length ?? 0;
  const antal = (sort: FilterSort, varde: string) =>
    filter.find((f) => f.sort === sort && f.varde === varde)?.kort.length ?? 0;

  return [
    {
      etikett: 'Ämne',
      poster: [
        { namn: 'Alla', antal: totalt, href: '/guider/', aktiv: aktivSort !== 'pelare' },
        ...PELARE.filter((p) => antal('pelare', p.slug) > 0).map((p) => ({
          namn: p.kort,
          antal: antal('pelare', p.slug),
          href: `/guider/${p.slug}/`,
          aktiv: aktivSort === 'pelare' && aktivtVarde === p.slug,
        })),
      ],
    },
    {
      etikett: 'Typ',
      poster: [
        { namn: 'Alla', antal: totalt, href: '/guider/', aktiv: aktivSort !== 'typ' },
        ...KORTTYPER.filter((t) => antal('typ', t) > 0).map((t) => ({
          namn: typNamn(t),
          antal: antal('typ', t),
          href: `/guider/typ/${t}/`,
          aktiv: aktivSort === 'typ' && aktivtVarde === t,
        })),
      ],
    },
    {
      etikett: 'Nivå',
      poster: [
        { namn: 'Alla', antal: totalt, href: '/guider/', aktiv: aktivSort !== 'niva' },
        ...NIVAER.filter((n) => antal('niva', n) > 0).map((n) => ({
          namn: nivaEtikett(n),
          antal: antal('niva', n),
          href: `/guider/niva/${n}/`,
          aktiv: aktivSort === 'niva' && aktivtVarde === n,
        })),
      ],
    },
  ];
}

/** Filtrets namn i brödsmulan. Null på /guider/, som inte har någon tredje nivå. */
export function filterNamn(sort: FilterSort, varde: string): string | null {
  if (sort === 'pelare') return PELARE.find((p) => p.slug === (varde as PelareSlug))?.kort ?? varde;
  if (sort === 'typ') return typNamn(varde as KortTyp);
  if (sort === 'niva') return nivaEtikett(varde as Niva);
  return null;
}
