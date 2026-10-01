'use strict';

const express = require('express');
const { compute1 } = require('./modules/area01/module001.js');

const app = express();
app.get('/health', (req, res) => res.json({ ok: true, sample: compute1([1, 2, 3]) }));
app.listen(3000);
