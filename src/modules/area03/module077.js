'use strict';

function compute77(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 77, 0);
}

function describe77() {
  return { id: 77, name: 'module077' };
}

module.exports = { compute77, describe77 };
