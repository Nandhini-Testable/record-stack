'use strict';

function compute191(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 191, 0);
}

function describe191() {
  return { id: 191, name: 'module191' };
}

module.exports = { compute191, describe191 };
