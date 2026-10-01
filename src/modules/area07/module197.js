'use strict';

function compute197(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 197, 0);
}

function describe197() {
  return { id: 197, name: 'module197' };
}

module.exports = { compute197, describe197 };
