'use strict';

function compute19(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 19, 0);
}

function describe19() {
  return { id: 19, name: 'module019' };
}

module.exports = { compute19, describe19 };
