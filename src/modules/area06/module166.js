'use strict';

function compute166(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 166, 0);
}

function describe166() {
  return { id: 166, name: 'module166' };
}

module.exports = { compute166, describe166 };
