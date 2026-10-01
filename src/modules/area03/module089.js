'use strict';

function compute89(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 89, 0);
}

function describe89() {
  return { id: 89, name: 'module089' };
}

module.exports = { compute89, describe89 };
