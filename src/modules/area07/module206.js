'use strict';

function compute206(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 206, 0);
}

function describe206() {
  return { id: 206, name: 'module206' };
}

module.exports = { compute206, describe206 };
