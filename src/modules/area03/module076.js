'use strict';

function compute76(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 76, 0);
}

function describe76() {
  return { id: 76, name: 'module076' };
}

module.exports = { compute76, describe76 };
