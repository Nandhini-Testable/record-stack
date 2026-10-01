'use strict';

function compute44(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 44, 0);
}

function describe44() {
  return { id: 44, name: 'module044' };
}

module.exports = { compute44, describe44 };
