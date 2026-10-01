'use strict';

function compute97(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 97, 0);
}

function describe97() {
  return { id: 97, name: 'module097' };
}

module.exports = { compute97, describe97 };
