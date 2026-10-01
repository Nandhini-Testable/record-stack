'use strict';

function compute196(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 196, 0);
}

function describe196() {
  return { id: 196, name: 'module196' };
}

module.exports = { compute196, describe196 };
