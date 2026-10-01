'use strict';

function compute27(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 27, 0);
}

function describe27() {
  return { id: 27, name: 'module027' };
}

module.exports = { compute27, describe27 };
