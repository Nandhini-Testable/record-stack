'use strict';

function compute160(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 160, 0);
}

function describe160() {
  return { id: 160, name: 'module160' };
}

module.exports = { compute160, describe160 };
