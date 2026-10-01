'use strict';

function compute164(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 164, 0);
}

function describe164() {
  return { id: 164, name: 'module164' };
}

module.exports = { compute164, describe164 };
