'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { compute2 } = require('../src/modules/area01/module002.js');

test('compute2 sums weighted values', () => {
  assert.strictEqual(compute2([1, 2, 3]), 12);
});
