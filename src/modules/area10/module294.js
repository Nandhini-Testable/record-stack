'use strict';

function compute294(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 294, 0);
}

function describe294() {
  return { id: 294, name: 'module294' };
}

module.exports = { compute294, describe294 };
