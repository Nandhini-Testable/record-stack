'use strict';

function compute118(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 118, 0);
}

function describe118() {
  return { id: 118, name: 'module118' };
}

module.exports = { compute118, describe118 };
