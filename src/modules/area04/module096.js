'use strict';

function compute96(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 96, 0);
}

function describe96() {
  return { id: 96, name: 'module096' };
}

module.exports = { compute96, describe96 };
