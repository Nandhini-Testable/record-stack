'use strict';

function compute2(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 2, 0);
}

function describe2() {
  return { id: 2, name: 'module002' };
}

module.exports = { compute2, describe2 };
