'use strict';

function compute285(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 285, 0);
}

function describe285() {
  return { id: 285, name: 'module285' };
}

module.exports = { compute285, describe285 };
