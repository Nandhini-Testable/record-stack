'use strict';

function compute172(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 172, 0);
}

function describe172() {
  return { id: 172, name: 'module172' };
}

module.exports = { compute172, describe172 };
