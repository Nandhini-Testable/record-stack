'use strict';

function compute3(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 3, 0);
}

function describe3() {
  return { id: 3, name: 'module003' };
}

module.exports = { compute3, describe3 };
