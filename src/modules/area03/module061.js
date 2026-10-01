'use strict';

function compute61(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 61, 0);
}

function describe61() {
  return { id: 61, name: 'module061' };
}

module.exports = { compute61, describe61 };
