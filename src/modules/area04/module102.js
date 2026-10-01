'use strict';

function compute102(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 102, 0);
}

function describe102() {
  return { id: 102, name: 'module102' };
}

module.exports = { compute102, describe102 };
