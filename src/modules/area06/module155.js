'use strict';

function compute155(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 155, 0);
}

function describe155() {
  return { id: 155, name: 'module155' };
}

module.exports = { compute155, describe155 };
