'use strict';

function compute62(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 62, 0);
}

function describe62() {
  return { id: 62, name: 'module062' };
}

module.exports = { compute62, describe62 };
