'use strict';

function compute93(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 93, 0);
}

function describe93() {
  return { id: 93, name: 'module093' };
}

module.exports = { compute93, describe93 };
