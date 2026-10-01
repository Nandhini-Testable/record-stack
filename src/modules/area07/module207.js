'use strict';

function compute207(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 207, 0);
}

function describe207() {
  return { id: 207, name: 'module207' };
}

module.exports = { compute207, describe207 };
