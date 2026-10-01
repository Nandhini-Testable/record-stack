'use strict';

function compute121(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 121, 0);
}

function describe121() {
  return { id: 121, name: 'module121' };
}

module.exports = { compute121, describe121 };
