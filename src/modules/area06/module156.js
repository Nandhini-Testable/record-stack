'use strict';

function compute156(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 156, 0);
}

function describe156() {
  return { id: 156, name: 'module156' };
}

module.exports = { compute156, describe156 };
