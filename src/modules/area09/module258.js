'use strict';

function compute258(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 258, 0);
}

function describe258() {
  return { id: 258, name: 'module258' };
}

module.exports = { compute258, describe258 };
