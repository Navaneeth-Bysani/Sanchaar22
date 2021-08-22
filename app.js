const express = require("express");
const cors = require("cors");
const AppError = require("./utils/appError");

const registerRouter = require("./routes/registerRoutes");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json({ limit: "10kb" }));
app.use(`/api/register`, registerRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
