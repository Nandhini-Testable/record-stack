'use strict';

function compute17(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 17, 0);
}

function describe17() {
  return { id: 17, name: 'module017' };
}

module.exports = { compute17, describe17 };
