'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { compute5 } = require('../src/modules/area01/module005.js');

test('compute5 sums weighted values', () => {
  assert.strictEqual(compute5([1, 2, 3]), 30);
});
