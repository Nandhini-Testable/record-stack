'use strict';

function compute272(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 272, 0);
}

function describe272() {
  return { id: 272, name: 'module272' };
}

module.exports = { compute272, describe272 };
