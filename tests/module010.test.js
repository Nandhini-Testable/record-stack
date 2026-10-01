'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { compute10 } = require('../src/modules/area01/module010.js');

test('compute10 sums weighted values', () => {
  assert.strictEqual(compute10([1, 2, 3]), 60);
});
