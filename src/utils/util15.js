'use strict';

const clamp15 = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

module.exports = { clamp15 };
