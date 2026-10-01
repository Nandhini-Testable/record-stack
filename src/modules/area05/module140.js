'use strict';

function compute140(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 140, 0);
}

function describe140() {
  return { id: 140, name: 'module140' };
}

module.exports = { compute140, describe140 };
