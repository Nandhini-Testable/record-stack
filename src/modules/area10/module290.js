'use strict';

function compute290(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 290, 0);
}

function describe290() {
  return { id: 290, name: 'module290' };
}

module.exports = { compute290, describe290 };
