'use strict';

function compute31(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 31, 0);
}

function describe31() {
  return { id: 31, name: 'module031' };
}

module.exports = { compute31, describe31 };
