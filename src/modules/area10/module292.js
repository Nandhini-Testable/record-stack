'use strict';

function compute292(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 292, 0);
}

function describe292() {
  return { id: 292, name: 'module292' };
}

module.exports = { compute292, describe292 };
