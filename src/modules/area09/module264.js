'use strict';

function compute264(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 264, 0);
}

function describe264() {
  return { id: 264, name: 'module264' };
}

module.exports = { compute264, describe264 };
