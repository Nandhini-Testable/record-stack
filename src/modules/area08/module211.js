'use strict';

function compute211(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 211, 0);
}

function describe211() {
  return { id: 211, name: 'module211' };
}

module.exports = { compute211, describe211 };
