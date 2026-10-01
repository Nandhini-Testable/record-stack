'use strict';

function compute161(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 161, 0);
}

function describe161() {
  return { id: 161, name: 'module161' };
}

module.exports = { compute161, describe161 };
