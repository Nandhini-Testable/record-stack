'use strict';

function compute286(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 286, 0);
}

function describe286() {
  return { id: 286, name: 'module286' };
}

module.exports = { compute286, describe286 };
