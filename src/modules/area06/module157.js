'use strict';

function compute157(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 157, 0);
}

function describe157() {
  return { id: 157, name: 'module157' };
}

module.exports = { compute157, describe157 };
