'use strict';

function compute81(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 81, 0);
}

function describe81() {
  return { id: 81, name: 'module081' };
}

module.exports = { compute81, describe81 };
