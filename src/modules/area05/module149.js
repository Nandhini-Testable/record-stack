'use strict';

function compute149(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 149, 0);
}

function describe149() {
  return { id: 149, name: 'module149' };
}

module.exports = { compute149, describe149 };
