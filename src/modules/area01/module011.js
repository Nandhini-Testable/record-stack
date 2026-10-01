'use strict';

function compute11(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 11, 0);
}

function describe11() {
  return { id: 11, name: 'module011' };
}

module.exports = { compute11, describe11 };
