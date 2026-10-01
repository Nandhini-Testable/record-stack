'use strict';

function compute226(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 226, 0);
}

function describe226() {
  return { id: 226, name: 'module226' };
}

module.exports = { compute226, describe226 };
