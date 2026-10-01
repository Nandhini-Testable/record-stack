'use strict';

function compute288(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 288, 0);
}

function describe288() {
  return { id: 288, name: 'module288' };
}

module.exports = { compute288, describe288 };
