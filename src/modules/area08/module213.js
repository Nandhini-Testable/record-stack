'use strict';

function compute213(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 213, 0);
}

function describe213() {
  return { id: 213, name: 'module213' };
}

module.exports = { compute213, describe213 };
