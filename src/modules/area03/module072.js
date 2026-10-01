'use strict';

function compute72(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 72, 0);
}

function describe72() {
  return { id: 72, name: 'module072' };
}

module.exports = { compute72, describe72 };
