'use strict';

function compute239(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 239, 0);
}

function describe239() {
  return { id: 239, name: 'module239' };
}

module.exports = { compute239, describe239 };
