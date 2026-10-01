'use strict';

function compute246(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 246, 0);
}

function describe246() {
  return { id: 246, name: 'module246' };
}

module.exports = { compute246, describe246 };
