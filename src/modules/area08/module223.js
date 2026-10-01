'use strict';

function compute223(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 223, 0);
}

function describe223() {
  return { id: 223, name: 'module223' };
}

module.exports = { compute223, describe223 };
