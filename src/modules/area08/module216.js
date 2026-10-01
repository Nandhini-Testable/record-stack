'use strict';

function compute216(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 216, 0);
}

function describe216() {
  return { id: 216, name: 'module216' };
}

module.exports = { compute216, describe216 };
