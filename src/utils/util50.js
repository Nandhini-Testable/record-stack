'use strict';

const clamp50 = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

module.exports = { clamp50 };
