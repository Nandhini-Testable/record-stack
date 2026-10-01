'use strict';

function compute177(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 177, 0);
}

function describe177() {
  return { id: 177, name: 'module177' };
}

module.exports = { compute177, describe177 };
