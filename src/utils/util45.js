'use strict';

const clamp45 = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

module.exports = { clamp45 };
