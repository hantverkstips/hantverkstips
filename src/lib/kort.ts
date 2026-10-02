/**
 * Data till Artikelkort. Startsidan, pelarhubben, /amnen/ och /guider/ visar
 * samma kort, så mappningen från frontmatter till kortets props görs här och
 * ingen annanstans. Se docs/DESIGN.md avsnitt 6, Artikelkort.
 *
 * Tester och jämförelser saknar fältet pelare: de hör till en kategori, och
 * kategorifilens första pelare är den de räknas till i filter och metarader.
 */
import { getEntry, type CollectionEntry } from 'astro:content';
import {
  artikelUrl,
  jamforelseUrl,
  kategoriUrl,
  publicerade,
  testUrl,
  typEtikett,
} from './innehall';
import { KALKYLATORER } from './kalkyl/register';
import type { Niva } from './niva';
import { PELARE, type PelareSlug } from './pelare';
import {
  billigasteErbjudande,
  hamtaProdukt,
  produkterIKategori,
  produktNamn,
  type Erbjudande,
} from './produkter';

/**
 * Korttyper i den ordning typfiltret på /guider/ visar dem. "kategori" är en
 * kategorisida (en granskning på datablad), inte en artikel.
 */
export const KORTTYPER = [
  'kopguide',
  'problemguide',
  'projektguide',
  'kunskap',
  'test',
  'jamforelse',
  'kategori',
] as const;

export type KortTyp = (typeof KORTTYPER)[number];

/** Typens namn i plural, för H1 och title på /guider/typ/[typ]/. */
export const TYP_PLURAL: Record<KortTyp, string> = {
  kopguide: 'Köpguider',
  problemguide: 'Problemguider',
  projektguide: 'Projektguider',
  kunskap: 'Kunskapsartiklar',
  test: 'Tester och granskningar',
  jamforelse: 'Jämförelser',
  kategori: 'Granskade produktgrupper', // guider.typ.kategori.plural
};

export interface KortData {
  /** "Köpguide", "Granskning", "Granskad på datablad". Från typEtikett() */
  etikett: string;
  /** Visas som " · Mellan" efter etiketten. Kategorikort har ingen nivå. */
  niva?: Niva;
  rubrik: string;
  beskrivning: string;
  /** Egen skiss eller eget foto från frontmatter. Aldrig en packshot. */
  illustration?: ImageMetadata;
  pelare: PelareSlug;
  /** Publicerad eller uppdaterad. Utelämnas på kategorikort. */
  datum?: Date;
  /** Fri text i metaraden i stället för datum: "9 granskade". */
  meta?: string;
  href: string;
  /**
   * Kategorikortets bildyta: vårt val och antalet granskade maskiner, satta som
   * kalkylatorns resultat på det blanka bladet. Aldrig en packshot.
   */
  bladfakta?: { val?: string; antal?: number };
  /** Filternyckel på /guider/ och gruppnyckel på hubben. */
  typ: KortTyp;
  /** publicerad för artiklar, uppdaterad för kategorisidor. Bara för sortering. */
  sorteringsdatum: Date;
}

type Artikelpost = CollectionEntry<'guider'> | CollectionEntry<'kunskap'>;

/** Nyast först. Kort utan datum hamnar sist. */
export function nyastForst(a: KortData, b: KortData): number {
  return b.sorteringsdatum.getTime() - a.sorteringsdatum.getTime();
}

export function tillKortArtikel(entry: Artikelpost): KortData {
  return {
    etikett: typEtikett(entry.data.typ),
    niva: entry.data.niva,
    rubrik: entry.data.title,
    beskrivning: entry.data.description,
    ...(entry.data.bild ? { illustration: entry.data.bild } : {}),
    pelare: entry.data.pelare,
    datum: entry.data.publicerad,
    href: artikelUrl(entry),
    typ: entry.data.typ as KortTyp,
    sorteringsdatum: entry.data.publicerad,
  };
}

export function tillKortTest(entry: CollectionEntry<'tester'>, pelare: PelareSlug): KortData {
  return {
    etikett: typEtikett('test', entry.data.etikett),
    niva: entry.data.niva,
    rubrik: entry.data.title,
    beskrivning: entry.data.description,
    ...(entry.data.bild ? { illustration: entry.data.bild } : {}),
    pelare,
    datum: entry.data.publicerad,
    href: testUrl(entry),
    typ: 'test',
    sorteringsdatum: entry.data.publicerad,
  };
}

