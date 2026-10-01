'use strict';

function compute106(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 106, 0);
}

function describe106() {
  return { id: 106, name: 'module106' };
}

module.exports = { compute106, describe106 };
