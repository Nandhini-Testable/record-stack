'use strict';

function compute147(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 147, 0);
}

function describe147() {
  return { id: 147, name: 'module147' };
}

module.exports = { compute147, describe147 };
