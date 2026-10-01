'use strict';

function compute234(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 234, 0);
}

function describe234() {
  return { id: 234, name: 'module234' };
}

module.exports = { compute234, describe234 };