export function tillKortJamforelse(entry: CollectionEntry<'jamforelser'>, pelare: PelareSlug): KortData {
  return {
    etikett: 'Jämförelse',
    niva: entry.data.niva,
    rubrik: entry.data.title,
    beskrivning: entry.data.description,
    ...(entry.data.bild ? { illustration: entry.data.bild } : {}),
    pelare,
    datum: entry.data.publicerad,
    href: jamforelseUrl(entry),
    typ: 'jamforelse',
    sorteringsdatum: entry.data.publicerad,
  };
}

/**
 * Kategorikortet. Bildytan är det blanka bladet med vårt val och antalet
 * granskade maskiner, aldrig en produktbild. Beskrivningen är kategorins egen.
 * Utan databas visas bladet utan tal, och kortet fungerar ändå.
 */
export async function tillKortKategori(entry: CollectionEntry<'kategorier'>): Promise<KortData> {
  const val = entry.data.val[0];
  const produkt = val ? await hamtaProdukt(val.produkt) : null;
  const produkter = await produkterIKategori(entry.id);
  const antal = produkter.length;
  const namn = produkt ? produktNamn(produkt) : null;
  const pelare = (entry.data.pelare[0] ?? 'fukt') as PelareSlug;
  const datum = entry.data.uppdaterad ?? new Date(0);

  return {
    etikett: 'Granskad på datablad',
    rubrik: entry.data.namn,
    beskrivning: entry.data.description,
    pelare,
    ...(antal > 0 ? { meta: `${antal} granskade` } : {}),
    href: kategoriUrl(entry.id),
    bladfakta: {
      ...(namn ? { val: namn } : {}),
      ...(antal > 0 ? { antal } : {}),
    },
    typ: 'kategori',
    sorteringsdatum: datum,
  };
}

/** Ett val i kategorikortet på startsidan: etiketten, produktens namn och billigaste pris. */
export interface KategoriValRad {
  etikett: string;
  produktNamn: string;
  pris: number | null;
}

/**
 * Startsidans Granskat på datablad: kategorins två första val som finns i
 * databasen, med billigaste erbjudandets pris. prisDatum är det äldsta
 * `uppdaterad` bland de visade erbjudandena och butikNamn det senastes butik; båda null
 * när inget val har ett erbjudande. Utan databas blir val tom. Startsidan är
 * enda anroparen. Spec: spec-designlyft-a-2026-10-02 avsnitt 5.5.
 */
export async function kategoriVal(entry: CollectionEntry<'kategorier'>): Promise<{
  namn: string;
  href: string;
  antal: number;
  val: KategoriValRad[];
  prisDatum: Date | null;
  butikNamn: string | null;
}> {
  const val: KategoriValRad[] = [];
  const erbjudanden: Erbjudande[] = [];
  for (const v of entry.data.val) {
    if (val.length === 2) break;
    const produkt = await hamtaProdukt(v.produkt);
    if (!produkt) continue;
    const erbjudande = billigasteErbjudande(produkt);
    if (erbjudande) erbjudanden.push(erbjudande);
    val.push({ etikett: v.etikett, produktNamn: produktNamn(produkt), pris: erbjudande?.pris ?? null });
  }
  const senast = erbjudanden.reduce<Erbjudande | null>(
    (a, b) => (a === null || b.uppdaterad.getTime() > a.uppdaterad.getTime() ? b : a),
    null,
  );
  /** Ett datum som står för flera priser är det äldsta (spec-designlyft-b avsnitt 10.2). */
  const aldst = erbjudanden.reduce<Erbjudande | null>(
    (a, b) => (a === null || b.uppdaterad.getTime() < a.uppdaterad.getTime() ? b : a),
    null,
  );
  const produkter = await produkterIKategori(entry.id);
  return {
    namn: entry.data.namn,
    href: kategoriUrl(entry.id),
    antal: produkter.length,
    val,
    prisDatum: aldst ? aldst.uppdaterad : null,
    butikNamn: senast ? senast.butikNamn : null,
  };
}

/** Hubbens grupper, i den ordning hubben visar dem. */
export const HUBGRUPPER = ['hitta-felet', 'valj-ratt', 'gor-det-sjalv', 'rakna'] as const;
export type Grupp = (typeof HUBGRUPPER)[number];

/**
 * Pelarhubbens urval, på ett ställe (förut i Kortgrupp och dubblerat i
 * PelarHub). Grupperna i ordningen ovan, utan tomma grupper:
 *   hitta-felet    problemguider och kunskap, nyast först
 *   valj-ratt      kategorisidor som kategorikort, sedan köpguider och jämförelser
 *   gor-det-sjalv  projektguider
 *   rakna          räknarna i pelaren
 * Spec: spec-designlyft-a-2026-10-02 avsnitt 4.5.
 */
