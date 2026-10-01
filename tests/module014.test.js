'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { compute14 } = require('../src/modules/area01/module014.js');

test('compute14 sums weighted values', () => {
  assert.strictEqual(compute14([1, 2, 3]), 84);
});
