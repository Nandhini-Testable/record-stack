'use strict';

function compute263(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 263, 0);
}

function describe263() {
  return { id: 263, name: 'module263' };
}

module.exports = { compute263, describe263 };
