'use strict';

function compute22(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 22, 0);
}

function describe22() {
  return { id: 22, name: 'module022' };
}

module.exports = { compute22, describe22 };
