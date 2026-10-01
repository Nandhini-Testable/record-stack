'use strict';

const clamp10 = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

module.exports = { clamp10 };
