'use strict';

function compute266(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 266, 0);
}

function describe266() {
  return { id: 266, name: 'module266' };
}

module.exports = { compute266, describe266 };
