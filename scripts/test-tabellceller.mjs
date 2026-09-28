/**
 * Test för markeraCeller() i scripts/tabellceller.mjs, som pluginet
 * tabellBehallare i astro.config.mjs kör på varje markdown-tabell.
 * Spec: docs/briefer/spec-skal-budget-2026-09-28.md avsnitt 14.2.
 *
 *   node --test scripts/test-tabellceller.mjs
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { markeraCeller } from './tabellceller.mjs';

const text = (value) => ({ type: 'text', value });
const cell = (tagName, innehall) => ({ type: 'element', tagName, properties: {}, children: [text(innehall)] });
const rad = (...celler) => ({ type: 'element', tagName: 'tr', properties: {}, children: celler });
const del = (tagName, ...rader) => ({ type: 'element', tagName, properties: {}, children: rader });

/** Klasserna på varje cell, rad för rad, i dokumentordning. */
function cellklasser(barn) {
  const ut = [];
  const ga = (nod) => {
    if (nod.type !== 'element') return;
    if (nod.tagName === 'td' || nod.tagName === 'th') ut.push([nod.tagName, nod.properties?.className ?? []]);
    for (const b of nod.children ?? []) ga(b);
  };
  barn.forEach(ga);
  return ut;
}

const LANG = 'Bygglov krävs alltid när altanen är hög';

test('övervägande korta celler: tabellen får korta-celler och bara den långa cellen lang-cell', () => {
  const barn = [
    del('tbody', rad(cell('td', '1,9 °C'), cell('td', '12 mm')), rad(cell('td', '25 l/dygn'), cell('td', LANG))),
  ];
  const { tabellklasser, barn: ut } = markeraCeller(barn);
  assert.deepEqual(tabellklasser, ['korta-celler']);
  assert.deepEqual(cellklasser(ut), [
    ['td', []],
    ['td', []],
    ['td', []],
    ['td', ['lang-cell']],
  ]);
});

test('övervägande långa celler: som förut, kort-cell på de korta', () => {
  const barn = [del('tbody', rad(cell('td', '12 mm'), cell('td', LANG)), rad(cell('td', LANG), cell('td', LANG)))];
  const { tabellklasser, barn: ut } = markeraCeller(barn);
  assert.deepEqual(tabellklasser, []);
  assert.deepEqual(cellklasser(ut), [
    ['td', ['kort-cell']],
    ['td', []],
    ['td', []],
    ['td', []],
  ]);
});

test('rubrikrad: ingen th får någon klass, oavsett längd', () => {
  const barn = [
    del('thead', rad(cell('th', 'Mått'), cell('th', 'Tillverkarens maxyta per maskin'))),
    del('tbody', rad(cell('td', '12 mm'), cell('td', LANG)), rad(cell('td', LANG), cell('td', LANG))),
  ];
  const { barn: ut } = markeraCeller(barn);
  const th = cellklasser(ut).filter(([tag]) => tag === 'th');
  assert.deepEqual(th, [
    ['th', []],
    ['th', []],
  ]);
});

test('lika många korta som långa räknas som övervägande korta, och tomma celler är korta', () => {
  const tom = { type: 'element', tagName: 'td', properties: {}, children: [] };
  const barn = [del('tbody', rad(tom, cell('td', LANG)))];
  const { tabellklasser, barn: ut } = markeraCeller(barn);
  assert.deepEqual(tabellklasser, ['korta-celler']);
  assert.deepEqual(cellklasser(ut), [
    ['td', []],
    ['td', ['lang-cell']],
  ]);
});

test('ingenting muteras', () => {
  const barn = [del('tbody', rad(cell('td', '12 mm'), cell('td', LANG)))];
  const fore = JSON.stringify(barn);
  markeraCeller(barn);
  assert.equal(JSON.stringify(barn), fore);
});
