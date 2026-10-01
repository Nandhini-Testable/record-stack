'use strict';

function compute215(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 215, 0);
}

function describe215() {
  return { id: 215, name: 'module215' };
}

module.exports = { compute215, describe215 };
