'use strict';

function compute187(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 187, 0);
}

function describe187() {
  return { id: 187, name: 'module187' };
}

module.exports = { compute187, describe187 };
