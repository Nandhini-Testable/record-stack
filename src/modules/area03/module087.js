'use strict';

function compute87(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 87, 0);
}

function describe87() {
  return { id: 87, name: 'module087' };
}

module.exports = { compute87, describe87 };
