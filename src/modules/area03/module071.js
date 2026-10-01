'use strict';

function compute71(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 71, 0);
}

function describe71() {
  return { id: 71, name: 'module071' };
}

module.exports = { compute71, describe71 };
