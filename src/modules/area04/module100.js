'use strict';

function compute100(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 100, 0);
}

function describe100() {
  return { id: 100, name: 'module100' };
}

module.exports = { compute100, describe100 };
