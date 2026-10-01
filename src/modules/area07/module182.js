'use strict';

function compute182(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 182, 0);
}

function describe182() {
  return { id: 182, name: 'module182' };
}

module.exports = { compute182, describe182 };
