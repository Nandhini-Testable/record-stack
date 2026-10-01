'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { compute7 } = require('../src/modules/area01/module007.js');

test('compute7 sums weighted values', () => {
  assert.strictEqual(compute7([1, 2, 3]), 42);
});
