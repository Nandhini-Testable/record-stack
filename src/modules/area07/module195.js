'use strict';

function compute195(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 195, 0);
}

function describe195() {
  return { id: 195, name: 'module195' };
}

module.exports = { compute195, describe195 };
