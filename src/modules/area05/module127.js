'use strict';

function compute127(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 127, 0);
}

function describe127() {
  return { id: 127, name: 'module127' };
}

module.exports = { compute127, describe127 };
