'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { compute16 } = require('../src/modules/area01/module016.js');

test('compute16 sums weighted values', () => {
  assert.strictEqual(compute16([1, 2, 3]), 96);
});
