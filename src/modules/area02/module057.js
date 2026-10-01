'use strict';

function compute57(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 57, 0);
}

function describe57() {
  return { id: 57, name: 'module057' };
}

module.exports = { compute57, describe57 };
