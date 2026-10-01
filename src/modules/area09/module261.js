'use strict';

function compute261(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 261, 0);
}

function describe261() {
  return { id: 261, name: 'module261' };
}

module.exports = { compute261, describe261 };
