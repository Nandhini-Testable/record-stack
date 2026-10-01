'use strict';

function compute152(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 152, 0);
}

function describe152() {
  return { id: 152, name: 'module152' };
}

module.exports = { compute152, describe152 };
