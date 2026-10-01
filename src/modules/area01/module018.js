'use strict';

function compute18(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 18, 0);
}

function describe18() {
  return { id: 18, name: 'module018' };
}

module.exports = { compute18, describe18 };
