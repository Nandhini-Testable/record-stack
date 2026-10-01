'use strict';

function compute214(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 214, 0);
}

function describe214() {
  return { id: 214, name: 'module214' };
}

module.exports = { compute214, describe214 };
