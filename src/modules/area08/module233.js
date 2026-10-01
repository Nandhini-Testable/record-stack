'use strict';

function compute233(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 233, 0);
}

function describe233() {
  return { id: 233, name: 'module233' };
}

module.exports = { compute233, describe233 };
