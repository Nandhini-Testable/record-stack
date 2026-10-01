'use strict';

function compute200(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 200, 0);
}

function describe200() {
  return { id: 200, name: 'module200' };
}

module.exports = { compute200, describe200 };
