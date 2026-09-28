/**
 * Markerar korta och långa celler i en markdown-tabell, för reglerna under
 * `.prosa .brodtabell` i src/styles/global.css. Används av pluginet
 * `tabellBehallare` i astro.config.mjs och testas i scripts/test-tabellceller.mjs.
 *
 * Cellens egen textlängd avgör om den är kort, så klassen kan inte sättas en
 * gång på tabellen. För att inte skriva en klass på varje cell får bara den
 * mindre gruppen `td` en klass (spec-skal-budget-2026-09-28 avsnitt 14.2):
 *
 * - Är de korta minst lika många som de långa får tabellen `korta-celler` och
 *   de långa `lang-cell`.
 * - Annars får de korta `kort-cell`, som förut.
 *
 * `th` markeras aldrig: rubrikerna bryts alltid (regeln för
 * `.prosa .brodtabell th`), och klassen gjorde ingenting där.
 *
 * Ren Node utan beroenden, så att astro.config.mjs och testet kan ladda den.
 * Inget muteras; funktionerna ger nya grenar.
 */

/** Längsta celltext som får hållas ihop på en rad. Värden som "1 × 12,5 mm"
 *  och "1,9 °C" ska aldrig brytas mellan tal och enhet; hela meningar bryts
 *  som vanligt, annars blir tabellen orimligt bred att dra i. 16 tecken,
 *  sänkt från 30 efter granskningen 2026-09-16 punkt 5.2: ett tal med enhet
 *  ryms, en kort mening ("Bygglov krävs alltid") gör det inte, och det var
 *  sådana celler som sköt tvåkolumnstabellen utanför 343 px. */
export const KORT_CELL = 16;

/** @type {(nod: any) => string} */
function celltext(nod) {
  if (nod.type === 'text') return nod.value ?? '';
  if (!Array.isArray(nod.children)) return '';
  return nod.children.map(celltext).join('');
}

/** Tomma celler räknas som korta: de ska inte kräva någon spaltbredd alls. */
/** @type {(nod: any) => boolean} */
function arKort(nod) {
  return celltext(nod).trim().length <= KORT_CELL;
}

/** Alla td i grenen, i dokumentordning. */
/** @type {(nod: any, ut?: any[]) => any[]} */
function allaTd(nod, ut = []) {
  if (nod.type !== 'element') return ut;
  if (nod.tagName === 'td') ut.push(nod);
  for (const barn of nod.children ?? []) allaTd(barn, ut);
  return ut;
}

/** Ny gren där varje td som `valj` godkänner fått `klass`. */
/** @type {(nod: any, valj: (td: any) => boolean, klass: string) => any} */
function markera(nod, valj, klass) {
  if (nod.type !== 'element' || !Array.isArray(nod.children)) return nod;
  const barn = nod.children.map((b) => markera(b, valj, klass));
  if (nod.tagName !== 'td' || !valj(nod)) return { ...nod, children: barn };
  const gamla = nod.properties?.className;
  const klasser = Array.isArray(gamla) ? gamla : gamla ? [gamla] : [];
  return { ...nod, properties: { ...nod.properties, className: [...klasser, klass] }, children: barn };
}

/**
 * Tabellens barn med cellklasserna satta, och klasserna tabellen själv ska få
 * utöver sina egna.
 *
 * @param {any[]} barn tabellens barn (thead, tbody, tr)
 * @returns {{ tabellklasser: string[], barn: any[] }}
 */
export function markeraCeller(barn) {
  const td = barn.flatMap((b) => allaTd(b));
  const korta = td.filter(arKort).length;
  const langa = td.length - korta;
  if (korta > 0 && korta >= langa) {
    return {
      tabellklasser: ['korta-celler'],
      barn: barn.map((b) => markera(b, (c) => !arKort(c), 'lang-cell')),
    };
  }
  return { tabellklasser: [], barn: barn.map((b) => markera(b, arKort, 'kort-cell')) };
}
