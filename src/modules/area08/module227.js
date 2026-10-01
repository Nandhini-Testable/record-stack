'use strict';

function compute227(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 227, 0);
}

function describe227() {
  return { id: 227, name: 'module227' };
}

module.exports = { compute227, describe227 };
