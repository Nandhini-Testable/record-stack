'use strict';

function compute158(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 158, 0);
}

function describe158() {
  return { id: 158, name: 'module158' };
}

module.exports = { compute158, describe158 };
