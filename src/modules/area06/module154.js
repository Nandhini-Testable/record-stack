'use strict';

function compute154(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 154, 0);
}

function describe154() {
  return { id: 154, name: 'module154' };
}

module.exports = { compute154, describe154 };
