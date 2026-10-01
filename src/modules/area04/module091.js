'use strict';

function compute91(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  return values.reduce((sum, v) => sum + (Number(v) || 0) * 91, 0);
}

function describe91() {
  return { id: 91, name: 'module091' };
}

module.exports = { compute91, describe91 };
