'use strict';

function compute279(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 279, 0);
}

function describe279() {
  return { id: 279, name: 'module279' };
}

module.exports = { compute279, describe279 };
