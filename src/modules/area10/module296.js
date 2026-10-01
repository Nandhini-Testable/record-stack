'use strict';

function compute296(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 296, 0);
}

function describe296() {
  return { id: 296, name: 'module296' };
}

module.exports = { compute296, describe296 };
