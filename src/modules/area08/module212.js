'use strict';

function compute212(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 212, 0);
}

function describe212() {
  return { id: 212, name: 'module212' };
}

module.exports = { compute212, describe212 };
