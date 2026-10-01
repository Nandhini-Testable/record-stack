'use strict';

function compute59(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 59, 0);
}

function describe59() {
  return { id: 59, name: 'module059' };
}

module.exports = { compute59, describe59 };
