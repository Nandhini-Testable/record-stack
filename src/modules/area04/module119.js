'use strict';

function compute119(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 119, 0);
}

function describe119() {
  return { id: 119, name: 'module119' };
}

module.exports = { compute119, describe119 };
