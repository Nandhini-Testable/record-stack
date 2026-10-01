'use strict';

function compute70(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 70, 0);
}

function describe70() {
  return { id: 70, name: 'module070' };
}

module.exports = { compute70, describe70 };
