'use strict';

function compute238(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 238, 0);
}

function describe238() {
  return { id: 238, name: 'module238' };
}

module.exports = { compute238, describe238 };
