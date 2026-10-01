'use strict';

function compute82(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 82, 0);
}

function describe82() {
  return { id: 82, name: 'module082' };
}

module.exports = { compute82, describe82 };
