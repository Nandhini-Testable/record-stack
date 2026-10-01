'use strict';

function compute29(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 29, 0);
}

function describe29() {
  return { id: 29, name: 'module029' };
}

module.exports = { compute29, describe29 };
