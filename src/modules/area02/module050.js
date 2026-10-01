'use strict';

function compute50(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 50, 0);
}

function describe50() {
  return { id: 50, name: 'module050' };
}

module.exports = { compute50, describe50 };
