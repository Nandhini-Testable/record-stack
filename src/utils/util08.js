'use strict';

const clamp8 = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

module.exports = { clamp8 };
