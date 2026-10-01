'use strict';

function compute12(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 12, 0);
}

function describe12() {
  return { id: 12, name: 'module012' };
}

module.exports = { compute12, describe12 };
