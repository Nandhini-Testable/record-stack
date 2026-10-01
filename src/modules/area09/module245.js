'use strict';

function compute245(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 245, 0);
}

function describe245() {
  return { id: 245, name: 'module245' };
}

module.exports = { compute245, describe245 };
