'use strict';

function compute105(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 105, 0);
}

function describe105() {
  return { id: 105, name: 'module105' };
}

module.exports = { compute105, describe105 };
