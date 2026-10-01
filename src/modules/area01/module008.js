'use strict';

function compute8(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 8, 0);
}

function describe8() {
  return { id: 8, name: 'module008' };
}

module.exports = { compute8, describe8 };
