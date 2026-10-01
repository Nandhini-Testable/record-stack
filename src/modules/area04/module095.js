'use strict';

function compute95(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 95, 0);
}

function describe95() {
  return { id: 95, name: 'module095' };
}

module.exports = { compute95, describe95 };
