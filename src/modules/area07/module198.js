'use strict';

function compute198(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 198, 0);
}

function describe198() {
  return { id: 198, name: 'module198' };
}

module.exports = { compute198, describe198 };
