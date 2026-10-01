'use strict';

function compute84(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 84, 0);
}

function describe84() {
  return { id: 84, name: 'module084' };
}

module.exports = { compute84, describe84 };
