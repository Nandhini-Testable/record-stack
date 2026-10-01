'use strict';

function compute133(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 133, 0);
}

function describe133() {
  return { id: 133, name: 'module133' };
}

module.exports = { compute133, describe133 };
