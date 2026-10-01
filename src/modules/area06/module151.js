'use strict';

function compute151(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 151, 0);
}

function describe151() {
  return { id: 151, name: 'module151' };
}

module.exports = { compute151, describe151 };
