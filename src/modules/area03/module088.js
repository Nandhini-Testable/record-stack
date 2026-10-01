'use strict';

function compute88(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 88, 0);
}

function describe88() {
  return { id: 88, name: 'module088' };
}

module.exports = { compute88, describe88 };
