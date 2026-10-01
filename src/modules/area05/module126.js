'use strict';

function compute126(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 126, 0);
}

function describe126() {
  return { id: 126, name: 'module126' };
}

module.exports = { compute126, describe126 };
