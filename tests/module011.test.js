'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { compute11 } = require('../src/modules/area01/module011.js');

test('compute11 sums weighted values', () => {
  assert.strictEqual(compute11([1, 2, 3]), 66);
});
