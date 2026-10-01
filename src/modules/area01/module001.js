'use strict';

function compute1(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 1, 0);
}

function describe1() {
  return { id: 1, name: 'module001' };
}

module.exports = { compute1, describe1 };
