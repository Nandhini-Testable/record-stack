'use strict';

function compute75(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 75, 0);
}

function describe75() {
  return { id: 75, name: 'module075' };
}

module.exports = { compute75, describe75 };
