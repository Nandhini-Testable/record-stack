'use strict';

function compute43(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 43, 0);
}

function describe43() {
  return { id: 43, name: 'module043' };
}

module.exports = { compute43, describe43 };
