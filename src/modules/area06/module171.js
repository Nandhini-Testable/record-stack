'use strict';

function compute171(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 171, 0);
}

function describe171() {
  return { id: 171, name: 'module171' };
}

module.exports = { compute171, describe171 };
