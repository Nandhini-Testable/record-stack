'use strict';

function compute78(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 78, 0);
}

function describe78() {
  return { id: 78, name: 'module078' };
}

module.exports = { compute78, describe78 };
