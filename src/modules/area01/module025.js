'use strict';

function compute25(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 25, 0);
}

function describe25() {
  return { id: 25, name: 'module025' };
}

module.exports = { compute25, describe25 };
