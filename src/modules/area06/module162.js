'use strict';

function compute162(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 162, 0);
}

function describe162() {
  return { id: 162, name: 'module162' };
}

module.exports = { compute162, describe162 };
