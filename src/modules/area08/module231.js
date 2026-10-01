'use strict';

function compute231(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 231, 0);
}

function describe231() {
  return { id: 231, name: 'module231' };
}

module.exports = { compute231, describe231 };
