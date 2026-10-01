'use strict';

const clamp25 = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

module.exports = { clamp25 };
