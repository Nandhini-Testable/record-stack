'use strict';

const clamp20 = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

module.exports = { clamp20 };
