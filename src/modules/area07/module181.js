'use strict';

function compute181(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 181, 0);
}

function describe181() {
  return { id: 181, name: 'module181' };
}

module.exports = { compute181, describe181 };
