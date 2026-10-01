'use strict';

function compute228(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 228, 0);
}

function describe228() {
  return { id: 228, name: 'module228' };
}

module.exports = { compute228, describe228 };
