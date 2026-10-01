'use strict';

function compute208(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 208, 0);
}

function describe208() {
  return { id: 208, name: 'module208' };
}

module.exports = { compute208, describe208 };
