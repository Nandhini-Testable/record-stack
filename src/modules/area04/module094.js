'use strict';

function compute94(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 94, 0);
}

function describe94() {
  return { id: 94, name: 'module094' };
}

module.exports = { compute94, describe94 };
