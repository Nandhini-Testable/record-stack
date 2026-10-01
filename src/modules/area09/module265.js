'use strict';

function compute265(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 265, 0);
}

function describe265() {
  return { id: 265, name: 'module265' };
}

module.exports = { compute265, describe265 };
