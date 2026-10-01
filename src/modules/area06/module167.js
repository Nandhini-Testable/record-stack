'use strict';

function compute167(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 167, 0);
}

function describe167() {
  return { id: 167, name: 'module167' };
}

module.exports = { compute167, describe167 };
