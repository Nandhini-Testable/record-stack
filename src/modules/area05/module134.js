'use strict';

function compute134(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 134, 0);
}

function describe134() {
  return { id: 134, name: 'module134' };
}

module.exports = { compute134, describe134 };
