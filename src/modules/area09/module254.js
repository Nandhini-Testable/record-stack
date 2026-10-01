'use strict';

function compute254(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 254, 0);
}

function describe254() {
  return { id: 254, name: 'module254' };
}

module.exports = { compute254, describe254 };
