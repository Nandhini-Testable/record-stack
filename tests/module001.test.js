'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { compute1 } = require('../src/modules/area01/module001.js');

test('compute1 sums weighted values', () => {
  assert.strictEqual(compute1([1, 2, 3]), 6);
});
