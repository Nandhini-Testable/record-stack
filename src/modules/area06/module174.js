'use strict';

function compute174(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 174, 0);
}

function describe174() {
  return { id: 174, name: 'module174' };
}

module.exports = { compute174, describe174 };
