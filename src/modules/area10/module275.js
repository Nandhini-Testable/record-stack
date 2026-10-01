'use strict';

function compute275(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 275, 0);
}

function describe275() {
  return { id: 275, name: 'module275' };
}

module.exports = { compute275, describe275 };
