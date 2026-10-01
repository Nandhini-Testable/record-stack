'use strict';

const clamp16 = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

module.exports = { clamp16 };
