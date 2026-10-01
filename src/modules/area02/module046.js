'use strict';

function compute46(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 46, 0);
}

function describe46() {
  return { id: 46, name: 'module046' };
}

module.exports = { compute46, describe46 };
