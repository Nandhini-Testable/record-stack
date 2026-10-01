'use strict';

function compute32(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 32, 0);
}

function describe32() {
  return { id: 32, name: 'module032' };
}

module.exports = { compute32, describe32 };
