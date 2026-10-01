'use strict';

function compute63(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 63, 0);
}

function describe63() {
  return { id: 63, name: 'module063' };
}

module.exports = { compute63, describe63 };
