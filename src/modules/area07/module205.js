'use strict';

function compute205(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 205, 0);
}

function describe205() {
  return { id: 205, name: 'module205' };
}

module.exports = { compute205, describe205 };
