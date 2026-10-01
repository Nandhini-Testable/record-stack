'use strict';

function compute289(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 289, 0);
}

function describe289() {
  return { id: 289, name: 'module289' };
}

module.exports = { compute289, describe289 };
