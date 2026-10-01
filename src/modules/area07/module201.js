'use strict';

function compute201(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 201, 0);
}

function describe201() {
  return { id: 201, name: 'module201' };
}

module.exports = { compute201, describe201 };
