'use strict';

function compute299(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 299, 0);
}

function describe299() {
  return { id: 299, name: 'module299' };
}

module.exports = { compute299, describe299 };
