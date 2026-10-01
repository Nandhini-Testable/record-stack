'use strict';

function compute142(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 142, 0);
}

function describe142() {
  return { id: 142, name: 'module142' };
}

module.exports = { compute142, describe142 };
