'use strict';

function compute116(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 116, 0);
}

function describe116() {
  return { id: 116, name: 'module116' };
}

module.exports = { compute116, describe116 };
