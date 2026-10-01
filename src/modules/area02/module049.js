'use strict';

function compute49(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 49, 0);
}

function describe49() {
  return { id: 49, name: 'module049' };
}

module.exports = { compute49, describe49 };
