'use strict';

function compute36(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 36, 0);
}

function describe36() {
  return { id: 36, name: 'module036' };
}

module.exports = { compute36, describe36 };
