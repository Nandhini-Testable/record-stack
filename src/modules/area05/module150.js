'use strict';

function compute150(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 150, 0);
}

function describe150() {
  return { id: 150, name: 'module150' };
}

module.exports = { compute150, describe150 };
