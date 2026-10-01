'use strict';

function compute224(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 224, 0);
}

function describe224() {
  return { id: 224, name: 'module224' };
}

module.exports = { compute224, describe224 };
