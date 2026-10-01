'use strict';

const clamp24 = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

module.exports = { clamp24 };
