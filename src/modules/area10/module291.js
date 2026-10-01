'use strict';

function compute291(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 291, 0);
}

function describe291() {
  return { id: 291, name: 'module291' };
}

module.exports = { compute291, describe291 };
