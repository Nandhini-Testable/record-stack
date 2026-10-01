'use strict';

function compute40(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 40, 0);
}

function describe40() {
  return { id: 40, name: 'module040' };
}

module.exports = { compute40, describe40 };
