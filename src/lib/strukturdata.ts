/**
 * Byggare för JSON-LD. Returnerar vanliga objekt som <StrukturData> renderar.
 * Inga betyg någonstans: vi har inga stjärnor. Se docs/SPEC-SIDMALLAR.md avsnitt 3.4 och 6.
 */
import symbolUrl from '../assets/brand/riktning-1/symbol.svg?url';
import type { Brodsmula } from './innehall';
import {
  arSlut,
  billigasteErbjudande,
  hogstaPris,
  lagstaPris,
  lokalBild,
  produktNamn,
  type Produkt,
} from './produkter';

export const SAJT = 'https://hantverkstips.se';

function absolut(sokvag: string): string {
  return sokvag.startsWith('http') ? sokvag : `${SAJT}${sokvag}`;
}

export function organisation(): object {
  return {
    '@type': 'Organization',
    '@id': `${SAJT}/#organisation`,
    name: 'Hantverkstips',
    url: `${SAJT}/`,
    logo: absolut(symbolUrl),
    sameAs: [],
  };
}

export function brodsmulor(lista: Brodsmula[]): object {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: lista.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.namn,
      ...(b.href ? { item: absolut(b.href) } : {}),
    })),
  };
}

export interface ArtikelData {
  url: string;
  titel: string;
  beskrivning: string;
  /** Utelämnas på sidor utan publiceringsdatum (hubbar, om-sidor). */
  publicerad?: Date;
  uppdaterad?: Date;
  forfattareSlug: string;
  forfattareNamn: string;
  bildUrl?: string;
}

export function artikel(a: ArtikelData): object {
  const andrad = a.uppdaterad ?? a.publicerad;
  return {
    '@type': 'Article',
    headline: a.titel,
    description: a.beskrivning,
    // Inget datum hittas på: saknas publiceringsdatum utelämnas fältet hellre
    // än att sättas till byggtidpunkten, som ändras vid varje bygge.
    ...(a.publicerad ? { datePublished: a.publicerad.toISOString() } : {}),
    ...(andrad ? { dateModified: andrad.toISOString() } : {}),
    author: {
      '@type': 'Person',
      name: a.forfattareNamn,
      url: `${SAJT}/forfattare/${a.forfattareSlug}/`,
    },
    // Noden skrivs ut i sin helhet: en @id-referens till /#organisation pekar på
    // en nod som bara finns på startsidan och /om/.
    publisher: organisation(),
    mainEntityOfPage: absolut(a.url),
    ...(a.bildUrl ? { image: absolut(a.bildUrl) } : {}),
  };
}

export interface ProduktData {
  produkt: Produkt;
  url: string;
  etikett: 'test' | 'granskning';
  omdome: string;
  forfattareNamn: string;
  publicerad: Date;
}

export function produkt(p: ProduktData): object {
  const bild = lokalBild(p.produkt);
  const lagsta = lagstaPris(p.produkt);
  const hogsta = hogstaPris(p.produkt);
  const billigast = billigasteErbjudande(p.produkt);
  const medPris = p.produkt.erbjudanden.filter((e) => typeof e.pris === 'number' && e.pris > 0);

  // Samma tolkning av lagerstatus som Kopknapp gör, så att sidan och markupen
  // aldrig säger olika saker.
  const tillganglighet = arSlut(billigast) ? 'https://schema.org/OutOfStock' : 'https://schema.org/InStock';

  return {
    '@type': 'Product',
    name: produktNamn(p.produkt),
    ...(p.produkt.marke ? { brand: { '@type': 'Brand', name: p.produkt.marke } } : {}),
    sku: p.produkt.slug,
    ...(bild ? { image: absolut(bild) } : {}),
    ...(medPris.length > 0 && lagsta !== null && hogsta !== null
      ? {
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'SEK',
            lowPrice: lagsta,
            highPrice: hogsta,
            offerCount: medPris.length,
            availability: tillganglighet,
          },
        }
      : {}),
    // En granskning har inget review-objekt. E-E-A-T-regeln i INNEHALLSARKITEKTUR avsnitt 7.
    ...(p.etikett === 'test'
      ? {
          review: {
            '@type': 'Review',
            author: { '@type': 'Person', name: p.forfattareNamn },
            datePublished: p.publicerad.toISOString(),
            reviewBody: p.omdome,
          },
        }
      : {}),
    url: absolut(p.url),
  };
}

export function lista(l: { url: string; namn: string; poster: { namn: string; url: string }[] }): object {
  return {
    '@type': 'ItemList',
    name: l.namn,
    url: absolut(l.url),
    itemListElement: l.poster.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.namn,
      url: absolut(p.url),
    })),
  };
}

export function person(f: {
  slug: string;
  namn: string;
  yrke: string;
  presentation: string;
  bildUrl?: string;
}): object {
  return {
    '@type': 'Person',
    '@id': `${SAJT}/forfattare/${f.slug}/#person`,
    name: f.namn,
    url: `${SAJT}/forfattare/${f.slug}/`,
    jobTitle: f.yrke,
    description: f.presentation,
    ...(f.bildUrl ? { image: absolut(f.bildUrl) } : {}),
  };
}
