'use strict';

function compute188(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 188, 0);
}

function describe188() {
  return { id: 188, name: 'module188' };
}

module.exports = { compute188, describe188 };
