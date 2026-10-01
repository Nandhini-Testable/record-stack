'use strict';

function compute199(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 199, 0);
}

function describe199() {
  return { id: 199, name: 'module199' };
}

module.exports = { compute199, describe199 };
