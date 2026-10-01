'use strict';

function compute107(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 107, 0);
}

function describe107() {
  return { id: 107, name: 'module107' };
}

module.exports = { compute107, describe107 };
