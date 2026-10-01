'use strict';

function compute260(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 260, 0);
}

function describe260() {
  return { id: 260, name: 'module260' };
}

module.exports = { compute260, describe260 };
