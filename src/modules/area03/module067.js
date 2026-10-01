'use strict';

function compute67(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 67, 0);
}

function describe67() {
  return { id: 67, name: 'module067' };
}

module.exports = { compute67, describe67 };
