'use strict';

function compute159(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 159, 0);
}

function describe159() {
  return { id: 159, name: 'module159' };
}

module.exports = { compute159, describe159 };
