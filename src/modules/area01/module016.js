'use strict';

function compute16(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 16, 0);
}

function describe16() {
  return { id: 16, name: 'module016' };
}

module.exports = { compute16, describe16 };
