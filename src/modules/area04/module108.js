'use strict';

function compute108(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 108, 0);
}

function describe108() {
  return { id: 108, name: 'module108' };
}

module.exports = { compute108, describe108 };
