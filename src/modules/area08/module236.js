'use strict';

function compute236(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 236, 0);
}

function describe236() {
  return { id: 236, name: 'module236' };
}

module.exports = { compute236, describe236 };
