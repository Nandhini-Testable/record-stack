'use strict';

function compute145(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 145, 0);
}

function describe145() {
  return { id: 145, name: 'module145' };
}

module.exports = { compute145, describe145 };
