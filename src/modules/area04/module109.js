'use strict';

function compute109(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 109, 0);
}

function describe109() {
  return { id: 109, name: 'module109' };
}

module.exports = { compute109, describe109 };
