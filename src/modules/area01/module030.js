'use strict';

function compute30(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 30, 0);
}

function describe30() {
  return { id: 30, name: 'module030' };
}

module.exports = { compute30, describe30 };
