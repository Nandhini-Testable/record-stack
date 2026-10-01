'use strict';

function compute39(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 39, 0);
}

function describe39() {
  return { id: 39, name: 'module039' };
}

module.exports = { compute39, describe39 };
