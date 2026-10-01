'use strict';

const clamp23 = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

module.exports = { clamp23 };
