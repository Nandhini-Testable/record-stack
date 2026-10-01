'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { compute15 } = require('../src/modules/area01/module015.js');

test('compute15 sums weighted values', () => {
  assert.strictEqual(compute15([1, 2, 3]), 90);
});
