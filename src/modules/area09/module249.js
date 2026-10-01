'use strict';

function compute249(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 249, 0);
}

function describe249() {
  return { id: 249, name: 'module249' };
}

module.exports = { compute249, describe249 };
