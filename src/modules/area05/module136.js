'use strict';

function compute136(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 136, 0);
}

function describe136() {
  return { id: 136, name: 'module136' };
}

module.exports = { compute136, describe136 };
