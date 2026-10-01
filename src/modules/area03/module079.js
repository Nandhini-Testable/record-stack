'use strict';

function compute79(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 79, 0);
}

function describe79() {
  return { id: 79, name: 'module079' };
}

module.exports = { compute79, describe79 };
