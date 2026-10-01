'use strict';

function compute132(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 132, 0);
}

function describe132() {
  return { id: 132, name: 'module132' };
}

module.exports = { compute132, describe132 };
