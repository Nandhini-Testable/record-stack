'use strict';

function compute123(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 123, 0);
}

function describe123() {
  return { id: 123, name: 'module123' };
}

module.exports = { compute123, describe123 };
