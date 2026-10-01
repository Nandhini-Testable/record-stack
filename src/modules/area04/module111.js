'use strict';

function compute111(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 111, 0);
}

function describe111() {
  return { id: 111, name: 'module111' };
}

module.exports = { compute111, describe111 };
