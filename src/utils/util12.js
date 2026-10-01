'use strict';

const clamp12 = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

module.exports = { clamp12 };
