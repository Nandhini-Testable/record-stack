'use strict';

function compute252(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 252, 0);
}

function describe252() {
  return { id: 252, name: 'module252' };
}

module.exports = { compute252, describe252 };
