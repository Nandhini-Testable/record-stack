'use strict';

function compute24(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 24, 0);
}

function describe24() {
  return { id: 24, name: 'module024' };
}

module.exports = { compute24, describe24 };
