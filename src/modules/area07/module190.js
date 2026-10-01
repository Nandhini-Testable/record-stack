'use strict';

function compute190(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 190, 0);
}

function describe190() {
  return { id: 190, name: 'module190' };
}

module.exports = { compute190, describe190 };
