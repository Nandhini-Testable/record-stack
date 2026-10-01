'use strict';

function compute218(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 218, 0);
}

function describe218() {
  return { id: 218, name: 'module218' };
}

module.exports = { compute218, describe218 };
