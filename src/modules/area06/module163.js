'use strict';

function compute163(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 163, 0);
}

function describe163() {
  return { id: 163, name: 'module163' };
}

module.exports = { compute163, describe163 };
