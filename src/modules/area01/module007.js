'use strict';

function compute7(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 7, 0);
}

function describe7() {
  return { id: 7, name: 'module007' };
}

module.exports = { compute7, describe7 };
