'use strict';

function compute194(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 194, 0);
}

function describe194() {
  return { id: 194, name: 'module194' };
}

module.exports = { compute194, describe194 };
