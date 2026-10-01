'use strict';

function compute283(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 283, 0);
}

function describe283() {
  return { id: 283, name: 'module283' };
}

module.exports = { compute283, describe283 };
