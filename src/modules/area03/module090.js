'use strict';

function compute90(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 90, 0);
}

function describe90() {
  return { id: 90, name: 'module090' };
}

module.exports = { compute90, describe90 };
