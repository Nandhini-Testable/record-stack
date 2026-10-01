'use strict';

function compute169(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 169, 0);
}

function describe169() {
  return { id: 169, name: 'module169' };
}

module.exports = { compute169, describe169 };
