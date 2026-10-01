'use strict';

function compute38(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 38, 0);
}

function describe38() {
  return { id: 38, name: 'module038' };
}

module.exports = { compute38, describe38 };
