'use strict';

function compute83(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 83, 0);
}

function describe83() {
  return { id: 83, name: 'module083' };
}

module.exports = { compute83, describe83 };
