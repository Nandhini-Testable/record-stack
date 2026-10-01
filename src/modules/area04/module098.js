'use strict';

function compute98(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 98, 0);
}

function describe98() {
  return { id: 98, name: 'module098' };
}

module.exports = { compute98, describe98 };
