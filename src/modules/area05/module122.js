'use strict';

function compute122(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 122, 0);
}

function describe122() {
  return { id: 122, name: 'module122' };
}

module.exports = { compute122, describe122 };
