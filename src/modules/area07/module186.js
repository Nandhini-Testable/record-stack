'use strict';

function compute186(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 186, 0);
}

function describe186() {
  return { id: 186, name: 'module186' };
}

module.exports = { compute186, describe186 };
