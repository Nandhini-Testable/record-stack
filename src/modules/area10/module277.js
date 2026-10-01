'use strict';

function compute277(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 277, 0);
}

function describe277() {
  return { id: 277, name: 'module277' };
}

module.exports = { compute277, describe277 };
