'use strict';

function compute45(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 45, 0);
}

function describe45() {
  return { id: 45, name: 'module045' };
}

module.exports = { compute45, describe45 };
