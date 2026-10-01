'use strict';

const clamp11 = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

module.exports = { clamp11 };
