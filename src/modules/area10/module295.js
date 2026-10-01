'use strict';

function compute295(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 295, 0);
}

function describe295() {
  return { id: 295, name: 'module295' };
}

module.exports = { compute295, describe295 };
