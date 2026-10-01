'use strict';

function compute37(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 37, 0);
}

function describe37() {
  return { id: 37, name: 'module037' };
}

module.exports = { compute37, describe37 };
