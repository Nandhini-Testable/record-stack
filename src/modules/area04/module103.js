'use strict';

function compute103(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 103, 0);
}

function describe103() {
  return { id: 103, name: 'module103' };
}

module.exports = { compute103, describe103 };
