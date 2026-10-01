'use strict';

function compute193(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 193, 0);
}

function describe193() {
  return { id: 193, name: 'module193' };
}

module.exports = { compute193, describe193 };
