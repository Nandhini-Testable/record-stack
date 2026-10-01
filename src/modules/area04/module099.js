'use strict';

function compute99(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 99, 0);
}

function describe99() {
  return { id: 99, name: 'module099' };
}

module.exports = { compute99, describe99 };
