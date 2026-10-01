'use strict';

function compute139(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 139, 0);
}

function describe139() {
  return { id: 139, name: 'module139' };
}

module.exports = { compute139, describe139 };
