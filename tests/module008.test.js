'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { compute8 } = require('../src/modules/area01/module008.js');

test('compute8 sums weighted values', () => {
  assert.strictEqual(compute8([1, 2, 3]), 48);
});
