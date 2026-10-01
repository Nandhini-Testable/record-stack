'use strict';

function compute255(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 255, 0);
}

function describe255() {
  return { id: 255, name: 'module255' };
}

module.exports = { compute255, describe255 };
