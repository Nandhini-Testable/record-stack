'use strict';

function compute51(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 51, 0);
}

function describe51() {
  return { id: 51, name: 'module051' };
}

module.exports = { compute51, describe51 };
