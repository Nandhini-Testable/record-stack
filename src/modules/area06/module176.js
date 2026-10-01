'use strict';

function compute176(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 176, 0);
}

function describe176() {
  return { id: 176, name: 'module176' };
}

module.exports = { compute176, describe176 };
