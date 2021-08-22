const express = require('express');
const registerRouter = require('./routes/registerRoutes');

const app = express();
app.use(express.json({limit : '10kb'}));
app.use(`/api/register`, registerRouter);
module.exports = app;