'use strict';

function compute113(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 113, 0);
}

function describe113() {
  return { id: 113, name: 'module113' };
}

module.exports = { compute113, describe113 };
