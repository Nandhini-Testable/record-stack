'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { compute13 } = require('../src/modules/area01/module013.js');

test('compute13 sums weighted values', () => {
  assert.strictEqual(compute13([1, 2, 3]), 78);
});
