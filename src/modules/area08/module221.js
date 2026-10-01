'use strict';

function compute221(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 221, 0);
}

function describe221() {
  return { id: 221, name: 'module221' };
}

module.exports = { compute221, describe221 };
