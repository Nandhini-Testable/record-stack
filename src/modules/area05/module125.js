'use strict';

function compute125(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 125, 0);
}

function describe125() {
  return { id: 125, name: 'module125' };
}

module.exports = { compute125, describe125 };
