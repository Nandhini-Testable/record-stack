'use strict';

function compute60(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 60, 0);
}

function describe60() {
  return { id: 60, name: 'module060' };
}

module.exports = { compute60, describe60 };
