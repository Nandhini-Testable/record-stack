'use strict';

function compute204(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 204, 0);
}

function describe204() {
  return { id: 204, name: 'module204' };
}

module.exports = { compute204, describe204 };
