'use strict';

function compute220(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 220, 0);
}

function describe220() {
  return { id: 220, name: 'module220' };
}

module.exports = { compute220, describe220 };
