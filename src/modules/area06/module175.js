'use strict';

function compute175(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 175, 0);
}

function describe175() {
  return { id: 175, name: 'module175' };
}

module.exports = { compute175, describe175 };
