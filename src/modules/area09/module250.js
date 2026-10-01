'use strict';

function compute250(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 250, 0);
}

function describe250() {
  return { id: 250, name: 'module250' };
}

module.exports = { compute250, describe250 };
