'use strict';

function compute85(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 85, 0);
}

function describe85() {
  return { id: 85, name: 'module085' };
}

module.exports = { compute85, describe85 };
