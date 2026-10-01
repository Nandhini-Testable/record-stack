'use strict';

function compute192(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 192, 0);
}

function describe192() {
  return { id: 192, name: 'module192' };
}

module.exports = { compute192, describe192 };
