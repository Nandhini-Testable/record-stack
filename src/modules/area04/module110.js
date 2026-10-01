'use strict';

function compute110(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 110, 0);
}

function describe110() {
  return { id: 110, name: 'module110' };
}

module.exports = { compute110, describe110 };
