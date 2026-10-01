'use strict';

function compute21(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 21, 0);
}

function describe21() {
  return { id: 21, name: 'module021' };
}

module.exports = { compute21, describe21 };
