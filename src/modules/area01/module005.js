'use strict';

function compute5(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 5, 0);
}

function describe5() {
  return { id: 5, name: 'module005' };
}

module.exports = { compute5, describe5 };
