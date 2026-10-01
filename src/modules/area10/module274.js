'use strict';

function compute274(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 274, 0);
}

function describe274() {
  return { id: 274, name: 'module274' };
}

module.exports = { compute274, describe274 };
