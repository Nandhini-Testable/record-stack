'use strict';

function compute242(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 242, 0);
}

function describe242() {
  return { id: 242, name: 'module242' };
}

module.exports = { compute242, describe242 };
