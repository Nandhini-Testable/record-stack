'use strict';

function compute297(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 297, 0);
}

function describe297() {
  return { id: 297, name: 'module297' };
}

module.exports = { compute297, describe297 };
