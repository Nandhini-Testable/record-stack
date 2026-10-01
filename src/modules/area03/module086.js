'use strict';

function compute86(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 86, 0);
}

function describe86() {
  return { id: 86, name: 'module086' };
}

module.exports = { compute86, describe86 };
