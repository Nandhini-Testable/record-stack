'use strict';

function compute115(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 115, 0);
}

function describe115() {
  return { id: 115, name: 'module115' };
}

module.exports = { compute115, describe115 };
