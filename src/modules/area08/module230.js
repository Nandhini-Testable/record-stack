'use strict';

function compute230(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 230, 0);
}

function describe230() {
  return { id: 230, name: 'module230' };
}

module.exports = { compute230, describe230 };
