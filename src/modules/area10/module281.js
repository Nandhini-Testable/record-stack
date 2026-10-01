'use strict';

function compute281(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 281, 0);
}

function describe281() {
  return { id: 281, name: 'module281' };
}

module.exports = { compute281, describe281 };
