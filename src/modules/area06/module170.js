'use strict';

function compute170(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 170, 0);
}

function describe170() {
  return { id: 170, name: 'module170' };
}

module.exports = { compute170, describe170 };
