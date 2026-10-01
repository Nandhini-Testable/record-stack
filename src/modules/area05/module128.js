'use strict';

function compute128(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 128, 0);
}

function describe128() {
  return { id: 128, name: 'module128' };
}

module.exports = { compute128, describe128 };
