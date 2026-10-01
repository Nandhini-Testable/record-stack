'use strict';

function compute9(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 9, 0);
}

function describe9() {
  return { id: 9, name: 'module009' };
}

module.exports = { compute9, describe9 };
