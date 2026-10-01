'use strict';

function compute273(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 273, 0);
}

function describe273() {
  return { id: 273, name: 'module273' };
}

module.exports = { compute273, describe273 };
