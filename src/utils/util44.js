'use strict';

const clamp44 = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

module.exports = { clamp44 };
