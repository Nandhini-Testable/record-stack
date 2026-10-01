'use strict';

function compute222(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 222, 0);
}

function describe222() {
  return { id: 222, name: 'module222' };
}

module.exports = { compute222, describe222 };
