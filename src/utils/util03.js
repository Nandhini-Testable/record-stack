'use strict';

const clamp3 = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

module.exports = { clamp3 };
