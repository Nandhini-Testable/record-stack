'use strict';

function compute270(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 270, 0);
}

function describe270() {
  return { id: 270, name: 'module270' };
}

module.exports = { compute270, describe270 };
