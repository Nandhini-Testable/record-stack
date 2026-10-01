'use strict';

function compute101(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 101, 0);
}

function describe101() {
  return { id: 101, name: 'module101' };
}

module.exports = { compute101, describe101 };
