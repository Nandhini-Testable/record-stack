'use strict';

function compute41(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 41, 0);
}

function describe41() {
  return { id: 41, name: 'module041' };
}

module.exports = { compute41, describe41 };
