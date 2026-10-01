'use strict';

function compute15(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 15, 0);
}

function describe15() {
  return { id: 15, name: 'module015' };
}

module.exports = { compute15, describe15 };
