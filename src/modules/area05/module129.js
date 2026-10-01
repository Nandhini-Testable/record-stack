'use strict';

function compute129(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 129, 0);
}

function describe129() {
  return { id: 129, name: 'module129' };
}

module.exports = { compute129, describe129 };
