'use strict';

function compute203(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 203, 0);
}

function describe203() {
  return { id: 203, name: 'module203' };
}

module.exports = { compute203, describe203 };
