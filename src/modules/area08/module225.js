'use strict';

function compute225(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 225, 0);
}

function describe225() {
  return { id: 225, name: 'module225' };
}

module.exports = { compute225, describe225 };
