'use strict';

function compute35(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 35, 0);
}

function describe35() {
  return { id: 35, name: 'module035' };
}

module.exports = { compute35, describe35 };
