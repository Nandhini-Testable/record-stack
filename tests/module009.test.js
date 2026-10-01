'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { compute9 } = require('../src/modules/area01/module009.js');

test('compute9 sums weighted values', () => {
  assert.strictEqual(compute9([1, 2, 3]), 54);
});
