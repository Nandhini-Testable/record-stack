'use strict';

function compute298(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 298, 0);
}

function describe298() {
  return { id: 298, name: 'module298' };
}

module.exports = { compute298, describe298 };
