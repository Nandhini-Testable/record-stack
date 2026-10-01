'use strict';

function compute10(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 10, 0);
}

function describe10() {
  return { id: 10, name: 'module010' };
}

module.exports = { compute10, describe10 };
