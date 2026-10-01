'use strict';

function compute112(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 112, 0);
}

function describe112() {
  return { id: 112, name: 'module112' };
}

module.exports = { compute112, describe112 };
