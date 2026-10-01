'use strict';

const clamp22 = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

module.exports = { clamp22 };
