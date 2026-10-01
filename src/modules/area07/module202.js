'use strict';

function compute202(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 202, 0);
}

function describe202() {
  return { id: 202, name: 'module202' };
}

module.exports = { compute202, describe202 };
