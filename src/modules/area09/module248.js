'use strict';

function compute248(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 248, 0);
}

function describe248() {
  return { id: 248, name: 'module248' };
}

module.exports = { compute248, describe248 };
