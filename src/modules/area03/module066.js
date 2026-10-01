'use strict';

function compute66(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 66, 0);
}

function describe66() {
  return { id: 66, name: 'module066' };
}

module.exports = { compute66, describe66 };
