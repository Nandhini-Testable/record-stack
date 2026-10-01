'use strict';

const clamp42 = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

module.exports = { clamp42 };
