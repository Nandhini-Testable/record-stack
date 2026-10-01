'use strict';

function compute179(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 179, 0);
}

function describe179() {
  return { id: 179, name: 'module179' };
}

module.exports = { compute179, describe179 };
