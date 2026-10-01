'use strict';

function compute276(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 276, 0);
}

function describe276() {
  return { id: 276, name: 'module276' };
}

module.exports = { compute276, describe276 };
