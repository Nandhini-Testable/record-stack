'use strict';

function compute144(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 144, 0);
}

function describe144() {
  return { id: 144, name: 'module144' };
}

module.exports = { compute144, describe144 };
