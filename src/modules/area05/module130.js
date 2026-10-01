'use strict';

function compute130(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 130, 0);
}

function describe130() {
  return { id: 130, name: 'module130' };
}

module.exports = { compute130, describe130 };
