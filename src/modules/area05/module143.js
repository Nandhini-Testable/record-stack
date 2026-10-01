'use strict';

function compute143(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 143, 0);
}

function describe143() {
  return { id: 143, name: 'module143' };
}

module.exports = { compute143, describe143 };
