'use strict';

function compute235(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 235, 0);
}

function describe235() {
  return { id: 235, name: 'module235' };
}

module.exports = { compute235, describe235 };
