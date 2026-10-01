'use strict';

function compute262(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 262, 0);
}

function describe262() {
  return { id: 262, name: 'module262' };
}

module.exports = { compute262, describe262 };
