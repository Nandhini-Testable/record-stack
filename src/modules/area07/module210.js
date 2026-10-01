'use strict';

function compute210(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 210, 0);
}

function describe210() {
  return { id: 210, name: 'module210' };
}

module.exports = { compute210, describe210 };
