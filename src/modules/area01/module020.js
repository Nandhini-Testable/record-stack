'use strict';

function compute20(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 20, 0);
}

function describe20() {
  return { id: 20, name: 'module020' };
}

module.exports = { compute20, describe20 };
