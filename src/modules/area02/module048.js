'use strict';

function compute48(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 48, 0);
}

function describe48() {
  return { id: 48, name: 'module048' };
}

module.exports = { compute48, describe48 };
