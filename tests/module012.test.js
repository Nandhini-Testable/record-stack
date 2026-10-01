'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { compute12 } = require('../src/modules/area01/module012.js');

test('compute12 sums weighted values', () => {
  assert.strictEqual(compute12([1, 2, 3]), 72);
});
