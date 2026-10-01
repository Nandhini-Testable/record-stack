'use strict';

function compute278(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 278, 0);
}

function describe278() {
  return { id: 278, name: 'module278' };
}

module.exports = { compute278, describe278 };
