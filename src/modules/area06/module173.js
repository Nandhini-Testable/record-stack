'use strict';

function compute173(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 173, 0);
}

function describe173() {
  return { id: 173, name: 'module173' };
}

module.exports = { compute173, describe173 };
