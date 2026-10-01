'use strict';

function compute300(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 300, 0);
}

function describe300() {
  return { id: 300, name: 'module300' };
}

module.exports = { compute300, describe300 };
