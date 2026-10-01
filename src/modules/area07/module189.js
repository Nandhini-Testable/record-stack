'use strict';

function compute189(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 189, 0);
}

function describe189() {
  return { id: 189, name: 'module189' };
}

module.exports = { compute189, describe189 };
