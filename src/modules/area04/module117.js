'use strict';

function compute117(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 117, 0);
}

function describe117() {
  return { id: 117, name: 'module117' };
}

module.exports = { compute117, describe117 };
