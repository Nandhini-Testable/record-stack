'use strict';

function compute65(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 65, 0);
}

function describe65() {
  return { id: 65, name: 'module065' };
}

module.exports = { compute65, describe65 };
