'use strict';

function compute26(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 26, 0);
}

function describe26() {
  return { id: 26, name: 'module026' };
}

module.exports = { compute26, describe26 };
