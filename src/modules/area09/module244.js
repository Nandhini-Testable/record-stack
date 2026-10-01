'use strict';

function compute244(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 244, 0);
}

function describe244() {
  return { id: 244, name: 'module244' };
}

module.exports = { compute244, describe244 };
