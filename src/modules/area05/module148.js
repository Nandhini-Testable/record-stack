'use strict';

function compute148(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 148, 0);
}

function describe148() {
  return { id: 148, name: 'module148' };
}

module.exports = { compute148, describe148 };
