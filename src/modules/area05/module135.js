'use strict';

function compute135(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 135, 0);
}

function describe135() {
  return { id: 135, name: 'module135' };
}

module.exports = { compute135, describe135 };
