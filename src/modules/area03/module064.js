'use strict';

function compute64(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 64, 0);
}

function describe64() {
  return { id: 64, name: 'module064' };
}

module.exports = { compute64, describe64 };
