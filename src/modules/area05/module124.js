'use strict';

function compute124(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 124, 0);
}

function describe124() {
  return { id: 124, name: 'module124' };
}

module.exports = { compute124, describe124 };
