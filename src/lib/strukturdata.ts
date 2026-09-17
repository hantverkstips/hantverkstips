/**
 * Byggare för JSON-LD. Returnerar vanliga objekt som <StrukturData> renderar.
 * Inga betyg någonstans: vi har inga stjärnor. Se docs/SPEC-SIDMALLAR.md avsnitt 3.4 och 6.
 */
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

/**
 * Kanonisk värd. Sajten serveras på www och hantverkstips.se svarar 308 dit, så
 * canonical, JSON-LD och delningslänkar måste peka på adressen som svarar 200.
 * Måste stämma med `site` i astro.config.mjs. Se docs/ARKITEKTUR.md.
 */
export const SAJT = 'https://www.hantverkstips.se';

/**
 * En data-URI är redan fullständig. Utan kontrollen blev publisher.logo
 * "https://www.hantverkstips.sedata:image/svg+xml,..." när Vite inlinade den
 * lilla symbolen. Därför är logotypen numera en riktig fil under public/.
 */
function absolut(sokvag: string): string {
  return sokvag.startsWith('http') || sokvag.startsWith('data:') ? sokvag : `${SAJT}${sokvag}`;
}

/**
 * publisher.logo. Google vill ha en rasterbild på minst 112 × 112 px, och en
 * inlinead SVG duger inte. Filen genereras av scripts/generera-delningsbilder.mjs.
 */
const LOGGA = '/brand/logga.png';

export function organisation(): object {
  return {
    '@type': 'Organization',
    '@id': `${SAJT}/#organisation`,
    name: 'Hantverkstips',
    url: `${SAJT}/`,
    logo: absolut(LOGGA),
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

const I_LAGER = 'https://schema.org/InStock';
const SLUT_I_LAGER = 'https://schema.org/OutOfStock';

/**
 * Lagerstatus i schema.org-form. Går via arSlut() och därmed lagerlage(), samma
 * funktion som Kopknapp läser, så att sidan och markupen aldrig säger olika
 * saker: en knapp med texten "Slut i lager" får aldrig InStock bredvid sig.
 */
function tillganglighet(p: Produkt): string {
  return arSlut(billigasteErbjudande(p)) ? SLUT_I_LAGER : I_LAGER;
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
  const medPris = p.produkt.erbjudanden.filter((e) => typeof e.pris === 'number' && e.pris > 0);

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
            availability: tillganglighet(p.produkt),
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

export interface KategoriPost {
  produkt: Produkt;
  /**
   * Sidan där erbjudandet faktiskt visas: produktens test- eller
   * granskningssida om den finns, annars kategorisidan med ankare till
   * produktens rubrik. Aldrig en /go/-adress, se kommentaren i kategori().
   */
  url: string;
}

/**
 * Kategorisidans ItemList, där varje post bär ett helt Product-objekt i stället
 * för bara ett namn och en länk. Skälet är att kategorisidan är den sida som
 * visar priset, lagerstatusen och köpknappen; en lista med bara länkar berättar
 * ingenting om det för Google.
 *
 * Priset är lägsta pris och lagerstatusen kommer ur samma funktioner som
 * Kopknapp och produkt() läser, så att de tre aldrig säger olika saker.
 *
 * `offers.url` pekar på vår egen sida, aldrig på /go/[slug]. Google vill ha
 * adressen där erbjudandet visas för läsaren, och /go/ är en vidarebefordran
 * med rel="sponsored nofollow" som varken renderar pris eller produktnamn.
 *
 * En produkt utan pris får inget offers-objekt. Ett Product utan offers, review
 * eller aggregateRating är giltig schema.org men saknar det Google kräver för
 * ett rikt resultat, och det är rätt läge: vi hittar hellre inte på ett pris.
 */
export function kategori(k: { url: string; namn: string; poster: KategoriPost[] }): object {
  return {
    '@type': 'ItemList',
    name: k.namn,
    url: absolut(k.url),
    itemListElement: k.poster.map((post, i) => {
      const bild = lokalBild(post.produkt);
      const lagsta = lagstaPris(post.produkt);
      const sida = absolut(post.url);
      return {
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: produktNamn(post.produkt),
          ...(post.produkt.marke ? { brand: { '@type': 'Brand', name: post.produkt.marke } } : {}),
          sku: post.produkt.slug,
          ...(bild ? { image: absolut(bild) } : {}),
          url: sida,
          ...(lagsta !== null
            ? {
                offers: {
                  '@type': 'Offer',
                  price: lagsta,
                  priceCurrency: 'SEK',
                  availability: tillganglighet(post.produkt),
                  url: sida,
                },
              }
            : {}),
        },
      };
    }),
  };
}

export interface VerktygData {
  /** Sökväg med avslutande snedstreck: `/rakna/avfuktare/`. */
  url: string;
  /** Verktygets namn, alltså det som står sist i brödsmulorna. */
  namn: string;
  beskrivning: string;
}

/**
 * Kalkylatorerna under /rakna/. WebApplication och inte Article: sidan är ett
 * verktyg som räknar, inte en text som påstår något, och den har varken
 * författare eller publiceringsdatum. Priset skrivs ut som noll kronor
 * tillsammans med isAccessibleForFree, eftersom Google läser båda och ett
 * verktyg utan prisuppgift annars kan tolkas som ett verktyg bakom inloggning.
 *
 * FAQPage byggs inte här. Ingen kalkylatorsida har ett avsnitt med frågor och
 * svar i dag, och markup för frågor som inte står på sidan är en felaktig
 * signal. Får en sida ett sådant avsnitt läggs FAQPage till för just den sidan.
 */
export function verktyg(v: VerktygData): object {
  return {
    '@type': 'WebApplication',
    name: v.namn,
    url: absolut(v.url),
    description: v.beskrivning,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: 0,
      priceCurrency: 'SEK',
    },
    inLanguage: 'sv',
    isAccessibleForFree: true,
    // Skrivs ut i sin helhet, av samma skäl som i artikel().
    publisher: organisation(),
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
