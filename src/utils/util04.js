'use strict';

const clamp4 = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

module.exports = { clamp4 };
