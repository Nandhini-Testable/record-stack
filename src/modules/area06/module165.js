'use strict';

function compute165(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 165, 0);
}

function describe165() {
  return { id: 165, name: 'module165' };
}

module.exports = { compute165, describe165 };
