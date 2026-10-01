'use strict';

function compute146(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 146, 0);
}

function describe146() {
  return { id: 146, name: 'module146' };
}

module.exports = { compute146, describe146 };
