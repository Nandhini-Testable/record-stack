'use strict';

function compute259(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 259, 0);
}

function describe259() {
  return { id: 259, name: 'module259' };
}

module.exports = { compute259, describe259 };
