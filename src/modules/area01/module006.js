'use strict';

function compute6(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 6, 0);
}

function describe6() {
  return { id: 6, name: 'module006' };
}

module.exports = { compute6, describe6 };
