'use strict';

function compute14(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 14, 0);
}

function describe14() {
  return { id: 14, name: 'module014' };
}

module.exports = { compute14, describe14 };
