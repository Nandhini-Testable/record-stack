'use strict';

function compute267(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 267, 0);
}

function describe267() {
  return { id: 267, name: 'module267' };
}

module.exports = { compute267, describe267 };
