'use strict';

function compute284(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 284, 0);
}

function describe284() {
  return { id: 284, name: 'module284' };
}

module.exports = { compute284, describe284 };
