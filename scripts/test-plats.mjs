/**
 * Platsregistret och ordningen på en hub som ordnas efter plats.
 * Spec: docs/briefer/spec-fukthubb-plats-2026-09-30.md avsnitt 6.
 *
 * Körs med:
 *   node --experimental-strip-types --test scripts/test-plats.mjs
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { gruppForTyp, ordnaEfterPlats, PLATSER, STANDARD_PLATS } from '../src/lib/plats.ts';
import { lasFrontmatter } from './frontmatter.ts';

const ROT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const FUKT = PLATSER.fukt;

/** Rad med standardvärden; id för att känna igen den i utfallet. */
function rad(id, falt = {}) {
  return { id, grupp: 'hitta-felet', forrang: 1, datum: 0, ...falt };
}
const ider = (rader) => rader.map((r) => r.id);

test('registret för fukt finns', () => {
  assert.ok(FUKT && FUKT.length === 8);
});

test('1. rad utan plats hamnar under hela-huset', () => {
  const ut = ordnaEfterPlats([rad('a')], FUKT);
  assert.equal(ut.length, 1);
  assert.equal(ut[0].plats.slug, 'hela-huset');
  assert.equal(STANDARD_PLATS, 'hela-huset');
  assert.deepEqual(ider(ut[0].rader), ['a']);
});

test('2. platsernas ordning följer registret, inte indata', () => {
  const indata = [...FUKT].reverse().map((p) => rad(p.slug, { plats: p.slug }));
  const ut = ordnaEfterPlats(indata, FUKT);
  assert.deepEqual(
    ut.map((p) => p.plats.slug),
    FUKT.map((p) => p.slug),
  );
});

test('3. tom plats tas inte med', () => {
  const ut = ordnaEfterPlats([rad('a', { plats: 'kallare' }), rad('b', { plats: 'luften' })], FUKT);
  assert.deepEqual(
    ut.map((p) => p.plats.slug),
    ['kallare', 'luften'],
  );
});

test('4. grupperna i fast ordning oavsett indata', () => {
  const indata = [
    rad('r', { plats: 'kallare', grupp: 'rakna' }),
    rad('g', { plats: 'kallare', grupp: 'gor-det-sjalv', datum: 3 }),
    rad('v', { plats: 'kallare', grupp: 'valj-ratt', datum: 2 }),
    rad('h', { plats: 'kallare', grupp: 'hitta-felet', datum: 1 }),
  ];
  const ut = ordnaEfterPlats(indata, FUKT);
  assert.deepEqual(ider(ut[0].rader), ['h', 'v', 'g', 'r']);
});

test('5. i Välj rätt står kategorin före en nyare köpguide', () => {
  const indata = [
    rad('kopguide', { grupp: 'valj-ratt', forrang: 1, datum: Date.UTC(2026, 8, 30) }),
    rad('kategori', { grupp: 'valj-ratt', forrang: 0, datum: Date.UTC(2026, 0, 1) }),
  ];
  const ut = ordnaEfterPlats(indata, FUKT);
  assert.deepEqual(ider(ut[0].rader), ['kategori', 'kopguide']);
});

test('6. inom en grupp nyast först', () => {
  const indata = [
    rad('gammal', { datum: Date.UTC(2026, 0, 1) }),
    rad('ny', { datum: Date.UTC(2026, 8, 1) }),
    rad('mitten', { datum: Date.UTC(2026, 4, 1) }),
  ];
  const ut = ordnaEfterPlats(indata, FUKT);
  assert.deepEqual(ider(ut[0].rader), ['ny', 'mitten', 'gammal']);
});

test('6b. egna sidor före grannsidor i samma grupp, även när grannen är nyare', () => {
  const indata = [
    rad('granne', { forrang: 2, datum: Date.UTC(2026, 8, 30) }),
    rad('egen', { forrang: 1, datum: Date.UTC(2026, 0, 1) }),
  ];
  assert.deepEqual(ider(ordnaEfterPlats(indata, FUKT)[0].rader), ['egen', 'granne']);
});

test('7. två räknare med datum 0 behåller indataordningen', () => {
  const indata = [rad('forsta', { grupp: 'rakna' }), rad('andra', { grupp: 'rakna' })];
  assert.deepEqual(ider(ordnaEfterPlats(indata, FUKT)[0].rader), ['forsta', 'andra']);
  const omvand = [rad('andra', { grupp: 'rakna' }), rad('forsta', { grupp: 'rakna' })];
  assert.deepEqual(ider(ordnaEfterPlats(omvand, FUKT)[0].rader), ['andra', 'forsta']);
});

test('8. okänd plats kastar med slugen i meddelandet', () => {
  assert.throws(() => ordnaEfterPlats([rad('a', { plats: 'balkong' })], FUKT), /balkong/);
});

test('9. gruppForTyp för alla sex typer, okänd typ kastar', () => {
  assert.equal(gruppForTyp('problemguide'), 'hitta-felet');
  assert.equal(gruppForTyp('kunskap'), 'hitta-felet');
  assert.equal(gruppForTyp('kopguide'), 'valj-ratt');
  assert.equal(gruppForTyp('jamforelse'), 'valj-ratt');
  assert.equal(gruppForTyp('kategori'), 'valj-ratt');
  assert.equal(gruppForTyp('projektguide'), 'gor-det-sjalv');
  assert.throws(() => gruppForTyp('test'), /test/);
});

test('10. varje grannsida i fukt.mdx har en plats i registret', () => {
  const text = readFileSync(join(ROT, 'src', 'content', 'pelare', 'fukt.mdx'), 'utf8');
  const { data, fel } = lasFrontmatter(text);
  assert.equal(fel, null);
  assert.ok(Array.isArray(data.grannsidor) && data.grannsidor.length > 0, 'grannsidor saknas i fukt.mdx');
  const slugs = FUKT.map((p) => p.slug);
  for (const g of data.grannsidor) {
    assert.ok(slugs.includes(g.plats), `${g.id}: platsen "${g.plats}" finns inte i PLATSER.fukt`);
  }
});
