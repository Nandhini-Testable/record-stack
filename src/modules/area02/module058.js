'use strict';

function compute58(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 58, 0);
}

function describe58() {
  return { id: 58, name: 'module058' };
}

module.exports = { compute58, describe58 };
