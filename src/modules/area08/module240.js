'use strict';

function compute240(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 240, 0);
}

function describe240() {
  return { id: 240, name: 'module240' };
}

module.exports = { compute240, describe240 };
