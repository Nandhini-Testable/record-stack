'use strict';

function compute168(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 168, 0);
}

function describe168() {
  return { id: 168, name: 'module168' };
}

module.exports = { compute168, describe168 };
