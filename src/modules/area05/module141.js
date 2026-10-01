'use strict';

function compute141(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 141, 0);
}

function describe141() {
  return { id: 141, name: 'module141' };
}

module.exports = { compute141, describe141 };
