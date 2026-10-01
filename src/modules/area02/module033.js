'use strict';

function compute33(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 33, 0);
}

function describe33() {
  return { id: 33, name: 'module033' };
}

module.exports = { compute33, describe33 };
