/**
 * formateraSpecVarde i src/lib/format.ts: decimalkomma på tal ur databasens specs.
 *   node --experimental-strip-types --test scripts/test-format.mjs
 */
import assert from 'node:assert/strict';
import test from 'node:test';

import { formateraSpecVarde } from '../src/lib/format.ts';

const HART = ' ';

test('tal får decimalkomma och sina egna decimaler', () => {
  assert.equal(formateraSpecVarde(13.2), '13,2');
  assert.equal(formateraSpecVarde(7), '7');
  assert.equal(formateraSpecVarde(7.4), '7,4');
  assert.equal(formateraSpecVarde(7.40), '7,4');
  assert.equal(formateraSpecVarde(1250), `1${HART}250`);
});

test('högst två decimaler', () => {
  assert.equal(formateraSpecVarde(0.085), '0,085');
});

test('en sträng som bara är ett tal med punkt formateras likadant', () => {
  assert.equal(formateraSpecVarde('13.2'), '13,2');
});

test('allt annat är oförändrat', () => {
  assert.equal(formateraSpecVarde('IP44'), 'IP44');
  assert.equal(formateraSpecVarde('12–13 dB(A)'), '12–13 dB(A)');
  assert.equal(formateraSpecVarde(true), 'true');
});
