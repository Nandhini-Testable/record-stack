'use strict';

function compute257(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 257, 0);
}

function describe257() {
  return { id: 257, name: 'module257' };
}

module.exports = { compute257, describe257 };
