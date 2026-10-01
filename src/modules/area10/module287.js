'use strict';

function compute287(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 287, 0);
}

function describe287() {
  return { id: 287, name: 'module287' };
}

module.exports = { compute287, describe287 };
