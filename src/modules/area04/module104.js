'use strict';

function compute104(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 104, 0);
}

function describe104() {
  return { id: 104, name: 'module104' };
}

module.exports = { compute104, describe104 };
