'use strict';

function compute293(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 293, 0);
}

function describe293() {
  return { id: 293, name: 'module293' };
}

module.exports = { compute293, describe293 };
