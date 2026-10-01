'use strict';

function compute80(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 80, 0);
}

function describe80() {
  return { id: 80, name: 'module080' };
}

module.exports = { compute80, describe80 };
