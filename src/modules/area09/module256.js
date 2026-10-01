'use strict';

function compute256(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 256, 0);
}

function describe256() {
  return { id: 256, name: 'module256' };
}

module.exports = { compute256, describe256 };
