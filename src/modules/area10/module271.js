'use strict';

function compute271(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 271, 0);
}

function describe271() {
  return { id: 271, name: 'module271' };
}

module.exports = { compute271, describe271 };
