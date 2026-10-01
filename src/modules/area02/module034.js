'use strict';

function compute34(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 34, 0);
}

function describe34() {
  return { id: 34, name: 'module034' };
}

module.exports = { compute34, describe34 };
