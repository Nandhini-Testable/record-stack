'use strict';

function compute120(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 120, 0);
}

function describe120() {
  return { id: 120, name: 'module120' };
}

module.exports = { compute120, describe120 };
