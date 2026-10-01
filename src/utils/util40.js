'use strict';

const clamp40 = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

module.exports = { clamp40 };
