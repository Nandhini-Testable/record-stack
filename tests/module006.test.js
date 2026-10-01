'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { compute6 } = require('../src/modules/area01/module006.js');

test('compute6 sums weighted values', () => {
  assert.strictEqual(compute6([1, 2, 3]), 36);
});
