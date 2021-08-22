const express = require('express');
const registerRouter = require('./routes/registerRoutes');

const app = express();

app.use(`/api/register`, registerRouter);
module.exports = app;