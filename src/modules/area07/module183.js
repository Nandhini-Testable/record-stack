'use strict';

function compute183(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 183, 0);
}

function describe183() {
  return { id: 183, name: 'module183' };
}

module.exports = { compute183, describe183 };
