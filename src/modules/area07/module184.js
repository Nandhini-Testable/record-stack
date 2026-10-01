'use strict';

function compute184(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 184, 0);
}

function describe184() {
  return { id: 184, name: 'module184' };
}

module.exports = { compute184, describe184 };
