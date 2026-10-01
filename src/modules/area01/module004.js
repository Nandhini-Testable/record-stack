'use strict';

function compute4(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 4, 0);
}

function describe4() {
  return { id: 4, name: 'module004' };
}

module.exports = { compute4, describe4 };
