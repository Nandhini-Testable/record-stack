'use strict';

function compute280(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 280, 0);
}

function describe280() {
  return { id: 280, name: 'module280' };
}

module.exports = { compute280, describe280 };
