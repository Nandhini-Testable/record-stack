'use strict';

function compute247(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 247, 0);
}

function describe247() {
  return { id: 247, name: 'module247' };
}

module.exports = { compute247, describe247 };
