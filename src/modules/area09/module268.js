'use strict';

function compute268(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 268, 0);
}

function describe268() {
  return { id: 268, name: 'module268' };
}

module.exports = { compute268, describe268 };
