'use strict';

function compute237(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 237, 0);
}

function describe237() {
  return { id: 237, name: 'module237' };
}

module.exports = { compute237, describe237 };
