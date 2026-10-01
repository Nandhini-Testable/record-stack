'use strict';

function compute180(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 180, 0);
}

function describe180() {
  return { id: 180, name: 'module180' };
}

module.exports = { compute180, describe180 };
