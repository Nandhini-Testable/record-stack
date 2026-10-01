'use strict';

function compute217(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 217, 0);
}

function describe217() {
  return { id: 217, name: 'module217' };
}

module.exports = { compute217, describe217 };
