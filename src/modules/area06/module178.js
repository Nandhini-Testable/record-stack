'use strict';

function compute178(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 178, 0);
}

function describe178() {
  return { id: 178, name: 'module178' };
}

module.exports = { compute178, describe178 };
