'use strict';

function compute73(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 73, 0);
}

function describe73() {
  return { id: 73, name: 'module073' };
}

module.exports = { compute73, describe73 };
