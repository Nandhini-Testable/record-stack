'use strict';

function compute269(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 269, 0);
}

function describe269() {
  return { id: 269, name: 'module269' };
}

module.exports = { compute269, describe269 };
