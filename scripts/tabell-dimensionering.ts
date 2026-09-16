/**
 * Skriver docs/briefer/tabell-dimensionering-avfuktare.md: dimensioneringstabellen
 * som köpguiden om avfuktare i källaren saknar (SEO-granskningen 2026-09-16,
 * avsnitt 2 punkt 1).
 *
 *   node --experimental-strip-types scripts/tabell-dimensionering.ts
 *
 * Talen kommer ur samma funktion som kalkylatorn, src/lib/kalkyl/avfuktare.ts.
 * Ingen siffra skrivs för hand: ändras formeln körs skriptet om och tabellen
 * följer med. Ingår inte i npm run build, den är en brief till skribenten.
 */
import { writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { raknaAvfuktare, type Fuktniva, type Temperaturval } from '../src/lib/kalkyl/avfuktare.ts';

const ROT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const MAL = join(ROT, 'docs', 'briefer', 'tabell-dimensionering-avfuktare.md');

const YTOR = [20, 40, 60, 80];
const TAKHOJD = 2.2;
const FUKTNIVAER: { varde: Fuktniva; etikett: string }[] = [
  { varde: 'medel', etikett: 'Medel' },
  { varde: 'hog', etikett: 'Hög' },
  { varde: 'mycket_hog', etikett: 'Mycket hög' },
];
const TEMPERATURER: { varde: Temperaturval; etikett: string }[] = [
  { varde: 'over_15', etikett: 'kondens' },
  { varde: 'fem_till_15', etikett: 'sorption' },
];

function kapacitet(ytaKvm: number, fuktniva: Fuktniva, temperatur: Temperaturval): string {
  const r = raknaAvfuktare({ ytaKvm, takhojdM: TAKHOJD, fuktniva, temperatur });
  if (r.status !== 'ok') throw new Error(`Oväntat svar för ${ytaKvm} kvm, ${fuktniva}, ${temperatur}: ${r.status}`);
  return String(r.marktKapacitetLiter);
}

const rubriker = ['Yta', ...FUKTNIVAER.flatMap((f) => TEMPERATURER.map((t) => `${f.etikett}, ${t.etikett}`))];
const rader = YTOR.map((yta) => [
  `${yta} kvm`,
  ...FUKTNIVAER.flatMap((f) => TEMPERATURER.map((t) => kapacitet(yta, f.varde, t.varde))),
]);

const tabell = [
  `| ${rubriker.join(' | ')} |`,
  `|${rubriker.map(() => '---').join('|')}|`,
  ...rader.map((r) => `| ${r.join(' | ')} |`),
].join('\n');

const text = `# Dimensioneringstabell, avfuktare

Underlag till köpguiden /fukt/avfuktare-kallare/ (SEO-granskningen 2026-09-16, avsnitt 2 punkt 1).
Skribenten lägger in tabellen under H2 "Så stor avfuktare behöver du".

Talen är **märkt kapacitet i liter per dygn**, alltså siffran på lådan, inte vad maskinen tar upp i din källare.
Kondens gäller utrymmen över 15 grader, sorption utrymmen mellan 5 och 15 grader. Under 5 grader räknar vi inte.
Fuktnivån är den du mäter i dag: medel 60 till 70 % RF, hög 70 till 80 %, mycket hög över 80 %.

${tabell}

Antaganden: takhöjd 2,2 m, målnivå 55 % RF, 0,5 luftomsättningar i timmen, uteluft 10,0 g/m³ (augusti),
markfukt 10, 40 respektive 100 g per kvm och dygn, marginal 1,3, och omräkning från märkt kapacitet till
verklig med 0,30 vid 15 grader (kondens) och 0,80 vid 10 grader (sorption). Varje konstant med källa eller
med ordet antagande står i src/lib/kalkyl/avfuktare.ts och i docs/briefer/underlag-kalkyl-avfuktare.md.
Samma formel som kalkylatorn på /rakna/avfuktare/, så tabellen och räknaren kan inte säga olika saker.

Genererad av scripts/tabell-dimensionering.ts. Ändra inte siffrorna för hand, kör om skriptet.
`;

writeFileSync(MAL, text, 'utf8');
console.log(`Skrev docs/briefer/tabell-dimensionering-avfuktare.md, ${rader.length} rader.`);
