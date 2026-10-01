'use strict';

function compute28(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 28, 0);
}

function describe28() {
  return { id: 28, name: 'module028' };
}

module.exports = { compute28, describe28 };
