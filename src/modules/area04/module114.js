'use strict';

function compute114(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 114, 0);
}

function describe114() {
  return { id: 114, name: 'module114' };
}

module.exports = { compute114, describe114 };
