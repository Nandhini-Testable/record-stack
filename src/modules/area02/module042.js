'use strict';

function compute42(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 42, 0);
}

function describe42() {
  return { id: 42, name: 'module042' };
}

module.exports = { compute42, describe42 };
