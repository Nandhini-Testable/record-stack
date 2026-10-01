'use strict';

const clamp30 = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

module.exports = { clamp30 };
