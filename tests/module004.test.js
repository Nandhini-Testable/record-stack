'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { compute4 } = require('../src/modules/area01/module004.js');

test('compute4 sums weighted values', () => {
  assert.strictEqual(compute4([1, 2, 3]), 24);
});
