'use strict';

function compute282(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 282, 0);
}

function describe282() {
  return { id: 282, name: 'module282' };
}

module.exports = { compute282, describe282 };
