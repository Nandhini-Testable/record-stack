'use strict';

function compute74(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 74, 0);
}

function describe74() {
  return { id: 74, name: 'module074' };
}

module.exports = { compute74, describe74 };
