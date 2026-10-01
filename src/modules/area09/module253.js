'use strict';

function compute253(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 253, 0);
}

function describe253() {
  return { id: 253, name: 'module253' };
}

module.exports = { compute253, describe253 };
