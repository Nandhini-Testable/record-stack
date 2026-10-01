'use strict';

function compute137(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 137, 0);
}

function describe137() {
  return { id: 137, name: 'module137' };
}

module.exports = { compute137, describe137 };
