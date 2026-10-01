'use strict';

function compute185(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 185, 0);
}

function describe185() {
  return { id: 185, name: 'module185' };
}

module.exports = { compute185, describe185 };
