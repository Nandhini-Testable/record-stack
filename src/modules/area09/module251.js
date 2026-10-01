'use strict';

function compute251(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 251, 0);
}

function describe251() {
  return { id: 251, name: 'module251' };
}

module.exports = { compute251, describe251 };
