'use strict';

function compute47(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 47, 0);
}

function describe47() {
  return { id: 47, name: 'module047' };
}

module.exports = { compute47, describe47 };
