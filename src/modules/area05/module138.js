'use strict';

function compute138(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 138, 0);
}

function describe138() {
  return { id: 138, name: 'module138' };
}

module.exports = { compute138, describe138 };
