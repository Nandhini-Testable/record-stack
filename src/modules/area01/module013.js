'use strict';

function compute13(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 13, 0);
}

function describe13() {
  return { id: 13, name: 'module013' };
}

module.exports = { compute13, describe13 };