export async function hubGrupper(
  pelare: PelareSlug,
): Promise<{ id: Grupp; kort: KortData[]; kalkylatorer: string[] }[]> {
  const artiklar = [...(await publicerade('guider')), ...(await publicerade('kunskap'))].filter(
    (e) => e.data.pelare === pelare,
  );
  const allaKategorier = await publicerade('kategorier');
  const kategorier = allaKategorier.filter((k) => (k.data.pelare as readonly string[]).includes(pelare));

  const hittaFelet = artiklar
    .filter((e) => e.data.typ === 'problemguide' || e.data.typ === 'kunskap')
    .map(tillKortArtikel)
    .sort(nyastForst);

  const gorDetSjalv = artiklar
    .filter((e) => e.data.typ === 'projektguide')
    .map(tillKortArtikel)
    .sort(nyastForst);

  const kategorikort = await Promise.all(kategorier.map(tillKortKategori));
  const jamforelser = await Promise.all(
    (await publicerade('jamforelser')).map(async (e) => ({
      entry: e,
      pelare: await pelareForKategori(e.data.kategori),
    })),
  );
  const ovriga = [
    ...artiklar.filter((e) => e.data.typ === 'kopguide').map(tillKortArtikel),
    ...jamforelser.filter((j) => j.pelare === pelare).map((j) => tillKortJamforelse(j.entry, j.pelare)),
  ].sort(nyastForst);
  const valjRatt = [...kategorikort, ...ovriga];

  /*
   * En räknare hör till pelaren antingen direkt (listan pelare i registret)
   * eller genom sin produktkategori. Daggpunkten pekar inte på någon kategori,
   * och utan det första ledet skulle den aldrig synas i en hub. Listan gör att
   * samma räknare kan höra hemma i två ämnen, som elkostnaden.
   */
  const kalkylatorer = KALKYLATORER.filter((k) => {
    if (k.pelare?.includes(pelare)) return true;
    if (!k.kategori) return false;
    const kategori = allaKategorier.find((x) => x.id === k.kategori);
    return kategori ? (kategori.data.pelare as readonly string[]).includes(pelare) : false;
  }).map((k) => k.slug);

  const grupper: { id: Grupp; kort: KortData[]; kalkylatorer: string[] }[] = [
    { id: 'hitta-felet', kort: hittaFelet, kalkylatorer: [] },
    { id: 'valj-ratt', kort: valjRatt, kalkylatorer: [] },
    { id: 'gor-det-sjalv', kort: gorDetSjalv, kalkylatorer: [] },
    { id: 'rakna', kort: [], kalkylatorer },
  ];
  return grupper.filter((g) => g.kort.length + g.kalkylatorer.length > 0);
}

/**
 * Pelaren ett test eller en jämförelse räknas till: kategorifilens första
 * pelare. Saknas kategorifilen (kontrolleras av npm run kontrollera) faller vi
 * tillbaka på den första pelaren i registret hellre än att tappa kortet.
 */
export async function pelareForKategori(kategoriSlug: string): Promise<PelareSlug> {
  const kategori = await getEntry('kategorier', kategoriSlug);
  const forst = kategori?.data.pelare[0];
  return (forst ?? PELARE[0].slug) as PelareSlug;
}

export interface AllaKortVal {
  /** Kategorisidor med noindex hör inte hemma i ett galleri. Standard false. */
  medNoindexKategorier?: boolean;
  /** Kategorisidor som kort. Standard true. */
  medKategorier?: boolean;
}

/**
 * Allt publicerat som har en sida att gå till, nyast först. Källan till
 * /guider/, till startsidans rutnät och till hubbens grupper.
 */
export async function allaKort(val: AllaKortVal = {}): Promise<KortData[]> {
  const { medNoindexKategorier = false, medKategorier = true } = val;

  const guider = (await publicerade('guider')).map(tillKortArtikel);
  const kunskap = (await publicerade('kunskap')).map(tillKortArtikel);

  const tester = await Promise.all(
    (await publicerade('tester')).map(async (e) => tillKortTest(e, await pelareForKategori(e.data.kategori))),
  );
  const jamforelser = await Promise.all(
    (await publicerade('jamforelser')).map(async (e) =>
      tillKortJamforelse(e, await pelareForKategori(e.data.kategori)),
    ),
  );

  const kategorier = medKategorier
    ? await Promise.all(
        (await publicerade('kategorier'))
          .filter((k) => medNoindexKategorier || !k.data.noindex)
          .map(tillKortKategori),
      )
    : [];

  return [...guider, ...kunskap, ...tester, ...jamforelser, ...kategorier].sort(nyastForst);
}
