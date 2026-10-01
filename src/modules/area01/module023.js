'use strict';

function compute23(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 23, 0);
}

function describe23() {
  return { id: 23, name: 'module023' };
}

module.exports = { compute23, describe23 };
