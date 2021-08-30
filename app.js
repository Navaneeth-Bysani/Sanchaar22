const express = require("express");
const cors = require("cors");
const AppError = require("./utils/appError");
const path = require("path");
const globalErrorHandler = require("./controllers/errorController");
const registerRouter = require("./routes/registerRoutes");
const middleware = require("./utils/middleware");
const httpsRedirect = require('express-https-redirect');

const app = express();
app.use(cors());

app.use(express.json({ limit: "10kb" }));
app.use(middleware.requestLogger);

app.use(express.static(path.join(__dirname, "client/build")));
app.use('/api/register',httpsRedirect(true));
app.use(`/api/register`, registerRouter);

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
