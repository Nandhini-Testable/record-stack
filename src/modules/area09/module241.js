'use strict';

function compute241(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 241, 0);
}

function describe241() {
  return { id: 241, name: 'module241' };
}

module.exports = { compute241, describe241 };
