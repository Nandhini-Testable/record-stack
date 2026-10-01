'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { compute3 } = require('../src/modules/area01/module003.js');

test('compute3 sums weighted values', () => {
  assert.strictEqual(compute3([1, 2, 3]), 18);
});
